const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const URL_TITLE_CACHE_FILE = path.join(__dirname, '..', '.url_title_cache.json');

// URL 제목 캐시 로드
function loadUrlTitleCache() {
  try {
    if (fs.existsSync(URL_TITLE_CACHE_FILE)) {
      const cache = JSON.parse(fs.readFileSync(URL_TITLE_CACHE_FILE, 'utf8'));
      console.log('📦 Loaded URL title cache with', Object.keys(cache).length, 'entries');
      return cache;
    }
  } catch (error) {
    console.log('⚠️ URL title cache load error:', error.message);
  }
  return {};
}

// URL 제목 캐시 저장
function saveUrlTitleCache(cache) {
  try {
    fs.writeFileSync(URL_TITLE_CACHE_FILE, JSON.stringify(cache, null, 2));
    console.log('💾 Saved URL title cache');
  } catch (error) {
    console.error('❌ URL title cache save error:', error.message);
  }
}

// URL에서 페이지 제목 추출
async function fetchPageTitle(url, cache) {
  // 캐시에서 먼저 확인
  if (cache[url]) {
    console.log('  📦 Using cached title');
    return cache[url];
  }

  return new Promise((resolve) => {
    try {
      const urlObj = new URL(url);
      const protocol = urlObj.protocol === 'https:' ? https : http;

      const options = {
        hostname: urlObj.hostname,
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NotionSync/1.0)',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
        },
        timeout: 10000
      };

      const req = protocol.request(options, (res) => {
        // Handle redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          console.log('  🔄 Redirecting...');
          fetchPageTitle(res.headers.location, cache).then(resolve);
          return;
        }

        if (res.statusCode !== 200) {
          console.warn(`  ⚠️ HTTP ${res.statusCode}`);
          resolve(null);
          return;
        }

        let html = '';
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
          html += chunk;
          if (html.includes('</title>')) {
            res.destroy();
          }
        });

        res.on('end', () => {
          try {
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
            if (titleMatch && titleMatch[1]) {
              let title = titleMatch[1]
                .trim()
                .replace(/\s+/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'");

              console.log('  ✅ Fetched:', title);
              cache[url] = title;
              saveUrlTitleCache(cache);
              resolve(title);
            } else {
              console.warn('  ⚠️ No title found');
              resolve(null);
            }
          } catch (error) {
            console.error('  ❌ Parse error:', error.message);
            resolve(null);
          }
        });
      });

      req.on('error', (error) => {
        console.error('  ❌ Request error:', error.message);
        resolve(null);
      });

      req.on('timeout', () => {
        console.error('  ❌ Timeout');
        req.destroy();
        resolve(null);
      });

      req.end();
    } catch (error) {
      console.error('  ❌ Invalid URL:', error.message);
      resolve(null);
    }
  });
}

// 마크다운 파일에서 [URL](URL) 패턴 찾기 및 변환
async function enhanceMarkdownFile(filePath, cache) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern: [URL](URL) where URL is the same in both places
    // 이모지가 있는 경우도 처리하지만, 결과에서는 제거
    const urlPattern = /(?:🔗\s*)?\[(https?:\/\/[^\]]+)\]\((https?:\/\/[^\)]+)\)/g;

    const matches = [...content.matchAll(urlPattern)];

    for (const match of matches) {
      const linkText = match[1];
      const linkUrl = match[2];

      // Only process if link text equals link URL
      if (linkText === linkUrl) {
        console.log('\n🔗 Found URL-only link:', linkUrl);

        const title = await fetchPageTitle(linkUrl, cache);

        if (title) {
          // Replace with title without emoji
          const replacement = `[${title}](${linkUrl})`;

          content = content.replace(match[0], replacement);
          modified = true;
          console.log('  ✅ Replaced with title');
        } else {
          // If title fetch fails, still remove emoji if present
          const hasEmoji = match[0].startsWith('🔗');
          if (hasEmoji) {
            const replacement = `[${linkUrl}](${linkUrl})`;
            content = content.replace(match[0], replacement);
            modified = true;
            console.log('  ⚠️ Removed emoji (title fetch failed)');
          }
        }

        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('✅ Updated:', filePath);
      return true;
    }

    return false;
  } catch (error) {
    console.error('❌ Error processing', filePath, ':', error.message);
    return false;
  }
}

// 디렉토리 재귀 탐색
async function processDirectory(dir, cache) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let updatedCount = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      updatedCount += await processDirectory(fullPath, cache);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const updated = await enhanceMarkdownFile(fullPath, cache);
      if (updated) updatedCount++;
    }
  }

  return updatedCount;
}

// Main execution
async function main() {
  console.log('🚀 Starting URL enhancement process...\n');

  const cache = loadUrlTitleCache();
  const updatedCount = await processDirectory(CONTENT_DIR, cache);

  console.log('\n✅ Process complete!');
  console.log(`📊 Updated ${updatedCount} file(s)`);
  console.log(`📦 Cache now has ${Object.keys(cache).length} entries`);
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

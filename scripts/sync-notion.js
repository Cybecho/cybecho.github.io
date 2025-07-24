const { Client } = require('@notionhq/client');
const fs = require('fs');
const crypto = require('crypto');
const https = require('https');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_SECRET });
const CACHE_FILE = 'notion_cache.json';

function loadCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    }
  } catch (error) {
    console.log('Cache load error:', error.message);
  }
  return {};
}

function saveCache(cache) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    console.log('Cache saved successfully');
  } catch (error) {
    console.error('Cache save error:', error.message);
  }
}

function createSafeYamlString(str) {
  if (!str) return '""';
  
  let safe = str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .replace(/\r/g, ' ')
    .replace(/\t/g, ' ')
    .replace(/[\x00-\x1f\x7f-\x9f]/g, '');
  
  return `"${safe}"`;
}

function formatDate(dateString) {
  if (!dateString) return new Date().toISOString();
  return new Date(dateString).toISOString();
}

// 🎯 제목 완전 보존을 위한 새로운 슬러그 생성
function createSlug(title) {
  const hash = crypto.createHash('md5').update(title).digest('hex').substring(0, 8);
  
  let slug = title
    .trim()
    // 파일시스템 위험 문자만 교체 (나머지는 모두 보존)
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  // 빈 슬러그나 너무 긴 경우 처리
  if (!slug) {
    slug = 'post-' + hash;
  } else if (slug.length > 100) {
    slug = slug.substring(0, 90) + '-' + hash;
  }
  
  return slug;
}

// 이미지 다운로드 함수
async function downloadImage(imageUrl, imagePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(imagePath);
    
    https.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(imagePath);
      });
      
      file.on('error', (err) => {
        fs.unlink(imagePath, () => {}); // 실패시 파일 삭제
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// 이미지 파일명 생성 함수
function createImageFilename(imageUrl) {
  const urlHash = crypto.createHash('md5').update(imageUrl).digest('hex').substring(0, 12);
  const extension = imageUrl.includes('.png') ? '.png' : 
                   imageUrl.includes('.jpg') ? '.jpg' : 
                   imageUrl.includes('.jpeg') ? '.jpeg' : 
                   imageUrl.includes('.gif') ? '.gif' : 
                   imageUrl.includes('.webp') ? '.webp' : '.png';
  return `image_${urlHash}${extension}`;
}

function convertRichText(richTextArray) {
  if (!richTextArray || !Array.isArray(richTextArray)) return '';
  return richTextArray.map(textObj => {
    let text = textObj.plain_text || '';
    if (textObj.annotations?.bold) text = `**${text}**`;
    if (textObj.annotations?.italic) text = `*${text}*`;
    if (textObj.annotations?.code) text = '`' + text + '`';
    if (textObj.annotations?.strikethrough) text = `~~${text}~~`;
    if (textObj.annotations?.underline) text = `<u>${text}</u>`;
    if (textObj.href) text = `[${text}](${textObj.href})`;
    return text;
  }).join('');
}

async function convertBlocks(pageId, postDir, indentLevel = 0) {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100
    });

    let content = '';
    const indent = '  '.repeat(indentLevel); // 들여쓰기용 공백
    
    for (const block of blocks.results) {
      switch (block.type) {
        case 'paragraph':
          if (block.paragraph?.rich_text?.length > 0) {
            content += indent + convertRichText(block.paragraph.rich_text) + '\n\n';
          } else {
            content += '\n';
          }
          break;
          
        case 'heading_1':
          if (block.heading_1?.rich_text?.length > 0) {
            content += '# ' + convertRichText(block.heading_1.rich_text) + '\n\n';
          }
          break;
          
        case 'heading_2':
          if (block.heading_2?.rich_text?.length > 0) {
            content += '## ' + convertRichText(block.heading_2.rich_text) + '\n\n';
          }
          break;
          
        case 'heading_3':
          if (block.heading_3?.rich_text?.length > 0) {
            content += '### ' + convertRichText(block.heading_3.rich_text) + '\n\n';
          }
          break;
          
        case 'bulleted_list_item':
          if (block.bulleted_list_item?.rich_text?.length > 0) {
            content += indent + '- ' + convertRichText(block.bulleted_list_item.rich_text) + '\n';
            
            // 중첩된 불릿포인트 처리
            if (block.has_children) {
              const childContent = await convertBlocks(block.id, postDir, indentLevel + 1);
              content += childContent;
            }
          }
          break;
          
        case 'numbered_list_item':
          if (block.numbered_list_item?.rich_text?.length > 0) {
            content += indent + '1. ' + convertRichText(block.numbered_list_item.rich_text) + '\n';
            
            // 중첩된 번호 목록 처리
            if (block.has_children) {
              const childContent = await convertBlocks(block.id, postDir, indentLevel + 1);
              content += childContent;
            }
          }
          break;
          
        case 'toggle':
          if (block.toggle?.rich_text?.length > 0) {
            const toggleText = convertRichText(block.toggle.rich_text);
            
            // 제목 토글인지 확인 (# ## ### 으로 시작하는지 체크)
            const headingMatch = toggleText.match(/^(#{1,3})\s+(.+)/);
            
            if (headingMatch) {
              // 제목 토글의 경우: 토글 기능 제거하고 제목만 표시
              content += headingMatch[1] + ' ' + headingMatch[2] + '\n\n';
              
              // 제목 토글 내부 컨텐츠를 일반 컨텐츠로 처리
              if (block.has_children) {
                const childContent = await convertBlocks(block.id, postDir, 0);
                content += childContent;
              }
            } else {
              // 일반 토글의 경우: 기존대로 details/summary 태그 사용
              content += '<details>\n<summary>' + toggleText + '</summary>\n\n';
              
              // 토글 내부 컨텐츠 처리
              if (block.has_children) {
                const childContent = await convertBlocks(block.id, postDir, 0);
                content += childContent;
              }
              
              content += '</details>\n\n';
            }
          }
          break;
          
        case 'code':
          if (block.code?.rich_text?.length > 0) {
            const language = block.code.language || '';
            const codeText = convertRichText(block.code.rich_text);
            
            // Mermaid 코드블록인지 확인
            if (language.toLowerCase() === 'mermaid') {
              content += '```mermaid\n' + codeText + '\n```\n\n';
            } else {
              content += '```' + language + '\n' + codeText + '\n```\n\n';
            }
          }
          break;
          
        case 'quote':
          if (block.quote?.rich_text?.length > 0) {
            content += '> ' + convertRichText(block.quote.rich_text) + '\n\n';
          }
          break;
          
        case 'callout':
          if (block.callout?.rich_text?.length > 0) {
            const icon = block.callout.icon?.emoji || '💡';
            const calloutText = convertRichText(block.callout.rich_text);
            content += '> ' + icon + ' **' + calloutText + '**\n';
            
            // Callout 내부 컨텐츠 처리
            if (block.has_children) {
              const childContent = await convertBlocks(block.id, postDir, 0);
              // callout 내부 컨텐츠를 인용구 형태로 변환
              const quotedChildContent = childContent.split('\n').map(line => 
                line.trim() ? '> ' + line : '>'
              ).join('\n');
              content += quotedChildContent + '\n';
            }
            
            content += '\n';
          }
          break;
          
        case 'divider':
          content += '---\n\n';
          break;
          
        case 'image':
          if (block.image?.file?.url || block.image?.external?.url) {
            const imageUrl = block.image.file?.url || block.image.external?.url;
            
            try {
              // 이미지 다운로드 및 로컬 저장
              const imageFilename = createImageFilename(imageUrl);
              const imagePath = path.join(postDir, imageFilename);
              
              // 이미지가 이미 존재하지 않으면 다운로드
              if (!fs.existsSync(imagePath)) {
                console.log('Downloading image:', imageFilename);
                await downloadImage(imageUrl, imagePath);
              }
              
              // 상대 경로로 마크다운에 추가
              content += '![Image](' + imageFilename + ')\n\n';
            } catch (error) {
              console.warn('Failed to download image:', error.message);
              // 다운로드 실패시 원본 URL 사용 (fallback)
              content += '![Image](' + imageUrl + ')\n\n';
            }
          }
          break;
          
        case 'video':
          if (block.video?.external?.url) {
            content += '🎥 [동영상 보기](' + block.video.external.url + ')\n\n';
          }
          break;
          
        case 'bookmark':
        case 'link_preview':
          const bookmarkUrl = block.bookmark?.url || block.link_preview?.url;
          if (bookmarkUrl) {
            content += '🔗 [' + bookmarkUrl + '](' + bookmarkUrl + ')\n\n';
          }
          break;
      }
      
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    return content;
  } catch (error) {
    console.error('Error converting blocks:', error.message);
    return '';
  }
}

async function getAllPages() {
  let allPages = [];
  let hasMore = true;
  let nextCursor = undefined;

  while (hasMore) {
    try {
      const response = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        filter: {
          property: 'Status',
          select: { equals: 'Published' }
        },
        sorts: [{ property: 'Date', direction: 'descending' }],
        start_cursor: nextCursor,
        page_size: 100
      });

      allPages = allPages.concat(response.results);
      hasMore = response.has_more;
      nextCursor = response.next_cursor;

      console.log('Retrieved', response.results.length, 'pages (Total:', allPages.length + ')');
      
      if (hasMore) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    } catch (error) {
      console.error('Error fetching pages:', error.message);
      break;
    }
  }
  return allPages;
}

async function syncNotionDatabase() {
  try {
    console.log('Connecting to Notion...');
    
    const cache = loadCache();
    console.log('Loaded cache with', Object.keys(cache).length, 'entries');
    
    const allPages = await getAllPages();
    console.log('Found', allPages.length, 'published posts');

    if (!fs.existsSync('content/posts')) {
      fs.mkdirSync('content/posts', { recursive: true });
    }

    let successCount = 0;
    let skippedCount = 0;
    let updatedCount = 0;
    const newCache = {};

    for (const page of allPages) {
      try {
        const pageId = page.id;
        const lastEditedTime = page.last_edited_time;
        
        // ✅ 제목 원본 완전 보존
        const originalTitle = page.properties['제목']?.title?.[0]?.plain_text || 'Untitled';
        const slug = createSlug(originalTitle);
        const postDir = 'content/posts/' + slug;
        const postFile = postDir + '/index.md';

        // 캐시 + 파일 존재 확인
        if (cache[pageId] && 
            cache[pageId].last_edited_time === lastEditedTime && 
            fs.existsSync(postFile)) {
          console.log('Skipped (no changes):', originalTitle);
          newCache[pageId] = cache[pageId];
          skippedCount++;
          continue;
        }

        console.log('Processing:', originalTitle);

        const dateValue = page.properties['Date']?.date?.start || page.created_time;
        const tags = page.properties['Tags']?.multi_select?.map(tag => tag.name) || [];
        const themes = page.properties['Thems']?.multi_select?.map(theme => theme.name) || [];
        const aiSummary = page.properties['AI 요약']?.rich_text?.[0]?.plain_text || '';

        // 포스트 디렉토리 먼저 생성 (이미지 다운로드에 필요)
        if (!fs.existsSync(postDir)) {
          fs.mkdirSync(postDir, { recursive: true });
        }

        const blockContent = await convertBlocks(page.id, postDir);

        // 🎯 YAML Front Matter (시리즈 지원)
        let frontMatter = '---\n';
        frontMatter += 'title: ' + createSafeYamlString(originalTitle) + '\n';
        frontMatter += 'date: ' + formatDate(dateValue) + '\n';
        frontMatter += 'draft: false\n';

        // 🔧 tags와 series 분리 처리
        if (tags.length > 0) {
          const tagsList = tags.map(tag => createSafeYamlString(tag));
          frontMatter += 'tags: [' + tagsList.join(', ') + ']\n';
        }

        if (themes.length > 0) {
          const seriesList = themes.map(theme => createSafeYamlString(theme));
          frontMatter += 'series: [' + seriesList.join(', ') + ']\n';  // ✅ series로 변경
        }

        if (aiSummary) {
          // Description에 AI 요약을 그대로 넣음 (Summary 표시는 레이아웃에서 처리)
          frontMatter += 'description: ' + createSafeYamlString(aiSummary) + '\n';
        }

        frontMatter += 'notion_id: ' + createSafeYamlString(page.id) + '\n';
        frontMatter += 'notion_url: ' + createSafeYamlString(page.url) + '\n';
        frontMatter += '---\n\n';

        // 🎯 개선된 본문 내용 (제목 + AI요약 + 구분선 + 본문)
        let mainContent = '';
        
        // 제목 (원본 그대로)
        mainContent += '# ' + originalTitle + '\n\n';
        
        // AI 요약 표시 (있을 경우)
        if (aiSummary) {
          mainContent += '> **Summary**\n';
          mainContent += '> ' + aiSummary + '\n\n';
          mainContent += '---\n\n'; // 구분선 추가
        }
        
        // 본문 내용
        if (blockContent.trim()) {
          mainContent += blockContent;
        } else {
          mainContent += '*이 글은 Notion에서 가져왔습니다.*\n\n[원본 보기](' + page.url + ')\n';
        }

        const fullContent = frontMatter + mainContent;

        fs.writeFileSync(postFile, fullContent, 'utf8');

        newCache[pageId] = {
          last_edited_time: lastEditedTime,
          title: originalTitle, // 원본 제목 저장
          slug: slug,
          processed_at: new Date().toISOString()
        };

        if (cache[pageId]) {
          console.log('Updated:', originalTitle, '→', slug);
          updatedCount++;
        } else {
          console.log('Created:', originalTitle, '→', slug);
        }

        successCount++;
        await new Promise(resolve => setTimeout(resolve, 50));

      } catch (err) {
        console.error('Error processing page:', err.message);
      }
    }

    saveCache(newCache);

    console.log('\n🎯 동기화 완료:');
    console.log('📝 성공:', successCount + '개');
    console.log('🔄 업데이트:', updatedCount + '개');  
    console.log('⏭️ 스킵:', skippedCount + '개');
    console.log('⚡ 캐시 효율:', Math.round((skippedCount / allPages.length) * 100) + '%');
    console.log('🏷️ 시리즈 지원: 활성화');

  } catch (error) {
    console.error('❌ Notion API Error:', error.message);
    process.exit(0);
  }
}

syncNotionDatabase();
// 📚 이 스크립트는 Notion 데이터베이스에서 게시물을 가져와 Markdown 파일로 변환하고 저장합니다.
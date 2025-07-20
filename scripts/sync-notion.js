const { Client } = require('@notionhq/client');
const fs = require('fs');
const crypto = require('crypto');

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

async function convertBlocks(pageId) {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100
    });

    let content = '';
    for (const block of blocks.results) {
      switch (block.type) {
        case 'paragraph':
          if (block.paragraph?.rich_text?.length > 0) {
            content += convertRichText(block.paragraph.rich_text) + '\n\n';
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
            content += '- ' + convertRichText(block.bulleted_list_item.rich_text) + '\n';
          }
          break;
          
        case 'numbered_list_item':
          if (block.numbered_list_item?.rich_text?.length > 0) {
            content += '1. ' + convertRichText(block.numbered_list_item.rich_text) + '\n';
          }
          break;
          
        case 'code':
          if (block.code?.rich_text?.length > 0) {
            const language = block.code.language || '';
            const codeText = convertRichText(block.code.rich_text);
            content += '```' + language + '\n' + codeText + '\n```\n\n';
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
            content += '> ' + icon + ' **' + calloutText + '**\n\n';
          }
          break;
          
        case 'divider':
          content += '---\n\n';
          break;
          
        case 'image':
          if (block.image?.file?.url) {
            content += '![Image](' + block.image.file.url + ')\n\n';
          } else if (block.image?.external?.url) {
            content += '![Image](' + block.image.external.url + ')\n\n';
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

        const blockContent = await convertBlocks(page.id);

        // YAML Front Matter (제목 원본 보존)
        let frontMatter = '---\n';
        frontMatter += 'title: ' + createSafeYamlString(originalTitle) + '\n';
        frontMatter += 'date: ' + formatDate(dateValue) + '\n';
        frontMatter += 'draft: false\n';

        if (tags.length > 0 || themes.length > 0) {
          const allTags = [...tags, ...themes].map(tag => createSafeYamlString(tag));
          frontMatter += 'tags: [' + allTags.join(', ') + ']\n';
        }

        if (themes.length > 0) {
          const seriesList = themes.map(theme => createSafeYamlString(theme));
          frontMatter += 'series: [' + seriesList.join(', ') + ']\n';  // categories → series
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

        if (!fs.existsSync(postDir)) {
          fs.mkdirSync(postDir, { recursive: true });
        }

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

    console.log('\n동기화 완료:');
    console.log('성공:', successCount + '개');
    console.log('업데이트:', updatedCount + '개');
    console.log('스킵:', skippedCount + '개');
    console.log('캐시 효율:', Math.round((skippedCount / allPages.length) * 100) + '%');

  } catch (error) {
    console.error('Notion API Error:', error.message);
    process.exit(0);
  }
}

syncNotionDatabase();

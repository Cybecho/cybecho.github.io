'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const https = require('node:https');
const http = require('node:http');
const { Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const { isIP } = require('node:net');

// Only Notion-hosted S3 credentials are ephemeral. External query parameters can
// select different images and must remain part of the asset identity.
function stableImageIdentity(imageUrl) {
  const url = new URL(imageUrl);
  const notionS3 = /^(?:prod-files-secure|prod-files)\.s3(?:[.-][a-z0-9-]+)?\.amazonaws\.com$/i.test(url.hostname)
    || (/^s3(?:[.-][a-z0-9-]+)?\.amazonaws\.com$/i.test(url.hostname)
      && /^\/(?:secure\.notion-static\.com|prod-files-secure|prod-files)\//i.test(url.pathname));
  if (notionS3) {
    for (const key of [...url.searchParams.keys()]) {
      if (/^x-amz-/i.test(key) || /^(AWSAccessKeyId|Signature|Expires)$/i.test(key)) url.searchParams.delete(key);
    }
  }
  url.hash = '';
  return url.href;
}
function createImageFilename(imageUrl) {
  const identity = stableImageIdentity(imageUrl);
  const hash = crypto.createHash('sha256').update(identity).digest('hex').slice(0, 24);
  const ext = path.extname(new URL(imageUrl).pathname).toLowerCase();
  return `image_${hash}${/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(ext) ? ext : '.png'}`;
}

function stableExternalImageUrl(value) {
  try {
    if (typeof value !== 'string' || /[\s<>]/.test(value)) return false;
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash
        || value.includes('?') || value.includes('#') || url.port) return false;
    if (!host.includes('.') || isIP(host.replace(/^\[|\]$/g, ''))
        || /(?:^|\.)(?:localhost|local|internal|invalid|test)$/.test(host)) return false;
    // These service domains commonly carry uploaded/private or expiring files,
    // even when a particular URL currently has no visible signing query.
    if (/(?:^|\.)(?:amazonaws\.com|amazonaws\.com\.cn|notion\.so|notion\.site|notion\.com|notionusercontent\.com|notion-static\.com)$/.test(host)) return false;
    return true;
  } catch { return false; }
}

async function validImageFile(file) {
  try {
    const sharp = require('sharp');
    const image = sharp(file, { failOn: 'error', limitInputPixels: 40 * 1000 * 1000 });
    const metadata = await image.metadata();
    if (!['jpeg', 'png', 'gif', 'webp', 'avif', 'heif', 'tiff', 'svg'].includes(metadata.format)
        || !metadata.width || !metadata.height) return false;
    await image.stats();
    return true;
  } catch { return false; }
}

async function downloadImage(imageUrl, imagePath, options = {}) {
  const timeoutMs = options.timeoutMs ?? 30000;
  const maxBytes = options.maxBytes ?? 32 * 1024 * 1024;
  const maxRedirects = options.maxRedirects ?? 5;
  const transport = options.transport || ((url) => url.protocol === 'https:' ? https : http);
  const temporary = `${imagePath}.${crypto.randomUUID()}.part`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let assetHost;

  async function request(url, redirects) {
    assetHost = url.hostname;
    if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Unsupported image protocol');
    const response = await new Promise((resolve, reject) => {
      const req = transport(url).get(url, { signal: controller.signal, headers: {
        'User-Agent': 'CybechoBlog-NotionSync/1.0 (+https://cybecho.github.io/)',
        'Accept': 'image/avif,image/webp,image/png,image/jpeg,image/gif,image/svg+xml,image/*;q=0.8'
      } }, resolve);
      req.on('error', reject);
    });
    if (response.statusCode >= 300 && response.statusCode < 400) {
      response.resume();
      if (!response.headers.location || redirects >= maxRedirects) throw new Error('Image redirect limit or missing location');
      const next = new URL(response.headers.location, url);
      if (url.protocol === 'https:' && next.protocol !== 'https:') throw new Error('Insecure image redirect');
      return request(next, redirects + 1);
    }
    if (response.statusCode !== 200) {
      response.resume();
      throw new Error(`Image download HTTP ${response.statusCode}`);
    }
    let bytes = 0;
    const limiter = new Transform({ transform(chunk, encoding, callback) {
      bytes += chunk.length;
      callback(bytes > maxBytes ? new Error('Image exceeds size limit') : null, chunk);
    } });
    await pipeline(response, limiter, fs.createWriteStream(temporary, { flags: 'wx' }), { signal: controller.signal });
    if (!bytes) throw new Error('Empty image response');
    // MIME is advisory: some CDNs label real images as HTML, while error pages
    // can claim image/png. Decode bounded image bytes before accepting either.
    if (!await validImageFile(temporary)) {
      const error = new Error('Image endpoint returned invalid image bytes');
      error.code = 'IMAGE_NOT_IMAGE';
      throw error;
    }
    fs.renameSync(temporary, imagePath);
    return imagePath;
  }
  try { return await request(new URL(imageUrl), 0); }
  catch (error) {
    if (assetHost) error.asset_host = assetHost;
    throw error;
  }
  finally { clearTimeout(timer); fs.rmSync(temporary, { force: true }); }
}

function createRenderer(notion, options = {}) {
  const imageDownload = options.downloadImage || downloadImage;
  const delayMs = options.delayMs ?? 20;
  let legacyAssets;
  function legacyFilename(url) {
    // Reproduce the old algorithm exactly. Never match by title or image order.
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 12);
    const extension = ['.png', '.jpg', '.jpeg', '.gif', '.webp'].find(ext => url.includes(ext)) || '.png';
    return `image_${hash}${extension}`;
  }
  function legacyCandidates(name, dir) {
    const local = path.join(dir, name);
    if (fs.existsSync(local)) return [local];
    if (!options.legacyAssetRoot) return [];
    if (!legacyAssets) {
      legacyAssets = new Map();
      const root = path.resolve(options.legacyAssetRoot);
      if (!fs.existsSync(root)) return [];
      if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Legacy asset root must not be a symlink');
      for (const bundle of fs.readdirSync(root, { withFileTypes: true })) {
        if (!bundle.isDirectory()) continue;
        const bundleDir = path.join(root, bundle.name);
        for (const entry of fs.readdirSync(bundleDir, { withFileTypes: true })) {
          if (!entry.isFile() || !/^image_[a-f0-9]{12}\.(png|jpe?g|gif|webp)$/.test(entry.name)) continue;
          const matches = legacyAssets.get(entry.name) || [];
          matches.push(path.join(bundleDir, entry.name));
          legacyAssets.set(entry.name, matches);
        }
      }
    }
    return legacyAssets.get(name) || [];
  }
  async function reuseLegacyImage(url, dir) {
    const filename = legacyFilename(url);
    const valid = [];
    for (const file of legacyCandidates(filename, dir)) {
      const stat = fs.lstatSync(file);
      if (!stat.isFile() || stat.size === 0 || stat.size > 32 * 1024 * 1024) continue;
      if (await validImageFile(file)) {
        valid.push({ file, digest: crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') });
      }
    }
    if (!valid.length) return null;
    if (new Set(valid.map(item => item.digest)).size !== 1) {
      const error = new Error('Conflicting validated legacy image cache entries');
      error.code = 'IMAGE_CACHE_CONFLICT'; error.asset_host = new URL(url).hostname;
      throw error;
    }
    const target = path.join(dir, filename);
    if (valid[0].file !== target) fs.copyFileSync(valid[0].file, target, fs.constants.COPYFILE_EXCL);
    return filename;
  }
  async function listAllChildren(blockId) {
    const blocks = [];
    const cursors = new Set();
    let cursor;
    do {
      const response = await notion.blocks.children.list({ block_id: blockId, page_size: 100, start_cursor: cursor });
      if (!response || !Array.isArray(response.results) || typeof response.has_more !== 'boolean') throw new Error('Invalid Notion block response');
      blocks.push(...response.results);
      if (!response.has_more) return blocks;
      cursor = response.next_cursor;
      if (!cursor || cursors.has(cursor)) throw new Error('Invalid Notion block pagination cursor');
      cursors.add(cursor);
    } while (true);
  }
  async function saveImage(url, dir) {
    const filename = createImageFilename(url);
    const target = path.join(dir, filename);
    if (fs.existsSync(target) && fs.statSync(target).size > 0) return filename;
    const legacy = await reuseLegacyImage(url, dir);
    if (legacy) return legacy;
    try { await imageDownload(url, target); }
    catch (error) { error.asset_host ||= new URL(url).hostname; error.asset_download_failed = true; throw error; }
    if (!fs.existsSync(target) || !fs.statSync(target).size) throw new Error('Image download did not create a complete file');
    // Keep all existing assets. Reuse an existing byte-identical legacy image
    // rather than adding a new copy when migrating from signed-URL filenames.
    const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    const hash = digest(target);
    for (const name of fs.readdirSync(dir).sort()) {
      if (name === filename || !/^image_[a-f0-9]+\.(?:png|jpe?g|gif|webp|svg|avif)$/i.test(name)) continue;
      const existing = path.join(dir, name);
      if (fs.statSync(existing).size === fs.statSync(target).size && digest(existing) === hash) {
        fs.unlinkSync(target); // only the newly downloaded duplicate, never an existing asset
        return name;
      }
    }
    return filename;
  }
async function convertTableToMarkdown(tableBlock) {
  try {

    
    // 1. Table 메타데이터 추출
    const tableWidth = tableBlock.table?.table_width || 0;
    const hasColumnHeader = tableBlock.table?.has_column_header || false;

    
    if (tableWidth === 0) {

      return '';
    }
    
    // 2. Table의 children (table_row 블록들) 가져오기
    const rowsResponse = { results: await listAllChildren(tableBlock.id) };
    
    const tableRows = rowsResponse.results.filter(block => block.type === 'table_row');

    
    if (tableRows.length === 0) {

      return '';
    }
    
    // 3. 각 row의 cells를 텍스트로 변환
    const processedRows = tableRows.map((row, rowIndex) => {
      const cells = row.table_row?.cells || [];
      
      // 각 셀의 rich_text 배열을 문자열로 변환
      const cellTexts = cells.map((cell, cellIndex) => {
        if (!Array.isArray(cell)) {

          return '';
        }
        
        // 셀 내용이 rich_text 배열이므로 convertRichText 사용
        const cellContent = convertRichText(cell);
        
        // Markdown 테이블에서 파이프 문자 이스케이프
        return cellContent.replace(/\|/g, '\\|').trim() || ' ';
      });
      
      // table_width만큼 셀이 없으면 빈 셀로 채우기
      while (cellTexts.length < tableWidth) {
        cellTexts.push(' ');
      }
      
      return cellTexts.slice(0, tableWidth); // 너무 많은 셀 제거
    });
    
    // 4. Markdown 테이블 형식으로 변환
    let markdownTable = '';
    
    if (hasColumnHeader && processedRows.length > 0) {
      // 헤더 row 처리
      const headerRow = processedRows[0];
      markdownTable += '| ' + headerRow.join(' | ') + ' |\n';
      
      // 구분선 생성
      const separator = headerRow.map(() => '---');
      markdownTable += '| ' + separator.join(' | ') + ' |\n';
      
      // 나머지 데이터 rows 처리
      for (let i = 1; i < processedRows.length; i++) {
        const row = processedRows[i];
        markdownTable += '| ' + row.join(' | ') + ' |\n';
      }
    } else {
      // 헤더 없는 테이블 - 모든 row를 데이터로 처리
      processedRows.forEach(row => {
        markdownTable += '| ' + row.join(' | ') + ' |\n';
      });
    }

    return markdownTable + '\n';
    
  } catch (error) {

    
    throw error;
  }
}

async function convertBlocks(pageId, postDir, indentLevel = 0) {
  try {
    // 🔥 핵심 수정: 페이지네이션 처리 추가
    // Notion API는 한 번에 최대 100개 블록만 반환하므로,
    // has_more가 true면 next_cursor로 추가 블록을 가져와야 함
    const allBlocks = await listAllChildren(pageId);

    let content = '';
    const indent = '  '.repeat(indentLevel); // 들여쓰기용 공백

    for (const block of allBlocks) {
      switch (block.type) {
        case 'paragraph':
          if (block.paragraph?.rich_text?.length > 0) {
            content += indent + convertRichText(block.paragraph.rich_text) + '\n\n';
          } else {
            content += '\n';
          }

          // paragraph 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
          
        case 'heading_1':
          if (block.heading_1?.rich_text?.length > 0) {
            const headingText = convertRichText(block.heading_1.rich_text);
            content += '# ' + headingText + '\n\n';
            
            // 제목 토글인지 확인 (is_toggleable 속성)
            if (block.heading_1.is_toggleable && block.has_children) {

              const childContent = await convertBlocks(block.id, postDir, 0);
              if (childContent.trim()) {
                content += childContent + '\n';
              }
            }
          }
          break;
          
        case 'heading_2':
          if (block.heading_2?.rich_text?.length > 0) {
            const headingText = convertRichText(block.heading_2.rich_text);
            content += '## ' + headingText + '\n\n';
            
            // 제목 토글인지 확인 (is_toggleable 속성)
            if (block.heading_2.is_toggleable && block.has_children) {

              const childContent = await convertBlocks(block.id, postDir, 0);
              if (childContent.trim()) {
                content += childContent + '\n';
              }
            }
          }
          break;
          
        case 'heading_3':
          if (block.heading_3?.rich_text?.length > 0) {
            const headingText = convertRichText(block.heading_3.rich_text);
            content += '### ' + headingText + '\n\n';
            
            // 제목 토글인지 확인 (is_toggleable 속성)
            if (block.heading_3.is_toggleable && block.has_children) {

              const childContent = await convertBlocks(block.id, postDir, 0);
              if (childContent.trim()) {
                content += childContent + '\n';
              }
            }
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
            
            // 제목 토글 패턴 확인 (다양한 형태의 제목 토글 지원)
            // 패턴: "## >> 제목", "### >>>> 제목", "# > 제목" 등
            const headingToggleMatch = toggleText.match(/^(#{1,6})\s*>+\s*(.+)/) || 
                                     toggleText.match(/^(#{1,6})\s+(.+)/);
            
            if (headingToggleMatch) {
              // 제목 토글의 경우: 제목으로 변환하고 내부 콘텐츠 포함
              const headingLevel = headingToggleMatch[1]; // #, ##, ### 등
              const headingTitle = headingToggleMatch[2].trim();

              
              // 제목 출력
              content += headingLevel + ' ' + headingTitle + '\n\n';
              
              // 🔥 핵심: 제목 토글 내부 컨텐츠를 반드시 포함
              if (block.has_children) {

                const childContent = await convertBlocks(block.id, postDir, 0);
                if (childContent.trim()) {
                  content += childContent + '\n';
                }
              }
            } else {
              // 일반 토글의 경우: details/summary 태그 사용
              content += '<details>\n<summary>' + toggleText + '</summary>\n\n';
              
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

          // code 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
          
        case 'quote':
          if (block.quote?.rich_text?.length > 0) {
            content += '> ' + convertRichText(block.quote.rich_text) + '\n';
          }

          // quote 블록의 children 처리 (들여쓰기된 콘텐츠를 인용구로 유지)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, 0);
            if (childContent.trim()) {
              // 인용구 형태로 변환
              const quotedChildContent = childContent.split('\n').map(line =>
                line.trim() ? '> ' + line : '>'
              ).join('\n');
              content += quotedChildContent + '\n';
            }
          }

          content += '\n';
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

          // divider 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
          
        case 'image':
          if (block.image?.file?.url || block.image?.external?.url) {
            const imageUrl = block.image.file?.url || block.image.external?.url;

            try {
              const imageFilename = await saveImage(imageUrl, postDir);
              content += '![Image](' + imageFilename + ')\n\n';
            } catch (error) {
              const external = !block.image.file && block.image.external?.url === imageUrl;
              if (!external || !error.asset_download_failed || !stableExternalImageUrl(imageUrl)) throw error;
              const warning = {
                host: new URL(imageUrl).hostname,
                code: /^[A-Z][A-Z0-9_]{0,63}$/.test(error.code || '') ? error.code : 'IMAGE_DOWNLOAD_FAILED',
                block_id: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(block.id || '') ? block.id : undefined
              };
              if (options.onAssetWarning) options.onAssetWarning(warning);
              else console.warn('External image retained:', JSON.stringify(warning));
              // Keep the exact source target, escaping only Markdown delimiters.
              const destination = imageUrl.replace(/</g, '%3C').replace(/>/g, '%3E');
              content += '![Image](<' + destination + '>)\n\n';
            }
          }

          // image 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
          
        case 'video':
          if (block.video?.external?.url) {
            content += '🎥 [동영상 보기](' + block.video.external.url + ')\n\n';
          }

          // video 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
          
        case 'bookmark':
        case 'link_preview':
          const bookmarkUrl = block.bookmark?.url || block.link_preview?.url;
          if (bookmarkUrl) {
            content += '🔗 [' + bookmarkUrl + '](' + bookmarkUrl + ')\n\n';
          }

          // bookmark/link_preview 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
          
        case 'table':

          try {
            const tableMarkdown = await convertTableToMarkdown(block);
            if (tableMarkdown && tableMarkdown.trim()) {
              content += tableMarkdown;
            } else {

              // Fallback for empty table
              content += '\n> 📊 **Table** (내용이 비어있습니다)\n\n';
            }
          } catch (error) {

            throw error;
          }
          
          // Table 처리 후 짧은 지연 (API 속도 제한 고려)
          await new Promise(resolve => setTimeout(resolve, 100));
          break;
          
        case 'to_do':
          if (block.to_do?.rich_text?.length > 0) {
            const isChecked = block.to_do.checked || false;
            const todoText = convertRichText(block.to_do.rich_text);
            const checkbox = isChecked ? '[x]' : '[ ]';
            content += '- ' + checkbox + ' ' + todoText + '\n';
            
            // 중첩된 to-do 처리
            if (block.has_children) {
              const childContent = await convertBlocks(block.id, postDir, indentLevel + 1);
              content += childContent;
            }
          }
          break;
          
        case 'child_page':
          if (block.child_page?.title) {
            content += '📄 **[' + block.child_page.title + ']**\n\n';
          }

          // child_page 블록의 children 처리 (들여쓰기된 콘텐츠)
          if (block.has_children) {
            const childContent = await convertBlocks(block.id, postDir, indentLevel);
            if (childContent.trim()) {
              content += childContent;
            }
          }
          break;
        default:
          if (block.has_children) content += await convertBlocks(block.id, postDir, indentLevel);
          break;
      }
      
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
    
    return content;
  } catch (error) {

    throw error;
  }
}


return { convertBlocks, convertTableToMarkdown };
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


module.exports = { createRenderer, convertRichText, createImageFilename, stableImageIdentity, stableExternalImageUrl, downloadImage };

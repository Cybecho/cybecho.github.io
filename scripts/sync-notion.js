'use strict';

const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { createRenderer } = require('./notion-renderer');

const CACHE_FILE = '.notion_cache_git.json';
const SYNC_VERSION = 2;
const idKey = id => String(id).replace(/-/g, '').toLowerCase();
const digest = text => crypto.createHash('sha256').update(text).digest('hex');
const yaml = value => JSON.stringify(String(value || '').replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, ''));

function readCache(root) {
  const file = path.join(root, CACHE_FILE);
  if (!fs.existsSync(file)) return {};
  const cache = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!cache || typeof cache !== 'object' || Array.isArray(cache)) throw new Error('Invalid sync cache');
  return cache;
}

function frontMatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return match ? match[1] : '';
}

function notionId(text) {
  return frontMatter(text).match(/^notion_id:\s*["']?([a-f0-9-]+)["']?\s*$/mi)?.[1];
}

function managedPosts(root) {
  const posts = path.join(root, 'content/posts');
  const managed = new Map();
  if (!fs.existsSync(posts)) return managed;
  for (const entry of fs.readdirSync(posts, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = path.join(posts, entry.name, 'index.md');
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    const id = notionId(text);
    if (!id) continue; // Never change manually maintained articles.
    const key = idKey(id);
    const list = managed.get(key) || [];
    list.push({ id, slug: entry.name, file, text });
    managed.set(key, list);
  }
  return managed;
}

function statusOf(page) {
  if (page.archived === true || page.in_trash === true) return 'Archived';
  const property = page.properties?.Status;
  if (property && (property.select === null || property.status === null)) return 'Unpublished';
  const status = property?.select?.name || property?.status?.name;
  if (typeof status !== 'string' || !status) throw new Error(`Missing publication status for page ${page.id}`);
  return status;
}

async function getAllPages(notion, databaseId) {
  const pages = [];
  const ids = new Set();
  const cursors = new Set();
  let cursor;
  // A complete unfiltered snapshot is required. A failed/partial query never
  // becomes evidence that an article was unpublished.
  do {
    const response = await notion.databases.query({ database_id: databaseId, page_size: 100, ...(cursor ? { start_cursor: cursor } : {}) });
    if (!response || !Array.isArray(response.results) || typeof response.has_more !== 'boolean') throw new Error('Invalid database response');
    for (const page of response.results) {
      if (!page.id || ids.has(idKey(page.id))) throw new Error('Duplicate or missing page ID in database response');
      statusOf(page);
      ids.add(idKey(page.id));
      pages.push(page);
    }
    cursor = response.has_more ? response.next_cursor : null;
    if (response.has_more && (!cursor || cursors.has(cursor))) throw new Error('Invalid database pagination cursor');
    if (cursor) cursors.add(cursor);
  } while (cursor);
  return pages;
}

function createSlug(title, id) {
  let slug = title.trim().replace(/[<>:"/\\|?*\x00-\x1f\x7f]/g, '_').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^[.\s-]+|[.\s-]+$/g, '');
  // Leave room for an ID suffix within portable filesystem byte limits.
  while (Buffer.byteLength(slug) > 170) slug = Array.from(slug).slice(0, -1).join('');
  return `${slug || 'post'}-${idKey(id)}`;
}

function renderPost(page, blockContent) {
  const props = page.properties || {};
  const title = (props['제목']?.title || Object.values(props).find(p => p.type === 'title')?.title || []).map(t => t.plain_text || t.text?.content || '').join('') || 'Untitled';
  const date = new Date(props.Date?.date?.start || page.created_time);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid date for page ${page.id}`);
  const tags = props.Tags?.multi_select?.map(t => t.name) || [];
  const themes = props.Thems?.multi_select?.map(t => t.name) || [];
  const summary = (props['AI 요약']?.rich_text || []).map(t => t.plain_text || t.text?.content || '').join('');
  let header = `---\ntitle: ${yaml(title)}\ndate: ${date.toISOString()}\ndraft: false\n`;
  if (tags.length) header += `tags: ${JSON.stringify(tags)}\n`;
  if (themes.length) header += `series: ${JSON.stringify(themes)}\n`;
  if (summary) header += `description: ${yaml(summary)}\n`;
  header += `notion_id: ${yaml(page.id)}\n---\n\n`;
  // Do not publish source workspace URLs or raw API objects.
  let content = `# ${title}\n\n`;
  if (summary) content += `> **Summary**\n> ${summary.replace(/\n/g, '\n> ')}\n\n---\n\n`;
  return { text: header + content + blockContent, title, tags, themes };
}

function unpublish(text) {
  const header = frontMatter(text);
  if (!header) throw new Error('Managed article has invalid front matter');
  let changed = /^draft:/m.test(header) ? header.replace(/^draft:.*$/m, 'draft: true') : `${header}\ndraft: true`;
  changed = changed.replace(/^notion_url:.*(?:\n|$)/m, '');
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---/, `---\n${changed}\n---`);
}

function hasMeaningfulBody(text) {
  let body = text.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '').trim();
  body = body.replace(/^# [^\n]*\n*/, '');
  body = body.replace(/^> \*\*Summary\*\*\n(?:>[^\n]*\n)*\s*---\s*/, '');
  body = body.replace(/\*이 글은 Notion에서 가져왔습니다\.\*\s*(?:\[원본 보기\]\(https:\/\/www\.notion\.so\/[^)]+\))?\s*$/, '');
  return Boolean(body.trim());
}

function safeBundle(root, slug) {
  if (!slug || slug === '.' || slug === '..' || path.basename(slug) !== slug || slug.includes('\\')) throw new Error('Unsafe managed bundle path');
  const dir = path.join(root, 'content/posts', slug);
  if (fs.existsSync(dir) && fs.lstatSync(dir).isSymbolicLink()) throw new Error('Symlink bundle is not supported');
  return dir;
}

function atomicWrite(file, bytes) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.sync-${process.pid}.tmp`;
  try { fs.writeFileSync(temporary, bytes); fs.renameSync(temporary, file); }
  finally { fs.rmSync(temporary, { force: true }); }
}

async function syncNotionDatabase({ notion, databaseId, root = process.cwd(), renderer, logger = console } = {}) {
  if (!notion || !databaseId) throw new Error('Notion client and DATABASE_ID are required');
  const cache = readCache(root);
  const managed = managedPosts(root);
  const pages = await getAllPages(notion, databaseId);
  const ids = new Set(pages.map(page => idKey(page.id)));
  const entries = pages.map(page => ({ page, publicationStatus: statusOf(page) }));
  // Publication is an allowlist: only Published pages in the complete current
  // database snapshot may be public. Absence is NOT proof of Draft/deletion.
  // Keep missing source material recoverable, label its state unverified, and
  // exclude it from output without attempting to bypass integration access.
  for (const [key, posts] of managed) {
    if (!ids.has(key)) entries.push({ page: { id: posts[0].id }, publicationStatus: null });
  }
  const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'notion-sync-'));
  const changes = [];
  const plannedOwners = new Map();
  const nextCache = {};
  const render = renderer || createRenderer(notion);
  let updated = 0, skipped = 0, unpublished = 0, unverified = 0;
  try {
    // Render every changed article successfully before replacing any source.
    for (const { page, publicationStatus } of entries) {
      const key = idKey(page.id);
      const posts = managed.get(key) || [];
      const oldCacheKey = Object.keys(cache).find(id => idKey(id) === key);
      const previous = cache[oldCacheKey] || {};
      const canonical = posts.find(p => p.slug === previous.slug) || posts[0];
      if (publicationStatus !== 'Published') {
        for (const post of posts) {
          const text = unpublish(post.text);
          if (text !== post.text) changes.push({ file: post.file, bytes: text });
        }
        if (posts.length) {
          nextCache[page.id] = { ...previous, slug: canonical.slug,
            status: publicationStatus === null ? 'unverified' : 'unpublished',
            source_status: publicationStatus };
          if (publicationStatus === null) unverified++;
          unpublished += posts.filter(p => !/^draft:\s*true\s*$/m.test(frontMatter(p.text))).length;
        }
        continue;
      }
      const title = (page.properties['제목']?.title || Object.values(page.properties).find(p => p.type === 'title')?.title || []).map(t => t.plain_text || t.text?.content || '').join('') || 'Untitled';
      const slug = canonical?.slug || createSlug(title, page.id);
      const destination = safeBundle(root, slug);
      const owner = plannedOwners.get(destination);
      if (owner && owner !== key) throw new Error(`Planned article path collision: ${slug}`);
      plannedOwners.set(destination, key);
      if (!canonical && fs.existsSync(destination)) throw new Error(`New article path collision: ${slug}`);
      const file = path.join(destination, 'index.md');
      const hasDraft = canonical && /^draft:\s*true\s*$/m.test(frontMatter(canonical.text));
      const valid = canonical && previous.last_edited_time === page.last_edited_time && previous.has_content === true && previous.status !== 'unpublished' && !hasDraft && (!previous.content_hash || previous.content_hash === digest(canonical.text));
      if (valid) {
        nextCache[page.id] = previous;
        skipped++;
        continue;
      }
      const stageDir = path.join(stage, slug);
      if (canonical) fs.cpSync(destination, stageDir, { recursive: true, mode: fs.constants.COPYFILE_FICLONE });
      else fs.mkdirSync(stageDir, { recursive: true });
      const body = await render.convertBlocks(page.id, stageDir);
      if (typeof body !== 'string') throw new Error(`Invalid rendered body for page ${page.id}`);
      // An actual empty page is allowed only if it doesn't erase known content.
      if (!body.trim() && (previous.has_content === true || (canonical && hasMeaningfulBody(canonical.text)))) throw new Error(`Refusing to replace nonempty article with empty body: ${page.id}`);
      const post = renderPost(page, body);
      for (const item of fs.readdirSync(stageDir, { withFileTypes: true })) {
        if (!item.isFile() || item.name === 'index.md') continue;
        const target = path.join(destination, item.name);
        if (!fs.existsSync(target) || fs.statSync(target).size === 0) changes.push({ file: target, source: path.join(stageDir, item.name) });
      }
      changes.push({ file, bytes: post.text });
      // Preserve other existing URLs for a historically duplicated page. If it
      // was unpublished, all copies must remain nonpublic except canonical.
      nextCache[page.id] = { last_edited_time: page.last_edited_time, title: post.title, slug, tags: post.tags, themes: post.themes, has_content: Boolean(body.trim()), content_hash: digest(post.text), sync_version: SYNC_VERSION, status: 'published' };
      updated++;
    }
    for (const change of changes) atomicWrite(change.file, change.source ? fs.readFileSync(change.source) : change.bytes);
    const stableCache = Object.fromEntries(Object.entries(nextCache).sort(([a], [b]) => a.localeCompare(b)));
    const serialized = JSON.stringify(stableCache, null, 2) + '\n';
    const cachePath = path.join(root, CACHE_FILE);
    const existingCache = fs.existsSync(cachePath) ? fs.readFileSync(cachePath, 'utf8') : '';
    if (serialized !== existingCache) atomicWrite(cachePath, serialized);
    const result = { published: pages.filter(p => statusOf(p) === 'Published').length, updated, skipped, unpublished, unverified };
    logger.log('Notion sync complete:', JSON.stringify(result));
    return result;
  } finally { fs.rmSync(stage, { recursive: true, force: true }); }
}

async function main() {
  if (!process.env.NOTION_SECRET || !process.env.DATABASE_ID) throw new Error('NOTION_SECRET and DATABASE_ID must be set');
  const { Client } = require('@notionhq/client');
  const notion = new Client({ auth: process.env.NOTION_SECRET, notionVersion: '2022-06-28', timeoutMs: 30000, maxRetries: 3 });
  await syncNotionDatabase({ notion, databaseId: process.env.DATABASE_ID });
}

if (require.main === module) main().catch(error => {
  // Do not serialize API responses: they may contain private workspace data.
  console.error('Notion sync failed; deployment stopped:', error.code || error.name || 'Error');
  process.exitCode = 1;
});

module.exports = { syncNotionDatabase, getAllPages, statusOf, managedPosts, createSlug, renderPost, unpublish, main };

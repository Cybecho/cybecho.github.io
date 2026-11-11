#!/usr/bin/env node
'use strict';
// Build-only transformations. Never remove or rewrite repository source assets.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const { convertImagePaths } = require('./convert-archive-images-for-build');
const IMAGE = /\.(?:png|jpe?g|gif|webp|avif|ico|bmp|tiff?)$/i;
const GENERATED_IMAGE = /^image_[a-f0-9]{12,64}\.(?:png|jpe?g|gif|webp|avif)$/i;

function filesUnder(root) {
  if (!fs.existsSync(root)) throw new Error(`Missing build input: ${root}`);
  const rootStat = fs.lstatSync(root);
  if (rootStat.isSymbolicLink()) throw new Error(`Symlinks are not accepted in build content: ${root}`);
  if (rootStat.isFile()) return [root];
  const files = [];
  function visit(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Symlinks are not accepted in build content: ${file}`);
      if (entry.isDirectory()) visit(file);
      else if (entry.isFile()) files.push(file);
    }
  }
  visit(root);
  return files;
}

function gitLastmod(source) {
  let root;
  try { root = execFileSync('git', ['-C', source, 'rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); }
  catch { return new Map(); }
  const configPath = path.join(root, 'hugo.toml');
  const configured = fs.existsSync(configPath) && /^enableGitInfo\s*=\s*true\s*(?:#.*)?$/mi.test(fs.readFileSync(configPath, 'utf8'));
  const enabled = process.env.HUGO_ENABLEGITINFO === undefined ? configured : process.env.HUGO_ENABLEGITINFO.toLowerCase() === 'true';
  if (!enabled) return new Map();
  // Ask Hugo itself: GitInfo availability/precedence can differ from `git log`
  // (notably quoted Unicode paths). Never infer dates from checkout timestamps.
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'hugo-metadata-'));
  try {
    const layouts = path.join(temporary, 'layouts');
    fs.mkdirSync(layouts);
    fs.writeFileSync(path.join(layouts, 'index.json'), '{{- $pages := slice -}}{{- range site.AllPages -}}{{- if and .File .GitInfo -}}{{- $pages = $pages | append (dict "file" .File.Path "lastmod" .Lastmod) -}}{{- end -}}{{- end -}}{{- $pages | jsonify -}}');
    const config = path.join(temporary, 'metadata.json');
    fs.writeFileSync(config, JSON.stringify({ layoutDir: layouts, staticDir: [],
      ignoreFiles: ['\\.(png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf|eot)$'],
      outputs: { home: ['JSON'], page: [], section: [], taxonomy: [], term: [] } }));
    const output = path.join(temporary, 'output');
    execFileSync(process.env.HUGO_BINARY || 'hugo', ['--source', root, '--contentDir', source,
      '--config', `${configPath},${config}`, '--destination', output,
      '--buildFuture', '--buildDrafts', '--buildExpired'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 10 * 1024 * 1024 });
    const metadata = JSON.parse(fs.readFileSync(path.join(output, 'index.json'), 'utf8'));
    if (!Array.isArray(metadata)) throw new Error('Invalid Hugo metadata snapshot');
    return new Map(metadata.map(item => {
      const file = path.resolve(source, item.file);
      if (!file.startsWith(source + path.sep)) throw new Error('Invalid Hugo metadata path');
      return [file, item.lastmod];
    }));
  } finally { fs.rmSync(temporary, { recursive: true, force: true }); }
}

function preserveLastmod(text, date) {
  if (!date) return text;
  if (!Number.isFinite(Date.parse(date))) throw new Error('Invalid Git lastmod date');
  const header = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!header) throw new Error('Cannot preserve GitInfo for unsupported front matter');
  if (/^lastmod\s*:/mi.test(header[1])) return text;
  return text.replace(/^---\r?\n/, `---\nlastmod: ${JSON.stringify(date)}\n`);
}

function prepareContent(source, destination, { lastmodDates } = {}) {
  source = path.resolve(source);
  destination = path.resolve(destination);
  if (destination === source || destination.startsWith(source + path.sep) || source.startsWith(destination + path.sep)) {
    throw new Error('Build staging must be outside the source content directory');
  }
  // Require a fresh destination so this command cannot erase an unrelated directory.
  if (fs.existsSync(destination)) throw new Error('Build staging directory must not already exist');
  const files = filesUnder(source);
  const dates = lastmodDates || gitLastmod(source, files);
  const privateBundles = files.filter(file => path.basename(file) === 'index.md').filter(file => {
    const text = fs.readFileSync(file, 'utf8');
    const header = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1] || '';
    return /^notion_id:\s*[\"']?[a-f0-9-]+[\"']?\s*$/mi.test(header) && /^draft:\s*true\s*$/mi.test(header);
  }).map(file => path.dirname(file) + path.sep);
  fs.mkdirSync(destination, { recursive: true });
  let copied = 0;
  for (const file of files) {
    // Do not rely on Hugo's draft-resource behavior: omit managed unpublished
    // bundles and every resource they contain from the disposable build input.
    if (privateBundles.some(bundle => file.startsWith(bundle))) continue;
    copied++;
    const relative = path.relative(source, file);
    const output = path.join(destination, relative);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    if (relative.endsWith('.md')) {
      let text = preserveLastmod(fs.readFileSync(file, 'utf8'), dates.get(file));
      if (relative.startsWith('archives' + path.sep)) text = convertImagePaths(text);
      fs.writeFileSync(output, text);
    } else {
      fs.copyFileSync(file, output, fs.constants.COPYFILE_FICLONE);
    }
  }
  return { files: copied, unpublishedBundles: privateBundles.length };
}

async function hashFile(file) {
  const hash = crypto.createHash('sha256');
  for await (const chunk of fs.createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}

async function auditDuplicates(publicDir, sourceRoots = []) {
  const outputFiles = filesUnder(publicDir);
  const candidates = outputFiles.filter(file => GENERATED_IMAGE.test(path.basename(file)));
  const names = new Set(candidates.map(file => path.basename(file)));
  const referenced = new Set();
  // Scan rendered HTML, feeds, search JSON, scripts, CSS, SVG, source Markdown,
  // templates and config. Basename matches intentionally over-preserve assets.
  for (const root of [publicDir, ...sourceRoots]) {
    for (const file of filesUnder(root)) {
      if (IMAGE.test(file)) continue;
      const text = fs.readFileSync(file, 'utf8');
      const mentions = text.match(/image_[a-f0-9]{12,64}\.(?:png|jpe?g|gif|webp|avif)/gi) || [];
      for (const name of mentions) if (names.has(name)) referenced.add(name);
      // URI-escaped filenames and escaped JSON/HTML text must remain too.
      const decoded = text
        .replace(/(?:%[0-9a-f]{2})+/gi, value => { try { return decodeURIComponent(value); } catch { return value; } })
        .replace(/&#(x[0-9a-f]+|[0-9]+);/gi, (_, value) => {
          const point = value[0].toLowerCase() === 'x' ? parseInt(value.slice(1), 16) : Number(value);
          return point <= 0x10ffff ? String.fromCodePoint(point) : '';
        })
        .replace(/\\u([0-9a-f]{4})/gi, (_, value) => String.fromCharCode(parseInt(value, 16)));
      for (const name of decoded.match(/image_[a-f0-9]{12,64}\.(?:png|jpe?g|gif|webp|avif)/gi) || []) {
        if (names.has(name)) referenced.add(name);
      }
    }
  }
  const groups = new Map();
  for (const file of candidates) {
    const stat = fs.statSync(file);
    // Same bundle AND exact bytes AND extension. Unique originals always remain.
    const key = [path.dirname(file), path.extname(file).toLowerCase(), stat.size, await hashFile(file)].join('\0');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(file);
  }
  const omitted = [];
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    group.sort();
    const retained = group.find(file => referenced.has(path.basename(file))) || group[0];
    for (const file of group) {
      if (file === retained || referenced.has(path.basename(file))) continue;
      omitted.push({ file, retained, bytes: fs.statSync(file).size });
    }
  }
  return omitted;
}

async function compactOutput(publicDir, sourceRoots = [], { apply = false } = {}) {
  const duplicates = await auditDuplicates(publicDir, sourceRoots);
  if (apply) for (const duplicate of duplicates) fs.unlinkSync(duplicate.file);
  return { omitted: apply ? duplicates.length : 0, candidates: duplicates.length,
    bytes: duplicates.reduce((sum, file) => sum + file.bytes, 0) };
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (command === 'stage' && args.length === 2) console.log(JSON.stringify(prepareContent(...args)));
  else if ((command === 'audit' || command === 'compact') && args.length >= 1) {
    console.log(JSON.stringify(await compactOutput(args[0], args.slice(1), { apply: command === 'compact' })));
  } else throw new Error('Usage: prepare-build.js stage SOURCE DEST | audit PUBLIC [SOURCE_ROOT ...] | compact PUBLIC [SOURCE_ROOT ...]');
}
if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { prepareContent, preserveLastmod, gitLastmod, auditDuplicates, compactOutput };

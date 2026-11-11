const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { prepareContent, compactOutput } = require('../scripts/prepare-build');
function fixture(t) { const root = fs.mkdtempSync(path.join(os.tmpdir(), 'build-test-')); t.after(() => fs.rmSync(root, { recursive: true, force: true })); return root; }
function write(root, name, text) { const file = path.join(root, name); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); return file; }
const a = 'image_111111111111.png', b = 'image_222222222222.png', c = 'image_333333333333.png';
test('stage converts archives only, preserves all original bytes and assets', t => {
  const root = fixture(t), source = path.join(root, 'content'), destination = path.join(root, 'staged');
  const original = '![[demo.png]]'; write(source, 'archives/a.md', original); write(source, 'posts/a/index.md', original); write(source, 'posts/a/' + a, 'binary');
  assert.equal(prepareContent(source, destination).files, 3);
  assert.equal(fs.readFileSync(path.join(source, 'archives/a.md'), 'utf8'), original);
  assert.match(fs.readFileSync(path.join(destination, 'archives/a.md'), 'utf8'), /\/images\/archives\/demo.png/);
  assert.equal(fs.readFileSync(path.join(destination, 'posts/a/index.md'), 'utf8'), original);
  assert.throws(() => prepareContent(source, source), /outside/);
  assert.throws(() => prepareContent(source, destination), /already exist/);
});
test('only identical unreferenced generated duplicates are compacted, never originals', async t => {
  const root = fixture(t), publicDir = path.join(root, 'public');
  write(publicDir, 'posts/p/' + a, 'same'); write(publicDir, 'posts/p/' + b, 'same'); write(publicDir, 'posts/p/' + c, 'unique');
  write(publicDir, 'posts/p/original.png', 'same'); write(publicDir, 'posts/p/index.html', `<img src="${b}">`);
  const result = await compactOutput(publicDir, [], { apply: true }); assert.equal(result.omitted, 1);
  assert(!fs.existsSync(path.join(publicDir, 'posts/p/' + a)));
  for (const name of [b, c, 'original.png']) assert(fs.existsSync(path.join(publicDir, 'posts/p/' + name)));
});
test('source, cross-post and encoded references protect both copies; audit is read-only', async t => {
  const root = fixture(t), publicDir = path.join(root, 'public'), sources = path.join(root, 'sources');
  write(publicDir, 'posts/p/' + a, 'same'); write(publicDir, 'posts/p/' + b, 'same');
  write(publicDir, 'posts/other/index.html', 'invalid escape %ZZ ' + a.replace('_', '%5F'));
  write(sources, 'shortcode.html', b);
  assert.equal((await compactOutput(publicDir, [sources], { apply: true })).omitted, 0);
  fs.writeFileSync(path.join(sources, 'shortcode.html'), '');
  assert.equal((await compactOutput(publicDir, [sources])).candidates, 1);
  assert(fs.existsSync(path.join(publicDir, 'posts/p/' + b)));
});
test('duplicates in different bundles are retained and unreferenced groups retain one', async t => {
  const root = fixture(t); write(root, 'p/' + a, 'same'); write(root, 'q/' + b, 'same');
  assert.equal((await compactOutput(root, [], { apply: true })).omitted, 0);
  write(root, 'p/' + c, 'same');
  assert.equal((await compactOutput(root, [], { apply: true })).omitted, 1);
});
test('symlinks and missing inputs fail closed', async t => {
  const root = fixture(t); fs.symlinkSync('/tmp', path.join(root, 'link'));
  await assert.rejects(compactOutput(root), /Symlinks/);
  await assert.rejects(compactOutput(path.join(root, 'missing')), /Missing/);
});

test('HTML numeric entities and JSON escapes preserve references', async t => {
  const root = fixture(t); write(root, 'p/' + a, 'same'); write(root, 'p/' + b, 'same');
  write(root, 'index.html', a.replace('_', '&#95;'));
  write(root, 'search.json', b.replace('_', String.fromCharCode(92) + 'u005f'));
  assert.equal((await compactOutput(root, [], { apply: true })).omitted, 0);
});

test('managed unpublished bundles and resources never enter build staging', t => {
  const root = fixture(t), source = path.join(root, 'content'), destination = path.join(root, 'staged');
  write(source, 'posts/private/index.md', '---\nnotion_id: "1234-abcd"\ndraft: true\n---\nPrivate old body');
  write(source, 'posts/private/' + a, 'private image');
  write(source, 'posts/public/index.md', '---\nnotion_id: "5678-abcd"\ndraft: false\n---\nPublic');
  write(source, 'posts/manual/index.md', '---\ndraft: true\n---\nManual');
  const result = prepareContent(source, destination);
  assert.equal(result.unpublishedBundles, 1);
  assert(!fs.existsSync(path.join(destination, 'posts/private')));
  assert(fs.existsSync(path.join(source, 'posts/private/' + a)));
  assert(fs.existsSync(path.join(destination, 'posts/public/index.md')));
  assert(fs.existsSync(path.join(destination, 'posts/manual/index.md')));
});

'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { syncNotionDatabase, createSlug, getAllPages } = require('../scripts/sync-notion');
const ID = '11111111-1111-1111-1111-111111111111';
const ID2 = '22222222-2222-2222-2222-222222222222';
function page(id=ID, status='Published', title='Original title') { return {id,last_edited_time:'2026-11-11T00:00:00.000Z',created_time:'2026-01-01T00:00:00Z',properties:{Status:{select:{name:status}},'제목':{title:[{plain_text:title}]}}}; }
function fixture(t, options={}) {
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'sync-test-')); t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 fs.mkdirSync(path.join(root,'content/posts/old-slug'),{recursive:true});
 const file=path.join(root,'content/posts/old-slug/index.md');
 const text=`---\ntitle: Old\ndraft: false\nnotion_id: "${ID}"\n---\n\nOriginal good body\n`;
 fs.writeFileSync(file,text); fs.writeFileSync(path.join(root,'.notion_cache_git.json'),JSON.stringify({[ID]:{slug:'old-slug',has_content:true,last_edited_time:options.cached?'2026-11-11T00:00:00.000Z':'2026-01-01'}}));
 return {root,file,text};
}
function client(pages, retrieve) {return {databases:{query:async()=>({results:pages,has_more:false})},pages:{retrieve:retrieve || (async()=>{throw new Error('Unexpected retrieve');})}};}
const logger={log(){}};
const renderer={convertBlocks:async()=> 'Fresh body\n'};
function snapshot(root) {return [fs.readFileSync(path.join(root,'content/posts/old-slug/index.md'),'utf8'), fs.readFileSync(path.join(root,'.notion_cache_git.json'),'utf8')];}
test('database pagination failure leaves source and cache byte-identical', async t=>{
 const f=fixture(t); const before=snapshot(f.root); let n=0;
 const notion=client([]); notion.databases.query=async()=>{if(n++)throw new Error('network');return {results:[page()],has_more:true,next_cursor:'next'};};
 await assert.rejects(syncNotionDatabase({...f,notion,databaseId:'db',renderer,logger}),/network/); assert.deepEqual(snapshot(f.root),before);
});
test('render failure never replaces any article or cache',async t=>{
 const f=fixture(t); const before=snapshot(f.root); let n=0;
 await assert.rejects(syncNotionDatabase({...f,notion:client([page(),page(ID2)]),databaseId:'db',logger,renderer:{convertBlocks:async()=>{if(n++)throw new Error('nested API');return 'Good';}}}),/nested API/);
 assert.deepEqual(snapshot(f.root),before);assert.equal(fs.readdirSync(path.join(f.root,'content/posts')).length,1);
});
test('Published to Draft hides every historical duplicate, preserves body and unmanaged files',async t=>{
 const f=fixture(t);fs.mkdirSync(path.join(f.root,'content/posts/duplicate'));fs.writeFileSync(path.join(f.root,'content/posts/duplicate/index.md'),f.text);
 fs.mkdirSync(path.join(f.root,'content/posts/manual'));fs.writeFileSync(path.join(f.root,'content/posts/manual/index.md'),'manual');
 const result=await syncNotionDatabase({...f,notion:client([page(ID,'Draft')]),databaseId:'db',renderer,logger});
 assert.equal(result.unpublished,2);assert.match(fs.readFileSync(f.file,'utf8'),/draft: true/);assert.match(fs.readFileSync(f.file,'utf8'),/Original good body/);assert.match(fs.readFileSync(path.join(f.root,'content/posts/duplicate/index.md'),'utf8'),/draft: true/);assert.equal(fs.readFileSync(path.join(f.root,'content/posts/manual/index.md'),'utf8'),'manual');
});
test('missing page must be explicitly confirmed and inaccessible page fails closed',async t=>{
 const f=fixture(t);const before=snapshot(f.root);
 await assert.rejects(syncNotionDatabase({...f,notion:client([],async()=>{throw new Error('404');}),databaseId:'db',renderer,logger}),/404/);assert.deepEqual(snapshot(f.root),before);
 const result=await syncNotionDatabase({...f,notion:client([],async()=>({...page(),archived:true})),databaseId:'db',renderer,logger}); assert.equal(result.unpublished,1);
});
test('renaming title preserves existing URL and joins all title fragments',async t=>{
 const f=fixture(t);const p=page();p.properties['제목'].title=[{plain_text:'Renamed '},{plain_text:'title'}];
 await syncNotionDatabase({...f,notion:client([p]),databaseId:'db',renderer,logger});assert.match(fs.readFileSync(f.file,'utf8'),/title: "Renamed title"/);assert.deepEqual(fs.readdirSync(path.join(f.root,'content/posts')),['old-slug']);
});
test('repeated successful sync is idempotent without cache access-time churn',async t=>{
 const f=fixture(t);const args={...f,notion:client([page()]),databaseId:'db',renderer,logger};await syncNotionDatabase(args);const before=snapshot(f.root);
 const result=await syncNotionDatabase({...args,renderer:{convertBlocks:async()=>{throw new Error('must skip');}}});assert.equal(result.skipped,1);assert.deepEqual(snapshot(f.root),before);
});
test('empty body cannot erase known content',async t=>{
 const f=fixture(t);const before=snapshot(f.root);await assert.rejects(syncNotionDatabase({...f,notion:client([page()]),databaseId:'db',renderer:{convertBlocks:async()=>''},logger}),/empty body/);assert.deepEqual(snapshot(f.root),before);
});
test('Draft to Published refreshes even when last edited matches cache',async t=>{
 const f=fixture(t,{cached:true});fs.writeFileSync(f.file,f.text.replace('draft: false','draft: true'));
 const result=await syncNotionDatabase({...f,notion:client([page()]),databaseId:'db',renderer,logger});assert.equal(result.updated,1);assert.match(fs.readFileSync(f.file,'utf8'),/draft: false/);
});
test('new identical titles have distinct safe bounded slugs',()=>{
 assert.notEqual(createSlug('same',ID),createSlug('same',ID2));assert(!createSlug('../../',ID).includes('/'));assert(Buffer.byteLength(createSlug('가'.repeat(500),ID))<240);
});
test('query rejects duplicate IDs, malformed status and repeated pagination cursors',async()=>{
 await assert.rejects(getAllPages(client([page(),page()]),'db'),/Duplicate/);
 await assert.rejects(getAllPages(client([{id:ID,properties:{}}]),'db'),/status/);
 let n=0;const notion=client([]);notion.databases.query=async()=>({results:n++?[]:[page()],has_more:true,next_cursor:'same'});await assert.rejects(getAllPages(notion,'db'),/pagination/);
});
test('confirmed empty legacy placeholder is not treated as real source content',async t=>{
 const f=fixture(t);fs.writeFileSync(f.file,`---\ndraft: false\nnotion_id: "${ID}"\n---\n\n# Title\n\n> **Summary**\n> Summary text\n\n---\n\n*이 글은 Notion에서 가져왔습니다.*\n\n[원본 보기](https://www.notion.so/example)\n`);
 fs.writeFileSync(path.join(f.root,'.notion_cache_git.json'),JSON.stringify({[ID]:{slug:'old-slug',has_content:false}}));
 await syncNotionDatabase({...f,notion:client([page()]),databaseId:'db',renderer:{convertBlocks:async()=>''},logger});
 assert.doesNotMatch(fs.readFileSync(f.file,'utf8'),/원본 보기/);
});
test('repaired zero-byte assets are applied from staging',async t=>{
 const f=fixture(t);const asset=path.join(path.dirname(f.file),'image_abcdefabcdef.png');fs.writeFileSync(asset,'');
 await syncNotionDatabase({...f,notion:client([page()]),databaseId:'db',renderer:{convertBlocks:async(id,dir)=>{fs.writeFileSync(path.join(dir,'image_abcdefabcdef.png'),'repaired bytes');return '![image](image_abcdefabcdef.png)';}},logger});
 assert.equal(fs.readFileSync(asset,'utf8'),'repaired bytes');
});
test('cache order is stable when database result order changes',async t=>{
 const f=fixture(t);const pages=[page(),page(ID2)];const args={...f,notion:client(pages),databaseId:'db',renderer,logger};await syncNotionDatabase(args);const before=fs.readFileSync(path.join(f.root,'.notion_cache_git.json'),'utf8');
 await syncNotionDatabase({...args,notion:client([...pages].reverse())});assert.equal(fs.readFileSync(path.join(f.root,'.notion_cache_git.json'),'utf8'),before);
});

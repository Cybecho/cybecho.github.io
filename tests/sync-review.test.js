'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const {syncNotionDatabase,createSlug}=require('../scripts/sync-notion');
const ID='11111111-1111-4111-8111-111111111111';
const ID2='11111111-1111-4222-8222-222222222222';
function page(id=ID){return {id,created_time:'2026-01-01T00:00:00Z',last_edited_time:'2026-11-11T00:00:00Z',properties:{Status:{type:'select',select:{name:'Published'}},'제목':{type:'title',title:[{plain_text:'Same title'}]}}};}
function fixture(t){const root=fs.mkdtempSync(path.join(os.tmpdir(),'sync-review-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));return root;}
function args(root,pages,renderer={convertBlocks:async id=>`Body for ${id}`}){return {root,databaseId:'database',notion:{databases:{query:async()=>({results:pages,has_more:false})},pages:{retrieve:async()=>{throw new Error('Unexpected retrieve')}}},renderer,logger:{log(){}}};}
test('new same-title pages sharing Notion ID prefix never overwrite each other',async t=>{
 const root=fixture(t);
 await syncNotionDatabase(args(root,[page(ID),page(ID2)]));
 const posts=path.join(root,'content/posts');
 const bundles=fs.readdirSync(posts);
 assert.equal(bundles.length,2,'Both source pages must survive');
 assert.notEqual(createSlug('Same title',ID),createSlug('Same title',ID2));
 for(const id of [ID,ID2])assert(bundles.some(slug=>fs.readFileSync(path.join(posts,slug,'index.md'),'utf8').includes(`Body for ${id}`)));
});
test('ordinary unclassified Notion rows do not block publishing',async t=>{
 const root=fixture(t);const unclassified=page(ID2);unclassified.properties.Status.select=null;
 const result=await syncNotionDatabase(args(root,[page(ID),unclassified]));
 assert.equal(result.published,1);
 assert.equal(fs.readdirSync(path.join(root,'content/posts')).length,1);
});
test('existing nonempty source is protected even with a poisoned false-content cache',async t=>{
 const root=fixture(t);const dir=path.join(root,'content/posts/existing');fs.mkdirSync(dir,{recursive:true});
 const original=`---\ntitle: Existing\nnotion_id: "${ID}"\ndraft: false\n---\n\n# Existing\n\nImportant actual article body.\n`;
 fs.writeFileSync(path.join(dir,'index.md'),original);
 fs.writeFileSync(path.join(root,'.notion_cache_git.json'),JSON.stringify({[ID]:{slug:'existing',has_content:false,last_edited_time:'old'}}));
 await assert.rejects(syncNotionDatabase(args(root,[page()],{convertBlocks:async()=>''})),/empty/i);
 assert.equal(fs.readFileSync(path.join(dir,'index.md'),'utf8'),original);
});

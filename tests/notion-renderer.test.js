'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const { createRenderer, createImageFilename, downloadImage } = require('../scripts/notion-renderer');
const text = value => [{ plain_text: value }];
const response = results => ({ results, has_more: false, next_cursor: null });
const client = list => ({ blocks: { children: { list } } });
const paragraph = value => ({ type: 'paragraph', paragraph: { rich_text: text(value) } });
const temp = t => { const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'renderer-')); t.after(() => fs.rmSync(dir,{recursive:true,force:true})); return dir; };

test('Notion signatures do not change identity; external transformations do', () => {
 const base = 'https://prod-files-secure.s3.us-west-2.amazonaws.com/space/photo.png';
 assert.equal(createImageFilename(base+'?X-Amz-Signature=one&X-Amz-Expires=10'),createImageFilename(base+'?X-Amz-Signature=two&X-Amz-Expires=20'));
 assert.equal(createImageFilename('https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a/photo.png?Signature=one'),createImageFilename('https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a/photo.png?Signature=two'));
 assert.notEqual(createImageFilename('https://s3.us-west-2.amazonaws.com/other-bucket/photo.png?Signature=one'),createImageFilename('https://s3.us-west-2.amazonaws.com/other-bucket/photo.png?Signature=two'));
 assert.notEqual(createImageFilename('https://example.com/photo.png?width=100'),createImageFilename('https://example.com/photo.png?width=200'));
});
test('parent and nested errors reject rather than produce empty content', async () => {
 const renderer=createRenderer(client(async ({block_id}) => { if(block_id==='root')return response([{...paragraph('parent'),id:'child',has_children:true}]); throw new Error('API failed'); }),{delayMs:0});
 await assert.rejects(renderer.convertBlocks('root','unused'),/API failed/);
});
test('paginates table rows and propagates failure on subsequent table page', async () => {
 let fail=false;
 const renderer=createRenderer(client(async ({block_id,start_cursor}) => {
  if(block_id==='root')return response([{type:'table',id:'table',table:{table_width:1,has_column_header:true}}]);
  if(!start_cursor)return {results:[{type:'table_row',table_row:{cells:[text('head')]}}],has_more:true,next_cursor:'second'};
  if(fail)throw new Error('table failed');
  return response([{type:'table_row',table_row:{cells:[text('row')]}}]);
 }),{delayMs:0});
 assert.match(await renderer.convertBlocks('root','unused'),/\| head \|\n\| --- \|\n\| row \|/);
 fail=true; await assert.rejects(renderer.convertBlocks('root','unused'),/table failed/);
});
test('block pagination rejects malformed/repeated cursors', async () => {
 const renderer=createRenderer(client(async()=>({results:[],has_more:true,next_cursor:'same'})));
 await assert.rejects(renderer.convertBlocks('root','unused'),/pagination/);
});
test('image failures reject without emitting expiring fallback links', async t => {
 const dir=temp(t);
 const renderer=createRenderer(client(async()=>response([{type:'image',image:{file:{url:'https://example.com/a.png'}}}])),{downloadImage:async()=>{throw new Error('download failed')},delayMs:0});
 await assert.rejects(renderer.convertBlocks('root',dir),/download failed/);
 assert.deepEqual(fs.readdirSync(dir),[]);
});
test('byte-identical legacy image is reused and existing assets preserved', async t => {
 const dir=temp(t); fs.writeFileSync(path.join(dir,'image_123456789abc.png'),'image');fs.writeFileSync(path.join(dir,'image_aabbccddeeff.png'),'unrelated');
 const renderer=createRenderer(client(async()=>response([{type:'image',image:{file:{url:'https://example.com/a.png'}}}])),{downloadImage:async(url,dest)=>fs.writeFileSync(dest,'image'),delayMs:0});
 assert.equal(await renderer.convertBlocks('root',dir),'![Image](image_123456789abc.png)\n\n');
 assert.equal(fs.readdirSync(dir).length,2);
});
test('unknown container descendants, formatting and code remain rendered', async () => {
 const renderer=createRenderer(client(async({block_id})=>response(block_id==='root'?[{type:'column',id:'col',has_children:true}]:[{type:'heading_2',heading_2:{rich_text:text('Heading')}},{type:'code',code:{language:'js',rich_text:text('const x = 1;')}}])),{delayMs:0});
 assert.equal(await renderer.convertBlocks('root','unused'),'## Heading\n\n```js\nconst x = 1;\n```\n\n');
});
test('download is atomic, follows relative redirect, rejects failures, bounds time and size', async t => {
 const dir=temp(t);
 const png=await require('sharp')({create:{width:2,height:2,channels:3,background:'#123456'}}).png().toBuffer();
 const server=http.createServer((req,res)=>{
  if(req.url==='/redirect'){res.writeHead(302,{location:'/ok'});return res.end();}
  if(req.url==='/loop'){res.writeHead(302,{location:'/loop'});return res.end();}
  if(req.url==='/bad'){res.writeHead(503);return res.end('bad');}
  if(req.url==='/slow')return;
  if(req.url==='/empty')return res.end();
  if(req.url==='/html'){res.setHeader('Content-Type','image/png');return res.end('<html>Error</html>');}
  if(req.url==='/mislabeled')res.setHeader('Content-Type','text/html');
  res.end(png);
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 t.after(()=>{server.closeAllConnections();server.close();});
 const url=`http://127.0.0.1:${server.address().port}`;const dest=path.join(dir,'image.png');
 await downloadImage(url+'/redirect',dest);assert.deepEqual(fs.readFileSync(dest),png);
 await downloadImage(url+'/mislabeled',dest);assert.deepEqual(fs.readFileSync(dest),png);
 for(const [route,options] of [['/html',{}],['/bad',{}],['/loop',{maxRedirects:1}],['/slow',{timeoutMs:20}],['/ok',{maxBytes:2}],['/empty',{}]]) {
  await assert.rejects(downloadImage(url+route,dest,options));
  assert.deepEqual(fs.readFileSync(dest),png);
  assert.deepEqual(fs.readdirSync(dir),['image.png']);
 }
});

function legacyName(url) { return 'image_'+require('node:crypto').createHash('md5').update(url).digest('hex').slice(0,12)+'.png'; }
const imagePage = url => client(async()=>response([{type:'image',image:{external:{url}}}]));
test('valid exact legacy URL cache is reused locally or copied across historical bundles', async t=>{
 const root=temp(t);const legacyRoot=path.join(root,'old'),stage=path.join(root,'stage');fs.mkdirSync(path.join(legacyRoot,'old-post'),{recursive:true});fs.mkdirSync(stage);
 const url='https://example.com/image.png?size=100';const name=legacyName(url);
 const png=await require('sharp')({create:{width:2,height:2,channels:3,background:'#123456'}}).png().toBuffer();
 const source=path.join(legacyRoot,'old-post',name);fs.writeFileSync(source,png);
 const renderer=createRenderer(imagePage(url),{legacyAssetRoot:legacyRoot,downloadImage:async()=>{throw new Error('Must use proven cache');},delayMs:0});
 assert.equal(await renderer.convertBlocks('page',stage),`![Image](${name})\n\n`);
 assert.deepEqual(fs.readFileSync(path.join(stage,name)),png);assert.deepEqual(fs.readFileSync(source),png);
 const local=createRenderer(imagePage(url),{downloadImage:async()=>{throw new Error('Must use local legacy cache');},delayMs:0});
 assert.equal(await local.convertBlocks('page',stage),`![Image](${name})\n\n`);
});
test('invalid legacy documents are not trusted and query variants never cross-match',async t=>{
 const root=temp(t),stage=path.join(root,'stage'),old=path.join(root,'old');fs.mkdirSync(stage);fs.mkdirSync(path.join(old,'bundle'),{recursive:true});
 const url='https://example.com/image.png?size=100';fs.writeFileSync(path.join(old,'bundle',legacyName(url)),'<html>Error</html>');
 let attempted=0;
 const renderer=createRenderer(imagePage(url),{legacyAssetRoot:old,downloadImage:async()=>{attempted++;throw new Error('endpoint failure');},delayMs:0});
 await assert.rejects(renderer.convertBlocks('page',stage),error=>error.asset_host==='example.com');assert.equal(attempted,1);
 const png=await require('sharp')({create:{width:2,height:2,channels:3,background:'#123456'}}).png().toBuffer();fs.writeFileSync(path.join(old,'bundle',legacyName(url)),png);
 const different=createRenderer(imagePage(url.replace('100','200')),{legacyAssetRoot:old,downloadImage:async()=>{throw new Error('query cache miss');},delayMs:0});
 await assert.rejects(different.convertBlocks('page',stage),/query cache miss/);
});
test('conflicting valid global legacy cache entries fail instead of guessing',async t=>{
 const root=temp(t),stage=path.join(root,'stage'),old=path.join(root,'old');fs.mkdirSync(stage);
 const url='https://example.com/image.png';
 for(const [bundle,color] of [['one','#000000'],['two','#ffffff']]){
  fs.mkdirSync(path.join(old,bundle),{recursive:true});const png=await require('sharp')({create:{width:2,height:2,channels:3,background:color}}).png().toBuffer();fs.writeFileSync(path.join(old,bundle,legacyName(url)),png);
 }
 const renderer=createRenderer(imagePage(url),{legacyAssetRoot:old,downloadImage:async()=>{throw new Error('must not guess');},delayMs:0});
 await assert.rejects(renderer.convertBlocks('page',stage),error=>error.code==='IMAGE_CACHE_CONFLICT'&&error.asset_host==='example.com');assert.deepEqual(fs.readdirSync(stage),[]);
});
test('document responses report only safe host metadata and never replace valid destination',async t=>{
 const root=temp(t),dest=path.join(root,'image.png');fs.writeFileSync(dest,'existing');
 const server=http.createServer((req,res)=>{res.setHeader('Content-Type','image/png');res.end('{"error":"private diagnostic"}');});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));t.after(()=>server.close());
 const url=`http://127.0.0.1:${server.address().port}/private-path?secret=value`;
 await assert.rejects(downloadImage(url,dest),error=>error.code==='IMAGE_NOT_IMAGE'&&error.asset_host==='127.0.0.1'&&!error.message.includes('secret')&&!error.message.includes('private'));
 assert.equal(fs.readFileSync(dest,'utf8'),'existing');assert.deepEqual(fs.readdirSync(root),['image.png']);
});

test('failed stable external image preserves exact target with structured warning',async t=>{
 const dir=temp(t);const warnings=[];const url='https://img.etnews.com/2020/image.jpg';
 const notion=client(async()=>response([{id:'11111111-1111-4111-8111-111111111111',type:'image',image:{type:'external',external:{url}}}]));
 const renderer=createRenderer(notion,{downloadImage:async()=>{const error=new Error('Private endpoint diagnostic https://secret.invalid/?token=x');error.code='ABORT_ERR';throw error;},onAssetWarning:warning=>warnings.push(warning),delayMs:0});
 assert.equal(await renderer.convertBlocks('page',dir),`![Image](<${url}>)\n\n`);
 assert.deepEqual(warnings,[{host:'img.etnews.com',code:'ABORT_ERR',block_id:'11111111-1111-4111-8111-111111111111'}]);
 assert(!JSON.stringify(warnings).includes('https:'));assert.deepEqual(fs.readdirSync(dir),[]);
});
test('ambiguous external URLs and Notion file images never degrade to remote fallback',async t=>{
 const dir=temp(t);
 const urls=['https://example.com/a.png?token=x','https://example.com/a.png#fragment','https://user:secret@example.com/a.png','http://example.com/a.png','https://prod-files-secure.s3.us-west-2.amazonaws.com/a.png','https://www.notion.so/a.png','https://file.notionusercontent.com/a.png','https://127.0.0.1/a.png','https://example.com/a.png?'];
 for(const url of urls){const renderer=createRenderer(imagePage(url),{downloadImage:async()=>{throw new Error('download failed');},onAssetWarning:()=>assert.fail('No ambiguous fallback'),delayMs:0});await assert.rejects(renderer.convertBlocks('page',dir),/download failed/);}
 const file=createRenderer(client(async()=>response([{type:'image',image:{type:'file',file:{url:'https://example.com/stable.png'}}}])),{downloadImage:async()=>{throw new Error('file download failed');},onAssetWarning:()=>assert.fail('No file fallback'),delayMs:0});
 await assert.rejects(file.convertBlocks('page',dir),/file download failed/);
});
test('image requests use descriptive agent and image accept without spoofed referer',async t=>{
 const dir=temp(t);let headers;
 const png=await require('sharp')({create:{width:1,height:1,channels:3,background:'#123456'}}).png().toBuffer();
 const server=http.createServer((req,res)=>{headers=req.headers;res.end(png);});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));t.after(()=>server.close());
 await downloadImage(`http://127.0.0.1:${server.address().port}/image.png`,path.join(dir,'image.png'));
 assert.match(headers['user-agent'],/CybechoBlog-NotionSync/);assert.match(headers.accept,/image\//);assert.equal(headers.referer,undefined);
});

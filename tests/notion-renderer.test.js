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
 const server=http.createServer((req,res)=>{
  if(req.url==='/redirect'){res.writeHead(302,{location:'/ok'});return res.end();}
  if(req.url==='/loop'){res.writeHead(302,{location:'/loop'});return res.end();}
  if(req.url==='/bad'){res.writeHead(503);return res.end('bad');}
  if(req.url==='/slow')return;
  if(req.url==='/empty')return res.end();
  res.end('image bytes');
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 t.after(()=>{server.closeAllConnections();server.close();});
 const url=`http://127.0.0.1:${server.address().port}`;const dest=path.join(dir,'image.png');
 await downloadImage(url+'/redirect',dest);assert.equal(fs.readFileSync(dest,'utf8'),'image bytes');
 for(const [route,options] of [['/bad',{}],['/loop',{maxRedirects:1}],['/slow',{timeoutMs:20}],['/ok',{maxBytes:2}],['/empty',{}]]) {
  await assert.rejects(downloadImage(url+route,dest,options));
  assert.equal(fs.readFileSync(dest,'utf8'),'image bytes');
  assert.deepEqual(fs.readdirSync(dir),['image.png']);
 }
});

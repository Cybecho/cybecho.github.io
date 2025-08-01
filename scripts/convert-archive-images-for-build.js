#!/usr/bin/env node

/**
 * Archives 디렉토리의 이미지 경로 변환 스크립트 (빌드 전용)
 * 
 * 1. 로컬 작업용 경로 (./static/images/...) 를 Hugo 빌드용 경로 (/images/...) 로 변환
 * 2. Obsidian 스타일 이미지 임베딩 (![[filename.ext]]) 을 Hugo 호환 형식으로 변환
 * 3. 원본 파일은 수정하지 않고, 빌드용 임시 복사본만 변환
 * 
 * 오직 content/archives/ 디렉토리의 파일들만 처리합니다.
 */

const fs = require('fs');
const path = require('path');

// Archives 디렉토리 경로
const ARCHIVES_DIR = path.join(__dirname, '..', 'content', 'archives');

/**
 * 마크다운 파일에서 이미지 경로를 변환합니다
 * @param {string} content - 마크다운 파일 내용
 * @returns {string} - 변환된 내용
 */
function convertImagePaths(content) {
    let hasChanges = false;
    
    // 1. 기존 정규식: ![...](./static/images/...) 또는 ![...](../static/images/...) 등을 찾아서 변환
    const imageRegex = /!\[([^\]]*)\]\(\.\.?\/static\/images\/([^)]+)\)/g;
    content = content.replace(imageRegex, (match, altText, imagePath) => {
        // ./static/images/... 또는 ../static/images/... => /images/...
        const newPath = `/images/${imagePath}`;
        console.log(`  변환: ${match} => ![${altText}](${newPath})`);
        hasChanges = true;
        return `![${altText}](${newPath})`;
    });
    
    // 2. Obsidian 스타일 이미지 임베딩: ![[filename.ext]] => ![](/images/archives/encoded-filename.ext)
    const obsidianImageRegex = /!\[\[([^\]]+)\]\]/g;
    content = content.replace(obsidianImageRegex, (match, filename) => {
        // 파일명에 공백이 있는 경우 URL 인코딩 처리
        const encodedFilename = encodeURIComponent(filename);
        // Obsidian 스타일을 Hugo가 인식할 수 있는 형식으로 변환
        // ![[filename.ext]] => ![](/images/archives/encoded-filename.ext)
        const newPath = `/images/archives/${encodedFilename}`;
        console.log(`  Obsidian 이미지 변환: ${match} => ![](${newPath})`);
        hasChanges = true;
        return `![](${newPath})`;
    });
    
    return content;
}

/**
 * 디렉토리를 재귀적으로 탐색하여 마크다운 파일을 처리합니다
 * @param {string} dirPath - 탐색할 디렉토리 경로
 */
function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
            // 하위 디렉토리 재귀 처리
            processDirectory(itemPath);
        } else if (item.endsWith('.md')) {
            // 마크다운 파일 처리
            processMarkdownFile(itemPath);
        }
    }
}

/**
 * 마크다운 파일을 처리합니다 (원본 파일을 직접 수정)
 * @param {string} filePath - 마크다운 파일 경로
 */
function processMarkdownFile(filePath) {
    console.log(`처리 중: ${path.relative(process.cwd(), filePath)}`);
    
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const convertedContent = convertImagePaths(content);
        
        // 변경사항이 있는 경우에만 파일 저장
        if (content !== convertedContent) {
            fs.writeFileSync(filePath, convertedContent, 'utf8');
            console.log(`  ✅ 파일 업데이트 완료`);
        } else {
            console.log(`  ⏭️  변경사항 없음`);
        }
    } catch (error) {
        console.error(`  ❌ 파일 처리 오류: ${error.message}`);
    }
}

/**
 * 메인 실행 함수
 */
function main() {
    console.log('🔄 Archives 디렉토리 이미지 경로 변환 시작 (빌드 전용)...');
    console.log(`📁 대상 디렉토리: ${ARCHIVES_DIR}`);
    
    // archives 디렉토리 존재 확인
    if (!fs.existsSync(ARCHIVES_DIR)) {
        console.error(`❌ Archives 디렉토리를 찾을 수 없습니다: ${ARCHIVES_DIR}`);
        process.exit(1);
    }
    
    try {
        processDirectory(ARCHIVES_DIR);
        console.log('✅ 이미지 경로 변환 완료!');
    } catch (error) {
        console.error(`❌ 처리 중 오류 발생: ${error.message}`);
        process.exit(1);
    }
}

// 스크립트가 직접 실행된 경우에만 main 함수 실행
if (require.main === module) {
    main();
}

module.exports = { convertImagePaths, processMarkdownFile };
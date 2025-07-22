# URL 프리뷰 사용 가이드

## 🎯 기본 사용법

블로그 포스트에 외부 링크를 삽입하면 자동으로 아름다운 프리뷰 카드가 생성됩니다.

### 예시
```markdown
이 링크를 확인해보세요: https://github.com/microsoft/vscode
```

위 링크는 자동으로 다음과 같은 카드로 변환됩니다:
- 📸 썸네일 이미지
- 📝 페이지 제목
- 📄 페이지 설명
- 🌐 도메인 정보

## 🚫 프리뷰 비활성화

### 방법 1: CSS 클래스 사용
```html
<a href="https://example.com" class="no-preview">링크 텍스트</a>
```

### 방법 2: 마크다운 + HTML
```markdown
<a href="https://example.com" class="no-preview">링크 텍스트</a>
```

## ⚙️ 설정 커스터마이징

`static/js/url-preview-config.js` 파일을 수정하여 동작을 커스터마이징할 수 있습니다.

### 도메인 제외하기
```javascript
excludeDomains: [
  'private-site.com',    // 프리뷰 비활성화할 도메인 추가
  'internal.company.com'
]
```

### 특정 요소 제외하기
```javascript
excludeSelectors: [
  '.no-preview',         // 기본 제외 클래스
  '.custom-link',        // 커스텀 클래스 추가
  'nav a'               // 네비게이션 링크 제외
]
```

### 파일 확장자 제외하기
```javascript
excludePatterns: [
  /\.pdf$/i,            // PDF 파일
  /\.zip$/i,            // ZIP 파일  
  /\.(jpg|png|gif)$/i   // 이미지 파일
]
```

## 🎨 스타일링

CSS 변수를 사용하여 프리뷰 카드 스타일을 커스터마이징할 수 있습니다:

```css
:root {
  --border-color: #e5e7eb;
  --secondary-bg: #f9fafb;
  --text-color: #1f2937;
  --text-color-secondary: #6b7280;
  --primary-color: #3b82f6;
}
```

## 🔧 성능 최적화

### 캐시 설정
```javascript
cache: {
  maxAge: 3600000,  // 1시간 캐시
  maxSize: 100      // 최대 100개 항목
}
```

### 지연 시간 조정
```javascript
debounceTime: 300,  // 300ms 지연
timeout: 10000      // 10초 타임아웃
```

## 🛠️ 문제 해결

### 프리뷰가 생성되지 않는 경우
1. 링크가 외부 도메인인지 확인
2. `no-preview` 클래스가 있는지 확인
3. 제외 도메인/패턴에 포함되는지 확인
4. 브라우저 콘솔에서 오류 메시지 확인

### CORS 오류가 발생하는 경우
프록시 서버가 일시적으로 불안정할 수 있습니다. 잠시 후 다시 시도하거나, `url-preview-config.js`에서 다른 프록시를 추가할 수 있습니다.

### 메모리 사용량이 많은 경우
`cache.maxSize`를 더 작은 값으로 설정하여 메모리 사용량을 줄일 수 있습니다.

## 🔒 보안 및 개인정보

- 모든 요청은 CORS 프록시를 통해 처리됩니다
- 개인정보가 포함된 내부 사이트는 제외 설정하는 것을 권장합니다
- 프리뷰 데이터는 브라우저 캐시에만 저장되며 서버로 전송되지 않습니다

## 📱 모바일 지원

프리뷰 카드는 반응형으로 설계되어 모바일 기기에서도 최적화된 표시됩니다:
- 모바일: 세로 레이아웃
- 데스크톱: 가로 레이아웃

## 🎯 접근성

- 스크린 리더 지원을 위한 `aria-label` 제공
- 키보드 탐색 지원
- 충분한 색상 대비 유지
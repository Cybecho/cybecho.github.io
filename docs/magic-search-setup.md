# Magic Search 설정 가이드

이 가이드는 Cloudflare Workers를 사용하여 Magic Search의 AI 기능을 설정하는 방법을 설명합니다.

## 아키텍처 개요

```
사용자 브라우저
    │
    ├── 1. Fuse.js로 관련 글 검색 (클라이언트)
    │
    ├── 2. 검색 결과를 컨텍스트로 구성
    │
    └── 3. Cloudflare Worker에 요청
            │
            └── Gemini API 호출 (API 키는 Worker에서 관리)
                    │
                    └── AI 응답 반환
```

## 설정 단계

### Step 1: Google AI Studio에서 API 키 발급

1. [Google AI Studio](https://aistudio.google.com/) 접속
2. 로그인 후 **Get API key** 클릭
3. **Create API key** 클릭
4. 발급된 API 키를 안전한 곳에 저장

### Step 2: Cloudflare 계정 생성

1. [Cloudflare](https://dash.cloudflare.com/sign-up) 계정 생성 (무료)
2. 이메일 인증 완료

### Step 3: Cloudflare Worker 배포

#### 방법 A: Cloudflare 대시보드 사용 (가장 쉬움)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 로그인
2. 좌측 메뉴에서 **Workers & Pages** 클릭
3. **Create** 버튼 클릭
4. **Create Worker** 선택
5. Worker 이름 입력: `magic-search-proxy`
6. **Deploy** 클릭
7. 배포 완료 후 **Edit code** 클릭
8. `cloudflare-worker/worker.js` 파일의 내용을 복사하여 붙여넣기
9. **Save and deploy** 클릭

#### 방법 B: Wrangler CLI 사용

```bash
# Wrangler 설치
npm install -g wrangler

# Cloudflare 로그인
wrangler login

# Worker 배포 (cloudflare-worker 디렉토리에서)
cd cloudflare-worker
wrangler deploy
```

### Step 4: 환경변수 설정 (API 키)

1. Cloudflare Dashboard에서 **Workers & Pages** → `magic-search-proxy` 클릭
2. **Settings** 탭 클릭
3. **Variables and Secrets** 섹션에서 **Add** 클릭
4. 다음 값 입력:
   - **Variable name**: `GEMINI_API_KEY`
   - **Value**: Step 1에서 발급받은 API 키
5. **Encrypt** 체크 (권장)
6. **Save and deploy** 클릭

### Step 5: Worker URL 확인

1. Worker 개요 페이지에서 URL 확인
   - 형식: `https://magic-search-proxy.YOUR_SUBDOMAIN.workers.dev`
2. 이 URL을 복사

### Step 6: Magic Search 페이지에 URL 설정

`layouts/magic-search/single.html` 파일에서:

```javascript
const CONFIG = {
  // TODO: Cloudflare Worker 배포 후 이 URL을 변경하세요
  WORKER_URL: 'https://magic-search-proxy.YOUR_SUBDOMAIN.workers.dev',
  // ...
};
```

`YOUR_SUBDOMAIN`을 실제 Cloudflare 서브도메인으로 변경하세요.

### Step 7: 테스트

1. 블로그를 로컬에서 실행: `hugo server`
2. `/magic-search/` 페이지 접속
3. 질문 입력 후 정상 동작 확인

## 무료 사용량

### Cloudflare Workers
- **일일 100,000 요청** (무료)
- 충분히 넉넉한 용량

### Gemini API
- **분당 15 요청** (무료 티어)
- **일일 1,500 요청** (무료 티어)

## 보안 설정

Worker 코드의 `ALLOWED_ORIGINS`에 본인 도메인만 허용되어 있습니다:

```javascript
ALLOWED_ORIGINS: [
  'https://cybecho.github.io',
  'http://localhost:1313',
  'http://127.0.0.1:1313'
],
```

다른 도메인에서 사용하려면 이 배열에 추가하세요.

## Rate Limiting

- **IP당 일일 30회** 요청 제한 (Worker에서 관리)
- Worker 재시작 시 리셋됨 (인메모리 저장)

더 강력한 rate limiting이 필요하면 Cloudflare KV를 사용할 수 있습니다.

## 트러블슈팅

### "Origin not allowed" 에러
→ Worker의 `ALLOWED_ORIGINS`에 본인 도메인 추가

### "API key not configured" 에러
→ Cloudflare Worker 환경변수에 `GEMINI_API_KEY` 설정 확인

### "Rate limit exceeded" 에러
→ 일일 요청 한도 초과, 다음 날 다시 시도

### CORS 에러
→ Worker가 올바르게 배포되었는지 확인

## 비용

**완전 무료**로 운영 가능합니다:
- Cloudflare Workers: 무료 (100,000 요청/일)
- Gemini API: 무료 (1,500 요청/일)
- GitHub Pages: 무료

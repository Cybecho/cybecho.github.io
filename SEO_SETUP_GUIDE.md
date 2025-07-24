# SEO 최적화 설정 가이드

이 문서는 cybecho.github.io 웹사이트의 Google SEO 최적화를 위한 설정 가이드입니다.

## 🎯 이미 완료된 설정

### 1. 기본 SEO 구성
- ✅ robots.txt 설정 완료
- ✅ sitemap.xml 자동 생성 설정
- ✅ 메타태그 최적화 (description, keywords, author)
- ✅ Open Graph 메타태그 (Facebook, LinkedIn 등)
- ✅ Twitter Card 메타태그
- ✅ Schema.org JSON-LD 구조화 데이터
- ✅ Canonical URL 설정

### 2. 사이트 구조 최적화
- ✅ 다국어 설정 (ko-KR)
- ✅ RSS 피드 생성
- ✅ 사이트맵 주기적 업데이트 설정
- ✅ 반응형 디자인 (모바일 친화적)

## 🚀 사용자가 직접 설정해야 할 항목

### 1. Google Search Console 등록

1. [Google Search Console](https://search.google.com/search-console) 접속
2. '속성 추가' → 'URL 접두어' 선택
3. `https://cybecho.github.io` 입력
4. 소유권 확인을 위해 다음 중 하나 선택:
   - **권장**: HTML 메타태그 방법
   - DNS 인증
   - HTML 파일 업로드

#### HTML 메타태그 방법 (권장)
1. Google에서 제공하는 메타태그 확인
2. `hugo.toml` 파일에서 다음 라인 수정:
   ```toml
   # Google Search Console (설정 시 추가)  
   googleSiteVerification = "여기에_확인_코드_입력"
   ```
3. 사이트 빌드 및 배포 후 Google에서 확인

### 2. 사이트맵 제출

Google Search Console에서:
1. 좌측 메뉴 → 'Sitemaps' 클릭
2. 'ADD A NEW SITEMAP' → `sitemap.xml` 입력
3. 'SUBMIT' 클릭

### 3. Google Analytics 설정 (선택사항)

1. [Google Analytics](https://analytics.google.com) 접속
2. 새 속성 생성
3. 웹사이트 선택 → URL 입력
4. 측정 ID (G-XXXXXXXXXX) 획득
5. `hugo.toml` 파일에서 다음 라인 수정:
   ```toml
   # Google Analytics (설정 시 추가)
   googleAnalytics = "G-XXXXXXXXXX"
   ```

### 4. 네이버 서치어드바이저 등록 (선택사항)

1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. 웹마스터 도구에서 사이트 등록
3. 소유권 확인 후 사이트맵 제출

## 📈 SEO 최적화 체크리스트

### 콘텐츠 작성 시 권장사항

1. **제목 최적화**
   - 각 페이지마다 고유한 제목 사용
   - 60자 이내로 작성
   - 주요 키워드 포함

2. **메타 디스크립션**
   - 각 글의 front matter에 `description` 추가
   ```yaml
   ---
   title: "글 제목"
   description: "150-160자 이내의 페이지 설명"
   tags: ["태그1", "태그2"]
   ---
   ```

3. **이미지 최적화**
   - `featured_image` 파라미터 활용
   - alt 텍스트 포함
   - 적절한 크기 (1200x630px 권장)

4. **내부 링크 구조**
   - 관련 글들 간의 링크 연결
   - 적절한 앵커 텍스트 사용

## 🔍 SEO 성과 모니터링

### 확인 도구
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [구글 리치 결과 테스트](https://search.google.com/test/rich-results)
- [Open Graph Debugger](https://developers.facebook.com/tools/debug/)

### 주요 지표
- 검색 노출 수
- 클릭률 (CTR)
- 평균 게재 순위
- 페이지 로딩 속도
- 모바일 사용성

## 🚨 주의사항

1. **robots.txt 수정 금지**
   - 현재 설정이 최적화되어 있음
   - 잘못 수정 시 검색엔진 크롤링 차단 위험

2. **사이트맵 자동 생성**
   - Hugo가 자동으로 생성하므로 수동 생성 불필요
   - 새 글 작성 시 자동으로 업데이트됨

3. **URL 구조 변경 주의**
   - 기존 URL 변경 시 301 리다이렉트 설정 필요
   - 가능한 한 URL 구조 유지 권장

## 📞 문제 발생 시

SEO 설정 관련 문제가 발생하면:
1. Google Search Console에서 오류 확인
2. 사이트 상태 점검
3. 최근 변경사항 검토

---

**설정 완료 후 결과 확인까지 보통 1-4주 소요됩니다.**
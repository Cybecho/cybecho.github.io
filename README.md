# cybecho.github.io
cybecho's blog (sync notion)

  이 프로젝트는 Notion 데이터베이스에서 Hugo 정적 사이트로 자동 동기화하는 시스템입니다.

  1. 핵심 구성요소:
  - Hugo 블로그: 한국어 블로그 ("삽질 저장소") - hugo.toml:3
  - Notion API 동기화: scripts/sync-notion.js:1에서 구현
  - GitHub Actions 자동화: .github/workflows/hugo-with-notion.yml:1

  2. 데이터 플로우:
  Notion DB (Published 포스트) → API 호출 → Markdown 변환 → Hugo 빌드 → GitHub Pages

  3. 동기화 프로세스 (scripts/sync-notion.js):
  - Notion API로 "Published" 상태 포스트들을 조회 (scripts/sync-notion.js:199-202)
  - 캐시 시스템으로 중복 처리 방지 (scripts/sync-notion.js:8-26)
  - 리치 텍스트를 Markdown으로 변환 (scripts/sync-notion.js:69-81)
  - YAML front matter 생성 (제목, 날짜, 태그, 시리즈) (scripts/sync-notion.js:275-298)
  - content/posts/{slug}/index.md 형태로 저장

  4. 자동화 스케줄:
  - 매일 새벽 2시 자동 실행 (.github/workflows/hugo-with-notion.yml:7)
  - main 브랜치 푸시 시 즉시 실행
  - 수동 트리거 가능

  5. 특징:
  - 한글 제목 완벽 보존 (scripts/sync-notion.js:48-67)
  - AI 요약 지원 (scripts/sync-notion.js:270, scripts/sync-notion.js:307-311)
  - 시리즈/태그 분리 관리 (scripts/sync-notion.js:281-289)
  - 효율적인 캐시 시스템 (변경된 내용만 업데이트)

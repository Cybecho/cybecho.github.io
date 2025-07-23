# 📝 Giscus 댓글 시스템 설정 가이드

이 가이드를 따라 GitHub Discussions 기반 댓글 시스템을 활성화하세요.

## 🚀 1단계: GitHub Repository Discussions 활성화

1. **GitHub Repository로 이동**
   - `https://github.com/Cybecho/cybecho.github.io` 이동

2. **Settings 탭 클릭**
   - Repository 상단 메뉴에서 "Settings" 선택

3. **Features 섹션에서 Discussions 활성화**
   - "General" 설정 페이지에서 "Features" 섹션 찾기
   - "Discussions" 체크박스 활성화
   - "Set up discussions" 버튼 클릭

4. **Discussion Categories 설정**
   - "General" 카테고리 외에 "Comments" 카테고리 추가
   - 카테고리 이름: `Comments`
   - 설명: `Blog post comments`

## 🔧 2단계: Giscus 앱 설치 및 설정

1. **Giscus 설정 페이지 방문**
   - https://giscus.app/ko 접속

2. **Repository 정보 입력**
   ```
   Repository: Cybecho/cybecho.github.io
   ```

3. **Page ↔️ Discussions 매핑 설정**
   - "pathname 기반" 선택 (권장)
   - 이유: 안정적인 URL 기반 댓글 연결

4. **Discussion 카테고리 선택**
   - "Comments" 카테고리 선택

5. **기능 설정**
   - ✅ "반응 활성화" 체크
   - ✅ "메타데이터 내보내기" 체크 (선택사항)
   - "댓글창 위치": "댓글창을 댓글들 위에 두기" 선택

6. **테마 선택**
   - "light" 테마 선택 (현재 블로그 테마와 일치)

## 📋 3단계: 생성된 설정값 적용

Giscus 설정 페이지에서 생성된 스크립트의 다음 값들을 확인하세요:

```html
<script src="https://giscus.app/client.js"
        data-repo="Cybecho/cybecho.github.io"
        data-repo-id="여기_나오는_값"
        data-category="Comments"
        data-category-id="여기_나오는_값"
        ...>
</script>
```

### 🔄 설정값 업데이트 방법

`layouts/partials/comments.html` 파일에서 다음 두 값을 업데이트하세요:

```html
data-repo-id="생성된_REPO_ID_값으로_교체"
data-category-id="생성된_CATEGORY_ID_값으로_교체"
```

## ✅ 4단계: 설정 완료 확인

1. **블로그 게시물 페이지 방문**
   - 아무 블로그 포스트나 접속
   - 페이지 하단에 댓글 섹션이 나타나는지 확인

2. **댓글 작성 테스트**
   - GitHub 계정으로 로그인
   - 테스트 댓글 작성

3. **GitHub Discussions 확인**
   - Repository의 "Discussions" 탭 방문
   - "Comments" 카테고리에 새 토론이 생성되었는지 확인

## 🛠️ 고급 설정 (선택사항)

### 안정적인 댓글 연결을 위한 개선

더 안정적인 댓글 시스템을 원한다면, 다음 단계를 추가로 진행하세요:

1. **notion-site.yml 수정**
```yaml
property_mapping:
  title: "Title"
  date: "Date"
  tags: "Tags"
  status: "Status"
  cover: "Cover"
  notion_id: "id"  # 추가
```

2. **Giscus 매핑을 "specific term"으로 변경**
```html
data-mapping="specific"
data-term="{{ .Params.notion_id | default .File.BaseNameWithoutExt }}"
```

## 🔍 문제 해결

### 댓글이 보이지 않을 때
- Repository가 public인지 확인
- Discussions가 활성화되어 있는지 확인
- 브라우저 개발자 도구에서 JavaScript 오류 확인

### 댓글이 다른 페이지에 연결될 때
- `data-mapping` 설정 확인
- URL 구조가 일관적인지 확인

### GitHub 로그인 문제
- 팝업 차단기가 활성화되어 있지 않은지 확인
- 브라우저의 쿠키/JavaScript 설정 확인

## 📞 지원

설정 중 문제가 발생하면:
- [Giscus 공식 문서](https://giscus.app/ko) 참조
- [GitHub Discussions](https://github.com/Cybecho/cybecho.github.io/discussions) 카테고리에 질문 등록

---

💡 **팁**: 댓글 시스템 설정 후 블로그의 각 포스트마다 고유한 Discussion이 자동으로 생성됩니다. Notion에서 글을 수정해도 URL이 동일하게 유지되어 댓글이 보존됩니다!
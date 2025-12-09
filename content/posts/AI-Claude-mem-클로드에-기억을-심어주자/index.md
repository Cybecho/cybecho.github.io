---
title: "AI - Claude mem 클로드에 기억을 심어주자"
date: 2025-12-08T11:08:00.000Z
draft: false
tags: ["AI", "Claude"]
series: ["AI"]
description: "Claude-Mem은 세션 종료 시 작업 내용을 자동으로 저장하고, 다음 세션에서 관련 컨텍스트를 불러오는 기능을 제공합니다. 자연어 검색을 통해 과거 작업을 쉽게 찾을 수 있으며, 웹 뷰어를 통해 저장된 메모리를 확인하고 설정을 변경할 수 있습니다. 설치는 간단하며, 민감한 정보는 "
notion_id: "2c31bab9-e3f8-8063-9be3-cc174273fb50"
notion_url: "https://www.notion.so/AI-Claude-mem-2c31bab9e3f880639be3cc174273fb50"
---

# AI - Claude mem 클로드에 기억을 심어주자

> **Summary**
> Claude-Mem은 세션 종료 시 작업 내용을 자동으로 저장하고, 다음 세션에서 관련 컨텍스트를 불러오는 기능을 제공합니다. 자연어 검색을 통해 과거 작업을 쉽게 찾을 수 있으며, 웹 뷰어를 통해 저장된 메모리를 확인하고 설정을 변경할 수 있습니다. 설치는 간단하며, 민감한 정보는 

---

# **Claude-Mem 사용 방법**

[https://github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

## 왜 필요한가?

Claude Code를 사용하다 보면 세션이 끊길 때마다 이전 작업 내용을 모두 잃어버립니다. 새 세션을 시작할 때마다 “저번에 이 버그를 어떻게 고쳤었는데…”, “인증 로직을 어떻게 구현했더라…” 같은 말을 반복하게 되죠.

Claude-Mem은 이 문제를 해결합니다. Claude가 수행한 모든 작업을 자동으로 저장하고, 다음 세션에서 관련 컨텍스트를 자동으로 불러옵니다.

## 핵심 기능

**자동 메모리 저장**

- 별도 명령 없이 모든 작업 내용이 자동으로 저장됩니다
- 세션이 종료되어도 다음 세션에서 이전 컨텍스트를 유지합니다
**자연어 검색**

- “지난주에 어떤 버그 고쳤지?“처럼 자연어로 과거 작업을 검색할 수 있습니다
- 10가지 검색 방법 제공 (파일별, 타입별, 시간별 등)
**웹 뷰어**

- [http://localhost:37777](http://localhost:37777/) 에서 저장된 모든 메모리를 확인할 수 있습니다
- 설정 변경과 검색도 웹 UI에서 가능합니다
## 설치 방법

Claude Code 터미널에서 두 줄만 입력하면 됩니다:

```bash
> /plugin marketplace add thedotmack/claude-mem
> /plugin install claude-mem

```

Claude Code를 재시작하면 자동으로 작동합니다.

## 기본 사용법

설치 후에는 아무것도 할 필요가 없습니다. Claude가 알아서:

1. 작업 내용을 자동으로 저장하고
1. 새 세션 시작 시 관련 컨텍스트를 불러오고
1. 필요시 과거 작업을 검색해서 참조합니다
**검색 예시:**

```plain text
"지난 세션에서 무엇을 작업했지?"
"authentication 관련해서 뭐 한 거 있어?"
"어제 고친 버그 다시 보여줘"

```

이런 식으로 자연어로 물어보면 Claude가 자동으로 관련 내용을 찾아줍니다.

## 실전 활용 팁

**민감한 정보 제외하기**

API 키나 비밀번호 같은 민감한 정보는 `<private>` 태그로 감싸면 저장되지 않습니다:

```plain text
<private>
API_KEY=sk-1234567890
</private>

```

**웹 뷰어 활용**

[http://localhost:37777](http://localhost:37777/) 에서:

- 지금까지 저장된 모든 세션 확인
- 특정 파일이나 키워드로 검색
- 설정 변경 (어떤 모델 사용할지 등)
**요구사항**

- Node.js 18.0.0 이상
- Claude Code 최신 버전
그게 전부입니다. 추가 설치나 설정은 필요 없습니다.

---

**더 알아보기:** [https://github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)


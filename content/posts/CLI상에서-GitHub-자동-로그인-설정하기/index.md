---
title: "CLI상에서 GitHub 자동 로그인 설정하기"
date: 2025-07-21T01:45:00.000Z
draft: false
tags: ["Git"]
series: ["Git", "Tips"]
description: "Ubuntu에서 Personal Access Token(PAT)을 사용하여 GitHub에 자동 로그인하는 방법 두 가지를 소개합니다. 첫 번째 방법은 .netrc 파일과 Git Credential Helper를 사용하여 토큰을 저장하고 인증하는 것이고, 두 번째 방법은 GitHub CLI를 설치하고 환경변수에 토큰을 추가하여 인증하는 것입니다. 두 방법 모두 보안 주의사항을 고려해야 하며, 파일 권한 설정을 확인해야 합니다."
notion_id: "2371bab9-e3f8-8092-8e1f-f1b2a4a385e8"
notion_url: "https://www.notion.so/CLI-GitHub-2371bab9e3f880928e1ff1b2a4a385e8"
---

# CLI상에서 GitHub 자동 로그인 설정하기

> **Summary**
> Ubuntu에서 Personal Access Token(PAT)을 사용하여 GitHub에 자동 로그인하는 방법 두 가지를 소개합니다. 첫 번째 방법은 .netrc 파일과 Git Credential Helper를 사용하여 토큰을 저장하고 인증하는 것이고, 두 번째 방법은 GitHub CLI를 설치하고 환경변수에 토큰을 추가하여 인증하는 것입니다. 두 방법 모두 보안 주의사항을 고려해야 하며, 파일 권한 설정을 확인해야 합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e2916e1e-397b-490d-8399-87f9d61feb3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DY2V6O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFxO38f9HyI%2BrYuHp0wctbv24yxFPxLz6EHBcbIKG5QHAiBJsYaFCB%2FM2iHbyKxQwewpnThcDJ1UZo0D9oc2pBNg0Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM7M0jJTAnei18v6lmKtwD6BcWjQFd%2Flh9exZHt8NzWJS8kEtw2laUwJc0IGt9Wp4PurnVxzLD1f04DbP7BBBje2CQrReJxbjzp1%2BGoQZyqplr1FG8j45l%2B6qwoEEb2USuiXCDuifcsLsJGJusnRFtfYAO6VQW5osBmjdvcI3vel1EnfYchxl%2FuSI3OqAhOnnn2vKxmHFrDrmKPgEYehp0XcTgYhrNw%2FLUcSSb%2BONTiy6cy%2FX%2FsrwTyIexvIW7Qn8JYcG6Roc74WmTVHWluNszxzfnuxUT78ns1czzPKhb%2FQUgwRr9U2O0ggejgVThFu4W8iTgLs79s%2FZzDLqw%2FzIO%2BdKlQYa%2F4txvngr9KASfwQAqZKvAnlNMOq1jCYnVTDlm%2FJPaUrVqEW01qjB3Ho8ZvcAmdbK6JDKF1I0moEi%2BNrYkoxmhCwivxrUPpqpX4WyugApaeUf%2BupJdJPIn3MyhUpfKv3%2BEzk4L8BKCiQNBGtw2ZHcUyiwFoWfyn1oPQugozOPq1pkhtvZsIzPKNT1DTe8PY1J8gBdmWzcFalv0Tv%2FQ8SVBz%2BBtBmt2UIUAfDsR9sxXql8Tl9TL9PiEChd97LFpfuLz%2FCksvoE9b9qm1XUvSHhEHCa6mO46eyLjSerWryb2xiXo7RI7BcYw8puIxAY6pgGZmQGRgVl8H1zlvkucmsLie8trtSD9UGlriWOCLqDJzUEr%2BsGeGQ4MEDPUH0TShE45aCK6R5mkiTNt6%2FZ36kRHjE%2BTKKjM5rGjQ6yObbmCvjG7VdmkpAu1bfKadFm0Fb%2F%2FaJqtJMbn39vUJ%2FGVbeK%2FZubM7b27Sc%2FMhiMNW%2BgV1JQ4moEDYiH6bvRL5hb28xyRmAO4ETSLEpCBYK%2F5yisYWaRyev9T&X-Amz-Signature=11186759d4f2055e74e465abbed76685340ce831a078a6196214711bf53787ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

GitHub 자동 로그인 설정하기

Ubuntu에서 Personal Access Token(PAT)을 이용해 매번 2FA나 비밀번호 입력 없이 GitHub에 "완전 로그인" 상태를 유지하는 대표적인 방법 두 가지를 소개합니다.

---

## 1. .netrc + Git Credential Helper 방법

**Personal Access Token 생성**

- GitHub 웹 → Settings → Developer settings → Personal access tokens → "Generate new token"
- repo 등 필요한 권한(스코프) 체크 후 토큰 생성 → 토큰 문자열 복사
**~/.netrc 파일에 토큰 저장**

```bash
nano ~/.netrc
```

아래 내용 입력 (들여쓰기 탭으로 구분):

```plain text
machine github.com
  login <GitHub_사용자명>
  password <생성한_토큰>
```

**파일 권한 제한**

```bash
chmod 600 ~/.netrc
```

**Git Credential Helper 설정**

```bash
git config --global credential.helper store
```

- store는 최초 한번만 인증 정보를 물어보고 ~/.git-credentials에 저장합니다.

- 이후 git clone, push, pull 등 HTTPS 명령어 사용 시 자동으로 토큰 인증이 됩니다.

---

## 2. GitHub CLI(gh) + 토큰 로그인 방법

**GitHub CLI 설치**

```bash
sudo apt update
sudo apt install -y curl
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
  | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
sudo apt update && sudo apt install -y gh
```

**토큰을 환경변수에 추가**

```bash
echo 'export GITHUB_TOKEN=<생성한_토큰>' >> ~/.bashrc
source ~/.bashrc
```

**gh CLI로 토큰 로그인**

```bash
echo $GITHUB_TOKEN | gh auth login --with-token
```

- 성공 메시지가 뜨면, gh는 물론 Git도 이 토큰을 사용해 인증을 처리합니다.

- 이후부터 HTTPS 기반 Git 명령에서 따로 인증을 묻지 않습니다.

---

설정 후에도 문제가 생기면 알려주세요!


---
title: "CLI상에서 GitHub 자동 로그인 설정하기"
date: 2025-07-21T01:45:00.000Z
draft: false
tags: ["Git"]
series: ["Git", "Tips"]
description: "Ubuntu에서 Personal Access Token(PAT)을 사용하여 GitHub에 자동 로그인하는 방법 두 가지를 소개합니다. 첫 번째 방법은 .netrc 파일과 Git Credential Helper를 사용하여 토큰을 저장하고 인증 정보를 관리하는 것이고, 두 번째 방법은 GitHub CLI를 설치하고 환경변수에 토큰을 추가하여 인증을 처리하는 것입니다. 두 방법 모두 보안 주의사항이 있으며, 파일 권한 설정을 확인해야 합니다."
notion_id: "2371bab9-e3f8-8092-8e1f-f1b2a4a385e8"
notion_url: "https://www.notion.so/CLI-GitHub-2371bab9e3f880928e1ff1b2a4a385e8"
---

# CLI상에서 GitHub 자동 로그인 설정하기

> **Summary**
> Ubuntu에서 Personal Access Token(PAT)을 사용하여 GitHub에 자동 로그인하는 방법 두 가지를 소개합니다. 첫 번째 방법은 .netrc 파일과 Git Credential Helper를 사용하여 토큰을 저장하고 인증 정보를 관리하는 것이고, 두 번째 방법은 GitHub CLI를 설치하고 환경변수에 토큰을 추가하여 인증을 처리하는 것입니다. 두 방법 모두 보안 주의사항이 있으며, 파일 권한 설정을 확인해야 합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e2916e1e-397b-490d-8399-87f9d61feb3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG3IVER%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDN3BH4tpYiOv17Mz5oMKAak%2F1xt%2BZFIYSop40YlUo0YwIhAJeylBgoxG2q%2B6gS%2FFpPdNMRQrVKpmo4YImkxqs942bbKv8DCCkQABoMNjM3NDIzMTgzODA1Igx7nNLcgl1ks8PPhv8q3AOZTIfpLJ9UDvVAs2Nd1FjoMCtYd5%2B9YnPtWK511LTwoKbY1q%2F20QtUZfN8GSVH4UCWu4lerrpycNuwC75beJhT8kf6FlXGeiWoRbvL2S3%2BYLrSbi5M1TGo46yL0x7JzfcKWLoa7cphc7mo4SYD4SDQmg%2B%2B5PXqqJ4PXLTTDas7JWpDLv7X9q8RCXIvMIMv7r64QfmZAevJ6hyFX0fWweaqj9W8zpRDJhpoXPlc2N%2B4oF8%2BVghW32fTkHJ89puJd970Dzo9Jm9I64M%2BnGOXHZQNinqoat%2F01mdu5Gt%2FsBcYSsAj0XImL9SU5rGr%2F0lisqYny3eD2KOW5QyC8rHQMSkbQrQDyd4BQVUt0CF%2F9%2F7xOH6grdINEb0e0bUIoBy6ei9anWu2%2FUWcT2Lr7%2FIoKoKrJi9XiyKSlTIKQ8661msR1gZK3SIZJMdulW25SSDL414nerHFDWlpePrXy9Z0eFeYNyVtSQwzIe7oD5xLa5U3MbTeScrA8n9%2F3g%2FBV5jzUVqs%2FVBbVJ3xfaxY7MG4A2%2BQiKMPyX6wHFyk11shnjYQGXuZsprzliEvP9Oe%2F77%2FPyxvE98AylyjFkoH1vRq79EKPLTFPeBDqrAzQU4anKXUwZx90d%2Fln3U3YmkrljDszofEBjqkARb1Trju5dLhKx7g%2F0Fet1%2BfLo2NNs5RHtgp5vJwkljt3Nav4GKD3Oe8gZM3pVnRBcAu2HrfU0%2FfQGBxywQjlZ%2FkWgYA%2F9ylvY5atlI0DNUhvR%2Bx3TT1X65vQYqmW2UWIPzInsPQsybjgIRWirqKOQcQns0ZPB0QZYYaPfJQD4ZELmWvhBgbT2QHJLa9vyslsn7QdY46Csn95%2FHSUFW6t7shXWWc&X-Amz-Signature=1af04c1aaea9ae163ba2c4ad57aaa3695213edab067dd233df394407ef1425a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


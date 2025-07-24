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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e2916e1e-397b-490d-8399-87f9d61feb3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3QWP7J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDksN97SmuUst7eEYsDZv6I%2F2kmHOykwL%2F1S1YOuttoQQIgMd97oUtcAgG1TjsHWeC4AeRmbsXoXfCTrUyTxUd5nn4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDENdqTnENuAObzW52SrcA4ydIfZ9e5sevyBtwTHPknOc9nJZmpli1B97mHLdbVccYk4bBg618wQ6BPfNR9RxSajzN4EiTzIkdK9T18GAhq4YftyOKU5gJu62p1FPjmgmjHpnxmg3vRPEwtsJ8ixSY%2BXPfLr4eMIhse5Deb90Iun%2F8%2BQ%2FPRCzhdioeBRwqgPdkUjnOFWw94eCGFDX9JtGJY33aPhYyJ%2FLmR%2FUR98MqQz2%2BPRqZqrSj8jg66ULXz5%2BhdktUiqQSdOjKCcYNB85lWiMT%2B5lrSZgvZUciZ%2FXKsvUx%2FOyvVEKIYSjSujb2wVB8vWf%2BHSriKamLaGMjvjNn5QHMavL9uQyVB2Ax8zpUqBnk4GHceT%2BFXK4SL6bTsV04wZ1N430asItVTuoP5u%2FEq16sLIE%2BxY3qvHpmRbb%2F5JBl0MRjamz3vmrVGhqjn41Cg6%2Fft4va8gP89n8Gvwy%2BVWgiLYeDTbsiptwef67hzobhvW7lFNLWrCn%2FC9QQlJJNE47TKYGO1dLKtJHjz9O3V8eKIUIcimzS9VMQYzoBV8FSJj%2BszeR7GgGWma8XooPw8l2Bsw2WRU9qcL7dK%2BfwFYcvzE2dOD%2FWdR67teCpQFrPYzhvem31vIApPo8JW77e7tsW1eJmGEdMQL7MJ72h8QGOqUBPwRKsDmnhWcYQfavOpNbra2rn%2FaNOjm0NAZIoZX1%2Bfo%2BvJlPzMt0ydsBJXAtj9z%2F3%2BnGxVxC2YwBcLlaDml7%2BcO%2Fg5vE9amIN5hik%2BRtMgdQ2XVIo9ZMgM2ThRCiRkmZc4Ykl5GTUXQ1Jon18zXRZTpF%2FeHUhcI0JxYAfNPKcDw9NfKYGVOHoX%2Bk7fv5vV2miAu3jQ8eJvc2TOapKjJjxgOPrORT&X-Amz-Signature=7a0629b58a1edc29c49d9f27df4dd359b739a0ece3e335ea0815c1ef57ff55e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


---
title: "Windows11 ssh 서버 열기"
date: 2024-09-11T01:52:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "OpenSSH 서버를 시작하려면 서비스 목록에서 \"OpenSSH SSH Server\"를 찾아 시작하고, Windows 방화벽에서 SSH 포트(22번)를 열어야 합니다. 또한, Open SSH Server를 자동 시작하도록 설정할 수 있습니다."
notion_id: "0be81033-ed25-4f9c-8662-adb120727133"
notion_url: "https://www.notion.so/Windows11-ssh-0be81033ed254f9c8662adb120727133"
---

# Windows11 ssh 서버 열기

> **Summary**
> OpenSSH 서버를 시작하려면 서비스 목록에서 "OpenSSH SSH Server"를 찾아 시작하고, Windows 방화벽에서 SSH 포트(22번)를 열어야 합니다. 또한, Open SSH Server를 자동 시작하도록 설정할 수 있습니다.

---

# 설치

[https://bebhionn.tistory.com/55](https://bebhionn.tistory.com/55)

# 실행

OpenSSH 서버 서비스 시작:

Windows 키 + R을 눌러 실행 창을 엽니다.
"services.msc"를 입력하고 확인을 클릭합니다.
서비스 목록에서 "OpenSSH SSH Server"를 찾습니다.
해당 서비스를 우클릭하고 "시작"을 선택합니다.

방화벽 설정:

Windows 방화벽에서 SSH 포트(기본 22번)를 열어야 합니다.
제어판 > 시스템 및 보안 > Windows Defender 방화벽 > 고급 설정으로 이동합니다.
"인바운드 규칙"에서 새 규칙을 만들고 SSH 포트(22)를 허용합니다.

# 자동 설정

2)Open SSH Server 자동 시작하도록 작업하기

`Set-Service -Name sshd -StartupType ‘Automatic’`

# 셀 설정

[https://www.lainyzine.com/ko/article/how-to-run-openssh-server-and-connect-with-ssh-on-windows-10/](https://www.lainyzine.com/ko/article/how-to-run-openssh-server-and-connect-with-ssh-on-windows-10/)


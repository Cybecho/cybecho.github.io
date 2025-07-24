---
title: "Ubuntu - How to install chrome"
date: 2024-02-11T03:37:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Ubuntu에 Chrome을 설치하는 방법은 deb 파일을 사용하는 것으로, wget을 설치한 후 Chrome 패키지를 다운로드하고 dpkg를 사용하여 설치하는 절차로 이루어져 있습니다."
notion_id: "860bc866-25df-4387-8bd1-3baa193fc8d1"
notion_url: "https://www.notion.so/Ubuntu-How-to-install-chrome-860bc86625df43878bd13baa193fc8d1"
---

# Ubuntu - How to install chrome

> **Summary**
> Ubuntu에 Chrome을 설치하는 방법은 deb 파일을 사용하는 것으로, wget을 설치한 후 Chrome 패키지를 다운로드하고 dpkg를 사용하여 설치하는 절차로 이루어져 있습니다.

---

🔗 [https://velog.io/@given53/Linux-How-to-Install-Google-Chrome-on-Ubuntu-22.04](https://velog.io/@given53/Linux-How-to-Install-Google-Chrome-on-Ubuntu-22.04)

# ⭐ deb

---

첫 번째는 deb 파일로 설치하는 방법이다. Windows의 `*.exe` 파일을 생각하면 된다.

1. `wget` 설치
```shell
$ sudo apt install wget -y
```

1. Chrome 패키지 다운로드
```shell
$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

1. 패키지 설치
```shell
$ sudo dpkg -i ./google-chrome-stable_current_amd64.deb
```

`dpkg`는 데비안 패키지 관리 소프트웨어로서 `*.deb` 파일의 설치, 삭제, 정보 제공을 위해 사용한다. `-i`는 install을 뜻하는 옵션이다.


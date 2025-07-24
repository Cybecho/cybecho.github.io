---
title: "Proxmox에서 LXC 컨테이너 생성 및 다운로드하기"
date: 2024-07-15T12:41:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "LXC는 호스트 OS 위에서 여러 독립된 Linux 시스템을 실행할 수 있게 해주는 OS 레벨 가상화 기술로, Proxmox에서 컨테이너를 만들기 위해서는 이미지가 필요하다. pveam 명령어를 사용하여 이미지 목록을 업데이트하고, 사용 가능한 이미지를 확인한 후, 원하는 이미지를 다운로드하여 LXC 컨테이너를 생성하고 관리할 수 있다."
notion_id: "1692f3b7-188c-4c2b-8874-1c10e47bce33"
notion_url: "https://www.notion.so/Proxmox-LXC-1692f3b7188c4c2b88741c10e47bce33"
---

# Proxmox에서 LXC 컨테이너 생성 및 다운로드하기

> **Summary**
> LXC는 호스트 OS 위에서 여러 독립된 Linux 시스템을 실행할 수 있게 해주는 OS 레벨 가상화 기술로, Proxmox에서 컨테이너를 만들기 위해서는 이미지가 필요하다. pveam 명령어를 사용하여 이미지 목록을 업데이트하고, 사용 가능한 이미지를 확인한 후, 원하는 이미지를 다운로드하여 LXC 컨테이너를 생성하고 관리할 수 있다.

---

[https://rizdev.tistory.com/entry/Proxmox에서-LXC-컨테이너-사용하기](https://rizdev.tistory.com/entry/Proxmox에서-LXC-컨테이너-사용하기)

---

# Proxmox에서 LXC 컨테이너 활용하기

LXC(Linux Containers)에 대해 간단히 설명하자면, 이는 호스트 OS 위에서 여러 독립된 Linux 시스템(컨테이너)을 실행할 수 있게 해주는 OS 레벨 가상화 기술입니다. Docker와 유사한 개념이죠. LXC는 사용하기 쉬운 API와 도구들을 제공해서, Linux 사용자들이 시스템이나 애플리케이션 컨테이너를 손쉽게 만들고 관리할 수 있게 해줍니다.

컨테이너를 만들려면 먼저 이미지(템플릿이나 어플라이언스라고도 불림)가 필요한데, 이는 컨테이너 구동에 필요한 모든 요소를 담고 있는 tar 압축 파일입니다. Proxmox에서는 GUI로 다운로드할 수도 있고, pveam 명령어를 써서 받을 수도 있어요.

pveam 사용법을 간단히 알려드릴게요:

1. 이미지 목록 업데이트:
```plain text
pveam update
```

  이 명령어로 최신 이미지 목록을 받아올 수 있습니다.

1. 사용 가능한 이미지 확인:
```plain text
pveam available
```

  특정 카테고리만 보고 싶다면 --section 옵션을 쓰세요. 예를 들어:

```plain text
pveam available --section system
```

1. 이미지 다운로드:
```plain text
pveam download local ubuntu-20.04-standard_20.04-1_amd64.tar.gz
```

  이렇게 하면 Ubuntu 20.04 이미지를 local 스토리지에 받아옵니다.

1. 다운로드된 이미지 목록 보기:
```plain text
pveam list local
```

이렇게 하면 LXC 컨테이너를 위한 기본 준비는 끝납니다. 이제 이 이미지들을 이용해 실제 컨테이너를 생성하고 관리할 수 있게 되었네요!

---


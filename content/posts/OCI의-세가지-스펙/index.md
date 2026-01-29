---
title: "OCI의 세가지 스펙"
date: 2026-01-28T04:48:00.000Z
draft: false
tags: ["Docker"]
series: ["Infra & Network", "Let's Bootc!"]
description: "OCI의 세 가지 스펙은 이미지 구조, 실행 방법, 배포 방법으로 나뉩니다. 이미지 구조는 여러 레이어로 구성되며, 각 레이어는 해시값으로 식별됩니다. 실행 방법은 컨테이너를 설치하는 방식으로, runc가 지시사항을 읽고 실행합니다. 배포 방법은 레지스트리 서버와의 대화 규칙을 포함하며, HTTP API 엔드포인트와 호출 순서가 정의되어 있습니다."
notion_id: "2f61bab9-e3f8-809f-9fcc-d70730c3ab17"
notion_url: "https://www.notion.so/OCI-2f61bab9e3f8809f9fccd70730c3ab17"
---

# OCI의 세가지 스펙

> **Summary**
> OCI의 세 가지 스펙은 이미지 구조, 실행 방법, 배포 방법으로 나뉩니다. 이미지 구조는 여러 레이어로 구성되며, 각 레이어는 해시값으로 식별됩니다. 실행 방법은 컨테이너를 설치하는 방식으로, runc가 지시사항을 읽고 실행합니다. 배포 방법은 레지스트리 서버와의 대화 규칙을 포함하며, HTTP API 엔드포인트와 호출 순서가 정의되어 있습니다.

---

![Image](image_7cc87755330c.png)


### Image Specification - 이미지 구조

택배 상자에 비유됩니다. 상자 안에 물건들이 층층이 포장되어 있습니다.

```plain text
내 bootc 이미지
├── 레이어 1: CentOS Stream 9 기본 파일들 (2GB)
├── 레이어 2: KDE 데스크톱 패키지들 (8GB)
├── 레이어 3: IBus-hangul, TLP 설정 (100MB)
└── 설정 파일: 어떤 명령어로 실행할지, 환경변수는 뭔지

```

각 레이어는 해시값으로 식별됩니다. 똑같은 해시면 똑같은 내용입니다. Docker Hub에 올리든 GitHub Container Registry에 올리든 동일한 구조입니다.

### Runtime Specification - 실행 방법

상자를 뜯어서 실제로 설치하는 방법입니다.

```plain text
실행 설정:
- 어디에 풀어놓을까: /var/lib/containers/storage
- 어떤 프로세스를 돌릴까: /sbin/init
- 어떤 디렉토리를 마운트할까: /var, /home
- 어떤 권한으로 돌릴까: root
- 네트워크는 어떻게 격리할까: 별도 네임스페이스

```

runc가 이 지시사항을 읽고 컨테이너를 실행합니다. Podman이든 containerd든 이 표준을 따릅니다.

### Distribution Specification - 배포 방법

레지스트리 서버와 주고받는 대화 규칙입니다.

```plain text
나: 이미지 있어?
레지스트리: sha256:abc123 있음

나: 레이어 sha256:def456 줘
레지스트리: 여기 2GB 파일

나: 내 이미지 받아줘
레지스트리: 15GB? 청크로 쪼개서 올려

```

HTTP API 엔드포인트와 호출 순서가 정해져 있습니다. 어떤 레지스트리든 이 API를 구현하면 호환됩니다.


---
title: "왜 bootc 이미지 저장소로 Docker Hub가 아닌 GHCR을 선택했는가"
date: 2026-01-18T06:04:00.000Z
draft: false
tags: ["Docker"]
series: ["Infra & Network", "Let's Homelab!", "Let's Linux!", "Let's Bootc!"]
description: "bootc는 컨테이너 이미지를 OS로 부팅하는 기술로, Docker Hub의 한계로 인해 GHCR로 마이그레이션을 결정했다. Docker Hub는 대용량 이미지 전송에 적합하지 않으며, 반복적인 \"Access Denied\" 오류가 발생했다. 반면 GHCR은 무제한 저장 용량과 안정적인 대용량 전송을 제공하며, GitHub 생태계와 통합되어 있다. 결론적으로, GHCR은 bootc와 같은 대용량 이미지에 더 적합하다."
notion_id: "2ec1bab9-e3f8-8018-b375-dacb5a22e952"
notion_url: "https://www.notion.so/bootc-Docker-Hub-GHCR-2ec1bab9e3f88018b375dacb5a22e952"
---

# 왜 bootc 이미지 저장소로 Docker Hub가 아닌 GHCR을 선택했는가

> **Summary**
> bootc는 컨테이너 이미지를 OS로 부팅하는 기술로, Docker Hub의 한계로 인해 GHCR로 마이그레이션을 결정했다. Docker Hub는 대용량 이미지 전송에 적합하지 않으며, 반복적인 "Access Denied" 오류가 발생했다. 반면 GHCR은 무제한 저장 용량과 안정적인 대용량 전송을 제공하며, GitHub 생태계와 통합되어 있다. 결론적으로, GHCR은 bootc와 같은 대용량 이미지에 더 적합하다.

---

![Image](image_a032f5447661.png)

# **배경: bootc와 컨테이너 기반 OS**

**bootc**는 컨테이너 이미지를 OS로 직접 부팅하는 기술이다. 기존의 패키지 매니저(`dnf`, `apt`) 대신, 컨테이너 이미지를 pull하여 시스템 전체를 원자적(atomic)으로 업데이트한다.

```plain text
┌─────────────────────────────────────────────────┐
│  기존 방식: dnf update → 패키지 개별 업데이트    │
│  bootc 방식: bootc upgrade → 이미지 전체 교체   │
└─────────────────────────────────────────────────┘

```

이 구조에서 **컨테이너 레지스트리**는 단순한 이미지 저장소가 아니라, **OS 배포 인프라** 그 자체가 된다. 레지스트리가 불안정하면 시스템 업데이트가 실패한다.

---

## **문제: Docker Hub의 한계**

처음에는 가장 익숙한 **Docker Hub**를 선택했다. 그러나 첫 번째 이미지를 푸시하는 순간부터 문제가 시작됐다.

### **이미지 크기: 21.6GB**

KDE Plasma, 한글 입력기, Wine, 개발 도구를 모두 포함한 CentOS 9 bootc 이미지의 최종 크기는 **21.6GB**였다. 일반적인 마이크로서비스 컨테이너(수백 MB)와는 차원이 다른 규모다.

### **반복되는 "Access Denied"**

```plain text
Copying blob 060e905635f6 [--------] 8.0b / 1.4GiB | 797.7 KiB/s
Error: writing blob: initiating layer upload to /v2/cybecho/centos-kde-bootc/blobs/uploads/
in registry-1.docker.io: requested access to the resource is denied

```

로그인을 다시 해도, 토큰을 재발급해도 같은 에러가 반복됐다. 원인을 분석한 결과:

1. **대용량 레이어(1.4GB) 전송 중 세션 타임아웃** 발생
1. 타임아웃 후 서버가 "Access Denied"라는 엉뚱한 에러를 반환
1. 이는 Docker Hub 무료 플랜의 고질적 문제
Docker Hub 무료 플랜의 공식 제한:

- Pull rate: 100회/시간
- Push rate: 명시적 제한 없음 (그러나 **Fair Use 정책**)
- 대용량 레이어 전송: **타임아웃에 취약**
---

## **대안: GitHub Container Registry (GHCR)**

GHCR은 GitHub에서 제공하는 컨테이너 레지스트리다. Docker Hub와 동일한 OCI 표준을 따르므로 `podman push/pull` 명령어가 그대로 작동한다.

### **비교**

| **항목** | **Docker Hub (무료)** | **GHCR** |
| --- | --- | --- |
| 저장 용량 | 무제한 | 무제한 (Free tier) |
| Pull 제한 | 100회/시간 | 없음 |
| 대용량 전송 | 타임아웃 잦음 | **안정적** |
| Private 저장소 | 1개 | 무제한 (용량 제한) |
| GitHub Actions 연동 | 별도 설정 | **네이티브 지원** |

### **핵심 차이점**

Docker Hub는 **마이크로서비스용**으로 설계됐다. 수백 MB 이미지를 빠르게 배포하는 데 최적화되어 있다.

반면 GHCR은 GitHub의 인프라를 공유하며, **대용량 파일 전송에 관대**하다. Git LFS 경험이 있는 팀이라면 익숙할 것이다.

---

## **마이그레이션 설정**

### **1. 빌드 서버 (WSL)**

```plain text
# GHCR 로그인
sudopodmanloginghcr.io-ucybecho
# Password: GitHub Personal Access Token (write:packages 권한)

# 태그 변경
sudopodmantagdocker.io/cybecho/centos-kde-bootc:latest\
ghcr.io/cybecho/centos-kde-bootc:latest

# 푸시 (zstd 압축으로 전송량 감소)
sudo podman push --compression -format =zstd\
ghcr.io/cybecho/centos-kde-bootc:latest

```

### **2. 기존 bootc 시스템**

```plain text
# GHCR 로그인
sudo podman loginghcr.io-ucybecho

# 이미지 소스 전환
sudo bootc switch ghcr.io/cybecho/centos-kde-bootc:latest

# 재부팅
sudo reboot

```

### **3. Containerfile 수정 (향후 빌드)**

```plain text
# 빌드 후 푸시 대상을 GHCR로 고정
# podman build -t ghcr.io/cybecho/centos-kde-bootc:latest .
# podman push ghcr.io/cybecho/centos-kde-bootc:latest

```

---

## **결론**

![Image](image_658c056cc1bb.png)

Docker Hub가 나쁜 서비스는 아니다. 단지 **21GB짜리 OS 이미지**를 다루기엔 적합하지 않았을 뿐이다.

bootc처럼 **컨테이너를 OS로 사용하는 패러다임**에서는 레지스트리의 안정성이 곧 인프라의 안정성이다. GHCR은 이 요구사항을 충족했고, 무료였으며, GitHub 생태계와 자연스럽게 통합됐다.

> TL;DR
> Docker Hub: 마이크로서비스용
>
> GHCR: 대용량 이미지(bootc, ML 모델 등)에 적합
>
>

---

## **참고**

- [GitHub Container Registry 공식 문서](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [bootc 프로젝트](https://github.com/containers/bootc)
- [Docker Hub Rate Limiting](https://docs.docker.com/docker-hub/download-rate-limit/)

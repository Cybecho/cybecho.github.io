---
title: "Cloudflare 활용한 tinykvm도메인 등록"
date: 2025-02-17T23:39:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!"]
description: "TinyPilot KVM을 원격으로 안전하게 액세스하기 위해 Cloudflare와 Nginx Proxy Manager를 활용하는 방법을 설명합니다. 도메인 등록, DNS 설정, HTTPS 구성 및 보안 강화 단계를 포함하며, 향후 공식적인 방법도 공개될 예정입니다."
notion_id: "19d1bab9-e3f8-8013-a1bc-c99bf6b2b85b"
notion_url: "https://www.notion.so/Cloudflare-tinykvm-19d1bab9e3f88013a1bcc99bf6b2b85b"
---

# Cloudflare 활용한 tinykvm도메인 등록

> **Summary**
> TinyPilot KVM을 원격으로 안전하게 액세스하기 위해 Cloudflare와 Nginx Proxy Manager를 활용하는 방법을 설명합니다. 도메인 등록, DNS 설정, HTTPS 구성 및 보안 강화 단계를 포함하며, 향후 공식적인 방법도 공개될 예정입니다.

---


https://youtu.be/1O4GsuRfbFE?si=CTKYiWm8E_pIa_nS


3줄 요약
1. 이 영상은 TinyPilot KVM을 원격으로 액세스하는 비공식적인 방법을 설명합니다.

2. Cloudflare, Nginx Proxy Manager 및 도메인 설정을 활용하여 TinyPilot을 안전하게 원격에서 접근할 수 있습니다.

3. HTTPS 설정, 보안 강화 및 다중 시스템 연결 방법까지 다루며, 이후 공식적인 방법도 추가로 공개될 예정입니다.



---
TinyPilot KVM 원격 액세스 설정 가이드
TinyPilot KVM이란?
TinyPilot KVM은 원격으로 여러 컴퓨터를 관리할 수 있도록 해주는 KVM 스위치로, 서버, NAS 및 다양한 IT 환경에서 사용됩니다.

---
원격 액세스를 위한 준비물
1. TinyPilot KVM
TinyPilot 기본 모델 또는 Pro 버전 모두 사용 가능.
다중 포트 지원 여부에 따라 연결할 수 있는 기기의 수가 다름.

2. 도메인 및 DNS 설정
도메인 이름 등록 필요 (Porkbun 추천).
DNS 서비스는 Cloudflare를 사용하여 설정.

3. 리버스 프록시 구성
Nginx Proxy Manager를 사용하여 안전한 원격 접근 구현.
HTTPS(SSL) 설정 필수.


---
설정 단계
1. TinyPilot 보안 강화
시스템 및 보안 설정에서 사용자 계정과 비밀번호 설정 필수.
Fail2Ban 같은 추가 보안 도구는 기본 제공되지 않음, 필요 시 수동 설치 가능.

2. Cloudflare 도메인 설정
CNAME 레코드 추가 (remote.yourdomain.com 형태 지양).
추측하기 어려운 난독화된 서브도메인 설정 권장.

3. Nginx Proxy Manager 설정
새로운 프록시 호스트 추가 후, HTTPS 연결 활성화.
SSL 인증서 발급 및 보안 설정 조정.


---
테스트 및 최종 설정
1. Cloudflare SSL 확인:
TinyPilot 접속 시 HTTPS 인증서 적용 여부 확인.


2. 다중 장치 연결 테스트:
Ctrl + 1, Ctrl + 2 단축키를 활용해 여러 포트로 이동.


3. 보안 검토:
Fail2Ban, 방화벽 추가 설정 검토.




---
결론
TinyPilot KVM을 원격으로 액세스하는 이 방법은 공식적인 지원은 없지만, Cloudflare와 Nginx Proxy Manager를 활용해 비교적 안전하게 설정할 수 있습니다. 향후 공식 지원 방법도 추가될 예정이므로 지속적인 업데이트가 필요합니다.



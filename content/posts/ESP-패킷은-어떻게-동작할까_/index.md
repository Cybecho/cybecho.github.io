---
title: "ESP 패킷은 어떻게 동작할까?"
date: 2025-02-20T04:39:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!"]
description: "IPsec VPN 환경에서의 통신 방식과 ESP 패킷의 동작 원리를 분석하며, 디폴트 라우팅과 캡슐화 과정을 통해 ISP가 내부망 정보를 몰라도 패킷을 전달할 수 있는 이유를 설명합니다. 현재 구성은 Tunnel Mode로, Site-to-Site VPN에서 IPsec을 통해 패킷이 암호화되고 외부 IP 헤더로 캡슐화되어 ISP를 통해 전송됩니다."
notion_id: "1a01bab9-e3f8-8053-9f61-ec583099a965"
notion_url: "https://www.notion.so/ESP-1a01bab9e3f880539f61ec583099a965"
---

# ESP 패킷은 어떻게 동작할까?

> **Summary**
> IPsec VPN 환경에서의 통신 방식과 ESP 패킷의 동작 원리를 분석하며, 디폴트 라우팅과 캡슐화 과정을 통해 ISP가 내부망 정보를 몰라도 패킷을 전달할 수 있는 이유를 설명합니다. 현재 구성은 Tunnel Mode로, Site-to-Site VPN에서 IPsec을 통해 패킷이 암호화되고 외부 IP 헤더로 캡슐화되어 ISP를 통해 전송됩니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=bkcrSaJ_qxo)

# 실습 의문점 정리 및 ESP 헤더 동작과정 분석

# 토폴로지 구성

# 각 VM 서버 설정

# Shell Script를 이용한 EEM 구현


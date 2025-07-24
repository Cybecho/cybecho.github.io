---
title: "ESP 패킷은 어떻게 동작할까?"
date: 2025-02-20T04:39:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!"]
description: "IPsec VPN 환경에서 패킷 통신의 원리를 설명하며, 디폴트 라우팅과 캡슐화 과정을 통해 ISP가 내부 네트워크 정보를 알지 못해도 패킷을 전달할 수 있는 이유를 분석합니다. 현재 구성은 Tunnel Mode로, Wireshark 분석을 통해 확인되며, 각 라우터는 모르는 목적지를 ISP로 보내는 디폴트 라우트를 사용하여 통신이 가능합니다. 또한, VM 서버 설정과 EEM 구현을 위한 스크립트 설정 방법도 포함되어 있습니다."
notion_id: "1a01bab9-e3f8-8053-9f61-ec583099a965"
notion_url: "https://www.notion.so/ESP-1a01bab9e3f880539f61ec583099a965"
---

# ESP 패킷은 어떻게 동작할까?

> **Summary**
> IPsec VPN 환경에서 패킷 통신의 원리를 설명하며, 디폴트 라우팅과 캡슐화 과정을 통해 ISP가 내부 네트워크 정보를 알지 못해도 패킷을 전달할 수 있는 이유를 분석합니다. 현재 구성은 Tunnel Mode로, Wireshark 분석을 통해 확인되며, 각 라우터는 모르는 목적지를 ISP로 보내는 디폴트 라우트를 사용하여 통신이 가능합니다. 또한, VM 서버 설정과 EEM 구현을 위한 스크립트 설정 방법도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=bkcrSaJ_qxo)

# 실습 의문점 정리 및 ESP 헤더 동작과정 분석

# 토폴로지 구성

# 각 VM 서버 설정

# Shell Script를 이용한 EEM 구현


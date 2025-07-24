---
title: "Google Pixel 1 충전 80% 제한하기"
date: 2024-07-18T12:34:00.000Z
draft: false
tags: ["Other"]
series: ["Let's Homelab!", "HW"]
description: "Tasker와 스마트 플러그를 사용하여 배터리 충전을 80%로 제한하는 방법을 설명합니다. AccuBattery 앱을 통해 충전 상태를 모니터링하고, IFTTT를 사용하여 알림을 기반으로 스마트 플러그를 제어하여 충전을 자동으로 중지할 수 있습니다. 이 방법은 루팅이 필요 없고, 다양한 스마트폰과 호환됩니다."
notion_id: "f36d494b-d658-48dc-aad0-da5de2663c85"
notion_url: "https://www.notion.so/Google-Pixel-1-80-f36d494bd65848dcaad0da5de2663c85"
---

# Google Pixel 1 충전 80% 제한하기

> **Summary**
> Tasker와 스마트 플러그를 사용하여 배터리 충전을 80%로 제한하는 방법을 설명합니다. AccuBattery 앱을 통해 충전 상태를 모니터링하고, IFTTT를 사용하여 알림을 기반으로 스마트 플러그를 제어하여 충전을 자동으로 중지할 수 있습니다. 이 방법은 루팅이 필요 없고, 다양한 스마트폰과 호환됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2PJ5DL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH7vK%2FXuZqxFaPA7ZPgHCf7OXw%2FepJMCe7x5OiTIve3nAiEA2ZdokHFSeXnA6J2a109LLKzz8Xr6%2FxCx42ZcSChK4%2BUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHqb5xuQiK8yT7NffSrcA2TXx55vbUj8o0FWdWmZu2Q9Wxspy5QRmetcwPfFEwDKPH4Vsg99Zatbfn%2BNboAB%2B74dHP9w6UWtzvJbsAyGwsNK894GWHa7JfY%2FOZkWMdb9OwljnMvWLci05QlqbW%2FH%2F0%2FQ6C3NCSPWfxHWJLy9OSNbKiuVgJsRhu0OGsSW%2Fz2%2FOqniDBuIYhXtMpQIkluQFdxvyAA07OlcC4bnA%2Fouxh7n%2FdCCmHfrJSL2vZPZCnBHo9EFUe%2BS1GBOgiXTzsdZ9piW7ygpBYqZfK14NooUrBEw2oXniJsUevrfhWZWV5NE5HpupVXc0vukD%2BNsllYqsl0ko5v%2BzBDt0DPAH9IA4f8rEYNYI2Wpo4nrAyUKmJae8q5HlvKpKlsXiJ5yzWmMROEKa4gfxqKwitcdPnSn20zKB7Yx9uUOnAED8SSARq%2FHhq%2F8Pcd5g3exxe21Rz6OGU2lAG1DNakJ1Z3C3if5iJQ8Zbtca%2BLVfmoKDwRzH4oCbz3J2fU0zEkM23SC2Mf2nglfpNyNn1Lg1Im1E2EpIei5mkvBRGtd0%2BPLX3Zr0FxG70Kp38Jjy%2B0iJ5SBCokRGhhY%2FkOEeUDGVNi4G6d6FptSsueJxvawU1KNg0TQhRa9j%2FAsp9wQjLBErfebMMn2h8QGOqUBUvfGqzefa6aX9Wxzxftn%2FAd0gClTVv4A%2BSMCveejHmqwC6uJ%2BnJLzfhFbfiE9k6%2BD%2B1%2BdYbMAKSstPX8jpoQWSXC%2FnE%2Fj034rrcJrihR8Z%2BQxTqeLzymCx1NtP50KSRBLvslbadL753wFzDM%2FY8d2IMtz6%2BXcHkSjAHVbh8Q4tk5qB84dImcL45Sgd7RZQDTIlf2BENdlMnWsQ8jVergyasQycoE&X-Amz-Signature=c27199bad3ae3d443fec5653b90a7efd406440db35d634c6d909891612dd53dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# **Tasker + 스마트 플러그**

## **Tasker + 스마트 플러그**

Tasker와 스마트 플러그를 사용하여 충전 비율을 제한하는 방법도 있습니다. 이 방법은 루팅이 필요하지 않으며, 다음과 같은 절차를 따릅니다:

1. **AccuBattery** 앱을 설치하고, 충전 비율 알림을 설정합니다.
1. **IFTTT** 앱을 설치하고, AccuBattery의 알림을 모니터링하도록 설정합니다.
1. 스마트 플러그를 사용하여 충전기를 연결하고, IFTTT를 통해 스마트 플러그를 제어합니다.
1. 설정된 충전 비율에 도달하면 IFTTT가 스마트 플러그를 꺼서 충전을 차단합니다

Tasker와 스마트 플러그를 사용하여 배터리 충전을 80%로 제한하는 방법은 다음과 같습니다. 이 방법은 루팅이 필요 없으며, 스마트 플러그와 Tasker 앱을 활용하여 자동화된 충전 관리를 할 수 있습니다.

## 설명

# 스마트 플러그와 Tasker로 배터리 충전 80%로 제한하기

스마트폰 배터리의 수명을 연장하기 위해 많은 사용자들이 배터리 충전을 80%로 제한하는 방법을 찾고 있습니다. 이 글에서는 루팅 없이 Tasker와 스마트 플러그를 사용하여 배터리 충전을 80%로 제한하는 방법을 단계별로 안내해 드리겠습니다.

## 준비물

- Tasker 앱 (유료)
- IFTTT 앱 (무료)
- AccuBattery 앱 (무료)
- 스마트 플러그 (Wi-Fi 지원, 예: TP-Link, Wemo 등)
## 설정 과정

### 1. AccuBattery 설정

AccuBattery 앱을 통해 배터리 충전 상태를 모니터링하고 알림을 설정합니다.

1. AccuBattery 앱을 설치하고 엽니다.
1. 앱 설정에서 충전 알림을 80%로 설정합니다.
### 2. IFTTT 설정

IFTTT를 사용하여 AccuBattery 알림을 트리거로 스마트 플러그를 제어합니다.

1. IFTTT 앱을 설치하고 계정을 만듭니다.
1. 새로운 Applet을 만듭니다:
  - This: "Android Device" 선택 후 "Notification received from a specific app" 선택
  - 앱 선택: AccuBattery
  - 알림 텍스트: "80%" (AccuBattery 알림 텍스트에 맞게 설정)
1. That: "Smart Plug" 선택 후 "Turn off" 또는 "Power off" 선택 (스마트 플러그 브랜드에 따라 다름)
### 3. 스마트 플러그 설정

스마트 플러그를 설정하고 Wi-Fi 네트워크에 연결합니다.

1. 스마트 플러그를 전원 소켓에 연결하고, 스마트 플러그 앱을 통해 설정합니다.
1. 스마트 플러그를 Wi-Fi 네트워크에 연결하고, IFTTT와 연동합니다.
### 4. Tasker 설정

Tasker를 사용하여 AccuBattery 알림을 감지하고 IFTTT를 트리거합니다.

1. Tasker 앱을 설치하고 엽니다.
1. 새로운 프로파일을 만듭니다:
  - Event: "Notification" 선택
  - Owner Application: AccuBattery 선택
  - Title: "80%" (AccuBattery 알림 제목에 맞게 설정)
1. 새로운 작업을 만듭니다:
  - Plugin: IFTTT 선택
  - Action: "Turn off smart plug" (IFTTT에서 설정한 Applet과 일치)
## 작동 원리

배터리 충전 제한 시스템의 작동 원리는 다음과 같습니다:

```plain text
[스마트폰 충전 시작]
         │
         ▼
[AccuBattery 모니터링]
         │
         ▼
   [배터리 80% 도달?]
     ┌───No───┘
     │
    Yes
     │
     ▼
[AccuBattery 알림 발생]
         │
         ▼
[Tasker 알림 감지]
         │
         ▼
   [IFTTT 트리거]
         │
         ▼
[스마트 플러그 전원 차단]
         │
         ▼
    [충전 중지]

```

1. 스마트폰 충전이 시작되면 AccuBattery가 배터리 상태를 지속적으로 모니터링합니다.
1. 배터리 충전량이 80%에 도달하면 AccuBattery가 알림을 발생시킵니다.
1. Tasker가 이 알림을 감지하여 IFTTT를 트리거합니다.
1. IFTTT는 스마트 플러그의 전원을 차단하는 명령을 보냅니다.
1. 스마트 플러그의 전원이 차단되어 충전이 중지됩니다.
## 장점

1. 루팅이 필요 없어 안전합니다.
1. 자동화된 충전 관리로 배터리 수명을 연장할 수 있습니다.
1. 다양한 스마트폰과 스마트 플러그에 적용 가능합니다.
## 주의사항

- 스마트 플러그와 스마트폰이 같은 Wi-Fi 네트워크에 연결되어 있어야 합니다.
- IFTTT와 Tasker의 안정적인 작동을 위해 배터리 최적화 설정에서 이 앱들을 제외해야 할 수 있습니다.
- 초기 설정에 시간이 걸릴 수 있지만, 한 번 설정해 놓으면 자동으로 작동합니다.
이 방법을 통해 배터리 수명을 연장하면서도 편리하게 충전 관리를 할 수 있습니다. 스마트폰의 특성과 개인의 사용 패턴에 맞게 충전 비율을 조정하여 최적의 결과를 얻으세요.


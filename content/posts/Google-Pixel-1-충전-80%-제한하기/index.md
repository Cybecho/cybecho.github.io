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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EK66LY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCOgMJ4r%2FQSJI2oi4sZWythk%2BJnMh2KrftHcubi7ug2TgIhANdC0lIcloy40nrzpoUi6ywMnzJj5hng4qiuCZ1%2FcgIWKv8DCCkQABoMNjM3NDIzMTgzODA1IgyISAv2eXSWv6IPE1Eq3ANXdENdBLqP%2BeVG8FDNoghO%2FiDfqPRLN9cbmN2xFalwe7g%2FUDPxKyx8P%2FYNUfRrNshmvnFX6nD7U%2F4bMvTJouNAOOPrw5GnQi7K94XKkCY2Ne2rfP7ubic1%2BtsoFz1TowT1u%2Bibq2PWN8BkzxyQDBPWPvVNEktA8hW%2FPv8paL%2BIqtGl7bXlbHx2PwgdHm6xj%2BssN4T7dKnoYdj62n2CX38F2UC997oYXe1l2%2Blvg%2BUkaR1EIAVFKagG3ef4DXM%2BIGqEdtezXws1EkbujuAdD9iD6FC2Hx5ae1xwglxcrAb0GerPDeVYPch06S0KJgvyc%2FbEHTJRz2wzo7LtXQ1XEC27ash0TzH4UYjTnaHNHJSxU68RV1VSPqoNrFliLXlY7P%2BgY2Wm7KdXToD6WARTspMAfUu32TkHhmbcE5QMxkPQbGra8ZGKpWH0HbvRxV9YcDyeLtG8wFDz6RaaCMnNzX%2FSqrdTEvkqSYj8Q05UauWqcH9RCgTjUAqs0AjfjebZiGfA%2BOL%2FpUIYeNzfDRTYcPsctUgUdSdfIHPRBfOjevK%2B6mDJgQw%2BTxvgmmTsjrwi38NnIqk4%2FjBLdyp%2ByLpd8z8%2BPL%2Bsf6u%2BXc1hU%2FA1FOB0N94OVRM0%2FcJ5c517DTDIz4fEBjqkATNM481WimLQIuKoKfSgN0Cy2Bvq8PqYQrjBEakmqv9dPuskAFD59P99idDz9d3OWuUFCcK7tJnDByxXdVPsxDx4KEbAFcQrEsbMCu39uGNAeD%2Bj7t9UmAFOEF0p6GjYvaNkhDxvL1ijbOgYIvDTfnIx%2BBtszBxJJtXg%2BhSM2jcSny3UbpIO0GHBsfbRzVLJoV8rmr7YFzSFPhJIABJkoHuBNBvI&X-Amz-Signature=bd988a4d2e1109cce66c1b4c30feb254cfd2ad99900a7cb56eaeb015ed30f160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
1. That: "Smart Plug" 선택 후 "Turn off" 또는 "Power off" 선택 (스마트 플러그 브랜드에 따라 다름)
### 3. 스마트 플러그 설정

스마트 플러그를 설정하고 Wi-Fi 네트워크에 연결합니다.

1. 스마트 플러그를 전원 소켓에 연결하고, 스마트 플러그 앱을 통해 설정합니다.
1. 스마트 플러그를 Wi-Fi 네트워크에 연결하고, IFTTT와 연동합니다.
### 4. Tasker 설정

Tasker를 사용하여 AccuBattery 알림을 감지하고 IFTTT를 트리거합니다.

1. Tasker 앱을 설치하고 엽니다.
1. 새로운 프로파일을 만듭니다:
1. 새로운 작업을 만듭니다:
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


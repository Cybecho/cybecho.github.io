---
title: "Runtipi - 원클릭으로 도커 서비스 셀프 호스팅하기"
date: 2024-07-15T12:53:00.000Z
draft: false
tags: ["Docker", "ProxMox"]
series: ["Let's Homelab!"]
description: "Runtipi는 무료 오픈소스 홈서버 관리 도구로, 200개 이상의 인기 앱을 원클릭으로 설치하고 자동 업데이트를 제공하여 관리의 편리함과 안정성을 높입니다. 설치는 간단한 터미널 명령어로 시작할 수 있으며, 특히 셀프 호스팅을 처음 시도하는 사용자에게 유용합니다."
notion_id: "478a4e23-8c10-4d1e-854e-d83cb1708cf8"
notion_url: "https://www.notion.so/Runtipi-478a4e238c104d1e854ed83cb1708cf8"
---

# Runtipi - 원클릭으로 도커 서비스 셀프 호스팅하기

> **Summary**
> Runtipi는 무료 오픈소스 홈서버 관리 도구로, 200개 이상의 인기 앱을 원클릭으로 설치하고 자동 업데이트를 제공하여 관리의 편리함과 안정성을 높입니다. 설치는 간단한 터미널 명령어로 시작할 수 있으며, 특히 셀프 호스팅을 처음 시도하는 사용자에게 유용합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d212b36-85dd-48f1-8e46-c1f2c2e1b464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IYEDMZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHy0HwLz%2BEUnCiSOD0760cAn8RH2mKBGumSlq%2Fmg6Pf2AiEApRODt%2BTOm79UYlqiXwzZiOIEqJ0xBx2aqX4C5s7OKZMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDORRX0uxKzX3lGq%2F5ircA4lvZ4OPzRNQUxR7ssfE4BtFr%2BT503rsaTM2genGDdQWj28I3BorHi2fJfaSsp8vstmFKhiC%2B41ZyEWRGB2M%2F%2FydMwZ6srIbnhJeIRK2pfyeWupZnEpgvwSMi0LGxlOILF60G%2Bh%2Btio45ErH2Ox%2FMJ0w09sXXWaMsloHizDWABY2LhmWl6b%2Fc%2FMllDRLpZ9gHzUtXE79LKdclD%2B6RPTzNijik%2BjGjY%2BNyIWL1bQQHHBDRWgxmyFijrLm1Yb3mHZFuVueXBuKQCdEMN0iAjFBo4qb8mahq9xFcVcd9HFiP1EOTnBuXTHDJ4ZL4Y1GQyyJRGJ%2FXziveAYMekT1TnDl%2BDKx69NcaYkzp243GBGGwj64mOA9wbzQYhDVlCknfQC3G3L2TL32zUZ5uOrJFUZxEJhndHIC%2FSBoo7J%2FPTPeGWoBmrOFwCiTOApubCfaOr1PrZUvTMcuzzhq1ie1X6AxZ5MqIiHqrhhIVmRB4FCE5h5aakGu3DiZtMQaINOLUD3hwZnNKzoM1If7jKtaAXElhkPmV7yht%2BSOBx%2Fgmwhjv9BEeqFZ1b8B6XWf2yVjGCo4sao7aC2ti7Mi%2BrQP6Gi6UGGhI3ikkpPVqiy488p9CyGR3pDwEWnfZAfq3FC8MLv2h8QGOqUBW7KOOl2%2BukZat3iPatNCcDf26dKLL9pIooWIhUUiqo5KYflYMj%2B14rEFIozGwJfcErasWIOFw1jEcq24NdfDCRCaA%2FO0K5xVmC50bxy2fZNa61uzwscfk3If%2F0AhHS5y%2FoVBo%2FVjFjOE5nAoYycxl8l8V5t8itbHNuyyAAtXptfqZ6tsyZlX9GuB0TtAeUIDcIRg3zKZPOI4Abd1IGTl9B6rBnl3&X-Amz-Signature=4f9b91f639b53bb9611e16c1cf2dcc4075ef92a24329130b2058a4b20cbbd85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://runtipi.io/](https://runtipi.io/)

# Runtipi로 홈서버 관리 쉽게 하기

홈서버 관리 어렵지 않음. Runtipi 사용하면 됨.

## Runtipi란?

- 무료, 오픈소스 홈서버 관리 도구임
- 자주 쓰는 셀프 호스팅 앱 쉽게 설치하고 관리할 수 있게 해줌
- 복잡한 설정 필요 없음. 클릭 한 번으로 앱 설치와 업데이트 가능함
## 주요 특징

1. 200개 이상 인기 앱 지원함
1. 원클릭 설치 기능 있음
1. 자동 업데이트 제공함
1. 설정 과정 간단함
## 시작하는 방법

터미널에서 아래 명령어 실행하면 됨:

```javascript
curl -L https://setup.runtipi.io | bash
```

이 명령어로 Runtipi 설치 시작함. 설치 후 웹 인터페이스 통해 앱 관리 가능함.

## 장점

- 시간 절약됨. 각 앱 따로 설정할 필요 없음
- 관리 쉬움. 모든 앱 한 곳에서 관리 가능함
- 안정성 높음. 자동 업데이트로 보안 문제 줄일 수 있음
홈서버 관리 더 쉽게 하고 싶으면 Runtipi 써보는 거 어떰? 클릭 몇 번으로 원하는 앱 다 설치하고 관리할 수 있음. 셀프 호스팅 처음 해보는 사람한테 특히 좋음.


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d212b36-85dd-48f1-8e46-c1f2c2e1b464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKGPIRZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGhy17aPk7FlT6Vvo92gJMZymi49FxUaBavtXIM6r5a2AiACwMN7p6TZE1W6roroSNWaD11TpvT%2Fn9IYBstgdX7hwir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMob%2BnRP8f9AJPZr4VKtwDJ3x6JHkvEUZroH%2FKA3gRyeRMXyyID0qicTmYRRdHRm%2B7muhWVhZR0fxQq3hoSG%2FchaH%2BdCRWUgbThaWqTKFYpgxH%2BIFuvKb2EREFesBBDj4U%2Bc7IVj3WqAqIG8j21YZ83oh30QqtywaqMmgfVNViWg6lMgDAmcR7MNWmPoZiOit6zmd%2FO%2FchOwh826kqn2UjGzj1KtDSIoQpAV%2Fu6tBqqmN38Et3XcZFWb0VAB5jBxI2lXN5FvekZFP5UYccyQqL4nxT8YczjgUSWpyEGTL30KWLl7cBu2DpgMHyA2wTdu0nHpp9ss7%2B%2Bl7nyzzk%2F%2FguYroLXFtnyYTFnBb2zNvXVj87cypfo47mzXk6%2BTjgl%2FNjoQNR7pCbpnCSm5rJsNNeVyj9vu2yI9XCV%2BaYv%2B8NOPCWZD2grPTfzHUe%2BiYjgzN9OBxxz6EyyTnjaQx0LwQlOfvx96Wy1ENG8r0ErsivH19rG9%2B5vljwKbgbXgUoiIb0X2Pa3n41MhhhjrJErlKFegI5CELHvCgHoFC3R0DEFC2aniJZ%2FsAk0arU8g7PKqCX6tfIRxMnpOcu24jc5%2BcyZ879OK0U5klr94c4R6xp8f4HZyA68fxjrQIEaABTNBqvd6LR8gGtpC8AWq4wyc%2BHxAY6pgFNsLgg2WYeBCkbCgb7TZXgieBate4eIjcg%2ByL61sPJOSRwhAitwxF5HkR6pzgtI%2B%2FAfZWt0zj%2BSoxcEFLwEIK%2FT7tWHsIq6qnytEHqFeXy%2BNGBmxZBQlq78GSKOpZr8%2B99AU65Y6q%2BKVpLQuoISp2DosdDjrKIEiOMSLNAGuoB%2BBV6hs84SZX3EWZ0skwvDT9GDYLzhI85d15sfIzfVSthlhmqxj4Y&X-Amz-Signature=a26e18377db70cf05579b4d29f671d183ec39805fbcd083cecb15801e1c73469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


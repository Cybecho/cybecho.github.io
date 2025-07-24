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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d212b36-85dd-48f1-8e46-c1f2c2e1b464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7ZUVZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDaur2JctI%2BdsrWl6Xbshp5KlsF8CKysWlZHHaUoDMXvwIgRnNLUqpCP%2BkvD3567AOw7883zkShx%2BjXW%2BZ%2FAB1b3OQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNxgZhXqtK7iLALPSSrcA2qbUsPfHAdIGnbpXVZuXP54GEHH86LTLwj2irgstrv9f7b59xJSai%2BfJbiQs2j7lZzr0DAmozl2SSu%2FuqS7xBJFi8onse9VaaCvGtjlIMbZc4NfuArC00654FNT88wLPGpqSgoAIwgXkerYWnoZvw5wgRdaGtxZWj3RSXU9xm2MbCis%2FYzXNYNCYHZECO2ZG2taj9KYMzF22sxWEmp99%2BYCWEwKMcg4E4BVdjEnqOx7Tu8blc%2BlVU3fIJNB986mqVwNiFJhzDLnJ7c1Rfddif37WR9bGMlXtr8YssMJx7sQHHZA83V6kEo6Bm7vMycUBYag%2FEKVLGSoi48T5kQwkZ%2FSYN1OFvQdVo9HLjnvfvzP1hFf3z%2FMMf39X70j27P%2FIA57B451aA7dhjkrFQOm%2Fzj%2FecyWWwE%2F6Q2Ew8%2BImFgjzGlXzdGJN1lVsU21k30d4F%2Bj%2FAP0EKo%2BjqybGlhoMIj%2FaA2xmx4cVgR4HSgHyk8m%2FgwWaOkB%2BPQzbqdq8i4V9A1sv8JzdbxJ3Ssw3Q9ARIMZC3n4PGYDPPLTWsVsr5z%2FikUDeqSajDtkk1IiK5nFSoKlTKkPekiHKLAAryz0SHfm9bV3nVQXhmpfD9PZIUqgOYgLuuoLQlUxxv2sMMPQh8QGOqUBIPocArHXvJPmrwVGQQEJddU8yJ8pAy3OBJC8xEKpynXdnMnmOSTW%2F3qsPV8%2FKctJ2Ue5F3HBhYid5DCU70YDV3ZSb7idNMKxlGjpCGEFgGb%2BGO8xdzT1xYJxRAqN996H18yJ3TyLfHOHxo9eQlP4QgeBvWi5I1J0%2BI24cQSvrFe0hZtzn2cAbQKRhA3pNQE%2FnH8KEMmcEzM%2FvxdiM19p%2FcicUpy4&X-Amz-Signature=d32db53524716324dab1dd7218e88b1fb349de40f172e6eeed8446d7971acb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


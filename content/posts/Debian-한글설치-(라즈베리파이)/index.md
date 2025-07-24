---
title: "Debian - 한글설치 (라즈베리파이)"
date: 2024-03-25T01:48:00.000Z
draft: false
tags: ["Debian", "ubuntu", "RaspberryPI"]
series: ["Let's Linux!"]
description: "라즈베리파이에 한글을 설치하기 위해, 먼저 시스템을 업데이트하고 업그레이드한 후, ibus와 ibus-hangul을 설치하고, 나눔글꼴과 언폰트 코어를 설치하는 방법을 설명합니다."
notion_id: "5dd11582-b9d1-429e-b12c-c103d7f0b7e4"
notion_url: "https://www.notion.so/Debian-5dd11582b9d1429eb12cc103d7f0b7e4"
---

# Debian - 한글설치 (라즈베리파이)

> **Summary**
> 라즈베리파이에 한글을 설치하기 위해, 먼저 시스템을 업데이트하고 업그레이드한 후, ibus와 ibus-hangul을 설치하고, 나눔글꼴과 언폰트 코어를 설치하는 방법을 설명합니다.

---

🔗 [https://humber.tistory.com/entry/라즈베리파이Raspberry-Pi-한글-설치하기](https://humber.tistory.com/entry/라즈베리파이Raspberry-Pi-한글-설치하기)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9337fb31-f000-470f-8a58-5b3a1e25beb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERN5JAS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDppI0JbV8KjP4ib6H9jLZ%2FnnbsU%2BCHwzdsM9dGbnPiJAiEA5%2FH8reyOzT04k7QXbI42gS2%2B9AlPj%2BBMfBo4YwZGMvYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJYildFWFn3%2FkIw3pCrcA2dcuw998nZdf8WTy9ZgZke%2BR2FfKRawGXXIgLuMvX3QXnClEPQc%2F8FdX5W93Sr8YgvU7N27aNmBKK9VLL7m1IDxlU%2Btos6kFOe%2BEGT4Z9U6khfzIcBK5XCIC1XpDBqB%2BvPW%2FENShZJO%2BWULOckQ0b8KJWd8Ctei4B8xACShAWAJqo9603TL8wm7VtqIGEDH8kx6lWTBtPyHmr9m9TW5NxEI78VhH2S2mlQMhg1cKb08PMnFiM0uqx%2BFrxW6QVZtOmUiyfxEvJpwltFCzFxf4qPLTcUa6hFJcV3hmpvxnFWlU1%2Fd%2FhPnYEc%2ByBfltan3klDqIJP8zFvLdbdDXRVKEz06%2FcsqiasAQo%2BhKKVgC4lCnhXT%2Bcnj6aldn3HKjj6t71dCYg2rX7qE7GAxq%2BXbH7JRK7QMiyE5GLdTY8XP%2FzqQHNBbRfyw2sjOb3pn%2FPmJsh281JWijlWTfgmlNDvFNpWn5DRo3SjZZpoYXpZXhCewOcyM%2BZ7ZBrb35dj%2F0%2Bfiiau7W6sBQY1ddpG%2BFtQ%2FCpF0k3wAn7DA8FAZAH%2BNHHzN4WN7bUeMPJWINVlFjUuQh%2B3U%2BWv%2F%2FT3Ejv1vejZUHMPh5A6KLVm%2BIrIMvy98MrG2jsnmL1VPQYXu4aCFMLTPh8QGOqUBXpeHcL3GuG00X6%2B1Trh%2BSZLUGo09stGHvmjqxhdGt5sNZGi7FwFkYI%2Fg%2Fiows%2FoKgqAA5fDhHYR9PWiruL%2Fvnshulnm2KtUTavRhvBBkN3WxSDFHyt4lksWhWOFfQAT5wY4lf3DwmqOPCMHM9Pv4VVP7e5kWT1y2lVEBMr00rBuGBAzQi34jBMtGqmB2xdXIDJQz5JfPm0EKIljc1y%2BgJL7b4GnF&X-Amz-Signature=394512a214564cdf95cf2b2aac68aa914c07c90b34772907708b331ba01abc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
sudo apt update

sudo apt upgrade

sudo apt install ibus ibus-hangul
```

```latex
sudo apt install fonts-nanum fonts-unfonts-core
```


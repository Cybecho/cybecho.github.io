---
title: "유니티 로그라이크 13"
date: 2023-03-12T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "UI(HUD) 구성, 해상도에 관계없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추기, Ctrl + Space로 자동 추천 기능 사용, 슬라이더를 활용한 경험치바 제작, 체력바를 생성하고 플레이어를 따라가게 만드는 방법을 설명합니다."
notion_id: "0637370b-b32e-49d3-821d-ba6c24de5279"
notion_url: "https://www.notion.so/13-0637370bb32e49d3821dba6c24de5279"
---

# 유니티 로그라이크 13

> **Summary**
> UI(HUD) 구성, 해상도에 관계없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추기, Ctrl + Space로 자동 추천 기능 사용, 슬라이더를 활용한 경험치바 제작, 체력바를 생성하고 플레이어를 따라가게 만드는 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/14e57743-12e7-49d9-8e69-4ce0a583b327/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCPH7LT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDbkwkTzV0cfz%2FKJDjM5Ik9j9HZrCeymtPcoTbCVbM3WwIhAP9AGPBa%2BXGPM%2FhtWhlG9PcRxXyhwYd3xmxZi4rYTvbhKv8DCCkQABoMNjM3NDIzMTgzODA1IgwIwMeJ6gVw1FrTAqUq3ANC1XA83v2Qn3EHC8Cp0a8ifXwAmfsJdkYQX3l51roeFDL2mO9Q9VYe2w%2F9rrPOMScGxQYuBV9kCxZ973xFytlPy6ETMjszMDdiw9HKpDahLCKBcmf%2FF%2BE4dZFO3X7kCr6Hh%2B6ydZvKc8I0xPFf45gfEciymYjYfRQxeKtdywSOuQphTtFS5dKirmQ3farozdYkuQNhXpuVY8w17yIT%2F0Q2a78ukiANP0c%2BonxRM5A5MvpKV9%2BNH3iRSvQXS56ChIDs4qjwDcVPVHXS2SI43ljINOiJgG%2BIdWRoSUUt3s4F5xLesU63KKwiYn5vZ6aLvSgWL6eH2wB0NzOR0S8R5%2BVdbY%2BDqHnUN911QsyFDCAYUItCjv9XDUykT%2FpSRSYxEBMd0jgyddDJqoLXPDIboIfd3W4JZJxWbA5rhwDQ5jGCT9LD%2FJb1NJcYjmn639OZFwFIlAARpFX4Uy1qtNBGr041%2BJNnZ%2F4Bh0NmSOEXdlIMkQc9Mckg70Dj%2BSSTprIQb8hM5iVcM3Hc7CIauHSkT8uLH%2FreUIGmeNgk7Hgkcb%2Fa9vynguzQy5LiUOSuaFrOs3jEyPXXoXf2ZsdDJfgj%2Fyl8G1S5KwaI18uTdTiSvC9hB9%2BGQySh0n5QmrOAnjCRz4fEBjqkAXwftzP7nQEygAqO37yUERbKmzHLLVo%2Fjn6zhrcgYWesxOyZ%2Fg5SC1hRAfJr8dL8P0ny4YWRGLYZL0Jg0QfZ2Tksw4e4U3ZUr3i%2Fz5SOrS0OTohBRGi5aF%2BfvBgZUZ31Byg5LRm3nebQnTYmYKKwdX4e%2BczXO4c8ZirfoFCDqgirYIDy6i3nbzeiDrcFtTqDgzm3UF%2BEpu34zDjJIsoNglKF8LF6&X-Amz-Signature=83b97f441798177cec90f3c05c5e285419829b104d2560c64a5eefc554a95778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=ip0xffLSWlk&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=13)

> 🔥 **캔버스를 생성하면 초반에 크기가 무지하게 큰데. 렌더보드에서 Camera로 변경해주고 렌더카메라를 Main Camera로두면 UI의 크기가 카메라에 맞게 설정됩니다**

> 🔥 **HUD : Head Up Display 구성**

> 🔥 **slider로 경험치 UI바를 만들어봅시다**

> 🔥 **체력바를 생성하고 플레이어를 따라가게 만들어봅시다**



---
title: "유니티 로그라이크 05"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리 및 랜덤 타일 생성 방법에 대한 설명이 포함되어 있습니다."
notion_id: "4262fa2a-444d-4d13-b1a6-08a8da0b762c"
notion_url: "https://www.notion.so/05-4262fa2a444d4d13b1a608a8da0b762c"
---

# 유니티 로그라이크 05

> **Summary**
> 무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리 및 랜덤 타일 생성 방법에 대한 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/990a699c-5294-4cc3-85f6-2a03dd05c4bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBZXKGR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCcbODu6SndeDciRVs5mDg2OJOxqhuqdTDj05fKz0x%2BoQIhAP9SByMn434f4tzWprjsIqKVgyyqDVOESkmvfUCV6rRcKv8DCCkQABoMNjM3NDIzMTgzODA1Igxyh%2FvR9E7dXLrfmr8q3ANbd5D0lP%2Bs8nT%2BTzTz%2Fr%2FDi2kKKWwZSUZHyiCK7caxxntxqimfRKXf%2BDgVJlnUcTFz2qMKDFeyyCvAceQlPrDi%2FMl%2BwO7Dndfh44mZnWsHP0jjeaIrkIvkHv1SSwfaHRYq9N5rSsTf00LyNUMCtMWS0RwyGtXA1iJ0IN8TXfMfh34Vc%2BljLNM8qyxsjwmjaS1puvIHwZUy3oxR7DPaIqn2VMgQIMhjnHr6YZFQy0p0tg5rVkUKtKATUfw6%2BAO1PrFki4GagKy6%2F2om5cU22aFg3CBk%2Bka1gZmvJaNK6gKW%2Bx0X2fgIIHBplTYpxiFHnEKB5zTZJ6aGU9dBVlpisBFfmC6HziEhxsmZoVRLvqzGJ%2BgxZqKFIhIB2gg5J4XCcQGlQ0JfctEdgGLkrePzKbhfaz%2F2g0qTIrkalLVY56d1neqf8Y4ZhQDSKVAZbHTObSXjoRNRfE%2BcENCrOwgYFu4G9f2FHwGyAutZ8%2FJX%2FhLa75clXsDUurAm2xzRmMadh1bEEC5ciW33YyM461zKTUhRrCCwtOdwlR5ZiVN557bmu4fJ9ZaVX0vBXOTRF0zuKRv%2FqzEt3eRr1xU03m1GofP0y%2Bx7O0YqVgLvcxFHuYwSAQmZz5wrtnz9iD5deDCzz4fEBjqkASnlX2ACfnseFzU%2B%2B%2BR98BtISU%2FKGxk1N%2B8puISVLPCerVOZsc5iI4Am7GNBDoljwWrALbJ4no84xSm4np8qtvn2y%2BXuUUVc7TatXklXBXjXbemgo%2FD3ib6SFvTKuvUiDTjK%2FeOPRx1m4i9j4I8MK%2FCMj4%2B5EXnbgo4dnAmvyTFYUJp2H4cWF%2FF7KxVYwA9MJ1ZUrndGWdBy1tVCgmNh7RcNvHYO&X-Amz-Signature=ab753dfd65ece273fe59c48866c305cdf709e93bd2ca2f504b94f12dc16b9dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SNjgew0VhHY&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=6)

> 🔥 **랜덤한 타일이 배치된 타일맵을 그려보자**

> 🔥 ****랜덤타일맵 생성 - 1****

> 🔥 ****랜덤타일맵 생성 - 2 (재배치 스크립트 준비)****

> 🔥 **카메라를 설정해주자**


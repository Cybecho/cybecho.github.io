---
title: "BTT - 맥 트랙패드 커스터마이징"
date: 2024-01-21T02:41:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "맥북 사용자에게 필수적인 앱인 BetterTouchTool에 대한 소개와 커스터마이징 기능을 강조합니다."
notion_id: "22c5f0a7-5ace-4e5e-91ca-0f7d474930a2"
notion_url: "https://www.notion.so/BTT-22c5f0a75ace4e5e91ca0f7d474930a2"
---

# BTT - 맥 트랙패드 커스터마이징

> **Summary**
> 맥북 사용자에게 필수적인 앱인 BetterTouchTool에 대한 소개와 커스터마이징 기능을 강조합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d83f2d5-e05a-4e0b-8ee1-2eed30874266/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNR7KKDY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBQYsfql2CxHycLFBW4sl%2F9r4Y8JB5%2Fp%2BcLBa0y3JySHAiAjeYVoEyjRcBnbtYXHTiMykNAmfKu38U3i4fHEaNQfMSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPOVl2d%2BXXnM%2BK1rjKtwD5NRHsCDDpSVOSzzItsqiXRhREwRo17rf2%2BSIOpDwmtqMB5bGS77AtVd4AmrQ3HesXTvjkpqQhztowtWihdj6S5uwhsQo8nGIddRxiIwWQiD7wqmjSeCbsb6E%2BzuScGpQaxup%2BLHYmFATEcFlan9%2BbsnbWeiTm0e7YGSbKUzYH%2FCLcU9e4H7QpPKFuzm1zyazuSaOkaFFZFnJjFbF2LFnqlogzJINHg5b8CfIWDas4gVDyhRBCiEHdwC3Q6RHjgZmMITMRhK%2BDJErJ167Dh2CRsROa6OyXwMMO6Uh8y%2BDpB21HAJmRUl%2F3boMchnyZxgjNr0TxHkJ%2FgjNLi%2FP07XipQg9oE5VhIwnC0zDyRIE8MwNGBaZNB9Lene5%2BgPsY%2FeYXJJa7iDIlT8sESqpGKPvumTODlOY6R7hYP35vzozgisuLJwM6EvvAQt5IqlD%2F%2F%2FRJf7vpuE3xYpkRLZxfb7LuY9sfcUW4Ndx4LRp8H4Lp1q7cHCHZKo2rnI%2BDPkDMqJ33V4ZraSq9DPYUre3PTXlrp%2BLH84DYGRJL8UV%2BjL%2FY47qcG%2Bc2WaYXK2OQcf0wbyb7uOrbGPhcq0Xc629c%2F7KqnhEhK7RIOGJEyKIsa6g4y6pZ8M%2FJ%2Bx6kmO95c4wjtCHxAY6pgFXF%2BXTq17VAWYNnF%2FOuKVW4Lh2vQEnF4qu6btsWQlT6%2Fq0sXdkta7GpE8nTUDKRLbgPBG%2Fm1JvPHpPD6HZzv%2Bn4J4I9wfeFdL4tn1XpA664U1TDq8HByYzTpH%2FQz6rZiNcuZDscCbWP4ZyGxAWmPuCVKInoRVbtBIn%2B%2BJeH7x0FAcHGvrvbgk7RsWEtMgbyUYfe1ohlBeVfBRx09O7S664E%2F3fVFJk&X-Amz-Signature=f3d9b00a0fa9e1bda2c3bc82c013c162ab246a0b9304ca4a42fd726736a88d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://allgg.tistory.com/29](https://allgg.tistory.com/29)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9b9b6b94-4bab-4c22-a7ab-a424005eaa23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNR7KKDY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBQYsfql2CxHycLFBW4sl%2F9r4Y8JB5%2Fp%2BcLBa0y3JySHAiAjeYVoEyjRcBnbtYXHTiMykNAmfKu38U3i4fHEaNQfMSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPOVl2d%2BXXnM%2BK1rjKtwD5NRHsCDDpSVOSzzItsqiXRhREwRo17rf2%2BSIOpDwmtqMB5bGS77AtVd4AmrQ3HesXTvjkpqQhztowtWihdj6S5uwhsQo8nGIddRxiIwWQiD7wqmjSeCbsb6E%2BzuScGpQaxup%2BLHYmFATEcFlan9%2BbsnbWeiTm0e7YGSbKUzYH%2FCLcU9e4H7QpPKFuzm1zyazuSaOkaFFZFnJjFbF2LFnqlogzJINHg5b8CfIWDas4gVDyhRBCiEHdwC3Q6RHjgZmMITMRhK%2BDJErJ167Dh2CRsROa6OyXwMMO6Uh8y%2BDpB21HAJmRUl%2F3boMchnyZxgjNr0TxHkJ%2FgjNLi%2FP07XipQg9oE5VhIwnC0zDyRIE8MwNGBaZNB9Lene5%2BgPsY%2FeYXJJa7iDIlT8sESqpGKPvumTODlOY6R7hYP35vzozgisuLJwM6EvvAQt5IqlD%2F%2F%2FRJf7vpuE3xYpkRLZxfb7LuY9sfcUW4Ndx4LRp8H4Lp1q7cHCHZKo2rnI%2BDPkDMqJ33V4ZraSq9DPYUre3PTXlrp%2BLH84DYGRJL8UV%2BjL%2FY47qcG%2Bc2WaYXK2OQcf0wbyb7uOrbGPhcq0Xc629c%2F7KqnhEhK7RIOGJEyKIsa6g4y6pZ8M%2FJ%2Bx6kmO95c4wjtCHxAY6pgFXF%2BXTq17VAWYNnF%2FOuKVW4Lh2vQEnF4qu6btsWQlT6%2Fq0sXdkta7GpE8nTUDKRLbgPBG%2Fm1JvPHpPD6HZzv%2Bn4J4I9wfeFdL4tn1XpA664U1TDq8HByYzTpH%2FQz6rZiNcuZDscCbWP4ZyGxAWmPuCVKInoRVbtBIn%2B%2BJeH7x0FAcHGvrvbgk7RsWEtMgbyUYfe1ohlBeVfBRx09O7S664E%2F3fVFJk&X-Amz-Signature=cf5cde1925da04dbf6522cf638ff95f65df1556594cb4d1ab55445b745c1bfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


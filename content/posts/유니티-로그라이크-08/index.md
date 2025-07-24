---
title: "유니티 로그라이크 08"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "게임의 난이도를 시간에 따라 조정하는 코드 구현, 직렬화를 통한 사용자 정의 클래스의 Inspector 노출, 몬스터 스폰 데이터 관리 및 초기화 방법에 대한 설명이 포함되어 있습니다."
notion_id: "874bd934-c25c-4293-83cd-d6c4a7a0d086"
notion_url: "https://www.notion.so/08-874bd934c25c429383cdd6c4a7a0d086"
---

# 유니티 로그라이크 08

> **Summary**
> 게임의 난이도를 시간에 따라 조정하는 코드 구현, 직렬화를 통한 사용자 정의 클래스의 Inspector 노출, 몬스터 스폰 데이터 관리 및 초기화 방법에 대한 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/69ca0e9a-1768-4661-a9bf-fa3c30abaf84/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYX6PU57%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDgb5udZ%2BcE%2FNxQUMfrxqoreCG9pQHc%2BMMZ3yY%2BxsE%2BGAiEA3%2FdPmEkdg9Fgbrn1%2Fu9CEJpMVychfj8hE%2Bt346Nw%2BwQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMWTjyHjXpVnfkuPjircA%2BNwMk3OjO5SzxaNTokruk7Sv6nUSGbFwNkyUyNQw5ZVEi4RrGKtWn8B8vxGIBd21Z1cMWy8%2FV3a0ydHmjoNXrZ11Ue%2FOraJn1TFuyjFNSZ%2F4eIt5MpJRf4gzYDHYPWF7KKXiX4BUl59j7iCdzKYWxhxWHG9OUTPvCXFVI33MvXjrE7V5nH59rUPt7uGnJJaNDmm4hQOfe%2BsStnJ21w8SCSsJAZwpDHsF%2Fa%2BT%2FP3%2FE9sS6wJdcVevA3E%2FzvGtTU5EfJKRv1%2FqmnEc9%2BUynL%2Fm228DFZ5Zs3N8SSFA%2FFr%2F5xyTXXa3nQbOZ4CMLTI3bMz2gI7G6tlHorCa9Nlc7PI%2FNGp2zMrIAJSmh1NfL9rpD9W48Yr4O2UxqiS2V8B3%2FvCGKDyZsRQ3t7vWcJVIhSEBon0ZHrgV4ajaGs5tfTJUCB3rJIwyiENe%2FV9w7YtpU1miBsI3wrK9rPrtxKaBs0Nhsy896YO0881UMULu%2BBcaiSo1PfbRzmoRsFv%2BIhixz5A1cQS4fSpCfvokaVUTOwmRUjOB9J5EFmsRPSqbiZNsQERtd447cgCbbmVxgstpi%2FOCxywQ0CCWyJfTJrHZPjnSyJPaEZwe6EVNfwta8lcd3NPkz75OkCXKbbe7viJMLrQh8QGOqUBwbp689v%2FUmaVizMptQl39SVRfnw8d5u9Qr9iGdNzydggqqq%2FRqmn6KtoJuLXWL5pYzBhh3RbyOUXugFUjXEEZCI2klCXpT2PSA4mFwNkAh3sgoR4QJJIHsImjUL6MWLb0x6G9pdo11mZBLPPOqcgsshazeH9EgeEKmfpGlgvEMayJzmpViBXTS5dI49lCjUC3aaoIt72r3JqlRmTKhgYKsjuKQqZ&X-Amz-Signature=d4198945c2c5bb130b48b44f52106eeccf9c7da0493cecf8162856a18fb43e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SSg_9q-8h-A&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=9)

> 🔥 **시간에따라 게임의 난이도가 변경되는 코드를 만들어볼까요**

> 🔥 **소환데이터를 담당하는 클래스를 만들어볼까요**

> 🔥 **스폰데이터를 활용해 몬스터의 타입과 스탯을 정하고 스폰해볼까요**



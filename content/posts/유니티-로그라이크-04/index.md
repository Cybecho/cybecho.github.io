---
title: "유니티 로그라이크 04"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티에서 캐릭터 애니메이션을 구현하는 방법: 이동 방향에 따라 스프라이트를 뒤집고, 애니메이션 속도를 조절하며, 애니메이터 오버라이드를 통해 기존 애니메이션을 재활용하는 방법을 설명합니다."
notion_id: "324a28ab-6122-422d-ae6e-e989ed1148c0"
notion_url: "https://www.notion.so/04-324a28ab6122422dae6ee989ed1148c0"
---

# 유니티 로그라이크 04

> **Summary**
> 유니티에서 캐릭터 애니메이션을 구현하는 방법: 이동 방향에 따라 스프라이트를 뒤집고, 애니메이션 속도를 조절하며, 애니메이터 오버라이드를 통해 기존 애니메이션을 재활용하는 방법을 설명합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=vizfd1TeRMI&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=5)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/103a9eea-6d83-4881-ac4c-2095536d4ab2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HGBH6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDwNkz6%2BUGVjtTTj7SdBWR%2BSZ2UVxCkgrMoR6tH0sMBRQIhAK9X2nV9c%2BEREQsxTAzYd49W2aX747Ry7jHQTz1g8hzeKv8DCCkQABoMNjM3NDIzMTgzODA1Igyi5EfP0f4AKWuzBQ0q3AMdxmzV4x1nAfeoHsxFqTvY0yxbk2hIqxjX3seShjGV7n8IZswMvZ0VAO4BRrzWfYaTKJInWl86gXc7Gdhc0qqPQpuYKHuWsAunY4fdHjBQG4l5KcuPPq6M%2BDNihK5mRmn8zZdMjoOTRLOM38JBAVPay7lC8IvPBER40rseViDGRdalqfmB8e6D2o%2B4ggVAj9iAE%2FICZUZvAayGx9A2FAQh%2BcZuI%2F2YxMtLl60WIFHuE5IFZQ38WTBEvpjmPrSFONqFpMKmjsrSeSzOgCLkEtoejY%2F5a0DJ2mmEYet5BOu3kjizZI3mVuZWBZiB0ijw5o%2FQhQWlYbbQQW76CtEqb0xlHs51BJO58HGrABhrZXAKDjKHqAvSzb3Eu4KwzkYpAt5gyL7XJaufH8qqC8%2FzZpYv8fpW9vF9t2OeeNoUKwEObIaGP4Kj7EtwsoTkL8DAXcBsoS7qK4rhZJIYHMztToXuVdY6nQduxVMvAkoPpEZd%2F%2BbZi1PlNiHhHz4QfAsQMkyk0Twt1aQX0V4%2BehmEWvLQ2STWlKUk%2B2Q%2BB%2FhU1pUhq0N1na%2FHgYvFBRjseqWClEYwGXG6FPtrsghYuVbB0nkdgT7CiM5Pq0Mr9Ewfi0g%2B3dnp4r8dAN7twPxp4DCUz4fEBjqkAc5z3NtFvIDnTEOxPN04tEW%2Fdf%2FwTs7Oht5o6DgDspv2hreK8ydR3GkefBswLivm%2FOCPs2orS%2BT%2FMvkQZsocmYM8Hnxh41tVt%2FjOpnNOCdoNXGRgRdoFHrmx8qCYlb%2BEh6Pxsj7L5POmZ7M2xVKlWqYYenwej1nGZaRbUn2s%2BfUfAPYq7t%2FAd%2Beh%2FHVSsqZd%2FE5GIVvUtyLPyWbWBEePxWAPurIS&X-Amz-Signature=dd99c9e6017b5f4d55f8c506a46dc82502a861fa62e263c5e27fb5d91aebb9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **플레이어가 이동방향에맞게 시선을 바꾸는 코드를 구현해보자**

> 🔥 **플레이어의 애니메이션을 직접 만들어보자**

> 🔥 ****애니메이션 재활용하는 애니메이터 오버라이드를 알아보자****


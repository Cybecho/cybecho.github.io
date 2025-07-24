---
title: "유니티 로그라이크 02"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "플레이어 이동을 위한 Rigidbody2D 함수와 FixedUpdate 사용법을 설명하며, 속도 조절을 위해 벡터를 노말라이즈하고 GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선하는 방법을 제시합니다."
notion_id: "8f5e0db5-c75c-4700-997d-1b35a3411446"
notion_url: "https://www.notion.so/02-8f5e0db5c75c4700997d1b35a3411446"
---

# 유니티 로그라이크 02

> **Summary**
> 플레이어 이동을 위한 Rigidbody2D 함수와 FixedUpdate 사용법을 설명하며, 속도 조절을 위해 벡터를 노말라이즈하고 GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선하는 방법을 제시합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=YAu4yWU5D5U)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6cba5215-9739-4ac3-81f4-b7fac882fbfa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQVPMN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDriZzeHDpKEnU9GArQyQeJKAEZyjXoUWSyXEO5GwJwCAiEAt%2BakgxdLzN2FJRm3XYQg6lQsmbjX3SvesAt12hkBZncq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDia12U8iTzJ0%2BZZ6ircAyw2oeyCQMxstr7CIJIIrke0laozS%2Bs6Q6KDQXNiOhWH7sHXrFJOALG1ps5wS3t8jN4NDeAPbDYOXPqxn34Cqkk%2F99LubixebkEfvLnoHN8%2BmPYym56P80W5OzmMMpNzafiOu%2BGJm3qR2%2FtFa9C3%2BKXWMiVvZn%2FbRGJ4NpgLSiErdlzLGVsl9VVt7X3B14CE8MvgZxWwgvTtG3iVKiAD4ypaW3hUct2hHZi0FPd7WeYvkWbkQLZJpZdY%2BlVKFd1xzUc3z8UBN5PL1RpaaqeaEFfF%2FASp0RRi1LY8ADYa4vDjsm3Nh4nlCTXcPGSbT5vdF0hFTqKGo6u5nV2QyWQUYGOK0owiTjKoDtJl%2BnWY9Ng9N6QoC69686AqS6QtdGKH5pYB0xldM4kIs4p8Noz6zRLNBE4RdP4%2FNHOOgZr9i9TF95RMEMJLIzuH%2BQHCebUaT885B7ZzQfMXcifBpjBNEx3C0a8B1VSglGIVhUHGd8qb8Me8%2BtGVQODwif%2BNFcDYTKrrY72qgqxwlp0qidUuKo7q2tDN%2BktYdsG%2Fe25YA%2FL%2BwTmvq3IuD%2BhRwF0i5wijqAdh9lyanhYIT%2BjWxgLJ64D5g%2By0GrRiSEQGeHcJQv3THMQsLbx%2ByBFgp%2BH3MJrQh8QGOqUBg%2FUIj%2BtYRRHt%2Fp%2FFbPX7zC5EkfTT6DB6LLaPVqYDOW%2BPrBlV4tpy5fJbPIgQWlsFMu219qClRSnSNDu4Q%2B2zsyaKyheFtdzLkgGF0fnbFecaWrbXl1AaociA04j7l0EnqAGhC20tNXcgDinUv8M9mZ96auRASYLYlX4HWS3MWqWVWSkXLz6LV5HfS6utOwfDG%2F39woLNTAsDV2ZejaqRVrfYDRgZ&X-Amz-Signature=1a5491ac56d422974f428e614fe6ec771a50f6d9f3c40930e314e443d0e4d212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **`FixedUdate`는 물리 연산 프레임마다 호출되는 함수다**

> 🔥 **Rigidbody2D 함수 설명 + 플레이어 이동 코드**

> 🔥 **근데 플레이어 속도가 너무 빨라서 다음과같이 벡터를 노말라이즈 해주고 델타타임을 곱해줘서 프레임 속도를 고정시켜줍니다**

> 🔥 **근데 GetAxis특유의 늦은 반응과 슬라이스 이동이 거슬린다**


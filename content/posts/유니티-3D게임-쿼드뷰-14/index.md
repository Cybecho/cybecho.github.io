---
title: "유니티 3D게임 쿼드뷰 14"
date: 2023-02-25T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 UI 구성 방법: 여러 판넬을 사용하여 필요한 UI를 구현하고, EventSystem을 통해 입력을 처리하며, RectTransform을 활용해 스크린 좌표를 설정한다. 글자 크기 문제 해결 및 선명한 글자 얻기 방법, HP 구현 방법도 설명한다."
notion_id: "1326f328-573e-4360-8b0e-060a3f305b1a"
notion_url: "https://www.notion.so/3D-14-1326f328573e43608b0e060a3f305b1a"
---

# 유니티 3D게임 쿼드뷰 14

> **Summary**
> 유니티 3D 게임 UI 구성 방법: 여러 판넬을 사용하여 필요한 UI를 구현하고, EventSystem을 통해 입력을 처리하며, RectTransform을 활용해 스크린 좌표를 설정한다. 글자 크기 문제 해결 및 선명한 글자 얻기 방법, HP 구현 방법도 설명한다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=N4PLRkupABM&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=14)

> 🔥 **게임 UI는 판넬을 용도에 맞춰 여러개 만들고 판넬 속에 필요한 UI를 구현한 후에 필요할때마다 판넬 전체를 불러오는방식으로 작업합니다

EX)인게임 플란넬, 게임오버 플란넬, 게임스타트 플란넬**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e501b351-a613-4180-8b8c-098527d79247/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGMPSDJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCi8Ot4m9Q6LpWFegxW%2FusE36mdjwxmrM8vvN5q9oREjQIgHjbLAz2DilsrNnjj7gp434AqvoweOFEXWy0FslvO17Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKgNEb8Q7Thf2JlfpSrcA7LK0O%2B27XEYOO4EeGWXd9Vj%2BMvEqxAuNs28%2F9me1y3BIuBbZKazOZzywpBTHu%2FrmVns4cZ2a7dIAsLDmj%2FTtp0isuCa4KWu1MDaZafE4gULzzL3vCXqEj%2Fic2oj%2BgPZcUcxNIefwvzzUpvb5I6Lg9LOgM6zFvKPDs2Hc%2BhVgjzxT%2BzfCScJASLmLyWoFwFhuYnhDg7Eg0MCXmFlz4eOyx5AaTyipm4%2BJNzO4V25m5VUKKCkkOSLrKB%2FC3XamJIStWGtdp9YE1ZRPefJr9zeH8DpVEWsbnFrkdxtqvqrbvqZD%2FlJ6HvSQmwREx2B7pB1f6tyFqvion8CJQTFEavLSyjn9RBZ%2B787uwoBHoAH4gM4sRKh7DFvfIT06Uph41RrjqgPizb3hdUHKx%2FFp09BlULsfOfHSZFXGqYS4S0t3xO%2Fjprhb8MEzU7%2FQjCPWDkLEEymIr3YMouaWNmx5I%2FcvhIkUHcED1Iz9ic3ymPz4do9COB76ALfjwQlvM89innYnr%2FjzZBoTeFSgGqiGqsyD%2BBow9xVmtJFOwpyLoCw%2BiYAbgPSenSZ5GyxxGp3Ql0%2BuklFxDgRlkFcztRKuS6u71YRglTIDWase4tJJk%2BbOCCHhvzjgEf%2FRl5IILBDMJvPh8QGOqUBEShfOTqr2eiCUhNdczKX%2BGENSsUlmxfdAwG22rJTio5Q8NCj4zCYarBeF6GfyeIawHxuLWSQ%2FaElEoQTBUYLOk2KoDsQPkGLzxOeWY2UBTA6nt669CQEjSaMI7EE5ntn%2BcZrcrDdxJ5R9DmbUNKJGXq2cPRIK1w3wKeeJssiBBNRORRcmJGjGCST5L0NW3gZ2Qqxv6oaaPKimhDCTHENldfQcaOS&X-Amz-Signature=8de65cc2cef44683fd735457a3732f169bbdfb7ac82858a6b939e991d6ec53a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **우클릭 - UI - canvas 클릭하면 등장하는 EventSystem은 입력키를받는 컴포넌트라 생각하면 된다**

> 🔥 **RectTransform → 스크린좌표임 월드좌표와 다릅니다**

> 🔥 **Set Native Size 이미지를 원래 크기로 맞추는 기능**

> 🔥 **UI Text 글자크기가 박스보다 클경우 사라지는 현상을 해결하는방법은 다음과같다**

> 🔥 **선명한 글자를 얻는 방법은 다음과같다
스케일을 줄인다 → 줄인 비율만큼 폰트사이즈를 늘린다**

> 🔥 **UI 중심과 위치의 방향 기준**

> 🔥 **HP구현방법**


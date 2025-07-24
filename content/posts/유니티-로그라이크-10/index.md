---
title: "유니티 로그라이크 10"
date: 2023-03-07T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 클론 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 사용하여 부모를 변경하는 방법, 근접무기를 등록하고 배치하는 방법, 그리고 Bullet과 Weapon 클래스의 초기화 및 기능 구현에 대해 설명합니다. 또한, 스킬 레벨에 따라 공전하는 무기의 개수를 늘리는 방법도 다룹니다."
notion_id: "4702c5ac-1b38-49c8-b8e3-871a36a9f438"
notion_url: "https://www.notion.so/10-4702c5ac1b3849c8b8e3871a36a9f438"
---

# 유니티 로그라이크 10

> **Summary**
> 유니티 로그라이크 클론 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 사용하여 부모를 변경하는 방법, 근접무기를 등록하고 배치하는 방법, 그리고 Bullet과 Weapon 클래스의 초기화 및 기능 구현에 대해 설명합니다. 또한, 스킬 레벨에 따라 공전하는 무기의 개수를 늘리는 방법도 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f2fdfc4-74ca-4c8c-9f25-26e7785c3671/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMZ42QD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGiHPfiFFlyJhu%2BkmoeEdxKh570bxrToHEjHE0q28NMuAiEA8DJZYxW5Otlw3fSvmP7yKmwIS7u8IZ9YX384%2BK%2Fr2ccq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM4YIfxytYTCp60tcyrcA%2FYQCshF%2BTYQsL5nsb9q4knILkNd2EOfOubYtii3EHCa%2Blc3TaIRO2a%2BWA6dtpGDcijmO0dtUgTac4XReWGMYPnMrGy60DAe0P49t11NC9%2B6NkZ4T%2FOLDgAwBE5DgHio%2FX5i28qxnL%2BAPUoPxUXNGRa2LYHpr3YLCeoX8ub1S5TXuTw0wuWbv4SClf9zcIlj1e58gFU3%2BOW3A8iKo8u6XNv0KdijhvU81WI1pVrWuMc6H2ppinq9ExMdxwLKpOXZI63ZwlQG%2FO5D7j8XqR2zClrOnnk5J3RNz9cS4a3VlNGWq2g1zjpR0776F6sJvaks8C%2FZBsOBfGvkvAc4rSTP2C4ZywTPYYriuTHxjzv%2FVOm1Gyp38vTfVc9FX8%2BMZeE3221NmFZlqPNsV5ICHj6cmSkije4Y0QwLgTQ3awZt2ByNsUam%2BGf7bSzUFSw7nZOB6%2BU7Nob6rrLtUzsz5F4E6M6cwUtkMazhlemPzGKFsK6uZstW3suYlFo5o%2BvicyY0fPcsfRBSrXk9GJdfDYtaijSSzaFTar1XjAVt4DnPZsuRLamWCxilyYnb9f3h7FJqYbpU19G10P1bYDdV5v36zP4Otxh3Ca3jvpGmsQUL8EOQPQ%2FKtAqv%2FBjoS2KVMPPOh8QGOqUBpIpW%2BnYD%2FrsEsyEUHei%2Fy2kkIJHqaTcmx9Et8CurTJ%2BrsbN86JtcOLChQpV1O5tPcsiD4JxcrqzV2uk7KWxpoGsJXvA6XAocSN5CNfCtRECcTQ0Hak15pgNAAE025BcZGFbNuLIkPbNk93fCdsJsLlV1X%2BmtQFrSmOXBbqvaoK0U6fjf58NjnflCWnQGT8c0kG2L0PcLIhv5FmmG%2FpFha5WF3l9R&X-Amz-Signature=2c187019f2e191856a15fcf36b7711c442ecea458d8f20f700f4b218fe5502ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **풀 매니저에 근접무기를 등록하여 무기를 배치해볼까요**

> 🔥 **Init 을 쓰는 이유는 생성한 변수를 초기화할떄 이용합니다**

> 🔥 **그리고 Weapon에서 Bullet을 불러와 관통횟수를 무제한으로 만들어볼까요**

> 🔥 **하지만 이렇게 하드코딩처럼 프리팹을 하나하나 설정하기엔 프로그래머가 아니죠, 코드로 구현해봅시다**

> 🔥 **이제 스킬의 레벨에따라 공전하는 무기의 개수가 늘어나도록 함수를 제작해봅시다**


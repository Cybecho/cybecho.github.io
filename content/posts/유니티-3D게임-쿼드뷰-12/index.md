---
title: "유니티 3D게임 쿼드뷰 12"
date: 2023-02-23T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에서 클래스 상속, 보스 구현, 코루틴 사용법, 물체 크기 조정, 메쉬 색상 변경 및 플레이어 방향 예측 방법을 설명합니다. 랜덤과 스위치문을 활용한 보스 패턴 개발도 포함되어 있습니다."
notion_id: "58df85f9-7db2-460f-9d28-c50ddbea8630"
notion_url: "https://www.notion.so/3D-12-58df85f97db2460f9d28c50ddbea8630"
---

# 유니티 3D게임 쿼드뷰 12

> **Summary**
> 유니티 3D 게임 개발에서 클래스 상속, 보스 구현, 코루틴 사용법, 물체 크기 조정, 메쉬 색상 변경 및 플레이어 방향 예측 방법을 설명합니다. 랜덤과 스위치문을 활용한 보스 패턴 개발도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7JlujO3JYas&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

> 🔥 **11분부터 파티클설정에대한 내용을 복습합니다**

> 🔥 **클래스 상속하는 방법**

> 🔥 **보스 바위공격 구현**

> 🔥 **enum 추가하여 몬스터의 분기점 추가**

> 🔥 ****코루틴의 while 문 안에는 yield return 딜레이를 주지 않으면 오류가 발생한다****

> 🔥 **transform.localScale = Vector3.one * scaleValue;**

> 🔥 **몬스터도 피격당했을때 모든 메쉬 머터리얼 변경되도록 하는 방법은 Material을 사용하는것이 아니라 플레이어처럼 `MeshRenderer[]`로 material을 설정해준다**

> 🔥 **Boss 플레이어 방향 예측하기**

> 🔥 **보스 패턴 개발은 Random과 Switch문을 활용합니다**


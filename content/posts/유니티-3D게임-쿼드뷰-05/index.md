---
title: "유니티 3D게임 쿼드뷰 05"
date: 2023-02-09T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "UI 크기 조정, 무기 잔상 효과, 코루틴 함수 사용법, 마우스 방향 공격 구현 및 레이캐스트 활용 방법에 대한 설명과 코드 예시 제공."
notion_id: "297ca482-365a-43d6-8672-d9a0288c6047"
notion_url: "https://www.notion.so/3D-05-297ca482365a43d68672d9a0288c6047"
---

# 유니티 3D게임 쿼드뷰 05

> **Summary**
> UI 크기 조정, 무기 잔상 효과, 코루틴 함수 사용법, 마우스 방향 공격 구현 및 레이캐스트 활용 방법에 대한 설명과 코드 예시 제공.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=afPF_fOOG68)

🎥 [동영상 보기](https://www.youtube.com/watch?v=Zfoyagdz1y0&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=6)

> 🔥 **무기기본설정 코드**

> 🔥 **근접공격 잔상효과를 만들기 위해서 웨폰포인트에 Effect Empty를 설정해두고 Trail Renderer 컴포넌트를 추가해준다**

> 🔥 ****코루틴 함수 / Ienumerator 은 yield 를 포함하고있어야한다****

> 🔥 **코루틴 함수는 사용할때 `StartCoroution(”함수이름”);` 로 사용해야한다**

> 🔥 **그리고 Player.cs 에 있던 코드도 Weapon에 맞춰 변경(볼드체 해둔 코드 추가)**

🎥 [동영상 보기](https://www.youtube.com/watch?v=07q9RUTRq4M)

> 🔥 **총알이 바닥에 닿았을 때 물리충돌설정 (Rigidbody / Collider 는 기본으로 설정해두고)**

> 🔥 **재장전 코드**

> 🔥 **마우스 방향으로 공격**

🎥 [동영상 보기](https://www.youtube.com/watch?v=dynN70kyD9A&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=8)

> 🔥 **리지드바디끼리 부딪혀서 플레이어가 자동으로 회전하는 현상 픽스**

> 🔥 **벽관통 해결 또한 Ray를 활용한다**


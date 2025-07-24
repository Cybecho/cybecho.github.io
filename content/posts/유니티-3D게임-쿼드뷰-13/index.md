---
title: "유니티 3D게임 쿼드뷰 13"
date: 2023-02-24T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임에서 충돌 설정, 보스 패턴 구현, 미사일 발사 및 점프 공격 메커니즘을 포함한 다양한 기능을 설명하며, 부모 클래스의 Awake() 메서드 문제 해결 방법도 제시합니다."
notion_id: "fad748f6-bb6f-458e-8989-81b1bbf80599"
notion_url: "https://www.notion.so/3D-13-fad748f6bb6f458e898981b1bbf80599"
---

# 유니티 3D게임 쿼드뷰 13

> **Summary**
> 유니티 3D 게임에서 충돌 설정, 보스 패턴 구현, 미사일 발사 및 점프 공격 메커니즘을 포함한 다양한 기능을 설명하며, 부모 클래스의 Awake() 메서드 문제 해결 방법도 제시합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7JlujO3JYas&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

> 🔥 **gameObject.layer = 14; 이런느낌으로  레이어를 변경해서 특정 레이어와 충돌하게하거나 하지않게 만들어서 관리할 수 있다**

> 🔥 **상속을 받더라도 부모의 스크립트의 변수가 public 이여야만 자식 스크립트에서 사용이 가능합니다**

> 🔥 **보스패턴 구현**

> 🔥 **근데 이렇게 짜면 어미클래스인 Enemy에서 초기화 한 컴포넌트정보가 제대로 들어가있지 않는다 왜그럴까?**

> 🔥 **보스 스킬들 구현**

> 🔥 **StopAllCoroutines() = 모든 코루틴이 break되며 코드가 끝난다**

> 🔥 **MeleeArea와 충돌했을때 버그나는 이유는 MeleeArea에 Bullet을 넣지 않았기 때문…**

> 🔥 **보스에게 공격당했을 때 Player 넉백구현**


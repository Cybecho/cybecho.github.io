---
title: "유니티 3D게임 쿼드뷰 08"
date: 2023-02-15T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "수류탄 구현 및 폭발 기능을 Unity 3D 게임에 추가하는 방법을 설명하며, 수류탄 투척, 폭발 후 적에게 피해를 주는 코드와 물리적 반응을 설정하는 내용을 포함하고 있다."
notion_id: "6e9fae20-0009-4d3d-b7b9-3a03586b41d6"
notion_url: "https://www.notion.so/3D-08-6e9fae2000094d3db7b93a03586b41d6"
---

# 유니티 3D게임 쿼드뷰 08

> **Summary**
> 수류탄 구현 및 폭발 기능을 Unity 3D 게임에 추가하는 방법을 설명하며, 수류탄 투척, 폭발 후 적에게 피해를 주는 코드와 물리적 반응을 설정하는 내용을 포함하고 있다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=FyJYWRIq0Ss&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=10)

> 🔥 **수류탄 구현**

> 🔥 **수류탄 폭발 구현**

> 🔥 **Enemy에게 데미지를 주기위해 HitByGrenade라는 함수를 새로 호출하고 Enemy.cs에서 함수를 public으로 생성해준다**

> 🔥 **총알맞았을때랑 폭탄맞았을때 넉백판정을 다르게 설정한다
또 OnDamge()에 인자도 추가하여 기존 코드에 인자로 true 혹은 false를 넣어둬서 수류탄공격인지 아닌지 설정한다**

> 🔥 **그리고 마지막으로 Grenade.cs의 Explosion() 에서 Destroy로 프리팹 삭제**


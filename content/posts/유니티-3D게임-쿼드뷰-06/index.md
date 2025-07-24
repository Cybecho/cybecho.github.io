---
title: "유니티 3D게임 쿼드뷰 06"
date: 2023-02-10T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "자동회전 오류 수정, 레이캐스트 시각적 표시, 아이템과 플레이어 간 충돌 방지를 위한 코드 수정 및 레이어 설정 방법을 다룹니다. Rigidbody와 Collider 설정을 통해 충돌 문제를 해결합니다."
notion_id: "22cc513f-82e6-4ca7-8cf9-052009c4663e"
notion_url: "https://www.notion.so/3D-06-22cc513f82e64ca78cf9052009c4663e"
---

# 유니티 3D게임 쿼드뷰 06

> **Summary**
> 자동회전 오류 수정, 레이캐스트 시각적 표시, 아이템과 플레이어 간 충돌 방지를 위한 코드 수정 및 레이어 설정 방법을 다룹니다. Rigidbody와 Collider 설정을 통해 충돌 문제를 해결합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=dynN70kyD9A&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=8)

> 🔥 **리지드바디끼리 부딪혀서 플레이어가 자동으로 회전하는 현상 픽스**

> 🔥 **벽관통 해결 또한 Ray를 활용한다**

> 🔥 **아… Layer 가 아니라 Tag 설정을 해서 코드가 실행이 안된거구나**

> 🔥 **무기랑 플레이어랑 안부딪히게 - 리지드바디를 땅에 닿았을때 작용하지 않도록 만든다**


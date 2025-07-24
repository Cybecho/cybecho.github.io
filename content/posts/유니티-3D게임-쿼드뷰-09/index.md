---
title: "유니티 3D게임 쿼드뷰 09"
date: 2023-02-17T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에서 적 AI 구현을 위해 GetComponentInChildren<>(), NavMeshAgent 사용법, NavMesh 베이킹 과정 및 애니메이션 설정 방법을 설명하며, 공격 코드와 관련된 버그 해결 방안도 포함되어 있습니다."
notion_id: "39ad5223-d16d-489b-a97d-4dcd626b0636"
notion_url: "https://www.notion.so/3D-09-39ad5223d16d489ba97d4dcd626b0636"
---

# 유니티 3D게임 쿼드뷰 09

> **Summary**
> 유니티 3D 게임 개발에서 적 AI 구현을 위해 GetComponentInChildren<>(), NavMeshAgent 사용법, NavMesh 베이킹 과정 및 애니메이션 설정 방법을 설명하며, 공격 코드와 관련된 버그 해결 방안도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=FBY_cmtCNHw&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=11)

> 🔥 **Enemy A에 Enemy.cs 를 넣으면 다음과같은 에러가뜨는데,  자식들의 컴포넌트값까지 받아온다는 의미로 InChildren을 추가하면 정상적으로 meshRender를 불러옵니다**

> 🔥 **Nav Mesh Agent = 네비게이션을 사용하는 인공지능 컴포넌트**

> 🔥 **NavMesh = NavAgent가 경로를 그리기 위한 바탕**

> 🔥 **적 애니메이션 제작**

> 🔥 **버그발생.. 코드 다 똑같은데 왜 몬스터 상태 이따구냐**

🎥 [동영상 보기](https://www.youtube.com/watch?v=LUnZHdcOe_M)

> 🔥 **`**MeshRenderer[]**` meshes;
팔,다리 몸통별로 따로따로 메쉬렌더러를 가지고 있기 때문에 배열로 선언**

> 🔥 **몬스터 공격 코드**


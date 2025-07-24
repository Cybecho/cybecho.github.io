---
title: "유니티 3D게임 쿼드뷰 07"
date: 2023-02-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임에서 몬스터를 생성하고, 피격 후 사망 처리 방법을 설명. 머터리얼을 불러오는 방법과 피격 판정을 비활성화하는 스크립트 예시 제공."
notion_id: "dc3d9e44-cb15-45fd-ac6d-4766fa29a508"
notion_url: "https://www.notion.so/3D-07-dc3d9e44cb1545fdac6d4766fa29a508"
---

# 유니티 3D게임 쿼드뷰 07

> **Summary**
> 유니티 3D 게임에서 몬스터를 생성하고, 피격 후 사망 처리 방법을 설명. 머터리얼을 불러오는 방법과 피격 판정을 비활성화하는 스크립트 예시 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f362ff2b-c9ab-47ce-b1c1-0e15737a9dea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKVBT7R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDlVj%2BAr2r5ZahLIL6J25iqkDUM2OLMpr%2BIlcGpp87nIgIgDL8jsqRcPl%2FccMnJq2cBBMRP%2FEkGGX7M6o6Cf30ngrwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHm%2F%2FOGo7LonQ34v6SrcA29PZIoRbLLN65cYWAchcI6B8e3wY9dTFJHBZzvQ39mkGss2GwfdG9Ii1rWrii4accnOOuCem%2F95h6GLyE84OOtMZxhEzyaXkL33NPr3and11JW6so5s6Ef0Gk9yeq0m9KU55vpRujhX4kgA33GlOveTAcZqEF99qDHMYnFxZpsC%2FGNBo%2Fpk44pq7RmR8FlLrVrz13jVUXPqBh8wAfI2FyuJ1Mkhwhct%2FE6jG0S3r7G8%2B1XIUGUlzVe9drZ%2BQpphh9HYN0MyN5t4IRzw6x9aNj%2FUJEzHIZHkh7AwP9bw88nffVwH4bEcJ%2F9Qd2DYvBlTDusO0vF5SKZzqCdVAkcqcWpO02hK9lh5aRe4yGD6KrdOQnrAuGX1wu9Q43aQAlyG658KKsUe6pTXXLZ%2BcqxgZafppK970NDGYdnql2DfNDaWMbduyY7OGgO4loK%2Ff5fSsyhRQU9cHMyYoW0JrdRrPeizRckzhzxwdLe3zl7IpcaKZQGXr7iKESOZask0wDW4JB9D4ePwztpRCfvMejhec3Xx%2FvDP2rM0k1zhXBo9cDfCt3ZAKBfKLRR7flHYZ8BJVPmi3kuSB7rXp9uuOh1hbofKd3C6bc%2BMvMAeTYc7YWOP%2FpgKyRBWvyjyJx%2FnMJTPh8QGOqUByKgwzInNowIc6pOCJX62yI0mZW9P%2B81JZeuBKXzk8it2J%2BKvoXn49yGJ63dA4T2tA17uwDjwVIHv3XUlw0JQA8gfHuDiMxXl%2Fn9FSmvwfuUmznhs6lNGfejpzAV56h%2BZtLAdwZwNfapz9HlU4zvx%2BA7tzHp0AbZrPgPsUat1aD%2F1Ak8z%2F3G3sj%2BLVxyK2jiYuyeo%2FAz%2F6Oo1Saufm7hv%2F53FIt1u&X-Amz-Signature=631a5249b1d5b52adc0e8ed728541d5fde7974aa55911d3b9d6641f02464f8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=IoaPxcSHwEM&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=9)

> 🔥 **스크립트에서 머터리얼 불러올땐 그냥 GetComponent만 하면 안된다 MeshRenderer를 불러와서 material을 따로 불러와야함**

> 🔥 **죽고나서 피격판정 안받게 설정**



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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f362ff2b-c9ab-47ce-b1c1-0e15737a9dea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHXZ45Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDk6%2F%2FSFe9fN2H8DHst6z%2B2l54Q5AXflsym2Sx87XhKIgIgeDCufaD0gg0CMoLB6XnbYJrN9kwytTu8sgLtCnJfz5Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOefCpsakDJLtmZsoSrcA%2FTNasxkR1PpKqRA%2BnEAMSV88OQoVXKuaveJllMGaQ38swcBX38uQqPKMykXLzYGpR%2B7ppziu%2BCJqXzqQNN1BdbjkPEgsCkCpv8y9wLvsC4dfd9wVpfe9YQ%2FiW%2FB0Fv6Ax3jzLNmFnH0G02zSVc89wwOGiinY5BqadN0gLZW0ber4zylKAE%2FtviZIpb1zuRRXYUTkGdq%2FzaKtcAo5RbWlNWri%2FhODuqJ16HjoNB7n3QkoIz6Gep0IbEFe14ybdyu%2FNC6ahoOzCVY1suJefpyVE8lH24P3RL43y2Jpo2ijKNy9MjVVDRUjfFM7aHSch1qUxETzzq7uvuJtYyS8Yc6S%2BgTZEGkGSg3kHHvHPXNIdJeVzqdDpP2hSS8H8aCjnEwO%2BkWF6uya95khJHn94lgd9ueGVidXsI2dsMpnqDoIgAukfvduoCf5kYBDR8dDxTfsicw%2BX%2BhYu%2FN%2FR8dx6iajRSTMtMZ9JlsRyAllDBRsOjZoFKXUeSM8GNcJYBSAh%2B7wNO5B1XnAdGuBUkCEl8yN1xiBBmSvpTgWHCD7vVcD%2BHJ2hVDewG%2Fw1CCpcJ9bsCvl6OE38PchY3VjE8KPnjTJA8d44P9bBUM%2Bg2OWsN5%2BsZIjV%2FWaZQTzF3CpZLxMJX2h8QGOqUBWkpOV70%2B%2B0qoJHAZ%2BygwQ5yMRWmuGMeDAUMN0C3mfU4bV2fVg0MCFHfYYLQrtuJTDge1vCHgEWYF9VFABEYL0rE6Sk1mA1sF78BfFnghAaQorWHyV8eXDjXvaLpDSVIPdClyKiN8BBzFm7TYWbd8pO4ndWR3uq2hMeA8A97LmlP5DdvHeLsa56cvt%2BgFJ5od1YJX01gEBgKnchdqIPow2BmaJP9U&X-Amz-Signature=a1456f4800bfc75ca076726f21e7b16126eff161f2551a0edc4e785214d34540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=IoaPxcSHwEM&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=9)

> 🔥 **스크립트에서 머터리얼 불러올땐 그냥 GetComponent만 하면 안된다 MeshRenderer를 불러와서 material을 따로 불러와야함**
> ```c#
> //Enemy.cs
>
> Material mat;
>
> mat = GetComponent<MeshRenderer>().material;
> ```
>
>

> 🔥 **죽고나서 피격판정 안받게 설정**
> ```c#
> //내방법
> //Enemy.cs
>
> IEnumerator OnDamage()
>     {
>         mat.color = Color.red;
>         yield return new WaitForSeconds(0.1f);
>
>         if(curHealth > 0)
>         {
>             mat.color = Color.white;
>         }
>         else
>         {
>             mat.color = Color.gray;
>             **yield return new WaitForSeconds(1.5f);
>             rigid.isKinematic = true; //외부 물리효과에 의해서 움직일 수 없게 변경
>             boxCollider.enabled = false;**
>             Destroy(gameObject, 1);
>         }
>     }
> ```
>
> ```c#
> //강의에서 방법
> //Enemy.cs
>
> IEnumerator OnDamage()
>     {
>         mat.color = Color.red;
>         yield return new WaitForSeconds(0.1f);
>
>         if(curHealth > 0)
>         {
>             mat.color = Color.white;
>         }
>         else
>         {
>             mat.color = Color.gray;
>             **gameObject.layer = 14;**
>             Destroy(gameObject, 1);
>         }
>     }
> ```
>
> ```c#
> //합친방법
> //Enemy.cs
>
> IEnumerator OnDamage()
>     {
>         mat.color = Color.red;
>         yield return new WaitForSeconds(0.1f);
>
>         if(curHealth > 0)
>         {
>             mat.color = Color.white;
>         }
>         else
>         {
>             mat.color = Color.gray;
>             **gameObject.layer = 14;
>             yield return new WaitForSeconds(1.0f);
>             boxCollider.enabled = false;**
>             Destroy(gameObject, 1);
>         }
>     }
> ```
>
>



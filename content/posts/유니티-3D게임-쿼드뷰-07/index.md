---
title: "유니티 3D게임 쿼드뷰 07"
date: 2023-02-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "피격받을 몬스터를 생성하고, 몬스터 사망 후 피격 판정을 받지 않게 설정하는 방법에 대한 설명. 스크립트에서 머터리얼을 불러오는 방법과 피격 처리 로직을 포함한 코드 예시 제공."
notion_id: "dc3d9e44-cb15-45fd-ac6d-4766fa29a508"
notion_url: "https://www.notion.so/3D-07-dc3d9e44cb1545fdac6d4766fa29a508"
---

# 유니티 3D게임 쿼드뷰 07

> **Summary**
> 피격받을 몬스터를 생성하고, 몬스터 사망 후 피격 판정을 받지 않게 설정하는 방법에 대한 설명. 스크립트에서 머터리얼을 불러오는 방법과 피격 처리 로직을 포함한 코드 예시 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f362ff2b-c9ab-47ce-b1c1-0e15737a9dea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCPMKX4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCMGxdcJM6aTRIGP%2BduEtSwdR2r2n2x4j7nNgCDDwCzUwIhAO96Z7cfHvuuvsBqfWFjABfYyxZRES8%2BU9W5MTw6ARMpKv8DCC0QABoMNjM3NDIzMTgzODA1IgzZhWzoiG1pkrLOKaIq3APXhE49udtiNQK1Ob6a8LAbP5narzx2HsEZUl1yP4wCVfJPrBkCP%2FSaIgeuozoxjW%2BDuKJp%2BuyFHndqttWg%2BObkGbsi%2BTckbqEy%2F885csTePSd8ez2BP8LlmiHEUMzCq4lpdRuuO8xauR1oNYuu6vkJzbkvVC50XWGE3v2CJRgAekx0NQZ7UlwY%2BitR2ytBudGV4%2Ffjz52Qhli9jVvX9uEcGxeKaC9C%2FIfW2TfVZpAlUUM86Y5iAj%2F9rZdOE9VZqLJ3aBn4aB42oOUD2G6R%2B%2FqaBDtRv9m4YMfh9RHwWw%2BZ%2Bs3bP35aswsDTiEG8XZPlX71whhNUPsE%2F5iaexb9mnDB24nBuvHXjUTjFB1Gbe6rg5zJqas6UrqPc53kHnAXgN38prFCsMi88vDSja6hyy6OdetpaExbEMsOHeg5n%2FND1JhKPN%2FW36d7NHi%2F49ELC2BQrYALxwosuZXPSu25MCIOj3HKknTLex90lj52ouZClCuL5PMsVdnO%2Bym%2Fj7kwGbBl2IcSRdQ8D1Fn1V6MvA0rwvidg1fxrrfyziQflUaHnze0VQVqQ7t%2FSvfsZ4zsdCUSVMkOvpEWBXt8x%2F8s9MiOGen6JkQehbwqr%2B8qyz8lS1zVrGY5gyeUR2D5NzC6v4jEBjqkAQJYLBU4RiWVcYVPbt80%2BDvWlKZoUBIIN39RsRLCkSCo1flIxuZECH3K%2FWum3dRcq%2B1sB%2Bo37500bE6OQ4dS%2BseR%2B9rSjXXmhoKiFo6wYNa%2B9ZOAWv4cChSVtTRG%2FCw3uAfFpXmV6oV%2F3kWVtUC8TziDnMwgWPpcHXE2gdkftuHlPfzPpyQ6w0ergro7z%2BUIPRvPYt9cPq7AAnj9FDTOvhIn%2FhWb&X-Amz-Signature=14f9e47db0698691f082599eed28ea06859ae96e17ecc9ed9fea170030e7ead2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



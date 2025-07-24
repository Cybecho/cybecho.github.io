---
title: "유니티 로그라이크 10"
date: 2023-03-07T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 통해 부모를 변경하는 방법, 무기와 총알의 초기화 및 배치 방법을 설명합니다. 또한, 공전하는 무기를 생성하고 레벨업에 따라 무기의 개수를 늘리는 기능을 구현하는 코드 예시를 제공합니다."
notion_id: "4702c5ac-1b38-49c8-b8e3-871a36a9f438"
notion_url: "https://www.notion.so/10-4702c5ac1b3849c8b8e3871a36a9f438"
---

# 유니티 로그라이크 10

> **Summary**
> 유니티 로그라이크 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 통해 부모를 변경하는 방법, 무기와 총알의 초기화 및 배치 방법을 설명합니다. 또한, 공전하는 무기를 생성하고 레벨업에 따라 무기의 개수를 늘리는 기능을 구현하는 코드 예시를 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f2fdfc4-74ca-4c8c-9f25-26e7785c3671/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXB7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC7ZjzdlOTD7wH0JzzT9d3YDvb3s0EDqVS%2B1UzAZ0I7jQIgLdX3rvzuWTtqlbW0E310q%2FMjMnuahK6dl%2FfffpK3kykq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNHl9YNTdLCN0LsL0SrcA%2F6i%2Fql%2BvufMuYVL5YGSQmqx4Z88CMpxB3%2BRL%2FSmngNdRuJBTt6%2FZK9HQoMJ2Xakdr6RU%2FCiifBu%2F72%2FOq22NU6F8ZtdSKPW9t05cnIa3I6t5bstct8d2SMidJx57vSPXRRgzs03QjE0VhFqVGWEm0HoSJ3WQZ3QLERrXxcERQVQGxYroVSe3Z%2FLaYlGaEkeLcVrEjgYJwAZggk9LWosP%2BQu35ZraLTDH%2FGsSB0hYsHqvP7sthyGXSz5HnU5NaVCxgrNSVQF1iLIGX7huNlv%2FpizJxkm6QcxWKRGmPHx9%2FwdIzMFYiMmqTsXKGJdDh6IgVygWu7bK6%2BtjHyNQgv9aFKayBklggBSm%2FYlguFAn8z%2FqS%2B1XolNvt74uZjMs%2Bob9sIGmZvhNvsVZ4TdFfdRjUPwyyXZk%2B0BjKaJhHLo1u8%2FiZPiWR7DtXROCCeftjvvupYeVhLKvSxIwwUxxZBAuRusuJ3RgHJI1nGtnILN4sy9msTLNdX%2Bx4mjeTVv%2BK4d3Bc8Z7TySm74r5qbnIB7MdlJgI62j89MJbMCXynovmiIjDj1jPSkHhTTQjVi%2FWvXGge0PEXpVpwQsrRlUfZrzlevXY5HwkP277Jb3qEfE%2Fhk0I4aC8HFjd6izB6fMN2%2FiMQGOqUBnSyh0cxzJwI%2BY31UQ67LVt2BViNuJ%2B2z0metsNwsDZQFVTeLXtCSVH4%2FUQBXZXHBXLIiYvfweI7F6fAT3DF2kz9lzKQ0qk4KObI7MAgubwlD3u3X%2Bhhq3%2BMydmqCR8obVCYTEGOwXmF1%2F1BPt7Cx%2FrVq%2FT%2BKQSZu7dHm9I%2BFdE9ummmSSYRf3PdgEnT0o3j079As%2ForaIwkOtEnfBoCjdZv4XCKL&X-Amz-Signature=241eba0d9152022d241fd8c263fd288178cfb3525e124e321ca10f801ff4060c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **풀 매니저에 근접무기를 등록하여 무기를 배치해볼까요**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/818969d4-8dc2-49fd-b622-5def35f79628/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544WZXF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHbbi6n%2BsmIi8XTEda6BSZQqMeMDrYsxXdN9yXixj2YRAiEA70JRSVnWKl120cLxXoVHHboLUkxQkjGIck5HanPvCAwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC7uzM3cHt2WfjCHYircA7MxAcWbQO%2FrUCyGap0x35k0C83YhrJwnvrDgQtGopQz2NelMBUgYHJ0Xv5pTFG6kC06MBE5J2UkemAXWzyg8FGDGlZIvmiZUhknf9f%2FGgJ9K3JPNH5uLdlocoaQk9QPGMG12iOr%2BEPIy2RgNUP0eeGrKx2PJcorGNJM0mVhx6PBTpc5HGdHLVyjMfVuNpgMujJYZBFsCIHYPWo8HC1pk6ICecz0lcPUGTmq%2FNQOuNWqQ3%2BUhc4dJZnH55%2FyonnnW5sGzJQ%2Ffc1d3O6Hx5cx7mMB4xiLSKkaNlBTRcbwZYHRypxUwLL%2F7TdIfp0rm47iE5gW2eouZHGv3HTPs1jC9FE8J7Iz%2FYHsATFDAFYtdDr%2F2vlMFdkmJlK%2BMBD0RLqUqXQ2KsKJEgkurzjLEBoew0Ih%2FYfRcv9yN7GSljTpThmWRgliOZF98EnWxG6Qoy7W%2B%2FbohO9Mts0qUQ7WZtLw%2FCcWjmeHoJj1hV3brzc0RYCG%2BmAXhvP1Fs1Idl5nU322aCPqMbYyrSX7TKICjiQUfV5TAqUmj15uOkX1KLxgiNALQ%2FwR853DKnQT5EWO3jjWwSS2piM4pj5GePTfAQMroAAgbI4GERfWGsBiX7cAnoWYlnGqKInx8q5MD6eCMNq%2FiMQGOqUBtRqWwI9MHFXnZQlEPWmdYvzn7mxPQOUM%2BpkcUZPhW7n1E7zLbzDmq1btVghN9G2Rgkbgw5PlyQgLX4EOk3Vy1A9zc%2BG0Y7PcLp0KC9DxIxSu8OdQ5saHr8WgSrGLX3V4%2Bq0OF9kz0BdNo%2B5vSODgB4VnKv8sCHPFjVU3fxeaJwfmNH0oP2v0ZhXJMxTBqygHsZ3F7TtpElKRwOqFlS6sg2YlRs1N&X-Amz-Signature=16776274fd94f3117daa4d025dca77dc102e75dd8b992fe659a9ca5d08c5f0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **Init 을 쓰는 이유는 생성한 변수를 초기화할떄 이용합니다**
> ```c#
> //Bullet.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Bullet : MonoBehaviour
> {
>     public float damage;
>     public int per;
>
>     //Initialize(초기화) 함수
>     public void Init(float damage, int per)
>     {
>         //this는 곧 Bullet.cs
>         //매개변수의 damage와 this.damage 는 엄연히 다른 변수
>         this.damage = damage;
>         this.per = per;
>     }
> }
> ```
>
>

> 🔥 **그리고 Weapon에서 Bullet을 불러와 관통횟수를 무제한으로 만들어볼까요**
>
> 부모를 직접 변경하는 **parent **함수도 공부해봐요
>
> ```c#
> //Weapon.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> //poolmanager에서 받아온 bullet을 플레이어 주변을 공전하는 형태로 만들어주는 스크립트
> public class Weapon : MonoBehaviour
> {
>     public int id; //이 무기는 몇번째 ID입니까?
>     public int prefabId; //PoolManger의 몇번째 프리팹ID입니까?
>     public float damage;
>     public int count; //공전하는 근접무기를 몇개나 배치할겁니까?
>     public float speed;
>
>     void Start() 
>     {
>         Init();
>     }
>
>     void Update()
>     {
>
>     }
>
>     //초기화방식이 ID에 따라 다르다
>     public void Init()
>     {
>         switch (id)
>         {
>             case 0:
>             speed = -150;
>             Batch();
>
>                 break;
>             default:
>                 break;
>         }
>     }
>
>     **//공전하는 삽을 플레이어 주변을 공전하는 함수
>     void Batch()
>     {
>         for (int index = 0; index <count; index++)
>         {
>             //게임매니저에 등록해둔 prefab을 가져오는과정
>             //Get(1) 을 등록해도 무기를 가져오겠지만 그러면 하드코딩이라 변수를 따로 설정한거임
>             Transform bullet = GameManager.instance.pool.Get(prefabId).transform;
>             //parent 속성을 통해 부모를 변경 가능하다
>             bullet.parent = transform;
>             //Bullet.cs.의 데미지, 관통횟수인데 -1로두면 무한으로 관통시키겠다
>             bullet.GetComponent<Bullet>().Init(damage, -1);
>         }
>     }**
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/42f6c78e-3ade-4406-8ec1-761eec58cace/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEL2HN52%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIE6mQA5fW4X%2BxRa9aJ8eiIyGUOpgx1JR%2FH%2FrsOqA%2FKLqAiAwdAYYYT4X3fATeUyhXuM5kC9dQ%2FX04Y954Sx5qQMyjSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2BhYWLac1%2BgMTLXjKtwDVxKOrp%2FWaFkhC28ht%2BRQMB2tcTjhtWiiX86HVwtZrcS2bEMs5rZmXNFpt%2F3BqH8tfnPbhbgWzHwwb%2BcMiE0xfQZTgF69elBJgtOD8hB9TN3Y21c6p2zma%2BAEPYtmiAx8rOJuXsqN3%2B9a1vm6JNCPPuwur9C6YnMz2L66lBRw0ld%2B28TjQSr%2BaCtcnzQu1NG0O18fXJii6LcvWe24n%2F5RsQDITiESmti4YjvSqxNX%2FeM%2FaUfyTnLMqEkE1a6Au3EvLQyEg70kfAqKd0te7SxyrApZOVtaHgKnah1IqolN9t3qb%2Bkl1It%2Bidu88JrOl8TKpGA8b2wU4%2Fwzo1mtPxFMpDhzR7QJb%2FSG7Ek8Cxm4voOOrKJ7q6q4E9jDWNiFDB6XsBSp7u%2BROnAvGa3ZDGMROwSjhpNqRqFz7J8ENXKMWU6xxDgOWkUytIkchTgoJ703W8mUtYJn3qI%2FD5Mh1Hr%2BbZSTmiUqRY2Sm7cel1nlJkVfSP0cMPSnzkigvhM72MtIVvM4YnEILWNPcXOQ1q4%2FyETbEXl02QJc4WoEgWvfT%2Bit8vLpd3BgS%2Bl%2Bder%2FKbFslMFJgTApYZCi%2BkreLmvc7iZhKnSopFiYqqNuInd518V%2FWx4n8T0QaDP7YkAwv7%2BIxAY6pgHh8%2Bv%2FLsTYs8udN%2FzfjeNU9InYicpsWMA5hnc7M3m%2FbRr8q%2FDd%2BnVF2BURM7cJ%2B%2BMIbRWYTnJK2KbO6EOTQLfZAoaUkKBE1Lu0WD3x5SaKQX9P6wyiEqSGHv9jF%2BxB3EZEu6OLZvjuKU%2BRrK4fwGUtPgRACUwKH6nBPG8AAEtj0U0D%2Bvp3G%2BtTFmyCx4mwhSL1xRfZz9qJ9Glq2WPBaBzx7jRrkbfy&X-Amz-Signature=06fb7e91360ed2baacb57e6382313cf6f98b34082236408f44fb5b7c28e60d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/114dff55-d35e-4b90-85d9-92d9d3bb3ef5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEL2HN52%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIE6mQA5fW4X%2BxRa9aJ8eiIyGUOpgx1JR%2FH%2FrsOqA%2FKLqAiAwdAYYYT4X3fATeUyhXuM5kC9dQ%2FX04Y954Sx5qQMyjSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2BhYWLac1%2BgMTLXjKtwDVxKOrp%2FWaFkhC28ht%2BRQMB2tcTjhtWiiX86HVwtZrcS2bEMs5rZmXNFpt%2F3BqH8tfnPbhbgWzHwwb%2BcMiE0xfQZTgF69elBJgtOD8hB9TN3Y21c6p2zma%2BAEPYtmiAx8rOJuXsqN3%2B9a1vm6JNCPPuwur9C6YnMz2L66lBRw0ld%2B28TjQSr%2BaCtcnzQu1NG0O18fXJii6LcvWe24n%2F5RsQDITiESmti4YjvSqxNX%2FeM%2FaUfyTnLMqEkE1a6Au3EvLQyEg70kfAqKd0te7SxyrApZOVtaHgKnah1IqolN9t3qb%2Bkl1It%2Bidu88JrOl8TKpGA8b2wU4%2Fwzo1mtPxFMpDhzR7QJb%2FSG7Ek8Cxm4voOOrKJ7q6q4E9jDWNiFDB6XsBSp7u%2BROnAvGa3ZDGMROwSjhpNqRqFz7J8ENXKMWU6xxDgOWkUytIkchTgoJ703W8mUtYJn3qI%2FD5Mh1Hr%2BbZSTmiUqRY2Sm7cel1nlJkVfSP0cMPSnzkigvhM72MtIVvM4YnEILWNPcXOQ1q4%2FyETbEXl02QJc4WoEgWvfT%2Bit8vLpd3BgS%2Bl%2Bder%2FKbFslMFJgTApYZCi%2BkreLmvc7iZhKnSopFiYqqNuInd518V%2FWx4n8T0QaDP7YkAwv7%2BIxAY6pgHh8%2Bv%2FLsTYs8udN%2FzfjeNU9InYicpsWMA5hnc7M3m%2FbRr8q%2FDd%2BnVF2BURM7cJ%2B%2BMIbRWYTnJK2KbO6EOTQLfZAoaUkKBE1Lu0WD3x5SaKQX9P6wyiEqSGHv9jF%2BxB3EZEu6OLZvjuKU%2BRrK4fwGUtPgRACUwKH6nBPG8AAEtj0U0D%2Bvp3G%2BtTFmyCx4mwhSL1xRfZz9qJ9Glq2WPBaBzx7jRrkbfy&X-Amz-Signature=e95fe1c513bea031f6be28874692e1face80b08d08f62ebb0db08595284ed81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **하지만 이렇게 하드코딩처럼 프리팹을 하나하나 설정하기엔 프로그래머가 아니죠, 코드로 구현해봅시다**
> 360도에서 count를 나눠서 오브젝트를 이동시킵니다
>
> ```c#
> //Weapon.cs
>
> //공전하는 삽을 플레이어 주변을 공전하는 함수
>     void Batch()
>     {
>         for (int index = 0; index <count; index++)
>         {
>             //게임매니저에 등록해둔 prefab을 가져오는과정
>             //Get(1) 을 등록해도 무기를 가져오겠지만 그러면 하드코딩이라 변수를 따로 설정한거임
>             Transform bullet = GameManager.instance.pool.Get(prefabId).transform;
>             //parent 속성을 통해 부모를 변경 가능하다
>             bullet.parent = transform;
>             **//만약 count가 10개라면 360도를 10으로 나눈값이 되겠지
>             Vector3 rotVec = Vector3.forward * 360 * index / count;**
>             bullet.Rotate(rotVec);
>             //Translate 함수로 자신의 위쪽으로 이동합니다
>             //Bullet을 회전시킬때 Local방향을 이용한건 bullet.up때 이미 사용함
>             //그러니 bullet을 이동시킬때는 World방향 기준으로 이동시킵니다
>             bullet.Translate(bullet.up * 1.5f, Space.World);
>
>             //Bullet.cs.의 데미지, 관통횟수인데 -1로두면 무한으로 관통시키겠다
>             bullet.GetComponent<Bullet>().Init(damage, -1);
>         }
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/22222d79-963b-4d64-93eb-99f170d34c33/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5YMINO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCU1AWfzN4SJZB3kDhRjT%2Bk1vAw4Cz5Cbfiy8bQghhQrQIgTDg5273j8TqTOqMM%2FwfF14EmFIiU2WeQdVBM%2BqlGs7Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBCGVnNL6qLsMnl0KSrcA5jNrkHTqMV24So9Cpn91VGkj%2FOYIB%2BLNcufpOYsXMUYuPwJOnw0tQ%2FI8cBkxh0Q7KETz9EOLtvXiE1gwNohCih8ZdNm64U4sb5NH7LBwWwcN9Ys2CtJR%2BtXUDePkdeGVhgx5W59xIyYXvYsUHZ1N7K2kftCtUEamHg%2BkSekIdKIomy%2BV9rhsx34b0LmhRzXeH06queUf%2BEBvylmd%2B9i5Fd1Efew7aHLEmiuPedjaO5aK1FwDW%2FY5VEGu%2BWKHyjigdDnUC45KFV3l%2BdFJ1VTQGsVKsjo2VcbtB9cuQFavqBewLBSu5j9LYqFBIY%2BNbSQDQ5zJy69z1yifRVN5yBQvi034WSns4tN2pA89Z%2Bc6Mi1MPU0e94qNURjR%2B1N5X3t6mO%2Bi9ZM1qB0UqltwBzaIscIPq%2FDkRRBkHVAWzSs4Ker9b1O%2BVkQDiLCcnhmcsTP008Kh96lU0xM6a1K5kWVK6h7UBbeLxb1PCP%2F363cVcLPTCrf%2FhYcBlQ0WaCzIIW%2BEt3AWYyEj26iE3I5bPbg4nPgTAdrXwLIiNbzyXW9gwIDY3YU%2BB5aJmPGHIhZsP5HCkqigznvBDlxR3RKKgtG%2Bbj9mtoXitnlUvI41FlnXZrdq%2BlCBeFVNmKA4uJ8MNW%2FiMQGOqUBZq8nHJV7I6wPG%2BRV5FfXZ%2BSoSQrvY7vqbSwOIUaGlefem6ESPhlhYv2E98%2BQSZ9i6HAVgstg%2Fpfxqw5Q6XOXLhZHOTpxWCbOJgj4BJFLKLIKa6U0sLKQDjfTHND9Yy75KyvjL3hsUYfc0ZL6DAtpsKJ2TEhmNDvnGE5uhYaMtIgjEvgsfG2c9Hb%2Ft5Na3FHVyRnJOr%2F7SFgWe18k8n8BDpskWh6u&X-Amz-Signature=7c39bbc6f9e7c6bdb12093ecdcbb8578158269950aa92d50edec59711f628c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **이제 스킬의 레벨에따라 공전하는 무기의 개수가 늘어나도록 함수를 제작해봅시다**
> ```c#
> //Weapon.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> //poolmanager에서 받아온 bullet을 플레이어 주변을 공전하는 형태로 만들어주는 스크립트
> public class Weapon : MonoBehaviour
> {
>     public int id; //이 무기는 몇번째 ID입니까?
>     public int prefabId; //PoolManger의 몇번째 프리팹ID입니까?
>     public float damage;
>     public int count; //공전하는 근접무기를 몇개나 배치할겁니까?
>     public float speed;
>
>     void Start() 
>     {
>         Init();
>     }
>
>     void Update()
>     {
>         switch (id)
>         {
>             case 0:
>                 transform.Rotate(Vector3.back * speed * Time.deltaTime);
>                 break;
>             default:
>                 break;
>         }
>
>         if (Input.GetButtonDown("Jump"))
>             levelUp(20,5);
>     }
>
>     //초기화방식이 ID에 따라 다르다
>     public void Init()
>     {
>         switch (id)
>         {
>             case 0:
>             speed = -150;
>             Batch();
>
>                 break;
>             default:
>                 break;
>         }
>     }
>     **//레벨업하면 damage와 count(개수)가 늘어나도록
>     public void levelUp(float damage, int count)
>     {
>         this.damage = damage;
>         this.count += count;
>
>         if (id == 0)
>             Batch();
>     }**
>
>     //공전하는 삽을 플레이어 주변을 공전하는 함수
>     void Batch()
>     {
>         for (int index = 0; index <count; index++)
>         {
>             Transform bullet;
>
>             **//기존 오브젝트를 먼저 활용하고 모자란것은 풀링에서 가져오는 시스템
>             if (index < transform.childCount)
>             {
>                 //현재 내가 가지고있는 인덱스를 가져와서 쓸것이다
>                 bullet = transform.GetChild(index);
>             }
>             else
>             {
>                 //게임매니저에 등록해둔 prefab을 가져오는과정
>                 //Get(1) 을 등록해도 무기를 가져오겠지만 그러면 하드코딩이라 변수를 따로 설정한거임
>                 bullet = GameManager.instance.pool.Get(prefabId).transform;
>             }**
>             //parent 속성을 통해 부모를 변경 가능하다
>             bullet.parent = transform;
>
>             bullet.localPosition = Vector3.zero;
>             bullet.localRotation = Quaternion.identity; //Quaternion의 zero값은 identity
>
>             //만약 count가 10개라면 360도를 10으로 나눈값이 되겠지
>             Vector3 rotVec = Vector3.forward * 360 * index / count;
>             bullet.Rotate(rotVec);
>             //Translate 함수로 자신의 위쪽으로 이동합니다
>             //Bullet을 회전시킬때 Local방향을 이용한건 bullet.up때 이미 사용함
>             //그러니 bullet을 이동시킬때는 World방향 기준으로 이동시킵니다
>             bullet.Translate(bullet.up * 1.5f, Space.World);
>
>             //Bullet.cs.의 데미지, 관통횟수인데 -1로두면 무한으로 관통시키겠다
>             bullet.GetComponent<Bullet>().Init(damage, -1);
>         }
>     }
> }
> ```
>
>


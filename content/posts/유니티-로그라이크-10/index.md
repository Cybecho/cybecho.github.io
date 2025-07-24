---
title: "유니티 로그라이크 10"
date: 2023-03-07T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 클론 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 사용하여 부모를 변경하는 방법, 근접무기를 등록하고 배치하는 방법, 그리고 Bullet과 Weapon 클래스의 초기화 및 기능 구현에 대해 설명합니다. 또한, 스킬 레벨에 따라 공전하는 무기의 개수를 늘리는 방법도 다룹니다."
notion_id: "4702c5ac-1b38-49c8-b8e3-871a36a9f438"
notion_url: "https://www.notion.so/10-4702c5ac1b3849c8b8e3871a36a9f438"
---

# 유니티 로그라이크 10

> **Summary**
> 유니티 로그라이크 클론 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 사용하여 부모를 변경하는 방법, 근접무기를 등록하고 배치하는 방법, 그리고 Bullet과 Weapon 클래스의 초기화 및 기능 구현에 대해 설명합니다. 또한, 스킬 레벨에 따라 공전하는 무기의 개수를 늘리는 방법도 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f2fdfc4-74ca-4c8c-9f25-26e7785c3671/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6R3UEM3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzb%2FB4qMjsb5jpqu4tmDBgc5NAnmpL0zT9jvs9Vg2UNwIgIulR5OHHG9m41BRDERZ9KjB5EXkHvz%2FHGu%2BnYu8c1Rwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPVMkt78dPAH9q4ELCrcAwztY7S%2FuN0ZZAifD549nX6ImA8Vu1XrzP2ZAJ%2FYlYPQK8ToRzCxpisW70AfUeY%2FH%2BJjCwyW67ROfkcwEomgYYTpJ8JgqwM8nTxduTeavnpMQavNQQ6hQe3iKX0gluyYP5nw4C%2FUPXwHWbWNq0kdIFVan7Vlf8IdLd1c2GHJp3sMInO%2BBPjkerkfaZU6VY6Snvxo4X3nBy%2BYZyw%2Bi22Z4WS%2FBdUzBnSz2M6c%2BhToV5USNp3MXYs7uiccpyUbu1Shpn5LHgvkugY06XOFl6QZmovVugc115kj1C8InL7sxweMfBCtpi7D%2FjUx%2FiL5H9AlSIUYmyQdd0m2vHGfuX1xgcqi47B0M1ZcYtHO1%2FTKQd4TUPj71GMxDYMwRD6sna%2BocjRQgbyvr2j315CHb3Ck8H%2BOnQ2TiM927HELdd8iRPgnpXlXrIqVarmaeLpwPA%2BMi2daFMJFfK2HdYsC%2FKCLbLE9Fu6LwrU8vuD0W8c29LcYVSud1zMAUfNuf6xhmF5RTAjdfowvXs317lCtPTXXTF6P2D8V023%2F9cgmJBltTrF3f%2B2ox%2B8e%2FdOD3g0q3QJ3YAW0F8YqT%2FVwOPNZy5oDXQEN13QocgxtcN5iS%2Fd1JXiFmmeeKNNkD3HeRyJQMJL1h8QGOqUBe5FKvsdjnTGsf54IhO1UOz1k%2BgKy3GTlGddKqxsTxaXUakefMQ6fnGVbWNDZDcWWY0ucCKDe1wzCFtdwF%2FXK11nSQQgeh9WvuBpnSHSSb4GUE1qBnrQiO0Kg5CstL7g2nBVx%2BqUgtGa0vWpwBq8e5zux5UoUl%2FeQ7ZAvn7sw0bUzJRioK%2FQnLUBEpSKcRhoBlkvv%2FW%2F6%2BQ3R0495ix88cKt8ZdW6&X-Amz-Signature=f28efc00c30f8340b9c856b8ed031e4a5f869dd7e429c21bd740087dfaa8838c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **풀 매니저에 근접무기를 등록하여 무기를 배치해볼까요**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/818969d4-8dc2-49fd-b622-5def35f79628/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=288ebe201f531435a2b0ed7ff9dfffa9344df18cafaa38cd93709a6ccbeecb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/42f6c78e-3ade-4406-8ec1-761eec58cace/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLSD5BUB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDhKZiSTBQ411xCczLhH5QF73h2ULjlkqQz5F0IyzOh2wIgNE5X4auMzrGPN70NoTfSNSVgQ3WDifvPyX%2FCHqjaC1Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHUzRFHKcN8icM0IcCrcA89HIPshtzULzRgwQX9sJw%2FClkXNXnN3zpCQhl33t5%2FePM5vJvMD3L8XpVfM6g%2Fm7uHUh8tFL6lrJnWNOvE5U0X37CE3Eq3CafXHLLaiD3pkoYyS%2FjtCXiHcJsYdhTyHuGh32w9nDmukbsTJyK5MwsIlBk7X6vLcWjaaEmT3%2Brmp2WB80uG32QH%2FYTSnR6dmC6ZdDM%2Bg3%2BHua3unk6rlE4pkEcAXWyeVdpXPV3HI3mjB2hnCJz5UAxK1rEoGsJnOZHNoiVIkmPbtDnPKDzAnkUcvUDvDZvWoIb9d30xu9h0ORwisUoEOq%2Br6Ot3OPHMMQM%2Bs%2FD4qX8e3bNZ%2FsPkK6jC3cRpuSlMKNNKHlqygQ0xZQh1PbfWT85j5A3YsMRB2rLVNNrnMOUlhYqRFyfwSh5cGTgwB%2BcVMMW%2BY8W6d%2BpsdbotUVFHTD9kLEO2Wram0C5mmGkIiEt6cx862vTwXaCFy9v9yNScs3LBApnDgElJQ5C9e0Gi3bhDP8QaVnaTenB79x2a8hsPT%2FNFwm4QbKNNR9yH8tiNPxBPLtiy4u44IWeeEzCUgzIz7JI%2Bscq7A%2Fl6UeeUTUcrVmUukELAsNegsBb2IDxLcVHGUzitl5wo%2B18KqAvLoyuDvZ7eUMIH2h8QGOqUBebjCClm7uXxXVW6xYK9z4ZsVt%2BJyorbuLrHn9yc%2FYja5TciD%2Bcu5Co%2FVkKiaSdhGVu5lS06guP4mh1v%2FOibRzBo5fSf6xa6oqrzD5d%2F0%2BsCurj0eRZFUfipWpQn50NFF5MY5DlJdZP2sYF2KFZ3Zkp285wlui7KRnHxhPB7bYLMUGzYwVxduaWnEWD0jz%2B1NB7MZ7zQVmW72T6SR9x%2BW91R%2BwbfJ&X-Amz-Signature=7690af02c949a6c8558218cd2d2c1781acaf80a89aeca7fc7087effeb74b9de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/114dff55-d35e-4b90-85d9-92d9d3bb3ef5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLSD5BUB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDhKZiSTBQ411xCczLhH5QF73h2ULjlkqQz5F0IyzOh2wIgNE5X4auMzrGPN70NoTfSNSVgQ3WDifvPyX%2FCHqjaC1Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHUzRFHKcN8icM0IcCrcA89HIPshtzULzRgwQX9sJw%2FClkXNXnN3zpCQhl33t5%2FePM5vJvMD3L8XpVfM6g%2Fm7uHUh8tFL6lrJnWNOvE5U0X37CE3Eq3CafXHLLaiD3pkoYyS%2FjtCXiHcJsYdhTyHuGh32w9nDmukbsTJyK5MwsIlBk7X6vLcWjaaEmT3%2Brmp2WB80uG32QH%2FYTSnR6dmC6ZdDM%2Bg3%2BHua3unk6rlE4pkEcAXWyeVdpXPV3HI3mjB2hnCJz5UAxK1rEoGsJnOZHNoiVIkmPbtDnPKDzAnkUcvUDvDZvWoIb9d30xu9h0ORwisUoEOq%2Br6Ot3OPHMMQM%2Bs%2FD4qX8e3bNZ%2FsPkK6jC3cRpuSlMKNNKHlqygQ0xZQh1PbfWT85j5A3YsMRB2rLVNNrnMOUlhYqRFyfwSh5cGTgwB%2BcVMMW%2BY8W6d%2BpsdbotUVFHTD9kLEO2Wram0C5mmGkIiEt6cx862vTwXaCFy9v9yNScs3LBApnDgElJQ5C9e0Gi3bhDP8QaVnaTenB79x2a8hsPT%2FNFwm4QbKNNR9yH8tiNPxBPLtiy4u44IWeeEzCUgzIz7JI%2Bscq7A%2Fl6UeeUTUcrVmUukELAsNegsBb2IDxLcVHGUzitl5wo%2B18KqAvLoyuDvZ7eUMIH2h8QGOqUBebjCClm7uXxXVW6xYK9z4ZsVt%2BJyorbuLrHn9yc%2FYja5TciD%2Bcu5Co%2FVkKiaSdhGVu5lS06guP4mh1v%2FOibRzBo5fSf6xa6oqrzD5d%2F0%2BsCurj0eRZFUfipWpQn50NFF5MY5DlJdZP2sYF2KFZ3Zkp285wlui7KRnHxhPB7bYLMUGzYwVxduaWnEWD0jz%2B1NB7MZ7zQVmW72T6SR9x%2BW91R%2BwbfJ&X-Amz-Signature=bb8992d39548140a6c59270d18415b1345d27b40b0b0f1011146669c6544b17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/22222d79-963b-4d64-93eb-99f170d34c33/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOSPUD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDVlsRt5zJAbei5AEoyN7M%2F%2Ft%2BpKVzvIEoO1C6eqreV8AiEAqNZVySIIKHCYvB2JjWX8BIzDxGZnm8vOzNLzc684U%2Bwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLhP0rrqJfoN7Kip0ircAxMO%2B3YjCbOww6v%2FGgPGHQvd8MUcQSzZf%2FFtyGwOnZF9HRpQPxyau%2BIXm458P7Tle3iGz1D6GiSeFTVlV12zOA6KGHkfZarIqjcu8YBRf4kwK9bh9gIp%2BY3khqWAvZj3q8jpqcZUy9VQRyqEDD2yBQG%2Fdq%2Bm65zVi0a49prZhk4SPOFlDF59%2FyVh36S3lgid4imkJSKqEY%2F%2B%2F2IZixTKHJaMXdkjuAI4oKxTlq7s5OVUGjBRxpvHyzjQvSleyVU3zyY%2FHV%2Fmvuc8%2FajGed%2F6UHQwg58vFqQ%2FmGSbYrOIia86DHGK39NZqnH%2FTfpfza4xHxS0WLDMBtYzoeHmPMM4B6IbcHjW%2FQZT4uaEVI%2BEIAu5VBQz44Sjk8UARQ1ygBpZEqJXKlkE%2Bm5yGyW%2Fg219cqaTKXUsUkKqN3E6TE222pkSgXYrW0GuuKhLNvvnp06oRZRwhvprhUuw4EgGEustQMpOGFifc%2FtvXmtQxD1TsutBJ1v6pSK0pi6hu3xTSnvQn8P5AAzIVpmoFpLxkr7YDM5tfbTY5oW%2BaxKXtSpO27qZ3a5mG%2Faer0ezg5pf8ObkTLMhPMXR6P5i0y3onCUkwPyNs4naOrS0u5kwmsJubWge8nITD6mcLrn1%2B%2BVeMIL2h8QGOqUBGmEdkg5b%2BzwyewkM6Gr9xrlTA3zEZqm1fnZCqXwuDHn6cEFzMwFPXOFoj0G%2B5Q9hcNqRyFQGwC9cM8vBO1OSiEy1wCOc7P3b7g%2BHoAd%2F6zTulwP4hMi6c4kL7z4xXsCTq0FZKvLvG0mZMwAyzRXmLpQFoweYxKxys7DZYB%2FDI%2BeDw9G4NnxCfzFRHAyztcR752lzALQzirG0FN1KzgUlz7BFKpBk&X-Amz-Signature=06240ee5b22bd71253b21c4418445dccd2e777dbdf53ca564bf2af7bc5a1eae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


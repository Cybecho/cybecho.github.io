---
title: "유니티 로그라이크 08"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "게임의 난이도를 시간에 따라 조정하는 코드 구현, 직렬화를 통한 사용자 정의 클래스의 Inspector 노출, 몬스터 스폰 데이터 관리 및 초기화 방법에 대한 설명이 포함되어 있습니다."
notion_id: "874bd934-c25c-4293-83cd-d6c4a7a0d086"
notion_url: "https://www.notion.so/08-874bd934c25c429383cdd6c4a7a0d086"
---

# 유니티 로그라이크 08

> **Summary**
> 게임의 난이도를 시간에 따라 조정하는 코드 구현, 직렬화를 통한 사용자 정의 클래스의 Inspector 노출, 몬스터 스폰 데이터 관리 및 초기화 방법에 대한 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/69ca0e9a-1768-4661-a9bf-fa3c30abaf84/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7XWFZ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCxdH5ukyDFg7HsTLrDdPN8Mx2wAep3BTZWbbynLLQIhwIgPtA2IlPZjqn287i7TWkiWOB7B6X%2FWWcQtukF43ciWMAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDD%2B0bSHKg1N4lVEl9CrcA3QiG2djBkltK%2B6fgW1Ys5Su%2FVXHr6AcybgqXsOo9WNaN2v%2BBgiN4vkd1PrQbj91abYwNffZewkj6gL7NqOtMntaUfUa0walnZ478OTI1lbCdMb6lLXxrBYtovcz%2FcDzOYrlP5FkfU8i6VSfvFHYuli6b0BLORQ0C36%2BMkN7dOyX6s8Xybm0oecAftfH2sBA9ebd%2FM8WqH9ukL57uW8SH3JfTmSZ2QtxjVB1cIq%2F7B7IZfXo12BuWASI5dPrTwo%2BxMcxoaUNKNZIqMw%2FYstodMNZnPBLLtlQKpZl1iZLF52JeGy6hJmdo0lbrg5A8PRv6clVR92zXUne37boeoXSGF7ka2m6dU4bTKcF0f8nr8af%2BecIcPGtNp9AbjV%2BGLtArGxGibkraFQiLY0zCODa%2FTIH4huyU6DRH4Jf1Mk6mDcDKOxkjuByBAd%2FbdvHgQGf%2BtdAjPklFm%2F69pxUd%2BvCHaNnyJBWAzelWFmy4KTk99jAynqqL2F2DP%2Bp1Cid0Si42EtiWtaopNQAxX8och8s0qwnGPdtgTRfImKDq1Q06gD7LlE6ZAHeAvbndoxQCTH6WXx1KJByH6CGsUESDrhgAhHCeYMqR4zIN8mgM8rQYMN4uXToGd9OKeiIuhTaMKj2h8QGOqUBmRyBiX%2FTo%2FywvVWZgbq%2FU2V4pfxb1p7z4S7SgAba%2FrFJrJIkJI0Ze3NaAv%2B%2BwexShQpS1XumPo2tgi%2FCEIltLey1b18HoVHaHqR%2BkqK%2FGmx57wRi%2Fr5mZE8b1mI1qVvl9EGcyLQ8Fm8IpN2IZLiPWsAlYi7yFt5fKEvesB%2B5QXjQQtBY3%2BLsot2P4x73%2FoZs4PrLymybggD5kHWY8Qhib7dqJ2R4&X-Amz-Signature=726bf56e7b49a17c26a2db9000b421a7ed92932b977aaf3d855e0146a27043de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SSg_9q-8h-A&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=9)

> 🔥 **시간에따라 게임의 난이도가 변경되는 코드를 만들어볼까요**
> > 🔥 **GameManager.cs 에서 플레이시간을 담을 변수와 코드를 추가해줍시다**
> > ```c#
> > //GameManager.cs
> >
> > public class GameManager : MonoBehaviour
> > {
> >     ...(생략)...
> >
> >     //게임시간과 최대게임시간을 담당할 변수
> >     public float gameTime; //실제 게임타임
> >     public float maxGameTime = 2 * 10f; //최대 게임타임 (숫자는 '초')
> >
> >
> >    ...(생략)...
> >
> >     void Update()
> >     {
> >         **gameTime += Time.deltaTime;**
> >
> >         //현재 플레이타임이 최대 플레이타임을 초과한다면
> >             //현재 게임시간을 최대 게임시간으로 고정시킵니다
> >         if(gameTime > maxGameTime)
> >         {
> >             gameTime = maxGameTime;
> >         }
> >     }
> > }
> > ```
> >
> >
>
>

> 🔥 **소환데이터를 담당하는 클래스를 만들어볼까요**
>
> 스크립트 내부에서 메인클래스 밖에 새로운 클래스를 생성해봅시다
>
>
> ```c#
> //Spawner.cs
>
> public class Spawner : MonoBehaviour
> {
> 		**public SpawnData[] spawnData;**
>    ...(생략)...
> }
>
> **public class SpawnData
> {
>     public int spriteType; //스프라이트타입이 0일땐 해골 1일땐 좀비 이렇게 바뀌게 할것임
>     public float spawnTime; //스폰타임
>     public int health; //몬스터 피통
>     public float speed; //몬스터 이속
> }**
> ```
>
> > 🔥 **근데 이렇게 스크립트 내부에 두개의 클래스가 존재한다면 인스펙터창에선 
> **
> > SpawnData가 보이지 않습니다 이때 필요한 기술이 바로 `직렬화` 입니다
> >
> >
> > - > 유니티 에디터의 Inspector에는 사용자가 정의한 클래스(Class) 또는 구조체(Stucture)의 정보가 Inspector에 노출되지 않는다. System에서 제공하는*** "[Serializable]" 키워드를 지정하여 Inspector에 노출시킬 수 있다.***
> > ![Image](https://blog.kakaocdn.net/dn/ABy6x/btrGBilppd1/woN17HuqbuV3S3iMex72Y1/img.png)
> >
> > 위와 같이 사용자 정의 클래스의 윗줄에 "[Serializable]" 키워드를 붙이고, Monobehaviour를 상속받고 있는 C# 스크립트의메인 클래스에서 해당 클래스의 객체를 생성하면, 아래와 같이 Inspector에 노출되어 값을 지정 할 수 있게 된다.
> >
> > ![Image](https://blog.kakaocdn.net/dn/qK9St/btrGBjkU29x/Mt042Lty6FkhMn9oCXbWNK/img.png)
> >
> > ---
> >
> > ***직렬화는 데이터 구조나 오브젝트 상태를 Unity 에디터가 저장하고 나중에 재구성할 수 있는 포맷으로 자동으로 변환하는 프로세스를 말한다.***
> >
> > ***Unity 에디터에서는 저장 및 로딩, 인스펙터 창, 인스턴스화, 프리팹과 같은 일부 내장 기능에 직렬화가 사용된다.***
> >
> >
>
>
> 저는 속성창 내부에서 바로 System을 불러와 사용했습니다
>
> ```c#
> //Spawner.cs
>
> public class Spawner : MonoBehaviour
> {
> 		public SpawnData[] spawnData;
>    ...(생략)...
> }
>
> **[System.Serializable]**
> public class SpawnData
> {
>     public int spriteType; //스프라이트타입이 0일땐 해골 1일땐 좀비 이렇게 바뀌게 할것임
>     public float spawnTime; //스폰타임
>     public int health; //몬스터 피통
>     public float speed; //몬스터 이속
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0f253810-9b7f-4780-88a1-d716807aae12/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2IN6D6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCa2TtrXi8dhnHAvdgevDDXO%2Bn%2Fd5dUzlIiKlwxqVaSGQIhAOsUGoMnWkEGhSItODa0oRxpeLOJjG3C6G7e1i7%2FXm%2BcKv8DCCoQABoMNjM3NDIzMTgzODA1Igxt34s3acvXW11Q%2BHEq3AMaQLVbcZ0xeBXEWTVOx6XxRqSt%2Bh7Qm65Mbd143bX4FyPnfnhlkWbtoPMbp%2FxrST55T%2FGMMjTCm3Vr0vyWmADpkj3XN2BMBbwwH8YwneKw54y92BC8gvYtnh621B3v9sRy3YXxCYRhNj5CA7VQhvkO8XMOikf7RQZ%2BWdJoOQ4UWEZiqglzoyrgFg6UueaQ2hfwgaJVttYnf1%2F0YOsvgm9J%2BJjwNf0gx1ANHTv3HVa59hpku7DvqiFyBEc8dwHkPJ9ist6%2FGXw9iVWpC1OFq7XndZFbGERUs6ivqU2aajATj8WeY%2F7KbQ%2BXuDroKNsapl%2FaPfO3DBf%2F36c0%2BDNPQiACwejtlp78uTqzo7GxGIdH4LXGdV7BxZzFR3n2htpChASFy9oP2Bg6ht7xtc7ayndVEW6%2BcVGkEqrGAmD3vGjG8PMbfAV5HT1RYkQGjv4XFK5q7NpSiqtinUGIO4lLLxk84PdHRs71%2FpW6xJwKppNDqFitYLLu7BV4XIQaiYa3S358Tbwi4EgOHVHXZqqDjtPedlciAL4erfT48XqZ32oRzDE7w7X6gJvDwqbFBR9IvZXnYHwNnH8WaUnVkHzh8rsPb4%2FsOTpkjTcvGIKoQHyG%2BkaJVw2n9Pn8djg9KjCb9YfEBjqkAUXN3Dbe887beKUu14SM0kknxyyaZky%2FoJ2y5I3MqpxXVQmkwPX3vQdEbDkE1E%2BsBBvvGuEAyUblRoSLmMKon9BQXggo2ocgEW0YTiJ4PdiJuFerc49qM1f0l7rffleep5ooAn9aAI%2FXcq%2FG%2FZjzrnfSP4EL9jEyJJyviIqV23MDCYWuxwnuC0FcscauWd59HYGPu7sYaOTS13UQF6sOI0Oh%2FWRx&X-Amz-Signature=dcf2897b26635df538696e1cfc5777bbfa40dbfeb70058add9ba855902c3ff75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/96365f45-ddd3-467a-b0e4-99c816bdeb11/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2IN6D6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCa2TtrXi8dhnHAvdgevDDXO%2Bn%2Fd5dUzlIiKlwxqVaSGQIhAOsUGoMnWkEGhSItODa0oRxpeLOJjG3C6G7e1i7%2FXm%2BcKv8DCCoQABoMNjM3NDIzMTgzODA1Igxt34s3acvXW11Q%2BHEq3AMaQLVbcZ0xeBXEWTVOx6XxRqSt%2Bh7Qm65Mbd143bX4FyPnfnhlkWbtoPMbp%2FxrST55T%2FGMMjTCm3Vr0vyWmADpkj3XN2BMBbwwH8YwneKw54y92BC8gvYtnh621B3v9sRy3YXxCYRhNj5CA7VQhvkO8XMOikf7RQZ%2BWdJoOQ4UWEZiqglzoyrgFg6UueaQ2hfwgaJVttYnf1%2F0YOsvgm9J%2BJjwNf0gx1ANHTv3HVa59hpku7DvqiFyBEc8dwHkPJ9ist6%2FGXw9iVWpC1OFq7XndZFbGERUs6ivqU2aajATj8WeY%2F7KbQ%2BXuDroKNsapl%2FaPfO3DBf%2F36c0%2BDNPQiACwejtlp78uTqzo7GxGIdH4LXGdV7BxZzFR3n2htpChASFy9oP2Bg6ht7xtc7ayndVEW6%2BcVGkEqrGAmD3vGjG8PMbfAV5HT1RYkQGjv4XFK5q7NpSiqtinUGIO4lLLxk84PdHRs71%2FpW6xJwKppNDqFitYLLu7BV4XIQaiYa3S358Tbwi4EgOHVHXZqqDjtPedlciAL4erfT48XqZ32oRzDE7w7X6gJvDwqbFBR9IvZXnYHwNnH8WaUnVkHzh8rsPb4%2FsOTpkjTcvGIKoQHyG%2BkaJVw2n9Pn8djg9KjCb9YfEBjqkAUXN3Dbe887beKUu14SM0kknxyyaZky%2FoJ2y5I3MqpxXVQmkwPX3vQdEbDkE1E%2BsBBvvGuEAyUblRoSLmMKon9BQXggo2ocgEW0YTiJ4PdiJuFerc49qM1f0l7rffleep5ooAn9aAI%2FXcq%2FG%2FZjzrnfSP4EL9jEyJJyviIqV23MDCYWuxwnuC0FcscauWd59HYGPu7sYaOTS13UQF6sOI0Oh%2FWRx&X-Amz-Signature=940e85d8bcb562eba98110ff75e1683f53277b1b88d8763181d43217d4c7a17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **스폰데이터를 활용해 몬스터의 타입과 스탯을 정하고 스폰해볼까요**
> ```c#
> //Enemy.cs
>
> public float health; //몬스터의 현체력
> public float maxHealth;
> public RuntimeAnimatorController[] animCon; //애니메이션 컨트롤러를 각 몬스터 타입에 맞게 넣기위해 배열로 선언
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2c2655ea-6b82-422f-9730-850dae511a43/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UK6PROP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHhBUd%2BQEGpfF5pg4pQthNdViEXpnuiTK8Arf56pQta%2FAiEAnUJc%2BgUUi%2Bei3QpMPs1eCEN73R7vShJpqe28UQ6530Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOZjUCznXV61QnkXBircA3gMyrCIKK9s4eSmaW4M%2Faf%2BLIEX0SdiJel6cEaOhTjpgUhSBWO1Zg%2B4cvT1gB0HOC1Z5cijoCePBTu0BqlYeYZYIT6klopcd4MnkIM5%2FBcC%2FKf1%2FlyZRzdUtTCUcYAKysO86z0F3EuFKTmIaeB2d0UMxXyJARnJJizkAwCx%2FqDZIV0i7wXKN832ZmV50nZOCvZx781ekw8AGp9%2B8x%2BpA4dv5arKZtXp05OTB4TAD329RTBgylO96P3ZwnoP%2FnULPOjTvKxG5N9lJFQ1Ttx%2BaKuIDwV0g7UHaoC24%2FwG0KC20YX%2FXh%2FTQCk8SExOgmi3I2knQLGMY9fPKoIbq6q3ktmTbO9VTN1VKyVZVZQBgfYDSgfrtOOLyBq4hrH7JrfwJA%2FPdh22OcHDHmcXxXvMMpOFVCmuMreXtSyRTPi%2FlYVquGD0ZPT1vJQXAL%2BsrdjL2fAkTFRQONm24tq5k04eKfR46uZcBW0Nmo2RjtJXpM2nuck0axW54AxiEqzc8gwwWHA5OcLX4W3Q8t1PnIOXT7UdOiKIYT1yGX9OfgSGRVIZQBFw1qQtbsnsDEE0TlMlAP%2FsJ57XNGnb427JCUI8%2FWTOcbWATvFRo0tETR9E4ggaLCqEm%2FPPQdnbW9WdMJf2h8QGOqUBnn71IPCieY%2Bafj8gY7TNlbGRjBXDONKqiME1Gm8x0rp95Kdg4gCEx3R4aJGu4vOFn1NoWuARvOnGmnAudU28hd9BomhNryvMucAMZ6mS05FL5Vd8rIsIX1OSrcdxvFw9VYe7oCuTGVsKKBBFR4%2B%2B%2BwcZA6PiAj8j0kiV6ZNDlbZyPek8P8MTzXRhUDsqfmPoTh0lOm62blRj6kvhm4OURWUvnSoj&X-Amz-Signature=c2b315b16db38cbb3336ffa7c830c98b1e1ce18140d873684e794766e2ba7aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> **//Enemy.cs**
>
> 		//스폰데이터를 그대로 때려박음
>     //변수 data에 SpawnData 스크립트를 넣음으로서 SpawnData에 접근할 수 있음
> **    public void Init(SpawnData data)
> **    {
>         // ... 스프라이트 & 애니메이션 변경부분
>         //스프라이트의 타입은 인덱스로만 쓴다 (어처피 배열이 애니메이터랑 동일하니까)
>         //애니메이터의 컨트롤을 뭐로바꿀래? animCon[스프라이트배열] 로 바꿀게여!
>         **anim.runtimeAnimatorController = animCon[data.spriteType];
> **
>         // ... 스피드부분
>         speed = data.speed;
>
>         // ... 피통부분
>         **maxHealth = data.health;
>         health = data.health;** //최대피통이 올라갔기때문에 현피통도 초기화해준다
>     }
> ```
>
>



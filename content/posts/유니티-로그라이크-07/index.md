---
title: "유니티 로그라이크 07"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 대한 내용으로, 무한 생성되는 몬스터 제작, PoolManager를 통한 프리팹 관리, 스폰 시스템 구현 및 인스턴스된 프리팹의 타겟 관리 방법을 설명합니다."
notion_id: "e15763de-9751-499c-9c7a-76f2845abfab"
notion_url: "https://www.notion.so/07-e15763de9751499c9c7a76f2845abfab"
---

# 유니티 로그라이크 07

> **Summary**
> 유니티 로그라이크 게임 개발에 대한 내용으로, 무한 생성되는 몬스터 제작, PoolManager를 통한 프리팹 관리, 스폰 시스템 구현 및 인스턴스된 프리팹의 타겟 관리 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/26d6fe28-ad63-4ce0-b9cc-6e89e0aa90d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UT3D44L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCODBGM9jFGV9GUvN%2B%2FfNJ%2BX3Rra8fmNmy%2FI1V8sirzOAIhAIexVdVFBifsNORCpvw9u9WAq%2FddirpPw4tE%2Fm9lBEo4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igx6cpuyZSXoJWJ0kUEq3AOJMNgRhds4u79%2FXY4%2BV2RPBo8CVXrYFWcJYoALxeDMoihKroKaz4OlryMQf9VodVwb2UjEb2MVftiyWoPDUUyVSWnsQaNDvU5CVrnKfoeqxMrkLYUTDDshTA52VKoPQtufHJZ64K5gaRoNxBaFXfF%2FdTMAVtZNFd2pPk%2B70o9%2BV9vKiHPkVyv2GiVssOaAoW%2FkSDkQjwAVb6UlnGe4P8jdkM0pTAHloMZUQ0Lo0%2FW0e6xmqq7ppTsCkeMnssV7iurCarAVODRk3ji772oY7A8g8f9SnpvNAmXTT7N%2BzDNrY8ZKO4APc4N9MevOCzqX1zxfdQQGcGqTVUyGbK%2FkRG07QzpgJvNPDEUbl3Yck8h4jOTYoMAjOU8aHbSh%2FC6vJBBN23jLciZ%2BDxzMWWuooIVKbDuYfZe%2FKIeVoZ9X2GqTq2UxudvAwFbTKnCtIv9prbO%2B6c1dRXRU1IHhSdD3ssml9qTjwkHbAMnaJBCwhR6ygI2%2FE0hZT7b1HunBl2GxooqioLMVoTjsRYTIEAHVtPFQsyb1u%2BRw%2B97m%2FEZ8Cx46jyKZ00xkS%2Bdv6d1Lk5I3ECPViDFSkMN4nmTfAC47MwLDDinBCRbCG%2F1zF6VLNincfJTThyaJeQEHj4s4JjC09ofEBjqkAd0LH9ff1lyC7Vn9vmgYmCB%2Fd10IC9TtOOBvIoE%2Fpcj%2BKZDy5TRYeYgI1m2i3ALDiczgr98V709qPNSMcaCT%2FC%2FMgV9bbc2IAwqZQJU8yi0jcmAodiAO3k0bzet0%2BYZIZLs6hc9ridCbXzgm2Rfm56%2FXtUQ063NTjR4jNkMLuVJ5ioHHaA0TJVsqIPxii7iHbP0yxeyjYEAjTNksa1kSY3fVodJ3&X-Amz-Signature=d9471bfd8d6f08078f215d193dac722801544e2f5f3f7ff7f48ad324dd1f5a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=A7mfPH8jyBE&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=8)

> 🔥 ****일단 만들어진 적 오브젝트를 프리팹으로 만들어준다 (위치 초기화도 잊지마요)****
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/821d2df6-72b0-439f-9772-d90c270569a7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZTCDJ2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC3XCp4l70ZTxDjDXpxD1w4vAai6Nrx4zGC%2FZ2xMI9mCAIhAJtKoE13vhqdZaKltDWqUvS2eCjKelQyrdKcnMqLAPNTKv8DCCsQABoMNjM3NDIzMTgzODA1IgxyoS%2BtCnUsN%2BdBO%2BEq3APz8sf1APkmvTtNH0Muu1aTbBH0Vl9MhOdft2N%2Bua8KnLkoWDlIf9u4RS7%2BhSNNylmD8bRHthGY1QRwtx6nxD1%2BgPpFP6IbU2vyTNcP2I3Gs8gz4LB6e5I9XUB5JHfAf1zzHmmxJuNPZrP3uAQuy3%2B7iJrZQODT5OhsEC4d9GVyRwr0IsAkQlRh57RxdZ1K1fCBHKqSgENGxSXFMmIeFB7D%2Bg3rWdUiPfKdzzXSOZLHKsUfPzskCpLPaPis%2FZ%2Fde9aH4YshjpA6Mq1P%2F90SAlAYfWEebeq4GaYim8h3fgA03PQbwio6tz2AzvQ9L5R6CVoGUXin%2BCE31qMy9xH%2BCGqT0iHO5FHkiHrQ%2F5g9R0s9DGj1nmH0XMoDseJhYnVAptz0kUnAZ%2F%2FWrIuFM39%2Bar7z6PzqR0JbOJcFTUVNdIRzkLx%2FbojEOe9MMN7frxfkoZCiRoNesLwljb9Ba7hkv6Ce84n7D9QvDe6xEGCH%2FfJ6P8DnyqJ40vHcbzrBkoD61TR3pY6mTgKxUSqVww9%2FL%2BYHRctOYYFlxt1gyQwOlY2of8pM%2FEOntRCUi81Yk5Z4v%2FWshNyebu3NuQmIvuoykBA%2Ff%2F66ch%2BZLtcFgpcXyT0DX7rbWLVJmrg8ZXQcFzDf9ofEBjqkAVsMj1lwGNTBRCQVHyVQ5njhZcSQowKUxTEExLWXIHGioLj3V%2FluDex7z5Vz7vZ4ymuT%2BKPnwKH0L1A9Zvyxpv33npkFRewI%2B71rwAN3p%2FNQ7iczNhYL9ZykBDatZkgeAUkFbfAutQckMkCBfrLAgcPmDO9IGliUWTHHTbSFHr3JWvFPubG6eLCPvZqWzecpYATGKJjHfh9ofvWizVQHkBxP%2BPQg&X-Amz-Signature=4acc6d5c601a7d3be87d8e53c60953697175fbba1a4556c8b5615d3f22408cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 ****프리팹 관리할 목적으로 PoolManager를 CreateEmpty로 생성해준다****
>
> 그리고 프리팹을 담을 pool을 만들어준다
>
> ```c#
> //PoolManager.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class PoolManager : MonoBehaviour
> {
>     // 프리팹을 포관할 변수와 풀 리스트가 필요하다 (무언가를 담을것이기 때문에 수영장'풀' 이라고 함...)
>     // 프리팹이 2개면 리스트도 2개여야함
>
>     **// ... 프리팹 보관할 변수
>     public GameObject[] prefabs;**
>
>     **// ... 풀 담당을 하는 리스트들
>     //리스트는 꺽세를 만들고 그 안에 타입을 넣어준다
>     //리스트도 프리팹의 개수만큼 생성되어야하니 배열로 선언해준다
>     List<GameObject>[] pools;**
> }
> ```
>
> 리스트와 그 속에 담긴 오브젝트들도 초기화해준다
>
> ```c#
> //PoolManager.cs
>
> void Awake() 
>     {
>         **//리스트기때문에 new를 만들어줘야함
>         //List 배열의 크기는 prefabs배열과 동일하기때문에 배열에 Prefabs의 길이를 넣어준다
>         pools = new List<GameObject>[prefabs.Length];
>
>         //for문으로 배열 내부 오브젝트들을 모두 초기화해준다
>         for (int index = 0; index < pools.Length; index++)
>         {
>             //풀을 담는 배열도 초기화해주고 각각의 리스트들도 전부 초기화해줌
>             pools[index] = new List<GameObject>();
>         }**
>     }
> ```
>
> ### 생성된 배열만큼 반복문을 돌려서 활성화되지 않은 오브젝트를 활성화시켜주고 모든 오브젝트가 활성화되어있으면 새로운 오브젝트를 생성하여 기존 배열에 추가시켜주는 과정
>
> ```c#
> //PoolManager.cs
>
> //생성된 오브젝트를 반환해줄거임
>     //어떤 Pools[]에 담겨있는 오브젝트를 가져올것이기때문에 매개변수도 넣어준다
>     **public GameObject Get(int index)**
>     {
>         **GameObject select = null;** //null 로 초기화 (foreach문에서 오브젝트를 넣어줄거임)
>
>         **foreach (GameObject item in pools[index])**
>         {
>
>             //item변수가 활성화되어있는지 스스로 확인하는 변수
>             **if(!item.activeSelf)**
>             {
>                 // ... 선택한 Pool[]의 놀고 있는 게임오브젝트에 접근
>                     // ... 노는 오브젝트를 발견했을경우 select 변수에 할당
>                 **select = item;
>                 select.SetActive(true);
>                 break;**
>             }
>         }
>
>         // ... 못 찾았으면?(모든 오브젝트가 작동중이라면)
>         if (!select) //값이 없으면 false가 반환되기 때문에
>         {
>             // ... 새롭게 생성하여 Select 변수에 할당
>             //Instantiate(복사될게임오브젝트,위치값)
>             **select = Instantiate(prefabs[index], transform)**; //오브젝트 생성하고
>             **pools[index].Add(select);** //복사된 오브젝트를 pools에 등록해준다
>         }
>
>         **return select;**
>     }
> ```
>
> > 🔥 **foreach 는 배열, 리스트의 데이터를 순차적으로 접근하는 반복문이다**
>
> > 🔥 **Instantiate 는 원본 오브젝트를 복사해주는 함수다**
>
>

> 🔥 ****몬스터 스포너를 만들어보자****
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/643c3c3b-9e14-468b-a605-bad5d90e98dd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYXAHCR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDRoAXUosLx9k5WgfFPWJkhKXGzsxNTwGuy155x%2BHVyUQIgOkKwBcBFHmRT1QwCnezCv%2BS8T8eQRlW2BK0VJTDR9Xwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBiGGnsE3CJiqb3OICrcA7bzHc%2BeKudaV7bi6ag0j6NgOM%2BhpWMJNN31XlMFnceSOJ2FTWKyeVgm0qftVnSifdNBk3U%2B3rIm1M%2FY6dRBLUnNUhEbHjJA8s2PaouMotpx7xrSLDGNzWLjnfuct2Bl4PMEZEDV03vMcZ30xnVQ2FkipTvJqvd19guusHxZIy8%2By4EoIMQzh6OLUcvkDLdQadqPRqfNWt7nG6IyxxIMu2VQ7Ob3RaTd1oijmYCy76sJN0mjFKuXpCL%2FBqv5gKoSd5hiuNjYyvUY4xoHqFBLEvk7Ct1Gg41D0hZXQqVWwlmVLsWfPgC9aekcYq1etjXKiWzQqIPoG5lEXiEndMaD%2Fl9VUyVwYKV2K%2BY%2Fk6ystap%2BBvpFWCN2VjpeBguya1NbzfE8VQ1%2BCFFqrrp0%2FiGSjqBscxs1k7baVXKpZhDGtnoyotQt%2BfkbBP3QDXpdZU8wUgNU35HxVl2QkULhqLBhReyOCf6O5bjgHSAN6HohbNo97GGi%2BP5TPI0eiEz%2FwQmn%2FBMzYCEwhSvxEzE3fxqS2s7pTPI4e%2F7km4RL79G60ud241MHlVw8BGcIFDVfTcZwKNqY46hF4cclxhyQjGOOjrFe0GlE2rFX90aQteT%2BX316%2FZD6KEW86PKKXSTFMM72h8QGOqUBetwVQtFzOGSIH1%2FcukUc9fnKe7NmF573AM4eWFu1O%2BYAYFbMPtQDxnw%2BGhO0ZukCllFJ5R9DJkSEvqW5BS7DJhhONw3M18dm2uLdtiGBF1B1rPRcnWv9sz4Q7iCccLHivrBYd4BI4CJOKSxAehBgveI4KiquImAXY47rmDNLvMrTd23GQK2PDvWeNk%2B5yC8exGFUJaWr71Mmrvw6ojMIH5Q1Rxdg&X-Amz-Signature=9ed81e19ac533c52ef5f6ded77d1a79e8b168e269ccb8561cbbcdd23de70e134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 외부에서 PoolManager의 변수와 함수를 이용하기 위해 게임매니저 스크립트에 PoolManager를 생성하여 초기화해준다
>
> ```c#
> //GameManager.cs
>
> public class GameManager : MonoBehaviour
> {
>     //정적변수 static을 미리 설정해두면 즉시 클래스에서 부를 수 있다는 편리함이 있다
>     public static GameManager instance;
>     **public PoolManager pool;**
>     public Player player;
>
> }
> ```
>
> ```c#
> //Spawner.cs
>
> public class Spawner : MonoBehaviour
> {
>
>     // Update is called once per frame
>     void Update()
>     {
> /*Project Settings > Player > Other Settings > Active Input Handling 을 
> Both 로 설정하세요.
> 선강좌 중에 새로운 입력 시스템(Input System Package (New)을 사용하면서 발생한 거에요.
> Both로 하면 이전 방식의 입력 시스템 코드도 같이 사용할 수 있습니다.*/
>         **if (Input.GetButtonDown("Jump"))
>         {
> 						//몬스터 불러옴
>             GameManager.instance.pool.Get(1); //n번은 Enemyn
>         }**
>     }
> }
> ```
>
> > 🔥 **Jump 추가하고 에러나면**
> >
> > **Project Settings > Player > Other Settings > Active Input Handling 을 Both 로 설정하세요.**
> >
> > 선강좌 중에 새로운 입력 시스템(Input System Package (New)을 사용하면서 발생한 거에요.
> > Both로 하면 이전 방식의 입력 시스템 코드도 같이 사용할 수 있습니다.
> >
> >
>
> > 🔥 ****인스턴트된 프리팹이 타겟을 잃었다!!! ****
> > ### Enemy.cs에서 타겟을 다시 가져올거임
> >
> >
> > 유니티 스크립트에서 On을 쳐보면 수없이 많은 이벤트 함수들이 있는데, 우리는 `OnEnable` 을 사용할것이다
> >
> > ```c#
> > //Enemy.cs
> >
> > void OnEnable()
> >     {
> >         //게임매니저에 이미 플레이어가 저장되어있기떄문에 타겟을 저장할 수 있음
> >         //target의 Type은 Rigidbody2D라 플레이어 내부에 Rigidbody2D를 불러와야한다
> > **        target = GameManager.instance.player.GetComponent<Rigidbody2D>();
> > **    }
> > ```
> >
> >
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0b5df2bd-8bda-4da0-abfd-63920db79301/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYXAHCR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDRoAXUosLx9k5WgfFPWJkhKXGzsxNTwGuy155x%2BHVyUQIgOkKwBcBFHmRT1QwCnezCv%2BS8T8eQRlW2BK0VJTDR9Xwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBiGGnsE3CJiqb3OICrcA7bzHc%2BeKudaV7bi6ag0j6NgOM%2BhpWMJNN31XlMFnceSOJ2FTWKyeVgm0qftVnSifdNBk3U%2B3rIm1M%2FY6dRBLUnNUhEbHjJA8s2PaouMotpx7xrSLDGNzWLjnfuct2Bl4PMEZEDV03vMcZ30xnVQ2FkipTvJqvd19guusHxZIy8%2By4EoIMQzh6OLUcvkDLdQadqPRqfNWt7nG6IyxxIMu2VQ7Ob3RaTd1oijmYCy76sJN0mjFKuXpCL%2FBqv5gKoSd5hiuNjYyvUY4xoHqFBLEvk7Ct1Gg41D0hZXQqVWwlmVLsWfPgC9aekcYq1etjXKiWzQqIPoG5lEXiEndMaD%2Fl9VUyVwYKV2K%2BY%2Fk6ystap%2BBvpFWCN2VjpeBguya1NbzfE8VQ1%2BCFFqrrp0%2FiGSjqBscxs1k7baVXKpZhDGtnoyotQt%2BfkbBP3QDXpdZU8wUgNU35HxVl2QkULhqLBhReyOCf6O5bjgHSAN6HohbNo97GGi%2BP5TPI0eiEz%2FwQmn%2FBMzYCEwhSvxEzE3fxqS2s7pTPI4e%2F7km4RL79G60ud241MHlVw8BGcIFDVfTcZwKNqY46hF4cclxhyQjGOOjrFe0GlE2rFX90aQteT%2BX316%2FZD6KEW86PKKXSTFMM72h8QGOqUBetwVQtFzOGSIH1%2FcukUc9fnKe7NmF573AM4eWFu1O%2BYAYFbMPtQDxnw%2BGhO0ZukCllFJ5R9DJkSEvqW5BS7DJhhONw3M18dm2uLdtiGBF1B1rPRcnWv9sz4Q7iCccLHivrBYd4BI4CJOKSxAehBgveI4KiquImAXY47rmDNLvMrTd23GQK2PDvWeNk%2B5yC8exGFUJaWr71Mmrvw6ojMIH5Q1Rxdg&X-Amz-Signature=4b48730d5616b807b6aa78af285c1fd1d6fa277ca4d9f4c69882fa4d8cc39e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> ## 이제 주변에 자동으로 몬스터가 스폰되는 코드를 생성시켜볼까요
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f326f954-f8db-4abc-a873-5d8885a97e70/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYXAHCR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDRoAXUosLx9k5WgfFPWJkhKXGzsxNTwGuy155x%2BHVyUQIgOkKwBcBFHmRT1QwCnezCv%2BS8T8eQRlW2BK0VJTDR9Xwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBiGGnsE3CJiqb3OICrcA7bzHc%2BeKudaV7bi6ag0j6NgOM%2BhpWMJNN31XlMFnceSOJ2FTWKyeVgm0qftVnSifdNBk3U%2B3rIm1M%2FY6dRBLUnNUhEbHjJA8s2PaouMotpx7xrSLDGNzWLjnfuct2Bl4PMEZEDV03vMcZ30xnVQ2FkipTvJqvd19guusHxZIy8%2By4EoIMQzh6OLUcvkDLdQadqPRqfNWt7nG6IyxxIMu2VQ7Ob3RaTd1oijmYCy76sJN0mjFKuXpCL%2FBqv5gKoSd5hiuNjYyvUY4xoHqFBLEvk7Ct1Gg41D0hZXQqVWwlmVLsWfPgC9aekcYq1etjXKiWzQqIPoG5lEXiEndMaD%2Fl9VUyVwYKV2K%2BY%2Fk6ystap%2BBvpFWCN2VjpeBguya1NbzfE8VQ1%2BCFFqrrp0%2FiGSjqBscxs1k7baVXKpZhDGtnoyotQt%2BfkbBP3QDXpdZU8wUgNU35HxVl2QkULhqLBhReyOCf6O5bjgHSAN6HohbNo97GGi%2BP5TPI0eiEz%2FwQmn%2FBMzYCEwhSvxEzE3fxqS2s7pTPI4e%2F7km4RL79G60ud241MHlVw8BGcIFDVfTcZwKNqY46hF4cclxhyQjGOOjrFe0GlE2rFX90aQteT%2BX316%2FZD6KEW86PKKXSTFMM72h8QGOqUBetwVQtFzOGSIH1%2FcukUc9fnKe7NmF573AM4eWFu1O%2BYAYFbMPtQDxnw%2BGhO0ZukCllFJ5R9DJkSEvqW5BS7DJhhONw3M18dm2uLdtiGBF1B1rPRcnWv9sz4Q7iCccLHivrBYd4BI4CJOKSxAehBgveI4KiquImAXY47rmDNLvMrTd23GQK2PDvWeNk%2B5yC8exGFUJaWr71Mmrvw6ojMIH5Q1Rxdg&X-Amz-Signature=8f0df753e8dd10af6ff50f9f5dc4c19cfdfd209559f4b474bd47d3cd43ae1aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> //Spawner.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Spawner : MonoBehaviour
> {
>     public Transform[] spawnPoint;
>     float timer;
>     void Awake() 
>     {
>         //하이어라키 Spawner내부에 생성한 포인트들의 위치값을 받아온다
>         **spawnPoint = GetComponentsInChildren<Transform>();**
>     }
>
>     // Update is called once per frame
>     void Update()
>     {
>         timer += Time.deltaTime;
>
>         //타이머가 0.2f 초마다 몬스터 소환
>         if(timer > 0.2f)
>         {
>             timer = 0;
>             Spawn();
>         }
>     }
>
>     void Spawn()
>     {
>         //n번은 Enemy(n)
>         //Random 0,2 를 해줘야 0~1 둘 중 하나를 선택함
>         //Instantiate 반환 값을 enemy변수에 넣어둡니다 재활용 할것이기 때문입니다
>         //아래 코드에서 Random.Range가 1부터 시작하는 이유는12번줄에 겟컴포넌트를 할때 스스로도 포함하기때문에 0이 아니라 2로 시작해야한다
>        ** GameObject enemy =  GameManager.instance.pool.Get(Random.Range(0,2));
>         enemy.transform.position = spawnPoint[Random.Range(1,spawnPoint.Length)].position;
>     }**
> }
> ```
>
>



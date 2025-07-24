---
title: "유니티 로그라이크 12"
date: 2023-03-09T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 관한 내용으로, 적 처치 로직, 넉백 구현, 사망 리액션, 애니메이션 이벤트 추가, 변수 헤더 추가, 레벨업 시스템 등을 다룹니다. 넉백 구현을 위해 WaitForFixedUpdate를 사용하고, 사망 시 리지드바디와 콜라이더를 비활성화하는 방법을 설명합니다. 레벨에 따라 무기의 갯수와 데미지를 증가시키는 코드 수정도 포함되어 있습니다."
notion_id: "39b7bec2-674b-4ad5-aa66-83c7f02e326c"
notion_url: "https://www.notion.so/12-39b7bec2674b4ad5aa6683c7f02e326c"
---

# 유니티 로그라이크 12

> **Summary**
> 유니티 로그라이크 게임 개발에 관한 내용으로, 적 처치 로직, 넉백 구현, 사망 리액션, 애니메이션 이벤트 추가, 변수 헤더 추가, 레벨업 시스템 등을 다룹니다. 넉백 구현을 위해 WaitForFixedUpdate를 사용하고, 사망 시 리지드바디와 콜라이더를 비활성화하는 방법을 설명합니다. 레벨에 따라 무기의 갯수와 데미지를 증가시키는 코드 수정도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=JRaIlTEmvHY&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=12)

> 🔥 **WaitForFixedUpdate : 다음 FixedUdate가 될때까지 기다려준다**

> 🔥 **넉백을 구현해볼까요**
> ```c#
> WaitForFixedUpdate wait;
>
> void Awake()
> {
>     ... (생략) ...
>     wait = new WaitForFixedUpdate(); //하나의 FixedUdate를 기다리는것이기때문에 매개변수는 따로 X
> }
>
> //물리적인 추적을 할거기 때문에 일반 Update() 함수를 쓰지않고 FixedUpdate를 사용할것임
> void FixedUpdate()
> {
>     **//GetCurrentAnimatorStateInfo(애니메이션레이어).애니메이션이름
>     if(!isLive || anim.GetCurrentAnimatorStateInfo(0).IsName("Hit"))**
>         return; //플레이어가 죽어있으면 바로 코드를 종료시켜버리는 필터코드
>
> 		... (생략) ...
> }
>
> void OnTriggerEnter2D(Collider2D collision) 
> {
>     ... (생략) ...
>
> 		**StartCoroutine(KnockBack());**		
>
>     if (health > 0)
>     {
>         // ... 살아있음
>         **anim.SetTrigger("Hit");**
>     }
>     else
>     {
>         // ... 죽음
>         Dead();
>     }
> }
>
> //넉백을 구현해봅시다
> **IEnumerator KnockBack()
> {
>     yield return wait; // 하나의 물리 프레임을 딜레이해줄것이다
>     Vector3 playerPos = GameManager.instance.player.transform.position;
>     Vector3 dirVec = transform.position - playerPos; //현재위치 - 플레이어 위치
>     //노멀라이즈를 해줘야 순수하게 방향값만 가진 값이 된다
>     //리지드바디도 2D기 떄문에 ForceMode도 2D가 된다
>     rigid.AddForce(dirVec.normalized * 3, ForceMode2D.Impulse);
> }**
> ```
>
>

> 🔥 **사망 리액션을 제작해볼까요**
>
> 리지드바디는 비활성화할때 simulated를 불러와야하고
>
> 콜라이더는 enabled입니다
>
>
> ```c#
> void OnTriggerEnter2D(Collider2D collision) 
>     {
>         ..........
>         else
>         {
> **            // ... 죽음
>             // PoolManager에서 재활용해야하기 때문에 다시 true로 변경해야한다
>             isLive = false;
>             coll.enabled = false; //콜라이더 비활성화해라
>             rigid.simulated = false; //리지드바디도 비활성화해라 리지드바디는 simulated로 꺼야한다
>             spriter.sortingOrder = 1; //죽고나서 게임오브젝트 레이어를 하나 낮춘다
>             anim.SetBool("Dead", true); //죽음상태 애니메이션
>             Dead();**
>         }
>     }
> ```
>
> OnEnable에서 Pooling할때 죽은 오브젝트에서 실행했던 bool 작업을 다시 원래대로 되돌려버립시다
>
> ```c#
> void OnEnable()
> {
>     //게임매니저에 이미 플레이어가 저장되어있기떄문에 타겟을 저장할 수 있음
>     //target의 Type은 Rigidbody2D라 플레이어 내부에 Rigidbody2D를 불러와야한다
>     target = GameManager.instance.player.GetComponent<Rigidbody2D>();
>     isLive = true;
>     coll.enabled = true;
>     rigid.simulated = true;;
>     spriter.sortingOrder = 2;
>     anim.SetBool("Dead", false);
>     health = maxHealth; //objectPooling이 일어났을때 피를 원래대로 되돌리기 위해서 maxHealth를 넣어줌
> }
> ```
>
>

> 🔥 **애니메이션에서 이벤트를 추가하여 스크립트를 추가해봅시다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dd4343bb-9b51-49d1-a9da-35869878a516/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMVKXK6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGdH0OG0%2FJWsI9s6X8dX2RNpnFlhpo3byE2gYiqTsqWDAiAlvmCq5F0aixyMMz1lbfWkJvyDilzj1oT5cht%2BGjFtPSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdrTqVCgAZ5BavYvwKtwDmXjb%2BTtr5nNU73dI22DqRIXe9qqrErT9kZGCMbhaa6bNHdiHwSvXk7JuTTMxJgtOtbdmu%2Btu%2BOzyZVxcgrsSFk2CZrBSb5Gdjb4xC%2FV4oWactYTJpUSTz6c5SYJtKvu9484%2FY8sS2or5wgScP2rdxwZg1%2BXVhUXiuhrwkVzJsGRfTPNYw%2BBSw0By7lzaBEawDcBOQn%2FKrqzJ0ou%2FuOluoRl%2BZxdInUZzAE1Jh4P8vL4xNy49rbbACszeghzPLN7Xvzc7sXJUT%2BvfYyLcMOPh7GE8JespiFnG4OThBnXA%2ForNHd31ckeX%2Bl3zp8wRgoaTMkmx9%2BZaqBrG5x3OaKv1CMY5RGBCunVXDHm85YCbw56URN1mOqpcvNfyLLaLjspBSPjFijDUQ03R0TPgu9A0uh67YEt0SyuxIPBwuRISUt1Bt%2F8tNlTlulZra9qB%2FGs4p2Yi6PKpUheRYMv0JIR4HBuuS%2BjEyoTHB3YWkPXJDSA9SP4VbcLxR7TWEmbuuxap9JAyKwboFQjI1QTD6a%2FL5zZXWuDxrN1nhCMNJXA8sJGaPGhCTWgGUFpCTfc9YBQENaOxcjB05e22UGIjFtuIiE0GIPN9LCNIaO99kWjcuyyVyBkkWgerFGDpHiswmfaHxAY6pgFcKqo9oySJb6sBZmZ39dIJGhZaCy77P8%2FCq9SNAle6Zml1fs2gROLo6QgEUxSdgn3PkSNFghTQQro9Ayea6CKd7ODd1GWBvPeu3uVUlPo4Hd6IScc2CR8a6rV1QLVFR9iDncvHZ%2FBtyNAHSjoSzEYWu1XNu4R%2FIl2tPQII6tfLP4o2Duiw0MFoSTiI977Fzrqvgag7nDGmgVFF%2Ft%2FP0FJyHTh59hhU&X-Amz-Signature=a7660251a80e081cb84df356cc1ddb320b234ee90200bb940cb62ac45add704f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c0258135-ba05-4ef3-b998-36571280666b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMVKXK6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGdH0OG0%2FJWsI9s6X8dX2RNpnFlhpo3byE2gYiqTsqWDAiAlvmCq5F0aixyMMz1lbfWkJvyDilzj1oT5cht%2BGjFtPSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdrTqVCgAZ5BavYvwKtwDmXjb%2BTtr5nNU73dI22DqRIXe9qqrErT9kZGCMbhaa6bNHdiHwSvXk7JuTTMxJgtOtbdmu%2Btu%2BOzyZVxcgrsSFk2CZrBSb5Gdjb4xC%2FV4oWactYTJpUSTz6c5SYJtKvu9484%2FY8sS2or5wgScP2rdxwZg1%2BXVhUXiuhrwkVzJsGRfTPNYw%2BBSw0By7lzaBEawDcBOQn%2FKrqzJ0ou%2FuOluoRl%2BZxdInUZzAE1Jh4P8vL4xNy49rbbACszeghzPLN7Xvzc7sXJUT%2BvfYyLcMOPh7GE8JespiFnG4OThBnXA%2ForNHd31ckeX%2Bl3zp8wRgoaTMkmx9%2BZaqBrG5x3OaKv1CMY5RGBCunVXDHm85YCbw56URN1mOqpcvNfyLLaLjspBSPjFijDUQ03R0TPgu9A0uh67YEt0SyuxIPBwuRISUt1Bt%2F8tNlTlulZra9qB%2FGs4p2Yi6PKpUheRYMv0JIR4HBuuS%2BjEyoTHB3YWkPXJDSA9SP4VbcLxR7TWEmbuuxap9JAyKwboFQjI1QTD6a%2FL5zZXWuDxrN1nhCMNJXA8sJGaPGhCTWgGUFpCTfc9YBQENaOxcjB05e22UGIjFtuIiE0GIPN9LCNIaO99kWjcuyyVyBkkWgerFGDpHiswmfaHxAY6pgFcKqo9oySJb6sBZmZ39dIJGhZaCy77P8%2FCq9SNAle6Zml1fs2gROLo6QgEUxSdgn3PkSNFghTQQro9Ayea6CKd7ODd1GWBvPeu3uVUlPo4Hd6IScc2CR8a6rV1QLVFR9iDncvHZ%2FBtyNAHSjoSzEYWu1XNu4R%2FIl2tPQII6tfLP4o2Duiw0MFoSTiI977Fzrqvgag7nDGmgVFF%2Ft%2FP0FJyHTh59hhU&X-Amz-Signature=96b3369577f4e5020541364e493acec106e20e8e90973d3db7e0aa90f844ddbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 애니메이션이 포함되어있는 Prefab으로 이동하면 그 프리팹 내부에 컴포넌트에 저장된 스크립트속에있는 함수를 불러올 수 있습니다
>
>
> 이제 특정 초 뒤에 이벤트가 발생되며 몬스터는 사망하게됩니다
>
>

> 🔥 **제작한 변수들을 알아보기쉽게 헤더를 추가해볼까요**
> ```javascript
> //정적변수 static을 미리 설정해두면 즉시 클래스에서 부를 수 있다는 편리함이 있다
>     public static GameManager instance;
>     **[Header("# Game Control")]**
>     //게임시간과 최대게임시간을 담당할 변수
>     public float gameTime; //실제 게임타임
>     public float maxGameTime = 2 * 10f; //최대 게임타임 (숫자는 '초')
>     **[Header("# Player Info")]**
>     //플레이어의 레벨 시스템을 저장하기 위한 변수
>     public int level;
>     public int kill;
>     public int exp;
>     public int[] nextExp = {3, 5, 10, 100, 150, 210, 280 , 360, 450, 600};
>     **[Header("# Game Object")]**
>     public PoolManager pool;
>     public Player player;
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2ac3e2ca-2a8f-4b61-bf9e-4e004129cdd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4F5D7L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICIcrPR%2Faq88Vdi6uREvRbxRQ5F82s6hOUbne2w%2BsKlZAiEAgQ6pMZFubbMzB8lbtKtrPHRVyn6tTaf8NCZXSlj9UEUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGSSZ4kS18QofVo7rircAzRFQe8oUTXqywRXOlSfSei3xpEJnh19SoJn08%2FlFolHruFQGXH1FPfJCEJCQ%2FuYPeN24DJNhu4Ra0fkfCWPUS07M%2Fvk2MPXEj9y3rcCXR4EFM3H7O1ZDHND6%2Fp4NWaDMyTZGsePVHyDDhpM4MI2VGHF0N8JQ9XzH4Lmmiv0SbQf3%2F%2FWLcZ8F441VssT7LqbDjpvzsPofjYz9YUUzm%2BjeRdnZRR2yWvLqVzic%2B3OT3tn0THCr2za1s8BZx0bmocDNKklCBN6E4FxFQt9AaFSSz9GHUXMWRR1Sl1LxpWvpZLeuZARKH5T97IZihJ5pxmgcWdRmVCybHxbywn0XiZNKTyeRpppK6juOCo9qt9Jr1THpzNG34l4AsujH7Kn67ssprbCBE79lgWIjmJJK1t7G8ao4nHKcRG0ukWL66U9smst4ufbpq3jKKmRXrY97aorJNTdBrFkNi6fK930XlOzdhMzKp%2BS9M1%2FUiDxnWzRe8MOeEd0ZTJKx0iDuE3CTqZi26nLuqBvzjvhR9d2CrwGyIsCOWrHlFEBH9diLFJLFBx4ne8%2BPMVqM087d1RiNCO9rt4HDOcwNtRYdFA42oSgeqfe4tYhP7RF9Z%2FeEs7F5moTw4WQOK%2FIHBP362WUMJL2h8QGOqUBp5TDqFkD4buHl96akL8jfCAGHq5NjXW1hLnq7iyZS1%2Fq1OTWh6qVTp5Rc5qnbYQY0A8C2J2OuchsNB9Sc5qmBwayVye8wclQ9%2BN8OXAhwO%2BWvrPS27HaP2HEQH5dt72cmNyLi3rdbAJDcqaeepL8E3FJ8bvanEjUt%2BaFpqk8lJb%2FXAOAJAWTpCZDQepy53UEQLkqnmzUbo18lEawVwhUwpK2e19i&X-Amz-Signature=f9a59b40f1abdf79a3556c046fbbb7e24e29c35c6cf6280a42a5d64e7307cac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **레벨업을 해볼까요**
> ```c#
> //GameManager.cs
>
> [Header("# Player Info")]
> //플레이어의 레벨 시스템을 저장하기 위한 변수
> public int level;
> public int kill;
> public int exp;
> public int[] nextExp = {3, 5, 10, 100, 150, 210, 280 , 360, 450, 600};
>
> public void GetEXP()
> {
>     exp++;
>
>     if(exp == nextExp[level]) //해당 레벨업에 필요한 경험치와 현재 경험치가 같다면
>     {
>         level++; //레벨업
>         exp = 0; //경험치는 다시0부터
>     }
> }
> ```
>
> ```c#
> //Enemy.cs
>
> void OnTriggerEnter2D(Collider2D collision) 
> {
>
>     if (health > 0)
>     {
>         // ... 살아있음
>         anim.SetTrigger("Hit");
>     }
>     else
>     {
>         // ... 죽음
>         // PoolManager에서 재활용해야하기 때문에 다시 true로 변경해야한다
>         isLive = false;
>         coll.enabled = false;
>         rigid.simulated = false;
>         spriter.sortingOrder = 1;
>         anim.SetBool("Dead", true);
>         **GameManager.instance.kill++;
>         GameManager.instance.GetEXP();**
>     }
> }
> ```
>
>

## 레벨에 따라 무기의 갯수와 데미지가 증가하도록 코드를 수정해 보았습니다


```c#
예의바른대학생
1개월 전(수정됨)
다음 강의에 들어갈 지는 모르겠지만
레벨에 따라 무기의 갯수와 데미지가 증가하도록 코드를 수정해 보았습니다

<Weapon.cs 파일>

맨위에 여러 변수 선언하는 곳(ex. public float speed;) 아래에
public int weaponlevel; 
추가 

void Update()의 
if (input.GetButtonDown("Jump"))
    LevelUp(3,2);
의 맨 앞에 // 를 각각 입력하여 주석처리 (임시비활성화)

if (weaponlevel != GameManager.instance.level)
      {
            weaponlevel = GameManager.instance.level;
            LevelUp(3, 2);
      }
주인공의 레벨과 무기레벨이 같지 않을 때 무기레벨을 주인공레벨과 같게 만들어주고
"Jump"키를 눌러서 레벨업하던걸 자동으로 로드하게 했습니다.
그리고 아래에 레벨업 코드를 다음과 같이 수정해줍니다
public void LevelUp(float damage, int count)
  {
      this.damage += damage;
      this.count += count;

      if (id == 0)
            Batch();
  }
이러면 주인공의 레벨이 업 될 때 마다 데미지는 3 추가되고 무기의 수는 2개가 추가됩니다

주인공이 너무 쎄다 싶으시면 맥스게임타임을 늘려주시고, 몬스터 체력을 맥스게임타임에 따라 조금씩 증가시키는 스크립트도 추가하신다면,,,,,

게임 하나 뚝딱!
```


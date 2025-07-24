---
title: "유니티 로그라이크 12"
date: 2023-03-09T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 대한 내용으로, 적 처치 로직, 넉백 구현, 리지드바디 및 콜라이더 비활성화, 애니메이션에서 스크립트 추가, 카테고리 이름 헤더 추가 등의 주제를 다루고 있습니다. 또한, 레벨업 시스템과 무기 데미지 증가에 대한 코드 수정 방법도 설명하고 있습니다."
notion_id: "39b7bec2-674b-4ad5-aa66-83c7f02e326c"
notion_url: "https://www.notion.so/12-39b7bec2674b4ad5aa6683c7f02e326c"
---

# 유니티 로그라이크 12

> **Summary**
> 유니티 로그라이크 게임 개발에 대한 내용으로, 적 처치 로직, 넉백 구현, 리지드바디 및 콜라이더 비활성화, 애니메이션에서 스크립트 추가, 카테고리 이름 헤더 추가 등의 주제를 다루고 있습니다. 또한, 레벨업 시스템과 무기 데미지 증가에 대한 코드 수정 방법도 설명하고 있습니다.

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dd4343bb-9b51-49d1-a9da-35869878a516/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=dea790138ab5e52978652a5e16555d05b543d91ee03a7f0070745533966ba578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c0258135-ba05-4ef3-b998-36571280666b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=48d4db4c3646a649b9a44146c614d69df5322b9d468d3da396617a770b3632fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2ac3e2ca-2a8f-4b61-bf9e-4e004129cdd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4ZX62X%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCAAbN5rXqJHko4MhkwJnXO3d12uAHG%2FSbOI7T5yZ9fvgIgI8%2BvAh0LW%2BM9OQYuxp%2FZbqHDYlSWA9xWkcGHkmyNTCEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEtCXbFk%2FsZ%2BBrxv%2FyrcA8Ah4asYNmoHKgzTypuv1coovv3pL%2ByJdR6wMb9yc1qvyKYMA7cA6W1yoE7a4n2a669iWuZ0LKMGibp6XeNN8rRLDyT0OAiIT6xfLtl0813dxeg6eQmfvcbQhA28qCUncn6FriVUj3%2BU45d2PXSAFO7PB%2FPGlOqGdyQYiPiebskuJzYL6fu1JER1QKB6s%2Fgx0HrqiaJf1zL%2FAwPi5ImcRGpcue5%2BxJqJ9OwoQ%2B%2FQFD2rl1PnYBwDHrsCADyflzvv%2FwMPm1PLaHkfLdUZpz1%2F6jJSdTArE7rPvKbLirZ3W6DwY2Q%2FaeXW2T1OHiRbZryMqMivgXWaPoRtmxchr7end3jfAcciMJGOeBGlmonmlrZQiWS0kFm7lYZt2hyGEcaNL5E0XQ6gI%2FPvmo95CBHWKA25q9h5evy1ewMJxjR%2FIJXAipFm9bwsJvc9GzNmUQQbobIf74oPFfEqLsxlh5%2FlU9hB2%2FaRbio8%2FNlXa%2Fq0KzWYj5ysNoEsU7VfABDkeDo3LMyzcTi77BZE%2Bhq6y3YEImc7IAPOER%2BC2GZ9QduQn%2FyWr4YEAGDiGSSWJY5LZ3N0qpYM4n5tUVF32tawpGDeNYB%2FXboFHRiM16P761mnZj47NhP%2F4%2FGhoGrr3ax5MMK%2FiMQGOqUBb%2FwN8gWhaJygq8xjtMx6qv31g2T44gXwuPbcoQ6bpwX3E0UsgFjgR%2Btul4pIUPy81B%2FbFlffIgNilfp0SzynlhHQAHRXw%2FeERLGJQbt%2Be647V%2FopVDPCMZY%2FFSbWCqo6FwBCSxSt5VR87B6ZPxqlcjUdrr8e0nQ1dpiDVGsym%2FoVskbWL8cobBrQRXfOLI%2FFdH6lyW6z0IH1Yi5xBgXijAGvXaWZ&X-Amz-Signature=f97fe21d86c12c895d1a1e12b709fd2c1b8e34512d828a49bd7ac696673efaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


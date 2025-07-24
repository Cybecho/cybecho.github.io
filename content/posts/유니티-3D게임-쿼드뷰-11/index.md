---
title: "유니티 3D게임 쿼드뷰 11"
date: 2023-02-22T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "카메라 쉐이크 기능을 구현하고, 충돌 시 발생하는 에러를 해결했으며, 미사일 폭발 효과를 추가했습니다. 각 기능은 C# 코드로 구현되었습니다."
notion_id: "56f24504-34fb-4ec5-bafc-b29ddb4258ba"
notion_url: "https://www.notion.so/3D-11-56f2450434fb4ec5bafcb29ddb4258ba"
---

# 유니티 3D게임 쿼드뷰 11

> **Summary**
> 카메라 쉐이크 기능을 구현하고, 충돌 시 발생하는 에러를 해결했으며, 미사일 폭발 효과를 추가했습니다. 각 기능은 C# 코드로 구현되었습니다.

---

> 🔥 **카메라 쉐이크 구현완료! Upadate함수가 매프레임 변화하는것을 활용하여 데미지를 입은 상태일 경우, isDamage를 true상태로 스위칭하여 카메라가 흔들리게했고, true 내부에 isDamageOff 함수를 추가하여 n초뒤에 카메라흔들림이 종료되도록 설정했다**
> ```c#
> //Follow.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Follow : MonoBehaviour
> {
>     public Transform target;
>     public Vector3 offset;
>     public Player player;
>     public int compareHealth;
>     public int shakeIntencity = 3;
>     public bool isDamage;
>
>     void Start()
>     {
>         compareHealth = player.health;
>     }
>     void Update()
>     {
>         decreaseHealth();
>         **switch (isDamage)
>         {
>             case false:
>                 transform.position = target.position + offset;
>                 break;
>             case true:
>                 CameraShake();
>                 Invoke("isDamageOff",0.3f);
>                 break;
>         }**
>     }
>     void decreaseHealth()
>     {
>         if (compareHealth > player.health)
>         {
>             compareHealth = player.health;
>             isDamage = true;
>         }
>     }
>
>     void isDamageOff()
>     {
>         isDamage = false;
>     }
>    ** void CameraShake()
>     {
>     transform.position = new Vector3((target.position.x + Random.Range(-shakeIntencity, shakeIntencity))
>                                             , (target.position.y + Random.Range(-shakeIntencity, shakeIntencity))
>                                             , (target.position.z + Random.Range(-shakeIntencity, shakeIntencity))) + offset;
>     }**
> }
> ```
>
>

> 🔥 **끈질겼던 탄피와 몬스터가 충돌했을 때 프로그램이 종료되던 에러 해결**
> `MissingReferenceException: The object of type 'GameObject' has been destroyed but you are still trying to access it.`
>
>
> 이미 사라진 객체에 접근할 수 없다는건데..
>
> ```c#
> //Bullet.cs
>
> void OnTriggerEnter(Collider other) 
>     {
>
>         if(other.gameObject.tag == "Floor")
>         {
>             Destroy(gameObject, 2);
>         }
>         else if(other.gameObject.tag == "Wall" ||** other.gameObject.tag == "Enemy"**)
>         {
>             Destroy(gameObject, 2);
>         }
>     }
> ```
>
> 기존에 굵게표시한 저부분 때문에 에러가발생..! 그냥 저부분 날려주니 에러가 발생하지 않는다
>
> ```c#
> //Enemy.cs
>
> private void OnTriggerEnter(Collider other) 
>     {
>         else if(other.tag == "Bullet")
>         {
>             Bullet bullet = other.GetComponent<Bullet>();
>             curHealth -= bullet.damage;
>             Vector3 reactVec = transform.position - other.transform.position;
>             **Destroy(other.gameObject); //총알이 닿으면 총알삭제**
>
>             StartCoroutine(OnDamage(reactVec, false)); //OnDamage 메소드 실행
>             Debug.Log("Range: " + curHealth);
>         }
>     }
> ```
>
> 다른코드에 Destroy하는 코드가 중복으로 있어서 충돌한거였다
>
>

> 🔥 **미사일 피격시 폭발구현**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75a3dc15-4b6b-4dec-8dab-2623d6ea77e9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSCN5J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDbcDd9HCjGWjaGAJLylTxLqj5utTxZL46pxEmvPiaPZAIgL6HugLwy%2FahjxPClKnntKDbQFwdV3QYWiuOtCtGRHzYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIhrKeCXEeK3r2lCcCrcA%2Fe%2F5RNr6kR7YfKb97wZFPzgrMNVvje8pId5gZthJkoI2yr3y3alqOeD%2FP8K0C3p5Ky9XgXENnlrpoIQIXNv7jv4ehbIeJ01OlsYFORGei1aqzzUAxPDx10gsYHGjXv7RjDPmLvH2bxeM7%2BLVcFNshva2f3sDZikHTpLMFXGj2AuqwlT1lbLI1%2BNkmLRctNG6jdddt7976NtLLhLJY6z8Why0x6tOrwttV%2FOVk%2BZnKBsr8gweZtj%2ByV569XKz2NH3lbb2UaPwoejD2Ye68fdi67iwAa3wH499tl6KrWsDYJvESqJM7eI4v%2BhsT4VSNYd0dMkdluQf2XQ4Pyll8yxLVqbpkpr5UAqnMhqX1H71O%2BP7PzI%2BO3%2Bhc6wNlIp%2FD3UwRWqthGhO6Z6Q5gZHTvGJd2hKpddRftmQxhC1xmdHFMh9PLyTmcyQS5Tc7St8Z1fAdcXTTcn6gcuSDvdpUAKCtqymthApGAq5mYiizAiRqz%2BQOZhJ0CsjjqADHuyjb5o3s73Pp%2FICS9vlRitcTyYtnmZB3hI8JC6hhd0rkVXI5PxAUzx7Z6LZ6SZIpJgRPP%2FX22jM%2B38swQOEliar5VO2D7e2X%2FYqumiuhEiFkmWPt9Fem13Xf%2FXfXv%2FcsoDMNb2h8QGOqUBP5u1J3E6CwCdbm65zvznKY4nAFKstNQx8ui2ys7lbq%2B1IPP70%2BGPUpsUxdJO6IB1S6S9otYezwXpyQV8BlJw3g5Jenci77r7IzvQ5X8yOp4rTHc0aRKNbNnEKpi5FQAdyFDkuR%2FLntm1cpKxlE5JhPEPOgxFFdbOvNJhhXU9zuNUj9KtNB4RaIP%2BB71bMRL%2F%2F4Z45hTHgJtvKwz9kz1NqniGla%2FL&X-Amz-Signature=b5b2b8813bdccb9338c6e56b531d384670d839a20b4f9dfbd94b6e8f4a27ee3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> Grenade에서 사용했던 파티클을 그대로 사용했고 Simulation Space를  Local에서 Word로 바꿨고 Emission의 Rate Over Distance를 조절해서 폭발을 구현했다
>
>


---
title: "유니티 3D게임 쿼드뷰 11"
date: 2023-02-22T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "카메라 쉐이크 기능을 구현하고, 탄피와 몬스터 충돌 시 발생하던 에러를 해결했으며, 미사일 피격 시 폭발 효과를 구현했습니다. 카메라 흔들림은 플레이어가 데미지를 입었을 때 발생하고, 특정 조건에서 객체를 삭제하는 코드의 중복 문제를 수정했습니다."
notion_id: "56f24504-34fb-4ec5-bafc-b29ddb4258ba"
notion_url: "https://www.notion.so/3D-11-56f2450434fb4ec5bafcb29ddb4258ba"
---

# 유니티 3D게임 쿼드뷰 11

> **Summary**
> 카메라 쉐이크 기능을 구현하고, 탄피와 몬스터 충돌 시 발생하던 에러를 해결했으며, 미사일 피격 시 폭발 효과를 구현했습니다. 카메라 흔들림은 플레이어가 데미지를 입었을 때 발생하고, 특정 조건에서 객체를 삭제하는 코드의 중복 문제를 수정했습니다.

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75a3dc15-4b6b-4dec-8dab-2623d6ea77e9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXSIECHO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6tqFrZ7Y%2Bjsyf%2FOfwW4ygZsBtvWQpuogCnGQ8%2FwFDXAiEAuVs073yl20MBPq71NtL4O%2Bu9%2FdFkBQuFimGp1Oa2X2Aq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNSUnmDvDPVH1gzeoCrcA7EfAi9WFEXS8IWMYZPkMfaT99jjAJufMj%2FdaZ%2BgteGl47MSToLGvHVCogoZ1Tb93t9%2B7cdj9BiR4u9oWMx0Lj5eAZz2X1DXY0mfizGGHkRb91%2BDrj5O845k2DcylOeoWIudYLp0FfQhOfplrwGl9VefFl9Qnl93QxRHp%2Fe9HlMdAtu%2FzWFs4aj5jGD6h9k3fIpKimnbbMlZO0RrTtLdCA6ZDO45KTBz5TXomS5UbEYtMpD15ODBAJKKY0dnXdDfSxPF9e4MEDh0IZ8S9FSzfrUOygspxthSnbLkaI2KDOcYRRiAuBMIcAQ0b5dAqbHpMCcTj0rYFuh%2FfNHWO8qDvP7%2Bz64NTcSNpWzT8kAp47Dhpw1YNTjvZpTw%2F%2BArsGO%2FazsL%2Bj80PTbAaxEQ0zS7fvVAQb4fU%2FYTy1JQjIc7VkSWqc90jiRiGiiCOvQpOVGlFVTNiMvkryfZEWKvbrEhsMuuDH69BbRoxUS3AC9WN7BVyQhn1e9d05xMzMKjUnJVsuLEQfSHjiEyvvA1l2UGtPNsi9tXVS5EOm8yVZeG%2F%2BeDEEpmYDLUjCWcFhrf0fHtR8EWQFOXICWNo42WfvBz7rL6P9CW9Zh4ZiUs7QTKlJESibhuzXzH1bZulCWaMM%2B%2FiMQGOqUBOqJYxT0rWKu6LbZtBHusd%2BoxnWE%2BDMvr1I52UCnAAOjt7u5bYguLTeFU%2FRk52MT0QXRN2BZ4xf60fSKPtUlcd0pFP5%2BTgJ%2BcBeO2OhI4wefCuqYm4VHRLCbsc8%2FjPt67jV%2BFXedm0oeQEyuEEDj%2FEy6HB8xMW9EVMRHCZAZCC3OaY9CBEGrzlsfgXkMKj0EexAXZIRKXvQawUFC2KD%2BMy6Ehi1SP&X-Amz-Signature=f809b0925d244efca1dbe7ce2e67b6d8e206a7463f7441ed00e07b5b755e057f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> Grenade에서 사용했던 파티클을 그대로 사용했고 Simulation Space를  Local에서 Word로 바꿨고 Emission의 Rate Over Distance를 조절해서 폭발을 구현했다
>
>


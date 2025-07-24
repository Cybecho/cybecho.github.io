---
title: "유니티 3D게임 쿼드뷰 13"
date: 2023-02-24T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에 대한 내용으로, gameObject.layer를 변경하여 충돌 설정, 보스 패턴 구현, 확률 설정 및 버그 해결 방법을 다룹니다. 또한, 부모 클래스의 Awake() 메서드 문제와 해결책, 보스의 다양한 공격 메커니즘 구현에 대한 코드 예시가 포함되어 있습니다."
notion_id: "fad748f6-bb6f-458e-8989-81b1bbf80599"
notion_url: "https://www.notion.so/3D-13-fad748f6bb6f458e898981b1bbf80599"
---

# 유니티 3D게임 쿼드뷰 13

> **Summary**
> 유니티 3D 게임 개발에 대한 내용으로, gameObject.layer를 변경하여 충돌 설정, 보스 패턴 구현, 확률 설정 및 버그 해결 방법을 다룹니다. 또한, 부모 클래스의 Awake() 메서드 문제와 해결책, 보스의 다양한 공격 메커니즘 구현에 대한 코드 예시가 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7JlujO3JYas&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

> 🔥 **gameObject.layer = 14; 이런느낌으로  레이어를 변경해서 특정 레이어와 충돌하게하거나 하지않게 만들어서 관리할 수 있다**

> 🔥 **상속을 받더라도 부모의 스크립트의 변수가 public 이여야만 자식 스크립트에서 사용이 가능합니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/96e55ed8-6e13-45a6-a55a-f48ee311e192/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOH6KA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDP1tGBcXDx0CKc64ste1cs24yccDshjxnRkOdwe6ooxAIhAPsBxDS8MUXkovCmKk5hXhmLEEyDhhFXt6TA7ozw%2B%2BnkKv8DCC0QABoMNjM3NDIzMTgzODA1IgxBF8diWvKbbpVqo7Mq3AOSicDaMkPL4Cnmo2PuammPWMbd9NNNQ2BiwY9ES5Tvzg9dujFsvf50Nt5IpqNMiRBXXwJh%2BFdnI0qkrt1t5KmYqkO7cv0r%2BxkmZCGAOubhejK6vdxA%2FX42J%2BbnaCYHnUMq%2FdHUhboQGtIJWiUHO95voad%2FR%2FC%2B25aopW%2FoT7nuuZ1Us%2FxG7NBqIfmd5YVvpFSSuQ%2FMzlT1Vdya86as9x0%2B42W0nlf5TgYxgnlfVdMbKfhDKSR0gD6JBOjBraILmpkqv7AXGh0njUsKTij36ToIVD05TEJU48ZK18YhKn8BEO3%2BgdEaQfLPIrZFLnUuSlCRQZQuhsMpNBC5DmAXutHEfEcS3zcVjgL32FARJTnfpvOfCHxvGnnjPmW%2FrRGYqvfaoBSrjMCBOk9X1vo6rLWZOMD5Md18KkTtBffmsBCB5YNcxhhKkXIc7X7NmG%2BIhgxNdwbwuX6UlKrJQ7%2F9BKt9BGn4TiSZ%2Fsng%2BorwlSmCEdlRLxMpt6O6DzUaWM24p62dLslgkv4gg7UnMIkNBjnNQX%2BzlwcaerKNfxyaicg9ilp5H%2BqtwCi5Q0Pl7Hn5AszjGIRES7hT1HbWa5l63UDU4RHuKWqDEhU8lDL2GhRkRmM%2BhHD%2F%2FaIDIMFkTzDmv4jEBjqkAd%2BPQrRigeZTinq%2BhtGhZDmENsQ%2BwA4n2DFW%2BwILhwxqbJXWAYnTP0B%2BDY8CRCpsvTISO7BIg6BQHMdQGGBdhH1aCpuuHv%2B9foWNVael5DmL4pdrgyjXfo4lL60waQ5bdQj5yZxnzLLtNgkMCpW5OyHyw8gsQAVwPQTzBvkH8kvL7Q7JCI86TdrmvpwOux1Z3Vz36lXmhcLlgQHg4CdQQlYigQXD&X-Amz-Signature=873858a8836b3b324a6e0bbc8316e97af1f469d24025e7fdfa0147503abff30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46525853-760a-4ba5-9b0a-15d8b83ac8e4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOH6KA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDP1tGBcXDx0CKc64ste1cs24yccDshjxnRkOdwe6ooxAIhAPsBxDS8MUXkovCmKk5hXhmLEEyDhhFXt6TA7ozw%2B%2BnkKv8DCC0QABoMNjM3NDIzMTgzODA1IgxBF8diWvKbbpVqo7Mq3AOSicDaMkPL4Cnmo2PuammPWMbd9NNNQ2BiwY9ES5Tvzg9dujFsvf50Nt5IpqNMiRBXXwJh%2BFdnI0qkrt1t5KmYqkO7cv0r%2BxkmZCGAOubhejK6vdxA%2FX42J%2BbnaCYHnUMq%2FdHUhboQGtIJWiUHO95voad%2FR%2FC%2B25aopW%2FoT7nuuZ1Us%2FxG7NBqIfmd5YVvpFSSuQ%2FMzlT1Vdya86as9x0%2B42W0nlf5TgYxgnlfVdMbKfhDKSR0gD6JBOjBraILmpkqv7AXGh0njUsKTij36ToIVD05TEJU48ZK18YhKn8BEO3%2BgdEaQfLPIrZFLnUuSlCRQZQuhsMpNBC5DmAXutHEfEcS3zcVjgL32FARJTnfpvOfCHxvGnnjPmW%2FrRGYqvfaoBSrjMCBOk9X1vo6rLWZOMD5Md18KkTtBffmsBCB5YNcxhhKkXIc7X7NmG%2BIhgxNdwbwuX6UlKrJQ7%2F9BKt9BGn4TiSZ%2Fsng%2BorwlSmCEdlRLxMpt6O6DzUaWM24p62dLslgkv4gg7UnMIkNBjnNQX%2BzlwcaerKNfxyaicg9ilp5H%2BqtwCi5Q0Pl7Hn5AszjGIRES7hT1HbWa5l63UDU4RHuKWqDEhU8lDL2GhRkRmM%2BhHD%2F%2FaIDIMFkTzDmv4jEBjqkAd%2BPQrRigeZTinq%2BhtGhZDmENsQ%2BwA4n2DFW%2BwILhwxqbJXWAYnTP0B%2BDY8CRCpsvTISO7BIg6BQHMdQGGBdhH1aCpuuHv%2B9foWNVael5DmL4pdrgyjXfo4lL60waQ5bdQj5yZxnzLLtNgkMCpW5OyHyw8gsQAVwPQTzBvkH8kvL7Q7JCI86TdrmvpwOux1Z3Vz36lXmhcLlgQHg4CdQQlYigQXD&X-Amz-Signature=a7e7fa33bea65abf42cba8802055b52b61dd7ecf98cb72a8f6f0352d2bf55b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **보스패턴 구현**
> Think() 에서 랜덤한 분기점에 따라서 코루틴을 불러오고 불러온 코루틴이 끝나면 코루틴 내부에서 다시 Think()를 불러와 다시금 프로그램이 실행될 수 있도록 코드를 구현
>
>
> ### Case를 n개 이상 겹치게하여 확률을 높임
> 총 5개중 40퍼확률로 미사일발사 , 돌굴러가는패턴, 20퍼확률로 점프공격
>
> ```c#
> //Boss.cs
>
> IEnumerator Think()
>     {
>         yield return new WaitForSeconds(0.1f); //생각하는 시간 길수록 보스가 쉬워진다
>
>         //랜덤으로 0~4값이 랜덤액션값에 들어간다
>         //보스가 랜덤값에 따라 다른 패턴을 가지기 위함이다
>         **int ranAction = Random.Range(0,5);
>         switch (ranAction)**
>         {
>
>             case 0:
>             case 1:
>                 //미사일 발사 패턴
>                 StartCoroutine(MissileShot());
>                 break;
>             case 2:
>             case 3:
>                 //돌 굴러가는 패턴
>                 StartCoroutine(RockShot());
>                 break;
>             case 4:
>                 //점프 공격 패턴
>                 StartCoroutine(Taunt());
>                 break;
>         }
>     }
>
>     IEnumerator MissileShot()
>     {
>         anim.SetTrigger("doShot");
>         yield return new WaitForSeconds(2.5f);
>
>         **StartCoroutine(Think());**
>     }
>
>     IEnumerator RockShot()
>     {
>         anim.SetTrigger("doBigShot");
>         yield return new WaitForSeconds(3f);
>
>         StartCoroutine(Think());
>     }
>
>     IEnumerator Taunt()
>     {
>         anim.SetTrigger("doTaunt");
>         yield return new WaitForSeconds(3f);
>
>         StartCoroutine(Think());
>     }
> ```
>
>

> 🔥 **근데 이렇게 짜면 어미클래스인 Enemy에서 초기화 한 컴포넌트정보가 제대로 들어가있지 않는다 왜그럴까?**
> ### 이유는 자식함수의 Awake()는 자식 클래스’만’ 단독실행 하기 때문에 어미클래스의 Awake()는 제대로 실행되지 않습니다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d05de353-8b84-42f8-9b5a-8e36f73ba209/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDSDR73%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDJ3sdlEOZcOFD4YJ2eXLmGHgxKJyo87sa50zdzl6j7cAiBi9O%2BgtIeT9XlX1XT8FGxK75K6%2B%2Bq6N0dwt2AgVZmdjSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BqUYGyYJKxGwvhZ0KtwDs%2BUGWpWEBSAUVpn%2FnB3%2B7keNAvix2AomXxS8N1SAu3B9iuZe14u8eYZtXo7RKQvSPa8dolJFuAL8CKH5h9cqnovlstIcG8UPUaSuVTRiHXrNJHOYfB%2FoCtUCIDieA9mYx%2Fdm0WSLQgp70185BZU09JoGY7OeQxlaEikzfCOidMb6EjI37sicU1zALRoD6hFH1W9yhH%2FE2SP693TFqr3f7XdEsu6xk37gXkX%2Fn9BDd9jvHB40ezGcFywWb6oB2f1VpMJ9L15HtrfMhDnPmhH34OGsg5eEGp8A4jWY9OPW8jFdQphkCZ0yrBaaivUy0MhJQHHHj%2BV%2BTzh2mmplSwfqLTR9KIel3FwzuiE2vW6FmMwakSoBhdO5eaasSMu5Be9kuCQiQii3tpXFDYrYxMg5sUC%2FLgRPlz79B6QlQ1M55AV9zW98jWfCgN%2Fyq1FhDTxFDUHP51tFmQuZzMZx4Vz9PYXrovbbETkNmpInmVOW2IOUwiB9Mm%2FgeoIUyPJHIYlCSSsnHTu8qy%2F1sUZAO7qVhXNIK%2BnaPNkHeUArZxlIOTRwUCfhuqzmN5Ra9VcJpUAYr53FkQ9mW5dSLqPLv1eOcGFgxJrZD3%2FMSzYg7%2BHiIvwO8VyC1zlrISPuyIQwwr%2BIxAY6pgHcMatoUXGBxl%2BQdm%2BAr6phJk1kvXWYY0dc5V%2BlarOiCtzjQveon5cZbyoyXVAQO1gMVg5I5tRYIWk2X%2B5U2YMp2LjOGNxqsBiSc45svlPEEXm6VtOy6%2BZb6iOQHWshOiyU4V%2F19kXWphaLWKNBOpgA8d11xPKBKgPXM3hQazm2g1PLbRHCkGClPIzG9094n5g1cP4QBIfl0UWS0%2FreePlQx5uC2F66&X-Amz-Signature=4c6cb330438ff97d54656b360ef048880d03b9101e82dce3ed6a02c45bfdc852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> //Enemy.cs
> void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         boxCollider = GetComponent<BoxCollider>();
>         meshs = GetComponentsInChildren<MeshRenderer>();
>         nav = GetComponent<NavMeshAgent>();
>         anim = GetComponentInChildren<Animator>();
>         if(enemyType != Type.D)
>             Invoke("ChaseStart",2); //추격하는 함수를 2초뒤에 실행한다
>     }
> ```
>
> # 해결방법(택1)
>
> - 어미클래스의 Awake() 를 Start() 로 바꿔준다
>   - 이 방법은 기존에 Awake()로 작업했던 코드들과 충돌을해 문제가 있을수도 있으니 조심 
> - **어미클래스의 내용을 자식클래스에도 그대로 붙여넣는다**
>   - 이 방법이 제일 안전
>

> 🔥 **보스 스킬들 구현**
> > 🔥 **보스 미사일발사공격 매커니즘 구현**
> > ```c#
> > //Boss.cs
> >
> > IEnumerator MissileShot()
> >     {
> >         //애니메이션 실행
> >         anim.SetTrigger("doShot");
> >
> >         //첫번째 미사일 발사 코드
> >         yield return new WaitForSeconds(0.2f);
> >         **//Instantiate(인스턴트할 오브젝트, 인스턴트 생성 위치, 인스턴트 생성 각도)**
> >         GameObject instantMissileA = **Instantiate**(missile, missilePortA.position, missilePortA.rotation);
> >         BossMissile bossMissileA = instantMissileA.GetComponent<BossMissile>();
> >         bossMissileA.target = target; //미사일의 타겟에 현재클래스의 타겟을 담는다
> >
> >         //두번째 미사일 발사 코드
> >         yield return new WaitForSeconds(0.3f);
> >         //Instantiate(인스턴트할 오브젝트, 인스턴트 생성 위치, 인스턴트 생성 각도)
> >         GameObject instantMissileB = Instantiate(missile, missilePortB.position, missilePortB.rotation);
> >         BossMissile bossMissileB = instantMissileB.GetComponent<BossMissile>();
> >         bossMissileB.target = target; //미사일의 타겟에 현재클래스의 타겟을 담는다
> >
> >         yield return new WaitForSeconds(2f);
> >
> >         StartCoroutine(Think());
> >     }
> > ```
> >
> >
>
> > 🔥 **보스 돌 발사 구현**
> > ```c#
> > //Boss.cs
> >
> > IEnumerator RockShot()
> >     {
> >         //기를 모을땐 플레이어를 바라보는것을 중지시킨다
> >         isLook = false;
> >         anim.SetTrigger("doBigShot");
> >         //인스턴트를 생서할 오브젝트를 bullet에 저장하였고, 그 bullet의 pos값과 rotate 값을 그대로 받아오겠다는 뜻
> >         Instantiate(bullet, transform.position, transform.rotation);
> >         yield return new WaitForSeconds(3f);
> >
> > 				isLook = true;
> >         StartCoroutine(Think());
> >     }
> > ```
> >
> >
>
> > 🔥 **보스 점프공격 구현**
> > ```c#
> > IEnumerator Taunt()
> >     {
> >         //내려찍을 위치를 받기 위해 점프공격 위치를 변수에 저장
> >         //점프상태일때 타겟을 바라보면 어색하니 잠시 isLook을 끔
> >         //타겟의 위치와 바라보는 위치값을 더함
> >         tauntVec = target.position + lookVec;
> >
> >         isLook = false;
> >         nav.isStopped = false; //네비게이션이 다시 작동합니다
> >         boxCollider.enabled = false; //공중에 있을때 콜라이더가 충돌하여 데미지를 입지 않게
> >         anim.SetTrigger("doTaunt");
> >
> >         //1.5초 지나면 공격범위 활성화
> >         yield return new WaitForSeconds(1.5f);
> >         meleeArea.enabled = true;
> >
> >         yield return new WaitForSeconds(0.5f);
> >         meleeArea.enabled = false;
> >
> >         //공격이 끝났으니 다시 원래대로
> >         yield return new WaitForSeconds(1f);
> >         isLook = true;
> >         nav.isStopped = true; //네비게이션이 종료됩니다
> >         boxCollider.enabled = true; //공중에 있을때 콜라이더가 충돌하여 데미지를 입지 않게
> >         StartCoroutine(Think());
> >     }
> > ```
> >
> >
>
>

> 🔥 **StopAllCoroutines() = 모든 코루틴이 break되며 코드가 끝난다**
> ```c#
> //Boss.cs
>
> void Update()
>     {
>         if (isDead)
>         {
>             StopAllCoroutines();
> 						return;
>         }
> 		}
> ```
>
>

> 🔥 **MeleeArea와 충돌했을때 버그나는 이유는 MeleeArea에 Bullet을 넣지 않았기 때문…**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6cbd6267-d0f7-4db4-8e2e-d29008486f7b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBL3QY6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG1d2IXA83mrDUR6Twp%2B%2F18jxe9V23BTLCQrP3P6lHgDAiEArRM%2BJrzEXiXZgDzca8E5CSRAPlTsDLsGjy3cHN5F3%2F0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC1GZYt6tpVUZ7y6zCrcA3olJVwNBs4kk6YpmAe4kHe2lpviDM8vRmYxkmDkmCBJKEnhFX3pO03%2BvJrZJtIqy1qtuwhHN9BOBrFKtqOp0kkaKyasTNc%2FwqC1egHVZbTVFgBcq348UIk9s4O3ihI2xm3DOmdOH73hhSGllRZfyIx%2Bnzo43VEtbHcVCAnBISz6IN3d7FEjQ1tyEXqNP%2Fk4Rd9WuPcQeqFwVyzsGZXqAE8d8wtGOgCuBHnpqS1XsTb3hXFAQRtld55qFXwEjwq%2BlIf5q3ldl6G9knq0UJOH21QYU%2BdqWfjApeGUsgOgzz3hFrdSi%2FXjqpy6ciQX1CJ%2FvmGPRGYfyq3sE8xPNHLOkhwk1cYM1YA%2B1L%2FiVHmsWlAifImU9zzciS%2F9jhk3g4%2Fc8eFwDzhyMW5IL%2BTMQm%2BPv3aA%2By%2F8ET5IBEi%2BwNlJqLZTkjej3f9S%2Bw19m0Cz6hz6uwlnhWjnjdK3v1LXmEIdpi9s%2BdjY4%2FyL%2FgTN6VxaH2pOfgaAmziHoJOQxSoHRxsqdqP%2BJP8SCbIUZ71cmcG4hJElc64o%2FVYTVN8et54PIaKYcrMpGwM2QVpVRr%2FxWisfmyxB2w235TqLzRCR1HAiQKQlJospJmsFVNTM5L0rcukYQRyWLF3zMuGINPsoMPm%2BiMQGOqUBS4cCAEc7Y5Pl6T0A7T95go7s9X1kQnBiXjbpEhx1sWb6gFNyq4e5PqR9TttLDmdwOXdS9LrVEoZQEyBXnLR5zw3yrLrBp2rNDgL4oL43R6ZurK%2F0qOnZ%2BbMvTmi2V6wSDwc4TS2NspsLs8hLtZfY6Y9B9o7e0gWX2JBcaGIlMhJnp1ypROybejdksVJHHAV%2FRV5jqqf0%2FCaH0SxMuYluLrxcFr%2BV&X-Amz-Signature=deec60ea69c2c7dcdf6b227c3e1752cf78393987248b50387aceda11886bad6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/34a9776b-7cc5-494d-adec-80cd520604ab/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBL3QY6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG1d2IXA83mrDUR6Twp%2B%2F18jxe9V23BTLCQrP3P6lHgDAiEArRM%2BJrzEXiXZgDzca8E5CSRAPlTsDLsGjy3cHN5F3%2F0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC1GZYt6tpVUZ7y6zCrcA3olJVwNBs4kk6YpmAe4kHe2lpviDM8vRmYxkmDkmCBJKEnhFX3pO03%2BvJrZJtIqy1qtuwhHN9BOBrFKtqOp0kkaKyasTNc%2FwqC1egHVZbTVFgBcq348UIk9s4O3ihI2xm3DOmdOH73hhSGllRZfyIx%2Bnzo43VEtbHcVCAnBISz6IN3d7FEjQ1tyEXqNP%2Fk4Rd9WuPcQeqFwVyzsGZXqAE8d8wtGOgCuBHnpqS1XsTb3hXFAQRtld55qFXwEjwq%2BlIf5q3ldl6G9knq0UJOH21QYU%2BdqWfjApeGUsgOgzz3hFrdSi%2FXjqpy6ciQX1CJ%2FvmGPRGYfyq3sE8xPNHLOkhwk1cYM1YA%2B1L%2FiVHmsWlAifImU9zzciS%2F9jhk3g4%2Fc8eFwDzhyMW5IL%2BTMQm%2BPv3aA%2By%2F8ET5IBEi%2BwNlJqLZTkjej3f9S%2Bw19m0Cz6hz6uwlnhWjnjdK3v1LXmEIdpi9s%2BdjY4%2FyL%2FgTN6VxaH2pOfgaAmziHoJOQxSoHRxsqdqP%2BJP8SCbIUZ71cmcG4hJElc64o%2FVYTVN8et54PIaKYcrMpGwM2QVpVRr%2FxWisfmyxB2w235TqLzRCR1HAiQKQlJospJmsFVNTM5L0rcukYQRyWLF3zMuGINPsoMPm%2BiMQGOqUBS4cCAEc7Y5Pl6T0A7T95go7s9X1kQnBiXjbpEhx1sWb6gFNyq4e5PqR9TttLDmdwOXdS9LrVEoZQEyBXnLR5zw3yrLrBp2rNDgL4oL43R6ZurK%2F0qOnZ%2BbMvTmi2V6wSDwc4TS2NspsLs8hLtZfY6Y9B9o7e0gWX2JBcaGIlMhJnp1ypROybejdksVJHHAV%2FRV5jqqf0%2FCaH0SxMuYluLrxcFr%2BV&X-Amz-Signature=b8e86e755ec1845cc65b52c8bbc38cee219a1c3dea2b7b641d477af81f08a773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **보스에게 공격당했을 때 Player 넉백구현**
> [other.name](http://other.name/) 으로 네임태그로 오브젝트를 불러올 수 있구나
>
> ```c#
> //player.cs
>
> void OnTriggerEnter(Collider other)
>     {
>         else if(other.tag == "EnemyBullet")
>         {   if(!isDamage)
>             {
>                 Bullet_Enemy enemyBullet = other.GetComponent<Bullet_Enemy>();
>                 health -= enemyBullet.damage;
>
>                 bool isBossAtk = **other.name** == "Boss Melee Area";
>                 StartCoroutine(OnDamage(isBossAtk));
>             }
>         }
>     }
>     IEnumerator OnDamage(bool isBossAtk) //플레이어가 적의 총알의 데미지를 입었을 때
>     {
>         //보스공격을 맞았을땐 그냥 뒤로 넉백을 줘버리자
>         if(isBossAtk)
>             rigid.AddForce(transform.forward * -25, ForceMode.Impulse);
>
>     }
> ```
>
>


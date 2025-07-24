---
title: "유니티 3D게임 쿼드뷰 13"
date: 2023-02-24T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임에서 충돌 설정, 보스 패턴 구현, 미사일 발사 및 점프 공격 메커니즘을 포함한 다양한 기능을 설명하며, 부모 클래스의 Awake() 메서드 문제 해결 방법도 제시합니다."
notion_id: "fad748f6-bb6f-458e-8989-81b1bbf80599"
notion_url: "https://www.notion.so/3D-13-fad748f6bb6f458e898981b1bbf80599"
---

# 유니티 3D게임 쿼드뷰 13

> **Summary**
> 유니티 3D 게임에서 충돌 설정, 보스 패턴 구현, 미사일 발사 및 점프 공격 메커니즘을 포함한 다양한 기능을 설명하며, 부모 클래스의 Awake() 메서드 문제 해결 방법도 제시합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7JlujO3JYas&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

> 🔥 **gameObject.layer = 14; 이런느낌으로  레이어를 변경해서 특정 레이어와 충돌하게하거나 하지않게 만들어서 관리할 수 있다**

> 🔥 **상속을 받더라도 부모의 스크립트의 변수가 public 이여야만 자식 스크립트에서 사용이 가능합니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/96e55ed8-6e13-45a6-a55a-f48ee311e192/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5PCFCG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDv35DldeBXzg3xA%2BgqH4i7gXcRtRthcuK4t8dY%2FMiT2AiBUxkVLbEjpb%2BUMZuyuVMGniU7dSKcuVSpeQMpKlKLstCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMQaZi%2BIw2ntcL9zTBKtwDGdzzb7CC5XOWwc1mGLALqyC0p3CFTt7oH1IgoTzCm1OQYPzJUxu9aJsv3vmucEdUwN5TwwfY%2FuiFZ3CVKg9QHA7CWMcGxM4112UmNUXQvgWQ6OHC4cnUCEHVYxprOQEi%2FV7OBbwzwZntoPYSE4vSeqr69QXQjcVhsxMDewosAKlW%2ByZ8N9OyQyRR3Cfe%2Fgr5EGZOxlfzVkxLIuf0Ek8FTdN1nAIkyZAsa9UfodhusrXd3WHzbR6Oi%2FGDiRZAHg2WB2A1cu7L9TYRxa0Uagq%2BReKaHBeTJU98JN1%2B2NcsyaMSDQ79DDzxIY1TszFTI5lBdAykoP8KkLCpfW3%2FX9ufiqpg2Cff02XsCX6zohMbQNc%2Bii4y%2BXnv1oAWkLImI%2FeVnqH6EEfxh6C4UsH0pcIL3yX0rw%2BTbkS%2B2ba6yNKFcdpfzj6AE8dbkETDX6lVumYvYAun%2F3T6ABkJpN7ok3bJwaZXzxrb4dpaJlRE3AX5QiHPShE1FCWIB%2BXtCTSkdwTet2GmUYuI5UVBjlz9aKB5hAulxhvhuyswJGsYyk73k%2B1g3HWDanXa51HhGI4ebUKtJqIuA%2BMZ%2Fv25ViyCgRawLgzXzlDQJkTeIbSxcOXhuV%2FMQOSUbadDpMr7y94ws%2FaHxAY6pgFGsfq2Kv1CFe%2FSDs0%2BANoaLkYss72b0m6wIyD8QZwY7IJ8F8xFAGVjMGR6MH32wGTPC%2F3cTiS1uc9Y3l%2BChsXaOy4nLntBYNpQgkQM6uom18K4FH1%2BW2ID1UncmNKj4JDPAku3Z%2Fjb3FtXI2TDotPc0oTLQmaVGfZB8ivtc%2BQl%2FtJZApnLTi6vftYnl6LsetAoczkBR2BvPGtBFLWqfx2NrWfoP%2FCb&X-Amz-Signature=2de6af7b0028a1a741001f36022c88a291ee77058813a2342072090ca1603343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46525853-760a-4ba5-9b0a-15d8b83ac8e4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5PCFCG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDv35DldeBXzg3xA%2BgqH4i7gXcRtRthcuK4t8dY%2FMiT2AiBUxkVLbEjpb%2BUMZuyuVMGniU7dSKcuVSpeQMpKlKLstCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMQaZi%2BIw2ntcL9zTBKtwDGdzzb7CC5XOWwc1mGLALqyC0p3CFTt7oH1IgoTzCm1OQYPzJUxu9aJsv3vmucEdUwN5TwwfY%2FuiFZ3CVKg9QHA7CWMcGxM4112UmNUXQvgWQ6OHC4cnUCEHVYxprOQEi%2FV7OBbwzwZntoPYSE4vSeqr69QXQjcVhsxMDewosAKlW%2ByZ8N9OyQyRR3Cfe%2Fgr5EGZOxlfzVkxLIuf0Ek8FTdN1nAIkyZAsa9UfodhusrXd3WHzbR6Oi%2FGDiRZAHg2WB2A1cu7L9TYRxa0Uagq%2BReKaHBeTJU98JN1%2B2NcsyaMSDQ79DDzxIY1TszFTI5lBdAykoP8KkLCpfW3%2FX9ufiqpg2Cff02XsCX6zohMbQNc%2Bii4y%2BXnv1oAWkLImI%2FeVnqH6EEfxh6C4UsH0pcIL3yX0rw%2BTbkS%2B2ba6yNKFcdpfzj6AE8dbkETDX6lVumYvYAun%2F3T6ABkJpN7ok3bJwaZXzxrb4dpaJlRE3AX5QiHPShE1FCWIB%2BXtCTSkdwTet2GmUYuI5UVBjlz9aKB5hAulxhvhuyswJGsYyk73k%2B1g3HWDanXa51HhGI4ebUKtJqIuA%2BMZ%2Fv25ViyCgRawLgzXzlDQJkTeIbSxcOXhuV%2FMQOSUbadDpMr7y94ws%2FaHxAY6pgFGsfq2Kv1CFe%2FSDs0%2BANoaLkYss72b0m6wIyD8QZwY7IJ8F8xFAGVjMGR6MH32wGTPC%2F3cTiS1uc9Y3l%2BChsXaOy4nLntBYNpQgkQM6uom18K4FH1%2BW2ID1UncmNKj4JDPAku3Z%2Fjb3FtXI2TDotPc0oTLQmaVGfZB8ivtc%2BQl%2FtJZApnLTi6vftYnl6LsetAoczkBR2BvPGtBFLWqfx2NrWfoP%2FCb&X-Amz-Signature=8260ca94ab40d11604464bf2ca2f49307e8aafd3da9b08acf3f82383368d68c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d05de353-8b84-42f8-9b5a-8e36f73ba209/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652THRJVA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHyNeRch15Rrw%2FQQSVFbaOWjhFHvbhpj1ayKgo0ltoASAiEA%2BEu005is8bu47%2BAuWxx6Lx2WQL3bu0C0SkYNEQbh9BUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHQ9JGwytzDnZBHFvSrcA0U2%2Fj6VwN9VYt28E8pXQxKt6m9xpJ%2FCWfuKw6ziS5jfkxc4WWuswVGJH4pYDNGxjrtkdfKFD9wEGSjgSSEHvMbGR2BXOO4CmT53Lw44kgqsbJ9q4XUry%2BEBx11AzpoIxg9HhHn%2FNkivo7jGslu2QjtNZEoujXK8OVcTfodRlHOgJq4kDWOcxEH%2FjnE3CyrmtPmvP%2F%2Fglawv5ZkvZOlOrHSIPHfYyqAF0WsFbpF2eJH%2B77tv4VGGmGsAw%2F927dT59XrmGH1sMuVRmIgTVngQgAQAVmahVEqOymQByFW4IOR6uLi7Snv9kKIreQRYOp%2FFfwnmlbcFn8S0ybrz15aylPXjrWsOjz1WEgvcZTlynbHUR4XMjbHlzMp%2FQl7oNNWPq4k%2BwfjWtb9zA3bxxtVJO4mmh5uLNTo%2FwmfaM2kvzkzh0xSfdARyy3moVjR3LU%2BPvRjXXn%2FFA8wTWkjMMO%2F6JM%2Ftb0cXYdGF8qE%2B6FYB7oq1e6vyZWuoaztnY5gM7VYhccHS6TGybnETp0704PMw4IwRtwvrd9dh9CL663d6RzbaQ2IOWAf8rKBhrnQCjXIltA2vDbAt3BCD%2F3ctqF1lgkQ6jkWAoGIYUP6ilh%2BDvE5GKIrz8%2F%2FCqxd0K%2FktMJT1h8QGOqUBjKdIACuK8dHoIcTUMmw7Rz%2Ff1jZ9LIHbb4YRCoum2SFwDX0lYVW2DcIirslSSe4%2FHaabmK%2BeiLW51%2Fa6S9r982oK2N9BNxJ2UhGv9E8xe7Sg3dsraL9BZ8BSbCaj6optTVLnAT9zzDA5hv0nJb56hZv7VYD8KSLbSJavevHfpEJNIgnYE0HnTPGr%2BhUVBEw9XKvqPjrKL13QxtyZr4O89k429byG&X-Amz-Signature=2599444b57b8ee65223890284cb117bc256920ae1c565fc392fcf3d5f5d42449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6cbd6267-d0f7-4db4-8e2e-d29008486f7b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SYGOYQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDvG%2BTzLtvMiYDf8F3enby9VX%2Bv3pD%2FRUER%2B4KKAhODqAiBLKxXNXiI%2Bs7ROvekWp7zc1xeMsHt9ToX5L4f6rIVtOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMib3jiT91iJzXzwaAKtwDPk1c6YWJ8JGkxmb%2B6Y3dnle325c37mLVrNQ0RFB%2BkW2Xgk80uSFqZUhbj1CUDt0J9NDbfTwdlekOEu2LpBS%2FxF5OCRV8z%2FabuUiDz%2BdJ87YUhOUeqG0i%2FCEkT1Gr6Q8rCONrvBNRdmgbwhrFOozaWWmbGbHOxTx%2BxMNkC1iaB9V8k5DX3ffnZ9hoK8SxARo%2BW1cWcvLhWUHXQtiJi7zHrrq4dxhycGxbQZBhU1AkDX3CuDiB6RvYzz9MSJRYSDUF2kz7mJReL5YaQDMZmWvrr63SNbMJ0K1gM5RFFcExV2JGCPc5Lbf9lqMAU8hXNRkvszZTq7XkgSFLmjuOy2vE3cAHlPwSz84qDcdandA%2FjHvGpq%2Fes4tBl%2BUnDmuHuQjf0gGUGTaVY%2FJFha0cGw3DExVhRqXsLt4%2B4uw4nAK5b6KXQVedg4bpt61bkYAMjYaq2B33Ke16hWAtEoNt3PElYM%2B7FrqpqW%2B4z8S2IT5jpitfDEDPSiYehyfa2yIT74AWnpgr1bx7iwub59DwJMQP%2Fbr4O1sisl6lCJAUsYohSNOpCQT1u2W0n52GvjJkJ%2BPtlDjB%2BFpfvBfmUxIDETcgIAU%2F16VHC3JOqaHEEHF9haNdCNtU9kdUh0bQRuIwgPaHxAY6pgEHRNS7nkuZ8rOMevgxkGny7JgPUtqqZYgJeO0woZ2BCqY9uPS7CzKTxD310u0VhMuNEzDbd7mZ1oet1CB%2BvqbgR659E7CcBWf2Fb3djLjcTc5HUE4UYZXXa3WiCnk1PUEh73PED%2Fu9y2AC16Kkbam%2FEaYWblXEEpA6Tmed7wsu0Qhwyhk5P4SZRqAkZhWyiRXZxfJ%2BWp76Su%2BEwrk0NC5U4OAfmYDM&X-Amz-Signature=8f87030b5842b6cc62de2ba4b2e1b91b008851b1d7cf11fb6f22f954060aaa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/34a9776b-7cc5-494d-adec-80cd520604ab/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SYGOYQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDvG%2BTzLtvMiYDf8F3enby9VX%2Bv3pD%2FRUER%2B4KKAhODqAiBLKxXNXiI%2Bs7ROvekWp7zc1xeMsHt9ToX5L4f6rIVtOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMib3jiT91iJzXzwaAKtwDPk1c6YWJ8JGkxmb%2B6Y3dnle325c37mLVrNQ0RFB%2BkW2Xgk80uSFqZUhbj1CUDt0J9NDbfTwdlekOEu2LpBS%2FxF5OCRV8z%2FabuUiDz%2BdJ87YUhOUeqG0i%2FCEkT1Gr6Q8rCONrvBNRdmgbwhrFOozaWWmbGbHOxTx%2BxMNkC1iaB9V8k5DX3ffnZ9hoK8SxARo%2BW1cWcvLhWUHXQtiJi7zHrrq4dxhycGxbQZBhU1AkDX3CuDiB6RvYzz9MSJRYSDUF2kz7mJReL5YaQDMZmWvrr63SNbMJ0K1gM5RFFcExV2JGCPc5Lbf9lqMAU8hXNRkvszZTq7XkgSFLmjuOy2vE3cAHlPwSz84qDcdandA%2FjHvGpq%2Fes4tBl%2BUnDmuHuQjf0gGUGTaVY%2FJFha0cGw3DExVhRqXsLt4%2B4uw4nAK5b6KXQVedg4bpt61bkYAMjYaq2B33Ke16hWAtEoNt3PElYM%2B7FrqpqW%2B4z8S2IT5jpitfDEDPSiYehyfa2yIT74AWnpgr1bx7iwub59DwJMQP%2Fbr4O1sisl6lCJAUsYohSNOpCQT1u2W0n52GvjJkJ%2BPtlDjB%2BFpfvBfmUxIDETcgIAU%2F16VHC3JOqaHEEHF9haNdCNtU9kdUh0bQRuIwgPaHxAY6pgEHRNS7nkuZ8rOMevgxkGny7JgPUtqqZYgJeO0woZ2BCqY9uPS7CzKTxD310u0VhMuNEzDbd7mZ1oet1CB%2BvqbgR659E7CcBWf2Fb3djLjcTc5HUE4UYZXXa3WiCnk1PUEh73PED%2Fu9y2AC16Kkbam%2FEaYWblXEEpA6Tmed7wsu0Qhwyhk5P4SZRqAkZhWyiRXZxfJ%2BWp76Su%2BEwrk0NC5U4OAfmYDM&X-Amz-Signature=a588cae186b1c252a1033757a44269f31ac1c6edfc47d0e2e29f9079f635b2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


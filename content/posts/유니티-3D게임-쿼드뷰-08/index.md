---
title: "유니티 3D게임 쿼드뷰 08"
date: 2023-02-15T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "수류탄 구현 및 폭발 기능을 위한 C# 코드 예시를 제공하며, 수류탄의 투척, 폭발 후 효과, 적에게 데미지를 주는 방법을 설명한다. 또한, 적의 반응을 다르게 설정하고 Rigidbody의 회전 고정을 조정하는 방법도 포함되어 있다."
notion_id: "6e9fae20-0009-4d3d-b7b9-3a03586b41d6"
notion_url: "https://www.notion.so/3D-08-6e9fae2000094d3db7b93a03586b41d6"
---

# 유니티 3D게임 쿼드뷰 08

> **Summary**
> 수류탄 구현 및 폭발 기능을 위한 C# 코드 예시를 제공하며, 수류탄의 투척, 폭발 후 효과, 적에게 데미지를 주는 방법을 설명한다. 또한, 적의 반응을 다르게 설정하고 Rigidbody의 회전 고정을 조정하는 방법도 포함되어 있다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=FyJYWRIq0Ss&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=10)

> 🔥 **수류탄 구현**
> ```c#
> //player.cs
>
> public GameObject grenadeObjects; //던져질 수류탄 오브젝트
>
> void Grenade()
>     {
>         if(hasGrenades == 0)
>             return;
>         if(gDown && !isReroad && !isSwap)
>         {
> /*수류탄 투척 위치 코드*/
>             Ray ray = followCamera.ScreenPointToRay(Input.mousePosition); //스크린에서 월드로 Ray를 쏘는 함수
>             RaycastHit rayHit;
>
>             //레이케스트 함수에서 ray가 어딘가에 닿았다면 rayHit에 저장해준다. 이때 저장할때 쓰는 함수가 바로 out
>             if(Physics.Raycast(ray, out rayHit, 100)) //out : return 처럼 반환값을 주어진 변수에 저장하는 키워드
>             {
>                 //RaytHit의 마우스 클릭 위치를 활용하여 회전을 구현
>                 //히트의 포인트가 있는데 ray가 닿았던 지점이다. 그곳에서 플레이어의 위치를 빼면 상대 위치가 나온다
>                 Vector3 nextVec = rayHit.point - transform.position;
>                 nextVec.y = 10; //던지는 효과가 나도록 높이값인 y를 높게 고정한다
>                 //그 위치로 플레이어가 돌아보면 된다
>
> /*수류탄 날라댕기는 부분 코드*/
>                 GameObject instantGrenade = Instantiate(grenadeObjects, transform.position, transform.rotation);
>                 Rigidbody rigidGrenade = instantGrenade.GetComponent<Rigidbody>();
>                 rigidGrenade.AddForce(nextVec, ForceMode.Impulse);
>                 rigidGrenade.AddTorque(Vector3.back * 10, ForceMode.Impulse);
>
> /*수류탄 사용 완료 코드*/
>                 hasGrenades--; //보유 수류탄 -1
>                 grenades[hasGrenades].SetActive(false); //공전 수류탄 수도 hasGrenades값 참조하여 비활성화
>             }
>         }
>     }
> ```
>
>

> 🔥 **수류탄 폭발 구현**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5957cf1f-0087-4039-88cc-ee213f82fa02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3TXFID%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfuV%2B2h5xw%2Fvsli9UHdSrSZYXVbN7i0rw1sYggw0g3BQIhALjHFpJn9F87e3O8IPq4M004XMP29F9J3sIVkoPfMu6uKv8DCC0QABoMNjM3NDIzMTgzODA1IgwPTo2V%2FAYC%2FHoFRGIq3APBITxFwnsTIDu5pFVvxTMMcM84s1LeyiL4EGJqAmFP%2FwG7WB%2FZpNrj%2FpXj0QElFyjjVr2vOIF3zLkLJBlRoyhJgPZHq9BvOm%2FdTcFyN8hOCWOUUS5goOcfSYqwKhoc4ncYsvqoqy6TJADmBoscDJWk9enFSQwggUVtFYPBydVJYpE%2Fh5faU7eUD9a0WmbbCxM4kk5zXrR9gexVWldoJT1A8wEzbiSvQnmszXKCq9rbZ6sCoW7zOJSVC4cBh4GOL%2FInL0viiXo9RDAQ80UaBBq8QR5c2IM19b41r%2B3HyszYR7irEUofJxER3E3vJ%2B7gzy%2FkEkBKPu01HfkU6JQ%2FatTdore%2FQ2RYD4iBvafft5yIqBMlWpjfbFYg3jHuSkcWgdaMY3rZyTGSoQZgK%2B%2B8ddKzS6dn3jy7SC1%2BjaDsaadyByLEhFf%2FgF73OcKTz7PPEqnlpOdN%2B%2F8UARyVCNnWQYdGe4lOFN%2FmCc2qSL6dLVotETrReLw7YmMlPilvBA1%2BUdA6wJwH7Zqjo4MNmB1WUAur7%2BrEEYw%2Bd5FYAP%2F6ffFjp25w0fgXmFA%2B8mw%2B6Tplpn3nJLoanGuo8Xu%2BxJGd%2FNPia6sDW5x5q8lnRwd%2BDCSohby%2BA2ST4oCcuLukZjCCv4jEBjqkAUEk4u9dyFn3DpV%2BMFdVZNSRixONpKh9hK7eQQfEyfFN1Cz86yGDROIPl5sj%2FQr6DlLK38Lp985U%2Bw0H2OIoWvXXIKvZXdIP%2FoXhP%2ByZXhAXHouxIn278NkOso1mYaB8xWXpT6EoiMfJIPnsfJi6LYGzbTUPp5uh9chXf%2FLi5sBIkacb8m9FGDCdKS1Ct4Ylp9zh%2BWYNJ5FC8NQxlBjUZP3PqJHq&X-Amz-Signature=3f0cee0be6259625939ebb804719b49665d1894d84ed4fb0cfa17459777a0cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> //Grenade.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Grenade : MonoBehaviour
> {
>     public GameObject maeshObj;
>     public GameObject effectObj;
>     public Rigidbody rigid;
>
>     // Start is called before the first frame update
>     void Start()
>     {
>         StartCoroutine(Explosion());
>     }
>
>     IEnumerator Explosion()
>     {
>         //3초 뒤 코드 실행
>         yield return new WaitForSeconds(3f);
>
>         //기존에 가지고있던 postions값과 rotation값을 초기화시켜준다
>         rigid.velocity = Vector3.zero;
>         rigid.angularVelocity = Vector3.zero;
>
>         //메쉬오브젝트는 안보이게설정하고 이펙트오브젝트는 보이게 설정한다
>         maeshObj.SetActive(false);
>         effectObj.SetActive(true);
>     }
> }
> ```
>
>

> 🔥 **Enemy에게 데미지를 주기위해 HitByGrenade라는 함수를 새로 호출하고 Enemy.cs에서 함수를 public으로 생성해준다**
> ```c#
> //Grenade.cs
>
> //rayHits[] 배열 안에있는 Enemy태그가 붙어있는 넘들
> //foreach 문으로 수류탄 범위 적들의 피격함수 호출
> foreach (RaycastHit hitObj in rayHits)
> {
>     hitObj.transform.GetComponent<Enemy>().**HitByGrenade**(transform.position);
> }
> ```
>
> ```c#
> //Enemy.cs
>
> public void HitByGrenade(Vector3 explosionPos)
> {
>     curHealth -= 100;
>     Vector3 reactVec = transform.position - explosionPos; //현재값에서 폭발범위 위치값을 뺴줌
>     StartCoroutine(OnDamage(reactVec, true));
> }
> ```
>
>

> 🔥 **총알맞았을때랑 폭탄맞았을때 넉백판정을 다르게 설정한다
또 OnDamge()에 인자도 추가하여 기존 코드에 인자로 true 혹은 false를 넣어둬서 수류탄공격인지 아닌지 설정한다**
> ```c#
> //Enemy.cs
>
> public void HitByGrenade(Vector3 explosionPos)
> {
>     curHealth -= 100;
>     Vector3 reactVec = transform.position - explosionPos; //현재값에서 폭발범위 위치값을 뺴줌
>     StartCoroutine(OnDamage(reactVec, **true**));
> }
>
> IEnumerator OnDamage(Vector3 reactVec, **bool isGrenade**)
> {
>     mat.color = Color.red;
>     reactVec = reactVec.normalized;
>     reactVec += Vector3.up;
>     rigid.AddForce(reactVec * 3, ForceMode.Impulse);
>     yield return new WaitForSeconds(0.1f);
>
>     if(curHealth > 0)
>     {
>         mat.color = Color.white;
>     }
>     else
>     {
>         mat.color = Color.gray;
>         gameObject.layer = 14;
>
>         **//수류탄에 피격되었을때
>         if (isGrenade)
>         {
>             reactVec = reactVec.normalized;
>             reactVec += Vector3.up * 3;
>
>             rigid.freezeRotation = false; //충돌해서 회전하는거 막았던거 해제
>             rigid.AddForce(reactVec * 5, ForceMode.Impulse); //위치값 이동
>             rigid.AddTorque(reactVec * 15, ForceMode.Impulse); //회전값
>         }**
>         //총알에 피격되었을때
>         else
>         {
>             reactVec = reactVec.normalized;
>             reactVec += Vector3.up;
>             rigid.AddForce(reactVec * 5, ForceMode.Impulse);
>         }
>
>         yield return new WaitForSeconds(1.0f);
>         boxCollider.enabled = false;
>         Destroy(gameObject, 1);
>     }
> }
> ```
>
> > 🔥 **rigidbody.**freezeRotation** = false / true ;**
> > 플레이어랑 충돌해서 혼자 돌지말라고 고정옵션 켜뒀던거 끄는함수
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/397f2557-d345-48bd-83af-e6a111a050aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GERDN6X%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDuPbPRVN4zVG3GeuuElkjqDSJSiaOsCTxxWZBsrZvuuwIhAMw%2FN05x9naf6pHyrbdHZq7MCYGeuXCwOebatyTk78PZKv8DCC0QABoMNjM3NDIzMTgzODA1IgyyixcnJdpnj6ejQtAq3AMcbNcIhiHQ0o7qLpwPCWTq3RCTvCrAAqDIi3UDy3JRk4p2GaKQ6fihNAPSf1iGCZ15ZTqpds1IDPKj6T5N3TEj8eYIzksS97T1WHl1d%2F1Kb1r%2FJBrV%2Bp1pCDpnOZ0gcMZbUh4OoEExu0EIQBeHUvvMC2%2B7UNF7K13n83dLXvXKK34UuoL2fn%2BblQP%2F%2FoUrxouz91IUL%2BT6ZHdVtwGgVMlDLTje%2BfrK80zeeH2TJxCm7TEhUJ69ShOJrHF4nkYVdDoUYs7jQDqSvf0FvWj86%2Fs6z8I%2F1p71PryxWhCZv7TZ0LBwKl3LY2n4zGk%2BoVi8sofW7SoLjU61Vi4b0v3RrJK8HC%2BXyEAHMWSbVJhhebNvv%2Fc5C%2ByVj4u%2BXDeINWpoxynIbfxpa1CuX1ZbgIv4z0qam7Cm0PL1Xq4i4h7nB9%2BUoPXzh9oA1H7L4tudz%2FIR0MatdoJsCXThff203cv%2FfkVDq5%2FIx1Jz7pXeidWEPaxXA0hdy%2B5eWjMYx3RJyTqnuLJ%2Bt5DpK2MhljdDLVgLacQVSb9qRaKvqjqBdSUY1GMR98HIA6UeqhxBO1DcZmRRb2DX%2FjBEaeb2B8hEWgev8DONDEwYYRmNPjiCx70BuBOsAQn8hcXhjB7OVcPdzTD5vojEBjqkAUj06HXeCU%2BIb6rvXeob4dtkFeUKcSBA0TQNeAlcjcTZCMUpF%2BlVstwxY%2B490Dw9nCaShsYcJ0KYSEYUh2U4GtZf3KVOq2566DyF1Db1CYMNrUXubil4aII8eONFlCxMi1UlYhkIxwN1qtdYBSs4bccfhi%2FgnHv91X3LgjqOX7IDC%2BBDz%2BgrEuwn6BJUV05h8b3oGamBSL3AvoyPiaV3708By5xG&X-Amz-Signature=5bad2c64d7e90fe0b37318613ae46d7b4d74f54209f8d34af871486774642d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
>

> 🔥 **그리고 마지막으로 Grenade.cs의 Explosion() 에서 Destroy로 프리팹 삭제**
> ```c#
> IEnumerator Explosion()
> {
>     //3초 뒤 코드 실행
>     yield return new WaitForSeconds(3f);
>
>     //기존에 가지고있던 postions값과 rotation값을 초기화시켜준다
>     rigid.velocity = Vector3.zero;
>     rigid.angularVelocity = Vector3.zero;
>
>     //메쉬오브젝트는 안보이게설정하고 이펙트오브젝트는 보이게 설정한다
>     maeshObj.SetActive(false);
>     effectObj.SetActive(true);
>
>     //부피가 있는 레이케스트를 활용하여 피격범위 설정
>     //범위내에있는놈들 싹다 죽여야하기때문에 배열로 생성
>     //SphereCastAll(시작위치,반지름,레이케스트발사방향,레이케스트길이,레이어마스크) 구체모양의 레이캐스팅
>     RaycastHit[] rayHits = Physics.SphereCastAll(transform.position, 15,Vector3.up,0,LayerMask.GetMask("Enemy"));
>
>     //rayHits[] 배열 안에있는 Enemy태그가 붙어있는 넘들
>     //foreach 문으로 수류탄 범위 적들의 피격함수 호출
>     foreach (RaycastHit hitObj in rayHits)
>     {
>         hitObj.transform.GetComponent<Enemy>().HitByGrenade(transform.position);
>     }
>     **Destroy(gameObject,5);**
> }
> ```
>
>


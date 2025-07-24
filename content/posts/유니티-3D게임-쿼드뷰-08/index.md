---
title: "유니티 3D게임 쿼드뷰 08"
date: 2023-02-15T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "수류탄 구현 및 폭발 기능을 Unity 3D 게임에 추가하는 방법을 설명하며, 수류탄 투척, 폭발 후 적에게 피해를 주는 코드와 물리적 반응을 설정하는 내용을 포함하고 있다."
notion_id: "6e9fae20-0009-4d3d-b7b9-3a03586b41d6"
notion_url: "https://www.notion.so/3D-08-6e9fae2000094d3db7b93a03586b41d6"
---

# 유니티 3D게임 쿼드뷰 08

> **Summary**
> 수류탄 구현 및 폭발 기능을 Unity 3D 게임에 추가하는 방법을 설명하며, 수류탄 투척, 폭발 후 적에게 피해를 주는 코드와 물리적 반응을 설정하는 내용을 포함하고 있다.

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5957cf1f-0087-4039-88cc-ee213f82fa02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267ZD7CM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAncT6aar%2FZE8ErSh%2B92boM%2B6JbiDw1cuJWhyFlbbNK0AiEAqJ%2BakmnQYzMo%2BERTJknI8s97D9qoGBbkstJYJoXqnd4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJn8qGs3cRFHqA01WCrcA2BxLlSTrQ67aGgY%2B6oUD2drkWPdqcp5mJJp9eyUAlHS9jExtpbSkSXjelpTc3Lh0tFhN9kMjn9gpwKwP6Vh5dL%2BiF7dBA7294FtoUsBvPk91goYWkh%2B5rVRXwXGPy6Cy%2BsoJHsE3pc%2B1PlFh3xtqELkaI6mEyh5ZFWHDfdpFaSIEOVtppNbpAt0J3ikcuphJzB%2B9gyzObGjwvzxe9rtCPjqyHMy2V%2FLx7oDdBbnJrZpDoGkRBWYHPRhJ02ltOCJkNhTCZxMmiB7uuUplfutAjHzrI5I02W4s09MpeCW6ZOgywXceCKlyNkBMXJkEW60nHaTo73EZCExoJ4PRYyv8X4pYvucH0mz%2BG2Rfn3gGCdq7ltBr3JFxvrWbm9M%2FYSUCOPk0jBMGRVClByoRGQ3KhJ1VtL%2Fg7J6WOvTxvvL%2Ble9wlS0ud9vsgaZDT5Eo8m7zq78NTzZ83O79TGdkdhJmbDDuqneXdm2r%2BpnQjWna53W6sZ9lHEhVdJiCQhgkUJxyvCRgt83f0uDlPf%2BkGA48zV1p0GWqNwyaXa%2BVfQtCycUhNkYHhLDPkkvJ%2B624fZ5EgJM5l94KnCJJXJaY7prpdDnFpVw6kQTs4A%2Fyavb8KuXOuaDAJ0UnlvumXLjMMX2h8QGOqUByiLWABrWV2BZ1e4M9XVa0Z2kL9B0QeJFq3rpBLpKy03wNcgjTCAivXdSPBQNdoPULs90x%2BZrIaxROM0VcL9x8L6juE674hPSX4oqel2Ujv8q6ISvobdNyHj07GwbF5AlSjzoyTfX4KetdFFmmy%2FyXZc69uI4p0CBp%2FCNqbKHqpfzvgPTRda4hD5JVl%2Fu0gNSTvGUxtoWia8lc4na%2FPpYSsdxq7KE&X-Amz-Signature=540c499048beb9dc509e333148af983b26c762e566959b9ffd6faebf4e80925e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/397f2557-d345-48bd-83af-e6a111a050aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMVKXK6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGdH0OG0%2FJWsI9s6X8dX2RNpnFlhpo3byE2gYiqTsqWDAiAlvmCq5F0aixyMMz1lbfWkJvyDilzj1oT5cht%2BGjFtPSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdrTqVCgAZ5BavYvwKtwDmXjb%2BTtr5nNU73dI22DqRIXe9qqrErT9kZGCMbhaa6bNHdiHwSvXk7JuTTMxJgtOtbdmu%2Btu%2BOzyZVxcgrsSFk2CZrBSb5Gdjb4xC%2FV4oWactYTJpUSTz6c5SYJtKvu9484%2FY8sS2or5wgScP2rdxwZg1%2BXVhUXiuhrwkVzJsGRfTPNYw%2BBSw0By7lzaBEawDcBOQn%2FKrqzJ0ou%2FuOluoRl%2BZxdInUZzAE1Jh4P8vL4xNy49rbbACszeghzPLN7Xvzc7sXJUT%2BvfYyLcMOPh7GE8JespiFnG4OThBnXA%2ForNHd31ckeX%2Bl3zp8wRgoaTMkmx9%2BZaqBrG5x3OaKv1CMY5RGBCunVXDHm85YCbw56URN1mOqpcvNfyLLaLjspBSPjFijDUQ03R0TPgu9A0uh67YEt0SyuxIPBwuRISUt1Bt%2F8tNlTlulZra9qB%2FGs4p2Yi6PKpUheRYMv0JIR4HBuuS%2BjEyoTHB3YWkPXJDSA9SP4VbcLxR7TWEmbuuxap9JAyKwboFQjI1QTD6a%2FL5zZXWuDxrN1nhCMNJXA8sJGaPGhCTWgGUFpCTfc9YBQENaOxcjB05e22UGIjFtuIiE0GIPN9LCNIaO99kWjcuyyVyBkkWgerFGDpHiswmfaHxAY6pgFcKqo9oySJb6sBZmZ39dIJGhZaCy77P8%2FCq9SNAle6Zml1fs2gROLo6QgEUxSdgn3PkSNFghTQQro9Ayea6CKd7ODd1GWBvPeu3uVUlPo4Hd6IScc2CR8a6rV1QLVFR9iDncvHZ%2FBtyNAHSjoSzEYWu1XNu4R%2FIl2tPQII6tfLP4o2Duiw0MFoSTiI977Fzrqvgag7nDGmgVFF%2Ft%2FP0FJyHTh59hhU&X-Amz-Signature=8def5a06942779ad3cd74e6242cd2348627bbb9a8bfd660362087c036e2d786c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


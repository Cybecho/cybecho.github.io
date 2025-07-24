---
title: "유니티 3D게임 쿼드뷰 12"
date: 2023-02-23T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에서 클래스 상속, 보스 구현, 코루틴 사용법, 물체 크기 조정, 메쉬 색상 변경 및 플레이어 방향 예측 방법을 설명합니다. 랜덤과 스위치문을 활용한 보스 패턴 개발도 포함되어 있습니다."
notion_id: "58df85f9-7db2-460f-9d28-c50ddbea8630"
notion_url: "https://www.notion.so/3D-12-58df85f97db2460f9d28c50ddbea8630"
---

# 유니티 3D게임 쿼드뷰 12

> **Summary**
> 유니티 3D 게임 개발에서 클래스 상속, 보스 구현, 코루틴 사용법, 물체 크기 조정, 메쉬 색상 변경 및 플레이어 방향 예측 방법을 설명합니다. 랜덤과 스위치문을 활용한 보스 패턴 개발도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7JlujO3JYas&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

> 🔥 **11분부터 파티클설정에대한 내용을 복습합니다**

> 🔥 **클래스 상속하는 방법**
> ## **public class (스크립트이름) : (상속받을 스크립트)**
>
> ```c#
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> **public class BossMissile : Bullet**
> {
>     void Awake()
>     {
>
>     }
>
>     void Update() 
>     {
>
>     }
>
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/35a8b0b6-e49c-4415-a120-d74b8e780238/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NZF2SB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCTGLoH%2B6SoG9ipOqKTO%2F1c7XmKvVh3fkmBYmeE5i%2BXewIgC8xB7WyvCzMOu8%2B8A0lvOaZaoIxHXrh8lfIzg6UJZ0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJumECtGb8jahZ1QQyrcAyVgMCKrNmbAFE73KJXO0RvXVjcjZnFKtmPDVcxEFVRNBzNfpZ9AraHn%2BJy0KfUmBYeF%2FNZGc40zCA4ZqIILLP4aQBtYFm72JsvL7UbOrN1Zn1GXMzR8V8SDqbvSMxDQrE7l9szfU%2B08gLQktbohdwEZ1o1KUAdL%2BYu1%2B549Dpzbp8KdwNF64ZBFNK3hgg1TMiaM7owPlV%2BGOampkiX7Fbt94I7EJbbBsLCpe0Uo8iy13iBv%2FYdzi4t760u3BYScY%2FuOz92kDaoc4TQ2TFVCg2DVz6tzdIeAdSGyo4eN5VydA2K8fC0dnBA3hhfzzZznpYJVjBYOSd8Vcff%2FmEOZAUPjkGw6s3ovTCfs75FFmNwkrB2vj2aHAxMAxsFpiE%2FIiAG7ddCFBzacXmzDST8jYOkYy60mNBilFf39%2FMuLuoHSpUaWHyKWnSnlLHPb0f0JbjfGxNTy0BvmL1piVGcXcAbFpZDAdCd2R%2F4o1kXN2Ag6Hk6mQyGvyuotu4xAz4mv5P9hQ8fS8A1NohhR7QYvhy8Fb5kdrttA26r%2FcviDTfqfPsQHXbbmBeAZ5obId4n6xEU1HA4v65zhrzWbKgsGIvAlwaPsIqJEA2epNxGF5AVkKIBvP2PvGkdFH%2B03MMz2h8QGOqUBVGMko2vboYw0slLS850upt9Yb%2Bspl0bMIcWCOibm1cvgHWRXtHvLIngJsXcZYoeDOsrYzN266us3tOzeD%2BrEHC4sDBbKmlge2KDsNyb9X6EolsjO%2BfYaJfzFHmHcxm6HItPZgVZOGVUqVOHZHCBUub%2FwksClM7TDqglWFCu0hzLaX5DL6PjovMtWzCjxYzouXTaCAqLDitmjkelaOt6l1aF7IErP&X-Amz-Signature=aaec943e21969a8c349581254c61d28cad6632e6e48fa1193a1e834b22293e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **보스 바위공격 구현**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/aedf3814-9764-4a47-8146-2df19fb9a9dc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFTE4QQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDEuiolbxWajleK1vWeQqdTrZpxTMDrJB3Z1oWGf4WwFQIhAI30v7pfhw2hf4DnfYjpDg76n9wzQ3i1%2BUfW4Hxg8wrmKv8DCCoQABoMNjM3NDIzMTgzODA1IgzbAK3G0X04va65mZkq3AMv9lFxz2DFduQAqluKWgsqE7NJyiI0MTaw%2F5wmfdzG%2B5eAYHmWkBQcuyO6laa8AUFL%2FLseJfS3yQAaiXPHu0vlV1fLcfNa%2Fk3YHQlJ3C8FtKVxNVXWmLFTaQCRrAx91limyaEtCKzXBNKvBodM%2Ftmja5SNED2Ewmd%2BNSzFZezAFwAtI%2BXWwlx3sv2uvyL%2BO7EzPAEtsed4q%2FSyA5vVDFZTjho5byvbrACqEBbq2v%2FOeCqM5WZ7DJywJzyVXdwQG2rCfqUqiRgOnVOmqy3Y8RYPSN%2BuuyuFH9Fiu8fScx3UVgnzr5qpz5LIMVvNOLpbL%2Bdd20UFRwopmCbr5xhQHu3xm5mDySXxZLmxU%2BPP0eivnNYufUlq3LfWbRivSKqEZZGMnhQ%2FLP66womzOuxktBho6sgSwDREht%2FIa860%2B4aU6Wxq33t7ih655N28d8DlnDav5Vx7Trlie4R7I81HxjTq6g8gBZaMX%2FzOtaspnvOzL3n37RnylJtgxBmq6Zq%2B6Yl6OYSqMe6SHb3ERV8Pz2tgpeoJ4yPOiq01TS2q2bWhr0nmlzQgFV6deJ3AfmQ2r1WNPcnh3sRcRlTs49PNGsJ3vgi%2FuN6HKIZMo4qOFAjAkENQ6Vgjqy%2FijFTP6jCT9YfEBjqkAbtd3tMBLPPnq3Hf4RVcrJ2QSuI3tvQXHqzXKUPqfPSsulc6%2BMxOaYyMu2uFuRRWkO2G3g5COWl8fF0laccqwh%2BK9Ew3qiwo4oloKH50Q4Gr6DxwOvbTj4v1ogD7iALnG9Xq7nrDMqg%2FjkTArw%2FluidhnaSEY7dUoiBcCDWBYqg%2FaC5EIP%2F9MGht3jDpuVTf9nVUELrcaZuwEczCbu0sIzLCZdX8&X-Amz-Signature=8585eb8006381a5fd071fd201805358a36a5cdcbe0986b7681157eb0c2c03f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **enum 추가하여 몬스터의 분기점 추가**
> ```c#
> //Bullet_Enermy.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Bullet_Enemy : MonoBehaviour
> {
>     public int damage;
>     public GameObject effectObj; //폭발이펙트
>     public GameObject maeshObj; //미사일오브젝트 등록
>     **public enum Type {Melee, Range, Boss};**
>     public Type type;
>     void OnCollisionEnter(Collision collision)
>     {
>         //몬스터 A,B 전용
>         **if(type == Type.Melee)**
>         {
>             if(collision.gameObject.tag == "Floor")
>             {
>                 Debug.Log("몬스터 Floor와 충돌");
>             }
>             else if(collision.gameObject.tag == "Wall")
>             {
>                 Debug.Log("몬스터 Wall와 충돌");
>             }
>         }
>         //몬스터 C 전용 (미사일에 Destroy를 사용하기 위함)
>         **else if (type == Type.Range || type == Type.Boss )**
>         {
>             if(collision.gameObject.tag == "Floor")
>             {
>                 Destroy(gameObject, 2);
>             }
>             else if(collision.gameObject.tag == "Wall")
>             {
>                 Destroy(gameObject, 2);
>             }
>         }
>
>     }
>
>     void OnTriggerEnter(Collider other) 
>     {
>         //몬스터 A,B 전용
>         **if(type == Type.Melee)**
>         {    
>             if(other.gameObject.tag == "Floor")
>             {
>                 Debug.Log("몬스터 Floor와 충돌");
>             }
>             else if(other.gameObject.tag == "Wall")
>             {
>                 Debug.Log("몬스터 Wall와 충돌");
>             }
>             else if(other.gameObject.tag == "Player")
>             {
>                 Debug.Log("몬스터 플레이어와 충돌");
>             }
>         }
>         //몬스터 C 전용 (미사일에 Destroy를 사용하기 위함)
>        ** else if (type == Type.Range || type == Type.Boss )**
>         {
>             if(other.gameObject.tag == "Floor")
>             {
>                 Destroy(gameObject);
>             }
>             else if(other.gameObject.tag == "Wall")
>             {
>                 Destroy(gameObject);
>             }
>             else if(other.gameObject.tag == "Player")
>             {
>                 Debug.Log("몬스터 미사일 플레이어와 충돌");
>                 maeshObj.SetActive(false);
>                 effectObj.SetActive(true);
>                 Destroy(gameObject,2f);
>             }
>         }
>
>     }
>
> }
> ```
>
>

> 🔥 ****코루틴의 while 문 안에는 yield return 딜레이를 주지 않으면 오류가 발생한다****
> ## 코루틴 While문에는 꼭 yield return null; 포함
>
> ```c#
> //GainPower에서 계속 기를 모으고있음
>     IEnumerator GainPower()
>     {
>         //isShoot이 트루가 아닐때까지 반복
>         //while 문 안에는 yield return null; 딜레이를 주지 않으면 오류가 발생한다
>         while(!isShoot)
>         {
> 						yield return null;
>         }
>     }
> ```
>
>

> 🔥 **transform.localScale = Vector3.one * scaleValue;**
> ## `transform.localScale = Vector3.one * scaleValue;`
>
>
> > 🔥 ****locaslScale?****
> > `Transform.localScale`은 게임오브젝트의 **상대적인 크기**를 나타냅니다.게임오브젝트의 부모가 있을 경우 부모를 기준으로 상대적인 크기를 나타냅니다. 부모의 크기가 변경되면 자식의 크기도 변경됩니다. `Transform.localScale`에 `Vector3`를 대입하면 크기가 변경됩니다.
> >
> > 부모가 없을 경우에는 `Transform.lossyScale`과 동일합니다. 만약 부모의 `localScale`이 `(2, 2, 2)` 이고 자식의 `localScale`이 `(1, 1, 1)` 이라면 자식의 절대적인 크기는 `(2, 2, 2)`가 됩니다.
> >
> >
>
> > 🔥 ****Vector3.one?****
> >
>
>

> 🔥 **몬스터도 피격당했을때 모든 메쉬 머터리얼 변경되도록 하는 방법은 Material을 사용하는것이 아니라 플레이어처럼 `MeshRenderer[]`로 material을 설정해준다**
> ```c#
> //Enemy.cs
>
> MeshRenderer[] meshs;
> meshs = GetComponent**s**InChildren<MeshRenderer>();
>
> //복수형 유의...
>
> IEnumerator OnDamage(Vector3 reactVec, bool isGrenade)
>     {
>         **foreach (MeshRenderer mesh in meshs)
>             mesh.material.color = Color.red;**
>         reactVec = reactVec.normalized;
>         reactVec += Vector3.up;
>         rigid.AddForce(reactVec * 3, ForceMode.Impulse);
>         yield return new WaitForSeconds(0.1f);
>
>         if(curHealth > 0)
>         {
>             **foreach (MeshRenderer mesh in meshs)
>                 mesh.material.color = Color.white;**
>         }
>         else
>         {
>             **foreach (MeshRenderer mesh in meshs)
>                 mesh.material.color = Color.gray;**
>             gameObject.layer = 14;
>             isChase = false; //추격함수를 종료
>             nav.enabled = false; //네비게이션 컴포넌트도 비활성화
>             anim.SetTrigger("doDie"); //사망 애니메이션 포함
>             //수류탄에 피격되었을때
>             if (isGrenade)
>             {
>                 reactVec = reactVec.normalized;
>                 reactVec += Vector3.up * 3;
>
>                 rigid.freezeRotation = false; //충돌해서 회전하는거 막았던거 해제
>                 rigid.AddForce(reactVec * 5, ForceMode.Impulse); //위치값 이동
>                 rigid.AddTorque(reactVec * 15, ForceMode.Impulse); //회전값
>             }
>             //총알에 피격되었을때
>             else
>             {
>                 reactVec = reactVec.normalized;
>                 reactVec += Vector3.up;
>                 rigid.AddForce(reactVec * 5, ForceMode.Impulse);
>             }
>
>             yield return new WaitForSeconds(1.0f);
>             boxCollider.enabled = false;
>
>             if(enemyType == Type.D)
>                 Destroy(gameObject, 2);
>         }
>     }
>
> //foreach로 묶어버리고 mesh.material.color 로 코드 전부 변경
> ```
>
>

> 🔥 **Boss 플레이어 방향 예측하기**
> **1. Input.GetAxis(string name)**
>
> - 1.0f 부터 1.0f 까지의 범위의 값을 반환한다. 즉, 부드러운 이동이 필요한 경우에 사용된다.
> **2. Input.GetAxisRaw(string name)**
>
> - 1, 0, 1 세 가지 값 중 하나가 반환된다. 키보드 값을 눌렀을 때 즉시 반응해야한다면 GetAxisRaw를 사용하면 된다.
> ```c#
> //Boss.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Boss : Enemy
> {
>     public GameObject missile;
>     public Transform missilePortA;
>     public Transform missilePortB;
>
>     //플레이어의 이동방향을 예측하는 변수
>     Vector3 lookVec;
>     Vector3 tauntVec;
>     bool isLook;
>
>     void Start()
>     {
>         isLook = true;
>     }
>
>     void Update()
>     {
>         if(isLook)
>         {
>             float h = Input.GetAxisRaw("Horizontal");
>             float v = Input.GetAxisRaw("Vertical");
>             //얼마나 예측할것인가? (5) 만큼 예측하겠다
>             lookVec = new Vector3(h,0,v) * 5f;
>             transform.LookAt(target.position + lookVec);
>         }
>     }
> }
> ```
>
>

> 🔥 **보스 패턴 개발은 Random과 Switch문을 활용합니다**
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
>         switch (ranAction)
>         {
>             case 0:
>                 break;**
>             case 1:
>                 break;
>             case 2:
>                 break;
>             case 3:
>                 break;
>             case 4:
>                 break;
>         }
> ```
>
>


---
title: "유니티 로그라이크 09"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "회전 근접무기를 구현하기 위해 Bullet.cs와 Enemy.cs를 수정하는 방법에 대해 설명합니다. Bullet 클래스는 피해량을 초기화하는 Init 함수를 포함하고, Enemy 클래스는 OnTriggerEnter2D 메서드를 통해 플레이어의 무기와 충돌 시 피해를 처리합니다."
notion_id: "90c181ee-53bf-4741-8094-1b362cee236e"
notion_url: "https://www.notion.so/09-90c181ee53bf474180941b362cee236e"
---

# 유니티 로그라이크 09

> **Summary**
> 회전 근접무기를 구현하기 위해 Bullet.cs와 Enemy.cs를 수정하는 방법에 대해 설명합니다. Bullet 클래스는 피해량을 초기화하는 Init 함수를 포함하고, Enemy 클래스는 OnTriggerEnter2D 메서드를 통해 플레이어의 무기와 충돌 시 피해를 처리합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7342e0f9-722f-4da5-92bc-994eb5973b92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADHXTZ7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF0BnPIUl%2FnbxCNUbW6LzWylNW3Z5d95D2qKj3QGS9jDAiBhaghiQ6CkZ6oi2Z%2B%2B%2BKu9grUpMLdnTwNgJ9L1fguAECr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMXCXYz1ggbaIfiUozKtwDvL4EpjsLGwhqpXoQqXPfJBq4mCB%2FdrMD%2B0d%2B33E2%2FMgf50Zrnb4ASADPMjB5HmSJV%2BOVFCj3xYfv8vorEkKVOgf5EKVv%2Bbh%2FugLHAtnrhigmcJO0i3W8SEG%2FVMuMaFGp8AQKMS3L7n16nJL3lkXRCFhHrp978wBVmquxD7FlTWT83a2nkHHqCqTpPGOsFpt16Q4UAlUfbx%2Bejs%2B3jSHmEAEp6kMhEXIURaM993mAcoqdcHyEr9bJ8ARflSx%2FVST4TfcpQ0m1mOUWqOOHZi1MBg%2B1dqMojTd0di%2FKJiFaFbvZljwU9I9AM6FSZmqT9q%2Fqj8IdCagdzlnv5Pu7chLtUViO4DQui26jjATi%2FqW9%2FPi6BwNdcKmOPfTvhNFqckl8Qt%2FV7ugcKtZs1pYYbfEtuEpkujkNXT6jVQ%2FjtmFd%2F05GKWBxYyqBrfrFq1JTHnT%2FvWd6%2B5z6OACJvJxRAnxUOCG0qFcCONZS1EeX%2FxcrYS8HJP9IUOUnXXWWYdu8mPrD1XAAHRrcGTpHuOVnLQiKLIzB4f%2FramIOVP3J2C5IidSqo8FqUIm%2Ba2X%2FlUAPVNGCTuZnFfviKiUxxSTCfXUfqc1eq%2FaShR6lQPv6yoE7fakOVMvuLjs%2BLnB%2F6oQw%2Bb6IxAY6pgGB2FqfaMCmZP%2B5qOYFtz36GICGYvd2x0KoUmURwSSLLQmoaZCcfvSqKk%2FOSNBbWcukkIFF2MPrV35Qhg6C%2FjZ%2BhE3wjCPcU8Pc9AzbkbXWhaRm1xiJpRA4lpsR5nZZbXGKL7lHDSZAwZToBvEQU3v0P7oF06VhtfuLFSpZ6NBoH1SMhAxdgf7f%2FpmcIElaEf9839KkwFwe%2FChOi3sDbsXbia32qV9G&X-Amz-Signature=30efbcd9b8bf9d7997952a9718373a601d1df10de62480e6655c4e94dcbcf98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **회전하는 근접무기의 Tag는  Bullet으로 설정해두고 Bullet.cs를 수정해볼까요**
> ```c#
> **//Bullet.cs**
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Bullet : MonoBehaviour
> {
>     public float damage;
>     public int per;
>
>     //Initialize(초기화) 함수
>     public void Init(float damage, int per)
>     {
>         **//this는 곧 Bullet.cs
>         //매개변수의 damage와 this.damage 는 엄연히 다른 변수
>         this.damage = damage;**
>     }
> }
> ```
>
>

> 🔥 **Enemy.cs 도 함께 수정해야해요**
> ```c#
> **//Enemy.cs**
>
> void **OnTriggerEnter2D**(Collider2D collision) 
>     {
>         //플레이어의 무기에 충돌했을때만 코드가 실행
>         //Bullet 태그와 충돌하지 않았으면 코드가 if문을 만나기때문에 코드가 종료됨
>         if(!collision.CompareTag("Bullet"))
>             return;
>
>         //자신과 닿은 콜라이더안에 컴포넌트 Bullet을 불러와 그 속에있는 damage변수의 크기만큼 자신의 피를 깎는다
>         health -= collision.GetComponent<Bullet>().damage;
>
>         if (health > 0)
>         {
>             // ... 살아있음
>         }
>         else
>         {
>             // ... 죽음
>             Dead();
>         }
>     }
>
>     void Dead()
>     {
>         **//죽은상태는 곧 몬스터 프리팹의 비활성화
>         //파괴를하면 안된다 프리팹은 계속 재활용할것이기 때문에
>         gameObject.SetActive(false);**
>     }
> ```
>
>


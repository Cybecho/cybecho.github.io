---
title: "유니티 로그라이크 09"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "회전 근접무기를 구현하기 위해 Bullet.cs와 Enemy.cs를 수정하는 방법을 설명합니다. Bullet 태그를 사용하여 적의 체력을 감소시키는 코드와 초기화 함수의 사용법을 다룹니다."
notion_id: "90c181ee-53bf-4741-8094-1b362cee236e"
notion_url: "https://www.notion.so/09-90c181ee53bf474180941b362cee236e"
---

# 유니티 로그라이크 09

> **Summary**
> 회전 근접무기를 구현하기 위해 Bullet.cs와 Enemy.cs를 수정하는 방법을 설명합니다. Bullet 태그를 사용하여 적의 체력을 감소시키는 코드와 초기화 함수의 사용법을 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7342e0f9-722f-4da5-92bc-994eb5973b92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KGG5RS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDlApUlzyUqmzdSlaHO%2Fm4ffG%2FGoQuW%2BKjupcM0IpmBegIhAIvUACtn8lkvcUSEYJeFB8EtlVrTHt7oXQVcQTASemsHKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOv%2BGoXRL4Q8bplGQq3AOGvmB3mSCVA1KeKXJLzFNv9iU%2BpEZLbLzXd83yVyaAd73BR2FqMlsCl3aLbPccAD4qck1wdR%2BCk9FGLh40%2FaGjrbNBB9ZiWOOmZVnUeJvG39oAM0clyx3P7sl3GIpsJpcuNdzVgF4O7PidCkbb7xnIJBoo7kvSmYYzZZNSCNsBhth7bqCwqn%2BRi%2B0vSz3NDsGkwJ1Z0Au4lLKPl6VIqf7OQyyV6G5HPhqnuc1USdncQ80dHhnFx%2B28BVohpIrKH%2F%2BKVrsIXwCOkJ0mdzNB1KbPLrI156kOM5%2F7aYiE90BLK1oEBBJanu2XS%2BMlofmiLjBOOr1dwfqhX%2FyQosCO7iezlsagN6gCL%2BHOqnYTF9QDGllO98gz5k5pwgYURvdRj6FvHl3yrpL34Snz0OgiV19LAcXLAEzVr%2BAHw5nEvZqvQ0RcfsK5VC8PSSjmdVwiOE6Tf6PiomQbNWYDUH2I3dacL08F8mQrCFChZ%2FA79Bx0RSE5mz749XyRHIo3K%2FB1eL9CKUEZwXJ6LF0A5hHgwC4bd1vimXbwEXgylJ%2B1tChWrH9MO1pd3ZSSq9v35ElETW0hWtGtUHQ%2BwxaHDtfKHf9B0PkWIl%2BU9RcqrCTc%2BqO15a%2FprpsFt5CjJCR4ODC89YfEBjqkAbETLP8f3y4Z%2Fi2LCuwNREk81QV7FYm%2F6bgr%2F0OIV2TfsITpyQPIKxBxGfULYV%2B5Ru9Fm43%2Bh%2F1xKgAGLOWtWxhLbZGshksPDJ8H48uhSnArxLrbyUhqKvjImPZA2zUzQ7%2BmtsKppdgt70RFou6%2BBvDLWPxU77u3n3MM8DQFwgZSPhIuVQJ2Cd%2FVO7c2cJi0BYIn544rka9sDMBBBgBaE%2F46wcDK&X-Amz-Signature=ae9beb63f2d1936154d2c8d0c0dde1da888e1c709c6841b5c7311565bb0eb873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


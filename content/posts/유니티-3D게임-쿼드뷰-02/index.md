---
title: "유니티 3D게임 쿼드뷰 02"
date: 2023-02-06T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "중력 설정, 물리 충돌 강화, 특정 시간 후 함수 실행, 회피 구현, 아이템 제작 및 열거형 사용 방법에 대한 설명이 포함되어 있다. 파티클 시스템의 설정과 아이템 코드 선언부도 다루고 있다."
notion_id: "54478c15-8de5-411b-ab61-58fcc933f3b2"
notion_url: "https://www.notion.so/3D-02-54478c158de5411bab6158fcc933f3b2"
---

# 유니티 3D게임 쿼드뷰 02

> **Summary**
> 중력 설정, 물리 충돌 강화, 특정 시간 후 함수 실행, 회피 구현, 아이템 제작 및 열거형 사용 방법에 대한 설명이 포함되어 있다. 파티클 시스템의 설정과 아이템 코드 선언부도 다루고 있다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=eZ8Dm809j4c&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=3)

> 🔥 **중력설정방법**
> Edit - Project Settings - Physics
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5400dcef-723d-4225-8711-a15311964b9b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWNOBG7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHE7VToVOxmkWRzkny4gg3nuBqOFBl%2FMQtlha1StpRViAiB58AdJNwZyabjQqkUwgdYAC38qUnUeFtJU9pr60r8Afyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMS71kZl4O5h1M7FOJKtwDci2MUA5v8jMAD%2F6gIGR%2BFo9mSZ6zFUmY1TBqWn12FmJh93oV2dUYopjz%2B8hBijN6p3Dx7cY%2BpjTxoyCj8PJIsipPAUIZKJ%2FSvZ2dtqfIRizaQcxip%2BdgJyRArdlPxEjNdulTQnaN5hMtY4iE%2B5muBf8e7G8ndJCoEmIqeZ1%2B2VoIlIGRnSkvefrXUQ1Z49NmW7VP5KceM214STeILNsuzjSH44mhc03Wv1mGfXB4ZClWu1dM3p7XicGYfzkwOg1LqjO08cONsKG%2BlbwoPiQEGpGHkv2Oeils39v%2FosatTxCZsHIRxniq09ziHF33MjyiR7XhD0jFrYE%2BapM0qEqBRmnP%2FaHwbvroI5zOoLUXIqpgugAFXODnhok9pQ5yvNKcLKOPWNaFaLId9ym6hYBs6tQ0GwfvH5qAupulqL8MuBIwosOxGt4EgnUpfRqTe5YRlkr9mn%2FDjY3GBAAuPXP8kQr5rW398HdL4K6%2Fz1M3XZhnHiqteMGA6SMEVansrxNsSzy%2FRT%2BhJhEAAm82p416AKiWfiudpDeeOii6cKZewBMQSisvC4ToiKlx5Sy4h0MNlSrKHrRmTGd3ESaLH%2FZGt0DXkugvS0QqeZ0hkIYu35VOnDg0NTiDKnJVTAsw5L%2BIxAY6pgGSH34byk3%2B3aQ7oQSH%2B%2FWkjPR7EjWRv3x1260NsVyV769cY20U6cGld0dWDBiwuA%2B9u%2BuTyndAHJBKZXg24PmQ6yyKHp6XEHrKFbQWppYPC2bSbvEC%2FiOPdeQHj4JzDLBQ%2BKQRcqBmzE9JXflHs1dIpYFlU3klYxVeoHliBRQ4Tg40IiY7pVPCDgwaz%2FyBNQ7h0GsizF1HEdngl2edJWpkXiNV1A7m&X-Amz-Signature=0898704969bed35a380d0fa0d750b1b9642ebc478a336808ace8bfbbf564a547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **물리충돌 강화방법 - 충돌 들어있는 그룹 스태틱으로 전환 후 자식들까지 적용**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/274157b7-5b0c-4ce7-b5e3-537574a74215/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHTET4A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBgfUeg2r%2F4YWqblgMdl%2BztJmEt26Uz9x%2BuQGYil3YUmAiEA0qOjUvlCSDPrDvyg%2FssrG8xIobiMsIBWYX97aYosfQsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG8i2oj1Quy1fXHotyrcA5c4Vwtv0t%2BOfjbgB%2B7GKeQZKsJPe0e3cGPk4cFrfK0bxqI3sRXb%2FCMR9j4A1g9jPVpxXhHS0rCw5ReHf%2ByDT56e641nB2FqllB2gWJHhRN7bvtKJpry2SGlJ%2FKq4iWBCv1Uo4dGEoreA1gPaZ7Sh%2Bag9DCeSPQbgiKQjz%2B%2BuvLWJ%2FwmEVDRn13Ms3lefSHnhjywA0E13To4TJzT%2F2FfQpgWZHoRUrdFO2ZBN0GrA38C8HHpkz%2F1KRIQOOdGjf77fFUVCfkeWVTzuVH%2FfxUJSbNO2Xk6cpzL6%2BrVFLCYuqL10h6V6ewf2pM7e%2BZJNQEefDp73P3PsnQ0Y9S3zIl9h%2B3stfWKOYOUSrWp2PgNKT9ITzsuyfNldWvfZPxDlU1vz4kjXghsHGPg2NKUFNt1for9RuQ0r1VQDrfLu0b359lDYK66%2B2a11b%2FApNfORJUWI9WVp%2F3vim%2B751dkv%2FLlbDqT3OD1LGNjcK4u2FiuctjLINNAtrsm9r3C6Gvue%2Fl163CtuRz0qq2gEU8S8%2B4HXX6yN%2FnGVZImgOXUqktVF%2B2oMN29ta5R8L9P9FCWm2Qgc7NvPiEG28vFIesuGyZyw8%2BtfGElqUrXrsx0VhLivNp8SkgpO17f%2BIGJ%2BjMYMPq%2BiMQGOqUBEl27qB6KC3eGu%2BXhCocJ5DQxEtlAWtcSZS%2F%2Bbv6N1YjWx%2FVku9TAFhkf7IwgPYR5rSTWpSN0Q0jiP81BEr%2FWgtk8q%2BmLDQs6FpCM%2BOse3yZawJmD7OLHfTlPjPFlI469%2Fd5ptAcOcYxE5%2FoIT4NiWpHYqb32gVHBQNERezTXkLVR8VSHp62D%2Fg51UVIWo%2BoGv36g%2BXO7Y%2BT3%2BJHuJSfdAE%2Bnz%2BrA&X-Amz-Signature=dab82311f560de226c9d379a5029519a4a95fc5e18a6247b62de7d1269cea953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 컨티뉴스를 제대로 사용하기 위해서 부딪히는상태를 정적으로해둬야 제대로 작동한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b02584e3-eeb5-4b73-b43c-4d58e648aacb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHTET4A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBgfUeg2r%2F4YWqblgMdl%2BztJmEt26Uz9x%2BuQGYil3YUmAiEA0qOjUvlCSDPrDvyg%2FssrG8xIobiMsIBWYX97aYosfQsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG8i2oj1Quy1fXHotyrcA5c4Vwtv0t%2BOfjbgB%2B7GKeQZKsJPe0e3cGPk4cFrfK0bxqI3sRXb%2FCMR9j4A1g9jPVpxXhHS0rCw5ReHf%2ByDT56e641nB2FqllB2gWJHhRN7bvtKJpry2SGlJ%2FKq4iWBCv1Uo4dGEoreA1gPaZ7Sh%2Bag9DCeSPQbgiKQjz%2B%2BuvLWJ%2FwmEVDRn13Ms3lefSHnhjywA0E13To4TJzT%2F2FfQpgWZHoRUrdFO2ZBN0GrA38C8HHpkz%2F1KRIQOOdGjf77fFUVCfkeWVTzuVH%2FfxUJSbNO2Xk6cpzL6%2BrVFLCYuqL10h6V6ewf2pM7e%2BZJNQEefDp73P3PsnQ0Y9S3zIl9h%2B3stfWKOYOUSrWp2PgNKT9ITzsuyfNldWvfZPxDlU1vz4kjXghsHGPg2NKUFNt1for9RuQ0r1VQDrfLu0b359lDYK66%2B2a11b%2FApNfORJUWI9WVp%2F3vim%2B751dkv%2FLlbDqT3OD1LGNjcK4u2FiuctjLINNAtrsm9r3C6Gvue%2Fl163CtuRz0qq2gEU8S8%2B4HXX6yN%2FnGVZImgOXUqktVF%2B2oMN29ta5R8L9P9FCWm2Qgc7NvPiEG28vFIesuGyZyw8%2BtfGElqUrXrsx0VhLivNp8SkgpO17f%2BIGJ%2BjMYMPq%2BiMQGOqUBEl27qB6KC3eGu%2BXhCocJ5DQxEtlAWtcSZS%2F%2Bbv6N1YjWx%2FVku9TAFhkf7IwgPYR5rSTWpSN0Q0jiP81BEr%2FWgtk8q%2BmLDQs6FpCM%2BOse3yZawJmD7OLHfTlPjPFlI469%2Fd5ptAcOcYxE5%2FoIT4NiWpHYqb32gVHBQNERezTXkLVR8VSHp62D%2Fg51UVIWo%2BoGv36g%2BXO7Y%2BT3%2BJHuJSfdAE%2Bnz%2BrA&X-Amz-Signature=32a21307dba518eedff0a1c52ef75036db252b3c59c5e4282b26911a66daf246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 또한 WorldSpace에 충돌을 위한 리지드바디를 추가해주고 중력값을 받지 않게하기위해서 Use Gravity를 꺼주고 Is Kinematic 을 켜준다
>
>
>

> 🔥 **유니티에서 특정시간을 두고 함수를 실행시키는 메소드**
> `Invoke("실행함수이름 문자열로",시간f);`
>
>

> 🔥 **`moveVec == Vector3.zero`**
> 가만히 있을때만 실행되게 하는 코드
>
> moveVec 내부에는
>
> `moveVec = new Vector3(hAxis,0,vAxis).normalized;`
>
> 플레이어의 방향값을 포함하고있으며
>
> ```c#
> void Dodge()
>     {
>         if(jDown && moveVec != Vector3.zero && !isJump && !isDodge)
>         {
>             speed *= 2;
>             anim.SetTrigger("doDoge");
>             isDodge = true;
>
>             Invoke("DogeOut",0.4f); //함수이름을 문자열로 저장해줘야한다
>         }
>     }
> ```
>
> 비교연산자를 활용하여 점프가 눌린상태이고 방향키가 입력되지 않았으며 점프상태가 아니며 닷지상태가 아닐때만 닷지가 작동된다는 뜻
>
>

> 🔥 **닷지중에 방향전환 차단**
> ```c#
> void Move()
>     {
>         moveVec = new Vector3(hAxis,0,vAxis).normalized;
>
>         **//혹시 지금 닷지중입니까?
>         //닷지를 했을때 dodgeVec에 moveVec이 담겨서 방향값이 고정된다
>         if(isDodge)
>             moveVec = dodgeVec;**
>
>         //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
>         anim.SetBool("IsRun", moveVec != Vector3.zero); // 0,0,0만 아니면 isRun을 받는다
>         anim.SetBool("IsWalk", wDown);
>     }
>
> void Dodge()
>     {
>         if(jDown && moveVec != Vector3.zero && !isJump && !isDodge)
>         {
>             **//방향전환을 막기위해서
>             //현재 방향값을 받아온다
>             dodgeVec = moveVec;**
>             speed *= 2;
>             anim.SetTrigger("doDodge");
>             isDodge = true;
>
>             Invoke("DodgeOut",0.4f); //함수이름을 문자열로 저장해줘야한다
>         }
>     }
> ```
>
> 닷지를할때 moveVec값을 받아와서 직전 방향을 받아온 후 Move에서 닷지상태일경우에는 고정된 방향을 그대로 사용하게 moveVec값을 받아온다
>
>

🎥 [동영상 보기](https://youtu.be/u2DLOay5oO8)

> 🔥 **아이템제작**
> > 🔥 **프리팹 내부에서 Create Empty 후 컴포넌트에서 파티클시스템 추가 후 내부 옵션 설정**
>
> - Emmision - 파티클 양
> - Render - 파티클 머터리얼 설정 가능
> - Shape - 파티클 모양 설정가능
> - ColorOverLifetime - 시간에따른 파티클 색상변화
> - SizeOverLifetime - 시간에따른 파티클 크기변화
> - LimitVelocityOverLifetime - 시간에따른 파티클 속도변화
> - StartLifeTime - 파티클 생존 시간
> - Start Speed 에서 토글눌러서 랜덤값도 추가 가능
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a7997159-1e43-47ae-91d2-9c2e1be5f7a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBNZIIR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCYo39J3CbX3%2FRLYKszKhPqYK2kyFtBMxMfRAQudRdMZAIhAPdDfk5eiJ0cJTKWs7twQD4xv9mz%2F%2FjsL09qUV5UtelYKv8DCC0QABoMNjM3NDIzMTgzODA1Igxt%2BCWM9PWrwscuIB4q3APwLSd%2BdCDF7vilwLPMPByjhGlOsNsJdyptRCGl8wGnj28A5JtGn1QEe51zbB2FwlGJx2%2BQiliCD4AmjzLOmfuwzwh4TBjxCgEu1qQRSqVERpNsRwMj%2Fjqu2zHaLylAdPUte3Ediug9DD9OGjMM4q%2BYOdnbrYdxNFFFvJ9UBf13VfD1NdNigcEpNHTE%2Fx2L9GQiIM948FDRVMYFw%2Bu8oMDtbBrxtK1iUag%2FVQVOjx%2FQE1S%2Fvx7DRSLEVfS2HY42UjMf6%2Flx52ClbT4cz%2FSNAODm1DbrLc6oRj8pyIagPJK0DH%2FXqUcXQDIBaZTV9hJ%2FsJFtoaiVbDbjB3%2BLyfFKnCVD%2B77CK9MF8VJ6WEJu%2FEakL33GHeGMx2oKbA0PkzlKIc%2FVVlFb2j6zvzb%2F6s2zOq%2Foon2AsKd%2BkyawvZsiczpQx4DEA9WIERnKpgXcbCDvxHm4EDTl4x3tXZzObUFFmEw00vGC%2B4ib8qPoHvyAOvAQfWxZUzaSrDgp2pe24kjKzXyujTEe3w2NtBpoU78ZN6tevExS10vI02XQj%2FfMnev4zIX68GHsNA9NCm8xcebxZdMM%2FcWJZKj%2BmLe2shryafahivyuuJbpaNUPmCNOFPS18nPi%2BFcP3vYQSE64HjCav4jEBjqkAQw4YlxV20OQ%2B1QnKoWk6vmXYvPCmaJQafzYrihRxAs0Y%2BG60F%2BVi3u6cbrk3aGBUV4%2FIqZ%2FPT4J9%2B4NlElKt%2FtY716uZnYquLVL%2F%2BsWkVYf9TcQQEZXu%2BylJ6%2F8g9yNRRBv2HdTyheCXQiuIegyy7%2FNjSeJTq4DbjMOCecQ%2B5oFI6y1W4U85mlkFQJNUSHolZxQwqCxjLUsEG%2Fx0PRmK7vcCijL&X-Amz-Signature=a5e4dc90a14b08aeb580b9eaa61e29d3289683e253ec27d13ab165f8f3938519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **아이템 코드선언부**
> > 🔥 **`enum` = 열거형 상수를 표현하기위한것**
> > **상수 숫자들을 보다 의미있는 단어들로 표현**
> > 할 수 있어서 프로그램을 읽기 쉽게 해준다.
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d3a2e6f-b440-43d0-b189-24f462b32c94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJFUW5C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD2sSGqQA%2BVrZslH1kaJa8flviucPQKyEnfNqMq59%2BjlwIhAInwtpWlHtWVx1mmjgXKcINOnc%2FSo6sjgMUTbFvkIpqpKv8DCC0QABoMNjM3NDIzMTgzODA1IgwM82PiEtg49b7rdCoq3ANAKeMkqhcna91W%2B7zONLt12uR2R06wLNmcylCx5%2FxLOmPx3LrPjI08QZHkr7dhAZbWTnGG9k4ns6EjosxnV8FWTrTSYx%2FgbAtm3IcIoHZ4QkrxrMFcR54JB8g6JOt6aVH9q66brFUzAhr9cg1q1vu%2BykYZQHYWQ4M4G3xm4ql3ymlRjiGwYSIQmKdwgXWNy9qkPDp5uerPymC%2FIjf8WnCDz4WQeZSroQh1ess5vWP2lCYgVbG6ga2zHuHNEmlMfkk7n0bxZuuSUWlZ7Zhuc%2B6S0LME1mI%2BwRP0rdyeRJrHt04oZsv%2BDlNG5UKt56s3aFtlIgJhYBH6WCjm4QMywN07BrpoPH0mtn%2FnPRENzZ1r29W6ELuyMc%2FUT%2Br%2BQkZROUaLL%2BjvuSD3tnSdfNOMC%2FrQbIanznlBMfo7FJV9XU9VixfOsDq%2BxFN0beU%2BSP1FI6%2BWEmPw0F2QCg8hefh7AulIsrmObWmKV0R%2BxRgkZ1AZUuTX8PFJ%2BrHho%2F1lACODmPscZaN5E%2F4QgcoUo%2FF9h1DfPZUSxKhlMvNabAp4pPnCHqTOpCkowjCbp3xy%2FbU%2Fd58gDILCU%2F5ROh8nb82I7LmCEx6xJwFfIENHgZDUy1rrA%2FL9riGgHHwKxBK%2FvDDnv4jEBjqkASj1HLeWTqNFrJ84xTxJhL2nTzR%2BN%2F8Z7Pqj2xi9ziKQO5tYm5ROHnuC1f%2B9nBjU09mYWdotl%2FV5rdofXTdl0UriXFkY2jhi9FH%2B8Ri%2FTNDQT1%2FpsDAA39KVuyWXixUOgF8oisPVCsW7KLOXtGuFdj%2Bb3jwb7%2BVy1qnm6Ldp%2BBTJcHIVA0q2AQ9mL%2Bak6bQfKzejuRcI8nSzKr7y4fIB7g6AjhAu&X-Amz-Signature=d22780c2b0361f2fa10cb132d4e5e234262c8bfe7effe51eee74942912ddbeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> ```c#
> public class Item : MonoBehaviour
> {
>     //enum은 타입일뿐, 해당 인덱스에 값을 담기위해 변수를 지정해줘야한다
>     public enum Type {Ammo, Coin, Grande, Heart, Weapon};
>     //enum의 Type을 받기위한 type변수 선언
>     public Type type;
>     public int value;
>
> }
> ```
>
>


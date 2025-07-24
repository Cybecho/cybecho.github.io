---
title: "유니티 3D게임 쿼드뷰 15"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발을 위한 파티클 시스템, UI 구성, NPC 대화 구현 방법을 설명하며, 버튼 클릭 시 함수 실행 및 아이템 구매 스크립트 작성 방법도 포함되어 있습니다."
notion_id: "ea201c1a-c470-47d5-8f20-3173ded9577a"
notion_url: "https://www.notion.so/3D-15-ea201c1ac47047d58f203173ded9577a"
---

# 유니티 3D게임 쿼드뷰 15

> **Summary**
> 유니티 3D 게임 개발을 위한 파티클 시스템, UI 구성, NPC 대화 구현 방법을 설명하며, 버튼 클릭 시 함수 실행 및 아이템 구매 스크립트 작성 방법도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=r27DFyivQCY&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7df5f06e-f442-436b-8883-9d0aae1a41ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMS37MH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCDi7d6o1Q918zdX%2FxWTew%2Fy%2BaFrT9zj%2BWaux0kxOr6KwIhAOf%2FdGJUPVk2D8szxIiu7jiAEC1a4Qrk7VZgoGh84XJeKv8DCCoQABoMNjM3NDIzMTgzODA1IgyTbBvZENwdO8qLExAq3AMBRBeFMoSePocZIhHpx%2Baoydbg653yw4WJhBo5wMaVgxd%2FYDOj24%2FNOZcHpepL%2B6VN%2BpuJeIsL7ZIySj0SMe5oppL8MYGUgtGkPLLQAltOwWd2f4H0jaO2kalxdm9r1n5tYknW3DE8i784etBl6hNRKgveeJLkSeL72MgwmZrVg8taSRqch%2BixU0ClO%2BfQT1moymYsgvDEye23fQ%2Fqrb%2FoLDuFliXqPBzglMTmRyozvJsm%2Bp30vYEqvl40ROh50uRET629dgcHfqVaEp8LFT5VXjaeSzll39WJVO4M2WfqZzN4TkB2qTMecTzxMtZuz%2BI4fmmDMYOvzRU0ZXhziuPny1sMwkQW4YDCq7l2mz5KlBcnV%2BT%2FU6HivZ7BE5p7ZID70wBFQ%2BY6LdTRBqscytlE%2BWEUTKq59LCn1JbeteZR2louVq5dsKzmPqP4KAhZFDQhPtlNxmUCvs%2BwRG7YRb12qzA5%2FxQJktcdMaZ6vTNlYhfCruUnPopXNHv9S25Luygg8X9xpW8ekNIkTPpmhCoTLCjh97r73gekgWrdcORoimX0uZdU83FrGLa0Lla%2Bh9uoK6Vsq3i8Jg7VMBEoG7qJznXb6j7GIdBLxJi%2Fo%2BjGcg3MMIX49f2pSX7%2B1DCB9ofEBjqkASbP3Y0DT5zWu2h9Qehp%2FJmKDaqefWv2sJtDqg0iI8iq%2FEFlHX5NetZIZTljMRf4tMwkAU1OlQ67UKIAgrNVYyhY%2BuqF0MVTIL90REKhKrvwBGKvwEj%2B18bBVS6%2B3D7NizSMH07FX9s0eqK08ev1qDeeqnWz%2B3aZNtsPqE7oe%2F1CASVMycajfPevsHhEusknscxzFXbXoMtViqA7Xz0jXfLYHJBw&X-Amz-Signature=dc77de8e2d5fd64eb385842645da04b1ee92a50be9be186fa43ef8436bbbab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **도넛모양으로 회전하는 파티클시스템**
> 1. 파티클시스템생성
> 1. shape에서 Donut으로 변경
> 1. Start Speed 0 으로 고정하여 흩뿌리지 않게
> 1. Shpae에서 Radius와 Donut Radius 조절
> 1. Shape - Mode - Loop 로 변경하여 빙글빙글 돌게
> 1. 그 다음에 시간에따른 크기변화와 색상변화를 주다보면 예쁜 파티클시스템이 완성된다UI
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fb182a9a-4421-489e-9dde-69962a12cb00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4VDF4L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCndNBOwgNqyY%2BIZ4%2FCqojbfba43%2BYZc%2B89lHi%2FI78HdgIgNc4xyGPLU0L8qkNYR9MR8lPdlB%2B47o1TNemA5nBrgT8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN1CsW7B%2BG%2BvuW1pNircA1wkFD9mXS2eOfVrDewMnizF1t%2B6PolekeDsdmj5QG8JQqUOux8LIX14ZDv053pD7o3hO7y%2BSGkX%2FSnBs3fczn4hTiOhP4mG0Vsli5mJrgNU03vwTOnY6XHaUJsNNe%2B%2BR0hTfwKRIwh6uuCKfSlg6WHHTkwS2M0tzNUeMz55YDY%2B5oqRPnQ%2FXeShU1EKj9IlhODYniJ85w8%2FYuv76lIRx2FzwGKWT6FlwSJvHDYRtCGJsznx4%2BvYO80z9vlgKUaX1ua5mJ649YbwGBTlPDmFyV1tUFXmJFjcXDZRxJWSFBgmik86Mf%2Brk%2Btw3%2Bb7ZLGPoqZ8q5B5IAh6pG6c2EuLtbH7M5e4pffS%2BjgwDoRbItvsYBa%2FU0CyA8wLtyy44irvOlFQncqorXLjqB%2F%2F6Aum7VWcxB6Mkw3EvMrY5s3znugqzeyawU36mVIxIO0K85FkXY6DBp3ZrK3nS%2Bl9SlvOHqXBfHSm7Pe%2FmbexzpEb5ftwv4Uh4TX7ctSLqaHzyI0JfpO1fysLk%2Frf4cgekBYBykYg3qPlFp0dLbPoNOwZzdpJ37akxCeSNoU%2FIk0Zi7%2B%2BH5GrbvastvsNRyHqaHmNv%2FgxyABgobHR5JawaQ7HbrPmODZQt4MccFHXCRH5MMf2h8QGOqUB2wHYF8c2QqHPFbt9B8Ui7FvXXMUJKXq9zFx7Vxu7vrzNGmImRmH1VCYHQEM%2BwYyRQnjmMB4K57%2BLHYV2KtrF5EEgA2YpLkJHFlQybVHvQlRD5x3cejSCTWZyj5Edn4M%2FnUnjqrmwz7xMcXCSk6jTFiPIQlKB8G%2Bm3nzIovf0ZcKi8E7d5tKiCrBG%2BJfyF6%2Fqxj6ewK2O7Ld79KJjUP8VfWF817XE&X-Amz-Signature=2c7752ff6c74d50b397921e234afd7b217a073fffa21b34e310e66a4d850e1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **UI에서 Create Empty를 만들고Image 컴포넌트를 추가해서 버튼이나 특정이미지를 삽입할수도 있다 굳이 Image를 생성하지 않아도…**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/47a5e046-92fc-449d-9a9e-59e6e557d53e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTKODVM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCqsN8Pm0N65yqT4i%2FdHBlRdKQEO8OcHQuYbHCCE%2F6A7QIgaOs4iy%2BZ00jtXueK4g8vW2%2ByoXKltm7KRpdXW3gGjosq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDA0QG1XoBmcRvT5erircA%2FT%2BD70oZCOD98vuXqeIASOCsFe%2BPqgXaZxRvYqf1kelRAgzcn6KS14CwKQ58v5q1%2B8bt7pEbNv0WdpyBsrP7haf%2FYQn1zgZiDw1tGiChId0FCFkqfr6dqsz4WNo1TeAP3FMexOvA4KZTZ%2BdZO9mse41V68wctEAUuDJK8xJl2K2E2rmAiaFP4naLyNfBc55zMyykI5qG%2FUBbc7t6OgrZKsWUXVxq9eOH6C8FSTI5MtIJIL4ayqgXOF5Z2mvltIMfwR%2BJgwsmm8y3r%2Fu3hg%2B1moF7susvRbmt1HBg965TqOLWH7tK%2FT0PKW7IRK5g9%2F0C%2FYqIzI5%2FDkQs0oCUxLg8yq0JggHrBdcqMZmviSAj9VdrCsOCcTZBXoOHOlGPa%2B%2BoAi4Q9mjYv7rCqqMkK17QcmtU%2BJipuNoownqklXeaB7ir5BKLSjWKVhzC34ME9NLL7HFsgn77JE1gSoyFYdLhGrLbtPuMiAmR4uLHIaNhKnWtdO9UW8oiC%2FADsCpyx1tdbrbVInbkypMlgBdyOf%2BfGmU%2FbCqnUMbVLQPj633nUfZvCi3180hXJXXG6H%2F2dN7lZEwHSaD2z8OMP%2F968hcXwik10jo3UU9K%2FZqy6T7avs5x57st%2B8QgTQQDjbyMKj2h8QGOqUBXv3vjaSgUrxpg1NvO%2BecLm9R3gG082mRp9flua7H%2FKrfYWh11jyF%2BqbgUXu4K4AXIrLw1vBB92wlLhV5UnymIOYnmRP7UrWr7qZNkk0DjEAokfvT683%2BjrLspXJK1n8jZLuqmVzAKHdQmIycE2TYCx4mwDazNuSDmyCmAHoCQx%2BNIrU3woVFjYvNJnIJKnfQRA62hQ959RLfN0AnDMDkq9cv1GEj&X-Amz-Signature=83c6131d83b012cca1bfd68e524d293a576a1a4379a78af9ec44e8e1b112fbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **UI를 뜨게하기위한 코드 생성**
> ```c#
> //Shop.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Shop : MonoBehaviour
> {
>     public RectTransform uiGroup; //UI를 담을 변수
>     public Animator anim;
>     Player enterPlayer; //플레이어 정보를 상점이 받는 변수
>
>     //UI 들어가고
>     void Enter()
>     {
>
>     }
>
>
>     //UI 나가고
>     void Exit()
>     {
>
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9dc66431-f34b-4536-b4bf-a4ec40ecd727/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAE7KTCV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD%2FPwctCHsdB2k5XT6DZoH6Fof0Hmc4%2Burljs4nC1qlkQIhAK7ylra%2B4U31fCndbo%2B2i8zCdqvLrUYhWpiXyODsKYJ0Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyaFCviKfsWfm20NiQq3ANuKb6UG9ELiTkBor8ZE%2BAMlCIHA%2FfcviYNhCqWjVrqShxkXQg3cFSwtreviFdGu40E1vDF0UcuEDq9I%2FjkMGnqvPhxryq1mCY71Oo2DYsuPgCX4y48eLF2ChG%2BAbFf2JQAKqdQ7D9mo5agiIJEXDIHpBkdojqv0%2BnE0R8DJ1Kd3U0C5EPoOTUHUScTfYBDjaW35mm4cgIUnLJVT5Nx2oika%2FgnzPMwnGMzRsu5WBqLtpO3XpWhxMmibS3IZtKK0RDjD2Myro3W%2BBOhh1a%2BqtErwPYT1pZw99VHZIcVg7242CyOas9EOGusnmhcyvy5vmt5%2B7xcr%2FfMetj1Nih2OW8PvC8ApWWauD5TKzS%2B6o7EYPoRtVmfmYJnCmuwDdAxZzWq1UxOQue2lkjrUUAxo4Qlqfa9hFsDxbxLULYWJWakTFZieCPZ3ZHwWb4JxbKrPNlFleY%2BcgCcrfA9rJC2A8RW%2BMJ9EBYfH0NHVhNEyo9XkU4MmULb0nYKWpp8jFbgHrjwLyG29W8BoFr1q2bplAO%2Foj2S1vw9r1pqaGerfKePdzAshEIjyGhsuapU8ue%2BhaKxWL36t7y4JR0bv8szA4wHyHKEOHJrqhI5BsOyz3bU4DqW3ua5bRE9b%2BmnYDC39YfEBjqkAYIZ5LODupGBiZ5tjyrbGkveA8HG%2BQvaXiVg1ki5QHiX1tIqc6jieEnHG7pLNs3kwUGvNQD5JUcV3pZUqSKhCRXTfkKp4HQo83s87HBMznQXIff9slM%2FES2%2FTysKJiOIfwqUmEws0VLEfSGZdeO9dpOYxGxLAaSC5IAjUmucJZyv8Oy6kQwef22%2FSWf8ad65tGsI8ZpV8TlXcWu%2BAnoGEgoZ4CG9&X-Amz-Signature=45dd3250ece2eeab7e228bb09e70c9c0569e87e6c9aebc80e39608e5582e497f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **함수에서 외부코드 불러와서 사용하는 방법**
> ```javascript
> //UI 들어가고
>     //enterPlayer를 불러올때 어디서불러오지?
>     //불러오기 위해 매개변수를 함수에 넣어준다
>     //또 public으로 선언하여 외부 함수를 불러올 수 있게 설정
>     public void Enter(Player player)
>     {
>         enterPlayer = player;
>         uiGroup.anchoredPosition = Vector3.zero; //앵커포인트를 0로 고정하여 화면 중앙에
>     }
> ```
>
>

> 🔥 **Player 부분도 코드 수정**
> ```c#
> //Player.cs
>
> void OnTriggerStay(Collider other) 
>     {
>         if(other.tag == "Weapon" || **other.tag == "Shop")
>             nearObject = other.gameObject;
>         //콜라디어 내에 있는 값들 출력
>         //Debug.Log(nearObject.name);**
>     }
>
>
> void Interaction()
>     {
>     if(iDown && nearObject != null && !isJump && !isDodge) //만약 아이템이 눌린상태라면 (e가눌린상태라면)
>         {
>             if(nearObject.tag == "Weapon")
>             {
>                 Item item = nearObject.GetComponent<Item>();
>                 int weaponsIndex = item.value;
>                 hasWeapons[weaponsIndex] = true;
>
>                 Destroy(nearObject);
>             }
>             **else if(nearObject.tag == "Shop")
>             {
>                 Shop shop = nearObject.GetComponent<Shop>();
>                 shop.Enter(this); //자기 자신(현재는 Player.cs)을 넣어준다
>             }**
>         }
>     }
> ```
>
>

> 🔥 **버튼에 특정 스크립트에 특정 함수 실행시키는 방법**
> ## 해당 버튼에 들어가서 On Click 버튼에 + 버튼 눌러주고 스크립트가 담겨있는 오브젝트를 박스안에 넣어주고 public으로 설정된실행될 함수를 넣어준다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/43ca8874-163f-459b-bc42-117f0f09cd94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAKJKSE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCpqV%2BOgaKSxKSIr7lWdv2IN7SPo7mijnwHypXVe7ryJgIgL%2BRQC1ntRqvWkFJGkWOA6%2FcHsaEjlG5RRqfACJachuAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMiByRDt5Qw9bjWplSrcAw0sFQDPj%2Ff0T5W%2FGEl6iZ51GyllgMaky4sPaGa1UmSQsfyVahNYSRXcjZ%2B4%2F8KL8%2BlbKxrIZ9Qwd6Z0W1VEwr8qzE%2BIFTm6KlS7vLpvBzATB194QVZQRYEehwqMatQnin7RVtg6SOLhF4PuP2Z9AD%2F5erO2qFjb3wh%2BjCGm89GSgYTKPuz8CTlH0snzyLRMyZYO2VNBMGJhDvh2h7WTmkWL7xjsqSAEWIdb4nPI1rYI3b44YE%2Fdy8zU813nbgGOhHbu0KCSGR7bA12ZFvqMG37PQeFLr9B5I4Gpi5qM4Vn2w%2B%2BQ%2Fp0fyO4jDbaeddBz6c3%2BBKQW8jjbPNFOvexnuGQjlztKvuW%2BpxnSVlqyG4My2PNQbqCyemWQyPm39GZPQpc9UYvvaf02f0GA3KEMLH2v7JpCfSOqsXO4llp7n%2BWrDXzoqTaPkwhAXxhawSoaien1CDpCn0c%2Fg2oGURashqGx%2F8QuRwbrhYJ3g2jWJRwqLhtH6wOjgH2jzhVF3TMoQD%2BCtWr7ScCHkEyFBvPLyZIjvk5J39U%2BB6sevbLg9SpdUgzS1mefo78XjzrHvv5hGnMcHSGhjIIagi2MJybEpIPK8DRsEKk%2BwN%2FioXOU78E71LtFRFthhUKWfJ7uMIr2h8QGOqUBiIXp4S4V0DMBq9QB1iNC1LN4JStSGV3dz3DlEDV%2FfRJqWdY9WTq3VNwRa0%2BtNBdoV5ZkL2smhaTKSsSy9t7u2JZZhxgAo1mXFTNcpZmncrV1Sj%2FEPh4s3%2FZYfEVLwUaCxg1CrOc3cProSH71IIQAn%2FOXEb%2FRHEwvgSE1Pju63vsd9u1EpoLkZINeSD%2BGEsMX5TBZ9cJGG8W9%2FuaSNhGRbatOBL11&X-Amz-Signature=6cbd98b62ae7a8113517e7df82c4adec0c73cd555bb1c3ea28e21160399c2444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **구매 스크립트 작성 UI를 따로 불러와줘야 인게임에서 UI글씨가 보입니다**
> ```c#
> //Shop.cs
>
> using UnityEngine.UI;
>
> public RectTransform uiGroup; //UI를 담을 변수
> public Animator anim;
> public GameObject[] itemObj; //아이템 정보를 불러오기위해 배열로 선언
> public int[] itemPrice;
> public Transform[] itemPos; //아이템이 생성될 위치
> public Text talkPlayer;
>
>
> //어떤물건인지 알기 위해서 index를 추가해준다
>     public void Buy(int index)
>     {
>
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1861306-dd00-4595-941b-7172a8f0b519/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622HI5MAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFQq8OxyBVdMczzbJN%2FrrcGX7NStcFjloDjtXVmNnbakAiBUQHVv4635XkBRJvyJdcHh6djWmp%2BNsBYALYgbE5ibUSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0ZsKIXkCpP98es8AKtwDkKWPbymCNemB%2FeOlxoWvjU7FFsIXvx9EwgcylMCXTWQpY%2F8%2BUJBfIeyHTgIBhUbrJneOOzYojGy7JEoR9d2HFNHti2wPv5RRhq%2BklLP%2BuG2IlQydDUYqLNPfaaQoH9%2FQruE0aBPJKCq0NExEnL5qKztUB964FFp36I2cPGIS%2F8OjHPOhpz4%2Fuh9WPNKSbALEZcSpXyz%2FG13NRJvfoBCK%2B%2FSF6Ew9sm4hQdM6tnJZvmxA%2BKa%2FLd2MCK%2FTzOqhNQUJ7Rt3btmCqRQJD0LDDsgp9zlGb3MDX%2Fkd8LojZZCA8rDsBOgHldTPLfwzibFYxxgrtQkTWNXni9n4lj7Ry0VSk%2BWh1HXUM%2BJ3fG3w2qfE4hC7%2F8STamOK3PVO36PjNv7iw4RKy8cVAS6y1tusuV%2F6pxQ9LFbKabqYu5nBz1s5X%2Bwu5Q4DhRF836QBD7MenmPgZUEvE3kHg3TmkNfu%2Fc4DVj8m68hM3cEEPYzTod8yUtIWjw3iVdHewqSzn%2BU3FittZrhzgsaCvzzJ4PYdZ%2Bmy6Js6EvNOsnpMG1dxXaW5FdpSg3geLeMhbnITb1ibHA2fitA8IrNOAiQBa46xhZY9pkSv38vz4Wenn%2BbV6%2FHlCgzZWVihorpCqcCK5OAw4fWHxAY6pgE%2BR6V0tRDPLb8C8KOmXb1h1uuCAHnwoxZrfKMt9cgWWE29X%2FeYQoi0YuN%2Fz3XuBKYqVPqxDgj147V0cF9ifsELY8uGm2PePqe58GCeciv2z5Unmi0XWwrMPPpkXfPhBNt0yizwDpVt4GVWgru6JNVt4nwPcXn9H6GWprfSw8J4a8bqB1emSxyj3UcjIwGJ%2BmMEO8tgcBbT9%2FiBYQQ5OV94MjoPWAaO&X-Amz-Signature=fd8e0c50c14b01a526cacd6496d15cd384d0b2e673e8475c061f304512f71041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **대화생성 스크립트 작성**
> ```c#
> //Shop.cs
>
> using UnityEngine.UI; //UI를 불러와야 UI의 텍스트가 보인다
>
> public string[] talkData; //NPC대사를 바꾸기 위한 String 배열
> public Text talkText;
>
> public void Buy(int index)
>     {
>         //우리가 선택한 아이템의 가격은 아이템가격의 인덱스를 참조한다
>         int price = itemPrice[index];
>         //만약 부족하다면
>         if(price > enterPlayer.coin)
>         {
>             StopCoroutine(Talk()); //만약 이미 코루틴이 실행중이라면 꼬일수있기때문에 코드를 종료시켜준다
>             StartCoroutine(Talk());
>             return;
>         }
>     }
>
>     IEnumerator Talk()
>     {
>         talkText.text = talkData[1];
>         yield return new WaitForSeconds(2f);
>         talkText.text = talkData[0];
>     }
> }
> ```
>
>


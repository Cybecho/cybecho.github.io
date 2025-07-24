---
title: "유니티 3D게임 쿼드뷰 15"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "고리모양 파티클 시스템 생성, UI에서 이미지 컴포넌트 추가 및 버튼 클릭 시 함수 실행 방법, NPC 대화 구현을 포함한 유니티 3D 쿼터뷰 게임 클론 개발에 대한 내용입니다. 파티클 시스템의 속성 조정, UI 코드 생성, 외부 코드 호출 방법, 구매 및 대화 생성 스크립트 작성 방법이 설명됩니다."
notion_id: "ea201c1a-c470-47d5-8f20-3173ded9577a"
notion_url: "https://www.notion.so/3D-15-ea201c1ac47047d58f203173ded9577a"
---

# 유니티 3D게임 쿼드뷰 15

> **Summary**
> 고리모양 파티클 시스템 생성, UI에서 이미지 컴포넌트 추가 및 버튼 클릭 시 함수 실행 방법, NPC 대화 구현을 포함한 유니티 3D 쿼터뷰 게임 클론 개발에 대한 내용입니다. 파티클 시스템의 속성 조정, UI 코드 생성, 외부 코드 호출 방법, 구매 및 대화 생성 스크립트 작성 방법이 설명됩니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=r27DFyivQCY&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7df5f06e-f442-436b-8883-9d0aae1a41ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY57UKVL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICacOrX2JDRiOiRnqIieaokYGqTUxTRLMA%2BhbpBPcsmsAiA8WZbaGP1k2PpNV%2FUCndFs%2FWF6f%2FyI73tzxiWfuGVh%2Byr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMhXo%2FIxNYgS89leHeKtwDsXKfxd3%2Bkdg0j0CujXEdAGBLmJ2r27W7gszz1cbjJDeukDnqmh3GJPA0LuIvZ5EJqwdjHCllQj7kDEqLKjZPHp%2BgoskmIzFmTNs9jq8SlPzDOSvbg6KWmxFTz%2BxdburYqDCvg4DH9yY8l6CT4dAPBeBg0FWUW%2BEjyRz8XZBKbLBSx4TDCyv4SURutPtGswKlKLtusTYyUemIctHxQLW9JBEXv3wC%2Bjo4I%2BO31%2BPvwsgUJ5jLKkj6YW8s83evkC%2BosK9z6FI8p%2B4twcasM9QCJCsnrZ0pLncnasgZ1F7TY6k0ySwRzqwC%2Bf4GCuzO8X0B2r%2Fl9o0UJcDcgngd6SOujFoQJv4fas5v6T8oDUkufRt6L252icP3TtNuQib%2BpVCA9R2zYYjPdc7v7F0JLBksZtRlZQzbyZStXlfw7z7qSKuZ6YZkx9Sioc7L646EPwSo5phwg4S0jtTf%2BcJPM2nktKUp%2FDGsIgVUHqjS65%2FEWpnMh3I59AHVoFxQ4WGNVCLO06g3jQmKtziZeZM9Ty4z0C9BKev9cEdrsy8%2F4Ve04aUgxUNTM7ua05HU7nHZuQ%2BukyGahn6bA7HzUbVLfu1n71d5HXUJwPL7WDU367iSS5n8LWKAA877CIvgvJ0wt7%2BIxAY6pgH9pqYyMOy%2BnUMAEYY%2B4ExnHov0TFbrH9xRyG4Ad6EQ1N5ZtcaJyrwEQXsmc9gmGtKmP96Rr2MfMhTQ606a4%2BsoR5hYUsHmg575Xv3X0hykF7DXr%2BkN0AQ98dtvVWSB1CjaBPyHPQ%2BgthUv6Bjb2gBjWQ340ySK1Yb%2B%2BwSxnZrivDIzEXxquBeoKcIsfbUR01Fq1vQwxdkpaDYYDS1m5yzh2foNKOyd&X-Amz-Signature=eda14bd00eaf8f477f277cdc5b2cd3dfa99045a560b74eecb3bd23286723c05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **도넛모양으로 회전하는 파티클시스템**
> 1. 파티클시스템생성
> 1. shape에서 Donut으로 변경
> 1. Start Speed 0 으로 고정하여 흩뿌리지 않게
> 1. Shpae에서 Radius와 Donut Radius 조절
> 1. Shape - Mode - Loop 로 변경하여 빙글빙글 돌게
> 1. 그 다음에 시간에따른 크기변화와 색상변화를 주다보면 예쁜 파티클시스템이 완성된다UI
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fb182a9a-4421-489e-9dde-69962a12cb00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNVXPA4C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFoKf5U3K9GxTs8tmLA3nKXhmzmEcnUAAoyK3xjaMHKCAiBiGxxIO5FqgBbh8%2FFLvZPL5bDz2PhsuFx9PXu5zh%2FypCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrQjm3S%2B4%2FcXWQUwRKtwD5iG3Zcp%2BA9r9rZl4eHHMG4WqRoqU2EwNrjelyA9fWTSBf5qL%2F%2BibG2Ngr9K1lzqjfEy3KmVDht07P3jPHjytwa73NVzbN%2F8YHKNHpNLI29XyAOG3jvdmpYQn5o7eFPAaxqLzeW5Lxd9teaqmwuJwZnLSAOGnyeSh1dEVEWq7zsruouwLKonD4Gn1zP2ojlEPfRCJbCgsVtmpXTGLJ5%2BPERPf%2BCWs3wvhOfvAx7Lv1e%2FgInGiAkXsWjdDGhhOyBzYpICSMY1EJG8Xov4JuuLm2HiCfjCC03Dd29D4FxTwszw%2BAwvf7d7oq6q6xg9lgF8YISe1%2Bxg4h0nCKdABlovSX5zZX4G7WcJx4OkpSImLx0z7vZqZ7CBNs0HVSGVBqc6E2IsB0RjGyhbB7cDGG%2BjdUuzLLWHBN558YoczE6C7%2FXiDl1QXfgHQ0tZ0%2F7XNmX8cMm9LxKEnRnJyK4wUVmGNf4S7zFaqmb0PJVpYJk8TsLQ%2Fb0rNz4ElHPKd55xfgy0LKFMWXMtvE%2Bsf0f1T3L%2Bq%2B8FGS3j1H8J9t%2ByeSE51svGLCmIJMb7Uuq%2FQYJ91f8UYNMSCr3KRykVvSy6XKeNL3X9L61mPzHg%2BKCeppkD1VDMt4C0%2BmaOS8Ur3sXAwgb%2BIxAY6pgHMW4rKHp92rQe4aP8pjo181zeE6UU1tGebJy8T4LdvL6bORFNPslWvYzWC5EWjKFBk2PjkB1TIujwh8Dzfndc6ezG59ooaIAkWzEQIGzkRxMIfZQmiz5cMLD4sI6%2FooziAlHHtx6qMrC8K5bmkIcw3%2BQFHycwBUYmgQd4%2Bm2P9mAzHpzZvkK8NIn1VHlakT%2BZbTtYJYDUJsLkJ60%2BRgrxAfO4ZrRc%2F&X-Amz-Signature=00b1f2c59271abe3285eca181dfbe49e8a3cd1ff19d3fd10716d7d8a8e0390e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **UI에서 Create Empty를 만들고Image 컴포넌트를 추가해서 버튼이나 특정이미지를 삽입할수도 있다 굳이 Image를 생성하지 않아도…**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/47a5e046-92fc-449d-9a9e-59e6e557d53e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNQR2L3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD51%2ByML5q4ApUMBCtsYqxeDGWAnJjaZXnW5f%2FbQK27mwIgNIjFkjjmd1i09mbH8U5hDE%2BNLRmsgL8SS%2B%2B90R%2BnWXYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAdRpOyqVORfEiI2QCrcAxgFx8j2d0mPuXHbN9uKe9St%2Fz2RpRaMF8UEgoWXl1h8Pqo83%2B5GPhZRflVn0TY2DFC5zmXZVHG%2BSoXM2yA35Gvq4OfJ9u%2BziDMR8tu5d70052hFVnlD7Lqj1Fthzjp9QZPWAlgkCLS25XirzFW%2F6v9Dgef9X3k3II4l3RhgNdW0zX%2B2H2alxBvLEse1maOSvcF1syZrb0d6XK%2BMMQM3kZxdrcIkQ73HPg3SQe2n8Mes8an1aYyJqeiRbaWtWcS8KKVUeeBnwodYPdurHNVDqCcMsR3x9reYLEbulTmyFRxw%2Fh5tBiaDSoWslML0U2c3MLeNluN9BcRQSnfoqwRb1tBKNhOnUwn%2FUyCMk%2Bm5JwDks6wUQtnbsgWm4sWAJKrdkzdezLCUxs3rAQfwmcbH71ZhdbuX2BjP4WINQrUOmj2XA6Tm2rEK8EokVmdj1zWB%2BpYjKWZsBQ6n3KEbtv%2Bemrxp1A9zGpO2Tg1XaAV3bPWjzfKyCR2oQthYnLPMumLxCla%2BBKTWFgkRwKBfmKVGNzmJC6zcuOstP%2FW6IOuiYgq7cXXyRlxIZpySRZ%2B9xmcXjCGj23Z3N1x5HqlCH0wqZ3Q9wyU7ATEe91oRR0V0jdHCnYnBazpTfZlkQ%2FNJMLO%2FiMQGOqUBlwGAbFpPtZGXLwpAVtzSEvQPmXkxqs59DhNJHijff%2BJB479vh2N25A6oGxXKpIARvoLUcpngQri5cKatwvAYk5N9ymzwaIevV0h1PLAWc6sQW1iNkWPhMBQW79p%2Fs9%2FOlkTPZ3KQPd6jPCE3SdaNVnvF5Ht5xDzTDm8BQnyPXaXNqNP61SI0dk%2Fr%2BmNNdVeTjvNFU%2F0l2UBEP3uLXBVcgHBiYLyi&X-Amz-Signature=b3db7fe0e9953334cf732433a6ff2b0586eb444227d6b0389cad1add0e24a70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9dc66431-f34b-4536-b4bf-a4ec40ecd727/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWJH2VA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDIGzntfOrHIuM2ewXqYj15AWqJrdDfKFJz5QSZsn%2F62QIgaBS9OXEKy4BNkm44FfP6UgfvFmouf6HN22VWmMUUY%2FEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH6%2FYjm5BC63t%2FYMwCrcA6LeMc1XPsBUSqhjo91hjoFni8tgKiDaDpPz%2FthonwZanosLjGgMPWbS6fV42dQ7RVZVK4033ZA0pcldpK2KA78%2BLc%2F%2FsR8NLsb%2ByQQIwB3b2nxThQqqL72pq%2BAr3nWcGkU%2FPaVblT6JDILjPJawZ88n2AAMmQGikMEAhAhKcRK1Vic0okVgbBeTBtmLJiP7AmRLpO1YCwJOLIP2krSEcoVPPv474Y0NxnIeXgboM44YRl1ty8br8yqZvl41Nj0D4XGVgQ%2BD3PEXcq%2BmpplrK24XiqQByMX9akhhCILGWRK%2FeC6fNdqOJaB%2F3He8T9CUzyqoQrdXWVU7TnW%2Frs8NbZ4J71SDwPipY2zCoqWPv64Iodn3eFJL%2FMV0AJ5RRBTKczIeEozeUMKUHow0T3TezrhDRQQoJ%2FJgiJmmbvQ6V32%2Bbf2P4EKzI56SyQaZXaA1lpv9PfxL4N%2FuFEoQG2XDO4pq4y63ayxKiRN84IB5gSd0mn7aRt8ljELvb8UYI1A2mw0eK0xlbJcvVxZz9o%2F5fsSVp5BBn%2BVtt3W2LR%2FWc92hdUucC7lCSEUEtu8Ams%2FohUvS0aNjVptfHlGrtbWHeVnJtkevSRrbfNYiwo4zlkymVd8P%2FJ4w8xY%2BTh66MMy%2FiMQGOqUBz7d19pUC06VwqiKcEEmcUt1F1DTockchvv2SeC18hy6yH5EVqNkTfY6yDmalXi5iLTLv3xaIuo%2FzITM5cxqrEs5kzmI0sXn2JIIL4fM3Li7k77H36PdLt5VWxhwR1GqJiwosz90tYYaLGGXGC5snua%2BHbd%2FJzQcYgNhkrTdww0wnH7Q5%2Fc1cdKAjWFFJoLoaGQHa%2FM5H%2BpEIRtBuAy3yV2Y6GUya&X-Amz-Signature=fac4faaa5eb91fca509f27181cfabf8c8dc80ddef72d882b13929f45ba6b8f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/43ca8874-163f-459b-bc42-117f0f09cd94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFGFBTT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCe56IvnarhLSiTXxlyuGECnRhS1BYUWOeVhF2t4JlzZQIhAPw1pqDQ8jsWZrl5cB1tjh53q48QWlKqsyfE%2FH%2F76CVWKv8DCC0QABoMNjM3NDIzMTgzODA1Igw1IHPYHA8z0EOVffsq3AOKwm270u6LJHr%2BKubcKand4eFOSHmgok0McAEzz%2FvJKZLlZUg0LlMy04gqFmQ%2BbqOTBv2DkX4A0o%2FPuGEjy2OJOaK%2BOaf1g7qGdje1xV30kSPJKzhWYmyB8ibPMtgOjFQeMAi9UdH3RvA%2FlRGRt6AWBMMZEL1Oom7seKi9WP%2F7Cycg7peKPUPTWHYmwdRs2ZuO3pJUajxceF2rGe4fJBza6uTJCIV8GKPYqHCtdhuqytTfAcuRTbKOB1l5Khy8jn%2BdDTiW%2FAOC4%2FLFuk3%2BPcRTxtq7AkPXc%2BwlebrrFrl7Dr%2BdAM7XSINgDbRAPj1%2F3ld34b0p1D1yEE6plM5eZG2davOcGFE2iMia1f6%2FJfhHoskDx1VZevEYnt7nPMDO4SvN0qmhpHpTr4fdz8e9cQeI0nXgsAi7e%2BfklK4qOpImIkCbfpjGlEqRHL9hwLXI05fotRiLtYrfSZ5e8kLH80DLv6tTXYg89VxKKapQdL8d6VUncgcWPZ9OZqvnR1VJHEx08%2BcC%2FQhSU29zcv1D4Nvos1GChgMvHH8fvlLKWZFwb49VMda6E95pN%2FpeK6PXAQ5tDyGS4NCH%2FwF1CsOAkEh6Rx59IDa3ZOdlOK8vNIvEO4P0kLksYtF9AOpf6jCzv4jEBjqkAR3R72z%2FHJfl0uwlJLYxo%2FEfJF2vL3iSpM%2FqtIIdryP7lK8tpS8h6EG0ZrPeNzdLFgjhTg8wywzZaDyYNxEWWiZEAYUdidknOxVTZOLr81S3488%2BLlTFJZ%2F39xyhYfw4nmV3iFK3R9dBin%2BwBpdJw7bgUZXNH1OQZToWeMhrscURCpb3jtqrRTGkSYB2GTm8NfiBE1V6DxBiDvApkFh8lL3lQ6kk&X-Amz-Signature=943d4c97108d96432c49f6d806622fb33d2aebaec9a91719027a62eb6bc81c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1861306-dd00-4595-941b-7172a8f0b519/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KOC3HYD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHHr69so5Qpqac2tgISxWZ9URGzgGMb3P4B57VHn1oJGAiATyEc42KSMXdIbKiRe2%2BzQox%2BPSl7EmDH8F1tDY1IPJCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMdI8yw28tAEqLdr14KtwDySt3xe4lMRs%2FU3V0tgKYkNXdNfiiFb1PQ7NwfRZtpQIgO4FvBDedOFbcaV8TJC4zD1e8xZhFUODAAwgnn7RPpFzhj0u73lj151M9UygDSJei%2BvtZ9eASqtx1uoPU6aEs%2Ft4ceq7UvvidK5etHdTET8PM%2FxS09d2UnMg8re%2F%2BKj0FxJs9VyXsJM%2FgDxjTE5HykTjtIfUzPNkJM1WosZTOA1lfj7mjyjTbOfM%2B7H1%2BczgTI%2BoNTFjEdlEXZLNFh%2F5bjcaLJ7lwoaSsLERggD3GuiuHGKoW64uYlRnTBIVY3HYsXCIQu05FgvzrgB4ktEOtnS7VxL5IEoqF4IjfP5iDAcajKUsE03xSjnVorKb17RBDOcX8%2B6hOl0voh4Q77UTgH5jjnuejmfcGOtb%2FXbcsGu00Pkp7m9uAORc8lsCvINqgJQpYl0FnDAhPPDjjeM1VrnVF6iOLNWMfS3EEnT8jw0QEwLi%2FSeNGRR3fm20izY0GD7GOSTqy9h2nEp9iyhQY1pdyugzCEGy6Hu1KaMIqguHWnXyZiEzPCDJVJSRvHS8Za2and63JaZ%2BLBlFwqSHv66d90eBJEiZ4cwzCASxDO5W8Yn3Kk95fUlxRKREeaRLt03T%2FCxNtfHibpVkw77%2BIxAY6pgGgtxOOrxuNXFisiJHji65Pud7AshK15A38leIx2LRUmldiBJqctcwT7pYwV0AYG%2FSeAsMWY1esrT8QPdKBcmudXJdyLcEUKh3SJspfGKph5OAIvfuvUzAq36hC%2Faow2z12gliW5U%2F1Rc9LJ6VM7ZfotK4DbQWERnAgbq%2BT56bbNx4t7EEVPcxY%2FaTrjWg62%2BqtmpcpoJelix0b8KriYO6yD84Sl2zZ&X-Amz-Signature=3e437465fe5133cf6a36a607cdaddaaac945a6a34c5ac8fee2f4de07addfc3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


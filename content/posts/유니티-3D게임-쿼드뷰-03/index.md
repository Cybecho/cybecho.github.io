---
title: "유니티 3D게임 쿼드뷰 03"
date: 2023-02-06T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "프리팹 태그 설정과 무기 선택 후 애니메이션 작업에 대한 설명. 아이템 종류에 맞춰 플레이어 변수 설정, 무기 스왑 및 선택 코드 작성, 애니메이션 실행 시 무기 유무 체크를 포함한 코드 예시 제공."
notion_id: "7ea9930a-e740-4a2c-9055-ef447a04cf8a"
notion_url: "https://www.notion.so/3D-03-7ea9930ae7404a2c9055ef447a04cf8a"
---

# 유니티 3D게임 쿼드뷰 03

> **Summary**
> 프리팹 태그 설정과 무기 선택 후 애니메이션 작업에 대한 설명. 아이템 종류에 맞춰 플레이어 변수 설정, 무기 스왑 및 선택 코드 작성, 애니메이션 실행 시 무기 유무 체크를 포함한 코드 예시 제공.

---

🎥 [동영상 보기](https://youtu.be/u2DLOay5oO8)

> 🔥 **프리팹 만들고 나서 태그를 추가해서 enum으로 지정한 값과 Tag값을 둘 다 설정해줘야합니다 굳이 따지자면 Tag가 더 상위의 개념이 아닐까**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9b9f6d7e-2a18-4f6b-b5d5-d0d65de15b39/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBOW2B6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCnCnI%2B69HWSpqu%2BTv7abNBcRmXe9NnM4PdsvjGnNV1fgIgMKDKVxNExD9O6%2FgWhCf1BDTqZNwDpFq9bgqEhoOcm1Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPaeBGj9I6nMyERq4ircA4Iy8BJC2102Cdc%2B5z1PQ4OcIcQuYJ2%2BhzOo5ggZ%2FZ8T49A%2FUl%2FSdkQYsaveRiNB1WeajlbjhjVhgROHpu9fBdoeGwA7DlSfAtcO91sg1jhL5hzimOj%2BU9lD%2B%2B5QKwmc9%2B9upMBbbH3spj3N7or%2FBBvCIkNa8VvFIXTC0BypOsHFwzFWZ12pMAVfkfOSNyzEMy7OLAVVw225SU6ZpkTyeg1HotUR6UsUjCNkwTvulpVFDq%2FkkAW2nG8tccoThaHto2sHiIi%2BoKNsz6rge1wHV8%2Btq3%2BDRsbjYY3dORxtXogxDx0F25mJ6f67cMFNxkvQJ36KBoL60tWeNekdkvN3%2BMBfi4rv44YOpjXswPNbxYlvk69KBHOJP%2FQer7tTh%2BHRU208hedVVGwwxICPyyCuMm9FH7k5ax%2B0hTWxR7Yq47QxP2jP%2FXID5rxn7dnORU4wYhpnN52k%2FSUtImkmBYCPycTUp4gUs57MLLukP1BBnTIA0%2Bvaj6141uz50lBFq%2BsjWA0GGbDUVrOnW52lmc%2FrtOIgenJgP0EWIGEcPuAjZbtbi8ttW9AJL91RevmAb4dQ0V6nsvyH7gheXYlv8rq%2BJsiiFweNbXaozXaKNNqLlXKEiM2vYkNA3c88pHqcMMy%2FiMQGOqUBDpWfLCVF5IGOiO90nzsPvEcdlgmHExsUTN7G%2Bb531ggekMZDWiFGqhGcSAEyFr3LD6tTf7TCzhP3cgnU6mx%2BFd6ZXPam0ztrPcEkMp5i9LLym89VeO1fUNMhIjs1cN8TVvzJKXr%2FEpSuqXQPOE1OgWUOQMGajzGKnXJ61X1h%2FXKQyNotY3nb%2BZ2eSWUqXaJxoZqzFHE86arUd3blRm%2BdenLY%2BmsJ&X-Amz-Signature=611cd0f494fb14054d591a4b35bb9cb07d59bb28aa2bf41ae99b8fb10d9e7f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **프리팹 만들고 나서 꼭 포지션을 000 으로 바꿔주세요**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/54bd2996-ae17-46a8-bbf6-eb9d6b9068cf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYLAZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD4C5JV8OAj27oGiQoJSIjlaxqow7SIUk%2FqkGKpuyMVawIgO%2BnAmXsPdciMOjFQA2BvMk7DCkfoLU7i4EIEeMXYvkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJ1U8DgPsPfKd38dESrcA8LHnc%2BulrV1sO4e91e47g1UHsihUGn9RyAwq2YoeTd%2FIiIwEW%2FsiBGJ1t2hxmftsywjSyrtgc09E4fyeYuMYTVx%2F0i17E6SaQqsHYZobfPZG77BKsYGuWNM9HnOWqKVmujLM9AVEgBa3s6sSixTDd0G91N5w4k2N3Y9GlC2Bf%2BBvZQKL5E6epIy%2BlxEUdOhGtAqmaf9JZZRdkRCrDJ0PbyKPZ1P9%2FH2oR9xe650MjYq4dpLMaQJNj7gZx6czo2ae%2FS%2BTawGOagNHsb6GGKZpszsZrB3Vxgp4mxwKTk97lQFGjHwKEc27P6CBy97up2KjCYbA%2FXqg45blFNb20%2FD1cw%2BnBReS9NEgadwTOJZvWygHm3KQmRSzoafYko2dQRp0N%2Fh0M32FdvVK65HEQhJ2lq1QfUp67evuosQbM0XtDkrscMLgPZuVUVtjL2Ybz2RF0PkBp%2FrgLoKLF%2B1%2BSgorvaYEJSFr0%2FS4WVmFBiGKB1HwZ3iZ%2F2OzXNJX7B4BqssaY7SRsQ6c4hQjUDNoFT7nb6ghiULnRc8KHL9oE%2FgLc7ldxJDuocdOfRuSt%2BbkSw8UqqVpAtURHKVI4Zdkt1oYi1pWQD3YWaARDC4uNykX0l2CFkUqhPHxS9t0L8bMOW%2FiMQGOqUBRcQtfdikzfFMBi7fZqyCJpFYNLdFnUL3JwteS5N3xk%2FQOaOK%2F1wjv%2BXvhmSqVfjfD3d%2FKyxaAMbUajbBwngC1SdwGoCAo%2FRNdiE5NH8%2FEVONig0mt7%2Fq22VMllFLvwhqaxR7V2lwH%2Bujywv2zF5i3bBWJuZV%2FklOKkar5MWTR1zduT3lkFdxSj7Xm2%2FX9YSjFy0zddVFaKVzhQcglezJ5DGINGnq&X-Amz-Signature=edb1675bf06a55a48073692e3acb5fc7c170a6d74e191c8dd5358a22872187be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=APS9OY_p6wo&t=423s)

> 🔥 **아이템이 3종류니까 플레이어 퍼블릭 변수도 인덱스 길이를 제대로 설정해줘야 오류가 나지 않습니다**
> ```c#
> public GameObject[] Weapons; //player.cs 에 public변수 설정
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d152ffd3-739c-48d5-8f85-41fe16788051/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7OHEGC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDxwRloOTABBoFxHwWuStdQpfoUApjojrtsXoCMm%2FSeMQIgGRR1cf4zizPXyTQASExl79K7jTIU%2BBDGzMohNnrAQRUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIqwuOVGQqhFAXAKdSrcA5T2aWQPv1TuP9EoolxvQvfewVB9IgsodYyiOL6X9mAbLnvtCk8c1BrkGuQYYgTt89DvrFFqjSuJBWO8NjJQkHG1QnyJRW7QJ0%2Bl7xH4s98T5H0Mz%2FDww1pBBf81mcBC3ijhd4B%2BrrqHSV%2FaE%2FRq9X6qjlHZKcLNPqYF%2BO5NuUlVHXyvMWNHOcJ8iLbW1ZK4FrIBxOgkOEFb0cCIESbQdN%2BW2pwvD8zWsCoPuTObQUusnAw4ByHNAEQ5oaVqRLpys1NShktnOLkYJBkHNMqtfK9D5uRWSu6v5qMrIBTrHRXz1fppiFHF55GNygM6hS5n0YUDYOGsZXEGH4V5q0i3vEcF8N3UjjUk5h4TqWLvixoR0VfXoPFegEWRuHbiPiqa16B6y%2Fcl500cNXodJhy8rvBqwpgVgKqQK4zd1oKUrAvj1p0hOPOPJYVG9UEvF56ZAiBd3itwMFz3%2Boazc32%2B4aEfI0bRL3YSTQkFwjf2F9iCRQnLnNRa%2BlyV31taYyrGaQIaINEA0m0Pgx%2B%2BhpCrkWhSIPh39M%2Bgo5TlvT4dWxfUdo3alSqRMXu6hgP5ESLrUUZBhjX6glddP2HwzKDhHMv525IRfrf9IgZP5HziIgRM633TYF0ChJplcPdQMNu%2FiMQGOqUBYZzj3XbZ6FDRefCmDRcvdK%2BqCEO4trgP00oERKcYrK7zHBKbaRZ%2F9uf58k%2FG88UZ02GCUpH%2FdRy6OgoZ54wP%2F1yIQ8PeYZwIyS289ASX6h5ui4bYAhit1Oi0EsFZqRUFHzksj%2F9T1KFAOiMCQA%2FEVkmEJVwgD8cG3VQ6SNrl8g2MakLQjxPJn2DA1mNc15Ok329WTuDhSQMRyCFNAfed9Otthruh&X-Amz-Signature=05fed7e406a53708a35ff993b926534360adc9c3e9c046a5ac6be1e470d92f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c3b70f36-b101-4892-8dc2-7e58a21fddd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7OHEGC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDxwRloOTABBoFxHwWuStdQpfoUApjojrtsXoCMm%2FSeMQIgGRR1cf4zizPXyTQASExl79K7jTIU%2BBDGzMohNnrAQRUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIqwuOVGQqhFAXAKdSrcA5T2aWQPv1TuP9EoolxvQvfewVB9IgsodYyiOL6X9mAbLnvtCk8c1BrkGuQYYgTt89DvrFFqjSuJBWO8NjJQkHG1QnyJRW7QJ0%2Bl7xH4s98T5H0Mz%2FDww1pBBf81mcBC3ijhd4B%2BrrqHSV%2FaE%2FRq9X6qjlHZKcLNPqYF%2BO5NuUlVHXyvMWNHOcJ8iLbW1ZK4FrIBxOgkOEFb0cCIESbQdN%2BW2pwvD8zWsCoPuTObQUusnAw4ByHNAEQ5oaVqRLpys1NShktnOLkYJBkHNMqtfK9D5uRWSu6v5qMrIBTrHRXz1fppiFHF55GNygM6hS5n0YUDYOGsZXEGH4V5q0i3vEcF8N3UjjUk5h4TqWLvixoR0VfXoPFegEWRuHbiPiqa16B6y%2Fcl500cNXodJhy8rvBqwpgVgKqQK4zd1oKUrAvj1p0hOPOPJYVG9UEvF56ZAiBd3itwMFz3%2Boazc32%2B4aEfI0bRL3YSTQkFwjf2F9iCRQnLnNRa%2BlyV31taYyrGaQIaINEA0m0Pgx%2B%2BhpCrkWhSIPh39M%2Bgo5TlvT4dWxfUdo3alSqRMXu6hgP5ESLrUUZBhjX6glddP2HwzKDhHMv525IRfrf9IgZP5HziIgRM633TYF0ChJplcPdQMNu%2FiMQGOqUBYZzj3XbZ6FDRefCmDRcvdK%2BqCEO4trgP00oERKcYrK7zHBKbaRZ%2F9uf58k%2FG88UZ02GCUpH%2FdRy6OgoZ54wP%2F1yIQ8PeYZwIyS289ASX6h5ui4bYAhit1Oi0EsFZqRUFHzksj%2F9T1KFAOiMCQA%2FEVkmEJVwgD8cG3VQ6SNrl8g2MakLQjxPJn2DA1mNc15Ok329WTuDhSQMRyCFNAfed9Otthruh&X-Amz-Signature=febf948a64616e034fcbba58990da73a9f38c73151a52c2a1e62ba7141a1cf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **아이템 스왑 및 무기선택 코드 작성**
> ```c#
> public GameObject[] Weapons; //게임오브젝트를 받는 배열 게임 모델을 배열안에 넣을 수 있음
> public bool[] hasWeapons; //무기를 가지고있는지 아닌지 확인하는 배열
>
> bool sDown1; //아이템변경(swuap) 이 눌렸냐? 1
> bool sDown2; //아이템변경(swuap) 이 눌렸냐? 2
> bool sDown3; //아이템변경(swuap) 이 눌렸냐? 3
>
> void Swap()
>     {
>         int weponIndex = -1; //weaponIndex 기본값은 -1 즉 없는값 입니다
>         if (sDown1) weponIndex = 0; // 1번이 눌린다면 weaponIndex는 0의 값을 가집니다
>         if (sDown2) weponIndex = 1;
>         if (sDown3) weponIndex = 2;
>
>         if((sDown1 || sDown2 || sDown3) && !isJump && !isDodge) //1 2 3 키 중 하나만 눌린 상태이고 점프와 회피상태가 아닐떄 실행됩니다
>         {
>             //게임오브젝트[] Weapons 값은 위에서 if로 weaponIndex을 받아오고 해당 오브젝트를 활성화시켜 보이게합니다
>             Weapons[weponIndex].SetActive(true);
>         }
>     }
> ```
>
> > 🔥 **새로운 무기를 얻으면 기존무기를 off합시다 중복으로 못들게**
> > ```javascript
> > void Swap()
> >     {
> >         int weaponsIndex = -1; //weaponsIndex 기본값은 -1 즉 없는값 입니다
> >         if (sDown1) weaponsIndex = 0; // 1번이 눌린다면 weaponsIndex는 0의 값을 가집니다
> >         if (sDown2) weaponsIndex = 1;
> >         if (sDown3) weaponsIndex = 2;
> >
> >         if((sDown1 || sDown2 || sDown3) && !isJump && !isDodge) //1 2 3 키 중 하나만 눌린 상태이고 점프와 회피상태가 아닐떄 실행됩니다
> >         {
> >             **//처음시작하면 손에 아무것도 없는 Null상태기 때문에 false를 하면 에러가뜬다
> >             //고로 비어있는상태가 아닐때만 현재 쥐고있는 무기를 off하는 코드작성
> >             if(equipweapon != null)
> >             {
> >                 equipweapon.SetActive(false); //현재 활성화중인 무기를 안보이게
> >             }
> >             equipweapon = Weapons[weaponsIndex];
> >             //게임오브젝트[] Weapons 값은 위에서 if로 weaponsIndex을 받아오고 해당 오브젝트를 활성화시켜 보이게합니다
> >             equipweapon.SetActive(true);**
> >         }
> >     }
> > ```
> >
> >
>
>

> 🔥 **무기가 없는데 애니메이션이 실행되어버리는 현상**
> ```c#
> if (sDown1 && hasWeapons[0] == true) weaponsIndex = 0;
> if (sDown2 && hasWeapons[1] == true) weaponsIndex = 1;
> if (sDown3 && hasWeapons[2] == true) weaponsIndex = 2;
> ```
>
> 연산자 때려박아서 사용함 근데 이러면 계속 인덱스 에러가 뜨는데..
>
> ```c#
> int equipweaponIndex = -1;
>
> void Swap()
>     {
>         if(sDown1 && (!hasWeapons[0] || equipweaponIndex == 0)) **return;**
>         if(sDown2 && (!hasWeapons[1] || equipweaponIndex == 1)) **return;**
>         if(sDown3 && (!hasWeapons[2] || equipweaponIndex == 2)) **return;
> //스왑버튼이 눌려있고 무기를 가지고있지 않거나 현재 무기 인덱스가 해당무기를 가지고 있을때 리턴시켜서 함수를 종료시킨다**
>
>         int weaponsIndex = -1; //weaponsIndex 기본값은 -1 즉 없는값 입니다
>         if (sDown1) weaponsIndex = 0;
>         if (sDown2) weaponsIndex = 1;
>         if (sDown3) weaponsIndex = 2;
>
>         if((sDown1 || sDown2 || sDown3) && !isJump && !isDodge) //1 2 3 키 중 하나만 눌린 상태이고 점프와 회피상태가 아닐떄 실행됩니다
>         {
>             //처음시작하면 손에 아무것도 없는 Null상태기 때문에 false를 하면 에러가뜬다
>             //고로 비어있는상태가 아닐때만 현재 쥐고있는 무기를 off하는 코드작성
>             if(equipweapon != null) equipweapon.SetActive(false);
>
>             equipweaponIndex = weaponsIndex;
>             equipweapon = Weapons[weaponsIndex];
>             //게임오브젝트[] Weapons 값은 위에서 if로 weaponsIndex을 받아오고 해당 오브젝트를 활성화시켜 보이게합니다
>             equipweapon.SetActive(true);
>             isSwap = true;
>
>             anim.SetTrigger("doSwap");
>             Invoke("SwapOut",0.4f); //0.4초뒤에 isSwap을 다시 false로 되돌린다
>         }
>     }
> ```
>
> 리턴을 활용해서 아예 코드를 끝내버린다
>
>


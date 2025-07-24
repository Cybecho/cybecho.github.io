---
title: "유니티 3D게임 쿼드뷰 03"
date: 2023-02-06T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "프리팹 태그 설정, 무기 선택 후 애니메이션 작업 및 아이템 스왑 코드 작성 방법을 설명하며, 무기 선택 시 오류 방지를 위한 조건문과 상태 관리를 강조합니다."
notion_id: "7ea9930a-e740-4a2c-9055-ef447a04cf8a"
notion_url: "https://www.notion.so/3D-03-7ea9930ae7404a2c9055ef447a04cf8a"
---

# 유니티 3D게임 쿼드뷰 03

> **Summary**
> 프리팹 태그 설정, 무기 선택 후 애니메이션 작업 및 아이템 스왑 코드 작성 방법을 설명하며, 무기 선택 시 오류 방지를 위한 조건문과 상태 관리를 강조합니다.

---

🎥 [동영상 보기](https://youtu.be/u2DLOay5oO8)

> 🔥 **프리팹 만들고 나서 태그를 추가해서 enum으로 지정한 값과 Tag값을 둘 다 설정해줘야합니다 굳이 따지자면 Tag가 더 상위의 개념이 아닐까**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9b9f6d7e-2a18-4f6b-b5d5-d0d65de15b39/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6FTARX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDNRYUqey0ZvWYmzIFrunim7%2BSGk8qoxN2QSe34YU9iOgIgZ52qWZBEx9LNUUVPRz4RwzER1bWXVGQeO8WkMmAkgyoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJHAo7whEzFBTSMs%2BSrcA8LUEEyCQVJ7%2BTvp90HzloJzInwNLjO2ncyDc72AWEMBE4vcPB26QJaPJpoNDePOaLdjA58Mph7bYNIpDdXsFd9ou%2Fj4sepOziytfcWyp6ZKreg5%2F3Ytqg2hMBGaXdVcERASLF9MKyV%2B5rjAh%2B9RuqBH71FOnfiz7v75GYxDNBj1SVQSAXz5PH6%2BjwFZ4Ft0VTNIhAvqs5nFTap9nJtScvPLq8jgiO1TKzdN1Hii5GqFu9tZhKQmi5ppy6ZbLCqEihV%2FDiayvf%2FE7Yt5120NVHSmJR5GdkAH%2BqXxfoQmZ6Bf32VFtOsfVf%2BWzlbkopIPzi2vXhZYl5TM1NJR99vlwdN2ZdCDSNSjWYUK86PVA%2FzAOpKvPCbKe%2FQIPTR2y5cygEocwI5MvyG0xBKMuksDR1BJJn%2F7ilF1guciKDXk1ZI36TdKEDQ%2B%2FjM7qqIV%2FXwLoWk6uOpggFRF2bTdYMbfwpFIHVncxpATYsswnhTKNXjAhLIiJrqMKWDFjgJ8WPdUFY9PgPfNEUTKJS%2FkU9CTdTYOftoZKi0v3FryM0GcwqmOBt%2FbFaNxHczZxY%2BLabgg6Q0qs8KvkrZOD4x0lrox4d0aFnga%2BcrID0AHkh2MWf1CKtoD2x3nOoEMtBUMMLP2h8QGOqUBJmG9qJnknCP%2Fdwr4obguHCugV1A5Z74W621flhsZ9MYgDfWTbAv8CyppnpRLwFyF6e5PgHyVD25bjw%2FCtrlnqGK8%2FUCtceWzvzLbme0EfWS5Hl9%2FmXcOzCz0DBXs4Xkq3JRR4tYkEANmYRcUgpZyD4ELst0iOvllhtmIUKhuFJtLXT2Ot3KpGz7%2FQ1neSEkd0%2BcsMPsXg497%2F8dGJ5FgdLjKkaID&X-Amz-Signature=a14c9526192e7bf70ab0576784c8428dc2a95087c79fe7e89ebb117715939afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **프리팹 만들고 나서 꼭 포지션을 000 으로 바꿔주세요**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/54bd2996-ae17-46a8-bbf6-eb9d6b9068cf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3KRC75%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAksehxLskme9gm0Ggq40j0bPHMgSoFnlAbbZk%2Bz8IHVAiBgbGegMxZwVvHOS99oRY1G34q8LjiKNUuFWzH7u9OSYSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMW6NyUi1ox9G2eMrZKtwDywhP7z%2BWdXe8c0De1JexNPpAlNHpsF0pFlw6haY5GDxo2aq%2B4Nf%2BhNOQoDGdsRrAtYOeOs97sf9iW69MEYjIU1jZtSx3OiJ4i7YO5hXr100ht6K%2BlI%2FrxhCKvrpuLjDlaKgA%2FlzOdC0aT%2FmjGeRaUWN9Sq3u%2B72PK1og08T11SdTh7aFezXT8%2BRN%2FlVLoU%2Fz32%2B8L1Dyc3w9LlVCGjAjsvV4DAIplwyDKZpX7pHSrejLNfX34O5Wnu8eoVxowPDNwV2Bc8wAz1XPHeaLkfcH7mYVfgzxTUz7zZVWZGl%2B8vFOP%2FtZTAoLDp2SwSVbKQ5fyCfcKb1%2FiqN6cH6zwFHno%2Fa54xrly%2BV9sH11BBb1LBS%2BJ4jpd5DT3PH4%2BJ5O09sCHKcQaYao9%2FQWe70rFBrTR%2FE1UMfar0Hb5LY0jrAefrP9uoBs9kGxLZ7seVknDRP4rmFwHDNe%2BVJAmd321PF3c658VCaNTMXt%2Bv7KGVcgxXxoDqn4Ov8UbCaJDyKY2t6uUvsDPoegVOYhd1K%2B3%2FYncyHuuvMhLERnUVpEz87JYqUm5CCDZ51ZMyGWTte%2BDTSsK%2FzB%2F0L3kgjRkyjtJVZgj0ltMZEE14aduofURkBAAUVmnetCG1KCNiJUnNkwnfWHxAY6pgFmBj0LO2cUOxTXHziQbMUK4zuYakMuOdBWuWeu%2BxQ4FO83vm2HASkX7bvWHeXRhZXzQcZgbK5C4mLdh3zhThSLGq%2BpS%2Fmi5qgB9IFg%2BRVIwfAraMc5zyKwyN%2B6W%2ByiFWBz4SNIqXjTRezlpNzyEzgazdop6std%2BGiLO0AJxaArhQlVs9OOqTeIIJVdycTENG7LkIlrAfhfQL%2B4WxK9hFtl53mscEIg&X-Amz-Signature=bf02ec1d0aca01d5f31950029b60367c17a5002442553be9bd5d683a619652fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=APS9OY_p6wo&t=423s)

> 🔥 **아이템이 3종류니까 플레이어 퍼블릭 변수도 인덱스 길이를 제대로 설정해줘야 오류가 나지 않습니다**
> ```c#
> public GameObject[] Weapons; //player.cs 에 public변수 설정
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d152ffd3-739c-48d5-8f85-41fe16788051/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVYLGTR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDHLK5XsnIWyzeH8tRDxuWkFy4RthmwKcR62V14mZCemQIhAO0XN0Wy%2FPx6r9O38%2FzqVSXMH4q2j8jS%2FGZHRvT5gJSdKv8DCCoQABoMNjM3NDIzMTgzODA1IgwniQvBAnpOuWll2JEq3AOIgYnbwPhQ1JcS%2FmFTQtq9TQLi7sANZCLT57bYo04lR06ul6MMqQDj7EMJOvd9oMbXC1gi%2BHqffaGw94xTLKPUPlGWyzrSKeZs%2FB%2Bq8YXbYkcnTgo00GpGpcId1%2Fku1Fz8CrRFZ6uyMBePgc%2BV9%2BatJ1mLa40EF4W%2BOBVJcIaUN9WPLh8iHYFffPqb3LFqhR9J0yxfeY2UKPq%2BFL67Df8YGGKLlQrDu4ds%2F71rCsvKEgsAU2j6r36X9EbL2leaUfvRWk4ynhBtu2WsquTUz17lAhg0ZAGpIQVvFdhy4XZR2EcdQrsNnDFEnMtlIOvV1n0XwGiR%2FPhDUlEvaiZPGTXCMC7AqnfmWEBLl6oznJzWD3nB2OVSLQeknulKUnf3vn4NPSiYOFjr89hUs43MLcXBlHUc4ZGlsqnvDE5BNXO23cJ9JoMcklMmM2efhcPbopcahAvxiEkJxFwce5QjDiNEte0q27dRaAE1qMNDpC2SC90JtszdccwtTqbOtviacejt9Tpcskz9oTh7%2BpZfKf5Wot70ZP3W%2BKaFjROWwcjlF3HilXYw%2BPJgtkQD1VzHGKGZ10CZtrEkH4aGEQe2fbHoQQGKPS%2BxZ2qKeeryQ57QibUmWnF3TOAWPHDO8TDT9ofEBjqkAT4ewdiPQdNUsKFC4%2FPXbEe%2Bu1NgNcG1DD0OoIYxcuvklinpa9ahYm4mMkMJAxlEOBU9M2fmAvVO%2FvA%2BWXJuBcKHQl877SnhV2vZOQUdBV67EZLmNTCnHKmev6g3AIbQN9Nzk7u1ROdz2PqKoooK0PNZRzMku5MACrRh8%2BXnnSo1%2BHvBL0Po%2F8ko76OPaUnQO1HQ%2FuZcFlUFhD3rJQuxBtQimxtT&X-Amz-Signature=4d1ebbdfe06bd3a09db3fb6fef65ecc7fa73ad8adf534e6a43a725485a08d9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c3b70f36-b101-4892-8dc2-7e58a21fddd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVYLGTR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDHLK5XsnIWyzeH8tRDxuWkFy4RthmwKcR62V14mZCemQIhAO0XN0Wy%2FPx6r9O38%2FzqVSXMH4q2j8jS%2FGZHRvT5gJSdKv8DCCoQABoMNjM3NDIzMTgzODA1IgwniQvBAnpOuWll2JEq3AOIgYnbwPhQ1JcS%2FmFTQtq9TQLi7sANZCLT57bYo04lR06ul6MMqQDj7EMJOvd9oMbXC1gi%2BHqffaGw94xTLKPUPlGWyzrSKeZs%2FB%2Bq8YXbYkcnTgo00GpGpcId1%2Fku1Fz8CrRFZ6uyMBePgc%2BV9%2BatJ1mLa40EF4W%2BOBVJcIaUN9WPLh8iHYFffPqb3LFqhR9J0yxfeY2UKPq%2BFL67Df8YGGKLlQrDu4ds%2F71rCsvKEgsAU2j6r36X9EbL2leaUfvRWk4ynhBtu2WsquTUz17lAhg0ZAGpIQVvFdhy4XZR2EcdQrsNnDFEnMtlIOvV1n0XwGiR%2FPhDUlEvaiZPGTXCMC7AqnfmWEBLl6oznJzWD3nB2OVSLQeknulKUnf3vn4NPSiYOFjr89hUs43MLcXBlHUc4ZGlsqnvDE5BNXO23cJ9JoMcklMmM2efhcPbopcahAvxiEkJxFwce5QjDiNEte0q27dRaAE1qMNDpC2SC90JtszdccwtTqbOtviacejt9Tpcskz9oTh7%2BpZfKf5Wot70ZP3W%2BKaFjROWwcjlF3HilXYw%2BPJgtkQD1VzHGKGZ10CZtrEkH4aGEQe2fbHoQQGKPS%2BxZ2qKeeryQ57QibUmWnF3TOAWPHDO8TDT9ofEBjqkAT4ewdiPQdNUsKFC4%2FPXbEe%2Bu1NgNcG1DD0OoIYxcuvklinpa9ahYm4mMkMJAxlEOBU9M2fmAvVO%2FvA%2BWXJuBcKHQl877SnhV2vZOQUdBV67EZLmNTCnHKmev6g3AIbQN9Nzk7u1ROdz2PqKoooK0PNZRzMku5MACrRh8%2BXnnSo1%2BHvBL0Po%2F8ko76OPaUnQO1HQ%2FuZcFlUFhD3rJQuxBtQimxtT&X-Amz-Signature=21ec98c02a52820b9cc921a74621a9181194e1ad5bf743bd2bcc523ccf463826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


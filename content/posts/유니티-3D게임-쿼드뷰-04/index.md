---
title: "유니티 3D게임 쿼드뷰 04"
date: 2023-02-08T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "아이템 입수, 잔상효과 파티클 생성, 수류탄 회전 기능 구현에 대한 내용. 플레이어의 아이템 저장 변수 생성 및 아이템 수치 변경 함수 제작, 수류탄 태그 수정, 잔상효과를 위한 파티클 위치 변화 설정, Orbit.cs를 통한 수류탄 공전 구현 등이 포함되어 있습니다."
notion_id: "a8e0b9c3-cf5c-4fd6-8ca2-ff49fad8c5a2"
notion_url: "https://www.notion.so/3D-04-a8e0b9c3cf5c4fd68ca2ff49fad8c5a2"
---

# 유니티 3D게임 쿼드뷰 04

> **Summary**
> 아이템 입수, 잔상효과 파티클 생성, 수류탄 회전 기능 구현에 대한 내용. 플레이어의 아이템 저장 변수 생성 및 아이템 수치 변경 함수 제작, 수류탄 태그 수정, 잔상효과를 위한 파티클 위치 변화 설정, Orbit.cs를 통한 수류탄 공전 구현 등이 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=esGkgvm9eSg&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=5)

> 🔥 **플레이어 아이템 저장할 변수 생성**
> ```c#
> 		//플레이어에게 탄약 동전 체력 수류탄 변수를 생성
>     public int ammo;
>     public int coin;
>     public int health;
>     public int hasGrenades;
>     //아이템의 최대 보유수를 한정시킬 변수 생성
>     public int maxAmmo;
>     public int maxCoin;
>     public int maxHealth;
>     public int maxHasGrenades;
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ee169da0-5a4f-47e7-8982-ce543b878cf5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHX6Q4ES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDVRUPX9%2FZW3iwK%2FCBS55vOwUJhctw0icpSB%2FD9TbppMQIhANTxfZt%2BYRdTYxR3%2BrE9RE2WR4IqkaZB2EuOgmkKkQgNKv8DCC0QABoMNjM3NDIzMTgzODA1IgyScl8%2FYml61lbaZj0q3APl6jlSZUMuGO0lNG3vTeiQcGOY%2Fsr1Tf4uBFuLPweundER5KtVyXiiMhyk8AUzWpNxNFEll0y7aDsHqWw9BEl0L9wO1fCswSRq%2BxgU511A5X1gAQVSIollv1h6bwCmpktgkzytF6%2BkAa%2B7ALGZfJuNbVlQL7GpgjS5MxhBLUNgWyPwpuzfv7NCoROWOlGytlEuYRny4p7WIoLEK%2FkWbXVhrRBx4IMjTgEG2oUD3h5c%2FGelUmboPbjagd4OEBs7dMZcc1vjQbuUYms7%2FkCFs7GRH8pnSoxgEZoeFgXLgXYam6BX7A%2FfkBKBdlHuBsHwxPJ23lRCXe%2BNqMo62j4Mh59a%2FVjR7I6ebgU3q5sEJZeRvJk1cwCT4fypzWfGbBdD122HVXN%2BQk09S44%2B4K4Q7qCnqB21iBNoE3UVp3oDEuru4bcI8E%2FbV688MlgW1TxpZ%2FUhBn6M47mj8ID1FWz5Sz7GgD0S16fa6bn%2FbPOHk%2FrglWhnOQsfWKz6yG3N6YxYYU%2FkcClxIsfo8PKx%2BZMZVe8coiaxo%2FdISo1FKTOzRQlz%2FasfoDA5gPx%2BRfz4yvcHpwSCsz00P%2BWBgIahsOjLNHLEGSeOVAHsqjhcXtUNNj7uWaLbGvf3ReOqEcs%2FNDCov4jEBjqkATZ%2BqTCkSMihLCSHrSupV6csHHgTu1zfLE7SA%2BpnGLUnkyyKtJhh1266GsiAG%2B08Hg3ce5DaVsxHLI7gLQSTENYYnRytdTNCeQojSBX4cghrUsCocB5gmK1F7%2Bsy7Zfx0BQTnjqkS90DpGY%2BTiLTMQ6QUuVnaCt9J%2BVmot4hmJlwbDWQisY1eYsqlLTk27NLDR7QUFT9rDCGZItKp3Hu6WKOAMrE&X-Amz-Signature=707ab6ac7c09f38c36832ad37086ac639267c66c20b4871fc1963b8b7cd73bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **아이템을 먹었을때 수치가 변경되도록 함수제작**
> ```c#
> void OnTriggerEnter(Collider other)
>     {
>         if(other.tag == "Item")
>         {
>             //Item 태그에 있는 다른 컴포넌트를 받아온다
>             Item item = other.GetComponent<Item>();
>             switch(item.type)
>             {
>                 case Item.Type.Ammo:
>                     ammo += item.value; //아이템의 밸류값을 ammo에 넣는다
>                     if (ammo > maxAmmo) //만약 최대치를 넘는다면 최대치로 고정
>                         ammo = maxAmmo;
>                     break;
>                 case Item.Type.Coin:
>                     coin += item.value;
>                     if (coin > maxCoin)
>                         coin = maxCoin;
>                     break;
>                 case Item.Type.Heart:
>                     health += item.value;
>                     if (health > maxHealth)
>                         health = maxHealth;
>                     break;
>                 case Item.Type.Granade:
>                     break;
>             }
>         }
>     }
> ```
>
> > 🔥 **수류탄을 먹어도 아이템이 먹어지지않고 아이템도 사라지지않는 현상은 내가 수류탄의 태그를 웨폰으로해뒀기 떄문에 `other,tag == “Item”` 코드가 작동하지 않았던것 또, 타입도 Granade로 변경해줘야한다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ebbcd86f-5cdc-4ae8-9e42-35b7e268411a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAFDAFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFjYdBUdJh1o9zeAJasck36S3jIpF8WSvGZ95FG18GMVAiEAhfrX1vthGgd6Kz96WmZdsDFkPc9CeqGR%2BD5afnnVO8Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIDPCQuCPJHb%2BVpK0CrcAySPIwNCX2MIAhXjgItwZO8RmBdHGSzqCR7%2FPG7xC1i5UTtyUd9YRtk4O8T4gj0PWRCXTZQwQ5YOXxMAV0%2FGY46XpMbSDOaELNrVv7wgMJ51ZsS2Plw7CWMGwE2mkyEDkBYbqwTq7rEIQDdWFiy4jmrysHDJDKx9LC9%2Bo4802thCMYLYlZhoLyJfdEnHs%2B9wZ2hXci%2FqsOa9PcuorQgxuG68dt4MA4BhY5%2FvHa4FtmaEHcDnhXWcZ3S2oDmW0QLjQb3QiHEV7ymev%2FLQetcCqihkvfZvyg0OiR0i0b5PYw1g13qtvfrzvnfcmDXfZ5eNwNx7QczztF4GPPExfDP6WsOteVQYinCyXT4U%2BN6Z0ndyPr0mwpkfT3ywpYZslKzBTKOlUBzyffI9%2BGe%2FYWSFY6l35Q1f2lMTzrPfnhYz%2FLRSXMxCL5DALfnXIxwjIBMoDF4DffwSX8e7aICVjbmajpg2FyTAfP1Vc2cg4coeXJElGVAEe8Nej19GAIq3EHEs7HgR8jcbjSvdD7gr3coBi9Fh0EUgIhSZ5udNFCmirWq7n7ec6ydQT%2BqSi9onvAn6Az9kbwJZ1VLqT30nzTEXXpTec0MRhgo9133o6%2FfHZEQ%2Fgb1jiqbIPofjhbpXML6%2FiMQGOqUBbPzeXFkd5uWrKx3UP369%2FniBYXwdidMpNr4EUx4MFaVE25%2B0rK0ZEMO%2FTi7rFQA%2FFd3bVMyEDdZvtxZKFcfa5aMw%2BaPjNn%2BpAHmTnI0B1GzIvc8nmYFTyXLrdC8hsACcu4YQ93okM5CwDh%2FH7mI7jldxkS4kmmb%2ByhWPrMsnyNH1o%2FRMEpEiJc8UsjyhuEI8X%2B6T6C4rAEWHvyke4OBNI%2F%2FVuVrR&X-Amz-Signature=e99c2d48fd315a16a975be9a5ea81b38481c7ec3f6d9190e2a7f568f0355c8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4a70c41b-d447-4075-8d84-568da9c18746/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAFDAFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFjYdBUdJh1o9zeAJasck36S3jIpF8WSvGZ95FG18GMVAiEAhfrX1vthGgd6Kz96WmZdsDFkPc9CeqGR%2BD5afnnVO8Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIDPCQuCPJHb%2BVpK0CrcAySPIwNCX2MIAhXjgItwZO8RmBdHGSzqCR7%2FPG7xC1i5UTtyUd9YRtk4O8T4gj0PWRCXTZQwQ5YOXxMAV0%2FGY46XpMbSDOaELNrVv7wgMJ51ZsS2Plw7CWMGwE2mkyEDkBYbqwTq7rEIQDdWFiy4jmrysHDJDKx9LC9%2Bo4802thCMYLYlZhoLyJfdEnHs%2B9wZ2hXci%2FqsOa9PcuorQgxuG68dt4MA4BhY5%2FvHa4FtmaEHcDnhXWcZ3S2oDmW0QLjQb3QiHEV7ymev%2FLQetcCqihkvfZvyg0OiR0i0b5PYw1g13qtvfrzvnfcmDXfZ5eNwNx7QczztF4GPPExfDP6WsOteVQYinCyXT4U%2BN6Z0ndyPr0mwpkfT3ywpYZslKzBTKOlUBzyffI9%2BGe%2FYWSFY6l35Q1f2lMTzrPfnhYz%2FLRSXMxCL5DALfnXIxwjIBMoDF4DffwSX8e7aICVjbmajpg2FyTAfP1Vc2cg4coeXJElGVAEe8Nej19GAIq3EHEs7HgR8jcbjSvdD7gr3coBi9Fh0EUgIhSZ5udNFCmirWq7n7ec6ydQT%2BqSi9onvAn6Az9kbwJZ1VLqT30nzTEXXpTec0MRhgo9133o6%2FfHZEQ%2Fgb1jiqbIPofjhbpXML6%2FiMQGOqUBbPzeXFkd5uWrKx3UP369%2FniBYXwdidMpNr4EUx4MFaVE25%2B0rK0ZEMO%2FTi7rFQA%2FFd3bVMyEDdZvtxZKFcfa5aMw%2BaPjNn%2BpAHmTnI0B1GzIvc8nmYFTyXLrdC8hsACcu4YQ93okM5CwDh%2FH7mI7jldxkS4kmmb%2ByhWPrMsnyNH1o%2FRMEpEiJc8UsjyhuEI8X%2B6T6C4rAEWHvyke4OBNI%2F%2FVuVrR&X-Amz-Signature=78550478c1a1cf01dc556619396bc37effa833d7741cfec8b2127ea3c7aa3ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
>

> 🔥 **Null Empty 에서 아이콘을 추가해줄수있다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/69280c49-2201-430d-9ee5-ea53211c427d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI5HGIOT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHJxI3bKBYXYvGXY32H%2BZVt4cw8p6EMk8JsWfO3T7HqQIhAPXiNlDx0QKP6LQKL738B%2FqVzLv6wM%2FLQIFVNxD23JFrKv8DCC0QABoMNjM3NDIzMTgzODA1IgzryPeId%2BU1T5WLTIcq3AMVxCKd16X6LGCq7uWs%2FC8e%2F%2B%2B8iNeSsGHOWTknb5oPHDZGvqFzwCjCn3V%2B%2BgI74vicAZtl0nMQu798pXb5PZcRpCNwJZlhj1NKru6lIDmqAsqIdZATSVG1mve%2B0K%2F4tYpym1c1ZsCtLs8FupTG8G6KSkBWV2NQbSF%2BzYrfBeNtUrLNqbpF7KzOf%2F03j%2FFdkQ48kre1ajvyhVa4JiWZk2JBIXyIaCX3PNgXrptuFYbAh2UF2UsCvmGdzfY601sODO9cehABiKhxYD4GLLrb1mlvAy7lofYhpDYAkVoxdX2Ltc4iQ%2Bg9Dk44ogRzG1LtrtDELT17Rry1tiWxPSJrwro5O4diIso18YzqCHAyzhrTd6dSTTpyhj5RvOrSX36gGVi51pDlt59KoxM3BzyKITcf%2B6XZpS%2FUFEzy5D0ZUakvgUIw0ONpUcHYUjvLStH0aKiks%2BjTKy1bM6N5SsBJTLDiUKCiw6dxABuVu5WQBkK8ru7NARy4I9IRksfmvdYJUj9mOnMf%2BH0qeoxn9wROig6Yc3Pjbsxmkz4soMISvjOn%2B7L98wRuWlFEPwN%2FtKpdTZFnhCo0HGGRgC4IrAFhcze8nqUJeETiyQ5158OxETyCVqQOkLQR9yFcAT6jWjCOv4jEBjqkAegQ7AER9I6tUGc6I0G8Ko%2BZT6pin72KRUB7bKgbgZfDBV4QIHbd9zKfDNRfiNmEjTridh3qACb3NwECLrkOmvQAi7%2B9U7tlMwjCmaEiDGOcg91v%2F9yQuVOU95OzlldDJ3d%2FltbE8IXilrQW8FdM9eba28Y7y92bLdKhYTTVJq9dBJu0CM3hBo6yQEz1olcpX9Wcy8vNyzN0EIbkhocPk19mq6WY&X-Amz-Signature=6b6ba60f01d10d84b25608ccdce6a400d00069d5dd0c8c9ac6a871396a1dc964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
>

> 🔥 **Rate of Distance : 파티클 위치변화에 따라 입자 생성 (잔상효과)

그리고 Simulation Space에서 World로 설정해서 잔상효과처럼 만듭니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/55995daf-7c3d-42a3-a6e7-e4db3c749eae/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544WZXF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHbbi6n%2BsmIi8XTEda6BSZQqMeMDrYsxXdN9yXixj2YRAiEA70JRSVnWKl120cLxXoVHHboLUkxQkjGIck5HanPvCAwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC7uzM3cHt2WfjCHYircA7MxAcWbQO%2FrUCyGap0x35k0C83YhrJwnvrDgQtGopQz2NelMBUgYHJ0Xv5pTFG6kC06MBE5J2UkemAXWzyg8FGDGlZIvmiZUhknf9f%2FGgJ9K3JPNH5uLdlocoaQk9QPGMG12iOr%2BEPIy2RgNUP0eeGrKx2PJcorGNJM0mVhx6PBTpc5HGdHLVyjMfVuNpgMujJYZBFsCIHYPWo8HC1pk6ICecz0lcPUGTmq%2FNQOuNWqQ3%2BUhc4dJZnH55%2FyonnnW5sGzJQ%2Ffc1d3O6Hx5cx7mMB4xiLSKkaNlBTRcbwZYHRypxUwLL%2F7TdIfp0rm47iE5gW2eouZHGv3HTPs1jC9FE8J7Iz%2FYHsATFDAFYtdDr%2F2vlMFdkmJlK%2BMBD0RLqUqXQ2KsKJEgkurzjLEBoew0Ih%2FYfRcv9yN7GSljTpThmWRgliOZF98EnWxG6Qoy7W%2B%2FbohO9Mts0qUQ7WZtLw%2FCcWjmeHoJj1hV3brzc0RYCG%2BmAXhvP1Fs1Idl5nU322aCPqMbYyrSX7TKICjiQUfV5TAqUmj15uOkX1KLxgiNALQ%2FwR853DKnQT5EWO3jjWwSS2piM4pj5GePTfAQMroAAgbI4GERfWGsBiX7cAnoWYlnGqKInx8q5MD6eCMNq%2FiMQGOqUBtRqWwI9MHFXnZQlEPWmdYvzn7mxPQOUM%2BpkcUZPhW7n1E7zLbzDmq1btVghN9G2Rgkbgw5PlyQgLX4EOk3Vy1A9zc%2BG0Y7PcLp0KC9DxIxSu8OdQ5saHr8WgSrGLX3V4%2Bq0OF9kz0BdNo%2B5vSODgB4VnKv8sCHPFjVU3fxeaJwfmNH0oP2v0ZhXJMxTBqygHsZ3F7TtpElKRwOqFlS6sg2YlRs1N&X-Amz-Signature=5e9abcc76e383a4ae03fa1a25bf10555a05f42a36b7f4ddbd9394b6bbf66cfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ab028f20-1df7-48c6-89ff-5e6b583a83d0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544WZXF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHbbi6n%2BsmIi8XTEda6BSZQqMeMDrYsxXdN9yXixj2YRAiEA70JRSVnWKl120cLxXoVHHboLUkxQkjGIck5HanPvCAwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC7uzM3cHt2WfjCHYircA7MxAcWbQO%2FrUCyGap0x35k0C83YhrJwnvrDgQtGopQz2NelMBUgYHJ0Xv5pTFG6kC06MBE5J2UkemAXWzyg8FGDGlZIvmiZUhknf9f%2FGgJ9K3JPNH5uLdlocoaQk9QPGMG12iOr%2BEPIy2RgNUP0eeGrKx2PJcorGNJM0mVhx6PBTpc5HGdHLVyjMfVuNpgMujJYZBFsCIHYPWo8HC1pk6ICecz0lcPUGTmq%2FNQOuNWqQ3%2BUhc4dJZnH55%2FyonnnW5sGzJQ%2Ffc1d3O6Hx5cx7mMB4xiLSKkaNlBTRcbwZYHRypxUwLL%2F7TdIfp0rm47iE5gW2eouZHGv3HTPs1jC9FE8J7Iz%2FYHsATFDAFYtdDr%2F2vlMFdkmJlK%2BMBD0RLqUqXQ2KsKJEgkurzjLEBoew0Ih%2FYfRcv9yN7GSljTpThmWRgliOZF98EnWxG6Qoy7W%2B%2FbohO9Mts0qUQ7WZtLw%2FCcWjmeHoJj1hV3brzc0RYCG%2BmAXhvP1Fs1Idl5nU322aCPqMbYyrSX7TKICjiQUfV5TAqUmj15uOkX1KLxgiNALQ%2FwR853DKnQT5EWO3jjWwSS2piM4pj5GePTfAQMroAAgbI4GERfWGsBiX7cAnoWYlnGqKInx8q5MD6eCMNq%2FiMQGOqUBtRqWwI9MHFXnZQlEPWmdYvzn7mxPQOUM%2BpkcUZPhW7n1E7zLbzDmq1btVghN9G2Rgkbgw5PlyQgLX4EOk3Vy1A9zc%2BG0Y7PcLp0KC9DxIxSu8OdQ5saHr8WgSrGLX3V4%2Bq0OF9kz0BdNo%2B5vSODgB4VnKv8sCHPFjVU3fxeaJwfmNH0oP2v0ZhXJMxTBqygHsZ3F7TtpElKRwOqFlS6sg2YlRs1N&X-Amz-Signature=98b5df2ec787575bda46b2d6efca44afff8a5a1f0f60d427900b1cc3e51562ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **수류탄 회전을 위한 Orbit.cs 를 생성하고 수류탄 오브젝트단위의 최상위 어미에 스크립트 할당 ( Front / Back / Right / Left )**
>
> Orbit.cs 에서 타겟을 퍼블릭으로 설정해서 파일을 넣을수 있게만든 다음에 유니티 내부에서 플레이어 프리팹을 target 안에 넣는다 
>
> ```c#
> public class Orbit : MonoBehaviour
> {
>     public Transform target; //수류탄이 공전할 중심 설정
>     public float orbitSpeed; //수류탄 공전 속도
>     Vector3 offset; //플레이어와 수류탄 사이의 거리를 계산할 고정값
>
>     // Update is called once per frame
>     void Update()
>     {
>         //RotateAround 를 사용하여 특정 개체를 중심으로 물체를돌게할 수 있다
>         transform.RotateAround(target.position, //타겟의 포지션을 중심으로 
>                                 Vector3.up, //z축이 움직이고
>                                 orbitSpeed * Time.deltaTime); //회전하는 수치는 델타타임 적용
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cb0ab664-ad2b-41e6-865d-437b4fe5f541/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECY7E6J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCEH0rJjhg6X2l0YvtxZ7sJyMrmcZ%2BLt9816qTuXeo3OgIhAPp1jkncxUylorT1PF%2FlsOwIr6ZS1UCXzoZwU89yKhaDKv8DCC0QABoMNjM3NDIzMTgzODA1IgzHvafwDbwWXT%2FiGawq3AMLYKRBuuqdM%2B4YH7tdyLVGmHfV0dl%2FXm3oeEQMyV4CjKB2iVxEc%2FhEvOIMRnEFXvv7Twq%2BvBoZTDXrWoFNCAeCcqhaOeLR3F0NnIH6GN6sph3XKuif6wpdks9Nb1DpVHO%2BJwFcFdLO7oE%2BOVZLxPKLWrtj2zOOLX6eMmS9XncLfEznsjsVVbWm6oxCKqHJ4RcuVRQs06WwDbOxPtuYb45gN6u%2FZeWdUUToZRD0RlNNdILIw4OsIH2LiddIwrPjad4TtYucTBJgVchkunJEtOfSf%2BVTTMTcZy5Pvc3%2BtMtsnRH4VBHplMIAr48gXjzfY6F%2Fpe%2FGeSQfsoraR4Do1ggyRte0kQR6ZBijtVxTO8JLuKLbxNwTEr6vAUd8MCovEvYq6nnStUHtCJyOf9VqTUaQtkQTRVK38W22EOGAiQjA%2FLBpwr9VdD5h%2BM83H2rRbfdu4m3JyZyRyi%2Fm44MC3A3uH0e6Hk6hdLJdAV252vO3sEFEZ5tzmpm0UO3YjA%2Fdq9pRHqmWSBJ%2B446ybrEqTkXN9eEhScwGSfHXJnJODEYVIJ%2B3HoxIj%2Ft3teMUC%2BTOYY1IoA9F9RvNy1cu0N6XzalBrqeYIsJQ5TL%2FFYaU6rkTiqJmd80I1wLQcud9rDDAv4jEBjqkASSNcLYZAH6sXlq%2BOrbLfAdzYo0G8ENof%2FCzSQmMe0%2Fg8u31bsegPU5Nd%2FX8%2FToyp3VOOfWJBAUU53kaBOTfR4tt%2Fl0veOcI5PyVznrgaG5zZniFtlEJX5tI8E4xDt49doep4aBqt3ibvpBjaVWkqbwWgh6QwNEhEJfuzXBLivThMVmZVbWbyfFnDrIbeLlP6IhgroaNAVJ1WDGGkc4xSjp7aqci&X-Amz-Signature=ef7443710618a2ba0ac002dd14420a050e84ebae9eab819291f437774bc97221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> //Player.cs
>
> case Item.Type.Granade:
> 	  **grenades[hasGrenades].SetActive(true);**
> 	  hasGrenades += item.value;
> 	  if (hasGrenades > maxHasGrenades)
> 	      hasGrenades = maxHasGrenades;
> 	  break;
> ```
>
> 그 후에 OntriggerEnter() 내부에서 수류탄 먹었을때 수류탄이 보이도록 코드입력
>
>


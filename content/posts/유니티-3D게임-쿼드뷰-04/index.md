---
title: "유니티 3D게임 쿼드뷰 04"
date: 2023-02-08T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에서 아이템 수집, 잔상 효과 파티클 생성, 수류탄 회전을 위한 스크립트 작성 방법을 다루고 있으며, 플레이어의 아이템 저장 변수와 충돌 시 아이템 수치 변경 로직을 구현하는 내용을 포함합니다."
notion_id: "a8e0b9c3-cf5c-4fd6-8ca2-ff49fad8c5a2"
notion_url: "https://www.notion.so/3D-04-a8e0b9c3cf5c4fd68ca2ff49fad8c5a2"
---

# 유니티 3D게임 쿼드뷰 04

> **Summary**
> 유니티 3D 게임 개발에서 아이템 수집, 잔상 효과 파티클 생성, 수류탄 회전을 위한 스크립트 작성 방법을 다루고 있으며, 플레이어의 아이템 저장 변수와 충돌 시 아이템 수치 변경 로직을 구현하는 내용을 포함합니다.

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ee169da0-5a4f-47e7-8982-ce543b878cf5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCJXNMX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCsbexE%2FTzVczi1TgVdCCTN1NtdZAkzJaf3Ho0ZGiwAawIhALS43h4p%2BqQB7vNk5kJYBa63wML38pZI62e9NNjOPaIyKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUSZp9GyTJs%2B%2FOSVcq3APFMgeOKfgjo3nDnsBRaJnMWNnUijRh3wisq8PsfP8rkSJj3FKkzSfdDzK5OnXXiH%2F0Ww5JAPf9a2MkT0mfNxaaLJi%2FNH1HmPRVq2ky%2B6OJEfbcZDpx1LIr%2BpGC4hehnwVqzM3pPvZMGM757oJGDZCx7CTWtFL8wWWzZNE3mgcFA443sK3gnMbJ6PCDaNth%2FabzJVv8%2BZJwYaUG4%2BwLrbaUSHpn1TpN%2FyC%2FYUtSsrugcZjjNWXc2bJzmccZLhj48OtUb5Uc1a6op%2FjPSxp1hLUGcG2g4OeTmIJnRi3HdegXItMCqMADia5gjnpfDXk8q8CR4XWnAhZHuKYspc4XkC4J9eREz2wmQ7v8D%2BZMTDHT2E8q21UKirovYYuW1s58lE6F5S%2BL79F6%2Bj81z4DSYrtpbxxAYP9Om4rOuzJpjNIryoAdn9NFWrYM4Q80SKaOxPC%2F91Q6rcocvmDYMQxS3xTu0cn%2FW8DkbvjaLGTELkdFWy6s%2BAeNtu67NYYsLitdwXQYEGx4NW0uPJSvNuGx7yLfW6MKWtICq6BpHDmrYobThDudmUt36NP9XgYafxMI0Q5d%2FMP4lH5QwCOhOnDOnecnik52baCgHKFJ5lq1EZGY9swCNdNhinBdftgPKTCS9YfEBjqkAfENO36BdXme2KqoX4ERs8UnVEAhnueXR5SpcxJk1U0NdL2gRIyDsgj5Douta1lw%2BRgBsWMpDgh4rU8ThZRfQL3adQwy5HMkxq2wd4vKKCaaNl3BB06t3UTdholzPPnRwZOW6O%2F9xrDsob8cvSnHdBTjZeGFHlLm0ju501Dzoly39A%2FqQ1Fc5tS57MUv0did7nzqQvnpea9ZMIcwxmvlSlszsGN8&X-Amz-Signature=4b11642255dc2098f7401df98bb59ca74ea9a692994179b3909a9c3b88987b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ebbcd86f-5cdc-4ae8-9e42-35b7e268411a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVKPQSK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCm%2BDQth7VZV994h97svU1tGUi4VXFLhWam4DKOEvJ5SwIhAMUC%2FQx21gKBcNf68FxX5Cxt4v2o9h%2Byc%2BIZsJ5QQplgKv8DCCoQABoMNjM3NDIzMTgzODA1IgwHf%2BNiH2UwQ44wPPMq3AOs8sS2baP48xNEDmtVI0rNk%2B9GQ85X71HRu6KOTpq9nZ7ERTRFBn4kkJCqab9jkgbFqJtZAm3JI9tc%2FmbLpkYfOgTA9nMsme%2Bmi2ZN%2F0y%2B7IyAp6fkCa%2B9nofLd3dLeuhbW4fiBDIsymXN5vRFtn4QS06%2FFa%2BrqpvtuGEj7XRHWiKYugayHmaKPRKvL39pb7SNUacl7fIJrZsG8lhYU3%2Fv7bZ6uuLJe30RHxXGwm5kWCE3CQdJAgWCrxIDGTH2sQkuiRdoukKMz5DZ%2FvJPqjNTrWOLWLF6fdIAE3lSDJdYKp716nJZQg5%2B%2BRd1CfSpI9d%2B4EzNBx7dnTyQ6C%2B3oria9MT83SJDy3WaPBMoxJF8XrlfoNur0n8C8UJjtMrYk7eRyEKozcObPCJDLjCl%2Fx3gOKdmSFmZuC%2Bv1mrzGU2iDraXl1lougMM5SdjvaAP5n1b0dcSSSBxuYlC2gt2Ftp8Iom5KAWwBZjImSTLEMgs4D%2BCIA0b24c2uWiJInL8oxLOCOd7wyXWkDyvZ1O%2BM8Wlp%2FOb8E%2BuDpL9KGJpIO1cecRbduFMmqlzRiBN2o7qggu%2FfGaN6fvHh3X434Hmd0FCzpds1qfQEUHjS26SYtM%2BexIORC2wFAgSKMTTuzDk9ofEBjqkATCEGH31fgNXeu2pVdv5UliO1lYZTx09MFXewoWQH2fdpGQW5%2BUM%2FSPDFSy3S7RV32bBuwLyjoWvVqefnPgm89QE8nHhEWQnFAEY4W4IE14mxRZ5oMG8RfDEqdp1NfiNCffNF%2B0K694PIS84CoKhrnpA6tsu7bUbeB%2FI%2FiLyl%2BRbBIpsq5kT%2B3IqlcKRutvsYl0QlrCAa80T%2Bs35ojHhvziRrNZr&X-Amz-Signature=abb808c90317f4d944615c004035b185ab5d25594abcdc1ddd49e5e4da3b7903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4a70c41b-d447-4075-8d84-568da9c18746/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVKPQSK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCm%2BDQth7VZV994h97svU1tGUi4VXFLhWam4DKOEvJ5SwIhAMUC%2FQx21gKBcNf68FxX5Cxt4v2o9h%2Byc%2BIZsJ5QQplgKv8DCCoQABoMNjM3NDIzMTgzODA1IgwHf%2BNiH2UwQ44wPPMq3AOs8sS2baP48xNEDmtVI0rNk%2B9GQ85X71HRu6KOTpq9nZ7ERTRFBn4kkJCqab9jkgbFqJtZAm3JI9tc%2FmbLpkYfOgTA9nMsme%2Bmi2ZN%2F0y%2B7IyAp6fkCa%2B9nofLd3dLeuhbW4fiBDIsymXN5vRFtn4QS06%2FFa%2BrqpvtuGEj7XRHWiKYugayHmaKPRKvL39pb7SNUacl7fIJrZsG8lhYU3%2Fv7bZ6uuLJe30RHxXGwm5kWCE3CQdJAgWCrxIDGTH2sQkuiRdoukKMz5DZ%2FvJPqjNTrWOLWLF6fdIAE3lSDJdYKp716nJZQg5%2B%2BRd1CfSpI9d%2B4EzNBx7dnTyQ6C%2B3oria9MT83SJDy3WaPBMoxJF8XrlfoNur0n8C8UJjtMrYk7eRyEKozcObPCJDLjCl%2Fx3gOKdmSFmZuC%2Bv1mrzGU2iDraXl1lougMM5SdjvaAP5n1b0dcSSSBxuYlC2gt2Ftp8Iom5KAWwBZjImSTLEMgs4D%2BCIA0b24c2uWiJInL8oxLOCOd7wyXWkDyvZ1O%2BM8Wlp%2FOb8E%2BuDpL9KGJpIO1cecRbduFMmqlzRiBN2o7qggu%2FfGaN6fvHh3X434Hmd0FCzpds1qfQEUHjS26SYtM%2BexIORC2wFAgSKMTTuzDk9ofEBjqkATCEGH31fgNXeu2pVdv5UliO1lYZTx09MFXewoWQH2fdpGQW5%2BUM%2FSPDFSy3S7RV32bBuwLyjoWvVqefnPgm89QE8nHhEWQnFAEY4W4IE14mxRZ5oMG8RfDEqdp1NfiNCffNF%2B0K694PIS84CoKhrnpA6tsu7bUbeB%2FI%2FiLyl%2BRbBIpsq5kT%2B3IqlcKRutvsYl0QlrCAa80T%2Bs35ojHhvziRrNZr&X-Amz-Signature=d1b06198be20c05cb86b7255a1c57deccfc28c85f33c2f6491762c74f45c86c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
>

> 🔥 **Null Empty 에서 아이콘을 추가해줄수있다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/69280c49-2201-430d-9ee5-ea53211c427d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5Q4SRZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQq9EwEDYCMLVPa6G3a077ALORN7j8jlTHGoDYw7N4PwIge0J0UJWS1KJsjUjp8uYqG4K4zjVotRSx4WgOvmw9KAUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAL0v8bJWTDpNlc%2BeCrcA65N1I8K13lMV22Xx8dPsq6cOt3tab69%2Fr8AzySB4AN0kOHwA4qE5Gm1Na6tvtnjBzxOCu%2FeM5EYViU%2FFDuJDze9kaVhvN%2F1yMNHxO%2FgpaUTIUVH2pHh0AJnUrTXNN2su8NGaHGfk0%2FUU1A6QFoMh1tdkugEUwfolZjHbqcdKbuhcLHZ%2FGM8NHjjlDs9r8WSj4bBKwzh4IyW5Au1lgWBwmHEDD8qKjJIRkgKpP%2FwoDDdDtKa2qKYJCu5M2WPDeYEnZapy2ood%2F9c4vmWm5kwB999q9RmDloDG1%2BsleRpqjCvVfHm2IhDj1RpCxLjHcoj35kSkoxX%2BrYF14Eg%2BrbgSZfTOHg32ebXKH7tdraT9uKqvcHHZKfkCwbgGKHOjhFYHUDeUdDZWWDudgUoRp8NxJ88Syf6lDH%2BqYPmyBu78aUK%2B7WbAWA6RMnOGtELM2y1O9uDmPpkVDFtKyD9a4PhOYeNFJjAHj42iSycnKEsTzWiBgpqorhPVofo9yLyFcr19fftaHu7J7ujCOm3DexpxRz14wYecYtav1f5h7Vc%2FFWjMpYArwrQ3Lgl2sGLa1Slx83PgN5z5GIqC%2FvaP1DMcoGpxGYcnRTMwUM%2Ba6%2FyO%2BdM10xepZ7nXy%2Bcr1Q3MJb2h8QGOqUBKP8DxJbti6ozam4Fz0FIMD0uMCrySVw4r4FAUn0hFoyn9J0DPHm28yUtZrfVfNOBpvWf3Fy0VqNZ10A66O8SIVW0bZjwRyIVem9uFUvZBBkrytpK7D17UhVbJKEz5Pk9R5%2FUR2VS6ep%2Bh4w41SF%2BV9OxMOHRs0u6YMNldUZiqLiSBkV%2F%2FSj3QrlTCcAuYSD%2BVAh%2BbTWLYJhoZ6UpodrkmDNukm%2BJ&X-Amz-Signature=137c6d9774662ae7c1fa901745d54e1648963db7456cd7fe757f382b9f51a2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
>

> 🔥 **Rate of Distance : 파티클 위치변화에 따라 입자 생성 (잔상효과)

그리고 Simulation Space에서 World로 설정해서 잔상효과처럼 만듭니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/55995daf-7c3d-42a3-a6e7-e4db3c749eae/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUSEAEE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDeIOZeYWwF%2BRBPCJ8JHhXYBVgenF2wEEbLX5MXqiU0yAiAOFtpKnz5ue5%2FglQeetrKuccdvku9PVjuR%2FRGMynoRmSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMPN8XrTd3C%2BCey2ggKtwDK8D4tMmjHH3tzSRa1%2BztmPwRg1aZ0m90pHXS7avUV9GgLx5bmJP%2B6mCLoWPP3tKHzen%2FD10xIvyVzRwpEWBQt4%2BR57Ykkjt%2B%2FzC50obbiynfyzlq49%2FznXc%2FNadpR6CMtFZZ96veT0yMawaoD4pjFnMJ%2BBxQZ7Pj3SDCLl4zhhZhFsjPjO52zrNTixom9Vs3lUP8Sm6xoP0zflyXUaHqE9Aekn7CA%2BYM33eEkhNNYWkC8aqZTIXpILOnbgpT03ugO1Ev%2BKP%2B5xcqvq4fPBUx9Vc8VL28KG7lpYM2aG%2Bv7m3t%2B%2BYV7P5kumXqjQvEhA3aeyh8jjNVW2YUVU%2Bf3cDYzZ7iyrYc1G%2FfcnJ3Cli7oOJYIkpb4rsW3EYaEmVcHJDIs4GHifAHzRnNKEMCoXkNQK35xzPiXSwbedIIESLDvMdk7TPNiCI%2BiQNBNAFi6jOy9WKlkzaypllNIOHxqgqS8H4a0gUpLBMNtBJ7BFZe1X5eJGkaXznwbVIZqpcSUiUpdpznt1NK7VCzcvIwoxsoO6LkYtYU3%2Bs6LLlNm6HuUf67vgMMlMvFtfHp%2BwU0c1o5X%2FCu0fgepvxwphmHC7hfufwoGtE%2BFb1aQ8jK1d3vasNnaqkynj8xD5eQULAwh%2FWHxAY6pgHCPTH2YCPxadhoSIUVqkNz3ARgXn9bVlHcM1jte%2FGyjUJ1Mke2nkMSw%2BSniOdtXE331oHsO1CP%2FL5fi80tCfonbe6dH35JYft8%2FndMtMWXXrH2DVDCU31fy41jEVrVoi7yhR3d%2BmH1LJpDe3CaaygIOsexCCLAXV0h1gMHI0pBgpnpG89ipeTKwDrmAk3%2F3U0UOjFDuKBM9MdMuxw9OObriAIOv7Mn&X-Amz-Signature=14a86c8b0d9d917ecfe6bb469bca4d835734465dba93b543ab50fd978bf61aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ab028f20-1df7-48c6-89ff-5e6b583a83d0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUSEAEE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDeIOZeYWwF%2BRBPCJ8JHhXYBVgenF2wEEbLX5MXqiU0yAiAOFtpKnz5ue5%2FglQeetrKuccdvku9PVjuR%2FRGMynoRmSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMPN8XrTd3C%2BCey2ggKtwDK8D4tMmjHH3tzSRa1%2BztmPwRg1aZ0m90pHXS7avUV9GgLx5bmJP%2B6mCLoWPP3tKHzen%2FD10xIvyVzRwpEWBQt4%2BR57Ykkjt%2B%2FzC50obbiynfyzlq49%2FznXc%2FNadpR6CMtFZZ96veT0yMawaoD4pjFnMJ%2BBxQZ7Pj3SDCLl4zhhZhFsjPjO52zrNTixom9Vs3lUP8Sm6xoP0zflyXUaHqE9Aekn7CA%2BYM33eEkhNNYWkC8aqZTIXpILOnbgpT03ugO1Ev%2BKP%2B5xcqvq4fPBUx9Vc8VL28KG7lpYM2aG%2Bv7m3t%2B%2BYV7P5kumXqjQvEhA3aeyh8jjNVW2YUVU%2Bf3cDYzZ7iyrYc1G%2FfcnJ3Cli7oOJYIkpb4rsW3EYaEmVcHJDIs4GHifAHzRnNKEMCoXkNQK35xzPiXSwbedIIESLDvMdk7TPNiCI%2BiQNBNAFi6jOy9WKlkzaypllNIOHxqgqS8H4a0gUpLBMNtBJ7BFZe1X5eJGkaXznwbVIZqpcSUiUpdpznt1NK7VCzcvIwoxsoO6LkYtYU3%2Bs6LLlNm6HuUf67vgMMlMvFtfHp%2BwU0c1o5X%2FCu0fgepvxwphmHC7hfufwoGtE%2BFb1aQ8jK1d3vasNnaqkynj8xD5eQULAwh%2FWHxAY6pgHCPTH2YCPxadhoSIUVqkNz3ARgXn9bVlHcM1jte%2FGyjUJ1Mke2nkMSw%2BSniOdtXE331oHsO1CP%2FL5fi80tCfonbe6dH35JYft8%2FndMtMWXXrH2DVDCU31fy41jEVrVoi7yhR3d%2BmH1LJpDe3CaaygIOsexCCLAXV0h1gMHI0pBgpnpG89ipeTKwDrmAk3%2F3U0UOjFDuKBM9MdMuxw9OObriAIOv7Mn&X-Amz-Signature=ded65229e0477b470cfdde5fdb90e54b9fd19898c31226083e417fcfad2a1441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cb0ab664-ad2b-41e6-865d-437b4fe5f541/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XVSGUX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICaZA5jQYaZzg4eAYkman2c8L8MzXrfNIlAdX9lBbg3AAiB9bLHjgHoBhD3nMBwlU9%2FcugTypFnV4xqJ%2FIdDc5uMSCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM6tjxgFZREUkSqgCXKtwDfAjRQYf41N0aT6QPw07ecLJO2YNehuFYcoEBNMLSRSr4pOAIrG50fMsy%2FPpqyB840RK60cgyNcpW6j2PG6noakcRNWIOE1oIvB5OluA7T7Tc3s0CQJcVe7MvRdZQ%2F7UBgO2pCAHZs3h4oPxSWodZC9Lgoe8Unv1Hkfw5pBib8vOPl2dKBR%2B9Su3A0Hun69aJm5MM8wD3cHL28NAf%2Bp6D1JsUF21MMtQFTC7k%2Fyc3xHG8gusPUC0Tqf2oEfJ4oUUNajpo%2FmFO2vUmIj9KrcYkqFVCV2S6P5SydPohV0hYM0n0%2BgzewxNsqSHwrco%2BsuZQiIvMxJsmr8fosG%2F8lSSOqGId%2BfFnxaixk3MXaQnUooB1BU%2FLBFL%2FC76D6rBveKgciLtBRi4i4zizlRTGPVMF1pwXg%2FI5gvHXn89R%2F0JQ16h237L1Fehinf3TEc2o24OHTWd1inuU48D6r2bcy0gtFUc8THgHpT%2B5sk8r2uo6v22zoTabEKMerT7d0BlgT1UKSveu%2FHHgnLBZ6w98%2F5KTABLs3Qek3OAaeNXuo6CXFynkulWTbhzlZn0fZJOkVYAtwFg%2F9cmgyA1Px%2F52z8N7ufOgrTFhL4JRPXQfzQavBBu3FpNPBaCvHGe35zAw3%2FWHxAY6pgGGKex7s0%2FB1g%2FlCKzykhLvC9b8TPU%2F%2FOk6GSzVdiEIKj8M1pJROcipU9FL80SfJBpVkf8dxw4Yty9PZ9RLeq3bC6CmkfVCLBiMJesntxk%2FdqCsharPt4bNxW%2Bm21Q7a8tj7fA64OlgzW1lo%2Fa62KVyOM9GPqhVgNrcTS1ugdJvllaJXGLyo0j2uF6yGFM8m699L1g8HSzhQpCorM13LYhml0HhM7ld&X-Amz-Signature=16a4a389078317501121df78245a454c6c8c1a5218a7f8f9c00ab585bb6072c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


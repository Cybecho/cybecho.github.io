---
title: "유니티 3D게임 쿼드뷰 09"
date: 2023-02-17T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에서 적 AI 구현을 위해 GetComponentInChildren<>(), NavMeshAgent 사용법, NavMesh 베이킹 과정 및 애니메이션 설정 방법을 설명하며, 공격 코드와 관련된 버그 해결 방안도 포함되어 있습니다."
notion_id: "39ad5223-d16d-489b-a97d-4dcd626b0636"
notion_url: "https://www.notion.so/3D-09-39ad5223d16d489ba97d4dcd626b0636"
---

# 유니티 3D게임 쿼드뷰 09

> **Summary**
> 유니티 3D 게임 개발에서 적 AI 구현을 위해 GetComponentInChildren<>(), NavMeshAgent 사용법, NavMesh 베이킹 과정 및 애니메이션 설정 방법을 설명하며, 공격 코드와 관련된 버그 해결 방안도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=FBY_cmtCNHw&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=11)

> 🔥 **Enemy A에 Enemy.cs 를 넣으면 다음과같은 에러가뜨는데,  자식들의 컴포넌트값까지 받아온다는 의미로 InChildren을 추가하면 정상적으로 meshRender를 불러옵니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/34b5e12d-aa78-401f-a502-258c3b14a58a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6VIM6F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSnAX0V2qqrorOO1msXCk4fRxl%2FrdIGnEyKpRz%2FPZIIAiAVpyLHiLZxZ3bk05UTu%2Ft4CEmAHgWkiHO8%2BEjBLOgskCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdnA%2BrDQ30AZQCOk4KtwDIJqFSG2mCPpOCYz6gJN1XPBISP5qqx6uGsf%2BKDdxZanwsY1Jd2NVTkisknhAJkhieZyipv1HFBFRGBIne%2BEaL2IGEHMWl4yRp4A432eDOkMB%2Bs0HmJgi%2BbBA29Cz9I63UKOTiKfR9HHb%2BEtbpZ44MFGiX13eUddUZXedqz7lLeC7t4C0hxEQKWa6euY7p7yWGY3DGZrCKFVOZf9zaPRmNDT1B12u9jnALycz%2FUUIjFuXtNUSDB4ngb60Qndc4We3%2BBSkqd6IscM7wq8rhsXoupNTq0max%2Fk9Kt7yZsl0bF7y6zxjYugd95nPiSOhsthOvealS3U0Z2eMOQosg%2B9ubL81CqPpkbBy8sfuWSH5hWlmtToIHmpEEBD52gkIX6CzmKnOnRNxa8g28sSUYn14OaiAPDIfjjQk4NaG2PJVB5H%2F3npR8JwRTKleUkG1kDk03S%2BOcQApR%2Fhis5P8rvXNIxwLXbJGtpjHoZ9slbar4nDjcqV4B6SIO4GsPL1u9NIe3rI75UxdlBROQgN%2F7v0u6WpwMN5UsHZSiegd1uOzktPJxSE2Dx4uiGga3AbHfujYPzOBLIjJ6FmFru6dqSY3oIPA77PzM6Cyv5gk7jk%2BN7hymznzA7dfowhHMVEwzPaHxAY6pgFpZ%2BDwj%2FtMUGlLSGrJJQcpeAhkUxMLMgbLb6%2FKrJ6sEURr%2FhvOlzOTRsm2MUTn%2F2HB0xEIA9xsTVH01HpP1ZOpw6lWuEnPSqxRCTXH0svtG2ecDtl6q0pn4J6%2BwQZnVGOAkFU44JczUmDOFIY6OYvKHPC0zNviK6eEhvaSfowQ3cTpKgYQ48TWw1IOosrl84aRqvUUJnkbpAFgg8z%2FhKFz8zD%2Bpof2&X-Amz-Signature=050c1c13d9b92a197e9e1e1109a7217df916bb46c6bfc126b1a29b212fd44e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> private void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         boxCollider = GetComponent<BoxCollider>();
>         mat = GetComponent**InChildren**<MeshRenderer>().material;
>     }
> ```
>
>

> 🔥 **Nav Mesh Agent = 네비게이션을 사용하는 인공지능 컴포넌트**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/92cc2ffc-bf4c-4c0e-87e9-d34fb0731725/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QK4AF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEm1rYpzrAqr0%2Bty7tipW9VFwgBDCQ%2BZnH7sCe24N9iRAiEAlhLWh8GyoKISs497GrTQx8LdwbRe%2FM7nAv7TK7m4BHkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAja1OtfRjTNcL7AMCrcA3DbgVh5ggYOmT%2FIu68zxkfZ%2ByfYqxJFB6mxIWSXSeuez3mamzvxFdppRvHCrknEtI04E%2F%2FdJ7waNSjUDxxr70oa9Jorj%2Bm2iGjbmS4vqgFCepeww6K9bgxOj9b4FtCcynCsZoeJhgr6qTKihVfzlInJ1334LEzHJiPNpEui7ifXFIrlvKsOdV11PAp5lFNFH9rJXlHCRrtnphjotP0ktYWlBwE%2FYZ%2BHCTOrvRuRM2xrWAWyMRNBQWT78BaOHVbO2O0fpfBjMJ4qurXCo05kIoojURZ8%2Bivv4fG540P25iG3DN8E6unO0CIm273FKd6AWFG8r7ADBM6LMvtvjrIHCRhfDwyFAG22zIhg9MHNsWOWEhTnLPRmxUZSyZqrHUktHm44wSRAUGi2sBUf4j50jtPdGKIYScV%2FFYLCBLgt5H4TZRE7sZMmJXP5Oeb6LapE%2B2m4T0N2NmQRlbr8OlmnorK3vZYyrTRv1B%2FSezW6MqknWf%2Fwg9mX50dd6OgSMmrZjU7YJ4hsURuECxP3n8WG6X75PclTF4B1XLuPHMyT%2BB5RksFsa0hq82O6DQMhkO%2FdzRmusKUaX%2BwXuAeQRrYgoR%2BfMiK5VvNoevjPpVCDmDknLCJQveH9I5WIvWvmMLH1h8QGOqUBEwB0pBPCxyJveF0AIYt%2FHo%2BmyhOcY0nhMa%2BrqqFGaxpILEpYHi7XlG9WDglvnb6IFcZnzwcCYDdlxmJWGG1lDVJ8Xj4z5na9m%2BRq%2BmgEYuwsstPyoPDtWwgnJqI8JtgPTTFLvsBBPYiVpWxYIGiTqUl4AiODD6pT88CqcXOBziUCA0HE36tZfrNtwIPdldpMzrTVcJSR2Am8y%2BYxZ3BDGe61qSui&X-Amz-Signature=e4e28b163f8974e73017f53edaafe532440b5761383c32753921495f23261667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> //Enermy.cs
> using UnityEngine.AI; //AI 모듈을 쓰기 위해선 해당 라이브러리 추가
>
> public Transform target; //목표물을 받아내기위한 변수
>
> NavMeshAgent nav; //AI모듈이 추가되면 해당 네비게이션 변수를 만들어낼 수 있음
> ```
>
> ```c#
> private void Awake()
>     {
>         nav = GetComponent<**NavMeshAgent**>();
>     }
>
> void Update()
>     {
>         //도착할 목표 위치를 지정하는 함수
>         nav.**SetDestination**(target.position);
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5939cbda-2d27-4f9f-b00c-b92a1c186d1e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QK4AF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEm1rYpzrAqr0%2Bty7tipW9VFwgBDCQ%2BZnH7sCe24N9iRAiEAlhLWh8GyoKISs497GrTQx8LdwbRe%2FM7nAv7TK7m4BHkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAja1OtfRjTNcL7AMCrcA3DbgVh5ggYOmT%2FIu68zxkfZ%2ByfYqxJFB6mxIWSXSeuez3mamzvxFdppRvHCrknEtI04E%2F%2FdJ7waNSjUDxxr70oa9Jorj%2Bm2iGjbmS4vqgFCepeww6K9bgxOj9b4FtCcynCsZoeJhgr6qTKihVfzlInJ1334LEzHJiPNpEui7ifXFIrlvKsOdV11PAp5lFNFH9rJXlHCRrtnphjotP0ktYWlBwE%2FYZ%2BHCTOrvRuRM2xrWAWyMRNBQWT78BaOHVbO2O0fpfBjMJ4qurXCo05kIoojURZ8%2Bivv4fG540P25iG3DN8E6unO0CIm273FKd6AWFG8r7ADBM6LMvtvjrIHCRhfDwyFAG22zIhg9MHNsWOWEhTnLPRmxUZSyZqrHUktHm44wSRAUGi2sBUf4j50jtPdGKIYScV%2FFYLCBLgt5H4TZRE7sZMmJXP5Oeb6LapE%2B2m4T0N2NmQRlbr8OlmnorK3vZYyrTRv1B%2FSezW6MqknWf%2Fwg9mX50dd6OgSMmrZjU7YJ4hsURuECxP3n8WG6X75PclTF4B1XLuPHMyT%2BB5RksFsa0hq82O6DQMhkO%2FdzRmusKUaX%2BwXuAeQRrYgoR%2BfMiK5VvNoevjPpVCDmDknLCJQveH9I5WIvWvmMLH1h8QGOqUBEwB0pBPCxyJveF0AIYt%2FHo%2BmyhOcY0nhMa%2BrqqFGaxpILEpYHi7XlG9WDglvnb6IFcZnzwcCYDdlxmJWGG1lDVJ8Xj4z5na9m%2BRq%2BmgEYuwsstPyoPDtWwgnJqI8JtgPTTFLvsBBPYiVpWxYIGiTqUl4AiODD6pT88CqcXOBziUCA0HE36tZfrNtwIPdldpMzrTVcJSR2Am8y%2BYxZ3BDGe61qSui&X-Amz-Signature=f618bc23ec04da4a77fe677d8f711e6df1776b6af4c8d3646f2c524d90befaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **NavMesh = NavAgent가 경로를 그리기 위한 바탕**
>
> ## `Window - AI - navigation`
>
>
> 클릭하면 창이 뜨는데
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c6feada0-fd5d-4cdb-b88b-0fcda06baf1b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVDRXHN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3ZC4X51lmBd9oRT1z7cCuybMtUvyEuLbyjf8jRxpxEwIhAMpamAPsRsUJKNHYsOUx5AES7zwRwcG4FK7MhuFtDtP8Kv8DCCoQABoMNjM3NDIzMTgzODA1Igz4vH%2FjwzEUVVxoQaoq3ANhoqVGHo2dZP1BjY1i8P8apEkuZUVz%2F%2Btx2YVC60EWctHwM02PiZ9Zlx1RBKw9oEvuI34bvH9Sn3h3BVhfD%2B33CE5EY3nq2lGrCI8ohLGDW12x8QmcTQMqzxF6AaaPIeB3YB0XOw05As%2FiONpwUQ7LVJfGXP8%2BV6h5uUEvrv4%2FVtcXpciJUcEt65RoWwO5YVGft1JV4Pl%2BVcGQPO%2BCTe7gBBidvaQwUBIvAX5hVdWYt9KAkvkgiZGyd2Y24%2BFK88XYB0KWYGRq4VTnQdkBIUD0NfxzqPfgJ4Xo5Kn8i%2BfpF5TVdUNzhmC7UQu%2BV8CaCOw8OeT4LPvp9EgOKXRyyxakLilOQ9iG8snCQjaog5ppyGxHDSwbMeoicDSpuJu%2BABJ0j3uhSmr2Rpgk8PUlcDvMjXks695%2FBuEciakHHkxtME96H7hkhnvMWpuw3eioJ%2FVzhBDH91KtRyrkWzX5%2BD5r5Tuti9GvS49jNjGIgfA0Pov%2Faat2BMIbst6MVTJ0HNEnYafPfUitAh6VrNov76EfADiEb4Qf5wxYys66iT%2BLesPi%2Fy6pQW%2BB8aMKmAKp5eekNra6H6%2BlzDPzWMavIRRpq4Fyt64UQ%2FZ0eBQNRSnkWTtEQX%2FWrclvV8kixjDH9ofEBjqkAYQW13XreuNZYgfBNFhhMuW69xImg96rq6XBmMdB87Q0TnEdl8OO5pmvbrhYE8%2Bwmo6gm4NFN2qW02mbDSWahSVYKbFtBAUokkGXiv0aqHR%2FVw56mxcXd5WurHDNB%2BWI9fjmDNYqhCd98rXLTAD0BrOHB5o0%2FB3gtxw9qJBvpxcDVYVNRuq7s2gKYPADE%2BuXrC3QRsN4h8R8LAKr29c1tOZEYWKI&X-Amz-Signature=4528e3fa4d219a3ab91b1e0c61ec1d633dbf16261ed6594d2449b62674100fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/690e715f-6432-4c32-a2ae-7afdd1a458fd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVDRXHN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3ZC4X51lmBd9oRT1z7cCuybMtUvyEuLbyjf8jRxpxEwIhAMpamAPsRsUJKNHYsOUx5AES7zwRwcG4FK7MhuFtDtP8Kv8DCCoQABoMNjM3NDIzMTgzODA1Igz4vH%2FjwzEUVVxoQaoq3ANhoqVGHo2dZP1BjY1i8P8apEkuZUVz%2F%2Btx2YVC60EWctHwM02PiZ9Zlx1RBKw9oEvuI34bvH9Sn3h3BVhfD%2B33CE5EY3nq2lGrCI8ohLGDW12x8QmcTQMqzxF6AaaPIeB3YB0XOw05As%2FiONpwUQ7LVJfGXP8%2BV6h5uUEvrv4%2FVtcXpciJUcEt65RoWwO5YVGft1JV4Pl%2BVcGQPO%2BCTe7gBBidvaQwUBIvAX5hVdWYt9KAkvkgiZGyd2Y24%2BFK88XYB0KWYGRq4VTnQdkBIUD0NfxzqPfgJ4Xo5Kn8i%2BfpF5TVdUNzhmC7UQu%2BV8CaCOw8OeT4LPvp9EgOKXRyyxakLilOQ9iG8snCQjaog5ppyGxHDSwbMeoicDSpuJu%2BABJ0j3uhSmr2Rpgk8PUlcDvMjXks695%2FBuEciakHHkxtME96H7hkhnvMWpuw3eioJ%2FVzhBDH91KtRyrkWzX5%2BD5r5Tuti9GvS49jNjGIgfA0Pov%2Faat2BMIbst6MVTJ0HNEnYafPfUitAh6VrNov76EfADiEb4Qf5wxYys66iT%2BLesPi%2Fy6pQW%2BB8aMKmAKp5eekNra6H6%2BlzDPzWMavIRRpq4Fyt64UQ%2FZ0eBQNRSnkWTtEQX%2FWrclvV8kixjDH9ofEBjqkAYQW13XreuNZYgfBNFhhMuW69xImg96rq6XBmMdB87Q0TnEdl8OO5pmvbrhYE8%2Bwmo6gm4NFN2qW02mbDSWahSVYKbFtBAUokkGXiv0aqHR%2FVw56mxcXd5WurHDNB%2BWI9fjmDNYqhCd98rXLTAD0BrOHB5o0%2FB3gtxw9qJBvpxcDVYVNRuq7s2gKYPADE%2BuXrC3QRsN4h8R8LAKr29c1tOZEYWKI&X-Amz-Signature=8a6120344c6461366be2989a58db5a02bcc57630df0c561c4e977ddbcfc27cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **NavMesh는 Static 오브젝트에서만 Bake가 가능함**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d688857f-1fa8-4607-aaa8-afe5934f80bd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROBCSOOE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCn0%2F67XXNoro1nMLaogn0WS2fjLT2w7aPow21gqF6jlQIhAJ7jABVP7TvEpo5omZ49hMQKht97kpsxdoT6kQKtIju5Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyEDntU5OE%2FZ%2FRqQtsq3AOhOpVckJ855DFd9dqCWVcfUEmnKQItxkSNYgEfM9RMuufgjOOrbwgdBKGjTzJC9j1hrg7LMsWmwe6C%2BwpkJrX0NlpShoz5Yetc3PxLIFzNNRi5qjyGt7OgH02Bkecc1do%2B7BXvqfNKrsgkdh4BytA4noV7XZem6or1rMUAW6fBFCEIee45TaPM3txq8CTh17nA8HrC2TAPo3XDTT2kAZ5FbQpqd5gWv0HpK6NPaYmXt4NepYZe8HbbzzxyCbJ490h2cTgdU0%2BIVbGYGHlci33dnefm0YtMxFt65CVKjB790mfSzkJRel6PqWDhCTsOUitxJ0Cei%2BdLaEJGy8T5ljokaWHhVacvVLHk01C6Q0j%2BPLQdg07hCH53Heh1rQeYKvJVIdHNDqfADYcKU%2FuehyYdDywTX9SI5oSc99Ir9NVY2WlioHxGmQl31UOGYKb%2FqpI9Z0jSJyA90RSMAIUHu6Dw%2F3NJlxguqz9KLxO5xxXjuQQ4yTGSwk%2FYQnL6vQ3q5IqYmpX%2FjMIhpokQL%2Fn9LpNS37Mrdvo1Qy32weaIuG93YedORXdFd1d5VZHc2YqLj2d1FlGRKBAlHMvTa3GbP2%2BvUOb9UdGhqEJirBp%2FDbcvZ7m0dyZSLWQynVPJJzCU9ofEBjqkAduRdCk4xI3AWE9yhrc8cO%2B1dq99bMlVTY3HQ5vipP5vFs9hgmIqRgtI1YWdFNgJLjQCPHj%2BMNMe4AfyE40OEjwvARfEK%2FtQPDHjBv4rbVbv0ynzL%2FEf8lPiAyBB6btYbUitip%2BqEAMWtYurE8T31og38Sha9R5wvppqrE9OmscM4b1Q9qOaAlc9Jua14%2FHjgao2r8vPZSqGo0ksZP7jkR%2Baqld5&X-Amz-Signature=cbeec07a124dd401d516306bcb766c300950222cd041578e6c44fe5ff6a4e1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cca49515-6920-4a8d-b40e-975b5a4e42ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVDRXHN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3ZC4X51lmBd9oRT1z7cCuybMtUvyEuLbyjf8jRxpxEwIhAMpamAPsRsUJKNHYsOUx5AES7zwRwcG4FK7MhuFtDtP8Kv8DCCoQABoMNjM3NDIzMTgzODA1Igz4vH%2FjwzEUVVxoQaoq3ANhoqVGHo2dZP1BjY1i8P8apEkuZUVz%2F%2Btx2YVC60EWctHwM02PiZ9Zlx1RBKw9oEvuI34bvH9Sn3h3BVhfD%2B33CE5EY3nq2lGrCI8ohLGDW12x8QmcTQMqzxF6AaaPIeB3YB0XOw05As%2FiONpwUQ7LVJfGXP8%2BV6h5uUEvrv4%2FVtcXpciJUcEt65RoWwO5YVGft1JV4Pl%2BVcGQPO%2BCTe7gBBidvaQwUBIvAX5hVdWYt9KAkvkgiZGyd2Y24%2BFK88XYB0KWYGRq4VTnQdkBIUD0NfxzqPfgJ4Xo5Kn8i%2BfpF5TVdUNzhmC7UQu%2BV8CaCOw8OeT4LPvp9EgOKXRyyxakLilOQ9iG8snCQjaog5ppyGxHDSwbMeoicDSpuJu%2BABJ0j3uhSmr2Rpgk8PUlcDvMjXks695%2FBuEciakHHkxtME96H7hkhnvMWpuw3eioJ%2FVzhBDH91KtRyrkWzX5%2BD5r5Tuti9GvS49jNjGIgfA0Pov%2Faat2BMIbst6MVTJ0HNEnYafPfUitAh6VrNov76EfADiEb4Qf5wxYys66iT%2BLesPi%2Fy6pQW%2BB8aMKmAKp5eekNra6H6%2BlzDPzWMavIRRpq4Fyt64UQ%2FZ0eBQNRSnkWTtEQX%2FWrclvV8kixjDH9ofEBjqkAYQW13XreuNZYgfBNFhhMuW69xImg96rq6XBmMdB87Q0TnEdl8OO5pmvbrhYE8%2Bwmo6gm4NFN2qW02mbDSWahSVYKbFtBAUokkGXiv0aqHR%2FVw56mxcXd5WurHDNB%2BWI9fjmDNYqhCd98rXLTAD0BrOHB5o0%2FB3gtxw9qJBvpxcDVYVNRuq7s2gKYPADE%2BuXrC3QRsN4h8R8LAKr29c1tOZEYWKI&X-Amz-Signature=7810400fade830e708f85c38f1eb4884573ed7db394df2be63cdc8d50a859816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **적 애니메이션 제작**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d7370c2-4012-4262-a690-5b8281529da6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCY7EHM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCNqA04x7SgLcMbmb2sKS7mXw%2FYJH0C%2BzHnhu5byyAzkQIhAPVMSrJmpfbnfH3jWp6ZT75xM79YKoZSLu0uxPtST1t0Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxraqjwNvfioqF9wagq3ANc8BtbXtl2LTylSo9LU7A4Ax4JD50a90YA7obt6geKvDKrnwQiAiS2YN2XxXuvlUWDuYAuHvPK0iY4j%2Bfdr4UdUCctk3TYMi8AGnicL%2BFIr8looXoGOezkmLDKnRXvpjyyW4IzXeCwevU6Lv%2BaBkMPIUVWy3O2wB1u8NSOhozxKkGmwF7S50wIMTCTwgoPajz%2BN48JKwXcLejv7FOJw7tjftq6NqBDsMJ0XG3lAyru%2Bn3WdY5Xtp5MfDcoL2SkM%2FSMFvBge7qPcJXvF%2BclpnKx8JZB%2B4wwjT5jArnxUA0%2FokSHQGIG6dRBTniZUna%2F2SBOkHrAO5ho4%2BWh60OnG4Ko5aEi1KqUzcXttA%2FKG99kjGUy5djx%2Fba4gPI3s%2BwyiNEZIJBXZNyb2axYDd7htq00gNEJcWh1gPjQZKeNv1MZ6jMGMLihP8WQueUABegsjGhWvtI%2BZeM0ssejijs5iUKKoRf5EsEreD8i%2FX%2BgExQ0FReWD%2B%2FhQ%2BQT6nKPtWjGG4ihT7UHUghTVZCfnZqsHg4NDfcj%2FtK73GlEiIJZtAvOsUOqwkIzu0AQ2dbWhe2%2F%2F%2BoqAxiKC1doIilya65KLzMt9Z9A1bDqxnU6jxHHPS9qcN%2BiSClK5XlKSEzZgTDe9YfEBjqkAazqhH1BGjV7dDf012MNsFCCSnByXnjj3%2F4qzxZ7TMxGv%2Bp2GCm%2BbEWvWC8V4HFCeNcQ%2Fa%2B8OucFAsSGx10YlTjSOHksvvJBjfhO%2B7pVnhq3HkFTFgc%2FptJ6h1QKf%2FZJlATL150T%2Fffs13vzTO7caB%2Fn3wILHEFSTGEu0bKnACKzgQABdLxH304EawADGU8ZMHC431jI0%2FzHMbi20QIXlt6Ez%2FAH&X-Amz-Signature=fe3b729e2ff868f9a6b9e181586f3be754d01056f80fcdf2556d642f90c9c4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/61e92844-7814-465d-a303-f65ff6542c92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCY7EHM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCNqA04x7SgLcMbmb2sKS7mXw%2FYJH0C%2BzHnhu5byyAzkQIhAPVMSrJmpfbnfH3jWp6ZT75xM79YKoZSLu0uxPtST1t0Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxraqjwNvfioqF9wagq3ANc8BtbXtl2LTylSo9LU7A4Ax4JD50a90YA7obt6geKvDKrnwQiAiS2YN2XxXuvlUWDuYAuHvPK0iY4j%2Bfdr4UdUCctk3TYMi8AGnicL%2BFIr8looXoGOezkmLDKnRXvpjyyW4IzXeCwevU6Lv%2BaBkMPIUVWy3O2wB1u8NSOhozxKkGmwF7S50wIMTCTwgoPajz%2BN48JKwXcLejv7FOJw7tjftq6NqBDsMJ0XG3lAyru%2Bn3WdY5Xtp5MfDcoL2SkM%2FSMFvBge7qPcJXvF%2BclpnKx8JZB%2B4wwjT5jArnxUA0%2FokSHQGIG6dRBTniZUna%2F2SBOkHrAO5ho4%2BWh60OnG4Ko5aEi1KqUzcXttA%2FKG99kjGUy5djx%2Fba4gPI3s%2BwyiNEZIJBXZNyb2axYDd7htq00gNEJcWh1gPjQZKeNv1MZ6jMGMLihP8WQueUABegsjGhWvtI%2BZeM0ssejijs5iUKKoRf5EsEreD8i%2FX%2BgExQ0FReWD%2B%2FhQ%2BQT6nKPtWjGG4ihT7UHUghTVZCfnZqsHg4NDfcj%2FtK73GlEiIJZtAvOsUOqwkIzu0AQ2dbWhe2%2F%2F%2BoqAxiKC1doIilya65KLzMt9Z9A1bDqxnU6jxHHPS9qcN%2BiSClK5XlKSEzZgTDe9YfEBjqkAazqhH1BGjV7dDf012MNsFCCSnByXnjj3%2F4qzxZ7TMxGv%2Bp2GCm%2BbEWvWC8V4HFCeNcQ%2Fa%2B8OucFAsSGx10YlTjSOHksvvJBjfhO%2B7pVnhq3HkFTFgc%2FptJ6h1QKf%2FZJlATL150T%2Fffs13vzTO7caB%2Fn3wILHEFSTGEu0bKnACKzgQABdLxH304EawADGU8ZMHC431jI0%2FzHMbi20QIXlt6Ez%2FAH&X-Amz-Signature=c52710e1f77085c29870df094ff86199e2538f200b51927451e493cae62802eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/33fcc762-894a-44e8-905c-9c2721b2567b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCY7EHM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCNqA04x7SgLcMbmb2sKS7mXw%2FYJH0C%2BzHnhu5byyAzkQIhAPVMSrJmpfbnfH3jWp6ZT75xM79YKoZSLu0uxPtST1t0Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxraqjwNvfioqF9wagq3ANc8BtbXtl2LTylSo9LU7A4Ax4JD50a90YA7obt6geKvDKrnwQiAiS2YN2XxXuvlUWDuYAuHvPK0iY4j%2Bfdr4UdUCctk3TYMi8AGnicL%2BFIr8looXoGOezkmLDKnRXvpjyyW4IzXeCwevU6Lv%2BaBkMPIUVWy3O2wB1u8NSOhozxKkGmwF7S50wIMTCTwgoPajz%2BN48JKwXcLejv7FOJw7tjftq6NqBDsMJ0XG3lAyru%2Bn3WdY5Xtp5MfDcoL2SkM%2FSMFvBge7qPcJXvF%2BclpnKx8JZB%2B4wwjT5jArnxUA0%2FokSHQGIG6dRBTniZUna%2F2SBOkHrAO5ho4%2BWh60OnG4Ko5aEi1KqUzcXttA%2FKG99kjGUy5djx%2Fba4gPI3s%2BwyiNEZIJBXZNyb2axYDd7htq00gNEJcWh1gPjQZKeNv1MZ6jMGMLihP8WQueUABegsjGhWvtI%2BZeM0ssejijs5iUKKoRf5EsEreD8i%2FX%2BgExQ0FReWD%2B%2FhQ%2BQT6nKPtWjGG4ihT7UHUghTVZCfnZqsHg4NDfcj%2FtK73GlEiIJZtAvOsUOqwkIzu0AQ2dbWhe2%2F%2F%2BoqAxiKC1doIilya65KLzMt9Z9A1bDqxnU6jxHHPS9qcN%2BiSClK5XlKSEzZgTDe9YfEBjqkAazqhH1BGjV7dDf012MNsFCCSnByXnjj3%2F4qzxZ7TMxGv%2Bp2GCm%2BbEWvWC8V4HFCeNcQ%2Fa%2B8OucFAsSGx10YlTjSOHksvvJBjfhO%2B7pVnhq3HkFTFgc%2FptJ6h1QKf%2FZJlATL150T%2Fffs13vzTO7caB%2Fn3wILHEFSTGEu0bKnACKzgQABdLxH304EawADGU8ZMHC431jI0%2FzHMbi20QIXlt6Ez%2FAH&X-Amz-Signature=f8525ec71f25f6f9f212f34194831579c2554ea93a4587fb32e5845f3bc3414c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 애니메이터 컨트롤러 제작하여 메쉬오브젝트 내부에 넣기
>
> ```c#
> //Enemy.cs
>
> Animator anim;
>
> void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         boxCollider = GetComponent<BoxCollider>();
>         mat = GetComponentInChildren<MeshRenderer>().material;
>         nav = GetComponent<NavMeshAgent>();
>         anim = GetComponentInChildren<Animator>();
>     }
> ```
>
>

> 🔥 **버그발생.. 코드 다 똑같은데 왜 몬스터 상태 이따구냐**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5d5cdeff-7cbc-4e94-9d4e-8e84a9af595d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDW2Y7E%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDvQk1eE9TWPKUvblfyTS9AMJikey4T70iBgVJvPVmyQAIhAIPvLSxpFPHQZtytk9g62gIWTdQL7pF9zdxPYhg7r3oZKv8DCCoQABoMNjM3NDIzMTgzODA1IgyI0WlF5LSBQ%2FMMWFMq3AOFdlH8cYWb%2BeL7rKy4%2B0hxjoxL4L%2B3KFdRznfrJPvpde4T68bwRYPvoiHrsb9JWL4hK8%2FUdOqmFxfGApONXG5dnZuC7Zz62VY4njVa96vUPQ%2Fb9y%2BE%2Btg9f%2BpsfxMa6p0JRs4aO1ke%2BOQ5CBSXXhmXsFMWGYRGWJsG%2FtQGxFFnB0qm77YUR%2FCAYHkdx3bHfqyXUd%2B7bp%2FSHyL%2B4oo5AAwdWq98YyCPpocCuraidIzzZ9jl22Q9rrvEq3n3IDCNzvWbVkBRDuTrBsxZt9zRvJiPtZ2fjbJzEQFKdLGhTBmAiK7hpOKIGOZhIOGATpV29ONpmTXcNkdue6KWuzYqGmkr0m1Kgd8et6noM01AM%2BdGOTtOQ%2FAzu3iupKNlticyprvnqwDeOkU%2BWnc6h7YDtU4q6B8F%2FQMpJeNg6G%2BibhTN7TjCUQOT6k5z7WOgfn%2FMYjBrWn4Xy2PTQu9jNeARDNbPGlBbEgWIACHvuPVky6Gw7wltaioDtBV4y1ayxxCo2vCmCphCVBua6qTzb1pyZWpTZ5xMDX6q85M0I003ENwvsDmx4ntowGdZzchkqkhDDHF9W%2BmHAxC7zNX6Ooo6vibKeHZ752DfyWyjTMj2behQj0nZmuC3xQxF3bGM%2BjC89ofEBjqkAULhd68Embl90DCC78B3a8vTVsWS2mnL%2BbzsGVZjetQpI1tTUObrGTYCD1l25PpKkLulYzewtM5yEQx9WACF6n5Svkh0Wg899aRFcefSp6AejD8hElTcbOl1q0zxSd2ItWL46Pt9EbYJ8LNV4nABme80U0VFGtrvDBxIym9FEh2Ut8cD2Q4kriMhLMpDRmTXr4g1ucZy%2B6dkeIZXfK4H5Xj96OH3&X-Amz-Signature=e9869dd5fdc80e8062388d734b6620429f9e8bd06f48b0b02447ff02bbb39b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e0ba8953-1a31-46d1-a134-3b072ed82840/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDW2Y7E%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDvQk1eE9TWPKUvblfyTS9AMJikey4T70iBgVJvPVmyQAIhAIPvLSxpFPHQZtytk9g62gIWTdQL7pF9zdxPYhg7r3oZKv8DCCoQABoMNjM3NDIzMTgzODA1IgyI0WlF5LSBQ%2FMMWFMq3AOFdlH8cYWb%2BeL7rKy4%2B0hxjoxL4L%2B3KFdRznfrJPvpde4T68bwRYPvoiHrsb9JWL4hK8%2FUdOqmFxfGApONXG5dnZuC7Zz62VY4njVa96vUPQ%2Fb9y%2BE%2Btg9f%2BpsfxMa6p0JRs4aO1ke%2BOQ5CBSXXhmXsFMWGYRGWJsG%2FtQGxFFnB0qm77YUR%2FCAYHkdx3bHfqyXUd%2B7bp%2FSHyL%2B4oo5AAwdWq98YyCPpocCuraidIzzZ9jl22Q9rrvEq3n3IDCNzvWbVkBRDuTrBsxZt9zRvJiPtZ2fjbJzEQFKdLGhTBmAiK7hpOKIGOZhIOGATpV29ONpmTXcNkdue6KWuzYqGmkr0m1Kgd8et6noM01AM%2BdGOTtOQ%2FAzu3iupKNlticyprvnqwDeOkU%2BWnc6h7YDtU4q6B8F%2FQMpJeNg6G%2BibhTN7TjCUQOT6k5z7WOgfn%2FMYjBrWn4Xy2PTQu9jNeARDNbPGlBbEgWIACHvuPVky6Gw7wltaioDtBV4y1ayxxCo2vCmCphCVBua6qTzb1pyZWpTZ5xMDX6q85M0I003ENwvsDmx4ntowGdZzchkqkhDDHF9W%2BmHAxC7zNX6Ooo6vibKeHZ752DfyWyjTMj2behQj0nZmuC3xQxF3bGM%2BjC89ofEBjqkAULhd68Embl90DCC78B3a8vTVsWS2mnL%2BbzsGVZjetQpI1tTUObrGTYCD1l25PpKkLulYzewtM5yEQx9WACF6n5Svkh0Wg899aRFcefSp6AejD8hElTcbOl1q0zxSd2ItWL46Pt9EbYJ8LNV4nABme80U0VFGtrvDBxIym9FEh2Ut8cD2Q4kriMhLMpDRmTXr4g1ucZy%2B6dkeIZXfK4H5Xj96OH3&X-Amz-Signature=377a986782a6b9894b9641c1d5607cfd48deeb4b89172a287dddb902e3e5b7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## 해결 : MeshObject에만 애니메이터가 있어야했는데 내가 둘 다 넣어서 충돌문제다
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=LUnZHdcOe_M)

> 🔥 **`**MeshRenderer[]**` meshes;
팔,다리 몸통별로 따로따로 메쉬렌더러를 가지고 있기 때문에 배열로 선언**
> ```c#
> //Plater.cs
>
> MeshRenderer[] meshes; //팔,다리 몸통별로 따로따로 메쉬렌더러를 가지고 있기 때문에 배열로 선언
>
> void Awake()
>     {
>         meshes = GetComponentsInChildren<MeshRenderer>();
> 				//Components 복수형이다 참고하시길
>     }
> ```
>
>

> 🔥 **몬스터 공격 코드**
> ```c#
> void Targeting()
>     {
>         float targetRadius = 1.5f;
>         float targerRange = 3f;
>
>         //부피가 있는 레이케스트를 활용하여 피격범위 설정
>         //범위내에있는놈들 싹다 죽여야하기때문에 배열로 생성
>         //SphereCastAll(시작위치,반지름,레이케스트발사방향,레이케스트길이,레이어마스크) 구체모양의 레이캐스팅
>         RaycastHit[] rayHits = Physics.SphereCastAll(transform.position, 
>                                                     targetRadius,transform.forward,targerRange,
>                                                     LayerMask.GetMask("Player"));
>         Debug.DrawRay(transform.position, transform.forward * targerRange,Color.green);
>         //rayHits변수에 데이터가 들어오면 공격 코루틴 실행
>         //만약 공격 범위 안에 플레이어가 들어왔다면?
>         if(rayHits.Length > 0 && !isAttack)
>         {
>             StartCoroutine(Attack());
>         }
>     }
>
>     IEnumerator Attack()
>     {
>         isChase = false; //쫓아가지 않는 상태 활성화
>         isAttack = true; //공격상태 활성화
>         anim.SetBool("isAttack",true); //공격 애니메이션 활성화
>         yield return new WaitForSeconds(0.2f);
>         meleeArea.enabled = true; //공격범위 활성화
>         yield return new WaitForSeconds(1f);
>         meleeArea.enabled = false; //공격범위 비활성화
>
>         isChase = true;
>         isAttack = false;
>         anim.SetBool("isAttack",false);
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07d61b07-8c2d-44a2-8f60-5f4302309127/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DDEO46%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCyJlDusJ%2FrRthO5QR%2BqtgJeP0iMPTP17uTsGuWdmRUWgIhAIEPjZyQXaPvNbvGJfSd%2FFu7%2F2UCmzG9g4ZnhOypONaOKv8DCCoQABoMNjM3NDIzMTgzODA1IgxGkkrr%2F1QyB%2Fkv%2FWUq3AMACVCP9P3jjVdXvJZhAboJygpbCysKXZ5NUenjYY8zN4esaqzvl%2B8H8OCzOYkENpTrPcgsxzBVQVkL8lBUobCtKVRbhKviwwXH5sVq4PItxtW6vv%2B1yvNYEkTYlVWimMhwtP3dsS3c4BMtGfJYjOuT%2Fe166IOJ1XAA9wAi5VNO%2Bf3cJl17Ip33JAd1RJBI5iEBv4JGCfcD4xbhuImH2wPPGbMwX3%2B%2BBqfT780cLpVv4nMl8GcXpDfXmYj54o%2Br%2BrIZMSNxq%2F43%2BVU6M7s2MPyMxX2FDS2PLfXDsMt44rW92imYJXhQrQhaHfBXlbAvpxSa4v52I8Bjl7O%2B%2FCQDfIE9rEzjrgmf3N%2FgKB13w2ccgj46F%2BngHdXUtRFXxlJhDIwtOtBUUZFdh79kForIUkAVeA31zXjMTT9T8l76O%2FdE4Vl8zUmJrVB3tEGqaING4%2BcVsmQ6Yzqt866cavT24Nz%2FQ2UdTPqhTiWCbXJnGwup77xoG6JPuSstuJnsO8iztYO7imbwyZILA5rV2RZ1qE0%2B3vpxVubFVPKe7qHegT52Nw7z5XJTyol0SZA%2FxejPP9poz3N1a9mhoP5WlbmqVKzooI5ISFvw8MdVPS5rPe5PM2HL1IMhK3ktR7lVXjCx9ofEBjqkAQZ69T2UT31bbecFh9FZBhgT0ebQFYcf3SwbvuCDCuxAgov9%2FuGeBPYY3sMOpaYyXLCdxiz0EoFOdravwSdNjCyY5kekPMeGSZ2%2FRrbJGbfVOLPwBBpZEyooU%2BYPxL9i2PtjsujU5Jr7klD3RqQn0oIeyi16t70apCmSz8OByXP5O5%2B%2BuSACwviT%2F2aMajkEx19MrHuw0rc6Krxm1Ia%2F7UDvanA6&X-Amz-Signature=5bf5a9c9e7ad07ec1261eb7031a5601bb6749d430b1794fce10178a136fb379f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


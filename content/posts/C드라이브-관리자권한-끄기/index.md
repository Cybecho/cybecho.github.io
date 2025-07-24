---
title: "C드라이브 관리자권한 끄기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우 C 드라이브에서 관리자 권한 요구를 없애기 위해 레지스트리에서 해당 권한을 끄는 방법을 설명하고 있습니다. 키맵핑으로 인한 잡버그 문제도 언급됩니다."
notion_id: "215c3694-3dee-4a40-af5f-cac1d481c903"
notion_url: "https://www.notion.so/C-215c36943dee4a40af5fcac1d481c903"
---

# C드라이브 관리자권한 끄기

> **Summary**
> 윈도우 C 드라이브에서 관리자 권한 요구를 없애기 위해 레지스트리에서 해당 권한을 끄는 방법을 설명하고 있습니다. 키맵핑으로 인한 잡버그 문제도 언급됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Y555KO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDdlvnw151x%2FWooUxKbNfX6F%2B8OFtPBC%2FU3llOOFVTMDQIgDnzZJTjA2RMk%2B18PTm5GFz0yuVI0%2FMAdWQa42qMPHFUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLoXx2weyYINexJO%2FCrcA0uyaYlVhYjUpdbjYEnRPDKe9fH37qTC9ZKPc%2FuhD78NgxZ%2B6tHmLcW6FSL5Q55PqciLecJtCaNz8DYXCQnj8AQMpPBvteHcktToUsSrQbh4Ia4FtRzz1CSUiz7H6HHAMO6FU3o9FYFq2GvxyfLEd0pATPcI0gYuaz79SdP7SCoZs5XhRj0H6YB7FgsxwYJcdXcc8hTo1CwCfCEAB0bFUUtN79t5p9yFhV1jHHqg0QHDuZdz5R4tA2AKqW0Xf0bTMvoZZBOpKkoSNa6WgSk4At5KHoWAxQ0x%2F%2FkaJXKr%2Bx5lTOZ%2FXjYlJPSq4mTSITDMgOIiPJlZCrot5KNl4dU%2FgKiNtX%2FufcT6qFYeW8GvL8VzI82mHBhUS3MBssMteonsGPToukZ%2FXotu7FU7B9Jx9%2BV4qp4t8bJ44C97q7oBeWPGaY0vb54fY9tKOWHfp6yx6EXNYVKXT8cw8V%2FVzUq19ffcPwW0JVa9DAsIfA1A6J2r4EHaA4aF6IiioThNFihroJwt%2BilqVXgvQqiefjrB3nw738knhAfOdu%2F1TrmNcZtWxurlDjwDSg8hdluPmEM8OYhzJq1vQS2KvMLROGLRAEIOqz74kwnmzsvsEhQXnncHK%2BowVaDVvXJ0QtBWMI6%2FiMQGOqUByujv0tBQN4ZX7nHKAtUOSboqFrpFZ0hC22ICAmvOAC36b0vDYIYyN%2Bej1tYZNoKnszCcTrMFlJt%2BTqmMV2bn8soIxrPr2QOBtW4c1QyAm%2FRb19GFmI%2B%2Bs%2BawrRFdmkoAgJUPdXllbNu5yfUMgTAkPq%2Fms4G9U4vycSSpQGsqClh05alnaFEI%2BMeQyJ5PlT%2B1PixrvIQciugOVz5cDQd9xdpWZQTy&X-Amz-Signature=c3af7b791aca4cc64c14f11a14bb92e44a15cab9fc9257c391787ff31ffed7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8525155b-0b61-444e-b8d9-9b4f0e2305d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Y555KO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDdlvnw151x%2FWooUxKbNfX6F%2B8OFtPBC%2FU3llOOFVTMDQIgDnzZJTjA2RMk%2B18PTm5GFz0yuVI0%2FMAdWQa42qMPHFUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLoXx2weyYINexJO%2FCrcA0uyaYlVhYjUpdbjYEnRPDKe9fH37qTC9ZKPc%2FuhD78NgxZ%2B6tHmLcW6FSL5Q55PqciLecJtCaNz8DYXCQnj8AQMpPBvteHcktToUsSrQbh4Ia4FtRzz1CSUiz7H6HHAMO6FU3o9FYFq2GvxyfLEd0pATPcI0gYuaz79SdP7SCoZs5XhRj0H6YB7FgsxwYJcdXcc8hTo1CwCfCEAB0bFUUtN79t5p9yFhV1jHHqg0QHDuZdz5R4tA2AKqW0Xf0bTMvoZZBOpKkoSNa6WgSk4At5KHoWAxQ0x%2F%2FkaJXKr%2Bx5lTOZ%2FXjYlJPSq4mTSITDMgOIiPJlZCrot5KNl4dU%2FgKiNtX%2FufcT6qFYeW8GvL8VzI82mHBhUS3MBssMteonsGPToukZ%2FXotu7FU7B9Jx9%2BV4qp4t8bJ44C97q7oBeWPGaY0vb54fY9tKOWHfp6yx6EXNYVKXT8cw8V%2FVzUq19ffcPwW0JVa9DAsIfA1A6J2r4EHaA4aF6IiioThNFihroJwt%2BilqVXgvQqiefjrB3nw738knhAfOdu%2F1TrmNcZtWxurlDjwDSg8hdluPmEM8OYhzJq1vQS2KvMLROGLRAEIOqz74kwnmzsvsEhQXnncHK%2BowVaDVvXJ0QtBWMI6%2FiMQGOqUByujv0tBQN4ZX7nHKAtUOSboqFrpFZ0hC22ICAmvOAC36b0vDYIYyN%2Bej1tYZNoKnszCcTrMFlJt%2BTqmMV2bn8soIxrPr2QOBtW4c1QyAm%2FRb19GFmI%2B%2Bs%2BawrRFdmkoAgJUPdXllbNu5yfUMgTAkPq%2Fms4G9U4vycSSpQGsqClh05alnaFEI%2BMeQyJ5PlT%2B1PixrvIQciugOVz5cDQd9xdpWZQTy&X-Amz-Signature=a55b98c857dc08330c8788f4fccd002f417eb6dbb488be32fe5c4016cf63471d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 C에서 뭘 할때마다 관리자 권한을 요구해서


그냥 관리자 권한을 꺼버렸습니다 



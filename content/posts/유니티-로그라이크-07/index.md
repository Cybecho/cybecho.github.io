---
title: "유니티 로그라이크 07"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 대한 내용으로, 무한 생성되는 몬스터 제작, PoolManager를 통한 프리팹 관리, 스폰 시스템 구현 및 인스턴스된 프리팹의 타겟 관리 방법을 설명합니다."
notion_id: "e15763de-9751-499c-9c7a-76f2845abfab"
notion_url: "https://www.notion.so/07-e15763de9751499c9c7a76f2845abfab"
---

# 유니티 로그라이크 07

> **Summary**
> 유니티 로그라이크 게임 개발에 대한 내용으로, 무한 생성되는 몬스터 제작, PoolManager를 통한 프리팹 관리, 스폰 시스템 구현 및 인스턴스된 프리팹의 타겟 관리 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/26d6fe28-ad63-4ce0-b9cc-6e89e0aa90d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5VRZH5N%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH20e2MahoVnXcUX%2B9B6vp14V9%2BUJDCy9MsIF828fQDCAiEA0JANw4l4efl7u%2Fl04goIT2%2FToYcFyXCzaj9s6FZRDkoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIQ%2BAgnxTFU6vsdaPircA%2FBViZoR7SMpwlWcSMvf%2FQx%2FpJoaXHw5AeRwh3WQllt5jxZ0NTkhDRochkTDV6y3vhZkAbkF3pacHMGYcs4b9c2g5%2FIzHsEo2%2F3VVuU%2FILZGT5QB7bZyz80ehlkc8BOAOLpxUa133eHjDSjc9RXc5PL7gxvVjA8rKHKQ3AAwwMM4rjrHSb7A2%2FoYfivtQo4Kkj4veX8HmgWP8q0L22vwJKbOf1Qy%2FDPe6m3MgmEZgxltRUsMV97cce4UGHZZf3E8CkDYgfWlq1%2F1AYxtk%2FPtYV9hsM7R4hJOdp%2BHUm484C7lhbjoQNCBLXP7XU9zrxrnV%2FfGomVq6ZACO%2Fd6Rw4sCPtTA1xkXR0RlGGu2JSyHj8SQXEZDLUQbzdrs93zoacFV8xf%2FL0auBYCu8WqQZ3Nd0Hzfim9RjFqjAfw55QGYguWfQ55mzYVVETamLzYLiy9PdLY%2Bg8ynzVH%2FB1wu%2BVL%2BBCqxziwU34MLgXaabogbzY4bAAC4OPwigEDSgRx8YzEmUxPD0NwgBYhXVrO6PdMUmyGenFqny9GgyjPfGhEJVRp60sAnKZwKGEVM3jfC4XUc9NNZ0PvZnv2NnoVf7kIZ%2F3RUpvNiKjvd0wI23MxTxBxqBGZQ4Aqqy%2FNKPd7MIbPh8QGOqUBxqO8URDjhDVvpwmZqmgSGV9uLlzAuvLsahFE8VCtMmzLbzKKgzXIsvw6CU%2BDellLfe8VNqBqgpDxsqW%2BZ26sjSeVewX1CBpVPyKTLxyrmwu%2FGSm1K4Y9OeIavixDX5bfAj7MJ6%2BnmPUOUH%2FaIt6zTf8FO6KgL2MC6udXP%2Bx4MGU0uv7Dm2EIlHSmveyrPS0oCUgzEnRqkgfMfENVya5F4VLlhksQ&X-Amz-Signature=3bc55170298354d5aee7cb4529d9cd8adbe38b69135e19db2551c668a46acd49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=A7mfPH8jyBE&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=8)

> 🔥 ****일단 만들어진 적 오브젝트를 프리팹으로 만들어준다 (위치 초기화도 잊지마요)****

> 🔥 ****프리팹 관리할 목적으로 PoolManager를 CreateEmpty로 생성해준다****

> 🔥 ****몬스터 스포너를 만들어보자****



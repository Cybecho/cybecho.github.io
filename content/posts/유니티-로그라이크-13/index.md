---
title: "유니티 로그라이크 13"
date: 2023-03-12T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "UI(HUD) 구성, 해상도에 관계없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추기, Ctrl + Space로 자동 추천 기능 사용, 슬라이더를 활용한 경험치바 제작, 체력바를 생성하고 플레이어를 따라가게 만드는 방법을 설명합니다."
notion_id: "0637370b-b32e-49d3-821d-ba6c24de5279"
notion_url: "https://www.notion.so/13-0637370bb32e49d3821dba6c24de5279"
---

# 유니티 로그라이크 13

> **Summary**
> UI(HUD) 구성, 해상도에 관계없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추기, Ctrl + Space로 자동 추천 기능 사용, 슬라이더를 활용한 경험치바 제작, 체력바를 생성하고 플레이어를 따라가게 만드는 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/14e57743-12e7-49d9-8e69-4ce0a583b327/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULWK5JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIF1DFagSNZmLbW16gaI%2B5j4gyHAq0n6rYbvuFMik7FAxAiEAnVZ%2Ft3NfG2lfy%2BEXm1G3n7u5VXLcwp3Y8mFiHHqqF0Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFGdvLGaQhUj3bPr4ircA2va4PqgPZRSp0yQNA9r3neFkLzbisoqTdInaowmwKf7VpDXL8T0GIjFFVX99Se1I4%2FiIUmBS9%2BX7E88rH%2Bt9SEvf4k1204jamMZNV3uTYfUkQMtGUAQnenSSL3Ho3iMr2HqIKlrusWTiGlI4924lJp3f6oZ1Uy76otqsniQbtJ%2Fv9v7Pk%2F0Ggr41RPRWCpzvUrelTDCo50dNZ92oVh6RnI7chwUIeBbVpZAie7%2FVjjzsWokfXUUu6TCIrsu25Jb9JGw06dM1TpEqTWp%2FaxEJAIz08l6ZXKR3cgnWFJ0U1%2Fekj%2BqtcV3JIbwIxDHNVy1cMZez9hBW7jU8%2FS%2FH5N4mv4awJYQ%2FjP7cEvBpfKahidF1xDJWV0%2FiybPamZY1EXWP7E8XYJzPNUZtLTxcW8X9BzLkjkHHzJQB7C4Mt%2B9E9LW8tJ7Q6ywhMS8wY5wqklR9u0KmwlaE3%2FN7BET1%2BsQY5l75L8s6zYoT4wm%2FQj%2BrNeajDCgEEzkJg8MpNEJJWxqKv%2B6JfEjUe1kqr4hNG32FTxdVQWlu1%2BzE2pXwGXRUa2gvbnycAXJEZuWw7mpsLfzYdINYC2NzV57ljM3ai1OHuytjBFzjfHMvmc1J5X6acO%2Fg8f16TGRjA%2BEc4gHMJDPh8QGOqUBOGeCJSDFOQO30cdpjhQTx3nOOHNzQsfpibsYsmd0RSw6dNH0mr41su814dESK0KiIS7TJtqDA3iU9gnpMyVccz9DIMjwUs368pNWs%2FXMuLlQNZ%2BdJUclCRhThSbzwzf8r%2BmxsNkidvgd%2FAoKB8k%2FV3x%2F0eqirVsYlk9Q2jCoHNfWKPq6%2FnwjlEb9dYQJ59ZI0a%2FXFLJwuCXxgklsfJPWbYLpSt3x&X-Amz-Signature=a68b10cc411a92b95a3085dbf1ff34bb4a0fdff19938f091ab3145f65697b997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=ip0xffLSWlk&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=13)

> 🔥 **캔버스를 생성하면 초반에 크기가 무지하게 큰데. 렌더보드에서 Camera로 변경해주고 렌더카메라를 Main Camera로두면 UI의 크기가 카메라에 맞게 설정됩니다**

> 🔥 **HUD : Head Up Display 구성**

> 🔥 **slider로 경험치 UI바를 만들어봅시다**

> 🔥 **체력바를 생성하고 플레이어를 따라가게 만들어봅시다**



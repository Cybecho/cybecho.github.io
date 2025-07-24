---
title: "유니티 로그라이크 04"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티에서 캐릭터 애니메이션을 구현하는 방법: 이동 방향에 따라 스프라이트를 뒤집고, 애니메이션 속도를 조절하며, 애니메이터 오버라이드를 통해 기존 애니메이션을 재활용하는 방법을 설명합니다."
notion_id: "324a28ab-6122-422d-ae6e-e989ed1148c0"
notion_url: "https://www.notion.so/04-324a28ab6122422dae6ee989ed1148c0"
---

# 유니티 로그라이크 04

> **Summary**
> 유니티에서 캐릭터 애니메이션을 구현하는 방법: 이동 방향에 따라 스프라이트를 뒤집고, 애니메이션 속도를 조절하며, 애니메이터 오버라이드를 통해 기존 애니메이션을 재활용하는 방법을 설명합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=vizfd1TeRMI&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=5)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/103a9eea-6d83-4881-ac4c-2095536d4ab2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZX7PMOQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD4UVk5AV97NGdS5KMBwouLuGLEaUGWyjZzKXpo6l71TgIhAJq24%2BSA2pUtp2Mg4BN2Ww00LjNQ9VotC0JZHDyZ91IsKv8DCCkQABoMNjM3NDIzMTgzODA1IgxIGLJ6pwz17pjLlY4q3AMx%2BEBhDlJBHo5QOy8W83DYLyX6zpfPIQvxQKNbJzWBf%2B7ZI7YYttHaoOVehvxT2Yz9c%2FU2vpiGgJPdyz5bkQWGi%2FPJX%2B7Q6tXNz9pDR5vgD89Qz%2F%2B5zGFLs8k9DeBQzC%2BH2vfcDh4B%2BBsnfCjq8YecR1cEP%2BYftOL4SbvDXs9PNi%2BfnOx935kSqu9Fccrbz2ehEXGTgdmvkxfHkoV4ruvMoW5tIHDEuoTidmx1HGx253eeKP6Yb2LLbvuY%2FhtuSyXw6xzCWWE7Lm89OaeZ10uvCqhbdWWlEwvC6b5sKTDknyttZTsogvCGqcNm0%2FcCwqGVcbd6Uy0YsHWHoEAGrvuqUOS%2BFpDJAn2AuS7boDhE1sJDjkzVmZudyWJr4PCtkESIEdNGcFbreZAFN64ReP651QD1aPCUGj3YbJ3TahL93YVxaTC9nu0rpm37GMS4r2LcsbMv%2Bc7RDcdHnnZw%2FIVa2zJwAkn1V9qqmpKHex4CH%2F15WTgLM1tT%2F2Tr9kdH1IpieUo43KtQwmLogwFQ8r%2BdnvI0BXIGnZgMoKFVSybIIaEz4se5rmXI3w22CXuS2AXV9dQcDIUp9u7VhqNrnXigQc%2BuIQtXMguieRIJA%2F1m2ju%2FVg6eTfOJjkqumzDTz4fEBjqkAbquZhoGIuvi59ljxVhm2q%2B82CgPSH%2FXB3Jdqdnj1pwO56OIiU%2FRT9CLlGuSVrfkL2kAlKrC6RC4MkYugf%2BKIjPwN2Ogpz2KoMdPm9iVQLeCaQuTf%2FndLkjdCMmkRpemDv72aOqMw9uLLHE%2FzRk1N5Xc3fXv5ljt0uFPtEUYR3k6z1aE3oVHZQCWMunBgniFC7o76RQ%2FswKktNXtomL%2FOoMGarkk&X-Amz-Signature=2f1c39970cfa714a5aa8e45034dfa379122446ebe8792a9483df94f1eb11fa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **플레이어가 이동방향에맞게 시선을 바꾸는 코드를 구현해보자**

> 🔥 **플레이어의 애니메이션을 직접 만들어보자**

> 🔥 ****애니메이션 재활용하는 애니메이터 오버라이드를 알아보자****


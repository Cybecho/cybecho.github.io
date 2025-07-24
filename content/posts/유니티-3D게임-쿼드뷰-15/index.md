---
title: "유니티 3D게임 쿼드뷰 15"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발을 위한 파티클 시스템, UI 구성, NPC 대화 구현 방법을 설명하며, 버튼 클릭 시 함수 실행 및 아이템 구매 스크립트 작성 방법도 포함되어 있습니다."
notion_id: "ea201c1a-c470-47d5-8f20-3173ded9577a"
notion_url: "https://www.notion.so/3D-15-ea201c1ac47047d58f203173ded9577a"
---

# 유니티 3D게임 쿼드뷰 15

> **Summary**
> 유니티 3D 게임 개발을 위한 파티클 시스템, UI 구성, NPC 대화 구현 방법을 설명하며, 버튼 클릭 시 함수 실행 및 아이템 구매 스크립트 작성 방법도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=r27DFyivQCY&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=15)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7df5f06e-f442-436b-8883-9d0aae1a41ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQVLEUE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDI52tiHOlSOW3FjVYVlvwC8rJM8N0E1s%2BYyESyfNZCYAIhAKaz9C50FI1JboFLC264DqeJ5qxL18aBjeAldXI2g0NYKv8DCCkQABoMNjM3NDIzMTgzODA1IgzJHEm8R2nxVFxJY3Eq3ANdrSJCkSIoh4QkizWWtEReV4keaMZz0HA%2FU74Dx4czNiF2wfIpuLaO%2F%2FWxaqFXkO%2Fb2xnacM44akbNg55O4H0DrA6gVzxc6g%2F%2F7GO8vCb4AC2Wl85AVQFXOJkHlGkhzAYYyqigP%2FUJZDGGlv3Nv85WEg9WA89pONeSS0okz4vN0O9s%2BpemS3Ujz0vJPSNSDZ2oYacurbBtPZRjWx0kJMnxQ4u7Pe6241FXODhxCRRR9JyrVhvm2wiMXA1KPLQB7KmadR9bYcK3mcHnpoiwDFWxPX%2B5w8HZ5rauhAwSKJSVJQb0NZvHElCeD12COTheF1uacQlS61WunJG5ZKmEgTFTdKdwUABDeO7gZYM7%2FodGoLlIOVMz8EP2pCWiVEir5GUBzvGSDy1HCrgNSjTe%2BfmvDO8kYm06qldofgERwpb7lc7RyQB6qziRiNiX8qibJkgYEQ1uZziqZithPVdJVeXIHKcVmryYK4F0bA6b9voWAoHShOTji1w1LkHrC%2BGaXVhJ4HYfSVOfmVmyJTbjF7oQl8%2FBHpTX86ZA1rwBWhM6IsryEPv%2BtzkEktMro2Crh4UHzeGuZCeyjgopcpH15w%2BcIWqOmHb%2FyMFS6bNsSoyn7yoicNY58CkbUqwO9jCKz4fEBjqkAZdy8nuYRlvijioJdUFsxKIPb5TaXpTs8ND%2FQf1KfuyQwFmA%2FeR7inlnGqmez%2Ba5WBugy4UzXqc6uRakRJuHY005VnbxrqBaOJdYL3djWwx04LRZLI4Py3maWb7k6fpeQnnBRq%2BZKAZ%2BN%2BRWxvFthJYYWWWvcVMxzyYwL%2B8Sq3SyEwiVBkrF7%2F5Gb4xYasYrNg5uvGorqW2kE6fFXKe3M%2FPDYbzC&X-Amz-Signature=aad98944db8b17c6fc00276f1ab0a3e4f615248b5f249dfd7235921048cb3bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **도넛모양으로 회전하는 파티클시스템**

> 🔥 **UI에서 Create Empty를 만들고Image 컴포넌트를 추가해서 버튼이나 특정이미지를 삽입할수도 있다 굳이 Image를 생성하지 않아도…**

> 🔥 **UI를 뜨게하기위한 코드 생성**

> 🔥 **함수에서 외부코드 불러와서 사용하는 방법**

> 🔥 **Player 부분도 코드 수정**

> 🔥 **버튼에 특정 스크립트에 특정 함수 실행시키는 방법**

> 🔥 **구매 스크립트 작성 UI를 따로 불러와줘야 인게임에서 UI글씨가 보입니다**

> 🔥 **대화생성 스크립트 작성**


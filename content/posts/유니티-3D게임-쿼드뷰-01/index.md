---
title: "유니티 3D게임 쿼드뷰 01"
date: 2023-02-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 쿼터뷰 게임 개발을 위한 리지드바디와 충돌 옵션 설정, 플레이어 이동 코드 작성, 카메라 추적 스크립트 구현, 그리고 bool 연산자 사용법에 대한 설명이 포함되어 있습니다."
notion_id: "2e99bfee-f2da-4c76-ac8e-ecca4dc23fe6"
notion_url: "https://www.notion.so/3D-01-2e99bfeef2da4c76ac8eecca4dc23fe6"
---

# 유니티 3D게임 쿼드뷰 01

> **Summary**
> 유니티 3D 쿼터뷰 게임 개발을 위한 리지드바디와 충돌 옵션 설정, 플레이어 이동 코드 작성, 카메라 추적 스크립트 구현, 그리고 bool 연산자 사용법에 대한 설명이 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=WkMM7Uu2AoA&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=1)

플레이어를 생성하고 기본적으로 필요한 컴포넌트들은

`Rigidbody`

`Collider`

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e25a54b7-090a-4341-a056-7fa56bbcc104/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWXVGKD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHukXAQjzciTIFmTn9280nEu7Lnv40qZMo1GgdkzaEU%2BAiEA5VRXvuz0QFyis%2FiWPsAX4htGAkm3i%2FE%2FMXGrIsxHcrsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJEe1HCI7ioEJrCPXCrcA2ORmJ1%2FDcpb2kdc%2FNq3D16qc35RyOaPtGtrbKOR2G1t%2FdYRC1XDUJfBsasKklpDgOKTBXRqyVwx1UxN%2Bqutreccu43Ll9NR43usSSyvMUQGoFqTBvMZvUWPes8CoAI9cEgmwhAm5rQH2pPPDgLfJ%2BiZ11HZ%2FaaDEfuipKczbOINtZIXo8L96raSQh1uqG%2Bgmv3q%2BleiUafDrsvdU3lDv9l02BBdppF%2B5U6rSFq46sKzsTZqYG2ysnzXWPV6trAOzWEHMU0vD61aTeqUfDChfbJVTlqaO%2BfYnX73F%2FPDgEU0VdfSofbgVZNEi5L%2BqP5CmQW931jnmmP4BkPE1MMXch87UoTFNM%2B5h70S%2B2E53qLcoUm8pZWlFEkOV6XsWNO07JsRk85E6UiTiym4rcVKcAt9dA4z7c5l2%2FAaKHkWZinaUhKVzlVgluakTP0c2Gpl%2FOzBQA0WZVQ%2BCKBZfFV8Mn6wPWsc0ZRNP9K6VMvAQ5mUYV276i1ghWEq9vCL9HbPB1y%2FSEVD48BtyO9gj6mM7QERhake6S9quNK8%2BR6G2NZu3n%2F5FDuQFNdzH16yGONMYLL6NlAvEDhavP7eS%2B%2Fiz4m4d6q7De55gmQI%2Ferfviwit0ZOJ6ykZe%2B6%2F%2FCoMJXPh8QGOqUB2tN3Jl4l1Dqul7A6FsiesVMtUa86Fw16djta%2Bx4yf89I1y61%2F7LSb7BkZzKDRtJHJSXbMEOsuSdMCXCD70t5BsnQLiPlt1A8JWeQ0zL%2BxE92N6%2BcEyBfcYbrz5Yjq%2FysC6QSLebeAlEXqhsNKGFJEH%2BBSaDj%2FBeSsDPMt%2BdzocuZ%2Fgh8%2BeYs25i0nICHxdpUeJYiQXdpAJIKtcLYSV%2B8AeXg3ruz&X-Amz-Signature=a8e75888c02210a6fdbebe18320bf78010cb43ff3be0e6c55bce6fac0e87384a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cd28774a-ae2b-46c5-91c9-b4d16825172f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWXVGKD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHukXAQjzciTIFmTn9280nEu7Lnv40qZMo1GgdkzaEU%2BAiEA5VRXvuz0QFyis%2FiWPsAX4htGAkm3i%2FE%2FMXGrIsxHcrsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJEe1HCI7ioEJrCPXCrcA2ORmJ1%2FDcpb2kdc%2FNq3D16qc35RyOaPtGtrbKOR2G1t%2FdYRC1XDUJfBsasKklpDgOKTBXRqyVwx1UxN%2Bqutreccu43Ll9NR43usSSyvMUQGoFqTBvMZvUWPes8CoAI9cEgmwhAm5rQH2pPPDgLfJ%2BiZ11HZ%2FaaDEfuipKczbOINtZIXo8L96raSQh1uqG%2Bgmv3q%2BleiUafDrsvdU3lDv9l02BBdppF%2B5U6rSFq46sKzsTZqYG2ysnzXWPV6trAOzWEHMU0vD61aTeqUfDChfbJVTlqaO%2BfYnX73F%2FPDgEU0VdfSofbgVZNEi5L%2BqP5CmQW931jnmmP4BkPE1MMXch87UoTFNM%2B5h70S%2B2E53qLcoUm8pZWlFEkOV6XsWNO07JsRk85E6UiTiym4rcVKcAt9dA4z7c5l2%2FAaKHkWZinaUhKVzlVgluakTP0c2Gpl%2FOzBQA0WZVQ%2BCKBZfFV8Mn6wPWsc0ZRNP9K6VMvAQ5mUYV276i1ghWEq9vCL9HbPB1y%2FSEVD48BtyO9gj6mM7QERhake6S9quNK8%2BR6G2NZu3n%2F5FDuQFNdzH16yGONMYLL6NlAvEDhavP7eS%2B%2Fiz4m4d6q7De55gmQI%2Ferfviwit0ZOJ6ykZe%2B6%2F%2FCoMJXPh8QGOqUB2tN3Jl4l1Dqul7A6FsiesVMtUa86Fw16djta%2Bx4yf89I1y61%2F7LSb7BkZzKDRtJHJSXbMEOsuSdMCXCD70t5BsnQLiPlt1A8JWeQ0zL%2BxE92N6%2BcEyBfcYbrz5Yjq%2FysC6QSLebeAlEXqhsNKGFJEH%2BBSaDj%2FBeSsDPMt%2BdzocuZ%2Fgh8%2BeYs25i0nICHxdpUeJYiQXdpAJIKtcLYSV%2B8AeXg3ruz&X-Amz-Signature=f27e3deaf46cc757747f82055bb7a68920459e268291f2ba6b4a58224298717e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3dee5859-7bcf-41fb-9694-be9a6ee40a00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWXVGKD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHukXAQjzciTIFmTn9280nEu7Lnv40qZMo1GgdkzaEU%2BAiEA5VRXvuz0QFyis%2FiWPsAX4htGAkm3i%2FE%2FMXGrIsxHcrsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJEe1HCI7ioEJrCPXCrcA2ORmJ1%2FDcpb2kdc%2FNq3D16qc35RyOaPtGtrbKOR2G1t%2FdYRC1XDUJfBsasKklpDgOKTBXRqyVwx1UxN%2Bqutreccu43Ll9NR43usSSyvMUQGoFqTBvMZvUWPes8CoAI9cEgmwhAm5rQH2pPPDgLfJ%2BiZ11HZ%2FaaDEfuipKczbOINtZIXo8L96raSQh1uqG%2Bgmv3q%2BleiUafDrsvdU3lDv9l02BBdppF%2B5U6rSFq46sKzsTZqYG2ysnzXWPV6trAOzWEHMU0vD61aTeqUfDChfbJVTlqaO%2BfYnX73F%2FPDgEU0VdfSofbgVZNEi5L%2BqP5CmQW931jnmmP4BkPE1MMXch87UoTFNM%2B5h70S%2B2E53qLcoUm8pZWlFEkOV6XsWNO07JsRk85E6UiTiym4rcVKcAt9dA4z7c5l2%2FAaKHkWZinaUhKVzlVgluakTP0c2Gpl%2FOzBQA0WZVQ%2BCKBZfFV8Mn6wPWsc0ZRNP9K6VMvAQ5mUYV276i1ghWEq9vCL9HbPB1y%2FSEVD48BtyO9gj6mM7QERhake6S9quNK8%2BR6G2NZu3n%2F5FDuQFNdzH16yGONMYLL6NlAvEDhavP7eS%2B%2Fiz4m4d6q7De55gmQI%2Ferfviwit0ZOJ6ykZe%2B6%2F%2FCoMJXPh8QGOqUB2tN3Jl4l1Dqul7A6FsiesVMtUa86Fw16djta%2Bx4yf89I1y61%2F7LSb7BkZzKDRtJHJSXbMEOsuSdMCXCD70t5BsnQLiPlt1A8JWeQ0zL%2BxE92N6%2BcEyBfcYbrz5Yjq%2FysC6QSLebeAlEXqhsNKGFJEH%2BBSaDj%2FBeSsDPMt%2BdzocuZ%2Fgh8%2BeYs25i0nICHxdpUeJYiQXdpAJIKtcLYSV%2B8AeXg3ruz&X-Amz-Signature=d56c4f27bc0f35939528af73d20041c0c054f86201aad7ec396512b284c063d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 ****캐릭터 움직이는 코드****


## 입력 키 추가

> 🔥 **Edit - Project Settings - Input Manager**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0bcfa87f-6d14-47b3-bd5f-b57b48caf45f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWXVGKD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHukXAQjzciTIFmTn9280nEu7Lnv40qZMo1GgdkzaEU%2BAiEA5VRXvuz0QFyis%2FiWPsAX4htGAkm3i%2FE%2FMXGrIsxHcrsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJEe1HCI7ioEJrCPXCrcA2ORmJ1%2FDcpb2kdc%2FNq3D16qc35RyOaPtGtrbKOR2G1t%2FdYRC1XDUJfBsasKklpDgOKTBXRqyVwx1UxN%2Bqutreccu43Ll9NR43usSSyvMUQGoFqTBvMZvUWPes8CoAI9cEgmwhAm5rQH2pPPDgLfJ%2BiZ11HZ%2FaaDEfuipKczbOINtZIXo8L96raSQh1uqG%2Bgmv3q%2BleiUafDrsvdU3lDv9l02BBdppF%2B5U6rSFq46sKzsTZqYG2ysnzXWPV6trAOzWEHMU0vD61aTeqUfDChfbJVTlqaO%2BfYnX73F%2FPDgEU0VdfSofbgVZNEi5L%2BqP5CmQW931jnmmP4BkPE1MMXch87UoTFNM%2B5h70S%2B2E53qLcoUm8pZWlFEkOV6XsWNO07JsRk85E6UiTiym4rcVKcAt9dA4z7c5l2%2FAaKHkWZinaUhKVzlVgluakTP0c2Gpl%2FOzBQA0WZVQ%2BCKBZfFV8Mn6wPWsc0ZRNP9K6VMvAQ5mUYV276i1ghWEq9vCL9HbPB1y%2FSEVD48BtyO9gj6mM7QERhake6S9quNK8%2BR6G2NZu3n%2F5FDuQFNdzH16yGONMYLL6NlAvEDhavP7eS%2B%2Fiz4m4d6q7De55gmQI%2Ferfviwit0ZOJ6ykZe%2B6%2F%2FCoMJXPh8QGOqUB2tN3Jl4l1Dqul7A6FsiesVMtUa86Fw16djta%2Bx4yf89I1y61%2F7LSb7BkZzKDRtJHJSXbMEOsuSdMCXCD70t5BsnQLiPlt1A8JWeQ0zL%2BxE92N6%2BcEyBfcYbrz5Yjq%2FysC6QSLebeAlEXqhsNKGFJEH%2BBSaDj%2FBeSsDPMt%2BdzocuZ%2Fgh8%2BeYs25i0nICHxdpUeJYiQXdpAJIKtcLYSV%2B8AeXg3ruz&X-Amz-Signature=78dd5c984b6569bcbb7396599609553526b08add682a52c95a11f6f6f4f439b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **버그 뒤지게나서 뭔가했더니 역시나 대소문자 이슈였음**

> 🔥 **걸을땐 속도 느려지게**

> 🔥 **`LookAt()` 이용해서 캐릭터 로테이션**

> 🔥 **카메라 따라오게만들기**

🎥 [동영상 보기](https://www.youtube.com/watch?v=eZ8Dm809j4c&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=3)

> 🔥 **bool 연산자 사용시에 할 수 있는 문법**

> 🔥 **실수다… 왜 애니메이션이 안뜨나 했더니 Trigger로 생성해야할걸 bool로 생성했다**


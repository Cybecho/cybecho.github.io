---
title: "유니티 3D게임 쿼드뷰 14"
date: 2023-02-25T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 UI 구성 방법: 여러 판넬을 사용하여 필요한 UI를 구현하고, EventSystem을 통해 입력을 처리하며, RectTransform을 활용해 스크린 좌표를 설정한다. 글자 크기 문제 해결 및 선명한 글자 얻기 방법, HP 구현 방법도 설명한다."
notion_id: "1326f328-573e-4360-8b0e-060a3f305b1a"
notion_url: "https://www.notion.so/3D-14-1326f328573e43608b0e060a3f305b1a"
---

# 유니티 3D게임 쿼드뷰 14

> **Summary**
> 유니티 3D 게임 UI 구성 방법: 여러 판넬을 사용하여 필요한 UI를 구현하고, EventSystem을 통해 입력을 처리하며, RectTransform을 활용해 스크린 좌표를 설정한다. 글자 크기 문제 해결 및 선명한 글자 얻기 방법, HP 구현 방법도 설명한다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=N4PLRkupABM&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=14)

> 🔥 **게임 UI는 판넬을 용도에 맞춰 여러개 만들고 판넬 속에 필요한 UI를 구현한 후에 필요할때마다 판넬 전체를 불러오는방식으로 작업합니다

EX)인게임 플란넬, 게임오버 플란넬, 게임스타트 플란넬**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e501b351-a613-4180-8b8c-098527d79247/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672CJOUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDIlGPBFsN5LZ0LTdL2CAnMW43FICAFk1wAhgNqYNPwxAIgc2fNoA9%2B1GyAvig2NS6h6ojg50IJJ7H8WLg3Sh2NlwMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCZHHymu%2Bz4PU9eovCrcA7%2FJIGLgkCQwQMCLVODcGF0auX%2BS5H%2BHSDrT%2FcEt99bhWlk%2B7GqPrX0tc%2FMz6vzzbhRFgL4zQzzjMmMHlSjYJ7ax6SYUKNam3hpoMyPzWRulzUYE67%2B38Y4gv9z%2Baz05fy9jBhEOxYUZKrb6%2FXE1rY35LHaB9NbL3gNPNsZH2PSx5L6RTMflC%2FJLgL5o0aMUiYL51YqivKDrN4ARqRCFEB8DgHPO9BcbH%2BRLRW7JVv1uq4HzpOdIlF21dLxSbpBDgxS39BSMaeMZNjIW1%2FtyMCo1D6F%2BVMOTZq5nQ9PxKfpUfHyk%2FhzqND0Ksm6kGE3ynAX4z8I12yjIiMG7YyW6ZSzNcK9vum3JQCIdUJqw8fLqNXit9voIoonmq8YCLLLnFQNchim63rvvRn1iJHWPOL5RG68xksu4o%2BkGdJKCM9lyDI6%2F2nlHUaU0n%2By%2B9vuvHiCE067i6aliLyiO%2BF%2FN0d4wk6P8WC%2FiVIN4kLHGIKce4Ng6C1iQEfglJu9s1T211qURMsoDQMhUjJgs3GvB4EKJB9S63VtX5k%2FJyXaodiztXZ%2BZvhAmaY%2FxoOXMVT5%2BobBGxIJq3FCFrrjfYKwQ6kFVhDVjBDas%2FZYJUKZlFgVBGUZUqGSm5J8XGkuaMIfPh8QGOqUBun3AHUXRBPPANu1p5C0%2FQkdhl4YNK4cnPfT0%2BPvNvVNQtNY%2BpPlYjGxHSLeOqEfCvtuvqQORWwxBI5JlagOTWzxzGzZRU89Jl4AnZPLsru4JXRhZfbATODM37ROMTvQNvQ7%2FxKmi%2Bc72KwFfQmoYXMqIs%2FxOaqpGRbcUx9HBPLAaSjoGx1kh3jTcNDeV0S%2F%2FxjXOMwYosWaiDD%2FCxGjVxa8%2FdNvy&X-Amz-Signature=c328d0f2f1bf33b8274c1f506a2b9bcf66f22cfc10f7e040bf0e0336fe02401a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **우클릭 - UI - canvas 클릭하면 등장하는 EventSystem은 입력키를받는 컴포넌트라 생각하면 된다**

> 🔥 **RectTransform → 스크린좌표임 월드좌표와 다릅니다**

> 🔥 **Set Native Size 이미지를 원래 크기로 맞추는 기능**

> 🔥 **UI Text 글자크기가 박스보다 클경우 사라지는 현상을 해결하는방법은 다음과같다**

> 🔥 **선명한 글자를 얻는 방법은 다음과같다
스케일을 줄인다 → 줄인 비율만큼 폰트사이즈를 늘린다**

> 🔥 **UI 중심과 위치의 방향 기준**

> 🔥 **HP구현방법**


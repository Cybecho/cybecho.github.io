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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e25a54b7-090a-4341-a056-7fa56bbcc104/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QVYM7F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCdAaCHyA6760u4UhnV6p21HcTlvNxhm69BgHZNqkr9egIgaVnut3S%2FBRZrMwKsT8%2BiAfnreF7dSMpPPqW0VCds0s4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMCMmKY2oZrRK4yBfyrcA%2F6ui3%2B8%2FVYfTr3jBiuhien110fjGLJCHew7qy108ANAmg3xufOpnvGCni4pEtCmo2dk5iBgB4jZ2jEEzuHqhGyyi89JKzRengFfrvPO2dIG%2FtidSSxSTaOuaLxhsa4FDKnnz3MkfGXlP4So3SjBqFaTOhriMPoTsGEmLehFR1jAdCUinLzdPcAyI9HqXnRE6m7avOLyXnpqe1%2B59inDY1i8CY3oaqI8ojqYhLElQBjt33fTscmjdw8vtQgQETATL%2BfziLbVpa23%2BtEXhMjnFDTbyr92sifaXO4uuEhnWBiG5VP%2BXA%2Bfk4cRL0JZN2egyf4TMqCCcfFYx7kqa%2FQT9KsLuO4do%2BiZMj5NM4u%2FvdaINe3s3SfzO235u879INzyzhbx0VekkWNkqZib7Kneb0qCS1yctxlFofaUxMwwsRCZdAYBv2CRYrZfKn%2F8BxQka3Rt%2Bwm7y3oauAVDqhauQXvmgCNog303MPZLYXaB5wMMqlcTHQ%2FKlDh9ihgoZC2YffNv4iCEq%2B9iTMBHCeQpnWiKWCwbMaBY8tVH7BUGH68jLuAtRzdmiROcMo48tEsMTlWxVtoRp%2FZLEh3SagLT2noiAzN%2Bh01RWGSQRIHdFcDucYnJYQLOvsinfqGPMMbOh8QGOqUBnwWFr%2Fg1SMl1ZiJNTyt%2FxyoybzUEjsYH1Ui5wGV5NugWDzrQxv0UCmc%2Bmolbmak7DGBLHrj2gjO94JM9wVETFxOZxBZ4DeisoUHrTAEb0zFVi6gPbBJdy3P7Xs42yvhvzR3NzTh%2B0EtVt9tzsZykhhv84dXLEamLhD4f0C%2FCz7MzAxaJS98DPsgqKXj1ndtcmaWOyWakgbDfSyZCcqF35R%2Fa2NuQ&X-Amz-Signature=5c6624cea93b8c77403a56fb5d96a08e421fb23a32775caa80cb22e7a7f7f834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cd28774a-ae2b-46c5-91c9-b4d16825172f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QVYM7F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCdAaCHyA6760u4UhnV6p21HcTlvNxhm69BgHZNqkr9egIgaVnut3S%2FBRZrMwKsT8%2BiAfnreF7dSMpPPqW0VCds0s4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMCMmKY2oZrRK4yBfyrcA%2F6ui3%2B8%2FVYfTr3jBiuhien110fjGLJCHew7qy108ANAmg3xufOpnvGCni4pEtCmo2dk5iBgB4jZ2jEEzuHqhGyyi89JKzRengFfrvPO2dIG%2FtidSSxSTaOuaLxhsa4FDKnnz3MkfGXlP4So3SjBqFaTOhriMPoTsGEmLehFR1jAdCUinLzdPcAyI9HqXnRE6m7avOLyXnpqe1%2B59inDY1i8CY3oaqI8ojqYhLElQBjt33fTscmjdw8vtQgQETATL%2BfziLbVpa23%2BtEXhMjnFDTbyr92sifaXO4uuEhnWBiG5VP%2BXA%2Bfk4cRL0JZN2egyf4TMqCCcfFYx7kqa%2FQT9KsLuO4do%2BiZMj5NM4u%2FvdaINe3s3SfzO235u879INzyzhbx0VekkWNkqZib7Kneb0qCS1yctxlFofaUxMwwsRCZdAYBv2CRYrZfKn%2F8BxQka3Rt%2Bwm7y3oauAVDqhauQXvmgCNog303MPZLYXaB5wMMqlcTHQ%2FKlDh9ihgoZC2YffNv4iCEq%2B9iTMBHCeQpnWiKWCwbMaBY8tVH7BUGH68jLuAtRzdmiROcMo48tEsMTlWxVtoRp%2FZLEh3SagLT2noiAzN%2Bh01RWGSQRIHdFcDucYnJYQLOvsinfqGPMMbOh8QGOqUBnwWFr%2Fg1SMl1ZiJNTyt%2FxyoybzUEjsYH1Ui5wGV5NugWDzrQxv0UCmc%2Bmolbmak7DGBLHrj2gjO94JM9wVETFxOZxBZ4DeisoUHrTAEb0zFVi6gPbBJdy3P7Xs42yvhvzR3NzTh%2B0EtVt9tzsZykhhv84dXLEamLhD4f0C%2FCz7MzAxaJS98DPsgqKXj1ndtcmaWOyWakgbDfSyZCcqF35R%2Fa2NuQ&X-Amz-Signature=a9e93719f6e692b79c0bc92063eb594d7c84a96bfaaf95c0e53f4cd1b54fa411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3dee5859-7bcf-41fb-9694-be9a6ee40a00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QVYM7F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCdAaCHyA6760u4UhnV6p21HcTlvNxhm69BgHZNqkr9egIgaVnut3S%2FBRZrMwKsT8%2BiAfnreF7dSMpPPqW0VCds0s4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMCMmKY2oZrRK4yBfyrcA%2F6ui3%2B8%2FVYfTr3jBiuhien110fjGLJCHew7qy108ANAmg3xufOpnvGCni4pEtCmo2dk5iBgB4jZ2jEEzuHqhGyyi89JKzRengFfrvPO2dIG%2FtidSSxSTaOuaLxhsa4FDKnnz3MkfGXlP4So3SjBqFaTOhriMPoTsGEmLehFR1jAdCUinLzdPcAyI9HqXnRE6m7avOLyXnpqe1%2B59inDY1i8CY3oaqI8ojqYhLElQBjt33fTscmjdw8vtQgQETATL%2BfziLbVpa23%2BtEXhMjnFDTbyr92sifaXO4uuEhnWBiG5VP%2BXA%2Bfk4cRL0JZN2egyf4TMqCCcfFYx7kqa%2FQT9KsLuO4do%2BiZMj5NM4u%2FvdaINe3s3SfzO235u879INzyzhbx0VekkWNkqZib7Kneb0qCS1yctxlFofaUxMwwsRCZdAYBv2CRYrZfKn%2F8BxQka3Rt%2Bwm7y3oauAVDqhauQXvmgCNog303MPZLYXaB5wMMqlcTHQ%2FKlDh9ihgoZC2YffNv4iCEq%2B9iTMBHCeQpnWiKWCwbMaBY8tVH7BUGH68jLuAtRzdmiROcMo48tEsMTlWxVtoRp%2FZLEh3SagLT2noiAzN%2Bh01RWGSQRIHdFcDucYnJYQLOvsinfqGPMMbOh8QGOqUBnwWFr%2Fg1SMl1ZiJNTyt%2FxyoybzUEjsYH1Ui5wGV5NugWDzrQxv0UCmc%2Bmolbmak7DGBLHrj2gjO94JM9wVETFxOZxBZ4DeisoUHrTAEb0zFVi6gPbBJdy3P7Xs42yvhvzR3NzTh%2B0EtVt9tzsZykhhv84dXLEamLhD4f0C%2FCz7MzAxaJS98DPsgqKXj1ndtcmaWOyWakgbDfSyZCcqF35R%2Fa2NuQ&X-Amz-Signature=bad56b6946d07c51efc35ae0c4ae8a9941bdcfd6ee976044ed8d6cd02911cda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 ****캐릭터 움직이는 코드****


## 입력 키 추가

> 🔥 **Edit - Project Settings - Input Manager**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0bcfa87f-6d14-47b3-bd5f-b57b48caf45f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QVYM7F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCdAaCHyA6760u4UhnV6p21HcTlvNxhm69BgHZNqkr9egIgaVnut3S%2FBRZrMwKsT8%2BiAfnreF7dSMpPPqW0VCds0s4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMCMmKY2oZrRK4yBfyrcA%2F6ui3%2B8%2FVYfTr3jBiuhien110fjGLJCHew7qy108ANAmg3xufOpnvGCni4pEtCmo2dk5iBgB4jZ2jEEzuHqhGyyi89JKzRengFfrvPO2dIG%2FtidSSxSTaOuaLxhsa4FDKnnz3MkfGXlP4So3SjBqFaTOhriMPoTsGEmLehFR1jAdCUinLzdPcAyI9HqXnRE6m7avOLyXnpqe1%2B59inDY1i8CY3oaqI8ojqYhLElQBjt33fTscmjdw8vtQgQETATL%2BfziLbVpa23%2BtEXhMjnFDTbyr92sifaXO4uuEhnWBiG5VP%2BXA%2Bfk4cRL0JZN2egyf4TMqCCcfFYx7kqa%2FQT9KsLuO4do%2BiZMj5NM4u%2FvdaINe3s3SfzO235u879INzyzhbx0VekkWNkqZib7Kneb0qCS1yctxlFofaUxMwwsRCZdAYBv2CRYrZfKn%2F8BxQka3Rt%2Bwm7y3oauAVDqhauQXvmgCNog303MPZLYXaB5wMMqlcTHQ%2FKlDh9ihgoZC2YffNv4iCEq%2B9iTMBHCeQpnWiKWCwbMaBY8tVH7BUGH68jLuAtRzdmiROcMo48tEsMTlWxVtoRp%2FZLEh3SagLT2noiAzN%2Bh01RWGSQRIHdFcDucYnJYQLOvsinfqGPMMbOh8QGOqUBnwWFr%2Fg1SMl1ZiJNTyt%2FxyoybzUEjsYH1Ui5wGV5NugWDzrQxv0UCmc%2Bmolbmak7DGBLHrj2gjO94JM9wVETFxOZxBZ4DeisoUHrTAEb0zFVi6gPbBJdy3P7Xs42yvhvzR3NzTh%2B0EtVt9tzsZykhhv84dXLEamLhD4f0C%2FCz7MzAxaJS98DPsgqKXj1ndtcmaWOyWakgbDfSyZCcqF35R%2Fa2NuQ&X-Amz-Signature=bfeebcc0f643f33929be168a1a29c39f263125acdd0d0a096261109f2fe875bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **버그 뒤지게나서 뭔가했더니 역시나 대소문자 이슈였음**

> 🔥 **걸을땐 속도 느려지게**

> 🔥 **`LookAt()` 이용해서 캐릭터 로테이션**

> 🔥 **카메라 따라오게만들기**

🎥 [동영상 보기](https://www.youtube.com/watch?v=eZ8Dm809j4c&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=3)

> 🔥 **bool 연산자 사용시에 할 수 있는 문법**

> 🔥 **실수다… 왜 애니메이션이 안뜨나 했더니 Trigger로 생성해야할걸 bool로 생성했다**


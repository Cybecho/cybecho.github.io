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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7df5f06e-f442-436b-8883-9d0aae1a41ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7ZHXR7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDNWBTZtIudfWnZ61tV1IibBpArSlbr9yMapRMD%2BlyUmQIhAIdcWBBy80KmySIiBnfHj87CTZxnak%2FUEwFeIxBao7o%2BKv8DCCkQABoMNjM3NDIzMTgzODA1IgzmyQpFNBAshrMQtWsq3AOWgG%2F6eIDy3CEHkVb2ADctrKeq%2FcnznMwDp8NUIHRj%2BPrZVIRvgMIlGqPHfbCrML5A6MspYD8NHvhd5h5DBEEM3OPreRBTSoPO7LkwMBKb00mrDx%2B7126ZRGH5iCIi0gaPzuocPqHPT7Tu%2FO9yechDdNGRhSGA3LKfnznN8QJsT4qc7Y3XGuwCIf8lIvVOB8itsl881Fvl6IHRg4YTO6HWTPq%2Be3laGI84FjZ0cizPUoOG%2BEmgjrHs3gu%2FgVALIvXEFV7qgre4hgHQlt69EsFQ6ZPKpiI%2F06GVasNL0PkhLni%2BvPgtTDQUSF8Wv3dMa8WIHyjWTysh%2FwxhQvxdjVO%2FoGIxg87JgjQcPOzZ9KfKXzZch6rfKibY%2FpQ%2BLdUzaYJDzqIUI09i2r95v3tAp7lxjM44DptiQoQ1WhSvqPWdgWx16rP5XtT68CydbtNEQnPEJ0F5YJ1YAC5R33qMCAoQihp3B%2Be8Dmz0Yjo5MQyopPmoLx5Sk5HRbjDyJGwcOWL3xpRkzTs6hLjeqcUhN5ArUVNriAdxZppyDIeYp8USymknnN0E8TQeciqu8yA%2BziaU9cjTy2RJ2Fro0bZtSBhoVAwmQn%2BtHuBa9s2aTD30MFTzKyRmDUPS28VEnDCHz4fEBjqkAa%2Bf5ZC4JKzpW%2BEBWEywWjuT1tCbCtJgUo%2Fr3xvu%2FPgQXjvE3S2Ab5B2D%2BWjI6P5PiCR75ipS4H%2BYmR2jM84OkTHKu8Hynf0sZXBD%2BMu%2FJ4j7Qkf2JXAvMlex3OEXoIIio83fEKkO3fX3tU6kK1cxQgrkhg1K%2FQas2NNTBB3A2MotlaAdajiqHsCDlrpaXiHIgKS63ZFt9QTYBfN1LZfyJOIkHkn&X-Amz-Signature=c1c57593feb39c9584169ef0a214e4a8de9be6a0166bcc91d4a1ae9ac6485d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **도넛모양으로 회전하는 파티클시스템**

> 🔥 **UI에서 Create Empty를 만들고Image 컴포넌트를 추가해서 버튼이나 특정이미지를 삽입할수도 있다 굳이 Image를 생성하지 않아도…**

> 🔥 **UI를 뜨게하기위한 코드 생성**

> 🔥 **함수에서 외부코드 불러와서 사용하는 방법**

> 🔥 **Player 부분도 코드 수정**

> 🔥 **버튼에 특정 스크립트에 특정 함수 실행시키는 방법**

> 🔥 **구매 스크립트 작성 UI를 따로 불러와줘야 인게임에서 UI글씨가 보입니다**

> 🔥 **대화생성 스크립트 작성**


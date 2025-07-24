---
title: "유니티 3D게임 쿼드뷰 05"
date: 2023-02-09T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "UI 크기 조정, 무기 잔상 효과, 코루틴 함수 사용법, 마우스 방향 공격 구현 및 레이캐스트 활용 방법에 대한 설명과 코드 예시 제공."
notion_id: "297ca482-365a-43d6-8672-d9a0288c6047"
notion_url: "https://www.notion.so/3D-05-297ca482365a43d68672d9a0288c6047"
---

# 유니티 3D게임 쿼드뷰 05

> **Summary**
> UI 크기 조정, 무기 잔상 효과, 코루틴 함수 사용법, 마우스 방향 공격 구현 및 레이캐스트 활용 방법에 대한 설명과 코드 예시 제공.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=afPF_fOOG68)

🎥 [동영상 보기](https://www.youtube.com/watch?v=Zfoyagdz1y0&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=6)

> 🔥 **무기기본설정 코드**
> ```c#
> //Weapon.cs
> //무기정보 변수설정
>     public enum Type { Melee, Range }; //근거리/원거리 열거형으로 무기타입
>     public Type type; //실제 무기 타입이 저장될 변수 (enum에서 설정한 타입이 type에 저장)
>     public int damage;
>     public float rate; //공속
>     public BoxCollider meleeArea; //공격범위를 콜라이더로 설정
>     public TrailRenderer trailEffect; //무기 휘두르는 효과
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e597a13f-6328-48d8-8227-e202cf822be4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6WEXWI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAgZ53UuLCMYLfCpMw1wINSPS03W8cLgAbsFIkHyxOqaAiBFxCZlKc9S7HFYiQBZB0%2F8lM2ufgIl0bCRCzSKTCYDUyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMMXcmcG8QtEmv9OOqKtwDf9I8OfT79EtTtISDiEvMnLMnb5Z8X6Ii0SE8InkkilPiFSRAD3SH1Wwm4QBn9sYe%2BGFZNLVvep4ZnHguDjvnsoh8XbMsjcj1C4Nw%2FNVofJyfV9R0bUX9SJa0AvR2%2BYInrQoxvjet2MyAtgaSSG0eSKXFJfHMhSdbtOC11mr%2FQ2OkOBhrqPb9DoKvLlTQ%2FPAjkMa5gLNGk0cV11wmGGyKAWMPiWssZss6TasyNuKIIo5YjFKeXhaORaj8FGoJ6BEYcnFwdrc0HKBeXyKNnfdVf5GMxy488dT2oX8FurzzvZXxzahlY1T%2FQ33m3iVs2idc0y%2BlMiRO%2FBHXbr4Zh7gaULYqylaKK4FEBhGdfaT3pMTTayISq%2FG37%2FzeEarLVlkESrMVGpomAXlTvs6Qn5%2F0vLkc5v62ZixvCbY%2BoRaknHEbICm25Tz7q1kQm%2Bie0Z2jvq8EX3yMrueV%2B%2BPvx72L%2Fd77DZxhSi1JilHcD1rP3Yuij%2F7miIFWGKeXiuBRwKY5YHfVEHvCoqyK9WUOPj%2BoUZzKKPz4j2pjMHnAt1f1q8Ju7Ft2s%2Fd1Yh8CsEUHjRI9U%2FZLCc1wpHuOKrFNzuk6dIDw7jAYFp4m5spTtkMf4mlRdI%2BxBOcqR46iAxAw1faHxAY6pgHExPl67tkKxoA9AuKjavbmPXwAuDsPaanuyAN7Wdkla4Ay2DBJBeGAmVvNPTqesQk5miSUCT16A9B522CQmqP5ZSf7nW6Ki1CTYAzNpqy0qvBaOf8Ruu5mPM6BkkAmTTeSqyh6Vc2gvQzJ90Qp7E9TJifzIoyrmk5HadmxMLjDilK7lVGSp%2F4fFLMj%2BKtpkZPealXrpQm0qswNT%2BZ2q1mEMmUxt83c&X-Amz-Signature=f8945324f632078f2eeac227788c52387b48b3f44feec975feea13c9bc672c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2b35ba06-c4a4-48c3-a1b8-117892df2098/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6WEXWI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAgZ53UuLCMYLfCpMw1wINSPS03W8cLgAbsFIkHyxOqaAiBFxCZlKc9S7HFYiQBZB0%2F8lM2ufgIl0bCRCzSKTCYDUyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMMXcmcG8QtEmv9OOqKtwDf9I8OfT79EtTtISDiEvMnLMnb5Z8X6Ii0SE8InkkilPiFSRAD3SH1Wwm4QBn9sYe%2BGFZNLVvep4ZnHguDjvnsoh8XbMsjcj1C4Nw%2FNVofJyfV9R0bUX9SJa0AvR2%2BYInrQoxvjet2MyAtgaSSG0eSKXFJfHMhSdbtOC11mr%2FQ2OkOBhrqPb9DoKvLlTQ%2FPAjkMa5gLNGk0cV11wmGGyKAWMPiWssZss6TasyNuKIIo5YjFKeXhaORaj8FGoJ6BEYcnFwdrc0HKBeXyKNnfdVf5GMxy488dT2oX8FurzzvZXxzahlY1T%2FQ33m3iVs2idc0y%2BlMiRO%2FBHXbr4Zh7gaULYqylaKK4FEBhGdfaT3pMTTayISq%2FG37%2FzeEarLVlkESrMVGpomAXlTvs6Qn5%2F0vLkc5v62ZixvCbY%2BoRaknHEbICm25Tz7q1kQm%2Bie0Z2jvq8EX3yMrueV%2B%2BPvx72L%2Fd77DZxhSi1JilHcD1rP3Yuij%2F7miIFWGKeXiuBRwKY5YHfVEHvCoqyK9WUOPj%2BoUZzKKPz4j2pjMHnAt1f1q8Ju7Ft2s%2Fd1Yh8CsEUHjRI9U%2FZLCc1wpHuOKrFNzuk6dIDw7jAYFp4m5spTtkMf4mlRdI%2BxBOcqR46iAxAw1faHxAY6pgHExPl67tkKxoA9AuKjavbmPXwAuDsPaanuyAN7Wdkla4Ay2DBJBeGAmVvNPTqesQk5miSUCT16A9B522CQmqP5ZSf7nW6Ki1CTYAzNpqy0qvBaOf8Ruu5mPM6BkkAmTTeSqyh6Vc2gvQzJ90Qp7E9TJifzIoyrmk5HadmxMLjDilK7lVGSp%2F4fFLMj%2BKtpkZPealXrpQm0qswNT%2BZ2q1mEMmUxt83c&X-Amz-Signature=20a326de4f4cd048802d5d902511c4970ca7d4f8a74ac929999006badbec2dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **근접공격 잔상효과를 만들기 위해서 웨폰포인트에 Effect Empty를 설정해두고 Trail Renderer 컴포넌트를 추가해준다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b5dd6928-9db3-4d9b-a696-60613f339740/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666762BGHG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFemYDnk0PVxTGnvf4V0RUVqE74aF77Nj%2BPI8hJ4RqcXAiEAkg1qldMscXXs1tQDN7vQz4pste20tMFAZ5H5Sp4oBgsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKqoFAl7aSZUlRBMKyrcA1lm%2BiDyCVKNuLTro2o5ICtwDpg8hhL6oD81TGeubgTGTSwUap3o3eSn66EbtEmU1NdALh3gxn%2FrxCNaxamcH1psh4Nuz2Y9%2BYR3GSt3tQONXcNOu1Cf%2B8S9xQFZh5v3TAaVOvE1tOS7s0xY2JdHwLhqPVwhEPGf1oV5kjrVm28OaWAXQ04j194xj5o4hk3Dg4khQ58fjsie%2B4IWTwyg59CMAR4FELbRl%2BPFAca6nNBfEb1NS91zB4VRUZtJ%2FuH7bv4wsrS2EAlZPzK5bdlTD6T2j6dyg1ibj%2B6epiS7i72d4Xg8natHS%2BK1ZgFPal442iTCSpobm8PUsRoH0nBNx0HJMOxNtX1ZXKwZGVXhaNTs%2FklTO0n3DE1%2BPAPBMnr1So50EHFBy70mo4MJDibUmNF%2B8hB1GITqMx0z4l8MXohBbAozPlon6jqbRoCM4i3pF4j3vafPwIxO7nDXx6xuosYH%2Bmjb9VBQ1auNLW9f3TkPs0BhV%2Ft2smfSi8cKEsbuhqzETswqhU0PNGUHUYff6tR4ISE9FDwG02HYC8jrStWYCFMA1yIAXvblrCCpgQSRcxfkZ5JyIDnYvGboVIImzW5pezsXCINdCBENu%2BU1wYJrE1lEK8n5ygR%2Bq3AXMJb2h8QGOqUBNCCudCryDdLQpvpidk9Rjr4kuT0QKf14OZ2y7H5u2YOVGhY0qqFJI1ZY%2FDjnzopODiUoF2RGAQoWufaUm0eNSSSGoHePoZBzIMsfAqZADgyx3G1TDiVOWGFPRl4aIiKhn4FS2MQKAZrGFPC6rg5nN%2B9XUBum%2FJxQfIXl%2BAXIgfXO7NYazYAfj3M8bq5dc8eelJxAVK6%2BHjQc05WJPaEHQpn0jMK0&X-Amz-Signature=c0a6fe41cf6cd735ff13e50dbf0866149d0d7673e31c5f64fc4e43b9f9177498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6970814a-8a41-4237-b7a6-48b2a3f47a47/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666762BGHG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFemYDnk0PVxTGnvf4V0RUVqE74aF77Nj%2BPI8hJ4RqcXAiEAkg1qldMscXXs1tQDN7vQz4pste20tMFAZ5H5Sp4oBgsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKqoFAl7aSZUlRBMKyrcA1lm%2BiDyCVKNuLTro2o5ICtwDpg8hhL6oD81TGeubgTGTSwUap3o3eSn66EbtEmU1NdALh3gxn%2FrxCNaxamcH1psh4Nuz2Y9%2BYR3GSt3tQONXcNOu1Cf%2B8S9xQFZh5v3TAaVOvE1tOS7s0xY2JdHwLhqPVwhEPGf1oV5kjrVm28OaWAXQ04j194xj5o4hk3Dg4khQ58fjsie%2B4IWTwyg59CMAR4FELbRl%2BPFAca6nNBfEb1NS91zB4VRUZtJ%2FuH7bv4wsrS2EAlZPzK5bdlTD6T2j6dyg1ibj%2B6epiS7i72d4Xg8natHS%2BK1ZgFPal442iTCSpobm8PUsRoH0nBNx0HJMOxNtX1ZXKwZGVXhaNTs%2FklTO0n3DE1%2BPAPBMnr1So50EHFBy70mo4MJDibUmNF%2B8hB1GITqMx0z4l8MXohBbAozPlon6jqbRoCM4i3pF4j3vafPwIxO7nDXx6xuosYH%2Bmjb9VBQ1auNLW9f3TkPs0BhV%2Ft2smfSi8cKEsbuhqzETswqhU0PNGUHUYff6tR4ISE9FDwG02HYC8jrStWYCFMA1yIAXvblrCCpgQSRcxfkZ5JyIDnYvGboVIImzW5pezsXCINdCBENu%2BU1wYJrE1lEK8n5ygR%2Bq3AXMJb2h8QGOqUBNCCudCryDdLQpvpidk9Rjr4kuT0QKf14OZ2y7H5u2YOVGhY0qqFJI1ZY%2FDjnzopODiUoF2RGAQoWufaUm0eNSSSGoHePoZBzIMsfAqZADgyx3G1TDiVOWGFPRl4aIiKhn4FS2MQKAZrGFPC6rg5nN%2B9XUBum%2FJxQfIXl%2BAXIgfXO7NYazYAfj3M8bq5dc8eelJxAVK6%2BHjQc05WJPaEHQpn0jMK0&X-Amz-Signature=fb6bb57bbe6338ae35baf1ce009a8e91734aa949230951e32ca4363bc2623800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b8cd1e58-6912-411a-81e9-aaee5974b7ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666762BGHG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFemYDnk0PVxTGnvf4V0RUVqE74aF77Nj%2BPI8hJ4RqcXAiEAkg1qldMscXXs1tQDN7vQz4pste20tMFAZ5H5Sp4oBgsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKqoFAl7aSZUlRBMKyrcA1lm%2BiDyCVKNuLTro2o5ICtwDpg8hhL6oD81TGeubgTGTSwUap3o3eSn66EbtEmU1NdALh3gxn%2FrxCNaxamcH1psh4Nuz2Y9%2BYR3GSt3tQONXcNOu1Cf%2B8S9xQFZh5v3TAaVOvE1tOS7s0xY2JdHwLhqPVwhEPGf1oV5kjrVm28OaWAXQ04j194xj5o4hk3Dg4khQ58fjsie%2B4IWTwyg59CMAR4FELbRl%2BPFAca6nNBfEb1NS91zB4VRUZtJ%2FuH7bv4wsrS2EAlZPzK5bdlTD6T2j6dyg1ibj%2B6epiS7i72d4Xg8natHS%2BK1ZgFPal442iTCSpobm8PUsRoH0nBNx0HJMOxNtX1ZXKwZGVXhaNTs%2FklTO0n3DE1%2BPAPBMnr1So50EHFBy70mo4MJDibUmNF%2B8hB1GITqMx0z4l8MXohBbAozPlon6jqbRoCM4i3pF4j3vafPwIxO7nDXx6xuosYH%2Bmjb9VBQ1auNLW9f3TkPs0BhV%2Ft2smfSi8cKEsbuhqzETswqhU0PNGUHUYff6tR4ISE9FDwG02HYC8jrStWYCFMA1yIAXvblrCCpgQSRcxfkZ5JyIDnYvGboVIImzW5pezsXCINdCBENu%2BU1wYJrE1lEK8n5ygR%2Bq3AXMJb2h8QGOqUBNCCudCryDdLQpvpidk9Rjr4kuT0QKf14OZ2y7H5u2YOVGhY0qqFJI1ZY%2FDjnzopODiUoF2RGAQoWufaUm0eNSSSGoHePoZBzIMsfAqZADgyx3G1TDiVOWGFPRl4aIiKhn4FS2MQKAZrGFPC6rg5nN%2B9XUBum%2FJxQfIXl%2BAXIgfXO7NYazYAfj3M8bq5dc8eelJxAVK6%2BHjQc05WJPaEHQpn0jMK0&X-Amz-Signature=2d64a30e2a829023adfdf0a0a156688a26ff0a848136f2fceb4b4007bdaca60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/bb6da1d8-1a6a-4b58-8343-1c236c2f1d64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666762BGHG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFemYDnk0PVxTGnvf4V0RUVqE74aF77Nj%2BPI8hJ4RqcXAiEAkg1qldMscXXs1tQDN7vQz4pste20tMFAZ5H5Sp4oBgsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKqoFAl7aSZUlRBMKyrcA1lm%2BiDyCVKNuLTro2o5ICtwDpg8hhL6oD81TGeubgTGTSwUap3o3eSn66EbtEmU1NdALh3gxn%2FrxCNaxamcH1psh4Nuz2Y9%2BYR3GSt3tQONXcNOu1Cf%2B8S9xQFZh5v3TAaVOvE1tOS7s0xY2JdHwLhqPVwhEPGf1oV5kjrVm28OaWAXQ04j194xj5o4hk3Dg4khQ58fjsie%2B4IWTwyg59CMAR4FELbRl%2BPFAca6nNBfEb1NS91zB4VRUZtJ%2FuH7bv4wsrS2EAlZPzK5bdlTD6T2j6dyg1ibj%2B6epiS7i72d4Xg8natHS%2BK1ZgFPal442iTCSpobm8PUsRoH0nBNx0HJMOxNtX1ZXKwZGVXhaNTs%2FklTO0n3DE1%2BPAPBMnr1So50EHFBy70mo4MJDibUmNF%2B8hB1GITqMx0z4l8MXohBbAozPlon6jqbRoCM4i3pF4j3vafPwIxO7nDXx6xuosYH%2Bmjb9VBQ1auNLW9f3TkPs0BhV%2Ft2smfSi8cKEsbuhqzETswqhU0PNGUHUYff6tR4ISE9FDwG02HYC8jrStWYCFMA1yIAXvblrCCpgQSRcxfkZ5JyIDnYvGboVIImzW5pezsXCINdCBENu%2BU1wYJrE1lEK8n5ygR%2Bq3AXMJb2h8QGOqUBNCCudCryDdLQpvpidk9Rjr4kuT0QKf14OZ2y7H5u2YOVGhY0qqFJI1ZY%2FDjnzopODiUoF2RGAQoWufaUm0eNSSSGoHePoZBzIMsfAqZADgyx3G1TDiVOWGFPRl4aIiKhn4FS2MQKAZrGFPC6rg5nN%2B9XUBum%2FJxQfIXl%2BAXIgfXO7NYazYAfj3M8bq5dc8eelJxAVK6%2BHjQc05WJPaEHQpn0jMK0&X-Amz-Signature=49d3415b539eab79d68e59a185810b31d8ae1da0877cef55ef5207850d0a847d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 그리고 Trail 렌더하고 Box 콜라이더도 Off 시켜준다
>
>

> 🔥 ****코루틴 함수 / Ienumerator 은 yield 를 포함하고있어야한다****
>
> Yield 키워드를 여러개 사용하여 시간차 로직 작성이 가능함
>
>
> > **일반함수 **: Use() 함수를 메인루트라고할때 Swing()이라는 함수를 호출하면 서브루틴이라고 한다
> ** 코루틴함수 **: Use() 메인함수와 Swing()코루틴이 동시에 실행된다
>
> ```c#
> IEnumerator Swing()
>     {
>         //yield 결과를 전달하는 함수
>         yield return null;
>     }
> ```
>
>

> 🔥 **코루틴 함수는 사용할때 `StartCoroution(”함수이름”);` 로 사용해야한다**
> ```c#
> public void Use()
>     {
>         //현재 타입의 무기타입이 근접무기라면
>         if(type == Type.Melee)
>         {
>             StopCoroutine("Swing");
>             StartCoroutine("Swing");
>         }
>     }
>
>     IEnumerator Swing()
>     {
>         //yield 결과를 전달하는 함수
>
>         //1번 구역 실행
>         yield return new WaitForSeconds(0.1f); // 0.1초 대기
>         //2번 구역 실행
>
>         //break로 코루틴 탈출 가능
>         yield break;
>     }
> ```
>
>

> 🔥 **그리고 Player.cs 에 있던 코드도 Weapon에 맞춰 변경(볼드체 해둔 코드 추가)**
> ```c#
> **Weapon **equipweapon; //장착하고있는 무기의 메쉬 //Weapon.cs의 클래스를 사용해야하기 때문
>
> void Swap()
>     {
>         if(sDown1 && (!hasWeapons[0] || equipweaponIndex == 0)) return;
>         if(sDown2 && (!hasWeapons[1] || equipweaponIndex == 1)) return;
>         if(sDown3 && (!hasWeapons[2] || equipweaponIndex == 2)) return;
>         //스왑버튼이 눌려있고 무기를 가지고있지 않거나 현재 무기 인덱스가 해당무기를 가지고 있을때 리턴시켜서 함수를 종료시킨다
>
>         int weaponsIndex = -1; //weaponsIndex 기본값은 -1 즉 없는값 입니다
>         if (sDown1) weaponsIndex = 0;
>         if (sDown2) weaponsIndex = 1;
>         if (sDown3) weaponsIndex = 2;
>
>         if((sDown1 || sDown2 || sDown3) && !isJump && !isDodge) //1 2 3 키 중 하나만 눌린 상태이고 점프와 회피상태가 아닐떄 실행됩니다
>         {
>             //처음시작하면 손에 아무것도 없는 Null상태기 때문에 false를 하면 에러가뜬다
>             //고로 비어있는상태가 아닐때만 현재 쥐고있는 무기를 off하는 코드작성
>             if(equipweapon != null) equipweapon**.gameObject**.SetActive(false);
>
>             equipweaponIndex = weaponsIndex;
>             equipweapon = Weapons[weaponsIndex]**.GetComponent<Weapon>();**
>             //게임오브젝트[] Weapons 값은 위에서 if로 weaponsIndex을 받아오고 해당 오브젝트를 활성화시켜 보이게합니다
>             equipweapon**.gameObject**.SetActive(true);
>             isSwap = true;
>
>             anim.SetTrigger("doSwap");
>             Invoke("SwapOut",0.4f); //0.4초뒤에 isSwap을 다시 false로 되돌린다
>         }
>     }
>
> void Move()
>     {
>         moveVec = new Vector3(hAxis,0,vAxis).normalized;
>
>         //혹시 지금 닷지중입니까?
>         //닷지를 했을때 dodgeVec에 moveVec이 담겨서 방향값이 고정된다
>         if(isDodge)
>             moveVec = dodgeVec;
>
>         if(isSwap** || !isFireReady**) //공격할땐 못움직이게
>             moveVec = Vector3.zero;
>
>         //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
>         anim.SetBool("IsRun", moveVec != Vector3.zero); // 0,0,0만 아니면 isRun을 받는다
>         anim.SetBool("IsWalk", wDown);
>     }
> ```
>
> ```c#
> void Attack()
>     {
>         //공격하기위해선 일단 손에 무기가 있는지부터 확인 무기 없으면(null) 나가~
>         if(equipweapon == null)
>             return;
>
>         fireDelay += Time.deltaTime; //공격 딜레이에 시간을 더해주고 공격가능 여부 확인
>         isFireReady = equipweapon.rate < fireDelay; //공격속도보다 파이어딜레이가 크면 true가 저장된다
>
>         if(fDown && isFireReady && !isDodge && !isSwap)
>         {
>             equipweapon.Use(); //Weapon.cs 내부에 Use() 함수 실행
>             anim.SetTrigger("doSwing");
>             fireDelay = 0;
>         }
>     }
> ```
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=07q9RUTRq4M)

> 🔥 **총알이 바닥에 닿았을 때 물리충돌설정 (Rigidbody / Collider 는 기본으로 설정해두고)**
> ```c#
> //Bullet.cs
>
> public class Bullet : MonoBehaviour
> {
>     public int damage;
>
>     void OnCollisionEnter(Collision collision)
>     {
>         if(collision.gameObject.tag == "Floor")
>         {
>             Destroy(gameObject, 3);
>         }
>         else(collision.gameObject.tag == "Wall")
>         {
>             Destroy(gameObject);
>         }
>     }
> }
> ```
>
>

> 🔥 **재장전 코드**
> ```c#
> void Reroad()
>     {
>         if (equipweapon == null)
>             return;
>         if (equipweapon.type == Weapon.Type.Melee)
>             return;
>         if (ammo == 0)
>             return;
>
>         if(rDown && !isJump && !isDodge && !isSwap &&!isFireReady && moveVec != Vector3.zero)
>         {
>             anim.SetTrigger("doReload");
>             isReroad = true;
>             Invoke("ReloadOut",0.5f);
>         }
>     }
>
>     void ReloadOut()
>     {
>         //보유총알이 총의 최대탄창보다 적으면 장전해도 그대로 보유총알 아니라면 보유총알의 최대탄차안큼 저장된다
>         int reAmmo = ammo < equipweapon.maxAmmo ? ammo : equipweapon.maxAmmo;
>         equipweapon.curAmmo = reAmmo;
>         ammo -= reAmmo; //보유총알에서 장전하는 값을 계속해서 뺀다
>         isReroad = false;
>     }
> ```
>
> > 보유총알이 총의 최대탄창보다 적으면 장전해도 그대로 보유총알 아니라면 보유총알의 최대탄차안큼 저장된다 
>
> ```c#
> void Move()
>     {
>         moveVec = new Vector3(hAxis,0,vAxis).normalized;
>
>         //혹시 지금 닷지중입니까?
>         //닷지를 했을때 dodgeVec에 moveVec이 담겨서 방향값이 고정된다
>         if(isDodge)
>             moveVec = dodgeVec;
>
>         if(isSwap || !isFireReady || **!isReroad**)
>             moveVec = Vector3.zero;
>
>         //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
>         anim.SetBool("IsRun", moveVec != Vector3.zero); // 0,0,0만 아니면 isRun을 받는다
>         anim.SetBool("IsWalk", wDown);
>     }
> ```
>
>

> 🔥 **마우스 방향으로 공격**
> ```c#
> //player.cs
>
> public Camera followCamera;
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d887c57a-6be6-4731-b496-d2be49e309f8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVBPWP2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFIXy2OAPKhqj7JAV4nPzJXX8y4i62gqG%2Bu%2BpKW2rhCrAiB0JJlRVh384XqFINtMkFQna3P108qVg8nZvg9tNIoEbSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM21%2BOOyllrYJxH7RrKtwDeGQXQ6iEk2PbLCJPpVe3q2Kn9E3EykKXXaM6o2UlXGC40QhzdolouDP7LYxUhbkt1dXKhMIkqMQzLVbVeAD%2FU1RXlA8h5OXm8a7E05HEJxZU8sTG%2FQX40VpXhLFTSLboalts6spRe0s8Z78%2BxevWYa7DHU85dfRDzz2hCSqOxNI86PSvKMVwG1UKgFr0odhqH4K3by%2FETB3UXQoaVVYSwNw3YIHxheTxxYm%2Bs8F%2BciJSWE0Uk5KVmMW8dF6Dp3sOWL95v8VLIui4S2Ojf2s4OP1Qhlam%2FYm8x41lH%2FA34%2Fmg2KZoRrWU7UKl0P6rbdCfbuzd5pJjDtm5ONtbMRYVq0W63LpQboEh6CTfg%2BCS0izLz%2B99wiqu%2B3AowOyiTjVUMwgqhKpjLEpRrCV%2FO3OM0wJpDB67es5fic0gGYg6vfgJH3j4YVwCyTOzpDEcwfx6MqpuYX5RTv7S7kCL8PwoTR32l%2BIYtasaFvdEUPpq1JELemd4j9jQCSuOjN2GTkgQVXWM9AnEIKYd2ow7Q3HFUqdqAq3jrK%2FMFnWJegpxOErRia2HnD9UR2QIR%2Bd9h2NL1dW9xYZJk%2F2V8n1lxw1qeKNj5lttQfl30%2Bffk3lildLI145ZvgOlocpFB4EwkvaHxAY6pgHvv%2FqwORvlGhV0H3fW5rsdGYQ35rMd3hIs%2BgB%2B3h1z2wKJqogOIJQ4xuqd0nM0NonIXsG7LOpNovDRo82F1K5BcUA%2FG1juVi%2FanG2IvOkMna%2Fxmcx5VadMhsto77efsWoSTxMjyQ7qpOD0qjFxm27duppBPPfy6F0Aa%2FBDBpSyHR2njxNqAlmRnFYVrGfSkUgJuLZR8cQ0mk9P2IyaINVwL92Umz%2Bs&X-Amz-Signature=8336958cb747de292e2063492b9b04d5b8ec86fe6c616f6da9b643c42d02e40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **What is Raycast?**
> > > 레이캐스트는 광선을 쏘는 것을 의미합니다. 여기서는
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/76bbd0ed-bfd3-4465-ac08-27cde75342f5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWG6F63%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCX9uCfmRPK%2FIqb3V8RZ0iAQ2Jy7DLE7hwt39kU77F5PAIgY5hzO8fWQUYpzDSnNFy3BcszD%2F79En9QKzl%2FFJXC9RIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFY81n%2BrlIIok4D6gCrcA%2FjWXNm4ZyA9kye9ZwuoV%2FmfKkYm%2F4mMV%2BpFspKkJ%2FwCZQxPpsPGRAS2tj5PaWMhZpyS11HGA5VwsmbM%2BgQVMMPCTGOBiZ4rke3VJpDAYJuWNe4N0bIVdgSl9GZjoJnptyF9fUvatfP1RaRlSqcAzpOezouYJac68ZVDQ6Ij%2FGK9Y5%2FX4kHvGOIToEvIG2QKL4JSKTHqW3bbB8YY27aVfRFOiLdTdsET04q6KTeyFJ33yOTvNpV%2BFZus8%2FLGURFt%2Bz%2FRCgqIW9kuEBBtwbi2vblJ9gESaZfiKkmzVI%2F%2BFk8CMhEx8ZASXAENoRkEkRxi6gs0MQ6%2B9%2F8tfwzZbxEuGMc%2BQ2iKwUhsvVM6n00GdlpzQLw85CUMtbZiaJdnmHDsqUAd68V7ohkF%2BSqPJnA5w1QQItuHovoGl3DrMm0R25O1%2ByaQU5dGfmFIYKhT5sk3vM68sjlMWA58GrS5b4N9I3uY4U6QvAdJO%2Bmx9mvYzbn6d9SmBDyi3sQ6wJX%2BNbSW8YCVoRrDkTqgvDXnsTm0H46vKWrybhkj7ahI5Caen5%2FUG%2BqUiRT0gWIHuNDRyxsY4lRvZkmQFUHmUdrzsKsI0F5C0QOtqEd4H%2FeWcDfyeaE5y%2FS%2Bb%2FIbRuF09rlZMJz1h8QGOqUBhKwS%2Bcf%2FNSczBlNBpy9Bc%2Bav1rioIG8fx9eMlDusiIj9TOb5cM7sU2Q0Up%2FcSllP%2F%2Bmxy3cIfjHA%2B8o97%2BlKMgbso5yMSVUr%2FNhfAdDIsZ%2F0Z4mK64OwpbYhHzk%2BslGjuHZSzg8ZuwW55%2FIG275nfzUq2%2FXiWDMaxvFVtEIshyAbkWKsPZHZVDxUA6WBo5nWTPR%2By4phmgcqJZPJJAHgC%2BKtgesz&X-Amz-Signature=ba12e3e5ac919d098b6419ece442e361f7245f7b837dec475cf8fb1c9c8c4677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > ```c#
> > //player.cs
> >
> > void Turn()
> >     {
> >         //#1 키보드에 의해 결정되는 시점
> >         transform.LookAt(transform.position + moveVec);
> >         //#2 마우스에 의해 결정되는 시점
> >         **Ray ray = followCamera.ScreenPointToRay(Input.mousePosition); //스크린에서 월드로 Ray를 쏘는 함수
> >         RaycastHit rayHit;
> >         if(Physics.Raycast(ray, out rayHit, 100))**
> >         {
> >
> >         }
> >     }
> > ```
> >
> >
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=dynN70kyD9A&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=8)

> 🔥 **리지드바디끼리 부딪혀서 플레이어가 자동으로 회전하는 현상 픽스**
> Transform이동이기때문에 Rigidbody를 제어할 수 없어서 따로 제작해줘야한다
>
> `Player.cs `에서 수정하도록 한다
>
> ```c#
> void FreezeRotation()
> {
>     //angularVelocity = 물리 회전 속도
>     //Update() 안에 넣어 매프레임 FreezeRotations()을 호출하여 물리회전속도를 0으로 초기화시켜 회전을 막는다
>     rigid.angularVelocity = Vector3.zero;
> }
>
> void FixedUpdate() 
> {
>     FreezeRotation();
> }
> ```
>
>
> 또한, 충돌 레이어 또한 설정해줘야한다 다른 리지드바디와 충돌했기 때문이기에 레이어를 다르게한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a61bdbe1-6992-48bb-b512-3f11e03cbd35/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEITHB4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCBu6DE9ze7FgNYCn%2FZaR4YKtl%2BCwe3BPNtJMY0ezS1iwIhANhXGNAFAlIHh44M%2FXQYIhjQDBeF79EP5s0Ey6J9PH%2FtKv8DCCoQABoMNjM3NDIzMTgzODA1IgywYe9AevBoenSWJJAq3APYTh9Yjw%2BHRPTSlkEvgy0JgqrhPFrNbYTpjebTf%2BGzKM0kngUJs6AhcvbZEyXkz30ZeCeNHF1rGNFmTYjcoT5qk726QV70MGZnpaev%2B8xoYlIEOE%2FYwHa8mz2dpmYoe8xuTF8lfmI748w9vbimi5TNOMpZ03VvOtQRrv3S3C%2FVeCcQ2mxl5ixogdd22RYXnZ00Xt8Qkds3k6X%2FBL3jwvQZFg8fSYZ4ick8Kv551Bmgi5bOwk60AyeNMTF9sSDVFG%2BBxEpN02I5KhdkjWLs%2BdajQbCa%2BUuP7UiUG%2BPorc90CPsQoMpA1E5w%2Faxu%2FPS6%2BK5Kz8RfpGE7b8A9%2Fc%2BqHKw4Rhe66D9Jh610%2FntKfUZbT5uDW2YaFAQ5y31ykeU1dO%2FYSggTzQXFZCLJ%2BD%2BIom3flqKw%2FuFsbzSeg%2FARhK2wS4H8mW47hr9huOdPHetSTQhkuJhT3aJhgja59BMR%2FNyjlHaWYCcPtL49bUnqbXvZ4SwKS%2BOKLUrQVcg6QUbXK5mn0wS4r%2B%2FnlAK2askdErO9PtLh6JbV9XIekPwkGzqIkpR4R5Q%2FDZrZmER42kMgLRXps%2B%2FWMARB%2FdrGCRZhIc7gpN4r0UgoR%2BUnU8m8ZNGQb61qJK07Fe%2F2075PIjCd9ofEBjqkAb38BMW5wV5uDTZUY2j78wXAFbSZz3gyBe5uI%2F9%2FvkBuAlpLEcK7I1iUqfO98JRM6n%2Bxeo1qkPtN8eJUouG5lQAedISIa%2BB7ypjtZhaRjG2%2FmLQl%2BYciMDs%2BjsbdX%2FF8w%2BhrMucfIeiGzX3Tt3MZG%2F0ONVvXuqO8qAzCkxdSN5MqHT6c5VOmqAUTdmi%2F86%2BmnPobY3cF8UYDaGUKGwE%2B3VGuH4Rd&X-Amz-Signature=582f24866f5bcd34f726f608f5ba0dbf744cb7d60a9e2ddb1a18030d1c3998fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b85ba6fd-17f8-420d-bdd1-d36a8a9f9782/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEITHB4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCBu6DE9ze7FgNYCn%2FZaR4YKtl%2BCwe3BPNtJMY0ezS1iwIhANhXGNAFAlIHh44M%2FXQYIhjQDBeF79EP5s0Ey6J9PH%2FtKv8DCCoQABoMNjM3NDIzMTgzODA1IgywYe9AevBoenSWJJAq3APYTh9Yjw%2BHRPTSlkEvgy0JgqrhPFrNbYTpjebTf%2BGzKM0kngUJs6AhcvbZEyXkz30ZeCeNHF1rGNFmTYjcoT5qk726QV70MGZnpaev%2B8xoYlIEOE%2FYwHa8mz2dpmYoe8xuTF8lfmI748w9vbimi5TNOMpZ03VvOtQRrv3S3C%2FVeCcQ2mxl5ixogdd22RYXnZ00Xt8Qkds3k6X%2FBL3jwvQZFg8fSYZ4ick8Kv551Bmgi5bOwk60AyeNMTF9sSDVFG%2BBxEpN02I5KhdkjWLs%2BdajQbCa%2BUuP7UiUG%2BPorc90CPsQoMpA1E5w%2Faxu%2FPS6%2BK5Kz8RfpGE7b8A9%2Fc%2BqHKw4Rhe66D9Jh610%2FntKfUZbT5uDW2YaFAQ5y31ykeU1dO%2FYSggTzQXFZCLJ%2BD%2BIom3flqKw%2FuFsbzSeg%2FARhK2wS4H8mW47hr9huOdPHetSTQhkuJhT3aJhgja59BMR%2FNyjlHaWYCcPtL49bUnqbXvZ4SwKS%2BOKLUrQVcg6QUbXK5mn0wS4r%2B%2FnlAK2askdErO9PtLh6JbV9XIekPwkGzqIkpR4R5Q%2FDZrZmER42kMgLRXps%2B%2FWMARB%2FdrGCRZhIc7gpN4r0UgoR%2BUnU8m8ZNGQb61qJK07Fe%2F2075PIjCd9ofEBjqkAb38BMW5wV5uDTZUY2j78wXAFbSZz3gyBe5uI%2F9%2FvkBuAlpLEcK7I1iUqfO98JRM6n%2Bxeo1qkPtN8eJUouG5lQAedISIa%2BB7ypjtZhaRjG2%2FmLQl%2BYciMDs%2BjsbdX%2FF8w%2BhrMucfIeiGzX3Tt3MZG%2F0ONVvXuqO8qAzCkxdSN5MqHT6c5VOmqAUTdmi%2F86%2BmnPobY3cF8UYDaGUKGwE%2B3VGuH4Rd&X-Amz-Signature=139df96810de54b77c81539362084f6946aaed6b3b3901ccc2fd09d2bed19e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> Edit - ProjectSettings - Physics - Layer Collision Matrix
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d78eda70-8723-428e-ac74-3048fc8becc1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEITHB4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCBu6DE9ze7FgNYCn%2FZaR4YKtl%2BCwe3BPNtJMY0ezS1iwIhANhXGNAFAlIHh44M%2FXQYIhjQDBeF79EP5s0Ey6J9PH%2FtKv8DCCoQABoMNjM3NDIzMTgzODA1IgywYe9AevBoenSWJJAq3APYTh9Yjw%2BHRPTSlkEvgy0JgqrhPFrNbYTpjebTf%2BGzKM0kngUJs6AhcvbZEyXkz30ZeCeNHF1rGNFmTYjcoT5qk726QV70MGZnpaev%2B8xoYlIEOE%2FYwHa8mz2dpmYoe8xuTF8lfmI748w9vbimi5TNOMpZ03VvOtQRrv3S3C%2FVeCcQ2mxl5ixogdd22RYXnZ00Xt8Qkds3k6X%2FBL3jwvQZFg8fSYZ4ick8Kv551Bmgi5bOwk60AyeNMTF9sSDVFG%2BBxEpN02I5KhdkjWLs%2BdajQbCa%2BUuP7UiUG%2BPorc90CPsQoMpA1E5w%2Faxu%2FPS6%2BK5Kz8RfpGE7b8A9%2Fc%2BqHKw4Rhe66D9Jh610%2FntKfUZbT5uDW2YaFAQ5y31ykeU1dO%2FYSggTzQXFZCLJ%2BD%2BIom3flqKw%2FuFsbzSeg%2FARhK2wS4H8mW47hr9huOdPHetSTQhkuJhT3aJhgja59BMR%2FNyjlHaWYCcPtL49bUnqbXvZ4SwKS%2BOKLUrQVcg6QUbXK5mn0wS4r%2B%2FnlAK2askdErO9PtLh6JbV9XIekPwkGzqIkpR4R5Q%2FDZrZmER42kMgLRXps%2B%2FWMARB%2FdrGCRZhIc7gpN4r0UgoR%2BUnU8m8ZNGQb61qJK07Fe%2F2075PIjCd9ofEBjqkAb38BMW5wV5uDTZUY2j78wXAFbSZz3gyBe5uI%2F9%2FvkBuAlpLEcK7I1iUqfO98JRM6n%2Bxeo1qkPtN8eJUouG5lQAedISIa%2BB7ypjtZhaRjG2%2FmLQl%2BYciMDs%2BjsbdX%2FF8w%2BhrMucfIeiGzX3Tt3MZG%2F0ONVvXuqO8qAzCkxdSN5MqHT6c5VOmqAUTdmi%2F86%2BmnPobY3cF8UYDaGUKGwE%2B3VGuH4Rd&X-Amz-Signature=02b4f6e0efd11530bd9fb5cd77457e776482add9e8b89388ff221c98f99448f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **벽관통 해결 또한 Ray를 활용한다**
> ```javascript
> void StopToWal()
>     {
> 				//DrawRay는 씬 내에서 Ray를 시각적으로 보여주는 함수이다
>         **Debug.DrawRay(transform.position, transform.forward * 5/*Ray의 길이*/,Color.green);
>     }**
>
>     void FixedUpdate() 
>     {
>         FreezeRotation();
>         **StopToWal();**
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dbc51270-02e8-41db-be26-ec783d2e156a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSSVOIV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHo09uzGjVJWO7j5y3f%2BD1PJAzxwWGyMuJAgOrMN69ySAiAtpH0sqP0YD3V%2BApQlnnzaF9SVFSR3eQ1%2Fjv3HYJYr7Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMao7LPv0dz6oLNliWKtwD0uDBt5j5TaxfagDx%2FOqNT3oTyU8zCZ5%2BVRQ4mRojv33WgRmMd5YzvxrMRjnycGiJnc5a9YPqBrAeM1sw2LC%2B%2FKQLOQmH0wsl7KZhjg9aPrcnEPZrjunx3uKRGKVIZBfZmLdn%2B9eDuVcc0nc6GTlPGbqPCj25MKSldGmWBXJuYJ1K835xQrDBzOnMbvtkgNBUiLv7grCfcGBtx39TQ8ZttlzIDPKj3bR%2BSyfN4VUIkt0EboDdcTHOjVz%2FnNVSofK%2FVvrNwjcSfKvtFOKyT5Tjntq8gNqlYY68KNoIVoWOjg0YA1LgwMxUn0XRezA1bgQNG9Cx13plVVzMnkGjW6gpXExNucgyHcW8CrkM%2BfaFGOXLqglmBCKXH%2BZe71WOXHPTrxXXkiZ0K4pWYFwAnQXean83POQw9EHWONnw%2Bn7wBsxNTR%2FI8NAx66C%2FnaXeoUp39xaukAHBolgXYyM5AxhT8EVreFZkdHMwQoX5vkva1o0AevMHQDHBUYZJsMDhuA9JJsPj9SVwDIurYlQCRvVgPGboRM%2FaPh5Gw2PljhVuij%2F2AkKrRl1jIdibsPiOgf%2BlSdpSPav5T2N6Tf1ie1K9fky7rUhRzRq7qkO3v6pJkZQ4pR%2B2MQyUsuTouhEw%2F%2FSHxAY6pgEk2f3%2F2tcPmU7sT%2FzBguCrFl09hfjJjNJDe2KI%2FzZhiWAUGhK2%2FoPwWh9QP%2Ba5rmjyZ10kjNheD2E%2Bt1JWTUVaHS89hg%2BKBGUOrxcXNSA02Kq8NebrcXLoOBFE7%2Bqe6Gy%2BlXQ7QugURnhnMAnRG3LSi1ORNmXgZEUvfn%2BMyABL6XCMBPHeeW69ABi1rwOYw3%2BZjBQadSkBTKbqD7b1h7z%2BqKq7G0JO&X-Amz-Signature=401dc6734530228bd3e1175e01d949bac80ffb10299380579727f9048f4ebc5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> bool isBorder; //벽과 닿았나 안닿았나?
>
>
> ```
>
>


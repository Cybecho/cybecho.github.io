---
title: "로그라이크 게임 제작 01"
date: 2023-03-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "SPUM 무료버전 설치 및 리소스 탐색에 대한 안내. 무료버전은 구버전이며, 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치. Voxel 환경 자산 링크 제공."
notion_id: "4afad8d2-2bef-437e-a754-3dc69c22792b"
notion_url: "https://www.notion.so/01-4afad8d22bef437ea7543dc69c22792b"
---

# 로그라이크 게임 제작 01

> **Summary**
> SPUM 무료버전 설치 및 리소스 탐색에 대한 안내. 무료버전은 구버전이며, 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치. Voxel 환경 자산 링크 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fe12b808-c14f-4f40-a99a-8a1a3bcb608e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PP5AAJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDpTIO0cY2tw3ADEzJjlqxuuy0XwoD5VO1Ci5GA%2Bk8I9gIhAOFZyzogePv%2Br9MIj6Rj12EN3zRFNS5sdc1Nmyt%2BdDxiKv8DCCoQABoMNjM3NDIzMTgzODA1IgwrnDTlK4mNV976ZqYq3ANzWdTRCrz9HEIGxU0IHmezWCLUmV35JqL1URxJGpc7%2BpUiqcPjjVO4nQjeabqgk9UVtwKFQAHo0GTWUt%2BukRWlqCBjLTcSo3KN%2BOjaWY9%2B6eQk7qoi3j0HySkZosGJhfTqlfkH5Njqq128zvTENynN5brAhP8IGNY%2FfGkj2khhkKEmeatYr9NTuqt4bBPShCwNo3lsvB5bNJ9Ni4Vqej%2BbOH%2FGHVietLe3FGqp6nmpxZaCMxNCjYsmfg8PNT1lCIBCQRb5IgZnsOptF1mpxQsrbbRRT2rq%2FhifyLV%2BW8v4Bpu5IS%2BFlJbKhDT3ACjjYlGsSBE1rfEtGHslW6MacTqPq2yEYQeyLmG9NlFbSGvutyxrOQqR9h5BcGSDFLJxN57hAOJK01iS9FCju7w7fvLAm0ZhLlt1oKtGFHod252Yz3nRhGqG44y2jcAxraepxDmhB1oS9N9uG7l153oX0DUDqHaLx8fYXiUnQAxkbCzcx50oxVEMU9nEv13ERIY6I065kQInh2miEdwwp0swdEldE7K87lVaTtI8obHaNg%2FghNqdMU2bT1va8ZQT8DTWCMd6WBMzk%2Bs8qhG%2FMpGa2ROurC%2BgStjbMg%2BLRGmRlppexlJfCo8%2Bv1PO6f605TD%2F9IfEBjqkAZgqryZz8lVwpJswrNVxaeb0Sl6FWCVdASulrVZJjpHLoKYurdZbHtWYd4smEQlGPO88dhsorOTPsdFn090KNtB4U%2FS2QARZfiGLnmUxIXnJIWhyvMnS%2FxOMgHRN%2Fq6rH20nFLEzepvO6CFcj7Y9CK6vsrye8Vfb47T1LPTSxE1BJEMeIfyl7biXJ8YAcnSff9%2FBWK7%2BW2rqtd0KYpBM%2BhGK2Hax&X-Amz-Signature=51017906ea7171e9aad7e6ed8b4704b62333ff89a16833e1be34839b2427b788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=lnvNWuovnRs)

위 영상 따라하기 전에 아래 링크에서 SPUM 설치

🔗 [https://www.soonsoon.co/docs/spum-ko/free-version/](https://www.soonsoon.co/docs/spum-ko/free-version/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=TvxdkMMuC1A&t=140s)

무료버전은 구버전이다 해당 영상을 참고하자

> 🔥 **저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units 에 존재함**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0ebc82e4-4e35-448a-bc17-9fbc935ca64f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PP5AAJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDpTIO0cY2tw3ADEzJjlqxuuy0XwoD5VO1Ci5GA%2Bk8I9gIhAOFZyzogePv%2Br9MIj6Rj12EN3zRFNS5sdc1Nmyt%2BdDxiKv8DCCoQABoMNjM3NDIzMTgzODA1IgwrnDTlK4mNV976ZqYq3ANzWdTRCrz9HEIGxU0IHmezWCLUmV35JqL1URxJGpc7%2BpUiqcPjjVO4nQjeabqgk9UVtwKFQAHo0GTWUt%2BukRWlqCBjLTcSo3KN%2BOjaWY9%2B6eQk7qoi3j0HySkZosGJhfTqlfkH5Njqq128zvTENynN5brAhP8IGNY%2FfGkj2khhkKEmeatYr9NTuqt4bBPShCwNo3lsvB5bNJ9Ni4Vqej%2BbOH%2FGHVietLe3FGqp6nmpxZaCMxNCjYsmfg8PNT1lCIBCQRb5IgZnsOptF1mpxQsrbbRRT2rq%2FhifyLV%2BW8v4Bpu5IS%2BFlJbKhDT3ACjjYlGsSBE1rfEtGHslW6MacTqPq2yEYQeyLmG9NlFbSGvutyxrOQqR9h5BcGSDFLJxN57hAOJK01iS9FCju7w7fvLAm0ZhLlt1oKtGFHod252Yz3nRhGqG44y2jcAxraepxDmhB1oS9N9uG7l153oX0DUDqHaLx8fYXiUnQAxkbCzcx50oxVEMU9nEv13ERIY6I065kQInh2miEdwwp0swdEldE7K87lVaTtI8obHaNg%2FghNqdMU2bT1va8ZQT8DTWCMd6WBMzk%2Bs8qhG%2FMpGa2ROurC%2BgStjbMg%2BLRGmRlppexlJfCo8%2Bv1PO6f605TD%2F9IfEBjqkAZgqryZz8lVwpJswrNVxaeb0Sl6FWCVdASulrVZJjpHLoKYurdZbHtWYd4smEQlGPO88dhsorOTPsdFn090KNtB4U%2FS2QARZfiGLnmUxIXnJIWhyvMnS%2FxOMgHRN%2Fq6rH20nFLEzepvO6CFcj7Y9CK6vsrye8Vfb47T1LPTSxE1BJEMeIfyl7biXJ8YAcnSff9%2FBWK7%2BW2rqtd0KYpBM%2BhGK2Hax&X-Amz-Signature=1aeb1b618676c373a7a63b2496b6e43f9fc123824e6d3d21cfccbff1d44ce268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 리소스 탐색

🔗 [https://maxparata.itch.io/voxel-desert-town](https://maxparata.itch.io/voxel-desert-town)


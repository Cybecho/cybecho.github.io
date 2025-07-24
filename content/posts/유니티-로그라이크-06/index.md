---
title: "유니티 로그라이크 06"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "몬스터가 플레이어를 따라오고 바라보게 만들기 위한 C# 코드 구현 방법과 화면을 벗어난 몬스터를 텔레포트시키는 방법을 설명합니다. 기본 컴포넌트 설정 및 물리적 추적을 위한 FixedUpdate 사용법도 포함되어 있습니다."
notion_id: "af7c1c92-c779-4ec0-8935-e4b379cfa259"
notion_url: "https://www.notion.so/06-af7c1c92c7794ec08935e4b379cfa259"
---

# 유니티 로그라이크 06

> **Summary**
> 몬스터가 플레이어를 따라오고 바라보게 만들기 위한 C# 코드 구현 방법과 화면을 벗어난 몬스터를 텔레포트시키는 방법을 설명합니다. 기본 컴포넌트 설정 및 물리적 추적을 위한 FixedUpdate 사용법도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f903ec0e-6163-487e-8867-4163a3084b94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPGJQCR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCW4LLZE%2Fuvc5vckblfZbglRW4XHIAvzdJXbTfu07EKxQIgRj%2B8610AGIvpbnLSlLd0FfbgMa%2F%2Fwx4mH52STCUGznUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNwmDzB8vH0IzGzvlyrcAyvPmFYDNBsPoN6T%2BDP4M3Pxj96o1WmHRxG10Fr%2BZjpdqERJBKU%2BnibeEOVHlZ9P6DbCcXGGKsdlBeSDGnLDPUtaMxIUWW2sB%2BPjxrh4a%2BwA1SoG3Q8E1Nly5PP54LzxOuxUHvUdrZFNGvv4aK5aSSWzfRbp9m2KQXNU3p8iiW%2BAKheo3z69XNAaKcT68%2B1xC3jxz8fbC7%2Bimd%2BAyW15OZuCv7bSdGhF5wa2DThudj9fp6UtLtvA4hMIJyOOmef4ZU00%2FXfce6%2BAb77UMK6uVaTtvtiSMg2M3vs5oW0iUfkZ8YZXaykt9jGafQGOSuErrIWCoTTwokF9xely3z3VZYG9%2F%2Bl1n2in6BexYuabQJ5nnM5yVDvw8RUn%2Bp4ERGFC%2F%2FFnihBtYuCDoAvaywOwZh2s4mMCiqlaCM5eEj2BFmtyQg2lMikuuXZ6viwdggIkvJ%2B5d7lN5Gr1h4IvD%2FQi510HDyEEiYMj9vW8W1e064NMeUPFUxlhm2lllYq9BLn4VyYQ98h11nnIYa9Z77k1PGm5qcKVvBzxaxCYF7JxbJpncDlPt0gyrNu8aFHAW8xkcFtM2BOwgvptk7C0jtNiruM54oADUFlVurePhRnIHKpu%2BZEsaoXOp0ucHRNqMLvPh8QGOqUByvHyTO1PUYt2%2FbpgEMNh9hoXflQ4FSq1fYRDtQrdtadqjyTCpE%2BvyLY8ljH9tJWw%2BSdtWN%2BIaasvSEBfaP2qqG72Tz9bgB5%2BnaCu%2Becy93IhVQ0YqGu0wEqUxgCFfsODrxf%2FM60E%2FUTfIv4Fz28yboyiXZ2R%2FSWR9qjV6Jg9AxMQw%2FPUVxDrDHOomDZ072Ko%2FhrvNw4yXFEvSPqgkP%2Bk0ZclORIM&X-Amz-Signature=6b23aafef688d96fb2b03fa097e2d49119747ef2f14ab13c60c273e8c6adcd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=0aUCu1BcZxs&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=7)

> 🔥 **적 스프라이트를 가져오고 리지드바디를 추가한 후에 회전하지 않도록 Freeze Rotation값을 잠가준다**

> 🔥 **몬스터가 날 따라오게 만들어보자!**

> 🔥 **몬스터가 날 바라보게 만들어보자**

> 🔥 **몬스터가 화면을 벗어났을때  텔레포트 시키게 만들어보자**


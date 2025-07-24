---
title: "윈도우 win + 특정 키 비활성화 하기"
date: 2023-11-02T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "Windows 키 조합으로 실행되는 단축키를 비활성화하는 방법에 대해 설명하며, 레지스트리 편집기를 사용하여 특정 단축키를 제거하는 과정을 안내한다. 사용자는 Windows + R을 눌러 regedit을 실행하고, 특정 경로에 문자열 값을 추가하여 원하는 단축키를 비활성화할 수 있다. 재부팅 후 설정이 적용된다."
notion_id: "8cc34530-c5bc-4147-911d-0ce6b54b2822"
notion_url: "https://www.notion.so/win-8cc34530c5bc4147911d0ce6b54b2822"
---

# 윈도우 win + 특정 키 비활성화 하기

> **Summary**
> Windows 키 조합으로 실행되는 단축키를 비활성화하는 방법에 대해 설명하며, 레지스트리 편집기를 사용하여 특정 단축키를 제거하는 과정을 안내한다. 사용자는 Windows + R을 눌러 regedit을 실행하고, 특정 경로에 문자열 값을 추가하여 원하는 단축키를 비활성화할 수 있다. 재부팅 후 설정이 적용된다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5YXQCV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDsmkU%2BIc%2BnwagvIeb%2BFyhI0qKZOGCi1LDrtrfFaYoWsAIhAMifebQET5ZzucMfzyfzHXBXjB3nqawGC%2BY%2FgjoMv%2Bn7Kv8DCCkQABoMNjM3NDIzMTgzODA1IgxrPoOqpz6aXrXtNw0q3APWLnH3qxYtaWYis6IXSLsSgyAV5kxz7JbbzI6Rbreio8pOODPGTZH6xF8%2B9H2UWs2pllxYpQCPk1LE7gEy0EHUzj9hw%2F6Fhgvim1l7MOx7%2Bgr6JrdoYlbecPDUSkbN0T0SUzSkF1PEeBbnseblWljThtynfywOgWBfnAXTQvLWqF9EkJKm2Ak9OAR5TAB3rjZpWR4vgVg2O11hUFB3gFNE2Cvns%2FjlfYgc24X1t24BL1f2H7A5maWpXTEG4yqqHuFxCac7ffptLsOAd4z7x6f%2BME%2B%2F6AApquR72MXUwk%2BRDRDiNbcHQx52eCmhJ5vnxqWZ2Vx%2BhoB3JyqCSsMCgSOnzi19m3Wl1JgQe%2Bh1QSqEKPLycLF6U%2B7M%2BHF7I2N%2B0XHE8r%2B2zUi3MHiI%2BLyRI063SSLjf8FoXTZSvVxb13islQP8I0ADUgzxdMskIjVhL32JD1jBbgrKJ9wTPp%2F4ARTSTExl1NNKdF3Wi%2BQP0p%2BRDIBlBveab%2F5wsOuGoPTH3TZNgiXqaDIw7GRbRHp2NSfKwhzEj9douCi1x6gos9%2FPQB1UO3iyCrRus49nlLSCXlmk30W9UyxRaV0FmWUyfp%2FqB3Rc%2Fc0XUu%2FINaHCmDCRoP2VaN8sMf9FwKOoejC6z4fEBjqkAfwMzmCioiv5Upc4UOEm0X2E11M9GEWg5awNwKtCMbX8esw7VRgFf%2F%2BalF96emRKj7Hbqp%2ByRavZHfLwlY3uMj7PlczNnAJBFciLRChfDdD9De0L8efSqzqFMh8Oc4JMrDrLfGuOPaYR5v%2B9DQxhtRYiwtFUn7zgphJbXGcstI7QSkkVv1%2Fe4wzLYVYcgvnNQiuHJS%2FhcySdzpNO4zZ3RuQSAnjW&X-Amz-Signature=dcb378f00c9dcc3ee304b33d99fe5ae1ad8fd54158851af76a8b91565f2a0b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://m.cafe.daum.net/sigmarion3/Nnp/60?svc=cafeapi](https://m.cafe.daum.net/sigmarion3/Nnp/60?svc=cafeapi)

🔗 [https://insertintoblog.tistory.com/15](https://insertintoblog.tistory.com/15)

**Windows 키 조합으로 실행되는 단축키 제거하기**by 기억고양이 2023. 1. 18.

## *"예민의, 예민에 의한, 예민한 자를 위한 글"*

---

사실 다음 글을 쓴 이유는 이 글을 쓰려다가 생각이 나서 썼었다.

[https://insertintoblog.tistory.com/14](https://insertintoblog.tistory.com/14)

[](https://insertintoblog.tistory.com/14)[
](https://insertintoblog.tistory.com/14)[Windows 키 + 단축키 정리](https://insertintoblog.tistory.com/14)[
](https://insertintoblog.tistory.com/14)[* 해당 화면은 PowerToys 를 설치하면 볼 수 있다. - PowerToys는 다음에 글 쓰는걸로.. * 자주 쓸만한것들은 빨간색으로 바꿨다. * 대부분 직접 눌러보며 본인에게 유용한 기능을 찾는것을 추천드린다.](https://insertintoblog.tistory.com/14)[
](https://insertintoblog.tistory.com/14)[insertintoblog.tistory.com](https://insertintoblog.tistory.com/14)

....

Windows + V 키의 경우 매우 유용한 기능이다. (윈도우 1809 이후 버전부터 작동한다)

하지만 나는 다른 클립보드 프로그램을 쓰고 싶고, 그 프로그램 단축키도 Win + V로 하고 싶었다.

문제는 Win + V가 <u>윈도우 자체 기능</u>이라 키를 죽일 방법이 없었다는 것이다.

---

역시나 검색을 해보니 답은 있었다.

[https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)

[](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)[
](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)[Disable taskbar hotkey?](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)[
](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)[On Windows 8 pressing "Windows + T" in any program moves keyboard focus to the taskbar. I want to assign a different function to this hotkey, but the default is overriding my custom one. How can I](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)[
](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)[superuser.com](https://superuser.com/questions/630112/disable-taskbar-hotkey/725556#725556)

레지스트리를 추가해 특정 단축키만 제거할 수 있었다.

(다른 블로그들을 찾아보니 Windows 키 조합을 모조리 제거하는 포스팅이 대부분이었다 - 물론 그것들도 아주 유용한 정보들이었다.)

---

1. Windows + R 을 눌러 regedit을 입력해 레지스트리 편집기를 킨다.

2. 상단 주소창에 다음을 입력한다.

```plain text
컴퓨터\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced
```

3. 빈 공간에 우클릭 > 새로 만들기 > 문자열 값 > 이름을 DisabledHotkeys로 바꾸고, 값 데이터에 윈도우키 조합과 제거하고 싶은 키를 입력한다. 나는 클립보드 히스토리가 필요없어서 V를 넣었다.

4. 이렇게 되면 완료가 된 것이다.

![Image](https://blog.kakaocdn.net/dn/cuHcG1/btrWw64n3zf/cahwtX19KIBqphSG6RvZS0/img.png)

DisabledHotkeys 문자열을 추가해 데이터만 설정해주면 된다.

5. 다만 여전히 해당 단축키가 작동한다면 재부팅을 해주면 된다.

6. 이제 타 프로그램에서 키를 설정해 사용하면 끝.


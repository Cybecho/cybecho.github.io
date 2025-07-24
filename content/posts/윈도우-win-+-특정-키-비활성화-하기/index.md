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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBUZOPU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDk7td%2Fx30abq4j1WmlKOd0ZOnYUYEvVwBl56LHn6gH%2FAiBfumEGJ9XsLOIpQbDlmGQ9wQE5z1PiAlt8c6MirwgCjyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMac3sT1LsakE936eFKtwDm1AmOFTWZsq1VpIr%2BumoFpNl9Fot0x2ye9IXVRP6QmMVjSGmmOtMsOKAThnPN0WBxiS1yGgBPHAFBbp%2Bk%2B1dTDxZjO6IYx2cyd26RFnZ2sXJbv30vo8amJX0L9CukPKfXY0zaWf2h6b00Z8XR60MOYvd4kbb7W3LEiP8i0TmMrha%2BMQ6YrwZf1Ydc9gCvk98fWbirqFpxWMUel7GxosFc1cstzBUQc%2BMvaIxk6HxEIm%2BUO7s%2BaLYOtyaO3xpTJrcnbKf3UUqTZncFozLYLRBcdMdaCmMMVKP1nupeyivLXMYzXf%2FB35FVHxu7UTu5SJaLPUGTNFyNZ8YoU%2BbfP1COV3scHdgIMvFbNIEIOL4pejbUeER8LhS8cTBtuUV2%2FlMdKcb3mvBiS2Ay5bYGNwrw0uMNKZoGXWIe8hzAsxeDQWSskcAHKvYtLt3up803X3ttSH%2FvykwdJZ%2F%2FMz%2Fta4p%2B7SK04K%2BorQx%2F729RtbOZbo9drPd%2Bcru2alxoDZDfgdOhp%2FZYCz7E3kZtHesDlchXpHlUD6a%2BvQUXgG39gupnDCZbzQsZuu1x%2FnNu48teJDaBm2fF7S9Ef1%2BHto1OUYvTP42UquLWomL4%2Bx3iczpz7vp4QARLFNPsoTf3QUwtPaHxAY6pgEyzi1iK1F%2BGZx1MAWKzMNDTjdyM00USgH0E1TlhlaH1XhkHwlJkcqogonQlxSGPa24SzdGec9IjPebV86ypC8RIbGaHciIp0F5xxSQL9moHfF0Q%2FFGF068X%2BU9ZtNDUKEWyZKtQhIUaQTU0tXNMC44CdZdkpTlOamSR5UI7fa9LQYX%2FQfhfwWjt%2FXD5iOVhmgy38mhh5PqOoVNivkH63kVyMNb6ibC&X-Amz-Signature=8380065f8b86bdb0124104e30fced6a84e0b4efb699a088388f0920ff0cf068e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


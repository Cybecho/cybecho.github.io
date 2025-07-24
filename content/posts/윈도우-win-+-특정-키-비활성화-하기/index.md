---
title: "윈도우 win + 특정 키 비활성화 하기"
date: 2023-11-02T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "Windows 키 조합으로 실행되는 단축키를 비활성화하는 방법은 레지스트리 편집기를 통해 특정 키를 제거하는 것이다. 사용자는 regedit을 열고, DisabledHotkeys 문자열 값을 추가하여 원하는 단축키를 입력하면 된다. 이후 재부팅하면 설정이 적용된다."
notion_id: "8cc34530-c5bc-4147-911d-0ce6b54b2822"
notion_url: "https://www.notion.so/win-8cc34530c5bc4147911d0ce6b54b2822"
---

# 윈도우 win + 특정 키 비활성화 하기

> **Summary**
> Windows 키 조합으로 실행되는 단축키를 비활성화하는 방법은 레지스트리 편집기를 통해 특정 키를 제거하는 것이다. 사용자는 regedit을 열고, DisabledHotkeys 문자열 값을 추가하여 원하는 단축키를 입력하면 된다. 이후 재부팅하면 설정이 적용된다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQE3DDD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFDpuHa10sQ9vyRr8KQ7cNXlZSkOB8GvfULfgRiP7GDmAiBaus%2FTkTa8w9M%2BR7MXLiBehejLgPg8iziq%2FptgxixVpyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEi9kLNMzFB5m%2FgNHKtwD81vExUp6Sl%2FOsYqitXE9Nll086di67eiYWhK%2B2Q7N8HGlpy1GwE1wyxi0oEtFbF%2Fnjdv5%2FYBj2cLT1GK%2B9VcL9gxBYqiEYdBRESjfcIIzb2iAJTv0y0gq6i4k%2Fvd0WgRhs0xJ3TPT8XVwJ9X%2B3VjV4v0GWLIU2GDAAy3yjSm9tIRY7pkQtrsPu9Pr1gRRQ1Nyl8WO5FlniUOarPocvGFb%2BDMhbUY%2BJeDe412L76lV6Ye3STPhkZHuauv9rmpsUgpRdyzDPY7vyaXRUwTQJdCPTnEHw9zvkXaaEi2FP7ZIh2sqPSlDziDeOiDL6pB5HZgFmlhgt8R3O%2FsypZ%2FZf4Duak6mB77ZloCGkXsOpQjKnl7c1tWlR%2FtbIt%2Bx2PZo8RWJASPOxYC5ldZq1N36eM5sAZt%2Fg%2FHNW0KtGk1Rm3oeVTegSV5Tt2LNIRC%2FHVkGdUhlKCPJpr0oFoJ8JTKpg8QRaywOfCn%2F8VBe6xYm1pBZnMhEJT0QIhHYKAdOxuxdYjybRsI5570%2BLAwrdkProKBLLxWcxAIgOXAzsJPviAxbBBd18b0AU09LX0dlr77yGtJP4gxQEiAaZDmfeLtzCThd9qks4n1aI%2Bf3OqczElDDjVB8ivqcUQtD3CkKKMwypuIxAY6pgHQ9dENlxyCeVSbE6hPhobOYoI%2BoB7D1LhvlxFpfZoPWWgktAK59AO8HHcFLbgJ1FTruUlQJumjr6gNj1XKjjsvWhNENSMWXO0GxzLtZAbEjDwYhf3CMBuvkDe6cGJz5fdu9E344F%2BCg1xHLx68N3IeCT6pB9ZgB56TpbUJW83yYOn5kmO2CN17tY4L1Mh8ci7%2BzYY4u7DXItVditNsyarUgFQm3MCt&X-Amz-Signature=14a72d112b300dc2908d40220016d2a9f1a82a37056ccc45fbee333578736915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


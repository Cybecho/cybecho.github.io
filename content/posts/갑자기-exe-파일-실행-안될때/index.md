---
title: "갑자기 exe 파일 실행 안될때"
date: 2024-04-29T01:42:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 "
notion_id: "9f0333b7-c253-4bb9-b40a-3dbd8ee615d5"
notion_url: "https://www.notion.so/exe-9f0333b7c2534bb9b40a3dbd8ee615d5"
---

# 갑자기 exe 파일 실행 안될때

> **Summary**
> 비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/523cb8fd-70e6-4120-aba6-a831a254dd5f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MZHPQO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICg%2B%2FdI%2BMiN9N6kLmvvO%2BrCXIsMebgRulyFvI8RNKDYeAiBxK0qOtjVjc7fN8Xn0%2Fm73%2FdWeb1DIrg7vNLtuxOAcDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMphzvIH4Fu2Ua4l6eKtwDPnIZps%2BxRMFnNtH9bYAsKHCT7SbnW4CXLj3ZM8uT%2Fa3xID8gCoAsqFKjKiqdgvuyCpVDRHipZZlqDtCyqxzZmGrhLUmLJ7r4B9V6dHpNspUM%2FyL5iaxsddq7jXV1Zh05iwllXDRk3tp5F1FB7IwKuU3lh%2FiOBXQNyyeQxuKu6ipVthnIAwaxjqlkUb9ZHQdWjNhDeMAvfxUFHYYskMG%2Fo4WZs7tpPLONokL52uv%2FxkTLMMv%2BdZmDfVOQnaMJdLRXjHrF%2FTNIKXRlfBSB0U%2F9eGu126MqpWKafU6aucAG34pDfmCgIzqQQ29%2BLEWx2ysOLGp5r8hnaSxfzxGH%2F5S%2FKBzjdoGEa2zvKOZ%2BKOYnvggEzbAnBNPTN9PiGM%2BWuJ6HOKO5MaZ%2BTOz%2B9Jvu1cuyXmq2CX7aZr3NxHUqAYhkpItBWT5HKFJBDmuu5ZshHINMJujbDxbk7TYSXEmbVPB4BF9uRF3%2BxJWcN61IdvtkrTBrDb7hcsfWzBio00tTpfLEY75Tt1x9Jtnlg0Qr2v0H4tvkQYSHTYMSpWr%2BQdAabJ1YqTHyPV83NAP6duI0M8VVgms7CVs%2B7bp750GNrErVaEgywcOnFdEWlEJKW31Ghj%2FYdh618ODeF%2F0brdIwrpuIxAY6pgH7HZ3yEkh%2FvtFhn6VPPXYdKBjj%2B6Lk137oTYuCkucQDd7IcZ2CyD2tCepUWhVq4aq3dvTvpiIa44dUz7NFDZ1Cs6GXPD2N%2B5K8m%2FhR988LlrUfHbDDmHCVWRmZLzmmO3CTYe%2BuY7Qv2DdsxR2zXmngbVKUWgWRhvAQCvwvDc%2Frna5NlWzPVymTLnZ1I7tnie00haHpkZd%2BszRkP%2F5uGkhJAIw3euDl&X-Amz-Signature=674c6375c8c36cd203085c9a5a8694e8858e8cde5ef9cf23cb4203a1f01e6d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

몬헌 모드질을 좀 하다가… 시스템파일을 건드린것같다

갑자기 비주얼 스튜디오로 빌드한 프로그램이 실행되질 않어~


파워쉘에서 다음 명령어 실행

```latex
sfc /scannow
```

그리고 재부팅하면 해결됨


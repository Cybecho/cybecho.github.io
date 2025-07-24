---
title: "반드시 알아야 할 쿠버네티스 디자인 패턴 10가지"
date: 2023-09-22T00:00:00.000Z
draft: false
tags: ["쿠버네티스", "Docker"]
series: ["Infra & Network"]
description: "쿠버네티스 디자인 패턴 10가지를 소개하며, Docker와 관련된 소켓 서버 운영의 어려움에 대한 논의가 포함되어 있습니다."
notion_id: "e8672803-1caf-4191-8415-c6298cca8d3a"
notion_url: "https://www.notion.so/10-e86728031caf41918415c6298cca8d3a"
---

# 반드시 알아야 할 쿠버네티스 디자인 패턴 10가지

> **Summary**
> 쿠버네티스 디자인 패턴 10가지를 소개하며, Docker와 관련된 소켓 서버 운영의 어려움에 대한 논의가 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9554194d-bfd2-49f7-8ca2-f2218188433e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZ6LVU5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCLKb%2Fdkx4SPuVd1wZ%2B3smkNemvJIg4Jmk88mEgRX2nEQIhAIwnIChJ%2BmAImWhcMG922hWgNaSfeq4vaa1dX5Wi%2B7HTKv8DCCkQABoMNjM3NDIzMTgzODA1IgyUDubrEuRaB4tfmIEq3ANutHmOl%2BNAin9xboxwo7zoWZZLD6xGQYEOLb%2BC7%2BXc0dQY2%2BKuEmTPZw3i2QXkq8CkU19cknOqerY9MSVxPmkET7wOflWD4w5XTlyVFbAccanaoqHvSnlVRK27nNC%2BEKhl%2BXeEbJiBaUso%2Bg6UQNScb01VM%2FYqBFB8L%2B%2BiS97W9tR8Rbmf0EKHNKuLD8j5gvDPR7kh8GAB87yWgLigmYcn8aJtx1%2BWzbJIGheElpTn%2FONFLxu3LvntDOxXNIJqczJqvVvRxDs%2BbI06X4wBC4KlPNWgC3Y8JP8S%2F8olXbrPU4ikRvoZY3ElvFi51DiZp%2B17Xsjcze96K9xUpXpz5CVfPs1Zj%2B%2Fej8xem3AdPTM6ZMpSvwmd23Ldpd5mexi9bpSpe7X%2BSzsdG2aLxncWR%2BPDFRCmXHiPeGOKxaEGymQvUNIiA1qQ3CWuHU%2FYyUGKY2WjkhdBjAK3gqLqKLEyXDLqW7ic9%2FBiBfehLZrQ%2BUiMWhO3DtMJcNEHWaE5e7KAWE84g6Fl2YF4TnjGLtNfxdUrqoLLNa7yAaGWfeEvlxJiSdofrS0y2g2ZjGXRL0jEYXKsmr3xTufbc1t%2FwjyR7IwDAP9Q412XcVoAQLBXLv7OaNL%2Bk7f8%2Fb9cm5L6bTDszofEBjqkAcFkk5ZuRG5lmrt%2Fz%2FDLGM%2F1wE8MRaf1EFUZ4x8tJW229Mbh1kj%2By72ahQFQ7CVKxa%2BNvY%2FcjU%2ByDJP1UwoxUPMYYRFJh6KUzOu3oo7Fco5iqXLXnsFXsO4dmGg72RIkX7rnhg%2BJWFeguIkRT733qavCKXTqQGjLIiXkvWq3dGKC7Y%2BgaaEome1d2wwixYM9pjCGzFOs79AkJ6hpoQYxhotv7kJI&X-Amz-Signature=f08087a1ef75379f3f810304b64e1f6e06334beab886ea5b55fc1151aa5c7847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://elky84.github.io/2020/07/05/difficult_operate_a_socket_server_with_docker/](https://elky84.github.io/2020/07/05/difficult_operate_a_socket_server_with_docker/)

🔗 [https://jflip.tistory.com/m/13](https://jflip.tistory.com/m/13)



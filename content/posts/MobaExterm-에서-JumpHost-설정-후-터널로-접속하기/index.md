---
title: "MobaExterm 에서 JumpHost 설정 후 터널로 접속하기"
date: 2025-06-17T02:24:00.000Z
draft: false
tags: ["Util"]
series: ["오픈소스"]
description: "MobaXterm을 사용하여 AWS 배스천 호스트를 통해 SSH 접속하는 방법: 터널링 기능을 설정하고, 실제 서버에 접속하기 위해 'localhost'와 설정한 포트를 사용하여 세션을 생성한 후 비밀번호 입력으로 접속 완료."
notion_id: "2151bab9-e3f8-8068-bddc-d8d1234d7399"
notion_url: "https://www.notion.so/MobaExterm-JumpHost-2151bab9e3f88068bddcd8d1234d7399"
---

# MobaExterm 에서 JumpHost 설정 후 터널로 접속하기

> **Summary**
> MobaXterm을 사용하여 AWS 배스천 호스트를 통해 SSH 접속하는 방법: 터널링 기능을 설정하고, 실제 서버에 접속하기 위해 'localhost'와 설정한 포트를 사용하여 세션을 생성한 후 비밀번호 입력으로 접속 완료.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ca47bfb8-d0a4-4168-9d89-78d624c0cc78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7B5IR2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGQ7aWirF3aPU0qJMT1rbJ6aJZvH8KH90UgMfopbRtZBAiBV%2Fl3kdQAuQX8GKWirj5M3Rrc2skvIjtOxIejFGzaUvyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMo%2BAqqmPKhvhHrNcpKtwDO1YguVEuJdKrTiH%2BX7DCyWhpCSG4BMzy%2B3UlWW2%2B%2FmeEWIdxn6Kpwc3OBrS6PwE2TDtoVfzf3MMTz16vf%2BhBySCN57qTpAm4LPSKlheo%2FzUFWcGbMGxnzbOxLFx2%2FozQtMTX%2FKbfrQPJIN9SHMeysjGuys1uHT2Usxk9LLs9d9MhA7OUYyj36alQkJllNCp%2FgVmUqaWApzR6JhRdVYq3nJHZ28fc%2BhPZSaFbxPzWQs9O9Wwg%2BR8TRkGjGmj6YUeKvX43M2DzeMAzLeXEKnvKx9vJFQxC5R8aaTXq7%2FquKRyCfhmZ8%2BSKE6Rz%2FxQdhcPRF7dN09Kj9tpySrqUS4Gv2jO%2FgYmnSFbhYYJY8gGls8f1N%2BvnI6Yzuc%2BEpMs%2Fco%2BKp4aVbWMLi%2FMOq%2B43VPi%2F2NatclQ7zSqxy6ilJ7G8dTq3k9qIZaZMn%2Fy7mc5LT1IOvna6tDLZf94gA0dwUpNmlPCnj%2FvR2h9SuNudGK5F7xcCYr5mvBAKI7qMYcGxmCkClUnR8DdPpsXf7yZCXP%2BvnR8JNDvQ3wqXJiciBfo1qnbHQv%2FTCnsMKGkiFA4Q2Zj5ucX42llipxV%2FFbw9scz7j%2BUuQqeUJ4ODuP4QInFx8dTxe6mAfju25dKSdPEwm8%2BHxAY6pgF%2BQG7aMKU8it2BODV%2FPS4gSpppDO2bdoIkHUVS9dkp%2FZ%2BZPOiHW%2Bi2FtOIWkwQ6wdog5EHYMr%2BdF9QQLrRcSlB6CAp1W%2BvJgtZrLbIJOUCGbu9L9mihMyggwQwwlKUufY9iJMOoVTE7ffIpZYvphqIO7FHIiH3nTq9nYKHlnD4kOXb%2FTf7V9vIUMf2SDCRO90Sc8ToD9OpfSSPbutR%2Fxrzgoq6vViC&X-Amz-Signature=ce1e6c695662cd0bfcd6ee87d03cbe90588c0cf6905d55c94c3e7fdddf2c1352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://sagittariusof85s.tistory.com/316](https://sagittariusof85s.tistory.com/316)

**기(起):** 평소 SSH 접속에 'putty'를 사용했지만, AWS 배스천 호스트를 통해 접속해야 하는 새로운 상황에 직면했습니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 작업을 위해 'MobaXterm'이 편리하다는 추천을 받고 사용해보기로 결심했습니다.

**승(承):** MobaXterm을 사용하여 AWS 배스천을 통해 접속하는 과정의 첫 단계로, 'Tunneling' 기능을 설정합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 기능에서 원격 서버와 배스천 호스트의 IP, 포트, 사용자 정보 등을 입력하여 새로운 SSH 터널을 생성합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**전(轉):** 터널 설정 후, 실제 서버에 접속하기 위해 새로운 'Session'을 만듭니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 여기서 핵심은 원격 호스트 주소에 실제 서버 IP가 아닌 'localhost'를 입력하고, 포트 번호는 앞서 설정한 터널링 포트를 지정하는 것입니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**결(結):** 설정한 세션을 실행하고 비밀번호를 입력하면, 터널을 통해 최종 목적지 서버에 성공적으로 접속하게 됩니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 과정을 통해 MobaXterm이 putty에 비해 시각적으로 보기 좋고 편리하며, 앞으로도 자주 사용하게 될 것 같다고 결론 내립니다.


1. [[MobaXterm]모바엑스텀에서 AWS 배스천 이용 SSH 접속하기](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)

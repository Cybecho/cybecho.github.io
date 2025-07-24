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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ca47bfb8-d0a4-4168-9d89-78d624c0cc78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQS4RVP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDda%2BcFg5xTNGW%2BzkzGuNtZaMmH85LCveIOhq91hQQxOwIgCGqoStHMwC0K9%2Bi%2FUJP4o%2Fvf%2F9nHIl8sN4rUopxq7Q4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJN8uEjEvCj5Up%2BBYircA5M%2Fx5%2FYoPBv2PuLxfKAoGiQ7Z3az7sQEfgn8jeszvmNJHFcHvBccQ0y6RvXK4FE3ZsEE3ApmGndXvwOn1wGSzCPRUQx0%2BCMox5FaH6JcB9xDieSHldNjG%2FP9%2FQHG1ywMr5B9h7jIJxlbKoB9OW4DFFEbwZburpC0kpC8n3Usnw981Xt6JVGjyzm3obQ7HDkHjK4QsN6PqXXef79L5dMqhBpM95vbX2lmde0%2FC30oEpe1LLrJZPeUm%2B7yKKGoaHVf3TQ%2F93SwhPdgdGp5gnixzzR4p2wILGuv7PPMfHqR2NZSKyK4llOBpdd2%2B6RNG9vzTiQLe%2Bu0hNBTf5tUcy1Uh4OKJcfl1lLqf7Ks9vrg%2B7xCoYWL04IxWsFeGKDbz3mkBRvswR1J998lW8CNDzAwZnUj0SzUOHPoQhig6Yjg2avoGq%2FNwo1pOeYhhxIPqsdi0%2FSDhkTF1l5PbtododtlnUFrVtJt%2FSt1oQnjMIX7bWjD2PHkKlJQknkC3vM6tfiCpyzsxgYs%2FTOrqqmu6LSQIrj2EomYPXDmOPBD0IdyfElsCTP7VpscEIybz7zNSo%2F515rGBm%2Fs4PqisGceWtts2BJC7ZdB8V%2F6M3CknF7tDvpcVkUL3ASRsAVeo9fMKTPh8QGOqUBLrGlUk8nLN19uvQ%2Bb%2FHCIYTZr4E18DHNLbZJbbmspfQMxnpvTMOBkS1vMMmaUZsFnncGw%2BID4tWVX4X689cCBkfV8esFWM3usryRUBH%2FNKAcIitiQHdaicFf61kHo8FWHIfL49yNpfSbvJu0pD44YYXPRZroGHJTyliFNogB1geTQmccuBxD9x8Is9VNO21fi%2F0WmPxhoy6aWWT5yEO%2B16EiqNZ9&X-Amz-Signature=cc4a8cd1ae11d03845f2dcf066809fd32f405dd69260d7c26bf3d6fd308646e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://sagittariusof85s.tistory.com/316](https://sagittariusof85s.tistory.com/316)

**기(起):** 평소 SSH 접속에 'putty'를 사용했지만, AWS 배스천 호스트를 통해 접속해야 하는 새로운 상황에 직면했습니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 작업을 위해 'MobaXterm'이 편리하다는 추천을 받고 사용해보기로 결심했습니다.

**승(承):** MobaXterm을 사용하여 AWS 배스천을 통해 접속하는 과정의 첫 단계로, 'Tunneling' 기능을 설정합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 기능에서 원격 서버와 배스천 호스트의 IP, 포트, 사용자 정보 등을 입력하여 새로운 SSH 터널을 생성합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**전(轉):** 터널 설정 후, 실제 서버에 접속하기 위해 새로운 'Session'을 만듭니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 여기서 핵심은 원격 호스트 주소에 실제 서버 IP가 아닌 'localhost'를 입력하고, 포트 번호는 앞서 설정한 터널링 포트를 지정하는 것입니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**결(結):** 설정한 세션을 실행하고 비밀번호를 입력하면, 터널을 통해 최종 목적지 서버에 성공적으로 접속하게 됩니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 과정을 통해 MobaXterm이 putty에 비해 시각적으로 보기 좋고 편리하며, 앞으로도 자주 사용하게 될 것 같다고 결론 내립니다.


1. [[MobaXterm]모바엑스텀에서 AWS 배스천 이용 SSH 접속하기](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)

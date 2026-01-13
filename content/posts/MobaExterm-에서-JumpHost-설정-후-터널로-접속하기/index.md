---
title: "MobaExterm 에서 JumpHost 설정 후 터널로 접속하기"
date: 2025-06-17T02:24:00.000Z
draft: false
tags: ["Util"]
series: ["오픈소스"]
description: "AWS 배스천을 통해 SSH 접속하기 위해 MobaXterm의 터널링 기능을 설정하고, 원격 서버에 접속하기 위해 'localhost'와 설정한 포트를 사용하여 세션을 생성하는 방법을 설명합니다. MobaXterm은 시각적으로 편리하여 앞으로 자주 사용할 것이라고 결론짓습니다."
notion_id: "2151bab9-e3f8-8068-bddc-d8d1234d7399"
notion_url: "https://www.notion.so/MobaExterm-JumpHost-2151bab9e3f88068bddcd8d1234d7399"
---

# MobaExterm 에서 JumpHost 설정 후 터널로 접속하기

> **Summary**
> AWS 배스천을 통해 SSH 접속하기 위해 MobaXterm의 터널링 기능을 설정하고, 원격 서버에 접속하기 위해 'localhost'와 설정한 포트를 사용하여 세션을 생성하는 방법을 설명합니다. MobaXterm은 시각적으로 편리하여 앞으로 자주 사용할 것이라고 결론짓습니다.

---

![Image](image_328bc005d8e6.png)

🔗 [https://sagittariusof85s.tistory.com/316](https://sagittariusof85s.tistory.com/316)

**기(起):** 평소 SSH 접속에 'putty'를 사용했지만, AWS 배스천 호스트를 통해 접속해야 하는 새로운 상황에 직면했습니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 작업을 위해 'MobaXterm'이 편리하다는 추천을 받고 사용해보기로 결심했습니다.

**승(承):** MobaXterm을 사용하여 AWS 배스천을 통해 접속하는 과정의 첫 단계로, 'Tunneling' 기능을 설정합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 기능에서 원격 서버와 배스천 호스트의 IP, 포트, 사용자 정보 등을 입력하여 새로운 SSH 터널을 생성합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**전(轉):** 터널 설정 후, 실제 서버에 접속하기 위해 새로운 'Session'을 만듭니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 여기서 핵심은 원격 호스트 주소에 실제 서버 IP가 아닌 'localhost'를 입력하고, 포트 번호는 앞서 설정한 터널링 포트를 지정하는 것입니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**결(結):** 설정한 세션을 실행하고 비밀번호를 입력하면, 터널을 통해 최종 목적지 서버에 성공적으로 접속하게 됩니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 과정을 통해 MobaXterm이 putty에 비해 시각적으로 보기 좋고 편리하며, 앞으로도 자주 사용하게 될 것 같다고 결론 내립니다.


1. [[MobaXterm]모바엑스텀에서 AWS 배스천 이용 SSH 접속하기](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)

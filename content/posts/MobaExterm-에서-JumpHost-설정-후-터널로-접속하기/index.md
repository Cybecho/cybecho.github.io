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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ca47bfb8-d0a4-4168-9d89-78d624c0cc78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2OH244%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICxi847W74AZMio0fz337NRhgl2WzevJ4uGuLNO2P9kFAiEAtvLXGqqOEk2q9uGRob0Bp1scOMKzyuk1cnFXvCFKGmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFEmN4x4vOCt8miJJircA7Z83hGd86u4pxC5h1SnpwLO441IyYpxs6M0LYSVaPExOS8pAt7f1sVrsySxMYcgI6JZCqjK%2BddMv840MbvRhTcX09yUf8zPVjvMgTyaj%2BMne7Lj0hc8jPmrrfLLR1mZH9LkkthJmOaQ8ciKZ3lFnEfxsrLAIhXToGzZjZCIB0Gr%2BAoL%2Buy4Hh8m9ScZKuKqVj0T60czkv6Zouv09e5XFHA1ww9NhDsw%2BXUTY7Aybw3ksbr3q5Qki7%2F7kVl9Ro7XSULm02QYtrDoeFWBA6%2Bq0eLiHzT2ZgRbr%2BpNn9MJ8V79QfQYK3SXU44ufe3eU%2BAeQ%2FSlM3WE7KTC3gcCQbl62n8sDAnuRlCY7LBRdz7lsmTcJRfdk8ZlvhxNGMReypq7yvIA79%2FBZ9mCuZ4xWL0J%2F8acf76ynsgGN6lYGdLtKSM2MdnQLvuvunX%2FCQA2PZ50nb25HsaH%2FEWPt1GoUGZkYW53v8aKCT9Ic8c7ovX0MP4Xo3cF1TbzMaSSK%2Fx1TzyQZWbfoMRTYAD3Zmug4G5uk%2BX3mVm8gwJGimb92cGEzjALE19bUdJSTpxCOuqyjXUexWfGbGXcZbF7oJPQXI1tuq7eEIP581wIYzlBpY4kJs4n8QFW%2BdnsmCaAFRMNMKH2h8QGOqUBozA4WPP7UJLECsZ67pki6x6ddfnXUu6WUuK%2BeWEZk9CVQjn98Ly38hSFEOIMxPZ1UEcrlf9QGdMxO8nbjbtM6i%2BTL9gdwUUUyJ8TfkiZ4tG81%2FB6Ec7LRwvHVV1ClZeIfhvW7Juas54ZFALIhbmze9UDGVa5kconxLYFea022yjqOF4XQtcLuZP%2FPhr4SVJ0rHFAJztKmNdyDvRym5wYw1nOFO45&X-Amz-Signature=cbb04cd5e3b22287b7246e652109f342d6b728861aaf8dcd479f9cfce7f5df1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://sagittariusof85s.tistory.com/316](https://sagittariusof85s.tistory.com/316)

**기(起):** 평소 SSH 접속에 'putty'를 사용했지만, AWS 배스천 호스트를 통해 접속해야 하는 새로운 상황에 직면했습니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 작업을 위해 'MobaXterm'이 편리하다는 추천을 받고 사용해보기로 결심했습니다.

**승(承):** MobaXterm을 사용하여 AWS 배스천을 통해 접속하는 과정의 첫 단계로, 'Tunneling' 기능을 설정합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 기능에서 원격 서버와 배스천 호스트의 IP, 포트, 사용자 정보 등을 입력하여 새로운 SSH 터널을 생성합니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**전(轉):** 터널 설정 후, 실제 서버에 접속하기 위해 새로운 'Session'을 만듭니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 여기서 핵심은 원격 호스트 주소에 실제 서버 IP가 아닌 'localhost'를 입력하고, 포트 번호는 앞서 설정한 터널링 포트를 지정하는 것입니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)]

**결(結):** 설정한 세션을 실행하고 비밀번호를 입력하면, 터널을 통해 최종 목적지 서버에 성공적으로 접속하게 됩니다.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)] 이 과정을 통해 MobaXterm이 putty에 비해 시각적으로 보기 좋고 편리하며, 앞으로도 자주 사용하게 될 것 같다고 결론 내립니다.


1. [[MobaXterm]모바엑스텀에서 AWS 배스천 이용 SSH 접속하기](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsagittariusof85s.tistory.com%2F316)

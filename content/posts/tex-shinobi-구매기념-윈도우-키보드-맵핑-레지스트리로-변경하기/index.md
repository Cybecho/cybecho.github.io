---
title: "tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["개발환경"]
description: "윈도우 키보드의 키 맵핑을 레지스트리를 통해 변경하는 방법과 관련된 자료 및 유용한 소프트웨어 링크를 제공합니다."
notion_id: "769bc582-1e7c-4c1b-b2d7-d6754b7fe6b5"
notion_url: "https://www.notion.so/tex-shinobi-769bc5821e7c4c1bb2d7d6754b7fe6b5"
---

# tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기

> **Summary**
> 윈도우 키보드의 키 맵핑을 레지스트리를 통해 변경하는 방법과 관련된 자료 및 유용한 소프트웨어 링크를 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9fcb4229-6e6e-402a-8347-4d01b0dfc5b9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2OH244%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICxi847W74AZMio0fz337NRhgl2WzevJ4uGuLNO2P9kFAiEAtvLXGqqOEk2q9uGRob0Bp1scOMKzyuk1cnFXvCFKGmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFEmN4x4vOCt8miJJircA7Z83hGd86u4pxC5h1SnpwLO441IyYpxs6M0LYSVaPExOS8pAt7f1sVrsySxMYcgI6JZCqjK%2BddMv840MbvRhTcX09yUf8zPVjvMgTyaj%2BMne7Lj0hc8jPmrrfLLR1mZH9LkkthJmOaQ8ciKZ3lFnEfxsrLAIhXToGzZjZCIB0Gr%2BAoL%2Buy4Hh8m9ScZKuKqVj0T60czkv6Zouv09e5XFHA1ww9NhDsw%2BXUTY7Aybw3ksbr3q5Qki7%2F7kVl9Ro7XSULm02QYtrDoeFWBA6%2Bq0eLiHzT2ZgRbr%2BpNn9MJ8V79QfQYK3SXU44ufe3eU%2BAeQ%2FSlM3WE7KTC3gcCQbl62n8sDAnuRlCY7LBRdz7lsmTcJRfdk8ZlvhxNGMReypq7yvIA79%2FBZ9mCuZ4xWL0J%2F8acf76ynsgGN6lYGdLtKSM2MdnQLvuvunX%2FCQA2PZ50nb25HsaH%2FEWPt1GoUGZkYW53v8aKCT9Ic8c7ovX0MP4Xo3cF1TbzMaSSK%2Fx1TzyQZWbfoMRTYAD3Zmug4G5uk%2BX3mVm8gwJGimb92cGEzjALE19bUdJSTpxCOuqyjXUexWfGbGXcZbF7oJPQXI1tuq7eEIP581wIYzlBpY4kJs4n8QFW%2BdnsmCaAFRMNMKH2h8QGOqUBozA4WPP7UJLECsZ67pki6x6ddfnXUu6WUuK%2BeWEZk9CVQjn98Ly38hSFEOIMxPZ1UEcrlf9QGdMxO8nbjbtM6i%2BTL9gdwUUUyJ8TfkiZ4tG81%2FB6Ec7LRwvHVV1ClZeIfhvW7Juas54ZFALIhbmze9UDGVa5kconxLYFea022yjqOF4XQtcLuZP%2FPhr4SVJ0rHFAJztKmNdyDvRym5wYw1nOFO45&X-Amz-Signature=a3d31f11e5db893536a4c146b2e50f5a090fcaf1f2f9d6e4e9fd5dff102a8aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2OH244%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICxi847W74AZMio0fz337NRhgl2WzevJ4uGuLNO2P9kFAiEAtvLXGqqOEk2q9uGRob0Bp1scOMKzyuk1cnFXvCFKGmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFEmN4x4vOCt8miJJircA7Z83hGd86u4pxC5h1SnpwLO441IyYpxs6M0LYSVaPExOS8pAt7f1sVrsySxMYcgI6JZCqjK%2BddMv840MbvRhTcX09yUf8zPVjvMgTyaj%2BMne7Lj0hc8jPmrrfLLR1mZH9LkkthJmOaQ8ciKZ3lFnEfxsrLAIhXToGzZjZCIB0Gr%2BAoL%2Buy4Hh8m9ScZKuKqVj0T60czkv6Zouv09e5XFHA1ww9NhDsw%2BXUTY7Aybw3ksbr3q5Qki7%2F7kVl9Ro7XSULm02QYtrDoeFWBA6%2Bq0eLiHzT2ZgRbr%2BpNn9MJ8V79QfQYK3SXU44ufe3eU%2BAeQ%2FSlM3WE7KTC3gcCQbl62n8sDAnuRlCY7LBRdz7lsmTcJRfdk8ZlvhxNGMReypq7yvIA79%2FBZ9mCuZ4xWL0J%2F8acf76ynsgGN6lYGdLtKSM2MdnQLvuvunX%2FCQA2PZ50nb25HsaH%2FEWPt1GoUGZkYW53v8aKCT9Ic8c7ovX0MP4Xo3cF1TbzMaSSK%2Fx1TzyQZWbfoMRTYAD3Zmug4G5uk%2BX3mVm8gwJGimb92cGEzjALE19bUdJSTpxCOuqyjXUexWfGbGXcZbF7oJPQXI1tuq7eEIP581wIYzlBpY4kJs4n8QFW%2BdnsmCaAFRMNMKH2h8QGOqUBozA4WPP7UJLECsZ67pki6x6ddfnXUu6WUuK%2BeWEZk9CVQjn98Ly38hSFEOIMxPZ1UEcrlf9QGdMxO8nbjbtM6i%2BTL9gdwUUUyJ8TfkiZ4tG81%2FB6Ec7LRwvHVV1ClZeIfhvW7Juas54ZFALIhbmze9UDGVa5kconxLYFea022yjqOF4XQtcLuZP%2FPhr4SVJ0rHFAJztKmNdyDvRym5wYw1nOFO45&X-Amz-Signature=8c61bbdbf119eeae38ace1d468fc9108086cdf5eb60d02afab244d571884587b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🔗 [https://gigglehd.com/gg/soft/12015825](https://gigglehd.com/gg/soft/12015825)

🔗 [https://www.passmark.com/products/keytest/](https://www.passmark.com/products/keytest/)

🔗 [https://www.majorgeeks.com/files/details/switch_hitter.html](https://www.majorgeeks.com/files/details/switch_hitter.html)


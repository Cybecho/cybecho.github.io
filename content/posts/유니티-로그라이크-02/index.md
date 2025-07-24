---
title: "유니티 로그라이크 02"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "플레이어 이동을 위한 Rigidbody2D 함수와 FixedUpdate 사용법을 설명하며, 속도 조절을 위해 벡터를 노말라이즈하고 GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선하는 방법을 제시합니다."
notion_id: "8f5e0db5-c75c-4700-997d-1b35a3411446"
notion_url: "https://www.notion.so/02-8f5e0db5c75c4700997d1b35a3411446"
---

# 유니티 로그라이크 02

> **Summary**
> 플레이어 이동을 위한 Rigidbody2D 함수와 FixedUpdate 사용법을 설명하며, 속도 조절을 위해 벡터를 노말라이즈하고 GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선하는 방법을 제시합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=YAu4yWU5D5U)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6cba5215-9739-4ac3-81f4-b7fac882fbfa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQDAQH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD7w1ImqsaYtX%2FjvBXkUBGs8TsDspYHf5juj7Q%2BToDu3gIhAODS3epv3D19jNypPIYE8eQngOfict8xgF99%2FXE3%2Fsi3Kv8DCCkQABoMNjM3NDIzMTgzODA1IgxxXgryClPRt%2FcJdXsq3AM6QHurRW5CBXOYtlO3GyocdmkYc4oc1wJU8buQCsu6WlvIsfJsKOJwbxo%2BnZYbX20XoQu2NwxTYOz6XSyc130dAc%2BPH4azSY%2FjWnpY%2FbAVWjiPt5Lx5uaOP1qZbtq%2FVBHnX4GOzEZpn55CaBV9mcQav4WZX8%2BuNVDq7FOxe%2FaSVJfH%2But%2F99eeGnmXfu49p8mHO60vdsUJhIZpxSQb5Qrwcfco1kPU3W5Y4ZyUta4o6LfZaj7lWapHyfSTdbMpvt06nm%2FkO9B5U0PSHxZKBB7Pa1eSrdm4rHjYgMCp8ExR%2BWEfbTFVSlEffVwqxSJUILeEm323fdZf%2BLBPzziA8g8h7IdwPwU%2FJvrsOdFjPVxbNU46no5ccCPz%2BPb22hyLqA%2BZaedgNqInBPP8xSVMzlELzvtSG0VLTcHbbmGtftNrxpY10t8DPE0oTXq5Cie%2FillbBJWCo%2Fjs9xbsYtNFR93BziXDpEIoPWRdZm7Ac49tWpWLmwbB7WJZHb%2BMpX9GvzIsXiuuo7liRkDlmqlYt8bS9gHogQd%2Bu1yz1RqHCgzEdhS8EzJg2UBwkQviFWQgJuGuEmooV%2BEw%2FVHknRTcnZYJAlmcCyPibDlmvqBv5YjgjzcaFyn3QuEZM%2FBqlTCa0IfEBjqkAagVf9VoMoVtWuGB9DNZxglk4XmfdzYXld9Fjk07EccT5NF2yG8bBy90WKKQ8giOCqxIzYEGlI4doe4NWieB2rb0xEXUlhqta7Geu0QYo5ZLdA2ZCU9NZmIbqTj26nDbNtpiLY1wRf5EDENHgiLOEttyYkV3FT%2FcO9KFU8mB9SakC36ACdIckCyul7v4LGdmc7KeZL1MJqJeLzimT%2BvGT5vFUxyW&X-Amz-Signature=3156982ac839cc7d8f7b09663a2b887162f8da111c30e518471bc79481e1ff91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **`FixedUdate`는 물리 연산 프레임마다 호출되는 함수다**

> 🔥 **Rigidbody2D 함수 설명 + 플레이어 이동 코드**

> 🔥 **근데 플레이어 속도가 너무 빨라서 다음과같이 벡터를 노말라이즈 해주고 델타타임을 곱해줘서 프레임 속도를 고정시켜줍니다**

> 🔥 **근데 GetAxis특유의 늦은 반응과 슬라이스 이동이 거슬린다**


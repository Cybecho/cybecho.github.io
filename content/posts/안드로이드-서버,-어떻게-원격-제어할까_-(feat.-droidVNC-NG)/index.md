---
title: "안드로이드 서버, 어떻게 원격 제어할까? (feat. droidVNC-NG)"
date: 2025-07-24T14:12:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!", "원격 라이프!"]
description: "안드로이드 기기를 원격으로 제어하기 위해 "
notion_id: "23a1bab9-e3f8-800c-9075-dcdae82dcbbf"
notion_url: "https://www.notion.so/feat-droidVNC-NG-23a1bab9e3f8800c9075dcdae82dcbbf"
---

# 안드로이드 서버, 어떻게 원격 제어할까? (feat. droidVNC-NG)

> **Summary**
> 안드로이드 기기를 원격으로 제어하기 위해 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f4c895e-0ab4-43b6-85a1-647c392c9f09/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYSI5TH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCf12BfZ0HrWeHGO0nDwAtJr8%2B4kz0B%2B70bkI8pGTBVjwIhAPHdtEREHjXJQnbMjmAdaEffvbmf51mQYajVxw%2FsvGjmKv8DCCkQABoMNjM3NDIzMTgzODA1IgxzoO3s9ata953oKmsq3APoj7T3z3QhiZyDI33dx1iB6oKqCZBY2OrBr9YTKrVYs6X0CVWuCnBHnq0QmtjnvIacOR1T1eF90rrwWxm6%2FVJwSnOdDa3zQ5dh%2Fm1FWiDTsBknwpL7%2F5NzFc0HbFRu5GzHAbbfMIVU9sHnT9I79DmGi40rA%2BCDhvQCKERWA%2BBTfOc%2FrcVpMTvXw6yE5P6pXPOZ5vzK1EcUpThqOWisntgSUgBq2nJYML7i91rpF%2BC0QMormT%2B3aB%2BoSOHvOyURNvsixM8myHkpEshZ0k%2FcIjWS9zOea1VYpsu1n9v3ovYsRU164R7LgFy8pL1DM4twU0GpN8UzK1DLqLmegV7MPJCtDgK1W9cNx61IHtOylrf9D7fcXnwwvIYz9iPoOTCMPKBOe2wIsXGB%2BEiaqXSpW5XWug8sqPh6aBX0E6HpU3hBDvdhKyEmGTfhDfSQVXJ%2BZElla79j3PyUSnR2l5I2bHW1zqa8NTj7FWvq5v78rPR0O01KKOsNDglkaLyzU2UMPWXqbJ9yjMA5c9j27l38wgqBLMxMAuR1Z3KbdewkAXdgvJz5Hu3ZiGaLWBLOBOavS2MYsq11O9YKO8huORB%2FB%2BK%2BC9gTmUtvnl300lMxC9gEN43RLkNWo2sNhxP5tTD%2Fz4fEBjqkAYZ55ixW%2BxwRY3folT6iRBrsS5XHWUn%2FvbqYvguZyWdjfVW%2F3ICLvdMCjIXzFd04JGdMjv%2BOfx3xOk8ltQbe3ifYHBlIIiaoR1gOf0aPrdXVETKQWOzjoEPV%2BMYEv68Xz4YY4feDEYTdKiZCmg01NwE6ckG4X8F%2FrNmySu6vXfv1amLRjkyFqksEylMKAvxsdGw0EccNJavjbVxh6%2FlS90xrgOwj&X-Amz-Signature=b8960cad0633c6f03b51b2f9f5b27fa160946c3e3a8de87ee4686ab16e7d2f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 안드로이드 원격 제어, 더 가볍고 편리한 방법을 찾아서

내 픽셀 서버 프로젝트를 진행하면서 한 가지 아쉬운 점이 있었다. 바로 원격으로 화면을 직접 보며 제어할 방법이 마땅치 않다는 것이었다. 물론 팀뷰어(TeamViewer) 같은 유명한 솔루션이 먼저 떠오르지만, 솔직히 좀 부담스러웠다. 기능이 많은 만큼 무겁고, 개인적인 용도로 쓰기엔 과하다는 느낌을 지울 수 없었다. 내 오래된 픽셀 서버에 불필요한 부담을 주고 싶지 않았다.

그래서 더 가볍고 본질에 충실한 방법을 찾아 헤맸고, 마침내 `droidVNC-NG`라는 완벽한 해답을 찾았다.

내가 이 앱을 선택한 이유는 명확했다. 첫째, **오픈소스**다. 누구나 코드를 들여다볼 수 있어 투명하고, 불필요한 기능 없이 VNC 서버라는 본질에만 집중한다. 둘째, **루팅(root) 권한이 필요 없다.** 안드로이드의 '접근성 서비스' API를 활용하는 방식인데, 이는 매우 영리한 접근이다. 루팅 없이도 화면을 제어할 수 있게 해주므로 보안 걱정을 덜 수 있었다.

설정은 놀라울 만큼 간단했다. 구글 플레이스토어에서 앱을 설치하고, 앱이 요구하는 대로 '접근성 서비스' 권한만 허용해 주면 준비는 끝난다. 앱을 켜고 서버 시작 버튼을 누르니, 화면에 접속할 IP 주소와 포트 번호가 바로 나타났다. 이제 내 PC에서 접속할 일만 남았다.

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/38bcd22f-4baa-4f02-bacf-e3cc46e9a0bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYSI5TH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCf12BfZ0HrWeHGO0nDwAtJr8%2B4kz0B%2B70bkI8pGTBVjwIhAPHdtEREHjXJQnbMjmAdaEffvbmf51mQYajVxw%2FsvGjmKv8DCCkQABoMNjM3NDIzMTgzODA1IgxzoO3s9ata953oKmsq3APoj7T3z3QhiZyDI33dx1iB6oKqCZBY2OrBr9YTKrVYs6X0CVWuCnBHnq0QmtjnvIacOR1T1eF90rrwWxm6%2FVJwSnOdDa3zQ5dh%2Fm1FWiDTsBknwpL7%2F5NzFc0HbFRu5GzHAbbfMIVU9sHnT9I79DmGi40rA%2BCDhvQCKERWA%2BBTfOc%2FrcVpMTvXw6yE5P6pXPOZ5vzK1EcUpThqOWisntgSUgBq2nJYML7i91rpF%2BC0QMormT%2B3aB%2BoSOHvOyURNvsixM8myHkpEshZ0k%2FcIjWS9zOea1VYpsu1n9v3ovYsRU164R7LgFy8pL1DM4twU0GpN8UzK1DLqLmegV7MPJCtDgK1W9cNx61IHtOylrf9D7fcXnwwvIYz9iPoOTCMPKBOe2wIsXGB%2BEiaqXSpW5XWug8sqPh6aBX0E6HpU3hBDvdhKyEmGTfhDfSQVXJ%2BZElla79j3PyUSnR2l5I2bHW1zqa8NTj7FWvq5v78rPR0O01KKOsNDglkaLyzU2UMPWXqbJ9yjMA5c9j27l38wgqBLMxMAuR1Z3KbdewkAXdgvJz5Hu3ZiGaLWBLOBOavS2MYsq11O9YKO8huORB%2FB%2BK%2BC9gTmUtvnl300lMxC9gEN43RLkNWo2sNhxP5tTD%2Fz4fEBjqkAYZ55ixW%2BxwRY3folT6iRBrsS5XHWUn%2FvbqYvguZyWdjfVW%2F3ICLvdMCjIXzFd04JGdMjv%2BOfx3xOk8ltQbe3ifYHBlIIiaoR1gOf0aPrdXVETKQWOzjoEPV%2BMYEv68Xz4YY4feDEYTdKiZCmg01NwE6ckG4X8F%2FrNmySu6vXfv1amLRjkyFqksEylMKAvxsdGw0EccNJavjbVxh6%2FlS90xrgOwj&X-Amz-Signature=f88d2358b9b496263b8fb74a13038a982f582388159007c4d6a9369749df82a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

VNC 클라이언트는 여러 가지가 있지만, 나는 평소 애용하는 `JumpDesktop`을 사용했다. `JumpDesktop`에 `droidVNC-NG`가 알려준 주소를 그대로 입력하니, 지체 없이 안드로이드 화면이 내 PC 모니터에 나타났다. 반응 속도도 만족스러웠고, 키보드와 마우스로 기본적인 조작을 하기에 전혀 무리가 없었다.

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6d42545e-0638-4995-aa84-570982227682/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYSI5TH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCf12BfZ0HrWeHGO0nDwAtJr8%2B4kz0B%2B70bkI8pGTBVjwIhAPHdtEREHjXJQnbMjmAdaEffvbmf51mQYajVxw%2FsvGjmKv8DCCkQABoMNjM3NDIzMTgzODA1IgxzoO3s9ata953oKmsq3APoj7T3z3QhiZyDI33dx1iB6oKqCZBY2OrBr9YTKrVYs6X0CVWuCnBHnq0QmtjnvIacOR1T1eF90rrwWxm6%2FVJwSnOdDa3zQ5dh%2Fm1FWiDTsBknwpL7%2F5NzFc0HbFRu5GzHAbbfMIVU9sHnT9I79DmGi40rA%2BCDhvQCKERWA%2BBTfOc%2FrcVpMTvXw6yE5P6pXPOZ5vzK1EcUpThqOWisntgSUgBq2nJYML7i91rpF%2BC0QMormT%2B3aB%2BoSOHvOyURNvsixM8myHkpEshZ0k%2FcIjWS9zOea1VYpsu1n9v3ovYsRU164R7LgFy8pL1DM4twU0GpN8UzK1DLqLmegV7MPJCtDgK1W9cNx61IHtOylrf9D7fcXnwwvIYz9iPoOTCMPKBOe2wIsXGB%2BEiaqXSpW5XWug8sqPh6aBX0E6HpU3hBDvdhKyEmGTfhDfSQVXJ%2BZElla79j3PyUSnR2l5I2bHW1zqa8NTj7FWvq5v78rPR0O01KKOsNDglkaLyzU2UMPWXqbJ9yjMA5c9j27l38wgqBLMxMAuR1Z3KbdewkAXdgvJz5Hu3ZiGaLWBLOBOavS2MYsq11O9YKO8huORB%2FB%2BK%2BC9gTmUtvnl300lMxC9gEN43RLkNWo2sNhxP5tTD%2Fz4fEBjqkAYZ55ixW%2BxwRY3folT6iRBrsS5XHWUn%2FvbqYvguZyWdjfVW%2F3ICLvdMCjIXzFd04JGdMjv%2BOfx3xOk8ltQbe3ifYHBlIIiaoR1gOf0aPrdXVETKQWOzjoEPV%2BMYEv68Xz4YY4feDEYTdKiZCmg01NwE6ckG4X8F%2FrNmySu6vXfv1amLRjkyFqksEylMKAvxsdGw0EccNJavjbVxh6%2FlS90xrgOwj&X-Amz-Signature=edd936508392a5bdca5c2d55c7ccea5a92cda12a1198e07303b094408f169851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

하지만 나를 가장 만족시킨 기능은 따로 있었다. 바로 **‘부팅 시 자동으로 VNC 서버 시작’** 옵션이다. 이걸 활성화하니, 내 픽셀 서버가 어떤 이유로 재부팅되더라도 신경 쓸 필요 없이 VNC 서버가 자동으로 켜졌다. 원격 서버로 활용하는 기기에는 이보다 더 편리할 수 없는 기능이다. 더 이상 문제가 생겼을 때 기기를 직접 확인하러 가지 않아도 된다는 해방감은 기대 이상이었다.

만약 당신도 나와 같이 안드로이드 기기를 원격으로 제어할 가볍고 안정적인 방법이 필요하다면, `droidVNC-NG`와 `JumpDesktop` 조합을 추천한다.


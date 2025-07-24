---
title: "레지스트리 적용 팝업 끄기"
date: 2023-11-19T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "레지스트리 편집기를 열고, 경로 HKEY_CURRENT_USER\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Policies\\\\System로 이동하여 ConfirmFileOperations 키를 찾거나 새로 만들고 값을 0으로 설정하면 레지스트리 파일 실행 시 팝업이 뜨지 않습니다. 배치파일을 사용하여 직접 설정할 수도 있습니다."
notion_id: "10b61f18-a525-41ca-934e-4b4d393f0aad"
notion_url: "https://www.notion.so/10b61f18a52541ca934e4b4d393f0aad"
---

# 레지스트리 적용 팝업 끄기

> **Summary**
> 레지스트리 편집기를 열고, 경로 HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System로 이동하여 ConfirmFileOperations 키를 찾거나 새로 만들고 값을 0으로 설정하면 레지스트리 파일 실행 시 팝업이 뜨지 않습니다. 배치파일을 사용하여 직접 설정할 수도 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6BQKCS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCID6UisPk%2F3oDB736dQ%2FT8tGZP%2BLXEN%2Bd9YzszzcBrEVyAiEAkwudfHqV%2FVU%2BWLl2I3yuqbrrM58G4I2WR7mJRtZDeDEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHioYA%2FpMqgl7I37lyrcA9iNdAkjpWEUI5TK39ra9%2FpVbQt6A7FJj%2Fi1oLJLX9dTHLfU4HBwW7J%2Fbk6cuWAATNjspX5pTfsyCy%2FFw7A%2FlWo0vaEDRLdVyporOEVBN4Sgaj1dPF43RYICLoxxp2pBlI5u8T7bEEouZj1Ethabtbrei02jE9yNhHNEmn71HldDthsDrTC17qHeBgDfipDmZ06YiikYQq%2FzxvslundHM1D%2BVPNXLflstwAAELW3CLjPuJh%2FRmr8gEBeczcL14PX9P3hUaR3EQZZukH2jmwYlUTy04ak%2F7eSpL5WABhKVGpwmYnZwqntXiXdAzKzZK9Z%2FCKyofa2Zyf1j5Bbc6iDIu7OtxYwLD7%2Bb7NnE6QcbrF65te3Zol%2BcX8QF7elWBAdAIgNo5y%2F3NrhJYrX6qTXhIIL3%2Bh7hekUw0vTqlnFNnHytfaDfvwF5ygdcMNgA4p64DelFP%2BR%2F%2ByJ6thckMIAguTGM1NNomF4pOIrWm4bXhrYQ6%2BHj5nFz4V%2B7j0qXGUA5PyIRAz%2BV4h0H3As1bwgXE7D%2FMuaxcrqH90EH7gAJdroNx8RgbLx0hngeva%2BtB2ruJRoB5JNzYKMabgRUoQQsR8qhdUX5D5m6WKhFdGzdG%2Bbg09f3kykNKwjLxiOMPTPh8QGOqUBViI70Rh%2FrGoKpfq3A%2BG31klD9DDxAU%2BlST%2B7c0MOQyz%2BH%2BkSBds%2FLnGz0FninnXn5OhR%2BdfObiDM3UGsrgCOJRTXp7CKnStSzglgrhtmj0J8x9K%2BBytCTDWjfoz%2F6%2BVS10arwvPG%2Bz5lYlZZuElqY63Dn%2Fw2PTC8VB6YnkXqIhyx1zQdBXwPIBjMAiA7%2Fnmw8QdIcpbPYNJ2UuUCqXEgcpL7rRjv&X-Amz-Signature=102ccc26cfcec3dee5f717d19b8134ff77e66f60e0ec7db687583ac7cf1db3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 이거 쓰세요**

1. 레지스트리 편집기를 엽니다.
1. 다음 경로로 이동합니다.
1. **REG_DWORD** 형식의 **ConfirmFileOperations** 키를 찾습니다.
1. 키가 없으면 새로 만듭니다.
1. 키의 값을 **0**으로 설정합니다.
이렇게 하면 레지스트리 파일을 실행할 때 팝업이 뜨지 않습니다.



### 또는 다음과 같이 배치파일에서 직접 설정할 수도 있습니다.

```plain text
REG ADD "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v ConfirmFileOperations /t REG_DWORD /d 0 /f

```

위 명령어를 실행하면 레지스트리 파일을 실행할 때 팝업이 뜨지 않습니다.

참고로, **ConfirmFileOperations** 키의 값을 **1**로 설정하면 레지스트리 파일을 실행할 때마다 팝업이 뜨게 됩니다.


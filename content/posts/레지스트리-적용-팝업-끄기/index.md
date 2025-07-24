---
title: "레지스트리 적용 팝업 끄기"
date: 2023-11-19T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "레지스트리 편집기를 열고 HKEY_CURRENT_USER\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Policies\\\\System 경로로 이동하여 ConfirmFileOperations 키를 REG_DWORD 형식으로 만들고 값을 0으로 설정하면 레지스트리 파일 실행 시 팝업이 뜨지 않습니다. 배치파일을 사용하여 직접 설정할 수도 있습니다."
notion_id: "10b61f18-a525-41ca-934e-4b4d393f0aad"
notion_url: "https://www.notion.so/10b61f18a52541ca934e4b4d393f0aad"
---

# 레지스트리 적용 팝업 끄기

> **Summary**
> 레지스트리 편집기를 열고 HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System 경로로 이동하여 ConfirmFileOperations 키를 REG_DWORD 형식으로 만들고 값을 0으로 설정하면 레지스트리 파일 실행 시 팝업이 뜨지 않습니다. 배치파일을 사용하여 직접 설정할 수도 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2BYOKD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFI%2BeQeuLag4Gs1ILxBHmNrAMddUJyxJbSDp1XWt9FFtAiBJX2kHSsENs9EVltWIxnUf%2F1ALDcRImxCuT6eZTP%2BT6Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM%2FC6uZgzQDeXQ6CNNKtwD5LhoB9Je5Hzo6PuArNWiN8%2FjjHlcD%2FXbMAbq3z076R3AWUyqLAkjovPOcZSqb1BVLIcSfWpv9OsKmySghf05jmdrIxRQhq9o6rCZ6E4UPfMwLORGrdJpbkh0RIquQET1OWLaBKKs2U3JpNy9hfSdD7hGIFPvL5NR%2BSIr1I%2B5jXdqeh8DJhzpQnfIuwh1YssqaH4QOnSAQTrsUq2EpTqM5AesImi2p3X4UWiwcsbV%2B6O2lyLHX3Z0T%2BJgZqbim%2FRxI%2FjKZXYsVk3r296x8antpe%2FKxEWDIiL5C496qWPQUynQR%2Bh8dsmgUvc%2BjTNxeXTUR7ZcWEQV5M0mOYlyhOWdk8%2BjChTKA7ZERrW9J6l8XhswgeapTiprQgj9Jctn65y9iGQBB3WP3npEX33Y9R0DZthcp1hbNfRbOr2T2PQXLBG6ma%2F2XcwciIN%2B0Gp8WkWjh0msqO9P3RVC39ufUBrlfeinlYh7e5ueCZa30sFz0DoQWDsuHPJlS%2FI8FXj%2F6u3bv5TWslG0mN%2BO%2FmgvLsZDqny2cxQYNZCt5irN03hZngYdDP7NShPy8oRGrOdINUePaq6bzGWJWMJYR73AH0LfxxtiH6Vr1Lz%2BHjbBq20aKJOg1dtlvEDXjzKnIJowkJuIxAY6pgFyqgwr7X4RCoFSRTJHM6FtC5R8h4KRKYSLo82FrHV%2F%2Bzx2HyvEAFTo0pLvFN2PYQb%2FWXVe9RXXRzHGzpGH8wh6LAWAIawFtK2AV61AgQcyOLHvokTIcYVv2QaGRNzTeK6stBugP%2BJE9aK4JO318vRdPS7lXgeFqfAxEy%2FzOgtXBNUWZuSn%2BqhiB0XkySa4JDzXem%2B53nMhL95dUyPxY04dEq6fEgKU&X-Amz-Signature=945830f75bd81222ea0379457d6afd55b83e9157078ec462527d618da7452b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 이거 쓰세요**
>

1. 레지스트리 편집기를 엽니다.
1. 다음 경로로 이동합니다.
1. **REG_DWORD** 형식의 **ConfirmFileOperations** 키를 찾습니다.
```c#
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

1. 키가 없으면 새로 만듭니다.
1. 키의 값을 **0**으로 설정합니다.
이렇게 하면 레지스트리 파일을 실행할 때 팝업이 뜨지 않습니다.



### 또는 다음과 같이 배치파일에서 직접 설정할 수도 있습니다.

```plain text
REG ADD "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v ConfirmFileOperations /t REG_DWORD /d 0 /f

```

위 명령어를 실행하면 레지스트리 파일을 실행할 때 팝업이 뜨지 않습니다.

참고로, **ConfirmFileOperations** 키의 값을 **1**로 설정하면 레지스트리 파일을 실행할 때마다 팝업이 뜨게 됩니다.


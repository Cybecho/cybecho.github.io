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

![Image](image_48b354f16282.png)

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


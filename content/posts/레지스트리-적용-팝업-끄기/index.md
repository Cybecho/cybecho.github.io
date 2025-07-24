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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KU7OWZ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBo4Quf0PD7CBNb%2FlhyR3%2F3EeXkEnCnzIqox5juItSCGAiEA80KgVApmrbVgJb5h6uHHMJ5S5JINJkua3zHi2BNSCZwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOgXpTKstmLGHcluhircAwaKwh6LdaX7Wg2roxYD7Ak1gWGy7hWftVaK5UhEs7MzKagBe6gGo5ju8%2B2fe7axOIR2XzXCYK2XG7oWQYmOKouVrnHxWkxWNpx6Mww0lPoj5hcK2ocStxwdNeJPyHAkgYJ6VV%2BrU49Ur70OT7FFh6ygRieh%2B4loj2WUbrEzbHeVK%2B%2BqT2C%2FlZsJ3ukELIW1xGVygA87OJxg66thIjyIXXMHbEVTPKeHTu79x1YFN2%2B3hj%2BusMjJWMTvCf10PVEnvD0frk25T47qbVAwIBSF1oVYfMZVYewXcrp%2FVCOaTeOe3hrGUrIGaxcnDR4ondVfuZSdvyxE0MlUj9u1HJMz1OsbdJq%2F21M014xVNbolQYpH9M6NX2BdjIWTYY1rYaltMPxNclixTOZVDbUZzWX8S1rqquW%2BKsV8JnYXYtqgLsqIW8W5v3gzi4dTbwoaKWGTDR1vuhGpIgquGjR%2BU4zNTVhAym%2FmCif40DB3qZ%2F7kJx0aLwYLVm82HZB7jZW9ZJIqcfg6Hh405d3bOAD%2Bjo0iE%2FFK3IEy1k%2B3K%2F51O6V3ywjs9TXvvDlupmYvVsx6CaB3eTFVnGMRfxPflUQxciODEeKNIr98mu2r05XIOMV3%2F2iFDjBpVo%2BMIo4JKDjMID1h8QGOqUBpqGIGrTOwEvO4gB1d5OjBQmtfVJ5OK5dnsgexRUwgNeo7nAzmrycHrH2Q2uqo9%2FaJXRY8gv0LbU%2F2n4dF%2B%2FURzFjNvUKvjCnLOt2VLKdP%2BEQ2EMv5z%2BhLDSJcSEC0oZ0uBS8N2LFh59nNrUn1yZX1Ev9Uh4MQr2wN1OzNri2phOF1S9nlX549jCVAalwKJU53sCY5h8bWS1oxO0qkk6Lo0mlk%2F%2BP&X-Amz-Signature=0468e5d337b033c1ccff622618edf92519b4c1d46a46014b48381982a05cd39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


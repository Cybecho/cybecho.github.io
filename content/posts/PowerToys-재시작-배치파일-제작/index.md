---
title: "PowerToys 재시작 배치파일 제작"
date: 2023-10-15T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "파일 탐색기 재시작을 위한 배치파일을 만들기 위해 관리자 권한을 요청하는 코드가 포함되어 있으며, PowerToys를 종료하고 다시 시작하는 방법이 설명되어 있습니다. 바탕화면에 배치파일을 두고 숨김 처리하면 깔끔하게 사용할 수 있습니다."
notion_id: "fc5218a7-90ef-441d-992e-5629ff8fabe4"
notion_url: "https://www.notion.so/PowerToys-fc5218a790ef441d992e5629ff8fabe4"
---

# PowerToys 재시작 배치파일 제작

> **Summary**
> 파일 탐색기 재시작을 위한 배치파일을 만들기 위해 관리자 권한을 요청하는 코드가 포함되어 있으며, PowerToys를 종료하고 다시 시작하는 방법이 설명되어 있습니다. 바탕화면에 배치파일을 두고 숨김 처리하면 깔끔하게 사용할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/da0060ea-1164-4649-b769-e1e0503a39bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZML35O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCGnsqGxTDIVdwaLKbnibW1kIRh6aDS2i8nSke6Ka8qMwIhAI%2BZshsga%2F%2FZgNudiAXRStGJcYZhYoICtfQFEduQhmzmKv8DCCkQABoMNjM3NDIzMTgzODA1IgxgOED3KCQqu8o62ZIq3AOMkb2Kd5t8%2F2wv6LKaAPpS33wn4iap0NtBLxxMvNh64dPiyyJBNYlfqMGj1Oh2i70yFWa7Nv0JdqgbdZk5Tc5wzHNM3lSv%2Bx5WMyq%2FsYz%2BMlu4NGdbGHXcye4fKtVRq1MR6KT7FFCR0aqz%2FAXixIQmAThF%2BXfdQpYasyBkfNORoNQJAg12%2Bll4Bf2rFftaUPrwtvbZKqB0iSlmEJ8dLxM6YuT04eVFN5%2FSH1luAQn0lrRWLJWxmwoinqdAalPCfWVSlAOPhzKBKKEXNrUDFgV2HZiNvQ00x08o8spDV6bvOcyJOsyreBegczqmQpcXC41H2ICtmXc7n324BftXGnZIvLqvT10s435U47MK6qzQpLgPgPKTyEbLTFlz0IiiPShchRxOymz99LRTSiK8qLkPVRAwu%2BTRgZQgQjs0%2Fh4%2FB2405m7qwCdwEDxiR2fXIgr5skhD%2FC%2Ft4HWrXtt5iT0mT0xEpqOJS8lDKykLHedmCV06ODncsBSvplGLNTjxyqmE0a3%2Fd6XdTf488LHH2Nw%2Fnio7y5hPbEJYiR1VI4GwuZ2KAuPM%2FK8%2F6BxB%2BZLhHfXX0IOVzD9x2tOBvvZ3jm4mGu9Z3E0KnqFAA7Kz11ViR8WlaKHBfNQN6kI44TCKz4fEBjqkAXacrn6KRvxODR7mkyVLlBzHXRqn0JJ697gPJc53xCEZ6gt5CEW7UPhUkQCxn23cXRrsmusOK6ToV5D5W9GK8lzMh5TPZuFdE9gB7sJ2Zq6D4EwY3WDLtTcy7c5G85tuY7HdpnHW5kLETmIXJi9F827zPRH3%2Bx5WZOjI9F0AiOS7LDxvw2C1pguCf9%2Bg%2BhmJj6clS%2BlJkNt4pPlcC6popSp42moA&X-Amz-Signature=175245fb0ed18d45651f0ff877d2735a11d3ca863cf4f41471cc2a5a613b5b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# >> 결론적으로, 해당 방법으로는 해결이 불가능했습니다.


# 관리자 권한을 부여해아합니다

🔗 [https://bebhionn.tistory.com/52](https://bebhionn.tistory.com/52)

```powershell
:: BatchGotAdmin
 :-------------------------------------
 REM  --> Check for permissions
 >nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

REM --> If error flag set, we do not have admin.
 if '%errorlevel%' NEQ '0' (
     echo Requesting administrative privileges...
     goto UACPrompt
 ) else ( goto gotAdmin )

:UACPrompt
     echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
     echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
     exit /B

:gotAdmin
     if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )
     pushd "%CD%"
     CD /D "%~dp0"
 :--------------------------------------

@echo off

taskkill /F /IM powertoys.exe
start "" "C:\Program Files\PowerToys\PowerToys.exe"

exit
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZML35O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCGnsqGxTDIVdwaLKbnibW1kIRh6aDS2i8nSke6Ka8qMwIhAI%2BZshsga%2F%2FZgNudiAXRStGJcYZhYoICtfQFEduQhmzmKv8DCCkQABoMNjM3NDIzMTgzODA1IgxgOED3KCQqu8o62ZIq3AOMkb2Kd5t8%2F2wv6LKaAPpS33wn4iap0NtBLxxMvNh64dPiyyJBNYlfqMGj1Oh2i70yFWa7Nv0JdqgbdZk5Tc5wzHNM3lSv%2Bx5WMyq%2FsYz%2BMlu4NGdbGHXcye4fKtVRq1MR6KT7FFCR0aqz%2FAXixIQmAThF%2BXfdQpYasyBkfNORoNQJAg12%2Bll4Bf2rFftaUPrwtvbZKqB0iSlmEJ8dLxM6YuT04eVFN5%2FSH1luAQn0lrRWLJWxmwoinqdAalPCfWVSlAOPhzKBKKEXNrUDFgV2HZiNvQ00x08o8spDV6bvOcyJOsyreBegczqmQpcXC41H2ICtmXc7n324BftXGnZIvLqvT10s435U47MK6qzQpLgPgPKTyEbLTFlz0IiiPShchRxOymz99LRTSiK8qLkPVRAwu%2BTRgZQgQjs0%2Fh4%2FB2405m7qwCdwEDxiR2fXIgr5skhD%2FC%2Ft4HWrXtt5iT0mT0xEpqOJS8lDKykLHedmCV06ODncsBSvplGLNTjxyqmE0a3%2Fd6XdTf488LHH2Nw%2Fnio7y5hPbEJYiR1VI4GwuZ2KAuPM%2FK8%2F6BxB%2BZLhHfXX0IOVzD9x2tOBvvZ3jm4mGu9Z3E0KnqFAA7Kz11ViR8WlaKHBfNQN6kI44TCKz4fEBjqkAXacrn6KRvxODR7mkyVLlBzHXRqn0JJ697gPJc53xCEZ6gt5CEW7UPhUkQCxn23cXRrsmusOK6ToV5D5W9GK8lzMh5TPZuFdE9gB7sJ2Zq6D4EwY3WDLtTcy7c5G85tuY7HdpnHW5kLETmIXJi9F827zPRH3%2Bx5WZOjI9F0AiOS7LDxvw2C1pguCf9%2Bg%2BhmJj6clS%2BlJkNt4pPlcC6popSp42moA&X-Amz-Signature=2368638bc88a35013d1a8fe76443a358ffadb932f61b058370ba35cc0aa84a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**



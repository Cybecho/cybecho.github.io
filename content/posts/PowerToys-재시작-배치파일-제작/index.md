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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/da0060ea-1164-4649-b769-e1e0503a39bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633K3F2JG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC4qycyTh%2BDy3hFWP7tpFUS8UOBuTO4yR1S%2FaMnfOEMggIhALJdSfnin3mfCzKJOR%2BVMZLONbBHakRV1hlVeslLjTPmKv8DCCoQABoMNjM3NDIzMTgzODA1IgzmVXkaFgdIGM1z%2Bl4q3AP3eLBTmZTSJ3lPlXScRWVPT7KDall4RV8GY6q6vcRY%2F7LoOVrMERcN1Yrl%2FcoqgkPGXMnGEQ3TEZLRfC1aI0FlcaOg2GIQVKAw1TwA4WKhkAhxzo2qxVeaSp9YZjNF6w2CtDZ5Rmx3KvaOWCm93nT%2BYiJ%2Bj168En8bz58NofEv7tpolQ82EY4RX%2B0GF6fLqJ3mcNYkk16pGefXXwzAy217l%2FIyPbZMWlkRLr8%2FM7MgQmws%2F6iDLARealfKeACmvRfuzxmbBmXJ0lgAHtITXuNcmCL%2BX68vKFxg%2FSNNDevWONVLc%2BT3nlUhF4UO%2FmeroFzzdOEKE88ZiJmfDuC3P8TZtoU9%2Bc6p50AOOp%2FPL%2F1c%2FCVCD%2FFOecH0mDr%2FBa3vRyj6l9eS1ql3scvPXOQO%2BorAhg6plaZT9N7BPC8e6Gew%2BUbSA0TVHrzHIi29ERXF9Ys6YVFTGZ%2BoLUWA4n831YDc4TrPtL4V7cjvXinAXcCZY%2BsDot7MdiJ%2FjB5M7D0kLJj1kGeAbqTaIRKyx601FvXMZzTBcC48pmdtBE%2FjnhDQB%2FlEc8MeX7xhB3RHqWWXNNmBIqnblkQhQ6yvE4dTEgo2GXAaP%2F4cK1mvRxo593pU8KZpdyrM%2BCErS5D6aTCS9ofEBjqkAduR4%2BxCpkfJLI3M2WB%2FVDHrsVTouTs8GWAonSL8havyiu4m4%2FX2d1FTjVHZvEwIV6PmphhA%2BU%2FNZ0chdBN0pkUM7lCptsveKC9fRrGtdxTgR2%2FNFSVkGh51TXDhWny%2FwiOlTbPFv8AI15IwQK0qx8OlVtXouyHIA8sh5LuUbyYCf6LzctVsCx2VWQlgGfOR8WmcUJ2Xo4IHFDtAud%2BsVdd1T5m5&X-Amz-Signature=97c204ff1691c77c1ac1efd21a7190a880f1262034a26202a760104cb2340fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633K3F2JG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC4qycyTh%2BDy3hFWP7tpFUS8UOBuTO4yR1S%2FaMnfOEMggIhALJdSfnin3mfCzKJOR%2BVMZLONbBHakRV1hlVeslLjTPmKv8DCCoQABoMNjM3NDIzMTgzODA1IgzmVXkaFgdIGM1z%2Bl4q3AP3eLBTmZTSJ3lPlXScRWVPT7KDall4RV8GY6q6vcRY%2F7LoOVrMERcN1Yrl%2FcoqgkPGXMnGEQ3TEZLRfC1aI0FlcaOg2GIQVKAw1TwA4WKhkAhxzo2qxVeaSp9YZjNF6w2CtDZ5Rmx3KvaOWCm93nT%2BYiJ%2Bj168En8bz58NofEv7tpolQ82EY4RX%2B0GF6fLqJ3mcNYkk16pGefXXwzAy217l%2FIyPbZMWlkRLr8%2FM7MgQmws%2F6iDLARealfKeACmvRfuzxmbBmXJ0lgAHtITXuNcmCL%2BX68vKFxg%2FSNNDevWONVLc%2BT3nlUhF4UO%2FmeroFzzdOEKE88ZiJmfDuC3P8TZtoU9%2Bc6p50AOOp%2FPL%2F1c%2FCVCD%2FFOecH0mDr%2FBa3vRyj6l9eS1ql3scvPXOQO%2BorAhg6plaZT9N7BPC8e6Gew%2BUbSA0TVHrzHIi29ERXF9Ys6YVFTGZ%2BoLUWA4n831YDc4TrPtL4V7cjvXinAXcCZY%2BsDot7MdiJ%2FjB5M7D0kLJj1kGeAbqTaIRKyx601FvXMZzTBcC48pmdtBE%2FjnhDQB%2FlEc8MeX7xhB3RHqWWXNNmBIqnblkQhQ6yvE4dTEgo2GXAaP%2F4cK1mvRxo593pU8KZpdyrM%2BCErS5D6aTCS9ofEBjqkAduR4%2BxCpkfJLI3M2WB%2FVDHrsVTouTs8GWAonSL8havyiu4m4%2FX2d1FTjVHZvEwIV6PmphhA%2BU%2FNZ0chdBN0pkUM7lCptsveKC9fRrGtdxTgR2%2FNFSVkGh51TXDhWny%2FwiOlTbPFv8AI15IwQK0qx8OlVtXouyHIA8sh5LuUbyYCf6LzctVsCx2VWQlgGfOR8WmcUJ2Xo4IHFDtAud%2BsVdd1T5m5&X-Amz-Signature=ff09cf1800b3eaefc11bb1b3ccc426fb69dad5b7fe790a9e958dfeaeddba83c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**
> ---
>
>



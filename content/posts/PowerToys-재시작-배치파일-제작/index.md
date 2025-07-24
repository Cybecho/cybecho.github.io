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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/da0060ea-1164-4649-b769-e1e0503a39bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD62WBS2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHeXncdi4EiXZ33A1qpzbO%2FoF%2FBopL%2FEcAdxpqnMvnxjAiA0su8MWiHO%2Ft609s45lE3vYjCeL6udVqTVer55YPC1mCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMEMqJiYkelN9vQ8JSKtwD760xs4GHdcBQg9XUeneu2xQ8mj3WCTLfmiFIZ8cYzr78%2F87cxgX6U0%2BAqsIl514miWZ%2FpPGiU6K5Nz0BeeXOSjVkpVOqSbICKXg5kcBErMBawMgsz2btHyCUUi3doJTsOlQgE4Gpn48bfZR1haVTdi0n%2FqrwCSwH8iretvNo4Vl54IBvGCnWkE2q1P5V2laHucrjRdGrHXrvpN6pcSEFOJgtsUcm21HNBsydzIFGBsFWe2hzD5bWT6R4c6rvyFlG%2BZ7Aoq2TqD0cy6fw9nYv8YrDH4zsAKkSDtlbXa%2FayY4PWfKtHM0asvHSsrqk5W5Mmb%2Ffegh2Kn4%2FTprY%2F%2FtSEyMcEMKh4CJ0jTGKnl%2FXoWTmp6gym2TKy4xJbYssGVRFIUTkymwj5P5mdzkrD8u%2B0p0nQSNAd0dfgPv8gLEB5MQINlNUr7ZFm4knlF2rKEM0FNV15owQlVK0HoS1JnzZ2lW7aoFG1TtGEKaOKANzyIdCcLs6YGKzFztOF4qi%2FKJV20OffBo4Y1RCJruuZR8MZtJeHOhBFHWKF%2Bj%2BnF9ABvNahBSL9EHllDK6F8Y0VDKZMr56f%2B6NE2xMZ5xZr1dk4j082kx4nDU%2FQFhMKIHNgmtgMktDfr%2FHWkakJIswiM%2BHxAY6pgGKBgNkEJ%2BuNlZ%2BxB2VWWkBPNHFvz1FQ5hwFJHAzVunXKGIhrF4VVNf%2F7eE2oitaycJrACnUZve6EfQcpgiLYt3ia66MUZJrm2SGKoIXBk2BoIgHFxOiLy93NMG4QOtKrUgB9b6hI5x60Jo4Qr6yYz%2BT8%2FjwkgVWoQRAPoftPh2f7FKttOJHYc6NlimNM2fgH%2Bx7S9Q49sPMYg9A%2FmlVcveLM3xHAf0&X-Amz-Signature=b5f13f5e6e28f4aa3c2e197a9236eb0e95ae5750c1a96f6cec859711e79caffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD62WBS2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHeXncdi4EiXZ33A1qpzbO%2FoF%2FBopL%2FEcAdxpqnMvnxjAiA0su8MWiHO%2Ft609s45lE3vYjCeL6udVqTVer55YPC1mCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMEMqJiYkelN9vQ8JSKtwD760xs4GHdcBQg9XUeneu2xQ8mj3WCTLfmiFIZ8cYzr78%2F87cxgX6U0%2BAqsIl514miWZ%2FpPGiU6K5Nz0BeeXOSjVkpVOqSbICKXg5kcBErMBawMgsz2btHyCUUi3doJTsOlQgE4Gpn48bfZR1haVTdi0n%2FqrwCSwH8iretvNo4Vl54IBvGCnWkE2q1P5V2laHucrjRdGrHXrvpN6pcSEFOJgtsUcm21HNBsydzIFGBsFWe2hzD5bWT6R4c6rvyFlG%2BZ7Aoq2TqD0cy6fw9nYv8YrDH4zsAKkSDtlbXa%2FayY4PWfKtHM0asvHSsrqk5W5Mmb%2Ffegh2Kn4%2FTprY%2F%2FtSEyMcEMKh4CJ0jTGKnl%2FXoWTmp6gym2TKy4xJbYssGVRFIUTkymwj5P5mdzkrD8u%2B0p0nQSNAd0dfgPv8gLEB5MQINlNUr7ZFm4knlF2rKEM0FNV15owQlVK0HoS1JnzZ2lW7aoFG1TtGEKaOKANzyIdCcLs6YGKzFztOF4qi%2FKJV20OffBo4Y1RCJruuZR8MZtJeHOhBFHWKF%2Bj%2BnF9ABvNahBSL9EHllDK6F8Y0VDKZMr56f%2B6NE2xMZ5xZr1dk4j082kx4nDU%2FQFhMKIHNgmtgMktDfr%2FHWkakJIswiM%2BHxAY6pgGKBgNkEJ%2BuNlZ%2BxB2VWWkBPNHFvz1FQ5hwFJHAzVunXKGIhrF4VVNf%2F7eE2oitaycJrACnUZve6EfQcpgiLYt3ia66MUZJrm2SGKoIXBk2BoIgHFxOiLy93NMG4QOtKrUgB9b6hI5x60Jo4Qr6yYz%2BT8%2FjwkgVWoQRAPoftPh2f7FKttOJHYc6NlimNM2fgH%2Bx7S9Q49sPMYg9A%2FmlVcveLM3xHAf0&X-Amz-Signature=a82b361f2eeb7322bafa3e9d7e78daeb92ab10ebe2754ce2294571077af9ad2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**



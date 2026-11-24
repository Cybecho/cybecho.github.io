---
title: "PowerToys 키보드 매니저 배치파일 제작"
date: 2023-11-19T00:00:00.000Z
draft: false
tags: ["WINDOWS","레지스트리"]
series: ["Don't Hate Windows!"]
description: "PowerToys 키보드 매니저를 위한 배치파일 제작 방법을 설명하며, 소스 및 타겟 디렉토리를 설정하고, 파일을 복사하는 명령어와 관리자 권한 요청을 위한 스크립트를 포함하고 있습니다."
notion_id: "59ed9abc-2f7b-4c21-8816-66330e7c4ce9"
---

# PowerToys 키보드 매니저 배치파일 제작

> **Summary**
> PowerToys 키보드 매니저를 위한 배치파일 제작 방법을 설명하며, 소스 및 타겟 디렉토리를 설정하고, 파일을 복사하는 명령어와 관리자 권한 요청을 위한 스크립트를 포함하고 있습니다.

---

🔗 [https://ngo.migrantok.org/bbs/board.php?bo_table=computer&wr_id=233](https://ngo.migrantok.org/bbs/board.php?bo_table=computer&wr_id=233)

🔗 [https://ansan-survivor.tistory.com/373?category=458475](https://ansan-survivor.tistory.com/373?category=458475)


```c#
@echo on

rem Set the source and target directories.
set SOURCE=%~dp0
set MODE=%setting_Texshinobi
set TARGET=%LOCALAPPDATA%\Microsoft\PowerToys\Keyboard Manager

rem Use xcopy to copy only the files in the "setting1" directory.
xcopy /y "%SOURCE%%MODE%\*" "%TARGET%" /e /h /k

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


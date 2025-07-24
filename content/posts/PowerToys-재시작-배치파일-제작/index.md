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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/da0060ea-1164-4649-b769-e1e0503a39bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORMANKT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFrxfEFOStcia6FvhFXhnybWznRfpsMsFwbn4IbYDXUDAiEAxElLpNaAi3zkijXnPc0PnrlkA0qyx7pScgoJy43HXPoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAGUf1t%2FvcEOQiTb4CrcA6lk08fParLiTqnPNaD6IH4z2bsjsFH90GpxwAFe574nGKRxEgEBofH%2BAqP5Bk2eBmR2%2BbRPB1hID5mi2e1L2GCyFCayWqdN31ARTl6nZLOvGZ%2ButUIIB3PEcVYBLK7oL1VaVQiT7hk0E4sywqJY%2F8E6LiYSMmSK6zkUVO3l4JkeERjQDJ%2BXuGrKtUrbwjZg8xywaBxVAwy1pwQOgPqTDRw26NlMRG%2FLPdS%2FBiP%2Fvy6n5efvLmLxdMBLu08Ic8YXgiXsC5eS8UccM5DBOPimDTGoGz%2BXV6KYXNSmyk4HztLPopS4f2ixcVo4XUhMV19UJgnNOeEoM8e%2B7Yd2CoaDCGLH%2FJuJUN8Wc%2Fd28tuQ3mDgN5reKHUzmKYs%2BZuZnibDagkLLqFAofuicdpfauY4RERdX0%2FzQxc3ajVGz%2FEgGXFf4IzeOE6dG3h%2Fsw8vP0zSaZKP%2BvoOykvl2NIJPPbmvN4%2F7HL6ItIfKtM2%2FrqH7fGkT8iwcDU%2BccGpqSe%2BqdYWjnHd%2BjUNSWc7mYzGnkqf0RFLGIjPnM0SECWg1RlCqiGUEnBBpwVwXhzPz2hWa1S%2F63LU%2FenW76Z%2B4fthkdzBU%2BM7sVkT9gVC2mxRhoLStSlIQACXufpj%2BqimOLSrMIO%2FiMQGOqUBCumiTX6f6x5jtbdKrIrMq3YIRrIWP2nIeWyVpq%2B2Ez1J%2BFl%2FsC8gu2BOQW7B%2F5SMfTH%2FZPpo4LaCwBC9TjIvUsqPm%2FM8pPljmvkh3pqcKG253NalZIk3MpAMs0rH59OBuQLCjx6PUrSFfBfCmCoy6Td7GQkvEQjV%2BaKF4akve8BDTrf6RzeePBUOXTch0etaLY1Zcjo%2FWlh3bZmGGCQA84YU2O37&X-Amz-Signature=28e46e3a48835e9b8d058698ddd6f7d2a1227577824202b7bffe5e7c2935093b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORMANKT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFrxfEFOStcia6FvhFXhnybWznRfpsMsFwbn4IbYDXUDAiEAxElLpNaAi3zkijXnPc0PnrlkA0qyx7pScgoJy43HXPoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAGUf1t%2FvcEOQiTb4CrcA6lk08fParLiTqnPNaD6IH4z2bsjsFH90GpxwAFe574nGKRxEgEBofH%2BAqP5Bk2eBmR2%2BbRPB1hID5mi2e1L2GCyFCayWqdN31ARTl6nZLOvGZ%2ButUIIB3PEcVYBLK7oL1VaVQiT7hk0E4sywqJY%2F8E6LiYSMmSK6zkUVO3l4JkeERjQDJ%2BXuGrKtUrbwjZg8xywaBxVAwy1pwQOgPqTDRw26NlMRG%2FLPdS%2FBiP%2Fvy6n5efvLmLxdMBLu08Ic8YXgiXsC5eS8UccM5DBOPimDTGoGz%2BXV6KYXNSmyk4HztLPopS4f2ixcVo4XUhMV19UJgnNOeEoM8e%2B7Yd2CoaDCGLH%2FJuJUN8Wc%2Fd28tuQ3mDgN5reKHUzmKYs%2BZuZnibDagkLLqFAofuicdpfauY4RERdX0%2FzQxc3ajVGz%2FEgGXFf4IzeOE6dG3h%2Fsw8vP0zSaZKP%2BvoOykvl2NIJPPbmvN4%2F7HL6ItIfKtM2%2FrqH7fGkT8iwcDU%2BccGpqSe%2BqdYWjnHd%2BjUNSWc7mYzGnkqf0RFLGIjPnM0SECWg1RlCqiGUEnBBpwVwXhzPz2hWa1S%2F63LU%2FenW76Z%2B4fthkdzBU%2BM7sVkT9gVC2mxRhoLStSlIQACXufpj%2BqimOLSrMIO%2FiMQGOqUBCumiTX6f6x5jtbdKrIrMq3YIRrIWP2nIeWyVpq%2B2Ez1J%2BFl%2FsC8gu2BOQW7B%2F5SMfTH%2FZPpo4LaCwBC9TjIvUsqPm%2FM8pPljmvkh3pqcKG253NalZIk3MpAMs0rH59OBuQLCjx6PUrSFfBfCmCoy6Td7GQkvEQjV%2BaKF4akve8BDTrf6RzeePBUOXTch0etaLY1Zcjo%2FWlh3bZmGGCQA84YU2O37&X-Amz-Signature=9d79259b3876239bbb10330f163734ad822a9522056485bee2e2a4dbd4167d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**
> ---
>
>



---
title: "윈도우 패키지 관리자 scoop 설치"
date: 2024-02-19T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "Windows에서 Scoop 패키지 관리자를 설치하려면 관리자 권한으로 PowerShell을 열고 실행 정책을 RemoteSigned로 설정한 후, 설치 명령을 실행해야 합니다. 설치가 완료되면 Scoop이 성공적으로 설치되며, 'scoop help'를 입력하여 사용법을 확인할 수 있습니다."
notion_id: "85c8c416-5270-4cfc-9b25-a72a32ce190b"
notion_url: "https://www.notion.so/scoop-85c8c41652704cfc9b25a72a32ce190b"
---

# 윈도우 패키지 관리자 scoop 설치

> **Summary**
> Windows에서 Scoop 패키지 관리자를 설치하려면 관리자 권한으로 PowerShell을 열고 실행 정책을 RemoteSigned로 설정한 후, 설치 명령을 실행해야 합니다. 설치가 완료되면 Scoop이 성공적으로 설치되며, 'scoop help'를 입력하여 사용법을 확인할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7a80df29-7365-4967-83a0-257b8d07c628/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYOJHN2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAoCUk9WFNCyDrBWVY%2FMpj3kJX2Evbrb%2FIq06zv3mRQ0AiAt7oeIu27Dzc8rkM0wKLyfXIyw34GTdxilZ%2FP0rUSS3Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMMRXE%2B5yST4KgKmcBKtwDg2NGNsCwEKjToECn%2FNyizzUmWpTKil9%2B0JtXP1EdaNvmSVXGIZu8fD2WO30%2FqtZj3upTKs1GcSUihDkoXLqBLVxthKSOCqeHMeJkLGsRCJD9YoefB3DwaFCUBneGWBryCTvnhcu0zJG4uDGHT9AGJgvDDoefciDkzU3efZDnp7P97t3MvznDQSrXEWHV3PzbIGW%2F9VgzD8d5AQceXYYlHIwS0Rh2pa2dhqJXVdA67DpvpkUUwgj3E%2FOaSdum7EwXf9A8yaCv%2FbfW4uNaMzLnZqIGVrXNPWN7IKPH5yJMoNepHZ6UmlwUo9DcryqW35rAQTY%2F6EWMEPh9QXimuYOFJDRFP61IlDjmilba2FCMFkSw19UkAdTXEl2edgO2dEW8VRs%2BPA19VGEvMnUWFsFNZcw8nOV6nxdxrg23zpxVOMcWRITdYVNg8G7uGdHoJJgf8uyLIsOCoOAXHr5dVzf6IcsuPqBqArZ8Tk4VnIyrvNWGFFVFBo0vyuOvpBEs%2F8Ce8A10AziZ9aLKdDt7G%2FJGqYoHhkVPPyo9baQQ%2BqIQxgu1ozsdhCChZtfBDwx4ycPg%2B5%2BNl57krStvF8%2FDmXKDkBmwAmWj9COFax2hmMjRWa3cyi%2FN1tbqAG52ZygwwZuIxAY6pgETjiIWmh9pRApfLoFr25GNnL8vPYH%2FXjlueRHfey861IJanxwM8YbMlJ58ExyeGjsXrJxcQZGkwkek4FRl8GNa5HzcfTWLx5tW1Mp8IyAPmNDbOyz7QoT3mrBADpxfJUp4IfL4LgQyLy9P4RJq%2FqB%2FRSIE9TapQNUjEYjRLo4oGDixn3786c9q3WV6E8x20tcFwRS%2F5Isiy3dQRHkB15uFyTeh%2FUZ2&X-Amz-Signature=51b06803cdb227914880f96e7de5c84acf1c27dca8ca10804ca9ed37f99dbea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## scoop설치

[https://scoop.sh/](https://scoop.sh/)

🔗 [https://orcacore.com/install-use-scoop-windows/](https://orcacore.com/install-use-scoop-windows/)

# **Windows에서 Scoop을 설치하고 사용하는 단계**

[**이 가이드를 완료하려면 Windows 클라이언트**](https://orcacore.com/tag/windows-cl/) 에 로그인 하고 아래 단계를 따라야 합니다.

여기서는 관리자 권한으로 Windows 10을 사용합니다.

### **Scoop Windows 패키지 관리자 설치**

먼저 관리자 권한으로 PowerShell을 열어야 합니다. 그런 다음 PowerShell에서 아래 명령을 실행하여 실행 정책을  **RemoteSigned** 로 설정해야 합니다 .

이렇게 하면 인터넷에서 작성하거나 다운로드한 PowerShell 스크립트를 실행할 수 있습니다.

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

y를 눌러 실행 정책 변경을 확인합니다.

이 시점에서 Scoop 설치 프로그램을 다운로드하고 아래 명령을 사용하여 설치할 수 있습니다.

```bash
Invoke-Expression "& {$(Invoke-RestMethod get.scoop.sh)} -RunAsAdmin"
```

```plain text
Output
Initializing...
Downloading ...
Extracting...
Creating shim...
Adding ~\scoop\shims to your path.
Scoop was installed successfully!
Type 'scoop help' for instructions.
```


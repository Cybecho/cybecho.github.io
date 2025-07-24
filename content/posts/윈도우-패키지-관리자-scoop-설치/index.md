---
title: "윈도우 패키지 관리자 scoop 설치"
date: 2024-02-19T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "Windows에서 Scoop 패키지 관리자를 설치하려면 관리자 권한으로 PowerShell을 열고 실행 정책을 RemoteSigned로 설정한 후, 설치 명령을 실행해야 합니다. 설치가 완료되면 'scoop help'를 입력하여 사용법을 확인할 수 있습니다."
notion_id: "85c8c416-5270-4cfc-9b25-a72a32ce190b"
notion_url: "https://www.notion.so/scoop-85c8c41652704cfc9b25a72a32ce190b"
---

# 윈도우 패키지 관리자 scoop 설치

> **Summary**
> Windows에서 Scoop 패키지 관리자를 설치하려면 관리자 권한으로 PowerShell을 열고 실행 정책을 RemoteSigned로 설정한 후, 설치 명령을 실행해야 합니다. 설치가 완료되면 'scoop help'를 입력하여 사용법을 확인할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7a80df29-7365-4967-83a0-257b8d07c628/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WEQ67AU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDYXM1TbQ7O5kw42aqrK4ngSqvU14%2Fe6JHjvezOzPlr1gIgbK%2FDgfCHQhvR21ACq5RcXpkNOeeYnDTIKw5NAAwtMLIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP%2BoAJudTw3Gp7RGhyrcA5dNhUtuRWwHPu%2FB5aKsm%2BfUQd1LFHdeMwyZGaILszHdEiIMe%2BFW58h%2FyBdoRfl0sg0bPxKHe3KX3qXgmRAovRhvgVGNg11wSe0y9%2BKQg0sAt9IXiqWKev8RE%2BfkKf5H14tfFwLAquZKUCnk5HPpeCpmplGTH7pocTe6b%2Fkcqsu%2FjA5wtBFcMJsJZ4uJhHgT10luxUfDNPd%2BEoOzO7XmOCkadrMCtkPnlqJxynwlnj6Pg%2F8ShPj5WTFhr%2B8ogpi1oyrgHEHKOS13JPwQK4tdDePgh2NF%2FzoOA%2BUc2PVB9ofVc9AY1kGxb85AipTgBIdELE6YL%2FYF8I%2FwDMbK7Cw99qptahmpbOogWfANis3%2Fg93bTiN9gIcJgMT%2B6fZOV%2BX1280wnkjazlggrg%2By2vw2c0gz2gk1kz7ZqeHSNHS5sYFf2sEzvDxxLbSHojUWHBBFc%2BgH2vw0ZykVDhmp8wEkatkrUTdzM%2BgFt1YtEyN8o6NiEbDD0kHxlbDgse9inYkTOA3T9jfpMRNzRzVKUlEIsTykmNziVGUMlZ1kZMKloJExl41sEn3L0NRlJyoSeZc4aGv7HQCNEagNZmiVKufPKo7GHLY%2FBbHPdoe2jwZGoUCHpzkVbbS0YQ88bXvTMPnPh8QGOqUBqANrgb8zYymxJ4Y4SYFiD3ahRPIhJex8ukyGY1lbbmGl6iSLi7bc3zpFMs7OajCPiXhBNVWFZ9ulAKFjhKPuuydCY7%2B0Zewevg391eavpWY%2BtNUuvKJb%2FJgkaiW579bpVgjNcHe6r%2BD3Wya6zrvdpAtMpJHKMHkRpjUuhsgBkiFmaZw1taPBZynxCQtBaZ9G3wqIsYG1QX3f1VpQghehSV4hpJZV&X-Amz-Signature=75153c93335353183fb2012140de4df43b2e0ad7de08380cb954cfbf2f9c86c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


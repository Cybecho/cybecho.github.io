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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7a80df29-7365-4967-83a0-257b8d07c628/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSFGR3FB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICQ%2B4WjpVprOc1pFPoBkY2kyuR1O7q2HMnMXuln0DkxKAiBd3vlQ4pPMe6wsFSlHy%2FKOGd3FsHuZqOWelXjSPjYFwCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMG6V3QEWPo5lbbj%2BIKtwDRKvlhjXoELv4S%2B9mh34fug5MMBxwo6y%2Fcv1qRZPjX8nQaae43n5agfWQc4bbnS0%2BLLvAPQOLBRj9bU%2Bv%2F32VURo9bGOzyv5QPM%2Fpwo%2B4ihqkvxfjlaZYBx3PTTbPxcBfNzKZaprk5uAOAEOu2fZ17hHx4kVOojCbju6WHvT%2BVVTHKPEZAX9Iti5aGAlx2mu56QHxyLD7K%2FEUbhEwq7tAtdZXQ48EUZemthWCtENVaNNaRUPAVYfsGxeqXZGJfCsq%2F%2FMeqXxiQYTn0%2F38jyI%2BJZCW2NgumtWHDYF5bTrmDzJJMmh%2BoW%2FHMe6updpmJeIJ81a0S1IrYoav745NLvUJsUjzRt%2FkpBYSjS9P9Q6WAxkLquddmiui1mV3PxAUAME4juvQunIxcAowM0bet2zqMVuYLrBtclZAKXwBX2aFNphqxgn35kYOsiQjFijNDI5WBdodAT68XEjeSDAMZFvYmhmfMZN%2FETa5EDYHJzHU1UeOgzoyGkAJSwARRxFBJbgSltBFWjlbrb6SlXfWuZkCyk6KkAPBM7%2F4iiEk86WW3GvPJRnz8Ao7HXKnEmYLg2nLGaKpIbfbjVrTa%2Fetyr4iCF%2F%2BYivGvx5hzRKhPFBcFJYM%2FFS43Qgtpu%2FWZ3IwsvaHxAY6pgH5%2F65BJJ%2F3ppdejVUR4NS9MLRjvay5hMvJ%2BIMW6Mp26q1kKAHsZUdleClVopVmgfHdKNPV9eSG8DTWYbyKbPj4O7KZxebjarM521VaIuZe0xXSP0Qd6M9woWqz%2FPZWpmotaaBO0xkJDgoy8nvEiLMT1qENgcu2Wfqxrur4r1tFtgbQkKzmNy3GHZ%2Bu4GMcp1CJZpcH49baCjWVIMG0BY3LqVmrQHU%2F&X-Amz-Signature=24f36489b6a09ef0cae62364245517095025fe481fa9a111a437c18d59782ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7a80df29-7365-4967-83a0-257b8d07c628/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56RWDGG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFu1JTKYMbREGFwT5z%2FmnuyPbwPhty%2BRED7J86ZEwtjbAiBLmRI0v041KLgh33ikm9%2BrXlF%2BS9sVOp5qjlGGs4giRCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwNlui2JEdG2aHO4WKtwDME04zsqbhTFBNwJx3O6racmqezOaMhCLYi%2BlZ7Xrt3rPTtCYZ35P4p3aqCDV7c9595jtBf%2B8RElCjOwOw2S5QpnwdmfEd1FLCpizJVAe75HwFlHHwOQC98VcZVP7j5ltDx6UlqvO5XQw977W74LraI0wYqxXRl5Y%2FnPkAsIjLZnipQOZiaaDP2l1YS%2B426m0li23fX9dpKsh84Wn7F7%2BOVxYR6wk5tvxQkQNHhawamTyGKDFB2bc7bXJJlQzwlJzs%2BEOkFaeAb%2BRJmIAtqrztI28bk4Y9KvAUXUVwg7ZKpmcUzkwpSPtaL%2FRQ4irVE1rd2KG9zvTv2wIj9q3Prsa4JkDqb1fRIQ%2FRX3CIGIsnyr2VZ0FA21I71zn6ZyAcr6Diy7FPtcGknWE89lHsXdDMk6PFa1pa61RLsuuk3ys6yn7BsvMWc9gJOjDyW7lUNw28qTedjFBVNGAoKIaSjpgJ6FoTITgnTfxhQAdomEBrTErbkmRoBjoufuEQTTRjatiqp3WE%2B3BtGNdmM64aWcHl72gUpsDXVwhvouur54jMBgXtkDMRPlXlUXf2ohsgVxuc8%2BFar6e9uv9DrODZjeQtGbfzm%2BjqB6fpcjD%2BI0IsgmHVWRWUg2MjGvLDYsw2s6HxAY6pgFl2CBzSTOq0OWjwr3odOtNSfuHnI9Do9BSJyffTb0nJy6ymdNYFVi0R5sWwNAeHcyrxKMMhm9k5940MM9H5YNYFnPahqB%2BKiFGc7oFM%2B6dRfH8kSc7tzkdB33uYCrt1lmJj4UCD6LpKzBTG1Iebu8HeKlWZBkNHNckzKFsdAQ0HE5mkCUqIgcKTCKRD7jj1k1DGgVr4cQxm8pUIOXGEGbzE8ScQjez&X-Amz-Signature=069c1b4921f2156b268e78b810b0a4be7bbbe64c63ce611779ccbd913b092196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


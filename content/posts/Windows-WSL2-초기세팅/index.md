---
title: "Windows WSL2 초기세팅"
date: 2023-09-11T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "윈도우에서 WSL2를 설치하는 방법을 설명하며, 관리자 모드에서 PowerShell을 사용해 단일 명령으로 설치할 수 있습니다. 설치 후, 리눅스에서 생성한 파일은 윈도우에서 수정하지 말고 리눅스 환경에서만 수정하는 것이 좋습니다. 또한, 프로젝트는 윈도우에 저장하여 관리하는 것을 권장하며, 파이썬은 윈도우 스토어에서 설치할 수 있습니다."
notion_id: "13ed931f-1f35-48ae-b236-afd1cbda26d2"
notion_url: "https://www.notion.so/Windows-WSL2-13ed931f1f3548aeb236afd1cbda26d2"
---

# Windows WSL2 초기세팅

> **Summary**
> 윈도우에서 WSL2를 설치하는 방법을 설명하며, 관리자 모드에서 PowerShell을 사용해 단일 명령으로 설치할 수 있습니다. 설치 후, 리눅스에서 생성한 파일은 윈도우에서 수정하지 말고 리눅스 환경에서만 수정하는 것이 좋습니다. 또한, 프로젝트는 윈도우에 저장하여 관리하는 것을 권장하며, 파이썬은 윈도우 스토어에서 설치할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLM3EZXL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBZRrO2jcsLc43a5ylQ%2BUeibP%2FxYk8SWHjKfgcsdoUKOAiEAj%2FDFRN7Hm31Gk3jlJroRZsnv8roFLwRDQZuIrRjW86Aq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOzFnDTvfbppS52bSyrcA0cw359zhgWIZmovr96pWLpyARVOe%2F2hDPYJeZlYzrirsLEuFvx%2Btb5Jba6Gq4ToJA1SK1Gi64Jzxc1E8vHpZutQ3cdgjTZ0nV1ZK5RS0OR9C%2Fj8Nvt88IA%2BmsYWuCyNHQOsqhdMOWNQtMVwptONYVM5PouRU8eUm5CaYxiGin2ANo6oUm5%2FRUVyzbPqk5hBHSs8FIeiTYHsCObXvGS6BXNlxVQwbTfGYW7s20PFTbepaIel1pciUzBqmapcuTkuyidkXzHioiShYLYINQhVSWVaszgWoN7iENz1eOgMMY1bT%2BU7bmCuJxqx0UJMYRcSXcAEQjdVZtQfMKk2QUf2omDEIoDaRY5pevw0WU1H6LqjF2Qr15a0TXdsDf3EO%2FNEU64r7lWga%2BqlcZT4yOW6fHC3us5oNnJmHmnQutbIh7PKE858LG4zHSW%2BBH0IUA%2F7K6M%2FOPp%2FTkdbLGwPkufv%2FEI4x2AiRF2ApfefW7iRuxQYL%2BVA1fesFpvjRlXe1tkvisWeGAR95Lq%2FjR5I6bX8n%2BBOP%2BITY9gpHrsz0%2FXOeINMtVOkzKfN7e4Zx9vbOtwlmGdLvKcX8tYdyWlJ5wf%2FytZF4eXanD5jDU9El7S6Ai4tTIziFS1s8b7xecH3MML1h8QGOqUBgJwbKe73ofqLbhT16zLe2JaZSMuAW34a79IZepJWylPjgR%2FjIzc4h2TorwQ52TWGDXCeephO%2FX8NO4X3O4o%2BAQb4k73ocpTqeM5Hw7El5%2Bc90PHCEoWOjS3XAMI%2BLY6KAiTR5kNCyZNXLyljTX5l%2F4nKHYiDuOiJQepT6OPAcC8j9Ggs%2BxjY1GwhHNKx8bwtO4%2Bj1TCz7UiKCbf6WXr0gNG6ZTOA&X-Amz-Signature=281ce486d1f51b7907150b39e6fc22caf4ff2f40d52b487b99efef096363a1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://nomadcoders.co/windows-setup-for-developers](https://nomadcoders.co/windows-setup-for-developers)

🔗 [https://learn.microsoft.com/ko-kr/windows/wsl/install](https://learn.microsoft.com/ko-kr/windows/wsl/install)

🔗 [https://wikidocs.net/205061](https://wikidocs.net/205061)

🔗 [https://frenchline.tistory.com/18](https://frenchline.tistory.com/18)

## **WSL 설치 명령**

이제 단일 명령으로 WSL을 실행하는 데 필요한 모든 항목을 설치할 수 있습니다. 

**관리자** 모드에서 PowerShell 또는 Windows 명령 프롬프트를 마우스 오른쪽 단추로 클릭하고 "관리자 권한으로 실행"을 선택하여 열고 wsl --install 명령을 입력한 다음 컴퓨터를 다시 시작합니다.

```plain text
wsl --install
```

```javascript
wsl --set-default-version 2
```

### 다음 명령어로 설치된 우분투와 wsl버전을 확인할 수 있습니다

```shell
wsl --list --verbose
```

### 다음 명령어로 wsl 버전을 설정할 수 있습니다

```shell
wsl --set-default-version 2
```


# WSL2 설치 후

### 다음 명령어로 사용자의 윈도우로 접근할 수 있습니다

```shell
cd ~/../../mnt/c
```

리눅스에서 생성한 파일은 가급적 윈도우에서 수정하지말고, 리눅스한경에서만 수정합시다

추가로 프로젝트들은 윈도우에 저장하여 관리하는것을 권장합니다.


# 파이썬은 윈도우 스토어에서 설치해도 잘 작동합니다

🔗 [https://www.microsoft.com/store/productid/9NRWMJP3717K?ocid=pdpshare](https://www.microsoft.com/store/productid/9NRWMJP3717K?ocid=pdpshare)


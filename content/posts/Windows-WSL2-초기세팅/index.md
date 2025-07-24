---
title: "Windows WSL2 초기세팅"
date: 2023-09-11T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "윈도우에서 WSL2를 설치하기 위해 PowerShell에서 \"wsl --install\" 명령어를 입력하고 컴퓨터를 재시작합니다. 설치 후, 리눅스에서 윈도우 파일에 접근할 수 있으며, 리눅스에서 생성한 파일은 윈도우에서 수정하지 않는 것이 좋습니다. 파이썬은 윈도우 스토어에서 설치할 수 있습니다."
notion_id: "13ed931f-1f35-48ae-b236-afd1cbda26d2"
notion_url: "https://www.notion.so/Windows-WSL2-13ed931f1f3548aeb236afd1cbda26d2"
---

# Windows WSL2 초기세팅

> **Summary**
> 윈도우에서 WSL2를 설치하기 위해 PowerShell에서 "wsl --install" 명령어를 입력하고 컴퓨터를 재시작합니다. 설치 후, 리눅스에서 윈도우 파일에 접근할 수 있으며, 리눅스에서 생성한 파일은 윈도우에서 수정하지 않는 것이 좋습니다. 파이썬은 윈도우 스토어에서 설치할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6WECLI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHT1rgrdiMLKRVONHmi3RiASJohulp5VhRp2SDN4Eg0RAiEAkx2rYVsUhrSnrd3KHmEukzfCuPMZGBtyVC7yXWbCzXkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEYnhp88XxJUFua3VCrcAxDFt5w0bE9Jly07QQCoEGWF5tT8T1NUX2FfbiU7qTHnTQI2S91tkugLjWC%2BOHMOi1YBK%2BSo%2Fyc%2FrmDsEc7EXlhkJGKnqTzn80mw%2BSH2MVGTQkK0g23Vgn39SrjOLdh%2FUk2tgy9Ou6mMHkjMlFToqpQecBZxx%2BVaRjBlhYgkMy3Bm5zLJaqB7%2B%2Bi6VM6NXOkfa6HicgdmTNiXqLRRp6tmURx2MpfusgvHg9y98pWQaiCRdYfgDh4lm8am1oiUENf3J8Y174Oeyu0DqIweIUcQ0R2L0gn2R6%2B%2B3zo%2BIHjxLuEUaT1v8TWOi8gew8Yo8Ksy6S0KTziSgc4EHzv%2B0QWtmX4WAtjsMSBBhF7nx05OXqId%2FW6YHOlbFPkJth6STwNlVNlTjKfNIxf2akgeEq4Y061%2FR%2Bj6xg%2B7Y5EzWL%2FlFHSuTLCcKROHcGzsBNCJcpQTrDOpLIWHFAftuFnAnVjLOoImrbJcBDHiNSPQsP4E%2Buh9J3b%2Bg%2BS7g9ADBzMHLG%2FqMA1KlqBJnB9%2FP8NrudIyVuqdvH99CpHMDlBTxSQ32N7tVFh5tnn47hazsv6AuncT2GcAmLP4D6ArFqrJUCOekKZIh2DPc2%2BEQQw0p8naJ5DLCsp1WIK2OSrr3eiMLibiMQGOqUBsxVQOyoPsOF9UrOG7gJHn6Tlcu781u4POlnN7sQbKE5uPBsGOZfJRSHAwDqsQ%2FPE%2FP3BBNZ2r30tn6RKRaXqphsICTU%2BPccgO2qDpyqZBvdxLHP9aPZOISnc2Bum%2BP1Pp9CK3ZJsMr2R3V9ZJu%2Bc1D3%2BnAOfSqOlmN6VwpabT%2BD2aBgX9EI%2B4ddBXOQgIpAH4%2Fdz4DCUGZSqUTHV%2BiE7rHpGFbin&X-Amz-Signature=6bbe62a1b3dcf9353572dc90081fe68aabef0d0c2d4d40233e32eb1120176537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWAWHLX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDiMe1l8uqSAkKzdXEvCqr8gMell09jxNBpHe3zDiFJigIgWwEJB3wZEBpgXxu6oBBCge1Mx7G0jNC81%2FPQhS%2FxkEoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGXjHrBjCWhflwjDyyrcA%2FBmoq6jv%2Fh9hYp3mTuVn0r1os8n3beN6nh85ZNDsdt4ZmaHZMMtVWZnj%2B6cKS%2F%2F7m%2FKQSp03I0RDQS%2BINhdHd5KSN20J5Bx%2Fp4iDWjangphgEhfYJi4E923DC9eJ02FKUOgRfwUh5XAuPIe4rJdI1kaFogX%2FMr%2BO479rUU4o75ejwc7W0w24JTmFjnzEPISd9A5m0T9HNzWVjPT2ZDWHmyLPOmdiMe1FOvgVZ7lGAYs77D8cu%2BvnUQVH1Cbk6G6D0smrJf%2BlgBxZjCAlZUX%2FxPVYyDMwKhyRCr9btDb67FY2yhIDTAwVVNuByidYlmAcnof2fUUwiOnwNgTQj%2FPVsocB4pgfozIRGPlQd3P5P0m9T81iVaVribyB8DviB9h510UJcUQrr1gasuJGPOgEaFhQtyKlLYpxTuHH%2B3tVLBPmJ8GgbLkI6k1Ag8aBbSMEMUu866Rs31eOCjbnquhhauMt70tmiJKKuvIxL%2FXXYbeil1eoREXqS0sAscH3gNh5emepQgAAPC9BkEsNmT4zeByHGCn1FJC9QPed35fWn9AHta6d8HDeOkRWSgpnx7sCYzmNQkFh9eRsbPD0Ie1XNFrjlM3%2FmNDCQvtuVSqZ3A4TymqzhkFSKU6MyjJMIjPh8QGOqUBoWFJzK1jK%2BvlLDd9wz7cyESZ5RGGhSQkSxi04K2oE7TWJbD2qv3536UsY3nZYFhsUsFtIZpyS%2Fa6b9FsRkP1BtAUWRXQOpI4UIbH%2FxIZDEXlCkYbGr%2Bq5QX26Dax6If%2Bb7HF1tdlD7Tb6IuWvwGb4jH%2FVju3kr%2FSoFMz1aHKFUBx3uYjBRqhzMGFge%2FuI6C2MSB8SRUnJeXAacqmyaWSavLwVs44&X-Amz-Signature=b59a6284b5a4356ab32ceef894b9a96106886430dd79be178180a4ae9139826e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


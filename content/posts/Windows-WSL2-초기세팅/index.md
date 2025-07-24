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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKNPSMH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIB8z%2B%2BJx4wFxGesNILhGl3sfWkY%2B7XYhQnJx6q4JPEWjAiEAwd7Vv8fsR5DSqZdAMbJJ1w4u9yb6jtN8uJYAaOz8WZYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFkxW8ukzQJXmV43aircA%2BFFBiTzHq%2BJOXmOFNTTnCEL4s8B335lqphlU%2FzaZbNAzZ%2FrKCDc1e5UPW3glkbZTFoniun4GWZNyZU3SaonKmIqIQPEi8298UtYJQthZIFCms6iYG8Ks4Desmiv1d4HmmPddi%2FqloqigcejpVA3HluPhJxktL8QItvI%2Fknofobc6xLqk91luU3J906c8uQ%2BzPrkcZ8HSKA7z7lINoYsjRuR983KixWrr7luF6baxSZvdyMq%2B6vJreCaHpRpd%2Fq18wbHNXy3aIYk5gbE%2FMEiK8mRPLwz00kExRMiTg%2FquMYH%2BOagWXZzV35e0dASvyFfqcralp3FgzhqOW41zocNExwHiJLTAn9qcz1FpK7wLvG8lOIbzkZbR%2F9knErphCL7ki89WMGnarJhlhkq1TlhasuiysecMI5bNZcvCa%2FGCvgBS%2BWg0O7HKs%2FHi3oT7E%2FVh7ZQ1w2caIi%2B49budd9Dv0Bi6wGgFVgy8QY9TUEmQonxRLxPBRh%2Fr6WwB3H9LQsWRDc1845HDOdCssWUN1GI9AH5s6pktj77ab7V4yM%2FVmD7vNFlDN791zmzQQCTAwPgnEdYumbWvGs9jaWTsD3jucpIPkA3Q5tmfcmcSV0mDyv3UPaOUqQ8Av67VG7mMIzPh8QGOqUBcOvweU9cQShCBHuwCmhCo3%2FvFkFi3T4Vgsy%2BdYMxcp75pDoIs9wxKgT85Vf2X2K%2F4EGBI5GNvmcmJReMjF6rcpxGYlzTEUyDE1IoaeBG6AT1qYBDEbp1cr0Blm9%2FNvckt%2FREPz5EWNwxoPWJzAhGQZIGS0XDk%2BE3FpC9W9Y6Qi8ny8QM7gSqqJ6loV0oD3Q5NIBHhS%2B41IP5026rR2RJM9xEd11Z&X-Amz-Signature=fa58242f2670fd45e2129eec7061ac760d671ecc607dbd9948dd465ca5113add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


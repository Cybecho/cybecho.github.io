---
title: "komorebi - 윈도우 타일링 시스템"
date: 2024-06-02T07:54:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 타일링 시스템인 komorebi의 설치 방법은 Scoop을 사용하여 komorebi와 whkd를 설치하고, 예제 구성 링크를 통해 설정할 수 있습니다. 제거할 때는 프로세스를 중지한 후 Scoop 또는 WinGet을 통해 삭제하며, 관련 파일을 정리하는 명령어도 제공됩니다."
notion_id: "b1afaf94-16b5-4e6b-ac82-c395dc0f7047"
notion_url: "https://www.notion.so/komorebi-b1afaf9416b54e6bac82c395dc0f7047"
---

# komorebi - 윈도우 타일링 시스템

> **Summary**
> 윈도우 타일링 시스템인 komorebi의 설치 방법은 Scoop을 사용하여 komorebi와 whkd를 설치하고, 예제 구성 링크를 통해 설정할 수 있습니다. 제거할 때는 프로세스를 중지한 후 Scoop 또는 WinGet을 통해 삭제하며, 관련 파일을 정리하는 명령어도 제공됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/13baabb0-8ce0-4b8b-9a3a-1718f5a70c92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQJFVN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGajyy1kmM4%2FaOpJPUih3zO4ACN%2FQh91u%2Brn5zDiM1V2AiANDvVOmOH%2BoCtIrYsSeJ3vN7PQqdFZkxL5C%2Br1YpfSQSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMnNrd%2BLaCz1V8gOkdKtwDCzldumQD4aAMDh3K2OuWEXQHEImQcPXslfNgAlmEn9EgVG5tty8uREro4r8TsflozE9IEx3sEPmzOyYdlB3mxI2uQ4HBP%2FL8vMHOn09Ub3vjjLDmZU4x3Gbly1y%2Fy1DFU9WfqnkTFRdJCLLK6q7MT58Dabvy2qAPkDQRxqqcmNVlbTLzVYLB8qJ9cY%2FeYeujEAQ9ykot9TZvmwalt30%2BA1qKBmuj9ZYrh4XZrGA69CteC5NYrrUzasf0kd6X1fwiMC4WUITuhRk1yOVA6yWUcY8Avz3KVxSZNLVcHej%2BCysMplFacO6cs5A3MPUrkn6P6Ri6uVme6UsnguMRYdDu0UNCu%2BsVYMPJtWfTxd75sIswagD0oSlwZiB9V1DLrP%2B5Iv1feWnm1WredpcT4Hq%2F2C2hiqOVRnFmWOjstnXqtCTWuBpags1Iaw%2BT1Rr01thQVROrsL7s6BO5eKsHSg%2FtllAXS2XyQKpdRmu5jk2dedId%2FP49%2BMnHtNQs2dPw8vvC0jvyclgSZEqMMsCajSzNn4yvXChpwwRMTeIC%2BWvVrtu4npmMPeV%2Fx5FSz7rhwgXOf300gKb0PysUeuKKETMXmDt9rF6HiiT%2BSM%2FbLwyNGEyGmnRv8p3JBMlgJhkwwvWHxAY6pgFioXu42n%2F92mL4OvIJluD8poPRb0jUPtfqJa5RknumXQp%2BGzTcGDkc3B1Bn6IiLQlBksVuGZcYX0WhhdiaFlHjS4vNQ4zbd6%2Bss5s9o9D%2BTHEgIh93aW9hj2rN36GRkVq9kvE60VL%2BxtMTgDVqz4m1%2FudcBM8xjL0TW8cFrIQERi8B%2F1wo3p2KctWKHCYdOilFRMMrJtcbbqYBMN1sVLGhrffdGkgW&X-Amz-Signature=15ba0c6b0d78c62489272cd1ba0b3086deddedbd12c2ab4b25f64b9aa7301cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 설치 방법

[https://lgug2z.github.io/komorebi/installation.html](https://lgug2z.github.io/komorebi/installation.html)

## → Scoop 으로 설치

### komorebi 및 whkd 설치

먼저 Extras 버킷을 추가하세요.

```latex
scoop bucket add extras
```

그런 다음 다음을 사용하여 `komorebi`및 패키지를 설치하십시오.`whkdscoop install`

```latex
scoop install komorebi whkd
```

komorebi가 설치되면 [예제 구성을](https://lgug2z.github.io/komorebi/example-configurations.html) 가져옵니다 .

# 예제 구성

[https://lgug2z.github.io/komorebi/example-configurations.html](https://lgug2z.github.io/komorebi/example-configurations.html)

[https://zhuanlan.zhihu.com/p/455064481](https://zhuanlan.zhihu.com/p/455064481)

# 삭제 방법

제거하기 전에 먼저 실행하여 및 프로세스가 모두 중지되었는지 `komorebic stop --whkd`확인하세요 .`komorebiwhkd`

그런 다음 Scoop 또는 WinGet을 사용하여 설치했는지 여부에 따라 `scoop uninstall komorebi whkd`또는 `winget uninstall LGUG2Z.komorebi LGUG2Z.whkd`.

`quickstart`마지막으로 PowerShell 프롬프트에서 다음 명령을 실행하여 해당 명령으로 생성된 파일과 기타 런타임 파일을 정리할 수 있습니다 .

`rm $Env:USERPROFILE\komorebi.json
rm $Env:USERPROFILE\applications.yaml
rm $Env:USERPROFILE\.config\whkdrc
rm -r -Force $Env:LOCALAPPDATA\komorebi`


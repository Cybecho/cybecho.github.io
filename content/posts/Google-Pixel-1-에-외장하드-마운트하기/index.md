---
title: "Google Pixel 1 에 외장하드 마운트하기"
date: 2024-07-18T12:34:00.000Z
draft: false
tags: ["Other"]
series: ["Let's Homelab!", "HW"]
description: "픽셀1 폰에서 OTG 외장하드를 마운트하는 방법: 개발자 모드와 USB 디버깅 활성화, ADB 설치 및 명령어 실행, 외장하드 연결 및 설정, 사진 백업 및 구글 포토 자동 업로드 과정 설명. 무선 업로드를 위한 FTP 서버 구동 옵션도 제공."
notion_id: "1a28f3ae-da11-4b03-8043-5ba02c83e9e1"
notion_url: "https://www.notion.so/Google-Pixel-1-1a28f3aeda114b0380435ba02c83e9e1"
---

# Google Pixel 1 에 외장하드 마운트하기

> **Summary**
> 픽셀1 폰에서 OTG 외장하드를 마운트하는 방법: 개발자 모드와 USB 디버깅 활성화, ADB 설치 및 명령어 실행, 외장하드 연결 및 설정, 사진 백업 및 구글 포토 자동 업로드 과정 설명. 무선 업로드를 위한 FTP 서버 구동 옵션도 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HTAXX5W%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFPIqgSvhwZYfSj5XxldEBtDD%2BEPjxoKo0m%2BYMCdH%2FUEAiEA5leQttLcOxiDka4T1v9hzzcZptWprqpHud6NljUBOXMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHgvIRFuZGDTM8eAWCrcAyInk0tt%2F%2BUEWuBBTJYJY9G6kI%2Fi7WLy6GjbW0TXshzK5wQ8f3XTuWq9mm8q8UQkIkNy%2BuOloGA0sa7VhYKoayOoLkv4JwJnWzrhQg6N31QXJkdeSZi6Y%2FCVjJMJfObEB6h2Cnl0VaUerDiiO4L4A1qLfJF2hjfCy9ZntE0yIc%2FZR2%2F7IZxSx8fSVsyyAVTNuY9XBx32ZVSDUwKExKo7ldY6FqOIgMWqPx2qQlXCCxaUx3EF1VaqYGT90JQYnibeEsJ3BA%2F8sMcHinqwq%2BehkdwxvXozCBCoZUBR%2F9sHsfGCkvBmxC%2BwfjwCtpbIsjSzw4TMA5Ak0pgJwksph%2Fg%2Fq9OULmgt%2FoU34ZzizHpyoiDjBVhOknAWZ46J0d1tyHbgoz1n%2FLzZ6FfBnxe3WZ%2FneFGOZxsV7PQsS8DcD7QU0RBHHBfhmK4FxzBpX2CgCfgXnjf1VrN9HMFnL0yk0M718ULPMAdR92TVZyw96B%2BMvKjtk5ua2xDiLUlcuA8V4jUHeZsAs2sT%2F7vlC%2Fw2IOjhO%2Bz6DJVwcXkwDmylju9d%2BBfdWFCUb302a0u84c9G3Uu8pzI5H2k7qlCYg8hHD2flOa0%2By6Tof%2BPEhxhp50EmG9dkdPfWV5SNcK5KXIH3MLT2h8QGOqUBtA4iFyH2F3CdmmS%2FnbSCZLrXQkEBKa%2BE1JSAvReToQW%2BOZI5Hfk6rMoZ9R%2Fa6flU9bR0cpSYmee3mjX4encEowGxyQcOGPN6VvRQtczo5I3jRQMwq1%2BhgnVwJod%2BqxlI2D2MDKetnfzUSYqC2aJsLIC%2BfpOhRLVzdKthvWdFyKmKxZlD135m0EXRBuAHXf3T0AYINuaW7nHhs1gJSs717ilqK0Gu&X-Amz-Signature=9b4931e612d27ba668f23a25390c33c37dd310397045c0d29e5378c4d798d15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.clien.net/service/board/lecture/17216250#comment_write_point](https://www.clien.net/service/board/lecture/17216250#comment_write_point)

# 픽셀1 폰에서 구글 포토 대용량 백업 튜토리얼

## 준비 사항

- 픽셀1 폰
- PC
- USB 케이블
- OTG 지원 외장하드
## 절차

### 1. 개발자 모드 활성화

1. 설정 → 휴대전화 정보 → 소프트웨어 정보
1. '빌드 번호' 여러 번 클릭하여 개발자 모드 활성화
### 2. USB 디버깅 활성화

- 설정 → 개발자 옵션 → USB 디버깅 활성화
### 3. ADB 설치 및 실행

1. [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools) 다운로드 및 설치
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fac4d4f1-3713-4ab1-9caf-2b6c2897fcfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KU7OWZ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBo4Quf0PD7CBNb%2FlhyR3%2F3EeXkEnCnzIqox5juItSCGAiEA80KgVApmrbVgJb5h6uHHMJ5S5JINJkua3zHi2BNSCZwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOgXpTKstmLGHcluhircAwaKwh6LdaX7Wg2roxYD7Ak1gWGy7hWftVaK5UhEs7MzKagBe6gGo5ju8%2B2fe7axOIR2XzXCYK2XG7oWQYmOKouVrnHxWkxWNpx6Mww0lPoj5hcK2ocStxwdNeJPyHAkgYJ6VV%2BrU49Ur70OT7FFh6ygRieh%2B4loj2WUbrEzbHeVK%2B%2BqT2C%2FlZsJ3ukELIW1xGVygA87OJxg66thIjyIXXMHbEVTPKeHTu79x1YFN2%2B3hj%2BusMjJWMTvCf10PVEnvD0frk25T47qbVAwIBSF1oVYfMZVYewXcrp%2FVCOaTeOe3hrGUrIGaxcnDR4ondVfuZSdvyxE0MlUj9u1HJMz1OsbdJq%2F21M014xVNbolQYpH9M6NX2BdjIWTYY1rYaltMPxNclixTOZVDbUZzWX8S1rqquW%2BKsV8JnYXYtqgLsqIW8W5v3gzi4dTbwoaKWGTDR1vuhGpIgquGjR%2BU4zNTVhAym%2FmCif40DB3qZ%2F7kJx0aLwYLVm82HZB7jZW9ZJIqcfg6Hh405d3bOAD%2Bjo0iE%2FFK3IEy1k%2B3K%2F51O6V3ywjs9TXvvDlupmYvVsx6CaB3eTFVnGMRfxPflUQxciODEeKNIr98mu2r05XIOMV3%2F2iFDjBpVo%2BMIo4JKDjMID1h8QGOqUBpqGIGrTOwEvO4gB1d5OjBQmtfVJ5OK5dnsgexRUwgNeo7nAzmrycHrH2Q2uqo9%2FaJXRY8gv0LbU%2F2n4dF%2B%2FURzFjNvUKvjCnLOt2VLKdP%2BEQ2EMv5z%2BhLDSJcSEC0oZ0uBS8N2LFh59nNrUn1yZX1Ev9Uh4MQr2wN1OzNri2phOF1S9nlX549jCVAalwKJU53sCY5h8bWS1oxO0qkk6Lo0mlk%2F%2BP&X-Amz-Signature=4d2643a75baf0a47091d7bc8d0580271392d7abe30bc6c8534e702ca6c2e0d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d0b4f03-e49c-4cb0-943e-144c7ad2cd5c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KU7OWZ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBo4Quf0PD7CBNb%2FlhyR3%2F3EeXkEnCnzIqox5juItSCGAiEA80KgVApmrbVgJb5h6uHHMJ5S5JINJkua3zHi2BNSCZwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOgXpTKstmLGHcluhircAwaKwh6LdaX7Wg2roxYD7Ak1gWGy7hWftVaK5UhEs7MzKagBe6gGo5ju8%2B2fe7axOIR2XzXCYK2XG7oWQYmOKouVrnHxWkxWNpx6Mww0lPoj5hcK2ocStxwdNeJPyHAkgYJ6VV%2BrU49Ur70OT7FFh6ygRieh%2B4loj2WUbrEzbHeVK%2B%2BqT2C%2FlZsJ3ukELIW1xGVygA87OJxg66thIjyIXXMHbEVTPKeHTu79x1YFN2%2B3hj%2BusMjJWMTvCf10PVEnvD0frk25T47qbVAwIBSF1oVYfMZVYewXcrp%2FVCOaTeOe3hrGUrIGaxcnDR4ondVfuZSdvyxE0MlUj9u1HJMz1OsbdJq%2F21M014xVNbolQYpH9M6NX2BdjIWTYY1rYaltMPxNclixTOZVDbUZzWX8S1rqquW%2BKsV8JnYXYtqgLsqIW8W5v3gzi4dTbwoaKWGTDR1vuhGpIgquGjR%2BU4zNTVhAym%2FmCif40DB3qZ%2F7kJx0aLwYLVm82HZB7jZW9ZJIqcfg6Hh405d3bOAD%2Bjo0iE%2FFK3IEy1k%2B3K%2F51O6V3ywjs9TXvvDlupmYvVsx6CaB3eTFVnGMRfxPflUQxciODEeKNIr98mu2r05XIOMV3%2F2iFDjBpVo%2BMIo4JKDjMID1h8QGOqUBpqGIGrTOwEvO4gB1d5OjBQmtfVJ5OK5dnsgexRUwgNeo7nAzmrycHrH2Q2uqo9%2FaJXRY8gv0LbU%2F2n4dF%2B%2FURzFjNvUKvjCnLOt2VLKdP%2BEQ2EMv5z%2BhLDSJcSEC0oZ0uBS8N2LFh59nNrUn1yZX1Ev9Uh4MQr2wN1OzNri2phOF1S9nlX549jCVAalwKJU53sCY5h8bWS1oxO0qkk6Lo0mlk%2F%2BP&X-Amz-Signature=6dd4cac3759cbb543e850fb5d931ebed641bc07054479a3ab40d0a7cb5170779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 폰과 PC를 USB로 연결
1. 폰에서 USB 디버깅 허용
### 4. ADB 명령어 실행

1. PC에서 관리자 권한으로 명령 프롬프트(cmd) 실행
1. 아까 압축 해제한 폴더로 이동
```plain text
cd C:\Program Files (x86)\Minimal ADB and Fastboot
```

1. 디바이스 연결 확인:
```plain text
adb devices -l

```

1. ADB 셸 진입:
```plain text
adb shell

```

1. 외장 저장소 강제 채택 설정:
```plain text
sm set-force-adoptable true

```

1. (선택사항) ADB 셸 종료:
```plain text
exit

```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/190fd8a2-e16e-473e-acb7-9b0da4da79e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2C7QMSS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAf5RldSOz8HnHik48IhnTWROcdPuDOTZBaDaeerhP6XAiBShNVRWtNTH70AijfYZix64yEA4k%2BxVYrQqZTnh1Ig2Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8il1XvHUn25PhC9gKtwDkZfDY2QDG8x%2B4dvoxYAgjww3RMF7NzAhlATITyvH7lXcIZozSEl76QFDICxmOhEPzgUl9xFWtWMtHaz2eGs34SxjArffSgjNb3IdVNeiWDzE9y4PxoGesd4PL%2BqL5Ceave4UTYK2QAOXpluM6dUCi8Rb6XRtyXbVwU6MHCLDimsSFu51KxGPIzILFpB1m9NKg3A%2F2YYbXv1vNBhp63F9ft4ulISZmQ94wgUdL8EM%2FV3UryIyAUPmgGc6OPPJIBsuNp9VHmArsBOBNqu0Uu3xjsYHQ152pr5BJy6y%2B3nr0V%2FWZNnTR%2BsCTkw13C%2BYy9FTfZwTY%2F9TydCTMRTsmIVgv6zwnxoAa2wlme0Hxp7Gr0NCSa%2FeqFr4OE3Ea6VcQBv3uXUUQWTK%2FRNRjh6xzg4lZbG0arqOhjxwfcCO3Rsaz8rVeuIeXog5ABsCfqkGshBtRLDtLIgKHsn%2BxB2lpspl2D9ejb5Y%2FRTvQHoZ%2Fts30dbzYjkAYP4cUv4lUoiIbjnCEuf9xLB6EnNOYmXx0IDRNlEAarTUba5FXx2%2BSf4VQvu%2B%2BQwsiVxH6kdovcH9m3KB%2FJHB2DOCeSxI68QgJ2n9GI7lya0Ra3EBD7vnjgIJLpx9Gzzo3uFqLjBHNR8w5vWHxAY6pgGGRB1mobkzAf71CO52Bx%2F6AWmAirljztXYwEnwtaaIHQ2k%2F6BwCR212FiJiKOoYbeMv2xN34nIj1Icq8WC3d47laNRL1BP57CvHANFwclYfVYNrAyTl8OFKkZ%2Ftfi0s2TlxzUVe9kmxpyHVXiYJHzlP1Ba3oa7c%2BqN1hDbCXdm%2FgK8LBARamYj%2BvkBXJ%2FZry0psjvy7sMui7MXCjnfnLZWJQ%2BAwLYO&X-Amz-Signature=59f8ab4e10fb3dde0f5625c34f3ced2eb293eb94b0cc3ebd4377e369fa2492b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### 5. 외장하드 설정

1. 폰에 OTG로 외장하드 연결
1. 외장 메모리로 사용 선택 (필요시 포맷)
### 6. 사진 업로드 준비

1. 외장하드를 PC에 연결
1. DCIM 폴더에 백업할 사진 복사
### 7. 구글 포토 백업

1. 외장하드를 다시 폰에 연결
1. 구글 포토 앱에서 자동으로 사진 인식 및 업로드 시작
## 선택사항: 무선 업로드

- 안드로이드 폰에서 FTP 서버 구동
- 외장드라이브를 폴더로 지정하여 무선 업로드 가능 (단, 속도가 느림)

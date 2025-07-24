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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F6AJFP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEQ3EXzNwm%2BkYpusKiYVmxt7PqH8BZXV1PEC9VFCz0tvAiAvhGATPVIcdFlJ5P%2FE7oXzduG35sOQ4Ps%2Fkx47CK%2FC1yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMhnFFr%2But8di%2BuSA%2BKtwDKBsUjBeClJoBY8pk%2B%2FQroygPLD%2BoBMSx5jw0Kr0uJxb%2Ffa2GlQC5h1nfINjpnxSadXOg29mfNzVv7ABrFSP%2Bnq50VdUiXILY4kcQSpdTwdt1HBSUeFZ5WHT8VBvpbhd1%2B1wZkSbCPgMRCIJHwytOj6CF4uFzNvmZ7LcMsq%2FHRW9XFecWrQUUxDIBYwUbqJcaXfRX93VHsHiPZM3mNSSZsFzUxNSUrtfL5sPG0vU9BciBnSmS%2FlPopPD%2FHh52AvxK16lLizZv9q9OGCnXd2yu2rIepaKzWySuZnb5chuDm5PzpTX%2BRdr7GgGBYEA2tSA%2F%2BjjxMrHczdQHZAvRsN9VS6Ji8msUaIVGKfWghEZY5c1ZFtZbG7kxnotKHnC1lmELDmtZSNreh84i5%2BFBX%2Bq3TEVlVrIh7Br8esXIheAEq8NPl%2FH5bKZ11YVd%2BEDd7hDqhFkLBoVNQFCZzYRiHXINzVrb1qPUd089juz5owF8ni0dQtqgqlKhE%2FpnmW48VBnJkiRv7ZuQs3XA9i3bMsRbv5cacZO2woZ8cD4E5pDKRd2cNrIKeTae7Lr7Ce214V3rUkcc9XuPuHPAi5PC%2BfDfMREE6OzWeI%2BwFAqaC8vJkawo0xSQhJR4IbtSNsEwhNCHxAY6pgHOalq8SnH9kF2Wit2BnncpeZT40dVZdi5H34VthxcqH0h4P97IDOJGvmk8sp%2F3dFOdIgAn85rzOGtlPQ%2F2cOvz7vvd4dKcu%2BdQQ8hPi2uP02xRxhwkrnl91WrJRnZtKS03Sg8ngkJWd%2FFV8pvqb7GQ1YZWFdc7Bh6Lm3Cv0JoUCI04kj7dkmf3kM5%2Bg5RCg1tcUvwMzQYkUXEoWTsFd5ry2kf6bwyj&X-Amz-Signature=64204d590b172ff8618d1afeb0f39d1b16693394315de9ac217cdedd09996dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
1. 폰과 PC를 USB로 연결
1. 폰에서 USB 디버깅 허용
### 4. ADB 명령어 실행

1. PC에서 관리자 권한으로 명령 프롬프트(cmd) 실행
1. 아까 압축 해제한 폴더로 이동
1. 디바이스 연결 확인:
1. ADB 셸 진입:
1. 외장 저장소 강제 채택 설정:
1. (선택사항) ADB 셸 종료:
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

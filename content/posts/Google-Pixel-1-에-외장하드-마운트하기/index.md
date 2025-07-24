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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QVRVLCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAzEi8LPZ%2FPQTEU4J9eynx3wtu36GRWxe0p03NPkstOlAiEAkK1%2Blzv6gMv3Agms4Ck8mwZMWTqRUmcqd0r6A0uhktIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDE3V%2FJl9u84Zeg3hfircA2bUUBu6qPHSewb7aQvBcPgKnOYs3Qv1MnYtM1i2s5q5dZwq9m5uRbgsgmK76o67RNzdN2XrWVzAceC%2BdofF%2Bg%2B85det1i6UOiPQtOdPwLpY328f5%2FT69%2FRIhytfQXspEFb1f4b6XpeV2Nyba6bI%2B81SHGvRx4YO85XYWpbN7DEm0okhPIMY5c2lkepomiRtu1KKb9hhfxvzWGgVxdLSzqytg3kAaSr%2ByZDyUTxcfgW842gV8EoYAHjriPm7Q1CB0xO%2F09qcD97wQ20A%2B%2BU54KC4pDiUfYallLZOK0K7FqNURBzGXec%2Bir49NkhZoie8PJFw4oH%2FlMQgTcEnaZwy0qjUQROoYiv6AHfkhXp0Nt5Xw3GtkE6YXg44Xd4v3VSnfOrJemnsgRN%2FcPX8Rev883sYf7qr6rwsUj7Wj6a7pKZBlf9%2BkxJ5qCPR%2BFQhjb80KlkdvV5K8G2O2jc%2Fu9EDH42IgxlmW72Lptl%2BHNsuCJ6bzbgmuVnVBhyA%2F4wCXKOsh7iRvBxzvcHSxNFa4K8kX4zsDB43aEBIt20EA62%2F5hGd8fEjPcSVVkE4TcvuQbRsrBat1D219UlJlmw7YJHuK90WQryONF5CyDR84CKyQrmyeQrI0Bs2RA6pG4dSMM3Oh8QGOqUBPHZhkQ0n2%2BS0hvt6cSDRsYXTB60PKg4KNoW6vKO9ovNkh0r3c1ZObqyPIHv8G97XJVNRXlvspgkrC5UND27W5xzl4ljTiz1hvIQ%2Bdi6gpv3y00XGFa%2BGQPkD6LY8Kkm4IjJA3ZpbRlYT8U3wdM%2FfC4sKW%2F7W7GkVC%2FZ5r0MA1FcTERphV%2BUSgMMjQ96WimuKCtCtrweXmaM%2FZltDrVyxSzeytcI%2F&X-Amz-Signature=010dbbedbfc81ccf4891b5292a4d8355971b42b76014f9d5bac1e5157b2a705f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

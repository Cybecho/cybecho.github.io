---
title: "안드로이드에서 Linux GUI환경을 사용해보자"
date: 2026-01-06T01:12:00.000Z
draft: false
tags: ["RHEL/Fedora/Rocky", "Arch", "ubuntu", "Debian"]
series: ["Let's Linux!"]
description: "Termux와 proot-distro를 이용해 Android에서 루팅 없이 Debian XFCE 데스크톱 환경을 구축하는 방법을 설명하며, 한글 입력을 지원한다. 설치 과정, 시스템 설정, 환경 구성, 실행 및 종료 스크립트 작성, 문제 해결 방법 등을 포함하여 완전한 Linux GUI 환경을 사용할 수 있도록 안내한다."
notion_id: "2e01bab9-e3f8-800f-a707-efb81b953afb"
notion_url: "https://www.notion.so/Linux-GUI-2e01bab9e3f8800fa707efb81b953afb"
---

# 안드로이드에서 Linux GUI환경을 사용해보자

> **Summary**
> Termux와 proot-distro를 이용해 Android에서 루팅 없이 Debian XFCE 데스크톱 환경을 구축하는 방법을 설명하며, 한글 입력을 지원한다. 설치 과정, 시스템 설정, 환경 구성, 실행 및 종료 스크립트 작성, 문제 해결 방법 등을 포함하여 완전한 Linux GUI 환경을 사용할 수 있도록 안내한다.

---

![Image](image_2b3ad6b56419.png)

# Android에서 Linux GUI 환경 구축 완전 가이드

Termux + proot-distro + Termux:X11을 이용한 Debian XFCE 데스크톱 환경 구축 가이드다. 루팅 없이 작동하며, 한글 입력까지 완벽 지원한다.

---

## 목차

1. [개요 및 구조](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#1-<wbr>%EA%B0%9C%EC%9A%94-<wbr>%EB%B0%8F-<wbr>%EA%B5%AC%EC%A1%B0)
1. [사전 준비: 앱 설치](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#2-<wbr>%EC%82%AC%EC%A0%84-<wbr>%EC%A4%80%EB%B9%84-<wbr>%EC%95%B1-<wbr>%EC%84%A4%EC%B9%98)
1. [Android 시스템 설정](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#3-<wbr>android-<wbr>%EC%8B%9C%EC%8A%A4%ED%85%9C-<wbr>%EC%84%A4%EC%A0%95)
1. [Termux 기본 환경 구성](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#4-<wbr>termux-<wbr>%EA%B8%B0%EB%B3%B8-<wbr>%ED%99%98%EA%B2%BD-<wbr>%EA%B5%AC%EC%84%B1)
1. [Debian 설치 및 사용자 생성](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#5-<wbr>debian-<wbr>%EC%84%A4%EC%B9%98-<wbr>%EB%B0%8F-<wbr>%EC%82%AC%EC%9A%A9%EC%9E%90-<wbr>%EC%83%9D%EC%84%B1)
1. [XFCE 데스크톱 및 한글 환경 설치](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#6-<wbr>xfce-<wbr>%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1-<wbr>%EB%B0%8F-<wbr>%ED%95%9C%EA%B8%80-<wbr>%ED%99%98%EA%B2%BD-<wbr>%EC%84%A4%EC%B9%98)
1. [환경변수 설정](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#7-<wbr>%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-<wbr>%EC%84%A4%EC%A0%95)
1. [실행 및 종료 스크립트 작성](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#8-<wbr>%EC%8B%A4%ED%96%89-<wbr>%EB%B0%8F-<wbr>%EC%A2%85%EB%A3%8C-<wbr>%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-<wbr>%EC%9E%91%EC%84%B1)
1. [실행 및 한글 입력 설정](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#9-<wbr>%EC%8B%A4%ED%96%89-<wbr>%EB%B0%8F-<wbr>%ED%95%9C%EA%B8%80-<wbr>%EC%9E%85%EB%A0%A5-<wbr>%EC%84%A4%EC%A0%95)
1. [화면 최적화](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#10-<wbr>%ED%99%94%EB%A9%B4-<wbr>%EC%B5%9C%EC%A0%81%ED%99%94)
1. [문제 해결](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#11-<wbr>%EB%AC%B8%EC%A0%9C-<wbr>%ED%95%B4%EA%B2%B0)
1. [명령어 총정리](https:/<wbr>/<wbr>www.notion.so/<wbr>cybecho/<wbr>Linux-<wbr>2e01bab9e3f8800fa707efb81b953afb?<wbr>v=<wbr>2361bab9e3f8808dbbce000ce422ed7d#12-<wbr>%EB%AA%85%EB%A0%B9%EC%96%B4-<wbr>%EC%B4%9D%EC%A0%95%EB%A6%AC)
---

## 1. 개요 및 구조

### 작동 원리

```plain text
Android
  └── Termux (터미널 에뮬레이터)
        ├── proot-distro (루팅 없이 Linux 배포판 실행)
        │     └── Debian (Linux 배포판)
        │           └── XFCE (데스크톱 환경)
        ├── Termux:X11 (X11 디스플레이 서버)
        └── PulseAudio (오디오 서버)

```

### 각 구성요소 역할

| 구성요소 | 역할 |
| --- | --- |
| Termux | Android에서 Linux 터미널 환경 제공 |
| proot-distro | 루팅 없이 chroot 방식으로 Linux 배포판 실행 |
| Debian | 실제 Linux 운영체제 |
| XFCE | 경량 데스크톱 환경 (GUI) |
| Termux:X11 | GUI 화면을 Android에 렌더링 |
| PulseAudio | 오디오 출력 처리 |
| fcitx5 | 한글 입력기 |

---

## 2. 사전 준비: 앱 설치

### 중요: Play Store 버전 사용 금지

Play Store의 Termux는 업데이트가 중단되어 제대로 작동하지 않는다. 반드시 GitHub 또는 F-Droid에서 설치해야 한다.

### Termux 설치

GitHub Releases에서 다운로드:

- [https://github.com/termux/termux-app/releases](https:/<wbr>/<wbr>github.com/<wbr>termux/<wbr>termux-<wbr>app/<wbr>releases)
- 파일명: `termux-app_v0.118.1+github-debug_arm64-v8a.apk`
- arm64-v8a는 대부분의 최신 폰에 해당 (Galaxy S24 FE 포함)
### Termux:X11 설치

GitHub Releases에서 다운로드:

- [https://github.com/termux/termux-x11/releases](https:/<wbr>/<wbr>github.com/<wbr>termux/<wbr>termux-<wbr>x11/<wbr>releases)
- 파일명: `app-arm64-v8a-debug.apk`
### 설치 시 주의사항

- "출처를 알 수 없는 앱" 설치 허용 필요
- 두 앱 모두 같은 출처(GitHub)에서 받아야 서명이 일치함
---

## 3. Android 시스템 설정

Samsung One UI를 포함한 대부분의 Android는 백그라운드 앱을 공격적으로 종료한다. 이를 방지하지 않으면 GUI 작업 중 세션이 끊긴다.

### 배터리 최적화 제외 (필수)

**Termux 설정:**

1. 설정 > 앱 > Termux
1. 배터리 > "제한 없음" 선택
**Termux:X11 설정:**

1. 설정 > 앱 > Termux:X11
1. 배터리 > "제한 없음" 선택
### 백그라운드 사용 제한 해제

1. 설정 > 배터리 및 디바이스 케어 > 배터리
1. 백그라운드 사용 제한 > 사용 안 함으로 설정하는 앱 없음 확인
1. 또는 Termux, Termux:X11이 목록에 없는지 확인
### 개발자 옵션 설정 (권장)

개발자 옵션 활성화:

1. 설정 > 휴대전화 정보 > 소프트웨어 정보
1. 빌드 번호 7번 연속 탭
개발자 옵션 설정:

1. 설정 > 개발자 옵션
1. "활동 유지 안함" > OFF
1. "백그라운드 프로세스 제한" > 표준 제한
---

## 4. Termux 기본 환경 구성

Termux 앱을 실행하고 다음 명령어를 순서대로 입력한다.

### 저장소 업데이트

```bash
pkg update && pkg upgrade -y

```

최초 실행 시 저장소 선택 화면이 나오면 아무 거나 선택해도 된다.

### X11 저장소 추가

```bash
pkg install x11-repo -y

```

### 필수 패키지 설치

```bash
pkg install proot-distro termux-x11-nightly pulseaudio -y

```

| 패키지 | 용도 |
| --- | --- |
| proot-distro | Linux 배포판 관리 |
| termux-x11-nightly | X11 서버 |
| pulseaudio | 오디오 서버 |

---

## 5. Debian 설치 및 사용자 생성

### Debian 설치

```bash
proot-distro install debian

```

설치에 수 분 소요된다.

### 설치 확인

```bash
proot-distro list

```

debian이 installed로 표시되면 성공이다.

### Debian 진입 (root)

```bash
proot-distro login debian

```

프롬프트가 `root@localhost:~#`로 바뀌면 Debian 내부에 진입한 것이다.

### 기본 패키지 설치

```bash
apt update && apt upgrade -y
apt install sudo locales -y

```

### 로케일 설정 (한글 지원)

```bash
sed -i 's/# en_US.UTF-8/en_US.UTF-8/' /etc/locale.gen
sed -i 's/# ko_KR.UTF-8/ko_KR.UTF-8/' /etc/locale.gen
locale-gen

```

### 사용자 생성

`useradd` 명령어로 사용자를 생성한다 (adduser 패키지가 없을 수 있음):

```bash
useradd -m -s /bin/bash sbu
passwd sbu

```

비밀번호 입력 프롬프트가 나오면 원하는 비밀번호를 두 번 입력한다.

### sudo 권한 부여

```bash
echo "sbu ALL=(ALL:ALL) ALL" >> /etc/sudoers

```

### 사용자 생성 확인

```bash
cat /etc/passwd | grep sbu

```

`sbu:x:1000:1000::/home/sbu:/bin/bash` 형태로 출력되면 성공이다.

### Debian 종료

```bash
exit

```

---

## 6. XFCE 데스크톱 및 한글 환경 설치


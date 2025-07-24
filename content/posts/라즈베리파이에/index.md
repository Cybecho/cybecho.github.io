---
title: "라즈베리파이에"
date: 2025-07-17T09:00:00.000Z
draft: false
tags: ["fedora", "Arch", "ubuntu", "Debian"]
series: ["Let's Linux!"]
description: "라즈베리파이에서 LineageOS를 설치하여 안드로이드를 사용할 수 있으며, KonstaKANG이 개발한 다양한 기능이 포함된 Android 시스템을 활용할 수 있다. 설치 과정은 LineageOS 이미지 다운로드, SD카드에 플래싱, 초기 설정, Google Apps 설치로 구성된다. MindTheGapps를 사용하여 Google Play 서비스를 대체할 수 있으며, Revanced를 통해 Google Photos의 무제한 백업 기능을 활성화할 수 있다."
notion_id: "2331bab9-e3f8-801f-af43-e085b9c24e07"
notion_url: "https://www.notion.so/LineageOS-2331bab9e3f8801faf43e085b9c24e07"
---

# 라즈베리파이에

> **Summary**
> 라즈베리파이에서 LineageOS를 설치하여 안드로이드를 사용할 수 있으며, KonstaKANG이 개발한 다양한 기능이 포함된 Android 시스템을 활용할 수 있다. 설치 과정은 LineageOS 이미지 다운로드, SD카드에 플래싱, 초기 설정, Google Apps 설치로 구성된다. MindTheGapps를 사용하여 Google Play 서비스를 대체할 수 있으며, Revanced를 통해 Google Photos의 무제한 백업 기능을 활성화할 수 있다.

---

# 라즈베리파이에서 안드로이드를 애초에 깔수가 있을까?

🔗 [https://ivonblog.com/posts/raspberry-pi-lineageos/](https://ivonblog.com/posts/raspberry-pi-lineageos/)

### Raspberry Pi에서 Android 사용하기

> LineageOS와 함께라면, 안될것 없다!

- Raspberry Pi는 Linux 외에도 Android를 실행할 수 있음
- KonstaKANG 개발자가 Raspberry Pi용 LineageOS Android 시스템을 유지보수하고 있음
- LineageOS Android에는 일반 버전과 Android TV 버전이 있어 용도에 맞게 선택할 수 있음
- Raspberry Pi 4 이후 모델은 저사양 Android 스마트폰 수준의 성능을 보유하고 있어 동영상 재생과 간단한 게임 구동이 가능함
### LineageOS Android의 추가 기능

- KonstaKANG이 LineageOS에 다양한 기능을 추가했음
- 이러한 추가 기능들로 인해 Raspberry Pi를 저전력 클라우드 폰이나 DIY Android TV 박스로 활용할 수 있음

> 오호, VNC 및 SSH를 기본적으로 OS단에서 지원하다니, 이거 안할 이유가 없다!

# 정보를 알아보자

> 국문으로는 어떤분이 4 환경에서 잘 정리해두신걸 찾을 수 있었다.

🔗 [https://makeutil.tistory.com/185](https://makeutil.tistory.com/185)

🔗 [https://makeutil.tistory.com/187?category=210045](https://makeutil.tistory.com/187?category=210045)

🔗 [https://konstakang.com/devices/rpi4/LineageOS22/](https://konstakang.com/devices/rpi4/LineageOS22/)

# 설치 & 세팅을 정리해보자

**KonstaKANG 공식 사이트에서 다운로드:** [https://konstakang.com/devices/rpi4/LineageOS20/](https://konstakang.com/devices/rpi4/LineageOS20/)

1. **LineageOS 20 이미지 파일**
1. **Google Apps (GApps) 설치용**
1. **추가 도구**
### **1.2 SD카드에 이미지 플래싱**

**참고 유튜브:** [Lineage OS 20 Android 13. Raspberry Pi 4 설치 가이드](https://www.youtube.com/watch?v=psPi6VLJn4E)

1. **Raspberry Pi Imager** 다운로드 및 설치
1. **이미지 플래싱**
### **1.3 첫 부팅 및 기본 설정**

1. **하드웨어 연결**
1. **Android 초기 설정**
**참고 블로그:** [라즈베리파이 4에 Android 11 설치하기](https://makeutil.tistory.com/185)

---

## 🔧 **2단계: Google Apps (GApps) 설치**

### O3 버전

### **2.1 TWRP 리커버리 부팅**

1. **고급 재시작 옵션 활성화**
1. **TWRP 리커버리 부팅**
### **2.2 GApps 설치**

**참고 유튜브:** [How to setup Lineage OS Android 11 with Play store](https://www.youtube.com/watch?v=63oDtWbytGY)

1. **파일 복사**
1. **TWRP에서 설치**
### **2.3 Google Play 서비스 설정**

1. **Google 계정 로그인**
---

## 2025년 7월 기준, Revanced로 구글 포토 무제한 업로드 활성화 가이드 (LineageOS 22 기준)

아래는 루팅이나 커스텀 롬 없이 **LineageOS 22**에서 최신 방법으로, 실제로 바로 따라 할 수 있는 Revanced 기반 ‘구글포토 무제한 원본 백업’ 가이드입니다.

## 준비물 다운로드 (모두 안전한 최신 공식/커뮤니티 배포처)

- **Revanced Manager 최신 버전**
- **MicroG (GmsCore) 앱**
- **Google Photos APK (Nodpi 권장, 최신 안정판)**
## 단계별 설치 및 패치 방법

1. **기존 Google Photos 앱 제거 또는 비활성화**
1. **Revanced Manager 설치**
1. **Google Photos APK 다운로드**
1. **MicroG(GmsCore) 설치**
1. **Revanced Manager에서 Google Photos 패치**
1. **패치 진행 및 APK 설치**
1. **최초 실행 및 로그인**
## 실사용 중 주의사항 및 한계

- **AI 편집 기능(Magic Editor 등)는 지원되지 않음.**
- **계정 선택 팝업 반복됨** (실제 사용에는 큰 지장 없음).
- 앱이 Google Play 서비스 대신 MicroG로 작동하므로 Gpay·드라이브 등 일부 기능 미지원.
- Google 약관상 공식 승인된 이용 방식은 아니며, 개인 데이터 보호와 보안 책임은 사용자에게 있음[5](https://github.com/Unofficial-Life/revanced-gphotos-build)[2](https://www.youtube.com/watch?v=b0wI5_nbMY0)[4](https://www.youtube.com/watch?v=Mdv_bceH-Ls).
## 참고/공식 문서

- Revanced 공식 깃허브: [ReVanced Manager 최신 릴리즈](https://github.com/revanced/revanced-manager/releases)
- 비공식 Google Photos Revanced 빌드: [Unofficial-Life/revanced-gphotos-build](https://github.com/Unofficial-Life/revanced-gphotos-build)
- 설치 및 버그 안내: [Revanced Reddit/공식 Discussion](https://www.reddit.com/r/revancedapp/)
## 요약

**2025년 7월 최신 Revanced & MicroG 기반 ‘구글 포토 무제한 업로드’ 솔루션은 루팅 없이 안전하게, 누구든지 10분 이내 내 폰에서 구축이 가능합니다.** 모든 자료와 최신 버전은 공식 깃허브 또는 검증된 커뮤니티 링크만 사용하세요.

[1](https://vanced.to/revanced-google-photos)[5](https://github.com/Unofficial-Life/revanced-gphotos-build)[2](https://www.youtube.com/watch?v=b0wI5_nbMY0)[4](https://www.youtube.com/watch?v=Mdv_bceH-Ls)[6](https://www.reddit.com/r/revancedapp/comments/1lx59p4/how_to_patch_google_photos/)[3](https://github.com/revanced/revanced-manager/releases)

1. [https://vanced.to/revanced-google-photos](https://vanced.to/revanced-google-photos)
1. [https://www.youtube.com/watch?v=b0wI5_nbMY0](https://www.youtube.com/watch?v=b0wI5_nbMY0)
1. [https://github.com/revanced/revanced-manager/releases](https://github.com/revanced/revanced-manager/releases)
1. [https://www.youtube.com/watch?v=Mdv_bceH-Ls](https://www.youtube.com/watch?v=Mdv_bceH-Ls)
1. [https://github.com/Unofficial-Life/revanced-gphotos-build](https://github.com/Unofficial-Life/revanced-gphotos-build)
1. [https://www.reddit.com/r/revancedapp/comments/1lx59p4/how_to_patch_google_photos/](https://www.reddit.com/r/revancedapp/comments/1lx59p4/how_to_patch_google_photos/)
1. [https://www.reddit.com/r/revancedapp/comments/1jb6b54/whats_the_plan_for_google_photos_support_in/](https://www.reddit.com/r/revancedapp/comments/1jb6b54/whats_the_plan_for_google_photos_support_in/)
1. [https://xdaforums.com/t/unlimited-google-photos-solved.4704199/](https://xdaforums.com/t/unlimited-google-photos-solved.4704199/)
1. [https://github.com/CreepsoOff/GooglePhotosRevanced](https://github.com/CreepsoOff/GooglePhotosRevanced)
1. [https://github.com/revanced/revanced-manager/blob/main/docs/1_installation.md](https://github.com/revanced/revanced-manager/blob/main/docs/1_installation.md)
1. [https://apkpure.net/revanced-manager/app.revanced.manager.flutter/download](https://apkpure.net/revanced-manager/app.revanced.manager.flutter/download)
1. [https://www.threads.com/@yasin.suzon/post/DLl7tiIhfst/its-not-hard-to-enable-unlimited-photos-backup-in-google-photos-took-me-like-5-m](https://www.threads.com/@yasin.suzon/post/DLl7tiIhfst/its-not-hard-to-enable-unlimited-photos-backup-in-google-photos-took-me-like-5-m)
1. [https://www.reddit.com/r/revancedapp/comments/1jy63ql/finally_gphotos_patching_on_android_works_thanks/](https://www.reddit.com/r/revancedapp/comments/1jy63ql/finally_gphotos_patching_on_android_works_thanks/)
1. [https://blindhelp.net/software/revanced-manager](https://blindhelp.net/software/revanced-manager)
1. [https://vanced.to/posts/new-build-for-revanced-google-photos](https://vanced.to/posts/new-build-for-revanced-google-photos)
1. [https://github.com/ReVanced/revanced-patches/issues/3622](https://github.com/ReVanced/revanced-patches/issues/3622)
1. [https://github.com/athuld/revanced-gphotos](https://github.com/athuld/revanced-gphotos)
1. [https://github.com/ReVanced/revanced-manager/issues/2137](https://github.com/ReVanced/revanced-manager/issues/2137)
1. [https://revanced-manager.techylist.com](https://revanced-manager.techylist.com/)
1. [https://www.youtube.com/watch?v=g_o9Jdoih4Q](https://www.youtube.com/watch?v=g_o9Jdoih4Q)
---

## 📚 **추가 참고 자료**

### **한국어 블로그 가이드**

- [라즈베리파이 4 Android 11 설치 가이드](https://makeutil.tistory.com/185)
- [안드로이드 13 설치 가이드](https://ssafy.tistory.com/16)
### **YouTube 튜토리얼**

- [디바이스마트 - 라즈베리파이 4 안드로이드 OS 설치](https://www.youtube.com/watch?v=Mkpus60QJd0)
- [LineageOS 20 설치 가이드](https://www.youtube.com/watch?v=psPi6VLJn4E)

---
title: "Google Pixel 1 애초에 Pixel1이 필요도 없었다고?"
date: 2025-07-14T15:16:00.000Z
draft: false
tags: ["Other"]
series: ["Let's Homelab!", "HW", "구글픽셀 개조기"]
description: "Revanced Manager를 사용하여 Google Photos 앱을 패치하면 루트 권한 없이 무제한 원본 품질 백업 기능을 활성화할 수 있습니다. 주요 단계는 기존 앱 제거, Revanced Manager 설치, Google Photos APK 로드 및 패치 적용, GmsCore 설치, 패치된 앱 실행입니다. 이 과정을 통해 누구나 쉽게 무제한 백업 기능을 추가할 수 있습니다."
notion_id: "2311bab9-e3f8-80eb-87ea-e270f1df5b7f"
notion_url: "https://www.notion.so/Google-Pixel-1-Pixel1-2311bab9e3f880eb87eae270f1df5b7f"
---

# Google Pixel 1 애초에 Pixel1이 필요도 없었다고?

> **Summary**
> Revanced Manager를 사용하여 Google Photos 앱을 패치하면 루트 권한 없이 무제한 원본 품질 백업 기능을 활성화할 수 있습니다. 주요 단계는 기존 앱 제거, Revanced Manager 설치, Google Photos APK 로드 및 패치 적용, GmsCore 설치, 패치된 앱 실행입니다. 이 과정을 통해 누구나 쉽게 무제한 백업 기능을 추가할 수 있습니다.

---

![Image](image_6222a4437615.webp)

# 제야의 고수들이 나에게 조언해줬음

🔗 [https://www.reddit.com/r/homelab/comments/1m04ix4/comment/n37eu9o/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button](https://www.reddit.com/r/homelab/comments/1m04ix4/comment/n37eu9o/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

```plain text
--- Reddit 대화 내용 ---

**RBMC (20분 전, 14분 전 수정됨):**
이 모든 작업을 할 필요 없이, ReVanced를 사용해서 Google 포토 앱을 패치하고 무제한 백업을 활성화할 수 있었을 텐데.
그 방법은 루팅, 커스텀 롬, 그 어떤 것도 필요 없어. 단 5분만 투자하면 돼. 물론, 이건 대단한 작업이지만... 이런 데 너무 많은 시간을 쏟아부었어 ㅋㅋㅋ.
그래도 잘했어.

**HelloZOOO (OP, 15분 전):**
Google 포토를 패치하는 방법을 찾으려면 어떤 키워드로 검색해야 할지 알려주실 수 있나요?

**RBMC (7분 전, 3분 전 수정됨):**
더 좋은 방법을 알려줄게, 단계별로 설명해 줄게. 그리고 더 궁금한 점이 있으면 여기에 답글 달아도 돼. 앞으로 며칠 동안은 최소한 답장해 줄게.

1.  기존 Google 포토 앱을 제거(또는 비활성화)한다.
2.  Revanced Manager를 설치한다.
3.  nodpi용 최신 Google 포토 APK를 다운로드한다.
4.  Revanced Manager에서 Google 포토를 선택하고 저장소에서 APK를 선택한다.
5.  패치를 사용자 정의하고 "Spoof Unlimited Photos Backup" 패치(또는 비슷한 이름의 패치)를 활성화한다. 자동 DCIM 폴더 백업 비활성화 패치도 활성화하는 것을 추천해.
6.  앱을 패치한다.
7.  생성된 APK 파일을 설치한다.
8.  이제 패치된 앱에 Google Play 서비스를 제공하기 위해 GMSCore가 설치되어 있어야 해. 보안에 민감하다면 이 부분이 좀 찜찜할 수 있지만, 코드는 GitHub에서 오픈 소스로 공개되어 있어서 정말 걱정된다면 직접 빌드할 수도 있어.

이 모든 작업이 끝나면, 앱을 열고 로그인하면 돼. 앱을 처음 열 때마다 계정을 다시 선택해야 하는 약간의 버그가 있지만, 잘 작동해.

**HelloZOOO (OP, 4분 전):**
정말 자세한 설명 감사합니다! 이 정보면 충분할 것 같아요. 한번 시도해볼게요. 다시 한번 감사드립니다!

--- 대화 종료 ---
```

# 오 뭔말이지? 정리해보자

## **요약**

Revanced Manager를 이용해 Google Photos 앱을 패치하면 루트 권한이나 커스텀 롬 없이 “Unlimited Original Quality” 백업 기능을 활성화할 수 있습니다. 주요 과정은 (1) Revanced Manager 설치, (2) Google Photos APK 선택, (3) “Spoof Unlimited Photos Backup” 패치 적용, (4) GmsCore 설치 및 패치된 앱 실행의 네 단계로 이루어집니다   .

---

## **필요한 도구**

- **Revanced Manager**: Revanced 앱 시리즈를 손쉽게 패치·관리하는 공식 GUI 도구
- **Google Photos APK (nodpi)**: 모든 기기에서 동작하는 범용 Google Photos 패키지
- **GmsCore (ReVanced MicroG)**: Google Play 서비스 없이 Google 계정 인증을 가능케 하는 오픈소스 구현체
---

## **단계별 설명**

### **1. 기존 앱 제거**

1. 기기 설정의 **앱(Apps)** 메뉴에서 “Google Photos”를 선택하고, **제거** 또는 **사용 안 함**을 실행합니다.
  - 이 과정을 통해 패치된 APK 설치 시 충돌을 방지합니다 .
### **2. Revanced Manager 설치**

1. 공식 웹사이트나 GitHub 릴리스 페이지에서 최신 **Revanced Manager APK**를 다운로드합니다 .
1. 다운로드한 APK를 클릭해 설치합니다.
  - 보안 설정에서 “출처를 알 수 없는 앱” 설치를 허용해야 할 수 있습니다.
### **3. Google Photos APK 로드 및 패치**

1. Revanced Manager를 실행하고, **“Select App”** 메뉴에서 “com.google.android.apps.photos (nodpi)” APK를 불러옵니다 .
1. **“Custom patches”** 목록에서
  - **Spoof Unlimited Photos Backup** (또는 유사 명칭)
  - **Disable DCIM folder auto backup** 등 필요 패치를 선택합니다 .
1. **“Patch”** 버튼을 눌러 새 APK를 생성합니다.
  - 패치 과정이 끝나면 /sdcard/Download/ 등에 패치된 APK가 저장됩니다.
### **4. GmsCore 설치**

1. ReVanced MicroG(GmsCore)를 GitHub 릴리스에서 다운로드해 설치합니다 .
1. GmsCore를 통해 패치된 Google Photos 앱이 Google 계정에 접근할 수 있도록 합니다.
### **5. 패치된 Google Photos 실행**

1. 생성된 APK를 설치합니다.
1. 앱을 처음 열 때 Google 계정을 선택하고 인증 과정을 완료합니다.
1. **Unlimited Original Quality** 백업 기능이 활성화된 것을 확인합니다.
  - 초기 실행 시 계정을 다시 선택해야 할 수 있으며, 이후에는 백그라운드 자동 백업이 작동합니다 .
---

## **내부 동작 원리**

- **기기 스푸핑**: 패치된 앱은 내부 프레임워크 호출(hasSystemFeature)을 훅킹해 “Pixel 기기”로 인식되도록 합니다 .
- **패치 적용**: APK 바이너리에 직접 코드 후킹을 삽입하며, MicroG가 Google 계정 인증을 맡아 루트 없이 동작합니다 .
- **백엔드 허들링**: 구글 서버는 “Pixel 기기”로부터 온 요청을 그대로 받아들이므로, 원본 화질 제한 없이 저장합니다 .
---

이 과정을 통해 **5분 만에** Google Photos에 무제한 원본 백업 기능을 추가할 수 있으며, 루팅·커스텀롬·복잡한 롬 관리 없이도 누구나 손쉽게 활용 가능합니다.


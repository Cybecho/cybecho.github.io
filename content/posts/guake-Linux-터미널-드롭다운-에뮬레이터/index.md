---
title: "guake - Linux 터미널 드롭다운 에뮬레이터"
date: 2025-01-26T11:17:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Guake는 GNOME 데스크톱 환경을 위한 드롭다운 터미널 에뮬레이터로, F12 키로 호출하고 다중 탭 및 화면 분할 기능을 지원하며, 사용자 정의가 가능하다. 자동 시작, 다중 모니터 지원, DBus 명령 제어, 훅 포인트 설정 등의 고급 기능도 제공한다. Ubuntu나 Debian 기반 시스템에서 간단한 명령으로 설치할 수 있다."
notion_id: "1871bab9-e3f8-80d6-a601-e6be1c02d27d"
notion_url: "https://www.notion.so/guake-Linux-1871bab9e3f880d6a601e6be1c02d27d"
---

# guake - Linux 터미널 드롭다운 에뮬레이터

> **Summary**
> Guake는 GNOME 데스크톱 환경을 위한 드롭다운 터미널 에뮬레이터로, F12 키로 호출하고 다중 탭 및 화면 분할 기능을 지원하며, 사용자 정의가 가능하다. 자동 시작, 다중 모니터 지원, DBus 명령 제어, 훅 포인트 설정 등의 고급 기능도 제공한다. Ubuntu나 Debian 기반 시스템에서 간단한 명령으로 설치할 수 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/575d3c04-bdd8-41ed-b8ce-38c1e92285be/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTX23CGX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDPJyl1QeB6psWnkvLLEwfO1sUKX05JqIXf87sVK8AZlAiBG%2BYQnPW0oS9HEUz5%2BTqcXQGeViDzlarTcUOFEMSMC1yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FWP6smj5wtCfGzIgKtwDCheWRx0VlCZ0MIrhVvALUi813SJhrYvxX7%2Fgh5YDLhhQROFQx9vEIFx5ezt%2BLHDy4Ta78H2ejbcCn2H4xdge6xWuJh4xl7KsJp%2BBQAsRNQ4RN1HQCNyt6oyiqYSbvyoL1ggKOxyaHj9%2BICcc0Sk8m5LVjdy45vCqKQn626aPs%2BqYexwJCYR4x9TxhVDVvm1UH5OYG3%2Fcby5mFdhYoH1qHKSYL%2F90G%2B12Lh1sIwtFPtxaZyjqWg0vWO7JVW5989B%2BFEQeslDKbonJZmEpwpmLFM7Ec7DUzkd2mnttbijIFfIh927USCMGGJmCjsPlM%2FhiO5oUtbj8ldCGGIpycFgQ4dZTVHtVozB9UTBkDdhP6b8drDQjbiDQAouXpEc1cO2wuQtni8Kh1LMt8wJcAe6t%2F359u6A4mFR2B2JY9xfzqs%2FwYqtUiejWea%2BZL%2FiIq%2BVeoC6H1mRFaJ2oUBplBVYRYEG6%2BgXCgzFvKeFHlYzUmEwLHPSi7SkyiOtzfcobWw0uNDLaLnbewx9XFNV23CkqHfbOXVH8c2%2B0jxLANmYyQ1g8eGHuXRLIDtF%2F2Lh4M4VlQ57emQGUWp03dWLLqvEnjeQwBFHWFcNBEsxgXmP%2BaHnTimpLskp3b1u5hhYwufWHxAY6pgElTjHp8uSqFjez62Z43kT7Ps9cRTDstTUSLMPRVEOoVaa4UxEjP8QC0Zug9lnsx6pcJvH%2BzJDH%2BvSJ0tlRWlVYV5CvPlDin8bUE%2BBvyfF5z4pEfSmbhqDThC9lmuVD%2BKKth8w9%2FZsa3fmjPyV5hS3v95rU%2B6RuGWIbmG6%2FWrDDdT5hkL0M2jzRDHxbbRcQ70GtUTbT%2BkDYslBkw2%2FElIZwNtozYs5F&X-Amz-Signature=f8f0d0154820117b8bda0213291720a8e134ca391f7f21486334c6fc4e5dcd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Guake는 GNOME 데스크톱 환경을 위한 강력하고 사용자 정의가 가능한 드롭다운 터미널 에뮬레이터입니다. 주요 특징과 기능은 다음과 같습니다:

## 주요 특징

- **단일 단축키 터미널**: F12 키(기본값)를 눌러 터미널을 호출하고 작업이 끝나면 다시 숨길 수 있습니다[1][5].
- **다중 탭 지원**: 여러 탭을 열어 동시에 여러 작업을 수행할 수 있습니다[2].
- **화면 분할**: 터미널 창을 수평 또는 수직으로 분할하여 여러 세션을 동시에 볼 수 있습니다[2].
- **사용자 정의 가능한 외관**: 투명도 조절, 색상 팔레트 선택, 글꼴 크기 조정 등 다양한 사용자 정의 옵션을 제공합니다[2][5].
- **자동 시작**: GNOME 시작 시 자동으로 실행되도록 설정할 수 있습니다[1].
## 고급 기능

- **퀵 오픈**: 터미널에 표시된 파일 경로를 자동으로 인식하여 선호하는 코드 편집기로 열 수 있습니다[1].
- **다중 모니터 지원**: 여러 모니터에서 Guake를 사용할 수 있습니다[1][8].
- **DBus 명령**: 주요 기능을 DBus를 통해 제어할 수 있습니다[1].
- **훅 포인트**: Guake 시작 시 실행할 bash 스크립트를 구성할 수 있습니다[1].
## 설치 및 사용

Ubuntu나 Debian 기반 시스템에서는 다음 명령으로 설치할 수 있습니다:

```shell
sudo apt install guake

```

최신 버전을 사용하려면 PPA를 추가할 수 있습니다[5].

Guake를 실행하려면 터미널에서 `guake` 명령을 입력하거나, F12 키를 눌러 활성화할 수 있습니다[4].

Guake는 백그라운드에서 실행되며, 단축키를 통해 빠르게 접근할 수 있어 개발자와 시스템 관리자에게 특히 유용합니다[2][6].



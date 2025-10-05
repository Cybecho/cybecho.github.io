---
title: "YASB(Yet Another Status Bar) 소개"
date: 2025-10-05T02:23:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "YASB는 윈도우에서 시스템 정보를 시각화하고 커스터마이징할 수 있는 파이썬 기반 오픈소스 상태 바입니다. 완벽한 커스터마이징과 다양한 위젯을 지원하며, 설치는 GitHub에서 다운로드하거나 패키지 매니저를 통해 간편하게 할 수 있습니다. 커뮤니티에서 만든 다양한 테마를 적용하여 개인화된 작업 환경을 만들 수 있습니다."
notion_id: "2831bab9-e3f8-806a-8ec1-e2539378d1f0"
notion_url: "https://www.notion.so/YASB-Yet-Another-Status-Bar-2831bab9e3f8806a8ec1e2539378d1f0"
---

# YASB(Yet Another Status Bar) 소개

> **Summary**
> YASB는 윈도우에서 시스템 정보를 시각화하고 커스터마이징할 수 있는 파이썬 기반 오픈소스 상태 바입니다. 완벽한 커스터마이징과 다양한 위젯을 지원하며, 설치는 GitHub에서 다운로드하거나 패키지 매니저를 통해 간편하게 할 수 있습니다. 커뮤니티에서 만든 다양한 테마를 적용하여 개인화된 작업 환경을 만들 수 있습니다.

---

## 윈도우 환경에서의 커스텀 상태 바: YASB 사용 가이드

- **YASB**(Yet Another Status Bar)는 윈도우에서 다양한 시스템 정보와 위젯을 한눈에 보여주는 **파이썬 기반 오픈소스 상태 바**입니다. 리눅스나 맥의 상태 바처럼 자유롭게 커스터마이징하고 싶은데 윈도우에서는 마땅한 대안을 찾기 어려웠다면, YASB가 완벽한 해결책이 될 것입니다. 커뮤니티 기반으로 활발히 개발되며, 다양한 테마와 위젯을 통해 작업 환경의 실용성과 개성을 모두 살릴 수 있습니다.[github](https://github.com/amnweb/yasb)
## 주요 기능

- **완벽한 커스터마이징**: `styles.css`와 `config.yaml` 파일을 통해 레이아웃, 색상, 위젯 등을 세부적으로 설정 가능
- **다양한 위젯 지원**: 시스템 모니터링(CPU, GPU, 메모리, 네트워크, 배터리, 볼륨), 일정 및 알림, 할 일 목록, 전원 관리, 네트워크 트래픽, 타일링 윈도우 매니저 연동, OBS 통합 등
- **풍부한 테마 갤러리**: [YASB Themes](https://github.com/amnweb/yasb-themes?tab=readme-ov-file)에서 커뮤니티가 만든 다양한 테마를 무료로 사용 가능
---

## 설치 방법

1. **공식 GitHub에서 직접 다운로드**
  - [YASB 공식 저장소](https://github.com/amnweb/yasb)에서 최신 릴리즈의 설치 파일(.exe) 다운로드
1. **패키지 매니저로 설치**
  - `winget install amnweb.yasb`
  - `scoop install yasb`
  - `choco install yasb`
1. **파이썬으로 직접 설치**
  - Python 3.12 환경에서:
```javascript
git clone https://github.com/amnweb/yasb.git
cd yasb
pip install .
```

1. **설정 및 실행**
  - 설치 후 `config.yaml`과 `styles.css` 파일을 원하는 대로 수정하면 끝!
  - [테마 모음](https://github.com/amnweb/yasb-themes)에서 마음에 드는 테마를 찾아 적용해보세요.
---

## 유용한 ricing/테마 자료

- [YASB 공식 테마 저장소](https://github.com/amnweb/yasb-themes?tab=readme-ov-file): 다양한 디자인의 테마를 바로 적용할 수 있습니다
  - 인기 테마: Modern Glass, Minimal but Productive, Gruvbox Material Dark, Fluent Design 등[github](https://github.com/amnweb/yasb-themes?tab=readme-ov-file)
- [r/windowsrc](https://www.reddit.com/r/windowsrc): 윈도우 커스터마이징 커뮤니티에서 다양한 작업 환경 아이디어를 얻을 수 있습니다
- [komorebi](https://github.com/LGUG2Z/komorebi)와 [GlazeWM](https://github.com/glzjin/GlazeWM): 윈도우용 타일링 매니저와 YASB를 연동하면 리눅스와 같은 작업 환경을 구현할 수 있습니다
- [sxykarr/yasb-configs](https://github.com/sxykarr/yasb-configs): 다른 사용자들의 설정 예시를 참고하여 나만의 설정을 만들어보세요
---

## 마무리

YASB는 **윈도우 환경에서 시스템 정보 시각화와 커스터마이징의 최고봉**입니다. 단순한 작업 표시줄을 넘어 **나만의 효율적인 작업 환경**을 만들 수 있는 완벽한 도구입니다. 설치와 설정이 간편하니, 지금 바로 시작해보세요!

---

**참고 링크**

- YASB 공식 GitHub: [YASB](https://github.com/amnweb/yasb)
- 테마 모음: [YASB Themes](https://github.com/amnweb/yasb-themes)
- 추천 커뮤니티: [r/windowsrc](https://www.reddit.com/r/windowsrc)

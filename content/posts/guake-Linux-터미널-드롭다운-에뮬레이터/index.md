---
title: "guake - Linux 터미널 드롭다운 에뮬레이터"
date: 2025-01-26T11:17:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Guake는 GNOME 데스크톱 환경을 위한 드롭다운 터미널 에뮬레이터로, 단일 단축키로 호출 가능하며 다중 탭과 화면 분할을 지원합니다. 사용자 정의가 가능하고 자동 시작 설정이 가능하며, 여러 모니터에서 사용이 가능합니다. 설치는 Ubuntu나 Debian 기반 시스템에서 간단한 명령으로 수행할 수 있습니다."
notion_id: "1871bab9-e3f8-80d6-a601-e6be1c02d27d"
notion_url: "https://www.notion.so/guake-Linux-1871bab9e3f880d6a601e6be1c02d27d"
---

# guake - Linux 터미널 드롭다운 에뮬레이터

> **Summary**
> Guake는 GNOME 데스크톱 환경을 위한 드롭다운 터미널 에뮬레이터로, 단일 단축키로 호출 가능하며 다중 탭과 화면 분할을 지원합니다. 사용자 정의가 가능하고 자동 시작 설정이 가능하며, 여러 모니터에서 사용이 가능합니다. 설치는 Ubuntu나 Debian 기반 시스템에서 간단한 명령으로 수행할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/575d3c04-bdd8-41ed-b8ce-38c1e92285be/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PH2DV7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHT5DdGH5hcYIu1ea%2FciTi60w2OqOK4xUeVw9qqP3D%2FKAiAqtWK7YtVZJK1RkoIJDx5n2LwwYy9eTvNqVvIU%2FeyYNCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMRETb1lTkYgQJGfq8KtwDfzmpoR5fg%2FwvHE4GwVRXpJW3ILbcJ5%2BDCKuly4Eb%2F8z4%2FdcLURVgHyu6Vl3v9Q%2B2bTC8B%2FAm0yUb0RZT7gJjQ%2BOnWY43Bu8z1x0arlyVdwE8LR0YtCfb3DVVaN1B5ztue3wQ0%2Bi7VcehY8J5Ot588zQVqWu1fXgIXlHd4LJNEUyrYUsrTzLqQ6Iq01J0wokJyZcxaSJyZd0sCvVd%2F597zaXxhTE6lq%2Fc3iRX%2BAjKtHnPS5FFAgF3j6pUbbXJqvht%2FBDNEz%2BkRl7vyC5vVg%2BHx0LrvS8kpghAPErIQk4qxGRn2hFG%2F1sDntmr8wCtNiFSWIHDnk1h1%2FQil9spvzCYXYg%2B3nndhRJt6LMkU2J%2BbSzvHJx%2F%2B%2BAZtSsyjXLl7TxEArXDvIasBezpbs6h6Mo0i4%2FHpziyZ%2F0mwnqQP2hZT9CEkUEb8GLTYBpymmWf7VMWcExOg27fR9v1DXQ30fEjEeKikS8eSE%2BF2kTGBYxexginiTovFnl7PV1HQwen6d8izgolgTlZEqEExV6%2FLzK09aP1QLezeSz4Z7JCRnUt9A2cEmxsJBjTSpjMaKlGMO5Bef8IsTMNpvltEbQg0ZO%2B5wBoyAXZXQPzzvaN6so6aBBMTGq%2F2ka5jkAHq9sw75uIxAY6pgEj%2BP1oHhjL%2Bq%2FSln8ffAaw17yULY9nzQqzPVejuHiKdEmoAtID6CBrVz%2FWmnvlsZ1SivCySQokvPFhEqa340jsWEctwF98nKphY3AGIIBNa5YpRyQDU1o6LqsmwYXzzHsnuNPfBdWNXHjpfUo336ETWAbE8fMgID8CSF8aSUZ%2FtSC0WrqsDulMCvqvuSZbCj44%2BQnuN37Z6oZNf4i9ufVGbniSA3go&X-Amz-Signature=3f591775b66c8cb8766dbd3be300f8dc1d97897d73c6293f5a59e08d196e544f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



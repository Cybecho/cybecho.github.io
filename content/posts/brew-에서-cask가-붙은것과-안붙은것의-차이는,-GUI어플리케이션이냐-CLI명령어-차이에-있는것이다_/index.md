---
title: "brew 에서 cask가 붙은것과 안붙은것의 차이는, GUI어플리케이션이냐 CLI명령어 차이에 있는것이다? "
date: 2026-01-02T23:48:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "Homebrew에서 Cask와 Formula의 차이는 GUI 애플리케이션과 CLI 도구의 설치 방식에 있다. GUI 앱은 "
notion_id: "2dc1bab9-e3f8-800c-b9c3-deb19dbbd03d"
notion_url: "https://www.notion.so/brew-cask-GUI-CLI-2dc1bab9e3f8800cb9c3deb19dbbd03d"
---

# brew 에서 cask가 붙은것과 안붙은것의 차이는, GUI어플리케이션이냐 CLI명령어 차이에 있는것이다? 

> **Summary**
> Homebrew에서 Cask와 Formula의 차이는 GUI 애플리케이션과 CLI 도구의 설치 방식에 있다. GUI 앱은 

---

![Image](image_3a317d34ad9d.png)

# `--CASK` 이거 뭐임?

가끔 그럴 때 있지 않습니까? 설치 명령어를 입력하다 보면 어떤 것은 Cask가 붙고, 어떤 것은 붙지 않을 때가 있습니다.

예를 들어, 최근에 Podman을 설치했을 때는 Cask를 붙이지 않고도 명령어를 잘 활용할 수 있었는데요. 반면에 UTM이 필요해서 설치할 때는 반드시 Cask를 붙여야 했습니다.

이런 차이가 왜 발생하는지 궁금해서 AI를 통해 정리해 본 내용을 여기에 기록해 둡니다.

## 배경: macOS의 이원적 앱 구조

**macOS의 앱 번들 철학**

macOS는 Apple이 NeXTSTEP 운영체제를 기반으로 만들면서 "앱 번들"이라는 개념을 도입했습니다. GUI 애플리케이션은 `/Applications` 폴더에 `.app`이라는 폴더 구조로 설치되며, 이 폴더 내부에는 실행 파일, 이미지, 아이콘, 설정 파일 등이 모두 포함되어 있습니다. 사용자 입장에서는 "UTM.app"을 하나의 단일 애플리케이션으로 인식하지만, 실제로는 `UTM.app/Contents/MacOS/utm` 같은 구조로 내부 자료가 완전히 자체 포함되어 있습니다. 이 설계는 사용자가 앱을 쉽게 옮기고, 삭제하고, 관리할 수 있도록 의도된 것입니다.[cdecl.github](https:/<wbr>/<wbr>cdecl.github.io/<wbr>devops/<wbr>homebrew-<wbr>formulae-<wbr>cask/<wbr>)

반면 CLI 도구는 Unix 전통에서 비롯되었습니다. 1970년대 Unix에서 `git`, `python`, `wget` 같은 도구들은 **단일 실행 파일 + 공유 라이브러리** 형태로 설계되었습니다. 이들은 소스 코드에서 컴파일되어 `/usr/bin`이나 `/usr/local/bin` 같은 표준 경로에 설치되고, 여러 프로그램이 공유 라이브러리를 함께 사용합니다. 이 구조는 효율성과 자동화를 위해 설계된 것입니다.[cdecl.github](https:/<wbr>/<wbr>cdecl.github.io/<wbr>devops/<wbr>homebrew-<wbr>formulae-<wbr>cask/<wbr>)

**두 구조가 나뉜 역사적 이유**

macOS가 등장한 초기에는 GUI 앱도 CLI 도구와 유사한 방식으로 설치되었지만, Apple이 GUI 중심의 사용자 경험을 강조하면서 앱 번들 개념을 강화했습니다. 2000년대 초반 DMG(Disk Image)와 ZIP 파일이 표준 배포 형식이 되었고, 이는 "완성된 패키지"를 다운로드하는 방식입니다. 즉, GUI 앱은 이미 **컴파일되어 완성된 바이너리**로 배포되므로, 사용자나 패키지 관리자가 재컴파일할 필요가 없습니다. 반면 CLI 도구는 개발자들 사이에서 여전히 **소스 코드를 컴파일하는 방식**을 선호했습니다. 이것이 Apple Silicon (M4) 같은 새로운 아키텍처가 나올 때마다 CLI 도구는 새로 컴파일되어야 하는 이유입니다.[naver+1](https:/<wbr>/<wbr>blog.naver.com/<wbr>kiros33/<wbr>220083258955)

## 전개: Homebrew의 Formula와 Cask 분리 전략

**Formula: CLI 도구의 자동화된 컴파일**

Homebrew가 2009년 탄생했을 때는 Mac 개발자들이 Linux의 `apt` 같은 패키지 매니저처럼 CLI 도구를 쉽게 설치하고 싶어했습니다. 이것이 **Formula**의 시작입니다. Formula는 소스 코드를 다운로드받아 `./configure && make && make install` 같은 표준 컴파일 과정을 **자동화**하며, 의존성도 함께 설치합니다. 예를 들어 `brew install python`을 실행하면 Python 소스를 다운로드하고, macOS 시스템에 최적화된 설정으로 컴파일하여 `/opt/homebrew/Cellar/python/x.x.x/bin/python`에 설치합니다. 이 방식의 장점은 **M4 Mac Mini 같은 Apple Silicon 환경에 완벽하게 최적화된 바이너리**를 얻을 수 있다는 점입니다.

CLI 도구를 이 위치에 설치하는 이유는 Unix 전통 때문입니다. `/opt/homebrew/bin`은 macOS의 `PATH` 환경 변수에 포함되어 있어서, 터미널에서 `podman run` 같은 명령을 입력하면 자동으로 이 경로를 검색합니다. 반대로 `/Applications`에 실행 파일을 놓으면 터미널 PATH에 포함되지 않아 `./Applications/podman` 같이 전체 경로를 입력해야 합니다. 이는 개발자 워크플로와 자동화 스크립트에 불편합니다.library

**Cask: GUI 앱의 배포 자동화**

2013년경 Homebrew 커뮤니티는 GUI 앱도 관리하고 싶어했습니다. 하지만 GUI 앱은 대부분 **바이너리로 이미 컴파일되어 배포**되므로, 소스에서 컴파일할 필요가 없습니다. DMG 파일을 다운로드하고 `.app` 번들을 `/Applications`로 옮기는 과정을 자동화하면 되었습니다. 이것이 **Homebrew Cask**입니다. `brew install --cask utm`을 실행하면 Cask가 UTM.app의 DMG를 다운로드하고, 압축을 풀어 `/Applications` 또는 `~/Applications`에 설치합니다.

GUI 앱을 `/Applications`에 설치하는 이유는 macOS의 표준 관례입니다. Spotlight (Cmd+Space) 검색이 `/Applications`를 중심으로 인덱싱하므로, 사용자가 "UTM"을 검색하면 바로 앱을 찾을 수 있습니다. 또한 Dock에 앱을 핀으로 고정하거나 Launchpad에서 관리하는 것도 모두 `/Applications` 위치를 기준으로 작동합니다. CLI 도구를 이 위치에 놓으면 GUI 시스템과의 통합이 복잡해집니다.

**왜 둘을 나눈가?**

가장 핵심적인 질문은 "왜 하나로 통합하지 않았는가"입니다. 이유는 두 가지 설치 방식의 요구사항이 **완전히 다르기 때문**입니다. CLI 도구는 컴파일 과정, 의존성 해결, PATH 통합을 필요로 하지만, GUI 앱은 이 모든 것과 무관합니다. GUI 앱을 컴파일하려고 시도하면 DMG 이미지를 풀어야 하고, `.app` 번들 내부 구조를 파악해야 하며, 모든 포함된 자료의 상대 경로를 유지해야 합니다. 반대로 CLI 도구를 "바이너리만 다운로드" 방식으로 관리하려면 모든 의존성을 미리 컴파일된 형태로 제공해야 하므로, 새로운 아키텍처나 macOS 버전이 나올 때마다 모든 바이너리를 다시 준비해야 합니다. 따라서 Homebrew는 **각 타입에 최적화된 전략**을 선택했습니다.[ds31x.tistory](https://ds31x.tistory.com/148)

## 결론: 구조적 분리의 실제 의미

**설치 위치는 사용 목적을 반영한다**

결국 Homebrew의 Formula와 Cask 분리는 단순한 "위치 차이"가 아닙니다. 이는 **macOS 생태계의 두 가지 활용 패턴을 인정**하는 설계입니다. CLI 도구는 개발자와 시스템 관리자를 위한 것이므로 터미널에서 쉽게 실행되어야 하고 (`/opt/homebrew/bin`), GUI 앱은 일반 사용자를 위한 것이므로 Spotlight와 Dock에서 쉽게 찾아야 합니다 (`/Applications`).

**하이퍼바이저 설치의 실제 사례로 이해하기**

이를 실제 사례로 확인할 수 있습니다. 사용자가 M4 Mac Mini에서 가상 머신을 실행하려고 할 때, **Podman (CLI)** 과 **UTM (GUI)** 이라는 두 선택지가 있습니다.

`brew install podman`을 선택하면, Podman CLI 도구가 `/opt/homebrew/bin`에 설치됩니다. 이후 터미널에서 `podman machine init` → `podman machine start` → `podman run` 같은 명령들을 입력하여 완전히 터미널 기반으로 컨테이너를 관리합니다. 이는 홈 서버 구축이나 자동화 스크립트에 이상적입니다. 실행 방식이 완전히 CLI 중심이고, 다른 도구와의 연계나 배치 작업이 쉽기 때문입니다.library

`brew install --cask utm`을 선택하면, UTM.app은 `/Applications`에 설치되고, 사용자는 Spotlight에서 "UTM"을 검색해 앱을 실행합니다. UTM은 GUI 기반이므로 마우스로 VM을 생성하고, 설정하고, 실행할 수 있습니다. VM 파일은 사용자가 지정한 위치에 자유롭게 저장될 수 있으며, 앱을 통해 시각적으로 관리됩니다. 이는 홈랩 환경에서 여러 VM을 편하게 다루려는 사용자에게 적합합니다.

**구조적 선택의 장점**

Homebrew가 두 가지 방식을 분리함으로써 얻은 실질적 이점은 다음과 같습니다. 첫째, 사용자는 자신의 목적에 맞는 도구를 선택할 수 있습니다. CLI가 필요하면 Formula, GUI가 필요하면 Cask. 둘 다 `brew list`, `brew upgrade`, `brew uninstall` 같은 통일된 인터페이스로 관리됩니다. 둘째, 각 타입이 최적화되어 성능과 안정성이 보장됩니다. CLI 도구는 M4 같은 새 아키텍처에서 완벽하게 컴파일되고, GUI 앱은 앱 스토어 수준의 배포 품질을 유지합니다. 셋째, macOS의 설계 철학을 존중하면서도 개발자 효율성을 높입니다.[stackoverflow](https:/<wbr>/<wbr>stackoverflow.com/<wbr>questions/<wbr>46403937/<wbr>what-<wbr>is-<wbr>the-<wbr>difference-<wbr>between-<wbr>brew-<wbr>install-<wbr>x-<wbr>and-<wbr>brew-<wbr>cask-<wbr>install-<wbr>x)

**최종 이해**

따라서 "왜 GUI는 `/Applications`에, CLI는 `/opt/homebrew/bin`에 설치되는가"라는 질문의 답은 이렇습니다: **그것이 각각의 목적을 가장 효과적으로 달성하는 방식이기 때문**입니다. GUI 앱은 일반 사용자의 macOS 워크플로에 맞추어 설계된 경로에, CLI 도구는 개발자의 자동화 워크플로에 맞추어 설계된 경로에 설치됩니다. 이는 레거시 프로그램 때문이 아니라, **macOS와 Unix라는 두 전통이 만난 지점에서 각각의 최적점을 찾은 결과**입니다. UTM을 Cask로 설치하든, Podman을 Formula로 설치하든, 모두 `brew`를 통해 통합 관리되지만 각각의 특성에 맞게 최적화되어 있다는 점이 Homebrew의 우수한 설계입니다.

---

1. [https://cdecl.github.io/devops/homebrew-formulae-cask/](https:/<wbr>/<wbr>cdecl.github.io/<wbr>devops/<wbr>homebrew-<wbr>formulae-<wbr>cask/<wbr>)
1. [https://blog.naver.com/kiros33/220083258955](https:/<wbr>/<wbr>blog.naver.com/<wbr>kiros33/<wbr>220083258955)
1. [https://ds31x.tistory.com/148](https://ds31x.tistory.com/148)
1. [https://www.perplexity.ai/search/1414ba2e-97e1-4f65-98e6-e7ef227f8d77](https:/<wbr>/<wbr>www.perplexity.ai/<wbr>search/<wbr>1414ba2e-<wbr>97e1-<wbr>4f65-<wbr>98e6-<wbr>e7ef227f8d77)
1. [https://stackoverflow.com/questions/46403937/what-is-the-difference-between-brew-install-x-and-brew-cask-install-x](https:/<wbr>/<wbr>stackoverflow.com/<wbr>questions/<wbr>46403937/<wbr>what-<wbr>is-<wbr>the-<wbr>difference-<wbr>between-<wbr>brew-<wbr>install-<wbr>x-<wbr>and-<wbr>brew-<wbr>cask-<wbr>install-<wbr>x)

---
title: "Let’s Bootc! [5] - Anaconda : "
date: 2026-01-25T07:18:00.000Z
draft: false
tags: ["Docker", "Infra"]
series: ["Meet The Bootc"]
description: "Anaconda는 25년간 RHEL 계열 리눅스의 표준 설치 프로그램으로, kickstart 파일을 통해 반복 가능한 설치를 지원합니다. bootc-image-builder는 ISO를 생성할 때 anaconda를 활용하여 컨테이너 이미지를 배포하며, 기존의 검증된 설치 프로그램을 재활용하는 이유는 비용 절감과 호환성 때문입니다. toml 파일은 사용자 설정을 정의하고 kickstart 파일로 변환되어 anaconda에 전달됩니다. 새로운 기술이 반드시 새로워야 하는 것은 아니며, 기존 인프라를 최대한 활용하는 것이 중요합니다."
notion_id: "2f31bab9-e3f8-8086-a1ac-d80e854ab880"
notion_url: "https://www.notion.so/Let-s-Bootc-5-Anaconda-Boot-Process-2f31bab9e3f88086a1acd80e854ab880"
---

# Let’s Bootc! [5] - Anaconda : 

> **Summary**
> Anaconda는 25년간 RHEL 계열 리눅스의 표준 설치 프로그램으로, kickstart 파일을 통해 반복 가능한 설치를 지원합니다. bootc-image-builder는 ISO를 생성할 때 anaconda를 활용하여 컨테이너 이미지를 배포하며, 기존의 검증된 설치 프로그램을 재활용하는 이유는 비용 절감과 호환성 때문입니다. toml 파일은 사용자 설정을 정의하고 kickstart 파일로 변환되어 anaconda에 전달됩니다. 새로운 기술이 반드시 새로워야 하는 것은 아니며, 기존 인프라를 최대한 활용하는 것이 중요합니다.

---

![Image](image_f4ed4da75bb4.png)

# 설치할 때 anaconda는 왜 나타나는가?

## 익숙한 화면, 낯선 맥락

퀵스타트를 따라 ISO를 구워서 부팅하면, 익숙한 화면이 나타납니다. 파란 배경에 설치 옵션들이 배열된 그 화면. RHEL이나 CentOS를 설치해 본 사람이라면 바로 알아볼 수 있습니다. anaconda입니다.

"어? 이건 RHEL 설치할 때 보던 건데?"

맞습니다. 정확히 그 설치 프로그램입니다. 그런데 여기서 의문이 생깁니다. bootc는 컨테이너 이미지로 운영체제를 배포하는 새로운 방식이라고 했습니다. 불변 인프라, OCI 표준, OSTree. 전부 새로운 기술들입니다. 그런데 왜 설치 과정에서는 25년 전에 만들어진 설치 프로그램이 등장하는 것일까요?

이 질문에 답하려면 먼저 anaconda가 무엇인지, 그리고 kickstart가 어떤 역할을 하는지 이해해야 합니다.

---

## anaconda: 도마뱀을 잡아먹는 뱀

anaconda의 역사는 1990년대 후반으로 거슬러 올라갑니다. 당시 리눅스 진영에서는 설치 프로그램을 두고 치열한 경쟁이 벌어지고 있었습니다.

유타주에 있던 Caldera라는 회사가 먼저 움직였습니다. 그들은 Lizard라는 이름의 그래픽 설치 프로그램을 만들었습니다. C++와 Qt 툴킷으로 작성된 이 설치 프로그램은 리눅스 배포판 최초의 GUI 설치 프로그램이었습니다. 설치 중에 테트리스까지 할 수 있었다고 합니다.

Red Hat은 대응해야 했습니다. 기존 설치 프로그램은 전부 C로 작성되어 있었고, 개발 속도가 느렸습니다. Erik Troan이라는 개발자가 새로운 접근법을 제안했습니다. UI 워크플로우를 Python으로 작성하자는 것이었습니다.

이렇게 탄생한 설치 프로그램의 이름이 anaconda입니다. 이름의 유래가 재미있습니다. 첫째, Python으로 작성되었으니 Python 뱀의 일종인 아나콘다. 둘째, 아나콘다는 야생에서 도마뱀을 잡아먹습니다. Lizard를 잡아먹겠다는 의지의 표현이었습니다.

1999년 Red Hat Linux 6.0과 함께 첫 선을 보인 anaconda는 이후 25년간 RHEL 계열 배포판의 표준 설치 프로그램으로 자리 잡았습니다. Fedora, CentOS, Rocky Linux, AlmaLinux, Oracle Linux 등 수많은 배포판이 이 설치 프로그램을 사용합니다.

anaconda가 수행하는 핵심 작업은 네 가지로 정리됩니다.

첫째, 설치 대상 준비입니다. 주로 디스크 파티셔닝을 의미합니다. 둘째, 소프트웨어 선택 및 설치입니다. 어떤 패키지들을 설치할지 결정하고 실행합니다. 셋째, 시스템 설정입니다. 언어, 키보드, 시간대, 네트워크 등을 구성합니다. 넷째, 부트로더 설치입니다. 설치된 시스템을 부팅 가능하게 만드는 마지막 단계입니다.

---

## kickstart: 반복 가능한 설치의 핵심

anaconda는 GUI와 텍스트 모드를 모두 지원합니다. 하지만 수십, 수백 대의 서버를 설치해야 한다면 어떨까요? 매번 화면을 보며 클릭하는 것은 현실적이지 않습니다.

kickstart는 이 문제를 해결합니다. 설치 과정에서 필요한 모든 설정을 텍스트 파일 하나에 담아두고, anaconda가 이 파일을 읽어 자동으로 설치를 진행하게 만드는 방식입니다.

kickstart 파일은 단순한 텍스트 파일입니다. 셸 스크립트와 비슷한 문법을 사용하며, 디스크 파티셔닝, 패키지 선택, 네트워크 설정, 사용자 계정 생성 등 설치에 필요한 모든 것을 선언적으로 정의할 수 있습니다.

예를 들어 이런 식입니다:

```plain text
lang en_US.UTF-8
keyboard us
timezone America/New_York --utc
rootpw changeme
zerombr
clearpart --all --initlabel
autopart

```

이 파일을 anaconda에게 전달하면, 사용자 개입 없이 전체 설치가 진행됩니다. 한 번 잘 만들어둔 kickstart 파일은 동일한 설정의 시스템을 얼마든지 복제할 수 있게 해줍니다.

kickstart의 존재가 중요한 이유가 있습니다. 설치 과정 자체가 코드화된다는 점입니다. 설치 설정을 버전 관리할 수 있고, 리뷰할 수 있고, 재현할 수 있습니다. Infrastructure as Code의 한 형태입니다.

---

## bootc-image-builder의 내부: 새 술, 헌 부대

이제 bootc-image-builder로 돌아옵니다. 이 도구가 ISO를 생성할 때 내부적으로 무슨 일이 일어나는 걸까요?

bootc-image-builder는 여러 유형의 이미지를 생성할 수 있습니다. qcow2, raw, vmdk, vhd 같은 디스크 이미지도 있고, anaconda-iso나 iso 같은 설치 미디어도 있습니다. 우리가 관심 있는 것은 ISO 타입입니다.

ISO 빌드 과정에서 bootc-image-builder는 내부적으로 osbuild라는 도구를 사용합니다. 빌드 로그를 보면 여러 파이프라인이 순차적으로 실행되는 것을 확인할 수 있습니다. 그중 하나가 `anaconda-tree`입니다. bootc-image-builder는 anaconda 설치 환경 전체를 ISO에 포함시킵니다.

여기서 핵심적인 점이 있습니다. bootc-image-builder는 kickstart 파일을 자동으로 생성합니다. 이 kickstart에는 `ostreecontainer` 명령이 포함됩니다. 이 명령이 anaconda에게 컨테이너 이미지에서 시스템을 배포하라고 지시하는 것입니다.

Red Hat 문서를 보면 이렇게 설명되어 있습니다. "bootc-image-builder automatically adds the command that installs the container image (ostreecontainer ...), so this line or any line that conflicts with it should not be included." 즉, 컨테이너 이미지를 설치하는 핵심 명령은 도구가 알아서 추가하고, 사용자는 나머지 설정만 커스터마이징하면 됩니다.

최근에는 anaconda 자체에도 `bootc` 킥스타트 명령이 추가되었습니다. 기존 `ostreecontainer` 명령과 유사하지만, bootc 기반 부팅 가능 컨테이너에 최적화된 명령입니다. Fedora Magazine의 최근 기사에 따르면, 이 기능은 몇 주 전에 추가되었다고 합니다.

흐름을 정리하면 이렇습니다:

1. 사용자가 bootc-image-builder에 컨테이너 이미지 참조와 설정을 전달합니다.
1. bootc-image-builder는 내부적으로 kickstart 파일을 생성합니다.
1. 이 kickstart에는 사용자 설정과 함께 ostreecontainer(또는 bootc) 명령이 포함됩니다.
1. anaconda 환경과 kickstart가 포함된 ISO가 생성됩니다.
1. 이 ISO로 부팅하면 anaconda가 kickstart를 읽고 자동 설치를 진행합니다.
1. ostreecontainer 명령에 따라 컨테이너 이미지가 디스크에 배포됩니다.
---

## 왜 기존 프레임워크를 재활용하는가

새로운 기술을 도입할 때 두 가지 선택지가 있습니다. 모든 것을 새로 만들거나, 기존의 검증된 것을 재활용하거나.

bootc 진영은 후자를 선택했습니다. 그 이유를 생각해 봅니다.

첫째, anaconda는 25년간 검증된 도구입니다. 수천만 대의 서버에 RHEL 계열 리눅스를 설치해 왔습니다. 하드웨어 호환성, 엣지 케이스 처리, 다양한 설치 시나리오에 대한 노하우가 축적되어 있습니다. 이것을 새로 만든다는 것은 엄청난 비용입니다.

둘째, kickstart 생태계를 활용할 수 있습니다. 이미 수많은 조직이 kickstart 파일을 가지고 있습니다. 서버 프로비저닝 자동화 파이프라인에 kickstart가 통합되어 있습니다. bootc가 이 생태계와 호환된다면, 기존 인프라를 최대한 활용하면서 점진적으로 전환할 수 있습니다.

셋째, 설치 프로그램은 핵심이 아닙니다. bootc의 핵심 가치는 컨테이너 이미지로 운영체제를 정의하고, 원자적으로 업데이트하며, 일관성 있게 배포하는 것입니다. 설치 프로그램은 단지 그 이미지를 디스크에 처음 넣어주는 역할일 뿐입니다. 핵심이 아닌 부분에 에너지를 쏟기보다 검증된 도구를 활용하는 것이 합리적입니다.

GitHub 이슈를 보면 흥미로운 논의가 있습니다. "Add support for iso" 이슈(#433)에서는 anaconda 없이 컨테이너 이미지 자체를 부팅 가능한 ISO로 만드는 방안이 논의되고 있습니다. Fedora CoreOS가 사용하는 방식입니다. 장기적으로는 anaconda 자체도 bootc 컨테이너 이미지가 될 수 있다는 의견도 있습니다. 아직은 anaconda-iso가 표준이지만, 앞으로는 다양한 옵션이 생길 수 있습니다.

---

## toml과 kickstart의 관계

한 가지 더 짚고 넘어갈 부분이 있습니다. bootc-image-builder를 사용할 때 config.toml 파일을 전달합니다. 이 toml 파일과 kickstart는 어떤 관계일까요?

toml 파일은 bootc-image-builder의 입력 형식입니다. 사용자 설정, 파티션 레이아웃, ISO 메타데이터 등을 정의합니다. bootc-image-builder는 이 toml을 읽어서 내부적으로 kickstart를 생성합니다.

toml 안에서 kickstart 내용을 직접 지정할 수도 있습니다:

```toml
[customizations.installer.kickstart]
contents = """
text
network --bootproto=dhcp --device=link --activate
clearpart --all --initlabel
autopart
"""

```

이렇게 하면 사용자가 직접 작성한 kickstart 조각이 최종 kickstart에 포함됩니다. 단, ostreecontainer 명령은 bootc-image-builder가 자동으로 추가하므로 직접 넣으면 안 됩니다.

toml은 kickstart를 감싸는 껍데기라고 생각하면 됩니다. 더 구조화된 형식으로 설정을 정의하고, 그것이 내부적으로 kickstart로 변환되어 anaconda에게 전달됩니다.

---

## 아직 확인이 필요한 부분

이 글을 쓰면서 명확하게 확인하지 못한 부분이 있습니다.

bootc-image-builder가 kickstart를 생성하는 정확한 로직입니다. toml의 각 옵션이 어떻게 kickstart 명령으로 매핑되는지, ostreecontainer 명령의 정확한 파라미터가 어떻게 결정되는지에 대한 세부 사항은 소스 코드를 직접 분석해야 알 수 있을 것 같습니다. osbuild 프로젝트의 코드를 살펴봐야 할 것 같습니다.

또한 최근 추가된 bootc 킥스타트 명령과 기존 ostreecontainer 명령의 차이점도 더 파봐야 합니다. Fedora Magazine 기사에서는 "under the hood"에서 차이가 있다고만 언급하고 있습니다.

---

## 정리하며

bootc ISO를 부팅했을 때 anaconda가 나타나는 것은 버그가 아닙니다. 의도된 설계입니다.

새로운 기술이 반드시 모든 것을 새로 만들어야 하는 것은 아닙니다. bootc는 운영체제 배포의 핵심 부분인 이미지 정의, 배포, 업데이트 메커니즘에 집중합니다. 설치 프로그램이라는 비핵심 영역에서는 25년간 검증된 anaconda를 재활용합니다.

이것이 바로 컨테이너 생태계의 힘입니다. OCI 표준 덕분에 기존 레지스트리 인프라를 그대로 쓸 수 있듯이, anaconda와 kickstart 덕분에 기존 프로비저닝 인프라도 활용할 수 있습니다.

다음 글에서는 이 toml 설정 파일에 대해 더 자세히 살펴보겠습니다. 어떤 옵션들이 있고, 무엇을 설정할 수 있으며, 그 설정들이 최종 시스템에 어떻게 반영되는지 정리해 보겠습니다.


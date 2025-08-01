---
title: "Linux에 macOS를 가상화하는 두가지 방법"
date: 2025-02-09T02:49:00.000Z
draft: false
tags: ["RHEL/Fedora/Rocky", "Arch", "ubuntu", "Debian"]
series: ["Let's Linux!"]
description: "Linux 기반 PC에서 macOS를 가상 머신으로 실행하는 방법과 성능 비교를 다루며, 가상 머신 방식이 Hackintosh보다 안정적이고 관리가 용이하다는 점을 강조합니다. 최적화된 설정을 통해 macOS가 네이티브 Mac Pro보다 최대 4배 빠른 성능을 보여줄 수 있으며, GPU 패스스루를 활용하면 더욱 강력한 환경을 구축할 수 있습니다."
notion_id: "1951bab9-e3f8-8044-86f5-d3c3e374e635"
notion_url: "https://www.notion.so/Linux-macOS-1951bab9e3f8804486f5d3c3e374e635"
---

# Linux에 macOS를 가상화하는 두가지 방법

> **Summary**
> Linux 기반 PC에서 macOS를 가상 머신으로 실행하는 방법과 성능 비교를 다루며, 가상 머신 방식이 Hackintosh보다 안정적이고 관리가 용이하다는 점을 강조합니다. 최적화된 설정을 통해 macOS가 네이티브 Mac Pro보다 최대 4배 빠른 성능을 보여줄 수 있으며, GPU 패스스루를 활용하면 더욱 강력한 환경을 구축할 수 있습니다.

---

[https://darktornado.github.io/blog/kvm-macos/](https://darktornado.github.io/blog/kvm-macos/)

[https://youtu.be/nWH8oPpUKu0?si=VU8zJWGktOJtmNoJ](https://youtu.be/nWH8oPpUKu0?si=VU8zJWGktOJtmNoJ)

[https://youtu.be/-wCYJkEqHcY?si=VNkD_Vpq5i1ne0xR](https://youtu.be/-wCYJkEqHcY?si=VNkD_Vpq5i1ne0xR)

🎥 [동영상 보기](https://youtu.be/-Otg7JFMuVw?si=g5rkOwaPgHnh9mOu)

**3줄 요약**

1.	영상은 Linux 기반 PC에서 macOS를 가상 머신으로 실행하는 방법과 성능 비교를 다룹니다.

2.	macOS를 가상 머신에서 실행하면 백업 및 업데이트 관리가 쉬운 장점이 있지만 성능 조정이 필요합니다.

3.	최적화된 설정을 통해 Linux에서 실행하는 macOS가 네이티브 Mac Pro보다 최대 4배 빠른 성능을 보여줍니다.

**Linux에서 macOS 가상 머신 실행하기**

**1. Hackintosh가 아닌 가상 머신 방식**

•	기존 **Hackintosh**(비공식적으로 macOS를 비애플 하드웨어에서 실행) 방식 대신, **Linux에서 macOS를 가상 머신(VM)으로 실행**.

•	가상 머신 방식은 macOS를 호스트 OS(Linux) 내에서 실행하는 프로그램처럼 작동함.

•	주요 장점:

•	설치 및 설정이 상대적으로 간편.

•	macOS 업데이트로 인한 호환성 문제를 방지할 수 있음.

•	백업 및 복원이 용이함.

**2. Linux에서 macOS 실행 방법**

**1) 호스트 OS 선택**

•	**Arch 기반의 Linux 배포판이 성능이 가장 우수**하지만, 초보자에게는 설치가 어려움.

•	**Manjaro + KDE Plasma** 환경이 가장 추천됨(사용자 친화적).

**2) 가상화 활성화**

•	Intel: **VT-d 옵션 활성화(기본적으로 활성화됨)**.

•	AMD: **AMD-V 옵션 수동 활성화 필요**.

**3) 가상 머신 설치 및 실행**

•	QEMU + KVM을 활용하여 macOS를 가상화.

•	가장 추천되는 두 가지 방법:

1.	**Sosumi** (간편한 Snap 패키지)

•	터미널에서 sudo snap install sosumi 입력 후 실행 가능.

2.	**macOS Simple KVM** (더 강력한 커스터마이징 가능)

•	더 많은 CPU/메모리 할당이 가능하여 성능 개선.

•	Python, Pip 등의 추가 설정 필요하지만 최상의 성능 제공.

**3. 성능 조정 및 비교**

**1) 기본 설정의 한계**

•	기본 설정에서는 **2GB RAM 및 2개 CPU 코어만 할당됨** → 성능이 낮음.

•	**GPU 및 USB 장치 패스스루가 기본적으로 지원되지 않음**.

**2) 최적화 방법**

•	**macOS Simple KVM**에서 직접 스크립트 수정하여 CPU/메모리 설정 조정.

•	적절한 **GPU 패스스루 및 PCIe 장치 설정**을 적용하면 네이티브 성능에 가깝게 운영 가능.

**3) 성능 비교**

•	AMD **Threadripper 3990X(64코어 CPU)** 를 사용한 경우, **네이티브 Mac Pro 대비 4배 빠른 성능** 기록.

•	가상화 환경에서도 **네이티브 macOS와 비교해 10~20% 정도만 성능 손실** 발생.

**결론**

Linux 기반 PC에서 macOS를 가상 머신으로 실행하는 것은 Hackintosh보다 더 안정적이고 관리가 쉬운 방식입니다. 적절한 최적화를 거치면 네이티브 Mac보다 뛰어난 성능을 구현할 수 있으며, 특히 GPU 패스스루를 활용하면 더욱 강력한 macOS 환경을 구축할 수 있습니다.


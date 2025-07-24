---
title: "하드웨어 수준의 자원 공유(캐시, TLB, 버스 대역폭)는 완전한 격리가 어려워진다."
date: 2025-02-25T01:00:00.000Z
draft: false
tags: ["Docker"]
series: ["Infra & Network"]
description: "하드웨어 수준의 자원 공유는 완전한 격리를 어렵게 만들며, Intel VT-x와 같은 기술이 하이퍼바이저 수준의 격리를 제공하지만, 컨테이너 환경에서는 CR3 스위칭을 사용하여 데이터 유출 가능성이 존재한다. 스레드 지역 저장소(TLS)는 프로세스 컨텍스트 스위치 시 자동으로 갱신되지만, Spectre/Meltdown 취약점이 이를 위협한다. cgroup 기반 CPU 자원 관리 모델은 물리적 코어 독점이 아닌 시간 축 자원 분배를 통해 멀티테넌트 환경을 지원하며, 차세대 기술은 하드웨어 기능을 활용한 향상된 격리 정책을 도입할 것으로 예상된다."
notion_id: "1a51bab9-e3f8-8025-98bc-caf4a7b6532e"
notion_url: "https://www.notion.so/TLB-1a51bab9e3f8802598bccaf4a7b6532e"
---

# 하드웨어 수준의 자원 공유(캐시, TLB, 버스 대역폭)는 완전한 격리가 어려워진다.

> **Summary**
> 하드웨어 수준의 자원 공유는 완전한 격리를 어렵게 만들며, Intel VT-x와 같은 기술이 하이퍼바이저 수준의 격리를 제공하지만, 컨테이너 환경에서는 CR3 스위칭을 사용하여 데이터 유출 가능성이 존재한다. 스레드 지역 저장소(TLS)는 프로세스 컨텍스트 스위치 시 자동으로 갱신되지만, Spectre/Meltdown 취약점이 이를 위협한다. cgroup 기반 CPU 자원 관리 모델은 물리적 코어 독점이 아닌 시간 축 자원 분배를 통해 멀티테넌트 환경을 지원하며, 차세대 기술은 하드웨어 기능을 활용한 향상된 격리 정책을 도입할 것으로 예상된다.

---

[https://www.perplexity.ai/search/nae-gunggeumjeunggwa-daedabeul-Vlymw0PsQouamslDcGW9kw](https://www.perplexity.ai/search/nae-gunggeumjeunggwa-daedabeul-Vlymw0PsQouamslDcGW9kw)

## **하드웨어 수준의 자원 공유와 격리 메커니즘**

### **레지스터 상태 관리의 보안성**

물리적 코어의 레지스터 세트는 컨텍스트 스위칭 시 CR3 컨트롤 레지스터(페이지 테이블 기준 주소)를 포함한 전체 상태를 TSS(Task State Segment)에 저장/복구합니다. 

Intel VT-x 기술은 VMCS(Virtual Machine Control Structure)를 통해 하이퍼바이저 수준 격리를 제공하지만, 컨테이너 환경에서는 일반적으로 더 경량화된 CR3 스위칭을 사용합니다. 

**이 과정에서 이전 프로세스의 레지스터 값은 L1 캐시에서 제거되지 않지만, 메모리 암호화 기술(예: Intel SGX)이 적용되지 않은 한 이론적 데이터 유출 가능성이 존재합니다.**

### **TLS(스레드 지역 저장소)의 격리 보장 메커니즘**

[Untitled](https://www.notion.so/94fc12fb2048426c8c16d38184e91262) 

x86 아키텍처에서 FS/GS 세그먼트 레지스터는 TLS 블록의 기준 주소를 가리키며, 커널은 프로세스 컨텍스트 스위치 시 이 값을 자동으로 갱신합니다. 다음 어셈블리 코드는 GLIBC의 TLS 접근 방식을 보여줍니다:

```javascript
mov %fs:0x0,%rax  # TLS 변수 접근
```

컨테이너 환경에서 각 프로세스는 독립적인 TLS 레이아웃을 가지며, 특히 clone() 시스템 콜의 CLONE_NEWPID 플래그가 이를 강화합니다. 그러나 Spectre/Meltdown 취약점은 이러한 논리적 격리를 우회할 수 있는 하드웨어 결함을 노출시킨 사례입니다.

## **실전 할당 시나리오 분석: 4코어 시스템에서의 50% CPU 할당**

### **이상적 작업 부하 조건에서의 자원 활용**

2개의 CPU 집약적 컨테이너(A:50%, B:50%)가 동시 실행될 경우, CFS 스케줄러는 각 컨테이너에 2코어-초/초를 할당합니다. 그러나 실제 물리 코어 사용은 작업 분산 알고리즘에 따라 동적으로 변경됩니다:

```javascript
graph LR
    S[스케줄러] --> C1[코어1: A 30ms]
    S --> C2[코어2: B 45ms]
    S --> C3[코어3: A 15ms]
    S --> C4[코어4: 유휴]
```

이 차트는 100ms 주기 내에서 컨테이너 A가 45ms, B가 45ms를 사용하는 비동기적 스케줄링을 보여줍니다. 유휴 코어는 다른 시스템 프로세스에 활용됩니다.

# 결국 격리는 OS상에서 돈다~

cgroup 기반 CPU 자원 관리 모델은 물리적 코어 독점이 아닌 시간 축 자원 분배를 통해 밀집된 멀티테넌트 환경을 지원합니다. 

그러나 하드웨어 수준의 미세한 자원 공유(캐시, TLB, 버스 대역폭)는 완전한 격리를 달성하기 어렵게 만듭니다. 

차세대 기술은 Intel RDT(Resource Director Technology)의 Cache Allocation Technology나 AMD의 Platform QoS 확장을 cgroup과 통합하여 이러한 한계를 극복할 전망입니다. 

컨테이너 런타임은 이러한 하드웨어 기능을 활용한 향상된 격리 정책을 점차 도입할 것으로 예상됩니다.


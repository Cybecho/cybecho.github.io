---
title: "어쩌면 당연하지 않을 1티어와 3티어, 그 본질에 관하여"
date: 2025-03-15T03:54:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "3티어 아키텍처는 수직 확장과 수평 확장, 논리적/물리적 티어의 개념을 이해해야 하며, 1티어는 모든 기능이 단일 서버에서 실행되는 반면, 3티어는 각 층이 독립적으로 확장 가능하다. 논리적 3티어는 기능적 분리를 의미하고, 물리적 3티어는 각 층이 별도의 서버에 배치되는 것을 의미한다. 단일 서버에 컨테이너로 WEB, WAS, DB를 올리는 경우, 논리적 3티어로 간주되지만 물리적으로는 1티어로 여겨질 수 있다."
notion_id: "1b71bab9-e3f8-803e-a33b-ff2716adea3a"
notion_url: "https://www.notion.so/1-3-1b71bab9e3f8803ea33bff2716adea3a"
---

# 어쩌면 당연하지 않을 1티어와 3티어, 그 본질에 관하여

> **Summary**
> 3티어 아키텍처는 수직 확장과 수평 확장, 논리적/물리적 티어의 개념을 이해해야 하며, 1티어는 모든 기능이 단일 서버에서 실행되는 반면, 3티어는 각 층이 독립적으로 확장 가능하다. 논리적 3티어는 기능적 분리를 의미하고, 물리적 3티어는 각 층이 별도의 서버에 배치되는 것을 의미한다. 단일 서버에 컨테이너로 WEB, WAS, DB를 올리는 경우, 논리적 3티어로 간주되지만 물리적으로는 1티어로 여겨질 수 있다.

---

### 발단

> 3티어 아키텍처는 내가 잘 알고 있다고 생각했던 개념이다. 하지만 오늘 강사님께 지적을 받으면서 나의 이해가 부족했다는 것을 깨달았다. 물리적 서버 하나에 컨테이너로 WEB, WAS, DB를 각각 올리는 것이 1티어라고 생각했던 나의 생각이 잘못되었다는 것이다.

### 주요 요약

- 수직 확장과 수평 확장의 차이는 각각 서버 자원 증가와 서버 추가로, 3티어 아키텍처에서 각 티어를 독립적으로 확장 가능.
[수직확장 vs 수평확장](https://www.notion.so/1991bab9e3f880fa95a0c74f2a44941b) 
- 논리적 3티어는 기능적 분리, 물리적 3티어는 각 층이 별도 서버에 배치.
- 1티어는 모든 기능이 한 서버에, 3티어는 분리된 층으로 확장성 향상.
- 단일 서버에 컨테이너로 WEB, WAS, DB를 올리면 논리적 3티어지만 물리적 1티어로 간주 가능.
---

### 상세 설명

### 수직 확장과 수평 확장, 논리적/물리적 3티어, 1티어와 3티어의 차이

수직 확장과 수평 확장, 논리적/물리적 3티어, 그리고 1티어와 3티어의 차이를 이해하려면 각 개념을 체계적으로 살펴봐야 합니다. 아래에서 각 항목을 자세히 설명하며, 특히 사용자의 구체적인 질문(단일 서버에 컨테이너로 WEB, WAS, DB를 올리는 경우)에 대해 명확히 다루겠습니다.

### 수직 확장과 수평 확장의 관점

### 논리적 3티어와 물리적 3티어의 관점

- **논리적 3티어**: 이는 애플리케이션의 기능적 분리를 의미합니다. 즉, 프레젠테이션(사용자 인터페이스), 애플리케이션(비즈니스 로직), 데이터(데이터베이스)로 코드와 기능을 명확히 구분합니다. 이는 배포 방식과 상관없이 설계 단계에서 중요한 개념입니다. 예를 들어, 모든 층이 한 서버에 있어도 논리적으로 3티어로 설계될 수 있습니다.
  - **즉, 물리적 서버 한대에 컨테이너로 3개 올라가있다면, 그것은 논리적 3티어라고 부를 수 있는것이죠.**
- **물리적 3티어**: 이는 각 논리적 티어가 별도의 물리적 서버나 머신에 배치되는 것을 의미합니다. 예를 들어, 웹 서버는 한 머신, 애플리케이션 서버는 다른 머신, 데이터베이스 서버는 또 다른 머신에 배치됩니다. 이는 확장성과 보안성을 높이는 데 유리하지만, 초기 설정 비용이 높을 수 있습니다.
- **차이점**: 논리적 3티어는 설계적 관점이고, 물리적 3티어는 배포적 관점입니다. 논리적 3티어는 코드의 유지보수성과 이식성을 높이고, 물리적 3티어는 성능과 확장성을 극대화합니다.
### 본질적으로 1티어와 3티어의 차이

- **1티어 아키텍처**: **모든 구성 요소가**(프레젠테이션, 애플리케이션, 데이터) **단일 서버, 단일 컨테이너에서 실행**됩니다. 이는 간단한 애플리케이션에서 흔히 사용되며, 예를 들어 데스크톱 애플리케이션이 자체 데이터베이스를 포함하는 경우입니다. 확장성이 낮고, 한 서버의 성능에 크게 의존합니다.
- **3티어 아키텍처**: 프레젠테이션, 애플리케이션, 데이터가 명확히 분리되어 있으며, **각 층은 독립적으로 확장 가능**합니다. 이는 복잡한 웹 애플리케이션에서 주로 사용되며, 예를 들어 웹 서버, 애플리케이션 서버, 데이터베이스 서버가 각각 다른 서버에 배치될 수 있습니다. 이는 확장성과 유지보수성이 뛰어납니다.
- **본질적 차이**: 1티어는 통합된 단순성, 3티어는 분리된 복잡성과 확장성입니다. 3티어는 각 층을 독립적으로 개발하고 스케일링할 수 있어 대규모 시스템에 적합합니다.
### 내 질문: 단일 서버에 컨테이너로 WEB, WAS, DB를 올리면 1티어인가?

- 사용자가 단일 물리적 서버에 컨테이너로 WEB(프레젠테이션), WAS(애플리케이션), DB(데이터)를 각각 올린 경우, 이는 **논리적 3티어**로 간주됩니다. 왜냐하면 각 기능이 별도의 컨테이너로 분리되어 있어 코드와 기능적으로 구분되기 때문입니다.
- 그러나 **물리적 관점**에서는 이는 1티어로 간주될 수 있습니다. 왜냐하면 모든 컨테이너가 동일한 물리적 서버에서 실행되며, 전통적으로 물리적 티어는 별도의 물리적 서버를 의미하기 때문입니다. 컨테이너는 각기 독립적인 런타임 환경을 제공하지만, 여전히 같은 하드웨어를 공유합니다.
- 사용자의 강사가 "1티어가 컨테이너 3개 올리는 걸 아는 건 크게 잘못"이라고 한 것은 아마도 물리적 티어의 관점을 강조한 것으로 보입니다. 즉, 논리적 분리는 3티어지만, 물리적으로는 한 서버에 있어 1티어로 간주될 수 있다는 점을 지적한 것으로 보입니다. 이는 전통적인 정의에 기반한 것이며, 현대적인 컨테이너 환경에서는 약간 엄격한 해석일 수 있습니다.
- 결론적으로, 이는 논리적 3티어지만 물리적 1티어로 간주될 가능성이 높으며, 강사의 지적은 물리적 분리의 중요성을 강조한 것으로 보입니다. 이를 명확히 하기 위해 논리적 vs. 물리적 티어의 구분을 이해하는 것이 중요합니다.
---

### 표를 통한 요약

아래 표는 각 개념의 주요 차이를 정리한 것입니다.

| 개념 | 정의 | 논리적/물리적 | 예시 |
| 논리적 3티어 | 기능적 분리, 코드의 설계적 구분 | 논리적 | WEB, WAS, DB가 별도 프로세스로 설계 |
| 물리적 3티어 | 각 층이 별도 서버에 배치 | 물리적 | 웹 서버, 애플리케이션 서버, DB 서버가 각기 다른 머신 |
| 수직 확장 | 기존 서버 자원 증가 (CPU, 메모리 등) | 둘 다 가능 | 애플리케이션 서버 메모리 업그레이드 |
| 수평 확장 | 서버 추가로 부하 분산 | 물리적 선호 | 웹 서버 추가로 트래픽 분산 |
| 1티어 아키텍처 | 모든 기능이 한 서버에 통합 | 논리적/물리적 1티어 | 데스크톱 애플리케이션 자체 DB 포함 |
| 3티어 아키텍처 | 프레젠테이션, 애플리케이션, 데이터 분리, 독립 확장 가능 | 논리적/물리적 가능 | 웹 애플리케이션, 각 층 별도 서버 배치 가능 |

---

### 추가적인 고려사항

티어 구조를 더 쉽게 이해하고 실수를 피하기 위해 다음 내용을 기억하세요:

- 논리적 3티어는 프로그램을 설계할 때 기능을 나누는 방식이에요. 실제로 서버에 어떻게 설치할지는 필요에 따라 달라질 수 있습니다.
- 컨테이너를 사용할 때는 각각 독립된 공간에서 실행되지만, 물리적 티어는 보통 실제 서버를 완전히 분리하는 것을 의미해요.
- 강사님이 지적하신 것은 실제 서버를 분리하는 것이 중요하다는 뜻입니다. 요즘은 쿠버네티스 같은 도구를 사용해서 여러 서버에 나눠서 설치하는 것이 일반적이에요.
이렇게 이해하면 3티어의 개념과 실제 서버 설치 방법의 차이를 더 잘 알 수 있을 거예요.

---

### 주요 인용

- [Difference Between Layers and Tiers Baeldung on Computer Science](https://www.baeldung.com/cs/layers-vs-tiers)
- [Multitier architecture Wikipedia](https://en.wikipedia.org/wiki/Multitier_architecture)
- [1 Tier Architecture, 2 Tier Architecture, 3 Tier Architecture Appsierra](https://www.appsierra.com/blog/tiers-in-software-architecture)
- [What Is Three-Tier Architecture IBM](https://www.ibm.com/topics/three-tier-architecture)
- [What's the difference between "Layers" and "Tiers" Stack Overflow](https://stackoverflow.com/questions/120438/whats-the-difference-between-layers-and-tiers)
- [What is a 3-Tier Application Architecture TechTarget](https://www.techtarget.com/searchsoftwarequality/definition/3-tier-application)
- [Understanding Layers, Tiers, and N-Tier Architecture in Application Development DEV Community](https://dev.to/3bdelrahman/understanding-layers-tiers-and-n-tier-architecture-in-application-development-1hlb)
- [Understanding the architecture of a 3-tier application](https://vfunction.com/blog/3-tier-application/)
- [Difference Between Two-Tier And Three-Tier Database Architecture GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-two-tier-and-three-tier-database-architecture/)
- [N-Tier Architecture Tier 2, Tier 3, and Multi-Tier Explained BMC Software Blogs](https://www.bmc.com/blogs/n-tier-architecture-tier-2-tier-3-and-multi-tier-explained/)
- [Difference between 2 tier architecture and 3 tier architecture](https://www.rfwireless-world.com/Terminology/2-tier-architecture-vs-3-tire-architecture.html)
- [Difference Between Two-Tier And Three-Tier Database Architecture](https://byjus.com/gate/difference-between-two-tier-and-three-tier-database-architecture/)

---
title: "x86, ARM, s390x의 차이점"
date: 2025-02-24T08:55:00.000Z
draft: false
tags: ["Other", "Util"]
series: ["HW"]
description: "x86는 개인용 컴퓨터와 서버에 사용되는 CISC 아키텍처, ARM은 에너지 효율이 중요한 기기에 적합한 RISC 아키텍처, s390x는 IBM 메인프레임에서 사용되는 CISC 아키텍처로 대규모 트랜잭션 처리에 최적화되어 있습니다. 각 아키텍처는 고유한 설계 목표와 사용 사례를 가지고 있으며, 특히 s390x는 AI와 컨테이너 기술을 지원하여 현대화되고 있습니다."
notion_id: "1a41bab9-e3f8-808e-820c-eb348ce6fdbc"
notion_url: "https://www.notion.so/x86-ARM-s390x-1a41bab9e3f8808e820ceb348ce6fdbc"
---

# x86, ARM, s390x의 차이점

> **Summary**
> x86는 개인용 컴퓨터와 서버에 사용되는 CISC 아키텍처, ARM은 에너지 효율이 중요한 기기에 적합한 RISC 아키텍처, s390x는 IBM 메인프레임에서 사용되는 CISC 아키텍처로 대규모 트랜잭션 처리에 최적화되어 있습니다. 각 아키텍처는 고유한 설계 목표와 사용 사례를 가지고 있으며, 특히 s390x는 AI와 컨테이너 기술을 지원하여 현대화되고 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0547a0d3-4f8f-4791-bbf5-45af1bc0dcea/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXC5BBAE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDUYRhU%2BN7sRcdUmT%2BifvimdCe1rOGyzomy2lHAwh8u%2BQIhAMlTkF0k5fcYaYK40h7bRDdkYqt4FapKpCdyz%2FJcC%2F4QKv8DCCkQABoMNjM3NDIzMTgzODA1IgzM9bd%2FZlEWacdRI3cq3AP3QYdfyttOS13UhjDNDzpGwjCRrEUiwmPJrAMoFmRyskHq0l2hcog0cA6ICE1ebefF35yWn6hFJwyxyMJPcPPnqa4mNAink82NJK0Hcj0uL1OOWg%2F4aKIQqRU8pQaKERf52B6TFy8HBjjxbePwXzsNpfoESwe5vQep715fbd1S%2FRqW20FnuPFvYG3uyVzIcCaquzHdvDJXthl9lUdgIVx9c1KlcYWeqdOC2AemBnx0qJbgA6PnFWRzklMMhnmAsWzaiSNxKkAyzMOa%2Fm6FhoxAF9GjIyCGif693KlULsrKuEBWyqk9k9REVAoC8wOPtNEDEcHE%2FhkXv0vMCr8lHbLAkNFZJU4uX2FGMWd%2FsjZ6OVrLMZ4CuxleMNh3yFBFDtpCQS6JPQwUQWieGDYc1EWDMlAgnKz7kJXOXRLaYP14zom802FhcIFKCA8H4pl9ZtCH6wPPyDAxeIvAx6bKRgbIxCmzxWDBZqpqAtyBZykJnJcAuSkd1u7%2Fkh7JL89u3bkavUy3DJCwhLNkD%2FYefBPt4pOBjxaP2NdheC5MpsXopDc2%2Bm2DSjfBblYc99lu7HDKsMyd7%2BzuJFR3VuVnT%2FcHQEpqAji%2Be7IICrdEHvlYRnvIwVbL%2BHkiL7%2FzPTCIz4fEBjqkAZ%2FT%2F5Mfz2cBGTJXY9GxZpkdk29x1LN7mO4DlzxQOkD4G0rK%2FiAddPcGw%2BnFWkpZzsn680K8ViobwRrKjKEDOAwp%2BQ0r%2Fnnz222rVWMHmLpAbwafj%2Fad6aYXEd3VzbNz1h2OBty5JNE0R66LFAPHH8FWKc%2Fu7NLlv1RVuL%2BIAnl7ww3%2FkMRqmBbDbchJ%2FTR%2BgnInfRFWbZvFL8XKjanZBYU9se3U&X-Amz-Signature=46a23b60693c9d77f19ad01503280cfd953cd529d39b39558fc1eb0bf1d8b285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### x86, ARM, s390x의 차이점

- **x86**: 대부분의 개인용 컴퓨터와 서버에 사용되는 CISC 아키텍처, 소프트웨어 호환성이 뛰어남.
- **ARM**: 스마트폰, 태블릿 등 에너지 효율이 중요한 기기에 주로 사용되는 RISC 아키텍처.
- **s390x**: IBM 메인프레임에서 사용되는 64비트 CISC 아키텍처, 높은 신뢰성과 대규모 트랜잭션 처리에 최적화.
### 아키텍처 개요

- **x86**은 Intel에서 개발된 CISC 아키텍처로, 데스크톱, 노트북, 서버에서 널리 사용됩니다. 복잡한 명령어 세트를 지원하며, 다양한 소프트웨어와 호환성이 강점입니다.
- **ARM**은 RISC 아키텍처로, 에너지 효율성이 뛰어나 배터리 기반 기기(스마트폰, 태블릿)와 임베디드 시스템에 적합합니다. 최근 서버에서도 점점 사용됩니다.
- **s390x**은 IBM의 메인프레임 컴퓨터에서 사용되는 64비트 CISC 아키텍처로, 금융, 의료 등 대규모 데이터 처리와 높은 신뢰성이 필요한 산업에서 필수적입니다.
### 흥미로운 점: s390x의 현대화

s390x는 AI와 컨테이너 기술을 지원하며, 하이브리드 클라우드 환경에서도 경쟁력을 유지하고 있습니다. 예를 들어, TensorFlow는 s390x에서 실행 가능하며, Docker와 Podman을 통해 AI 워크로드를 관리할 수 있습니다.

---

### x86, ARM, s390x에 대한 상세 보고서

x86, ARM, s390x는 서로 다른 컴퓨팅 아키텍처로, 각각의 설계 철학과 사용 사례, 기술적 특성이 다릅니다. 이 보고서는 각 아키텍처의 정의, 역사적 배경, 주요 차이점, 그리고 사용 사례를 포괄적으로 다루며, 독자들에게 깊은 통찰을 제공합니다.

### 1. 각 아키텍처의 정의와 역사적 배경

- **x86**: Intel이 1970년대 개발한 CISC(Complex Instruction Set Computing) 아키텍처로, 8086 프로세서에서 시작되었습니다. 현재는 x86-64(64비트)로 발전하여 대부분의 개인용 컴퓨터, 노트북, 서버에서 사용됩니다. 소프트웨어 호환성과 일반 컴퓨팅 성능에서 강점을 보입니다.
- **ARM**: Advanced RISC Machine의 약자로, RISC(Reduced Instruction Set Computing) 아키텍처입니다. 1980년대 Acorn Computers에서 시작되었으며, 에너지 효율성이 뛰어나 스마트폰, 태블릿, 임베디드 시스템, 최근에는 서버에서도 널리 사용됩니다. ARM은 32비트와 64비트(ARM64) 버전을 지원합니다.
- **s390x**: IBM의 메인프레임 컴퓨터에서 사용되는 64비트 아키텍처로, z/Architecture를 기반으로 합니다. System/360과 System/370의 후속 버전으로, 2000년대 초반부터 사용되며, 높은 신뢰성과 대규모 트랜잭션 처리에 최적화되어 있습니다. 주로 금융, 의료, 정부 부문에서 사용됩니다.
### 2. 주요 기술적 차이점

아래 표는 x86, ARM, s390x의 주요 기술적 차이점을 요약합니다.

- **명령어 세트 아키텍처 (ISA)**: x86과 s390x는 CISC 아키텍처로, 복잡한 명령어를 지원하여 다양한 작업에 유연성을 제공합니다. 반면, ARM은 RISC 아키텍처로, 단순하고 효율적인 명령어 세트를 사용하여 에너지 효율성을 극대화합니다.
- **엔디안성**: x86은 리틀 엔디안, s390x는 빅 엔디안으로 고정됩니다. ARM은 구현에 따라 빅 엔디안 또는 리틀 엔디안으로 설정 가능합니다.
- **워드 사이즈**: 현대 x86은 x86-64로 64비트, ARM은 32비트와 64비트(ARM64) 버전을 지원하며, s390x는 64비트로 고정됩니다.
### 3. 사용 사례와 산업

- **x86**: 데스크톱, 노트북, 서버에서 주로 사용되며, 일반 사용자와 기업 모두에게 널리 보급되어 있습니다. 예를 들어, Windows와 macOS는 x86 아키텍처를 기반으로 합니다.
- **ARM**: 스마트폰(예: Apple iPhone, Android 기기), 태블릿, IoT 기기, 그리고 최근에는 에너지 효율이 중요한 서버 환경에서 사용됩니다. 예를 들어, Amazon Web Services의 Graviton 프로세서는 ARM 기반입니다.
- **s390x**: IBM 메인프레임에서 사용되며, 금융(은행 트랜잭션), 의료(전자 건강 기록), 정부(대규모 데이터 처리)와 같은 미션 크리티컬 환경에서 필수적입니다. 포춘 500대 기업의 71%가 메인프레임을 사용하며, 신용카드 거래의 90%를 처리합니다 ([BMC Software 보고서](https://www.bmc.com/blogs/state-of-mainframe/)).
### 4. 소프트웨어 지원과 생태계

- **x86**: 가장 넓은 소프트웨어 지원을 자랑하며, Windows, macOS, Linux, 그리고 대부분의 상용 소프트웨어가 x86에서 실행됩니다.
- **ARM**: 모바일 운영체제(Android, iOS)와 Linux를 지원하며, 최근 ARM64 서버의 증가로 소프트웨어 지원이 확대되고 있습니다. 예를 들어, Microsoft는 Windows on ARM을 제공합니다.
- **s390x**: 주로 z/OS(IBM의 메인프레임 OS)와 Linux on s390x를 지원하며, 전문적인 기업 애플리케이션에 초점이 맞춰져 있습니다. 예를 들어, Red Hat Enterprise Linux와 SUSE Linux Enterprise Server가 s390x에서 실행됩니다 ([Red Hat 문서](https://docs.redhat.com/en/4.8_release_notes/ar01s05s03)).
### 5. 성능 특성과 현대화

- **x86**: 높은 클럭 속도와 단일 스레드 성능으로 일반 컴퓨팅 작업에 적합합니다. SIMD 확장(SSE, AVX)으로 미디어 처리와 AI 작업에 유리합니다.
- **ARM**: 성능 대비 전력 소비가 낮아 배터리 기반 기기에 적합하며, NEON 확장으로 SIMD 작업을 지원합니다. 최근 고성능 컴퓨팅에서도 사용됩니다.
- **s390x**: 대규모 트랜잭션 처리와 데이터 처리에 최적화되어 있으며, 높은 가용성과 신뢰성을 제공합니다. 최근 AI와 통합되어 TensorFlow와 컨테이너 기술(Docker, Podman)을 지원하며, 하이브리드 클라우드 환경에서 경쟁력을 유지하고 있습니다 ([Medium 기사](https://medium.com/ibm-data-ai/tensorflow-and-more-with-ibm-z-169c4a4817f7)).
### 6. 결론

x86, ARM, s390x는 각각 다른 설계 목표와 사용 사례를 가지고 있습니다. x86은 일반 컴퓨팅, ARM은 에너지 효율, s390x는 높은 신뢰성과 대규모 데이터 처리에 최적화되어 있습니다. 이 아키텍처들은 현대 컴퓨팅 환경에서 각자의 역할을 수행하며, 특히 s390x는 AI와 컨테이너 기술의 통합으로 미래에도 중요한 역할을 할 것으로 보입니다.

### Key Citations

- [IBM System/390 Wikipedia page](https://en.wikipedia.org/wiki/IBM_System/390)
- [Red Hat s390x architectures documentation](https://docs.redhat.com/en/4.8_release_notes/ar01s05s03)
- [Open Source s390x Medium article Part 1](https://jerrysaulman.medium.com/open-source-why-not-s390x-in-your-efforts-part-1-e54474036ddc)
- [IBM ai-on-z-containers GitHub repository](https://github.com/IBM/ai-on-z-containers)
- [BMC Software state of mainframe 2024 report](https://www.bmc.com/blogs/state-of-mainframe/)
- [Linux on IBM Z Wikipedia page](https://en.wikipedia.org/wiki/Linux_on_IBM_Z)
- [Open Mainframe Project developer resources](https://openmainframeproject.org/news/developer-resources-for-linux-on-s390x/)
- [TensorFlow on s390x Medium article](https://medium.com/ibm-data-ai/tensorflow-and-more-with-ibm-z-169c4a4817f7)
- [IBM mainframe overview page](https://www.ibm.com/think/topics/mainframe)
- [Precisely mainframe statistics report](https://www.precisely.com/blog/mainframe/9-mainframe-statistics)

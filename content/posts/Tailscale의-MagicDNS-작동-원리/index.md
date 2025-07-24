---
title: "Tailscale의 MagicDNS 작동 원리"
date: 2025-03-23T23:38:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "MagicDNS를 활성화하면 Tailscale 클라이언트가 로컬 DNS 설정을 수정하여 각 디바이스가 호스트 이름으로 서로 접근할 수 있게 됩니다. DNS 질의는 Tailscale DNS 서버로 전달되어 Tailnet 맵을 참조하고, 해당 호스트명에 매핑된 Tailscale IP를 반환하여 기기 간 통신을 가능하게 합니다. MagicDNS는 Tailscale 네트워크 내부에서만 작동하며, 외부 DNS에는 영향을 주지 않습니다."
notion_id: "1bf1bab9-e3f8-8004-b4cd-fb120b4497d9"
notion_url: "https://www.notion.so/Tailscale-MagicDNS-1bf1bab9e3f88004b4cdfb120b4497d9"
---

# Tailscale의 MagicDNS 작동 원리

> **Summary**
> MagicDNS를 활성화하면 Tailscale 클라이언트가 로컬 DNS 설정을 수정하여 각 디바이스가 호스트 이름으로 서로 접근할 수 있게 됩니다. DNS 질의는 Tailscale DNS 서버로 전달되어 Tailnet 맵을 참조하고, 해당 호스트명에 매핑된 Tailscale IP를 반환하여 기기 간 통신을 가능하게 합니다. MagicDNS는 Tailscale 네트워크 내부에서만 작동하며, 외부 DNS에는 영향을 주지 않습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2498a140-b3e0-48b6-a6e3-8f96f3927e3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTMYW3R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC%2FQY9FMKf5uMrA43ktm20HgBMMmY3Ai%2FWIc76f8zt6mwIhAKpBeAgoYTGAGtYgoFIoSiQO6PGYRnbKB37RVhIwxY5gKv8DCCkQABoMNjM3NDIzMTgzODA1IgybVK5KxUXt61kxoDcq3APvQuqMGDk2rUQXtsWqXiYrAYlzDuvlrMLdNYBX0yzdJiRl1xDotyU3FcEHLfI7%2FwBNKvUy0sP0ubBPZuxvbgOSGwOUVIt%2Fc7mdJpFVrF5MhoKgCNCZwz%2B16RoxamArYw5cIif9Ad9KTRVwyaMpdFyCZ1jhRDxa0IKb2WGKg4z1mapX5FiN1VjAIZw0wd%2B%2BMNVaVO2zX8YqhnbBkiBJx3GDcIIHPV8HLG8gOEflnmrpCTeoKL4e9kXESAPLx9CINxGl86ASS3%2FVjAtkgaMkZkEZQtvPWMaUazVyfGZt0xKCrFVvGwQreADvkvCzQMImCKfjzEnGmmXXCKhDHEg9qnGxBefPeYRF%2FEgvMfQRc65gJIixZ%2Flsy9bu13BKZgb%2FbQS7rHNRYofTCj0lyDAS9IK3AVFFZgCP3PyDOxDBBxJCh%2BMCnLbLPDCHn%2Bsjl%2FRQNJeUKV5dik92x4U4bJf67%2Bb1VxWAEp3BLjCRVOG3%2BDnDt2c3JmrhZFVeftIs1%2BTE%2Bk9EjEpIeP0sR0kx%2BN6%2FHGlqPwDG3iz7%2Bq4iHrpNB26lsgFzb7vkyXetzpGGtLt9VOz37t0ijnPUAhLmNIVfYJBFsUPwz0DMeEzZ9aYPx87p%2Fbzn9T%2BnsIifXHXbejCwz4fEBjqkAZjJP%2FP5%2Bk6yO94BUhKso31zPQMCyL3jqE%2Bk5yfQM4o5H6Z8zDJVy%2Fb51BGDQfMOreWuNAIK%2BaWzVtI3XA5BkpP4aCBKCtDWA8E%2F9nVKkLtGZ%2Fj1KZ2HeHdg7LGkA9VLo1lrhpUHpx23soxd%2FM9mTg24c%2BUYUGSo6bhlKf81dCAPe7EvqTMowb%2FOIfyPlcsBtPDIpbwe8lEqx%2F4Qjc5%2BKM9N0fX6&X-Amz-Signature=edcacb5b1f35b1321c017437e33fb1597ce03ed11952608f9dad75cae9627d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TailScale 설치 후에, tailscale DNS는 어디에 먼저 질의하는가?

PR 적다가, 도리어 내가 궁금해졌다.

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5ced5652-4c02-4d83-9ece-92bf5c66bb35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTMYW3R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC%2FQY9FMKf5uMrA43ktm20HgBMMmY3Ai%2FWIc76f8zt6mwIhAKpBeAgoYTGAGtYgoFIoSiQO6PGYRnbKB37RVhIwxY5gKv8DCCkQABoMNjM3NDIzMTgzODA1IgybVK5KxUXt61kxoDcq3APvQuqMGDk2rUQXtsWqXiYrAYlzDuvlrMLdNYBX0yzdJiRl1xDotyU3FcEHLfI7%2FwBNKvUy0sP0ubBPZuxvbgOSGwOUVIt%2Fc7mdJpFVrF5MhoKgCNCZwz%2B16RoxamArYw5cIif9Ad9KTRVwyaMpdFyCZ1jhRDxa0IKb2WGKg4z1mapX5FiN1VjAIZw0wd%2B%2BMNVaVO2zX8YqhnbBkiBJx3GDcIIHPV8HLG8gOEflnmrpCTeoKL4e9kXESAPLx9CINxGl86ASS3%2FVjAtkgaMkZkEZQtvPWMaUazVyfGZt0xKCrFVvGwQreADvkvCzQMImCKfjzEnGmmXXCKhDHEg9qnGxBefPeYRF%2FEgvMfQRc65gJIixZ%2Flsy9bu13BKZgb%2FbQS7rHNRYofTCj0lyDAS9IK3AVFFZgCP3PyDOxDBBxJCh%2BMCnLbLPDCHn%2Bsjl%2FRQNJeUKV5dik92x4U4bJf67%2Bb1VxWAEp3BLjCRVOG3%2BDnDt2c3JmrhZFVeftIs1%2BTE%2Bk9EjEpIeP0sR0kx%2BN6%2FHGlqPwDG3iz7%2Bq4iHrpNB26lsgFzb7vkyXetzpGGtLt9VOz37t0ijnPUAhLmNIVfYJBFsUPwz0DMeEzZ9aYPx87p%2Fbzn9T%2BnsIifXHXbejCwz4fEBjqkAZjJP%2FP5%2Bk6yO94BUhKso31zPQMCyL3jqE%2Bk5yfQM4o5H6Z8zDJVy%2Fb51BGDQfMOreWuNAIK%2BaWzVtI3XA5BkpP4aCBKCtDWA8E%2F9nVKkLtGZ%2Fj1KZ2HeHdg7LGkA9VLo1lrhpUHpx23soxd%2FM9mTg24c%2BUYUGSo6bhlKf81dCAPe7EvqTMowb%2FOIfyPlcsBtPDIpbwe8lEqx%2F4Qjc5%2BKM9N0fX6&X-Amz-Signature=3cf5a1fb1ff38f64a4d0b6462424756e33bb7f09510da460d110c7499679d42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> Tailscale DNS은 로컬 resolve를 건드릴까? 최초에 요청을 보내는 Tailscale은 어디에 있을까? Tailscale을 설치하는 순간부터, 로컬에 무언가 변경점이 있었을것이다. 로컬DNS를 다시한번 상기해보며, 한번 찾아보면 좋을것같다.

## 요약본

**Tailscale DNS 작동 원리**

- MagicDNS 활성화 시 각 디바이스는 자동으로 DNS 도메인에 등록되어 호스트 이름으로 상호 접근 가능
- Tailscale 클라이언트는 시스템의 DNS Resolver 설정을 업데이트하여 특정 도메인을 Tailscale DNS 서버로 연결
- 로컬 DNS 설정에 Tailscale DNS 서버가 추가되거나 특정 검색 도메인이 등록됨
**네트워크 통신 흐름**

- 각 디바이스는 Tailscale IP와 고유한 호스트명을 할당받아 Tailnet 맵에 저장
- 사용자의 DNS 질의는 Tailscale 리졸버를 통해 컨트롤 서버의 Tailnet 맵 참조
- MagicDNS는 Tailscale 네트워크 내부에서만 작동하며 외부 DNS에는 영향을 주지 않음
# TailScale 설치 후 MagicDNS는 어디에 질의하며 어떻게 작동하는가?

TailScale을 설치하고 MagicDNS를 활성화하면, 네트워크 내 기기들이 서로를 호스트 이름으로 쉽게 찾을 수 있게 됩니다. 그렇다면 이 과정에서 DNS 질의는 어디로 가며, 로컬 시스템에 어떤 변화가 생길까요? 

아래에서 TailScale MagicDNS의 작동 원리와 흐름을 단계별로 정리해 봅시다~~~

## 1. TailScale 설치와 MagicDNS 활성화

TailScale은 VPN과 유사한 기능을 제공하며, 기기들을 가상 네트워크(Tailnet)에 연결합니다. MagicDNS는 이 네트워크 내에서 기기들이 IP 주소 대신 호스트 이름(예: `mydevice.ts.net`)으로 서로 접근할 수 있도록 DNS를 자동 설정하는 기능입니다. TailScale을 설치하고 MagicDNS를 켜면, 로컬 시스템에 즉각적인 변화가 시작됩니다.

## 2. 로컬 DNS 설정의 변경

MagicDNS가 활성화되면, TailScale 클라이언트는 시스템의 DNS 설정을 수정합니다:

- **Linux**: `/etc/resolv.conf`에 TailScale DNS 서버(예: 100.64.0.1)를 추가하거나 검색 도메인(예: `ts.net`)을 등록합니다.
- **Windows/macOS**: 네트워크 어댑터 설정에 TailScale DNS 서버를 추가합니다.
이 변경은 TailScale 클라이언트가 동적으로 관리하며, TailScale이 종료되거나 설정이 바뀌면 원래 상태로 복구됩니다.
## 3. DNS 질의 흐름

사용자가 `curl mydevice:port`와 같은 명령을 실행하면, 다음 과정을 거칩니다:

1. **로컬 요청 시작**: 요청은 TailScale 클라이언트가 설치된 로컬 머신에서 발생합니다.
1. **로컬 DNS 리졸버로 전달**: OS의 DNS 리졸버가 호스트 이름(`mydevice`)을 해석하려 합니다.
1. **TailScale DNS 서버로 질의**: MagicDNS 설정 덕분에, 리졸버는 TailScale이 지정한 DNS 서버로 질의를 보냅니다. 이는 TailScale 네트워크 내 호스트명에만 적용되며, 외부 도메인(예: `google.com`)은 기존 DNS 설정을 따릅니다.
1. **Tailnet 맵 참조**: TailScale DNS 서버는 TailScale 컨트롤 서버가 관리하는 Tailnet 맵(기기별 호스트명과 IP 매핑 정보)을 확인합니다.
1. **IP 반환**: 해당 호스트명에 매핑된 TailScale IP(예: 100.x.x.x)를 로컬 머신에 반환합니다.
1. **직접 통신**: 반환된 IP로 요청이 전달되어 기기 간 연결이 이루어집니다.
```mermaid
sequenceDiagram
    participant User as 사용자
    participant Local as 로컬 머신
    participant Resolver as DNS 리졸버
    participant TailDNS as Tailscale DNS 서버
    participant Control as Tailscale 컨트롤 서버
    participant Target as 대상 기기(mydevice)
    
    User->>Local: curl mydevice:port 실행
    Local->>Resolver: "mydevice" 호스트명 해석 요청
    Resolver->>TailDNS: Tailscale 호스트명 질의
    TailDNS->>Control: Tailnet 맵 참조
    Control->>TailDNS: 호스트명에 매핑된 Tailscale IP 제공
    TailDNS->>Resolver: Tailscale IP(100.x.x.x) 반환
    Resolver->>Local: IP 주소 반환
    Local->>Target: IP 주소로 직접 통신
```

## 4. MagicDNS의 범위와 한계

MagicDNS는 TailScale 네트워크 내부에서만 작동합니다. 즉, `mydevice.ts.net` 같은 TailScale 도메인은 TailScale DNS 서버가 처리하지만, 일반 인터넷 도메인은 영향을 받지 않습니다. 이는 로컬 DNS 설정에 TailScale 전용 검색 도메인이 추가된 결과로, TailScale 클라이언트가 종료되면 이 설정도 사라집니다.

## 요약

TailScale 설치 후 MagicDNS가 활성화되면:

- **질의 대상**: 로컬 DNS 리졸버가 TailScale DNS 서버로 질의를 보냅니다.
- **변경점**: 시스템 DNS 설정이 TailScale 클라이언트에 의해 업데이트되어 TailScale 네트워크 내 호스트명 해석이 가능해집니다.
- **흐름**: 로컬 요청 → TailScale DNS 서버 → Tailnet 맵 참조 → IP 반환 → 통신.
## MagicDNS의 동작방식에대해 더욱 알아봅시다.

공식 문서에 따르면, Tailscale의 MagicDNS는 다음과 같이 동작합니다:

```mermaid
flowchart LR
    A[사용자 명령\ncurl mydevice:port] --> B[로컬 DNS 리졸버]
    B --> C[Tailscale DNS 서버]
    C --> D[Tailscale 컨트롤 서버\nTailnet 맵 확인]
    D --> C
    C --> B
    B --> E[IP 주소로 변환\n100.x.x.x]
    E --> F[대상 기기로\n직접 통신]
```

1. **노드 등록 및 Tailnet 맵 구성**
1. **로컬 DNS 설정 업데이트**
1. **DNS 질의 처리**
1. **내부 네트워크에서의 통신 보장**
자세한 내용은 [Tailscale 공식 문서의 MagicDNS 설명](https://tailscale.com/kb/1019/magicdns/)에서 확인할 수 있습니다.



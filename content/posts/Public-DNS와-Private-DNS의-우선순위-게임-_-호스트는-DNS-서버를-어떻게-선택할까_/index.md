---
title: "Public DNS와 Private DNS의 우선순위 게임 : 호스트는 DNS 서버를 어떻게 선택할까?"
date: 2025-03-23T04:13:00.000Z
draft: false
tags: ["fedora", "Arch", "ubuntu", "Debian"]
series: ["Infra & Network"]
description: "DNS의 기본 원리를 이해하고 Public DNS와 Private DNS의 작동 방식을 실습을 통해 확인합니다. 윈도우 VM에서 DNS 요청이 발생하면, 우분투 서버 1과 2를 통해 IP 주소를 찾는 과정을 설명하며, 각 서버의 역할과 DNS 쿼리 흐름을 시각적으로 정리합니다. 또한, DNS 설정 및 웹 서버 구성 방법을 안내합니다."
notion_id: "1bf1bab9-e3f8-805c-ae61-ea18890f5d6f"
notion_url: "https://www.notion.so/Public-DNS-Private-DNS-DNS-1bf1bab9e3f8805cae61ea18890f5d6f"
---

# Public DNS와 Private DNS의 우선순위 게임 : 호스트는 DNS 서버를 어떻게 선택할까?

> **Summary**
> DNS의 기본 원리를 이해하고 Public DNS와 Private DNS의 작동 방식을 실습을 통해 확인합니다. 윈도우 VM에서 DNS 요청이 발생하면, 우분투 서버 1과 2를 통해 IP 주소를 찾는 과정을 설명하며, 각 서버의 역할과 DNS 쿼리 흐름을 시각적으로 정리합니다. 또한, DNS 설정 및 웹 서버 구성 방법을 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/080f5de4-64db-44ca-b230-37ec5438ee50/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EZNJKC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIC83woWea5aP2JRV2w8mLGEkoZYc8SF6MwOsZ4WTe1byAiAe7nMKd2WeR%2FKA7IZNMS0RvWX1pmwAkOmqe9KcKHy4LCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMOzOEssNVk3SDWJJjKtwDIH%2BMcdalfGBFF4cAlUDe1m2I5A9w4kR%2FpOrmt4HVCE3VOs3g9vsBlCidOzjfL83tfFMjyJIwk1eU5w0Z2KBVg7G7RUIulqRdKAvI1VUAtiaFs%2BfHHUJe9oK5LQLu1U9ezrlL9c3KabdPogkkJbiTnqkK3zrG9h2wglgZv83CzinXFsmWSPyjKs1xrt3eldyemNhB1QmHIWpkJAD%2BIYTqVQhMMtwR0J8%2B0Pjy6wcLLyuJKQpzn2zyby555MVEihLruMyqMODhqEbdus1nyf7qA91t3xTemoehqvcSeZBsDHTCKa%2BrBQDArS%2By1WK339ajFS%2F9E9DySkx0Z73pBAoIJz7nOblspA%2BkxUTLqlVIdfxlwGjMCqsDm%2BPNoa6uRe5AT795%2FFulEy8vkis5OlfPHe5PsQZffteoCFU3mXBsoxE4xjHJg%2Fh29IvJ%2Fo5K3uLjp9sMzdfuxp8ArNPlSoTt%2B%2Bb4v2%2Fw4hV%2BdXedRWtpypw4zhYL9yyHcGgm1SJVMfq7n%2FxcLbMtujwMDfIBdMeo7yVomzHKFiO9rjoHaP6UGWh5ujVqqOArk4fKN2M2IPdOCJSrJT%2Br%2FRWk25hfCDAXliAvu6FIra3fuqKipCC9mFzJWXSYjMkXM07csyAw%2BJuIxAY6pgHplWu9PEaibZfeMrBcn5t48XuX6gJT5Xw3NVGa8Qj6eX3RNAUIHtacTO1N5gIwslGa9uYe41zGuTcwD%2Fb2P7UhD4eXP6qhCUopTMo%2FRp0ZKrwsWicrikLHklz5ZX6h2F0V%2FGoL2CwsiJ1CU9k6Or1AI5a3%2BK48iOr77KSjvIF%2FJssMGNo3bXoPAU%2BkZHQBas6GgTui9imbWB1j0MADyny%2BtRLdRON8&X-Amz-Signature=085406afeee7f7a73c57fce8f76e6ef912a9df0914c0ddecc81a76de0e014486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **목차**
> ---
>
>

# DNS 동작 방식을 직접 이해해 봅시다!

## Public DNS와 Private DNS

해당 실습을 통해 DNS(Domain Name System)의 기본 원리와 함께 Public DNS와 Private DNS가 함께 사용될 때 호스트는 DNS 정보를 어느 시점에 참조하는가?? 를 직접 눈으로 확인해보았으면 하는 마음에 정리해본 문제입니다.


**DNS란 무엇일까요?**

모두가 아시겠지만… 한번 더 사전적으로 정리해보도록 하겠습니다. 

DNS는 웹사이트 주소(예: google.com)를 컴퓨터가 이해할 수 있는 IP 주소(예: 142.250.190.14)로 변환해주는 역할을 합니다. 

전화번호부와 비슷하다고 생각하면 됩니다. DNS는 계층 구조로 이루어져 있으며, 크게 루트 DNS 서버, TLD(Top-Level Domain) 서버, 권한 있는 DNS 서버로 나뉩니다.

- **루트 DNS 서버:** 최상위 도메인(.com, .org 등)에 대한 정보를 제공합니다.
- **TLD 서버:** .com, .org와 같은 최상위 도메인을 관리합니다.
- **권한 있는 DNS 서버:** 특정 도메인(예: google.com)의 IP 주소를 가지고 있습니다.

**자, 그럼 이제 Public DNS와 Private DNS을 함께 사용하는 문제를 풀어봅시다..**

이번 문제에서는 Public DNS와 Private DNS가 함께 사용되는 환경에서, 호스트는 어떤 DNS 서버를 먼저 참조하는지 확인하는 것이 핵심입니다. 아래와 같은 환경을 가정합니다.

1. **윈도우 VM:** 기본 DNS 서버로 우분투 서버1을 사용합니다. 
  - (윈도우든, 우분투 데스크탑이든 상관 없습니다)
1. **우분투 서버1:**
  - 기본 DNS 서버로 우분투 서버2(Public DNS)를 사용합니다.
  - Apache 웹 서버가 설치되어 있습니다.
  - 내부 DNS 서버(bind)가 설치되어 있지만, 존 파일은 설정되어 있지 않고, naver.com 또는 google.com에 대한 응답만 하도록 설정되어 있습니다.
1. **우분투 서버2:**
  - Private DNS 서버(컨테이너 기반)로 동작합니다.
  - Nginx 웹 서버가 설치되어 있습니다.
  - 존 파일 정보를 가지고 있습니다.
이 상황에서 윈도우 VM이 특정 도메인에 접속하려고 할 때, 어떤 DNS 서버를 거쳐 최종 IP 주소를 얻게 되는지, 각 서버의 역할은 무엇인지 이해하는 것이 중요합니다.


### 즉! 간단하게 흐름도를 그리면, 다음과 같겠죠?

```mermaid
flowchart LR
    %% 메인 노드 정의
    VM[윈도우 VM\n브라우저] 
    US1[우분투 서버 1\nBIND DNS 서버\nApache 웹 서버]
    US2[우분투 서버 2\nPrivate DNS 서버\nNginx 웹 서버]
    
    %% 연결 정의
    VM -- "1 - DNS 쿼리" --> US1
    US1 -- "2 - 캐싱된 정보 없음" --> US2
    US2 -- "3 - zone 파일 정보 응답" --> US1
    US1 -- "4 - IP 주소 응답" --> VM
    VM -- "5 - 웹 서버 접속" --> US1
    
    %% 스타일 정의
    classDef vm fill:#f9d5e5,stroke:#333,stroke-width:2px,color:#000,font-weight:bold
    classDef server1 fill:#eeeeee,stroke:#333,stroke-width:2px,color:#000,font-weight:bold
    classDef server2 fill:#b5ead7,stroke:#333,stroke-width:2px,color:#000,font-weight:bold
    
    %% 스타일 적용
    class VM vm
    class US1 server1
    class US2 server2
```

- **윈도우 VM (클라이언트):** 웹 브라우저에서 DNS 쿼리를 발생시킵니다.
- **우분투 서버 1 (중간 서버 & 웹 서버):** 윈도우 VM의 DNS 서버 역할을 하며, 자체 DNS 서버 (bind)가 특정 도메인 (naver.com, google.com)에 대해서만 응답하도록 설정되어 있습니다. 만약 요청된 도메인이 자체적으로 응답할 수 없으면 우분투 서버 2로 쿼리를 전달합니다. Apache 웹 서버도 호스팅합니다.
- **우분투 서버 2 (Public DNS & 웹 서버):** Private DNS 서버로, 전체 존 파일 정보를 가지고 있으며, 외부 DNS 요청에 응답합니다. Nginx 웹 서버도 호스팅합니다.
- **흐름:**
  1. 윈도우 VM이 특정 도메인에 대한 IP 주소를 요청합니다.
  1. 요청은 우분투 서버 1의 DNS 서버로 전달됩니다.
  1. 우분투 서버 1의 DNS 서버가 해당 도메인에 대한 정보를 가지고 있지 않으면 우분투 서버 2로 쿼리를 전달합니다.
  1. 우분투 서버 2 (Private DNS)가 존 파일 정보를 기반으로 IP 주소를 찾아 응답합니다.
  1. 우분투 서버 1은 응답을 윈도우 VM에 전달합니다.
  1. 윈도우 VM은 얻은 IP 주소를 사용하여 해당 웹 서버에 접속합니다.

### **그래서, 이 문제의 의의는 무엇일까요?**

이 문제의 의의는 뭐 그냥 DNS를 참조하는 주체는 누구에게 있는가? 정도인데.. 한번 그래도 사전적으로 정리나 해볼까요?

- **DNS 동작 방식 이해:** DNS 쿼리가 어떻게 전달되고 처리되는지 이해할 수 있습니다.
- **Public DNS와 Private DNS의 차이점 이해:** 각각의 역할과 장단점을 파악할 수 있습니다.
- **네트워크 문제 해결 능력 향상:** DNS 관련 문제 발생 시 원인을 파악하고 해결하는 능력을 키울 수 있습니다.

# 자, 그러면 본격적으로 실습을 시작해봅시다!

> 참고로 아래 튜토리얼은 단순히 VirtualBox 기준이기에, Proxmox 용으로 실습하시려면 알잘딱으로 네트워크 설정을 다르게 가져가야하는데… 

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7b1e00a3-9862-4e3b-b630-8a10ee4eca8c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EZNJKC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIC83woWea5aP2JRV2w8mLGEkoZYc8SF6MwOsZ4WTe1byAiAe7nMKd2WeR%2FKA7IZNMS0RvWX1pmwAkOmqe9KcKHy4LCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMOzOEssNVk3SDWJJjKtwDIH%2BMcdalfGBFF4cAlUDe1m2I5A9w4kR%2FpOrmt4HVCE3VOs3g9vsBlCidOzjfL83tfFMjyJIwk1eU5w0Z2KBVg7G7RUIulqRdKAvI1VUAtiaFs%2BfHHUJe9oK5LQLu1U9ezrlL9c3KabdPogkkJbiTnqkK3zrG9h2wglgZv83CzinXFsmWSPyjKs1xrt3eldyemNhB1QmHIWpkJAD%2BIYTqVQhMMtwR0J8%2B0Pjy6wcLLyuJKQpzn2zyby555MVEihLruMyqMODhqEbdus1nyf7qA91t3xTemoehqvcSeZBsDHTCKa%2BrBQDArS%2By1WK339ajFS%2F9E9DySkx0Z73pBAoIJz7nOblspA%2BkxUTLqlVIdfxlwGjMCqsDm%2BPNoa6uRe5AT795%2FFulEy8vkis5OlfPHe5PsQZffteoCFU3mXBsoxE4xjHJg%2Fh29IvJ%2Fo5K3uLjp9sMzdfuxp8ArNPlSoTt%2B%2Bb4v2%2Fw4hV%2BdXedRWtpypw4zhYL9yyHcGgm1SJVMfq7n%2FxcLbMtujwMDfIBdMeo7yVomzHKFiO9rjoHaP6UGWh5ujVqqOArk4fKN2M2IPdOCJSrJT%2Br%2FRWk25hfCDAXliAvu6FIra3fuqKipCC9mFzJWXSYjMkXM07csyAw%2BJuIxAY6pgHplWu9PEaibZfeMrBcn5t48XuX6gJT5Xw3NVGa8Qj6eX3RNAUIHtacTO1N5gIwslGa9uYe41zGuTcwD%2Fb2P7UhD4eXP6qhCUopTMo%2FRp0ZKrwsWicrikLHklz5ZX6h2F0V%2FGoL2CwsiJ1CU9k6Or1AI5a3%2BK48iOr77KSjvIF%2FJssMGNo3bXoPAU%2BkZHQBas6GgTui9imbWB1j0MADyny%2BtRLdRON8&X-Amz-Signature=964c27c995828df96fd56066953c2de23552e387bc28cdbdd3396d1fee1c9f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## >> VM 정리

## >> IP 설정

## >> 웹서버 설정

## >> DNS 설정 (온프레미스 네이티브)

## >> DNS 설정 (도커) Ubuntu Server 1 (Private DNS)  `10.0.2.17`

## >> 패킷분석 




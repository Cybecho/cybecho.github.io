---
title: "Public DNS와 Private DNS의 우선순위 게임 : 호스트는 DNS 서버를 어떻게 선택할까?"
date: 2025-03-23T04:13:00.000Z
draft: false
tags: ["fedora", "Arch", "ubuntu", "Debian"]
series: ["Infra & Network"]
description: "DNS의 기본 원리와 Public DNS 및 Private DNS의 사용 방식을 실습을 통해 이해하고, DNS 쿼리가 어떻게 전달되고 처리되는지를 설명합니다. 윈도우 VM에서 요청된 도메인에 대해 Ubuntu 서버를 통해 DNS 정보를 얻는 과정을 다루며, 각 서버의 역할과 DNS 요청 흐름을 명확히 합니다. 또한, BIND9를 이용한 DNS 서버 설정 방법과 Docker를 활용한 DNS 컨테이너 운영에 대한 가이드를 제공합니다."
notion_id: "1bf1bab9-e3f8-805c-ae61-ea18890f5d6f"
notion_url: "https://www.notion.so/Public-DNS-Private-DNS-DNS-1bf1bab9e3f8805cae61ea18890f5d6f"
---

# Public DNS와 Private DNS의 우선순위 게임 : 호스트는 DNS 서버를 어떻게 선택할까?

> **Summary**
> DNS의 기본 원리와 Public DNS 및 Private DNS의 사용 방식을 실습을 통해 이해하고, DNS 쿼리가 어떻게 전달되고 처리되는지를 설명합니다. 윈도우 VM에서 요청된 도메인에 대해 Ubuntu 서버를 통해 DNS 정보를 얻는 과정을 다루며, 각 서버의 역할과 DNS 요청 흐름을 명확히 합니다. 또한, BIND9를 이용한 DNS 서버 설정 방법과 Docker를 활용한 DNS 컨테이너 운영에 대한 가이드를 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/080f5de4-64db-44ca-b230-37ec5438ee50/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EKSMYMH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEcWikf4lWK1S9gyT4wuAaAxFDp4tOCFNOmhyRD84aX3AiB2%2FjXnXrv7LO%2BaSPc2WnOUBPuKz3zrALneJt7yxU6jKCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMTui1hqFrgTRjErMwKtwDbDtdzwBIgnCVkj99lwqYBKv%2FM%2B3BkXxOS6iPPxPtVd%2BrIR0qZhOax9QOdG%2BG9hvJlKMRWJF%2FhC4zm%2B2RYbhXY0ymEe1GTXkwboeuLXIYaGaCWlJwbW7FOpWpUOkQNl7MeamED9au0yC0C9TV66chVl0PuPviMlBkvipFoxzLccO6QO%2FMJZ9OR1hnnlSEAxK590B%2BbfJpDSS21DXkumLLW2yXNg3%2BA6gVUQZdd0MRZkHChTOz3CXQrSZKeYYWJ0UHrs1lOVf0Bq8Ql3MGUyjUzLQk1ok%2FseE8R%2FYa%2BxFazQa%2FK7SNNSB8w%2Fa1rjI1N4g4%2Fau%2FW9XdvFBN8d3%2Bv322stu3sYBQJHTbCcq0%2FtFVJWOtB%2BAFeDAijOSv3FnscDPPVvbThQPz%2FZuPFw64jzO0yBKSukqvddFnRKZ5dZnERYa1yzizJP6KQQOX%2F8h51mJjylFpv%2Bv59jT6tviBVTRyQR33zYwYSbjyDI4OCYMMwbmHTxEHSGU81I4chDozrCchnnue5PG1LrrvAq35byqJLMkoMT6J4bqhX3mSk37KNN%2BM9wk310YB3v4usstKy9t8nARQg6nJ9R8DGp7cSJBpI7iU5wdybljMIhde1bmWADmvlfT11EoAXTsRqdcwiM%2BHxAY6pgFSSbs6z0ByROEfrh1XSrnTSKTbYdssgcTDLqFyh4i0VjyWVO7S6qFAYlkrJ0kWkvlfSYGJWUnFOK%2BPVzvX80%2FdRdybHsgisJlsjcpkLLltgM4PxOqiwt%2FCzEdqjJNp98%2BT%2FI%2F7v1TteVEoz%2FWhT%2FiFW3ml3wNU1nbMLDelcwHQhLBL2A9lkLhFqzT4GM%2FAdn6u1VZWljXbyjxylcDgAYzY1JHTBdt5&X-Amz-Signature=966183e88f515583eca546286830d6aa13c77257cc4708d342044729993c776c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **목차**

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
1. **우분투 서버1:**
1. **우분투 서버2:**
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

### **그래서, 이 문제의 의의는 무엇일까요?**

이 문제의 의의는 뭐 그냥 DNS를 참조하는 주체는 누구에게 있는가? 정도인데.. 한번 그래도 사전적으로 정리나 해볼까요?

- **DNS 동작 방식 이해:** DNS 쿼리가 어떻게 전달되고 처리되는지 이해할 수 있습니다.
- **Public DNS와 Private DNS의 차이점 이해:** 각각의 역할과 장단점을 파악할 수 있습니다.
- **네트워크 문제 해결 능력 향상:** DNS 관련 문제 발생 시 원인을 파악하고 해결하는 능력을 키울 수 있습니다.

# 자, 그러면 본격적으로 실습을 시작해봅시다!

> 참고로 아래 튜토리얼은 단순히 VirtualBox 기준이기에, Proxmox 용으로 실습하시려면 알잘딱으로 네트워크 설정을 다르게 가져가야하는데… 

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7b1e00a3-9862-4e3b-b630-8a10ee4eca8c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EKSMYMH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEcWikf4lWK1S9gyT4wuAaAxFDp4tOCFNOmhyRD84aX3AiB2%2FjXnXrv7LO%2BaSPc2WnOUBPuKz3zrALneJt7yxU6jKCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMTui1hqFrgTRjErMwKtwDbDtdzwBIgnCVkj99lwqYBKv%2FM%2B3BkXxOS6iPPxPtVd%2BrIR0qZhOax9QOdG%2BG9hvJlKMRWJF%2FhC4zm%2B2RYbhXY0ymEe1GTXkwboeuLXIYaGaCWlJwbW7FOpWpUOkQNl7MeamED9au0yC0C9TV66chVl0PuPviMlBkvipFoxzLccO6QO%2FMJZ9OR1hnnlSEAxK590B%2BbfJpDSS21DXkumLLW2yXNg3%2BA6gVUQZdd0MRZkHChTOz3CXQrSZKeYYWJ0UHrs1lOVf0Bq8Ql3MGUyjUzLQk1ok%2FseE8R%2FYa%2BxFazQa%2FK7SNNSB8w%2Fa1rjI1N4g4%2Fau%2FW9XdvFBN8d3%2Bv322stu3sYBQJHTbCcq0%2FtFVJWOtB%2BAFeDAijOSv3FnscDPPVvbThQPz%2FZuPFw64jzO0yBKSukqvddFnRKZ5dZnERYa1yzizJP6KQQOX%2F8h51mJjylFpv%2Bv59jT6tviBVTRyQR33zYwYSbjyDI4OCYMMwbmHTxEHSGU81I4chDozrCchnnue5PG1LrrvAq35byqJLMkoMT6J4bqhX3mSk37KNN%2BM9wk310YB3v4usstKy9t8nARQg6nJ9R8DGp7cSJBpI7iU5wdybljMIhde1bmWADmvlfT11EoAXTsRqdcwiM%2BHxAY6pgFSSbs6z0ByROEfrh1XSrnTSKTbYdssgcTDLqFyh4i0VjyWVO7S6qFAYlkrJ0kWkvlfSYGJWUnFOK%2BPVzvX80%2FdRdybHsgisJlsjcpkLLltgM4PxOqiwt%2FCzEdqjJNp98%2BT%2FI%2F7v1TteVEoz%2FWhT%2FiFW3ml3wNU1nbMLDelcwHQhLBL2A9lkLhFqzT4GM%2FAdn6u1VZWljXbyjxylcDgAYzY1JHTBdt5&X-Amz-Signature=6f4157f9961a9ae797530604be2d6feb645eb0c34faa46ae2a1c6462b03c13ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## >> VM 정리

## >> IP 설정

## >> 웹서버 설정

## >> DNS 설정 (온프레미스 네이티브)

## >> DNS 설정 (도커) Ubuntu Server 1 (Private DNS)  `10.0.2.17`

## >> 패킷분석 




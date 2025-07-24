---
title: "Windows 를 steam머신으로 만들어보자"
date: 2024-08-06T00:55:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 PC를 스팀 머신처럼 설정하는 방법을 설명하며, 스팀 머신의 장점으로는 간편한 설정과 직관적인 인터페이스가 있지만, 스팀 OS용 게임 부족이라는 단점이 있다. 주요 단계로는 스팀 자동 실행 설정, 빅픽쳐 모드 활성화, 윈도우 쉘 변경, 자동 로그인 설정이 포함된다. 이러한 설정을 통해 PC에서 몰입도 높은 게임 경험을 즐길 수 있다."
notion_id: "492feb6b-0d12-4b89-af7c-2c4a6f0cf333"
notion_url: "https://www.notion.so/Windows-steam-492feb6b0d124b89af7c2c4a6f0cf333"
---

# Windows 를 steam머신으로 만들어보자

> **Summary**
> 윈도우 PC를 스팀 머신처럼 설정하는 방법을 설명하며, 스팀 머신의 장점으로는 간편한 설정과 직관적인 인터페이스가 있지만, 스팀 OS용 게임 부족이라는 단점이 있다. 주요 단계로는 스팀 자동 실행 설정, 빅픽쳐 모드 활성화, 윈도우 쉘 변경, 자동 로그인 설정이 포함된다. 이러한 설정을 통해 PC에서 몰입도 높은 게임 경험을 즐길 수 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dff7bdc4-508b-4594-b532-61878ab4ad34/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRUFT5D%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdhnR%2FZvrzELJj%2FWziqCj5TAoerNpfUOUt%2Bo3mfRH%2FXAiBKIdFtU53NeFdwr99GgIh0%2FK6vDUO6cp%2FoXX1koGhW%2Fir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIOjeQ9vyLQ%2FEt6ZNKtwDBfH5WBsdYytPMnAWkKbl782GyRyTl619q1cM3%2BJE18yHalZNirvx0ZimDkIlgCbBPR1KI%2Ba7yiTDfi%2Bjj%2Bq%2FrrA4fqDXbihsR6LRuszb405UyCYHgrPfC8a%2FNwrRN9muTtS9Po%2BMbgSnqnWzHdwpOi4wKlu0V84zuLPQOSf%2B7t4xogjNyZJgR5034XIYApdjkaACOLwi%2FBJCi%2F%2FDt83DXn7FrqL6%2BMpmR8tneXeR%2BcAs0daCqDF6UM6tdzbuW7jKqzTBxur9LsPG5izz6uxkDmYXMYhUrtfkNXMIHKrhO7BQ9iQowlGQE9HtJu0YeocsZRx0FyBwMdXaiz0Gn5QiF64%2Bkhq6RYuVsVMDIiXm7i6InZTLme9t3pWeFFnx8qnvgGHNrcvzmcfgfLFgH6atvhDA6iCLUggjhN4mT%2FFAl2A%2Fv%2F0SlNwQNG4zDSxlyW3aj12L4XyzX7aaPvQczE%2BIq3eufShfErxPbWY28vlvdcgFH18u%2BoW%2FhANLR3woiTZXObhu0Pi5Z2%2BkmM35mkcTvdnI3khn1MkifPT7Wb7plLTXR7hdGfsdB1HKT1eDCNjPwNic7hzCLA9qXdnjvSkDR44ZxsNBc0apvoEEea9lSeTdmBEppAv1d48HH0wwsM%2BHxAY6pgHWl%2F4wJ%2BXiZsXLHw9GLVGqpV5p7NrUAsZn2Z4yddzUM2jf16r6YosCqXBllyEFjAIRos3kO7B28Q7J7ETo0gPRUmnBLJcFS8AQQgbgQkiIDDlTbt707HcveO1xMBD2iji9iKNs3MTTdJptujuUovu9RFgq%2BdSq4Wcd5KVAldXNU8ZVzZaKz295vehp9Aj7eEmYNyBBZ0ytGFLjE0pIhadEK55q7%2FJu&X-Amz-Signature=c4ceba6399b8f2fb34c8f180a3bc898e64a1cf23b7becdc744a2276f82fdc851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 스팀 머신과 유사한 PC 게임 환경 구축하기

## 스팀 머신의 장점

스팀 머신은 일반 PC와 달리 사용자 경험에 초점을 맞춘 게임 전용 기기입니다. 다음과 같은 장점이 있습니다:

1. 간편한 설정
1. TV 연결 최적화
1. 직관적인 인터페이스
1. 빠른 게임 실행
> [!note]
스팀 머신은 하드웨어 연결과 네트워크 설정만으로 바로 사용할 수 있어 매우 편리합니다.

## 스팀 머신의 한계

그러나 스팀 머신에도 한계가 있습니다:

- 스팀 OS용 게임 부족
- 대작 게임의 윈도우 종속성
이러한 이유로 일부 사용자들은 에일리언웨어 알파와 같은 윈도우 기반 대안을 선택합니다.

## PC를 스팀 머신처럼 만들기

윈도우 PC를 스팀 머신과 유사한 환경으로 구성할 수 있습니다. 주요 단계는 다음과 같습니다:

1. 스팀 자동 실행 설정
1. 빅픽처 모드 활성화
1. 윈도우 쉘 변경
1. 자동 로그인 설정
### 단계별 가이드

```mermaid
graph TD
    A["스팀 설정 변경"]
    B["레지스트리 편집"]
    C["자동 로그인 설정"]
    D["PC를 스팀 머신처럼 사용"]

    A -->|"자동 실행 및 빅픽처 모드 설정"| B
    B -->|"윈도우 쉘을 스팀으로 변경"| C
    C -->|"자동 로그인 활성화"| D

    style A fill:#CC5500,stroke:#333,stroke-width:2px
    style B fill:#0047AB,stroke:#333,stroke-width:2px
    style C fill:#006600,stroke:#333,stroke-width:2px
    style D fill:#551A8B,stroke:#333,stroke-width:2px

```

### 1. 스팀 설정 변경

1. 스팀 실행 후 설정으로 이동
1. 인터페이스 탭에서 다음 옵션 활성화:
1. 스팀 라이브러리에 `explorer.exe` 추가
### 2. 레지스트리 편집

1. `regedit` 실행
1. `HKEY_CURRENT_USER\\Software\\Microsoft\\WindowsNT\\CurrentVersion\\Winlogon` 경로로 이동
1. 새 문자열 값 "Shell" 생성
1. "Shell" 값에 스팀 실행 경로 입력 (예: `"C:\\Program Files (x86)\\Steam\\Steam.exe"`)
### 3. 자동 로그인 설정

1. `netplwiz` 실행
1. 원하는 계정 선택
1. "사용자 이름과 암호를 입력해야 컴퓨터를 사용할 수 있음" 옵션 해제
1. 계정 암호 입력하여 확인
> [!warning]
안전한 설정을 위해 새로운 윈도우 사용자 계정을 만들어 진행하는 것이 좋습니다.

## 스팀 기본 쉘 사용의 장점

### 미디어 재생 팁

> [!tip]
Kodi(구 XBMC)를 스팀에 등록하면 동영상과 음악 재생도 쉽게 할 수 있습니다.

이렇게 설정하면 PC를 스팀 머신과 유사한 환경으로 사용할 수 있어, 편리하고 몰입도 높은 게임 경험을 즐길 수 있습니다.


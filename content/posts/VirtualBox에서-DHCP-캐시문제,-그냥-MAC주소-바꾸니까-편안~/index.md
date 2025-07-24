---
title: "VirtualBox에서 DHCP 캐시문제, 그냥 MAC주소 바꾸니까 편안~"
date: 2025-06-14T00:56:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "VirtualBox에서 DHCP IP 할당 문제는 MAC 주소 변경으로 해결할 수 있습니다. DHCP 서버의 리스 캐시 때문에 기존 IP를 계속 받아오는 문제가 발생하며, 새로운 MAC 주소를 생성하여 DHCP 서버가 새로운 클라이언트로 인식하게 하면 새로운 IP를 할당받을 수 있습니다. MAC 주소 변경 후 Rocky Linux에서 네트워크 인터페이스를 재연결하기 위해 추가 명령어 실행이 필요합니다."
notion_id: "2121bab9-e3f8-8030-8218-c7854078f965"
notion_url: "https://www.notion.so/VirtualBox-DHCP-MAC-2121bab9e3f880308218c7854078f965"
---

# VirtualBox에서 DHCP 캐시문제, 그냥 MAC주소 바꾸니까 편안~

> **Summary**
> VirtualBox에서 DHCP IP 할당 문제는 MAC 주소 변경으로 해결할 수 있습니다. DHCP 서버의 리스 캐시 때문에 기존 IP를 계속 받아오는 문제가 발생하며, 새로운 MAC 주소를 생성하여 DHCP 서버가 새로운 클라이언트로 인식하게 하면 새로운 IP를 할당받을 수 있습니다. MAC 주소 변경 후 Rocky Linux에서 네트워크 인터페이스를 재연결하기 위해 추가 명령어 실행이 필요합니다.

---

### 3. MAC 주소 변경 (확실한 방법)

```ruby
# VM 종료 후 VirtualBox에서
# 설정 → 네트워크 → 어댑터 2 → 고급
# MAC 주소 옆의 새로고침 버튼 클릭하여 새 MAC 주소 생성
```

# DHCP IP 할당 문제 해결: MAC 주소 변경으로 완전 해결!

## 문제 상황

VirtualBox에서 Host-only 어댑터의 DHCP 시작 IP를 192.168.56.100에서 192.168.56.101로 변경했음에도 불구하고, Rocky Linux VM이 계속 기존 IP인 192.168.56.100을 받아오는 문제가 발생했습니다.

## 원인 분석

**DHCP 서버의 리스 캐시 메커니즘** 때문이었습니다. DHCP 서버는 클라이언트의 MAC 주소를 기준으로 이전에 할당했던 IP 주소를 기억하고 있어서, 같은 MAC 주소에는 동일한 IP를 재할당하는 특성이 있습니다.

## 해결 방법

**VirtualBox에서 네트워크 어댑터의 MAC 주소를 새로 생성**하는 것이 가장 확실한 해결책이었습니다:

1. VM 완전 종료
1. VirtualBox 설정 → 네트워크 → 어댑터 2 → 고급
1. MAC 주소 옆의 새로고침 버튼 클릭
1. VM 재시작
이렇게 하면 DHCP 서버가 완전히 새로운 클라이언트로 인식하여 새로운 IP 범위(192.168.56.101~)에서 IP를 할당합니다.

## 추가 설정 필요사항

MAC 주소 변경 후 Rocky Linux에서 네트워크 인터페이스를 다시 인식시키기 위해 다음 명령어 실행이 필요합니다:

```shell
sudo nmcli device connect enp0s8

```

이 명령으로 새로운 MAC 주소의 네트워크 어댑터를 NetworkManager에 다시 연결하면 완전히 문제가 해결됩니다!


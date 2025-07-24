---
title: "ProxMox WOL 설정하기"
date: 2025-04-14T05:34:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "Proxmox 서버를 원격으로 부팅하기 위해 BIOS/UEFI에서 WOL 기능을 활성화하고, 네트워크 인터페이스를 확인한 후 "
notion_id: "1d51bab9-e3f8-8093-bf92-fedb75cbd69d"
notion_url: "https://www.notion.so/ProxMox-WOL-1d51bab9e3f88093bf92fedb75cbd69d"
---

# ProxMox WOL 설정하기

> **Summary**
> Proxmox 서버를 원격으로 부팅하기 위해 BIOS/UEFI에서 WOL 기능을 활성화하고, 네트워크 인터페이스를 확인한 후 

---

🔗 [https://bigdwarf.blog/28](https://bigdwarf.blog/28)

## Proxmox WOL(Wake-on-LAN) 설정 요약

**� 목표: Proxmox 서버를 원격으로 부팅(WOL)하도록 설정**

**1. 메인보드 BIOS/UEFI 설정**

- 부팅 시 BIOS/UEFI 진입
- `Wake on LAN (WOL)`, `Power On by PCI/PCIe` 등 관련 옵션 찾아 **활성화 (Enable)**
- (설정 명칭 및 위치는 메인보드 제조사마다 다름)
**2. Proxmox 네트워크 인터페이스 확인**

- Proxmox 셸(Shell) 접속
- 사용할 네트워크 인터페이스 이름 (예: `enp3s0`, `eth0`) 및 MAC 주소 확인:
```shell
ip addr

```

**3. Proxmox WOL 기능 활성화**

- `ethtool` 설치 확인 (보통 기본 설치됨), 없다면 `apt update && apt install ethtool`
- 현재 WOL 상태 확인 (`Wake-on: d`는 비활성화 상태):*(<interface_name> 부분을 2번에서 확인한 이름으로 변경)*
```shell
ethtool <interface_name> | grep Wake-on

```

- WOL 기능 활성화 (`g`는 Magic Packet 수신 활성화):
```shell
# root 권한이 필요할 수 있음 (sudo 사용 또는 root 로그인)
ethtool -s <interface_name> wol g

```

**4. Proxmox 재부팅 시 WOL 자동 활성화 설정**

- 네트워크 설정 파일 편집 (nano 또는 vi 에디터 사용):
```shell
# root 권한 필요
nano /etc/network/interfaces

```

- 사용하는 `<interface_name>` 설정 부분 아래에 다음 줄 추가:*(주의: 경로 *`*/usr/sbin/ethtool*`* 또는 *`*/sbin/ethtool*`* 일 수 있음. *`*which ethtool*`* 명령어로 확인)*
```plain text
post-up ethtool -s <interface_name> wol g

```

- 파일 저장 (Nano: Ctrl+O, Enter, Ctrl+X)
**5. Proxmox 서버 종료**

- 설정을 적용하고 WOL 테스트를 위해 Proxmox 서버를 정상적으로 종료:
```shell
# root 권한 필요
shutdown now

```

**6. WOL 패킷 전송하여 부팅**

- 공유기 관리 페이지 (예: iptime WOL 기능), 스마트폰 WOL 앱, 다른 PC의 WOL 유틸리티 등 사용
- Proxmox 서버의 **MAC 주소**를 대상으로 WOL (매직 패킷) 신호 전송
- 서버 전원 켜짐 확인

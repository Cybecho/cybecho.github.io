---
title: "ProxMox 네트워크 모드 - 디폴트 설정과 폐쇄망 만드는 방법"
date: 2025-03-05T08:36:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Infra & Network", "Let's Homelab!"]
description: "Proxmox에서 VM을 생성하면 기본적으로 Bridge 모드로 설정되며, 이를 통해 VM들이 인터넷을 사용할 수 있다. 특정 VM들끼리만 통신할 수 있는 독립된 네트워크를 만들기 위해서는 새로운 브리지를 생성하거나 VLAN, Open vSwitch를 사용할 수 있다."
notion_id: "1ad1bab9-e3f8-80a3-9495-f8ed670086fa"
notion_url: "https://www.notion.so/ProxMox-1ad1bab9e3f880a39495f8ed670086fa"
---

# ProxMox 네트워크 모드 - 디폴트 설정과 폐쇄망 만드는 방법

> **Summary**
> Proxmox에서 VM을 생성하면 기본적으로 Bridge 모드로 설정되며, 이를 통해 VM들이 인터넷을 사용할 수 있다. 특정 VM들끼리만 통신할 수 있는 독립된 네트워크를 만들기 위해서는 새로운 브리지를 생성하거나 VLAN, Open vSwitch를 사용할 수 있다.

---

[https://pve.proxmox.com/wiki/Network_Configuration](https://pve.proxmox.com/wiki/Network_Configuration)

## 1. Proxmox에서 VM을 만들면 기본 네트워크는 어떻게 설정되나요?

**질문:**

> Proxmox에서 VM을 생성하면 기본적으로 Bridge모드인가?

**답변:**

네, 맞습니다. Proxmox VE에서 VM을 새로 만들면 자동으로 Bridge 모드로 설정됩니다.

- 처음 설치할 때 `vmbr0`이라는 기본 브리지가 자동으로 만들어집니다.
- 이 브리지는 컴퓨터의 실제 네트워크 카드와 연결되어 있어서, VM들이 일반 컴퓨터처럼 네트워크를 사용할 수 있습니다.
- 새로 만든 VM은 자동으로 이 브리지에 연결되어 인터넷을 바로 사용할 수 있습니다.
필요하다면 나중에 다른 네트워크 설정(브리지 추가, 라우팅, NAT, VLAN 등)으로 바꿀 수 있습니다.

## 2. 특정 VM들끼리만 통신할 수 있는 독립된 네트워크를 만들려면 어떻게 하나요?

**질문:**

> 버추얼박스의 HostOnly와 같이, 네트워크 어댑터를 따로 만들어 특정 VM들을 하나의 폐쇄 네트워크로 묶고싶다면, 무슨 설정을 사용해야하는가?

**답변:**

[https://forum.proxmox.com/threads/newbie-question-what-is-equivalent-of-vmnet-vmware-host-only-networks-in-proxmox.144679/](https://forum.proxmox.com/threads/newbie-question-what-is-equivalent-of-vmnet-vmware-host-only-networks-in-proxmox.144679/)

```bash
그렇다면 새 것을 만들 수 있습니다 
리눅스 브리지 아래 호스트 시스템 > 네트워크 브리지 포트를 할당하지 않습니다.
이런 식으로이 브리지를 사용하는 모든 CT / VM은 서로 통신 할 수 있지만 다른 것은 통신 할 수 없습니다.
```

### 1. 새로운 브리지 만들기

- Proxmox VE 관리 화면에서 새 브리지를 만듭니다.
- 이 브리지는 실제 네트워크와 연결하지 않고 독립적으로 설정합니다.
- VM들의 네트워크 카드를 이 브리지에 연결하면 서로 통신할 수 있는 독립된 네트워크가 만들어집니다.
### 2. VLAN 사용하기

- VLAN을 사용해서 독립된 가상 네트워크를 만들 수 있습니다.
- VM들을 같은 VLAN에 연결하면 다른 네트워크와 분리된 환경이 됩니다.
### 3. Open vSwitch 사용하기

- Proxmox VE에서는 Open vSwitch라는 고급 네트워크 도구를 사용할 수 있습니다.
- 이를 통해 더 복잡하고 세밀한 네트워크 설정이 가능합니다.

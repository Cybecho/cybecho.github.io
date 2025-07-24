---
title: "ProxMox 네트워크 모드 - Bridge , NAT , Bond"
date: 2025-03-05T08:31:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Infra & Network", "Let's Homelab!"]
description: "ProxMox의 네트워크 모드에는 브리지, 라우팅, NAT, 본딩이 있으며, 각 모드는 가상 머신의 네트워크 연결 방식에 따라 다릅니다. 브리지는 가상 스위치로 작동하여 실제 네트워크에 직접 연결되며, 라우팅은 서버가 모든 네트워크 신호를 처리하여 여러 가상 머신을 인터넷에 연결합니다. NAT는 내부 IP를 사용하여 호스트의 IP를 통해 외부 인터넷에 접속하게 합니다. 본딩은 여러 네트워크 포트를 묶어 안정성과 속도를 향상시키는 기술입니다."
notion_id: "1ad1bab9-e3f8-80d8-b1f7-e01b801ed27c"
notion_url: "https://www.notion.so/ProxMox-Bridge-NAT-Bond-1ad1bab9e3f880d8b1f7e01b801ed27c"
---

# ProxMox 네트워크 모드 - Bridge , NAT , Bond

> **Summary**
> ProxMox의 네트워크 모드에는 브리지, 라우팅, NAT, 본딩이 있으며, 각 모드는 가상 머신의 네트워크 연결 방식에 따라 다릅니다. 브리지는 가상 스위치로 작동하여 실제 네트워크에 직접 연결되며, 라우팅은 서버가 모든 네트워크 신호를 처리하여 여러 가상 머신을 인터넷에 연결합니다. NAT는 내부 IP를 사용하여 호스트의 IP를 통해 외부 인터넷에 접속하게 합니다. 본딩은 여러 네트워크 포트를 묶어 안정성과 속도를 향상시키는 기술입니다.

---

[https://pve.proxmox.com/wiki/Network_Configuration](https://pve.proxmox.com/wiki/Network_Configuration)

## Default Configuration using a Bridge

### 브리지 구성

![Image](https://pve.proxmox.com/pve-docs/images/default-network-setup-bridge.svg)

- 브리지는 컴퓨터 안에서 만든 가상 스위치입니다. 실제 네트워크 스위치처럼 작동합니다.
- 가상 머신들이 하나의 브리지를 같이 쓸 수도 있고, 여러 개의 브리지로 나눠서 쓸 수도 있습니다.
- 브리지를 사용하면 가상 머신이 실제 네트워크에 직접 연결된 것처럼 사용할 수 있습니다.
---

## Routed Configuration

### 라우팅 구성

![Image](https://pve.proxmox.com/pve-docs/images/default-network-setup-routed.svg)

- 일부 서비스에서는 한 네트워크 장치에 여러 개의 주소를 사용할 수 없어서 브리지를 쓸 수 없습니다.
- 이런 경우에는 라우팅을 사용해서 모든 네트워크 신호를 한 곳으로 모아서 처리할 수 있습니다.
---

## Masquerading (NAT) with iptables

### NAT 구성

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a85efdae-4b2a-48b3-8b2c-ba675eb68545/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPKMKG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHPtryG5lJEgxediZl5aaOF0NxG3zk4585i0iaVytvlCAiEAgYmmy5UHihK7fYM1zBDkJVSTTZ1Lvy12s8OtSKlU%2Ftoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFnJ9plv4sOWLYDn6SrcAxdYX4Z9UqCtzsQFQXA2YOYpDKuYUgdjnzXNaePuvijCQiL0cAoIvtaIaNEMF%2BHNWKyBZFaMPUBa0P1%2BXELlzDDX%2BuaLhVLKk5KJliRKKEsb6uQYY6vNs8kzcQ5pJ63Kks0ecyVQey57HeUw6ykWBtZbw1ytVwkXvRcqlKob7qSXMZGGzoQKQHlOlSQ%2BGHVY%2BnEX6UNmVWS8QQAViT3Jp4BV9l7wny8P4OasuIygfnnS%2BO4AYY2i9zgJSXzG4TCr8CSrMwQqSn9q%2BGXDFlVNsMrWvfBFxihK8k2WduvkX%2BFVkGYkD2th5NhYBW4gs8OJk7eQhsgL39z57bRraCE%2BwSgK3Eckk%2FlMJJIn6rn5mlgVRfleUwR4BIJcuOy89nEtzp5hOmvSCy55qThgy%2Fbcj2NShXLbMt5G8jUlK1yVaVJdGQP16K%2BReJs1acwUkUlN%2B%2FCVwRo8VzFFROYRC0qduvwCF2LSQQ34l3lYg65EfKW3yHMo%2FNXUt26%2BrnvdhluE%2FyfKHSo0EERUjEGlLL6WGo%2BVrmafv4XZ7AIchX7COlCIosy9e4y4ChffZAFObzH1KLlPu9JGuC2oI49k6wgEx7S4cgydqPxEqSk%2BakT5p%2FjQsH5JW6FbNDWsRiVTMIbPh8QGOqUBDspGTVwp5AITn3DaJhzKwBGF48wDf5hZC7eLwuuaIONSfyNQJwzGWMGetaWrnB8iJ%2BzYKV7WxfxSiy9C6y%2BnA%2BsMWKqnkOaKKxWPkGydbY8j9UO0tJxgxZcQ%2Bdr89O9b7tspXllHTh5lX8wsZ6z6%2BRrDsnvUgzCFzmcqo3IGua3Wc13NMafcYH7%2FzAnDMa0S9aK14%2Bipn%2B00xfFSWo9fdrU9ASv8&X-Amz-Signature=7f42d1cb952574a32d2eb3572d7da219c5e80310b1102d997b857e8db23c568a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- NAT를 사용하면 가상 머신이 내부 IP 주소를 써도 호스트 컴퓨터의 IP를 통해 외부 인터넷을 사용할 수 있습니다.
- 방화벽 설정에 따라 추가로 conntrack 설정이 필요할 수 있습니다.
---

## 그런데, Routed 모드와 NAT 모드가 유사해보인다. 무슨 차이점이 존재할까?

Routed Configuration과 NAT는 비슷해 보이지만 세 가지 중요한 차이가 있습니다:

1. IP 주소 방식
1. 설정의 어려움
1. 외부에서의 접속
정리하면, Routed는 실제 인터넷 IP를 직접 사용하는 방식이고, 

NAT는 내부 IP를 사용하면서 호스트 컴퓨터의 IP를 통해 인터넷에 접속하는 방식입니다.

---

## Linux Bond

![Image](https://pve.proxmox.com/pve-docs/images/default-network-setup-bond.svg)

### 본딩

- 본딩은 여러 개의 네트워크 카드를 하나로 묶어서 사용하는 기술입니다.
- 네트워크 부하 분산, 장애 대비, 속도 향상을 위해 사용합니다.
- 여러 가지 동작 방식을 선택할 수 있습니다(번갈아 사용, 백업용, 부하 분산 등).
- 네트워크 장비가 LACP를 지원하면 802.3ad 모드를, 지원하지 않으면 백업 모드를 쓰는 것이 좋습니다.
- 여러 컴퓨터를 연결하는 클러스터에서는 본딩 대신 여러 개의 네트워크를 따로 구성하는 것이 더 좋습니다.
<관조자> “작은 회사에서 서버를 운영한다고 상상해볼게요.
서버에 네트워크 카드(랜포트)가 두 개 있어요.
둘 다 스위치에 연결해요.
그냥 쓰면 서버에서 한 포트만 쓰고, 다른 한 포트는 놀고 있을 수 있죠.
그런데 ‘본딩’을 사용하면 두 포트를 묶어서 마치 하나처럼 쓸 수 있어요.

만약 한 포트가 고장 나면, 다른 포트가 계속 데이터를 주고받아서 서비스가 끊기지 않아요.
또한 두 포트를 동시에 쓸 수 있다면(스위치가 LACP를 지원할 때), 데이터를 더 빠르게 보내고 받을 수 있어요.

이런 식으로 본딩은 ‘속도 향상’과 ‘장애 대비’라는 두 가지 이점을 주는 거예요.
그러니까, 본딩은 “서버의 두 다리를 하나로 합쳐서 더 튼튼하고 빠른 다리로 만드는 것”이라고 생각하면 쉬워요.” </관조자>

<final_answer> “결론적으로, 본딩은 여러 네트워크 포트를 묶어서 속도도 올리고, 하나가 고장 나도 통신이 끊기지 않도록 해주는 기술이에요.”
</final_answer>


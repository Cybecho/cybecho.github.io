---
title: "랩탑 wifi 네트워크를 그대로 스위치에 넣어 NAT해줄 수 있을까?"
date: 2025-03-09T05:46:00.000Z
draft: false
tags: ["fedora"]
series: ["Let's Linux!"]
description: "Fedora Linux에서 Wi-Fi를 USB 랜카드를 통해 스위치 네트워크로 포워딩하는 방법을 설명합니다. IP 포워딩 활성화, USB 랜카드에 IP 할당, NAT 설정, 방화벽 설정, 그리고 DHCP 서버 설정을 순차적으로 진행하여 스위치에 연결된 장치가 자동으로 IP를 받아 인터넷에 접근할 수 있도록 합니다."
notion_id: "1b11bab9-e3f8-8000-a7c8-e5142496192f"
notion_url: "https://www.notion.so/wifi-NAT-1b11bab9e3f88000a7c8e5142496192f"
---

# 랩탑 wifi 네트워크를 그대로 스위치에 넣어 NAT해줄 수 있을까?

> **Summary**
> Fedora Linux에서 Wi-Fi를 USB 랜카드를 통해 스위치 네트워크로 포워딩하는 방법을 설명합니다. IP 포워딩 활성화, USB 랜카드에 IP 할당, NAT 설정, 방화벽 설정, 그리고 DHCP 서버 설정을 순차적으로 진행하여 스위치에 연결된 장치가 자동으로 IP를 받아 인터넷에 접근할 수 있도록 합니다.

---

# 미완성임

다음은 Fedora Linux에서 Wi-Fi(`wlp59s0`)로 받은 인터넷을 USB 랜카드(`enp0s31f6`)로 포워딩하여 스위치 네트워크에서 사용할 수 있도록 설정하는 명령어입니다.

순차적으로 실행하세요.

---

### 1. IP 포워딩 활성화

```shell
sudo sysctl -w net.ipv4.ip_forward=1
sudo bash -c 'echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf'

```

### 2. USB 랜카드(enp0s31f6)에 IP 수동 할당

내부 네트워크로 사용할 주소를 설정합니다 (예: `192.168.100.1` 사용)

```shell
sudo ip addr add 192.168.100.1/24 dev enp0s31f6
sudo ip link set enp0s31f6 up

```

### 3. NAT 설정 (Wi-Fi → USB랜카드)

```shell
sudo iptables -t nat -A POSTROUTING -o wlp59s0 -j MASQUERADE
sudo iptables -A FORWARD -i enp0s31f6 -o wlp59s0 -j ACCEPT
sudo iptables -A FORWARD -i wlp59s0 -o enp0s31f6 -m state --state RELATED,ESTABLISHED -j ACCEPT


```

iptables 규칙 영구 저장 (재부팅 후에도 유지하려면):

```shell
sudo dnf install iptables-services -y
sudo service iptables save
sudo systemctl enable --now iptables

```

### 4. 방화벽 설정 허용 (firewalld 사용하는 경우)

```shell
sudo firewall-cmd --permanent --add-masquerade
sudo firewall-cmd --permanent --zone=trusted --add-interface=enp0s31f6
sudo firewall-cmd --reload

```

### 5. DHCP 서버 설정 (dnsmasq로 USB랜카드 쪽에 DHCP 제공)

```shell
sudo dnf install dnsmasq -y

```

dnsmasq 구성 파일 편집 (`/etc/dnsmasq.conf`):

```shell
sudo bash -c 'echo "interface=enp0s31f6
dhcp-range=192.168.100.10,192.168.100.100,12h" >> /etc/dnsmasq.conf'

```

dnsmasq 서비스 활성화 및 실행:

```shell
sudo systemctl enable --now dnsmasq

```

---

위 순서대로 진행하면 Wi-Fi로 받은 인터넷을 USB 랜카드로 연결된 스위치 네트워크에서 사용할 수 있습니다.

스위치에 연결된 장치는 DHCP로 자동으로 IP(`192.168.100.10~192.168.100.100`)를 받아 인터넷에 접근할 수 있습니다.


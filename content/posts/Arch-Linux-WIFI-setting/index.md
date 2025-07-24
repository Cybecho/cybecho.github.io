---
title: "Arch Linux WIFI setting"
date: 2024-01-08T00:00:00.000Z
draft: false
tags: ["Arch", "ubuntu"]
series: ["Let's Linux!"]
description: "Arch Linux에서 Wi-Fi 설정을 위한 방법으로, 네트워크 관리자를 사용하여 Wi-Fi에 연결하는 방법, Broadcom BCM4360 드라이버 설치, DHCP 서비스 및 netctl 사용 여부 확인 방법, SSID 확인 방법, IWD 서비스의 상태 확인 및 시작 방법을 설명합니다."
notion_id: "7b644e1c-5256-4a0f-9cf6-7b5cc2ffcc52"
notion_url: "https://www.notion.so/Arch-Linux-WIFI-setting-7b644e1c52564a0f9cf67b5cc2ffcc52"
---

# Arch Linux WIFI setting

> **Summary**
> Arch Linux에서 Wi-Fi 설정을 위한 방법으로, 네트워크 관리자를 사용하여 Wi-Fi에 연결하는 방법, Broadcom BCM4360 드라이버 설치, DHCP 서비스 및 netctl 사용 여부 확인 방법, SSID 확인 방법, IWD 서비스의 상태 확인 및 시작 방법을 설명합니다.

---

🔗 [https://ko.linux-console.net/?p=16634](https://ko.linux-console.net/?p=16634)

```javascript
nmcli device wifi connect SK_WiFiGIGAFD30_5G password EOK27@1573
```

### mac pro 6,1 spec

```javascript
무선 네트워크 장치:
제조사: Broadcom Inc. and subsidiaries
모델명: BCM4360 802.11ac Dual Band Wireless Network Adapter
커널 드라이버: bcma-pci-bridge
커널 모듈: bcma
유선 네트워크 장치:
제조사: Intel Corporation
모델명: I210 Gigabit Network Connection
커널 드라이버: igb
커널 모듈: igb
```

```javascript
[sbu@archlinux ~]$ sudo rfkill list
0: hci0: Bluetooth
        Soft blocked: no
        Hard blocked: no
[sbu@archlinux ~]$ lspci -k | grep -iA3 "network"
libkmod: kmod_config_parse: /etc/modprobe.d/modprode.conf line 1: ignoring bad line starting with 'MODULES=(amdgpu)'
0d:00.0 Network controller: Broadcom Inc. and subsidiaries BCM4360 802.11ac Dual Band Wireless Network Adapter (rev 03)
        Subsystem: Apple Inc. BCM4360 802.11ac Dual Band Wireless Network Adapter
        Kernel driver in use: bcma-pci-bridge
        Kernel modules: bcma
0e:00.0 SATA controller: Samsung Electronics Co Ltd S4LN053X01 AHCI SSD Controller(Apple slot) (rev 01)
--
aa:00.0 Ethernet controller: Intel Corporation I210 Gigabit Network Connection (rev 03)
        Subsystem: CalDigit, Inc. I210 Gigabit Network Connection
        Kernel driver in use: igb
        Kernel modules: igb
```

### **Broadcom BCM4360 **Driver

```javascript
sudo pacman -S broadcom-wl-dkms
```



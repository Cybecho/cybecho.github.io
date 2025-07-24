---
title: "Arch Linux WIFI setting"
date: 2024-01-08T00:00:00.000Z
draft: false
tags: ["Arch", "ubuntu"]
series: ["Let's Linux!"]
description: "Arch Linux에서 Wi-Fi 설정을 위해 nmcli를 사용하여 연결하고, Broadcom BCM4360 드라이버를 설치하며, dhcpcd 서비스와 netctl 패키지의 설치 여부를 확인하는 방법을 설명합니다. 또한 IWD 서비스를 통해 무선 네트워크를 관리하는 방법도 안내합니다."
notion_id: "7b644e1c-5256-4a0f-9cf6-7b5cc2ffcc52"
notion_url: "https://www.notion.so/Arch-Linux-WIFI-setting-7b644e1c52564a0f9cf67b5cc2ffcc52"
---

# Arch Linux WIFI setting

> **Summary**
> Arch Linux에서 Wi-Fi 설정을 위해 nmcli를 사용하여 연결하고, Broadcom BCM4360 드라이버를 설치하며, dhcpcd 서비스와 netctl 패키지의 설치 여부를 확인하는 방법을 설명합니다. 또한 IWD 서비스를 통해 무선 네트워크를 관리하는 방법도 안내합니다.

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


<details>
<summary>If you can’t found dhcp service?</summary>

`*$ *``sudo systemctl disable dhcpcd.service` 이거 안될때

dhcpcd 패키지 설치 여부 확인:


```javascript
sudo pacman -Qs dhcpcd
```

설치되어 있지 않다면, 다음 명령어로 설치합니다.

```javascript
sudo pacman -S dhcpcd

```

서비스 파일 확인:

```javascript
sudo systemctl status dhcpcd.service
```

파일이 존재하지 않는다면, 다음 명령어로 생성합니다.

```javascript
sudo systemctl enable dhcpcd.service
```

다른 DHCP 관리 서비스 확인:

```javascript
sudo systemctl status systemd-networkd
```

systemd-networkd가 활성화되어 있다면, dhcpcd를 사용하려면 먼저 비활성화해야 합니다.

```javascript
sudo systemctl disable systemd-networkd

```

이 후, 다시 dhcpcd 서비스를 비활성화 시도해보세요.

</details>

<details>
<summary>If you can’t netctl?</summary>

`*$ *``sudo netctl-auto list` 이거 안될때

1. **netctl 패키지 설치 여부 확인:**
  **Bash**

```plain text
sudo pacman -Qs netctl

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

  설치되어 있지 않다면, 다음 명령어로 설치합니다.

  **Bash**

```plain text
sudo pacman -S netctl

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

1. **netctl-auto 명령어 경로 확인:**
  **Bash**

```plain text
which netctl-auto

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

  경로가 출력되지 않는다면, 다음 명령어로 경로를 설정합니다.

  **Bash**

```plain text
export PATH=$PATH:/usr/bin/netctl

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

  (해당 경로는 배포판에 따라 다를 수 있습니다.)

**이 후, 다시 netctl-auto list 명령어를 시도해보세요.**

</details>

<details>
<summary>How can I know SSID?</summary>

🔗 [https://happycode.tistory.com/550](https://happycode.tistory.com/550)

</details>

<details>
<summary>iwctl로 접속하는방법</summary>

IWD 서비스는 Arch Linux에서 무선 네트워크를 관리하는 데 사용되는 서비스입니다.

다음 단계에 따라 이 문제를 해결할 수 있습니다.

1. **IWD 서비스가 시작되었는지 확인합니다.**
```c++
sudo systemctl status iwd.service
```

출력에 "Active: active (running)"이 표시되면 IWD 서비스가 시작되었습니다. 그렇지 않은 경우 다음 단계로 진행합니다.

1. **IWD 서비스를 시작합니다.**
```c++
sudo systemctl start iwd.service
```

1. **iwctl을 다시 실행합니다.**
```c++
iwctl
```

</details>


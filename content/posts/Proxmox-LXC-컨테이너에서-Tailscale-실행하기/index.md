---
title: "Proxmox LXC 컨테이너에서 Tailscale 실행하기"
date: 2025-02-09T14:19:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "Proxmox LXC 컨테이너에서 Tailscale VPN을 실행하기 위해 TUN 디바이스를 활성화하는 방법을 설명합니다. LXC 설정 파일을 수정하고 컨테이너를 재시작한 후, TUN 디바이스가 활성화되었는지 확인하고 tailscaled를 실행합니다. 또한, 컨테이너 재부팅 시 자동으로 Tailscale이 실행되도록 crontab을 설정하는 방법도 포함되어 있습니다."
notion_id: "1951bab9-e3f8-80c7-afe8-c902aed1fde2"
notion_url: "https://www.notion.so/Proxmox-LXC-Tailscale-1951bab9e3f880c7afe8c902aed1fde2"
---

# Proxmox LXC 컨테이너에서 Tailscale 실행하기

> **Summary**
> Proxmox LXC 컨테이너에서 Tailscale VPN을 실행하기 위해 TUN 디바이스를 활성화하는 방법을 설명합니다. LXC 설정 파일을 수정하고 컨테이너를 재시작한 후, TUN 디바이스가 활성화되었는지 확인하고 tailscaled를 실행합니다. 또한, 컨테이너 재부팅 시 자동으로 Tailscale이 실행되도록 crontab을 설정하는 방법도 포함되어 있습니다.

---

![Image](image_113b3ddbcbb6.png)

# Proxmox LXC 컨테이너에서 Tailscale 실행하기

Proxmox에서 LXC 컨테이너를 사용하여 Tailscale VPN을 실행하려고 할 때, 기본적으로 `TUN` 디바이스가 비활성화되어 있어 `tailscaled`가 실행되지 않는 문제가 발생할 수 있습니다. 이 문서는 **LXC 환경에서 Tailscale을 정상적으로 실행하기 위한 설정 방법**을 안내합니다.

---

## ✅ **1. 문제 원인 분석**

LXC 컨테이너 내부에서 `tailscaled`를 실행하면 다음과 같은 오류가 발생할 수 있습니다:

```shell
is CONFIG_TUN enabled in your kernel? `modprobe tun` failed with: modprobe: FATAL: Module tun not found in directory /lib/modules/...
tun module not loaded nor found on disk
wgengine.NewUserspaceEngine(tun "tailscale0") error: tstun.New("tailscale0"): CreateTUN("tailscale0") failed; /dev/net/tun does not exist
```

이 오류는 **컨테이너에서 **`**TUN**`** 인터페이스를 사용할 수 없도록 설정되어 있기 때문**입니다. 이를 해결하려면 Proxmox의 **LXC 설정을 수정**하고, 컨테이너 내부에서 TUN 디바이스를 활성화해야 합니다.

---

## 🔹 **2. Proxmox 호스트에서 LXC 설정 수정**

먼저 **Proxmox 호스트에서 LXC 설정을 수정**해야 합니다.

### **1) LXC 설정 파일 수정**

Proxmox 호스트에서 컨테이너의 설정 파일을 엽니다: (컨테이너가 아닙니다)

```shell
nano /etc/pve/lxc/<컨테이너ID>.conf
```

예를 들어, 컨테이너 ID가 `103`이라면 다음과 같이 실행합니다:

```shell
nano /etc/pve/lxc/103.conf
```

아래 두 줄을 추가합니다:

```plain text
lxc.cgroup.devices.allow = c 10:200 rwm
lxc.mount.entry = /dev/net/tun dev/net/tun none bind,create=file
```

### **2) 컨테이너 재시작**

설정을 적용하려면 컨테이너를 **완전히 재시작**해야 합니다.

```shell
pct stop <컨테이너ID>
pct start <컨테이너ID>
```

예시:

```shell
pct stop 103
pct start 103
```

---

## 🔹 **3. 컨테이너 내부에서 **`**TUN**`** 디바이스 활성화**

컨테이너가 재시작되면, 내부에서 `TUN` 디바이스가 활성화되었는지 확인해야 합니다.

```shell
ls -l /dev/net/tun
```

정상적인 경우 다음과 같은 출력이 나타납니다:

```shell
crw-rw-rw- 1 root root 10, 200 Feb  9 14:06 /dev/net/tun
```

**❗ 만약 **`**/dev/net/tun**`**이 존재하지 않는다면?**
아래 명령어를 실행하여 수동으로 생성합니다.

```shell
mkdir -p /dev/net
mknod /dev/net/tun c 10 200
chmod 666 /dev/net/tun
```

이제 다시 `ls -l /dev/net/tun`을 실행하여 확인합니다.

---

## 🔹 **4. Tailscale 실행**

이제 lxc 컨테이너에서 `tailscaled`를 실행할 수 있습니다.

```shell
nohup /usr/sbin/tailscaled --tun=tailscale0 --verbose=1 > /var/log/tailscaled.log 2>&1 &
```

정상적으로 실행되었는지 확인합니다:

```shell
ps aux | grep tailscale
```

그다음 `tailscale up`을 실행하여 Tailscale 네트워크에 연결합니다:

```shell
tailscale up
```

---

## 🔹 **5. 컨테이너 재부팅 시 자동 실행 설정**

컨테이너가 재부팅될 때마다 `tailscaled`가 자동으로 실행되도록 설정하려면, `crontab`을 활용하면 됩니다.

```shell
crontab -e
```

아래 줄을 추가:

```plain text
@reboot /usr/sbin/tailscaled --tun=tailscale0 --verbose=1
```

이제 컨테이너가 재부팅되더라도 Tailscale이 자동으로 실행됩니다.

---

## 🚀 **결론**

이제 Proxmox LXC 컨테이너에서 Tailscale을 정상적으로 사용할 수 있습니다! 🚀

문제가 발생하면 `journalctl -u tailscaled --no-pager --lines=50`을 실행하여 로그를 확인하고 디버깅하세요.


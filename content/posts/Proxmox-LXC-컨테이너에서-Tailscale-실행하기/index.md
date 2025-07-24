---
title: "Proxmox LXC 컨테이너에서 Tailscale 실행하기"
date: 2025-02-09T14:19:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "Proxmox LXC 컨테이너에서 Tailscale VPN을 실행하기 위해 TUN 디바이스를 활성화하는 방법을 설명합니다. LXC 설정 파일을 수정하고, 컨테이너를 재시작한 후 TUN 디바이스가 활성화되었는지 확인하며, tailscaled를 실행하고 자동 실행 설정을 추가하는 단계로 구성되어 있습니다. 문제가 발생하면 로그를 확인하여 디버깅할 수 있습니다."
notion_id: "1951bab9-e3f8-80c7-afe8-c902aed1fde2"
notion_url: "https://www.notion.so/Proxmox-LXC-Tailscale-1951bab9e3f880c7afe8c902aed1fde2"
---

# Proxmox LXC 컨테이너에서 Tailscale 실행하기

> **Summary**
> Proxmox LXC 컨테이너에서 Tailscale VPN을 실행하기 위해 TUN 디바이스를 활성화하는 방법을 설명합니다. LXC 설정 파일을 수정하고, 컨테이너를 재시작한 후 TUN 디바이스가 활성화되었는지 확인하며, tailscaled를 실행하고 자동 실행 설정을 추가하는 단계로 구성되어 있습니다. 문제가 발생하면 로그를 확인하여 디버깅할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2498a140-b3e0-48b6-a6e3-8f96f3927e3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4HDSGX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDHrLsujg4UXwSCPX49BPEKX%2B81HPpbsh88neEO%2FwmtFwIhANpkgUiIWvn%2FAlvmiWp%2BBkSwxLxdn1irX0MBTCImcN6XKv8DCCkQABoMNjM3NDIzMTgzODA1Igz0ODGJR%2Bij4%2BX7kAQq3AP%2FMhqgVI3vk%2FmA2wTzE076IMhlh8hW%2FroEK7Uk%2BSTlvG6w1NyOSpTZ2KxEk3jxbc%2BStnHVkKh0mdjBcMGbWmN3RL703tPEmJWMZKjrlEVyGRYrMHf9BQTgg8fLa6rFMw9CMm2sg462JjmxhDQbw30mO7Q4BP6gANff5bYCMJFRXyXhBY8KI0Ehadx0BMjuXrqdM19O99sCw19S4j%2F6xZmt%2Bt3kSOV87yCk8IaLp2q2AzNBsCR%2F%2Fer1V5Dull9Ww3xg3m37AnUWZ%2B%2FJRuB5KYgqK0lM4Eh1g0IMT8dG9m%2BbLn%2BCurYPCBwDCFHI8OHycSEgME5VNfqdLjJB9TPARKqBnBKeSZrCQGdxh20Z4voPCq68s7d7NvVUhsfYa1v0oWfCb3IqRxOQNQ5qul%2BBCl%2BBswJIr2f5fAXnc%2FZ2lEJMjQWDLBblGbnOGWVp5ljvlTgRsWSG%2B9ueOciLQ8HsP2pDR%2F%2BEZK8two1n4GgFHERVWPDkMir4GlKA%2FfRiGe0Rfx0BLGdIQvd6dyPZXhgUIiFO0RHU%2FlAgcwMh7XkDv7AcYSTdP%2FolLBnt%2B8uuDJfM9eEGVD3cRk5F1goOy58Fa3zMaDF0xAdTvME797R3x9HAp%2BW23WS4qMQAEL%2BrJDDA0IfEBjqkAee80HLWxZcbtssKoQsTVGjOPVlgYb1Yu1p5Vr4nLc74SMM4mCOby479vWwnzakzvj2ZtQFLykR%2FLr7R4OwlMHS2SA6Jo6k%2BmdvH7PzSvqN5Jffffk%2BH0x2uvz7JscyBQdqe6k6%2BkeATcrmn1ZPxnt18DHE5Pr0NIPA6FJmkkA0FmeSKxcjjSaDRPxO%2F8LYzX%2FgsJYmahdQJRVXTIZGf1uV3EqaB&X-Amz-Signature=aa32dc9510e8e5fe56b305a580ca03f7e6b74a33bdcf82e0b0cb2a49fb86fa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


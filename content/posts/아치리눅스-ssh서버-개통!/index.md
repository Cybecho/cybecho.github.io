---
title: "아치리눅스 ssh서버 개통!"
date: 2023-12-02T00:00:00.000Z
draft: false
tags: ["Arch"]
series: ["Let's Linux!"]
description: "Arch Linux에서 SSH 서버를 설정하고 최적화하는 방법에 대한 안내로, 필요한 패키지를 설치하고 SSH 서비스를 시작 및 활성화하는 명령어를 포함하고 있습니다. IP 주소 확인을 위한 명령어도 제공됩니다."
notion_id: "27d06338-45f7-4f68-ac5a-b93455e72ca9"
notion_url: "https://www.notion.so/ssh-27d0633845f74f68ac5ab93455e72ca9"
---

# 아치리눅스 ssh서버 개통!

> **Summary**
> Arch Linux에서 SSH 서버를 설정하고 최적화하는 방법에 대한 안내로, 필요한 패키지를 설치하고 SSH 서비스를 시작 및 활성화하는 명령어를 포함하고 있습니다. IP 주소 확인을 위한 명령어도 제공됩니다.

---

🔗 [https://ciksiti.com/ko/chapters/3504-arch-linux-ssh-server-setup-customization-and-optimization](https://ciksiti.com/ko/chapters/3504-arch-linux-ssh-server-setup-customization-and-optimization)

```javascript
sudo pacman -Sy
```

```javascript
sudo pacman -S openssh
```

```javascript
sudo systemctl status sshd
```

```javascript
sudo systemctl start sshd
```

```javascript
sudo systemctl enable sshd
```

```javascript
ip a
```


### 맥미니 서버

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/31c92f79-6186-4986-b1ce-f41a1dda5fb5/IMG_1882.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVRWGYU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCubn4AS%2F5LCxz%2F1wgMvS1f8PIfRdisVxNtu4Vjpbc26QIhANUop8VQvwTsLASll9Tlv2diyS18dxANYHzv1d1kKaVBKv8DCCoQABoMNjM3NDIzMTgzODA1Igz7NtqZe27YsioeAyYq3APxtJNIY%2F5Ge2mgo5Gnk63BKVQKrFhoi8fvdTDaRmGpWcPZQiYoZukq5aSSQZIblSZ9Y%2BAm8cBsETmtlC%2Fjyx5SB%2FeRQow0jeco7w%2BwBzQFp5bkYw12n3sUt8M5lzs8gEnaHLeBaDdXcuSsmwtIQetEGrN9zOW1vKwrkz97mcIJeObr648dLvdR6u0zpE917TSIuRK%2BIWZFGd0U3R5flVzabytTwhfksGNCNPSAk1eTnNCweVwcHgeCPUL6NLDYKhqbA%2BrO40YWwtWY24nAPjPyu2JPWaajDVpJ2zWFW6x8yw0%2BSjxx0lQ5PbTxz0Mkwjc6UOzKmBi6pD3ysqy0xx1tnxSIfqu%2FSLFQP%2FjUibIU1MHTVNBLr3PQZT0FDKqEX5tBq5mAbYe7EglPTeip%2BbB%2BVxih5F%2BOpfUaDmxztvAp%2F9suCVArBM4XslogtzRbaZbMu%2F9pbTP6vHSvz9Iiw7js3gQgp5AyR2H5wXNhH3pSJrhpJsT7o2o6WLdhJW%2Fd%2Bej1SPBGNmKEaPN1ounMUiLMRG93oULeMtQpa7lZaqepqV84leK70eGId5zf2E%2B0faxb3kY9Wb8OuDBxP9UkPGjI44LFnHpWLmtNTaMWQKpSmqftpx%2B%2BtR%2BBiVmTsjCf9ofEBjqkASAxxQ4hh8%2FPhL89Qn1q1KtpI9wd5I4u28NycjmDzcNHNyKZ3%2Fneq%2FjAV5ekVmClphEvBOHT8WSZXSyxHpA1r4wHMoJ8rOB8nJc7Hlru5TTe8LI%2BWpRXVWC%2Fr2pHbgC8RavzUsFsS1f4vTLxr9mhj7flH%2BQMPTXnxDO5odsnIHKrODoxhBc%2BPz8%2Bd%2BvCgRqIwtmVvCDJQOe8cVXlnmDZXTkfoOfK&X-Amz-Signature=26d43711db3e4e0c22ea1123ac46c282960a1eddb8840101eb1d305d35605b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### MacPro 6,1

```javascript
[sbu@archlinux ~]$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute 
       valid_lft forever preferred_lft forever
2: enp11s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:3e:e1:c6:3d:f5 brd ff:ff:ff:ff:ff:ff
    inet <u>**192.168.55.113/24**</u> brd 192.168.55.255 scope global dynamic noprefixroute enp11s0
       valid_lft 3585sec preferred_lft 3585sec
    inet6 fe80::f9b0:f8d4:178c:c030/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: enp12s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 00:3e:e1:c6:3d:f4 brd ff:ff:ff:ff:ff:ff
```


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/31c92f79-6186-4986-b1ce-f41a1dda5fb5/IMG_1882.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMTG76Y%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCboxpuAfTUZsDzSkOg4fW9ncyTycFxUUr9s0M9XqsTUwIgRejebt8qPlGRBBryg7NvhuksSGcI4TOprirzAvMxH58q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKD5FrV8%2B0NgX9jP5SrcA%2BYFw7rZFTTuji9W4gCkdO8Srndksge%2BlUhC89wKobqLZGfNhbUCeGSGIP7P6pXKj1sqc3QbrVog0aStiQWz%2FBhm36fiuAqRuSgtj0acJ0JD2TfbJRLCi9tIUHfCwmlMgqsMSa1x8LUtUd5uh%2Bqr0R6i5bJzdnWFLGO4ooIk8icfRureXOz%2BRwKx%2B3%2FID%2FHgv1aDAGI%2BawqlPlVUbBbmidnIdQlkxWYExRuvIaoYA9fYOaEp%2BoR2ZHP5DDNBbOf2M7eS7G5bN6ICF%2BCJ8k3jKbcYgaY6neSX%2BJfVscprl1nBJkRYTDYnYdn0hhje19opfEMt7P0%2B%2FiE8z%2B5KamC0Iq%2FIgP1aLRDuj27rug1yml350e6pOmTo4fudLmP3Zhb0yTRJ6QMAubyTE8qFVPQEbMw6qg0k8HtVfe1YULHDue9bLaYJeG9P2zlNmFs9Us3IQ34GeB6%2FTbScOai%2Bt5f07qIk3RwgrnbSJRF037A1MN4ZSjmItVgrEllykfhxZQl4lpPipHRjsSGX3TF1NnBeH%2FqdGcJZtQpCECLkuNXxitYjNXU%2B%2BPWCYYYvjYOiDmAcVMwqT0eGKwTV%2FhDZ2lQVf%2B4sPBLuGd5HP6m%2FZMmWuJUZmOZ8AyZSjYb%2F0pnKMPnPh8QGOqUBmYPId2l%2Bj92NSL6f%2FarqbOFUtbehbVOt%2Fz5OM8gu85PdPnyEFkeNVk5YUBWIlO33o7EGPVgxHaFiifnF4gPzeUgF%2FmJeDFszrptc7%2BdcjKr6k6xwVutagesdV%2FBkkVhqN5wEf0JrU9cxla9Cfa94IaqxtKvodOAU%2FeRm%2FDeX%2FQ4hOq6R5gyJeXy2W5o6xCDhC7gKRmuE5bhRAjMO0VNitbN7oXVh&X-Amz-Signature=0ac25c9384b17971e628a189b8d1d59e44283ed2fc83a1f6914052b008fc9169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


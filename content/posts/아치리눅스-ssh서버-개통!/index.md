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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/31c92f79-6186-4986-b1ce-f41a1dda5fb5/IMG_1882.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FBZ4KGK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHRiHCXSpChN5aIgIgDutEtO1ntTKQ4YAt54d2aHDcxBAiEA1vJ4Q7ApFtCjFXbZhTxgTBg3HN4eUI5wmQeVW5D92Lsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCadDDReypRybDQypSrcAzKUh6DpfVx4PFto3JPmfBbu0BlEDrCqeP9WUZGtvgQgnfsUcJlB1pIAl6bPZ174kq4OZwUuFkhnUBfATMZihm9kxcNUhJjvEN5ZVNJlX1ja0jNzlXwFOr6lzPvyMJUJpYC%2BD11ncgM8e3GIl%2FH5llJDX6cCHXk0H96eciqMGzjo8HSGCvvz%2F3qxMSO8WU%2BKAHXOIoZXM22in8NBsdLxpZbS9GDVFWQYP4rCG3wLmiPvZEdiVPw09Vli%2FJheWXp%2FWcJhNZuXIbb1t%2BsQsLclfKNPwlrblSlcfSLysGcDe2FFBzOB42Vp3hM5aQsX57DMUSLaOWW%2FmcfAw3FffGbt3lOFRysiQdY9cBXTzcJQHo7o91qGA6xZEGjUxw%2BER%2FRRrm4VE4%2B2Rc2YqWDTyx8nHl0FQ6XTFsCEcOdkpfn9znQ6ux2Z7ND1qe%2F%2FxOLJRJ6M6WT9%2Be8JSMd%2FtROknUBBZLikh0TE96B0zKyxqzYKjbPCdzwfeO9jewEPjjfiQWJvrqqIQVQwcikWUO1a9JM7dAcE%2FvekL8sN7BKAS%2BuR5hwr4vS84VqZXEfujT9nan1WoEmPXiyIlrVcmiZClOVNuDDSSgixMyVGcF%2BTauM7SA4sf9BK2lKEu73xLRg0MJjQh8QGOqUBYGX6ltKOTwl1atHVOEzHoeZXYTtJxZdizjUwzqgxmzs5fQVoGrmXHnnX%2FTluWe7mqAc87wXoUg3TumqR0IVG2z%2FB2uz%2BYKvxSmuiqZ46UhCemiLuXEQ%2BKN3HM%2BYRQXl2m6H5zZNt4%2FvP%2FleROWsuZaeHBogwVtT7iPH9JM12vhbz1Tr7E4W5trrnfEH1zIarH2LLKdZwyOBA9Rn2qwWfcuq9Dn2P&X-Amz-Signature=312851b43c49d72d8f0c7dc2dc7e255c0663fc64060f3015f170d1a7f665cc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


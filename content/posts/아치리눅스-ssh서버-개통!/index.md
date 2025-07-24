---
title: "아치리눅스 ssh서버 개통!"
date: 2023-12-02T00:00:00.000Z
draft: false
tags: ["Arch"]
series: ["Let's Linux!"]
description: "Arch Linux에서 SSH 서버를 설정하고 최적화하는 방법을 설명하며, 필요한 패키지 설치 및 서비스 시작, IP 주소 확인 명령어를 포함합니다. MacMini와 MacPro 6,1의 네트워크 인터페이스 정보도 제공됩니다."
notion_id: "27d06338-45f7-4f68-ac5a-b93455e72ca9"
notion_url: "https://www.notion.so/ssh-27d0633845f74f68ac5ab93455e72ca9"
---

# 아치리눅스 ssh서버 개통!

> **Summary**
> Arch Linux에서 SSH 서버를 설정하고 최적화하는 방법을 설명하며, 필요한 패키지 설치 및 서비스 시작, IP 주소 확인 명령어를 포함합니다. MacMini와 MacPro 6,1의 네트워크 인터페이스 정보도 제공됩니다.

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/31c92f79-6186-4986-b1ce-f41a1dda5fb5/IMG_1882.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPWHZGKK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDSP6YtKpClvDTG8sXzS430bREIED6%2BiuQM%2FsEivs1gbAIgWn5wcn3AZKQQrOcYkpyPmPQeXl3VP0GECtSxg3bRzhQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDQJyLzrBF6UkWYXLyrcA0nZnE%2FsW1qzp5W78o23KG%2B3pwe5j3pUH7GgZRYMkQn59tppvq6dLHBMc6cw%2B%2FYb6TK%2BpcNocsRyEN5Bj2QeaiymPTcsyUJKti0gyDrLoSjEcfbmrNVAEixUCQPHurcqkWVhZWpsg7sk6VVCAZZS3rP8d9sQ8EE51pDYakPBx1wygCJF0qU%2F8XL%2FxVYxns4ggqH8SOea0owMzWF%2Fo0wxqE7T6DjQrQzorYYrxnx4dlrfZY%2BkfpzTSWQywex%2BYINossOfH8IL3CTi85Lc01OT17b8Db%2FS31wweD5qreGkjXr7BqNv0ZbpFu6WyKioXIu7MnN37iJhrV%2B%2BqU8j3tXoCfJKLBw5%2Bg8TrgIal0WI28YWA4myHsGDjHZJOf5j7ZHaZKy0vB7PUVlmmzTcJmnX9OG1zCja7lP3ZoMBtjm5%2BbwzxgxAghuew%2Bmv2UiL%2BRKnRWsYqM3qjLm1BCqkIhN6uH2BDHFHavdr775O60Fszl3lp5KAF2Ilpv7qXoi%2BjexWwVhldGkXHi6xtj4sPhMQtL7yDccYMD%2FsOPx1308CrePMObyuA1hkSw%2BjtMRUCuGZU8LNhkf99Qtibj%2Fv0uPsIuD71sm8vV%2BcEY%2BdgFVxyMCYUqaMjBCYEdvU%2FhjLMLCbiMQGOqUBHR24w1tsHQlPHPdfD10aAeS2XaslpWU5bFKTlIDgPcbGTtvSapZ16x5QSO%2FeOnN2n8H0BeQJKYLoA0kk17tMmlcBYQQY20lnlXj1EmlpJvUvXBDY1PAETjhD9l%2FEECLLwKE4hRYF15yA1avoKzw9zNFHIPMX5OOStGIAQSAaG6a5CSBClR3HSchGk5VKbDHLDO%2BA2ZI9WToAU%2FiJTZxLq5B5Zob1&X-Amz-Signature=93c30bb026079e2e24400f3d952bc2fb17b34c00a325c873d15d61f01a689bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


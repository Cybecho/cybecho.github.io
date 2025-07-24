---
title: "VirtualBox 네트워크 모드 정리 (NAT , NAT network , Bridge , HostOnly)"
date: 2025-02-25T04:20:00.000Z
draft: false
tags: ["Infra", "Docker"]
series: ["Infra & Network"]
description: "VirtualBox의 다양한 네트워크 모드인 NAT, NAT 네트워크, 브리지, 호스트 전용에 대한 정리와 설명이 포함되어 있습니다."
notion_id: "1a51bab9-e3f8-8034-91f6-f06f3247aaea"
notion_url: "https://www.notion.so/VirtualBox-NAT-NAT-network-Bridge-HostOnly-1a51bab9e3f8803491f6f06f3247aaea"
---

# VirtualBox 네트워크 모드 정리 (NAT , NAT network , Bridge , HostOnly)

> **Summary**
> VirtualBox의 다양한 네트워크 모드인 NAT, NAT 네트워크, 브리지, 호스트 전용에 대한 정리와 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b41708a6-4791-4f90-9660-53a0296c38e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IJL6ZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCiw02KUlJKJNqrym8ZeYv7%2FgGtkZIizQZKFmqfctO97QIhAPZ9Ul5RjtCW5nVV4n3Q5ODgKnkA53hAwlZd8ocz1GgLKv8DCCwQABoMNjM3NDIzMTgzODA1IgwTFpMX0dF%2Fli5KF4wq3AOfsAhDfIzZoZctpp0gdO9Ig3nm7X12c0gprzrzxNwwMIIACDtm%2Bab3VvvyQIzkCUO5bNrWvKJoKrWd%2Fwddp2f6ylBNi4FmQQmiMeHAidtCsGbBE%2F5%2B5HOI%2BgKbWv7zI2Wacu4DFTpcMpwKoVZoXluGO8GBPM13%2FU7%2F3Dr8lTR9%2F5fX7TAbhGf6fBmyH%2BL%2BqnMyNRUrRSnMWScj9gd7NDBZIxWWzPFWT3YRYZd73Wi%2BTX809xCANERx2JdnMmkk0NC%2B5Yhx7%2FdGx805vvDuKJLGiaFL3%2B0Q6%2FAMPw5NUCybSE1SnQPSyE13yfCTxmmYUiZ5yIBcLyBy%2BaxIenW%2BC8pB7mV8LRgr3%2B5N7eCVggHxL4FfL5zHReG1WBSYRFr7%2Fn%2B3u6a%2Bc1OXe1IfbIK37J5KhgomLz06YH7DWdLV3QCWuO9Y6RBFGtw4wifn%2BK1TkHb1DFFpAqlVqJzAQSXwaVYmLvWbLW8DbQkVlxpPBdyWgv34fp50DCX9nfDqwOPzdC1RaHCD06Q5jFbVx9QSncAZoOB5LY%2FCnnUklrx%2F4uJsvnonOhtEW3efR3Ow1UPHk7rYj%2B7XXVU%2F72WcW39UY0n6G9PzPorKDMJ4eJ06pbtGArbx5gD7ZLMo4TW1bDCDm4jEBjqkARe%2Bind%2FrYAljM3osXdlJ17Dv4HD94c0eCys1fDi0Eukd0ubmkM8EzO%2FTWEZAgRE3YX%2FvjyCW%2FWSOikFloZGCFsXZqrecz%2FJ7KRcf8AV3f9g6Aic8VrAN9VS6TtwZp2GXAUkaH1pnveA4S03usjiFovoirYLMifaNGB%2FIMZN%2F3EJ9wbTErm1GPvTXC1L3CpNANnN32LE9qQVrYUVZf4KiKK0X67S&X-Amz-Signature=fef6f923bfc4eddc94c84e8125bc0b11c4e4dc58ae4f1b207ed3916cc3d0155c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


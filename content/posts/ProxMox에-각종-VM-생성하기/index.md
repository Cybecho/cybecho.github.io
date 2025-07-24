---
title: "ProxMox에 각종 VM 생성하기"
date: 2024-06-15T16:27:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "ProxMox에서 다양한 가상 머신을 생성하는 방법에 대한 기초 정보와 링크를 제공하며, 헤놀로지, 데비안, 윈도우 서버, 윈도우 11, 안드로이드 x86 설치 방법과 원격 게이밍 환경 구성에 대한 자료를 포함하고 있습니다."
notion_id: "7e6d95af-bab5-49e8-b144-829daba7790b"
notion_url: "https://www.notion.so/ProxMox-VM-7e6d95afbab549e8b144829daba7790b"
---

# ProxMox에 각종 VM 생성하기

> **Summary**
> ProxMox에서 다양한 가상 머신을 생성하는 방법에 대한 기초 정보와 링크를 제공하며, 헤놀로지, 데비안, 윈도우 서버, 윈도우 11, 안드로이드 x86 설치 방법과 원격 게이밍 환경 구성에 대한 자료를 포함하고 있습니다.

---

# VM 생성 기초

[https://blog.ny64.kr/posts/creating-proxmox-vm/](https://blog.ny64.kr/posts/creating-proxmox-vm/)

# 헤놀로지

[https://svrforum.com/nas/931043](https://svrforum.com/nas/931043)

[https://betwe.tistory.com/entry/Proxmox-헤놀로지Xpenology-NAS-설치부터-볼륨-생성까지](https://betwe.tistory.com/entry/Proxmox-헤놀로지Xpenology-NAS-설치부터-볼륨-생성까지) ⭐

[https://velog.io/@kisuk623/Proxmox에-Xpenology-설치하기](https://velog.io/@kisuk623/Proxmox에-Xpenology-설치하기)

[https://blog.koder.page/proxmox-xpenology/](https://blog.koder.page/proxmox-xpenology/) ⭐⭐⭐

> 💡 **모델 설정 (난 DS918+ 로 함)**
> ---
>
> [https://svrforum.com/nas/1214548](https://svrforum.com/nas/1214548)
>
>

# 데비안

[https://www.youtube.com/watch?v=XEoO1FgIel4](https://www.youtube.com/watch?v=XEoO1FgIel4)

[https://www.youtube.com/watch?v=g1FXZIvVkq4&t=559s](https://www.youtube.com/watch?v=g1FXZIvVkq4&t=559s)

# 윈도우 서버

<details>
<summary>데스크탑 버전 이거 깔아야함…</summary>

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75532122-b853-45c6-a7fa-af7e2480c459/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623BZUXRY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCVVQ5JkvhBgeoQkRIY8eSaRMZWF3InVgtgdkeOgESEMQIhALg71gbuxzjqEU5oHA81NoZ9tCXo3opjkYsrB5CZNxQhKv8DCCwQABoMNjM3NDIzMTgzODA1IgzjlaOftZCCujOiCUwq3AOmbAhL7x%2B6juxJQQu1XscXvKsw3k%2FntPjT8cy77nSl4ViBN%2FRLMdiG6fO91dFw331f6jmboCkfXhgiVt35SvVmawewLjZJGlX%2FvjHY8EMz7%2F9chKudG6ToIhvg2s3Mt0bA7zsuQvuVzMri4SCp6Swg%2FHU8bQiLLxwoGqX4Yvi0OWJeFI8e3gnc3sFmHs%2BZNaGhSFC5CPCK67jUq7CqoPhUB8nRx1Vb1QtUVilpiWiORpG%2Bc6bKnYW659781%2Bsdu4RtEOnPkX7e7n2R1ITgcaA2htdt3x39p46LWnP0%2Fb0tV%2BxEKMPxaITdIMigSJBQQxCWDkedpWgHkZfTXMD1aNG%2Bw42QDv%2FvNPAMT%2BBvpnxU0ShIFCgxMw%2FDIFM4jWI8mbF7cpg9%2FypbbG0gc9gJdPIJolNwgUuaMkBFq3UVDoFizhenddcGuyHnzKVN%2FBVBQYDAfo0dBbNB5zpyq1cMrsG1gt4vH0FKU43se8AJ1tmkKga2IpjiAHNJK0UX794uoAzm6rrU9U5SqC6lWXGj%2BmdA6mApVN%2B3mv4htb%2FEL%2FOf4zxaAyCRcmmtSDuyV1lL4Mmzm4UKPRqqE5iyh46p3sznGM2nkpugKeUbQkIVNyGB%2F9kq5QC%2BKX8wXXxZGjC4m4jEBjqkAYyWB9r%2F3SGEQ3UVFuI2r19GQwc1CsUHpj%2FjsjP7NdfdqSGHyLFo2K1kUuIMvTVza4KxXe%2FC8NjZM32SyUN3HpPqjHz6IJp5MbMiS%2Bze5SNpTLuvL4mlsPJHrRCCgWhIMdSRTUtZnMNI5ARjbmSe4aHCORJ4GZj49pujlc2fR6cJqc0ROOvPmSPSBWGmje9u6HwhoXPi4G6B0KtK75kWPMkUtcAs&X-Amz-Signature=431289aa7aab8de039df1bc4d61b7a6f036d1b91a8e58bbb1c37f7c581b91bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>

[https://youtu.be/JrIDEH9jsPg?si=uYxLFXtKejlIksbP](https://youtu.be/JrIDEH9jsPg?si=uYxLFXtKejlIksbP)

[https://www.youtube.com/watch?v=5A6pHU7f9n0](https://www.youtube.com/watch?v=5A6pHU7f9n0) ⭐

[https://hasiworld.tistory.com/entry/Windows-Server-core에-GUI-설치-방법](https://hasiworld.tistory.com/entry/Windows-Server-core에-GUI-설치-방법) ([16 이후로 막힘](https://www.sysnet.pe.kr/2/0/12339))


# 윈도우 11

[https://www.youtube.com/watch?v=LsQyS6WPhB0](https://www.youtube.com/watch?v=LsQyS6WPhB0) ⭐⭐⭐

[https://velog.io/@kisuk623/Proxmox에-가상머신-windows11-설치하기](https://velog.io/@kisuk623/Proxmox에-가상머신-windows11-설치하기)
[https://blog.koder.page/proxmox-windows11-install/](https://blog.koder.page/proxmox-windows11-install/)

## Promox에 원격게이밍

- 윈도우10 올려서 파섹으로 게이밍 환경 구성
[https://www.youtube.com/watch?v=BoMlfk397h0&t=2595s](https://www.youtube.com/watch?v=BoMlfk397h0&t=2595s)

# 안드로이드 x86

[https://benheater.com/installing-android-x86-on-proxmox-and-proxying-to-burpsuite/](https://benheater.com/installing-android-x86-on-proxmox-and-proxying-to-burpsuite/)

[https://simplificandoredes.com/en/installing-android-on-virtualbox/](https://simplificandoredes.com/en/installing-android-on-virtualbox/)

# LLAMA


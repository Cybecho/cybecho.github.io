---
title: "ProxMox에 각종 VM 생성하기"
date: 2024-06-15T16:27:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "ProxMox에서 다양한 가상 머신을 생성하는 방법에 대한 기초 정보를 제공하며, 헤놀로지, 데비안, 윈도우 서버, 윈도우 11, 안드로이드 x86 등 여러 운영 체제 설치에 대한 링크와 자료를 포함하고 있습니다. 또한, 원격 게이밍 환경 구성에 대한 정보도 다루고 있습니다."
notion_id: "7e6d95af-bab5-49e8-b144-829daba7790b"
notion_url: "https://www.notion.so/ProxMox-VM-7e6d95afbab549e8b144829daba7790b"
---

# ProxMox에 각종 VM 생성하기

> **Summary**
> ProxMox에서 다양한 가상 머신을 생성하는 방법에 대한 기초 정보를 제공하며, 헤놀로지, 데비안, 윈도우 서버, 윈도우 11, 안드로이드 x86 등 여러 운영 체제 설치에 대한 링크와 자료를 포함하고 있습니다. 또한, 원격 게이밍 환경 구성에 대한 정보도 다루고 있습니다.

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75532122-b853-45c6-a7fa-af7e2480c459/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35Y42CW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICkkMmkBLmNMq%2BTNtvo2Z9HWpZhdM6OkwtO8ELe8ILGfAiEAuo6V1oo3geNhLvcFJzfH0fNwLkAHxN3jKVio0NptTmMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMOYmVSsHtYbGFuBDircA1oV9Ihg7GKxnEa7pm1tuXs0GsvRRemGkI5wJRclPxRfT7OsDLluXGJTNwGDxyKwwhyfi5Pvepb3Ut0NO%2F7Og9L8puJf88RUYXIun65XGJvhNx5UH%2BGEmBjCkgcr4ObZ4Y6pDyQuU4Uqbhfp%2BXpShz0eBEzMX1rnn4NqmgRpTzjVFnpIdN8vUvVlbTJWepNjpDVycHUlpRVaFgxNN57SSRo8cJD7VImDCga4b2Pmv8zXl8W8ahsvgJ9idfPDRJ9RpE32DFjJfv2xCHpUC5EdCNfxANIskp5Nlqxz4bw%2BUT8Tt4S%2FdBke0FNjgSI%2FY6t1M2Vb93pVM5whai8eK1VJboMnQsbrf7ddwynHNJsI7Ir5Zb3uBTj%2FyzA%2BljY5LcXssLTHmJdVoIhUsDl41d4%2FKjhe5Gam9AeJhdvf95hztl4cYKY%2BaXKRx6hHMbNyGcDFdZ1PWfRloFvaHTmLiKsl09yiddLX0HA%2FzTpbe4XdTc09y7k7aybmACOeAyLnA%2FHScuNzGVrNfJ8Rjku%2F7v%2BH7V0mvMeqbxGanryEbLtf%2BLChByD64ZJTyROKrHks4jGk3Zx4ydBINbxcqPR1UkADGttTPP7CODqMUgWIIgjRIvlibUIkPuiDgBx7IL47MJ%2F2h8QGOqUBxFnNWepB52w3oGpK%2ByQFMw5zLHKaCT0hKtWzF%2FtUkr%2FrOg8MjT%2FkV%2BfliQTxEXzX6ZwjLuTDCYoWP0W60rNrQ%2FK1vAoLDHofWutrMfpq3jIozIB%2Bs8JMigqkhsEC6557EOMu7MLmDB4Rs%2FTJe8w0VHscdyxeQ2%2B0JhnIz70qfarMfyUXBmA0b9IXvnL8XqLWgo24PhGndnBM3MbvpXWenhgnyq40&X-Amz-Signature=3296c82e3496df823080faf4dc7f5efe054ae03652d45d21f4f802d58c132a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


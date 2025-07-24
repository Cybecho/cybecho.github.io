---
title: "라즈베리파이를 NAS로 써봅시다"
date: 2024-04-18T14:24:00.000Z
draft: false
tags: ["ubuntu", "RaspberryPI"]
series: ["Let's Homelab!"]
description: "라즈베리파이를 NAS로 구축하는 방법에 대한 다양한 자료와 시스템 옵션을 소개합니다. OpenMediaVault, NextCloudPi, DietPi, Raspbian + Samba, RockStor 등의 솔루션을 고려할 수 있으며, 각 시스템의 장단점을 설명합니다. 또한, Wireguard와 Transmission을 이용한 VPN 설정 방법도 제안합니다."
notion_id: "c14b3bdc-7760-48b5-9441-9ab34d05cbc5"
notion_url: "https://www.notion.so/NAS-c14b3bdc776048b594419ab34d05cbc5"
---

# 라즈베리파이를 NAS로 써봅시다

> **Summary**
> 라즈베리파이를 NAS로 구축하는 방법에 대한 다양한 자료와 시스템 옵션을 소개합니다. OpenMediaVault, NextCloudPi, DietPi, Raspbian + Samba, RockStor 등의 솔루션을 고려할 수 있으며, 각 시스템의 장단점을 설명합니다. 또한, Wireguard와 Transmission을 이용한 VPN 설정 방법도 제안합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a54a52a8-5844-47c6-922b-5a3a458fd9a2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RG6ZIJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASVRsk1jlST2fbh4P27PnpW2aq7EwYloE3RXNXRHnmaAiEA8JG2P9Kf183Kx%2Fz3hYwVWJQ9xAqNAlbFArq460ifRdcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFA2GvPObNmP4Y0MnSrcA1gi%2BOnLvhDttNFrhCmitiwADTD0B4boVEC2UNhmdxJwvAXwP8bPcgRKj9W3pcyjSj%2BeAVtklD1WowFddSwDfa97OsK5NJyE29xS6ap6%2FzdvumPDvqyhL71Otk2Gj8zEheLI0LsN8io5FDzAH1Gs5NPK0MSIdqewzZnJk8J1zzPQtg6WbRbegygEk1wY0pMnZWkS7p7bgYcUAqcDxtuXPT2IPrirA4CL6LohR7FnzAi1tu1%2BhH67jCnlwxZgA82yKrXwLhpr6IYvbD04nXdL95WOw3MCNDi5Y8VY%2BW%2BaBFNI3e1fjFXnaNrOEReLGJAtmqZLK4QeX2kC8LJ49V7jW0CgGxKG%2BmylwCMhzYBkYLYIiLx1Uwtspygt9qJBMhwn%2BQKsYYK8WvUBEyQtzUbxECem8pAeMgW1NilpigLMbC9W16fdzxWDvDYbiXQCE4godaRNYd02mIZK%2BUPktMXnmNpyKwxkcN1g1iV1S84nT2C0Rz%2Fu1t3Ai0q7aAJPIBXtpP%2FlydV3UZb6MZJ1vG%2B6nnpruQVGR4dBUAIBMHKitySc8XNL7l7HI80iEO6xCXdehmgt4i2j%2FVWDGr2LzgVPr%2F72038emt4s948N00drAQwT6egBm%2F5XHMnJ1XewMIrPh8QGOqUBbvVvsJfZWTbByvCMXni27Jg1b1ISQ8cDz0J6FfR6FoSq5m%2Brgl%2FWEi5AFIWJUZ3s3%2F7gzIuA%2BP68gfyWzfTqRqdUpePjbP%2BbaVyNMiecCgMvjiWkw2k6WPcjTX2t%2F%2B4G1J18O6Bflwv%2Bq1cBjMGWdMrynHBGnDgZOFFyryVkk7hXiNDanE5W4m1PTUc87uALKADtQDKMWaHFMoCEC3l%2BNBsbxpgO&X-Amz-Signature=06f10fe531a5a5e6f8c5357f79f5d6c2cc734f9c692940e0e72b286c112a4d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=l30sADfDiM8)

🎥 [동영상 보기](https://www.youtube.com/watch?v=gyOHTZvhnxY)

🔗 [https://mycodings.fly.dev/blog/2022-07-23-raspberry-pi-nas-tutorial](https://mycodings.fly.dev/blog/2022-07-23-raspberry-pi-nas-tutorial)

🔗 [https://www.raspberrypi.com/tutorials/nas-box-raspberry-pi-tutorial/](https://www.raspberrypi.com/tutorials/nas-box-raspberry-pi-tutorial/)

🔗 [https://gigglehd.com/gg/hard/6950211](https://gigglehd.com/gg/hard/6950211)

🔗 [https://forums.raspberrypi.com/viewtopic.php?t=244224#p1541272](https://forums.raspberrypi.com/viewtopic.php?t=244224#p1541272)

🔗 [https://www.jeffgeerling.com/blog/2021/wiretrustee-sata-pi-board-true-sata-nas](https://www.jeffgeerling.com/blog/2021/wiretrustee-sata-pi-board-true-sata-nas)

🔗 [https://www.clien.net/service/board/cm_nas/17774824](https://www.clien.net/service/board/cm_nas/17774824)

# HDD

🔗 [https://www.youtube.com/watch?v=8jdNf4sYQkQ](https://www.youtube.com/watch?v=8jdNf4sYQkQ)

🔗 [https://ko.aliexpress.com/item/4000059200336.html?spm=a2g0o.productlist.main.19.54b2Z8jPZ8jPDY&algo_pvid=d4cf5d66-f87a-4547-93c8-2c828539883a&algo_exp_id=d4cf5d66-f87a-4547-93c8-2c828539883a-9&pdp_npi=4%40dis%21KRW%2140890%2136393%21%21%2128.55%2125.41%21%402102f6cb17137091143828191edc9e%2110000000140320928%21sea%21KR%214285360891%21&curPageLogUid=yvHBB0U6bJ6W&utparam-url=scene%3Asearch%7Cquery_from%3A](https://ko.aliexpress.com/item/4000059200336.html?spm=a2g0o.productlist.main.19.54b2Z8jPZ8jPDY&algo_pvid=d4cf5d66-f87a-4547-93c8-2c828539883a&algo_exp_id=d4cf5d66-f87a-4547-93c8-2c828539883a-9&pdp_npi=4%40dis%21KRW%2140890%2136393%21%21%2128.55%2125.41%21%402102f6cb17137091143828191edc9e%2110000000140320928%21sea%21KR%214285360891%21&curPageLogUid=yvHBB0U6bJ6W&utparam-url=scene%3Asearch%7Cquery_from%3A)

🔗 [https://ko.aliexpress.com/item/4000669171144.html?srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=6000089041751&aff_fcid=4776208909f5421eba9d7b97bd6d4570-1713709197326-01821-_okfrpdo&tt=MG&aff_fsk=_okfrpdo&aff_platform=default&sk=_okfrpdo&aff_trace_key=4776208909f5421eba9d7b97bd6d4570-1713709197326-01821-_okfrpdo&shareId=6000089041751&businessType=ProductDetail&platform=AE&terminal_id=e6ea78ffba4649bc8887243ab05ff0e6&afSmartRedirect=y](https://ko.aliexpress.com/item/4000669171144.html?srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=6000089041751&aff_fcid=4776208909f5421eba9d7b97bd6d4570-1713709197326-01821-_okfrpdo&tt=MG&aff_fsk=_okfrpdo&aff_platform=default&sk=_okfrpdo&aff_trace_key=4776208909f5421eba9d7b97bd6d4570-1713709197326-01821-_okfrpdo&shareId=6000089041751&businessType=ProductDetail&platform=AE&terminal_id=e6ea78ffba4649bc8887243ab05ff0e6&afSmartRedirect=y)

🔗 [https://ko.aliexpress.com/item/4000051291822.html?spm=a2g0o.productlist.main.29.54b2Z8jPZ8jPDY&algo_pvid=d4cf5d66-f87a-4547-93c8-2c828539883a&algo_exp_id=d4cf5d66-f87a-4547-93c8-2c828539883a-14&pdp_npi=4%40dis%21KRW%2143812%2139429%21%21%2130.59%2127.53%21%402102f6cb17137091143828191edc9e%2112000020501429750%21sea%21KR%214285360891%21&curPageLogUid=HgHnboOVRN6V&utparam-url=scene%3Asearch%7Cquery_from%3A](https://ko.aliexpress.com/item/4000051291822.html?spm=a2g0o.productlist.main.29.54b2Z8jPZ8jPDY&algo_pvid=d4cf5d66-f87a-4547-93c8-2c828539883a&algo_exp_id=d4cf5d66-f87a-4547-93c8-2c828539883a-14&pdp_npi=4%40dis%21KRW%2143812%2139429%21%21%2130.59%2127.53%21%402102f6cb17137091143828191edc9e%2112000020501429750%21sea%21KR%214285360891%21&curPageLogUid=HgHnboOVRN6V&utparam-url=scene%3Asearch%7Cquery_from%3A)

# 3D print

🔗 [https://cults3d.com/en/3d-model/gadget/raspberry-pi-3-5-hdd-enclosure-1-2-or-3-drives](https://cults3d.com/en/3d-model/gadget/raspberry-pi-3-5-hdd-enclosure-1-2-or-3-drives)

# openmediavault

🔗 [https://cpro95.tistory.com/548](https://cpro95.tistory.com/548)

라즈베리파이 4B 모델로 NAS를 구축할 때 OpenMediaVault 외에도 다음과 같은 시스템을 고려해볼 수 있습니다:

1. NextCloudPi
- 오픈소스 클라우드 스토리지 플랫폼인 NextCloud를 라즈베리파이에 최적화한 버전입니다.
- 사용자 친화적인 웹 인터페이스를 제공하며, 파일 공유, 동기화, 협업 기능 등을 지원합니다.
- 모바일 앱과 데스크톱 클라이언트를 통해 다양한 기기에서 접근 가능합니다.
1. DietPi
- 라즈베리파이를 위한 경량화된 Debian 기반 운영체제입니다.
- Samba, FTP, NFS 등의 프로토콜을 지원하여 NAS 구축에 용이합니다.
- 사용자 친화적인 설정 메뉴를 통해 다양한 소프트웨어를 쉽게 설치하고 관리할 수 있습니다.
1. Raspbian + Samba
- 라즈베리파이의 공식 운영체제인 Raspbian에 Samba를 설치하여 NAS를 구축하는 방법입니다.
- Samba는 Windows 환경과의 호환성이 뛰어나 다양한 기기에서 접근이 용이합니다.
- 사용자가 직접 설정해야 하는 부분이 많아 숙련된 사용자에게 적합합니다.
1. RockStor
- CentOS 기반의 오픈소스 NAS 솔루션으로, BTRFS 파일 시스템을 사용합니다.
- 스냅샷, RAID, 압축, 중복제거 등의 고급 기능을 제공합니다.
- 웹 기반 관리 인터페이스를 통해 스토리지 풀, 공유 폴더 등을 관리할 수 있습니다.
각 시스템마다 장단점이 있으므로, 사용 목적과 숙련도에 따라 적합한 솔루션을 선택하는 것이 좋습니다. 사용 편의성과 다양한 기능을 원한다면 NextCloudPi나 DietPi를, 높은 호환성이 필요하다면 Raspbian + Samba를, 고급 기능과 안정성을 중시한다면 RockStor를 고려해볼 수 있겠습니다.

```latex
홀로 사용용이지만 Nextcloud, Wordpress 정도 사용하시면 RPI로는 메모리/CPU에서 좀 부족한 느낌이 듭니다.
RPI에 설정하신것과 거의 동일하게 오래된 PC나 노트북으로 이전하시면 더 쾌적한 사용 가능하십니다.
스토리지가 12TB 정도면 Plex나 Jellyfin으로 미디어 서버 구성도 좋을 것 같습니다.

트랜스미션 사용하신다면 가급적으로 VPN 사용하시는게 좋을것도 같습니다.
오라클이나 외부 클라우드 서비스를 외국 리전으로 가입하셔서 Wireguard 서버 설치하시고 트랜스미션 네트워크를 Wireguard 네트워크를 사용하게 구성하시면 트랜스미션 콘테이너만 외국 클라우드 서버의 네트워크로 터널링되어 VPN 사용과 동일한 효과를 얻을 수 있습니다.

1. 외국 리전 클라우드 서버에 Wireguard 서버 설치
2. 집 서버 도커에 Wireguard 클라이트 모드로 설치 (네트워크는 독립적으로 구성)
3. 트랜스미션의 네트워크 모드를 컨테이너로 변경하고 네트워크를 Wireguard의 네트워크로 설정

집 서버에 wiregurd(클라이언트)와 Transmissiond을 한번에 설치하는 docker compose을 첨부합니다.
포테이너의 Stack에서 사용하심 됩니다.

services:
wireguard:
image: linuxserver/wireguard:latest
cap_add:
- NET_ADMIN
- SYS_MODULE
sysctls:
- net.ipv6.conf.all.disable_ipv6=0
- net.ipv4.conf.all.src_valid_mark=1
environment:
- PUID=1000
- PGID=100
- TZ=Asia/Seoul
ports:
- "9091:9091/tcp"
volumes:
- /usr/config/wireguard/wg0.conf:/config/wg0.conf => 설정 필요
- /lib/modules:/lib/modules
labels:
com.centurylinklabs.watchtower.enable: "false" => Watchtower 사용 안하신다면 삭제
restart: always

transmission:
image: linuxserver/transmission:latest
network_mode: "service:wireguard"
depends_on:
- wireguard
environment:
- PUID=65534
- PGID=100
- TZ=Asia/Seoul
- TRANSMISSION_WEB_HOME=/combustion-release/
volumes:
- /usr/config/transmission:/config ==> 설정 필요
- /srv/dev-disk-by-uuid-aef039f0-89ec-4e02-933a-1ed0e59c3ac1/media/transmission/downloads:/downloads ==> 설정 필요
- /srv/dev-disk-by-uuid-aef039f0-89ec-4e02-933a-1ed0e59c3ac1/media/transmission/watch:/watch ==> 설정 필요
labels:
com.centurylinklabs.watchtower.enable: "false" => Watchtower 사용 안하신다면 삭제
restart: always
```

---


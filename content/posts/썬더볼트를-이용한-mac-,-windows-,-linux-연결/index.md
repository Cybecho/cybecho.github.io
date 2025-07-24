---
title: "썬더볼트를 이용한 mac , windows , linux 연결"
date: 2025-02-10T10:44:00.000Z
draft: false
tags: ["MAC", "WINDOWS", "ubuntu"]
series: ["Let's Homelab!", "원격 라이프!"]
description: "썬더볼트를 이용해 Mac, Windows, Linux 간의 연결 방법을 설명합니다. Windows와 macOS 간의 직접 화면 공유는 불가능하지만, Thunderbolt 케이블로 연결 후 원격 데스크톱 소프트웨어를 사용하여 화면을 공유할 수 있습니다. Linux와 macOS는 Thunderbolt 네트워킹으로 직접 연결할 수 있으며, 네트워크 설정을 통해 파일 전송 및 원격 제어가 가능합니다."
notion_id: "1961bab9-e3f8-8039-bba8-ca70524471e9"
notion_url: "https://www.notion.so/mac-windows-linux-1961bab9e3f88039bba8ca70524471e9"
---

# 썬더볼트를 이용한 mac , windows , linux 연결

> **Summary**
> 썬더볼트를 이용해 Mac, Windows, Linux 간의 연결 방법을 설명합니다. Windows와 macOS 간의 직접 화면 공유는 불가능하지만, Thunderbolt 케이블로 연결 후 원격 데스크톱 소프트웨어를 사용하여 화면을 공유할 수 있습니다. Linux와 macOS는 Thunderbolt 네트워킹으로 직접 연결할 수 있으며, 네트워크 설정을 통해 파일 전송 및 원격 제어가 가능합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/662ac2da-9af5-417d-81a8-a8e840d1e5cb/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOES6OS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCqZE37Kds%2F3ojAsXxmQ%2BV7zO0bV%2BxQeFV%2BEObHBScllAIhALvpG1dDHK6whcMvLxanEJvB%2B4bgRpkTg%2BVFJOeLbzoMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzZlUvX2%2FcT2dLRqhEq3AMQtE1dHRTSr3BSZW7dUPX%2FT48UzetumEUJDNC8R7qLKi8%2FfqNCRPDf%2BT%2Byl9hkSHTMl9wli3cUm2C1eIWNBbmbsL38wyf3x9Qyz67J2DUuJEewGutsiYfnGxs%2FUmX7F%2BSwvjB1YP1qejyz8jDItdTed0gQxKxjcqEfgQimKMYAjkUBW%2Fu7gDPB44kHARVwUzkzbP%2FCswku3gSFBBx%2BQtFEX8mxaIBvyQ4TQu890M7ybox3%2BhiWT0rdWn1Nj8kkTDplmF9WDSn2KCTfpLwFFpyNie3iydtBUlaK22Rp7anhugFhS6AC02rXbnCLY%2Fu0k2T6iAPSR7EA28GLqbodzPh6NumuddEtSIitUA69fvyTvD3IrRU9xLceVwIUdONb4NWlR3%2B%2B17XrtQ4XSuq9EmgvVncQX22z53qWiR%2BCFY%2BhYItXH6yab0OCNysPYAp3%2FzbczZtxFKTOcjgR0EqaBHlOmWS2zWGnadEaLhi1Hvx1NXQ9Ks8%2FAMsnPmSmMsMgXU7GMMCgRcFaggCa4MKrb1Uc2u3y7Dh2W6VkkLnzIiFfEUnUSolt%2BnEbp1LuDa3wfSoQwOQjyd5QuBBzAmD51qLAr3tFdy0uNX7sa0LdPwTvtUk5lNYNxjw6brPElTDazofEBjqkAXbbqQi6DFrJTsOegnu%2BJRlArmHhr%2FrhgBcD%2FIvCoxI9er0qRdl8mj7w9zeRHzyPvJQeeVhg6J2QwwUo2ed9QturJktzXj%2FaSM41Lwlmddi%2Bqc1lZ%2BqtOhMIIsbejcLfMOEiAdqhv%2F9sEXQT%2FqLjg521lVCNm0YnSqUds8oVLel40NA5b%2F5QYyaow5NJKJQHYW7Kfqbu%2B7ZEIsyRfYeUsQ%2FvD7sj&X-Amz-Signature=dd4b876c1f40b3b3ea36709ffb08f531f9ec234b015ba320eb988d81212e718d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Windows ↔ Windows

[https://www.intel.co.kr/content/www/kr/ko/download/822291/thunderbolt-share.html](https://www.intel.co.kr/content/www/kr/ko/download/822291/thunderbolt-share.html)

[https://www.intel.co.kr/content/www/kr/ko/newsroom/news/intel-unlocks-ultra-fast-pc-to-pc-with-thunderbolt-share.html](https://www.intel.co.kr/content/www/kr/ko/newsroom/news/intel-unlocks-ultra-fast-pc-to-pc-with-thunderbolt-share.html)

# macOS ↔ macOS

[https://support.apple.com/ko-kr/guide/mac-help/mchld53dd2f5/mac](https://support.apple.com/ko-kr/guide/mac-help/mchld53dd2f5/mac)

# Windows ↔ macOS

현재 인텔의 썬더볼트 쉐어 기능은 Windows 전용이므로, Mac과 Windows 간 썬더볼트를 통한 직접 화면 공유는 공식적으로 불가능합니다. 대신 두 컴퓨터를 Thunderbolt 케이블로 연결하고 네트워크 인터페이스(Mac의 Thunderbolt Bridge와 Windows의 Thunderbolt 네트워킹)를 구성한 후, VNC, TeamViewer, AnyDesk 등의 원격 데스크톱 소프트웨어로 화면을 공유할 수 있습니다.

설정 방법은 다음과 같습니다:

1. **Thunderbolt 네트워크 연결 설정**
1. **원격 데스크톱/화면 공유 소프트웨어 사용**
이 방법으로 Thunderbolt의 고속 데이터 전송을 활용할 수 있지만, 네트워크 설정과 추가 소프트웨어 설치가 필요합니다.

# Linux ↔ macOS

[https://askubuntu.com/questions/874587/connect-mac-to-ubuntu-with-usb-to-usb-cable](https://askubuntu.com/questions/874587/connect-mac-to-ubuntu-with-usb-to-usb-cable)

Mac과 Ubuntu Linux 데스크탑(Thunderbolt 카드 장착)은 Thunderbolt 네트워킹으로 직접 연결할 수 있습니다. 두 시스템이 모두 Thunderbolt 네트워크 인터페이스를 지원하면, 케이블 연결 시 자동으로 "Thunderbolt Bridge" 또는 새로운 네트워크 인터페이스가 생성됩니다.

설정 순서는 다음과 같습니다:

1. 두 컴퓨터를 Thunderbolt 케이블로 연결합니다.
1. 네트워크를 설정합니다.
1. 연결이 완료되면 두 시스템이 같은 네트워크에 있게 되어, SCP, NFS, Samba, VNC 등의 도구로 파일 전송, 원격 제어, 화면 공유가 가능합니다.
이 방법으로 Thunderbolt의 고속 데이터 전송을 활용하여 Mac과 Ubuntu Linux 간 직접 네트워크를 구성할 수 있습니다. 단, Ubuntu에서 Thunderbolt 드라이버와 보안 설정이 올바르게 구성되어 있어야 합니다.


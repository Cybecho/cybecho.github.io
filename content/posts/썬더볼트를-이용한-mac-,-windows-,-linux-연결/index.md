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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/662ac2da-9af5-417d-81a8-a8e840d1e5cb/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFX56N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDE%2FdDV9f2%2F4VShXvRB9sL5%2FTDdSuk%2BGuqIAemx4v%2BhqQIhALYduaiVAPhnKvqwx%2F8ARSat%2FnWHPRCGvzxdEtRZ9t%2B%2BKv8DCCkQABoMNjM3NDIzMTgzODA1IgxL9%2B9qBGg9fr00HCQq3AMLhVqUM%2B4H8ykVbqCfGykgK5lnU0w3%2Bto%2F66SqI7aLpUh7akVJp3EBIgd1YoA1dcZ6J7ikn%2BNJzn1sTpt419CzjgmJ1HJ55Qv2PWCK7NMudMfwHKbAD5I59qGDhVh1%2FpQMhdsY8a%2F1kRwQVgRmXCXnGtBV%2BZ%2FJlIiVEV4MELwQPx4YVmazI8eBuamZ5INS1WXIbMA7klhVqmqTEhDNzecUVyk56oIieKXbim98TVKVSPZ8QCA9qW2knGD6fNwearwdzGpOJX1UShCAnRccNpdYh8R5EclrLeMevL3QuxNqm6bRf1ogeLfWE%2FSuc3eskquQEk4Pp3hCIW6w4XrGBqGnWYuSG0DjRUNa60EwTfg88irygczEldNXToDlj2OdAw3Wdx6wD71KL1vX6ZgjQ6mXoccdLv%2F58ZiM3CEw107JtzbmKqoaLAtbg4q2Wv3Wrs9aQQIvfmMWE6Nn1hi6MM7rNGEskeBWkPW6pp4nH8cnx8KAw83Weknp7r0VeUs7IREgVNvXnETRzFGagAHrUAdPK1ZtUX8vL0aBhqGqtrz2LmIyaezMUPQjX0UWTb0su3uyloXcpkZcvCJ0cAp1I2tOjv67gaa8296ipOTm1pw%2BDj6t1%2Bsuw1ja94H2xjDJz4fEBjqkAbEz%2FY9CzMa6R%2F5SrR43rQ9Dsg%2Ft%2FfldGSZokSWJNSuhsbUNcL%2FH2Hm34AC5lRn5z0t%2Ff9I325AsIAXay5EV1NJBxC1CT%2BG%2B0a3hyA2gM9atxN4Y3l9ZS4dMDa%2BRf0JArelzGDlsF4cqAx8SK10VMK4PMGKpJBA58IAscEOWT70g%2B92upTKM8rPwrMt646drmRbl8sbo1BrOU0g51FcZ1SiFBvk9&X-Amz-Signature=8915add300234e6bee25695d7b89faf69ef5dbf2fa5583932793a9de4c37f78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


---
title: "Linux + VNC + JumpDesktop 를 이용한 리눅스 원격 환경 구성"
date: 2024-12-15T08:49:00.000Z
draft: false
tags: ["ubuntu", "popOS"]
series: ["Let's Linux!"]
description: "Pop!_OS에서 VNC 서버를 설정하고 Jump Desktop 클라이언트를 통해 원격 접속하는 방법을 설명합니다. Vino를 설치하고 Xorg 세션을 활성화한 후, dconf를 사용해 Vino를 설정하고 VNC 비밀번호를 설정합니다. 방화벽 설정, IP 주소 확인, Jump Desktop에서의 연결 방법도 포함되어 있으며, Vino 서버를 자동 시작하도록 설정하는 방법도 안내합니다."
notion_id: "15d1bab9-e3f8-808f-ab6a-db70849ae23c"
notion_url: "https://www.notion.so/Linux-VNC-JumpDesktop-15d1bab9e3f8808fab6adb70849ae23c"
---

# Linux + VNC + JumpDesktop 를 이용한 리눅스 원격 환경 구성

> **Summary**
> Pop!_OS에서 VNC 서버를 설정하고 Jump Desktop 클라이언트를 통해 원격 접속하는 방법을 설명합니다. Vino를 설치하고 Xorg 세션을 활성화한 후, dconf를 사용해 Vino를 설정하고 VNC 비밀번호를 설정합니다. 방화벽 설정, IP 주소 확인, Jump Desktop에서의 연결 방법도 포함되어 있으며, Vino 서버를 자동 시작하도록 설정하는 방법도 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/31b94c7e-4acd-453a-8360-0406fa4c7def/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7UVDB7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDs0Zsnx7pb5tCWqwQaW5Lzjh1AcL0S6v89jGhyG6Z2qAiEA5%2FRVvxkJwliqV8V2lQqqpovmQpRAkiz7vdsTvlMyJuMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIwbVUN6DJLX0z4B%2FCrcAxmJATgALoMtny5zhE0Zx7ezp7dTXQrC1%2BjpDVtCbvua7ofz45%2FxqV5%2FqjuWCCnB%2B0Cwz8EurkvXL%2FewrPIcaw4m0YAzc47JqY27rmGVvt7pjyNjK%2BsDk03GDO5L0%2FfGCVryFC0jOtz5XQCZgYyjfLxw9wFStxso3DvI47z9%2Bmo%2B08JhiquPnQ3%2FxLvGBmJ%2FlF5Xr8HK99O4BRrGAdkwpIpV4NccWiXOLc%2BC9TGp2eRDz04JQrDCUO4HA%2FSoi%2BewKkQqK4XbCwdehpsx6XdiaJ08Cb4GAjzhXTC4NMGNkSicDjC%2Boo5mBdRurpIhj9gicVTme2hkX8dusAWQ3XkW6FHNXzUuVOD7GJR7FpntVdSU0JyZ0xy2pKmx5SF3JEu3P%2FQLRT%2FQY5izG%2FH0eInavtwixOeOSBAycx%2Fw4wZJ8RCUpHFhpCPAqW1hO61jk9EyyFCb3mBxkBK7xdBvHGvLCgzX9byebPsY93EGaVAiYan2uuwtNJ900BtsMZnd5Ia8QRG6bUboOgSUmU315yJjZAM%2F6AJAtxTHhRJ4UXLrZz%2B5qy%2FFjaH8v7ClyzvKXd0WG%2B%2BzZ%2FYQh4dVL2CjC1Yv6GNyXDlPNwxMKVxC%2FkiW3NQ9gPhOAMmaZQ9%2BXe3UMI%2FQh8QGOqUBSufDtRUGwhOm6P4BPgwmYLDmi1UnrvASsgGK9%2Bs49jUhmyvegr4eYF96st%2B8RhvMug%2BDvDp3dzw4X%2FIXAMn7XlB6Lmy%2FCCn%2FGtpbdqio8KQlCnz2GygSkmLykQ5c2PtZlDXwiKRICGsWvw%2FE658PW7Nn25tvB2j0%2FSFgZHiUTbwOGWDTehNZBql5pBNw4nc0DvrK61BybYQUk9k7q9ubMDIj01fq&X-Amz-Signature=c450bdfbf0ffbec9351c085527a1003ad13e4d1bab4407e653192cfff9dc6282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Pop!_OS에서 VNC 서버 설정 및 Jump Desktop으로 연결하기

이 튜토리얼은 **Pop!_OS**에서 기본 VNC 서버를 설정하고 **Jump Desktop** 클라이언트를 사용하여 원격으로 접속하는 방법을 설명합니다. GNOME 환경에 맞춰 작성되었으며, `Vino`를 VNC 서버로 사용합니다.

---

## 1. **Vino 설치 및 활성화**

Vino는 GNOME 환경에서 제공하는 기본 원격 데스크톱 서버입니다. 다음 단계를 통해 설치하고 활성화합니다:

### **1.1 Vino 설치**

터미널을 열고 다음 명령어를 입력하여 Vino를 설치합니다:

```shell
sudo apt update
sudo apt install vino

```

---

### **1.2 Xorg 세션 확인**

Vino는 Wayland 세션에서는 작동하지 않습니다. Xorg 세션으로 전환한 후 Vino를 설정해야 합니다:

1. **세션 확인**:
1. **Xorg 세션 활성화**:
1. **Wayland 비활성화** (선택 사항):
만약 GNOME on Xorg 옵션이 보이지 않는다면, 다음 설정을 통해 강제로 Wayland를 비활성화할 수 있습니다:
---

### **1.3 Vino 설정**

Vino는 GUI 설정이 기본적으로 지원되지 않으므로 `dconf`를 사용해 설정합니다:

1. **dconf-editor 설치**
1. **VNC 관련 설정 변경**
1. **GNOME 화면 공유 설정 (대안)**:
GUI를 사용해 화면 공유를 설정할 수도 있습니다:
1. **VNC 비밀번호 설정** (CLI):
Vino의 VNC 접속 비밀번호를 설정하려면 다음 명령어를 사용합니다:
---

### **1.4 Vino 서버 시작**

VNC 서버를 실행하려면 다음 명령어를 사용합니다:

```shell
/usr/lib/vino/vino-server &

```

서버가 시작되면 Pop!_OS가 원격 접속을 허용하게 됩니다.

---

## 2. **Pop!_OS 방화벽 설정** (선택 사항)

기본적으로 Pop!_OS 방화벽(`ufw`)이 비활성화되어 있지만, 방화벽이 활성화된 경우 다음과 같이 VNC 포트(5900)를 열어줍니다:

```shell
sudo ufw allow 5900/tcp
sudo ufw reload

```

---

## 3. **IP 주소 확인**

VNC 클라이언트가 올바르게 접속할 수 있도록 Pop!_OS의 IP 주소를 확인합니다:

```shell
ip addr show

```

- **예시**: `192.168.1.10`
기록된 IP 주소와 포트를 기억하세요 (기본 포트: 5900).

---

## 4. **Jump Desktop에서 연결**

1. **Jump Desktop 실행**: Mac 또는 Windows에서 Jump Desktop 클라이언트를 엽니다.
1. **새 연결 추가**:
1. **연결 시도**: 설정을 저장하고 연결 버튼을 클릭합니다.

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9e95520a-0ea7-45d0-ba3b-e99b54e66fe4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7UVDB7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDs0Zsnx7pb5tCWqwQaW5Lzjh1AcL0S6v89jGhyG6Z2qAiEA5%2FRVvxkJwliqV8V2lQqqpovmQpRAkiz7vdsTvlMyJuMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIwbVUN6DJLX0z4B%2FCrcAxmJATgALoMtny5zhE0Zx7ezp7dTXQrC1%2BjpDVtCbvua7ofz45%2FxqV5%2FqjuWCCnB%2B0Cwz8EurkvXL%2FewrPIcaw4m0YAzc47JqY27rmGVvt7pjyNjK%2BsDk03GDO5L0%2FfGCVryFC0jOtz5XQCZgYyjfLxw9wFStxso3DvI47z9%2Bmo%2B08JhiquPnQ3%2FxLvGBmJ%2FlF5Xr8HK99O4BRrGAdkwpIpV4NccWiXOLc%2BC9TGp2eRDz04JQrDCUO4HA%2FSoi%2BewKkQqK4XbCwdehpsx6XdiaJ08Cb4GAjzhXTC4NMGNkSicDjC%2Boo5mBdRurpIhj9gicVTme2hkX8dusAWQ3XkW6FHNXzUuVOD7GJR7FpntVdSU0JyZ0xy2pKmx5SF3JEu3P%2FQLRT%2FQY5izG%2FH0eInavtwixOeOSBAycx%2Fw4wZJ8RCUpHFhpCPAqW1hO61jk9EyyFCb3mBxkBK7xdBvHGvLCgzX9byebPsY93EGaVAiYan2uuwtNJ900BtsMZnd5Ia8QRG6bUboOgSUmU315yJjZAM%2F6AJAtxTHhRJ4UXLrZz%2B5qy%2FFjaH8v7ClyzvKXd0WG%2B%2BzZ%2FYQh4dVL2CjC1Yv6GNyXDlPNwxMKVxC%2FkiW3NQ9gPhOAMmaZQ9%2BXe3UMI%2FQh8QGOqUBSufDtRUGwhOm6P4BPgwmYLDmi1UnrvASsgGK9%2Bs49jUhmyvegr4eYF96st%2B8RhvMug%2BDvDp3dzw4X%2FIXAMn7XlB6Lmy%2FCCn%2FGtpbdqio8KQlCnz2GygSkmLykQ5c2PtZlDXwiKRICGsWvw%2FE658PW7Nn25tvB2j0%2FSFgZHiUTbwOGWDTehNZBql5pBNw4nc0DvrK61BybYQUk9k7q9ubMDIj01fq&X-Amz-Signature=4558a7974e6268af70cceaa92999fa8357d13edde7394c212425a9929ef9b79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

---

## 5. **Vino 자동 시작 설정** (선택 사항)

Pop!_OS 재부팅 후에도 VNC 서버가 자동으로 시작되도록 설정하려면 다음 단계를 따릅니다:

1. **시스템 서비스 파일 생성**:
1. **파일 내용 추가**:
1. **서비스 활성화 및 시작**:
---

## 완료!

이제 Pop!_OS에서 VNC 서버를 설정하고 Jump Desktop을 통해 원격으로 연결할 수 있습니다. 문제가 발생하면 방화벽, 네트워크 설정, 또는 VNC 서버 로그를 점검해 보세요.


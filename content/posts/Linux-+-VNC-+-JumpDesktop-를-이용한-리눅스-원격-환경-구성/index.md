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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/31b94c7e-4acd-453a-8360-0406fa4c7def/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6H7LLL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDYpCCZTSTuFwPapwjYeetulmZRVk4Zdg5DNAs%2BVL9yaAiBiQgxgAIpVB2AfoXuBYfnzs4Pegj954YnrwCYC2TEq0Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMwUP7LGUchwnEmAu0KtwD1phyDXWskQ1wrCcx6k%2BhxElfGvawmuik4QcX6V5tumyJ%2F7%2ByKhEF2BkFxrJAE52xU%2BPs1QbibgetpBJa57XllDnaxycVCpP%2BUBxVXk5XEo6nlThjov8x4RrXfqyre5z77eM34y%2BvM3Pe%2Fg3U6mgFDB%2FzYcshdh1OELH%2FyPDNw%2BAig8gY81UFOyMyB7Oeb%2BAE5Xa6HGFo2YNBs9wZyMVaEA09P5mwlQvK2CeoZO4Gogx6mHijsL7ZmTw9EXT9f1Y%2FLD5Yp54eDqVn92ERqcvh5VaX7OSZVnB2ktOKnTfg5F6lv9%2Bs9fvrVaD27Fa5lfltFI7mps6OBjCWnsHPYvWSPj7oxPaUabZUEs%2FL6svEOqFJ49kvqPSkEbjyUVLCkuq3bLogbary3UTAdVrqwkmPThR%2FRWSBbSOOe0FRXciGwQi0Zrbn0wQBzftSTbstgfkA%2F95lmbTTEG%2F%2FvzoMxry4M7X%2BY3yqfkVWGeWyvnvPNW9Y84H8BP0w6dErz8K%2Fi%2B1oTcpbNRiMA9bSbwdEbGpNub8q8bynF4CUr5SdyakHqQwij0V1wxQdfg5sUNrJudJy8YGKWIs2FKq9Hh6xxm0kZdvIwYL3L4RAHwPd1lxCwe7090YeIRXzlmWxcG8wk%2FaHxAY6pgGWWTJz9ephVT%2B48CsrS4ua2R8cRkt%2BmufdVcGEMHv2EwQRlPiQclLpuwGFCj7tJ2xu7hVU84aIxiuY3bB8I1uqqhJXBn7uXJE1eEpKQEtZ36ND6U0RvtRSrQl%2Fu%2BDc3gc6uoegKjO49monMmCyuw3Ap6uQ6kNghoHPmvJC5tyxTpZYOlEi84cWAil0wy95hLC1VfsF7gZ6P9age%2BMqIIE2hSxCLHDP&X-Amz-Signature=8d8b5ed3d3e20c56ca8b98b62f1cce96bef732beab583b614783ba22bd572f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
```shell
echo $XDG_SESSION_TYPE

```

  결과가 `x11`이 나와야 합니다. 만약 `wayland`로 표시된다면 Xorg로 전환이 필요합니다.

1. **Xorg 세션 활성화**:
  - 로그인 화면에서 사용자 이름을 클릭한 후 **톱니바퀴 아이콘**을 클릭합니다.
  - *"GNOME on Xorg"**를 선택한 후 로그인합니다.
1. **Wayland 비활성화** (선택 사항):
만약 GNOME on Xorg 옵션이 보이지 않는다면, 다음 설정을 통해 강제로 Wayland를 비활성화할 수 있습니다:
```shell
sudo nano /etc/gdm3/custom.conf

```

  - `#WaylandEnable=false` 항목에서 주석(#)을 제거하여 활성화합니다:
```plain text
WaylandEnable=false

```

  - 저장 후 GDM을 재시작합니다:
```shell
sudo systemctl restart gdm3

```

---

### **1.3 Vino 설정**

Vino는 GUI 설정이 기본적으로 지원되지 않으므로 `dconf`를 사용해 설정합니다:

1. **dconf-editor 설치**
```shell
sudo apt install dconf-editor
dconf-editor

```

1. **VNC 관련 설정 변경**
  - `org.gnome.desktop.remote-desktop` 경로를 찾습니다.
  - 다음 항목을 설정합니다:
    - **authentication-methods**: `['vnc']`
    - **enabled**: `true`
    - **require-encryption**: `false` (Jump Desktop 호환을 위해 필요)
1. **GNOME 화면 공유 설정 (대안)**:
GUI를 사용해 화면 공유를 설정할 수도 있습니다:
```shell
gnome-control-center sharing
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e0c44530-defe-410b-9e30-99e1e59971de/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4F5D7L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICIcrPR%2Faq88Vdi6uREvRbxRQ5F82s6hOUbne2w%2BsKlZAiEAgQ6pMZFubbMzB8lbtKtrPHRVyn6tTaf8NCZXSlj9UEUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGSSZ4kS18QofVo7rircAzRFQe8oUTXqywRXOlSfSei3xpEJnh19SoJn08%2FlFolHruFQGXH1FPfJCEJCQ%2FuYPeN24DJNhu4Ra0fkfCWPUS07M%2Fvk2MPXEj9y3rcCXR4EFM3H7O1ZDHND6%2Fp4NWaDMyTZGsePVHyDDhpM4MI2VGHF0N8JQ9XzH4Lmmiv0SbQf3%2F%2FWLcZ8F441VssT7LqbDjpvzsPofjYz9YUUzm%2BjeRdnZRR2yWvLqVzic%2B3OT3tn0THCr2za1s8BZx0bmocDNKklCBN6E4FxFQt9AaFSSz9GHUXMWRR1Sl1LxpWvpZLeuZARKH5T97IZihJ5pxmgcWdRmVCybHxbywn0XiZNKTyeRpppK6juOCo9qt9Jr1THpzNG34l4AsujH7Kn67ssprbCBE79lgWIjmJJK1t7G8ao4nHKcRG0ukWL66U9smst4ufbpq3jKKmRXrY97aorJNTdBrFkNi6fK930XlOzdhMzKp%2BS9M1%2FUiDxnWzRe8MOeEd0ZTJKx0iDuE3CTqZi26nLuqBvzjvhR9d2CrwGyIsCOWrHlFEBH9diLFJLFBx4ne8%2BPMVqM087d1RiNCO9rt4HDOcwNtRYdFA42oSgeqfe4tYhP7RF9Z%2FeEs7F5moTw4WQOK%2FIHBP362WUMJL2h8QGOqUBp5TDqFkD4buHl96akL8jfCAGHq5NjXW1hLnq7iyZS1%2Fq1OTWh6qVTp5Rc5qnbYQY0A8C2J2OuchsNB9Sc5qmBwayVye8wclQ9%2BN8OXAhwO%2BWvrPS27HaP2HEQH5dt72cmNyLi3rdbAJDcqaeepL8E3FJ8bvanEjUt%2BaFpqk8lJb%2FXAOAJAWTpCZDQepy53UEQLkqnmzUbo18lEawVwhUwpK2e19i&X-Amz-Signature=63371e6d613ed9a01b40f587c5821d3ed2435c31f05518331cf1f025b9b0f928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

  - **"Screen Sharing"** 또는 **"화면 공유"** 옵션을 활성화합니다.
  - **비밀번호 보호**를 설정합니다.
1. **VNC 비밀번호 설정** (CLI):
Vino의 VNC 접속 비밀번호를 설정하려면 다음 명령어를 사용합니다:
```shell
gsettings set org.gnome.Vino vnc-password "$(echo -n '비밀번호' | base64)"

```

  **비밀번호** 대신 원하는 VNC 비밀번호를 입력하세요.

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
  - 연결 유형: **VNC**
  - 주소: Pop!_OS의 **IP 주소** 입력 (예: `192.168.1.10`)
  - 비밀번호: 설정한 VNC 비밀번호 입력
1. **연결 시도**: 설정을 저장하고 연결 버튼을 클릭합니다.

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9e95520a-0ea7-45d0-ba3b-e99b54e66fe4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6H7LLL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDYpCCZTSTuFwPapwjYeetulmZRVk4Zdg5DNAs%2BVL9yaAiBiQgxgAIpVB2AfoXuBYfnzs4Pegj954YnrwCYC2TEq0Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMwUP7LGUchwnEmAu0KtwD1phyDXWskQ1wrCcx6k%2BhxElfGvawmuik4QcX6V5tumyJ%2F7%2ByKhEF2BkFxrJAE52xU%2BPs1QbibgetpBJa57XllDnaxycVCpP%2BUBxVXk5XEo6nlThjov8x4RrXfqyre5z77eM34y%2BvM3Pe%2Fg3U6mgFDB%2FzYcshdh1OELH%2FyPDNw%2BAig8gY81UFOyMyB7Oeb%2BAE5Xa6HGFo2YNBs9wZyMVaEA09P5mwlQvK2CeoZO4Gogx6mHijsL7ZmTw9EXT9f1Y%2FLD5Yp54eDqVn92ERqcvh5VaX7OSZVnB2ktOKnTfg5F6lv9%2Bs9fvrVaD27Fa5lfltFI7mps6OBjCWnsHPYvWSPj7oxPaUabZUEs%2FL6svEOqFJ49kvqPSkEbjyUVLCkuq3bLogbary3UTAdVrqwkmPThR%2FRWSBbSOOe0FRXciGwQi0Zrbn0wQBzftSTbstgfkA%2F95lmbTTEG%2F%2FvzoMxry4M7X%2BY3yqfkVWGeWyvnvPNW9Y84H8BP0w6dErz8K%2Fi%2B1oTcpbNRiMA9bSbwdEbGpNub8q8bynF4CUr5SdyakHqQwij0V1wxQdfg5sUNrJudJy8YGKWIs2FKq9Hh6xxm0kZdvIwYL3L4RAHwPd1lxCwe7090YeIRXzlmWxcG8wk%2FaHxAY6pgGWWTJz9ephVT%2B48CsrS4ua2R8cRkt%2BmufdVcGEMHv2EwQRlPiQclLpuwGFCj7tJ2xu7hVU84aIxiuY3bB8I1uqqhJXBn7uXJE1eEpKQEtZ36ND6U0RvtRSrQl%2Fu%2BDc3gc6uoegKjO49monMmCyuw3Ap6uQ6kNghoHPmvJC5tyxTpZYOlEi84cWAil0wy95hLC1VfsF7gZ6P9age%2BMqIIE2hSxCLHDP&X-Amz-Signature=a82a23e2d0ce6ba3b395a99048c9a9213e50181ddd6b98cfc1ff9f9f60887d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

---

## 5. **Vino 자동 시작 설정** (선택 사항)

Pop!_OS 재부팅 후에도 VNC 서버가 자동으로 시작되도록 설정하려면 다음 단계를 따릅니다:

1. **시스템 서비스 파일 생성**:
```shell
sudo nano /etc/systemd/system/vino-server.service

```

1. **파일 내용 추가**:
```plain text
[Unit]
Description=Vino VNC Server
After=network.target graphical.target

[Service]
ExecStart=/usr/lib/vino/vino-server
Restart=on-failure
User=사용자이름

[Install]
WantedBy=default.target

```

  - **사용자이름**을 실제 사용자 이름으로 변경하세요.
1. **서비스 활성화 및 시작**:
```shell
sudo systemctl daemon-reload
sudo systemctl enable vino-server
sudo systemctl start vino-server

```

---

## 완료!

이제 Pop!_OS에서 VNC 서버를 설정하고 Jump Desktop을 통해 원격으로 연결할 수 있습니다. 문제가 발생하면 방화벽, 네트워크 설정, 또는 VNC 서버 로그를 점검해 보세요.


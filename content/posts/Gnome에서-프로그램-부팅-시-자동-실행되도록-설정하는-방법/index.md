---
title: "Gnome에서 프로그램 부팅 시 자동 실행되도록 설정하는 방법"
date: 2025-01-26T11:53:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Gnome에서 Albert 프로그램을 부팅 시 자동으로 실행하려면 GUI를 이용한 방법, "
notion_id: "1871bab9-e3f8-8040-a9bb-d69d940550bc"
notion_url: "https://www.notion.so/Gnome-1871bab9e3f88040a9bbd69d940550bc"
---

# Gnome에서 프로그램 부팅 시 자동 실행되도록 설정하는 방법

> **Summary**
> Gnome에서 Albert 프로그램을 부팅 시 자동으로 실행하려면 GUI를 이용한 방법, 

---

### **Gnome에서 프로그램 부팅 시 자동 실행되도록 설정하는 방법**

Albert 프로그램이 리눅스 부팅 시 자동으로 실행되도록 설정하려면 다음 방법을 사용할 수 있습니다.

---

### **1. GUI를 이용한 자동 실행 설정 (간단한 방법)**

1. **"Startup Applications"** (자동 실행 프로그램 설정) 열기
  - GNOME 기반 (POP!_OS 포함): `gnome-session-properties` 실행
```shell
gnome-session-properties

```

  - KDE 환경: `System Settings` > `Startup and Shutdown`
  - XFCE 환경: `Session and Startup`
1. **새로운 자동 실행 항목 추가**
  - **"Add"** 버튼 클릭
  - **Name:** `Albert`
  - **Command:** `albert`
  - **Comment:** `Launch Albert at startup`
1. **설정을 저장하고 창 닫기**
이제 다음 부팅부터 자동으로 Albert가 실행됩니다.

---

### **2. **`**~/.config/autostart/**`** 폴더에 실행 파일 추가 (수동 설정)**

이 방법은 수동으로 설정하는 방법입니다.

1. **자동 실행 설정 파일 생성**
```shell
mkdir -p ~/.config/autostart
nano ~/.config/autostart/albert.desktop

```

1. **다음 내용을 입력**
```plain text
[Desktop Entry]
Type=Application
Exec=albert
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
Name=Albert
Comment=Start Albert on login

```

1. **파일 저장 후 종료 (**`**Ctrl + X**`**, **`**Y**`**, **`**Enter**`**)**
1. **실행 권한 부여**
```shell
chmod +x ~/.config/autostart/albert.desktop

```

이제 재부팅하면 자동으로 Albert가 실행됩니다.

---

### **3. Systemd 서비스로 설정 (고급 사용자용)**

1. **새로운 systemd 서비스 파일 작성**
```shell
nano ~/.config/systemd/user/albert.service

```

1. **다음 내용 추가**
```plain text
[Unit]
Description=Albert Launcher

[Service]
ExecStart=/usr/bin/albert
Restart=always
Environment=DISPLAY=:0

[Install]
WantedBy=default.target

```

1. **Systemd 데몬 리로드**
```shell
systemctl --user daemon-reload

```

1. **서비스 활성화**
```shell
systemctl --user enable albert

```

1. **즉시 실행**
```shell
systemctl --user start albert

```

이제 시스템이 켜질 때마다 Albert가 자동으로 실행됩니다.

---

### **추천 방법**

- **간단한 방법 (GUI 사용)**: `gnome-session-properties`에서 직접 등록
- **일반적인 방법**: `~/.config/autostart/albert.desktop` 파일 추가
- **고급 사용자용**: `systemd`를 이용한 자동 실행
이제 컴퓨터가 켜질 때마다 자동으로 Albert가 실행될 것입니다! 🚀


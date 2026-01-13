---
title: "Pop!_OS 서버에 SSH 공개 키 등록 및 ICloud를 활용한 키 관리"
date: 2024-12-15T13:41:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "SSH 공개 키를 사용하여 Pop!_OS 서버에 안전하게 접속하는 방법을 설명합니다. Mac에서 SSH 키를 생성하고 iCloud와 연동하여 공개 키를 Pop!_OS 서버에 등록하며, Windows에서도 iCloud를 통해 SSH 접속을 설정하는 과정을 다룹니다. 비밀번호 없는 SSH 접속을 테스트하고, 보안 강화를 위한 주의사항도 포함되어 있습니다."
notion_id: "15d1bab9-e3f8-8077-898a-dfe448d70390"
notion_url: "https://www.notion.so/Pop-_OS-SSH-ICloud-15d1bab9e3f88077898adfe448d70390"
---

# Pop!_OS 서버에 SSH 공개 키 등록 및 ICloud를 활용한 키 관리

> **Summary**
> SSH 공개 키를 사용하여 Pop!_OS 서버에 안전하게 접속하는 방법을 설명합니다. Mac에서 SSH 키를 생성하고 iCloud와 연동하여 공개 키를 Pop!_OS 서버에 등록하며, Windows에서도 iCloud를 통해 SSH 접속을 설정하는 과정을 다룹니다. 비밀번호 없는 SSH 접속을 테스트하고, 보안 강화를 위한 주의사항도 포함되어 있습니다.

---

![Image](image_040062c41b13.png)

# Pop!\_OS 서버에 SSH 공개 키 등록 및 접속 튜토리얼

SSH 공개 키를 사용하여 공용 IP 주소를 가진 Pop!\_OS 서버에 안전하게 접속하는 방법을 설명합니다. 이 튜토리얼에서는 **Mac에서 SSH 키 생성 및 iCloud 연동**, **Pop!\_OS 서버에 SSH 설치 및 설정**, **Windows에서 iCloud 연동을 통한 접속** 등 전체 과정을 다룹니다.

---

## **1. Pop!\_OS 서버에 SSH 설치**

### **SSH 설치 및 설정**

```shell
sudo apt update
sudo apt install openssh-server

```

### **SSH 서비스 시작 및 상태 확인**

```shell
sudo systemctl start ssh
sudo systemctl enable ssh
sudo systemctl status ssh

```

### **방화벽 설정 확인 (필요 시)**

```shell
sudo ufw allow <공개포트>/tcp
sudo ufw enable

```

---

## **2. Mac에서 SSH 키 생성 및 iCloud 연동**

### **SSH 키 생성**

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

```

- 키 파일 경로: `~/.ssh/id_rsa`
- 패스프레이즈 입력 및 확인
### **iCloud Drive에 공개 키 복사**

```shell
cp ~/.ssh/id_rsa* ~/iCloud\\ Drive/SSH_Keys/

```

iCloud Drive의 `SSH_Keys` 폴더에 공개 키와 개인 키가 복사됩니다.

---

## **3. Pop!\_OS 서버에 SSH 공개 키 등록**

### **Pop!\_OS 서버에 SSH 접속 (비밀번호 인증)**

```shell
ssh -p 2222 sbu@<퍼블릭 IP>

```

### **공개 키 등록**

```shell
mkdir -p ~/.ssh

```

```shell
echo "복사한_공개_키" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

```

---

## **4. Windows에서 iCloud 연동을 통한 SSH 접속 설정**

### **iCloud for Windows 설치 및 설정**

- Windows에 **iCloud for Windows** 설치 후 로그인.
- iCloud Drive 동기화 확인 (`C:\\Users\\YourUsername\\iCloudDrive\\SSH_Keys`)
### **SSH 접속 설정 (Windows PowerShell)**

```powershell
mkdir ~\\.ssh
copy "C:\\Users\\YourUsername\\iCloudDrive\\SSH_Keys\\id_rsa" ~\\.ssh\\

```

### **권한 설정 (Windows PowerShell)**

```powershell
icacls ~\\.ssh\\id_rsa /inheritance:r /grant:r "$($env:USERNAME):(F)"

```

### **SSH 접속 테스트**

```powershell
ssh -p <공개포트> sbu@<퍼블릭 IP>

```

---

## **5. SSH 서비스 재시작 (필요 시)**

```shell
sudo systemctl restart sshd

```

---

## **6. 비밀번호 없는 SSH 접속 테스트**

Mac 및 Windows에서 다음 명령어로 비밀번호 없는 SSH 접속을 확인하세요:

```shell
ssh -p <공개포트> sbu@<퍼블릭 IP>

```

- **성공 시:** 비밀번호 입력 없이 서버에 접속됩니다.
- **실패 시:** 공개 키 설정 또는 권한을 다시 확인하세요.
---

## **주의사항**

1. **공개 키 전체 복사:** 공개 키는 **ssh-rsa**로 시작하고 **== 이메일 주소**로 끝납니다. **줄바꿈 없이 전체 복사**해야 합니다.
1. **방화벽 및 포트 설정:** 서버의 방화벽 설정에서 **포트 2222**가 열려 있는지 확인하세요.
1. **포트 포워딩:** 공용 IP 대신 라우터 뒤에 있는 서버라면 **포트 포워딩 설정**이 필요합니다.
1. **보안 강화를 위한 권장 설정:**
  - 개인 키 보호를 위해 **패스프레이즈** 설정.
  - **Fail2Ban**과 같은 보안 툴 설치 고려.
---

이 과정을 따르면, SSH 공개 키 인증을 통해 **보안 강화**, **비밀번호 없는 접속**, **자동 로그인** 설정이 가능합니다. 보안을 위해 **개인 키 관리**와 **주기적인 서버 보안 점검**을 추천합니다. 🛡️


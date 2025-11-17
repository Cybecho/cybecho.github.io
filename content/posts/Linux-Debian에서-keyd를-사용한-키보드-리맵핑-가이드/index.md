---
title: "Linux - Debian에서 keyd를 사용한 키보드 리맵핑 가이드"
date: 2025-11-16T07:44:00.000Z
draft: false
tags: ["RHEL/Fedora/Rocky", "Arch", "ubuntu", "Debian"]
series: ["Let's Linux!"]
description: "Debian에서 Capslock 키를 레이어 키로 설정하여 i, j, k, l을 방향키로 매핑하는 방법을 설명합니다. 필수 패키지 설치, keyd 소스 다운로드 및 설치, systemd 서비스 활성화, 설정 파일 생성 및 적용 과정을 포함하며, 추가 팁으로 설정 파일 문법 확인, 서비스 재시작, 로그 확인 방법도 안내합니다."
notion_id: "2ad1bab9-e3f8-8099-8351-f4ad02c0dbc2"
notion_url: "https://www.notion.so/Linux-Debian-keyd-2ad1bab9e3f880998351f4ad02c0dbc2"
---

# Linux - Debian에서 keyd를 사용한 키보드 리맵핑 가이드

> **Summary**
> Debian에서 Capslock 키를 레이어 키로 설정하여 i, j, k, l을 방향키로 매핑하는 방법을 설명합니다. 필수 패키지 설치, keyd 소스 다운로드 및 설치, systemd 서비스 활성화, 설정 파일 생성 및 적용 과정을 포함하며, 추가 팁으로 설정 파일 문법 확인, 서비스 재시작, 로그 확인 방법도 안내합니다.

---

# Capslock을 레이어 키로 활용하여 i j k l을 방향키로 사용하는 설정입니다.

[Fedora 키보드 리맵핑](https://www.notion.so/68b0551fe7804f81be65d987ca9ae47e) 에 이어, Debian에서 키보드 리맵핑을 하는 방법을 다룹니다.

덕분에 오래된 x230에서 편안한 타이핑 라이프를 즐길 수 있어 기쁩니다 ^^

## 1. 필수 패키지 설치

```bash
sudo apt update
sudo apt install git build-essential

```

## 2. keyd 소스 다운로드 및 설치

```bash
# keyd 저장소 클론
git clone https://github.com/rvaiya/keyd
cd keyd

# 컴파일 및 설치
make
sudo make install

```

## 3. systemd 서비스 활성화

```bash
# 서비스 활성화 및 시작
sudo systemctl enable keyd
sudo systemctl start keyd

# 서비스 상태 확인
sudo systemctl status keyd

```

## 4. 설정 파일 생성

```bash
# 설정 디렉토리가 없으면 생성
sudo mkdir -p /etc/keyd

# 설정 파일 편집
sudo vim /etc/keyd/default.conf

```

## 5. 설정 파일 내용

`/etc/keyd/default.conf` 파일에 다음 내용을 입력합니다:

```plain text
[ids]
*

[main]
# Capslock을 레이어 키로 설정
capslock = layer(capslock)

[capslock:C]
# 방향키 매핑
i = up
j = left
k = down
l = right

# 추가 네비게이션 키
u = home
o = end
h = pageup
n = pagedown

[capslock+shift]
# Shift와 함께 사용시 선택 동작
i = S-up
j = S-left
k = S-down
l = S-right

```

## 6. 설정 적용

```bash
# 설정 다시 로드
sudo keyd reload

```

## 추가 팁

### 설정 파일 문법 확인

```bash
sudo keyd -m

```

### 서비스 재시작 (필요시)

```bash
sudo systemctl restart keyd

```

### 로그 확인 (문제 발생시)

```bash
sudo journalctl -u keyd -f

```

### 현재 키 이벤트 모니터링

```bash
sudo keyd monitor

```

## 설정 설명

- `[ids] *`: 모든 키보드에 적용
- `capslock = layer(capslock)`: Capslock을 레이어 토글 키로 설정
- `[capslock:C]`: Capslock이 눌렸을 때 활성화되는 레이어
- `i/j/k/l`: 각각 상/좌/하/우 방향키로 매핑
- `u/o`: Home/End 키로 매핑
- `[capslock+shift]`: Shift와 조합시 텍스트 선택 가능
이제 Capslock을 누른 채로 i j k l 키를 사용하면 방향키로 작동하며, Shift를 추가로 누르면 텍스트 선택도 가능합니다.


---
title: "맥미니로 분산 컴퓨팅을 만들어보자"
date: 2025-04-13T07:43:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "맥미니를 활용한 분산 컴퓨팅 설정 과정에서 Proxmox 설치 중 발생한 Ventoy 부팅 오류와 해결 방법, 초기 설정 및 클러스터 관리에 대한 단계별 안내가 포함되어 있다. 주요 문제로는 Secure Boot 관련 호환성 문제와 클러스터 노드 관리가 있으며, 여러 가지 해결책과 설정 방법이 제시된다."
notion_id: "1d41bab9-e3f8-80bc-b09b-cd8bf1d9f0df"
notion_url: "https://www.notion.so/1d41bab9e3f880bcb09bcd8bf1d9f0df"
---

# 맥미니로 분산 컴퓨팅을 만들어보자

> **Summary**
> 맥미니를 활용한 분산 컴퓨팅 설정 과정에서 Proxmox 설치 중 발생한 Ventoy 부팅 오류와 해결 방법, 초기 설정 및 클러스터 관리에 대한 단계별 안내가 포함되어 있다. 주요 문제로는 Secure Boot 관련 호환성 문제와 클러스터 노드 관리가 있으며, 여러 가지 해결책과 설정 방법이 제시된다.

---

# 시스템 선정

# 시스템 조립

![Image](image_e6a3dd7e1e51.jpeg)

![Image](image_c2d2be659a11.jpeg)

![Image](image_a26a2d7dc31d.jpeg)

![Image](image_1ac36fd15708.jpeg)


# Proxmox설치

## >> 문제발생! 이거 머임?

> 결론 : Ventoy 말고, 그냥 Rufus로 굽자~

🔗 [https://github.com/ventoy/Ventoy/issues/52](https://github.com/ventoy/Ventoy/issues/52)

### >>>> Ventoy 부팅 오류 트러블슈팅 요약 (MacMini 2012)

**1. 문제 상황**

- MacBook Pro 2012에서 Ventoy USB로 부팅
- Ventoy 메뉴는 정상적으로 표시됨
- 메뉴에서 특정 OS ISO 파일(Proxmox 8.1) 선택 시 OS 로딩 실패
- "Not a Secure Boot Platform 14" 오류 메시지 발생
**2. 문제 개요**

- Ventoy는 부팅 초기 단계와 메뉴 진입까지는 정상 작동
- OS 이미지 로드 과정에서 Secure Boot 관련 호환성 문제 발생 추정
- MacMini 2012 하드웨어와 최신 OS ISO 파일 간 호환성 문제로 판단됨
**3. 해결 방법 (제안)**

- **UEFI Secure Boot 설정 확인/비활성화:** Mac EFI 설정에서 관련 옵션 확인 및 비활성화
- **시스템 펌웨어(EFI) 업데이트:** Mac 펌웨어를 최신 버전으로 업데이트
- **대체 부팅 도구 사용:** Rufus, Etcher 등 다른 USB 부팅 도구로 시도
- **ISO 파일 확인:** ISO 파일 무결성 검사 또는 다른 버전 시도
- **커널 파라미터 조정:** OS 부팅 옵션에 `nomodeset` 등 추가
- **전문가 지원 요청:** Ventoy 개발자 또는 OS 커뮤니티에 문의

### >>>> 시도1 : Rufus 로 Iso 단일로 굽기 🚫

- 실패! 
```plain text
현재 8.4버전을 설치하려고하니, Proxmox화면까지는 등장하지만, 설치하는 과정에서
testing device '/dev/sdb' for ISO
found ISO9660 FS but no, or wrong proxmox cd-id, skipping 이 몇번 반복되면서

no device with valid ISO found, please check your installation medium 에러가 발생한다.
```

![Image](image_c5730e2bae42.png)



### >>>> 시도2 : Proxmox 버전 다운그레이드 & USB 32기가 말고 8기가로 다운그레이드 ✅

- 32기가가 문제가 아닐까? (32비트 컴퓨터가 아니라 상관없을것같긴하지만..)



# Proxmox 세팅

## >> 초기세팅 (클러스터 1,2,3 각각해줘야함)

```shell
nano /etc/apt/sources.list.d/pve-enterprise.list
```

```shell
# deb https://enterprise.proxmox.com/debian/pve bookworm pve-enterprise
```

```shell
nano /etc/apt/sources.list.d/ceph.list
```

```shell
#deb http://download.proxmox.com/debian/ceph-quincy bookworm enterprise
```

```shell
nano /etc/apt/sources.list.d/ceph.list
```

```shell
# No Subscription
deb http://download.proxmox.com/debian/ceph-quincy bookworm no-subscription
```

```shell
nano /etc/apt/sources.list
```

```shell
# No Subscription
deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
```

```shell
apt update && apt upgrade
```


## >> 만약 초기세팅에서 문제 생기면 아래를 참고하라

DNS 조회 실패시 문제 해결 순서:

```bash
# 1. DNS 설정 확인
cat /etc/resolv.conf

# 2. DNS 서버 추가
sudo nano /etc/resolv.conf
# 아래 내용 추가
nameserver 8.8.8.8
nameserver 8.8.4.4

# 3. DNS 캐시 서비스 재시작
systemctl status systemd-resolved
systemctl restart systemd-resolved

# 4. 설정 적용 확인
ping google.com
curl -v google.com
```


## >> tailscale 설정

```shell
curl -fsSL https://tailscale.com/install.sh | sh
```

```shell
tailscale up
```



# TS 과정

클러스터 이름이 모두 mac으로 동일해서, 수정하려고하니,,,

### 주제 1: Proxmox 클러스터 삭제

- **현상:** Proxmox 클러스터 전체 또는 클러스터 내 특정 노드를 제거하고 싶음.
- **시도:** 클러스터 삭제 방법에 대한 질의.
- **오류 이유:** (해당 없음 - 방법 문의)
- **해결법:**
  1. **특정 노드 제거:**
    - 마스터 노드(또는 남은 노드)에서 `pvecm delnode <제거할_노드이름>` 실행.
    - 제거 대상 노드에서 클러스터 서비스 중지: `systemctl stop pve-cluster`, `systemctl stop corosync`.
    - 제거 대상 노드에서 클러스터 관련 설정 파일(`/etc/pve/`, `/etc/corosync/corosync.conf` 등) 정리.
  1. **전체 클러스터 삭제 (모든 노드를 단일 노드로 복구):**
    - 각 노드에서 클러스터 서비스 중지: `systemctl stop pve-cluster`, `systemctl stop corosync`.
    - 각 노드에서 클러스터 설정 파일 정리 (`/etc/pve/`, `/etc/corosync/corosync.conf` 등).
    - 각 노드 재부팅.
    - 재부팅 후 `pvecm status` 명령어로 클러스터 정보 제거 확인.
  - **주의:** 작업 전 반드시 중요한 데이터(VM, 설정 등)를 백업해야 함.

---

### 주제 2: 클러스터 Join IP 주소 오류 (UI 불일치)

- **현상:** `/etc/corosync/corosync.conf` 파일에는 올바른 IP(예: 192.168.55.42)가 설정되어 있으나, Proxmox 웹 UI의 클러스터 Join 정보에는 다른 IP(예: 192.168.45.42)가 표시됨.
- **시도:** 사용자가 `/etc/corosync/corosync.conf` 파일 내용을 확인했으나 UI 표시와 다른 것을 발견.
- **오류 이유:**
  - `/etc/hosts` 파일에 노드 호스트명이 잘못된 IP(192.168.45.42)로 매핑되어 있을 수 있음.
  - 시스템 자체의 네트워크 인터페이스 설정이 잘못된 IP를 사용하고 있을 수 있음.
  - 설정 변경 후 관련 서비스(corosync, pve-cluster)가 재시작되지 않았거나, 웹 브라우저 캐시 문제일 수 있음.
  - DNS 설정이나 다른 이름 해석 메커니즘이 잘못된 IP를 반환할 수 있음.
- **해결법:**
  1. `/etc/hosts` 파일 확인: 노드 호스트명이 올바른 IP(192.168.55.42)로 매핑되어 있는지 확인하고 수정.
  1. `/etc/corosync/corosync.conf` 파일 확인: `ring0_addr` 값이 올바른 IP로 설정되어 있는지 재확인.
  1. 서비스 재시작: `systemctl restart corosync`, `systemctl restart pve-cluster` 실행 또는 노드 재부팅.
  1. 웹 브라우저 캐시 삭제 후 UI 재확인.
  1. 시스템 네트워크 설정 확인: `ip a` 또는 `ifconfig` 명령어로 실제 IP 설정 확인.

---

### 주제 3: Proxmox 클러스터 이름 변경

- **현상:** 현재 Proxmox 클러스터 이름(예: `macmini-cluster`)을 다른 이름으로 변경하고 싶음.
- **시도:** 클러스터 이름 변경 방법에 대한 질의.
- **오류 이유:** (해당 없음 - 방법 문의)
- **해결법:**
  1. `/etc/pve/corosync.conf` 파일 백업 (`cp /etc/pve/corosync.conf /etc/pve/corosync.conf.bak`).
  1. 텍스트 편집기(nano, vim 등)로 `/etc/pve/corosync.conf` 파일 열기.
  1. `totem { ... }` 블록 내의 `cluster_name` 값을 원하는 새 이름으로 수정.
  1. 서비스 재시작: `systemctl restart corosync`, `systemctl restart pve-cluster` 실행 또는 노드 재부팅.
  1. Proxmox 웹 UI에서 클러스터 이름이 변경되었는지 확인.
  - **주의:** 운영 중인 클러스터 이름 변경은 신중해야 하며, 백업 및 점검 시간 확보 필요.

---

### 주제 4: 리눅스 호스트명 변경 (사용자명 변경 시도 오류)

- **현상:** 사용자가 터미널 프롬프트(`root@mac:~#`)에 보이는 'mac'을 변경하려고 함. 처음에는 사용자명 변경으로 오인하여 `usermod -l mac01 mac` 명령 실행.
- **시도:** `usermod -l mac01 mac` 실행.
- **오류 이유:** `usermod: user 'mac' does not exist` 오류 발생. 'mac'은 사용자 계정명이 아니라 시스템의 호스트명이었기 때문. `usermod`는 사용자 계정 관리 명령어이므로 호스트명 변경에는 사용할 수 없음.
- **해결법:** (호스트명 변경 방법)
  1. 현재 호스트명 확인: `hostnamectl`
  1. 호스트명 변경: `sudo hostnamectl set-hostname <새호스트명>` (예: `sudo hostnamectl set-hostname mac01`)
  1. `/etc/hosts` 파일 수정: `sudo nano /etc/hosts` 실행 후, `127.0.1.1` 라인 등에서 이전 호스트명을 찾아 새 호스트명으로 변경.
  1. 변경 사항 적용: 필요시 시스템 재부팅 (`sudo reboot`).
  1. 변경 확인: `hostnamectl` 또는 새 터미널 세션의 프롬프트 확인.

---

### 주제 5: Proxmox 클러스터 노드 삭제 실패 (Permission Denied)

- **현상:**
  1. 마스터 노드에서 `pvecm delnode <삭제할노드>` 명령 실행 시 `/etc/pve/corosync.conf.new.tmp.xxxx' - Permission denied` 오류 발생.
  1. 이후 수동으로 노드 디렉토리(`rm -rf /etc/pve/nodes/<삭제할노드>`) 삭제 시도 시에도 `Permission denied` 오류 발생 (root 권한으로도 실패).
  1. `/etc/corosync/corosync.conf` 파일에 삭제하려는 노드 정보가 여전히 남아 있음.
- **시도:** `pvecm delnode <삭제할노드>`, `rm -rf /etc/pve/nodes/<삭제할노드>` (root, sudo 사용).
- **오류 이유:** 클러스터 쿼럼(Quorum) 상실 상태. Proxmox는 쿼럼을 잃으면 설정 파일 시스템인 PMxcfs (`/etc/pve`)를 읽기 전용(read-only)으로 마운트하여 설정 변경을 막음. 따라서 `pvecm delnode`나 `rm` 명령이 실패함.
- **해결법:**
  1. **쿼럼 상태 확인:** `pvecm status` 실행하여 `Quorate:` 항목이 `No` 인지 확인.
  1. **쿼럼 강제 복구 (주의 필요):** 현재 유효한 노드 수에 맞춰 예상 노드 수를 조정. 예를 들어, 현재 마스터 노드 1개만 활성 상태라면 `pvecm expected 1` 실행. (이후 클러스터 복구 시 원래대로 되돌려야 함)
  1. **노드 디렉토리 삭제 재시도:** 쿼럼이 복구되면 `/etc/pve`가 쓰기 가능 상태가 되므로 `rm -rf /etc/pve/nodes/<삭제할노드>` 명령 재시도.
  1. **Corosync 설정 파일 정리:**
    - `/etc/corosync/corosync.conf` 파일 백업.
    - 파일 편집하여 삭제된 노드의 `node { ... }` 블록 전체 삭제.
    - `totem { ... }` 블록의 `config_version` 값을 1 증가시킴.
    - `systemctl restart corosync` 실행 (필요시 `pve-cluster`도 재시작).
  1. **UI 반영:** 필요시 `systemctl restart pveproxy pvedaemon` 실행.
  1. `**pvecm delnode**`** 재시도 (선택 사항):** 쿼럼 복구 후 `pvecm delnode <삭제할노드>` 명령을 다시 시도해 볼 수도 있음.

---

> **음! 방법은 알았다! 근데 이거 생각보다 Task가 많은데? 그냥 처음부터 다시 깔고 만드는게 편할듯 ㅎㅎ**



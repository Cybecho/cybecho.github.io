---
title: "ProxMox 시놀로지를 고쳐보자"
date: 2025-02-24T15:21:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Infra & Network", "Let's Homelab!"]
description: "HDD 사용률이 100%를 초과하여 Synology VM에 접속할 수 없는 문제 발생. RAID로 묶인 두 개의 하드디스크가 가상 머신의 QCOW2 파일로 인해 거의 가득 차 있으며, 파일 정리를 위해 직접 접속하거나 더 큰 HDD로 데이터 이전이 필요함. 현재 스토리지 정보와 가상 머신 설정이 포함됨."
notion_id: "1a41bab9-e3f8-8000-ae27-f6265f10dfa1"
notion_url: "https://www.notion.so/ProxMox-1a41bab9e3f88000ae27f6265f10dfa1"
---

# ProxMox 시놀로지를 고쳐보자

> **Summary**
> HDD 사용률이 100%를 초과하여 Synology VM에 접속할 수 없는 문제 발생. RAID로 묶인 두 개의 하드디스크가 가상 머신의 QCOW2 파일로 인해 거의 가득 차 있으며, 파일 정리를 위해 직접 접속하거나 더 큰 HDD로 데이터 이전이 필요함. 현재 스토리지 정보와 가상 머신 설정이 포함됨.

---

```javascript
HDD100% 이후 I/O Error 문제때문에 헤놀 접속이 안됩니다.

A와 B HDD가 하나의 레이드로 묶여서 시놀로지 VM에 마운트 되어있는 상태입니다.

현재 2000GB짜리 하드디스크 두개를 레이드로 묶고 헤놀로지에서 사용중이었는데, 하드 사용률이 100%를 초과하면서 헤놀로지 접속이 불가능한 문제가 생겼습니다..


파일 정리를 헤놀로지에 접속해서 지우든 말든 해야하는데 현재 접속 자체가 안되니....

직접 접속하여 직접 파일 몇개를 지울 수 있는 방법이나, 아니면 아싸리 더 큰 HDD에 현재 HDD 데이터를 옮기는 방식으로 문제 해결이 가능할까요?

근데 또 HDD에 직접 접속하기에는 다음과 같이 이미지 자체가 데이터를 차지하고있는 상태라...

해결 방법이 없는가?

현재 상태는 다음과 같다

Proxmox 스토리지 정보 (Storage 'A-W712NAJ' on node 'sbu')

사용률: 100.00% (1.97TB 중 1.97TB 사용)
컨텐츠 유형: VZDump backup file, Disk image, ISO image, Container, Snippets, Container template
가상 머신(101, Synology) 하드웨어 설정

메모리: 4.00 GiB
프로세서: 1 (1 소켓, 4 코어)
BIOS: Default (SeaBIOS)
Display: Default
Machine: Default (i440fx)
SCSI 컨트롤러: VirtIO SCSI single
하드디스크(예시):
scsi0: TOSHIBA 용량(Thin Provisioned) ...
scsi1: TOSHIBA 용량(Thin Provisioned) ...
(실제 용량 표기는 화면에 전체적으로 2TB급으로 표시)
QCOW2 파일 사이즈 확인 (CLI 출력)

/mnt/pve/A-W7212NAJ/images/101/vm-101-disk-0.qcow2의 실제 크기: 약 1.8TB
스토리지 전체 용량: 약 1.97TB
/mnt/pve/A-W7212NAJ/lost+found 등 다른 디렉터리는 대부분 4.0K 단위로 표시 (즉, 실제 큰 데이터는 vm-101-disk-0.qcow2 파일이 차지)
위 내용을 종합하면, A-W7212NAJ 스토리지(약 1.97TB)가 가상 머신(101, Synology)의 QCOW2 파일(약 1.8TB)로 인해 거의 가득 차 있으며, 이로 인해 사용률이 100%가 된 상태임을 알 수 있습니다. A와 B 두 개의 HDD가 RAID로 묶여 VM에 마운트되어 있기 때문에, Synology VM 내부에서 사용하는 가상 디스크가 사실상 전체 스토리지를 소진한 것으로 보입니다.
```


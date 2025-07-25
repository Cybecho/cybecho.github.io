---
title: "VMware EXSi의 대안, OpenStack으로의 VM 마이그레이션 가이드"
date: 2025-07-09T01:34:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "VMware ESXi에서 OpenStack으로의 VM 마이그레이션을 위한 단계별 가이드. 마이그레이션 계획 수립, 기존 환경 감사, 낮은 중요도의 서버부터 시작, 다운타임 고려, DNS TTL 조정, VM 내보내기, 디스크 이미지 포맷 변환, OpenStack으로 이미지 가져오기 및 인스턴스 실행, 마이그레이션 검증 과정을 포함하여 비용 효율적인 클라우드 환경으로의 전환을 지원합니다."
notion_id: "22b1bab9-e3f8-80a3-a573-dad07bf0f583"
notion_url: "https://www.notion.so/VMware-EXSi-OpenStack-VM-22b1bab9e3f880a3a573dad07bf0f583"
---

# VMware EXSi의 대안, OpenStack으로의 VM 마이그레이션 가이드

> **Summary**
> VMware ESXi에서 OpenStack으로의 VM 마이그레이션을 위한 단계별 가이드. 마이그레이션 계획 수립, 기존 환경 감사, 낮은 중요도의 서버부터 시작, 다운타임 고려, DNS TTL 조정, VM 내보내기, 디스크 이미지 포맷 변환, OpenStack으로 이미지 가져오기 및 인스턴스 실행, 마이그레이션 검증 과정을 포함하여 비용 효율적인 클라우드 환경으로의 전환을 지원합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=0GEtiWCAO0g)

### **VMware에서 OpenStack으로: 상세 마이그레이션 가이드 (Learn Linux TV 영상 정리)**

최근 Broadcom의 VMware 라이선스 비용 인상 발표로 인해 많은 기업과 IT 전문가들이 비용 효율적인 대안을 모색하고 있습니다. 그중 가장 강력한 오픈소스 대안인 OpenStack으로의 전환이 활발히 논의되고 있습니다.

이 글은 Learn Linux TV에서 제공한 튜토리얼을 기반으로, VMware ESXi 환경의 가상 머신(VM)을 OpenStack으로 마이그레이션하는 전 과정을 상세히 정리한 것입니다.

### **1. 마이그레이션 계획 및 준비 (중요!)**

성공적인 마이그레이션을 위해서는 기술적인 실행에 앞서 철저한 계획이 필수적입니다.

- **마이그레이션 계획 수립:** 전체 프로세스를 문서화하고, 각 단계별 점검 사항을 정리합니다. 준비는 성공의 핵심입니다.
- **기존 환경 감사:** 현재 사용 중인 VM 목록을 작성하고, 더 이상 필요 없는 VM은 이 기회에 정리(decommission)하여 불필요한 마이그레이션 작업을 줄입니다.
- **중요도가 낮은 서버부터 시작:** 마이그레이션 프로세스에 익숙해지기 위해 개발/테스트용 서버와 같이 중요도가 낮은 VM부터 작업을 시작하는 것이 안전합니다.
- **다운타임 고려 및 소통:** 마이그레이션 중에는 서비스 중단이 발생할 수 있습니다. 예상 다운타임을 계산하고 관련 부서 및 이해관계자들과 명확히 소통해야 합니다.
- **DNS TTL(Time To Live) 값 조정:** 마이그레이션 며칠 전, 해당 서버의 DNS 레코드 TTL 값을 5분 등 짧은 시간으로 미리 변경해두면, IP 주소 변경 시 새로운 주소로의 전파가 빨라져 다운타임을 최소화할 수 있습니다.
- **'스플릿 브레인(Split-Brain)' 방지:** 마이그레이션 완료 후, 기존 VMware의 원본 VM은 반드시 전원을 끄고, 자동으로 재시작되지 않도록 설정을 변경해야 합니다. 그렇지 않으면 구/신규 서버 양쪽에서 서비스가 동시에 운영되어 데이터 불일치 문제가 발생할 수 있습니다.
### **2. VMware ESXi에서 VM 내보내기**

첫 번째 실습 단계는 VMware에서 가상 머신 이미지를 추출하는 것입니다.

1. **로그인 및 VM 종료:** VMware ESXi Host Client에 로그인한 후, 마이그레이션할 가상 머신(`debian-server`)의 전원을 완전히 **종료(Shutdown Guest)**합니다.
1. **VM Export:** 가상 머신 목록에서 해당 VM을 우클릭(또는 Actions 메뉴)하여 **Export**를 선택합니다.
1. **파일 다운로드:** Export 창이 나타나면, `.ovf` (설정 파일)와 `.vmdk` (가상 디스크) 파일의 다운로드를 진행합니다. 이 중 가장 중요한 파일은 가상 디스크인 `.vmdk` 파일입니다.
### **3. 디스크 이미지 포맷 변환 (VMDK → QCOW2)**

OpenStack은 주로 `qcow2` 포맷의 디스크 이미지를 사용하므로, 다운로드한 `.vmdk` 파일을 변환해야 합니다.

1. **변환 유틸리티 설치:** 이 작업은 리눅스 시스템에서 `qemu-img`라는 도구를 사용합니다. 배포판에 따라 아래 명령어로 설치할 수 있습니다.
  - **Fedora/RHEL/Rocky:** `sudo dnf install qemu-img`
  - **Debian/Ubuntu:** `sudo apt install qemu-utils`
1. **변환 명령어 실행:** 터미널에서 다운로드한 `.vmdk` 파일이 있는 디렉토리로 이동한 후, 다음 명령어를 실행합니다.
```shell
qemu-img convert -f vmdk -O qcow2 debian-server-1.vmdk debian-server.qcow2

```

  - `convert`: 변환 작업을 수행합니다.
  - `f vmdk`: 입력(Source) 파일 포맷을 지정합니다.
  - `O qcow2`: 출력(Output) 파일 포맷을 지정합니다.
  - 마지막 두 인자는 각각 원본 파일명과 생성될 파일명입니다.
이 과정이 완료되면 OpenStack에 업로드할 준비가 된 `debian-server.qcow2` 파일이 생성됩니다.

### **4. OpenStack으로 이미지 가져오기 및 인스턴스 실행**

이제 OpenStack 대시보드에서 변환된 이미지를 등록하고 새 가상 머신을 생성합니다.

1. **OpenStack 대시보드 로그인:** OpenStack 환경(영상에서는 OpenMetal 클라우드 사용)에 로그인합니다.
1. **이미지 업로드:**
  - **[Compute] → [Images]** 메뉴로 이동합니다.
  - **[+ Create Image]** 버튼을 클릭합니다.
  - **Image Name:** `debian-server`와 같이 식별하기 쉬운 이름을 입력합니다.
  - **File:** **[Browse]**를 클릭하여 3단계에서 생성한 `debian-server.qcow2` 파일을 선택합니다.
  - **Format:** 드롭다운 메뉴에서 **QCOW2 - QEMU Emulator**를 선택합니다.
  - **Minimum Disk (GB):** 원본 디스크 크기(32GB)와 동일하거나 더 큰 값으로 설정합니다.
  - **[Create Image]** 버튼을 눌러 이미지 업로드를 시작합니다.
1. **인스턴스(VM) 실행:**
  - 이미지가 성공적으로 업로드되면 **[Compute] → [Instances]** 메뉴로 이동합니다.
  - **[Launch Instance]** 버튼을 클릭합니다.
  - **Details 탭:** `Instance Name`을 `debian-server`로 입력합니다.
  - **Source 탭:** **Boot Source**를 **Image**로 설정하고, 방금 업로드한 `debian-server` 이미지를 선택(화살표 아이콘 클릭)합니다.
  - **Flavor 탭:** VM에 할당할 CPU, RAM, 디스크 사양을 선택합니다. 원본 VM과 유사한 사양을 선택하는 것이 좋습니다.
  - **Networks 탭:** VM이 사용할 네트워크를 선택합니다.
  - 모든 설정이 완료되면 **[Launch Instance]** 버튼을 클릭합니다.
### **5. 마이그레이션 검증**

인스턴스 생성이 완료되고 상태가 'Running'으로 변경되면, 마이그레이션이 성공했는지 확인합니다.

1. 생성된 인스턴스의 드롭다운 메뉴에서 **[Console]**을 선택하여 가상 콘솔에 접근합니다.
1. 기존 VMware VM에서 사용하던 사용자 계정과 비밀번호로 로그인합니다.
1. 로그인 후, 마이그레이션 전에 생성했던 테스트 파일(`message.txt`)이 존재하는지, 내용(`Hello World`)이 동일한지 확인합니다.
이 파일과 내용이 그대로 존재한다면, 디스크 이미지 전체가 성공적으로 이전되었음을 의미합니다.

이로써 VMware ESXi에서 OpenStack으로의 가상 머신 마이그레이션 과정이 모두 완료되었습니다. 이 절차를 통해 비용 효율적이고 유연한 클라우드 환경으로의 전환을 성공적으로 이끌 수 있을 것입니다.


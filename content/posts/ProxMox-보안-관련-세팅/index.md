---
title: "ProxMox 보안 관련 세팅"
date: 2024-07-16T07:14:00.000Z
draft: false
tags: ["ProxMox", "보안"]
series: ["Infra & Network", "Let's Homelab!"]
description: "ProxMox 보안을 위해 시스템 업데이트, 알림 설정, TLS 인증서 구성, 데이터 백업 작업 설정, PCI 패스스루 활성화, VM 모범 사례 적용, VPN 사용, 무작위 대입 차단을 위한 fail2ban 설정, 해외 IP 차단을 위한 iptables 규칙 설정 등의 방법을 제안합니다. 추가적으로 강력한 비밀번호와 정기 업데이트 등의 보안 조치도 필요합니다."
notion_id: "a34e26d0-6b6f-4fca-8e75-126ff4b9f248"
notion_url: "https://www.notion.so/ProxMox-a34e26d06b6f4fca8e75126ff4b9f248"
---

# ProxMox 보안 관련 세팅

> **Summary**
> ProxMox 보안을 위해 시스템 업데이트, 알림 설정, TLS 인증서 구성, 데이터 백업 작업 설정, PCI 패스스루 활성화, VM 모범 사례 적용, VPN 사용, 무작위 대입 차단을 위한 fail2ban 설정, 해외 IP 차단을 위한 iptables 규칙 설정 등의 방법을 제안합니다. 추가적으로 강력한 비밀번호와 정기 업데이트 등의 보안 조치도 필요합니다.

---

# 보안 보안 보안

[https://www.youtube.com/watch?v=VAJWUZ3sTSI](https://www.youtube.com/watch?v=VAJWUZ3sTSI)

1. Configure Updates (업데이트 구성): 시스템 업데이트를 설정하고 관리합니다.
1. Enable Notifications (알림 활성화): 시스템 이벤트나 중요 정보에 대한 알림을 설정합니다.
1. Trusted TLS Certificates (신뢰할 수 있는 TLS 인증서): 보안 통신을 위한 TLS 인증서를 구성합니다.
1. Storage Options (저장소 옵션): 데이터 저장 방식과 관련된 설정을 구성합니다.
1. Setup Backup Jobs (백업 작업 설정): 정기적인 데이터 백업 작업을 설정합니다.
1. Enable PCI Passthrough (PCI 패스스루 활성화): 가상 머신이 호스트의 PCI 장치에 직접 접근할 수 있도록 설정합니다.
1. VM best-practices (VM 모범 사례): 가상 머신 운영에 대한 권장 설정과 방법을 적용합니다.
1. (extra tip) VM Templates (추가 팁: VM 템플릿): 가상 머신 생성을 위한 사전 구성된 템플릿을 사용하거나 만듭니다.
# **2FA**

[https://www.storagereview.com/ko/review/proxmox-ve-7-1-security-deep-dive](https://www.storagereview.com/ko/review/proxmox-ve-7-1-security-deep-dive)

# VPN

## → wiseguard

```latex
최근에 ESXI 랜섬웨어 공격 같은 이슈가 생각보다 많이 등장해서 암만 vm이라도 안심할수는 없죠.

열어놔야 한다면은 wireguard같은 vpn을 통해 내부망을 접속해서 ssh로 특정 wireguard ip만 접속하게 제한하고

공개키교환으로만 접속되게 하는식으로 하는게 그나마 안전합니다.

최대한 해커가 네트워크 크롤링을 통해서 쉽게 내부 vm 프로토콜을 파악하고 접근하는걸 막는게 좋아요
```

# 무작위 대입 차단

## → fail2ban

```latex
기본적으로 무작위 대입방식은 뚫릴때까지 하기때문에 시간이 오래걸릴뿐 언제든 뚫릴수있습니다 
가능하면 fail2ban으로 임계치를걸어 차단해놓는다면 그나마 괜찮은것이죠...
```

# 해외 IP차단

## → 내부 ssh 차단

[https://www.clien.net/service/board/cm_nas/11570140](https://www.clien.net/service/board/cm_nas/11570140)

## → 해외 IP 차단

Proxmox에서 해외 IP 주소를 차단하려면 방화벽 규칙을 설정해야 합니다. Proxmox는 기본적으로 Linux 방화벽인 'iptables'를 사용합니다. 다음은 해외 IP 주소를 차단하는 방법입니다:

1. Proxmox 서버에 SSH로 접속하거나 콘솔에 로그인합니다.
1. 'iptables' 명령을 사용하여 해외 IP 주소를 차단하는 규칙을 추가합니다. 예를 들어, 모든 해외 IP 주소를 차단하고 국내 IP 주소만 허용하려면 다음 명령을 실행합니다:
1. 방화벽 규칙을 영구적으로 저장하려면 다음 명령을 실행합니다:
1. 설정한 규칙이 제대로 적용되었는지 확인하려면 다음 명령을 실행합니다:
이제 Proxmox 서버는 지정된 국내 IP 주소 범위에서의 접근만 허용하고 해외 IP 주소로부터의 접근은 차단할 것입니다.

참고로 IP 주소 차단은 접근 제어의 한 방법일 뿐이며, 추가적인 보안 조치(강력한 비밀번호, 정기 업데이트, SSL 인증서 사용 등)도 함께 이루어져야 합니다.


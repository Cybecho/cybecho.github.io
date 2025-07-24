---
title: "ProxMox 보안 관련 세팅"
date: 2024-07-16T07:14:00.000Z
draft: false
tags: ["ProxMox", "보안"]
series: ["Infra & Network", "Let's Homelab!"]
description: "ProxMox 보안을 위해 시스템 업데이트, 알림 설정, TLS 인증서 구성, 데이터 백업 작업 설정, PCI 패스스루 활성화, VM 모범 사례 적용 등의 설정을 권장하며, VPN을 통해 내부망 접근을 제한하고 fail2ban으로 무작위 대입 공격을 차단하는 방법을 설명합니다. 또한, 해외 IP 차단을 위해 iptables를 사용하여 방화벽 규칙을 설정하는 방법도 안내합니다."
notion_id: "a34e26d0-6b6f-4fca-8e75-126ff4b9f248"
notion_url: "https://www.notion.so/ProxMox-a34e26d06b6f4fca8e75126ff4b9f248"
---

# ProxMox 보안 관련 세팅

> **Summary**
> ProxMox 보안을 위해 시스템 업데이트, 알림 설정, TLS 인증서 구성, 데이터 백업 작업 설정, PCI 패스스루 활성화, VM 모범 사례 적용 등의 설정을 권장하며, VPN을 통해 내부망 접근을 제한하고 fail2ban으로 무작위 대입 공격을 차단하는 방법을 설명합니다. 또한, 해외 IP 차단을 위해 iptables를 사용하여 방화벽 규칙을 설정하는 방법도 안내합니다.

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
```plain text
Copy
iptables -A INPUT -s 1.0.0.0/8,14.0.0.0/8,27.0.0.0/8,36.0.0.0/8,39.0.0.0/8,42.0.0.0/8,49.0.0.0/8,58.0.0.0/8,59.0.0.0/8,60.0.0.0/8,61.0.0.0/8,110.0.0.0/8,111.0.0.0/8,112.0.0.0/8,113.0.0.0/8,114.0.0.0/8,115.0.0.0/8,116.0.0.0/8,117.0.0.0/8,118.0.0.0/8,119.0.0.0/8,120.0.0.0/8,121.0.0.0/8,122.0.0.0/8,123.0.0.0/8,124.0.0.0/8,125.0.0.0/8,126.0.0.0/8,175.0.0.0/8,180.0.0.0/8,183.0.0.0/8,202.0.0.0/8,203.0.0.0/8,210.0.0.0/8,211.0.0.0/8,218.0.0.0/8,219.0.0.0/8,220.0.0.0/8,221.0.0.0/8,222.0.0.0/8,223.0.0.0/8 -j ACCEPT
iptables -A INPUT -j DROP

```

  - 위 명령에서 국내 IP 대역을 나타내는 CIDR 표기법으로 된 목록은 필요에 따라 조정할 수 있습니다.
  - 마지막 줄의 'DROP' 규칙은 목록에 없는 모든 IP 주소를 차단합니다.
1. 방화벽 규칙을 영구적으로 저장하려면 다음 명령을 실행합니다:
```plain text
iptables-save > /etc/iptables/rules.v4
```

1. 설정한 규칙이 제대로 적용되었는지 확인하려면 다음 명령을 실행합니다:
```plain text
iptables -L
```

  - 출력 결과에서 추가한 규칙이 표시되는지 확인합니다.
이제 Proxmox 서버는 지정된 국내 IP 주소 범위에서의 접근만 허용하고 해외 IP 주소로부터의 접근은 차단할 것입니다.

참고로 IP 주소 차단은 접근 제어의 한 방법일 뿐이며, 추가적인 보안 조치(강력한 비밀번호, 정기 업데이트, SSL 인증서 사용 등)도 함께 이루어져야 합니다.


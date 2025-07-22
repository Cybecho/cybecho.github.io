---
title: "Public/Private DNS 연동 환경 구축과 패킷 분석의 여정"
date: 2025-03-23
description: "VirtualBox 환경에서 BIND를 이용해 Public/Private DNS 서버를 구축하고, Wireshark 패킷 분석을 통해 DNS 캐시, 재귀적/반복적 질의 등 이론적 지식이 실제 네트워크에서 어떻게 동작하는지 실증적으로 검증한 과정을 기록합니다."
featured_image: "https://cybecho.notion.site/image/attachment%3A7b1e00a3-9862-4e3b-b630-8a10ee4eca8c%3Aimage.png?table=block&id=1bf1bab9-e3f8-8025-ae65-e16fa87bd3c6&spaceId=09ccd4d5-876c-4bba-bbdf-cc77a0a11257&width=1420&userId=&cache=v2"
tags: ["DNS", "Networking", "BIND", "Linux", "Ubuntu", "VirtualBox", "Proxmox", "Wireshark", "Packet Analysis", "On-premise"]
categories: ["Networking"]
---

# Public/Private DNS 연동 환경 구축과 패킷 분석의 여정

[Public DNS와 Private DNS의 우선순위 게임 - 호스트는 DNS 서버를 어떻게 선택할까](https://cybecho.notion.site/Public-DNS-Private-DNS-DNS-1bf1bab9e3f8805cae61ea18890f5d6f?source=copy_link)

네트워크의 핵심인 DNS 시스템을 직접 구축하고 분석하면서, 이론과 실제 사이의 간극을 메우는 과정이었다. Public DNS와 Private DNS가 실제로 어떻게 동작하는지 단순히 책으로 읽는 것과 직접 패킷을 캡처하여 확인하는 것 사이에는 생각보다 큰 차이가 있었다.

## DNS 환경 구축의 시작점

처음 DNS 실습을 계획했을 때 목표는 명확했다. 호스트가 DNS 질의를 수행할 때 Public DNS와 Private DNS 중 어느 것을 우선적으로 참조하는지, 그 동작 원리를 눈으로 직접 확인하는 것이었다. 이를 위해 VirtualBox 환경에서 윈도우 VM을 클라이언트로, 두 대의 우분투 서버를 각각 중간 DNS 서버와 Private DNS 서버로 구성했다.

전체 환경의 IP 구성은 다음과 같았다:

```bash
# 네트워크 구성
윈도우 VM (클라이언트): 10.0.2.15
우분투 서버1 (중간 DNS): 10.0.2.16  
우분투 서버2 (Private DNS): 10.0.2.17

# DNS 서버 설정
윈도우 VM DNS 설정: 10.0.2.16 (우분투 서버1 참조)
```

네트워크 구성에서 첫 번째 고민이 시작되었다. VirtualBox의 브리지 모드를 평소 사용해왔는데, 실습 환경에서는 방화벽 문제로 인터넷 연결이 원활하지 않았다. 이 문제를 해결하기 위해 NAT 모드로 전환하면서 포트포워딩의 필요성을 깨달았다. 하지만 미러서버 간의 내부 통신만 필요한 상황에서는 HostOnly 어댑터를 추가로 구성하는 것이 더 효율적이라는 판단을 내렸다.

## DNS 서버 구성의 실제와 이론

BIND DNS 서버 구성 과정에서 이론적 지식과 실제 구현 사이의 차이점을 경험했다. 우분투 서버1에는 특정 도메인(naver.com, google.com)에 대해서만 응답하는 DNS 서버를 구축했고, 해당 도메인이 아닌 요청들은 우분투 서버2로 전달하도록 설정했다.

우분투 서버1의 BIND 설정은 다음과 같았다:

```bash
# /etc/bind/named.conf.local
zone "naver.com" {
    type master;
    file "/etc/bind/db.naver.com";
};

zone "google.com" {
    type master;
    file "/etc/bind/db.google.com";
};

# /etc/bind/named.conf.options
forwarders {
    10.0.2.17;  # 우분투 서버2로 전달
};

forward only;
```

zone 파일에서는 도메인별로 IP 주소를 직접 지정했다:

```bash
# /etc/bind/db.naver.com
$TTL    604800
@       IN      SOA     naver.com. root.naver.com. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL

@       IN      NS      ns1.naver.com.
@       IN      A       10.0.2.16
www     IN      A       10.0.2.16
```

이 과정에서 zone 파일 작성과 named.conf 설정의 중요성을 실감했다. 특히 SOA 레코드의 각 필드가 DNS 응답 시간과 캐시 동작에 미치는 영향을 실제로 확인할 수 있었다.

특히 인상 깊었던 부분은 DNS 캐시의 동작 방식이었다. 초기 실습에서 Public DNS 영역의 주소를 요청했을 때, 예상과 달리 Private DNS로 요청이 전달되지 않고 Public DNS에서 바로 응답이 반환되는 현상을 관찰했다. 처음에는 설정 오류로 생각했지만, 이것이 DNS 캐시 때문이라는 것을 깨닫게 되었다.

캐시를 확인하고 삭제하는 과정에서 사용한 명령어들이다:

```bash
# Windows에서 DNS 캐시 확인 및 삭제
ipconfig /displaydns     # DNS 캐시 내용 확인
ipconfig /flushdns       # DNS 캐시 삭제

# Linux에서 DNS 캐시 확인 (systemd-resolved)
systemd-resolve --statistics
systemd-resolve --flush-caches
```

DNS 캐시를 지우기 전과 후의 패킷 분석을 통해 캐시가 DNS 질의 경로에 미치는 영향을 명확히 확인할 수 있었다.

## 패킷 분석을 통한 실증적 검증

Wireshark를 활용한 패킷 분석은 이 실습의 핵심이었다. DNS 질의가 어떤 경로로 전달되고, 어떤 서버에서 응답하는지를 패킷 수준에서 추적할 수 있었다. 윈도우 VM에서 발생한 DNS 쿼리가 우분투 서버1을 거쳐 우분투 서버2로 전달되고, 최종적으로 IP 주소가 반환되는 전체 과정을 실시간으로 관찰했다.

패킷 캡처를 위한 기본 설정은 다음과 같았다:

```bash
# tcpdump를 이용한 DNS 패킷 캡처
sudo tcpdump -i any port 53 -v -n

# Wireshark 필터 설정
dns and ip.addr == 10.0.2.15  # 클라이언트 IP만 필터링
dns.flags.response == 0        # DNS 쿼리만 보기
dns.flags.response == 1        # DNS 응답만 보기
```

이 과정에서 DNS의 재귀적 질의와 반복적 질의의 차이점을 실제로 확인할 수 있었다. 클라이언트는 재귀적 질의를 수행하여 최종 답변을 요구했고, 중간 DNS 서버는 필요에 따라 다른 DNS 서버에 반복적 질의를 수행하는 구조였다. 이론적으로 알고 있던 내용이 실제 네트워크 패킷으로 구현되는 모습을 보면서 DNS 시스템의 계층적 구조를 더욱 깊이 이해할 수 있었다.

## VirtualBox와 Proxmox 환경의 차이점

실습을 진행하면서 VirtualBox와 Proxmox 환경 간의 네트워크 설정 차이점도 경험했다. VirtualBox의 NAT, Bridge, HostOnly 모드와 Proxmox의 Bridge, NAT, Bond 모드는 유사한 기능을 제공하지만 세부 설정에서 차이가 있었다.

Proxmox에서 독립된 DNS 테스트 네트워크를 구성할 때 사용한 설정이다:

```bash
# Proxmox 독립 브리지 생성 (/etc/network/interfaces)
auto vmbr1
iface vmbr1 inet static
    address 192.168.100.1/24
    bridge-ports none
    bridge-stp off
    bridge-fd 0
    # 물리 포트에 연결하지 않음으로써 폐쇄망 구성

# VM 네트워크 설정
net0: virtio=xx:xx:xx:xx:xx:xx,bridge=vmbr1
```

특히 Proxmox의 기본 vmbr0 브리지 설정과 독립된 폐쇄 네트워크 구성 방법을 학습하면서, 가상화 플랫폼에 따른 네트워크 관리 방식의 차이를 이해하게 되었다.

## 리눅스 저장소 생태계와의 연관성

DNS 실습과 병행하여 진행한 Rocky Linux 미러서버 구축 과정도 네트워킹 이해에 도움이 되었다. RHEL 클라이언트가 Rocky Linux 미러서버를 통해 패키지를 설치하는 과정에서, 네트워크 경로 설정의 중요성을 다시 한번 확인했다.

미러서버 구축 시 사용한 저장소 설정이다:

```bash
# /etc/yum.repos.d/rocky-local.repo
[rocky-baseos]
name=Rocky Linux BaseOS Local Mirror
baseurl=file:///mnt/rocky-iso
gpgcheck=1
enabled=1

[rocky-powertools]
name=Rocky Linux PowerTools Online
baseurl=http://10.0.2.17/rocky/PowerTools/
gpgcheck=1
enabled=1
```

ISO 기반 불변 저장소와 PowerTools 온라인 저장소를 구분하여 운영하는 하이브리드 구조에서도 DNS 해석이 올바르게 이루어져야 패키지 다운로드가 가능했다. 특히 EPEL, Rocky Linux, RHEL의 저장소 생태계를 이해하는 과정에서, 같은 패키지 설치 명령어를 사용하더라도 실제로는 완전히 다른 미러에서 패키지를 가져온다는 점이 흥미로웠다.

## 온프레미스 환경의 현실적 고려사항

실습을 통해 온프레미스 환경에서 DNS 서버를 운영할 때의 현실적인 고려사항들도 파악할 수 있었다. 단순히 기술적 구현만으로는 부족하고, 보안, 가용성, 관리 편의성을 모두 고려해야 한다는 점이 중요했다. 특히 엔터프라이즈 환경에서는 서비스 버전의 종속성, 스토리지 비용, 인력 투입 비용, 통신 비용 등 다양한 요소를 종합적으로 검토해야 한다는 것을 깨달았다.

DNS 서버의 고가용성을 위한 설정도 고려해야 했다:

```bash
# BIND9 로그 설정 (/etc/bind/named.conf.local)
logging {
    channel query_log {
        file "/var/log/bind/query.log" versions 3 size 5m;
        severity info;
        print-category yes;
        print-severity yes;
        print-time yes;
    };
    category queries { query_log; };
};

# DNS 서버 모니터링을 위한 쿼리 통계
statistics-channels {
    inet 127.0.0.1 port 8053 allow { 127.0.0.1; };
};
```

## 기술적 성찰과 향후 방향

이번 실습을 통해 네트워크 기초 지식의 중요성을 다시 한번 확인했다. 클라우드 환경이 대세인 현재에도 온프레미스 네트워킹에 대한 깊은 이해는 필수적이다. DNS, DHCP, 라우팅과 같은 기본 프로토콜들이 어떻게 동작하는지 알아야 클라우드에서도 네트워크를 올바르게 설계하고 문제를 해결할 수 있다.

앞으로 AWS와 같은 클라우드 환경을 공부하게 되더라도, 이번 실습에서 얻은 온프레미스 네트워킹 지식이 VPC 설계, Route 53 구성, 하이브리드 클라우드 연결 등에서 기반이 될 것이다. 네트워크는 결국 물리든 가상이든 같은 원리로 동작하기 때문이다.

패킷 분석을 통해 얻은 경험은 특히 소중하다. 문제가 발생했을 때 추측이 아닌 실제 데이터를 바탕으로 원인을 파악하고 해결책을 찾을 수 있는 능력은 인프라 엔지니어에게 필수적인 역량이다. 이론적 지식과 실제 구현, 그리고 문제 해결 경험이 조화를 이루어야 진정한 네트워킹 전문성을 갖출 수 있다는 것을 이번 실습을 통해 배웠다.
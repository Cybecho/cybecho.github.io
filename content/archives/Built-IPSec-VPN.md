---
title: "IPSec VPN 암호화 터널 구축의 여정: 라우팅에서 ESP까지"
date: 2025-02-18
description: "네트워크 라우팅의 기초부터 시작해 GNS3와 Linux 환경에서 IPSec VPN을 직접 구축하고, Wireshark를 이용한 ESP 패킷 분석을 통해 암호화 터널의 동작 원리를 깊이 있게 탐구한 과정을 기록합니다."
featured_image: "https://cybecho.notion.site/image/attachment%3Af600c1df-aae9-4cca-ba7e-df6c002dab83%3Aimage.png?table=block&id=1a31bab9-e3f8-80c5-97eb-fbf2db08393f&spaceId=09ccd4d5-876c-4bba-bbdf-cc77a0a11257&width=1360&userId=&cache=v2"
tags: ["IPSec", "VPN", "Networking", "Routing", "GNS3", "Linux", "strongSwan", "Cisco", "Wireshark", "Packet Analysis", "Security", "Tunneling"]
categories: ["Networking"]
---

# IPSec VPN 암호화 터널 구축의 여정: 라우팅에서 ESP까지

어쩌면 이 모든 프로젝트가 가능했던 이유는 '라우팅'일지도 모르겠다. 네트워크의 기본 개념부터 시작해서 복잡한 IPSec VPN 구축까지, 모든 것이 결국 패킷이 어떤 경로로 흘러가는지에 대한 이해에서 출발했기 때문이다.

## 네트워크 기초에서 시작된 의문들

처음 네트워크를 공부할 때, 포워딩과 라우팅의 차이점을 명확히 이해하지 못했다. 단순히 "패킷을 목적지로 전달하는 것"이라고만 생각했지, 실제로는 두 개의 완전히 다른 개념이라는 것을 깨닫는 데 시간이 걸렸다. 포워딩은 라우터 한 대에서 입력 포트로 들어온 패킷을 어떤 출력 포트로 내보낼지 결정하는 국소적인 동작이고, 라우팅은 패킷이 소스부터 목적지까지 가는 전체 경로를 계획하는 거시적인 과정이었다.

라우팅 알고리즘을 공부하면서 다익스트라 알고리즘이 네트워크에서 어떻게 활용되는지 이해했다. 각 라우터 간의 링크에는 비용(cost)이 있고, 이 비용은 단순한 거리가 아니라 혼잡도, 대역폭, 지연시간 등 다양한 요소를 반영한다. 이론적으로는 간단해 보였지만, 실제 네트워크 환경에서는 동적으로 변하는 조건들을 고려해야 한다는 복잡성이 있었다.

```bash
# 라우팅 테이블 확인
ip route show
netstat -rn

# 특정 목적지까지의 경로 추적
traceroute 8.8.8.8
mtr google.com

# 라우팅 테이블에 정적 라우트 추가
ip route add 192.168.100.0/24 via 10.0.0.1
```

## VPN과 프록시의 개념적 차이점 정립

VPN을 구축하기 전에 먼저 VPN과 포워드 프록시의 차이점을 명확히 할 필요가 있었다. 둘 다 클라이언트와 목적지 서버 사이에서 중개자 역할을 한다는 점에서는 비슷하지만, 그 목적과 작동 방식에는 근본적인 차이가 있었다.

포워드 프록시는 특정 클라이언트를 위한 '대리인' 역할을 한다. 주로 조직 내부에서 웹 사용을 관리하고 제어하는 데 사용되며, HTTP/HTTPS 트래픽에 특화되어 있다. 반면 VPN은 클라이언트와 VPN 서버 간에 암호화된 터널을 만들어 모든 인터넷 트래픽을 이 터널을 통과시킨다.

여기서 중요한 깨달음이 있었다. VPN에서 암호화의 중요성이다. 단순히 트래픽을 우회시키는 것이 아니라, 데이터 자체를 보호하는 것이 핵심이었다. 이것이 IPSec의 존재 이유이기도 했다.

## 네트워크 가상화 환경에서의 시행착오

실습 환경을 구축하면서 VirtualBox와 Proxmox의 네트워크 설정 차이점을 깊이 경험했다. VirtualBox에서는 NAT, Bridge, HostOnly 모드를 사용했는데, IPSec VPN 실습을 위해서는 VM들 간의 통신이 가능하면서도 외부 네트워크와는 격리된 환경이 필요했다.

```bash
# VirtualBox 네트워크 설정
# VM1 (Client): NAT + Host-Only (192.168.56.101)
# VM2 (VPN Server): NAT + Host-Only (192.168.56.102)  
# VM3 (Target Server): Host-Only (192.168.56.103)

# Proxmox 독립 브리지 설정
auto vmbr1
iface vmbr1 inet static
    address 192.168.100.1/24
    bridge-ports none
    bridge-stp off
    bridge-fd 0
```

처음에는 Bridge 모드를 사용했지만, 실제 네트워크 환경의 방화벽 정책 때문에 예상과 다른 동작을 보였다. 이를 해결하기 위해 NAT 모드로 전환하고 포트포워딩을 설정해야 했다. 하지만 IPSec VPN의 특성상 내부 서버 간 통신이 중요했기 때문에, HostOnly 어댑터를 추가로 구성하는 것이 더 효율적이었다.

## GNS3 환경에서의 토폴로지 구성

본격적인 IPSec VPN 실습을 위해서는 GNS3를 활용한 네트워크 토폴로지 구성이 필요했다. 실제 라우터 환경을 시뮬레이션할 수 있는 GNS3에서 Site-to-Site VPN을 구축하면서, 이론과 실제 구현 사이의 간극을 체감할 수 있었다.

토폴로지는 다음과 같이 구성했다:

```bash
# 네트워크 토폴로지
Site A (192.168.1.0/24) --- Router A --- Internet --- Router B --- Site B (192.168.2.0/24)
                              |                        |
                         IPSec Tunnel
```

각 사이트의 내부 네트워크는 서로 다른 서브넷을 사용하고, 두 라우터 간에 IPSec 터널을 설정하여 안전한 통신을 가능하게 했다. 이 과정에서 중요했던 것은 라우팅 테이블 설정이었다. IPSec 터널이 생성되면, 암호화된 트래픽을 위한 별도의 라우팅 경로가 필요했다.

## IPSec 설정의 핵심: Phase 1과 Phase 2

IPSec VPN 구성에서 가장 복잡했던 부분은 ISAKMP(Internet Security Association and Key Management Protocol) 설정이었다. IPSec은 두 단계의 협상 과정을 거친다.

Phase 1에서는 IKE(Internet Key Exchange) SA를 설정한다:

```bash
# Cisco 라우터 IPSec 설정 예시
crypto isakmp policy 10
 authentication pre-share
 encryption aes 256
 hash sha256
 group 14
 lifetime 3600

crypto isakmp key MySecretKey address 203.0.113.2
```

Phase 2에서는 IPSec SA를 설정하여 실제 데이터 암호화를 담당한다:

```bash
crypto ipsec transform-set ESP-AES-SHA esp-aes 256 esp-sha256-hmac
crypto map VPN_MAP 10 ipsec-isakmp
 set peer 203.0.113.2
 set transform-set ESP-AES-SHA
 match address 101

access-list 101 permit ip 192.168.1.0 0.0.0.255 192.168.2.0 0.0.0.255
```

이 설정들을 이해하는 데 시간이 걸렸다. 특히 Transform Set의 개념과 Access List를 통한 트래픽 매칭이 중요했다. Transform Set은 어떤 암호화 알고리즘을 사용할지 정의하고, Access List는 어떤 트래픽을 암호화할지 결정한다.

## ESP 패킷 분석의 실증적 접근

IPSec의 핵심인 ESP(Encapsulating Security Payload) 패킷의 동작 원리를 이해하기 위해 실제 패킷을 캡처하고 분석했다. 이 과정에서 흥미로운 사실을 발견했다.

```bash
# 패킷 캡처 및 분석
tcpdump -i any -w ipsec_capture.pcap esp
wireshark ipsec_capture.pcap

# ESP 패킷 구조 분석
# [Original IP Header][ESP Header][Encrypted Payload][ESP Trailer][Authentication Data]
```

mtr을 사용해 VPN 연결된 서버들 간의 홉을 추적해보니 예상과 다른 결과가 나왔다. IPSec으로 암호화된 트래픽은 중간 홉들이 암호화되어 보이지 않았다. 이것이 IPSec의 보안 강점이면서도 네트워크 문제 해결 시 어려움을 주는 부분이었다.

AWS 환경에서 VPN을 구축할 때도 같은 현상을 관찰했다. 같은 계정, 같은 리전의 VPC 간 통신에서는 홉이 거의 보이지 않았지만, 외부 네트워크(8.8.8.8)로 나갈 때는 여러 홉이 나타났다. 이는 AWS의 내부 네트워크 구조와 IPSec 암호화의 특성을 동시에 보여주는 결과였다.

## SLA와 EEM을 통한 네트워크 자동화

IPSec VPN 환경에서 중요한 것은 연결 상태의 모니터링과 장애 시 자동 복구였다. 이를 위해 SLA(Service Level Agreement)와 EEM(Embedded Event Manager)을 활용했다.

```bash
# IP SLA 설정으로 VPN 터널 상태 모니터링
ip sla 1
 icmp-echo 192.168.2.1 source-interface FastEthernet0/0
 frequency 10
ip sla schedule 1 life forever start-time now

# EEM을 이용한 자동 복구 스크립트
event manager applet TUNNEL_DOWN
 event syslog pattern "CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is OFF"
 action 1.0 cli command "enable"
 action 2.0 cli command "clear crypto sa"
 action 3.0 cli command "debug crypto isakmp"
```

Shell Script를 이용해 EEM 기능을 더욱 확장했다. 네트워크 상태를 주기적으로 체크하고, 특정 조건에서 자동으로 VPN 터널을 재시작하거나 백업 경로로 전환하는 스크립트를 작성했다.

```bash
#!/bin/bash
# VPN 터널 상태 체크 및 자동 복구 스크립트

check_tunnel() {
    ping -c 3 192.168.2.1 > /dev/null 2>&1
    return $?
}

restart_tunnel() {
    logger "VPN Tunnel Down - Restarting IPSec"
    ipsec down tunnel1
    sleep 5
    ipsec up tunnel1
}

while true; do
    if ! check_tunnel; then
        restart_tunnel
    fi
    sleep 30
done
```

## Linux 환경에서의 IPSec 구현

Cisco 라우터 환경뿐만 아니라 Linux 서버에서도 IPSec VPN을 구축해보았다. strongSwan을 사용한 구현에서는 설정 파일의 구조가 Cisco와는 달랐지만, 기본 개념은 동일했다.

```bash
# strongSwan 설정 (/etc/ipsec.conf)
config setup
    strictcrlpolicy=no
    uniqueids=no

conn site-to-site
    type=tunnel
    authby=secret
    left=203.0.113.1
    leftsubnet=192.168.1.0/24
    right=203.0.113.2
    rightsubnet=192.168.2.0/24
    ike=aes256-sha256-modp2048
    esp=aes256-sha256
    auto=start

# 사전 공유 키 설정 (/etc/ipsec.secrets)
203.0.113.1 203.0.113.2 : PSK "MySecretKey"
```

Linux 환경에서는 iptables와의 연동도 중요했다. IPSec 트래픽을 위한 방화벽 규칙과 NAT 설정이 올바르게 되어야 정상적인 통신이 가능했다.

```bash
# IPSec 관련 iptables 규칙
iptables -A INPUT -p esp -j ACCEPT
iptables -A INPUT -p udp --dport 500 -j ACCEPT
iptables -A INPUT -p udp --dport 4500 -j ACCEPT
iptables -A FORWARD -s 192.168.1.0/24 -d 192.168.2.0/24 -j ACCEPT
iptables -A FORWARD -s 192.168.2.0/24 -d 192.168.1.0/24 -j ACCEPT
```

## 터널링 개념의 확장

IPSec VPN을 이해하면서 터널링의 개념이 단순히 VPN에만 국한되지 않는다는 것을 깨달았다. SSH 터널링, GRE 터널, IPv6 over IPv4 터널 등 다양한 형태의 터널링 기술들이 모두 비슷한 원리로 동작한다.

SSH 터널링을 직접 구현해보면서 이를 더욱 명확히 이해할 수 있었다. MobaXterm에서 JumpHost를 통한 접속도 본질적으로는 터널링의 한 형태였다. 배스천 호스트를 통해 내부 서버에 접속할 때, 실제로는 SSH 터널을 통해 트래픽이 전달되는 구조였다.

```bash
# SSH 터널링 설정
ssh -L 8080:192.168.1.100:80 user@jumphost.example.com

# 포트 포워딩을 통한 터널 설정
ssh -L local_port:target_host:target_port jump_user@jump_host
```

## 패킷 분석을 통한 검증

모든 이론적 학습의 마지막 단계는 실제 패킷 분석을 통한 검증이었다. Wireshark를 사용해 IPSec 패킷의 구조를 분석하고, ESP 헤더와 암호화된 페이로드를 직접 확인했다. 

흥미롭게도 IPSec 터널이 활성화된 상태에서는 원본 IP 패킷이 ESP 페이로드로 완전히 캡슐화되어, 중간 네트워크 장비에서는 실제 통신 내용을 전혀 볼 수 없었다. 이것이 IPSec의 핵심 보안 기능이었다.

```bash
# 패킷 분석을 위한 필터 설정
# ESP 패킷만 필터링
esp

# ISAKMP/IKE 협상 패킷 필터링  
isakmp

# 특정 IP 간의 IPSec 트래픽 필터링
host 192.168.1.1 and host 192.168.2.1 and esp
```

## 기술적 성찰과 네트워크 기초의 중요성

IPSec VPN을 구축하면서 깨달은 가장 중요한 점은 모든 고급 네트워크 기술이 기본 원리 위에 구축된다는 것이었다. 라우팅, 서브네팅, NAT, 방화벽 등의 기초 개념을 정확히 이해하지 못하면 IPSec 같은 복잡한 기술을 제대로 구현할 수 없다.

특히 라우팅의 중요성을 다시 한번 실감했다. IPSec 터널이 설정되어도 라우팅 테이블이 올바르지 않으면 패킷이 암호화 경로로 전달되지 않는다. 암호화된 터널과 일반 인터넷 트래픽 사이의 라우팅 우선순위를 정확히 설정해야 의도한 대로 동작한다.

앞으로 AWS의 VPC, VPN Gateway, Transit Gateway 등을 공부하게 될 때도 이번에 익힌 온프레미스 IPSec 지식이 기반이 될 것이다. 클라우드 환경에서는 설정이 간소화되어 있지만, 내부적으로는 동일한 IPSec 프로토콜과 암호화 기술을 사용하기 때문이다. 네트워크 문제가 발생했을 때 근본 원리를 이해하고 있어야 효과적으로 해결할 수 있다.

결국 이 모든 여정은 패킷 하나하나가 어떤 경로로, 어떤 과정을 거쳐 목적지에 도달하는지를 이해하는 것이었다. 라우팅에서 시작된 호기심이 IPSec VPN이라는 복잡한 기술까지 이어졌고, 그 과정에서 네트워크의 전체적인 그림을 그릴 수 있게 되었다.
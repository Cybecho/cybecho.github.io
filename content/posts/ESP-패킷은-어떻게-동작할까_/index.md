---
title: "ESP 패킷은 어떻게 동작할까?"
date: 2025-02-20T04:39:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!"]
description: "ESP 패킷의 작동 원리를 설명하며, IPsec VPN 환경에서의 통신 방식과 디폴트 라우팅의 역할을 분석합니다. ISP는 내부 네트워크 정보를 알지 못하지만, 외부 IP 헤더를 통해 패킷을 전달할 수 있습니다. 현재 구성은 Tunnel Mode로, IPsec 캡슐화 방식과 Wireshark 분석을 통해 확인됩니다. 각 라우터는 모르는 목적지를 ISP로 보내도록 설정되어 있어, 복잡한 라우팅 없이도 통신이 가능합니다."
notion_id: "1a01bab9-e3f8-8053-9f61-ec583099a965"
notion_url: "https://www.notion.so/ESP-1a01bab9e3f880539f61ec583099a965"
---

# ESP 패킷은 어떻게 동작할까?

> **Summary**
> ESP 패킷의 작동 원리를 설명하며, IPsec VPN 환경에서의 통신 방식과 디폴트 라우팅의 역할을 분석합니다. ISP는 내부 네트워크 정보를 알지 못하지만, 외부 IP 헤더를 통해 패킷을 전달할 수 있습니다. 현재 구성은 Tunnel Mode로, IPsec 캡슐화 방식과 Wireshark 분석을 통해 확인됩니다. 각 라우터는 모르는 목적지를 ISP로 보내도록 설정되어 있어, 복잡한 라우팅 없이도 통신이 가능합니다.

---

![Image](image_471b01657458.png)

🎥 [동영상 보기](https://www.youtube.com/watch?v=bkcrSaJ_qxo)

# 실습 의문점 정리 및 ESP 헤더 동작과정 분석

## >> IPsec VPN 환경에서의 통신 방식에 대한 의문

### >>>> ISP는 아무런 라우팅을 안했는데, 패킷이 목적지로 어떻게 이동하는가?

![Image](image_51e42cff2dc7.png)

R1과 HQ 간의 통신이 정상적으로 이루어지는 것을 확인했습니다. 

그런데, ISP는 단순히 연결된(Connected) 라우팅만 가지고 있는데, 어떻게 디폴트 라우팅만으로 각 단말 노드들이 서로 통신할 수 있는 것일까?


### >>>> 의문점의 핵심

- **ISP의 역할:** ISP는 내부 네트워크(1.1.1.x, 2.2.2.x, 3.3.3.x)에 대한 정보를 전혀 알지 못하는데, 어떻게 패킷을 목적지까지 전달할 수 있는 걸까?
  - `디폴트 라우팅을 보내면 된다는데..`
- **디폴트 라우팅의 역할:** 그렇다면, 각 라우터가 "모르는 목적지"로 가는 패킷을 ISP(또는 VPN)로 보내도록 설정하는 디폴트 라우팅이 어떤 원리로 통신을 가능하게 하는 걸까?
  - `ESP 패킷과 연관이 있다는데…`


## >> 개념 정리 및 패킷 분석

### >>>> 핵심 개념: 디폴트 라우팅, 캡슐화, IPsec 터널

[conf t
crypto map HQ-VPN 20 ipsec-isakmp
match address TOR2
set peer 1.1.100.9
set transform-set BABO
reverse-route static
end
](https://www.notion.so/19f1bab9e3f8808ab5edfb43cff9731f#19f1bab9e3f880088687d68a83130e34) 

- **디폴트 라우팅:** 각 라우터(R1, R2, HQ, VPN)는 자신의 라우팅 테이블에 없는 목적지로 향하는 패킷을 "모르는 목적지는 ISP(또는 VPN) 라우터로 보내자"라는 규칙에 따라 디폴트 라우트로 전달합니다.
- **캡슐화:** 실제 데이터 통신은 IPsec VPN 터널을 통해 이루어지며, 내부 IP 패킷은 캡슐화되어 외부 IP 주소(1.1.100.x)를 사용하는 트래픽으로 변환됩니다.
- **IPsec 터널:** VPN 터널(IPsec)은 내부 IP 패킷을 암호화하고, ISP가 처리할 수 있는 외부 IP 헤더를 추가하여 캡슐화합니다.

### >>>> 통신 과정 분석 (R1 → HQ 통신 예시)

1. **패킷 생성:** R1 내부 PC(1.1.1.10)에서 HQ 내부 서버(3.3.3.100)로 통신을 시도합니다. (원본 패킷: `SRC=1.1.1.10 → DST=3.3.3.100`)
1. **R1 라우터 처리:** R1은 3.3.3.x 대역이 라우팅 테이블에 없으므로 디폴트 라우트(ISP 쪽)로 패킷을 보냅니다. 이때, IPsec 규칙에 따라 패킷을 캡슐화하고 새로운 외부 IP 헤더를 추가합니다. (외부 헤더: `SRC=1.1.100.5 → DST=1.1.100.1`)
1. **ISP 전달:** ISP는 외부 헤더(1.1.100.5 → 1.1.100.1)만 보고 VPN 라우터(1.1.100.1)까지 패킷을 전달합니다. ISP는 내부 IP를 알 필요가 없습니다.
1. **VPN 라우터/HQ 라우터 처리:** VPN 라우터/HQ 라우터는 외부 헤더를 제거하고 내부 IP 정보(1.1.1.10 → 3.3.3.100)를 확인합니다. 목적지(3.3.3.100)가 자신에게 연결된 네트워크이므로 해당 방향으로 패킷을 보냅니다.
1. **응답 패킷:** 응답 패킷도 동일한 과정을 거쳐 R1까지 전달됩니다.
![Image](image_a4bcf23cc633.png)


### >>>> ISP는 내부망 정보를 몰라도 통신이 가능한 이유

ISP는 IPsec 트래픽의 외부 헤더(1.1.100.x)만 보고 패킷을 중계하며, 실제 내부 IP 주소 통신은 VPN 터널 안에서 캡슐화되어 처리됩니다. 각 라우터가 디폴트 라우트를 통해 "모르는 IP는 ISP로" 보내고, VPN/IPsec 설정에서 내부 IP를 외부 IP로 캡슐화하기 때문에 ISP는 특별한 라우팅 없이도 목적지로 패킷을 전달할 수 있습니다.

![Image](image_4d6b7ed63ab4.png)



## >> IPsec 모드에 대한 분석

이렇게 정리하여, ISP가 왜 라우팅을 안해도 되는지가 이해가 어느정도 갔습니다, 하지만 궁금증이 이어지면서,  현재 설정된 IPsec VPN이 Transport Mode인지 Tunnel Mode인지 궁금해졌습니다.


패킷 구조만 보면 터널모드겠지만, 저희는 이번에 따로 터널을 설정해준기억이 없는데 과연 진짜 터널 모드인것일까? 라는 의문에서 시작된 문제 분석입니다.

![Image](image_8bc71e03d715.png)

### >>>> IPsec 모드 분석

**결론: 현재 구성은 Tunnel Mode입니다.**

**이유:**

1. **Site-to-Site VPN:** Site-to-Site VPN 구성은 Tunnel Mode를 기본으로 사용합니다.
1. **Cisco IOS 기본 동작:** `crypto map` 구성 시 자동으로 Tunnel Mode가 적용됩니다.
1. **IP 헤더 캡슐화 방식:** Tunnel Mode에서는 원본 IP 헤더 전체가 ESP 헤더와 새 IP 헤더로 감싸집니다. 현재 구성에서 ISP를 지날 때 외부 IP 헤더만 노출되고 내부 IP는 캡슐화되어 숨겨지는 것은 Tunnel Mode의 전형적인 작동 방식입니다.
1. **Wireshark 분석:** 외부 IP(`1.1.100.x`) 간 ESP 패킷 교환만 보이고 내부 IP는 감춰져 있어 Tunnel Mode임을 확인할 수 있습니다.

### >>>> Transport Mode vs. Tunnel Mode 비교

| 구분 | Transport Mode | Tunnel Mode |
| 사용 사례 | 호스트 ↔ 호스트 직접 암호화 | 라우터/방화벽 등 중간 장비 간 암호화("Site-to-Site") |
| 암호화 범위 | 원본 IP 헤더 일부 제외, 데이터(페이로드) 암호화 | 원본 IP 헤더 포함 전체 패킷 암호화 후 새 IP 헤더 추가 |
| 장점 | 호스트 IP 그대로 노출 가능, IP 헤더 정보 일부 노출(효율적) | 내부 IP 전부 감춰짐(보안성 높음), 서로 다른 내부 네트워크 연결에 적합 |
| 단점 | 종단 호스트가 VPN 기능 수행, 내부 IP가 ISP에 노출될 가능성 있음 | 새 IP 헤더 추가로 패킷 크기 증가(오버헤드), 라우터나 방화벽 등 중간 장비가 VPN 관리 필요 |



## >> 최종 결론

- **통신 원리:** 각 라우터의 디폴트 라우팅, IPsec 캡슐화, 그리고 ISP의 외부 IP 기반 중계 덕분에 복잡한 라우팅 설정 없이도 통신이 가능합니다.
- **IPsec 모드:** 현재 구성은 Site-to-Site VPN이며, Cisco 장비의 기본 설정 및 IP 헤더 캡슐화 방식을 고려할 때 Tunnel Mode로 동작합니다.
- **Wireshark 분석:** 현재 Wireshark 패킷의 흐름 또한 Tunnel Mode를 가리키고 있습니다.


# 토폴로지 구성

![Image](image_2c25e5b414c9.png)

## >> 라우터 IP 추가

**R1**

```shell
conf t
interface f0/0
 ip address 1.1.100.5 255.255.255.252
 no shutdown
 exit

interface f0/1
 ip address 192.168.100.254 255.255.255.0
 no shutdown
 exit

interface loopback 0
 ip address 1.1.1.1 255.255.255.0
 no shutdown
end

```

**R2**

```shell
conf t
interface f0/0
 ip address 1.1.100.9 255.255.255.252
 no shutdown
 exit

interface f0/1
 ip address 192.168.101.254 255.255.255.0
 no shutdown
 exit

interface loopback 0
 ip address 2.2.2.2 255.255.255.0
 no shutdown
end

```

**ISP**

```shell
conf t
interface f0/0
 ip address 1.1.100.2 255.255.255.252
 no shutdown
 exit

interface f0/1
 ip address 1.1.100.6 255.255.255.252
 no shutdown
 exit

interface f1/0
 ip address 1.1.100.10 255.255.255.252
 no shutdown
end

```

**VPN**

```shell
conf t
interface f0/0
 ip address 1.1.100.1 255.255.255.252
 no shutdown
 exit

interface f0/1
 ip address 10.1.12.2 255.255.255.252
 no shutdown
end

```

**HQ**

```shell
conf t
interface f0/0
 ip address 10.1.12.1 255.255.255.252
 no shutdown
 exit

interface f0/1
 ip address 192.168.102.254 255.255.255.0
 no shutdown
 exit

interface loopback 0
 ip address 3.3.3.3 255.255.255.0
 no shutdown
end

```


## **>> 라우팅 - OSPF**

루프백 네트워크는 공유하지 않도록 설정

![Image](image_7da4e9290c19.png)

**VPN (OSPF 설정)**

```shell
conf t
router ospf 1
net 10.1.12.2 0.0.0.0 ar 0
redistribute static subnets
end

```

**HQ**

```shell
conf t
router ospf 1
net 3.3.3.3 0.0.0.0 ar 0
net 10.1.12.1 0.0.0.0 ar 0
net 192.168.102.0 0.0.0.255 ar 0
end

```


## **>> 라우팅 - Static**

![Image](image_fa154c55c7e1.png)

**R1**

```shell
conf t
ip route 0.0.0.0 0.0.0.0 1.1.100.6
end

```

**R2**

```shell
conf t
ip route 0.0.0.0 0.0.0.0 1.1.100.10
end

```

**VPN**

```shell
conf t
ip route 0.0.0.0 0.0.0.0 1.1.100.2
end

```

**HQ**

```shell
conf t
ip route 0.0.0.0 0.0.0.0 10.1.12.2
end

```


## >> ACL 구성

### >>>> VPN 라우터

**ospf 안쓸건데, 허용이 굳이 필요한가..?**

```shell
conf t
ip access-list extended ACL
permit ospf host 1.1.100.2 any
deny ip 10.1.12.0 0.0.0.255 any
end

```

**GRE프로토콜도 왔다갔다 할 수 있게 정책을 넣어두자**

```shell
conf t
ip access-list extended ACL
permit udp host 1.1.100.5 host 1.1.100.1 eq isakmp
permit esp host 1.1.100.5 host 1.1.100.1
permit udp host 1.1.100.9 host 1.1.100.1 eq isakmp
permit esp host 1.1.100.9 host 1.1.100.1
end

```

이제 VPN 인터페이스를 적용해보자

```javascript
conf t
int f0/0
ip access-group ACL in
end

```


### >>>> R1

**ospf 안쓸건데, 허용이 굳이 필요한가..?**

```shell
conf t
ip access-list extended ACL
permit ospf host 1.1.100.6 any
end

```

**GRE프로토콜도 왔다갔다 할 수 있게 정책을 넣어두자**

```shell
conf t
ip access-list extended ACL
permit udp host 1.1.100.1 host 1.1.100.5 eq isakmp
permit esp host 1.1.100.1 host 1.1.100.5
end

```

이제 VPN 인터페이스를 적용해보자

```javascript
conf t
int f0/0
ip access-group ACL in
end

```


### >>>> R2

**ospf 안쓸건데, 허용이 굳이 필요한가..?**

```shell
conf t
ip access-list extended ACL
permit ospf host 1.1.100.10 any
end

```

**GRE프로토콜도 왔다갔다 할 수 있게 정책을 넣어두자**

```shell
conf t
ip access-list extended ACL
permit udp host 1.1.100.1 host 1.1.100.9 eq isakmp
permit esp host 1.1.100.1 host 1.1.100.9
end

```

이제 VPN 인터페이스를 적용해보자

```javascript
conf t
int f0/0
ip access-group ACL in
end

```



## >> IPSec VPN을 위한 ISAKMP(IKE) 정책 설정

### **>>>> VPN 라우터**

페이즈 1

```bash
conf t
crypto isakmp policy 10
encryption aes 256
authentication pre-share
group 5
lifetime 3600
hash sha
end

sh crypto isakmp policy

```

```bash
conf t
crypto isakmp key 0 cloud address 1.1.100.5
crypto isakmp key 0 cloud address 1.1.100.9
end

```

```bash
conf t
ip access-list extended TOR1
permit ip 3.3.3.0 0.0.0.255 1.1.1.0 0.0.0.255
permit ip 192.168.102.0 0.0.0.255 192.168.100.0 0.0.0.255
end

```

```bash
conf t
ip access-list extended TOR2
permit ip 3.3.3.0 0.0.0.255 2.2.2.0 0.0.0.255
permit ip 192.168.102.0 0.0.0.255 192.168.101.0 0.0.0.255
end

```

페이즈 2

```bash
conf t
crypto ipsec transform-set BABO esp-aes esp-sha-hmac
end

```

```bash
conf t
crypto map HQ-VPN 10 ipsec-isakmp
match address TOR1
set peer 1.1.100.5
set transform-set BABO
**reverse-route static
**end

```

```bash
conf t
crypto map HQ-VPN 20 ipsec-isakmp
match address TOR2
set peer 1.1.100.9
set transform-set BABO
**reverse-route static
**end

```

```bash
conf t
int f0/0
crypto map HQ-VPN
end

```


### **>>>> R1**

페이즈 1

```bash
conf t
crypto isakmp policy 10
encryption aes 256
authentication pre-share
group 5
lifetime 3600
hash sha
end

sh crypto isakmp policy

```

```bash
conf t
crypto isakmp key 0 cloud address 1.1.100.1
end

```

```bash
conf t
ip access-list extended TOVPN
permit ip 1.1.1.0 0.0.0.255 3.3.3.0 0.0.0.255
permit ip 192.168.100.0 0.0.0.255 192.168.102.0 0.0.0.255
end

```

페이즈 2

```bash
conf t
crypto ipsec transform-set BABO esp-aes esp-sha-hmac
end

```

```bash
conf t
crypto map R1-VPN 10 ipsec-isakmp
match address TOVPN
set peer 1.1.100.1
set transform-set BABO
**reverse-route static
**end

```

```bash
conf t
int f0/0
crypto map R1-VPN
end

```


### **>>>> R2**

페이즈 1

```bash
conf t
crypto isakmp policy 10
encryption aes 256
authentication pre-share
group 5
lifetime 3600
hash sha
end

sh crypto isakmp policy

```

```bash
conf t
crypto isakmp key 0 cloud address 1.1.100.1
end

```

```bash
conf t
ip access-list extended TOVPN
permit ip 2.2.2.0 0.0.0.255 3.3.3.0 0.0.0.255
permit ip 192.168.101.0 0.0.0.255 192.168.102.0 0.0.0.255
end

```

페이즈 2

```bash
conf t
crypto ipsec transform-set BABO esp-aes esp-sha-hmac
end

```

```bash
conf t
crypto map R2-VPN 10 ipsec-isakmp
match address TOVPN
set peer 1.1.100.1
set transform-set BABO
**reverse-route static
**end

```

```bash
conf t
int f0/0
crypto map R2-VPN
end

```


### >>>> 이제 R1 VPN으로 라우팅을 확인해보자

```bash
sh ip ro
```

![Image](image_4aac555278af.png)

`reverse-route static` 이 설정 덕분은

이 설정은 VPN 터널로 들어온 트래픽에 대해, 응답 패킷이 자동으로 돌아가는 경로를 만들어 준다는 뜻입니다.

왜 "리버스"냐면, 들어오는 경로와 반대 방향(역방향)으로 응답 경로를 설정하기 때문입니다.

이전 설정에서…

```shell
conf t
crypto map R2-VPN 10 ipsec-isakmp
**set peer 10.1.23.3**
match address TOR3
set transform-set BABO
**reverse-route static
**end
```

피어를 맺은 상대방인 10.1.23.3 커넥트정보들을
static으로 가져와서, reverse-route 로 내부망 라우터들에게 전달해주겠다!

이 두 명령어 덕분에 R2측에 R3의 내부망을 Static으로 알 수 있고, R2의 내부망인 R1도 R2에게 리버스로 전달받은 R4의 IP 정보를 알 수 있는것임!

![Image](image_3d5bfa15f2c1.png)

패킷도 확인해보자

![Image](image_6c613615e276.png)




## >> VM간 연결 테스트

### >>>> 핑테스트 확인

![Image](image_51acefeff4e3.png)

### >>>> 암호화 확인

![Image](image_0d9180ef4b04.png)

### >>>> 지사 to 지사 통신 확인

![Image](image_5ba4a8ae8a4d.png)


## >> ISP 에게 라우팅도 안해줬는데, 어떻게 이게 가능할까?

### **>>>> “비밀은 ESP 헤더에 숨어있다”**

![Image](image_e3548ac33881.png)

```bash
결과적으로 “ISP에는 내부망 라우팅이 전혀 없어도, 외부(1.1.100.x) 구간만 연결 정보가 맞으면 캡슐화 트래픽이 흐르고, 서로 디폴트 라우트로 트래픽을 보내는 구조”이기에 HQ ↔ R1, HQ ↔ R2 통신이 가능해집니다.
```

핵심은 각 구간의 라우터가 모든 미지의 목적지를 ISP나 VPN으로 보내도록 설정되어 있고, ISP는 외부 주소(1.1.100.x)로 캡슐화된 트래픽만 처리한다는 점입니다. ISP는 내부망을 몰라도, 모든 라우터가 "모르는 주소는 ISP/VPN으로 전달"하도록 설정되어 있어 패킷이 목적지에 도달할 수 있습니다.

1. **R1/R2/HQ/VPN 라우터**는 모르는 목적지를 ISP/VPN 라우터로 보내는 디폴트 라우트 보유
1. **ISP 라우터**는 1.1.100.x 대역만 알고 있으며, 캡슐화된 IPsec 트래픽을 연결 정보로 라우팅
1. VPN 터널을 통해 내부 IP 패킷이 캡슐화되어 전송되므로, ISP는 외부 IP로만 트래픽 중계
이러한 구조로 ISP는 내부망 정보 없이도 디폴트 라우트와 캡슐화를 통해 트래픽을 전달합니다.


### **>>>> “ISP는 내부 대역을 전혀 몰라도 된다”**

![Image](image_977642afab8d.png)

**시나리오**

- R1의 내부 PC(`1.1.1.1`)에서 HQ의 내부 서버(`3.3.3.3`)로 통신을 시도합니다.
- 원본 패킷(`SRC=1.1.1.1 → DST=3.3.3.3`)이 R1 라우터에 도착합니다.
- R1은 `3.3.3.x` 대역을 모르므로 **디폴트 라우트**로 보내고, IPsec으로 암호화하여 **외부 IP 헤더**를 추가합니다.
  - **외부 헤더**: `SRC=1.1.100.5 → DST=1.1.100.1`
  - 내부 패킷은 IPsec으로 암호화됩니다.
- **ISP**는 `1.1.100.x` 대역만 보고 VPN 라우터로 전달합니다.
  - 내부 IP는 알 필요가 없습니다.
  - 연결된 `1.1.100.x` 정보만 있으면 됩니다.
- VPN 라우터에서 외부 헤더를 제거하고 내부 IP를 확인합니다.
  - 목적지(`3.3.3.3`)를 알고 있어 해당 방향으로 전달합니다.
- 응답도 같은 방식으로 돌아옵니다: VPN 암호화 → ISP 경유 → R1 도착

### **>>>> 정리**

- 모든 지사는 패킷을 받는 즉시 ISP측으로 보냅니다.
- ISP는 외부 헤더(`1.1.100.x`)만 봅니다.
- 내부 통신은 IPsec으로 보호됩니다.
- 디폴트 라우트와 IPsec 캡슐화로 ISP는 특별한 라우팅 없이 패킷을 전달할 수 있습니다.



# 각 VM 서버 설정

## >> VM 라우팅 설정

```bash
ip route flush table main
```

**Ubuntu Server 2 (FTP)**

```bash
ip route add default via 192.168.102.254 dev enp0s3
```

**Ubuntu Server 3 (LOG)**

```bash
ip route add default via 192.168.101.254 dev enp0s3
```


## >> FTP 설정

### >>>> Ubuntu Server #1

```shell
sudo apt update
sudo apt install vsftpd -y

```

설치가 완료되었는지 확인:

```shell
sudo systemctl status vsftpd

```

FTP를 사용할 **전용 사용자**를 만들거나, 기존 사용자를 사용하도록 설정할 수 있다.

```shell
sudo adduser ftpuser

```

```shell
write_enable=YES
chroot_local_user=YES
allow_writeable_chroot=YES

pasv_enable=YES
pasv_min_port=30000
pasv_max_port=30010
pasv_address=192.168.102.100  # FTP 서버의 실제 IP 설정
```

암호를 설정하고, 필요한 정보를 입력하면 사용자 생성이 완료된다

vsftpd의 설정 파일(`/etc/vsftpd.conf`)을 수정해서 FTP 서버의 동작을 원하는 대로 조정할 수 있다.

```shell
sudo nano /etc/vsftpd.conf

```

```shell
sudo systemctl restart vsftpd

```

FTP 사용자(예: `ftpuser`)가 파일을 업로드하려면 홈 디렉토리의 권한을 변경해야 해.

```shell
sudo chown ftpuser:ftpuser /home/ftpuser
sudo chmod 755 /home/ftpuser

```


### >>>> R1 에서 ftp 서버로 아카이빙

R1

```bash
configure terminal

ip ftp username ftpuser
ip ftp password 0 0000

archive
 path ftp://ftpuser:0000@192.168.102.100/R1-TEST
 write-memory
 time-period 300

end

write memory

```

```bash
archive config
```

![Image](image_6f393f8fd11f.png)


### >>>> 만약에 ftp가 작동하지 않는다면?

```bash
sudo iptables -A INPUT -p tcp --dport 21 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 20 -j ACCEPT
sudo iptables-save

```

```bash
sudo nano /etc/vsftpd.conf
```

```bash
pasv_enable=NO
```

```bash
sudo systemctl restart vsftpd
```



## >> Log 서버 설정

```bash
UbuntuServer#2 에 rsyslog 설치하여,

UbuntuServer#1 의 DHCP 와 DNS 로그정보와

UbuntuServer#3 의 FTP 로그정보와

GNS3의 Router1의 running config 설정이 Log서버인 UbuntuServer#2로 이동해야한다.

Log서버의 IP는 192.168.101.100이다.
```

### **>>>> UbuntuServer#3 (Log 서버) - rsyslog 설치 및 설정**

1.1 **rsyslog 설치**

```shell
sudo apt update
sudo apt install -y rsyslog

```

1.2 **UDP/TCP를 통한 원격 로그 수신 활성화**

```shell
sudo nano /etc/rsyslog.conf

```

아래 내용을 확인하고 주석을 해제하여 원격 로그를 수신할 수 있도록 설정합니다.

```shell
# UDP 기반 수신 활성화 (기본 포트: 514)
module(load="imudp")
input(type="imudp" port="514")

# TCP 기반 수신 활성화 (기본 포트: 514)
module(load="imtcp")
input(type="imtcp" port="514")

```

1.3 **로그 분리 설정**

```shell
sudo nano /etc/rsyslog.d/remote.conf

```

아래 내용을 추가합니다.

```shell
# UbuntuServer#1 DHCP/DNS 로그 저장 위치
if $fromhost-ip == '192.168.100.100' then /var/log/remote/dhcp_dns.log
& stop

# UbuntuServer#3 FTP 로그 저장 위치
if $fromhost-ip == '192.168.102.100' then /var/log/remote/ftp.log
& stop

# GNS3 Router1 running-config 로그 저장 위치
if $fromhost-ip == '192.168.100.254' then /var/log/remote/router1.log
& stop

$template RemoteLogs,"/var/log/remote/%FROMHOST-IP%/%PROGRAMNAME%.log"
*.* ?RemoteLogs
& ~

```

1.4 **로그 저장 디렉토리 생성 및 권한 설정**

```shell
sudo mkdir -p /var/log/remote
sudo chmod 755 /var/log/remote
sudo chown -R syslog:adm /var/log/remote

```

1.5 **rsyslog 재시작**

```shell
sudo systemctl restart rsyslog

```


### **>>>> UbuntuServer#1 (DHCP 및 DNS 로그 전송)**

2.1 **DHCP 로그 전송 설정**

```shell
sudo nano /etc/rsyslog.d/dhcp.conf

```

아래 내용 추가:

```shell
# DHCP 로그를 Log 서버로 전송
local7.* @192.168.101.100:514

```

2.2 **DNS 로그 전송 설정**

```shell
sudo nano /etc/rsyslog.d/dns.conf

```

아래 내용 추가:

```shell
# DNS 로그를 Log 서버로 전송
auth,authpriv.* @192.168.101.100:514

```

**2.3 전역설정**

```bash
sudo nano /etc/rsyslog.d/50-default.conf
```

아래 내용 추가:

```bash
*.* @192.168.101.100:514
```

2.4 **rsyslog 재시작**

```shell
sudo systemctl restart rsyslog

```


### **>>>> UbuntuServer#2 (FTP 로그 전송)**

3.1 **FTP 서버 로그 설정**

**vsftpd를 사용하는 경우:**

```shell
sudo nano /etc/rsyslog.d/ftp.conf

```

아래 내용 추가:

```shell
# FTP 로그를 Log 서버로 전송
local2.* @192.168.101.100:514

```

**3.2 전역설정**

```bash
sudo nano /etc/rsyslog.d/50-default.conf
```

아래 내용 추가:

```bash
*.* @192.168.101.100:514
```

**3.3 rsyslog 재시작**

```shell
sudo systemctl restart rsyslog

```


### **>>>> GNS3 Router1 (running-config 로그 전송)**

4.1 **Router에서 원격 syslog 서버 설정**

GNS3의 Router1에서 실행:

```shell
configure terminal
logging host 192.168.101.100
logging trap debugging
logging on
end
wr
```


### **>>>> UbuntuServer#2 (로그 확인)**

5.1 **Log 서버에서 수신된 로그 확인**

```shell
tail -f /var/log/remote/dhcp_dns.log    # DHCP 및 DNS 로그 확인
tail -f /var/log/remote/ftp.log         # FTP 로그 확인
tail -f /var/log/remote/router1.log     # Router1 설정 로그 확인

```

5.2 **포트가 열려 있는지 확인**

```shell
sudo netstat -tulnp | grep 514

```

UDP/TCP 514 포트가 LISTEN 상태인지 확인합니다.




# Shell Script를 이용한 EEM 구현

## >> 메인 아이디어

![Image](image_95eac531fcec.png)

```plain text
이거 그냥 Branch 측에서 EEM 인식해서 보내는것보다,각 Branch 측에서 192.168.102.100 에 3초에 한번씩 핑만 보내다가, 핑이 안보내지는 시점부터 현재 시간을 기반으로 한 파일 하나 생성하고, 당시의 상태를 syslog등으로 기록하여 상태를 기록한다음에, 다시 192.168.102.100 으로 핑이 보내지는 시점에, 192.168.102.100 에 있는 ftp서버에, 그동안 기록되었던 파일을 보내는 스크립트를 작성하면 되는거 아닌가? 즉, 리눅스서버에 EEM과 비슷한 데몬을 만들면 되는거 아님?
```


## >> 사전 설정

스크립트 실행을 위한 디렉터리 설정이 필요합니다:

- **Branch 측:** 로그 저장용
  `192.168.100.100`

  `192.168.101.100`

```plain text
sudo mkdir -p /var/log/branch_monitor
sudo chmod 755 /var/log/branch_monitor
```

- **FTP 서버 측:** 파일 업로드용
  `192.168.102.100`

```plain text
sudo mkdir -p /upload
sudo chmod 755 /upload
```

이 설정으로 로그 기록 및 FTP 전송이 가능해집니다.


## >> 구현

### **>>>> 스크립트 설정**

```plain text
sudo nano /usr/local/bin/branch_monitor.sh
```

이 스크립트는 3초마다 대상 IP(192.168.102.100)에 핑을 보내고, 핑 실패 시 현재 시간을 기준으로 로그 파일을 생성한 뒤 시스템 상태(예: dmesg의 최근 로그)를 기록합니다. 

그리고 핑이 복구되면 FTP를 통해 해당 로그 파일을 전송합니다.

```bash
#!/bin/bash
# 설정 부분
TARGET="192.168.102.100"          # 모니터링 대상 IP
FTP_SERVER="192.168.102.100"        # FTP 서버 IP (대상과 동일)
FTP_USER="ftpuser"                # FTP 사용자명
FTP_PASS="0000"            # FTP 비밀번호
FTP_DEST="/upload"                # FTP 서버상의 저장 경로
LOG_DIR="/var/log/branch_monitor" # 로그 파일을 저장할 디렉터리

# 로그 디렉터리 생성 (없으면)
mkdir -p "$LOG_DIR"

# 초기 상태: 온라인 상태
offline_flag=0
log_file=""

# 무한 루프 시작
while true; do
    # -c1: 1회 ping, -W1: 1초 대기
    ping -c1 -W1 "$TARGET" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        # ping 성공: 온라인 상태
        if [ $offline_flag -eq 1 ]; then
            # 장애 복구 감지 (한 번만 처리)
            echo "장애복구! $(date)"
            logger "네트워크 복구 감지. 로그 파일 ($log_file)을 FTP로 전송합니다."
            # FTP 전송 (curl 사용 예)
            curl --ftp-create-dirs -T "$log_file" "ftp://$FTP_SERVER$FTP_DEST/$(basename "$log_file")" --user "$FTP_USER:$FTP_PASS"
            if [ $? -eq 0 ]; then
                logger "FTP 전송 성공: $(basename "$log_file")"
                rm -f "$log_file"
            else
                logger "FTP 전송 실패: $(basename "$log_file")"
            fi
            offline_flag=0
        fi
    else
        # ping 실패: 오프라인 상태
        if [ $offline_flag -eq 0 ]; then
            # 처음 장애 발생 시 (한 번만 처리)
            offline_flag=1
            echo "장애발생! $(date)"
            timestamp=$(date +%Y%m%d%H%M%S)
            log_file="$LOG_DIR/log_$timestamp.txt"
            logger "네트워크 장애 감지. 로그 파일 생성: $log_file"
            {
                echo "네트워크 장애 발생 시각: $(date)"
                echo "최근 시스템 메시지 (dmesg):"
                dmesg | tail -n 50
            } > "$log_file"
        else
            # 장애 상태 지속 시, 필요에 따라 추가 기록 가능 (예: 재점검)
            echo "재점검: $(date)"
            echo "재점검: $(date)" >> "$log_file"
        fi
    fi
    sleep 3
done
```

1. **설정**
• 대상/FTP 서버 정보와 로그 경로를 설정하고 디렉터리를 생성

1. **핑 모니터링**
• 3초마다 대상 IP로 핑 테스트

• 복구 시: 로그 파일을 FTP 전송 후 삭제

• 장애 시: 시간 기반 로그 파일 생성 및 dmesg 기록

1. **로그 전송**
• curl로 FTP 업로드

• 전송 결과를 syslog에 기록

백그라운드 실행 가능하며 systemd 서비스로 등록 가능

### **>>>> 실행 권한 설정**

```plain text
sudo chmod +x /usr/local/bin/branch_monitor.sh
```

### **>>>> 디렉터리 준비**

Branch 모니터링용:

```plain text
sudo mkdir -p /var/log/branch_monitor
sudo chmod 755 /var/log/branch_monitor
sudo chown root:root /var/log/branch_monitor
```

FTP 서버용:

```plain text
sudo mkdir -p /upload
sudo chmod 755 /upload
sudo chown ftpuser:ftpuser /upload
```

### **>>>> 실행 방법**

직접 실행:

```plain text
sudo /usr/local/bin/branch_monitor.sh
```

백그라운드 실행:

nohup 사용:

```plain text
sudo nohup /usr/local/bin/branch_monitor.sh > /dev/null 2>&1 &
```

<details>
<summary>(선택) systemd 서비스 등록:</summary>

```plain text
sudo vi /etc/systemd/system/branch_monitor.service
```

```plain text
[Unit]
Description=Branch Monitor Script
After=network.target

[Service]
ExecStart=/usr/local/bin/branch_monitor.sh
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

서비스 활성화:

```plain text
sudo systemctl daemon-reload
sudo systemctl enable branch_monitor.service
sudo systemctl start branch_monitor.service
```

</details>

서비스 백그라운드 실행 확인

```bash
htop
```

![Image](image_1e13d0d8173e.png)

### **>>>> 모니터링**

- syslog 확인: `/var/log/syslog` 또는 `/var/log/messages`
- 서비스 상태: `sudo systemctl status branch_monitor.service`



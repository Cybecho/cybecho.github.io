---
title: "DNS 캐시를 지우기전 vs 지운 후 패킷분석"
date: 2025-02-27T09:31:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "DNS 캐시가 있는 경우, PublicDNS(10.0.2.15)는 이미 저장된 정보를 사용하여 요청에 응답하고 PrivateDNS(10.0.2.17)로의 요청을 생략합니다. 그러나 캐시를 지우면 PublicDNS는 PrivateDNS에 직접 요청을 보내고, 이 과정에서 DNS 요청과 응답이 기록됩니다. 실습을 통해 DNS 요청 과정과 캐시의 영향을 확인할 수 있습니다."
notion_id: "1a71bab9-e3f8-807f-ba7c-f36368903ced"
notion_url: "https://www.notion.so/DNS-vs-1a71bab9e3f8807fba7cf36368903ced"
---

# DNS 캐시를 지우기전 vs 지운 후 패킷분석

> **Summary**
> DNS 캐시가 있는 경우, PublicDNS(10.0.2.15)는 이미 저장된 정보를 사용하여 요청에 응답하고 PrivateDNS(10.0.2.17)로의 요청을 생략합니다. 그러나 캐시를 지우면 PublicDNS는 PrivateDNS에 직접 요청을 보내고, 이 과정에서 DNS 요청과 응답이 기록됩니다. 실습을 통해 DNS 요청 과정과 캐시의 영향을 확인할 수 있습니다.

---

 

![Image](image_a9edba4b6af5.png)

> 💡 **[@February 27, 2025 - 컨테이너를 활용한 백업 및 공유환경 구축](https://www.notion.so/1a71bab9e3f880fb9b9fc22d32de0e67) **

> 해당 실습에서, private DNS 와 public DNS 를 구분하여 publicDNS영역에 있는 주소를 요청했더니, private DNS로 요청이 전달되는게 아니라, public DNS에서 바로 주소를 반환하는것을 확인하였다.

> 처음에는 캐시를 인지하지 못하고, 이거왜이럼? 했는데, public DNS측의 캐시때문이었다는것을 깨닫고, 그와 관련된 내용을 정리한 내용이다.

# 실제 실험 결과를 남겨보았다.

## >> Test해보자

### >>>> 10.0.2.16 에서 curl 혹은 nslookup 을 해보자

현재 10.0.2.16 이 네임서버로 10.0.2.15(PublicDNS) 로 요청하고, 10.0.2.15는, 자신에게 없는 주소일경우 10.0.2.17에게 요청하는 형태임

![Image](image_236302246a0f.png)


### >>>> 10.0.2.16(클라이언트) 에서, [www.google.com](http://www.google.com/) 에 접속하면, 10.0.2.15(PublicDNS) 가 응답해줄까?

![Image](image_6a09dc9f92e1.png)

```bash
16	4.439254	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xb45a A www.google.com
17	4.439327	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xc95d AAAA www.google.com
18	4.440106	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0xc95d AAAA www.google.com AAAA 2404:6800:400a:813::2004
20	4.475662	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0xb45a A www.google.com A 142.250.206.196
76	7.005752	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x0aae A www.BABO1.BABO.com
77	7.005837	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x41a9 AAAA www.BABO1.BABO.com
78	7.006960	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x0aae A www.BABO1.BABO.com A 10.0.2.16
79	7.006960	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x41a9 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
141	11.323025	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x89f7 A www.BABO1.com
142	11.323087	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x7cf5 AAAA www.BABO1.com
143	11.323735	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x89f7 A www.BABO1.com A 10.0.2.16
144	11.323735	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x7cf5 AAAA www.BABO1.com SOA ns.BABO1.com
```

```bash
5	3.827680	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xb45a A www.google.com
6	3.827680	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xc95d AAAA www.google.com
7	3.827985	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0xc95d AAAA www.google.com AAAA 2404:6800:400a:813::2004
8	3.828239	10.0.2.15	8.8.4.4	DNS	103	Standard query 0xaa2d A www.google.com OPT
9	3.862949	8.8.4.4	10.0.2.15	DNS	107	Standard query response 0xaa2d A www.google.com A 142.250.206.196 OPT
10	3.863523	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0xb45a A www.google.com A 142.250.206.196
11	6.395580	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x0aae A www.BABO1.BABO.com
12	6.395581	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x41a9 AAAA www.BABO1.BABO.com
13	6.396135	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x0aae A www.BABO1.BABO.com A 10.0.2.16
14	6.396224	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x41a9 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
19	10.714898	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x89f7 A www.BABO1.com
20	10.714898	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x7cf5 AAAA www.BABO1.com
21	10.715132	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x89f7 A www.BABO1.com A 10.0.2.16
22	10.715225	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x7cf5 AAAA www.BABO1.com SOA ns.BABO1.com
23	12.145937	127.0.0.1	127.0.0.1	DNS	106	Standard query 0xc6f7 A connectivity-check.ubuntu.com OPT
24	12.145947	127.0.0.1	127.0.0.1	DNS	106	Standard query 0x04f5 AAAA connectivity-check.ubuntu.com OPT
25	12.146031	127.0.0.1	127.0.0.1	DNS	298	Standard query response 0xc6f7 A connectivity-check.ubuntu.com A 91.189.91.48 A 185.125.190.18 A 185.125.190.97 A 91.189.91.49 A 91.189.91.98 A 91.189.91.97 A 185.125.190.17 A 91.189.91.96 A 185.125.190.49 A 185.125.190.96 A 185.125.190.48 A 185.125.190.98 OPT
26	12.146299	10.0.2.15	8.8.4.4	DNS	118	Standard query 0x75c2 AAAA connectivity-check.ubuntu.com OPT
27	12.181494	8.8.4.4	10.0.2.15	DNS	442	Standard query response 0x75c2 AAAA connectivity-check.ubuntu.com AAAA 2620:2d:4000:1::22 AAAA 2620:2d:4000:1::97 AAAA 2620:2d:4002:1::198 AAAA 2620:2d:4000:1::2a AAAA 2620:2d:4002:1::197 AAAA 2620:2d:4000:1::23 AAAA 2620:2d:4002:1::196 AAAA 2620:2d:4000:1::96 AAAA 2620:2d:4000:1::2b AAAA 2620:2d:4000:1::98 AAAA 2001:67c:1562::23 AAAA 2001:67c:1562::24 OPT
28	12.182149	127.0.0.1	127.0.0.1	DNS	442	Standard query response 0x04f5 AAAA connectivity-check.ubuntu.com AAAA 2620:2d:4000:1::96 AAAA 2620:2d:4000:1::2b AAAA 2001:67c:1562::23 AAAA 2620:2d:4002:1::196 AAAA 2620:2d:4000:1::22 AAAA 2620:2d:4000:1::97 AAAA 2620:2d:4000:1::2a AAAA 2620:2d:4002:1::198 AAAA 2620:2d:4002:1::197 AAAA 2620:2d:4000:1::23 AAAA 2620:2d:4000:1::98 AAAA 2001:67c:1562::24 OPT
```


### >>>> 10.0.2.16(클라이언트) 에서, www.BABO1.BABO.com에 접속하면, 10.0.2.15(PublicDNS) 가 응답해줄까?

![Image](image_73b57e50e513.png)

```bash
16	4.439254	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xb45a A www.google.com
17	4.439327	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xc95d AAAA www.google.com
18	4.440106	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0xc95d AAAA www.google.com AAAA 2404:6800:400a:813::2004
20	4.475662	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0xb45a A www.google.com A 142.250.206.196
76	7.005752	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x0aae A www.BABO1.BABO.com
77	7.005837	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x41a9 AAAA www.BABO1.BABO.com
78	7.006960	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x0aae A www.BABO1.BABO.com A 10.0.2.16
79	7.006960	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x41a9 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
141	11.323025	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x89f7 A www.BABO1.com
142	11.323087	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x7cf5 AAAA www.BABO1.com
143	11.323735	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x89f7 A www.BABO1.com A 10.0.2.16
144	11.323735	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x7cf5 AAAA www.BABO1.com SOA ns.BABO1.com
```

```bash
5	3.827680	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xb45a A www.google.com
6	3.827680	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xc95d AAAA www.google.com
7	3.827985	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0xc95d AAAA www.google.com AAAA 2404:6800:400a:813::2004
8	3.828239	10.0.2.15	8.8.4.4	DNS	103	Standard query 0xaa2d A www.google.com OPT
9	3.862949	8.8.4.4	10.0.2.15	DNS	107	Standard query response 0xaa2d A www.google.com A 142.250.206.196 OPT
10	3.863523	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0xb45a A www.google.com A 142.250.206.196
11	6.395580	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x0aae A www.BABO1.BABO.com
12	6.395581	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x41a9 AAAA www.BABO1.BABO.com
13	6.396135	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x0aae A www.BABO1.BABO.com A 10.0.2.16
14	6.396224	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x41a9 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
19	10.714898	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x89f7 A www.BABO1.com
20	10.714898	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x7cf5 AAAA www.BABO1.com
21	10.715132	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x89f7 A www.BABO1.com A 10.0.2.16
22	10.715225	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x7cf5 AAAA www.BABO1.com SOA ns.BABO1.com
23	12.145937	127.0.0.1	127.0.0.1	DNS	106	Standard query 0xc6f7 A connectivity-check.ubuntu.com OPT
24	12.145947	127.0.0.1	127.0.0.1	DNS	106	Standard query 0x04f5 AAAA connectivity-check.ubuntu.com OPT
25	12.146031	127.0.0.1	127.0.0.1	DNS	298	Standard query response 0xc6f7 A connectivity-check.ubuntu.com A 91.189.91.48 A 185.125.190.18 A 185.125.190.97 A 91.189.91.49 A 91.189.91.98 A 91.189.91.97 A 185.125.190.17 A 91.189.91.96 A 185.125.190.49 A 185.125.190.96 A 185.125.190.48 A 185.125.190.98 OPT
26	12.146299	10.0.2.15	8.8.4.4	DNS	118	Standard query 0x75c2 AAAA connectivity-check.ubuntu.com OPT
27	12.181494	8.8.4.4	10.0.2.15	DNS	442	Standard query response 0x75c2 AAAA connectivity-check.ubuntu.com AAAA 2620:2d:4000:1::22 AAAA 2620:2d:4000:1::97 AAAA 2620:2d:4002:1::198 AAAA 2620:2d:4000:1::2a AAAA 2620:2d:4002:1::197 AAAA 2620:2d:4000:1::23 AAAA 2620:2d:4002:1::196 AAAA 2620:2d:4000:1::96 AAAA 2620:2d:4000:1::2b AAAA 2620:2d:4000:1::98 AAAA 2001:67c:1562::23 AAAA 2001:67c:1562::24 OPT
28	12.182149	127.0.0.1	127.0.0.1	DNS	442	Standard query response 0x04f5 AAAA connectivity-check.ubuntu.com AAAA 2620:2d:4000:1::96 AAAA 2620:2d:4000:1::2b AAAA 2001:67c:1562::23 AAAA 2620:2d:4002:1::196 AAAA 2620:2d:4000:1::22 AAAA 2620:2d:4000:1::97 AAAA 2620:2d:4000:1::2a AAAA 2620:2d:4002:1::198 AAAA 2620:2d:4002:1::197 AAAA 2620:2d:4000:1::23 AAAA 2620:2d:4000:1::98 AAAA 2001:67c:1562::24 OPT
```


### >>>> 10.0.2.16(클라이언트) 에서, www.BABO1.com에 접속하면, 10.0.2.17(PrivateDNS) 가 응답해줄까?

![Image](image_233fc19e4dff.png)

```bash
16	4.439254	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xb45a A www.google.com
17	4.439327	10.0.2.16	10.0.2.15	DNS	80	Standard query 0xc95d AAAA www.google.com
18	4.440106	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0xc95d AAAA www.google.com AAAA 2404:6800:400a:813::2004
20	4.475662	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0xb45a A www.google.com A 142.250.206.196
76	7.005752	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x0aae A www.BABO1.BABO.com
77	7.005837	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x41a9 AAAA www.BABO1.BABO.com
78	7.006960	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x0aae A www.BABO1.BABO.com A 10.0.2.16
79	7.006960	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x41a9 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
141	11.323025	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x89f7 A www.BABO1.com
142	11.323087	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x7cf5 AAAA www.BABO1.com
143	11.323735	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x89f7 A www.BABO1.com A 10.0.2.16
144	11.323735	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x7cf5 AAAA www.BABO1.com SOA ns.BABO1.com
```

```bash
패킷 없음
```


### >>>> 무슨일이 벌어진걸까 왜 10.0.2.17에 아무것도 안찍혔을까?

**캐싱 때문임!**

```bash
10.0.2.16 측에서 (기본 퍼블릭 네임서버는 10.0.2.15임. 10.0.2.15는 자신이 없는 주소인 www.BABO1.com 이나 www.BABO2.com 요청이 들어왔을때, 10.0.2.17에게 요청함)

 curl www.google.com
 curl www.BABO1.BABO.com
 curl www.BABO1.com 
 
그리고 이미 이전에 curl이나 nslookup을 통해 10.02.15퍼블릭DNS는 10.0.2.17에게 없는주소를 요청하러 포워딩한적이 있다는 가정하에.

현재 패킷을 분석해봤는데, 10.0.2.17 에 해당하는 Serv1에 http||dns 가 아무런 패킷의 오고감이 없는게 이상해. 분명 tcpdump로 

sudo tcpdump -i any -w serv1.pcap

로 깠는데 말이지.

왜 그런걸까?
```

10.0.2.17(Serv1) 서버에서 DNS나 HTTP 패킷이 잡히지 않는 이유는 10.0.2.15(Desktop)가 이 서버로 아무 요청도 보내지 않고 있기 때문입니다.

패킷 내용을 자세히 보면:

- [**www.google.com**](http://www.google.com/) 요청은 10.0.2.16에서 10.0.2.15로 DNS 질의가 갑니다.10.0.2.15는 이 주소를 모르기 때문에 구글 DNS(8.8.4.4)에 직접 물어본 후 응답을 10.0.2.16에게 전달합니다.즉, [www.google.com](http://www.google.com/)은 10.0.2.17에게 전혀 묻지 않고 있습니다.
- [**www.BABO1.BABO.com**](http://www.babo1.babo.com/)과 [**www.BABO1.com**](http://www.babo1.com/) 요청도 10.0.2.16에서 10.0.2.15로 질의가 갑니다.그런데 10.0.2.15가 바로 응답(IP 주소 10.0.2.16)해주고 있습니다. **이는 10.0.2.15가 이 도메인 정보를 이미 가지고 있어서 10.0.2.17에게 물어볼 필요가 없기 때문입니다.**
결국 10.0.2.17(Serv1)로 들어오는 DNS나 웹 요청이 아예 없어서 tcpdump에 아무것도 기록되지 않는 것입니다. "10.0.2.15가 모르는 주소는 10.0.2.17에 물어본다"고 했지만, 실제로는 그렇게 설정되어 있지 않거나 작동하지 않고 있습니다.

원인을 정리하면:

1. 10.0.2.15가 DNS 포워딩을 구글 DNS(8.8.8.8/8.8.4.4)로만 설정했거나,
1. 특정 도메인([www.BABO1.com](http://www.babo1.com/) 등)을 10.0.2.15가 직접 처리하도록 설정되어 있거나,
1. 10.0.2.17로 DNS 질의를 넘기는 설정이 제대로 되어 있지 않습니다.
1. 이 때문에 10.0.2.17과 DNS 통신이 전혀 발생하지 않습니다.
결론적으로, 10.0.2.15가 DNS 요청을 10.0.2.17로 넘기지 않고 자체적으로 처리하고 있어서 10.0.2.17에서는 패킷이 잡히지 않는 것입니다.

하지만 지금 보이지 않을뿐,  10.0.2.15가 초기 요청 시에 www.BABO1.com에 대한 정보가 없어서 10.0.2.17로 포워딩을 시도했겠죠.

그 후, 받은 응답을 캐싱했기 때문에 이후의 쿼리에서는 10.0.2.17로의 추가 요청 없이 캐시된 결과를 바로 사용하게 됩니다.





## >>캐시를 지우고 다시 테스트해봅시다

### >>>> publicDNS 인 10.0.2.15 에서 DNS 캐시를 날려버립시다

```bash
sudo rndc flush

```


### >>>> 10.0.2.16 에서 curl 혹은 nslookup 을 해보자

현재 10.0.2.16 이 네임서버로 10.0.2.15(PublicDNS) 로 요청하고, 10.0.2.15는, 자신에게 없는 주소일경우 10.0.2.17에게 요청하는 형태임

![Image](image_e69355e1fc3a.png)


### >>>> 10.0.2.16(클라이언트) 에서, [www.google.com](http://www.google.com/) 에 접속하면, 10.0.2.15(PublicDNS) 가 응답해줄까?

![Image](image_bc1a8d549673.png)

```bash
No.	Time	Source	Destination	Protocol	Length	Info
80	11.836413	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x8526 A www.google.com
82	11.883890	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0x8526 A www.google.com A 142.250.206.196
83	11.884519	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x21ff AAAA www.google.com
86	11.927713	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0x21ff AAAA www.google.com AAAA 2404:6800:400a:813::2004
119	22.606086	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x4362 A www.BABO1.BABO.com
120	22.607318	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x4362 A www.BABO1.BABO.com A 10.0.2.16
121	22.607708	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x1b12 AAAA www.BABO1.BABO.com
124	22.608531	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x1b12 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
153	29.167723	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x72fd A www.BABO1.com
154	29.170750	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x72fd A www.BABO1.com A 10.0.2.16
155	29.171219	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x5142 AAAA www.BABO1.com
157	29.175391	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x5142 AAAA www.BABO1.com SOA ns.BABO1.com

```

```bash
No.	Time	Source	Destination	Protocol	Length	Info
7	6.900088	127.0.0.1	127.0.0.1	DNS	105	Standard query 0x5759 PTR 100.104.168.192.in-addr.arpa OPT
8	6.900883	127.0.0.1	127.0.0.1	DNS	160	Standard query response 0x5759 No such name PTR 100.104.168.192.in-addr.arpa SOA 168.192.IN-ADDR.ARPA OPT
9	6.901386	127.0.0.1	127.0.0.1	DNS	99	Standard query 0x39d6 PTR 15.2.0.10.in-addr.arpa OPT
10	6.901619	127.0.0.1	127.0.0.1	DNS	149	Standard query response 0x39d6 No such name PTR 15.2.0.10.in-addr.arpa SOA 10.IN-ADDR.ARPA OPT
11	6.901969	127.0.0.1	127.0.0.1	DNS	98	Standard query 0x7f15 PTR 8.2.0.10.in-addr.arpa OPT
12	6.902216	127.0.0.1	127.0.0.1	DNS	148	Standard query response 0x7f15 No such name PTR 8.2.0.10.in-addr.arpa SOA 10.IN-ADDR.ARPA OPT
13	6.902599	127.0.0.1	127.0.0.1	DNS	149	Standard query 0x4188 PTR 6.a.0.7.2.1.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa OPT
14	6.902815	127.0.0.1	127.0.0.1	DNS	198	Standard query response 0x4188 No such name PTR 6.a.0.7.2.1.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa SOA 8.E.F.IP6.ARPA OPT
15	6.903038	127.0.0.1	127.0.0.1	DNS	149	Standard query 0x3fd2 PTR 7.b.1.8.4.d.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa OPT
16	6.903278	127.0.0.1	127.0.0.1	DNS	198	Standard query response 0x3fd2 No such name PTR 7.b.1.8.4.d.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa SOA 8.E.F.IP6.ARPA OPT
17	9.706121	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x8526 A www.google.com
18	9.706899	10.0.2.15	8.8.4.4	DNS	103	Standard query 0xcc3c A www.google.com OPT
19	9.752294	8.8.4.4	10.0.2.15	DNS	107	Standard query response 0xcc3c A www.google.com A 142.250.206.196 OPT
20	9.752995	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0x8526 A www.google.com A 142.250.206.196
21	9.754274	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x21ff AAAA www.google.com
22	9.754916	10.0.2.15	8.8.8.8	DNS	103	Standard query 0xc7cc AAAA www.google.com OPT
23	9.796192	8.8.8.8	10.0.2.15	DNS	119	Standard query response 0xc7cc AAAA www.google.com AAAA 2404:6800:400a:813::2004 OPT
24	9.796886	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0x21ff AAAA www.google.com AAAA 2404:6800:400a:813::2004
29	20.481394	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x4362 A www.BABO1.BABO.com
30	20.481898	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x4362 A www.BABO1.BABO.com A 10.0.2.16
31	20.482912	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x1b12 AAAA www.BABO1.BABO.com
32	20.483130	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x1b12 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
33	27.046251	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x72fd A www.BABO1.com
34	27.046980	10.0.2.15	10.0.2.17	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
35	27.048364	10.0.2.17	10.0.2.15	DNS	134	Standard query response 0xc858 A www.BABO1.com A 10.0.2.16 OPT
36	27.048648	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x72fd A www.BABO1.com A 10.0.2.16
37	27.049754	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x5142 AAAA www.BABO1.com
38	27.050296	10.0.2.15	10.0.2.17	DNS	118	Standard query 0x0301 AAAA www.BABO1.com OPT
39	27.051566	10.0.2.17	10.0.2.15	DNS	163	Standard query response 0x0301 AAAA www.BABO1.com SOA ns.BABO1.com OPT
40	27.053304	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x5142 AAAA www.BABO1.com SOA ns.BABO1.com

```


### >>>> 10.0.2.16(클라이언트) 에서, www.BABO1.BABO.com에 접속하면, 10.0.2.15(PublicDNS) 가 응답해줄까?

![Image](image_bda20db86baf.png)

```bash
No.	Time	Source	Destination	Protocol	Length	Info
80	11.836413	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x8526 A www.google.com
82	11.883890	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0x8526 A www.google.com A 142.250.206.196
83	11.884519	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x21ff AAAA www.google.com
86	11.927713	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0x21ff AAAA www.google.com AAAA 2404:6800:400a:813::2004
119	22.606086	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x4362 A www.BABO1.BABO.com
120	22.607318	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x4362 A www.BABO1.BABO.com A 10.0.2.16
121	22.607708	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x1b12 AAAA www.BABO1.BABO.com
124	22.608531	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x1b12 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
153	29.167723	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x72fd A www.BABO1.com
154	29.170750	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x72fd A www.BABO1.com A 10.0.2.16
155	29.171219	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x5142 AAAA www.BABO1.com
157	29.175391	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x5142 AAAA www.BABO1.com SOA ns.BABO1.com

```

```bash
No.	Time	Source	Destination	Protocol	Length	Info
7	6.900088	127.0.0.1	127.0.0.1	DNS	105	Standard query 0x5759 PTR 100.104.168.192.in-addr.arpa OPT
8	6.900883	127.0.0.1	127.0.0.1	DNS	160	Standard query response 0x5759 No such name PTR 100.104.168.192.in-addr.arpa SOA 168.192.IN-ADDR.ARPA OPT
9	6.901386	127.0.0.1	127.0.0.1	DNS	99	Standard query 0x39d6 PTR 15.2.0.10.in-addr.arpa OPT
10	6.901619	127.0.0.1	127.0.0.1	DNS	149	Standard query response 0x39d6 No such name PTR 15.2.0.10.in-addr.arpa SOA 10.IN-ADDR.ARPA OPT
11	6.901969	127.0.0.1	127.0.0.1	DNS	98	Standard query 0x7f15 PTR 8.2.0.10.in-addr.arpa OPT
12	6.902216	127.0.0.1	127.0.0.1	DNS	148	Standard query response 0x7f15 No such name PTR 8.2.0.10.in-addr.arpa SOA 10.IN-ADDR.ARPA OPT
13	6.902599	127.0.0.1	127.0.0.1	DNS	149	Standard query 0x4188 PTR 6.a.0.7.2.1.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa OPT
14	6.902815	127.0.0.1	127.0.0.1	DNS	198	Standard query response 0x4188 No such name PTR 6.a.0.7.2.1.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa SOA 8.E.F.IP6.ARPA OPT
15	6.903038	127.0.0.1	127.0.0.1	DNS	149	Standard query 0x3fd2 PTR 7.b.1.8.4.d.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa OPT
16	6.903278	127.0.0.1	127.0.0.1	DNS	198	Standard query response 0x3fd2 No such name PTR 7.b.1.8.4.d.e.f.f.f.7.2.0.0.a.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa SOA 8.E.F.IP6.ARPA OPT
17	9.706121	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x8526 A www.google.com
18	9.706899	10.0.2.15	8.8.4.4	DNS	103	Standard query 0xcc3c A www.google.com OPT
19	9.752294	8.8.4.4	10.0.2.15	DNS	107	Standard query response 0xcc3c A www.google.com A 142.250.206.196 OPT
20	9.752995	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0x8526 A www.google.com A 142.250.206.196
21	9.754274	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x21ff AAAA www.google.com
22	9.754916	10.0.2.15	8.8.8.8	DNS	103	Standard query 0xc7cc AAAA www.google.com OPT
23	9.796192	8.8.8.8	10.0.2.15	DNS	119	Standard query response 0xc7cc AAAA www.google.com AAAA 2404:6800:400a:813::2004 OPT
24	9.796886	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0x21ff AAAA www.google.com AAAA 2404:6800:400a:813::2004
29	20.481394	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x4362 A www.BABO1.BABO.com
30	20.481898	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x4362 A www.BABO1.BABO.com A 10.0.2.16
31	20.482912	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x1b12 AAAA www.BABO1.BABO.com
32	20.483130	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x1b12 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
33	27.046251	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x72fd A www.BABO1.com
34	27.046980	10.0.2.15	10.0.2.17	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
35	27.048364	10.0.2.17	10.0.2.15	DNS	134	Standard query response 0xc858 A www.BABO1.com A 10.0.2.16 OPT
36	27.048648	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x72fd A www.BABO1.com A 10.0.2.16
37	27.049754	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x5142 AAAA www.BABO1.com
38	27.050296	10.0.2.15	10.0.2.17	DNS	118	Standard query 0x0301 AAAA www.BABO1.com OPT
39	27.051566	10.0.2.17	10.0.2.15	DNS	163	Standard query response 0x0301 AAAA www.BABO1.com SOA ns.BABO1.com OPT
40	27.053304	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x5142 AAAA www.BABO1.com SOA ns.BABO1.com

```


### >>>> 10.0.2.16(클라이언트) 에서, www.BABO1.com에 접속하면, 10.0.2.17(PrivateDNS) 가 응답해줄까?

![Image](image_40cb1a820991.png)

```bash
No.	Time	Source	Destination	Protocol	Length	Info
80	11.836413	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x8526 A www.google.com
82	11.883890	10.0.2.15	10.0.2.16	DNS	96	Standard query response 0x8526 A www.google.com A 142.250.206.196
83	11.884519	10.0.2.16	10.0.2.15	DNS	80	Standard query 0x21ff AAAA www.google.com
86	11.927713	10.0.2.15	10.0.2.16	DNS	108	Standard query response 0x21ff AAAA www.google.com AAAA 2404:6800:400a:813::2004
119	22.606086	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x4362 A www.BABO1.BABO.com
120	22.607318	10.0.2.15	10.0.2.16	DNS	100	Standard query response 0x4362 A www.BABO1.BABO.com A 10.0.2.16
121	22.607708	10.0.2.16	10.0.2.15	DNS	84	Standard query 0x1b12 AAAA www.BABO1.BABO.com
124	22.608531	10.0.2.15	10.0.2.16	DNS	138	Standard query response 0x1b12 AAAA www.BABO1.BABO.com SOA ns1.BABO.com
153	29.167723	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x72fd A www.BABO1.com
154	29.170750	10.0.2.15	10.0.2.16	DNS	95	Standard query response 0x72fd A www.BABO1.com A 10.0.2.16
155	29.171219	10.0.2.16	10.0.2.15	DNS	79	Standard query 0x5142 AAAA www.BABO1.com
157	29.175391	10.0.2.15	10.0.2.16	DNS	124	Standard query response 0x5142 AAAA www.BABO1.com SOA ns.BABO1.com

```

```bash
No.	Time	Source	Destination	Protocol	Length	Info
8	31.098490	10.0.2.15	10.0.2.17	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
9	31.098568	10.0.2.15	172.17.0.4	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
10	31.098576	10.0.2.15	172.17.0.4	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
11	31.098580	10.0.2.15	172.17.0.4	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
12	31.098581	10.0.2.15	172.17.0.4	DNS	102	Standard query 0xc858 A www.BABO1.com OPT
13	31.099106	172.17.0.4	10.0.2.15	DNS	134	Standard query response 0xc858 A www.BABO1.com A 10.0.2.16 OPT
14	31.099106	172.17.0.4	10.0.2.15	DNS	134	Standard query response 0xc858 A www.BABO1.com A 10.0.2.16 OPT
15	31.099225	10.0.2.17	10.0.2.15	DNS	134	Standard query response 0xc858 A www.BABO1.com A 10.0.2.16 OPT
16	31.101775	10.0.2.15	10.0.2.17	DNS	118	Standard query 0x0301 AAAA www.BABO1.com OPT
17	31.101814	10.0.2.15	172.17.0.4	DNS	118	Standard query 0x0301 AAAA www.BABO1.com OPT
18	31.101819	10.0.2.15	172.17.0.4	DNS	118	Standard query 0x0301 AAAA www.BABO1.com OPT
19	31.102246	172.17.0.4	10.0.2.15	DNS	163	Standard query response 0x0301 AAAA www.BABO1.com SOA ns.BABO1.com OPT
20	31.102246	172.17.0.4	10.0.2.15	DNS	163	Standard query response 0x0301 AAAA www.BABO1.com SOA ns.BABO1.com OPT
21	31.102262	10.0.2.17	10.0.2.15	DNS	163	Standard query response 0x0301 AAAA www.BABO1.com SOA ns.BABO1.com OPT

```


### >>>> 무슨일이 벌어진걸까 이번에는 왜 10.0.2.17에서 응답해준걸까?

**간단히 말해서, PublicDNS(10.0.2.15)의 캐시를 지운 후 
**[**www.BABO1.com**](http://www.babo1.com/)** 사이트를 검색했더니, 
이번에는 10.0.2.15가 10.0.2.17(PrivateDNS)에 실제로 요청을 보내는 것이 확인되었습니다.**

**주요 원인**

- 캐시가 있을 때: **DNS 서버(10.0.2.15)는** 저장된 정보를 바로 알려주기 때문에 **다른 DNS(10.0.2.17)에** 물어볼 필요가 없음
- 캐시를 지웠을 때: **저장된 정보가 없어서** 바로 10.0.2.17에 물어보게 되고, 이 통신 기록이 나타남
**무슨 일이 있었는지 순서대로 설명**

1. **캐시 삭제 전**
  - 10.0.2.15(PublicDNS)는 이미 `www.BABO1.com` 정보를 저장하고 있었습니다.
  - 그래서 10.0.2.16(사용자)가 `www.BABO1.com`을 찾으면, 10.0.2.15는 **자기가 알고 있는 정보**로 바로 답하고 10.0.2.17(PrivateDNS)에게 **전혀** 물어보지 않았습니다.
  - 그래서 10.0.2.17에서는 아무 통신 기록도 보이지 않았습니다.
1. **캐시 삭제 후**
  - 10.0.2.15(PublicDNS)에서 `rndc flush` 명령으로 DNS 캐시를 지웠습니다.
  - 이제 10.0.2.15는 `www.BABO1.com` 같은 사이트 요청을 받으면 **저장된 정보가 없어서**, **10.0.2.17(PrivateDNS)에게 직접 물어봐야** 합니다.
  - 그 결과, **10.0.2.15에서 10.0.2.17로** 가는 DNS 요청(`A`, `AAAA` 레코드)이 통신 기록에 나타나기 시작했습니다.
1. **통신 기록 분석**
  - 기록을 보면 (예: No.34/35/36 부분) `10.0.2.15`가 `10.0.2.17`(또는 172.17.x.x - 내부 Docker IP)에 "`A www.BABO1.com`" 같은 질문을 보내고, 10.0.2.17이 응답하는 모습이 보입니다.
  - 10.0.2.15는 이 응답을 받은 후에야 `10.0.2.16`에게 최종 DNS 답변을 줍니다.
1. **결론**
  - "캐시가 있을 때는 10.0.2.15가 혼자 처리해서 10.0.2.17에 물어보지 않았던 것이"
  - "캐시를 지운 후에는 10.0.2.17(PrivateDNS)에 실제로 물어보는" 정상적인 DNS 전달 과정으로 작동하게 된 것입니다.
  - 이 과정으로 이제 10.0.2.17의 통신 기록에서 DNS 요청/응답이 보이게 됩니다.


## >> 이론정리

### **>>>> **DNS 요청 과정 정리

이번 실습에서는 DNS 조회가 어떻게 진행되고 캐시가 어떤 영향을 주는지 알아봤습니다.

1. **클라이언트 → PublicDNS (10.0.2.16 → 10.0.2.15):**
  - 사용자(10.0.2.16)가 웹사이트 주소(예: [www.google.com](http://www.google.com/), [www.BABO1.com](http://www.babo1.com/))를 입력하면 DNS 서버(10.0.2.15)에 "이 주소의 IP가 뭐야?"라고 묻습니다.
1. **PublicDNS의 처리 방식과 캐시 효과:**
  - 처음에는 DNS 서버(10.0.2.15)가 주소 정보를 모르면, 다른 DNS 서버(10.0.2.17)에게 물어봅니다.
  - 한 번 답을 받으면, 그 정보를 기억(캐시)해두고 다음에 같은 질문이 오면 직접 답해줍니다.
1. **캐시 삭제 후 변화:**
  - DNS 서버의 기억(캐시)을 지우면(`rndc flush` 명령 사용), 다시 처음처럼 다른 DNS 서버에게 물어봐야 합니다.
  - 이때 네트워크 기록(tcpdump)을 보면 두 DNS 서버 간의 대화가 보입니다.
1. **실습에서 본 통신 흐름:**
  - [www.google.com](http://www.google.com/)은 외부 DNS 서버(8.8.8.8 등)에 물어봅니다.
  - [www.BABO1.com](http://www.babo1.com/)은 캐시가 있으면 바로 답하고, 캐시가 없으면 내부 DNS(10.0.2.17)에 물어봅니다.
> 핵심: 캐시가 있으면 DNS 서버가 바로 답하고, 캐시가 없으면 다른 DNS 서버에 물어봐야 합니다.


### **>>>> **HTTP 요청 과정 정리

웹사이트 접속(HTTP 요청)과 DNS 조회가 어떻게 연결되는지 살펴봅시다.

1. **HTTP 요청 전 DNS 조회:**
  - 사용자가 `curl` 명령으로 웹사이트에 접속할 때, 먼저 DNS 서버에 "이 주소의 IP가 뭐야?"라고 물어봅니다.
  - 앞서 설명한 DNS 조회 과정이 여기서 진행됩니다.
    - [www.google.com](http://www.google.com/)은 외부 DNS 서버에 물어봅니다.
    - [www.BABO1.com](http://www.babo1.com/)은 캐시 상태에 따라 바로 답하거나 내부 DNS에 물어봅니다.
1. **실제 웹 통신:**
  - DNS 조회로 IP 주소를 알게 되면, 그 IP 주소로 웹 요청을 보냅니다.
  - 실습에서는 각 가상머신(VM)에 웹 서버가 설치되어 있어 사용자가 직접 접속할 수 있습니다.
  - 웹 통신(HTTP)은 DNS 조회와 별개로 진행되며, 사용자와 웹 서버 사이에서 직접 이루어집니다.
1. **실습에서 본 웹 통신의 특징:**
  - 웹 접속 시, 사용자는 DNS에서 받은 IP 주소로 웹 서버에 연결합니다.
  - DNS 서버들 사이의 통신은 웹 통신에 직접 영향을 주지 않습니다.
  - 따라서 DNS 캐시 여부와 상관없이 웹 통신은 정상적으로 이루어집니다.
> 핵심: 웹 접속은 DNS 조회로 IP 주소를 알아낸 후 웹 서버와 직접 통신하는 것입니다. DNS 캐시는 IP 주소를 찾는 과정에만 영향을 줍니다.




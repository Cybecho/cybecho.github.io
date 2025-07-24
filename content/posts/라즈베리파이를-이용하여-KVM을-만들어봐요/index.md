---
title: "라즈베리파이를 이용하여 KVM을 만들어봐요"
date: 2025-06-13T10:40:00.000Z
draft: false
tags: ["Other", "Util"]
series: ["HW"]
description: "라즈베리파이를 활용하여 KVM over IP를 구축하는 방법을 소개합니다. 이를 통해 원격지에서 서버의 BIOS 화면까지 제어할 수 있으며, 저렴한 비용으로 강력한 원격 관리 솔루션을 제공합니다."
notion_id: "2111bab9-e3f8-80a6-8557-ffa3ff921a60"
notion_url: "https://www.notion.so/KVM-2111bab9e3f880a68557ffa3ff921a60"
---

# 라즈베리파이를 이용하여 KVM을 만들어봐요

> **Summary**
> 라즈베리파이를 활용하여 KVM over IP를 구축하는 방법을 소개합니다. 이를 통해 원격지에서 서버의 BIOS 화면까지 제어할 수 있으며, 저렴한 비용으로 강력한 원격 관리 솔루션을 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/eaa8a3c5-4740-4ddd-856f-16a85f0fcce9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2PUPIQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEDL%2FV8ZX67rRRzG9%2BrMZSx2qvnMqvy3BnzLBQ2rwSDmAiBDDyzAhGa7rinnvyYvr7zfwq6zBoRIxrBrFc%2BSQy%2F3sCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcc%2F%2B6SIyG2FYWBOvKtwDHTSft8%2B58%2FVPh9iO0bneHtzxWASjKkB04rd8YGPvLehCnGoB2alXZiwd8rSKlQZe7W1HQ5dgGXpglx7vFl3I4rPkrlYXtBxx0Xk%2FDNBeMEm0%2FeyC4Bmq%2F8XBbqEu3WueUDQ0tZEy4qZH1ln7hzKzUePPGRCtIGrf8G0DDlntGJax5USGXz0gV%2FM2iPZw%2FjriO9VX45E7BUNCpon6XZqnwKgeZVpb%2BItnz6yy2gtzysip0qlV3rEv1IlP6Y0KilC9xw0nDvqAHdA8sKAPAKIizeh9tyLpeO2ydMPx%2FtSBQJsD%2FipoDkaWV9jhmqNcinhBrTzytJu7XnZuFwJFkQmg7u6O4%2BGd%2FqgEycfjScyskbChEGwMcy%2BW3sSZAouV9OXx1T%2B%2BZtC2UTU9HXWteusczuInTxHMbYSGBr9AH04RItvM1wp5s%2F5E4iWATT4BQZS9NOqvyU38RwnnqM3Gt%2FkFJ74a4ydASNTbERiDQX5PvSOZCIS2Sdm4NYgdfY8SJpjP4voRup8mlwvZ1uf5pYQ0TapHThLUaaoptAmPFqDLKZbp7hldjwBl48v1dK760W6Bh44RcwefXrbqnkkKE66IG%2BaelkpI5ma%2BrCBcWAcxgGbEfFF2NTwboAvPyOkwlc%2BHxAY6pgHdWFYPefVJj919XVlpc1y6jZ6oM6bEVdGo7N3RC23bIpkXXSXaQkv6c1cglorIjRSf5ElrdZ6AFscN%2BBe1bmttYXgCz6ZJLct37FQNFj0rbcmp5POXgiG4ctoBS9fMVYpGC6uYIVsrXC5CFFFk6EWzd%2FfGVg%2Bkit24WvBMOiSssITemDJcH%2BGtjNEoFyeCngF2xtf5qA3j4ydNlET7YpeFM6XIaKHL&X-Amz-Signature=a115e2f226be7bfac7a2180d4a11306e9eb7b9e8440594a361c1f98eb7b2320b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 아… 취업하고나니, 집에있는 윈도우 서버가 원인모를 문제로 다운될때마다, 직접 키는게 참 곤혹이다…

## 4B기준은 이것만 보면 될듯

🔗 [https://docs.pikvm.org/v2/](https://docs.pikvm.org/v2/)

## 블로그 글 소개 (근데 이건 2기준…)

🔗 [https://www.makeuseof.com/how-to-build-raspberry-pi-kvm/](https://www.makeuseof.com/how-to-build-raspberry-pi-kvm/)

혹시 직장이나 외부에서 갑자기 집에 있는 서버가 다운되어 막막했던 경험이 있으신가요? 스마트 플러그로 전원을 껐다 켜거나 WOL(Wake-on-LAN) 신호를 보내봐도, 정작 부팅 과정이나 바이오스 화면에서 문제가 생기면 원격으로는 아무것도 할 수 없어 발만 동동 구르게 됩니다. 이럴 때 물리적으로 키보드, 모니터, 마우스를 연결한 것처럼 원격지에서 서버의 모든 것을 제어하고 싶다는 생각이 간절해지죠.

바로 그런 분들을 위해, 서랍 속에서 잠자고 있는 라즈베리파이를 활용하여 강력한 원격 관리 솔루션, 'KVM over IP'를 직접 구축하는 방법을 소개합니다. 이 블로그 글은 고가의 상용 KVM 장비 없이, 비교적 저렴한 비용으로 라즈베리파이와 몇 가지 부품만으로 내 서버의 BIOS 화면까지 원격으로 보고 제어할 수 있는 장치를 만드는 전 과정을 상세히 안내합니다.

## 칩 비교

- **C790**이 기능·호환성·안정성에서 가장 우수하며, 가격 차이도 크지 않으므로 **가장 비용효율적**입니다.
- **C779**는 오디오가 필요 없고, 1080p 50fps까지만 필요하다면 가장 저렴하게 선택할 수 있습니다.
- **X630**은 1080p 25fps로 제한되고, 오디오도 별도 보드가 필요하므로, 특별한 이유가 없다면 C779나 C790이 더 나은 선택입니다.
## 근데 그러면 결국 라즈베리파이하고, CSI칩만 있으면 되는거 아님?

**핵심 내용: 전원과 데이터 선을 따로 연결해야 해요**

라즈베리파이로 PiKVM을 만들 때는 두 가지를 동시에 연결해야 하는데, 이걸 해결하려면 추가 부품이 필요합니다.

> 왜 USB 분배기(스플리터)가 필요한가?

1. **전원 연결**
1. **USB OTG 데이터 연결**
1. **전원과 데이터 신호 분리**
1. **공식 PiKVM HAT(V3/V4)는 자동으로 처리**하지만, DIY나 V2 방식은 별도 스플리터가 필요합니다[3](https://docs.pikvm.org/faq/).
## 자, 그럼 최소 부품을 정리해보자

최소 부품만으로 PiKVM을 만들기 위한 실제 알리익스프레스(및 국내 병행) 최저가, 신뢰도 높은 판매자 기준 링크를 아래에 정리합니다.

(라즈베리파이 4B는 이미 보유한 것으로 가정)

### 요약: 최소 부품 리스트 및 바로가기

1. **HDMI to CSI-2 캡처보드**
1. **USB-C OTG 스플리터**
1. **USB A to A 케이블**
1. **5V 3A USB-C 파워 어댑터**
## 결론

그냥 이거 사는게 나을수도…

🔗 [https://ko.aliexpress.com/item/1005004204790612.html?spm=a2g0o.productlist.main.7.2b5cq56yq56yz1&algo_pvid=8c789c1d-6d78-4d0a-8150-80650b748c02&pdp_ext_f=%7B%22order%22%3A%221%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A](https://ko.aliexpress.com/item/1005004204790612.html?spm=a2g0o.productlist.main.7.2b5cq56yq56yz1&algo_pvid=8c789c1d-6d78-4d0a-8150-80650b748c02&pdp_ext_f=%7B%22order%22%3A%221%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A)

아님 그냥 PCIE에 박아버려..?

🔗 [https://ko.aliexpress.com/item/1005007871615160.html?spm=a2g0o.productlist.main.15.5f045407I71Ndh&algo_pvid=fbc8218d-8d9a-485a-8c65-398fd0bd6c0c&pdp_ext_f=%7B%22order%22%3A%229%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A](https://ko.aliexpress.com/item/1005007871615160.html?spm=a2g0o.productlist.main.15.5f045407I71Ndh&algo_pvid=fbc8218d-8d9a-485a-8c65-398fd0bd6c0c&pdp_ext_f=%7B%22order%22%3A%229%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A)


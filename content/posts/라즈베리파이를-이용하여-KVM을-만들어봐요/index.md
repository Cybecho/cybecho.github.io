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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/eaa8a3c5-4740-4ddd-856f-16a85f0fcce9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJYUOED%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBlR%2FrbeJY4yiozeMrGYgCcyc0K7eLyyhtlcdo%2BKFjIUAiBdq2b2fGT4UhuLjEv4deF7jb79kEm5rgV2WbtQJDdTqCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIME5VPL7dTnEkHr96JKtwDNWqh2TB2A%2B1DPtfS3s1%2F7pRbQcu2VwP5vedkrKYUPNq7ZKqDytnq43B6fagC7by%2BOkUCH091%2BK8tAzVLapoXo%2F0WvEgpvBxxE2azfs5ycum9Cwhzp9Zb1nJcsT5Q70wREE1lhGiMnnheNJhHKJbfW9esEkbS4HSxjr1uQYMXVOCGwMEinrChhyOvl%2FnmCh%2Fv49mN1lbD3896%2FjFBpJ2txE9FKcJSP9mhbdLQ45CAeMcjtC09VFbUWH1h%2F0YIG3Xe0%2F46Ob21WVBcLGwsGjwpytM5JOJhuKHEaFvGuW6lQ%2FCpDnow%2FuGvtcuoTqLcUdkMQUveF%2FeCAE2AzYW0z3IobtD2UpQETK%2BB8QyD5Tf0vrM%2FY8yxCeR2O9b0iAaOQ50jdT5SvTfddmRgFL0BSRYm%2FK46zNcEVRWeAlG%2FmAPb7Gt6XB7TCQZkrncd%2Fq8azVJ6nLvzqkXCpUNr4IF5td3aFY1afVXDKquUWeg0JIKfnFn5q2alJkVs6%2F2JEQHcSZAaDx9UyD5C5QhMtJCvJUcjl1Yg%2BU%2FeG8WMliwuTTPOCs3w9w%2F4rBKL17niG0z7okD%2FRPZV9fUw8wOyDGoZcKglL2rXkSaGqzYVHU4WaivCEb5G8wUPvUxkoUOfVTswzM%2BHxAY6pgHL7kthvDRy1LkxCljxQkPTuPJ4%2BnUI1zJJ67YIf8xF24Eb5g7NhXrDzwjMyjuyk6w9DpBcBbeZRuhaUDYkVX%2BhTi8OZCb2uZRK1lLuJ2FoDYwTweuXhM8gl4unRt30wJ96tbl4foG4sGcQKHp4hWhFfYh92lxhG8bvEhqZN6vJrLMaFtoGGgA95%2B6EqLkLBBuukp9l29j7sPyoFyxRsVn5pnLXKfFt&X-Amz-Signature=34250afbb3a64cba41734333eeba55e6a7db6bfc4f9a6a690682c172f04fd107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


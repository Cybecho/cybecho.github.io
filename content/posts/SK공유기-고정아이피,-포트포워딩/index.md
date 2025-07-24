---
title: "SK공유기 고정아이피, 포트포워딩"
date: 2024-03-25T02:00:00.000Z
draft: false
tags: ["Infra", "RaspberryPI"]
series: ["Let's Homelab!"]
description: "고정 IP 주소 할당 및 포트 포워딩 설정 방법에 대한 안내. DHCP 서버에 MAC 주소와 고정 IP 주소를 등록하고, 외부에서 사용할 포트를 설정하여 SSH 접속을 가능하게 함. 최종적으로 외부 네트워크에서 IP 주소와 포트 번호를 사용하여 SSH 접속을 수행하는 방법을 설명함."
notion_id: "9479f9f1-7c02-4ad0-b536-6b17c5252825"
notion_url: "https://www.notion.so/SK-9479f9f17c024ad0b5366b17c5252825"
---

# SK공유기 고정아이피, 포트포워딩

> **Summary**
> 고정 IP 주소 할당 및 포트 포워딩 설정 방법에 대한 안내. DHCP 서버에 MAC 주소와 고정 IP 주소를 등록하고, 외부에서 사용할 포트를 설정하여 SSH 접속을 가능하게 함. 최종적으로 외부 네트워크에서 IP 주소와 포트 번호를 사용하여 SSH 접속을 수행하는 방법을 설명함.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc73fb11-40cf-40e8-9be2-2524ce3aa0f7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4PTIW2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFPsRxO0S9se4gowlwpIBh37N6YPlfhN7f2cxTk81RXWAiBvJ6hu53QEFNmrOl67LoCNcDdWPZZWGeW7TikT1e3TgCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3iVQRtzhg8ps2YyYKtwDZkK0AVyDAf%2BRBUZua%2BH4kL1vK7lI0YS2J6dtU%2BxbfstlfoMmdjOwA%2B2W7aLFNYinEJcJe%2Fm%2Bj3BjaAChngyUi0DxSGMmzIRVguWAjRzPPLfVOH%2FZNcp5jKAs%2Bqho2%2FmXt8KqWiDRYpqlpS7ZUmDXkdwwiFvVrb%2BhV8%2F6zvwSWEavP1Car%2FvTp8spQN11KTd59E48orXo6OE8%2BYpEB1UXUR8MS8tfhAnHDKFJKRbZjIPc5ar4ekho25UHUAlNVvbkclv1zQdraonq4nv1HZyoZ3OyAZTYZ0KMDG4O1FKK%2FKDOAHuHfSCHKl%2FveQWxPjBCJT0XXrN6laeUJPtJ0EsmmOzC%2FFKYKvDcH8%2BRBvEjsUfPH115qIKJAiWm%2BS%2BA%2FWsO2ColF5jlg6gmJve2wfAEgCeZDWj7inZB4LXQJ0uS2sa2ICbia%2B8ePPzhSKbQSHqB4uMkZKGLcRpbWojUCOrOchyQT0cYLx4RwdpHLaLwnbCJoI%2Buv7IdQ2vroewgu1bTvt9zE21tuMuAOAsN9ecqFmBhkxZdBkbC2Wpgy6ek%2FFPoITEiud%2F%2BlrF%2FQTouTvM4ihEshsjXa7tulc%2BZiE30olX3LrFtcXsvMW191pwfq4Cb45dUmzHdpsCMcG8wkNCHxAY6pgFCvGxcMIFEwnkdQ%2BGYnO1793xQ4ndXpFHbMoZm5MRP18FetaFoz8z0QeMagX%2BHbD1%2FYALYqdyt88V9jqNgGlxiczJTTA8nMyRjtbneu0Kn96hQS354Cpd9UpGfwxvN0zhL492Go6ark8bvraFigZ16SuWcXqPjeP6tV%2FhXEYYvN1nGxwC8TVvXDrsWP6Fded64IFknbJ2gA4zN88miUQGb8JPjgRXU&X-Amz-Signature=a1a78008221c5115ab1b75676e18a9738d9f6fb4d95a5235663653912718a492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기](https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기)

🔗 [https://velog.io/@dev2820/raspberry-pi-ssh-연결하기](https://velog.io/@dev2820/raspberry-pi-ssh-연결하기)

🔗 [https://poalim.tistory.com/12](https://poalim.tistory.com/12)

## [192.168.45.1](192.168.45.1) 접속 후 네트워크 설정 이동

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/daa2bdb8-eb79-4f9e-a9d1-9ff690bb913e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4PTIW2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFPsRxO0S9se4gowlwpIBh37N6YPlfhN7f2cxTk81RXWAiBvJ6hu53QEFNmrOl67LoCNcDdWPZZWGeW7TikT1e3TgCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3iVQRtzhg8ps2YyYKtwDZkK0AVyDAf%2BRBUZua%2BH4kL1vK7lI0YS2J6dtU%2BxbfstlfoMmdjOwA%2B2W7aLFNYinEJcJe%2Fm%2Bj3BjaAChngyUi0DxSGMmzIRVguWAjRzPPLfVOH%2FZNcp5jKAs%2Bqho2%2FmXt8KqWiDRYpqlpS7ZUmDXkdwwiFvVrb%2BhV8%2F6zvwSWEavP1Car%2FvTp8spQN11KTd59E48orXo6OE8%2BYpEB1UXUR8MS8tfhAnHDKFJKRbZjIPc5ar4ekho25UHUAlNVvbkclv1zQdraonq4nv1HZyoZ3OyAZTYZ0KMDG4O1FKK%2FKDOAHuHfSCHKl%2FveQWxPjBCJT0XXrN6laeUJPtJ0EsmmOzC%2FFKYKvDcH8%2BRBvEjsUfPH115qIKJAiWm%2BS%2BA%2FWsO2ColF5jlg6gmJve2wfAEgCeZDWj7inZB4LXQJ0uS2sa2ICbia%2B8ePPzhSKbQSHqB4uMkZKGLcRpbWojUCOrOchyQT0cYLx4RwdpHLaLwnbCJoI%2Buv7IdQ2vroewgu1bTvt9zE21tuMuAOAsN9ecqFmBhkxZdBkbC2Wpgy6ek%2FFPoITEiud%2F%2BlrF%2FQTouTvM4ihEshsjXa7tulc%2BZiE30olX3LrFtcXsvMW191pwfq4Cb45dUmzHdpsCMcG8wkNCHxAY6pgFCvGxcMIFEwnkdQ%2BGYnO1793xQ4ndXpFHbMoZm5MRP18FetaFoz8z0QeMagX%2BHbD1%2FYALYqdyt88V9jqNgGlxiczJTTA8nMyRjtbneu0Kn96hQS354Cpd9UpGfwxvN0zhL492Go6ark8bvraFigZ16SuWcXqPjeP6tV%2FhXEYYvN1nGxwC8TVvXDrsWP6Fded64IFknbJ2gA4zN88miUQGb8JPjgRXU&X-Amz-Signature=c71847f6fc04994faeb389a2edc2605bc59af37d8ec5164848f8c4d67081ae8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## DHCP 서버에 나의 MAC 주소와 사용할 고정 ip주소 등록

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07a37bb2-67a0-488b-a649-8fa8019a51a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4PTIW2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFPsRxO0S9se4gowlwpIBh37N6YPlfhN7f2cxTk81RXWAiBvJ6hu53QEFNmrOl67LoCNcDdWPZZWGeW7TikT1e3TgCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3iVQRtzhg8ps2YyYKtwDZkK0AVyDAf%2BRBUZua%2BH4kL1vK7lI0YS2J6dtU%2BxbfstlfoMmdjOwA%2B2W7aLFNYinEJcJe%2Fm%2Bj3BjaAChngyUi0DxSGMmzIRVguWAjRzPPLfVOH%2FZNcp5jKAs%2Bqho2%2FmXt8KqWiDRYpqlpS7ZUmDXkdwwiFvVrb%2BhV8%2F6zvwSWEavP1Car%2FvTp8spQN11KTd59E48orXo6OE8%2BYpEB1UXUR8MS8tfhAnHDKFJKRbZjIPc5ar4ekho25UHUAlNVvbkclv1zQdraonq4nv1HZyoZ3OyAZTYZ0KMDG4O1FKK%2FKDOAHuHfSCHKl%2FveQWxPjBCJT0XXrN6laeUJPtJ0EsmmOzC%2FFKYKvDcH8%2BRBvEjsUfPH115qIKJAiWm%2BS%2BA%2FWsO2ColF5jlg6gmJve2wfAEgCeZDWj7inZB4LXQJ0uS2sa2ICbia%2B8ePPzhSKbQSHqB4uMkZKGLcRpbWojUCOrOchyQT0cYLx4RwdpHLaLwnbCJoI%2Buv7IdQ2vroewgu1bTvt9zE21tuMuAOAsN9ecqFmBhkxZdBkbC2Wpgy6ek%2FFPoITEiud%2F%2BlrF%2FQTouTvM4ihEshsjXa7tulc%2BZiE30olX3LrFtcXsvMW191pwfq4Cb45dUmzHdpsCMcG8wkNCHxAY6pgFCvGxcMIFEwnkdQ%2BGYnO1793xQ4ndXpFHbMoZm5MRP18FetaFoz8z0QeMagX%2BHbD1%2FYALYqdyt88V9jqNgGlxiczJTTA8nMyRjtbneu0Kn96hQS354Cpd9UpGfwxvN0zhL492Go6ark8bvraFigZ16SuWcXqPjeP6tV%2FhXEYYvN1nGxwC8TVvXDrsWP6Fded64IFknbJ2gA4zN88miUQGb8JPjgRXU&X-Amz-Signature=ff6f5e55062494fd19f3a6fb8fc25165770154d3f744af69f01897bd2b55c890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 포트포워딩 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ad4ef0ee-9503-4486-9d7c-258418125976/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4PTIW2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFPsRxO0S9se4gowlwpIBh37N6YPlfhN7f2cxTk81RXWAiBvJ6hu53QEFNmrOl67LoCNcDdWPZZWGeW7TikT1e3TgCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3iVQRtzhg8ps2YyYKtwDZkK0AVyDAf%2BRBUZua%2BH4kL1vK7lI0YS2J6dtU%2BxbfstlfoMmdjOwA%2B2W7aLFNYinEJcJe%2Fm%2Bj3BjaAChngyUi0DxSGMmzIRVguWAjRzPPLfVOH%2FZNcp5jKAs%2Bqho2%2FmXt8KqWiDRYpqlpS7ZUmDXkdwwiFvVrb%2BhV8%2F6zvwSWEavP1Car%2FvTp8spQN11KTd59E48orXo6OE8%2BYpEB1UXUR8MS8tfhAnHDKFJKRbZjIPc5ar4ekho25UHUAlNVvbkclv1zQdraonq4nv1HZyoZ3OyAZTYZ0KMDG4O1FKK%2FKDOAHuHfSCHKl%2FveQWxPjBCJT0XXrN6laeUJPtJ0EsmmOzC%2FFKYKvDcH8%2BRBvEjsUfPH115qIKJAiWm%2BS%2BA%2FWsO2ColF5jlg6gmJve2wfAEgCeZDWj7inZB4LXQJ0uS2sa2ICbia%2B8ePPzhSKbQSHqB4uMkZKGLcRpbWojUCOrOchyQT0cYLx4RwdpHLaLwnbCJoI%2Buv7IdQ2vroewgu1bTvt9zE21tuMuAOAsN9ecqFmBhkxZdBkbC2Wpgy6ek%2FFPoITEiud%2F%2BlrF%2FQTouTvM4ihEshsjXa7tulc%2BZiE30olX3LrFtcXsvMW191pwfq4Cb45dUmzHdpsCMcG8wkNCHxAY6pgFCvGxcMIFEwnkdQ%2BGYnO1793xQ4ndXpFHbMoZm5MRP18FetaFoz8z0QeMagX%2BHbD1%2FYALYqdyt88V9jqNgGlxiczJTTA8nMyRjtbneu0Kn96hQS354Cpd9UpGfwxvN0zhL492Go6ark8bvraFigZ16SuWcXqPjeP6tV%2FhXEYYvN1nGxwC8TVvXDrsWP6Fded64IFknbJ2gA4zN88miUQGb8JPjgRXU&X-Amz-Signature=442d9dd534d1267acbda2075d01a369d9449ae6f1d0c834fd1d9cfad84288901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이제 아래 사이트에서 내 찐 아이피 확인

🔗 [https://www.whatismyip.com/](https://www.whatismyip.com/)

## 이제 외부 네트워크에서 내 찐 아이피와 포트번호로 ssh 접속

```latex
ssh pi@<찐 아이피> -p <외부포트번호>
```


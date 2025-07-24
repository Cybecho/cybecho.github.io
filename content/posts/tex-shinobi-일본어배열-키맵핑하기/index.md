---
title: "tex shinobi 일본어배열 키맵핑하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["개발환경"]
description: "TEX Shinobi 키보드의 일본어 배열을 설정하는 방법을 설명하며, Windows에서는 레지스트리를 수정하고, Mac에서는 카라비너를 설정해야 한다고 언급한다."
notion_id: "d7660270-d1f6-4065-bf0e-7837c66271a1"
notion_url: "https://www.notion.so/tex-shinobi-d7660270d1f64065bf0e7837c66271a1"
---

# tex shinobi 일본어배열 키맵핑하기

> **Summary**
> TEX Shinobi 키보드의 일본어 배열을 설정하는 방법을 설명하며, Windows에서는 레지스트리를 수정하고, Mac에서는 카라비너를 설정해야 한다고 언급한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOUUY3Q%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCeUmBK7VcpGNtoI1TP8rh%2FA4%2FhKF%2BwHOi5QzjFgc7c5AIgGvXRFLEwTb4%2FCsORZQFBCWdzylaVeEpJCjFigeWgOp0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPg0m8gTqURuAabHbCrcA92V%2FIzwvz5Yr6jA%2B%2FW%2B9H4ctNqcIy6305Tvr%2F6vAZC2p3wSZ%2BjtMBQ5fPbYtK%2Bx2UdV60y3tIu1eUBrRf%2B1%2BtqOxQg3eWHTlSkj7SzQwFdMFyYih1kXGuC2EKW9qRTLy8iN13xYWNHN7J2gvW3%2FWGqLfWpBtIfJyBmv9poLgA74hL216PXsg4Vk5j%2F5ZWlaCrefJzG90wTBeAoeqlCxl4%2BVbR9wwgW1Uo2yAz%2FXDs9wqkIEwLZD%2FMVye4Tgtu0QkaK00EA%2FoKHYUW%2BYiFOVoO1VS0O0lR52XMSIC4irVE86EvAwoCIFDIC1C4FtnXKqDDji%2FN%2BBWaEumgajGKtAGKZrb2LHuUmCIUH0BRSo3HgqVwSAxvYePO%2BoevdOYgqHQrgd7k14a0mzxXGpqhbQidR6udGdsCwHsiegx7BV91mfKfyn2r%2FlLsvm54o8f%2BTyhOC6I%2Bg2C8g62zV54ro5A3cspYfPa4EIreWtZCdftNEGHezv%2BD84r77lOcbnPMq97mrcYoOiiWUolmeQAS0Nuyn%2FeWZ8BKZnZ%2Bp1Bon9xTkZ2rwOEKXDLz1H9tnOXtsQW%2FTxsEuv2kevooPph1BFgqUdARBe6yd7WfnFAplcwvUNzPCmTAci2gK5xarNML%2FPh8QGOqUB4QCde6bs9byxx7FNHw57GcKUPC%2Fz9Ace%2B4OLYBYf%2FWQzrCenieQdgneFTL2%2FmGVkaNxmpiPWdw4R%2FRm1Dd%2Fi%2B1qzVpEPqJegmco34TGlFc50jZG3vt%2FHE8FnigLD96mjbt8kIx5BCz4rD3Qi7j0Ql3wEAWiyc%2FGjtSmoM0UqGm4INHUU6aqpOcNioNyH3K9DXV%2F1255G1Vz0JRVTLMY5J9WVvUfc&X-Amz-Signature=4d29f368e26ec7efae0b7eba8d35a333a8c329aed14aa3a9cdf669fe03b09792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://program.tex.com.tw/shinobi/#layout](https://program.tex.com.tw/shinobi/#layout)

🔗 [https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim](https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim)


### 근데 위에 따라해도 의미없음…

웹 ui는 일본어 특유의 배열을 인식하지 못한다.

WINDOWS는 레지스트리만져야하고

MAC은 카라비너 만져야한다


### MAC - 카라비너 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75927f47-6071-4ccb-947b-e05b83ec407d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOUUY3Q%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCeUmBK7VcpGNtoI1TP8rh%2FA4%2FhKF%2BwHOi5QzjFgc7c5AIgGvXRFLEwTb4%2FCsORZQFBCWdzylaVeEpJCjFigeWgOp0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPg0m8gTqURuAabHbCrcA92V%2FIzwvz5Yr6jA%2B%2FW%2B9H4ctNqcIy6305Tvr%2F6vAZC2p3wSZ%2BjtMBQ5fPbYtK%2Bx2UdV60y3tIu1eUBrRf%2B1%2BtqOxQg3eWHTlSkj7SzQwFdMFyYih1kXGuC2EKW9qRTLy8iN13xYWNHN7J2gvW3%2FWGqLfWpBtIfJyBmv9poLgA74hL216PXsg4Vk5j%2F5ZWlaCrefJzG90wTBeAoeqlCxl4%2BVbR9wwgW1Uo2yAz%2FXDs9wqkIEwLZD%2FMVye4Tgtu0QkaK00EA%2FoKHYUW%2BYiFOVoO1VS0O0lR52XMSIC4irVE86EvAwoCIFDIC1C4FtnXKqDDji%2FN%2BBWaEumgajGKtAGKZrb2LHuUmCIUH0BRSo3HgqVwSAxvYePO%2BoevdOYgqHQrgd7k14a0mzxXGpqhbQidR6udGdsCwHsiegx7BV91mfKfyn2r%2FlLsvm54o8f%2BTyhOC6I%2Bg2C8g62zV54ro5A3cspYfPa4EIreWtZCdftNEGHezv%2BD84r77lOcbnPMq97mrcYoOiiWUolmeQAS0Nuyn%2FeWZ8BKZnZ%2Bp1Bon9xTkZ2rwOEKXDLz1H9tnOXtsQW%2FTxsEuv2kevooPph1BFgqUdARBe6yd7WfnFAplcwvUNzPCmTAci2gK5xarNML%2FPh8QGOqUB4QCde6bs9byxx7FNHw57GcKUPC%2Fz9Ace%2B4OLYBYf%2FWQzrCenieQdgneFTL2%2FmGVkaNxmpiPWdw4R%2FRm1Dd%2Fi%2B1qzVpEPqJegmco34TGlFc50jZG3vt%2FHE8FnigLD96mjbt8kIx5BCz4rD3Qi7j0Ql3wEAWiyc%2FGjtSmoM0UqGm4INHUU6aqpOcNioNyH3K9DXV%2F1255G1Vz0JRVTLMY5J9WVvUfc&X-Amz-Signature=60b6b28a1e464c738aa9eb2f89db3cb57a525f6a031860b81779cbc246911870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 윈도우는 레지스트리 만져야합니다…


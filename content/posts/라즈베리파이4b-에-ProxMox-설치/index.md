---
title: "라즈베리파이4b 에 ProxMox 설치"
date: 2025-03-05T15:19:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "라즈베리파이 4B에 Proxmox를 설치하는 방법은 시스템 업데이트, 컴퓨터 이름 설정, 관리자 비밀번호 생성, Pimox 설치, 그리고 네트워크 설정을 포함합니다. 설치 후에는 웹 브라우저를 통해 Proxmox에 접속할 수 있으며, 실험 단계이므로 중요한 작업에는 사용하지 않는 것이 좋습니다."
notion_id: "1ad1bab9-e3f8-8097-b72c-f26d7149316e"
notion_url: "https://www.notion.so/4b-ProxMox-1ad1bab9e3f88097b72cf26d7149316e"
---

# 라즈베리파이4b 에 ProxMox 설치

> **Summary**
> 라즈베리파이 4B에 Proxmox를 설치하는 방법은 시스템 업데이트, 컴퓨터 이름 설정, 관리자 비밀번호 생성, Pimox 설치, 그리고 네트워크 설정을 포함합니다. 설치 후에는 웹 브라우저를 통해 Proxmox에 접속할 수 있으며, 실험 단계이므로 중요한 작업에는 사용하지 않는 것이 좋습니다.

---

🔗 [https://youtu.be/-hT231RiHMY?si=XAEybWfokJz7Jzpq](https://youtu.be/-hT231RiHMY?si=XAEybWfokJz7Jzpq)

🔗 [https://github.com/pimox/pimox7](https://github.com/pimox/pimox7)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f108f5ed-24bd-4158-a12d-c9c3878534df/b93cc4c7-7e56-4945-87c0-bb2500eb111a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JEVLJE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCKHicA3ueWtJxuAUtzcL%2BE1Kagg1T2VuMnMhAwHMd01wIgV%2F0AE0BW8dopCLpcy1aPl%2BfA9d9qBkOmSmSGI8TAkl0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNIZfp5D%2FQGepwU5XyrcA5vNIHYll1OkHTe6v%2F4EDGbA2%2BER87QxTbnQnlnYJfQxxDbt0zdMk3CZPAergpllxUilBb%2BiwuUmCiB0bAZupFgtj27sF5ihLIXZLS8gx5lwtSYLuH8f%2BSytpUlhHuAYFgNNsHs6%2ByvZ%2BN67UFjYmPe1bOX0aHRlWDw%2BGoZe%2BmtHpSspiK1lLAiud6IvmYkXYOtY%2FTxqVp7Lrxr%2Ff1X5PgEkkHVojX2yQbGTT4%2FxwqUscR86TSoRyLWOkF0AD5qW8ug%2Bl03KdqsVeWV%2B4gQfIc4sUs3Cm3%2F24d44Xh1ne3ACt1xLtgJ0as8XIE6WE%2FhuwleGaZRWtu7lrowBOqG%2FRG2ttFDR3A6LfM093V8lwsFfBm%2FQ6Uf%2BXB6L%2BqsPRcsYgcAmKSdBzo3%2Fku3VWKtznKGuVgH89TcONFub%2BoHBQ0K5%2Fx9kmYslil4DuwbOgVZwIbNW6nz1I0gA9JUhUKv70Kx7zpR5wgGhb2H4wIj0ELPFhySsgBwQXccDiIS5HenTbuJoKj5oMd1gDVN1zjxb2NT0FbTKrHnoZ%2B3E0hvT7GYDz31HFhepYMUsbcp4PUwvX3mpwLOd7i1fWGDsjL7pXxReNh7h3C3azHF08KCGYkW7x88h7nAhT53Ib9WBMNLOh8QGOqUB38VADYOuyC%2FzsS3Vh550xYyG8TseDWjZgqNEijTbyXhjmzwIUtRDD43UbthBgQFfUi64VcmtzR8CXmyCm107jqg%2FK1fNySWenvsbQl5uwr0Z7ML%2FoZIEz8anrdh09CROxUpcBDjK%2FRtQF6%2FOV8AowkXmNEHBekMv9D9cntK%2FmdIORh%2BwwhrWqi%2BOqaGiBSur7XcQjvp3nLXTlYpEzTWFq5hk7Z6g&X-Amz-Signature=74e08192f0aa3a487a44fbf7273c44a39fb627c81a8ac26a95940e7b65c18456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95eec244-6e22-4fe8-a34c-acb7978bead9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JEVLJE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCKHicA3ueWtJxuAUtzcL%2BE1Kagg1T2VuMnMhAwHMd01wIgV%2F0AE0BW8dopCLpcy1aPl%2BfA9d9qBkOmSmSGI8TAkl0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNIZfp5D%2FQGepwU5XyrcA5vNIHYll1OkHTe6v%2F4EDGbA2%2BER87QxTbnQnlnYJfQxxDbt0zdMk3CZPAergpllxUilBb%2BiwuUmCiB0bAZupFgtj27sF5ihLIXZLS8gx5lwtSYLuH8f%2BSytpUlhHuAYFgNNsHs6%2ByvZ%2BN67UFjYmPe1bOX0aHRlWDw%2BGoZe%2BmtHpSspiK1lLAiud6IvmYkXYOtY%2FTxqVp7Lrxr%2Ff1X5PgEkkHVojX2yQbGTT4%2FxwqUscR86TSoRyLWOkF0AD5qW8ug%2Bl03KdqsVeWV%2B4gQfIc4sUs3Cm3%2F24d44Xh1ne3ACt1xLtgJ0as8XIE6WE%2FhuwleGaZRWtu7lrowBOqG%2FRG2ttFDR3A6LfM093V8lwsFfBm%2FQ6Uf%2BXB6L%2BqsPRcsYgcAmKSdBzo3%2Fku3VWKtznKGuVgH89TcONFub%2BoHBQ0K5%2Fx9kmYslil4DuwbOgVZwIbNW6nz1I0gA9JUhUKv70Kx7zpR5wgGhb2H4wIj0ELPFhySsgBwQXccDiIS5HenTbuJoKj5oMd1gDVN1zjxb2NT0FbTKrHnoZ%2B3E0hvT7GYDz31HFhepYMUsbcp4PUwvX3mpwLOd7i1fWGDsjL7pXxReNh7h3C3azHF08KCGYkW7x88h7nAhT53Ib9WBMNLOh8QGOqUB38VADYOuyC%2FzsS3Vh550xYyG8TseDWjZgqNEijTbyXhjmzwIUtRDD43UbthBgQFfUi64VcmtzR8CXmyCm107jqg%2FK1fNySWenvsbQl5uwr0Z7ML%2FoZIEz8anrdh09CROxUpcBDjK%2FRtQF6%2FOV8AowkXmNEHBekMv9D9cntK%2FmdIORh%2BwwhrWqi%2BOqaGiBSur7XcQjvp3nLXTlYpEzTWFq5hk7Z6g&X-Amz-Signature=622dd8bb65fc2e03ab01dc1309916af6a2764a16f0cae49a936b3ac9e71e997e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

라즈베리파이 4B에 Proxmox를 설치하는 방법을 알아보겠습니다. 먼저 환경을 설명하자면, 라즈베리파이에는 64비트 우분투 라이트가 설치되어 있고 IP 주소는 192.168.45.42입니다.

Proxmox는 컴퓨터를 가상화하는 프로그램입니다. 보통 일반 컴퓨터용으로 만들어졌지만, 라즈베리파이에서도 Pimox라는 특별 버전을 통해 사용할 수 있습니다. Pimox는 라즈베리파이 OS에서 가장 잘 작동하지만, 우분투에서도 설치가 가능합니다. 다만 완벽하게 작동하지 않을 수 있다는 점을 미리 알아두세요.

설치 과정은 다음과 같습니다:

1. **시스템 준비하기**: 먼저 시스템을 최신 상태로 업데이트하고 필요한 프로그램을 설치합니다.
1. **컴퓨터 이름 설정하기**: Proxmox가 제대로 작동하려면 컴퓨터 이름을 설정해야 합니다.
hosts 파일에서 127.0.1.1이 적힌 줄을 찾아 192.168.45.42 proxmox로 바꿔주세요.

1. **관리자 비밀번호 만들기**: Proxmox를 사용하려면 관리자(root) 계정의 비밀번호가 필요합니다.
1. **Pimox 설치하기**: 설치 파일을 다운로드하고 실행합니다.
1. **다시 시작하기**: 설치가 끝나면 컴퓨터를 다시 시작합니다.
1. **Proxmox 시작하기**: 컴퓨터가 다시 켜지면 웹 브라우저에서 [https://192.168.45.42:8006](https://192.168.45.42:8006/) 주소로 접속하세요. 로그인할 때는 'root'와 아까 설정한 비밀번호를 입력하면 됩니다.
이렇게 하면 라즈베리파이에서 Proxmox를 사용할 수 있습니다. 하지만 아직 실험 단계이므로, 중요한 작업에는 사용하지 않는 것이 좋습니다.

---

# 설치 후 Debian 설치

[https://youtu.be/g1FXZIvVkq4?si=5z4YeRn3Ez49U-gK&t=557](https://youtu.be/g1FXZIvVkq4?si=5z4YeRn3Ez49U-gK&t=557)


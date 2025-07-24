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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f108f5ed-24bd-4158-a12d-c9c3878534df/b93cc4c7-7e56-4945-87c0-bb2500eb111a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQWPNAR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHU0khAPH%2FdUY7U3p1bt5vg1dYLIcWh%2BG8LytVDFmMdhAiEAt2lIEhD5ZT6LPhR7j5dj4BZziGWTN%2BTVRu8Cy17p%2BEkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG%2F5TMyCVW2ynSFlcyrcA1APpbZlB5v8woNaURIMRgqtvu9aaXTAcbAu6yDTyuj5fE8E2q6a%2FPQApNpu4DWefiDxl4kmHGjM%2BBa5a5NKrMmn5%2BZvEqkf2yhqPJRSRdg4BH%2BOAgCUVui%2Fby9Fi0S8FNa%2Bo5vN8%2B6tVweG%2FMNaIgd7dAQuWoHJBX%2Btb0tV5GcaZNliOxIMMSECQ7xaXvYxJAPgo99xkRH6JXlL12w18SHPBw7hLgdeYYgQvHdpvDgfvj%2BbcMEgNGB%2Fjb2Kwm9cp222sa0wAGdn89851nfLjHU8ND6Ie4LiIkpU3p6adRCVU1oaQjbUYLHKboO6qKqaEETGevriexM49LHKzr9068q1XvRU6%2BCbRUKN1PpxEszBwONGQq8trbJPwiV5FBLGIzmBeVs%2BMcfIidTQzXiW3%2BzgilfcTmHJMU1Hvc5XW%2FpzZJhOi%2BL5uEZXH%2BHwTmJFugG2Ijth6hPmEMuhoaRCywWOAM0BajW0qVE9guMBla3HlbCOx97xot2v1wD4fCSg3ZZxCPl2mVkT5YkheRNvBOC5LgkGF8Q9avNtdz2DnXcNIDVPevrrjg4nn3mMvPnX5y9pVL%2BI5c4y0HYn9o6Z6z3OPN5y51sHGcWaWMJNAKvJQhf1Rd0wks%2B23ZvYMLvQh8QGOqUBaSfjDwymwKCre165dAxubDlndRnzI3TMacjbK9kSIF%2FwgKrEDFPvxWnSXWDaRja2aTU4qa9P9Qelii%2B9oi%2FSoJxGRihG%2FhfkgPbTh%2F5xzkelKclwWk75pPod5kn3wVHt2Eb71pJmmBQgmaIVTiFmNMq2FYaiz3XyhG1uwnYpMw%2ByBtiSvzVmMTL%2FVhfti%2Bz12r6h4g4qtz%2F8gdalhmWL8tfL2Ean&X-Amz-Signature=b12cc669c6ceb9ab55932d69dbfaf9807a1d618622ad422c0bf2046f3ceaf0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95eec244-6e22-4fe8-a34c-acb7978bead9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQWPNAR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHU0khAPH%2FdUY7U3p1bt5vg1dYLIcWh%2BG8LytVDFmMdhAiEAt2lIEhD5ZT6LPhR7j5dj4BZziGWTN%2BTVRu8Cy17p%2BEkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG%2F5TMyCVW2ynSFlcyrcA1APpbZlB5v8woNaURIMRgqtvu9aaXTAcbAu6yDTyuj5fE8E2q6a%2FPQApNpu4DWefiDxl4kmHGjM%2BBa5a5NKrMmn5%2BZvEqkf2yhqPJRSRdg4BH%2BOAgCUVui%2Fby9Fi0S8FNa%2Bo5vN8%2B6tVweG%2FMNaIgd7dAQuWoHJBX%2Btb0tV5GcaZNliOxIMMSECQ7xaXvYxJAPgo99xkRH6JXlL12w18SHPBw7hLgdeYYgQvHdpvDgfvj%2BbcMEgNGB%2Fjb2Kwm9cp222sa0wAGdn89851nfLjHU8ND6Ie4LiIkpU3p6adRCVU1oaQjbUYLHKboO6qKqaEETGevriexM49LHKzr9068q1XvRU6%2BCbRUKN1PpxEszBwONGQq8trbJPwiV5FBLGIzmBeVs%2BMcfIidTQzXiW3%2BzgilfcTmHJMU1Hvc5XW%2FpzZJhOi%2BL5uEZXH%2BHwTmJFugG2Ijth6hPmEMuhoaRCywWOAM0BajW0qVE9guMBla3HlbCOx97xot2v1wD4fCSg3ZZxCPl2mVkT5YkheRNvBOC5LgkGF8Q9avNtdz2DnXcNIDVPevrrjg4nn3mMvPnX5y9pVL%2BI5c4y0HYn9o6Z6z3OPN5y51sHGcWaWMJNAKvJQhf1Rd0wks%2B23ZvYMLvQh8QGOqUBaSfjDwymwKCre165dAxubDlndRnzI3TMacjbK9kSIF%2FwgKrEDFPvxWnSXWDaRja2aTU4qa9P9Qelii%2B9oi%2FSoJxGRihG%2FhfkgPbTh%2F5xzkelKclwWk75pPod5kn3wVHt2Eb71pJmmBQgmaIVTiFmNMq2FYaiz3XyhG1uwnYpMw%2ByBtiSvzVmMTL%2FVhfti%2Bz12r6h4g4qtz%2F8gdalhmWL8tfL2Ean&X-Amz-Signature=c9727b4b73ef786c1e4698060bed5d08238867b77fcb6d1c071a566a250f0f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


---
title: "VPN서버 구축"
date: 2024-04-23T02:46:00.000Z
draft: false
tags: ["Other", "보안"]
series: ["Infra & Network", "Let's Homelab!"]
description: "VPN 서버 구축을 위해 Tailscale이나 PiVPN을 설정하고, OpenVPN을 사용할 계획입니다. Fail2ban을 통해 무차별 대입 공격을 방지하며, Docker를 이용해 OpenMediaVault, Nginx Proxy, OpenVPN, Fail2Ban을 간편하게 설치하고 관리할 수 있는 방법을 설명합니다."
notion_id: "bc4c874c-5da5-4797-aea5-07aac90246d6"
notion_url: "https://www.notion.so/VPN-bc4c874c5da54797aea507aac90246d6"
---

# VPN서버 구축

> **Summary**
> VPN 서버 구축을 위해 Tailscale이나 PiVPN을 설정하고, OpenVPN을 사용할 계획입니다. Fail2ban을 통해 무차별 대입 공격을 방지하며, Docker를 이용해 OpenMediaVault, Nginx Proxy, OpenVPN, Fail2Ban을 간편하게 설치하고 관리할 수 있는 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b6b1a443-6818-461f-a471-41cfdbe46783/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMQXT26%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIA6U1w2OJl13Ktj0FqepuT8%2FiXu7jObuuGtCdLbMGbWRAiEA9MtSuY%2FFE52dXPuscEUOHXk0Lizg2a5LjheNldlJWzIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEoQBVXc3NB1uZJyKyrcA%2BUZ%2Frc1wzlRQQ%2BmpqHIDoYazMOgSUBw%2BgyiGrAH%2BrBToa3nwxAq%2FA%2F2gdaecxzYCN7Dg62jH%2BBtCufDYK29%2Bh%2B1QPHwhtKLg%2BmQMWyTdx7HXNH%2F1heIN4lZyTDkbYng7Rtagnhw8SnXhb7qn%2F5bO%2BmW%2FX4EpkbvZzHYEGq904ROMbms68I4I1GfFIr8%2FmKDgNPUyvItYQzHTAsKnfYfQh77W%2FBYNxoB5n9srI4CBuqjmLrZ9ICmbn3VyTkpaG%2FK1crlG6NAVMzdwu6XMkHAMF0glKq5vVxhWuUmdn2bKAxNHb3XOp8TqgOq87rXVdx2W2wcjAtishMRJWHLFHhoQlRsVMTnUd5G9oX5f85lobnFK9tJRVrYi21f%2BbT75vbNefcTGEcFUdrgIHuX%2BdCi1Nq25lH6EJ%2BAoFKMBzcsYLC9q5Y4dnWl%2FVP%2F0ar9pmf3JPv%2BfN1SX0m2u%2Fa8smoNgcGufxp%2FQHnyYpNh8OKYP3658LSYXHXZdYbxe0gt%2FK2wfL1L01ENZqiRU%2BQnYDRQrB9%2BkULoTNPmtUXx0abZFxbQ%2BoDFJeB8COsvMuuemjd1JWgMA53%2BvVsFgsoaf0lswZkkYRAEQmeH1xjlYCcO6tjiGrt1RQXHyKb%2F7%2FU6MJvPh8QGOqUBbpc5IKyG%2Bs2I32nhlNy3cZH98XdW2OgpP84idcJnPSIC6PXcVYVt6OEAkEY1aVMwQpvC8scY9SBiAqxYstn%2FqI66M%2F00sXGBJG6kb7KqNGsgcP5zJBHhVgivBEu0NcxfPtGUYvE1MK3kjTTeMFFEUSbvD%2BqmAy%2BoIQQTbUMD68hTNdlaCzNiA0fMsNoMZUYn0VC8mXTfhtTYyB%2BvO07J8Ml8kQip&X-Amz-Signature=9d3fd2718f3f9f39d090cf35d42e8f5261ee72f12cfd573809756f64a0ac4352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
Tailscale이나 PiVPN 하나 설정해두시고 VPN 접속해서 SSH 접속하시는걸 추천합니다.
```

### proxy서버 설정

🔗 [https://youtu.be/q2lNjV07GlY?si=t3dQx47IFmfovI5l](https://youtu.be/q2lNjV07GlY?si=t3dQx47IFmfovI5l)

🔗 [https://xenostudy.tistory.com/693](https://xenostudy.tistory.com/693)

### VPN서버 설정 (openVPN 사용할거임)

🔗 [https://www.youtube.com/watch?v=kXCvanqUKqg](https://www.youtube.com/watch?v=kXCvanqUKqg)

### fail2ban 으로 무차별 대입공격 막기

🔗 [https://www.lesstif.com/security/fail2ban-ssh-43843899.html](https://www.lesstif.com/security/fail2ban-ssh-43843899.html)

🔗 [https://blog.ny64.kr/posts/setting-up-fail2ban-on-raspberry-pi/](https://blog.ny64.kr/posts/setting-up-fail2ban-on-raspberry-pi/)

### Docker 이용?

🔗 [https://reddb.tistory.com/192](https://reddb.tistory.com/192)


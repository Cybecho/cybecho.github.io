---
title: "도커에 crontab돌아가게하기"
date: 2024-04-20T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["Let's Homelab!"]
description: "crontab보다 celery를 사용하는 것이 더 좋다는 내용과 도커에서 주기적인 작업을 처리하는 방법에 대한 링크가 포함되어 있습니다."
notion_id: "66cfd67a-6ed6-4ead-8cc3-7d7eac85d578"
notion_url: "https://www.notion.so/crontab-66cfd67a6ed64ead8cc37d7eac85d578"
---

# 도커에 crontab돌아가게하기

> **Summary**
> crontab보다 celery를 사용하는 것이 더 좋다는 내용과 도커에서 주기적인 작업을 처리하는 방법에 대한 링크가 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7FIMI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCUElAwlHhZwXB1qmoi1juD32aVpNf2blV1mzPVw%2BvBPgIgAbTSN75MqMMiJ%2FtHIU%2FaioMLje88xWc6K9M%2FWFDg1CMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOkiZ77nehJm%2FXmO6CrcA%2Fgz%2FK3KG3nBLhCEBf4Rt6Xq62o%2Bgdnmkg84N4UvuGaZ9Tyn1rAmpPqfIhL1c5zbJWZuxj4N0iaBNyQB9S4WmBBU8YvuwwFe5GuojZay0KJ6kVw0%2F9QNPJXSMd3qGEBvpYQv1s0ZwfdfffadwsTHPQtRinv%2FRkMY%2FKPyHcUUu9WyJBVABuIYod1PuTugN6awbEv%2FW%2FVZ6xddQ2ODhkoBeK6OfyKIKPopE5wyD5vV3xaBmic2%2FFU0J7XIDAH9Unxxpaix35Ze8nBuJJyC8%2BRKFRO287tsWFVakSd%2BmGmadmg%2Bv6%2BCGMmDLomDRm3STnT0zElofiClpxJ7LejbmyS16n0c%2F2UecB%2BEVIKJXccUhJH1C6YWxskatCS%2BAojOw%2B43Pew3xXRzhWGE1uOczqtRyOGUp7JoMm7Vf0eYXhJow%2FezT%2FYEy%2BECKvvY9cxqDnbtYqszBhc%2FmulR3oU5jW6x9MAOlOO%2Fj0I0YhOFVzuMDGJcJMl8ce69uj%2BQwn1ZkxXnKhqIRX09uw1aMkfx23Gk0bP33pFd1%2BB7T1goU%2FTiHyjHCqSr%2BK1lJ%2FX26ZM%2FaASZ5lx4jx2nOGy774LmZw5EStzT98MoycrIi2BxV5Bl3qSFR9P2%2FrKn7Qh%2FPSZXMI7Ph8QGOqUB1hFFSf5RJUmxpfjfGGxe%2Fx7ClTgZn81lVcqfZZprDo91N17QzGYboOYJwf0LEzndj6Dk%2Biyce0cOaHIW3qxIqd7cvnpGLm4BGeqhnf%2FPhRgj7v8NZbHuf7QxMjztU0kg%2FvcMVoEKjNbALd7ftKr3qoeHxrYroJTgxA%2BcExRsnCTEk48jecShaqnz2p1ZNMJajLDIjK6GwO4N5StpchNMLIYA%2BfcW&X-Amz-Signature=99c468edec65cf5e4469f3af38ae83ce4cca1edb226c538d911979ec8a8a8877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/](https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/)


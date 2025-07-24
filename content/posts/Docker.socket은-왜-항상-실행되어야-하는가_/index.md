---
title: "Docker.socket은 왜 항상 실행되어야 하는가?"
date: 2023-07-25T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["Infra & Network", "Don't Hate Windows!"]
description: "Docker 소켓은 Docker 명령이 실행될 수 있도록 항상 활성화되어야 하며, 이는 Docker 클라이언트와 Docker 데몬 간의 통신을 가능하게 합니다. 소켓이 활성 상태일 때 Docker 서비스가 자동으로 시작되어 사용자가 수동으로 서비스를 시작할 필요 없이 컨테이너를 빠르게 실행할 수 있습니다."
notion_id: "82adb5e8-7378-4b12-a106-f80977c8ef72"
notion_url: "https://www.notion.so/Docker-socket-82adb5e873784b12a106f80977c8ef72"
---

# Docker.socket은 왜 항상 실행되어야 하는가?

> **Summary**
> Docker 소켓은 Docker 명령이 실행될 수 있도록 항상 활성화되어야 하며, 이는 Docker 클라이언트와 Docker 데몬 간의 통신을 가능하게 합니다. 소켓이 활성 상태일 때 Docker 서비스가 자동으로 시작되어 사용자가 수동으로 서비스를 시작할 필요 없이 컨테이너를 빠르게 실행할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6VIM6F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSnAX0V2qqrorOO1msXCk4fRxl%2FrdIGnEyKpRz%2FPZIIAiAVpyLHiLZxZ3bk05UTu%2Ft4CEmAHgWkiHO8%2BEjBLOgskCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdnA%2BrDQ30AZQCOk4KtwDIJqFSG2mCPpOCYz6gJN1XPBISP5qqx6uGsf%2BKDdxZanwsY1Jd2NVTkisknhAJkhieZyipv1HFBFRGBIne%2BEaL2IGEHMWl4yRp4A432eDOkMB%2Bs0HmJgi%2BbBA29Cz9I63UKOTiKfR9HHb%2BEtbpZ44MFGiX13eUddUZXedqz7lLeC7t4C0hxEQKWa6euY7p7yWGY3DGZrCKFVOZf9zaPRmNDT1B12u9jnALycz%2FUUIjFuXtNUSDB4ngb60Qndc4We3%2BBSkqd6IscM7wq8rhsXoupNTq0max%2Fk9Kt7yZsl0bF7y6zxjYugd95nPiSOhsthOvealS3U0Z2eMOQosg%2B9ubL81CqPpkbBy8sfuWSH5hWlmtToIHmpEEBD52gkIX6CzmKnOnRNxa8g28sSUYn14OaiAPDIfjjQk4NaG2PJVB5H%2F3npR8JwRTKleUkG1kDk03S%2BOcQApR%2Fhis5P8rvXNIxwLXbJGtpjHoZ9slbar4nDjcqV4B6SIO4GsPL1u9NIe3rI75UxdlBROQgN%2F7v0u6WpwMN5UsHZSiegd1uOzktPJxSE2Dx4uiGga3AbHfujYPzOBLIjJ6FmFru6dqSY3oIPA77PzM6Cyv5gk7jk%2BN7hymznzA7dfowhHMVEwzPaHxAY6pgFpZ%2BDwj%2FtMUGlLSGrJJQcpeAhkUxMLMgbLb6%2FKrJ6sEURr%2FhvOlzOTRsm2MUTn%2F2HB0xEIA9xsTVH01HpP1ZOpw6lWuEnPSqxRCTXH0svtG2ecDtl6q0pn4J6%2BwQZnVGOAkFU44JczUmDOFIY6OYvKHPC0zNviK6eEhvaSfowQ3cTpKgYQ48TWw1IOosrl84aRqvUUJnkbpAFgg8z%2FhKFz8zD%2Bpof2&X-Amz-Signature=40f4743a8ee37366169c55cd621dcaf530dee87c11347e4861ef7ca673864482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
sudo systemctl stop docker
```

> 💡 **요약**
> ---
>
> **소켓 백그라운드(데몬) 에서 계속 활성화 상태여야 Docker 관련 명령이 실행되면 Docker 서비스가 자동으로 시작될 수 있기 때문에**
>
>

표시되는 메시지는  명령을 사용하여 Docker 서비스를 중지했을 때 Docker 소켓(docker.socket)이 여전히 활성 상태이거나 활성화되어 있음을 나타냅니다. 이것이 무엇을 의미하는지 설명하면 다음과 같습니다.

> **Docker 서비스**

> **Docker 소켓 **

docker.socket이 활성화된 상태로 유지되는 이유는 Docker 명령이 실행될 수 있고 필요할 때 Docker 데몬이 시작될 수 있도록 하기 위한 것입니다. Docker는 명령줄 인터페이스(docker 명령)를 통해 관리되도록 설계되었으며 이러한 명령은 소켓을 사용하여 Docker 데몬과 통신합니다.

소켓을 항상 활성화하면 매번 수동으로 서비스를 시작할 필요 없이 Docker 명령을 실행할 때마다 Docker 서비스를 빠르게 시작하고 컨테이너를 실행할 수 있습니다. Docker와 상호 작용하는 편리한 방법을 제공하고 Docker 컨테이너를 원활하게 관리할 수 있도록 보장합니다.

데몬을 실행시킨다는 것은 데몬이 백그라운드에서 실행되도록 한다는 의미입니다. 데몬은 사용자가 직접 제어할 수 없는 프로세스로, 시스템 부팅 시 자동으로 시작되거나 사용자가 명시적으로 시작하여 시스템 종료 시까지 계속 실행됩니다.


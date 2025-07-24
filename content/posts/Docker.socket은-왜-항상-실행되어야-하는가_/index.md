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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKM2PBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAxYkpn8rhZgh%2BclURQTN9eFBtd0B8EUOS6p1IhJ8W2eAiEArH2eyC%2FevOFA7PubfTv3tCfg98CCl5DqgYE2egMKvIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKU5lBk%2F%2B9EsgjP3ZircA19FOajrBJKVeFR96HPxjkqYFIaMjIzEsdT4AIqlEnmNxNsLKA7Wa2kwVHgcx1ZA8MVuJVJG0loRG7Bh7Tdug5T45lbiCmH1ppHeJfA9AR8hXvCGCMSoFCbF1sIeGUljbkEnvNYWBiyQpH%2Fk3uqM4Q%2FDHozOLfDY4foQ9Jm1bt1Not%2Fa%2BLdOJnPR0WaO8WXFAc%2FBsQHAdG7qIfTefZQn2SyfPrAZOx1RMgihK6sFC2UI4kETfQGigsMF6QBGHwtDKlWpfw9BKGXFKZbYCaHIUxh1CMzCIZ0aMgN1yFDOvrXSNUFjp8Qt%2FcFog89TX4NEgZGFRJOiDmdZRQnYrv3V7DQCcSSjlpkz0i6Gj3%2BSVoHmtbIH3nG1Ybx8mtKFxx5uQCAEWXPNDA8ioRT5jmxgftRP6P2elJMd0v5yPQVBbumKNEnhaf8uqDB0RzGGt%2BZ85%2Bd%2FQHnnOmMSk1QGtBQ8%2BqIFWbsr2EFIN60jUn0rQjOmMUDD7sycbSyK92V9%2FHQE%2FeTjiGnyguzFfcMe0JkBcyWpfFNiPsdmea8%2BtxTw5UWB1JPz13EAGDUlkilTT51CwcJH8XT0uJPqxfN2hz1Gx0NQEboXmCkn6SLWYFguXh%2FbTqY%2FoWuR%2FIbzMS%2BGMN%2FPh8QGOqUB6ojF16tTPi%2BiEZuVajIMwYZ7%2Bflb256K%2BfJGD4fKU43iBk%2FuT0qy%2Fs2Lj3cjQZyQC4WlbJ466IuoTsS7TGNE6elouWsd%2FHkcz6gAWG5YLtmPY6fVWTCgYs%2BYOpe2%2B7QUgEOBcUfFM9%2FPTco8TJg4spQ%2BSkxcnd5kwS0fyVQdxmxaNbsVBHN33vN%2BgnQ0c5iwxlYZtAfR9%2BUZ9DJP6%2F35mGJn0q0Y&X-Amz-Signature=8679ba25f0d0f6b7e7ad76247f55ed3fec1d03ee93db5bb339b72a603213e34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
sudo systemctl stop docker
```

> 💡 **요약**

표시되는 메시지는  명령을 사용하여 Docker 서비스를 중지했을 때 Docker 소켓(docker.socket)이 여전히 활성 상태이거나 활성화되어 있음을 나타냅니다. 이것이 무엇을 의미하는지 설명하면 다음과 같습니다.

> **Docker 서비스**

> **Docker 소켓 **

docker.socket이 활성화된 상태로 유지되는 이유는 Docker 명령이 실행될 수 있고 필요할 때 Docker 데몬이 시작될 수 있도록 하기 위한 것입니다. Docker는 명령줄 인터페이스(docker 명령)를 통해 관리되도록 설계되었으며 이러한 명령은 소켓을 사용하여 Docker 데몬과 통신합니다.

소켓을 항상 활성화하면 매번 수동으로 서비스를 시작할 필요 없이 Docker 명령을 실행할 때마다 Docker 서비스를 빠르게 시작하고 컨테이너를 실행할 수 있습니다. Docker와 상호 작용하는 편리한 방법을 제공하고 Docker 컨테이너를 원활하게 관리할 수 있도록 보장합니다.

데몬을 실행시킨다는 것은 데몬이 백그라운드에서 실행되도록 한다는 의미입니다. 데몬은 사용자가 직접 제어할 수 없는 프로세스로, 시스템 부팅 시 자동으로 시작되거나 사용자가 명시적으로 시작하여 시스템 종료 시까지 계속 실행됩니다.


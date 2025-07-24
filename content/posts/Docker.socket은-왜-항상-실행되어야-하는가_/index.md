---
title: "Docker.socket은 왜 항상 실행되어야 하는가?"
date: 2023-07-25T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["Infra & Network", "Don't Hate Windows!"]
description: "Docker 소켓은 Docker 명령이 실행될 수 있도록 항상 활성 상태여야 하며, 이를 통해 Docker 데몬이 필요할 때 자동으로 시작됩니다. 소켓이 활성화되면 사용자가 매번 수동으로 서비스를 시작할 필요 없이 Docker 명령을 신속하게 실행하고 컨테이너를 관리할 수 있습니다."
notion_id: "82adb5e8-7378-4b12-a106-f80977c8ef72"
notion_url: "https://www.notion.so/Docker-socket-82adb5e873784b12a106f80977c8ef72"
---

# Docker.socket은 왜 항상 실행되어야 하는가?

> **Summary**
> Docker 소켓은 Docker 명령이 실행될 수 있도록 항상 활성 상태여야 하며, 이를 통해 Docker 데몬이 필요할 때 자동으로 시작됩니다. 소켓이 활성화되면 사용자가 매번 수동으로 서비스를 시작할 필요 없이 Docker 명령을 신속하게 실행하고 컨테이너를 관리할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5L5AYS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDbTx%2FSS7a7a0zTQoX%2BMvZbjS85LC3scz5LWCSbWEecmAiEAtZ3d4W5AMhgYi0lnP4hng0spo7Enz4kXaqUBrrRJ8oAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBtptbss9t3WU96lfCrcA090bept2P1fJdSmGm%2B95APH2doIot0L3%2FSzx%2B7rmEpjgspeWf7qceA1OqE6NN2X0U12dFC0XuNtE9QKFN%2FUd9qIEkufr5rm4t5EOFA8l%2BQA0jRjttkq%2FUHnYMan7n31Qq%2Bi2nEBScsJQovZmXP9VTBNqCU2Th2%2FEdbooPqQhqEmu%2FipfqfeW%2BjJ8AJ2OQafJRp3AzPRIWuZOfxhMGGuIwzAcCoO8S97oKlCcRaff69lcpDaY62KBEbUSZNnQp%2BhEUBs6b2HatsaS8BwG8k11mqKdKkVoIqmzXUIpYqe5a%2BGZ6d1Ko0Qok1afX0X%2FuktlPz6lvQcc2tAMj8UR68ZH7b3Lmd7GF5fZZK%2BUXxWw6Cu6%2FeyE%2BmqAkrHD3GjuvCOi3NfPskHLHjq3sx6m5h%2BlAuGfVZ3iQGAJGoGFFpjQQ0nVRlMsBUAI71r9QGtjyRoA7RSJSSEYGvBvvIYKrM8di7fYXTUAVZGu0MhgpE9FxTWKBHywehk7gQE3ailA0%2FN2Yh89yU2tzOvZUJLqzr1bhDgwUPmp9nrswcv78TD5H8YgYWWIIWsyKRVXQwcW4GRWnlKsX8ngxWgat6qm1eoRwdT3jIR2oAiL5OvyQUpkyeCWF3TUiFsCPmRS7TEMKKbiMQGOqUBVSJbS04CPmkWkWfzdRt76ALXvF4NZ0HG0ew%2BoKgCUkT%2Bi8%2FkBKPs%2BQNmmdzMWflXq4kVZCfUm6jerYmxcj7wkg9sV%2Fh5fgWe7giYwX7TH57czs32udWGnzq%2BmzviRj6rMy5Tx%2F0UMdC%2Foy2kodyYEea3U7gBpb0%2BbWeN4sik7sSruteJdZKj5asXNWDbGWctgArQRnogNQDgoNQS%2FPBzC38zlCT%2B&X-Amz-Signature=400a2ea85a806f11870ca99187e4b9f67578105b237bba96144940e6c9ee2331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


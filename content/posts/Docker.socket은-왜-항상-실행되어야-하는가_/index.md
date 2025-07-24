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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY2JUBQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC1j1I03UFPp%2Ble01ZzwpOHEzVcmNQHanKz2LcvxpwX8AiBeuroUYpY2XxDjoGRx1foOZIB6wJ8JOkJPuwfOaGOn%2Fir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMY5K68JEO6Gby5V9KKtwD59VjgkgZRIrVagPo2Fc76aWdcvF3ckZ5jF7PuvP1mztGjY%2FQ7eqwMVEZ799DuUeGgQgTj%2FOZWHA1JgSo5jSiIVYmaNeV8S%2BHifRMa4u5oI4ciyTx6xzSGTVelIHCzvMEyS3mbiajQbBQ2o%2Bl2ADEDUU6iB2PujmECAIlYmkqJqwBj%2Fjnvv0EgKAAvlAW0EX4bH3cDvUTEbxtvwFNKwzZqGsj9ykiFE58ZyPcsgOCHMF%2BMcW6Lku7dcI8fORCFhTaweApjNd4NaMBS2bsm4FU3ARAPn81PL1Ber%2BfJatC1iAdEm8Jw8r5BQBNuFeCct63wnDYt2%2B6mpBAGRtPmFi8Tl0l4Q7dyF0taC79XqSBqh0%2FHFk%2B%2BEtoRv4ALWpqsploMoEqzaIq24kEroW1LRxp7ZAJWTawgNXFFB0BmEZPAaZH20QMtCrbOaWVtlgDwx0MbKSZH%2B76sEjqYDx8yraFhgmIcIEZbrUkOGW0CU23thFYM7Q4tz8Wv1%2F1Rm%2B%2BuTZ9GQssgVQSaVjC5%2FKRrImFTx%2BWWnGtuZ7e8ZN3556vnAoNJ2gAbvouhuA7XiZSe4a4v3OuW7Kyqaxk%2B11%2F5%2BAUb9JdkJt6AeyZvLxCKsdNgNqESNxNdKlEuCcCcHYwmNCHxAY6pgGRFytmPcfjRUsLj0pDdMxxl6lUU%2Bq5TIpaxveYjlOCoiHmmTpoaQF8Qrpish96x04gmT%2BDNjXLqtGaeGJ9z59lSgBdm%2BVgd80wX4%2FiAAolOVSrM%2F2NpxYaGe2FyJwa4FoS7SBRo0D1susIfyrY8moWxZo9LX5Wwr%2BXTf%2FjIVwh%2B84aYfTQRa%2Bt3blhaEF9trqPQ6BPNu50D%2BZ%2FlTwz8I73ig7agmc5&X-Amz-Signature=fcfd8b454d4a417f6c56ce2edb0dc03803bb6030668e0d4729d9623278e9f298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


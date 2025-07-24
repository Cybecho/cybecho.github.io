---
title: "NAS & 옵시디언(도커)"
date: 2024-07-04T11:30:00.000Z
draft: false
tags: ["ubuntu", "Docker", "obsidian"]
series: ["Let's Homelab!"]
description: "옵시디언을 도커와 포르테이너를 사용하여 설치하고 동기화하는 방법에 대한 안내가 포함되어 있으며, 외부 접속을 위해 포트 포워딩 또는 역방향 프록시 설정이 필요하다는 주의사항이 있습니다. 플러그인 동기화를 위해 숨겨진 디렉토리인 obsidian도 함께 동기화해야 합니다."
notion_id: "4d542bc3-6006-4b0f-80b1-1738bcb274b0"
notion_url: "https://www.notion.so/NAS-4d542bc360064b0f80b11738bcb274b0"
---

# NAS & 옵시디언(도커)

> **Summary**
> 옵시디언을 도커와 포르테이너를 사용하여 설치하고 동기화하는 방법에 대한 안내가 포함되어 있으며, 외부 접속을 위해 포트 포워딩 또는 역방향 프록시 설정이 필요하다는 주의사항이 있습니다. 플러그인 동기화를 위해 숨겨진 디렉토리인 obsidian도 함께 동기화해야 합니다.

---


![Image](https://obsidian.md/images/2023-06-logo.png)

# Web 버전

[https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/](https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/)

# 로컬 버전

> 💡 **주의!) Self-hosted LiveSync를 외부접속이 가능하도록 하려면, **
> 위의 5984포트를 포트포워딩하거나, 역방향 프록시 설정을 사전에 해주셔야 됩니다.!
>
>

[https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/)

# 옵시디언 웹 배포

[https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/](https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/)

# 플러그인도 동기화하기

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a007749a-9a71-4c46-8470-602034fc382d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5IXO6Q%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjI8aK%2FuHiVD3VMQyN1bRHRRF70OU3OMGnkeQ8g94oBAIgUl8PhJB%2BW%2BX7lh6W4PPvIauIjQ1wJXBKdcZ88Mi20toq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPlvQH09tOXLEuDL0SrcA9KSNIOfTvR8fbHmkDnpfbiSbKjMyOw8a9Bfsg1sgzB%2FFKVrmgKiq5%2B%2F5VbzJ0d8T3qMsu03xhOlBMwGmWaORs3%2BNlO0GZ25gKF%2BNSVTPISrZ75SRxLZzsULA%2F0yIDqz0OcWAfdWm%2BauhUBQTlquvQmODNMhFKHT1p1OWilZaVoIV2teJ2eoRfVu%2BETo0P3dcLRvmSD6qNIpT6CCG%2FcUhL5xr9%2FClYnp3S0XNgjjz469WASGJmJ4xpe3oBjLU67bUPvlxqVx01REziFfKyWWqjIrR7yAU7%2FmhN4S5cw3g15oucj7o9eSrFhkNplvE7OMJjDW%2BKF3wBg%2Fx%2Fa4C8rSt05cU0Oq6n7YMv7p3LEjRHmWp8iRaMY%2BSgto26Afw7fmzRTZxlP2opLZrxNsloktepOQ0pEQumviL6b8bJe8pSVK6aRNw2XSLY%2FDNrudNpCddr08LYomG4S6ASlARRWBWPDZlRN9TrnPQ19G8936mWpEMeiZkNPtWbWjlcCKtw7yg1AHcZ3M45iH84NeVUGwLOJwSxjGUtB2j%2B6uzccmczQwWQlgTMIJbFYJRkicm6PHyUvWHC%2B8IngAlf%2FzksMM9Xy8pUPqY2UIM8Cn5kH%2FOy81LNIJYpmx8wl6uwstMMCbiMQGOqUB6FOzUvRYAB12iHekw%2FLgPOvCygoYhNAMceAkfQLB6LwfCvtb53C%2BQvQkxSOT4jTqFKRk8vpS%2FydAdQYb32tQviXzMGn8x5wv6JkNF6EEU3YOxFTAZNLMRZwNa2KCqCpcJT0BdzIfHr%2Bx2ZGkRMF%2F5RzWrgRTGB%2BDi90cTAFxqAYeQgk97Er7o2RV7HkNcq2PlZAPDVlGvmckCN8FjZ1fi6S0XHJF&X-Amz-Signature=b264e42e49e760f652650b4facfa87f08017e6f37d9685188e7726b3cd5c2cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f4b578d-a6c2-4704-a355-6bb8a8fb8093/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5IXO6Q%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjI8aK%2FuHiVD3VMQyN1bRHRRF70OU3OMGnkeQ8g94oBAIgUl8PhJB%2BW%2BX7lh6W4PPvIauIjQ1wJXBKdcZ88Mi20toq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPlvQH09tOXLEuDL0SrcA9KSNIOfTvR8fbHmkDnpfbiSbKjMyOw8a9Bfsg1sgzB%2FFKVrmgKiq5%2B%2F5VbzJ0d8T3qMsu03xhOlBMwGmWaORs3%2BNlO0GZ25gKF%2BNSVTPISrZ75SRxLZzsULA%2F0yIDqz0OcWAfdWm%2BauhUBQTlquvQmODNMhFKHT1p1OWilZaVoIV2teJ2eoRfVu%2BETo0P3dcLRvmSD6qNIpT6CCG%2FcUhL5xr9%2FClYnp3S0XNgjjz469WASGJmJ4xpe3oBjLU67bUPvlxqVx01REziFfKyWWqjIrR7yAU7%2FmhN4S5cw3g15oucj7o9eSrFhkNplvE7OMJjDW%2BKF3wBg%2Fx%2Fa4C8rSt05cU0Oq6n7YMv7p3LEjRHmWp8iRaMY%2BSgto26Afw7fmzRTZxlP2opLZrxNsloktepOQ0pEQumviL6b8bJe8pSVK6aRNw2XSLY%2FDNrudNpCddr08LYomG4S6ASlARRWBWPDZlRN9TrnPQ19G8936mWpEMeiZkNPtWbWjlcCKtw7yg1AHcZ3M45iH84NeVUGwLOJwSxjGUtB2j%2B6uzccmczQwWQlgTMIJbFYJRkicm6PHyUvWHC%2B8IngAlf%2FzksMM9Xy8pUPqY2UIM8Cn5kH%2FOy81LNIJYpmx8wl6uwstMMCbiMQGOqUB6FOzUvRYAB12iHekw%2FLgPOvCygoYhNAMceAkfQLB6LwfCvtb53C%2BQvQkxSOT4jTqFKRk8vpS%2FydAdQYb32tQviXzMGn8x5wv6JkNF6EEU3YOxFTAZNLMRZwNa2KCqCpcJT0BdzIfHr%2Bx2ZGkRMF%2F5RzWrgRTGB%2BDi90cTAFxqAYeQgk97Er7o2RV7HkNcq2PlZAPDVlGvmckCN8FjZ1fi6S0XHJF&X-Amz-Signature=8af51524dc3eb7f21c120b897d306f956a41b539793bd29fc61b26673e1711f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

숨겨진 디렉토리인 obsidian도 함께 동기화하면, 플러그인도 정상적으로 동기화된다!


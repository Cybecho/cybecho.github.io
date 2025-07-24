---
title: "tailscale VPN은 왜 32비트로 돌까?"
date: 2025-02-18T01:36:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!"]
description: "Tailscale VPN의 32비트 버전은 구형 하드웨어와의 호환성을 위해 제공되며, 안정적인 연결을 위해 CPU를 더 단독으로 사용한다고 주장되지만, 실제로는 경량화된 메모리 요구와 넓은 호환성이 주된 이유이다. 32비트 시스템은 제한된 환경에서도 안정적으로 작동할 수 있도록 설계되었으며, VPN의 안정성은 네트워크 프로토콜과 소프트웨어 최적화에 달려 있다."
notion_id: "19e1bab9-e3f8-8061-9405-e82e85ad04c9"
notion_url: "https://www.notion.so/tailscale-VPN-32-19e1bab9e3f880619405e82e85ad04c9"
---

# tailscale VPN은 왜 32비트로 돌까?

> **Summary**
> Tailscale VPN의 32비트 버전은 구형 하드웨어와의 호환성을 위해 제공되며, 안정적인 연결을 위해 CPU를 더 단독으로 사용한다고 주장되지만, 실제로는 경량화된 메모리 요구와 넓은 호환성이 주된 이유이다. 32비트 시스템은 제한된 환경에서도 안정적으로 작동할 수 있도록 설계되었으며, VPN의 안정성은 네트워크 프로토콜과 소프트웨어 최적화에 달려 있다.

---

### 근데 다 조사하고 찾아보니 tailscaled GUI만 x86이고 실제 VPN은 Arm64 로 도네 ㅋㅋㅋ

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dd23cf6c-4cc5-435b-8607-20fc57f31ae6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDFM35Q%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICS6Fg3dNeUZuOOgCLacb5HCRR7gyleYZILv12OinZpSAiAK3cTuckK4Ee0zv1ll1Lu84ZLnpK9JGmTe9axwl0niCCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIML6tjfs2CvGLf0EF2KtwDi%2BaDY4qELMIu3yLmjAivACMNa7UQfZRS1dnjX6Wcf4S0oweX7FEkTKIN4fNgtVmsblk9n8cmyVk%2BBocyB7hmB%2FpN%2F5FG%2FYI1P9pRWl1Pwku8n3iBXFHx5pRqn6e399pgp3kcUWVMy3undP9hE1i3pJfhKkdx4e0rkfAjr8fc2VBUoOFlL9uJRvBNP4DE84thRCnrdptT2FrT4FFVZvrdSIBU3W9H6E16hS9ixWs%2FDJ%2FijukKmKV%2FSKNNPyYg%2FTWPrU1f%2BddJp111CQXrCGzpl%2FCh1HSSd2RaiGKt%2FhM0P3mdWXYxy9YVCH0rk%2Fg1yGlmdB4fdn3EBvC%2Fdp8EzjvkJBCzB7EAA32L9NI3x4fhZlvUEeFdFaysI34DvoNYQk5AU446ZAr%2Bo6m5djZ3XLz%2FK9mmtsibNCnf0A%2FWHrA7owJPkJeuyZwkbV6ugoq0ZJwxpruPwZ6UhJxIw8D32joOafh9im5bZ1rSUaGu59EaZ3UiRX2BuSx7BkgeQh%2B8tdccOZOhxMYEqMIF4oywut1iaRyqP3bYwPD%2BfCFmkEgF7UFlKUVHCFgL80AS%2BDJbGq7yMu32dvfMT4FMO0DBBZMneA%2Bg7pExNvZPHCMWnvYImj%2FpVaLtE4E31OiHqsMw4faHxAY6pgGEt%2BxIPPAeG1g%2BToamUIiJhgrLfVUriXr0bLH45PfKjGO7zy%2FG6e96I75FE4ZlXmEoZZqEGf80Jpe3JkbWGuandoQZLqeK5AkDeyxHGEJ%2BidFGBo9%2FLvmvQCRInxMtUWaw5HsPuqydO9pqeSahJOUbMKfnx4jXNFNp%2FY2IVaCfIYi5CNMW%2FcbfzDdOx8FEi8o1Bv%2F13WvRyswmUlq3haXKnNBb1wSi&X-Amz-Signature=7b6cb56788d70e97e4253b3e1a68edde23d626220d30d1c8749ad82fc5627993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### CPU 자원을 더 단독사용하여 안정적인 연결을 위해

- 32비트 구형방식으로 CPU를 조금 더 점유하여 사용함
  - 구식 방식이지만, 멀티프로세싱보단 CPU를 조금 더 점유하여 사용해야 더욱 안정적인 VPN연결이 유지되겠지?
```bash
엥? 32비트가 CPU를 더 점유하나?
```

> 강사의 답변은 VPN 연결의 안정성을 위해 32비트 방식이 CPU를 “더 단독 사용”한다고 주장하지만, 실제로 신뢰할 만한 자료들은 주로 **32비트 버전이 넓은 범위의 호환성과 경량화된 메모리 요구량 때문에 제공된다는 점을 강조**합니다.

### 32비트 이상의 RAM이 필요없어서?

- VPN이 굳이 4GB램을 사용할까..?
### 호환성의 이유로

- VPN 프로그램들이 32비트 버전으로 배포되는 주된 이유는 **호환성과 경량화**에 있습니다. 32비트 바이너리는 오랜 시간 동안 다양한 운영체제, 특히 임베디드 시스템이나 오래된 하드웨어, 라우터 등에서 잘 작동해 왔기 때문에 넓은 범위의 디바이스와 호환성이 뛰어납니다. 또한, 32비트 환경은 메모리 사용량이 상대적으로 낮고, 크로스 플랫폼 개발과 배포가 용이하여 배포 비용 및 유지보수 측면에서도 유리합니다.
  - 즉, VPN 클라이언트는 사용자 기반을 최대한 확대하기 위해 32비트와 64비트 버전을 모두 제공하더라도, 32비트 버전이 여전히 많은 시스템에서 안정적으로 동작할 수 있도록 고려한 결과라고 볼 수 있습니다.

---
title: "tailscale VPN은 왜 32비트로 돌까?"
date: 2025-02-18T01:36:00.000Z
draft: false
tags: ["Infra"]
series: ["Let's Homelab!"]
description: "Tailscale VPN은 32비트 버전을 제공하는 이유는 구형 하드웨어와의 호환성 및 경량화된 메모리 요구 때문이며, 안정성은 네트워크 프로토콜과 소프트웨어 최적화에 달려있다. 32비트 방식이 CPU를 더 단독으로 사용한다는 주장은 현대 시스템 설계 관점에서 근거가 부족하다. 32비트 환경은 다양한 운영체제에서 잘 작동하며, 메모리 사용량이 낮아 배포와 유지보수에 유리하다."
notion_id: "19e1bab9-e3f8-8061-9405-e82e85ad04c9"
notion_url: "https://www.notion.so/tailscale-VPN-32-19e1bab9e3f880619405e82e85ad04c9"
---

# tailscale VPN은 왜 32비트로 돌까?

> **Summary**
> Tailscale VPN은 32비트 버전을 제공하는 이유는 구형 하드웨어와의 호환성 및 경량화된 메모리 요구 때문이며, 안정성은 네트워크 프로토콜과 소프트웨어 최적화에 달려있다. 32비트 방식이 CPU를 더 단독으로 사용한다는 주장은 현대 시스템 설계 관점에서 근거가 부족하다. 32비트 환경은 다양한 운영체제에서 잘 작동하며, 메모리 사용량이 낮아 배포와 유지보수에 유리하다.

---

### 근데 다 조사하고 찾아보니 tailscaled GUI만 x86이고 실제 VPN은 Arm64 로 도네 ㅋㅋㅋ

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dd23cf6c-4cc5-435b-8607-20fc57f31ae6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BYP3NY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAYp7WifRWaYnX1%2BBAr%2BZ5dXmqEDsJO0KJ%2BJEB95FQoXAiALM87i6Y2OdO9oy9FRZIpxvsSkIHmkeiXQVZ9Km%2Bvhyyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMwqZzJKPUni%2BayEZYKtwDfOfUvpo8Y24tgGSt6e9VZBS5MG%2BOgvq%2B2jEJUe%2B9yC55Bamwx5A57PqYGiJ5YVNiE18eS539qpmntVrfM7%2FbOs5gNEU72O%2BfOBKRQd3wqevBRjp%2BuRla5oeYoWhJMOuvD0A1s4MvYHzw84rvX1dZJBZWTTv3QRqUrSSqSOkGmlFaqsFNy0kKPIpAnYQWwL1gIiHzmodWD6%2F1DR78HrI1r0DbDrnop29R%2FlkpUMQhWPd1KKxYmowDweTqQKAZcBkUCxXMlqVgrMlj4sUgrposAV9YycUATpire%2FkmDGImNu3paAk4SkFQjG9WkTlJN2f1niT422%2FyKvAW%2F9SwxqKSoyxwdgGcNU3Z7jbckPUmEkDBZNg1tuomBLMi4bfQxMJcro9kiT%2FNyqyCGL3VRextXS2B6xL2aBxL%2BJ%2BtJCfyImlYeJFfk5ypl0ZM8j%2Fvt93SkSw9fA0JT8hbYRNeBU8O%2B5RrinAlv5HxJLeII7MLlmijWxEc%2BX4OrY8%2FZeeNjxd3%2BYd%2BmR7LgAm1verZ%2FsJ0%2FTPWQefxrMGgn3XlH%2F%2FFHvFCxKX%2Bevr%2B6o93ZK29RkrQKqM7uG2zDGSxxHHO8mEsR3LNOoYhQExdCxdM6DKqUW7lSuZiKtgjv2xFbkcwzpuIxAY6pgF0w%2BaurxTTHhgI6z85Bo85r1SRW3TZQ9TTVg9GWZZvsSF7A%2Barl5eWaRcVB3NHmsvKDZnBvaVrywJErrAFoyrSKMmHjzsXAdQVGUc8tTBXd9sRDcY0%2BlnQKTQjfBnwvd0%2Fc0g%2BbZG6wzm8ULbB74GpWC0SXOJ8%2FmEcbNvFPj6pLFqi3%2FcrsXHLwOnosTidbKWK4YI3OlArKpOp%2BEsyfOHAk2KEagHx&X-Amz-Signature=1e95d14b899ea82c19fcad99588fee623e14de7df0be627a71c4ed69a9b4ba54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

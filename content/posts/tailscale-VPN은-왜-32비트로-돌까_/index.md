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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dd23cf6c-4cc5-435b-8607-20fc57f31ae6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXG2TBD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BIHlnAil3vn5WBPzVuT9Owjzn5UBiW0RbV5ds4p4ZLQIgYYuXjj2%2F7iPRSfDuLnRJbbi2DQjnNURG3w%2BsGoffHvcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDE%2BI%2FxdxbPIbkXVR%2FCrcAyfv%2BxHOPIr0z7NzXQrXfNFzFCT0LQ7%2Bqzrm7%2Fs2TQpUpxVxdHSI9TEOFJLsQCu2Ijkj0FsqV4GZxLE9Ex1LGZEDZW85WWxaySO1W184Vlh3GlUYZepoKSLwtluT2duIt5hnAGHhdsJeg%2FWxei0R%2FYBhihii%2FK0OGwWQa4hzFwBdNIrmtwMX62mslCgKwFGbbomAP90sUlU97yxbhhTGde%2F8JG6LuQ33FvKYs7AhGc6q860yxrNd05sUUYKqhtFjnVnwri6s%2F2T4r7EyRRmO2AhcHQWOx7UjYDg5EhVtv3B0ptI818FMxEskjOaANvtqezr2H4qlPsoDXUrSL%2FuXaDjKCHueFAll9X9gQkT2pjV3mYYf0p94xzFOJdTEwJFYWKXiWzNrQEXrAsAipdty%2F5Fe76uV6w8hvpXcXimHTZPXhpNT3A6Euxm8hkre0NN%2BAWsTv5uYh3s%2BQEnddLQ6y7jFy2R8%2FGYBU2Wy6rDmK36ku057u3M20qnPgBD3NOtKw1PZm3uPaOr9on67oLKsosT6OLMpt9WUfbNDpenn82f1x9Ac%2FpAYlRgoDX4Ztbo9n7Tg01KrjO270oPyltANVsy%2FsBgrZy7gesI5LW02C3loz9yFcrFJblORFOmwMNLOh8QGOqUB3CcClE%2BDqUYieq4jp0Q2LYzV6UgJb4qKkqWo7ZtT0v2zldQb1z8IbPBmK%2FcTKxL52ms7ItaFU%2FS1wrVVxf7%2FVogW3aVf3gO4I%2BeggcUNyoO%2FnIpK12U8NIdHJGmeSoEVtzfaGr0TjwM3AdmX%2Bi1QAdSVMmZtKasL28Q%2FS5U3av%2Fr9ofGs8V3SywQMPGYaxwDTKanegiVOqdCtHqOo7kTNj9B2xlE&X-Amz-Signature=6f0ec77afd1f6d18f81a01d32f3cc296c52159e02742b37c3209763d47c824e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### CPU 자원을 더 단독사용하여 안정적인 연결을 위해

- 32비트 구형방식으로 CPU를 조금 더 점유하여 사용함
### 32비트 이상의 RAM이 필요없어서?

- VPN이 굳이 4GB램을 사용할까..?
### 호환성의 이유로

- VPN 프로그램들이 32비트 버전으로 배포되는 주된 이유는 **호환성과 경량화**에 있습니다. 32비트 바이너리는 오랜 시간 동안 다양한 운영체제, 특히 임베디드 시스템이나 오래된 하드웨어, 라우터 등에서 잘 작동해 왔기 때문에 넓은 범위의 디바이스와 호환성이 뛰어납니다. 또한, 32비트 환경은 메모리 사용량이 상대적으로 낮고, 크로스 플랫폼 개발과 배포가 용이하여 배포 비용 및 유지보수 측면에서도 유리합니다.

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dd23cf6c-4cc5-435b-8607-20fc57f31ae6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULWK5JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIF1DFagSNZmLbW16gaI%2B5j4gyHAq0n6rYbvuFMik7FAxAiEAnVZ%2Ft3NfG2lfy%2BEXm1G3n7u5VXLcwp3Y8mFiHHqqF0Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFGdvLGaQhUj3bPr4ircA2va4PqgPZRSp0yQNA9r3neFkLzbisoqTdInaowmwKf7VpDXL8T0GIjFFVX99Se1I4%2FiIUmBS9%2BX7E88rH%2Bt9SEvf4k1204jamMZNV3uTYfUkQMtGUAQnenSSL3Ho3iMr2HqIKlrusWTiGlI4924lJp3f6oZ1Uy76otqsniQbtJ%2Fv9v7Pk%2F0Ggr41RPRWCpzvUrelTDCo50dNZ92oVh6RnI7chwUIeBbVpZAie7%2FVjjzsWokfXUUu6TCIrsu25Jb9JGw06dM1TpEqTWp%2FaxEJAIz08l6ZXKR3cgnWFJ0U1%2Fekj%2BqtcV3JIbwIxDHNVy1cMZez9hBW7jU8%2FS%2FH5N4mv4awJYQ%2FjP7cEvBpfKahidF1xDJWV0%2FiybPamZY1EXWP7E8XYJzPNUZtLTxcW8X9BzLkjkHHzJQB7C4Mt%2B9E9LW8tJ7Q6ywhMS8wY5wqklR9u0KmwlaE3%2FN7BET1%2BsQY5l75L8s6zYoT4wm%2FQj%2BrNeajDCgEEzkJg8MpNEJJWxqKv%2B6JfEjUe1kqr4hNG32FTxdVQWlu1%2BzE2pXwGXRUa2gvbnycAXJEZuWw7mpsLfzYdINYC2NzV57ljM3ai1OHuytjBFzjfHMvmc1J5X6acO%2Fg8f16TGRjA%2BEc4gHMJDPh8QGOqUBOGeCJSDFOQO30cdpjhQTx3nOOHNzQsfpibsYsmd0RSw6dNH0mr41su814dESK0KiIS7TJtqDA3iU9gnpMyVccz9DIMjwUs368pNWs%2FXMuLlQNZ%2BdJUclCRhThSbzwzf8r%2BmxsNkidvgd%2FAoKB8k%2FV3x%2F0eqirVsYlk9Q2jCoHNfWKPq6%2FnwjlEb9dYQJ59ZI0a%2FXFLJwuCXxgklsfJPWbYLpSt3x&X-Amz-Signature=6f4e7161835993130ddfba398de1be60ea0d31f878a34cfd29da27557c9209a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### CPU 자원을 더 단독사용하여 안정적인 연결을 위해

- 32비트 구형방식으로 CPU를 조금 더 점유하여 사용함
### 32비트 이상의 RAM이 필요없어서?

- VPN이 굳이 4GB램을 사용할까..?
### 호환성의 이유로

- VPN 프로그램들이 32비트 버전으로 배포되는 주된 이유는 **호환성과 경량화**에 있습니다. 32비트 바이너리는 오랜 시간 동안 다양한 운영체제, 특히 임베디드 시스템이나 오래된 하드웨어, 라우터 등에서 잘 작동해 왔기 때문에 넓은 범위의 디바이스와 호환성이 뛰어납니다. 또한, 32비트 환경은 메모리 사용량이 상대적으로 낮고, 크로스 플랫폼 개발과 배포가 용이하여 배포 비용 및 유지보수 측면에서도 유리합니다.

---
title: "포트포워딩 vs 리버스 프록시 뭔 차이임?"
date: 2024-07-15T13:11:00.000Z
draft: false
tags: ["ProxMox", "Infra"]
series: ["Infra & Network"]
description: "역방향 프록시는 클라이언트 요청을 분석하여 여러 내부 서버로 분배하며, URL 기반 라우팅과 보안 강화 기능을 제공합니다. 반면, 포트포워딩은 특정 포트로 요청을 전달하여 각 서비스에 접근하게 하며, 설정이 간단하지만 관리가 복잡해질 수 있습니다. 역방향 프록시는 단일 포트를 통해 여러 서비스에 접근할 수 있어 유연성과 보안성이 높습니다."
notion_id: "2d0fb3dc-33b4-432a-a094-fa3d195b22b6"
notion_url: "https://www.notion.so/vs-2d0fb3dc33b4432aa094fa3d195b22b6"
---

# 포트포워딩 vs 리버스 프록시 뭔 차이임?

> **Summary**
> 역방향 프록시는 클라이언트 요청을 분석하여 여러 내부 서버로 분배하며, URL 기반 라우팅과 보안 강화 기능을 제공합니다. 반면, 포트포워딩은 특정 포트로 요청을 전달하여 각 서비스에 접근하게 하며, 설정이 간단하지만 관리가 복잡해질 수 있습니다. 역방향 프록시는 단일 포트를 통해 여러 서비스에 접근할 수 있어 유연성과 보안성이 높습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/10e02248-3a12-4f50-bd26-d4f88c997f50/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUB4LSW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHFgqzcWQ6Kc6PZfpaWzLSREMdXLAl5gxaU1zAit0iWpAiBowlXfJznxCFogPrjFGjW135jx7YQoSr5Vvm%2Fw1SNpnir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIqXitAbrbbmoa7JcKtwD5nJ7X0iV9k0Vn4tC4Pcn3Mbe5xNf6RcH6XQf9oI9bz54ieOjI1%2Bs%2BP33RELL7%2B%2F0NMA4OqL5ByLD9uvi03X%2BBOsRAaUbdYvVAkmKbAufomikpr%2B0NQe2ropW4odRISOlRXxKLip1H3l41imFGEgkGzUGH6q5EU7ic0KGx500E%2BjRpcV5%2B%2BKZBo9dICqp43Qs%2BiJwSzvHiw%2FobvoQecaI5Rrugpbg5kUW4PsxqfBsXo%2B2bF82GNyw7k%2BTxa%2Fcl0fHd1d13fev0MIaVuhssRCIIGxBVl6Ph81z%2FbHwlqZeKzpAqslNTKFnqyXwMtzRjK1j0aUjCrzCft5fbxZJa0MSA%2B8moCuah758hyTMUEeHtyVKqlh%2B%2BEYFN%2BqAUmF4lc2PhK%2B%2FFPuCFiaVm9GidRI21xj27WPkl9O%2FDvQlGVAld72Nsk9lwUoSGgpuTMAykcMr72jGMnkANk3QwNnHd4cr89j6nuknqnYV6knCzV9%2B1%2Byn%2BLb17Y5yptkdwqMjjsWo%2FVc4hr1seImxxdqzkDJWDzK%2FElnhLZIbo47zI9F5KeCfExemSn73JlJdP5smVVKQbpLEPW1n18xOajkfWDZZ2jvuN%2BpTEE0b5DTGrIPrr5rb68VZJZLVrz4zjWgwv8%2BHxAY6pgHuoHReymLmMW8t7m5eW32miYv1eILIA15uoL5pVQ50RfLOF2pajHxw3nO8zQX53mndtSffriTW1afmBEr9PpPmyPeMA8mh5TZ%2FLLf2f5mP7YWpXglce9gplBGUewsnb3AfJkcrc3VRbkOZYVfEAShTM3iD6aQJrrWHHkHuIC3bGcViZ51Hj%2BuwFle9DNhHmx5XR%2FyBXjx3WY9n5swx6owtc8H57P0p&X-Amz-Signature=6552199647d00dad229519543b54ebd2e20a51f63e3c644402cf9814b0fe0d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 개요


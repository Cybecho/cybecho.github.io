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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/10e02248-3a12-4f50-bd26-d4f88c997f50/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SE3CFH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCJEiQiKs88Y83%2B8Sw2tVpDoAjbRHa47jLyiAtgfiua6wIgcjzbLiO%2Ffz8MPjz6NoXHENQF1VhjoporJDoPQYlbFggq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBBbEOfryyo0LSg1GyrcA%2BqBJygAtq4BygiyefYKgEM7QjJk631n7ZxItOU9jwNtZ5ypPeJyKIjwt3DdNrapfI4YY8Ww5x3WVf1f3IkphtroqJksd6AUKeB5SthKG5rmlvtfxTZFm0QfTvj%2BQPBX0Op6EfGWgaVRnZVKwmNOkfQAQWDHm9eJ22FoQMTrWB23scHEyHyLNTnwxqSCs3lZpWRIVaa72k7W96DFSoNA6XW7CjIPFbtslj8TZ5xmTtD3P3OccEtHAoI1r5A8A7qJxc5PSaTgFkRgbUC1n0j%2FzCgnYv3g6Yim6bfEQHGbCvf7YiN9xR8FaGzZHX79hS6VkHn0aQCcIWooVWwXoNC0mccOYIBfSHsmEShntDlssmkiWaFYQC3c6fupLHK5FoqODQ9hNi6kkmni3vemO4nuVHDJ1FYErQvs5bIb79XORjyIQNji36lYaiWrB3DEXHKoTf3HR2OVuxoaZBy0q3U6TTMjZe4KNNmfWPNc5iFdvZKoaTI4ztcA5S2TRRIQqB%2BgdJnIzFwjoxK79wBOMrMT3z3GGKLXbMErHF%2BIyr4J6AjBaTw%2BAF8sQBZb9qCq29bC8sR00NjTK%2BqVEG4V1YtPr2rj%2FXAsQVes4TGvo2W%2F6BfiMP7bN%2BJQzunXtCuUMJnQh8QGOqUB11n%2BZnIpQj3xC9%2BaSmc6Eae3KZDtVGnp8GQegmhDpoOTNXVzLY2m9q1A1dEHkxDLMjqOjSrZQvp7e66wmbR7tADmUl5nfux9N4GNdW6LlVN6ktJloe7DcNb4v%2FiT%2BEvSseb%2BJh%2FNlbMGe3wSJCViF2GJIIfs3ZhxrElnC7kz7d5NqK95%2F8l6FMdav1Jl%2FrOI7Rr7JDTPEzRy7LaRI8cBzsOHXae7&X-Amz-Signature=cd0377e49d734c9faf898d0c62e55a9d92a824722a14af46a708737ef6a10eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 개요


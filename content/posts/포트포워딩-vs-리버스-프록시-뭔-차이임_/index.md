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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/10e02248-3a12-4f50-bd26-d4f88c997f50/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3S6S2Y%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQChI4JSNDxSldUGSKER6lFJOsetx5tY%2FNS4u%2FUUnaX1hAIhAO42sNteSBN11XBmlOmwhQkBNIKdEsK7YmuE5NRduD08Kv8DCCoQABoMNjM3NDIzMTgzODA1Igx2l9lrgld%2F6o0SuEMq3AOSBSpCfEb1qJZ58f1h0%2FXTxulkZceoGcFvGvDoy0q0QyMwoOF6oqYK91r%2FIhRHLlg2ZbkwXKyc6XWgY2F2xUVYRnhnQcwnNSH5yzn%2BE%2Fj5EKzJAtGQd3GJR9bCEC0Wk0kbrQ6%2BUewlhNy61hxFG7rQdMBk1F1Yek3w6jIUA%2FwC5YFnIRBfmL56l6hRLTHuEQRPH1dIX%2FyfsWgzYcTCjVbWoYxvDAHS5nhNrGZVwixrHtg2sg2x8y%2BHXI0QE7oqiNumOHbGswL7GYuA4%2FJyGumrkUT1Hs3fQlrGTQB1PWvkOXGWjEdFS8KbSbZrY2cTxFqKGH%2Fd4qgEoqwNbk5lw1BOmdXsi1%2F%2BGqIY0xo5Bn%2FGESNPe11DMDyMxBehaZ6bX7yd0Ll6RzRyMuxeGEb8yyZNmGpzqYfRrJ0NKqZJNb4Zp98LE3FtniTi%2FjlrNKT0y161JYzEWXAI2c83o%2BajDkenZwhI8JS5ApBx82YDi%2BTJlw%2FNA%2FAvo0sQiM52k6KUvrE1KQTGcCKiybxxD%2BMR3o8OUuHh92IRkWFaxgovJua9Tq3iNF3S6rRtMIhtT08XbGrVWrXqQnJmQVbxVUcsqJIWSukLIbaDxrR9H%2FhrB9m6kZDho%2Fk1KEiC41YlejCT9ofEBjqkARZlUR%2BlWOT%2B9s3F4g4S6%2FF%2BFCIAN04XM6y8o6NIT3FSS119LsOw9XQq9vsUi1VDXUVZKnpR3bZ7KROcQbjbTp4qwrTwSzSL7kpuVZ6ioOW%2F2ErQGAqxVjctFKSxqLIJdNlTNt3G%2BPDRRKITI5S%2BgyBclqXOVx72GlQD4V2%2Bhl7FaJABGgNdc0v6ttryNeA1YQ1qU0qYAp%2FEq5Gp5WXErCosOMnN&X-Amz-Signature=c3e65b3a7413d2283b655b8f4eb247a7c7a554acfbfb5194776b32dcb5eefc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 개요


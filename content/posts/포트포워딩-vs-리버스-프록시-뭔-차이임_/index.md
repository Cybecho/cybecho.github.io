---
title: "포트포워딩 vs 리버스 프록시 뭔 차이임?"
date: 2024-07-15T13:11:00.000Z
draft: false
tags: ["ProxMox", "Infra"]
series: ["Infra & Network"]
description: "역방향 프록시는 클라이언트 요청을 분석하여 여러 내부 서버로 분배하며, URL 기반 라우팅과 보안 강화 기능을 제공합니다. 반면 포트포워딩은 특정 포트를 통해 요청을 전달하고 설정이 간단하지만 보안과 관리의 복잡성이 증가할 수 있습니다. 역방향 프록시는 로드 밸런싱과 SSL/TLS 인증서의 통합 관리가 가능하여 더 많은 이점을 제공합니다."
notion_id: "2d0fb3dc-33b4-432a-a094-fa3d195b22b6"
notion_url: "https://www.notion.so/vs-2d0fb3dc33b4432aa094fa3d195b22b6"
---

# 포트포워딩 vs 리버스 프록시 뭔 차이임?

> **Summary**
> 역방향 프록시는 클라이언트 요청을 분석하여 여러 내부 서버로 분배하며, URL 기반 라우팅과 보안 강화 기능을 제공합니다. 반면 포트포워딩은 특정 포트를 통해 요청을 전달하고 설정이 간단하지만 보안과 관리의 복잡성이 증가할 수 있습니다. 역방향 프록시는 로드 밸런싱과 SSL/TLS 인증서의 통합 관리가 가능하여 더 많은 이점을 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/10e02248-3a12-4f50-bd26-d4f88c997f50/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYMNDZ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAFgBZEgtRpg9qMnLv6%2BDaIgjbMtDgFtYe%2BddDz7fcXfAiBlSkLAEiR9qirIgK4wUPk23b6QWHZBW%2BBu7Yu89gW%2FZir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEDVswViXPxb1UmoaKtwDEPMapxb6q5nFybJuTr1OTW%2Fw%2FXsrWC9aJCaZppFFFyyU48NwSPkWBRGt%2B8PTCNwEggBAuSvJUEuznLOah8Omru4lt4fhj7cAvUSdy4j4wxBlUe402LnqSHyFTvJetpdrZklVRFBuf9qBL1rnmUnCTJDZUl0EPDhv%2FutFGmk0LLJ0CyZ87BRFMcOxDFSaNPEyadEEQCBNIXcYWuNEnYZGrHcyrVarGTgSq9aTinngUjIm4TJprcEwuLjJ9oc7yDmfnz8pl8nREZv%2BVFpPpMKN0p%2FgLPsoe9Nvy0fs6x%2FvAcWM9M53pci%2BikLvNG4i%2F%2Bao2Kbcu%2BTKgnWfVfvjs4uGcBXb8zLD%2F%2Fq82F5QBs1p1ZYnp1mJDWALoITU2C2zhXCDIi7BdAm2L94n%2Fuj0bnVrtLQc2Z7A3EBjUonnlD9OiPtByBbDSfgIE3ixFJdxDMU5tvMh5ZQ%2BUARCp09rB%2Bpob7G10Y7VyuotlrHZEbpkv0bgnEq2T5SliaqV6CuSDV89JUyTZBLx6KSz1JX%2BFo%2BLPlFG0Obj%2FKVVC6xsoHaSJ5Zr6eZTHbSuANRu5BMzTUmDmg2xPo3lCfMREYbeuKG%2Fn%2BQWpZVRPjJrn98%2FMyIZz729splBP7xINni%2FBh4w1JuIxAY6pgGpWUJKY7HdqZcxYJcIbpnB4svTASLJXBTghszSv%2B%2BIsfH73UvwCpRRw4dSq3O%2BmT3rahIFzbVAiS5ItCMuNQ%2FMfA%2FydPW9Au8e0JTQWJoyl7R2aN3Sytf%2Fi2a1BaEUtB%2FDQaOS8Ap4%2F9CkXz9E57qlmXMGu5nVFbnO07SbthmFNsAtNZm%2Fxz%2Fafs9hDt3cUnCpVqbViMit2xuIasjVCSfD3JHg8G%2Fz&X-Amz-Signature=0397e25e0a496f88078c08d4f6d247b55e25327b713b459a14b7eb144036d33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 개요


---
title: "유니티 로그라이크 08"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "게임의 난이도를 시간에 따라 조정하는 코드 구현, 직렬화를 통한 사용자 정의 클래스의 Inspector 노출, 몬스터 스폰 데이터 관리 및 초기화 방법에 대한 설명이 포함되어 있습니다."
notion_id: "874bd934-c25c-4293-83cd-d6c4a7a0d086"
notion_url: "https://www.notion.so/08-874bd934c25c429383cdd6c4a7a0d086"
---

# 유니티 로그라이크 08

> **Summary**
> 게임의 난이도를 시간에 따라 조정하는 코드 구현, 직렬화를 통한 사용자 정의 클래스의 Inspector 노출, 몬스터 스폰 데이터 관리 및 초기화 방법에 대한 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/69ca0e9a-1768-4661-a9bf-fa3c30abaf84/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LU4ELT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCjgM5Sq749zxzt9BVinzCTPkoL%2B3VgSKlRRxz49w1ehAIhAKsYoTv8guRDYnahnEJ8r%2FngPMEyiCIHZAo9pIn4dURgKv8DCCkQABoMNjM3NDIzMTgzODA1IgyhxWeNQoqRGB4NQSYq3AP49wgqI5zqmYrJdCpXdxullfLKehcLCVIYi0RnkeVF%2B9w04N2EXwKm%2BlBoLN4dzYneGJNy6f5e86hgvWoz4XCunotD2k3J3%2BH1k9HIlPx8KOYFyrZhA3hac%2FwgohQOrxJzaXaBUF5N6EX3N0xmZOzXRU5dVRN%2FbqyZzZo%2BT93l5WBuk5M6qlXy624VMtfD62CVRLU8UykEb%2FsY0Mna%2F1PySkphxwiI5bJB8XQsssMbboLQcl7xaTiwMAcbu4OqEVJBIHI5gr6VPXadg8oRv9QXp8gp44fNv2WAAjyJ4dm4LxoNkrFRajO6GrJ5WgCjo0sXAB01HsAYE3I%2B8Fvp2ZcQHg62wdTNGBQCt%2BTdxpbH4n6TT6FncTdTjuTQqpn8Z4WeGDa1Mx1ufMTviHIf82AjJx2n4cLc96kF%2B%2BTZCA0nAjxSAKqc5FwT9wNSgWQggEqz7FNF5DWccuYYnC1MCu5GJfoN96XDn37VVDqrKd7BNm1pNS7unS5oLHDl0UMIeL2khVMpJGTw46CDYpX3VXNsuRMlECB0%2Bn%2BqxCDdTjNwsz6rGLwuY1M4lFr2Rgh6YIIm18fENexlePLJsflCU4ING9aZznb7j3m%2F7MIeIKMLeCwVPiKrpcJU5h8TcTDczofEBjqkAYa6l9%2F9xlok9bqHDcwLm90BJkFXEdh5ARviiqe5du7gzUCIWXQybXtGIOVIZZL%2FsPkzY7gsoB5r9otNHvJq%2BO%2FCX2GMrA2wxatHwSOAUJ%2Bq2Q0SmoBFnlSrMUZZv%2BboiKTTQ0CMyrkeDKjY7TGqIkXuCpbtsof8y%2FV9M2tTZx4XxlxIWsMNszuOOGNJ9HMbZ9eBqYV5obsuEO0ThALO6cqG%2FRoW&X-Amz-Signature=da601d4b17d0dfb8a6d692966f4c6f184f6ef5c1153be0f9cbd2e256518c57f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SSg_9q-8h-A&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=9)

> 🔥 **시간에따라 게임의 난이도가 변경되는 코드를 만들어볼까요**

> 🔥 **소환데이터를 담당하는 클래스를 만들어볼까요**

> 🔥 **스폰데이터를 활용해 몬스터의 타입과 스탯을 정하고 스폰해볼까요**



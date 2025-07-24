---
title: "수직확장 vs 수평확장"
date: 2025-02-13T01:35:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "수직 확장은 서버의 자원을 늘려 처리 능력을 향상시키는 방식이며, 수평 확장은 여러 서버를 추가하여 부하를 분산하는 방식입니다. 수직 확장은 하드웨어 업그레이드에 비용이 들 수 있지만, 수평 확장은 클라우드 환경에서 더 흔히 사용되며 확장성과 안정성을 높이는 데 유리합니다."
notion_id: "1991bab9-e3f8-80fa-95a0-c74f2a44941b"
notion_url: "https://www.notion.so/vs-1991bab9e3f880fa95a0c74f2a44941b"
---

# 수직확장 vs 수평확장

> **Summary**
> 수직 확장은 서버의 자원을 늘려 처리 능력을 향상시키는 방식이며, 수평 확장은 여러 서버를 추가하여 부하를 분산하는 방식입니다. 수직 확장은 하드웨어 업그레이드에 비용이 들 수 있지만, 수평 확장은 클라우드 환경에서 더 흔히 사용되며 확장성과 안정성을 높이는 데 유리합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/09e979fd-e21c-4244-b1fa-b40d6d857e47/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHDRKRW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8Rxn7gvU%2FsCMHzgfTCF7MITjORouJiSdL58tltpu7TgIhAMqSxizwTPQvoR6VmTgf9K7uQwWCAdNYDeO9tAEduUS%2BKv8DCCoQABoMNjM3NDIzMTgzODA1Igw5ktm88lCVuXlK7Nkq3APbqnIWaAAATRiMQ3Jn1n54R2RCqjhCrDRjAwfvSVqo1wjhDKVlrKgVyHoDDgl3GLoeF2EVHJGVfEl3E9qxvzYLMa68mUUNPig4B71x%2F%2FbKAm5NZPRL5li9gkGL0QYvKHwi7ViA2Jx2aRi9raXXLV%2FCJcK%2FXHJDPJaOPUJRZzlGZrT2vAsB%2BAgVtCtogKpZLHHs5Ii8KjZdNbwCABAmODz5MaPrxmkLtYihzzdi27UUkGiCr5ZZyl7HL2LD9ifFCFh5Ra2O5nT4CS4xbpW5Z4BViAtSnn7%2FOWnsYY%2BZUaZ62vLxpVpU2d01PAGX%2BM2s6SdAe1KaTQC76okftUfRFBZc0rdl3j3FdM3lOIJ17t%2Fmvyz7AWvlSXqoHuZfdZJXldomY68BLRqCah%2FoD3Y%2Bh%2BHPDLEeY0AIhiS2mXIljIQ%2FIAJoIG3%2F23EduI3%2Bwt3NlyNicpMnkwuq6Ijs1hrmOa69CgJ7%2FB0kz0pzd2uUHjjkIxj93c2%2Bw1an5WOu%2FcJS%2BLv8H9WVjgbTL7ajvHoydgmnVBTRdaIXYjqCeV2eOpRkMEaWUAcGQjX4KJvZYM3xiOMZqLtorGLs9OEJOEj3XVHBi85Q4ghtdWaeCAyQv0CvvopFZdVM7aDQrAr8KjDM9ofEBjqkAVsQedMSJH0p7Qp277bGw0dDVv1GGi1z3rWeYZPjQArUxhssXKvTJMUnvIawzWG%2FMpQqXLZhwXwz3G9HA9ap74NzGp7p3A37ZaYCqdpIKBFDZr%2FnHLCvkGkOrjbzPs0P2RZsBYFFsQwjE%2F2%2FACuKpN8SYgb4n0EIWPbAqsu%2FSVM9TrksmRwpqbotTENaKtkMmWEeIr8w1WJ%2B2gfVAUe4imr1khZ%2B&X-Amz-Signature=9da964db432dc311bd1a3c2b8282651d8c0650758f1550d4f3f94d2e08e0c16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 수직확장 - 컴퓨팅 파워를 강화하는거. DB는 그대로 옮겨짐 → 마이그레이션 필연적
- 수평확장 - 같은일하는 컴퓨터 여러개 연결시키고, DB끼리 연결함 → 클러스터링이 필연적
---


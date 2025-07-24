---
title: "수직확장 vs 수평확장"
date: 2025-02-13T01:35:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "수직 확장은 서버의 자원을 늘려 처리 능력을 향상시키고, 수평 확장은 서버를 추가하여 부하를 분산하는 방식입니다. 수직 확장은 비용이 들 수 있지만 한계가 있으며, 수평 확장은 클라우드 환경에서 더 흔히 사용됩니다. 3티어 아키텍처에서는 각 티어에 적합한 확장 방식을 선택할 수 있습니다."
notion_id: "1991bab9-e3f8-80fa-95a0-c74f2a44941b"
notion_url: "https://www.notion.so/vs-1991bab9e3f880fa95a0c74f2a44941b"
---

# 수직확장 vs 수평확장

> **Summary**
> 수직 확장은 서버의 자원을 늘려 처리 능력을 향상시키고, 수평 확장은 서버를 추가하여 부하를 분산하는 방식입니다. 수직 확장은 비용이 들 수 있지만 한계가 있으며, 수평 확장은 클라우드 환경에서 더 흔히 사용됩니다. 3티어 아키텍처에서는 각 티어에 적합한 확장 방식을 선택할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/09e979fd-e21c-4244-b1fa-b40d6d857e47/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46Z56RQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCZhK93LCiR7r9cqhleEUwnjSMcLYxpc0rd8mxutykupgIgJAeiyZPOc4HIiWKPrSRGnspjmH%2FS25vGzoqXuwF2Rboq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMP14OiEVPxGiV3vVyrcAwMPQ612ah0KmK2jrUVfWMMhHry5ocjovkmRvfBWeKTfuwpUTYsuzZ9qanjLS3wFYx2KKQrNoywr7BkrS6RoFpTcuUusMEaRLRe93DbAztiyInTYfcplluYtf%2FmqRXehSiEvv28uEXU8PQhVmsrJbCXsOH5ND%2FrdpTTscGnBKntwEylU%2B21VJJpyqug7ZsZGrcV8vjKX%2BDuobqX2OaRUeGMtJIbIb8xh1NgbNLfKs9cJOjakAyxQe%2By6fvUDt7Zz4Uhn5smREr7Dd2hl2tXC8s2nFC%2BBHL3EAWWPg6n0e13OdVIBEHHFObuGGb3Zea3WYxHpIBrocmWEjpGjIn9iKbt%2B8b0zPpTfYPa5X0CbCDZuPvzrOQtxziv2x6DguPqMk8lsMAkjtIHmdZ3VxHOKZHlgNG9NcEc%2FizjdVDq3ZuI1EhqzVSYb6LtRpJSbiqBBXpWAKzsIcEUFniwVeQR9tqr3Fm5sBEntWUyXBIGinkJlplt%2B%2F3KItesczn%2Fzl12%2BEwoCMTapTpaYYFLCV4thCT6f4QVBCgrme%2BPTQNW4fYxT8NojzbIyheJRnMzCwLamw1p8XGT2vCM8CFNlqDwHtV8ysKXt1WE8%2BnT2ivznGDsgAc6H1YHGJxMZxKZgMLabiMQGOqUBat5wipYtp2HCE6bxK%2FWP48ouAS8kHxTU023O7rf%2F5WmXcxHWke5NVy36agx9q93Y56iJObxIopjugH0OHPQqHD2BLY4iRboiAM4%2F%2F7E5zeide7qMCp%2FoonnOU9BLyJDSZUgK4bTX3Ogb7SRbCnDru7qDX%2Fx4SVZySGHqJf%2BCz5Tse%2BE5P3EOfc1tbyWfssxEbwGA39tYLcGrznp1gno2eFFsT9qC&X-Amz-Signature=4eb5e4942c85fe518567d27b9e38ad6d8db74d804a4204c4f526ac61a6420ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 수직확장 - 컴퓨팅 파워를 강화하는거. DB는 그대로 옮겨짐 → 마이그레이션 필연적
- 수평확장 - 같은일하는 컴퓨터 여러개 연결시키고, DB끼리 연결함 → 클러스터링이 필연적
---


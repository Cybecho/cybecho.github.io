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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/09e979fd-e21c-4244-b1fa-b40d6d857e47/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBZXQCG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDk%2BHZGrp4oEO%2FbFPUMuVOk6OhIfmANwkq3%2BqO4aB02MgIhALSVs2%2BLFpgNeLOPwg6u0cen6gCaAu%2FSs2OjBiMC7YLoKv8DCCkQABoMNjM3NDIzMTgzODA1Igysq6tf%2FfL6lZniUFQq3AMlakwe44ai24OwN0TSaM02besVKC9dndFUXOGA9HyD8kNgyHdKv0O6uuKNRxW3f9WkZYWV6J9Z60n2XLE8X7oUD7hhYicpj4%2FCiSo9bdgj9dhNs%2FE2A93Qh6hEVoFQPbtzmAYVMIodlOwXRQcvooCcgSHa3qXKixfUFUHMigzVDWcNraZtwKhMSuGGBCFlXpBBIbcQk4PQtK4UFde%2F8JYcu0dzUowLhoXQCR2Uvmi0Ffs6M8y2pG2JPoNVBAuy2OtFXD0yrJzOhJhUbGhAYiraOP%2FOd8tX0nrfylJnFwV8LVx62L%2FxNCwq45nzAxEVBsltcgYuWymwMdsC8i9wpDM9azrRt6NeELVsWb6hXqIrhZ18RSib3PwCwza9lHdq1OOQyGEujAtD1UegihuWxAEIxBIe%2Fv8mSe3%2FNMCVixumyhK%2Fn9i%2BxXF6stboedCkRSYPN1%2BBVM%2FM8s6EOrbm%2F9cC%2FDuXi0D8F811MsCP281jKC0VXKmZYUWht9H5ELwwv0KItLMDnrYZZ6V3%2FcOiwIsdrxkoyQ%2Fo1gUg44u1qxAenMyBls2Gzev54G%2BCej20CTeF0T27%2Fcm68zdOoOjY9bhzTTzhI5OWSzXQg19WPJi66m5h689rt3Xo%2BwBOqTDdzofEBjqkAV8B7zRxpLGwzM3AK67PrxUQXYi62B3JZfAIcqwAHO82QVQ4aCLyyG0jLlgPxtXC8KcWPb%2BmBHEgD%2BFE00RZQRvRgHeZiBHRgH8D1Erwl%2F6zlabzGsVlmc1GRFd3Ot1CGwb9YMAWoUQBP6te%2BXs6AV0kNBW2wq1rMhULl%2BuSLdtRTeLVA7C%2FW62gVrLCIQHhxZF%2BQOAATeM%2F%2FjKlCyDaQnkhhAgn&X-Amz-Signature=b56bb17feea608c5865d15c0f14017d7bba64ea574e068c2b3841e4802f1b41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 수직확장 - 컴퓨팅 파워를 강화하는거. DB는 그대로 옮겨짐 → 마이그레이션 필연적
- 수평확장 - 같은일하는 컴퓨터 여러개 연결시키고, DB끼리 연결함 → 클러스터링이 필연적
---


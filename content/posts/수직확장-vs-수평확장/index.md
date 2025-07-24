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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/09e979fd-e21c-4244-b1fa-b40d6d857e47/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPOR2GH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCbxcML3VadNJ2uehZSKvJe9ySxPDOo9GOEjaUN3yb2KgIgULHBAD%2Bs%2BL4OPcOa6k%2FUvD%2BQUNUb%2BzOp%2BCp%2BA6gWq4Aq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLMutHyZ4mAlEcm1yyrcA1XLYn9jZqJDuL43KI1K0May6by3oIstbHRzGKfOcpr7a9FPU0Oih0G5AqRGic3vLIcoTcYXhTC74n%2FtLmu0OiM1vO84KV%2FFP4gefMFiFJSlC9ok3gDzuqtpm8UBnSvjHCr1eF2tqCThCXsgb9hcaHlueZHaICANih1zT4mlMkf7b8GyMqS%2F53QoFk4Yn8WPGmUwqNsHJxF8gbqIbcpd67VMr52seARwST7ErMV9VsX8rqR3ZantAU57KP5poX8hflYsBL0mrMlh%2F9C3JuI2jXZ1hve8QJID4hFEuwMv2Y0jVDOErkoWkaq%2FZusvyu5cel%2FEE9HHCBQR%2BVx87rXgc%2F%2Fbl%2FNHEMxIsTGLmOzlu8c3cKkzoy2mNyj%2FbqAHhZqPj7cGBXBCngEfM9Jj14U7dGzbV4TgDvZCv1TWIZl1SzcbBWA3F0OmaNyMknu6zNGIbGS80HuehQ8MB7QL9KB3B8xGhbJlSoFAUfR2eUXMGn5WCFZyiqYr8GSKa9hZhBBqCLmkA11wQbo2J7e3dJpJoygUqM5cBJKEXbtjI9Z%2FXCHzgQt72t%2FUAo5If57quedijGmgLO8WmiNYYe75zcRA33%2FcAVRLzhgGuy5AZCNokRj3U%2F9%2Bu0QphPtxnY68MIfPh8QGOqUB7%2Ff5IjFdlVlUzsaUESNBZ6sD3CKjIxfEJ4QYbsIxiVk43cBqSKZZsPvIfv2sMAO0KKQp5J%2BsXtw19HWnc4h1R3ltrKjLJ7lavugtnSGJb0b0WNuYmB8AKlX76F0j5mHfzndipmNz7XTHeFYafmI2FCSu7GarQrYHiHO9jhKQtjAK4Lk%2FYHmyWfhGovEzf0VZssLoT5%2B%2FzLngrBin5YLTV9wQp%2F1D&X-Amz-Signature=c7ba172e3d6afb8f19b4bce456df0fb3e6aacc40f20e30850eb5d0b5a8cae246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 수직확장 - 컴퓨팅 파워를 강화하는거. DB는 그대로 옮겨짐 → 마이그레이션 필연적
- 수평확장 - 같은일하는 컴퓨터 여러개 연결시키고, DB끼리 연결함 → 클러스터링이 필연적
---


---
title: "분산컴퓨팅개요 - 이게머임? → all for one임"
date: 2025-04-09T09:20:00.000Z
draft: false
tags: ["Infra", "ComputerArchitecture", "Distributed Computing"]
series: ["분산컴퓨팅을 공부해보자"]
description: "분산컴퓨팅은 여러 컴퓨터가 네트워크를 통해 연결되어 공동의 목표를 위해 협력하는 시스템으로, 복잡한 규칙을 통해 작업을 수행하며, 클라우드 서비스와 같은 상황에서 필요하다. 각 시스템은 독립적인 자원을 가지고 있으며, VRAM 부족 등의 문제를 해결하기 위해 사용된다."
notion_id: "1d01bab9-e3f8-80f9-af00-c0a2aac6bc44"
notion_url: "https://www.notion.so/all-for-one-1d01bab9e3f880f9af00c0a2aac6bc44"
---

# 분산컴퓨팅개요 - 이게머임? → all for one임

> **Summary**
> 분산컴퓨팅은 여러 컴퓨터가 네트워크를 통해 연결되어 공동의 목표를 위해 협력하는 시스템으로, 복잡한 규칙을 통해 작업을 수행하며, 클라우드 서비스와 같은 상황에서 필요하다. 각 시스템은 독립적인 자원을 가지고 있으며, VRAM 부족 등의 문제를 해결하기 위해 사용된다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d7036ba-d5a9-4f13-b3d8-e09e504f2915/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGG54P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFoX%2B%2FK7ivrmDvJg3b2NJudLawGoYODCYS5m6RluXpkhAiA7IyTEYnmD%2FZ%2BlCLhwH%2Fl434YnqYF9s4gpdWn3Rsad6Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMzBy1pHtF8v4D%2FYw8KtwDyZAIo%2B0IVbLWKE7zkuva3yv9xc1jkYjuSp7xFbDLmnA68GCJ%2BwbwAMBG1caGoC0o5JNFylOK4QGyO151H%2F9Q53fNKXXQxg1trm1ddgv0Xm5ukJuWCXu38cDSr9PE6Gk44CSHXKHa9wELe7OOQUcJ8oUQC46Z0LMzt0aIMUYSp9VLuEI3ubMggbI0zJcHQ3dHL3vWDq%2Fhjdy2lgtHPvlQMMi6LATK9wE7I0hu3kEHM6cW975E%2FWDfbTMEmL2a2OynvQBOZMKPzh19hF9C9u7Zxt0UnIzQncHN9ZHrh1nSXtBMnYI3Bv6jwWbPiXQImBSplLBXM9qFb1LDUywLu7I48YwfBWfPj14rIpBLtO6Vx4WhwJfGwLyzSLrebieE31Dm0QbrseiQfs2%2FY8CKL35KJZmBBjB0%2FyhZP4FQPKur8rGoRBQ3Wi4P58E%2BV0cX9Y7svhurmave%2F%2B7S6IyrnCiIsAdbyOairZmV1v6yTCg1PArFNKmthwFhRm6LFdOFu00DJXN20kZ%2BxT%2BMWtwaHhSZEEUSUxen4w%2FrNsSkX9Q3Cmxebsd%2BsQiQP0NfbFA2FWAH82x27txVe3RRsRoEylsIwpKBFXvRTVKeXaS%2FG%2FBxog29hUtmH0yuzStqtrUw3s6HxAY6pgH%2FuiImaRPinwP2fNJ8Fy2%2FVIsYs%2FuF2272%2B9LRWNXfwFyPQuVvCTIZrco2QAorc4LF9%2B5b3d5hLvRO%2BBRqAkJTpcvttA1%2Bp4JW%2FegO%2FPj5PRqxck8s3N8wN8Ep%2FSXaDmjJsrzJ7sKOt6njVnM%2FF%2ByNjkfpeH5SqdlMUDaPAwX1ZR7wAZP5ePghXnG0EZpuj3dqdM0K9vIObbE6%2FaFNgn%2B8bC2EZ6R1&X-Amz-Signature=a4526ccde1de2311c0ccfee55417abd64a4ac4ca417d59d3fb0250192a71ef58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 분산컴퓨팅 - Distributed Computing

> 여러 컴퓨터가 네트워크로 연결되어, 서로 정보를 주고받으며, 
하나의 공동 목표(공유된 작업)를 위해 함께 일하는 시스템이다.

## >> 분산컴퓨팅 개요


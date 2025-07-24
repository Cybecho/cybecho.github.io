---
title: "GlazeWM 을 활용한 win키 비활성화"
date: 2024-03-03T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "LWin 키를 비활성화하는 방법으로 사용되지 않는 항목에 추가하였으나, 이로 인해 다른 Win 핫키가 차단되는 문제가 발생할 수 있다. 더 나은 방법을 찾고자 한다."
notion_id: "66df8974-fefc-40b8-af4e-229dea4d3cf2"
notion_url: "https://www.notion.so/GlazeWM-win-66df8974fefc40b8af4e229dea4d3cf2"
---

# GlazeWM 을 활용한 win키 비활성화

> **Summary**
> LWin 키를 비활성화하는 방법으로 사용되지 않는 항목에 추가하였으나, 이로 인해 다른 Win 핫키가 차단되는 문제가 발생할 수 있다. 더 나은 방법을 찾고자 한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b993c011-7f12-4364-bec0-dcbfdff8c8d4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNTVS56%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDB6G0KVr4XrftCx1djsVEnOgFrTMkwiovyt0ov72N%2BfgIgF5p4CBVCBUzh%2BqNvJ4lMLbao047s6kDFE1GdbkSf7Jsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNmLnfaNzmczREWjwCrcA7SOYKygqh59LVAUwJCp%2B1hB38GNhbhQqqPr8aZe3g%2BaMd98ZBrTp3UpjXO3Yn9eW8EnpPIQ9ML4HS%2FS4PjSL3WBztNCS6WD06X0hQiEeRNtuXNFMjk2Ywq71VkqE4WJQ2mrUsysS%2BlOSReHpJrdVbZOw3E6XtKvrVBjhJI8Lj8x0XiR5gVUEvvkR23JxoMHWKaJB9M2rzhj8Z0WlJ03Qr6fROeSwrg4YMXv6irG85Puv560v4pbIbT1xozuoJMeI5HNflFsBECXHP6jJZ49KkAVJVY%2B67thizAwUnT%2Fcq7qxg78%2BGebtO%2FLXXcnxHjV3BL0iHnGeVWskCwBCqU6N6SRFXIVt3%2F2dyBHFGgaLDlnmXcqavmwwPFG7naQcEMOy2tXAZMs2Vfa%2Bjm7hYOr%2BLLZuRG2C1bqf65gROB44oS0dOFt%2FNgZsAYLR23gejmG8yGFFUOpfZW029xYlTBrucPA4zSLlXOF%2Bhmy2xBa3wjxyN3aXT3RhraNDx4gQTvd%2FpRtWvM%2FbHeKubxLwyrPGzAx%2FGJNWEspbdS0wFG62Wx0v8Fk7u006GwH3NQFH2bvkaibY8lSlBULyO5%2BNu8HcFI68pZqVCm1wRz%2BDzcWGjbTJAM76n9mxEwv3U86MLfPh8QGOqUB2aqF486Zn4mTlRk5fvEm6H8%2Bqld5x6RMVvztPT2ysU3sjzTXVyaAQHTM%2FqwyAqjrbdCBEi%2FryFgqGuF%2BVEDijhQn5winhTvn4mDve7ZvW0%2B4Syynu2ZS%2Fj%2Bz22idhDcb3rimvNWgz8ZHQIf9MYB0bIIRwpFShHA4AjFvs2M7f0brGQzXKSZs%2BfJMPLc1sqbkGfZHJ6BhGld%2FV%2Bn4AXY3gKrik7cJ&X-Amz-Signature=90149ab1a48531d03d5baec0c8f380cf6fe08e3d3bd27e312c8eeea9e3218f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 걍 잘 안쓰는 항목에 `LWin` 추가함

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/021ad068-3051-4bd3-abab-c2c7644f5aca/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNTVS56%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDB6G0KVr4XrftCx1djsVEnOgFrTMkwiovyt0ov72N%2BfgIgF5p4CBVCBUzh%2BqNvJ4lMLbao047s6kDFE1GdbkSf7Jsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNmLnfaNzmczREWjwCrcA7SOYKygqh59LVAUwJCp%2B1hB38GNhbhQqqPr8aZe3g%2BaMd98ZBrTp3UpjXO3Yn9eW8EnpPIQ9ML4HS%2FS4PjSL3WBztNCS6WD06X0hQiEeRNtuXNFMjk2Ywq71VkqE4WJQ2mrUsysS%2BlOSReHpJrdVbZOw3E6XtKvrVBjhJI8Lj8x0XiR5gVUEvvkR23JxoMHWKaJB9M2rzhj8Z0WlJ03Qr6fROeSwrg4YMXv6irG85Puv560v4pbIbT1xozuoJMeI5HNflFsBECXHP6jJZ49KkAVJVY%2B67thizAwUnT%2Fcq7qxg78%2BGebtO%2FLXXcnxHjV3BL0iHnGeVWskCwBCqU6N6SRFXIVt3%2F2dyBHFGgaLDlnmXcqavmwwPFG7naQcEMOy2tXAZMs2Vfa%2Bjm7hYOr%2BLLZuRG2C1bqf65gROB44oS0dOFt%2FNgZsAYLR23gejmG8yGFFUOpfZW029xYlTBrucPA4zSLlXOF%2Bhmy2xBa3wjxyN3aXT3RhraNDx4gQTvd%2FpRtWvM%2FbHeKubxLwyrPGzAx%2FGJNWEspbdS0wFG62Wx0v8Fk7u006GwH3NQFH2bvkaibY8lSlBULyO5%2BNu8HcFI68pZqVCm1wRz%2BDzcWGjbTJAM76n9mxEwv3U86MLfPh8QGOqUB2aqF486Zn4mTlRk5fvEm6H8%2Bqld5x6RMVvztPT2ysU3sjzTXVyaAQHTM%2FqwyAqjrbdCBEi%2FryFgqGuF%2BVEDijhQn5winhTvn4mDve7ZvW0%2B4Syynu2ZS%2Fj%2Bz22idhDcb3rimvNWgz8ZHQIf9MYB0bIIRwpFShHA4AjFvs2M7f0brGQzXKSZs%2BfJMPLc1sqbkGfZHJ6BhGld%2FV%2Bn4AXY3gKrik7cJ&X-Amz-Signature=b1c39e5f8e32f87e704d3d189e16628ee7e8230717e0e8bc507d301109f344ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### 근데 이러면 다른 Win 핫키들이 완전 차단됨

더 나은 다른 방법 없을까…


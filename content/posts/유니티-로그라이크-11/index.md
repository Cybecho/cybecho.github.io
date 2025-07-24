---
title: "유니티 로그라이크 11"
date: 2023-03-08T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "원거리 공격 구현을 위한 CircleCastAll 사용법, 가장 가까운 적을 찾는 함수, 콜라이더 크기 리셋 방법, 스크립트 컴포넌트화 및 총알 발사 로직을 포함한 유니티 로그라이크 클론 게임 개발에 대한 내용입니다."
notion_id: "696f1831-c3f7-4ca9-9e95-df5a3fe977e8"
notion_url: "https://www.notion.so/11-696f1831c3f74ca99e95df5a3fe977e8"
---

# 유니티 로그라이크 11

> **Summary**
> 원거리 공격 구현을 위한 CircleCastAll 사용법, 가장 가까운 적을 찾는 함수, 콜라이더 크기 리셋 방법, 스크립트 컴포넌트화 및 총알 발사 로직을 포함한 유니티 로그라이크 클론 게임 개발에 대한 내용입니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95d26fb7-196c-4de6-bee2-aaf760a569a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5SVDPT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCYY6K6geVEBTNGtkAGtFatpW6ipxaVSRJWl1XnRt1EBgIgYLvYxOHAv53iNciVnQ0GAtnrUwYDZbQ8pyJn62HpDjoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPJQqiAhAcz%2Fho1aYircA4QLPw8nb5Bwrw07ySUHSUPhD6nO0yO8bLGsjfX24DRNs%2BRwhMP8o3mu4NhMFZCuhRr0TY%2BOH59BMM3NdDPniHDbJUbUvNzlDgyoT2Z%2BcEuEjP4PcOn6mrlf8mvXQ3niB1jSj00VCbzofYvGPjTqahLasOJWMh4t0YguJrXkrA4ACv1fhoBLTZZ4C5llpLAZuz65w4Dp6ZB7q7NHDUohvSjtWnClbeWN7qRdiAV3%2FNTiBX9wbF7FarbjcItIBtypGvXYQelSuHnk3KJ21qvbrXJoZkm61Y5waWhFmce6j8jytNO5qQZ8NpPIzUB3%2BGyfR9yGlNexgW8tS%2FEXUhTZZab3BC3%2BzuGR3sw4CX0Ndd187z%2FvpUB%2Fgaf9xKVJLLfetnMl1vdMW7hMpOxo%2FdJ42cx4k7Rxt3MrKLmGqFFR7IgymphXy1jAPlgqNuD7FyYfUOeBql2G8%2BsixIdcawcrX2ZaDkNMe2vHSMhtsFjlXy5sW6HZRzHeFzp%2Bgol4RROCLaXL2GL0Ghn9jxfngt0o5t%2FplRHQxGANFwKLi1O%2FL5nfCkKp8vYMArVAn9%2FeAJMcfFkYLKk6l4BwVTSrfkeBn0vdGrDDJoy%2Feebyfvh8ECNnisZMlcoL1tQKoyhIMJnQh8QGOqUBQz%2FpiCfxRyGtMDubPGXY%2BiSGXCAYqAppSc5fbtzRU6jV3kvMKqPwgrDriNO9dSYjmuJOVDQ3unrHr5xAbLvYHhXvCyV3HZDiwXjVwoUbFecjBPr%2FapKI%2BbHs5iEjRXJz2Gfv%2BBLkRyEZAf7CTD%2F7Th6t8CTRbMcXJbEgZicDQ08mI2XFSKLp14MfNGR832P%2FgnEeu6a%2FKU1inyL8na63lVMX86OL&X-Amz-Signature=5d89166ae904f125803b0c48122371ea98eb85ab524df917fa1867d85325fa52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=dBQHtMI-Og4&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=11)

> 🔥 ****CircleCastAll **: Raycast 쓸때 원형의 캐스트를 쏘고 모든 결과를 반환하는 함수**

> 🔥 **플레이어의 위치에서 가장 가까운 적을 구하는 함수**

> 🔥 **프리팹을 다른 스프라이트로 변경했을때 콜라이더 크기가 다를경우 콜라이더 컴포넌트를 Reset시켜주면 해결됩니다**

> 🔥 **추가한 원거리공격을 poolmanager 에 등록해봅시다**


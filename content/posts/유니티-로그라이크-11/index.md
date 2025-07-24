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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95d26fb7-196c-4de6-bee2-aaf760a569a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ORGRG3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCI6ITUZJw1FjqwCKt4iuR3Imbc7VT10lReIryyIN7pyAIhAL6BEoV2yLr2fCb3%2B70qJI2lCg8MrGkNToUvsPpuWOEeKv8DCCkQABoMNjM3NDIzMTgzODA1IgylZVggKjb48gfTIDIq3AOSN%2FD4g%2Bp456pAAK%2Bui4urDS2KvkbhkSKTZxI4PUwAAg%2BPSzKwSiL3ADYCtE5VxWMfV%2BOSlic1StD9FkcWdW5Viztnv%2BXxPuAQe8zApUYQQ3tTl2iS7XxwfLYAmCxHJdVr1HeGC%2B66lwGTuQizOvCq7Mbpep%2FVC%2FpdUaYW0gJf1D1wfTKz6qEGxTpTr5rUT7dGOSvxjRL06ROSWO52ATj6AKxsjImf9NWiy%2FJ5YH9KywV7rP9VXmGJq4GqWh5WlM2j42vWGdluG%2BH0fvBgsqv1SJGAuRqM9O9Myz51vicAr6LEBIwlt%2BKRLa%2B%2FybYnmmvZishnBTeOeozZ4wNoBwoQaluEPgwB5iuGaj2kUGDoLJDeGbdqUMAejMu%2BzNKMVl2Nm%2BAUKSYXJXEkMiCWogc08CCfe8N0BpTtCgry0EkffcF%2BJoU%2FXPvrou5hf%2BFMYsMBsLVykgYtvfqDXHue6g6oFpcpi%2BNTBsdvAwEveTben1INUhfO86p8VR60W9ecmah%2BnCi0gKRmK3cmPa82VyT1oxnkck179NNzP5mBSA02K%2FGxqeRkNeWv5R%2BSJIUn0NU1VeTHaZlyxyBx6kwLqRMceyzzO9TF5LFW0HIEID%2Bx3ag%2Bf3h56%2BO%2B7uLLAjCi0IfEBjqkActHSzYtvilJcLJM7x8N6OZLz6nPBYlYTFEu8dJZGbcZ3ta4HYAGsEI%2Bkveq3YlgLxmcBCx4Cna5NSsn%2FGN8k4FbtMI5uPa3obwFFPHJ%2BJRH6sbr0c3MBwkCfrheGbkpDbbNvLZF50nYw%2FDQgO6Ck%2FxydMQCO0fPSRgEblxrROuieF5drcCoiQ2QCX73L21wEs%2BedHzep4DH68nnTSQM9gn3ZZfk&X-Amz-Signature=13a7215eb48c4b8e21a1c33957e8c5e9a776f36b2ad8c112bf3b859c72211f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=dBQHtMI-Og4&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=11)

> 🔥 ****CircleCastAll **: Raycast 쓸때 원형의 캐스트를 쏘고 모든 결과를 반환하는 함수**

> 🔥 **플레이어의 위치에서 가장 가까운 적을 구하는 함수**

> 🔥 **프리팹을 다른 스프라이트로 변경했을때 콜라이더 크기가 다를경우 콜라이더 컴포넌트를 Reset시켜주면 해결됩니다**

> 🔥 **추가한 원거리공격을 poolmanager 에 등록해봅시다**


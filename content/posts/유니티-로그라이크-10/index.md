---
title: "유니티 로그라이크 10"
date: 2023-03-07T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 클론 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 사용하여 부모를 변경하는 방법, 근접무기를 등록하고 배치하는 방법, 그리고 Bullet과 Weapon 클래스의 초기화 및 기능 구현에 대해 설명합니다. 또한, 스킬 레벨에 따라 공전하는 무기의 개수를 늘리는 방법도 다룹니다."
notion_id: "4702c5ac-1b38-49c8-b8e3-871a36a9f438"
notion_url: "https://www.notion.so/10-4702c5ac1b3849c8b8e3871a36a9f438"
---

# 유니티 로그라이크 10

> **Summary**
> 유니티 로그라이크 클론 게임 개발에 대한 내용으로, Init 함수와 parent 속성을 사용하여 부모를 변경하는 방법, 근접무기를 등록하고 배치하는 방법, 그리고 Bullet과 Weapon 클래스의 초기화 및 기능 구현에 대해 설명합니다. 또한, 스킬 레벨에 따라 공전하는 무기의 개수를 늘리는 방법도 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f2fdfc4-74ca-4c8c-9f25-26e7785c3671/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFT76AVQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCfHYT5%2FRc5U2oNxBF2auxkt%2BzxO5kqQ7o%2FIB78W1BsVgIgAlQD0GJyoDi4r3s84CYPpmUcSwAtOROV8Xolc0RvF7oq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKyrnKHH3bAubJRCVCrcA3v4ezkoxp%2FSxx%2Bl5ONHq%2F3lhpYIFmercJX3B2pzmXKKbbuZWtbutR8mv0MgprlXe9GSyBH5S2JQTaPj18Z19QRxdVMC0QjKbWKqy24Nad1Oo03%2FsLF2zL1%2Fa5xC%2BDYsaTGZHTcSBk60PXHWKNtck%2F2HUmPFHtlUTSEFQbpy2Z2buipuTQJob4TjSgVYisI9p%2F48E1Pal%2FWXsXugFencBNj1At04xYg8rEkaN6dL77rXuzPRwe0RvUt6pyZSq%2BGniMl60BJ94bmXxlJMD3NpAO7V8CgSnn7%2FWdUvFcuLAYNr4lR7S20MwRZVvWPAV4kNOwu8YkTB60t0Zh2p%2Fnpcu5aXEfRTeCNx5L%2Ffz1sDdJhIe3jdnxOhdJdn7VIoyMy5CuF4b%2FBDKJPKskDieHAGP%2BGqO3t8LAHz8nQfRSXecce%2FL5xXMD6rpQ13qC%2FTg4wP4C09tVT6p%2BokGUSV7%2FQejtThxof8azATE6lSEOUxdYnfOtKzLa29HDoQav8QmxZxy889yrTNLh5ro3swoaHx2hJX9osQrxIWRTPtzamPQ5%2BwCKyH8%2FWcbxUxVi3iSJWw%2FJKlWzKYAdrVb9RiHYid4lPC8HBckCZNSjpbHWzOfpZXjEQa0Sa40IgJlT9rMIrPh8QGOqUB%2Bw4oiaKd3E2GvcSiPQj%2Fnb1Il6EwPt%2Fm26hir1hBYn1gTcMTdWFBCRp6euoVYrQx1prknPFFevUXMeFffYKKU8TGbf5nEdoXkNDncvSS5pJ78LWK%2FSw1WcnqrFQLOdze5p0Dygx0e5qKeA39LQouKvHi4YP6OUTW7r4LV4hXmy4DtMDKWUKB4eqM9UAb%2BFnzaan4MQzchNO4uTzDyJl%2FoWFT7MF2&X-Amz-Signature=68e8e798aea1f21c216443aa481fd961c774003299a916e79ce3c5944ef505e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **풀 매니저에 근접무기를 등록하여 무기를 배치해볼까요**

> 🔥 **Init 을 쓰는 이유는 생성한 변수를 초기화할떄 이용합니다**

> 🔥 **그리고 Weapon에서 Bullet을 불러와 관통횟수를 무제한으로 만들어볼까요**

> 🔥 **하지만 이렇게 하드코딩처럼 프리팹을 하나하나 설정하기엔 프로그래머가 아니죠, 코드로 구현해봅시다**

> 🔥 **이제 스킬의 레벨에따라 공전하는 무기의 개수가 늘어나도록 함수를 제작해봅시다**


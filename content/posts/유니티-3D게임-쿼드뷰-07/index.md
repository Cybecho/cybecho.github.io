---
title: "유니티 3D게임 쿼드뷰 07"
date: 2023-02-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임에서 몬스터를 생성하고, 피격 후 사망 처리 방법을 설명. 머터리얼을 불러오는 방법과 피격 판정을 비활성화하는 스크립트 예시 제공."
notion_id: "dc3d9e44-cb15-45fd-ac6d-4766fa29a508"
notion_url: "https://www.notion.so/3D-07-dc3d9e44cb1545fdac6d4766fa29a508"
---

# 유니티 3D게임 쿼드뷰 07

> **Summary**
> 유니티 3D 게임에서 몬스터를 생성하고, 피격 후 사망 처리 방법을 설명. 머터리얼을 불러오는 방법과 피격 판정을 비활성화하는 스크립트 예시 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f362ff2b-c9ab-47ce-b1c1-0e15737a9dea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BAEROA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCZrUzYQmy17M2l99HEaHkYjG4q8WlN3n5ukjflSRnfrAIgMuWhX%2BCOYwTmcTl%2FOhbXbFpS6d4ju3TRlOA%2BGttGNtYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBrkCEisPDhLQufQeyrcA6jjwK%2Fd6wpzHBhZ%2Bif1jRXJ6dZcYhIhG16zVnLswf44L%2FeH7NnzCKf0PSBOEB0HoqUcve3ngDg2783zF9BoAJOucTFAUPIYC2gcAGL%2B%2FvFdMBEPU%2BhPUCP%2BBfgiYabbXZ7Jm%2FS91r%2FDXdPZQXl1zRfi6%2FTg1GTq%2BKhJdATPJ94lnOtiJBAjNW33Jphm3Xyr%2FRdOkr2Pveqdi%2BNtm8ovDUHsd9XfNvHwNWHnStG%2FqXFErPtgiKE1LMZuA1wwoJekmmKVci2FOWmbZ2tdLWOf8SMjuWSRLpDdLbgOWAnWHhp8JsPSpMRwzeWpWuae1eC%2FEIgrbZ2UemceDrNMKKQNFxRqnc0CaR10J50EjM2i7cd4OTeWJmwarNCnKGdrDvnHYVM69FaKyedwA0wTDerPo%2FC2s3GQDnedc6Sn%2FCl7N%2F8ykRRUQCcBS2Pfw%2FunZ40D5hV01V7Vyi%2BKOyoIfpPVZbhBlcw%2FQ2578m0SG03mrl9Vstv7uc3dW5lIXuWHNF9SDM%2BUQBoOTWM4iXI6GSDFxvjBhjqUYfqj4XkbfAbpyFulFEFZaNheQRvq6BgXSlzDsx1j9efJi1n%2FxIbp2skr0R9MPnhiME7E6Qf%2BeuTCKP2JAbnhFJrWWTcr4rkMMM3Oh8QGOqUBTWSHZvBykSkhfJmSmlnzqjs59DgmUpk1MS%2FrlDAKgRoqCexZU6f8xlkuDDKxAnfDDsSwxoTq5a%2Bq6cOnWlwaWFuqfPnw6TEKCUmVd1f46r69zeONxgcpzoCCcTdRqpKW626RebZSq9D69eMioRtDV0BVtWMsHwqBN8jw63ILbyh8LxiqgCPLUrmxQtTSRMuPoV36aFIaF9l4KCtHIvlxHUfx9GQy&X-Amz-Signature=017807fb7035fe98b1d1979ef02ab421e4570c7322ebf306f0b889bb4874f85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=IoaPxcSHwEM&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=9)

> 🔥 **스크립트에서 머터리얼 불러올땐 그냥 GetComponent만 하면 안된다 MeshRenderer를 불러와서 material을 따로 불러와야함**

> 🔥 **죽고나서 피격판정 안받게 설정**



---
title: "로그라이크 게임 제작 01"
date: 2023-03-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "SPUM 무료버전 설치 및 리소스 탐색에 대한 안내. 무료버전은 구버전이며, 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치. Voxel 환경 자산 링크 제공."
notion_id: "4afad8d2-2bef-437e-a754-3dc69c22792b"
notion_url: "https://www.notion.so/01-4afad8d22bef437ea7543dc69c22792b"
---

# 로그라이크 게임 제작 01

> **Summary**
> SPUM 무료버전 설치 및 리소스 탐색에 대한 안내. 무료버전은 구버전이며, 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치. Voxel 환경 자산 링크 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fe12b808-c14f-4f40-a99a-8a1a3bcb608e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLUGLHD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIQDW%2BzrPVVf4GgiEMx%2BWM%2FqiVfXUNnjHBgL6RknPF5UyNgIfdADgXKBq7oZBTRmirsFeXxo6wnN1a0ecN2g72mSShSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZU3chZk%2BlxjudWx9KtwDG%2B6otwDzJfKPEV9cfLp8ZBFBM7QJUc7dMTdzqvvvZT7V1AFS9wugBsmqogJI1vhOJHsLnIT2ULNl0B9MSZB5J3ITDDtC0RxuqXqMaekVxsqmun5%2BpIImcBJMfKXLyOi5qqCbYFpFTtUcAX5V1TaPl4%2FjXZNEQwNXeZ%2F%2FR4ogPAALNJ983%2BH4nBCyMJhK%2FXaFn0X1HTshy%2Bg%2Fe0WuH%2Beb%2BYEnWMBJMcpkDVSgH0wTUAHvPtBjw1y7PAcubwJvUEmif%2FZ23mkjlSYV5nkaDQTgS5Io5J%2BFinRdd43hmNhI7wswy2KhhxyMCPA94dHeY%2BhnEhllQ9Lz%2Fc3EOIgk41n%2FVRkc4FZKxzVMOlVhc7gGOC0fYJ%2BFQwe2p1q%2BbV4fXv2Cqv0XS%2B9mkJWC3ymmoU%2F1SI6KdDmZFfBzvJi57gnRl1504SfKOWu3G8wrBsnR3xN6Ev%2FKUPyQn3HXGCbDmcPb8ZTbPayoHx50CJ3d3jOXouzJmInGrV5c0XbA521WbKjaQtw%2B1iq5N6iF7JXBqe3A%2B2mKpgdI9hLh%2B1BNGaHpAtUkD9CPFo%2BI%2BmtzZVuajmAeA1rCxoyz2xinFBwgbNVyM8wunWjMl4%2FL1mo6ArwwroQ7drQv9asKsvwPpEIw986HxAY6pgG1mN0G73jH0Ykzir1SkZrySgCjQ6QzZPiKkoaxUDr9WfCTL3mp5Yh018%2BeckA%2F37cKpKuPMwWxCXmAzq5QeGKTKlj9ahKY05JMVBMZ1%2F53f2uMAIjAVmD1AggaLTjNg3I7xEyhpP3pVKNc5J%2FHsPWP%2BcwvBW%2FOFje1RxgdEf9giPfr547UtLoQeUpY%2BCZAZROuSqngQGNhdNsObsNBGBx4XnYLk2gw&X-Amz-Signature=cfe327675c1912ae70aeb647aca1cf0207a9b800352fb62e6fb54c522e5916fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=lnvNWuovnRs)

위 영상 따라하기 전에 아래 링크에서 SPUM 설치

🔗 [https://www.soonsoon.co/docs/spum-ko/free-version/](https://www.soonsoon.co/docs/spum-ko/free-version/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=TvxdkMMuC1A&t=140s)

무료버전은 구버전이다 해당 영상을 참고하자

> 🔥 **저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units 에 존재함**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0ebc82e4-4e35-448a-bc17-9fbc935ca64f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLUGLHD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIQDW%2BzrPVVf4GgiEMx%2BWM%2FqiVfXUNnjHBgL6RknPF5UyNgIfdADgXKBq7oZBTRmirsFeXxo6wnN1a0ecN2g72mSShSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZU3chZk%2BlxjudWx9KtwDG%2B6otwDzJfKPEV9cfLp8ZBFBM7QJUc7dMTdzqvvvZT7V1AFS9wugBsmqogJI1vhOJHsLnIT2ULNl0B9MSZB5J3ITDDtC0RxuqXqMaekVxsqmun5%2BpIImcBJMfKXLyOi5qqCbYFpFTtUcAX5V1TaPl4%2FjXZNEQwNXeZ%2F%2FR4ogPAALNJ983%2BH4nBCyMJhK%2FXaFn0X1HTshy%2Bg%2Fe0WuH%2Beb%2BYEnWMBJMcpkDVSgH0wTUAHvPtBjw1y7PAcubwJvUEmif%2FZ23mkjlSYV5nkaDQTgS5Io5J%2BFinRdd43hmNhI7wswy2KhhxyMCPA94dHeY%2BhnEhllQ9Lz%2Fc3EOIgk41n%2FVRkc4FZKxzVMOlVhc7gGOC0fYJ%2BFQwe2p1q%2BbV4fXv2Cqv0XS%2B9mkJWC3ymmoU%2F1SI6KdDmZFfBzvJi57gnRl1504SfKOWu3G8wrBsnR3xN6Ev%2FKUPyQn3HXGCbDmcPb8ZTbPayoHx50CJ3d3jOXouzJmInGrV5c0XbA521WbKjaQtw%2B1iq5N6iF7JXBqe3A%2B2mKpgdI9hLh%2B1BNGaHpAtUkD9CPFo%2BI%2BmtzZVuajmAeA1rCxoyz2xinFBwgbNVyM8wunWjMl4%2FL1mo6ArwwroQ7drQv9asKsvwPpEIw986HxAY6pgG1mN0G73jH0Ykzir1SkZrySgCjQ6QzZPiKkoaxUDr9WfCTL3mp5Yh018%2BeckA%2F37cKpKuPMwWxCXmAzq5QeGKTKlj9ahKY05JMVBMZ1%2F53f2uMAIjAVmD1AggaLTjNg3I7xEyhpP3pVKNc5J%2FHsPWP%2BcwvBW%2FOFje1RxgdEf9giPfr547UtLoQeUpY%2BCZAZROuSqngQGNhdNsObsNBGBx4XnYLk2gw&X-Amz-Signature=50f49ab06113029a5321cba64eb311cd5f61dcba80b06a85aabe7653986f7052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 리소스 탐색

🔗 [https://maxparata.itch.io/voxel-desert-town](https://maxparata.itch.io/voxel-desert-town)


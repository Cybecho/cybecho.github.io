---
title: "유니티 로그라이크 13"
date: 2023-03-12T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "UI(HUD) 구성 방법, 해상도에 상관없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추는 방법, 경험치 바 제작을 위한 슬라이더 활용, string.Format() 사용법, 플레이어의 위치를 따라가는 체력바 생성 방법에 대해 설명합니다."
notion_id: "0637370b-b32e-49d3-821d-ba6c24de5279"
notion_url: "https://www.notion.so/13-0637370bb32e49d3821dba6c24de5279"
---

# 유니티 로그라이크 13

> **Summary**
> UI(HUD) 구성 방법, 해상도에 상관없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추는 방법, 경험치 바 제작을 위한 슬라이더 활용, string.Format() 사용법, 플레이어의 위치를 따라가는 체력바 생성 방법에 대해 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/14e57743-12e7-49d9-8e69-4ce0a583b327/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LRAKQQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCV2ZjuKqZCd0nNNLnC1DBjVeKtto08x0l0lRXrnwAC3gIhAN27PiPgkFu%2BPgjBz2dAdU4FhqyJImD87G5%2BfxbbUU9bKv8DCC0QABoMNjM3NDIzMTgzODA1IgyPlgXmwJCRB%2BOyH90q3AOAIMnfhT%2BxxIfhBcgICa%2Bni5wmb%2BS%2FG4SlerAMaWccAr2svMXrGWjIMM0ZHMKCFqE10QgLktyvAjheih0it8ECTORGbJQJ8Fp3Bg%2BG%2FGdejrPJQMhiQit7V%2BurWGXBnYP2lf5aKEU5zhWkpcktSBfkajnlTryGmvvL5aBjQZam1tpMU7J3KfKMA5iBkANv60QkswosI5dXsMCZ%2BiH4sW9zbUsnPqIIgK9QsnqCk3Rb92fq5zUiKQxr1T%2Fd%2BjrWmF1Cl31zknDDi710HDw264kz74n0YdNES7z2rrSd6kJMkfHpJERWh6xgVwyt6T9S0O2dhTWSH3%2BuiNVIkJQQl7CZ8Voaf55fZ89AWOfwlR%2FFLfP5GCbmwBvae%2FtynKHksgy%2FUcEQbHlvLaIvw2F0A2JH5FzdL9ouS2gn7BhBYD07G%2FFCHN%2BduUWHcTNkzzMOuKfvDWjROJv2IY7IiobG5GR%2FPq%2FSJu1BOYn%2B%2F29auFR3%2B13VkJgitzQgPIRmdhwp77u4lokt%2Ft28Diwk0DGzAKHXikLsBP%2B8Y8GjaoESWGq4z%2FVKb0Gp9Mf0RD5r5AiHt4IjvUb%2FVvI%2F5iE3f%2Fg0dAkvCGhTWcirhaQDwBhu9VXgJlF0eC65fAPev4iULzC4v4jEBjqkAZZPDgeCrpixpCopcUXMFQL6ICttHawwrdRd9MGSrecjDBeBI7KtHfIbzfMW9S0D1izwRnRtNqIdLNMPzojkixcf%2FfBMYCvL4RXYtUgqB3e7ywiaFkE%2F%2FnEUDoFDj2x3gbmGve3ZfLCOeMUK5bXj2vJO4SwC%2BjtrrRgdjAXxSJI2XCq5HdE6zjRIoKYaydWuom%2FwodN5o7RR5eF0hFsc2IikhyFo&X-Amz-Signature=db7c213ca0778baaa860ccbee3dd9cfd59c33a0c96b9bdf06d3a8aec80b90d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=ip0xffLSWlk&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=13)

> 🔥 **캔버스를 생성하면 초반에 크기가 무지하게 큰데. 렌더보드에서 Camera로 변경해주고 렌더카메라를 Main Camera로두면 UI의 크기가 카메라에 맞게 설정됩니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b775ab76-1f2c-4aa1-b247-eba6135409d6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQWJ3IF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDpH5Las8y%2BZ9yCmYi%2F4WC0zu%2FHRu7%2Bu7EHxUk5b%2FSN%2FwIgC%2BWcQ88ww5Zga2iGx4fMTvGQbjNLdPqXU0qkxoPOHkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDse863kAMBfxPaNdircAxUuv78%2Fg6t4%2FNNzT%2B3Zv9wt%2F8s3Fs1gUgf0ph9nmNyi%2FwYF7PdBNLuo%2BLLdMN%2F8j0sWAhFCtNZJc%2FD6anTyWiYO36UZtuN8mvJ8HgDmF5zl6JH1ChYYa4W05MFTqzVpHb0DooTbe5GlVMahFZJbG6PEua%2FOzDnr8PyFuHl2BLv5hA9uihNQ%2B0EYsJ4fWlWnkF0mZedUAPmwH%2FLpgGofEVm%2B6AhhzGayg9Osgyba%2BubPFXyr3KPx1uFzhAXtnHHtlzh9u2VWnG3X%2F9xvk9LSxREASTp3uSJWYHAoJpFqZ3MzzndMWx66EscmzxsuQJlgNSisPtflh9vDx5IJS7BRz46ymZ2aqdiyPz5TSyg4AKvhJ8MkMWdDTYy4Stjg1h%2FQ7E0G5GSfgrp2JIxzo5wlg65w8%2Fwxn%2FJwOZKkT4CJtZ8uxAw5L1lEkZ2kRb2D%2B57LW1gBRfPOn5uHdIGuElAO%2FDtSGjW5XfXbLgJmjSaK9QMQP6xFy6%2B1qJ87mwFLhFfay10Zd4MlAWwpdcPQJC4zeTSM0Sg8pBHTyqVEJoMrCxtOOVa9n3OV%2F7fZOri7fL1wplKC59yBO1WiBkyF1eskSrT4O8%2BaTNMFl7KP2Dv0UyxbECdc45wHdS3uvdRlMPm%2BiMQGOqUBMKLH32zAvyJAPfNDu4eV6sgKKnwWIRMwLi%2F063vc1c7a7r263afETBDBpbmBLcKAbVDkz5p4z3wdBwCuqep%2Bpu3dRlY35BMHbTuPR%2BMQJ4MaBGRsymlMQ7NG0%2FdIAFjipsL4Bk3r9CRBfZUhZ9l6dL6GR5z2QXeGzM%2BRRItteZJ4ZpHp8azKxoThf1%2Bw%2BJ%2BV3JaB58YyWZZ8TLFfXVnOfi9QUmOL&X-Amz-Signature=7ddfa2d3330da63e2a8edac4dd6f5fbc4e7124fc2865fd576112a9367db6e570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2d3b4c1e-ee78-4c61-88e1-0b443978de64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQWJ3IF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDpH5Las8y%2BZ9yCmYi%2F4WC0zu%2FHRu7%2Bu7EHxUk5b%2FSN%2FwIgC%2BWcQ88ww5Zga2iGx4fMTvGQbjNLdPqXU0qkxoPOHkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDse863kAMBfxPaNdircAxUuv78%2Fg6t4%2FNNzT%2B3Zv9wt%2F8s3Fs1gUgf0ph9nmNyi%2FwYF7PdBNLuo%2BLLdMN%2F8j0sWAhFCtNZJc%2FD6anTyWiYO36UZtuN8mvJ8HgDmF5zl6JH1ChYYa4W05MFTqzVpHb0DooTbe5GlVMahFZJbG6PEua%2FOzDnr8PyFuHl2BLv5hA9uihNQ%2B0EYsJ4fWlWnkF0mZedUAPmwH%2FLpgGofEVm%2B6AhhzGayg9Osgyba%2BubPFXyr3KPx1uFzhAXtnHHtlzh9u2VWnG3X%2F9xvk9LSxREASTp3uSJWYHAoJpFqZ3MzzndMWx66EscmzxsuQJlgNSisPtflh9vDx5IJS7BRz46ymZ2aqdiyPz5TSyg4AKvhJ8MkMWdDTYy4Stjg1h%2FQ7E0G5GSfgrp2JIxzo5wlg65w8%2Fwxn%2FJwOZKkT4CJtZ8uxAw5L1lEkZ2kRb2D%2B57LW1gBRfPOn5uHdIGuElAO%2FDtSGjW5XfXbLgJmjSaK9QMQP6xFy6%2B1qJ87mwFLhFfay10Zd4MlAWwpdcPQJC4zeTSM0Sg8pBHTyqVEJoMrCxtOOVa9n3OV%2F7fZOri7fL1wplKC59yBO1WiBkyF1eskSrT4O8%2BaTNMFl7KP2Dv0UyxbECdc45wHdS3uvdRlMPm%2BiMQGOqUBMKLH32zAvyJAPfNDu4eV6sgKKnwWIRMwLi%2F063vc1c7a7r263afETBDBpbmBLcKAbVDkz5p4z3wdBwCuqep%2Bpu3dRlY35BMHbTuPR%2BMQJ4MaBGRsymlMQ7NG0%2FdIAFjipsL4Bk3r9CRBfZUhZ9l6dL6GR5z2QXeGzM%2BRRItteZJ4ZpHp8azKxoThf1%2Bw%2BJ%2BV3JaB58YyWZZ8TLFfXVnOfi9QUmOL&X-Amz-Signature=0176ce5a644fed3841c105ddaa2e51b404dae98f8c3cdaf1edd9aa63089236df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 어떤 해상도든 같은 스케일을 가지는 옵션은 다음과 같습니다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f881a101-027b-4792-9e5b-9a124a3247e9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQWJ3IF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDpH5Las8y%2BZ9yCmYi%2F4WC0zu%2FHRu7%2Bu7EHxUk5b%2FSN%2FwIgC%2BWcQ88ww5Zga2iGx4fMTvGQbjNLdPqXU0qkxoPOHkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDse863kAMBfxPaNdircAxUuv78%2Fg6t4%2FNNzT%2B3Zv9wt%2F8s3Fs1gUgf0ph9nmNyi%2FwYF7PdBNLuo%2BLLdMN%2F8j0sWAhFCtNZJc%2FD6anTyWiYO36UZtuN8mvJ8HgDmF5zl6JH1ChYYa4W05MFTqzVpHb0DooTbe5GlVMahFZJbG6PEua%2FOzDnr8PyFuHl2BLv5hA9uihNQ%2B0EYsJ4fWlWnkF0mZedUAPmwH%2FLpgGofEVm%2B6AhhzGayg9Osgyba%2BubPFXyr3KPx1uFzhAXtnHHtlzh9u2VWnG3X%2F9xvk9LSxREASTp3uSJWYHAoJpFqZ3MzzndMWx66EscmzxsuQJlgNSisPtflh9vDx5IJS7BRz46ymZ2aqdiyPz5TSyg4AKvhJ8MkMWdDTYy4Stjg1h%2FQ7E0G5GSfgrp2JIxzo5wlg65w8%2Fwxn%2FJwOZKkT4CJtZ8uxAw5L1lEkZ2kRb2D%2B57LW1gBRfPOn5uHdIGuElAO%2FDtSGjW5XfXbLgJmjSaK9QMQP6xFy6%2B1qJ87mwFLhFfay10Zd4MlAWwpdcPQJC4zeTSM0Sg8pBHTyqVEJoMrCxtOOVa9n3OV%2F7fZOri7fL1wplKC59yBO1WiBkyF1eskSrT4O8%2BaTNMFl7KP2Dv0UyxbECdc45wHdS3uvdRlMPm%2BiMQGOqUBMKLH32zAvyJAPfNDu4eV6sgKKnwWIRMwLi%2F063vc1c7a7r263afETBDBpbmBLcKAbVDkz5p4z3wdBwCuqep%2Bpu3dRlY35BMHbTuPR%2BMQJ4MaBGRsymlMQ7NG0%2FdIAFjipsL4Bk3r9CRBfZUhZ9l6dL6GR5z2QXeGzM%2BRRItteZJ4ZpHp8azKxoThf1%2Bw%2BJ%2BV3JaB58YyWZZ8TLFfXVnOfi9QUmOL&X-Amz-Signature=27d9c1ada3c06b7b1ae9830b2028859dbc852f9597a6fa1244433c1760557b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5075fb59-597b-47a6-ba13-5f990ac5842b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQWJ3IF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDpH5Las8y%2BZ9yCmYi%2F4WC0zu%2FHRu7%2Bu7EHxUk5b%2FSN%2FwIgC%2BWcQ88ww5Zga2iGx4fMTvGQbjNLdPqXU0qkxoPOHkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDse863kAMBfxPaNdircAxUuv78%2Fg6t4%2FNNzT%2B3Zv9wt%2F8s3Fs1gUgf0ph9nmNyi%2FwYF7PdBNLuo%2BLLdMN%2F8j0sWAhFCtNZJc%2FD6anTyWiYO36UZtuN8mvJ8HgDmF5zl6JH1ChYYa4W05MFTqzVpHb0DooTbe5GlVMahFZJbG6PEua%2FOzDnr8PyFuHl2BLv5hA9uihNQ%2B0EYsJ4fWlWnkF0mZedUAPmwH%2FLpgGofEVm%2B6AhhzGayg9Osgyba%2BubPFXyr3KPx1uFzhAXtnHHtlzh9u2VWnG3X%2F9xvk9LSxREASTp3uSJWYHAoJpFqZ3MzzndMWx66EscmzxsuQJlgNSisPtflh9vDx5IJS7BRz46ymZ2aqdiyPz5TSyg4AKvhJ8MkMWdDTYy4Stjg1h%2FQ7E0G5GSfgrp2JIxzo5wlg65w8%2Fwxn%2FJwOZKkT4CJtZ8uxAw5L1lEkZ2kRb2D%2B57LW1gBRfPOn5uHdIGuElAO%2FDtSGjW5XfXbLgJmjSaK9QMQP6xFy6%2B1qJ87mwFLhFfay10Zd4MlAWwpdcPQJC4zeTSM0Sg8pBHTyqVEJoMrCxtOOVa9n3OV%2F7fZOri7fL1wplKC59yBO1WiBkyF1eskSrT4O8%2BaTNMFl7KP2Dv0UyxbECdc45wHdS3uvdRlMPm%2BiMQGOqUBMKLH32zAvyJAPfNDu4eV6sgKKnwWIRMwLi%2F063vc1c7a7r263afETBDBpbmBLcKAbVDkz5p4z3wdBwCuqep%2Bpu3dRlY35BMHbTuPR%2BMQJ4MaBGRsymlMQ7NG0%2FdIAFjipsL4Bk3r9CRBfZUhZ9l6dL6GR5z2QXeGzM%2BRRItteZJ4ZpHp8azKxoThf1%2Bw%2BJ%2BV3JaB58YyWZZ8TLFfXVnOfi9QUmOL&X-Amz-Signature=6070002a1f6b3174421c982f6aaf608bba53c5be9bb1595e84b514aa6eb6f6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **HUD : Head Up Display 구성**
> 일단 HUD.cs 를 만들어줍시다
>
> > 🔥 **Ctrl + Space를 하면 추천 자동완성을 알려줍니다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e05fbc1c-2421-441c-9cd8-5a73037b32ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NC425EL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG2rFLNkp34iPDb%2FxYiJmaLXE4NSqdDhhZpUs5dp7U%2FDAiEA%2BGEqKYXUp%2FhSahAq%2FG7IgFhh0BAPjS32tblBRajtFgkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDARhPY2dDNbz1TApXSrcA12%2FXQG0aGNUpEb3IVLd1wL5xtBa68xj03%2F4OnR%2Bmjvk2ntW39aAqSNvehSChWhp%2Btrej1RT%2BWcv0JqazZEnBRbOYOTFs7CsMRiY8VSIlJhZ9If73F8B1Vy1BuMNNkElV%2Fvvl3x7vAl2wIOhqUkxXe7K4b7VJ7vgtIqulV2Ku%2FLKNt0SA4qzrgNQnWpFx8HMIaCrhbMbunoc1fnONH5tNV64YQXfGicfe%2Fo7sGONzXCvx1RSu6uoE0lzomqO3%2Bker5E9n6Od8yD18UZKHpFFeUwZkHyzYesffJIKmfYYDmTLsJ812KSF%2F3K3bVa7XVMw6Z17CEghv8Hlzr2I%2FF8pNN6ZIZPZihXUrnyEQ7JDzHSepPLbqhcyhJAIqq8kbbDtR1J9hDH3bZ62AJxHLL6z62cPZ3Bsmw3Lxvp8tu%2FU24MqvI2WYt97VFjLEZuI7QqfpxQHVpb5M%2BCdujEfi%2BtknTHip3OoBzIn9guqiYY0aCz%2BeicrXFDvrDC%2BQUaW8QWRArUj%2FZvPceQo5kA3FhJG%2BMNC3N2Hyq9jQGJslaYPme64n1w1sPV8H1gWsKAZDncGvoXXNlapNafJF7CQlMSJuBU5MYvOJt%2F7B6%2FH37QQPggtotufwKoaZAK1W5ViMKq%2FiMQGOqUB9zeCDRMI7rQfsUDuLdR2EnEmdtBZbftwoHN5nZDeYeTWtOHMauBu8Wil3wOtTr%2F76QFpT2KfUyno%2Fo2H0imGbvMjK7h18qoSsUGZb2azpTF%2BkWz84yV6wJhCGZYMNT%2FBLWaNBURqq8yUo8w404uiinZfY841yPXwDV0S%2FaJfvVc4sbN3IlqkYp9OXVBC8PJqBSa8J2oq6JmJgdnIVnKK8wRY1KNt&X-Amz-Signature=3f42748fd92009d69f0d10993049e9bf9d8f417b2fe442475cbf4fd6829e3080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
>

> 🔥 **slider로 경험치 UI바를 만들어봅시다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8ace7af3-e4ee-42df-9685-07bee469eb43/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYRCQXU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBx3VsVhsYb2d%2FYw01Ey1NJZzMHg5TLpYJjhVBNe02zLAiEA1TqIZyg05zcK%2FS11qnRU9Asjoe0DIlmUiIwamx2RfL8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDO%2Fp6wR410%2BrejqvGSrcAzgTENQAO6Ej%2Fn9zK6nLufxxinl8N%2B4shVnp5DKrQTEW81ifEozZHbknqS6MTuaG9ePzaczLwt8rO0dnA2mPISQNqNbI39IJk%2BmEWefHBkXYHXbr3Yn%2FrrapLGA9Ro8GpNtae5aLSnuSVNDUBD477sUTW85nDGbz5xmSSqCd43KyD%2BFIC4JzBwG7129hkjzUF67SyyI7PJJS65lc4KyL18ruxYoogh9c0QL8ZJiBbxwVf6JHpSAQBD4g2mCx3zPBDZAhaBcubwk2Luo09egNdGQuM2q9KkqJf%2FK3hmQR6dqtjWnsB8K5ZalHUgVQsBhVr%2BbyTRgotgkR7oYFihv43xjowVmrLE%2F%2BjdZnBZ2bsNYvDsKDy%2FvKhALhI6x1mPL1FluxOJjm0%2FKQvB3jEpMyAZF0b6%2BgPMZY0cZMGTBr2jOWHcefhMKodR6fHAGqw82Spo6zFPoyrMxwCWSH2H67pmJXvFx4yCg7AQrCECyBv9OLkjecdDNxgRI7bRFj6QMZ0nuotePjrIqx%2FJ%2F2qf26YZIA6%2F2Pm9cztjFa0fFjf%2BUeF%2FJdP0MyNV9up4KqCbQ2QBoBBxN3KMzeFBS%2BdwdXFX%2B7hbs6c4oR6p61jJk6fyikwDU43RRUGnVIebKgMI6%2FiMQGOqUBnOuChINbWsZut0x7icZ9ffr6gL1QviLD6%2Bze1Uki40%2FJHrmlBQn%2BSSmOJcuscKhGbqY1J8CvXRuXEi0XCiB4LVrEZePH%2B8SBdf%2BBFDdejPbkmpSXpv2OsT4pX7NnkbkFhI7f%2F0p6BgCw%2BXJHTMlUp1JtUEXvg%2BJao4U9wG4s%2FY6SCO%2BL4%2Fgf21S7brKAfdLKTigfX6ev3K3sk6ki5QFr90w%2FcuHx&X-Amz-Signature=aa9b6e53357d44a6116011cc6f765b8efae9d301ff0ce63215f6c02c398da8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c98a6cc0-e01e-45b6-9d02-679b8cb15733/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYRCQXU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBx3VsVhsYb2d%2FYw01Ey1NJZzMHg5TLpYJjhVBNe02zLAiEA1TqIZyg05zcK%2FS11qnRU9Asjoe0DIlmUiIwamx2RfL8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDO%2Fp6wR410%2BrejqvGSrcAzgTENQAO6Ej%2Fn9zK6nLufxxinl8N%2B4shVnp5DKrQTEW81ifEozZHbknqS6MTuaG9ePzaczLwt8rO0dnA2mPISQNqNbI39IJk%2BmEWefHBkXYHXbr3Yn%2FrrapLGA9Ro8GpNtae5aLSnuSVNDUBD477sUTW85nDGbz5xmSSqCd43KyD%2BFIC4JzBwG7129hkjzUF67SyyI7PJJS65lc4KyL18ruxYoogh9c0QL8ZJiBbxwVf6JHpSAQBD4g2mCx3zPBDZAhaBcubwk2Luo09egNdGQuM2q9KkqJf%2FK3hmQR6dqtjWnsB8K5ZalHUgVQsBhVr%2BbyTRgotgkR7oYFihv43xjowVmrLE%2F%2BjdZnBZ2bsNYvDsKDy%2FvKhALhI6x1mPL1FluxOJjm0%2FKQvB3jEpMyAZF0b6%2BgPMZY0cZMGTBr2jOWHcefhMKodR6fHAGqw82Spo6zFPoyrMxwCWSH2H67pmJXvFx4yCg7AQrCECyBv9OLkjecdDNxgRI7bRFj6QMZ0nuotePjrIqx%2FJ%2F2qf26YZIA6%2F2Pm9cztjFa0fFjf%2BUeF%2FJdP0MyNV9up4KqCbQ2QBoBBxN3KMzeFBS%2BdwdXFX%2B7hbs6c4oR6p61jJk6fyikwDU43RRUGnVIebKgMI6%2FiMQGOqUBnOuChINbWsZut0x7icZ9ffr6gL1QviLD6%2Bze1Uki40%2FJHrmlBQn%2BSSmOJcuscKhGbqY1J8CvXRuXEi0XCiB4LVrEZePH%2B8SBdf%2BBFDdejPbkmpSXpv2OsT4pX7NnkbkFhI7f%2F0p6BgCw%2BXJHTMlUp1JtUEXvg%2BJao4U9wG4s%2FY6SCO%2BL4%2Fgf21S7brKAfdLKTigfX6ev3K3sk6ki5QFr90w%2FcuHx&X-Amz-Signature=dfff98095b3c93bceb44a4661cf91c463e83744e5a47ea6d366d142c2578409d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> BackGround하고 Fill Area 둘 다 앵커포인트를 다음과 같이 변경 한 후에 Fill Area내부에 Fill에 Left와 Right를 -5라고 되어있던걸 0으로 초기화
>
> ```c#
> //HUD.cs
>
> void LateUpdate() 
>     {
>         switch (type)
>         {
>             **case InforType.Exp:
>                 float curExp = GameManager.instance.exp;
>                 float maxExp = GameManager.instance.nextExp[GameManager.instance.level];
>                 mySlider.value = curExp / maxExp;**
>         }
>     }
> ```
>
> ```c#
> //HUD.cs
>
> case InforType.Level:
>     //string.Format("쓸문자{0}",{0}에 들어갈 매개변수);
>     //F0 : 소수점이 없다 라는 뜻
>     myText.text = string.Format("Lv.{0:F0}",GameManager.instance.level);
>     break;
> case InforType.Kill:
>     myText.text = string.Format("{0:F0}",GameManager.instance.kill);
>     break;
> ```
>
>

> 🔥 **체력바를 생성하고 플레이어를 따라가게 만들어봅시다**
>
> ```c#
> //Follow.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Follow : MonoBehaviour
> {
>
>     RectTransform rect;
>     void Awake()
>     {
>         rect = GetComponent<RectTransform>();
>     }
>
>     //플레이어의 프레임 주기를 동기화하기위해 FixedUpdate로 사용
>     void FixedUpdate() 
>     {
>         //월드 상의 오브젝트 위치를 스크린 좌표로 변환
>         rect.position = Camera.main.WorldToScreenPoint(GameManager.instance.player.transform.position);
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7196cae9-bb3e-4724-8c25-af7dbe652d16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKLVTC5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQChr%2B6ZKts37Zqc0Nm7EpQdYIA%2FiAE0NDnq5O4nOKJ%2FEwIgHya1rsoSTyymOvY%2BbfHFR1Ep3FIgXbat%2B5619cZpeWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDO4gsnZjAk63%2BmE7jircA9k%2FGryM%2FOY9DqXPi%2BZ59x0REvBuNjlnlWhjzx7toyY9RT6%2BEptzUJHZTmEQbgSmDPlsMFqsN77mb2rMCqs7kXW8POmAgLN9hsuRbbzbFuOBBtSMBxoTHWFtLB36ezUTVpVXmKbe7maM75Qpezl0zCav0U96GP341LLpruyJhTq7qdtjvSs0wFuJXJ%2FTMdapQxGJw1JMvBt6Qfe0JEW8%2BOt7u%2B5vZbZIokD4F%2Bx8tlpgsZl1Jw3%2FvIsDYhLEvChYoW5bhrm9cd5JkddfInrxJNSfc2vGsEV2IpB7ZfW2FKCOoXMHYwNAb45YliGQ0ACATyYNsPuVng7q2ufzy3%2F2vQ34NKQxmvZIcmDxgPwl3nTKa37DAmF3HuhG%2BsMKn7WDU0%2FHIz%2FbEaeXSFfhmTvyFoccWDrGBlRquBJHOKpoX0Pn%2FLHEaTGxpuGYhm3IFSV89raBbyaGnIug3idqALwINOe%2F0tR%2FIgXN%2BJeTQu6%2FJXV6q%2FYD35YUWPq8nEzJv%2Brl0K4MvVU6URg2ZsEfaW1mLqLptPYaMs6rh1SAMMFGTdCzSCBADhkVen7SdIZE6VoFSjFmeS8GQqTI8rmiJGEiiEJer0VACi%2Bl06ALSCgz7nRlcI%2BzBTyX8%2FOrGXXDMJa%2FiMQGOqUBAtvzcB7HKeRjK0B67zOxAK8o1gn0khQJ9kEqF3m1Xc2Tj5BPmfZpdpELA6b%2FbOyCZwoX4BjWlCw8ZMLJcufZ18zk80aUxZ4gOXEhF8cusmDLGZjluxa0W01RR%2Fka6a8IoF1%2BEATQ0KlEO28XbGA7wxEHJC5yfqC%2B%2FExRPsh40UKcPLC%2B9uB0HbdTdxB9kYTV6%2BmnTlQmY5u9S%2FrMGjl4QVsV4mpf&X-Amz-Signature=393ebc3fc9facd79cb1598692ab72b7bc0934e285bb92faf803322b7cd5129de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> Slider로 Health를 만들어주고 플레이어 아래쪽에 설정해 준 후에 Health에 Follow.cs 코드를 넣어줍니다
>
>



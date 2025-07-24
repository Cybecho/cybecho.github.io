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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95d26fb7-196c-4de6-bee2-aaf760a569a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZ2P5F2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkuJKNsM1HIDevP%2FqzVHnwEKtmp6zfAhkZm%2FYINBJncAiAlEOZ9EmPJnTWMycB0iUBtCSlAZDFHUzudM2A3%2FNW0aSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXrwLshNHwWdLTQhnKtwDkEJWr%2BAlaQGTVYjTBYpZCttt%2BRNIGbUcE2CQSQQ6T0xMQjTMKkQIxuY6ENHx%2FQl%2BweNLDPJTopn97IsWH3potdQeQX2iehodFUTpcPRhw8hzLNkxhyUhxOqbZw%2FGdFLyn6%2Bh9j8RHweOjttCLVRvtdRkTpBW1tXl4e%2FzScIWGxgywIshx%2FuroiGUT7dML%2FqUuvLPyq75MAacnVRDfVd%2B%2B6WaG1GkGqe8ErTpSlUi0GnCYLUbWseWC3GvHp7if8a8ulpotDNpUfXXxk69nXYSIqbBDIkVjsqx3qDFHudL5kkioYlDJErvSdYBhdQK8zBhmRxYQ%2B2TTzu2WGmTQKg9PI1dP8eSCAN7MlQ5drzwe74WrBlDDqt4VkwhUWDr0Rr%2B%2Fia1k6RmcUL%2FXcxq7iV1vtuVzQlwqrzzNCDgEwJrHvqI2U0%2FTJAoDS%2BvQpGDA7Y93j3df%2FlunPfGJBA%2FvDeZvbCgOQ6CtZ7OaTd0AIhDMOvSIiMQf595vU%2FVPJgXc8GsXSUXg6rngnFngEviFLy4kuFx4yYDt1bOXZyXG1B8SWvAzbaVBq%2Fvvwoq2%2BDeopaDH3uWQ9XoSnRNIwnzWd8Ep%2BIzDaZRLJcpOUtIgrCoydN02ztTL4VO%2By32NJAwgfaHxAY6pgHYFDd%2Fgn9Mg7FoHmxpvfr%2Fq03j5MbPcXz3qzbFaVr%2Fh9NHl1Dm2YJ%2Bh3okg17HNUq5Mnj54PQgx7Xsbnrj1ahLMHTbPqQwKJUnuFSZoJeI1i7csf8vVbQC%2Blwt2JFXcJrpCU5ShxUozqZplRafCFrpUTpmcUdu2MuuKfstB72yB7CIdZ0QSJSWmq9yAkJBWfmIz1M5HZfo2RVqDL07zHWRfI1XsPhX&X-Amz-Signature=58ee45a86c62385ea63796409edadbc8ea3942b2c06c8328d929616a95745b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=dBQHtMI-Og4&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=11)

> 🔥 ****CircleCastAll **: Raycast 쓸때 원형의 캐스트를 쏘고 모든 결과를 반환하는 함수**
> - 매개변수 순서
>   - 캐스팅 시작 위치
>   - 원의 반지름
>   - 캐스팅 방향
>     - 원형으로만 쏠거기때문에 0 들어가면 됨
>   - 캐스팅 길이
>     - 플레이어 자리에서만 원을 형성하기때문에 0이 들어가면 됨
>   - 대상 레이어
> ```c#
> targets = Physics2D.CircleCastAll(transform.position, scanRange, Vector2.zero, 0, targetLayer);
> ```
>
>

> 🔥 **플레이어의 위치에서 가장 가까운 적을 구하는 함수**
> ```c#
> //Scanner.cs
>
>
>     Transform GetNearest()
>     {
>         Transform result = null;
>         float diff = 100;
>
>         // ... 반복문을 돌며 가져온 거리가 저장된 거리보다 작으면 고체
>         //targets안에 CircleCastAll에 맞은에들 중에서
>         //순차적으로 targets를 돌면서 Raycast를 하나하나 꺼내는 흐름
>         foreach (RaycastHit2D target in targets)
>         {
>             Vector3 myPos = transform.position; //내 위치
>             Vector3 targetPos = target.transform.position; //레이케스트를 맞은 적의 위치
>             //거리를 구해주자
>             //Distance가 벡터2개의 거리를 알아서 구해준다
>             float curDiff = Vector3.Distance(myPos, targetPos);
>
>             // .. 현재 거리와 가져온 거리를 비교
>             //지금 하나하나 가져온 target과 지금 우리가 가지고있는 최소한의 거리
>             //가지고 온 거리가 더 작다면 diff에 그 거리를 넣어준다
>             if (curDiff < diff)
>             {
>                 diff = curDiff;
>                 result = target.transform;
>             }
>         }
>         return result;
>     }
> ```
>
>
> # 전체코드
>
> ```c#
> //Scanner.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> **public class Scanner : MonoBehaviour
> {
>     public float scanRange;
>     public LayerMask targetLayer; //레이어 마스크를 생성
>     public RaycastHit2D[] targets; //몬스터'들' 과 플레이어간의 거리를 계산하기 위해
>     public Transform nearestTarget; //플레이어와 가장 가까운 몬스터
>
>     void FixedUpdate() 
>     {
>         targets = Physics2D.CircleCastAll(transform.position, scanRange, Vector2.zero, 0, targetLayer);
>         nearestTarget = GetNearest(); //가장 가까운 적을 찾기 위한 함수를 매 프레임 실행
>     }**
>
>     //플레이어의 위치에서 가장 가까운 적을 구하는 함수
>     Transform GetNearest()
>     {
>         Transform result = null;
>         float diff = 100;
>
>         // ... 반복문을 돌며 가져온 거리가 저장된 거리보다 작으면 고체
>         //targets안에 CircleCastAll에 맞은에들 중에서
>         //순차적으로 targets를 돌면서 Raycast를 하나하나 꺼내는 흐름
>         foreach (RaycastHit2D target in targets)
>         {
>             Vector3 myPos = transform.position; //내 위치
>             Vector3 targetPos = target.transform.position; //레이케스트를 맞은 적의 위치
>             //거리를 구해주자
>             //Distance가 벡터2개의 거리를 알아서 구해준다
>             float curDiff = Vector3.Distance(myPos, targetPos);
>
>             // .. 현재 거리와 가져온 거리를 비교
>             //지금 하나하나 가져온 target과 지금 우리가 가지고있는 최소한의 거리
>             //가지고 온 거리가 더 작다면 diff에 그 거리를 넣어준다
>             if (curDiff < diff)
>             {
>                 diff = curDiff;
>                 result = target.transform;
>             }
>         }
>         return result;
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/adcbdeb3-47af-4a2a-adbd-e41f7d27fd49/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKZHRUO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAQK5BmeNCa86%2Bpl9sAslvRC5HrIMJhTuYTc8AH1jTMIAiEAoFtpFgfSrbdccVO6Tnw9MYldelM8v9TH8WMYybMM1ocq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHsxyyWs6tisQyc0yyrcA%2Bgnnr9ZYyZDAezVIWqqlMAXkWxgirkzaIoXEvAI%2FwHvOZ1%2Fs1QDi%2Bws577WA9oxWdmTFiyFw5RJlt6QVlHs1LkFoHTJvy3I9NJ26oEpSQaLMhA2kClH6NkGCdBkzAE2oGnKTIpQ8r2uTMjKUTPBvZMzXT9%2F6FO0xWhhFhE5ijkKt%2BNcn6vAOO5slL%2BqPv2c%2FQ3t6Xp%2B%2BEdkDVx3yTVqPt9vX6cqkjaqCDSS0DUB6Z3yorq9IlDHd4WmH1DRlo98SxDMJKdRgyTx8615l7dP3tSpXFRjsliHaF%2B7sF8v4%2FG8UKUPB5JL1Ztc%2FaVeHJULveDiZlXVa5b05aYfwZRW2X0h%2FuKoLKTdzUuQm9vzLmWG7YBMb7Ylix9T8I5MOP48Pby8bVb43vY7We1dSEiEdrtE1jWpbbg1wQfMoABCKQ7S2C5p5YOVl0T%2F3hliWZIIMt21%2BQYn6iTfrELrtAo2fKtjFsyrRRqwCsHImqekKO416Ufpvfih2E%2BkbTDx%2FIewRIpdBe9byBKD3dU8Apzjh2qRHHtURWUsjQpz1zVPp5Hg3l4Eu0CK8ZpNX9IXw%2BnTt%2FGa%2BShFeb6usF2GPFxChzosDtSSRp4bcdmFdP9hASXA8UPC4OGeivHQ9py1MJP1h8QGOqUBk%2BLa8bKt5Ve8gWjLvcXl69ukpLVl4je%2BJLpOCudmWkMNlYd2Bb8cekP4eWqzSXhPRQzPmPiq4StV5rp3bln0RQREi5S%2BCPxtsVZ82Q2msz9CoHnamopTpnz%2BxsYhiVqYoSo%2BIxHJFRHhI43QOvu9%2Bsy63UfBX3WyOxl2Abcn4hshqNja4MvGF73eyaM88EBqX8VTcT27Az6kjOLo%2BkLCsvf0eeZd&X-Amz-Signature=ad676c9f1d027562dfec18c7e452554e477d02a44c5327af07be2e049c59f493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **프리팹을 다른 스프라이트로 변경했을때 콜라이더 크기가 다를경우 콜라이더 컴포넌트를 Reset시켜주면 해결됩니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/06203f7a-7860-4211-8a2e-24b67efd5cb9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y7PLNX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCVLCHD1zg15gfxnomwPySI3%2FmeRp2gd7AP7VIwxyvpogIhAJkqguOUMmUKZDI4uH2NT93ao9yumoZJcXGvdorcZ2%2FIKv8DCCoQABoMNjM3NDIzMTgzODA1IgzPNBGbFRym%2B6Mac0Mq3APUMs7k5RaHgrxl%2Bs8skiULkF5xEhc1WFL6IAncdtoYub%2FxfkE3c%2BgyX1OW%2BXyX3XU5gcLq8zan3cUGVr4jNZ%2FbrEzD5lcMDBwuh7pu947fIdBXV8%2B%2BpPrMZWoI9LrPNvVdsnTRDdhTemh8hVc5boZtWaXGMALGLJ5WCCdKq1fX%2Bn6SOXcNPsMNiM9iGcJysmsiBbafzFwYhh5wHz4qC2NYz2Tmpadw34wNM0SbzT4I1fDgOUe5rjyfbEPW%2F7Ih1seFKpdEIVuT6QEJbDvhaTf4WkJ13rK4mZ3Oi8mkne1mAzIXVtihOxFAujSckQrKV8P2JQ8ujPjjgn9Zos6vbj8TnqhXUgkL%2FpuGq4Gb31r%2BSXCjeZHtSV1GD9IeL03%2FKKlEZNdxHBhrzVlqpJKD%2BxL3Nsug5LbAyHnJExfQaryfdcsGGerFIe%2FAlwESSnH0z0R0DxZtucljKHHRZlhv20mAOxzSYlPpS8qok18YHV8dRj3On2qbcGubOPxZ%2Br61zXIobVoHRorM1SyS4uKB0ukVE9OQeRgFV%2BeTotr3fEXvQ%2BY1J8H%2FhkCqkjwqTvp69%2BHn3QlN%2B%2F9EsiBM4m4XZbBVmYSHouXD6ssi8r8rclAcejIb%2FbgyeOhUhJj%2FujCO9ofEBjqkAcjF4%2BlOeCsQ7ugTwW7yJ74eNajcPvY3f5I9RxVciMRdf%2FcMSXTTGgAaWa%2Bz2Y0aCZv353jpMbZSMvRLt94ieHBachZc3DIQaOF92KjkJngcjmTnGQ2urh7n8ou%2BWa0CWyXG776wkInZE2jbrrRgZ%2FOoqtcF%2BtKJ28VN33J2Z24qH5BvZpEsUPOtyhBo6rvkMJBauX%2Fnwf0ofu7xDztOB5jyzrZ7&X-Amz-Signature=7302a5100bfbac62075aff0be706227f33e416cbd7466264bd1f34c018c21e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **추가한 원거리공격을 poolmanager 에 등록해봅시다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/aa86ac56-b301-43eb-935a-878f48bee643/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267ZD7CM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAncT6aar%2FZE8ErSh%2B92boM%2B6JbiDw1cuJWhyFlbbNK0AiEAqJ%2BakmnQYzMo%2BERTJknI8s97D9qoGBbkstJYJoXqnd4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJn8qGs3cRFHqA01WCrcA2BxLlSTrQ67aGgY%2B6oUD2drkWPdqcp5mJJp9eyUAlHS9jExtpbSkSXjelpTc3Lh0tFhN9kMjn9gpwKwP6Vh5dL%2BiF7dBA7294FtoUsBvPk91goYWkh%2B5rVRXwXGPy6Cy%2BsoJHsE3pc%2B1PlFh3xtqELkaI6mEyh5ZFWHDfdpFaSIEOVtppNbpAt0J3ikcuphJzB%2B9gyzObGjwvzxe9rtCPjqyHMy2V%2FLx7oDdBbnJrZpDoGkRBWYHPRhJ02ltOCJkNhTCZxMmiB7uuUplfutAjHzrI5I02W4s09MpeCW6ZOgywXceCKlyNkBMXJkEW60nHaTo73EZCExoJ4PRYyv8X4pYvucH0mz%2BG2Rfn3gGCdq7ltBr3JFxvrWbm9M%2FYSUCOPk0jBMGRVClByoRGQ3KhJ1VtL%2Fg7J6WOvTxvvL%2Ble9wlS0ud9vsgaZDT5Eo8m7zq78NTzZ83O79TGdkdhJmbDDuqneXdm2r%2BpnQjWna53W6sZ9lHEhVdJiCQhgkUJxyvCRgt83f0uDlPf%2BkGA48zV1p0GWqNwyaXa%2BVfQtCycUhNkYHhLDPkkvJ%2B624fZ5EgJM5l94KnCJJXJaY7prpdDnFpVw6kQTs4A%2Fyavb8KuXOuaDAJ0UnlvumXLjMMX2h8QGOqUByiLWABrWV2BZ1e4M9XVa0Z2kL9B0QeJFq3rpBLpKy03wNcgjTCAivXdSPBQNdoPULs90x%2BZrIaxROM0VcL9x8L6juE674hPSX4oqel2Ujv8q6ISvobdNyHj07GwbF5AlSjzoyTfX4KetdFFmmy%2FyXZc69uI4p0CBp%2FCNqbKHqpfzvgPTRda4hD5JVl%2Fu0gNSTvGUxtoWia8lc4na%2FPpYSsdxq7KE&X-Amz-Signature=e448bdcd15408ee751a8c178668d3e07ed874f611b9b7cdb3d38221fbba83166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/43cb5ab9-a680-4fef-91ad-c6efd30bb484/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267ZD7CM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAncT6aar%2FZE8ErSh%2B92boM%2B6JbiDw1cuJWhyFlbbNK0AiEAqJ%2BakmnQYzMo%2BERTJknI8s97D9qoGBbkstJYJoXqnd4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJn8qGs3cRFHqA01WCrcA2BxLlSTrQ67aGgY%2B6oUD2drkWPdqcp5mJJp9eyUAlHS9jExtpbSkSXjelpTc3Lh0tFhN9kMjn9gpwKwP6Vh5dL%2BiF7dBA7294FtoUsBvPk91goYWkh%2B5rVRXwXGPy6Cy%2BsoJHsE3pc%2B1PlFh3xtqELkaI6mEyh5ZFWHDfdpFaSIEOVtppNbpAt0J3ikcuphJzB%2B9gyzObGjwvzxe9rtCPjqyHMy2V%2FLx7oDdBbnJrZpDoGkRBWYHPRhJ02ltOCJkNhTCZxMmiB7uuUplfutAjHzrI5I02W4s09MpeCW6ZOgywXceCKlyNkBMXJkEW60nHaTo73EZCExoJ4PRYyv8X4pYvucH0mz%2BG2Rfn3gGCdq7ltBr3JFxvrWbm9M%2FYSUCOPk0jBMGRVClByoRGQ3KhJ1VtL%2Fg7J6WOvTxvvL%2Ble9wlS0ud9vsgaZDT5Eo8m7zq78NTzZ83O79TGdkdhJmbDDuqneXdm2r%2BpnQjWna53W6sZ9lHEhVdJiCQhgkUJxyvCRgt83f0uDlPf%2BkGA48zV1p0GWqNwyaXa%2BVfQtCycUhNkYHhLDPkkvJ%2B624fZ5EgJM5l94KnCJJXJaY7prpdDnFpVw6kQTs4A%2Fyavb8KuXOuaDAJ0UnlvumXLjMMX2h8QGOqUByiLWABrWV2BZ1e4M9XVa0Z2kL9B0QeJFq3rpBLpKy03wNcgjTCAivXdSPBQNdoPULs90x%2BZrIaxROM0VcL9x8L6juE674hPSX4oqel2Ujv8q6ISvobdNyHj07GwbF5AlSjzoyTfX4KetdFFmmy%2FyXZc69uI4p0CBp%2FCNqbKHqpfzvgPTRda4hD5JVl%2Fu0gNSTvGUxtoWia8lc4na%2FPpYSsdxq7KE&X-Amz-Signature=ef9c7ca0577ec453b09a31d507f58dfc345687c957dcdd142820d033cae7a293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 그 후에 Weapons.cs 를 수정해줍시다
>
>
> 하지만 그 전에!
>
> Scanner.cs 내부에 있는 레이케스팅을활용해 타게팅하는 함수를 이용할것이기 때문에 
>
> Player.cs 에서 Scanner 를 컴포넌트 형식으로 불러와서 전역변수로 초기화해줍시다
>
>
> ```c#
> //Player.cs
>
> ...
> **public Scanner scanner;**
> ...
> void Awake()
> {
>     ...
>     **scanner = GetComponent<Scanner>();**
> }
> ```
>
>
> 또한 Weapon.cs 에서 Player.cs를 불러와야합니다
>
> Player.cs는 Weapon.cs의 부모이기 떄문에 불러오는 방법은 간단합니다
>
> ```c#
> //Weapon.cs
> **
> Player player; //부모인 Player를 변수화**
>
> void Awake()
> {
>     //부모 컴포넌트를 가져오는 방법
>     **player = GetComponentInParent<Player>();**
> }
>
> ...
>
> //그리고 
>
> ...
>
> //총알을 발사하는 로직이며 그냥 풀매니저에서 총알을 가져올것이다
> void Fire()
> {
>     **//스캐너를 불러와 플레이어 가까이 있는 적을 타게팅한다
>     //플레이어스크립트 내부 스캐너 내부에 가장가까운 타겟이 없다면(false) 그냥 return
>     if (!player.scanner.nearestTarget)**
>         return;
>
>     //poolManger에서 프리팹아이디를 가져와서 bullet변수에 담는다
>     Transform bullet = GameManager.instance.pool.Get(prefabId).transform;
>     bullet.position = transform.position; //bullet의 시작 위치는 현재 플레이어의 시작위치
> }
> ```
>
> ### Weapon.cs의 Init 과 Update도 변경해줘야죠
>
> ```c#
> //Weapon.cs
>
> void Update()
>     {
>         switch (id)
>         {
>             case 0:
>                 transform.Rotate(Vector3.back * speed * Time.deltaTime);
>                 break;
>             **default:
>                 timer += Time.deltaTime;
>
>                 //경과한 시간이 공격속도보다 크다면
>                 //timer를 0초로 바꾸고 총알을 발사한다
>                 if (timer > speed)
>                 {
>                     timer = 0f;
>                     Fire();
>                 }
>                 break;**
>         }
>
>         if (Input.GetButtonDown("Jump"))
>             levelUp(20,5);
>     }
>
> //초기화방식이 ID에 따라 다르다
> public void Init()
> {
>     //id가 n번일때
>     switch (id)
>     {
>         case 0:
>         speed = -200; //근접무기 공전속도
>         Batch();
>
>             break;
>         default:
>             **speed = 0.3f; //원거리무기 발사속도**
>             break;
>     }
> }
> ```
>
>
> ## 총알은 발사하며 나아가야하기때문에 따로 Rigidbody를 프리팹에 추가해줍니다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e8f6a34d-7bb1-4419-9be4-ca15056b0eaa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267ZD7CM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAncT6aar%2FZE8ErSh%2B92boM%2B6JbiDw1cuJWhyFlbbNK0AiEAqJ%2BakmnQYzMo%2BERTJknI8s97D9qoGBbkstJYJoXqnd4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJn8qGs3cRFHqA01WCrcA2BxLlSTrQ67aGgY%2B6oUD2drkWPdqcp5mJJp9eyUAlHS9jExtpbSkSXjelpTc3Lh0tFhN9kMjn9gpwKwP6Vh5dL%2BiF7dBA7294FtoUsBvPk91goYWkh%2B5rVRXwXGPy6Cy%2BsoJHsE3pc%2B1PlFh3xtqELkaI6mEyh5ZFWHDfdpFaSIEOVtppNbpAt0J3ikcuphJzB%2B9gyzObGjwvzxe9rtCPjqyHMy2V%2FLx7oDdBbnJrZpDoGkRBWYHPRhJ02ltOCJkNhTCZxMmiB7uuUplfutAjHzrI5I02W4s09MpeCW6ZOgywXceCKlyNkBMXJkEW60nHaTo73EZCExoJ4PRYyv8X4pYvucH0mz%2BG2Rfn3gGCdq7ltBr3JFxvrWbm9M%2FYSUCOPk0jBMGRVClByoRGQ3KhJ1VtL%2Fg7J6WOvTxvvL%2Ble9wlS0ud9vsgaZDT5Eo8m7zq78NTzZ83O79TGdkdhJmbDDuqneXdm2r%2BpnQjWna53W6sZ9lHEhVdJiCQhgkUJxyvCRgt83f0uDlPf%2BkGA48zV1p0GWqNwyaXa%2BVfQtCycUhNkYHhLDPkkvJ%2B624fZ5EgJM5l94KnCJJXJaY7prpdDnFpVw6kQTs4A%2Fyavb8KuXOuaDAJ0UnlvumXLjMMX2h8QGOqUByiLWABrWV2BZ1e4M9XVa0Z2kL9B0QeJFq3rpBLpKy03wNcgjTCAivXdSPBQNdoPULs90x%2BZrIaxROM0VcL9x8L6juE674hPSX4oqel2Ujv8q6ISvobdNyHj07GwbF5AlSjzoyTfX4KetdFFmmy%2FyXZc69uI4p0CBp%2FCNqbKHqpfzvgPTRda4hD5JVl%2Fu0gNSTvGUxtoWia8lc4na%2FPpYSsdxq7KE&X-Amz-Signature=b7175afc8b7694202371c502328e4669667d465dcbb6e7fcc33693cfaaa5c0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> Bullet 코드도 수정해줘야해요
>
> ```c#
> //Bullet.cs
>
> public class Bullet : MonoBehaviour
> {
>     public float damage;
>     public int per;
>
>     **Rigidbody2D rigid;**
>
>     void Awake()
>     {
>         rigid = GetComponent<Rigidbody2D>();
>     }
>
>     //Initialize(초기화) 함수
>     //Init(데미지,관통,방향)
>     public void Init(float damage, int per, Vector3 dir)
>     {
>         //this는 곧 Bullet.cs
>         //매개변수의 damage와 this.damage 는 엄연히 다른 변수
>         this.damage = damage;
>         this.per = per;
>
>        ** //근접무기는 관통이 -1 (무한)
>         //-1 보다 큰 관통을 가진 Bullet prefab은 관통무기라는것이기 때문에 방향값을 가지게된다
>         if (per > -1)
>         {
>             //rigid의 방향값은 dir값이다
>             //그러면 RigidBody2D의 특성에 의해 방향에맞게 rigid가 이동하겠지
>             rigid.velocity = dir;**
>         }
>     }
>
>    ** void OnTriggerEnter2D(Collider2D collision) 
>     {
>         //맞닿은 콜라이더가 에너미가 아니거나 관통수치가 -1(근접무기) 일경우 아래 코드는 실행할 이유가 없다
>         if (!collision.CompareTag("Enemy") || per == -1)
>             return;
>
>         //관통력은 줄어든다
>         per--;
>
>         if (per == -1)
>         {
>             //PoolManager에서 추후에 재활용할것이기 때문에 리지드바디를 미리 초기화해주고
>             //게임 오브젝트도 비활성화 시켜준다
>             rigid.velocity = Vector2.zero;
>             gameObject.SetActive(false);
>         }**
>     }
> }
> ```
>
>
> > 🔥 **`FromToRotation `: 지정된 축을 중심으로 목표를 향해 회전하는 함수
>
> FromToRotation (축,방향값)**
>
>


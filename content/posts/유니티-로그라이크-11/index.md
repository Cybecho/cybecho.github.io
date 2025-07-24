---
title: "유니티 로그라이크 11"
date: 2023-03-08T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "원거리 공격 구현을 위한 CircleCastAll 함수 사용법, 가장 가까운 적을 찾는 방법, 콜라이더 크기 리셋 방법, 스크립트 컴포넌트화 및 총알 발사 로직을 포함한 코드 예시가 제공됩니다. 또한, PoolManager에 원거리 공격을 등록하는 방법과 FromToRotation 함수의 사용법도 설명됩니다."
notion_id: "696f1831-c3f7-4ca9-9e95-df5a3fe977e8"
notion_url: "https://www.notion.so/11-696f1831c3f74ca99e95df5a3fe977e8"
---

# 유니티 로그라이크 11

> **Summary**
> 원거리 공격 구현을 위한 CircleCastAll 함수 사용법, 가장 가까운 적을 찾는 방법, 콜라이더 크기 리셋 방법, 스크립트 컴포넌트화 및 총알 발사 로직을 포함한 코드 예시가 제공됩니다. 또한, PoolManager에 원거리 공격을 등록하는 방법과 FromToRotation 함수의 사용법도 설명됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95d26fb7-196c-4de6-bee2-aaf760a569a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65RPSM4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAtha7aVkztn7V1Azdv%2Ftl2iSPp%2F6rPFmzBKQun9Y6FWAiEA4QFR49zT8GdYAFBJFiIiLH4M4QDEX%2Bs6ugN4VHP%2Bykoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGuOiS%2FxFHaQeiwmYSrcAw%2BqsHk5hdA%2FazdfV6TbKbnTTJOVpDNZ5YfK%2BEZ17O%2FmOwPU6pdEb0eYr7fC1ou5%2Fd0Tha2Zoo9wZsEKK87ADslOQv4yr9uvE6eqrEcIqFTIVJG4nG28YHOL%2B%2Bh0flyNy%2B6tCEWGlpxJ%2BX8k61U8ffAq%2FaC2PN2%2Bhej06eaxHQnmj93rUoU7wQ6Y%2FY6rgbOQNDy1lc9AhrdzrYMXNkoTcbdnyQQf%2Fkv9e0erMwKDBIsk6CPxeTEJRavU%2FLpt2YqLibTvAXGVxZamwC9HNV70NYmPo7iyTNasX%2FXOFcq0ICeJ6PMSVvwifEIg9dvSUyNzZHVrgfMHXPFHkVXyTJRTS0w4yOKsXDuxUm5i%2FXVOzmuZgr%2BBo94G1Stv9QZypCD%2FRFEdiki83XaMrEfYFhx6T%2BEDieUduwnaw%2B8KRn0MyiOqACQ8OSh%2F3zkKAbmLbfU%2Fll1N6A%2BH8wbRlY5wsAN9lRw0yWA0lgMxeXSwgRC%2Fbiw7HRtwCoPfxmqgApgGsmh1b5SXfAbi5AV3Ymet7eC29RzeWH7XJM0QXyFv5dztbvuQSByyFUhROjkfaLtLMCw1%2FCSAiJmCvN5LUfWufddJLlKDpVY3QJxhaDv4%2Bt6zybQLO63YuFu8ZM8s1EOjMIK%2FiMQGOqUBZqGycWSnF8keYspguCeITdibTHysIhrmw373ctr96lRyFbCErmHqGkU2uzwmGMQBOYJnhxP6WjoYl49MSVtvajdqCJKKpQXatRxJOK8xpHtdC3Hf%2BB717rL82HR9f2bEbBQ46MRROSMHwFWqXXIF1%2Bv8psJ2VRTZlGTv0VYuLLo53npcCqxc7GUj2tXGgKfqBsPXNuB3kysa2CGPFfroqNSuPLrN&X-Amz-Signature=dbcdcadb415b35d7678f16352ebfaabccbbca63fd905470f71b5a8b0770343f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/adcbdeb3-47af-4a2a-adbd-e41f7d27fd49/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TDTBTJ2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCjRTPvp2f85XUjCQu%2FamlL9rRpyElCm%2FVjmtOSK1vu%2FAIhAKoNEhE2Lz7ntr5qwNf5Ormb5eP4iQ2RmopPCvq8fimxKv8DCC0QABoMNjM3NDIzMTgzODA1IgxEczS0BNjXjlO7Rdgq3AM1eQg3tqaNsIs8IeQ8skP9ZHSEwFgExgm4CXH%2BVXuKXFHMOmnL%2FqIYtaTMhxb6%2B%2BqL10y4HBdMB7uPr%2BMz4JZJ9%2BFwPYxJQT60X3%2B%2BIeIua5i%2Fm5sdYJ%2Fk3qcGfZUWGrhEIbkVrhDVrhyJjR6rbnNlQAdqGT9znE5DTHcNJgDMTB4FowAnlOfkErwxmWC%2FEOLHT3jHf3gnAByn%2FIMxfhH%2FS%2F%2Fjnge%2BxRNHsDtHlsIg1tpPDT4hyVegj5IyGs8aSf4Y4gvTTBuNVTgNznZvvV72EGjiy2ThXBqkqt97fGtRVqdZfGVuPyv5TeT3o%2FAQ%2BzMzli%2FiTSSFQZ1eDxJWzzaA14Szx69E3M6uipmgpSYBk5L%2F%2F1G4lcMGj1rKGhOFGnU%2BKaUIsf8ghpsfwXjEiPb0auDVKJxvgN3We%2BqEQHBiJS8vJ2TjP1Ptno8NL5x0cWfVPwPOh74Ha5yqMDPcdjHDoIC6gFu2zXJAHjtV0LhKXBaGm8VW5riFN0UqWT4ii6XzZq8AqExRq%2BjkG%2BM7sz1RWZabcka3HPI%2Bml%2BMrWR0Y8B2VoYwyADairiWOC6JB4HsdmNlf6tRkSJl071HiS5N7wVKhDebaicKp7qp2nXYktwuPz12GtJQh0C%2FODC%2Bv4jEBjqkATM1OVHrosYCZOFTxecClCNi5pBqXL3Ol2z9oe4ouNn23vE0uMqhMYDt93etxYWOZE4%2BylFY%2BqEgAW1JYVqgG%2BMHexAr09WA%2Fw5uL2mIMBuv%2Bto9ep%2BjaUV8ZBB4%2FdkkpdNSr1QWzGPnwqKYevcNB6vhDEFGX3J1a3oc7B6MDffEpOQvKMAE9UW%2B0DJYTwG%2FHYTuJnVerbpmQViyDiriWcbqQMzL&X-Amz-Signature=66f68ca494470919710fcc65b52bde1430d60c7987b46dbc87af9f3a7e819a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **프리팹을 다른 스프라이트로 변경했을때 콜라이더 크기가 다를경우 콜라이더 컴포넌트를 Reset시켜주면 해결됩니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/06203f7a-7860-4211-8a2e-24b67efd5cb9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOTVCOYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDkswsYtwmskAyHmrErmcBK7yImJY%2BFEPpH%2Bkx95%2FC8eAiARCUFTJFo0a5RbwmbifFVIB%2BcF0PQXbc5DgRLebvMvFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMNWPAanxaPHt4J67HKtwDlj%2FN%2FWTE8gjILHjHdktQbYYQyYs3v2JZcP%2FWk1Z%2Bcf8bodXHWbU0P0q4kci00Ekpufo3Li1XOHKTt6HcaWT1Yw%2FSvOGKuQmMmxjhXZdCfEQXBUbdcaKvXO2dV%2FN75OntcnGMdFZOEdrFrlZRPx%2F3XOX%2FzKn5%2FmjBbd2qhaDRJ%2BeNs6IC0NwSnKf7a3jqNSgSbM7vO%2F9kL5aXEiHE2kKvZqOOnM3bsxFYlPFoDxMEebr0MysB0wCTzYx6%2B%2BCsO4oxUwnymX2l6iprB6ZAo3PLV0IwZX1gOUpHcN4wrHS3BqBw9sX5oo87w%2BaObtqxZNBnHTJraRjlPBTQoZ44RkWv3NguW6XED%2FglpWsGFjnKBdlbU0oeH7Y6mabg2yOWcshMcLXF2R%2BYmXk1Y5kpGsRZsmj2zkRtQ08XsAAnvi%2F7XY12Udx4BoO9BfsSwEbmEeCqn71Z39N0Oxx5MAv1DNa85h4441YZPpU3I4Nz85J41HO0oaw6QX1KNIInjw3TYo0bJa3cSZqmn%2BQvsYxNUfxYa6sJI8DGMPIp7mDmyLWhPCg%2FpxDY5xzWbza%2BYjpOEPTT5HO%2BjmAHB5TE3jfoT0uOC1ePFGkY8V9Ws4kizjNcIecSSATeorYP3H7HECowg7%2BIxAY6pgGGJ3oZPKQvxoVHeUZqYbDm65QN6UkxJIGNEGJOzxr7bpdYQcZLMV1rGg6Zy67fu4G%2FnbxLqI%2FyKyy839ArSIvc0rO%2FTGd%2Btg%2BIB85cInLW325y%2FfApa%2FdgDJRprcR95PHCEpSrfeSRcJHWobCQLpghaYJA33w6D865Q%2B6rvhw5DVZRkWoU9kgDoiKL3dYwzYS0l0fvQvFqUOp8ZHMJdQ4kPvjbLLzS&X-Amz-Signature=ec083ec3fa48ca24fb9c03eda672982b5e06595faca58fc482f5909a74213120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **추가한 원거리공격을 poolmanager 에 등록해봅시다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/aa86ac56-b301-43eb-935a-878f48bee643/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXB7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC7ZjzdlOTD7wH0JzzT9d3YDvb3s0EDqVS%2B1UzAZ0I7jQIgLdX3rvzuWTtqlbW0E310q%2FMjMnuahK6dl%2FfffpK3kykq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNHl9YNTdLCN0LsL0SrcA%2F6i%2Fql%2BvufMuYVL5YGSQmqx4Z88CMpxB3%2BRL%2FSmngNdRuJBTt6%2FZK9HQoMJ2Xakdr6RU%2FCiifBu%2F72%2FOq22NU6F8ZtdSKPW9t05cnIa3I6t5bstct8d2SMidJx57vSPXRRgzs03QjE0VhFqVGWEm0HoSJ3WQZ3QLERrXxcERQVQGxYroVSe3Z%2FLaYlGaEkeLcVrEjgYJwAZggk9LWosP%2BQu35ZraLTDH%2FGsSB0hYsHqvP7sthyGXSz5HnU5NaVCxgrNSVQF1iLIGX7huNlv%2FpizJxkm6QcxWKRGmPHx9%2FwdIzMFYiMmqTsXKGJdDh6IgVygWu7bK6%2BtjHyNQgv9aFKayBklggBSm%2FYlguFAn8z%2FqS%2B1XolNvt74uZjMs%2Bob9sIGmZvhNvsVZ4TdFfdRjUPwyyXZk%2B0BjKaJhHLo1u8%2FiZPiWR7DtXROCCeftjvvupYeVhLKvSxIwwUxxZBAuRusuJ3RgHJI1nGtnILN4sy9msTLNdX%2Bx4mjeTVv%2BK4d3Bc8Z7TySm74r5qbnIB7MdlJgI62j89MJbMCXynovmiIjDj1jPSkHhTTQjVi%2FWvXGge0PEXpVpwQsrRlUfZrzlevXY5HwkP277Jb3qEfE%2Fhk0I4aC8HFjd6izB6fMN2%2FiMQGOqUBnSyh0cxzJwI%2BY31UQ67LVt2BViNuJ%2B2z0metsNwsDZQFVTeLXtCSVH4%2FUQBXZXHBXLIiYvfweI7F6fAT3DF2kz9lzKQ0qk4KObI7MAgubwlD3u3X%2Bhhq3%2BMydmqCR8obVCYTEGOwXmF1%2F1BPt7Cx%2FrVq%2FT%2BKQSZu7dHm9I%2BFdE9ummmSSYRf3PdgEnT0o3j079As%2ForaIwkOtEnfBoCjdZv4XCKL&X-Amz-Signature=9180f7a840d42c0d8739722d40467e8625e92fd585e3437201216f6e5ab5d40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/43cb5ab9-a680-4fef-91ad-c6efd30bb484/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXB7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC7ZjzdlOTD7wH0JzzT9d3YDvb3s0EDqVS%2B1UzAZ0I7jQIgLdX3rvzuWTtqlbW0E310q%2FMjMnuahK6dl%2FfffpK3kykq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNHl9YNTdLCN0LsL0SrcA%2F6i%2Fql%2BvufMuYVL5YGSQmqx4Z88CMpxB3%2BRL%2FSmngNdRuJBTt6%2FZK9HQoMJ2Xakdr6RU%2FCiifBu%2F72%2FOq22NU6F8ZtdSKPW9t05cnIa3I6t5bstct8d2SMidJx57vSPXRRgzs03QjE0VhFqVGWEm0HoSJ3WQZ3QLERrXxcERQVQGxYroVSe3Z%2FLaYlGaEkeLcVrEjgYJwAZggk9LWosP%2BQu35ZraLTDH%2FGsSB0hYsHqvP7sthyGXSz5HnU5NaVCxgrNSVQF1iLIGX7huNlv%2FpizJxkm6QcxWKRGmPHx9%2FwdIzMFYiMmqTsXKGJdDh6IgVygWu7bK6%2BtjHyNQgv9aFKayBklggBSm%2FYlguFAn8z%2FqS%2B1XolNvt74uZjMs%2Bob9sIGmZvhNvsVZ4TdFfdRjUPwyyXZk%2B0BjKaJhHLo1u8%2FiZPiWR7DtXROCCeftjvvupYeVhLKvSxIwwUxxZBAuRusuJ3RgHJI1nGtnILN4sy9msTLNdX%2Bx4mjeTVv%2BK4d3Bc8Z7TySm74r5qbnIB7MdlJgI62j89MJbMCXynovmiIjDj1jPSkHhTTQjVi%2FWvXGge0PEXpVpwQsrRlUfZrzlevXY5HwkP277Jb3qEfE%2Fhk0I4aC8HFjd6izB6fMN2%2FiMQGOqUBnSyh0cxzJwI%2BY31UQ67LVt2BViNuJ%2B2z0metsNwsDZQFVTeLXtCSVH4%2FUQBXZXHBXLIiYvfweI7F6fAT3DF2kz9lzKQ0qk4KObI7MAgubwlD3u3X%2Bhhq3%2BMydmqCR8obVCYTEGOwXmF1%2F1BPt7Cx%2FrVq%2FT%2BKQSZu7dHm9I%2BFdE9ummmSSYRf3PdgEnT0o3j079As%2ForaIwkOtEnfBoCjdZv4XCKL&X-Amz-Signature=06f30e8bfcd6585c23b0e8c0961d8740bcfc3a517f50a527e11fcfa9edafd295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e8f6a34d-7bb1-4419-9be4-ca15056b0eaa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXB7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC7ZjzdlOTD7wH0JzzT9d3YDvb3s0EDqVS%2B1UzAZ0I7jQIgLdX3rvzuWTtqlbW0E310q%2FMjMnuahK6dl%2FfffpK3kykq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNHl9YNTdLCN0LsL0SrcA%2F6i%2Fql%2BvufMuYVL5YGSQmqx4Z88CMpxB3%2BRL%2FSmngNdRuJBTt6%2FZK9HQoMJ2Xakdr6RU%2FCiifBu%2F72%2FOq22NU6F8ZtdSKPW9t05cnIa3I6t5bstct8d2SMidJx57vSPXRRgzs03QjE0VhFqVGWEm0HoSJ3WQZ3QLERrXxcERQVQGxYroVSe3Z%2FLaYlGaEkeLcVrEjgYJwAZggk9LWosP%2BQu35ZraLTDH%2FGsSB0hYsHqvP7sthyGXSz5HnU5NaVCxgrNSVQF1iLIGX7huNlv%2FpizJxkm6QcxWKRGmPHx9%2FwdIzMFYiMmqTsXKGJdDh6IgVygWu7bK6%2BtjHyNQgv9aFKayBklggBSm%2FYlguFAn8z%2FqS%2B1XolNvt74uZjMs%2Bob9sIGmZvhNvsVZ4TdFfdRjUPwyyXZk%2B0BjKaJhHLo1u8%2FiZPiWR7DtXROCCeftjvvupYeVhLKvSxIwwUxxZBAuRusuJ3RgHJI1nGtnILN4sy9msTLNdX%2Bx4mjeTVv%2BK4d3Bc8Z7TySm74r5qbnIB7MdlJgI62j89MJbMCXynovmiIjDj1jPSkHhTTQjVi%2FWvXGge0PEXpVpwQsrRlUfZrzlevXY5HwkP277Jb3qEfE%2Fhk0I4aC8HFjd6izB6fMN2%2FiMQGOqUBnSyh0cxzJwI%2BY31UQ67LVt2BViNuJ%2B2z0metsNwsDZQFVTeLXtCSVH4%2FUQBXZXHBXLIiYvfweI7F6fAT3DF2kz9lzKQ0qk4KObI7MAgubwlD3u3X%2Bhhq3%2BMydmqCR8obVCYTEGOwXmF1%2F1BPt7Cx%2FrVq%2FT%2BKQSZu7dHm9I%2BFdE9ummmSSYRf3PdgEnT0o3j079As%2ForaIwkOtEnfBoCjdZv4XCKL&X-Amz-Signature=eb5439ac7fc759c63eb3602eff235c7c8484697cbfd8bad78b6345907d0fd03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


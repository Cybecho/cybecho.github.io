---
title: "유니티 3D게임 쿼드뷰 05"
date: 2023-02-09T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "UI 크기 조정, 무기 잔상 효과, 코루틴 함수와 IEnumerator 사용법, 마우스 방향 공격 및 Raycast 활용법에 대한 설명이 포함되어 있으며, 무기 설정, 공격 및 재장전 코드와 관련된 다양한 예시가 제공된다."
notion_id: "297ca482-365a-43d6-8672-d9a0288c6047"
notion_url: "https://www.notion.so/3D-05-297ca482365a43d68672d9a0288c6047"
---

# 유니티 3D게임 쿼드뷰 05

> **Summary**
> UI 크기 조정, 무기 잔상 효과, 코루틴 함수와 IEnumerator 사용법, 마우스 방향 공격 및 Raycast 활용법에 대한 설명이 포함되어 있으며, 무기 설정, 공격 및 재장전 코드와 관련된 다양한 예시가 제공된다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=afPF_fOOG68)

🎥 [동영상 보기](https://www.youtube.com/watch?v=Zfoyagdz1y0&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=6)

> 🔥 **무기기본설정 코드**
> ```c#
> //Weapon.cs
> //무기정보 변수설정
>     public enum Type { Melee, Range }; //근거리/원거리 열거형으로 무기타입
>     public Type type; //실제 무기 타입이 저장될 변수 (enum에서 설정한 타입이 type에 저장)
>     public int damage;
>     public float rate; //공속
>     public BoxCollider meleeArea; //공격범위를 콜라이더로 설정
>     public TrailRenderer trailEffect; //무기 휘두르는 효과
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e597a13f-6328-48d8-8227-e202cf822be4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5BOZOH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBkgHd2glqcgJUcdy7XMIcDnn%2B81xn7QSiXcM12sVV3zAiEA%2BjAGfmcLNhApC793qZrWqRxVbEgBazOCFCfGGRoSoTEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIHYbR%2FgJAHo1sKUryrcA9mbRcoIMaW8pkqXHfN4msMEVSzQix7iNCza8%2F0COtIVL%2BqdUTukBORB2GI2sdhUqnSRBy7Y0HhZjKnrHs8e8gLKNt1MvnUe01rdyyY5COd4xEzac4TP5jB4KcIgz08hNT0Mv%2FNh0pzBl4F0q6Mes2Xz05d7tmSi%2FNrvZCvylk0CtEdRpUiyxmSMGpWc82bgOX4GPcPudOg4okJ8oIH5s%2FGE%2FW%2Ff6ZXZ7qE1KolHXra3iTFd%2BT68AZL4Dzu58wZIojyVo5L3moC5RqT6uggz1g2fEL5UwMmMA4Xe%2FxCX%2BC3ecz9Hxx86xQDznYgLZ7XXB04gq4x1926sDWtMNVPtfohSMP9lsmHZ9QLalO3wxYBZSF4DslFj2eqPemHXfVj3kxQibrUAe%2BonHLvVAYeaaaOJLlI5dbyxhepCvsY%2FjlgDxwSgrGxWC9lA%2B2Tm4J5cRRjI%2BBoeS3dnm9%2BitjCNsgPO4eRFWKAytGznPhuPhQtFDMue4Up6IoalZFHb05%2FB7rXAGTzfzcyxkBxmCXkGnps0EmotrrBSjfjzyOasnCz0Ajct8xR8Q8tjqGN98dToLvf83Iv7VJylQKLw1aLVVG5%2BiE26BKVJfo8VcmLbhGHIHz3I%2BCdJj1gHxop%2FMIm%2FiMQGOqUBqs580BYjjZVi3TLSIjrdHgokE8iImKV0oJxGrxiyZZ7eo44CoSDT1dhpf3G%2FOXajmdK%2FVpxl4udybwrjP4P8xXmBLMHJa8tBsQBHJi0RT509pIOZsn863s78khbJxsa%2BwxAGJnu0Yx0x3KUaVk40kwSlb1z5XzhlxsTcXQzwJ2MqKj8LoexLqUS7o8eq3AICMV9iIY0AtPo8lqu4iI6XwxEW0PBu&X-Amz-Signature=25bad81f8bca2b1f8c8876336d63d382ad2e76262df1c923a2755bea1a944893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2b35ba06-c4a4-48c3-a1b8-117892df2098/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5BOZOH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBkgHd2glqcgJUcdy7XMIcDnn%2B81xn7QSiXcM12sVV3zAiEA%2BjAGfmcLNhApC793qZrWqRxVbEgBazOCFCfGGRoSoTEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIHYbR%2FgJAHo1sKUryrcA9mbRcoIMaW8pkqXHfN4msMEVSzQix7iNCza8%2F0COtIVL%2BqdUTukBORB2GI2sdhUqnSRBy7Y0HhZjKnrHs8e8gLKNt1MvnUe01rdyyY5COd4xEzac4TP5jB4KcIgz08hNT0Mv%2FNh0pzBl4F0q6Mes2Xz05d7tmSi%2FNrvZCvylk0CtEdRpUiyxmSMGpWc82bgOX4GPcPudOg4okJ8oIH5s%2FGE%2FW%2Ff6ZXZ7qE1KolHXra3iTFd%2BT68AZL4Dzu58wZIojyVo5L3moC5RqT6uggz1g2fEL5UwMmMA4Xe%2FxCX%2BC3ecz9Hxx86xQDznYgLZ7XXB04gq4x1926sDWtMNVPtfohSMP9lsmHZ9QLalO3wxYBZSF4DslFj2eqPemHXfVj3kxQibrUAe%2BonHLvVAYeaaaOJLlI5dbyxhepCvsY%2FjlgDxwSgrGxWC9lA%2B2Tm4J5cRRjI%2BBoeS3dnm9%2BitjCNsgPO4eRFWKAytGznPhuPhQtFDMue4Up6IoalZFHb05%2FB7rXAGTzfzcyxkBxmCXkGnps0EmotrrBSjfjzyOasnCz0Ajct8xR8Q8tjqGN98dToLvf83Iv7VJylQKLw1aLVVG5%2BiE26BKVJfo8VcmLbhGHIHz3I%2BCdJj1gHxop%2FMIm%2FiMQGOqUBqs580BYjjZVi3TLSIjrdHgokE8iImKV0oJxGrxiyZZ7eo44CoSDT1dhpf3G%2FOXajmdK%2FVpxl4udybwrjP4P8xXmBLMHJa8tBsQBHJi0RT509pIOZsn863s78khbJxsa%2BwxAGJnu0Yx0x3KUaVk40kwSlb1z5XzhlxsTcXQzwJ2MqKj8LoexLqUS7o8eq3AICMV9iIY0AtPo8lqu4iI6XwxEW0PBu&X-Amz-Signature=710069a88128eadbd52443e82472e0f18e0b0bf4109372274aa971c6184982c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **근접공격 잔상효과를 만들기 위해서 웨폰포인트에 Effect Empty를 설정해두고 Trail Renderer 컴포넌트를 추가해준다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b5dd6928-9db3-4d9b-a696-60613f339740/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAUQ6IE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCmtilvMZEft2%2FbBwDDsSeP3doUZYW1VTgClPO5aeolvQIgRuJdRi%2B0pYfYvHEwSBRBWgs8pJ2y7mKBTSTkYXXBFYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCG%2FF1BISe5yN2qzaSrcA0Xoo%2B7Y68kpeiwa06nbIvf4T1ItIxQI6BcZumPylXDHiOKs7gdJnId6CqluIuignKpMhFAlBfSNTjNCWL4%2Bl3jPxqLLW1qwIDT3U79%2B2G83cKLwuqL1LtCj9ohwQTRG%2Fu45sLiToTPP3Y97FVsK%2F3Jv5vLQgK80HAJSs6p063auvKwdU7HidsabVbvAQFrYOXRrvVA%2BtRQ0kN3kPQP1BQh9I%2Bmhgdevoe%2B68oY1LWPRPoo5FVWXNmlL3INXlOFH%2BEpfiA1NyQ6RIiYyuqWCeZ%2ByIJMUuMZ7QOQuygjwTeAUDdrKbxR%2B21AUOEp9yN%2BfWMsM21FICfESxd%2BbvuIH0MebSB8KVwD%2F11HuDQoho4qk9aTpW8Bx2Oee%2BZlNVLDTMn2zKqfJm17m68EQEe%2BVFdYIrtTVrFFJn%2Fl%2BQYBUDzG5op%2B7mzyK5nLN7Cqf4QTTJ1xtc%2FsZK2BF7XUZA7HLqHhuaS3%2BmtLjL2AquVle7tzlhstoZrKz9IZbt9Y1XrW6TM8aVpNyAxomuil2LzpS7GMrOCcdkmO78nvQFsA7e4aEGWWDCEsPLLJ3aqVXwKdMiYGa5KxUDWLGE7duWxfJiwMKfYSlIV5rCAHjGYs9Tujzk1STYUvtEcKzFXuYMJHAiMQGOqUBDrbFWJki1sSBvuNL3NAiYPHFfVf9oOoqhqySNP6afyjR0%2FXauWQUZqpRFsrrNiSNUYIlYui2NQDHU%2Fv2ugqpu1x8JMK3Zm0FuKDl%2BbBEC3OHPAZPEuRmzkOZi0pDsX8tHKaWljTjR%2BEgzUAJljxEIVCA%2BVEVbH9lsgD%2FdQzYqynG0Btz1hy9VqwTjbEq9sXZcBwxsIpLL%2FzpqVsrv405B2jvs40L&X-Amz-Signature=6f5f06f555f2507ed06a43d5bd09bc3f8546715fad9aea50447bc6677f6f4113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6970814a-8a41-4237-b7a6-48b2a3f47a47/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAUQ6IE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCmtilvMZEft2%2FbBwDDsSeP3doUZYW1VTgClPO5aeolvQIgRuJdRi%2B0pYfYvHEwSBRBWgs8pJ2y7mKBTSTkYXXBFYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCG%2FF1BISe5yN2qzaSrcA0Xoo%2B7Y68kpeiwa06nbIvf4T1ItIxQI6BcZumPylXDHiOKs7gdJnId6CqluIuignKpMhFAlBfSNTjNCWL4%2Bl3jPxqLLW1qwIDT3U79%2B2G83cKLwuqL1LtCj9ohwQTRG%2Fu45sLiToTPP3Y97FVsK%2F3Jv5vLQgK80HAJSs6p063auvKwdU7HidsabVbvAQFrYOXRrvVA%2BtRQ0kN3kPQP1BQh9I%2Bmhgdevoe%2B68oY1LWPRPoo5FVWXNmlL3INXlOFH%2BEpfiA1NyQ6RIiYyuqWCeZ%2ByIJMUuMZ7QOQuygjwTeAUDdrKbxR%2B21AUOEp9yN%2BfWMsM21FICfESxd%2BbvuIH0MebSB8KVwD%2F11HuDQoho4qk9aTpW8Bx2Oee%2BZlNVLDTMn2zKqfJm17m68EQEe%2BVFdYIrtTVrFFJn%2Fl%2BQYBUDzG5op%2B7mzyK5nLN7Cqf4QTTJ1xtc%2FsZK2BF7XUZA7HLqHhuaS3%2BmtLjL2AquVle7tzlhstoZrKz9IZbt9Y1XrW6TM8aVpNyAxomuil2LzpS7GMrOCcdkmO78nvQFsA7e4aEGWWDCEsPLLJ3aqVXwKdMiYGa5KxUDWLGE7duWxfJiwMKfYSlIV5rCAHjGYs9Tujzk1STYUvtEcKzFXuYMJHAiMQGOqUBDrbFWJki1sSBvuNL3NAiYPHFfVf9oOoqhqySNP6afyjR0%2FXauWQUZqpRFsrrNiSNUYIlYui2NQDHU%2Fv2ugqpu1x8JMK3Zm0FuKDl%2BbBEC3OHPAZPEuRmzkOZi0pDsX8tHKaWljTjR%2BEgzUAJljxEIVCA%2BVEVbH9lsgD%2FdQzYqynG0Btz1hy9VqwTjbEq9sXZcBwxsIpLL%2FzpqVsrv405B2jvs40L&X-Amz-Signature=d315bb09a9424b74fd4218b8d06600cfb8c61c1e1b445bde645451aa1d400871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b8cd1e58-6912-411a-81e9-aaee5974b7ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAUQ6IE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCmtilvMZEft2%2FbBwDDsSeP3doUZYW1VTgClPO5aeolvQIgRuJdRi%2B0pYfYvHEwSBRBWgs8pJ2y7mKBTSTkYXXBFYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCG%2FF1BISe5yN2qzaSrcA0Xoo%2B7Y68kpeiwa06nbIvf4T1ItIxQI6BcZumPylXDHiOKs7gdJnId6CqluIuignKpMhFAlBfSNTjNCWL4%2Bl3jPxqLLW1qwIDT3U79%2B2G83cKLwuqL1LtCj9ohwQTRG%2Fu45sLiToTPP3Y97FVsK%2F3Jv5vLQgK80HAJSs6p063auvKwdU7HidsabVbvAQFrYOXRrvVA%2BtRQ0kN3kPQP1BQh9I%2Bmhgdevoe%2B68oY1LWPRPoo5FVWXNmlL3INXlOFH%2BEpfiA1NyQ6RIiYyuqWCeZ%2ByIJMUuMZ7QOQuygjwTeAUDdrKbxR%2B21AUOEp9yN%2BfWMsM21FICfESxd%2BbvuIH0MebSB8KVwD%2F11HuDQoho4qk9aTpW8Bx2Oee%2BZlNVLDTMn2zKqfJm17m68EQEe%2BVFdYIrtTVrFFJn%2Fl%2BQYBUDzG5op%2B7mzyK5nLN7Cqf4QTTJ1xtc%2FsZK2BF7XUZA7HLqHhuaS3%2BmtLjL2AquVle7tzlhstoZrKz9IZbt9Y1XrW6TM8aVpNyAxomuil2LzpS7GMrOCcdkmO78nvQFsA7e4aEGWWDCEsPLLJ3aqVXwKdMiYGa5KxUDWLGE7duWxfJiwMKfYSlIV5rCAHjGYs9Tujzk1STYUvtEcKzFXuYMJHAiMQGOqUBDrbFWJki1sSBvuNL3NAiYPHFfVf9oOoqhqySNP6afyjR0%2FXauWQUZqpRFsrrNiSNUYIlYui2NQDHU%2Fv2ugqpu1x8JMK3Zm0FuKDl%2BbBEC3OHPAZPEuRmzkOZi0pDsX8tHKaWljTjR%2BEgzUAJljxEIVCA%2BVEVbH9lsgD%2FdQzYqynG0Btz1hy9VqwTjbEq9sXZcBwxsIpLL%2FzpqVsrv405B2jvs40L&X-Amz-Signature=4cfdb53ad7e67ad8d57189f7b3655f0813fb4802e46dd39a0f13043e0397f12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/bb6da1d8-1a6a-4b58-8343-1c236c2f1d64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAUQ6IE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCmtilvMZEft2%2FbBwDDsSeP3doUZYW1VTgClPO5aeolvQIgRuJdRi%2B0pYfYvHEwSBRBWgs8pJ2y7mKBTSTkYXXBFYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCG%2FF1BISe5yN2qzaSrcA0Xoo%2B7Y68kpeiwa06nbIvf4T1ItIxQI6BcZumPylXDHiOKs7gdJnId6CqluIuignKpMhFAlBfSNTjNCWL4%2Bl3jPxqLLW1qwIDT3U79%2B2G83cKLwuqL1LtCj9ohwQTRG%2Fu45sLiToTPP3Y97FVsK%2F3Jv5vLQgK80HAJSs6p063auvKwdU7HidsabVbvAQFrYOXRrvVA%2BtRQ0kN3kPQP1BQh9I%2Bmhgdevoe%2B68oY1LWPRPoo5FVWXNmlL3INXlOFH%2BEpfiA1NyQ6RIiYyuqWCeZ%2ByIJMUuMZ7QOQuygjwTeAUDdrKbxR%2B21AUOEp9yN%2BfWMsM21FICfESxd%2BbvuIH0MebSB8KVwD%2F11HuDQoho4qk9aTpW8Bx2Oee%2BZlNVLDTMn2zKqfJm17m68EQEe%2BVFdYIrtTVrFFJn%2Fl%2BQYBUDzG5op%2B7mzyK5nLN7Cqf4QTTJ1xtc%2FsZK2BF7XUZA7HLqHhuaS3%2BmtLjL2AquVle7tzlhstoZrKz9IZbt9Y1XrW6TM8aVpNyAxomuil2LzpS7GMrOCcdkmO78nvQFsA7e4aEGWWDCEsPLLJ3aqVXwKdMiYGa5KxUDWLGE7duWxfJiwMKfYSlIV5rCAHjGYs9Tujzk1STYUvtEcKzFXuYMJHAiMQGOqUBDrbFWJki1sSBvuNL3NAiYPHFfVf9oOoqhqySNP6afyjR0%2FXauWQUZqpRFsrrNiSNUYIlYui2NQDHU%2Fv2ugqpu1x8JMK3Zm0FuKDl%2BbBEC3OHPAZPEuRmzkOZi0pDsX8tHKaWljTjR%2BEgzUAJljxEIVCA%2BVEVbH9lsgD%2FdQzYqynG0Btz1hy9VqwTjbEq9sXZcBwxsIpLL%2FzpqVsrv405B2jvs40L&X-Amz-Signature=a986c2ed9247d26a2af04bb6343f326325b8c5bea9baf39cb1ffcac6db85e638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 그리고 Trail 렌더하고 Box 콜라이더도 Off 시켜준다
>
>

> 🔥 ****코루틴 함수 / Ienumerator 은 yield 를 포함하고있어야한다****
>
> Yield 키워드를 여러개 사용하여 시간차 로직 작성이 가능함
>
>
> > **일반함수 **: Use() 함수를 메인루트라고할때 Swing()이라는 함수를 호출하면 서브루틴이라고 한다
> ** 코루틴함수 **: Use() 메인함수와 Swing()코루틴이 동시에 실행된다
>
> ```c#
> IEnumerator Swing()
>     {
>         //yield 결과를 전달하는 함수
>         yield return null;
>     }
> ```
>
>

> 🔥 **코루틴 함수는 사용할때 `StartCoroution(”함수이름”);` 로 사용해야한다**
> ```c#
> public void Use()
>     {
>         //현재 타입의 무기타입이 근접무기라면
>         if(type == Type.Melee)
>         {
>             StopCoroutine("Swing");
>             StartCoroutine("Swing");
>         }
>     }
>
>     IEnumerator Swing()
>     {
>         //yield 결과를 전달하는 함수
>
>         //1번 구역 실행
>         yield return new WaitForSeconds(0.1f); // 0.1초 대기
>         //2번 구역 실행
>
>         //break로 코루틴 탈출 가능
>         yield break;
>     }
> ```
>
>

> 🔥 **그리고 Player.cs 에 있던 코드도 Weapon에 맞춰 변경(볼드체 해둔 코드 추가)**
> ```c#
> **Weapon **equipweapon; //장착하고있는 무기의 메쉬 //Weapon.cs의 클래스를 사용해야하기 때문
>
> void Swap()
>     {
>         if(sDown1 && (!hasWeapons[0] || equipweaponIndex == 0)) return;
>         if(sDown2 && (!hasWeapons[1] || equipweaponIndex == 1)) return;
>         if(sDown3 && (!hasWeapons[2] || equipweaponIndex == 2)) return;
>         //스왑버튼이 눌려있고 무기를 가지고있지 않거나 현재 무기 인덱스가 해당무기를 가지고 있을때 리턴시켜서 함수를 종료시킨다
>
>         int weaponsIndex = -1; //weaponsIndex 기본값은 -1 즉 없는값 입니다
>         if (sDown1) weaponsIndex = 0;
>         if (sDown2) weaponsIndex = 1;
>         if (sDown3) weaponsIndex = 2;
>
>         if((sDown1 || sDown2 || sDown3) && !isJump && !isDodge) //1 2 3 키 중 하나만 눌린 상태이고 점프와 회피상태가 아닐떄 실행됩니다
>         {
>             //처음시작하면 손에 아무것도 없는 Null상태기 때문에 false를 하면 에러가뜬다
>             //고로 비어있는상태가 아닐때만 현재 쥐고있는 무기를 off하는 코드작성
>             if(equipweapon != null) equipweapon**.gameObject**.SetActive(false);
>
>             equipweaponIndex = weaponsIndex;
>             equipweapon = Weapons[weaponsIndex]**.GetComponent<Weapon>();**
>             //게임오브젝트[] Weapons 값은 위에서 if로 weaponsIndex을 받아오고 해당 오브젝트를 활성화시켜 보이게합니다
>             equipweapon**.gameObject**.SetActive(true);
>             isSwap = true;
>
>             anim.SetTrigger("doSwap");
>             Invoke("SwapOut",0.4f); //0.4초뒤에 isSwap을 다시 false로 되돌린다
>         }
>     }
>
> void Move()
>     {
>         moveVec = new Vector3(hAxis,0,vAxis).normalized;
>
>         //혹시 지금 닷지중입니까?
>         //닷지를 했을때 dodgeVec에 moveVec이 담겨서 방향값이 고정된다
>         if(isDodge)
>             moveVec = dodgeVec;
>
>         if(isSwap** || !isFireReady**) //공격할땐 못움직이게
>             moveVec = Vector3.zero;
>
>         //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
>         anim.SetBool("IsRun", moveVec != Vector3.zero); // 0,0,0만 아니면 isRun을 받는다
>         anim.SetBool("IsWalk", wDown);
>     }
> ```
>
> ```c#
> void Attack()
>     {
>         //공격하기위해선 일단 손에 무기가 있는지부터 확인 무기 없으면(null) 나가~
>         if(equipweapon == null)
>             return;
>
>         fireDelay += Time.deltaTime; //공격 딜레이에 시간을 더해주고 공격가능 여부 확인
>         isFireReady = equipweapon.rate < fireDelay; //공격속도보다 파이어딜레이가 크면 true가 저장된다
>
>         if(fDown && isFireReady && !isDodge && !isSwap)
>         {
>             equipweapon.Use(); //Weapon.cs 내부에 Use() 함수 실행
>             anim.SetTrigger("doSwing");
>             fireDelay = 0;
>         }
>     }
> ```
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=07q9RUTRq4M)

> 🔥 **총알이 바닥에 닿았을 때 물리충돌설정 (Rigidbody / Collider 는 기본으로 설정해두고)**
> ```c#
> //Bullet.cs
>
> public class Bullet : MonoBehaviour
> {
>     public int damage;
>
>     void OnCollisionEnter(Collision collision)
>     {
>         if(collision.gameObject.tag == "Floor")
>         {
>             Destroy(gameObject, 3);
>         }
>         else(collision.gameObject.tag == "Wall")
>         {
>             Destroy(gameObject);
>         }
>     }
> }
> ```
>
>

> 🔥 **재장전 코드**
> ```c#
> void Reroad()
>     {
>         if (equipweapon == null)
>             return;
>         if (equipweapon.type == Weapon.Type.Melee)
>             return;
>         if (ammo == 0)
>             return;
>
>         if(rDown && !isJump && !isDodge && !isSwap &&!isFireReady && moveVec != Vector3.zero)
>         {
>             anim.SetTrigger("doReload");
>             isReroad = true;
>             Invoke("ReloadOut",0.5f);
>         }
>     }
>
>     void ReloadOut()
>     {
>         //보유총알이 총의 최대탄창보다 적으면 장전해도 그대로 보유총알 아니라면 보유총알의 최대탄차안큼 저장된다
>         int reAmmo = ammo < equipweapon.maxAmmo ? ammo : equipweapon.maxAmmo;
>         equipweapon.curAmmo = reAmmo;
>         ammo -= reAmmo; //보유총알에서 장전하는 값을 계속해서 뺀다
>         isReroad = false;
>     }
> ```
>
> > 보유총알이 총의 최대탄창보다 적으면 장전해도 그대로 보유총알 아니라면 보유총알의 최대탄차안큼 저장된다 
>
> ```c#
> void Move()
>     {
>         moveVec = new Vector3(hAxis,0,vAxis).normalized;
>
>         //혹시 지금 닷지중입니까?
>         //닷지를 했을때 dodgeVec에 moveVec이 담겨서 방향값이 고정된다
>         if(isDodge)
>             moveVec = dodgeVec;
>
>         if(isSwap || !isFireReady || **!isReroad**)
>             moveVec = Vector3.zero;
>
>         //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
>         anim.SetBool("IsRun", moveVec != Vector3.zero); // 0,0,0만 아니면 isRun을 받는다
>         anim.SetBool("IsWalk", wDown);
>     }
> ```
>
>

> 🔥 **마우스 방향으로 공격**
> ```c#
> //player.cs
>
> public Camera followCamera;
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d887c57a-6be6-4731-b496-d2be49e309f8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2LQC6RY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDfGXu1mi13OP8H3CnmlU6zwoS8%2F0K5YNgbnOg3rhadgwIhAPJpJ%2BeGavKQvB3CyXLfSMQrO4sNeRlbroLKvIFeLIU5Kv8DCC0QABoMNjM3NDIzMTgzODA1Igz6uBuSQenOe7SZUFMq3ANmt%2FgXJ31zcMvAcgARR0%2F%2BK%2B0KgGc1FiFrjCk%2F%2B9YxvXRYbphsQGDaQ%2B6gumQCvj7kMCxd92a3i15ibwXu477FfYWEqFgMeuj2d5AcSMpS3HQmbY%2F6VHksWatz2cA4iiImsRYkID2ao4gHnpIQKLtx4idyVZIR1VFBKuxpIgFSVCCGTeghCM8AB4eYzOyK5uUcqdhJW5qTnSAap8DE7XU4BEJGgVFh%2Fx0zp3zm34b0%2Fr4jDzFK6hiPna%2B85q4STQhfxjzt5gsisea%2FjvFrVE%2FwoMA%2Bdz7MnUJnrmhn2QfpAG0wrW0jVL7lDaEOhN6MTCOt%2F5ucgtPVK7l78f9xz0HAPnduA9I%2FvIZefY1BHR7ns3bQXGd8jFvSULSKzGZiCO6uokH1A87wyZTNDpCnoPVY4rdQyfQnZU9bSlcdrkjdWbn47QHiZhyItJcMBWjzW%2BDO%2FsS%2BL7stRRbqHsyjEmvraOztz00I8vNrrzq01YKrU8D8V%2BoU9ple2v8l%2BNqeSN960xvnkKpgtuzTKt3n%2BofW4a%2FB%2Bvuq66fFN8%2Fkh8a%2FYoZP%2BT9s%2FZzHt1%2F%2BuS8BvhBYKTAYKrqSXkgwkuinag04CJ7v7lz7orxPksVdYp%2B%2FQQAEl%2FKtNW0oDSpkhTCHv4jEBjqkAeUzr2BnQS3yJS%2B%2FochQVhld01igOYdYGoBVsArMb%2BeZgnKZaArQfCNqZmTpuz6m8TY46K74xWlEoir6rH94Am1%2BMX4la6sySOFdLryZvlBn%2B5QoLyG7R6H4GkcRJjQ5yYzv0LHADqaiDKvnHbunxKrgspSGlsnkQiNSvfngzeckfWjvO%2BLjBTbDD8ijMReFXLkPkHrR%2BlYxPuNfBSFiRvnc%2B0Pc&X-Amz-Signature=3e3ac089102d1c42f42e5191c9601c7a63e710b705d10085340c22fc97f308cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **What is Raycast?**
> > > 레이캐스트는 광선을 쏘는 것을 의미합니다. 여기서는
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/76bbd0ed-bfd3-4465-ac08-27cde75342f5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7GXJFD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDygW4%2Fmd4kWczBHwT%2FTYz68gtadBVTDDIs%2FFIlHJ6d7wIhAMCnoRu2a%2FewJqZgqCtvQElFEhj7IeiPwuH%2FMw93YR4zKv8DCC0QABoMNjM3NDIzMTgzODA1IgwfxT63IyiC1Z%2F8MpIq3AO18I8J0w5NxUmHK7%2BtmD2m%2BWx%2Fxn2PKRqrH%2B4F24NIWAngUIAVB%2FzxF3zppRJdvLF%2Br%2FpEfONxQ%2F9WHvuOpgWVthy0cxzbnHOqGRiOylCsoCSVhIsAsK9KoNCtkDbZ%2BbBcE0zSsnoaJnvH9689JIdCOv0gecJ4zm%2BpfWsV0di1Oqq5h4vgxQ9heHB%2ByMcmYnFk7xSrdOxAiUb%2FyGGPIucu0V3JdFTIJ85YM4iL%2FvT37acmTfsXewNVl7n5CH%2B9Ifr2WeJtOwA909pXkMFhJvbOAj4uYMbW3w3SfOpISRN6%2BsUf6vNSwjltb3BT62znlruSR7sLDv9dIoo%2BAQ9KrvbU8AQoN0k3vkA0o4rs91Oj%2BMfZGe3FAojef7qYPx%2B9XhiaBezlpdhdIYtIdhEZLJn52qWVFukW%2FKKZbMcKkue2ftSfVRpDvPIrDGMOTT6M%2FFig6iGYP2J%2BOSzs9NRFJnQlhpyr%2Fvn05M7oAuD2CRaHrRjhu61c4s8lI8RUswwlooS0BlpLECz8%2FHaxvbliYLhy0Tklo0PZMhQI0NyvoEetBXfe0koOD7%2FcWnbgjg1XrOXDc9lzCqMUF7Ppe3l2KC5osCrgUB2XHtPgrRrKlHDFRVTmwYUiGro1Un4usjDcv4jEBjqkAZMV9j3uT1pSVslPrNNAbH%2BjHLiHqvmqbugoJ6hFpfXoP7HSS1WvCq4GDnHE0fi%2Fm3BEpn71G6qRMQGX4Kj8FXnDSX9OvyZpXMhRkei36P5MAgTqkIPfruIE%2BuzKmPw9dKQGkGwzEQHWnl25leoojYpT7lhNzvR593NqadGp%2BExaVN5c0%2B28kJ0n9UKuGQeGGBhhp1VPK6IZQgAqMeYmqH0KFQA3&X-Amz-Signature=454faa7b04821cffeed5f87d3d51b331ca647ce01ac9ac518a50ff2698746b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > ```c#
> > //player.cs
> >
> > void Turn()
> >     {
> >         //#1 키보드에 의해 결정되는 시점
> >         transform.LookAt(transform.position + moveVec);
> >         //#2 마우스에 의해 결정되는 시점
> >         **Ray ray = followCamera.ScreenPointToRay(Input.mousePosition); //스크린에서 월드로 Ray를 쏘는 함수
> >         RaycastHit rayHit;
> >         if(Physics.Raycast(ray, out rayHit, 100))**
> >         {
> >
> >         }
> >     }
> > ```
> >
> >
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=dynN70kyD9A&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=8)

> 🔥 **리지드바디끼리 부딪혀서 플레이어가 자동으로 회전하는 현상 픽스**
> Transform이동이기때문에 Rigidbody를 제어할 수 없어서 따로 제작해줘야한다
>
> `Player.cs `에서 수정하도록 한다
>
> ```c#
> void FreezeRotation()
> {
>     //angularVelocity = 물리 회전 속도
>     //Update() 안에 넣어 매프레임 FreezeRotations()을 호출하여 물리회전속도를 0으로 초기화시켜 회전을 막는다
>     rigid.angularVelocity = Vector3.zero;
> }
>
> void FixedUpdate() 
> {
>     FreezeRotation();
> }
> ```
>
>
> 또한, 충돌 레이어 또한 설정해줘야한다 다른 리지드바디와 충돌했기 때문이기에 레이어를 다르게한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a61bdbe1-6992-48bb-b512-3f11e03cbd35/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI7PYIX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDlBqrsvF1ysga20R4YR%2FQitaYrxI4UnsZVeeOHofHJqAiAHdV5AC%2B03NwWGASgDNPupC9jniLu%2F2dyEs%2FzrZkNrEyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMVCzSdcFx4ediSGOVKtwDCa%2FENq4r7ztSNuT1yvIGz1tGMDtwp6BTjwht5wQa0Y40MWR93cjl%2BlBFqZqAg26YNScNzZm23lCgrRUNRpBHLP%2BCTb2YbAMAvH%2B6Zlq5qgJcm7cNEUPk31qBg3I8EDhYwuZYfelK%2BTAJBfVo%2BaqBUdMeuniEjhvfkMoZEhVyGHpHn4dNbrYQ%2FLoVh5xbPl%2FAyjpVAgy6mc1Eo801gnbhNcjPCLVw33GjqPEGNRZjUHIvMDWFxKS%2Fg6zpw2J2vhAWSlD4jX1V79zDNyHX43FphaQ8AC2mWmdeyb%2FpcEiHcmp%2FClZXOkZDozZOytmnPz%2F024FwHJ7pRohkeWV4xSAxxx99mJovlPbyslfL%2BXBrODQihScRNJiv%2FAj3pK01TsU0qQs7UxWiXrae6zz6bPVepymlDA%2BWM4zhMoanzlEGIBhLQ6TVooc43OUvujBXlv2R%2BVACnGcQDIj7kVS6MMR33P31b4%2F1%2BdvaZm%2BLZTwcbYvshnkiTBAzBpWA4Y4QWI8vRavMfVR5MiLLcKRIBqMIEGA%2F6w1SalnmhKm3q7y5Bd1IWp2BPCQZyMiQKcK3%2FvNDFHi5SuYi0dFwHgySMMyhW6H2wZFtagU7LGJHcFNO%2FSyASOivGaNbMMdwRL8ww7%2BIxAY6pgF7Jvw9PfDw6cB1p5b1mdtW4ojM8BA5vvc3%2Bu%2BWTXIpN5PW5HdWFqQgurEid1Rq6B0WlYnUWQEq1R8tVi4pi2xPxFLmYqy2bpfFpS2FgaZCexoKojxpx%2FSGBnrIvS2XRFm5AUnwYKPQJ%2BJLe7t1yoeIF9Og%2BuZrUt5VUEapEqx6CmR%2BTVii33SRQfSNk9MNwUkE3Kb32ectsnI9X1ShGJzJiFWnhEIw&X-Amz-Signature=0683897c439b8eee79694cd5fa87d9ea58e2e36088e15ceebea97d0d1b9b97ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b85ba6fd-17f8-420d-bdd1-d36a8a9f9782/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI7PYIX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDlBqrsvF1ysga20R4YR%2FQitaYrxI4UnsZVeeOHofHJqAiAHdV5AC%2B03NwWGASgDNPupC9jniLu%2F2dyEs%2FzrZkNrEyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMVCzSdcFx4ediSGOVKtwDCa%2FENq4r7ztSNuT1yvIGz1tGMDtwp6BTjwht5wQa0Y40MWR93cjl%2BlBFqZqAg26YNScNzZm23lCgrRUNRpBHLP%2BCTb2YbAMAvH%2B6Zlq5qgJcm7cNEUPk31qBg3I8EDhYwuZYfelK%2BTAJBfVo%2BaqBUdMeuniEjhvfkMoZEhVyGHpHn4dNbrYQ%2FLoVh5xbPl%2FAyjpVAgy6mc1Eo801gnbhNcjPCLVw33GjqPEGNRZjUHIvMDWFxKS%2Fg6zpw2J2vhAWSlD4jX1V79zDNyHX43FphaQ8AC2mWmdeyb%2FpcEiHcmp%2FClZXOkZDozZOytmnPz%2F024FwHJ7pRohkeWV4xSAxxx99mJovlPbyslfL%2BXBrODQihScRNJiv%2FAj3pK01TsU0qQs7UxWiXrae6zz6bPVepymlDA%2BWM4zhMoanzlEGIBhLQ6TVooc43OUvujBXlv2R%2BVACnGcQDIj7kVS6MMR33P31b4%2F1%2BdvaZm%2BLZTwcbYvshnkiTBAzBpWA4Y4QWI8vRavMfVR5MiLLcKRIBqMIEGA%2F6w1SalnmhKm3q7y5Bd1IWp2BPCQZyMiQKcK3%2FvNDFHi5SuYi0dFwHgySMMyhW6H2wZFtagU7LGJHcFNO%2FSyASOivGaNbMMdwRL8ww7%2BIxAY6pgF7Jvw9PfDw6cB1p5b1mdtW4ojM8BA5vvc3%2Bu%2BWTXIpN5PW5HdWFqQgurEid1Rq6B0WlYnUWQEq1R8tVi4pi2xPxFLmYqy2bpfFpS2FgaZCexoKojxpx%2FSGBnrIvS2XRFm5AUnwYKPQJ%2BJLe7t1yoeIF9Og%2BuZrUt5VUEapEqx6CmR%2BTVii33SRQfSNk9MNwUkE3Kb32ectsnI9X1ShGJzJiFWnhEIw&X-Amz-Signature=e84c5e1c3ad327b65e76d2fca10a761070893f7f685bf1d727b79f8743243c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> Edit - ProjectSettings - Physics - Layer Collision Matrix
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d78eda70-8723-428e-ac74-3048fc8becc1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI7PYIX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDlBqrsvF1ysga20R4YR%2FQitaYrxI4UnsZVeeOHofHJqAiAHdV5AC%2B03NwWGASgDNPupC9jniLu%2F2dyEs%2FzrZkNrEyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMVCzSdcFx4ediSGOVKtwDCa%2FENq4r7ztSNuT1yvIGz1tGMDtwp6BTjwht5wQa0Y40MWR93cjl%2BlBFqZqAg26YNScNzZm23lCgrRUNRpBHLP%2BCTb2YbAMAvH%2B6Zlq5qgJcm7cNEUPk31qBg3I8EDhYwuZYfelK%2BTAJBfVo%2BaqBUdMeuniEjhvfkMoZEhVyGHpHn4dNbrYQ%2FLoVh5xbPl%2FAyjpVAgy6mc1Eo801gnbhNcjPCLVw33GjqPEGNRZjUHIvMDWFxKS%2Fg6zpw2J2vhAWSlD4jX1V79zDNyHX43FphaQ8AC2mWmdeyb%2FpcEiHcmp%2FClZXOkZDozZOytmnPz%2F024FwHJ7pRohkeWV4xSAxxx99mJovlPbyslfL%2BXBrODQihScRNJiv%2FAj3pK01TsU0qQs7UxWiXrae6zz6bPVepymlDA%2BWM4zhMoanzlEGIBhLQ6TVooc43OUvujBXlv2R%2BVACnGcQDIj7kVS6MMR33P31b4%2F1%2BdvaZm%2BLZTwcbYvshnkiTBAzBpWA4Y4QWI8vRavMfVR5MiLLcKRIBqMIEGA%2F6w1SalnmhKm3q7y5Bd1IWp2BPCQZyMiQKcK3%2FvNDFHi5SuYi0dFwHgySMMyhW6H2wZFtagU7LGJHcFNO%2FSyASOivGaNbMMdwRL8ww7%2BIxAY6pgF7Jvw9PfDw6cB1p5b1mdtW4ojM8BA5vvc3%2Bu%2BWTXIpN5PW5HdWFqQgurEid1Rq6B0WlYnUWQEq1R8tVi4pi2xPxFLmYqy2bpfFpS2FgaZCexoKojxpx%2FSGBnrIvS2XRFm5AUnwYKPQJ%2BJLe7t1yoeIF9Og%2BuZrUt5VUEapEqx6CmR%2BTVii33SRQfSNk9MNwUkE3Kb32ectsnI9X1ShGJzJiFWnhEIw&X-Amz-Signature=d7bd635275601c2e7594935f45b29b00913567663bbaa143734f72bcdcca9d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **벽관통 해결 또한 Ray를 활용한다**
> ```javascript
> void StopToWal()
>     {
> 				//DrawRay는 씬 내에서 Ray를 시각적으로 보여주는 함수이다
>         **Debug.DrawRay(transform.position, transform.forward * 5/*Ray의 길이*/,Color.green);
>     }**
>
>     void FixedUpdate() 
>     {
>         FreezeRotation();
>         **StopToWal();**
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dbc51270-02e8-41db-be26-ec783d2e156a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQE6YQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF7hrAKwnd4lK16rf2AjVzQRbxgwg6J%2FN5Q3U%2FxyPJUfAiATK8MfYmG%2Fou0dlug7KPir1Fs%2FtHNiK6c1qvslnDTNUir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDHf8%2F%2BKvOdJuMRrAKtwD59wxUDag0WjYTrO3O486iuY2lMHm3at%2BAkwonkZyuvHj1AzHv2tbSodYsJwTL2yrOXVdLv0ZmTeYFXQpbbn%2BIM7KYodDe8idcx1vZWXafMZGRkYwTrOAdBwAQ%2FTp9o88%2BNL0bbfceRhwosUHywj1%2FwdrLQpV4llt%2FnHzD%2BlRbanLaJHWlm88%2BEKoKS9j9NQHo0uhwYB3uB29nbDlf7nGhvC6lZc4gmIVkS4smxItXWWZQY1aDJDE42lmBF0mKUOlAhLZEnylox7reuTxlHCQKGNUA1UH4tpuR8Enurb6q2Neox%2BPQsuah%2Bs%2F533eflHOAAaFdFOgHhd0mS8vrdAPrPluaxiBMTUokArOoKUVcd56dwrWqQ6IC6p6Vn6blCEuSh%2FQbyEyNN5OMHL%2BrkblZh%2Fa7r1FPD7ilhU5eqYFT%2FntCxn5J5P8YxL1dlaWeFySRLn9fwTxJaBO9oNCHjelP80tLbJ22j1JyplLldXNCxf9LT4fZzaQp2b76ws5lbxH6gVO6t6LW5ekYlztsKl7A3HIOXmGPooxgz9ut5%2B9nwjLmDgvsntoj4uQR8vgY0P0KQmRvZbwe0DYuqMdb%2F0AY7l7ZY3txRN9EzGjmbZMFRKBX%2FpoWQ6NS9mB02Ewnr%2BIxAY6pgE7AyKH9ilBBQ%2Fg5JcZTDETslnHDFuX1XDbSLNrcBWlIXBP41nfv086iKFEiqO8EDXh5dzqi20jOdEbFnulVkPIUN230KMgS66GC7WiNoqr%2F2IPM0heH7wKwVTDAdf3J2A34WtSuGAvZriOoSyJ19kkYyEKRowlV1OH%2FPQvaibTqbZflgcS2pfJmKfKOGbsXWkuqKhrEFsVuVdi8qUFRZ9qhMSiyDcK&X-Amz-Signature=5fb975ccaa855141038b9062525bc3bf1a9fb2d295c8eb65587dbfe55dd989ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> bool isBorder; //벽과 닿았나 안닿았나?
>
>
> ```
>
>


---
title: "유니티 3D게임 쿼드뷰 02"
date: 2023-02-06T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에 대한 내용으로, 중력 설정, 물리 충돌 강화, 특정 시간 후 함수 실행, 회피 및 아이템 구현, 열거형 사용법 등을 다룹니다. 각 기능에 대한 코드 예제와 설명이 포함되어 있습니다."
notion_id: "54478c15-8de5-411b-ab61-58fcc933f3b2"
notion_url: "https://www.notion.so/3D-02-54478c158de5411bab6158fcc933f3b2"
---

# 유니티 3D게임 쿼드뷰 02

> **Summary**
> 유니티 3D 게임 개발에 대한 내용으로, 중력 설정, 물리 충돌 강화, 특정 시간 후 함수 실행, 회피 및 아이템 구현, 열거형 사용법 등을 다룹니다. 각 기능에 대한 코드 예제와 설명이 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=eZ8Dm809j4c&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=3)

> 🔥 **중력설정방법**
> Edit - Project Settings - Physics
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5400dcef-723d-4225-8711-a15311964b9b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7WBHBIX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTBFAMy8sJ5mWew6CeFuA1ECS8GEo8m%2Fe4mhCcu2ISmQIhAJxcEuzyE5d8l%2BYpG7zAUlA3LxtwcmygqN%2FgUmgs7fL%2FKv8DCCsQABoMNjM3NDIzMTgzODA1IgyQ9zbKtnvcfzeKyo0q3AMsGHHzW1aVpphv6cXB890y8v8xjZ26CCRbheXpFs6FElMI9h2qUcHc1X7KrGUql8oBu81dmTnEBVzQ5MiEEMrcEuLE8A476Ufz88IVSCrDS88Nrte61ooSk75ePFIe8JtsB8mleKNISlyZt57ceE7qg0BqSucd92YSf1JQ0jblCnfT5wa5T6o1OOnIm4FdHmRKaci7ZH4xIi3DDh0MHyMiBx%2BRw9CCGaUb03TMXJrm9pD1myZgR8aUHHpViYVzpI5oMwIXTnGVtNDEF1RPuaV%2BSL1BP%2Bc6A6nojr%2B%2BpcMemS%2FfK6xmYARIj8%2BY9fBT9%2F1qec6eBzeCe8G07Ks78c4%2FLP5GZ68qS3jMcZ%2FkodhtIBIU0XKR4AdkWqwI0u8krsN9A2CSJqnv9LzuxyinSHdwPrmUE56opGztaxK3zOJcvkdnKWUwXWjXcX01gRE7jzX7gevWhrqHUVLATVhXOIZAiefSSaAPtCm3dXOA3R5ay5UnLbRwa%2FSlZPalHoOt6BIFtv6dtYclaLIsB1Q42KMwMkWVHVPuQ3oCAJNaYWRbn6kVsV4On8h%2F3ssaz31G9nBpOrh1gpW%2BLctUY0i%2BygsbRfQUFadTZ%2F7%2Bxen9y9aB3Tfl0OQnR9LQVBONZjDe9ofEBjqkAfZrhLn8g2c%2FlSdEmA0DbwDfPfXGcIW01sCVLyB%2BjV%2FGtVxi%2FJhrc4pDfLUlPCrjgRVILRCt44nzmbWV6YiLdFrdLQ4PXSrhTZ%2FO926fEVYU6RVJjIuHigb1vbnWwC6zoIZRv7xcnFXleH441iY8twId8HnBD08Au65IHJEc5ydZ7ZLmyxmV7bR0BoALH5omRG1kv%2FWZMrz0nbOJDs6XIS2c7xMC&X-Amz-Signature=0ec3e65b6d42a360844765ba25ba7c375b630f52e391cc4a3bb09314ce778893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **물리충돌 강화방법 - 충돌 들어있는 그룹 스태틱으로 전환 후 자식들까지 적용**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/274157b7-5b0c-4ce7-b5e3-537574a74215/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYBMU4A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTGliefBw1cJa%2BoopXrYD%2FHeg%2FhYt4azXCCivvIWXqQAIhAJ7n3%2BHv%2BtEvwfaWcDQ9mSXLu%2FKkidoXP0x3k7RfWgpQKv8DCCoQABoMNjM3NDIzMTgzODA1Igx7hPbkOmrnfgDqVL0q3AOoORfB379oelcQbc8OiSpHEveJqkQfyUsNhmxdvslBg%2FNl5IGhDhoTySeFFai1ZvfPHMR59XH9B7MhNrjI1ABwytYHwI4AV38E1%2F202TU8tXNNFFopec%2BdCBHp%2BOlvdRJdsCzqHsNcPXTJb2FeeTmI9bxOGnj4YRV1dfBO847duJwZCGsz7liA%2FtMrBrAD8kDcKJgPdn5jZwLxgb8LLlgHP4FZGCiJuIk7DPY7iP5yOj4QKLu9R%2FwcMNezl5SaJFaS1%2Foljei%2F19LZ9WYdVwwWMTO8LOS9iIr0OamwB6R7pCkXTaEehM7kW%2F%2FHX2jlE5QFwTbemLFpBaZwhoQK3%2FjyJJaG7Jlsrxg9yhlDqcmCx0Bn%2BR0HAMnBvxU%2B0QZiPDRIzqdF356kOTStKur%2BkVrHjWknJrm2xLQDTYu9tUF%2Fx6J1npO2W6HJoBW3duH%2BTKwWP3j9jljGnfmENgx03ISuMz6hN6yLlCc%2F2MiqMbNUKw74LgSC35eXUYWNssm%2BzJWJQY0BPnIPYITP43W6KWkeEMcMMsAejOelyu7WLFxct6f7ctRc1E2hWcuIwabuZWJy5L2AaoyT3ZugFMqrBRGdSCOsPth5Qla9Gj2GgmjYJk0E8NfJ%2FXvcn2gKyzDc9YfEBjqkAX%2Blqe9335tD3fH0gvpqBA7MlZygGyt%2B%2Fjb8yOllEqgAvuq9ccikImKLNoyECNM0XsHJUK09Q%2FkJgbuBw04%2BGTOcDzEYaoxVDZRhsf02Glpg6UqvhUKm4E8lE5eySioEE3TY0rA4AxkY%2FvkwS3PC2xUnmKjM1PvhRAMxGN1w2bDFD7fPIMCjQC7B7l7nxeTo2ITDFkP8hZkr4v5NjNj%2FttekzvPw&X-Amz-Signature=6d0e397f061367e5ed2ebe17e7f71c9c0ef3d9c2becd710dbba321107c29591f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 컨티뉴스를 제대로 사용하기 위해서 부딪히는상태를 정적으로해둬야 제대로 작동한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b02584e3-eeb5-4b73-b43c-4d58e648aacb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYBMU4A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTGliefBw1cJa%2BoopXrYD%2FHeg%2FhYt4azXCCivvIWXqQAIhAJ7n3%2BHv%2BtEvwfaWcDQ9mSXLu%2FKkidoXP0x3k7RfWgpQKv8DCCoQABoMNjM3NDIzMTgzODA1Igx7hPbkOmrnfgDqVL0q3AOoORfB379oelcQbc8OiSpHEveJqkQfyUsNhmxdvslBg%2FNl5IGhDhoTySeFFai1ZvfPHMR59XH9B7MhNrjI1ABwytYHwI4AV38E1%2F202TU8tXNNFFopec%2BdCBHp%2BOlvdRJdsCzqHsNcPXTJb2FeeTmI9bxOGnj4YRV1dfBO847duJwZCGsz7liA%2FtMrBrAD8kDcKJgPdn5jZwLxgb8LLlgHP4FZGCiJuIk7DPY7iP5yOj4QKLu9R%2FwcMNezl5SaJFaS1%2Foljei%2F19LZ9WYdVwwWMTO8LOS9iIr0OamwB6R7pCkXTaEehM7kW%2F%2FHX2jlE5QFwTbemLFpBaZwhoQK3%2FjyJJaG7Jlsrxg9yhlDqcmCx0Bn%2BR0HAMnBvxU%2B0QZiPDRIzqdF356kOTStKur%2BkVrHjWknJrm2xLQDTYu9tUF%2Fx6J1npO2W6HJoBW3duH%2BTKwWP3j9jljGnfmENgx03ISuMz6hN6yLlCc%2F2MiqMbNUKw74LgSC35eXUYWNssm%2BzJWJQY0BPnIPYITP43W6KWkeEMcMMsAejOelyu7WLFxct6f7ctRc1E2hWcuIwabuZWJy5L2AaoyT3ZugFMqrBRGdSCOsPth5Qla9Gj2GgmjYJk0E8NfJ%2FXvcn2gKyzDc9YfEBjqkAX%2Blqe9335tD3fH0gvpqBA7MlZygGyt%2B%2Fjb8yOllEqgAvuq9ccikImKLNoyECNM0XsHJUK09Q%2FkJgbuBw04%2BGTOcDzEYaoxVDZRhsf02Glpg6UqvhUKm4E8lE5eySioEE3TY0rA4AxkY%2FvkwS3PC2xUnmKjM1PvhRAMxGN1w2bDFD7fPIMCjQC7B7l7nxeTo2ITDFkP8hZkr4v5NjNj%2FttekzvPw&X-Amz-Signature=d4deb8379c6f5777df1e54e7cd77a434d5bf25da3e8b51dedbec2cf3db8437a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 또한 WorldSpace에 충돌을 위한 리지드바디를 추가해주고 중력값을 받지 않게하기위해서 Use Gravity를 꺼주고 Is Kinematic 을 켜준다
>
>
>

> 🔥 **유니티에서 특정시간을 두고 함수를 실행시키는 메소드**
> `Invoke("실행함수이름 문자열로",시간f);`
>
>

> 🔥 **`moveVec == Vector3.zero`**
> 가만히 있을때만 실행되게 하는 코드
>
> moveVec 내부에는
>
> `moveVec = new Vector3(hAxis,0,vAxis).normalized;`
>
> 플레이어의 방향값을 포함하고있으며
>
> ```c#
> void Dodge()
>     {
>         if(jDown && moveVec != Vector3.zero && !isJump && !isDodge)
>         {
>             speed *= 2;
>             anim.SetTrigger("doDoge");
>             isDodge = true;
>
>             Invoke("DogeOut",0.4f); //함수이름을 문자열로 저장해줘야한다
>         }
>     }
> ```
>
> 비교연산자를 활용하여 점프가 눌린상태이고 방향키가 입력되지 않았으며 점프상태가 아니며 닷지상태가 아닐때만 닷지가 작동된다는 뜻
>
>

> 🔥 **닷지중에 방향전환 차단**
> ```c#
> void Move()
>     {
>         moveVec = new Vector3(hAxis,0,vAxis).normalized;
>
>         **//혹시 지금 닷지중입니까?
>         //닷지를 했을때 dodgeVec에 moveVec이 담겨서 방향값이 고정된다
>         if(isDodge)
>             moveVec = dodgeVec;**
>
>         //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
>         anim.SetBool("IsRun", moveVec != Vector3.zero); // 0,0,0만 아니면 isRun을 받는다
>         anim.SetBool("IsWalk", wDown);
>     }
>
> void Dodge()
>     {
>         if(jDown && moveVec != Vector3.zero && !isJump && !isDodge)
>         {
>             **//방향전환을 막기위해서
>             //현재 방향값을 받아온다
>             dodgeVec = moveVec;**
>             speed *= 2;
>             anim.SetTrigger("doDodge");
>             isDodge = true;
>
>             Invoke("DodgeOut",0.4f); //함수이름을 문자열로 저장해줘야한다
>         }
>     }
> ```
>
> 닷지를할때 moveVec값을 받아와서 직전 방향을 받아온 후 Move에서 닷지상태일경우에는 고정된 방향을 그대로 사용하게 moveVec값을 받아온다
>
>

🎥 [동영상 보기](https://youtu.be/u2DLOay5oO8)

> 🔥 **아이템제작**
> > 🔥 **프리팹 내부에서 Create Empty 후 컴포넌트에서 파티클시스템 추가 후 내부 옵션 설정**
>
> - Emmision - 파티클 양
> - Render - 파티클 머터리얼 설정 가능
> - Shape - 파티클 모양 설정가능
> - ColorOverLifetime - 시간에따른 파티클 색상변화
> - SizeOverLifetime - 시간에따른 파티클 크기변화
> - LimitVelocityOverLifetime - 시간에따른 파티클 속도변화
> - StartLifeTime - 파티클 생존 시간
> - Start Speed 에서 토글눌러서 랜덤값도 추가 가능
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a7997159-1e43-47ae-91d2-9c2e1be5f7a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KJRQBK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDde7jyLFIdqSlss6FUwOnWZcgmQq95bEHZGtAB6dEEAQIgUZGnaSfvSjiPTPYVLmgg1gD%2Fu86DGmuJwPFo7Q6pto4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBh%2BwtXvoT%2Bcb7wq2yrcA6pD7SsGLovsPtLi8PraOu0YOQI6lQ7FZ7FwDeziUBeHSh5BIetmIiiBAxrpFfwrQ3HEwNke19AOUJVnlI7od%2FkcuV%2Fz5mAtJdrn7ig9MWmH6X2N%2Fy5JRDpIwlLDxEKv3zwpO20qaWxDx8dW0nZXZsa1LjCUJuxYaatuaIYkgQgpbyAiewz%2BF9VDJ0RgynYFwfcH8PBr29h9FG13m6plzYoM%2F7XDnNXAlLH3iaQVc5af4W0zzWqoU5NBPcF9EgquVl8BEr9SaHhHvCXfSoTuSRgk%2B2PiTXRO64jDNaNvNLdaJV1yvFMxVlbbxDyv9XYFmw4JSZ7aY54UvaOjt5JQJHX%2BGmtllYUfck3PvxShfQNyzrXTocJmsTKPXRFj7NRvyO9rDkodYYP5KkWsVPSIhWtAc2TcoZb7I2ZWoEey5cDd8gH3tTkRzqO3EIheSJnquwKfaVevlP%2BzrUaRlWzw25NpZt2UZm2EDAuyjjFrOzXpZ5IXbpBV6HTQzEHv38IiVzToSIYRmTHnW0jhRtIl1PQSjDTW682RZr5O3jNnd2sAeL8xvbbdPiIkDeUqDVyWlo78l%2F4gO%2Bv7d14NsOsLS0hbWMeo0dim%2BoL%2B9tEWv0CEBH6uj1sMZsghutEVMMf2h8QGOqUBLAJK9cxjqJOBVA1TTN4N4Sc8bL%2B%2FW2yij3d%2BH5mJ8nBaE3HKV%2FwFs9EQ0pQ3vHsFSXo7tL2qcPT3C%2BEtoarqvNyKVydMy0pJENLwh8kWBstQnHgh7JM3r5JMLxlveaITYtYSU6g0q2Ar8CAfDWhCSoYYhXyOOjQRdP%2B0dJSbdvGkLzvkgbmFD7peBHTEHgqwSruu8w%2Be48pWHM1nJuKpPi8cSffb&X-Amz-Signature=7db02bb2ccc4e0afa32c6d86eba5bc9f9a6c251637c6d7a321461bc52b077b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **아이템 코드선언부**
> > 🔥 **`enum` = 열거형 상수를 표현하기위한것**
> > **상수 숫자들을 보다 의미있는 단어들로 표현**
> > 할 수 있어서 프로그램을 읽기 쉽게 해준다.
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d3a2e6f-b440-43d0-b189-24f462b32c94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KFW2CV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCOo%2BUHrQPWXtt3dv%2Bm8SwB5TOudK2tGcdBaEvi%2BOHvEwIgRDyB7uqxxDsHEBTS5B9ro9iaoYG4TuPyvMMXUHKf77Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGQRCcqt7S7wyaBTTSrcA8rqjKwK9n4Haf1ukaKz%2BnqfI8n92BgBcxw7ZlF2bIVq6%2BQL5yxnezjqSOGPKLBhnQxa%2FOEsCAd%2FA3PGHmZl92ymvsfa6gKjM4ndlfSdv%2F%2FzFPmGwNO3Jq%2FvFG9dVWEG50%2F7KIWf9SbQOdPCRp7AStgkUYwHSFCO47N2FL%2F4v2kDhGbblJHHsjuFuVT%2BVTT%2BpXu8jXYWDBwHvb24MFMKpNlRDTTZJ14IkdrSokg5RHX6SGY1e9x4zsGldHofJRFxwrppn5pB4lfFV6wt2q9VR0pkM09Hg7cdlLOpTyjSsnnAZbbMdYi2WO1YRxGdfp8ME19fDWZnZKeeODxt5QhjELQuARSnoU21vXn%2BUBL82%2FGX4KV3rolU3zw4GDJ8PHT9q9JmZi6Y6IIC4Am2XDmHDQxm3hC8U4JCorDRXA7fPAkIVWZjzH8KV7NvJIfT2UXt5uj5mERw5hZML6GM1yzIjU2C4xZ9YPlceLQbooBV1Nf%2B6zFFTAYwnLL%2FLW9Pe3Yd0Scf4%2FbfMojstG6MZYMYOu%2BNUZjqUl1u25j26TEmKignCJReq%2BVP8tz5LhO9wtylQzYiNd5JNwOlOF%2BX0c0W3P2Z3JIENtwPppvlQgtTyDCHtlEsBtnD5K6uwDJ4MKn1h8QGOqUBq6vTzzyxoR1YPwBIi2HqDUUrHuU8Lygr6GdyyP84lhwRC4aMGNte%2BFNPvgcfONyUhiX%2BeG90T%2BWH%2FttlJKx%2BrRixHDX%2BjAIh1y1sUMF5WnmDp6h525hkWyThdGAxBUTMQpsYciUkpbcohIITCx3Vw09jkCBjr%2FbgzkO2rU0fVrh8S9iPSXljDVm618eAd48IrHST60kwWioVuOZjgj%2FfKp2Wjo6F&X-Amz-Signature=e92844db22c8a766a96aead85ba7db3020dea1e13ee4564b488078ecb69c8b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> ```c#
> public class Item : MonoBehaviour
> {
>     //enum은 타입일뿐, 해당 인덱스에 값을 담기위해 변수를 지정해줘야한다
>     public enum Type {Ammo, Coin, Grande, Heart, Weapon};
>     //enum의 Type을 받기위한 type변수 선언
>     public Type type;
>     public int value;
>
> }
> ```
>
>


---
title: "유니티 로그라이크 02"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "플레이어 이동을 위한 Rigidbody2D 함수와 FixedUpdate 사용법을 설명하며, 속도 조절을 위해 벡터를 노말라이즈하고 GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선하는 방법을 제시합니다."
notion_id: "8f5e0db5-c75c-4700-997d-1b35a3411446"
notion_url: "https://www.notion.so/02-8f5e0db5c75c4700997d1b35a3411446"
---

# 유니티 로그라이크 02

> **Summary**
> 플레이어 이동을 위한 Rigidbody2D 함수와 FixedUpdate 사용법을 설명하며, 속도 조절을 위해 벡터를 노말라이즈하고 GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선하는 방법을 제시합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=YAu4yWU5D5U)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6cba5215-9739-4ac3-81f4-b7fac882fbfa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PLDNK6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDxsII1zvrcOwqJiZqO%2FmpoR0vLyr8K1mqewW%2BSUKECEAiEA83Wqe1TLbvgdBrntqaeW8NtrTNDgx9grKYTNu22Nj%2F4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGlqkfqZWkJjIGBOVCrcA0dwBXlfBKsjU7G4kLQPiT4p%2FfCoqHbmacZZEWsZzLixUBFBz22hmDUR8ixV%2BxRLgjgZZ4Zvb8m%2F9T8GnOYj4MC55veroxVH%2FrQwIlqDn7P2Tp4vBW5%2F1tOaAKBIE0RqubfnzPOtnh7EP%2BrmNbRcoXUHvNcNOAOAFtHyjoxfQIL9iF5Idua1qdDyHkCpzWzySIvorGpA1la%2FPooINL%2FEE%2FohG9REuPSLJkY0e2METlIVd%2BRPOiXtIf1DtKie%2BC337Axa7lXBcr1lcGsosNVw7a3%2FYeQjN6Gd48VemTE8Xreqhz8e32fypSb6g43ZXNS1UxfYbUvzjoWH9P2J4VaSv3SF4IhTgYyvGgV%2FRL0fufa0fbmkc3ePiU%2BDNvSelA5mIHHz%2Byuw6FnDHfx8Sh%2FAEbXiZGF4tFLlGxPRqXs3LBnwjbuwKeorwjnf%2FDjSGbA7rviXxwvKwo813raYMp934Lt4WwGMYmoka9zbR80EZyKVJPGWVLI9raFFNYN7rcDYWjaXxtWyol1wXmUsRZUN2PLCpdIkBlXlMot%2B0V1Zu1eUsvb%2ByrHTuOAYbiuCtOW5l%2Ftm%2BsNGIHKcYS5TpVKbyQHmTtyoI37x35hlJeLjCG7NlAdF5XPnYq1nUxi9MJL1h8QGOqUBrLASiCSmtDK3ZI0cmq82MkvdroqeC9hCRD8HK1zogA7RjhO1fqIf6%2FmSv3fDMnRripXLxpnHhThSzGmTK8BFnE74wIl%2F4Yr4m0xZlLqbuzvqwjI%2F3%2BtCU9FRa96yTNMZvwucCRtvANGfrIXNyWjVsXCXfs%2BJhOY%2FeZuRNQigqAI4V0NWxAgYhsrbnSr6u27XrQSy05Lsng8%2FFYL6pRq%2Bd6V5tCAe&X-Amz-Signature=145cf97c354dc34994a6169b64f268f539be03803c51aa69c0f97c33d67bfcbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **`FixedUdate`는 물리 연산 프레임마다 호출되는 함수다**

> 🔥 **Rigidbody2D 함수 설명 + 플레이어 이동 코드**
> ```c#
> public class Player : MonoBehaviour
> {
>     public Vector2 inputVec;
>     Rigidbody2D rigid;
>
>     void Awake()
>     {
>         rigid = GetComponent<Rigidbody2D>();
>     }
>
>     void Update()
>     {
>         //input키에 Horizontal 은 [left, right] Vertical 은 [up, down] 키가 매핑되어있음
>         inputVec.x = Input.GetAxis("Horizontal");
>         inputVec.y = Input.GetAxis("Vertical");
>     }
>
>     //FixedUdate는 물리 연산 프레임마다 호출되는 함수다
> **    void FixedUpdate() 
>     {
>         //1.힘을 준다
>         rigid.AddForce(inputVec);
>
>         //2.속도제어
>         //Veclocity는 물리적인 속성을 뜻함 (속도를 인풋키로 직접 설정하겠다는 뜻)
>         rigid.velocity = inputVec;
>
>         //3.위치 이동
>         //MovePostion은 위치 이동이라 현재 위치를 더해줘야함
>         //이 코드에서 현재 위치는 rigid.postion 이다
>         //인풋값과 현재위치를 더해주면 플레이어가 나아가야 할 방향을 계산한다
>         rigid.MovePosition(rigid.position + inputVec);
>     }**
> }
> ```
>
>

> 🔥 **근데 플레이어 속도가 너무 빨라서 다음과같이 벡터를 노말라이즈 해주고 델타타임을 곱해줘서 프레임 속도를 고정시켜줍니다**
>
> > 🔥 **노말라이즈를 해주는 이유는 위 1 옆1 을 가더라도 대각선방향은 루트2 다 보니까 속도의 차가 생기니, 모든 방향의 값을 1로 고정시켜줍니다**
>
>
> ```javascript
> //Player.cs
>
> public float speed;
>
> void FixedUpdate() 
>     {
>
>         //어느 방향이든 벡터값을 1로 고정
>         **Vector2 nextVec = inputVec.normalized * speed * Time.deltaTime;**
>
>         //위치 이동
>         //MovePostion은 위치 이동이라 현재 위치를 더해줘야함
>         //이 코드에서 현재 위치는 rigid.postion 이다
>         //인풋값과 현재위치를 더해주면 플레이어가 나아가야 할 방향을 계산한다
>         rigid.MovePosition(rigid.position + nextVec);
>     }
> ```
>
>

> 🔥 **근데 GetAxis특유의 늦은 반응과 슬라이스 이동이 거슬린다**
> ## GetAxis → GetAxisRaw 로 바꾸면 벡터값이 Impulse하게 작동됨 (점차 1까지 올라가는게 아니라 바로 1값을 때려박음)
>
> ```javascript
> inputVec.x = Input.**GetAxisRaw**("Horizontal");
> inputVec.y = Input.**GetAxisRaw**("Vertical");
> ```
>
>


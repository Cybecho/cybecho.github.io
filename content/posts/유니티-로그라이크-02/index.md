---
title: "유니티 로그라이크 02"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "플레이어 이동을 위한 Rigidbody2D 함수 설명과 FixedUpdate의 사용법을 다루며, 입력 벡터를 정규화하고 속도를 제어하는 방법을 설명합니다. GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선할 수 있습니다."
notion_id: "8f5e0db5-c75c-4700-997d-1b35a3411446"
notion_url: "https://www.notion.so/02-8f5e0db5c75c4700997d1b35a3411446"
---

# 유니티 로그라이크 02

> **Summary**
> 플레이어 이동을 위한 Rigidbody2D 함수 설명과 FixedUpdate의 사용법을 다루며, 입력 벡터를 정규화하고 속도를 제어하는 방법을 설명합니다. GetAxis 대신 GetAxisRaw를 사용하여 반응성을 개선할 수 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=YAu4yWU5D5U)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6cba5215-9739-4ac3-81f4-b7fac882fbfa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXXHLO3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDzwsxQBftJ%2F2J%2FoDQV9sst8Z3C4MJlPQIuiqloshM5ewIhAJu7NQBsC7w37bRpExuu79g%2F3RpGJsh%2Fw45ty78koUuyKv8DCC0QABoMNjM3NDIzMTgzODA1IgwqBFMoxH26xqPKcCgq3AP47tFs%2BA4KhPRqao4bAZUmYRDLi7ah3K%2BErYtvKxAQTWTZ3mYNXTEBFk08sXtaodxEaA9ICRao0jSaSyM2ulm%2FCDQwiGLM3CHo9%2BH%2BjZVIi2d4so072vYIfrbnOyPXJI6YdDdsJpxnGv5sljyRx69XLJaxV4ukhelQk0Imrc2bB35qKLJYtl2kmjA7bre%2FBkywv3ZpywLmhnboko5pj%2BiucsZ1eMX2Hvi%2BhIw7ENcVzx70bzqMEZtfECJIh%2B%2F8c6hnk1QCGaAdtK6T4M14Y%2FoX4wr6oZ04R2Y0FIW3h5KSEt05EWZqHMNjOYaBvxNiUsvO0tCjZHcfrKtS79ok0OdAUVj7Jp5%2B46KhL4427WAhIaNcEa8802%2F0LpsgfjjcCrSl1nLD50Ky4HaoMwlQVdRLBjiG%2F1FIC5F0qxowoMXbQNbBWL65Q3oMjFlh8neBLuUeUcXC9R9K%2BdBQDwIsNhZrDBXPlc2BuAyvLi42Qs2vQCiTHK7c2%2BfNNUJvDdE3me8g7TaNtPrdC6fAsICRUYrrDRFl2sDEqUCqIUHxMiyVV3DIqvtuyFajO4SwNsGwvW35v8VNfSBL2641LDpa%2BFWa67qXmxgAkk4OQB6n4a%2FRUJqTaC48q%2FkpnnljVzC5v4jEBjqkAe8bWEKTP3J%2Fr%2B6cDvv3Y9NQkTuWVyL6pNufiJIcnw9LTN3qEXTQGmoh1LXg%2B2AmdHEOG3Pfz2Y2lZfaumwU5otndMTXYe%2Fv5MjPoVqgqYre9KFseG%2F20NEuWqnIsZKQBmM50P4xqMYWn9jpZy9H2GVgFJRfQ5LBchdOL7s2JguBzKnKs4TMnbZ9f1KfIVEJCIlLsDGHHzSrNMH%2FvlSe6dLoh3qo&X-Amz-Signature=192358116a32ae32d17e844950c0206540cc76948e2427ff8eb4d52d15bbabd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


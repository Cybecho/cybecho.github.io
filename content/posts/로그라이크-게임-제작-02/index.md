---
title: "로그라이크 게임 제작 02"
date: 2023-03-15T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "유니티 로그라이크 게임 제작에 관한 내용으로, 플레이어의 이동과 회전 구현, 카메라 따라오기 및 애니메이션 활성화 방법을 설명하고 있습니다. InputSystem을 활용하여 플레이어의 입력을 처리하고, Rigidbody를 사용하여 물리 기반의 이동을 구현합니다."
notion_id: "0d698e28-b4db-41bf-9568-85301bb9e0be"
notion_url: "https://www.notion.so/02-0d698e28b4db41bf956885301bb9e0be"
---

# 로그라이크 게임 제작 02

> **Summary**
> 유니티 로그라이크 게임 제작에 관한 내용으로, 플레이어의 이동과 회전 구현, 카메라 따라오기 및 애니메이션 활성화 방법을 설명하고 있습니다. InputSystem을 활용하여 플레이어의 입력을 처리하고, Rigidbody를 사용하여 물리 기반의 이동을 구현합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/74791255-d29e-4b5d-96d3-728f8c825c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SISPKR3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFaTCu%2BEGAuEmZjD6eDxiUmsDewNm29f%2F2%2F0OXJfPBtKAiEA31ACzmuHtmLhidTK6HiCodr%2BUc%2FwAvnLLXiCnvhWk2Uq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJc5xLExQIGFq8KjoCrcA1Er7uShzXv5SazUjLPsjwZP5eh9SjX9fzUNYY0uzwYNPaduPZ6SsH%2BF0uR%2F1KFY8kIOEKiFTzbN59FvpHaM6HNZTcdCtNUYfMWDLdQRmSIJfd2hKHVVzSOo6GuUskyI8vAsB5j6IZ%2FoXoo8CcLqYQzMeSVqFH%2B04CD62kj%2Bgheegym67ydinEGVCMbNRmn4fhVRpeTZ45igQd6yi6Ae5lhO2tFvyr0Bg4jJFfT5Tz2k61ub%2FoTOr4hSY4I7yj5dVYbFQDtTxEOk4HUzUd97Ukmq21dsBVoB3HCH7NB8qZuJTCY0bAEqtWdrqadDXw13ZL7nOlPdBISRQH%2FnmJk5mneFlhwcKkg5dYtqGwHJW4TI3KcrmgC0GAn8gZnt%2F7%2FkgRS2WbRl2t0hItdxtuD7eqTYziAN4nFUOUIvPkecq0SIAAyEpnlnseASwNo8Du0ewGDHSyhRXOlMAml6kGaOqnuFeS9hYeyuQvxKiNUV1lG5WqEXRj0Jy%2BWsJVhSXdNm15EnShEZ2jBzXe4%2BmRlPO10bEDFrFXA%2FoDoR%2FdctWi%2BTmL%2FtLThZRBqG5%2FZaJTUlPzQEX6TM8O%2BJROC8NS5w7U%2BZiRwRtU3wv8A7FeGzXwy8yK%2BaKsg8XR8FSyQHMLX2h8QGOqUBXu0BaTqqCLPYBTCj6JXwOq410swuCYhL8wFOiwl5oix%2BRwUnNTEDIFONgQtd3CrafNsKRNi44h97U3GBuwOLCb%2FT1yYTFHoW2hUUQmjx5fRnGBRT4mipXkG9i0ayGtuDTSsN736NTuSIFfz81c7oGCZ15ZOp%2BeQKAVjM%2FZYRbT48tOONZxo4ZCsx1hAco2RWidjk%2FmtBY7JSHxJTQhwObcExRpis&X-Amz-Signature=ba39dd4bb6da41c9850f1f5ae0ab21e23e0cd1caa5c1345c81a52758c3e69a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## InputSystem을 활용하면 좋을거같은데 일단은 기존 인풋시스템을 활용했다

```c#
//Player.cs

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem; //새롭게 설치한 Player Input System 을 사용하기 위해 임포트

public class Player : MonoBehaviour
{
    public Vector3 inputVec;
    public float speed;
    Rigidbody rigid;
    
    void Awake()
    {
        rigid = GetComponent<Rigidbody>();
    }

    void Update()
    {
        //input키에 Horizontal 은 [left, right] Vertical 은 [up, down] 키가 매핑되어있음
        inputVec.x = Input.GetAxisRaw("Horizontal");
        inputVec.z = Input.GetAxisRaw("Vertical");
    }

    //FixedUdate는 물리 연산 프레임마다 호출되는 함수다
    void FixedUpdate() 
    {
        //어느 방향이든 벡터값을 1로 고정
        Vector3 nextVec = inputVec.normalized * speed * Time.deltaTime;

        //3.위치 이동
        //MovePostion은 위치 이동이라 현재 위치를 더해줘야함
        //이 코드에서 현재 위치는 rigid.postion 이다
        //인풋값과 현재위치를 더해주면 플레이어가 나아가야 할 방향을 계산한다
        rigid.MovePosition(rigid.position + nextVec);
    }

    void LateUpdate()
    {
        if (inputVec.x != 0)
            this.transform.localScale = new Vector3(-1.5f, 1.5f, 1.5f);
        if (inputVec.x < 0)
            this.transform.localScale = new Vector3(1.5f, 1.5f, 1.5f);
    }
}
```


# 플레이어를 회전시키고 이동시키고 애니메이션을 활성화시켜보자

```c#
void Awake()
{
    rigid = GetComponent<Rigidbody>();
    anim = **GetComponentInChildren**<Animator>();
}


//플레이어 이동 구현
void Move()
{
    //input키에 Horizontal 은 [left, right] Vertical 은 [up, down] 키가 매핑되어있음
    inputVec.x = Input.GetAxisRaw("Horizontal");
    inputVec.z = Input.GetAxisRaw("Vertical");

    //어느 방향이든 벡터값을 1로 고정
    Vector3 nextVec = inputVec.normalized * speed * Time.deltaTime;

    // ... 위치 이동
    //MovePostion은 위치 이동이라 현재 위치를 더해줘야함
    //이 코드에서 현재 위치는 rigid.postion 이다
    //인풋값과 현재위치를 더해주면 플레이어가 나아가야 할 방향을 계산한다
    rigid.MovePosition(rigid.position + nextVec);
    **if(nextVec != Vector3.zero)
        anim.SetFloat("RunState", 0.5f);
    else
        anim.SetFloat("RunState", 0.0f);**
}

//플레이어 회전 구현
void Turn()
{
    **if (inputVec.x != 0)
        this.transform.localScale = new Vector3(-1.5f, 1.5f, 1.5f);
    if (inputVec.x < 0)
        this.transform.localScale = new Vector3(1.5f, 1.5f, 1.5f);**
}
```


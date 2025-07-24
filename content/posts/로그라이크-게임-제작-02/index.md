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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/74791255-d29e-4b5d-96d3-728f8c825c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB42ZA4T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXRvyVkJW%2F1d2eAK8o931RpMcNYeagnm9OBuL0WYt%2FHgIhAJfv0PMdISxqD%2FXAPhn5WcFKxL8o8ax%2F%2FoqSJtR3ljOHKv8DCCkQABoMNjM3NDIzMTgzODA1IgxPlQxyussBs%2BHdr4gq3AN5o1vBwnPGAScj2YPiIF6Yko9bwiOI%2BTMqku8OhCQgBMGUepEN1nGXY31TUm0sw7Yvw2dXfG71D4uy29ClP8ekWzOpuPKFfg%2BEjzoV5iEpAIh6VWb6TMVWFc0sYsgCOpoG%2FeV7W%2BV%2ByUeyBISCVvoN0MyUdOjYSaX7XskGpbrLsVgSo8uzDJEfssm8BZ549%2F1HpiYjIVqolHJkJ12qNlILvH7aQFpldtuAJawznCQTGof%2FiSMLgiA6llDRWYWk4RfXJVg4n7zPsjDxFoYPqXulXG8LO9STuPMAWGut8apa3%2BarL8bGGDLo9I9ryrR49%2FbG1%2F%2FWwnFF9HY6lRBEVlIUhFQYCiHHJupCoHyeDf%2FoFPCpp%2Ff2FPWmfm6RUKUIKNDtZYjir6p77RZJRVkuy%2Bk8zVYEvo%2F5s174ARvRaZ3D49Z23jJ%2FuFvRSGhJeRo1DYKbpWt8eTvDsRkRlKHiujPIWw5klKRsXwGiSJvNIkJ4eVYvHS%2B%2F4d4i%2F9UgWKUgRxcuGgq71vNDO4VeYCQtCPSrXvY02Gw7RhKkrNUuxvKzAfkdAElzfHbLZKQzIlTby%2BTiNPlotmRR7FxoAMJlBV1DHjlbuHbJFbYnG3%2BRIHPvF5CSvaWahoI2dOdwUjCbz4fEBjqkAW3MsT34mvRAe1u9%2Fh1R6qEj8rDOKfISFwSNwR1MQ4HIBnyWfj%2BF9uIgwPTpTIKE79RmDitc19DR%2BBgoptNtZ59kGDlpByrY8RbiFPPeAoU0euf9p4R%2BZROjyUrkMAh2qLM8n0n2uGaFBrfHvX77LIssU%2F6M5BIfs85WE4n8JRertc%2F4%2FvYaYMoEtTr0rKew5mX9vJJu5OI591oPQoET9WqgG7Rp&X-Amz-Signature=0a4bc063bb3fb664d45f3d0a3960efdb99603a6367a683eb6bff73a62e8e9f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


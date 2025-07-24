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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/74791255-d29e-4b5d-96d3-728f8c825c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNUGS6G%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICosQ5LIWUla5Q5%2FWO2Z4OTfXRDQ8BSZMxK4XrjCpZYvAiBPgdG4lPXCPDr1rhVP%2BNeNQMJYacV6HOBPnBCIRkwdpCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMuh12IojhrGzvN%2BvpKtwDbCKcbFrSkvjdOMKMhzmfaFSaucPXuHPI%2FKupKzX9UOzV8gxF7RaL%2B%2FbVKUp3RKADFB0IDxeosPfT0vJLzNnIIsTIJo6zR7ljubjm%2Fn5JhZRwYzOJ478yiU20AhSCGQSP872%2BBS5HjQpVoeuYTWsmFjxkgEXGGsgBfYmXbAY8lWE3cFpR9e%2F9rcVSRXfLbcCthzegbQy2oI6BN32T7aRkOdUjdYOmRxFIzGZqw0qoUhvmVxjgHPvi7ept%2ByPR5j5gN9jUwUFvWlb8%2F%2Fwqyl0AN1J%2BtVKCqSgXzCxVhx7DNmOQ14H9w5sN4O4OKuOiNz3TWDDMPWwO3Q14cybhdLDk1b%2Fj98%2FB8FYXh1sV%2FD%2Fj9gqS6ma1OQEAt9T%2BsKlDZrPN2setPp1ltOMfXVxJJzcObOvBSeSkW3ox33DTaa5XgYh4H1HBBqpPE52dDcCktCrWwNtpbJxVuYuPynHkfnzjB%2BB%2FZtQgfw5UI4E0kN2ZqAQTMdCN%2BBhMoko1CyaEmH%2Bgkek%2B8ibS1eqjZF0%2FaVhmxuanrpbUCfPj4vbVknLDVPgoNkRFq5CObr4NHBCHqMWPEys9vIuaML3y33HG%2BZtEStTitZGpYwkKDPzwsQp4iFuu%2FJfF7l68jkJ%2FKtow3s6HxAY6pgGhcw%2BYrhZLE8cC4rmKrwOD2XpJyte6kXlsZ%2Fnaz%2FefQECd725r3b53dbL48G%2FFBEbDj%2Fm6AKKRMiUMYKGpZ6Ch31Byh4o0FBT5jjtyhZsWc6UmryK9xztnniFJGrvfW%2FFio9Yx2T5g2mO6X4EHaMpw4xfLGeg9x21Cjjb3xbi9IkFrSKwkNIPVcjDJ26KNHagDehJnEcHGNzlFUEzKCNpTHEY0ktOs&X-Amz-Signature=812c93ba9a44abb65243ac8d8f56f4a9586b60daf6a45ebbc00af8203f3dc3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


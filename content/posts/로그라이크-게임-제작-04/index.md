---
title: "로그라이크 게임 제작 04"
date: 2023-03-19T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "화각이 조절되는 카메라 구현을 위해 Rigidbody를 추가해야 Raycast가 제대로 작동하며, Player.cs에 카메라 위치와 FOV를 조정하는 코드를 추가하는 방법을 설명합니다."
notion_id: "1302b435-80ac-4e1b-8512-ef23e7e5a0f8"
notion_url: "https://www.notion.so/04-1302b43580ac4e1b8512ef23e7e5a0f8"
---

# 로그라이크 게임 제작 04

> **Summary**
> 화각이 조절되는 카메라 구현을 위해 Rigidbody를 추가해야 Raycast가 제대로 작동하며, Player.cs에 카메라 위치와 FOV를 조정하는 코드를 추가하는 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5cc5870-3752-432e-933b-78639c08c9a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKSXTXH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAJ2PcL4SZT1GirohPRiERBMxWpJ%2FRcc5pdD%2Bs3ZC7qkAiBF5MEKRWGqY4hor%2BM1BLlKmWExquV8E76UZHVFp1%2FtACr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMQasSZ9Flmi6OBGHVKtwDZzhoOL7l97iTlGygrUBL4n7UPLHsb%2F3vFwdZegeu6%2Bpx4dfjrZjfRX%2BA%2BcQYI7Y06FO%2BiXoTH2yxedKR0O7CqOHaUMLmwiS8b0TU%2FFIUCAGF2ashPnybvPjhYErVcaEMTo7gCEe3Y0O%2FPEX%2BHznbJasZie1mhPOU%2F4r2j4VQARuRzaNnHafoTByZMpvS0OGO77Lh8JOxyxv4MpogeQSEwPe1gk0lExwTvYReoH5qM1VA01M2ARFEC4c7Xp3z7VfrQHhpHmC6iQd8d4IYnNDCzWk2Jh%2FwhN5FDboyajaLIk5z8oK4fgey0fjLCIlU7z%2FzW80UskzfW3XXZZkO4%2F2eG5rsn%2FCU7195fJ3ySh6Y1pU5D%2FfLXj8mKcLVEX5zd7JNnhkA%2BQispuMl3AjAscV5ZPUwetDIDVL4H14d6e4x5WCg3zSZtIeFXP9235S9%2BXyInc%2BcsX0ixkKjr6aABg4oyUsK8%2BUrb6kSVD9%2BzzRAYeixYa9A9gImZOUIfYWxm3YTtXTRCX%2BRi8vEFDQuDhmz4xQ3UdhJNAWVImdytn22Bno83KPtWiyT6vJRKXPW79lKsLsInw6AOqiLTrF2Cm3JPnQthps5AfpjzlGMdWqgYfw2tvKmZcoZSoPohHww1M%2BHxAY6pgGORdaEwBeHNTrlagiQcRv1Uk91JgKXTXN9Phskfn8WnQabltnygua%2F9WHBML6lItiDm5C8LQXOGuuQp%2B8MtWZyG9AxgIVUX6QEOp%2Fpzmat8bkI8z7Eo7%2F4v2py1eQ89tYkK%2FuDh2xvU%2FNIpESlrEomvPLK1zpw1p9EVweWKt1Etr7GSRfbhxeyJCyr2M7q%2BJtobDaB4nj5L7IFlJie23wxJdzhrzAY&X-Amz-Signature=914525671271e5f2626529965796acfe17324217f800ce670aea8558d761cf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## Raycast가 True인 상황에서도 True가 반환이 안되어 머리를 싸매고 그 이유를 알았다


## 바로 Rigidbody도 추가되어야 Raycast가 제대로 충돌을 감지할 수 있다는걸…

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c942329e-ab94-4076-8771-728903c798ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKSXTXH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAJ2PcL4SZT1GirohPRiERBMxWpJ%2FRcc5pdD%2Bs3ZC7qkAiBF5MEKRWGqY4hor%2BM1BLlKmWExquV8E76UZHVFp1%2FtACr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMQasSZ9Flmi6OBGHVKtwDZzhoOL7l97iTlGygrUBL4n7UPLHsb%2F3vFwdZegeu6%2Bpx4dfjrZjfRX%2BA%2BcQYI7Y06FO%2BiXoTH2yxedKR0O7CqOHaUMLmwiS8b0TU%2FFIUCAGF2ashPnybvPjhYErVcaEMTo7gCEe3Y0O%2FPEX%2BHznbJasZie1mhPOU%2F4r2j4VQARuRzaNnHafoTByZMpvS0OGO77Lh8JOxyxv4MpogeQSEwPe1gk0lExwTvYReoH5qM1VA01M2ARFEC4c7Xp3z7VfrQHhpHmC6iQd8d4IYnNDCzWk2Jh%2FwhN5FDboyajaLIk5z8oK4fgey0fjLCIlU7z%2FzW80UskzfW3XXZZkO4%2F2eG5rsn%2FCU7195fJ3ySh6Y1pU5D%2FfLXj8mKcLVEX5zd7JNnhkA%2BQispuMl3AjAscV5ZPUwetDIDVL4H14d6e4x5WCg3zSZtIeFXP9235S9%2BXyInc%2BcsX0ixkKjr6aABg4oyUsK8%2BUrb6kSVD9%2BzzRAYeixYa9A9gImZOUIfYWxm3YTtXTRCX%2BRi8vEFDQuDhmz4xQ3UdhJNAWVImdytn22Bno83KPtWiyT6vJRKXPW79lKsLsInw6AOqiLTrF2Cm3JPnQthps5AfpjzlGMdWqgYfw2tvKmZcoZSoPohHww1M%2BHxAY6pgGORdaEwBeHNTrlagiQcRv1Uk91JgKXTXN9Phskfn8WnQabltnygua%2F9WHBML6lItiDm5C8LQXOGuuQp%2B8MtWZyG9AxgIVUX6QEOp%2Fpzmat8bkI8z7Eo7%2F4v2py1eQ89tYkK%2FuDh2xvU%2FNIpESlrEomvPLK1zpw1p9EVweWKt1Etr7GSRfbhxeyJCyr2M7q%2BJtobDaB4nj5L7IFlJie23wxJdzhrzAY&X-Amz-Signature=6e806c55784128adf67aca02285fe7cee0c8114b3f1072c2e293b9634b44e8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


그리고 Player.cs에 다음과 같은 코드를 추가해줍니다 (고마워요 GPT맨)

```c#
//Player.cs

//캐릭터의 -z방향에서 벽을 만났을경우, Camera의 z값을 고정하고 FOV값을 조정
void StopToWall()
{
    // -3.5는 Raycast의 거리
    //Raycast 시각화
    Debug.DrawRay(transform.position, transform.forward * -3.5f, Color.green);

    Ray ray = new Ray(transform.position, transform.forward * -3.5f);
    isBorder = Physics.Raycast(transform.position, transform.forward, -3.5f, LayerMask.GetMask("Wall"));
    
    if (Physics.Raycast(ray, out RaycastHit hit, 100f))
    {
        if (!isBorder)
        {
            Vector3 cameraPosition = VCamera.transform.position;
            cameraPosition.z = hit.point.z;
            VCamera.transform.position = cameraPosition;

            // Calculate the distance between player and wall
            float distance = Vector3.Distance(transform.position, hit.point);

            //최소화각 최대화각 설정
            float fov = Mathf.Lerp(25f, 45f, distance / 7f);
            VCamera.m_Lens.FieldOfView = fov;
        }
    }
}
```


## 화면 밖을 벗어난 카메라를 제어하는 방법

🎥 [동영상 보기](https://youtu.be/mWqX8GxeCBk)


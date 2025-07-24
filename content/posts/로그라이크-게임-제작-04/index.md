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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5cc5870-3752-432e-933b-78639c08c9a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AX7HPZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICIAHzrly4iYuwnb%2FhGK7Ax07DtDLG7uUFatV4ApwkElAiAVg%2Fl5%2FFEHEpGpgfYU8wnaH6ln0mwLebgE40ZT1U7NOir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMvNSHnzxu%2B0EMXulfKtwDtLrn5DulxdHraCShfS69Nj5euamuPvqVj2NzRMJNN1E%2BclnkAIH7QkgnYHBCpw1fYF%2BdBgxdQ5FPwDFltPovqy2uMxYoavhlmMk6VMvp%2B5XDX3An8XxZIZuZUgteuFrXawFGRbjitk9FnVkdc%2B%2Fr3%2B79Q1V1X3bjH8OX%2Fg5FenHf6TAiCAlN6%2BMOl%2BnZnHQ%2FRCX2A2PTQ6SbbvuEZy7YwLZLj0Stew6Ugz5qsrk8oZCqG6e7PImylRMnq2JHTEytgfP9%2BuzBjk%2FZa9XLYDHiPSfGsopcBXViHjd6IKnqRCEwsvrf52oUq4JBcBp%2B4hWU8ysXBWz0z0M6o8H9BO4ULHMt1YGnw2bAFvaF2n2hUBqSbQill6qeUIEcHoRVuaZ1IWVs8cVCh%2BIqFLjeIQObbmSH9d8i2XzG5CZvpXiKpZullDFnuchvSRcaGxiYzqzfEChp2fk0xYlVHt5OZinsOdV5wvsZFJcofg9F0qWioJR2Hg5BHGXhYAlGjJEu97ewaqKbx%2FeVqskvDg2TslrP1RbU9MRDyyfENZiRUpzqKeCAPXwQSUgF783fcU%2FoNl8tZDDfAV0faFkJXLL%2BCmIQszVhsVq2yxQtcxuM%2Ftrp3is65B7AUw0tP97m3dMwhdCHxAY6pgHzuXTMG3LFkiSAG%2Fbc51mQb8CW42wJQBft4xzcRZaTnGnt%2FyHhb%2Br0Uci8fHtSjsh8loSIjX2Spbbp%2F7Oq7t6S2zMlMlcmrLGHYWyR98IE1hgbo481jxcPfFJqZd7qPaQSB4jCM9SaKodvVYpXgVml9YYAEaPuG351pewh5SdtE12uq6ChjjSYF8014VITVE2DRLBPC2dBP7eo8lTyIEaPEXVXkuJy&X-Amz-Signature=cc8bc4e11eeb9da6c269fe2ecd06d41d1b08176ec342d68c21d671624434aec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## Raycast가 True인 상황에서도 True가 반환이 안되어 머리를 싸매고 그 이유를 알았다


## 바로 Rigidbody도 추가되어야 Raycast가 제대로 충돌을 감지할 수 있다는걸…

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c942329e-ab94-4076-8771-728903c798ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AX7HPZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICIAHzrly4iYuwnb%2FhGK7Ax07DtDLG7uUFatV4ApwkElAiAVg%2Fl5%2FFEHEpGpgfYU8wnaH6ln0mwLebgE40ZT1U7NOir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMvNSHnzxu%2B0EMXulfKtwDtLrn5DulxdHraCShfS69Nj5euamuPvqVj2NzRMJNN1E%2BclnkAIH7QkgnYHBCpw1fYF%2BdBgxdQ5FPwDFltPovqy2uMxYoavhlmMk6VMvp%2B5XDX3An8XxZIZuZUgteuFrXawFGRbjitk9FnVkdc%2B%2Fr3%2B79Q1V1X3bjH8OX%2Fg5FenHf6TAiCAlN6%2BMOl%2BnZnHQ%2FRCX2A2PTQ6SbbvuEZy7YwLZLj0Stew6Ugz5qsrk8oZCqG6e7PImylRMnq2JHTEytgfP9%2BuzBjk%2FZa9XLYDHiPSfGsopcBXViHjd6IKnqRCEwsvrf52oUq4JBcBp%2B4hWU8ysXBWz0z0M6o8H9BO4ULHMt1YGnw2bAFvaF2n2hUBqSbQill6qeUIEcHoRVuaZ1IWVs8cVCh%2BIqFLjeIQObbmSH9d8i2XzG5CZvpXiKpZullDFnuchvSRcaGxiYzqzfEChp2fk0xYlVHt5OZinsOdV5wvsZFJcofg9F0qWioJR2Hg5BHGXhYAlGjJEu97ewaqKbx%2FeVqskvDg2TslrP1RbU9MRDyyfENZiRUpzqKeCAPXwQSUgF783fcU%2FoNl8tZDDfAV0faFkJXLL%2BCmIQszVhsVq2yxQtcxuM%2Ftrp3is65B7AUw0tP97m3dMwhdCHxAY6pgHzuXTMG3LFkiSAG%2Fbc51mQb8CW42wJQBft4xzcRZaTnGnt%2FyHhb%2Br0Uci8fHtSjsh8loSIjX2Spbbp%2F7Oq7t6S2zMlMlcmrLGHYWyR98IE1hgbo481jxcPfFJqZd7qPaQSB4jCM9SaKodvVYpXgVml9YYAEaPuG351pewh5SdtE12uq6ChjjSYF8014VITVE2DRLBPC2dBP7eo8lTyIEaPEXVXkuJy&X-Amz-Signature=96ecebb5953eeed981ff0684f80c3f3fd904f1b2039ffca5cbe0e7de999c48f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


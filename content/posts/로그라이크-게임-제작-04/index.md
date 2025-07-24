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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5cc5870-3752-432e-933b-78639c08c9a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655I6PGUF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAx2g5i6TdEq3gx6PWELdOWvBaAt4vNySbWcnGMRNJawAiEAn6Ctc7cjBxe4e30MzLWVHdITInglTn%2Fx8HyD2%2FBbX1gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIsuD7Q9RNwthPa2aircA%2FhMiYt4CYp95GueX3sAGgaNWbTajCPRu0fZGip7JiX0AAp9pTonAjlCWNZJdJ6o6FD%2BRdFgxoOODGs7G9GJcqZH0cfaDSC%2FZQ%2BuX%2FsUda0AbW664BqHFKIHHfJLDTVBRTUFh5c75J208vLLMYsRY%2FiPoie85SIhMUslDY%2FckoQ%2BJ2ZLnU9W8aUq6SiTYpTQEeWvQkf0wWCrzVMB6KW6JUPsF8QmSTO%2BqqScc8M6M%2FgDJ5MRUQfcinwfxrAEtTnMuxeyJqZ8sd%2FmSrQwuEoUopwskfne%2Bks6e6dZU6BpmXWYLkikbqxaAZgi0Gu4YlzffXCwrh%2FlV8Q4G8Hr2Up3O8g9H3tIiSwqq1ulpsOyL%2FZ8MBCACsxHWGCr8HzJYZEsh6mgAnYSKNcxIIY20vT9fZFFepDSddaMM6%2BQRhp04AiG7qUp68JXGmSn0waqa76FI1hLoWP1Kk5srP0Uqjq6AhX%2FTEVFCeXZf%2Bp5PaIc4nQlF7opCKc7OiwB9j6bp%2BwoD4AIN%2Fad8OP8Q8TqpIPUMG2z0OKwQKUFPs9RPGED5QvOaJcLMXpI7pbkdWucLM9hZkSrxIkLd3qTtGzN%2BK4mUXofcEl0Eibop91A67JwGc3CCCNlbEESnRGd7kEgMOD2h8QGOqUBMLZe7oSk6U8HcmeCCT%2FZSKSL23VgHocS6cNhhuLTDfHQGkqgEXmyoFv0JcrI1shi22HbcU8wcWn5690iS7sSDS5xCHlM1m3Bj9Hg9lrYvEq%2FLOkuWQ1JQ%2B5V7K1xGU1J4%2BY0OdUYM40P0At4QfgagaD3IUhF%2FcmpKbZzznxq4rBNcIsRWV9gnaOjL9eNHK4yXgnFhrs7cnWtHrghAwu2AakjgtHU&X-Amz-Signature=b41e1d3278454111cd8ae4ad3e081a950fcd1a2b35794df0d09ed7238661b646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## Raycast가 True인 상황에서도 True가 반환이 안되어 머리를 싸매고 그 이유를 알았다


## 바로 Rigidbody도 추가되어야 Raycast가 제대로 충돌을 감지할 수 있다는걸…

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c942329e-ab94-4076-8771-728903c798ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655I6PGUF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAx2g5i6TdEq3gx6PWELdOWvBaAt4vNySbWcnGMRNJawAiEAn6Ctc7cjBxe4e30MzLWVHdITInglTn%2Fx8HyD2%2FBbX1gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIsuD7Q9RNwthPa2aircA%2FhMiYt4CYp95GueX3sAGgaNWbTajCPRu0fZGip7JiX0AAp9pTonAjlCWNZJdJ6o6FD%2BRdFgxoOODGs7G9GJcqZH0cfaDSC%2FZQ%2BuX%2FsUda0AbW664BqHFKIHHfJLDTVBRTUFh5c75J208vLLMYsRY%2FiPoie85SIhMUslDY%2FckoQ%2BJ2ZLnU9W8aUq6SiTYpTQEeWvQkf0wWCrzVMB6KW6JUPsF8QmSTO%2BqqScc8M6M%2FgDJ5MRUQfcinwfxrAEtTnMuxeyJqZ8sd%2FmSrQwuEoUopwskfne%2Bks6e6dZU6BpmXWYLkikbqxaAZgi0Gu4YlzffXCwrh%2FlV8Q4G8Hr2Up3O8g9H3tIiSwqq1ulpsOyL%2FZ8MBCACsxHWGCr8HzJYZEsh6mgAnYSKNcxIIY20vT9fZFFepDSddaMM6%2BQRhp04AiG7qUp68JXGmSn0waqa76FI1hLoWP1Kk5srP0Uqjq6AhX%2FTEVFCeXZf%2Bp5PaIc4nQlF7opCKc7OiwB9j6bp%2BwoD4AIN%2Fad8OP8Q8TqpIPUMG2z0OKwQKUFPs9RPGED5QvOaJcLMXpI7pbkdWucLM9hZkSrxIkLd3qTtGzN%2BK4mUXofcEl0Eibop91A67JwGc3CCCNlbEESnRGd7kEgMOD2h8QGOqUBMLZe7oSk6U8HcmeCCT%2FZSKSL23VgHocS6cNhhuLTDfHQGkqgEXmyoFv0JcrI1shi22HbcU8wcWn5690iS7sSDS5xCHlM1m3Bj9Hg9lrYvEq%2FLOkuWQ1JQ%2B5V7K1xGU1J4%2BY0OdUYM40P0At4QfgagaD3IUhF%2FcmpKbZzznxq4rBNcIsRWV9gnaOjL9eNHK4yXgnFhrs7cnWtHrghAwu2AakjgtHU&X-Amz-Signature=b2c0cc7b9c36b599aa4460453bd9cf96ac667525c20931f611c6957c990472cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


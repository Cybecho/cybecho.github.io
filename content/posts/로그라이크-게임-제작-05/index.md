---
title: "로그라이크 게임 제작 05"
date: 2023-03-20T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "무한 맵 구현을 위한 C# 코드와 알고리즘을 설명하며, 플레이어의 위치에 따라 맵 프리팹을 재배치하는 방법을 다룹니다. 플레이어와 프리팹 간의 거리 차이를 계산하여 특정 조건을 만족할 때 프리팹을 이동시키는 로직이 포함되어 있습니다."
notion_id: "97fe70d5-bcf1-49d4-921a-55346d46e2b6"
notion_url: "https://www.notion.so/05-97fe70d5bcf149d4921a55346d46e2b6"
---

# 로그라이크 게임 제작 05

> **Summary**
> 무한 맵 구현을 위한 C# 코드와 알고리즘을 설명하며, 플레이어의 위치에 따라 맵 프리팹을 재배치하는 방법을 다룹니다. 플레이어와 프리팹 간의 거리 차이를 계산하여 특정 조건을 만족할 때 프리팹을 이동시키는 로직이 포함되어 있습니다.

---

## 참고 코드

```c#
//Reposition.cs

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Reposition : MonoBehaviour
{
    //트리거가 체크된 콜라이더를 벗어났을때
    //이를 위해 플레이어에 Area를 만들었다 (충돌여부를 확인하기 위해)
    void OnTriggerExit(Collider collision)
    {
        //이 콜라이더의 주인
        //만약 Area태그가 아닌다면 코드를 실행하지 않겠다 라는 뜻
        if(!collision.CompareTag("Area"))
        {
            Debug.Log("Area태그 아님");
            return;
        }
        //거리를 구하기 위해 플레이어 위치와 타일맵 위치를 미리 저장
        
        //플레이어 위치
        //플레이어 포지션을 가져오기위해 게임매니저에 저장해둔 플레이어에서 위치값을 가져오는 과정
        Vector3 playerPos = GameManager.instance.player.transform.position;
        
        //타일맵 위치
        //현재 이 스크립트가 들어있는 타일맵의 위치값
        Vector3 myPos = transform.position; 
        
        //x축과 z축 각각의 거리를 구하는 코드
        //Mathf 는 수학 라이브러리.. 절대값을 구하기 위해 Abs를 불러옴
        float diffX = Mathf.Abs(playerPos.x - myPos.x);
        float diffZ = Mathf.Abs(playerPos.z - myPos.z);


        //플레이어의 이동 방향을 저장하기 위한 변수
        //플레이어에서 미리 만들어뒀던 inputVec을 불러온다
        Vector3 playerDir = GameManager.instance.player.inputVec;
        //Player에서 노멀라이즈를 했기때문에 1값이 안나오니 0보다 클때(좌우 이동할때) 값을 받아온다 
        float dirX = playerDir.x < 0 ? -1 : 1;
        float dirZ = playerDir.z < 0 ? -1 : 1;

        //나중에 적이 추가되었을때 적들도 재배치를 요구하기때문에 여기서 필터를 만들어준다
        switch (transform.tag)
        {
            case "Ground":
                if (diffX > diffZ)
                {
                    //Translate : 지정된 값 만큼 현재 위치에서 이동한다
                    //Translate(이동방향,플레이어방향,Area의크기,)
                    //40을 곱해준 이유는 Tilemap을 4개 복사해서 쓸거기 때문에 타일맵의 총 합을 구하면 40이된다
                    transform.Translate(Vector3.right * dirX * 40);
                }
                else if (diffX < diffZ)
                {
                    transform.Translate(Vector3.right * dirX * -40);
                }
                break;
            case "Enemy":
                break;
        }
    }
}
```



## 알고리즘

1. 맵 프리팹은 총 0.1,2,3,4 즉 5개 시작은 2
  1. 0 = ( -40 , 0 )
  1. 1 = ( -20 , 0 )
  1. 2는 (  0  ,  0  )
  1. 3 = ( +20 , 0 )
  1. 4 = ( +40 , 0 )
1. 현재 플레이어와 abs(60) 이상 차이날 경우 격차가 벌어진 프리팹을 플레이어의 이동 방향 + 100 만큼 이동시킴
  1. 플레이어가 이동방향으로 20 이상 이동헀을경우 가장 먼 프리팹에 abs(100) 을 더함
  1. 플레이어의 방향 x축 + ( (1 or -1) * abs(100))
|   |   |   | Player |   |   |   |
|---|---|---|---|---|---|---|
|   | 0 | 1 | 2 | 3 | 4 |   |
|---|---|---|---|---|---|---|
|   | -40 , 0 | -20 , 0 | 0 , 0 | 20 , 0 | 40 , 0 |   |

|   | Move |   |   | Player |   | +100 |
|---|---|---|---|---|---|---|
|   | 0 | 1 | 2 | 3 | 4 | 0 |
|---|---|---|---|---|---|---|
|   | -40 , 0 | -20 , 0 | 0 , 0 | 20 , 0 | 40 , 0 | 60,0 |

1. (해당 알고리즘 다)플레이어의 위치를 기준으로 가장 멀리있는 (플레이어 위치 - 프리팹의 위치) 가
  1. 양수일 경우 (플레이어 방향은 +1)
  1. 음수일 경우 (플레이어 방향은 -1)

## 프리팹이 플레이어와 60 이상 거리가 차이나면 그 프리팹은 이동방향(1 , -1) * 100 을 함


# 구현 코드

```c#
//Reposition.cs

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Reposition : MonoBehaviour
{

    public Transform groundSize;

    void Update() 
    {
        moveMap();
    }
    //트리거가 체크된 콜라이더를 벗어났을때
    //이를 위해 플레이어에 Area를 만들었다 (충돌여부를 확인하기 위해)
    void moveMap()
    {
        //프리팹의 크기를 자동으로 계산
        Vector3 mapSize = groundSize.transform.localScale;

        // ... 거리를 구하기 위해 플레이어 위치와 타일맵 위치를 미리 저장
        
        //플레이어 위치
        //플레이어 포지션을 가져오기위해 게임매니저에 저장해둔 플레이어에서 위치값을 가져오는 과정
        Vector3 playerPos = GameManager.instance.player.transform.position;
        
        //타일맵 위치
        //현재 이 스크립트가 들어있는 타일맵의 위치값
        Vector3 tilePos = transform.position; 

        //x축과 z축 각각의 거리를 구하는 코드
        //Mathf 는 수학 라이브러리.. 절대값을 구하기 위해 Abs를 불러옴
        float diffX = Mathf.Abs(playerPos.x - tilePos.x);

        //플레이어의 이동 방향을 저장하기 위한 변수
        //플레이어에서 미리 만들어뒀던 inputVec을 불러온다
        Vector3 playerDir = GameManager.instance.player.inputVec;
        //Player에서 노멀라이즈를 했기때문에 1값이 안나오니 0보다 클때(좌우 이동할때) 값을 받아온다 
        float dirX = playerDir.x < 0 ? -1 : 1;

        //일정거리 이동했을때 플레이어에서 가장 먼 프리팹을 플레이어 방향으로 이동
        if (diffX >= (mapSize.x * 3))
            transform.Translate(Vector3.right * dirX * (mapSize.x * 5));
    }
}
```

1. groundSize를 전역변수로 설정하여 이 코드를 가지고있는 객체의 mapsize에따라 코드가 작동하도록 변수로 설정했음
1. 기존 콜라이더 방식에서 update 함수방식으로 변경함

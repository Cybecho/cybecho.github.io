---
title: "로그라이크 게임 제작 06"
date: 2023-03-21T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "맵 로드시 랜덤 디자인 패턴을 적용하여 다양한 맵을 생성하는 방법에 대해 설명합니다. 여러 패턴을 enum으로 정의하고, 비활성화된 패턴 중 하나를 랜덤으로 활성화하여 맵이 이동할 때마다 디자인이 변경되도록 합니다. 이를 위해 GameObject 리스트를 선언하고, 맵 이동 시 랜덤 패턴을 불러오는 기능을 구현합니다."
notion_id: "a31ff9e4-ec22-452c-bd56-222bf041d922"
notion_url: "https://www.notion.so/06-a31ff9e4ec22452cbd56222bf041d922"
---

# 로그라이크 게임 제작 06

> **Summary**
> 맵 로드시 랜덤 디자인 패턴을 적용하여 다양한 맵을 생성하는 방법에 대해 설명합니다. 여러 패턴을 enum으로 정의하고, 비활성화된 패턴 중 하나를 랜덤으로 활성화하여 맵이 이동할 때마다 디자인이 변경되도록 합니다. 이를 위해 GameObject 리스트를 선언하고, 맵 이동 시 랜덤 패턴을 불러오는 기능을 구현합니다.

---

enum 으로 여러개의 패턴 디자인을 넣어두고 

기존 프리팹에는 전부 비활성화 해둠

맵이 이동했을때 랜덤으로 비활성화해둔 패턴 중 하나가 즉 enum의 요소중 하나가 case문으로 (확률) 활성화되도록하여 다채로운 맵이라고 느껴지게함


## 랜덤맵 디자인이 저장될 GameObject 리스트를 선언 및 초기화

```c#
//Reposition.cs

// ... 프리팹 보관할 변수
public GameObject[] prefabs;

// ... 풀 담당을 하는 리스트들
//리스트도 프리팹의 개수만큼 생성되어야하니 배열로 선언해준다
List<GameObject>[] prefabsList;

void Awake() 
{
    //리스트기때문에 new를 만들어줘야함
    //List 배열의 크기는 prefabs배열과 동일하기때문에 배열에 Prefabs의 길이를 넣어준다
    prefabsList = new List<GameObject>[prefabs.Length];

    //for문으로 배열 내부 오브젝트들을 모두 초기화해준다
    for (int index = 0; index < prefabsList.Length; index++)
    {
        //각각의 리스트들도 전부 초기화해줌
        prefabsList[index] = new List<GameObject>();
    }
}
```

## 맵이 이동할때마다 저장된 디자인패턴을 랜덤으로 불러오는 기능을 `**randTile()**` 함수로 선언


Awake() 에도 포함시켜야합니

```c#
//Reposition.cs


void moveMap()
{
    Vector3 mapSize = groundSize.transform.localScale;
    Vector3 playerPos = GameManager.instance.player.transform.position;
    
    Vector3 tilePos = transform.position; 
void setRandTile()
    {
        for (int index = 0; index < prefabsList.Length; index++)
            prefabs[index].SetActive(false);
        
        prefabs[Random.Range(0, prefabsList.Length)].SetActive(true);
    }
    float diffX = Mathf.Abs(playerPos.x - tilePos.x);

    Vector3 playerDir = GameManager.instance.player.inputVec;
    float dirX = playerDir.x < 0 ? -1 : 1;

    //맵이 이동할때마다 맵 디자인이 랜덤으로 변합니다
    if (diffX >= (mapSize.x * 3))
    {
        transform.Translate(Vector3.right * dirX * (mapSize.x * 5));
        **randTile();**
    }
}

**//prefab에 등록한 프리팹을 초기화하고 랜덤으로 Active 하는 코드
void randTile()
{
    for (int index = 0; index < prefabsList.Length; index++)
        prefabs[index].SetActive(false);
    
    prefabs[Random.Range(0, prefabsList.Length)].SetActive(true);
}**
```


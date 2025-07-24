---
title: "유니티로 플러피 게임 클론 개발02"
date: 2023-02-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 플러피 게임 클론 개발"]
description: "유니티에서 플러피 게임 클론을 개발하는 방법: 특정 초 후에 오브젝트 삭제, UI 생성 및 점수 증가를 위한 Collider 설정, 게임 오버 씬 구성 방법을 설명합니다."
notion_id: "b4b74f0f-fe84-4f61-9ef2-1f438c04a435"
notion_url: "https://www.notion.so/02-b4b74f0ffe844f619ef21f438c04a435"
---

# 유니티로 플러피 게임 클론 개발02

> **Summary**
> 유니티에서 플러피 게임 클론을 개발하는 방법: 특정 초 후에 오브젝트 삭제, UI 생성 및 점수 증가를 위한 Collider 설정, 게임 오버 씬 구성 방법을 설명합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=EqoU1PodQQ4&t=460s)

# 프리팹 수정 후 오버라이즈 꼭 Apply

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4c19d9ad-fd43-480a-9efc-7661f1800dfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7WUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDZPOTiNWnBNG8T1gp31hZjGCqvgqrf%2Bq5Tn5ZwSl975AIhAMNEKmNt54dOGYq4YJ5qUZcl3IMj6tp%2F5%2FXXNaWFWEhZKv8DCCkQABoMNjM3NDIzMTgzODA1Igxi5q2GWPKhGdvvXhQq3APYub2SopI%2FwUfwr3VbxkgZ7q7OYkIfl%2FbIBTAZHxa2aNxUu1v9OluQsVBCZwFc4Yh3sq6PrQzB2Spsrf3JSPSdqVWuK6690yj60DI3CDuuM%2F1dWI9xbfOidsg3wdFTCC%2BZJtK0GJYfLRZay%2BKi6HqUaB9zFi7TP3wh6qgUBP1%2FG0rxkReaVqI7VBclEOpjGCDSpnxQla2JDxKo0U6OiMzv49iTacMQnUN9gJ6FiW%2BrXRejQX9yJKrtQC4CZdXl8Ed%2B285fXfxjWd7rbp36pS0B2m6R0L7UCNbP2BH8w3ElNr8m1C5VZFn%2FufBXLsWXcSPcyKgOcLjNgzm5kuQgKAvm0oAK%2BS9BB%2Br5hBpRao4oVJmJeXkiYDeOxO8b6GhY1M8QXsMyuTNJdACPokkAVxUtQ9dlN7pm9c7P%2FQA99jtyHrX8bkr5y2aFGobkXCNZiqpNQzWuwxBa6MjbbNbK7Zo%2F1BVSZzcxZ8A89UYs66QFKlBNWg%2BCSL2jujHgfYKQUFFZRdSeNC1BHHLy39BVY%2Fa%2BWWZfgKxcjxmj3HTA4e261VQmQW1Z3AojkOyUiiN0L6sBVKmI1TFhJTOokmwC3aPg3qpopN%2FrZN71DjSMplfXWsjQVOhhgyS0Y2Wb6DDazofEBjqkAZ0%2B7naP2pQAz5gahLH%2FCpB60NqxYuw63vq0%2FE%2Fcvu1SpSAaOVEO%2BDskrWoOK5gaqfXdPyaOkTOj8fJWRtr%2Bt0lLc55gMb2GU%2BTe9HVzou4%2BHX5fLzO1wMF4%2BHKJ7aGv4rcdAgTSnLoJoNa%2BDChm9AGJxD%2FsRPt23KFZ0%2BOPo9pf9s6T55VPoxeSf0qozeruftVpG%2FnZORxsyQpkFClAWd8OCUAx&X-Amz-Signature=d34224b5087edbc1e6657e7aea959710d296b3f38873334fbae0c6c80d5f5ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
//제네레이터 내부 스크립트 파일에서 특정 초 이상 지나가면 오브젝트를 삭제하는 코드
//5초 뒤 생성된 newpipe를 삭제하는 코드

Destroy(newpipe,5.0f);
```

## UI 생성방법

하이어라키에서 우클릭 - UI - Canvas

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b878d2e-a01a-4fd4-b4a0-3a0c78b446c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7WUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDZPOTiNWnBNG8T1gp31hZjGCqvgqrf%2Bq5Tn5ZwSl975AIhAMNEKmNt54dOGYq4YJ5qUZcl3IMj6tp%2F5%2FXXNaWFWEhZKv8DCCkQABoMNjM3NDIzMTgzODA1Igxi5q2GWPKhGdvvXhQq3APYub2SopI%2FwUfwr3VbxkgZ7q7OYkIfl%2FbIBTAZHxa2aNxUu1v9OluQsVBCZwFc4Yh3sq6PrQzB2Spsrf3JSPSdqVWuK6690yj60DI3CDuuM%2F1dWI9xbfOidsg3wdFTCC%2BZJtK0GJYfLRZay%2BKi6HqUaB9zFi7TP3wh6qgUBP1%2FG0rxkReaVqI7VBclEOpjGCDSpnxQla2JDxKo0U6OiMzv49iTacMQnUN9gJ6FiW%2BrXRejQX9yJKrtQC4CZdXl8Ed%2B285fXfxjWd7rbp36pS0B2m6R0L7UCNbP2BH8w3ElNr8m1C5VZFn%2FufBXLsWXcSPcyKgOcLjNgzm5kuQgKAvm0oAK%2BS9BB%2Br5hBpRao4oVJmJeXkiYDeOxO8b6GhY1M8QXsMyuTNJdACPokkAVxUtQ9dlN7pm9c7P%2FQA99jtyHrX8bkr5y2aFGobkXCNZiqpNQzWuwxBa6MjbbNbK7Zo%2F1BVSZzcxZ8A89UYs66QFKlBNWg%2BCSL2jujHgfYKQUFFZRdSeNC1BHHLy39BVY%2Fa%2BWWZfgKxcjxmj3HTA4e261VQmQW1Z3AojkOyUiiN0L6sBVKmI1TFhJTOokmwC3aPg3qpopN%2FrZN71DjSMplfXWsjQVOhhgyS0Y2Wb6DDazofEBjqkAZ0%2B7naP2pQAz5gahLH%2FCpB60NqxYuw63vq0%2FE%2Fcvu1SpSAaOVEO%2BDskrWoOK5gaqfXdPyaOkTOj8fJWRtr%2Bt0lLc55gMb2GU%2BTe9HVzou4%2BHX5fLzO1wMF4%2BHKJ7aGv4rcdAgTSnLoJoNa%2BDChm9AGJxD%2FsRPt23KFZ0%2BOPo9pf9s6T55VPoxeSf0qozeruftVpG%2FnZORxsyQpkFClAWd8OCUAx&X-Amz-Signature=51f6abafcc987494cb1407737251e3c5516a559d2c108cb24d7cf9d7ccb6b22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **Rect Transform?**


## UI스크립트 작성

```c#
using UnityEngine.UI;
```

스크립트 내부에서 해당 라이브러리를 임포트해준다

```c#
//Score.cs

using UnityEngine.UI;

public class Score : MonoBehaviour
{
    public static int score = 0;
		//static을 선언하여 고정변수로 할당
		//박스콜라이더에 닿았을 때 점수를 올리기 위해서 public static으로 할당
		//ScoreUp.cs에서 점수를 올려서 이 스크립트의 변수를 사용할 수 있게된다
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        GetComponent<Text>().text = score.ToString();
				//Score 점수를 화면상에 나타내기 위해서
    }
}
```

## 점수 증가 Collider 생성

Prefab 내부에 Empty 생성하여 Box Collider 생성

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c51fdadf-63fd-4421-82c5-22a0de8c679f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7WUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDZPOTiNWnBNG8T1gp31hZjGCqvgqrf%2Bq5Tn5ZwSl975AIhAMNEKmNt54dOGYq4YJ5qUZcl3IMj6tp%2F5%2FXXNaWFWEhZKv8DCCkQABoMNjM3NDIzMTgzODA1Igxi5q2GWPKhGdvvXhQq3APYub2SopI%2FwUfwr3VbxkgZ7q7OYkIfl%2FbIBTAZHxa2aNxUu1v9OluQsVBCZwFc4Yh3sq6PrQzB2Spsrf3JSPSdqVWuK6690yj60DI3CDuuM%2F1dWI9xbfOidsg3wdFTCC%2BZJtK0GJYfLRZay%2BKi6HqUaB9zFi7TP3wh6qgUBP1%2FG0rxkReaVqI7VBclEOpjGCDSpnxQla2JDxKo0U6OiMzv49iTacMQnUN9gJ6FiW%2BrXRejQX9yJKrtQC4CZdXl8Ed%2B285fXfxjWd7rbp36pS0B2m6R0L7UCNbP2BH8w3ElNr8m1C5VZFn%2FufBXLsWXcSPcyKgOcLjNgzm5kuQgKAvm0oAK%2BS9BB%2Br5hBpRao4oVJmJeXkiYDeOxO8b6GhY1M8QXsMyuTNJdACPokkAVxUtQ9dlN7pm9c7P%2FQA99jtyHrX8bkr5y2aFGobkXCNZiqpNQzWuwxBa6MjbbNbK7Zo%2F1BVSZzcxZ8A89UYs66QFKlBNWg%2BCSL2jujHgfYKQUFFZRdSeNC1BHHLy39BVY%2Fa%2BWWZfgKxcjxmj3HTA4e261VQmQW1Z3AojkOyUiiN0L6sBVKmI1TFhJTOokmwC3aPg3qpopN%2FrZN71DjSMplfXWsjQVOhhgyS0Y2Wb6DDazofEBjqkAZ0%2B7naP2pQAz5gahLH%2FCpB60NqxYuw63vq0%2FE%2Fcvu1SpSAaOVEO%2BDskrWoOK5gaqfXdPyaOkTOj8fJWRtr%2Bt0lLc55gMb2GU%2BTe9HVzou4%2BHX5fLzO1wMF4%2BHKJ7aGv4rcdAgTSnLoJoNa%2BDChm9AGJxD%2FsRPt23KFZ0%2BOPo9pf9s6T55VPoxeSf0qozeruftVpG%2FnZORxsyQpkFClAWd8OCUAx&X-Amz-Signature=13367462a07bf6bc931e3b7e178f98356976e4a67cfc77a51f440516ffdd5974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Is Trigger를 선택해둬야 콜라이더가 아니라 트리거 설정이되서 물리적 충돌이 생기지 않는다


그 후 다음과같은 코드 작성

```c#
//ScoreUp.cs

public class ScoreUp : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other) {
        Score.score++;
    }
}
```

보시다시피 Start / Update 없이 스코어에 점수를 할당


## GameOver 씬

게임오버 씬 생성하고 UI 캔버스 생성하고 패널 추가하여 백그라운드 추가 후 Image추가해서 사진넣을때 Preserve Aspect 추가해두면 이미지 비율에 맞게 크기 설정 가능

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5e2c51dd-2557-4379-9307-180d986da3f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7WUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDZPOTiNWnBNG8T1gp31hZjGCqvgqrf%2Bq5Tn5ZwSl975AIhAMNEKmNt54dOGYq4YJ5qUZcl3IMj6tp%2F5%2FXXNaWFWEhZKv8DCCkQABoMNjM3NDIzMTgzODA1Igxi5q2GWPKhGdvvXhQq3APYub2SopI%2FwUfwr3VbxkgZ7q7OYkIfl%2FbIBTAZHxa2aNxUu1v9OluQsVBCZwFc4Yh3sq6PrQzB2Spsrf3JSPSdqVWuK6690yj60DI3CDuuM%2F1dWI9xbfOidsg3wdFTCC%2BZJtK0GJYfLRZay%2BKi6HqUaB9zFi7TP3wh6qgUBP1%2FG0rxkReaVqI7VBclEOpjGCDSpnxQla2JDxKo0U6OiMzv49iTacMQnUN9gJ6FiW%2BrXRejQX9yJKrtQC4CZdXl8Ed%2B285fXfxjWd7rbp36pS0B2m6R0L7UCNbP2BH8w3ElNr8m1C5VZFn%2FufBXLsWXcSPcyKgOcLjNgzm5kuQgKAvm0oAK%2BS9BB%2Br5hBpRao4oVJmJeXkiYDeOxO8b6GhY1M8QXsMyuTNJdACPokkAVxUtQ9dlN7pm9c7P%2FQA99jtyHrX8bkr5y2aFGobkXCNZiqpNQzWuwxBa6MjbbNbK7Zo%2F1BVSZzcxZ8A89UYs66QFKlBNWg%2BCSL2jujHgfYKQUFFZRdSeNC1BHHLy39BVY%2Fa%2BWWZfgKxcjxmj3HTA4e261VQmQW1Z3AojkOyUiiN0L6sBVKmI1TFhJTOokmwC3aPg3qpopN%2FrZN71DjSMplfXWsjQVOhhgyS0Y2Wb6DDazofEBjqkAZ0%2B7naP2pQAz5gahLH%2FCpB60NqxYuw63vq0%2FE%2Fcvu1SpSAaOVEO%2BDskrWoOK5gaqfXdPyaOkTOj8fJWRtr%2Bt0lLc55gMb2GU%2BTe9HVzou4%2BHX5fLzO1wMF4%2BHKJ7aGv4rcdAgTSnLoJoNa%2BDChm9AGJxD%2FsRPt23KFZ0%2BOPo9pf9s6T55VPoxeSf0qozeruftVpG%2FnZORxsyQpkFClAWd8OCUAx&X-Amz-Signature=d630e8ce22fa59848db8e33a1bac2956ded45525286345eaa0b7906e9b2bc7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


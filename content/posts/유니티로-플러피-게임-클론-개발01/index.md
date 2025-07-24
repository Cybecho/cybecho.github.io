---
title: "유니티로 플러피 게임 클론 개발01"
date: 2023-02-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 플러피 게임 클론 개발"]
description: "유니티로 플러피 게임 클론 개발에 필요한 VS Code 자동완성 오류 해결, 이미지 레이어 설정, 애니메이션 커브 설정, 물리 법칙 적용 및 오브젝트 콜라이더 설정 방법을 다룹니다. 또한, BirdJump와 PipeMove 스크립트 예제를 통해 점프 및 장애물 이동 구현 방법을 설명합니다."
notion_id: "a3bc9908-85bd-4f8e-921f-13019d832dd9"
notion_url: "https://www.notion.so/01-a3bc990885bd4f8e921f13019d832dd9"
---

# 유니티로 플러피 게임 클론 개발01

> **Summary**
> 유니티로 플러피 게임 클론 개발에 필요한 VS Code 자동완성 오류 해결, 이미지 레이어 설정, 애니메이션 커브 설정, 물리 법칙 적용 및 오브젝트 콜라이더 설정 방법을 다룹니다. 또한, BirdJump와 PipeMove 스크립트 예제를 통해 점프 및 장애물 이동 구현 방법을 설명합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=EqoU1PodQQ4&t=460s)

# [VS Code 자동완성 안될때 해결방법](https://nicotina04.tistory.com/233#:~:text=%EC%83%81%EB%8B%A8%20%EB%A9%94%EB%89%B4%EC%97%90%EC%84%9C%20Edit%20%3E%20Preferences,%EB%AA%87%20%EB%B6%84%20%EB%8C%80%EA%B8%B0%ED%95%98%EB%8F%84%EB%A1%9D%20%ED%95%9C%EB%8B%A4)

## 이미지 레이어 순서

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d3a64ec6-654b-4340-b75a-5a0e2a3189a8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SWHPK4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHs4DPsWzahKavjJvcMWKfNzA%2FlO1s7IvACc%2F5mJvQCkAiAt1VFw5EYrsriTY9Kdip0ch%2FCWgrO5TDOlOrTvyieoySr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKAXEZ%2B8rUt3OhBNUKtwDpIG2vfysesOegAf7EKZlvaBXfhJaUIYUElCUdowP0tt0mGRW4GuINLYFgjCJV5S3v4QvmCg0Njjzfbuq5QUsQepWPnofIjNnzKyfkxT8SVLcPLJuwa15SdDdFcYP3hBFnBVs08k%2B%2B4D13offRQqy9VH%2B6IU9IJ2n2Mii8srJ7mX2Zh6LdDd%2BCPmGRg59wPbmh0dfH7jiKgIp5f3DHsCsQAq4rRuwNZt2TlVryhB1QVTCtYA%2FQmlOWWjYQCoSMiJHprtAYEmRlbSX6wxIC6K99ICF%2BayCfGhCDbTodHmNLGp%2F%2BMatyOh240XtSQzIA0Vutj29R7D5dzpD2yyjxMsPpcaY9bQkoUTedHEok2yENrc7ZHMefP6MNgS9AZGWfqoO3vdrmOYeygJxuUWU4zgS82tjoDj5%2FIXY7shg4VgYr6u53R29IdSQG4LkLraBA58Df8Q5qMk69by4ZCjpho8vPZe%2FXR7QmlVqMTGeU%2Bz%2BdxCRog17Zv53OPGTZsb0He3Q9nxU73NUzOdVo4%2ByhzOCDqcTo3gSvBTxqg3wZrQO5PnebsVReQL6uW1sAY2zOfLBgmJH8X2n0yDJ1x0ihLZ0bGE%2BMyuzZdgq%2BITkmNSw6XjKbFSKDXcbUA2s%2FWcwuc%2BHxAY6pgG4eePwM9suffvZx2vh5XBEgd4PYyL5sqTlo0RIlNLK1KGhkf0z9F3TpFYV1Ac9UjiTKNLxI0NkrsOzZBlUzrrSIrKrWrX2MubbCXtPJ1XVsXi79OI8k6r7XWXrTHQeNosUdRnmYoAFY%2BiBdUKChBV%2FFwV2aArrkMoaFsLKLcQMkICFCJuDZdmgHRxoLaFwM0rmk0a6VYs4PiMcrFBh1GH63IPB9IAb&X-Amz-Signature=fa16cacee2973792b2c415d34d82e2eb7cbd808ba3fa4e15e42183c3c655d7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이미지 타일화

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7f9af15f-9986-48cf-8fcf-8dcb6004dafb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SWHPK4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHs4DPsWzahKavjJvcMWKfNzA%2FlO1s7IvACc%2F5mJvQCkAiAt1VFw5EYrsriTY9Kdip0ch%2FCWgrO5TDOlOrTvyieoySr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKAXEZ%2B8rUt3OhBNUKtwDpIG2vfysesOegAf7EKZlvaBXfhJaUIYUElCUdowP0tt0mGRW4GuINLYFgjCJV5S3v4QvmCg0Njjzfbuq5QUsQepWPnofIjNnzKyfkxT8SVLcPLJuwa15SdDdFcYP3hBFnBVs08k%2B%2B4D13offRQqy9VH%2B6IU9IJ2n2Mii8srJ7mX2Zh6LdDd%2BCPmGRg59wPbmh0dfH7jiKgIp5f3DHsCsQAq4rRuwNZt2TlVryhB1QVTCtYA%2FQmlOWWjYQCoSMiJHprtAYEmRlbSX6wxIC6K99ICF%2BayCfGhCDbTodHmNLGp%2F%2BMatyOh240XtSQzIA0Vutj29R7D5dzpD2yyjxMsPpcaY9bQkoUTedHEok2yENrc7ZHMefP6MNgS9AZGWfqoO3vdrmOYeygJxuUWU4zgS82tjoDj5%2FIXY7shg4VgYr6u53R29IdSQG4LkLraBA58Df8Q5qMk69by4ZCjpho8vPZe%2FXR7QmlVqMTGeU%2Bz%2BdxCRog17Zv53OPGTZsb0He3Q9nxU73NUzOdVo4%2ByhzOCDqcTo3gSvBTxqg3wZrQO5PnebsVReQL6uW1sAY2zOfLBgmJH8X2n0yDJ1x0ihLZ0bGE%2BMyuzZdgq%2BITkmNSw6XjKbFSKDXcbUA2s%2FWcwuc%2BHxAY6pgG4eePwM9suffvZx2vh5XBEgd4PYyL5sqTlo0RIlNLK1KGhkf0z9F3TpFYV1Ac9UjiTKNLxI0NkrsOzZBlUzrrSIrKrWrX2MubbCXtPJ1XVsXi79OI8k6r7XWXrTHQeNosUdRnmYoAFY%2BiBdUKChBV%2FFwV2aArrkMoaFsLKLcQMkICFCJuDZdmgHRxoLaFwM0rmk0a6VYs4PiMcrFBh1GH63IPB9IAb&X-Amz-Signature=ac969f3afb5140abd038eef30ff0f28714225caf5c723f6d1ed38b9fe17c6f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 애니메이션 커브설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a276fe47-b856-46e4-bb05-f35d69c31526/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SWHPK4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHs4DPsWzahKavjJvcMWKfNzA%2FlO1s7IvACc%2F5mJvQCkAiAt1VFw5EYrsriTY9Kdip0ch%2FCWgrO5TDOlOrTvyieoySr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKAXEZ%2B8rUt3OhBNUKtwDpIG2vfysesOegAf7EKZlvaBXfhJaUIYUElCUdowP0tt0mGRW4GuINLYFgjCJV5S3v4QvmCg0Njjzfbuq5QUsQepWPnofIjNnzKyfkxT8SVLcPLJuwa15SdDdFcYP3hBFnBVs08k%2B%2B4D13offRQqy9VH%2B6IU9IJ2n2Mii8srJ7mX2Zh6LdDd%2BCPmGRg59wPbmh0dfH7jiKgIp5f3DHsCsQAq4rRuwNZt2TlVryhB1QVTCtYA%2FQmlOWWjYQCoSMiJHprtAYEmRlbSX6wxIC6K99ICF%2BayCfGhCDbTodHmNLGp%2F%2BMatyOh240XtSQzIA0Vutj29R7D5dzpD2yyjxMsPpcaY9bQkoUTedHEok2yENrc7ZHMefP6MNgS9AZGWfqoO3vdrmOYeygJxuUWU4zgS82tjoDj5%2FIXY7shg4VgYr6u53R29IdSQG4LkLraBA58Df8Q5qMk69by4ZCjpho8vPZe%2FXR7QmlVqMTGeU%2Bz%2BdxCRog17Zv53OPGTZsb0He3Q9nxU73NUzOdVo4%2ByhzOCDqcTo3gSvBTxqg3wZrQO5PnebsVReQL6uW1sAY2zOfLBgmJH8X2n0yDJ1x0ihLZ0bGE%2BMyuzZdgq%2BITkmNSw6XjKbFSKDXcbUA2s%2FWcwuc%2BHxAY6pgG4eePwM9suffvZx2vh5XBEgd4PYyL5sqTlo0RIlNLK1KGhkf0z9F3TpFYV1Ac9UjiTKNLxI0NkrsOzZBlUzrrSIrKrWrX2MubbCXtPJ1XVsXi79OI8k6r7XWXrTHQeNosUdRnmYoAFY%2BiBdUKChBV%2FFwV2aArrkMoaFsLKLcQMkICFCJuDZdmgHRxoLaFwM0rmk0a6VYs4PiMcrFBh1GH63IPB9IAb&X-Amz-Signature=8b16c3e36b623599d64b8d4ec8499e9e44b5c1b68430ae9bcb064aec2ec774b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 오브젝트 물리법칙적용

`오브젝트선택 - inspector창에 Add Component - Pysics 2D - ``**Rigdbody2D**`

## 오브젝트 콜라이더 설정

`오브젝트선택 - inspector창에 Add Component - Pysics 2D - ``**Capsule Colider 2D**`

콜라이더 모양 설정방법

`Capsule Colider 2D - Direction 방향설정 - Edit Colider`**   **

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3052d5a2-924d-4612-b8e8-1c23d76e76cf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SWHPK4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHs4DPsWzahKavjJvcMWKfNzA%2FlO1s7IvACc%2F5mJvQCkAiAt1VFw5EYrsriTY9Kdip0ch%2FCWgrO5TDOlOrTvyieoySr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKAXEZ%2B8rUt3OhBNUKtwDpIG2vfysesOegAf7EKZlvaBXfhJaUIYUElCUdowP0tt0mGRW4GuINLYFgjCJV5S3v4QvmCg0Njjzfbuq5QUsQepWPnofIjNnzKyfkxT8SVLcPLJuwa15SdDdFcYP3hBFnBVs08k%2B%2B4D13offRQqy9VH%2B6IU9IJ2n2Mii8srJ7mX2Zh6LdDd%2BCPmGRg59wPbmh0dfH7jiKgIp5f3DHsCsQAq4rRuwNZt2TlVryhB1QVTCtYA%2FQmlOWWjYQCoSMiJHprtAYEmRlbSX6wxIC6K99ICF%2BayCfGhCDbTodHmNLGp%2F%2BMatyOh240XtSQzIA0Vutj29R7D5dzpD2yyjxMsPpcaY9bQkoUTedHEok2yENrc7ZHMefP6MNgS9AZGWfqoO3vdrmOYeygJxuUWU4zgS82tjoDj5%2FIXY7shg4VgYr6u53R29IdSQG4LkLraBA58Df8Q5qMk69by4ZCjpho8vPZe%2FXR7QmlVqMTGeU%2Bz%2BdxCRog17Zv53OPGTZsb0He3Q9nxU73NUzOdVo4%2ByhzOCDqcTo3gSvBTxqg3wZrQO5PnebsVReQL6uW1sAY2zOfLBgmJH8X2n0yDJ1x0ihLZ0bGE%2BMyuzZdgq%2BITkmNSw6XjKbFSKDXcbUA2s%2FWcwuc%2BHxAY6pgG4eePwM9suffvZx2vh5XBEgd4PYyL5sqTlo0RIlNLK1KGhkf0z9F3TpFYV1Ac9UjiTKNLxI0NkrsOzZBlUzrrSIrKrWrX2MubbCXtPJ1XVsXi79OI8k6r7XWXrTHQeNosUdRnmYoAFY%2BiBdUKChBV%2FFwV2aArrkMoaFsLKLcQMkICFCJuDZdmgHRxoLaFwM0rmk0a6VYs4PiMcrFBh1GH63IPB9IAb&X-Amz-Signature=c2d5d0583390cc9099fdcca2a7cd1124b4beae09afe7deedf841d17083a93c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 코드 에디터 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15a31f43-0666-4ab2-a7b8-270efd2c81c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SWHPK4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHs4DPsWzahKavjJvcMWKfNzA%2FlO1s7IvACc%2F5mJvQCkAiAt1VFw5EYrsriTY9Kdip0ch%2FCWgrO5TDOlOrTvyieoySr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKAXEZ%2B8rUt3OhBNUKtwDpIG2vfysesOegAf7EKZlvaBXfhJaUIYUElCUdowP0tt0mGRW4GuINLYFgjCJV5S3v4QvmCg0Njjzfbuq5QUsQepWPnofIjNnzKyfkxT8SVLcPLJuwa15SdDdFcYP3hBFnBVs08k%2B%2B4D13offRQqy9VH%2B6IU9IJ2n2Mii8srJ7mX2Zh6LdDd%2BCPmGRg59wPbmh0dfH7jiKgIp5f3DHsCsQAq4rRuwNZt2TlVryhB1QVTCtYA%2FQmlOWWjYQCoSMiJHprtAYEmRlbSX6wxIC6K99ICF%2BayCfGhCDbTodHmNLGp%2F%2BMatyOh240XtSQzIA0Vutj29R7D5dzpD2yyjxMsPpcaY9bQkoUTedHEok2yENrc7ZHMefP6MNgS9AZGWfqoO3vdrmOYeygJxuUWU4zgS82tjoDj5%2FIXY7shg4VgYr6u53R29IdSQG4LkLraBA58Df8Q5qMk69by4ZCjpho8vPZe%2FXR7QmlVqMTGeU%2Bz%2BdxCRog17Zv53OPGTZsb0He3Q9nxU73NUzOdVo4%2ByhzOCDqcTo3gSvBTxqg3wZrQO5PnebsVReQL6uW1sAY2zOfLBgmJH8X2n0yDJ1x0ihLZ0bGE%2BMyuzZdgq%2BITkmNSw6XjKbFSKDXcbUA2s%2FWcwuc%2BHxAY6pgG4eePwM9suffvZx2vh5XBEgd4PYyL5sqTlo0RIlNLK1KGhkf0z9F3TpFYV1Ac9UjiTKNLxI0NkrsOzZBlUzrrSIrKrWrX2MubbCXtPJ1XVsXi79OI8k6r7XWXrTHQeNosUdRnmYoAFY%2BiBdUKChBV%2FFwV2aArrkMoaFsLKLcQMkICFCJuDZdmgHRxoLaFwM0rmk0a6VYs4PiMcrFBh1GH63IPB9IAb&X-Amz-Signature=1a8af535d1924497a3a733d6677df62b5f855ec885653db187918e6b0f48edff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 코딩부분

### BirdJump.cs

```c#
//Rigidbody를 코드내에 불러오는 과정

public class BirdJump : MonoBehaviour
{
    Rigidbody2D rb;
    //rb는 Rigidbody2D라는 클래스가 가지고있는 클래스를 받을 수 있다
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        //Rigidbody2D라는 컴포넌트를 가져와서 rb에 담겠다 라는 뜻
    }
```

Rigidbody2D는 유니티 내부에서 물리설정을 할때 만들었던 파일을 불러오는것으로, 코드내에서 불러와 사용한다

```c#
//Rigidbody를 점프하는 과정

public class BirdJump : MonoBehaviour
{
    Rigidbody2D rb;
    public float JumpPower;
    
    //rb는 Rigidbody2D라는 클래스가 가지고있는 클래스를 받을 수 있다
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        //시작했을때, 컴포넌트를 rb에 삽입한다
        //Rigidbody2D라는 컴포넌트를 가져와서 rb에 담겠다 라는 뜻
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0)) //마우스 왼쪽버튼 = 0
        {
            rb.velocity = Vector2.up * 4;
            //Rigidbody2D내부에 있는 velocity 는 속도를 의미하는 속성이다
            //속성값에 위쪽방향으로 힘을 줘야 점프를 한다
            //Vector2 는 xy로 2차원 좌표 기본값은 (0,1) 이지만, 3을 곱해주면 (0,3)
        }
    }
}
```

해당부분 설정하면 터치시에 플레이어볼이정상적으로 점프하는것을 확인할 수 있었다


### PipeMove.cs

```c#
//파이프 장애물을 움직이게 하는 방법

void Update()
    {
        transform.position += Vector3.left * Time.deltaTime;
        //Vector3.left는 내부적으로 (-1.0.0) 을 의미한다
        //deltaTime을 곱함으로써 30fps시에는 초당 1/3를 60fps시에는 초당 1/6를 곱한다
        Debug.Log(transform.position);
    }
```

```c#
//전역변수를 설정하여 속도를 외부에서(유니티에서) 설정하게 만들수도 있습니다

**public float speed = 1;**


    // Update is called once per frame
    void Update()
    {
        transform.position += Vector3.left * **speed** * Time.deltaTime;
        //Vector3.left는 내부적으로 (-1.0.0) 을 의미한다
        //deltaTime을 곱함으로써 30fps시에는 초당 1/3를 60fps시에는 초당 1/6를 곱한다
        Debug.Log(transform.position);
    }
```


> 🔥 ****deltatime?****

# Prefab 이란?

> 🔥 **한마디로 Class개념…. 오브젝트를 만들어서 계속해서 찍어낼 수 있게 만드는 포토샵의 그룹혹은 템플릿의 코딩개념이라고 생각하면 될듯**

Prefab을 만드는 방법은 그냥 Hieararchy에 올라가있는 오브젝트를 Drag & Drop 하여 Prefab으로 만들 수 있다


# Generator 란?

> 🔥 **Prefab을 찍어내기위한 생산공장… Hirerachy에서 Empty를 생성한 후 컴포넌트를 추가하는 식으로 활용**

> 🔥 **사용방법**


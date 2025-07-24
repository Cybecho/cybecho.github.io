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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d3a64ec6-654b-4340-b75a-5a0e2a3189a8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXWF5WO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGXqRwjohoYgA8UccQEcIdohx%2B1uG2q1y%2F18CIcvFlXAiEAx4xOIViyqaMu1xujnLxNQ4otaMP62DWOCHGcLCVVC%2BAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNfcSXGmdK9QoMjnrSrcA0%2BBGYQAsDjYKB4UrBEOKMpKVilihaXq1bIv1PJzbH3freldC39K6i3hQEksUnl1y7y%2BgGK2DWJeFlT%2BTMkYjXAd7yVbVg%2FUa49wfDfoMT%2BeJQ8Pa99uJVur%2B7HePqoDlBHfOyDLoGZWdS2YRYDiXZ7%2BxKv21R%2BJzk4pdWqh7CnjJOzaOhTTwp5ZR5CriNXzTAsDfB0NO2TGiEasGe2sDdrsksQODS7n5Rip6l7t9YLjM4mYpMnfbXvSxCLXplFlUPxxRiR68Hads4FfoMFt8y2Ca04cdoyItNoWiUjBkCdVGIc4dfGmu6zQcGabexagy4eKOJCygBqSrNbkW9qiISVP%2BN67x1UsR0SB7UZTlmf8lj5AO%2FqL1S2gMhxVgf1iAX4gEqdNzm2a8Yfk9q1wyQ8OFtOucVTGYtPCU3cSuAaNjpyQyIHTCUDjN9TH6XMSE%2F%2Ba0l7o544c2lO2ubMvT%2FFiYpba7kyokLb%2FyYCndwh%2Fx1mxsE6%2BZaV5Zd2b9lwxIiQAY87yrlHCdMfJWWFOEpeaBUjc%2FmyT0tei5KEsClCyENtPw77X2dRPO8zfSsvTveJ0nRxFbzPFwudGUzj9rJLbctjFSe2rzzD1R%2FBiMbfsVnsUDcHh1wRh76LHMLj1h8QGOqUBPDrJ9nsuYojstb59ndcwRUYKaYVPYXFV1EaGrH9rQxL1GrAoQo%2BFKcjPMJe4WT%2BOjEamp1zQ5SItZFwwXgrktERLsMslLIEMTq6xPXJfbxr9LCijbb26uaQ3bXODWQEjfrlakZkNAJPC90o90UhhfmGtji9cMZ%2FyoUJitfRPscWE0%2B7nhNcoobL%2Bncy7nbXCDman37iAHQMbyzTBIc6vzl3lvdbo&X-Amz-Signature=da634c61fc9f5888b5df3ddaa5496017a6be2b315f5026e5bf50d8ee0155ae88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이미지 타일화

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7f9af15f-9986-48cf-8fcf-8dcb6004dafb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXWF5WO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGXqRwjohoYgA8UccQEcIdohx%2B1uG2q1y%2F18CIcvFlXAiEAx4xOIViyqaMu1xujnLxNQ4otaMP62DWOCHGcLCVVC%2BAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNfcSXGmdK9QoMjnrSrcA0%2BBGYQAsDjYKB4UrBEOKMpKVilihaXq1bIv1PJzbH3freldC39K6i3hQEksUnl1y7y%2BgGK2DWJeFlT%2BTMkYjXAd7yVbVg%2FUa49wfDfoMT%2BeJQ8Pa99uJVur%2B7HePqoDlBHfOyDLoGZWdS2YRYDiXZ7%2BxKv21R%2BJzk4pdWqh7CnjJOzaOhTTwp5ZR5CriNXzTAsDfB0NO2TGiEasGe2sDdrsksQODS7n5Rip6l7t9YLjM4mYpMnfbXvSxCLXplFlUPxxRiR68Hads4FfoMFt8y2Ca04cdoyItNoWiUjBkCdVGIc4dfGmu6zQcGabexagy4eKOJCygBqSrNbkW9qiISVP%2BN67x1UsR0SB7UZTlmf8lj5AO%2FqL1S2gMhxVgf1iAX4gEqdNzm2a8Yfk9q1wyQ8OFtOucVTGYtPCU3cSuAaNjpyQyIHTCUDjN9TH6XMSE%2F%2Ba0l7o544c2lO2ubMvT%2FFiYpba7kyokLb%2FyYCndwh%2Fx1mxsE6%2BZaV5Zd2b9lwxIiQAY87yrlHCdMfJWWFOEpeaBUjc%2FmyT0tei5KEsClCyENtPw77X2dRPO8zfSsvTveJ0nRxFbzPFwudGUzj9rJLbctjFSe2rzzD1R%2FBiMbfsVnsUDcHh1wRh76LHMLj1h8QGOqUBPDrJ9nsuYojstb59ndcwRUYKaYVPYXFV1EaGrH9rQxL1GrAoQo%2BFKcjPMJe4WT%2BOjEamp1zQ5SItZFwwXgrktERLsMslLIEMTq6xPXJfbxr9LCijbb26uaQ3bXODWQEjfrlakZkNAJPC90o90UhhfmGtji9cMZ%2FyoUJitfRPscWE0%2B7nhNcoobL%2Bncy7nbXCDman37iAHQMbyzTBIc6vzl3lvdbo&X-Amz-Signature=f8c8d5347693ac27efd319c35b60dfc44064aa476ec22247298bdaa5d0913d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 애니메이션 커브설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a276fe47-b856-46e4-bb05-f35d69c31526/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXWF5WO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGXqRwjohoYgA8UccQEcIdohx%2B1uG2q1y%2F18CIcvFlXAiEAx4xOIViyqaMu1xujnLxNQ4otaMP62DWOCHGcLCVVC%2BAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNfcSXGmdK9QoMjnrSrcA0%2BBGYQAsDjYKB4UrBEOKMpKVilihaXq1bIv1PJzbH3freldC39K6i3hQEksUnl1y7y%2BgGK2DWJeFlT%2BTMkYjXAd7yVbVg%2FUa49wfDfoMT%2BeJQ8Pa99uJVur%2B7HePqoDlBHfOyDLoGZWdS2YRYDiXZ7%2BxKv21R%2BJzk4pdWqh7CnjJOzaOhTTwp5ZR5CriNXzTAsDfB0NO2TGiEasGe2sDdrsksQODS7n5Rip6l7t9YLjM4mYpMnfbXvSxCLXplFlUPxxRiR68Hads4FfoMFt8y2Ca04cdoyItNoWiUjBkCdVGIc4dfGmu6zQcGabexagy4eKOJCygBqSrNbkW9qiISVP%2BN67x1UsR0SB7UZTlmf8lj5AO%2FqL1S2gMhxVgf1iAX4gEqdNzm2a8Yfk9q1wyQ8OFtOucVTGYtPCU3cSuAaNjpyQyIHTCUDjN9TH6XMSE%2F%2Ba0l7o544c2lO2ubMvT%2FFiYpba7kyokLb%2FyYCndwh%2Fx1mxsE6%2BZaV5Zd2b9lwxIiQAY87yrlHCdMfJWWFOEpeaBUjc%2FmyT0tei5KEsClCyENtPw77X2dRPO8zfSsvTveJ0nRxFbzPFwudGUzj9rJLbctjFSe2rzzD1R%2FBiMbfsVnsUDcHh1wRh76LHMLj1h8QGOqUBPDrJ9nsuYojstb59ndcwRUYKaYVPYXFV1EaGrH9rQxL1GrAoQo%2BFKcjPMJe4WT%2BOjEamp1zQ5SItZFwwXgrktERLsMslLIEMTq6xPXJfbxr9LCijbb26uaQ3bXODWQEjfrlakZkNAJPC90o90UhhfmGtji9cMZ%2FyoUJitfRPscWE0%2B7nhNcoobL%2Bncy7nbXCDman37iAHQMbyzTBIc6vzl3lvdbo&X-Amz-Signature=8a4bd3a3dc40e65111ac661a89dd96b96a5f3432831101715aa577d7584ac8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 오브젝트 물리법칙적용

`오브젝트선택 - inspector창에 Add Component - Pysics 2D - ``**Rigdbody2D**`

## 오브젝트 콜라이더 설정

`오브젝트선택 - inspector창에 Add Component - Pysics 2D - ``**Capsule Colider 2D**`

콜라이더 모양 설정방법

`Capsule Colider 2D - Direction 방향설정 - Edit Colider`**   **

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3052d5a2-924d-4612-b8e8-1c23d76e76cf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXWF5WO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGXqRwjohoYgA8UccQEcIdohx%2B1uG2q1y%2F18CIcvFlXAiEAx4xOIViyqaMu1xujnLxNQ4otaMP62DWOCHGcLCVVC%2BAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNfcSXGmdK9QoMjnrSrcA0%2BBGYQAsDjYKB4UrBEOKMpKVilihaXq1bIv1PJzbH3freldC39K6i3hQEksUnl1y7y%2BgGK2DWJeFlT%2BTMkYjXAd7yVbVg%2FUa49wfDfoMT%2BeJQ8Pa99uJVur%2B7HePqoDlBHfOyDLoGZWdS2YRYDiXZ7%2BxKv21R%2BJzk4pdWqh7CnjJOzaOhTTwp5ZR5CriNXzTAsDfB0NO2TGiEasGe2sDdrsksQODS7n5Rip6l7t9YLjM4mYpMnfbXvSxCLXplFlUPxxRiR68Hads4FfoMFt8y2Ca04cdoyItNoWiUjBkCdVGIc4dfGmu6zQcGabexagy4eKOJCygBqSrNbkW9qiISVP%2BN67x1UsR0SB7UZTlmf8lj5AO%2FqL1S2gMhxVgf1iAX4gEqdNzm2a8Yfk9q1wyQ8OFtOucVTGYtPCU3cSuAaNjpyQyIHTCUDjN9TH6XMSE%2F%2Ba0l7o544c2lO2ubMvT%2FFiYpba7kyokLb%2FyYCndwh%2Fx1mxsE6%2BZaV5Zd2b9lwxIiQAY87yrlHCdMfJWWFOEpeaBUjc%2FmyT0tei5KEsClCyENtPw77X2dRPO8zfSsvTveJ0nRxFbzPFwudGUzj9rJLbctjFSe2rzzD1R%2FBiMbfsVnsUDcHh1wRh76LHMLj1h8QGOqUBPDrJ9nsuYojstb59ndcwRUYKaYVPYXFV1EaGrH9rQxL1GrAoQo%2BFKcjPMJe4WT%2BOjEamp1zQ5SItZFwwXgrktERLsMslLIEMTq6xPXJfbxr9LCijbb26uaQ3bXODWQEjfrlakZkNAJPC90o90UhhfmGtji9cMZ%2FyoUJitfRPscWE0%2B7nhNcoobL%2Bncy7nbXCDman37iAHQMbyzTBIc6vzl3lvdbo&X-Amz-Signature=0a575443e4f0e36812001236d26484a565d4b02751193ac1711e66c164914ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 코드 에디터 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15a31f43-0666-4ab2-a7b8-270efd2c81c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXWF5WO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGXqRwjohoYgA8UccQEcIdohx%2B1uG2q1y%2F18CIcvFlXAiEAx4xOIViyqaMu1xujnLxNQ4otaMP62DWOCHGcLCVVC%2BAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNfcSXGmdK9QoMjnrSrcA0%2BBGYQAsDjYKB4UrBEOKMpKVilihaXq1bIv1PJzbH3freldC39K6i3hQEksUnl1y7y%2BgGK2DWJeFlT%2BTMkYjXAd7yVbVg%2FUa49wfDfoMT%2BeJQ8Pa99uJVur%2B7HePqoDlBHfOyDLoGZWdS2YRYDiXZ7%2BxKv21R%2BJzk4pdWqh7CnjJOzaOhTTwp5ZR5CriNXzTAsDfB0NO2TGiEasGe2sDdrsksQODS7n5Rip6l7t9YLjM4mYpMnfbXvSxCLXplFlUPxxRiR68Hads4FfoMFt8y2Ca04cdoyItNoWiUjBkCdVGIc4dfGmu6zQcGabexagy4eKOJCygBqSrNbkW9qiISVP%2BN67x1UsR0SB7UZTlmf8lj5AO%2FqL1S2gMhxVgf1iAX4gEqdNzm2a8Yfk9q1wyQ8OFtOucVTGYtPCU3cSuAaNjpyQyIHTCUDjN9TH6XMSE%2F%2Ba0l7o544c2lO2ubMvT%2FFiYpba7kyokLb%2FyYCndwh%2Fx1mxsE6%2BZaV5Zd2b9lwxIiQAY87yrlHCdMfJWWFOEpeaBUjc%2FmyT0tei5KEsClCyENtPw77X2dRPO8zfSsvTveJ0nRxFbzPFwudGUzj9rJLbctjFSe2rzzD1R%2FBiMbfsVnsUDcHh1wRh76LHMLj1h8QGOqUBPDrJ9nsuYojstb59ndcwRUYKaYVPYXFV1EaGrH9rQxL1GrAoQo%2BFKcjPMJe4WT%2BOjEamp1zQ5SItZFwwXgrktERLsMslLIEMTq6xPXJfbxr9LCijbb26uaQ3bXODWQEjfrlakZkNAJPC90o90UhhfmGtji9cMZ%2FyoUJitfRPscWE0%2B7nhNcoobL%2Bncy7nbXCDman37iAHQMbyzTBIc6vzl3lvdbo&X-Amz-Signature=4c6caf3ea23a9d7ba74fb51debda2c4706a48dd712edc5fcf09e49f71c8a58b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
> 한프레임당 걸린 시간
>
>

# Prefab 이란?

> 🔥 **한마디로 Class개념…. 오브젝트를 만들어서 계속해서 찍어낼 수 있게 만드는 포토샵의 그룹혹은 템플릿의 코딩개념이라고 생각하면 될듯**

Prefab을 만드는 방법은 그냥 Hieararchy에 올라가있는 오브젝트를 Drag & Drop 하여 Prefab으로 만들 수 있다


# Generator 란?

> 🔥 **Prefab을 찍어내기위한 생산공장… Hirerachy에서 Empty를 생성한 후 컴포넌트를 추가하는 식으로 활용**

> 🔥 **사용방법**
> 제네레이터 내부에서 컴포넌트 추가하고 스크립트 내에서 public으로 GameObject자료형을 가진 변수 설정
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3721c553-3c82-4873-b4a1-c97fee47f53b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK2LIB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID6q3dbGhkXArmVTg6DyUBfTTTbpez%2FmC4E%2F00ytW2cMAiEAj5jn3Hbj%2Fb1l6wz2FSwWYY0b4iIPeV%2Bb60gTxApPPrkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKIWSLIMpxUM16W%2BeCrcA3QK3rX1T3%2FeDA3LIXyAgQO5gtXXaYOrbV%2FPK6GCBw9plhTr6G1JZ7elSxqH5NkpqxxPK5JiD8oKerxj695WqkpGrWh3mr3oSxQfLEdJ9wIOHWJ6eaGrTYCMvCLZu7puDFIOW2aNRrH%2F%2BZYoQafM%2F8xKDXCJKFQSfj2vfRwYEbd0A6dZboxHy6heTZn32kbk517Fa5AkPZKsD%2FivRS6P%2BpBNenEGExNnBBWMzOCz1eup%2FU742Z3aMw7aKkLNc3vLsxhAld8vK3Cl0yuTmXzjHS666%2FGqvpO0C2EJKGxqFQ7tomFBcdUuYTn%2FQJgi%2B2UYx9E1OC2NFSfQ8gWmwWncobKtZHquZ4YwiX2iTY%2FqhtqT8O3resNJ8r9zX79C195s%2F%2BxplgAPLAoLMWk9sV6mbP8B0q8U2KC%2F53NS%2BE8YigbB%2F6kFsD5pswBRocgp0gg5JZGqDOfveumV5SlrmyxFwZbyuzq%2BItU7Yav5W9l3Z%2FthLKska6f%2FI%2FYuZ2wOdfn7YlF7VD%2F4C8YiLbcLKUdHkcWODaHiTwQxe64yhDV4jN5u4uSTkqhJtDnMH4pPa76xeN5Wwe8R5XsH%2BTOXLe8cTKnYCrZ%2Bvedyf4UfcuyAJNtHxB6UaQDfdr9X4nRlMIH2h8QGOqUBSHS6zvdfRgKqlWjLnIaL1s8646H29KuHsruHG7kQEbCgWw%2BhfXeKcMIKZrvHpl45iWxGd3c451b14sNP2saeNjKnGCplhRhL6re3JwKUGymBgCnm5F62pPGfzufbPRsmziyzvQnHHR%2FusoXNitC8nA73BwLC1rPH8daOepKfiwXwHHdR9LYqnu%2B1s6%2Bu1I6C12hXdA8kLY5hMZJsNhRLVlXMDkr1&X-Amz-Signature=afcb1fa8e7ea76c9ac7401e40d4c50ae8c08df6d370ab5cfefd805cc7db4bbf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 그 후 하이하이어라키에서 생산할 프리팹을 드래그앤 드롭 혹은 직접 선택하여 변수내부에 할당 가능
>
>
> 그 후 다음과 같은 코드를 작성한다
>
> ```javascript
> public class MakePipe : MonoBehaviour
> {
>     public GameObject pipe;
>     // Start is called before the first frame update
>     void Start()
>     {
>
>     }
>
>     // Update is called once per frame
>     void Update()
>     {
>         Instantiate(pipe);
>         //유니티 내부에서 등록한 pipe prefab이 Instantiate를 통해 생성된다
>     }
> }
> ```
>
> ```c#
> //timeDiff 로 유니티에서 값 조절할 수 있게 해두고
> //deltaTime이용하여 파이프를 특정 시간에 한번 생성되게 코드를 짠다
> //이때 newpipe를 생성하여 게임오브젝트를 생성시킨다
>
> public class MakePipe : MonoBehaviour
> {
>     public GameObject pipe;
>     public float timeDiff;
>     float timer = 0;
>
>
>     // Start is called before the first frame update
>     void Start()
>     {
>
>     }
>
>     // Update is called once per frame
>     void Update()
>     {
>         timer += Time.deltaTime;
>         //deltaTime을 계속 더해주면서 1이 되었을때가 1초가흐른것이다
>         if (timer > timeDiff)
>         {
>             //y3.3 ~ y-3.3
>
>             GameObject newpipe = Instantiate(pipe);
>             //유니티 내부에서 등록한 pipe prefab이 Instantiate를 통해 생성된다
>             //Instantiate한 GameObject를 newpipe로 받아준다
>             newpipe.transform.position = new Vector3(0,0,0);
>             timer = 0;
>         }
>
>     }
> }
> ```
>
> ```c#
> //벡터부분에 랜덤값을 추가하여 생성시킨다
> //x부분 벡터에 정수를 조절함으로서 프리팹 생성 위치를 설정할 수 있다
>
> newpipe.transform.position = new Vector3(0,Random.Range(-3.3f,3.3f),0);
> ```
>
>
>


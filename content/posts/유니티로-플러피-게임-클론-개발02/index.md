---
title: "유니티로 플러피 게임 클론 개발02"
date: 2023-02-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 플러피 게임 클론 개발"]
description: "프리팹을 특정 초 후에 삭제하는 방법과 UI 생성 방법을 설명하며, 점수를 증가시키는 콜라이더 생성 및 게임 오버 씬 설정에 대한 내용을 포함하고 있습니다. 코드 예시를 통해 점수를 화면에 표시하고, 트리거 설정을 통해 점수를 증가시키는 방법을 설명합니다."
notion_id: "b4b74f0f-fe84-4f61-9ef2-1f438c04a435"
notion_url: "https://www.notion.so/02-b4b74f0ffe844f619ef21f438c04a435"
---

# 유니티로 플러피 게임 클론 개발02

> **Summary**
> 프리팹을 특정 초 후에 삭제하는 방법과 UI 생성 방법을 설명하며, 점수를 증가시키는 콜라이더 생성 및 게임 오버 씬 설정에 대한 내용을 포함하고 있습니다. 코드 예시를 통해 점수를 화면에 표시하고, 트리거 설정을 통해 점수를 증가시키는 방법을 설명합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=EqoU1PodQQ4&t=460s)

# 프리팹 수정 후 오버라이즈 꼭 Apply

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4c19d9ad-fd43-480a-9efc-7661f1800dfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAIZZYT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHM3TnrsBtxQaOAkEi8zBKCvr9Rq%2FtTdrjVXdtRZ0AcAIhAP8ah8hm0gNVxF5QKdA2GhyhilsheeOlDYhWvSWorTqBKv8DCC0QABoMNjM3NDIzMTgzODA1IgzDQsUEkkA4dahSwfAq3ANiVmCn4DiZrIhOZYH2vpHJPBj%2Bdzz2hXbmGd1%2BJBLk2gyz97%2B48SDsgNK3Vogfn3MHwzxCwhX3V8AZ8RCPk1HE92RDLZODEVjdXikFatXQ6tYPQB2IUrn2XD7ZBFMEY5DLtBuC7b6sCUbK2jpXsz1S2iAhj7ifJyg9SiQrU7iqXY2JK9EQFWufA6gLn%2FpsBXcxkT0Q9kfcdZei9XfzlyTgEHAx%2B8aAVSAnzlfea%2FUoSnBd9S8j5fphvGkQls8c8qTuFSYmjDh8WgB6adlmGEnqlj9cKM4FUsjDgVR5rqMFux8CcCBvlXg7lXNSOVTlqGV%2B0kGZ3%2Bmelz%2BvvruH66rb25aNvZcwG8S%2BOA1AbV6wgoSWK8ddL7aBWRZuJ%2Bib1k0yL7Axp2mX8KLyP5isswv3w4fwuz04mgr%2FrU28BgfwSaE%2FSw5yTjMMwoYjtW2JTmTHz%2FoZzuEmccuh980%2BoOr2h24Ag0z96Pao5jd8wbv7Wr229iiVq7uzsaWNxbRqgE9LwYVh%2BnL0DMNEjD4GSXZNj4mWU%2BLb63H87l%2BLjTPNcTP708wVI0%2F183nQlUbm6gua3w4Kqi2sdUZehNatDUS6k%2BTBLfILcDB2O67pOzPi90za%2B3YVkd9nBPnSRjDOv4jEBjqkAYyUM6BI%2FG4BxKGejpnewDF9EilZqCHD%2BVl0TuD48R3kSCy3VaGWJ7OT8S9I0m61Pe%2FapTCzV6dYma2Yq6x%2Fm3plBL3l4G7hMXQVHPIWEirQsDNnxXxCwziSstMvoc5YLax8r4NQo8InHW7T82nFqrJr17CLeKPG4ORY8fggFTweD%2BwU2XGUKd99NkOvpcOOFclBr3YGyyvKrHNIYflDwzr2rwQV&X-Amz-Signature=570e01fafb9456519b57a0e31d3e2a7d0a026376e0e86f7f188b21bebeda909d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
//제네레이터 내부 스크립트 파일에서 특정 초 이상 지나가면 오브젝트를 삭제하는 코드
//5초 뒤 생성된 newpipe를 삭제하는 코드

Destroy(newpipe,5.0f);
```

## UI 생성방법

하이어라키에서 우클릭 - UI - Canvas

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b878d2e-a01a-4fd4-b4a0-3a0c78b446c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAIZZYT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHM3TnrsBtxQaOAkEi8zBKCvr9Rq%2FtTdrjVXdtRZ0AcAIhAP8ah8hm0gNVxF5QKdA2GhyhilsheeOlDYhWvSWorTqBKv8DCC0QABoMNjM3NDIzMTgzODA1IgzDQsUEkkA4dahSwfAq3ANiVmCn4DiZrIhOZYH2vpHJPBj%2Bdzz2hXbmGd1%2BJBLk2gyz97%2B48SDsgNK3Vogfn3MHwzxCwhX3V8AZ8RCPk1HE92RDLZODEVjdXikFatXQ6tYPQB2IUrn2XD7ZBFMEY5DLtBuC7b6sCUbK2jpXsz1S2iAhj7ifJyg9SiQrU7iqXY2JK9EQFWufA6gLn%2FpsBXcxkT0Q9kfcdZei9XfzlyTgEHAx%2B8aAVSAnzlfea%2FUoSnBd9S8j5fphvGkQls8c8qTuFSYmjDh8WgB6adlmGEnqlj9cKM4FUsjDgVR5rqMFux8CcCBvlXg7lXNSOVTlqGV%2B0kGZ3%2Bmelz%2BvvruH66rb25aNvZcwG8S%2BOA1AbV6wgoSWK8ddL7aBWRZuJ%2Bib1k0yL7Axp2mX8KLyP5isswv3w4fwuz04mgr%2FrU28BgfwSaE%2FSw5yTjMMwoYjtW2JTmTHz%2FoZzuEmccuh980%2BoOr2h24Ag0z96Pao5jd8wbv7Wr229iiVq7uzsaWNxbRqgE9LwYVh%2BnL0DMNEjD4GSXZNj4mWU%2BLb63H87l%2BLjTPNcTP708wVI0%2F183nQlUbm6gua3w4Kqi2sdUZehNatDUS6k%2BTBLfILcDB2O67pOzPi90za%2B3YVkd9nBPnSRjDOv4jEBjqkAYyUM6BI%2FG4BxKGejpnewDF9EilZqCHD%2BVl0TuD48R3kSCy3VaGWJ7OT8S9I0m61Pe%2FapTCzV6dYma2Yq6x%2Fm3plBL3l4G7hMXQVHPIWEirQsDNnxXxCwziSstMvoc5YLax8r4NQo8InHW7T82nFqrJr17CLeKPG4ORY8fggFTweD%2BwU2XGUKd99NkOvpcOOFclBr3YGyyvKrHNIYflDwzr2rwQV&X-Amz-Signature=ee02007db24a3131e960041f7e563b3b849d45f8288d4dc6771d5ee8a62ca1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **Rect Transform?**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2f1c9bdf-b650-4c85-aa76-cb03a6c25099/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3QPUGS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGZThg0bp3wAkRTDmyXneIdbrMaJPEaT9ovhdNPJpkzXAiEA11P1XFHXB1oTzUxRqurQz7rXu4d1%2Fv2E7zQhAy6nyS8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIlk3%2BVVMZtvg2PRJCrcA0FvV9tmLABVCt0HNl4fYAGNrFA09oOWq9NEMqH3DUxhi1sZewL88hhKiC1AltsfuU2sWL6VFoFNExWnl4fjTlVXxD6L2P9PEu6E%2F3kNzZhrf9Jmg0Ntj2sODhtIQ7zWQ0QGWxPg1iIrwOfZzu5upEHJvTThwf7uPHmyaJ7mPsgMPTHEY7XmoXpJ8TCrcyhwMirPMp6ammcglxwKvz7FT5GiYeREo71uq%2FDViPSUTfTJWgUIbxVkn3KYxa%2Fo8jgsYk55R4vgs79Qk6pg%2Fk8UxgdELSaIa6FKY3pju%2F0pytjiFq8zrIJGXhAqCECJdJqfmnLIJC8jl48sPfx%2BgcVyGZQvL8kOzuOLBAuvyEeUd8WUqXQACwKr%2FkBgzj0Z69ltRrkcrdwtpq0rAxEPCbW6CH2hhq9k7YOfYaXAOEiuZt8XqtSZeSZHyymEzoxu0kImOKE7bpLmVBfDXh6LDmKXuZeO7Ev96UUZd5mhneE23bcj6cKgj8jG3a3wRZH90cOHCCQuKgfRRtkN0%2BZi1M0d2NZs3S1XNbKEv29G0AoLmmgmZQNMGB49vaSAAMqq1KwOrRea7QuFKm70J1RVpy7w%2F49p4m3DYua802YxG3nMjpSkbxfxFDhks8BQrVv1MOi%2FiMQGOqUBv3zP4GrBBn7bsY2pUqMJtBN9tHiPyBobjvrrV2HMxXMfbQmL7hPEB88m0qSy3azHvy3KtmSsPMXCGK729EEsZCwlchgpT%2Bwv%2ByN0LM8UmdFnEby08JvDRJVcJPKTyBVSvcgbMPyrv5pI3nCRMLVib8Cm%2B1nmo5lipYZRi5wgEYvRs%2F76PJ8oWnySKRxuSXjlqXiVp3Efo%2Bg3HMd8MiuAVsLDxEkt&X-Amz-Signature=0d8b7d99f8352747cb647257d015680355232d39a814e24efb1c3a1adc1ab198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 특정 좌표를 기준점으로 상대적인 위치값을 가지는것. 따라서 각기다른 화면비율에따라 UI 위치가 유동적으로 변함
>
>


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c51fdadf-63fd-4421-82c5-22a0de8c679f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAIZZYT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHM3TnrsBtxQaOAkEi8zBKCvr9Rq%2FtTdrjVXdtRZ0AcAIhAP8ah8hm0gNVxF5QKdA2GhyhilsheeOlDYhWvSWorTqBKv8DCC0QABoMNjM3NDIzMTgzODA1IgzDQsUEkkA4dahSwfAq3ANiVmCn4DiZrIhOZYH2vpHJPBj%2Bdzz2hXbmGd1%2BJBLk2gyz97%2B48SDsgNK3Vogfn3MHwzxCwhX3V8AZ8RCPk1HE92RDLZODEVjdXikFatXQ6tYPQB2IUrn2XD7ZBFMEY5DLtBuC7b6sCUbK2jpXsz1S2iAhj7ifJyg9SiQrU7iqXY2JK9EQFWufA6gLn%2FpsBXcxkT0Q9kfcdZei9XfzlyTgEHAx%2B8aAVSAnzlfea%2FUoSnBd9S8j5fphvGkQls8c8qTuFSYmjDh8WgB6adlmGEnqlj9cKM4FUsjDgVR5rqMFux8CcCBvlXg7lXNSOVTlqGV%2B0kGZ3%2Bmelz%2BvvruH66rb25aNvZcwG8S%2BOA1AbV6wgoSWK8ddL7aBWRZuJ%2Bib1k0yL7Axp2mX8KLyP5isswv3w4fwuz04mgr%2FrU28BgfwSaE%2FSw5yTjMMwoYjtW2JTmTHz%2FoZzuEmccuh980%2BoOr2h24Ag0z96Pao5jd8wbv7Wr229iiVq7uzsaWNxbRqgE9LwYVh%2BnL0DMNEjD4GSXZNj4mWU%2BLb63H87l%2BLjTPNcTP708wVI0%2F183nQlUbm6gua3w4Kqi2sdUZehNatDUS6k%2BTBLfILcDB2O67pOzPi90za%2B3YVkd9nBPnSRjDOv4jEBjqkAYyUM6BI%2FG4BxKGejpnewDF9EilZqCHD%2BVl0TuD48R3kSCy3VaGWJ7OT8S9I0m61Pe%2FapTCzV6dYma2Yq6x%2Fm3plBL3l4G7hMXQVHPIWEirQsDNnxXxCwziSstMvoc5YLax8r4NQo8InHW7T82nFqrJr17CLeKPG4ORY8fggFTweD%2BwU2XGUKd99NkOvpcOOFclBr3YGyyvKrHNIYflDwzr2rwQV&X-Amz-Signature=d22bab103b48db506ecd830efc52e108344e4cbd863e50313ac4ce4dd9b77efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5e2c51dd-2557-4379-9307-180d986da3f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAIZZYT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHM3TnrsBtxQaOAkEi8zBKCvr9Rq%2FtTdrjVXdtRZ0AcAIhAP8ah8hm0gNVxF5QKdA2GhyhilsheeOlDYhWvSWorTqBKv8DCC0QABoMNjM3NDIzMTgzODA1IgzDQsUEkkA4dahSwfAq3ANiVmCn4DiZrIhOZYH2vpHJPBj%2Bdzz2hXbmGd1%2BJBLk2gyz97%2B48SDsgNK3Vogfn3MHwzxCwhX3V8AZ8RCPk1HE92RDLZODEVjdXikFatXQ6tYPQB2IUrn2XD7ZBFMEY5DLtBuC7b6sCUbK2jpXsz1S2iAhj7ifJyg9SiQrU7iqXY2JK9EQFWufA6gLn%2FpsBXcxkT0Q9kfcdZei9XfzlyTgEHAx%2B8aAVSAnzlfea%2FUoSnBd9S8j5fphvGkQls8c8qTuFSYmjDh8WgB6adlmGEnqlj9cKM4FUsjDgVR5rqMFux8CcCBvlXg7lXNSOVTlqGV%2B0kGZ3%2Bmelz%2BvvruH66rb25aNvZcwG8S%2BOA1AbV6wgoSWK8ddL7aBWRZuJ%2Bib1k0yL7Axp2mX8KLyP5isswv3w4fwuz04mgr%2FrU28BgfwSaE%2FSw5yTjMMwoYjtW2JTmTHz%2FoZzuEmccuh980%2BoOr2h24Ag0z96Pao5jd8wbv7Wr229iiVq7uzsaWNxbRqgE9LwYVh%2BnL0DMNEjD4GSXZNj4mWU%2BLb63H87l%2BLjTPNcTP708wVI0%2F183nQlUbm6gua3w4Kqi2sdUZehNatDUS6k%2BTBLfILcDB2O67pOzPi90za%2B3YVkd9nBPnSRjDOv4jEBjqkAYyUM6BI%2FG4BxKGejpnewDF9EilZqCHD%2BVl0TuD48R3kSCy3VaGWJ7OT8S9I0m61Pe%2FapTCzV6dYma2Yq6x%2Fm3plBL3l4G7hMXQVHPIWEirQsDNnxXxCwziSstMvoc5YLax8r4NQo8InHW7T82nFqrJr17CLeKPG4ORY8fggFTweD%2BwU2XGUKd99NkOvpcOOFclBr3YGyyvKrHNIYflDwzr2rwQV&X-Amz-Signature=fd0d22e3b54413bec57352993eff57b5a4b680c3272544f73f58ae1dc484bcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


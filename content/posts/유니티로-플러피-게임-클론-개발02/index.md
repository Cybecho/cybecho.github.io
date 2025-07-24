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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4c19d9ad-fd43-480a-9efc-7661f1800dfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674RQRXGE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBH98PG1P90QbEPzGRdMDJCHDYY4zQ3%2B4f3pBynfTCH6AiBo%2BNPCtf4TTWVIGOi0QziJ%2BRA4BdF0S%2FrSTmTTPMagtir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNTGfBUZQAeUyxelaKtwDxr%2F7hzJBMSB2gZdfFnLVEzkjyXq3YmKF%2BFus7DC5c4iKO0dpjUTIbx%2BLnn1WlLGkmsG%2BYNDvDCZdLr%2B6AiUcxctV5upD6yccoZjyasjKQSubNdHYHnYGhPZ53Ye%2FkfVWvyBSl9WcXKMSCeOTXbzKMH%2BQxnurnRrrjRjTCZUFIxnq2L0FOZq%2F%2Bg5hOBgWKWgvbwJ%2FYAVIEncadvIR1%2FQQPBVuLgKYCPd8iLt75emTu%2F%2FedQksi3ITCAf%2Bev%2Fy1d27S1%2FlTtCFwRKBxp75KDlrW4tPNvzwO9IQAwIchS9HgwzMVc0JWbEVImmlddeLMYZsPaA%2FgR4g8Nf86wnyA14EsJ9CmpqmDFzmsy95uzUoVhTD6664TMBjFtuyxeXlSJwolywsAYc%2Ba%2BCcyxzOmfggfJ%2BaH4ucU2LLLskYx9OFtj8huVTp4vmMFVPz4wGuh3S15W4Yk%2BRW0ec4nM5KEmMBmfsAsHxmpU3h2xQrmLm4vwG1p%2BoRQREM%2F6QGFKmoiH4gINB4Be%2BN1co%2F1eEClqHYTXVwhrJt1j2lldklpyYvQ2vUHLc9OBS6Fa8AOuOWgY419fiTVAFVsaMr1fpA6DSqSKrlnOxIBe3bCa9gKUDRIgHW5F0pUsn25MMHR00w286HxAY6pgGZnbwqscs0Yi7DhBlcug%2FbvQBKK9q%2B2dwi74a%2Fmsh2ULgtYQgFVrsd7dawmsmrhv%2Bp%2F%2Bl2zVn3U7yzsir64BDMONvvugtCkAHh3TOOY%2FvvpR3DLZf5u1eS33fPDmFVekJO5NHOQ85OJlX48aI%2FX37XCThi3IGIEf6LYSgT4zSaa5xuHlLEg%2FGSzDJ8Jp4sVDd408slpbHklIs0mqunKAgpIuaLqYiY&X-Amz-Signature=cacdd82d6e9102f3f8958e3c2f2575e7c18d1b92403dec45803089150f4f13aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
//제네레이터 내부 스크립트 파일에서 특정 초 이상 지나가면 오브젝트를 삭제하는 코드
//5초 뒤 생성된 newpipe를 삭제하는 코드

Destroy(newpipe,5.0f);
```

## UI 생성방법

하이어라키에서 우클릭 - UI - Canvas

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b878d2e-a01a-4fd4-b4a0-3a0c78b446c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674RQRXGE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBH98PG1P90QbEPzGRdMDJCHDYY4zQ3%2B4f3pBynfTCH6AiBo%2BNPCtf4TTWVIGOi0QziJ%2BRA4BdF0S%2FrSTmTTPMagtir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNTGfBUZQAeUyxelaKtwDxr%2F7hzJBMSB2gZdfFnLVEzkjyXq3YmKF%2BFus7DC5c4iKO0dpjUTIbx%2BLnn1WlLGkmsG%2BYNDvDCZdLr%2B6AiUcxctV5upD6yccoZjyasjKQSubNdHYHnYGhPZ53Ye%2FkfVWvyBSl9WcXKMSCeOTXbzKMH%2BQxnurnRrrjRjTCZUFIxnq2L0FOZq%2F%2Bg5hOBgWKWgvbwJ%2FYAVIEncadvIR1%2FQQPBVuLgKYCPd8iLt75emTu%2F%2FedQksi3ITCAf%2Bev%2Fy1d27S1%2FlTtCFwRKBxp75KDlrW4tPNvzwO9IQAwIchS9HgwzMVc0JWbEVImmlddeLMYZsPaA%2FgR4g8Nf86wnyA14EsJ9CmpqmDFzmsy95uzUoVhTD6664TMBjFtuyxeXlSJwolywsAYc%2Ba%2BCcyxzOmfggfJ%2BaH4ucU2LLLskYx9OFtj8huVTp4vmMFVPz4wGuh3S15W4Yk%2BRW0ec4nM5KEmMBmfsAsHxmpU3h2xQrmLm4vwG1p%2BoRQREM%2F6QGFKmoiH4gINB4Be%2BN1co%2F1eEClqHYTXVwhrJt1j2lldklpyYvQ2vUHLc9OBS6Fa8AOuOWgY419fiTVAFVsaMr1fpA6DSqSKrlnOxIBe3bCa9gKUDRIgHW5F0pUsn25MMHR00w286HxAY6pgGZnbwqscs0Yi7DhBlcug%2FbvQBKK9q%2B2dwi74a%2Fmsh2ULgtYQgFVrsd7dawmsmrhv%2Bp%2F%2Bl2zVn3U7yzsir64BDMONvvugtCkAHh3TOOY%2FvvpR3DLZf5u1eS33fPDmFVekJO5NHOQ85OJlX48aI%2FX37XCThi3IGIEf6LYSgT4zSaa5xuHlLEg%2FGSzDJ8Jp4sVDd408slpbHklIs0mqunKAgpIuaLqYiY&X-Amz-Signature=537d11ca050e2e264d255759c15fd05f5f8d556ea1c163bb2bbcbc409c31fb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c51fdadf-63fd-4421-82c5-22a0de8c679f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674RQRXGE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBH98PG1P90QbEPzGRdMDJCHDYY4zQ3%2B4f3pBynfTCH6AiBo%2BNPCtf4TTWVIGOi0QziJ%2BRA4BdF0S%2FrSTmTTPMagtir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNTGfBUZQAeUyxelaKtwDxr%2F7hzJBMSB2gZdfFnLVEzkjyXq3YmKF%2BFus7DC5c4iKO0dpjUTIbx%2BLnn1WlLGkmsG%2BYNDvDCZdLr%2B6AiUcxctV5upD6yccoZjyasjKQSubNdHYHnYGhPZ53Ye%2FkfVWvyBSl9WcXKMSCeOTXbzKMH%2BQxnurnRrrjRjTCZUFIxnq2L0FOZq%2F%2Bg5hOBgWKWgvbwJ%2FYAVIEncadvIR1%2FQQPBVuLgKYCPd8iLt75emTu%2F%2FedQksi3ITCAf%2Bev%2Fy1d27S1%2FlTtCFwRKBxp75KDlrW4tPNvzwO9IQAwIchS9HgwzMVc0JWbEVImmlddeLMYZsPaA%2FgR4g8Nf86wnyA14EsJ9CmpqmDFzmsy95uzUoVhTD6664TMBjFtuyxeXlSJwolywsAYc%2Ba%2BCcyxzOmfggfJ%2BaH4ucU2LLLskYx9OFtj8huVTp4vmMFVPz4wGuh3S15W4Yk%2BRW0ec4nM5KEmMBmfsAsHxmpU3h2xQrmLm4vwG1p%2BoRQREM%2F6QGFKmoiH4gINB4Be%2BN1co%2F1eEClqHYTXVwhrJt1j2lldklpyYvQ2vUHLc9OBS6Fa8AOuOWgY419fiTVAFVsaMr1fpA6DSqSKrlnOxIBe3bCa9gKUDRIgHW5F0pUsn25MMHR00w286HxAY6pgGZnbwqscs0Yi7DhBlcug%2FbvQBKK9q%2B2dwi74a%2Fmsh2ULgtYQgFVrsd7dawmsmrhv%2Bp%2F%2Bl2zVn3U7yzsir64BDMONvvugtCkAHh3TOOY%2FvvpR3DLZf5u1eS33fPDmFVekJO5NHOQ85OJlX48aI%2FX37XCThi3IGIEf6LYSgT4zSaa5xuHlLEg%2FGSzDJ8Jp4sVDd408slpbHklIs0mqunKAgpIuaLqYiY&X-Amz-Signature=549f05d7b52514f94e56056351450127b6d94c50405c7a2227f065589fd17399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5e2c51dd-2557-4379-9307-180d986da3f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674RQRXGE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBH98PG1P90QbEPzGRdMDJCHDYY4zQ3%2B4f3pBynfTCH6AiBo%2BNPCtf4TTWVIGOi0QziJ%2BRA4BdF0S%2FrSTmTTPMagtir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNTGfBUZQAeUyxelaKtwDxr%2F7hzJBMSB2gZdfFnLVEzkjyXq3YmKF%2BFus7DC5c4iKO0dpjUTIbx%2BLnn1WlLGkmsG%2BYNDvDCZdLr%2B6AiUcxctV5upD6yccoZjyasjKQSubNdHYHnYGhPZ53Ye%2FkfVWvyBSl9WcXKMSCeOTXbzKMH%2BQxnurnRrrjRjTCZUFIxnq2L0FOZq%2F%2Bg5hOBgWKWgvbwJ%2FYAVIEncadvIR1%2FQQPBVuLgKYCPd8iLt75emTu%2F%2FedQksi3ITCAf%2Bev%2Fy1d27S1%2FlTtCFwRKBxp75KDlrW4tPNvzwO9IQAwIchS9HgwzMVc0JWbEVImmlddeLMYZsPaA%2FgR4g8Nf86wnyA14EsJ9CmpqmDFzmsy95uzUoVhTD6664TMBjFtuyxeXlSJwolywsAYc%2Ba%2BCcyxzOmfggfJ%2BaH4ucU2LLLskYx9OFtj8huVTp4vmMFVPz4wGuh3S15W4Yk%2BRW0ec4nM5KEmMBmfsAsHxmpU3h2xQrmLm4vwG1p%2BoRQREM%2F6QGFKmoiH4gINB4Be%2BN1co%2F1eEClqHYTXVwhrJt1j2lldklpyYvQ2vUHLc9OBS6Fa8AOuOWgY419fiTVAFVsaMr1fpA6DSqSKrlnOxIBe3bCa9gKUDRIgHW5F0pUsn25MMHR00w286HxAY6pgGZnbwqscs0Yi7DhBlcug%2FbvQBKK9q%2B2dwi74a%2Fmsh2ULgtYQgFVrsd7dawmsmrhv%2Bp%2F%2Bl2zVn3U7yzsir64BDMONvvugtCkAHh3TOOY%2FvvpR3DLZf5u1eS33fPDmFVekJO5NHOQ85OJlX48aI%2FX37XCThi3IGIEf6LYSgT4zSaa5xuHlLEg%2FGSzDJ8Jp4sVDd408slpbHklIs0mqunKAgpIuaLqYiY&X-Amz-Signature=cb7ee837b867869f7d959eb41c6fff7a9908180634d0f9b9e3c6d37b7a87ca79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4c19d9ad-fd43-480a-9efc-7661f1800dfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OHCJNP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDbhqus7PU3%2BSBhedl6Sz6%2BIYn46OKie30FYbixxX3JNAIgCE6gylk%2F1yzbMf8WFlwh5%2FIjj2zBdnAb%2BJCg8amrNuMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMzxKHN%2FofBvrSn%2FRCrcA%2BTWhIcszZUdlktlbd%2FYCefyfoo08Pg1n5nBQdeVFfxzCrkZdu9TD2k6rQxSZNdo1iIAVQnoWs1A7zCep79OKybVVnHhi7WcpjBm%2FnTUmKT4gdkNk%2FMAfAHdar6Od%2B6sQS4Cugcz1cSmA5CgzkjnUu3sWi%2BU5CfQi0q0ioRoXOq%2BBDqbCaW9ihNrxCCh%2BLq2stI3ICNp6Ua7KqKdoUN%2F6Ehtk%2BKctQZK2VcYJnHD%2BULFv2JVQCl7ErMvnx4dHLbnzWOo6YSObjZqJj09pqQCPJxDd2YjujPWsxMFol4sNvYXJzUwnQ6yF8srVB%2BnBCI%2BDe0Wh86VsDMJrSfIIKLxx1HEPvVOP9Zf0x%2FUJCVn77Y1KXd8X1I9mMQiPeKQh67VGwGuRJ1TXVoWge5FsaAu0o0cVVR0qhkS4O8nHiWqKZIkjWiHJCh0Hyfvo6xKJu15b3GyQTIM63BhiRBEGWHnwgXuxcwrxUGX2ypayJESifOm%2B%2BBVJQwdctwGM%2FZrsKldXAme4oU0KKVA2%2BmqBWhvMY7LSEEU1cjWuSQc3eN0mHvhNW%2FFSl2Ey9MKTWycyoizRbFIPMTaYxSn21MbfhmIma4EWE1bNSzxbF%2B5EumnClnisR%2FkufFMnEu5gGtcMOT2h8QGOqUB0IWYgXhqxRX77iqfxmKQb7N8FvmuGP%2FmUNNovyxFs%2B77R5i7eEHqt9F2C%2BBKd5Z4XNrGZ96lDU0FdPk2triy4Rr4320LKN2FsMPdA3qt6%2Fp8WvQnFOv4hTOSWVbHrWMPR4hgrObAxeocJjAlsyhjSwQ0xpvcy%2Bav5zVygY8IhMOn3hfWGdiDNtsMWv%2Fud74BXSJcD9ujdFh8nJmse%2BtXnqib4R%2B6&X-Amz-Signature=f7f4b91a9182abe95df8063a9cdc823305219b7cb891ad94f45bcfaeb687458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
//제네레이터 내부 스크립트 파일에서 특정 초 이상 지나가면 오브젝트를 삭제하는 코드
//5초 뒤 생성된 newpipe를 삭제하는 코드

Destroy(newpipe,5.0f);
```

## UI 생성방법

하이어라키에서 우클릭 - UI - Canvas

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b878d2e-a01a-4fd4-b4a0-3a0c78b446c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OHCJNP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDbhqus7PU3%2BSBhedl6Sz6%2BIYn46OKie30FYbixxX3JNAIgCE6gylk%2F1yzbMf8WFlwh5%2FIjj2zBdnAb%2BJCg8amrNuMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMzxKHN%2FofBvrSn%2FRCrcA%2BTWhIcszZUdlktlbd%2FYCefyfoo08Pg1n5nBQdeVFfxzCrkZdu9TD2k6rQxSZNdo1iIAVQnoWs1A7zCep79OKybVVnHhi7WcpjBm%2FnTUmKT4gdkNk%2FMAfAHdar6Od%2B6sQS4Cugcz1cSmA5CgzkjnUu3sWi%2BU5CfQi0q0ioRoXOq%2BBDqbCaW9ihNrxCCh%2BLq2stI3ICNp6Ua7KqKdoUN%2F6Ehtk%2BKctQZK2VcYJnHD%2BULFv2JVQCl7ErMvnx4dHLbnzWOo6YSObjZqJj09pqQCPJxDd2YjujPWsxMFol4sNvYXJzUwnQ6yF8srVB%2BnBCI%2BDe0Wh86VsDMJrSfIIKLxx1HEPvVOP9Zf0x%2FUJCVn77Y1KXd8X1I9mMQiPeKQh67VGwGuRJ1TXVoWge5FsaAu0o0cVVR0qhkS4O8nHiWqKZIkjWiHJCh0Hyfvo6xKJu15b3GyQTIM63BhiRBEGWHnwgXuxcwrxUGX2ypayJESifOm%2B%2BBVJQwdctwGM%2FZrsKldXAme4oU0KKVA2%2BmqBWhvMY7LSEEU1cjWuSQc3eN0mHvhNW%2FFSl2Ey9MKTWycyoizRbFIPMTaYxSn21MbfhmIma4EWE1bNSzxbF%2B5EumnClnisR%2FkufFMnEu5gGtcMOT2h8QGOqUB0IWYgXhqxRX77iqfxmKQb7N8FvmuGP%2FmUNNovyxFs%2B77R5i7eEHqt9F2C%2BBKd5Z4XNrGZ96lDU0FdPk2triy4Rr4320LKN2FsMPdA3qt6%2Fp8WvQnFOv4hTOSWVbHrWMPR4hgrObAxeocJjAlsyhjSwQ0xpvcy%2Bav5zVygY8IhMOn3hfWGdiDNtsMWv%2Fud74BXSJcD9ujdFh8nJmse%2BtXnqib4R%2B6&X-Amz-Signature=1db4505c43779efe2a60826ba7646a6594f5d45abc94e8d152a4c2c7e18e7fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **Rect Transform?**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2f1c9bdf-b650-4c85-aa76-cb03a6c25099/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGBFO7QJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBZlU0ZmCcK%2BEYfHuneSWkKddmqwQJUBeuYR9JoQvU8%2BAiAEYmwnk8lheYphzRpoyLxM%2FcgEHrwhz%2Bc120EJ2AF0LCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMYIAmpnCbLpKSxQOeKtwDMERJKshcnxa69XGjcmZrbgtNRBsg72awa6GdYNmVUPKCM3iuwXzjE%2BA5ZZvKgvOBcx7dGWv93Ky1UPOhXLFGDsmelTT62XaxhXBrd45VnxAqoimWetkLz4%2FV3vb7%2Fp87M10UplIyBIvShWIEkuCthABlwimn1KR9BEjjgC9pe9bmQ5CTtemu3i1m8OXTSeLRTPsgg1LgcZUwQxgjEVJyy0gragKiuif3V97draqa3vcmanm82wWev2ia%2F4RCUQfqD236IWBCQNBD%2BNZ34JU9xgEJuq88XGz%2BM8yW0KuQ3i%2Fg18h2%2Feq7GxdObSVxbmXi0tLKydM6jaXbi8wvDd2Pe9yzqUmNAWFInoGUBDdzTCw11cxwqg6aFRWOAp2o846YYK0aLU5Azz4DJFP3agAPFNd5xjM3HLoc%2BJe7Okh13aybUKLeX4CvJ8J0MnIQhT3CBAOBzp4iy7tQBqXyyOzO%2BD71Iv%2BZcUhx23roCpw7e1HgH4ROkVL7weMnlsujfeHzwYhUwtZywCa1HL%2Fx64FAMWnXidPWEt9v1ZPpttBneFkH4X4NzX3hkb%2FdH9eaH2tlGPbLL0CIwlgIwQf8zEZqAzDHTrQXZGUcalFxYUr3%2FJo6L2vlysU8MRZ1OF4w4PWHxAY6pgEU4G081pFDiJqlCCll2L5SkFLyZqxVS4ge%2FlItZcZsDpL5vu11CWwZHnU6gaak4Qm61jUyC%2FUIJyuwlqNvn1pHYzAcgq1DeyIKaJSiFnsRDyDSg9UMkUB6YvRr2%2FMBuEO%2F%2Fs5ODsMRWVP4xyao7zBO1e%2Bt0P5xT0DJyLT7sOTJHB92%2BnP5KzJhVnwJGlMqwIZQV1XqCbghCxyyBrBFR7gulLiPXwXQ&X-Amz-Signature=ee310af6a8c903435ae9a247abbf2baaf169898cc8d207cbca5c2ff2c0345416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c51fdadf-63fd-4421-82c5-22a0de8c679f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OHCJNP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDbhqus7PU3%2BSBhedl6Sz6%2BIYn46OKie30FYbixxX3JNAIgCE6gylk%2F1yzbMf8WFlwh5%2FIjj2zBdnAb%2BJCg8amrNuMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMzxKHN%2FofBvrSn%2FRCrcA%2BTWhIcszZUdlktlbd%2FYCefyfoo08Pg1n5nBQdeVFfxzCrkZdu9TD2k6rQxSZNdo1iIAVQnoWs1A7zCep79OKybVVnHhi7WcpjBm%2FnTUmKT4gdkNk%2FMAfAHdar6Od%2B6sQS4Cugcz1cSmA5CgzkjnUu3sWi%2BU5CfQi0q0ioRoXOq%2BBDqbCaW9ihNrxCCh%2BLq2stI3ICNp6Ua7KqKdoUN%2F6Ehtk%2BKctQZK2VcYJnHD%2BULFv2JVQCl7ErMvnx4dHLbnzWOo6YSObjZqJj09pqQCPJxDd2YjujPWsxMFol4sNvYXJzUwnQ6yF8srVB%2BnBCI%2BDe0Wh86VsDMJrSfIIKLxx1HEPvVOP9Zf0x%2FUJCVn77Y1KXd8X1I9mMQiPeKQh67VGwGuRJ1TXVoWge5FsaAu0o0cVVR0qhkS4O8nHiWqKZIkjWiHJCh0Hyfvo6xKJu15b3GyQTIM63BhiRBEGWHnwgXuxcwrxUGX2ypayJESifOm%2B%2BBVJQwdctwGM%2FZrsKldXAme4oU0KKVA2%2BmqBWhvMY7LSEEU1cjWuSQc3eN0mHvhNW%2FFSl2Ey9MKTWycyoizRbFIPMTaYxSn21MbfhmIma4EWE1bNSzxbF%2B5EumnClnisR%2FkufFMnEu5gGtcMOT2h8QGOqUB0IWYgXhqxRX77iqfxmKQb7N8FvmuGP%2FmUNNovyxFs%2B77R5i7eEHqt9F2C%2BBKd5Z4XNrGZ96lDU0FdPk2triy4Rr4320LKN2FsMPdA3qt6%2Fp8WvQnFOv4hTOSWVbHrWMPR4hgrObAxeocJjAlsyhjSwQ0xpvcy%2Bav5zVygY8IhMOn3hfWGdiDNtsMWv%2Fud74BXSJcD9ujdFh8nJmse%2BtXnqib4R%2B6&X-Amz-Signature=619a137933c9ee973bb36802747ca7b2697ac952ba21124eecf75428672787f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5e2c51dd-2557-4379-9307-180d986da3f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OHCJNP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDbhqus7PU3%2BSBhedl6Sz6%2BIYn46OKie30FYbixxX3JNAIgCE6gylk%2F1yzbMf8WFlwh5%2FIjj2zBdnAb%2BJCg8amrNuMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMzxKHN%2FofBvrSn%2FRCrcA%2BTWhIcszZUdlktlbd%2FYCefyfoo08Pg1n5nBQdeVFfxzCrkZdu9TD2k6rQxSZNdo1iIAVQnoWs1A7zCep79OKybVVnHhi7WcpjBm%2FnTUmKT4gdkNk%2FMAfAHdar6Od%2B6sQS4Cugcz1cSmA5CgzkjnUu3sWi%2BU5CfQi0q0ioRoXOq%2BBDqbCaW9ihNrxCCh%2BLq2stI3ICNp6Ua7KqKdoUN%2F6Ehtk%2BKctQZK2VcYJnHD%2BULFv2JVQCl7ErMvnx4dHLbnzWOo6YSObjZqJj09pqQCPJxDd2YjujPWsxMFol4sNvYXJzUwnQ6yF8srVB%2BnBCI%2BDe0Wh86VsDMJrSfIIKLxx1HEPvVOP9Zf0x%2FUJCVn77Y1KXd8X1I9mMQiPeKQh67VGwGuRJ1TXVoWge5FsaAu0o0cVVR0qhkS4O8nHiWqKZIkjWiHJCh0Hyfvo6xKJu15b3GyQTIM63BhiRBEGWHnwgXuxcwrxUGX2ypayJESifOm%2B%2BBVJQwdctwGM%2FZrsKldXAme4oU0KKVA2%2BmqBWhvMY7LSEEU1cjWuSQc3eN0mHvhNW%2FFSl2Ey9MKTWycyoizRbFIPMTaYxSn21MbfhmIma4EWE1bNSzxbF%2B5EumnClnisR%2FkufFMnEu5gGtcMOT2h8QGOqUB0IWYgXhqxRX77iqfxmKQb7N8FvmuGP%2FmUNNovyxFs%2B77R5i7eEHqt9F2C%2BBKd5Z4XNrGZ96lDU0FdPk2triy4Rr4320LKN2FsMPdA3qt6%2Fp8WvQnFOv4hTOSWVbHrWMPR4hgrObAxeocJjAlsyhjSwQ0xpvcy%2Bav5zVygY8IhMOn3hfWGdiDNtsMWv%2Fud74BXSJcD9ujdFh8nJmse%2BtXnqib4R%2B6&X-Amz-Signature=2b6c352e17cb3a1afa5a80c6cb5e5cb8c0a75434eb934f8e776f6bb227c66305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


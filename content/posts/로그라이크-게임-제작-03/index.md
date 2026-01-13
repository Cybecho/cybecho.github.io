---
title: "로그라이크 게임 제작 03"
date: 2023-03-17T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "유니티 로그라이크 게임에서 포스트 프로세싱을 설정하는 방법에 대한 튜토리얼로, Cinemachine을 사용하여 초점 대상을 애니메이션화하고 DepthOfField 프로파일을 설정하는 단계가 포함되어 있습니다. MainCamera에 포스트 프로세싱 컴포넌트를 추가하고 새로운 포스트 프로세싱 프로필을 생성하는 방법도 설명됩니다."
notion_id: "cf13efee-63d4-4806-a536-ffd3acfaea65"
notion_url: "https://www.notion.so/03-cf13efee63d44806a536ffd3acfaea65"
---

# 로그라이크 게임 제작 03

> **Summary**
> 유니티 로그라이크 게임에서 포스트 프로세싱을 설정하는 방법에 대한 튜토리얼로, Cinemachine을 사용하여 초점 대상을 애니메이션화하고 DepthOfField 프로파일을 설정하는 단계가 포함되어 있습니다. MainCamera에 포스트 프로세싱 컴포넌트를 추가하고 새로운 포스트 프로세싱 프로필을 생성하는 방법도 설명됩니다.

---

![Image](image_dce3bd9defdb.png)


## URP로 생성했기 때문에 방법이 좀 다를 수 있다

🔗 [https://forum.unity.com/threads/cant-get-post-process-volume-to-work-with-cinemachines.958534/](https://forum.unity.com/threads/cant-get-post-process-volume-to-work-with-cinemachines.958534/)

튜토리얼에 설명된 대로 작동하도록 할 수 있습니다.

검사관의 이미지를 게시할 수 있습니까?

또한: 랙 포커스의 경우 시네머신에는 이를 위한 특수 기능이 있으므로 볼륨을 블렌딩할 필요가 없습니다.

1. 초점 대상을 나타내는 보이지 않는 게임 개체를 만들고 타임라인에서 직접 위치를 애니메이션화합니다.
1. 그런 다음 vcam에 CinemachinePostProcessing 확장을 추가합니다. DepthOfField로 프로파일을 지정하십시오. 모든 DoF 확인란을 활성화합니다.
1. 원하는 깊이를 제공하도록 DoF 프로필을 설정합니다(아래 예 참조). 초점 거리 설정은 무엇이든 가능합니다(덮어쓰기됨).
1. CinemachinePostProcessing 인스펙터에서 Focus Tracking을 "Custom Target"으로 설정합니다.
1. 초점 대상 필드에서 초점 대상 개체 사용
이제 CM vcam은 초점 거리를 카메라와 초점 대상 사이의 거리로 동적으로 설정합니다.

![Image](image_0ee6b2fe7984.png)

![Image](image_e4a8ff3eb270.png)

🎥 [동영상 보기](https://www.youtube.com/watch?v=_w45Z1X-9xs)

🎥 [동영상 보기](https://www.youtube.com/watch?v=jFqOEvrVZeE)

🎥 [동영상 보기](https://www.youtube.com/watch?v=fAJWpCmF918)

![Image](image_f61b723c6fbd.png)

![Image](image_faebc388f7f7.png)

![Image](image_a722b01716bd.png)


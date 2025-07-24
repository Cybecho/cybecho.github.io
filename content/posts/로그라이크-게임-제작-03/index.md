---
title: "로그라이크 게임 제작 03"
date: 2023-03-17T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "URP를 사용하여 포스트 프로세싱을 설정하는 방법에 대한 튜토리얼로, 시네머신을 활용한 초점 대상 애니메이션과 DoF 프로필 설정을 포함합니다. MainCamera에 포스트 프로세싱 컴포넌트를 추가하고 새로운 프로필을 생성하는 과정도 설명되어 있습니다."
notion_id: "cf13efee-63d4-4806-a536-ffd3acfaea65"
notion_url: "https://www.notion.so/03-cf13efee63d44806a536ffd3acfaea65"
---

# 로그라이크 게임 제작 03

> **Summary**
> URP를 사용하여 포스트 프로세싱을 설정하는 방법에 대한 튜토리얼로, 시네머신을 활용한 초점 대상 애니메이션과 DoF 프로필 설정을 포함합니다. MainCamera에 포스트 프로세싱 컴포넌트를 추가하고 새로운 프로필을 생성하는 과정도 설명되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ede1ec84-1a05-4218-a24b-42557c5f56ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPE5UO7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDBraYd8BFxLwkYfNiXVewTJZO3Uo8dyshR6nupiTl%2B%2FwIhAK4MOq3qm13BF0UizJJe%2FEEc8JKlTPl3gVnz2t%2FTh8KcKv8DCCoQABoMNjM3NDIzMTgzODA1IgyEHEn5CQIJqPklhe8q3AMQMvR9NQNfa8BeMmRTasTkj%2FPYTESCcYEsgtk2LkcXczbAaUTJaSxul40XMqd2VhS3Pwd2Yut625OIvj2WygdL8hP0DlgDr%2FDHv%2BWoDcNdCf2pQmQgcZgbQo8hs4umLITHJ3FDqULDWNi368MpCpNo0GXho2PggrqeSw7CPf%2Bl8WKccDJKj%2F778kPzUTYU2J8C38tSM2yz2xbfilrPzehiYpkezNIq2FhLuPa8HZeZcRvm8ON%2BLh0s6ifae51VabYQ0r%2FHH28kylrJ8qVpVk6uVH0LC8CU5T7LuUKb7V%2BMvFdlQWQGzV91gJkSYCpfTzkKdmrdpzYmNBgDFEMt7vTGBvUXqw6vf3pHcO3ahL5YTIAIUxNGXD6uQ8stb%2FWOak7juol55TlHV5a6FeL8ePUef3aWpU1dqrlxRCNuOwFuwlqj8sPPysY6NR7rMgxhmBv7vblgQ3qUMV2exldYWxuCFaAyp3gxPyIdEcLQS%2FJX6NWHHWPY9QZwqhxuv00ULY4NW8HqPzhbznp5E7VHP1%2BtLo1L%2FkdzyWMT0VCpcprBys5pSwLHr0nyU5GtrqhjEda2LCT9sq6YTJcwiIwk0zmUGKavCQhUSFo9Yql6N20VUgu9WfvxmCdiACZtSzCp9ofEBjqkAeWjTVmEuQjtcsU%2FgiW57DeAIDfnocAOxGLrLIXnbQDz20xP8LfK1v9tKvzr1FcETAl%2BBdr%2B9rfYMdiWgUazb2rkAqnpHoRNbVsT8AJQcIILbltIG%2BuyVfTu2wr9HjUnwDObZHhJDkhn9Pig23ix%2FqbS2sAhy0F%2FlundriRqWrrNOu%2BchB6WPzpOmxxs4%2FMNs6Nz3TOyj1I95azIblzubGPHlWbF&X-Amz-Signature=ce4b49ccbacc9753e476672eaecdd9ce2ca0451b65ed1e16e47b7f10c08b40f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02680df3-2d71-49e6-99e6-13f4736ae82c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPE5UO7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDBraYd8BFxLwkYfNiXVewTJZO3Uo8dyshR6nupiTl%2B%2FwIhAK4MOq3qm13BF0UizJJe%2FEEc8JKlTPl3gVnz2t%2FTh8KcKv8DCCoQABoMNjM3NDIzMTgzODA1IgyEHEn5CQIJqPklhe8q3AMQMvR9NQNfa8BeMmRTasTkj%2FPYTESCcYEsgtk2LkcXczbAaUTJaSxul40XMqd2VhS3Pwd2Yut625OIvj2WygdL8hP0DlgDr%2FDHv%2BWoDcNdCf2pQmQgcZgbQo8hs4umLITHJ3FDqULDWNi368MpCpNo0GXho2PggrqeSw7CPf%2Bl8WKccDJKj%2F778kPzUTYU2J8C38tSM2yz2xbfilrPzehiYpkezNIq2FhLuPa8HZeZcRvm8ON%2BLh0s6ifae51VabYQ0r%2FHH28kylrJ8qVpVk6uVH0LC8CU5T7LuUKb7V%2BMvFdlQWQGzV91gJkSYCpfTzkKdmrdpzYmNBgDFEMt7vTGBvUXqw6vf3pHcO3ahL5YTIAIUxNGXD6uQ8stb%2FWOak7juol55TlHV5a6FeL8ePUef3aWpU1dqrlxRCNuOwFuwlqj8sPPysY6NR7rMgxhmBv7vblgQ3qUMV2exldYWxuCFaAyp3gxPyIdEcLQS%2FJX6NWHHWPY9QZwqhxuv00ULY4NW8HqPzhbznp5E7VHP1%2BtLo1L%2FkdzyWMT0VCpcprBys5pSwLHr0nyU5GtrqhjEda2LCT9sq6YTJcwiIwk0zmUGKavCQhUSFo9Yql6N20VUgu9WfvxmCdiACZtSzCp9ofEBjqkAeWjTVmEuQjtcsU%2FgiW57DeAIDfnocAOxGLrLIXnbQDz20xP8LfK1v9tKvzr1FcETAl%2BBdr%2B9rfYMdiWgUazb2rkAqnpHoRNbVsT8AJQcIILbltIG%2BuyVfTu2wr9HjUnwDObZHhJDkhn9Pig23ix%2FqbS2sAhy0F%2FlundriRqWrrNOu%2BchB6WPzpOmxxs4%2FMNs6Nz3TOyj1I95azIblzubGPHlWbF&X-Amz-Signature=c6ab3b7ebfbb57e84c391fec9504c4b3c5782c72c2effdf651afd30282fdabb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://forum.unity.com/attachments/upload_2020-8-27_13-38-32-png.688971/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=_w45Z1X-9xs)

🎥 [동영상 보기](https://www.youtube.com/watch?v=jFqOEvrVZeE)

🎥 [동영상 보기](https://www.youtube.com/watch?v=fAJWpCmF918)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/78f13093-babd-4fb8-b135-7bccfe959862/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPE5UO7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDBraYd8BFxLwkYfNiXVewTJZO3Uo8dyshR6nupiTl%2B%2FwIhAK4MOq3qm13BF0UizJJe%2FEEc8JKlTPl3gVnz2t%2FTh8KcKv8DCCoQABoMNjM3NDIzMTgzODA1IgyEHEn5CQIJqPklhe8q3AMQMvR9NQNfa8BeMmRTasTkj%2FPYTESCcYEsgtk2LkcXczbAaUTJaSxul40XMqd2VhS3Pwd2Yut625OIvj2WygdL8hP0DlgDr%2FDHv%2BWoDcNdCf2pQmQgcZgbQo8hs4umLITHJ3FDqULDWNi368MpCpNo0GXho2PggrqeSw7CPf%2Bl8WKccDJKj%2F778kPzUTYU2J8C38tSM2yz2xbfilrPzehiYpkezNIq2FhLuPa8HZeZcRvm8ON%2BLh0s6ifae51VabYQ0r%2FHH28kylrJ8qVpVk6uVH0LC8CU5T7LuUKb7V%2BMvFdlQWQGzV91gJkSYCpfTzkKdmrdpzYmNBgDFEMt7vTGBvUXqw6vf3pHcO3ahL5YTIAIUxNGXD6uQ8stb%2FWOak7juol55TlHV5a6FeL8ePUef3aWpU1dqrlxRCNuOwFuwlqj8sPPysY6NR7rMgxhmBv7vblgQ3qUMV2exldYWxuCFaAyp3gxPyIdEcLQS%2FJX6NWHHWPY9QZwqhxuv00ULY4NW8HqPzhbznp5E7VHP1%2BtLo1L%2FkdzyWMT0VCpcprBys5pSwLHr0nyU5GtrqhjEda2LCT9sq6YTJcwiIwk0zmUGKavCQhUSFo9Yql6N20VUgu9WfvxmCdiACZtSzCp9ofEBjqkAeWjTVmEuQjtcsU%2FgiW57DeAIDfnocAOxGLrLIXnbQDz20xP8LfK1v9tKvzr1FcETAl%2BBdr%2B9rfYMdiWgUazb2rkAqnpHoRNbVsT8AJQcIILbltIG%2BuyVfTu2wr9HjUnwDObZHhJDkhn9Pig23ix%2FqbS2sAhy0F%2FlundriRqWrrNOu%2BchB6WPzpOmxxs4%2FMNs6Nz3TOyj1I95azIblzubGPHlWbF&X-Amz-Signature=94236fa4cee3a6a1144252bc060e7dd9061d7d38ef410d823e31172cafc4a775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a367a31b-5cff-492b-9711-0d588a7cdb8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPE5UO7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDBraYd8BFxLwkYfNiXVewTJZO3Uo8dyshR6nupiTl%2B%2FwIhAK4MOq3qm13BF0UizJJe%2FEEc8JKlTPl3gVnz2t%2FTh8KcKv8DCCoQABoMNjM3NDIzMTgzODA1IgyEHEn5CQIJqPklhe8q3AMQMvR9NQNfa8BeMmRTasTkj%2FPYTESCcYEsgtk2LkcXczbAaUTJaSxul40XMqd2VhS3Pwd2Yut625OIvj2WygdL8hP0DlgDr%2FDHv%2BWoDcNdCf2pQmQgcZgbQo8hs4umLITHJ3FDqULDWNi368MpCpNo0GXho2PggrqeSw7CPf%2Bl8WKccDJKj%2F778kPzUTYU2J8C38tSM2yz2xbfilrPzehiYpkezNIq2FhLuPa8HZeZcRvm8ON%2BLh0s6ifae51VabYQ0r%2FHH28kylrJ8qVpVk6uVH0LC8CU5T7LuUKb7V%2BMvFdlQWQGzV91gJkSYCpfTzkKdmrdpzYmNBgDFEMt7vTGBvUXqw6vf3pHcO3ahL5YTIAIUxNGXD6uQ8stb%2FWOak7juol55TlHV5a6FeL8ePUef3aWpU1dqrlxRCNuOwFuwlqj8sPPysY6NR7rMgxhmBv7vblgQ3qUMV2exldYWxuCFaAyp3gxPyIdEcLQS%2FJX6NWHHWPY9QZwqhxuv00ULY4NW8HqPzhbznp5E7VHP1%2BtLo1L%2FkdzyWMT0VCpcprBys5pSwLHr0nyU5GtrqhjEda2LCT9sq6YTJcwiIwk0zmUGKavCQhUSFo9Yql6N20VUgu9WfvxmCdiACZtSzCp9ofEBjqkAeWjTVmEuQjtcsU%2FgiW57DeAIDfnocAOxGLrLIXnbQDz20xP8LfK1v9tKvzr1FcETAl%2BBdr%2B9rfYMdiWgUazb2rkAqnpHoRNbVsT8AJQcIILbltIG%2BuyVfTu2wr9HjUnwDObZHhJDkhn9Pig23ix%2FqbS2sAhy0F%2FlundriRqWrrNOu%2BchB6WPzpOmxxs4%2FMNs6Nz3TOyj1I95azIblzubGPHlWbF&X-Amz-Signature=2e176aab8036db2d4b76de274799fe6dab55ee6180f33bf5f2e14e613f261560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a0f91ade-0b4c-4a7c-852f-bcdaddc18a1a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPE5UO7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDBraYd8BFxLwkYfNiXVewTJZO3Uo8dyshR6nupiTl%2B%2FwIhAK4MOq3qm13BF0UizJJe%2FEEc8JKlTPl3gVnz2t%2FTh8KcKv8DCCoQABoMNjM3NDIzMTgzODA1IgyEHEn5CQIJqPklhe8q3AMQMvR9NQNfa8BeMmRTasTkj%2FPYTESCcYEsgtk2LkcXczbAaUTJaSxul40XMqd2VhS3Pwd2Yut625OIvj2WygdL8hP0DlgDr%2FDHv%2BWoDcNdCf2pQmQgcZgbQo8hs4umLITHJ3FDqULDWNi368MpCpNo0GXho2PggrqeSw7CPf%2Bl8WKccDJKj%2F778kPzUTYU2J8C38tSM2yz2xbfilrPzehiYpkezNIq2FhLuPa8HZeZcRvm8ON%2BLh0s6ifae51VabYQ0r%2FHH28kylrJ8qVpVk6uVH0LC8CU5T7LuUKb7V%2BMvFdlQWQGzV91gJkSYCpfTzkKdmrdpzYmNBgDFEMt7vTGBvUXqw6vf3pHcO3ahL5YTIAIUxNGXD6uQ8stb%2FWOak7juol55TlHV5a6FeL8ePUef3aWpU1dqrlxRCNuOwFuwlqj8sPPysY6NR7rMgxhmBv7vblgQ3qUMV2exldYWxuCFaAyp3gxPyIdEcLQS%2FJX6NWHHWPY9QZwqhxuv00ULY4NW8HqPzhbznp5E7VHP1%2BtLo1L%2FkdzyWMT0VCpcprBys5pSwLHr0nyU5GtrqhjEda2LCT9sq6YTJcwiIwk0zmUGKavCQhUSFo9Yql6N20VUgu9WfvxmCdiACZtSzCp9ofEBjqkAeWjTVmEuQjtcsU%2FgiW57DeAIDfnocAOxGLrLIXnbQDz20xP8LfK1v9tKvzr1FcETAl%2BBdr%2B9rfYMdiWgUazb2rkAqnpHoRNbVsT8AJQcIILbltIG%2BuyVfTu2wr9HjUnwDObZHhJDkhn9Pig23ix%2FqbS2sAhy0F%2FlundriRqWrrNOu%2BchB6WPzpOmxxs4%2FMNs6Nz3TOyj1I95azIblzubGPHlWbF&X-Amz-Signature=ee68e6818948964e53511ebe54bf2789bb2fb01b8c68a4adba9cb9e4c4aa47f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


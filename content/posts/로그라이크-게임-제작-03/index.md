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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ede1ec84-1a05-4218-a24b-42557c5f56ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5KXBGM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKFI8xgvoatPnN5DOD2WOzsVFmbSNWUC52Bb1a9Mp2uQIhAJIhSa5fmVLGj5JBdh3%2FWEhv8bntKa90JcbnKpNZJf36Kv8DCCkQABoMNjM3NDIzMTgzODA1Igz6IGJNLub4jWfD3sMq3ANoKIFJwTyFaHKF1YBQQQu0ssnCwHiW72qOn8Jk6CdvaznS62Zmh64e2qmzp%2B4%2Fv8DTS%2FHZrIIqCFkwsqPe%2FkmLX%2BCayBcL9d%2FV9p4w3DDPuaSyYhp4QitjS%2FZsk7RgDmDp7vdpDMqSsiB%2BVkKVbXnyBB8%2BY8h4op2XKlS0HN8%2Fma2AxJdYaZNZcFPvuyovxgrZT1DDY%2FNWGux6Tg3qjwzWbkTZyzkvxjKB6A%2FpsthzZV2Y85PfnGXnun%2F10aO7HDGJx1kz0PWiHX5mwhCYi9akJFZfpO3eyb93I8A9moia%2BiFCZJSRhHEfxW2%2BkjcLJNGuQSvi2NYbz0t5a7VB8w30Z2Q0%2F7AcVvQxXXPQt6PM1At5joIUrUu1T3hW%2F6SRzj8Lx8Lx2MA%2BWFU8FJLQEuVNS3d0N%2B4M4GPA9Z5Syy3yirRPOdINCIPqk0BdCW5MBHMNP2b%2BzVOn76Eql3GgYZc31ojpraTRiIyWDePHLhZDj%2FACiNYNayQ5fMCPCZ2CIl9SeW6DNkTBYjCO%2FCy8xvbjIpdm9n3lzQOMXktdendFVp7OjEK%2FCbHZGloSXEJNuyemf9AJb6UfvX%2B7rIDg6dHC0SRvGj3wCCQi%2BDKHHg4%2BlxVO2pMwTjLeUxgHUDCcz4fEBjqkAZ3S06j47l3ll5Cpjk%2FGOfzX1PfLTyjOWLuj8MgvpTuGejwpYXCGxpnRv7LhK%2FoWC%2BSBGW5iNi61E7XMwnIeLXVSbk4pb00oup1D6PI0FWvys6ENo9Va6kMwE7vL2Q6TOCTCJF6V03lK6lst%2Fy%2F5XkrR8HpQrVylqWmIjurFMItA21ASFjaWPl5xrgaOOG4eh1Mb6SgKnnP3D1t6%2B%2FXtAHUSd7qJ&X-Amz-Signature=e5981d68fdb393fd4485a98ebdf39020757f51ecc6f64873dd64a62c8ffdbc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02680df3-2d71-49e6-99e6-13f4736ae82c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5KXBGM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKFI8xgvoatPnN5DOD2WOzsVFmbSNWUC52Bb1a9Mp2uQIhAJIhSa5fmVLGj5JBdh3%2FWEhv8bntKa90JcbnKpNZJf36Kv8DCCkQABoMNjM3NDIzMTgzODA1Igz6IGJNLub4jWfD3sMq3ANoKIFJwTyFaHKF1YBQQQu0ssnCwHiW72qOn8Jk6CdvaznS62Zmh64e2qmzp%2B4%2Fv8DTS%2FHZrIIqCFkwsqPe%2FkmLX%2BCayBcL9d%2FV9p4w3DDPuaSyYhp4QitjS%2FZsk7RgDmDp7vdpDMqSsiB%2BVkKVbXnyBB8%2BY8h4op2XKlS0HN8%2Fma2AxJdYaZNZcFPvuyovxgrZT1DDY%2FNWGux6Tg3qjwzWbkTZyzkvxjKB6A%2FpsthzZV2Y85PfnGXnun%2F10aO7HDGJx1kz0PWiHX5mwhCYi9akJFZfpO3eyb93I8A9moia%2BiFCZJSRhHEfxW2%2BkjcLJNGuQSvi2NYbz0t5a7VB8w30Z2Q0%2F7AcVvQxXXPQt6PM1At5joIUrUu1T3hW%2F6SRzj8Lx8Lx2MA%2BWFU8FJLQEuVNS3d0N%2B4M4GPA9Z5Syy3yirRPOdINCIPqk0BdCW5MBHMNP2b%2BzVOn76Eql3GgYZc31ojpraTRiIyWDePHLhZDj%2FACiNYNayQ5fMCPCZ2CIl9SeW6DNkTBYjCO%2FCy8xvbjIpdm9n3lzQOMXktdendFVp7OjEK%2FCbHZGloSXEJNuyemf9AJb6UfvX%2B7rIDg6dHC0SRvGj3wCCQi%2BDKHHg4%2BlxVO2pMwTjLeUxgHUDCcz4fEBjqkAZ3S06j47l3ll5Cpjk%2FGOfzX1PfLTyjOWLuj8MgvpTuGejwpYXCGxpnRv7LhK%2FoWC%2BSBGW5iNi61E7XMwnIeLXVSbk4pb00oup1D6PI0FWvys6ENo9Va6kMwE7vL2Q6TOCTCJF6V03lK6lst%2Fy%2F5XkrR8HpQrVylqWmIjurFMItA21ASFjaWPl5xrgaOOG4eh1Mb6SgKnnP3D1t6%2B%2FXtAHUSd7qJ&X-Amz-Signature=6c0b8a37af0a8c7f5993e7192014f48bf497032b96421e6512f056fc9cb5f011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://forum.unity.com/attachments/upload_2020-8-27_13-38-32-png.688971/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=_w45Z1X-9xs)

🎥 [동영상 보기](https://www.youtube.com/watch?v=jFqOEvrVZeE)

🎥 [동영상 보기](https://www.youtube.com/watch?v=fAJWpCmF918)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/78f13093-babd-4fb8-b135-7bccfe959862/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5KXBGM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKFI8xgvoatPnN5DOD2WOzsVFmbSNWUC52Bb1a9Mp2uQIhAJIhSa5fmVLGj5JBdh3%2FWEhv8bntKa90JcbnKpNZJf36Kv8DCCkQABoMNjM3NDIzMTgzODA1Igz6IGJNLub4jWfD3sMq3ANoKIFJwTyFaHKF1YBQQQu0ssnCwHiW72qOn8Jk6CdvaznS62Zmh64e2qmzp%2B4%2Fv8DTS%2FHZrIIqCFkwsqPe%2FkmLX%2BCayBcL9d%2FV9p4w3DDPuaSyYhp4QitjS%2FZsk7RgDmDp7vdpDMqSsiB%2BVkKVbXnyBB8%2BY8h4op2XKlS0HN8%2Fma2AxJdYaZNZcFPvuyovxgrZT1DDY%2FNWGux6Tg3qjwzWbkTZyzkvxjKB6A%2FpsthzZV2Y85PfnGXnun%2F10aO7HDGJx1kz0PWiHX5mwhCYi9akJFZfpO3eyb93I8A9moia%2BiFCZJSRhHEfxW2%2BkjcLJNGuQSvi2NYbz0t5a7VB8w30Z2Q0%2F7AcVvQxXXPQt6PM1At5joIUrUu1T3hW%2F6SRzj8Lx8Lx2MA%2BWFU8FJLQEuVNS3d0N%2B4M4GPA9Z5Syy3yirRPOdINCIPqk0BdCW5MBHMNP2b%2BzVOn76Eql3GgYZc31ojpraTRiIyWDePHLhZDj%2FACiNYNayQ5fMCPCZ2CIl9SeW6DNkTBYjCO%2FCy8xvbjIpdm9n3lzQOMXktdendFVp7OjEK%2FCbHZGloSXEJNuyemf9AJb6UfvX%2B7rIDg6dHC0SRvGj3wCCQi%2BDKHHg4%2BlxVO2pMwTjLeUxgHUDCcz4fEBjqkAZ3S06j47l3ll5Cpjk%2FGOfzX1PfLTyjOWLuj8MgvpTuGejwpYXCGxpnRv7LhK%2FoWC%2BSBGW5iNi61E7XMwnIeLXVSbk4pb00oup1D6PI0FWvys6ENo9Va6kMwE7vL2Q6TOCTCJF6V03lK6lst%2Fy%2F5XkrR8HpQrVylqWmIjurFMItA21ASFjaWPl5xrgaOOG4eh1Mb6SgKnnP3D1t6%2B%2FXtAHUSd7qJ&X-Amz-Signature=a828e9aa2103dcd2e40486f5bb2d30fa71b06ffde08627b5b08ed486811b1c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a367a31b-5cff-492b-9711-0d588a7cdb8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5KXBGM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKFI8xgvoatPnN5DOD2WOzsVFmbSNWUC52Bb1a9Mp2uQIhAJIhSa5fmVLGj5JBdh3%2FWEhv8bntKa90JcbnKpNZJf36Kv8DCCkQABoMNjM3NDIzMTgzODA1Igz6IGJNLub4jWfD3sMq3ANoKIFJwTyFaHKF1YBQQQu0ssnCwHiW72qOn8Jk6CdvaznS62Zmh64e2qmzp%2B4%2Fv8DTS%2FHZrIIqCFkwsqPe%2FkmLX%2BCayBcL9d%2FV9p4w3DDPuaSyYhp4QitjS%2FZsk7RgDmDp7vdpDMqSsiB%2BVkKVbXnyBB8%2BY8h4op2XKlS0HN8%2Fma2AxJdYaZNZcFPvuyovxgrZT1DDY%2FNWGux6Tg3qjwzWbkTZyzkvxjKB6A%2FpsthzZV2Y85PfnGXnun%2F10aO7HDGJx1kz0PWiHX5mwhCYi9akJFZfpO3eyb93I8A9moia%2BiFCZJSRhHEfxW2%2BkjcLJNGuQSvi2NYbz0t5a7VB8w30Z2Q0%2F7AcVvQxXXPQt6PM1At5joIUrUu1T3hW%2F6SRzj8Lx8Lx2MA%2BWFU8FJLQEuVNS3d0N%2B4M4GPA9Z5Syy3yirRPOdINCIPqk0BdCW5MBHMNP2b%2BzVOn76Eql3GgYZc31ojpraTRiIyWDePHLhZDj%2FACiNYNayQ5fMCPCZ2CIl9SeW6DNkTBYjCO%2FCy8xvbjIpdm9n3lzQOMXktdendFVp7OjEK%2FCbHZGloSXEJNuyemf9AJb6UfvX%2B7rIDg6dHC0SRvGj3wCCQi%2BDKHHg4%2BlxVO2pMwTjLeUxgHUDCcz4fEBjqkAZ3S06j47l3ll5Cpjk%2FGOfzX1PfLTyjOWLuj8MgvpTuGejwpYXCGxpnRv7LhK%2FoWC%2BSBGW5iNi61E7XMwnIeLXVSbk4pb00oup1D6PI0FWvys6ENo9Va6kMwE7vL2Q6TOCTCJF6V03lK6lst%2Fy%2F5XkrR8HpQrVylqWmIjurFMItA21ASFjaWPl5xrgaOOG4eh1Mb6SgKnnP3D1t6%2B%2FXtAHUSd7qJ&X-Amz-Signature=e3433f9962e603fcdd37f9962bba62f45508544475df1f7326aed88b033c4bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a0f91ade-0b4c-4a7c-852f-bcdaddc18a1a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5KXBGM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKFI8xgvoatPnN5DOD2WOzsVFmbSNWUC52Bb1a9Mp2uQIhAJIhSa5fmVLGj5JBdh3%2FWEhv8bntKa90JcbnKpNZJf36Kv8DCCkQABoMNjM3NDIzMTgzODA1Igz6IGJNLub4jWfD3sMq3ANoKIFJwTyFaHKF1YBQQQu0ssnCwHiW72qOn8Jk6CdvaznS62Zmh64e2qmzp%2B4%2Fv8DTS%2FHZrIIqCFkwsqPe%2FkmLX%2BCayBcL9d%2FV9p4w3DDPuaSyYhp4QitjS%2FZsk7RgDmDp7vdpDMqSsiB%2BVkKVbXnyBB8%2BY8h4op2XKlS0HN8%2Fma2AxJdYaZNZcFPvuyovxgrZT1DDY%2FNWGux6Tg3qjwzWbkTZyzkvxjKB6A%2FpsthzZV2Y85PfnGXnun%2F10aO7HDGJx1kz0PWiHX5mwhCYi9akJFZfpO3eyb93I8A9moia%2BiFCZJSRhHEfxW2%2BkjcLJNGuQSvi2NYbz0t5a7VB8w30Z2Q0%2F7AcVvQxXXPQt6PM1At5joIUrUu1T3hW%2F6SRzj8Lx8Lx2MA%2BWFU8FJLQEuVNS3d0N%2B4M4GPA9Z5Syy3yirRPOdINCIPqk0BdCW5MBHMNP2b%2BzVOn76Eql3GgYZc31ojpraTRiIyWDePHLhZDj%2FACiNYNayQ5fMCPCZ2CIl9SeW6DNkTBYjCO%2FCy8xvbjIpdm9n3lzQOMXktdendFVp7OjEK%2FCbHZGloSXEJNuyemf9AJb6UfvX%2B7rIDg6dHC0SRvGj3wCCQi%2BDKHHg4%2BlxVO2pMwTjLeUxgHUDCcz4fEBjqkAZ3S06j47l3ll5Cpjk%2FGOfzX1PfLTyjOWLuj8MgvpTuGejwpYXCGxpnRv7LhK%2FoWC%2BSBGW5iNi61E7XMwnIeLXVSbk4pb00oup1D6PI0FWvys6ENo9Va6kMwE7vL2Q6TOCTCJF6V03lK6lst%2Fy%2F5XkrR8HpQrVylqWmIjurFMItA21ASFjaWPl5xrgaOOG4eh1Mb6SgKnnP3D1t6%2B%2FXtAHUSd7qJ&X-Amz-Signature=1141663cc420e14133a5cf946cedbcbbe4a2b1e84674ed854925cf4bb5ca61c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


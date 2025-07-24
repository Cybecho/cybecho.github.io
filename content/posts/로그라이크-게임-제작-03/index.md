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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ede1ec84-1a05-4218-a24b-42557c5f56ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVLOLTM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEtvWBSZn%2FcM%2FhC2dwMAWqWkuT7A0SgbgNrmoup0KdLVAiEAiIDluqWif2c89%2F0%2FK7B00LPUywpL%2FKy6OiL10lVbfAwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEG%2BnGkkR3cAwLfNZyrcA0HwhJVXHqkU7%2FuoBbjQo7FVCHIsM%2B5hDe0%2BViEOfvsG6l3wx69gQseqMb6KePJylBnyXXsbbfPg7GumQz%2B1xFXHkI%2FiJIo2eONjxW2fJh4rHBDtheS449QkPgUGJqmlqulW%2FiGSRfyeaL5jpKrjzZ74NMmwGDNwQ69mqjlsLycy1UVGh%2FjI5OZYXNeE%2Fb8I1I7fdOnH6l2KwfWEo1ZuYn8OtV0h%2BaNHs0Fq1e9NPL9p02hYsv6lOyolizbW1IssACQ%2Bzqj29Cyd751xN59mV89tenyYaomniNqOh0wpnWdpfMV6qUcg9hDHsS1sqOFfB4kwdTfMHTjZWmtESxzL%2FifTWTu%2BtVsyv4K8xJS7LZJRSbtBZ8wPP0w0GPpnTg1RKt7d8N%2B7ExB6A%2FW9%2BK7o0ssfy0Lll670Uz4j6GRNJmHbpJ10fMx7thnRAgO4GvoRMx7c%2BG75zOHSxJEqAgXSHkRXA6d3JbryqG0BNa4IA9OLRcACgN2%2Fm3nBpHqAOZUrKUpvrUZEpoqbXgJ02XepPV7lpnF9JJkYFPkdsUuDUzJpY4c6gi%2BG8ufqyRuYA7Y59G%2FNi4vALCsFnMXv9S3xHIAvOpk8xgPHIb10kW%2BCfjyCURPgM2OEsYqemcMUMNTPh8QGOqUBs2PLtBBan1%2BOtDVVengVsMH71ZldCWFiNF4yTfuYXYBNo9w%2FGqxXIIH7%2B9Q4Ni1azc4cUx42Po5c0EgZfcE%2BRnjcA5ww13GgfvwwZV1bdGM1leZfHna5zVh3dsu9T8Y7G4SZIfZtVAzmln14u0%2FnQ3Ds7H6pjXG5a7t9Pey5yE%2Fc9WfXLrCG7ZetB%2BX1m8F%2FL3zYjzB3FJGxivfDRXUbVpZ4mPB1&X-Amz-Signature=fd3b51937b18d4835c22c55de5036d1648720d527a56ae63ded7eef926016a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02680df3-2d71-49e6-99e6-13f4736ae82c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVLOLTM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEtvWBSZn%2FcM%2FhC2dwMAWqWkuT7A0SgbgNrmoup0KdLVAiEAiIDluqWif2c89%2F0%2FK7B00LPUywpL%2FKy6OiL10lVbfAwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEG%2BnGkkR3cAwLfNZyrcA0HwhJVXHqkU7%2FuoBbjQo7FVCHIsM%2B5hDe0%2BViEOfvsG6l3wx69gQseqMb6KePJylBnyXXsbbfPg7GumQz%2B1xFXHkI%2FiJIo2eONjxW2fJh4rHBDtheS449QkPgUGJqmlqulW%2FiGSRfyeaL5jpKrjzZ74NMmwGDNwQ69mqjlsLycy1UVGh%2FjI5OZYXNeE%2Fb8I1I7fdOnH6l2KwfWEo1ZuYn8OtV0h%2BaNHs0Fq1e9NPL9p02hYsv6lOyolizbW1IssACQ%2Bzqj29Cyd751xN59mV89tenyYaomniNqOh0wpnWdpfMV6qUcg9hDHsS1sqOFfB4kwdTfMHTjZWmtESxzL%2FifTWTu%2BtVsyv4K8xJS7LZJRSbtBZ8wPP0w0GPpnTg1RKt7d8N%2B7ExB6A%2FW9%2BK7o0ssfy0Lll670Uz4j6GRNJmHbpJ10fMx7thnRAgO4GvoRMx7c%2BG75zOHSxJEqAgXSHkRXA6d3JbryqG0BNa4IA9OLRcACgN2%2Fm3nBpHqAOZUrKUpvrUZEpoqbXgJ02XepPV7lpnF9JJkYFPkdsUuDUzJpY4c6gi%2BG8ufqyRuYA7Y59G%2FNi4vALCsFnMXv9S3xHIAvOpk8xgPHIb10kW%2BCfjyCURPgM2OEsYqemcMUMNTPh8QGOqUBs2PLtBBan1%2BOtDVVengVsMH71ZldCWFiNF4yTfuYXYBNo9w%2FGqxXIIH7%2B9Q4Ni1azc4cUx42Po5c0EgZfcE%2BRnjcA5ww13GgfvwwZV1bdGM1leZfHna5zVh3dsu9T8Y7G4SZIfZtVAzmln14u0%2FnQ3Ds7H6pjXG5a7t9Pey5yE%2Fc9WfXLrCG7ZetB%2BX1m8F%2FL3zYjzB3FJGxivfDRXUbVpZ4mPB1&X-Amz-Signature=b684bef4883d83e394f053b5cdefce8a54d672c8b6c31346a5a7bd82f67599ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://forum.unity.com/attachments/upload_2020-8-27_13-38-32-png.688971/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=_w45Z1X-9xs)

🎥 [동영상 보기](https://www.youtube.com/watch?v=jFqOEvrVZeE)

🎥 [동영상 보기](https://www.youtube.com/watch?v=fAJWpCmF918)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/78f13093-babd-4fb8-b135-7bccfe959862/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVLOLTM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEtvWBSZn%2FcM%2FhC2dwMAWqWkuT7A0SgbgNrmoup0KdLVAiEAiIDluqWif2c89%2F0%2FK7B00LPUywpL%2FKy6OiL10lVbfAwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEG%2BnGkkR3cAwLfNZyrcA0HwhJVXHqkU7%2FuoBbjQo7FVCHIsM%2B5hDe0%2BViEOfvsG6l3wx69gQseqMb6KePJylBnyXXsbbfPg7GumQz%2B1xFXHkI%2FiJIo2eONjxW2fJh4rHBDtheS449QkPgUGJqmlqulW%2FiGSRfyeaL5jpKrjzZ74NMmwGDNwQ69mqjlsLycy1UVGh%2FjI5OZYXNeE%2Fb8I1I7fdOnH6l2KwfWEo1ZuYn8OtV0h%2BaNHs0Fq1e9NPL9p02hYsv6lOyolizbW1IssACQ%2Bzqj29Cyd751xN59mV89tenyYaomniNqOh0wpnWdpfMV6qUcg9hDHsS1sqOFfB4kwdTfMHTjZWmtESxzL%2FifTWTu%2BtVsyv4K8xJS7LZJRSbtBZ8wPP0w0GPpnTg1RKt7d8N%2B7ExB6A%2FW9%2BK7o0ssfy0Lll670Uz4j6GRNJmHbpJ10fMx7thnRAgO4GvoRMx7c%2BG75zOHSxJEqAgXSHkRXA6d3JbryqG0BNa4IA9OLRcACgN2%2Fm3nBpHqAOZUrKUpvrUZEpoqbXgJ02XepPV7lpnF9JJkYFPkdsUuDUzJpY4c6gi%2BG8ufqyRuYA7Y59G%2FNi4vALCsFnMXv9S3xHIAvOpk8xgPHIb10kW%2BCfjyCURPgM2OEsYqemcMUMNTPh8QGOqUBs2PLtBBan1%2BOtDVVengVsMH71ZldCWFiNF4yTfuYXYBNo9w%2FGqxXIIH7%2B9Q4Ni1azc4cUx42Po5c0EgZfcE%2BRnjcA5ww13GgfvwwZV1bdGM1leZfHna5zVh3dsu9T8Y7G4SZIfZtVAzmln14u0%2FnQ3Ds7H6pjXG5a7t9Pey5yE%2Fc9WfXLrCG7ZetB%2BX1m8F%2FL3zYjzB3FJGxivfDRXUbVpZ4mPB1&X-Amz-Signature=8a88b6ab03e3b29b69cbb7d3ced342ba9eb64cb976d87f11d0f4ef44a087a2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a367a31b-5cff-492b-9711-0d588a7cdb8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVLOLTM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEtvWBSZn%2FcM%2FhC2dwMAWqWkuT7A0SgbgNrmoup0KdLVAiEAiIDluqWif2c89%2F0%2FK7B00LPUywpL%2FKy6OiL10lVbfAwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEG%2BnGkkR3cAwLfNZyrcA0HwhJVXHqkU7%2FuoBbjQo7FVCHIsM%2B5hDe0%2BViEOfvsG6l3wx69gQseqMb6KePJylBnyXXsbbfPg7GumQz%2B1xFXHkI%2FiJIo2eONjxW2fJh4rHBDtheS449QkPgUGJqmlqulW%2FiGSRfyeaL5jpKrjzZ74NMmwGDNwQ69mqjlsLycy1UVGh%2FjI5OZYXNeE%2Fb8I1I7fdOnH6l2KwfWEo1ZuYn8OtV0h%2BaNHs0Fq1e9NPL9p02hYsv6lOyolizbW1IssACQ%2Bzqj29Cyd751xN59mV89tenyYaomniNqOh0wpnWdpfMV6qUcg9hDHsS1sqOFfB4kwdTfMHTjZWmtESxzL%2FifTWTu%2BtVsyv4K8xJS7LZJRSbtBZ8wPP0w0GPpnTg1RKt7d8N%2B7ExB6A%2FW9%2BK7o0ssfy0Lll670Uz4j6GRNJmHbpJ10fMx7thnRAgO4GvoRMx7c%2BG75zOHSxJEqAgXSHkRXA6d3JbryqG0BNa4IA9OLRcACgN2%2Fm3nBpHqAOZUrKUpvrUZEpoqbXgJ02XepPV7lpnF9JJkYFPkdsUuDUzJpY4c6gi%2BG8ufqyRuYA7Y59G%2FNi4vALCsFnMXv9S3xHIAvOpk8xgPHIb10kW%2BCfjyCURPgM2OEsYqemcMUMNTPh8QGOqUBs2PLtBBan1%2BOtDVVengVsMH71ZldCWFiNF4yTfuYXYBNo9w%2FGqxXIIH7%2B9Q4Ni1azc4cUx42Po5c0EgZfcE%2BRnjcA5ww13GgfvwwZV1bdGM1leZfHna5zVh3dsu9T8Y7G4SZIfZtVAzmln14u0%2FnQ3Ds7H6pjXG5a7t9Pey5yE%2Fc9WfXLrCG7ZetB%2BX1m8F%2FL3zYjzB3FJGxivfDRXUbVpZ4mPB1&X-Amz-Signature=1a87d6e0a0a2af9f0c9ba0caf1d2c4043a094d3e3950a1b4abbfbb2dc7f0c039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a0f91ade-0b4c-4a7c-852f-bcdaddc18a1a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVLOLTM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEtvWBSZn%2FcM%2FhC2dwMAWqWkuT7A0SgbgNrmoup0KdLVAiEAiIDluqWif2c89%2F0%2FK7B00LPUywpL%2FKy6OiL10lVbfAwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEG%2BnGkkR3cAwLfNZyrcA0HwhJVXHqkU7%2FuoBbjQo7FVCHIsM%2B5hDe0%2BViEOfvsG6l3wx69gQseqMb6KePJylBnyXXsbbfPg7GumQz%2B1xFXHkI%2FiJIo2eONjxW2fJh4rHBDtheS449QkPgUGJqmlqulW%2FiGSRfyeaL5jpKrjzZ74NMmwGDNwQ69mqjlsLycy1UVGh%2FjI5OZYXNeE%2Fb8I1I7fdOnH6l2KwfWEo1ZuYn8OtV0h%2BaNHs0Fq1e9NPL9p02hYsv6lOyolizbW1IssACQ%2Bzqj29Cyd751xN59mV89tenyYaomniNqOh0wpnWdpfMV6qUcg9hDHsS1sqOFfB4kwdTfMHTjZWmtESxzL%2FifTWTu%2BtVsyv4K8xJS7LZJRSbtBZ8wPP0w0GPpnTg1RKt7d8N%2B7ExB6A%2FW9%2BK7o0ssfy0Lll670Uz4j6GRNJmHbpJ10fMx7thnRAgO4GvoRMx7c%2BG75zOHSxJEqAgXSHkRXA6d3JbryqG0BNa4IA9OLRcACgN2%2Fm3nBpHqAOZUrKUpvrUZEpoqbXgJ02XepPV7lpnF9JJkYFPkdsUuDUzJpY4c6gi%2BG8ufqyRuYA7Y59G%2FNi4vALCsFnMXv9S3xHIAvOpk8xgPHIb10kW%2BCfjyCURPgM2OEsYqemcMUMNTPh8QGOqUBs2PLtBBan1%2BOtDVVengVsMH71ZldCWFiNF4yTfuYXYBNo9w%2FGqxXIIH7%2B9Q4Ni1azc4cUx42Po5c0EgZfcE%2BRnjcA5ww13GgfvwwZV1bdGM1leZfHna5zVh3dsu9T8Y7G4SZIfZtVAzmln14u0%2FnQ3Ds7H6pjXG5a7t9Pey5yE%2Fc9WfXLrCG7ZetB%2BX1m8F%2FL3zYjzB3FJGxivfDRXUbVpZ4mPB1&X-Amz-Signature=ef09fec1092fb5e565a6c1aed404912f1e821e47afe98691a12b093cee1d127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


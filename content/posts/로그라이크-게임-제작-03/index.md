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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ede1ec84-1a05-4218-a24b-42557c5f56ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLOY5AR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFvQFz6%2ByvelESHXYecd6YiB%2Fho3G%2BjujCdObcSH%2BDp4AiA%2FPhvvH2tCmUmSiF5wP6fGPXcL1L8ZsGRTsUXmS8J%2Ffir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BapcM6lERvWjCukrKtwDNmMVnpvGyn%2FIjcDcBE8%2Ft4%2FpppjpwQJrEOEquSVz%2BPEl2EtxXIqAYX5IeJc6KFB9UrQkXEKXk%2FszGE1U3f6VYs5d%2B6k89%2BlXEU5Fr1rRo%2F3mKV3mYrCyL5rz8brmQZFodIFkVjfzCDoHkCAxPjeIx%2FIHsNcJLdzWYUeDcIBHmjl1eSnl%2FnblgNx5gaAphqwrO%2BuyzDdI%2FH0xtEdHGVxLEtmvz%2F793ChfB5czxTQfLJmYkV627pBPrGPTpuu5Xfd9byXV1l1rodibYLqbzdp27O1nwNvKKjXPXqYhRPyGUIiv028w%2FmMu9QPdCJL3xOZT1Tz3qWGcDYt%2FHpUwMJNiX4E5%2BHnUZ689TEFpIpsgN%2B8uaEbFSEeD1UqAeo6HtIxXoKiXjpWmKVR61s1VJ5tp%2FmpJKGCH1I4WesekPfaIY%2FiW2LsPyc6P4gVhaOfSAtCPPDRWtAtfxoY3bw%2FFT%2B9YYiQKvTeWbyahPqLrcFLUhlgwFzfYcI%2F%2BvgVXSQg2bDaMmei1iCo1lhpqF9Vgt33acrosEZgsPKQedhuGMgQah5Xe5A97kQN16A8MdtrwkEGj%2FdSWD6U1Z9izdusaDNPcFBW0mS7VAkFWucg4wgY86gmJFboggI6Y9EvWuFgwtb%2BIxAY6pgFBwXRlV3%2Fv1wEZogEI5MKabtH6C2re3QY0%2Bv3x53Ey6fXh7soubKMI%2FQ0Qrja59omRU6vel63%2FC%2B6ABAkdNlcIcISfMv9ikZP1%2B%2F%2FLFL%2BVHLwB7lWNm3MpUmEEcm65qEC3S%2F%2Fp82D1ChuINDU8JhlQMafvTk0zn5UCRf5BUd6hxXAm2IaC0uljm2UrZ7flJi2lqUoZ8BDed0%2Bt4NjhbfKLQiWJCNO2&X-Amz-Signature=e5de24fbcebb1be16678aa66d3b3045ac853edb1e40157fce57be754816e1f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02680df3-2d71-49e6-99e6-13f4736ae82c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLOY5AR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFvQFz6%2ByvelESHXYecd6YiB%2Fho3G%2BjujCdObcSH%2BDp4AiA%2FPhvvH2tCmUmSiF5wP6fGPXcL1L8ZsGRTsUXmS8J%2Ffir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BapcM6lERvWjCukrKtwDNmMVnpvGyn%2FIjcDcBE8%2Ft4%2FpppjpwQJrEOEquSVz%2BPEl2EtxXIqAYX5IeJc6KFB9UrQkXEKXk%2FszGE1U3f6VYs5d%2B6k89%2BlXEU5Fr1rRo%2F3mKV3mYrCyL5rz8brmQZFodIFkVjfzCDoHkCAxPjeIx%2FIHsNcJLdzWYUeDcIBHmjl1eSnl%2FnblgNx5gaAphqwrO%2BuyzDdI%2FH0xtEdHGVxLEtmvz%2F793ChfB5czxTQfLJmYkV627pBPrGPTpuu5Xfd9byXV1l1rodibYLqbzdp27O1nwNvKKjXPXqYhRPyGUIiv028w%2FmMu9QPdCJL3xOZT1Tz3qWGcDYt%2FHpUwMJNiX4E5%2BHnUZ689TEFpIpsgN%2B8uaEbFSEeD1UqAeo6HtIxXoKiXjpWmKVR61s1VJ5tp%2FmpJKGCH1I4WesekPfaIY%2FiW2LsPyc6P4gVhaOfSAtCPPDRWtAtfxoY3bw%2FFT%2B9YYiQKvTeWbyahPqLrcFLUhlgwFzfYcI%2F%2BvgVXSQg2bDaMmei1iCo1lhpqF9Vgt33acrosEZgsPKQedhuGMgQah5Xe5A97kQN16A8MdtrwkEGj%2FdSWD6U1Z9izdusaDNPcFBW0mS7VAkFWucg4wgY86gmJFboggI6Y9EvWuFgwtb%2BIxAY6pgFBwXRlV3%2Fv1wEZogEI5MKabtH6C2re3QY0%2Bv3x53Ey6fXh7soubKMI%2FQ0Qrja59omRU6vel63%2FC%2B6ABAkdNlcIcISfMv9ikZP1%2B%2F%2FLFL%2BVHLwB7lWNm3MpUmEEcm65qEC3S%2F%2Fp82D1ChuINDU8JhlQMafvTk0zn5UCRf5BUd6hxXAm2IaC0uljm2UrZ7flJi2lqUoZ8BDed0%2Bt4NjhbfKLQiWJCNO2&X-Amz-Signature=041393dcd93df4a687351fcb98a669bad3cb58f5a88d19a0ed97e56307e23e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://forum.unity.com/attachments/upload_2020-8-27_13-38-32-png.688971/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=_w45Z1X-9xs)

🎥 [동영상 보기](https://www.youtube.com/watch?v=jFqOEvrVZeE)

🎥 [동영상 보기](https://www.youtube.com/watch?v=fAJWpCmF918)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/78f13093-babd-4fb8-b135-7bccfe959862/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLOY5AR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFvQFz6%2ByvelESHXYecd6YiB%2Fho3G%2BjujCdObcSH%2BDp4AiA%2FPhvvH2tCmUmSiF5wP6fGPXcL1L8ZsGRTsUXmS8J%2Ffir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BapcM6lERvWjCukrKtwDNmMVnpvGyn%2FIjcDcBE8%2Ft4%2FpppjpwQJrEOEquSVz%2BPEl2EtxXIqAYX5IeJc6KFB9UrQkXEKXk%2FszGE1U3f6VYs5d%2B6k89%2BlXEU5Fr1rRo%2F3mKV3mYrCyL5rz8brmQZFodIFkVjfzCDoHkCAxPjeIx%2FIHsNcJLdzWYUeDcIBHmjl1eSnl%2FnblgNx5gaAphqwrO%2BuyzDdI%2FH0xtEdHGVxLEtmvz%2F793ChfB5czxTQfLJmYkV627pBPrGPTpuu5Xfd9byXV1l1rodibYLqbzdp27O1nwNvKKjXPXqYhRPyGUIiv028w%2FmMu9QPdCJL3xOZT1Tz3qWGcDYt%2FHpUwMJNiX4E5%2BHnUZ689TEFpIpsgN%2B8uaEbFSEeD1UqAeo6HtIxXoKiXjpWmKVR61s1VJ5tp%2FmpJKGCH1I4WesekPfaIY%2FiW2LsPyc6P4gVhaOfSAtCPPDRWtAtfxoY3bw%2FFT%2B9YYiQKvTeWbyahPqLrcFLUhlgwFzfYcI%2F%2BvgVXSQg2bDaMmei1iCo1lhpqF9Vgt33acrosEZgsPKQedhuGMgQah5Xe5A97kQN16A8MdtrwkEGj%2FdSWD6U1Z9izdusaDNPcFBW0mS7VAkFWucg4wgY86gmJFboggI6Y9EvWuFgwtb%2BIxAY6pgFBwXRlV3%2Fv1wEZogEI5MKabtH6C2re3QY0%2Bv3x53Ey6fXh7soubKMI%2FQ0Qrja59omRU6vel63%2FC%2B6ABAkdNlcIcISfMv9ikZP1%2B%2F%2FLFL%2BVHLwB7lWNm3MpUmEEcm65qEC3S%2F%2Fp82D1ChuINDU8JhlQMafvTk0zn5UCRf5BUd6hxXAm2IaC0uljm2UrZ7flJi2lqUoZ8BDed0%2Bt4NjhbfKLQiWJCNO2&X-Amz-Signature=3df7130e565fd0be0dea4eba4876f896a8b9d9f751f40ca43daba99d82331d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a367a31b-5cff-492b-9711-0d588a7cdb8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLOY5AR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFvQFz6%2ByvelESHXYecd6YiB%2Fho3G%2BjujCdObcSH%2BDp4AiA%2FPhvvH2tCmUmSiF5wP6fGPXcL1L8ZsGRTsUXmS8J%2Ffir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BapcM6lERvWjCukrKtwDNmMVnpvGyn%2FIjcDcBE8%2Ft4%2FpppjpwQJrEOEquSVz%2BPEl2EtxXIqAYX5IeJc6KFB9UrQkXEKXk%2FszGE1U3f6VYs5d%2B6k89%2BlXEU5Fr1rRo%2F3mKV3mYrCyL5rz8brmQZFodIFkVjfzCDoHkCAxPjeIx%2FIHsNcJLdzWYUeDcIBHmjl1eSnl%2FnblgNx5gaAphqwrO%2BuyzDdI%2FH0xtEdHGVxLEtmvz%2F793ChfB5czxTQfLJmYkV627pBPrGPTpuu5Xfd9byXV1l1rodibYLqbzdp27O1nwNvKKjXPXqYhRPyGUIiv028w%2FmMu9QPdCJL3xOZT1Tz3qWGcDYt%2FHpUwMJNiX4E5%2BHnUZ689TEFpIpsgN%2B8uaEbFSEeD1UqAeo6HtIxXoKiXjpWmKVR61s1VJ5tp%2FmpJKGCH1I4WesekPfaIY%2FiW2LsPyc6P4gVhaOfSAtCPPDRWtAtfxoY3bw%2FFT%2B9YYiQKvTeWbyahPqLrcFLUhlgwFzfYcI%2F%2BvgVXSQg2bDaMmei1iCo1lhpqF9Vgt33acrosEZgsPKQedhuGMgQah5Xe5A97kQN16A8MdtrwkEGj%2FdSWD6U1Z9izdusaDNPcFBW0mS7VAkFWucg4wgY86gmJFboggI6Y9EvWuFgwtb%2BIxAY6pgFBwXRlV3%2Fv1wEZogEI5MKabtH6C2re3QY0%2Bv3x53Ey6fXh7soubKMI%2FQ0Qrja59omRU6vel63%2FC%2B6ABAkdNlcIcISfMv9ikZP1%2B%2F%2FLFL%2BVHLwB7lWNm3MpUmEEcm65qEC3S%2F%2Fp82D1ChuINDU8JhlQMafvTk0zn5UCRf5BUd6hxXAm2IaC0uljm2UrZ7flJi2lqUoZ8BDed0%2Bt4NjhbfKLQiWJCNO2&X-Amz-Signature=704d538d6620fae90f89b132b9e4390c90f7fba974f9d62912de99a9172ef738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a0f91ade-0b4c-4a7c-852f-bcdaddc18a1a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLOY5AR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFvQFz6%2ByvelESHXYecd6YiB%2Fho3G%2BjujCdObcSH%2BDp4AiA%2FPhvvH2tCmUmSiF5wP6fGPXcL1L8ZsGRTsUXmS8J%2Ffir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BapcM6lERvWjCukrKtwDNmMVnpvGyn%2FIjcDcBE8%2Ft4%2FpppjpwQJrEOEquSVz%2BPEl2EtxXIqAYX5IeJc6KFB9UrQkXEKXk%2FszGE1U3f6VYs5d%2B6k89%2BlXEU5Fr1rRo%2F3mKV3mYrCyL5rz8brmQZFodIFkVjfzCDoHkCAxPjeIx%2FIHsNcJLdzWYUeDcIBHmjl1eSnl%2FnblgNx5gaAphqwrO%2BuyzDdI%2FH0xtEdHGVxLEtmvz%2F793ChfB5czxTQfLJmYkV627pBPrGPTpuu5Xfd9byXV1l1rodibYLqbzdp27O1nwNvKKjXPXqYhRPyGUIiv028w%2FmMu9QPdCJL3xOZT1Tz3qWGcDYt%2FHpUwMJNiX4E5%2BHnUZ689TEFpIpsgN%2B8uaEbFSEeD1UqAeo6HtIxXoKiXjpWmKVR61s1VJ5tp%2FmpJKGCH1I4WesekPfaIY%2FiW2LsPyc6P4gVhaOfSAtCPPDRWtAtfxoY3bw%2FFT%2B9YYiQKvTeWbyahPqLrcFLUhlgwFzfYcI%2F%2BvgVXSQg2bDaMmei1iCo1lhpqF9Vgt33acrosEZgsPKQedhuGMgQah5Xe5A97kQN16A8MdtrwkEGj%2FdSWD6U1Z9izdusaDNPcFBW0mS7VAkFWucg4wgY86gmJFboggI6Y9EvWuFgwtb%2BIxAY6pgFBwXRlV3%2Fv1wEZogEI5MKabtH6C2re3QY0%2Bv3x53Ey6fXh7soubKMI%2FQ0Qrja59omRU6vel63%2FC%2B6ABAkdNlcIcISfMv9ikZP1%2B%2F%2FLFL%2BVHLwB7lWNm3MpUmEEcm65qEC3S%2F%2Fp82D1ChuINDU8JhlQMafvTk0zn5UCRf5BUd6hxXAm2IaC0uljm2UrZ7flJi2lqUoZ8BDed0%2Bt4NjhbfKLQiWJCNO2&X-Amz-Signature=edb58f6334243c23f1ccbbeee35d833afda8f840cae6c882a5f31ec8622d1519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


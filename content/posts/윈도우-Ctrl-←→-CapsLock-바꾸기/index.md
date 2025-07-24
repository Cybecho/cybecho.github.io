---
title: "윈도우 Ctrl ←→ CapsLock 바꾸기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법은 레지스트리 편집기를 사용하여 "
notion_id: "7db001a3-cb42-4800-9f94-40327f19552e"
notion_url: "https://www.notion.so/Ctrl-CapsLock-7db001a3cb4248009f9440327f19552e"
---

# 윈도우 Ctrl ←→ CapsLock 바꾸기

> **Summary**
> 윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법은 레지스트리 편집기를 사용하여 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RBFLJH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeY2kh6y1FY%2FlcYoXxxhs52hp3PPEz3TVUbXXm9VNWdQIgFN67KsPeBFZ4Zr8vVd8KpceGNhCDPKf6RBpSC3PYp6Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOnomya72%2FHmPXgt5CrcA8nZVCkcz%2BK3rfhI339hlaPB5Bh3bifN5jPI6Iz2aDLbaJSmimynpFoZA3pt8Ol3VVRgLE%2FvVJ%2FLf0P86MmXZO5tcYJqm1FORJdOIAWvEErC6z8mKuVFY8Zqj6MnYYk5ptWD1d1Dp%2BCqGBWYLtoKuShALDJwWNtIJkFpX7Lb%2FNLwbIM6ph0QYu0B88zVUJK2xbhLRPWQPsMkPYEtHccUNfdXyVsUHs27qeVgcgNFBCmeNXNLjh7bkrRTyWznA2Dok0VWyhfy1BIgcZGVk0XkBRWfS%2BvVFZsVuD3YqcV4UwzlE7ig%2BKdBYu6CpLwDwfua%2B1m7kLxrcEmKuatXEzvWnBl%2BqFk%2FrRmx1eMBxVb5k4peZrEhG%2FJvrcd6c6yl2p4JZ8ahxX754DjyfAfsnJgCyqF755OmzS%2FYVUt9dn1%2BYQiRKQWBINqh6E01Gvs7RclY32EAAGbAWYbCRf3uj9CKBMSPaB7TvKtfLBWhwhqJeOY2QHc0idbi9qvUPdH2KBCEznpaL3Pq8HDVihj2CJ%2F8qhQMkNNQNd4i2TxP%2BVBVdRs%2BktU9kuPUheBFa45tHmKLr9S1Agz%2FXuLHlrbL72cFHcewtkT4JwHhMsxPaPi1YkPX4q3olP0OE0WwkBvoMJL1h8QGOqUByIyvdbM6GgoghUEYDrSoF33Royhj0DQJU9358xOrbdWtyUkAGc61FROZv0Nat1mbZMgJpBesRZ2qs6oucMzwtYqwb2lhPEdNWDlj9WIIfxcN9H%2BrlJ6Mkq%2BWH3cmr%2FVoBdA8CYosOAoDhOltbN1WIdelOTkMugVqHDtXRbTZs3tIpdjiZWCJCISYX05rbanjW8Dmwctb7luyOVot7Q9uHwIRkrtK&X-Amz-Signature=a07e154dbea29846a21c56f3823f054e75697a6e42336b4450e415b11bc83d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://m.blog.naver.com/minhyupp/222211206474](https://m.blog.naver.com/minhyupp/222211206474)

윈도우키 + R : regedit

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout
```

`Scancode Map` 이름으로 **이진값 새로 만들기** 후 입력한 다음 재부팅....



**03이 캡스락, XT값은 3A**

**58이 컨트롤 XT 값은 1D**



1D 00 3A의 뜻은 1D(컨트롤키)를 3A키(캡스락)에 할당해주시오. 라는 뜻.



![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfNzgg/MDAxNjEwOTQ0NjgxNzgy.YS7Ap6fbEi-TRbEpY5aXdQJ0Hu-rTc_OI1P9DgmtpOQg.g1-cUEsmRpPoCA8b39LlpdpFxUagh7o7I46xAHIjej4g.PNG.minhyupp/image.png?type=w800)

Ctrl <-> Caps Lock 위치 변경

![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfMjQg/MDAxNjEwOTQ1Mzk2NjY0.TFPIQALDqOG4bH8YeT2r_Jt1pwBpIpgDuX_k9cyRGpwg.s-wjZ1tR7__cV_HCZjHUUFGDAMsYBcoLJfXHPZyvJnEg.PNG.minhyupp/image.png?type=w800)

CapsLock 조차 Ctrl 키로 바꿔버리기



# 이거 자동화 할 방법 없나?

🔗 [https://dora-guide.com/레지스트리-편집기-실행/](https://dora-guide.com/레지스트리-편집기-실행/)

🔗 [https://blog.naver.com/starbros/220466856335](https://blog.naver.com/starbros/220466856335)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/317c6692-f519-47b2-98e6-bd4ed2d3f2f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RBFLJH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeY2kh6y1FY%2FlcYoXxxhs52hp3PPEz3TVUbXXm9VNWdQIgFN67KsPeBFZ4Zr8vVd8KpceGNhCDPKf6RBpSC3PYp6Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOnomya72%2FHmPXgt5CrcA8nZVCkcz%2BK3rfhI339hlaPB5Bh3bifN5jPI6Iz2aDLbaJSmimynpFoZA3pt8Ol3VVRgLE%2FvVJ%2FLf0P86MmXZO5tcYJqm1FORJdOIAWvEErC6z8mKuVFY8Zqj6MnYYk5ptWD1d1Dp%2BCqGBWYLtoKuShALDJwWNtIJkFpX7Lb%2FNLwbIM6ph0QYu0B88zVUJK2xbhLRPWQPsMkPYEtHccUNfdXyVsUHs27qeVgcgNFBCmeNXNLjh7bkrRTyWznA2Dok0VWyhfy1BIgcZGVk0XkBRWfS%2BvVFZsVuD3YqcV4UwzlE7ig%2BKdBYu6CpLwDwfua%2B1m7kLxrcEmKuatXEzvWnBl%2BqFk%2FrRmx1eMBxVb5k4peZrEhG%2FJvrcd6c6yl2p4JZ8ahxX754DjyfAfsnJgCyqF755OmzS%2FYVUt9dn1%2BYQiRKQWBINqh6E01Gvs7RclY32EAAGbAWYbCRf3uj9CKBMSPaB7TvKtfLBWhwhqJeOY2QHc0idbi9qvUPdH2KBCEznpaL3Pq8HDVihj2CJ%2F8qhQMkNNQNd4i2TxP%2BVBVdRs%2BktU9kuPUheBFa45tHmKLr9S1Agz%2FXuLHlrbL72cFHcewtkT4JwHhMsxPaPi1YkPX4q3olP0OE0WwkBvoMJL1h8QGOqUByIyvdbM6GgoghUEYDrSoF33Royhj0DQJU9358xOrbdWtyUkAGc61FROZv0Nat1mbZMgJpBesRZ2qs6oucMzwtYqwb2lhPEdNWDlj9WIIfxcN9H%2BrlJ6Mkq%2BWH3cmr%2FVoBdA8CYosOAoDhOltbN1WIdelOTkMugVqHDtXRbTZs3tIpdjiZWCJCISYX05rbanjW8Dmwctb7luyOVot7Q9uHwIRkrtK&X-Amz-Signature=1aa6eb21a85f652fb77fa652163cb283577da24955daa5fdcffe372cd48f5195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07d77b91-aa14-412f-8af3-2da3320a0f8e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RBFLJH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeY2kh6y1FY%2FlcYoXxxhs52hp3PPEz3TVUbXXm9VNWdQIgFN67KsPeBFZ4Zr8vVd8KpceGNhCDPKf6RBpSC3PYp6Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOnomya72%2FHmPXgt5CrcA8nZVCkcz%2BK3rfhI339hlaPB5Bh3bifN5jPI6Iz2aDLbaJSmimynpFoZA3pt8Ol3VVRgLE%2FvVJ%2FLf0P86MmXZO5tcYJqm1FORJdOIAWvEErC6z8mKuVFY8Zqj6MnYYk5ptWD1d1Dp%2BCqGBWYLtoKuShALDJwWNtIJkFpX7Lb%2FNLwbIM6ph0QYu0B88zVUJK2xbhLRPWQPsMkPYEtHccUNfdXyVsUHs27qeVgcgNFBCmeNXNLjh7bkrRTyWznA2Dok0VWyhfy1BIgcZGVk0XkBRWfS%2BvVFZsVuD3YqcV4UwzlE7ig%2BKdBYu6CpLwDwfua%2B1m7kLxrcEmKuatXEzvWnBl%2BqFk%2FrRmx1eMBxVb5k4peZrEhG%2FJvrcd6c6yl2p4JZ8ahxX754DjyfAfsnJgCyqF755OmzS%2FYVUt9dn1%2BYQiRKQWBINqh6E01Gvs7RclY32EAAGbAWYbCRf3uj9CKBMSPaB7TvKtfLBWhwhqJeOY2QHc0idbi9qvUPdH2KBCEznpaL3Pq8HDVihj2CJ%2F8qhQMkNNQNd4i2TxP%2BVBVdRs%2BktU9kuPUheBFa45tHmKLr9S1Agz%2FXuLHlrbL72cFHcewtkT4JwHhMsxPaPi1YkPX4q3olP0OE0WwkBvoMJL1h8QGOqUByIyvdbM6GgoghUEYDrSoF33Royhj0DQJU9358xOrbdWtyUkAGc61FROZv0Nat1mbZMgJpBesRZ2qs6oucMzwtYqwb2lhPEdNWDlj9WIIfxcN9H%2BrlJ6Mkq%2BWH3cmr%2FVoBdA8CYosOAoDhOltbN1WIdelOTkMugVqHDtXRbTZs3tIpdjiZWCJCISYX05rbanjW8Dmwctb7luyOVot7Q9uHwIRkrtK&X-Amz-Signature=98a8532cbaf0517a2e6fc943b4f3c339d7d135b8f2901ba456305ad31c15c0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0325384a-f9af-4164-9540-7161b0bfaf0f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RBFLJH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeY2kh6y1FY%2FlcYoXxxhs52hp3PPEz3TVUbXXm9VNWdQIgFN67KsPeBFZ4Zr8vVd8KpceGNhCDPKf6RBpSC3PYp6Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOnomya72%2FHmPXgt5CrcA8nZVCkcz%2BK3rfhI339hlaPB5Bh3bifN5jPI6Iz2aDLbaJSmimynpFoZA3pt8Ol3VVRgLE%2FvVJ%2FLf0P86MmXZO5tcYJqm1FORJdOIAWvEErC6z8mKuVFY8Zqj6MnYYk5ptWD1d1Dp%2BCqGBWYLtoKuShALDJwWNtIJkFpX7Lb%2FNLwbIM6ph0QYu0B88zVUJK2xbhLRPWQPsMkPYEtHccUNfdXyVsUHs27qeVgcgNFBCmeNXNLjh7bkrRTyWznA2Dok0VWyhfy1BIgcZGVk0XkBRWfS%2BvVFZsVuD3YqcV4UwzlE7ig%2BKdBYu6CpLwDwfua%2B1m7kLxrcEmKuatXEzvWnBl%2BqFk%2FrRmx1eMBxVb5k4peZrEhG%2FJvrcd6c6yl2p4JZ8ahxX754DjyfAfsnJgCyqF755OmzS%2FYVUt9dn1%2BYQiRKQWBINqh6E01Gvs7RclY32EAAGbAWYbCRf3uj9CKBMSPaB7TvKtfLBWhwhqJeOY2QHc0idbi9qvUPdH2KBCEznpaL3Pq8HDVihj2CJ%2F8qhQMkNNQNd4i2TxP%2BVBVdRs%2BktU9kuPUheBFa45tHmKLr9S1Agz%2FXuLHlrbL72cFHcewtkT4JwHhMsxPaPi1YkPX4q3olP0OE0WwkBvoMJL1h8QGOqUByIyvdbM6GgoghUEYDrSoF33Royhj0DQJU9358xOrbdWtyUkAGc61FROZv0Nat1mbZMgJpBesRZ2qs6oucMzwtYqwb2lhPEdNWDlj9WIIfxcN9H%2BrlJ6Mkq%2BWH3cmr%2FVoBdA8CYosOAoDhOltbN1WIdelOTkMugVqHDtXRbTZs3tIpdjiZWCJCISYX05rbanjW8Dmwctb7luyOVot7Q9uHwIRkrtK&X-Amz-Signature=bdc60d854c55ed8921aecfde9c811fb65db939c1821796e591588a90bd5e7c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



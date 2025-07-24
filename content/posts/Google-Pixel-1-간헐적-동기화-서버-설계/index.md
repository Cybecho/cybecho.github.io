---
title: "Google Pixel 1 간헐적 동기화 서버 설계"
date: 2024-07-18T15:10:00.000Z
draft: false
tags: ["Other"]
series: ["Let's Homelab!", "HW"]
description: "픽셀 1의 간헐적 동기화를 위해 윈도우 서버를 사용하여 사진을 동기화하고, FTP 서버를 설정하여 파일을 관리하는 방법을 설명합니다. Syncthing을 통해 윈도우와 안드로이드 간의 자동 파일 동기화 설정을 안내하며, MacroDroid를 이용해 Google Photos의 자동 백업을 유지하는 방법도 소개합니다. 배터리 과열 방지를 위한 스마트 플러그 사용을 권장합니다."
notion_id: "baa1f2f9-90ef-4a90-b84e-86dbcd5b5d7b"
notion_url: "https://www.notion.so/Google-Pixel-1-baa1f2f990ef4a90b84e86dbcd5b5d7b"
---

# Google Pixel 1 간헐적 동기화 서버 설계

> **Summary**
> 픽셀 1의 간헐적 동기화를 위해 윈도우 서버를 사용하여 사진을 동기화하고, FTP 서버를 설정하여 파일을 관리하는 방법을 설명합니다. Syncthing을 통해 윈도우와 안드로이드 간의 자동 파일 동기화 설정을 안내하며, MacroDroid를 이용해 Google Photos의 자동 백업을 유지하는 방법도 소개합니다. 배터리 과열 방지를 위한 스마트 플러그 사용을 권장합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZJNGBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIE2Dw8S0yF3rNuCRWd%2Bv0edf%2BkajC5h5Iu2%2F5mCcCkFMAiEA2mAjnlry7JDhGiWX7XzSCKWot%2B4GFkAwXz3OJVKo16cq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPbIqEeOnZ%2Fvl%2BKcCSrcA3mzpN7bvHcU7z7ckV4LxhDLh8qdUDsORGMgaNl0ywx9%2FrpSbD7wGj7wO3LdBLv2OGMxx%2FaJ%2FzIu1l7l1BZsJRRGtrGEoUBGpRceoZQhGOa05xXY%2BCncKnR55MMm6OBmwhlNFKsr2jWS5Q%2FY%2BW25Atn%2Bde0JLidKIb6Ul5r6eFJ0y5PXYcnQlGrIac0TAwUvd88N%2BbvdkmwWtlP0F3jmfRdYFhaVHPDAGCAXVOlcQJOt1eSgf25JELjK0W9qPMI3n%2BPmJJwpcQsBkfbR%2FYahJT4nN%2BHhuNV3YqnwTYUJ2yKdBknVJA1ZEoStuAS6GUJC%2FmnRGmeyb6JBAPwfzlwguy1OgVzlCVGL3Lw0VsFk5s7Kyw4EuXgiCzIdbGWbR7JP0I%2BuRU1CtOVYW27TTEAeXSCXMkKclDEPMXSD4XWQE0vVjA0W3ThdYSKdbVvion%2FiE7HYt%2FSH8VFtFWWc8rqronu%2FqZZY3OCn84p4IGIioI3WtWYuZNzXjk9QNjFYk3WJNF9FRhJYfWGiKNn8xa1MeP1vNOWd8uvbtOL%2BHZZZnSPW9KNGwo85uUMicpYAfYAHeBLWT6MLxVICCJZc7JCWuRc6T6h4HEkjV8EXY47IrPnwqFaDkewWgOZeNALdMO2biMQGOqUBahDTBGzJDnLEoLsk2aw8OiMzTGswgQ4mZ6PZ3geuqqJg3dFHcs2VjSAMqTOQ8AT4cxH9SVqrRCyvSrzT8Oj%2BjmDXYaPC%2B8J2iAJp0g1Tw9Snx5GDJKgnQryu67eKd8BpM7C2DGsiFGBJsnN8uNFKRouBg9toFXzftxNX2qVguVipO8fwzO0wqRpEDEyRVvNTSUdpNssWWO5cU%2F1VgqvCt3PqkXuS&X-Amz-Signature=d1c487c82331e14411260a9f71ac17341ad9523c945ed08b3ea9d7a96b36fbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Google Pixel 1 간헐적 동기화 서버 설계

```plain text
폰 2 폰 구조가 아닌 이유는

픽셀1이 항상 서버역할로 켜져있으면 발열과 배터리 이슈가 있으니..

중간에 윈도우 서버를 두어(Proxmox위에 VM으로 올려둠) 

집에 올떄마다 그날 찍은 이미지들을 PhotoSync로 동기화해두고

Pixel 1 이 켜졌을때, 그동안 저장되었었던 Windows에 있던 사진 파일들을 핃셀1에 동기화
```

🔗 [https://www.figma.com/board/PuUNtcRr2BktQZ1Vyr7jvD/%EA%B5%AC%EA%B8%80%ED%94%BD%EC%85%80-%EC%84%9C%EB%B2%84?node-id=0-1&t=RcWEx1qScN8vzMNO-1](https://www.figma.com/board/PuUNtcRr2BktQZ1Vyr7jvD/%EA%B5%AC%EA%B8%80%ED%94%BD%EC%85%80-%EC%84%9C%EB%B2%84?node-id=0-1&t=RcWEx1qScN8vzMNO-1)

## Google Pixel 1 저장공간 확장하기

> 💡 **[Google Pixel 1 에 외장하드 마운트하기](https://www.notion.so/1a28f3aeda114b0380435ba02c83e9e1) **

## Pixel 1 아이피 고정 & FTP 서버 개설

> 💡 **[https://www.youtube.com/watch?v=29cuWkfal1c](https://www.youtube.com/watch?v=29cuWkfal1c)**
> ---
>
> 해당 유튜브에서 다음만 보면 될 듯 하다
>
> - 아이피고정
> - 픽셀1 FTP 서버 개설
> - 윈도우 픽셀1 FTP 서버 마운트
>

### → CX 파일 탐색기로 FTP서버 개설 하면 됩니다

[https://play.google.com/store/apps/details?id=com.cxinventor.file.explorer&hl=ko&pli=1](https://play.google.com/store/apps/details?id=com.cxinventor.file.explorer&hl=ko&pli=1)

[7분 30초부터 보세요](https://youtu.be/29cuWkfal1c?si=wYnLUe9kyCeKjXYH&t=456)

---

> 서버 개설

> 윈도우에서 ftp 서버 마운트

## 윈도우→안드로이드 동기화

### → Syncthing

1. Windows PC와 Android 폰에 Syncthing 설치
1. 두 기기를 페어링
1. Windows의 특정 폴더를 공유 폴더로 설정
1. Android에서 해당 폴더를 '받기 전용'으로 설정
1. Windows PC를 항상 실행 상태로 유지
이렇게 설정하면 Android 폰이 Wi-Fi에 연결될 때마다 자동으로 새 파일을 받아올 것입니다.

## MacroDroid를 이용한 Google Photos 자동 백업 설정 가이드

> 💡 **[https://karjeg.tistory.com/395](https://karjeg.tistory.com/395)**

안드로이드 업데이트로 인해 휴면 상태의 기기에서 Google Photos 백업이 중단되는 문제가 발생했습니다. 이를 해결하기 위해 MacroDroid를 사용하여 Pixel 1 폰이 활성 상태임을 시스템에 알리는 방법을 소개합니다.

### → 설정 목표

다음 작업을 주기적으로 수행하여 기기 활성 상태를 유지합니다:

1. 2시간마다 화면을 켜고 잠금 해제
1. Google Photos 앱 실행
1. 업로드된 사진 삭제
### → 사전 준비

1. 안드로이드 홈 화면 중앙에 'Photos - 여유 공간' 아이콘 배치
  - Photos 앱 아이콘을 길게 눌러 '여유 공간' 옵션을 홈 화면으로 드래그
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15a4b41e-a6cf-4a23-aedf-70f9cbd019f9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH226KNE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBvoyAgG9hZvwwGnzFy2d3uj9kLxyf3cDpD1XL1wq3AdAiABVEJ9IzTIfwlyA9qSLVxRNNVK0POcCbmfo9D92UP9JSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMtt0VwuSah98Mu6hjKtwDM%2BImWld8YBhR63xgfRXtWJXa%2BzDtAEDl%2F4%2BOkBZ9BrtAUIszBrQrtISg4l6el2edM9ICWNkYJIxAZVQrerpYOO554rAaze6kqxkLbooL8YDFynkGQnbvYnfKSPrK89hoKzl4GLrnfYibDaX2PHA056ruT2xTZLSf%2F1PP%2BviIQOuR1%2BKoneMGPVBk1Jh%2F%2BJ9l2S87xd7MVc319%2B4S7fUDgpNxSdWwB2f4xLza3B%2BuJF3X064Tb2us2fGAS79xg3P4vzK8xBVu2srAKCFnDDRK1h9iszzmmT7exZHXWq8NynXojsRxYa2jGJYoaAjZozLgviEuwEh1kBIUPJin2tp1nvXWAkjRZDTNubcqoAYcc9I4%2FPojgnAi5Nk8ZUj0zJxLQQN5c6oRgciy7IMhjUzl7Pv02h1BGDEMl9YgDG2%2BNSnYtxSGT5ggLYBWiD8H1P7275Z2Nj0gv7ndAXb3gnxARbJWj3EEaP%2BlFmpq1%2BODVdWiGDR9azJnFanYQL%2F2ytn5MSpUPzfvLmeEJ7srJ5962t5p%2BH13C1gGKdqEnyuthqeY9Xi4oIU0LaG7IypBGS0xerJBy8OkFe7J9MQ7VCQawTNWIUJe2IGEPvD9HDFL60vr2vNlTOXVXF%2BWRvcw45uIxAY6pgEW6L6MCC38QIU1uxXHXG4bWZ8p90NoIb9WCEgc%2BNXjmjI1ew2Tt%2FQIzH8yGQS%2FL3HO7qRU5qxcZFVVfVydLoHkHEnEteVjHWAGBhvFNVSiQpLMNoJowQsT5zx3qE%2BA0yxUwPN0V0HoKcUjbZG%2FEfurednARIwnDgpZkkP93PyxmKHeMRHiQ5cIs1e6MC74YhbQ0pySXDt3fdM72SFu41IkZZGMcUzj&X-Amz-Signature=914b3319f8cc410254e6346668b9c960100f3ad8c42ea609bbc4c6f8c9747de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### → MacroDroid 설정 방법

1. MacroDroid 앱 실행 후 'Add macro' 선택
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/94b66ecc-f484-41a5-a1e8-84c316e05557/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCPNY2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAyFaCkhFWK9EoW7k0ry%2FULKZF30xyTSo9FqC2i1IAE8AiBCfmn4Fj2Pcy8aJxPiS74WhxBPa3DBd2xbh%2Bq0YGWKlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxAUWMwMEl2A8dZSHKtwDXR9FLg8Rc9c5IWcs9np1ec4Y9ivzQxHVkpnhAOPr1vUE7QYfBPELcgOI6CAeRoKj981RQgetkQvp69FB7PS1mbV2FlM2q5CNcHEwX9qRDMVKOYIaPM4VTceKmzeZcvIzyGpy64eNlBn0X6NXn%2BbiQ3Z8DbnW14mPuBUpoaWGcyTDRocQ6xarIQvI87g4VwKsxlsKDV5bGsMk8PyaNVgLRgYTTSfSLVEOQOl%2BiAdtpTVC6Dmt%2BJOE6gr3yA6QeII%2FK5ycOKWLpV24B8h%2Bj2A59wIkKPN3sh5dKiU%2FOWxbgfwGFaOpJtDhFzUBlKTwakzQkINhGCjEUbr%2FUYawiUbpIxN59%2FTJ1tDthMBFqH%2FK%2BnuZCj56%2F6MUAyAllkrVBw36ftrlmvbizMScZM%2B%2FxrzEZfYSJm9BfFhKHk0ScelT8QWFP6OXTzF%2FSS8ajhAsvT71sKkropHcDms0DFG5J6haKREqkilOdngz3ULV6pq%2F9312UroBo9C3gANHK7CY121Sx6Lxaop197K90psFj5m2MVH1M589o8x8I%2Bs%2FS34kvh8lcC6ibD2hJzAQh8zi%2FvNl5IOuvHFR2Kt26vrOU4OSJbDbpg9gigZUNkC3IfyTcGkbuLoFB%2BHSARhkYhEwxJyIxAY6pgFIhM0kElAh88hS4%2FS%2Byl%2FJRsEQwK645gqmwt%2Fmv98OU3SXSeb2zDyWkG1LZJ80NolWRT0xzaX28vtsEJ%2F3o4QE3VpWSyKyGhzK2cXmvHGpsNexq237pWM3lCYgQieUkYZQm0YZj9zNSLW8ZKji0sqNovjnnxZyzvSxq8tUkXjq0%2FSw3AC08kjLrc7K6UU9on11LtFiEXgLbXuYOMJDk44jcu6i7axw&X-Amz-Signature=db8cc20aed81effc5503f16f8396dd269280dd2383a437322685bb250602ef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e53f093f-3373-432b-9067-e644184a4145/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCPNY2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAyFaCkhFWK9EoW7k0ry%2FULKZF30xyTSo9FqC2i1IAE8AiBCfmn4Fj2Pcy8aJxPiS74WhxBPa3DBd2xbh%2Bq0YGWKlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxAUWMwMEl2A8dZSHKtwDXR9FLg8Rc9c5IWcs9np1ec4Y9ivzQxHVkpnhAOPr1vUE7QYfBPELcgOI6CAeRoKj981RQgetkQvp69FB7PS1mbV2FlM2q5CNcHEwX9qRDMVKOYIaPM4VTceKmzeZcvIzyGpy64eNlBn0X6NXn%2BbiQ3Z8DbnW14mPuBUpoaWGcyTDRocQ6xarIQvI87g4VwKsxlsKDV5bGsMk8PyaNVgLRgYTTSfSLVEOQOl%2BiAdtpTVC6Dmt%2BJOE6gr3yA6QeII%2FK5ycOKWLpV24B8h%2Bj2A59wIkKPN3sh5dKiU%2FOWxbgfwGFaOpJtDhFzUBlKTwakzQkINhGCjEUbr%2FUYawiUbpIxN59%2FTJ1tDthMBFqH%2FK%2BnuZCj56%2F6MUAyAllkrVBw36ftrlmvbizMScZM%2B%2FxrzEZfYSJm9BfFhKHk0ScelT8QWFP6OXTzF%2FSS8ajhAsvT71sKkropHcDms0DFG5J6haKREqkilOdngz3ULV6pq%2F9312UroBo9C3gANHK7CY121Sx6Lxaop197K90psFj5m2MVH1M589o8x8I%2Bs%2FS34kvh8lcC6ibD2hJzAQh8zi%2FvNl5IOuvHFR2Kt26vrOU4OSJbDbpg9gigZUNkC3IfyTcGkbuLoFB%2BHSARhkYhEwxJyIxAY6pgFIhM0kElAh88hS4%2FS%2Byl%2FJRsEQwK645gqmwt%2Fmv98OU3SXSeb2zDyWkG1LZJ80NolWRT0xzaX28vtsEJ%2F3o4QE3VpWSyKyGhzK2cXmvHGpsNexq237pWM3lCYgQieUkYZQm0YZj9zNSLW8ZKji0sqNovjnnxZyzvSxq8tUkXjq0%2FSw3AC08kjLrc7K6UU9on11LtFiEXgLbXuYOMJDk44jcu6i7axw&X-Amz-Signature=23fbdb832cf3a2f18f0fa89b9512122d52173315fd729cc436f7dca0ca05688d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 다음 단계를 반복하여 매크로 생성 (Pixel 1 기준 클릭 좌표 사용):
  - 트리거, 동작, 제약 설정
  - 화면 켜기, 잠금 해제, Photos 앱 실행, 사진 삭제 등의 작업 추가
### → 주의사항

- 배터리 과열 방지를 위해 스마트 플러그 사용 권장
  - 예: 3시간 휴식 후 1시간 충전 주기 설정

이 설정을 완료하면, 폰의 전원만 유지하면 자동으로 백업이 이루어집니다.


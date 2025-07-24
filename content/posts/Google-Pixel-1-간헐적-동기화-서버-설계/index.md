---
title: "Google Pixel 1 간헐적 동기화 서버 설계"
date: 2024-07-18T15:10:00.000Z
draft: false
tags: ["Other"]
series: ["Let's Homelab!", "HW"]
description: "픽셀 1의 간헐적 동기화를 위해 Windows 서버를 설정하고, FTP 서버를 개설하여 파일을 동기화하는 방법을 설명합니다. Syncthing을 사용하여 Windows와 Android 간의 파일 공유를 자동화하고, MacroDroid를 통해 Google Photos의 자동 백업을 설정하는 방법도 안내합니다. 배터리 과열 방지를 위한 스마트 플러그 사용이 권장됩니다."
notion_id: "baa1f2f9-90ef-4a90-b84e-86dbcd5b5d7b"
notion_url: "https://www.notion.so/Google-Pixel-1-baa1f2f990ef4a90b84e86dbcd5b5d7b"
---

# Google Pixel 1 간헐적 동기화 서버 설계

> **Summary**
> 픽셀 1의 간헐적 동기화를 위해 Windows 서버를 설정하고, FTP 서버를 개설하여 파일을 동기화하는 방법을 설명합니다. Syncthing을 사용하여 Windows와 Android 간의 파일 공유를 자동화하고, MacroDroid를 통해 Google Photos의 자동 백업을 설정하는 방법도 안내합니다. 배터리 과열 방지를 위한 스마트 플러그 사용이 권장됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57LTIML%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFvT%2FnZG4XHdhowNB6e5Z1v3m21CIXfKb8MyPws3M500AiEApg7XJhXHuMtY45t75UzTfsW9YXjqrTfjzujxp3ZaL5oq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAVIUvPXgXq4Y%2FuWACrcA8xsTfGuCMZRfBqnFxLwNVgzTXml1t7OYRXyNB08qhCGEwFZnNs8x35IxP5510Ya3HsC3akXR6Wis680spWFsMonUoImvY1mkmwXMDq0kl9%2B6EsQdeNcuDloJrsnhcBcai1SC9RlHqUg7SDMEyKI6cxZEgtfiMeuSyPdS7UD1EY1cf3OeDMDz7NSS46eZSRMldtUotmQUXfutPEhZeqYiG%2BUhWBxB5ZRLAyu3XJvvc4AtvTLJMa1GPZdgRoN5FInIiB0Y%2FuqXX%2BjYgsguT8Ek1ZS5%2BH6IjJ9hjhLijDV1Dc4Zfvon6%2BszFoJdBuGY%2Bo1JUqKPHGrSdUXvMFcyEWeBcg3J1L4iUWubqE2YEisKlnnN5ilcWFuIwyT7WX1xJMYSGiDqAgN%2Fqj6hZWFcbP2PhycP87OiddSAL4mnTkhUU3nizJC3W4Ynu3mb%2FGeVChZq%2FOyo6IjkGtzqGKsP6IQ642byK%2BxINEGXttsEydkQV%2FFICQd1L6%2FEAhuUQNkWCtPlhqFW763xiSeJ9LDSQ8VuAVB0XXdhikGQ7SkmF8LpH7OhlZgF6cnFmgku9oovTvfV9fcOfHLLeFgYV7v1nsHQGETDZLqnIVdW1hloJvkVkzDvCVViuHXxq2tbJNRMJvPh8QGOqUBOmiNLUKs9D1V4PLc29ybeA8BKp%2FCpyvUvUCEVXJyjEDtEWi9DdnQBAuRso7pC%2B7YanNdPubbV2Y18e7ZB5RLF0ebgKp%2BcLJzuzhOaw6v%2FEcwx1Jv4xU477jtxgCwMc0C3mZQppPhqn%2F%2BGg%2FdlL2KRauirV68oNJ0%2FaTT7pvq1x4y5G73pKUUZCG5AZkwSjS5WwK5TN1AmZANaAXdE48WXhz%2FQ1We&X-Amz-Signature=a7f7e1098a9cf52ca3711572e9c1acf2e1e6041a87dc9cc0f4bd35ab3b3ac146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
### → MacroDroid 설정 방법

1. MacroDroid 앱 실행 후 'Add macro' 선택
1. 다음 단계를 반복하여 매크로 생성 (Pixel 1 기준 클릭 좌표 사용):
### → 주의사항

- 배터리 과열 방지를 위해 스마트 플러그 사용 권장

이 설정을 완료하면, 폰의 전원만 유지하면 자동으로 백업이 이루어집니다.


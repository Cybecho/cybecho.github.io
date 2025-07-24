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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SISPKR3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFaTCu%2BEGAuEmZjD6eDxiUmsDewNm29f%2F2%2F0OXJfPBtKAiEA31ACzmuHtmLhidTK6HiCodr%2BUc%2FwAvnLLXiCnvhWk2Uq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJc5xLExQIGFq8KjoCrcA1Er7uShzXv5SazUjLPsjwZP5eh9SjX9fzUNYY0uzwYNPaduPZ6SsH%2BF0uR%2F1KFY8kIOEKiFTzbN59FvpHaM6HNZTcdCtNUYfMWDLdQRmSIJfd2hKHVVzSOo6GuUskyI8vAsB5j6IZ%2FoXoo8CcLqYQzMeSVqFH%2B04CD62kj%2Bgheegym67ydinEGVCMbNRmn4fhVRpeTZ45igQd6yi6Ae5lhO2tFvyr0Bg4jJFfT5Tz2k61ub%2FoTOr4hSY4I7yj5dVYbFQDtTxEOk4HUzUd97Ukmq21dsBVoB3HCH7NB8qZuJTCY0bAEqtWdrqadDXw13ZL7nOlPdBISRQH%2FnmJk5mneFlhwcKkg5dYtqGwHJW4TI3KcrmgC0GAn8gZnt%2F7%2FkgRS2WbRl2t0hItdxtuD7eqTYziAN4nFUOUIvPkecq0SIAAyEpnlnseASwNo8Du0ewGDHSyhRXOlMAml6kGaOqnuFeS9hYeyuQvxKiNUV1lG5WqEXRj0Jy%2BWsJVhSXdNm15EnShEZ2jBzXe4%2BmRlPO10bEDFrFXA%2FoDoR%2FdctWi%2BTmL%2FtLThZRBqG5%2FZaJTUlPzQEX6TM8O%2BJROC8NS5w7U%2BZiRwRtU3wv8A7FeGzXwy8yK%2BaKsg8XR8FSyQHMLX2h8QGOqUBXu0BaTqqCLPYBTCj6JXwOq410swuCYhL8wFOiwl5oix%2BRwUnNTEDIFONgQtd3CrafNsKRNi44h97U3GBuwOLCb%2FT1yYTFHoW2hUUQmjx5fRnGBRT4mipXkG9i0ayGtuDTSsN736NTuSIFfz81c7oGCZ15ZOp%2BeQKAVjM%2FZYRbT48tOONZxo4ZCsx1hAco2RWidjk%2FmtBY7JSHxJTQhwObcExRpis&X-Amz-Signature=9ce54f4cede62b1c832fae5d8f3305804cebf4e3dd76129ad368df7bc8325a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15a4b41e-a6cf-4a23-aedf-70f9cbd019f9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADMR7JE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDZ%2BeoZ0ssNy3ZebfHhOWlNzI9yQwGDsdLUcpD8%2Fnkp%2BAIhANLLoGkzfkOYsF%2F6hDPOwfeNigGII1NKcMUSTdh1jySHKv8DCCoQABoMNjM3NDIzMTgzODA1IgxPlfjn6jtXkdeVGmsq3ANcJZA%2BqZFIYLQ9fBLCUOdGk2L%2FJCmM99K3BShgxShtu3QbxrUy0ziKryfu26X31sthM5V7k0tOWNJaO5O6OB%2F1nMVoa3G%2BLAWxm01Ky%2Bqj1nV57SWC58HVejybCH8nd4znjQKXUttKPINNigY8dN3EefhnJ4TTPpoCVuj1C2WlX10RfOOjGgieK1KuK93y6l79uBYWcF%2FNxuWIGzYu8FfO6Ozz9XMZ3fBR0Lm8YBlXXnBJnbUGi1Z7hidtyHR2nnO5tVuujFuZTSSPxeARrIW5K1nfNFoarCnUqkHZ%2FkWenEiejAvruWzKz%2FVeC74zL%2FcyEzrTNem7xNj%2BlZ%2FJuVvoWg4ieETs3qjoOhGL0x%2F7x7qINK1hWru%2BQTNcNA67eqDqvYxeVjZSBTAUaasArnvsXr%2FuqlgoLxsNY7AlJSzK80yPnluhtGNlSyhfa4vMW1%2FgdR%2B0JAKXgelgbVHoiAHGrIZysfhbHGHdooppN4YRQYbU5eomvNdYPgWlTbQ3YKcsqBwG7iDTdmpFY4ywrDrOjKsLid%2Fl8pvW5%2FKkf4VVdx0M%2ByvisoT1SkDMxtwzAqBlS0%2FBNCWYPsTr7og9lGNX1hXQ%2Fy9GDxFcioJf1X%2FV58VdgjuhHgd8%2FaM7HzC09ofEBjqkATQx%2BHhkMybxunRrDLLZp51anWR%2FZ86D3WATukqExVjtHSqFOkN8De6cT7GycQDEsNyQ1VJSSgxx3ap%2BC9%2BPveaPtt%2FdjDcDdsj%2BGwhVGRrNbVu8S1%2BWGDZgNqbMXjPhkHKG3ReBUFkUbvzOZFiZZ1d3tqGgcRc%2Bl2J0Fihb2TuEPuYAGZpOyVQC99mFypN4iOCq%2F8Z7FHmO4cDwt4zNrTo3fc8j&X-Amz-Signature=42b4282ca06d17523abac53f532c43ba35e60b25c7bb03e497fc0590697df379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### → MacroDroid 설정 방법

1. MacroDroid 앱 실행 후 'Add macro' 선택
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/94b66ecc-f484-41a5-a1e8-84c316e05557/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO7SVF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FpxWO3sJG3U%2BpSODFOms473YpEOlHsWJkyfRBVTMXswIgLIIoKtw05bAcHQEJxlzEM9C3GIhfvzVd%2FN74aCduA4cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP6WXisXQ9tnkIj19yrcA32qx0vvGN07XOPz%2BfgtP8wKvRrS%2BDt6lV5q9%2FvoSJorZSRvHUwYd%2Flu49MbudcfAHUrivnCFC29I9luY5bmDQDlgG0Jvc24hn5W0xiPqNh1gEo4NUhnqp8rg1xbLpPnwWvGfWU3do2xfnk3qsmIdTXocDNpXVfs%2BRgz7a%2BAc9eIK3559wEIfHEJ%2FjcMCLO1lw0CUsHP5sHyrUZ5cIagKvl8OCuWm5wN7cdJFjnaskwZeeWDcLO%2BDOG%2B%2BOPDtvYrP2WHQQGQ8B%2B4kIWtk1nM2mlFe108MtC4f0LFfne7HdLhHHuhvGA8lVqfp3%2FqdBWGcMwPnxqFpoZSo7gTOxShrzydrxTZGsHO00yQKSXVYIYtqK3lzimWwU85%2ByD%2BEoDGE3ErX047JPEJpLsi0SH7xhq4DO1BHuo4LrQjfwS6j9iEuaLcchkbAQzmYXZTu5bcBExwpW0oAn6GBj1DKEhBO9KI%2BbB4Ummky0GSVR5GCDuDAaOlDR5P0DU4mVA8AqtJBc4oP1vu71WIu6BtXDxaCVgMlia%2Ff34GGW4Vm9LU5yjngQtMcU4u6V4SHTS4TDDHHh75Mhnjf%2F3Wp%2FJB0geOKC2IUb2h5PHpK4ASebPbV1mHVmDNVz0aKxA51SiBMJX1h8QGOqUB8%2BHUqCRPlZ6%2FgmLq8EQL9zFC5Rj5nyffo81XLaH%2BcSGY1Y4uR%2B9vLH%2BTvcxzKVuvbkjgn2LD985t4%2BvriZJgmLzPKMh0ao1eYK7gf1dMOxqJIRxKTOeIkMGkB7neM2Pb52Jj3970RwWdO%2F3fwHqkkc0JszCLWH0KawK7q99PJTlBeyqZ2w4ib0qzsAxmYY8AS%2FrHO%2F%2F945JSdtXaMvOYB0Pa20bN&X-Amz-Signature=480537418ac0c279d158653ac10117b6939ec678ade20440e02916cc026e20b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e53f093f-3373-432b-9067-e644184a4145/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO7SVF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FpxWO3sJG3U%2BpSODFOms473YpEOlHsWJkyfRBVTMXswIgLIIoKtw05bAcHQEJxlzEM9C3GIhfvzVd%2FN74aCduA4cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP6WXisXQ9tnkIj19yrcA32qx0vvGN07XOPz%2BfgtP8wKvRrS%2BDt6lV5q9%2FvoSJorZSRvHUwYd%2Flu49MbudcfAHUrivnCFC29I9luY5bmDQDlgG0Jvc24hn5W0xiPqNh1gEo4NUhnqp8rg1xbLpPnwWvGfWU3do2xfnk3qsmIdTXocDNpXVfs%2BRgz7a%2BAc9eIK3559wEIfHEJ%2FjcMCLO1lw0CUsHP5sHyrUZ5cIagKvl8OCuWm5wN7cdJFjnaskwZeeWDcLO%2BDOG%2B%2BOPDtvYrP2WHQQGQ8B%2B4kIWtk1nM2mlFe108MtC4f0LFfne7HdLhHHuhvGA8lVqfp3%2FqdBWGcMwPnxqFpoZSo7gTOxShrzydrxTZGsHO00yQKSXVYIYtqK3lzimWwU85%2ByD%2BEoDGE3ErX047JPEJpLsi0SH7xhq4DO1BHuo4LrQjfwS6j9iEuaLcchkbAQzmYXZTu5bcBExwpW0oAn6GBj1DKEhBO9KI%2BbB4Ummky0GSVR5GCDuDAaOlDR5P0DU4mVA8AqtJBc4oP1vu71WIu6BtXDxaCVgMlia%2Ff34GGW4Vm9LU5yjngQtMcU4u6V4SHTS4TDDHHh75Mhnjf%2F3Wp%2FJB0geOKC2IUb2h5PHpK4ASebPbV1mHVmDNVz0aKxA51SiBMJX1h8QGOqUB8%2BHUqCRPlZ6%2FgmLq8EQL9zFC5Rj5nyffo81XLaH%2BcSGY1Y4uR%2B9vLH%2BTvcxzKVuvbkjgn2LD985t4%2BvriZJgmLzPKMh0ao1eYK7gf1dMOxqJIRxKTOeIkMGkB7neM2Pb52Jj3970RwWdO%2F3fwHqkkc0JszCLWH0KawK7q99PJTlBeyqZ2w4ib0qzsAxmYY8AS%2FrHO%2F%2F945JSdtXaMvOYB0Pa20bN&X-Amz-Signature=d5376bce92257adef321740fd2b26546a1ab76f5cf98b742aad8f6de2ee0267e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 다음 단계를 반복하여 매크로 생성 (Pixel 1 기준 클릭 좌표 사용):
  - 트리거, 동작, 제약 설정
  - 화면 켜기, 잠금 해제, Photos 앱 실행, 사진 삭제 등의 작업 추가
### → 주의사항

- 배터리 과열 방지를 위해 스마트 플러그 사용 권장
  - 예: 3시간 휴식 후 1시간 충전 주기 설정

이 설정을 완료하면, 폰의 전원만 유지하면 자동으로 백업이 이루어집니다.


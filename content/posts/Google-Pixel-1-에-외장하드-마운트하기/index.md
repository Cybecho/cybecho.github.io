---
title: "Google Pixel 1 에 외장하드 마운트하기"
date: 2024-07-18T12:34:00.000Z
draft: false
tags: ["Other"]
series: ["Let's Homelab!", "HW"]
description: "픽셀1 폰에서 OTG 외장하드를 마운트하는 방법: 개발자 모드와 USB 디버깅 활성화, ADB 설치 및 명령어 실행, 외장하드 연결 및 설정, 사진 백업 및 구글 포토 자동 업로드 준비. 무선 업로드를 위한 FTP 서버 구동도 가능하나 속도는 느림."
notion_id: "1a28f3ae-da11-4b03-8043-5ba02c83e9e1"
notion_url: "https://www.notion.so/Google-Pixel-1-1a28f3aeda114b0380435ba02c83e9e1"
---

# Google Pixel 1 에 외장하드 마운트하기

> **Summary**
> 픽셀1 폰에서 OTG 외장하드를 마운트하는 방법: 개발자 모드와 USB 디버깅 활성화, ADB 설치 및 명령어 실행, 외장하드 연결 및 설정, 사진 백업 및 구글 포토 자동 업로드 준비. 무선 업로드를 위한 FTP 서버 구동도 가능하나 속도는 느림.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f76881f6-006b-47a3-b913-e07e1a043609/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVLSHLI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIG3X2jNTzuf6wSa8GPF2yI%2FgbqMVAbn5sUb7QWXPsbO2AiB7byt%2FLCp60Kjm6J7JRdkCXsNFGA7A%2BgMp%2BO9hhX%2BbSSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKMcsC%2FzzfJzWENP2KtwDZN22%2FnNZaMNviy6bG5XjbgINbvDAflnrcULIjRYvxqubotskBAKY5bI5to52913m1jhQspGh66jjHrWRLNk9m%2FVyfkB%2F4ybu9R8n%2F38aCC099pZdHQRnLv4ja7cZz4emKXq7A2v6aK1e63LR4aqrH4xP8wdi8au74g139MNzQcXDfm6vn4wo4IfGVl6dCOfIpv2AQGhZwIBact4x9p4Zv00WPFRsXAZd0AwzYEyio40yHLXEmQJuv33lKSziZ8mbATuQb2h7FWZiO4mqzlsEJ3Sca9g0JhZayHZGBRZXLzmP4XJJ0wB7p7yZfZgKDYDB%2BGhuVOIWkEGVOTL3aRZWISWNhJKBMBXNcpiR%2FehtyyVJfokH3A9t%2FOqeZpSszJIWF1Y%2BSg9lzRqb3XxtYxTS5Y629yWc4vBEAAhtRdS7jdIhA%2FZfD%2Fe8KtCnHN6E%2B5lSWBycjHCldvgDt7tIQpljcZ4dV%2BO1UAEHtRMDj5tZaoWii3AoqzV8qOhGATYuJ5BmiNg%2B2Rr0SER6fC%2FgnodtvNKCIRIBFCe2OkkvuYkuPtX2v9%2Bl9g6X3pdkmlsUhlKXgMF1VftdF%2F%2Fwv9E8XqMCzsfAwvXtWJeqs7%2FdSx3rCW5j4QZqPr1hT%2FVfKBQwpZuIxAY6pgH9Nxf5vE0Sj2OE8e4TckIEJu350Ly7frgSMocDL8em9hHyz4WKYBq9y8XrAC9uWHWOoTkIxFWtAbcykkAGaU7EijEZi6QwfkCy952sRZ7%2Bb3OEMexty%2Byoa5lBylPwQKt2efiDOjh8CR%2FAqE%2B5qHAvvROG6DeS0xrncVLBRi9zPlvm%2FMGiYrMW7c%2Fb0i%2BJRPtjLMJ8Zly3nNt%2BpWIF1XkCOuktIY84&X-Amz-Signature=0908260e30cc0f450b51123d8396bd3558b99c4cede7e3c30f69d6d913ff544d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.clien.net/service/board/lecture/17216250#comment_write_point](https://www.clien.net/service/board/lecture/17216250#comment_write_point)

# 픽셀1 폰에서 구글 포토 대용량 백업 튜토리얼

## 준비 사항

- 픽셀1 폰
- PC
- USB 케이블
- OTG 지원 외장하드
## 절차

### 1. 개발자 모드 활성화

1. 설정 → 휴대전화 정보 → 소프트웨어 정보
1. '빌드 번호' 여러 번 클릭하여 개발자 모드 활성화
### 2. USB 디버깅 활성화

- 설정 → 개발자 옵션 → USB 디버깅 활성화
### 3. ADB 설치 및 실행

1. [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools) 다운로드 및 설치
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fac4d4f1-3713-4ab1-9caf-2b6c2897fcfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLTMQHY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICQ38qjlMYkjFnMDaXwF4oBreD7M%2BSAmcoPiCg0C%2BvBEAiAi16pQjEGy2jH9tgezvLfukSbYCymFUGBLCVdIwzhHyyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMVMG%2BxEDz2qJdxp9mKtwDjGQ0ehN72sma74wAoeW2N4JDqqjh%2FtqJ6Ky6dlXyjXRbqjYiAfWHxhdIYgK6INQf9b%2FYch2gdbJkFjMfSvJpwBYcFSfu1feA96MrLyoSImhRMGdLdndEhOu6%2FTmuPZ4v0OT6CV7Sje9v6JusBabbe3QLjiF3zCBbXUy14D%2FqnBnBEw70pOEBuVSkGgBHRZ5y8fbbyKynhlPt%2BlOYq3V%2By%2BQu%2BoGK0IW%2BgvX3iyTdwh31rDC8T4GzaWZt8yGXsZ9hLD0EPYx%2BBeJPLR3kur600IwGvGT1G8YoS3gYo3MYTSUVD%2FLbqTU2xyMwIhOjGVZo2C6V9S0drUqWwwB%2Fl4fmGRxOsNaF9DhU8rCXsEVGtwdr6O7zbJJyF496MIcD%2FkR5eXMjqdi64PvYRT4zKHQ7%2BSrlxpDusAisnFR5IJiZxyKmzVjKFg7MH0F0jNWKaYNx%2FJecoyE%2BozT2gVfECUTbHnsQLhcIq%2FkihdozJ%2BmeVGaiWusiOsFcKjOVkefJ3R9IJQaJP2ZjMyRPxgrZ1Y0iLMKGeDq%2B7U5el5Dk6TEi9OOcV0Xrzu7m4qJ4GQ01G7n9sqdsS07TVdLeziql7WtITfWEI3tlKwObVCkiimY%2Bk4tCUOdBFqGpWRJE8nIwo5uIxAY6pgHO4F%2BV%2BEZrqSF4YREQLlN1Zn2QoHFNQPjsngQ%2Bf1J3iw1U9OtBNGaIPgSge00EbtUC48OIjdTTGuyU1CkKXJV2tiI%2B%2F%2B7G5QAvRrmmqXRRxXj%2BHZOyTY5GXHdu56msrHXLc3Lrqemdi52tLPJAW5iSbUzvHSmZ8BFzSoCH0CDYoj%2BndyoYyuT8QQlHa7OT%2FEA8YFB5OpuWwrTY%2BJ2HwDOne1VvLWhs&X-Amz-Signature=b86e49d4ed324b02ef2d5e18bc1ce1c4c19cfc23a1c3ecd2569ea291d3f6678e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d0b4f03-e49c-4cb0-943e-144c7ad2cd5c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLTMQHY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICQ38qjlMYkjFnMDaXwF4oBreD7M%2BSAmcoPiCg0C%2BvBEAiAi16pQjEGy2jH9tgezvLfukSbYCymFUGBLCVdIwzhHyyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMVMG%2BxEDz2qJdxp9mKtwDjGQ0ehN72sma74wAoeW2N4JDqqjh%2FtqJ6Ky6dlXyjXRbqjYiAfWHxhdIYgK6INQf9b%2FYch2gdbJkFjMfSvJpwBYcFSfu1feA96MrLyoSImhRMGdLdndEhOu6%2FTmuPZ4v0OT6CV7Sje9v6JusBabbe3QLjiF3zCBbXUy14D%2FqnBnBEw70pOEBuVSkGgBHRZ5y8fbbyKynhlPt%2BlOYq3V%2By%2BQu%2BoGK0IW%2BgvX3iyTdwh31rDC8T4GzaWZt8yGXsZ9hLD0EPYx%2BBeJPLR3kur600IwGvGT1G8YoS3gYo3MYTSUVD%2FLbqTU2xyMwIhOjGVZo2C6V9S0drUqWwwB%2Fl4fmGRxOsNaF9DhU8rCXsEVGtwdr6O7zbJJyF496MIcD%2FkR5eXMjqdi64PvYRT4zKHQ7%2BSrlxpDusAisnFR5IJiZxyKmzVjKFg7MH0F0jNWKaYNx%2FJecoyE%2BozT2gVfECUTbHnsQLhcIq%2FkihdozJ%2BmeVGaiWusiOsFcKjOVkefJ3R9IJQaJP2ZjMyRPxgrZ1Y0iLMKGeDq%2B7U5el5Dk6TEi9OOcV0Xrzu7m4qJ4GQ01G7n9sqdsS07TVdLeziql7WtITfWEI3tlKwObVCkiimY%2Bk4tCUOdBFqGpWRJE8nIwo5uIxAY6pgHO4F%2BV%2BEZrqSF4YREQLlN1Zn2QoHFNQPjsngQ%2Bf1J3iw1U9OtBNGaIPgSge00EbtUC48OIjdTTGuyU1CkKXJV2tiI%2B%2F%2B7G5QAvRrmmqXRRxXj%2BHZOyTY5GXHdu56msrHXLc3Lrqemdi52tLPJAW5iSbUzvHSmZ8BFzSoCH0CDYoj%2BndyoYyuT8QQlHa7OT%2FEA8YFB5OpuWwrTY%2BJ2HwDOne1VvLWhs&X-Amz-Signature=d617bf41fba0de943495adff3a699d84ca935ca6ce9e9fccf2661cc89304ce8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 폰과 PC를 USB로 연결
1. 폰에서 USB 디버깅 허용
### 4. ADB 명령어 실행

1. PC에서 관리자 권한으로 명령 프롬프트(cmd) 실행
1. 아까 압축 해제한 폴더로 이동
```plain text
cd C:\Program Files (x86)\Minimal ADB and Fastboot
```

1. 디바이스 연결 확인:
```plain text
adb devices -l

```

1. ADB 셸 진입:
```plain text
adb shell

```

1. 외장 저장소 강제 채택 설정:
```plain text
sm set-force-adoptable true

```

1. (선택사항) ADB 셸 종료:
```plain text
exit

```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/190fd8a2-e16e-473e-acb7-9b0da4da79e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKNDKY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD0Cx8P%2Bdy8HWePgcsNwGZWKsK8SEH%2BuICvWYAfUwMChgIhAJ%2B9Ihm4xHtIndOnPcj1tgwFIoVY%2BQTRn3YtNIrlYZK0Kv8DCCwQABoMNjM3NDIzMTgzODA1IgzPFAF67%2FoQdMknNsEq3APiWJdRGmubrKEL0EbiuelA5Oyh9lBOHw3Tpk85T0Kct4RBlJL1YZ51GAHLIWl%2BPxStouamVS1VShSHdsk8dnwmiqkmJOIZq06FtTehShrJUMDAtzegnOkT2hc5g1ob%2FPqRIQ%2BjiAQEqw0R95rjmcWip%2B5nRYLoePA7df1uXim3L%2FIE5RRbxIiWsFPNM3ovT%2BgSeGXdi3f0xrSIid%2F5VUA6wV%2FQJy31b3Blhgx3p5w0DeQaICtHQvBEFfh6Da4DEE099umauII2dRXwXynbmER6PcP6E6bsnzJOXQvoLqoUxPnBniZIXTgiVoqBNq81EoIPo4pTLimfhmxS2zfZieB%2FVSME%2BkygEVwBxa6RESaqVT9l8rDIkx3rQitEUpQZYxwsoAYnZiz9tG1aTP2VlmKLdjpt6%2F5WYs1kCXfcb2vDqYdSFmxpAN%2FW5t30Lq5cJxsJ%2FWtLWFHfBn%2BUr%2BB4D8Aa93zshlzbhGAPRG3lKcCaqisEBjKI3VCWDMkhMvbkPC9z8JUxlOcyp6Bn5%2BBDjZqwOpN1QJaSPx6m7mq5dosC%2FrRzwH7%2BFrRbDFHsGf3XxcdD6%2FB97ocMErcJehrhDoyEHQQs002uZfsdj840%2BODG3BJunJaYpZ58PeabkjDFm4jEBjqkAbcTqgC2TrSCNw4%2B4WdF3SdiQ7QRlyDqQt16u%2FnW%2FyOkvECuPPQVvkCNtUqe5HeRT7nGcZ10kLAufwvOvBpOjd%2B%2F8AHqZ6W%2FZukzYkVvbBSRJQQoABNXBo0faKFrFz%2Fl5QRBDq9%2F3RJ4ICecAl0DA%2FySwq0N8q3lHjyOI4z9sr9Haxy1DRFoiwQUOQrWRAlRBBWtDlooG1gPe2N%2BjmlSW6sK5362&X-Amz-Signature=1a35c5d87f32251901bacf7e63cb4fc3b80aa6f547276c8df05db67780cd990e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### 5. 외장하드 설정

1. 폰에 OTG로 외장하드 연결
1. 외장 메모리로 사용 선택 (필요시 포맷)
### 6. 사진 업로드 준비

1. 외장하드를 PC에 연결
1. DCIM 폴더에 백업할 사진 복사
### 7. 구글 포토 백업

1. 외장하드를 다시 폰에 연결
1. 구글 포토 앱에서 자동으로 사진 인식 및 업로드 시작
## 선택사항: 무선 업로드

- 안드로이드 폰에서 FTP 서버 구동
- 외장드라이브를 폴더로 지정하여 무선 업로드 가능 (단, 속도가 느림)

---
title: "Runtipi - 원클릭으로 도커 서비스 셀프 호스팅하기"
date: 2024-07-15T12:53:00.000Z
draft: false
tags: ["Docker", "ProxMox"]
series: ["Let's Homelab!"]
description: "Runtipi는 무료 오픈소스 홈서버 관리 도구로, 200개 이상의 인기 앱을 원클릭으로 설치하고 자동 업데이트를 제공하여 관리의 편리함과 안정성을 높입니다. 설치는 간단한 터미널 명령어로 시작할 수 있으며, 특히 셀프 호스팅을 처음 시도하는 사용자에게 유용합니다."
notion_id: "478a4e23-8c10-4d1e-854e-d83cb1708cf8"
notion_url: "https://www.notion.so/Runtipi-478a4e238c104d1e854ed83cb1708cf8"
---

# Runtipi - 원클릭으로 도커 서비스 셀프 호스팅하기

> **Summary**
> Runtipi는 무료 오픈소스 홈서버 관리 도구로, 200개 이상의 인기 앱을 원클릭으로 설치하고 자동 업데이트를 제공하여 관리의 편리함과 안정성을 높입니다. 설치는 간단한 터미널 명령어로 시작할 수 있으며, 특히 셀프 호스팅을 처음 시도하는 사용자에게 유용합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d212b36-85dd-48f1-8e46-c1f2c2e1b464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAJFSJGL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD6E7mzuZWyxLkqaMvB4KrYXnIm8ACW6O4r3Fn7btCkWgIgJFoVcsrTihMZ23xf6tXXuP9m%2FNPojHaTSbm%2BeNBfSaMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFioxowT%2F4ve%2F3amsircA8oQvVEMJo6IOJ36F9sciB7Aivt%2FSVgKI0N3a5BzfbwFTXRfTF8CdJfcKAYEvyPizxt5uST90PyUuapYfJjxl2U6AIxITjS%2BkgzC%2FG0k%2FEsngdt%2BDPdTW9HQidzVkK%2FAB9SdA4WpeMXg%2BnUG5%2Bx0xYqVeb9DZUrBoReOmVAEAARjr3vns8BBEWZLI8VjdS60oP1J0%2Frn4XUoc7oe%2B6TV25%2F%2Bg%2FdYvIrop942%2FQOV7BLnRliljhhstKmr5atdDJHlNhl1%2FPbBIFcjQiWamdaZjAJWhxMWxbtbfcQfaxVJvCDOFCqvzlsnIp3lCT85EwG5%2BS3I3ba5bJfe86R5Ufp9dQWZF0kqCn3sgrfsYhwxCM0yUUxs1oRawc4VfKfI1tGpxSlgZe1DrYe0MM1kCrl%2BJzcbKxMC4nyUnM2IzSePs7bbVNKJTq8UqpWiqoG5EmvrneqzLSMYuqyCyDE0k5oWmrAlOpe0RI15GSxYU0bw3CokmQLq8w5JpVowOAWwLpTSe%2FtpnbM0vN6mscFGq19evaXz44mJm5shTiHi5QhEx8gBzZMwFbLpXfXqcZGRRZCICdD9oAuexN3TE55cvTKIcIemLRVJnSXiuZiRTEatiTm3F%2BEqOaFlMVNbgkiVMMKbiMQGOqUBD7J5Qq7jnA2Fe2oX1WTDdOccv83tERiPy38WwOTayrp7PB51QbcBZOGe0wKoRNvzTfRVM7prCcJ%2F2%2F6Va8sK93HApmRrJ8W3KzesrTL79gnzkOXijl1WnQbf8F%2BbsicIcNit%2FFQAtKZBT0lpaX4EGk4l8R6J2vhP4mnnGmmJFFFgvojX4Fq3XCZpJ8yjwug4u4EIZfaN0qLWCqa4Xwo3uuuyjGxI&X-Amz-Signature=d8890804cfc0e5c76f3192c06d1824e720a85216c4d0d825576ee9df20baeb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://runtipi.io/](https://runtipi.io/)

# Runtipi로 홈서버 관리 쉽게 하기

홈서버 관리 어렵지 않음. Runtipi 사용하면 됨.

## Runtipi란?

- 무료, 오픈소스 홈서버 관리 도구임
- 자주 쓰는 셀프 호스팅 앱 쉽게 설치하고 관리할 수 있게 해줌
- 복잡한 설정 필요 없음. 클릭 한 번으로 앱 설치와 업데이트 가능함
## 주요 특징

1. 200개 이상 인기 앱 지원함
1. 원클릭 설치 기능 있음
1. 자동 업데이트 제공함
1. 설정 과정 간단함
## 시작하는 방법

터미널에서 아래 명령어 실행하면 됨:

```javascript
curl -L https://setup.runtipi.io | bash
```

이 명령어로 Runtipi 설치 시작함. 설치 후 웹 인터페이스 통해 앱 관리 가능함.

## 장점

- 시간 절약됨. 각 앱 따로 설정할 필요 없음
- 관리 쉬움. 모든 앱 한 곳에서 관리 가능함
- 안정성 높음. 자동 업데이트로 보안 문제 줄일 수 있음
홈서버 관리 더 쉽게 하고 싶으면 Runtipi 써보는 거 어떰? 클릭 몇 번으로 원하는 앱 다 설치하고 관리할 수 있음. 셀프 호스팅 처음 해보는 사람한테 특히 좋음.


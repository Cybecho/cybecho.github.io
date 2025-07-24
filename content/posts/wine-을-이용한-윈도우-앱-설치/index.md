---
title: "wine 을 이용한 윈도우 앱 설치"
date: 2024-06-06T06:17:00.000Z
draft: false
tags: ["ubuntu", "Debian", "Arch", "fedora"]
series: ["Let's Linux!"]
description: "wine을 이용해 Windows 앱을 설치하는 방법으로, playonlinux와 wine 설치 방법, 굴림체 글꼴 설치 방법을 설명하고 있으며, 카카오톡, 반디집, 노션 등 여러 프로그램의 설치를 안내하고 있습니다."
notion_id: "6d0d0331-75ee-4c73-8707-0be5d3d992f4"
notion_url: "https://www.notion.so/wine-6d0d033175ee4c7387070be5d3d992f4"
---

# wine 을 이용한 윈도우 앱 설치

> **Summary**
> wine을 이용해 Windows 앱을 설치하는 방법으로, playonlinux와 wine 설치 방법, 굴림체 글꼴 설치 방법을 설명하고 있으며, 카카오톡, 반디집, 노션 등 여러 프로그램의 설치를 안내하고 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/12219858-1e91-4b07-820d-6a8b26fa6e41/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TD5RQX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIArNIDLNjZWoknULde0eWk3zJWWC4kBrRBQYLLb1K0v%2FAiEAsygZFNy5w7WGsHV7wW15o2Fklibf7EVKyWMku%2BB1csUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAvaLyayUZllzHSJgCrcA4e2ANYpfJpkLXMQ9f966b14uJJwaczleUppmAuE2PB8YTUuPjfujqk%2BsfBc5VdtBAxLKedpI6%2BsR2FnAppkOq770emn%2BxyYuq3mpyAcNZ53WdMOH5dgg9n%2BMunGE1u197azfvIjJg7U6MtrxsciJFFat559Jj0fcn7WjOQtIZn7qkpX9jyCy6iXxq9IOv8ZA0JChP5p7zIIbbcdVykxdKJLSZFhX0mBfFpoqSL%2FhQ9jMN%2BD08R4B9vivDP6LFai9qkcinEuo%2Ft5atRlYIl%2BTsjeBbuSYDL%2F2qFAQwnego%2Fy8%2Bgc7luZKpIlYF03TksHN0fjivLmI%2BAURWMA6kJC736yUjYLpwGQGEG4eoxGOsKCm4890OjHdw4v%2FmmmRv0VfwZm87jjb4RGVrvbDOV%2FJYDojFVr7BQGgKJlf2RXiTXxzwORSM9deLHLvKp%2FUYiBCgGxHWQHuWW48Js1lr%2F3a7Z1CIlbwePWXgfRSiFNUIGuEYcPsVzxL6rbUqszgNrRZ8yS7D8WEv7Q8uWoToLumy3FcqJOg3l7qMd%2Fena9fIHmfUIll%2BHD8cSgBhm31b6byK9k7TyBr28tvkKzCgHVRgL45eS4GnMXiulEp5F4ga7JL0hS7bYtBMFA0GpoMKn2h8QGOqUBTYLkrrMA878CXqc75iHGMsuQJYOgSqbryVBJcHhqa12vPOtYbm271asWy5O0Zi68MbYV3xHv%2BApxyIIZJufb6CADs%2FL0dkbzKp1vkzee5GiTsV7G34S5zc%2FqtGs9db%2BcoZvbdNQ3oYaR%2BzSIuRoGh72%2F9vrM6NcmSFrd2hgajNJtZN%2Bj4wA7Yn2hiF%2BBGCPBBWxC40XZHK34ZGVTrFFolSdEo5Cr&X-Amz-Signature=e00a93e3aee60b23cffe202195a26f95ff7cb19f3792729265af56ff16d915bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://hamonikr.org/used_hamonikr/82280](https://hamonikr.org/used_hamonikr/82280)

[https://itlearningcenter.tistory.com/entry/【Ubuntu-2004-LTS】카카오톡-설치-1](https://itlearningcenter.tistory.com/entry/【Ubuntu-2004-LTS】카카오톡-설치-1)

[https://solearn.tistory.com/200](https://solearn.tistory.com/200)

---

## playonlinux 설치

```bash
sudo dnf install playonlinux
```

## wine 설치

> 💡 **버전관리**
> ---
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8a9fe72e-34be-467a-b901-4518ba752ab2/a38ce55b-ac94-4cb9-a70a-5d2086e743d9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7OCMDJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBh5gFJ2yGrToLWYFxFpJkMgcwqUx8Dboai5mJY8TghRAiEA3%2BdE3jP8lqpzUi34%2FNBjiC6e%2FFAEJaj6PP0qPgn0AOIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDO4t9nfOFPucU5RnZCrcA5qdT317DcDZ6twtu%2BWZPX05%2BF1SNtcgH4wcIAtrkqz7B%2BNEzjqxUWYPI8KFQe4Wz62%2F%2FBRVfnzYnwWnJ6DzkHiTWwzbAmbC2T%2Fk%2BKh6uJdhYpeo1UrPqyOQsqWvAz1IOQRy5EB9PiYbIgnKHW2kd2HM42F5kvM5YZTazVZWUzzFpCOA9rgyiDLfbO1QIXLtCbInH7O%2FsxN7Km7MZaQpRHnQJuoYhj1H8gYQSEhoFyovpezQKLzC41wDwsGIyWJ2%2FkUatNooQUKniKeFSBjKABQYyoCV76NEIv8CzlM2Y1wANfZXoRKx88eImG5xnl63cRUrIcL8I8ttIi2WOsTPofX0EdzG5baZsgX7%2FjmwS%2Bv3uhyhj3qTsRA17018QUBrhkKIKHex9LRAJfwahz%2FWOtaQWY%2BYeAMX6s9U7JkrtzBwNyoEy92PwbFgBpWgQ0q9COrMrUCHvSDvS1kOcogww%2B6AHvqvcXHzFeotXECzR1SlqY%2B1MTYdydZtQdoVGSBVpEeLYVYjQPpRLuEQhkzvkWDSLHBDbca2hoTm7CacYgQ%2FWzai69wDyXinbqsgiqc1Ll1QK1NO7QhbY%2Flw8FFI%2FnoCpFG5UBVfIrDvv9dpwlf9p4YBuFZY%2FaabwnkUMN31h8QGOqUB2gTntMWquO4hyj6ulbuxqMa%2FelxeK%2Be66VMusuiwuip%2BXHx3grlv%2Fy29SN9VGqjykQdPRipLLWUkJJgCDzSbSHabFFZpvSXGTDsvfLugJWXrbrtddVbRRIGcbr9OwbX3T8MwPWAqpQoBol0UsKA4GGopmDEdx7loVz58Yl%2BLto21Y6VoJg4MPM%2FL3K069SOGHfGFAJzXBHSqq2Ir%2BY4LvPrlO%2B6P&X-Amz-Signature=fdea17a89c006c22b71a87c5ceca2793b6760d272b365136ff9cbdb4ffcb9122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c83a31b9-6ef0-44c9-9c18-68d0434b16c8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7OCMDJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBh5gFJ2yGrToLWYFxFpJkMgcwqUx8Dboai5mJY8TghRAiEA3%2BdE3jP8lqpzUi34%2FNBjiC6e%2FFAEJaj6PP0qPgn0AOIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDO4t9nfOFPucU5RnZCrcA5qdT317DcDZ6twtu%2BWZPX05%2BF1SNtcgH4wcIAtrkqz7B%2BNEzjqxUWYPI8KFQe4Wz62%2F%2FBRVfnzYnwWnJ6DzkHiTWwzbAmbC2T%2Fk%2BKh6uJdhYpeo1UrPqyOQsqWvAz1IOQRy5EB9PiYbIgnKHW2kd2HM42F5kvM5YZTazVZWUzzFpCOA9rgyiDLfbO1QIXLtCbInH7O%2FsxN7Km7MZaQpRHnQJuoYhj1H8gYQSEhoFyovpezQKLzC41wDwsGIyWJ2%2FkUatNooQUKniKeFSBjKABQYyoCV76NEIv8CzlM2Y1wANfZXoRKx88eImG5xnl63cRUrIcL8I8ttIi2WOsTPofX0EdzG5baZsgX7%2FjmwS%2Bv3uhyhj3qTsRA17018QUBrhkKIKHex9LRAJfwahz%2FWOtaQWY%2BYeAMX6s9U7JkrtzBwNyoEy92PwbFgBpWgQ0q9COrMrUCHvSDvS1kOcogww%2B6AHvqvcXHzFeotXECzR1SlqY%2B1MTYdydZtQdoVGSBVpEeLYVYjQPpRLuEQhkzvkWDSLHBDbca2hoTm7CacYgQ%2FWzai69wDyXinbqsgiqc1Ll1QK1NO7QhbY%2Flw8FFI%2FnoCpFG5UBVfIrDvv9dpwlf9p4YBuFZY%2FaabwnkUMN31h8QGOqUB2gTntMWquO4hyj6ulbuxqMa%2FelxeK%2Be66VMusuiwuip%2BXHx3grlv%2Fy29SN9VGqjykQdPRipLLWUkJJgCDzSbSHabFFZpvSXGTDsvfLugJWXrbrtddVbRRIGcbr9OwbX3T8MwPWAqpQoBol0UsKA4GGopmDEdx7loVz58Yl%2BLto21Y6VoJg4MPM%2FL3K069SOGHfGFAJzXBHSqq2Ir%2BY4LvPrlO%2B6P&X-Amz-Signature=e2cd6a49353c86e9d4f87a5daeb2d3a0742f90994d3ce783c12b96aa6018c4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **LANG="ko_KR.UTF-8" wine <.exe name>**

## 글꼴 설치

> 걍 굴림체 다운받고

[https://velog.io/@kiki3700/wine-프로그램이-한글-폰트-깨질-때-해결하는-방법](https://velog.io/@kiki3700/wine-프로그램이-한글-폰트-깨질-때-해결하는-방법)

[https://ko.cooltext.com/download-font-굴림+gulim](https://ko.cooltext.com/download-font-굴림+gulim) ← 굴림 폰트는 여기서 다운받으셈…

## 그 후에 exe 파일 알아서 다운받아 설치하셈

- 카카오톡
- 반디집
- 센드애니웨어
- 노션
- termius
- 점프데스크탑

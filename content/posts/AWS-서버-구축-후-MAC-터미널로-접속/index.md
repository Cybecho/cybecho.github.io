---
title: "AWS 서버 구축 후 MAC 터미널로 접속"
date: 2023-06-10T00:00:00.000Z
draft: false
tags: ["AWS", "MAC"]
series: ["원격 라이프!", "Let's MAC!"]
description: "AWS 서버를 구축한 후 MAC 터미널에서 EC2 인스턴스에 접속하는 방법을 설명합니다. pem 파일을 ssh 디렉토리에 복사하고 config 파일을 생성 및 수정하여 간편하게 접속할 수 있도록 설정합니다. SSH 연결 해제 방법도 안내합니다."
notion_id: "f7d98040-a8fc-4ed4-bbc5-f8301c5d6ab7"
notion_url: "https://www.notion.so/AWS-MAC-f7d98040a8fc4ed4bbc5f8301c5d6ab7"
---

# AWS 서버 구축 후 MAC 터미널로 접속

> **Summary**
> AWS 서버를 구축한 후 MAC 터미널에서 EC2 인스턴스에 접속하는 방법을 설명합니다. pem 파일을 ssh 디렉토리에 복사하고 config 파일을 생성 및 수정하여 간편하게 접속할 수 있도록 설정합니다. SSH 연결 해제 방법도 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6bffb01b-b8a2-42b8-aa43-c4467bb4ccf8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGOOMDLD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBi0cMTruafv05XSIb%2FYPz1fL2m24oGBRWs1FhxC4leSAiBvfshojl7ByGjrATH%2FwCBS9gT5Wst0cYFnyKZzsJaOuir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMhn3c4C5JALNbhcHaKtwD3%2B2z5dL73yVhzdcorbuaYO7ux4Vefeolby%2FierAUKR%2FevaU9zL6JKI6BDBN%2BqFF9dBgtLsEJO5Gae7kmN9Y1xih7fHAdhHQFn0EnIEfCRUp4ZuPHzJl1I6l7nirfctHfwQiQRJ7tPTQelFDHK%2FPYkhQc0TSVWeZQu9gNHypMcOHKWKN6%2B%2B9gjBRFSOZHnV3cPDb2LD%2FfXwUukOAJWSyzcGalJMwLNcx4wYGz0D0U4n0EO0PMUiFc4fE1D0HsxVVXDvmFhAGWtG6p%2B4EaR8t7mt6XqaYUyIPjCHrtk%2BWqIOFmRU1kCODK9ZvJp4YRkb04VLh8MPFsR8tyXeyPfvSaXpSH7jFLw2Q0bMO%2BUC9zaeKZX7MHz5Cptka9snyOXAU9nlrTKHMsp%2B8DDyEpRIu9fZ%2FlHOkXKxNKthlyFp5FyKoI5NC%2BNxlTdTFMCAn%2F1e6j3ce6X7ExoBbRS9b8%2F9v%2FvUUsMlqCFOEr6AoNZ7XI%2B%2BOrMJXuu60edayc7WGc2jciCnRNnPqQWv8S4I3yw3SiOIPTLN134wALg7jQpiIOKE4TiPmb1AADqAF3DIbHslvNg1TBcTcXFQPHbZ%2BfqQSsRQzvnx6EzNY1JJsauMKwr6LWEtZBVFeLMM7b83swhdCHxAY6pgHuOJCPEh0wH7JEz6irptnYuJCfCJIvlGGzF7IwbnTP%2FXHAfEkpDterJKQQpvj8%2F6qW7gtNT56Bwv%2Ff%2B1%2FFT5inweMG6MB1Xs%2BTuAB%2Fa0%2F9LPxAo%2BbTpRNvSl0tIhYDGbvcb7AQxQVKL9HIZY25re2jkWB0ukuWRwuJfM71TPwezFzhV4TdqM5t54VpdODGAOrZ8uiNv%2BpVUvRSEoJxc4OTTo6fCU8c&X-Amz-Signature=edfe6d2819d0032cba80c62f2ed6d6e963ba4f47a153317a1ed67c468137e545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@ryusuz/AWS-로-서버-구축하기-EC2-인스턴스-생성하기-AWS-EC2-그게-뭔데](https://velog.io/@ryusuz/AWS-로-서버-구축하기-EC2-인스턴스-생성하기-AWS-EC2-그게-뭔데)

🔗 [https://velog.io/@ryusuz/AWS-로-서버-구축하기-맥-터미널에서-EC2-인스턴스-접속하기-pem-파일](https://velog.io/@ryusuz/AWS-로-서버-구축하기-맥-터미널에서-EC2-인스턴스-접속하기-pem-파일)

> 💡 **자신에게 맞는 키파일 명령어는 다음 AWS 페이지에서 확인 가능**

다음 링크를 그대로 따라해주고 MAC 터미널로 이동해 다음 명령어를입력하여 AWS에 연결했다

```shell
ssh -i "SBU_KEY.pem" ubuntu@ec2-54-82-74-253.compute-1.amazonaws.com
```

## pem 파일을 ssh 디렉토리의 하위에 복사

```shell
cp "pem 파일 경로" ~/.ssh/
```

## config 파일 생성 및 수정

```shell
nano ~/.ssh/config
```


```shell
Host 간편하게 입력할 이름 (ex.purple-backend)
**HostName** ec2의 IP 주소
**User** 사용자 계정 (ex. ubuntu)
**IdentityFile** ~/.ssh/"pem 파일 이름".pem
```

```shell
Host aws
HostName ec2-3-34-91-1.ap-northeast-2.compute.amazonaws.com
User ubuntu
IdentityFile ~/.ssh/SBU_KEY.pem
```


```shell
ssh aws
```

다음 명령어를 터미널에 입력하면 간단하게 aws서버로 접속할수 있게 되었다.


## SSH 연결해제

```shell
exit
```



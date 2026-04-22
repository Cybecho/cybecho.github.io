---
title: "AWS 서버 구축 후 MAC 터미널로 접속"
date: 2023-06-10T00:00:00.000Z
draft: false
tags: ["AWS", "MAC"]
series: ["원격 라이프!", "Let's MAC!"]
description: "AWS 서버를 구축하고 MAC 터미널로 접속하는 방법을 설명합니다. pem 파일을 ssh 디렉토리에 복사하고 config 파일을 생성 및 수정하여 간편하게 AWS 서버에 접속할 수 있는 명령어를 제공합니다. SSH 연결 해제 방법도 포함되어 있습니다."
notion_id: "f7d98040-a8fc-4ed4-bbc5-f8301c5d6ab7"
notion_url: "https://www.notion.so/AWS-MAC-f7d98040a8fc4ed4bbc5f8301c5d6ab7"
---

# AWS 서버 구축 후 MAC 터미널로 접속

> **Summary**
> AWS 서버를 구축하고 MAC 터미널로 접속하는 방법을 설명합니다. pem 파일을 ssh 디렉토리에 복사하고 config 파일을 생성 및 수정하여 간편하게 AWS 서버에 접속할 수 있는 명령어를 제공합니다. SSH 연결 해제 방법도 포함되어 있습니다.

---

![Image](image_5d8da044decc.png)

🔗 [https://velog.io/@ryusuz/AWS-로-서버-구축하기-EC2-인스턴스-생성하기-AWS-EC2-그게-뭔데](https://velog.io/@ryusuz/AWS-로-서버-구축하기-EC2-인스턴스-생성하기-AWS-EC2-그게-뭔데)

🔗 [https://velog.io/@ryusuz/AWS-로-서버-구축하기-맥-터미널에서-EC2-인스턴스-접속하기-pem-파일](https://velog.io/@ryusuz/AWS-로-서버-구축하기-맥-터미널에서-EC2-인스턴스-접속하기-pem-파일)

> 💡 **자신에게 맞는 키파일 명령어는 다음 AWS 페이지에서 확인 가능**
> 🔗 [https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#ConnectToInstance:instanceId=i-0d66184a3b54b2d8b](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#ConnectToInstance:instanceId=i-0d66184a3b54b2d8b)
>
>

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



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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6bffb01b-b8a2-42b8-aa43-c4467bb4ccf8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECMRKV5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIE5gBC1SyUenK4Ge9sVu%2FkekkurcmaUTITiwu0WeXGuNAiEAoACUYEFMBdutohVa7kOutoOUDmLhJus3QZP59XibcCUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFz4G8%2F690R1OqCqNSrcAxf5eBPx7BOoshhmM6Ndnm%2B%2B3iJ%2BXTLLWDA%2F479BrDv8HvRW9Bd9%2B3ichcwD1MwFW8Fk2rxEH%2BLtMT3%2BkV80udO1dTZK54gxLJAQj4t6I5LYnCLtR2S49bZZRzgc59D6JvT0t3Q5m1WINE3VuLKhwHfQL5G%2BJ%2FIM2HTYsrYE0%2FP9WLxVDsC9r8l5MICDs9erJ3hWFz%2F9HVyHDQcjBOxt3vNH7rNTK18YUIb0fKlqF%2Fc7TTgb82yfklQS%2B2ERSOJFJ6TTngFpq%2F9Hwh4gcNaxstsY7L%2FmkF7zBTJjZe41zvYD3C03qWrYlT%2FZ%2BhEN2OgHLn5QXmfWF6DQqXj5kN2qzunwOkdrFrELclXf4ykyRsQCO7Mdu41V1Qew930NaS6UMzT94F6iBVyfP0mOCXtUZpBadhk91Kf7ZSaMpzCv0FnZVtrZl%2BaMSca%2FxTtevDjBK5DWygyjIwERzUIZk1qG3lu9MP7YvCsRnW9YZFnYfw8w46EbAtQViw8kCntdVnKX2RoVcaDRCwtjT5qwoL%2FxPesXibDbKhqZtgNlQB3JpC4mdnhgQuKrGXyGqxre5LWm8YbR8fLka6kyztUzs9IUPCyxUYrau1NSI%2BNlimi0hY926tTjSkpoNEeVWZuVMIH2h8QGOqUBBbXyRFa3OsQxzuOp7Wd7%2Fkhf4Wh%2FITggNrHL38ofq3oM1XjTOQ0FOsN959%2Bb6RdycE0xa6UkuD%2BDJVe2pT99aPZCPDWq%2FLPRYlRxtfIwQdn2fRXjFlhqOUOqoDmYyIjlrZ8fvRG4xWo7KhhbdXq6%2BJcVk3wLO41GILrnKyI%2BY2%2FH5nrRZUtWEFRIqlH8vdwHUZC2cl55fAc5ubCYi%2BpzMGaMEY5h&X-Amz-Signature=76b6d2a07b4aeb9fc08e882035e40293f1684eb7cf05af15a9ee93350fa765d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



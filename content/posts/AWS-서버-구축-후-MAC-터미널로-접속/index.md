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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6bffb01b-b8a2-42b8-aa43-c4467bb4ccf8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLLV6UD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDObv6qCRO8P8VXIeDO2wSY%2BU%2FgyIMnHOb2Q1Kqw8%2F5JAiAuhpmxPmCWEN9JpNloNG1Gh0G%2B0hhRbeRDow3sDHaYMyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMhmttotD3VIDz0XeqKtwDZiVv%2F4V4CvnpsjhxkaJA2TyJyp8sbeXITMRKpknM%2Bs%2Btl34o2fJPtBjp0Yi96ZbLOZX2np7BjK0lxXBU1dOLx%2FNHwmdybojRjId4HPfxdkghAetSH%2FYIhu8l5HcV3icBDT5YrUhBRddQ8fc6CDfYxEvSKag2cButtYrPUJfbTcZEZMCfvlAHjz5BmCW6ETwETf54kqeM6f5NyUtEq24WZlGKHSa96%2BBPuW0273wcUyijmWtvs6xhZ6UG1V%2B%2Fkt3r7JKcSi39NxkPcDJvFQn4hWAKqCjymaiXY9n7W56%2BMsW9d8shy0dLsjEH3cenxDyBd5cz0aUBPfbMMsvldIcX%2FEyotqW5pUiDkIDTqNtAIwmpVAphaoPnvwjNcfD5%2BDBwkgC2Qkdyl5aT6RJWDvQ3vonm5JxUBrR%2FLFXPt%2F5D8qQI5TW%2BV9jJgoiSUQlDQmOgSj7dP4wrzTJO1isl13lZlcKU6nHqDLqSH8a2NjWnnd2YxvME%2Bqq7zq356n%2F%2BTMd5zpZULryJmjXdwMZ1OIg1uoSogXjv7e456IfTcU%2BkDhdyvVloHIIQurpvei4i7KbT2yJ0M6p%2FboeYE1rHmsWoZCQa4s5Wi9ITVD1Mw2YAW%2B%2FpbQNDnw1A8BVZiAsw9c6HxAY6pgGHh%2FNi4s1Uv8%2BLHZ6FnPQy2oUsnIIBQ2vX2avLju5A3cM0lD6UgvgBDp72irabbled3UQvA0beXRpvmHLRZ1B8NfaoGIELaj2CPBDMxbQPpRPhFbHZMJeZUaTf%2BEq9p7BOWVhw%2BjW%2FBXgSj12GyRehd%2Bj6S9jTVqbA8aA0jsSSCUUYTPdIg%2B20zWBUccCf3dPwnNPiQlrJ3sEEdyGQgFHkSFzRtgug&X-Amz-Signature=a38f97864319a5bb09937f544b762ba8f0a57b189305acfece32d2262c09fd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



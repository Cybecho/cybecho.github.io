---
title: "Ubuntu에 도커 설치"
date: 2023-07-20T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["개발환경"]
description: "Ubuntu 22.04에 도커를 설치하는 방법에는 두 가지가 있다. 첫 번째는 인스톨러를 이용한 설치로, Mac에서는 공식 홈페이지에서 dmg 파일을 다운로드하여 설치해야 하며, "
notion_id: "18ecb698-f491-40b9-abb3-535689d1531f"
notion_url: "https://www.notion.so/Ubuntu-18ecb698f49140b9abb3535689d1531f"
---

# Ubuntu에 도커 설치

> **Summary**
> Ubuntu 22.04에 도커를 설치하는 방법에는 두 가지가 있다. 첫 번째는 인스톨러를 이용한 설치로, Mac에서는 공식 홈페이지에서 dmg 파일을 다운로드하여 설치해야 하며, 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UPRBTT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIA7IY4zlKa07wFyg9N8J9BHOXzCsigBIS3j5fLbnvLPlAiEAukWqP5aXl1vHI4WQsev9T3hfbG6YZ8qmC%2BL%2FpY6JzM0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPrUNCAQYv8FbQ1xlCrcA0jsC5CWAGf%2BOw4lEPdumQyoDXVinOlasPw5rZUuyJbKLfW%2BIh%2BhLw3TJZiQnihyHg4c6R9S2D%2BJx1YZbrAUXgdXF6YwrM5MskQGTm8VjkFZe13sd5qTpS%2FwB31F0rhFCh23yyrBLYBdHGAsF9VxLeMDdmHSe3eYo6mBHa0rKdxu4i5CMPXDCrND7HyLGZojCmPJlPF5tc1rsJfvfhpp9%2BHuLa4M47Wyeq6kw8zouszgQTBdQbNbckmU%2BN%2BeyQ3%2Bm6Ztj5zvzZC5mvOuJiSk27c%2BZcVlzpMYyLMVngKL1OmF9EmgP1SzWj4B%2FsS16bXu90F6PjWo7F7F9eKlR0oCIvRalZoIw7RVuMR861Q%2BRKL2WzwiRFi1c3LNnIQ7iao9pRoPnC5TgwDTZMDhsmOaJ8xPvVFhEAae24d05sZyxNkuMFJeDa2U62hdJ2UeCu9YIcX3lV6DlOUyp3nDTxFaFOtkf5f3mEeFkNXirQYzUqgeToWJa%2BPjdqIzu9eSZti%2FWZOrpHtKSxSek1yMA2isMPlAmwTeC5zNS2MLmurG0FRdyQ2bs7oO0F7EKTw4a1q2u6%2Fw2sT%2Ftx2eLLMRpP%2FYI4Xq8KaH3RELnPGmblMu4wuGDQ24xix75XyrdSPKMKTQh8QGOqUBiEexPXFSWtnkDn0OVue%2BHFbULA%2BXdidE%2FB6gRs4qX0I3%2BMzNNtVq2X7ht%2FoK885dVYtqBgq9q6RLQv6XYmjVt5imX%2BFpC2zwVf3rkU4Oo92eSfS1peX5aKnytlfQUca%2Bt5MZwL0Xd5fAo8CMxb8%2FyYH15pSQeTCPhc2cQlxsUZjb5TpHkDz51VwESDFoZw4beFrl%2BxVGTRCOuc0x9M0MM4Zbj8Ci&X-Amz-Signature=b7d1d5208ec0b67daaa7c3400dac1ad67a438b9df44d938171df5a3c67b08af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://yohanpro.com/posts/docker/tutorial](https://yohanpro.com/posts/docker/tutorial)

🔗 [https://velog.io/@osk3856/Docker-Ubuntu-22.04-Docker-Installation](https://velog.io/@osk3856/Docker-Ubuntu-22.04-Docker-Installation)

# 실행환경

- Ubuntu 22.04

# Docker 설치방법 1 - 인스톨러로 설치

🔗 [https://docs.docker.com/desktop/release-notes/](https://docs.docker.com/desktop/release-notes/)

# Docker 설치방법 2 - 터미널로 설치

### 1. 우분투 시스템 패키지 업데이트

```shell
sudo apt-get update
```

### 2. 필요한 패키지 설치

```shell
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

### 3. Docker의 공식 GPG키를 추가

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### 4. Docker의 공식 apt 저장소를 추가

```shell
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

### 5. 시스템 패키지 업데이트

```shell
sudo apt-get update
```

### 6. Docker 설치

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 7. Docker가 설치 확인

### 7-1 도커 실행상태 확인

```shell
sudo systemctl status docker
```

### 7-2 도커 실행

```shell
sudo docker run hello-world
```


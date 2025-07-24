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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZK2TDE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEvXzDctkAcjUE2Ma2zTw25u5S4MwF0bAM3VInP1VrISAiEAsEH5JD2FAF5zRaBSwbtEGdBuFS21eBzSBL6v%2FWeUE0Aq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBxS%2Fhq3SLD2rMZ2fyrcA2QKVePjOV1hzxh822cJhgPBGdvam%2F9OywyRIIi5tCmO9cZPkqkZE%2FA174iYx%2BokH3an6xs%2BIUYr6RUbF4oayT2MWVqp5ti78gAo8%2B95zS2dgYeYKMKSp8%2BdFC9FIabwr04cdM6JppXMgQEXZ0C5HtRtytGA%2FiwgxZgd6BAnI3g3PUnSIwfp%2FsHOxr4Tlbak7ynAROAhf3gdE8qbbtfNyuB%2BNytUOtBqLa%2Fr%2F2ZiaxNSSZhe1IkmRSkB83kwUzO7fF7wGlWyPtLPrpAYmVdKRl%2FVGkjLC5pi07bQUIS76ARL1jW5j00HJguSIh2kqchkcBG1F6dM%2FGVy40Uz1vpjdmWft%2BSKw9x5qdD6GIlFrRxLhDCyT2hyhW2Oj4I4fzb5Kj1SoXcyXircer71g5ULjl1oJfMQIZeFHwkiv6WxB0a7KplfgVsQogedqfdAOKwxlrtzfiBBtH2KQv%2Ft1ZG16cS5%2Bkk7bCcDycvLDrqGoxiHLMjqlhx4FVlCITyRngpOFCZD4beiDRWYkC3vMS40oH93iLrlE2FS4lO3xUZlvzVS9Wu1hDnAkSCF2dFCW6BnTiWDcVrAxSCfJxyx9IATvuOeEnfn7L%2BEcWVtUFQZSAVcPGxd9LULw2CqutdpMMfOh8QGOqUBC4ndG72gMkZ7CvmSlGzaQ6kwiACfw3T7%2BawDTjvPGmIXdA0R7eMapYEqDVeA9WYB%2FkM4cXOROkwvS67CgNEj4JTYLH7WrvTDl0ArmzpBLkS4Xbmvw2ImcOBHiM5BDYL3lgsNhvcTxT4WyAdmMDL4Z9JPkviilvaVGeulP63skSaAeZGC98bMIwS6VG5wfB6PnapPozLw7es8iRgecwmVpHN%2Fov5v&X-Amz-Signature=8726d587afdb18a7a1f6aa0dc6a196550caa36b85fc86979c5da24b44f1c30df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


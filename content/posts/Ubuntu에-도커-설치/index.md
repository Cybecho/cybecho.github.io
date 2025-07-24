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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFTE4QQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDEuiolbxWajleK1vWeQqdTrZpxTMDrJB3Z1oWGf4WwFQIhAI30v7pfhw2hf4DnfYjpDg76n9wzQ3i1%2BUfW4Hxg8wrmKv8DCCoQABoMNjM3NDIzMTgzODA1IgzbAK3G0X04va65mZkq3AMv9lFxz2DFduQAqluKWgsqE7NJyiI0MTaw%2F5wmfdzG%2B5eAYHmWkBQcuyO6laa8AUFL%2FLseJfS3yQAaiXPHu0vlV1fLcfNa%2Fk3YHQlJ3C8FtKVxNVXWmLFTaQCRrAx91limyaEtCKzXBNKvBodM%2Ftmja5SNED2Ewmd%2BNSzFZezAFwAtI%2BXWwlx3sv2uvyL%2BO7EzPAEtsed4q%2FSyA5vVDFZTjho5byvbrACqEBbq2v%2FOeCqM5WZ7DJywJzyVXdwQG2rCfqUqiRgOnVOmqy3Y8RYPSN%2BuuyuFH9Fiu8fScx3UVgnzr5qpz5LIMVvNOLpbL%2Bdd20UFRwopmCbr5xhQHu3xm5mDySXxZLmxU%2BPP0eivnNYufUlq3LfWbRivSKqEZZGMnhQ%2FLP66womzOuxktBho6sgSwDREht%2FIa860%2B4aU6Wxq33t7ih655N28d8DlnDav5Vx7Trlie4R7I81HxjTq6g8gBZaMX%2FzOtaspnvOzL3n37RnylJtgxBmq6Zq%2B6Yl6OYSqMe6SHb3ERV8Pz2tgpeoJ4yPOiq01TS2q2bWhr0nmlzQgFV6deJ3AfmQ2r1WNPcnh3sRcRlTs49PNGsJ3vgi%2FuN6HKIZMo4qOFAjAkENQ6Vgjqy%2FijFTP6jCT9YfEBjqkAbtd3tMBLPPnq3Hf4RVcrJ2QSuI3tvQXHqzXKUPqfPSsulc6%2BMxOaYyMu2uFuRRWkO2G3g5COWl8fF0laccqwh%2BK9Ew3qiwo4oloKH50Q4Gr6DxwOvbTj4v1ogD7iALnG9Xq7nrDMqg%2FjkTArw%2FluidhnaSEY7dUoiBcCDWBYqg%2FaC5EIP%2F9MGht3jDpuVTf9nVUELrcaZuwEczCbu0sIzLCZdX8&X-Amz-Signature=7d7b6ae797078d3ae9a0edff2d536f9c11aa1543680cd919d47618be7b156efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


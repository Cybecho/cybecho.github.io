---
title: "Ubuntu에 도커 설치"
date: 2023-07-20T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["개발환경"]
description: "우분투 22.04에 도커를 설치하는 방법은 두 가지가 있다. 첫 번째는 인스톨러를 사용하는 방법으로, Mac에서는 공식 홈페이지에서 dmg 파일을 다운로드하여 설치할 수 있으나, CPU 사용량 버그가 있어 Edge 버전을 사용하는 것이 좋다. 두 번째 방법은 터미널을 통해 설치하는 것으로, 시스템 패키지를 업데이트하고 필요한 패키지를 설치한 후, 공식 GPG 키와 apt 저장소를 추가하여 도커를 설치한다. 설치 후 도커의 실행 상태를 확인할 수 있다."
notion_id: "18ecb698-f491-40b9-abb3-535689d1531f"
notion_url: "https://www.notion.so/Ubuntu-18ecb698f49140b9abb3535689d1531f"
---

# Ubuntu에 도커 설치

> **Summary**
> 우분투 22.04에 도커를 설치하는 방법은 두 가지가 있다. 첫 번째는 인스톨러를 사용하는 방법으로, Mac에서는 공식 홈페이지에서 dmg 파일을 다운로드하여 설치할 수 있으나, CPU 사용량 버그가 있어 Edge 버전을 사용하는 것이 좋다. 두 번째 방법은 터미널을 통해 설치하는 것으로, 시스템 패키지를 업데이트하고 필요한 패키지를 설치한 후, 공식 GPG 키와 apt 저장소를 추가하여 도커를 설치한다. 설치 후 도커의 실행 상태를 확인할 수 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5HZ3LB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFsWxaehwHWlmxC94D24bNWLMRWe7ATXJlan3E2Ctg1rAiBkepwtmYch6HTtJjXugn2H6ZDxZCW%2FTBltFr0gbooyISr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90AIqHqLBUd6M03UKtwDcx8caIeM2ekmqR7wN4i1bh89VUVNT3%2Bp6ONGejLudnch1s2W2CUHUKc9Mh3CxZ4zSljxgQF5ZEZzLMdpMyX1b7w%2BK3EYXH6NrpdGBDQH3ZEWEUrh2HYNkTf9Tb7MfwsaiCyB8N9fc%2F3fd2GQw7pBwmXvUFFpM6KbRxuBc3Kh7x4ns7aixt5XZ43bz47BojvK0SeoFOe3LXNsAf9N5UHzpvC8lsf4FM%2Bk0FxWhhYJ8QpzUB%2FDl48XRI9vO5nlLN%2FxQvqlcACMvpXAlulCiN4nWNdcCHnd6FQUQNA9j5iitGE3JLp56yyfDY3caBKfF%2BVyRVO4hjOjn5EBvGbCguW6AU1S4rdjXUrOnk1P0RXQIt%2BmaYvCgynOELYkYN8jZETuPgOkq%2BRmHGVAYNGuPlG3S7H9o75%2BxhOrlRSXGy%2FN7BX9abw%2FJUyyHDVqVOL1aDgtDb5ehWWvh2yHJgkl9ZChItrrjao1k2LwJUc9j%2B%2Bh%2F5wRAz9VR2xIuzV21hUPDRQfLsxt0Wu8b8zr8djdDYpjBKvM%2BLvCaJKypZWLQR6D7rlAmuV0HHQYK9QrIYUVPU4D8UEbEqgtg0N%2BZP0fEMORZr8bHtgJJVCwFvgZsB5wP0cK9J0R3eBDr86ZCZcwrJuIxAY6pgFVPuFbZ6OXBR4CR%2BjESliCMzFHFbPJ%2FmWXUOwMUbUQKNh6oWuYuZy7rQhPXkhlV5V0dTJVBWBZws63PUMjn7ZE2w3vsqi78Wbv9jzwj2kwrONWOrOYIwXPgVb%2Byb0zi7GpSm1DCZhEvqKun0yuqkltFcntnfwfs04fmfvAUdvdWAnJHW6VGDln7B%2FKCsiD0WSt7GAhiKH0o9mt2KRoSetFDdNtwFIM&X-Amz-Signature=c31f7ced9bd2c9064fc1178916fb3a44e744e2ecf46bcd99c58ef8f318beb4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


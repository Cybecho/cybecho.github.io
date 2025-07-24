---
title: "MAC 에서 기본 브라우저가 Chrome이 갑자기 작동 안될때"
date: 2024-01-10T05:25:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "크롬이 작동하지 않을 때, 터미널을 열고 크롬 로컬 데이터 폴더를 삭제한 후, 새로운 폴더를 만들고 쓰기 권한을 부여한 다음 크롬을 다시 실행하면 문제를 해결할 수 있습니다."
notion_id: "1c9d581a-7acf-4c8c-83ca-2efd7907d13e"
notion_url: "https://www.notion.so/MAC-Chrome-1c9d581a7acf4c8c83ca2efd7907d13e"
---

# MAC 에서 기본 브라우저가 Chrome이 갑자기 작동 안될때

> **Summary**
> 크롬이 작동하지 않을 때, 터미널을 열고 크롬 로컬 데이터 폴더를 삭제한 후, 새로운 폴더를 만들고 쓰기 권한을 부여한 다음 크롬을 다시 실행하면 문제를 해결할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/685b86c7-5709-4865-b40b-543c00502464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGFQFJF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIC2sGom%2BfPQSURO8W5syfwDNaJkqZIrnbxtnL%2BVYozf0AiEAmcmK0UpmcyO5IXx3I4KiVDizINcHJ8MlP7TBzmD%2BrJAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGQYj9BOnwTNeCpyESrcA89GFqP0aRlMk0woLe8I0x2wxzgC%2F6vf%2FmiIElNNwrUjPPv905sgMjkr9gJ81dz59oZRvJRGLVLApB2IcGRbb8dTLEzHmemUEJ6iHagiEG89H1zy%2F%2FJJ323v%2BGSOm6R%2B0BwJZvaNWJcFKYyp%2Bz1n0anF1KKUzMBAEWp2vZRajOZXPXEOL6r4jUjU3SnPKE%2FssNdISoPrNrEmNLUMRmBcX7q5xu7wLa0O7HTczvBGwKRaSJDRpGhnk5bPULGKSrsIlMnNUnVsFUh40TEzbYHSDus2WAL8UR8BMxDXzFcVO%2Byv%2Fp%2BLmhr%2F95LrtsdFgBMAm4NxhvkbQsUWYhM3sJC04gapfoQEfckB8MA57ZuPguz6YuQjrXhe3LXTDMBvUhi7Q9uOQfbbZ4FFS2vm%2Far9NduLNYd7BteRaieCKJmEU3iA9M51789OdXqmTGJhvFoeMobWvH2s8tIs1ITmyA5AwoyCqtXl3jbmKEtb9gTi8zE3qVg28adA5ziQOblUdUBm19JOo61HV2AZL5pPfppEqz4wA14AV1UujVgkXcZL5ULcv4MQovAues0Bd%2FG5QepJZ1hoahiFiWdBzjHIDIjDJxEBb03omRXx08E8MfdvZCYheGWrvX0dO8lgFrY0MI6biMQGOqUB6Upao1fa4cSTGUuSALOJfji0nPsfgskyIpCLn03DZ4F7N8bhjTqsQ%2F625pRgkiSf9lC6ucvMDQQCcr8Pxs1%2FSOxWdbFmMw2f06iWZ2TvSMe5oVxkTQs92fJcmcTyOYbKZTf%2B65NBnogZZx1CaBdxFLKc3CEnKuWBzK9XhDnDDx%2Fnd7nl3zrngcVGjLlbuFwj4BWUEZtn%2BanpZdeAA2K%2FqETHd3g4&X-Amz-Signature=bd034be8eb5dca28061dd7bd79cf41f6aead341aaf3984937f144c418631edee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://support.google.com/chrome/thread/64580550/맥에서-크롬이-켜지지-않습니다?hl=ko](https://support.google.com/chrome/thread/64580550/맥에서-크롬이-켜지지-않습니다?hl=ko)

저도 같은 문제가 있었는데 해결하고 블로그에 글로 남겼습니다.

해결 방법

크롬을 설치한 상태에서 진행합니다.

1. 터미널 창을 엽니다.런치패드 > 기타 > 터미널

2. 크롬 로컬 데이터 폴더를 삭제합니다.

터미널에 다음 명령어를 입력하고 실행합니다. (복사, 붙여넣기 가능)

```plain text
sudo rm -rf ~/Library/Application\ Support/Google/Chrome

```

3. 크롬 로컬 데이터 폴더를 수동으로 만듭니다.

터미널에 다음 명령어를 순서대로 입력하고 실행합니다.

```plain text
cd ~/Library/Application\ Support/Google


```

```plain text
sudo mkdir Chrome

```

4. 폴더에 쓰기 권한을 줍니다.

```plain text
sudo chmod a+w Chrome

```

5. 크롬을 다시 실행합니다.


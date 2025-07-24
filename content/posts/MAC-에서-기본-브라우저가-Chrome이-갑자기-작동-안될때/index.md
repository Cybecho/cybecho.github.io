---
title: "MAC 에서 기본 브라우저가 Chrome이 갑자기 작동 안될때"
date: 2024-01-10T05:25:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "크롬이 MAC에서 작동하지 않을 때, 터미널을 열고 크롬 로컬 데이터 폴더를 삭제한 후, 새 폴더를 만들고 쓰기 권한을 부여한 후 크롬을 다시 실행하면 문제가 해결됩니다."
notion_id: "1c9d581a-7acf-4c8c-83ca-2efd7907d13e"
notion_url: "https://www.notion.so/MAC-Chrome-1c9d581a7acf4c8c83ca2efd7907d13e"
---

# MAC 에서 기본 브라우저가 Chrome이 갑자기 작동 안될때

> **Summary**
> 크롬이 MAC에서 작동하지 않을 때, 터미널을 열고 크롬 로컬 데이터 폴더를 삭제한 후, 새 폴더를 만들고 쓰기 권한을 부여한 후 크롬을 다시 실행하면 문제가 해결됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/685b86c7-5709-4865-b40b-543c00502464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAVIEKG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCG5r4yuMyWltGxrsNRsPCjlAdU9TVswU%2BpXlGKzUa80AIhAKXQNd9PnkVT7Mro%2Fq%2BxT%2FjCuShlwDV0p6CWduszkfthKv8DCCoQABoMNjM3NDIzMTgzODA1Igzs0LcQ8YF0i7JVDjQq3AOrHlp6MBXrGlH1sDXHv1wfq5cpW0uK0EnanWhNN1w8suYvK2fGayjybeI6wslSN7imYHcgQyoPdS7UDy7xwx8u0lalNpEnICDXzC34%2BZ2JmcqpfFqk2n%2BXNKcymKcT73NHB5cc5Pu8rkxGPO1LQ0N2Oxhi%2FejqAkw8mXGHoO7OaJNk9yMTelDDz5Y%2FcEJrXQOCAfGycVnuJs3xTrlhILCo%2BLgEXMlpQ1rE78vcg2zU8Ut05FrfhXkZMjnWbu%2FCp238xIW%2BMX%2BKLBSjwKgIkbXUhm%2B20ySqo26Vbvl0q9%2BYPdF%2B6Nzq%2BFKn9iGV2Rr5XtNmsy1TSK1%2FeJ%2FT0RWVJsHGLQf99yHZnFFNC8o7vLqrNTui8xxVX93tuAhbjFxdgLYhs6lzAfzzkNNu0cl%2BVqeaafBwhkxo5icaiZU84ZKXCCHtAJ8nhpRaytcO%2BRkeIPYMyU8gsXAXWKOYzTO%2B5wKXf4i%2BqjZbnosiY1op1KRwkFiXHFku3nkioQBxEPX6i9zpWV4LSxbLz7nAo%2BH1g48b8BHR8DMlyyvxuPBnQiBqehY%2B07f6cFB%2B7J%2FZo75jpLrPjRRKVgMrHGc5unUMI3SMEk7fJXiwWxuZWpm4ojLltaCI6Dus81XVcQjPozC19ofEBjqkATsA6MhxmNLNnccesQ5QBEh4mNr4%2B32EyRuTxpfL88JwsC4oJWaJo%2FF%2FOs6ZDfgcIvQafua2vdNc12wILToY8sAOytWxnMoaCMClClcXkJhae%2F7nZ5cNNIGmbP%2BtvBdSJoyzlaSbY4w3j9J0mAt79GCXKGxBtt5iP0BKs0TIfpWptbGGaADxJmuyYE24cXfbGdhkj7%2BNHoY4YXXaYmDKxPZTHgpR&X-Amz-Signature=a7f43c18910fd2cd1a95d60ea0be393b3ac6fdd9fbb985e1750395114b8c76a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


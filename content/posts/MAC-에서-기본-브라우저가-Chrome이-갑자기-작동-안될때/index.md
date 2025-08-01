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

![Image](image_0553e01e1f42.png)

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


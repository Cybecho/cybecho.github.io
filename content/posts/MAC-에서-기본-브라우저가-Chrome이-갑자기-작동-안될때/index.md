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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/685b86c7-5709-4865-b40b-543c00502464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LU4ELT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCjgM5Sq749zxzt9BVinzCTPkoL%2B3VgSKlRRxz49w1ehAIhAKsYoTv8guRDYnahnEJ8r%2FngPMEyiCIHZAo9pIn4dURgKv8DCCkQABoMNjM3NDIzMTgzODA1IgyhxWeNQoqRGB4NQSYq3AP49wgqI5zqmYrJdCpXdxullfLKehcLCVIYi0RnkeVF%2B9w04N2EXwKm%2BlBoLN4dzYneGJNy6f5e86hgvWoz4XCunotD2k3J3%2BH1k9HIlPx8KOYFyrZhA3hac%2FwgohQOrxJzaXaBUF5N6EX3N0xmZOzXRU5dVRN%2FbqyZzZo%2BT93l5WBuk5M6qlXy624VMtfD62CVRLU8UykEb%2FsY0Mna%2F1PySkphxwiI5bJB8XQsssMbboLQcl7xaTiwMAcbu4OqEVJBIHI5gr6VPXadg8oRv9QXp8gp44fNv2WAAjyJ4dm4LxoNkrFRajO6GrJ5WgCjo0sXAB01HsAYE3I%2B8Fvp2ZcQHg62wdTNGBQCt%2BTdxpbH4n6TT6FncTdTjuTQqpn8Z4WeGDa1Mx1ufMTviHIf82AjJx2n4cLc96kF%2B%2BTZCA0nAjxSAKqc5FwT9wNSgWQggEqz7FNF5DWccuYYnC1MCu5GJfoN96XDn37VVDqrKd7BNm1pNS7unS5oLHDl0UMIeL2khVMpJGTw46CDYpX3VXNsuRMlECB0%2Bn%2BqxCDdTjNwsz6rGLwuY1M4lFr2Rgh6YIIm18fENexlePLJsflCU4ING9aZznb7j3m%2F7MIeIKMLeCwVPiKrpcJU5h8TcTDczofEBjqkAYa6l9%2F9xlok9bqHDcwLm90BJkFXEdh5ARviiqe5du7gzUCIWXQybXtGIOVIZZL%2FsPkzY7gsoB5r9otNHvJq%2BO%2FCX2GMrA2wxatHwSOAUJ%2Bq2Q0SmoBFnlSrMUZZv%2BboiKTTQ0CMyrkeDKjY7TGqIkXuCpbtsof8y%2FV9M2tTZx4XxlxIWsMNszuOOGNJ9HMbZ9eBqYV5obsuEO0ThALO6cqG%2FRoW&X-Amz-Signature=ba1eb41e3e14517a9448bf8adef370c0439b387f702074d8f2c3f547c89b77c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


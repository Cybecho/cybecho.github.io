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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/685b86c7-5709-4865-b40b-543c00502464/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3EP4JQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICfNm5xobdkYOhDRUzfGXLGUfkb3DGyelNO4Vh5o9CI2AiBnADakbel1zL%2F9vVtsHgSIheBFUsOdzuwl9OGRYbJAUir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIqGTFTGP8ox1Nz30KtwDvOUn3vuaV5bIsyM3QPoVKGW3o1P7Pxa83S2384REkMLMQS5rumeZhkwpFTBK9CqiqhXp2kTsKMTLBI1q2VTgFeSLa2HNRO1WJwtA4R%2F2OV%2FvbZ%2FI1uP5TwNk9UOS7Nc9s3bBLOtjwADluZHwY7AYT13keBEHseJt0aQLHkUfKHmFfQ9JTZHsIMTZgTBAYDpA6cMy9boYPYA1%2FcW8bxRfiSuZYtI7pGXfCP0tZPeNB7kkke7fG8jMdNaDnvR7044auMpdLIAlABR77YY5R3UmEHlqq9%2FBEVkSX%2Ffb%2Bw1mIm8zLjrlWcYksNY4rmEl2z81nb2exnzvQD8TzezQQfXZOJFaI3lW62RvqJXJ4pZIf7l2hkSKUFgeCbUvknQhXy%2BHJqGF8KdGsjmZr5225nczoIWn9ULsMsLALOs%2FQi9ZEqzIJ6qZJGN2zbCnC2rEtwlGJzRL7bYiOvEIDzHdtiPCUKvxWn0%2FVJsPUVDEm4eXtNPb2UVrcYoVZgjSkW3wWd5Y46ETSUVsPdC0iVdfHFHN3D9ULXrxVvVwq9g1W4zXZT1rdhiTWs%2FHGDeOF0SfPwVRipj0OeW%2FDwd5%2F522atLBZdEGPzQuFfWqSLBZ%2BY2PZBr088ZVGBuyoupOvokwmdCHxAY6pgHdWbbqOUC4%2BK2jfUgcJEddC2tTCZQ8uhObzHYPLxvIuB5TuzMhB6dayPrVedYluqGkzjHxJbRbImtxTFxLmy3xUunxUc%2F%2BOUhyo6we5fu9f9VxN9UWhnF2xQoKyGx%2FB8CQYZ0E%2BIhoe0tGuzZ4Q%2BDUkJXltkcF%2BSPuH%2BFE9j8ofhlXuycEzY2S3leDDcDa59mI8zG9DLytSdDamPg%2BSnvUkSVgbS2F&X-Amz-Signature=ae829b3970902e64e7febd2299093251f37905fae68eda749c4a3160156ac2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


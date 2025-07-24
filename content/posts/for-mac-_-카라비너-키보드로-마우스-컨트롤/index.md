---
title: "for mac : 카라비너 키보드로 마우스 컨트롤 "
date: 2023-11-25T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["개발환경"]
description: "맥에서 마우스 없이 키보드로 조작하는 방법을 설명하며, Karabiner를 사용하여 특정 키 조합으로 마우스 기능을 구현하는 JSON 파일 설정 방법을 안내합니다."
notion_id: "264702d1-bd8d-4677-b511-7e3e7d0a44b2"
notion_url: "https://www.notion.so/for-mac-264702d1bd8d4677b5117e3e7d0a44b2"
---

# for mac : 카라비너 키보드로 마우스 컨트롤 

> **Summary**
> 맥에서 마우스 없이 키보드로 조작하는 방법을 설명하며, Karabiner를 사용하여 특정 키 조합으로 마우스 기능을 구현하는 JSON 파일 설정 방법을 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOEYQSF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCID7tSU%2BgNpzB1eL3ZDACfBYgcq3KB0vwyoAhgGKMjsFhAiEA2lZUXgtCn95hD7cZS56jgCLlUnxeiOGevOYMsq3mzlgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCU1aknztq8kYAPVSSrcA%2F7VQcX%2BbpSVcLeN4FlFKGw8MbYDT5cT5o3a117hwfnzn9Nnm6og%2FaPOrsCILcBAMwGFNZzq4VIp59WGVItq0amyl3tPUMYrtqB76KBJqYElBmQrLF7rDx851%2F%2B38JFPRtRJpD%2BTM3N94aRCBjw0aGmHS2ZudmC7qsTWSBEESItvSeSAeNUHTn2C6d5%2FONLD2MCFMpHcup8h2KSvnniQUkNke0x%2FZFapDdOAnYeNNNyGOTsFr5zDM%2BpgsutrBbsIfvipYFVPp4aqLyYXa3HuqpvYgKVEpcdku%2FCu9Thd3JudC33Z9Iqtj5%2B3Llw7aQNKvg5M3wGotaSpRsLMY4XMZzpX5SF9AoqC2tngP8t6Nfw9j58bKBREr5s3F9VI7ob3b0GsmJlexUUQCpHW%2FNuIH5mFaKCchTO1g%2B9FSj5JaueXRo0y8TOXfAPJtjsBMqkxnaZ5oBg%2BMwohFON%2F4uNVtDHXYmFpDdgsaa4CNWaELJDhg2l0QkPe6%2Bi7yGWR7VBRwsYeUOKrXIgbmHzGOgvWGIoWKHOOTKG6Ox6xFoZxVE3Gzvxfyq4saQ1dUl3LyeyTgB9%2BsYNLUTrg9njXtdPLY0hz2%2F2%2FkIt6K%2B%2BvL%2FRtDFl9zaT%2FpuvCTkO2h5X3MMvPh8QGOqUBldgDhsshrGj1FH2o60C4HE%2Fyxkme6JWOSoBGkOSarj%2FRgnkPbWNqVTU%2BIn96FIUHm4Pmstk8fkDjtfO9z9%2BdqgKDIqYd3RWh9L5K%2BZ5kMadNKmdwRXiaI5sE1k58SpRFNtv3ZoT0V5eNsTPPssfaeDuPZKRVxve1%2BrNiVsmGpT%2FVlm63%2Fmq7C4rhoYOZaAPJ0MWHI0%2BwYavWr%2FvPkwC6oa0Uv%2Fe9&X-Amz-Signature=ef3c18a5483b65c7f05d8507ed35c0946f4355cdab35e37b8ee0e1e6258fd7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s](https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s)

🔗 [https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json](https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json)

```plain text
~/.config/karabiner/assets/complex_modifications
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e8cc303a-2992-479b-87f8-e8cb637a37ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOEYQSF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCID7tSU%2BgNpzB1eL3ZDACfBYgcq3KB0vwyoAhgGKMjsFhAiEA2lZUXgtCn95hD7cZS56jgCLlUnxeiOGevOYMsq3mzlgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCU1aknztq8kYAPVSSrcA%2F7VQcX%2BbpSVcLeN4FlFKGw8MbYDT5cT5o3a117hwfnzn9Nnm6og%2FaPOrsCILcBAMwGFNZzq4VIp59WGVItq0amyl3tPUMYrtqB76KBJqYElBmQrLF7rDx851%2F%2B38JFPRtRJpD%2BTM3N94aRCBjw0aGmHS2ZudmC7qsTWSBEESItvSeSAeNUHTn2C6d5%2FONLD2MCFMpHcup8h2KSvnniQUkNke0x%2FZFapDdOAnYeNNNyGOTsFr5zDM%2BpgsutrBbsIfvipYFVPp4aqLyYXa3HuqpvYgKVEpcdku%2FCu9Thd3JudC33Z9Iqtj5%2B3Llw7aQNKvg5M3wGotaSpRsLMY4XMZzpX5SF9AoqC2tngP8t6Nfw9j58bKBREr5s3F9VI7ob3b0GsmJlexUUQCpHW%2FNuIH5mFaKCchTO1g%2B9FSj5JaueXRo0y8TOXfAPJtjsBMqkxnaZ5oBg%2BMwohFON%2F4uNVtDHXYmFpDdgsaa4CNWaELJDhg2l0QkPe6%2Bi7yGWR7VBRwsYeUOKrXIgbmHzGOgvWGIoWKHOOTKG6Ox6xFoZxVE3Gzvxfyq4saQ1dUl3LyeyTgB9%2BsYNLUTrg9njXtdPLY0hz2%2F2%2FkIt6K%2B%2BvL%2FRtDFl9zaT%2FpuvCTkO2h5X3MMvPh8QGOqUBldgDhsshrGj1FH2o60C4HE%2Fyxkme6JWOSoBGkOSarj%2FRgnkPbWNqVTU%2BIn96FIUHm4Pmstk8fkDjtfO9z9%2BdqgKDIqYd3RWh9L5K%2BZ5kMadNKmdwRXiaI5sE1k58SpRFNtv3ZoT0V5eNsTPPssfaeDuPZKRVxve1%2BrNiVsmGpT%2FVlm63%2Fmq7C4rhoYOZaAPJ0MWHI0%2BwYavWr%2FvPkwC6oa0Uv%2Fe9&X-Amz-Signature=5a3c9f152034070d33e6c34f18d22ba2c7a949a4a0ad668581db7aaa82c9d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fa10a1bb-97b5-4358-abcd-968b338683e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOEYQSF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCID7tSU%2BgNpzB1eL3ZDACfBYgcq3KB0vwyoAhgGKMjsFhAiEA2lZUXgtCn95hD7cZS56jgCLlUnxeiOGevOYMsq3mzlgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCU1aknztq8kYAPVSSrcA%2F7VQcX%2BbpSVcLeN4FlFKGw8MbYDT5cT5o3a117hwfnzn9Nnm6og%2FaPOrsCILcBAMwGFNZzq4VIp59WGVItq0amyl3tPUMYrtqB76KBJqYElBmQrLF7rDx851%2F%2B38JFPRtRJpD%2BTM3N94aRCBjw0aGmHS2ZudmC7qsTWSBEESItvSeSAeNUHTn2C6d5%2FONLD2MCFMpHcup8h2KSvnniQUkNke0x%2FZFapDdOAnYeNNNyGOTsFr5zDM%2BpgsutrBbsIfvipYFVPp4aqLyYXa3HuqpvYgKVEpcdku%2FCu9Thd3JudC33Z9Iqtj5%2B3Llw7aQNKvg5M3wGotaSpRsLMY4XMZzpX5SF9AoqC2tngP8t6Nfw9j58bKBREr5s3F9VI7ob3b0GsmJlexUUQCpHW%2FNuIH5mFaKCchTO1g%2B9FSj5JaueXRo0y8TOXfAPJtjsBMqkxnaZ5oBg%2BMwohFON%2F4uNVtDHXYmFpDdgsaa4CNWaELJDhg2l0QkPe6%2Bi7yGWR7VBRwsYeUOKrXIgbmHzGOgvWGIoWKHOOTKG6Ox6xFoZxVE3Gzvxfyq4saQ1dUl3LyeyTgB9%2BsYNLUTrg9njXtdPLY0hz2%2F2%2FkIt6K%2B%2BvL%2FRtDFl9zaT%2FpuvCTkO2h5X3MMvPh8QGOqUBldgDhsshrGj1FH2o60C4HE%2Fyxkme6JWOSoBGkOSarj%2FRgnkPbWNqVTU%2BIn96FIUHm4Pmstk8fkDjtfO9z9%2BdqgKDIqYd3RWh9L5K%2BZ5kMadNKmdwRXiaI5sE1k58SpRFNtv3ZoT0V5eNsTPPssfaeDuPZKRVxve1%2BrNiVsmGpT%2FVlm63%2Fmq7C4rhoYOZaAPJ0MWHI0%2BwYavWr%2FvPkwC6oa0Uv%2Fe9&X-Amz-Signature=18dc01022edb8b54c0866afa408a523dd7f545f14fa16390aa242f266884512c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# T480 용 (opt → cmd input) 수정한 버전

# Rainy75 용

→ 항상 ctrl 키는 hold하고 있다고 생각


---
title: "아이패드를 위한 윈도우 해상도 고정"
date: 2023-02-14T00:00:00.000Z
draft: false
tags: ["Util"]
series: ["Don't Hate Windows!", "원격 라이프!"]
description: "레지스트리를 수정하여 아이패드의 해상도를 고정하는 방법에 대한 안내로, M1 아이패드의 해상도는 2388 x 1668이며, 특정 레지스트리 경로에서 설정을 변경해야 합니다."
notion_id: "739bb756-c8a3-4876-8b5e-8be55cc2f1c9"
notion_url: "https://www.notion.so/739bb756c8a348768b5e8be55cc2f1c9"
---

# 아이패드를 위한 윈도우 해상도 고정

> **Summary**
> 레지스트리를 수정하여 아이패드의 해상도를 고정하는 방법에 대한 안내로, M1 아이패드의 해상도는 2388 x 1668이며, 특정 레지스트리 경로에서 설정을 변경해야 합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b7623eea-09e2-4614-b139-d8ffeaa13cf0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRL2LE6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDScazJGWoME%2BqoJx%2BMPwfQTqi4kMmTgZLoFlxl3i9D8QIgHPkvOFd1%2Fk1k7LIbRPLcT%2FWOLXpZzTJONQO8caTGeWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJ5enuUayuU3V%2B9QiCrcA%2F3JY4xQkMp1mb30pgHmvbhFsiDf6JV%2BT9%2Bl%2FfyfH4WeGQwXyjD9XlP3GBuqSprDaQpnTYE9Zg04yraSw2cLuKqS5XAIsdQilY%2BFIyvJOP79N8kc%2FGt%2BYQ7jBHB%2BJd15z9%2BVXti8hWpjGWzcO0j0hPq%2FXkhLtVAb%2FN4Tg3OUSaW6tnDwL4YuDVqRlCX%2FsYtchrCDfmM1OzXh83nkSOuxvcALUxVLSEGcwBrdEuVcCFbgeWeEeWgRHWvZGvzKJncfXRn%2FWcxCQbCVgt82nA9mRSGne17Xc2P3mq5Mdy2Z3wWUTMcVPcxd0F3xh6J17ZGi6YtbBjPhrohGWuHbtFCOl6nYICN9WOS53SNKR1Cj9IK0KVFEZ2HbaJgKdiR7pjOHfwRi3qbDlxauJx3yLN0abOr2%2FkpFVowuNuSLb9%2FcLRKqkTC8CY%2BWswzMTPAlXYCO7SnLfao0yvCHa5%2B8vPAZ%2FeAdyqtIvACgd9EmjDHHkrRaP8fYDN3U8inHEkVuo6rBg4VoKEL%2B0OEGSY9ep0dr6lc76aL%2Bgq41yzzJqLAQKaLE5If48NWDNNl5rOlPGciir7n2Fz6Mh3g0M3%2BfgwBEKincukXazApEicp4nEV6Dwkrb9ebgsJdDxrqm%2FWHMLi%2FiMQGOqUBLSyOsfWO4db%2FtuhW%2F44RpVJOZgiJzkLCNq4u71Hw1488ONjzQlvCJvfTKDAbKSJx56JhOV6CIEWAIXkhS5U2FloTmsefMIJKzKjrgsb6PYEwLLVk%2FdTVAuSP9i7gOpchpy9kxbj%2BtBWeXxEzxUmLc%2BOXnTQhFLg6DisW4g9ss6RF1kT8U8Ja77Ix%2B1ObUqgpwPycQRNyjG1aAmZJvtwLTeZb7HWq&X-Amz-Signature=2385b61eb9b4b3a0b2c0012dd43bc1cb71f37087eb1e4e4a9498e2d928c23ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://zkim0115.tistory.com/2570](https://zkim0115.tistory.com/2570)

> 💻 **레지스트리로 이동 후**
> ```basic
> HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Configuration
> ```
>
>

> 💻 **해당 디렉토리 최하단에존재하는 폴더안에 ‘00’ 폴더에 해상도관련 레지스트리 전부 변경**

M1 아이패드의 해상도는 2388 x 1668


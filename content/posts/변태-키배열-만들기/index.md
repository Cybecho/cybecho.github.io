---
title: "변태 키배열 만들기"
date: 2023-11-04T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 + L 키 조합을 비활성화하기 위해 AutoHotkey를 설치하고, 특정 스크립트를 사용하여 키 배열을 설정하는 방법을 설명합니다. PowerToys의 키배열 설정도 포함되어 있습니다."
notion_id: "e9027896-b8df-4716-8e02-d21c39fa635c"
notion_url: "https://www.notion.so/e9027896b8df47168e02d21c39fa635c"
---

# 변태 키배열 만들기

> **Summary**
> 윈도우 + L 키 조합을 비활성화하기 위해 AutoHotkey를 설치하고, 특정 스크립트를 사용하여 키 배열을 설정하는 방법을 설명합니다. PowerToys의 키배열 설정도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c7fb2a9-9621-4888-9c83-29136f82f1a7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IFKE3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHBuPqTFcaF%2FPXSpWYFZi%2BGvmMchNJy3TytcPZcVNMALAiEAg4F4y9Hxk6t%2BwsgO5RGo0iFZMHkh4HceJQkQkYqfbXYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPjFUSsbvyWm0WxUEyrcA7VP%2FiVqeeZLozNFCfSGigyxqnwB7WUngYuvxgn025jsb3UZPuYV3%2FdXEl3Bk3NN3TCIRaVTxoulAaSzKtKdhtRZHVDaOlScCw%2BBGi5%2Fnxw2GSitGmjBuXfAaYilNpy%2BJfBw4q7zcrrL5Ezoaxo0C%2Bnadc9o%2F66DLCXLPPFEjEU6Jn5UFCQIsBomAfUNIPcZHSIkkhmV6Hx338lKMwWPqOZPxsDKsyEojgN6po3t9VL5efoMSlvg%2BAQV4R%2BvgNC8Ew96vkUMU2OS43P%2BmWlvNKAuYA7kX0kLUPzkRjDjlzRmWRb4fpeM9ZERJ0DwKVuVA7DUE8TLK1GYvIK4fwAoDvHjxFqLT2A7OQJs4IdA5D6uBArCuBHh3vH7ZimT%2F5pnfmzLkt7aznp5RtP55%2FNnIiHO8f8O24gMdMDJZ1mIGIstOpwe1LPmpR%2BBPmv3XZPnQb1IRMznVoxuz5%2BSwPIedo2UQrJRHoeMQl4eqlTu8%2FdG5oCcf2f%2BaXdSJc8Pt3cnYzs32u3ECXCWk%2F%2BnoLTzmbKkx1CxJlUW%2FrWWotQ1y0Rg6svgBY4wgUR0BNwmJEJ46PEeuJpSfpGzuRFy2XV4jE8FUI9PqDfiAOQph7qg8RPRH3saUVyg2bSzQpBdMLT2h8QGOqUBtAxwMYvSwuCDhKPKWqTNREZQq7oRcJOvklllnI41XfAsu6fXPXjdcbmQS0ZODJAM5DV9weFDD2YXhHDKYXKeIaGRorM7EM9JOHLZi%2Fa%2B29W6GtlLpw5L27eufO%2FHaVkFapVdilHL5IZHiFZcrlX6hU5WquYvqHygzTgd8LROkGezlG43XE7Ymtc3EB00bzVUwC3ZdxTEB1o%2B8Y5xHX7oq23boANB&X-Amz-Signature=2249841a38aedee05d1e6a41a178d28820a68530812bc1bf704dbc608f1cf877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


WIN + {J I K L} 조합으로 만들려면 몇가지 작업이 필요하다… 이유는 바로


```c#
win + L 
```


때문…


# 윈도우 + L 비활성화

### [`윈도우 win + L 비활성화 하기`](https://www.notion.so/e2e4269d107f413eac708099bd840641)

일단 다음을 따라서 win l 을 비활성화 해준다


# AutoHotKey 설치

🔗 [https://www.autohotkey.com/](https://www.autohotkey.com/)

 

### winL2R.ahk

```c#
#l::
Send, {Right}
```

```c#
/*
#+l::
Send, +{Right}
*/
```

# PowerToys 키배열 설정


다음경로에 폴더째로 붙여넣기

```c#
C:\Users\thqud\AppData\Local\Microsoft\PowerToys
```



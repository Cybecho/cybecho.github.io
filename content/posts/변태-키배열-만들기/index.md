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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c7fb2a9-9621-4888-9c83-29136f82f1a7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEAXTCO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHuMqZHzP4mU2orBFpJSj%2Fmao3HGajEwpQbImsPfSR54AiEA3T7gyoWuthkSJ4mKqi9Vv4faP6Uezz2aUErUAD9T6Dwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHf1fNi54Ix1wqsGyCrcA7LJ4PSI9PSkikMgNm%2Fep8DHVw0ZzEanhwgDalnBBY9j8eyvQ%2BhjAl8Bc8%2Bq9iEPpyrMtEIy9oHuetEq20OZz%2BxbhPSJ7AkS5czJz4XGVL%2FidpQNHrxt8yqFU%2BiBiOxxLVPIPH7Kc6Z0hc54ZzsicbV5M2O8x2anTfbZ6Mu7wMPTVBTE%2BOe9Xlt3%2FjDwkSGBPCOUz1JWlP05hlzguZKSL4qC%2FI9FgBCff4R6KU9vN%2F9zPsldwlXQnJEMHLTCLYRRDwldqgwZU4CLwQCJl9zNbZjO3xrSI6tEnpJb%2FJ6EZrkLGWG2OYA5lpaCfH%2BTKZUFeska1%2BBEGYEx%2BbOGx1jcddBdxhh%2FS9G9818P3fTqtcwSi9Pl70gCeJRMGcuNCZAV1nMARr2Ww1g8DX6gF4saX9Pd%2BnXsQ3EOGVXnN13Hf0bDRx5Nrd6vbry8uY99P2QzW6jC9tQ%2BIIyCG3V%2F3yCQ%2Fnwyk3ixoDYvq3EyJVgZmjUfMUl1QCFwWbJSErq9VJKTk4BZBoGQqY%2B8ny87H%2FplzU5Ef76znj7OybuKCPQRzTKiE6poS%2BnG8B57CZ9IOiL6gQtTH3bjw76zp%2BDiJaGzAJXuH2pzJQx1HyiSekMoiN3iYi0bEimUB7ka3TR1MIjPh8QGOqUBc8bCSNffhV612h%2FcxkmB2Op0VVuqvzrmIe1W%2B2KkQXUvZ7RuQnv92r3KHlODD%2FnoO%2FL7DUiIdqLxKB9b8alJF25ufX7Qw%2B3zTu3YfGE5k5%2BuJgvP%2FFXM2e0clS7lwPO7X7pt9naJBkzHKzoXHeQx6%2BD1cRwvHf2PtGUls5gczwJXy9Z%2F8Y3A3RmPg%2BALDGsMWJqloCckorDsuh7EvdwwaoLvdriw&X-Amz-Signature=5d18c720f6bccf5e83ebe831e612eb71a83e5e703b93eaf835317f2f4f435643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



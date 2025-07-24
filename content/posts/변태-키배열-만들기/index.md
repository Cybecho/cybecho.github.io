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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c7fb2a9-9621-4888-9c83-29136f82f1a7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILD5KBF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCPz5mHPKixdrjh%2FAyGuGA%2F87ke76BBIPAT7zhDCFkdfgIge4eSMNsp8X9EYqYTqyKM0RLr%2BM1xEad06YQ%2FvTKsa%2BYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOobeZQHHBe8a0%2BPoCrcAwfi4SYZtknaUSf%2FCgcslyeNw44yLFWYrr1WVlEDtPUkmVbYcmyXiQxh3k3xgEZbZUAy6j%2FE7k2hS1F6BQw80N61TUWMgWC3rLKzhlN5ly3t8aWGj7CoYxbPmJcCWDwahXNFSLpIRG0vI0RLvAJMN8SDZO5qEurVZqjVnDoEb5BYyGZ3zaAx4yjWHLdxfGwA%2FQy8Wryv560KbGr9P39pYnwYSV%2Burg7wuCjHXmARE%2FLyK7cgUIZEveABryf%2F948E%2Bu6svRFwd7LiRi9DTOjvzAInRCRVIvdw8LayEIY2xdk4IKdB6fcza9ghqT7oc4XY%2FB%2BItok9c%2F9Toj%2FGv22VauXxZD1uqRVdU9ODe6Yk9Pnvg9Z2jxB%2F3Q%2FhdA6IGYQYN5qMolzE20y8ePvl68BvINBgvT%2FMHdUalwJMGeGHmcaZUv1wLRLk5qDi8Zw1X0gMHUE28YhCMEfOWSoPbx3dlhi01jtTTKJOMOok7oM662jCWBLw9mQ4VYGRFzThHxOowC7GhL9UZUKEG0ZOWiVzlHSIOL2bO8p0Sy5emSq3QI37D7QgFF6rddnGydT0%2Bssv%2B7lPlBlJHKPhNJJxxK%2F1kUfGt98N69TKFAv0AWST5vhUEKDbA4SWoSKKRN0UMOTOh8QGOqUBY2FMaWUvH3MxHcSmPhtgHL%2FjgXfb93%2FiOVPVF%2BdtTNu2dWxXFWtPnJswHFPeeRp%2FFsL%2Bvii1DMJOPRW%2FBj2u9GqZoIu0%2FI686ir9ngvpxHRXxBRjl97cR2%2FrTE7FjR3iC1mvTomXxMp%2F0oICj7B%2FQUaoHzLHdgUVhguiX2W9cS%2B0eGg6lvDPtK7Fs4tq0ds8mDZrT9iFgquXroVI9pe2D%2BNJRQgn&X-Amz-Signature=901dc840d63d1314d4027fc970612bf310b1ac667acc3dd73eb90a1db9c24759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



---
title: "변태 키배열 만들기"
date: 2023-11-04T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 + L 조합을 비활성화하기 위해 AutoHotkey를 설치하고, 특정 스크립트를 사용하여 키 배열을 설정하는 방법을 설명합니다. PowerToys의 키배열 설정도 포함되어 있습니다."
notion_id: "e9027896-b8df-4716-8e02-d21c39fa635c"
notion_url: "https://www.notion.so/e9027896b8df47168e02d21c39fa635c"
---

# 변태 키배열 만들기

> **Summary**
> 윈도우 + L 조합을 비활성화하기 위해 AutoHotkey를 설치하고, 특정 스크립트를 사용하여 키 배열을 설정하는 방법을 설명합니다. PowerToys의 키배열 설정도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c7fb2a9-9621-4888-9c83-29136f82f1a7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FPUZFQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCmv5Vp%2F1gS862HBFPTpIETY73N0%2BQtVeWu5XT2jIAvGQIgTsv%2BzNoWeHK%2FKZBwyyFmPsjy82x6B6kJvS2uRu%2Bwk84q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOaa%2FzdAxB6MqylTKSrcA27E6wmVfsYDBhMG3mKmhAokpAr42bdndKRWwsCqaqy6aoBaQ449zg5ja57V4YZTxOPudqnhQz%2B6OhXO3lWywWrfb3%2BSF6sSHYCs1MuISmrMY43IASBomwXwrGEaD1KHQfl1Q3upgx%2F%2BHsHUG6GKY6Lty2s7IIilPzXJSVnsMbZmPeubKOrAWp7n2uBy5KT60DtuYwwAtpmf8rIKFIb1Stk0piZ76SAGRiwxOr3oDf%2BRISohpfu16ecSFd%2BQfL5eh3pBU15dj3WDpFBI63OzqDM95FjJeLEqdkfFcXBzKPHD7iYn3s6not5e5T5lTlJQE2%2BtPBjXN5aWuSrlVEsgh0JWRSSV%2FwlDsiMlozND1noUp42o9fH4%2BhrBaecRWxexSkT0jpfPn20BkGR6R2zlxiwAfwNuv8cj7tOIueU0oVKKqOSxuzgxFwP68O3D0Iru0cD6DqGVdgncPB%2FA8BSHDuiQjEo3OWmVvch6qOq6Uig%2FkPu8smLMSmFDJ%2FOjzMnNJl0u13d6lBvm4DRfe0OZim02%2BFk0TvN7t334j0CPiwePfd8cae4ITQfpWVENKX1%2Fs0PAkOmCax66OxxWv8lQ%2Fp7qY1RRuCCXM7E9YebiEEk5P7PonThkYZT20FI3MJybiMQGOqUBXKMfJBhKdHN4%2FtHxK%2Bwb8CK1Mv93P7QwxDhbDYmcM6Ph8lpO%2Fjbm0mTWQPFox0JhlPVOnjsMZAmp6kr8jLOGMzTM3Q%2F%2FGc6SO5lD8QkI%2FiC7%2F8DPUi%2FuOeMG61D8tvfsjM9Z9tucgQjb2SH29NtR68kAdQLYJpxTmiGP043xG%2BeUNC9Z0Z485pbJCUYkDzgmdRiHfojH1AEKDVL7E4OZRD8GJw%2Fd&X-Amz-Signature=cfd08799de262c7e8fdea028807696982cfeeba3f4f8460dee35cb7d99a05cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



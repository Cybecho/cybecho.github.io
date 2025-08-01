---
title: "갑자기 exe 파일 실행 안될때"
date: 2024-04-29T01:42:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 "
notion_id: "9f0333b7-c253-4bb9-b40a-3dbd8ee615d5"
notion_url: "https://www.notion.so/exe-9f0333b7c2534bb9b40a3dbd8ee615d5"
---

# 갑자기 exe 파일 실행 안될때

> **Summary**
> 비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 

---

![Image](image_4fc674a651d8.png)

몬헌 모드질을 좀 하다가… 시스템파일을 건드린것같다

갑자기 비주얼 스튜디오로 빌드한 프로그램이 실행되질 않어~


파워쉘에서 다음 명령어 실행

```latex
sfc /scannow
```

그리고 재부팅하면 해결됨


---
title: "WSL2의 경로를 Windows 탐색기로 열어보자"
date: 2023-09-15T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "WSL2에서는 Windows 탐색기를 직접 사용할 수 없지만, "
notion_id: "4d0f25cc-d7c8-4706-b1a7-49562669b27c"
notion_url: "https://www.notion.so/WSL2-Windows-4d0f25ccd7c84706b1a749562669b27c"
---

# WSL2의 경로를 Windows 탐색기로 열어보자

> **Summary**
> WSL2에서는 Windows 탐색기를 직접 사용할 수 없지만, 

---

![Image](image_49c1909517ad.png)

🔗 [https://coding-groot.tistory.com/101](https://coding-groot.tistory.com/101)


> WSL1과 다르게 WSL2는 Windows에서 직접 이동해서 사용할 수 없다. 존재하는 위치는 위의 방법과 같은 방법으로 찾을 수 있지만 파일 공유 프로토콜이 달라져서 그런지 직접적으로 사용하진 못한다.

직접 이동해서는 사용하지 못하고 다른 방법을 사용해야 한다. 바로 네트워크 연결을 통해서 여는 방법이다. 윈도우의 파일탐색기(explorer.exe)를 호출해서 한방에 열 수 있다.

### **현재 Working Directory를 네크워크를 통해 Windows 탐색기로 여는 방법**

아래의 명령어를 WSL에서 실행하면 현재 작업 중인 위치를 네트워크 연결을 통해서 Windows에서 열어준다.

```css
explorer.exe .
```

`explorer.exe`는 Windows 탐색기이고 그 옆에`.`은 현재 Directory를 뜻한다. 합하면 Windows 탐색기로 내 현재 작업 위치를 열어주라는 명령어이다.


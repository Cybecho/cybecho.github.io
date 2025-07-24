---
title: "WSL2의 경로를 Windows 탐색기로 열어보자"
date: 2023-09-15T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "WSL2에서는 Windows 탐색기를 사용하여 현재 작업 중인 디렉토리를 열 수 있으며, 이를 위해 WSL에서 "
notion_id: "4d0f25cc-d7c8-4706-b1a7-49562669b27c"
notion_url: "https://www.notion.so/WSL2-Windows-4d0f25ccd7c84706b1a749562669b27c"
---

# WSL2의 경로를 Windows 탐색기로 열어보자

> **Summary**
> WSL2에서는 Windows 탐색기를 사용하여 현재 작업 중인 디렉토리를 열 수 있으며, 이를 위해 WSL에서 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSSHNB3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0EWEBQsfzpKB6BmAK6eKat6cr24zQObygVKTP9V8NeAiEAsg%2BMJ1f%2BOVj5aL7Guaj60QZOEuqTBquKRFm2Yet%2FTvIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIYPEi41WDY4SoPvUyrcA7Ze3q0KPbYNNq8Tk9yhG8CWuwzWNjAdv69vjLjqUaIVumKg73cvTCwf7zfiaycx3owQyK1BYvz4c8Rz2Bn1UpJHrWKr3wTLL5SrszCBurLN04TvEimnlCeIqrMkepYHXW%2FsX3SUFREpVYPlRME3suYnhByKHv0aQH6AaKxlAWCrA2EIBfBYcC%2F%2FesJhARKmyd0QOCBye%2FeeBkMbEmLEcEIJNwfV5i27dklvEGNxd7FPmGyXqV9XZAG8B1hdp1ajGCSwEciM6t%2FhCNQvp7ccq2DbeyPVWnqjw2iMtWVDhyra3cIBK45KXngWHwNPyuZ0azcHdVj7gYJouAr2wBOo2xpQNE1RpkyauQ46VJhdYRKq42Afr17jY1yh%2BRWGsmr2KbVm6Uu5CyIjg2%2FlyRC5kC6vyqRG5%2BMICaQ1Hx7kWxM7%2Fgi9fHAIoA14Qdx%2BhhRn6tQimJ2%2B4w1gwZfXXumKn0YP5JCQrQwKBr2%2FoWgy2W1xli8eu6kPrWiFKOsyX9X%2B34NMV3gEc39GVDmzE%2FDOk4lzrPIatSl%2BXJRec%2FEDp7bh3NpraJ0qPWug%2Ft6CI9vus9yEGvLvLLWmYA6U2du7G6GRGwzSmR0SigwGXrzsJJHAVVNQvZoaL7EIuyGTMNDOh8QGOqUB%2BwcMdSTFvLXvppD6b8QRexiqv7gfwJoXhsFnZ5lGkhs8wshfLkv6SqtJZTeA72dydJL0Z8dvE%2FSmCWuniBuB5RFJEe4bRwsXlMCq6W7lgULk45%2FvvfosTiWYjz7vB5M4JUuOUcWvJ6h3Bp%2B3qYIHEMHecRa5UdGG4uSbeURAzUTkG86NSBvt7ZIf6HzdYKzpZTZvhemR74NW1PqOrnhkt9AlI4lN&X-Amz-Signature=375a310dc2f6cf2b710b14067cd6763f51eb704c0a69c81d1865e283f51ab41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://coding-groot.tistory.com/101](https://coding-groot.tistory.com/101)


> WSL1과 다르게 WSL2는 Windows에서 직접 이동해서 사용할 수 없다. 존재하는 위치는 위의 방법과 같은 방법으로 찾을 수 있지만 파일 공유 프로토콜이 달라져서 그런지 직접적으로 사용하진 못한다.

직접 이동해서는 사용하지 못하고 다른 방법을 사용해야 한다. 바로 네트워크 연결을 통해서 여는 방법이다. 윈도우의 파일탐색기(explorer.exe)를 호출해서 한방에 열 수 있다.

### **현재 Working Directory를 네크워크를 통해 Windows 탐색기로 여는 방법**

아래의 명령어를 WSL에서 실행하면 현재 작업 중인 위치를 네트워크 연결을 통해서 Windows에서 열어준다.

```css
explorer.exe .
```

`explorer.exe`는 Windows 탐색기이고 그 옆에`.`은 현재 Directory를 뜻한다. 합하면 Windows 탐색기로 내 현재 작업 위치를 열어주라는 명령어이다.


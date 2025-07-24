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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKRC6VO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICofC5q54bGI%2BDejkIpSbjUyTTnUsWGJSxNSXWP6lkLeAiBqjcU56RL5fHzcoJWiDPpQ9cOuj1veKGoclk0o%2BahjWCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMc85aBwGEY0t%2FEKEbKtwDvQI7er9%2By3h%2Bte1nQJdzqE9V8r3N5Tig05iJoQ5LLHBy2GTMKJQu0STEc0KpDYSK8GELJMwdOKF%2BmR1KWJTqEZWhBtZf03opILpyGxDpUaRd1eRx%2B2pAbR%2Fljoxw%2Fw%2F4ZfZk%2FfsEHz8ZclVjcZENZTgDCQ8InqZYhGzpxr5ZK3PvNmXoHEO%2BumoCnj29GfoWkfSItxDqignNaRq1o2uXMywjO5ka2V3dqmxW%2F%2F3rtproOH9vfyeVvNKG%2Fub7iVWISCox2l8RExn4o7FDjxXSFfY003Jbbn8pZUZJ7EXTjNhfTuViS7QGq5FrzSsaTFmDc24pYULKqydIFLIxJ7hnH5u61HEVYKOd1jc0%2BSAS4epjeZ5ao%2BbNDOAw5dAn1yltfvot3bf7akK%2F62NWnm7ppzWnm2KE3GnVXtjGndMwpQMCFVbkIeB5QuqHTcJN2DdVcbQa5Mw4paKG4UIm2ZzU3EWeknlvMoflXSwZnWLBWswa2Ul%2BzjmGA0gMZp%2Fgf9Qtr92l5az3CRFEOkXKRLjFR12iYQZ%2BSFeKkTt3nI02EgfezSoHrbrSO%2BDuR0udNtBOo6%2Bd%2B5p%2FB%2Bdo2x5TfBOCYsCJ%2BAJOhZVsfs0cqgJuq3vigZkTIk9YJldVTeYwxvaHxAY6pgGuqpgwk84G8Cs2zV0VZt2vm2SKfPDn2CRGmj26tQDCOfVMr6aPhjOY67ibdhIpFA%2Bb9FG27VS3t8eIRBWu4gUE7s0PYLXMg1i57pyG0KZ5O6CBM5FD%2Bx990djxF3x84wyLJhQCpzKKH6t6sooFnU7QELGSG25fQSYXNrfTuJqatSOlGQVHG0%2Bny72qudjG9IB3u2jINyGtEP2eonfHO%2FijnEn040SY&X-Amz-Signature=762deb63157314f2101232f2a2c5dce0b59a01600b26eae84d7c19535cd4e3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://coding-groot.tistory.com/101](https://coding-groot.tistory.com/101)


> WSL1과 다르게 WSL2는 Windows에서 직접 이동해서 사용할 수 없다. 존재하는 위치는 위의 방법과 같은 방법으로 찾을 수 있지만 파일 공유 프로토콜이 달라져서 그런지 직접적으로 사용하진 못한다.

직접 이동해서는 사용하지 못하고 다른 방법을 사용해야 한다. 바로 네트워크 연결을 통해서 여는 방법이다. 윈도우의 파일탐색기(explorer.exe)를 호출해서 한방에 열 수 있다.

### **현재 Working Directory를 네크워크를 통해 Windows 탐색기로 여는 방법**

아래의 명령어를 WSL에서 실행하면 현재 작업 중인 위치를 네트워크 연결을 통해서 Windows에서 열어준다.

```css
explorer.exe .
```

`explorer.exe`는 Windows 탐색기이고 그 옆에`.`은 현재 Directory를 뜻한다. 합하면 Windows 탐색기로 내 현재 작업 위치를 열어주라는 명령어이다.


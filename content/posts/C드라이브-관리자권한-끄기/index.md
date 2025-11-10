---
title: "C드라이브 관리자권한 끄기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우 C 드라이브에서 관리자 권한 요구를 없애기 위해 레지스트리에서 해당 권한을 끄는 방법을 설명하고 있습니다. 키맵핑으로 인한 잡버그 문제도 언급됩니다."
notion_id: "215c3694-3dee-4a40-af5f-cac1d481c903"
notion_url: "https://www.notion.so/C-215c36943dee4a40af5fcac1d481c903"
---

# C드라이브 관리자권한 끄기

> **Summary**
> 윈도우 C 드라이브에서 관리자 권한 요구를 없애기 위해 레지스트리에서 해당 권한을 끄는 방법을 설명하고 있습니다. 키맵핑으로 인한 잡버그 문제도 언급됩니다.

---

![Image](image_2e063b807b4c.png)

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

![Image](image_1d06d6b96632.png)


윈도우 C에서 뭘 할때마다 관리자 권한을 요구해서


그냥 관리자 권한을 꺼버렸습니다 



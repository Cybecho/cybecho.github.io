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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXUIEAI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFFMDjzrSko6XevB%2BC9dGo2p3qKGxbiIC%2BxgXJcVZW8jAiBL%2FpqBUDGxY2KY6k4mARCGtJo3E1HUbJ7Z98rCD1KwdSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMCt1IIzEQQWWkNNsPKtwDNnUx9S%2FgxEHyDfyZDtNgDWRWkkOxWfLNB0jFq3Odeh2MbW9qcKvFwGYUvoTJhU9ijHklASL65%2FtP%2FDNCgiygO5GjIOCkAPkruF3c0Ok2%2BmeLSo6akWbc%2B15SYblxL2MNHncEDlqD3zM8XQXLF0lsDR74BmqaQx%2FiIwv%2BWoAe7kZnCML2AOcXO%2FkNQoQ6aKew4EH2R%2BHrU8iFKm%2FmYHzIrak%2F5OPGYcPqxL9anjqFO96CigGaNrkcBWRjqBydq%2BXdUHAB1tlwliDvVWeVJ9mnIYdNqifAvf3zVz9V15n7hqRE%2F6uKySNZr%2BknexB%2Bu2xcVBfy8I7X5qduS4YNkx1j0Z5imbj9z25A5o1ZBrUUwtMPE7Xpo4zzYSea%2FSRHbB2I8cNhZxpK%2FLcMrLFkwM%2F4l3EbQ2KmUpGrSYUl%2FAeo4jFhReN8uQqzZSahQ1GHcYpym6YVSu5pyYMF6OMOhAHb%2BwF6%2Bx7KwgZ4i8aOb1hucUFGeNIib3e2k0e8DJ5GwCKA5mMwvTdJnb2%2FTWvJ1e%2FpW5IL7pzRCfqJvMyhVlBo0siUQgm6kO4JrDZdOAVllFee5aFDPqVwWT13upErOIwHzYTmzIWMd4h2k6UmeczWs%2FSmXIQ2uxTKwtZhpKEwzM%2BHxAY6pgG%2FzOrfc68kYlE9bAyovgWW2EgV9j2WRFwajcnZFfmUYMduTxRfKyRUaMVOjw1eNSLFtzEkqsLkPCJw8IjN7iwvG5gS0H7ntbK4ana5%2Bu0wqFy%2B15Wo0Vmcd4f0ghSEgahfiw1m9kLmuPBCAQIXk8FY6A0RlQkSGFPm%2B11REJt5oytwQPURRZgtqJYlQqP9DL4Az4FZjltB%2FnzEcoA7f2r0ZMO%2Foli8&X-Amz-Signature=e4c0cda75cb2d49440744ac59c811d8d1a49b4ee6f7b6e4770fcb222ab48ef60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://coding-groot.tistory.com/101](https://coding-groot.tistory.com/101)


> WSL1과 다르게 WSL2는 Windows에서 직접 이동해서 사용할 수 없다. 존재하는 위치는 위의 방법과 같은 방법으로 찾을 수 있지만 파일 공유 프로토콜이 달라져서 그런지 직접적으로 사용하진 못한다.

직접 이동해서는 사용하지 못하고 다른 방법을 사용해야 한다. 바로 네트워크 연결을 통해서 여는 방법이다. 윈도우의 파일탐색기(explorer.exe)를 호출해서 한방에 열 수 있다.

### **현재 Working Directory를 네크워크를 통해 Windows 탐색기로 여는 방법**

아래의 명령어를 WSL에서 실행하면 현재 작업 중인 위치를 네트워크 연결을 통해서 Windows에서 열어준다.

```css
explorer.exe .
```

`explorer.exe`는 Windows 탐색기이고 그 옆에`.`은 현재 Directory를 뜻한다. 합하면 Windows 탐색기로 내 현재 작업 위치를 열어주라는 명령어이다.


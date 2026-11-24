---
title: "URL Co-Pilot Ver1 : 다모아 사이보그화"
date: 2023-02-16T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["Let's Macro"]
description: "URL을 키매핑하여 웹사이트 이동을 반자동화하는 프로그램에 대한 내용으로, 파이썬 코드 재시작 방법과 관련된 코드 예시가 포함되어 있습니다. 매크로 개발과 진심 글쓰기를 주제로 하며, Tkinter를 사용한 최상위 창 만들기 및 모니터 해상도 얻기와 관련된 참고 코드도 제공됩니다."
featured_image: "image_e9af06b34086cd0369b9eb58.png"
notion_id: "f3776e74-adb9-4a5b-a8bd-baecbc987170"
---

# URL Co-Pilot Ver1 : 다모아 사이보그화

> **Summary**
> URL을 키매핑하여 웹사이트 이동을 반자동화하는 프로그램에 대한 내용으로, 파이썬 코드 재시작 방법과 관련된 코드 예시가 포함되어 있습니다. 매크로 개발과 진심 글쓰기를 주제로 하며, Tkinter를 사용한 최상위 창 만들기 및 모니터 해상도 얻기와 관련된 참고 코드도 제공됩니다.

---

🔗 [https://github.com/HelloZOOO/URL-co-pilot](https://github.com/HelloZOOO/URL-co-pilot)

![Image](image_e9af06b34086cd0369b9eb58.png)

```python
#아이콘 포함하여 빌드하기

pyinstaller -F -w -n=URLcopilot --icon=./icon2.ico --onefile HalfAuto_UrlCopiler.py
```

> 🔥 **참고 코드**
> 🔗 [https://insubkim.tistory.com/68](https://insubkim.tistory.com/68)
>
> ```python
> import os
> import sys
>
> def restart():
>     os.execl(sys.executable, sys.executable, *sys.argv)
>
> print("Program Started")
>
> y_or_n = input("Are you gonna restart the program? y/n\n")
>
> if y_or_n == "y":
> 	restart()
> ```
>
> ---
>
> 🔗 [https://amureo.tistory.com/30](https://amureo.tistory.com/30)
>
> ```python
> from tkinter import *
>
> tk = Tk()
>
> tk.wm_attributes("-topmost", 1)
> ```
>
> ---
>
> 🔗 [https://www.delftstack.com/ko/howto/python/python-get-screen-size/](https://www.delftstack.com/ko/howto/python/python-get-screen-size/)
>
> ```python
> from tkinter import *
>
> root = Tk()
>
> monitor_height = root.winfo_screenheight()
> monitor_width = root.winfo_screenwidth()
>
> print("width x height = %d x %d (pixels)" %(monitor_width, monitor_height))
> mainloop()
> ```
>
>



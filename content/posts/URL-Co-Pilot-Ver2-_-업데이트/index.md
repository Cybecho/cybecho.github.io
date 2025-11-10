---
title: "URL Co-Pilot Ver2 : 업데이트"
date: 2023-03-01T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["매크로개발", "진심글쓰기"]
description: "ver2 업데이트로 키마다 URL적용 버튼이 추가되었으며, F4 키 매핑 시 발생하는 버그를 수정하기 위해 새로운 코드를 작성하였다. 파이썬에서 클래스 상속을 사용하는 방법과 tkinter 라이브러리를 활용한 버튼 텍스트 우측 정렬 방법도 설명되었다."
notion_id: "a1a7f4a9-f9df-442b-9a46-39a02363c57b"
notion_url: "https://www.notion.so/URL-Co-Pilot-Ver2-a1a7f4a9f9df442b9a4639a02363c57b"
---

# URL Co-Pilot Ver2 : 업데이트

> **Summary**
> ver2 업데이트로 키마다 URL적용 버튼이 추가되었으며, F4 키 매핑 시 발생하는 버그를 수정하기 위해 새로운 코드를 작성하였다. 파이썬에서 클래스 상속을 사용하는 방법과 tkinter 라이브러리를 활용한 버튼 텍스트 우측 정렬 방법도 설명되었다.

---

- ver2 업데이트 내용 *
- 이제 키마다 URL적용 버튼을 가지게 되었습니다
- shift + alt 를 눌렀을 때 '12121212' 가 입력됩니다 (버튼이 눌렸을때만 활성화)
![Image](image_e470fcefc19a.png)

> 🔥 **파이썬에서 클래스를 상속받는방법은 다음과같다**
> # `class 함수명(상속받을함수):`
>
>

F4에 키매핑을 했는데 입력속도가 너무 빨라서그런지 F4를 누르는 순간 ctrl + t 도 인식해서 ctrl + F4가 입력되어 현재창이 종료되고 새 창이 열리던 버그가 생겨서 그냥 F4를 위한 코드를 새롭게 만들었다 

F4를 입력하고 텀을 주고 매크로를 실행시키면 팝업이 뜨지 않는 로직이다


 

```python
#어미 클래스
class URLCopiler:
    instances = []  # to store references to all instances of URLCopiler

    def __init__(self):
        self.result = ""
        URLCopiler.instances.append(self)

    def gotoUrl(self, URL):
        #time.sleep(0.03) #약간의 딜레이를 넣어야 F4를 눌렀을때 오류가 안생김 근데 이러면 F1이 문제생김
        keyboard.press_and_release('ctrl+t')
        keyboard.press_and_release('ctrl+l')
        keyboard.write(URL)
        keyboard.press_and_release('enter')

    def runUrl(self, onKey, URL):
        keyboard.add_hotkey(onKey, lambda: self.gotoUrl(URL))
        print(self)

    def __del__(self):
        print(f"Deleting instance {self}")
        URLCopiler.instances.remove(self)

#자식 클래스 그냥 gotoUrl만 수정해주고 나머지는 전부 부모클래스에서 상속받는다
class URLCopiler_F4(URLCopiler):

    def gotoUrl(self, URL):
        time.sleep(0.03) #약간의 딜레이를 넣어야 F4를 눌렀을때 오류가 안생김
        keyboard.press_and_release('ctrl+t')
        keyboard.press_and_release('ctrl+l')
        keyboard.write(URL)
        keyboard.press_and_release('enter')

#F4 변수는 자식클래스를 담는다
Key_F4 = URLCopiler_F4()
```


작업하다보니 글자의 가독성이 좀 떨어져서 tk 라이브러리에서 버튼의 텍스트를 우측정렬하는방법에대해 찾아봤다


```python
import tkinter as tk

root = [tk.Tk](http://tk.tk/)()

# create a button with text

button = tk.Button(root, text="Right Aligned", width=20)

# set anchor and justify attributes to right align text

button.configure(anchor="e", justify="right")

# display the button

button.pack()

root.mainloop()
```


근데 그냥 정렬안하는게 나을듯하다…


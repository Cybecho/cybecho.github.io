---
title: "URL Co-Pilot Ver2 : 업데이트"
date: 2023-03-01T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["매크로개발", "진심글쓰기"]
description: "ver2 업데이트로 각 키에 URL 적용 버튼이 추가되었고, F4 키 매핑에서 발생한 버그를 수정했습니다. 파이썬에서 클래스 상속 방법과 버튼 텍스트 우측 정렬 방법도 설명합니다."
notion_id: "a1a7f4a9-f9df-442b-9a46-39a02363c57b"
notion_url: "https://www.notion.so/URL-Co-Pilot-Ver2-a1a7f4a9f9df442b9a4639a02363c57b"
---

# URL Co-Pilot Ver2 : 업데이트

> **Summary**
> ver2 업데이트로 각 키에 URL 적용 버튼이 추가되었고, F4 키 매핑에서 발생한 버그를 수정했습니다. 파이썬에서 클래스 상속 방법과 버튼 텍스트 우측 정렬 방법도 설명합니다.

---

- ver2 업데이트 내용 *
- 이제 키마다 URL적용 버튼을 가지게 되었습니다
- shift + alt 를 눌렀을 때 '12121212' 가 입력됩니다 (버튼이 눌렸을때만 활성화)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3a3f32e9-84de-497d-9871-9de75ec4e7d4/icon2.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWCS3AY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHrekVHt5ed3QC7Em4Dh6vkOEZzF02OKJcDPK%2F8B%2F7v%2FAiEAw9p%2FUmdEwC4I%2Fk53SIF8UWf7LJYJeZYI5E34Fe0COQkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMOfG%2BviYxAIewYLiircA94eip1MuUyBCKV6iwfjcjJgslFrGhOU3PxUupWM7Mqqs%2BTpO1JZaBdhOZlY%2Fuh9CecegKVZ7rtqkVwsXpIfq59nVLSwQk6LqR9q6PivmC009Fx7nXmVHwWgNmPRjWxPlFp01iZ2p5o7mpVfDcbQa%2FuE7nyEQfPviozqaEMKR81lHNoP%2BMz%2BVwe7J1i3OY9R6PEShS1LHr3HFGPoBolz3iExMFUGEfQbZCIwwm6v%2FofFuCmmXwgsXcWUgD1mi5bayyXguSjjN9g5XhE033jGyiC7qOOnKEBEJOCGUrEtAWjWiGC54RrADYSd62PK65aNr7PxTWvzFT0I2t2NfFyJkpNmEzeD2fTReXiQdsZshQOROHsdj9VAgpVQJTyBU6qULHb52YRfTDS7xVf8ejMYsCX1f3Pu1EQ4cqPCKePHONvWU8wFFQs4ktFP9NC3vf1zRUlS2%2FnYYYsZPPGLKbeSz%2Fqswmq8a3h95DVrEkJsYPkQkf8hOjCqlo85jRIbdkfXUetQvH7f7QdzttNn06dJlEVnTcgA52LfDAkowAFTY%2FwmfgpAmxVM7NccKjpL0TVoc19wSLI4ex6P%2BV0pJ0y77CUYS%2B9UrBIeeHHWcmmnoMb10908gb4%2BVMcX6yn%2BMN32h8QGOqUB%2Fh1KAdjiJ%2BxrAH73EKAPotYDaepru%2F7dWb3DIIp5wcuFof3oC7xYEx1MhytedxEHaB3NFeGyvpaqW9BwM93Tp2m2a5ot2PfkfHZ7rVew7UAwKvnoKuzBZNcOljxb%2BifovYOYd5xo6rA2pJfswkbwovXJp2XyYEiOvfFVksDNo%2Fqx0bPRlXrjz6rgRqgsw9iHgJRwtcltQmjkcfgvAUXvtvjWeo5x&X-Amz-Signature=c949102d0e441416030a6f52ef006b32c9ddd3bd5d6e87f5c3542b608f7e423c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


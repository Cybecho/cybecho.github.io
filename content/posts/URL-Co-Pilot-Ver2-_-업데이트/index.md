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
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3a3f32e9-84de-497d-9871-9de75ec4e7d4/icon2.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RMXRKT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIH6eECwah%2BcKNMwZgQgUwL0%2FpV7HTLx%2F14dW%2FbfIbguyAiB7jL%2Bie7JKcdcOEwhYc9H55YIUJsDpK04M1LeH4CulWyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwrUg%2FpFVeg4hAmCYKtwDyFoSmBKOWvnHAV2a%2FH9zHATeCXcVMksBrS%2BSo5OP%2BoKuLj4NYVccu8rrd0jbE6OIE6rjSx5A4eF7oy0XyU52BNDX7rPasSWhHEfhRIQKDBCi8lSvEt1vOxmuW5NHooUxDKAS9y9mTrMiTAbfj17%2FvN8yaDlqG4%2BiptEMbD0jeuR84FgktxVStO0LiSiyk7eoEPECTb0c4HWvKHvFYSkiH3WrjR1zFSCGKxSTQT6wYJP4unvvjMcVv%2BBbSftKJfBvSpCEpKJPrS3JNhdZCdEHA7yfAMZEbLrUMMqQEhjOI00cGIwPkp%2FX5O13GpF0aQzd%2FdMoeTzu%2B7yLLXO%2B9ITRzDp5%2FKAC8ek%2FK9IGvaSd0sujm5ohIGe6KSu3DqkZq24yIlIkzlzaFIfha%2BHdh9EVcdpdLQPqIgRSTeKGYlhBF1%2Br6nSCie%2B43YMG8a7VgREglxS0fjr6VwJoYuKx36iAqqr0lcIizEiHOe3j3uDSX%2BhUP2sFYfufINeq7KsL09mbJWEY81j8zBY3Wf703nx25C%2BiEbKsh%2BcR%2BHwqlWsIKFOC63Wka2H8j0%2BgTdnvCOylJqwDrXw6Mc4YObl5bk2TiSTK1AaR1MRIdwX5vJLuMs1L%2F1LvyhATFy7G4zswvc%2BHxAY6pgHy3uJWFZs2O8qi7OA4nsB0g7QJhh%2BroEdrpk%2F4jYkpDu1enLQeefz3Sfk6Ow1GY%2FqGP5lW6HqlYKxOWJI0Ir%2BdEgdplV5pjmvG2XW2JwQEwspXCySaUvRYX%2B%2BpDyU%2Bas1wjyOhCCzjnf7SVrKN33yntPfRbhXj6tph2qbiCeQfCqLU9gJ6sUgbcEx%2FvXUMDXhdXx%2BIhvr4aLXd4NF1y1kGNKv%2FWRGm&X-Amz-Signature=1f6f68df9e979ca017cdf4658333469210ededd843ed98f6314fb374acaa464d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 🔥 **파이썬에서 클래스를 상속받는방법은 다음과같다**

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


---
title: "oh my zsh - 플러그인 (자동완성,구문강조 등)"
date: 2024-03-15T15:32:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "oh-my-zsh의 구문 강조 및 자동 완성 플러그인 설치 방법을 소개합니다. 구문 강조 플러그인은 사용할 수 있는 명령어를 색상으로 표시하고, 자동 완성 플러그인은 자주 사용하는 명령어를 제안합니다. 설치는 간단하며, .zshrc 파일에 플러그인을 추가한 후 터미널을 재시작하면 적용됩니다."
notion_id: "88066d62-94b4-45b5-909d-a248df0b4e91"
notion_url: "https://www.notion.so/oh-my-zsh-88066d6294b445b5909da248df0b4e91"
---

# oh my zsh - 플러그인 (자동완성,구문강조 등)

> **Summary**
> oh-my-zsh의 구문 강조 및 자동 완성 플러그인 설치 방법을 소개합니다. 구문 강조 플러그인은 사용할 수 있는 명령어를 색상으로 표시하고, 자동 완성 플러그인은 자주 사용하는 명령어를 제안합니다. 설치는 간단하며, .zshrc 파일에 플러그인을 추가한 후 터미널을 재시작하면 적용됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1b29ada3-3e4d-449a-aa44-4e7248a09fd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPLNM7J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCuExuPWV7PhWhIm09QjopBdwqr0rn7xTkHKUnwLtJvKwIgdg4%2FbjH4yCCam1uwvctuqxBaXjA1g68qu69VYO7KlKAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFvxe50Ai5k9e84r0ircA6jOp4twlrbYWzpvGB4kS7TTxfJane1pveFymfqIwskUEkOoYTSBsGLeP9QnMZ4Xwr6IjJzwaO9%2F3gVeZ042KlxRoc3%2F%2FwrXQjdoc1CUbf0UMc8oF1CJEpcQJKK4AvPcn7jaE8RomAEZ%2FGOu8gYtwL08LJQOIoqpXRdEjI5f%2BxJU5J3bJLEhu5GEazAKHfOQd1n%2FIUz%2FjKqXAKvjAzBA9KLMiCzwLoCvo752zfzEqgZdUs77it04oefpvWI9xf1%2Ba18zCDhulayjtv8v%2BlDB%2B1uRB0PWjqMdGJPljHWuJjyUaRWrl6oDYMLCk4eId%2FDDQ3ThLIIqH8Qzr2f8qeI3r24shZ2i0OTBN3mzOrwDl38qTbFwdJ92baVnwGvOeFudl8jFFhYVbEKA9NdNFXLIjXbCwo2wZRyg3rzlcS2UMZU6epJeDzKSA3amTcmpwlcPDMRCuOqvQXe4X7Kf26mcrDI%2FHJnkM6vk7jXTNegX6ppRxEHQw89xvHclBBefL0GhKbXrl7NJRVCtu9o6jFAHzz1afYIbVJZGkLg%2B%2BihMatJuud%2FtR3B33UMBse2Zbl9JGIQKPbjY2UQkXr7X6XRmhMgE6oAA4x7mGoz04PKHhrspIEuaR4DxcQOTneGBMM7Oh8QGOqUBUrZc9wHAW9TtYGsM49S%2BmfeAQu8GLbBiPzaMRS8wwglU9fQ6gefELOiApouAVw0esZ5aBypISNlkhZb9TWUiYTRca46SqcsWrsOew6GQlSp3DWJejmPb87scCNsrM3XCe8Zy4AwoCMxKoeyujHmMIsEUB6ZMkHsqbsOityspaCcEx5kToLC7AXv0O9DXjEkIdp0%2BBiF%2BP0OLhgvp6Ukp3WPttf%2FS&X-Amz-Signature=ffccae69efc94c5b13e20307e7e3b6e190ac6bce79fb3483cf6ca8b162b74659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://tasddc.tistory.com/41](https://tasddc.tistory.com/41)

syntax-highlighting라는 플러그인은 말 그대로 **'구문 강조'** 플러그인입니다..!

터미널에서 구문 강조라 함은 **내가 사용할 수 있는 명령어인지,, 아닌지를 강조**를 통해서 보여준다는 말입니다!

바로 사진을 보시면

![Image](https://blog.kakaocdn.net/dn/dsRaME/btrdJiO9nAC/IKJ0YGwOeu6VYGhvrBTjc1/img.png)

적용 전

![Image](https://blog.kakaocdn.net/dn/edgyCP/btrdKVZZt6B/JQWQBtGvlnzSSOrQ8jNvrk/img.png)

적용 후

바로 차이가 보이시죠?

현재의 터미널에서 사용할 수 있는 명령어는 **초록색**으로, 아니면 **빨간색**으로 나타내 줍니다.

설치는 매우 간단합니다. (저는 아래와 같은 순서로 설치 & 적용을 하였습니다.)

```shell
# 경로로 들어가서 git clone 받기
cd ~/.oh-my-zsh/plugins
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git

# echo 명령어 사용
echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc

# .zshrc의 plugins 부분에 추가해주기
vi ~/.zshrc
plugins=(git ... zsh-syntax-highlighting)
```

마지막 부분에 제가 실제로 작성한 모습은 다음과 같습니다!

```shell
plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
```

처음에는 **plugins = (git)** 이라고만 되어있을 거예요.

그 뒤에 공백을 주고 연결해주면 됩니다.

그러고 나서 터미널을 껐다가 다시 켜주면 적용이 완료됩니다!

### [[ auto-suggestions 소개 및 적용 법 ]](https://tasddc.tistory.com/41#%-B%--auto-suggestions%C-%A-%EC%--%-C%EA%B-%-C%--%EB%B-%-F%--%EC%A-%--%EC%-A%A-%--%EB%B-%--%--%-D)

이번에 소개할 플러그인은 **auto-suggestions입니다!**

이 플러그인은 **내가 자주 사용하는 명령어 또는 파일 이름 등을 제안**을 해주는 플러그인입니다.

바로 이런 식으로 말이죠!

![Image](https://blog.kakaocdn.net/dn/Q6eiG/btrdIMJuCjK/M5s3wtiH9EK6Tcj4pUKju1/img.png)

적용 후

서버를 실행한다거나 자주 사용하는 명령어들을 말 그대로 추천(제안?) 해주는 것입니다!

위의 사진에서 윗 방향키(↑) 바로 위에 있는 **end 키를 입력**하면 제안된 명령어가 자동 입력됩니다!

설치 과정은 아래와 같습니다!

```shell
# 경로로 들어가서 git clone 받기
cd ~/.oh-my-zsh/plugins
git clone https://github.com/zsh-users/zsh-autosuggestions.git

# echo 명령어 사용
echo "source ${(q-)PWD}/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc

# .zshrc의 plugins 부분에 추가해주기
vi ~/.zshrc
plugins=(git ... zsh-autosuggestions)
```

위에서 했던 방식과 동일합니다!


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1b29ada3-3e4d-449a-aa44-4e7248a09fd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4EDX4T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDvM6ExO4hrwghKKlEO3GIghDAhQI7OzpkWjwcAjuj5UAIgEW%2BxoFErEPyNlaiSP3FYeKwDzRBAFJAzpyuAaZdFpswq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDB0Z2eV70zx9irEAOCrcA0dbwVYkHl9Jhxisbnu4HXNJ9sEOfbeoysp18Gm7R3S8UYx%2Bin9bpVlHljjMr%2Bwq6JozeRo7HU5K4alpmsNgU6O4wd6Z0v1caosISp00vVM8IhPBZk0CnkPVAwuujsyyWk4IgUuPgWgoJaL7oxlxtvY3eHY8H19xyIo755hCHK%2FLpEebluewQSPORLhP5WqP%2Fevz5DoF29OmDbaH0imc416tPDoNIBs1uZtd2JIbpJiJVbEYXRodVJjB2TmiVLfsTVhV2Qo3SjkRb7qJShnEk6Bm8kPwknHHhvbe096p%2BdPepo60t4DsG9Biwa2oaZkBgjaTgy13XBFgq%2Fvpt3EmdN9QvwMCBlb04CobpfWripziDRBv6EAzHVpr2IlES3CwNQEhuHluWsno%2FMsbYKQVjh2mMhH8sdp1%2FfRmJ%2B%2FoW4mcXra34CRVmyPrwYSNkk5To90A%2BPvAkKJdI7XgcseZ1iNkQPYlYwkNw5TU8%2BV8EXUPeWMCupp6bjHAJQfA5CIKa9nPVJa5twyD8JCHEUMhhV93AbiqOSzY1C1Qr%2Bocjy7aC1nSlMaUeKgCSuti3cMvxgJSJMyGStB0ZYL8lRcZbDwKxIb9K9QAME%2F1rYfMaCEvM4F0OmjED3Ya1Mt8MNDOh8QGOqUBpBfZLeUVcHUmhRffWzexV0JrariNkZWBUJ8%2BfqPsFh9Q9JhuTR0cW0bESmnEntSbCVY5bvuXbOlWFpEQmPJ97aZ0K9CTp94hfB46a33U%2Bxmay%2Bbf1Y89l8BjwzKXaoa8r96KLe6YVzO7Sxu0V3LT0WNuXvmS2Q2CloIDuLVdOTmESGiWLKLbRVNxI0Gf3fTOm6g7Iwv4HMSCqQJyB76jVFFygVqo&X-Amz-Signature=8ebec1bfeb603423d5edbbd188d60e38fb441aaf9ec8b0c1c0ceece57a57c7ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


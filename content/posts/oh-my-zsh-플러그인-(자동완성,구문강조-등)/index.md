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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1b29ada3-3e4d-449a-aa44-4e7248a09fd9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXS3KM3R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHbW2AIQge1hcMJErgdq9tTMcIWEE3nL0rF26KXN%2BwrpAiEAt4bDnooAVvNEEq14IeK0tA2aOFPSGhZ1aLoCXdxbuVwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOY5KQ6zBA5tfTApgSrcAwvHba7huvRQpj7qd6mF5pevdmSMNoviB9kVuDfg%2Bhfe%2FHvoCy8HicYcCmFfTW0GHdVOPQO%2F5%2BY%2BYx9NJo4m3mOX71MKnRd5EUXc81ozhErPy8HSY2S%2FvT%2Fm7d26cJZNZJyQG3IIkz3Wx5KWAHoGvQ3kRfj77Tmy69SmHR2mzj2NuSnW4ahsvk2RczN8pmGYJUrWlf6mW32bci6Spu6ezmCS9j3%2BICsua%2B1rWyCJp5gx23ppdLWCjuJs9U71Q%2F5hDkYYfPHPcQn7hyCMR2Lbr0ayV%2BOi%2Be89a%2Fqm20ZaZ4E7fce7%2B4%2BVebH0h3BnCTSakWNpOQY80N2NUmTzeOf90E4FHJs1Dq3WK5twAqVa3h4b2ecPx0CAx0LhFINFosmeRlLx8f9pmx7BU9bUbyL4T%2BFo8awJ%2Bo5xxcSCq6Fnw%2BScZZA9DPfaQX%2BuXFP4krJFCczKGyVU%2B9iO2XBiWvAdt2C5PlYF0oi%2BYYVxBK6K%2BWZO4pnISzDp4NMopx0UPov52z8W%2BV6TesQieK39tWhLo9PqfbApwNK7N0H1B4gnYkWMPduGEi%2FVtQbMF731Dq25MXLROjX7Y5RjE5jXO71OcNXSST3lRS5G3iWuFRU1%2FNV6a5IdHed6IGa%2FDNu2MNj2h8QGOqUBl9D%2FlCVxgRCWXzVfib2Xp%2FjSl2loV4%2B4k4Zvn1JGaxJeVum7ZxeUwxIxO7w7oazg5tXfbCdKskLlagpIVQ8QGYJugQH3vtb%2BCv74PvGovwXRDwqVbHE2Mz%2FJ%2ByWRPeQ1O3sGSGde%2Bgs8djkeolKanm7oxc%2BttIpwH9BNpMtAb59WnI%2BipC9PIBvgqYRjj8JcK%2B6wkCLezKbi8bZl2C32MOO1Y63U&X-Amz-Signature=0bf31c87de5dd79ba0f0d0682443afbc4beac73d5436165f75c3c5bf31da5bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


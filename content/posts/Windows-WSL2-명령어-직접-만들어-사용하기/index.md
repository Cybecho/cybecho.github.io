---
title: "Windows WSL2 명령어 직접 만들어 사용하기"
date: 2023-09-14T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "Ubuntu에서 자주 사용하는 명령어를 alias로 설정하는 방법과 zsh 플러그인 설치 방법을 설명합니다. "
notion_id: "de719076-4d87-414a-9cb2-3ac4dbc73514"
notion_url: "https://www.notion.so/Windows-WSL2-de7190764d87414a9cb23ac4dbc73514"
---

# Windows WSL2 명령어 직접 만들어 사용하기

> **Summary**
> Ubuntu에서 자주 사용하는 명령어를 alias로 설정하는 방법과 zsh 플러그인 설치 방법을 설명합니다. 

---

![Image](image_f8c370ad6c59.png)

# 단순 명령어 alias 명칭 설정

Ubuntu에서 `cd ~/../../mnt/c` 명령어를 `gotowin`이라는 명령어로 만들어 사용하는 방법은 다음과 같습니다:

1. 먼저, 터미널을 엽니다.
1. 이어서, `nano ~/.bashrc` 명령어를 입력합니다.
1. `.bashrc` 파일이 열리면, 파일의 맨 아래로 이동합니다.
1. 맨 아래에 다음과 같은 코드를 추가합니다
```shell
alias win='cd ~/../../mnt/c'
```

1. 이제, `Ctrl + X`를 눌러 파일을 저장하고 종료합니다.
1. 마지막으로, 다음 명령어를 입력하여 변경 사항을 적용합니다.
```shell
source ~/.bashrc
```

위 단계를 따르면 `win`이라는 명령어로 `~/../../mnt/c` 디렉토리로 이동할 수 있습니다.


# AWS접속 명령어 단축키로 설정

[AWS 서버 구축 후 MAC 터미널로 접속](https://www.notion.so/f7d98040a8fc4ed4bbc5f8301c5d6ab7) 


# zsh plugins 설치

🔗 [https://mulder21c.io/setting-up-wsl-2-dev-env-and-zsh-on-windws-10/](https://mulder21c.io/setting-up-wsl-2-dev-env-and-zsh-on-windws-10/)

## → [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

이 플러그인은 이전에 입력했던 명령을 기반으로 명령을 타이핑 할 때마다 자동 완성을 제공하고 방향키로 해당 자동 완성을 사용할 수 있게 해준다.

다음 명령으로 설치하고,

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

`~/.zshrc` 파일을 열어 `plugins` 항목에 `zsh-autosuggestions`를 추가해준다.

```plain text
plugins=(git zsh-autosuggestions)
```

## → [syntax highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/)

이 플러그인은 명령어에 구문 강조를 적용해준다. 구문 강조가 적용되면 좋은 것 중 하나는 특정 명령을 사용할 수 있으면 녹색으로, 설치 되지 않음 등의 이유로 알 수 없는 명령이면 빨간색으로 나타난다.

다음 명령으로 설치하고,

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

`~/.zshrc` 파일을 열어 `plugins` 항목에 `zsh-syntax-highlighting`을 추가해준다.

```plain text
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```


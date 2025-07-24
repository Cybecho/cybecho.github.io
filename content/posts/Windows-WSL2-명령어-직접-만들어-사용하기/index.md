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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECJDDCR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDlloTGf9Lbp829ah%2FQ32DVyDWcqHSCrzCH2cCIz3iV4wIgQrD2G5HpeFjU8L02jKM3iccZTQ89%2FGiwSliVFdpY%2Biwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO2oGJMDFW3wkHztMSrcA1tomHlItWwNyoub0YnoQTJXivsyUDxS0biWdXxjUz1CJLkLCKSFkxzf1L4f5Y2%2FtHX6F94UozBNT%2FBKTpjApbakGDxWg93N1HEdsqRWd0Uvd0XrXYgB5QZZst1205jN3PdEvjiNl7ruvB47OkXsJLh%2BCNtN2ZKfe4QFWHK%2BcGjrr3XdHCDamkEqJZlvWzAnj3TE5L8EGhkQfN4IkiHUqi4dm1xAjdOnD17z0ZY8LjKZJKbrvILG4nGRbJFNcFsFxJz%2Bwka0yuQdJyRGA3aaM39brgC25cNco3jgM1WUqyT9Wlso9ecqVrL3cH44Ie3V4z3DJ3ikvFhUqx36i7TKRbFr%2F1ekzbfMI2yQ0CkLT4PhP028mRE4iM59jO5iSpgbtiOhE9f3ejgb0ffw%2F3kSSyF833EcDuqscfPAAVjPP46CiFONMLVuw4DUHNer4%2FUFzI3GV8AdrYyoGaTu4z%2F1D2Zbhtr0%2B7lfvxrjGN34qEpM%2FibXDSbY%2F5EpSC8cpSorZWZhv4AxFBCDp7%2FPXjbjQhU5I8nvMytBXMxtp%2BO4M6yPaRY5%2BIPyExEIvWutTYPlrQotbDUogsN0lq98bTspCN7S7hoiuiAGrSIsN3SBZFcf%2BrjYzzAc19OO%2BbLWMLibiMQGOqUBE3Sjosjoj%2FhjiC3Yrr3wuKxL0VfsJoZ4eCe2NSuI5X93YrA5uWyTL56kTvbNEiLLauTdMP%2FKpYGmAzR93j%2BNlUaw%2BhFSPhFcJH2HClgJeYPmp1jUSI%2BUzM4nh8Dfo4BC%2BuMEmg4HvwVFoJVAds1x4qv53KckHxVkzc%2BGPs6T%2BgMoiW9%2BXhMkvmWqgzGfVv20Q%2FuEDqPLZDNzsEheJNUMamxuI6hw&X-Amz-Signature=5e99f0b796fbc4beab7c9d7f9df1c60d5fe2e34d1d93cbd5945f959078799e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


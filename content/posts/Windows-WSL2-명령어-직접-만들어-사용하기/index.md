---
title: "Windows WSL2 명령어 직접 만들어 사용하기"
date: 2023-09-14T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "Ubuntu에서 자주 사용하는 명령어를 alias로 설정하는 방법과 AWS 접속 명령어 단축키 설정, zsh 플러그인 설치 방법에 대해 설명합니다. "
notion_id: "de719076-4d87-414a-9cb2-3ac4dbc73514"
notion_url: "https://www.notion.so/Windows-WSL2-de7190764d87414a9cb23ac4dbc73514"
---

# Windows WSL2 명령어 직접 만들어 사용하기

> **Summary**
> Ubuntu에서 자주 사용하는 명령어를 alias로 설정하는 방법과 AWS 접속 명령어 단축키 설정, zsh 플러그인 설치 방법에 대해 설명합니다. 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BY23QW6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCID8dRrbn1h67GP34MGpJ5PsCSX1k%2Bv6giKetB%2FT9ZqyaAiEAwarA9B1kRocXiqVMYtQQt9Wzidl%2F%2F58Jp7ejVW8QW2kq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKE7Ah6XEjkfM0U06yrcA1VomdYwfRzO3d%2BGkpMA%2FyC92dBVwL28IBh9nxAJ4xGpbVZNT%2BHjSNIOz6jtttlg6odoqGgwss0jMZEahX3LlDuPkfPDE2ok3McA5NHrskvvrFDY19AIkmcxBRgYOPippbJZ7j3xkbbmF5yZ6jL6cNPCMtUWFljU2sn75Hw1ZgoA8unbqsoiVpztB8k4lqDzoDXtrUjuVibyV9TPDVmSqU0Vlk5m024O%2BGwXiOGmpRB55yNGdWWZfLTSFL0ON6FhDnz3cquF8prP%2BALKD2QIlGYuzftpdj9uzSfUTV3ruc4R5AImZZ%2Fy%2FkRSqDiya9CUpALIhHlEo2hOukVrx4KgpX4vpoBKqwXwMB30pXwWNRC5ucTmt03OdJ4sMz%2FhdPbUspmoTvbm4sUZFR%2FYfUsQeHJw7Sl8%2FhalgnzbcLQ42Q2qD4EE4NEd0zgNCDIyjQe2yX1341TiO5AX1fm3OFaoGralD7yww5AaUvsybt1e85iCs7ZUnNmaOhJ%2FiWviBV%2BHDAIcfrS%2FburaclciugybEatJrZvSz1K9miRRTJkTDu8v%2FRq52Ss5fFQccyPCox5sarAKLJn2H45m1i6FpTuvQr1h2UNdOxtEshGEfNc8Pmy7KMhuKPyebAYWcqR7MJbPh8QGOqUB0ALTdjDS85hsaJAj7rEphpsXEkOY97aJb3bj7aZ8bvhmuU8%2FKN9Ti1hM%2FHePYfmh0lFOe6idcYUGp5nU6D%2BZr0e2dJK%2B2eANqXEfrO%2FtD3axDRHrGW6GvC91tINHeAZN3EL03noSC2ugjmFtdLk%2FzL0lfZqv4Ua9%2F28GydJg39Ob7lP60Id5RUeq1bvbslS6%2Fw4aq9wRHYLuzNktA8YmiAU8AGSu&X-Amz-Signature=19aba78314c6564a6910f328011cbbfb26cbc5fab4e7b5e1abe8f0871729825e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 단순 명령어 alias 명칭 설정

Ubuntu에서 `cd ~/../../mnt/c` 명령어를 `gotowin`이라는 명령어로 만들어 사용하는 방법은 다음과 같습니다:

1. 먼저, 터미널을 엽니다.
1. 이어서, `nano ~/.bashrc` 명령어를 입력합니다.
1. `.bashrc` 파일이 열리면, 파일의 맨 아래로 이동합니다.
1. 맨 아래에 다음과 같은 코드를 추가합니다
1. 이제, `Ctrl + X`를 눌러 파일을 저장하고 종료합니다.
1. 마지막으로, 다음 명령어를 입력하여 변경 사항을 적용합니다.
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


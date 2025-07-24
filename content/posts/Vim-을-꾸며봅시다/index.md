---
title: "Vim 을 꾸며봅시다"
date: 2024-04-18T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "Vim과 NeoVim 설치 및 설정 방법에 대한 안내로, Windows와 Debian 계열에서 init.vim 파일 설정 방법, 추천 플러그인 설치 방법, 자동완성 기능 사용을 위한 CoC 설치 방법 등을 설명합니다."
notion_id: "8cfdb875-ba1f-4b0c-bd55-d2d5f1f4d9db"
notion_url: "https://www.notion.so/Vim-8cfdb875ba1f4b0cbd55d2d5f1f4d9db"
---

# Vim 을 꾸며봅시다

> **Summary**
> Vim과 NeoVim 설치 및 설정 방법에 대한 안내로, Windows와 Debian 계열에서 init.vim 파일 설정 방법, 추천 플러그인 설치 방법, 자동완성 기능 사용을 위한 CoC 설치 방법 등을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W53WJVC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCok5pnvlLlkRUqXc494nZqsx3eqBou8q%2By6moOmY3krQIgF%2Bt0AYERQ6NjD%2BFUx5R%2Ft5LtYB%2BZhYTDQ6nFvjTa9Xoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDABBuHX4ZefNo0YKuSrcA%2BXnDFL9bJTeUq0O6BRYy8Z0ol5NnejQaTDf%2ByADf73qTiJwd4UuLAWMv%2B3h3C0WOgYIgELR5%2F%2F7PDO5VFyzrHvLBTncVPeH86q4dQElio2f0oHUUufXqhM2p4WTejmwZXC7rnKr01qgSOV95rbXK2L1TEMehmLQn2uQeV3l5MSEVBsQjRfLYyfo3XBxRUsb8SnScIgk98euNGXDW3nBYvKlhhWx10rDmuT05%2FdOErzbgcIfkYXeH5yEx2fdnh3cnf1Rz4M1FCTKRRjT4VC7MXW7DKvQ5eGevx6AW4A%2FfLofXieIJZ6rc3HSnrYtMf3Jkh0kkoQICGZUFuDCBZC0U3VxLXNKprPcU6t0CO7gfQvNSv5l9IC8II9PyaNsQaxIZtOUrw7yuccNdRlUL0sIKyTvC3mbndxq%2FZxsiEJppAxq3Is%2BprWj73B4P9%2BImhqf0ViIJU1oVtV8K4YSdFYhTIVCCoScCixbnr2rPFKZiMvRds%2B0cphMYR0pQ8rMa1L37aNyECf0RNcRF5OQ60WpDYQzKI8LxL8wDGS2jKIvSdHp9W%2F7QmWpzUl3LZ3an%2Be5sbWRcwmRnVl87IAklwVemMxnuiXqDppJelLitb4jFQ1pz7IHs2Tczx4Lluz3MMbOh8QGOqUBucrX3znofVGby696KvSZbW%2Fz8FHZ29VG1gbvNzdnisYOEO32eh6Q1se01ZJhGQEXfu0K37pVMCpi3Ok9HBXdJzxSYPOMOwD5krDITUdNu4K0rVasLNtxxIqMuinH3PBzoSBxtgEWJcwzWWwbzjm0R6hEwArXHFxVf0AputBojiIN%2BHN9NB1iXiAYMg5CyARmdeAuvmEG%2BvO49jC8u1nsrryCqXF%2B&X-Amz-Signature=31fa230c55d06e010e4c8e973e797b0d46b48ab5574a15ffd079b00a2664395b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=ONcFKXoJ7uQ&t=323s)

🔗 [https://leehc257.tistory.com/](https://leehc257.tistory.com/)

🔗 [https://itlearningcenter.tistory.com/entry/【1804-LTS】VIM-Plug-in-설치하기](https://itlearningcenter.tistory.com/entry/【1804-LTS】VIM-Plug-in-설치하기)

### 설치방법 (둘 중 하나 선택)

```latex
choco install neovim
```

```latex
scoop install neovim
```

### Windows 에서 init.vim 설정하는법

```latex
cd %APPDATA%
```

```latex
mkdir nvim
cd nvim
```

```latex
nvim init.txt
```

> 💡 **이후 설정은 알아서~**

### Debian 계열 에서 init.vim 설정하는법

🔗 [https://velog.io/@mythos/Linux-neovim-설정-CoC-Vim-Plug-treesitter-NERDTree](https://velog.io/@mythos/Linux-neovim-설정-CoC-Vim-Plug-treesitter-NERDTree)

🔗 [https://ton-ton.tistory.com/90](https://ton-ton.tistory.com/90)

🔗 [https://agvim.wordpress.com/2017/09/05/vim-plugins-100/](https://agvim.wordpress.com/2017/09/05/vim-plugins-100/)

🔗 [https://johngrib.github.io/wiki/vim/coc-nvim/](https://johngrib.github.io/wiki/vim/coc-nvim/)

Vim 플러그인은 다음 명령어로 일단 설치가능함

```scala
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

위와 같이 terminal에 입력하시면 home 디렉터리 밑에 .local 디렉터리 밑에 share라는 디렉터리에 plug.vim이 다운되어 위치하게 됩니다. 그 이후에는. vimrc파일이나 init.vim 파일을 설정하셔서 plugin을 설치하시면 됩니다.

```bash
mkdir ~/.config/nvim
touch ~/.config/nvim/init.vim
```

NeoVim을 이용하시는 경우는 ~/.config/nvim 으로 가시면 init.vim 파일이 있을 텐데 그 파일에 아래의 코드를 일단 추가합니다.

```scala
call plug#begin('~/.vim/plugged')

"이 곳에 원하는 플러그인들을 넣어주면 됩니다.
call plug#end()
```


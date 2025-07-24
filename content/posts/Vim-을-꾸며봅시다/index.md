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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6R3UEM3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzb%2FB4qMjsb5jpqu4tmDBgc5NAnmpL0zT9jvs9Vg2UNwIgIulR5OHHG9m41BRDERZ9KjB5EXkHvz%2FHGu%2BnYu8c1Rwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPVMkt78dPAH9q4ELCrcAwztY7S%2FuN0ZZAifD549nX6ImA8Vu1XrzP2ZAJ%2FYlYPQK8ToRzCxpisW70AfUeY%2FH%2BJjCwyW67ROfkcwEomgYYTpJ8JgqwM8nTxduTeavnpMQavNQQ6hQe3iKX0gluyYP5nw4C%2FUPXwHWbWNq0kdIFVan7Vlf8IdLd1c2GHJp3sMInO%2BBPjkerkfaZU6VY6Snvxo4X3nBy%2BYZyw%2Bi22Z4WS%2FBdUzBnSz2M6c%2BhToV5USNp3MXYs7uiccpyUbu1Shpn5LHgvkugY06XOFl6QZmovVugc115kj1C8InL7sxweMfBCtpi7D%2FjUx%2FiL5H9AlSIUYmyQdd0m2vHGfuX1xgcqi47B0M1ZcYtHO1%2FTKQd4TUPj71GMxDYMwRD6sna%2BocjRQgbyvr2j315CHb3Ck8H%2BOnQ2TiM927HELdd8iRPgnpXlXrIqVarmaeLpwPA%2BMi2daFMJFfK2HdYsC%2FKCLbLE9Fu6LwrU8vuD0W8c29LcYVSud1zMAUfNuf6xhmF5RTAjdfowvXs317lCtPTXXTF6P2D8V023%2F9cgmJBltTrF3f%2B2ox%2B8e%2FdOD3g0q3QJ3YAW0F8YqT%2FVwOPNZy5oDXQEN13QocgxtcN5iS%2Fd1JXiFmmeeKNNkD3HeRyJQMJL1h8QGOqUBe5FKvsdjnTGsf54IhO1UOz1k%2BgKy3GTlGddKqxsTxaXUakefMQ6fnGVbWNDZDcWWY0ucCKDe1wzCFtdwF%2FXK11nSQQgeh9WvuBpnSHSSb4GUE1qBnrQiO0Kg5CstL7g2nBVx%2BqUgtGa0vWpwBq8e5zux5UoUl%2FeQ7ZAvn7sw0bUzJRioK%2FQnLUBEpSKcRhoBlkvv%2FW%2F6%2BQ3R0495ix88cKt8ZdW6&X-Amz-Signature=6c58f5a02853d21284d9ef98c51772eb028630c6817d8c8335d3d3654598f1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
> ```latex
> set number
> set relativenumber
> set mouse=a
> ```
>
>

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


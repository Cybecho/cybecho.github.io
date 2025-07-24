---
title: "Vim 을 꾸며봅시다"
date: 2024-04-18T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "Vim을 설치하고 설정하는 방법에 대한 안내로, Windows와 Debian 계열에서 init.vim 파일을 설정하는 방법, 추천 플러그인, 그리고 자동완성 기능을 위한 CoC 설치 방법을 포함하고 있습니다. 플러그인은 vimrc 파일이나 init.vim 파일을 통해 관리할 수 있습니다."
notion_id: "8cfdb875-ba1f-4b0c-bd55-d2d5f1f4d9db"
notion_url: "https://www.notion.so/Vim-8cfdb875ba1f4b0cbd55d2d5f1f4d9db"
---

# Vim 을 꾸며봅시다

> **Summary**
> Vim을 설치하고 설정하는 방법에 대한 안내로, Windows와 Debian 계열에서 init.vim 파일을 설정하는 방법, 추천 플러그인, 그리고 자동완성 기능을 위한 CoC 설치 방법을 포함하고 있습니다. 플러그인은 vimrc 파일이나 init.vim 파일을 통해 관리할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBUJI66%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDJSjTiNrG%2FuVK5R4LWK5AnXckPOWwgnNvTV7WtKsVLVwIge75f99hYX0fcFo3AoxAYM9KWo5FvaZML70fnxkqIw0wq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGO4F8BZp0QqXeVUVCrcA6rytqkogxFswm%2F2mAJ4ZgsYaJV8v4xFP5wRIgViU1Pt%2Byp%2FSRKvvh%2FdL2cJHH5bNT1ohih1FR0Svyx%2FYef953OiuUkyvq%2F3KewMw2nm8wqwLuy8k2JH5I7Ab93eBh49WjajhdDESge807zo0rszjq3H%2F4Hw01GHJ97Auqfc2%2F0QpwORjbr%2ForG1VFd9E3OD%2FjC4gL4bmt89HsyPOWGF9PA91raqL62%2FM0WmDF8iA9iJuxzksQgnviLlGV9wUD8oNzo595Gdw8IwO0BBKl1jSrsKMAoi%2BtFwCJezYjeN7yyEqfGwjSqwoQMdFtUUgnrSfkLjcyta6gsWSj4eLzjxV97tC%2FUAse01WgXOSEoU3ZNme5yzuH5SXhMEKGvuoa8%2F9OsP8kJu%2FbuNjyeC22CwxxXJHqWts76Pai1ib83sPQwLaW8J8PKQZhIb1ru0Aib9EBXe7Xe%2BFA9xiMx1MPDddjs%2FbLl1Prxx6cQJGWxM8GfCMljLvhWPijr9UKjIbWynjgFRoteufzyzok7hK118gxZefXB9JJ03LJXj3dBq8fGQcgV9E1tcTtH%2B5dNrPKTtYo7gLSrMenoEcyBpde9ExDBWDO%2B38gZVYUVzMsPO0cPxOSOpa26bu8llJ3sYMOKbiMQGOqUByhAmd%2FexNM1DbWHF%2F%2BzKfZoYDhwZNJAwX4WvgWlbOVpW%2BeCRrHmio%2B67fSYjCKVAg5Yri2fH2S%2F6eVCH9RZlAl65WZTn0edi9YNQ2Uk8dF8iGxf5RrQ%2FrIUPBTvPnH1IiGLJmJYlPZvHZMPyCalmsd%2FQXJam0fOFMD6VytdJjJ3FONM8VXvTttFJNuI0MiXxIhLOqUXk85vP3mT8AWVtls7njfqN&X-Amz-Signature=f39a96de89729a91772abb6da56d24962d45677dcaef69f4e1299a73ea09048f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


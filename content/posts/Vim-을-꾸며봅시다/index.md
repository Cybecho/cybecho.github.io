---
title: "Vim 을 꾸며봅시다"
date: 2024-04-18T08:10:00.000Z
draft: false
tags: ["WINDOWS","ubuntu","Debian"]
series: ["Let's Linux!"]
description: "Vim을 설치하고 설정하는 방법에 대한 안내로, Windows와 Debian 계열에서 init.vim 파일을 설정하는 방법, 추천 플러그인, 그리고 자동완성 기능을 위한 CoC 설치 방법을 포함하고 있습니다. 플러그인은 vimrc 파일이나 init.vim 파일을 통해 관리할 수 있습니다."
featured_image: "image_a45b11e45978.png"
notion_id: "8cfdb875-ba1f-4b0c-bd55-d2d5f1f4d9db"
---

# Vim 을 꾸며봅시다

> **Summary**
> Vim을 설치하고 설정하는 방법에 대한 안내로, Windows와 Debian 계열에서 init.vim 파일을 설정하는 방법, 추천 플러그인, 그리고 자동완성 기능을 위한 CoC 설치 방법을 포함하고 있습니다. 플러그인은 vimrc 파일이나 init.vim 파일을 통해 관리할 수 있습니다.

---

![Image](image_a45b11e45978.png)

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


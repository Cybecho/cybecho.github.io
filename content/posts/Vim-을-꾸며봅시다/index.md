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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6QWE3X%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGOPIo%2F39dAOmOCMek5EBqMHWhZZu4jgRxKSG2tFvp%2B4AiEA3nHRi%2FNFxNexBwxbKmK0IXPp1LpQfFweFgeUONu8ykAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEXew9F5juR4X9nX7CrcA4HWGxy7Fy7KOco%2FjbB%2FkrOW5C18GsGShCxthLXClYF11PqGZVxG%2Fb2pngFQlqmX89nYz1huVROFF3X5%2B0W2Z9HE%2B0LZzAzZ94FBK90INkBLLa3igq0WB4%2BkJQGKav6h7VKVN%2Fgpbg4mo%2FTzr7%2BS6K1jOZgU8i1VMEiEi8Q01mUmyTdCe8V4qxer4waTdTioUw3eZg7O7zpHHUY%2FhxkU7ULjkrwY73rgVFc%2FjBoX9cRBf%2BoRYKQOwHJNM6%2Bd7PbdtXMDvvh57aO1MQ4mHX21ROYh5XZxM0U3NqJsv7NCRXDKAtTlCcYArKswzRd6diibBGU75aE%2FHf0%2FpjKPNmEjA6ZCjvmwC3deumxcH9vPIKepQtKdNIYDOLz%2F7%2BV%2B70NcW%2FrPloVUqIU1e%2BKCLBxXB%2FviL35VnTWMG2demqhwEbslfAljruaTgl12P%2BHtTDFmsFJup93SUy3rMLGXmkHbg1MQL6PDnT3IZ1mlJ5iFW%2FNK%2BLQ2%2BE7L6Pi9eRxizfdM6EeMMxPK87iNAw%2BBqbHOiO2aOA3d9A2EFDC%2FMPQoLG%2FDGTFcicdClFyTVcPje%2F7f0ISTv9rw4TN1BbMNc8FNzB65Epo3KjjG8h5RfOjeoYewLvbEuIM59romk4OKMPPOh8QGOqUB2rM1HOEHZfekS%2FZeXoo2AnoLBDjibXkYmeRDvhbcLiSMpYShxwV%2FJ0rqBkas1SHauxwt54cSnHlh6Krh4%2B1eAAQztMBWtb7Qpzmfc0ARsnXDcO6dsFjiy802jyCZmsPtkgD4kX30GuJ2XE0vIwOzG6WSaZxdvi9MN9Z%2FUaDb%2FGzpUuhYh0yTNBM8c4IlhXFekkkukk1o%2B3LRTREdG6wBfv89JE5j&X-Amz-Signature=22cccd8d8bc665819367e8c536a4af52290044fb7b91671a49dba4d0e601fad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


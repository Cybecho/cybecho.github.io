---
title: "Firefox shyfox 테마 적용하기"
date: 2024-06-22T14:20:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Tips"]
description: "Firefox shyfox 테마 설치 방법은 GitHub 링크를 따라 기본 프로필 디렉토리에 필요한 파일을 넣는 것이며, 배경 이미지는 wallpaper.png로 이름을 변경하여 chrome 폴더에 넣어야 합니다. 또한, floating 검색창 기능은 userChrome.css에서 해당 줄을 제거하여 비활성화할 수 있습니다."
notion_id: "0a766503-311c-4566-b280-3f8adfe8c9e0"
notion_url: "https://www.notion.so/Firefox-shyfox-0a766503311c4566b2803f8adfe8c9e0"
---

# Firefox shyfox 테마 적용하기

> **Summary**
> Firefox shyfox 테마 설치 방법은 GitHub 링크를 따라 기본 프로필 디렉토리에 필요한 파일을 넣는 것이며, 배경 이미지는 wallpaper.png로 이름을 변경하여 chrome 폴더에 넣어야 합니다. 또한, floating 검색창 기능은 userChrome.css에서 해당 줄을 제거하여 비활성화할 수 있습니다.

---

![Image](image_a7fd93acc0e0.png)

# 설치방법

> 💡 **기본적으로 이 링크만 따라해주면 된다**
> ---
>
> [https://github.com/Naezr/ShyFox?tab=readme-ov-file](https://github.com/Naezr/ShyFox?tab=readme-ov-file)
>
>

> 💡 **해당 디렉토리 안 여러개의 프로필이 존재하는데, 이중에서 해당되는 프로필에다가 `profile `디렉토리와 `user.json`을 넣으면 된다…**
> ```latex
> C:\Users\SBU\AppData\Roaming\Mozilla\Firefox\Profiles
> ```
>
> ```latex
> /home/사용자이름/.mozilla/firefox/
> ```
>
> ```latex
> ~/Library/Application Support/Firefox/Profiles
> ```
>
>

# 배경 이미지 수정 방법

```latex
Rename your picture to wallpaper.png and put it into chrome folder.

This information can be found in the README on GitHub.
```

# floating 검색창 기능 끄기

```latex
Go to userChrome.css and remove line with import shy-floating-search.css
```

![Image](image_b6615e055070.png)


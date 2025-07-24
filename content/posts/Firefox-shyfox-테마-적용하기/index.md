---
title: "Firefox shyfox 테마 적용하기"
date: 2024-06-22T14:20:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Tips"]
description: "Firefox shyfox 테마를 설치하려면 GitHub 링크를 따라가고, 프로필 디렉토리에 필요한 파일을 넣어야 합니다. 배경 이미지는 wallpaper.png로 이름을 바꿔 chrome 폴더에 넣고, floating 검색창 기능은 userChrome.css에서 관련 라인을 제거하여 끌 수 있습니다."
notion_id: "0a766503-311c-4566-b280-3f8adfe8c9e0"
notion_url: "https://www.notion.so/Firefox-shyfox-0a766503311c4566b2803f8adfe8c9e0"
---

# Firefox shyfox 테마 적용하기

> **Summary**
> Firefox shyfox 테마를 설치하려면 GitHub 링크를 따라가고, 프로필 디렉토리에 필요한 파일을 넣어야 합니다. 배경 이미지는 wallpaper.png로 이름을 바꿔 chrome 폴더에 넣고, floating 검색창 기능은 userChrome.css에서 관련 라인을 제거하여 끌 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/343016b8-482e-4e8f-966e-d76f9774b3b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZONWDLHN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfGMVr3IK6mOsH%2B6MBjmVgRQBvyW31GaAx0k0Pf5TGLAIhAIY0jq9zMt6alp0%2B5U3WiiGLLmnIqp5GLZqd7odFX2RaKv8DCCsQABoMNjM3NDIzMTgzODA1IgxItN1THheoJGMFM60q3AO66FiPLIBtJSqmDOnnvFFupMjaFtuykMCsvnsG0vnU1UimnG%2F9lh%2F1p2wmBddStgcRPrZ2eTE2%2FEb7O7dquKwXifDy8e%2Blw%2FO3jZpucO%2BBMCTwsEV8cruo4pzF%2B0MKvk5mTnLbqOxGB9dVVEPozqoNdHQKh2wnDvVmRFKJnM5iEnrdxc5pH36mPhEY5k9IoKxd0vXxVwXEXjNa0i1zc8lffFwFYqUcsV9gZhDzsi7y1dSNaA9fv2YSSRSfDaIR46I7cpFNvFODMIyCtRQrz%2BuoKA48rliVmiGgz0Nwd4vQQFMOq%2FQFNfm1hocI1PaIJEKi6ESoOtRHTgFCMkP1Zpn2Vjgs7jD5M6faFncjTK3TB8B5RiveDFagFFiGI%2Bkt5rFCOtqWpT%2F7eHH%2F%2FbiBuxYMmiqbvEoDpl8GxpiAb3r%2Bls4tMIGD%2F1qSn4aGM62yC%2B7Qfg%2BCy10BchYyvPAsZkaaWXBy40ZAmABq%2FWiGLIv5lXIyyvMwOSAUiv%2Bha%2FVAysbF0%2Bp%2BdBFo6VkioYrDFhg49DirY%2B5nKJePVI8p3iu3SRK96HbdilW5q6%2BXlYyDwAB%2FcCo4HHNI8RYEU5CZvR2MeYjVvWhltxHM%2BIbP0TmFKXBiqjoqXaRmYkboyDDj9ofEBjqkATD2G8TvvBwgTr2Un7tW%2Fr0ePlovsFX8gewLPSHnZhx%2BqwY%2BaiACoAUNwob%2BVUpohkuiyTQn%2F1PeIjpdE0U%2BOVJzXHcYS4dXFswOElEk7TTJCvtv3VrzNxSyKks98mQ4PiPkmNGGADSZvMrAUGCudj%2B91DQGvMlcbEZAOhYUvGiyl%2FA3pDMLLysFH7BR%2F7wEMdqfkUMF%2BmWDfujwRuFBhrluB0i4&X-Amz-Signature=4540f2c38961e3312a6020943d4b3438c3b48c66c410f4021811e4ea92124514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8061d96a-d085-485b-9c72-e47509c24397/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZONWDLHN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDfGMVr3IK6mOsH%2B6MBjmVgRQBvyW31GaAx0k0Pf5TGLAIhAIY0jq9zMt6alp0%2B5U3WiiGLLmnIqp5GLZqd7odFX2RaKv8DCCsQABoMNjM3NDIzMTgzODA1IgxItN1THheoJGMFM60q3AO66FiPLIBtJSqmDOnnvFFupMjaFtuykMCsvnsG0vnU1UimnG%2F9lh%2F1p2wmBddStgcRPrZ2eTE2%2FEb7O7dquKwXifDy8e%2Blw%2FO3jZpucO%2BBMCTwsEV8cruo4pzF%2B0MKvk5mTnLbqOxGB9dVVEPozqoNdHQKh2wnDvVmRFKJnM5iEnrdxc5pH36mPhEY5k9IoKxd0vXxVwXEXjNa0i1zc8lffFwFYqUcsV9gZhDzsi7y1dSNaA9fv2YSSRSfDaIR46I7cpFNvFODMIyCtRQrz%2BuoKA48rliVmiGgz0Nwd4vQQFMOq%2FQFNfm1hocI1PaIJEKi6ESoOtRHTgFCMkP1Zpn2Vjgs7jD5M6faFncjTK3TB8B5RiveDFagFFiGI%2Bkt5rFCOtqWpT%2F7eHH%2F%2FbiBuxYMmiqbvEoDpl8GxpiAb3r%2Bls4tMIGD%2F1qSn4aGM62yC%2B7Qfg%2BCy10BchYyvPAsZkaaWXBy40ZAmABq%2FWiGLIv5lXIyyvMwOSAUiv%2Bha%2FVAysbF0%2Bp%2BdBFo6VkioYrDFhg49DirY%2B5nKJePVI8p3iu3SRK96HbdilW5q6%2BXlYyDwAB%2FcCo4HHNI8RYEU5CZvR2MeYjVvWhltxHM%2BIbP0TmFKXBiqjoqXaRmYkboyDDj9ofEBjqkATD2G8TvvBwgTr2Un7tW%2Fr0ePlovsFX8gewLPSHnZhx%2BqwY%2BaiACoAUNwob%2BVUpohkuiyTQn%2F1PeIjpdE0U%2BOVJzXHcYS4dXFswOElEk7TTJCvtv3VrzNxSyKks98mQ4PiPkmNGGADSZvMrAUGCudj%2B91DQGvMlcbEZAOhYUvGiyl%2FA3pDMLLysFH7BR%2F7wEMdqfkUMF%2BmWDfujwRuFBhrluB0i4&X-Amz-Signature=9ff811152029e0c25618953004b52c2666f8f5ed64cb48322b7ab8ab01b8586e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


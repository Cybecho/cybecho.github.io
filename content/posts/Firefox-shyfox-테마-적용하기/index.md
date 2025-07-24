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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/343016b8-482e-4e8f-966e-d76f9774b3b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2MKRH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBsGqXTf1m1dri3P1isNEsSqbS%2BisJUJm2XereVWmbI%2FAiEAjTKzbj4S5hVSMZ7vq5RNBVjhgqmC6j5karc6YtkaX4kq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEqDf2N9d0gB3thddircA%2FMy6b1QoZL%2B7UPZ%2BTzp%2FXu%2F7pZqLJqh1Otn%2BVhz2ibB%2FcV42MzbgyE9iPBXnrWlSYVH%2FWxyHwc2ZhwQwW7QJcgVOwrvF%2BZsDoaHR26KhauCYj1l80d38khwKlxS2J76dbUMEUkS1aURRKPVf2fveQVeSA6Uk%2FniVJfEh8tsl7pB70JnXnD4WtykG3wOwkeWFfVr9bE5b8WaSXh9bDgdajVeRMnqCuE8PMDchOhG9z3kCVjYRAYMzbI4MfqyxJ8LkBs6A1BIZstWAMQ93yxXBQI5xb9OiFxURPNK0x3I5ICmt%2BJXGnavTTRjEG4AcI2YG0YBPYTbGwcz9%2B5LDOPBS%2BhmyxkMk212dN5dn9vbAiIC0%2F5NqTwguRxyRQ6V5A9PrBwEmmcA9g0UzttTxCh1qnBaVhDbqPImha7pRkpnU398hEQphzJfEEImDPnEyFPXkSY1Ni2I9mdrTvP3a53mUUso4eArZRGbm8nCuVafAmLwJqh0xWm0h%2BLn1XxUSKnoH8NwLUwuUWveeqs%2BQ5q%2BF3PIMDbS%2BNiOd6MYUycfhq50rkG%2FCqFl4Qcf%2B%2B5Jzv4fWKpDw5l6gJtenl4XONMoAHEqzIEsQdPq3JaUtXAxQOp1VmyI%2BTa%2B9cCOeX0gML%2BbiMQGOqUBt2eAjRPY4SHXu%2F%2FQT4C31%2BiaqSNtL2YhsUkaJGzMi3Md3%2BKjSVrFbhi4sboz7DfpPxpYTG1qoftchEO81ge1wsMsNKzK09VRSd9cPL6LDfDdZ9xDRRN3uj4br0b2AZjr7T4H57LVCKEeY1yD4KNkS4hkjBQ1CxzYTJDiX5kxMCZMuvzy90iPEYBzIXhlA7oVadWwXt68CAvmRq8Is7pKH2Jfo4yv&X-Amz-Signature=a59793a99bd0f3a65805804fd4f320240cb2a0c311dcf4f138f4b94435b5b180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8061d96a-d085-485b-9c72-e47509c24397/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2MKRH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBsGqXTf1m1dri3P1isNEsSqbS%2BisJUJm2XereVWmbI%2FAiEAjTKzbj4S5hVSMZ7vq5RNBVjhgqmC6j5karc6YtkaX4kq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEqDf2N9d0gB3thddircA%2FMy6b1QoZL%2B7UPZ%2BTzp%2FXu%2F7pZqLJqh1Otn%2BVhz2ibB%2FcV42MzbgyE9iPBXnrWlSYVH%2FWxyHwc2ZhwQwW7QJcgVOwrvF%2BZsDoaHR26KhauCYj1l80d38khwKlxS2J76dbUMEUkS1aURRKPVf2fveQVeSA6Uk%2FniVJfEh8tsl7pB70JnXnD4WtykG3wOwkeWFfVr9bE5b8WaSXh9bDgdajVeRMnqCuE8PMDchOhG9z3kCVjYRAYMzbI4MfqyxJ8LkBs6A1BIZstWAMQ93yxXBQI5xb9OiFxURPNK0x3I5ICmt%2BJXGnavTTRjEG4AcI2YG0YBPYTbGwcz9%2B5LDOPBS%2BhmyxkMk212dN5dn9vbAiIC0%2F5NqTwguRxyRQ6V5A9PrBwEmmcA9g0UzttTxCh1qnBaVhDbqPImha7pRkpnU398hEQphzJfEEImDPnEyFPXkSY1Ni2I9mdrTvP3a53mUUso4eArZRGbm8nCuVafAmLwJqh0xWm0h%2BLn1XxUSKnoH8NwLUwuUWveeqs%2BQ5q%2BF3PIMDbS%2BNiOd6MYUycfhq50rkG%2FCqFl4Qcf%2B%2B5Jzv4fWKpDw5l6gJtenl4XONMoAHEqzIEsQdPq3JaUtXAxQOp1VmyI%2BTa%2B9cCOeX0gML%2BbiMQGOqUBt2eAjRPY4SHXu%2F%2FQT4C31%2BiaqSNtL2YhsUkaJGzMi3Md3%2BKjSVrFbhi4sboz7DfpPxpYTG1qoftchEO81ge1wsMsNKzK09VRSd9cPL6LDfDdZ9xDRRN3uj4br0b2AZjr7T4H57LVCKEeY1yD4KNkS4hkjBQ1CxzYTJDiX5kxMCZMuvzy90iPEYBzIXhlA7oVadWwXt68CAvmRq8Is7pKH2Jfo4yv&X-Amz-Signature=19d46f2d6759639ee21ab06ae6c4a0768d5bc414fb8b9b900760275ba99be5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


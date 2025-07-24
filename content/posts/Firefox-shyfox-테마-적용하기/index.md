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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/343016b8-482e-4e8f-966e-d76f9774b3b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5QMPW3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAk5bkXGgXU9T0w48vKa%2BDcjnwauO2VrvV6LMmHK9WV7AiEAmzKTOes%2FR%2F4VCK7J6wUWMYV5hXtmTb3mkmmLXBMoWbcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPBij%2BpaVqiIX2GkZCrcA8QJKZ47IcK5TstD%2FWPEPqtDqtXooMCJPD9vUNdWlODJPzAy%2BYjM2wfJzm5OkUZnOeePJ0YQVdetBwzQvfkKTWBCNlt%2F57jIH8OwXtlRzAPzmz5%2BT9s5XemO0iaqLjfRbReqGQP%2B0x67HDPUISMVTERFQQj%2Bu%2FWkrh%2BcpBYeAeTgaI3ZvnA0m6PBwfCiE6WJpsxwxkJMNcX1rW%2BzhBZcnkTd%2FyoCGzyp77DM6dCaOAlPIQQ9TnTDjTcwxussrV%2BqCWftD%2FtfAN9S3T3X6URoFyhRIsK%2FwtD6SoreQFxH2Vs5rc5KSr%2Bs30pQih6o0N7GoIqyEbp02efAsccDRxF53hvvTgvc1BA6bowaStkMVZMHueo3tv%2BHiAwLB5yv5vE05entCtArIA8wpWNljr1xcTrWkZwATUpQdhY20hJ90TgZsC%2B2kSHGZ7zOkA%2FJKHQaE4C4A8ZjBaGM2yhUQdPN8edGMvkVXHR0DUBdGOQwNkhp%2Ff7MRR517rFewD0LI5cYTudpWJMTdL68eQL4E%2F6Sy6H3CAKTAB0nBpqwql47kBAlWlXxAmGwR8Ccr5KZKnpsadXiZbFqLFIzsfa%2BEC2SAYo%2Fs4b9m5GR0QCx5NKn43iJ1uDsTh%2FMPhiKQiIcMK%2FQh8QGOqUBoMyGd88AaTLvLpZd5rRaUadlARmCfvUyEgtCnFAL3FOi3QTEuZJaxDAmATSGzEBP9hdNO2kqgdZnpcQxad9a7FcnO5Ao%2BcyZvtUTTnNgHhelWYRXxe8k%2Bl7RZjUdX%2BHo%2FI%2FGMPMe3f5sS94yqZ596ZbjqrQ6gzK0BQzkcX%2BqIc60eH3QY%2FqzTfa%2FMtwg71Ta%2Bi%2FVQlfhmt3d29Lb7mTQQtZQ2K9M&X-Amz-Signature=419df2a1a9da900bd8ada4cb1c995634acc54ab12ba3863529d9fb857cc42018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 설치방법

> 💡 **기본적으로 이 링크만 따라해주면 된다**

> 💡 **해당 디렉토리 안 여러개의 프로필이 존재하는데, 이중에서 해당되는 프로필에다가 `profile `디렉토리와 `user.json`을 넣으면 된다…**

# 배경 이미지 수정 방법

```latex
Rename your picture to wallpaper.png and put it into chrome folder.

This information can be found in the README on GitHub.
```

# floating 검색창 기능 끄기

```latex
Go to userChrome.css and remove line with import shy-floating-search.css
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8061d96a-d085-485b-9c72-e47509c24397/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5QMPW3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAk5bkXGgXU9T0w48vKa%2BDcjnwauO2VrvV6LMmHK9WV7AiEAmzKTOes%2FR%2F4VCK7J6wUWMYV5hXtmTb3mkmmLXBMoWbcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPBij%2BpaVqiIX2GkZCrcA8QJKZ47IcK5TstD%2FWPEPqtDqtXooMCJPD9vUNdWlODJPzAy%2BYjM2wfJzm5OkUZnOeePJ0YQVdetBwzQvfkKTWBCNlt%2F57jIH8OwXtlRzAPzmz5%2BT9s5XemO0iaqLjfRbReqGQP%2B0x67HDPUISMVTERFQQj%2Bu%2FWkrh%2BcpBYeAeTgaI3ZvnA0m6PBwfCiE6WJpsxwxkJMNcX1rW%2BzhBZcnkTd%2FyoCGzyp77DM6dCaOAlPIQQ9TnTDjTcwxussrV%2BqCWftD%2FtfAN9S3T3X6URoFyhRIsK%2FwtD6SoreQFxH2Vs5rc5KSr%2Bs30pQih6o0N7GoIqyEbp02efAsccDRxF53hvvTgvc1BA6bowaStkMVZMHueo3tv%2BHiAwLB5yv5vE05entCtArIA8wpWNljr1xcTrWkZwATUpQdhY20hJ90TgZsC%2B2kSHGZ7zOkA%2FJKHQaE4C4A8ZjBaGM2yhUQdPN8edGMvkVXHR0DUBdGOQwNkhp%2Ff7MRR517rFewD0LI5cYTudpWJMTdL68eQL4E%2F6Sy6H3CAKTAB0nBpqwql47kBAlWlXxAmGwR8Ccr5KZKnpsadXiZbFqLFIzsfa%2BEC2SAYo%2Fs4b9m5GR0QCx5NKn43iJ1uDsTh%2FMPhiKQiIcMK%2FQh8QGOqUBoMyGd88AaTLvLpZd5rRaUadlARmCfvUyEgtCnFAL3FOi3QTEuZJaxDAmATSGzEBP9hdNO2kqgdZnpcQxad9a7FcnO5Ao%2BcyZvtUTTnNgHhelWYRXxe8k%2Bl7RZjUdX%2BHo%2FI%2FGMPMe3f5sS94yqZ596ZbjqrQ6gzK0BQzkcX%2BqIc60eH3QY%2FqzTfa%2FMtwg71Ta%2Bi%2FVQlfhmt3d29Lb7mTQQtZQ2K9M&X-Amz-Signature=f606f5e9fc0c316a70bcc2e0c81cbca9ee7131e01856f370b5b67937c33d6167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


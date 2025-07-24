---
title: "cursor 완전삭제"
date: 2024-04-06T14:09:00.000Z
draft: false
tags: ["Other"]
series: ["개발환경"]
description: "VS Code에서 cursor를 사용 중일 때 WSL2에서 발생하는 문제를 해결하기 위해 cursor를 완전히 삭제하고 특정 디렉토리를 비워야 한다. 또한, cursor의 문제를 해결하기 위해 제공된 코드를 복사하여 지정된 디렉토리의 cursor를 대체해야 한다."
notion_id: "04331296-b3eb-46a6-a516-2085118c1cd1"
notion_url: "https://www.notion.so/cursor-04331296b3eb46a6a5162085118c1cd1"
---

# cursor 완전삭제

> **Summary**
> VS Code에서 cursor를 사용 중일 때 WSL2에서 발생하는 문제를 해결하기 위해 cursor를 완전히 삭제하고 특정 디렉토리를 비워야 한다. 또한, cursor의 문제를 해결하기 위해 제공된 코드를 복사하여 지정된 디렉토리의 cursor를 대체해야 한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9295a3dd-2bdd-4a25-a346-38e04743cb83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AX7HPZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICIAHzrly4iYuwnb%2FhGK7Ax07DtDLG7uUFatV4ApwkElAiAVg%2Fl5%2FFEHEpGpgfYU8wnaH6ln0mwLebgE40ZT1U7NOir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMvNSHnzxu%2B0EMXulfKtwDtLrn5DulxdHraCShfS69Nj5euamuPvqVj2NzRMJNN1E%2BclnkAIH7QkgnYHBCpw1fYF%2BdBgxdQ5FPwDFltPovqy2uMxYoavhlmMk6VMvp%2B5XDX3An8XxZIZuZUgteuFrXawFGRbjitk9FnVkdc%2B%2Fr3%2B79Q1V1X3bjH8OX%2Fg5FenHf6TAiCAlN6%2BMOl%2BnZnHQ%2FRCX2A2PTQ6SbbvuEZy7YwLZLj0Stew6Ugz5qsrk8oZCqG6e7PImylRMnq2JHTEytgfP9%2BuzBjk%2FZa9XLYDHiPSfGsopcBXViHjd6IKnqRCEwsvrf52oUq4JBcBp%2B4hWU8ysXBWz0z0M6o8H9BO4ULHMt1YGnw2bAFvaF2n2hUBqSbQill6qeUIEcHoRVuaZ1IWVs8cVCh%2BIqFLjeIQObbmSH9d8i2XzG5CZvpXiKpZullDFnuchvSRcaGxiYzqzfEChp2fk0xYlVHt5OZinsOdV5wvsZFJcofg9F0qWioJR2Hg5BHGXhYAlGjJEu97ewaqKbx%2FeVqskvDg2TslrP1RbU9MRDyyfENZiRUpzqKeCAPXwQSUgF783fcU%2FoNl8tZDDfAV0faFkJXLL%2BCmIQszVhsVq2yxQtcxuM%2Ftrp3is65B7AUw0tP97m3dMwhdCHxAY6pgHzuXTMG3LFkiSAG%2Fbc51mQb8CW42wJQBft4xzcRZaTnGnt%2FyHhb%2Br0Uci8fHtSjsh8loSIjX2Spbbp%2F7Oq7t6S2zMlMlcmrLGHYWyR98IE1hgbo481jxcPfFJqZd7qPaQSB4jCM9SaKodvVYpXgVml9YYAEaPuG351pewh5SdtE12uq6ChjjSYF8014VITVE2DRLBPC2dBP7eo8lTyIEaPEXVXkuJy&X-Amz-Signature=50fd3628ff4834d2472b269a2a08c35f899b6f133ffbfd6f98f6e2461ecbff37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

힙스터 병이 있어서 잘 돌아가는 vs code 냅두고 cursor 사용중인데,


wsl2을 통한 ubuntu에서 vscode를 실행할일이 있을때 곤란한 상황이 펼쳐지곤 한다


cursor를 지우면 깔끔하게 해결되는 문제지만…. cursor를 안쓸 순 없는걸=…


최초 cursor 설정때 cursor 커맨드를 code 커맨드로도 대체하는 속성이 있는데, 멋도 모르고 내가 그걸 체크해버려서 지웠다 깔아도 해당 옵션이 유지되었다…


### 일단 프로그램 추가 제거에서 cursor를 삭제하자

### 그리고 아래 디렉토리들을 전부 비워주면 된다

```c++
C:\Users\SBU\AppData\Roaming\Cursor
```

```c++
C:\Users\SBU\AppData\Local\Programs\cursor
```

```c++
C:\Users\SBU\AppData\Local\cursor-updater
```

# WSL2 cursor 문제 해결

🔗 [https://github.com/getcursor/cursor/issues/807](https://github.com/getcursor/cursor/issues/807)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e6821acc-4bad-4910-b1d3-a4117ae01990/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AX7HPZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICIAHzrly4iYuwnb%2FhGK7Ax07DtDLG7uUFatV4ApwkElAiAVg%2Fl5%2FFEHEpGpgfYU8wnaH6ln0mwLebgE40ZT1U7NOir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMvNSHnzxu%2B0EMXulfKtwDtLrn5DulxdHraCShfS69Nj5euamuPvqVj2NzRMJNN1E%2BclnkAIH7QkgnYHBCpw1fYF%2BdBgxdQ5FPwDFltPovqy2uMxYoavhlmMk6VMvp%2B5XDX3An8XxZIZuZUgteuFrXawFGRbjitk9FnVkdc%2B%2Fr3%2B79Q1V1X3bjH8OX%2Fg5FenHf6TAiCAlN6%2BMOl%2BnZnHQ%2FRCX2A2PTQ6SbbvuEZy7YwLZLj0Stew6Ugz5qsrk8oZCqG6e7PImylRMnq2JHTEytgfP9%2BuzBjk%2FZa9XLYDHiPSfGsopcBXViHjd6IKnqRCEwsvrf52oUq4JBcBp%2B4hWU8ysXBWz0z0M6o8H9BO4ULHMt1YGnw2bAFvaF2n2hUBqSbQill6qeUIEcHoRVuaZ1IWVs8cVCh%2BIqFLjeIQObbmSH9d8i2XzG5CZvpXiKpZullDFnuchvSRcaGxiYzqzfEChp2fk0xYlVHt5OZinsOdV5wvsZFJcofg9F0qWioJR2Hg5BHGXhYAlGjJEu97ewaqKbx%2FeVqskvDg2TslrP1RbU9MRDyyfENZiRUpzqKeCAPXwQSUgF783fcU%2FoNl8tZDDfAV0faFkJXLL%2BCmIQszVhsVq2yxQtcxuM%2Ftrp3is65B7AUw0tP97m3dMwhdCHxAY6pgHzuXTMG3LFkiSAG%2Fbc51mQb8CW42wJQBft4xzcRZaTnGnt%2FyHhb%2Br0Uci8fHtSjsh8loSIjX2Spbbp%2F7Oq7t6S2zMlMlcmrLGHYWyR98IE1hgbo481jxcPfFJqZd7qPaQSB4jCM9SaKodvVYpXgVml9YYAEaPuG351pewh5SdtE12uq6ChjjSYF8014VITVE2DRLBPC2dBP7eo8lTyIEaPEXVXkuJy&X-Amz-Signature=191cf313de7a93703291ca17b04a18e4622550e46d5b9476f806baaa15290b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

cursor . 했을때 위 문제 생김..


아래 코드를 복사하고 wsl2 기준 아래 디렉토리의 cursor 를 대체한다.

🔗 [https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394](https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394)

```c++
/mnt/c/Users/SBU/AppData/Local/Programs/cursor/resources/app/bin
```


그럼 이제 cursor . 하면 제대로 열림


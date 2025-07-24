---
title: "윈도우 파일탐색기 재시작 배치파일 제작"
date: 2023-10-15T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 파일 탐색기를 재시작하는 배치파일을 작성하는 방법을 설명합니다. 작업표시줄이 먹통이 될 때마다 작업관리자를 이용하는 대신, 배치파일을 통해 간편하게 재시작할 수 있도록 코드를 작성하고 단축키에 등록하는 방법을 제안합니다."
notion_id: "07583846-d650-4f69-aca2-588429d0405a"
notion_url: "https://www.notion.so/07583846d6504f69aca2588429d0405a"
---

# 윈도우 파일탐색기 재시작 배치파일 제작

> **Summary**
> 윈도우 파일 탐색기를 재시작하는 배치파일을 작성하는 방법을 설명합니다. 작업표시줄이 먹통이 될 때마다 작업관리자를 이용하는 대신, 배치파일을 통해 간편하게 재시작할 수 있도록 코드를 작성하고 단축키에 등록하는 방법을 제안합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c306dd15-3210-4f72-911f-0ccbaf6f4aa5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUYTFVC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCnHrY1%2FxctAk3r7cEQ6SKgXgyKNud74vb4UzXGbE%2FzMwIhAMrlvX2bOqeclD%2B%2FjUnlUoiVfn1ufn92%2F2hnN27xO9UaKv8DCCkQABoMNjM3NDIzMTgzODA1Igw2qzw0kHi%2FvH%2Bln80q3APrpNmAZd44b9tqo%2Bz4eZ%2F99pLotOxlKLG5Twi3axuyHsQvn5u21lGET24cAs4Lg9sk7rNtrCM9VY7vzoHgmwj5XqWpCVcMtzNZGfNjbwXEcwyb1AJLK0z8XbXKqUkyP9l40%2BoNjGUA0r8AHaYqfjFlKGeCIBYJ2niw7b796mRQ0L7u4NBRQoCcpErnfaIU2WhBTfKSZH7rzjycokQbleFT2G3W%2BbA86HEbRAhAN0E8oJNNcBcbh6JzAk81KaB%2BABvhb28WN6qdRz6fCPJY9x3QyLuQe33vU%2Ba%2FRxRE%2BiGb52%2BNdy5eWVMP0qkEODb3lqx8Jq%2BdeErU%2BWJuMV%2B7qNMf7R4Cv0F6V6%2BSoCjni%2BIDhBgqb%2FUZvRA2KAuZxdDXOcjyWVO2YbO2RHp5ojJq8JD7fpBSV%2FRZAhNNRX0UPp%2F8vGe2QYBleDLdJs5KnSWP9OntYmoVMx4EZH9QtEeq1%2FrWMVQegpEmsQ2OuicUseicvi0nT%2FDvRmUXlFiix%2BR1oqxGq9nFTuXtscF8s%2Fe0G64mdw1PmAF8%2Fu5fAUVGNA8C2RlE4iWYewfnL6fTkoXsxLWqBAaymuh734z2eer%2BB%2F%2FRq1E2ZcggrnxklN%2FxlYF%2FLwD1W6IvUNnsubL%2FkDC5z4fEBjqkAcpyCNOB6G4GYgWM%2B6omzufOeWbgkCd2cT%2FZinsP8FVzyp1FY5rTlB99dY1rLa2C%2BY1CcCQX5sX30v8sFIUgytVDv5Vf4rRZlKCbeVNN0W35LncN%2FSQf1jiCSyhYj7Ze6cVaG%2F3EfyDn%2BE%2F1aeJJ3NIZcIlqNFocbOXtuz%2B02rfMZstVCsUAOMbu3PYPfLvmapsdc16EGbq%2BcH5X9p8P%2B7D97ylN&X-Amz-Signature=d59f742787d81ec4a10b78a87272f45a520aab82a1c6303fd23b14690e6c2c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 wsl 추가이후로 참 좋은데…

이것저것 커스터마이징을 하다보니 작업표시줄이 먹통이 되는 경우가 가끔 있다.

맨날 작업관리자 들어가서 재시작하기도 귀찮아서 배치파일로 재시작 코드를 작성하여 단축키에 등록해보고자 한다

```powershell
@echo off

taskkill /f /im explorer.exe
start explorer.exe

exit
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUYTFVC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCnHrY1%2FxctAk3r7cEQ6SKgXgyKNud74vb4UzXGbE%2FzMwIhAMrlvX2bOqeclD%2B%2FjUnlUoiVfn1ufn92%2F2hnN27xO9UaKv8DCCkQABoMNjM3NDIzMTgzODA1Igw2qzw0kHi%2FvH%2Bln80q3APrpNmAZd44b9tqo%2Bz4eZ%2F99pLotOxlKLG5Twi3axuyHsQvn5u21lGET24cAs4Lg9sk7rNtrCM9VY7vzoHgmwj5XqWpCVcMtzNZGfNjbwXEcwyb1AJLK0z8XbXKqUkyP9l40%2BoNjGUA0r8AHaYqfjFlKGeCIBYJ2niw7b796mRQ0L7u4NBRQoCcpErnfaIU2WhBTfKSZH7rzjycokQbleFT2G3W%2BbA86HEbRAhAN0E8oJNNcBcbh6JzAk81KaB%2BABvhb28WN6qdRz6fCPJY9x3QyLuQe33vU%2Ba%2FRxRE%2BiGb52%2BNdy5eWVMP0qkEODb3lqx8Jq%2BdeErU%2BWJuMV%2B7qNMf7R4Cv0F6V6%2BSoCjni%2BIDhBgqb%2FUZvRA2KAuZxdDXOcjyWVO2YbO2RHp5ojJq8JD7fpBSV%2FRZAhNNRX0UPp%2F8vGe2QYBleDLdJs5KnSWP9OntYmoVMx4EZH9QtEeq1%2FrWMVQegpEmsQ2OuicUseicvi0nT%2FDvRmUXlFiix%2BR1oqxGq9nFTuXtscF8s%2Fe0G64mdw1PmAF8%2Fu5fAUVGNA8C2RlE4iWYewfnL6fTkoXsxLWqBAaymuh734z2eer%2BB%2F%2FRq1E2ZcggrnxklN%2FxlYF%2FLwD1W6IvUNnsubL%2FkDC5z4fEBjqkAcpyCNOB6G4GYgWM%2B6omzufOeWbgkCd2cT%2FZinsP8FVzyp1FY5rTlB99dY1rLa2C%2BY1CcCQX5sX30v8sFIUgytVDv5Vf4rRZlKCbeVNN0W35LncN%2FSQf1jiCSyhYj7Ze6cVaG%2F3EfyDn%2BE%2F1aeJJ3NIZcIlqNFocbOXtuz%2B02rfMZstVCsUAOMbu3PYPfLvmapsdc16EGbq%2BcH5X9p8P%2B7D97ylN&X-Amz-Signature=83c4976aaffaccb3dc38c2c3bada035f089e5d80f2f3bc8aeee38ffae627e3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**



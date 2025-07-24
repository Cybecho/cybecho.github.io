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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c306dd15-3210-4f72-911f-0ccbaf6f4aa5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTT5XNW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDyWAmMhYwAG%2BrImJYWoMMaeJMWC2ytCcE%2Fhk%2FcXwUKMAiEAlHnB92uo0QnCjbQhpkwZOU5B9Q5bEnvZOgNeBxVeX4kq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBn8%2BWycmchyYjMhGSrcA33v0fzGnFhDpFBdI7Fl4SSmXaec%2FF%2BSjBxhxMdc%2BOiWfKOlJ9pZ2WZTVwoqPy7yemLmxnUpOnFlpbwVkHu0M2ntA7WUp7286P3Z8BeUklP0Nb4UakjGwarvqSPLe1NpDmUFSuFU0UOR4ac5izgxbWTYfeINMOEPv6IAt%2BhVa2glGYQGhsApMneuueQPzV3NObciTjs0oFggNXvAOeqe7f8Ra8iq8GN9HM3woLCshfPiKce5gBeek78HcAKGOkWF27j5XblpZVwXYysDEWmahptw9yPZO32wi9mhVx5SZYS6R3bkWBkjZSPYVlXFoQtFYJSbCVFdvgA9gAUcp1r46cPXc10iwGZAhoFjBjLYFKwzc9lCqvYpGljjEiWAaaDa8t6F0iMIdm9Snkbu8NDguxdGQ%2Bv7idl4w%2FefBHjBXeJWH6Ez4Ja4lOaiK0affuTw%2FvCbK%2FtsOMgez3%2Bxf4OjzlfIayCWPGVGif4xIE3%2B3AmfCiNVgRWoXQsRIX9hDtyjv%2F%2BHKttKOn%2BuWYrtepOM%2BOnz38v3XWL7FzedIxAv8CwcWW7b6M9dOfPYZZ21jW0Kir9HZ5dl59QV%2FF8meEQrZ3iaPXjkcd5404RGY9p8kxBXlmu2XsJAfpE1qdJ%2FMJfQh8QGOqUBhd7OjzsnbOBYbNplzAnEsNyCiuPdtyDhe59BDwIdHmy2R3Pc2ONmsUYiSV0dN%2B7zW6Cq6zfWN5KB3hl92rK3jDhewDB2%2BJptgKbODpdw0BehWFtxrqi4WaTHZSbtLRUmNaKjAf9joT2uciEmxuFtcfccIlLT1g6%2Bc0nQhze2YXwtqird3l1jSzUMF5gl5x556wGPw6%2BYx6jIhiCh1YrnVrck3U2n&X-Amz-Signature=80f60a9f7b5c5445cb3c641f7e6e2c4208f1d5fd1e833780e92f22c7620f1043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 wsl 추가이후로 참 좋은데…

이것저것 커스터마이징을 하다보니 작업표시줄이 먹통이 되는 경우가 가끔 있다.

맨날 작업관리자 들어가서 재시작하기도 귀찮아서 배치파일로 재시작 코드를 작성하여 단축키에 등록해보고자 한다

```powershell
@echo off

taskkill /f /im explorer.exe
start explorer.exe

exit
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTT5XNW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDyWAmMhYwAG%2BrImJYWoMMaeJMWC2ytCcE%2Fhk%2FcXwUKMAiEAlHnB92uo0QnCjbQhpkwZOU5B9Q5bEnvZOgNeBxVeX4kq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBn8%2BWycmchyYjMhGSrcA33v0fzGnFhDpFBdI7Fl4SSmXaec%2FF%2BSjBxhxMdc%2BOiWfKOlJ9pZ2WZTVwoqPy7yemLmxnUpOnFlpbwVkHu0M2ntA7WUp7286P3Z8BeUklP0Nb4UakjGwarvqSPLe1NpDmUFSuFU0UOR4ac5izgxbWTYfeINMOEPv6IAt%2BhVa2glGYQGhsApMneuueQPzV3NObciTjs0oFggNXvAOeqe7f8Ra8iq8GN9HM3woLCshfPiKce5gBeek78HcAKGOkWF27j5XblpZVwXYysDEWmahptw9yPZO32wi9mhVx5SZYS6R3bkWBkjZSPYVlXFoQtFYJSbCVFdvgA9gAUcp1r46cPXc10iwGZAhoFjBjLYFKwzc9lCqvYpGljjEiWAaaDa8t6F0iMIdm9Snkbu8NDguxdGQ%2Bv7idl4w%2FefBHjBXeJWH6Ez4Ja4lOaiK0affuTw%2FvCbK%2FtsOMgez3%2Bxf4OjzlfIayCWPGVGif4xIE3%2B3AmfCiNVgRWoXQsRIX9hDtyjv%2F%2BHKttKOn%2BuWYrtepOM%2BOnz38v3XWL7FzedIxAv8CwcWW7b6M9dOfPYZZ21jW0Kir9HZ5dl59QV%2FF8meEQrZ3iaPXjkcd5404RGY9p8kxBXlmu2XsJAfpE1qdJ%2FMJfQh8QGOqUBhd7OjzsnbOBYbNplzAnEsNyCiuPdtyDhe59BDwIdHmy2R3Pc2ONmsUYiSV0dN%2B7zW6Cq6zfWN5KB3hl92rK3jDhewDB2%2BJptgKbODpdw0BehWFtxrqi4WaTHZSbtLRUmNaKjAf9joT2uciEmxuFtcfccIlLT1g6%2Bc0nQhze2YXwtqird3l1jSzUMF5gl5x556wGPw6%2BYx6jIhiCh1YrnVrck3U2n&X-Amz-Signature=41d1b0f35b1c6a98064133ab6f0b6b6a8cc23a808c2052444527333f96bb4781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**



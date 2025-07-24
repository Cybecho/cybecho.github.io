---
title: "레지스트리 적용 팝업 끄기"
date: 2023-11-19T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "레지스트리 편집기를 열고, 경로 HKEY_CURRENT_USER\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Policies\\\\System로 이동하여 ConfirmFileOperations 키를 찾거나 새로 만들고 값을 0으로 설정하면 레지스트리 파일 실행 시 팝업이 뜨지 않습니다. 배치파일을 사용하여 직접 설정할 수도 있습니다."
notion_id: "10b61f18-a525-41ca-934e-4b4d393f0aad"
notion_url: "https://www.notion.so/10b61f18a52541ca934e4b4d393f0aad"
---

# 레지스트리 적용 팝업 끄기

> **Summary**
> 레지스트리 편집기를 열고, 경로 HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System로 이동하여 ConfirmFileOperations 키를 찾거나 새로 만들고 값을 0으로 설정하면 레지스트리 파일 실행 시 팝업이 뜨지 않습니다. 배치파일을 사용하여 직접 설정할 수도 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPHJDUW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDDd6Bl7o1sJQo50nDk0nTbYef78%2FKunJenD4H6CQ4H9AiEA3Uy4ulEmIiFjVkLKNVqqJovIpEqLieFVQoxiNNrXq98q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKNAtV9aPaPGgVlYSyrcA%2BrOex%2BVXDjJLIvGexGsMCsrdDfDBQEQ6CXPTOLhENSI%2FA%2BaclocrKMWGCumMUGLiEXK7fDnkx84jgDHITjVUFF8qmOoXUzmwFhMLcOqIj501VECNBJvDvpVHD%2BoLsz%2Bp3R7YkMSwxIit3pcnQYf29lSNs5ZwADEnPzrGUfkyZdjD2kjWC7FZelFty1zvhr9V2TuWag6uc%2FJxn7c5V%2BiB6fjOtzFxJw%2BCZry5gdqJXH%2BFGkJUaUzj%2BifhSSoTBibH0iC3BSVhrzPpF6Yr3R6sFG4CVfGq7iNZsJ%2ByMl6oL6stpi0XW%2ByNMZS1xEz7K5zG%2BmNTCNtlE%2Bxi5EuoswFG1sSK7LR1KuW8oEEUvZV99k6x9eqp1YJjqxnww1ciYIUcavMeoqyhs6C2sUSU3d6lMDcg9towFAuvqId1OBfLEwMyDR6HgC7KnerscoIMzpWcZ%2FgZCDPY6wwkaEDqsMYMYdKOgW%2BjP9rMz7rHUF0d5KwNYXOAy5Pfb5J1DHPhPnXw1uTNIYwmRjFFxabazoyRPcOa4W5K3IuMewHZlG%2F8gZal13Pa87LAZbinBbJVXpTlOyR8j0Yr%2BaPKH5Q1Cy6BrsA6SEBwFWHVOWmX6X1PoLqhtDDOj4xR%2BxOUuIlMN7Oh8QGOqUBk%2BxC3H4%2Fc3QmM75%2FVZ7MdfGHN1oMhAfVDyGomuKtrLR8t0I9WyJn73C5zokJVA8DrDYrwf6ypFOk9Km4SUpaprlC9u7E8v3e3aZU4arE1NSD6%2BX5dUyQ%2FZ5gOaj5yuw0O5PnPteW1MjDjEotIeS5Mhnc47cIBhc%2F62khSmOuysGq79oWL6vJeGmE8i75DmSLjhwKGXjLMLyEvaHmlA6mTh6OeNvM&X-Amz-Signature=c7595493a64519ed5007984c6d525f697c60e5625ccb2956e3e0ddd40fadb170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 이거 쓰세요**

1. 레지스트리 편집기를 엽니다.
1. 다음 경로로 이동합니다.
1. **REG_DWORD** 형식의 **ConfirmFileOperations** 키를 찾습니다.
1. 키가 없으면 새로 만듭니다.
1. 키의 값을 **0**으로 설정합니다.
이렇게 하면 레지스트리 파일을 실행할 때 팝업이 뜨지 않습니다.



### 또는 다음과 같이 배치파일에서 직접 설정할 수도 있습니다.

```plain text
REG ADD "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v ConfirmFileOperations /t REG_DWORD /d 0 /f

```

위 명령어를 실행하면 레지스트리 파일을 실행할 때 팝업이 뜨지 않습니다.

참고로, **ConfirmFileOperations** 키의 값을 **1**로 설정하면 레지스트리 파일을 실행할 때마다 팝업이 뜨게 됩니다.


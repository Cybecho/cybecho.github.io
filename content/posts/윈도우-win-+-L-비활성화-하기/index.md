---
title: "윈도우 win + L 비활성화 하기"
date: 2023-11-02T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "Windows에서 \"Win + L\" 단축키를 비활성화하려면 레지스트리 편집이 필요하며, 새로운 키와 DWORD 값을 생성하여 설정을 변경해야 합니다. 전체 Win + 키 단축키를 비활성화하려면 추가적인 키를 생성하고 값을 수정하면 됩니다. 변경 사항은 로그오프하거나 시스템을 재시작하여 적용됩니다."
notion_id: "e2e4269d-107f-413e-ac70-8099bd840641"
notion_url: "https://www.notion.so/win-L-e2e4269d107f413eac708099bd840641"
---

# 윈도우 win + L 비활성화 하기

> **Summary**
> Windows에서 "Win + L" 단축키를 비활성화하려면 레지스트리 편집이 필요하며, 새로운 키와 DWORD 값을 생성하여 설정을 변경해야 합니다. 전체 Win + 키 단축키를 비활성화하려면 추가적인 키를 생성하고 값을 수정하면 됩니다. 변경 사항은 로그오프하거나 시스템을 재시작하여 적용됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTEDUCR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC%2FQQ0xf3rZN2HYTHeL99JgW7yB5lfEDVhvCjUOGlyTfgIgaqT4x3oAdK4Z2y6zovRBNMEhVZiUJsQQx4ZYLxrMRQAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAlG%2FEm3kJk9rNiyyrcA3Oi6h0DsLYp%2FwepmBIeShghH9H8StHuuC5tIGqjZJy65nkfhAVSoGdDeRxKjOrSKpwGA92bhqLFwk1qikMrgAL9J%2BahUKTM%2Bh45OwMbugLnLtMb3EKPGoAENteuvrN8ihh5A0k5R3ldPJV24lRI0UA%2Bb3K8oQl0lqgr0vHATHz4iCBWFT%2BCfkOByg7fAo4GZyWvvB2616wTLfAQArcQ6O%2BJxN8Kuzk1w39sWpvSIJQfYs%2FA9FFJLG4K7QVxr8%2B4Dr5Ntdx82C2U9vgA%2BfkCsIuWlwTU0Y6u8i9rNuLqBgsF%2BiQB4KRDJQAG6kYsoPDJ1AmyCdZlxZNEuFyI23agl9%2FE0M6cBRjrU2apu0pGO6KaH%2F%2BvnZKWqBerjrQhva7mtnotOM0Ewx9Mlm43NdrlBJjqoCrbna0cGwKKbqutCxgmY%2FZp%2BP598x02Ys%2B%2FoW297YKS1sO4Zs%2FibtiC0wvQtNW58mmU5yfDTj%2FIccP9Ko6zofEbYMgEfQwQVbfybGHwppMG54cN7fsHqI8dVSKP30V0RHoL28D9A8llcgfmnFBjv2OvGd9DOZVsTDw%2FUd2rZvs9rxUuLVdscLbbIEctrgaie4G0i7uszGvQM3vJxA2%2Bsk%2FygcgJVhKsZeF1MOD2h8QGOqUBFGB%2BC2h9Df3te4rF3ENEYOhB6HjCbn6xZdlUhCbUpAKSN3yQxRZ3kAGrIySSJW8NHUaTcfGNchzvKkFbchp9QdapTTRULBvpvg9cUaeAJPU9FyN4gpzKMaNQkYNolUkKLpzbOsPxiu375Y5FHsyAlR1t9JeoK9OdDMFZFD9jDVt940D7f3RlMgKVMfTwgVoDswYw%2BQPohwKhBFCyUdS0O1pXJ5%2FD&X-Amz-Signature=f473edf001cd34031b82be872632e8f01001eb00e231708b69d23481a45341a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.maketecheasier.com/disable-lock-screen-shortcut-key-windows/](https://www.maketecheasier.com/disable-lock-screen-shortcut-key-windows/)

Windows를 잠시라도 사용한다면 Windows 컴퓨터를 잠그는 가장 빠른 방법은 내장된 단축키인 "Win + L"을 사용하는 것이라는 사실을 아실 것입니다. 유용하기는 하지만 자신이나 다른 사용자가 실수로 이 단축키를 사용하는 것을 방지하기 위해 때때로 이 단축키를 비활성화해야 할 수도 있습니다.

따라서 필요한 경우 Windows 시스템에서 Win + L 단축키를 쉽게 비활성화할 수 있는 방법은 다음과 같습니다.

## **Win + L 단축키 비활성화**

**참고:** Windows 레지스트리를 편집하기 전에 혹시라도 [Windows 레지스트리를](https://www.maketecheasier.com/backup-restore-windows-registry/) 제대로 백업했는지 확인하세요 .

Windows에서 "Win + L" 단축키를 비활성화하는 것은 매우 쉽습니다. 당신이 해야 할 일은 레지스트리 키를 편집하는 것뿐입니다. 그렇게 하려면 Win+를 눌러 R실행 대화 상자를 열고 `regedit`Enter 키를 눌러 Windows 레지스트리를 엽니다.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-run-dialog-box.jpg)

Windows 레지스트리가 열리면 다음 키로 이동하십시오.

`HKEY_CURRENT_USER`` \Software\Microsoft\Windows\CurrentVersion\Policies`

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-policies-key.jpg)

이제 새로운 키를 생성해야 합니다. 그렇게 하려면 왼쪽에 나타나는 "정책" 키를 마우스 오른쪽 버튼으로 클릭하고 "새로 만들기" 옵션을 선택한 다음 "키"를 선택하십시오.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-new-key.jpg)

키 이름을 "System"으로 지정하고 Enter 버튼을 누릅니다. 이 작업을 수행하면 필요한 키가 생성됩니다. 키가 생성되면 다음과 같습니다.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-system-key.jpg)

키를 만든 후에는 새 DWORD 값을 만들어야 합니다. 그렇게 하려면 오른쪽 창을 마우스 오른쪽 버튼으로 클릭하고 "새로 만들기" 옵션을 선택한 다음 "DWORD(32비트) 값"을 선택합니다.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-new-dword.jpg)

키 이름을 "DisableLockWorkstation"으로 지정하고 Enter 버튼을 누릅니다. 키가 생성되면 다음과 같습니다. 기본값 데이터는 "0"으로 설정되어 있습니다.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-disable-workstation-value.jpg)

"Win + L" 단축키를 비활성화하려면 새로 생성된 값을 두 번 클릭하고 값 데이터를 "1"로 입력한 다음 "확인" 버튼을 클릭하여 변경 사항을 저장합니다.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-disable-workstation-value-data.jpg)

이제 로그오프하거나 시스템을 다시 시작하면 됩니다. "Win + L" 바로가기를 다시 가져오려면 방금 만든 DWORD 값을 삭제하면 됩니다.

## **전체 Win + 키 단축키 비활성화**

물론 원한다면 전체 Win+ Key단축키를 비활성화할 수도 있습니다. 그렇게 하려면 "정책" 아래에 "Explorer"라는 새 키를 생성하세요.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-explorer-key.jpg)

이제 오른쪽 창에 새 DWORD 값을 만들고 이름을 "NoWinKeys"로 지정한 다음 Enter 버튼을 누릅니다.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-NoWinKeys-key.jpg)

새 값을 생성한 후 해당 값을 두 번 클릭하고 값 데이터를 "1"로 입력합니다. 이제 "확인" 버튼을 클릭하여 변경 사항을 저장하세요.

![Image](https://www.maketecheasier.com/assets/uploads/2015/06/disable-win-l-shortcut-NoWinKeys-value-data.jpg)

시스템을 다시 시작하거나 로그오프하면 모든 "Win + 키" 단축키가 비활성화됩니다. 변경 사항을 롤백하려면 방금 생성한 키를 삭제하면 됩니다.

Win위의 방법을 사용하여 Windows에서 + 단축키를 비활성화하는 방법에 대한 생각과 경험을 공유하려면 아래에 의견을 남겨주세요 L.


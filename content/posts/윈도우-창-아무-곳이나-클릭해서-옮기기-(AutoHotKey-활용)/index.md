---
title: "윈도우 창 아무 곳이나 클릭해서 옮기기 (AutoHotKey 활용)"
date: 2025-06-02T10:05:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "AutoHotKey를 사용하여 윈도우에서 창을 제목 표시줄이 아닌 아무 곳에서 클릭하여 이동할 수 있는 방법을 설명합니다. AutoHotKey 설치, 스크립트 작성 및 실행 방법을 안내하며, 시작 시 자동 실행 설정 방법도 포함되어 있습니다. 이 프로그램은 사용자 맞춤형 스크립트를 통해 윈도우 사용 편의성을 향상시킬 수 있습니다."
notion_id: "2061bab9-e3f8-8023-977e-cc5099172049"
notion_url: "https://www.notion.so/AutoHotKey-2061bab9e3f88023977ecc5099172049"
---

# 윈도우 창 아무 곳이나 클릭해서 옮기기 (AutoHotKey 활용)

> **Summary**
> AutoHotKey를 사용하여 윈도우에서 창을 제목 표시줄이 아닌 아무 곳에서 클릭하여 이동할 수 있는 방법을 설명합니다. AutoHotKey 설치, 스크립트 작성 및 실행 방법을 안내하며, 시작 시 자동 실행 설정 방법도 포함되어 있습니다. 이 프로그램은 사용자 맞춤형 스크립트를 통해 윈도우 사용 편의성을 향상시킬 수 있습니다.

---

🔗 [https://comeinsidebox.com/how-to-click-and-drag-anywhere-in-the-window/](https://comeinsidebox.com/how-to-click-and-drag-anywhere-in-the-window/)

윈도우를 사용하다 보면 여러 창을 동시에 띄워놓고 작업하는 경우가 많습니다. 이때 창을 이동시키려면 보통 창의 제목 표시줄(타이틀 바)을 클릭해서 드래그해야 합니다. 하지만 창 내용이 꽉 차 있거나 제목 표시줄이 작으면 정확히 클릭하기 번거로울 때가 있습니다.

이럴 때 AutoHotKey라는 프로그램을 사용하면 창의 아무 곳이나 특정 키(예: Alt 키)와 함께 마우스 왼쪽 버튼으로 클릭하여 창을 쉽게 이동시킬 수 있습니다. 마치 리눅스 환경에서 Alt + 클릭으로 창을 옮기는 것과 유사한 편리함을 윈도우에서도 경험할 수 있습니다.

## **AutoHotKey란?**

AutoHotKey는 키보드나 마우스 입력을 자동화하고, 단축키를 만들거나 특정 작업을 수행하는 스크립트를 작성할 수 있게 해주는 무료 오픈소스 프로그램입니다. 작고 가벼우면서도 강력한 기능을 제공하여 많은 사용자들이 애용하고 있습니다.

## **설정 방법**

### **1. AutoHotKey 설치**

먼저 AutoHotKey를 설치해야 합니다.

1. [AutoHotKey 공식 웹사이트](https://www.autohotkey.com/)에 접속합니다.
1. 메인 페이지에서 "Download" 버튼을 클릭합니다.
1. "Download Current Version"을 선택하여 설치 파일을 다운로드합니다.
1. 다운로드한 설치 파일을 실행하여 기본 설정으로 설치를 완료합니다.
### **2. AutoHotKey 스크립트 작성**

AutoHotKey가 설치되었다면, 이제 창 이동 기능을 수행할 스크립트를 작성해야 합니다.

1. 바탕화면이나 원하는 폴더에서 마우스 오른쪽 버튼을 클릭합니다.
1. `새로 만들기(New)` > `AutoHotkey Script`를 선택합니다.
1. 생성된 파일의 이름을 원하는 대로 변경합니다 (예: `MoveWindow.ahk`). 파일 확장자는 `.ahk`여야 합니다.
1. 생성된 `.ahk` 파일을 마우스 오른쪽 버튼으로 클릭하고 `Edit Script` (또는 메모장 등으로 열기)를 선택합니다.
1. 기존에 있던 내용을 모두 지우고 아래의 스크립트 코드를 복사하여 붙여넣습니다.
```plain text
; Alt + 왼쪽 마우스 버튼으로 창 이동
!LButton::
CoordMode, Mouse ; Switch to screen/absolute coordinates.
MouseGetPos, EWD_MouseStartX, EWD_MouseStartY, EWD_MouseWin
WinGetPos, EWD_OriginalPosX, EWD_OriginalPosY,,, ahk_id %EWD_MouseWin%
WinGet, EWD_WinState, MinMax, ahk_id %EWD_MouseWin%

If EWD_WinState = 0 ; Only If the window isn't maximized
 SetTimer, EWD_WatchMouse, 10 ; Track the mouse as the user drags it.
return

EWD_WatchMouse:
GetKeyState, EWD_LButtonState, LButton, P
If EWD_LButtonState = U ; Button has been released, so drag is complete.
{
 SetTimer, EWD_WatchMouse, off
 return
}

GetKeyState, EWD_EscapeState, Escape, P
If EWD_EscapeState = D ; Escape has been pressed, so drag is cancelled.
{
 SetTimer, EWD_WatchMouse, off
 WinMove, ahk_id %EWD_MouseWin%,, %EWD_OriginalPosX%, %EWD_OriginalPosY%
 return
}

CoordMode, Mouse
MouseGetPos, EWD_MouseX, EWD_MouseY
WinGetPos, EWD_WinX, EWD_WinY,,, ahk_id %EWD_MouseWin%
SetWinDelay, -1 ; Makes the below move faster/smoother.

WinMove, ahk_id %EWD_MouseWin%,, EWD_WinX + EWD_MouseX - EWD_MouseStartX, EWD_WinY + EWD_MouseY - EWD_MouseStartY

EWD_MouseStartX := EWD_MouseX ; Update for the next timer-call to this subroutine.
EWD_MouseStartY := EWD_MouseY

return

```

**스크립트 설명:**

- `!LButton::`: `!`는 Alt 키를 의미하며, `LButton`은 마우스 왼쪽 버튼을 의미합니다. 즉, Alt 키와 마우스 왼쪽 버튼을 함께 누르면 아래의 명령을 실행합니다.
- `CoordMode, Mouse, Screen`: 마우스 좌표를 화면 전체 기준으로 설정합니다.
- `MouseGetPos, StartX, StartY, StartWindow`: 마우스 클릭 시작 시점의 X, Y 좌표와 해당 마우스 커서 아래 있는 창의 ID를 가져옵니다.
- `WinGetTitle, StartWindowTitle, ahk_id %StartWindow%`: 해당 창의 제목을 가져옵니다.
- `If StartWindowTitle <> ""`: 창 제목이 비어있지 않을 때 (즉, 유효한 창일 때)만 아래 로직을 실행합니다. 이는 바탕화면 등 빈 공간을 클릭했을 때 오류가 발생하는 것을 방지합니다.
- `Loop ... Break`: 마우스 왼쪽 버튼을 누르고 있는 동안 계속 반복하고, 버튼에서 손을 떼면 루프를 빠져나옵니다.
- `MouseGetPos, CurrentX, CurrentY`: 현재 마우스 커서의 X, Y 좌표를 가져옵니다.
- `WinGetPos, WinX, WinY,,, ahk_id %StartWindow%`: 현재 창의 X, Y 위치를 가져옵니다.
- `SetWinDelay, -1`: 창 이동 시 발생하는 미세한 지연을 줄여 부드럽게 만듭니다.
- `WinMove, ahk_id %StartWindow%,, WinX + (CurrentX - StartX), WinY + (CurrentY - StartY)`: 창을 (현재 마우스 X좌표 - 시작 마우스 X좌표) 만큼, (현재 마우스 Y좌표 - 시작 마우스 Y좌표) 만큼 이동시킵니다.
- `StartX := CurrentX`, `StartY := CurrentY`: 다음 이동 계산을 위해 현재 마우스 위치를 시작 위치로 업데이트합니다.
- `Return`: 스크립트의 해당 부분 실행을 마칩니다.
1. 스크립트 파일을 저장하고 닫습니다.
### **3. 스크립트 실행**

작성한 스크립트를 실행하려면 해당 `.ahk` 파일을 더블 클릭하면 됩니다. 실행되면 작업 표시줄 알림 영역(시스템 트레이)에 AutoHotKey 아이콘(녹색 바탕에 H 글자)이 나타납니다.

이제 아무 창이나 활성화한 상태에서 `Alt` 키를 누른 채로 창의 아무 곳이나 마우스 왼쪽 버튼으로 클릭하고 드래그하면 창이 이동하는 것을 확인할 수 있습니다.

### **4. 윈도우 시작 시 자동 실행 (선택 사항)**

매번 윈도우를 시작할 때마다 스크립트를 수동으로 실행하는 것이 번거롭다면, 시작프로그램 폴더에 스크립트 파일을 넣어두어 윈도우가 시작될 때 자동으로 실행되도록 할 수 있습니다.

1. `Win + R` 키를 눌러 실행창을 엽니다.
1. `shell:startup`을 입력하고 엔터 키를 누릅니다. 시작프로그램 폴더가 열립니다.
1. 앞서 작성한 `.ahk` 스크립트 파일의 바로 가기(단축 아이콘)를 이 폴더에 복사해 넣거나, 파일 자체를 복사해 넣습니다.
이제 윈도우가 시작될 때마다 해당 스크립트가 자동으로 실행되어 언제든지 Alt + 클릭으로 창을 이동할 수 있게 됩니다.

## **다른 방법들?**

과거에는 Easy Window Dragging (AltDrag) 같은 전용 프로그램이나 ShellEnhancer와 같은 유틸리티도 있었지만, AutoHotKey는 현재까지도 꾸준히 업데이트되며 사용자가 직접 스크립트를 수정하여 원하는 대로 기능을 커스터마이징할 수 있다는 큰 장점이 있습니다.

## **마무리**

AutoHotKey를 이용하면 간단한 스크립트 작성만으로 윈도우 사용 편의성을 크게 향상시킬 수 있습니다. 창 이동뿐만 아니라 반복적인 작업 자동화, 단축키 지정 등 다양한 용도로 활용될 수 있으니, 이번 기회에 AutoHotKey의 다른 기능들도 살펴보시는 것을 추천합니다.


---
title: "VS code 투명화 (vs code설치가 손상된 것 같습니다)"
date: 2023-12-03T00:00:00.000Z
draft: false
tags: ["MAC", "WINDOWS", "Arch", "ubuntu"]
series: ["개발환경"]
description: "VS Code의 투명 배경 설정 방법에 대한 안내로, Windows와 Linux는 특정 링크를 통해 설정할 수 있으며, Mac에서는 추가 확장을 설치해야 합니다. 설치 후 경고 메시지가 나타날 수 있으나 무시해도 안전하며, 다양한 설정 옵션과 문제 해결 방법도 제공됩니다."
notion_id: "3738fece-05c5-471d-83f6-3f99a0edf40a"
notion_url: "https://www.notion.so/VS-code-vs-code-3738fece05c5471d83f63f99a0edf40a"
---

# VS code 투명화 (vs code설치가 손상된 것 같습니다)

> **Summary**
> VS Code의 투명 배경 설정 방법에 대한 안내로, Windows와 Linux는 특정 링크를 통해 설정할 수 있으며, Mac에서는 추가 확장을 설치해야 합니다. 설치 후 경고 메시지가 나타날 수 있으나 무시해도 안전하며, 다양한 설정 옵션과 문제 해결 방법도 제공됩니다.

---

![Image](image_3b57d90eb7e5.png)

## 윈도우,Linux는 아래 링크 따라하면 돼

🔗 [https://dev.to/anubra266/transparent-background-in-vscode-1mdk](https://dev.to/anubra266/transparent-background-in-vscode-1mdk)


## MAC

🔗 [https://rick-ford.tistory.com/entry/Extension-mac에서-vs-code-창-투명하게-하기](https://rick-ford.tistory.com/entry/Extension-mac에서-vs-code-창-투명하게-하기)

### 이 다운받으면 됨… 근데 이러면 설치가 손상되었다고함

🔗 [https://marketplace.visualstudio.com/items?itemName=illixion.vscode-vibrancy-continued](https://marketplace.visualstudio.com/items?itemName=illixion.vscode-vibrancy-continued)

# "VSCode 설치가 손상된 것 같습니다"

이 확장은 VS Code의 체크섬 확인 CSS 파일을 편집하여 작동합니다. 즉, Vibrancy Continued를 설치하고 활성화한 후 경고 메시지가 나타납니다. 이 경고는 무시해도 안전하며 모든 변경 사항은 되돌릴 수 있습니다. 톱니바퀴를 클릭하고 **다시 표시 안 함을** 선택하여 숨깁니다.

![Image](image_1c9bcc3b635e.png)

![Image](image_ecda80eefa3b.png)

VS Code 제목 표시줄의 "[지원되지 않음]" 경고를 수정하려면 [VSCode 체크섬 수정](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums) 확장 기능을 참조하세요 .

# 지원되는 운영 체제

> 경고 : Windows on ARM은 현재 지원되지 않습니다. 자세한 내용은 #9를 참조하세요.

윈도우 11 ✔

윈도우 10 ✔

맥OS ✔

# 시작하기

1. 선택한 VSCode 테마가 'Dark+' 또는 [지원되는 테마 중 하나인지 확인하세요.](https://marketplace.visualstudio.com/items?itemName=illixion.vscode-vibrancy-continued#vscode_vibrancy.theme)
![Image](image_e677e286f0c6.png)

1. [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=illixion.vscode-vibrancy-continued) 에서 확장을 설치합니다 .
1. F1을 누르고 "Reload Vibrancy" 명령을 활성화하세요.
![Image](image_36ddce2a1701.png)

1. 메시지가 표시되면 VSCode를 다시 시작합니다.
VS Code가 업데이트될 때마다 동일한 단계를 사용하여 Vibrancy를 다시 활성화하세요.

## 옵션

### vscode_vibrancy.type

Vibrancy Effect의 기본 방법.

- auto : 시스템 버전에 따라 자동으로 전환됩니다.
- 아크릴 : (Windows 10에만 해당) Fluent 디자인 흐림.
- 모양 기반, 밝음, 어두움, 제목 표시줄, 선택, 메뉴, 팝오버, 사이드바, 중간 밝음, 매우 어두움: (MacOS에만 해당)
### vscode_vibrancy.opacity

생동감 효과의 불투명도. -1은 테마 기본값, 0은 최대 투명도, 1은 모든 투명도를 제거합니다.

*값: -1.0 ~ 1.0*

### vscode_vibrancy.imports

사용자 정의 CSS/JS 파일을 VSCode에 파일 경로로 가져옵니다. 파일은 나열된 순서대로 가져옵니다.

예:`C:/Users/MyUserName/Documents/custom.css`

*값: 배열[]*

### vscode_vibrancy.preventFlash

크기 조정 중에 창이 깜박이는 것을 방지하는 새로운 방법을 사용합니다. 새로 고침 간격이 필요하지 않지만 경우에 따라 호환성이 떨어질 수 있습니다.

*부울, 기본값은 true입니다.*

### vscode_vibrancy.refreshInterval

창 크기 조정 후 배경을 투명하게 만드는 새로 고침 간격(밀리초)입니다. 값이 낮을수록 CPU 사용률이 높아져 업데이트가 눈에 덜 띄게 됩니다. **"플래시 방지" 방법을 사용할 때는 무시됩니다.**

*값: 1 ~ 1000, 기본값은 10*

### vscode_vibrancy.theme

활력 테마 선택:

- 기본 어두움
- 어두움(하위 막대만)
- 기본 조명
- 밝게(하위 막대만)
- 느와르 에 블랑
- 도쿄 나이트 스톰
- 도쿄 나이트 스톰(외부)
- 솔라라이즈 다크+
> 더 많은 테마를 제공할 수 있습니다! 여기를 보아라 .

# 자주 묻는 질문

### 활기를 제거하는 방법?

F1 또는 ⌘+Shift+P를 누르고 "Vibrancy 비활성화" 명령을 활성화한 다음 Visual Studio Code를 다시 시작합니다.

### 터미널에서는 효과가 작동하지 않습니까?

vs코드의 설정을 확인하세요. 터미널의 렌더러 유형을 dom으로 변경해야 합니다.

`"terminal.integrated.gpuAcceleration": "off"`

### "관리자 권한으로 Visual Studio Code 실행" 메시지가 표시됩니까?

VSCode 시스템 설치 프로그램을 사용할 때 일반적으로 Windows에 나타납니다. VSCode를 완전히 닫은 다음 VSCode를 관리자로 실행하고 이전에 수행한 작업(Vibrancy 활성화/다시 로드/비활성화)을 다시 시도해야 합니다.

### `EROFS: read-only file system`macOS에서 Vibrancy를 활성화할 때

VSCode 설치는 App Translocation의 영향을 받습니다. 이 문제를 해결하려면 Finder를 사용하여 VSCode를 다음 위치로 이동하거나 `/Applications`(또는 밖으로 이동했다가 `/Applications`다시 안으로 이동하거나) 다음 터미널 명령을 실행하세요.

```plain text
sudo xattr -dr com.apple.quarantine "/Applications/Visual Studio Code.app"

```

### Windows 10을 사용 중인데 창을 드래그할 때 지연이 발생합니다.

[자세한 내용은 여기를 읽어 보십시오](https://github.com/EYHN/vscode-vibrancy/discussions/80) .

### 효과가 작동하지 않지만 오류가 없습니다.

OS 설정을 통해 전역적으로 투명도 효과가 비활성화되어 있지 않은지 확인하세요. 이는 일반적으로 접근성 설정에서 찾을 수 있으며 "투명도 효과" 또는 "투명도 감소"라고도 합니다. 그래도 도움이 되지 않으면 명령 팔레트를 통해 액세스할 수 있는 VSCode 개발자 도구의 콘솔 섹션을 확인할 수도 있습니다.

다른 방법이 작동하지 않으면 VSCode를 다시 설치해 보세요. 설정이 손실되지 않으며 이렇게 하면 VSCode 설치가 일관되게 유지됩니다.


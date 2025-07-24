---
title: "oh my posh 윈도우 터미널 커스터마이징"
date: 2024-03-15T15:32:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 터미널에서 Oh My Posh를 설치하고 커스터마이징하는 방법에 대해 설명합니다. Scoop을 통해 설치하고, Nerd Font를 다운로드하여 설치한 후, PowerShell에서 테마를 설정하는 방법을 안내합니다. 시작할 때마다 테마가 적용되도록 $PROFILE을 수정하는 방법도 포함되어 있습니다."
notion_id: "4537e5ec-748a-4e25-90aa-05849af7338d"
notion_url: "https://www.notion.so/oh-my-posh-4537e5ec748a4e2590aa05849af7338d"
---

# oh my posh 윈도우 터미널 커스터마이징

> **Summary**
> 윈도우 터미널에서 Oh My Posh를 설치하고 커스터마이징하는 방법에 대해 설명합니다. Scoop을 통해 설치하고, Nerd Font를 다운로드하여 설치한 후, PowerShell에서 테마를 설정하는 방법을 안내합니다. 시작할 때마다 테마가 적용되도록 $PROFILE을 수정하는 방법도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02dacd6c-c3c0-461b-a799-18cf12448ecc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4PTIW2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFPsRxO0S9se4gowlwpIBh37N6YPlfhN7f2cxTk81RXWAiBvJ6hu53QEFNmrOl67LoCNcDdWPZZWGeW7TikT1e3TgCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3iVQRtzhg8ps2YyYKtwDZkK0AVyDAf%2BRBUZua%2BH4kL1vK7lI0YS2J6dtU%2BxbfstlfoMmdjOwA%2B2W7aLFNYinEJcJe%2Fm%2Bj3BjaAChngyUi0DxSGMmzIRVguWAjRzPPLfVOH%2FZNcp5jKAs%2Bqho2%2FmXt8KqWiDRYpqlpS7ZUmDXkdwwiFvVrb%2BhV8%2F6zvwSWEavP1Car%2FvTp8spQN11KTd59E48orXo6OE8%2BYpEB1UXUR8MS8tfhAnHDKFJKRbZjIPc5ar4ekho25UHUAlNVvbkclv1zQdraonq4nv1HZyoZ3OyAZTYZ0KMDG4O1FKK%2FKDOAHuHfSCHKl%2FveQWxPjBCJT0XXrN6laeUJPtJ0EsmmOzC%2FFKYKvDcH8%2BRBvEjsUfPH115qIKJAiWm%2BS%2BA%2FWsO2ColF5jlg6gmJve2wfAEgCeZDWj7inZB4LXQJ0uS2sa2ICbia%2B8ePPzhSKbQSHqB4uMkZKGLcRpbWojUCOrOchyQT0cYLx4RwdpHLaLwnbCJoI%2Buv7IdQ2vroewgu1bTvt9zE21tuMuAOAsN9ecqFmBhkxZdBkbC2Wpgy6ek%2FFPoITEiud%2F%2BlrF%2FQTouTvM4ihEshsjXa7tulc%2BZiE30olX3LrFtcXsvMW191pwfq4Cb45dUmzHdpsCMcG8wkNCHxAY6pgFCvGxcMIFEwnkdQ%2BGYnO1793xQ4ndXpFHbMoZm5MRP18FetaFoz8z0QeMagX%2BHbD1%2FYALYqdyt88V9jqNgGlxiczJTTA8nMyRjtbneu0Kn96hQS354Cpd9UpGfwxvN0zhL492Go6ark8bvraFigZ16SuWcXqPjeP6tV%2FhXEYYvN1nGxwC8TVvXDrsWP6Fded64IFknbJ2gA4zN88miUQGb8JPjgRXU&X-Amz-Signature=979f91b68118e2317b5b645a9bf526be02655331b95a6fc218f6f5631ed57deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 설치

🔗 [https://ohmyposh.dev/docs/installation/windows](https://ohmyposh.dev/docs/installation/windows)

```javascript
scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json
```

## Nerd Font 글꼴 설치

아래 URL에 접속하여 원하는 Font를 다운로드하고 Windows에 설치해주세요. 저는 Nerd Font 사이트에서 Caskaydia Cove Nerd Font를 선택해서 설치 했습니다.

[https://www.nerdfonts.com/font-downloads](https://www.nerdfonts.com/font-downloads)

## 테마 설정

🔗 [https://backstreet-programmer.tistory.com/176](https://backstreet-programmer.tistory.com/176)

🔗 [https://ohmyposh.dev/docs/themes](https://ohmyposh.dev/docs/themes)

> 아래 작업 전부 powershell에서 실행만 하면 됩니다

```livescript
New-Item -Path $PROFILE -Type File -Force
```

```livescript
oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/clean-detailed.omp.json' | Invoke-Expression
```

```livescript
. $PROFILE
```

> 시작할때마다 theme가 적용되길 원한다면. $PROFILE 을 수정해야합니다

```livescript
code $PROFILE
```

```livescript
oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/clean-detailed.omp.json' | Invoke-Expression
```


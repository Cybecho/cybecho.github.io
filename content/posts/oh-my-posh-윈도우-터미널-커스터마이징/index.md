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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02dacd6c-c3c0-461b-a799-18cf12448ecc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIJJBQK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCIIsroEer%2FjQK9XUQ%2BXl%2Bd0bC53SIv9B4rWTvgHFkW3QIgGSyTz5oI5kEseGBmc7y15IT28cwIdUhp0R26WtT%2BFioq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPKV%2FupTjWXS%2BOOZlircA%2FOrpGNS0jliPquuyU38FWSfTZUlZ9Ts0uUIQss7k1w%2F%2BvlsXnmEkX3twmCNiPhgqmcxgZsmFo7FBKe5B%2Fe8aZ%2FA9y7kCus%2B07BiJ5NCF9AYjKSe1fUGNaJitT8sApvPORZHmvJ%2BYbxnTh5SiIgdfDofUEXE4hn32UDZxXcE%2Fm7brmWCyVo7LaYkwhj3%2BSaiLjs5fEEjis5e0rqWy050JBpR5vBQxBNQo87QIELANDCEvqDfNguwLmxRFS0HnLPnajgfR%2Bacr0agGzS5FLzp4ysmG6IxZV3BGisSBgKKvS61EK5e4FWXozuhRbDIKsozZTjAbDi%2Bog5Mv4CRHxJFUYXnRKvqm9DViRV%2BFVqcqQFprHpuCRp6eR1xXu88MtLxNMmHkOjxykMJmVKZzyLRERuV9qK6qq7MohzB2X3omy5GuCEQEsMuQtxp%2Be2crftIQg0BvjtSHGzk0Xm1U5dijNpHPWv8usARNAZMTV8cy%2F%2Fs1wtziRodHNeDWwRhV%2BxV2h%2FAkO6oHYU2V13VNeaCKqaJSOKKGDNMXTUXZ2%2BiGAyWn6Vf57JixiA1jiAQmFphr8RMlzgyySyyl0p%2FQvUhhBzu8BfYywXQaJwf7%2BR65cEKQ3wk7nvC2jLwZoGeMIzPh8QGOqUBjTFxqFj1pKglPkoHBo3QV7ZgsypGIZN7XkTtNrtQaYzfzSosajCM%2FE3zjRAwtn4SfA2Ekh%2F5Jk0VVXvz1w6x6%2FBt1gyINEoQL%2BEcZXwkrA8rqC0qbWb%2Bzicmh6lg5GYuQnImEtOOgOLGJXQtfH%2F5co3a2vqbPpfImN4CFpexKq44XAuaFuYbRQL4oR%2FhulinNWVlFl4780Rkv19SrVFYRghV%2B4i1&X-Amz-Signature=0088f04228c2246a3dd143a1bd4b0256ba79cffd9d298847fb826f36cf340512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


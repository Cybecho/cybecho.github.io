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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02dacd6c-c3c0-461b-a799-18cf12448ecc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVFQ4KA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD5%2FFeMClSjBo97Z2kHMVlHHMc85CwvZipjXWJzJ7JFxQIhANWGapZZs%2FBWIGCJkLX4joMrxa5Pq9bbGDAVOEEgaI6iKv8DCCoQABoMNjM3NDIzMTgzODA1Igzw5kz%2FQ0iJrLDLyaAq3AO2AhSFBf2nUxkO5YD9eOVssQZ%2FGZ9GeE64SKnL9Pee%2FfFs%2BUUMQqiW7VrzcQDqd6lCLg1wJkoPGCZsXx%2B1YRXk%2FGXKIegHoSpAulhG1zIMcu674HX7cWYWD%2Btphy6dyDORYGDXTabwlA7Wel9nrq6fMrnygF02YpmtAbVws5Qb6ToKKuYdq3xVYr2JujivTZ1iT59xve1ba3fO0X38j%2BuhXt9SSnH5d%2BPvlvlpIckXWgE%2F8R59ZobvmytlLwT%2BB9m6Em%2BQgRfvDz4O8Q68i0GadoQ9GDR2Yqe09JgSCpgC83gRgSQe250zQrsrB4geCXkQfmUif2CB1NsQfIYYDzc2i2Efr09XN9rYozlxh0IaCVs56jbNMwm23J5J1dthMaB0lriFFZNMBJPzE%2BZVAbwJYvWeekp%2Bh5WCkmCrUSlar5Imeb%2Fm%2BIkkjeUw%2FxoJm6xnhm4OlvBVR8R7Z0K%2BwyuF3zF%2BG%2BwXwaUg6H8la%2FiB9wE16uv6jiBoei9GKO84dCLcpgs3RLIHhoIaMad3UmSAKNGTLlzot7VBUifz4VqPsu%2BvHzbmZn%2FPCbKCCabDHaCBTTo9vzUXrzAoiIROSxw09cLEMUojVuROqWseMyGFhLf0vF3Bx1%2FJDSoigDDO9ofEBjqkAZW4H8FqmwRYAo5AmV%2BBmmYLORjwmAbkZH6%2FBNd2C9ldaIszsZZLjCDW2lzFKmNy7Q6f6%2BMnGkHzQ8FEOeePlbEhcxWpRZKrJ0yVVVf9qawUxE4IzkOlhBxRmWYiLxOQEm%2B2vlySMVrqBM2f%2FokwHHWVSLn7QzByh5%2BMf%2F6YMjxwX8chdmgIh4SfEBFfz1MKHQtYLVbVnhoN%2FrzinVz22oKyjfD1&X-Amz-Signature=1080498da9d623e236bb055b7fdb50840ad8da168f2fd57f85c6598a7c82d81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


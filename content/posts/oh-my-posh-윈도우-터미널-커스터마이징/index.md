---
title: "oh my posh 윈도우 터미널 커스터마이징"
date: 2024-03-15T15:32:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "Oh My Posh를 윈도우 터미널에 설치하고 커스터마이징하는 방법을 설명합니다. Scoop을 사용하여 설치하고, Nerd Font를 다운로드하여 설치한 후, Powershell에서 테마를 설정하는 방법을 안내합니다. 테마 적용을 위해 $PROFILE 파일을 수정하는 과정도 포함되어 있습니다."
notion_id: "4537e5ec-748a-4e25-90aa-05849af7338d"
notion_url: "https://www.notion.so/oh-my-posh-4537e5ec748a4e2590aa05849af7338d"
---

# oh my posh 윈도우 터미널 커스터마이징

> **Summary**
> Oh My Posh를 윈도우 터미널에 설치하고 커스터마이징하는 방법을 설명합니다. Scoop을 사용하여 설치하고, Nerd Font를 다운로드하여 설치한 후, Powershell에서 테마를 설정하는 방법을 안내합니다. 테마 적용을 위해 $PROFILE 파일을 수정하는 과정도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/02dacd6c-c3c0-461b-a799-18cf12448ecc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCPCSNY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIARANVc8PyiDa19krcq%2BQUBctQAc2gy1M9eQmOHTAsdyAiBRcmoij8mvMPTxzOug6trVFZwSjAwTyGnv%2FSWcQvlgRCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMRHYdUa9VTGidIEZKKtwDsiVJaQrlufmPh39%2BIdzp2SIKizqdBq87bUqQVgkmo96evQv2Pz6jlePJWRxGEsKJ8WohsVQDKyUBeux4%2BAtHqLmcmpfU2f40QUgFiNxZUsdUel05y3nYFlYgGmDWdvIXxUJIPp3u9YdYonN8tE%2Fx%2FxhikKYjOR%2Fev7r5MDOBlszfzi7GNlTQf4sRXO8fliTjglK5o2dMkgPSmGyxvSXeChocqc4WxPp4w%2BCuxj49MMutgQ0wDSzC6p%2FMSPEdJm7nnbxovTc2SAEpRB4JoSvsmaNhl1WSQngcfuFeAaMeRhEfkYFX6utpVuw9cPOyFzM%2B%2BexRILR8pumuf3MwzfRDq61Ole1rDJ%2FxGbR9j1HweAExmiFKsvdL0fwEVvQpQ7OZZUnXDRBaKQxl17Lp7E7J9j9HV4DQNxPfGTBjOyNQsD0ZMGa0tSNCos%2Fu7x0Qbw6CFi2X8H2SiziHfI3POzZDcm4TWukQ6%2BIjNFS2wt0EoH9tvqnvroe04uwZ0fpMSm%2B2GWXCfqxFPxve7hFk8IP2p2FZahZAyqELHQkdoVs7EqB0xrl5n7jrDomiLa9%2B5KNd44MuXOQMztb4ZNU3VULn4%2BeyxpJn%2Bgtr967s0E7sUeaxWZDNJEOoN0ghARIwlZuIxAY6pgFUDizDXUdvN3Q%2BQXpkhOakhW06xNtQv6nvUtDiZ8cKVPzhGw7mXA6H%2BuJY%2BbD5f1T1lgU6ueZ6cqQYr3MZP%2B0PPez9BfdPBU8Y0lTo3OhQG%2B%2BAakv2%2BUUwV%2BHaZJJ%2BZiQ8NCyoT73ghReZE1%2FFOIHAlUogOKkF%2BwWS3B84sLjnY1cPB05xNb8i7BtHuNxx98hRwzmQ54xeFyrOh1C71LXScgVq4RfU&X-Amz-Signature=c034c9e5557be7569276cdd69be6f1e2b3b55febe3c85eb5e23d7828d0df9dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


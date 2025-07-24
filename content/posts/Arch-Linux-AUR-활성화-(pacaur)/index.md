---
title: "Arch Linux AUR 활성화 (pacaur)"
date: 2024-01-09T00:00:00.000Z
draft: false
tags: ["Arch", "ubuntu"]
series: ["Let's Linux!"]
description: "Auracle-git, expac, 및 jq를 설치한 후 pacaur을 설치하는 방법을 설명합니다. 설치 중 발생할 수 있는 텍스트 편집기 관련 오류를 해결하기 위한 방법으로는 $EDITOR 또는 $VISUAL 환경 변수를 설정하거나 pacaur 명령어에 편집기를 지정하거나 편집기를 사용하지 않도록 설정하는 방법이 있습니다."
notion_id: "cb4ee06d-3027-4b85-98a0-d84638fe1126"
notion_url: "https://www.notion.so/Arch-Linux-AUR-pacaur-cb4ee06d30274b8598a0d84638fe1126"
---

# Arch Linux AUR 활성화 (pacaur)

> **Summary**
> Auracle-git, expac, 및 jq를 설치한 후 pacaur을 설치하는 방법을 설명합니다. 설치 중 발생할 수 있는 텍스트 편집기 관련 오류를 해결하기 위한 방법으로는 $EDITOR 또는 $VISUAL 환경 변수를 설정하거나 pacaur 명령어에 편집기를 지정하거나 편집기를 사용하지 않도록 설정하는 방법이 있습니다.

---

1. **Auracle-git 설치:**
1. **expac 및 jq 설치:**
1. **pacaur을 설치하려면 다음 명령을 실행합니다.**
---

만약 위의 과정을 진행해도 문제가 해결되지 않는다면, 캐시를 비우고 다시 시도해 보세요. 다음 명령을 실행하세요:


```plain text
pacman -Scc
```




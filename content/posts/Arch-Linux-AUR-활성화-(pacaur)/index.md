---
title: "Arch Linux AUR 활성화 (pacaur)"
date: 2024-01-09T00:00:00.000Z
draft: false
tags: ["Arch", "ubuntu"]
series: ["Let's Linux!"]
description: "auracle-git, expac, jq를 설치한 후 pacaur을 설치하는 방법을 설명합니다. 설치 후, 텍스트 편집기 설정 문제를 해결하기 위한 여러 방법도 안내합니다. 환경 변수를 설정하거나 pacaur 명령어 옵션을 사용하여 편집기를 지정하거나 비활성화할 수 있습니다."
notion_id: "cb4ee06d-3027-4b85-98a0-d84638fe1126"
notion_url: "https://www.notion.so/Arch-Linux-AUR-pacaur-cb4ee06d30274b8598a0d84638fe1126"
---

# Arch Linux AUR 활성화 (pacaur)

> **Summary**
> auracle-git, expac, jq를 설치한 후 pacaur을 설치하는 방법을 설명합니다. 설치 후, 텍스트 편집기 설정 문제를 해결하기 위한 여러 방법도 안내합니다. 환경 변수를 설정하거나 pacaur 명령어 옵션을 사용하여 편집기를 지정하거나 비활성화할 수 있습니다.

---

1. **Auracle-git 설치:**
  - 먼저, auracle-git을 AUR에서 직접 설치하세요. 다음 명령을 실행하세요:
    **Bash**

```plain text
git clone https://aur.archlinux.org/auracle-git.git
cd auracle-git
makepkg -si

```

    **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

1. **expac 및 jq 설치:**
  - expac 및 jq는 공식 Arch Linux 저장소에 있으므로 다음 명령으로 직접 설치할 수 있습니다:
    **Bash**

```plain text
sudo pacman -S expac jq
```

1. **pacaur을 설치하려면 다음 명령을 실행합니다.**
```c++
sudo pacman -S pacman git make
```

  pacaur을 빌드하려면 다음 명령을 실행합니다.

```c++
git clone https://aur.archlinux.org/pacaur.git
cd pacaur
makepkg -si
```

  pacaur을 설치한 후 다음 명령을 사용하여 사용해 볼 수 있습니다.

```c++
pacaur -Syu
```


---

만약 위의 과정을 진행해도 문제가 해결되지 않는다면, 캐시를 비우고 다시 시도해 보세요. 다음 명령을 실행하세요:


```plain text
pacman -Scc
```


<details>
<summary>`ERROR` :: $VISUAL and $EDITOR environment variables not set or defined editor not found</summary>

[sbu@archlinux ~]$ pacaur -Syu
:: $VISUAL and $EDITOR environment variables not set or defined editor not found
이 에러는 무엇이며 어떻게 해결할 수 있습니까?

**edit**

View other drafts

**volume_up**

![Image](image_ae68abad0a23.gif)

![Image](image_9b0d0a2d54a1.png)

이 에러는 pacaur가 텍스트 편집기를 찾을 수 없다는 것을 의미합니다. pacaur는 패키지를 설치하거나 업데이트할 때 텍스트 편집기를 사용하여 패키지 설명서를 편집해야 합니다.

이 문제를 해결하려면 다음 중 하나를 수행해야 합니다.

- **$EDITOR 또는 $VISUAL 환경 변수를 설정합니다.** 이 변수에는 텍스트 편집기의 경로가 포함됩니다. 다음 명령을 사용하여 편집기를 설정할 수 있습니다.
`export EDITOR="/usr/bin/vim"`

- **pacaur의 옵션으로 텍스트 편집기를 지정합니다.** 다음 명령을 사용하여 텍스트 편집기를 지정할 수 있습니다.
`pacaur -Syu --editor=vim`

- **pacaur의 옵션으로 텍스트 편집기를 사용하지 않도록 설정합니다.** 다음 명령을 사용하여 텍스트 편집기를 사용하지 않도록 설정할 수 있습니다.
`pacaur -Syu --noedit`

**해결 방법 1: $EDITOR 또는 $VISUAL 환경 변수 설정**

이 방법은 가장 일반적인 방법입니다. 다음 명령을 사용하여 편집기를 설정할 수 있습니다.

`export EDITOR="/usr/bin/vim"`

이 명령은 pacaur가 /usr/bin/vim 텍스트 편집기를 사용하도록 설정합니다. 다른 텍스트 편집기를 사용하려면 해당 텍스트 편집기의 경로를 대신 지정합니다.

**해결 방법 2: pacaur 옵션으로 텍스트 편집기 지정**

이 방법은 텍스트 편집기를 일시적으로 지정하는 데 사용할 수 있습니다. 다음 명령을 사용하여 텍스트 편집기를 지정할 수 있습니다.

`pacaur -Syu --editor=vim`

이 명령은 pacaur가 vim 텍스트 편집기를 사용하여 패키지 설명서를 편집하도록 설정합니다.

**해결 방법 3: pacaur 옵션으로 텍스트 편집기 사용하지 않도록 설정**

이 방법은 텍스트 편집기를 사용하지 않고 패키지를 설치하거나 업데이트하려는 경우 사용할 수 있습니다. 다음 명령을 사용하여 텍스트 편집기를 사용하지 않도록 설정할 수 있습니다.

`pacaur -Syu --noedit`

이 명령은 pacaur가 패키지 설명서를 편집하지 않고 패키지를 설치하거나 업데이트하도록 설정합니다.

</details>



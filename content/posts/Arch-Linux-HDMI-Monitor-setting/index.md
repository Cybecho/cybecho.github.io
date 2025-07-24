---
title: "Arch Linux HDMI Monitor setting"
date: 2024-01-09T00:00:00.000Z
draft: false
tags: ["Arch", "ubuntu"]
series: ["Let's Linux!"]
description: "Arch Linux에서 HDMI 모니터를 설정하는 방법에 대한 안내로, xorg-xrandr와 mons 패키지를 사용하여 모니터를 감지하고 설정하는 방법을 설명합니다. HDMI 모니터가 감지되지 않을 경우 그래픽 드라이버 설치 및 업데이트 방법도 포함되어 있으며, Mesa와 AMD GPU 드라이버 설치 방법이 자세히 설명되어 있습니다."
notion_id: "09824508-16f4-4e87-8175-dd92d1385869"
notion_url: "https://www.notion.so/Arch-Linux-HDMI-Monitor-setting-0982450816f44e878175dd92d1385869"
---

# Arch Linux HDMI Monitor setting

> **Summary**
> Arch Linux에서 HDMI 모니터를 설정하는 방법에 대한 안내로, xorg-xrandr와 mons 패키지를 사용하여 모니터를 감지하고 설정하는 방법을 설명합니다. HDMI 모니터가 감지되지 않을 경우 그래픽 드라이버 설치 및 업데이트 방법도 포함되어 있으며, Mesa와 AMD GPU 드라이버 설치 방법이 자세히 설명되어 있습니다.

---

🔗 [https://velog.io/@chooslife/만자로-i3-듀얼모니터](https://velog.io/@chooslife/만자로-i3-듀얼모니터)

> 💡 **AUR이 활성화 되어 있어야 합니다**
> yay 및 pacaur
>
> ---
>
> [Arch Linux AUR 활성화 (pacaur)](https://www.notion.so/cb4ee06d30274b8598a0d84638fe1126) 
>
>

# 원본 글

만자로 i3 사용 중,

남는 모니터 하나를 노트북에 연결했는데, 연결된 것을 감지는 하지만 화면이 나타나진 않았다. hdmi 연결시 전원버튼 주변의 불빛이 긍정의 푸른색으로 돌아가지만 이내 '신호없음'이라고 떴다.

구글링을 통해 해결했는데, 일단 아래의 패키지가 필요하다.

```c++
sudo pacman -S xorg-xrandr
```

xorg-xrandr를 실행시키면 모든 디스플레이 정보가 뜬다.

아치리눅스 포럼에 보면 여러개의 모니터를 컨트롤 하려면 mons를 설치하라고 나온다. (mons는 xorg-xrandr에 의존한다.)

```c++
mons
```

(aur 저장소에 있다.)

mons는 github 저장소를 보면 사용법이 잘 나와있다.

[*https://github.com/Ventto/mons/blob/master/README.md*](https://github.com/Ventto/mons/blob/master/README.md)

여러개의 세션을 돌아가면서 사용하는 i3의 특성을 잘 이용하기 위해서는 -e 옵션을 사용하면 좋겠다. 활성화된 모니터에서 새로운 세션을 열면 해당 모니터에 자리잡는 식이다.

---

# mons 사용 중 에러…(디스플레이 발견 못함)

`mons` 명령은 현재 사용 가능한 모든 모니터를 나열하는 데 사용됩니다. `DISPLAY` 변수가 설정되지 않은 경우 이 명령은 아무것도 출력하지 않습니다.

1. HDMI 모니터가 감지되었는지 확인합니다. 다음 명령을 사용하여 HDMI 모니터를 감지했는지 확인할 수 있습니다.
```c++
xrandr
```

이 명령은 현재 사용 가능한 모든 모니터를 나열합니다. HDMI 모니터가 나열되면 성공적으로 감지된 것입니다.

HDMI 모니터가 감지되지 않으면 다음 단계를 수행하십시오.

1. HDMI 모니터를 지원하는 그래픽 드라이버가 설치되어 있는지 확인합니다. 다음 명령을 사용하여 그래픽 드라이버를 확인할 수 있습니다.
```c++
lspci -k | grep -i VGA
```

이 명령은 시스템에 설치된 그래픽 장치를 나열합니다. 그래픽 장치에 "VGA"가 포함되어 있으면 HDMI 모니터를 지원합니다.

1. 그래픽 드라이버가 최신 버전인지 확인합니다. 그래픽 드라이버를 업데이트하려면 그래픽 카드 제조업체의 웹사이트를 방문하십시오.
1. 그래픽 드라이버를 재설치합니다. 다음 명령을 사용하여 그래픽 드라이버를 재설치할 수 있습니다.
```c++
sudo pacman -Syu <그래픽 드라이버 이름>
```

<그래픽 드라이버 이름>을 그래픽 드라이버의 이름으로 바꿉니다. 예를 들어, AMD Radeon 그래픽 드라이버를 재설치하려면 다음 명령을 사용합니다.

```c++
sudo pacman -Syu amdgpu-pro
```

이러한 단계를 수행해도 HDMI 모니터가 감지되지 않으면 그래픽 카드 또는 HDMI 케이블에 문제가 있을 수 있습니다.

---

# HDMI 모니터 발견 안된다… 그래픽 드라이버들 설치

### Mesa 설치

귀하의 그래픽 카드는 AMD Radeon R7 370 / R9 270X/370X입니다. Arch Linux에는 AMD 그래픽 카드용으로 두 가지 드라이버가 제공됩니다.

- **open source 드라이버:** Mesa 그래픽 stack의 일부입니다. 무료이며 최신 버전이 항상 제공됩니다.
- **proprietary 드라이버:** AMD에서 제공합니다. 더 나은 성능과 기능을 제공하지만 무료는 아닙니다.
귀하의 그래픽 카드는 open source 드라이버를 지원합니다. open source 드라이버를 설치하려면 다음 명령을 실행합니다.

```c++
sudo pacman -S mesa
```

이 명령은 Mesa 그래픽 stack을 설치합니다. 여기에는 open source AMD 그래픽 드라이버도 포함됩니다.

### AMD GPU DRIVER 설치 (yay 사용)

이 명령은 AMD의 proprietary 그래픽 드라이버를 설치합니다.

**AUR에는 **`**amdgpu-pro**`**라는 이름의 패키지가 없지만, 필요한 AMDGPU Pro 드라이버 기능을 제공하는 개별 패키지들이 있습니다.  다음 단계에 따라 필요한 패키지를 설치하세요:**

1. **OpenGL 지원이 필요한 경우:**
  **Bash**

```plain text
yay -S amdgpu-pro-oglp

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

1. **Vulkan 지원이 필요한 경우:**
  **Bash**

```plain text
yay -S vulkan-amdgpu-pro

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

1. **OpenCL 지원이 필요한 경우:**
  - 최신 버전을 사용하려면 `opencl-amdgpu-pro-orca` 또는 `opencl-amdgpu-pro-pa` 패키지 중 하나를 사용하세요(AUR에서 확인 가능).
  - 레거시 버전을 사용하려면 `opencl-legacy-amdgpu-pro` 패키지를 사용할 수 있지만 이 패키지는 더 이상 유지되지 않습니다.
1. **Advanced Multimedia Framework(AMF) 지원이 필요한 경우:**
  **Bash**

```plain text
yay -S amf-amdgpu-pro

```

  **Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**

**필요한 기능에 따라 해당 패키지를 설치하세요. 예를 들어, OpenGL과 Vulkan 지원이 모두 필요하다면 다음 명령을 실행하세요:**

**Bash**

```plain text
yay -S amdgpu-pro-oglp vulkan-amdgpu-pro

```

**Use code with caution. **[**Learn more**](https://bard.google.com/faq#coding)**content_copy**


---
title: "Linux 에서capslock 기능 끄기"
date: 2025-01-26T10:56:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Caps Lock 기능을 비활성화하면서 키 자체는 유지하려면 "
notion_id: "1871bab9-e3f8-805f-9781-c4d1e143aa9b"
notion_url: "https://www.notion.so/Linux-capslock-1871bab9e3f8805f9781c4d1e143aa9b"
---

# Linux 에서capslock 기능 끄기

> **Summary**
> Caps Lock 기능을 비활성화하면서 키 자체는 유지하려면 

---

리눅스에서 **Caps Lock 기능을 완전히 비활성화하면서도 Caps Lock 키 자체는 유지**하려면 다음 방법을 사용할 수 있습니다.`**udev**`**를 활용한 Caps Lock 기능 제거**

---

Caps Lock 키를 물리적으로는 유지하되, Caps Lock 기능이 절대 작동하지 않도록 하려면 `udev` 규칙을 활용할 수도 있습니다.

1. `udev` 규칙 파일을 만듭니다:
1. 다음 내용을 추가합니다:
1. 설정을 적용합니다:
---

# 복구방법

```javascript
xmodmap -pke | grep Caps
```

```javascript
xmodmap -e "keycode  66 = Caps_Lock NoSymbol Caps_Lock"
```


---
title: "SUDO안먹힐때 (SUDOERS 설정 파일에 없습니다)"
date: 2024-06-16T09:00:00.000Z
draft: false
tags: ["Debian", "ubuntu", "RaspberryPI"]
series: ["Let's Linux!"]
description: "SUDO 권한을 설정하기 위해 /etc/sudoers 파일에 특정 사용자 이름을 추가하는 방법을 설명합니다. 예를 들어, user1에게 비밀번호 없이 모든 권한을 부여하는 설정을 추가하는 방법을 보여줍니다."
notion_id: "236d6911-2ea2-4cc5-a5ef-b0bb95cc2130"
notion_url: "https://www.notion.so/SUDO-SUDOERS-236d69112ea24cc5a5efb0bb95cc2130"
---

# SUDO안먹힐때 (SUDOERS 설정 파일에 없습니다)

> **Summary**
> SUDO 권한을 설정하기 위해 /etc/sudoers 파일에 특정 사용자 이름을 추가하는 방법을 설명합니다. 예를 들어, user1에게 비밀번호 없이 모든 권한을 부여하는 설정을 추가하는 방법을 보여줍니다.

---

[https://coding-ggangfe.tistory.com/32](https://coding-ggangfe.tistory.com/32)

```latex
su
```

```latex
cd ~
```

```latex
vim -f /etc/sudoers
```

### 이제 다음 코드 추가

```latex
[유저이름]     ALL=(ALL)       ALL
```

```plain text
user1        ALL=(ALL)       NOPASSWD: ALL
```


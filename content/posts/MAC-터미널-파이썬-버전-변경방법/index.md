---
title: "MAC 터미널 파이썬 버전 변경방법"
date: 2023-05-25T00:00:00.000Z
draft: false
tags: ["MAC", "Python", "shell"]
series: ["Let's MAC!"]
description: "맥 터미널에서 파이썬 버전을 3.11로 변경하는 방법은 현재 설치된 버전을 확인하고, 새 버전의 위치를 찾은 후, 심볼릭 링크를 생성하여 변경하는 것입니다. 변경 후에는 새 터미널을 열고 버전을 확인해야 합니다."
notion_id: "f69ddbfa-8e16-4c3b-ac88-9a2acd7c50ee"
notion_url: "https://www.notion.so/MAC-f69ddbfa8e164c3bac889a2acd7c50ee"
---

# MAC 터미널 파이썬 버전 변경방법

> **Summary**
> 맥 터미널에서 파이썬 버전을 3.11로 변경하는 방법은 현재 설치된 버전을 확인하고, 새 버전의 위치를 찾은 후, 심볼릭 링크를 생성하여 변경하는 것입니다. 변경 후에는 새 터미널을 열고 버전을 확인해야 합니다.

---


맥 터미널에서 파이썬 버전을 변경하는 방법은 다음과 같습니다.

# 터미널을 엽니다.다음 명령어를 입력하여 현재 설치된 파이썬 버전을 확인합니다.

```plain text
python --version

```

# 다음 명령어로 새로 설치한 파이썬 버전의 위치를 확인합니다

```plain text
which python3.11
```

# 다음 명령어를 입력하여 변경하고 싶은 파이썬 버전을 연결합니다.

**코드 스니펫**

```plain text
ln -s -f /usr/local/bin/python3.11 /usr/local/bin/python

```

# 터미널을 새로 열고 파이썬 버전을 확인합니다.

**코드 스니펫**

```plain text
python --version
```


---
title: "웹사이트 자동화 & 엑셀정리"
date: 2023-01-27T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["매크로개발"]
description: "특정 디렉토리에서 '.html' 및 '.csv' 확장자를 가진 파일을 삭제하는 방법에 대한 파이썬 코드 예시가 제공됩니다."
notion_id: "9512dfdf-0177-4239-92ec-06a3cd52aa29"
---

# 웹사이트 자동화 & 엑셀정리

> **Summary**
> 특정 디렉토리에서 '.html' 및 '.csv' 확장자를 가진 파일을 삭제하는 방법에 대한 파이썬 코드 예시가 제공됩니다.

---

```python
import os
import glob

path = "C:/market_data/Origin"

for dirpath, dirnames, filenames in os.walk(path):
    for filename in filenames:
        if filename.endswith('.html') or filename.endswith('.csv'):
            filepath = os.path.join(dirpath, filename)
            os.remove(filepath)
```

특정 디렉토리에 특정확장자 지우는법



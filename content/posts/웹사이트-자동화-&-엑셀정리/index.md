---
title: "웹사이트 자동화 & 엑셀정리"
date: 2023-01-26T00:00:00.000Z
draft: false
tags: ["Python", "Gadget"]
series: ["매크로개발"]
description: "외부에서 파이썬 스크립트를 실행하는 방법을 설명하며, 매크로 개발과 관련된 내용을 다룹니다. 스크립트 실행을 위해 Python PATH 설정이 필요합니다."
notion_id: "b7e3749b-e09d-4eb6-b0a9-02969fced665"
notion_url: "https://www.notion.so/b7e3749be09d4eb6b0a902969fced665"
---

# 웹사이트 자동화 & 엑셀정리

> **Summary**
> 외부에서 파이썬 스크립트를 실행하는 방법을 설명하며, 매크로 개발과 관련된 내용을 다룹니다. 스크립트 실행을 위해 Python PATH 설정이 필요합니다.

---

```python
import subprocess
import sys

script_path = os.path.join(os.path.dirname(__file__), "Auto_Excel_01.py")
subprocess.run(args=[sys.executable, script_path])
```

🔗 [https://somjang.tistory.com/entry/Windows-Windows%EC%97%90%EC%84%9C-Python-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0](https://somjang.tistory.com/entry/Windows-Windows%EC%97%90%EC%84%9C-Python-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

파이썬 PATH 설정이 제대로 되어있어야한다


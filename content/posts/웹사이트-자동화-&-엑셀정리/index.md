---
title: "웹사이트 자동화 & 엑셀정리"
date: 2023-01-26T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["Let's Macro"]
description: "외부에서 파이썬 스크립트를 실행하는 방법에 대한 내용으로, 매크로 개발과 관련된 예제 코드가 포함되어 있으며, 파이썬 PATH 설정이 올바르게 되어 있어야 한다고 언급하고 있다."
featured_image: "image_2ac45e5c97055d8bdd52b293.png"
notion_id: "b7e3749b-e09d-4eb6-b0a9-02969fced665"
---

# 웹사이트 자동화 & 엑셀정리

> **Summary**
> 외부에서 파이썬 스크립트를 실행하는 방법에 대한 내용으로, 매크로 개발과 관련된 예제 코드가 포함되어 있으며, 파이썬 PATH 설정이 올바르게 되어 있어야 한다고 언급하고 있다.

---

![Image](image_2ac45e5c97055d8bdd52b293.png)

```python
import subprocess
import sys

script_path = os.path.join(os.path.dirname(__file__), "Auto_Excel_01.py")
subprocess.run(args=[sys.executable, script_path])
```

🔗 [https://somjang.tistory.com/entry/Windows-Windows%EC%97%90%EC%84%9C-Python-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0](https://somjang.tistory.com/entry/Windows-Windows%EC%97%90%EC%84%9C-Python-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

파이썬 PATH 설정이 제대로 되어있어야한다


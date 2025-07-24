---
title: "파이썬으로 블로그 글 자동화1"
date: 2023-03-02T00:00:00.000Z
draft: false
tags: ["Python", "AI", "Notion"]
series: ["NotionAI와 Tistory OpenAPI를 활용한 블로그 포스팅"]
description: "노션 AI를 활용하여 블로그 글을 자동으로 생성하고, 티스토리 블로그에 자동으로 업로드하는 방법에 대한 강의 영상과 코드 예시를 제공한다. 노션 AI와 티스토리 OpenAPI를 사용하여 블로그 포스팅을 자동화하는 과정과 필요한 설정을 설명한다."
notion_id: "13eab0d8-2881-4494-8c2a-5433567082ca"
notion_url: "https://www.notion.so/1-13eab0d8288144948c2a5433567082ca"
---

# 파이썬으로 블로그 글 자동화1

> **Summary**
> 노션 AI를 활용하여 블로그 글을 자동으로 생성하고, 티스토리 블로그에 자동으로 업로드하는 방법에 대한 강의 영상과 코드 예시를 제공한다. 노션 AI와 티스토리 OpenAPI를 사용하여 블로그 포스팅을 자동화하는 과정과 필요한 설정을 설명한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/776cb7a4-de22-43c6-b478-8439b88c5af3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354OEE6Y%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDiXqiDYYIZ5teTSnX7Ru6ndBHN86cmfCQzAi1uk2BD7AiBOWGLWwZrF22DfcqpIg5m67CTLFEIwsjRINga3rQA4tSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2BO60FYgixgeLB5r5KtwDJ9TdfwhAAMbjgC7JT5fZNGpAVA%2FpCl%2BST54c9yLi8TskSpeHXCIWuHNY0nxdqw48S%2FuNnIGaqUhNCCSFCoqPqHIheKr6c59pp3Z%2FBE4Pxa6oyk2JSt0uNCBWD6W5sWqJ5RdXRAEtgbNrFBZSqrvw2EvACfMGtOtGii8QMivnEcsinVM8LzzgelKLq6QHFxIS7x6KMX6tNuItQcW0GJrs7oCdRzXZ79gAzeO5D1d%2FshpNgKhQHS2l62P4Bw7S1zY4xt4lcmisYAfuYK72NeL0CQsJLqk83Gq20va6txihKKMoIqf6Nb5kqDkx1H%2FXxgktuShKROI1Y0xRbnDzHMkBzxQ40B7%2BMrUqo6y8o7QVQhS1SH6OrclQFKK8ZNsZzrKaCV1qr3XauoQFBR023ncioAHDLcHPhLfevAIrnyXa%2F1Zgj8IFWG4CSGHZXCKjvY0itu99d%2F3E%2FvQN6aFdzbBu%2FF406vBUrbLe%2BUQeZOIig%2Fwx4Vmzpx22dFxNWt%2FOqN%2BI%2FdIMy5z1r2WtwLkhwr5ZjYT9eQyhAFXSKvRC1qegu3vUTbCPWUTsYDHeUUCkL0k0IunC8gDsoyHGelWmIMbCfbT2F1vkHumUpv%2BXQhYZVNnCpsF8KwKf0s8ATAcw3L%2BIxAY6pgHMCTtzgghUDyYIyngV623Tsstj76vrlx3dykNRcy3F5SXeNaqIQaYbJBrJ27fi3W5v36VspcxfdtINaLiCOm9ZDgPbHd6e%2FwcBkBHV1871ljgHsGFsqPtKrRHxaPKJUnY1%2FsXJCy8ahheMfTqqPq%2B6fxa2ef9hiKr%2BgJz21oVDUK5nCLcAqJbmI4cQgqfbomFH5UnCNkE5U46FarTE9Dxpagjx8tym&X-Amz-Signature=10f2fec865a188b058defc0046445af3f8df120fe6c11bbd1d6c19bbb6dbd6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### 강의영상

> 🔥 **py -m pip install --upgrade notionai-py**

```python
#노션AI에서 글 자동생성

from notionai import NotionAI

NOTION_TOKEN = ''
NOTION_SPACE_ID = ''

topic = '자본 없이 제태크를 시작하는 방법에 대해서'

ai = NotionAI(NOTION_TOKEN,NOTION_SPACE_ID)
result = ai.blog_post(f'write a blog about {topic}')

print(result)
```

> 🔥 **py -m pip install tistory**

```python
#티스토리에 글 불러오기

from tistory import Tistory

#블로그 주소
blog_url = "https://a-004.tistory.com/"
#클라이언트 ID, SECRET
client_id = ""
client_id_secret = ""
#티스토리 인스턴트 생성
ts = Tistory(blog_url, client_id, client_id_secret)
ts.access_token = ""

page_number = 1
ts.list_post(page_number)
print(ts.list_post(page_number),"+++++++++++++++++++++++++++++++ 2 \n\n")
```

# 노션AI

# 티스토리 자동업로드 기본 세팅


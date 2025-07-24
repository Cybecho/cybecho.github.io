---
title: "파이썬으로 블로그 글 자동화1"
date: 2023-03-02T00:00:00.000Z
draft: false
tags: ["Python", "AI", "Notion"]
series: ["NotionAI와 Tistory OpenAPI를 활용한 블로그 포스팅"]
description: "노션 AI를 활용하여 블로그 글을 자동 생성하고, 티스토리 API를 통해 자동 업로드하는 방법에 대한 강의 영상과 코드 예시를 제공한다. 설치 방법과 API 인증 과정도 설명되어 있다."
notion_id: "13eab0d8-2881-4494-8c2a-5433567082ca"
notion_url: "https://www.notion.so/1-13eab0d8288144948c2a5433567082ca"
---

# 파이썬으로 블로그 글 자동화1

> **Summary**
> 노션 AI를 활용하여 블로그 글을 자동 생성하고, 티스토리 API를 통해 자동 업로드하는 방법에 대한 강의 영상과 코드 예시를 제공한다. 설치 방법과 API 인증 과정도 설명되어 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/776cb7a4-de22-43c6-b478-8439b88c5af3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GWVY5H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCJ0Q02%2Bbor15X6BV0YsOICy%2BAaHmdrlhM7VMAQsiUQtgIhAPf2rVRMaRQxfdG5LjkE5WeAD6%2F0NFRhWZU%2FCBEScjE7Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyQy53nvMlK%2FVE0eDQq3AM5Un0GiImTT92n47pDiL%2Fg1e8TgblSYX0wJ1cHr9IB47kLMZ%2F5oGzG6KE0vABr98RttQ6MgGAfBaBYbRjRCu1JPV%2Bg4K1yuSrm8i%2BkxAbBcZS%2BQbTa1XDyufdyR51fyE%2FAVLRL8YEgK9jqQVPSeKUTVTxi11jBJyP2lnsZAfdwB8xdGFwQa%2B8bIZzdHhsNla1iQdHhASIrco6LjLEhvpcGtogrD93YRGyW39X3pnTQ7zg8mLb6D3gYcL3C%2FaBz%2Bs9pBL3gj3NY%2B%2Fxj5ygITWMEhoKHkCPAr1w8GgDEpDkkEISSPiaWVKG3RQ%2B5oIB6ydfpu8Gkioniah1u%2Fk4DlDLDjsvRW3NFibDJSFLd1mMOOnb3JH5gpcvR5NSL8CmCz8aVWMg9Ak3TsA57N3wQ0nuUv98kfoptcN4ijH241YOB8NZm9NZkpuj7btEgv9HSP35EmX4hNKlO4osT0k2%2BUTtrdySpzj9z5QTkDSOYF8jQBaAxOUhowS6hdYL7sokIxDhaaK1v9T2%2BrKt0O1X5AXK2PUHzCM%2ByBbSXM7cSwgUkG%2FahPtqPkrm%2BgHC6GLvF%2FBwXCuT1T7mmyTpYnWaR23Ux6HVcfzD7nOPeF8SlOhjelHlerDpU%2FosogEkNyjCFz4fEBjqkATYeSlfKxI4RKb5e9H8wcSMXWbRqDjQeWB6ccHSU%2B%2Bu4J%2BdaljGkGjJ0bh%2F4cPCsp62N92cz3yfxEE8zOXNs1H1lWZ%2FHFQcDymuoUcFTUrwkdO3tjtAX2Wrmk%2FVsx6jKYX0ANbHEYXTcoZDnsiViA7C%2BBYqT4wVqGUfWEx%2FvCsWS%2FQ9jN3AsKSLt%2BqG6rfhA3FflUzcSTo7Gi8hJfXh04OyqGk%2BG&X-Amz-Signature=b2471c7c94f892ea3fafd1ec2e6c2596eb937c3f1d8f0dac0c56d0f6b19f02b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


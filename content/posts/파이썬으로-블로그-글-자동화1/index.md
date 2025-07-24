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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/776cb7a4-de22-43c6-b478-8439b88c5af3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZK6OOR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICya86APsxxLKBTEOF5susGgx5L64we47d%2BOI63Qnry7AiEAvWo0DAkKq5pEOHgCez9mI2SZzZTQInBewrHKrttHAf0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP5yDHzQsj1ped317yrcAzDQ0IyAhSSQMznsCjie5Zrt2sYjxywJw6hToV09am1DrFg%2FzSMUxVE149ELFS7WRSaMFyVi9ej%2Fb9lUzzHdch5vWi8mfs8y9dk0AaxOskWLkqFvwjWwjqUietVLUyyAPwboNwkj38mEb%2FYdGEmNarCbXMZ%2FNadlnPVya%2B70taSAh76%2BMF9qttSZz8mafnA3srZZa6E5OLpAU5tsU5m%2BkUkj%2Fd6PKo%2BoKhp0oCqjM1cPZhHkvh%2F9YAonoK7Q1BRXWVs7VnyTzi10s0eYG0au9qq9Ikhh%2F4dQxa8hqEdNhWJD54Fm55N7KNARbSPnET%2BMXt13UfXVEXjbsSYzw7wi%2BCTXCSCZpUs6cu5%2FGPmWJ2lXKfmFmP4KIBTHuTjtsPJ6jdh34s8qUkGg99FEFlOBYM5%2FJs4K0aPW1VyN8Jj0OJSxPe3milUVyf91ddO0G7MZlkqLkFBaPaIS7JSEV5RkTM9dcR0034Pgutthsx7%2F%2FED36%2B5jXYZEwRR4c%2FCqbMesanGudBjJe6M5XA7wReoEoNC9aWuEBN%2B2IuvrMrWRWHKAWQQ%2BWhxRBbpKNBEEZ7KjAHyZuNUGTNlSou0IoGGlk1s5yDViG20o6AeaXda6gWgBc%2F81SLDAcQ95EOSHMM7Oh8QGOqUB27dLPKZJ%2Fb7qY7Ziab4tMoUgwP9HlV4cHMCDkXqNArUleA9tXDA1cIbQCMP5YGZu7R7YPIoIGSRMxagt%2Bz5gC9IhV9wDxBldx2Btdq8m7B%2BGc5qfNAk1ronDDuH5UoJ4XRORhqB3MiQdmzAl%2BQ7m7NMqvB9hsAK33z503Y%2Bs9owAcr3%2FKy4oXl%2F29WABIw%2FA0jjfX5k%2FHWJcsVNlbhav%2FCDRqhjV&X-Amz-Signature=de8b66b988d858332fa8b831f1d12c1b725b28e87f77a9ae75a6b1f3dad190fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


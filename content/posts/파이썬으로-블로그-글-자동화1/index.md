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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/776cb7a4-de22-43c6-b478-8439b88c5af3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2COC4W%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAe3QB8JHks3ngdbv2LdH6QOnb0DwrhVr3xKGuNf8VyVAiEAn%2Fk8qjAUw4t%2Fup5x73oMvGvJPjoFJGD%2FdrVEmop%2Fj5oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEkV7tlJG68LeViiVCrcA8ClWkpUYiUOyRbSsOQYb0QCaenfWcfNUo7D8O%2FQdI1x3C12w6cLQGNHw0gu54OsoSaD%2FjZTNJcT10msGLpyhTLoSPxjVNLY20d1Iemv3Wg5n1%2BeIdwk1NXRMmo6U6CoMcm7MVQfkj5PEt%2BmoSGcFDseR6j4W4JUz%2BSf8TyyE08JGx0dovTFubKTCd8qQh9%2Bi%2FukYB705dVSwr0hzGLTHf9XyyDBK54zH7J2CZakD7g3Iln%2F7RbjmAW7PFgB6prU80Macn%2B1F6kgWaKChJszXmV1htIR07s75G0m3HcAhoAag5GholFTuJGyhhwtJS%2BqjZhcN465Kn9JEGmquohiuRqcNJLaHEZaM2twQ1hekXhah%2FyC8S3pPC1jUPQ4wyNAfQmco35JlR5DxdMT23tAVFon1LSlxbHRkhJaOBcIq6t6U7Q22tRTw6HP09XXdAPAWibs5Frq4yQ3%2FSrcn4aTd3qsCBsqTFqqX6Ju9dvqQ5r1q74OtAvqPzg79pITNv0SgwmWkoqduu5bovaJSOGaep4dm1Zw9716f9TorNxZA3UsbIWQ%2B%2BHrM3zN6pULkSZWfTGub3FlEIBX5DbQxaS4dTxCAyYYMuo%2Bw2v85UvyZtB%2B8gvbs%2BXq72OrnOd7MOP2h8QGOqUBMmHW%2BGjy8yZQlMAncnA8Pxr7WcWK0F6k2%2F0mhaMHgxd5f5v0k1S7TVN6mCilYVe%2BQT4abOttv1DoR44KMlczq5XM4sfAg2W8WtRHZ9kaj7lDa8adFS1gAGqAkdBYLLf1ovwmKMo1cRoiTyvWRJmzl4LzwSYJSTrOmljW77wRk%2FxQYxxp9Nso5f5ILHfZTYYZheqAksZGW0g2dNaTL6WTJi%2FDaCtC&X-Amz-Signature=72bacb24eb992c9d7495861ce80ba125d4f691782ba5609aaab655d69c6ea4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


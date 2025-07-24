---
title: "PowerToys 잡버그 잡기 똥꼬쇼"
date: 2023-11-04T00:00:00.000Z
draft: false
tags: ["WINDOWS", "POWER_TOYS"]
series: ["Don't Hate Windows!"]
description: "키보드 핫키 버그 문제를 해결하기 위해 다양한 단축키 조합을 시도했으며, Alt + U와 O를 번갈아 누르면 문제가 해결되는 것으로 보인다. 버전 다운그레이드(0.74.1) 후에도 동일한 문제가 발생했지만, 일부 개선이 있었던 것으로 나타났다."
notion_id: "f5eebcb5-be9a-4bfe-8531-9af9a14b63d4"
notion_url: "https://www.notion.so/PowerToys-f5eebcb5be9a4bfe85319af9a14b63d4"
---

# PowerToys 잡버그 잡기 똥꼬쇼

> **Summary**
> 키보드 핫키 버그 문제를 해결하기 위해 다양한 단축키 조합을 시도했으며, Alt + U와 O를 번갈아 누르면 문제가 해결되는 것으로 보인다. 버전 다운그레이드(0.74.1) 후에도 동일한 문제가 발생했지만, 일부 개선이 있었던 것으로 나타났다.

---

# 아오 키보드 핫키 버그 왜이렇게 많냐??

# 해결??? 

- Alt + U : home
- Alt + O : End

로 맵핑해놨었는데,,, 이거 남발하다보니

- alt + a : Ctrl + a
- alt + c,v : Ctrl + c,v
이 명령어들이 안먹는 버그들이 있었다…


이거 해결 방법은 그냥 

- alt + i j k l 혹은 
- alt + u ,o
남발하니까 버그가 풀리는데,,,, 이거 원리가 뭐지?

→ alt + u 가 좀 더 이 버그에 관련이 있을 것 같다

> Alt + shift + O(home) or U(end) 를 번갈아 누르면 해결됨
이게 무슨 에러일까?

# PowerLancher.exe 의 부재가 원인?

🔗 [https://github.com/microsoft/PowerToys/issues/9017](https://github.com/microsoft/PowerToys/issues/9017)

🔗 [https://github.com/microsoft/PowerToys/issues/9018](https://github.com/microsoft/PowerToys/issues/9018)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc8a481e-de1e-41fb-9e59-922e342cdedc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYL7TW24%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF0RRL7sGy0jUR00L8Egxaw9hpbRej6LMqB12gf%2FkX40AiBMoWRLmf1RXShD%2Fe7tsPSaqXujfvs1s762lzyiGhhiHSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2FZN3SMoql%2BdhIdVKKtwDg4LLqQ6GP5%2FP39ngT0mdpaKjm3r20KYUoDNVf%2FTjb7ofIilmC5lH3%2FaDe7bCgcNEp%2FCHM3DYTswVyQnfw5ADN8PGh5CcmzTJTxuoGLGH4I7RdxlI6BzmoWhmd6uaAQfDkmFE2GtABcwaOK%2BsoxpqUZGevKOqDvUYxj9Iy8CxCRFZfFs877C1jqog1pvFMNfdFA4%2BWmanEphmfX3I%2BGXrEcYwU5uTvQMoc%2Fh6t5PD421Zdd7nnXdyCDl0Ka3rntau83C9i8SJBgDfS6llA6hDzhC1Y94er%2FfyCVdX9I5gQ0XKQidwCZC9aN3hYU4v45fZXxlfa%2BBRgVzaKz2LmhT7iXvhHlKbEf7zBQnc330QvSzRZbKeiWoPdQLMsys%2F3SWt8vEqpNrTn4KNzVMOlUkTlmtcibiexGnYstVxjSyQVQ78adcGz8xnflNaYYM7r%2BSkVMUYOzX9tQXYMvc8H9Xg3L%2BMuaSk5r7MW%2FrkMKEtSaQFBqCa9YkKCQBrhINn18G9gMkPpF%2BWamExxIwjdksL1lGp3bFGIk1ylWdft86ReZoGCq1DwXM16ZRT6FqqLVsAEYDYwQQYUI%2B%2FPOug7%2F7aYyk0WeIjQBNauzA5g2FOlCUc5u%2BsPljKDj%2Fc2gYw486HxAY6pgFDs8Fy%2F5FVhURn3lZhX2EOLEPgywt58C%2FhgeCU%2B45lrdchJUn6FPQCyYVvj%2BYqsW5kCgSSjiDybYBOstiOwx9lP9%2FZ3DJlGfzQ9uz5z3hXNFPyPmn2bga5gIn6efYSyZgX35jW7kXmBWPPhOBz3PDTo%2Bbo7NxGnriVYaMlzlz1iVSvacIw1ycCxugJVLqvrJH6TKfHsc4LM9sndmnEkCmTI1KFfRTD&X-Amz-Signature=5a2dab12c3b03e95c0602335f5d87fa5e4bff72758afe8e2d4385c491b612d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 버전이 문제? (버그발생 빌드 0.75.1)

### → 버전 문제도 아닙니다! 0.74.1 로 다운그레이드해도, 똑같은 문제 발생

🔗 [https://github.com/microsoft/PowerToys/releases](https://github.com/microsoft/PowerToys/releases)

0.74.1 로 다운그레이드 하니까 좀 나아진듯


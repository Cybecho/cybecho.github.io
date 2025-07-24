---
title: "Git 동기화시 충돌 발생했을때 해결법"
date: 2023-10-29T00:00:00.000Z
draft: false
tags: ["obsidian"]
series: ["Git", "Tips"]
description: "깃 충돌이 발생했을 때, 에러 메시지를 더블클릭하여 충돌이 일어난 파일들을 확인하고, 해당 파일을 제거하기 위해 "
notion_id: "c00dabb6-8b8f-4de0-8733-95dc39aa66b4"
notion_url: "https://www.notion.so/Git-c00dabb68b8f4de0873395dc39aa66b4"
---

# Git 동기화시 충돌 발생했을때 해결법

> **Summary**
> 깃 충돌이 발생했을 때, 에러 메시지를 더블클릭하여 충돌이 일어난 파일들을 확인하고, 해당 파일을 제거하기 위해 

---


![Image](https://obsidian.md/images/2023-06-logo.png)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e7b20513-db50-4a37-8bbe-8f643efee825/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GWVY5H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCJ0Q02%2Bbor15X6BV0YsOICy%2BAaHmdrlhM7VMAQsiUQtgIhAPf2rVRMaRQxfdG5LjkE5WeAD6%2F0NFRhWZU%2FCBEScjE7Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyQy53nvMlK%2FVE0eDQq3AM5Un0GiImTT92n47pDiL%2Fg1e8TgblSYX0wJ1cHr9IB47kLMZ%2F5oGzG6KE0vABr98RttQ6MgGAfBaBYbRjRCu1JPV%2Bg4K1yuSrm8i%2BkxAbBcZS%2BQbTa1XDyufdyR51fyE%2FAVLRL8YEgK9jqQVPSeKUTVTxi11jBJyP2lnsZAfdwB8xdGFwQa%2B8bIZzdHhsNla1iQdHhASIrco6LjLEhvpcGtogrD93YRGyW39X3pnTQ7zg8mLb6D3gYcL3C%2FaBz%2Bs9pBL3gj3NY%2B%2Fxj5ygITWMEhoKHkCPAr1w8GgDEpDkkEISSPiaWVKG3RQ%2B5oIB6ydfpu8Gkioniah1u%2Fk4DlDLDjsvRW3NFibDJSFLd1mMOOnb3JH5gpcvR5NSL8CmCz8aVWMg9Ak3TsA57N3wQ0nuUv98kfoptcN4ijH241YOB8NZm9NZkpuj7btEgv9HSP35EmX4hNKlO4osT0k2%2BUTtrdySpzj9z5QTkDSOYF8jQBaAxOUhowS6hdYL7sokIxDhaaK1v9T2%2BrKt0O1X5AXK2PUHzCM%2ByBbSXM7cSwgUkG%2FahPtqPkrm%2BgHC6GLvF%2FBwXCuT1T7mmyTpYnWaR23Ux6HVcfzD7nOPeF8SlOhjelHlerDpU%2FosogEkNyjCFz4fEBjqkATYeSlfKxI4RKb5e9H8wcSMXWbRqDjQeWB6ccHSU%2B%2Bu4J%2BdaljGkGjJ0bh%2F4cPCsp62N92cz3yfxEE8zOXNs1H1lWZ%2FHFQcDymuoUcFTUrwkdO3tjtAX2Wrmk%2FVsx6jKYX0ANbHEYXTcoZDnsiViA7C%2BBYqT4wVqGUfWEx%2FvCsWS%2FQ9jN3AsKSLt%2BqG6rfhA3FflUzcSTo7Gi8hJfXh04OyqGk%2BG&X-Amz-Signature=b0ef443179c64eb86c84346709f79bda7cbb1a7cf3e65054cced0fd6a99d184d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/234ec01a-e9d8-4c07-aafe-6dc3be3d8ac1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GWVY5H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCJ0Q02%2Bbor15X6BV0YsOICy%2BAaHmdrlhM7VMAQsiUQtgIhAPf2rVRMaRQxfdG5LjkE5WeAD6%2F0NFRhWZU%2FCBEScjE7Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyQy53nvMlK%2FVE0eDQq3AM5Un0GiImTT92n47pDiL%2Fg1e8TgblSYX0wJ1cHr9IB47kLMZ%2F5oGzG6KE0vABr98RttQ6MgGAfBaBYbRjRCu1JPV%2Bg4K1yuSrm8i%2BkxAbBcZS%2BQbTa1XDyufdyR51fyE%2FAVLRL8YEgK9jqQVPSeKUTVTxi11jBJyP2lnsZAfdwB8xdGFwQa%2B8bIZzdHhsNla1iQdHhASIrco6LjLEhvpcGtogrD93YRGyW39X3pnTQ7zg8mLb6D3gYcL3C%2FaBz%2Bs9pBL3gj3NY%2B%2Fxj5ygITWMEhoKHkCPAr1w8GgDEpDkkEISSPiaWVKG3RQ%2B5oIB6ydfpu8Gkioniah1u%2Fk4DlDLDjsvRW3NFibDJSFLd1mMOOnb3JH5gpcvR5NSL8CmCz8aVWMg9Ak3TsA57N3wQ0nuUv98kfoptcN4ijH241YOB8NZm9NZkpuj7btEgv9HSP35EmX4hNKlO4osT0k2%2BUTtrdySpzj9z5QTkDSOYF8jQBaAxOUhowS6hdYL7sokIxDhaaK1v9T2%2BrKt0O1X5AXK2PUHzCM%2ByBbSXM7cSwgUkG%2FahPtqPkrm%2BgHC6GLvF%2FBwXCuT1T7mmyTpYnWaR23Ux6HVcfzD7nOPeF8SlOhjelHlerDpU%2FosogEkNyjCFz4fEBjqkATYeSlfKxI4RKb5e9H8wcSMXWbRqDjQeWB6ccHSU%2B%2Bu4J%2BdaljGkGjJ0bh%2F4cPCsp62N92cz3yfxEE8zOXNs1H1lWZ%2FHFQcDymuoUcFTUrwkdO3tjtAX2Wrmk%2FVsx6jKYX0ANbHEYXTcoZDnsiViA7C%2BBYqT4wVqGUfWEx%2FvCsWS%2FQ9jN3AsKSLt%2BqG6rfhA3FflUzcSTo7Gi8hJfXh04OyqGk%2BG&X-Amz-Signature=d77394d236f047bd015f22f02fc401a1fcb0e8938dad72b2dceb783b0912f904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
git rm <파일>
```


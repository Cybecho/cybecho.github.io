---
title: "아이패드를 위한 윈도우 해상도 고정"
date: 2023-02-14T00:00:00.000Z
draft: false
tags: ["Util"]
series: ["Don't Hate Windows!", "원격 라이프!"]
description: "레지스트리를 수정하여 아이패드의 해상도를 고정하는 방법에 대한 안내로, M1 아이패드의 해상도는 2388 x 1668이며, 특정 레지스트리 경로에서 관련 설정을 변경해야 합니다."
notion_id: "739bb756-c8a3-4876-8b5e-8be55cc2f1c9"
notion_url: "https://www.notion.so/739bb756c8a348768b5e8be55cc2f1c9"
---

# 아이패드를 위한 윈도우 해상도 고정

> **Summary**
> 레지스트리를 수정하여 아이패드의 해상도를 고정하는 방법에 대한 안내로, M1 아이패드의 해상도는 2388 x 1668이며, 특정 레지스트리 경로에서 관련 설정을 변경해야 합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b7623eea-09e2-4614-b139-d8ffeaa13cf0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2Q42GH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC8SYkNGUCXUBf5hA%2Fod0K%2Bs5KXjWXQ0IeGJh9u0vhV8AIhANPFBWhvMvTSh9xeGbH2vm5Rx84qyUd02i5e3ZNwuCB2Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxdTsDo2J6FvbjrID8q3APWnrklwVwfQqOOjXukGaA5AHqFDDHtXrrGObMhcOJwSCy7RXal5bYK1ITyLZFKH2R9Aj%2BFh%2FGGCLd%2FYZAPKPeF48agipzZGZi4mFslcn1TzS9jDF6JYYleqBA5qSSBJaqL5pFj8vrGRxVP%2BPj4R1BLf%2B3nG2FtbEaMpgaPZuvf5c4Z5SpRUHXFy4dgW5xKAkUiF1MWcvkeSh7JpO7VeEvFEYgXbM7sH4zK2zAcSGlRrXmUnXB2EK9JdKJv6qTBD9A5UN8yj3PtTQHIK1y%2FOwgdrTYpjteE6TrhxRni09V7Q31ob4tnK3yEFAQ3v0XjYAfGINmY1o7eGl0paAbTuooCtaW7QR2A5hBisHtDRnjvuImoexUjCg6z711bPijxlK7Ee4auHL1WU5nwfx59GQwcc8H2xMciJ9mLoIjy9BOMfyccjWUSelNf0UcIP0WOVZmSWZxmt7y5GXkEt1I6CSiB1%2BMnV9ixr6QcBFLEhhGzYzRXmBK1ufrs8DeTklIJuOefARjTFOz89j1BQ8mQ2%2B4CiXa7DQ9DPajwU9IJLnnLziFiP6M3SpuCzdN5Fn9W3ueOE7%2FDvulpxs7Z6f2akzbRJOsS5tSGZx37eL5uEdwraXrDFkoUaeiDv9nLxzD%2B9IfEBjqkAXBjwnHWQhV6coCtQEaFOriV9yW8ch8uDqnOD%2BR%2Fp%2FPzvNq9iK1gzafqogtvbuedQ%2BAwGiZosmNBlXBVio5XOzqgX4%2B%2FfT10AzuqfxJhadLDw8LFdqNdqUzAskdpEfxjpMICRbb9xOZHkfkKPsNMbYo0PeCqmadpZcaxJbkQVwf0JybRzyROPeAaJwT3MHHZMv9J6T9MK1KjPYORA8jVVoLVpShj&X-Amz-Signature=ece713a8c5a5fab7e045d3468b84f0a23215bf5f284a73d6df36fee6381f1a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://zkim0115.tistory.com/2570](https://zkim0115.tistory.com/2570)

> 💻 **레지스트리로 이동 후**
> ```basic
> HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Configuration
> ```
>
>

> 💻 **해당 디렉토리 최하단에존재하는 폴더안에 ‘00’ 폴더에 해상도관련 레지스트리 전부 변경**

M1 아이패드의 해상도는 2388 x 1668


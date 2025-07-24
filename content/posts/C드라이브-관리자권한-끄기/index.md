---
title: "C드라이브 관리자권한 끄기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우 C 드라이브에서 관리자 권한을 요구하는 문제를 해결하기 위해, 레지스트리에서 관리자 권한을 끄는 방법을 설명합니다. 키맵핑으로 인한 잡버그가 많다는 언급도 있습니다."
notion_id: "215c3694-3dee-4a40-af5f-cac1d481c903"
notion_url: "https://www.notion.so/C-215c36943dee4a40af5fcac1d481c903"
---

# C드라이브 관리자권한 끄기

> **Summary**
> 윈도우 C 드라이브에서 관리자 권한을 요구하는 문제를 해결하기 위해, 레지스트리에서 관리자 권한을 끄는 방법을 설명합니다. 키맵핑으로 인한 잡버그가 많다는 언급도 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH73EYHT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCs3H%2FgLOg9amJAkZWkOC9VFxvZbq5FOAefT%2BbANHWY8gIhAIu7NgFDXvInyR18TvlXunTaQztyG8jjBSpCX2AGLOssKv8DCCkQABoMNjM3NDIzMTgzODA1IgzkRHg3LHKFy0N7E5Eq3AML2%2Fb4YOYvt87WKudNYcpx4Ok6RI1tPnP5mtDJdExg93SDN6GgGIymURx%2F4hcDBvY1%2BQPvCn9ABs0mFYWtYhkGmILxt6AeakmywTdHXH4XKx9jh5%2Fk0kfTVtBiT8xAhUQAiAl%2Bma%2BQnXlng9A7PKI2sz%2Fl86NVXiQqICe0ZH9iW3DoHQENQclKGjxMydUISUYPzjKc00A%2FSC2RBQJyO6OBFuZzinBV4XbkQJbQ3sUSLwK35VuVhY2VJk2LbjizCiLa0sVVoyMpBSvAMbbePeyv%2F95vWIddzhl8ZORuPHI742YOUgs76wW8MRu6VZpDOPbxgUM6aA30t57w%2FUAMMywxMgEh9rHuTWTQ0nAKP48i3dyV8vxRJjVX8C5NFfXFHpZQsxjqa%2FJWgwpVwDNphuEhx%2FxfaJkl4UtEyQT%2FBJmWcNCED1nk12hjdX3xSJXh1arHaR09lnWdbJ7inSkDndfBshK73%2Fy6OzFzmhd0UbWY%2B5YHkB4R4XZ3l67fhhLRMIjaSVXEFyvvLKW2IY75yI4JETBOkHS2fG26u5QsQoUKy5BhoQ6TIH8kMMKAtp9y52w9M5DuXG%2FWqnZeIHXW2zCo0yO3XATLh9pHhJDGacsGHxQOiMN2H3%2Bi9P3srTCOz4fEBjqkATpWjYdrI8r%2Flfp2uGkuKEGQg167V69p5di9T%2BnVZgntObnpCVeZ1S41lqpa8IxLMvELzx%2BDrVkfYPEf3ef%2BjUihb3kaor1mcDCitgRM8dLQbjwuLwgjKion0fFzTjD3kPL4HtF%2BYlgVOrpc7c9vqYJY1ComO3%2BNCldy3ZEmw3YiQZeILOL%2FvZdtXhEldYCnk261XgQlvTmNbOS07sWBMPRtKQUw&X-Amz-Signature=506159182695adcec796ce357a1ccbf248cb400091c4f1f71daf18150737e686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8525155b-0b61-444e-b8d9-9b4f0e2305d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH73EYHT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCs3H%2FgLOg9amJAkZWkOC9VFxvZbq5FOAefT%2BbANHWY8gIhAIu7NgFDXvInyR18TvlXunTaQztyG8jjBSpCX2AGLOssKv8DCCkQABoMNjM3NDIzMTgzODA1IgzkRHg3LHKFy0N7E5Eq3AML2%2Fb4YOYvt87WKudNYcpx4Ok6RI1tPnP5mtDJdExg93SDN6GgGIymURx%2F4hcDBvY1%2BQPvCn9ABs0mFYWtYhkGmILxt6AeakmywTdHXH4XKx9jh5%2Fk0kfTVtBiT8xAhUQAiAl%2Bma%2BQnXlng9A7PKI2sz%2Fl86NVXiQqICe0ZH9iW3DoHQENQclKGjxMydUISUYPzjKc00A%2FSC2RBQJyO6OBFuZzinBV4XbkQJbQ3sUSLwK35VuVhY2VJk2LbjizCiLa0sVVoyMpBSvAMbbePeyv%2F95vWIddzhl8ZORuPHI742YOUgs76wW8MRu6VZpDOPbxgUM6aA30t57w%2FUAMMywxMgEh9rHuTWTQ0nAKP48i3dyV8vxRJjVX8C5NFfXFHpZQsxjqa%2FJWgwpVwDNphuEhx%2FxfaJkl4UtEyQT%2FBJmWcNCED1nk12hjdX3xSJXh1arHaR09lnWdbJ7inSkDndfBshK73%2Fy6OzFzmhd0UbWY%2B5YHkB4R4XZ3l67fhhLRMIjaSVXEFyvvLKW2IY75yI4JETBOkHS2fG26u5QsQoUKy5BhoQ6TIH8kMMKAtp9y52w9M5DuXG%2FWqnZeIHXW2zCo0yO3XATLh9pHhJDGacsGHxQOiMN2H3%2Bi9P3srTCOz4fEBjqkATpWjYdrI8r%2Flfp2uGkuKEGQg167V69p5di9T%2BnVZgntObnpCVeZ1S41lqpa8IxLMvELzx%2BDrVkfYPEf3ef%2BjUihb3kaor1mcDCitgRM8dLQbjwuLwgjKion0fFzTjD3kPL4HtF%2BYlgVOrpc7c9vqYJY1ComO3%2BNCldy3ZEmw3YiQZeILOL%2FvZdtXhEldYCnk261XgQlvTmNbOS07sWBMPRtKQUw&X-Amz-Signature=db2eef336378ed8d5cf296fb594dac2657521f635f4b0ac4fe1bb86bcf4e10cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 C에서 뭘 할때마다 관리자 권한을 요구해서


그냥 관리자 권한을 꺼버렸습니다 



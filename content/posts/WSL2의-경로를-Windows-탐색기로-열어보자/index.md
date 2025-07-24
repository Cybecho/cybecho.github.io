---
title: "WSL2의 경로를 Windows 탐색기로 열어보자"
date: 2023-09-15T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "WSL2에서는 Windows 탐색기를 직접 사용할 수 없지만, "
notion_id: "4d0f25cc-d7c8-4706-b1a7-49562669b27c"
notion_url: "https://www.notion.so/WSL2-Windows-4d0f25ccd7c84706b1a749562669b27c"
---

# WSL2의 경로를 Windows 탐색기로 열어보자

> **Summary**
> WSL2에서는 Windows 탐색기를 직접 사용할 수 없지만, 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AROSSPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCnfydVanB8UvPXlo57isUMCO7SwAQUo1hH9FWvDMvGgAIhAIyxcilhtIJHobrrbgN2yJtG3fa7hzt9jSFCPamg3OvdKv8DCC0QABoMNjM3NDIzMTgzODA1IgyoTehkkdcn3WIWTxsq3ANYxPyud9tOBRJMYcBla6ef4zuwS6VFBs1vv8nh5Y%2BM8JMkaqon3Xp58uj9zKedWA8RNylg7mUHIUpbOSWIuBMdjZTH67F28afRcZgb7v22b%2Bhk%2B2akQF%2FfotsjzSflfbUpJzI%2BS%2Bj9Z8INj%2F2cMfr%2Bp1lQg9Uc1rLLwnu6FXcJcI0kEU1V8wzkAnM8j2ml7ZoPxQfAkAKw5ymkucMh8ubLnFqYunzTfZOPhjWl9SdvCerHTltj5TbPPuz5P2xv%2B5exIsBVwklLR3UdqHseRW8L79%2ByMPGOY%2FZ9UKigbtCVRz7nLr0Zv%2BZ3c%2BUad8shlnllHZKWR0TXJQDqLtrHYAnHvh6xsdlpt%2BkF%2BGL2VfIchfyhT%2BKHE4PtF%2BcCDSDJb4y0CqABZDB4qPFY17ANGXtvn1wmxcd9OC%2Bx602ZatMVnWe%2FpQcRk00rBkKyUlTQk3jUSElBAcQQSeYPQBwhqKEnqSLszzWNA5V5yWAWWrv7qyXiM2pjRk%2BRQ5uKB2jNw2tsBesLlwxVMUAD6ju6nUlZlpfivppEDwSRvhOm1Wfps9siREUFQRDVw0lu3v2Ad%2B7dOgQHotMWQ1r8bhmIl%2BAGJ6hmFu%2BXwvETlx4L41eR5HM8cNwoUoQurPOr6TDov4jEBjqkAU%2FndAH%2Bkl9onyFj36XAkdh0XmC8iDAtKjZHHHn7u0OMm%2FsCFmGNa4CqycC0VqBdhCSbQnyrVpf%2BV6%2F9tCRzbvytxYeFt4BzHFpO3ICx65VxjzKi%2FOBZmrJq%2FTkoeRyIPO4B8VObYzjm%2FGaIkAj1hhxdU15uNjWOOo45duJ5tVXy4a4nn8qgGGaXvxO9Rmo%2BcyQ1crilB%2BOvocfCHgQ7kBy2Drgf&X-Amz-Signature=f1c4c31200fcceffd4ce06781e58f1f8629f3a3be49d135ee993e4e02cf2f43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://coding-groot.tistory.com/101](https://coding-groot.tistory.com/101)


> WSL1과 다르게 WSL2는 Windows에서 직접 이동해서 사용할 수 없다. 존재하는 위치는 위의 방법과 같은 방법으로 찾을 수 있지만 파일 공유 프로토콜이 달라져서 그런지 직접적으로 사용하진 못한다.

직접 이동해서는 사용하지 못하고 다른 방법을 사용해야 한다. 바로 네트워크 연결을 통해서 여는 방법이다. 윈도우의 파일탐색기(explorer.exe)를 호출해서 한방에 열 수 있다.

### **현재 Working Directory를 네크워크를 통해 Windows 탐색기로 여는 방법**

아래의 명령어를 WSL에서 실행하면 현재 작업 중인 위치를 네트워크 연결을 통해서 Windows에서 열어준다.

```css
explorer.exe .
```

`explorer.exe`는 Windows 탐색기이고 그 옆에`.`은 현재 Directory를 뜻한다. 합하면 Windows 탐색기로 내 현재 작업 위치를 열어주라는 명령어이다.


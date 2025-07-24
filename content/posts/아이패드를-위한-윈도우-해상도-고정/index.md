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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b7623eea-09e2-4614-b139-d8ffeaa13cf0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJN776R4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBIOoit%2FXvbhW11024XxSh3M9kj0%2FenHi%2FCHtSCrZG%2FvAiEA4OwuBz6iCeVWxkL4xo1rI0YbsqA1UZwm9QOR%2F8PeDBsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDmo2lll3bKT3lqr%2BircA7xcD6ogKm6Kdj715FUYuuhyJBmdP5bIIq%2Fsp8kGvl2kACldZ438mmQzmVgQe%2FPBLKxC4kLJP1FygsfT5YdLy5fGZ5sxrNEBrC8q2GfuL9VsuTValDHKIYeupDmMZcgVbCZIFY6OaM7ZTz%2FUlzKVIXH%2FChE8zukXKHnSd%2BvtgP4QBBrKp%2F3SfPPgcRaD0mc1S53re2sGuWeKBG1%2FGyNrH7nqCYRDB35LWKgMHA2lcB4ax1z02iJAik%2F29yYSonqmHhEDJlIXic2Uz9V8JP%2Bnq%2BCMLnvaqH5bsmKSCPWMsQ8hRlnT1AMQk2LmG1uH0rigWKySyYCIf9DisJDpTOlSzBsO0QRwiO%2Bw183OArxw7VbV0nCKJ8rnwJzfG%2BOgqln4HkjqFMZYZoZn2mQSm2w61znpwtfwGj38MPwaCyx8Lx9AOunKHr%2FRQ7PKc0Ec9YN9UmTcH%2Bnz5OO2lyRt8TH5NaswhQUs6tm%2FZeU42gKJCHvOzkyjiMUdXuRwDNj%2FjAAi2D%2B3IUq7iqFdBL5sgUuO9ScuOzRmaGOcHZW32RECezuIDESXpVnwgL7b9xNtESY05C6UzbnmhdXJ62hOE7yZ7b76cyi7MnBscVrKm59kGXrLnHeK%2BWHGNeRs3q%2B4MJDPh8QGOqUBHI2SyuS%2BN%2BHACsAI9EjThBNZLWVAHLpmW6OzfOnLY8yuTXu0xczveegyc0%2FymNmBdopok0cg4fg0Pq4D%2BWebgHxuHmk9%2FbYljMVgYMVNbEtkrdaRWYgIjYe0DizcV85Ka9n3ZVkpa38glOzP1nZjnJHcnqA8HvzlkEaI%2BpsEoMFVv1GsWLFV9IpzvgoBlyZHWZ5Geqw4ssTYauue5etQS62jfQZ9&X-Amz-Signature=63b8209498ad721cbc7000a352d50aa3154470d1192e95f8010f364d4f1dbca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://zkim0115.tistory.com/2570](https://zkim0115.tistory.com/2570)

> 💻 **레지스트리로 이동 후**

> 💻 **해당 디렉토리 최하단에존재하는 폴더안에 ‘00’ 폴더에 해상도관련 레지스트리 전부 변경**

M1 아이패드의 해상도는 2388 x 1668


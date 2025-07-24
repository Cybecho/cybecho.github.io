---
title: "분산컴퓨팅개요 - 이게머임? → all for one임"
date: 2025-04-09T09:20:00.000Z
draft: false
tags: ["Infra", "ComputerArchitecture", "Distributed Computing"]
series: ["분산컴퓨팅을 공부해보자"]
description: "분산 컴퓨팅은 여러 컴퓨터가 네트워크로 연결되어 공동 목표를 위해 함께 작업하는 시스템으로, 각 시스템은 독립적인 CPU, RAM, HDD를 가지고 통신한다. 이 방식은 단일 컴퓨터로 작업하기 어려운 경우나 VRAM 부족으로 인해 여러 대의 컴퓨터가 필요할 때 유용하며, 클라우드 서비스의 기초가 된다. 또한, 중요한 작업의 경우 가용성을 보장하기 위해 분산 컴퓨팅이 사용된다."
notion_id: "1d01bab9-e3f8-80f9-af00-c0a2aac6bc44"
notion_url: "https://www.notion.so/all-for-one-1d01bab9e3f880f9af00c0a2aac6bc44"
---

# 분산컴퓨팅개요 - 이게머임? → all for one임

> **Summary**
> 분산 컴퓨팅은 여러 컴퓨터가 네트워크로 연결되어 공동 목표를 위해 함께 작업하는 시스템으로, 각 시스템은 독립적인 CPU, RAM, HDD를 가지고 통신한다. 이 방식은 단일 컴퓨터로 작업하기 어려운 경우나 VRAM 부족으로 인해 여러 대의 컴퓨터가 필요할 때 유용하며, 클라우드 서비스의 기초가 된다. 또한, 중요한 작업의 경우 가용성을 보장하기 위해 분산 컴퓨팅이 사용된다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d7036ba-d5a9-4f13-b3d8-e09e504f2915/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5J3CBIT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCMqeXhA%2FreFpbxR0nzkh8AxZtoUV3Tsvs4nHjU%2FdYg3AIhAKORpUylhn3CKQMo0Ug%2FWkEwR8RLIwp2RbOHrOjTtz9CKv8DCCwQABoMNjM3NDIzMTgzODA1IgxKGj%2Fme7lgpJHJbzIq3APG4PIo62hNREFRVFNUEC%2BjcTRpuXdK9IdeXimotjkzTve2CeMeD66IEYnKcBKfEomeKNzCznW9t80%2FNdp6zhOx0Y35U%2BXzI8SwtCxNXA2vuu45iFOfxQd%2FIzRNNDctJU0gUZvDNllrRnwHkZcuzrHzZlv5EjWgTvoMzQQdceyOIM7dG6pzntXvRQmXDJl5AIzr0b8jaAZj4m2U7K2NOrae8Lkbh4GvitKzy1gdY9qTje1qqZET2spbypTaJbsKcW4xzFsOdyynUk8QXZZmu7QcmHlJ6j08WS9mt6QlcxWA8NGvjq5x5eiw7CBg1fdjntZHe36sKlLm2uzyTCl4caZ8u7UOWae4HDEhLbfrvD43U0UQHPISyjisxNwTtPzyXHAHNEnxA0oNuyaLA4nTOKuSxrfmXEzHQreBeQkSX1XJl3Jvashiznu2b0v2Kxz%2Ff0jwAvbzI0bB64h26T4juIFQI%2FavrvLO3a8zQloj3rohpv%2FaRN5XzjuiLyCeQx0HqGnY4uZCG%2FrFlpQD5itpY76KQJx1Fx7JOKxu3%2BFYqjJBA2O0bIqduqky5mmyYcrm%2F26XWd1oYv9KXZlsNNT42w8kAxuwI7L2ak%2Bqo%2Bouv3tU0lcUNsQ%2BtgHfh%2B8TIzC4m4jEBjqkARrMEBcb791ReUa1cULugjVY4O%2FNcvrWt5m3v58UyMvYUJf%2FzG0ETk8PBuop%2FXfkeNKwvIJAb1%2Fs877JT%2FIE7I2ASk9i95tvkamaeusxwaHVSAWXle1gbTT68dSAy6nswtFsYjIWHF%2FHwn%2FW9VEfimoJZ6h9cHdZ9AuSfo%2FdPOINsnNoS379OIDtnQ0mfDzjaXakkTGJ%2BlYrTQWCPnQ0RcLX7Ztz&X-Amz-Signature=ef4c4be4d47b3569be320ba077221a547f0bc7ab0bb71415ec098db2f3d8ad4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 분산컴퓨팅 - Distributed Computing

> 여러 컴퓨터가 네트워크로 연결되어, 서로 정보를 주고받으며, 
하나의 공동 목표(공유된 작업)를 위해 함께 일하는 시스템이다.

## >> 분산컴퓨팅 개요


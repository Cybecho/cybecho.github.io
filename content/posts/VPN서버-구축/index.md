---
title: "VPN서버 구축"
date: 2024-04-23T02:46:00.000Z
draft: false
tags: ["Other", "보안"]
series: ["Infra & Network", "Let's Homelab!"]
description: "VPN 서버 구축을 위해 Tailscale이나 PiVPN을 설정하고, OpenVPN을 사용할 계획입니다. Fail2ban을 통해 무차별 대입 공격을 방지하며, Docker를 이용해 OpenMediaVault, Nginx Proxy, OpenVPN, Fail2Ban을 간편하게 설치하고 관리할 수 있는 방법을 설명합니다."
notion_id: "bc4c874c-5da5-4797-aea5-07aac90246d6"
notion_url: "https://www.notion.so/VPN-bc4c874c5da54797aea507aac90246d6"
---

# VPN서버 구축

> **Summary**
> VPN 서버 구축을 위해 Tailscale이나 PiVPN을 설정하고, OpenVPN을 사용할 계획입니다. Fail2ban을 통해 무차별 대입 공격을 방지하며, Docker를 이용해 OpenMediaVault, Nginx Proxy, OpenVPN, Fail2Ban을 간편하게 설치하고 관리할 수 있는 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b6b1a443-6818-461f-a471-41cfdbe46783/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQS4RVP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDda%2BcFg5xTNGW%2BzkzGuNtZaMmH85LCveIOhq91hQQxOwIgCGqoStHMwC0K9%2Bi%2FUJP4o%2Fvf%2F9nHIl8sN4rUopxq7Q4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJN8uEjEvCj5Up%2BBYircA5M%2Fx5%2FYoPBv2PuLxfKAoGiQ7Z3az7sQEfgn8jeszvmNJHFcHvBccQ0y6RvXK4FE3ZsEE3ApmGndXvwOn1wGSzCPRUQx0%2BCMox5FaH6JcB9xDieSHldNjG%2FP9%2FQHG1ywMr5B9h7jIJxlbKoB9OW4DFFEbwZburpC0kpC8n3Usnw981Xt6JVGjyzm3obQ7HDkHjK4QsN6PqXXef79L5dMqhBpM95vbX2lmde0%2FC30oEpe1LLrJZPeUm%2B7yKKGoaHVf3TQ%2F93SwhPdgdGp5gnixzzR4p2wILGuv7PPMfHqR2NZSKyK4llOBpdd2%2B6RNG9vzTiQLe%2Bu0hNBTf5tUcy1Uh4OKJcfl1lLqf7Ks9vrg%2B7xCoYWL04IxWsFeGKDbz3mkBRvswR1J998lW8CNDzAwZnUj0SzUOHPoQhig6Yjg2avoGq%2FNwo1pOeYhhxIPqsdi0%2FSDhkTF1l5PbtododtlnUFrVtJt%2FSt1oQnjMIX7bWjD2PHkKlJQknkC3vM6tfiCpyzsxgYs%2FTOrqqmu6LSQIrj2EomYPXDmOPBD0IdyfElsCTP7VpscEIybz7zNSo%2F515rGBm%2Fs4PqisGceWtts2BJC7ZdB8V%2F6M3CknF7tDvpcVkUL3ASRsAVeo9fMKTPh8QGOqUBLrGlUk8nLN19uvQ%2Bb%2FHCIYTZr4E18DHNLbZJbbmspfQMxnpvTMOBkS1vMMmaUZsFnncGw%2BID4tWVX4X689cCBkfV8esFWM3usryRUBH%2FNKAcIitiQHdaicFf61kHo8FWHIfL49yNpfSbvJu0pD44YYXPRZroGHJTyliFNogB1geTQmccuBxD9x8Is9VNO21fi%2F0WmPxhoy6aWWT5yEO%2B16EiqNZ9&X-Amz-Signature=894778e7f6fa4ee42877e60c93e42f1bc10f68aee59c9a0ceaf6b98c011301dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
Tailscale이나 PiVPN 하나 설정해두시고 VPN 접속해서 SSH 접속하시는걸 추천합니다.
```

### proxy서버 설정

🔗 [https://youtu.be/q2lNjV07GlY?si=t3dQx47IFmfovI5l](https://youtu.be/q2lNjV07GlY?si=t3dQx47IFmfovI5l)

🔗 [https://xenostudy.tistory.com/693](https://xenostudy.tistory.com/693)

### VPN서버 설정 (openVPN 사용할거임)

🔗 [https://www.youtube.com/watch?v=kXCvanqUKqg](https://www.youtube.com/watch?v=kXCvanqUKqg)

### fail2ban 으로 무차별 대입공격 막기

🔗 [https://www.lesstif.com/security/fail2ban-ssh-43843899.html](https://www.lesstif.com/security/fail2ban-ssh-43843899.html)

🔗 [https://blog.ny64.kr/posts/setting-up-fail2ban-on-raspberry-pi/](https://blog.ny64.kr/posts/setting-up-fail2ban-on-raspberry-pi/)

### Docker 이용?

🔗 [https://reddb.tistory.com/192](https://reddb.tistory.com/192)


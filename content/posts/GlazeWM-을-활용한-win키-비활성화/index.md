---
title: "GlazeWM 을 활용한 win키 비활성화"
date: 2024-03-03T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "LWin 키를 비활성화하기 위해 추가했지만, 이로 인해 다른 Win 핫키가 완전히 차단되는 문제가 발생할 수 있다. 더 나은 방법을 찾고 있다."
notion_id: "66df8974-fefc-40b8-af4e-229dea4d3cf2"
notion_url: "https://www.notion.so/GlazeWM-win-66df8974fefc40b8af4e229dea4d3cf2"
---

# GlazeWM 을 활용한 win키 비활성화

> **Summary**
> LWin 키를 비활성화하기 위해 추가했지만, 이로 인해 다른 Win 핫키가 완전히 차단되는 문제가 발생할 수 있다. 더 나은 방법을 찾고 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b993c011-7f12-4364-bec0-dcbfdff8c8d4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SYO6OD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICfnRXwMh%2FAdIlL1Ctsvm518D5POVMjvBEzOnovrm8HHAiEAqLqE3BYYJmBbdX65Uze%2FcQA89mNBT6%2FdPYZhY0NFIi0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDO2eHn0Bp4rY5A65eCrcAyWzHAGl9m7R2UxUpeZMSNgSOCGKmacCb0pWv%2BrKOlgRroEW3qMINLBkU%2F43zK4H6vW3MPX2E1neM8yjYb4s3fkSNp35%2FhK4rzEwAoSFIBtYxIl9kDrXv4pTqIhH0PUAeeEp%2FGAkWZ4W8Z%2BvSbEVg72UD8Jongb%2FK5Ru051I12xCgG1uOs5Dy1wfEa2LY%2FBDYhH1qn4ozx1S1ylFePHQVlBfnSXj5sN4A0%2B25OQdv4UzFqBB9SXl0XVOsP6Db7U5WKpFNcErbtNhFlJNmbZLDCTiT%2F9W3WKkhofCZy4sj92%2FZO%2FJ5KP3oM3mNkHBFgLNf%2FugdlT4mZvozN9qTj0AqO%2FPT0MMfxrd%2FV7sWse%2FiFIGRH2qzk6uAKrt1w2z%2BrhNicbB%2BM2nvhzQ%2Fg5VKk8WyFKRHZnkXOuAAMNYfalDbpJwheYNH3EKnQLO1xkP87ZRFae5rKUg1%2BBQy8jUhhZM%2FNMrDEPMQN0dv5I9C%2B6furVsD%2FiRSmpgO3HDhv1213Lnnww0uQdBJucHC1mDND6JtZ7gmVrD%2B1E0bXoMyCKRaHCGq807rzd9LNCtMs0gr%2FBj9GehLemlP0XeCvtkOg0qm0QYNp2Z9uone7rRxfO3jd9AmbL78LiHh9QLUyDeMJa%2FiMQGOqUB67wbaHBK8tjAfQVJ%2F6VMjsCGuRxTZTG%2FJWfjb9QXALYtH7oDCSTwyU4aUJgvMhKPlpUfJkzTt83vWuuyEI%2BmYZS5xnaKrasVC1hfBYq55YrT%2BsfpTES%2BS8WmovWo4Cc0%2F7S8R%2BTv%2FZu4UsCjs%2FcaR53OEoEzkJ%2B3WZKpC9o8v6GkCHFHIbPR8PUGBgUDTCmwdlKvni8zjFz9ZMywzaMucxMePvGn&X-Amz-Signature=0c4815e071c7029b23a008bcfc1c90d813b2457e18cf8009afdec2b4fc12b20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 걍 잘 안쓰는 항목에 `LWin` 추가함

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/021ad068-3051-4bd3-abab-c2c7644f5aca/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SYO6OD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICfnRXwMh%2FAdIlL1Ctsvm518D5POVMjvBEzOnovrm8HHAiEAqLqE3BYYJmBbdX65Uze%2FcQA89mNBT6%2FdPYZhY0NFIi0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDO2eHn0Bp4rY5A65eCrcAyWzHAGl9m7R2UxUpeZMSNgSOCGKmacCb0pWv%2BrKOlgRroEW3qMINLBkU%2F43zK4H6vW3MPX2E1neM8yjYb4s3fkSNp35%2FhK4rzEwAoSFIBtYxIl9kDrXv4pTqIhH0PUAeeEp%2FGAkWZ4W8Z%2BvSbEVg72UD8Jongb%2FK5Ru051I12xCgG1uOs5Dy1wfEa2LY%2FBDYhH1qn4ozx1S1ylFePHQVlBfnSXj5sN4A0%2B25OQdv4UzFqBB9SXl0XVOsP6Db7U5WKpFNcErbtNhFlJNmbZLDCTiT%2F9W3WKkhofCZy4sj92%2FZO%2FJ5KP3oM3mNkHBFgLNf%2FugdlT4mZvozN9qTj0AqO%2FPT0MMfxrd%2FV7sWse%2FiFIGRH2qzk6uAKrt1w2z%2BrhNicbB%2BM2nvhzQ%2Fg5VKk8WyFKRHZnkXOuAAMNYfalDbpJwheYNH3EKnQLO1xkP87ZRFae5rKUg1%2BBQy8jUhhZM%2FNMrDEPMQN0dv5I9C%2B6furVsD%2FiRSmpgO3HDhv1213Lnnww0uQdBJucHC1mDND6JtZ7gmVrD%2B1E0bXoMyCKRaHCGq807rzd9LNCtMs0gr%2FBj9GehLemlP0XeCvtkOg0qm0QYNp2Z9uone7rRxfO3jd9AmbL78LiHh9QLUyDeMJa%2FiMQGOqUB67wbaHBK8tjAfQVJ%2F6VMjsCGuRxTZTG%2FJWfjb9QXALYtH7oDCSTwyU4aUJgvMhKPlpUfJkzTt83vWuuyEI%2BmYZS5xnaKrasVC1hfBYq55YrT%2BsfpTES%2BS8WmovWo4Cc0%2F7S8R%2BTv%2FZu4UsCjs%2FcaR53OEoEzkJ%2B3WZKpC9o8v6GkCHFHIbPR8PUGBgUDTCmwdlKvni8zjFz9ZMywzaMucxMePvGn&X-Amz-Signature=562fa9cb9f34c38ae8f01587803b402a90a03894d67c2f0489ab2a68a418173f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### 근데 이러면 다른 Win 핫키들이 완전 차단됨

더 나은 다른 방법 없을까…


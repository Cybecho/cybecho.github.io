---
title: "윈도우 Ctrl ←→ CapsLock 바꾸기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법을 설명하며, 레지스트리 편집기를 사용하여 "
notion_id: "7db001a3-cb42-4800-9f94-40327f19552e"
notion_url: "https://www.notion.so/Ctrl-CapsLock-7db001a3cb4248009f9440327f19552e"
---

# 윈도우 Ctrl ←→ CapsLock 바꾸기

> **Summary**
> 윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법을 설명하며, 레지스트리 편집기를 사용하여 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DDPUR5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDcEyOrL%2BMstdZfWMTBmzKoj4XMfBacBSr%2FTpQloUY5TwIgHT%2BsItumkFAtTMVec1NLoWV5oX9%2FvWvf%2FZry%2BLBSkhUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLeROiAg6UqB%2B3KbwyrcA7EgwWtwviVQyhDcVXlNCZiyLSTbr1s87mi7VeJCDr%2BaODIW0P9l9HM%2FL%2FEkkiRG6UhLgjHxRmkfItyHPRy6gr%2BGB%2FVH1TPsEM8wYbQyZKh6ntgi7jobmYbeXo2rl%2Fw0Wd7Uu1%2FB7K%2FoPzEb9cKzEUHRRMp3zh6%2BLlRiAEMe11qDX9W4TqhyNOaDRG%2FnEuFz0YKrd%2Fwv36rUZJ2DIBxK1ATxBFZhAE6xyXvN4EhwXa4n4LUL%2F1afpRVb1lF6CqPYgtGe5u3lDD0B5yptZ%2B%2B5PnP%2F9PdPkodgNrj3r433pt1RtTOmMWyOudZ6IYK2CpdeTsF7pG0V%2BuVMchsJjNn2Yqt4k9x%2BiM9Y%2B7xNfy8RwKQbyZKm8oYdflfL3mbQwjyLHc%2F5W%2BPvskS5SWHOvRSrIN4CsYckGYvVnLIS5TUh6UKzJaY%2BQ20BgQjVpPgWCIe4tCcZ01EZ%2BkLvAnP73Gr40gq%2BTVAhn6rKTZtIg7PZUGTTzgiKmBiRyVtTw6vbMVS9txdmLrTBRq1A%2BwmOGeGeeUT7%2BQnerSTxzC3Ftbzwqsd4afxjG4EN9ViYOmhYKXnt%2BQ4FH8GK9lfULTtx%2FV%2F%2FUww%2BI9NpvX9eoHyeQeHggdRfFwZAbEBL5JzaoMfvMKi%2FiMQGOqUBa89KYfh9sxmQdlkz9zjuRHhAeGoMJJJSWdUyOty9wyCI8Ty4LXyXn3RjUBZIryh4vJCJDrq67mEL7hxaO8IxlKzD2m%2BYEBlGXvuYeN1bFhkT0RB25LXmIV5CuFxo59A%2B6kBkWRXH1J6WYYPPuEldylNd3E9f1AQYz4JnQ5nJ7MwWKqejgdBCG2vq%2BBzlTytW3kNKpP6VO7qXksQxU15Q5pgE8kMv&X-Amz-Signature=9f359d6b39c143fb4acb48cdba53621a4c0e88e5c7a6c6baf7d3d755646bbfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://m.blog.naver.com/minhyupp/222211206474](https://m.blog.naver.com/minhyupp/222211206474)

윈도우키 + R : regedit

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout
```

`Scancode Map` 이름으로 **이진값 새로 만들기** 후 입력한 다음 재부팅....



**03이 캡스락, XT값은 3A**

**58이 컨트롤 XT 값은 1D**



1D 00 3A의 뜻은 1D(컨트롤키)를 3A키(캡스락)에 할당해주시오. 라는 뜻.



![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfNzgg/MDAxNjEwOTQ0NjgxNzgy.YS7Ap6fbEi-TRbEpY5aXdQJ0Hu-rTc_OI1P9DgmtpOQg.g1-cUEsmRpPoCA8b39LlpdpFxUagh7o7I46xAHIjej4g.PNG.minhyupp/image.png?type=w800)

Ctrl <-> Caps Lock 위치 변경

![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfMjQg/MDAxNjEwOTQ1Mzk2NjY0.TFPIQALDqOG4bH8YeT2r_Jt1pwBpIpgDuX_k9cyRGpwg.s-wjZ1tR7__cV_HCZjHUUFGDAMsYBcoLJfXHPZyvJnEg.PNG.minhyupp/image.png?type=w800)

CapsLock 조차 Ctrl 키로 바꿔버리기



# 이거 자동화 할 방법 없나?

🔗 [https://dora-guide.com/레지스트리-편집기-실행/](https://dora-guide.com/레지스트리-편집기-실행/)

🔗 [https://blog.naver.com/starbros/220466856335](https://blog.naver.com/starbros/220466856335)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/317c6692-f519-47b2-98e6-bd4ed2d3f2f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DDPUR5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDcEyOrL%2BMstdZfWMTBmzKoj4XMfBacBSr%2FTpQloUY5TwIgHT%2BsItumkFAtTMVec1NLoWV5oX9%2FvWvf%2FZry%2BLBSkhUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLeROiAg6UqB%2B3KbwyrcA7EgwWtwviVQyhDcVXlNCZiyLSTbr1s87mi7VeJCDr%2BaODIW0P9l9HM%2FL%2FEkkiRG6UhLgjHxRmkfItyHPRy6gr%2BGB%2FVH1TPsEM8wYbQyZKh6ntgi7jobmYbeXo2rl%2Fw0Wd7Uu1%2FB7K%2FoPzEb9cKzEUHRRMp3zh6%2BLlRiAEMe11qDX9W4TqhyNOaDRG%2FnEuFz0YKrd%2Fwv36rUZJ2DIBxK1ATxBFZhAE6xyXvN4EhwXa4n4LUL%2F1afpRVb1lF6CqPYgtGe5u3lDD0B5yptZ%2B%2B5PnP%2F9PdPkodgNrj3r433pt1RtTOmMWyOudZ6IYK2CpdeTsF7pG0V%2BuVMchsJjNn2Yqt4k9x%2BiM9Y%2B7xNfy8RwKQbyZKm8oYdflfL3mbQwjyLHc%2F5W%2BPvskS5SWHOvRSrIN4CsYckGYvVnLIS5TUh6UKzJaY%2BQ20BgQjVpPgWCIe4tCcZ01EZ%2BkLvAnP73Gr40gq%2BTVAhn6rKTZtIg7PZUGTTzgiKmBiRyVtTw6vbMVS9txdmLrTBRq1A%2BwmOGeGeeUT7%2BQnerSTxzC3Ftbzwqsd4afxjG4EN9ViYOmhYKXnt%2BQ4FH8GK9lfULTtx%2FV%2F%2FUww%2BI9NpvX9eoHyeQeHggdRfFwZAbEBL5JzaoMfvMKi%2FiMQGOqUBa89KYfh9sxmQdlkz9zjuRHhAeGoMJJJSWdUyOty9wyCI8Ty4LXyXn3RjUBZIryh4vJCJDrq67mEL7hxaO8IxlKzD2m%2BYEBlGXvuYeN1bFhkT0RB25LXmIV5CuFxo59A%2B6kBkWRXH1J6WYYPPuEldylNd3E9f1AQYz4JnQ5nJ7MwWKqejgdBCG2vq%2BBzlTytW3kNKpP6VO7qXksQxU15Q5pgE8kMv&X-Amz-Signature=5fc50572aed0d57c12139fa91e12fcf93a9e05186b6a783863259afdf1cdd526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07d77b91-aa14-412f-8af3-2da3320a0f8e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DDPUR5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDcEyOrL%2BMstdZfWMTBmzKoj4XMfBacBSr%2FTpQloUY5TwIgHT%2BsItumkFAtTMVec1NLoWV5oX9%2FvWvf%2FZry%2BLBSkhUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLeROiAg6UqB%2B3KbwyrcA7EgwWtwviVQyhDcVXlNCZiyLSTbr1s87mi7VeJCDr%2BaODIW0P9l9HM%2FL%2FEkkiRG6UhLgjHxRmkfItyHPRy6gr%2BGB%2FVH1TPsEM8wYbQyZKh6ntgi7jobmYbeXo2rl%2Fw0Wd7Uu1%2FB7K%2FoPzEb9cKzEUHRRMp3zh6%2BLlRiAEMe11qDX9W4TqhyNOaDRG%2FnEuFz0YKrd%2Fwv36rUZJ2DIBxK1ATxBFZhAE6xyXvN4EhwXa4n4LUL%2F1afpRVb1lF6CqPYgtGe5u3lDD0B5yptZ%2B%2B5PnP%2F9PdPkodgNrj3r433pt1RtTOmMWyOudZ6IYK2CpdeTsF7pG0V%2BuVMchsJjNn2Yqt4k9x%2BiM9Y%2B7xNfy8RwKQbyZKm8oYdflfL3mbQwjyLHc%2F5W%2BPvskS5SWHOvRSrIN4CsYckGYvVnLIS5TUh6UKzJaY%2BQ20BgQjVpPgWCIe4tCcZ01EZ%2BkLvAnP73Gr40gq%2BTVAhn6rKTZtIg7PZUGTTzgiKmBiRyVtTw6vbMVS9txdmLrTBRq1A%2BwmOGeGeeUT7%2BQnerSTxzC3Ftbzwqsd4afxjG4EN9ViYOmhYKXnt%2BQ4FH8GK9lfULTtx%2FV%2F%2FUww%2BI9NpvX9eoHyeQeHggdRfFwZAbEBL5JzaoMfvMKi%2FiMQGOqUBa89KYfh9sxmQdlkz9zjuRHhAeGoMJJJSWdUyOty9wyCI8Ty4LXyXn3RjUBZIryh4vJCJDrq67mEL7hxaO8IxlKzD2m%2BYEBlGXvuYeN1bFhkT0RB25LXmIV5CuFxo59A%2B6kBkWRXH1J6WYYPPuEldylNd3E9f1AQYz4JnQ5nJ7MwWKqejgdBCG2vq%2BBzlTytW3kNKpP6VO7qXksQxU15Q5pgE8kMv&X-Amz-Signature=34556f01a0adc9518f25402c64eeb46b236e860ef75a97b24cb4178ec667ce4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0325384a-f9af-4164-9540-7161b0bfaf0f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DDPUR5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDcEyOrL%2BMstdZfWMTBmzKoj4XMfBacBSr%2FTpQloUY5TwIgHT%2BsItumkFAtTMVec1NLoWV5oX9%2FvWvf%2FZry%2BLBSkhUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLeROiAg6UqB%2B3KbwyrcA7EgwWtwviVQyhDcVXlNCZiyLSTbr1s87mi7VeJCDr%2BaODIW0P9l9HM%2FL%2FEkkiRG6UhLgjHxRmkfItyHPRy6gr%2BGB%2FVH1TPsEM8wYbQyZKh6ntgi7jobmYbeXo2rl%2Fw0Wd7Uu1%2FB7K%2FoPzEb9cKzEUHRRMp3zh6%2BLlRiAEMe11qDX9W4TqhyNOaDRG%2FnEuFz0YKrd%2Fwv36rUZJ2DIBxK1ATxBFZhAE6xyXvN4EhwXa4n4LUL%2F1afpRVb1lF6CqPYgtGe5u3lDD0B5yptZ%2B%2B5PnP%2F9PdPkodgNrj3r433pt1RtTOmMWyOudZ6IYK2CpdeTsF7pG0V%2BuVMchsJjNn2Yqt4k9x%2BiM9Y%2B7xNfy8RwKQbyZKm8oYdflfL3mbQwjyLHc%2F5W%2BPvskS5SWHOvRSrIN4CsYckGYvVnLIS5TUh6UKzJaY%2BQ20BgQjVpPgWCIe4tCcZ01EZ%2BkLvAnP73Gr40gq%2BTVAhn6rKTZtIg7PZUGTTzgiKmBiRyVtTw6vbMVS9txdmLrTBRq1A%2BwmOGeGeeUT7%2BQnerSTxzC3Ftbzwqsd4afxjG4EN9ViYOmhYKXnt%2BQ4FH8GK9lfULTtx%2FV%2F%2FUww%2BI9NpvX9eoHyeQeHggdRfFwZAbEBL5JzaoMfvMKi%2FiMQGOqUBa89KYfh9sxmQdlkz9zjuRHhAeGoMJJJSWdUyOty9wyCI8Ty4LXyXn3RjUBZIryh4vJCJDrq67mEL7hxaO8IxlKzD2m%2BYEBlGXvuYeN1bFhkT0RB25LXmIV5CuFxo59A%2B6kBkWRXH1J6WYYPPuEldylNd3E9f1AQYz4JnQ5nJ7MwWKqejgdBCG2vq%2BBzlTytW3kNKpP6VO7qXksQxU15Q5pgE8kMv&X-Amz-Signature=b5e7056a782deb1c181266accf434d43e4712cacd7754ed2c23982dcf4c13a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



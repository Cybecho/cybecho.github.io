---
title: "유니티 로그라이크 05"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리 및 랜덤 타일 생성 방법에 대한 설명이 포함되어 있습니다."
notion_id: "4262fa2a-444d-4d13-b1a6-08a8da0b762c"
notion_url: "https://www.notion.so/05-4262fa2a444d4d13b1a608a8da0b762c"
---

# 유니티 로그라이크 05

> **Summary**
> 무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리 및 랜덤 타일 생성 방법에 대한 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/990a699c-5294-4cc3-85f6-2a03dd05c4bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2U4PJC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC0j64M7wA7LUMAEH6sJJLCSgJl5XjxmG3bEWuv0gmGVwIhALC34ItjkBatcdtHF2tFJ%2Bl5U2L69LtiHD7fb5yRJYTXKv8DCCkQABoMNjM3NDIzMTgzODA1IgxTRw1er8DUojJrWY0q3AMcYq9%2FG4sTHUX1%2FHICDWDQ9w%2B%2Fs52qYKiNp%2Be9X3v7C4EIs8ob9iIFujKsJhAB1eGeUIqNnafLrxPAphkiQYTXqrW5KOTkGrNnu6aR968Wm6bRNMgaytmNezbVr4PdWbQNqHiXzKkI6XqSzJR7fCt1x5myv6YpZ%2FD3P1Vx4NqSVqD9S7EfKJVifFsPua0U27bPrZdKA8S5mX38qYdCh6zpJesLRbF6mCAvRBH5D%2FVy1dOaMvO%2F3srZUlZCydLO%2FHivf8dxNTZlDDr87D%2FL2%2BstLs6O%2F43sGdNLjvg4ky3rOHxTmrcBfrFjyS9T5ConoS6yggxaqI2bwqW%2Fcis8gaSwtNMhwIbkQs%2FAFjwgSpwAB9bT8v9TbVJT9GZw6IUHiqjxymrXsTWiM3G%2Bp8uyAjEj2PsBvrCtUSy5PhQ7UmaM7JfK9xUDXHxlNFEglUbQQebo4DP3whFYWmSiK3MgRJNyVMyBquqofPsM%2BsogNBFbP5Zipy0os55nS9Km4BM%2BrQxef%2BoJqUJu9nuGK5rFK06rma3cvv3uPwok3D4CGAvK4WzWKEVg%2Btey5I56QFgFItm9ZvD4bc0fjisaOtI7sTftR3PzfEENOzBi0VJZMVSczUk%2BlbN8XEXguHbRqzC0z4fEBjqkAQ8dhyaU6obDOOhuqlFuOMLF1rT7ObUpEWPkUddWRZGytgyLeQZ3mj7qnNtDLIa%2BrJzkYS610WmhFHKOMB8iAHfvlOflE2wSQyVf6rWTMmmLTmmhqpwV7DaDmUqyqIuIVRtIi3vGlv1bv6lYJ2yCMVI5GvIPk66yu8QfA5kytSPVBJYKt2I5%2BKp5jLi6E2CNPYZGYcAm%2BSEUhc%2F60Qoz4K5Dkvwz&X-Amz-Signature=80bcf446ffe18c2ece2e4e1dfa3dcbbc25872b3bc313c919643161590611b5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SNjgew0VhHY&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=6)

> 🔥 **랜덤한 타일이 배치된 타일맵을 그려보자**

> 🔥 ****랜덤타일맵 생성 - 1****

> 🔥 ****랜덤타일맵 생성 - 2 (재배치 스크립트 준비)****

> 🔥 **카메라를 설정해주자**


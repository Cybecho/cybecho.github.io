---
title: "유니티 로그라이크 09"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "회전 근접무기를 구현하기 위해 Bullet.cs와 Enemy.cs를 수정하는 방법을 설명합니다. Bullet 태그를 사용하여 적의 체력을 감소시키는 코드와 초기화 함수의 사용법을 다룹니다."
notion_id: "90c181ee-53bf-4741-8094-1b362cee236e"
notion_url: "https://www.notion.so/09-90c181ee53bf474180941b362cee236e"
---

# 유니티 로그라이크 09

> **Summary**
> 회전 근접무기를 구현하기 위해 Bullet.cs와 Enemy.cs를 수정하는 방법을 설명합니다. Bullet 태그를 사용하여 적의 체력을 감소시키는 코드와 초기화 함수의 사용법을 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7342e0f9-722f-4da5-92bc-994eb5973b92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRRKGZF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCdtvXP2H%2B0XTpAgxA0EKbEwkppTT59AQCrdz0UlKiEUgIgBgPXWkXJntqvh1oaI7Bs1a1U1zgE%2F0GojCNC5y9VZ6gq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNEYc%2BuiDZCBXJiUmircA1w%2FpDnTdCYPLgaeEUw9%2FwnNu%2FTOXPymMJFtV0THx8L9AwYTK6%2FYAQMiwbukoztNpWLRD69aXhPtcCR4qHi%2BOt1flyJIahh6APfaFrhJdUUSiiwGtOiUiFtThJt9enummAnpkCHT4VzUeptAPoW3aFO0M62ov7A4CMEb%2B8ku1C5n3oECJxi5LteyFfAq4qYUEDeVr4XOkebZ9Xq9OluQ7S9Npo4HgwIO7rHGdCnwzs2Kwb97Iu3sDjRS2twXZs5gTAsbXOkULAGZP0CA8a9eU1OyP3OuMOpHCSFLjyF1ucx6N0048BgDOxP050tihoDbRUYRSfQ2mh%2BZW8DQfcjLNrKFhQCnG3VPRsRjBLiJvCrdOMvDR%2BmXkg7449EG5hyNhrfLrxLJZPF%2FxhUwMlBsTEWtkA4%2B3BmrA9rVLeWYOLHcdckKTWRHRIbvt6oaj2hN%2BwQgnjLEI7y%2FPkj6aEfjhPETKrmbJwF%2Fgj%2FqePyPERqvZUZhpIJjee%2BB6OSp3dnIwSa9aFlMxdd0iMKo6HFVK1oCljp6GCyqNybYTCGscEhrANiMW3ENPxt%2BQM6LxI%2F2hotl2Xn2ZpXJTFpBdBtzjf%2BKGK3WqWE6FVAR%2BLbFZjS4LnYTBQhEmsUIgJTyMPTPh8QGOqUBTcBfeQMorWGLDoM%2FnppO4U7SzyulNmbI%2B4llHHpSaBdZkCAGX0J1Q%2BQ5w1Y0qekwVc9iGTDNDPo%2FhKccCXBu0nW3o5A5hAtyFTXY7uThJOc3PepxWCIes9ib%2B84Wm6fYN5hIRZtqknQpAC0VG%2BaqQCoG7oBldVyyCsm5GfHFzPdhZa%2Fg2CDBMiZBRrJ3HZAoIrnSVfqHJgJOuhaLgQOQFyfyh6%2F9&X-Amz-Signature=0b1bb88e875ac8c2942162e0435141f0ef95b7a3601fa238db948c5aee64e3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **회전하는 근접무기의 Tag는  Bullet으로 설정해두고 Bullet.cs를 수정해볼까요**

> 🔥 **Enemy.cs 도 함께 수정해야해요**


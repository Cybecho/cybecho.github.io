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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7342e0f9-722f-4da5-92bc-994eb5973b92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3723DW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BRUc8UDmulqC3MNE4bEa7X%2Fl1c43dW5shzu4gD6uAcgIgG3k9%2FrkEf5n7HyrglUlDk28uNJY9wPiI0G52l9twdU0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEuQ2Y7gw4yBk4danyrcA5aOlZJ4145p9W8ClxRnLj4VhHhNuUXy9c6ILrOnXMYFH0KQRc6%2FTPVbyxJ9AqC%2BoUYI4XH%2FgCKqnxO3P1Kv97%2BUc%2BuZb8YLyXFuuTNjEmwZRickwGylupy4n7UYsxX5FLyawKAWRjIp00OMUaJ5%2F%2FwH%2Bv5oPZeOasV9nZzQI7msRvQIo38qcnFR%2FmhOg0yanID%2FA2nBZOG1VckN42C8sN6T%2FWLt2oESkqGcFbay5g1NLRtaSorjzzzt8eY0PUbZS2Jci2iEVkEZHRsKmzR8w67jphBRAnliCc5kTa60EAgjBNM3%2F7o6HCuOmH5KfvIqo9rPRsDbRMrjNu0g78DzikSUYEytcfIVNjeC3G1TBKwCmNwIGuXWA95sx4zPWlmbun%2BkopTPPXfBALiAKeaoRaYU91D6vTmmRCJ0hXhdY1TGIxLkIu1ujh1Sd0FQoQHMmItvkv9cEIkm8TMT7mBXotNTg1Bb%2F8W7llRSotPtePbanHHtLlct4kL9kE9RTCbtnK2RCF%2F5abcuadGIzkETGlJmAiSlHOXVwyb17AySQRiTGQBL%2BcZCw1yU4XSW5cTf%2FXdnEE3sj76RAUUsnMyuEGMo4s91xXrNoVXlHHWmLhAN9dDtmTTMTmTcDo8oMIfPh8QGOqUBqFZ53diYJRNkvu9eL01PxsR9EJywNj4C%2Bg2Jxsez4a%2FyAo1XXzE966NpnU%2FB4jcULP4HaTm5mBViUwVdyANNV2NGKPv18NzZEsoBKfZEJ7PNPgiQUa3TG9Vbd80WqO3Osru3QgdYTI0vK4EEa63rqmbFwX8AH3udK8udTY3BZLtcleGOikqeFWFaIwlIXtew6q5Wcg4MLtilIXVdHHqGokts%2B8Rv&X-Amz-Signature=cc38136edc6a55d48e774aa282b28c868f1043babe0c5fd668fd00409798ca05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=HPJVVcRKwn0&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=10)

> 🔥 **회전하는 근접무기의 Tag는  Bullet으로 설정해두고 Bullet.cs를 수정해볼까요**

> 🔥 **Enemy.cs 도 함께 수정해야해요**


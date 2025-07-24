---
title: "갑자기 exe 파일 실행 안될때"
date: 2024-04-29T01:42:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 "
notion_id: "9f0333b7-c253-4bb9-b40a-3dbd8ee615d5"
notion_url: "https://www.notion.so/exe-9f0333b7c2534bb9b40a3dbd8ee615d5"
---

# 갑자기 exe 파일 실행 안될때

> **Summary**
> 비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/523cb8fd-70e6-4120-aba6-a831a254dd5f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOE4ROET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIB0QvtpZyfh3i%2Bcwhd0pxsDV62otFwE%2BP04%2BuONcicdmAiAIngRxeXQHSZ%2BrFDjoy1bVIG%2FCDOrfD2Ibv8Rv2SUqHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM2hJPrB3tlDd4e5w0KtwDbbHCBN4uwzvsWFPHW9SbO%2B%2F2RiqhKURXGTtFsgelBTl6MV7nPumJuWFHy35302IL1r3Agckya%2BqiEpBB47RVDqEORpHmYVIXYBicpHsY9Hh%2BGAbsbC3EnOCZDd6SXwm31X1s1UF3IFSi83scHlhOIhJQL%2FPUX6N2XmzWSS%2BCXWo9SDZRY3pRnibaUaFw%2Bht5e7PRV60XjdF0Xj67XvyBQeOuW646VRfT2yZqKpWMqkCgdmml14iCkTOjZUzwfmYMC52W7iu9U9%2BZuX23rseizpQ74bVrFEc0f%2Fx%2BBgAG9BqDRzKPxkZMsJ21tOyH4w6vRlWaJcQiZgeiMQcz8VqVqEPLjEElpa5spHLOKkqVOKFx%2F3slb%2FcFkgQYbDqrjOSITvYVQm1%2FZ8k1OtzTL7oDDRZZZleQgnqkcOpFRAY5F%2B%2BDZ3aQJlDjShdXM3OBSxB4FUYOIZ%2Feck6MtrO5RDvxCMbUEc2byY9laVF1Oohqk6SHKKL%2FmHRRh8JeIG%2Fm0gOHIyCeBi3OgoeWJyHtBtuXX2vV5oYw5J7rvZyrQ7bseGmDrFD45dtue8MLafG1NVe5%2Bzjy%2FwoDRGrmv3LSHvnHQOwS1nEyJaym9o4m6R0o5pXQQw%2FwgSYY0IlulgMwp%2FWHxAY6pgFu36qWeXj5PWuinI%2FXyjm0mtq1YtnOL0PBo5%2B7V1IvLoM2d7ZoW84MHAs573NoUcCeZS6bKpG3CpLVWOKaa1Kxcsy9FWPtDBp%2BK5%2FGFFTHqVbmA2UcbraJJNhyTVidRVpdR7NXyXR7JGJ2PghuOeWx%2FV%2FoJKhnSiMraDIsprn%2FYrrER2I04xqwYhRGcpT1Ri1NZf5YstFRguEExnlzW7GyDx1qC7qn&X-Amz-Signature=061b14fe962d0f49b36692dc882e1175be17a3a7b5c1610bc70a248ffe9cce36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

몬헌 모드질을 좀 하다가… 시스템파일을 건드린것같다

갑자기 비주얼 스튜디오로 빌드한 프로그램이 실행되질 않어~


파워쉘에서 다음 명령어 실행

```latex
sfc /scannow
```

그리고 재부팅하면 해결됨


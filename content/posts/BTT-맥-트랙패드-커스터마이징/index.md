---
title: "BTT - 맥 트랙패드 커스터마이징"
date: 2024-01-21T02:41:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "BetterTouchTool은 맥북에 필수적으로 설치해야 하는 앱으로, 트랙패드를 커스터마이징할 수 있는 기능을 제공합니다."
notion_id: "22c5f0a7-5ace-4e5e-91ca-0f7d474930a2"
notion_url: "https://www.notion.so/BTT-22c5f0a75ace4e5e91ca0f7d474930a2"
---

# BTT - 맥 트랙패드 커스터마이징

> **Summary**
> BetterTouchTool은 맥북에 필수적으로 설치해야 하는 앱으로, 트랙패드를 커스터마이징할 수 있는 기능을 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d83f2d5-e05a-4e0b-8ee1-2eed30874266/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XLJLL72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGny%2BKnNJM16qx1ItuV5%2B6XSnMDJrgmftkS%2F5biKhaBiAiEA4dBJcmbFFIb001ppojdMIZehfYelOgnpZEVqlXL4WBwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAKST3%2FKvieRh5ZDDSrcAwPtwCxz9TbHnNBHSVZfaxTUeDfVWGpRvIuGaQk4opd3lGikemoInQt40sMoB%2Bm2xytDCzj0mWAX9cBLqRYO0zWdeTPTQETSlbG3lzlHikiQmRWbsjPQr41367TZ%2F7bgHxLhKSsSmqMXNAHZrUcRG36AftFS86KkHSxOfHU8BURlmndx2Nvd21dRsCreVWU2nVvhrE6w8pTjbQi12rf0lBsRYY1xyiTQ0eEPnsBBDUsMoZsedxHf3GM6JkPUahuMlNkjqSzG1oW20achOx398exFI%2B4w7gH1ak6ttZLGoclC13R3RzuE4Wz3LgrZDnjyXHxaK97sWyBxjXzma8z%2BgF0Dj0sCofHzw20MpLL0%2FmTz7H4h6EcOA21mvQDo38024q9g4WZf3awcFSOC4CCwb03o8bNW2X17Fs11piayLGscHyQFVptEY8jLN4qJhnHCLWHIAYrh48e4OLHJ6vZJSXunIQ4JfxMv7GEIhgEBoABuV8TijiPjsBLAdrbNJJvyJ4UZcM0EwRm7Dc%2FPsyPKNetXVHwsROapx1077XWc5ebjAsbZlGbt48OM8ReJXBqW7tKQuSiwAggl3yN6NCNBmTsQABshgAr5hyqrcpOfDsyl1cHkcoKpYfC1Nu%2FKMOSbiMQGOqUBFMx%2FdFDWLOY2UEPA4KbS8%2BSr3pfmrA38ILdKwwBimSMbVi%2FGBMKblqIol%2FKFERJeO1VuokSzCs%2FaaP%2Bc6OzLc168QLgPyzi5ak4edaqqu2vdl4WLpRJi5bRfBz93H4cyK0XNMzjIFUIyceu3EHnMKS5qLEEiUaMsOLppTulo1gWFVMJQD0IFAtRrEU0VIqC5FeOyXNprNL5gpWZdrlVK5osRU7%2FL&X-Amz-Signature=f50863264acd4e22ecd66c87e1287eb08992a1199829d8c2153e23726e83a7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://allgg.tistory.com/29](https://allgg.tistory.com/29)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9b9b6b94-4bab-4c22-a7ab-a424005eaa23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XLJLL72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGny%2BKnNJM16qx1ItuV5%2B6XSnMDJrgmftkS%2F5biKhaBiAiEA4dBJcmbFFIb001ppojdMIZehfYelOgnpZEVqlXL4WBwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAKST3%2FKvieRh5ZDDSrcAwPtwCxz9TbHnNBHSVZfaxTUeDfVWGpRvIuGaQk4opd3lGikemoInQt40sMoB%2Bm2xytDCzj0mWAX9cBLqRYO0zWdeTPTQETSlbG3lzlHikiQmRWbsjPQr41367TZ%2F7bgHxLhKSsSmqMXNAHZrUcRG36AftFS86KkHSxOfHU8BURlmndx2Nvd21dRsCreVWU2nVvhrE6w8pTjbQi12rf0lBsRYY1xyiTQ0eEPnsBBDUsMoZsedxHf3GM6JkPUahuMlNkjqSzG1oW20achOx398exFI%2B4w7gH1ak6ttZLGoclC13R3RzuE4Wz3LgrZDnjyXHxaK97sWyBxjXzma8z%2BgF0Dj0sCofHzw20MpLL0%2FmTz7H4h6EcOA21mvQDo38024q9g4WZf3awcFSOC4CCwb03o8bNW2X17Fs11piayLGscHyQFVptEY8jLN4qJhnHCLWHIAYrh48e4OLHJ6vZJSXunIQ4JfxMv7GEIhgEBoABuV8TijiPjsBLAdrbNJJvyJ4UZcM0EwRm7Dc%2FPsyPKNetXVHwsROapx1077XWc5ebjAsbZlGbt48OM8ReJXBqW7tKQuSiwAggl3yN6NCNBmTsQABshgAr5hyqrcpOfDsyl1cHkcoKpYfC1Nu%2FKMOSbiMQGOqUBFMx%2FdFDWLOY2UEPA4KbS8%2BSr3pfmrA38ILdKwwBimSMbVi%2FGBMKblqIol%2FKFERJeO1VuokSzCs%2FaaP%2Bc6OzLc168QLgPyzi5ak4edaqqu2vdl4WLpRJi5bRfBz93H4cyK0XNMzjIFUIyceu3EHnMKS5qLEEiUaMsOLppTulo1gWFVMJQD0IFAtRrEU0VIqC5FeOyXNprNL5gpWZdrlVK5osRU7%2FL&X-Amz-Signature=63b37876293f7bf79d4c9f16e7f5fc24ad45927ff4b024b8a280b7767c06e647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


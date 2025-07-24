---
title: "BTT - 맥 트랙패드 커스터마이징"
date: 2024-01-21T02:41:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "맥북 사용자에게 필수적인 앱인 BetterTouchTool에 대한 소개와 커스터마이징 기능을 강조합니다."
notion_id: "22c5f0a7-5ace-4e5e-91ca-0f7d474930a2"
notion_url: "https://www.notion.so/BTT-22c5f0a75ace4e5e91ca0f7d474930a2"
---

# BTT - 맥 트랙패드 커스터마이징

> **Summary**
> 맥북 사용자에게 필수적인 앱인 BetterTouchTool에 대한 소개와 커스터마이징 기능을 강조합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d83f2d5-e05a-4e0b-8ee1-2eed30874266/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIKPKWQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEv7265NKqIxmI7%2BgExN%2FL6yNCyg2ly0AarM8ZnKENigIhAMMmA7Yg6hX3DCwaw%2F72es8aUSiog2ohQYnNsRL%2B0E56Kv8DCCoQABoMNjM3NDIzMTgzODA1IgzLCdqPerjZz%2BI8yTMq3AOx3dBulD%2FwuQPDRZwozvWV18%2BaQG%2FY5D8btxHv%2FJZ9oDPvlRcZL3Wc3slPjcPpTxG35wp7z1ZRfhpK%2BPF7P4JzjronoklBRXoLYgnUbJoGSSFvd7LuPFnPlVAf%2By8OwpeYMstP0DIOznLPY7or4KB1kugjg78cgYZhc5XGW2fpnhlfQj2xm9lwhp997LiOt2V34yav0bwGAoBlOGD7AYhw1eZBMikiOy8VuhTDuKu00oMFKihuWQ82HASLle4xSm%2Fx4U%2F0gCBCmFM3xGi%2FlpS%2BP5wQn0mj1HUmz2h2v3NKkfnNsrgZwxFweWI3Jk7knaHmDlEB%2BAwit2UEOOelHjhXpILoREOtBmbZu3kf1LPYvlIFYt4Kk04Oj7kc9TwbfdLKJf6s68CrK%2FlufaWH7gBJZNHhk0Wtq%2FELY%2Bi9dcPiGg5LZPHirRdowiAaPVMgaRWM0kA45%2BOviMJLSXX5QsNhkgf9mC1bwPBbdc7bXtKTh6guJoF%2BPxE0J71kvoHO1klo3fDzzzuLxrpmuLIw%2BMPix2qteO9WiHbNIioZWHtZtLD4NI1A1UN7ykS3JFBpob1Ull6%2FylP1ixL%2BWRMoZhMT4jRq84UY1EuZuzrdYvk4jOss03HtMalUCUEx3DCT9YfEBjqkAQrFl%2BdnsTaOZxrOS5QDRPlhUOmedfxlxk6Axegk3QS1HBDiEtVkDOk7%2B5V9zUK1Oj9XRx2Upx8H9uIFRveEbD%2BmwJdJOAUtot9HB068YphFv4AIo%2FcqFRhNCaeeJcmPxiE6ljwUKrWCEtx7B7DmM1HroEDmt9JA%2B%2FwKSV8Zv0xTRROYafN%2FrJPcO9aK%2Fxoq7go9bqvCmfAQabD50U09%2FnAp6fiC&X-Amz-Signature=45413479fe8e6815208f49413c0943851507572521db46e61cee76f4b3897432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://allgg.tistory.com/29](https://allgg.tistory.com/29)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9b9b6b94-4bab-4c22-a7ab-a424005eaa23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIKPKWQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEv7265NKqIxmI7%2BgExN%2FL6yNCyg2ly0AarM8ZnKENigIhAMMmA7Yg6hX3DCwaw%2F72es8aUSiog2ohQYnNsRL%2B0E56Kv8DCCoQABoMNjM3NDIzMTgzODA1IgzLCdqPerjZz%2BI8yTMq3AOx3dBulD%2FwuQPDRZwozvWV18%2BaQG%2FY5D8btxHv%2FJZ9oDPvlRcZL3Wc3slPjcPpTxG35wp7z1ZRfhpK%2BPF7P4JzjronoklBRXoLYgnUbJoGSSFvd7LuPFnPlVAf%2By8OwpeYMstP0DIOznLPY7or4KB1kugjg78cgYZhc5XGW2fpnhlfQj2xm9lwhp997LiOt2V34yav0bwGAoBlOGD7AYhw1eZBMikiOy8VuhTDuKu00oMFKihuWQ82HASLle4xSm%2Fx4U%2F0gCBCmFM3xGi%2FlpS%2BP5wQn0mj1HUmz2h2v3NKkfnNsrgZwxFweWI3Jk7knaHmDlEB%2BAwit2UEOOelHjhXpILoREOtBmbZu3kf1LPYvlIFYt4Kk04Oj7kc9TwbfdLKJf6s68CrK%2FlufaWH7gBJZNHhk0Wtq%2FELY%2Bi9dcPiGg5LZPHirRdowiAaPVMgaRWM0kA45%2BOviMJLSXX5QsNhkgf9mC1bwPBbdc7bXtKTh6guJoF%2BPxE0J71kvoHO1klo3fDzzzuLxrpmuLIw%2BMPix2qteO9WiHbNIioZWHtZtLD4NI1A1UN7ykS3JFBpob1Ull6%2FylP1ixL%2BWRMoZhMT4jRq84UY1EuZuzrdYvk4jOss03HtMalUCUEx3DCT9YfEBjqkAQrFl%2BdnsTaOZxrOS5QDRPlhUOmedfxlxk6Axegk3QS1HBDiEtVkDOk7%2B5V9zUK1Oj9XRx2Upx8H9uIFRveEbD%2BmwJdJOAUtot9HB068YphFv4AIo%2FcqFRhNCaeeJcmPxiE6ljwUKrWCEtx7B7DmM1HroEDmt9JA%2B%2FwKSV8Zv0xTRROYafN%2FrJPcO9aK%2Fxoq7go9bqvCmfAQabD50U09%2FnAp6fiC&X-Amz-Signature=8678034eae83cd458d8f599618d9c834e9dfa1e3d3d73e6490986a046f0082ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


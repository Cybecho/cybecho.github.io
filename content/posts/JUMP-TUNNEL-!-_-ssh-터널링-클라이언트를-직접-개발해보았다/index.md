---
title: "JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다"
date: 2025-03-15T04:16:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "Jump Tunnel은 SSH 터널링의 복잡성을 단순화하기 위해 개발된 GUI 프로그램으로, Bastion Host를 통해 내부망을 안전하게 보호하고 ProxyJump 기능을 활용하여 여러 서버에 쉽게 접근할 수 있도록 해줍니다. 사용자는 마스터 계정과 키를 통해 관리 효율성을 높일 수 있으며, 간편한 설정 자동화로 SSH 터널링을 쉽게 이해하고 적용할 수 있습니다."
notion_id: "1b71bab9-e3f8-8022-849f-ce52c62d729e"
notion_url: "https://www.notion.so/JUMP-TUNNEL-ssh-1b71bab9e3f88022849fce52c62d729e"
---

# JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다

> **Summary**
> Jump Tunnel은 SSH 터널링의 복잡성을 단순화하기 위해 개발된 GUI 프로그램으로, Bastion Host를 통해 내부망을 안전하게 보호하고 ProxyJump 기능을 활용하여 여러 서버에 쉽게 접근할 수 있도록 해줍니다. 사용자는 마스터 계정과 키를 통해 관리 효율성을 높일 수 있으며, 간편한 설정 자동화로 SSH 터널링을 쉽게 이해하고 적용할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e10ce4e7-a037-4d6f-a0e7-d748f14679a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQUUJGDF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCJUo%2BhkV97A9zYzQ3mTb%2BCc8pvMFl5XC6DPKZew%2B4JMwIhAKSoBXGUiH9iZKaD%2B02qLWMfZwq7PcXztjzX2EgzVVz2Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxjf5pk63qD6gT2Fboq3AM4a%2BRlrUedlMA0c8y%2FgfnEZbq3%2FhfPxbK68254st65%2FeN4UTM575F9hZdvzkUSdaeUqZAyfeRjgkE%2B43tcwrP2x6kNknekShTI7Xj8ZgdD8tHm1BbZPobIppHuD9lNCNNb%2Fh007%2FPzomcCmHpeo26RyDnX8mrSTVyHiiZVPKe9j2%2FgPnGmcLexH%2FT4sM8lDMlL9ydUEI6cI6K9bVeZnuzL5XrwLAQcoi1bQ%2BKMHITcmyF9nLH9r99poVsOYoPqlDiwElFKxQsHw3ip1CuX0eajIeYl0Q6IaLsAXrSDa34RFsfLU4df6Z%2Byi7VbradkejMDqEgSGMvVf%2FHWrdWgRedDDT%2FzcZUBon6KukCfzy22rzCULQmPhq5RSaqAanjOXklMBCYNAllOMEb9mJukBvthe9kSyTI8Hwb2KRD9YWRrHrPdtye3hi0P0k%2FvcemiqoZQwu0LOGtf0m2DGcTNNskCc3PgVJrtrKfEB4Ye3a6A5z%2Btn5bjhLGc3yyODquOnrygl9q2nJZTnH0E2lQ2PVkQTy%2Bk4pleqLClmBh5E3M%2BOWhnUQ7FqWcAGyQD38Nvsml40hFauIGyhuCAu600XHO0TEZ1rKFN37OY%2FUS7zyKLVX93XtPSXcOxZz73ujCjm4jEBjqkAZ6G3sy1F%2FJhTJ70gEE8oy5FdnBReK9IvfR7U1WaOtddYXSdrKoSiMN1jcEgnUYJghvm3BkCMgOx0ZZ2W2LNZiZJDhhxjtKXGceOXOi2ugZ8%2BOqXjX%2BeOY38skjBsO%2B3SdHFBfom%2BiCnwaWcUiTG8bNTEJ%2FDxcUj%2BtwPmmDMr1q69d53eVbQOp4Q3WQWJkjiSO0OrcyJppnstHWekuSa%2Bxoa%2F28a&X-Amz-Signature=b3a3f89c4e143c9e4263b3da5d45c097d5d4b7d9257072b2e2dcd1d6dabe1746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://github.com/Cybecho/JumpTunnel](https://github.com/Cybecho/JumpTunnel)

# 4.5

# o1

# Grok3



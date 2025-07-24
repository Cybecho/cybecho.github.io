---
title: "C드라이브 관리자권한 끄기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우 C 드라이브에서 관리자 권한을 요구하는 문제를 해결하기 위해, 레지스트리에서 관리자 권한을 끄는 방법을 설명합니다. 키맵핑으로 인한 잡버그가 많다는 언급도 있습니다."
notion_id: "215c3694-3dee-4a40-af5f-cac1d481c903"
notion_url: "https://www.notion.so/C-215c36943dee4a40af5fcac1d481c903"
---

# C드라이브 관리자권한 끄기

> **Summary**
> 윈도우 C 드라이브에서 관리자 권한을 요구하는 문제를 해결하기 위해, 레지스트리에서 관리자 권한을 끄는 방법을 설명합니다. 키맵핑으로 인한 잡버그가 많다는 언급도 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMZV5F3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDorkXCxKFAb6bhWEYjcMLA%2BfoOcheZEJA3XE%2BkF2siuAiEA9VCHicwoE4Vf%2Ff3fqil2cz0bJhXVtYvB2sv56w8Jdrcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHdQcrRkZEbmIvBDvircAz5QqlFYA1B13by41enN%2FWF0klQjMUEcPSAFnem1wmuB%2B2FGwl1S13ILw62cp2tvpxUXjt4Rn9iTjIl%2B9blrLVntdhgULbj78fAygBr%2FdnfAsvOTd4Ik%2BNie1HQg9mWSDiOOCbrswNlDuTW9FKi9huz6wc%2F%2FVOdSA64gKfgletpbwWiwUNAZ0Y4AgWtgjDhv6c4AOmfMGVMn8RZgD4SNe8yjT%2BeqdoWFA4ZB0%2BADtr%2BV2b5GBsThi%2BngokUqsw8PrREegp%2BdgiEWm%2F7wOZBjKsM7vJjdMwN3uGKn8JiRDaooNZgtfUYbLyth82WQkt9YKBD7eS9wRCHQEZXVBXkKuXds22TXjgQA5zuf0W8RR2nh1rROuhFMwk2nDyOan136slGwbsIM08CR4v7jNSzCK574GjsV%2Bku6HCNLLDh1%2FDhZbNotp0xK74Ucs%2FcToAsHvCYYMNDhD7B6Wt2hivN%2F52n8yibAfPMx1r5wdbR1W4ujhSoxLzG%2FElVBLwe1T8sCMbAmCoyot7BrR64SySHKW5Vk6WsVhlO6wLbAG5ipsK4gnBv2lgJQvhRlwXKHQBLhC9mu3osBzXiSkChqbjeMJek44XGM57xbdrUmlAZIIefhdOF2M96Jj88O%2BgfLMJP1h8QGOqUBb0MTcRQkoBSR%2B8FXgBB%2B4Mr9q2vLkQZUR0ajf5jwHeNwQ9UMysyNHum6W8zrWLmQP9sZfLELyRQ0Drjm1nqwrF1LAztZ86KY%2B16xuKJ5PUVOLUuDOS6Eji79n80bXV%2BpIRe14K7Ts4Y0Cxw61swSEgQlpuDoeeot2S%2BWVbKoNlZZyKdXSKAm1xwf2L4bBwYK%2FIET76Y3kb8O7F%2B0EZd5rptOKCeE&X-Amz-Signature=871ac66b311f5ea5fcc945e371f2bd5e5ce921aba8afeb0cb251b5ca0881b827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8525155b-0b61-444e-b8d9-9b4f0e2305d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMZV5F3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDorkXCxKFAb6bhWEYjcMLA%2BfoOcheZEJA3XE%2BkF2siuAiEA9VCHicwoE4Vf%2Ff3fqil2cz0bJhXVtYvB2sv56w8Jdrcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHdQcrRkZEbmIvBDvircAz5QqlFYA1B13by41enN%2FWF0klQjMUEcPSAFnem1wmuB%2B2FGwl1S13ILw62cp2tvpxUXjt4Rn9iTjIl%2B9blrLVntdhgULbj78fAygBr%2FdnfAsvOTd4Ik%2BNie1HQg9mWSDiOOCbrswNlDuTW9FKi9huz6wc%2F%2FVOdSA64gKfgletpbwWiwUNAZ0Y4AgWtgjDhv6c4AOmfMGVMn8RZgD4SNe8yjT%2BeqdoWFA4ZB0%2BADtr%2BV2b5GBsThi%2BngokUqsw8PrREegp%2BdgiEWm%2F7wOZBjKsM7vJjdMwN3uGKn8JiRDaooNZgtfUYbLyth82WQkt9YKBD7eS9wRCHQEZXVBXkKuXds22TXjgQA5zuf0W8RR2nh1rROuhFMwk2nDyOan136slGwbsIM08CR4v7jNSzCK574GjsV%2Bku6HCNLLDh1%2FDhZbNotp0xK74Ucs%2FcToAsHvCYYMNDhD7B6Wt2hivN%2F52n8yibAfPMx1r5wdbR1W4ujhSoxLzG%2FElVBLwe1T8sCMbAmCoyot7BrR64SySHKW5Vk6WsVhlO6wLbAG5ipsK4gnBv2lgJQvhRlwXKHQBLhC9mu3osBzXiSkChqbjeMJek44XGM57xbdrUmlAZIIefhdOF2M96Jj88O%2BgfLMJP1h8QGOqUBb0MTcRQkoBSR%2B8FXgBB%2B4Mr9q2vLkQZUR0ajf5jwHeNwQ9UMysyNHum6W8zrWLmQP9sZfLELyRQ0Drjm1nqwrF1LAztZ86KY%2B16xuKJ5PUVOLUuDOS6Eji79n80bXV%2BpIRe14K7Ts4Y0Cxw61swSEgQlpuDoeeot2S%2BWVbKoNlZZyKdXSKAm1xwf2L4bBwYK%2FIET76Y3kb8O7F%2B0EZd5rptOKCeE&X-Amz-Signature=8f3e25b7dc15757f9b8cec4a459cf3c7b7ab6ca29ce8030d6585446be0f67d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 C에서 뭘 할때마다 관리자 권한을 요구해서


그냥 관리자 권한을 꺼버렸습니다 



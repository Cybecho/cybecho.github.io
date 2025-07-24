---
title: "Git 동기화시 충돌 발생했을때 해결법"
date: 2023-10-29T00:00:00.000Z
draft: false
tags: ["obsidian"]
series: ["Git", "Tips"]
description: "깃 충돌이 발생했을 때, 에러 메시지를 더블클릭하여 충돌이 일어난 파일들을 확인하고, 해당 파일을 제거하기 위해 "
notion_id: "c00dabb6-8b8f-4de0-8733-95dc39aa66b4"
notion_url: "https://www.notion.so/Git-c00dabb68b8f4de0873395dc39aa66b4"
---

# Git 동기화시 충돌 발생했을때 해결법

> **Summary**
> 깃 충돌이 발생했을 때, 에러 메시지를 더블클릭하여 충돌이 일어난 파일들을 확인하고, 해당 파일을 제거하기 위해 

---


![Image](https://obsidian.md/images/2023-06-logo.png)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e7b20513-db50-4a37-8bbe-8f643efee825/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFECYAJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCSj1kbL2CCGDYkrHqA6Mo8DTgH8gbFY7QdkW4YT5Ld%2BQIgGgWzRbRJJnkyc3cqbvmTvF7%2BBOHm6TtPeA1d1PtEOGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOabYC5r8k%2Fz%2FOyKYSrcA1nrwAnpZSuzX2r7onyzmqpNS96LPhhyHJVJYZkwsHsI%2Fbxug9nwe%2FEUFvMJ8f5JG%2BMQ6zwVsyYQu3YDDafunhC3NRe04ADC0Axy3hYQmdZOJ%2FOCSSvqM12VoZn8%2B0nSPK8qBCL1uqxble3ziaL%2F8W8M9zDeID0qaXW2kkRzWC%2FqJxmxrVL%2BfVr6mqJOoyzXnLhYNjUHqxWTF7KIqAZpQGr1UDK1TDwoD%2BP%2BFQDB8mq%2F4oF%2BQLU3lhU9PLDwz0dQiOzWLFZ4qt1SfLSeu%2Fqchrmkezp3d%2BdAAtyt%2B36Tbx3vrVH92AkTyChIYjr9tpiKbeiA8m6CuiY30CuawhA%2BaNHHFoM9NhtjiuDlcHh74JtDG2fbipzYX%2BYzgL8xGTwUDvhSTnUFdRy3%2Bu1gLC%2Fp1GIwSvfPcMT8MycZFpczk%2F2o3VdV%2BUDoXeJVadM%2FlOYirujNmeGupJbxHkz6hzvKEzHxlrBLmIj4ZcJ3U7cuiNLJKwfEazxpBbv7TJL5hL4kNPEDI%2BveOuanJAZS3HbyHkDg%2BrWL8JMIUiUDca2MnSvsDrbaatoNC567ft4giWqDIHELc9TV09IepFEf9nx8v18AwLcUYFp6Xm5rN6rIS4V4McC%2FZBm%2FzmRhOMcrMMrPh8QGOqUBOFhNYs3mHyuJAIO3sendPT%2BXr8RKCKGPZsW%2B6bfAlmVghDC85pX%2FpkyuGr6N7%2Bbt0jVSKaqmpqG90xvOU3KM4befUG3So8Tr18iYhN2aPUQ6YFbed2PskyOo1Sz%2BOLF5J%2FWxrqWgWFQzASFTZPvek9dAwY0bIbjll%2BelVfCw0NIj%2FdkdMmTKQ%2FnbTLqFQqK747iJduCDrvjXVp76x1pNwSPbT6qn&X-Amz-Signature=d0788015bc44d59686438785dfe574aa091121a4acae85476516edfc2182cb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/234ec01a-e9d8-4c07-aafe-6dc3be3d8ac1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFECYAJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCSj1kbL2CCGDYkrHqA6Mo8DTgH8gbFY7QdkW4YT5Ld%2BQIgGgWzRbRJJnkyc3cqbvmTvF7%2BBOHm6TtPeA1d1PtEOGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOabYC5r8k%2Fz%2FOyKYSrcA1nrwAnpZSuzX2r7onyzmqpNS96LPhhyHJVJYZkwsHsI%2Fbxug9nwe%2FEUFvMJ8f5JG%2BMQ6zwVsyYQu3YDDafunhC3NRe04ADC0Axy3hYQmdZOJ%2FOCSSvqM12VoZn8%2B0nSPK8qBCL1uqxble3ziaL%2F8W8M9zDeID0qaXW2kkRzWC%2FqJxmxrVL%2BfVr6mqJOoyzXnLhYNjUHqxWTF7KIqAZpQGr1UDK1TDwoD%2BP%2BFQDB8mq%2F4oF%2BQLU3lhU9PLDwz0dQiOzWLFZ4qt1SfLSeu%2Fqchrmkezp3d%2BdAAtyt%2B36Tbx3vrVH92AkTyChIYjr9tpiKbeiA8m6CuiY30CuawhA%2BaNHHFoM9NhtjiuDlcHh74JtDG2fbipzYX%2BYzgL8xGTwUDvhSTnUFdRy3%2Bu1gLC%2Fp1GIwSvfPcMT8MycZFpczk%2F2o3VdV%2BUDoXeJVadM%2FlOYirujNmeGupJbxHkz6hzvKEzHxlrBLmIj4ZcJ3U7cuiNLJKwfEazxpBbv7TJL5hL4kNPEDI%2BveOuanJAZS3HbyHkDg%2BrWL8JMIUiUDca2MnSvsDrbaatoNC567ft4giWqDIHELc9TV09IepFEf9nx8v18AwLcUYFp6Xm5rN6rIS4V4McC%2FZBm%2FzmRhOMcrMMrPh8QGOqUBOFhNYs3mHyuJAIO3sendPT%2BXr8RKCKGPZsW%2B6bfAlmVghDC85pX%2FpkyuGr6N7%2Bbt0jVSKaqmpqG90xvOU3KM4befUG3So8Tr18iYhN2aPUQ6YFbed2PskyOo1Sz%2BOLF5J%2FWxrqWgWFQzASFTZPvek9dAwY0bIbjll%2BelVfCw0NIj%2FdkdMmTKQ%2FnbTLqFQqK747iJduCDrvjXVp76x1pNwSPbT6qn&X-Amz-Signature=67e6342073e256d07c7196f4d31c1ae247c3ecde74c07dfbceac5997d90d516c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
git rm <파일>
```


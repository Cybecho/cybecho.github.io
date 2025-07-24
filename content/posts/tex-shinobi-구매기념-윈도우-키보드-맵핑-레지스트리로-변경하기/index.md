---
title: "tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["개발환경"]
description: "윈도우 키보드의 키 맵핑을 레지스트리를 통해 변경하는 방법과 관련된 자료 및 유용한 소프트웨어 링크를 제공합니다."
notion_id: "769bc582-1e7c-4c1b-b2d7-d6754b7fe6b5"
notion_url: "https://www.notion.so/tex-shinobi-769bc5821e7c4c1bb2d7d6754b7fe6b5"
---

# tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기

> **Summary**
> 윈도우 키보드의 키 맵핑을 레지스트리를 통해 변경하는 방법과 관련된 자료 및 유용한 소프트웨어 링크를 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9fcb4229-6e6e-402a-8347-4d01b0dfc5b9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJC26JKW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDLaBoXy3xhGfeKCPBKB4ayWGovXi0brtjm3H10CjBOYAiEAmE9%2Bj8ngUsFYeN9ibmAzFan55IuAqAXJPR7x15yElOoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMiN2h%2BBidYZQnAa9CrcAy0uxu5q7Uz53oHoSNGV59XUK0hTnCAy86N0JxC3zqYLGK0IZFPsfpX0HQPB6afrAv%2Bzz%2BBC9temEVz5twMmfEGkJRBvG1wk3iVBYkQXDUIGFH%2FLb3XMmjHkUix0%2BN1hXTfFByRf%2BhG70SL9urHrwDmh1Yc64PhUIQAukoOpHVA8HxIdFf2CSpHwE2u99zEFHLqABHnA7%2Bzh5YOUJufnhoA7LmhS%2FJyhX%2FW5cc2V865l1jESyN1h0S4UWS%2Bh7phcChyR3UkazgaQMB8DuhIetBPn5p4KrupnEO0XNMn15e%2FYKN7iVi%2F0AEef3qTItTPgtjBC8beDNXRKLMZCyV%2FBI2BH0Ar8uHH3LgXvvZ86BQ5veKNs%2FldZzhg6%2BWSePfyuYsPbJEKBtPtW3FqGhbQ7%2FS7YnbH4nq41O3GIcM5BOxEr%2Br4qmzFHQLvA7HPMz73Ee0W0iuZ6VrJWQWwqObx5D7o1u0hO4%2BFTFLF9hKuuiJbEn4ip%2FXHecXC8vpKNIo%2FvKc4SLW%2B5x8KVGL7h56Qw9TJ2vaGV2IJxEuJk6JJhAx4FEJMTltBxkj8raSqUoTin4gDfV5H6W0Fo4l%2Bl%2FkruGu%2FKTspZL665DCQ33YEhA7aS8uvjo8VBiK9ikYctMIjPh8QGOqUBf8HJnTdSl%2FKqcL3Nxme9GyzdqVGpxBN%2FYLgD%2FvnmkYDpsUZwgyS0luggcrvyAq0YhhWD6uAlDImaXOxHdPduTjCzRfM4Zg2FyeVA00FBDbPwqiiT8bc8C%2Bi095dtGYZqzuI%2B8ItlSJywFOF1ht%2BjwvjWKgXwFukyk1kEr4AaZv5Ajqu8sfVOY%2FmrQ9S6AsptwgwSVQhY5BGRUPfX0XbAlvFh%2F2w8&X-Amz-Signature=ca89659dcdad2a7161bafbc981691a528b800356f258d65c1055fb836bd0a8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJC26JKW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDLaBoXy3xhGfeKCPBKB4ayWGovXi0brtjm3H10CjBOYAiEAmE9%2Bj8ngUsFYeN9ibmAzFan55IuAqAXJPR7x15yElOoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMiN2h%2BBidYZQnAa9CrcAy0uxu5q7Uz53oHoSNGV59XUK0hTnCAy86N0JxC3zqYLGK0IZFPsfpX0HQPB6afrAv%2Bzz%2BBC9temEVz5twMmfEGkJRBvG1wk3iVBYkQXDUIGFH%2FLb3XMmjHkUix0%2BN1hXTfFByRf%2BhG70SL9urHrwDmh1Yc64PhUIQAukoOpHVA8HxIdFf2CSpHwE2u99zEFHLqABHnA7%2Bzh5YOUJufnhoA7LmhS%2FJyhX%2FW5cc2V865l1jESyN1h0S4UWS%2Bh7phcChyR3UkazgaQMB8DuhIetBPn5p4KrupnEO0XNMn15e%2FYKN7iVi%2F0AEef3qTItTPgtjBC8beDNXRKLMZCyV%2FBI2BH0Ar8uHH3LgXvvZ86BQ5veKNs%2FldZzhg6%2BWSePfyuYsPbJEKBtPtW3FqGhbQ7%2FS7YnbH4nq41O3GIcM5BOxEr%2Br4qmzFHQLvA7HPMz73Ee0W0iuZ6VrJWQWwqObx5D7o1u0hO4%2BFTFLF9hKuuiJbEn4ip%2FXHecXC8vpKNIo%2FvKc4SLW%2B5x8KVGL7h56Qw9TJ2vaGV2IJxEuJk6JJhAx4FEJMTltBxkj8raSqUoTin4gDfV5H6W0Fo4l%2Bl%2FkruGu%2FKTspZL665DCQ33YEhA7aS8uvjo8VBiK9ikYctMIjPh8QGOqUBf8HJnTdSl%2FKqcL3Nxme9GyzdqVGpxBN%2FYLgD%2FvnmkYDpsUZwgyS0luggcrvyAq0YhhWD6uAlDImaXOxHdPduTjCzRfM4Zg2FyeVA00FBDbPwqiiT8bc8C%2Bi095dtGYZqzuI%2B8ItlSJywFOF1ht%2BjwvjWKgXwFukyk1kEr4AaZv5Ajqu8sfVOY%2FmrQ9S6AsptwgwSVQhY5BGRUPfX0XbAlvFh%2F2w8&X-Amz-Signature=a9d73349f4211cbbf31d09eb91b237cd084898cab71dbf9f12accfd37bf5d0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🔗 [https://gigglehd.com/gg/soft/12015825](https://gigglehd.com/gg/soft/12015825)

🔗 [https://www.passmark.com/products/keytest/](https://www.passmark.com/products/keytest/)

🔗 [https://www.majorgeeks.com/files/details/switch_hitter.html](https://www.majorgeeks.com/files/details/switch_hitter.html)


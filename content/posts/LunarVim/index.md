---
title: "LunarVim"
date: 2024-05-07T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "LunarVim에 대한 설치 가이드를 제공하며, Arch, Debian, MAC, Windows, Ubuntu와 같은 다양한 운영 체제에서 사용할 수 있습니다."
notion_id: "f526e9b0-513a-4cd0-a43b-9631c4c0304f"
notion_url: "https://www.notion.so/LunarVim-f526e9b0513a4cd0a43b9631c4c0304f"
---

# LunarVim

> **Summary**
> LunarVim에 대한 설치 가이드를 제공하며, Arch, Debian, MAC, Windows, Ubuntu와 같은 다양한 운영 체제에서 사용할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f814d0a-1519-44fa-b8e1-31abbe5a8204/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJC26JKW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDLaBoXy3xhGfeKCPBKB4ayWGovXi0brtjm3H10CjBOYAiEAmE9%2Bj8ngUsFYeN9ibmAzFan55IuAqAXJPR7x15yElOoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMiN2h%2BBidYZQnAa9CrcAy0uxu5q7Uz53oHoSNGV59XUK0hTnCAy86N0JxC3zqYLGK0IZFPsfpX0HQPB6afrAv%2Bzz%2BBC9temEVz5twMmfEGkJRBvG1wk3iVBYkQXDUIGFH%2FLb3XMmjHkUix0%2BN1hXTfFByRf%2BhG70SL9urHrwDmh1Yc64PhUIQAukoOpHVA8HxIdFf2CSpHwE2u99zEFHLqABHnA7%2Bzh5YOUJufnhoA7LmhS%2FJyhX%2FW5cc2V865l1jESyN1h0S4UWS%2Bh7phcChyR3UkazgaQMB8DuhIetBPn5p4KrupnEO0XNMn15e%2FYKN7iVi%2F0AEef3qTItTPgtjBC8beDNXRKLMZCyV%2FBI2BH0Ar8uHH3LgXvvZ86BQ5veKNs%2FldZzhg6%2BWSePfyuYsPbJEKBtPtW3FqGhbQ7%2FS7YnbH4nq41O3GIcM5BOxEr%2Br4qmzFHQLvA7HPMz73Ee0W0iuZ6VrJWQWwqObx5D7o1u0hO4%2BFTFLF9hKuuiJbEn4ip%2FXHecXC8vpKNIo%2FvKc4SLW%2B5x8KVGL7h56Qw9TJ2vaGV2IJxEuJk6JJhAx4FEJMTltBxkj8raSqUoTin4gDfV5H6W0Fo4l%2Bl%2FkruGu%2FKTspZL665DCQ33YEhA7aS8uvjo8VBiK9ikYctMIjPh8QGOqUBf8HJnTdSl%2FKqcL3Nxme9GyzdqVGpxBN%2FYLgD%2FvnmkYDpsUZwgyS0luggcrvyAq0YhhWD6uAlDImaXOxHdPduTjCzRfM4Zg2FyeVA00FBDbPwqiiT8bc8C%2Bi095dtGYZqzuI%2B8ItlSJywFOF1ht%2BjwvjWKgXwFukyk1kEr4AaZv5Ajqu8sfVOY%2FmrQ9S6AsptwgwSVQhY5BGRUPfX0XbAlvFh%2F2w8&X-Amz-Signature=29d1c082f69a98c12827eeeac7d157c7ffb21aab6b2ac85b278dbf6a0279fbd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJC26JKW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDLaBoXy3xhGfeKCPBKB4ayWGovXi0brtjm3H10CjBOYAiEAmE9%2Bj8ngUsFYeN9ibmAzFan55IuAqAXJPR7x15yElOoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMiN2h%2BBidYZQnAa9CrcAy0uxu5q7Uz53oHoSNGV59XUK0hTnCAy86N0JxC3zqYLGK0IZFPsfpX0HQPB6afrAv%2Bzz%2BBC9temEVz5twMmfEGkJRBvG1wk3iVBYkQXDUIGFH%2FLb3XMmjHkUix0%2BN1hXTfFByRf%2BhG70SL9urHrwDmh1Yc64PhUIQAukoOpHVA8HxIdFf2CSpHwE2u99zEFHLqABHnA7%2Bzh5YOUJufnhoA7LmhS%2FJyhX%2FW5cc2V865l1jESyN1h0S4UWS%2Bh7phcChyR3UkazgaQMB8DuhIetBPn5p4KrupnEO0XNMn15e%2FYKN7iVi%2F0AEef3qTItTPgtjBC8beDNXRKLMZCyV%2FBI2BH0Ar8uHH3LgXvvZ86BQ5veKNs%2FldZzhg6%2BWSePfyuYsPbJEKBtPtW3FqGhbQ7%2FS7YnbH4nq41O3GIcM5BOxEr%2Br4qmzFHQLvA7HPMz73Ee0W0iuZ6VrJWQWwqObx5D7o1u0hO4%2BFTFLF9hKuuiJbEn4ip%2FXHecXC8vpKNIo%2FvKc4SLW%2B5x8KVGL7h56Qw9TJ2vaGV2IJxEuJk6JJhAx4FEJMTltBxkj8raSqUoTin4gDfV5H6W0Fo4l%2Bl%2FkruGu%2FKTspZL665DCQ33YEhA7aS8uvjo8VBiK9ikYctMIjPh8QGOqUBf8HJnTdSl%2FKqcL3Nxme9GyzdqVGpxBN%2FYLgD%2FvnmkYDpsUZwgyS0luggcrvyAq0YhhWD6uAlDImaXOxHdPduTjCzRfM4Zg2FyeVA00FBDbPwqiiT8bc8C%2Bi095dtGYZqzuI%2B8ItlSJywFOF1ht%2BjwvjWKgXwFukyk1kEr4AaZv5Ajqu8sfVOY%2FmrQ9S6AsptwgwSVQhY5BGRUPfX0XbAlvFh%2F2w8&X-Amz-Signature=4b096a11fbc312818c5f73b03551dd101b3dd96dd91a96dde9d17289435ac801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@mythos/Linux-Lunar-Vim-설치](https://velog.io/@mythos/Linux-Lunar-Vim-설치)



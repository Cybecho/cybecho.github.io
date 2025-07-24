---
title: "Vim 설정을 플랫폼간 동기화 해봅시다"
date: 2024-04-18T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "git을 이용해 플랫폼마다 Vim 설정 파일을 동기화하는 방법에 대해 설명합니다."
notion_id: "dedf8d44-2e9a-45ff-aadd-6e6c1fbd01d6"
notion_url: "https://www.notion.so/Vim-dedf8d442e9a45ffaadd6e6c1fbd01d6"
---

# Vim 설정을 플랫폼간 동기화 해봅시다

> **Summary**
> git을 이용해 플랫폼마다 Vim 설정 파일을 동기화하는 방법에 대해 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542GEFTX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICcuU3ZrkzO3tvxD1EMcHbzNoKFtks8ckcUziMZZelHhAiEAzdiUJ54SSV%2FKXzAbGfYnPtrv0XkJLlXO9XduGMCu2OUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP87AjFl%2FPNm83iBTyrcA00FSrDHrBdFKusGGKJIqUteyWrenEUspD%2FIZ20cIuH%2FfDlRFbAuNRUOtzDdxPd%2BqAGYMl5wrTgHapBqFc7RViEuGHs%2FWgqwZNYV9TzKQ6ZYBkclfGpuuRrsbzNYOTdOOqpnc0z0%2Bo3GidfYI9VhJJO2BvRG2kATgA%2FdDmOw1jh0DMl0okhhi2xXTAH6iE8D%2FDxY304%2Bl%2F%2Beqdgk%2BjLQK4E62%2B210chf1Bjv1VTCO0rVXCxDljJfc1coFtGiKwLgmz1gSQmSakufaUFj3CGq8tB9FIju%2FTfj%2F5hXT0SDHlEzuFWvYpNXzhPP75sArLXVBHlYsk%2BhoQxJDHGrDTewcsAagspfFpAlmB7rgLzXWsEnj8s8FZWJPidHGPkV5vxsXGbmJhCNsDHy8xqQ6%2BfIO212Y7af55RHiOS308antZhuNINEApoAP8PMG3jT2YfF70OlGBPhjCANjI1cKRHNW7EwWHOLkVL2184xOZg8bh%2FsnkrjnqzWrY567zmv%2BPqU9BSqUg4%2F%2FS2deaQ%2FTE4gxWoIxtXTax3f%2B0K6gc9KlAD7cAiHlNfKGl4D9%2BPUkeNZ8mH7FYjQIKIMmAzgBlChVxyOQ%2FnSh%2FK0essqsQSh9u58YTfV9TsPO2uX0bDzMJDQh8QGOqUBGyYgEpgsXEPLQ%2Fi5deLEhUSHQ0Gp3G9i45O1RvpiNScdLiO3qqz6bt1Bkcbs3HpiYDY9HnBGXQaF3OIjuABcpaiAJmBaFUgGmZoXHwctQyvHCuktWLPMgSepfr5vJPyrB2Mjp2runVuNMT7XJC7ccwWhxcwzykOY40g80ZHCxzMhT7NxJKu8Fx5K9zixvhcNaaUDpvwDBYRyN2NXhETTfsbYHMJf&X-Amz-Signature=37fc4ee0bc5693f24b0532ada0e360e60b62d376b635eca4423dba3355746e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8](https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8)

즉, git을 이용해 플랫폼마다 confg 파일을 옮겨주는 방식입니다


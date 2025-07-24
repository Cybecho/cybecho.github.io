---
title: "Vim 설정을 플랫폼간 동기화 해봅시다"
date: 2024-04-18T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "git을 이용해 플랫폼 간에 Vim 설정 파일을 동기화하는 방법에 대해 설명합니다."
notion_id: "dedf8d44-2e9a-45ff-aadd-6e6c1fbd01d6"
notion_url: "https://www.notion.so/Vim-dedf8d442e9a45ffaadd6e6c1fbd01d6"
---

# Vim 설정을 플랫폼간 동기화 해봅시다

> **Summary**
> git을 이용해 플랫폼 간에 Vim 설정 파일을 동기화하는 방법에 대해 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXANGNW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHcIvpdjwFjGamqvxnxUIDd%2BdYnzAniEp0uZELBml%2FEbAiEA189cojaZzFLBra9BZoCLhv0zjXCW0j6s%2BaqOO83bHhkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBOJfUvgslnWfNR7UircA8bZwOUL%2BhBDxrsFZ%2FYFVZIaQXPKFZ%2FzfXHbUErSw3jy%2FFeQzORpqpyFLJuMDGYmhONY853loselqN97tjhL3miA53XD%2FrdjNy9fO%2FZINqhNPm%2B39k7RiQjM6kQudt19I%2FFY%2Bit%2FeBfcDsFkqbHiJ6r3c5b%2BxnQaWz20Bt6%2FGePaRYBdVDSSXsESAEyYVu2FcyeXFP2q1LWvAey4PaX7OWqFWpkcg8xSnq9LC7NDeUNQohG4745VdPahx93g08CikiBHuXS7UjqTScC7tdXk7Qg1jwiQiL9nlbdWb5dHLUbbXvfBt%2BY9rPVNEVRK8CJH%2FSnqfOrTps7r%2FHxkGTfKa4RtmWEP6bqlm%2FGMleVsuITelXTiK5uYgMiO4cOFUc4XxbYYP%2BakBIQZriyyOtsgM%2BdzcNzZesXrWCHuVKNybHkCyf3%2FYisR5qtsqEATtV7UGzu6QI30SVX9KnWWP%2F91RyAFpcFOSxiAYZupZ%2FeyxLf37VDPPaLtHj12hDjoB8tUpdKby3ICjiZJD%2BAAkdpN1SVHwNGBY7Y83942yvzR%2BMjS3u2ch5rQ3lbjEv7IlP1vDgSM%2BBUQLXIsxNdPjCNKh0kmD%2B5QHR7yy%2FwwS68ayhxC91Hgu1vtdhYh6dGfMISbiMQGOqUBwRiFwcXiEfwVFcBmjbfdwck7lQz%2Bv3UJR5W2vnohGxZ1Xc2g1QAgMcPGwa%2Fp1%2BHNi6N8Z%2FqW9BJ%2BzxBgcGrN%2B6%2BqXp83LqQ%2BFthSJNUikdz7XeD3E4tthOA94OwN6wt4dHeOZH%2Fst1szJvdREhDvk5boaX1eOQgIO3KCLdVhH3B2JwYJxEi0mYQ63Mgq1BC%2FdmNQja0U8sBksUmQ880kRRLPfXwR&X-Amz-Signature=fc188241f70a08750fa6ced04ff11cf87b121e5dd8101cf05942fdb173223ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8](https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8)

즉, git을 이용해 플랫폼마다 confg 파일을 옮겨주는 방식입니다


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBLMRRV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBOHitAYd7zHVmGR%2FF%2ByGBaxjsS%2BnoHFVQnhSNH5NsekAiEAw5TAIJJ28b5VN%2FX74hUjt5QcKs8uIHYn99bx%2FRQAx%2Foq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDN5g7WXQaKgYcsXIFyrcA%2FjPyCSDyBR7W8ojugf01y5viqektsNpajZLak3EVLcnMzFabLON9n2gRxK%2Fiuc734g7cHevDTs4WwHcHbEHre1488YLaF9%2Fun4h%2B8ARFf5O0lTRsvGsM6Jq22xUtjajM8fjAhSjACuvl2axaPvdBPrOXQU3AxpyH29sop6gK8%2BEDlJ0gpn5EE2nIBKNOoAKwo%2BGuZflr6T5dfUCTg44fZcElBj2%2Bh6ldSC1ZURfqEgrgRwNhAKQKKsIWhGASFUpbTzme%2FD4Cs%2BB%2BYIQsp66f4YmWLzMg7%2FDwvcoPFNnaJuNgRIJJ21PLE%2BQorH0%2FFMeknQc7YiY%2F1tneF8QfQZRTp%2Fu19LjUXfUEGK9JTr7xOtfmqMCZwlKN3jr5opRplhbYNEvm19unu5YUhGLtkAeQHWOOkq%2Bq6q0j4f%2FmPS2WJqOMWHUOni1%2F2XPlF75S5ogf%2Ff7x9eLMk7B1A97gxJ67V3bbct0OpJxwssFzNQAn4VSayPhR9unALarbf9BTGheq8R3yILr%2F8ayj7L5apASSHw%2BSO0yS2ACROHT7YaxtJ6lFwSvQC7D76q6G8AwqbXNCxDusu1eO3R5yHZoTxIYmKZVPlQwdXk5g8CcnvWCjUMwuBbH%2FlPNbpRhycFgMOzOh8QGOqUBsIyZrw9YaB86iI3PwlVqGO%2BrO0fuQFrOANYo7MhSlGYo5%2FEdTYy8RdmLoFeCW1XFZ74WQyUwevK7t9wE%2Fns5YtQMg60pq5dmQBp7fzYfreoTelpwrhGBCUiwKRFPS1TNVKOPpJaQZ8sNdQa%2BfW1mXnb858Y7zZe33ZvsYMydW8ohwqvpRWqDjczMO0zbKi3hB0UtcSNgnBy3Y4kykJXxfJjFqvX8&X-Amz-Signature=5d82aa3be46ebb05d2ff2e798597ce05a3043f0bc7b8c920b2ceb0276dd00aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8](https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8)

즉, git을 이용해 플랫폼마다 confg 파일을 옮겨주는 방식입니다


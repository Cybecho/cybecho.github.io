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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTM4WR7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGJH8Fi6O7zkjLiBXOCY7uVAVxD8a5TSKmpMQGhXGub3AiEAyYuPwNLmPlvWvLfZ8gxPRock63kbSipWRnsxSM%2FJbvUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOuBU%2B7JL%2BHPY15l3SrcA5JlD8OIpbG8l4pKuc9a0WuN7zsWpdp3zK60EvYyQRmV6RHSRsKxYqMIOAg1R8c6Q6sF9pW%2FYSKITkbYwFljShJeAGMYHbs8ujskoenO3%2FNp1iWi0%2B0MNAPe%2BZprTF61GBdv%2B9rBz9oh1J2xdkReMh%2F5OjoMKqJC%2BAJ9PD28hHiP5w6EiStr2TABzuhAdRPFbekBeOkHLGdjmjwhRAfi4Px62NrwTDnx7SI6RPwe0IYD3TiVgw8%2BkRoeRyV%2BIk%2BxhVqmPwBmSolPze8qWnDgA2EhjB1Sv%2Bxj%2BsWtgUarz%2BJnYFg%2FwKsVkNedo9D5CdVdBQc7Hc0Eip7h4pY3JPs3IXpJlyyQ01PxxgjnC4g0jzFRV2Npzgs1HPOPD3%2FSCrXly6FHg9kM89hx5GLF7erR35C7ynYIA5sTLTCw7bK%2FgcwEu%2B5Qe6yiM0YA2ZyJQcI7FALFZZfTMJvNXbHUXOhPbiQW6Z3OztCeyjYbntZFMgaHfj0PD4qkyZ%2FSUIV6OeAuvLintUYl4y4otoJ3Dy9p%2BTR3R28FL%2FkzxXhbI0vRHQAuCJwmbxhbkFYW3iMnoewBfYYx7HKRUKClpBH88gRodj2U%2B%2BYGdtgFwl3lQRTDWrSihkpHCP8yulSDIrrvMLL2h8QGOqUBrCpg5h4UfWYy8oGAZIwjalw2ym38405VWrkD%2BYId%2BUe79rNqHM3BzEk8OJ94juzWdXT28e4PBEHOjA%2FRSYVxQsOCSwVThO1ASzZMuJJkJcmTPtaxsHapHW1F1AThSo5fXlsrEV6fFeAhrmVejvWhV4dVpr57hGGLs6fZu6wYu09p4w2M6ofL3ogSFOxC1%2BGIHyMMGgOSDRvMxv9XLBNO0SkhDGdU&X-Amz-Signature=7733fe3989bebe66330fb205c20c97f9edf537c840857befdc2792a16c1dccee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8](https://dev.to/kaiwalter/share-neovim-configuration-between-linux-and-windows-4gh8)

즉, git을 이용해 플랫폼마다 confg 파일을 옮겨주는 방식입니다


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f814d0a-1519-44fa-b8e1-31abbe5a8204/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ3T3O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFOTrxps60df5c2rLtEK2MqRlyD6Lw%2FE7qAZYHIJVbpxAiASZZrVIeJNHrHrDSZcQjc19V6Q29DGP8ycziF5bS%2FDsCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMc9lEA7BNtxlquH%2B0KtwDD7%2FtNwb841dXa%2FywJrS0p2vy8Cn9cuq%2BiyUuYZvZ%2BDqnTwipYbWD3Q%2BukFL9wcFvBJhzfYxqalvwaqXlazD00UK9WvyqEL7MAk1WkeqB8O0jaysqi7KfDmWeCWLat5NIPvlTTehcxbRtOCaSEAmgdiiWme3e94%2Fp5q1%2FwN%2FicOhST9hG0KaJU4viwfEXJ7g64iX4Q%2BehhbmmgW6juhUKXsBTAlB%2F%2FAPc1qoJV5LIJr6L%2BvOMiQiy7dgVmZbzcuXIdQXh0SlZDU52AClYF2e6H02qNDhtm%2Fspw%2FcQONUcYp%2FLd%2BnVKrOFc8dypLpVL%2Fh%2BcjXhiaV5hrUHGIdwt6HLConi%2BUcepLO9TaKGoI6oEJt6zaz2BF%2BXb8ZeTo9svJ8YyftD9h%2BPEEFOVj7IhN96BMy4DMB0kfIxLbogYTApalID5yrVjHwu%2B3IMpxf5eTEnA62mmu3mbkQTclkD%2BwkMkboB8OkH9Kw%2FL37AznP1BtasJZVmaxe4ZoFMm70xX5nPSy2P3Pe51KcedSXV%2Brie7QQN3nYFeDu49ft8ZZ7DjnkY57uVgYRhUKFQDIisGozKyQIZWyMDUOXwJxL6e4pSO84GqmttdHYJ%2BDGCelgNfxOESRTyh5%2Fg4zwoZa4wsvaHxAY6pgEuRSAaQWiLYquY0OisopG1kwBNzI160hwsDUBcVr1qXdqoL2togyOMshRApiSreJPpkIyUmFSns07BmbIGeOreMzWMbCKZdh0yuqjfYP2oi5NpMtVoFeizfmQz%2FPnEJxsdRTz1IOlwL2lzT%2Fgkcoy%2BGSbNcunyYdP3XQQ4FiEDWkC0pMf%2B92q2cTyUeif9Hz%2BYPdonLlV%2BQhh0Ma6ij6EYkt3OwRyu&X-Amz-Signature=270b023433e655105ccae6d27a301afa01c204680ea0f64311e70d49e07c8c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ3T3O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFOTrxps60df5c2rLtEK2MqRlyD6Lw%2FE7qAZYHIJVbpxAiASZZrVIeJNHrHrDSZcQjc19V6Q29DGP8ycziF5bS%2FDsCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMc9lEA7BNtxlquH%2B0KtwDD7%2FtNwb841dXa%2FywJrS0p2vy8Cn9cuq%2BiyUuYZvZ%2BDqnTwipYbWD3Q%2BukFL9wcFvBJhzfYxqalvwaqXlazD00UK9WvyqEL7MAk1WkeqB8O0jaysqi7KfDmWeCWLat5NIPvlTTehcxbRtOCaSEAmgdiiWme3e94%2Fp5q1%2FwN%2FicOhST9hG0KaJU4viwfEXJ7g64iX4Q%2BehhbmmgW6juhUKXsBTAlB%2F%2FAPc1qoJV5LIJr6L%2BvOMiQiy7dgVmZbzcuXIdQXh0SlZDU52AClYF2e6H02qNDhtm%2Fspw%2FcQONUcYp%2FLd%2BnVKrOFc8dypLpVL%2Fh%2BcjXhiaV5hrUHGIdwt6HLConi%2BUcepLO9TaKGoI6oEJt6zaz2BF%2BXb8ZeTo9svJ8YyftD9h%2BPEEFOVj7IhN96BMy4DMB0kfIxLbogYTApalID5yrVjHwu%2B3IMpxf5eTEnA62mmu3mbkQTclkD%2BwkMkboB8OkH9Kw%2FL37AznP1BtasJZVmaxe4ZoFMm70xX5nPSy2P3Pe51KcedSXV%2Brie7QQN3nYFeDu49ft8ZZ7DjnkY57uVgYRhUKFQDIisGozKyQIZWyMDUOXwJxL6e4pSO84GqmttdHYJ%2BDGCelgNfxOESRTyh5%2Fg4zwoZa4wsvaHxAY6pgEuRSAaQWiLYquY0OisopG1kwBNzI160hwsDUBcVr1qXdqoL2togyOMshRApiSreJPpkIyUmFSns07BmbIGeOreMzWMbCKZdh0yuqjfYP2oi5NpMtVoFeizfmQz%2FPnEJxsdRTz1IOlwL2lzT%2Fgkcoy%2BGSbNcunyYdP3XQQ4FiEDWkC0pMf%2B92q2cTyUeif9Hz%2BYPdonLlV%2BQhh0Ma6ij6EYkt3OwRyu&X-Amz-Signature=2b6d9a3c45a7eefe96ad24a3e1b760e837d4aac547378da935e3446dec4ab8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@mythos/Linux-Lunar-Vim-설치](https://velog.io/@mythos/Linux-Lunar-Vim-설치)



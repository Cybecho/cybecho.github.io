---
title: "LunarVim"
date: 2024-05-07T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "LunarVim에 대한 설치 정보를 제공하며, Arch, Debian, MAC, Windows, Ubuntu와 같은 다양한 운영 체제에서 사용할 수 있는 개발 환경을 다룹니다."
notion_id: "f526e9b0-513a-4cd0-a43b-9631c4c0304f"
notion_url: "https://www.notion.so/LunarVim-f526e9b0513a4cd0a43b9631c4c0304f"
---

# LunarVim

> **Summary**
> LunarVim에 대한 설치 정보를 제공하며, Arch, Debian, MAC, Windows, Ubuntu와 같은 다양한 운영 체제에서 사용할 수 있는 개발 환경을 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f814d0a-1519-44fa-b8e1-31abbe5a8204/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5V5EY76%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIG8K5JksJemeMlpzktRAqmgj1D33FbFA5bIBhB7%2FxpU7AiA3bYT4IbTLu7PPdZqEcQJeQktUEaS5FCbg5IiTvN3s8yr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMphWv%2BTP68qN10JrxKtwDGs7A9Dht1yAuiCB6HwatA6cGi0W8JO1tkSd526DM49aT4Xw%2FtzM80ADo9o%2FF%2FjeWsiiUwsTeJRulzkGdiK8VgTXS05PPJWaYXz8JRBgQkIYYxCLOdRF3uV9AqFZMm5FN53iTbojeE9lyqDdVO6yB9h%2FMnp1o3XXtQHIlRREN5ONsTPzADU4I9MUvojlMAgJW2knbx5%2BW%2FIHfy8G8iTpMMSd1vByjCObw54H5aLsp3Hg97lA1k8uYPmsDs%2FjRpLqvvuJCGp9V2gILo7OXkjDqe57mbuodWazNI2SgU5Ed2hi%2BreKyticWfFnMaahHM1%2FBS%2FC5LA4l2cOce0dF4kDKBUA0nQn17QUt02t5TXi%2BZPwbF2u2%2Bc%2BB9im2%2BD2sQWiTYtLEavZ8g%2BxB%2FiPC8t%2FJj4bza5WiC0F0hw03itCSMdoFPWEKe0bHEXJlpEqwY07%2BGqJssbUbZ4MyxjNdMaFoZ7srrdJhvJSU8MG1zagr3lehJ4OdLOv6faxrXMr6w3X3zgFKaKIbEpir5lMmjueZY5NrOkfbowMEug1Me%2FSPd57hU67fokUc%2BxzwbEOE2zULYhwtS4K21TlOgQ1b1ML4hI9HPZBEcS5vFcxw%2FaIrSG6NWEaGM%2BeqlXqdLQAw15uIxAY6pgHB8WJ0HCpuxJ%2FnrKP9pWH5h9AaAlmM2pHgehKuQdfvC4jVYCrvTCr01LwgXKTCuuAg10CnvYKfyhrbFkoIGNvvdGSHPMx%2B3z0btpENqnv%2BXWIJ0xjbMj%2BKTQh6gKeDZyD7a60bhx2wH48OlGOgqiXB69lPCooAq3a42ofdzIRGhA5tsELb54MeEf9z9XsUmsEZ6pnhdgdozj9P5VlR4N6nAOVFpYbx&X-Amz-Signature=e33c11f8ea49a7cd179f1eab02112930f443a679c9e2c576420be3a3c6b59ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5V5EY76%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIG8K5JksJemeMlpzktRAqmgj1D33FbFA5bIBhB7%2FxpU7AiA3bYT4IbTLu7PPdZqEcQJeQktUEaS5FCbg5IiTvN3s8yr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMphWv%2BTP68qN10JrxKtwDGs7A9Dht1yAuiCB6HwatA6cGi0W8JO1tkSd526DM49aT4Xw%2FtzM80ADo9o%2FF%2FjeWsiiUwsTeJRulzkGdiK8VgTXS05PPJWaYXz8JRBgQkIYYxCLOdRF3uV9AqFZMm5FN53iTbojeE9lyqDdVO6yB9h%2FMnp1o3XXtQHIlRREN5ONsTPzADU4I9MUvojlMAgJW2knbx5%2BW%2FIHfy8G8iTpMMSd1vByjCObw54H5aLsp3Hg97lA1k8uYPmsDs%2FjRpLqvvuJCGp9V2gILo7OXkjDqe57mbuodWazNI2SgU5Ed2hi%2BreKyticWfFnMaahHM1%2FBS%2FC5LA4l2cOce0dF4kDKBUA0nQn17QUt02t5TXi%2BZPwbF2u2%2Bc%2BB9im2%2BD2sQWiTYtLEavZ8g%2BxB%2FiPC8t%2FJj4bza5WiC0F0hw03itCSMdoFPWEKe0bHEXJlpEqwY07%2BGqJssbUbZ4MyxjNdMaFoZ7srrdJhvJSU8MG1zagr3lehJ4OdLOv6faxrXMr6w3X3zgFKaKIbEpir5lMmjueZY5NrOkfbowMEug1Me%2FSPd57hU67fokUc%2BxzwbEOE2zULYhwtS4K21TlOgQ1b1ML4hI9HPZBEcS5vFcxw%2FaIrSG6NWEaGM%2BeqlXqdLQAw15uIxAY6pgHB8WJ0HCpuxJ%2FnrKP9pWH5h9AaAlmM2pHgehKuQdfvC4jVYCrvTCr01LwgXKTCuuAg10CnvYKfyhrbFkoIGNvvdGSHPMx%2B3z0btpENqnv%2BXWIJ0xjbMj%2BKTQh6gKeDZyD7a60bhx2wH48OlGOgqiXB69lPCooAq3a42ofdzIRGhA5tsELb54MeEf9z9XsUmsEZ6pnhdgdozj9P5VlR4N6nAOVFpYbx&X-Amz-Signature=06d1b871883ad77836d2e4d9e56c676fd08ebcbe805e4dab7c93ce60f8a4127b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@mythos/Linux-Lunar-Vim-설치](https://velog.io/@mythos/Linux-Lunar-Vim-설치)



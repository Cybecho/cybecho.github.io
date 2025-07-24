---
title: "JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다"
date: 2025-03-15T04:16:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "SSH 터널링의 복잡성을 해결하기 위해 Jump Tunnel이라는 GUI 프로그램을 개발하였습니다. 이 프로그램은 Bastion Host를 통해 내부망을 보호하고, ProxyJump 기능으로 여러 서버에 간편하게 접근할 수 있도록 하며, 하나의 마스터 키와 계정을 사용하여 관리 효율성을 높입니다. 사용자는 간단한 입력만으로 SSH 설정을 자동화할 수 있습니다."
notion_id: "1b71bab9-e3f8-8022-849f-ce52c62d729e"
notion_url: "https://www.notion.so/JUMP-TUNNEL-ssh-1b71bab9e3f88022849fce52c62d729e"
---

# JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다

> **Summary**
> SSH 터널링의 복잡성을 해결하기 위해 Jump Tunnel이라는 GUI 프로그램을 개발하였습니다. 이 프로그램은 Bastion Host를 통해 내부망을 보호하고, ProxyJump 기능으로 여러 서버에 간편하게 접근할 수 있도록 하며, 하나의 마스터 키와 계정을 사용하여 관리 효율성을 높입니다. 사용자는 간단한 입력만으로 SSH 설정을 자동화할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e10ce4e7-a037-4d6f-a0e7-d748f14679a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJPCBWD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDUisxulZ9BylB9JDZLnhI6mm1eR8w0ZOXQ3J%2BapRhrUwIgc%2BnOQ0jTQCW2%2BPsB%2BnVyhUK5Y5y7o5y9valeavuqKB8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHEUyexl1H%2BnHqQPbircAzwmT10%2B4iC%2FFpY1U5Eu7NF1iL86bAK5FSZk4xPMSZGTRTkSEBWnPtxnt4Tl7%2FU6AIFkggYcJD0XZZoNyfFUsU4WaKTD4SRsX94RVbYPZlb1pZvznvZipvuFfFty0pVUWF6DCgrW07lqPJiD4QLrlmd1ly9E6%2FNea8ShiX1wO29JrSsv9630mx2hxqjN7DZSTpP%2BXjqcdPJIl418qExHu7HrrlLz08g%2B%2FZE%2BNV9neY%2FaN7%2B%2BDUn1xN8zArtQagkxiItd44t%2Fctm4C3Dl2P0ofmzls7YmXdX8v2uPkxTJHyc82cjMjMBh2ztmpf9c1x76Cyx9llvXRwFrwY6wPLszD2UX%2BSWC9Noqa%2BwoPQmwxpNc93TjgpqX4ghe%2BYGWZHRZwpPhpaQmL9sWQgYvUpQYFZycfUM5UfV9gZSgQ5o%2F%2Bv6u2h6TH6EI1a9RsDO1kgVaPFjdjKMLJ5TTVxsMvPnXjzPYCpihjCtbqCDTR2xfZXgkaQQJuPhuSB31mHQHztUfrvpiBtxUqZP5SZJtIEAqFqKFawx3yd3%2FCMKIBpcyA2jA9EHKnt2IwwHJ8BkdcJsINnTJ5BQZ%2B%2FB4UD%2F5WS5OVlliuCR6VszVZEM7tgvjvVsAGPESsHk2YmxZ36jIMN7Oh8QGOqUBz6bdaWeOtE5nhX1f1Cea%2FNzbvaeWuD7wMg%2FwUVTIpr6sGEDXEsuaNcdUYa66C%2BhlYORhHoqF8VlacTCNO4dMeEDAop9ARgERPo9EmrjIzb6WsadsaElYMQF9o1n0cxMGw543nHuMEZhD0us8darWcHfyX9Ql80DGML%2BKiW6NYWTIY5y0ujM5ZoNpECM03lbkQ05PdsBE3xCsDz%2FcxIzs3lkeRrlK&X-Amz-Signature=a4e6d91c5389df01ce6e55c5997c6a3e4a2d0e091e5787dbeed4afdac7cb5ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://github.com/Cybecho/JumpTunnel](https://github.com/Cybecho/JumpTunnel)

# 4.5

# o1

# Grok3



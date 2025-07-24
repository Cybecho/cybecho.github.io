---
title: "NAS & 옵시디언(도커)"
date: 2024-07-04T11:30:00.000Z
draft: false
tags: ["ubuntu", "Docker", "obsidian"]
series: ["Let's Homelab!"]
description: "옵시디언을 도커와 함께 설치하고 동기화하는 방법에 대한 안내가 포함되어 있으며, 외부 접속을 위해 포트포워딩이나 역방향 프록시 설정이 필요하다는 주의사항이 있습니다. 플러그인 동기화를 위해 숨겨진 디렉토리인 obsidian도 함께 동기화해야 합니다."
notion_id: "4d542bc3-6006-4b0f-80b1-1738bcb274b0"
notion_url: "https://www.notion.so/NAS-4d542bc360064b0f80b11738bcb274b0"
---

# NAS & 옵시디언(도커)

> **Summary**
> 옵시디언을 도커와 함께 설치하고 동기화하는 방법에 대한 안내가 포함되어 있으며, 외부 접속을 위해 포트포워딩이나 역방향 프록시 설정이 필요하다는 주의사항이 있습니다. 플러그인 동기화를 위해 숨겨진 디렉토리인 obsidian도 함께 동기화해야 합니다.

---


![Image](https://obsidian.md/images/2023-06-logo.png)

# Web 버전

[https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/](https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/)

# 로컬 버전

> 💡 **주의!) Self-hosted LiveSync를 외부접속이 가능하도록 하려면, **

[https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/)

# 옵시디언 웹 배포

[https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/](https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/)

# 플러그인도 동기화하기

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a007749a-9a71-4c46-8470-602034fc382d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFPQFLY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDPUrBalLfmyCBJmXWwYN8AXNTwHu5G90YgJfF%2BnfdZnAiEA9T2ckX2uPK5cClHXJxQdcRsdH1w3wiR7Wn%2F4bjrxH9wq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDvnguR65duAX%2B8BEyrcA6RzR4%2Bh6QQaZdJfBTW%2FS1IuIVx4cDArpzzvwLenncnsN5g40M%2F7UsvwePCNNY4gE1xSC6dntg6Vfbd3n3p7arXxPFoJSDvrwP%2BLB0VLB1rRv9x6TIFWBdypt5fT%2BkKpRoUp4K4PDUzP6dBBaNtxakbl2McczWJFF3Mkfhb%2F%2BWurXUGqmklj%2F%2Fop9TZCUkdkwRRAAA%2BKyydP7eAL3iZ7%2F%2F381zPVZjyVf31LLtpk4HAU4L%2FOKIavhngR%2BOk0EtoyFrj6AmmbevL2EQdHXNmWqkDM%2FhjbOMI8k%2BkGrI7n%2FeMZgJVGYm9brgdvo9xkOWWSo%2BwDdBbWkXVv0TFpIupejb0hb2wk0T%2B3ZtuP5bMobK1hg4gjR2Y%2BPSUT7yK1mJRHphCz2tvo9crfanpw%2FmDBLpPPu14U958cfp6HqEhvaaL0BFUgI%2FHCQpRrinX6J6tVStreZfFvFl%2Bv1v7tS8ZEKcpMY5VC8ucz5CnS25y1on25kWiGy1M%2FgoAfmtDGW4Fbz%2FJhY0dfQTRINND3MOkzLNeJciXbFveeUSN4V84OT1jgheZAnSMqOKVBKWvhCE%2BFxIrKq%2BzaA4Uf31tI%2BGPLZhlVFvHNz2bKUAEwb0KKyLmLWI1H5G%2BkbcVQDxzuMMbOh8QGOqUB2D2nnxzNRsfXFrELoDnwDhkO6jRLCTcqI7QMDmu5ZaMhFQeZ5DZ02GTIbc9diWOffYyejoHbcTb47bPwb2rMzv9ba7QT%2FtcJEZi6enjQ5SnzpNb50mdvjW3gMCcBIzNLVoZph710%2Be%2FJRqPbm%2BNDiT34bC5LX8KRN1Tu3W%2FVSzRi1y%2B7iwKpfm%2FdmCQw%2Fl8bMC6igiuAu18s8KJtyqaYX0AGxafk&X-Amz-Signature=26a8452ee9a8ddcf42db358393582d802313057fdb18b5c0a8cda5ff8812ba10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f4b578d-a6c2-4704-a355-6bb8a8fb8093/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFPQFLY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDPUrBalLfmyCBJmXWwYN8AXNTwHu5G90YgJfF%2BnfdZnAiEA9T2ckX2uPK5cClHXJxQdcRsdH1w3wiR7Wn%2F4bjrxH9wq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDvnguR65duAX%2B8BEyrcA6RzR4%2Bh6QQaZdJfBTW%2FS1IuIVx4cDArpzzvwLenncnsN5g40M%2F7UsvwePCNNY4gE1xSC6dntg6Vfbd3n3p7arXxPFoJSDvrwP%2BLB0VLB1rRv9x6TIFWBdypt5fT%2BkKpRoUp4K4PDUzP6dBBaNtxakbl2McczWJFF3Mkfhb%2F%2BWurXUGqmklj%2F%2Fop9TZCUkdkwRRAAA%2BKyydP7eAL3iZ7%2F%2F381zPVZjyVf31LLtpk4HAU4L%2FOKIavhngR%2BOk0EtoyFrj6AmmbevL2EQdHXNmWqkDM%2FhjbOMI8k%2BkGrI7n%2FeMZgJVGYm9brgdvo9xkOWWSo%2BwDdBbWkXVv0TFpIupejb0hb2wk0T%2B3ZtuP5bMobK1hg4gjR2Y%2BPSUT7yK1mJRHphCz2tvo9crfanpw%2FmDBLpPPu14U958cfp6HqEhvaaL0BFUgI%2FHCQpRrinX6J6tVStreZfFvFl%2Bv1v7tS8ZEKcpMY5VC8ucz5CnS25y1on25kWiGy1M%2FgoAfmtDGW4Fbz%2FJhY0dfQTRINND3MOkzLNeJciXbFveeUSN4V84OT1jgheZAnSMqOKVBKWvhCE%2BFxIrKq%2BzaA4Uf31tI%2BGPLZhlVFvHNz2bKUAEwb0KKyLmLWI1H5G%2BkbcVQDxzuMMbOh8QGOqUB2D2nnxzNRsfXFrELoDnwDhkO6jRLCTcqI7QMDmu5ZaMhFQeZ5DZ02GTIbc9diWOffYyejoHbcTb47bPwb2rMzv9ba7QT%2FtcJEZi6enjQ5SnzpNb50mdvjW3gMCcBIzNLVoZph710%2Be%2FJRqPbm%2BNDiT34bC5LX8KRN1Tu3W%2FVSzRi1y%2B7iwKpfm%2FdmCQw%2Fl8bMC6igiuAu18s8KJtyqaYX0AGxafk&X-Amz-Signature=29c207531e4250ab4f832f49d5b366b66da14cda315f6eabe4e26055d063625e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

숨겨진 디렉토리인 obsidian도 함께 동기화하면, 플러그인도 정상적으로 동기화된다!


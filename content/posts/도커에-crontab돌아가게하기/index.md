---
title: "도커에 crontab돌아가게하기"
date: 2024-04-20T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["Let's Homelab!"]
description: "crontab보다 celery를 사용하는 것이 더 좋다는 내용과 도커에서 주기적인 작업을 처리하는 방법에 대한 링크가 포함되어 있습니다."
notion_id: "66cfd67a-6ed6-4ead-8cc3-7d7eac85d578"
notion_url: "https://www.notion.so/crontab-66cfd67a6ed64ead8cc37d7eac85d578"
---

# 도커에 crontab돌아가게하기

> **Summary**
> crontab보다 celery를 사용하는 것이 더 좋다는 내용과 도커에서 주기적인 작업을 처리하는 방법에 대한 링크가 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JE2D7L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFBDCCzv21mN2DFIgCG21MMadP%2FXGo46zwGQoNAqm5o3AiAv%2FPqzPaYwLPI6Lsji1XG%2BtFgp20maIea66P3vEQBDpyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM1XTKgnQnuCI195twKtwDVO66IxndxSAATlH3xNws56i7D%2BYkx5oF8Enozg85KHkInmIJvbg6OdMNqC4ufMO%2BdTIltockkoMvIa9nNYIoujO9oS8%2B4AdO7UWv2%2FNTaHxiPEGPmtD6Cfr81TP0ko2NcPUHiaQhFntQ9xyaGI1q5NakBkDdLpGuN4MnKQbQkRTnv%2Bd7Gss0kwCc%2BeBOnvlq2pXyIqoSjlefFGNK1XAPGwi3KWn%2B7dJ5fiMM1LRi9fYFGPKkzL%2Fp3Y0FALfT1sxg%2FZzr3afixWwqRB8EkquMVRtpM9MF14regsNsrvHfHSSSYPc0tcvOqENVcOU4Z8Zfnuzd8Odsiktr05cr3rWEMPp4xYHDtrPk85ftrRtHuFwQFr42KIdv%2BZjTv1J9pUDLSm8vWEY1PN0YFrVMsAp1sWGysLo26M7XZ1JAg2NjBWcfoNU8Czqb28aV2FIBHAayTzl6fXuUYA%2FRImGaC1qHgLkaJCV5PpwXlT6FJplFCqX4vQNsh2qXnZpOYay5xmglNuThUvEYaBmFbE2Kr62nvc1dHUBVhW%2FSkA1OmJ1mnmmN3Tv0Voz9JGlQ68aMmiggvlsZt9Qrb%2FOd1T141CNsNV7YYtCOpgAd2eezgXRxlsizXbxLxt%2BwY1J0uHEwofaHxAY6pgHFDX1WR8rwnB0SfaOvC%2Bhubh3biESy9ZoUB98Uv212Vj8oJfrBtsGAPAGsQpaCKz6XBrVS6vQ5VSdqFgkb0lTSE14vnXiozFZ7lrZhgHr6lXmqHis8zWExuZJKW9NXIZTslctmcqTCDHxR8h42y8jfDh7Mjl2MWdBwmgwSoT2tA%2FNzs60%2F740OAJh6whl554TPZrzK8PUTS45j9RqdvbIW8SnwV9oD&X-Amz-Signature=bdf8f10f9a40a54937c436485aaacace5689de4a39d57e94c24ee8eceecc489d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/](https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/)


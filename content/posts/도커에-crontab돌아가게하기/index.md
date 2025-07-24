---
title: "도커에 crontab돌아가게하기"
date: 2024-04-20T00:00:00.000Z
draft: false
tags: ["Docker", "ubuntu"]
series: ["Let's Homelab!"]
description: "crontab보다 celery를 사용하는 것이 더 낫다는 내용과 도커에서 주기적인 작업을 처리하는 방법에 대한 링크가 포함되어 있습니다."
notion_id: "66cfd67a-6ed6-4ead-8cc3-7d7eac85d578"
notion_url: "https://www.notion.so/crontab-66cfd67a6ed64ead8cc37d7eac85d578"
---

# 도커에 crontab돌아가게하기

> **Summary**
> crontab보다 celery를 사용하는 것이 더 낫다는 내용과 도커에서 주기적인 작업을 처리하는 방법에 대한 링크가 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJVIY6N%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHhp3Q2R0P6loL0GX74AtoPtMhV7LRqjR%2BMoccHd9%2FHrAiEAsxN50fCz2q1oUdqsgk%2Bu%2FiOq4TdFM2MguMOQenyLKiIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPnfHss%2FfDbLp7t0fSrcA2Zi1PXfT5To7%2F7rnz2T0by1DxCZ9iSaI4iuEPnquotjwxz4XuVu4dq4%2FEGY6n4Q5Aj7CBH8nbSOvqUs6Bap3rjMEbVUJibwoHVEr4DqKfwIKMeaWleG%2FbLGR2Sv%2Fw7%2FjWWQ2DLWu8VGcUcVgAMAi88Biue06y9PJBZEyl%2B0fl7kF3DHCJzn%2BEtcIi6lXTy0wKzKTQDf0dLyz6hdu1VI7r44L%2BpbdV19nA3%2BA8fRXuazpt9gsX8b%2FBS0oIHh77cIDuXlti10GiJRAsSUcQohGeyzAJTSwwCJdVio2iS6%2FYLzQ2sdYqoN2qTeY%2FfN%2B0nZDdJOtNbpm9aWJo81QAli1GBK7QAtB1TGdhgytTyKfIDZKvHgufsp9vldkfc2uano25RNbZDpQH%2FJocz3PYnlR4HYiFd6EoBfy2EpguVURPWrQ2i0wdE%2FgEzQleXWXhmCaQvDsKqaC%2Bdrp9XSi2YWvPCZO1QOVbtUh8XcIXqhfstJ7M8UduovuKkO7EaZTFrO8bwq6sM9WLkkAeDk7ITiogOxlzmWpf9GlJo%2BWCCDsF3JGxF8RuMh2bCdi4Oo2hy1xAGEIN6aag7H1Oe%2BTfh74Jq%2B4AOmJmZZB%2BTQvPcSEAaw%2Fcs5cUyo2wegKKs6MI2biMQGOqUBcD0hwfkklkz%2FCVT3scfQxTJ8%2BGY1WWtpJZnRlaWuryeu6FMdNZVj2O96vmcCATJ6zqkWUROn1iPoqtrDK2fCs3%2BF1qQbTV71fzqvONkO1Zy4D3IyD3dvLtXB3KL6hJoJLlSAak6io2vqN5C8n1eDYA9V5x5DA8atOd8LJpdFqDsA13z%2FqaYWpOtunAhIEAd2d91evL1qlifEDF73dFXaBDE7xVJT&X-Amz-Signature=e42da6f0edf1be91222c8099d5fb96a90f6c99ffbff20e0753f7e6709c334aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/](https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/)


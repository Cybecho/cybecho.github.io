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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c84ffdfa-ad3c-40ca-8228-2e96fec1f73e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEYYG2A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBnm5eI31Wte%2Be9Jp3r4LhF34bMek8IStaLpRc6qpoyjAiBQlEUR1zfNFDEQ2jcC%2BvPBrUYuYq1j68D%2FMFEI%2Fkve3yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMEEl0%2Fetm0Zgjbm2wKtwDyDB4Vs4DPmiGQquPpBK5Q2XIXOyns3sv%2BIm3Mjbfr4END5rp9oNzKimLUeD8pjnBwY01r0dEjyysRJeVJFUUpZEvVzu7fUV2AsTxOzuxhmg1JIbiGmZ75fNGisiE67tuwtiSzAhR1kF9KPNNSsJC7sWZSGcW0zeyD5Hb8q642CjZzI84RJoRWCjP%2FO%2B%2F1gUZ1Gz0%2BfS5htg5Dy33fkquka6Ql5%2Ftdxqt44BdCA2Bv82NBOQBoGTDM%2F9uZSq60wdsIA%2BeYDXHjoGMBq5r3yXswAQFNPfD3bQzQsDWJADldPfZPdAP%2FZoXlasYBh7E0eOMmoRuP85QQQWzLusW5ktnkHWt6WhTyAUkAzuS0FX2yLKGLH6I%2FTvDEYEF1wVxJ0%2BvbV7ReYiavm%2BfxDhWj00d3aDQPti1uTc6yWLdDMWH9rdDRCe1K6S9dL5zKbLBqgG%2F5I01ryyOO5htlQszy9wrrLcgDbkpkazmj0mFrpR5POiIVsq3QLKrKi9QdYiPpmjEKsIo6s8rNdQnHb7yVV%2BVXXq852m2xX8gkzO3cz5qgWhvd6rUTXeF3J%2BKbwdUZClH6mqVWJ7XiazSR5gufPjWUA8lKmlZ2jOnj9h1ECHhN1bm2APXbZO7bruR1EswkNCHxAY6pgFlrcaBxRCV%2FTdAD0jwoyvUdaxemLZ6n%2FToRKokh3pB6am6x4wtkn9Xi77%2FaCL3%2F0AFiHqp2tll2pklgEAhWBeO7skr0cbEnqd43UQ4pnq7FkvmmtmwL6EOeuAHiN47QTtr1d2WTv8P%2Bp9d2f0kktm7ApdCS%2BFORldtAol1N78%2BE%2BEY1f8G4px5s%2FubMqVwTrys90kZrcbK3uIMK16dx1D8WYQiVfFg&X-Amz-Signature=9437576d9261c104783188ca2cfff2a0d4b97160055cdeab39a5876c0c69b755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/](https://blog.raccoony.dev/cron-job-with-uwsgi-in-docker-container/)


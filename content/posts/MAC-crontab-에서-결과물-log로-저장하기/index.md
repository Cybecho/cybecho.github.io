---
title: "MAC crontab 에서 결과물 log로 저장하기"
date: 2023-05-28T00:00:00.000Z
draft: false
tags: ["MAC", "shell"]
series: ["Let's MAC!"]
description: "MAC 터미널에서 crontab을 사용하여 오류 로그를 특정 디렉토리에 저장하는 방법을 설명합니다. 로그를 추가하는 append 모드와 덮어쓰는 overwrite 모드를 사용하는 예시를 제공하며, 덮어쓰기 모드를 사용하면 로그 파일의 크기를 관리할 수 있습니다."
notion_id: "677c16f2-934e-426b-89fa-328f33fa6e58"
notion_url: "https://www.notion.so/MAC-crontab-log-677c16f2934e426b89fa328f33fa6e58"
---

# MAC crontab 에서 결과물 log로 저장하기

> **Summary**
> MAC 터미널에서 crontab을 사용하여 오류 로그를 특정 디렉토리에 저장하는 방법을 설명합니다. 로그를 추가하는 append 모드와 덮어쓰는 overwrite 모드를 사용하는 예시를 제공하며, 덮어쓰기 모드를 사용하면 로그 파일의 크기를 관리할 수 있습니다.

---



MAC 터미널에서 crontab 을 활용해 스케듈링을 하다보니, 오류가 발생했을때 오류 로그가 남지 않아 불편함을 겪었다. 그래서 코드의 결과를 특정 디렉토리에 Log 파일로 저장되도록 다음과 같이 스케듈링을 했는데, 


```shell
10 0 * * * /opt/homebrew/bin/python3.11 /Users/cybecho/SBU/Auto_Malltail/Mac/Auto_Master.py >> /Users/cybecho/SBU/Auto_Malltail/data/log/mac_cron_output.log 2>&1
```

위 명령어에서 `**>>**`는 append 모드로 로그를 추가하는 것을 의미합니다. 이렇게 하시면 새로운 로그가 기존 로그를 덮어쓰지 않고 추가되어 일주일쯤 자동화를 돌렸을때쯔음, 텍스트 파일로만 이루어진 로그파일이 10mb가 넘는 사태가 벌어졌다. 다음 문제는 단순히 append모드 즉 기존 로그에 새 로그를 추가하는 방식으로 작동하기때문에 그렇고, overwrite 모드인 `>` 를 사용하면 단순하게 해결된다.


```shell
10 0 * * * /opt/homebrew/bin/python3.11 /Users/cybecho/SBU/Auto_Malltail/Mac/Auto_Master.py > /Users/cybecho/SBU/Auto_Malltail/data/log/mac_cron_output.log 2>&1
```


이제 crontab 이 작동할때마다 덮어쓰는것을 확인할 수 있습니다.


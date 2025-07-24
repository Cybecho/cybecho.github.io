---
title: "갑자기 exe 파일 실행 안될때"
date: 2024-04-29T01:42:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 "
notion_id: "9f0333b7-c253-4bb9-b40a-3dbd8ee615d5"
notion_url: "https://www.notion.so/exe-9f0333b7c2534bb9b40a3dbd8ee615d5"
---

# 갑자기 exe 파일 실행 안될때

> **Summary**
> 비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/523cb8fd-70e6-4120-aba6-a831a254dd5f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7N7G7H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2F2xKa0pu2PB%2BrBacjPWnDUAfabGSahAeLbQAtexaZTAIhAI%2BKezfz1w3gfbuB%2BRo%2FfULcRqjdAWeAMMjssHHHUedZKv8DCCkQABoMNjM3NDIzMTgzODA1Igzd8ck6i3%2FdUjKzrSUq3AOAhM8mgSOctOvTHZnr33eBzMAnyqF4qVA0QlyZkpZwZqEUE9aT9spBtNbm3iFizyyJp7naodFmDLmBBQmEKlsFD%2BLEzPtlM6%2Bbhbm2XwJMV5sFb%2Fr2JXfjdmCTwWRVSQRtNW7uUCdyWLrIgF5eTpI0v%2FN%2Fl3gV%2BtVLbFqiDMJxunriCpPdALJyMpyKadp5J73l2jC2%2FU%2FSOTmXBBQ6c%2F%2FFvUfXIT0zjOWGtEB7GCPF0jL7Z%2B3q10ER4RMmDz6AOepjAA3Jy%2FtmQoTSFw%2Fdj7W2R7QLPHoKoIz%2Fr8Mi9s83RCAld%2Bcs2FnbzCC4eMtndXdjv4RR1aB07lG9R049AiloGkNpTm5GkBp3ulUiO%2FqtEGjTOfcxivaTZO7VwQ7pCu4MDefZrJyqCXI%2B%2BePFe10%2BRfLmvGjXjOjkPZ8A7U%2B5af65JO%2FL%2BpclUJYVwqxLPiaI8ZpcJ3oReZEhwg1sz7rVk4eq16jwfeOj6Bkd1RRk%2FsZbuGwrgL1rM8d%2F7Jjbn4ghNbihSWxlcP4OspZHT6RIfkNX%2Fuzr58wi2mxEZ8p%2F3tRoq8ddahkApDZc1t2dLblD%2FtE7%2Fsjuivo2cwOFidnc6Otee6YOe5YgVwRaagiiR314CU2pElQ86p4h8jCVz4fEBjqkAUwYS4JQP7rUpn1xg8Evsvxp4CYCa5f1KuixVarkN6wbsR3RP4GHB43CVeRlxGWyYWgeYxd5xwRfMSQZ3JcyDfzbQMmh9FClBkQGYp%2Bq1VZpMj2rt4hhyh9OamU%2BGzwlbJKmz1rK3F0RliH6OPRnTMl4M4rI1jHxFlM9VFMre7cn9kr3LSufwqVLWx13Ep8uGsYigWDed%2FSTv4sK50YeUcj%2FprtQ&X-Amz-Signature=d7d5b43b1199a53245dec0b4f13cb8dc27d41796804a3093098bb962bb9f0438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

몬헌 모드질을 좀 하다가… 시스템파일을 건드린것같다

갑자기 비주얼 스튜디오로 빌드한 프로그램이 실행되질 않어~


파워쉘에서 다음 명령어 실행

```latex
sfc /scannow
```

그리고 재부팅하면 해결됨


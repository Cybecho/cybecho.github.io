---
title: "tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["개발환경"]
description: "키보드의 키 맵핑을 변경하는 방법에 대한 안내로, Scancode Map 레지스트리 변경과 관련된 링크와 유료 및 무료 키보드 입력 프로그램을 소개합니다."
notion_id: "769bc582-1e7c-4c1b-b2d7-d6754b7fe6b5"
notion_url: "https://www.notion.so/tex-shinobi-769bc5821e7c4c1bb2d7d6754b7fe6b5"
---

# tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기

> **Summary**
> 키보드의 키 맵핑을 변경하는 방법에 대한 안내로, Scancode Map 레지스트리 변경과 관련된 링크와 유료 및 무료 키보드 입력 프로그램을 소개합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9fcb4229-6e6e-402a-8347-4d01b0dfc5b9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWK2NYNG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFg5LUIhU%2BW9BE5mS8Atz45iIMIJxP4quXjT4QhicFxYAiBcqK2KblcRLr3DvvmhA5FzWjAbgtQId4qGjcywEZ9niir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT08rPkV%2FgZSU3JusKtwDqKuolOOtS1t%2B38%2BM6u9telwrRsJTlp1vdwfyuZsHoN%2B4Ddisxek7%2FQFJA%2F4mLlOo8BBsJBd%2FfzKFHM%2BO%2FWvk6lmeMIn84%2B9U6xKh3t2WIjizo6kS%2B%2BFNzG9o907B8DNYQnlFW1TN3GnPFInsVyDaG6eIla7RWRhg%2BIlTAYnYxw5PTEohZ97EBZ1NLfJODNeMwNdOT6WJFQg0rLhlL2Hrm7GhdrcOvAUTkpEWoVANY0ZH1D6fLvCh4GQqA%2Fbn8PM7VdvybYmfe9u499QSjEf8SLt1MxmHQt%2FWnAB2aKlsrZCAjWTqpwhdAuQIdTGFVy89nUJkk8hecdizkoG18kTtd6lNW1RGSl42YtiGv5ClZJ59OLLr0w4BtniJ026XXVBClVvUixuPYjGYOX6ZSMvqn3G6rL1rktRrwh%2FqgUYncFM0mVoBV0zstZTn19gkPFHK8oSvDOmM4b1%2FpcxnJ9K7EfoeQ0qt%2FFiZ7lZS6eTX8Egzp%2BsVYMlp1P0h0RCFvZW64jr2NGCOQF%2F3VXdx%2FU6i%2FP2orhE9WKdpwWr840444oiG959%2FeD4pey4TW3W1OOEeRiuusdLA7gtEcQb1HRhxcFrK4jue08UZsC9a%2Fl8Y2bjnFNt9gyzZweyVzrow5puIxAY6pgHNTV1X0INqm8jvGooBjk3oVnr9m4w1I5bItZULPaJDgLa33LuSFHnEA9EuS7q%2FzI7E6sMbWHGkmuBUd8SZc22HGrdNhMRRVtqkJhpaXQJvRl46Kq2DvYdz0dOcDzzNE2TPA4GGJnRnmLMp5AAO6dnbqjnWPpho2lHpfvlpeD54ZyL7Z%2F2RUBwobog5o4BkAVUeK3vEmYNHwJMx%2FMELcD11c58dZGX3&X-Amz-Signature=6f2cc9d1f6454544ae485e834e5cc15c4124291dd14d6c9661a1b66a9e576b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWK2NYNG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFg5LUIhU%2BW9BE5mS8Atz45iIMIJxP4quXjT4QhicFxYAiBcqK2KblcRLr3DvvmhA5FzWjAbgtQId4qGjcywEZ9niir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT08rPkV%2FgZSU3JusKtwDqKuolOOtS1t%2B38%2BM6u9telwrRsJTlp1vdwfyuZsHoN%2B4Ddisxek7%2FQFJA%2F4mLlOo8BBsJBd%2FfzKFHM%2BO%2FWvk6lmeMIn84%2B9U6xKh3t2WIjizo6kS%2B%2BFNzG9o907B8DNYQnlFW1TN3GnPFInsVyDaG6eIla7RWRhg%2BIlTAYnYxw5PTEohZ97EBZ1NLfJODNeMwNdOT6WJFQg0rLhlL2Hrm7GhdrcOvAUTkpEWoVANY0ZH1D6fLvCh4GQqA%2Fbn8PM7VdvybYmfe9u499QSjEf8SLt1MxmHQt%2FWnAB2aKlsrZCAjWTqpwhdAuQIdTGFVy89nUJkk8hecdizkoG18kTtd6lNW1RGSl42YtiGv5ClZJ59OLLr0w4BtniJ026XXVBClVvUixuPYjGYOX6ZSMvqn3G6rL1rktRrwh%2FqgUYncFM0mVoBV0zstZTn19gkPFHK8oSvDOmM4b1%2FpcxnJ9K7EfoeQ0qt%2FFiZ7lZS6eTX8Egzp%2BsVYMlp1P0h0RCFvZW64jr2NGCOQF%2F3VXdx%2FU6i%2FP2orhE9WKdpwWr840444oiG959%2FeD4pey4TW3W1OOEeRiuusdLA7gtEcQb1HRhxcFrK4jue08UZsC9a%2Fl8Y2bjnFNt9gyzZweyVzrow5puIxAY6pgHNTV1X0INqm8jvGooBjk3oVnr9m4w1I5bItZULPaJDgLa33LuSFHnEA9EuS7q%2FzI7E6sMbWHGkmuBUd8SZc22HGrdNhMRRVtqkJhpaXQJvRl46Kq2DvYdz0dOcDzzNE2TPA4GGJnRnmLMp5AAO6dnbqjnWPpho2lHpfvlpeD54ZyL7Z%2F2RUBwobog5o4BkAVUeK3vEmYNHwJMx%2FMELcD11c58dZGX3&X-Amz-Signature=a49020894e9a5f8fa06687cccf9673d925c079c90e32b6eb99bf749c4a53fb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🔗 [https://gigglehd.com/gg/soft/12015825](https://gigglehd.com/gg/soft/12015825)

🔗 [https://www.passmark.com/products/keytest/](https://www.passmark.com/products/keytest/)

🔗 [https://www.majorgeeks.com/files/details/switch_hitter.html](https://www.majorgeeks.com/files/details/switch_hitter.html)


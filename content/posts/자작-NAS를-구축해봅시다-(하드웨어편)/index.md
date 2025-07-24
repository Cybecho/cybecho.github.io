---
title: "자작 NAS를 구축해봅시다 (하드웨어편)"
date: 2024-06-12T14:24:00.000Z
draft: false
tags: ["ubuntu", "RaspberryPI"]
series: ["Let's Homelab!"]
description: "자작 NAS 구축을 위한 하드웨어 추천, 운영 체제 선택, 저전력 CPU와 RAID 카드의 중요성, 그리고 HDD 확장 및 Docker 사용에 대한 정보가 포함되어 있습니다. 다양한 하드웨어 호환성 체크와 보안 관련 조언도 제공됩니다."
notion_id: "f270ca5c-aee8-4ea1-a6bc-20f5303e5c96"
notion_url: "https://www.notion.so/NAS-f270ca5caee84ea1a6bc20f5303e5c96"
---

# 자작 NAS를 구축해봅시다 (하드웨어편)

> **Summary**
> 자작 NAS 구축을 위한 하드웨어 추천, 운영 체제 선택, 저전력 CPU와 RAID 카드의 중요성, 그리고 HDD 확장 및 Docker 사용에 대한 정보가 포함되어 있습니다. 다양한 하드웨어 호환성 체크와 보안 관련 조언도 제공됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/51a4e462-7b17-4a34-a45a-b467ee19dbda/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=c941fe7f68a9409a37cdf9e33334fafa2f93564c6e82d41ed0c747faa1d5294d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# NAS로 할 수 있는것들

[도커로 개발환경 구축하기](https://www.notion.so/36137e082f6a4281b300e4020ed659f4) 

[https://youtu.be/Q5POuMHxW-0?si=Y4OWnkeI8bLL8Dww](https://youtu.be/Q5POuMHxW-0?si=Y4OWnkeI8bLL8Dww)

[http://www.studydev.com/my-story/it/hp-microserver-gen8-20개월-nas-사용-후기/](http://www.studydev.com/my-story/it/hp-microserver-gen8-20개월-nas-사용-후기/)

[https://anflddy.tistory.com/10](https://anflddy.tistory.com/10)

# 그냥 남는컴 NAS로..

[https://youtu.be/l_0uronfd9o?si=hkDNx1nC4ofvNR_R](https://youtu.be/l_0uronfd9o?si=hkDNx1nC4ofvNR_R)

[https://youtu.be/AH1S8KdpAsk?si=_OlNwOqUNAmN0aGL](https://youtu.be/AH1S8KdpAsk?si=_OlNwOqUNAmN0aGL)

[https://youtu.be/FU5n6JBZbd0?si=g9rJaNNa982r3Bfh](https://youtu.be/FU5n6JBZbd0?si=g9rJaNNa982r3Bfh)

[https://youtu.be/kWg4Xn6Qwf4?si=XAhAhjW0-QYf5FQn](https://youtu.be/kWg4Xn6Qwf4?si=XAhAhjW0-QYf5FQn)

# 그냥 남는컴 NAS로..

[https://ryostyle.tistory.com/411](https://ryostyle.tistory.com/411)

[https://ryostyle.tistory.com/463](https://ryostyle.tistory.com/463)

[https://ryostyle.tistory.com/466](https://ryostyle.tistory.com/466)

# 하드웨어 추천…

[https://svrforum.com/hardware/573786](https://svrforum.com/hardware/573786)

[https://blog.naver.com/dummy_98/222967207789](https://blog.naver.com/dummy_98/222967207789)

# 여기서 하드웨어 호환성 체크해보세요

[https://pcpartpicker.com/list/](https://pcpartpicker.com/list/)

# 보안 관련

- 헤놀 2년차입니다. ssh 닫고 해외 접속만 차단해도 일반 사용자들은 왠만한건 거의 다 막아요. 아무 문제없이 잘 사용중입니다.
# 마이크로 서버도 쿨한데?

<details>
<summary>근데 이거 시끄러운듯</summary>

- n40l
- n54l
- n36l
- [마이크로서버 gen8](https://blog.naver.com/dna2073/221405627061)
- 마이크로서버 gen10
- [마이크로서버 gen10plus](https://www.clien.net/service/board/use/15382787)
<details>
<summary>**차이점 설명**</summary>

- CPU:
  - N36L: AMD Athlon II Neo N36L (듀얼 코어, 1.3 GHz)
  - N40L: AMD Athlon II Neo N40L (듀얼 코어, 1.5 GHz)
  - N54L: AMD Turion II Neo N54L (듀얼 코어, 2.2 GHz)
- 메모리:
  - N36L, N40L: 최대 8GB DDR3 지원
  - N54L: 최대 16GB DDR3 지원
- 저장 장치:
  - N36L, N40L: SATA 하드 드라이브 4개 장착 가능 (최대 8TB)
  - N54L: SATA 하드 드라이브 4개 장착 가능 (최대 16TB)
- 전력 소모:
  - N36L: 최대 150W
  - N40L: 최대 150W
  - N54L: 최대 200W
</details>

[https://www.2cpu.co.kr/bbs/board.php?bo_table=QnA&wr_id=407303https://www.2cpu.co.kr/bbs/board.php?bo_table=QnA&wr_id=407303](https://www.2cpu.co.kr/bbs/board.php?bo_table=QnA&wr_id=407303https://www.2cpu.co.kr/bbs/board.php?bo_table=QnA&wr_id=407303)

[https://www.reddit.com/r/DataHoarder/comments/142odpm/mac_mini_as_a_nas_solution/https://www.reddit.com/r/DataHoarder/comments/142odpm/mac_mini_as_a_nas_solution/](https://www.reddit.com/r/DataHoarder/comments/142odpm/mac_mini_as_a_nas_solution/https://www.reddit.com/r/DataHoarder/comments/142odpm/mac_mini_as_a_nas_solution/)

</details>


---


# 참고 자작 스펙

# 신경써야할것들

# OS

- 헤놀로지
- OpenMediaVault 
- TurueNAS 
- proxmox 에 헤놀로지 올리기
# 케이스

> 💡 **케이스 검색 엔진**
> [https://caseend.com/](https://caseend.com/)
>
> [https://svrforum.com/nascase](https://svrforum.com/nascase)
>
> ---
>
> [https://svrforum.com/nas/630412](https://svrforum.com/nas/630412)
>
>

> 💡 **코인 채굴용 (이정도까진 필요 없을듯)**
> [https://smartstore.naver.com/gstargear/products/5678917187](https://smartstore.naver.com/gstargear/products/5678917187)
>
>

> 💡 **일반 케이스**
> [https://prod.danawa.com/info/?pcode=3471240](https://prod.danawa.com/info/?pcode=3471240) (하드베이 많음)
>
> [https://prod.danawa.com/info/?pcode=14609939](https://prod.danawa.com/info/?pcode=14609939)
>
> [https://prod.danawa.com/info/?pcode=4049794](https://prod.danawa.com/info/?pcode=4049794) (현재 내 케이스)
>
> [https://prod.danawa.com/info/?pcode=21496067&cate=112775](https://prod.danawa.com/info/?pcode=21496067&cate=112775)
>
> [https://prod.danawa.com/info/?pcode=15894449&cate=112775](https://prod.danawa.com/info/?pcode=15894449&cate=112775) (하드베이 많음)
>
> [https://danawa.page.link/W29EeRHM5Yt4E2T69](https://danawa.page.link/W29EeRHM5Yt4E2T69)
>
> https://danawa.page.link/j5neji5j6SVdQS8R7
>
>

> 💡 **NAS전용 ITX 케이스**
> [https://ko.aliexpress.com/item/33038670915.html?src=google&src=google&albch=rmkt&acnt=576-373-4425&albcp=20756435260&albag=&slnk=&trgt=&plac=&crea=&netw=x&device=c&mtctp=&albbt=Google_7_rmkt&gad_source=1&gclid=CjwKCAjw65-zBhBkEiwAjrqRMHGqsOv-6rz1hq4k0eD8kHyTMejn02IaFisY6gl2z35JxhldXBH5ihoC6U8QAvD_BwE&aff_fcid=5f51f0c849044a33971350db718bbbba-1718157009040-05078-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=5f51f0c849044a33971350db718bbbba-1718157009040-05078-UneMJZVf&terminal_id=f5c6bcebe5314e6d920aa20c72cdd164&afSmartRedirect=y](https://ko.aliexpress.com/item/33038670915.html?src=google&src=google&albch=rmkt&acnt=576-373-4425&albcp=20756435260&albag=&slnk=&trgt=&plac=&crea=&netw=x&device=c&mtctp=&albbt=Google_7_rmkt&gad_source=1&gclid=CjwKCAjw65-zBhBkEiwAjrqRMHGqsOv-6rz1hq4k0eD8kHyTMejn02IaFisY6gl2z35JxhldXBH5ihoC6U8QAvD_BwE&aff_fcid=5f51f0c849044a33971350db718bbbba-1718157009040-05078-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=5f51f0c849044a33971350db718bbbba-1718157009040-05078-UneMJZVf&terminal_id=f5c6bcebe5314e6d920aa20c72cdd164&afSmartRedirect=y)
>
> [**8베이 28*30*23**](https://ko.aliexpress.com/item/1005006655291663.html?spm=a2g0o.productlist.main.5.44625444pbIpZT&algo_pvid=4e871d45-23c9-4c68-883a-5fd0b2f91626&algo_exp_id=4e871d45-23c9-4c68-883a-5fd0b2f91626-2&pdp_npi=4%40dis!KRW!187003!130902!!!958.80!671.16!%4021010c9c17181571449856238ee0b0!12000037936166410!sea!KR!4285360891!&curPageLogUid=roazOeGSl85P&utparam-url=scene%3Asearch%7Cquery_from%3A)** ITX or M-ATX 마더보드 **`**SFX 파워**`** + **`**ATX 파워**`** **[**video1**](https://www.youtube.com/watch?v=fjqKEmNot_M)
>
> [8베이  23*26*29](https://ko.aliexpress.com/item/1005006533645170.html?spm=a2g0o.productlist.main.3.44625444p6z7m1&algo_pvid=2d534e69-5189-49c7-97ca-ac7cc6aa36ca&algo_exp_id=2d534e69-5189-49c7-97ca-ac7cc6aa36ca-1&pdp_npi=4%40dis!KRW!263666!151045!!!1352.75!774.94!%402141069c17181899893821092e1cdc!12000037556191901!sea!KR!4285360891!&curPageLogUid=bljyN0BAdoiR&utparam-url=scene%3Asearch%7Cquery_from%3A) ITX 마더보드
>
> [5베이  22*22*22](https://ko.aliexpress.com/item/1005005029501612.html?spm=a2g0o.productlist.main.1.44625444p6z7m1&algo_pvid=2d534e69-5189-49c7-97ca-ac7cc6aa36ca&algo_exp_id=2d534e69-5189-49c7-97ca-ac7cc6aa36ca-0&pdp_npi=4%40dis!KRW!199405!119802!!!1023.06!614.65!%402141069c17181899893821092e1cdc!12000031389129624!sea!KR!4285360891!&curPageLogUid=GtB2he6tt6Gy&utparam-url=scene%3Asearch%7Cquery_from%3A) ITX M 마더보드
>
> [4베이 18*19*26](https://ko.aliexpress.com/item/1005003635119107.html?spm=a2g0o.productlist.main.13.44625444p6z7m1&algo_pvid=2d534e69-5189-49c7-97ca-ac7cc6aa36ca&algo_exp_id=2d534e69-5189-49c7-97ca-ac7cc6aa36ca-6&pdp_npi=4%40dis!KRW!70810!70810!!!49.98!49.98!%402141069c17181899893821092e1cdc!12000026587023909!sea!KR!4285360891!&curPageLogUid=T1naRecIlk3z&utparam-url=scene%3Asearch%7Cquery_from%3A)  ITX M 마더보드
>
> [4베이 20*26*19](https://ko.aliexpress.com/item/1005001370106988.html?spm=a2g0o.detail.pcDetailBottomMoreOtherSeller.17.6c66En6IEn6Ifx&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.40000.326746.0&scm_id=1007.40000.326746.0&scm-url=1007.40000.326746.0&pvid=831f0a0f-e0b3-49fb-a789-f1369c4bb11c&_t=gps-id%3ApcDetailBottomMoreOtherSeller%2Cscm-url%3A1007.40000.326746.0%2Cpvid%3A831f0a0f-e0b3-49fb-a789-f1369c4bb11c%2Ctpp_buckets%3A668%232846%238116%23951&pdp_npi=4%40dis!KRW!83674!83674!!!59.06!59.06!%402141112417181905646566098eb0e2!12000029396902645!rec!KR!4285360891!&utparam-url=scene%3ApcDetailBottomMoreOtherSeller%7Cquery_from%3A) ITX M 마더보드
>
>

# 메인보드

<details>
<summary>[**H110M DGS (지금 컴)**](https://www.asrock.com/mb/Intel/H110M-DGS/index.kr.asp)** M ATX 최대 램 32GB (6,7세대 지원함)**</summary>

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ff1320e8-1b60-41e1-978e-b1788591ed44/IMG_3856.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVCLLCT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGdoZjzZ05oMg05pkpBs31TkCdMFo8gk3C09CSGWVO54AiEAkNi2vzbaZ2BPCGO3NGaKH0SSxvHFES6UCHmRbPSrtesq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHFXwC2sNf6oJUANeCrcA95Z8TVdAcKkIK%2BbUUiFNtSpFTwEgrA%2F%2FK6VGUzzLtsCWApBioFDc1sYfBRNxXnHfO7GT28HIWmn2t1zVj9sCEIYbn3MCH%2B84IMLARU4xloENZgERrG7fVVqFWfHHn9h1odD%2Fcl%2FFB7BRMYKFMAUTbCAai84iVE72FTQAjXErFaPOgHz2bQXcLov21aV9yEOVca1wiO0lwtqhCyR9n8kiyTIkgwXxSIoQ3hJiUpmHXZhMHfjdiJl7ZOpnk1pM%2FPMknJrS4yNRhpaQkGJ1MQsyyjbU%2BnGCWcy9qO%2Bg1%2F%2B3zcBkqFo51kG%2BqZOmlfgGSTSTmx07QAiCma9qYu9G4ksIS8h0KthRwzNRafUJiXJ0PxDDY2uU3SrLN9Bms8zMWfbGM7%2FTIm1W5pSFmYpH39HPojlVBcXAkfSb810qM08Alg3Dc2YDspp4U1dw4K70IrfrZyxtU4%2Fk3J9wh6ZqfVgnsvwPaNgoTC6wyD3GFpJDV2mPCyL7rA2DuvGtasmOzjLgua5a7S7hwgW6GS1UlLJOMF4I%2F%2BOqW0Rwcm9skI6l%2B%2BxjS5No%2BdZ23TjLLs6MCEm5amkvOWnswVgyfRGuZwIfgdZLvY3IPkKCANxH4cIpQmmeRZrh273fHRC2yh7MIP2h8QGOqUBVyfsazKSqroyel3uggxNv2m3Fm3fyiCNMs%2FMNdO3XXdvF6njKa%2ByCM8Glx0Qr2yJItPskce53kbkAkpiPV7mfeIbu8RU3zyCMVEL8Oal6Vc%2BNkASKu2ULhj3ZcasC%2FbvEEP5eDYbbAhRLzCi1SVnPzJdW8LC8AXW08qLWG4pqJwBk01%2B8A4qyYI%2BuughhNIHf6e5ZEHCfhOBGsqJVaPMLBzshWgz&X-Amz-Signature=571635bbf119fbc1abe73522d202ed560e1188d7e45c280b9495a50d7f83b9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>

# CPU

> 💡 **메인보드에 맞는 CPU는 해당 차트 참고**
> [https://blog.naver.com/PostView.naver?blogId=dykang99&logNo=222606753120](https://blog.naver.com/PostView.naver?blogId=dykang99&logNo=222606753120)
>
>

### INTEL Pentium 시리즈

<details>
<summary>**Intel Pentium **[**G4560 **](https://ko.aliexpress.com/item/1005006700319257.html?spm=a2g0o.productlist.main.11.2ddehrOkhrOkjJ&algo_pvid=4eecfc06-7e14-4c67-96e0-b78760445f8f&algo_exp_id=4eecfc06-7e14-4c67-96e0-b78760445f8f-5&pdp_npi=4%40dis!KRW!9355!9355!!!48.14!48.14!%402140c5a717182930386523085e253c!12000038043422859!sea!KR!4285360891!&curPageLogUid=oDgvELHX1eeR&utparam-url=scene%3Asearch%7Cquery_from%3A)**(b250m 호환) (이거 고트인듯)**</summary>

[https://cafe.naver.com/joonggonara?iframe_url=/ArticleRead.nhn?clubid=10050146&articleid=1060998210&art=aW50ZXJuYWwtY2FmZS13ZWItc2VjdGlvbi1zZWFyY2gtbGlzdA.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjEwNjA5OTgyMTAsImlzc3VlZEF0IjoxNzE4MjAxNjY1ODM2LCJjYWZlSWQiOjEwMDUwMTQ2fQ.JW3wY0_V3PqCOodnD0P32HGl2jYToYlKRYEuhaj3Ibg&query=G4560](https://cafe.naver.com/joonggonara?iframe_url=/ArticleRead.nhn?clubid=10050146&articleid=1060998210&art=aW50ZXJuYWwtY2FmZS13ZWItc2VjdGlvbi1zZWFyY2gtbGlzdA.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjEwNjA5OTgyMTAsImlzc3VlZEF0IjoxNzE4MjAxNjY1ODM2LCJjYWZlSWQiOjEwMDUwMTQ2fQ.JW3wY0_V3PqCOodnD0P32HGl2jYToYlKRYEuhaj3Ibg&query=G4560) 2만

[https://cafe.naver.com/joonggonara?iframe_url=/ArticleRead.nhn?clubid=10050146&articleid=1058788408&art=aW50ZXJuYWwtY2FmZS13ZWItc2VjdGlvbi1zZWFyY2gtbGlzdA.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjEwNTg3ODg0MDgsImlzc3VlZEF0IjoxNzE4MjAxNjY1ODM2LCJjYWZlSWQiOjEwMDUwMTQ2fQ.brku9mjoC8k3RpHBVy1NzH-xf-YZ6rPFAO2226EbGKc&query=G4560](https://cafe.naver.com/joonggonara?iframe_url=/ArticleRead.nhn?clubid=10050146&articleid=1058788408&art=aW50ZXJuYWwtY2FmZS13ZWItc2VjdGlvbi1zZWFyY2gtbGlzdA.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjEwNTg3ODg0MDgsImlzc3VlZEF0IjoxNzE4MjAxNjY1ODM2LCJjYWZlSWQiOjEwMDUwMTQ2fQ.brku9mjoC8k3RpHBVy1NzH-xf-YZ6rPFAO2226EbGKc&query=G4560) 2만


</details>

# CPU Cooler 

> [공랭 , 높이 70이하 , 120mm](https://prod.danawa.com/list/?cate=112798)

[https://quasarzone.com/bbs/qf_cool/views/296054](https://quasarzone.com/bbs/qf_cool/views/296054) NAS용 쿨러 추천

> 가성비 공랭쿨러 최대 높이 150mm

- [https://prod.danawa.com/info/?pcode=17221538](https://prod.danawa.com/info/?pcode=17221538) **(이거로 가자) 150mm**
- [https://prod.danawa.com/info/?pcode=16209023&cate=11336857](https://prod.danawa.com/info/?pcode=16209023&cate=11336857) 148 mm
# Power

<details>
<summary>[**Antec VP500P V2 A-PFC**](https://prod.danawa.com/info/?pcode=2529647)** **(지금 내 파워) ATX 규격임…</summary>

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cca0dd52-0ed2-4f2b-8972-0666b8c6ff4d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4VHVZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCfQn18aqWb6K32nuMRyycFuoBcghVGydf1vgkRZCHEbQIhANeReiWCd3dgfAhM2%2Bu7%2FJKTbpqNzOLwOM1MiCYhxoK9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwZK4HgG%2BZSgVBMHQEq3AP6yr3yUC7X5GVmva7qPnlMu5d0IwLbB8oK3VTbDyS7utWePTAPI3pjV5o5ND%2FwsBbEslE237Z48Pdm%2B%2FQGLn8LMprtz19uDTOj8zFpSc1Y%2BzIsmRqibuhJHmaC6bstm4N8W%2Bgb4V0dqG1YD53bUMqcHKjddDuJc0rH3nFtnI2523vp13kedcPrjErFl7w%2FeGou4SGt5UJwARv1%2Flxn5lPa0f%2BzsMOaqfUu60F2r7oJwQGRt43kCm8vPTvZhNoQUmZAqsMB5E56OVLd5KxRH%2B9xP4ThWwavSIlBkJXl2XUvk6k5%2BiPcifW2LtlubtrLChKMarXk%2F%2BrjcCwFeepvBJnv7Nls5vYLQbwySJOv5UinlacbpRkcQ%2FOMsQAs4M8cx1rEHwkWI1fXuiCP2Zmuj1Y%2F%2BhNzlGgG0rdMTf6vA6uw1PjZ%2Bwjqx2HsDKBjQAdi0E0DQHwR%2F5JX37ZZ%2Bc5EtjO3XhbfB0MXP6MVLdwmj4Uu4TC9CY3NhNnI%2B%2F5OjKa46Hqkn3pNRFp6A1m2lKeqSZU7W%2BW3qkHiXfsCQaUlP%2Bpo%2BMp14%2FsuPziTXyg66fbCRjnXuTYVW3FN4p%2Bm%2FkdafHq%2FLHdFmbKQ8a49%2BVHizN2VGT6MyQktqVyVeH4J9DCX9YfEBjqkAQ7f8DGScE8nf4kUZBvvAa4CTfU1ClGHRd%2FxyQYZJM6PUzWpwLYFukwgaBUZ%2FgLG0BljDUC4AuN6mmSStEol%2Bt75xd12Qb9Z0D20CNfTc%2Brcu%2F%2BHVgivZn28ATaUVcMoyvpPxVPQvsCLwcLUp5lhZa3Jyi%2Fy9rSwkg1nBy%2FhqSo2jwzwAVYFKmI4CFSM1kHnzY0KB4iGTjchIBfLwkEVwIwX1iL4&X-Amz-Signature=f09039234d472df6c7e92eb9424b3ecd8bc0559879a186e95684554dc71c3828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4ab8c2e7-a261-40db-8a81-14add2bf2888/IMG_3857.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4VHVZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCfQn18aqWb6K32nuMRyycFuoBcghVGydf1vgkRZCHEbQIhANeReiWCd3dgfAhM2%2Bu7%2FJKTbpqNzOLwOM1MiCYhxoK9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwZK4HgG%2BZSgVBMHQEq3AP6yr3yUC7X5GVmva7qPnlMu5d0IwLbB8oK3VTbDyS7utWePTAPI3pjV5o5ND%2FwsBbEslE237Z48Pdm%2B%2FQGLn8LMprtz19uDTOj8zFpSc1Y%2BzIsmRqibuhJHmaC6bstm4N8W%2Bgb4V0dqG1YD53bUMqcHKjddDuJc0rH3nFtnI2523vp13kedcPrjErFl7w%2FeGou4SGt5UJwARv1%2Flxn5lPa0f%2BzsMOaqfUu60F2r7oJwQGRt43kCm8vPTvZhNoQUmZAqsMB5E56OVLd5KxRH%2B9xP4ThWwavSIlBkJXl2XUvk6k5%2BiPcifW2LtlubtrLChKMarXk%2F%2BrjcCwFeepvBJnv7Nls5vYLQbwySJOv5UinlacbpRkcQ%2FOMsQAs4M8cx1rEHwkWI1fXuiCP2Zmuj1Y%2F%2BhNzlGgG0rdMTf6vA6uw1PjZ%2Bwjqx2HsDKBjQAdi0E0DQHwR%2F5JX37ZZ%2Bc5EtjO3XhbfB0MXP6MVLdwmj4Uu4TC9CY3NhNnI%2B%2F5OjKa46Hqkn3pNRFp6A1m2lKeqSZU7W%2BW3qkHiXfsCQaUlP%2Bpo%2BMp14%2FsuPziTXyg66fbCRjnXuTYVW3FN4p%2Bm%2FkdafHq%2FLHdFmbKQ8a49%2BVHizN2VGT6MyQktqVyVeH4J9DCX9YfEBjqkAQ7f8DGScE8nf4kUZBvvAa4CTfU1ClGHRd%2FxyQYZJM6PUzWpwLYFukwgaBUZ%2FgLG0BljDUC4AuN6mmSStEol%2Bt75xd12Qb9Z0D20CNfTc%2Brcu%2F%2BHVgivZn28ATaUVcMoyvpPxVPQvsCLwcLUp5lhZa3Jyi%2Fy9rSwkg1nBy%2FhqSo2jwzwAVYFKmI4CFSM1kHnzY0KB4iGTjchIBfLwkEVwIwX1iL4&X-Amz-Signature=b2f96096fc9c3d93a3fc72fd3fd349f20175bcc12b8d5ef951626db94afbd5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>

# HDD

```latex
어느정도 데이터를 축적 하시느냐가 중요 합니다.

영상 계열이나 게임 데이터 보존 같이 용량이 큰걸 보존하시고

그에 따른 다운로드 및 업로드 속도도 필요하신 경우라면 용량 크고 안정적인 CMR 작동 방식의

제품으로 레이드 하시는걸 추천드립니다.
```

```latex
WD외장 하드를 직구한 다음. 적출해서 끼우시면 17만원에 8TB로 가능 합니다.
```

# HDD 확장 브라켓

- [좋은듯1](https://ko.aliexpress.com/item/1005006907353405.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.6.4ebbtoChtoChlx&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=b8130075-3b3f-4f85-85fd-3c2a282fc20c&_t=gps-id%3ApcDetailTopMoreOtherSeller%2Cscm-url%3A1007.40050.354490.0%2Cpvid%3Ab8130075-3b3f-4f85-85fd-3c2a282fc20c%2Ctpp_buckets%3A668%232846%238116%232002&isseo=y&pdp_npi=4%40dis!KRW!29347!10574!!!150.43!54.20!%4021410cde17183705304297445ec948!12000038687660619!rec!KR!4285360891!&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A) 146mm (L) x 105mm (W) x ???mm (H) 
- [좋은듯3](https://ko.aliexpress.com/item/1005006241366047.html?spm=a2g0o.detail.pcDetailBottomMoreOtherSeller.35.8987FOMKFOMKbQ&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=7e7160f1-5506-47b6-b6c3-fdaa0b08def2&_t=gps-id%3ApcDetailBottomMoreOtherSeller%2Cscm-url%3A1007.40050.354490.0%2Cpvid%3A7e7160f1-5506-47b6-b6c3-fdaa0b08def2%2Ctpp_buckets%3A668%232846%238116%232002&isseo=y&pdp_npi=4%40dis!KRW!3730!2837!!!2.63!2.00!%402141112117183716403845196ecd96!12000036430884485!rec!KR!4285360891!&utparam-url=scene%3ApcDetailBottomMoreOtherSeller%7Cquery_from%3A) (뒷면부 브라켓)
# Sata Extender Card

- Fujitsu 9211-8i 6Gbps HBA LSI FW:P20 IT Mode ZFS FreeNAS unRAID+2* SFF-8087 SATA From Ebay

고민이 많다

# 도커쓰면 좋음

[https://quasarzone.com/bbs/qb_free/views/8054613](https://quasarzone.com/bbs/qb_free/views/8054613)

[https://m.clien.net/service/board/cm_nas/15196008](https://m.clien.net/service/board/cm_nas/15196008)

[https://www.lainyzine.com/ko/article/how-to-install-and-use-docker-on-your-synology-nas/](https://www.lainyzine.com/ko/article/how-to-install-and-use-docker-on-your-synology-nas/)

# 팩트 추

# 결과물

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/addc5c5e-24a5-4ab8-825d-90e86ae4b376/IMG_2722.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=6405ecac975991e30e1aa59c1be71729c6d189de9c3f1f6e88ba705bd31dc764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/54a2b4f2-de31-4b3b-ba93-615304e81f27/IMG_2724.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=2bc3b09bdc351632e9edcc00845c0ec7daafa0ba47c1ee924adee11b64987c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b26f10ea-8ad1-45d9-87da-5abbc8d7a74b/IMG_2725.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=f01a5c7cdc7daf001c7ab6edf18a102b12e3cdbb9c5e41f79311423548092f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c13032ee-5476-4ce5-b60f-bd6bcc37f5c0/IMG_2726.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=1e84721d24bc840285c9f9dbeac8f42ff3c9c826c07bc6da9f07d717bd319c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6538abe9-16e5-4e53-b167-afad1caeca22/IMG_2727.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=9d6b0f70cea95f81432522e2e36823014e5fb49623c27218e4971b7a81ecddb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/32947f10-8d63-4e35-bed7-2e421b0680ce/IMG_2729.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYLKOFY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCrqFw2K9a%2F%2Fds5%2F8oxQ95UFcqUWpXOEDlt81Aid2iWqAIgYPPr4gO89OFdRWNdt64Tg6w85ImeEone%2FYFl5PsqYzsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJalOX24QYUBVRCHbCrcA82WMovud4xv6CFctXqtTEevAeytynyZ4lr5hrnsgXuRDqvuiPxdG3jNXUlLew1Rez2DMJblo0%2BT%2B1N3CdwRwBysme9wHelZ0U2MeBQOl47UJoLZv9i%2BeM9uVtfuUEPrx40DaNC00Cv5BiSqhiB2QS13Eubec96m2HrFvEgBpA22vQSc5J9B6qTI4yKyY6BrRRQDtnTiEpJ5t7xIASuuctRN3bn2OabzePfyW6xvlJeJVu%2BVC3zwWYTeDE8WzeRshxluFGnFibSMtLZEU6KO9Yw38sgBhrhTZgX%2FpO1XxdLOfiS6GtlsmAoojPLVRjvpjuSlvTbTPCemTfjxU%2FbfyrelPw8UvqfWgteN%2BBv5BFflM%2F8U%2BH1v%2F2Q%2F8HRbMS%2B25R0SXUr88bTBC9hYf9I3LXFwBP9AnXfaCzINcsfCg%2B%2BO3t8FVHTZZmyCAfY%2FlkApZ0H3eEqhskJsciOJmZa%2F68DUi2IDEFEaqSEtYK8bOuZJS%2BNAAyKQ3oFIP67IkLuxomfjC24LRIwROpMYetnciR3wdTfPE1G3FmX07DU%2BEyumWedC6o%2FFbUmrleHuAdSXEzfO3hHfsdDq0Oeo29w%2FLtWU3LQurTo06g2YUcve2EPmhRR6MUyJC3M1%2BQ5%2BMJ31h8QGOqUBr9CxJkCkHc36C5GWcP%2BNNpYudkxdSDhZ1X5c6SBe1j4RcfA3F24KNujXSFj49GputvkMpakVR%2Fa9TdYAQjqO32dSkrNbNl%2F2RZjt0IDc9eYa02VEzYONn1PUoUSuoWmcC2dT8Ct%2BOQ%2Bm%2Br6hHi0H1IoqaYjTDW5EPc%2FivyYpdpM%2BGE25zTbMlw4zqnDy9yovvOKHPV7VmnzpZJQfadILv3KfaHYF&X-Amz-Signature=ce061356815e1b410b59990ac0f7aecd53b3a3300bce1a9522aed89d850503cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


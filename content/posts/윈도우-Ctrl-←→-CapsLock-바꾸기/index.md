---
title: "윈도우 Ctrl ←→ CapsLock 바꾸기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법은 레지스트리 편집기를 사용하여 "
notion_id: "7db001a3-cb42-4800-9f94-40327f19552e"
notion_url: "https://www.notion.so/Ctrl-CapsLock-7db001a3cb4248009f9440327f19552e"
---

# 윈도우 Ctrl ←→ CapsLock 바꾸기

> **Summary**
> 윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법은 레지스트리 편집기를 사용하여 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56RWDGG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFu1JTKYMbREGFwT5z%2FmnuyPbwPhty%2BRED7J86ZEwtjbAiBLmRI0v041KLgh33ikm9%2BrXlF%2BS9sVOp5qjlGGs4giRCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwNlui2JEdG2aHO4WKtwDME04zsqbhTFBNwJx3O6racmqezOaMhCLYi%2BlZ7Xrt3rPTtCYZ35P4p3aqCDV7c9595jtBf%2B8RElCjOwOw2S5QpnwdmfEd1FLCpizJVAe75HwFlHHwOQC98VcZVP7j5ltDx6UlqvO5XQw977W74LraI0wYqxXRl5Y%2FnPkAsIjLZnipQOZiaaDP2l1YS%2B426m0li23fX9dpKsh84Wn7F7%2BOVxYR6wk5tvxQkQNHhawamTyGKDFB2bc7bXJJlQzwlJzs%2BEOkFaeAb%2BRJmIAtqrztI28bk4Y9KvAUXUVwg7ZKpmcUzkwpSPtaL%2FRQ4irVE1rd2KG9zvTv2wIj9q3Prsa4JkDqb1fRIQ%2FRX3CIGIsnyr2VZ0FA21I71zn6ZyAcr6Diy7FPtcGknWE89lHsXdDMk6PFa1pa61RLsuuk3ys6yn7BsvMWc9gJOjDyW7lUNw28qTedjFBVNGAoKIaSjpgJ6FoTITgnTfxhQAdomEBrTErbkmRoBjoufuEQTTRjatiqp3WE%2B3BtGNdmM64aWcHl72gUpsDXVwhvouur54jMBgXtkDMRPlXlUXf2ohsgVxuc8%2BFar6e9uv9DrODZjeQtGbfzm%2BjqB6fpcjD%2BI0IsgmHVWRWUg2MjGvLDYsw2s6HxAY6pgFl2CBzSTOq0OWjwr3odOtNSfuHnI9Do9BSJyffTb0nJy6ymdNYFVi0R5sWwNAeHcyrxKMMhm9k5940MM9H5YNYFnPahqB%2BKiFGc7oFM%2B6dRfH8kSc7tzkdB33uYCrt1lmJj4UCD6LpKzBTG1Iebu8HeKlWZBkNHNckzKFsdAQ0HE5mkCUqIgcKTCKRD7jj1k1DGgVr4cQxm8pUIOXGEGbzE8ScQjez&X-Amz-Signature=a3d0be945fbb7694b9e6ef84e819e4833379653571875589e2eae8c226d7e314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://m.blog.naver.com/minhyupp/222211206474](https://m.blog.naver.com/minhyupp/222211206474)

윈도우키 + R : regedit

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout
```

`Scancode Map` 이름으로 **이진값 새로 만들기** 후 입력한 다음 재부팅....



**03이 캡스락, XT값은 3A**

**58이 컨트롤 XT 값은 1D**



1D 00 3A의 뜻은 1D(컨트롤키)를 3A키(캡스락)에 할당해주시오. 라는 뜻.



![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfNzgg/MDAxNjEwOTQ0NjgxNzgy.YS7Ap6fbEi-TRbEpY5aXdQJ0Hu-rTc_OI1P9DgmtpOQg.g1-cUEsmRpPoCA8b39LlpdpFxUagh7o7I46xAHIjej4g.PNG.minhyupp/image.png?type=w800)

Ctrl <-> Caps Lock 위치 변경

![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfMjQg/MDAxNjEwOTQ1Mzk2NjY0.TFPIQALDqOG4bH8YeT2r_Jt1pwBpIpgDuX_k9cyRGpwg.s-wjZ1tR7__cV_HCZjHUUFGDAMsYBcoLJfXHPZyvJnEg.PNG.minhyupp/image.png?type=w800)

CapsLock 조차 Ctrl 키로 바꿔버리기



# 이거 자동화 할 방법 없나?

🔗 [https://dora-guide.com/레지스트리-편집기-실행/](https://dora-guide.com/레지스트리-편집기-실행/)

🔗 [https://blog.naver.com/starbros/220466856335](https://blog.naver.com/starbros/220466856335)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/317c6692-f519-47b2-98e6-bd4ed2d3f2f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56RWDGG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFu1JTKYMbREGFwT5z%2FmnuyPbwPhty%2BRED7J86ZEwtjbAiBLmRI0v041KLgh33ikm9%2BrXlF%2BS9sVOp5qjlGGs4giRCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwNlui2JEdG2aHO4WKtwDME04zsqbhTFBNwJx3O6racmqezOaMhCLYi%2BlZ7Xrt3rPTtCYZ35P4p3aqCDV7c9595jtBf%2B8RElCjOwOw2S5QpnwdmfEd1FLCpizJVAe75HwFlHHwOQC98VcZVP7j5ltDx6UlqvO5XQw977W74LraI0wYqxXRl5Y%2FnPkAsIjLZnipQOZiaaDP2l1YS%2B426m0li23fX9dpKsh84Wn7F7%2BOVxYR6wk5tvxQkQNHhawamTyGKDFB2bc7bXJJlQzwlJzs%2BEOkFaeAb%2BRJmIAtqrztI28bk4Y9KvAUXUVwg7ZKpmcUzkwpSPtaL%2FRQ4irVE1rd2KG9zvTv2wIj9q3Prsa4JkDqb1fRIQ%2FRX3CIGIsnyr2VZ0FA21I71zn6ZyAcr6Diy7FPtcGknWE89lHsXdDMk6PFa1pa61RLsuuk3ys6yn7BsvMWc9gJOjDyW7lUNw28qTedjFBVNGAoKIaSjpgJ6FoTITgnTfxhQAdomEBrTErbkmRoBjoufuEQTTRjatiqp3WE%2B3BtGNdmM64aWcHl72gUpsDXVwhvouur54jMBgXtkDMRPlXlUXf2ohsgVxuc8%2BFar6e9uv9DrODZjeQtGbfzm%2BjqB6fpcjD%2BI0IsgmHVWRWUg2MjGvLDYsw2s6HxAY6pgFl2CBzSTOq0OWjwr3odOtNSfuHnI9Do9BSJyffTb0nJy6ymdNYFVi0R5sWwNAeHcyrxKMMhm9k5940MM9H5YNYFnPahqB%2BKiFGc7oFM%2B6dRfH8kSc7tzkdB33uYCrt1lmJj4UCD6LpKzBTG1Iebu8HeKlWZBkNHNckzKFsdAQ0HE5mkCUqIgcKTCKRD7jj1k1DGgVr4cQxm8pUIOXGEGbzE8ScQjez&X-Amz-Signature=4823a9cdf9343a547ae1730a6b4437887ffbbda5c3608492ff0d047535a04ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07d77b91-aa14-412f-8af3-2da3320a0f8e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56RWDGG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFu1JTKYMbREGFwT5z%2FmnuyPbwPhty%2BRED7J86ZEwtjbAiBLmRI0v041KLgh33ikm9%2BrXlF%2BS9sVOp5qjlGGs4giRCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwNlui2JEdG2aHO4WKtwDME04zsqbhTFBNwJx3O6racmqezOaMhCLYi%2BlZ7Xrt3rPTtCYZ35P4p3aqCDV7c9595jtBf%2B8RElCjOwOw2S5QpnwdmfEd1FLCpizJVAe75HwFlHHwOQC98VcZVP7j5ltDx6UlqvO5XQw977W74LraI0wYqxXRl5Y%2FnPkAsIjLZnipQOZiaaDP2l1YS%2B426m0li23fX9dpKsh84Wn7F7%2BOVxYR6wk5tvxQkQNHhawamTyGKDFB2bc7bXJJlQzwlJzs%2BEOkFaeAb%2BRJmIAtqrztI28bk4Y9KvAUXUVwg7ZKpmcUzkwpSPtaL%2FRQ4irVE1rd2KG9zvTv2wIj9q3Prsa4JkDqb1fRIQ%2FRX3CIGIsnyr2VZ0FA21I71zn6ZyAcr6Diy7FPtcGknWE89lHsXdDMk6PFa1pa61RLsuuk3ys6yn7BsvMWc9gJOjDyW7lUNw28qTedjFBVNGAoKIaSjpgJ6FoTITgnTfxhQAdomEBrTErbkmRoBjoufuEQTTRjatiqp3WE%2B3BtGNdmM64aWcHl72gUpsDXVwhvouur54jMBgXtkDMRPlXlUXf2ohsgVxuc8%2BFar6e9uv9DrODZjeQtGbfzm%2BjqB6fpcjD%2BI0IsgmHVWRWUg2MjGvLDYsw2s6HxAY6pgFl2CBzSTOq0OWjwr3odOtNSfuHnI9Do9BSJyffTb0nJy6ymdNYFVi0R5sWwNAeHcyrxKMMhm9k5940MM9H5YNYFnPahqB%2BKiFGc7oFM%2B6dRfH8kSc7tzkdB33uYCrt1lmJj4UCD6LpKzBTG1Iebu8HeKlWZBkNHNckzKFsdAQ0HE5mkCUqIgcKTCKRD7jj1k1DGgVr4cQxm8pUIOXGEGbzE8ScQjez&X-Amz-Signature=ac0003f1385d0bf5d2025850ee7e0fe99ab11251432a07a6998380345bdacf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0325384a-f9af-4164-9540-7161b0bfaf0f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56RWDGG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFu1JTKYMbREGFwT5z%2FmnuyPbwPhty%2BRED7J86ZEwtjbAiBLmRI0v041KLgh33ikm9%2BrXlF%2BS9sVOp5qjlGGs4giRCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwNlui2JEdG2aHO4WKtwDME04zsqbhTFBNwJx3O6racmqezOaMhCLYi%2BlZ7Xrt3rPTtCYZ35P4p3aqCDV7c9595jtBf%2B8RElCjOwOw2S5QpnwdmfEd1FLCpizJVAe75HwFlHHwOQC98VcZVP7j5ltDx6UlqvO5XQw977W74LraI0wYqxXRl5Y%2FnPkAsIjLZnipQOZiaaDP2l1YS%2B426m0li23fX9dpKsh84Wn7F7%2BOVxYR6wk5tvxQkQNHhawamTyGKDFB2bc7bXJJlQzwlJzs%2BEOkFaeAb%2BRJmIAtqrztI28bk4Y9KvAUXUVwg7ZKpmcUzkwpSPtaL%2FRQ4irVE1rd2KG9zvTv2wIj9q3Prsa4JkDqb1fRIQ%2FRX3CIGIsnyr2VZ0FA21I71zn6ZyAcr6Diy7FPtcGknWE89lHsXdDMk6PFa1pa61RLsuuk3ys6yn7BsvMWc9gJOjDyW7lUNw28qTedjFBVNGAoKIaSjpgJ6FoTITgnTfxhQAdomEBrTErbkmRoBjoufuEQTTRjatiqp3WE%2B3BtGNdmM64aWcHl72gUpsDXVwhvouur54jMBgXtkDMRPlXlUXf2ohsgVxuc8%2BFar6e9uv9DrODZjeQtGbfzm%2BjqB6fpcjD%2BI0IsgmHVWRWUg2MjGvLDYsw2s6HxAY6pgFl2CBzSTOq0OWjwr3odOtNSfuHnI9Do9BSJyffTb0nJy6ymdNYFVi0R5sWwNAeHcyrxKMMhm9k5940MM9H5YNYFnPahqB%2BKiFGc7oFM%2B6dRfH8kSc7tzkdB33uYCrt1lmJj4UCD6LpKzBTG1Iebu8HeKlWZBkNHNckzKFsdAQ0HE5mkCUqIgcKTCKRD7jj1k1DGgVr4cQxm8pUIOXGEGbzE8ScQjez&X-Amz-Signature=62ba1e441433c15edc91ef1c45baffea431594a1b478f8bafd1991a59cf4db56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



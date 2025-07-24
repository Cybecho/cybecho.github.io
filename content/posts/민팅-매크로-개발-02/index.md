---
title: "민팅 매크로 개발 02"
date: 2023-02-20T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["매크로개발"]
description: "매크로 개발 과정에서 xpath 클릭 문제를 해결하기 위한 다양한 시도와 코드 구현을 다루며, 최종적으로 팝업 인지 및 클릭을 위한 RGB_CLICK 함수를 활용한 방법을 설명한다. 그러나 18개 프로그램을 실행했음에도 불구하고 잘못된 URL로 인해 목표를 달성하지 못했다는 결론을 내린다."
notion_id: "c2294260-e7cb-45d5-bdde-56cb7f503298"
notion_url: "https://www.notion.so/02-c2294260e7cb45d5bdde56cb7f503298"
---

# 민팅 매크로 개발 02

> **Summary**
> 매크로 개발 과정에서 xpath 클릭 문제를 해결하기 위한 다양한 시도와 코드 구현을 다루며, 최종적으로 팝업 인지 및 클릭을 위한 RGB_CLICK 함수를 활용한 방법을 설명한다. 그러나 18개 프로그램을 실행했음에도 불구하고 잘못된 URL로 인해 목표를 달성하지 못했다는 결론을 내린다.

---

# HTML에서 바로 xpath 뽑을걸… able하니까 클릭가능하게 바뀌네…

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3cf5a175-1bce-4745-bbe5-183e6e01f1f4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPVSYSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFr7ClsgwsgQXOuvae7sJpiwbohyfF%2B7PAZ7LX6L1oskAiEAsmfu7rW96CfSUPwF4On0naaBt0BZ5XFWcL73FQ5t3pgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDwUFFDrOdj%2Bb8GWkCrcA8eOgp%2Bp3jPdi%2FgRLkU9IvouLjxJtgMohRSYnysAe4O8K12vc27za%2FPW1z2mjenHyMadDvU5RqrXf9ey4ca3%2BrN68mEvyk69F84Sj0DwmRN%2FK15n1hifuZ8EXcsGPNWl14P3lY%2FiIqMCNUAX0%2BeJEWlgefKZYnus7GUFSzcq8ViNPvPsvSSlLB5xTF62l%2BhsCcoVQg5WamIbPfysGelnxYvEfUA5YmwT85OVXwDs6TyE%2FtnbUX1hIG5A9gTJqbRWJtZdFePSZeIiv15pWZD9QsyS14rbfLVVMsKd%2BjJQV2Bp%2Be2zGtHXj7WEKe3o9ioCJeVad9SMWonTVGjuPAin8EZJoETGDsjsCGunSW7B4sqFcfdeDIPYYyAfZaOsFJ%2BfyQCh6E1pDuQ00ELyQtrP7OzOmOHgWgfp3%2BV1AeKUoRGxip3XbOruT2e43XIhbNQ%2Bmbtretu0bZiIoVzLaS3o%2FKS%2B40DhmZv%2Bsr79IbPWvFevB9YvIbA97%2F8xQ3RDJtuBxKWsQdKmQ%2B7GHt%2Fja7jPuTRxaa1%2B9XoztpFqkWSXf2dmymlmgssFqHL438cciPzsDHEKmADfAZckugT25gExTJWAiKdgMN1GLntaX6Farf7sAzc1Zijo5ZD9acgKMJrQh8QGOqUBngSPD%2B0qDcG%2BxRn20AOfzoSnQEZq%2BTdQK%2FHz7g%2FtifftlNFeEJYMQZAz2gFmLQKwVB%2B9lMNDIXGEiTZnXxzWjz1Pkr1SJFNeYeDfev%2FVJ6ZSwtf2LMn47MCImTxRiEyhgT57EwfMksFQgVlgrtJJge5SjCJvHvY3POjlCI5iQMfRj0wayTfrEjU4GuycHTHQh2rzuHuC%2FutEzlcAnHnADX1IziOP&X-Amz-Signature=fef41c59e715881e0d30703147f2824b0817a301081b9ce5231f094a57e2f765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

//*[@id="headlessui-tabs-panel-:r1a:"]/div/div[1]/ul/li/div[2]/div/button

//*[@id="headlessui-tabs-panel-:r1a:"]/div/div[1]/ul/li/div[2]/div/button


# 얏됐다! 로그인게정마다 xpath가 조금씩 변해서 로그인하고나면 클릭이 안돼!!!!


```python
#//*[@id="headlessui-tabs-panel-:r3:"]/div/div[1]/ul/li/div[2]/div/button #(로그인안했을땐 동일)
#//*[@id="headlessui-tabs-panel-:**ro**:"]/div/div[1]/ul/li/div[2]/div/button #(A계정 로그인)
#//*[@id="headlessui-tabs-panel-:**ri**:"]/div/div[1]/ul/li/div[2]/div/button #(B계정 로그인)
```

## 크히힣!!! 난 잠 다잤다!!!



> Xpath클릭도 실패했고… datetime 이나 time.sleep 으로는 고정 시간기준으로 클릭만 가능하여
Xpath가 아니라면 팝업을 인지하고 다음 단계로 이동하는걸 구현하지 못했었는데..

## 해치웠다!!!(진짜로)


> Xpath 사용 없이 해결한 방법은 바로

`**”len(driver.window_handles)”**`

pyautogui 와 PIL 라이브러리를 활용해 만든 RGB_CLICK함수를 일단 한번 클릭하면 함수를 종료하게 만들고 while 문을 활용해 크롬탭이 하나뿐이라면 계속해서 RGB_CLICK을 하게 만들었다


쨌든 오늘 꿀잠…다행이다…


# 전체코드


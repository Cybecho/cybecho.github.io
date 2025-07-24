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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3cf5a175-1bce-4745-bbe5-183e6e01f1f4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG5LRWX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEg8ZJWdemFlg8OxDrwl18eDil%2FpNUEstprzRqSQ51vMAiBKJyIdbYCe%2FQFi88KTriV15tOTY0AEaCxXu1AS8efvTyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIS8ccViOwh3cWVB7KtwDorzurHNNVhLNRiPEx1Vt%2BKXHuHMbHu4r69JyDX5fL8s3VozkwXFXaYxo92Nq41%2BtugZdpN9vugifYWyF%2BgFDI5UaqGZFbCMZlXIYsS1wJPCKWCVg5isWg6LudRhbWB6ly5y0qc661w2Fa%2BRekFDloYslI7wV5IzzwM%2BRR%2FlzhuZfpT4XXDBYk5YdMqkdSeQYVELVRdHJWStOM4zoFsSaW6ZtLcq6brel0mGlbI%2FiLvrkjP4oiiIVMPqyjd03LJ3aAHW5EmVEZqnfXg3tzbnsesZN3ly5tHmIJelwV3MdkIQTcNpPbC2vfzHPv4td%2BroEAk9zyBg1nQXL2L63g4ybKmzIUV3znfFMoQmLaiadMOiRLJcOUFxAwEP1Az5jnf5E7EunMR8Bhf1fn9iFpVXWhyqMdcR9uNJv8mE46kJ3dAlvgWi9Mez9N5QbJhI%2F7I28au7g79GDXXptuCVp1Nz59MRYAtGezy6HLWdpXzz9K2Tv%2BQYxSQP418zZCwo7IL1XdMyxhlJcp3CfN3%2FGEIUATohbBf8VUKI7aRGyAs%2Fidwv%2Bd0Us7EACjLoAQUfBjJHdC8YrKmY%2FGY0RDe4iTYei3fLwmw4u%2BWS8Sis4oW9nsJ%2BSlBgl4Ml3V9drNtUwiM%2BHxAY6pgHQKf6p%2F7%2BjGdNg7c3aBKte74RNe21eqxklSHRwe5Iv3TD%2F41rwjJlWf00trvlbvu7tdAtzHqRZMPn3xcGFUi3p1OXUSlFgPFotjlolS3v23%2BqIKoWQkidYpSo%2BlcYPyJJk4cu2%2FyGCkw1Yz6Xa9WsDT0rARQbSMVBQ4PBT3Z%2Fd9RmkJN746vC25sBKN8fcIfIBG3PtbEsAtg0DaxisNjCE9VI2l%2FLD&X-Amz-Signature=9e06701db6ed65c51c1caefc16b4f4d7894ed313491bf93ba3112be32e467fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


---
title: "민팅 매크로 개발 01"
date: 2023-02-19T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["Let's Macro"]
description: "서버 시간 동기화 방법과 특정 색 클릭 매크로 개발을 위한 Python 코드 예시를 제공하며, 클릭 범위를 비율로 계산하는 방법과 RGB 인식 클릭 구현 방법을 설명합니다."
featured_image: "image_8746692dfaefb6c048bafa3e.png"
notion_id: "f146239f-6f7b-4006-b085-ea3833d6a76a"
---

# 민팅 매크로 개발 01

> **Summary**
> 서버 시간 동기화 방법과 특정 색 클릭 매크로 개발을 위한 Python 코드 예시를 제공하며, 클릭 범위를 비율로 계산하는 방법과 RGB 인식 클릭 구현 방법을 설명합니다.

---

![Image](image_8746692dfaefb6c048bafa3e.png)

> 🔥 **MBX 서버위치 확인**
> 🔗 [https://sitereport.netcraft.com/?url=https://playone.marblex.io](https://sitereport.netcraft.com/?url=https://playone.marblex.io)
>
>

> 🔥 **서버접속방법 컴퓨터를의 시간을 AWS서버시간과 동기화시킵니다**
> 🔗 [https://medium.com/@whj2013123218/수강-신청-및-티케팅-성공을-위한-tip-및-python-프로그램-facc9107abc7](https://medium.com/@whj2013123218/수강-신청-및-티케팅-성공을-위한-tip-및-python-프로그램-facc9107abc7)
>
> ```python
> 관리자 권한으로 CMD를 실행했다면 아래와 같은 명령어를 입력한다.
>
> net start w32time
>
> w32tm /config /manualpeerlist:13.215.62.163 /syncfromflags:manual /update
>
> w32tm /query /configuration
>
> 실행 결과 NTP Server에 13.215.62.163가 출력됐다면 컴퓨터가 AWS 서버 시간과 동기화되는 데 성공한 것이다.
> ```
>
> 컴퓨터의 시간은 AWS와 동기화 됨
>
> 그 후에 다음코드 작성하여 실행
>
> ```python
> import datetime as dt
> import pyautogui
> import time
>
> endhope=False
> while not endhope:
>     tim=dt.datetime.now()
>     if tim.second>=59 and tim.microsecond>600000:
>         pyautogui.click(1301,722)
>         endhope=True
>         print(tim)
>     else:
>         time.sleep(0.1)
>         print(tim)
> ```
>
> 🔗 [https://purplechip.tistory.com/11](https://purplechip.tistory.com/11)
>
>

> 🔥 **모니터 해상도에 상관없이 비율대로 클릭하기 위해 백분율 계산으로 클릭 범위**
> <details>
> <summary>전체값에서 값 구하기 코드</summary>
>
> ```python
> ###############################################
> # 전체값에서 일부값은 몇 퍼센트? 계산
> # 공식은 "일부값 나누기 전체값 곱하기 100.0"
> ###############################################
>
>
> # 10은 100에서 몇 퍼센트?
> print "%.2f%%" % (10.0 / 100.0 * 100.0)
> # 출력 결과: 10.00%
>
>
> # 33은 100에서 몇 퍼센트?
> print "%.2f%%" % (33.0 / 100.0 * 100.0)
> # 출력 결과: 33.00%
>
>
> # 105는 300의 몇퍼센트?
> print "%.2f%%" % (105.0 / 300.0 * 100.0)
> # 출력 결과: 35.00%
>
>
> # 한달 봉급 156만원인 사람이, 음식 값으로 21만원을 쓰면,
> # 그 음식값은 한 달 봉급의 몇 퍼센트?
> print "%.2f%%" % (210000.0 / 1560000.0 * 100.0)
> # 출력 결과: 13.46%
>
>
> # 만약 봉급 156만원으로 모두 먹는 데 사용했다면
> # 100% 가 나와야겠지요.
> print "%.2f%%" % (1560000.0 / 1560000.0 * 100.0)
> # 출력 결과: 100.00%
>
>
> # 만약 아무것도 먹지 않았면 0% 가 나와야합니다.
> print "%.2f%%" % (0.0 / 1560000.0 * 100.0)
> # 출력 결과: 0.00%
>
>
>
>
>
> ###############################################
> # 전체값의 몇 퍼센트는 얼마? 계산
> # 공식은, "전체값 곱하기 퍼센트 나누기 100.0"
> ###############################################
>
>
> # 100의 10퍼센트는 얼마?
> print "%.2f" % (100.0 * 10.0 / 100.0)
> # 출력 결과: 10.00
>
>
> # 100의 33퍼센트는 얼마?
> print "%.2f" % (100.0 * 33.0 / 100.0)
> # 출력 결과: 33.00
>
>
> # 300의 35퍼센트는 얼마?
> print "%.2f" % (300.0 * 35.0 / 100.0)
> # 출력 결과: 105.00
>
>
> # 156만원의 13.46퍼센트는 얼마?
> print "%.2f" % (1560000.0 * 13.46 / 100.0)
> # 출력 결과 (21만원에 가까운 값): 209976.00
>
>
> # 156만원의 100퍼센트는 얼마?
> print "%.2f" % (1560000.0 * 100.0 / 100.0)
> # 출력 결과: 1560000.00
>
>
> # 156만원의 0퍼센트는 얼마?
> print "%.2f" % (1560000.0 * 0.0 / 100.0)
> # 출력 결과: 0.00
>
> ```
>
> </details>
>
> ```python
> RGB_CLICK(int(width * 20 / 100), int(height * 21 / 100), int(width * 80 / 100), int(height * 50 / 100), 3)
> ```
>
>

> 🔥 **우측하단에서 좌측상단 ↖️ 으로 이동하는 클릭구현**
> ```python
> def RGB_CLICK(x1, y1, x2, y2, N): #RGB인식 영역 / 프로그램이 몇초뒤에 꺼질까요?
>     start_time = time.time()
>     end_time = start_time + N
>
>     shot = 0 #목표물 찾았는지 확인하는 변수
>     c_start = (x1,y1) #캡처영역 좌측상단 포인트
>     c_end = (x2,y2) #캡처영역 우측하단 포인트
>     c_xbox = (91, 87, 242) #RGB값
>
>     while start_time < end_time:
>         screenshot = ImageGrab.grab()
>         for i in range(c_end[0],c_start[0],-10):
>             for j in range(c_end[1],c_start[1],-10):
>                 RGB = screenshot.getpixel((i,j)) #각 좌표에서 RGB값 추출
>                 if abs(RGB[0]-c_xbox[0]) + abs(RGB[1]-c_xbox[1]) + abs(RGB[2]-c_xbox[2]) < 100:
>                     pyautogui.click((i - 10,j - 10))
>                     shot = 1
>                     break
>                 elif shot == 1:
>                     break
>             if shot == 1:
>                 break
>         break
> ```
>
> N초뒤에 프로그램이 종료되는 코드를 추가하려면 아래코드를 추가해준다
>
> ```python
> while start_time < end_time:
>             screenshot = ImageGrab.grab()
>             for i in range(c_end[0],c_start[0],-10):
>                 for j in range(c_end[1],c_start[1],-10):
>                     RGB = screenshot.getpixel((i,j)) #각 좌표에서 RGB값 추출
>                     if abs(RGB[0]-c_xbox[0]) + abs(RGB[1]-c_xbox[1]) + abs(RGB[2]-c_xbox[2]) < 100:
>                         pyautogui.click((i - 10,j - 10))
>                         shot = 1
>                         break
>                 if shot == 1:
>                     shot = 0
>                     break
>            ** if time.time() > end_time:                                                                                                                                 
>                 break**
> ```
>
>



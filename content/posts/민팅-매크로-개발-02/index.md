---
title: "민팅 매크로 개발 02"
date: 2023-02-20T00:00:00.000Z
draft: false
tags: ["Python"]
series: ["매크로개발"]
description: "xpath를 사용하여 클릭 기능을 구현하려 했으나, 로그인 계정마다 xpath가 달라져 클릭이 실패했다. pyautogui와 RGB_CLICK 함수를 활용하여 팝업을 인식하고 클릭하는 방법으로 문제를 해결했으며, 최종적으로는 잘못된 URL로 인해 실제 코드를 잘못 실행한 결과를 겪었다."
notion_id: "c2294260-e7cb-45d5-bdde-56cb7f503298"
notion_url: "https://www.notion.so/02-c2294260e7cb45d5bdde56cb7f503298"
---

# 민팅 매크로 개발 02

> **Summary**
> xpath를 사용하여 클릭 기능을 구현하려 했으나, 로그인 계정마다 xpath가 달라져 클릭이 실패했다. pyautogui와 RGB_CLICK 함수를 활용하여 팝업을 인식하고 클릭하는 방법으로 문제를 해결했으며, 최종적으로는 잘못된 URL로 인해 실제 코드를 잘못 실행한 결과를 겪었다.

---

# HTML에서 바로 xpath 뽑을걸… able하니까 클릭가능하게 바뀌네…

![Image](image_b0f9e3cc4942.png)

//*[@id="headlessui-tabs-panel-:r1a:"]/div/div[1]/ul/li/div[2]/div/button

//*[@id="headlessui-tabs-panel-:r1a:"]/div/div[1]/ul/li/div[2]/div/button


# 얏됐다! 로그인게정마다 xpath가 조금씩 변해서 로그인하고나면 클릭이 안돼!!!!


```python
#//*[@id="headlessui-tabs-panel-:r3:"]/div/div[1]/ul/li/div[2]/div/button #(로그인안했을땐 동일)
#//*[@id="headlessui-tabs-panel-:**ro**:"]/div/div[1]/ul/li/div[2]/div/button #(A계정 로그인)
#//*[@id="headlessui-tabs-panel-:**ri**:"]/div/div[1]/ul/li/div[2]/div/button #(B계정 로그인)
```

## 크히힣!!! 난 잠 다잤다!!!


<details>
<summary>눈물의 해치웠나? 똥꼬쇼 기존코드</summary>

```python
if __name__ == '__main__':
    while True:
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        if current_time == "00:44:50":
            endhope=False
            while not endhope:
                tim=datetime.datetime.now()
                if tim.second>=59 and tim.microsecond>600000:
                    
                    ####웹사이트 BUY NOW 클릭 시도####
                    count = 0
                    while True:
                        try:
														#xpath가 바뀐다....!!!!
                           ** element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="headlessui-tabs-panel-:r3:"]/div/div[1]/ul/li/div[2]/div/button')))
                            driver.find_element(By.XPATH, '//*[@id="headlessui-tabs-panel-:r3:"]/div/div[1]/ul/li/div[2]/div/button').click()
                            print("클릭성공 시간 : ",tim)
                            break**
                        except:
                            count += 1
                            print("시도실패",count)
                    ####팝업 BUY NOW 클릭 시도####
                    for i in range(10):
                        keyboard.press_and_release('down')
                    pyautogui.click(int(width * 20 / 100), int(height * 20 / 100))
                    RGB_CLICK(int(width * 10 / 100), int(height * 20 / 100), int(width * 90 / 100), int(height * 80 / 100), MAIN_RGB, 50, 3)
                    RGB_CLICK(int(width * 10 / 100), int(height * 20 / 100), int(width * 90 / 100), int(height * 80 / 100), MAIN_RGB, 50, 3)
                    ####Confrim 팝업 클릭(테스트부분 지워도 됩니다)####
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div/button[2]')))
                    driver.find_element(By.XPATH, '//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div/button[2]').click()
                    driver.switch_to.window(driver.window_handles[-1])
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id=":r1:"]')))
                    driver.find_element(By.XPATH, '//*[@id=":r1:"]').click()
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/main/section/div[1]/div/form/button')))
                    driver.find_element(By.XPATH, '//*[@id="root"]/main/section/div[1]/div/form/button').click()
                    driver.switch_to.window(driver.window_handles[-1])
                    #확인차 다시 클릭하는부분
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="headlessui-tabs-panel-:r3:"]/div/div[1]/ul/li/div[2]/div/button')))
                    driver.find_element(By.XPATH, '//*[@id="headlessui-tabs-panel-:r3:"]/div/div[1]/ul/li/div[2]/div/button').click()
                    endhope=True
                    break
                else:
                    time.sleep(0.1)
                    print(tim)
```

</details>


> Xpath클릭도 실패했고… datetime 이나 time.sleep 으로는 고정 시간기준으로 클릭만 가능하여
Xpath가 아니라면 팝업을 인지하고 다음 단계로 이동하는걸 구현하지 못했었는데..

## 해치웠다!!!(진짜로)


> Xpath 사용 없이 해결한 방법은 바로

`**”len(driver.window_handles)”**`

pyautogui 와 PIL 라이브러리를 활용해 만든 RGB_CLICK함수를 일단 한번 클릭하면 함수를 종료하게 만들고 while 문을 활용해 크롬탭이 하나뿐이라면 계속해서 RGB_CLICK을 하게 만들었다


쨌든 오늘 꿀잠…다행이다…


# 전체코드

```python
from selenium import webdriver

from selenium.webdriver.common.by import By

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.alert import Alert

from PIL import ImageGrab
import keyboard
import pyautogui
import time
import datetime
import os

URL = "https://playone.marblex.io/ino/63dca20a2e19433d0e44ec1f/63edd3feb7b1b61da2d26360"
directory_chrome = r"C:\Users\thqud\AppData\Local\Google\Chrome\User Data" # 크롬 계정데이터 모여있는 폴더 chrome://version

USING_CHROME_PROFILE = False
NUM_CHROME_PROFILE = 0

#####################크롬 프로필 리스트화###################

# 해당 문자가 포함된 폴더만 리스트화 시키겠다 (프로필 뒤에 공백 필수)
include_text = 'Profile '

# 디렉토리명 필터링
DIR_PROFILE_LIST = (
    [d for d in os.listdir(directory_chrome) 
    if os.path.isdir(os.path.join(directory_chrome, d)) and include_text in d]
)

#####################셀레니움 기본 세팅#####################
options = Options()
options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
options.add_argument(f"user-data-dir={directory_chrome}")

# 필요할 시 크롬 기타 프로필 (기본 프로필로 이용할거면 False 처리)
if USING_CHROME_PROFILE == True:
    options.add_argument("--profile-directory=" + DIR_PROFILE_LIST[NUM_CHROME_PROFILE])
else:
    pass

options.add_experimental_option("detach", True)  # 화면이 꺼지지 않고 유지
options.add_argument("--start-maximized")  # 최대 크기로 시작

service = Service(ChromeDriverManager().install()) # 웹드라이버 설치
driver = webdriver.Chrome(service=service, options=options) # 웹드라이버 불러오기
action = ActionChains(driver)
wait = WebDriverWait(driver, 2)

driver.get(URL)
############################################################

MAIN_RGB = (91, 87, 242) #보라색
COFIRM_RGB = (53, 50, 168) #팝업 보라색
SUB_RGB = (55,55,55) #회색
width, height = pyautogui.size()
def RGB_CLICK(x1, y1, x2, y2, INPUT_RGB, RANGE, N): #RGB인식 영역 / RGB색 / 색인식범위 / 프로그램이 몇초뒤에 꺼질까요?
    start_time = time.time()
    end_time = start_time + N

    shot = 0 #목표물 찾았는지 확인하는 변수
    c_start = (x1,y1) #캡처영역 좌측상단 포인트
    c_end = (x2,y2) #캡처영역 우측하단 포인트
    c_xbox = INPUT_RGB #(91, 87, 242) #RGB값
    
    while start_time < end_time:
        screenshot = ImageGrab.grab()
        for i in range(c_end[0],c_start[0],-10):
            for j in range(c_end[1],c_start[1],-10):
                RGB = screenshot.getpixel((i,j)) #각 좌표에서 RGB값 추출
                #RGB 확인
                #print(abs(RGB[0]),abs(c_xbox[0]),abs(RGB[0]-c_xbox[0]),abs(RGB[1]),abs(c_xbox[1]),abs(RGB[1]-c_xbox[1]),abs(RGB[2]),abs(c_xbox[2]),abs(RGB[2]-c_xbox[2]))
                if abs(RGB[0]-c_xbox[0]) + abs(RGB[1]-c_xbox[1]) + abs(RGB[2]-c_xbox[2]) < RANGE:
                    print(abs(RGB[0]),abs(c_xbox[0]),abs(RGB[0]-c_xbox[0]),abs(RGB[1]),abs(c_xbox[1]),abs(RGB[1]-c_xbox[1]),abs(RGB[2]),abs(c_xbox[2]),abs(RGB[2]-c_xbox[2]))
                    pyautogui.click((i - 5,j - 5))
                    x = i
                    y = j
                    shot = 1
                    break
                elif shot == 1:
                    break
            if shot == 1:
                break
        break
    return print(i,j)


if __name__ == '__main__':
    while True:
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        if current_time == "02:42:50":
            endhope=False
            while not endhope:
                tim=datetime.datetime.now()
                if tim.second>=59 and tim.microsecond>600000:
                    #미리 로그인해두고 buy now 가 중반쯤에 오도록 스크롤을 내려두도록 합시다
                    pyautogui.click(int(width * 90 / 100), int(height * 90 / 100))
                    #윈도우 팝업이 뜰때까지 계속 클릭합니다
                    while True:
                        windowTabs = len(driver.window_handles)
                        if windowTabs == 1:
                            RGB_CLICK(int(width * 10 / 100), int(height * 21 / 100), int(width * 90 / 100), int(height * 80 / 100), MAIN_RGB, 50, 1)
                            #print("클릭성공 시간 : ",tim)
                        else :
                            print("팝업떴다!")
                            print(len(driver.window_handles))
                            break
                    
                    """#지워도되는부분테스트용
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div/button[2]')))
                    driver.find_element(By.XPATH, '//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div/button[2]').click()"""
                    
                    ####여기부터 BUY NOW 팝업 클릭 후 넣어주세요####
                    time.sleep(1)
                    driver.switch_to.window(driver.window_handles[-1]) #크롬 팝업창으로 이동
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id=":r1:"]')))
                    id_box = driver.find_element(By.XPATH, '//*[@id=":r1:"]')
                    id_box.send_keys(Keys.ENTER)
                    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/main/section/div[1]/div/form/button')))
                    driver.find_element(By.XPATH, '//*[@id="root"]/main/section/div[1]/div/form/button').click()
                    driver.switch_to.window(driver.window_handles[-1])
                    print("Confirm Done!")
                    endhope=True
                    break
                else:
                    time.sleep(0.1)
                    print(tim)

#화면이동을위한 buy버튼 클릭
#//*[@id="headlessui-tabs-tab-:r0:"] 
#//*[@id="headlessui-tabs-tab-:rf:"]

################################################################
#confirm 팝업띄우기
#//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div/button[2]
#
#비번 클릭
#//*[@id=":r1:"]

#Confirm창
#//*[@id="root"]/main/section/div[1]/div/form/button
################################################################

##https://playone.marblex.io/ino/63dca20a2e19433d0e44ec1f/63edd3feb7b1b61da2d26360
```

# 결론은 참패.. 18개 프로그램을 돌렸는데 21시가 되어도 BuyNow버튼이 활성화가 안돼서 보니까 처음에 기획자분이 주신 URL이 사이트 모양만 똑같은 별개의 사이트였고, 난 엉뚱한사이트에서 실제 코드를 돌리고있었음.. 허무하군..




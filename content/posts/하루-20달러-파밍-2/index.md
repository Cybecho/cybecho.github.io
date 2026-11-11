---
title: "하루 20달러 파밍 2"
date: 2023-04-28T00:00:00.000Z
draft: false
tags: ["Python","ubuntu"]
series: ["매크로개발"]
description: "댓글을 자동으로 작성하여 캐시를 벌 수 있는 방법을 설명하며, 이를 통해 약 7천만 캐시를 벌 수 있다고 언급한다. 코드 예제와 함께 셀레니움을 사용하여 자동 댓글 작성 프로세스를 상세히 설명하고, 로그인 및 댓글 작성 절차를 단계별로 안내한다."
notion_id: "f0c923a7-fd4a-4ddd-be3b-b320fe6ec1af"
---

# 하루 20달러 파밍 2

> **Summary**
> 댓글을 자동으로 작성하여 캐시를 벌 수 있는 방법을 설명하며, 이를 통해 약 7천만 캐시를 벌 수 있다고 언급한다. 코드 예제와 함께 셀레니움을 사용하여 자동 댓글 작성 프로세스를 상세히 설명하고, 로그인 및 댓글 작성 절차를 단계별로 안내한다.

---

글이 거의 70만개라 댓글 한번 적을때마다 100캐시

그럼 이거 싹다하면 대충 7천만 캐시 버는건데 이거 달러로 환산하면 7천달러정도임


# 댓글 자동 작성 코드 메모

```fortran
i : 오늘 댓글 적은 회수 (프로그램 1회 실행 후 초기화)
n : 누적 데이터

1. 로그인 페이지 이동
https://post.malltail.com//members/login

2.ID, PW 입력
//*[@id="login_id_2"]
//*[@id="login_id_1"] (혹은 바로 tab)
ENTER

3.어디까지 진행했는지 불러오기 변수 n은 따로 저장된 데이터에 저장되어있음

4.while문으로 링크 순차 이동
[https://post.malltail.com/goodsreviews/view/000001](https://post.malltail.com/goodsreviews/view/000001)
while로 계속 코드에 +1 추가하여 댓글입력

(삭제된 게시물일 경우)
arent 가 뜨면 다음while로 이동하고 n++


shift + tab 26번으로 댓글입력부분 클릭

혹은

//*[@id="frm_comment"]/div/textarea
로 텍스트 영역 클릭하고

//*[@id="frm_comment"]/div/div[2]/div[2]/div/a
로 댓글쓰기

(이미 댓글을 적은 게시물일 경우)
arent 가 뜨면 다음while로 이동

5. 현재 n 저장
```

# 소스코드

> 🔥 **셀레니움이 그사이에 업데이트되어서 고생좀 했다

`driver = webdriver.Chrome(ChromeDriverManager().install())
`
다음 코드로 웹드라이버 업데이트를 유지**

```fortran
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

import pyautogui
import clipboard
import time
import os
import subprocess
import sys
import openpyxl as op
from datetime import date
import random

import Today_lib as Today
import main_lib as M

#!####################엑셀 데이터 임포트###################
PATH_EXCEL = "C:/SBU/Auto_Malltail/SRC/"
FILE_EXCLEL = "UrlNumberData.xlsx"

WB = op.load_workbook(PATH_EXCEL + FILE_EXCLEL)
WS = WB.active
WS_MAX = WS.max_row

print(WB.sheetnames)

#!####################변수 초기화 부분###################

width, height= pyautogui.size()

ID = "ID"
PW = "PW"

UrlNumber = WS.cell(row = 1, column = 1).value
UrlNumber_Tmp = UrlNumber
UrlNumber_Tmp += 10

#!####################크롬 프로필 리스트화###################

directory_chrome = r"C:\Users\thqud\AppData\Local\Google\Chrome\User Data" # 크롬 계정데이터 모여있는 폴더 chrome://version
USING_CHROME_PROFILE = False
NUM_CHROME_PROFILE = 1

# 해당 문자가 포함된 폴더만 리스트화 시키겠다 (프로필 뒤에 공백 필수)
include_text = 'Profile '

# 디렉토리명 필터링
DIR_PROFILE_LIST = (
    [d for d in os.listdir(directory_chrome) 
    if os.path.isdir(os.path.join(directory_chrome, d)) and include_text in d]
)

#!####################셀레니움 기본 세팅#####################
options = Options()
options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
options.add_argument(f"user-data-dir={directory_chrome}")

# 필요할 시 크롬 기타 프로필 (기본 프로필로 이용할거면 USING_CHROME_PROFILE 변수를 False 처리)
if USING_CHROME_PROFILE == True:
    options.add_argument("--profile-directory=" + DIR_PROFILE_LIST[NUM_CHROME_PROFILE])
else:
    pass

options.add_experimental_option("detach", True)  # 화면이 꺼지지 않고 유지
options.add_argument("--start-maximized")  # 최대 크기로 시작

#service = Service(ChromeDriverManager().install()) # 웹드라이버 설치
driver = webdriver.Chrome(ChromeDriverManager().install())
#driver = webdriver.Chrome(service=service, options=options) # 웹드라이버 불러오기

action = ActionChains(driver)
wait = WebDriverWait(driver, 3)

#driver.switch_to.new_window('tab')
#driver.switch_to.window(driver.window_handles[-1])  #새로 연 탭으로 이동
driver.get("https://post.malltail.com//members/login")

element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="login_area"]/div[2]/div/a/img')))
driver.find_element(By.XPATH, '//*[@id="login_id_2"]').click()
driver.find_element(By.XPATH, '//*[@id="login_id_2"]').send_keys(ID)
driver.find_element(By.XPATH, '//*[@id="login_id_1"]').send_keys(PW + Keys.ENTER)

#!로그인 완료까지 대기
element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="header"]/h1/a/img')))

while(UrlNumber != UrlNumber_Tmp):
    
    #랜덤 댓글 멘트
    Rand_Int = random.randint(1, WS_MAX)
    Rand_Comments = WS.cell(row = Rand_Int, column = 2).value
    
    URL = "https://post.malltail.com/goodsreviews/view/" + str(UrlNumber)
    driver.get(URL)
    try:
        #댓글 작성
        element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="frm_comment"]/div/textarea')))
        driver.find_element(By.XPATH, '//*[@id="frm_comment"]/div/textarea').click()
        driver.find_element(By.XPATH, '//*[@id="frm_comment"]/div/textarea').send_keys(Rand_Comments)
        
        #댓글 등록 클릭
        element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="frm_comment"]/div/textarea')))
        driver.find_element(By.XPATH, '//*[@id="frm_comment"]/div/div[2]/div[2]/div/a').click()
        
        #~예외1) 이미 적은 댓글일경우
        try:
            alert = wait.until(EC.alert_is_present())
            alert.accept()
            print("실패인데수1 - 이미 적은 댓글")
        except:
            pass
        UrlNumber += 1

    #~예외2) 링크가 존재하지 않을경우
    except:
        print("실패인데수 - 존재하지 않는 링크")
        UrlNumber += 1
        pass

#!완료 후 프로그램 종료료
WS.cell(row = 1, column = 1).value = UrlNumber
WB.save(PATH_EXCEL + FILE_EXCLEL)
print(WS.cell(row = 1, column = 1).value)
```



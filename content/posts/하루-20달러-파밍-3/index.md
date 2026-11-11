---
title: "하루 20달러 파밍 3"
date: 2023-05-01T00:00:00.000Z
draft: false
tags: ["Python","ubuntu"]
series: ["매크로개발"]
description: "계정을 100개 정도 자동으로 생성하기 위한 파이썬 코드와 방법을 설명하며, 웹사이트 가입 절차를 자동화하는 매크로 개발에 대한 내용을 포함하고 있습니다. 코드 예제와 함께 랜덤 이름 생성 방법도 제시됩니다."
notion_id: "bc8a7cd2-1f45-4662-850a-c3b65c4aa05f"
---

# 하루 20달러 파밍 3

> **Summary**
> 계정을 100개 정도 자동으로 생성하기 위한 파이썬 코드와 방법을 설명하며, 웹사이트 가입 절차를 자동화하는 매크로 개발에 대한 내용을 포함하고 있습니다. 코드 예제와 함께 랜덤 이름 생성 방법도 제시됩니다.

---

# 계정 자동생성기 메모

```python
#가입화면
https://post.malltail.com/members/regist1

#외국인 가입
//*[@id="container"]/div[1]/div[1]/ul/li[2]/a

#아이디 영역 클릭
//*[@id="MemberUserId"]

#중복확인
//*[@id="container"]/div[1]/div[2]/div[1]/ul/li[1]/div[2]/div/button

#alert accept 중복확인 클릭
alert = wait.until(EC.alert_is_present())
alert.accept()

#insert PW
//*[@id="MemberPassword"]
tab
같은 비번

tab
한글이름

tab
영어이름

#이메일
//*[@id="MemberEmail"]

#전체동의.click
//*[@id="container"]/div[1]/div[2]/div[3]/div/dl/dt/div/label

#Sign up
//*[@id="container"]/div[2]/a[2]

#alert accept 가입축하
alert = wait.until(EC.alert_is_present())
alert.accept()
```


# 랜덤 사람 이름 테이블화

사람이름은 뭐로할까 하다가 그냥 한국에서 가장 많은 이름 사이트에서 딱 100개 리스트로 제공되길래 그걸 복붙해옴


엑셀에서 해당 이름 앞에 ‘김’ 을 일괄적으로 붙여서 그대로 파파고에 이름을 단순하게 번역 후 그대로 데이터베이스에 저장




🔗 [https://sjw89.tistory.com/20](https://sjw89.tistory.com/20)

🔗 [https://sjw89.tistory.com/20](https://sjw89.tistory.com/20)


# 소스코드

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

import os
import openpyxl as op

#!####################엑셀 데이터 임포트###################
PATH_EXCEL = "C:/SBU/Auto_Malltail/SRC/"
FILE_EXCLEL_A = "Userdata.xlsx"
FILE_EXCLEL_D = "UrlNumberData_Accounts1.xlsx"

#~계정원본 임포트
WB_A = op.load_workbook(PATH_EXCEL + FILE_EXCLEL_A)
WS_A = WB_A.active
WS_A_MAX = WS_A.max_row

#~계정 데이터베이스에 저장
WB_D= op.load_workbook(PATH_EXCEL + FILE_EXCLEL_D)
WS_D = WB_D.active
WS_D_MAX = WS_D.max_row

print("열린 시트 : " , WB_A.sheetnames,WB_D.sheetnames)

#!####################크롬 프로필 리스트화###################

#레노버 폴더 : C:\Users\a_004\AppData\Local\Google\Chrome\User Data
#레이저 폴더 : C:\Users\thqud\AppData\Local\Google\Chrome\User Data

directory_chrome = r"C:\Users\a_004\AppData\Local\Google\Chrome\User Data" # 크롬 계정데이터 모여있는 폴더 chrome://version
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

for i in range(WS_A_MAX):
    
    #~계정 순차적으로 불러오기
    ID = WS_A.cell(row = 1+i, column = 1).value #!이메일에서 골뱅이 빼주세요
    EMAIL = WS_A.cell(row = 1+i, column = 2).value
    PW = WS_A.cell(row = 1, column = 7).value
    NAME_K = WS_A.cell(row = 1+i, column = 3).value
    NAME_E = WS_A.cell(row = 1+i, column = 4).value
    print((i+1),ID,NAME_K,NAME_E)
    
    driver.get("https://post.malltail.com/members/regist1")

    #*아이디 입력
    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="container"]/div[1]/div[1]/ul/li[2]/a'))) #외국인가입 클릭 대기
    driver.find_element(By.XPATH, '//*[@id="container"]/div[1]/div[1]/ul/li[2]/a').click() #외국인 가입 클릭
    driver.find_element(By.XPATH, '//*[@id="MemberUserId"]').click() #아이디 클릭
    driver.find_element(By.XPATH, '//*[@id="MemberUserId"]').send_keys(ID)
    
    #*alert accept 중복확인 클릭
    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="container"]/div[1]/div[2]/div[1]/ul/li[1]/div[2]/div/button'))) #아이디 중복확인 대기
    driver.find_element(By.XPATH, '//*[@id="container"]/div[1]/div[2]/div[1]/ul/li[1]/div[2]/div/button').click() #아이디 중복확인
    alert = wait.until(EC.alert_is_present())
    alert.accept()
    
    #*비밀번호 입력
    driver.find_element(By.XPATH, '//*[@id="MemberPassword"]').click() #비밀번호 클릭
    driver.find_element(By.XPATH, '//*[@id="MemberPassword"]').send_keys(PW)
    
    #*비밀번호 재확인
    driver.find_element(By.XPATH, '//*[@id="MemberRePassword"]').click() #비밀번호 클릭
    driver.find_element(By.XPATH, '//*[@id="MemberRePassword"]').send_keys(PW)
    
    #*이름 입력
    driver.find_element(By.XPATH, '//*[@id="MemberName"]').click()
    driver.find_element(By.XPATH, '//*[@id="MemberName"]').send_keys(NAME_K)
    driver.find_element(By.XPATH, '//*[@id="MemberEngName"]').click()
    driver.find_element(By.XPATH, '//*[@id="MemberEngName"]').send_keys(NAME_E)
    
    #*이메일 입력
    driver.find_element(By.XPATH, '//*[@id="MemberEmail"]').send_keys(EMAIL) #아이디가 곧 이메일
    driver.find_element(By.XPATH, '//*[@id="container"]/div[1]/div[2]/div[3]/div/dl/dt/div/label').click()
    
    #*가입완료버튼
    element = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="container"]/div[2]/a[2]'))) #가입완료버튼대기
    driver.find_element(By.XPATH, '//*[@id="container"]/div[2]/a[2]').click() #가입완료
    alert = wait.until(EC.alert_is_present())
    alert.accept()
```



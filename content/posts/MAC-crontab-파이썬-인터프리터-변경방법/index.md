---
title: "MAC crontab 파이썬 인터프리터 변경방법"
date: 2023-05-28T00:00:00.000Z
draft: false
tags: ["MAC", "shell"]
series: ["Let's MAC!"]
description: "셀레니움 코드가 MAC에서 실행되지 않는 문제를 해결하기 위해 crontab에서 파이썬 인터프리터 경로를 변경하는 방법을 설명합니다. 기존의 파이썬 3.9 대신 3.11.3을 사용하도록 설정하고, 실행 결과를 로그 파일에 저장하여 문제를 진단하는 과정을 공유합니다. 또한, crontab에서 줄바꿈 문제를 피하기 위한 팁도 포함되어 있습니다."
notion_id: "cd1b58cb-ed07-4888-b3e3-e03c5534fdcb"
notion_url: "https://www.notion.so/MAC-crontab-cd1b58cbed074888b3e3e03c5534fdcb"
---

# MAC crontab 파이썬 인터프리터 변경방법

> **Summary**
> 셀레니움 코드가 MAC에서 실행되지 않는 문제를 해결하기 위해 crontab에서 파이썬 인터프리터 경로를 변경하는 방법을 설명합니다. 기존의 파이썬 3.9 대신 3.11.3을 사용하도록 설정하고, 실행 결과를 로그 파일에 저장하여 문제를 진단하는 과정을 공유합니다. 또한, crontab에서 줄바꿈 문제를 피하기 위한 팁도 포함되어 있습니다.

---



기존에 구글 클라우드에서 돌아가던 셀레니움 코드가 너무 무거워져서 무료서버로는 감당할 수 없을정도로 비대해져 코드들을 MAC에 스케듈링하는 작업을 하고있었는데, 아무리 실행시켜도 셀레니움만큼은 실행되지 않았다. 셀레니움뿐만 아니라 파이어폭스 드라이버인 geckodriver 로 설정해도 문제는 동일하게 발생했고, `chmod +x` 로 권한을 수정해도 여전히 셀레니움만큼은 실행되지 않았다.


GCP와 다르게 맥 터미널에선 코드가 실행되어도 GUI적으로 실행되었는지 확인할 방법이 없기에 맥의 `활성 상태 보기` 를 통해서 크롬 프로세스가 실행중인지도 확인해봤는데, 크롬이 실행되지 않는것을 확인했다. 하지만 에러로그가 보이질 않으니 어떻게 해야하니 고민중에, 방법을 찾게되어 해당 방법을 공유하고자한다.

# 기존 crontab 코드

```shell
* * * * * /usr/bin/python3 /Users/cybecho/SBU/Auto_Malltail/Mac/Test_firefox.py
```


기존코드는 다음과 같이 매 n시 n분 마다 내 디렉토리에 있는 파이썬 코드를 실행시키는것이었다. 이 Crontab 코드를 다음과같이 수정해보았다.

```shell
* * * * * /usr/bin/python3 /Users/cybecho/SBU/Auto_Malltail/Mac/Test_firefox.py >> /Users/cybecho/SBU/Auto_Malltail/data/cron_mac_output.log 2>&1
```

파이썬 코드 실행코드의 결과를 특정 디렉토리에 로그로 저장하는 코드다.

코드가 수정되고 실행된 결과는 다음과 같았다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f6a15f56-0d72-4474-a6ed-fff9c8be06ad/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCIKQEY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCR%2Bi5vdVdtoAZjQGc8IcQf6%2BitiuaJDLrrK8yTU9UnBgIhAONysi5Qz%2F7XOuPcIKOtqg5T4mvx5U0f%2BuQyaLR3evAdKv8DCCkQABoMNjM3NDIzMTgzODA1Igy5O1MJFaCNlK1XVmcq3AP1wyGo6cdIBwiM3bUPyoVmp1DelIKRfTJXYUw4QUMCFE9ITTS1TnNmX6p8NoHMNderydLdb5py9nlHzEhCNcpyEvPSo0pEhP582Vl%2FZiDPteRI37n7P2R0LDgwK6MjSILFsW9OnDHOqVnvD9z%2BwwCXQa0Rry3r2U%2Bf1n0Uq3A0D6kdtVEE2O%2FmU35ucRg0yJBq5B2VSyKJ7QMtY%2FFDCALvi3hYt0JyB730qK%2BmrBRvCvsn3fDwZquQJqrgYzPkvm6vuvEUhrfRQsvJZKUv8qDx1ANtaB3RRFvd76SlwVYMVrWV%2BBuHuCFIu%2FD5Z4oBb93cy%2BY5qsf4BNlmKNAoe6BAga3R6AEWlMNXS3GOv%2FiRrSE63q1poSvHSu0BuNKBKDO5ivsUS%2BLuC1AHbHLLaTOXorLAjt3LY7cv3lyzVyozfP3b9p%2BHiW15QOvUGgpioDufz81wMA89kGEf3UQMr4uImqPYI%2FngBlqO8QoHiUTLvh00BTIBjrDX%2B0nFBAO8ryWjtgSbZvWJ0941195lLl8dSVf%2BagiymdUpdHtZZXCD9%2BNTIdImi0%2Behs8nWkGOrJ9Or8jqUPiwGNj4F%2BXDrOjOnBxY185mYoczAuhNmR5dDnskgk1XWOHhhdekXjC%2Fz4fEBjqkAdhkVqyu%2FRxJVxC52X4cjd%2Bzjx%2FtWivLc8v43AlT6QkQq2u%2FONDAMMmVqy7u8Ln1BlA%2F1zMF9OuR3OA0dEh6z2yaic7lS2CJdqMNIBwrX7f%2B%2FmVFG10R65VCEIsryANO1Ws5WncfE8e9Ozr8j%2BgmMfTwyUKKueo5tjOuq%2BR6pYFi61SgQ7pvCV6FWaKsjPFluGxBB8WHJuq1C0qVOrp7LWn4HBZC&X-Amz-Signature=d6064ce348a5144a80a619b4b06298456f123b9bcbde4bf5b4a88413e5374d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urllib3 v2.0 버전 이상이 필요하다는데… 아마 이 문제때문은 아니고 파이썬 버전이 3.9로 설정되어있어 생긴 버그였다. 셀레니움은 3.9 버전에서 지원되지 않기 때문이다. 처음 MAC 을 설정할때, 개발자를 위한 패키지를 한번에 다운받은적이 있는데, 당시에 파이썬 3.9.6 이 자동으로 설치되어 말썽을 부린것이다.


# Crontab에서 파이썬 버전 변경법

기존 코드에서 파이썬 인터프리터를 결정하는 경로를 변경해주면 되는 문제였다.


일단 파이썬3.11.3 버전이 어디에 설치되어있는지부터 확인하기 위해 터미널에 다음 명령어를 입력한다

```shell
which python3.11
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3ddaa999-6523-4e40-8eae-65fc1d1432ac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCIKQEY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCR%2Bi5vdVdtoAZjQGc8IcQf6%2BitiuaJDLrrK8yTU9UnBgIhAONysi5Qz%2F7XOuPcIKOtqg5T4mvx5U0f%2BuQyaLR3evAdKv8DCCkQABoMNjM3NDIzMTgzODA1Igy5O1MJFaCNlK1XVmcq3AP1wyGo6cdIBwiM3bUPyoVmp1DelIKRfTJXYUw4QUMCFE9ITTS1TnNmX6p8NoHMNderydLdb5py9nlHzEhCNcpyEvPSo0pEhP582Vl%2FZiDPteRI37n7P2R0LDgwK6MjSILFsW9OnDHOqVnvD9z%2BwwCXQa0Rry3r2U%2Bf1n0Uq3A0D6kdtVEE2O%2FmU35ucRg0yJBq5B2VSyKJ7QMtY%2FFDCALvi3hYt0JyB730qK%2BmrBRvCvsn3fDwZquQJqrgYzPkvm6vuvEUhrfRQsvJZKUv8qDx1ANtaB3RRFvd76SlwVYMVrWV%2BBuHuCFIu%2FD5Z4oBb93cy%2BY5qsf4BNlmKNAoe6BAga3R6AEWlMNXS3GOv%2FiRrSE63q1poSvHSu0BuNKBKDO5ivsUS%2BLuC1AHbHLLaTOXorLAjt3LY7cv3lyzVyozfP3b9p%2BHiW15QOvUGgpioDufz81wMA89kGEf3UQMr4uImqPYI%2FngBlqO8QoHiUTLvh00BTIBjrDX%2B0nFBAO8ryWjtgSbZvWJ0941195lLl8dSVf%2BagiymdUpdHtZZXCD9%2BNTIdImi0%2Behs8nWkGOrJ9Or8jqUPiwGNj4F%2BXDrOjOnBxY185mYoczAuhNmR5dDnskgk1XWOHhhdekXjC%2Fz4fEBjqkAdhkVqyu%2FRxJVxC52X4cjd%2Bzjx%2FtWivLc8v43AlT6QkQq2u%2FONDAMMmVqy7u8Ln1BlA%2F1zMF9OuR3OA0dEh6z2yaic7lS2CJdqMNIBwrX7f%2B%2FmVFG10R65VCEIsryANO1Ws5WncfE8e9Ozr8j%2BgmMfTwyUKKueo5tjOuq%2BR6pYFi61SgQ7pvCV6FWaKsjPFluGxBB8WHJuq1C0qVOrp7LWn4HBZC&X-Amz-Signature=50239c39c2c09c3c1d0dc3183a50acb76ceed13743ffc6e19313577e53ca7efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

나는 홈브류로 새롭게 파이썬을 설치했기때문에 다음과 같은 경로를 얻을 수 있었다.

파이썬 경로를 복사하여 다시 `crontab -e` 으로 이동한다.


```shell
* * * * * <u>**/opt/homebrew/bin/python3.11**</u> /Users/cybecho/SBU/Auto_Malltail/Mac/Test_firefox.py >> /Users/cybecho/SBU/Auto_Malltail/data/cron_mac_output.log 2>&1
```

기존 경로를 파이썬 3.11.3이 설치된 경로로 바꿔준다.

`/usr/bin/python3` → `/opt/homebrew/bin/python3.11`


이제 정상적으로 셀레니움 코드가 파이썬3.11 으로 실행되며 정상 작동하는것을 확인할 수 있다.


우분투와 맥은 뭔가 비슷하면서도 다른게 신기하고 헷갈린다


# 팁


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/98892056-a290-4d59-a57a-9c28328af9e4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCIKQEY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCR%2Bi5vdVdtoAZjQGc8IcQf6%2BitiuaJDLrrK8yTU9UnBgIhAONysi5Qz%2F7XOuPcIKOtqg5T4mvx5U0f%2BuQyaLR3evAdKv8DCCkQABoMNjM3NDIzMTgzODA1Igy5O1MJFaCNlK1XVmcq3AP1wyGo6cdIBwiM3bUPyoVmp1DelIKRfTJXYUw4QUMCFE9ITTS1TnNmX6p8NoHMNderydLdb5py9nlHzEhCNcpyEvPSo0pEhP582Vl%2FZiDPteRI37n7P2R0LDgwK6MjSILFsW9OnDHOqVnvD9z%2BwwCXQa0Rry3r2U%2Bf1n0Uq3A0D6kdtVEE2O%2FmU35ucRg0yJBq5B2VSyKJ7QMtY%2FFDCALvi3hYt0JyB730qK%2BmrBRvCvsn3fDwZquQJqrgYzPkvm6vuvEUhrfRQsvJZKUv8qDx1ANtaB3RRFvd76SlwVYMVrWV%2BBuHuCFIu%2FD5Z4oBb93cy%2BY5qsf4BNlmKNAoe6BAga3R6AEWlMNXS3GOv%2FiRrSE63q1poSvHSu0BuNKBKDO5ivsUS%2BLuC1AHbHLLaTOXorLAjt3LY7cv3lyzVyozfP3b9p%2BHiW15QOvUGgpioDufz81wMA89kGEf3UQMr4uImqPYI%2FngBlqO8QoHiUTLvh00BTIBjrDX%2B0nFBAO8ryWjtgSbZvWJ0941195lLl8dSVf%2BagiymdUpdHtZZXCD9%2BNTIdImi0%2Behs8nWkGOrJ9Or8jqUPiwGNj4F%2BXDrOjOnBxY185mYoczAuhNmR5dDnskgk1XWOHhhdekXjC%2Fz4fEBjqkAdhkVqyu%2FRxJVxC52X4cjd%2Bzjx%2FtWivLc8v43AlT6QkQq2u%2FONDAMMmVqy7u8Ln1BlA%2F1zMF9OuR3OA0dEh6z2yaic7lS2CJdqMNIBwrX7f%2B%2FmVFG10R65VCEIsryANO1Ws5WncfE8e9Ozr8j%2BgmMfTwyUKKueo5tjOuq%2BR6pYFi61SgQ7pvCV6FWaKsjPFluGxBB8WHJuq1C0qVOrp7LWn4HBZC&X-Amz-Signature=830a6871225dec195c0745a7b1c5b079b335c4487ab881a4246bbbd06feee276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/90f2b601-1ecc-46b5-9a3c-88b85490bebc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCIKQEY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCR%2Bi5vdVdtoAZjQGc8IcQf6%2BitiuaJDLrrK8yTU9UnBgIhAONysi5Qz%2F7XOuPcIKOtqg5T4mvx5U0f%2BuQyaLR3evAdKv8DCCkQABoMNjM3NDIzMTgzODA1Igy5O1MJFaCNlK1XVmcq3AP1wyGo6cdIBwiM3bUPyoVmp1DelIKRfTJXYUw4QUMCFE9ITTS1TnNmX6p8NoHMNderydLdb5py9nlHzEhCNcpyEvPSo0pEhP582Vl%2FZiDPteRI37n7P2R0LDgwK6MjSILFsW9OnDHOqVnvD9z%2BwwCXQa0Rry3r2U%2Bf1n0Uq3A0D6kdtVEE2O%2FmU35ucRg0yJBq5B2VSyKJ7QMtY%2FFDCALvi3hYt0JyB730qK%2BmrBRvCvsn3fDwZquQJqrgYzPkvm6vuvEUhrfRQsvJZKUv8qDx1ANtaB3RRFvd76SlwVYMVrWV%2BBuHuCFIu%2FD5Z4oBb93cy%2BY5qsf4BNlmKNAoe6BAga3R6AEWlMNXS3GOv%2FiRrSE63q1poSvHSu0BuNKBKDO5ivsUS%2BLuC1AHbHLLaTOXorLAjt3LY7cv3lyzVyozfP3b9p%2BHiW15QOvUGgpioDufz81wMA89kGEf3UQMr4uImqPYI%2FngBlqO8QoHiUTLvh00BTIBjrDX%2B0nFBAO8ryWjtgSbZvWJ0941195lLl8dSVf%2BagiymdUpdHtZZXCD9%2BNTIdImi0%2Behs8nWkGOrJ9Or8jqUPiwGNj4F%2BXDrOjOnBxY185mYoczAuhNmR5dDnskgk1XWOHhhdekXjC%2Fz4fEBjqkAdhkVqyu%2FRxJVxC52X4cjd%2Bzjx%2FtWivLc8v43AlT6QkQq2u%2FONDAMMmVqy7u8Ln1BlA%2F1zMF9OuR3OA0dEh6z2yaic7lS2CJdqMNIBwrX7f%2B%2FmVFG10R65VCEIsryANO1Ws5WncfE8e9Ozr8j%2BgmMfTwyUKKueo5tjOuq%2BR6pYFi61SgQ7pvCV6FWaKsjPFluGxBB8WHJuq1C0qVOrp7LWn4HBZC&X-Amz-Signature=d20f1de7e19401ae91b6094efd818a14b9e169c498fa22eab8d4eb340f6835e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/733c2da0-0827-4e07-9fee-80eec29ffdce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCIKQEY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCR%2Bi5vdVdtoAZjQGc8IcQf6%2BitiuaJDLrrK8yTU9UnBgIhAONysi5Qz%2F7XOuPcIKOtqg5T4mvx5U0f%2BuQyaLR3evAdKv8DCCkQABoMNjM3NDIzMTgzODA1Igy5O1MJFaCNlK1XVmcq3AP1wyGo6cdIBwiM3bUPyoVmp1DelIKRfTJXYUw4QUMCFE9ITTS1TnNmX6p8NoHMNderydLdb5py9nlHzEhCNcpyEvPSo0pEhP582Vl%2FZiDPteRI37n7P2R0LDgwK6MjSILFsW9OnDHOqVnvD9z%2BwwCXQa0Rry3r2U%2Bf1n0Uq3A0D6kdtVEE2O%2FmU35ucRg0yJBq5B2VSyKJ7QMtY%2FFDCALvi3hYt0JyB730qK%2BmrBRvCvsn3fDwZquQJqrgYzPkvm6vuvEUhrfRQsvJZKUv8qDx1ANtaB3RRFvd76SlwVYMVrWV%2BBuHuCFIu%2FD5Z4oBb93cy%2BY5qsf4BNlmKNAoe6BAga3R6AEWlMNXS3GOv%2FiRrSE63q1poSvHSu0BuNKBKDO5ivsUS%2BLuC1AHbHLLaTOXorLAjt3LY7cv3lyzVyozfP3b9p%2BHiW15QOvUGgpioDufz81wMA89kGEf3UQMr4uImqPYI%2FngBlqO8QoHiUTLvh00BTIBjrDX%2B0nFBAO8ryWjtgSbZvWJ0941195lLl8dSVf%2BagiymdUpdHtZZXCD9%2BNTIdImi0%2Behs8nWkGOrJ9Or8jqUPiwGNj4F%2BXDrOjOnBxY185mYoczAuhNmR5dDnskgk1XWOHhhdekXjC%2Fz4fEBjqkAdhkVqyu%2FRxJVxC52X4cjd%2Bzjx%2FtWivLc8v43AlT6QkQq2u%2FONDAMMmVqy7u8Ln1BlA%2F1zMF9OuR3OA0dEh6z2yaic7lS2CJdqMNIBwrX7f%2B%2FmVFG10R65VCEIsryANO1Ws5WncfE8e9Ozr8j%2BgmMfTwyUKKueo5tjOuq%2BR6pYFi61SgQ7pvCV6FWaKsjPFluGxBB8WHJuq1C0qVOrp7LWn4HBZC&X-Amz-Signature=26a4bf889baabcbaf3b38b1919f695f92d8ab9274e2119d8ff82d10a6e00d7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f6a15f56-0d72-4474-a6ed-fff9c8be06ad/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=5a451acf5f613a1551f72a0e6155fadbf72164bdde6eea9875e3d3180c77c161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urllib3 v2.0 버전 이상이 필요하다는데… 아마 이 문제때문은 아니고 파이썬 버전이 3.9로 설정되어있어 생긴 버그였다. 셀레니움은 3.9 버전에서 지원되지 않기 때문이다. 처음 MAC 을 설정할때, 개발자를 위한 패키지를 한번에 다운받은적이 있는데, 당시에 파이썬 3.9.6 이 자동으로 설치되어 말썽을 부린것이다.


# Crontab에서 파이썬 버전 변경법

기존 코드에서 파이썬 인터프리터를 결정하는 경로를 변경해주면 되는 문제였다.


일단 파이썬3.11.3 버전이 어디에 설치되어있는지부터 확인하기 위해 터미널에 다음 명령어를 입력한다

```shell
which python3.11
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3ddaa999-6523-4e40-8eae-65fc1d1432ac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=bbb05c52203649a4d004a96051e5af44980ef5712d87075416375de2327a636f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/98892056-a290-4d59-a57a-9c28328af9e4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=d2d49431a1b794e0c6f5b332523a861482e58af6a05d5b9ab61e869bd74e8eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/90f2b601-1ecc-46b5-9a3c-88b85490bebc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=543221a7326e1235bffbbd445c6e8b5a18eb9dc1a709b2bde1cc7bf687f28f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/733c2da0-0827-4e07-9fee-80eec29ffdce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=1b556fb6e031253ebf73567198b02e181c652fb469e3338eca5ba116be5db5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


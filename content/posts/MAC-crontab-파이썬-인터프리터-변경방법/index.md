---
title: "MAC crontab 파이썬 인터프리터 변경방법"
date: 2023-05-28T00:00:00.000Z
draft: false
tags: ["MAC", "shell"]
series: ["Let's MAC!"]
description: "구글 클라우드에서 실행되던 셀레니움 코드가 무거워져 MAC에서 스케줄링하는 과정에서 문제가 발생했다. 기존 crontab 코드를 수정하여 파이썬 3.11.3 버전으로 변경하고, 실행 결과를 로그로 저장하는 방법을 공유하였다. 또한, crontab에서 줄바꿈 문제를 피하기 위해 터미널 크기를 조정하는 팁도 제공하였다."
notion_id: "cd1b58cb-ed07-4888-b3e3-e03c5534fdcb"
notion_url: "https://www.notion.so/MAC-crontab-cd1b58cbed074888b3e3e03c5534fdcb"
---

# MAC crontab 파이썬 인터프리터 변경방법

> **Summary**
> 구글 클라우드에서 실행되던 셀레니움 코드가 무거워져 MAC에서 스케줄링하는 과정에서 문제가 발생했다. 기존 crontab 코드를 수정하여 파이썬 3.11.3 버전으로 변경하고, 실행 결과를 로그로 저장하는 방법을 공유하였다. 또한, crontab에서 줄바꿈 문제를 피하기 위해 터미널 크기를 조정하는 팁도 제공하였다.

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f6a15f56-0d72-4474-a6ed-fff9c8be06ad/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XLVRNY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDaWMWRhgGXQxA382TKQWpSZyxcPF6NEcC7XBNNZABN8AIhANIlC%2FmGTq12hehKcZ3AIYuUZ7Mtuz4H1QVodnm02ktAKv8DCCwQABoMNjM3NDIzMTgzODA1Igz5b0H7ldc2I7ux2pgq3AMC5WT1XDoyO8QxW%2BFj%2BRSpYN%2Bma6BmsF03REtzyjhQwlSDkI0DJ4gLEbUi8TYddDGYux38OboCkbQJC%2FQvGpcViYK%2B0cIyWf%2FllmMFNSwfiz12buKxQbsloTmH2n2qcx792r1aMbv%2BOaUFGD65hX2%2F75rES4bnmbNfUWxwIgQs00LPcY8dFm1Ix9HdF8BD8ZT4lT9ZZrnmlwIBK%2Fz1F47ZFG744BCANe6yL9J4x5LMTLcQ8WCnSVQgpTnhgH2AZIezyne052YDnwcXB5cDghpfTlyIS8lgyd44uPSKcDetLu2F%2BcSBkirnXxlHoSeboZbrMS%2FUF0qcoMluDBqQ1o%2Bu8bgqZ%2FKc2i8hkWQGURC5TVjGOtibl9msZ1N%2FVHYuzt6XCE3oXf7aT0zqQNg3veHsrR53PSy5Ncdp6LzHxWnzd3sffV%2FKVvjT4hN3bqZrUoighhoB%2B7eLPIN3%2F1a9Y4Vu0cnojuiTIVN4OLq2b8jv6t6qBfwNs6hseTB4dxpSo6NrwmV20B1G7h%2FrZqVtJj2HFrmauErfjfVI%2Botq39L0AJv3gPQ72r9tSNhuK4RMvPKedCaMhwO7dTIZzh5NVa9HujlYaDaSOAuC0CBufm4L%2Fd8vbfLox4ZGl85SbzCcm4jEBjqkAcshYvoRTl6EIEnXqFTHqohS%2FSNuz9xFtOq7UYsfPw4ZLDnRrUlpsi6HwdWCNOSMojmxHFiXJ9nJ5MArnagq133TVUmycH0TQwCp5xB6Gl3X7GqbU9w3Pztz1VwcsRNFrA93cTgU8U6i569I0coUJeyGSq49agMT0PfrXUBk5LhH7n4xnCjH%2FGR2RhrTZctQlX7NfrlriPyHSijwBhCkk0o03%2Bj4&X-Amz-Signature=3e47f9afb0e0cf79b2b5b3cdb7b34a820adf2617546c28f12508c3f6e531f833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urllib3 v2.0 버전 이상이 필요하다는데… 아마 이 문제때문은 아니고 파이썬 버전이 3.9로 설정되어있어 생긴 버그였다. 셀레니움은 3.9 버전에서 지원되지 않기 때문이다. 처음 MAC 을 설정할때, 개발자를 위한 패키지를 한번에 다운받은적이 있는데, 당시에 파이썬 3.9.6 이 자동으로 설치되어 말썽을 부린것이다.


# Crontab에서 파이썬 버전 변경법

기존 코드에서 파이썬 인터프리터를 결정하는 경로를 변경해주면 되는 문제였다.


일단 파이썬3.11.3 버전이 어디에 설치되어있는지부터 확인하기 위해 터미널에 다음 명령어를 입력한다

```shell
which python3.11
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3ddaa999-6523-4e40-8eae-65fc1d1432ac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XLVRNY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDaWMWRhgGXQxA382TKQWpSZyxcPF6NEcC7XBNNZABN8AIhANIlC%2FmGTq12hehKcZ3AIYuUZ7Mtuz4H1QVodnm02ktAKv8DCCwQABoMNjM3NDIzMTgzODA1Igz5b0H7ldc2I7ux2pgq3AMC5WT1XDoyO8QxW%2BFj%2BRSpYN%2Bma6BmsF03REtzyjhQwlSDkI0DJ4gLEbUi8TYddDGYux38OboCkbQJC%2FQvGpcViYK%2B0cIyWf%2FllmMFNSwfiz12buKxQbsloTmH2n2qcx792r1aMbv%2BOaUFGD65hX2%2F75rES4bnmbNfUWxwIgQs00LPcY8dFm1Ix9HdF8BD8ZT4lT9ZZrnmlwIBK%2Fz1F47ZFG744BCANe6yL9J4x5LMTLcQ8WCnSVQgpTnhgH2AZIezyne052YDnwcXB5cDghpfTlyIS8lgyd44uPSKcDetLu2F%2BcSBkirnXxlHoSeboZbrMS%2FUF0qcoMluDBqQ1o%2Bu8bgqZ%2FKc2i8hkWQGURC5TVjGOtibl9msZ1N%2FVHYuzt6XCE3oXf7aT0zqQNg3veHsrR53PSy5Ncdp6LzHxWnzd3sffV%2FKVvjT4hN3bqZrUoighhoB%2B7eLPIN3%2F1a9Y4Vu0cnojuiTIVN4OLq2b8jv6t6qBfwNs6hseTB4dxpSo6NrwmV20B1G7h%2FrZqVtJj2HFrmauErfjfVI%2Botq39L0AJv3gPQ72r9tSNhuK4RMvPKedCaMhwO7dTIZzh5NVa9HujlYaDaSOAuC0CBufm4L%2Fd8vbfLox4ZGl85SbzCcm4jEBjqkAcshYvoRTl6EIEnXqFTHqohS%2FSNuz9xFtOq7UYsfPw4ZLDnRrUlpsi6HwdWCNOSMojmxHFiXJ9nJ5MArnagq133TVUmycH0TQwCp5xB6Gl3X7GqbU9w3Pztz1VwcsRNFrA93cTgU8U6i569I0coUJeyGSq49agMT0PfrXUBk5LhH7n4xnCjH%2FGR2RhrTZctQlX7NfrlriPyHSijwBhCkk0o03%2Bj4&X-Amz-Signature=bfd65380cad1842b71738dec1069816b30be9df95f31fbd6db3726d05d05f3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/98892056-a290-4d59-a57a-9c28328af9e4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XLVRNY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDaWMWRhgGXQxA382TKQWpSZyxcPF6NEcC7XBNNZABN8AIhANIlC%2FmGTq12hehKcZ3AIYuUZ7Mtuz4H1QVodnm02ktAKv8DCCwQABoMNjM3NDIzMTgzODA1Igz5b0H7ldc2I7ux2pgq3AMC5WT1XDoyO8QxW%2BFj%2BRSpYN%2Bma6BmsF03REtzyjhQwlSDkI0DJ4gLEbUi8TYddDGYux38OboCkbQJC%2FQvGpcViYK%2B0cIyWf%2FllmMFNSwfiz12buKxQbsloTmH2n2qcx792r1aMbv%2BOaUFGD65hX2%2F75rES4bnmbNfUWxwIgQs00LPcY8dFm1Ix9HdF8BD8ZT4lT9ZZrnmlwIBK%2Fz1F47ZFG744BCANe6yL9J4x5LMTLcQ8WCnSVQgpTnhgH2AZIezyne052YDnwcXB5cDghpfTlyIS8lgyd44uPSKcDetLu2F%2BcSBkirnXxlHoSeboZbrMS%2FUF0qcoMluDBqQ1o%2Bu8bgqZ%2FKc2i8hkWQGURC5TVjGOtibl9msZ1N%2FVHYuzt6XCE3oXf7aT0zqQNg3veHsrR53PSy5Ncdp6LzHxWnzd3sffV%2FKVvjT4hN3bqZrUoighhoB%2B7eLPIN3%2F1a9Y4Vu0cnojuiTIVN4OLq2b8jv6t6qBfwNs6hseTB4dxpSo6NrwmV20B1G7h%2FrZqVtJj2HFrmauErfjfVI%2Botq39L0AJv3gPQ72r9tSNhuK4RMvPKedCaMhwO7dTIZzh5NVa9HujlYaDaSOAuC0CBufm4L%2Fd8vbfLox4ZGl85SbzCcm4jEBjqkAcshYvoRTl6EIEnXqFTHqohS%2FSNuz9xFtOq7UYsfPw4ZLDnRrUlpsi6HwdWCNOSMojmxHFiXJ9nJ5MArnagq133TVUmycH0TQwCp5xB6Gl3X7GqbU9w3Pztz1VwcsRNFrA93cTgU8U6i569I0coUJeyGSq49agMT0PfrXUBk5LhH7n4xnCjH%2FGR2RhrTZctQlX7NfrlriPyHSijwBhCkk0o03%2Bj4&X-Amz-Signature=22302041a02331562d314887e168f0c12fce04afaec76d138d5c2d4bbf641287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/90f2b601-1ecc-46b5-9a3c-88b85490bebc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XLVRNY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDaWMWRhgGXQxA382TKQWpSZyxcPF6NEcC7XBNNZABN8AIhANIlC%2FmGTq12hehKcZ3AIYuUZ7Mtuz4H1QVodnm02ktAKv8DCCwQABoMNjM3NDIzMTgzODA1Igz5b0H7ldc2I7ux2pgq3AMC5WT1XDoyO8QxW%2BFj%2BRSpYN%2Bma6BmsF03REtzyjhQwlSDkI0DJ4gLEbUi8TYddDGYux38OboCkbQJC%2FQvGpcViYK%2B0cIyWf%2FllmMFNSwfiz12buKxQbsloTmH2n2qcx792r1aMbv%2BOaUFGD65hX2%2F75rES4bnmbNfUWxwIgQs00LPcY8dFm1Ix9HdF8BD8ZT4lT9ZZrnmlwIBK%2Fz1F47ZFG744BCANe6yL9J4x5LMTLcQ8WCnSVQgpTnhgH2AZIezyne052YDnwcXB5cDghpfTlyIS8lgyd44uPSKcDetLu2F%2BcSBkirnXxlHoSeboZbrMS%2FUF0qcoMluDBqQ1o%2Bu8bgqZ%2FKc2i8hkWQGURC5TVjGOtibl9msZ1N%2FVHYuzt6XCE3oXf7aT0zqQNg3veHsrR53PSy5Ncdp6LzHxWnzd3sffV%2FKVvjT4hN3bqZrUoighhoB%2B7eLPIN3%2F1a9Y4Vu0cnojuiTIVN4OLq2b8jv6t6qBfwNs6hseTB4dxpSo6NrwmV20B1G7h%2FrZqVtJj2HFrmauErfjfVI%2Botq39L0AJv3gPQ72r9tSNhuK4RMvPKedCaMhwO7dTIZzh5NVa9HujlYaDaSOAuC0CBufm4L%2Fd8vbfLox4ZGl85SbzCcm4jEBjqkAcshYvoRTl6EIEnXqFTHqohS%2FSNuz9xFtOq7UYsfPw4ZLDnRrUlpsi6HwdWCNOSMojmxHFiXJ9nJ5MArnagq133TVUmycH0TQwCp5xB6Gl3X7GqbU9w3Pztz1VwcsRNFrA93cTgU8U6i569I0coUJeyGSq49agMT0PfrXUBk5LhH7n4xnCjH%2FGR2RhrTZctQlX7NfrlriPyHSijwBhCkk0o03%2Bj4&X-Amz-Signature=ad1dd415989ad43a15d9b3ff1c4c0e26ec0d9420d06897814ea3cc89c1c86826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/733c2da0-0827-4e07-9fee-80eec29ffdce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XLVRNY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDaWMWRhgGXQxA382TKQWpSZyxcPF6NEcC7XBNNZABN8AIhANIlC%2FmGTq12hehKcZ3AIYuUZ7Mtuz4H1QVodnm02ktAKv8DCCwQABoMNjM3NDIzMTgzODA1Igz5b0H7ldc2I7ux2pgq3AMC5WT1XDoyO8QxW%2BFj%2BRSpYN%2Bma6BmsF03REtzyjhQwlSDkI0DJ4gLEbUi8TYddDGYux38OboCkbQJC%2FQvGpcViYK%2B0cIyWf%2FllmMFNSwfiz12buKxQbsloTmH2n2qcx792r1aMbv%2BOaUFGD65hX2%2F75rES4bnmbNfUWxwIgQs00LPcY8dFm1Ix9HdF8BD8ZT4lT9ZZrnmlwIBK%2Fz1F47ZFG744BCANe6yL9J4x5LMTLcQ8WCnSVQgpTnhgH2AZIezyne052YDnwcXB5cDghpfTlyIS8lgyd44uPSKcDetLu2F%2BcSBkirnXxlHoSeboZbrMS%2FUF0qcoMluDBqQ1o%2Bu8bgqZ%2FKc2i8hkWQGURC5TVjGOtibl9msZ1N%2FVHYuzt6XCE3oXf7aT0zqQNg3veHsrR53PSy5Ncdp6LzHxWnzd3sffV%2FKVvjT4hN3bqZrUoighhoB%2B7eLPIN3%2F1a9Y4Vu0cnojuiTIVN4OLq2b8jv6t6qBfwNs6hseTB4dxpSo6NrwmV20B1G7h%2FrZqVtJj2HFrmauErfjfVI%2Botq39L0AJv3gPQ72r9tSNhuK4RMvPKedCaMhwO7dTIZzh5NVa9HujlYaDaSOAuC0CBufm4L%2Fd8vbfLox4ZGl85SbzCcm4jEBjqkAcshYvoRTl6EIEnXqFTHqohS%2FSNuz9xFtOq7UYsfPw4ZLDnRrUlpsi6HwdWCNOSMojmxHFiXJ9nJ5MArnagq133TVUmycH0TQwCp5xB6Gl3X7GqbU9w3Pztz1VwcsRNFrA93cTgU8U6i569I0coUJeyGSq49agMT0PfrXUBk5LhH7n4xnCjH%2FGR2RhrTZctQlX7NfrlriPyHSijwBhCkk0o03%2Bj4&X-Amz-Signature=ca4543eb1b1a884e1e18c40b1b4647c07a49a452b5f564ecd73baf56982d5e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


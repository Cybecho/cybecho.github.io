---
title: "github 커밋 자동화 프로그램"
date: 2023-03-23T00:00:00.000Z
draft: false
tags: ["Git", "ubuntu", "GCP"]
series: ["진심글쓰기", "Git", "Tips"]
description: "구글 클라우드를 이용한 커밋 자동화 API 제작 방법을 설명하며, 무료 계정 생성, 서버 구축, Git 설치 및 로그인, 자동 커밋 스크립트 작성, GitHub 토큰 발급, 스크립트 스케줄링, 파일 생성 매크로 제작 등을 포함합니다. 최종적으로 하루에 한 번 자동으로 커밋하는 서버 API를 완성하는 과정을 안내합니다."
notion_id: "de7dbe88-7e27-4d64-93b6-46269b476e7d"
notion_url: "https://www.notion.so/github-de7dbe887e274d6493b646269b476e7d"
---

# github 커밋 자동화 프로그램

> **Summary**
> 구글 클라우드를 이용한 커밋 자동화 API 제작 방법을 설명하며, 무료 계정 생성, 서버 구축, Git 설치 및 로그인, 자동 커밋 스크립트 작성, GitHub 토큰 발급, 스크립트 스케줄링, 파일 생성 매크로 제작 등을 포함합니다. 최종적으로 하루에 한 번 자동으로 커밋하는 서버 API를 완성하는 과정을 안내합니다.

---

![Image](image_7694b81670ff.png)


> 끝났으니까 컴터 꺼버리고 잠이나 주무십쇼.

> 이제 하루1커밋을 깜빡해도 좋습니다.








---



<details>
<summary>메모</summary>


## Q. Crantab을 수정해도 초기화가 안됩니다

🔗 [https://ciksiti.com/ko/chapters/3128-troubleshooting-crontab-not-running--linux-hint](https://ciksiti.com/ko/chapters/3128-troubleshooting-crontab-not-running--linux-hint)

🔗 [https://shlee0882.tistory.com/270](https://shlee0882.tistory.com/270)

## Q. cd /path/to/your/repo 에는 어떤 경로를 넣어야 합니까?

`**/path/to/your/repo**`는 당신이 클론한 레포지토리의 경로를 입력하시면 됩니다. 예를 들어, 만약 당신이 레포지토리를 `**/home/user/my-repo**`경로에 클론했다면, `**/path/to/your/repo**`대신 `**/home/user/my-repo **`를 입력하시면 됩니다.

## Q. 6시간마다 commit.SH를 한번씩 자동커밋하는 방법은 무엇일까요?

crontab을 이용하면 매 시간마다 스크립트 파일을 실행할 수 있습니다. 6시간마다 실행하려면 다음과 같이 설정하면 됩니다.

```plain text
0 */6 * * * /path/to/commit.sh

```

[위 설정은 매 시간 0분에 스크립트 파일을 실행하며, 실행 주기는 6시간입니다](https://m.blog.naver.com/shino1025/221432633410)

## Q. git push -f origin main git add . git commit -m "edit on SSH" 를 순차적으로 입력했습니다. 하지만 다음과 같은 에러 메시지를 받았습니다. On branch main Your branch is up to date with 'origin/main'. nothing to commit, working tree clean 어떻게 해결해야하나요?

에러 메시지를 보면 "nothing to commit, working tree clean"이라는 메시지가 나타납니다. 이는 현재 로컬 저장소의 변경 사항이 없다는 것을 의미합니다.

따라서, `**git add .**` 명령어를 실행하여 변경 사항을 추가한 후, `**git commit -m "edit on SSH"**` 명령어를 실행하여 변경 사항을 커밋해야 합니다.

만약 이전에 이미 커밋을 했다면, `**git push -f origin main**` 명령어를 실행하여 원격 저장소에 변경 사항을 강제로 push할 수 있습니다.

## Q. 간단하게 vi를 이용해 text.txt 를 추가시켰습니다. 이제 이 변경사항을 GCD SSH에서 push하고 commit하는 일련의 과정을 정리해 주십시오.

변경 사항을 추가한 후, 다음과 같은 명령어를 실행하여 변경 사항을 커밋하고 원격 저장소에 push할 수 있습니다.

```plain text
git add text.txt
git commit -m "Add text.txt"
git push origin main

```

## Q. 단순 코드 실행으로 일정 주기 파일 생성 스크립트

```plain text
nano random.sh
```

- nano 편집기가 실행됩니다.
- 다음과 같은 스크립트를 작성합니다.
```plain text
#!/bin/bash
while true
do
  filename=$(date '+%Y-%m-%d_%H-%M-%S').txt
  touch /path/to/directory/$filename
  sleep 3600
done
```

  이 스크립트는 while 루프를 사용하여 무한히 실행됩니다. 루프 내에서는 현재 날짜와 시간을 사용하여 파일 이름을 생성하고 touch 명령어를 사용하여 해당 파일을 생성합니다. 그런 다음 sleep 명령어를 사용하여 1시간 동안 대기합니다.

  위의 스크립트에서 /path/to/directory/ 부분은 생성하려는 파일이 저장될 디렉토리 경로로 변경해주시면 됩니다.

- Ctrl + X를 눌러서 저장하고 나옵니다.
1. 스크립트를 실행합니다.
  - 다음 명령어를 입력하여 스크립트를 실행합니다.
```plain text
bash random.sh &
```


## Q. 스크립트가 실행되고 있다는것을 확인하는 방법

스크립트가 실행되고 있는지 확인하는 방법은 다음과 같습니다.

1. 터미널에서 다음 명령어를 입력합니다.
```plain text
ps aux | grep random.sh
```

1. 실행 중인 스크립트의 PID를 확인합니다.
1. 스크립트를 중지하려면 다음 명령어를 입력합니다.
```plain text
kill -9 PID
```

위의 명령어에서 PID는 실행 중인 스크립트의 PID 번호입니다.


[r](http://script.sh/)andom.sh 라는 이름을 가진 프로세스를 전부 종료하는방법

현재 실행 중인 스크립트가 3개인 것 같습니다. 이 경우에는 다음 명령어를 사용하여 모든 스크립트를 종료할 수 있습니다.

```plain text
pkill -f random.sh
```

위의 명령어는 "random.sh"라는 이름을 가진 모든 프로세스를 종료합니다.

이상입니다. 도움이 되었길 바랍니다!

## Q. [README.md](http://readme.md/) 파일을 자동으로 작성하는 방법

네, 있습니다. 아래와 같이 script.sh 파일을 생성하고 코드를 저장한 후에 `**bash script.sh**` 명령어를 입력하면 됩니다.

```plain text
#!/bin/bash

while true
do
    echo "$(date) - $(openssl rand -hex 12)" >> README.md
    sleep 600
done

```

위 코드에서 `**openssl rand -hex 12**` 부분이 랜덤한 문자열을 생성하는 부분입니다. 이 부분을 수정하면 원하는 길이와 형태의 랜덤 문자열을 생성할 수 있습니다.

위 코드를 실행하기 전에 `**openssl**` 이 설치되어 있어야 합니다. 만약 설치되어 있지 않다면 아래 명령어로 설치할 수 있습니다.


아마 설치되어있을겁니다

```plain text
sudo apt-get install openssl
```

위 코드를 실행하기 위해서는 `**README.md**` 파일이 이미 존재해야 합니다. 만약 존재하지 않는다면 아래 명령어로 파일을 생성할 수 있습니다.

```plain text
touch README.md
```

만약 같은 폴더에 존재한다면 아래와 같이 상대경로로 표기할 수 있습니다.

```plain text
#!/bin/bash

while true
do
    echo "$(date) - $(openssl rand -hex 12)" >> ./README.md
    sleep 600
done
```


### 여기서 마크업 언어로 줄바꿈까지 넣으려면 코드를 다음과 같이 수정해준다

```shell
#!/bin/bash

while true
do
    echo "$(date) - $(openssl rand -hex 5) $(echo -e "<br/>")">> ./README.md
    sleep 3600
done
```



`#!/bin/bash echo "$(date) - $(openssl rand -hex 5) $(echo -e "<br/>")">> ./README.md` 해당 코드를 가진 [`autoWriteREADME.md`](http://autowritereadme.md/) 파일을 `crontab -e` 에서 `*/5 * * * * /home/thquddnr123/AutoCommit/decreaseGuilty/autoWriteREADME.sh `를 작성해여 5분마다 코드를 실행하려고 합니다. [README.md](http://readme.md/) 와 [autoWriteREADME.sh](http://autowritereadme.sh/) 둘 다 chmod +x 로 권한을 준 상태입니다. 하지만 시간이 되어도 README.md가 업데이트되지 않습니다. 하지만 bash [autoWriteREADME.sh](http://autowritereadme.sh/) 로 직접 실행하면 코드는 정상적으로 작동됩니다. 저는 자동으로 5분마다 실행되는 코드를 작성하고싶습니다. 어떻게 해야합니까?


해당 코드가 crontab에서 실행되지 않는 이유는 환경 변수 문제일 가능성이 높습니다. crontab에서는 일반적으로 사용자의 환경 변수를 사용하지 않기 때문입니다. 따라서 해당 스크립트 파일에서 사용하는 환경 변수를 직접 지정해주어야 합니다. 예를 들어, 다음과 같이 스크립트 파일을 수정하시면 됩니다:

```shell
#!/bin/bash
source /home/thquddnr123/.bashrc
cd /home/thquddnr123/AutoCommit/decreaseGuilty/
echo "$(date) - $(openssl rand -hex 5) $(echo -e "<br/>")">> ./README.md

```

위와 같이 수정하시면 crontab에서도 정상적으로 실행될 것입니다.


</details>


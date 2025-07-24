---
title: "Ubuntu에 Python 3.11설치"
date: 2023-11-24T00:00:00.000Z
draft: false
tags: ["AWS"]
series: ["Let's Linux!"]
description: "Ubuntu에 Python 3.11을 설치하는 방법으로는 소스 코드 다운로드 및 설치 또는 PPA를 통한 설치가 있으며, pip 설치 후 beautifulsoup4와 requests 라이브러리를 설치할 수 있습니다. 설치 후 버전을 확인하는 방법도 안내됩니다."
notion_id: "7044422c-73d2-41e4-ae0b-1ede52538da7"
notion_url: "https://www.notion.so/Ubuntu-Python-3-11-7044422c73d241e4ae0b1ede52538da7"
---

# Ubuntu에 Python 3.11설치

> **Summary**
> Ubuntu에 Python 3.11을 설치하는 방법으로는 소스 코드 다운로드 및 설치 또는 PPA를 통한 설치가 있으며, pip 설치 후 beautifulsoup4와 requests 라이브러리를 설치할 수 있습니다. 설치 후 버전을 확인하는 방법도 안내됩니다.

---

# apt upgrade && update

```latex
sudo su
```

```latex
sudo apt upgrade
sudo apt-get upgrade
```

```latex
sudo apt update
sudo apt-get update
```

# 파이썬 Ubuntu에 설치

> 💡 ****ubuntu 20 에 python을 설치하는 방법****
>
> 우선 beautifulsoup4을 쓰기 전에 서버상에 파이썬부터 설치해야겠죠?
>
> Ubuntu 에서 Python 을 설치하는 방법은 아래의 방법 중 하나를 선택하시면 됩니다.
>
>
> <details>
> <summary>소스 코드를 다운로드 받아서 설치하는 방법 (토글 열기)</summary>
>
> ```shell
> wget https://www.python.org/ftp/python/3.11.2/Python-3.11.2.tgz
> tar -xvf Python-3.11.2.tgz
> cd Python-3.11.2/
> ./configure --enable-optimizations
> make -j 4
> sudo make altinstall
>
> ```
>
> </details>
>
> **터미널을열고 아래의 명령어를 입력하여 설치하는 방법 (권장)**
>
> ```shell
> sudo add-apt-repository ppa:deadsnakes/ppa
> sudo apt update
> sudo apt install python3.11
> ```
>
>
> **기본 명령어 파이썬 3.11 로 변경하는 방법**
>
> `nano` 혹은 `vim` 편집기로 터미널 설정을 열어준다
>
> ```shell
> nano ~/.bashrc
> ```
>
> ```shell
> nano ~/.zshrc
> ```
>
> 그리고 맨 아래에 다음 명령어를 추가해준다
>
> ```shell
> alias python="python3.11"
> ```
>
>
> 그리고 다음 명령어로 설정을 적용해준다 (둘 중 하나 사용하는 터미널로)
>
> ```shell
> source ~/.bashrc
> ```
>
> ```shell
> source ~/.zshrc
> ```
>
>
>
> Python 을 설치하실 때 특정 디렉토리에 설치하실 필요는 없습니다. 
>
> 위에서 안내드린 명령어를 입력하시면 자동으로 시스템에 설치됩니다.
>
>

# 파이썬 pip설치

> 💡 ****ubuntu 에서 beautifulsoup4 를 설치하는 방법****
>
> 일단 pip부터 설치합시다
>
> ```shell
> curl -O https://bootstrap.pypa.io/get-pip.py
> python3 get-pip.py --user
> pip install awsebcli --upgrade --user
> ```
>
>
> Ubuntu 20 에서 Python 3.11 을 설치하신 후에는 pip3 를 이용하여 beautifulsoup4 를 설치하실 수 있습니다. 아래의 명령어를 터미널에서 실행해보세요.
>
> ```shell
> sudo apt-get install python3-pip
> sudo pip3 install beautifulsoup4
> sudo pip3 install requests
> ```
>
>
> 우분투에 파이썬과 pip를 모두 설치하면 다음 명령어로 설치를 확인해봅시다
>
> ```shell
> python3 --version
> python3 -m pip list
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/62f52828-5dac-47b7-93fc-16646626d61b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHR75K6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGk28ebA9fnJc3Ivp5DVtBYpQNk5BA6fEUbVJ4j1sismAiBlgZ8OVYl8VROxIr5H%2BdAsLjiB19beDoeWhuwYSgTMTSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMoO%2BRgCE5MYWtelNWKtwDsoNjNPIHsjJooRCpgAqLtWPHj2HJfTqOSQ9uoTyE%2FT%2FATsAj9Yw43BWnmRk3g4wA6wcZhzdcPV8TF7zQi1uyWLTN%2BX6KqoW8R6jK5I8Tl71lIfPsEIih%2BsdSkXqO8D90Pj5fH1o6JiegNcFbYdemXYxxBeQo3OZjs2GgwgLgbLR%2BiyCy8h4KW7tMxZnilQ6wCt1NOQPhLl9nH6FcKC0dfsAI%2B2ZfiFJiwAzFpcQGi6pJsuWIUY7xwwR8e9owX0mQdwwud3Q7CAkJxIJBwWeqrkbp2NBplasBEdIivcPipeEgDjz7Cq6hj0APR6wPv490SNArXcLfhZsiLWiB1ersF63n5PRdNDOO7fhZtRNdRUc4CINehQbK01dkke3vuJRPcjZUWNjBXleSL%2F5ekTK8zI44R1xqDthXogomwZ28IXSWrjSn6dpiDbYpGCO7gDPqnhyGtBObNASEil0hbXovVynkbY3HKRTxHrRsi9aJTP1XYNpJzJjOuoQJ64EugvrMFxrRApMpDsDLQBc6ht9gCXX9k%2FBsQf7l4GZ84ApxmzTe44hdZYd96OB3MmBNMUaIeM2gvOXJHTaBDeyRfDBIWwhXns80TxcusKO%2FsRsCPgNM7Q%2F1xqYfW6HY4B0wlfWHxAY6pgEX46bs5lbiTKWZ6ZRRrGBztc1zIh7hpJ1Cz1QVZZiM2DOU%2BPDnsul%2Fuy24l94yq8zFqd6gDH%2FF3fLBM6FYToiLbhXUaVJi3%2Fcagn%2Blvu5HZkJHlutmWJ%2BOHB%2FKQNXYmX61qJaeKLB7YBJPFSTMH4y2rY21w22egKw12kG%2BUDncWcWsokJjZiQt9Row1rRDLpt%2FcmDewHe%2FcySioFkY4DBV9vnNsMFx&X-Amz-Signature=4d7e30826c6d0dbcc22aad56f66403db01bf3bdc030a9c731c2511b747837c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> <details>
> <summary>ubuntu에서 파이썬을 3.11 을 설치했는데, python3 --version 을 입력하니 python 3.8.10 이 등장하는 이유가 뭘까?</summary>
>
> </details>
>
>


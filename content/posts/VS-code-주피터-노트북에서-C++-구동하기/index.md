---
title: "VS code 주피터 노트북에서 C++ 구동하기"
date: 2023-06-14T00:00:00.000Z
draft: false
tags: ["Other"]
series: ["개발환경"]
description: "VS Code에서 Jupyter Notebook을 사용하여 C++ 코드를 실행하기 위한 환경 설정 방법을 설명합니다. MAC에서 homebrew와 anaconda를 설치하고, zsh에 conda 경로를 등록한 후, xeus-cling 커널을 설치하여 C++ 코드를 실행할 수 있습니다."
notion_id: "58e389d1-3eb6-40fe-95fc-1a38d8f66c55"
notion_url: "https://www.notion.so/VS-code-C-58e389d13eb640fe95fc1a38d8f66c55"
---

# VS code 주피터 노트북에서 C++ 구동하기

> **Summary**
> VS Code에서 Jupyter Notebook을 사용하여 C++ 코드를 실행하기 위한 환경 설정 방법을 설명합니다. MAC에서 homebrew와 anaconda를 설치하고, zsh에 conda 경로를 등록한 후, xeus-cling 커널을 설치하여 C++ 코드를 실행할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/372d0e51-adcd-426f-b3a9-d7271a9765c4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQAYOB7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC3UFB0%2BeZnGbMfe%2BLL0yOm2x%2BRfv0sPz30tZ264TpKPAIgfoVcPErBCH0wkFmq0NVAJ%2Bt9cVKqJhfCPULmlg7IIbgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMZNnkf6dwCjZahViSrcAwJsq4lG7OSg3lKYCXqyCSmBG519mBwIpSdqpeg5w7k6XjFYgv3sjkUfDX3ms14dX05Itr7U8sfWmXWT%2FENvPke0el2rJxvn9sXtjUo43hqgvuSyWSUazzQbJQ5v3Po%2BgoISGgoONxaUyIDMFwYDBTbBcWHaydFGVgWptPqwjhbg96a%2BJb2vkutyjopqHNqti10%2Fsbx1jdxSUXLgLZns7%2BLEMhQQwQ2uRy9mpDIoZDDnHeeW1bdGHrwIuksYbPdnhlMc4oQvYz3ps1D4Qz2jzNbcl1qQFhkAQ4yPnv6QriISwHbi3f68n5mfm01NbBMHYMxO3aCPdcX3hCuFPfSeCNorHA07gBVw0GLqLt9kN5Q1%2FZvlIciYfUtT8sI1RX0lyqlTv2lHeyjlljMVWi0%2B1KPcjbZUaTTlPX7lJt3CqQ%2BZsf9QylGiJEB6jKBS4q1P3J%2BoNzVyhQmoIzovL0Bsc5eD0BDvXceUGLZkn8GHiCCbDK3FUbccI1V2Z68dk%2F4koVsjKsBg2CmXbugPU4eTbjlyLbBVkqFr0FyRjFLcbEj%2FWY6yuGMJQ4%2FcIw%2Bv4HMr2vjeYHxRsp3jVfzI3YVaqrPPPj6R3pdnOYKmGjurZBrMHWXFyaCtuKMkAPCaMMfOh8QGOqUBDxpO%2BW%2BI77zKDJT%2B5%2BEcPOuievlzXr9z57Gvb2tTy5m0EjveHxQSlQdgj8yi4d5biMH8HG3nXIWezzFFlEIzOJr6MW2VNhi8cGdAzkClfVuyQGHCRGTeVH4gjwhbJbCo3Yv8S9igS16eJ4oLBIgONf9amwR3gccsee%2FpYJMOnvZukYQFYw9yYlaj49%2FEpLV7IYixSoelgjOPUwSMQMJlSGTFCR3v&X-Amz-Signature=0689b16443baef222d7b3e0a89d663626ce5f904ede258886f5cee236e805372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://stackoverflow.com/questions/66408814/running-c-jupiter-notebook-in-vscode-insiders](https://stackoverflow.com/questions/66408814/running-c-jupiter-notebook-in-vscode-insiders)

🔗 [https://learnopencv.com/xeus-cling-run-c-code-in-jupyter-notebook/](https://learnopencv.com/xeus-cling-run-c-code-in-jupyter-notebook/)

### 환경 조건

1. MAC환경에서 homebrew 설치
1. 터미널에 zsh 설치
1. VSCode
1. VSCode 내부에서 C/C++ 환경설정

1. VSCode jupyterNotebook 플러그인 설치
1. anaconda 설치
1. xeus-cling 설치

# ananconda 설치



```c
brew install --cask anaconda
```


### →conda 사용을 위해 zsh에 conda path 등록

```shell
/usr/local/anaconda3/bin/conda init zsh
```

```shell
/opt/homebrew/anaconda3/bin/conda init zsh
```


> 💡 **homebrew로 설치한 anconda 디렉토리 위치 확인하는방법**


### → 다음명령어를 통해 zsh를 적용합시다

```shell
source ~/.zsh
```


### → conda upda

```shell
conda update conda
```


Visual Studio Code에서 Jupyter Notebook을 사용하려면, View 탭에서 jupyter로 검색하면 "select interpreter to start jupyter server"를 선택합니다. 작업할 폴더를 VS code로 열고 확장자 ".ipynb"로 파일을 만든 후 클릭하면 VS code 내 Jupyter Notebook이 실행됩니다¹.

C++를 실행하기 위해서는 xeus-cling을 설치해야 합니다. xeus-cling은 C++ 커널입니다. xeus-cling을 설치한 후에는 VS Code Insiders에서 xeus-cling 커널을 사용하여 C++ 코드를 실행할 수 있습니다.


xeus-cling은 C++ 프로그래밍 언어를 위한 커널입니다. xeus-cling은 Jupyter 프로토콜을 구현한 것으로, Jupyter 노트북에서 C++ 코드를 실행할 수 있도록 합니다


```c
conda install -c conda-forge xeus-cling
```



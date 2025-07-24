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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/372d0e51-adcd-426f-b3a9-d7271a9765c4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFFPSUO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEKCRpZiG%2BozQ1yQa7TuCQmpJ695byNOhXqurChXmI9FAiBvYyNJ3T7IooDov3v4Q5n70187cNKbX%2Fj7pOqkpXMyyyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMCqBqcdh3ayOmER7xKtwDbRPAZQpmfDss1H9G4n4wdfBTVXM5MN0W7cAjT9QHUmWtK6Pu6d2OQKU0R4Hb1YiV5zOc2rgBn005bA9OMy0dHuNsLMg9r1nAbwfW6GcSh9J3mXSCXH2sUwNeRMEPnDH8l4NPycu6PIYfwKCC8yPx%2FUs1VQbOsGS8jVj7yKhEbJI08mEE53Fm1MdBrJoH8MMGaKztiQcp3Bp5m%2FbN%2BJF3FHjiDn6fTbDpl5UPpzse9vafZ4kF3HOAaVbCbF3D1Kzn8zLIr3ioNC0Ii2deqNrUhBoxTp9PnR5WtCoDUCzU%2BRI4h0oLhirCni1FJoZt5bDnZACm9OFsz3DdE%2BI%2BO1IbAwHw7ZhIxXmIDeqMAefA1WhLEjv2zv%2F7QE4N1zfrcp%2BvD%2Fuc8MQAJLC951k3RVpzJhHBLGATjtZ%2FWtkuL0ORa2C8k0BOoC4Ljx2Bl%2FxVknZwwEdR3TJN31kkD43Vg7hXr%2FdrLJmXjCDccVXbtiTHPpaBMsE%2BFPmpBNBst%2BiVD47wgCTUVr5VufkNSkC49eS2e4j3wjKLwp2VlknxirvDInOtScnrbhFluGmMcJ9vGgxcjpa8rc5w0qpAFd7tYlspYtcJBwbI7N49YYIFn0Fx%2F47Ugfv1EkZqVx34cZAwgtCHxAY6pgF3MBfUZDONzWI76vWIfReEI1K3vYAQjBtGy3V6gjYLS1cyk6jAN6sXdkC52MjrxliP2b7F3OAoN%2B9sPWhpikZjJmAl%2B4Da8dsbz3qLeJisiMgaEl%2F%2FFWm%2B1mjzmPNNz9o6hLtbddT%2FVx%2B4XFU3KPHDXz44NDw2%2FXQtLMEK5uUfU1rTTEDkE%2BJkAzZT9m8BjxWsrCvuF3ckhxJIwXjKGY5f8U6q4cCZ&X-Amz-Signature=321b1e29f5aa294d4665fe815ccb06806c836717175c4ce205746df8851362ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



---
title: "VS code 주피터 노트북에서 C++ 구동하기"
date: 2023-06-14T00:00:00.000Z
draft: false
tags: ["Other"]
series: ["개발환경"]
description: "VSCode에서 C++를 실행하기 위해서는 MAC 환경에서 homebrew와 anaconda를 설치하고, zsh를 설정한 후, Jupyter Notebook 플러그인을 설치해야 합니다. xeus-cling 커널을 설치하여 C++ 코드를 실행할 수 있으며, 필요한 명령어와 설정 방법이 안내되어 있습니다."
notion_id: "58e389d1-3eb6-40fe-95fc-1a38d8f66c55"
notion_url: "https://www.notion.so/VS-code-C-58e389d13eb640fe95fc1a38d8f66c55"
---

# VS code 주피터 노트북에서 C++ 구동하기

> **Summary**
> VSCode에서 C++를 실행하기 위해서는 MAC 환경에서 homebrew와 anaconda를 설치하고, zsh를 설정한 후, Jupyter Notebook 플러그인을 설치해야 합니다. xeus-cling 커널을 설치하여 C++ 코드를 실행할 수 있으며, 필요한 명령어와 설정 방법이 안내되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/372d0e51-adcd-426f-b3a9-d7271a9765c4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHX4VKG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJFMEMCIFtOIJ9Zye2LRwuiUsqCGXIqYAdBxLN8JMmZdk2XDybWAh8egMzTGBf%2F7HVKssr9PJiSxMHKeD9Z6JYx5JzhlhJ4Kv8DCCwQABoMNjM3NDIzMTgzODA1IgxLd2%2FP7tqqCEkyGhYq3ANVYc3W%2BpGYUyx9%2BSA2JMv10G4mMBH3TrURav9DWhr%2BZBi9ZLyHIu6UlzRijNPAgfsacvkxW0IFamV8tqZ0zXUMLDAlaqkFe6v3fhCrB1WoAQgn8PpVhDLFB5CeMIuTjApXICVc1q1m1QNTLhl8hH7x%2FofME2Jd998MPpLtHoB12lw1uD%2FVXPe7t8Lq538kGSk75dyhhdVcHceY01Ty1MqHdpPaQEPjMis1vTRDk%2FPrLbaW6%2BToUF%2BjOvYajEqBvEAVIzaa3d724a0HlZl3MD0BxbmTQpzAyD7ZTnRaD6fiH%2BTR%2FfU7RiBoRo9xQyB6%2FPKLl0X%2F3LXldr2qLcFcFi2oSm93nfpjmVziiOr2owKvL4VQg8vYaYXUqEbOVLMCu4dsWYxtJE9mwajg2ToDCzHSAgRZRnNa4sKzSAKJeuTTUZ0KNNoBAKVFSACPS7fOsEV5oQ8dkI7ayzL2rWfko2tlEWudniLzdq6gqnQiiLOwajDxdwDCZoyXDz66oGXh43AwkDbwWPSBaYW6yNkwGQBb4sKsMXPle2QRaz2oryyNsilo85HUGdpMjIelDuNvMzIEMDHjZNGkBbFjxI2JMxm2TIMn0vyGZ4F6eQi5YbSUbFywfXZ8%2FyhFA66CmzCTnIjEBjqnAeakA4mF7RylzlWYnh5aSBDfwJIJA6CB89TMtJdA0Dt1xYmVXYgdMlH5m362voFtXMVUB8RCDIL2kFFrHI1Xd3k7Fu5sKYSiIr%2Boa7MswlS7m7aFT3Bt6ZoRPc9%2F2ZhI%2F%2FN3EZNLMbT9Qsg1DZDylUQX2vxl9UwlamH27%2FgJNX4aRE5k92X8bJXrUVS5gRNAu6zxg1VI63Br5xseyL31WljsgQ7avfhR&X-Amz-Signature=d1c0f75f9621fa39c5b2ddbd52e44433494be0008d9467092cfb75493e960d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
> → 다음 명령어로 디렉토리 위치 확인하기
>
> ```shell
> brew info anaconda
> ```
>
> → 과감하게 다음 멍령어로 conda 디렉토리 위치를 확인할수 있다
>
> ```shell
> brew uninstall acanonda
> ```
>
>


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



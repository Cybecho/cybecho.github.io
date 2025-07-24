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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/372d0e51-adcd-426f-b3a9-d7271a9765c4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGZRT3R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCuAqj82Wkt%2BGYiYMq%2F%2BdL6VMsN9w%2FauT2N2wE9Cb2hQgIgXNjb%2B4iKwY%2B3u91xekgYmeqIae68oOiIzT4L%2BC%2BB9e8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNEHXyeArwi8xSzjWyrcA%2BnxhG2PQlAUvEh%2BwvAURWXoIungu5XUMgAmQoSHmrihnnAIGJWd1WH0xbtWYvJxTxadz7y8T101rhzoBYuRYm2omFURqiF8ZukEth%2B7Xc%2FTWrbTlV2MdnyZ5%2B3uRHwF%2BihYZVvV8gW%2B%2FXJFh3NT%2FkV9hrCTnRnruBQE12vRTUIdso1LdEK714G7s4EVrXDVkMkuZ5LfHO23lp%2BOlhILU2t22gGaBuTHZwG6qXTs8ecrLoD65jwjuS9Z6KxIC3O25GJ0P7RHrZPgZ1kLyY3n%2BBeUiD9l%2F7xqtEpyxzr2rYT0rSRfVGjgOPtIVEa5WDQXykjWhKmo%2BNoCiPjJG%2Buw6NmWog60LYtG3nu%2FOTLbtsQASiWd7c7p63DzMcmlJw92zbmbvK0pnNsz9AgsNy3zTVaoOc8RbU3H5223o5EuerfRj7JCXgOqb7VmiFlhE4ISb3h%2BQGBn%2BkIoJ6%2FeZwiPEBEqLtYRWDuBLbe1iwKW%2Ffxw443ZM9IBxPlGsWmR4nnM58JqPELzvZznP33ZO8tMhFhdYYIwQeetbDtvJ2BGyaVnOc1Z2X%2BytO%2B8znd%2F59%2BN1eZDefUqZOpJuU%2Fc9rE9YOFe8%2BuCBfSenMVhGUBTlZEbw6si7VZdGpbAyzhgMMf2h8QGOqUB%2B5%2F099k%2FuOU%2FbIcoaaw7Rnqd2ympJPoJkTm4j2xsmPcL6axZ4v3wk2se84YXRT1RzxTYhw9%2BVefajGItDSwWbqCEKeHuZRmPLZE9Tk6tdA6xBFFm%2B2YNdOaotcY9u9udHhoIgj6c0URFv2NlSzX%2BoFDWsdjBIiKarAYfVL4cljKbw0%2F3H563pm9xbaA9iWwsvCH9vfEjlwMJLAU8tBcP8ygmhXNi&X-Amz-Signature=fe5305e5b4e6d0d6d3721e1836190684210e2c97b8a72b07c94fcd84a33bdc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



---
title: "stable-diffusion Web UI 설치"
date: 2023-03-28T00:00:00.000Z
draft: false
tags: ["AI", "ubuntu", "Python"]
series: ["AI"]
description: "Stable Diffusion 웹 UI 설치를 위한 가이드로, GitHub에서 레포지토리를 다운로드하고 Python 3.10으로 다운그레이드하여 설치 오류를 해결하는 방법을 설명합니다. VRAM을 줄이는 방법과 다양한 프롬프트 입력 방식, 필수 및 추천 익스텐션에 대한 정보도 포함되어 있습니다. 로컬 서버 웹 호스팅 방법도 간단히 언급됩니다."
notion_id: "a3fc2a94-6365-4500-9281-c7828c7b6f23"
notion_url: "https://www.notion.so/stable-diffusion-Web-UI-a3fc2a94636545009281c7828c7b6f23"
---

# stable-diffusion Web UI 설치

> **Summary**
> Stable Diffusion 웹 UI 설치를 위한 가이드로, GitHub에서 레포지토리를 다운로드하고 Python 3.10으로 다운그레이드하여 설치 오류를 해결하는 방법을 설명합니다. VRAM을 줄이는 방법과 다양한 프롬프트 입력 방식, 필수 및 추천 익스텐션에 대한 정보도 포함되어 있습니다. 로컬 서버 웹 호스팅 방법도 간단히 언급됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a2d2b47e-58c3-4df8-9d64-75776b6ef87d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y37Q6PK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIB2L%2BaKY%2BRAJMWsFDt7g2XNZDrB4uPWfS028OT9RxxxkAiEA%2Bt4QA9R8wfHbSTZ%2FGwSOr1Llx9YqDmRDqvrG4TZZxYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC35CbuiffVZCOc3lCrcA9hFlEQjiAPrekwbxH5XB5PP0lxcKWOO%2FFq45%2FoPt2CxyuxOOLCT1GExLqn6uGagPCMWvSqLVG5vto%2BNwIHqduviLHkA57ANo2M00f6%2B1YPjSSXH7gOJlKgd7dFwDM%2BRV99lwz9QMnuvsxU9MiKI0%2FO%2FqRNT79Pv8uyCo%2B9o2kO0fmRlEBH6oCdabGzmGt63Q56XPgPkoH1y8MUDW7we%2FqqHLM9IIq1t7hZrJ7EVzkH0%2BakwZ%2Brp06Iqt8T2jGxq5rqxqixAcd0mKAUnsv5N3tDf1wG4MH0a0kwihHO%2FsbzvBU2kKpOwq3Rf%2F9b9U8hSk704zn%2BHGA6e%2F6GmwoXzJnC17BbR7KSBNORENj9XzV0kZrD2FU9gBtnDeb7yM1%2BCbBC5Jut5Kk6dq1gvJdkgjyBIPioGqhiCVveKW75LrGcoD05yQ9KZcfWD3LaB9aCaAy%2BGJY%2BIQIU1t00ceUZLady3%2FDeSAh%2Bct8pWLMh59MVLgD7s1%2Fst8e3jlYezHm%2BcBNATO9vUN4%2BqG7fAJ5mjXDkMefCMmUMR3mjY1BYaR19h4qaYm%2FtaORZ5dtjopnbi8RoFN79FDH2YecKAiR2leVGumHWq7ltpuveRn5DG4fGz4QsFvPS%2BdSmSyNDYMMG%2FiMQGOqUBjg%2BVJ16KWtpfYyVLefbAvmXzPksc6xmy7hIpWdM7NtJEx6sDhuqYhdqGsUyOhORKWCzrIK0%2F9J2X%2BurzkSWpJ0uNHwqG83UUAYUAD7I98hzy60GZfhor0LTNiHufSEq6txvSY3X1HhGn67zqdjGc0loAWb4q83Pqbm8vVfRCn0AA%2B%2BHk%2BVR%2Bh6%2FnJ1JkVDbOlJ2ArKJElzAfqa%2FAizCFT3tXgJgH&X-Amz-Signature=42ba0aac7f91a56fca94c7e7f7bc2e7c57636770449d4df169e6f7fa55012bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

아래 레파토지로 다운로드받는것을 추천드립니다.

🔗 [https://github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

```shell
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

# 이 웹사이트만 따라해주시면 됩니다

🔗 [https://rentry.org/voldy](https://rentry.org/voldy)

<details>
<summary>한국어 튜토리얼 따라하기(비추천)</summary>

🔗 [https://skyksit.com/useful/install-stable-diffusion-for-windows/](https://skyksit.com/useful/install-stable-diffusion-for-windows/)

# Windows Chocolatey 설치

🔗 [https://chocolatey.org/install](https://chocolatey.org/install)


윈도우 PowerShell 관리자권한으로 실행하여 다음 명령어를 입력합니다

```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```


설치가 완료되면, 다음 명령어로 설치를 확인할 수 있습니다

```shell
choco
choco -?
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e5355b0e-7f62-4715-a93f-4bc63b82e1a4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXBBF5S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEDlGD3nyVwLHudqikmcFjMhDOAR%2Bu7LzK3cTG7hfn0sAiEA24WWQ21o9zJgy7Ne7D5Tj11x%2FD7gFj0CNUIQJtVgoy8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNEa22zTJJ5NG8hteCrcA%2Bq9CsmFeGateEmMu9Il%2FFY5mNQrtVuCp8MuV7WlkTtWUCL2NGgqPkKrY%2BbYMwQqKSb6uSmUMzJ3RXHVosI%2BrUPYW1xO5iyGdUUemWvEOux%2FviGJlCDH6pm9XCywILRKpfWWesm2fzK2pb9EJzr4FmDhJQs2LnxSi%2B0kUtYY6c0j%2F8F1w3DI%2BVFOBkmynca1X3%2BJwbpqLFFU2UFl87xp8uy1mjUKGk32VAMtf%2B9%2BGmLBPx%2BIDnXSXpDXppCcn7rd9M7BjX%2Bz0GheGXmMJzq15DfthRehVceYO2znZ6Qgzeit7%2FRc3CPt8Gk%2FZnSQg%2FJPHy%2BkQNGXLezotYKaartW1lXcSk9ZBXgPY6yh94k8IzmNX5xe7GkacG2KzGl%2Fo8pzCyNcjUa09zBAG0g%2FRCpdGEG4nIsVZfq6OXj2akhbxBcrdavJNQF9PiGoOUIsUnjxzXnaWTUD4O5w4jvFbHz9Ok1j775kLNyOKnNiRSTDEHdZm8YJG3rDazYwxIiTCrxYK1hnF4932K2tLPbx0rG8rUb1nU8VCNnE7x0rGGv59s086FhFwP%2FJ%2FXfbJp4JQsrqw6TkiR0QgDawLVf%2B5Azhzn0Ivn84HkmH4W3%2BAe6p7ga0Td0j5TD8pJRVFUQ2MJi%2FiMQGOqUBrCnvpRUI4adss6r5eytglu05KZbVCmyHDUIfkn%2FqYchMDG5WMx5gO7w17s%2Bcmn8mmPXLTwmh5RjBQgevlUu1LTZ1lqDyTaRKkSf2cmrgg9brkMR2oIjG2N9qJLNB22ysUuiBpdIygYp%2BoWdKdp9wEzqPYg52XImRjWG8DJpadOfJfvOccvRlKkbaQ44n9QlQ7b3xCVbFlaRqDGqZBDvJHglGzKst&X-Amz-Signature=e88b78f7e7ef37d7a7e3358cce4974e33af7ee43f6c723deba0cb40d14645886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

‘[launch.py](http://launch.py/)’ 파일에서 발생한 오류는 'RuntimeError: Couldn’t install torch.'입니다. 이 오류는 PyTorch를 설치할 때 발생하는 것으로 보입니다. 오류 메시지에 따르면 Python 버전이 호환되지 않아 발생한 것 같습니다.

오류 메시지에서 제안하는 대로 Python 버전을 3.10으로 다운그레이드하고 WebUI 디렉토리의 현재 Python 및 ‘venv’ 폴더를 삭제한 후 다시 시도해보세요. 또는 WebUI의 바이너리 릴리스를 사용할 수도 있습니다.

[Python 3.10 (Windows 7 버전)](https://github.com/adang1345/PythonWin7/raw/master/3.10.6/python-3.10.6-amd64-full.exe)

[**설치**](https://www.python.org/ftp/python/3.10.6/python-3.10.6-amd64.exe)

[(페이지)](https://www.python.org/downloads/windows/)

- 설치 시** " PATH에 추가**" 를 선택해야 합니다.

</details>

<details>
<summary>vram 줄이기</summary>

**6단계****(선택 사항):**

이렇게 하면 VRAM이 줄어들고 더 큰 해상도 또는 배치 크기에서 원시 생성 속도 를 10% 미만으로

생성할 수 있습니다. 평균 **25% 더 빠름 ) ***대부분의* 사용자 에게 권장됨 -편집 - 다음으로 변경

```plain text
webui-user.bat
```

```plain text
COMMANDLINE_ARGS=COMMANDLINE_ARGS=--medvram
```

</details>

## Chechkpoint / lora / vae / embedding 정리

🔗 [https://ai-designer-allan.tistory.com/entry/스테이블-디퓨전-Checkpoint-lora-vae-embedding-완벽정리](https://ai-designer-allan.tistory.com/entry/스테이블-디퓨전-Checkpoint-lora-vae-embedding-완벽정리)

### lora 개요

🔗 [https://github.com/civitai/civitai/wiki/How-to-use-models#lora](https://github.com/civitai/civitai/wiki/How-to-use-models#lora)


<details>
<summary>기본 사용법 (프롬프트 문법)</summary>

🔗 [https://rupicat.com/entry/Stable-Diffusion-프롬프트prompt-입력-방법-정리](https://rupicat.com/entry/Stable-Diffusion-프롬프트prompt-입력-방법-정리)

프롬프트 입력은 크게 두가지로 나뉨

- Prompt
  - 의도하고자하는 요소
- Negative prompt
  - 피하고자하는 요소

Checkpoint , Lora에대한 설명이 잘 되어있음

🎥 [동영상 보기](https://youtu.be/lIeUcj9LJyQ)

### **| 기본 문법**

프롬프트는 콤마 "," 로 구분

() 괄호로 프롬프트에 가중치를 줄수 있다. [] 는 가중치를 줄인다.

(프롬프트:가중치) 가중치는 보통 0.1~1.8까지 적는다. 기본값은 1

(프롬프트, 프롬프트:가중치) 여러개의 프롬프트를 묶어서 가중치 적용

(프롬프트) = (프롬프트:1.1)

[프롬프트] = (프롬프트:0.9)

외모, 상태, 배경 등은 태그로 적고 구도나 상황, 행위 묘사등은 문장으로 입력한다.


얼굴보정(Restore Faces) 체크해 주시면 얼굴을 뚜렸하고 섬세하게 그려주는 것 같습니다.

</details>

<details>
<summary>익스텐션</summary>

🔗 [https://rupicat.com/entry/Stable-Diffusion-Webui-필수-유용한-Extensions-익스텐션-들](https://rupicat.com/entry/Stable-Diffusion-Webui-필수-유용한-Extensions-익스텐션-들)

1. ControlNet
🔗 [https://youtu.be/ABn25X18wfM](https://youtu.be/ABn25X18wfM)

  1. OpenPose Editor
  1. Posex
  1. [Civitai.com](http://civitai.com/) Poses
1. [Civitai Helper](https://github.com/butaixianran/Stable-Diffusion-Webui-Civitai-Helper.git)
  1. 결과 미리보기 확인하고 모델 선택 [튜토리얼](https://youtu.be/ZVjWQY-NxyQ)
  1. 익스텐션에서 직접 URL 입력하여 설치해야함
1. [ddetailer](https://github.com/dustysys/ddetailer.git)
  1. 결과의 퀄리티를 높여줌 [C++ 비주얼 스튜디오](https://visualstudio.microsoft.com/ko/downloads/) 도구가 요구됨 [튜토리얼](https://youtu.be/xJAyZG-ssAM)
1. [rembg](https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg.git)
  1. 배경제거 [튜토리얼](https://youtu.be/S-39H5KXOUo)
  1. 혹은 [coolai](https://bgsub.com/webapp/?utm_source=coolai.app) 에서 웹상으로 수동으로도 가능합니다
1. [ModelKeyworld](https://github.com/mix1009/model-keyword.git)
  1. 모델에서 사용하는 키워드를 볼 수 있음
</details>

<details>
<summary>img2img 사용법</summary>

🎥 [동영상 보기](https://youtu.be/0CUHf3Gp4WQ)

</details>

<details>
<summary>참고사항</summary>

## 플러그인 모음

web ui 도 많이 업그레이드 되어 파생 기능이 엄청나게 많아졌습니다.

[Civitai.com](https://civitai.com/)

사이트에서 수많은 모델, Lora, Textual Inversion 을 구할 수 있습니다.

## **webui + novel ai 설정**

[티스토리 블로그](https://skyksit.tistory.com/entry/novel-ai-stable-diffusion-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95)


</details>

# 로컬서버 웹 호스팅

ssh 키를 윈도우 설정에서 설치하고 로컬호스트에 접속하고자하는 외부 컴퓨터에서 (같은 망에 있어야함) ssh키 입력하고 뭐 하니까 되든데..


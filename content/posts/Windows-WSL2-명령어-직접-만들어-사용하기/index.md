---
title: "Windows WSL2 명령어 직접 만들어 사용하기"
date: 2023-09-14T00:00:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!"]
description: "Ubuntu에서 자주 사용하는 명령어를 alias로 설정하는 방법과 AWS 접속 명령어 단축키 설정, zsh 플러그인 설치 방법에 대해 설명합니다. "
notion_id: "de719076-4d87-414a-9cb2-3ac4dbc73514"
notion_url: "https://www.notion.so/Windows-WSL2-de7190764d87414a9cb23ac4dbc73514"
---

# Windows WSL2 명령어 직접 만들어 사용하기

> **Summary**
> Ubuntu에서 자주 사용하는 명령어를 alias로 설정하는 방법과 AWS 접속 명령어 단축키 설정, zsh 플러그인 설치 방법에 대해 설명합니다. 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f01f2d3b-078b-4f40-bed7-3a8c010cffbc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N5IJPND%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDpA37KHfWgDaKofbu0RWx3hN5B5EJZrshb9N%2FTBhxXegIhANWo4o7oxQqTx1fz4Y%2Bj6dnmJ7UIQHCTycWcRQgJrQPoKv8DCCkQABoMNjM3NDIzMTgzODA1IgxQg4P83TqZe%2B0b%2BvUq3AMeL5IuY7BoHpDo7M4WvHp9ESBmpJ2R9zYBr3BBe3LnW4eIX8v3hntVmROxrvsMUTSdvc9%2FSYTmgymjmYzUdXFZmH2u9qY416bb6AVejpGe6UDIjFC39%2FENDiITRT38eGKkudOsO2%2FROaQG3WoGFurTwsGB%2FwxlX8rJxxrZxnECJBcAA9Sqi6NU3G8bqGE1FFTTHG5NiGysY3bOfNUaGsFJCIcmNX2872OVIo23tD4cJkJ1Jjw47iuYm1WkYs%2FAGYpZNofLSBca%2BJPZaDtLramibu9kiSEcRI5IIFXpFsmO872pSuoTlXJ8cR02Z3x5BfPhH34I6ZoI00iQtebhNl7VZr1dcdReF8EkYp2BjCw5WtmXOXO37zVta%2FPYom7uTjDQvF%2B4StVbZggx9gGaqr75OtjjEKjsfWuKaaY0bk%2BGbQ3FyznkzilS4PATpifL9XW0saNmjF10qdx4wY5nhPFSJHYG5BYXPdTdyBUlqc6RF1ETff7t6DRfsCo7bCftm3RPu75gUqLes0CuqbwK0U83lh9OzC6ccUDMXGEQR20FiIzwaIq1d50EBwJ9g3jESJ3LyP423QlbOovgHrQ1TnoL6rDWjur6a8yxlk3c2rk9siyPGildPMoHH2gqwDDPzofEBjqkARsbyivfAWSDfOjGCT6OrBZ9uy1cPTjuZq%2BRlSPvGrK1NmcmmMXe5tEG%2FRuMud%2B6TwZDSp4G4kAb0ku26x8UfqCIafzUgcvdHpHDKuvcytxQtsXTP%2FiB2kGzgER7USTVe9gd0MSKN%2F1fIp%2BaIODCkvfjXb8kmGV1Gf5xeFg9pyBGO2gng2TUiaz7vjAzsUivPPT6XV6mQr%2BMAGUDjZxAbByqmRCm&X-Amz-Signature=bf0f44f01a9c63c0e9d95db05020f8ba562b8a878819da12b834ac56ebab6efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 단순 명령어 alias 명칭 설정

Ubuntu에서 `cd ~/../../mnt/c` 명령어를 `gotowin`이라는 명령어로 만들어 사용하는 방법은 다음과 같습니다:

1. 먼저, 터미널을 엽니다.
1. 이어서, `nano ~/.bashrc` 명령어를 입력합니다.
1. `.bashrc` 파일이 열리면, 파일의 맨 아래로 이동합니다.
1. 맨 아래에 다음과 같은 코드를 추가합니다
1. 이제, `Ctrl + X`를 눌러 파일을 저장하고 종료합니다.
1. 마지막으로, 다음 명령어를 입력하여 변경 사항을 적용합니다.
위 단계를 따르면 `win`이라는 명령어로 `~/../../mnt/c` 디렉토리로 이동할 수 있습니다.


# AWS접속 명령어 단축키로 설정

[AWS 서버 구축 후 MAC 터미널로 접속](https://www.notion.so/f7d98040a8fc4ed4bbc5f8301c5d6ab7) 


# zsh plugins 설치

🔗 [https://mulder21c.io/setting-up-wsl-2-dev-env-and-zsh-on-windws-10/](https://mulder21c.io/setting-up-wsl-2-dev-env-and-zsh-on-windws-10/)

## → [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

이 플러그인은 이전에 입력했던 명령을 기반으로 명령을 타이핑 할 때마다 자동 완성을 제공하고 방향키로 해당 자동 완성을 사용할 수 있게 해준다.

다음 명령으로 설치하고,

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

`~/.zshrc` 파일을 열어 `plugins` 항목에 `zsh-autosuggestions`를 추가해준다.

```plain text
plugins=(git zsh-autosuggestions)
```

## → [syntax highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/)

이 플러그인은 명령어에 구문 강조를 적용해준다. 구문 강조가 적용되면 좋은 것 중 하나는 특정 명령을 사용할 수 있으면 녹색으로, 설치 되지 않음 등의 이유로 알 수 없는 명령이면 빨간색으로 나타난다.

다음 명령으로 설치하고,

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

`~/.zshrc` 파일을 열어 `plugins` 항목에 `zsh-syntax-highlighting`을 추가해준다.

```plain text
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```


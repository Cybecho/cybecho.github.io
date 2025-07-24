---
title: "Ubuntu - How to install VS code"
date: 2024-02-11T15:00:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Ubuntu 22.04에 Visual Studio Code를 설치하는 방법은 다음과 같다: 시스템 업데이트, 필요한 패키지 설치, Visual Studio Code 리포지토리 추가, 시스템 업데이트 다시 수행, 마지막으로 Visual Studio Code 설치. 설치 후 검색창에 'code'를 입력하여 설치 여부를 확인할 수 있다."
notion_id: "9a43b4f0-2a01-4cba-bae8-fc2104de46e0"
notion_url: "https://www.notion.so/Ubuntu-How-to-install-VS-code-9a43b4f02a014cbabae8fc2104de46e0"
---

# Ubuntu - How to install VS code

> **Summary**
> Ubuntu 22.04에 Visual Studio Code를 설치하는 방법은 다음과 같다: 시스템 업데이트, 필요한 패키지 설치, Visual Studio Code 리포지토리 추가, 시스템 업데이트 다시 수행, 마지막으로 Visual Studio Code 설치. 설치 후 검색창에 'code'를 입력하여 설치 여부를 확인할 수 있다.

---

🔗 [https://junorionblog.co.kr/ubuntu22-04에-visual-studio-code-설치/](https://junorionblog.co.kr/ubuntu22-04에-visual-studio-code-설치/)

## Ubuntu22.04에 Visual Studio Code 설치

- Post author:[junorion](https://junorionblog.co.kr/author/june-ho/)
- Post published:10월 28, 2023
- Post category:[개발자 Notes](https://junorionblog.co.kr/category/%ea%b0%9c%eb%b0%9c%ec%9e%90-notes/)
- Post comments:[0 Comments](https://junorionblog.co.kr/ubuntu22-04%ec%97%90-visual-studio-code-%ec%84%a4%ec%b9%98/#respond)
Visual Studio Code는 Microsoft에서 개발한 강력한 오픈소스 코드 편집기 Linux, Windows, 
MacOS등 다양한 플랫폼에서 사용할 수 있다. 코드 디버깅, 작업 실행 및 버전 제어 활성화에 도움이 되는 강력한 도구로, 
리팩토링, 구문 강조, 자동 코드 완성, 스니펫 등 다른 코드 편집기와 차별화되는 많은 기능(Extension)이 제공된다.  이
 글에서는 Ubuntu 22.04에 Visual Studio Code 설치방법에 대해 알아본다.

Contents:

• [Step 1: 시스템 업데이트 (System Update)](https://junorionblog.co.kr/ubuntu22-04%EC%97%90-visual-studio-code-%EC%84%A4%EC%B9%98/#Step_1_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8_System_Update)
• [Step 2: 패키지 설치 (Package Install)](https://junorionblog.co.kr/ubuntu22-04%EC%97%90-visual-studio-code-%EC%84%A4%EC%B9%98/#Step_2_%ED%8C%A8%ED%82%A4%EC%A7%80_%EC%84%A4%EC%B9%98_Package_Install)
• [Step 3: 저장소 가져오기](https://junorionblog.co.kr/ubuntu22-04%EC%97%90-visual-studio-code-%EC%84%A4%EC%B9%98/#Step_3_%EC%A0%80%EC%9E%A5%EC%86%8C_%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0)
• [Step 4: 시스템 업데이트 다시](https://junorionblog.co.kr/ubuntu22-04%EC%97%90-visual-studio-code-%EC%84%A4%EC%B9%98/#Step_4_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8_%EB%8B%A4%EC%8B%9C)
• [Step 5: Visual Studio Code 설치](https://junorionblog.co.kr/ubuntu22-04%EC%97%90-visual-studio-code-%EC%84%A4%EC%B9%98/#Step_5_Visual_Studio_Code_%EC%84%A4%EC%B9%98)
• [참조](https://junorionblog.co.kr/ubuntu22-04%EC%97%90-visual-studio-code-%EC%84%A4%EC%B9%98/#%EC%B0%B8%EC%A1%B0)

## Step 1: 시스템 업데이트 (System Update)

다음 명령어를 실행하여 시스템을 업데이트 한다.

```plain text
$ sudo apt update && sudo apt upgrade -y
```

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-90-optimized.png)

## Step 2: 패키지 설치 (Package Install)

시스템이 업데이트 되었으면 Visual Studio Code를 설치하기 전에 설치되어야 하는 패키지들을 설치한다.

```plain text
$ sudo apt install software-properties-common apt-transport-https wget -y
```

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-91-1024x297-optimized.png)

## Step 3: 저장소 가져오기

Visual Studio Code 설치를 위해 Visual Studio Code 리포지토리를 추가한다. 그 전에 설치된 패키지를 인증하기 위해 Microsoft GPG 키를 가져와야 한다.

```plain text
wget -O- https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor | sudo tee /usr/share/keyrings/vscode.gpg
```

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-98-1024x188-optimized.png)

```plain text
echo deb [arch=amd64 signed-by=/usr/share/keyrings/vscode.gpg] https://packages.microsoft.com/repos/vscode stable main | sudo tee /etc/apt/sources.list.d/vscode.list
```

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-99-1024x46-optimized.png)

## Step 4: 시스템 업데이트 다시

패키지를 설치하고, 저장소를 추가 했으므로, 시스템 업데이트를 다시 수행한다.

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-94-optimized.png)

## Step 5: Visual Studio Code 설치

Visual Studio Code를 설치한다.

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-95-1024x295-optimized.png)

설치가 완료되었으면, 검색창에 code를 입력하여 Visual Studio Code가 install 되어 있는지 확인한다.

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-96-optimized.png)

아래는 설치된 Visual Studio Code를 실행한 화면이다.

![Image](https://junorionblog.co.kr/wp-content/uploads/2023/10/image-97-1024x562-optimized.png)

## 참조

- [https://linuxize.com/post/how-to-install-visual-studio-code-on-ubuntu-20-04/](https://linuxize.com/post/how-to-install-visual-studio-code-on-ubuntu-20-04/)

---
title: "Ubuntu에 Cursor 코드 에디터 설치하기"
date: 2024-12-15T10:19:00.000Z
draft: false
tags: ["ubuntu", "popOS"]
series: ["Let's Linux!"]
description: "Cursor는 AI 기반 코드 에디터로, Ubuntu에서 설치하는 방법은 AppImage 파일 다운로드, 실행 권한 부여, 실행 방법, 그리고 AppImageLauncher를 통한 시스템 통합을 포함합니다. 설치 후 더 스마트하게 코딩할 수 있습니다."
notion_id: "15d1bab9-e3f8-80f4-9348-d3d278813994"
notion_url: "https://www.notion.so/Ubuntu-Cursor-15d1bab9e3f880f49348d3d278813994"
---

# Ubuntu에 Cursor 코드 에디터 설치하기

> **Summary**
> Cursor는 AI 기반 코드 에디터로, Ubuntu에서 설치하는 방법은 AppImage 파일 다운로드, 실행 권한 부여, 실행 방법, 그리고 AppImageLauncher를 통한 시스템 통합을 포함합니다. 설치 후 더 스마트하게 코딩할 수 있습니다.

---

![Image](image_bb5d508c8011.png)

# Ubuntu에 Cursor 코드 에디터 설치하기

Cursor는 AI 기반 코드 에디터로, 코드 자동 완성, 버그 수정 제안, 코드 리팩토링 등 다양한 기능을 제공합니다. 이 튜토리얼에서는 Ubuntu 기반 리눅스 배포판에서 Cursor를 설치하는 방법을 설명합니다.

## **1. Cursor AppImage 파일 다운로드**

1. [Cursor 공식 웹사이트](https://www.cursor.com/)에 접속합니다.
1. 다운로드 페이지로 이동하여 **AppImage** 파일을 다운로드합니다.
---

## **2. AppImage 파일에 실행 권한 부여**

1. **터미널 열기**: `Ctrl + Alt + T`
1. 다운로드된 AppImage 파일이 있는 디렉토리로 이동:
```shell
cd ~/Downloads

```

1. 실행 권한 부여:
```shell
chmod +x Cursor.AppImage

```

---

## **3. Cursor 실행하기**

터미널에서 다음 명령어로 실행할 수 있습니다:

```shell
./Cursor.AppImage

```

또는 파일 관리자를 열고 다운로드된 AppImage 파일을 **두 번 클릭**하여 실행할 수도 있습니다.

---

## **4. 시스템에 Cursor 통합 (선택 사항)**

더 편리한 실행을 위해 **AppImageLauncher**를 사용해 시스템 메뉴에 Cursor를 통합할 수 있습니다.

### **AppImageLauncher 설치**

1. **PPA 추가 및 업데이트:**
```shell
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update

```

1. **AppImageLauncher 설치:**
```shell
sudo apt install appimagelauncher

```

### **AppImage 통합하기**

1. Cursor.AppImage 파일을 **두 번 클릭**합니다.
1. *"통합 및 실행"**을 선택합니다.
1. 이제 Cursor가 시스템 메뉴에 추가되어 더 이상 터미널이나 파일 관리자를 열 필요가 없습니다.
---

## **결론**

이제 Ubuntu에서 Cursor 코드 에디터를 설치하고 실행할 수 있습니다. AI 지원을 활용해 더 스마트하게 코딩하세요! 문제가 발생하거나 도움이 필요하면 댓글로 남겨주세요. 😊


---
title: "Ubuntu에 Cursor 코드 에디터 설치하기"
date: 2024-12-15T10:19:00.000Z
draft: false
tags: ["ubuntu", "popOS"]
series: ["Let's Linux!"]
description: "Cursor는 AI 기반 코드 에디터로, Ubuntu에서 설치하는 방법은 AppImage 파일 다운로드, 실행 권한 부여, 실행 및 시스템 통합을 포함합니다. AppImageLauncher를 사용하여 시스템 메뉴에 통합하면 더 편리하게 사용할 수 있습니다."
notion_id: "15d1bab9-e3f8-80f4-9348-d3d278813994"
notion_url: "https://www.notion.so/Ubuntu-Cursor-15d1bab9e3f880f49348d3d278813994"
---

# Ubuntu에 Cursor 코드 에디터 설치하기

> **Summary**
> Cursor는 AI 기반 코드 에디터로, Ubuntu에서 설치하는 방법은 AppImage 파일 다운로드, 실행 권한 부여, 실행 및 시스템 통합을 포함합니다. AppImageLauncher를 사용하여 시스템 메뉴에 통합하면 더 편리하게 사용할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9bab5ec5-7a5f-4788-ab4f-a944cf8c856a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBWCLA3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCQp3QioWzinS88CatIYvvxo7RhGazKEwESNOcyka1aXQIhAIMYiBQVsChqfM1XM9i%2FLLn7xltKKbiNIY%2B7KCAXOuFuKv8DCCoQABoMNjM3NDIzMTgzODA1Igwfma3f0ElL6Z%2FKII8q3ANp5Fdu2ZnEyHRkZ%2BAc1S8kI5zu6ffrjWACop7xH8cVe2eM12glrkaXguKMDOaG47Nq67AqMvbTGgfmwXEhzWnHjzUBUMdZ%2FY5pw8t8DbpGmxUdpOLyu2CxYZopRx7wrsqr0XMycR6bWf8WveQj8yec%2BWB7yJrfSSzwBaf8JizuQGNyVLMJlPiR9d4Koh8fPwAkk6P8GE5EQdVTSVIpY%2BLOrPxW8hVVmf1wzWl3Ww8X0bP1eLQzCIF7x5ukT6pP7oUZ9DOOy4XVrvcBsaQ9Pdzzzb30aUbVytbyxAhzB8DiXOSTlcLGmGoHGbpoIzLS6RqMzpMJeojifaOEXT4kuqmblzELFzGxQursTnDXZKiHYW3PHbjxqrAeq0TCFXvy8i1ZM41iwtJ9HdHMeLKkz2YWV0sTRzU0xJZs%2B%2Bm3uoQNyD95ZltjgSzL72ShmN5vamtjVejW9XsHpl7DYBkW5qmF%2BELTcytW8bs7ZJumlmOgVsloAtdl2isVV8rOFcxMh%2BPLyaltZeHILWaI6PXdfEF3ytR6LQC8n%2FCyZwwWYumQvmNn9v07o1AbszP%2FjEcQoLl%2Fm6jeJdWEuQ5KPSLO1i2I65yQltXoQCxNXRBnccGxGdHSWZ7mycR4vdRcpTDe9YfEBjqkAWOFQgLmf%2BrvrxDYlR2Og45m%2B1OqVxDx8dZsWP1DYXuxuC%2FLqDCf1FS6AEPJ1kDaun9ElnOPMI7z2RqLnNG1fkjC2F9reBLk7IyJLRFHUJ5Givq8Sdry9bq7UJagI2j%2BT%2FS3503wTgNOGiUs%2FAPig2X1UscwhwuAL4NN8dLZQMeghdRjn2SE0eEzuJs82S49jhjdBIThWW3Shxt8htMr6ThgjF%2F5&X-Amz-Signature=e563e1c94eb56b9b6df5c60f418270b815706716906795eafdbdd651028d10fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


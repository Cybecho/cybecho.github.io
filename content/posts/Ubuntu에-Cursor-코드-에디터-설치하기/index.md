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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9bab5ec5-7a5f-4788-ab4f-a944cf8c856a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSIZPR2M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCs%2Fufrf3wGuPbBHJFna%2BZB0R0G%2B9h3u3yK8CGrI6I3owIgNhdGvMcUkL857txGHN8JOmj2eRhhGjabsxAZqho5%2Fawq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOJt5%2FNiUdDS2Jn67yrcAx3YTpfLuB01BAv5j%2BOD0rbq954SLM%2BsN0VQz4LoGAM1kOcnaV2IsjkdWTcD29MkFU7L%2BNxFLwHn0N9Vl7LGZkOJwuxaULee4Jq11Q0SuA2UgP60vrv8I%2BkXHEi6YZ9CAlRE0CTjHciy%2BWrFrI5sCrLrBXkFZwPiqXA5usi%2B8ZS9cv2wOY8LLBU%2B%2B43yprFSA9COfc23PocAuqR9nGnCpsTepHbBl0GUNtwhG8w6Q8VMcEG%2FZKImbWcO%2Bi0evfYQNnIWIIi0eAx2itvFjKz%2BQdqsPIVsnoZyvGj6cSOK5x5jz0i4ZhUB24G7gVpsVkMPq%2FgeufBuNYL7P2t6JLdPUk9J9feEYUXB9ezsQAjXLHnAcpCi3zfuo4ZYUxH4PZDPgBoRIP%2FFW%2F5RY6SY39YloYMdRaZbcy9cXRuY5R4F0ImwQNtFSM%2FPTxG19LXvJHDcqxB4rGwGyNasT6kAYEXvHpkxaca9U3tjJRjg%2FdACDgjqMpkVS8hMF9XXqbliHks0HI4%2FXo6gsn0qD%2BiJMlOFMAUY%2FwB0U3%2B3fwYPlIbhubUSURP55nSq2pMmfXRnu9TjRxyaJ8ORt5eAr7G8tAsEJEv5LS%2BXsBNgY8%2FTdvQgLK%2FW0Odcbbt9N8pRSZckMLvPh8QGOqUBV1sxL0ZvvyTdCS7yrqnR6FQ4C7g%2FC8LvBufWIg14aENFqVYwwpEWIbEskkAeBzzSSXliZJU2uy8yYNSFdiBxS%2BH5p%2B4bzOiCH2AxOvqK0tjv3UiZCFBJXeVqxrJEsi%2BMxdwevSujc%2FmdWL7543HBi1mvkwNVZWrMmgcVgFF%2BM2PwxEu0bXFDuDI8WlIXE7z8h2CDkLhtZs1ZRGVzzMh7X8Z9w0VW&X-Amz-Signature=1271a4e1669ac14573b2b6b3b3313cf36640238cc03624576e25d4699cdbc30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Ubuntu에 Cursor 코드 에디터 설치하기

Cursor는 AI 기반 코드 에디터로, 코드 자동 완성, 버그 수정 제안, 코드 리팩토링 등 다양한 기능을 제공합니다. 이 튜토리얼에서는 Ubuntu 기반 리눅스 배포판에서 Cursor를 설치하는 방법을 설명합니다.

## **1. Cursor AppImage 파일 다운로드**

1. [Cursor 공식 웹사이트](https://www.cursor.com/)에 접속합니다.
1. 다운로드 페이지로 이동하여 **AppImage** 파일을 다운로드합니다.
---

## **2. AppImage 파일에 실행 권한 부여**

1. **터미널 열기**: `Ctrl + Alt + T`
1. 다운로드된 AppImage 파일이 있는 디렉토리로 이동:
1. 실행 권한 부여:
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
1. **AppImageLauncher 설치:**
### **AppImage 통합하기**

1. Cursor.AppImage 파일을 **두 번 클릭**합니다.
1. *"통합 및 실행"**을 선택합니다.
1. 이제 Cursor가 시스템 메뉴에 추가되어 더 이상 터미널이나 파일 관리자를 열 필요가 없습니다.
---

## **결론**

이제 Ubuntu에서 Cursor 코드 에디터를 설치하고 실행할 수 있습니다. AI 지원을 활용해 더 스마트하게 코딩하세요! 문제가 발생하거나 도움이 필요하면 댓글로 남겨주세요. 😊


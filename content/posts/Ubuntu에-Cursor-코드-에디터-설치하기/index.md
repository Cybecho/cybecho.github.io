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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9bab5ec5-7a5f-4788-ab4f-a944cf8c856a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFW6FF6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFzMRx9ll%2BQZ41USMSHu8AtDhZAG5dNkuqp8HiBylZ4xAiBo8W0VZI45C4WUSCx5Ns4%2Fx5DAqAFyEvbBqxqq4VwdsSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM%2Fhl2v05wMayBRBH%2BKtwD6Of1BEJGbiihxur%2BT3ZuSLiL28klkwKbB3v7qC8DUUtxNQOxbMeV16%2BBrNHmfw3CmY3w43S%2F5YIkoEjPpG15KtpiF5AhH83G6RCjiRkC4KvRPXdhMGzlA7KGedgDxI7Pgsn%2BxipHeR8k%2BpHbhm%2FTE1i4%2BxIB4aSIvgLTmQXksnfogfolPWlP3pRQRlHJL6%2FxL%2BygytR0tDHrJ3xqCyoew60RCvYcsYQnS3Dj2aKQjU0rfh50vew6sVnjWrJXqLZZ3YnoCZM2%2BlGQ8lo4AKnayygNHfNoQR4pHnsY8xbfT%2FIisb%2FenxlQiFpzD5znLH7QH1EXD1wNCxQ9Um1h7PdrL1nC2pJcObYKWHmXxR0DX0FxQgU4bLCERVn2zRUTaZYj6wacA4pVqtW%2FOn2tAwKBQ5Kk9MRUOjerhE8SBQjr20vJSP0ZM6TOdytKI9MBtakuIeoq4GhrJRUU1FCM3sXXRH8SiaUAF4pQazeTzT4qRa2gVheMRVWSEPOHDqR8yy9VMq3coXdFaAj6Y9YORuSUUildpnlSJNeg6cdvxSO8f3yT40wP6rQ3MgNXUxq4v0PY26gK5%2BpnKIvhEgxdEsTo7wUpUPBAu97CWQ%2Bgo3sO7LOf8vdcSZDKBOYBuRQwt5uIxAY6pgGrkcwrqotsL5g4dLpHKCYfQv6xRDAGeR6y0codxG4dvo00JHZdjxQVJYeApoMKEDQG5Y2TgtqfdaQ0UUxLyYPkEy87qd1ar09QFl5OnF4neTc3J0rIU8ke8mjk%2FEhrNaCDQEV8%2FCSbulIQdT7XTmqTglVxZ0d4AsjQrT6d%2FMT98rdvMD2O2hpWarTHj51wYTpweS%2F1q785QRIfLXE2BqCBMWLRyTTe&X-Amz-Signature=12811dd4bc141bbab43ab8b48bc7faa8844541ef9fabb7801b80daf4588e53a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9bab5ec5-7a5f-4788-ab4f-a944cf8c856a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTKJ3BA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBu22Yz1M7SXhGC31gGZlY2ZRWdi41vs8kfU67hOBaN%2BAiBx5vbho0YrttjHc%2FUyRerERFQ0%2B16dhlWOSZv5SO0XNir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMLovRmXGNv%2BdskPJBKtwDLth%2BFWH%2Bjiyh3RfZf3QFPrUDVUbCWz76TQ9rPnPL2008UOIapr0%2F0fcONPV8kruPU%2BSQcpxdclmzCBYl2NS0XO904CmnkSfJVXeBaTBEdqdEMGlBEDWwFJe2UE3r6rAnnHNuolZKEfz%2FXcpexnmvzkX5aKG%2BHdWfCGiZusvN%2BuFy2SrVNURt645F9XLcT1K833naERYKIdW6OtA6p4kuao5S%2FKX%2FjgJzFEmcRHoZI1KcsIv%2BY42K0uwFXqZskPH60wqxWFRc1L0RE0ibciZF459k%2FJiRzguAvUnFZuo9LNz%2FGaEF5RgoU%2FJTEmR1bJjVu2bkj%2B5dhOMpH3jlPKm%2F3V3Hbtn2%2FHVlKm2dMzB1xsATnlX%2FZ%2BJKpSM1wMAp0IW1CPDCZYW5YuHsZBlOsmIkcZrWkiPLrh%2F2rDysfqB5%2BDRUkcPvZK4lFhH0DisQ5779lqTvSx6%2BeZuA1ygeLaEUVZLhu0HP8NubrItd10xHdUaX087px0pXbNB%2B8FrripB0MFPOI5sKgzoc2f0G3oa2kGqHcjtI%2Bn9ZvXF4k08rmmiv8zAzEsGWPj6k57AbO1R2l%2FJW0ad7zz1wGKOaXKk0aZhY%2BhnLMNK%2BNld4514pQjYsRG%2FoCt1koCX3oSwwzs6HxAY6pgHRbiHnFc9QdQdwkF9Px%2FvvkN1r6PSYHydb3RA%2FCxwgm0GaF4wJpUICdJOSnK8dFlUDngD43xRSa%2FZCGRnwsfDC%2FYmZbz5G7yohINGJ8V3pS4ro3RjFfzhzU35LQoRmVmjJmm%2Bgafv1mr%2FRxMvX03t%2BOOrdpkSqcwmfrCj1WkijuYs%2BbnJFJ6OTsorD5h8wVcJY1589NKTw4%2FUSjWL0XwOdkqNsyFHW&X-Amz-Signature=a7ce1479d251923043732079910d327712e24a9c8796715b58667840babddaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


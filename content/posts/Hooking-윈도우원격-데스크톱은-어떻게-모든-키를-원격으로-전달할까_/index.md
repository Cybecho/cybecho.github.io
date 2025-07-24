---
title: "Hooking - 윈도우원격 데스크톱은 어떻게 모든 키를 원격으로 전달할까?"
date: 2025-03-20T07:05:00.000Z
draft: false
tags: ["WINDOWS", "AI Generate"]
series: ["Don't Hate Windows!"]
description: "Windows 원격 데스크톱의 키 후킹 기술은 클라이언트에서 발생하는 키 입력을 저수준에서 가로채어 원격 세션으로 전달하여, 전체 화면 모드와 시스템 단축키를 정확히 처리합니다. 후킹 API를 사용해 키 입력을 캡처하고 원격 시스템에 전송함으로써, Ctrl+Alt+Del과 Alt+Tab 같은 특수 키가 로컬 OS에 가로채이지 않고 원격 세션에서 처리됩니다. 이 기술은 사용자 경험과 보안을 고려하여 설계되어 원격 환경에서도 로컬 환경과 동일한 키보드 반응성을 제공합니다."
notion_id: "1bc1bab9-e3f8-8009-b519-d574f81a2dbb"
notion_url: "https://www.notion.so/Hooking-1bc1bab9e3f88009b519d574f81a2dbb"
---

# Hooking - 윈도우원격 데스크톱은 어떻게 모든 키를 원격으로 전달할까?

> **Summary**
> Windows 원격 데스크톱의 키 후킹 기술은 클라이언트에서 발생하는 키 입력을 저수준에서 가로채어 원격 세션으로 전달하여, 전체 화면 모드와 시스템 단축키를 정확히 처리합니다. 후킹 API를 사용해 키 입력을 캡처하고 원격 시스템에 전송함으로써, Ctrl+Alt+Del과 Alt+Tab 같은 특수 키가 로컬 OS에 가로채이지 않고 원격 세션에서 처리됩니다. 이 기술은 사용자 경험과 보안을 고려하여 설계되어 원격 환경에서도 로컬 환경과 동일한 키보드 반응성을 제공합니다.

---

🔗 [https://learn.microsoft.com/ko-kr/windows/win32/termserv/terminal-services-shortcut-keys](https://learn.microsoft.com/ko-kr/windows/win32/termserv/terminal-services-shortcut-keys)

Windows 원격 데스크톱의 key hooking 기술은 클라이언트에서 발생하는 키보드 입력을 저수준에서 가로채서 원격 데스크톱 세션으로 전달하는 방식입니다. 이를 통해 전체 화면 모드나 시스템 단축키와 같은 특수한 키 입력도 원격 세션에 정확히 전달되며, 로컬과 원격 환경 간의 입력 처리 차이가 최소화됩니다.

Windows의 후킹 API(SetWindowsHookEx 등)를 사용해 키 입력을 캡처하고, 이를 원격 데스크톱 프로토콜(RDP)로 원격 시스템에 전송합니다. 이러한 처리 덕분에 Ctrl+Alt+Del이나 Alt+Tab 같은 특수 키와 단축키들이 로컬 OS에 가로채이지 않고 원격 세션에서 처리될 수 있습니다.

이 기술은 사용자 경험과 보안을 모두 고려하여 설계되었으며, 원격 환경에서도 로컬 환경과 동일한 키보드 반응성을 제공합니다.



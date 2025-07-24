---
title: "MAC 원격접속시 단축키 눌림상태 오류 해결"
date: 2023-06-01T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["원격 라이프!", "Let's MAC!"]
description: "JUMP DESKTOP 앱을 사용하면서 Intel MAC과 M1 MAC에서 원격 접속 시 'F' 입력이 'cmd + F'로 인식되는 오류가 발생했다. 이 문제는 두벌식 입력 방식에서 영문자 입력으로 변경함으로써 해결할 수 있었다. 또한, ios2mac 환경에서는 Cmd c를 그대로 사용할 수 있어 편리하다."
notion_id: "a1f07d60-3fce-4087-b1c2-ad32e913fafc"
notion_url: "https://www.notion.so/MAC-a1f07d603fce4087b1c2ad32e913fafc"
---

# MAC 원격접속시 단축키 눌림상태 오류 해결

> **Summary**
> JUMP DESKTOP 앱을 사용하면서 Intel MAC과 M1 MAC에서 원격 접속 시 'F' 입력이 'cmd + F'로 인식되는 오류가 발생했다. 이 문제는 두벌식 입력 방식에서 영문자 입력으로 변경함으로써 해결할 수 있었다. 또한, ios2mac 환경에서는 Cmd c를 그대로 사용할 수 있어 편리하다.

---

JUMP DESKTOP 을 애용하는데, 해당 앱은 IOS to WINDOWS 와 상성이 매우좋다.


하지만 최근에 Intel MAC 과 M1 MAC 을 구하게되어 MAC환경도 원격으로 사용하기위해 이것저것 시도중인데, IOS to MAC 원격 환경은 정말이지 사용하면 사용할수록 계륵같다고느껴진다…


오류 상황은 다음과 같다


> 💡 **원격으로 접속된 MAC에서 ‘F’ 를 입력하면 ‘cmd + F’ 로 인식해버림**


문제해결은 다음과 같았다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/802025d5-90ec-4189-892f-5dbed1978f30/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TEB5UU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAEX%2FDn%2Fe6To2xppANzDGkWPifMTuzA5IGbX11APAD1rAiEAkOXGL2WBhk2AG8hbPPIsD%2FWx1QCunIBJmCLIVE92PJIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP1XxjQZ9WoLlTsNxCrcA0H0olgc1AacgLywlNOMzbhPIsUhzvg60IYKzYJ%2F8t%2FTj2UGoUpYog8lEYn6vsJMF0qUsgL2wq9i0RW5u5aGq9ZTJtHT0CmR1v35UdYOO2gwP3vT1rhfX3OYZKpFJlWAdY8XPH9p3NkSMphhbh0q2pxcqEQ0OYiErgVpGY3dl75ZBhK%2BSlSIphveNHr5%2F1RWf25QgOQeY5fH1oyeuj00wxwQbmrPmCvjKH%2FAOrPLg0dBz0K6g%2FciRCbdSvEB5OSIICYIzhZbNJYZHBppoLZt1MP0GzJM55loLnTBgntkUHmpIZx0LDYxMABMY8Nj8e7%2FR%2FzndouEd98e%2Fq5Bk4byTKBugACcI5rWV3KIVEba6NorXa94SHvbPi5Qg01PXH1ZBdYuKcFehRh%2B1QLIrcw5XX6uhOxoIDreF2BC6DAL0Db%2B6A6QgbRikNfj9smyfMdGIHzhyrIWxuRL2FBd%2Fnj9GQpVBmowjI78sp798WbP2FNWfvfILUCpBsWP3NMLvJEIN5ufYa7HOCWGopBbGiesZ4cOrB6ly7IX5EkZFUu324qb66rz%2Fq8vpEV7wFEPneE%2BEYAIjvc6MpM1t9Uq8EZEFXjwXVuZX8byxaJ3rD3iN1cXF0%2Fd8UiONzTQkqmCMI%2FQh8QGOqUB%2FcCMDIL88zLFkFv378IBdFeVMuBypGIRILPjgaUCBZkJHfYVyKyortJegEhoANSL7ShR23ViflFZTpjoAyHomAv9MA2kdyAO3DaetzSywL9nLsIsGEtstxWNKAYhE6Kb6mcpOfk7xYG0I8FYKSVAKzMXb9tKxIiiQgVYrEKzBnRCvX0QIzWTlXtIlVIW54aUqh5H2%2B3YPNGa4CeXP9%2BY%2FM7ODUN4&X-Amz-Signature=8752ac6b5c25d5404bb68fcab291cc63cc99d740411a49bf048f8c931aee871b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


바로 두벌식 입력으로 되어있을때 그랬던거라 영문자 입력으로 다시 변경해주면 문제를 해결할 수 있다


쓰다보니 맥과 단축키를 동일하게 사용할 수 있어 편하다… ios2windows 에서는 ctrl c 를 해야하던것에 비해  ios2mac은 Cmd c 를 그대로 이용할 수 있어 편하다…!


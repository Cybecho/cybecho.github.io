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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/802025d5-90ec-4189-892f-5dbed1978f30/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655I6PGUF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAx2g5i6TdEq3gx6PWELdOWvBaAt4vNySbWcnGMRNJawAiEAn6Ctc7cjBxe4e30MzLWVHdITInglTn%2Fx8HyD2%2FBbX1gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIsuD7Q9RNwthPa2aircA%2FhMiYt4CYp95GueX3sAGgaNWbTajCPRu0fZGip7JiX0AAp9pTonAjlCWNZJdJ6o6FD%2BRdFgxoOODGs7G9GJcqZH0cfaDSC%2FZQ%2BuX%2FsUda0AbW664BqHFKIHHfJLDTVBRTUFh5c75J208vLLMYsRY%2FiPoie85SIhMUslDY%2FckoQ%2BJ2ZLnU9W8aUq6SiTYpTQEeWvQkf0wWCrzVMB6KW6JUPsF8QmSTO%2BqqScc8M6M%2FgDJ5MRUQfcinwfxrAEtTnMuxeyJqZ8sd%2FmSrQwuEoUopwskfne%2Bks6e6dZU6BpmXWYLkikbqxaAZgi0Gu4YlzffXCwrh%2FlV8Q4G8Hr2Up3O8g9H3tIiSwqq1ulpsOyL%2FZ8MBCACsxHWGCr8HzJYZEsh6mgAnYSKNcxIIY20vT9fZFFepDSddaMM6%2BQRhp04AiG7qUp68JXGmSn0waqa76FI1hLoWP1Kk5srP0Uqjq6AhX%2FTEVFCeXZf%2Bp5PaIc4nQlF7opCKc7OiwB9j6bp%2BwoD4AIN%2Fad8OP8Q8TqpIPUMG2z0OKwQKUFPs9RPGED5QvOaJcLMXpI7pbkdWucLM9hZkSrxIkLd3qTtGzN%2BK4mUXofcEl0Eibop91A67JwGc3CCCNlbEESnRGd7kEgMOD2h8QGOqUBMLZe7oSk6U8HcmeCCT%2FZSKSL23VgHocS6cNhhuLTDfHQGkqgEXmyoFv0JcrI1shi22HbcU8wcWn5690iS7sSDS5xCHlM1m3Bj9Hg9lrYvEq%2FLOkuWQ1JQ%2B5V7K1xGU1J4%2BY0OdUYM40P0At4QfgagaD3IUhF%2FcmpKbZzznxq4rBNcIsRWV9gnaOjL9eNHK4yXgnFhrs7cnWtHrghAwu2AakjgtHU&X-Amz-Signature=54926f18879877842699254476ba0d42a572da216cd77649c040bf64c5311a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


바로 두벌식 입력으로 되어있을때 그랬던거라 영문자 입력으로 다시 변경해주면 문제를 해결할 수 있다


쓰다보니 맥과 단축키를 동일하게 사용할 수 있어 편하다… ios2windows 에서는 ctrl c 를 해야하던것에 비해  ios2mac은 Cmd c 를 그대로 이용할 수 있어 편하다…!


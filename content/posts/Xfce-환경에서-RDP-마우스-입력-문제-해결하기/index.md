---
title: "Xfce 환경에서 RDP 마우스 입력 문제 해결하기"
date: 2024-12-15T13:05:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Xfce 환경에서 RDP 접속 중 마우스 입력이 비활성화된 문제를 해결하기 위해 터미널을 통해 설정 경로를 찾고, 마우스 입력 상태를 확인한 후 올바른 값 형식으로 수정하여 문제를 해결했습니다. 설정 적용을 위해 Xfce 세션을 재시작하고, 로그 파일을 확인하는 과정도 포함되었습니다."
notion_id: "15d1bab9-e3f8-80cd-8748-fbb3aa63e9de"
notion_url: "https://www.notion.so/Xfce-RDP-15d1bab9e3f880cd8748fbb3aa63e9de"
---

# Xfce 환경에서 RDP 마우스 입력 문제 해결하기

> **Summary**
> Xfce 환경에서 RDP 접속 중 마우스 입력이 비활성화된 문제를 해결하기 위해 터미널을 통해 설정 경로를 찾고, 마우스 입력 상태를 확인한 후 올바른 값 형식으로 수정하여 문제를 해결했습니다. 설정 적용을 위해 Xfce 세션을 재시작하고, 로그 파일을 확인하는 과정도 포함되었습니다.

---


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e91c702e-6c10-4e46-a73d-b573f73e98d4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX327LSV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDnOSFb6c9SEma7g3zwBg3OmwK3ELrvSGQPTQJraY7SSwIgJ7pyxGZgqJIOphMHK6bWOg8u6MH4u8hLAOwLmTHCaPEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJUcDae92y%2F2F9aqmCrcA9SL%2FmobRNX9atte73nOaGN2coJeE%2BTVAChQih%2B85cR23um%2FFmHuPmlps4JQI%2FzfnW26Ld9j6%2BWxFs%2FoNz1sqrzuluk6CN1cmP9bud08A7ONPNWyB4HMoIwY4wYi9cjYInt5OnS15kZVOLspg6epgjQsKamk5FQibc85h0fvLK%2BwbiM1Hr1M1o6e9JFsnO8srejVuJIffEPZ%2FTW5wByoe%2F21eLyEol2SQ2JP7zpsNOee81EzSCTkDoliLMSRMUQq0mq8Gqhf14Ew8d6Sq3re1Hmg76pKA80BCRnl%2FZXKbecf24dPYi68rQzNRAUSWwxOk3Io%2BXl3feAHUqE0wFQRMzr4X5P6EjP8U9pq5zzXx%2Bce1wKjZbg9qnafsBU4NC1oeC7c%2FqWtX9ZQagWGOYGscG9tYUBUyIVFIwfQh0vtlcTwW82UtkgnsVhm0S5Di5xDff06c0RFVNj49NGZWo1ITZh1dzc3NRVOu%2B2y%2F8k9S3j4qk7HlFgBew4cJcAKzkkaul5zlcqAWXylFyH%2Fx6m9HqxpmftyeNkaoc8Q6sbI0lP1vgsROaDEL6T1l4Q%2BLPM8QznifhvT6Wv5wvzKXBNPw92uhfUI%2FavzCrEsPVAyh7qCQTe2VmdKJndLcFhlMNubiMQGOqUB4X8FG%2Fc%2FjQPuLeAvNZ8aWuXVu%2BId%2B20FiZoErjl7CzRzDkFJ7T4we3Zi0Uo7CuJ6xQWcszryLSXGYqxls%2FpbFxLJNeMC4v0jJ3SJZetVeu0DqKmQGzd%2BCvlYClRRgBsgu7qgz%2BUklUF3b2TWfZ4zMSx28rLwRS%2Ftan6Phz57nahy7jzRGUtg5Wh%2BpqRLQP80m4RBRdQop0E8xkEbMgQCWy5aq3O9&X-Amz-Signature=6c38a4beda55e9eebcd0526df19433e7286bbf8fb856931f3f7dc5c50c632e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Xfce 환경에서 RDP 마우스 입력 문제 해결하기

## 문제 상황

Xfce 환경에서 원격 데스크톱(RDP) 접속 중 실수로 마우스 입력이 비활성화되어 더 이상 마우스를 사용할 수 없는 문제가 발생했습니다. 마우스 입력을 다시 활성화하려고 했으나 GUI 환경에서는 조작이 불가능했습니다.

## 문제 원인

RDP 접속 시 마우스 입력 설정이 잘못 변경되어 입력이 차단되었습니다. Xfce 설정이 잘못된 경우 재설치만으로는 문제가 해결되지 않는 경우가 있습니다.

---

## 문제 해결 과정

### 1. 터미널 접근하기

마우스 입력이 비활성화되어 있었으므로 키보드 단축키를 사용해 터미널을 열었습니다.

```shell
Ctrl + Alt + T

```

### 2. 설정 경로 찾기

Xfce의 설정은 `xfconf-query` 명령어를 통해 확인할 수 있습니다. 마우스 입력 설정이 있는 경로를 찾기 위해 다음 명령어를 실행했습니다:

```shell
xfconf-query -l

```

이 명령어는 모든 Xfce 설정 채널과 속성을 나열합니다. 출력 결과에서 `pointers` 채널과 `/xrdpMouse/Properties/Device_Enabled` 경로를 확인했습니다.

### 3. 마우스 입력 설정 확인 및 수정

먼저 현재 마우스 입력 상태를 확인했습니다:

```shell
xfconf-query -c pointers -p /xrdpMouse/Properties/Device_Enabled

```

출력값이 `0`으로 나타나 비활성화 상태임을 확인했습니다.

이후 `true` 값을 사용하려 했으나 형식 오류가 발생했습니다:

```shell
xfconf-query -c pointers -p /xrdpMouse/Properties/Device_Enabled -s true

```

```plain text
"true"을(를) "gint" 형식으로 변환할 수 없습니다.

```

값 형식을 수정하여 `1`로 설정하니 문제가 해결되었습니다:

```shell
xfconf-query -c pointers -p /xrdpMouse/Properties/Device_Enabled -s 1

```

설정이 정상적으로 적용된 것을 확인했습니다:

```shell
xfconf-query -c pointers -p /xrdpMouse/Properties/Device_Enabled

```

```plain text
1

```

### 4. Xfce 세션 재시작

설정을 적용하기 위해 Xfce 세션을 재시작했습니다:

```shell
xfce4-panel --restart

```

### 5. 시스템 로그 확인

설정이 여전히 적용되지 않았다면, 관련 로그 파일도 확인했습니다:

```shell
tail -f ~/.xsession-errors

```

---

## 결론

위 과정을 통해 RDP 마우스 입력 문제를 성공적으로 해결했습니다. 중요한 점은 설정 경로를 정확히 찾고 올바른 값 형식을 사용하는 것이었습니다. 유사한 문제가 발생할 경우, `xfconf-query`와 시스템 로그 확인이 문제 해결의 핵심입니다.

**도움이 되셨다면 댓글과 공유 부탁드립니다!**


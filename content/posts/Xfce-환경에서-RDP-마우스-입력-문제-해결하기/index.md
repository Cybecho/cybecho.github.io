---
title: "Xfce 환경에서 RDP 마우스 입력 문제 해결하기"
date: 2024-12-15T13:05:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Xfce 환경에서 RDP 접속 중 마우스 입력이 비활성화된 문제를 해결하기 위해 터미널을 열고, "
notion_id: "15d1bab9-e3f8-80cd-8748-fbb3aa63e9de"
notion_url: "https://www.notion.so/Xfce-RDP-15d1bab9e3f880cd8748fbb3aa63e9de"
---

# Xfce 환경에서 RDP 마우스 입력 문제 해결하기

> **Summary**
> Xfce 환경에서 RDP 접속 중 마우스 입력이 비활성화된 문제를 해결하기 위해 터미널을 열고, 

---


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e91c702e-6c10-4e46-a73d-b573f73e98d4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXUIEAI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFFMDjzrSko6XevB%2BC9dGo2p3qKGxbiIC%2BxgXJcVZW8jAiBL%2FpqBUDGxY2KY6k4mARCGtJo3E1HUbJ7Z98rCD1KwdSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMCt1IIzEQQWWkNNsPKtwDNnUx9S%2FgxEHyDfyZDtNgDWRWkkOxWfLNB0jFq3Odeh2MbW9qcKvFwGYUvoTJhU9ijHklASL65%2FtP%2FDNCgiygO5GjIOCkAPkruF3c0Ok2%2BmeLSo6akWbc%2B15SYblxL2MNHncEDlqD3zM8XQXLF0lsDR74BmqaQx%2FiIwv%2BWoAe7kZnCML2AOcXO%2FkNQoQ6aKew4EH2R%2BHrU8iFKm%2FmYHzIrak%2F5OPGYcPqxL9anjqFO96CigGaNrkcBWRjqBydq%2BXdUHAB1tlwliDvVWeVJ9mnIYdNqifAvf3zVz9V15n7hqRE%2F6uKySNZr%2BknexB%2Bu2xcVBfy8I7X5qduS4YNkx1j0Z5imbj9z25A5o1ZBrUUwtMPE7Xpo4zzYSea%2FSRHbB2I8cNhZxpK%2FLcMrLFkwM%2F4l3EbQ2KmUpGrSYUl%2FAeo4jFhReN8uQqzZSahQ1GHcYpym6YVSu5pyYMF6OMOhAHb%2BwF6%2Bx7KwgZ4i8aOb1hucUFGeNIib3e2k0e8DJ5GwCKA5mMwvTdJnb2%2FTWvJ1e%2FpW5IL7pzRCfqJvMyhVlBo0siUQgm6kO4JrDZdOAVllFee5aFDPqVwWT13upErOIwHzYTmzIWMd4h2k6UmeczWs%2FSmXIQ2uxTKwtZhpKEwzM%2BHxAY6pgG%2FzOrfc68kYlE9bAyovgWW2EgV9j2WRFwajcnZFfmUYMduTxRfKyRUaMVOjw1eNSLFtzEkqsLkPCJw8IjN7iwvG5gS0H7ntbK4ana5%2Bu0wqFy%2B15Wo0Vmcd4f0ghSEgahfiw1m9kLmuPBCAQIXk8FY6A0RlQkSGFPm%2B11REJt5oytwQPURRZgtqJYlQqP9DL4Az4FZjltB%2FnzEcoA7f2r0ZMO%2Foli8&X-Amz-Signature=25c9b7db2fb4b00a0a2d8543912ed65a309be267c393bc3fdfc76f8107cd0b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


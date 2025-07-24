---
title: "MAC 터미널 에디터 변경 & 파이썬 코드 스케듈링"
date: 2023-05-26T00:00:00.000Z
draft: false
tags: ["MAC", "Python", "shell"]
series: ["Let's MAC!"]
description: "MAC 터미널에서 crontab의 기본 에디터를 vim에서 nano로 변경하는 방법은 "
notion_id: "b3fc1361-ccdc-4831-b487-e27e1c9e24a5"
notion_url: "https://www.notion.so/MAC-b3fc1361ccdc4831b487e27e1c9e24a5"
---

# MAC 터미널 에디터 변경 & 파이썬 코드 스케듈링

> **Summary**
> MAC 터미널에서 crontab의 기본 에디터를 vim에서 nano로 변경하는 방법은 

---



# MAC 터미널 crontab 에디터 nano로 변경

터미널에서 crontab을 사용할 때 기본 에디터가 vim이 아닌 nano를 사용하고 싶다면, 다음과 같이 하시면 됩니다.

터미널에서 다음 명령어를 입력해주세요.


```shell
export VISUAL=nano; crontab -e
```


위 명령어를 입력하시면 crontab을 열 때 nano가 기본 에디터로 설정됩니다. 만약 vim으로 변경하고 싶다면, 위 명령어에서 nano를 vim으로 변경해주시면 됩니다.


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d9a153ae-e19f-42f3-b288-1d7c67c7f3c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGMPSDJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCi8Ot4m9Q6LpWFegxW%2FusE36mdjwxmrM8vvN5q9oREjQIgHjbLAz2DilsrNnjj7gp434AqvoweOFEXWy0FslvO17Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKgNEb8Q7Thf2JlfpSrcA7LK0O%2B27XEYOO4EeGWXd9Vj%2BMvEqxAuNs28%2F9me1y3BIuBbZKazOZzywpBTHu%2FrmVns4cZ2a7dIAsLDmj%2FTtp0isuCa4KWu1MDaZafE4gULzzL3vCXqEj%2Fic2oj%2BgPZcUcxNIefwvzzUpvb5I6Lg9LOgM6zFvKPDs2Hc%2BhVgjzxT%2BzfCScJASLmLyWoFwFhuYnhDg7Eg0MCXmFlz4eOyx5AaTyipm4%2BJNzO4V25m5VUKKCkkOSLrKB%2FC3XamJIStWGtdp9YE1ZRPefJr9zeH8DpVEWsbnFrkdxtqvqrbvqZD%2FlJ6HvSQmwREx2B7pB1f6tyFqvion8CJQTFEavLSyjn9RBZ%2B787uwoBHoAH4gM4sRKh7DFvfIT06Uph41RrjqgPizb3hdUHKx%2FFp09BlULsfOfHSZFXGqYS4S0t3xO%2Fjprhb8MEzU7%2FQjCPWDkLEEymIr3YMouaWNmx5I%2FcvhIkUHcED1Iz9ic3ymPz4do9COB76ALfjwQlvM89innYnr%2FjzZBoTeFSgGqiGqsyD%2BBow9xVmtJFOwpyLoCw%2BiYAbgPSenSZ5GyxxGp3Ql0%2BuklFxDgRlkFcztRKuS6u71YRglTIDWase4tJJk%2BbOCCHhvzjgEf%2FRl5IILBDMJvPh8QGOqUBEShfOTqr2eiCUhNdczKX%2BGENSsUlmxfdAwG22rJTio5Q8NCj4zCYarBeF6GfyeIawHxuLWSQ%2FaElEoQTBUYLOk2KoDsQPkGLzxOeWY2UBTA6nt669CQEjSaMI7EE5ntn%2BcZrcrDdxJ5R9DmbUNKJGXq2cPRIK1w3wKeeJssiBBNRORRcmJGjGCST5L0NW3gZ2Qqxv6oaaPKimhDCTHENldfQcaOS&X-Amz-Signature=5fba24d4f7faf71b90e639415a7bdfa0639b2e1b111f76c2319a1adca578659e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

기존 vim 에디터는 상당히 불편하다

nano가 조금 더 직관적이고 편해서 nano에디터로 변경하려고한다.

방법은 간단하다.


```javascript
export VISUAL=nano; crontab -e
```


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6e822280-15d7-44d5-91c9-5f9ce6231efe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGMPSDJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCi8Ot4m9Q6LpWFegxW%2FusE36mdjwxmrM8vvN5q9oREjQIgHjbLAz2DilsrNnjj7gp434AqvoweOFEXWy0FslvO17Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKgNEb8Q7Thf2JlfpSrcA7LK0O%2B27XEYOO4EeGWXd9Vj%2BMvEqxAuNs28%2F9me1y3BIuBbZKazOZzywpBTHu%2FrmVns4cZ2a7dIAsLDmj%2FTtp0isuCa4KWu1MDaZafE4gULzzL3vCXqEj%2Fic2oj%2BgPZcUcxNIefwvzzUpvb5I6Lg9LOgM6zFvKPDs2Hc%2BhVgjzxT%2BzfCScJASLmLyWoFwFhuYnhDg7Eg0MCXmFlz4eOyx5AaTyipm4%2BJNzO4V25m5VUKKCkkOSLrKB%2FC3XamJIStWGtdp9YE1ZRPefJr9zeH8DpVEWsbnFrkdxtqvqrbvqZD%2FlJ6HvSQmwREx2B7pB1f6tyFqvion8CJQTFEavLSyjn9RBZ%2B787uwoBHoAH4gM4sRKh7DFvfIT06Uph41RrjqgPizb3hdUHKx%2FFp09BlULsfOfHSZFXGqYS4S0t3xO%2Fjprhb8MEzU7%2FQjCPWDkLEEymIr3YMouaWNmx5I%2FcvhIkUHcED1Iz9ic3ymPz4do9COB76ALfjwQlvM89innYnr%2FjzZBoTeFSgGqiGqsyD%2BBow9xVmtJFOwpyLoCw%2BiYAbgPSenSZ5GyxxGp3Ql0%2BuklFxDgRlkFcztRKuS6u71YRglTIDWase4tJJk%2BbOCCHhvzjgEf%2FRl5IILBDMJvPh8QGOqUBEShfOTqr2eiCUhNdczKX%2BGENSsUlmxfdAwG22rJTio5Q8NCj4zCYarBeF6GfyeIawHxuLWSQ%2FaElEoQTBUYLOk2KoDsQPkGLzxOeWY2UBTA6nt669CQEjSaMI7EE5ntn%2BcZrcrDdxJ5R9DmbUNKJGXq2cPRIK1w3wKeeJssiBBNRORRcmJGjGCST5L0NW3gZ2Qqxv6oaaPKimhDCTHENldfQcaOS&X-Amz-Signature=47f02a174e25a3a37f8b23c895bc515cb5baa02b8c7602ccea7d78f970d90e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


다시 Vim 에디터로 변경하고싶으면 VISUAL 부분을 vim 으로 변경해주면 쉽게 바꿀 수 있다


```javascript
export VISUAL=vim; crontab -e
```


# MAC에서 파이썬 스케듈링 방법

우분투 22.04LTS 에서는 파이썬 코드를 실행시키기위해서

`* * * * * cd /home/your/path && /usr/bin/python3 python_script.py`

cd 로 디렉토리로 이동하여 and 연산자를 사용하여 기존 파이썬 설치 디렉토리와 비교하여 코드를 실행시켰는데, MAC 터미널에서는 실행방법이 달랐다.


cd를 생략하고 파이썬이 설치된 디렉토리를 먼저 입력하고 파이썬 코드가 있는 디렉토리로 바로 이동하는것이다.

다음 코드를 확인하면 된다.

```javascript
#  m     h    dom mon  dow
#  *     *     *   *    *        command to be executed
#  -     -     -   -    -
#  |     |     |   |    |
#  |     |     |   |    +----- day of the week (0 - 6) (Sunday=0)
#  |     |     |   +------- month (1 - 12)
#  |     |     +--------- day of the month (1 - 31)
#  |     +----------- hour (0 - 23)
#  +------------- min (0 - 59)

* * * * * /usr/bin/python3 /Users/your/path/python_script.py
```


# 현재 실행중인 파이썬 코드 확인방법

```python
ps aux | grep python3
```


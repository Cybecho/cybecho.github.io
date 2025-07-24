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


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d9a153ae-e19f-42f3-b288-1d7c67c7f3c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVZWGKW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCImk8VPnm5e2QTCcwWxrwYiu%2BXJRkSryuEwzNAYITDdwIgL4xOEBdKQvwWCWRY4y0N%2F6BGCWLAFkVK3EJ2uh6qmZYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJGkagd%2Fytc2NeWHaCrcA5CvtsPtHcnJDOYHEZAGsUmcuozv2dIqrNQ3a1R4K%2BKV%2FImyMXtl5IfeNDtMKzSo0JGqk6%2B49XwzeXvri56jptBH10X07QajGTUIMcxZvo2xjpgB6LtU5Zi5sQ82C6gBChHItaUdX9VFIVZHOX7OaGzMwb0jhLmCPbwoBuA%2FYtA6hKR9q8PlhiYZz2peO3UcGbcSf54tW%2F4VJ%2B8of99%2FwYkm5HxXKc22mpsElBsicAEVzJcBDU6Jny3O4PwMjpIsirKk651TNzM1tZ722D5IZvHq13skS2G%2FvDXFzoIzL%2BnRkQOjicZlUl8OMBVyTOEL1lP9JFGIhHM%2FrhciawvzYje8HKCxQIhHFQ4C88Tk03kMZzO%2F8AKAavpNxluhy0uav8L%2FYasfxUfaPW%2F35Wj1zdDBJvS6UwjuCSZS%2Bo%2BIIbrcEg0fa6oh0KvBfL5im5IUM8C8iLQIfvyw5ry1nsyq5VgFgWTdfMtd%2FSy%2FCwxVlqilIuLtqOT0MQbS5McfBvtQpwHLRM5XBAtMW84XVU3bqTy%2BAbvY3N9qAWjTLmzPZBS7TSmxP6WpD0yJVzUiMxfXM4akR1qKcchjlRxZiAXHD0vbeA16uRDRnw7VU7ll0vfJCkNCHZIpJImQnSigMPbOh8QGOqUBwnXQodIUfYolcszUevht8PjqK2WsAuP6oR1UezpjJ7JATzOixM1kubGd5BKMFW8EinrnVC4L%2BaqepYBbriPfpA96eIjYyrq4QCP6tD8aHzT4LWspoQb%2BhHWzMlFvLGv3hxpdFGozg0IayRN69EcpkFf2lvFEnRGwCZ%2F6xVsYC4vOiy6D0Y6Ob2SDckOId%2BVMdTTnUZEBvd%2Bntu7iwQIeLww2TbGl&X-Amz-Signature=22cee604809e842230357c88e9b8e76147e10d94c441186eacdeb8ef1e2fd5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

기존 vim 에디터는 상당히 불편하다

nano가 조금 더 직관적이고 편해서 nano에디터로 변경하려고한다.

방법은 간단하다.


```javascript
export VISUAL=nano; crontab -e
```


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6e822280-15d7-44d5-91c9-5f9ce6231efe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVZWGKW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCImk8VPnm5e2QTCcwWxrwYiu%2BXJRkSryuEwzNAYITDdwIgL4xOEBdKQvwWCWRY4y0N%2F6BGCWLAFkVK3EJ2uh6qmZYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJGkagd%2Fytc2NeWHaCrcA5CvtsPtHcnJDOYHEZAGsUmcuozv2dIqrNQ3a1R4K%2BKV%2FImyMXtl5IfeNDtMKzSo0JGqk6%2B49XwzeXvri56jptBH10X07QajGTUIMcxZvo2xjpgB6LtU5Zi5sQ82C6gBChHItaUdX9VFIVZHOX7OaGzMwb0jhLmCPbwoBuA%2FYtA6hKR9q8PlhiYZz2peO3UcGbcSf54tW%2F4VJ%2B8of99%2FwYkm5HxXKc22mpsElBsicAEVzJcBDU6Jny3O4PwMjpIsirKk651TNzM1tZ722D5IZvHq13skS2G%2FvDXFzoIzL%2BnRkQOjicZlUl8OMBVyTOEL1lP9JFGIhHM%2FrhciawvzYje8HKCxQIhHFQ4C88Tk03kMZzO%2F8AKAavpNxluhy0uav8L%2FYasfxUfaPW%2F35Wj1zdDBJvS6UwjuCSZS%2Bo%2BIIbrcEg0fa6oh0KvBfL5im5IUM8C8iLQIfvyw5ry1nsyq5VgFgWTdfMtd%2FSy%2FCwxVlqilIuLtqOT0MQbS5McfBvtQpwHLRM5XBAtMW84XVU3bqTy%2BAbvY3N9qAWjTLmzPZBS7TSmxP6WpD0yJVzUiMxfXM4akR1qKcchjlRxZiAXHD0vbeA16uRDRnw7VU7ll0vfJCkNCHZIpJImQnSigMPbOh8QGOqUBwnXQodIUfYolcszUevht8PjqK2WsAuP6oR1UezpjJ7JATzOixM1kubGd5BKMFW8EinrnVC4L%2BaqepYBbriPfpA96eIjYyrq4QCP6tD8aHzT4LWspoQb%2BhHWzMlFvLGv3hxpdFGozg0IayRN69EcpkFf2lvFEnRGwCZ%2F6xVsYC4vOiy6D0Y6Ob2SDckOId%2BVMdTTnUZEBvd%2Bntu7iwQIeLww2TbGl&X-Amz-Signature=661922c7a27fd758e4092f3a23eb9b9cf8d7c50ab75c274e8d52d1d3419e9433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


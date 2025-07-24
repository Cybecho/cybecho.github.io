---
title: "MAC 터미널 에디터 변경 & 파이썬 코드 스케듈링"
date: 2023-05-26T00:00:00.000Z
draft: false
tags: ["MAC", "Python", "shell"]
series: ["Let's MAC!"]
description: "MAC 터미널에서 crontab의 기본 에디터를 vim에서 nano로 변경하려면 "
notion_id: "b3fc1361-ccdc-4831-b487-e27e1c9e24a5"
notion_url: "https://www.notion.so/MAC-b3fc1361ccdc4831b487e27e1c9e24a5"
---

# MAC 터미널 에디터 변경 & 파이썬 코드 스케듈링

> **Summary**
> MAC 터미널에서 crontab의 기본 에디터를 vim에서 nano로 변경하려면 

---



# MAC 터미널 crontab 에디터 nano로 변경

터미널에서 crontab을 사용할 때 기본 에디터가 vim이 아닌 nano를 사용하고 싶다면, 다음과 같이 하시면 됩니다.

터미널에서 다음 명령어를 입력해주세요.


```shell
export VISUAL=nano; crontab -e
```


위 명령어를 입력하시면 crontab을 열 때 nano가 기본 에디터로 설정됩니다. 만약 vim으로 변경하고 싶다면, 위 명령어에서 nano를 vim으로 변경해주시면 됩니다.


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d9a153ae-e19f-42f3-b288-1d7c67c7f3c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUOR3SY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCgUXPCm4yc6f%2BJ9s0rbjnZsv3awsei4%2BPOZqIZuz9BKQIhAJhPeRlk4nhqS6gK1cwzcb2W8Q9KBT8%2F7CeQepGVwQHgKv8DCC0QABoMNjM3NDIzMTgzODA1Igx28M%2BHXduHxsYxcD4q3ANPuggjvj%2FyEXuIaV85UX9gW9HGIdk8fg0yPrQcSVyO2BVAtsAc5nBajhQm0VNnHl22P1gQ5hl%2BfloYANnRD%2BHnP2sPfUlkmlWWxghkYY%2BEdMko3KfZxpcsZsE7ZTLL%2F7QvbPCox7q5XSoy6xf7lA1%2FXLbQiBTJDJh1sQzh5SxFLFqiyB2IZBaW0vWOhLEGBXh9f0v%2FjBeu00mY5N9ZpFZ%2BFoHxj6XnWixlcrO05Wpo6A5j3YUJMLVLCMtnky2JogIBOLBD9hu15hmkYW30XTzmMBH%2BeekN9sz62vpU3bFi66gDoiqABD16Ct%2BdYIVbWFnW7nioApk4npD4habW2scupaoxfK14wBxtdAXjgh6RLVjVCsrfEZzgIeoB7sO69kIsE0yQjIqNMVwOXuq0WcVi6GwvjYkxrRphX2es0Je0K0RwfJMAyykBUVokoskf1kmEJHNA0ofe39kCI1jbsNWg589wjaC%2F2kbmkqkjS3tLTnhZxXMvZEHv45UFnCs7GzdLdVOfSWJnV5otvCZ2OA4kh9kWQcV0qN8HpebTFa71nXa1UH90J36trCs3qff0F6URcT%2Bob0OWl47CI2zZxijrzpyodirITAOD7rKlUewEE7WJo7ny3LSFCClQIzCNv4jEBjqkAb5dl%2FAgmmUqhn%2Fkp%2FYrRxYPbs%2BKmnScxYLX96ZdEylLFKdJKo1jpIAvtaqgqnFsffAziRUBHSwtxJwVwHIQve6HJPcZqOvTOpOPDDAQB9xbRn3u3F0QZYcdaxJCewbM4zreeVvgkegNb0AAQ%2BhafKOcMowqRLeT%2FMjonmis1NUabyNtnQt4odnjAp1Hr0oqx2wydCZVUQ6rr0rckjYrcxuZ2ZNa&X-Amz-Signature=f53122e670da0133cd262b70c8703f952888ee4487776d105dcb88b9b0195da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

기존 vim 에디터는 상당히 불편하다

nano가 조금 더 직관적이고 편해서 nano에디터로 변경하려고한다.

방법은 간단하다.


```javascript
export VISUAL=nano; crontab -e
```


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6e822280-15d7-44d5-91c9-5f9ce6231efe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUOR3SY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCgUXPCm4yc6f%2BJ9s0rbjnZsv3awsei4%2BPOZqIZuz9BKQIhAJhPeRlk4nhqS6gK1cwzcb2W8Q9KBT8%2F7CeQepGVwQHgKv8DCC0QABoMNjM3NDIzMTgzODA1Igx28M%2BHXduHxsYxcD4q3ANPuggjvj%2FyEXuIaV85UX9gW9HGIdk8fg0yPrQcSVyO2BVAtsAc5nBajhQm0VNnHl22P1gQ5hl%2BfloYANnRD%2BHnP2sPfUlkmlWWxghkYY%2BEdMko3KfZxpcsZsE7ZTLL%2F7QvbPCox7q5XSoy6xf7lA1%2FXLbQiBTJDJh1sQzh5SxFLFqiyB2IZBaW0vWOhLEGBXh9f0v%2FjBeu00mY5N9ZpFZ%2BFoHxj6XnWixlcrO05Wpo6A5j3YUJMLVLCMtnky2JogIBOLBD9hu15hmkYW30XTzmMBH%2BeekN9sz62vpU3bFi66gDoiqABD16Ct%2BdYIVbWFnW7nioApk4npD4habW2scupaoxfK14wBxtdAXjgh6RLVjVCsrfEZzgIeoB7sO69kIsE0yQjIqNMVwOXuq0WcVi6GwvjYkxrRphX2es0Je0K0RwfJMAyykBUVokoskf1kmEJHNA0ofe39kCI1jbsNWg589wjaC%2F2kbmkqkjS3tLTnhZxXMvZEHv45UFnCs7GzdLdVOfSWJnV5otvCZ2OA4kh9kWQcV0qN8HpebTFa71nXa1UH90J36trCs3qff0F6URcT%2Bob0OWl47CI2zZxijrzpyodirITAOD7rKlUewEE7WJo7ny3LSFCClQIzCNv4jEBjqkAb5dl%2FAgmmUqhn%2Fkp%2FYrRxYPbs%2BKmnScxYLX96ZdEylLFKdJKo1jpIAvtaqgqnFsffAziRUBHSwtxJwVwHIQve6HJPcZqOvTOpOPDDAQB9xbRn3u3F0QZYcdaxJCewbM4zreeVvgkegNb0AAQ%2BhafKOcMowqRLeT%2FMjonmis1NUabyNtnQt4odnjAp1Hr0oqx2wydCZVUQ6rr0rckjYrcxuZ2ZNa&X-Amz-Signature=4200098854c543b16b840593e6d38d894cfa26459be8af850012aa44ac95ba27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


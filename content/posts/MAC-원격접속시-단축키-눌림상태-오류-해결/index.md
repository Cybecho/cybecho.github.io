---
title: "MAC 원격접속시 단축키 눌림상태 오류 해결"
date: 2023-06-01T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["원격 라이프!", "Let's MAC!"]
description: "JUMP DESKTOP 앱을 사용하여 원격으로 MAC에 접속할 때 'F' 키가 'cmd + F'로 인식되는 오류가 발생한다. 이 문제는 두벌식 입력에서 영문자 입력으로 변경함으로써 해결할 수 있다. MAC 환경에서 단축키 사용이 편리해진다."
notion_id: "a1f07d60-3fce-4087-b1c2-ad32e913fafc"
notion_url: "https://www.notion.so/MAC-a1f07d603fce4087b1c2ad32e913fafc"
---

# MAC 원격접속시 단축키 눌림상태 오류 해결

> **Summary**
> JUMP DESKTOP 앱을 사용하여 원격으로 MAC에 접속할 때 'F' 키가 'cmd + F'로 인식되는 오류가 발생한다. 이 문제는 두벌식 입력에서 영문자 입력으로 변경함으로써 해결할 수 있다. MAC 환경에서 단축키 사용이 편리해진다.

---

JUMP DESKTOP 을 애용하는데, 해당 앱은 IOS to WINDOWS 와 상성이 매우좋다.


하지만 최근에 Intel MAC 과 M1 MAC 을 구하게되어 MAC환경도 원격으로 사용하기위해 이것저것 시도중인데, IOS to MAC 원격 환경은 정말이지 사용하면 사용할수록 계륵같다고느껴진다…


오류 상황은 다음과 같다


> 💡 **원격으로 접속된 MAC에서 ‘F’ 를 입력하면 ‘cmd + F’ 로 인식해버림**


문제해결은 다음과 같았다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/802025d5-90ec-4189-892f-5dbed1978f30/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWPDUEC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEJjMBPirymS%2BWSvSgDIHfcLfP57UhSc8nXLF3JhduSJAiEAjfwdARj%2BTd%2FIQpyF9IGu1vdpcBIzSBaWb3dUmoXRfbAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBntl%2Fugkb60c8VlhircA1g1PH31c1UqWG2672t5jBA6IViQb1mFcMyaXlSd8ZEiAkm91U6XTo93viS9ZOJdZYwvo4DR2mf9GN3d8fM3Yy4AVM0rG45vgwg9UY6J9y94oEFVaAwFcyiwxOoDn6HJu11jYmI62acLarJVaKGa1pzIzlTrVdZ%2BMGs0Axf44gAOVqIkqOQOqFCfbshBcoSoEJmWhmILd%2FZiSnL8Az7I7UNqBeu00CQzNE2dzkaPe2pMYhBuG8QcxySShM7K3JY8yyyxE4Zs3AYDopVfvCf%2B2jzICTVXScDSEkHqjPatxMB%2F9ue6Ce%2BYQTVjdre7apRnV58ihoaTO1Vo7G3PriMVWkrAalffj8aOOGDNeJMFX1OUjyRmQtZfasQdohtfWWwnE8U3yTYzMpzL8vhk1%2FP70uW%2F8Ss%2B1SSbjSeO4d%2FJJs5qenahSLesgDAF%2BPwskZBzn%2B09nhhCAdxTzocZ2YtR0onpWx2uSP%2Fsj%2By0oZ2bEadwD6MDWshCtTCjDoV3TzUuWzHPI5G8ww91lLKbTlTGkm2TH60uxitNNN3MgsQr77LVr1Hr5UBwr7OWbwltZcJL%2BHjCoVtsZ9fb6Y7T4tAmjCVc1AK1hG0eEHpbJ6yaZlFXm4DREdgRhPNoDbL%2FMJq%2FiMQGOqUBhsG%2BR0ZkOfqbgYJazpBDwPkoHRlZAzCgoyeIbJNqp9hQGJ6dKGBqMOu2vmvAsLHnwbtVo%2FPEtBbws0HZ0Q8fdgYgyKAzQ8ky%2FQyyFcy909PqxEhubeNzn9zgKD77c89hZ1ixkdTjx5QORSi4ghEtvXty3OO2H5p0QzUfWhzMAuysLzDfifaAtb4DzbrMgN8n9yz9QB1PG8L0jU1NAdxEhZVdNCzn&X-Amz-Signature=ac843c5e2bebf5dd521cbb3607ee2fc7760af28fe893bbb7504e0df4977762a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


바로 두벌식 입력으로 되어있을때 그랬던거라 영문자 입력으로 다시 변경해주면 문제를 해결할 수 있다


쓰다보니 맥과 단축키를 동일하게 사용할 수 있어 편하다… ios2windows 에서는 ctrl c 를 해야하던것에 비해  ios2mac은 Cmd c 를 그대로 이용할 수 있어 편하다…!


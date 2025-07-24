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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/802025d5-90ec-4189-892f-5dbed1978f30/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEWXNC7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIA2IBAfCLuKA34qbMeKiiwqkNQFPNOEn2XmcleRR2n82AiAXsevbCkKBz08zaJgBpOgrcbIwcLVOXmAe1naHsAZbbir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMetNi2kK29cvDnngBKtwDMUGwTZjTsWMLSBZP9vTp1qjZP35HCap9w9z75dlcA4EpK%2F87bceb5Pts8j3SB5cDWQGryo6vc5%2Fp9GqHihVe7jKEVlc8H1YTtrnj4vh%2FmvIpIaZT7VaPiKoikHgNIJLH74Dvt6U9BtZV58MXx88qubvg%2Bu6NtoxqqDOT0xtN7ZKH2LwWVRYm2%2FqSFX5QAJoVDjnlokXhOw02XPR5k4YkYVlqYOLnxIPj%2FEW5M%2FkaQ4Eem%2F2YNTAd7WmBrglFc%2BrfqvlOZZPYWiFBEXBNgAn0UwA7J2tJOY1CWq%2FD8o1Q3s6RqG8jfLve3iDv2TLGZhoEjD3mhvcoEccjODhchR6yPvSpHwvILhsLFqZSd1AHdqEvb9uFWHKuOANyr%2FsklAS7ce%2FyBK76vDugoQ72ro%2FENjR7fuof65NmPmwt3KKKrEZc0YHMGFrSKMaz%2BULjXE3AM0SFtlPiApkTXanrwuIP4FYOVg0CE4f6Mioq0NcQqh4zTNSe86kWJbiz3obTGG%2FPdA1%2B%2Fu6zfl7ch0yu10y2A6i1Vw59WpaR8paSAGVUMcqGxoNhzrF2YOKNcl%2FFCxbahyr3oGF%2FI3oyl1%2FihyE66rdYRTAKeseIp0afIFege2kSvgrVQbg7EAM3vy8w0s6HxAY6pgEVH%2BcItLu3OcfwtvsCF0V0uaz21jzwUf2ilrhsfUUznNSldlgFgQep93r49FBKNy4HUSh7llR%2BU60BcEUXxnNTe2Cbd9sSTv7swQWH9gN%2FW5XtS7R48jVYyaGtnXVKaFVgCjc0lDhtIAasgn46vCdFJUEgq5uehatS245lVk23BdD7y0hbKyPsvnXAAvVYKZ%2F0feKHCGzXUIZAZyvdX%2BZoqOKH63fQ&X-Amz-Signature=0981a6beb9282d313845469ff3feed0d6ca654c7f775fc41f2d00afc5b695d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


바로 두벌식 입력으로 되어있을때 그랬던거라 영문자 입력으로 다시 변경해주면 문제를 해결할 수 있다


쓰다보니 맥과 단축키를 동일하게 사용할 수 있어 편하다… ios2windows 에서는 ctrl c 를 해야하던것에 비해  ios2mac은 Cmd c 를 그대로 이용할 수 있어 편하다…!


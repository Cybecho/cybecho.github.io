---
title: "wine 을 이용한 윈도우 앱 설치"
date: 2024-06-06T06:17:00.000Z
draft: false
tags: ["ubuntu", "Debian", "Arch", "fedora"]
series: ["Let's Linux!"]
description: "wine을 이용해 Windows 앱을 설치하는 방법으로, playonlinux와 wine 설치 방법, 굴림체 글꼴 설치 방법을 설명하고 있으며, 카카오톡, 반디집, 노션 등 여러 프로그램의 설치를 안내하고 있습니다."
notion_id: "6d0d0331-75ee-4c73-8707-0be5d3d992f4"
notion_url: "https://www.notion.so/wine-6d0d033175ee4c7387070be5d3d992f4"
---

# wine 을 이용한 윈도우 앱 설치

> **Summary**
> wine을 이용해 Windows 앱을 설치하는 방법으로, playonlinux와 wine 설치 방법, 굴림체 글꼴 설치 방법을 설명하고 있으며, 카카오톡, 반디집, 노션 등 여러 프로그램의 설치를 안내하고 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/12219858-1e91-4b07-820d-6a8b26fa6e41/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGZ4NIU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC1CLlcfCnwFf512oIgAaGMz2KbOa%2Bm3r3RDCl4SFmL9AIhAK90JwX%2BwC6jf3Z5KbuNyBIEmiioxwEpkmXDhfegGhJUKv8DCCkQABoMNjM3NDIzMTgzODA1IgyHZI5xR6EFt4vKhCsq3APizx3g%2BydVoVr4tDBJm8m%2FR8QZ88oy2P%2BMraDxkjxWXwUO%2FQG2AZnYU4Uv5XyQ7YJRFlDHEmyqFKjkFKPS2LuVtU3qgpVX7hN%2Bzy2nVrqutHwlXa2J2U70cookOuY6DmdZ0P8%2B5LKmfuIdg5cPE1D40f%2Fys0wuapI0mrYfS6ZtIRAurmE8yHOQovYquenWXfRweqF8Bt65r2KE0xuahWBb5MLItxZmvPW2598Wri8QNRXelSALBKSmTxxy%2Fe%2B4CGNMMr3Ng14iBPRQ9vfX7bGrzOF87NPD5xIddQV8WUprqUKZ0sZYajHeAdThRi09ylzpLb3cQPMUoTZN0QuAWTorLMDS8ZYO7Z6ZnZ7paGWGS%2F0d9ulfd0ArAa8bohYiiyz9ka570nfHiMbG9WyScOHTdhpmy1L7KJLP8Ok4ADEHQG6rEvP%2FFA0%2FR110jhpKLJUIzeSiUcEqbnYCOu2aGb7ZesL4DVx5FVlT3w1gUGmLpYEn1nUwlF2fYVvdt%2FH5HjoIVk3rRqCW2aCeKz9prM1ajq0CGn2Vjti6Mn0WhECUIvaUBsRCvHwGRUKz4Zk%2BqjTB3A0U6EyilehVwGwDm4z4ini%2F2iCvvabVyD%2FBTWbwQ9n2JMRXs6SU8rsERTDkz4fEBjqkAYwDo6kQOe6JGwxqddmZpSL48ws03jpcIBsOxLYAAy2zjLUygl%2FYNcofSrl27%2FtLwPwS9uxTriSusMjUbXbHDxOcoNChUJ0kgjeykglLFBPL5tPQ9lPHIW4DDlf%2BBz07LcDJO8mOXJAEnNYaiurlb%2BRsqkOf9nOyCPiSuvZxiOSg7YKede029E2Ld5zCt4Tp9UAl2tMAin4MOp2V8wao7OoYamGi&X-Amz-Signature=011b661d52860fe0a6b07ff858b6d4bb1dfdf5a6b347894dd7ad838e1cc3e54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://hamonikr.org/used_hamonikr/82280](https://hamonikr.org/used_hamonikr/82280)

[https://itlearningcenter.tistory.com/entry/【Ubuntu-2004-LTS】카카오톡-설치-1](https://itlearningcenter.tistory.com/entry/【Ubuntu-2004-LTS】카카오톡-설치-1)

[https://solearn.tistory.com/200](https://solearn.tistory.com/200)

---

## playonlinux 설치

```bash
sudo dnf install playonlinux
```

## wine 설치

> 💡 **버전관리**

> 💡 **LANG="ko_KR.UTF-8" wine <.exe name>**

## 글꼴 설치

> 걍 굴림체 다운받고

[https://velog.io/@kiki3700/wine-프로그램이-한글-폰트-깨질-때-해결하는-방법](https://velog.io/@kiki3700/wine-프로그램이-한글-폰트-깨질-때-해결하는-방법)

[https://ko.cooltext.com/download-font-굴림+gulim](https://ko.cooltext.com/download-font-굴림+gulim) ← 굴림 폰트는 여기서 다운받으셈…

## 그 후에 exe 파일 알아서 다운받아 설치하셈

- 카카오톡
- 반디집
- 센드애니웨어
- 노션
- termius
- 점프데스크탑

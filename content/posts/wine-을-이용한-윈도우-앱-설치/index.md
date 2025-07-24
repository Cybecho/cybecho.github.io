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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/12219858-1e91-4b07-820d-6a8b26fa6e41/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2W6DUV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEA59A7uVKD6HoWebaw3dajHET6WuaHxlZOMI%2F4GCRSyAiEAh52Azru370W3pKoiB6qPTa2o1m2QZCFsof3GQU%2B8sDIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDArOCyySVQG%2B%2BQQcTSrcAyq%2BA4KbFJ9Q5UKsTvvpJLfk7Ac36Z0sP1SfIgJtOg57BDx7ExiBitEGUnduqMaOER1BdYs47UDBy18QL53vxzWMVgjSVLHwcfLzu7LJ%2FnSusjUduHAtpvWHGhpyHCw%2BB1RVlpNU%2FrCrGJ4RkGsLYRRBMusemyajA4M2L9SJJKEIwznbaBfrGGKj0kBqRC7Hy63NVYSe0MGpoJ%2BKd77dnADrGCcVx7MveCXv1UfxRN5qA4xvaRxStjCElgcB7P%2BoFeYTc3XyABQ1LFRa7jCMSLCm1GWVHy7GvEL99DPX6AtC2wn4%2BtTC4NZRc6LGFwoa8c5qV6XfgNLwCkKFJQXt9joHKRp9TK86M9rJnixWQg%2BJt%2BZ68sCKPiu5pr1YL%2FLSC1bm%2BqOqItgUAkvQXJju94IIpeOndlEj6UutfWN20Ozazvg2Rs1kfo0oEsB39Es8hpwdfipDlM%2FcxyC8sdi6vJ4BUX9msWqA5SLhwzTRuzgSE3W4B8n8SbyxTA%2Btci3ja2wpjg9bat3K82Myudvmo9xRyewRVs5bjGYanq8segjyHG0aSppDLM2a3ztHc%2FkZit5cUBjvzaYPqcxw5gRw%2BzxCfZ%2F4ig1IeTaY15UEeV4wzcBdRrXVyxLxz2GcMJrQh8QGOqUBsjCMWJu0rS%2FzipI0P%2FemFWYT6sTcaWXSb6z30ZkBjiCrZxPqaDDe2RxZEljEFqxchxslSWyeIJk8mf8iT1Qzh1%2FrwqkjDq8wK0oBa%2FlNCih%2FBEfUAEUXFste7uD0iSBlN8UyHeV4jQT%2FsW0tbtBq0r4MfkbQGx%2B6tX0CCIZ%2Bd4tIKF1R5QcVsTrkfJFFjkh8cUPFqaAswLsS%2BfucAcPcLOl7ee6S&X-Amz-Signature=d7b65e40ac59bb1eea2e58e330774c4474f39bad6903da256ccf8b873ca69e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

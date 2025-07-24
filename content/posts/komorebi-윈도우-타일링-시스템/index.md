---
title: "komorebi - 윈도우 타일링 시스템"
date: 2024-06-02T07:54:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 타일링 시스템인 komorebi의 설치 방법은 Scoop을 사용하여 komorebi와 whkd를 설치하고, 예제 구성 링크를 통해 설정할 수 있습니다. 제거할 때는 프로세스를 중지한 후 Scoop 또는 WinGet을 통해 삭제하며, 관련 파일을 정리하는 명령어도 제공됩니다."
notion_id: "b1afaf94-16b5-4e6b-ac82-c395dc0f7047"
notion_url: "https://www.notion.so/komorebi-b1afaf9416b54e6bac82c395dc0f7047"
---

# komorebi - 윈도우 타일링 시스템

> **Summary**
> 윈도우 타일링 시스템인 komorebi의 설치 방법은 Scoop을 사용하여 komorebi와 whkd를 설치하고, 예제 구성 링크를 통해 설정할 수 있습니다. 제거할 때는 프로세스를 중지한 후 Scoop 또는 WinGet을 통해 삭제하며, 관련 파일을 정리하는 명령어도 제공됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/13baabb0-8ce0-4b8b-9a3a-1718f5a70c92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOI2U4ON%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICvcBBBlPFbJ%2BO1vUQghLxtsM8AE21jIjU8fr3cw2V8fAiBbqmpAytzwafT0Gp3ndyRnOGAilJTCDH3tPJ5FkGyJDir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMtPk5%2FDS3RKFvPTGJKtwDHEoHZ8SqwKYwkUBEakjTgvlOhZeTbV4CKDXvpNLY7AC08wMJsL1mDmatLR2Szg9%2FuepzkXNupdX4htd10SsIs72YmcbMj0HhRWnxDpUdzxfsD2YBWE1i65LCX2wCzQBHmRTjni5y0%2BWbRQ8T3gaenIYs6S4oEnoUXoAyUYt%2Bao6YB7U74qjbRUkGmwL99I9rLyk8AvSMy1ETGsb1XZUPaXUgX2CZYCXONHEyKJTFBg70k%2BCli80mauV3BqGeOS8KY2t5GEnLpNCvs1vCRVGpH%2FRm9MFfgrtzQSav5eDIFL9ogY%2Bdt3kiqoe8y%2BNahQXxTFY3QiqVio2JcsoWMtVBkzC4QhA8vzSvgVp54MzFcvXpPS2mm6QvCad4%2BLs9g5kMsOPqvLOiLvGcvNZEEamSsFLFsubPpBMCMdFyOS5SM4E0OdBrzWoI3Fg9c4HIpvlf5N38FBHnWNAo3%2B%2BDWBv9Xo%2B3ytTMmyAy%2FFnaO%2BSgeuorWTfzl1IXArCQ5UP1AepnNthOH30BPYP39YrywPcGyAKc8HO5hsSDmUHTsCi%2FxJKUNYmBgufwnHc%2Fyaja6SQSumaFuS1nPiWhnqGWnwVSnnT5vYq5OCOIXttpZqjDEG4TyWZE7SSAS4mHD%2FwwvM%2BHxAY6pgEP4ny%2BW9LTfsgIELXwiAWtIxW3QFShQLJsgGSaTwwlMPkJAhoB18pumJEbOSvhtyLe6iIv6ZMcyEyrhGLO7yq3QXLcoi3vF26ltSwKAFN6Yw5tIcFEn%2FMCleC89d6FTueMjQUW1Jl1R2Bk2TKjFW3Xdu%2BroSuDabKScKuG3M1BVyiSfz%2FHk6QkD6yVBfLc2WFtBIqQPHLvoYsguNVYv0qQypwZ9lYi&X-Amz-Signature=5b8582d7dacfdf6f67a071d80cee1f6354bf31388fff2095f8c178c0995fcea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 설치 방법

[https://lgug2z.github.io/komorebi/installation.html](https://lgug2z.github.io/komorebi/installation.html)

## → Scoop 으로 설치

### komorebi 및 whkd 설치

먼저 Extras 버킷을 추가하세요.

```latex
scoop bucket add extras
```

그런 다음 다음을 사용하여 `komorebi`및 패키지를 설치하십시오.`whkdscoop install`

```latex
scoop install komorebi whkd
```

komorebi가 설치되면 [예제 구성을](https://lgug2z.github.io/komorebi/example-configurations.html) 가져옵니다 .

# 예제 구성

[https://lgug2z.github.io/komorebi/example-configurations.html](https://lgug2z.github.io/komorebi/example-configurations.html)

[https://zhuanlan.zhihu.com/p/455064481](https://zhuanlan.zhihu.com/p/455064481)

# 삭제 방법

제거하기 전에 먼저 실행하여 및 프로세스가 모두 중지되었는지 `komorebic stop --whkd`확인하세요 .`komorebiwhkd`

그런 다음 Scoop 또는 WinGet을 사용하여 설치했는지 여부에 따라 `scoop uninstall komorebi whkd`또는 `winget uninstall LGUG2Z.komorebi LGUG2Z.whkd`.

`quickstart`마지막으로 PowerShell 프롬프트에서 다음 명령을 실행하여 해당 명령으로 생성된 파일과 기타 런타임 파일을 정리할 수 있습니다 .

`rm $Env:USERPROFILE\komorebi.json
rm $Env:USERPROFILE\applications.yaml
rm $Env:USERPROFILE\.config\whkdrc
rm -r -Force $Env:LOCALAPPDATA\komorebi`


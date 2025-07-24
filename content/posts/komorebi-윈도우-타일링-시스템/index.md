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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/13baabb0-8ce0-4b8b-9a3a-1718f5a70c92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YFOGU5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHkaZp2RpTwSt%2Bab1YLjm39siu%2FfaFsDC1mojrQNPMvJAiEArA3UpjhVoGO6vh4iXgohXBAzxjdBVFeAm5kcnfxMnR8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBus9athqY7pr13DaSrcAwrsaGx1MtFxr7yfXmlqoItipMmPlj6T28U8vuKaUIYC%2Fdzy3SJUsG2AM%2FX6jLbBjpMQTkwRLxRoKNvk4Fo5DrEriDWtSVx7SszD5XntiRb6oYq8R8F588dCoXbE1SjyTfANppvMnWZWkcQqIcokFvQwqIAtL90G%2FJ0pKt%2FNQu32wPF19RZG8il7GBddnPBhV%2BptrvL7W5XKKrbcsN0H3yjpDd9DI5LAvbLpMcsNndU8Wcq286RrswxDfvp4oHY0uftqHVGLMQLUdg55%2FAXY6%2F9%2ByLOTE3lPoRx2s6qd15vZbWK9jDlPeCoWgU%2B8a93ZZIydsHPg4K5tDGv71l0T%2BDv5bqissMZ22I0U2%2FiRRGdGsdGkUT4PWqBMG411VrsF5GLL3T00phE%2B1cd2ro%2BxHzaaF1Wp6EuiB45NmQR1vrgayMuyOAFbbGa%2FvNr4WxYLEMvmrxEFN2PfmiRo3aXi8LWVIERA%2BBvGWKgiZ9Q07%2F%2B94epSAzzmPHkhF40b%2Fx6XjLoh8fsZmrlUC1V1XG%2FMlsL0odgnt7znob5XvrmDwMb6gQ4Z3PyN0qA0rOZwLKBGLXUZ65zMMTT0%2FkyZK%2BDIUx04NWNYIMWQJkqC%2BxszwGEiAocQMakd8KHsn9xNMIzPh8QGOqUBZ8z3xGZ%2FynA9uuHFjFWwREKFGEz2MdWQr%2Fa%2Fi5LlDxNSqrhMl217Wkvhdc7vfU91iZt2noDXCcKBxmx%2FSlq8%2Fwf5cxcsNOD661Tb7%2BoccjqZZUWM2KLzk8ab5RvB9EhnkBJ%2FcH9lyPKX2UNBm8tgbFJPucQrvqMjuh3ht8XGNpkPDppBSKLUJhXQ8oNjhYxCeoDIVEHqX8DNkFZJmHppR1MAjzHB&X-Amz-Signature=bc6536abff272d48babdeeaa496b33eb0f5b08bc7af6647533cc06911698e51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


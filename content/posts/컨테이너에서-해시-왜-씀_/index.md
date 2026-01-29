---
title: "컨테이너에서 해시 왜 씀?"
date: 2026-01-28T04:44:00.000Z
draft: false
tags: ["Docker"]
series: ["Infra & Network", "Let's Bootc!"]
description: "해시는 파일 내용을 기반으로 하여 각 레이어 tar 파일, config.json, manifest.json을 해시하여 레지스트리에서 식별합니다. 해시는 내용의 동일성만 보장하지만, 안전성이나 악성코드 여부는 확인하지 않으므로 서명이 필요합니다. 레지스트리는 해시를 통해 중복 저장을 방지하며, 이미지 전송 시 해시 검증을 통해 변조 여부를 확인합니다."
notion_id: "2f61bab9-e3f8-8002-b619-d9405283a14c"
notion_url: "https://www.notion.so/2f61bab9e3f88002b619d9405283a14c"
---

# 컨테이너에서 해시 왜 씀?

> **Summary**
> 해시는 파일 내용을 기반으로 하여 각 레이어 tar 파일, config.json, manifest.json을 해시하여 레지스트리에서 식별합니다. 해시는 내용의 동일성만 보장하지만, 안전성이나 악성코드 여부는 확인하지 않으므로 서명이 필요합니다. 레지스트리는 해시를 통해 중복 저장을 방지하며, 이미지 전송 시 해시 검증을 통해 변조 여부를 확인합니다.

---


![Image](image_0ac9f23300b4.png)


## 컨테이너에서 해시 왜 씀?

해시는 파일 내용 자체를 해시합니다.

```bash
# 레이어 tar 파일을 해시
$ sha256sum layer.tar.gz
e692418e4cbaf90ca69d05a66403747baa33ee08806650b51fab815ad7fc331f  layer.tar.gz

```

이 해시값이 `sha256:e692418e43...`입니다. 파일 바이트를 순서대로 읽어서 SHA-256 알고리즘을 돌린 결과입니다.

### 무엇을 해시하는가

1. **각 레이어 tar 파일**: `/usr/bin/bash`, `/usr/lib/systemd/systemd` 같은 실제 파일들을 tar로 묶은 것
1. **config.json**: 이미지 설정 JSON 파일 자체
1. **manifest.json**: 레이어 목록과 config를 나열한 JSON 파일
```plain text
실제 파일 → tar.gz → sha256sum → 해시값 → 레지스트리 식별자

```

### 왜 해시를 쓰는가

내용 기반 주소 지정입니다. 파일명이나 버전 태그는 속입니다. 같은 "latest" 태그여도 내용이 다를 수 있습니다. 해시는 속이지 못합니다.

```bash
# 둘 다 "latest" 태그
docker.io/myimage:latest  → sha256:abc123...  (어제 빌드)
docker.io/myimage:latest  → sha256:def456...  (오늘 빌드)

```

레지스트리는 태그가 아니라 해시로 레이어를 저장합니다. 같은 해시면 같은 파일이므로 중복 저장하지 않습니다.

### 해시의 한계

해시는 내용 동일성만 보장합니다. 내용이 안전한지, 악성코드가 없는지는 보장하지 않습니다. 서명(signature)이 따로 필요한 이유입니다.

```plain text
sha256:abc123... ← 이 파일이 누가 만들었는지는 모름
                 ← 파일 내용이 변조되지 않았다는 것만 확인

```

bootc가 레지스트리에서 이미지를 가져올 때 해시를 검증합니다. 전송 중 변조 여부를 확인하는 체크섬입니다. 그 이상도 이하도 아닙니다.


---
title: "stable-diffusion Web UI 설치"
date: 2023-03-28T00:00:00.000Z
draft: false
tags: ["AI", "ubuntu", "Python"]
series: ["AI"]
description: "Stable Diffusion 웹 UI 설치 방법에 대한 가이드를 제공하며, GitHub에서 레포지토리를 다운로드하고 Python 3.10으로 다운그레이드하는 방법, VRAM 최적화, 체크포인트 및 Lora 사용법, 익스텐션 추천 등을 포함합니다. 로컬 서버 웹 호스팅 설정에 대한 정보도 포함되어 있습니다."
notion_id: "a3fc2a94-6365-4500-9281-c7828c7b6f23"
notion_url: "https://www.notion.so/stable-diffusion-Web-UI-a3fc2a94636545009281c7828c7b6f23"
---

# stable-diffusion Web UI 설치

> **Summary**
> Stable Diffusion 웹 UI 설치 방법에 대한 가이드를 제공하며, GitHub에서 레포지토리를 다운로드하고 Python 3.10으로 다운그레이드하는 방법, VRAM 최적화, 체크포인트 및 Lora 사용법, 익스텐션 추천 등을 포함합니다. 로컬 서버 웹 호스팅 설정에 대한 정보도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a2d2b47e-58c3-4df8-9d64-75776b6ef87d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZCT2LX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpx3ukZjsIx%2Bu2OZSW3saYsMu7hWTP430yUP3skdG92QIgSy8RIIfrthcmAuh5nQayRzvx9%2F87veoMrzF1Dh2W2LMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDE3%2FEfQz5xugsrZyqircA6f%2F02l5gtNbwG%2FngfUl3Nug0%2FvI3dMSCJW5p59ldI4sj2cs6ZiC3ITiZ6Hy4RoddYMLX9IP%2B%2BBoY%2Bv46MEjI0aCvrJxKpwjFrHPrv0MeJYlEDAuBBekuQdv5R9abOZtLfxyS3yeHlNYWHyVbSFs94lV%2BflzAauYNzsHnyQRx%2FxjhSP8AqD1cn0Q0Q%2BLdfaj93tJcwHFz5af25f%2FgWNf%2Fn7Z9zdRRv%2FiSksI9uE7QfM5b4QNlu7J9c6FlN4ALsC8do%2F%2B4y1cJNN1SBBFllF9yqKD0mENs9qluBuPfxGgwCymb0Bb87mk5JQPWAiYj9qdA2oxDG66%2BeHwxBlZafCIyGPjAsp05J1evtbX2FgcruHs5xtNSrVlmFaDyAJzsAdL1ZsALXuMjmt79EF6MBdH6J6HEd91hufCtJ9ruKHfx3dFV0USAfjB%2Fj3glDBCZcs1WD2bdgxihZ1lDoF4EhkdXtn7e%2FRL4XBSxS0P%2Bic9Ka5dIoNWrzK3uVP86QMltrcO4X%2FSSqUgmjbfhYTufSLQuAFNEzChSTMFhTjtn04kxOGsUzYGIPM7j7K8l3onTOX%2BC8%2BaP%2BRZixhZMNySGGZctGKQwkELrDSGVb6BHize2YCbgNmORo07u8txzMfYMIfPh8QGOqUBd1Ze%2F4sKbrY3bdMkuqQtY7U4MckXAHNT4vv6TEdPtjoMyovgy%2FKAJTBd6PluWM%2FNbCQHYpmhViedYpHs9vTLheL3itHLznkVxDi8BcreI9q%2FAcBLoCeimnr%2BVhQWVJCmygGIOECkT%2BhqZQYoXaXzXOBZLgPxXvcJsT6TAtJv3JS6bU9N75yoCNU4aHgYP9RrLGQoK01tLySQ%2BUNrebzlc32cyvGH&X-Amz-Signature=77f432434123b9401de23abd6f70390604eebb65109d1967e0e6012391c2f0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

아래 레파토지로 다운로드받는것을 추천드립니다.

🔗 [https://github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

```shell
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

# 이 웹사이트만 따라해주시면 됩니다

🔗 [https://rentry.org/voldy](https://rentry.org/voldy)

## Chechkpoint / lora / vae / embedding 정리

🔗 [https://ai-designer-allan.tistory.com/entry/스테이블-디퓨전-Checkpoint-lora-vae-embedding-완벽정리](https://ai-designer-allan.tistory.com/entry/스테이블-디퓨전-Checkpoint-lora-vae-embedding-완벽정리)

### lora 개요

🔗 [https://github.com/civitai/civitai/wiki/How-to-use-models#lora](https://github.com/civitai/civitai/wiki/How-to-use-models#lora)


# 로컬서버 웹 호스팅

ssh 키를 윈도우 설정에서 설치하고 로컬호스트에 접속하고자하는 외부 컴퓨터에서 (같은 망에 있어야함) ssh키 입력하고 뭐 하니까 되든데..


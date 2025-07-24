---
title: "생성형 AI를 활용한 게임 애셋 제작 자동화"
date: 2024-03-18T05:36:00.000Z
draft: false
tags: ["생성형 이미지"]
series: ["AI"]
description: "미드저니를 사용하여 이미지를 생성하고, KADIM으로 3D 모델을 제작하며, Mixamo 또는 AI를 통해 애니메이션을 생성하는 방법을 설명합니다. 애프터이펙트를 활용해 프레임 단위로 이미지를 스프라이트로 제작하는 과정도 포함됩니다."
notion_id: "dbcd2fbc-4692-49f3-abc4-e1204e514f6b"
notion_url: "https://www.notion.so/AI-dbcd2fbc469249f3abc4e1204e514f6b"
---

# 생성형 AI를 활용한 게임 애셋 제작 자동화

> **Summary**
> 미드저니를 사용하여 이미지를 생성하고, KADIM으로 3D 모델을 제작하며, Mixamo 또는 AI를 통해 애니메이션을 생성하는 방법을 설명합니다. 애프터이펙트를 활용해 프레임 단위로 이미지를 스프라이트로 제작하는 과정도 포함됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2b8ac6f6-390e-4103-b702-6d7925393f38/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLR54QL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpWyPWJ35eymf0Lm0SDfAozFrgxsLZvJ%2F%2FcaXTaLpzzQIgF9%2FTkjMkEvpIqvXwBUNASEXylxejTQ32JM7DLchXsJYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJj5Z%2BjpbTI6b7vvESrcA5j%2Beg90j0uLbwpsoyj%2FLVaneC7BUU25kxAQ%2BNmtgdurg45T1fRPUrcLQJSH3ewTQRYiPmlBcEwBs5e22JJwLQ7GNNSgFnmf3u4PcgbhN10x6th%2F6158itAqG84qshyGQ47ZguKa4y7i12rIeiTNCdpEo4KIhDS3xQtwa9P6BzTzf1IfOMIR9fG5Ewm8tLgMUyf%2BQh1D5JapZmoXZIReGkVRoPAFmaWNtkYVHSBlZvwraJe6peolGK%2B43rW7ycv6HxVSabTQg%2Fvzgt14vQp7SASvyNWqFYrmJpqM6mZlW6Gw%2FNs3BH3%2FF72uOoVGNEgKkAuSkXqphvq6epnMIjAEqJZ5SHnbPPzp4jeuti48db1graS0Qj8sPYLr8HJzF6W4qaJth3m1cqXSZpNEBqJUeAP7XlWkJ6QGWC%2FSMvxWqR%2B9XbCMms6XETZgxtSN6NfuGOE5KcSMT0Rl0vjEO7sss13QoPNFDp1gem14%2ByDugsnQ0PAhq0%2FhGz6dGXGYSMsGXpr1gIYEwI%2BaD%2BJr2HOEDVjKP%2FCyizimcfQA0EJRgNYoArRtNDpeScf%2FXtdawFmMxjkOZNLd6i77066STGJBz3URQ5WnREZPSCRyOjRhlsdN2JzEAC6C9ETH9mDJMIH2h8QGOqUB%2F3uTDCN3pxngFOu22HiltQREc9FFCbcgLXDXNoDrfJe%2FXMj%2BCIRSNcyTMM%2BROGCrCq7B37HoILPUgSt31AzQS%2BLguaIp0PIEPcPIQquyc2QMvhoq1%2FqW56ZlBwkmvKINxDM1sK4ZyPwk%2BC1YDkgRlWvRnvq8mVCh95jpl24uQCoVBGrUB1ssDSXLHkjHdtqV3dGuCjvkAnCoczuD1%2B%2BThOSt4Mqa&X-Amz-Signature=d75deb0e3afcfad8bc7d56d1cc4847039dbf32460f8a88c9174ce64fd137f1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
큰 아이디어는 다음과 같다

미드저니로 이미지 생성 (앞 옆 뒤 정보를 뽑아내도록)

KADIM 을 이용해 생성된 이미지를 기반으로 3D를 만들어냄 (조감도를 기반으로 3D Obj를 만들어냄)

애니메이션은 Mixamo 혹은 Text to Animation AI 를 활용하여 생성하고

애프터이펙트에서 프레임단위로 이미지 뽑아 스프라이트로 제작
```

🔗 [https://medium.com/@kaedim/how-to-create-consistent-characters-in-midjourney-5a6cb9f23a1f](https://medium.com/@kaedim/how-to-create-consistent-characters-in-midjourney-5a6cb9f23a1f)

🔗 [https://www.youtube.com/watch?v=eOc_aFxux4w&list=PLjDg5rfHIT1UgjUzjJ9vitF5Oktx5Je4q&index=2](https://www.youtube.com/watch?v=eOc_aFxux4w&list=PLjDg5rfHIT1UgjUzjJ9vitF5Oktx5Je4q&index=2)

🔗 [https://huiyu.tistory.com/entry/SDL-Sprite-Animation](https://huiyu.tistory.com/entry/SDL-Sprite-Animation)


### character sheet turnaround 모델을 어떻게 얻을 수 있을까

🔗 [https://www.reddit.com/r/StableDiffusion/comments/z8peof/consistent_characters_and_outfits_in_stable/](https://www.reddit.com/r/StableDiffusion/comments/z8peof/consistent_characters_and_outfits_in_stable/)

🔗 [https://www.reddit.com/r/StableDiffusion/comments/zy78sr/is_there_any_way_to_use_stable_diffusion_to/](https://www.reddit.com/r/StableDiffusion/comments/zy78sr/is_there_any_way_to_use_stable_diffusion_to/)

🔗 [https://www.reddit.com/r/StableDiffusion/comments/16wwgu4/moving_from_dall_e_3_to_stable_diffusion/](https://www.reddit.com/r/StableDiffusion/comments/16wwgu4/moving_from_dall_e_3_to_stable_diffusion/)

🔗 [https://chatx.ai/marketplace/midjourney/character-design-with-midjourney/](https://chatx.ai/marketplace/midjourney/character-design-with-midjourney/)

🔗 [https://civitai.com/models/104330/character-sheet-turnaround-front-side-back](https://civitai.com/models/104330/character-sheet-turnaround-front-side-back)

🔗 [https://echoesofsomewhere.com/2023/01/04/ai-character-design/](https://echoesofsomewhere.com/2023/01/04/ai-character-design/)


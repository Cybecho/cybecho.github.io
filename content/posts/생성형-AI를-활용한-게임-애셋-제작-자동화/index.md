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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2b8ac6f6-390e-4103-b702-6d7925393f38/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXLDYOC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLOV9PmwE83vg1fjVfqMpK%2FuhUunfGsRoj5MOHrDSEhQIgZdEAoA384z3bKYR3du2PdUg9QYWLmtSmI3nsIF4NX34q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDYUnZQyczTMCSmM2yrcAyY8Fv4KvFR3ppKQLGkPmnuNadY%2FUwmz%2B0CFaK4E0uG6pnYkVTkAANKjXnvwg17UzB%2BvpKHQ6jetXL0KUnMIyCS6tf0iz%2FEbEBn%2Bmc4Ct%2FEGWdbPPi%2BcRn9cENMc%2BoW2epRhcpAx2dlzVkCBcNPjqpl2w8xOOpOqZlSmivO%2Fx2JG8O%2BjamGQRMvcSachBLnkr5GVzTY440bovIzMJbcrc%2BX7RABbQSDWq5hCYsT0N7Q2rCxh9W5M8lKYQ3C5JOWCT7ZmvXLC0gzq9ahLU3xovtmEzJQrBKr5jMwGERNy%2Bqpu4T8cbhKCeTubHvCiUiR3%2FZPbKnKLN9q15d8vb6A6qC7sLJ1Y%2BwtOMAkQ5jSrLhZaDunbQSQ%2FOT%2Baooyx6lgdKHBNvIEx6ZHWL%2Fbq6GS%2BLkxe6gYBSEe6WfnrypNmVbHWaDc1kQn6k%2B8RXqHAGV7J1P%2Bc63tUyinMx4IIpjntO5j9lpPIcgI6O4BgbJtE4DtiJyFnEwUvxTZDvFwumFIYPC2JWlQsPmeXM7a4MBUzTKqmMQBknl%2BJgP2zXsyosFr%2BIboHvlDoZ5V9N%2F%2FPzRscmEgRe3BYOpW94p4i84n1imxB%2BVKlgXUGlhpdaXZgONcMpMLAE1emTDUhWBZEMJrQh8QGOqUByR4NRlVov%2FkvSxhkycsrsvighgLMzilIRdF6v1Pq5HoANaogUIrPoYWHIyDJaE8pWC%2BJMkiJvPJgd0aNlVvasuS6ezhNCEGeS2lOggU4%2BwNpCne6zbAeglOd13UB3ceZFZpZr76Cn3TvhcKHugsD6nBkIz6v%2BJCfEUa1daX5TIOB6Ejroga1x0l4goi%2BKQmzuiJr26ClO4Q0P7DaW1P8z8lPSzZS&X-Amz-Signature=8a4df286a17f71ff773a261815427a336c21c7eea6fed84c9add5e8251d31dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


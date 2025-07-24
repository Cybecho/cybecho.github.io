---
title: "생성형 AI를 활용한 게임 애셋 제작 자동화"
date: 2024-03-18T05:36:00.000Z
draft: false
tags: ["생성형 이미지"]
series: ["AI"]
description: "미드저니를 사용하여 이미지를 생성하고, KADIM을 통해 3D 모델을 제작하며, Mixamo 또는 Text to Animation AI로 애니메이션을 생성하는 방법을 설명합니다. 애프터이펙트를 활용하여 프레임 단위로 이미지를 추출해 스프라이트를 제작하는 과정도 포함되어 있습니다."
notion_id: "dbcd2fbc-4692-49f3-abc4-e1204e514f6b"
notion_url: "https://www.notion.so/AI-dbcd2fbc469249f3abc4e1204e514f6b"
---

# 생성형 AI를 활용한 게임 애셋 제작 자동화

> **Summary**
> 미드저니를 사용하여 이미지를 생성하고, KADIM을 통해 3D 모델을 제작하며, Mixamo 또는 Text to Animation AI로 애니메이션을 생성하는 방법을 설명합니다. 애프터이펙트를 활용하여 프레임 단위로 이미지를 추출해 스프라이트를 제작하는 과정도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2b8ac6f6-390e-4103-b702-6d7925393f38/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJTLEKG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGgYLQvqewJJCA6iuvrdG0tFDH%2FFBbQmENDuex4%2F15WsAiAJBC9wPF3DiCNfuuoA07DxZaH79sHUyfXXEI6B%2FoVz5Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHI9mwLvkwE20DYfKKtwDRXFoC8w8dv5qc3oYL19ehKBGYDsCs8r7K3R3o0neZfw22Ym8d0kNN5pR4TYGZzkAOYg6qOHdO8tzHi6xabYSlUhWVuUAbwhUxWBl78kISZccW4h7ZDoNMyjG8y0axBQ2bAt7rrPQzuLY4w6WaEIWQBaTygKdff1%2FtIwidydDQshF0PS9mOfgKhcIlt2%2FXQCXRQEG3F5Emy07K%2FFB8ADvp4bSkyO1p4NeFIP4PNVBXHEZzkmnA6wFgiylJXueh53J0kHo8c3NWo8iOmZtnTeZnzZ%2B8kDAgxqEBeXQkO7tYlHjHp3ulCKZvyuF1AENxdjPGpBQE%2FJFSamhH78uQUn7kNTq8DXRjP4Qo0rh4%2BRLJaknFvL7D0OazI588EB5nDuHrxwJk6uGjwCV1jB7k7%2BEm3dqWQ5EurmM8%2BPrnwNpO68mRYP41WMCFs4no9QORCx73pWYBWTUG16TVB2VuUlZCSWrmD3OINxaaO8l9NzL9Ek0oawcXyD9AoXbVMZe0hf9Duo0KiS1x%2BYcrASQuO3wxLd%2BKZrIqtkP7D2dV16oSYJ3V%2BW2VxvjlfD41iMT7lSgGQ%2F3okWfFoJEgizRSz0948uvPL5tS9gMgKhPJgZ3du9xvsjt3CDo2%2BrB1ZAwk5yIxAY6pgHNX067iYkAQo59rtkO1Dqw%2FwAZiv74xD8Ze26V3QfKXMsy21HN3viViE0JZLNrraiHvXfj%2FlnLoeHZpt%2FvaCplWqSet5Ydr%2FTI43mPK7o6djqnGmmnNC%2FFHeS%2FhxF4DWa1YsPTl00WdwTWYFZof9GpCH%2B7n3srAs43zYx9dOU%2BrUh5F%2BR9AFfV6lslAWM%2FNIgNme0p5go61JyXrcc5rDwlfixKMjg8&X-Amz-Signature=8fca83d6912c51bae8e727a858d6a47910fe70fecec169db637aadb18fa9a87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


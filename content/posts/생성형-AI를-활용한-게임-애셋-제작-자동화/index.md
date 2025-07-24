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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2b8ac6f6-390e-4103-b702-6d7925393f38/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KRLJXH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG%2Bv32t%2BpdP2cuK0dhFo9wvY887ueOiw4myO3rN57io7AiEA773psy9UeoXy%2Fy2GYZtJGllqfDT8f9QWle%2B2q9%2BjVz0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDEDPek0snOAsWQ0BSrcAy%2F4UNNIk43w19cvlQHciDcB9iXwa19I3tOXTW8HxAr6OxokD3fwMIk8TvMi8sPbO9beR2ruRLYpDjDCo8nLPqOaqpaRxvkUHou%2BuUFT7n%2FtcHU5S%2FsZ6NxkAzSN0kB%2F4RATQTHOC%2BN6ddpsKhWMPVeLX%2FRY7g3HEueX8R%2BYhKziuHlj%2ByoBQWQc5jHNzcea4yHRma4i1TA%2BLK3XP%2F%2F8aIc0oKIQw0gVn6rQTlGdo9FIHt9ctiFjv%2BgLX7un%2F6fWRLMez1QbU10ArZ8ouYKqZ7K7rj%2BWZbdyWnapOyZiqpctrbQSvc%2FtwMjKYNGmyxkBMRNNIZAoZ%2Fbjw2goXIahGG8uEyTGPRpRKp%2F6uz91arpDci5jcX8g6l1kQpB0KngwzmQFvsnLUROlOx56jABVg9P%2F5VBkMH3vAA6%2B8SNvO%2B8%2FL2xuj4rFBNpSfdwrAokOZa1yIxr0RbJmv3oE2LXj1oeLkV%2FYS6PLjH2H0OKAMpS9WKUW2pOxvWnQRiuGIRHBfexFI2nodnsF4%2Fj0LU%2FIQXhzQPYBGBMa%2FEEAGok4BBsjUoJZy9NNsrL8ImtAvzDOb2Jm37L8gVodfcwivNhbmRZ%2BQ66pwPH85wTHimR35oeXXHmlqd%2BzvMfEVFplMI3Ph8QGOqUB3J7rxZEeVWgcj1YLj8GtUpYrjtQqEsve7ThaArLFsNd6aqsZZLRCyAFswwh55hM%2FIyMoKzzYeZatFmbSqR8481GdtfptkD%2BRubNalRVoAarqNFapueccEMtSylgk48AoRc3uR8Ss4waT5psUStwB9IBJ700KpOfhw3T2OMxTTUd9%2BIpCl%2BSpUBIEK6BmmAWfpbspr4sUCqKy0jkutQ0Iz4sveaaF&X-Amz-Signature=aad86e0bb6a35ad13edbd2766825622e9e692f27423d856263bf8e448019c04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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


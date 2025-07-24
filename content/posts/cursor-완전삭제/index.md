---
title: "cursor 완전삭제"
date: 2024-04-06T14:09:00.000Z
draft: false
tags: ["Other"]
series: ["개발환경"]
description: "WSL2에서 cursor 문제를 해결하기 위해 cursor 프로그램을 삭제하고 관련 디렉토리를 비운 후, 특정 코드를 복사하여 cursor를 대체하면 정상적으로 작동한다."
notion_id: "04331296-b3eb-46a6-a516-2085118c1cd1"
notion_url: "https://www.notion.so/cursor-04331296b3eb46a6a5162085118c1cd1"
---

# cursor 완전삭제

> **Summary**
> WSL2에서 cursor 문제를 해결하기 위해 cursor 프로그램을 삭제하고 관련 디렉토리를 비운 후, 특정 코드를 복사하여 cursor를 대체하면 정상적으로 작동한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9295a3dd-2bdd-4a25-a346-38e04743cb83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GX34UAS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFsncplwfHVL8O6Qkqt6Iz%2B9B%2FpvLAiXG9D6MizSUyl6AiEArtEV22CXIKHpwYcme5gTNFI4wW9U6VGwdQjuJQwZ8Fwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDG0zrLru%2BtfYkExGFircAwOHY5h7eh8ey%2FN9t9WkClFqilVAUYbOKUuS9VyKGu9EEva1HXRYzXvVbBJg0Fs8eYpKsSJujI5JKFiMRCk%2BzyDR7q85Vw4FnOgC6ovMGOgHMsZjguxu3CI3bzT07EhuIs%2BpGHd39k1x2o9PrFhFxqs5hI4h5s3Mp6LkXm%2Fj7F%2BMlbf%2BIU0w6q4YxLuV5f%2Fbq2avGtwgaXSPkVch4xN%2FPBnWwfX55gZ7evQz2rLCVwU6R87DN7PWUcEh1E9jz1reXDrR63wKPsnSk5d38qhgAU9xj3c764fRMWjZm%2BLbTtrJHfLIrALI%2FvsTRktSggvjtOdYOmoNL%2FsHooPyzzcInA0Qx06wWq20Nmys5fmg5%2BqbWkkd%2Fq1EH3wlPoyd4rKcZl%2F3T3nEd7W0S7I%2B0H7kfOKTtuvVw9bHpNruEClI5LRCI70%2FDWCkPTlruyxmDww47xBS%2FshRsEtlMER3pIOoaFUlN3GCH2Quqt9IYU8G6WpYV8hVov332vitbjkBXn%2Bn87%2Bi49IZQXciNgPxpXAe3Pw1iVLu3KrvKzhxgwzyvtjL82cnrDWq85wXnAxzPUXJSkrMwfpCmYvJY7VBGleFh%2FxPEEVFj3zgB2uzHugy5%2BOZXrp8yn%2Fx458jdbgfMMGbiMQGOqUB3k8uDMCSBizP8NOVW6eLiT7%2FoMXU0dFR%2Fj%2BFEetQj83qLnuIf46ZBsVlmjenQkm5atjPovo8WuzUeoZ7SWKab4ygol34u8njjvGrg7Ox9mmI2XS0T3FVorZynAsNUjWAG40bZv7G8bz8pHmArgNPOObOcY8o2bgzIABH8m%2BJ%2FGXcVSucUI9nEwZ3VU%2Fr3%2FEO96vwX4En91JC6u8KoYjMp9ix2NoF&X-Amz-Signature=191779a434e1c99cc99a46e3062dd80a3dc73652aac76f88488e5ee58b4af033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

힙스터 병이 있어서 잘 돌아가는 vs code 냅두고 cursor 사용중인데,


wsl2을 통한 ubuntu에서 vscode를 실행할일이 있을때 곤란한 상황이 펼쳐지곤 한다


cursor를 지우면 깔끔하게 해결되는 문제지만…. cursor를 안쓸 순 없는걸=…


최초 cursor 설정때 cursor 커맨드를 code 커맨드로도 대체하는 속성이 있는데, 멋도 모르고 내가 그걸 체크해버려서 지웠다 깔아도 해당 옵션이 유지되었다…


### 일단 프로그램 추가 제거에서 cursor를 삭제하자

### 그리고 아래 디렉토리들을 전부 비워주면 된다

```c++
C:\Users\SBU\AppData\Roaming\Cursor
```

```c++
C:\Users\SBU\AppData\Local\Programs\cursor
```

```c++
C:\Users\SBU\AppData\Local\cursor-updater
```

# WSL2 cursor 문제 해결

🔗 [https://github.com/getcursor/cursor/issues/807](https://github.com/getcursor/cursor/issues/807)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e6821acc-4bad-4910-b1d3-a4117ae01990/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GX34UAS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFsncplwfHVL8O6Qkqt6Iz%2B9B%2FpvLAiXG9D6MizSUyl6AiEArtEV22CXIKHpwYcme5gTNFI4wW9U6VGwdQjuJQwZ8Fwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDG0zrLru%2BtfYkExGFircAwOHY5h7eh8ey%2FN9t9WkClFqilVAUYbOKUuS9VyKGu9EEva1HXRYzXvVbBJg0Fs8eYpKsSJujI5JKFiMRCk%2BzyDR7q85Vw4FnOgC6ovMGOgHMsZjguxu3CI3bzT07EhuIs%2BpGHd39k1x2o9PrFhFxqs5hI4h5s3Mp6LkXm%2Fj7F%2BMlbf%2BIU0w6q4YxLuV5f%2Fbq2avGtwgaXSPkVch4xN%2FPBnWwfX55gZ7evQz2rLCVwU6R87DN7PWUcEh1E9jz1reXDrR63wKPsnSk5d38qhgAU9xj3c764fRMWjZm%2BLbTtrJHfLIrALI%2FvsTRktSggvjtOdYOmoNL%2FsHooPyzzcInA0Qx06wWq20Nmys5fmg5%2BqbWkkd%2Fq1EH3wlPoyd4rKcZl%2F3T3nEd7W0S7I%2B0H7kfOKTtuvVw9bHpNruEClI5LRCI70%2FDWCkPTlruyxmDww47xBS%2FshRsEtlMER3pIOoaFUlN3GCH2Quqt9IYU8G6WpYV8hVov332vitbjkBXn%2Bn87%2Bi49IZQXciNgPxpXAe3Pw1iVLu3KrvKzhxgwzyvtjL82cnrDWq85wXnAxzPUXJSkrMwfpCmYvJY7VBGleFh%2FxPEEVFj3zgB2uzHugy5%2BOZXrp8yn%2Fx458jdbgfMMGbiMQGOqUB3k8uDMCSBizP8NOVW6eLiT7%2FoMXU0dFR%2Fj%2BFEetQj83qLnuIf46ZBsVlmjenQkm5atjPovo8WuzUeoZ7SWKab4ygol34u8njjvGrg7Ox9mmI2XS0T3FVorZynAsNUjWAG40bZv7G8bz8pHmArgNPOObOcY8o2bgzIABH8m%2BJ%2FGXcVSucUI9nEwZ3VU%2Fr3%2FEO96vwX4En91JC6u8KoYjMp9ix2NoF&X-Amz-Signature=8300cf64b78ca8aa3d501a4b0c77f7057e5d2c1ca5f93c019e1cf04390948bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

cursor . 했을때 위 문제 생김..


아래 코드를 복사하고 wsl2 기준 아래 디렉토리의 cursor 를 대체한다.

🔗 [https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394](https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394)

```c++
/mnt/c/Users/SBU/AppData/Local/Programs/cursor/resources/app/bin
```


그럼 이제 cursor . 하면 제대로 열림


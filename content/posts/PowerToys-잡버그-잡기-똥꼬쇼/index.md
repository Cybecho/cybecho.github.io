---
title: "PowerToys 잡버그 잡기 똥꼬쇼"
date: 2023-11-04T00:00:00.000Z
draft: false
tags: ["WINDOWS", "POWER_TOYS"]
series: ["Don't Hate Windows!"]
description: "키보드 핫키 버그 문제를 해결하기 위해 Alt + U와 O를 사용하여 맵핑하는 방법을 제안하며, 특정 명령어가 작동하지 않는 버그를 언급합니다. 버전 0.75.1에서 발생하는 문제는 버전 다운그레이드로도 해결되지 않으며, 0.74.1로 다운그레이드할 경우 상황이 개선된 것으로 보입니다."
notion_id: "f5eebcb5-be9a-4bfe-8531-9af9a14b63d4"
notion_url: "https://www.notion.so/PowerToys-f5eebcb5be9a4bfe85319af9a14b63d4"
---

# PowerToys 잡버그 잡기 똥꼬쇼

> **Summary**
> 키보드 핫키 버그 문제를 해결하기 위해 Alt + U와 O를 사용하여 맵핑하는 방법을 제안하며, 특정 명령어가 작동하지 않는 버그를 언급합니다. 버전 0.75.1에서 발생하는 문제는 버전 다운그레이드로도 해결되지 않으며, 0.74.1로 다운그레이드할 경우 상황이 개선된 것으로 보입니다.

---

# 아오 키보드 핫키 버그 왜이렇게 많냐??

# 해결??? 

- Alt + U : home
- Alt + O : End

로 맵핑해놨었는데,,, 이거 남발하다보니

- alt + a : Ctrl + a
- alt + c,v : Ctrl + c,v
이 명령어들이 안먹는 버그들이 있었다…


이거 해결 방법은 그냥 

- alt + i j k l 혹은 
  - (W A S D 처럼 맵핑해둔거임)
- alt + u ,o
남발하니까 버그가 풀리는데,,,, 이거 원리가 뭐지?

→ alt + u 가 좀 더 이 버그에 관련이 있을 것 같다

> Alt + shift + O(home) or U(end) 를 번갈아 누르면 해결됨
이게 무슨 에러일까?

# PowerLancher.exe 의 부재가 원인?

🔗 [https://github.com/microsoft/PowerToys/issues/9017](https://github.com/microsoft/PowerToys/issues/9017)

🔗 [https://github.com/microsoft/PowerToys/issues/9018](https://github.com/microsoft/PowerToys/issues/9018)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc8a481e-de1e-41fb-9e59-922e342cdedc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5JHLMN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCzI81X%2FZIkdrjQ0pIX0ybrcGqgg%2B6iY%2FfpQ%2F9n3f4rWwIgbsMUL%2Bb4BvJdZ1CtRoA0erEDikFqXvJ0pn4luLkTrNMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDLi6MEBM213QLht1ircA3ksAfEUONi%2FCLAEUo1y40EOjJdPM26n1wmRwmfSzEBvotxRLHnKWH%2FQKXrQr2GZwm5KDrOQIkNyO8Bdr4PmGTGPHrENvpF0w%2FDCNrkK3ewhUybGk1lJxQO7Mv4BwNRa%2FlOORReWQlEHcDvXNNsToPNRy%2BPT6LP8ZfFPGYtAaIXDFSbUluRWsAaWFHZyWry8cBH%2BvTbbeK0GUVCTqpHJP8zjMptLbyNERIEbgXh4VAPwXCOb0uDPJ7IIXClvywQ43twJpqQxDO0dqhOGvZdQa5RbDa%2BPAiILgcEY6cdLyxr0bDaeFaK4vZjuf1PEyWTb1MzO8Lfhgc2mHMckjdwCfwaxc%2FZEoTmOwSnUPVqLltnBF7Mjq9ZQN4M%2FS%2B0cttLCFAx%2FDqJy8lMHTuGDWWj%2FZBEWZQk8ryoTouZ4h0vh%2BcsGmFWTjqkvmFhSBhECP0LDU06SrNVIqY9LgcZBmwgHH3gw1Adoe6%2BayQQq7IUET1XcglSTSSPEPfH9DXTpihpDweGYpvcUwNA3a1dTQSEO2icsxQDjsuTCnvuqlePeYt62kS%2BHp3iBJmg1xH5N%2BCS%2F6LGbOhp2wetKQJPiFTNQFSyt1VRia0p8wzN%2BWFdLTLAy%2FjUlOOkfvSew55%2FeMOKbiMQGOqUBq2QEEZCUPzwVCbenBfcEaE3F5F7Zr6wrPgGvCOfjAD9LWyqEWdLI8VA0W3Vtf4Oz7DqZ3OiOwuEJ4qMn23Bj8M2p854%2BSq6BCw2L96GJE1QllgeBsvypTAnP0V%2BsrUTRd5PeWNj35bIJo%2F4QaEMeAYIBaCdjsj4nhUKTnswJJ9jNz7zvWDqg91nOLVSvTQy%2BVR1a41QeYQH4rx6bTJF%2Fc6YcVbZZ&X-Amz-Signature=b2a1316c342c9ff19b3f81b4e9aad1fbaf0979584dc167ef20db5323425f0b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 버전이 문제? (버그발생 빌드 0.75.1)

### → 버전 문제도 아닙니다! 0.74.1 로 다운그레이드해도, 똑같은 문제 발생

🔗 [https://github.com/microsoft/PowerToys/releases](https://github.com/microsoft/PowerToys/releases)

0.74.1 로 다운그레이드 하니까 좀 나아진듯


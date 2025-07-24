---
title: "C드라이브 관리자권한 끄기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우 C 드라이브에서 관리자 권한을 요구하는 문제를 해결하기 위해, 레지스트리에서 관리자 권한을 끄는 방법을 설명합니다. 키맵핑으로 인한 잡버그가 많다는 언급도 있습니다."
notion_id: "215c3694-3dee-4a40-af5f-cac1d481c903"
notion_url: "https://www.notion.so/C-215c36943dee4a40af5fcac1d481c903"
---

# C드라이브 관리자권한 끄기

> **Summary**
> 윈도우 C 드라이브에서 관리자 권한을 요구하는 문제를 해결하기 위해, 레지스트리에서 관리자 권한을 끄는 방법을 설명합니다. 키맵핑으로 인한 잡버그가 많다는 언급도 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RG6ZIJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASVRsk1jlST2fbh4P27PnpW2aq7EwYloE3RXNXRHnmaAiEA8JG2P9Kf183Kx%2Fz3hYwVWJQ9xAqNAlbFArq460ifRdcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFA2GvPObNmP4Y0MnSrcA1gi%2BOnLvhDttNFrhCmitiwADTD0B4boVEC2UNhmdxJwvAXwP8bPcgRKj9W3pcyjSj%2BeAVtklD1WowFddSwDfa97OsK5NJyE29xS6ap6%2FzdvumPDvqyhL71Otk2Gj8zEheLI0LsN8io5FDzAH1Gs5NPK0MSIdqewzZnJk8J1zzPQtg6WbRbegygEk1wY0pMnZWkS7p7bgYcUAqcDxtuXPT2IPrirA4CL6LohR7FnzAi1tu1%2BhH67jCnlwxZgA82yKrXwLhpr6IYvbD04nXdL95WOw3MCNDi5Y8VY%2BW%2BaBFNI3e1fjFXnaNrOEReLGJAtmqZLK4QeX2kC8LJ49V7jW0CgGxKG%2BmylwCMhzYBkYLYIiLx1Uwtspygt9qJBMhwn%2BQKsYYK8WvUBEyQtzUbxECem8pAeMgW1NilpigLMbC9W16fdzxWDvDYbiXQCE4godaRNYd02mIZK%2BUPktMXnmNpyKwxkcN1g1iV1S84nT2C0Rz%2Fu1t3Ai0q7aAJPIBXtpP%2FlydV3UZb6MZJ1vG%2B6nnpruQVGR4dBUAIBMHKitySc8XNL7l7HI80iEO6xCXdehmgt4i2j%2FVWDGr2LzgVPr%2F72038emt4s948N00drAQwT6egBm%2F5XHMnJ1XewMIrPh8QGOqUBbvVvsJfZWTbByvCMXni27Jg1b1ISQ8cDz0J6FfR6FoSq5m%2Brgl%2FWEi5AFIWJUZ3s3%2F7gzIuA%2BP68gfyWzfTqRqdUpePjbP%2BbaVyNMiecCgMvjiWkw2k6WPcjTX2t%2F%2B4G1J18O6Bflwv%2Bq1cBjMGWdMrynHBGnDgZOFFyryVkk7hXiNDanE5W4m1PTUc87uALKADtQDKMWaHFMoCEC3l%2BNBsbxpgO&X-Amz-Signature=119aad40027caa6ecc587154a00a03081a209f18b488f620c671fe104ea281c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8525155b-0b61-444e-b8d9-9b4f0e2305d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RG6ZIJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASVRsk1jlST2fbh4P27PnpW2aq7EwYloE3RXNXRHnmaAiEA8JG2P9Kf183Kx%2Fz3hYwVWJQ9xAqNAlbFArq460ifRdcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFA2GvPObNmP4Y0MnSrcA1gi%2BOnLvhDttNFrhCmitiwADTD0B4boVEC2UNhmdxJwvAXwP8bPcgRKj9W3pcyjSj%2BeAVtklD1WowFddSwDfa97OsK5NJyE29xS6ap6%2FzdvumPDvqyhL71Otk2Gj8zEheLI0LsN8io5FDzAH1Gs5NPK0MSIdqewzZnJk8J1zzPQtg6WbRbegygEk1wY0pMnZWkS7p7bgYcUAqcDxtuXPT2IPrirA4CL6LohR7FnzAi1tu1%2BhH67jCnlwxZgA82yKrXwLhpr6IYvbD04nXdL95WOw3MCNDi5Y8VY%2BW%2BaBFNI3e1fjFXnaNrOEReLGJAtmqZLK4QeX2kC8LJ49V7jW0CgGxKG%2BmylwCMhzYBkYLYIiLx1Uwtspygt9qJBMhwn%2BQKsYYK8WvUBEyQtzUbxECem8pAeMgW1NilpigLMbC9W16fdzxWDvDYbiXQCE4godaRNYd02mIZK%2BUPktMXnmNpyKwxkcN1g1iV1S84nT2C0Rz%2Fu1t3Ai0q7aAJPIBXtpP%2FlydV3UZb6MZJ1vG%2B6nnpruQVGR4dBUAIBMHKitySc8XNL7l7HI80iEO6xCXdehmgt4i2j%2FVWDGr2LzgVPr%2F72038emt4s948N00drAQwT6egBm%2F5XHMnJ1XewMIrPh8QGOqUBbvVvsJfZWTbByvCMXni27Jg1b1ISQ8cDz0J6FfR6FoSq5m%2Brgl%2FWEi5AFIWJUZ3s3%2F7gzIuA%2BP68gfyWzfTqRqdUpePjbP%2BbaVyNMiecCgMvjiWkw2k6WPcjTX2t%2F%2B4G1J18O6Bflwv%2Bq1cBjMGWdMrynHBGnDgZOFFyryVkk7hXiNDanE5W4m1PTUc87uALKADtQDKMWaHFMoCEC3l%2BNBsbxpgO&X-Amz-Signature=f2fe096da8250c4c5ab3196f160c2b1e95e277ddc6248b929c730ce766b958a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 C에서 뭘 할때마다 관리자 권한을 요구해서


그냥 관리자 권한을 꺼버렸습니다 



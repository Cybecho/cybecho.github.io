---
title: "윈도우 파일탐색기 재시작 배치파일 제작"
date: 2023-10-15T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 파일 탐색기를 재시작하는 배치파일을 작성하는 방법을 설명합니다. 작업표시줄이 먹통이 될 때마다 작업관리자를 이용하는 대신, 배치파일을 통해 간편하게 재시작할 수 있도록 코드를 제공하고, 이를 단축키에 등록하는 방법을 제안합니다."
notion_id: "07583846-d650-4f69-aca2-588429d0405a"
notion_url: "https://www.notion.so/07583846d6504f69aca2588429d0405a"
---

# 윈도우 파일탐색기 재시작 배치파일 제작

> **Summary**
> 윈도우 파일 탐색기를 재시작하는 배치파일을 작성하는 방법을 설명합니다. 작업표시줄이 먹통이 될 때마다 작업관리자를 이용하는 대신, 배치파일을 통해 간편하게 재시작할 수 있도록 코드를 제공하고, 이를 단축키에 등록하는 방법을 제안합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c306dd15-3210-4f72-911f-0ccbaf6f4aa5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663R7RFAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD%2FKy1agKLTMizKFTNo%2FE%2FWBCiSwyBZ0QUBqtqbKE8%2BsAIhAOtCQqPVcgbc4mZDDkGtI%2FQHrPwbXKBDHPuTDyjxYqPQKv8DCCwQABoMNjM3NDIzMTgzODA1IgxYWrZZwCBg1%2FOqGokq3AOAX6L5zDSMMekO5KB7OTJ2O8%2FlduUDHo7jfGenCvWL4b5AyfbsuwrAVL7ZahfKcGeBgC8B2FaGuC%2Fh5W3mjweMMyirmc%2B14xS%2Fc4jewlQ4YE6il0UFmnqDlAcUXTtBMSI8DXfiTaKyMSdTyy6XtBOZRqXO0s2t33AzR7qtbldz9wj%2BaxGzghEvB%2B4HTCi5imgS6PMFqM68J5bKadoIwYFYjF0FcZ2hnSZBQaXIeJCV43UrRugspWj5MxUSZ8eg4%2B2cW4%2BhOvT5l%2BkAJifxs3yvK9KoSxm1fRtYNtW0zIbhSENQxyYYth5PjuOCSa875LCfUCkYO90pVdQiSKmCS9%2BIhjVl8flhLTTulxwE0aTvbPNZDp5X3U6sH%2BujPz36mdRaxQ%2Fq8fS6mR2SnKcawo57G2vX%2F1ccg6kF3fFUrvdeC98yWzdKijRZUzOmRuSUop6N6bOfkzfVZ9em6E5RjL1%2BY1xUwB8vNU1CAuEJPj31CRsxUVLB5PTxQERCCEAdXFvIpIeLy88CA5fJZHJDu7O4fV5R%2FRkUGbwsu6wvbfIKx822unQ93pYMErMj9J7cwDxYvWt0JOsT%2F6ozFOxRuwg%2FJ1NDQLRxwuCDHOcz8p4zv4tW9M%2FLXImnFJ%2B%2FTjCsm4jEBjqkAXR85OJBs7P7b%2BiZyCUYmRiulZvv3TD7xVU5lP%2FmtX3C0NVWF4yof0bAkK1xmQx3Xyd4wLThVhhvrcV7pajBaJUoGNzKyS7sVMUED2aoIYNieIBJ1jeh%2BvWO5zP9kd4zDyPwL1fJN%2F3PYgwqzxXG6t%2F2DkNvSr%2FG%2FAPAXnpwSn9dZSJcABpevv8149jcAw2gbQB8sHgbf%2B8gy0trecSUVWZgY2Iv&X-Amz-Signature=21cb4565cbf65da61ce8c0b41c35fdf61cbb635768da136325b55dfcafcafd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 wsl 추가이후로 참 좋은데…

이것저것 커스터마이징을 하다보니 작업표시줄이 먹통이 되는 경우가 가끔 있다.

맨날 작업관리자 들어가서 재시작하기도 귀찮아서 배치파일로 재시작 코드를 작성하여 단축키에 등록해보고자 한다

```powershell
@echo off

taskkill /f /im explorer.exe
start explorer.exe

exit
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663R7RFAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD%2FKy1agKLTMizKFTNo%2FE%2FWBCiSwyBZ0QUBqtqbKE8%2BsAIhAOtCQqPVcgbc4mZDDkGtI%2FQHrPwbXKBDHPuTDyjxYqPQKv8DCCwQABoMNjM3NDIzMTgzODA1IgxYWrZZwCBg1%2FOqGokq3AOAX6L5zDSMMekO5KB7OTJ2O8%2FlduUDHo7jfGenCvWL4b5AyfbsuwrAVL7ZahfKcGeBgC8B2FaGuC%2Fh5W3mjweMMyirmc%2B14xS%2Fc4jewlQ4YE6il0UFmnqDlAcUXTtBMSI8DXfiTaKyMSdTyy6XtBOZRqXO0s2t33AzR7qtbldz9wj%2BaxGzghEvB%2B4HTCi5imgS6PMFqM68J5bKadoIwYFYjF0FcZ2hnSZBQaXIeJCV43UrRugspWj5MxUSZ8eg4%2B2cW4%2BhOvT5l%2BkAJifxs3yvK9KoSxm1fRtYNtW0zIbhSENQxyYYth5PjuOCSa875LCfUCkYO90pVdQiSKmCS9%2BIhjVl8flhLTTulxwE0aTvbPNZDp5X3U6sH%2BujPz36mdRaxQ%2Fq8fS6mR2SnKcawo57G2vX%2F1ccg6kF3fFUrvdeC98yWzdKijRZUzOmRuSUop6N6bOfkzfVZ9em6E5RjL1%2BY1xUwB8vNU1CAuEJPj31CRsxUVLB5PTxQERCCEAdXFvIpIeLy88CA5fJZHJDu7O4fV5R%2FRkUGbwsu6wvbfIKx822unQ93pYMErMj9J7cwDxYvWt0JOsT%2F6ozFOxRuwg%2FJ1NDQLRxwuCDHOcz8p4zv4tW9M%2FLXImnFJ%2B%2FTjCsm4jEBjqkAXR85OJBs7P7b%2BiZyCUYmRiulZvv3TD7xVU5lP%2FmtX3C0NVWF4yof0bAkK1xmQx3Xyd4wLThVhhvrcV7pajBaJUoGNzKyS7sVMUED2aoIYNieIBJ1jeh%2BvWO5zP9kd4zDyPwL1fJN%2F3PYgwqzxXG6t%2F2DkNvSr%2FG%2FAPAXnpwSn9dZSJcABpevv8149jcAw2gbQB8sHgbf%2B8gy0trecSUVWZgY2Iv&X-Amz-Signature=e7422cbff453c30b9991336487c2b906c2b6887f06479d1eb14cf36ca8492a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**
> ---
>
>



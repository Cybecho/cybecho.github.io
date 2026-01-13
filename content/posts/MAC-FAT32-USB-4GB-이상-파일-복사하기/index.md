---
title: "MAC FAT32 USB 4GB 이상 파일 복사하기 "
date: 2023-06-03T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, ExFAT으로 포맷하면 맥에서 4GB 이상의 파일을 복사할 수 있다. 디스크 유틸리티에서 드라이브를 선택하고 포맷 형식을 ExFAT으로 변경하여 초기화하면 된다."
notion_id: "a61b9f8d-76b5-4d1f-82ed-bcda10eb71e8"
notion_url: "https://www.notion.so/MAC-FAT32-USB-4GB-a61b9f8d76b54d1f82edbcda10eb71e8"
---

# MAC FAT32 USB 4GB 이상 파일 복사하기 

> **Summary**
> FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, ExFAT으로 포맷하면 맥에서 4GB 이상의 파일을 복사할 수 있다. 디스크 유틸리티에서 드라이브를 선택하고 포맷 형식을 ExFAT으로 변경하여 초기화하면 된다.

---

![Image](image_36d981c44384.png)


중고로 싸게 들여온 MAC MINI 2018에 Ubunut를 설치하려고 파일을 설치하고 쿠팡에서 적당히 구매한 USB에 파일을 복사하려 했는데 4GB 이상 파일은 복사가 안되는상황발생…


이유를 알아보니 구매한 USB가 FAT32로 포맷되어 그런거였다

(fat32는 2^32 까지 저장 간능하나, 파일 전송간 4GB용량제한을 둠)


FAT32 로 포맷된 USB를 4GB를복사할 수있게 NTFS로 포맷하면 윈도우 및 맥 환경에서 4기가 이상의 파일을 옮길 수 있지만, 나는 맥에서만 활용할 것이기 때문에 ExFAT 포맷으로 초기화하려고합니다. 무엇보다 NTFS 포맷은 맥에서기본적으로제공하지않아서 이것저것 설치할게 많아서 패스….

궁금하면 아래 링크 참고

🔗 [https://groovechance.tistory.com/73](https://groovechance.tistory.com/73)


![Image](image_45dc4d78ceed.png)

디스크 유틸리티 들어가서 포맷할 드라이브 설치하고 우측 위에 `지우기` 클릭

![Image](image_ac6c5a3add78.png)

`지우기` 에서 포맷 형식을 `ExFAT` 으로 변경 후 지우기를 실행시키면 초기화가 진행되고 4GB 이상 파일이 복사되는것을 확인할 수 있습니다.



![Image](image_36d981c44384.png)



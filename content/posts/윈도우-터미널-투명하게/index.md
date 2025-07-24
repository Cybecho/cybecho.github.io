---
title: "윈도우 터미널 투명하게"
date: 2024-02-19T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 터미널의 투명 설정 방법과 포커스 모드에 대한 안내가 포함되어 있으며, 배터리 효율을 높이면 투명도가 복원될 수 있다는 내용도 언급되어 있습니다. 설정 방법은 JSON 파일에서 특정 옵션을 수정하여 적용할 수 있습니다."
notion_id: "0b98ec4d-2516-4c44-85b1-962094710534"
notion_url: "https://www.notion.so/0b98ec4d25164c4485b1962094710534"
---

# 윈도우 터미널 투명하게

> **Summary**
> 윈도우 터미널의 투명 설정 방법과 포커스 모드에 대한 안내가 포함되어 있으며, 배터리 효율을 높이면 투명도가 복원될 수 있다는 내용도 언급되어 있습니다. 설정 방법은 JSON 파일에서 특정 옵션을 수정하여 적용할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d96c26a0-b74f-4b7d-9c32-9f14b26a4d23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGVB5EQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGCHiEgxZqZqMlx52bdiDRrPE7V3sKbNM2ZqFtq7AHHWAiEAzCACCyYwCTOR0x8OCys80gSfM0EJXndgyHuAfbdg2fAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCWk%2B2TbtQmn81T%2FRCrcAx9ZCULqKtn1av2hr1Q3%2F2gnRfxKr1yFdSFUp1m3dLduBFObt6jEMC44A4s5VbioCtAdaQ624qlF2Wy%2Bjg%2FaH1nNcgasmbmjus67QLu8Ijhx8WiOXhRkC61CMhVlHz%2FHIUv0coUjsTR575Q91RXHoeeMa%2FDoAVVlrKlGQ%2FlQ6tLuFTvlVe9SfQgbqQkvwhJRXF%2BUALwNBr9NbiZTQVRsRIDKFxvvCHrtrYhBbQCsVaEzrx2JqILAbSdQ8Bfuv7JuXYUF6RVGfPQiSR5vkojoakvFqYvEkfj%2BKWMMBzTAzzrO2Vn6U4vZbGaIuFx4dpIkJ%2BkQHxwwZqcu6NRP5nBtyoMlxaaBAY2wwG0WmM7OWhK8NVV9iZta6NeB3BO9GQpjjC7razMU0JjquvY03ycOKFEF1ptKWBV9Bgd1cO%2Bs2lGY39P6qeLiwP%2BYEUY%2F0hzpMu8XNqslCtD%2BzGjwfvqJxD2DfDm8by3trrMQYb2wpQ7B5QAHtUXbH9pzyjEhT8lM8T9r9d5R%2BDKdwMPhq9L%2BBCyEce%2BQJhAIB1QYd6BtEUneb1i9shW3hldv%2B4zYgmr%2BsCMCa7zMz0XfWDJN7bu4aeDUrNCl6X0BWUN4ebKbT0YFY0M7vO4GE%2FRrqgnJMIfPh8QGOqUBW1ZtIOke0qceauOPPxebXQAbl0HHSHA0UdPuoE3iAA%2BiBCAi7wGp87QLu6PjfoPgZISjwla76tRtUkumuCnAliZP44Lt1mRzl%2BE%2BHSvaOEBVUpUcXUnY4tkPgIzUkzVb7kd6r%2B7qsZuIXSPyvis6bz1DbbY%2BVXQKWElgf5sn%2BMxep%2F%2Ft670UAPrGOPXUOjFEblpBCuD4Ku8l819ygqaGgjVBk4aU&X-Amz-Signature=d6cd8a9efe05f4e7ef407aa96072c7f397101b2a96ff125f14a3da209c19e79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 윈도우 터미널 투명 설정

🔗 [https://chooi9522.tistory.com/36](https://chooi9522.tistory.com/36)

## windows terminal opacity when not focused

🔗 [https://www.reddit.com/r/microsoft/comments/sm8ugv/windows_terminal_is_only_transparent_when_focused/](https://www.reddit.com/r/microsoft/comments/sm8ugv/windows_terminal_is_only_transparent_when_focused/)


in your settings json`**"compatibility.enableUnfocusedAcrylic": true**`, [<u>**Windows terminal preview only**</u>](https://www.microsoft.com/store/productId/9N8G5RFZ9XK3?ocid=pdpshare)


> **근데 터미널 미리보기에선 위에 옵션 설정할 필요 없이, 
그냥 자동으로 다중 투명블러가 적용되는듯?**

## 포커스 모드 설정

🔗 [https://new.atsit.in/3106/](https://new.atsit.in/3106/)

# 만약 투명이 풀렸다?

→ 랩탑을 쓰는 경우, 배터리효율을 향상된 배터리를 사용하면 다시 돌아옴


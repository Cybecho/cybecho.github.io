---
title: "MAC EFI boot 찌꺼기 삭제하기"
date: 2024-05-16T16:57:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "macOS에서 EFI 부트 엔트리를 완전히 제거하려면 터미널을 열고 EFI 시스템 파티션을 마운트한 후 BOOT 폴더로 이동하여 \"BOOTX64.EFI\" 파일과 관련된 Linux 배포판 폴더를 삭제하고 마운트 해제한 후 재부팅하여 \"EFI Boot\" 엔트리가 사라졌는지 확인해야 합니다."
notion_id: "7e96a6c1-114c-4d5f-89ff-5aace5ac2bff"
notion_url: "https://www.notion.so/MAC-EFI-boot-7e96a6c1114c4d5f89ff5aace5ac2bff"
---

# MAC EFI boot 찌꺼기 삭제하기

> **Summary**
> macOS에서 EFI 부트 엔트리를 완전히 제거하려면 터미널을 열고 EFI 시스템 파티션을 마운트한 후 BOOT 폴더로 이동하여 "BOOTX64.EFI" 파일과 관련된 Linux 배포판 폴더를 삭제하고 마운트 해제한 후 재부팅하여 "EFI Boot" 엔트리가 사라졌는지 확인해야 합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4afe2f7c-3246-4311-b348-94751de74ed4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW2WHGHS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDcTZSWWVcxaDtbRST7oyhIz%2Fvt3ph2Ecfem%2FmjYmfB5wIgObWcGSLdEy3AV2ujz5PvbBilC5g7h9iIrYVrF4d3f5kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIiNhzkPnI2f0bJ7ryrcAyV9VUHVBrpbJ8oj2UAbYcosrgfFaS7pXjm3EV7WbaKtMYUmv6BdOLIdwv7ay%2FBUMaSpfiqHKTw%2FBuG%2BbLaVbE6l3J2mUlPpEJKPZFdnawFv2%2BX%2FXyiUEnCmKbmvj%2BQlRvf3XLfDRcdLH0Y65EdwsFZvoVczmNZIjimvUYWnj4nAcCjlLVsn%2BGBJWOeN%2BTUe7DY3BXo%2Bl9yN0QjmaYQItZj%2FgGklH7PASUpXEEsAazS2CH5%2FTQctiCrMllEawY7L2ztC8iH4mV5l4ermfq6aiPT40SgpJyUhUqMxIjoltYYIQnW3ptQuOoEuEUOwjyWH4lKvt8ZsVyhswbJuSbyjLaEKhi12mAv1q7Ovj1KtCHbijaPQCmBBrOBRuoq8WwvdV4Gsa8zXMHqvkHfo%2BlNYeqyE9OPgf33TIbEo2P7xPRjEIvlc9OU%2FWI78WqI6d1po8akHj9mi56f5Z4bGxmidsTHUHvK1u98fVp1zjQ05%2F2qJl9YmRcYM4gxBoASjcmzY%2FhJfyiCsb244%2FmXd1Bij%2B4va41qTzLWtek0lqNwVh4P2ALCIkNM9NjLs8L4j3YkYDFeRnsh8emvWfJsWc2VzkT%2BTpZICvHIbOPrg5858LFY6lDjiLS6zmc6cjTMPMMj2h8QGOqUBFLEiYCt%2BlFJ3IIUDDkjDDJUygVi7VPZwsp9YwEQlQxBbUI0JSUoD%2BnkWmG9ldWmHKaAX1WVv1jtnMBKEcmOkI6XW4pOhnXYnNiHeBQJeYhPXI1%2BHX8nJYukDautRZEbz%2BMNmy10V%2FE0zhD7s62MKB4ygPMZkQwr2Ve0CkjVvsy%2Bpajjuq1Q7wQNlB7yRn%2BrtASm5yozfzN6RAKbeF39eQdA3ObQG&X-Amz-Signature=be0463d2284e03c1eb4c1077fa6b02d2cef9a3d4f2699f0f4d9baf02a8159df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
오늘도 어김없이 똥컴에 리눅스깔다가 삽질하는 나!

잘 알지도 모르는 grub 설치한다고 커널이 망가져버렸다!

그래서 그냥 디스크 다 날려버리고 새롭게 다시 깔아야지 했더니... 

EFI boot가 남아서 재설치할때마다 오류가생김..
```

```latex
참고로 난 파티션 나눌때 이름을 fedora로 해둔걸 기억
```

### EFI 부트 엔트리를 완전히 제거하려면 다음 단계를 따르세요

1. macOS에서 터미널을 실행합니다.
1. 다음 명령어를 입력하여 EFI 시스템 파티션을 마운트합니다:
```plain text
sudo diskutil mount disk0s1
```

1. EFI 시스템 파티션이 마운트되면 해당 경로로 이동합니다:
```plain text
cd /Volumes/EFI/EFI
```

1. BOOT 폴더로 이동합니다:
```plain text
cd BOOT
```

1. 해당 디렉토리에 있는 "BOOTX64.EFI" 파일을 확인하고, 다음 명령어로 삭제합니다:
```plain text
sudo rm BOOTX64.EFI
```

1. 상위 디렉토리로 이동합니다:
```plain text
cd ..
```

1. "fedora" 또는 "ubuntu"와 같은 Linux 배포판 관련 폴더가 있는지 확인하고, 있다면 해당 폴더도 삭제합니다. 예를 들어 "fedora" 폴더를 삭제하려면:
```plain text
sudo rm -rf fedora
```

1. 작업이 완료되면 EFI 시스템 파티션을 마운트 해제합니다:
```plain text
sudo diskutil unmount disk0s1
```

1. 이제 macOS를 재시작하고 Option 키를 누른 상태로 부팅 메뉴에 진입합니다. "EFI Boot" 엔트리가 더 이상 표시되지 않는지 확인하세요.

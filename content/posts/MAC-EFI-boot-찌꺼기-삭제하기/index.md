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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4afe2f7c-3246-4311-b348-94751de74ed4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLN2MJU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIB5mKcskMENCRQZCPwRoXpkVI1TkGFZvONcZJYeO7%2Br1AiAliMYDZysscBAQHejeZ2Kz2HUYFr1KgIj3A3yaBFQBVCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMf4gLbDGOXxgFNOKZKtwDI4bXaCIF4EzZtNPNs7pR7Eg8PUN0ougP%2BS9i9zqvhk1nKf2XWqPEiMtk%2Bl87YcpboExruU05XvovTdUm%2BEq%2Ft8aYWtd9EiRlatr4G6zD9MqBY049pKFO19%2BxGp49JQl6ZlDGGNpk0JcL%2FV3zuWix6kIs4Ev42bScCaqTaGB%2Ba9erOPCRjHHq1FG%2FKD8LDnMwd17QwBigSvPkwWJOrJKcjkWI0C6V%2B5m893Um2F%2BqS8MKwSprkjLfyD54Pt%2B7tMRzId53si3ptED%2FBVuUfriRYj06ln9%2B5fG178WBy6eDfI2VzJVomrl%2BORVsDQlbVO%2FVPSjF8WWuw0rlIzZkfOv9OWxXSWulM19v%2BWmYQQild%2Fe2gbqqCxbjsD%2F1qbJoiAFBskMcvq881vwtYzW9VO7V9zSTJOAnuBMWwCRCBrGgZ6VFvK5ULzqwak25CmOoH6hPB4PQOO%2Fa4yRKfZpuju5ikp%2Br7t%2FB3TRzUDOjBnr5o3igahUjMsK5tSPP3qOhOwVgCuRENGnGzj9qlfwB%2FZG%2Fuxl5y3VyI6q%2BryyNX%2BkqmADKIs1plpzu8PSeA4YpPeOu%2BRMCbo7qxjmY0WQVZcg5eDfvzCkYwAe2PY8Ho9cAXKAC3RnULmmtiqgMBBww3M6HxAY6pgFpHBFrEXt83FUN5M5Awbxo6iD47ubsVlZAVo3B10kZbVaZ3sOwVwPK9D%2BAX74XF5YKFWypyNdFUBqI0sMEIC06RBO3A3nK6BzE9IC3FHUfmndRBbG4JvaICeXM8iSvEjh%2BRXRVjWRsGKe3TlhuoZrk8rWey%2B3MPkMGeVGm%2BAeA8%2BlzbALbegzoi4wSU32Dh4leiSYakKASovNo5rtRH1C6K35RKje9&X-Amz-Signature=aae605354731dc8e8a8c087eae8716c3601723d881ca69f0488d501f6fd04cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
1. EFI 시스템 파티션이 마운트되면 해당 경로로 이동합니다:
1. BOOT 폴더로 이동합니다:
1. 해당 디렉토리에 있는 "BOOTX64.EFI" 파일을 확인하고, 다음 명령어로 삭제합니다:
1. 상위 디렉토리로 이동합니다:
1. "fedora" 또는 "ubuntu"와 같은 Linux 배포판 관련 폴더가 있는지 확인하고, 있다면 해당 폴더도 삭제합니다. 예를 들어 "fedora" 폴더를 삭제하려면:
1. 작업이 완료되면 EFI 시스템 파티션을 마운트 해제합니다:
1. 이제 macOS를 재시작하고 Option 키를 누른 상태로 부팅 메뉴에 진입합니다. "EFI Boot" 엔트리가 더 이상 표시되지 않는지 확인하세요.

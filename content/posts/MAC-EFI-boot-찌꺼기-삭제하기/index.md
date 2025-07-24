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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4afe2f7c-3246-4311-b348-94751de74ed4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3WNSJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIA%2FpIMWKu5Y8cQetO0bspQ7rxogGFmvSc7BB4vXMLrE4AiBN8c1sEm7%2FwOBagBKaCTSkXHR5sZpT%2FzINNf6U6o0UUSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM8tspmFszuSo93imHKtwDRIBEabdwcNInoIa7SDrDvtBNFLjnLRD74qMwMjMcnOrvDgSoU3z7zCvJ089A1smzz06geq1hqrZlUhPvybd5JcoX8h7DkOhNJJlaUuHtsxbNoXhlBLD%2F7z7ANS45l8IXlIpjxyFzNrNvzS2kC1xvgpxj2nWK8Tqk36qQOYHNSBwUkguzVhmFPtz%2FBl5EYSFBKvoGDNjN8dZhxVfHBhRX6uxc9ppq8FNhtxdx6IAYCxWeQ5ay%2BCOqkoOB2EPIZSJS8dWys25o9VKo2RTunwXpz0%2B2EZViKjKwY%2BdjoYaAZHHBvTY%2BrWVeYe5LZ7mwb0yKa%2FV%2FXvp5MYYexf5BqnBvqbOG5bqTNM2FVVtkoQUDJdPnqSC6V%2F4HnCoPJEpjFrvPwfVdGLCcckRU0WabztDgUUOJX1qYcFFyjXeX%2FyGW9wlv9Aafxu12HC73NpWdlx8vbCDwPYlTkcnmBV4BPoGKX7Jj2XUa7RhVRlIhwLXSorJxuU8UX%2Bx1xW%2Bbtha5WDvOgJVbnqrr0dVMSc4xCAQzxfrj1Jabv9bJVoYO0kTK0JFhTREOlI%2BFTYvYokwURLMgMt%2BEi87DZlJR%2B2A3Kf9gNcqIXbjRHAWKNBjL67b7cTpYJmWPYsIkUe8MO1ow0M6HxAY6pgHO35koxc8S3vt%2BI3BdP9RSrJU6mGPakEEHAZfooHaGml9oBMkoC32%2FCk1N%2Bg3seTJzOFKulbc6s23Kf4pPwfr2IBKPiaexvR8vJuFvhqZX33LaDptlIO05gY44lQB6MxIfndu3ovUL%2BtGo3Rq6qSKBFLmwyc2EjjOiAhDYf40q7ktop1Do94m0v%2FWkgFKr3SH6C35q8iYB8kS90icNJ6hO5QazaTat&X-Amz-Signature=40cd4c983eaff58a8ed0707cf0ecf87d3bd3af39a0578c564109b0424bb4ddca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

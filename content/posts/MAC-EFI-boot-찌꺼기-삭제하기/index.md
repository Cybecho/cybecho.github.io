---
title: "MAC EFI boot 찌꺼기 삭제하기"
date: 2024-05-16T16:57:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "macOS에서 EFI 부트 엔트리를 완전히 제거하려면 터미널을 열고 EFI 시스템 파티션을 마운트한 후, BOOT 폴더로 이동하여 \"BOOTX64.EFI\" 파일과 관련된 Linux 배포판 폴더를 삭제하고, 작업 후 마운트 해제한 다음 macOS를 재시작하여 \"EFI Boot\" 엔트리가 사라졌는지 확인합니다."
notion_id: "7e96a6c1-114c-4d5f-89ff-5aace5ac2bff"
notion_url: "https://www.notion.so/MAC-EFI-boot-7e96a6c1114c4d5f89ff5aace5ac2bff"
---

# MAC EFI boot 찌꺼기 삭제하기

> **Summary**
> macOS에서 EFI 부트 엔트리를 완전히 제거하려면 터미널을 열고 EFI 시스템 파티션을 마운트한 후, BOOT 폴더로 이동하여 "BOOTX64.EFI" 파일과 관련된 Linux 배포판 폴더를 삭제하고, 작업 후 마운트 해제한 다음 macOS를 재시작하여 "EFI Boot" 엔트리가 사라졌는지 확인합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4afe2f7c-3246-4311-b348-94751de74ed4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBBCALL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAy363dhoB%2FVyGl3DExKN90zzoJGkiFefiBSow9aDI3FAiAHi4YUEmDh5HOca%2FfdYQd0Ccq0DN9Gt4SGNfXZnx9Bryr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMkRkuidGZaKTWE%2FRUKtwDVp431v4z7NRF30mCDo11V2RcGmvk%2FHh9Yj2T2NKhspnr7Gds2pVK3KNdruDVHnet%2FGCtP6yNZ%2BG%2FoADjMHMHbyirJX44lF9dpRsoLOpR%2FNbOdLxw5fN7sTJqV4cwyoQgj7p9xsuZqvYPsKSzR5ookjf4NyLFv4kqbotzv4mPqZRnnLwQTyKKwOz7fH9unSA9FFofXsvEz5CulxhwEzRO%2FE%2FRvKqUhMDLbBsmZIcjjznVPkW94TCQ7WiYotWFr9d1aO0PgAdYifmcifRdLz6Z0%2BqhLQBGmElx6I0DWnRxkmKOaZr8Kj%2BiNVMMaxwHhGAI305i30mSemoNYi6QRBDlIE4EtdE8v3FhXmf8fcvdu0icNQMdYgD%2BWgLF%2FPxGOClPbJ7Yrb8V5QBYYFyZK%2FTXL8uj4tvYG0MIMTACshJ6NO5BzGbeRPd5vE2UmTyHDTBbVvnBbmirPf%2FZTs%2F6VA87UxT1kMJ5wRSEZ%2Bke9S9t39CvGsHA%2BPAKvH3b%2F6f2DbE8AdzGsmLcngtfhUvcTPM%2Fd4%2BfMXKWNhc%2B5nTb%2FvmZvgOofqh8FC3tDMkaRC1DQwxp3i2RVliMyJdYWtCD7PhIRPP0zazHJQag7CLHDqX11lsg67JExx2DFvZxl9Uwl5uIxAY6pgHiFv5Mw6nnzet3lt%2BjwVbdMPMlskUILsLgteEgIu%2FTlXKovEBmE%2BzJpaf%2FsTk8U2Yl6YYodw5m8uvr5qwarXoJC44p0YBWncNlPZNXscsbayHAyP5fiAemZ91O8vP2chXQrW1MxWqz7vzVtoh3n9hsEJVvBkWCCtpEFMeiM%2B8q5WAAs9qhHeU47O%2B3AMIHgHL4E%2Fcx%2BR%2B1FZ0Fj6CoREY64Rs04AP0&X-Amz-Signature=85f5cceed458a30d913e6981092e14676530851026fa95bba68d78c92793644f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

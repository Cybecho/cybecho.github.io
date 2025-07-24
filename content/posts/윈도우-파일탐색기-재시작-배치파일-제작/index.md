---
title: "윈도우 파일탐색기 재시작 배치파일 제작"
date: 2023-10-15T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "윈도우 파일 탐색기를 재시작하는 배치파일을 작성하는 방법을 설명합니다. 작업표시줄이 먹통이 될 때마다 작업관리자를 이용하는 대신, 배치파일을 통해 간편하게 재시작할 수 있도록 코드를 작성하고 단축키에 등록하는 방법을 제안합니다."
notion_id: "07583846-d650-4f69-aca2-588429d0405a"
notion_url: "https://www.notion.so/07583846d6504f69aca2588429d0405a"
---

# 윈도우 파일탐색기 재시작 배치파일 제작

> **Summary**
> 윈도우 파일 탐색기를 재시작하는 배치파일을 작성하는 방법을 설명합니다. 작업표시줄이 먹통이 될 때마다 작업관리자를 이용하는 대신, 배치파일을 통해 간편하게 재시작할 수 있도록 코드를 작성하고 단축키에 등록하는 방법을 제안합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c306dd15-3210-4f72-911f-0ccbaf6f4aa5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHX7EY3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDFTMXG5nCqCGKmo0COiqTssEsuYbCR4DSccPaZXBojnQIhALHvvdNIT0xOOCEeCW6prW57ajGavEhP1hkrsu7W4CTjKv8DCCoQABoMNjM3NDIzMTgzODA1Igzt8PolE7Z6TXZSTb0q3AOkfyBfGcHLmT5BSYkHnAnybPmKQK4u12%2FYJ3crUBHO0EYjWVRpgM5vkXNQX7YBQgBUg0ylqiqgUW9pAfSVo11VT00T%2BNxI2VHoQSZyM%2FRmSWVH2XlplLLFX9yfn5jGLETzdEEOQIEbz3JC1TSuDuKJGaLGRj157CFfsCeBjdZcz0Vu0vMLS99wkL%2BNimi5vkyP7XfoYO2JWnmD58Tv4s%2BoLVNESLJnNo1HvSfR16NNRP2dm9yL3gJfHNJm0TqLAkcqxUX6hjz21RGKg63ZXg65SXBgUePq7huF96jw8q7fT6faZ%2B6ICOfAR4ZIYlTZFyG6gsZuPCEOxiP5iz45KXbzTD7yB52OYzz7adtOPYQ6ZsVwAfCLOElEiyl6vqcUfx2cBW76yehTLPijy86Ovhh6oMzZfUSaRvqggMnz%2Fm4APMyYeviQkhWGEuVvx%2B3JPVOlNvzXOZ6oTvZo4w9QKyCo3AF5K4hG0xpDBzpFcjvYkPSRo%2B3xY%2FPlmzP46aPjENuQEtVT1sgPGlALDzY94H40kQKisCLx1s2a0vSp%2BXMb0jZP%2BLJvN3SBdlSNuvmfA23p2Cs1JgUaQRJVoMqcykkfnpW%2Fp1uKE0JWYWS7xyWmq2%2BD5UVhLhOuKS9RqTCB9ofEBjqkARpFvyFIQFrur%2FpQRyjCzv3nzV1K0Zeek4jojOuOSoKgR9AEHhWQOYsrOtJpeNVKikRFP3uDUsQQYgYthDRqTy6BCsT8NFx3r%2BGnpkwvp67oWSreO0SnSTNyzHfk1Pwl8W6lGHcs4MyG0wnR8Yjpa%2F380tcx5TI7l0GDnnIVHPOj%2BAfbtDhKeSVRcscJUniUuhGHgulWVx8Uqvdi2PmHsJhjsA3y&X-Amz-Signature=1972885bee531e079f2d8cd418320ad856ff034874d48f46169fd2d2f9179d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


윈도우 wsl 추가이후로 참 좋은데…

이것저것 커스터마이징을 하다보니 작업표시줄이 먹통이 되는 경우가 가끔 있다.

맨날 작업관리자 들어가서 재시작하기도 귀찮아서 배치파일로 재시작 코드를 작성하여 단축키에 등록해보고자 한다

```powershell
@echo off

taskkill /f /im explorer.exe
start explorer.exe

exit
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7419a487-b3cf-4594-b0cb-b30cd619ff07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHX7EY3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDFTMXG5nCqCGKmo0COiqTssEsuYbCR4DSccPaZXBojnQIhALHvvdNIT0xOOCEeCW6prW57ajGavEhP1hkrsu7W4CTjKv8DCCoQABoMNjM3NDIzMTgzODA1Igzt8PolE7Z6TXZSTb0q3AOkfyBfGcHLmT5BSYkHnAnybPmKQK4u12%2FYJ3crUBHO0EYjWVRpgM5vkXNQX7YBQgBUg0ylqiqgUW9pAfSVo11VT00T%2BNxI2VHoQSZyM%2FRmSWVH2XlplLLFX9yfn5jGLETzdEEOQIEbz3JC1TSuDuKJGaLGRj157CFfsCeBjdZcz0Vu0vMLS99wkL%2BNimi5vkyP7XfoYO2JWnmD58Tv4s%2BoLVNESLJnNo1HvSfR16NNRP2dm9yL3gJfHNJm0TqLAkcqxUX6hjz21RGKg63ZXg65SXBgUePq7huF96jw8q7fT6faZ%2B6ICOfAR4ZIYlTZFyG6gsZuPCEOxiP5iz45KXbzTD7yB52OYzz7adtOPYQ6ZsVwAfCLOElEiyl6vqcUfx2cBW76yehTLPijy86Ovhh6oMzZfUSaRvqggMnz%2Fm4APMyYeviQkhWGEuVvx%2B3JPVOlNvzXOZ6oTvZo4w9QKyCo3AF5K4hG0xpDBzpFcjvYkPSRo%2B3xY%2FPlmzP46aPjENuQEtVT1sgPGlALDzY94H40kQKisCLx1s2a0vSp%2BXMb0jZP%2BLJvN3SBdlSNuvmfA23p2Cs1JgUaQRJVoMqcykkfnpW%2Fp1uKE0JWYWS7xyWmq2%2BD5UVhLhOuKS9RqTCB9ofEBjqkARpFvyFIQFrur%2FpQRyjCzv3nzV1K0Zeek4jojOuOSoKgR9AEHhWQOYsrOtJpeNVKikRFP3uDUsQQYgYthDRqTy6BCsT8NFx3r%2BGnpkwvp67oWSreO0SnSTNyzHfk1Pwl8W6lGHcs4MyG0wnR8Yjpa%2F380tcx5TI7l0GDnnIVHPOj%2BAfbtDhKeSVRcscJUniUuhGHgulWVx8Uqvdi2PmHsJhjsA3y&X-Amz-Signature=86d406e14fdcc68ea71463a2e4965115a126c838cadc7b70dbab6d93929dc09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 💡 **귀찮으면 다운 ㄱ**
> ---
>
>



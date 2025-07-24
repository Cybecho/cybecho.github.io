---
title: "MAC FAT32 USB 4GB 이상 파일 복사하기 "
date: 2023-06-03T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, 이를 해결하기 위해 ExFAT으로 포맷하면 맥 환경에서 파일 복사가 가능하다. 디스크 유틸리티를 사용해 USB를 ExFAT으로 초기화하면 4GB 이상의 파일을 복사할 수 있다."
notion_id: "a61b9f8d-76b5-4d1f-82ed-bcda10eb71e8"
notion_url: "https://www.notion.so/MAC-FAT32-USB-4GB-a61b9f8d76b54d1f82edbcda10eb71e8"
---

# MAC FAT32 USB 4GB 이상 파일 복사하기 

> **Summary**
> FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, 이를 해결하기 위해 ExFAT으로 포맷하면 맥 환경에서 파일 복사가 가능하다. 디스크 유틸리티를 사용해 USB를 ExFAT으로 초기화하면 4GB 이상의 파일을 복사할 수 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c69ee83-c209-4a0d-9568-764ebb877f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDDLUL3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCxCEu6AlejDHf%2B0KxpsCACZ1UMliiLe%2F3KPMnNuf3OjgIhAIf%2BGWSoeUSpkUCE%2B8bKdYtJLr9j7YTIQEJvl2duukMSKv8DCCkQABoMNjM3NDIzMTgzODA1IgzctBQAFekaKNOcdwoq3ANZ%2FVRMp4aq3H%2Fu9yg%2FNR53Q1UVxxdwiZnWhL%2BXbkGDSn5s1ATWg16xhlcBa6KX0a%2BaiuVOPugLH4bSSQAgBxhKO3lF3raiXuwN5XEJ0E9G5RE%2BBaqWQ%2FzQwxb00yl8lc8mUuXzrtIzsUqZmGAXEsY9C553m3A%2FNuirc3vsmsskhkspPfgQJtelvsqoDfrXLNLf8rSNfN06IS%2FL%2FnGyrr%2FC64FH0MgsV0Hro4x0Q0ax3L3jMw5q4qcibwGA6lSWwlOkTO%2BES9EIGzOooy%2FkS3Ar6zrrpwyz%2BoxVMoXYumyr0UFdZhaxU5yvdRH1VsV5W4VURT5zoUluDf11CS6Ko%2BLCBJaKUPVZoEWRIcIodYyMU%2Fqa%2F4Q1DBvps0%2Fj73qw1Aa7iRl0HL5IPpeKVK6I9ESYajepD40ie9VQ%2FBDUyMCFuPgv4m7tX9iiEhI%2BzkZUN238TvF%2FPE4gYFBbZZC9dABi%2FYODrdGiGIitTdWPBb0ok0F1QQKW441yhlJFj1Aa%2FaaWWF5K5W70lO%2Fum9jK0PruLF2sXUPhU9vmBHL7QGkqT4IrE0D79jQBnPSCfg%2F8z875QVJAyGHOz5%2FInYANbvX9R3acf66ch9aHxjKMDhdJ2U3sb%2F8fYmRRgyUjoDDezofEBjqkAXSt7cHdvWV%2F3Nox67RxZjB2e5RC0HKH%2BPxYsnZrLN4S0vcKUOLKGTlvfpSN8bOR0iLjTdnYHcJZhEVL1Lb6YtPFg5a7WEF0XsFFZLDsINI3FI5dPT3p58KNGD%2FzZCL762wXCQFd1n4YA2%2ByPIp4JBCvqUL1aIwW%2FQjnsDnpHYXSur5np5HKBPcWOnYYKh8NqvSZmwkUtFUPetnnPxWy67rEolNe&X-Amz-Signature=cc405c0e5f6185e0e43ba9b00b2553ffa0574007b9e9d7a807d494ab81c9639a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


중고로 싸게 들여온 MAC MINI 2018에 Ubunut를 설치하려고 파일을 설치하고 쿠팡에서 적당히 구매한 USB에 파일을 복사하려 했는데 4GB 이상 파일은 복사가 안되는상황발생…


이유를 알아보니 구매한 USB가 FAT32로 포맷되어 그런거였다

(fat32는 2^32 까지 저장 간능하나, 파일 전송간 4GB용량제한을 둠)


FAT32 로 포맷된 USB를 4GB를복사할 수있게 NTFS로 포맷하면 윈도우 및 맥 환경에서 4기가 이상의 파일을 옮길 수 있지만, 나는 맥에서만 활용할 것이기 때문에 ExFAT 포맷으로 초기화하려고합니다. 무엇보다 NTFS 포맷은 맥에서기본적으로제공하지않아서 이것저것 설치할게 많아서 패스….

궁금하면 아래 링크 참고

🔗 [https://groovechance.tistory.com/73](https://groovechance.tistory.com/73)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b0b0173-bac0-4c7a-86e1-5a736f21007d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDDLUL3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCxCEu6AlejDHf%2B0KxpsCACZ1UMliiLe%2F3KPMnNuf3OjgIhAIf%2BGWSoeUSpkUCE%2B8bKdYtJLr9j7YTIQEJvl2duukMSKv8DCCkQABoMNjM3NDIzMTgzODA1IgzctBQAFekaKNOcdwoq3ANZ%2FVRMp4aq3H%2Fu9yg%2FNR53Q1UVxxdwiZnWhL%2BXbkGDSn5s1ATWg16xhlcBa6KX0a%2BaiuVOPugLH4bSSQAgBxhKO3lF3raiXuwN5XEJ0E9G5RE%2BBaqWQ%2FzQwxb00yl8lc8mUuXzrtIzsUqZmGAXEsY9C553m3A%2FNuirc3vsmsskhkspPfgQJtelvsqoDfrXLNLf8rSNfN06IS%2FL%2FnGyrr%2FC64FH0MgsV0Hro4x0Q0ax3L3jMw5q4qcibwGA6lSWwlOkTO%2BES9EIGzOooy%2FkS3Ar6zrrpwyz%2BoxVMoXYumyr0UFdZhaxU5yvdRH1VsV5W4VURT5zoUluDf11CS6Ko%2BLCBJaKUPVZoEWRIcIodYyMU%2Fqa%2F4Q1DBvps0%2Fj73qw1Aa7iRl0HL5IPpeKVK6I9ESYajepD40ie9VQ%2FBDUyMCFuPgv4m7tX9iiEhI%2BzkZUN238TvF%2FPE4gYFBbZZC9dABi%2FYODrdGiGIitTdWPBb0ok0F1QQKW441yhlJFj1Aa%2FaaWWF5K5W70lO%2Fum9jK0PruLF2sXUPhU9vmBHL7QGkqT4IrE0D79jQBnPSCfg%2F8z875QVJAyGHOz5%2FInYANbvX9R3acf66ch9aHxjKMDhdJ2U3sb%2F8fYmRRgyUjoDDezofEBjqkAXSt7cHdvWV%2F3Nox67RxZjB2e5RC0HKH%2BPxYsnZrLN4S0vcKUOLKGTlvfpSN8bOR0iLjTdnYHcJZhEVL1Lb6YtPFg5a7WEF0XsFFZLDsINI3FI5dPT3p58KNGD%2FzZCL762wXCQFd1n4YA2%2ByPIp4JBCvqUL1aIwW%2FQjnsDnpHYXSur5np5HKBPcWOnYYKh8NqvSZmwkUtFUPetnnPxWy67rEolNe&X-Amz-Signature=fb9ce3647898634e1a18e3f66da7b14896792b06e75278d56f698563ad1bb8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

디스크 유틸리티 들어가서 포맷할 드라이브 설치하고 우측 위에 `지우기` 클릭

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/27d3e185-9087-4655-ab3c-231c42680477/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDDLUL3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCxCEu6AlejDHf%2B0KxpsCACZ1UMliiLe%2F3KPMnNuf3OjgIhAIf%2BGWSoeUSpkUCE%2B8bKdYtJLr9j7YTIQEJvl2duukMSKv8DCCkQABoMNjM3NDIzMTgzODA1IgzctBQAFekaKNOcdwoq3ANZ%2FVRMp4aq3H%2Fu9yg%2FNR53Q1UVxxdwiZnWhL%2BXbkGDSn5s1ATWg16xhlcBa6KX0a%2BaiuVOPugLH4bSSQAgBxhKO3lF3raiXuwN5XEJ0E9G5RE%2BBaqWQ%2FzQwxb00yl8lc8mUuXzrtIzsUqZmGAXEsY9C553m3A%2FNuirc3vsmsskhkspPfgQJtelvsqoDfrXLNLf8rSNfN06IS%2FL%2FnGyrr%2FC64FH0MgsV0Hro4x0Q0ax3L3jMw5q4qcibwGA6lSWwlOkTO%2BES9EIGzOooy%2FkS3Ar6zrrpwyz%2BoxVMoXYumyr0UFdZhaxU5yvdRH1VsV5W4VURT5zoUluDf11CS6Ko%2BLCBJaKUPVZoEWRIcIodYyMU%2Fqa%2F4Q1DBvps0%2Fj73qw1Aa7iRl0HL5IPpeKVK6I9ESYajepD40ie9VQ%2FBDUyMCFuPgv4m7tX9iiEhI%2BzkZUN238TvF%2FPE4gYFBbZZC9dABi%2FYODrdGiGIitTdWPBb0ok0F1QQKW441yhlJFj1Aa%2FaaWWF5K5W70lO%2Fum9jK0PruLF2sXUPhU9vmBHL7QGkqT4IrE0D79jQBnPSCfg%2F8z875QVJAyGHOz5%2FInYANbvX9R3acf66ch9aHxjKMDhdJ2U3sb%2F8fYmRRgyUjoDDezofEBjqkAXSt7cHdvWV%2F3Nox67RxZjB2e5RC0HKH%2BPxYsnZrLN4S0vcKUOLKGTlvfpSN8bOR0iLjTdnYHcJZhEVL1Lb6YtPFg5a7WEF0XsFFZLDsINI3FI5dPT3p58KNGD%2FzZCL762wXCQFd1n4YA2%2ByPIp4JBCvqUL1aIwW%2FQjnsDnpHYXSur5np5HKBPcWOnYYKh8NqvSZmwkUtFUPetnnPxWy67rEolNe&X-Amz-Signature=2998a867db87a181d34b35bd268093bc11724794a5383363945f6b8c51c3c3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`지우기` 에서 포맷 형식을 `ExFAT` 으로 변경 후 지우기를 실행시키면 초기화가 진행되고 4GB 이상 파일이 복사되는것을 확인할 수 있습니다.



![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c69ee83-c209-4a0d-9568-764ebb877f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDDLUL3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCxCEu6AlejDHf%2B0KxpsCACZ1UMliiLe%2F3KPMnNuf3OjgIhAIf%2BGWSoeUSpkUCE%2B8bKdYtJLr9j7YTIQEJvl2duukMSKv8DCCkQABoMNjM3NDIzMTgzODA1IgzctBQAFekaKNOcdwoq3ANZ%2FVRMp4aq3H%2Fu9yg%2FNR53Q1UVxxdwiZnWhL%2BXbkGDSn5s1ATWg16xhlcBa6KX0a%2BaiuVOPugLH4bSSQAgBxhKO3lF3raiXuwN5XEJ0E9G5RE%2BBaqWQ%2FzQwxb00yl8lc8mUuXzrtIzsUqZmGAXEsY9C553m3A%2FNuirc3vsmsskhkspPfgQJtelvsqoDfrXLNLf8rSNfN06IS%2FL%2FnGyrr%2FC64FH0MgsV0Hro4x0Q0ax3L3jMw5q4qcibwGA6lSWwlOkTO%2BES9EIGzOooy%2FkS3Ar6zrrpwyz%2BoxVMoXYumyr0UFdZhaxU5yvdRH1VsV5W4VURT5zoUluDf11CS6Ko%2BLCBJaKUPVZoEWRIcIodYyMU%2Fqa%2F4Q1DBvps0%2Fj73qw1Aa7iRl0HL5IPpeKVK6I9ESYajepD40ie9VQ%2FBDUyMCFuPgv4m7tX9iiEhI%2BzkZUN238TvF%2FPE4gYFBbZZC9dABi%2FYODrdGiGIitTdWPBb0ok0F1QQKW441yhlJFj1Aa%2FaaWWF5K5W70lO%2Fum9jK0PruLF2sXUPhU9vmBHL7QGkqT4IrE0D79jQBnPSCfg%2F8z875QVJAyGHOz5%2FInYANbvX9R3acf66ch9aHxjKMDhdJ2U3sb%2F8fYmRRgyUjoDDezofEBjqkAXSt7cHdvWV%2F3Nox67RxZjB2e5RC0HKH%2BPxYsnZrLN4S0vcKUOLKGTlvfpSN8bOR0iLjTdnYHcJZhEVL1Lb6YtPFg5a7WEF0XsFFZLDsINI3FI5dPT3p58KNGD%2FzZCL762wXCQFd1n4YA2%2ByPIp4JBCvqUL1aIwW%2FQjnsDnpHYXSur5np5HKBPcWOnYYKh8NqvSZmwkUtFUPetnnPxWy67rEolNe&X-Amz-Signature=cc405c0e5f6185e0e43ba9b00b2553ffa0574007b9e9d7a807d494ab81c9639a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



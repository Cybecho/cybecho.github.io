---
title: "cursor 완전삭제"
date: 2024-04-06T14:09:00.000Z
draft: false
tags: ["Other"]
series: ["개발환경"]
description: "VS Code에서 cursor를 사용 중일 때 WSL2에서 발생하는 문제를 해결하기 위해 cursor를 완전히 삭제하고 특정 디렉토리를 비워야 한다. 또한, cursor의 문제를 해결하기 위해 제공된 코드를 복사하여 지정된 디렉토리의 cursor를 대체해야 한다."
notion_id: "04331296-b3eb-46a6-a516-2085118c1cd1"
notion_url: "https://www.notion.so/cursor-04331296b3eb46a6a5162085118c1cd1"
---

# cursor 완전삭제

> **Summary**
> VS Code에서 cursor를 사용 중일 때 WSL2에서 발생하는 문제를 해결하기 위해 cursor를 완전히 삭제하고 특정 디렉토리를 비워야 한다. 또한, cursor의 문제를 해결하기 위해 제공된 코드를 복사하여 지정된 디렉토리의 cursor를 대체해야 한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9295a3dd-2bdd-4a25-a346-38e04743cb83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSGCSWG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCv%2BoMn8OrqnvRwM5PtTqoe7W567DsX7%2BzDs36DKzxzjwIgK7AYYvkTYen5RSfShgpviRcd%2BeufUn7n4PM4Z6ulwVMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKDOnXWEzjN2nWjAwSrcA7I4V2Oj5UX4Gp7bfCIrCVmysCovy7EWzHrRz8Ci1KjZ0AKXPxdojLktInEcmmJ%2FtRE4KdIwUu%2BeINGXhkkiUaCWstDGI2eqqZk2hlH%2BnKnxMy5MrATDJ%2BXtYTL537Sx0SfiIxel8i%2FpgquLd7NKdWPePfvEwbmnYJEbfgEIeJuySxN5cXWHOud120VpxPy8XDIII1x9intDAVcYfz%2BKsqtzs%2BXLNImtn6bSWQ2DUAZM%2BwOb1TurQgptJeWcy%2Bu%2BXU8ExIRhvHuEKr%2Flx6z7LWFm4MsCpIj2HPy0AfkpsIZw8%2F33mzYrpy2MNxr%2Bjh2lSWNRiozc8vMfxW7cPo8ShpL%2FrNm4IKxRRWDjVlnfB9TN0dTpxXn7NESFT6DzQoxS2a5QUIDuiHnpMPDIp9jUKjtCFDKz2iM4tIF3qm5CWggSgPzlAbB1%2FY4cbIuYv3mncZtLJzKJGE4QgstjsMSbFO77l5IFMDYzQbYhAKF9TYITzNksQoO7EExZOnW%2F4XIcwMWQHZBAoqfDh97G%2FuxasLsUOebcu%2BXcAEPGDg6iiy%2BRm89UIjSqhkOoJqE%2BPmQoAFMFvn7%2FSs1Q2cyU6dBG96Uxq6HjsDaAeIuI%2BwUg%2FBOjGPWYgV0sMxEFsbIIMNnOh8QGOqUBcVMKyev%2F%2FDxpsTfKhzCd%2Bw%2B5ni7LA5N8f29UY%2BibzD4lNvU%2BW0%2FuB5e8EEvvlJ7WkEOq3ITbeGHNFsmtzr%2BEz1cupGk9lvPyN92BN%2FhiVn2wpHSWVt2wP2%2FJQzvua1haVXebXvOj4pmQqF%2BcQVqhd5Zq0MB67QqtC8NtwpbChZMz7CQgvJmi9A47DKtONYv8RmI%2FgOAXRgF0bliu0Os4Kmgu%2FKeS&X-Amz-Signature=0b2808812f770a4ad55032a460c820e3875e07c2f9098e38e2315ce384810802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

힙스터 병이 있어서 잘 돌아가는 vs code 냅두고 cursor 사용중인데,


wsl2을 통한 ubuntu에서 vscode를 실행할일이 있을때 곤란한 상황이 펼쳐지곤 한다


cursor를 지우면 깔끔하게 해결되는 문제지만…. cursor를 안쓸 순 없는걸=…


최초 cursor 설정때 cursor 커맨드를 code 커맨드로도 대체하는 속성이 있는데, 멋도 모르고 내가 그걸 체크해버려서 지웠다 깔아도 해당 옵션이 유지되었다…


### 일단 프로그램 추가 제거에서 cursor를 삭제하자

### 그리고 아래 디렉토리들을 전부 비워주면 된다

```c++
C:\Users\SBU\AppData\Roaming\Cursor
```

```c++
C:\Users\SBU\AppData\Local\Programs\cursor
```

```c++
C:\Users\SBU\AppData\Local\cursor-updater
```

# WSL2 cursor 문제 해결

🔗 [https://github.com/getcursor/cursor/issues/807](https://github.com/getcursor/cursor/issues/807)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e6821acc-4bad-4910-b1d3-a4117ae01990/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSGCSWG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCv%2BoMn8OrqnvRwM5PtTqoe7W567DsX7%2BzDs36DKzxzjwIgK7AYYvkTYen5RSfShgpviRcd%2BeufUn7n4PM4Z6ulwVMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKDOnXWEzjN2nWjAwSrcA7I4V2Oj5UX4Gp7bfCIrCVmysCovy7EWzHrRz8Ci1KjZ0AKXPxdojLktInEcmmJ%2FtRE4KdIwUu%2BeINGXhkkiUaCWstDGI2eqqZk2hlH%2BnKnxMy5MrATDJ%2BXtYTL537Sx0SfiIxel8i%2FpgquLd7NKdWPePfvEwbmnYJEbfgEIeJuySxN5cXWHOud120VpxPy8XDIII1x9intDAVcYfz%2BKsqtzs%2BXLNImtn6bSWQ2DUAZM%2BwOb1TurQgptJeWcy%2Bu%2BXU8ExIRhvHuEKr%2Flx6z7LWFm4MsCpIj2HPy0AfkpsIZw8%2F33mzYrpy2MNxr%2Bjh2lSWNRiozc8vMfxW7cPo8ShpL%2FrNm4IKxRRWDjVlnfB9TN0dTpxXn7NESFT6DzQoxS2a5QUIDuiHnpMPDIp9jUKjtCFDKz2iM4tIF3qm5CWggSgPzlAbB1%2FY4cbIuYv3mncZtLJzKJGE4QgstjsMSbFO77l5IFMDYzQbYhAKF9TYITzNksQoO7EExZOnW%2F4XIcwMWQHZBAoqfDh97G%2FuxasLsUOebcu%2BXcAEPGDg6iiy%2BRm89UIjSqhkOoJqE%2BPmQoAFMFvn7%2FSs1Q2cyU6dBG96Uxq6HjsDaAeIuI%2BwUg%2FBOjGPWYgV0sMxEFsbIIMNnOh8QGOqUBcVMKyev%2F%2FDxpsTfKhzCd%2Bw%2B5ni7LA5N8f29UY%2BibzD4lNvU%2BW0%2FuB5e8EEvvlJ7WkEOq3ITbeGHNFsmtzr%2BEz1cupGk9lvPyN92BN%2FhiVn2wpHSWVt2wP2%2FJQzvua1haVXebXvOj4pmQqF%2BcQVqhd5Zq0MB67QqtC8NtwpbChZMz7CQgvJmi9A47DKtONYv8RmI%2FgOAXRgF0bliu0Os4Kmgu%2FKeS&X-Amz-Signature=2c29e92fc89540a738f68a66f996e699e9510dd2c96216fecdc98a64a71bff19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

cursor . 했을때 위 문제 생김..


아래 코드를 복사하고 wsl2 기준 아래 디렉토리의 cursor 를 대체한다.

🔗 [https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394](https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394)

```c++
/mnt/c/Users/SBU/AppData/Local/Programs/cursor/resources/app/bin
```


그럼 이제 cursor . 하면 제대로 열림


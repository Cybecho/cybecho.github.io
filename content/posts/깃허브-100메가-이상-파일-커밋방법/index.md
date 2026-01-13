---
title: "깃허브 100메가 이상 파일 커밋방법"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["Git"]
series: ["Git", "Tips", "진심글쓰기"]
description: "100MB 이상의 파일을 GitHub에 커밋하기 위해 Git LFS를 설치하고, 특정 파일 형식을 추적하도록 설정하는 방법을 설명합니다. 에러 발생 시 파일을 이동하고, 커밋 후 다시 업로드하는 절차를 안내합니다."
notion_id: "eb0d51d5-9dd5-471c-baa0-dad0ac29dfd4"
notion_url: "https://www.notion.so/100-eb0d51d59dd5471cbaa0dad0ac29dfd4"
---

# 깃허브 100메가 이상 파일 커밋방법

> **Summary**
> 100MB 이상의 파일을 GitHub에 커밋하기 위해 Git LFS를 설치하고, 특정 파일 형식을 추적하도록 설정하는 방법을 설명합니다. 에러 발생 시 파일을 이동하고, 커밋 후 다시 업로드하는 절차를 안내합니다.

---

## 유니티 프로젝트만들다가 에러났다

```python
#에러코드인데숭

The push operation includes a file which exceeds GitHub's file size restriction of 100MB. Please remove the file from history and try again.

File causing error:

VampireSurvivorCloneGame/Library/PackageCache/com.unity.burst@1.8.2/.Runtime/libburst-llvm-14.dylib (116.29 MB)
```

C:\Unityprojects\UnityMyGame_01\MyGame01\Library\PackageCache\com.unity.burst@1.8.2\.Runtime\libburst-llvm-14.dylib

Git Desktop만 있으면 안돼!

다음 프로그램이 필요

- [Git 설치](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)
- [Git LFS 설치](https://git-lfs.com/)

> 🔥 ****Proshell을 관리자 권한으로 실행하여 다음 명령어 입력 (그냥 CMD도 가능)****
> A  (LFS 파일을 커밋할 프로젝트 가장 상위에 git이 존재하는 폴더로 이동)
>
> ```plain text
> cd C:\Unityprojects\UnityVamSuLikeGame
> ```
>
> B
>
> ```plain text
> git lfs install
> ```
>
> C  (.zip확장자를 가진 모든 파일을 lfs에 포함하겠다는 뜻) (혹은 파일명을 적어도 된다)
>
> ```plain text
> git lfs track "*.zip"
>
> or
>
> git lfs track "직박구리.zip"
> ```
>
> D
>
> ```plain text
> git add .gitattributes
> ```
>
>
>
> CMD 내부에서 입력한 명령어는 다음과 같다
>
> ```python
> cd C:\Unityprojects\UnityVamSuLikeGame
>
> git lfs install
>
> git lfs track "*.dylib"
>
> git add .gitattributes
> ```
>
>


## CMD에서 다음과 같이 명령어를 입력하고 다음과 같은 멘트가 나온다면 성공…

![Image](image_8e2401efd160.png)

# 후에 Commit Error가 난 지점까지 Undo 해준다

![Image](image_aac4bc5469fd.png)


## 그 후에  다시 Commit 및 Push를 해보면

![Image](image_4c8dbcff5df7.png)




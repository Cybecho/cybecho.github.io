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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1e716274-e666-45b0-947c-08ba440f7bf2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3QPUGS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGZThg0bp3wAkRTDmyXneIdbrMaJPEaT9ovhdNPJpkzXAiEA11P1XFHXB1oTzUxRqurQz7rXu4d1%2Fv2E7zQhAy6nyS8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIlk3%2BVVMZtvg2PRJCrcA0FvV9tmLABVCt0HNl4fYAGNrFA09oOWq9NEMqH3DUxhi1sZewL88hhKiC1AltsfuU2sWL6VFoFNExWnl4fjTlVXxD6L2P9PEu6E%2F3kNzZhrf9Jmg0Ntj2sODhtIQ7zWQ0QGWxPg1iIrwOfZzu5upEHJvTThwf7uPHmyaJ7mPsgMPTHEY7XmoXpJ8TCrcyhwMirPMp6ammcglxwKvz7FT5GiYeREo71uq%2FDViPSUTfTJWgUIbxVkn3KYxa%2Fo8jgsYk55R4vgs79Qk6pg%2Fk8UxgdELSaIa6FKY3pju%2F0pytjiFq8zrIJGXhAqCECJdJqfmnLIJC8jl48sPfx%2BgcVyGZQvL8kOzuOLBAuvyEeUd8WUqXQACwKr%2FkBgzj0Z69ltRrkcrdwtpq0rAxEPCbW6CH2hhq9k7YOfYaXAOEiuZt8XqtSZeSZHyymEzoxu0kImOKE7bpLmVBfDXh6LDmKXuZeO7Ev96UUZd5mhneE23bcj6cKgj8jG3a3wRZH90cOHCCQuKgfRRtkN0%2BZi1M0d2NZs3S1XNbKEv29G0AoLmmgmZQNMGB49vaSAAMqq1KwOrRea7QuFKm70J1RVpy7w%2F49p4m3DYua802YxG3nMjpSkbxfxFDhks8BQrVv1MOi%2FiMQGOqUBv3zP4GrBBn7bsY2pUqMJtBN9tHiPyBobjvrrV2HMxXMfbQmL7hPEB88m0qSy3azHvy3KtmSsPMXCGK729EEsZCwlchgpT%2Bwv%2ByN0LM8UmdFnEby08JvDRJVcJPKTyBVSvcgbMPyrv5pI3nCRMLVib8Cm%2B1nmo5lipYZRi5wgEYvRs%2F76PJ8oWnySKRxuSXjlqXiVp3Efo%2Bg3HMd8MiuAVsLDxEkt&X-Amz-Signature=d0c9ce0b64e718f401bdef8b7353fe88316a078047e8c7eaaf914ae730655a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 후에 Commit Error가 난 지점까지 Undo 해준다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5cc37d79-beda-4fdf-bb59-e20c16a9147c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3QPUGS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGZThg0bp3wAkRTDmyXneIdbrMaJPEaT9ovhdNPJpkzXAiEA11P1XFHXB1oTzUxRqurQz7rXu4d1%2Fv2E7zQhAy6nyS8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIlk3%2BVVMZtvg2PRJCrcA0FvV9tmLABVCt0HNl4fYAGNrFA09oOWq9NEMqH3DUxhi1sZewL88hhKiC1AltsfuU2sWL6VFoFNExWnl4fjTlVXxD6L2P9PEu6E%2F3kNzZhrf9Jmg0Ntj2sODhtIQ7zWQ0QGWxPg1iIrwOfZzu5upEHJvTThwf7uPHmyaJ7mPsgMPTHEY7XmoXpJ8TCrcyhwMirPMp6ammcglxwKvz7FT5GiYeREo71uq%2FDViPSUTfTJWgUIbxVkn3KYxa%2Fo8jgsYk55R4vgs79Qk6pg%2Fk8UxgdELSaIa6FKY3pju%2F0pytjiFq8zrIJGXhAqCECJdJqfmnLIJC8jl48sPfx%2BgcVyGZQvL8kOzuOLBAuvyEeUd8WUqXQACwKr%2FkBgzj0Z69ltRrkcrdwtpq0rAxEPCbW6CH2hhq9k7YOfYaXAOEiuZt8XqtSZeSZHyymEzoxu0kImOKE7bpLmVBfDXh6LDmKXuZeO7Ev96UUZd5mhneE23bcj6cKgj8jG3a3wRZH90cOHCCQuKgfRRtkN0%2BZi1M0d2NZs3S1XNbKEv29G0AoLmmgmZQNMGB49vaSAAMqq1KwOrRea7QuFKm70J1RVpy7w%2F49p4m3DYua802YxG3nMjpSkbxfxFDhks8BQrVv1MOi%2FiMQGOqUBv3zP4GrBBn7bsY2pUqMJtBN9tHiPyBobjvrrV2HMxXMfbQmL7hPEB88m0qSy3azHvy3KtmSsPMXCGK729EEsZCwlchgpT%2Bwv%2ByN0LM8UmdFnEby08JvDRJVcJPKTyBVSvcgbMPyrv5pI3nCRMLVib8Cm%2B1nmo5lipYZRi5wgEYvRs%2F76PJ8oWnySKRxuSXjlqXiVp3Efo%2Bg3HMd8MiuAVsLDxEkt&X-Amz-Signature=caeecdb5e99b01cd2be06741523109d9fdc5f90bc5ec7ed524c90e73b0024d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 그 후에  다시 Commit 및 Push를 해보면

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/25c960fb-ec66-4e64-bb23-642fe55b91e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3QPUGS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGZThg0bp3wAkRTDmyXneIdbrMaJPEaT9ovhdNPJpkzXAiEA11P1XFHXB1oTzUxRqurQz7rXu4d1%2Fv2E7zQhAy6nyS8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIlk3%2BVVMZtvg2PRJCrcA0FvV9tmLABVCt0HNl4fYAGNrFA09oOWq9NEMqH3DUxhi1sZewL88hhKiC1AltsfuU2sWL6VFoFNExWnl4fjTlVXxD6L2P9PEu6E%2F3kNzZhrf9Jmg0Ntj2sODhtIQ7zWQ0QGWxPg1iIrwOfZzu5upEHJvTThwf7uPHmyaJ7mPsgMPTHEY7XmoXpJ8TCrcyhwMirPMp6ammcglxwKvz7FT5GiYeREo71uq%2FDViPSUTfTJWgUIbxVkn3KYxa%2Fo8jgsYk55R4vgs79Qk6pg%2Fk8UxgdELSaIa6FKY3pju%2F0pytjiFq8zrIJGXhAqCECJdJqfmnLIJC8jl48sPfx%2BgcVyGZQvL8kOzuOLBAuvyEeUd8WUqXQACwKr%2FkBgzj0Z69ltRrkcrdwtpq0rAxEPCbW6CH2hhq9k7YOfYaXAOEiuZt8XqtSZeSZHyymEzoxu0kImOKE7bpLmVBfDXh6LDmKXuZeO7Ev96UUZd5mhneE23bcj6cKgj8jG3a3wRZH90cOHCCQuKgfRRtkN0%2BZi1M0d2NZs3S1XNbKEv29G0AoLmmgmZQNMGB49vaSAAMqq1KwOrRea7QuFKm70J1RVpy7w%2F49p4m3DYua802YxG3nMjpSkbxfxFDhks8BQrVv1MOi%2FiMQGOqUBv3zP4GrBBn7bsY2pUqMJtBN9tHiPyBobjvrrV2HMxXMfbQmL7hPEB88m0qSy3azHvy3KtmSsPMXCGK729EEsZCwlchgpT%2Bwv%2ByN0LM8UmdFnEby08JvDRJVcJPKTyBVSvcgbMPyrv5pI3nCRMLVib8Cm%2B1nmo5lipYZRi5wgEYvRs%2F76PJ8oWnySKRxuSXjlqXiVp3Efo%2Bg3HMd8MiuAVsLDxEkt&X-Amz-Signature=dc77dee0d4ee1ab604ab1a41cab7c678d12643c49adebe2c21de08993fba40d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)




---
title: "깃허브 100메가 이상 파일 커밋방법"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["Git"]
series: ["Git", "Tips", "진심글쓰기"]
description: "100MB 이상의 파일을 GitHub에 커밋하기 위해 Git LFS를 설치하고 사용하는 방법을 설명합니다. 에러 발생 시, 대용량 파일을 LFS로 관리하기 위해 필요한 명령어와 절차를 안내하며, 초기 커밋을 Undo한 후 대용량 파일을 따로 옮겨 커밋하는 방법도 제시합니다."
notion_id: "eb0d51d5-9dd5-471c-baa0-dad0ac29dfd4"
notion_url: "https://www.notion.so/100-eb0d51d59dd5471cbaa0dad0ac29dfd4"
---

# 깃허브 100메가 이상 파일 커밋방법

> **Summary**
> 100MB 이상의 파일을 GitHub에 커밋하기 위해 Git LFS를 설치하고 사용하는 방법을 설명합니다. 에러 발생 시, 대용량 파일을 LFS로 관리하기 위해 필요한 명령어와 절차를 안내하며, 초기 커밋을 Undo한 후 대용량 파일을 따로 옮겨 커밋하는 방법도 제시합니다.

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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1e716274-e666-45b0-947c-08ba440f7bf2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443ZRQTE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEN6zmZb5Ry39t06K3sZ%2B85YOrxSDesyZeYARlOsnD%2BAIhAMr3cJcG%2F5ienUMnZR5lwxQdrNoAeoLCfC3C9IBnivKcKv8DCCoQABoMNjM3NDIzMTgzODA1IgxRsREkGvUygb7oWboq3APFnR2WlBldj1ZmilB6MtvWsVxVs1Mig1i0oFuyEzVitZqNXjCuyXgFTtSQB9s%2BMH5MnTuSjKpShgRo5715INxoXalsBoFnFoFSxfqkDKys3Yn1oVVL7oahybletcPl6HlWXGATjbZypWRNbog5v2ZQqUZS9ob3zPEq7FXEaN0Wko%2BrbTn7gAXHpZeA2QTyg40oPSHt1acb9uCaCK8DKEpt3lwXTgPs%2B9aCIvMMBbq3UUt7LajUhkvEfoDIG%2BQTRfy3zRp9NECDOjXz84bC0KUFUjqpkfkd0T9UkozQD0Fb7rW9R74RE9TVtdoTXmrMtWbcmwW%2FFMx9qaMGDfkgHRB4jYIOjkg9TcT0Bz7GzxoPC0Ul549pZiN3fQ6lg2hQJuaRzrCtTM0U6BlnMsPfa%2FCCzDVPmqca2vbzmlKCWGmFam8cAyjiAekW80u2uyMghQ%2FvWL88%2FL%2BM6lTYq8zhT0JIuox23lk%2BuFgr%2BRZqBy5HsoFV1v03P5bwCvaCJgoJch7vcxSmK1RuHqqauE3Gj9oFpIPr%2FN0%2Br25v%2BXbctxTwTThyzpRGcBE4P6tH81yVNfVu4HTi%2FUb4bulE6ZKnLDdnBoElj7mmpKQCW8tMdrrbUb2jIoFPuu9tqGxNgTCX9YfEBjqkAbFCXexnaQ6kF3dVBFB%2B%2FHMqYB4%2FMaHTY1wRXrRtfoakoDeBtU7rMw2KuibiLHV6rczxCvdxESyEEVdDnPCQonxzqGzEQR94Wj1MQQWNg9%2FfZKMABn2NgbDjWZeSDpUegQwsSGElSExVFlYuQuOjVNNNL8ax0xkXMwsURWFARqX91XJGdZ1wURyDq%2FT45J5mvEIAa0lPOajO%2B6Bf7mWfc2UeUsiM&X-Amz-Signature=0044bab6642688a6590dd03daf2f210d7824b3813a0a9dc9f3efd276d8d06512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 후에 Commit Error가 난 지점까지 Undo 해준다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5cc37d79-beda-4fdf-bb59-e20c16a9147c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443ZRQTE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEN6zmZb5Ry39t06K3sZ%2B85YOrxSDesyZeYARlOsnD%2BAIhAMr3cJcG%2F5ienUMnZR5lwxQdrNoAeoLCfC3C9IBnivKcKv8DCCoQABoMNjM3NDIzMTgzODA1IgxRsREkGvUygb7oWboq3APFnR2WlBldj1ZmilB6MtvWsVxVs1Mig1i0oFuyEzVitZqNXjCuyXgFTtSQB9s%2BMH5MnTuSjKpShgRo5715INxoXalsBoFnFoFSxfqkDKys3Yn1oVVL7oahybletcPl6HlWXGATjbZypWRNbog5v2ZQqUZS9ob3zPEq7FXEaN0Wko%2BrbTn7gAXHpZeA2QTyg40oPSHt1acb9uCaCK8DKEpt3lwXTgPs%2B9aCIvMMBbq3UUt7LajUhkvEfoDIG%2BQTRfy3zRp9NECDOjXz84bC0KUFUjqpkfkd0T9UkozQD0Fb7rW9R74RE9TVtdoTXmrMtWbcmwW%2FFMx9qaMGDfkgHRB4jYIOjkg9TcT0Bz7GzxoPC0Ul549pZiN3fQ6lg2hQJuaRzrCtTM0U6BlnMsPfa%2FCCzDVPmqca2vbzmlKCWGmFam8cAyjiAekW80u2uyMghQ%2FvWL88%2FL%2BM6lTYq8zhT0JIuox23lk%2BuFgr%2BRZqBy5HsoFV1v03P5bwCvaCJgoJch7vcxSmK1RuHqqauE3Gj9oFpIPr%2FN0%2Br25v%2BXbctxTwTThyzpRGcBE4P6tH81yVNfVu4HTi%2FUb4bulE6ZKnLDdnBoElj7mmpKQCW8tMdrrbUb2jIoFPuu9tqGxNgTCX9YfEBjqkAbFCXexnaQ6kF3dVBFB%2B%2FHMqYB4%2FMaHTY1wRXrRtfoakoDeBtU7rMw2KuibiLHV6rczxCvdxESyEEVdDnPCQonxzqGzEQR94Wj1MQQWNg9%2FfZKMABn2NgbDjWZeSDpUegQwsSGElSExVFlYuQuOjVNNNL8ax0xkXMwsURWFARqX91XJGdZ1wURyDq%2FT45J5mvEIAa0lPOajO%2B6Bf7mWfc2UeUsiM&X-Amz-Signature=cd4adf7c9118b6961aaad45951700a7188ef9c43e8239b125e630ed17891734a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 그 후에  다시 Commit 및 Push를 해보면

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/25c960fb-ec66-4e64-bb23-642fe55b91e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443ZRQTE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEN6zmZb5Ry39t06K3sZ%2B85YOrxSDesyZeYARlOsnD%2BAIhAMr3cJcG%2F5ienUMnZR5lwxQdrNoAeoLCfC3C9IBnivKcKv8DCCoQABoMNjM3NDIzMTgzODA1IgxRsREkGvUygb7oWboq3APFnR2WlBldj1ZmilB6MtvWsVxVs1Mig1i0oFuyEzVitZqNXjCuyXgFTtSQB9s%2BMH5MnTuSjKpShgRo5715INxoXalsBoFnFoFSxfqkDKys3Yn1oVVL7oahybletcPl6HlWXGATjbZypWRNbog5v2ZQqUZS9ob3zPEq7FXEaN0Wko%2BrbTn7gAXHpZeA2QTyg40oPSHt1acb9uCaCK8DKEpt3lwXTgPs%2B9aCIvMMBbq3UUt7LajUhkvEfoDIG%2BQTRfy3zRp9NECDOjXz84bC0KUFUjqpkfkd0T9UkozQD0Fb7rW9R74RE9TVtdoTXmrMtWbcmwW%2FFMx9qaMGDfkgHRB4jYIOjkg9TcT0Bz7GzxoPC0Ul549pZiN3fQ6lg2hQJuaRzrCtTM0U6BlnMsPfa%2FCCzDVPmqca2vbzmlKCWGmFam8cAyjiAekW80u2uyMghQ%2FvWL88%2FL%2BM6lTYq8zhT0JIuox23lk%2BuFgr%2BRZqBy5HsoFV1v03P5bwCvaCJgoJch7vcxSmK1RuHqqauE3Gj9oFpIPr%2FN0%2Br25v%2BXbctxTwTThyzpRGcBE4P6tH81yVNfVu4HTi%2FUb4bulE6ZKnLDdnBoElj7mmpKQCW8tMdrrbUb2jIoFPuu9tqGxNgTCX9YfEBjqkAbFCXexnaQ6kF3dVBFB%2B%2FHMqYB4%2FMaHTY1wRXrRtfoakoDeBtU7rMw2KuibiLHV6rczxCvdxESyEEVdDnPCQonxzqGzEQR94Wj1MQQWNg9%2FfZKMABn2NgbDjWZeSDpUegQwsSGElSExVFlYuQuOjVNNNL8ax0xkXMwsURWFARqX91XJGdZ1wURyDq%2FT45J5mvEIAa0lPOajO%2B6Bf7mWfc2UeUsiM&X-Amz-Signature=c0af1bde160c4b512218071a04e8b408ec81828033faf9e9088bbfd589c3241c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)




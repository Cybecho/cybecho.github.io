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


## CMD에서 다음과 같이 명령어를 입력하고 다음과 같은 멘트가 나온다면 성공…

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1e716274-e666-45b0-947c-08ba440f7bf2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR6RGF3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHUQqA8NG5bYVEy7kdlxO%2BQmMDmWfwTXoZmLV1117%2FuWAiAX7S5W9M8935YxexhuehCrVDxL3VR%2FmenGeJ9xkRaxXCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM0SggDlKvHIHK25j6KtwDRk8YedIdp8BSpUUYJ2hI1SmDZ%2FF47gYob098xvilxy03aSG6myMP1hmTPeWxyHbwYdEZQVvuXmFLmF80X32cN752SQqVB2g64nV%2BZCVbla4%2FHosRb%2FgGxSGjFfXInRpSDlwpBuoEAGY0Ku2M6ZfO50nE2MN%2FdP2v8RQdu1UbBRffGzjZHith27%2FRUGif1qGDGPbW7cGJv27SH2TAfeRXq0Pao%2FGusRN%2B2Vg4y8BJTIwYvl0lRfP0YM%2BqPtsg%2BkjkMjfWFjPqITVXQjAkET4Gv9hAIuwHdwrf9rn5ZYtZXK2iI%2BnnHOu6ODYb0Vaz%2Br6%2FGEPCy44pVAD%2Bl9ueToRtwSnl2jRwnChRGyyMwHhvuhulRcFYy9YxcsdEW9bIodtkorLbJU4Ubj9LjFzSBD7RGNR5gu6f2UYJj98BtG8aXbLyHrLVU3vxA6RQqGMzdDGPwsYQJxmNq4FOnp5fcDU7m%2BbfMHEL5gcQDlJkueba0QaKxMxj%2BWQ4ojYsFhWc5g2VgVq%2Frn3isfw4BLbdr8O9BsMgH5jNwgBX0240Ck%2B54uGBA4t4HHH4CKe15cjNgVanXQv5WDpfVIfbuwOyqdETcArqk5fznqlLYkD73zzfr9WiwyyOwP0r5qc5aPww2c6HxAY6pgHHYHpHQi98bX%2BMrZ3m06aVWN64%2BCgDD6XRM4XsZ9N5qIclRFDr1tJnasHqwYGQ5bFLeKKk4aJ0g4t40%2Fu0W7jtt0N0QFvp5bYH%2FEZS0G37UX9xIe1zORot%2BmgV8StT8KEpEYkFtD36rN2hLaJTnbyp5Fx%2FgdiIltrHC97LgR0cEj4iZLXjR8waOIeTtMQjtT20aKCNsX%2FKcct6aEl1XA%2Fg21CUxgjM&X-Amz-Signature=69d653d246a3ba147626c5e1690b0ef90d4e38d6f8ed3cfab7d5a100348e3bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 후에 Commit Error가 난 지점까지 Undo 해준다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5cc37d79-beda-4fdf-bb59-e20c16a9147c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR6RGF3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHUQqA8NG5bYVEy7kdlxO%2BQmMDmWfwTXoZmLV1117%2FuWAiAX7S5W9M8935YxexhuehCrVDxL3VR%2FmenGeJ9xkRaxXCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM0SggDlKvHIHK25j6KtwDRk8YedIdp8BSpUUYJ2hI1SmDZ%2FF47gYob098xvilxy03aSG6myMP1hmTPeWxyHbwYdEZQVvuXmFLmF80X32cN752SQqVB2g64nV%2BZCVbla4%2FHosRb%2FgGxSGjFfXInRpSDlwpBuoEAGY0Ku2M6ZfO50nE2MN%2FdP2v8RQdu1UbBRffGzjZHith27%2FRUGif1qGDGPbW7cGJv27SH2TAfeRXq0Pao%2FGusRN%2B2Vg4y8BJTIwYvl0lRfP0YM%2BqPtsg%2BkjkMjfWFjPqITVXQjAkET4Gv9hAIuwHdwrf9rn5ZYtZXK2iI%2BnnHOu6ODYb0Vaz%2Br6%2FGEPCy44pVAD%2Bl9ueToRtwSnl2jRwnChRGyyMwHhvuhulRcFYy9YxcsdEW9bIodtkorLbJU4Ubj9LjFzSBD7RGNR5gu6f2UYJj98BtG8aXbLyHrLVU3vxA6RQqGMzdDGPwsYQJxmNq4FOnp5fcDU7m%2BbfMHEL5gcQDlJkueba0QaKxMxj%2BWQ4ojYsFhWc5g2VgVq%2Frn3isfw4BLbdr8O9BsMgH5jNwgBX0240Ck%2B54uGBA4t4HHH4CKe15cjNgVanXQv5WDpfVIfbuwOyqdETcArqk5fznqlLYkD73zzfr9WiwyyOwP0r5qc5aPww2c6HxAY6pgHHYHpHQi98bX%2BMrZ3m06aVWN64%2BCgDD6XRM4XsZ9N5qIclRFDr1tJnasHqwYGQ5bFLeKKk4aJ0g4t40%2Fu0W7jtt0N0QFvp5bYH%2FEZS0G37UX9xIe1zORot%2BmgV8StT8KEpEYkFtD36rN2hLaJTnbyp5Fx%2FgdiIltrHC97LgR0cEj4iZLXjR8waOIeTtMQjtT20aKCNsX%2FKcct6aEl1XA%2Fg21CUxgjM&X-Amz-Signature=3aeb21ed043ba16a8632fd310b4befe19919b35ae56119b2af22f95b4572f824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 그 후에  다시 Commit 및 Push를 해보면

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/25c960fb-ec66-4e64-bb23-642fe55b91e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR6RGF3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHUQqA8NG5bYVEy7kdlxO%2BQmMDmWfwTXoZmLV1117%2FuWAiAX7S5W9M8935YxexhuehCrVDxL3VR%2FmenGeJ9xkRaxXCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM0SggDlKvHIHK25j6KtwDRk8YedIdp8BSpUUYJ2hI1SmDZ%2FF47gYob098xvilxy03aSG6myMP1hmTPeWxyHbwYdEZQVvuXmFLmF80X32cN752SQqVB2g64nV%2BZCVbla4%2FHosRb%2FgGxSGjFfXInRpSDlwpBuoEAGY0Ku2M6ZfO50nE2MN%2FdP2v8RQdu1UbBRffGzjZHith27%2FRUGif1qGDGPbW7cGJv27SH2TAfeRXq0Pao%2FGusRN%2B2Vg4y8BJTIwYvl0lRfP0YM%2BqPtsg%2BkjkMjfWFjPqITVXQjAkET4Gv9hAIuwHdwrf9rn5ZYtZXK2iI%2BnnHOu6ODYb0Vaz%2Br6%2FGEPCy44pVAD%2Bl9ueToRtwSnl2jRwnChRGyyMwHhvuhulRcFYy9YxcsdEW9bIodtkorLbJU4Ubj9LjFzSBD7RGNR5gu6f2UYJj98BtG8aXbLyHrLVU3vxA6RQqGMzdDGPwsYQJxmNq4FOnp5fcDU7m%2BbfMHEL5gcQDlJkueba0QaKxMxj%2BWQ4ojYsFhWc5g2VgVq%2Frn3isfw4BLbdr8O9BsMgH5jNwgBX0240Ck%2B54uGBA4t4HHH4CKe15cjNgVanXQv5WDpfVIfbuwOyqdETcArqk5fznqlLYkD73zzfr9WiwyyOwP0r5qc5aPww2c6HxAY6pgHHYHpHQi98bX%2BMrZ3m06aVWN64%2BCgDD6XRM4XsZ9N5qIclRFDr1tJnasHqwYGQ5bFLeKKk4aJ0g4t40%2Fu0W7jtt0N0QFvp5bYH%2FEZS0G37UX9xIe1zORot%2BmgV8StT8KEpEYkFtD36rN2hLaJTnbyp5Fx%2FgdiIltrHC97LgR0cEj4iZLXjR8waOIeTtMQjtT20aKCNsX%2FKcct6aEl1XA%2Fg21CUxgjM&X-Amz-Signature=ff31c7bf25e0590d39cb027fb79bca47362369ea11f9ddb89993aaf45d66ce3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)




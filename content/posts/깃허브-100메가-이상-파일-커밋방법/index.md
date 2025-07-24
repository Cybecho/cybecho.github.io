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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1e716274-e666-45b0-947c-08ba440f7bf2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2FQZAL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXMrR8lSh65xnrl1uePs5p5sHQv1GUw0LofCArydr8bgIhAIPOIt%2BTvJdJEs4qS3SYFpJWekofBSSUR4fe2vofR7eOKv8DCCkQABoMNjM3NDIzMTgzODA1IgzO3yW9GEIpoTOeYfQq3ANp3iYh19uYf1uNc2Yz7xWcbfQT2LkhFjWmSFq7%2B9iEdOstkfyH%2Fnv%2FMnqQC6BfApxNcc%2BWAsB1enmOztT30UDK2%2FrSJTS6xnmzS%2F48JrnR4nJvlV%2Bw3zjpDwnqhlyQ2g4ksKkrp%2FQ0EfcuVUiLcluFSL%2FcoQ39%2FWa94c5ny%2BWW1wew%2BMRmt5rxM7dtQ9jS0YMVo9Djj0Tw8krRnIY1WuI0G0iB9tcz6hgDQMqMp8QJffR%2Bb3KhfNYOytzolt%2FRmR1S3GcnLXjXgEj9i750BDM3UkjOJrbKi3JXEPIM0F%2FzNBkcJwKdy9xVWuSsCmWJnoKLKtAWMyEQGF%2FFGts6ST5nGE9TVxVqzu16VjNCoSl2epgR98mEl%2BainEnEqZZU02InctFezAPJ4JaULJG7xaQrZjplI531%2BVpxoeWlBuZFfz6aTNml18%2BB%2Bjgw5pVCMSGNozwhbOtsTQ8dbc7J9ToKNjr9%2B6utyLgiHx8M0NiOuJ1ZLnUJGtdjvyqS1Dfhv8Ah6f%2FRNVtkoyMhp4da7301Mg2Eezbn7%2FMwUfOC8Wt4ipnGixiwwL%2FIm1c98M%2FGRCvkS8TrAywmXdd2EjTX%2BvYh%2BcmO1q7MghZRC7Iq1EfYMqok3HCvIm%2Bi0NcXHTCF0IfEBjqkAdbkOxJqLzRogqnHfAvtalYeKC7NDBmBcwrhP4KJ3ZcAW%2BYSfuojP%2BaRQNIN6gs%2Bs11RK%2BiW38XbMqBR%2BszoJWE3%2By4Wg3RZeKU5NJTvNlBzPweNhy%2Bjfa%2BITl3pUynLAFF6ZlpTmfxsoVKhzgXUIj%2BM%2FWY%2B%2Ffxy%2BJOFjw%2BpmfCod4j%2F%2BgA01ZsNHTvD2kxUE77%2B%2FibZinWBi8NKYYqCDp8kczj8&X-Amz-Signature=70f28a7d0dd08e3d590a7183d651f312684be4fb9ac0212a807203a7bb9b26df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 후에 Commit Error가 난 지점까지 Undo 해준다

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5cc37d79-beda-4fdf-bb59-e20c16a9147c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2FQZAL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXMrR8lSh65xnrl1uePs5p5sHQv1GUw0LofCArydr8bgIhAIPOIt%2BTvJdJEs4qS3SYFpJWekofBSSUR4fe2vofR7eOKv8DCCkQABoMNjM3NDIzMTgzODA1IgzO3yW9GEIpoTOeYfQq3ANp3iYh19uYf1uNc2Yz7xWcbfQT2LkhFjWmSFq7%2B9iEdOstkfyH%2Fnv%2FMnqQC6BfApxNcc%2BWAsB1enmOztT30UDK2%2FrSJTS6xnmzS%2F48JrnR4nJvlV%2Bw3zjpDwnqhlyQ2g4ksKkrp%2FQ0EfcuVUiLcluFSL%2FcoQ39%2FWa94c5ny%2BWW1wew%2BMRmt5rxM7dtQ9jS0YMVo9Djj0Tw8krRnIY1WuI0G0iB9tcz6hgDQMqMp8QJffR%2Bb3KhfNYOytzolt%2FRmR1S3GcnLXjXgEj9i750BDM3UkjOJrbKi3JXEPIM0F%2FzNBkcJwKdy9xVWuSsCmWJnoKLKtAWMyEQGF%2FFGts6ST5nGE9TVxVqzu16VjNCoSl2epgR98mEl%2BainEnEqZZU02InctFezAPJ4JaULJG7xaQrZjplI531%2BVpxoeWlBuZFfz6aTNml18%2BB%2Bjgw5pVCMSGNozwhbOtsTQ8dbc7J9ToKNjr9%2B6utyLgiHx8M0NiOuJ1ZLnUJGtdjvyqS1Dfhv8Ah6f%2FRNVtkoyMhp4da7301Mg2Eezbn7%2FMwUfOC8Wt4ipnGixiwwL%2FIm1c98M%2FGRCvkS8TrAywmXdd2EjTX%2BvYh%2BcmO1q7MghZRC7Iq1EfYMqok3HCvIm%2Bi0NcXHTCF0IfEBjqkAdbkOxJqLzRogqnHfAvtalYeKC7NDBmBcwrhP4KJ3ZcAW%2BYSfuojP%2BaRQNIN6gs%2Bs11RK%2BiW38XbMqBR%2BszoJWE3%2By4Wg3RZeKU5NJTvNlBzPweNhy%2Bjfa%2BITl3pUynLAFF6ZlpTmfxsoVKhzgXUIj%2BM%2FWY%2B%2Ffxy%2BJOFjw%2BpmfCod4j%2F%2BgA01ZsNHTvD2kxUE77%2B%2FibZinWBi8NKYYqCDp8kczj8&X-Amz-Signature=7968ae7e770234fea899370725e692a673d23290983940420cd558f1a3ed206a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 그 후에  다시 Commit 및 Push를 해보면

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/25c960fb-ec66-4e64-bb23-642fe55b91e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2FQZAL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXMrR8lSh65xnrl1uePs5p5sHQv1GUw0LofCArydr8bgIhAIPOIt%2BTvJdJEs4qS3SYFpJWekofBSSUR4fe2vofR7eOKv8DCCkQABoMNjM3NDIzMTgzODA1IgzO3yW9GEIpoTOeYfQq3ANp3iYh19uYf1uNc2Yz7xWcbfQT2LkhFjWmSFq7%2B9iEdOstkfyH%2Fnv%2FMnqQC6BfApxNcc%2BWAsB1enmOztT30UDK2%2FrSJTS6xnmzS%2F48JrnR4nJvlV%2Bw3zjpDwnqhlyQ2g4ksKkrp%2FQ0EfcuVUiLcluFSL%2FcoQ39%2FWa94c5ny%2BWW1wew%2BMRmt5rxM7dtQ9jS0YMVo9Djj0Tw8krRnIY1WuI0G0iB9tcz6hgDQMqMp8QJffR%2Bb3KhfNYOytzolt%2FRmR1S3GcnLXjXgEj9i750BDM3UkjOJrbKi3JXEPIM0F%2FzNBkcJwKdy9xVWuSsCmWJnoKLKtAWMyEQGF%2FFGts6ST5nGE9TVxVqzu16VjNCoSl2epgR98mEl%2BainEnEqZZU02InctFezAPJ4JaULJG7xaQrZjplI531%2BVpxoeWlBuZFfz6aTNml18%2BB%2Bjgw5pVCMSGNozwhbOtsTQ8dbc7J9ToKNjr9%2B6utyLgiHx8M0NiOuJ1ZLnUJGtdjvyqS1Dfhv8Ah6f%2FRNVtkoyMhp4da7301Mg2Eezbn7%2FMwUfOC8Wt4ipnGixiwwL%2FIm1c98M%2FGRCvkS8TrAywmXdd2EjTX%2BvYh%2BcmO1q7MghZRC7Iq1EfYMqok3HCvIm%2Bi0NcXHTCF0IfEBjqkAdbkOxJqLzRogqnHfAvtalYeKC7NDBmBcwrhP4KJ3ZcAW%2BYSfuojP%2BaRQNIN6gs%2Bs11RK%2BiW38XbMqBR%2BszoJWE3%2By4Wg3RZeKU5NJTvNlBzPweNhy%2Bjfa%2BITl3pUynLAFF6ZlpTmfxsoVKhzgXUIj%2BM%2FWY%2B%2Ffxy%2BJOFjw%2BpmfCod4j%2F%2BgA01ZsNHTvD2kxUE77%2B%2FibZinWBi8NKYYqCDp8kczj8&X-Amz-Signature=4a7bc66ba3068b14f16c4d1a93add7f84257979095b5dafc32b5626f618faeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)




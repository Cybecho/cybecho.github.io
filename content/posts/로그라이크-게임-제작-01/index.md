---
title: "로그라이크 게임 제작 01"
date: 2023-03-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "SPUM 무료버전 설치 및 리소스 탐색에 대한 안내. 무료버전은 구버전이며, 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치. Voxel 환경 자산 링크 제공."
notion_id: "4afad8d2-2bef-437e-a754-3dc69c22792b"
notion_url: "https://www.notion.so/01-4afad8d22bef437ea7543dc69c22792b"
---

# 로그라이크 게임 제작 01

> **Summary**
> SPUM 무료버전 설치 및 리소스 탐색에 대한 안내. 무료버전은 구버전이며, 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치. Voxel 환경 자산 링크 제공.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fe12b808-c14f-4f40-a99a-8a1a3bcb608e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUYTFVC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCnHrY1%2FxctAk3r7cEQ6SKgXgyKNud74vb4UzXGbE%2FzMwIhAMrlvX2bOqeclD%2B%2FjUnlUoiVfn1ufn92%2F2hnN27xO9UaKv8DCCkQABoMNjM3NDIzMTgzODA1Igw2qzw0kHi%2FvH%2Bln80q3APrpNmAZd44b9tqo%2Bz4eZ%2F99pLotOxlKLG5Twi3axuyHsQvn5u21lGET24cAs4Lg9sk7rNtrCM9VY7vzoHgmwj5XqWpCVcMtzNZGfNjbwXEcwyb1AJLK0z8XbXKqUkyP9l40%2BoNjGUA0r8AHaYqfjFlKGeCIBYJ2niw7b796mRQ0L7u4NBRQoCcpErnfaIU2WhBTfKSZH7rzjycokQbleFT2G3W%2BbA86HEbRAhAN0E8oJNNcBcbh6JzAk81KaB%2BABvhb28WN6qdRz6fCPJY9x3QyLuQe33vU%2Ba%2FRxRE%2BiGb52%2BNdy5eWVMP0qkEODb3lqx8Jq%2BdeErU%2BWJuMV%2B7qNMf7R4Cv0F6V6%2BSoCjni%2BIDhBgqb%2FUZvRA2KAuZxdDXOcjyWVO2YbO2RHp5ojJq8JD7fpBSV%2FRZAhNNRX0UPp%2F8vGe2QYBleDLdJs5KnSWP9OntYmoVMx4EZH9QtEeq1%2FrWMVQegpEmsQ2OuicUseicvi0nT%2FDvRmUXlFiix%2BR1oqxGq9nFTuXtscF8s%2Fe0G64mdw1PmAF8%2Fu5fAUVGNA8C2RlE4iWYewfnL6fTkoXsxLWqBAaymuh734z2eer%2BB%2F%2FRq1E2ZcggrnxklN%2FxlYF%2FLwD1W6IvUNnsubL%2FkDC5z4fEBjqkAcpyCNOB6G4GYgWM%2B6omzufOeWbgkCd2cT%2FZinsP8FVzyp1FY5rTlB99dY1rLa2C%2BY1CcCQX5sX30v8sFIUgytVDv5Vf4rRZlKCbeVNN0W35LncN%2FSQf1jiCSyhYj7Ze6cVaG%2F3EfyDn%2BE%2F1aeJJ3NIZcIlqNFocbOXtuz%2B02rfMZstVCsUAOMbu3PYPfLvmapsdc16EGbq%2BcH5X9p8P%2B7D97ylN&X-Amz-Signature=ae073392534e93308e8b2e93916d5252cf6fa6a5700dfa403d0078510f088440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=lnvNWuovnRs)

위 영상 따라하기 전에 아래 링크에서 SPUM 설치

🔗 [https://www.soonsoon.co/docs/spum-ko/free-version/](https://www.soonsoon.co/docs/spum-ko/free-version/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=TvxdkMMuC1A&t=140s)

무료버전은 구버전이다 해당 영상을 참고하자

> 🔥 **저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units 에 존재함**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0ebc82e4-4e35-448a-bc17-9fbc935ca64f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUYTFVC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCnHrY1%2FxctAk3r7cEQ6SKgXgyKNud74vb4UzXGbE%2FzMwIhAMrlvX2bOqeclD%2B%2FjUnlUoiVfn1ufn92%2F2hnN27xO9UaKv8DCCkQABoMNjM3NDIzMTgzODA1Igw2qzw0kHi%2FvH%2Bln80q3APrpNmAZd44b9tqo%2Bz4eZ%2F99pLotOxlKLG5Twi3axuyHsQvn5u21lGET24cAs4Lg9sk7rNtrCM9VY7vzoHgmwj5XqWpCVcMtzNZGfNjbwXEcwyb1AJLK0z8XbXKqUkyP9l40%2BoNjGUA0r8AHaYqfjFlKGeCIBYJ2niw7b796mRQ0L7u4NBRQoCcpErnfaIU2WhBTfKSZH7rzjycokQbleFT2G3W%2BbA86HEbRAhAN0E8oJNNcBcbh6JzAk81KaB%2BABvhb28WN6qdRz6fCPJY9x3QyLuQe33vU%2Ba%2FRxRE%2BiGb52%2BNdy5eWVMP0qkEODb3lqx8Jq%2BdeErU%2BWJuMV%2B7qNMf7R4Cv0F6V6%2BSoCjni%2BIDhBgqb%2FUZvRA2KAuZxdDXOcjyWVO2YbO2RHp5ojJq8JD7fpBSV%2FRZAhNNRX0UPp%2F8vGe2QYBleDLdJs5KnSWP9OntYmoVMx4EZH9QtEeq1%2FrWMVQegpEmsQ2OuicUseicvi0nT%2FDvRmUXlFiix%2BR1oqxGq9nFTuXtscF8s%2Fe0G64mdw1PmAF8%2Fu5fAUVGNA8C2RlE4iWYewfnL6fTkoXsxLWqBAaymuh734z2eer%2BB%2F%2FRq1E2ZcggrnxklN%2FxlYF%2FLwD1W6IvUNnsubL%2FkDC5z4fEBjqkAcpyCNOB6G4GYgWM%2B6omzufOeWbgkCd2cT%2FZinsP8FVzyp1FY5rTlB99dY1rLa2C%2BY1CcCQX5sX30v8sFIUgytVDv5Vf4rRZlKCbeVNN0W35LncN%2FSQf1jiCSyhYj7Ze6cVaG%2F3EfyDn%2BE%2F1aeJJ3NIZcIlqNFocbOXtuz%2B02rfMZstVCsUAOMbu3PYPfLvmapsdc16EGbq%2BcH5X9p8P%2B7D97ylN&X-Amz-Signature=a3d9ac5e8363b6cf8c7d574285795730be3bfa67f24fd318050f6d67b029bc59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 리소스 탐색

🔗 [https://maxparata.itch.io/voxel-desert-town](https://maxparata.itch.io/voxel-desert-town)


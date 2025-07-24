---
title: "Proxmox로 홈서버 구축"
date: 2024-06-13T13:17:00.000Z
draft: false
tags: ["Other", "ProxMox"]
series: ["Let's Homelab!"]
description: "Proxmox를 이용한 홈서버 구축에 대한 가이드를 제공하며, 도메인, 방화벽, 프록시 설정 및 다양한 튜토리얼 링크를 포함하고 있습니다. 또한, Proxmox에서의 Docker 활용 아이디어와 Synology 설치 방법에 대한 자료도 제시됩니다."
notion_id: "029d1e14-3d55-4abc-8b9a-6e5da8468f09"
notion_url: "https://www.notion.so/Proxmox-029d1e143d554abc8b9a6e5da8468f09"
---

# Proxmox로 홈서버 구축

> **Summary**
> Proxmox를 이용한 홈서버 구축에 대한 가이드를 제공하며, 도메인, 방화벽, 프록시 설정 및 다양한 튜토리얼 링크를 포함하고 있습니다. 또한, Proxmox에서의 Docker 활용 아이디어와 Synology 설치 방법에 대한 자료도 제시됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d007b62c-4094-4f89-ac4b-3ea074e9fb77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DU32VF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDGlyUnRjGLoGfJkFC84IYyioj2dqoi1N%2FcLYNFp8CdmgIhAKosgtxBzC0EytVW7uDbDgEmrxzLoUvS0i0b%2BODtR6opKv8DCCwQABoMNjM3NDIzMTgzODA1Igx4ofU9UhvUaoTlC5gq3APh11rlEE%2FVVh6z4Dpv6ZJTnrA842nF9O%2FCrR6VV9QNtaPHHPm%2FVeWpy6jlMjDZKGbjRfLSizWIlzWf4OBzwhIBQ97%2B5VhZoQkF2HyYMAA3QcbIwUYuDhny0v1idacydLIMBekZLk9fvEi0HK%2FyaUOQNTkhPr%2FZf7ssbMkzXmI52ogWdXEAiZ6tLiCTv0qtPC4dMbvNuFHNbwUdTwCkw7prDd%2BhJoiPAkhtUuWDHnvM8QeQL9Hx%2FULA%2FwYvwV4skjXFMSjiWx%2F3DNPZh0Ck4DWWO5qp6DenQLdRR3LcCBU63kgWPpI5%2BLJN2QZwEbGMPumJtJRLJh91%2FnCQ9lIlkVjRXQq6MuHij4NKyLAH0R9YPyoF8vVAEmb6Jjvozxg06oQ76FWy8HJgLFs2pr6V%2F0CKwFuMv9UZamSZ0Jxy8vwbMjoUZTmySQLEG2GunJ%2FK1p7fvAPOyTGxMo%2F2MErYLdxFxklsNTKjX94c55ir%2BVTobzIh%2FjR55hrQ1aGdHhnJ7030hvijojO13kN6%2BUgCUkuZFpIJ6NrkJt80QhCeXZSFq1qipiakasd95tWaJhMu0isKb11Ve7Pl9%2F3vOrBeWIaWKd64JgZyJdhnAPV09w%2BDjl5KA90AA1OQ2YmIzzDjm4jEBjqkAdlaT0cPK%2BbxQJwWPY4S%2BnbQJKhOxzH0%2BoK3jTvjeSaLi3gq%2FoJkYPc1wYoDi1%2FNTLGAloHX5982sV5SVcDtFNLJgrV%2Fq0B8dcVkKotQSGd70TV3ZaENcZGWUKwlSlBrFn2vxYIUq%2BtplopoT5zf7H3JxjmNDz2TzFj2qqXeJZ%2FhMG7F2bjF8yqaCqcFDVgHLQvfSowlVCSXaKotGyCgslgVNo2K&X-Amz-Signature=dbd0b8ea9d4d0618a87616501e6f7713efed552b509f292bffb60da091c65669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 정리문서

> 💡 **[https://svrforum.com/proxmox_guide](https://svrforum.com/proxmox_guide)**

# 도메인 & 방화벽 & 프록시

> 💡 **[https://blog.dalso.org/article/서버포럼-홈서버-메인시스템자랑😭](https://blog.dalso.org/article/%EC%84%9C%EB%B2%84%ED%8F%AC%EB%9F%BC-%ED%99%88%EC%84%9C%EB%B2%84-%EB%A9%94%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9E%90%EB%9E%91%F0%9F%98%AD)**

# 개요

> 💡 **[https://www.youtube.com/watch?v=SlImxtdCFSo](https://www.youtube.com/watch?v=SlImxtdCFSo)**

[https://www.youtube.com/watch?v=yDkc3D3BFhM](https://www.youtube.com/watch?v=yDkc3D3BFhM)

[https://youtu.be/_sfddZHhOj4?si=aRqLo9TfW9ogOjrJ](https://youtu.be/_sfddZHhOj4?si=aRqLo9TfW9ogOjrJ)

[https://www.youtube.com/watch?v=Be-J6OgreLY](https://www.youtube.com/watch?v=Be-J6OgreLY)


# 튜토리얼

> 💡 **기본 튜토리얼 시리즈 **
> ---
>
> [https://svrforum.com/svr/626324](https://svrforum.com/svr/626324)
>
> [https://youtu.be/Ax86ygBvQxE?si=kvTMjnjcm2aOvtfC](https://youtu.be/Ax86ygBvQxE?si=kvTMjnjcm2aOvtfC)
>
> [https://www.youtube.com/watch?v=YAuOhHiFBgs&t=329s](https://www.youtube.com/watch?v=YAuOhHiFBgs&t=329s)
>
> [https://www.youtube.com/watch?v=DGGo1R-DM8Y&t=1s](https://www.youtube.com/watch?v=DGGo1R-DM8Y&t=1s)
>
> [https://www.youtube.com/watch?v=yUf0OnyWNUg&t=289s](https://www.youtube.com/watch?v=yUf0OnyWNUg&t=289s)
>
> [https://youtu.be/GoZaMgEgrHw?si=wqAwaQ95R8Dsgm-u](https://youtu.be/GoZaMgEgrHw?si=wqAwaQ95R8Dsgm-u)
>
>

> 💡 **엔터프라이즈 설정 제거 관련**
> ---
>
> [https://nad4.tistory.com/entry/Proxmox-설치-및-초기-필수-설정](https://nad4.tistory.com/entry/Proxmox-설치-및-초기-필수-설정) ⭐⭐⭐
>
>

> 💡 **포트포워딩 관련**
> ---
>
> [https://velog.io/@minboykim/더-이상-프리티어는-그만.-나만의-사설-클라우드-구축하기](https://velog.io/@minboykim/더-이상-프리티어는-그만.-나만의-사설-클라우드-구축하기) 
>
>

> 💡 **방화벽 관련**
> ---
>
> [https://velog.io/@minboykim/더-이상-프리티어는-그만.-나만의-사설-클라우드-구축하기](https://velog.io/@minboykim/더-이상-프리티어는-그만.-나만의-사설-클라우드-구축하기) 
>
>

> 💡 **백업 & 복원 관련**
> ---
>
> [https://www.youtube.com/watch?v=Xt-A-g1L72A](https://www.youtube.com/watch?v=Xt-A-g1L72A)
>
>

> 💡 **마이그레이션 관련**
> ---
>
>
>

# 홈서버와 도커

[https://blog.koder.page/selfhosting-guideline/](https://blog.koder.page/selfhosting-guideline/)

# 활용 아이디어

## Proxmox에 헤놀로지

[https://www.youtube.com/watch?v=yUf0OnyWNUg](https://www.youtube.com/watch?v=yUf0OnyWNUg)

[https://velog.io/@kisuk623/Proxmox에-Xpenology-설치하기](https://velog.io/@kisuk623/Proxmox에-Xpenology-설치하기)

[https://it-svr.com/proxmoxe-henolroji-seolcihagi-dsm-7-2/](https://it-svr.com/proxmoxe-henolroji-seolcihagi-dsm-7-2/)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8a58e6cf-71f1-4349-b743-cde767d40365/1000000632.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DU32VF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDGlyUnRjGLoGfJkFC84IYyioj2dqoi1N%2FcLYNFp8CdmgIhAKosgtxBzC0EytVW7uDbDgEmrxzLoUvS0i0b%2BODtR6opKv8DCCwQABoMNjM3NDIzMTgzODA1Igx4ofU9UhvUaoTlC5gq3APh11rlEE%2FVVh6z4Dpv6ZJTnrA842nF9O%2FCrR6VV9QNtaPHHPm%2FVeWpy6jlMjDZKGbjRfLSizWIlzWf4OBzwhIBQ97%2B5VhZoQkF2HyYMAA3QcbIwUYuDhny0v1idacydLIMBekZLk9fvEi0HK%2FyaUOQNTkhPr%2FZf7ssbMkzXmI52ogWdXEAiZ6tLiCTv0qtPC4dMbvNuFHNbwUdTwCkw7prDd%2BhJoiPAkhtUuWDHnvM8QeQL9Hx%2FULA%2FwYvwV4skjXFMSjiWx%2F3DNPZh0Ck4DWWO5qp6DenQLdRR3LcCBU63kgWPpI5%2BLJN2QZwEbGMPumJtJRLJh91%2FnCQ9lIlkVjRXQq6MuHij4NKyLAH0R9YPyoF8vVAEmb6Jjvozxg06oQ76FWy8HJgLFs2pr6V%2F0CKwFuMv9UZamSZ0Jxy8vwbMjoUZTmySQLEG2GunJ%2FK1p7fvAPOyTGxMo%2F2MErYLdxFxklsNTKjX94c55ir%2BVTobzIh%2FjR55hrQ1aGdHhnJ7030hvijojO13kN6%2BUgCUkuZFpIJ6NrkJt80QhCeXZSFq1qipiakasd95tWaJhMu0isKb11Ve7Pl9%2F3vOrBeWIaWKd64JgZyJdhnAPV09w%2BDjl5KA90AA1OQ2YmIzzDjm4jEBjqkAdlaT0cPK%2BbxQJwWPY4S%2BnbQJKhOxzH0%2BoK3jTvjeSaLi3gq%2FoJkYPc1wYoDi1%2FNTLGAloHX5982sV5SVcDtFNLJgrV%2Fq0B8dcVkKotQSGd70TV3ZaENcZGWUKwlSlBrFn2vxYIUq%2BtplopoT5zf7H3JxjmNDz2TzFj2qqXeJZ%2FhMG7F2bjF8yqaCqcFDVgHLQvfSowlVCSXaKotGyCgslgVNo2K&X-Amz-Signature=96055b32cd8e44850622537ba7cb6b65ae9b73d70f5906ab510db42261363e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


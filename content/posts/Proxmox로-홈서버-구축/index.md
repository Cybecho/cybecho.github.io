---
title: "Proxmox로 홈서버 구축"
date: 2024-06-13T13:17:00.000Z
draft: false
tags: ["Other", "ProxMox"]
series: ["Let's Homelab!"]
description: "Proxmox를 사용한 홈서버 구축에 대한 가이드로, 도메인, 방화벽, 프록시 설정 및 다양한 튜토리얼 링크를 포함하고 있으며, 홈서버와 도커 활용 아이디어와 엔터프라이즈 설정 제거, 포트 포워딩, 백업 및 복원, 마이그레이션 관련 자료도 제공한다."
notion_id: "029d1e14-3d55-4abc-8b9a-6e5da8468f09"
notion_url: "https://www.notion.so/Proxmox-029d1e143d554abc8b9a6e5da8468f09"
---

# Proxmox로 홈서버 구축

> **Summary**
> Proxmox를 사용한 홈서버 구축에 대한 가이드로, 도메인, 방화벽, 프록시 설정 및 다양한 튜토리얼 링크를 포함하고 있으며, 홈서버와 도커 활용 아이디어와 엔터프라이즈 설정 제거, 포트 포워딩, 백업 및 복원, 마이그레이션 관련 자료도 제공한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d007b62c-4094-4f89-ac4b-3ea074e9fb77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWISB5EM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOkCEIukDGJAE9lqYktqYEeuHXVDqhyBEJ8GmZX3pkFQIhALRJTsc6sFHWnJ7nC3s8jRfXf6ymJpIpYKWCJl8P8FXKKv8DCCoQABoMNjM3NDIzMTgzODA1Igw1Xn0nidrDpWEl2fwq3AP%2FMz9pe077OPj1NqvOHPUeYoqsbj4f%2FQxS6MMd5krewxfBYXzbv8KErWsqFZZre1R3%2BUh0UxcAuniUoSJuiSSak9%2FZUlK%2FYshNJQtOeKLG8cEIcgSDZXhwizbVALr2g5BK5Zqwmcv5F5MkUiNRWDf4WnS6A8HVPFSK6Dy4lujUI%2FUbQomdf1w9eDM0PC%2F9YZkEc5DyhyBlwnXUUYQe8L29fVjYjdTi7R3Tg4WTR01nQ8xEGDy35IYcBFIjq%2BBSPKiGqBh%2FIEqx%2BsyuYJ2EHJYK8uTdebmc2RpvMMa37Tkm52fhCsWYUnATwC8msuxKTE2OKWTntLPyXBYW41RSB3n0WTX3Se4Dhx%2Fkb1r7wI6zvrMN7DL1QB12JtXtaD9k3wCo706qaHdybuAMkN1NIZChXzFsCgbJc8s9I5XIs%2Fyyp94tcHQsMp8kd8gfmB8kV6SXWYTs9yVGC4%2FRGjUwWOsTlVp671k3ahSSoJQ77HaUeuzLKWzIXIc2RLntJLb4hxaMQcolrn%2FJZEtC2YOQUm%2BVCf9wVizg8D%2FlmpAgM3ETpBQlf%2BdGdeXUa8n1Keqhdp8E2nFukwccB7VznmXFtLuO6ljokVSy8yxgwLk5a9oBPJ50bFgePTEkzJKjYzCx9YfEBjqkAXq55PjHDXSkwrRa68ZySVwMkkd7ZsTfHVNDi19l3rgydkLnOi2IEv1gNc8V0phNTB0ymN0jbFl46O8L5HARMkPD5RSyfHENekeGG1twrEWSYW8DnQlv%2BVBG426tQ78uLDbHRhx%2F58HuQsSmbGyrn5GF1fqo3LfMmp1hcTFAjTGTXTtSKM2odHa60NkLFBqJC11BrtgLI8xd5Wf2NIW%2FFdI5cMLY&X-Amz-Signature=1e7c5888d8d41c2aa1c20c85b885cc8265b0d208c9a3b494a366e5958712e7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8a58e6cf-71f1-4349-b743-cde767d40365/1000000632.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWISB5EM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOkCEIukDGJAE9lqYktqYEeuHXVDqhyBEJ8GmZX3pkFQIhALRJTsc6sFHWnJ7nC3s8jRfXf6ymJpIpYKWCJl8P8FXKKv8DCCoQABoMNjM3NDIzMTgzODA1Igw1Xn0nidrDpWEl2fwq3AP%2FMz9pe077OPj1NqvOHPUeYoqsbj4f%2FQxS6MMd5krewxfBYXzbv8KErWsqFZZre1R3%2BUh0UxcAuniUoSJuiSSak9%2FZUlK%2FYshNJQtOeKLG8cEIcgSDZXhwizbVALr2g5BK5Zqwmcv5F5MkUiNRWDf4WnS6A8HVPFSK6Dy4lujUI%2FUbQomdf1w9eDM0PC%2F9YZkEc5DyhyBlwnXUUYQe8L29fVjYjdTi7R3Tg4WTR01nQ8xEGDy35IYcBFIjq%2BBSPKiGqBh%2FIEqx%2BsyuYJ2EHJYK8uTdebmc2RpvMMa37Tkm52fhCsWYUnATwC8msuxKTE2OKWTntLPyXBYW41RSB3n0WTX3Se4Dhx%2Fkb1r7wI6zvrMN7DL1QB12JtXtaD9k3wCo706qaHdybuAMkN1NIZChXzFsCgbJc8s9I5XIs%2Fyyp94tcHQsMp8kd8gfmB8kV6SXWYTs9yVGC4%2FRGjUwWOsTlVp671k3ahSSoJQ77HaUeuzLKWzIXIc2RLntJLb4hxaMQcolrn%2FJZEtC2YOQUm%2BVCf9wVizg8D%2FlmpAgM3ETpBQlf%2BdGdeXUa8n1Keqhdp8E2nFukwccB7VznmXFtLuO6ljokVSy8yxgwLk5a9oBPJ50bFgePTEkzJKjYzCx9YfEBjqkAXq55PjHDXSkwrRa68ZySVwMkkd7ZsTfHVNDi19l3rgydkLnOi2IEv1gNc8V0phNTB0ymN0jbFl46O8L5HARMkPD5RSyfHENekeGG1twrEWSYW8DnQlv%2BVBG426tQ78uLDbHRhx%2F58HuQsSmbGyrn5GF1fqo3LfMmp1hcTFAjTGTXTtSKM2odHa60NkLFBqJC11BrtgLI8xd5Wf2NIW%2FFdI5cMLY&X-Amz-Signature=5c56ac50b803f2d065e00bd77593827c3ec2fb484e580b3d8c4f9aee25a74aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


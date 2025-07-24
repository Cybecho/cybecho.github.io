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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d007b62c-4094-4f89-ac4b-3ea074e9fb77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKYLPT7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCJdDooKBCjqQ7sRcxQ2hyvOaMnvZ8vsRzAKBIRCkyNHAIhAPgxfA001HZNaIRu7TIcm4p6eoufgmXMtqgU7qiKX%2B4AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxZ1JvhCBTrEj0FRyQq3APcmsOMUDN6eeypihsy39xjPiPi8Zu8m3kwLKHoABdVa4hAt9sXjpuQjZwu%2F3WjkV%2BmP%2Fn%2B5pat3KH%2BvRRWJ4tDuvWj1xTG%2Fy7QNC7e%2BdF3wjjfLIy2z2Oh74RMdD1qhYh0FKct%2BCCHBm9nvqelYrRcC8OwJw9F43sy7WrDwvZeEnTeiNOwV%2F7zQdbn%2FtevjMru1K2o5FlnQ2TtcsyJOBL%2Bz6XOIPB%2B90qbfpZt2OXm9kIdpeB9rmQVVLcX6vqOtsxW3ufVYuMHx3G8fiPeA5oaLnGLUmo7whIbeWom%2Bd3WNDOuO8VvCq68kWYZiePz78i%2Bk8gNPgV%2FQuTBnQ%2BZ5QOJgPHomIVRyECubHLE6r%2FWmYUiX07Jepjxi94dO1xuCYvS1C2KyGFRtn%2F1yrae5y20H6ErCJStbHG9fHCBEOKEu6AaoSsybnBHF8pVyyRUXFGVCswQm%2FJYKkWKtZzjR9Bc1jFZ3Z%2FS7EwZlcZ%2FJisSjE5eUmrwbm0viw4o3zpFDk9MFh8bkbOtgCwnC4gt%2BEI%2BnIn1Zndi3Qm%2Bn3V9829UtNXnlJyb4nMF7gWbgRX5mWiB%2FhC2EJOL1%2B60FRBqjnOg%2Fe5mIli8Eb5Q53h7W4oKpcszQstSVCZ8r9HMrDDIzofEBjqkAceMcaqvr6zP9IlG%2BmdGFvz4YESmU9El1QQpRMXxIsiRBPYMp79xaopfR6EKeZkszdSokF66oVIbiDY2T%2FcToubap31Notu2Ugvz97yrTMvTCXtJfuCbfd5gbr1s8baMJlrlvux8860EucqyqxHPZJ8wDTN%2FCFoJOyCidMlRPzYSqhMkHSfplsX%2BszPEs8bDDwYKKnQ9NnpXW4b0M%2FKI5Az11rGH&X-Amz-Signature=28b822fec1a8d00db3d6fcd8a71edcb765d8113c42eec13d28f3b00f0c898f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

> 💡 **엔터프라이즈 설정 제거 관련**

> 💡 **포트포워딩 관련**

> 💡 **방화벽 관련**

> 💡 **백업 & 복원 관련**

> 💡 **마이그레이션 관련**

# 홈서버와 도커

[https://blog.koder.page/selfhosting-guideline/](https://blog.koder.page/selfhosting-guideline/)

# 활용 아이디어

## Proxmox에 헤놀로지

[https://www.youtube.com/watch?v=yUf0OnyWNUg](https://www.youtube.com/watch?v=yUf0OnyWNUg)

[https://velog.io/@kisuk623/Proxmox에-Xpenology-설치하기](https://velog.io/@kisuk623/Proxmox에-Xpenology-설치하기)

[https://it-svr.com/proxmoxe-henolroji-seolcihagi-dsm-7-2/](https://it-svr.com/proxmoxe-henolroji-seolcihagi-dsm-7-2/)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8a58e6cf-71f1-4349-b743-cde767d40365/1000000632.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKYLPT7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCJdDooKBCjqQ7sRcxQ2hyvOaMnvZ8vsRzAKBIRCkyNHAIhAPgxfA001HZNaIRu7TIcm4p6eoufgmXMtqgU7qiKX%2B4AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxZ1JvhCBTrEj0FRyQq3APcmsOMUDN6eeypihsy39xjPiPi8Zu8m3kwLKHoABdVa4hAt9sXjpuQjZwu%2F3WjkV%2BmP%2Fn%2B5pat3KH%2BvRRWJ4tDuvWj1xTG%2Fy7QNC7e%2BdF3wjjfLIy2z2Oh74RMdD1qhYh0FKct%2BCCHBm9nvqelYrRcC8OwJw9F43sy7WrDwvZeEnTeiNOwV%2F7zQdbn%2FtevjMru1K2o5FlnQ2TtcsyJOBL%2Bz6XOIPB%2B90qbfpZt2OXm9kIdpeB9rmQVVLcX6vqOtsxW3ufVYuMHx3G8fiPeA5oaLnGLUmo7whIbeWom%2Bd3WNDOuO8VvCq68kWYZiePz78i%2Bk8gNPgV%2FQuTBnQ%2BZ5QOJgPHomIVRyECubHLE6r%2FWmYUiX07Jepjxi94dO1xuCYvS1C2KyGFRtn%2F1yrae5y20H6ErCJStbHG9fHCBEOKEu6AaoSsybnBHF8pVyyRUXFGVCswQm%2FJYKkWKtZzjR9Bc1jFZ3Z%2FS7EwZlcZ%2FJisSjE5eUmrwbm0viw4o3zpFDk9MFh8bkbOtgCwnC4gt%2BEI%2BnIn1Zndi3Qm%2Bn3V9829UtNXnlJyb4nMF7gWbgRX5mWiB%2FhC2EJOL1%2B60FRBqjnOg%2Fe5mIli8Eb5Q53h7W4oKpcszQstSVCZ8r9HMrDDIzofEBjqkAceMcaqvr6zP9IlG%2BmdGFvz4YESmU9El1QQpRMXxIsiRBPYMp79xaopfR6EKeZkszdSokF66oVIbiDY2T%2FcToubap31Notu2Ugvz97yrTMvTCXtJfuCbfd5gbr1s8baMJlrlvux8860EucqyqxHPZJ8wDTN%2FCFoJOyCidMlRPzYSqhMkHSfplsX%2BszPEs8bDDwYKKnQ9NnpXW4b0M%2FKI5Az11rGH&X-Amz-Signature=397a5df55e89e827e588e6e2849fbabb7b7121231da54a6a8f9fbd6cc645d800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


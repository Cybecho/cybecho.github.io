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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d007b62c-4094-4f89-ac4b-3ea074e9fb77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=b1f6f1be06a44dabc15b14fa8b2a42dbcf3bff9c64a5645f88fd463d38ce96a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8a58e6cf-71f1-4349-b743-cde767d40365/1000000632.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KDFJXQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHakjmj%2F8GzeGp1zxTF8UfoZwo8%2Fbpbjtlan0jOXWAzRAiEAu%2Fhm2oboQ9gxz6WPC1bIYGZddyv2CPjioA7mfef8%2BHoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMuMBz4n1nX73v3UZSrcA%2Fq4VgXy8f8PLdauCeUEe6cPLtFNubu5zuQ9EC74q60nOOUKzdF0v1Y4Dj6gdLfebmWu9y38VOuWIUoY3Ghj1oQ3Jjs4KoTjaU3Ivn88Z6ssd9%2BNbuyTuihc1ifnxjDAQ6zoZbmmzD0SY78wX0Pk%2BXZGgkt0KfkbGbJgm8tYxVxKyEhNRcKpSg9tyeR2DAZ%2BXJKTIuF4XZsDnIsx25J8sWNV2LJqeud%2FkyEvdQ29ru8Vk15Pry51btCzJY4UGE%2FpF5n8Xgw9bn4zcPJP1qoubXWGBITLj9pDjeduoK%2Bqo3HdNBkpoMI6mJRsaAZ29ivglbYVcyChI7wsVoA9NfVUKZxqSxWIBiJ6wAAKP6RHRVvSku%2Bsz3HcJ3CqWi7sfdD2vrvGQS5%2BAS%2FwScdrKwGCwnhf%2FGT6oGX5WQeioniElrku4uMS1cEMUPGI8KY0vmzMPnl4TtIp9mOpcuiWR%2BCuUyjrPshP6dkRJOxGvJnxUeTeDNdAY1EkW35b5pUMVnGQLYdDO%2F3sNjpcA0TdYTQrLcxwouU2%2Fnvbj2tq7wBa5QRqbfPi%2FMrwqMba9Y92uTnrpk0gJ2RZc7wLP2MkUuSNLKTlcfMq77Q0vcnu5XZ9NX4y6aHsWdbjfjl5dN1xMJrQh8QGOqUBo1yOQxNTrZZQRHgc6m40ZiH8S9CT82DLvNcq%2FCl04rXhcbkjNDjO4835Em189rK5AaBdxqzHJaYq4TfCXwtT%2Bg9e8n9dGfzUZrcSK7GyHHV4xT1d7kbarZS14Os6IOTiPLmbDhoyMz20KWNTr0uCd0V6lRWDg3if9a5ep1ATfsR3DgvBLxWnbJTkLSFFHDVNdIatPd8RXnD%2FDypae%2B4f7l3Sao%2FS&X-Amz-Signature=828054ceee3499a2e5b3a00c12e53c5ba505914b0261ae474263f17ac42bc828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
title: "자작 NAS를 구축해봅시다 (하드웨어편)"
date: 2024-06-12T14:24:00.000Z
draft: false
tags: ["ubuntu", "RaspberryPI"]
series: ["Let's Homelab!"]
description: "자작 NAS 구축을 위한 하드웨어 추천, 운영 체제 선택, 저전력 CPU와 RAID 카드의 중요성, 그리고 HDD 확장 및 Docker 사용에 대한 정보가 포함되어 있습니다. 다양한 하드웨어 호환성 체크와 보안 관련 조언도 제공됩니다."
notion_id: "f270ca5c-aee8-4ea1-a6bc-20f5303e5c96"
notion_url: "https://www.notion.so/NAS-f270ca5caee84ea1a6bc20f5303e5c96"
---

# 자작 NAS를 구축해봅시다 (하드웨어편)

> **Summary**
> 자작 NAS 구축을 위한 하드웨어 추천, 운영 체제 선택, 저전력 CPU와 RAID 카드의 중요성, 그리고 HDD 확장 및 Docker 사용에 대한 정보가 포함되어 있습니다. 다양한 하드웨어 호환성 체크와 보안 관련 조언도 제공됩니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/51a4e462-7b17-4a34-a45a-b467ee19dbda/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=20d1cab88e466647f3138284407493d5b22252fbdfc38c0c2f08ba2474c67210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# NAS로 할 수 있는것들

[도커로 개발환경 구축하기](https://www.notion.so/36137e082f6a4281b300e4020ed659f4) 

[https://youtu.be/Q5POuMHxW-0?si=Y4OWnkeI8bLL8Dww](https://youtu.be/Q5POuMHxW-0?si=Y4OWnkeI8bLL8Dww)

[http://www.studydev.com/my-story/it/hp-microserver-gen8-20개월-nas-사용-후기/](http://www.studydev.com/my-story/it/hp-microserver-gen8-20개월-nas-사용-후기/)

[https://anflddy.tistory.com/10](https://anflddy.tistory.com/10)

# 그냥 남는컴 NAS로..

[https://youtu.be/l_0uronfd9o?si=hkDNx1nC4ofvNR_R](https://youtu.be/l_0uronfd9o?si=hkDNx1nC4ofvNR_R)

[https://youtu.be/AH1S8KdpAsk?si=_OlNwOqUNAmN0aGL](https://youtu.be/AH1S8KdpAsk?si=_OlNwOqUNAmN0aGL)

[https://youtu.be/FU5n6JBZbd0?si=g9rJaNNa982r3Bfh](https://youtu.be/FU5n6JBZbd0?si=g9rJaNNa982r3Bfh)

[https://youtu.be/kWg4Xn6Qwf4?si=XAhAhjW0-QYf5FQn](https://youtu.be/kWg4Xn6Qwf4?si=XAhAhjW0-QYf5FQn)

# 그냥 남는컴 NAS로..

[https://ryostyle.tistory.com/411](https://ryostyle.tistory.com/411)

[https://ryostyle.tistory.com/463](https://ryostyle.tistory.com/463)

[https://ryostyle.tistory.com/466](https://ryostyle.tistory.com/466)

# 하드웨어 추천…

[https://svrforum.com/hardware/573786](https://svrforum.com/hardware/573786)

[https://blog.naver.com/dummy_98/222967207789](https://blog.naver.com/dummy_98/222967207789)

# 여기서 하드웨어 호환성 체크해보세요

[https://pcpartpicker.com/list/](https://pcpartpicker.com/list/)

# 보안 관련

- 헤놀 2년차입니다. ssh 닫고 해외 접속만 차단해도 일반 사용자들은 왠만한건 거의 다 막아요. 아무 문제없이 잘 사용중입니다.
# 마이크로 서버도 쿨한데?


---


# 참고 자작 스펙

# 신경써야할것들

# OS

- 헤놀로지
- OpenMediaVault 
- TurueNAS 
- proxmox 에 헤놀로지 올리기
# 케이스

> 💡 **케이스 검색 엔진**

> 💡 **코인 채굴용 (이정도까진 필요 없을듯)**

> 💡 **일반 케이스**

> 💡 **NAS전용 ITX 케이스**

# 메인보드

# CPU

> 💡 **메인보드에 맞는 CPU는 해당 차트 참고**

### INTEL Pentium 시리즈

# CPU Cooler 

> [공랭 , 높이 70이하 , 120mm](https://prod.danawa.com/list/?cate=112798)

[https://quasarzone.com/bbs/qf_cool/views/296054](https://quasarzone.com/bbs/qf_cool/views/296054) NAS용 쿨러 추천

> 가성비 공랭쿨러 최대 높이 150mm

- [https://prod.danawa.com/info/?pcode=17221538](https://prod.danawa.com/info/?pcode=17221538) **(이거로 가자) 150mm**
- [https://prod.danawa.com/info/?pcode=16209023&cate=11336857](https://prod.danawa.com/info/?pcode=16209023&cate=11336857) 148 mm
# Power

# HDD

```latex
어느정도 데이터를 축적 하시느냐가 중요 합니다.

영상 계열이나 게임 데이터 보존 같이 용량이 큰걸 보존하시고

그에 따른 다운로드 및 업로드 속도도 필요하신 경우라면 용량 크고 안정적인 CMR 작동 방식의

제품으로 레이드 하시는걸 추천드립니다.
```

```latex
WD외장 하드를 직구한 다음. 적출해서 끼우시면 17만원에 8TB로 가능 합니다.
```

# HDD 확장 브라켓

- [좋은듯1](https://ko.aliexpress.com/item/1005006907353405.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.6.4ebbtoChtoChlx&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=b8130075-3b3f-4f85-85fd-3c2a282fc20c&_t=gps-id%3ApcDetailTopMoreOtherSeller%2Cscm-url%3A1007.40050.354490.0%2Cpvid%3Ab8130075-3b3f-4f85-85fd-3c2a282fc20c%2Ctpp_buckets%3A668%232846%238116%232002&isseo=y&pdp_npi=4%40dis!KRW!29347!10574!!!150.43!54.20!%4021410cde17183705304297445ec948!12000038687660619!rec!KR!4285360891!&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A) 146mm (L) x 105mm (W) x ???mm (H) 
- [좋은듯3](https://ko.aliexpress.com/item/1005006241366047.html?spm=a2g0o.detail.pcDetailBottomMoreOtherSeller.35.8987FOMKFOMKbQ&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=7e7160f1-5506-47b6-b6c3-fdaa0b08def2&_t=gps-id%3ApcDetailBottomMoreOtherSeller%2Cscm-url%3A1007.40050.354490.0%2Cpvid%3A7e7160f1-5506-47b6-b6c3-fdaa0b08def2%2Ctpp_buckets%3A668%232846%238116%232002&isseo=y&pdp_npi=4%40dis!KRW!3730!2837!!!2.63!2.00!%402141112117183716403845196ecd96!12000036430884485!rec!KR!4285360891!&utparam-url=scene%3ApcDetailBottomMoreOtherSeller%7Cquery_from%3A) (뒷면부 브라켓)
# Sata Extender Card

- Fujitsu 9211-8i 6Gbps HBA LSI FW:P20 IT Mode ZFS FreeNAS unRAID+2* SFF-8087 SATA From Ebay

고민이 많다

# 도커쓰면 좋음

[https://quasarzone.com/bbs/qb_free/views/8054613](https://quasarzone.com/bbs/qb_free/views/8054613)

[https://m.clien.net/service/board/cm_nas/15196008](https://m.clien.net/service/board/cm_nas/15196008)

[https://www.lainyzine.com/ko/article/how-to-install-and-use-docker-on-your-synology-nas/](https://www.lainyzine.com/ko/article/how-to-install-and-use-docker-on-your-synology-nas/)

# 팩트 추

# 결과물

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/addc5c5e-24a5-4ab8-825d-90e86ae4b376/IMG_2722.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=faead97bfbf0b25824f4a06b71b949629be4d5a13a741caa39115d7a03474590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/54a2b4f2-de31-4b3b-ba93-615304e81f27/IMG_2724.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=64d698e0ca2173bf2d2d66dd324e51c4a463f80eee5beac7f37ab2ec0079cae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b26f10ea-8ad1-45d9-87da-5abbc8d7a74b/IMG_2725.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=81a3c1647c816e56521a5b936335ec676fc70e2422ac57f511c5b993e023dbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c13032ee-5476-4ce5-b60f-bd6bcc37f5c0/IMG_2726.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=be25ebe5463c385b97833c352839518200a2bce8461331f558b690cecd54381f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6538abe9-16e5-4e53-b167-afad1caeca22/IMG_2727.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=4cc44b9d651d208ab0c54bde4b3a341c3164358207797101b5f860d8c410b3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/32947f10-8d63-4e35-bed7-2e421b0680ce/IMG_2729.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCIRWV3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH2OONIF2dIxn42bzqBbVm1nscSAoICeHf48Mj6iJPTIAiEA3ldvP2dQ32vwPpsY8dWxbAd%2FCyg3KicgpiSNiYawd7Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCNCSnH1WltlnHTw7ircA4CTpzyz2cQpvdH%2FK37Ml2VZuepT5nVhEzPEBIJdN2mSRCYNn2EE6pgEDZ26SIkdpWC4i39tn6aU0k8P25ypV71c3cn8MdkV8vN90Vl7u1ryQ%2BC1jDQTf8cYkFbEziq40VUHqEsNXfPhfx0X7sGhpd6RfQS7ftwjwWFGOXyOgm6kwa5YH18RhRG478UrjWdlHfaoKyewR%2BCOTzqdjAnok7sZPGxDgc3z%2BthH42DGZss5jH%2F%2Ftbyb%2BB5hVXhHPI1lKCjXD6hhuqFe0zZNtEwIIc5Xcorc2UPt9XtLFF2jdcntgWScjIIPpxrX%2FKnmJXk48%2F3zHZOfCsWuy%2FbARZC3b1coDOdd%2FSNlse%2B05LqkbJ01X%2Be49gZlTz4q1buTlFX%2B1zuKIvrbUZyaT5Y4KX5MDBwbbdHhHTrsSdxRk3x5nsn9nIOcMeuG%2BFD1Nfh7dFAu8P%2FMs4i%2FhLzS7RvMvdJgZBD80UaHvMLUS%2F1NcAmJUVz7TLtB1u9YlJQR%2FRpxPu8LXKa57HF6T7WuzivrXC0GHAfzxohoFVO5W2fMbkXpGpfU9fFstdfyYswaewg5hWGLTZg33eqW7NwwTPQLvvmvct7Qqr%2Bmg0vgYGKr60jFpN7V7w0B6oIirrrt20nRMJPPh8QGOqUBmsDPKLnrYQMWH6lSxyI92NVXhzvufoJA%2F%2BVO%2Fkhnx9bmd2HNlDI2sqqLfeXmkTr%2FGFiWSrUX%2FJ1yS%2Bz%2F7C%2BKbu4jgnhfcKMVRn6Q1q3FrC75rP7WQiUALEaIwVwAjTylUQ90rE%2B5ui5zk36dYs6Q0r2F%2BPpqxdPiDC51D7VT8G63S0YdbFjSMsl0UXWKGii3NpkkgjPp7wx%2F%2BSB5jsKGPMkMHqUP&X-Amz-Signature=b6a8ba1e3ee72aef8c60f55326e2d669edea1af4eb21f63daf5deff1b23631d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


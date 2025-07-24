---
title: "NAS & 옵시디언(도커)"
date: 2024-07-04T11:30:00.000Z
draft: false
tags: ["ubuntu", "Docker", "obsidian"]
series: ["Let's Homelab!"]
description: "옵시디언을 도커와 함께 설치하고 동기화하는 방법에 대한 안내가 포함되어 있으며, 외부 접속을 위해 포트포워딩이나 역방향 프록시 설정이 필요하다는 주의사항이 있습니다. 플러그인 동기화를 위해 숨겨진 디렉토리인 obsidian도 함께 동기화해야 합니다."
notion_id: "4d542bc3-6006-4b0f-80b1-1738bcb274b0"
notion_url: "https://www.notion.so/NAS-4d542bc360064b0f80b11738bcb274b0"
---

# NAS & 옵시디언(도커)

> **Summary**
> 옵시디언을 도커와 함께 설치하고 동기화하는 방법에 대한 안내가 포함되어 있으며, 외부 접속을 위해 포트포워딩이나 역방향 프록시 설정이 필요하다는 주의사항이 있습니다. 플러그인 동기화를 위해 숨겨진 디렉토리인 obsidian도 함께 동기화해야 합니다.

---


![Image](https://obsidian.md/images/2023-06-logo.png)

# Web 버전

[https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/](https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/)

# 로컬 버전

> 💡 **주의!) Self-hosted LiveSync를 외부접속이 가능하도록 하려면, **
> 위의 5984포트를 포트포워딩하거나, 역방향 프록시 설정을 사전에 해주셔야 됩니다.!
>
>

[https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/)

# 옵시디언 웹 배포

[https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/](https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/)

# 플러그인도 동기화하기

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a007749a-9a71-4c46-8470-602034fc382d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVNFDE2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHB7auJaz0km%2Fr6J2RBrC6wCuungS%2FlOXxUThBLCPuy2AiEA2iVnNZjNKHmsyKbwv3uphP6FHHEBy9kMvUFkwGrVCCQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJst8Eot7Gr4kY%2BjCyrcA4wBjssUB3Of3rZiWHLBFmfmGNBJ9IXZJG489yXXcAnDarwrPAjYjkXWkd0%2Btmhqc10yFiWOg4aDdX6SNmHu%2BB0zOce4xT2YHkBzq3FrpnVZKVGGmunHVzOw2D2HgA7MxXXjHl0EJTAGHTOLDP%2FWOP2AQOES9FLWeyPKpoVSDl8Y%2Bv4rkJ%2FcEUe2uCVhSmUJ4PEPSS71SwRK9snrZiLAdq7QQTDNIgcEUU95r6i9bM36izJV1zGISV0UMPKtMyh0ctsyTw8c05sYcYUZ2YoHWv%2Fl81ixPxxSrLu9anryFG%2Ftrgioo7REzfEon9IHZGaaQgLnoFFsZql%2BBGHGebb2qAOYH2jeK1jlhaShLtdV4c3XWnPExWemxj%2BOn4M9peEFeu8Gsu7FoAa23YkAnTCiAvyr6JloH6xuBEBXcJ9pJ6DVOkR1wcr3yPMudvnaTBoxot020w7g%2BxNXErX8XSx3leKxJu4PLpYHRGZNck0r8F1yaUwYFL4fi3gbTNGTSJXwTrAwKJ7GQRFPOmwApjWBNowYkRQsC1UPVlw8z4Et%2FyxeZ%2F5FeZEgmDQTqT6FSB22TlLY6vzZxtfQiwq2xRtxrQvoJckmiv5xsiaud9LlrgVH36NqjVIwWv6X7Z0HMOP2h8QGOqUB86PIGr8ZHVq0J3R4ul8qP2l5Doz2mh9Mw6sY87p%2F7fdAOMM%2FKk6RR9ewyUi%2Bu6gtx%2BM55FHjXMSNqNISsmRHg8oc6PfUIkTY%2FlziOE1ZVBQsS64V55mbUuYOPbyfF86ed4sxRmN%2F7SLuEVXxBg37Pr%2BXshQ%2FTyY6Y2guJAgl4fiA1Cz%2BQKDb2OXdlUgtbzi9kG4PvB%2B75IpCN%2BZ6lFdP9XWo2E%2BG&X-Amz-Signature=f1e5a0183a71df91d09719afcd456198ccbd5c4bba62862ed5eacc9b4c75df71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f4b578d-a6c2-4704-a355-6bb8a8fb8093/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVNFDE2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHB7auJaz0km%2Fr6J2RBrC6wCuungS%2FlOXxUThBLCPuy2AiEA2iVnNZjNKHmsyKbwv3uphP6FHHEBy9kMvUFkwGrVCCQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJst8Eot7Gr4kY%2BjCyrcA4wBjssUB3Of3rZiWHLBFmfmGNBJ9IXZJG489yXXcAnDarwrPAjYjkXWkd0%2Btmhqc10yFiWOg4aDdX6SNmHu%2BB0zOce4xT2YHkBzq3FrpnVZKVGGmunHVzOw2D2HgA7MxXXjHl0EJTAGHTOLDP%2FWOP2AQOES9FLWeyPKpoVSDl8Y%2Bv4rkJ%2FcEUe2uCVhSmUJ4PEPSS71SwRK9snrZiLAdq7QQTDNIgcEUU95r6i9bM36izJV1zGISV0UMPKtMyh0ctsyTw8c05sYcYUZ2YoHWv%2Fl81ixPxxSrLu9anryFG%2Ftrgioo7REzfEon9IHZGaaQgLnoFFsZql%2BBGHGebb2qAOYH2jeK1jlhaShLtdV4c3XWnPExWemxj%2BOn4M9peEFeu8Gsu7FoAa23YkAnTCiAvyr6JloH6xuBEBXcJ9pJ6DVOkR1wcr3yPMudvnaTBoxot020w7g%2BxNXErX8XSx3leKxJu4PLpYHRGZNck0r8F1yaUwYFL4fi3gbTNGTSJXwTrAwKJ7GQRFPOmwApjWBNowYkRQsC1UPVlw8z4Et%2FyxeZ%2F5FeZEgmDQTqT6FSB22TlLY6vzZxtfQiwq2xRtxrQvoJckmiv5xsiaud9LlrgVH36NqjVIwWv6X7Z0HMOP2h8QGOqUB86PIGr8ZHVq0J3R4ul8qP2l5Doz2mh9Mw6sY87p%2F7fdAOMM%2FKk6RR9ewyUi%2Bu6gtx%2BM55FHjXMSNqNISsmRHg8oc6PfUIkTY%2FlziOE1ZVBQsS64V55mbUuYOPbyfF86ed4sxRmN%2F7SLuEVXxBg37Pr%2BXshQ%2FTyY6Y2guJAgl4fiA1Cz%2BQKDb2OXdlUgtbzi9kG4PvB%2B75IpCN%2BZ6lFdP9XWo2E%2BG&X-Amz-Signature=2031ef6222bccebd944a97f11dc2cb3ba65cc63682f927be04e7e3c07be159bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

숨겨진 디렉토리인 obsidian도 함께 동기화하면, 플러그인도 정상적으로 동기화된다!


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

[https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/)

# 옵시디언 웹 배포

[https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/](https://www.scmlab.com/obsidian-publishing-self-hosting-server-install-using-synology-docker/)

# 플러그인도 동기화하기

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a007749a-9a71-4c46-8470-602034fc382d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEWXNC7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIA2IBAfCLuKA34qbMeKiiwqkNQFPNOEn2XmcleRR2n82AiAXsevbCkKBz08zaJgBpOgrcbIwcLVOXmAe1naHsAZbbir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMetNi2kK29cvDnngBKtwDMUGwTZjTsWMLSBZP9vTp1qjZP35HCap9w9z75dlcA4EpK%2F87bceb5Pts8j3SB5cDWQGryo6vc5%2Fp9GqHihVe7jKEVlc8H1YTtrnj4vh%2FmvIpIaZT7VaPiKoikHgNIJLH74Dvt6U9BtZV58MXx88qubvg%2Bu6NtoxqqDOT0xtN7ZKH2LwWVRYm2%2FqSFX5QAJoVDjnlokXhOw02XPR5k4YkYVlqYOLnxIPj%2FEW5M%2FkaQ4Eem%2F2YNTAd7WmBrglFc%2BrfqvlOZZPYWiFBEXBNgAn0UwA7J2tJOY1CWq%2FD8o1Q3s6RqG8jfLve3iDv2TLGZhoEjD3mhvcoEccjODhchR6yPvSpHwvILhsLFqZSd1AHdqEvb9uFWHKuOANyr%2FsklAS7ce%2FyBK76vDugoQ72ro%2FENjR7fuof65NmPmwt3KKKrEZc0YHMGFrSKMaz%2BULjXE3AM0SFtlPiApkTXanrwuIP4FYOVg0CE4f6Mioq0NcQqh4zTNSe86kWJbiz3obTGG%2FPdA1%2B%2Fu6zfl7ch0yu10y2A6i1Vw59WpaR8paSAGVUMcqGxoNhzrF2YOKNcl%2FFCxbahyr3oGF%2FI3oyl1%2FihyE66rdYRTAKeseIp0afIFege2kSvgrVQbg7EAM3vy8w0s6HxAY6pgEVH%2BcItLu3OcfwtvsCF0V0uaz21jzwUf2ilrhsfUUznNSldlgFgQep93r49FBKNy4HUSh7llR%2BU60BcEUXxnNTe2Cbd9sSTv7swQWH9gN%2FW5XtS7R48jVYyaGtnXVKaFVgCjc0lDhtIAasgn46vCdFJUEgq5uehatS245lVk23BdD7y0hbKyPsvnXAAvVYKZ%2F0feKHCGzXUIZAZyvdX%2BZoqOKH63fQ&X-Amz-Signature=d4b1a9a4e39e5db49af995c742aa6f598fc1f9cf7ff3d5679b48fd7ffbceae7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f4b578d-a6c2-4704-a355-6bb8a8fb8093/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEWXNC7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIA2IBAfCLuKA34qbMeKiiwqkNQFPNOEn2XmcleRR2n82AiAXsevbCkKBz08zaJgBpOgrcbIwcLVOXmAe1naHsAZbbir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMetNi2kK29cvDnngBKtwDMUGwTZjTsWMLSBZP9vTp1qjZP35HCap9w9z75dlcA4EpK%2F87bceb5Pts8j3SB5cDWQGryo6vc5%2Fp9GqHihVe7jKEVlc8H1YTtrnj4vh%2FmvIpIaZT7VaPiKoikHgNIJLH74Dvt6U9BtZV58MXx88qubvg%2Bu6NtoxqqDOT0xtN7ZKH2LwWVRYm2%2FqSFX5QAJoVDjnlokXhOw02XPR5k4YkYVlqYOLnxIPj%2FEW5M%2FkaQ4Eem%2F2YNTAd7WmBrglFc%2BrfqvlOZZPYWiFBEXBNgAn0UwA7J2tJOY1CWq%2FD8o1Q3s6RqG8jfLve3iDv2TLGZhoEjD3mhvcoEccjODhchR6yPvSpHwvILhsLFqZSd1AHdqEvb9uFWHKuOANyr%2FsklAS7ce%2FyBK76vDugoQ72ro%2FENjR7fuof65NmPmwt3KKKrEZc0YHMGFrSKMaz%2BULjXE3AM0SFtlPiApkTXanrwuIP4FYOVg0CE4f6Mioq0NcQqh4zTNSe86kWJbiz3obTGG%2FPdA1%2B%2Fu6zfl7ch0yu10y2A6i1Vw59WpaR8paSAGVUMcqGxoNhzrF2YOKNcl%2FFCxbahyr3oGF%2FI3oyl1%2FihyE66rdYRTAKeseIp0afIFege2kSvgrVQbg7EAM3vy8w0s6HxAY6pgEVH%2BcItLu3OcfwtvsCF0V0uaz21jzwUf2ilrhsfUUznNSldlgFgQep93r49FBKNy4HUSh7llR%2BU60BcEUXxnNTe2Cbd9sSTv7swQWH9gN%2FW5XtS7R48jVYyaGtnXVKaFVgCjc0lDhtIAasgn46vCdFJUEgq5uehatS245lVk23BdD7y0hbKyPsvnXAAvVYKZ%2F0feKHCGzXUIZAZyvdX%2BZoqOKH63fQ&X-Amz-Signature=075985eda70606854c31b6dad560d7401a5ee215ffe92989a9e4c15daf6ec71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

숨겨진 디렉토리인 obsidian도 함께 동기화하면, 플러그인도 정상적으로 동기화된다!


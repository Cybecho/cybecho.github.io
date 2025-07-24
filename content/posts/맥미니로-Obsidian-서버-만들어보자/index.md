---
title: "맥미니로 Obsidian 서버 만들어보자"
date: 2025-06-20T09:09:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's Homelab!"]
description: "M4 맥미니를 활용하여 Obsidian 동기화 서버를 구축하는 방법을 설명하며, Self-hosted LiveSync의 장점과 필요한 구성요소, Docker 환경 설정, CouchDB 서버 실행, 플러그인 설치 및 설정, 네트워크 접근 방법, 성능 최적화 및 백업 전략을 포함합니다. 이를 통해 개인 데이터의 통제권을 유지하면서 실시간 동기화를 구현할 수 있습니다."
notion_id: "2181bab9-e3f8-806b-8bf2-fd3303f3d1a1"
notion_url: "https://www.notion.so/Obsidian-2181bab9e3f8806b8bf2fd3303f3d1a1"
---

# 맥미니로 Obsidian 서버 만들어보자

> **Summary**
> M4 맥미니를 활용하여 Obsidian 동기화 서버를 구축하는 방법을 설명하며, Self-hosted LiveSync의 장점과 필요한 구성요소, Docker 환경 설정, CouchDB 서버 실행, 플러그인 설치 및 설정, 네트워크 접근 방법, 성능 최적화 및 백업 전략을 포함합니다. 이를 통해 개인 데이터의 통제권을 유지하면서 실시간 동기화를 구현할 수 있습니다.

---

🔗 [https://www.perplexity.ai/search/m4-maegminireul-obsidian-dongg-veXXNjrsQ0aJBXlIVwoPsQ](https://www.perplexity.ai/search/m4-maegminireul-obsidian-dongg-veXXNjrsQ0aJBXlIVwoPsQ)

# M4 맥미니를 활용한 Obsidian 동기화 서버 구축 가이드

M4 맥미니를 Obsidian 동기화 서버로 활용하여 Self-hosted LiveSync를 구축하는 방법을 제시합니다. 이는 Obsidian의 유료 Sync 서비스를 대체하여 개인 서버에서 실시간 동기화를 제공하는 솔루션입니다.

## 개요 및 준비사항

## Self-hosted LiveSync의 장점

Self-hosted LiveSync는 CouchDB를 기반으로 하는 실시간 동기화 플러그인으로, 다음과 같은 특징을 가집니다[1](https://jegtnes.com/blog/self-hosting-obsidian-sync-for-ios-android-mac-and-windows-with-couchdb/)[2](https://blog.koder.page/obsidian-selfhosted-livesync-plugin/):

- 거의 실시간에 가까운 기기 간 양방향 동기화
- 엔드 투 엔드 암호화 지원
- 모든 Obsidian 호환 플랫폼에서 사용 가능
- 동기화 충돌의 시각적 해결
## 필요한 구성요소

M4 맥미니에서 동기화 서버를 구축하기 위해서는 다음이 필요합니다[3](https://svrforum.com/software/1917639)[4](https://it-svr.com/m4-mac-minie-docker-desktopseolcihagi/):

- M4 맥미니 (ARM 아키텍처 지원)
- Docker Desktop for Mac
- CouchDB 컨테이너
- Self-hosted LiveSync 플러그인
## 1단계: Docker 환경 구축

## Docker Desktop 설치

M4 맥미니는 ARM 프로세서를 사용하므로 Apple Silicon용 Docker Desktop을 설치해야 합니다[3](https://svrforum.com/software/1917639)[4](https://it-svr.com/m4-mac-minie-docker-desktopseolcihagi/)[5](https://gabrielyj.tistory.com/223):

`bash``*# Homebrew를 통한 설치*``
brew install --cask docker

``*# 또는 공식 웹사이트에서 Apple Silicon용 다운로드*`

Docker Desktop 설치 후 실행하여 정상 동작을 확인합니다[6](https://jongsky.tistory.com/4):

`bashdocker --version
docker-compose --version`

## 폴더 구조 생성

CouchDB 설정을 위한 디렉토리 구조를 생성합니다[7](https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/)[8](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/):

`bashmkdir -p ~/obsidian-sync/couchdb/{data,config}
cd ~/obsidian-sync`

## 2단계: CouchDB 설정 파일 작성

## local.ini 설정 파일 생성

CouchDB의 설정 파일을 작성합니다[7](https://www.scmlab.com/how-to-install-and-sync-obsidian-linuxserver-and-self-hosted-livesync-synology-using-docker-and-portainer/)[2](https://blog.koder.page/obsidian-selfhosted-livesync-plugin/)[8](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/):

`text# ~/obsidian-sync/couchdb/config/local.ini
[couchdb]
single_node=true
max_document_size = 50000000

[chttpd]
require_valid_user = true
max_http_request_size = 4294967296
enable_cors = true

[chttpd_auth]
require_valid_user = true
authentication_redirect = /_utils/session.html

[httpd]
WWW-Authenticate = Basic realm="couchdb"
bind_address = 0.0.0.0

[cors]
origins = app://obsidian.md,capacitor://localhost,http://localhost
credentials = true
headers = accept, authorization, content-type, origin, referer
methods = GET, PUT, POST, HEAD, DELETE
max_age = 3600`

## Docker Compose 파일 작성

맥미니에 최적화된 docker-compose.yml 파일을 생성합니다[9](https://medevel.com/tutorial-install-couchdb-with-docker/)[10](https://second-brain-storage.tistory.com/3)[11](https://github.com/oleduc/docker-obsidian-livesync-couchdb):

`text# ~/obsidian-sync/docker-compose.yml
version: '3.9'

services:
  couchdb:
    image: couchdb:latest
    container_name: obsidian-livesync
    restart: unless-stopped
    environment:
      - COUCHDB_USER=obsidian_admin
      - COUCHDB_PASSWORD=your_secure_password
    volumes:
      - ./couchdb/data:/opt/couchdb/data
      - ./couchdb/config/local.ini:/opt/couchdb/etc/local.ini
    ports:
      - "5984:5984"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5984"]
      interval: 30s
      timeout: 10s
      retries: 3`

## 3단계: CouchDB 서버 실행

## 컨테이너 시작

Docker Compose를 사용하여 CouchDB 서버를 시작합니다[9](https://medevel.com/tutorial-install-couchdb-with-docker/)[10](https://second-brain-storage.tistory.com/3):

`bashcd ~/obsidian-sync
docker-compose up -d`

## 설치 확인

CouchDB가 정상적으로 실행되는지 확인합니다[9](https://medevel.com/tutorial-install-couchdb-with-docker/):

`bash``*# 컨테이너 상태 확인*``
docker ps

``*# CouchDB 웹 인터페이스 접속*``
open http://localhost:5984/_utils`

## 4단계: Obsidian Self-hosted LiveSync 플러그인 설정

## 플러그인 설치

Obsidian에서 Self-hosted LiveSync 플러그인을 설치합니다[12](https://bonik.me/settings-for-obsidian-sync/)[8](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/):

1. Obsidian 설정 → 커뮤니티 플러그인 → 브라우즈
1. "Self-hosted LiveSync" 검색 후 설치
1. 플러그인 활성화
## 초기 설정

Setup Wizard를 통해 CouchDB에 연결합니다[12](https://bonik.me/settings-for-obsidian-sync/)[8](https://www.scmlab.com/installing-obsidian-real-time-synchronization-server-using-synology-docker/)[13](https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/quick_setup.md):

1. **Remote Type**: CouchDB 선택
1. **URI**: `http://localhost:5984` 또는 맥미니의 로컬 IP 주소
1. **Username**: `obsidian_admin`
1. **Password**: docker-compose.yml에서 설정한 비밀번호
1. **Database name**: 원하는 데이터베이스 이름
Test 버튼을 눌러 연결을 확인한 후 Apply를 클릭합니다[12](https://bonik.me/settings-for-obsidian-sync/).

## 5단계: 네트워크 설정 및 외부 접근

## 로컬 네트워크 접근

같은 네트워크의 다른 기기에서 접근하려면 맥미니의 IP 주소를 사용합니다[14](https://servertrix.com/1867):

`bash``*# 맥미니 IP 주소 확인*``
ifconfig | grep "inet " | grep -v 127.0.0.1`

다른 기기의 Obsidian에서는 `http://맥미니IP:5984`로 설정합니다.

## 방화벽 설정

macOS 방화벽에서 5984 포트를 허용하도록 설정합니다[15](https://dosimpact.github.io/docs/g-devops/home-server/dvop-c002):

`bash``*# macOS 방화벽 상태 확인*``
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate

``*# 특정 포트 허용 (필요시)*``
sudo pfctl -f /etc/pf.conf`

## 6단계: 추가 기기에서의 설정

## Setup URI 활용

첫 번째 기기에서 설정 완료 후 Setup URI를 생성하여 다른 기기에서 쉽게 설정할 수 있습니다[13](https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/quick_setup.md)[16](https://docs.vrtmrz.net/LiveSync/procedures/Setup+Self-hosted+LiveSync+to+secondary+or+subsequent+devices):

1. Self-hosted LiveSync 설정에서 Setup URI 생성
1. 다른 기기에서 "Use setup URI" 선택
1. URI와 패스프레이즈 입력
1. "Set it up as secondary or subsequent device" 선택
## 동기화 최적화

각 기기에서 동기화 설정을 최적화합니다[2](https://blog.koder.page/obsidian-selfhosted-livesync-plugin/)[12](https://bonik.me/settings-for-obsidian-sync/):

- **Sync Settings**: LiveSync 프리셋 적용
- **Customization Sync**: 플러그인 설정도 동기화하려면 활성화
- **End-to-end encryption**: 보안을 위해 암호화 활성화 권장
## 주의사항 및 모범 사례

## 중요한 주의사항

Self-hosted LiveSync 사용 시 다음 사항들을 반드시 준수해야 합니다[17](https://gist.github.com/yeongu-dev/08dfbadc9a7c79d23b1022a30dd7eebe):

- 다른 동기화 솔루션(iCloud, Dropbox 등)과 동시 사용 금지
- 정기적인 볼트 백업 필수
- 충분한 저장 공간 확보 (데이터베이스 손상 방지)
## 성능 최적화

맥미니의 성능을 최대한 활용하기 위한 설정입니다[15](https://dosimpact.github.io/docs/g-devops/home-server/dvop-c002):

`bash``*# 맥미니 잠자기 모드 비활성화 (서버 용도)*``
sudo pmset -c disablesleep 1

``*# 자동 부팅 설정*``
sudo pmset -c autorestart 1`

## 백업 전략

CouchDB 데이터의 정기적인 백업을 위한 스크립트를 작성합니다[9](https://medevel.com/tutorial-install-couchdb-with-docker/):

`bash#!/bin/bash
``*# backup-couchdb.sh*``
DATE=$(date +%Y%m%d_%H%M%S)
docker exec obsidian-livesync tar czf /tmp/backup_$DATE.tar.gz /opt/couchdb/data
docker cp obsidian-livesync:/tmp/backup_$DATE.tar.gz ~/backups/`

## 결론

M4 맥미니를 활용한 Obsidian 동기화 서버 구축은 개인 데이터의 완전한 통제권을 제공하면서도 실시간 동기화의 편의성을 누릴 수 있는 훌륭한 솔루션입니다[1](https://jegtnes.com/blog/self-hosting-obsidian-sync-for-ios-android-mac-and-windows-with-couchdb/)[18](https://www.reddit.com/r/selfhosted/comments/1eo7knj/guide_obsidian_with_free_selfhosted_instant_sync/). ARM 아키텍처의 뛰어난 전력 효율성과 Docker의 편리한 관리 기능을 통해 안정적인 동기화 서버를 운영할 수 있습니다[3](https://svrforum.com/software/1917639)[4](https://it-svr.com/m4-mac-minie-docker-desktopseolcihagi/).

이 방법을 통해 Obsidian의 유료 Sync 서비스 없이도 모든 기기에서 원활한 노트 동기화를 구현할 수 있으며, 추가적인 사용자 정의와 확장도 가능합니다[2](https://blog.koder.page/obsidian-selfhosted-livesync-plugin/)[11](https://github.com/oleduc/docker-obsidian-livesync-couchdb).


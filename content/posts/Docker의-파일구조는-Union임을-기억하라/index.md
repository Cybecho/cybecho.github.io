---
title: "Docker의 파일구조는 Union임을 기억하라"
date: 2025-02-25T01:37:00.000Z
draft: false
tags: ["Docker"]
series: ["Infra & Network"]
description: "도커 컨테이너는 Union 파일 시스템을 사용하여 여러 레이어를 통합하여 파일 시스템을 관리하며, Dockerfile의 변경은 이미지 빌드 과정에서 레이어 재구성을 초래할 수 있습니다. 초기 레이어의 변경은 캐시 무효화로 이어져 빌드 시간이 증가하고, 파일 시스템 구조의 변화는 컨테이너의 동작에 영향을 줄 수 있습니다. 최적화를 위해 Dockerfile의 명령어 순서를 조정하고, 자주 변경되는 부분을 뒤쪽에 배치하는 것이 중요합니다."
notion_id: "1a51bab9-e3f8-80e8-aab7-cf47d7ddb7ba"
notion_url: "https://www.notion.so/Docker-Union-1a51bab9e3f880e8aab7cf47d7ddb7ba"
---

# Docker의 파일구조는 Union임을 기억하라

> **Summary**
> 도커 컨테이너는 Union 파일 시스템을 사용하여 여러 레이어를 통합하여 파일 시스템을 관리하며, Dockerfile의 변경은 이미지 빌드 과정에서 레이어 재구성을 초래할 수 있습니다. 초기 레이어의 변경은 캐시 무효화로 이어져 빌드 시간이 증가하고, 파일 시스템 구조의 변화는 컨테이너의 동작에 영향을 줄 수 있습니다. 최적화를 위해 Dockerfile의 명령어 순서를 조정하고, 자주 변경되는 부분을 뒤쪽에 배치하는 것이 중요합니다.

---

# C의 Union과 관련있을듯하다!

```javascript
도커 컨테이너에 Union 파일 시스템 구조가 코어가 된다는건데, 이게 무슨의미일까?

그래서 무언가 도커파일이 하나라도 바뀌면 크게 변할 수 있다고하는데... 이거 뭔가 C의 Union과 관련있는것같은데?
```

[Untitled](https://www.notion.so/09c35c911a1e4bdb8151ebf9c6a462f8) 

### Key Points

- 도커 컨테이너에서 Union 파일 시스템 구조는 여러 레이어를 하나로 결합하여 파일 시스템을 효율적으로 관리하는 핵심 기술로 보입니다.
- Dockerfile이 변경되면 이미지 빌드 과정에서 레이어가 재구성될 수 있으며, 이는 빌드 시간 증가와 컨테이너 파일 시스템의 큰 변화를 초래할 가능성이 있습니다.
- 연구에 따르면, Dockerfile의 초기 변경은 캐시 무효화로 이어져 많은 레이어를 재빌드해야 하므로 시간이 많이 걸릴 수 있습니다.
---

### 도커 컨테이너와 Union 파일 시스템

도커 컨테이너는 Union 파일 시스템을 사용하여 파일 시스템을 관리합니다. 이 시스템은 여러 레이어를 하나의 통합된 파일 시스템으로 보여줍니다. 예를 들어, 베이스 이미지 레이어와 추가 레이어는 읽기 전용으로 유지되며, 각 컨테이너는 런타임 변경을 위한 자체 쓰기 가능 레이어를 가집니다. 이는 여러 컨테이너가 동일한 이미지 레이어를 공유할 수 있게 해 효율성을 높입니다.

Dockerfile은 도커 이미지를 빌드하는 스크립트로, 각 명령어(예: FROM, RUN, COPY)가 새로운 레이어를 생성합니다. Union 파일 시스템은 이러한 레이어를 쌓아 컨테이너가 볼 수 있는 파일 시스템을 만듭니다.

### Dockerfile 변경의 영향

Dockerfile이 변경되면, 해당 변경이 영향을 미치는 레이어와 그 이후의 모든 레이어가 재빌드될 수 있습니다. 특히, Dockerfile의 초기 부분(예: 베이스 이미지 변경)이 수정되면 캐시가 무효화되어 많은 레이어를 다시 빌드해야 하므로 시간이 많이 걸릴 수 있습니다. 이는 빌드 프로세스에 큰 영향을 미칠 수 있습니다. 또한, 새로운 이미지로 컨테이너를 생성하면 파일 시스템 구조가 달라져 컨테이너의 동작에 영향을 줄 수 있습니다. 예를 들어, 파일 위치가 변경되면 이를 의존하는 스크립트나 애플리케이션이 동작하지 않을 수 있습니다.

이러한 변화는 예상치 못한 결과로 이어질 수 있으며, 특히 대규모 프로젝트에서 빌드 시간 증가와 데이터 일관성 문제가 발생할 가능성이 있습니다.

---

### 조사 보고서: 도커 컨테이너와 Union 파일 시스템, Dockerfile 변경의 영향

### 도커 컨테이너에서 Union 파일 시스템의 역할

도커 컨테이너의 파일 시스템은 Union 파일 시스템에 의해 관리됩니다. Union 파일 시스템은 여러 파일 시스템 레이어를 투명하게 오버레이하여 하나의 가상 파일 시스템을 형성하는 기술입니다. 도커에서는 이 기술을 통해 이미지 레이어(읽기 전용)와 컨테이너의 쓰기 가능 레이어를 결합합니다.

예를 들어, 베이스 이미지는 여러 레이어로 구성되며, 각 레이어는 Dockerfile의 명령어에 따라 생성됩니다. 컨테이너가 실행되면, Union 파일 시스템은 이러한 레이어를 하나의 파일 시스템으로 보여주며, 컨테이너는 런타임 중 변경 사항을 쓰기 가능 레이어에 기록합니다. 이는 베이스 이미지 레이어를 여러 컨테이너가 공유할 수 있게 해 디스크 공간을 효율적으로 사용하게 합니다.

이러한 구조는 도커의 경량화와 빠른 배포를 가능하게 하며, 특히 여러 컨테이너가 동일한 베이스 이미지를 사용할 때 유리합니다. 예를 들어, 200MB 크기의 베이스 이미지가 5개의 컨테이너에서 사용된다면, Union 파일 시스템이 없으면 1GB의 디스크 공간이 필요하지만, Union 파일 시스템을 사용하면 베이스 이미지를 공유하여 공간을 절약할 수 있습니다.

### Dockerfile과 레이어 관리

Dockerfile은 도커 이미지를 빌드하는 데 사용되는 스크립트로, 각 명령어(예: FROM, RUN, COPY, ADD)가 새로운 레이어를 생성합니다. 이 레이어들은 Union 파일 시스템에 의해 쌓여 최종 이미지의 파일 시스템을 형성합니다. 예를 들어:

- `FROM ubuntu:22.04`는 베이스 레이어를 설정합니다.
- `RUN apt-get install -y nginx`는 새로운 레이어를 추가하여 nginx를 설치한 변경 사항을 기록합니다.
이미지 빌드 과정에서 도커는 캐시를 사용하여 빌드 시간을 단축합니다. 동일한 명령어가 이전에 실행되었고, 그 결과가 캐시에 있다면, 도커는 캐시된 레이어를 재사용합니다. 그러나 Dockerfile의 명령어가 변경되면 해당 레이어와 그 이후의 모든 레이어가 재빌드됩니다. 이는 캐시 무효화(cache invalidation)로 이어질 수 있습니다.

### Dockerfile 변경의 큰 영향

Dockerfile이 변경되면, 변경된 명령어에 해당하는 레이어와 그 이후의 레이어가 재구성됩니다. 이는 특히 초기 명령어(예: 베이스 이미지 변경, 종속성 설치)가 변경될 때 큰 영향을 미칩니다. 예를 들어, 다음 Dockerfile을 고려해 봅시다:

```plain text
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nginx
COPY app /app
RUN echo "hello" > /app/file.txt

```

만약 `FROM ubuntu:22.04`를 `FROM alpine:3.14`로 변경하면, 베이스 레이어가 완전히 달라지며, 이후 모든 명령어(apt-get 설치, 파일 복사, 파일 생성)가 재실행되어야 합니다. 이는 빌드 시간이 크게 증가할 수 있습니다.

또한, 변경된 Dockerfile로 이미지를 재빌드하면 새로운 이미지의 레이어 구조가 달라질 수 있습니다. 이는 새로 생성된 컨테이너의 파일 시스템에 영향을 미쳐, 파일 위치나 내용이 변경될 수 있습니다. 예를 들어, 파일이 다른 디렉토리로 이동되면 이를 의존하는 애플리케이션이 동작하지 않을 수 있습니다. 이는 데이터 일관성 문제나 애플리케이션 오류로 이어질 수 있습니다.

### 캐시 무효화와 빌드 시간 증가

도커의 캐시 메커니즘은 빌드 효율성을 높이지만, Dockerfile의 변경은 캐시 무효화를 유발할 수 있습니다. 예를 들어, `COPY` 명령어로 자주 변경되는 소스 코드를 복사하면, 해당 레이어와 이후 레이어가 매번 재빌드됩니다. 이를 방지하기 위해, Dockerfile의 명령어 순서를 최적화하는 것이 중요합니다. 예를 들어, 종속성 설치(RUN apt-get install)는 소스 코드 복사(COPY)보다 앞에 두는 것이 좋습니다. 이렇게 하면 소스 코드가 변경되더라도 종속성 설치 레이어는 캐시에서 재사용될 수 있습니다.

그러나 초기 레이어에서 변경이 발생하면, 이후 모든 레이어가 재빌드되어야 하므로 빌드 시간이 크게 증가할 수 있습니다. 이는 특히 대규모 프로젝트나 복잡한 Dockerfile에서 문제가 될 수 있습니다. 예를 들어, 인터넷에서 다운로드하는 파일이 자주 업데이트되면, 해당 RUN 명령어가 매번 실행되어야 하며, 이는 빌드 시간을 연장시킬 수 있습니다.

### Union 파일 시스템과 Dockerfile 변경의 상호작용

Union 파일 시스템은 레이어 간의 파일 충돌을 관리합니다. 동일한 경로에 파일이 여러 레이어에 존재하면, 가장 상위 레이어의 파일이 우선적으로 표시됩니다. Dockerfile이 변경되어 새로운 레이어가 추가되거나 기존 레이어가 수정되면, 이 우선순위가 달라질 수 있습니다. 예를 들어, 베이스 이미지에 있는 파일을 상위 레이어에서 수정하면, 컨테이너는 수정된 버전을 보게 됩니다.

이러한 동작은 Dockerfile 변경이 컨테이너의 파일 시스템에 미치는 영향을 이해하는 데 중요합니다. 특히, 파일 위치나 내용이 변경되면 애플리케이션의 동작에 영향을 줄 수 있으며, 이는 예상치 못한 버그나 성능 저하로 이어질 수 있습니다.

### 실용적인 예시와 권장 사항

실제 사례를 통해 이해해 봅시다. 다음은 Node.js 애플리케이션의 Dockerfile입니다:

```plain text
FROM node:lts
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "index.js"]

```

여기서 `COPY package.json yarn.lock ./`와 `RUN yarn install --production`은 종속성 설치를 처리하며, 자주 변경되지 않는 경우 캐시에서 재사용될 수 있습니다. 그러나 `COPY . .`은 소스 코드를 복사하며, 코드가 변경될 때마다 해당 레이어와 이후 CMD 레이어가 재빌드됩니다.

이를 최적화하려면, 자주 변경되는 부분을 Dockerfile의 뒤쪽에 배치하고, 불필요한 레이어 생성을 줄이는 것이 좋습니다. 또한, 멀티스테이지 빌드를 사용하여 빌드 중간 단계의 불필요한 파일을 제거하면 최종 이미지 크기를 줄일 수 있습니다.

### 표: Dockerfile 변경의 영향 요약

### 결론

Union 파일 시스템은 도커 컨테이너의 파일 시스템 관리를 가능하게 하는 핵심 기술이며, Dockerfile의 변경은 이미지 레이어 구조와 빌드 프로세스에 큰 영향을 미칠 수 있습니다. 초기 레이어의 변경은 캐시 무효화로 이어져 빌드 시간을 증가시키고, 파일 시스템 구조의 변화는 컨테이너 동작에 영향을 줄 수 있습니다. 이를 최소화하기 위해 Dockerfile의 명령어 순서를 최적화하고, 자주 변경되는 부분을 뒤쪽에 배치하는 것이 중요합니다.

---

### 주요 인용

- [Why does docker need a Union File System Stack Overflow](https://stackoverflow.com/questions/32775594/why-does-docker-need-a-union-file-system)
- [Deep Dive into docker internals Union Filesystem Martin Heinz](https://martinheinz.dev/blog/44)
- [How docker images work Union File Systems for dummies terriblecode](https://www.terriblecode.com/blog/how-docker-images-work-union-file-systems-for-dummies/)
- [Part 8 Image-building best practices Docker Docs](https://docs.docker.com/get-started/workshop/09_image_best/)
- [Best practices Docker Docs](https://docs.docker.com/build/building/best-practices/)
- [Top 20 Dockerfile best practices Sysdig](https://sysdig.com/learn-cloud-native/dockerfile-best-practices/)
- [UnionFS and Docker Overview of Union File Systems in Containerization ctrl shift](https://ctrlshift.dev/unionfs-and-docker-overview-of-union-file-systems-in-containerization/)
- [Drooling Over Docker 2 Understanding Union File Systems Rahul Singh Medium](https://medium.com/@rs1ngh/drooling-over-docker-2-understanding-union-file-systems-2e9bf204177c)
- [Storage drivers Docker Docs](https://docs.docker.com/engine/storage/drivers/)


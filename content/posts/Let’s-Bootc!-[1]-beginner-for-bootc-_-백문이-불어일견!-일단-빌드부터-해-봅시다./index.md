---
title: "Let’s Bootc! [1] - beginner for bootc : 백문이 불어일견! 일단 빌드부터 해 봅시다."
date: 2026-01-25T05:55:00.000Z
draft: false
tags: ["Docker", "Infra"]
series: ["Meet The Bootc"]
description: "Top-Down 방식으로 CentOS Stream 10 기반의 GUI 환경을 구축하는 실습을 진행하며, Podman을 사용하여 컨테이너 이미지를 생성하고 배포하는 과정을 설명합니다. 사용자는 기본 사용자 계정을 설정하고, Containerfile을 작성하여 OS 이미지를 정의한 후, ISO 파일로 변환하여 USB에 굽고 설치합니다. 업데이트 및 롤백 테스트를 통해 bootc의 기본적인 워크플로우를 경험하게 됩니다."
notion_id: "2f31bab9-e3f8-8002-9c73-d0c7b1f5ce1e"
notion_url: "https://www.notion.so/Let-s-Bootc-1-beginner-for-bootc-2f31bab9e3f880029c73d0c7b1f5ce1e"
---

# Let’s Bootc! [1] - beginner for bootc : 백문이 불어일견! 일단 빌드부터 해 봅시다.

> **Summary**
> Top-Down 방식으로 CentOS Stream 10 기반의 GUI 환경을 구축하는 실습을 진행하며, Podman을 사용하여 컨테이너 이미지를 생성하고 배포하는 과정을 설명합니다. 사용자는 기본 사용자 계정을 설정하고, Containerfile을 작성하여 OS 이미지를 정의한 후, ISO 파일로 변환하여 USB에 굽고 설치합니다. 업데이트 및 롤백 테스트를 통해 bootc의 기본적인 워크플로우를 경험하게 됩니다.

---

![Image](image_0db46e80939d.png)

![Image](image_f1e66ad09183.png)

# [1] beginner for bootc : Quick Starter!

백문이 불여일견이라고, 저는 Top-Down 방식을 통해 이 시리즈를 풀어내보려 합니다.

원리를 먼저 설명하고 실습으로 넘어가는 게 교과서적인 순서겠지만, 그 방식은 제겐 지루하기 때문입니다... 즉! 개인적인 취향으로 Top-down 방식을 고수한다는 것이지요…! 무엇보다, 직접 만들어보기 전까지는 "왜 이걸 알아야 하는지"가 와닿지 않기 때문이기도 합니다. 그래서 먼저 만들어보고, 구동되는 것을 확인하는 것부터 시작해보려 합니다.

물론 처음에는 단순히 따라 하기만 될 거기 때문에 하나하나 진행하다 보면 의문점이 생길 수밖에 없겠죠. 그래서 “이게 무엇인지”, “왜 이 방식을 쓰고 왜 이렇게 구성했는지”, “내가 지금 뭘 따라 하고 있는 건지” 헷갈리는 게 많고 의문도 많을 거예요. 일단은 단계별로 하나씩 자세히 풀어가고자 하며, 그때 생기는 의문들이 이후 포스트의 출발점이 될 것이니 일단 한번 따라와 보시기 바랍니다.

---

## 오늘 만들 것

오늘 실습에서는 CentOS Stream 10 기반의 GUI 환경을 구축해보려 합니다. 저는 개인적으로는 KDE를 선호하기 때문에 KDE Plasma 데스크톱 환경을 올릴 예정입니다. GNOME이 더 익숙한 분들도 있겠지만, 패키지 그룹만 바꾸면 되니 큰 차이는 없습니다.

아키텍처는 x86_64 기반으로 작성할겁니다. WSL2든, 인텔 맥이든, 일반 PC든 CISC기반의 x86_64이기만 하면 됩니다. RISC기반의 ARM 기반 환경에서는 크로스 컴파일 문제가 생기므로 이 글에서는 다루지 않으려 합니다.

빌드하기 전에 저장 용량에 대해서도 한 가지 짚고 넘어가야 됩니다. Podman을 사용해서 컨테이너 이미지를 빌드하고 이미지를 ISO로 변환하는 과정에서 디스크 공간이 상당히 필요합니다. 그래서 최소한 50GB 정도는 확보해 두는 것을 권장드립니다.

빌드 중에 공간이 부족해서 실패하면 처음부터 다시 해야 되는데, 그 시간이 굉장히 아깝기 때문이죠.

---

## 전체 흐름

오늘 밟을 과정을 먼저 정리해보고 시작하도록 하시죠.

첫째, bootc 컨테이너 이미지를 생성한다. Containerfile을 작성하고, Podman으로 빌드한다.

둘째, 이미지를 배포한다. 여기서 "배포"라는 말이 두 가지 의미를 갖는다. 하나는 레지스트리(Docker Hub, GHCR 등)에 푸시하는 것이고, 다른 하나는 ISO 파일로 변환해서 USB에 굽는 것이다. 둘 다 필요하다. USB로 초기 설치를 하고, 이후 업데이트는 레지스트리를 통해 받는 구조다.

셋째, 대상 컴퓨터에 설치한다. USB로 부팅해서 디스크에 OS를 깔고, 설치된 시스템이 레지스트리를 제대로 바라보는지 확인한다.

넷째, 업데이트를 테스트한다. 빌드 환경에서 이미지를 수정하고 레지스트리에 다시 올린다. 대상 컴퓨터에서 `bootc upgrade`를 실행해서 변경 사항이 반영되는지 확인한다.

다섯째, 롤백을 테스트한다. 업데이트에 문제가 생겼을 때 이전 버전으로 돌아갈 수 있는지 확인한다.

이 다섯 단계를 모두 거쳐야 bootc의 기본적인 워크플로우를 체험했다고 할 수 있습니다.

![Image](image_5ca2c0d525b3.png)

---

# 실습 Start!

자, 그러면 이제 본격적으로 시작 해 볼까요?

---

## 1. 환경 구성

### 1-1. Podman 설치 및 설정

본 실습에서는 Podman을 활용합니다. Docker를 사용하셔도 무방하나, bootc 생태계가 Podman을 중심으로 구성되어 있어 Podman 사용을 권장합니다.

```bash
# Podman 머신 생성 (디스크 50GB, 메모리 8GB 할당)
podman machine init --disk-size 50 --memory 8192

# 머신 시작
podman machine start
```

Podman은 내부적으로 Linux VM을 사용하여 컨테이너를 실행합니다. 이 구조는 이후 단계에서 중요한 역할을 하게 되지만, 현재 단계에서는 Podman이 설치되어 있으면 충분합니다.

Linux 환경에서는 배포판의 패키지 매니저를 통해 Podman을 설치할 수 있습니다.

```bash
# RHEL/CentOS/Fedora
sudo dnf install podman

# Ubuntu/Debian
sudo apt install podman

```

### 1-2. 레지스트리 계정 준비

빌드한 이미지를 업로드할 레지스트리 계정이 필요합니다. Docker Hub 또는 GitHub Container Registry(GHCR) 중 하나를 선택하시면 됩니다. 본 글에서는 Docker Hub를 기준으로 설명하겠습니다.

```bash
# Docker Hub 로그인
podman login docker.io

```

---

## 2. 사용자 비밀번호 해시 생성

bootc 이미지에는 기본 사용자 계정이 포함되어 있지 않습니다. 설치 후 시스템에 로그인하려면 사용자 계정을 사전에 구성해야 하며, 이는 config.toml 파일을 통해 설정합니다.

보안을 고려할 때, config.toml에 비밀번호를 평문으로 저장하는 것은 권장되지 않습니다. 특히 이미지를 공개 레지스트리에 업로드할 경우 더욱 그렇습니다. 이러한 이유로 SHA512 해시 알고리즘을 사용하여 암호화된 비밀번호를 설정하는 것이 적절합니다.

비밀번호 해시를 생성하는 방법은 다음과 같습니다.

셋 중 아무거나 하나로 진행하셔도 무방합니다. 이 튜토리얼 에서는, **방법 1** 을 통해 진행하도록 하겠습니다.

<details>
<summary>**방법 1: openssl 사용 (macOS, Linux 공통)**</summary>

```bash
# SHA512 해시 생성 (비밀번호 입력 프롬프트가 뜸)
openssl passwd -6
```

명령을 실행하면 비밀번호 입력 프롬프트가 표시됩니다. 비밀번호를 입력하면 `$6$`로 시작하는 긴 문자열이 출력되며, 이것이 SHA512 해시값입니다.

```bash
# 출력 예시
$6$rounds=656000$randomsalt$Abc123...긴문자열...xyz
```

</details>

<details>
<summary>**방법 2: mkpasswd 사용 (Linux)**</summary>

```bash
# Debian/Ubuntu
sudo apt install whois
mkpasswd -m sha512crypt

# Fedora/RHEL
sudo dnf install mkpasswd
mkpasswd -m sha512crypt
```

</details>

<details>
<summary>**방법 3: Docker/Podman으로 mkpasswd 실행 (OS 무관)**</summary>

macOS와 같이 mkpasswd가 기본적으로 제공되지 않는 환경에서 유용한 방법입니다.

```bash
podman run -it --rm alpine mkpasswd -m sha512 "내비밀번호"
```

</details>

어떤 방법을 사용하든 결과물은 `$6$`로 시작하는 문자열이며, 이 값을 config.toml 파일에 입력하면 됩니다.

참고로, `$6$`은 SHA512 알고리즘을 나타내고, `$5$`는 SHA256 알고리즘을 나타냅니다. 보안 강화를 위해 SHA512 사용을 권장합니다.

---

## 3. config.toml 작성

config.toml은 bootc-image-builder가 ISO를 생성할 때 참조하는 설정 파일입니다. 이 파일을 통해 사용자 계정, 파티션 레이아웃, 네트워크 설정 등을 정의할 수 있습니다.

작업 디렉토리를 생성하고 config.toml 파일을 만들어 보겠습니다.

```bash
mkdir ~/bootc-project
cd ~/bootc-project

```

config.toml 파일의 기본 구조는 다음과 같습니다.

```toml
[[customizations.user]]
name = "admin"
password = "$6$rounds=656000$xxxxxxxx$해시값전체를여기에붙여넣기"
groups = ["wheel"]

```

각 필드의 역할을 살펴보겠습니다.

`name`: 생성할 사용자 계정의 이름을 지정합니다.

`password`: 앞서 생성한 SHA512 해시값을 입력합니다. 평문 비밀번호도 사용 가능하지만, 보안상 해시값 사용을 권장합니다.

`groups`: `wheel` 그룹을 추가하면 sudo 권한이 부여됩니다. RHEL 계열에서 wheel은 관리자 그룹에 해당합니다.

<details>
<summary>(Example) 실제 사용 예시는 다음과 같습니다.</summary>

```toml
[[customizations.user]]
name = "cybecho"
password = "$6$rounds=656000$Kj8mXz2nP1qR$LmN9xYzAbCdEfGhIjKlMnOpQrStUvWxYz1234567890ABCDEFGabcdefghijklmnopqrstuvwxyz"
groups = ["wheel"]

```

</details>

<details>
<summary>(Options) 여러 사용자를 추가하려면 `[[customizations.user]]` 블록을 반복하여 작성하면 됩니다.</summary>

```toml
[[customizations.user]]
name = "admin"
password = "$6$..."
groups = ["wheel"]

[[customizations.user]]
name = "developer"
password = "$6$..."
groups = ["wheel", "docker"]

```

</details>

<details>
<summary>(Options) SSH 키를 추가하려면 `key` 필드를 활용할 수 있습니다.</summary>

```toml
[[customizations.user]]
name = "admin"
password = "$6$..."
key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB... user@example.com"
groups = ["wheel"]

```

</details>

---

## 4. Containerfile 작성

이제 OS 이미지의 내용을 정의하는 Containerfile을 작성하도록 합니다.

```docker
FROM quay.io/centos-bootc/centos-bootc:stream10

# 시스템 업데이트
RUN dnf -y update

# KDE Plasma 데스크톱 환경 설치
RUN dnf -y group install "KDE Plasma Workspaces"

# SDDM 디스플레이 매니저 설치 및 활성화
RUN dnf -y install sddm
RUN systemctl enable sddm

# 기본 애플리케이션
RUN dnf -y install firefox

# 한글 폰트 및 입력기
RUN dnf -y install google-noto-sans-cjk-fonts ibus-hangul

# wheel 그룹에 대해 sudo 권한 설정 (비밀번호 필요)
RUN echo "%wheel ALL=(ALL) ALL" > /etc/sudoers.d/wheel-sudo

# 캐시 정리
RUN dnf clean all

```

`quay.io/centos-bootc/centos-bootc:stream10`이 핵심입니다. 이 베이스 이미지에는 Linux 커널, initramfs, 부트로더 등 부팅에 필요한 모든 구성 요소가 포함되어 있습니다. 우리는 그 위에 필요한 패키지를 추가하기만 하면 됩니다.

여기서 첫 번째 의문점이 생깁니다. 일반적인 컨테이너 이미지는 애플리케이션을 담는 용도인데, 어떻게 OS 전체를 커널까지 담아서 부팅까지 가능한 것일까요? 이 질문에 대한 답은 다음 포스트에서 다루겠습니다.

---

## 5. 이미지 빌드

Containerfile과 config.toml이 준비되었으면 이미지를 빌드합니다.

```bash
cd ~/bootc-project
podman build -t my-centos10-kde:v1 .

```

빌드에는 시간이 다소 소요됩니다. KDE 패키지 그룹의 크기가 상당하기 때문입니다.

빌드가 완료되면 이미지 크기를 확인해보겠습니다.

```bash
podman images my-centos10-kde

```

일반적으로 5GB에서 10GB 사이의 크기로 빌드됩니다. 추가 패키지를 설치할 경우 15GB를 초과할 수 있습니다.

---

## 6. 레지스트리 업로드

빌드한 이미지를 레지스트리에 업로드 합니다.

```bash
# 태그 붙이기 (docker.io/사용자명/이미지명:태그)
podman tag my-centos10-kde:v1 docker.io/myusername/centos10-kde-bootc:v1

# 푸시
podman push docker.io/myusername/centos10-kde-bootc:v1

```

여기서 중요한 점을 짚고 넘어가겠습니다. 태그를 지정할 때는 반드시 `docker.io/`까지 포함한 전체 경로를 사용해야 합니다. 이후 `bootc switch`나 `bootc upgrade`를 실행할 때 이 전체 경로가 필요하기 때문입니다. 축약형을 사용하면 시스템이 레지스트리를 찾지 못하는 문제가 발생할 수 있습니다.

대용량 이미지를 업로드할 때 Docker Hub에서 연결이 끊기는 문제가 발생할 수 있습니다. 특히 10GB를 초과하는 경우 이러한 현상이 자주 나타날 수 있습니다. 이런 상황에서는 GHCR(GitHub Container Registry)이나, Habor self-hosting 등을 대안으로 고려해볼 수 있으며, 이에 대한 자세한 내용은 별도 포스트에서 다루도록 하겠습니다.

---

## 7. ISO 빌드

레지스트리에 업로드한 이미지를 설치 가능한 ISO 파일로 변환합니다. 이 작업에는 `bootc-image-builder` 도구를 사용합니다.

```bash
sudo podman run \
  --rm \
  -it \
  --privileged \
  --pull=newer \
  --security-opt label=type:unconfined_t \
  -v $(pwd)/config.toml:/config.toml:ro \
  -v $(pwd)/output:/output \
  -v /var/lib/containers/storage:/var/lib/containers/storage \
  quay.io/centos-bootc/bootc-image-builder:latest \
  --type iso \
  --config /config.toml \
  docker.io/myusername/centos10-kde-bootc:v1

```

명령어가 다소 복잡해 보일 수 있습니다. 그리고 또, 각 옵션을 살펴보면 몇 가지 궁금한 점이 생깁니다.

- `--privileged`가 필요한 이유는 무엇인지, 
- `-v /var/lib/containers/storage:/var/lib/containers/storage`는 어떤 역할을 하는지, 
- `--type iso` 외에 다른 옵션에는 어떤 것들이 있는지 등…
이러한 세부 사항은 별도의 포스트에서 자세히 다루도록 하겠습니다. 현재 단계에서는 "이 명령을 실행하면 ISO 파일이 생성된다"는 점만 이해하고 진행하시면 됩니다.

빌드가 완료되면 `output` 디렉토리에 ISO 파일이 생성됩니다.

```bash
ls -lh output/bootiso/

```

`install.iso` 또는 비슷한 이름의 파일이 보일 것입니다.

---

## 8. USB 부팅 미디어 제작 및 설치

이제 빌드된 ISO 파일을 USB에 굽는 작업을 시행하면 됩니다. BalenaEtcher, Rufus, 또는 Ventoy 등을 사용하시면 됩니다. 이 중에서 하나만 고르자면, 저는 Ventoy를 선호합니다. 한 번 설치해두면 ISO 파일을 간단히 폴더 안에만 넣어도 해도 부팅 가능한 상태가 되기 때문이지요… 관리가 용이합니다.

그리고 이제 USB를 대상 컴퓨터에 꽂고 부팅해주세요. BIOS에서 USB 부팅 우선순위를 높여야 할 수도 있습니다.

부팅하면 익숙한 화면이 나타납니다. RHEL이나 Fedora를 설치해본 적이 있다면 알아보실 겁니다. anaconda 설치 프레임워크입니다.

근데 이상한게 하나 있습니다! 컨테이너 이미지로 OS를 배포한다면서, 왜 전통적인 설치 화면이 뜨는 걸까요? 이것도 나중에 풀어야 할 의문입니다.


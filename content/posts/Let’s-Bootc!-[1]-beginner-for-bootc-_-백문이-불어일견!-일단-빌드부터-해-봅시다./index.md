---
title: "Let’s Bootc! [1] - beginner for bootc : 백문이 불어일견! 일단 빌드부터 해 봅시다."
date: 2026-01-25T05:55:00.000Z
draft: false
tags: ["Docker", "Infra"]
series: ["Meet The Bootc"]
description: "Top-Down 방식으로 CentOS Stream 10 기반의 GUI 환경을 구축하는 실습을 진행하며, Podman을 사용하여 bootc 컨테이너 이미지를 생성하고 배포하는 과정을 설명합니다. 사용자 계정 설정, Containerfile 작성, 이미지 빌드 및 레지스트리 업로드, ISO 파일 변환, USB 부팅 미디어 제작, 업데이트 및 롤백 테스트를 포함한 12단계의 흐름을 통해 부팅 가능한 컨테이너의 기본 사이클을 경험하게 됩니다. 각 단계에서 발생할 수 있는 의문점들도 후속 포스트에서 다룰 예정입니다."
notion_id: "2f31bab9-e3f8-8002-9c73-d0c7b1f5ce1e"
notion_url: "https://www.notion.so/Let-s-Bootc-1-beginner-for-bootc-2f31bab9e3f880029c73d0c7b1f5ce1e"
---

# Let’s Bootc! [1] - beginner for bootc : 백문이 불어일견! 일단 빌드부터 해 봅시다.

> **Summary**
> Top-Down 방식으로 CentOS Stream 10 기반의 GUI 환경을 구축하는 실습을 진행하며, Podman을 사용하여 bootc 컨테이너 이미지를 생성하고 배포하는 과정을 설명합니다. 사용자 계정 설정, Containerfile 작성, 이미지 빌드 및 레지스트리 업로드, ISO 파일 변환, USB 부팅 미디어 제작, 업데이트 및 롤백 테스트를 포함한 12단계의 흐름을 통해 부팅 가능한 컨테이너의 기본 사이클을 경험하게 됩니다. 각 단계에서 발생할 수 있는 의문점들도 후속 포스트에서 다룰 예정입니다.

---

![Image](image_430c610bee98.png)

![Image](image_8d328611fa5d.png)

# [1] beginner for bootc : Quick Starter!

백문이 불여일견이라고, 저는 Top-Down 방식을 통해 이 시리즈를 풀어내보려 합니다.

원리를 먼저 설명하고 실습으로 넘어가는 게 교과서적인 순서겠지만, 지루하지 않습니까..?

그러한 이유로, 이 시리즈에서는 Top-down 방식을 고수하려 합니다.무엇보다, 직접 만들어보기 전까지는 "왜 이걸 알아야 하는지"가 와닿지 않기 때문이기도 합니다. 그래서 먼저 만들어보고, 구동되는 것을 확인하는 것부터 시작해볼겁니다.

물론 처음에는 단순히 따라 하기만 될 거기 때문에 하나하나 진행하다 보면 의문점이 생길것입니다.

“이게 무엇인지…”, “왜 이 방식을 쓰고 왜 이렇게 구성했는지…”, “내가 지금 뭘 따라 하고 있는 건지…” 헷갈리는 게 많고 의문도 많을 테지요, 일단은 단계별로 하나씩 자세히 풀어가고자 하며, 그때 생기는 의문들이 이후 포스트의 출발점이 될 것이니 일단 한번 따라와 보시기 바랍니다.

---

## 오늘 만들 것

오늘 실습에서는 CentOS Stream 10 기반의 GUI 환경을 구축해보려 합니다. 저는 개인적으로는 KDE를 선호하기 때문에 KDE Plasma 데스크톱 환경을 올릴 예정입니다. GNOME이 더 익숙한 분들도 있겠지만, 패키지 그룹만 바꾸면 되니 큰 차이는 없습니다.

아키텍처는 x86_64 기반으로 작성할겁니다. WSL2든, 인텔 맥이든, 일반 PC든 CISC기반의 x86_64이기만 하면 됩니다. RISC기반의 ARM 기반 환경에서는 크로스 컴파일 이슈를 고려해야하니, 이 시리즈 에서는 다루지 않으려 합니다.

빌드하기 전에 저장 용량에 대해서도 한 가지 짚고 넘어가야 됩니다. Podman을 사용해서 컨테이너 이미지를 빌드하고 이미지를 ISO로 변환하는 과정에서 디스크 공간이 상당히 필요합니다. 그래서 최소한 50GB 정도는 확보해 두는 것을 권장드립니다.

빌드 중에 공간이 부족해서 실패하면 처음부터 다시 해야 되는데, 그 시간이 굉장히 아깝기 때문이죠. 여러분들의 시간을 지켜드리겠습니다. (하하)

---

## 전체 흐름

자 그럼 각설하고, 오늘 밟을 과정을 먼저 정리해보고 시작하도록 하시죠.

- 첫째, bootc 컨테이너 이미지를 생성한다. Containerfile을 작성하고, Podman으로 빌드한다.
- 둘째, 이미지를 배포한다. 여기서 "배포"라는 말이 두 가지 의미를 갖는다. 
  - 하나는 레지스트리(Docker Hub, GHCR 등)에 푸시하는 것이고,
  - 다른 하나는 ISO 파일로 변환해서 USB에 굽는 것이다. 
  - 둘 다 필요하다. USB로 초기 설치를 하고, 이후 업데이트는 레지스트리를 통해 받는 구조다.
- 셋째, 대상 컴퓨터에 설치한다. USB로 부팅해서 디스크에 OS를 깔고, 설치된 시스템이 레지스트리를 제대로 바라보는지 확인한다.
- 넷째, 업데이트를 테스트한다. 빌드 환경에서 이미지를 수정하고 레지스트리에 다시 올린다. 대상 컴퓨터에서 `bootc upgrade`를 실행해서 변경 사항이 반영되는지 확인한다.
- 다섯째, 롤백을 테스트한다. 업데이트에 문제가 생겼을 때 이전 버전으로 돌아갈 수 있는지 확인한다.
이 다섯 단계를 모두 거쳐야 bootc의 기본적인 워크플로우를 체험했다고 할 수 있습니다.

![Image](image_371c173adeff.png)

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

### 1-2. (Optional) WSL2 환경에서의 추가 설정

Windows의 WSL2에서 Podman을 사용할 경우, systemd 활성화가 필요합니다. Podman이 systemd에 의존하기 때문입니다.

```bash
# WSL 설정 파일 생성/수정
sudo bash -c 'printf "[boot]\\nsystemd=true\\n" > /etc/wsl.conf'
```

그 후 PowerShell에서 WSL을 재시작합니다.

```powershell
wsl --shutdown
```

재시작 후 Ubuntu를 다시 열면 systemd가 활성화됩니다.

> 참고: WSL2 + Ubuntu 24.04 조합을 권장합니다. Apple Silicon Mac에서 x86_64 이미지를 크로스 빌드하면 QEMU 에뮬레이션으로 인해 빌드가 불안정할 수 있습니다. 네이티브 x86_64 환경인 WSL2에서 빌드하는 것이 안정적입니다. 또한 Ubuntu 22.04 이하는 Podman 버전이 오래되어 bootc와 호환성 문제가 발생할 수 있습니다.

### 1-4. 레지스트리 계정 준비

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

- **방법 1: openssl 사용 (macOS, Linux 공통)**
```bash
# SHA512 해시 생성 (비밀번호 입력 프롬프트가 뜸)
openssl passwd -6

```

  명령을 실행하면 비밀번호 입력 프롬프트가 표시됩니다. 비밀번호를 입력하면 `$6$`로 시작하는 긴 문자열이 출력되며, 이것이 SHA512 해시값입니다.

```bash
# 출력 예시
$6$rounds=656000$randomsalt$Abc123...긴문자열...xyz

```

- **방법 2: mkpasswd 사용 (Linux)**
```bash
# Debian/Ubuntu
sudo apt install whois
mkpasswd -m sha512crypt

# Fedora/RHEL
sudo dnf install mkpasswd
mkpasswd -m sha512crypt
```

- **방법 3: Docker/Podman으로 mkpasswd 실행 (OS 무관)**
  macOS와 같이 mkpasswd가 기본적으로 제공되지 않는 환경에서 유용한 방법입니다.

```bash
podman run -it --rm alpine mkpasswd -m sha512 "내비밀번호"
```

- **방법 4: Python crypt 모듈 사용 (Python 3 설치 환경)**
  Python이 설치된 환경에서 간편하게 사용할 수 있는 방법입니다.

```bash
python3 -c 'import crypt; print(crypt.crypt("내비밀번호", crypt.mksalt(crypt.METHOD_SHA512)))'

```

  비밀번호를 명령어에 직접 입력하는 방식이므로, 히스토리에 남지 않도록 주의하세요. 보안이 중요한 환경에서는 방법 1이나 2를 권장합니다.

어떤 방법을 사용하든 결과물은 `$6$`로 시작하는 문자열이며, 이 값을 config.toml 파일에 입력하면 됩니다.

참고로, `$6$`은 SHA512 알고리즘을 나타내고, `$5$`는 SHA256 알고리즘을 나타냅니다. 보안 강화를 위해 SHA512 사용을 권장합니다.

---

## 3. config.toml 작성

config.toml은 bootc-image-builder가 ISO를 생성할 때 참조하는 설정 파일입니다. 작업 디렉토리를 생성하고 config.toml 파일을 만들어 보겠습니다.

```bash
mkdir ~/bootc-project
cd ~/bootc-project
```

아래 두 가지 옵션 중 하나를 선택하여 `config.toml` 파일을 생성하세요.

**옵션 1: 기본 설정 (간단, 자동 파티셔닝)**

```toml
# 사용자 계정 정의 (설치 시 자동 생성됨)
[[customizations.user]]
name = "myuser"                          # 로그인할 사용자명
password = "$6$여기에_생성한_해시값_붙여넣기"  # 앞서 생성한 SHA512 해시
groups = ["wheel"]                       # wheel 그룹: sudo 권한 부여

# [선택사항] 여러 사용자 추가
# [[customizations.user]]
# name = "developer"
# password = "$6$..."
# groups = ["wheel", "docker"]

# [선택사항] SSH 키 추가
# [[customizations.user]]
# name = "myuser"
# password = "$6$..."
# key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB... user@example.com"
# groups = ["wheel"]

```

**옵션 2: GUI 설치 + kickstart (권장, 수동 파티셔닝 가능)**

```toml
# 커널 부팅 옵션 (디버깅 시 부팅 로그 확인용)
[customizations.kernel]
append = "console=tty0 systemd.show_status=true"

# Kickstart 자동 설치 스크립트
[customizations.installer.kickstart]
contents = """
# GUI 모드: anaconda 그래픽 인터페이스로 설치
# (text: 텍스트 모드, text --non-interactive: 완전 자동)
graphical
lang en_US.UTF-8
keyboard us

# 사용자 계정 생성 (kickstart 사용 시 [[customizations.user]] 블록 불필요)
user --name=myuser --groups=wheel --password=$6$여기에_생성한_해시값 --iscrypted

# 네트워크 자동 설정
network --bootproto=dhcp --device=link --activate --onboot=yes

# 설치 완료 후 실행할 스크립트
%post
# 유선 연결 자동 연결 설정
nmcli connection modify "Wired connection 1" connection.autoconnect yes 2>/dev/null || true

# SDDM 디스플레이 매니저 활성화 (KDE용)
systemctl enable sddm
systemctl set-default graphical.target
%end

# 설치 완료 후 자동 재부팅
reboot
"""

```

> 어떤 옵션을 선택해야 할까요?
> - **옵션 1**: 빠르게 테스트하고 싶을 때. 자동 파티셔닝으로 간단히 설치.
> - **옵션 2**: 듀얼 부트나 커스텀 파티셔닝이 필요할 때. anaconda GUI로 디스크를 직접 선택 가능.
>

---

## 4. Containerfile 작성

이제 OS 이미지의 내용을 정의하는 Containerfile을 작성하도록 합니다.

```docker
FROM quay.io/centos-bootc/centos-bootc:stream10

# CRB(CodeReady Builder) 저장소 활성화 - 개발/빌드 도구에 필요
# EPEL 저장소 추가 - 추가 패키지 제공
RUN dnf config-manager --set-enabled crb && \\
    dnf install -y epel-release && \\
    dnf -y update

# KDE Plasma 데스크톱 환경 설치
RUN dnf -y group install "KDE Plasma Workspaces"

# SDDM 디스플레이 매니저 및 필수 패키지 설치
RUN dnf -y install sddm dolphin konsole kate firefox \\
    NetworkManager-wifi NetworkManager-tui

# 한글 폰트 및 입력기
RUN dnf -y install langpacks-ko ibus ibus-hangul ibus-setup dconf

# SDDM 활성화 및 그래픽 타겟 설정
RUN systemctl enable sddm && \\
    systemctl set-default graphical.target

# wheel 그룹에 대해 sudo 권한 설정 (비밀번호 필요)
RUN echo "%wheel ALL=(ALL) ALL" > /etc/sudoers.d/wheel-sudo

# 캐시 정리
RUN dnf clean all

# bootc 이미지임을 나타내는 레이블 (필수)
LABEL containers.bootc=1
LABEL ostree.bootable=1


```

**Containerfile 작성 시 주의사항:**

| 항목 | 설명 |
| --- | --- |
| CRB/EPEL | CentOS에서 많은 패키지가 이 저장소에 있으므로 먼저 활성화 |
| `systemctl enable` | 컨테이너 빌드 시점에 서비스 활성화 가능 |
| `LABEL` | `containers.bootc=1`과 `ostree.bootable=1`은 bootc 이미지임을 명시 |
| RUN 병합 | 여러 명령을 `&&`로 연결하면 레이어 수가 줄어 이미지 크기 최적화 |

`quay.io/centos-bootc/centos-bootc:stream10`이 핵심입니다. 이 베이스 이미지에는 Linux 커널, initramfs, 부트로더 등 부팅에 필요한 모든 구성 요소가 포함되어 있습니다. 우리는 그 위에 필요한 패키지를 추가하기만 하면 됩니다.

여기서 첫 번째 의문점이 생깁니다. 일반적인 컨테이너 이미지는 애플리케이션을 담는 용도인데, 어떻게 OS 전체를 커널까지 담아서 부팅까지 가능한 것일까요? 이 질문에 대한 답은 다음 포스트에서 다루겠습니다.

---

## 5. 이미지 빌드

Containerfile과 config.toml이 준비되었으면 이미지를 빌드합니다.

```bash
cd ~/bootc-project
podman build -t my-centos10-kde:v1 .
```

> WSL2 환경에서는 sudo를 사용하세요:
> ```bash
> sudo podman build -t my-centos10-kde:v1 .
> ```
>
> sudo를 사용하면 root storage에 이미지가 저장되어, 이후 ISO 빌드와 푸시 과정에서 동일한 스토리지를 참조할 수 있습니다.
>
>

빌드에는 시간이 다소 소요됩니다. KDE 패키지 그룹의 크기가 상당하기 때문입니다.

빌드가 완료되면 이미지 크기를 확인해보겠습니다.

```bash
podman images my-centos10-kde
```

일반적으로 5GB에서 10GB 사이의 크기로 빌드됩니다. 추가 패키지를 설치할 경우 15GB를 초과할 수 있습니다.

---

## 6. 레지스트리 업로드

빌드한 이미지를 레지스트리에 업로드 합니다.

### 옵션 A: Docker Hub 사용

```bash
# 태그 붙이기 (docker.io/사용자명/이미지명:태그)
podman tag my-centos10-kde:v1 docker.io/myusername/centos10-kde-bootc:v1

# 푸시
podman push docker.io/myusername/centos10-kde-bootc:v1


```

### 옵션 B: GitHub Container Registry (GHCR) 사용 - 권장

대용량 이미지(10GB+)의 경우 Docker Hub에서 타임아웃이 발생할 수 있습니다. GHCR은 더 안정적인 대안입니다.

```bash
# GHCR 로그인 (GitHub Personal Access Token 필요, write:packages 권한)
podman login ghcr.io -u <github-username>
# Password 프롬프트에 토큰 입력

# 태그 붙이기
podman tag my-centos10-kde:v1 ghcr.io/<username>/centos10-kde-bootc:v1

# zstd 압축으로 푸시 (전송량 감소, 타임아웃 방지)
podman push --compression-format=zstd ghcr.io/<username>/centos10-kde-bootc:v1
```

> 중요: GHCR 패키지는 기본적으로 Private입니다. bootc에서 인증 없이 접근하려면 GitHub 웹사이트에서 패키지 Visibility를 Public으로 변경해야 합니다.

### 태그 작성 시 주의사항

태그를 지정할 때는 반드시 `docker.io/` 또는 `ghcr.io/`까지 포함한 **전체 경로**를 사용해야 합니다. 이후 `bootc switch`나 `bootc upgrade`를 실행할 때 이 전체 경로가 필요하기 때문입니다. 축약형을 사용하면 시스템이 레지스트리를 찾지 못하는 문제가 발생할 수 있습니다.

대용량 이미지를 업로드할 때 Docker Hub에서 연결이 끊기는 문제가 발생할 수 있습니다. 특히 10GB를 초과하는 경우 이러한 현상이 자주 나타날 수 있습니다. 이런 상황에서는 GHCR(GitHub Container Registry)이나, Habor self-hosting 등을 대안으로 고려해볼 수 있으며, 이에 대한 자세한 내용은 별도 포스트에서 다루도록 하겠습니다.

---

## 7. ISO 빌드

레지스트리에 업로드한 이미지를 설치 가능한 ISO 파일로 변환합니다. 이 작업에는 `bootc-image-builder` 도구를 사용합니다.


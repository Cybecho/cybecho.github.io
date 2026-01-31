---
title: "Let’s Bootc! [1] - Quick Starter : 백문이 불어일견!"
date: 2026-01-25T05:55:00.000Z
draft: false
tags: ["Docker", "Infra"]
series: ["Let's Bootc!"]
description: "Top-Down 방식으로 CentOS Stream 10 기반의 GUI 환경을 구축하는 실습을 진행하며, KDE Plasma 데스크톱 환경을 설치하고, Podman을 사용하여 컨테이너 이미지를 빌드하고 ISO 파일로 변환하는 과정을 설명합니다. 과정에는 사용자 계정 설정, 이미지 빌드, 레지스트리 업로드, USB 부팅 미디어 제작, 설치 후 확인 및 업데이트와 롤백 테스트가 포함됩니다. 최종적으로 bootc의 기본적인 사이클을 경험하고, 여러 의문에 대한 후속 포스트를 예고합니다."
notion_id: "2f31bab9-e3f8-8002-9c73-d0c7b1f5ce1e"
notion_url: "https://www.notion.so/Let-s-Bootc-1-Quick-Starter-2f31bab9e3f880029c73d0c7b1f5ce1e"
---

# Let’s Bootc! [1] - Quick Starter : 백문이 불어일견!

> **Summary**
> Top-Down 방식으로 CentOS Stream 10 기반의 GUI 환경을 구축하는 실습을 진행하며, KDE Plasma 데스크톱 환경을 설치하고, Podman을 사용하여 컨테이너 이미지를 빌드하고 ISO 파일로 변환하는 과정을 설명합니다. 과정에는 사용자 계정 설정, 이미지 빌드, 레지스트리 업로드, USB 부팅 미디어 제작, 설치 후 확인 및 업데이트와 롤백 테스트가 포함됩니다. 최종적으로 bootc의 기본적인 사이클을 경험하고, 여러 의문에 대한 후속 포스트를 예고합니다.

---


![Image](image_070eec6c44d8.png)

![Image](image_13479a634b82.png)

# [1] Quick Starter

## Quick Starter!

백문이 불여일견이라고, 저는 Top-Down 방식을 통해 이 시리즈를 풀어내보려 합니다.

원리를 먼저 설명하고 실습으로 넘어가는 게 교과서적인 순서겠지만, 지루하지 않습니까..?

그러한 이유로, 이 시리즈에서는 Top-down 방식을 고수하려 합니다.무엇보다, 직접 만들어보기 전까지는 "왜 이걸 알아야 하는지"가 와닿지 않기 때문이기도 합니다. 그래서 먼저 만들어보고, 구동되는 것을 확인하는 것부터 시작해볼겁니다.

물론 처음에는 단순히 따라 하기만 될 거기 때문에 하나하나 진행하다 보면 의문점이 생길것입니다.

“이게 무엇인지…”, “왜 이 방식을 쓰고 왜 이렇게 구성했는지…”, “내가 지금 뭘 따라 하고 있는 건지…” 헷갈리는 게 많고 의문도 많을 테지요, 일단은 단계별로 하나씩 자세히 풀어가고자 하며, 그때 생기는 의문들이 이후 포스트의 출발점이 될 것이니 일단 한번 따라와 보시기 바랍니다.


---

## 오늘 만들 것

오늘 실습에서는 CentOS Stream 10 기반의 GUI 환경을 구축해보려 합니다. 저는 개인적으로는 KDE를 선호하기 때문에 KDE Plasma 데스크톱 환경을 올릴 예정입니다. GNOME이 더 익숙한 분들도 있겠지만, 패키지 그룹만 바꾸면 되니 큰 차이는 없습니다.

아키텍처는 x86_64 기반으로 작성할겁니다. WSL2든, 인텔 맥이든, 일반 PC든 CISC기반의 x86_64이기만 하면 됩니다. RISC기반의 ARM 기반 환경에서는 크로스 컴파일 이슈를 고려해야하니, 이 시리즈 에서는 다루지 않으려 합니다.

빌드하기 전에 저장 용량에 대해서도 한 가지 짚고 넘어가야 됩니다. Podman을 사용해서 컨테이너 이미지를 빌드하고 이미지를 ISO로 변환하는 과정에서 디스크 공간이 꽤 필요합니다. 그래서 50GB 정도는 확보해 두는 것을 권장드립니다.

빌드 중에 공간이 부족해서 실패하면 처음부터 다시 해야 되는데, 그 시간이 굉장히 아깝기 때문이죠.


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

![Image](image_7bfc47b2aa09.png)

---

# 실습 Start!

자, 그러면 이제 본격적으로 시작 해 볼까요?

> 참고: Apple Silicon Mac에서 x86_64 이미지를 크로스 빌드하면 QEMU 에뮬레이션으로 인해 빌드가 불안정할 수 있기 때문에, 네이티브 x86_64 Linux환경이나, WSL2 + Ubuntu 24.04 호경에서 빌드하는 것이 안정적입니다. 또한 Ubuntu 22.04 이하는 Podman 버전이 오래되어 bootc와 호환성 문제가 발생할 수 있으니, 버전에 유의해주시길 바랍니다.

---

## 1. 환경 구성

- WSL2 or Linux 환경의 경우 → 1-1 진행 후 1-3으로 이동하세요
- macOS/Windows  환경의 경우 → 1-2 부터 진행 후 1-3으로 이동하세요
### 1-1. WSL2 환경의 경우

WSL2 환경이 아닌 경우, 1-2로 바로 이동하셔도 무관합니다.

```powershell
# WSL2 업데이트
wsl --update

# WSL2 환경이라면, Ubuntu 24.04버전 이상을 권장합니다.
wsl --install -d Ubuntu-24.04

# 버전 확인
wsl -l -v

# Ubuntu24.04 명시적 실행. (보통 install후 자동으로 실행됩니다.)
# wsl -d Ubuntu-24.04
```

재시작 후 Ubuntu를 다시 열면 systemd가 활성화됩니다.

본 실습에서는 bootc 생태계가 Podman을 중심으로 구성되어 있어 Podman을 사용할 것입니다.

```bash
# 패키지 업그레이드 & 업데이트
sudo apt update -y
sudo apt upgrade -y

# Podman + rootless 품질 개선 패키지(권장)
sudo apt install -y podman uidmap slirp4netns fuse-overlayfs

# 버전 확인
podman --version
podman info

#동작 테스트
podman run --rm docker.io/library/alpine:latest uname -a
```

### 1-2. macOS/Windows 환경의 경우

Bootc 빌드를 위한 Podman 머신을 하나 생성해 줍시다.

```bash
# Podman 머신 생성 (디스크 50GB, 메모리 8GB 할당)
podman machine init --rootful --disk-size 50 --memory 8192 podman-machine-bootc

# 생성된 머신 확인
podman machine ls

# 머신 시작
podman machine start podman-machine-bootc
```

머신을 생성하는 과정에서 fedora 이미지를 받아오는것을 확인할 수 있지만, 그보다는 `--rootful` 옵션이 눈에 들어올 겁니다.

해당 옵션을 간단히 말하면, ISO를 만들려면 Linux 파일시스템을 직접 써야 하고, 그건 커널 권한 없이는 불가능합니다. 그래서 rootful이 필요합니다. "그게 정확히 무슨 뜻이지?"라는 의문이 드시는것이 당연합니다만… 해당 포스트는 Quick Starter이니, 이와 관련된 내용은 다음 포스트에서 다루도록 하겠습니다.

지금은 일단 따라 진행합시다.

### 1-3. 레지스트리 계정 준비

이제 빌드한 bootc 이미지를 업로드할 레지스트리 계정이 필요합니다. Docker Hub 또는 GitHub Container Registry(GHCR), Habor중 취향에 맞게 하나를 선택하시면 됩니다.

본 글에서는 Docker Hub를 기준으로 설명하겠습니다.

```bash
# Docker Hub 로그인
# Username 및 Password(Token) 입력
sudo podman login docker.io
```

---

## 2. 사용자 비밀번호 해시 생성

bootc 이미지에는 기본 사용자 계정이 포함되어 있지 않습니다. 설치 후 시스템에 로그인하려면 사용자 계정을 사전에 구성해야 하며, 이는 config.toml 파일을 통해 설정합니다.

이렇게 사용자를 미리 생성하게 된다면, 미리 비밀번호를 빌드시점에 설정해둘 수 있는데, 이는 보안을 고려할 때, config.toml에 비밀번호를 평문으로 저장하는 것은 권장되지 않습니다. 특히 이미지를 공개 레지스트리에 업로드할 경우 더욱 그렇습니다. 이러한 이유로 SHA512 해시 알고리즘을 사용하여 암호화된 비밀번호를 설정하는 것이 적절합니다.

비밀번호 해시를 생성하는 방법은 다음과 같습니다.

넷 중 아무거나 하나로 진행하셔도 무방합니다. 이 튜토리얼 에서는, **방법 1** 을 통해 진행하도록 하겠습니다.

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

<details>
<summary>**방법 4: Python crypt 모듈 사용 (Python 3 설치 환경)**</summary>

Python이 설치된 환경에서 간편하게 사용할 수 있는 방법입니다.

```bash
python3 -c 'import crypt; print(crypt.crypt("내비밀번호", crypt.mksalt(crypt.METHOD_SHA512)))'
```

</details>

![Image](image_1af019be3a0b.png)

일단 저는 임의대로 비밀번호를 `0000` 으로 입력했을때 발생하는 해시값을 확인할 수 있습니다…^^

비밀번호를 명령어에 직접 입력하는 방식이므로, 히스토리에 남지 않도록 주의하세요. 보안이 중요한 환경에서는 방법 1이나 2를 권장합니다.

어떤 방법을 사용하든 결과물은 `$6$`로 시작하는 문자열이며, 이 값을 config.toml 파일에 입력하면 됩니다.

참고로, `$6$`은 SHA512 알고리즘을 나타내고, `$5$`는 SHA256 알고리즘을 나타냅니다. 보안 강화를 위해 SHA512 사용을 권장합니다.

---

## 3. config.toml 작성

config.toml은 bootc-image-builder가 ISO를 생성할 때 참조하는 설정 파일입니다. 

작업 디렉토리를 생성하고 config.toml 파일을 만들어 보겠습니다.

```bash
mkdir ~/bootc-project
cd ~/bootc-project
```

아래 두 가지 옵션 중 하나를 선택하여 `config.toml` 파일을 생성하세요.

**옵션 1: 기본 설정 (간단, 자동 파티셔닝)**

```toml
cat > config.toml <<'EOF'
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
EOF

```

**옵션 2: GUI 설치 + kickstart (권장, 수동 파티셔닝 가능)**

```toml
cat > config.toml <<'EOF'
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
EOF
```

> 옵션 선택 기준은 다음과 같습니다.
> - **옵션 1**: 빠르게 테스트하고 싶을 때. 자동 파티셔닝으로 간단히 설치.
> - **옵션 2**: 듀얼 부트나 커스텀 파티셔닝이 필요할 때. anaconda GUI로 디스크를 직접 선택 가능.
>

---

## 4. Containerfile 작성

이제 OS 이미지의 내용을 정의하는 Containerfile을 작성하도록 합니다.

```docker
cat > Containerfile <<'EOF'
FROM quay.io/centos-bootc/centos-bootc:stream10

# CRB(CodeReady Builder) 저장소 활성화 - 개발/빌드 도구에 필요
# EPEL 저장소 추가 - 추가 패키지 제공
RUN dnf config-manager --set-enabled crb && \
    dnf install -y epel-release && \
    dnf -y update

# KDE Plasma 데스크톱 환경 설치
RUN dnf -y group install "KDE Plasma Workspaces"

# SDDM 디스플레이 매니저 및 필수 패키지 설치
RUN dnf -y install sddm dolphin konsole kate firefox \
    NetworkManager-wifi NetworkManager-tui

# 한글 폰트 및 입력기
RUN dnf -y install langpacks-ko ibus ibus-hangul ibus-setup dconf

# SDDM 활성화 및 그래픽 타겟 설정
RUN systemctl enable sddm && \
    systemctl set-default graphical.target

# wheel 그룹에 대해 sudo 권한 설정 (비밀번호 필요)
RUN echo "%wheel ALL=(ALL) ALL" > /etc/sudoers.d/wheel-sudo

# 캐시 정리
RUN dnf clean all

# bootc 이미지임을 나타내는 레이블 (필수)
LABEL containers.bootc=1
LABEL ostree.bootable=1
EOF

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
sudo podman build -t my-centos10-kde:v1 .
```

> sudo를 붙이는 이유는, Podman이 일반 사용자(rootless)로 빌드한 이미지와 root(rootful)로 빌드한 이미지를 서로 다른 저장소에 따로 보관하기 때문입니다. 
> 우리는 최종 목표가 이 이미지를 기반으로 ISO(디스크 이미지)를 만드는 것이고, ISO를 만드는 과정(예: bootc-image-builder)은 보통 root 권한으로 실행되면서 root 저장소(`/var/lib/containers/storage`)에 있는 이미지만 바로 참조합니다. 
>
> 그래서 빌드 단계부터 sudo를 붙여 root 저장소에 이미지를 만들어 두면, 이후 ISO 빌드 단계가 같은 이미지를 “그대로” 찾아서 이어서 작업할 수 있고, 중간에 이미지가 안 보여서 다시 빌드하거나 저장소 간 복사/재배포 같은 번거로운 작업을 피할 수 있습니다.
>
>

![Image](image_ce8aeedca7ae.png)

빌드에는 시간이 다소 소요됩니다. KDE 패키지 그룹의 크기가 상당하기 때문입니다.

빌드가 완료되면 이미지 크기를 확인해보겠습니다.

```bash
sudo podman images my-centos10-kde
```

![Image](image_34758b9a0919.png)

일반적으로 5GB에서 10GB 사이의 크기로 빌드됩니다. 추가 패키지를 설치할 경우 15GB를 초과할 수 있습니다.

---

## 6. 레지스트리 업로드

빌드한 이미지가 Local이 아닌, DockerHub를 가르키도록 태그를 설정하고, Docker Hub 레지스트리에 이미지를 업로드 합니다.

```bash
# 태그 붙이기 (docker.io/사용자명/이미지명:태그)
sudo podman tag my-centos10-kde:v1 docker.io/${USERNAME}/centos10-kde-bootc:v1

# 푸시
sudo podman push docker.io/${USERNAME}/centos10-kde-bootc:v1
```

![Image](image_5b9208a51ff6.png)

### 6-1. 태그 작성 시 주의사항

태그를 지정할 때는 반드시 `docker.io/` 또는 `ghcr.io/`까지 포함한 **전체 경로**를 사용해야 합니다. 이후 `bootc switch`나 `bootc upgrade`를 실행할 때 이 전체 경로가 필요하기 때문입니다. 축약형을 사용하면 시스템이 레지스트리를 찾지 못하는 문제가 발생할 수 있습니다.

대용량 이미지를 업로드할 때 Docker Hub에서 연결이 끊기는 문제가 발생할 수 있습니다. 특히 10GB를 초과하는 경우 이러한 현상이 자주 나타날 수 있습니다. 이런 상황에서는 GHCR(GitHub Container Registry)이나, Habor self-hosting 등을 대안으로 고려해볼 수 있으며, 이에 대한 자세한 내용은 별도 포스트에서 다루도록 하겠습니다.

### 6-2. [hub.docker.com](http://hub.docker.com/) 에서 이미지 확인

업로드한 저장소로 접속하여 정상적으로 업로드가 된 것을 확인해 보도록 합시다.

![Image](image_2f7c25eb2b1a.png)

---

## 7. ISO 빌드

자, 이제 레지스트리에 업로드한 이미지를 설치 가능한 ISO 파일로 변환하는 작업을 시행하도록 합니다. 이 작업에는 `bootc-image-builder` 도구를 사용합니다.

```bash
# output 디렉토리 생성
mkdir -p output

sudo podman run \
  --rm \
  -it \
  --privileged \
  --pull=newer \
  --security-opt label=type:unconfined_t \
  -v "$(pwd)/config.toml:/config.toml:ro" \
  -v "$(pwd)/output:/output" \
  -v /var/lib/containers/storage:/var/lib/containers/storage \
  quay.io/centos-bootc/bootc-image-builder:latest \
  --type iso \
  --target-arch x86_64 \
  --config /config.toml \
  docker.io/${USERNAME}/centos10-kde-bootc:v1
```

> x86_64 아키텍처 지정: --target-arch x86_64 옵션을 추가하여 명시적으로 x86_64(AMD64) 아키텍처용 ISO를 생성합니다. Apple Silicon Mac 등에서 빌드할 경우 이 옵션이 없으면 ARM64 이미지가 생성될 수 있습니다.

**주요 옵션 설명:**

| 옵션 | 설명 |
| --- | --- |
| `--privileged` | 루프백 디바이스, 파일시스템 마운트 등 ISO 생성에 필요한 권한 |
| `--security-opt label=type:unconfined_t` | SELinux 제약 해제 |
| `-v .../containers/storage:...` | 로컬 이미지 스토리지 공유 (pull 없이 로컬 이미지 사용) |
| `--type iso` | 출력 타입 (iso, qcow2, vmdk, raw, ami 등) |
| `--target-arch` | 대상 아키텍처 (x86_64, aarch64) |
| `--config` | config.toml 경로 |

현재 단계에서는 "이 명령을 실행하면 ISO 파일이 생성된다"는 점만 이해하고 진행하시면 됩니다.

빌드가 완료되면 `output` 디렉토리에 ISO 파일이 생성됩니다.

```bash
ls -lh output/bootiso/
```

`install.iso` 또는 비슷한 이름의 파일이 보일 것입니다.

![Image](image_df4953a09848.png)

---

## 8. USB 부팅 미디어 제작 및 설치

이제 빌드된 ISO 파일을 USB에 굽는 작업을 시행하면 됩니다. BalenaEtcher, Rufus, 또는 Ventoy 등을 사용하시면 됩니다. 이 중에서 하나만 고르자면, 저는 관리가 용이한 Ventoy를 선호합니다. 한 번 설치해두면 ISO 파일을 간단히 폴더 안에만 넣어도 해도 부팅 가능한 상태가 되기 때문이지요… 

Ventoy 다운로드 및 사용법은 아래 링크들을 참고해주세요.

🔗 [https://www.ventoy.net/en/download.html](https://www.ventoy.net/en/download.html)

🔗 [https://devpro.kr/posts/Ventoy%EB%A1%9C-%EB%B6%80%ED%8C%85-USB-%EB%A7%8C%EB%93%A4%EA%B8%B0/](https://devpro.kr/posts/Ventoy%EB%A1%9C-%EB%B6%80%ED%8C%85-USB-%EB%A7%8C%EB%93%A4%EA%B8%B0/)

부팅 가능한 USB를 제작하셨다면, 이제 USB를 대상 컴퓨터에 꽂고 부팅해주세요. (BIOS에서 USB 부팅 우선순위를 높여야 할 수도 있습니다.)


부팅하면 익숙한 화면이 나타납니다. 

RHEL이나 Fedora를 설치할때볼 수 있는 바로 anaconda 설치 프레임워크입니다.

> GUI vs 자동 설치
> config.toml의 kickstart 설정에 따라 설치 방식이 달라집니다.
>
>

| kickstart 옵션 | 설치 방식 |
| --- | --- |
| `graphical` | GUI 설치 - anaconda 그래픽 인터페이스로 디스크 선택 등 수동 설정 |
| `text` | 텍스트 설치 - 터미널 기반 인터페이스 |
| `text --non-interactive` | 완전 자동 설치 - 사용자 입력 없이 진행 |

이 튜토리얼에서 저와 동일하게 config.toml 예시에 `graphical`을 사용했다면, 설치 시에 anaconda GUI가 표시됩니다. 디스크 파티셔닝을 수동으로 설정하거나, 듀얼 부트 환경을 구성할 때 유용합니다.

설치 과정은 일반적인 RHEL 계열 설치와 동일합니다. 디스크 파티션을 설정하고, 시간대를 선택하고, 설치를 진행합니다. config.toml에서 정의한 사용자 계정은 자동으로 생성됩니다.

설치가 완료되면 재부팅합니다.

---

## 9. 설치 후 확인

재부팅 후 SDDM 로그인 화면이 나타나면 설치가 성공적으로 완료된 것입니다. config.toml에서 설정한 사용자 이름과 비밀번호로 로그인합니다.

터미널을 열어 몇 가지 사항을 확인해보겠습니다.

```bash
# 현재 부팅된 이미지 확인
bootc status
```

출력 결과에서 `image` 항목을 확인합니다. `docker.io/myusername/centos10-kde-bootc:v1`와 같이 레지스트리 경로가 표시되어야 합니다.

```bash
# 출력 예시
Booted image: docker.io/myusername/centos10-kde-bootc:v1
    Digest: sha256:abc123...
    Version: ...
```

경로가 올바르게 설정되지 않은 경우 `bootc switch` 명령을 통해 레지스트리를 바라보는 경로를 클라우드 저장소에 올라간 위치로 변경할 수 있습니다.

```bash
sudo bootc switch docker.io/myusername/centos10-kde-bootc:v1
```

이제 시스템이 해당 레지스트리의 이미지를 참조하게 됩니다.

sudo가 정상적으로 작동하는지도 확인합니다.

```bash
sudo whoami
```

`root`가 출력되면 wheel 그룹 설정이 올바르게 적용된 것입니다.

---

## 10. 업데이트 테스트

이제 업데이트 사이클을 테스트해보겠습니다. 먼저 이미지에 변경 사항을 적용합니다.

빌드 환경으로 돌아가서 Containerfile을 수정합니다. 변경 사항을 쉽게 확인할 수 있도록 fastfetch 패키지를 추가하겠습니다.

```docker
FROM quay.io/centos-bootc/centos-bootc:stream10

# ... 기존 내용 ...

# 변경 확인용 패키지 추가
RUN dnf -y install fastfetch
```

수정이 완료되면 다시 빌드하고 레지스트리에 푸시합니다.

```bash
podman build -t my-centos10-kde:v2 .
podman tag my-centos10-kde:v2 docker.io/myusername/centos10-kde-bootc:v2
podman push docker.io/myusername/centos10-kde-bootc:v2
```

대상 컴퓨터에서 업그레이드를 실행합니다.

```bash
# 새 버전으로 전환
sudo bootc switch docker.io/myusername/centos10-kde-bootc:v2

# 또는 같은 이미지의 최신 버전으로 업그레이드
# sudo bootc upgrade
```

업그레이드가 완료되면 시스템을 재부팅합니다.

```bash
sudo reboot
```

재부팅 후 `fastfetch`를 실행해봅니다. 정상적으로 실행된다면 업데이트가 성공적으로 적용된 것입니다.

여기서 흥미로운 점이 있습니다. 재부팅 속도가 예상보다 빠릅니다. 일반적인 dnf 업데이트 후 재부팅에 비해 상당히 빠른 편인데, 이유가 무엇일까요? OSTree와 연관이 있다는데, 정확한건 추후 포스트로 하나씩 풀어가도록 하겠습니다.

---

## 11. 롤백

OS가 fastfetch가 설치된 상태로 업데이트 되었습니다.

업데이트가 되었다는건? 문제가 생겼을 때 이전 버전으로 돌아가는 것도 가능하다는 소리겠지요.

```bash
sudo bootc rollback
sudo reboot
```

재부팅하면 이전 버전으로 돌아가게 됩니다. `fastfetch`가 없어진 것을 확인할 수 있습니다.

```bash
# 현재 상태 확인
bootc status
```

롤백 이미지와 부팅된 이미지가 표시됩니다.

이 롤백 기능은 bootc의 핵심 가치 중 하나입니다. 업데이트 실패나 문제 발생 시 즉시 이전 상태로 복구할 수 있습니다. 기존 패키지 매니저로는 이러한 원자적 롤백이 어렵습니다.

---

## 12. 축하드립니다! bootc의 기본적인 흐름을 완수하셨습니다!

축하드립니다! 이제 부팅 가능한 컨테이너인 bootc의 기본적인 사이클을 모두 경험하셨습니다. 생각보다 과정이 복잡하진 않으셨죠?

명령어 하나하나로만 보면 조금 복잡해 보일 수 있지만, 사실 이 과정은 우리가 그동안 컨테이너를 만들어 왔던 방식과 크게 다르지 않았습니다.

우리가 함께 진행한 과정은 Containerfile을 생성하고 ISO 이미지를 빌드하는 것부터 시작되었습니다. 이후 컨테이너 이미지를 원격 저장소에 푸시하고, 변경 사항이 필요할 때 OS 내부에서 직접 설치하는 대신 Containerfile을 수정하여 새로운 패키지를 설치하는 단계를 거쳤습니다.

이러한 일련의 과정을 통해 여러분은 언제든지 이전 상태로 되돌릴 수 있으며, 효율적으로 관리 가능한 불변의 OS(Immutable OS)를 성공적으로 구축하셨습니다.

---

## 13. 하지만, 의문이 생길 것이다

허나, 이 과정을 따라하면서 아마 여러 의문이 생겼을 것입니다.

"그냥 Docker 이미지인 것 같은데, 왜 부팅이 되지?"

"[quay.io/centos-bootc/centos-bootc:stream10](http://quay.io/centos-bootc/centos-bootc:stream10) 이 베이스 이미지에는 뭐가 들어있는 거지?"

"왜 설치 화면에 anaconda가 뜨지?"

"config.toml 파일은 정확히 무슨 역할을 하지? kickstart와는 뭐가 다른 거지?"

"재부팅이 왜 이렇게 빠르지?"

"Containerfile에서 왜 어떤 건 되고 어떤 건 안 되지?"

"bootc-image-builder 명령어의 그 긴 옵션들은 각각 무슨 의미지?"

"ISO로 굽는 것과 레지스트리에 올리는 것과 bootc switch, 이 행위들이 어디서 어떻게 연결되는 거지?"

이 의문들은 이후 포스트에서 하나씩 풀어가도록 하시죠!

다음 포스트에서는 첫 번째 질문, "컨테이너가 어떻게 OS가 되는가?" 에 대해 OCI 표준과 bootc 이미지의 구조를 살펴보겠습니다.

## Reference

[https://docs.redhat.com/ko/documentation/red_hat_enterprise_linux/10/html/using_image_mode_for_rhel_to_build_deploy_and_manage_operating_systems/deploying-the-rhel-bootc-images](https://docs.redhat.com/ko/documentation/red_hat_enterprise_linux/10/html/using_image_mode_for_rhel_to_build_deploy_and_manage_operating_systems/deploying-the-rhel-bootc-images)


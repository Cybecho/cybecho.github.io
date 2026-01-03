---
title: "Podman에서 bootC로 centOS GUI 굽는 과정을 파헤쳐보자"
date: 2026-01-03T02:14:00.000Z
draft: false
tags: ["Docker"]
series: ["Infra & Network"]
description: "Podman을 사용하여 centOS GUI를 구축하는 과정은 Rootful 모드에서의 Podman Machine 재설정, 비밀번호 해시 생성, Containerfile 및 config.toml 작성, 이미지 빌드 및 푸시, ISO 빌드와 확인으로 구성된다. 각 단계에서 Podman VM과의 상호작용을 통해 이미지 생성 및 관리가 이루어지며, 최종적으로 생성된 ISO 파일은 Mac에서 설치할 수 있다."
notion_id: "2dd1bab9-e3f8-80c7-874b-f7b1ad21da7a"
notion_url: "https://www.notion.so/Podman-bootC-centOS-GUI-2dd1bab9e3f880c7874bf7b1ad21da7a"
---

# Podman에서 bootC로 centOS GUI 굽는 과정을 파헤쳐보자

> **Summary**
> Podman을 사용하여 centOS GUI를 구축하는 과정은 Rootful 모드에서의 Podman Machine 재설정, 비밀번호 해시 생성, Containerfile 및 config.toml 작성, 이미지 빌드 및 푸시, ISO 빌드와 확인으로 구성된다. 각 단계에서 Podman VM과의 상호작용을 통해 이미지 생성 및 관리가 이루어지며, 최종적으로 생성된 ISO 파일은 Mac에서 설치할 수 있다.

---


# bootC로 centOS GUI 굽는 과정…

Podman Rootful 모드로 재설정 및 ISO 빌드 전체 과정

## 0단계: Podman Machine 재설정 (Rootful 모드)

```bash
# 기존 machine 정지 및 삭제
podman machine stop
podman machine rm

# Rootful 모드로 재생성 (디스크 50GB)
podman machine init --rootful --disk-size 50

# 시작
podman machine start

```

## 1단계: 비밀번호 해시 생성 (Linux에서만 가능)

```bash
python3 -c 'import crypt; print(crypt.crypt("원하는비밀번호", crypt.mksalt(crypt.METHOD_SHA512)))'

```

## 2단계: Containerfile & config.toml 생성

```bash
cd /Users/sbu/SBU/bootC
```

```bash
cat > Containerfile << 'EOF'
FROM quay.io/centos-bootc/centos-bootc:stream9

RUN dnf install -y epel-release && \
    dnf config-manager --set-enabled crb && \
    dnf update -y

RUN dnf groupinstall -y "KDE Plasma Workspaces" "base-x" && \
    dnf install -y \
    sddm \
    dolphin \
    konsole \
    kate \
    firefox \
    NetworkManager-wifi \
    ibus-hangul \
    && dnf clean all

RUN systemctl enable sddm && \
    systemctl set-default graphical.target && \
    systemctl enable NetworkManager

LABEL containers.bootc=1
LABEL ostree.bootable=1
EOF
```

```bash
cat > config.toml << 'EOF'
[customizations.installer.kickstart]
contents = """
text --non-interactive
zerombr
clearpart --all --initlabel
autopart

user --name=sbu --groups=wheel --password=여기에_1단계_해시_붙여넣기 --iscrypted

reboot
"""
EOF
```

## 3단계: 이미지 빌드

```bash
podman build -t centos-kde-bootc:latest .

```

## 4단계: 레지스트리에 푸시

```bash
# 로그인 (Docker Hub 예시)
podman login docker.io

# 태그 지정
podman tag centos-kde-bootc:latest docker.io/your-username/centos-kde-bootc:latest

# 푸시
podman push docker.io/your-username/centos-kde-bootc:latest

```

## 5단계: 이미지 풀 (최신 상태 확인)

```bash
# 로컬 이미지 삭제
podman rmi centos-kde-bootc:latest
podman rmi docker.io/your-username/centos-kde-bootc:latest

# 레지스트리에서 풀
podman pull docker.io/your-username/centos-kde-bootc:latest

# 로컬 태그
podman tag docker.io/your-username/centos-kde-bootc:latest centos-kde-bootc:latest

```

## 6단계: ISO 빌드

```bash
# 기존 output 정리
rm -rf output

# ISO 빌드
podman run --rm -it --privileged \
  --pull=newer \
  -v $(pwd)/config.toml:/config.toml:ro \
  -v $(pwd)/output:/output \
  quay.io/centos-bootc/bootc-image-builder:latest \
  --type iso \
  --target-arch aarch64 \
  --local \
  centos-kde-bootc:latest

```

## 7단계: ISO 확인

```bash
ls -lh output/bootiso/install.iso

```

완료 후 `output/bootiso/install.iso`를 UTM에 마운트하여 설치하면 됩니다.

# 무슨 일이 벌어진걸까?

계층 구조의 본질을 파헤쳐보자

함께 천천히 생각해보면서 이 복잡한 구조를 정리해보겠습니다.

## 먼저 근본적인 질문부터 시작하자

Mac에서 Podman을 사용한다는 것이 정확히 무엇을 의미하는가? 이게 핵심이에요.

Linux 컨테이너는 Linux 커널 기능을 사용합니다. 그런데 Mac은 Linux가 아니죠. 그렇다면... 어떻게 작동하는 걸까요?

```plain text
┌─────────────────────────────────────────────────────┐
│  Mac mini M4 (macOS - 물리 하드웨어)                │
│                                                       │
│  ┌─────────────────────────────────────────────┐   │
│  │  Podman VM (QEMU로 실행되는 Linux VM)       │   │
│  │  - Fedora CoreOS 기반                        │   │
│  │  - ARM64 아키텍처                            │   │
│  │                                               │   │
│  │  ┌──────────────────────────────────────┐  │   │
│  │  │ Container Storage                     │  │   │
│  │  │ /var/lib/containers/storage/         │  │   │
│  │  │ (여기에 이미지들이 실제로 저장됨)   │  │   │
│  │  └──────────────────────────────────────┘  │   │
│  │                                               │   │
│  │  ┌──────────────────────────────────────┐  │   │
│  │  │ 실행 중인 컨테이너들                 │  │   │
│  │  │ - bootc-image-builder                │  │   │
│  │  │ - 기타 컨테이너들                     │  │   │
│  │  └──────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────┘   │
│                                                       │
│  /Users/sbu/SBU/bootC/                               │
│  (Mac의 실제 파일시스템)                             │
└─────────────────────────────────────────────────────┘

```

아, 이제 보이기 시작하네요. Mac에서 `podman` 명령어를 실행하면, 실제로는 Podman VM 내부에서 명령이 실행되는 거예요.

## 각 단계별로 무슨 일이 일어나는지 추적해보자

### 1단계: 이미지 빌드 (`podman build`)

```bash
podman build -t centos-kde-bootc:latest .

```

이 명령을 실행하면 어디서 무슨 일이 벌어질까요?

```plain text
Mac 터미널에서 명령 실행
    ↓
Podman CLI가 명령을 Podman VM으로 전달
    ↓
Podman VM 내부에서:
  1. Containerfile 읽기
  2. FROM quay.io/centos-bootc/centos-bootc:stream9 다운로드
  3. 각 RUN 명령 실행 (레이어 생성)
  4. 최종 이미지 생성
    ↓
이미지가 Podman VM의 /var/lib/containers/storage/에 저장됨

```

잠깐, 그런데 Containerfile은 Mac에 있잖아요? 맞아요. Podman은 Mac의 현재 디렉토리를 자동으로 VM과 공유합니다.

### 2단계: 이미지 푸시 (`podman push`)

```bash
podman push docker.io/cybecho/centos-kde-bootc:latest

```

```plain text
Podman VM 내부의 이미지
    ↓
인터넷을 통해 Docker Hub로 업로드
    ↓
Docker Hub 서버에 저장

```

이제 이미지는 세 곳에 존재해요:

- Podman VM 내부 (로컬 캐시)
- Docker Hub (원격 레지스트리)
- 나중에 다른 사람도 pull 가능
### 3단계: 이미지 pull (`podman pull`)

```bash
podman pull docker.io/cybecho/centos-kde-bootc:latest

```

음... 근데 방금 push한 이미지를 왜 다시 pull 하는 거죠? 이미 VM에 있는데?

아, 여기서 중요한 개념이 나옵니다. Podman machine을 삭제하고 재생성했기 때문이에요:

```plain text
podman machine rm
    ↓
Podman VM이 완전히 삭제됨
/var/lib/containers/storage/ 안의 모든 이미지도 사라짐!
    ↓
podman machine init --rootful
    ↓
완전히 새로운 VM이 생성됨
비어있는 스토리지
    ↓
podman pull 필요
Docker Hub에서 다시 다운로드

```

### 4단계: ISO 빌드 - 여기가 가장 복잡해요

이제 핵심으로 들어가봅시다. ISO 빌드 명령어를 해부해보죠:

```bash
podman run \
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
    docker.io/cybecho/centos-kde-bootc:latest

```

이게... 정말 여러 레이어가 겹쳐있네요. 차근차근 풀어봅시다.

## 마운트의 미스터리를 풀어보자

첫 번째 마운트: `-v $(pwd)/config.toml:/config.toml:ro`

```plain text
Mac의 /Users/sbu/SBU/bootC/config.toml
    ↓ (자동 공유)
Podman VM의 /Users/sbu/SBU/bootC/config.toml
    ↓ (명시적 마운트)
bootc-image-builder 컨테이너 내부의 /config.toml

```

아하! 3단계 연결이에요.

두 번째 마운트: `-v $(pwd)/output:/output`

```plain text
Mac의 /Users/sbu/SBU/bootC/output/
    ↓
Podman VM의 /Users/sbu/SBU/bootC/output/
    ↓
bootc-image-builder 컨테이너의 /output/
    ↓
여기에 생성된 ISO 파일
    ↓
다시 Mac의 output/ 폴더로 자동 동기화

```

세 번째 마운트: `-v /var/lib/containers/storage:/var/lib/containers/storage`

이게... 가장 중요하고 헷갈리는 부분이에요. 생각을 정리해봅시다.

```plain text
Podman VM의 /var/lib/containers/storage/
(여기에 centos-kde-bootc 이미지가 저장되어 있음)
    ↓
bootc-image-builder 컨테이너 내부의
/var/lib/containers/storage/로 마운트
    ↓
bootc-image-builder가 이 스토리지를 읽어서
centos-kde-bootc 이미지를 찾고
    ↓
그 이미지를 기반으로 ISO 생성

```

잠깐, 왜 이렇게 복잡하게 해야 하죠?

bootc-image-builder는 특수한 컨테이너입니다. 이 컨테이너는:

1. 다른 컨테이너 이미지를 입력으로 받아서
1. 설치 가능한 ISO를 출력으로 만듭니다
그런데 "다른 컨테이너 이미지"가 어디 있나요? Podman VM의 스토리지에 있죠!

만약 이 마운트가 없다면:

```plain text
bootc-image-builder 컨테이너 실행
    ↓
"docker.io/cybecho/centos-kde-bootc:latest 이미지를 찾아라"
    ↓
컨테이너 내부를 검색
    ↓
이미지가 없음! 에러 발생!

```

마운트를 하면:

```plain text
bootc-image-builder 컨테이너 실행
    ↓
"docker.io/cybecho/centos-kde-bootc:latest 이미지를 찾아라"
    ↓
마운트된 /var/lib/containers/storage/ 검색
    ↓
이미지 발견! ISO 빌드 시작

```

## 전체 흐름을 다시 정리해보자

```plain text
┌─────────────────────────────────────────────────────────────┐
│ 1. 이미지 빌드 단계                                         │
├─────────────────────────────────────────────────────────────┤
│ Mac: podman build                                            │
│   ↓                                                          │
│ Podman VM: Containerfile 실행, 이미지 생성                  │
│   ↓                                                          │
│ 저장 위치: Podman VM의 /var/lib/containers/storage/        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 2. 이미지 공유 단계                                         │
├─────────────────────────────────────────────────────────────┤
│ Mac: podman push                                             │
│   ↓                                                          │
│ Podman VM: 이미지를 인터넷으로 전송                         │
│   ↓                                                          │
│ Docker Hub: 이미지 저장 (전 세계 어디서나 접근 가능)       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 3. VM 재생성 후 이미지 복구                                 │
├─────────────────────────────────────────────────────────────┤
│ podman machine rm → 모든 로컬 이미지 삭제                  │
│ podman machine init → 새 VM 생성                            │
│ podman pull → Docker Hub에서 이미지 다시 다운로드          │
│   ↓                                                          │
│ 저장 위치: 새 Podman VM의 /var/lib/containers/storage/     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 4. ISO 빌드 - 컨테이너 안의 컨테이너                       │
├─────────────────────────────────────────────────────────────┤
│ Mac: podman run bootc-image-builder                          │
│   ↓                                                          │
│ Podman VM에서 bootc-image-builder 컨테이너 실행            │
│   ├─ config.toml 마운트 (설정 파일)                        │
│   ├─ output/ 마운트 (결과물 저장 위치)                     │
│   └─ /var/lib/containers/storage/ 마운트 (입력 이미지)    │
│       ↓                                                      │
│ bootc-image-builder 내부에서:                               │
│   - 마운트된 스토리지에서 centos-kde-bootc 이미지 읽기     │
│   - config.toml 설정 적용                                   │
│   - ISO 파일 생성                                           │
│   - output/bootiso/install.iso로 저장                       │
│       ↓                                                      │
│ Mac의 output/ 폴더에 ISO 파일 출현                         │
└─────────────────────────────────────────────────────────────┘

```

## 아직 완전히 명확하지 않은 부분

음... 한 가지 더 생각해볼 점이 있어요.

왜 `-v /var/lib/containers/storage:/var/lib/containers/storage`인가요? 이 경로는 Podman VM 내부의 경로인데, Mac의 `$(pwd)`처럼 명시적이지 않네요.

아, 이건 Podman의 자동 경로 해석 때문이에요:

```plain text
Mac에서 podman run 실행
    ↓
-v /var/lib/containers/storage... 인식
    ↓
"절대 경로인데 /Users/로 시작하지 않네?"
    ↓
"이건 VM 내부 경로구나"
    ↓
Podman VM의 /var/lib/containers/storage를
컨테이너의 같은 경로로 마운트

```

## 최종 정리

이제 전체 그림이 보이나요?

**물리적 계층:**

1. Mac (하드웨어)
1. Podman VM (가상머신)
1. Container (격리된 프로세스)
1. bootc-image-builder 안에서 또 다른 이미지 처리
**데이터 흐름:**

- 빌드: Mac → VM → 이미지
- 공유: VM → Docker Hub
- 복구: Docker Hub → VM
- ISO 생성: VM 스토리지 → bootc-image-builder → ISO → Mac
**마운트의 역할:**

- 레이어 간 데이터 공유
- Mac ↔ VM은 자동
- VM ↔ Container는 명시적 (`v`)

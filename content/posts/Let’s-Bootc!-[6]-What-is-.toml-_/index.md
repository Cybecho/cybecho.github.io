---
title: "Let’s Bootc! [6] - What is .toml ?"
date: 2026-01-25T07:22:00.000Z
draft: false
tags: ["Docker", "Infra"]
series: ["Let's Bootc!"]
description: "toml 파일은 bootc-image-builder가 디스크 이미지를 생성할 때 적용할 커스터마이징을 정의하며, 사용자 계정, SSH 키, 파티션 레이아웃, 커널 파라미터, kickstart 스크립트를 포함합니다. 이 설정들은 최초 설치 시 /etc에 기록되고, 이후 업그레이드 시 3-way merge를 통해 보존됩니다. 간단한 설정은 toml로, 복잡한 설치 로직은 kickstart 스크립트로 처리할 수 있습니다."
notion_id: "2f31bab9-e3f8-8075-b164-d30b0f8c8050"
notion_url: "https://www.notion.so/Let-s-Bootc-6-What-is-toml-2f31bab9e3f88075b164d30b0f8c8050"
---

# Let’s Bootc! [6] - What is .toml ?

> **Summary**
> toml 파일은 bootc-image-builder가 디스크 이미지를 생성할 때 적용할 커스터마이징을 정의하며, 사용자 계정, SSH 키, 파티션 레이아웃, 커널 파라미터, kickstart 스크립트를 포함합니다. 이 설정들은 최초 설치 시 /etc에 기록되고, 이후 업그레이드 시 3-way merge를 통해 보존됩니다. 간단한 설정은 toml로, 복잡한 설치 로직은 kickstart 스크립트로 처리할 수 있습니다.

---

![Image](image_16ab8a42f65f.png)

![Image](image_cb74c19bce65.png)

# toml 파일은 무엇을 설정하는가?

## 처음 마주한 의문

bootc-image-builder를 처음 사용할 때 가장 먼저 하는 일이 있습니다. `config.toml` 파일을 작성하는 것입니다. 명령어 예시를 보면 대략 이런 모양입니다.

```bash
sudo podman run \
  --rm \
  --privileged \
  -v ./config.toml:/config.toml \
  -v ./output:/output \
  -v /var/lib/containers/storage:/var/lib/containers/storage \
  registry.redhat.io/rhel9/bootc-image-builder:latest \
  --type iso \
  --config /config.toml \
  quay.io/my-namespace/my-image:latest

```

컨테이너 안으로 마운트해서 넘겨주는 이 `config.toml` 파일, 정확히 무슨 역할을 하는 것일까요. 그리고 여기서 설정한 것들이 최종적으로 어디에 반영되는 것일까요.

[3]번에서 bootc 시스템의 파일시스템 구조를 살펴보면서 `/etc`는 3-way merge가 일어난다고 정리했습니다. 그렇다면 toml에서 정의한 사용자 계정이나 SSH 키 같은 설정은 결국 `/etc` 어딘가로 들어갈 텐데, 이 둘이 어떻게 연결되는 것인지 명확히 해야겠다는 생각이 들었습니다.

[4]번에서 anaconda와 kickstart를 다뤘는데, toml과 kickstart의 관계도 정리가 필요합니다.

---

## toml 파일의 역할: 디스크 이미지 생성 시점의 커스터마이징

먼저 핵심을 명확히 하겠습니다. toml 파일은 bootc-image-builder가 디스크 이미지를 생성할 때 적용할 커스터마이징을 정의합니다. 이 파일은 컨테이너 이미지 자체를 수정하는 것이 아닙니다. 컨테이너 이미지를 기반으로 부팅 가능한 디스크 이미지(ISO, QCOW2, RAW 등)를 만들 때, 그 디스크 이미지에 추가로 적용할 설정을 담고 있습니다.

이 구분이 중요합니다. Containerfile에서 정의하는 것과 toml에서 정의하는 것의 성격이 다릅니다.

| 설정 위치 | 적용 시점 | 성격 |
| --- | --- | --- |
| Containerfile | 컨테이너 이미지 빌드 시 | 시스템 구성의 기본값 |
| config.toml | 디스크 이미지 생성 시 | 배포 환경별 커스터마이징 |

같은 컨테이너 이미지를 가지고 여러 환경에 배포할 때, 각 환경에 맞는 다른 toml 파일을 사용할 수 있다는 의미입니다. 개발 환경용 디스크 이미지와 운영 환경용 디스크 이미지를 다른 설정으로 만들 수 있습니다.

---

## toml 파일의 전체 구조

toml 파일의 최상위 구조는 `customizations` 객체 아래에 여러 섹션이 배치되는 형태입니다. 지원되는 주요 섹션은 다음과 같습니다.

```toml
[customizations]
# 여기에 각종 설정 섹션들이 들어감

[[customizations.user]]
# 사용자 계정 설정

[[customizations.filesystem]]
# 파일시스템/파티션 설정

[customizations.kernel]
# 커널 부트 파라미터

[customizations.installer.kickstart]
# kickstart 스크립트 삽입

```

각 섹션을 하나씩 살펴보겠습니다.

---

## 사용자 설정: 계정과 SSH 키

가장 기본적이면서 가장 많이 사용하는 설정입니다. bootc 베이스 이미지는 기본 사용자가 없는 상태로 제공됩니다. 따라서 시스템에 로그인하려면 반드시 사용자를 생성해야 합니다.

```toml
[[customizations.user]]
name = "admin"
password = "$6$rounds=100000$salt$hashedpassword..."
key = "ssh-rsa AAAAB3NzaC1yc2E... user@host"
groups = ["wheel"]

```

각 필드의 의미는 다음과 같습니다.

`name`은 유일한 필수 항목입니다. 생성할 사용자의 이름을 지정합니다.

`password`는 해시된 비밀번호입니다. 평문 비밀번호가 아닙니다. SHA-512로 해시된 값을 넣어야 합니다. `mkpasswd --method=sha512` 명령어로 생성할 수 있습니다. 저는 개인적으로 SHA-256으로 수만 번 해시화하여 이미지를 Public 레지스트리에 올리더라도 비밀번호가 노출되지 않도록 합니다.

`key`는 SSH 공개키입니다. 이 키를 등록하면 비밀번호 없이 SSH 접속이 가능합니다.

`groups`는 사용자가 속할 그룹 목록입니다. `wheel` 그룹에 포함시키면 sudo 권한을 얻습니다.

여러 사용자를 생성하려면 `[[customizations.user]]` 블록을 여러 번 작성하면 됩니다.

```toml
[[customizations.user]]
name = "admin"
key = "ssh-rsa AAAA..."
groups = ["wheel"]

[[customizations.user]]
name = "developer"
key = "ssh-rsa BBBB..."
groups = ["developers"]

```

여기서 한 가지 의문이 생깁니다. 이 사용자 설정은 결국 `/etc/passwd`, `/etc/shadow`, `/etc/group`, `~/.ssh/authorized_keys` 같은 파일에 반영될 것입니다. [3]번에서 `/etc`는 3-way merge가 일어난다고 했는데, 이 설정들은 어떻게 처리되는 것일까요.

이 부분은 뒤에서 다시 다루겠습니다.

---

## 파일시스템과 파티션 설정

디스크 레이아웃을 커스터마이징할 수 있습니다. 기본 파티션(`/`, `/boot`)의 최소 크기를 지정하거나, `/var` 아래에 추가 파티션을 생성할 수 있습니다.

```toml
[[customizations.filesystem]]
mountpoint = "/"
minsize = "10 GiB"

[[customizations.filesystem]]
mountpoint = "/var/data"
minsize = "20 GiB"

```

여기서 주목할 점이 있습니다. 추가 마운트포인트는 `/var` 하위에만 생성할 수 있습니다. `/home`이나 `/opt` 같은 위치에는 별도 파티션을 만들 수 없습니다.

이것은 bootc의 파일시스템 구조와 연결됩니다. [3]번에서 정리했듯이 `/usr`는 완전 불변이고, `/etc`는 3-way merge, `/var`는 완전 가변입니다. 사용자 데이터와 상태 정보는 모두 `/var`에 저장되어야 하는 구조이기 때문에, 추가 파티션도 `/var` 하위로 제한됩니다.

더 복잡한 LVM 구성도 가능합니다. 다만 이 부분은 실험적인 기능에 가깝고, 공식 문서에서도 상세한 예시가 부족합니다.

```toml
[[customization.disk.partitions]]
type = "lvm"
name = "mainvg"

[[customization.disk.partitions.logical_volumes]]
name = "rootlv"
mountpoint = "/"
label = "root"
fs_type = "ext4"
minsize = "10 GiB"

[[customization.disk.partitions.logical_volumes]]
name = "swaplv"
fs_type = "swap"
minsize = "1 GiB"

```

다만 LVM 파티셔닝과 관련해서는 몇 가지 이슈가 보고되어 있습니다. 설정이 제대로 반영되지 않는 경우가 있다는 것인데, 아직 이 부분은 직접 검증해보지 않았습니다.

---

## 커널 부트 파라미터

커널에 전달할 부트 파라미터를 추가할 수 있습니다.

```toml
[customizations.kernel]
append = "mitigations=auto,nosmt"

```

보안 관련 설정이나 하드웨어 호환성을 위한 파라미터를 추가할 때 유용합니다. ThinkPad에서 전원 관리 문제를 겪었을 때, 여기에 ACPI 관련 파라미터를 추가해볼 수 있지 않을까 싶습니다. 다만 이 부분은 아직 실험해보지 않았습니다.

---

## Kickstart 스크립트 삽입

이 부분이 [4]번에서 다룬 anaconda/kickstart와 toml이 연결되는 지점입니다.

toml 파일 안에 kickstart 스크립트를 직접 삽입할 수 있습니다. 멀티라인 문자열을 사용하면 됩니다.

```toml
[customizations.installer.kickstart]
contents = """
text --non-interactive
zerombr
clearpart --all --initlabel --disklabel=gpt
autopart --noswap --type=lvm
network --bootproto=dhcp --device=link --activate --onboot=on
"""

```

여기서 중요한 점이 있습니다. bootc-image-builder는 컨테이너 이미지를 설치하는 핵심 명령(`ostreecontainer ...`)을 자동으로 추가합니다. 따라서 이 명령과 충돌하는 내용은 포함하면 안 됩니다.

이 설정은 ISO 타입 이미지를 생성할 때 특히 유용합니다. ISO로 부팅하면 anaconda가 실행되고, 이 kickstart 스크립트에 따라 자동으로 설치가 진행됩니다. 완전 무인 설치를 구현할 수 있습니다.

---

## toml 설정과 /etc 3-way merge의 관계

이제 처음에 제기한 의문으로 돌아가겠습니다. toml에서 설정한 사용자 계정이나 SSH 키는 결국 `/etc` 아래 파일들에 반영됩니다. 그런데 [3]번에서 `/etc`는 3-way merge가 일어난다고 했습니다. 이 둘은 어떻게 연결되는 것일까요.

핵심은 "언제" 설정이 적용되느냐입니다.

toml의 설정은 디스크 이미지 생성 시점, 즉 최초 설치 시점에 적용됩니다. anaconda(또는 bootc install)가 디스크에 시스템을 설치할 때, toml에서 정의한 사용자와 SSH 키가 `/etc/passwd`, `/etc/shadow`, `~/.ssh/authorized_keys`에 기록됩니다.

이 시점 이후로, 이 파일들은 "로컬에서 수정된 파일"이 됩니다. 이후 `bootc upgrade`를 실행하면 새 이미지의 `/etc` 파일들과 3-way merge가 일어납니다. 로컬에서 수정된 사용자 정보는 유지되면서, 새 이미지에서 추가된 설정만 병합됩니다.

정리하면 이렇습니다.

| 단계 | 동작 |
| --- | --- |
| 최초 설치 | toml 설정이 `/etc`에 기록됨 (로컬 수정으로 취급) |
| 이후 업그레이드 | 3-way merge로 로컬 수정 유지, 새 설정만 병합 |

따라서 toml에서 설정한 사용자 계정은 이후 업그레이드에서도 사라지지 않습니다. 이것이 bootc의 `/etc` 관리 방식이 가지는 장점입니다.

---

## kickstart와 toml의 관계 정리

[4]번에서 anaconda와 kickstart를 다뤘습니다. 이제 toml과의 관계를 정리해보겠습니다.

kickstart는 RHEL 계열의 전통적인 자동 설치 스크립트입니다. 디스크 파티셔닝, 네트워크 설정, 패키지 선택, 사용자 생성 등 설치 과정 전체를 자동화할 수 있습니다.

toml은 bootc-image-builder 전용 설정 포맷입니다. kickstart의 일부 기능을 더 간단한 문법으로 제공합니다.

둘 사이의 관계는 "포함" 관계입니다. toml 안에 kickstart 스크립트를 삽입할 수 있습니다. 그리고 bootc-image-builder는 내부적으로 toml 설정을 kickstart로 변환합니다.

예를 들어, toml의 `[[customizations.user]]` 설정은 내부적으로 kickstart의 `user` 명령으로 변환됩니다. 최종적으로 anaconda가 이 kickstart를 실행하여 시스템을 설치합니다.

따라서 두 가지 선택지가 있습니다.

첫째, 간단한 설정이라면 toml의 선언적 문법을 사용합니다. 사용자, SSH 키, 파티션 크기 정도는 toml로 충분합니다.

둘째, 복잡한 설치 로직이 필요하면 toml 안에 kickstart 스크립트를 직접 삽입합니다. LVM 구성, 네트워크 본딩, 사후 스크립트 실행 등은 kickstart 문법으로 작성하는 것이 더 유연합니다.

---

## 실제 예시: 제가 사용하는 config.toml

제가 ThinkPad X280에 배포할 때 사용하는 설정 예시입니다.

```toml
[[customizations.user]]
name = "cybecho"
password = "$6$rounds=100000$mysalt$hashedvalue..."
key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5... cybecho@macmini"
groups = ["wheel"]

[[customizations.filesystem]]
mountpoint = "/"
minsize = "30 GiB"

[[customizations.filesystem]]
mountpoint = "/var/home"
minsize = "50 GiB"

[customizations.installer.kickstart]
contents = """
text --non-interactive
zerombr
clearpart --all --initlabel --disklabel=gpt
autopart --noswap --type=plain
network --bootproto=dhcp --device=link --activate --onboot=on
"""

```

몇 가지 선택의 이유를 설명하겠습니다.

사용자 계정에는 SSH 공개키와 해시된 비밀번호를 모두 설정했습니다. SSH 접속이 안 되는 상황에서도 로컬 로그인이 가능해야 합니다.

루트 파티션은 30GiB로, `/var/home`은 50GiB로 분리했습니다. 사용자 데이터가 별도 파티션에 저장되면 재설치 시에도 데이터를 보존하기 쉽습니다. 다만 이 부분은 실제로 그렇게 동작하는지 아직 검증이 필요합니다.

kickstart에서는 `autopart --noswap`을 지정했습니다. SSD에서 스왑은 굳이 필요 없다고 판단했습니다. 메모리가 부족하면 zram으로 대응할 계획입니다.

---

## 이미지에 기본 설정 내장하기

한 가지 더 알아두면 좋은 것이 있습니다. toml 설정을 컨테이너 이미지 자체에 내장할 수 있습니다.

Containerfile에서 `/usr/lib/bootc-image-builder/config.toml`(또는 `config.json`)에 설정 파일을 복사해두면, bootc-image-builder가 이를 기본 설정으로 사용합니다.

```docker
FROM quay.io/centos-bootc/centos-bootc:stream9
COPY config.toml /usr/lib/bootc-image-builder/config.toml

```

이렇게 하면 디스크 이미지 생성 시 별도로 toml 파일을 지정하지 않아도 됩니다. 컨테이너 이미지가 곧 설정까지 포함한 완전한 배포 단위가 됩니다.

다만 이 방식은 모든 배포 환경에서 동일한 설정을 사용할 때만 적합합니다. 환경별로 다른 설정이 필요하면, 빌드 시점에 외부 toml 파일을 전달하는 방식이 더 유연합니다.

---

## 정리

toml 파일은 bootc-image-builder가 디스크 이미지를 생성할 때 적용할 커스터마이징을 정의합니다. Containerfile이 "무엇을 설치할 것인가"를 정의한다면, toml은 "어떻게 배포할 것인가"를 정의합니다.

주요 설정 항목은 사용자 계정, SSH 키, 파티션 레이아웃, 커널 파라미터, 그리고 kickstart 스크립트 삽입입니다. 이 설정들은 최초 설치 시점에 `/etc`에 기록되고, 이후 업그레이드에서는 3-way merge를 통해 보존됩니다.

kickstart와 toml은 포함 관계입니다. 간단한 설정은 toml의 선언적 문법으로, 복잡한 설치 로직은 toml 안에 삽입한 kickstart 스크립트로 처리합니다.

다음 포스트인 [6]번에서는 `bootc upgrade` 후 재부팅이 왜 빠른지, OSTree의 원자적 전환 원리를 살펴보겠습니다.


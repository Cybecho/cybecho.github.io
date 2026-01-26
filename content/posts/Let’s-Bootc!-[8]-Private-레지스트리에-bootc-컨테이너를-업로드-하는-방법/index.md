---
title: "Let’s Bootc! [8] - Private 레지스트리에 bootc 컨테이너를 업로드 하는 방법"
date: 2026-01-25T12:37:00.000Z
draft: false
tags: ["Docker", "Infra"]
series: ["Meet The Bootc"]
description: "프라이빗 레지스트리에 bootc 컨테이너를 업로드하기 위해 인증 파일을 "
notion_id: "2f31bab9-e3f8-80dc-b043-cd19a464b895"
notion_url: "https://www.notion.so/Let-s-Bootc-8-Private-bootc-2f31bab9e3f880dcb043cd19a464b895"
---

# Let’s Bootc! [8] - Private 레지스트리에 bootc 컨테이너를 업로드 하는 방법

> **Summary**
> 프라이빗 레지스트리에 bootc 컨테이너를 업로드하기 위해 인증 파일을 

---

![Image](image_34ddfb70d4cf.png)

![Image](image_443dd0ac4466.png)

## [8] 프라이빗 레지스트리와 인증 설정

### 찝찝함의 정체 - 우리의 이미지는 현재 public 환경에 올라가 있습니다.

현재 저는 이미지를 모두 Public으로 올린 상태입니다. 비밀번호는 SHA-256으로 수만 번 해시화했기 때문에 이미지가 공개되어 있어도 즉각적인 보안 위협은 없습니다. 그런데도 찝찝합니다.

왜일까요. Public 저장소에 올린 이미지에는 제가 어떤 패키지를 설치했는지, 어떤 설정 파일을 넣었는지가 고스란히 드러납니다. 비밀번호 자체는 안전하더라도 시스템 구조가 투명하게 노출된다는 것 자체가 공격 벡터가 될 수 있습니다. 보안은 한 겹이 아니라 여러 겹으로 쌓아야 한다는 원칙을 생각하면, Private 저장소로 전환하는 것이 맞습니다. 그래서 이번 글에서는 프라이빗 레지스트리에 접근하기 위한 인증 설정을 다룹니다.

### containers-auth.json이란 무엇인가

컨테이너 도구들, 그러니까 Podman이나 Docker, Skopeo, buildah 같은 것들은 레지스트리에 인증할 때 공통된 형식의 인증 파일을 사용합니다. 이 파일이 바로 `auth.json` 또는 `containers-auth.json`입니다. 파일 구조는 단순합니다.

```json
{
  "auths": {
    "ghcr.io": {
      "auth": "dXNlcm5hbWU6cGFzc3dvcmQ="
    },
    "docker.io": {
      "auth": "YW5vdGhlcnVzZXI6YW5vdGhlcnBhc3M="
    }
  }
}

```

`auths`라는 키 아래에 레지스트리 주소를 키로 두고, 그 값으로 `auth` 필드에 인코딩된 인증 정보를 담습니다. `auth` 값은 `username:password`를 Base64로 인코딩한 문자열입니다. 여러 레지스트리의 인증 정보를 하나의 파일에 담을 수 있어서, ghcr.io와 docker.io를 동시에 사용하는 환경에서도 하나의 파일로 관리할 수 있습니다.

여기서 한 가지 짚고 넘어갈 점이 있습니다. Base64는 암호화가 아닙니다. 누구든 디코딩할 수 있습니다. 그래서 이 파일 자체의 접근 권한 관리가 중요하고, 가능하다면 credential helper를 사용하는 것이 더 안전합니다. 다만 bootc 환경에서 credential helper를 활용하는 것은 추가적인 복잡성을 야기하므로, 이 글에서는 기본적인 auth.json 방식에 집중합니다.

### 파일의 위치라는 문제

이 부분이 bootc에서 가장 헷갈리는 지점입니다. 일반적인 Linux 환경에서 Podman은 인증 파일을 여러 경로에서 순차적으로 검색합니다. 먼저 `${XDG_RUNTIME_DIR}/containers/auth.json`을 확인하고, 없으면 `~/.config/containers/auth.json`, 그다음 `$HOME/.docker/config.json`, 마지막으로 `$HOME/.dockercfg`까지 찾아봅니다.

근데 여기서 문제가 있습니다. `${XDG_RUNTIME_DIR}`은 `/run/user/<uid>` 아래에 위치하는데, 이 경로는 재부팅하면 사라집니다. 그래서 `podman login`으로 저장한 인증 정보는 기본적으로 재부팅 후 유지되지 않습니다. 재부팅 후에도 인증 정보를 유지하려면 `--authfile` 옵션으로 명시적인 경로를 지정해야 합니다.

```bash
podman login --authfile ~/.config/containers/auth.json ghcr.io

```

이건 일반 Linux에서도 마찬가지입니다. bootc 환경만의 문제가 아닙니다.

### bootc 시스템에서는 어디에 두어야 하는가

bootc로 배포된 시스템은 일반 Linux와 다릅니다. [3]번에서 다룬 파일시스템 구조를 떠올려 보겠습니다. `/usr`는 완전히 불변이고 이미지에서 옵니다. `/etc`는 3-way merge 방식으로, 기본값과 로컬 수정이 병합됩니다. `/var`는 완전히 가변이며 상태와 데이터를 저장합니다.

bootc가 업그레이드할 때 레지스트리에서 새 이미지를 pull해야 합니다. 이때 인증이 필요하다면 어디에서 인증 파일을 찾을까요. Red Hat 문서에 따르면, bootc는 `/etc/ostree/auth.json`에서 레지스트리 인증 정보를 읽습니다. 이 경로가 핵심입니다. 일반 Podman이 사용하는 경로와 다르다는 점을 주의해야 합니다. 인증 파일을 생성하는 방법은 간단합니다.

```bash
# Base64 인코딩된 인증 문자열 생성
echo -n 'username:password' | base64
# 결과: dXNlcm5hbWU6cGFzc3dvcmQ=

```

이 값을 `/etc/ostree/auth.json` 파일에 넣으면 됩니다.

### 인증 파일을 어떻게 배치할 것인가

이미지에 넣을지, 로컬에서 설정할지. 이 질문에 대한 답은 상황에 따라 다릅니다.

첫 번째 방법은 Containerfile에 직접 포함시키는 것입니다.

```docker
FROM quay.io/centos-bootc/centos-bootc:stream9

COPY auth.json /etc/ostree/auth.json
RUN chmod 600 /etc/ostree/auth.json

```

이 방식의 장점은 배포된 모든 시스템이 자동으로 프라이빗 레지스트리에 접근할 수 있다는 것입니다. 단점은 명확합니다. 인증 정보가 이미지 레이어에 남습니다. 이미지를 Public으로 올리면 인증 정보가 노출됩니다. 프라이빗 레지스트리를 쓰려고 인증 정보를 넣었는데, 그 인증 정보가 Public 이미지에 노출되는 본말전도가 발생합니다.

두 번째 방법은 빌드 시 시크릿으로 전달하는 것입니다. Podman의 `--secret` 옵션을 사용하면 빌드 시점에만 시크릿을 사용하고, 최종 이미지 레이어에는 포함시키지 않을 수 있습니다.

```docker
FROM quay.io/centos-bootc/centos-bootc:stream9

RUN --mount=type=secret,id=creds,target=/run/secrets/creds \
    cp /run/secrets/creds /etc/ostree/auth.json && \
    chmod 600 /etc/ostree/auth.json

```

```bash
podman build --secret id=creds,src=$HOME/.docker/config.json -t my-bootc-image .

```

근데 이 방식에도 함정이 있습니다. 마운트된 시크릿 파일을 `cp`로 다른 경로에 복사하면, 그 복사된 파일은 이미지 레이어에 포함됩니다. `--mount=type=secret`은 마운트 지점의 파일이 레이어에 남지 않게 할 뿐, 복사 결과물까지 숨겨주지는 않습니다.

세 번째 방법이 제가 선호하는 것입니다. 설치 시점에 Kickstart로 주입하는 방식입니다.

```plain text
%post
cat > /etc/ostree/auth.json << 'EOF'
{
  "auths": {
    "ghcr.io": {
      "auth": "여기에_Base64_인코딩된_인증정보"
    }
  }
}
EOF
chmod 600 /etc/ostree/auth.json
%end

```

bootc-image-builder를 사용해 ISO를 만들 때, Kickstart의 `%post` 섹션에서 인증 파일을 생성할 수 있습니다. 이렇게 하면 이미지 자체에는 인증 정보가 없고, 설치 시점에만 주입됩니다. 배포된 시스템에서 `/etc/ostree/auth.json` 파일은 로컬 수정으로 취급되어 업데이트 시에도 유지됩니다.

### /etc의 3-way merge가 의미하는 것

[3]번에서 `/etc`는 3-way merge 방식으로 관리된다고 설명했습니다. 이게 인증 파일 관리에 어떤 영향을 미칠까요.

업데이트가 발생하면 bootc는 세 가지를 비교합니다. 현재 배포 버전의 기본 `/etc`, 새 이미지의 `/etc`, 그리고 현재 시스템의 `/etc`입니다. Kickstart로 `/etc/ostree/auth.json`을 주입하면, 이 파일은 로컬 수정으로 인식됩니다. 새 이미지에 동일한 경로에 다른 파일이 없다면, 로컬 수정은 그대로 유지됩니다. 새 이미지에도 해당 파일이 있고 내용이 다르다면, 충돌이 발생할 수 있습니다. 따라서 인증 파일을 이미지에 포함시키지 않고 로컬에서만 관리하는 것이 업데이트 시 충돌을 피하는 방법입니다.

그렇다면 `/var`에 두면 어떨까요. 이론적으로 `/var`에 인증 파일을 두고 심볼릭 링크를 걸 수도 있습니다. `/var`는 완전히 가변 영역이라 업데이트 영향을 전혀 받지 않습니다. 근데 이 방식은 bootc가 기대하는 경로와 맞지 않을 수 있고, SELinux 컨텍스트 문제가 발생할 수도 있습니다. 실제로 테스트해 보지 않아서 확언하기는 어렵습니다. 이건 가정입니다. 안전한 방법은 `/etc/ostree/auth.json`에 직접 파일을 두는 것입니다.

### Public 저장소에서 보안을 유지한 방법

제가 Public 저장소를 사용하면서도 일정 수준의 보안을 유지할 수 있었던 이유를 정리합니다.

toml 설정 파일에서 사용자 비밀번호를 설정할 때, 평문이 아닌 해시화된 값을 사용할 수 있습니다.

```toml
[[customizations.user]]
name = "myuser"
password = "$6$rounds=65536$salt$hashedpassword..."
groups = ["wheel"]

```

`$6$`은 SHA-512를 의미하고, `rounds=65536`은 해시 반복 횟수입니다. 이 정도면 브루트포스 공격에 상당한 시간이 소요됩니다. 비밀번호 대신 SSH 공개키만 이미지에 포함시키는 방법도 있습니다.

```toml
[[customizations.user]]
name = "myuser"
key = "ssh-ed25519 AAAAC3NzaC1... user@host"
groups = ["wheel"]

```

공개키는 말 그대로 공개해도 되는 키입니다. 이미지가 Public이어도 SSH 접근은 개인키를 가진 사람만 가능합니다. API 키, 토큰, 비밀번호 같은 민감한 정보는 이미지에 포함시키지 않고, 배포 후 별도로 주입하거나 `/var` 영역에서 관리합니다. 시스템 구조와 민감 정보를 분리하는 것이 핵심입니다. 이 원칙을 지키면 Public 저장소에서도 기본적인 보안은 유지할 수 있습니다. 물론 시스템 구조 노출이 신경 쓰인다면, 프라이빗 레지스트리로 전환하는 것이 맞습니다.

### 정리

인증 파일은 `/etc/ostree/auth.json`에 위치해야 bootc가 업그레이드 시 사용할 수 있습니다. 이 파일을 이미지에 직접 포함시키면 이미지가 Private이어야 의미가 있습니다. 설치 시점에 Kickstart로 주입하면 이미지는 Public으로 두면서도 배포된 시스템은 프라이빗 레지스트리에 접근할 수 있습니다. `/etc`의 3-way merge 덕분에 로컬에서 주입한 인증 파일은 업데이트 시에도 유지됩니다. 단, 새 이미지에 동일 경로에 파일이 있으면 충돌 가능성이 있으므로, 인증 파일은 이미지에서 제외하고 로컬 전용으로 관리하는 것이 좋습니다.

다음 글에서는 데이터의 불변성 관리를 다룹니다. `/var` 영역에 쌓이는 데이터를 어떻게 백업하고 동기화할 것인지, 여러 기기에서 동일한 데이터 환경을 유지하는 방법을 살펴봅니다.


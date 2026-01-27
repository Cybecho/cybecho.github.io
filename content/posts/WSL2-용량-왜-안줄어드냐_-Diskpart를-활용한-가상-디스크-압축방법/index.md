---
title: "WSL2 용량 왜 안줄어드냐? - Diskpart를 활용한 가상 디스크 압축방법"
date: 2026-01-18T05:12:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu"]
series: ["Don't Hate Windows!", "Let's Linux!"]
description: "WSL2의 가상 디스크는 동적 확장 방식으로 설계되어 있어, 리눅스에서 데이터를 삭제해도 윈도우에서 물리적 용량이 줄어들지 않는 문제가 발생한다. 이를 해결하기 위해서는 가상 디스크 내부 정리, TRIM 명령 실행, WSL 종료 후 VHDX 압축 단계를 거쳐야 한다. Podman의 컨테이너 이미지가 큰 용량을 차지하므로, 이를 정리하고 최종적으로 압축을 수행해야 실제 용량 회수가 가능하다."
notion_id: "2ec1bab9-e3f8-80f7-a64d-e93eb1dcbfe1"
notion_url: "https://www.notion.so/WSL2-Diskpart-2ec1bab9e3f880f7a64de93eb1dcbfe1"
---

# WSL2 용량 왜 안줄어드냐? - Diskpart를 활용한 가상 디스크 압축방법

> **Summary**
> WSL2의 가상 디스크는 동적 확장 방식으로 설계되어 있어, 리눅스에서 데이터를 삭제해도 윈도우에서 물리적 용량이 줄어들지 않는 문제가 발생한다. 이를 해결하기 위해서는 가상 디스크 내부 정리, TRIM 명령 실행, WSL 종료 후 VHDX 압축 단계를 거쳐야 한다. Podman의 컨테이너 이미지가 큰 용량을 차지하므로, 이를 정리하고 최종적으로 압축을 수행해야 실제 용량 회수가 가능하다.

---

![Image](image_1e2d3e97c9fb.png)

## [주제 1: WSL2 아키텍처와 가상 디스크 도입 배경]

현대적인 컨테이너 기반 개발 환경인 BOOTC 빌드 작업은 대용량의 레이어를 수시로 생성하고 파기하는 특성을 가집니다. 이러한 작업 흐름을 지원하기 위해 도입된 WSL2는 기존의 WSL1과 달리 실제 리눅스 커널을 활용하는 하이퍼바이저 기반 가상화 방식을 채택하고 있습니다. 이 구조에서 리눅스 파일 시스템은 윈도우의 물리 드라이브에 직접 기록되는 대신, `ext4.vhdx`라는 가상 하드 디스크 파일 내에 캡슐화되어 관리됩니다. 이는 성능과 호환성 면에서 이점을 제공하지만, 저장 공간의 관리 측면에서는 윈도우 파일 시스템과 리눅스 파일 시스템 간의 분리를 초래하여 물리적 용량 점유 문제를 야기하는 배경이 됩니다.

## [주제 2: 가상 디스크의 동적 확장 구조와 용량 불일치 원인]

WSL2의 가상 디스크 파일(.vhdx)은 데이터 양에 따라 크기가 자동으로 늘어나는 동적 확장(Dynamic Expansion) 방식으로 설계되었습니다. 리눅스 내부에서 대규모 빌드 작업을 수행하여 데이터를 생성하면 윈도우는 그에 상응하는 물리 공간을 할당하여 파일 크기를 키웁니다. 그러나 리눅스 내부에서 `podman system prune` 등의 명령으로 데이터를 삭제하여 논리적 공간을 비우더라도, 윈도우 OS는 해당 가상 디스크 내부의 어떤 블록이 비워졌는지 실시간으로 인지하지 못합니다. 결과적으로 리눅스 내 가용 용량은 증가하지만 윈도우 상의 `.vhdx` 파일 크기는 축소되지 않는 물리적 공간의 불일치 현상이 발생하게 됩니다.

## [주제 3: 단계별 물리 용량 회수 절차 및 실행 방법]

점유된 물리 공간을 실제로 회수하기 위해서는 논리적 정리와 물리적 압축의 단계별 절차를 준수해야 합니다. 전체 프로세스는 가상 디스크 내부 정리, 서비스 종료, 물리적 압축의 순서로 진행됩니다.

아래 현상은 “Podman 이미지/레이어를 지웠는데도 WSL2의 ext4.vhdx가 그대로 커 보이는” 전형적인 케이스다. 핵심은 **WSL2 디스크(VHDX)의 성장/축소 메커니즘이 리눅스 파일 삭제와 1:1로 연결되지 않는다**는 점이다.

## 0) ext4.vhdx 경로 찾기 (공식 스크립트)

관리자 PowerShell에서 (distro 이름만 바꿔서):

```powershell
$distro="Ubuntu"# <- 본인 배포판 이름으로 변경
(Get-ChildItem-Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Lxss |
Where-Object {$_.GetValue("DistributionName")-eq$distro }
).GetValue("BasePath") +"\ext4.vhdx"


```

이 방식으로 각 배포판의 `.vhdx` 위치를 찾는다.

---

## 1) 배경: WSL2의 ext4.vhdx는 왜 커지고, 왜 안 줄어드나


WSL2는 리눅스 파일시스템을 Windows 쪽의 **동적 확장 VHDX**(보통 `ext4.vhdx`) 안에 담는다.

- **커질 때**: 리눅스에서 파일을 쓰면 ext4가 블록을 할당하고, 그 블록이 VHDX 내부에 기록되면서 VHDX가 커질 수 있다.
- **지울 때**: 리눅스에서 파일을 삭제하면 ext4 입장에서는 “사용 중 표시가 해제”될 뿐이고, 그 블록이 Windows 호스트에게 “이 블록은 비었으니 회수해도 됨”이라고 자동으로 전달되지 않는 경우가 많다.
- 따라서 “리눅스 내부에서 공간이 비었다”와 “Windows 파일(ext4.vhdx)의 실제 점유가 줄었다”는 별개의 단계다.
결론적으로, **축소는 2단계**가 필요하다.

1. *게스트(리눅스)**가 빈 블록을 “비었다/버려도 된다”로 표시(Trim/Discard 또는 0으로 채우기)
1. *호스트(Windows)**가 VHDX 압축/최적화로 실제 파일 점유를 회수(`diskpart compact vdisk`)
---

## 2) 지금 출력이 말해주는 사실 (원인 진단이 끝난 상태)

### (1) `df -h /` 결과

```plain text
/dev/sdd  Size 1007G  Used 77G  Avail 880G

```

- WSL 루트 파일시스템은 논리적으로 **최대 1TB까지 확장 가능**하게 잡혀 있고
- 현재 **실사용이 77G**라는 뜻이다.
즉, ext4.vhdx가 80~90G대여도 이상하지 않다.

**실사용(77G) 자체가 크면, VHDX가 그 아래로 내려갈 수 없다**(메타데이터/여유/저널 등 오버헤드가 추가로 붙는다).

### (2) `du` 결과로 본 “진짜 주범”

```plain text
/var = 55G
/var/lib/containers/storage/overlay = 43G
/home/cybecho = 21G
/var/tmp = 11G

```

- Podman의 컨테이너 이미지/레이어가 쌓이는 대표 경로가 `/var/lib/containers/storage/overlay`인데, 거기가 **43G**다.
- `/home`에 21G, `/var/tmp`에 11G도 있다.
즉, “VHDX가 안 줄었다”가 아니라 **WSL 내부에서 실제로 77G를 쓰고 있었다**가 정확한 해석이다.

### (3) `fstrim -av` 결과

```plain text
/: 928.9 GiB trimmed ...

```

- discard(TRIM) 호출이 “동작”은 했다.
- 하지만 **실사용이 여전히 크면** compact가 회수할 게 제한적이다. (남아 있는 77G는 살아 있는 데이터이기 때문)
---

## 3) `diskpart compact vdisk`를 했는데도 `Get-Item Length`가 그대로인 이유

너는 VHDX를 줄였는지 확인할 때:

```powershell
Get-Item ...\ext4.vhdx | Select Name,Length

```

를 봤는데, 이 값은 “파일의 논리적 길이(끝 위치)”에 가까워서 **실제 점유(디스크상 크기)가 줄었는지**를 정확히 반영하지 못하는 경우가 있다.

- `compact vdisk`는 “파일의 논리 길이”를 줄이는 게 아니라,
- **VHDX 내부에서 비어 있는 블록을 정리해 실제 점유를 줄이는 작업**이다.
Windows 탐색기 속성의 “크기(디스크상)”이 줄었는데도 `Length`는 그대로일 수 있고, 반대로 진짜로 회수가 안 된 경우도 있다.

그래서 검증은 “Size on disk” 관점으로 해야 한다.

---

## 4) `Wsl/Service/E_INVALIDARG`의 의미 (sparse 설정 실패)

너 메시지:

```plain text
wsl --manage Ubuntu-24.04 --set-sparse true
...
스파스 VHD 지원은 현재 비활성화되어 있습니다.
... --allow-unsafe
오류 코드: Wsl/Service/E_INVALIDARG

```

정리:

- 네 WSL 빌드/서비스 상태에서 **sparse VHD 기능이 정책적으로 비활성화**되어 있음.
- 그래서 `-set-sparse true`는 “인자 잘못됨”으로 떨어진 게 아니라, **해당 모드가 막혀서 유효한 설정으로 인정되지 않는 상태**로 떨어진 것.
- 안내대로 `-allow-unsafe`를 붙이면 강제로 켤 수 있지만, 메시지 자체가 말하듯 **데이터 손상 리스크를 감수**하는 옵션이다.
즉:

- **sparse 실패는 현재 문제(용량 회수)와 직접적인 필수 조건이 아니다.**
- 안전한 축소 루트는 여전히: *(WSL 내부 정리) → fstrim → shutdown → compact* 이다.
---

## 5) 해결 전개: “실사용 77G”를 깎는 게 먼저다

현재 분포상 가장 큰 덩어리는 Podman overlay 43G다. 여기부터 제거하면 즉각 효과가 나온다.

### A. Podman 스토리지 제거 (rootful 기준: `/var/lib/containers`)

WSL(Ubuntu) 안에서:

```bash
# 실행 중 컨테이너 정리
sudo podman stop -a 2>/dev/null || true
sudo podman rm -af 2>/dev/null || true

# 이미지 정리
sudo podman rmi -af 2>/dev/null || true

# 남은 찌꺼기(볼륨/네트워크/캐시 포함) 정리
sudo podman system prune -a --volumes -f 2>/dev/null || true

```

그래도 `/var/lib/containers/storage/overlay`가 남아 있다면(완전 초기화 목적이면) 다음처럼 “스토리지를 통째로 제거”하는 방식이 가장 확실하다:

```bash
sudo rm -rf /var/lib/containers
sudo mkdir -p /var/lib/containers

```

> Podman을 다시 쓰면 여기부터 다시 쌓인다. “싹 비우기” 목적일 때만.

### (참고) Rootless Podman도 썼다면

유저 영역에도 스토리지가 생긴다:

```bash
rm -rf ~/.local/share/containers/storage

```

### B. `/var/tmp` 11G 정리

```bash
sudo rm -rf /var/tmp/*

```

### C. `/home` 21G는 “원인별로” 삭제

이미 `du`로 크기만 확인했으니, 세부를 더 파고들려면:

```bash
sudo du -xh --max-depth=2 /home/cybecho 2>/dev/null | sort -h | tail -n 50

```

큰 폴더가 무엇인지 보고 삭제/이동하면 된다(예: 빌드 산출물, 캐시, 다운로드).

---

## 6) 축소 동작(호스트 회수)으로 연결하는 과정

### 1) WSL 내부에서 discard(TRIM)

정리 후:

```bash
sudo fstrim -av || true

```

### 2) WSL 완전 종료 (파일 핸들 닫기)

Windows 관리자 PowerShell:

```powershell
wsl --shutdown

```

### 3) VHDX 압축

관리자 PowerShell:

```powershell
diskpart

```

diskpart:

```plain text
select vdisk file="C:\Users\SBU\AppData\Local\wsl\{218e6032-ebb0-44c9-bd7b-33fa6686c9d0}\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit

```

---

## 7) “정리했는데도 compact가 별 효과가 없을 때”의 강제 회수(Zero-fill)

일부 상황에서는 discard만으로는 VHDX가 회수할 블록을 충분히 인지하지 못한다. 그럴 때는 리눅스 내부에서 “빈 공간을 0으로 채웠다가 지우기”를 하면 VHDX 입장에서 압축 가능한 패턴이 만들어진다.

WSL(Ubuntu)에서:

```bash
sudo sh -c 'dd if=/dev/zero of=/zero.fill bs=1M status=progress || true; sync; rm -f /zero.fill; sync'
sudo fstrim -av || true

```

그 다음 다시:

- `wsl --shutdown`
- `diskpart compact vdisk`
---

## 8) 검증: “Length” 대신 실제 점유 확인 포인트


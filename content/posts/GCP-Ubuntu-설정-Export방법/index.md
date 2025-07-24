---
title: "GCP Ubuntu 설정 Export방법"
date: 2023-06-04T00:00:00.000Z
draft: false
tags: ["GCP", "shell", "ubuntu"]
series: ["Let's Linux!"]
description: "GCP에서 Ubuntu VM을 다른 계정으로 복사하기 위해 스냅샷을 생성하고 관리하는 방법을 설명합니다. Cloud Shell 또는 로컬 셸에서 gcloud CLI를 설정한 후, 스냅샷 목록을 확인하고 특정 스냅샷의 정보를 조회하며, 동일 조직 내 또는 여러 조직 간에 스냅샷 데이터를 공유하는 절차를 안내합니다. 필요한 권한과 명령어 사용법도 포함되어 있습니다."
notion_id: "deef1c00-6580-46f2-8a0c-e30c5d06bb91"
notion_url: "https://www.notion.so/GCP-Ubuntu-Export-deef1c00658046f28a0ce30c5d06bb91"
---

# GCP Ubuntu 설정 Export방법

> **Summary**
> GCP에서 Ubuntu VM을 다른 계정으로 복사하기 위해 스냅샷을 생성하고 관리하는 방법을 설명합니다. Cloud Shell 또는 로컬 셸에서 gcloud CLI를 설정한 후, 스냅샷 목록을 확인하고 특정 스냅샷의 정보를 조회하며, 동일 조직 내 또는 여러 조직 간에 스냅샷 데이터를 공유하는 절차를 안내합니다. 필요한 권한과 명령어 사용법도 포함되어 있습니다.

---

![Image](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/BlogHeader_Set2_D.png)

🔗 [https://nangman14.tistory.com/42](https://nangman14.tistory.com/42)

🔗 [https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#gcloud_5](https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#gcloud_5)


## 스냅샷 나열

1. 다음 개발 환경 중 하나에서 gcloud CLI를 설정합니다.
  - **Cloud Shell**: gcloud CLI가 이미 설정된 온라인 터미널을 사용하려면 Cloud Shell을 활성화하세요.
    이 페이지에서 Cloud Shell 활성화하기

    이 페이지 하단에서 Cloud Shell 세션이 시작되고 명령줄 프롬프트가 표시됩니다. 세션이 초기화되는 데 몇 초 정도 걸릴 수 있습니다.

  - **로컬 셸**: 로컬 개발 환경을 사용하려면 gcloud CLI를 [설치](https://cloud.google.com/sdk/docs/install?hl=ko)하고 [초기화](https://cloud.google.com/sdk/docs/initializing?hl=ko)합니다.
1. 특정 프로젝트에서 사용할 수 있는 스냅샷 목록을 보려면 [`gcloud compute snapshots list`](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/list?hl=ko)[ 명령어](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/list?hl=ko)를 사용합니다.
```plain text
gcloud compute snapshots list --projectPROJECT_ID
```

여기서 **PROJECT_ID**는 프로젝트의 ID입니다.

## 스냅샷에 관한 정보 보기

생성 시간, 크기, 소스 디스크와 같은 특정 스냅샷의 정보를 나열하려면 [`gcloud compute snapshots describe`](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/describe?hl=ko) 명령어를 사용합니다.

```plain text
gcloud compute snapshots describe SNAPSHOT_NAME

```

여기서 **SNAPSHOT_NAME**은 스냅샷의 이름입니다.

## 동일 조직에서 프로젝트 간 스냅샷 데이터 공유

**이 태스크에 필요한 권한**

이 태스크를 수행하려면 다음과 같은 [권한](https://cloud.google.com/iam/docs/overview?hl=ko#permissions)이 있어야 합니다.

- 프로젝트의 모든 스냅샷에 액세스가 필요한 경우 프로젝트에 대한 `compute.storageAdmin` 권한
- 대상 프로젝트에 대한 `compute.snapshots.create` 권한
- 소스 디스크에 대한 `compute.disks.createSnapshot` 권한
한 프로젝트의 디스크에서 동일 조직 내에 있는 다른 프로젝트의 디스크로 데이터를 이동하려면 다음 프로세스를 사용합니다.

[gcloud](https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#gcloud)[API](https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#api)

1. 다음 개발 환경 중 하나에서 gcloud CLI를 설정합니다.
  - **Cloud Shell**: gcloud CLI가 이미 설정된 온라인 터미널을 사용하려면 Cloud Shell을 활성화하세요.
    이 페이지에서 Cloud Shell 활성화하기

    이 페이지 하단에서 Cloud Shell 세션이 시작되고 명령줄 프롬프트가 표시됩니다. 세션이 초기화되는 데 몇 초 정도 걸릴 수 있습니다.

  - **로컬 셸**: 로컬 개발 환경을 사용하려면 gcloud CLI를 [설치](https://cloud.google.com/sdk/docs/install?hl=ko)하고 [초기화](https://cloud.google.com/sdk/docs/initializing?hl=ko)합니다.
1. [`gcloud compute snapshots create`](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/create?hl=ko)[ 명령어](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/create?hl=ko)를 사용하여 대상 프로젝트에서 디스크 스냅샷을 만듭니다. 예를 들어 영역별 영구 디스크의 스냅샷을 만들려면 다음 명령어를 사용합니다.
```plain text
gcloud compute snapshots createSNAPSHOT_NAME \
      --source-disk https://www.googleapis.com/compute/v1/projects/SOURCE_PROJECT_ID/zones/ZONE/disks/SOURCE_DISK_NAME \
      --projectDESTINATION_PROJECT_ID
```

  다음을 바꿉니다.

  - **SNAPSHOT_NAME**: 스냅샷의 이름
  - **SOURCE_PROJECT_ID**: 소스 디스크 프로젝트의 ID
  - **ZONE**: 소스 디스크의 영역
  - **SOURCE_DISK_NAME**: 소스 디스크의 이름
  - **DESTINATION_PROJECT_ID**: 새 스냅샷의 대상 프로젝트의 ID
1. 대상 프로젝트에서 영역 또는 리전 영구 디스크나 [`gcloud compute disks create`](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create?hl=ko)[ 명령어](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create?hl=ko)를 사용하여 스냅샷을 기준으로 하이퍼디스크를 만듭니다.
```plain text
gcloud compute disks createDISK_NAME \
      --source-snapshotSNAPSHOT_NAME \
      --projectDESTINATION_PROJECT_ID
```

  다음을 바꿉니다.

  - **DISK_NAME**: 새 디스크의 이름
  - **SNAPSHOT_NAME**: 스냅샷의 이름
  - **DESTINATION_PROJECT_ID**: 새 디스크의 대상 프로젝트의 ID
## 여러 조직에서 프로젝트 간 스냅샷 공유

**이 태스크에 필요한 권한**

이 태스크를 수행하려면 다음과 같은 [권한](https://cloud.google.com/iam/docs/overview?hl=ko#permissions)이 있어야 합니다.

- 프로젝트의 모든 스냅샷에 액세스가 필요한 경우 프로젝트에 대한 `compute.storageAdmin` 권한
- 대상 프로젝트에 대한 `compute.snapshots.create` 권한
- 소스 디스크에 대한 `compute.disks.createSnapshot` 권한
한 조직의 프로젝트에서 다른 조직의 다른 프로젝트로 스냅샷을 공유하려면 다음 프로세스를 사용합니다.

[gcloud](https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#gcloud)[API](https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#api)

1. 다음 개발 환경 중 하나에서 gcloud CLI를 설정합니다.
  - **Cloud Shell**: gcloud CLI가 이미 설정된 온라인 터미널을 사용하려면 Cloud Shell을 활성화하세요.
    이 페이지에서 Cloud Shell 활성화하기

    이 페이지 하단에서 Cloud Shell 세션이 시작되고 명령줄 프롬프트가 표시됩니다. 세션이 초기화되는 데 몇 초 정도 걸릴 수 있습니다.

  - **로컬 셸**: 로컬 개발 환경을 사용하려면 gcloud CLI를 [설치](https://cloud.google.com/sdk/docs/install?hl=ko)하고 [초기화](https://cloud.google.com/sdk/docs/initializing?hl=ko)합니다.
1. 소스 프로젝트에서 [`gcloud compute disks create`](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create?hl=ko)[ 명령어](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create?hl=ko)를 사용하여 스냅샷을 기반으로 디스크를 만듭니다.
```plain text
gcloud compute disks createDISK_NAME \
      --source-snapshotSNAPSHOT_NAME \
      --projectSOURCE_PROJECT_ID \ --zoneZONE
```

  다음을 바꿉니다.

  - **DISK_NAME**: 새 디스크의 이름
  - **SNAPSHOT_NAME**: 스냅샷의 이름
  - **SOURCE_PROJECT_ID**: 소스 프로젝트의 ID
  - **ZONE**: 새 디스크를 만들 영역
  이 디스크는 조직 간 스냅샷 복사를 위해서만 생성되는 임시 디스크입니다. 스냅샷 복사가 완료되면 이 디스크를 삭제할 수 있습니다.

1. 대상 프로젝트에서 [`gcloud compute snapshots create`](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/create?hl=ko)[ 명령어](https://cloud.google.com/sdk/gcloud/reference/compute/snapshots/create?hl=ko)를 사용하여 스냅샷을 만듭니다. 예를 들어 1단계에서 만든 영역 디스크를 사용하여 스냅샷을 만들려면 다음 명령어를 사용합니다.
```plain text
gcloud compute snapshots createSNAPSHOT_NAME \
      --source-disk https://www.googleapis.com/compute/v1/projects/SOURCE_PROJECT_ID/zones/ZONE/disks/SOURCE_DISK_NAME \
      --projectDESTINATION_PROJECT_ID
```

  다음을 바꿉니다.

  - **SNAPSHOT_NAME**: 스냅샷의 이름
  - **SOURCE_PROJECT_ID**: 소스 디스크가 포함된 프로젝트의 ID
  - **ZONE**: 소스 디스크의 영역
  - **SOURCE_DISK_NAME**: 1단계에서 만든 디스크의 이름
  - **DESTINATION_PROJECT_ID**: 새 스냅샷의 대상 프로젝트의 ID
    사용할 수 있는 스냅샷 목록을 보려면 [스냅샷 나열](https://cloud.google.com/compute/docs/disks/create-snapshots?hl=ko#listing-snapshots)을 참조하세요.

1. [`gcloud compute disks delete`](https://cloud.google.com/sdk/gcloud/reference/compute/disks/delete?hl=ko)[ 명령어](https://cloud.google.com/sdk/gcloud/reference/compute/disks/delete?hl=ko)를 사용하여 1단계에서 만든 임시 디스크를 삭제합니다.

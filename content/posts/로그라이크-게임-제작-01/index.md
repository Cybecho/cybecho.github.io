---
title: "로그라이크 게임 제작 01"
date: 2023-03-14T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "SPUM 무료버전 설치 방법과 리소스 탐색에 대한 내용으로, Voxel 환경 자산 링크도 포함되어 있습니다. 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치합니다."
notion_id: "4afad8d2-2bef-437e-a754-3dc69c22792b"
notion_url: "https://www.notion.so/01-4afad8d22bef437ea7543dc69c22792b"
---

# 로그라이크 게임 제작 01

> **Summary**
> SPUM 무료버전 설치 방법과 리소스 탐색에 대한 내용으로, Voxel 환경 자산 링크도 포함되어 있습니다. 저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units에 위치합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fe12b808-c14f-4f40-a99a-8a1a3bcb608e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHICYTE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFPio7k09%2FRtm7Px0%2FYX%2FGUS9Jv9ZyaWnefwCH3LHXLqAiEA%2Buay9eIeDjqGJ5QkL53HQUQvVqlpz1F%2Bd7r8AOIbIAgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLMdXXxPjrmTkf%2FUDCrcA6wEM8U9VVivY9iW28TPtGPb%2FvJVMdDls0%2F%2Bn%2BOlUbXQsJylgctVkkJ8TJwFsbPSIc6nxf7iMf70PAFYTeqOMH%2B6K5CaVUOofQKhrFUYcPBSGMEtYB6l9Gp%2BhdPB90dhu%2BlnDKhxiAol%2Fy5YUTUIxA%2FMcWRfVZ9QjG%2BGdHATglWP1mszX82oG9cy9A3PIjTZP1bfZeSOKZVFsofAuVhnUlky9lqAu%2F6jkrJdknH1Ws14fw0cahplzZmdfCqbOK6y%2B51%2F30%2FT2OU5TvG7ZM8cV9ScHlI4vXoO9zvUhzp6rXK%2FNUFOi9q59fPyKY5ryy8MqG30H8WYr2Q78qSU75nRrYCuGmukKTwDkNzgUOupKERfigiI3pqtqIaAruK9LUcandLOT7%2FJhtyi%2FbfPAOsvlpSIBWlqQrHvo734RI%2BbcGA5FDHU75AwxrX7cqzxIlhAo7eC1IRtnH9sCLrB0NEtWoAWRGxHSnMlLhVWEuAx7J7%2FgtPyqc20h%2FPa8dahvJybj6oigtjYf6zq3IUaea3pkJLP6Fo70xpm2QM6LmYqas7CbWKzmVjiquD6pbV5Z4%2FdH0v%2BFbvLzwvdKx8oYrxsZcv2yoC3IDkqDgvxh8moLx9YzgZ%2FRUaDjcBwtrrYMJW%2FiMQGOqUBgX7BFlJI0bg8FBXGdpnXZZOBsFODYdjnzgGRG%2Bqq5IRj9u3S2fRYO7Pn0ncuRJLWEDtAX8KtXySEgC2Y14FUQp2KdJGfViNKJlrinzQQ8jZq2OaSwsWdWY5T10J30lCwJI8V%2F9LBA7pjfg9jr7rfrGM2xsgT6WHyBAiTWpkr3r1DP7hk8bMyxsNOyBDq%2B9YTH1ItLaYR3dRcseJcToxS8R2ApCFv&X-Amz-Signature=c8d208403bf122514433ca651773934e543bfa08efbb40c92e6a912418c3202e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=lnvNWuovnRs)

위 영상 따라하기 전에 아래 링크에서 SPUM 설치

🔗 [https://www.soonsoon.co/docs/spum-ko/free-version/](https://www.soonsoon.co/docs/spum-ko/free-version/)

🎥 [동영상 보기](https://www.youtube.com/watch?v=TvxdkMMuC1A&t=140s)

무료버전은 구버전이다 해당 영상을 참고하자

> 🔥 **저장한 캐릭터 정보는 Resources/SPUM/SPUM_Units 에 존재함**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0ebc82e4-4e35-448a-bc17-9fbc935ca64f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHICYTE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFPio7k09%2FRtm7Px0%2FYX%2FGUS9Jv9ZyaWnefwCH3LHXLqAiEA%2Buay9eIeDjqGJ5QkL53HQUQvVqlpz1F%2Bd7r8AOIbIAgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLMdXXxPjrmTkf%2FUDCrcA6wEM8U9VVivY9iW28TPtGPb%2FvJVMdDls0%2F%2Bn%2BOlUbXQsJylgctVkkJ8TJwFsbPSIc6nxf7iMf70PAFYTeqOMH%2B6K5CaVUOofQKhrFUYcPBSGMEtYB6l9Gp%2BhdPB90dhu%2BlnDKhxiAol%2Fy5YUTUIxA%2FMcWRfVZ9QjG%2BGdHATglWP1mszX82oG9cy9A3PIjTZP1bfZeSOKZVFsofAuVhnUlky9lqAu%2F6jkrJdknH1Ws14fw0cahplzZmdfCqbOK6y%2B51%2F30%2FT2OU5TvG7ZM8cV9ScHlI4vXoO9zvUhzp6rXK%2FNUFOi9q59fPyKY5ryy8MqG30H8WYr2Q78qSU75nRrYCuGmukKTwDkNzgUOupKERfigiI3pqtqIaAruK9LUcandLOT7%2FJhtyi%2FbfPAOsvlpSIBWlqQrHvo734RI%2BbcGA5FDHU75AwxrX7cqzxIlhAo7eC1IRtnH9sCLrB0NEtWoAWRGxHSnMlLhVWEuAx7J7%2FgtPyqc20h%2FPa8dahvJybj6oigtjYf6zq3IUaea3pkJLP6Fo70xpm2QM6LmYqas7CbWKzmVjiquD6pbV5Z4%2FdH0v%2BFbvLzwvdKx8oYrxsZcv2yoC3IDkqDgvxh8moLx9YzgZ%2FRUaDjcBwtrrYMJW%2FiMQGOqUBgX7BFlJI0bg8FBXGdpnXZZOBsFODYdjnzgGRG%2Bqq5IRj9u3S2fRYO7Pn0ncuRJLWEDtAX8KtXySEgC2Y14FUQp2KdJGfViNKJlrinzQQ8jZq2OaSwsWdWY5T10J30lCwJI8V%2F9LBA7pjfg9jr7rfrGM2xsgT6WHyBAiTWpkr3r1DP7hk8bMyxsNOyBDq%2B9YTH1ItLaYR3dRcseJcToxS8R2ApCFv&X-Amz-Signature=174d991247ccce2f18eb266b19d379823f93958620f60d934221bba50dd078f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 리소스 탐색

🔗 [https://maxparata.itch.io/voxel-desert-town](https://maxparata.itch.io/voxel-desert-town)


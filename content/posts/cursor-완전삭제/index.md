---
title: "cursor 완전삭제"
date: 2024-04-06T14:09:00.000Z
draft: false
tags: ["Other"]
series: ["개발환경"]
description: "VS Code에서 cursor를 사용 중일 때 WSL2에서 발생하는 문제를 해결하기 위해 cursor를 완전히 삭제하고 특정 디렉토리를 비워야 한다. 또한, cursor의 문제를 해결하기 위해 제공된 코드를 복사하여 지정된 디렉토리의 cursor를 대체해야 한다."
notion_id: "04331296-b3eb-46a6-a516-2085118c1cd1"
notion_url: "https://www.notion.so/cursor-04331296b3eb46a6a5162085118c1cd1"
---

# cursor 완전삭제

> **Summary**
> VS Code에서 cursor를 사용 중일 때 WSL2에서 발생하는 문제를 해결하기 위해 cursor를 완전히 삭제하고 특정 디렉토리를 비워야 한다. 또한, cursor의 문제를 해결하기 위해 제공된 코드를 복사하여 지정된 디렉토리의 cursor를 대체해야 한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9295a3dd-2bdd-4a25-a346-38e04743cb83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWT663WZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3s18XCy41jUwNanJquwsDFgS5Q1%2Fd1tS93J4pvJ7ENgIhAOxpjd0SNxMu8goCtz%2B8USKDpaKvyhg%2Bqkg%2FSWogZedRKv8DCCoQABoMNjM3NDIzMTgzODA1IgxHkIOrpDx%2FwF2YDKUq3ANAyH3j663BKkRpNGGPP4yDyq7qYs4jhUacynbydP7amxKG3FY1eUc6Cpx2RYie2V1X0li3FpO%2BZpF81nJhr%2B6xf9fEow%2B9gzWQMKbT7p4GvsoBQTNQuEjPe9gT5tzId6217sV3l%2BkVbzR1rM17RypQkVRi5yC8%2Bo2A5s7IeeJS%2FXaVLrBXwRjxeO9cxmLoK%2BtATnpUq8zp231Uux%2BRRF2o%2BPc1L%2FIEviEmLaGL55tdjT4NlGdqB8EKpnhl5S0Uvaea4tk5GPFj42GrbfQdwJ9rXUokCvVQo2LyzMNYWPuP%2Fpha77KVVEwIR%2FGFZKkU3zN93XNcQrEKzjh4p78%2Fugq0ERceZWs91poFdCfZBik%2BgmGa4mg8Oz36m0Gu1NoCoRolWR6G59rRoNEoW%2Fer71eSYAJ1vP7IV1gvAAUU1spkOY5Q%2FHGreKxY1UhinGomgoAWVsKMR2VQiNtP2dgzmeWIgSOzbQgf9fjzE1R%2FUhxyy4ymebIYOU8RkUbRe8gJwWyzXGGVPLArcQ3b1bxXpYlTy99i2Nxc9ekKHzPC2V01bQ2arGMAHYQ7LoIujv5HPFLYztqZaNAj60zgmgXeyGkrw2LBKCgFr5IyNrQJkbgGKyZw9P%2FpFHPdZoiNUTCo9ofEBjqkAbMA8E5VDXtWGq1DBR5S1mVSIT%2B5IiqxWpapqEisZ9f2Yph1f9xtksMfDfATzVdUM%2BcJuOJuA35jA6pStBFRnC4Y%2F15jdB0xYjCehYCew7D%2FGqke3HDZWkPtOt7nB2h4GKLtSBjfDcj0S27yXB1JSMEEZMPcsnr3L8LGY3TXBoL1en4HfqPXFJ79ugivMhI1h6mcSHHQMLQfN4UNuJ8OxthbSZ8i&X-Amz-Signature=36d0dfa23901a0c43490bdd35184f8548658bf1353b88792221abd68d56b592d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

힙스터 병이 있어서 잘 돌아가는 vs code 냅두고 cursor 사용중인데,


wsl2을 통한 ubuntu에서 vscode를 실행할일이 있을때 곤란한 상황이 펼쳐지곤 한다


cursor를 지우면 깔끔하게 해결되는 문제지만…. cursor를 안쓸 순 없는걸=…


최초 cursor 설정때 cursor 커맨드를 code 커맨드로도 대체하는 속성이 있는데, 멋도 모르고 내가 그걸 체크해버려서 지웠다 깔아도 해당 옵션이 유지되었다…


### 일단 프로그램 추가 제거에서 cursor를 삭제하자

### 그리고 아래 디렉토리들을 전부 비워주면 된다

```c++
C:\Users\SBU\AppData\Roaming\Cursor
```

```c++
C:\Users\SBU\AppData\Local\Programs\cursor
```

```c++
C:\Users\SBU\AppData\Local\cursor-updater
```

# WSL2 cursor 문제 해결

🔗 [https://github.com/getcursor/cursor/issues/807](https://github.com/getcursor/cursor/issues/807)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e6821acc-4bad-4910-b1d3-a4117ae01990/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWT663WZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3s18XCy41jUwNanJquwsDFgS5Q1%2Fd1tS93J4pvJ7ENgIhAOxpjd0SNxMu8goCtz%2B8USKDpaKvyhg%2Bqkg%2FSWogZedRKv8DCCoQABoMNjM3NDIzMTgzODA1IgxHkIOrpDx%2FwF2YDKUq3ANAyH3j663BKkRpNGGPP4yDyq7qYs4jhUacynbydP7amxKG3FY1eUc6Cpx2RYie2V1X0li3FpO%2BZpF81nJhr%2B6xf9fEow%2B9gzWQMKbT7p4GvsoBQTNQuEjPe9gT5tzId6217sV3l%2BkVbzR1rM17RypQkVRi5yC8%2Bo2A5s7IeeJS%2FXaVLrBXwRjxeO9cxmLoK%2BtATnpUq8zp231Uux%2BRRF2o%2BPc1L%2FIEviEmLaGL55tdjT4NlGdqB8EKpnhl5S0Uvaea4tk5GPFj42GrbfQdwJ9rXUokCvVQo2LyzMNYWPuP%2Fpha77KVVEwIR%2FGFZKkU3zN93XNcQrEKzjh4p78%2Fugq0ERceZWs91poFdCfZBik%2BgmGa4mg8Oz36m0Gu1NoCoRolWR6G59rRoNEoW%2Fer71eSYAJ1vP7IV1gvAAUU1spkOY5Q%2FHGreKxY1UhinGomgoAWVsKMR2VQiNtP2dgzmeWIgSOzbQgf9fjzE1R%2FUhxyy4ymebIYOU8RkUbRe8gJwWyzXGGVPLArcQ3b1bxXpYlTy99i2Nxc9ekKHzPC2V01bQ2arGMAHYQ7LoIujv5HPFLYztqZaNAj60zgmgXeyGkrw2LBKCgFr5IyNrQJkbgGKyZw9P%2FpFHPdZoiNUTCo9ofEBjqkAbMA8E5VDXtWGq1DBR5S1mVSIT%2B5IiqxWpapqEisZ9f2Yph1f9xtksMfDfATzVdUM%2BcJuOJuA35jA6pStBFRnC4Y%2F15jdB0xYjCehYCew7D%2FGqke3HDZWkPtOt7nB2h4GKLtSBjfDcj0S27yXB1JSMEEZMPcsnr3L8LGY3TXBoL1en4HfqPXFJ79ugivMhI1h6mcSHHQMLQfN4UNuJ8OxthbSZ8i&X-Amz-Signature=1e1e3d96a5a93179c9c1efc729de105e6a1b7ffa26e979d457db55364e9e92cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

cursor . 했을때 위 문제 생김..


아래 코드를 복사하고 wsl2 기준 아래 디렉토리의 cursor 를 대체한다.

🔗 [https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394](https://gist.github.com/ddwang/0046da801bcb29d241869d37ad719394)

```c++
/mnt/c/Users/SBU/AppData/Local/Programs/cursor/resources/app/bin
```


그럼 이제 cursor . 하면 제대로 열림


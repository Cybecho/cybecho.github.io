---
title: "유니티 3D게임 쿼드뷰 17"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발을 위한 다양한 코드 예시와 기능 구현 방법: 게임 시작 및 종료 처리, 몬스터 랜덤 소환, 네비게이션 타겟 설정, 씬 관리 및 버튼 클릭 비활성화 방법 설명."
notion_id: "1402a9ea-4e6d-4d58-b0c8-674f341514bf"
notion_url: "https://www.notion.so/3D-17-1402a9ea4e6d4d58b0c8674f341514bf"
---

# 유니티 3D게임 쿼드뷰 17

> **Summary**
> 유니티 3D 게임 개발을 위한 다양한 코드 예시와 기능 구현 방법: 게임 시작 및 종료 처리, 몬스터 랜덤 소환, 네비게이션 타겟 설정, 씬 관리 및 버튼 클릭 비활성화 방법 설명.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=9g4prUqF2oA&t=5s)

> 🔥 **게임 스타트존 제작 구현**
> 다음과같은 코드를 구현하면, 상점스테이지와 게임스테이지를 나눌 수 있음
>
> ```c#
> //GameManager.cs
>
> public GameObject itemShop;
> public GameObject weaponShop;
> public GameObject startZone;
>
> public void GameStart()
> {
>     //메뉴 관련 오브젝트 비활성화
>     menuCam.SetActive(false);
>     gameCam.SetActive(true);
>
>     menuPanel.SetActive(false);
>     gamePanel.SetActive(true);
>
>     player.gameObject.SetActive(true); //비활성화해뒀던 플레이어 오브젝트 활성화
> }
>
> //스테이지 시작, 종료 함수 생성
> public void StageStart()
> {
>     //전투가 시작되면 상점 및 게임스타트 영역을 비활성화시킵니다
>     itemShop.SetActive(false);
>     weaponShop.SetActive(false);
>     startZone.SetActive(false);
>     isBattle = true; //전투상태 ON
>     StartCoroutine(InBattle());
> }
>
> //코루틴으로 전투 상태 구현
> IEnumerator InBattle()
> {
>     yield return new WaitForSeconds(5); //n초 동안 전투상태
>     StageEnd(); //전투가 끝나면 스테이지 종료 함수 호출
> }
>
> public void StageEnd()
> {
>     //플레이어를 시작 위치로 초기화
>     player.transform.position = Vector3.up * 0.8f;
>     //전투가 종료되면 상점 및 게임스타트 영역을 활성화시킵니다
>     itemShop.SetActive(true);
>     weaponShop.SetActive(true);
>     startZone.SetActive(true);
>
>     isBattle = false;
>     stage++; //스테이지를 한단계 올림
> }
> ```
>
>

> 🔥 **몬스터 프리팹  보완**
> 랜덤값을 몬스터 소환 수와 몬스터 소환 위치에 넣는다 랜덤한위치에 랜덤한수의 몬스터가 리스폰함
>
> ```javascript
>
> //GameManager.cs
>
> //몬스터 리스폰에 필요한 변수들 선언
> public Transform[] enemyZones;
> public GameObject[] enemies;
> public List<int> enemyList; //몬스터가 얼마나 소환될것인지 리스트 작성
>
> void Awake() 
> {
>     //몬스터 생성 정보를 불러옴
>     enemyList = new List<int>();
> }
>
> //코루틴으로 전투 상태 구현
> IEnumerator InBattle()
> {
>     while(enemyList.Count < 0)
>     {
>         //소환하는곳이 4곳이니 랜덤값 0~4 설정
>         //게임오브젝트 변수를 따로 만들어서 인스턴트를 생성함
>         //인스턴트 내용 : 인스턴트한다(몬스터프리팹[몹종류들[n]],소환될장소[].위치,소환될장소[].회전값)
>         int ranZone = Random.Range(0,4);
>         GameObject instantEnemy = Instantiate(enemies[enemyList[0]]
>                                             ,enemyZones[ranZone].position
>                                             ,enemyZones[ranZone].rotation);
>     }
> }
> ```
>
>

> 🔥 **프리팹으로 저장한 오브젝트에 네비게이션 target을 저장하는 방법은 바로 public으로설정한 변수에 타겟을 넣어주는거다.**

> 🔥 **SceneManagemen 함수를 쓰려면 라이브러리를 따로 불러와야함..

그 후에 ReStart Button에서도 On Click() 활성화시켜줘야합니다**
> ```javascript
> //GameManager.cs
>
> using UnityEngine.SceneManagement; //Scene 관련 함수를 사용하려면 해당 라이브러리 활성화
>
> //게임 오버 후, 메인 타이틀로 돌아가기 위해 재시작 함수 생성
> public void Restart()
> {
>     //씬이 하나밖에 없기 때문에 그냥 0눌러주면 된다
>     SceneManager.LoadScene(0);
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1691a51f-53cb-47c1-bae9-9f4bd6af6488/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGD4J3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCUjZ%2Fe0rUe6qenZ8sqVs2LIaqLI5KnK0eiD5ZAML1lIAIgfTIHivRxeUlViYJVDdvtDVgywFXU9rHrIb9OfRnTrj4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI4TDFnTDZsy%2BFJGzyrcA1ItRjBxF86PQqXGupbAAwu12Og2%2B5khilJnxmNK%2B%2BbQONScwzTQMiugblp5RmmCZbFc9DV320qbPs9dykoFszRUJXW9CycYSPa3%2B2yxj3C%2BkpM4mv2XuvEuxsAU1DtPJRHfAH31045sbDgVZVJ%2BGUG0Wa7v22h3Fr%2FbO5iV2Yfx0rMiQP9RkJHE4UCNNUF0Vm5kOLbdYEJJphqgJn5sHS%2Ff8xZnUO1x9gDKrvYo8HH1rSPXrnzJ%2BHULwUAjZPxYZVYVJf8%2F6KQbXKpCd2LYXXyOhsEsk%2BxcqkVySs1aZByrq6KjPWdmHNxYnWBT%2FZ1nx9tWg2wVi5nbMqgrFuwve5%2FPiAdG0ZWqP2UaJ5TjFGztVMpujlALaOxbbZeMjn61%2FWh9kT52AlsayKUiLvKFuttBTgH1g4QoHyy%2BANf%2FvcHg45UNI7n8PNYXKZo%2FlwjBwFuxR2qRAGJ40J6%2BMr%2FGiPUCZodP1%2B8h450oR74WEPHJWgzpf%2Fp490cHxM0HMmoN9UGTs%2BENUIoajrE%2FZCoLPAHy2cw2dUPw4caeiAu2YbU578unYPkSc4y4Nx4rz8cEUVYOLhO4MJCd34Ya0Y8TzNJx88ZZU8OKTwpR5YEEwyrXmzReUTW23d%2F8YKjmMLX2h8QGOqUB5chG1ZhHBl%2F3X5Df%2B2AMKVLCrT22jFx2ryHSc%2Fh7t87YNqxnnNzbiNCPtECV6sERRIUlxmuRb5yp7KYHrv3KZrLOM2EdA5WgNegHaV5lNSJeqgmQvr%2BDWVSsKKSY5NG%2FP0cvQzdkJzbT04SJQX1yDcGHlKvxK4%2Fn22PS%2FkUBqR1sdCULOqzv8ny%2B28De3iKVK04EIDf792FgLg5SOqFxtPbMPtTf&X-Amz-Signature=036825352a09784ce223406979c163051c0b2b9108f7c8a1d7f13f54c1c1ee8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **버튼 네비게이션을 None으로 해줘야 버튼으로 클릭이 안됩니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1ddc454a-1ba9-42d4-b87c-718211ce5bb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGD7YB55%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDw6SJfs8Zyag5k%2BwsZBVJT%2Bum5g%2FOf0E0o5dLKkBACwQIgHIvHFpOFaw%2FGtQHZ%2FDN%2BHovU001kJpnrkkya6GX3cv0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAeLv9WwmfJtPqFD5yrcA8Y8vupwf6PxxV1Ee4UOts8nDxeWWllb2uaI71JuDgSEuzIcF1%2BUoZEi88IVeP3UhbAs%2B117nQxdRTwtw2FFUB11lmP%2BCFqleL8xaS8UnC94HSvX7gLav25iAHnuVL8s2EvsoW8Vj66juOOp8Sn2dafQZovAaLsFxwWdE4LUsN%2FKF8Uhc%2FcL2myBHFIIR3F%2B09rFrjYrD3ktxnh0J8dyrTXJyHgqbpBLA7mwsJr0CpuqKKtJrEO86va1uvkFe8oO7pPBjEY2vM80qTVs1Rj0fUl2QseF0ogE6pFdH1GCN9NwAQG5G%2FTw%2BtwE4lrvL04wwtnnf3AQ7ELjQHzM9VdCMBjq64DBRIdNblcRm%2FO%2FRg0I28grvRpFSb9OsJcN%2FB5RnZwF5roODLHR9I9xGEN70%2BdBdoZfCWY88oIpYNrs7CrbVAacPmgP1MBAC1xZPzZ2Ph2i%2BLOJUmMPkypbJ5Zdwraxmusod%2B%2B9yO00I2N4JijO16bZebgZQFdKqXqe%2Br3YOAf0cqOpg1IVriII1Du2vq8bLya0FUKFMlHxEob1cE4vw2v4so2jTIc6iq2hW9h4fgDsoukKGNz4%2B4upENXcc8vnIR4JupsBk1UKU%2FmGM8u3XhEpHVLZywGn%2BD3nMOD1h8QGOqUBAhc2Dhge4pY506Wv8RatUN2WXMLR3JbEPs2flT%2BPEkivYhmtYjedhjL4FviBqdSXxb6pBuj9bmnUAKw9aXb4CkVZkUM9WqEg7A2Bv6xQhybCX5WD6zw0W2TO8Tx8oUv7jlIUX0XfyFJmVPsBpQddpYxF3C6ZWMEZLO16S1hZ7GTz1YYYLeTTSoc4kWmH8%2BvTlZjSWnQFTNTEFAJQaqdA4AUAThJD&X-Amz-Signature=7a8a999721b080701b17e0f1fc95e5d59e8170039986e9d50bdc7393ee684be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


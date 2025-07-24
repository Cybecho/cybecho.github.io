---
title: "유니티 3D게임 쿼드뷰 17"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에 관한 내용으로, 게임 시작 및 종료 기능 구현, 몬스터 소환 로직, 네비게이션 타겟 설정 방법, 씬 관리 함수 사용법, 버튼 클릭 방지 설정 등이 포함되어 있습니다."
notion_id: "1402a9ea-4e6d-4d58-b0c8-674f341514bf"
notion_url: "https://www.notion.so/3D-17-1402a9ea4e6d4d58b0c8674f341514bf"
---

# 유니티 3D게임 쿼드뷰 17

> **Summary**
> 유니티 3D 게임 개발에 관한 내용으로, 게임 시작 및 종료 기능 구현, 몬스터 소환 로직, 네비게이션 타겟 설정 방법, 씬 관리 함수 사용법, 버튼 클릭 방지 설정 등이 포함되어 있습니다.

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1691a51f-53cb-47c1-bae9-9f4bd6af6488/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQGCJQY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCy3Bo%2Fx0KfIIwVq2HS4XLlt6IXlP8mHOvMmYfKraThqQIhALuR36%2FP2ddU4ITeJfMETER5hm2ecd61HrjqdjxXwudgKv8DCC0QABoMNjM3NDIzMTgzODA1Igx3z1Zh7xdZTSSE%2BWAq3APXdKVl0%2B5OdE3deaBNEzfoqvh5O618OLTtRTtJ%2FVQKcOCn2a8iiCRqbW6RfJbZU9Am4NfITKxEks1ZZK3AF4DNtdpXLc1tdT3PX0HD3WfCZ1KBqyEL3cV3ygZ%2FNjh30aYnbJDVpP%2FM3kJJDOPEg9lOOscUvP0H1vw2J6nsmxehtzFMkjuurl0yIlnJ2r4xz82J5a9s7fLuhDMd9EeKfqG2roBaMHSukf%2BNLsWs3zg58rQyJL68f1fOI2vob6hbERyDYSl3yFQjhij%2FKEs14uI0ax2xLGYPS9LRm55VXJ%2FEDq2HwutncU3NSDO63OzaJJoQXi2fqO6S5X1JWTcpB0lcCI0%2BIxpnrKls0Z24vObiWE443jDFseYQ%2BA3NY0Xb9tcgjVoQVXNbZVeWtUfDERrYLWvTGHwr%2BNGzvE7WIIUNcOR0tM8%2BUo1ENEshXqtHKVNsiaUuhl5JvqvfBZF5yQ%2FNA1FNFDQ8wDEuFYJn3JVxXoaF1Th0Z3cV%2FiaRifKz2%2FX9ygU4CRmIObBt2FnliKGyl%2FJT6cTx2DjxOjEdIJNfYNZuTbqi7aqLUhVrPqmhnFF7XCquk%2FI%2BqlI95Lh1psPx88K%2BVsIrXc9BVRijXZ3HSmyoG8XEv4ixcSY5fjCLv4jEBjqkAbJU3dEw0VA8iBIyc86EoUNxkVndXeYC6WPgEX9ua4z%2Fo9b%2BV1qgZRDRqLxjkkOk4coKlblLGDMz8hIwZDrHtX6CIQcE4PK9tcAPzHdqkqzDw0WOIzZ%2B1JjqYESVBB9nS4DL9vTExjRKHUxSbGrLaHU7%2FzGlsnkUthTa%2Bh4IQRz5kmlKw%2FA4n0%2F6%2BVYMmnHptAFkiIRDEkQapmxovqfExAQPeNzg&X-Amz-Signature=44fa8389a7b5cfd28bfda4db89c423fcc48633b4f1047ef97ec978a797f496e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **버튼 네비게이션을 None으로 해줘야 버튼으로 클릭이 안됩니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1ddc454a-1ba9-42d4-b87c-718211ce5bb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHLV67G%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXTw7xzU4tis%2FDokuEtpsXOTzfQ2nhIpO9Uf5SJKfxXQIhANW306%2FsSKAt%2ByuXD5%2FQ0QAdLhx%2Fk%2B5Rka5T%2FzXNF%2B6dKv8DCC0QABoMNjM3NDIzMTgzODA1IgwMa7%2FxnOW8U3Ie5Pwq3ANC53IJ99Da5ZP8pD89bzE7ty4Cs9sWjo76vn5hbzAJl6og77W7L9QAR6MdzP7D8KqXklqtsJWr8FQn3XuNagdgeGgpVHzqBQ7%2B2cJ6pHq1dLCZhU70eTSyYgoNZT3ov%2Bky9s86yUcH0O%2BL15dnoxCJVOMpvs2D8LuhFmgXPDe38REDIkdzg91E%2FaLOc17cRQe3VjQ2WlBjn1TUdifT0%2FR0ncG2ZVTWHms1f3LE9Em8U8pSvWGvUE%2F9gdTglYgGJT%2FHGeYfbnH%2Fp86Makfb82O7YzgB4k1NOo2XJ3CWQXvN84rVi%2F%2F9R50zu2fdQUDUcPEdzZ7Ce36ix7wh1Hqolhuh5iD7%2BlXY7YmYsGyPReLBGMac%2BJJjjGvyoT289GpnTQQDtXszDTa9v0HY5oyujyxPdsCt7H9kyi0cfm8E6VQG60kAsSj8XVBFCDqsBmflV14OJUBrbDplnitwp17nasb4ySKJpFbOg6K%2Fy%2Boog2GfSa5n7iSWUDa48m%2BcXQxowdMRuWymtbue0QH4rO8iNwNEhbrBVbayqxYCIZUHVKNsZD9n2MTXCYjAI2Ttx6IHjSJq7RagS9gieD%2BDjemmFBt07w1NbAAATWxFewVRgcgFfsHxKNiqCb9xoVDXWTDOv4jEBjqkAXp2Rj9joD2jVYcznXkN5gp7E7xl9ImrCjLuXdnk1V2QLIMFgDEneywT1rpAsHL0S2CzHKOeieJ6AzQhwHgN2qWL8ArnxPokTNeUT9vESqviBYfez0B6mpuVyPe%2BfWzNUDQZMMdTeYXjxD7PBXzRGRwvX5gzI%2B22ovHWxm9Mg4ZACCEqTTXk8IYhxeWTtHRiO52z8%2BY0QxAFlUm8risnQ18T3vL8&X-Amz-Signature=9291d25a5efd07d7d69e08dd27223f662eb8ae8d830b5e95c40cfd9aa8d51b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


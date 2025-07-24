---
title: "유니티 3D게임 쿼드뷰 16"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에 관한 내용으로, UI 로직 구성, 타이틀 카메라 제작, PlayerPrefs를 통한 저장 기능, GameManager 생성 및 변수 설정, 점수 및 플레이 시간 포맷 구현, 보스 체력 표시 방법 등을 다루고 있습니다. 또한, 애니메이션 추가 및 메뉴 관리에 대한 코드 예시도 포함되어 있습니다."
notion_id: "1aab9cfe-6a86-49ca-b7a8-1e1bc9d689ea"
notion_url: "https://www.notion.so/3D-16-1aab9cfe6a8649cab7a81e1bc9d689ea"
---

# 유니티 3D게임 쿼드뷰 16

> **Summary**
> 유니티 3D 게임 개발에 관한 내용으로, UI 로직 구성, 타이틀 카메라 제작, PlayerPrefs를 통한 저장 기능, GameManager 생성 및 변수 설정, 점수 및 플레이 시간 포맷 구현, 보스 체력 표시 방법 등을 다루고 있습니다. 또한, 애니메이션 추가 및 메뉴 관리에 대한 코드 예시도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7B9BsVnG8D8&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=16)

> 🔥 **메뉴용 카메라를 따로 생성하고 애니메이션을 제작하여 메뉴 카메라에 삽입**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/df87470e-df6e-4b50-b0f5-e05e52056a6f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI2GPKF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIER68DXoyFn59G%2BfwjbQfJU%2F8f2mUhQjfwsMuZ6MbFtPAiAsO0%2FKt99IQmVchNC%2F9MKBBXO1ImtkMhNknrVLsRs0DCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM44EJGKNjLXliwoWBKtwDL%2F7zyo%2BTK1pCg7IXh5SBg6YOL2dOovOe62CN%2FL1FYZLs2ObP5Ju9stR88uMGLoqUJW0G3WdBcF4X5R0e4coovTP79vwIymY0Y4bZfva9d3q6PqO7L5iKKEv5DNkozJEt%2B2QNc%2FZFZTVW8vBvQPps8EcDuVRamubr7UiCgvKImzBV4FsXbhJrIUtv%2FMabVA85WzNl5dXOeleb4TuQCiCWtDH0MIcAonxqen%2FPWms3OJKm1h11qAN7uX%2BBiYu3qQgKE8MEkF%2FIy%2F5FOTf7LjVK0S2M0RHGPC%2BY2L1bzc2BVQuEqX3WqDCVjZ7tjjDYSVADJvG8MaPf7bidvka7R2PFRwOx5qqzsy6qv0xcKXJQ287ETd3VjB2Qr4Xer3KV82R0BPkBEMGFHT0%2FWBoIeB0sUbus%2BnBCK%2FCUgfnx7HZJyPxBT%2FTkJH3OdziThZyQ5nPpyUIlgY6HfKnTSds4OuMka4sy4b%2F%2BSXK0vIvElb665OQ5fxwBp7Xi5ArIEvwVeX9iFEAPYxvEswTZE1dOSlw0yqTSGZeEvo1QZCuumrNew0NQvwaH1QbNbtcTG4fw9NmXc9UOnHbAqQuqY9v8ZvMNQatYD4LRrNV3rtX97thma7MNd2FYNFI%2FPmUROtUwtr%2BIxAY6pgGlcGqyDSfw98R5QYRt9uAOUJh8duVi0nikGu6oB6M7WgRkFHLvGxup3Z9t%2BltTZFf8j0lU9hIYmjV1cPad0PVcId5KgThc8FiLN8vdOWCLF1Ou%2F1G%2B290OiChENhuXmTLkCb%2FMOAGn8meyCbXF2C2WvvSqA9k5isCNp0L4ZwCfmUQR0l%2FianhhkYw50zzTd9%2B9t7Qscbg97n40xoiGTqtXVkHfyOuM&X-Amz-Signature=3b1f3bb9b7d9f63f54a33a76ebcf3e3a3b5ed31e1022dece7e550996eaeeb375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0573a780-c139-4701-b4bf-908d54bf329b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI2GPKF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIER68DXoyFn59G%2BfwjbQfJU%2F8f2mUhQjfwsMuZ6MbFtPAiAsO0%2FKt99IQmVchNC%2F9MKBBXO1ImtkMhNknrVLsRs0DCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM44EJGKNjLXliwoWBKtwDL%2F7zyo%2BTK1pCg7IXh5SBg6YOL2dOovOe62CN%2FL1FYZLs2ObP5Ju9stR88uMGLoqUJW0G3WdBcF4X5R0e4coovTP79vwIymY0Y4bZfva9d3q6PqO7L5iKKEv5DNkozJEt%2B2QNc%2FZFZTVW8vBvQPps8EcDuVRamubr7UiCgvKImzBV4FsXbhJrIUtv%2FMabVA85WzNl5dXOeleb4TuQCiCWtDH0MIcAonxqen%2FPWms3OJKm1h11qAN7uX%2BBiYu3qQgKE8MEkF%2FIy%2F5FOTf7LjVK0S2M0RHGPC%2BY2L1bzc2BVQuEqX3WqDCVjZ7tjjDYSVADJvG8MaPf7bidvka7R2PFRwOx5qqzsy6qv0xcKXJQ287ETd3VjB2Qr4Xer3KV82R0BPkBEMGFHT0%2FWBoIeB0sUbus%2BnBCK%2FCUgfnx7HZJyPxBT%2FTkJH3OdziThZyQ5nPpyUIlgY6HfKnTSds4OuMka4sy4b%2F%2BSXK0vIvElb665OQ5fxwBp7Xi5ArIEvwVeX9iFEAPYxvEswTZE1dOSlw0yqTSGZeEvo1QZCuumrNew0NQvwaH1QbNbtcTG4fw9NmXc9UOnHbAqQuqY9v8ZvMNQatYD4LRrNV3rtX97thma7MNd2FYNFI%2FPmUROtUwtr%2BIxAY6pgGlcGqyDSfw98R5QYRt9uAOUJh8duVi0nikGu6oB6M7WgRkFHLvGxup3Z9t%2BltTZFf8j0lU9hIYmjV1cPad0PVcId5KgThc8FiLN8vdOWCLF1Ou%2F1G%2B290OiChENhuXmTLkCb%2FMOAGn8meyCbXF2C2WvvSqA9k5isCNp0L4ZwCfmUQR0l%2FianhhkYw50zzTd9%2B9t7Qscbg97n40xoiGTqtXVkHfyOuM&X-Amz-Signature=2cf1511b3da8b58d617285bd0ff2f32cbef979d65a2ecdd0bfad35a62ee0baf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07401724-6c7e-4620-b7b4-f455d795ed51/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI2GPKF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIER68DXoyFn59G%2BfwjbQfJU%2F8f2mUhQjfwsMuZ6MbFtPAiAsO0%2FKt99IQmVchNC%2F9MKBBXO1ImtkMhNknrVLsRs0DCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM44EJGKNjLXliwoWBKtwDL%2F7zyo%2BTK1pCg7IXh5SBg6YOL2dOovOe62CN%2FL1FYZLs2ObP5Ju9stR88uMGLoqUJW0G3WdBcF4X5R0e4coovTP79vwIymY0Y4bZfva9d3q6PqO7L5iKKEv5DNkozJEt%2B2QNc%2FZFZTVW8vBvQPps8EcDuVRamubr7UiCgvKImzBV4FsXbhJrIUtv%2FMabVA85WzNl5dXOeleb4TuQCiCWtDH0MIcAonxqen%2FPWms3OJKm1h11qAN7uX%2BBiYu3qQgKE8MEkF%2FIy%2F5FOTf7LjVK0S2M0RHGPC%2BY2L1bzc2BVQuEqX3WqDCVjZ7tjjDYSVADJvG8MaPf7bidvka7R2PFRwOx5qqzsy6qv0xcKXJQ287ETd3VjB2Qr4Xer3KV82R0BPkBEMGFHT0%2FWBoIeB0sUbus%2BnBCK%2FCUgfnx7HZJyPxBT%2FTkJH3OdziThZyQ5nPpyUIlgY6HfKnTSds4OuMka4sy4b%2F%2BSXK0vIvElb665OQ5fxwBp7Xi5ArIEvwVeX9iFEAPYxvEswTZE1dOSlw0yqTSGZeEvo1QZCuumrNew0NQvwaH1QbNbtcTG4fw9NmXc9UOnHbAqQuqY9v8ZvMNQatYD4LRrNV3rtX97thma7MNd2FYNFI%2FPmUROtUwtr%2BIxAY6pgGlcGqyDSfw98R5QYRt9uAOUJh8duVi0nikGu6oB6M7WgRkFHLvGxup3Z9t%2BltTZFf8j0lU9hIYmjV1cPad0PVcId5KgThc8FiLN8vdOWCLF1Ou%2F1G%2B290OiChENhuXmTLkCb%2FMOAGn8meyCbXF2C2WvvSqA9k5isCNp0L4ZwCfmUQR0l%2FianhhkYw50zzTd9%2B9t7Qscbg97n40xoiGTqtXVkHfyOuM&X-Amz-Signature=7e71a45d41955c1031af81ffd4631d9e8cd3ec9ec62e85b198cecac46c76764f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **초기화면 점수설정하기위해 Player.cs에서 PlayerPrefs 코드 추가**
> ```c#
> //Player.cs
>
> void Awake()
>     {
>         Debug.Log(PlayerPrefs.**GetInt**("MaxScore"));
>         PlayerPrefs.**SetInt**("MaxScore",112500);
>     }
> ```
>
> # 점수 설정은 Set자료형
> 점수 불러오기는 Get자료형
>
>

> 🔥 **GameManager.cs 생성하여 메뉴 관리**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f0cb8e0-33a5-4e03-9c6c-7f0a7e57613b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM4FUNE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG89M6zbMmclqB4tAuAg23lrWW6Bq7pVexyRogGkbQOZAiEAg6VaF0AiAPnWHB9DCqbj6PFwDsVeug4GmbH94PLcbIMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLwf%2BgWaypept7ycIircA05nh5R1FfJ5aj7gHPWbcJ2Mz1XWEvA9XaPvQB%2FHd5uF%2F0%2F2Ixr39JU2l7jQN%2FrAhe3lPhCaqamkmlE1CpLTdxD6jw1s%2BnR4dxA%2FX2qlZEQVzYKJMk8eou5JBtHAnHSewZZIqXEFNpnQrzPUTeD%2BeVKCOlICVpFK2vv%2FpqrKZH5oX%2FSlxb0IAeJd2P3%2BvmDbtqaBs1YsP%2FU%2Fm8OLGqEq0y5hQsOBfrF0OxnWUpKwTfi3fWuAhSQot%2BiigwRO17iKfZ8my8tmoiD5tsFNacmQMt0qnMk1kYiiJrS55aZl8F2lsdFkWwAw64A7tgKwtP0GKUkPWy31P10nfUvDBl%2FAlsbTWr71KK4hfrBFWzU0MA9x2gojPJcs5ytSxVETBvlkIhlvA35moHIVEKwqA2p%2FFAAVArKYYvN5wd%2BpzEYnmC%2FW%2B3QFV%2FT6qGq3J6fqd7o3fmBIuIL%2BtbpNW1In7rYkbxgWzyIjH9GTGf6zE%2BHWCKnjjVimhua9qyrklYgXb3E3726bPlt9Ubi250hGUi7H%2F5SiqJAH3M5i5L0a4XB8rgNI1HzMeUo7%2ByWScckJ3iE8soI9JKSiNosG9m2EySDRFazfC6qKVPiLwNCI%2FJKU6g5jCrj%2Fh1GBxgcO7a4VMLy%2FiMQGOqUBfyc4IPuwhgQN03TzZtlHBUnm%2FvWmsEf3fz%2FbZY%2B3GiS82QEvdjGq1BVUHeN4Xgm4hb%2FRvl2%2FTMu%2B7wt4ahxXVUf0RPrrHk05wVOa9cPUEW9S4VS6Ss3aLNI%2BkJyrDeBmlmRRzEtgFhy3zvVvhTmnmp3H0Y9ISv7UhXN9QMHIuSMVRyw20r%2BguTJrRH7hRDfUu3fsMBazYg53pDs4IpH2sY6J5pSH&X-Amz-Signature=08334d70ab11466bcd154018bb2b592f013e44de11fd0484798f7e94badda834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## 인게임에 쓰이는 요소들을 변수들로 설정
>
> ```c#
> //GameManager.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
> using UnityEngine.UI; //UI를 다루기 위해선 해당 라이브러리 활성화
>
> public class GameManager : MonoBehaviour
> {
>     //게임매니저가 필요한 변수들부터 실행
>     public GameObject menuCam;
>     public GameObject gameCam;
>     public Player player;
>     public Boss boss;
>     public int stage;
>     public float playTime; //플레이시간
>     public bool isBattle; //현재 전투 스테이지인지?
>     public int enemyCntA;
>     public int enemyCntB;
>     public int enemyCntC;
>
>     //UI를 위한 변수설정
>     public GameObject menuPanel;
>     public GameObject gamePanel;
>     public Text maxScoreTxt;
>     public Text scoreTxt; //gamePanel 상단부
>     public Text stageTxt;
>     public Text playTimeTxt;
>     public Text PlayerHealthTxt; //gamePanel 하단부
>     public Text PlayerAmmoTxt;
>     public Text PlayerCoinTxt;
>     public Text enemyATxt;
>     public Text enemyBTxt;
>     public Text enemyCTxt;
>     public Image weapon1Img; //gamPanel 무기부
>     public Image weapon2Img;
>     public Image weapon3Img;
>     public Image weaponRImg;
>     public RectTransform bossHealthGroup; //보스 HP를 활성화시키는 스위치
>     public RectTransform bossHealthBar; //보스 피통
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d012f7be-ee44-4051-9499-48f353a92d7a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM4FUNE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG89M6zbMmclqB4tAuAg23lrWW6Bq7pVexyRogGkbQOZAiEAg6VaF0AiAPnWHB9DCqbj6PFwDsVeug4GmbH94PLcbIMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLwf%2BgWaypept7ycIircA05nh5R1FfJ5aj7gHPWbcJ2Mz1XWEvA9XaPvQB%2FHd5uF%2F0%2F2Ixr39JU2l7jQN%2FrAhe3lPhCaqamkmlE1CpLTdxD6jw1s%2BnR4dxA%2FX2qlZEQVzYKJMk8eou5JBtHAnHSewZZIqXEFNpnQrzPUTeD%2BeVKCOlICVpFK2vv%2FpqrKZH5oX%2FSlxb0IAeJd2P3%2BvmDbtqaBs1YsP%2FU%2Fm8OLGqEq0y5hQsOBfrF0OxnWUpKwTfi3fWuAhSQot%2BiigwRO17iKfZ8my8tmoiD5tsFNacmQMt0qnMk1kYiiJrS55aZl8F2lsdFkWwAw64A7tgKwtP0GKUkPWy31P10nfUvDBl%2FAlsbTWr71KK4hfrBFWzU0MA9x2gojPJcs5ytSxVETBvlkIhlvA35moHIVEKwqA2p%2FFAAVArKYYvN5wd%2BpzEYnmC%2FW%2B3QFV%2FT6qGq3J6fqd7o3fmBIuIL%2BtbpNW1In7rYkbxgWzyIjH9GTGf6zE%2BHWCKnjjVimhua9qyrklYgXb3E3726bPlt9Ubi250hGUi7H%2F5SiqJAH3M5i5L0a4XB8rgNI1HzMeUo7%2ByWScckJ3iE8soI9JKSiNosG9m2EySDRFazfC6qKVPiLwNCI%2FJKU6g5jCrj%2Fh1GBxgcO7a4VMLy%2FiMQGOqUBfyc4IPuwhgQN03TzZtlHBUnm%2FvWmsEf3fz%2FbZY%2B3GiS82QEvdjGq1BVUHeN4Xgm4hb%2FRvl2%2FTMu%2B7wt4ahxXVUf0RPrrHk05wVOa9cPUEW9S4VS6Ss3aLNI%2BkJyrDeBmlmRRzEtgFhy3zvVvhTmnmp3H0Y9ISv7UhXN9QMHIuSMVRyw20r%2BguTJrRH7hRDfUu3fsMBazYg53pDs4IpH2sY6J5pSH&X-Amz-Signature=62d5c997b01a3fe8ee95dee94391a944c59f63ffa2258046bbaace4286c99051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **메인메뉴 구현**
> > 🔥 **string.Format(); 함수로 문자열 양식 적용 {0:n0} 의미**
> > ```javascript
> > //GameManager.cs
> >
> > void Awake() 
> >     {
> >         //최고점수 불러오기
> >         //그냥 GetInt하면 기존 maxScore가 String으로 선언되어있기때문에
> >         //string.Format() 함수로 문자열 양식을 적용할것이다
> >         //string.Format("어떤양식을원하는가?",실제 값)
> >         maxScoreTxt.text = string.Format(("{0:n0}"),PlayerPrefs.GetInt("MaxScore"));
> >     }
> > ```
> >
> > ```c#
> > 괄호사이에 표기형식을 "" 를 감싸서 넣어주면 된다.
> >
> > 변수.ToString("N0"); 
> >
> > [ F : 실수 ]
> > F0 : 소수점 없이 표기  1234
> >
> > F1 : 소수점 한자리 1234.5
> >
> > F2 : 소수점 두자리 1234.56
> >
> > ...
> >
> > [ N : 자릿수를 표기하는 실수 ]
> > N0 : 소수점 없이 표시 + 천단위마다 , 표기 1,234
> >
> > N1 : 소수점 한자리 + 천단위마다 , 표기 1,234.5
> >
> > N2 : 소수점 두자리 + 천단위마다 , 표기 1,234.56
> >
> > ...
> >
> > [ P : 백분률 ]
> > P0 : %로 표기. 0.3f -> 30%
> >
> >
> >
> > [ D : 0을 붙이는 정수 ]
> > D0 : 123
> >
> > D1 : 한자리 123
> >
> > D5 : 다섯자리 00123
> > ```
> >
> >
>
> > 🔥 **게임스타트 눌렸을시 메인메뉴 비활성화하고 게임메뉴 활성화하는 코드를 작성한 후에 OnClick()에서 함수를 호출한다**
> > ```javascript
> > //GameManager.cs
> >
> >     public void GameStart()
> >     {
> >         //메뉴 관련 오브젝트 비활성화
> >         menuCam.SetActive(false);
> >         gameCam.SetActive(true);
> >
> >         menuPanel.SetActive(false);
> >         gamePanel.SetActive(true);
> >
> >         player.gameObject.SetActive(true); //비활성화해뒀던 플레이어 오브젝트 활성화
> >     }
> > ```
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5e6fc347-8594-4849-beea-8bd093e99e04/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFG2JC7L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD4icC%2BzVGE%2FlLYqtC%2B%2F8NUTS5jd%2B69ZuLVNfj13jz8QgIhAIoWBGpUS2GeAFCiAtS%2Fd5OAvXpQfaFpqzNjeh86zK38Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwOVxKLA6L%2BPHBjkikq3AO8Xko5%2B5j0M92BwCtLZ%2F7ueJCBTdN2GGj5oJUVVEfm5AwQf9S3se7F1LEgmowoG%2BwyM6stZFCIbeuFyM3MyeVbh%2FK1EPHTXtlhU2Ny3rGqpas1BaL5c90%2FwxIyzyGGFY1b879BRfaL%2B7nKC7Iu3Oa8rvTYcEIet2EVs6Yl40Yh1TJhKrTP3T%2FSSKEXQyO15h9Ads6QW3W36sHgaAcBEPtLVoxgtW9fHOxhfAjkauS7Sr%2FNsZ2K9wz%2FZxByZufzee%2FY1PDzIIg8ydGcdJ3O7bkmNFhQ9Waq%2Far7iXizNTF3t%2FsvrFE6uVWfna62YliyiahIlLd1Ix7JGAVR5NJn62iQSmcuVmLr4PAD%2Fx1y%2BX2R8DClCdmZKs19wgKFuUSv4UE%2Fe0ppnYF%2FzD0yNX%2B8gOkkx2UXzjAjHteJW1IjkCR6CQDK6qATdCmg6kAb7ZO9B0MpQ9R24zJI2BSijZ5suWxKQvZi4QNrDZ9TQqM7PyvWriqsb34OyVhEbyRIjhRbUMkUx5ZW2rH%2FYkXjALIrTB%2FutjvgwemSOeulP1oGbGoTmrcm8nxsnaXvq3jPiuHhEzSgcrRxcOnjCwz3Bo31oGyy5q7OabHgsASbGjjzdtjTGoBxCa9qTkVa36aCoDCsv4jEBjqkAXv8QIeE%2BYPn%2BKJ%2FH1pNGFebLubiu7Vt7QyZQOMAfJhwkdc4sj9rljfDFUO4qK66TQtdqkUq0qhk3IM6W%2Bjx0fTTE0r79s%2BJejVcXU0Gv0AR5cMQbGrWhWNwpiugBcjhtKgSiQllKBMHHo6whDWS9LkOmfts5HsfIY7rc07aXQKVSo3nv%2FCwejJ9QkVxQDrpHmYhfIBhh0JaemAAKolgSK4EPkeB&X-Amz-Signature=1913b720c1e4007da15822626cc96822b58e53101c314f56557a8468433e85ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> > 🔥 **LateUpdater 활용한 메뉴 UI 업데이트**
> > ```c#
> > //GameManager.cs
> >
> > //LateUpdate : Update()가 끝난 후 호출되는 생명주기
> >     void LateUpdate() 
> >     {
> >         //플레이어 스크립트에서 점수 체력 코인 정보 변수에 저장
> >         scoreTxt.text = string.Format(("{0:n0}"),player.score);
> >         stageTxt.text = "STAGE " + stage;
> >         playTimeTxt.text = "";
> >
> >         PlayerHealthTxt.text = player.health + " / " + player.maxHealth;
> >         PlayerCoinTxt.text = string.Format(("{0:n0}"),player.coin);
> >
> >         //만약 플레이어의 장착템이 null이거나 melee라면 표시를 '-' 로 표기
> >         if(player.equipweapon == null)
> >             PlayerAmmoTxt.text = "- / " + player.ammo;
> >         else if(player.equipweapon.type == Weapon.Type.Melee)
> >             PlayerAmmoTxt.text = "- / " + player.ammo;
> >         else
> >             PlayerAmmoTxt.text = player.equipweapon.curAmmo + " / " + player.ammo;
> >
> >         //무기가 00입니까? [n] 맞다면? 1 아니라면: 0
> >         weapon1Img.color = new Color(1,1,1, player.hasWeapons[0] ? 1 : 0); //망치
> >         weapon2Img.color = new Color(1,1,1, player.hasWeapons[1] ? 1 : 0); //권총
> >         weapon3Img.color = new Color(1,1,1, player.hasWeapons[2] ? 1 : 0); //서브머신건
> >         weaponRImg.color = new Color(1,1,1, player.hasGrenades > 0 ? 1 : 0); //수류탄이 0개보단 많다
> >
> >         //각 적들의 수
> >         //적의 수를 설정하여 문자열로 저장 후 UI에 저장
> >         enemyATxt.text = enemyCntA.ToString();
> >         enemyBTxt.text = enemyCntB.ToString();
> >         enemyCTxt.text = enemyCntC.ToString();
> >
> >
> >     }
> > ```
> >
> >
>
> > 🔥 **시 분 초 00:00:00 포맷에 맞게 구현**
> > ```javascript
> > //GameManager.cs
> >
> > void Update()
> > {
> >     //싸울때만 플레이타임을 더할것임
> >     if(isBattle)
> >         playTime  += Time.deltaTime;
> >
> > }
> >
> > void LateUpdate()
> > {
> > 		int hour = (int)(playTime / 3600);
> >     int min = (int)((playTime - hour * 3600) / 60); //이미 시간단위로 나눴기 때문에 그 나눈값을 60으로 나눔
> >     int second = (int)(playTime % 60); //분을 나눈 나머지값이 초다
> >     playTimeTxt.text = string.Format("{0:00}",hour) + ":" + string.Format("{0:00}",min) + ":" + string.Format("{0:00}",second);
> > }
> > ```
> >
> >
>
> > 🔥 **보스체력구현**
> > ```c#
> > //GameManager.cs
> >
> > void LateUpdate()
> > {
> > 		//보스의 현재체력에서 최대체력을 나눈값을 X축에 넣어서 크기를 줄여준다
> >     bossHealthBar.localScale = new Vector3((float)boss.curHealth / boss.maxHealth,1,1);
> > }
> > ```
> >
> >
>
>
>


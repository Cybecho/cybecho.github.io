---
title: "유니티 3D게임 쿼드뷰 16"
date: 2023-02-26T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발을 위한 UI 로직 구성, 타이틀 카메라 제작, PlayerPrefs 저장 기능 구현, GameManager 생성 및 점수 설정, 게임 시작 시 메뉴 비활성화, 플레이어 상태 업데이트 및 보스 체력 표시 기능을 포함한 다양한 요소들이 설명되어 있습니다."
notion_id: "1aab9cfe-6a86-49ca-b7a8-1e1bc9d689ea"
notion_url: "https://www.notion.so/3D-16-1aab9cfe6a8649cab7a81e1bc9d689ea"
---

# 유니티 3D게임 쿼드뷰 16

> **Summary**
> 유니티 3D 게임 개발을 위한 UI 로직 구성, 타이틀 카메라 제작, PlayerPrefs 저장 기능 구현, GameManager 생성 및 점수 설정, 게임 시작 시 메뉴 비활성화, 플레이어 상태 업데이트 및 보스 체력 표시 기능을 포함한 다양한 요소들이 설명되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=7B9BsVnG8D8&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=16)

> 🔥 **메뉴용 카메라를 따로 생성하고 애니메이션을 제작하여 메뉴 카메라에 삽입**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/df87470e-df6e-4b50-b0f5-e05e52056a6f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5HTNCJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHeCH4RmoQof1j4DUvWNVFXip2udCyg2IhrJKH%2BXw%2BQ%2FAiA7W9e125sIHgQyO8Hkr3MtQEDIVHl3rlL1UoztxpHEeir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMOVPUb67iEx%2BSOWxmKtwD6BOJ%2FG6ripzpjM1UX4vWonoHwIq7Wr9OEUhr%2Bgfmg7mo%2F1K2kkQ%2FlhtyTze67YJPKbrZJE6mHHIM6COlEIww%2BkvAHvs7g9kTUs2r%2BQaIH7QpX254ZRbYIzagtYV5uNEZT4mwBf7IyOtHQwrGLiT%2FpnunPwAPBSufvqaxV5GoOfqOV5WgPJ7B869ZFZ%2FlDDiQIhFCzqzSIcDt2Ssv%2FZh4B7dmWXFH0Ltc23f9Umezf7MbHsOxRIrbEoYfM80Ir98Y%2B12vcBMATwl%2By1HjKbOvv2pQTO2Vi0NVz1vEOYoo6VVgOD14UOKF2axUfy19NGLailtlYgWdL2uSJ2W9Cn93KMkxY%2BZmNkWei0d6UOTK%2BxS0omp8%2FxSm9MlMyrdJMBP2qlE%2Bf9Tq0nF8M0h7Y%2B3T1Lx2c%2BgAR4vT6FgkgHqlr9ScrFJgkwF%2BG0K0fRFDnMS%2F0CAxO7TuEArlMLytFljnWXoj6vXt8Nn08%2FWYs1%2BmlbjEz%2BvwWAGEH%2FGTn3NlQJBwkLSJwTHfq2YXkal9PQh%2B4v%2FkUe7bcVPnh4eN1IcrjZfRrGmPGnD0sSmZ0bT9iuKOF9CryJ8iGkNEyIhjCJj0mfzNogk372NZh%2FLde%2BdEKWhHWxMhsZYJuRdi36MwuPWHxAY6pgF%2FCDQjcCV7c7WTI8%2Bls%2FLiu3A%2F%2BCDh1kkZox6BNysywm1cnlqE02%2BrfhZiMKAEWVHIPtx6sq1QaxnhqEPa8HRWC%2FM5zp2t5o3cAngA8vXnnj1CalyALe4PZ%2Bdt18WUt16MuXy0WUWPUF0ZXEYl%2FTTNFdp2YKXH0nhQw8e6zRs4YcgkXooeMLilI9eyGpnSjNf83r9ae8mWap16eukBKhdcAPjT%2FqCq&X-Amz-Signature=d062dd0ac848e2e6d4050a0b3855be43fb666f22adf1551b7b620ccabeccaaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0573a780-c139-4701-b4bf-908d54bf329b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5HTNCJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHeCH4RmoQof1j4DUvWNVFXip2udCyg2IhrJKH%2BXw%2BQ%2FAiA7W9e125sIHgQyO8Hkr3MtQEDIVHl3rlL1UoztxpHEeir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMOVPUb67iEx%2BSOWxmKtwD6BOJ%2FG6ripzpjM1UX4vWonoHwIq7Wr9OEUhr%2Bgfmg7mo%2F1K2kkQ%2FlhtyTze67YJPKbrZJE6mHHIM6COlEIww%2BkvAHvs7g9kTUs2r%2BQaIH7QpX254ZRbYIzagtYV5uNEZT4mwBf7IyOtHQwrGLiT%2FpnunPwAPBSufvqaxV5GoOfqOV5WgPJ7B869ZFZ%2FlDDiQIhFCzqzSIcDt2Ssv%2FZh4B7dmWXFH0Ltc23f9Umezf7MbHsOxRIrbEoYfM80Ir98Y%2B12vcBMATwl%2By1HjKbOvv2pQTO2Vi0NVz1vEOYoo6VVgOD14UOKF2axUfy19NGLailtlYgWdL2uSJ2W9Cn93KMkxY%2BZmNkWei0d6UOTK%2BxS0omp8%2FxSm9MlMyrdJMBP2qlE%2Bf9Tq0nF8M0h7Y%2B3T1Lx2c%2BgAR4vT6FgkgHqlr9ScrFJgkwF%2BG0K0fRFDnMS%2F0CAxO7TuEArlMLytFljnWXoj6vXt8Nn08%2FWYs1%2BmlbjEz%2BvwWAGEH%2FGTn3NlQJBwkLSJwTHfq2YXkal9PQh%2B4v%2FkUe7bcVPnh4eN1IcrjZfRrGmPGnD0sSmZ0bT9iuKOF9CryJ8iGkNEyIhjCJj0mfzNogk372NZh%2FLde%2BdEKWhHWxMhsZYJuRdi36MwuPWHxAY6pgF%2FCDQjcCV7c7WTI8%2Bls%2FLiu3A%2F%2BCDh1kkZox6BNysywm1cnlqE02%2BrfhZiMKAEWVHIPtx6sq1QaxnhqEPa8HRWC%2FM5zp2t5o3cAngA8vXnnj1CalyALe4PZ%2Bdt18WUt16MuXy0WUWPUF0ZXEYl%2FTTNFdp2YKXH0nhQw8e6zRs4YcgkXooeMLilI9eyGpnSjNf83r9ae8mWap16eukBKhdcAPjT%2FqCq&X-Amz-Signature=9f0dd5018d76d16b33b15a51e005759cf1fc1da9bc662ea8348da678fc5f7324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07401724-6c7e-4620-b7b4-f455d795ed51/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5HTNCJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHeCH4RmoQof1j4DUvWNVFXip2udCyg2IhrJKH%2BXw%2BQ%2FAiA7W9e125sIHgQyO8Hkr3MtQEDIVHl3rlL1UoztxpHEeir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMOVPUb67iEx%2BSOWxmKtwD6BOJ%2FG6ripzpjM1UX4vWonoHwIq7Wr9OEUhr%2Bgfmg7mo%2F1K2kkQ%2FlhtyTze67YJPKbrZJE6mHHIM6COlEIww%2BkvAHvs7g9kTUs2r%2BQaIH7QpX254ZRbYIzagtYV5uNEZT4mwBf7IyOtHQwrGLiT%2FpnunPwAPBSufvqaxV5GoOfqOV5WgPJ7B869ZFZ%2FlDDiQIhFCzqzSIcDt2Ssv%2FZh4B7dmWXFH0Ltc23f9Umezf7MbHsOxRIrbEoYfM80Ir98Y%2B12vcBMATwl%2By1HjKbOvv2pQTO2Vi0NVz1vEOYoo6VVgOD14UOKF2axUfy19NGLailtlYgWdL2uSJ2W9Cn93KMkxY%2BZmNkWei0d6UOTK%2BxS0omp8%2FxSm9MlMyrdJMBP2qlE%2Bf9Tq0nF8M0h7Y%2B3T1Lx2c%2BgAR4vT6FgkgHqlr9ScrFJgkwF%2BG0K0fRFDnMS%2F0CAxO7TuEArlMLytFljnWXoj6vXt8Nn08%2FWYs1%2BmlbjEz%2BvwWAGEH%2FGTn3NlQJBwkLSJwTHfq2YXkal9PQh%2B4v%2FkUe7bcVPnh4eN1IcrjZfRrGmPGnD0sSmZ0bT9iuKOF9CryJ8iGkNEyIhjCJj0mfzNogk372NZh%2FLde%2BdEKWhHWxMhsZYJuRdi36MwuPWHxAY6pgF%2FCDQjcCV7c7WTI8%2Bls%2FLiu3A%2F%2BCDh1kkZox6BNysywm1cnlqE02%2BrfhZiMKAEWVHIPtx6sq1QaxnhqEPa8HRWC%2FM5zp2t5o3cAngA8vXnnj1CalyALe4PZ%2Bdt18WUt16MuXy0WUWPUF0ZXEYl%2FTTNFdp2YKXH0nhQw8e6zRs4YcgkXooeMLilI9eyGpnSjNf83r9ae8mWap16eukBKhdcAPjT%2FqCq&X-Amz-Signature=42d9a05e0089690f90a7962550b7c0379a4fad1c233229161555915ee3d48884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f0cb8e0-33a5-4e03-9c6c-7f0a7e57613b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UII77OOE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEcF7TfErvnaMVCwaxpD8wh6lY1PpmuNRTu4B3E4ipkNAiA24IWMsRZ8yoq9phd0HJnVMQf9V3ea7sucToBhNylkfCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMCJYeS%2FgAQvJMCiFnKtwDgvnd8XAxAv7c0zO%2FoVCYTMF9jONCqpM%2FwejmoQZqYq1WC4GA6USapvoxh2kM8OYa%2FfF9bv8JjxOl3S190Dyp%2B87zPKgCKy4UY9G80kWI6QKE629lRUQJLBYz%2BlSDR9wWg0ScDD4RhxYNiVScCX1TeSDuNZrx0fHHOEnuDEE9Tk6wYAQQaa9XUL4rBfHzsAqpW4V2VN5%2BIr8NMrrEmStAf4kh36IYWt%2B%2Fz%2BA4HMuxmammh3H5KMHQ3qmPzkCoTYW%2F9RANvFKs1Z4Zt137smGJ6Sv4Rm2t0Y9L7nZ%2F1BXujQBgAB6qeAWNbRHB1bJTvwsxqlPFp3IlnoyKJtK0ZQ%2BWViH2ErOm6Gg2lSzG7UqY%2BdLpfUN6JYeBRwMeVN7CwEHLU0KX0V7zdGqTFCgnUV0DcWzNhnHk0uNJupez02xGSXE0jTEtyyX8CaRXQ2yFjvT5iC%2Byuo4Z09O2MZli66mkyunlcBnYw28zaD6xDDDMi2jqjwaX%2FqD5w1eoImBFaSTF663zatsC8HMbsphw2%2BB%2F66cckGd%2FxCi7kD3vUDZc%2BrddOhI%2F1jBQUvN3gwbo4yH9qdsdcUxj8kdT%2FwChttUGB05u3UNi94yAkLFfBNGgap%2Fd0YUtNh6pYnwEI2YwkvaHxAY6pgFle63xctnCib9tEcqZM%2BnU57IO83vMeZUhgO%2F%2BHtluJfAIUpq8jJRGNw4Xjm4ar514R%2F8o6lYvem5cxcjon6JFJO5Q%2Fq3vaGSdiHo1CbcBVpElJtYgaPthmLiETLW%2FUIyqmFuR1d3k5sVE4k17ATiGy0O7mggZfjOuz7DdAyzQgY1zrlLXWKC1HvPck8IjY7d7DvPoETpUm4MQc%2BLN08jOVvArntfV&X-Amz-Signature=885335310920682248af92222f4690c88a6a8d0e5213f0272b7b93fedaa22aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d012f7be-ee44-4051-9499-48f353a92d7a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UII77OOE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEcF7TfErvnaMVCwaxpD8wh6lY1PpmuNRTu4B3E4ipkNAiA24IWMsRZ8yoq9phd0HJnVMQf9V3ea7sucToBhNylkfCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMCJYeS%2FgAQvJMCiFnKtwDgvnd8XAxAv7c0zO%2FoVCYTMF9jONCqpM%2FwejmoQZqYq1WC4GA6USapvoxh2kM8OYa%2FfF9bv8JjxOl3S190Dyp%2B87zPKgCKy4UY9G80kWI6QKE629lRUQJLBYz%2BlSDR9wWg0ScDD4RhxYNiVScCX1TeSDuNZrx0fHHOEnuDEE9Tk6wYAQQaa9XUL4rBfHzsAqpW4V2VN5%2BIr8NMrrEmStAf4kh36IYWt%2B%2Fz%2BA4HMuxmammh3H5KMHQ3qmPzkCoTYW%2F9RANvFKs1Z4Zt137smGJ6Sv4Rm2t0Y9L7nZ%2F1BXujQBgAB6qeAWNbRHB1bJTvwsxqlPFp3IlnoyKJtK0ZQ%2BWViH2ErOm6Gg2lSzG7UqY%2BdLpfUN6JYeBRwMeVN7CwEHLU0KX0V7zdGqTFCgnUV0DcWzNhnHk0uNJupez02xGSXE0jTEtyyX8CaRXQ2yFjvT5iC%2Byuo4Z09O2MZli66mkyunlcBnYw28zaD6xDDDMi2jqjwaX%2FqD5w1eoImBFaSTF663zatsC8HMbsphw2%2BB%2F66cckGd%2FxCi7kD3vUDZc%2BrddOhI%2F1jBQUvN3gwbo4yH9qdsdcUxj8kdT%2FwChttUGB05u3UNi94yAkLFfBNGgap%2Fd0YUtNh6pYnwEI2YwkvaHxAY6pgFle63xctnCib9tEcqZM%2BnU57IO83vMeZUhgO%2F%2BHtluJfAIUpq8jJRGNw4Xjm4ar514R%2F8o6lYvem5cxcjon6JFJO5Q%2Fq3vaGSdiHo1CbcBVpElJtYgaPthmLiETLW%2FUIyqmFuR1d3k5sVE4k17ATiGy0O7mggZfjOuz7DdAyzQgY1zrlLXWKC1HvPck8IjY7d7DvPoETpUm4MQc%2BLN08jOVvArntfV&X-Amz-Signature=20509199e191cb1c437f400944277f64090009ee237c98bfc733fb13ef372477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5e6fc347-8594-4849-beea-8bd093e99e04/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LU26ZEF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEwLwvJvt1VK2CHGQn7AUCBRlU4PWPeu%2BP8My8flZui6AiEAkvATo0fKcotY7qYQH9aHsq0mwU8C9vYvhgd1ew9OfYUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIv1XVcHykkX2RiBKCrcAzKgLk5bmdJiqsQRF8zBR1aykMWkvbV%2B9XiUoWg85Fe8taE%2FXLMZo8CYLnGNm6xLdI5Y7M2GERKSi%2FP4ENPaEwOtupmMgD1gbiurG0eNF%2BCSQlFfk4ZKBMO%2FUsXj%2BpLR6hyNeCNeiunRQKtNhr5%2BaGcGrylpwLmyFzXZlRPw1ogjpnGHvnwSwYiHQONVL5Cq6PNtBWBo2hQVpKYVfmCxwaUQC3vT9XukvvarqHxL82HIWSZ6OjwLj6O4Sy4gDtA3K3BfisqL1uqJZURV9loCUD1WjStwSBBXga6zFXTK3QUdpiSeCGrIzU6FLV1it1uwwk9tzVOtICMplFwwBqRsmCQ6Ts5YXcmbVGVWb8MAu6jdC7CzafgyyYrhZRayROtT70W5jINj%2Bam%2BXDmH4fFOUJanoMezS0ZXfBTiPb0MfH3IuiQeQGB%2FzvDQj9o8m6ZDZo6n6ldrHoS%2F3deEumNKYSG7mZhTC8dvFDlt%2Faa6FP%2FIyj6rmurzAZLXy5mo%2FL7v1vGFC7ndqzNx4Ibtbcj6k%2Fy9mgknzpgqXNWhIVo7tyBPvxlZorbz5bNIHF8SMeml3jWEYPmkyvpsBtKZe3zjSieF0%2F%2F0AO0HvD9A8iCNLJcr%2Br%2FyxBLRiVt5Afb%2FMMf2h8QGOqUBKAAdELX40qBTFPjwWKJvJKM8ospSFqnsXwoAaNeH1DGRs1KxueKat27yrIp7VaQzscyrLGcy8aiWt%2B%2BcHKdbOKW9FYxlaIC4NAU2bD5OPm6C3OXFODSGfamvm9WJOtwliBlLuauinUKmqwm41wh15UU6AUrYWrSLlV7Bq4pDd%2FpHWUSEsGwMRfO%2FhqmmnVxa6RAKoDDmklm3n5fVtCJi5nRCG9xj&X-Amz-Signature=b7464ce840c071214a322305cb046756dd273aa317805f8831966ec62536fd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


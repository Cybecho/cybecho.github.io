---
title: "유니티 로그라이크 08"
date: 2023-03-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "게임의 난이도를 시간에 따라 조절하는 코드 구현, C#에서 실수형과 정수형 변환, 직렬화 기법을 사용하여 사용자 정의 클래스를 인스펙터에 노출시키는 방법, 몬스터 스폰 데이터 관리 및 초기화 방법에 대해 설명합니다."
notion_id: "874bd934-c25c-4293-83cd-d6c4a7a0d086"
notion_url: "https://www.notion.so/08-874bd934c25c429383cdd6c4a7a0d086"
---

# 유니티 로그라이크 08

> **Summary**
> 게임의 난이도를 시간에 따라 조절하는 코드 구현, C#에서 실수형과 정수형 변환, 직렬화 기법을 사용하여 사용자 정의 클래스를 인스펙터에 노출시키는 방법, 몬스터 스폰 데이터 관리 및 초기화 방법에 대해 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/69ca0e9a-1768-4661-a9bf-fa3c30abaf84/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFUIIZR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDvbAHQxSTUYLONTVPJKWzL0dpY3rnzdMRHzDBmifxYwQIhAK8unYCp0XYZa4Vn%2B5hb9gysqX4tVD%2FM8TJBolXVKO7wKv8DCC0QABoMNjM3NDIzMTgzODA1IgwTRQYH02HbehN8zlAq3ANecx3n%2BAH3HdDGZYSZUrTXSp7%2BM%2FnuP%2BsR05lIRXy5OdOX%2Bgzd6qWxJr%2B%2BTc5TrD280q1PmWjGk1lJgZ4WyQGTqZVT4XzbxLoyQuSQRmFiqLgQ8mgdd1MyJM1nlUilSPj3mV3%2FUQAlbhPtEz%2B5BidnVKM29c%2BUo0R3FixQWJBe%2Fi3jqFDBqZmfS5et7lFSSaE8dzzuEj7oNsC%2F%2B920NpOGuDWsO%2BuRjqPUBJsHhdBbLj3t%2FMhNvKN92RyuOXjRRR1ypyLTepBHpy03IBi%2BTm1YEyc8jEUOVS12ktjrkjdAYp8x%2Bm6WqSxyfVKUKHVcHl6%2ByfJljggtesvywlg4hOfFHwzlMjYaWUm1T7DN4otdQUZRtsonykAJk44YZv9KjRcA8FnHAQG%2F4Cndo9iixpzJDhQ%2B%2Fold17A8D8yS%2FRb%2Bjw6y1siEQRAKq6Ldse84Dwi%2BaymAnupXZumAMG6Z6A%2B19JyOoLuXhNd9sx0fhi%2F5zrOja%2B2RvwEFZdiCdp8q009O6PKZG7GQ3yi7iSdCUzhkXz39ERXEQZHMkH6DRL6YDIR1ON8rl2%2Fbqa32PtqULxYM7amz4By%2Fe9Lcrruv3tK4erVAUgrG%2F7WhGBspt8pYAZJ6UHil4F%2BoM3OHYDCCv4jEBjqkAVeXC%2Fp5kkaEaaezNnMNSHc2KR%2FbqEFbhORyyFOFQzcSMg5hQt4787Xs%2FLdLL0SKfSOcumnxlgpehe21hNhLt2a%2BXHHptF1L7chiGF1trmjPNp1hr9%2BZJIoHCSu1pdduPWIjbwOfv%2FG%2F8mukbIXCmNjNQStMIYNJRNnC%2BaNkLjKSffRio1cbWFWM9AnH0P%2ByTVMn%2BrkfT0U9qw8XNXHxf6roQWpK&X-Amz-Signature=0df33826231d7c404a50b5cf0d60e499d8266fbc058ea2ea4a918983e2a9a9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SSg_9q-8h-A&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=9)

> 🔥 **시간에따라 게임의 난이도가 변경되는 코드를 만들어볼까요**
> > 🔥 **GameManager.cs 에서 플레이시간을 담을 변수와 코드를 추가해줍시다**
> > ```c#
> > //GameManager.cs
> >
> > public class GameManager : MonoBehaviour
> > {
> >     ...(생략)...
> >
> >     //게임시간과 최대게임시간을 담당할 변수
> >     public float gameTime; //실제 게임타임
> >     public float maxGameTime = 2 * 10f; //최대 게임타임 (숫자는 '초')
> >
> >
> >    ...(생략)...
> >
> >     void Update()
> >     {
> >         **gameTime += Time.deltaTime;**
> >
> >         //현재 플레이타임이 최대 플레이타임을 초과한다면
> >             //현재 게임시간을 최대 게임시간으로 고정시킵니다
> >         if(gameTime > maxGameTime)
> >         {
> >             gameTime = maxGameTime;
> >         }
> >     }
> > }
> > ```
> >
> >
>
>

> 🔥 **소환데이터를 담당하는 클래스를 만들어볼까요**
>
> 스크립트 내부에서 메인클래스 밖에 새로운 클래스를 생성해봅시다
>
>
> ```c#
> //Spawner.cs
>
> public class Spawner : MonoBehaviour
> {
> 		**public SpawnData[] spawnData;**
>    ...(생략)...
> }
>
> **public class SpawnData
> {
>     public int spriteType; //스프라이트타입이 0일땐 해골 1일땐 좀비 이렇게 바뀌게 할것임
>     public float spawnTime; //스폰타임
>     public int health; //몬스터 피통
>     public float speed; //몬스터 이속
> }**
> ```
>
> > 🔥 **근데 이렇게 스크립트 내부에 두개의 클래스가 존재한다면 인스펙터창에선 
> **
> > SpawnData가 보이지 않습니다 이때 필요한 기술이 바로 `직렬화` 입니다
> >
> >
> > - > 유니티 에디터의 Inspector에는 사용자가 정의한 클래스(Class) 또는 구조체(Stucture)의 정보가 Inspector에 노출되지 않는다. System에서 제공하는*** "[Serializable]" 키워드를 지정하여 Inspector에 노출시킬 수 있다.***
> > ![Image](https://blog.kakaocdn.net/dn/ABy6x/btrGBilppd1/woN17HuqbuV3S3iMex72Y1/img.png)
> >
> > 위와 같이 사용자 정의 클래스의 윗줄에 "[Serializable]" 키워드를 붙이고, Monobehaviour를 상속받고 있는 C# 스크립트의메인 클래스에서 해당 클래스의 객체를 생성하면, 아래와 같이 Inspector에 노출되어 값을 지정 할 수 있게 된다.
> >
> > ![Image](https://blog.kakaocdn.net/dn/qK9St/btrGBjkU29x/Mt042Lty6FkhMn9oCXbWNK/img.png)
> >
> > ---
> >
> > ***직렬화는 데이터 구조나 오브젝트 상태를 Unity 에디터가 저장하고 나중에 재구성할 수 있는 포맷으로 자동으로 변환하는 프로세스를 말한다.***
> >
> > ***Unity 에디터에서는 저장 및 로딩, 인스펙터 창, 인스턴스화, 프리팹과 같은 일부 내장 기능에 직렬화가 사용된다.***
> >
> >
>
>
> 저는 속성창 내부에서 바로 System을 불러와 사용했습니다
>
> ```c#
> //Spawner.cs
>
> public class Spawner : MonoBehaviour
> {
> 		public SpawnData[] spawnData;
>    ...(생략)...
> }
>
> **[System.Serializable]**
> public class SpawnData
> {
>     public int spriteType; //스프라이트타입이 0일땐 해골 1일땐 좀비 이렇게 바뀌게 할것임
>     public float spawnTime; //스폰타임
>     public int health; //몬스터 피통
>     public float speed; //몬스터 이속
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0f253810-9b7f-4780-88a1-d716807aae12/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BR6NE2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhtlvJ4Fo0vaDFinkDG8SQZcB7yaQiSAdM5%2BxG5X6aOAiAREIXVVY%2FysSxyFwugCmL0U%2BW2T2DBwoIkSwNVphO2Rir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCb%2BZWA12ty2sRrYcKtwDs9f8uusJ41v5ZNLUZ44B1ZLVNiZdRv8XeB1BDCw3AXr0L5M%2FOq%2B1c%2FKfpQXld28k9yA9AkLdnv8qlIeGVqkDuyHVrdofLo5pCX17Q6Y1%2BMEggxXG3qw3Z47y9V0g%2BHZQlDUg6cNT3%2FJVhZIPFLu3jrT7%2Fhn4BvOhoF3Vfo637qWE1y%2F8P%2B4g5bIdNRP3VkRf0SQtDxA0DhAmKTkvOj3%2Ft6FCsNImb7oj5lhuTXdAO8qCeY%2B2XK6q59boR7r4zinQDMiE5MUJYzxh5%2BT4FgbmwmzcxVprAZ1SKOVEeTsyISTB%2BHviHUhihAXPHHR3AOp5FOq%2FDjjR8%2B%2B3k3sf3i8fpz9uIIESpAM1tl00Ojo3TemjtlqFNKzgnKmRWmiqJ9NisKyi80m3jWCSZumbhgWDx2MR3hziSjNy6XXWMvl2WMDHNhS2nhnlsdGE1Nm8iqk8RW07QahCcjLqpHI88gp1tMXn4di6WVSFrvQxIlSvE5tN7G088rVzHi9ydgyyIKkRcuYrd3MH%2FihoZcUVEOd0zrTDATLb7yQpVeDR08GVklj8btAe%2BkhH8EJCHhOCZWC3yBKTMDgMIfyKpZQ1IP5QbAnazLKbDw4td0UmVc2zsHIFiS58g94DArAlNUEwsr%2BIxAY6pgHhAHaAM2F9%2F6CoYaui840RC6OY1dh81qA8RW7w%2F0n0OQkCufk5Ko%2FyyOBS7FQuDLRUo%2FPwtxyM9Ll8FkYFrVgXujX6ArUCuTlew8M5JObqWH9L10v8iPU81qR1Jip%2BEogg1i2QM62abfOETU%2FMIb44XonP5Y9us69jqajRr8UEguFz1X8AwqkeV0MaTye%2FXK2gbVJVjmx201nD6lW2chknDoE2soD%2B&X-Amz-Signature=63e4d2ffcbb7df9c2507df73e6dee3d00d496ee431d3aa64d4bf6338ae65a0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/96365f45-ddd3-467a-b0e4-99c816bdeb11/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BR6NE2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhtlvJ4Fo0vaDFinkDG8SQZcB7yaQiSAdM5%2BxG5X6aOAiAREIXVVY%2FysSxyFwugCmL0U%2BW2T2DBwoIkSwNVphO2Rir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCb%2BZWA12ty2sRrYcKtwDs9f8uusJ41v5ZNLUZ44B1ZLVNiZdRv8XeB1BDCw3AXr0L5M%2FOq%2B1c%2FKfpQXld28k9yA9AkLdnv8qlIeGVqkDuyHVrdofLo5pCX17Q6Y1%2BMEggxXG3qw3Z47y9V0g%2BHZQlDUg6cNT3%2FJVhZIPFLu3jrT7%2Fhn4BvOhoF3Vfo637qWE1y%2F8P%2B4g5bIdNRP3VkRf0SQtDxA0DhAmKTkvOj3%2Ft6FCsNImb7oj5lhuTXdAO8qCeY%2B2XK6q59boR7r4zinQDMiE5MUJYzxh5%2BT4FgbmwmzcxVprAZ1SKOVEeTsyISTB%2BHviHUhihAXPHHR3AOp5FOq%2FDjjR8%2B%2B3k3sf3i8fpz9uIIESpAM1tl00Ojo3TemjtlqFNKzgnKmRWmiqJ9NisKyi80m3jWCSZumbhgWDx2MR3hziSjNy6XXWMvl2WMDHNhS2nhnlsdGE1Nm8iqk8RW07QahCcjLqpHI88gp1tMXn4di6WVSFrvQxIlSvE5tN7G088rVzHi9ydgyyIKkRcuYrd3MH%2FihoZcUVEOd0zrTDATLb7yQpVeDR08GVklj8btAe%2BkhH8EJCHhOCZWC3yBKTMDgMIfyKpZQ1IP5QbAnazLKbDw4td0UmVc2zsHIFiS58g94DArAlNUEwsr%2BIxAY6pgHhAHaAM2F9%2F6CoYaui840RC6OY1dh81qA8RW7w%2F0n0OQkCufk5Ko%2FyyOBS7FQuDLRUo%2FPwtxyM9Ll8FkYFrVgXujX6ArUCuTlew8M5JObqWH9L10v8iPU81qR1Jip%2BEogg1i2QM62abfOETU%2FMIb44XonP5Y9us69jqajRr8UEguFz1X8AwqkeV0MaTye%2FXK2gbVJVjmx201nD6lW2chknDoE2soD%2B&X-Amz-Signature=0ec22fab0687dac8ab4186bcdeabf4f8264b4a01d21ba8f5fc8d79d9653af534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **스폰데이터를 활용해 몬스터의 타입과 스탯을 정하고 스폰해볼까요**
> ```c#
> //Enemy.cs
>
> public float health; //몬스터의 현체력
> public float maxHealth;
> public RuntimeAnimatorController[] animCon; //애니메이션 컨트롤러를 각 몬스터 타입에 맞게 넣기위해 배열로 선언
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2c2655ea-6b82-422f-9730-850dae511a43/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DULFAFG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICFtSsd5WvhBCbY4wud%2BDShPLeqkpRFCoLGMY1h7C%2FqFAiB59gencu2%2BnztXElYZKGoO0RS08EuwkMtcZuaPVLCUjir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMUqFaZA9HLrJDrAoyKtwDswnSuacKHAI%2FYZYjz4Fyia77exbVGBa9nnLvUcGpqxSKdLYhXdEBcPx71ZiJqgvNPE3g9eJ6jucc0%2Bx52kFVU9DXjyJFoJbXEn3TY3SeYFw5%2FwNCwE0NkVFfKAPTLXZpBt%2BHgwhpl9VLyFnf7J%2Fo3TWgPf0sdjl%2BQ%2FCWUklNdKHhzzXI%2Fa9TkbTKpZMxrZa5zU9smlk5Rr8abKGc8sJ6E5Is8HlC034U0i7Iy5TVX6qWbFLIUDf3EannWH6yw0ow6NGPiok38rsHBvpmb5ZV70seO5gDpaEYJV7w0HuBcd7KgrpNxGL%2FdG2a4opCR7%2FkNtHSsQ8b8O34YEHUdzHuQomglmQO4vtWTuBdeP%2FJmlSJuJ917HYXaT7RmPmY2ut7ddATUhowoMIZ70w54d0xz0ITa5qWhNAyoQj7IvN4j72plmiY6XWo7dT7mjBiFvC5lN83%2F3sYuN4n2v1hdyRQpWQ1JKdfiLmLskUyZe%2Fq5DO6wb%2BFbJt5ykEyq9Vbps0rkY%2B3e1jRyuYU04vqDKL9n52PKaVozB9hSyljkM8UdWhhnXwkduOGv20PmIcr6GrZRGNIbi1YccBILI%2BrZGGR3NtKcV8bVaZexdmAcR4917U7W1McGYFDbCpPZiIw3b%2BIxAY6pgHfxItvEtFmhAwBi8KJ3fXXk3QGiPpvBsWtikV5AMBdIAcV2WdZNpxGOaV%2B6vcwgcIwNXx0BVgu4N2DFj8Xuj7crcUg7bTVKGb9bOve3yQ7z8%2BB0FM2RZCp6V9QyCvC2USAEt020yjWfwHgGNUemnhz3cmn2%2BTGZdiSSHU%2F5n%2F8riEp1H3ctJCW6rFJakB8yPAx%2BoFllJcOgSzaNHrk1uO0Va9HfVc3&X-Amz-Signature=f61af0c58ef0254df6204298c66fd8612f1da4409d4c12ea3c565fde9b255203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> **//Enemy.cs**
>
> 		//스폰데이터를 그대로 때려박음
>     //변수 data에 SpawnData 스크립트를 넣음으로서 SpawnData에 접근할 수 있음
> **    public void Init(SpawnData data)
> **    {
>         // ... 스프라이트 & 애니메이션 변경부분
>         //스프라이트의 타입은 인덱스로만 쓴다 (어처피 배열이 애니메이터랑 동일하니까)
>         //애니메이터의 컨트롤을 뭐로바꿀래? animCon[스프라이트배열] 로 바꿀게여!
>         **anim.runtimeAnimatorController = animCon[data.spriteType];
> **
>         // ... 스피드부분
>         speed = data.speed;
>
>         // ... 피통부분
>         **maxHealth = data.health;
>         health = data.health;** //최대피통이 올라갔기때문에 현피통도 초기화해준다
>     }
> ```
>
>



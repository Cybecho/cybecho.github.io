---
title: "로그라이크 게임 제작 04"
date: 2023-03-19T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 게임 습작"]
description: "카메라의 화각을 조절하는 방법을 구현하기 위해 Rigidbody를 추가해야 Raycast가 제대로 작동한다는 것을 발견했다. Player.cs에 캐릭터가 벽에 부딪혔을 때 카메라의 위치와 FOV를 조정하는 코드를 추가하였다."
notion_id: "1302b435-80ac-4e1b-8512-ef23e7e5a0f8"
notion_url: "https://www.notion.so/04-1302b43580ac4e1b8512ef23e7e5a0f8"
---

# 로그라이크 게임 제작 04

> **Summary**
> 카메라의 화각을 조절하는 방법을 구현하기 위해 Rigidbody를 추가해야 Raycast가 제대로 작동한다는 것을 발견했다. Player.cs에 캐릭터가 벽에 부딪혔을 때 카메라의 위치와 FOV를 조정하는 코드를 추가하였다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5cc5870-3752-432e-933b-78639c08c9a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKCWLKB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEh7jJUCmV97MMLvaDkhqMrYG4245z7VMrdoxkLykTOyAiAiZFZpseIl9Q%2Fd36FU6u%2FkuwiOPy91tS2trIky4GOSJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMV7Z2z8gkYSS67j%2BuKtwD4t7lAbyyFVyuCL%2BCIfqRMA9DJ3Xu6WwmXVeozOKn92iLone2k1GPH3OFi%2FR9xlCI8mWVACeMX%2F0YJ2lz1YJAYrHcXOJEkrPmcTAEM27p2Z7AZj6OPGuLuYgWrwVArWQL0U57xAZl3ZWeXBuwJkA8KXKDSlqu9esikl7BWK06uqWJnkHWA5Q6zR6REl5qVgKLPwqOGPf0fi%2Frpfd44%2B7nC0EyHldbeB6%2BmDLDvFfKMksLA%2BHPVbB%2FlJt3Zg3%2FcGmK%2B0W6nkJF%2BP9KnaUlinDwKqSqUKrYmpXmraWsSXg6ir96IwMbMPQMoxhXhHguWFhLBz4Crj5I1iEQdTRGGSkaYBcDW%2FpIWTBK6mknyzZ1Ps7vCvgRNBVBlmmdEo2tuXmiVmZFPdGhAI%2B%2BBJK1a9ZXOscG42Tc80DnE2v5wuBkvUXarDwh6%2FUmD%2Bp3N2EkzjIblUQiCgwTBSXX9K0Pq1CD6lofzNDaRfwtdFlozokZPkVcOF5PEDBF%2Fo2lMGbndFIJFCW6Vgb%2FPnHz0H%2BAweM%2Bx2J1SsBUBRi8MClJyvKZanpG3K8hnHJ2T%2F5ZPBqLA8enDMMVp9RFHYMO1qzqxcIYSoYHt6TOnus696ou0rQYhBQXDqqlt57%2F0AC2WGUwzr%2BIxAY6pgHbTpg2kRAwHY9SC8jbS5goZ2ZX3T7bnuI1595%2BF71YztmnXif%2BqT9zmfDexXIYydn08JwD4%2BuRb5T%2BZJWcdKe8BPFESmJ%2Bxr4IaHm7I9uKr6VrM40PHMToKhq9f1sWu5Lm0qFh2xIXuvUSJXM1SJVnWlVR06XSVlALfTmXJ38VKjzZz1vfqEoueQRLTJ%2B9n5GQ2l5qwQoZ%2BXWMGMMTbWnp349ikzXZ&X-Amz-Signature=13f373033c2280f44766c5b3cd5ec7c9cfaa7ee5b783f4610c388d63f735301b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## Raycast가 True인 상황에서도 True가 반환이 안되어 머리를 싸매고 그 이유를 알았다


## 바로 Rigidbody도 추가되어야 Raycast가 제대로 충돌을 감지할 수 있다는걸…

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c942329e-ab94-4076-8771-728903c798ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKCWLKB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEh7jJUCmV97MMLvaDkhqMrYG4245z7VMrdoxkLykTOyAiAiZFZpseIl9Q%2Fd36FU6u%2FkuwiOPy91tS2trIky4GOSJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMV7Z2z8gkYSS67j%2BuKtwD4t7lAbyyFVyuCL%2BCIfqRMA9DJ3Xu6WwmXVeozOKn92iLone2k1GPH3OFi%2FR9xlCI8mWVACeMX%2F0YJ2lz1YJAYrHcXOJEkrPmcTAEM27p2Z7AZj6OPGuLuYgWrwVArWQL0U57xAZl3ZWeXBuwJkA8KXKDSlqu9esikl7BWK06uqWJnkHWA5Q6zR6REl5qVgKLPwqOGPf0fi%2Frpfd44%2B7nC0EyHldbeB6%2BmDLDvFfKMksLA%2BHPVbB%2FlJt3Zg3%2FcGmK%2B0W6nkJF%2BP9KnaUlinDwKqSqUKrYmpXmraWsSXg6ir96IwMbMPQMoxhXhHguWFhLBz4Crj5I1iEQdTRGGSkaYBcDW%2FpIWTBK6mknyzZ1Ps7vCvgRNBVBlmmdEo2tuXmiVmZFPdGhAI%2B%2BBJK1a9ZXOscG42Tc80DnE2v5wuBkvUXarDwh6%2FUmD%2Bp3N2EkzjIblUQiCgwTBSXX9K0Pq1CD6lofzNDaRfwtdFlozokZPkVcOF5PEDBF%2Fo2lMGbndFIJFCW6Vgb%2FPnHz0H%2BAweM%2Bx2J1SsBUBRi8MClJyvKZanpG3K8hnHJ2T%2F5ZPBqLA8enDMMVp9RFHYMO1qzqxcIYSoYHt6TOnus696ou0rQYhBQXDqqlt57%2F0AC2WGUwzr%2BIxAY6pgHbTpg2kRAwHY9SC8jbS5goZ2ZX3T7bnuI1595%2BF71YztmnXif%2BqT9zmfDexXIYydn08JwD4%2BuRb5T%2BZJWcdKe8BPFESmJ%2Bxr4IaHm7I9uKr6VrM40PHMToKhq9f1sWu5Lm0qFh2xIXuvUSJXM1SJVnWlVR06XSVlALfTmXJ38VKjzZz1vfqEoueQRLTJ%2B9n5GQ2l5qwQoZ%2BXWMGMMTbWnp349ikzXZ&X-Amz-Signature=3f511bbf040f075a25c5c5998ff9c90264638e4762c8fa1750d70b53fba3e31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


그리고 Player.cs에 다음과 같은 코드를 추가해줍니다 (고마워요 GPT맨)

```c#
//Player.cs

//캐릭터의 -z방향에서 벽을 만났을경우, Camera의 z값을 고정하고 FOV값을 조정
void StopToWall()
{
    // -3.5는 Raycast의 거리
    //Raycast 시각화
    Debug.DrawRay(transform.position, transform.forward * -3.5f, Color.green);

    Ray ray = new Ray(transform.position, transform.forward * -3.5f);
    isBorder = Physics.Raycast(transform.position, transform.forward, -3.5f, LayerMask.GetMask("Wall"));
    
    if (Physics.Raycast(ray, out RaycastHit hit, 100f))
    {
        if (!isBorder)
        {
            Vector3 cameraPosition = VCamera.transform.position;
            cameraPosition.z = hit.point.z;
            VCamera.transform.position = cameraPosition;

            // Calculate the distance between player and wall
            float distance = Vector3.Distance(transform.position, hit.point);

            //최소화각 최대화각 설정
            float fov = Mathf.Lerp(25f, 45f, distance / 7f);
            VCamera.m_Lens.FieldOfView = fov;
        }
    }
}
```


## 화면 밖을 벗어난 카메라를 제어하는 방법

🎥 [동영상 보기](https://youtu.be/mWqX8GxeCBk)


---
title: "게임핵 개발03 "
date: 2023-01-22T00:00:00.000Z
draft: false
tags: ["C#", "리버스엔지니어링"]
series: ["치트엔진 활용 게임핵 개발"]
description: "치트엔진을 활용한 게임핵 개발에 대한 내용으로, 포인터 찾기, 더블을 플로트로 변환하는 함수, 피타고라스 정리를 활용한 거리 계산 방법이 설명되어 있다. 각 함수의 구현 예시와 함께 게임 내에서 적 캐릭터의 HP를 추적하는 방법도 포함되어 있다."
notion_id: "1f0a0f57-48cb-46fa-8a79-4a300f8e907d"
notion_url: "https://www.notion.so/03-1f0a0f5748cb46fa8a794a300f8e907d"
---

# 게임핵 개발03 

> **Summary**
> 치트엔진을 활용한 게임핵 개발에 대한 내용으로, 포인터 찾기, 더블을 플로트로 변환하는 함수, 피타고라스 정리를 활용한 거리 계산 방법이 설명되어 있다. 각 함수의 구현 예시와 함께 게임 내에서 적 캐릭터의 HP를 추적하는 방법도 포함되어 있다.

---

🎥 [동영상 보기](https://youtu.be/9J4yQ6wny_s)

> 🔥 ****치트엔진 새로운거****
>
> 정확한 수치를 모를때 치트엔진에서 Scan Type을 Decressed value로 해두면 줄어드는 값을 확인할 수 있다
>
> 게임 내에서 적캐릭터를 공격해서 찾아낸 적캐릭터의 HP를 더블클릭하면 주소를 확인할 수 있다.
>
> F6을 눌러 HP가 깎을때마다 함수를 호출하는 포인터의 위치를 발견하고
>
> 해당 포인트를 더블클릭하면
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/646e6bb9-6ab0-489e-a14a-e814a017d319/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGEGGNX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICKbQur3pVy0sCcjc7ZXxPyFuW6OMDyvG4w%2FTvFuxgtoAiAgdEU7dB%2F0de2L10udUhvGjARKpaXIi3CLtIxg8jxIMSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdy0L%2FC8I7lb9%2F7LUKtwDiq%2BeaQfIY2sNvePz9jt3Ktbyoc%2F3S5ljdP2l9i2dvmVvBGX8W3gDTYMn7vEgNVFqtHIllj2pGamihTToqYddtv9XscWIjItKe03qG7rbzqr8uo%2BuLVqioCxNJQI6t3P%2BGaZjtqlCKslnt08A9z4lcDIgCADHYygNnVpK5rv%2FkAPiMt6MBRtUoerCmv8JjIjWwKO1BrohsDyxZR8as3%2BA8J9Gx1%2FpCP3TbNLETgSp5paLQMSJbWSaoGS9b1N%2FT34xCOUZ5EFielA3YzDS5h1IxXPP8wq0Csf82HWAUziPRuJtpZDPzmw1f2twdNW7Qf7%2FBsCFATmEOy7rfm9bhYHF9roxCHmk3z3I8VgDhhQjsKfKPjdxhvRrvnSnf15enlQmNsp9E8KThKm7lWso%2FCDG4McsRkt3ue76yY%2FFZkNdJ5nmsU2cJwGAGkt3r8nzUxTIMnBKwsopuI025BavAdx0%2FBNu2J7FyO3x8I%2Fb%2BMcQfN8phYzueUrgPyn2KjeMk4PNYKhQfJRpI5lZp8iNIFoZhIrCA%2FrEhzrJkkVndSzvziNc8YT6W%2B0GNvfnIJIwgZ9yiE0E1%2FhBAJDwju9yrQx7Ljq38PBE76YtZPVfMRpF0n%2FmGIzQnUSqvI2WsqcwwvaHxAY6pgH3r9jCErdaBqOvc16F3QVedTmMUSj%2BzY0hnl9ub0jW1AoJijUOMhCSlognt4U1tS4FLjxiNp0CWiLQBHEBZ8LMIffUltrVWtlu2VXP0pkt2RIxm0ueJR608GTGAwdol1rIOu6RgNjDqYDePeTj0MkBZJOAHfxniX%2B2Ipu660aJbW%2Bmqq5eXia3I5XlrMnv4%2F0ppbYttFbQZdlR%2B6O3QKS6w9ClI5cp&X-Amz-Signature=ac3657b24c3d9181c9335ae040bc9a6828f41f427650f3ebf23f063ca22296bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b8e01b9-82d7-4887-9a4a-beebcf4c5c29/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGEGGNX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICKbQur3pVy0sCcjc7ZXxPyFuW6OMDyvG4w%2FTvFuxgtoAiAgdEU7dB%2F0de2L10udUhvGjARKpaXIi3CLtIxg8jxIMSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdy0L%2FC8I7lb9%2F7LUKtwDiq%2BeaQfIY2sNvePz9jt3Ktbyoc%2F3S5ljdP2l9i2dvmVvBGX8W3gDTYMn7vEgNVFqtHIllj2pGamihTToqYddtv9XscWIjItKe03qG7rbzqr8uo%2BuLVqioCxNJQI6t3P%2BGaZjtqlCKslnt08A9z4lcDIgCADHYygNnVpK5rv%2FkAPiMt6MBRtUoerCmv8JjIjWwKO1BrohsDyxZR8as3%2BA8J9Gx1%2FpCP3TbNLETgSp5paLQMSJbWSaoGS9b1N%2FT34xCOUZ5EFielA3YzDS5h1IxXPP8wq0Csf82HWAUziPRuJtpZDPzmw1f2twdNW7Qf7%2FBsCFATmEOy7rfm9bhYHF9roxCHmk3z3I8VgDhhQjsKfKPjdxhvRrvnSnf15enlQmNsp9E8KThKm7lWso%2FCDG4McsRkt3ue76yY%2FFZkNdJ5nmsU2cJwGAGkt3r8nzUxTIMnBKwsopuI025BavAdx0%2FBNu2J7FyO3x8I%2Fb%2BMcQfN8phYzueUrgPyn2KjeMk4PNYKhQfJRpI5lZp8iNIFoZhIrCA%2FrEhzrJkkVndSzvziNc8YT6W%2B0GNvfnIJIwgZ9yiE0E1%2FhBAJDwju9yrQx7Ljq38PBE76YtZPVfMRpF0n%2FmGIzQnUSqvI2WsqcwwvaHxAY6pgH3r9jCErdaBqOvc16F3QVedTmMUSj%2BzY0hnl9ub0jW1AoJijUOMhCSlognt4U1tS4FLjxiNp0CWiLQBHEBZ8LMIffUltrVWtlu2VXP0pkt2RIxm0ueJR608GTGAwdol1rIOu6RgNjDqYDePeTj0MkBZJOAHfxniX%2B2Ipu660aJbW%2Bmqq5eXia3I5XlrMnv4%2F0ppbYttFbQZdlR%2B6O3QKS6w9ClI5cp&X-Amz-Signature=462cbb0cf9be2924300932cb91d540acdb47e5bdabc3b90012ad7bce7edccabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 해당 과정으로 클래스를 호출하는 포인터를 찾을 수 있다
>
> 또한 체력이 다는 함수를 following opcodes 하여 적 캐릭터의 HP 구조체를 찾을 수 있다
>
> 어처피 플레이어블 캐릭터에게 할당되는 클래스는 대부분 동일하기 때문이다
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=qud3UbDIiUA&list=PLnIaYcDMsScxvz3yyClxLU9W6upAUyPzc&index=14)

> 🔥 ****Double to Float 함수 제작****
> C#에서는 메서드를 만들때 자동으로 8byte로 변경하는데 4byte인 float으로 변경하기 위해 다음과 같은 함수를 제작하여 사용한다
>
> ```c#
> private float Double2Float(double input)
>         {
>             float result = (float)input;
>             if (float.IsPositiveInfinity(result))
>             {
>                 result = float.MaxValue;
>             }
>             else if (float.IsNegativeInfinity(result))
>             {
>                 result = float.MinValue;
>             }
>             return result;
>         }
> ```
>
>

> 🔥 ****Math 함수를 활용한 피타고라스 정리****
> 시팔 ㅈㄴ어렵다
>
> ```c#
> private double Get2DDegree(PlayerData mainPlayer, PlayerData enemyPlayer)
>         {
>             //Abs = 절대값
>             //Atan = 탄젠트의 역함수
>
>             //일반적으로 거리는 양수이기 때문에 절대값을 입힙니다
>             double x = mainPlayer.x_pos - enemyPlayer.x_pos; //플레이어 캐릭터의 x위치에서 적의 x위치를 뺀 값
>             double z = mainPlayer.z_pos - enemyPlayer.z_pos;
>             double correction = 270;
>
>             if (x > 0) correction = 90; //0보다 크다는것은 Player 왼쪽에 존재한다는것
>
>             return correction + Math.Atan(z / x) * 180 / Math.PI; //2PI radian = 360
>
>             double tan = Math.Cbrt(Math.Pow(x,2) + Math.Pow(z,2));
>         }
>
>         private double GetDistance(PlayerData mainPlayer, PlayerData enemyPlayer)
>         {
>             //피타고라스법칙
>             //Sqrt = 루트
>             //Pow = 제곱
>
>             //피타고라스의 법칙을 사용해 xz_distance를 구함 (2D) (위에서 바라본 좌표)
>             double  xz_distance = Math.Sqrt(Math.Pow(mainPlayer.x_pos - enemyPlayer.x_pos, 2) + Math.Pow(mainPlayer.z_pos - enemyPlayer.z_pos, 2)); // 좌표 x의 2승
>
>             //피타고라스의 법칙을 사용해 distance 를 구함 (3D) (옆에서 바라본 좌표)
>             //(xz_distance를 먼저 구하고 그 위에 세로축을 구했기 때문에 3D가 됨)
>             double distance = Math.Sqrt(Math.Pow(xz_distance, 2) + Math.Pow(mainPlayer.y_pos - enemyPlayer.y_pos, 2));
>             return distance;
>         }
> ```
>
>
>


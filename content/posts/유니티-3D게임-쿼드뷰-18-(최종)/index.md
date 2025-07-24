---
title: "유니티 3D게임 쿼드뷰 18 (최종)"
date: 2023-02-27T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "사운드 구현을 위해 각 사운드별로 AudioSource가 담긴 자식 오브젝트를 추가하고, 원하는 사운드를 다운로드하여 Player.cs에 jumpSound 변수를 추가한 후 음향효과를 활성화하는 코드를 작성합니다. Play On Awake 옵션은 해제해야 합니다."
notion_id: "f5c063cd-6078-4af1-91c3-f24f494aa538"
notion_url: "https://www.notion.so/3D-18-f5c063cd60784af191c3f24f494aa538"
---

# 유니티 3D게임 쿼드뷰 18 (최종)

> **Summary**
> 사운드 구현을 위해 각 사운드별로 AudioSource가 담긴 자식 오브젝트를 추가하고, 원하는 사운드를 다운로드하여 Player.cs에 jumpSound 변수를 추가한 후 음향효과를 활성화하는 코드를 작성합니다. Play On Awake 옵션은 해제해야 합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=9g4prUqF2oA&t=5s)

> 🔥 **각 사운드별로 AudioSource가 담긴 자식 오브젝트를 추가해줍니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cc1b2d88-025f-45a0-ae9a-348b17824a58/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVD7CKS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDma2ZHFKtB7b1hf8IHbJhHLRDdXFulydCRPWszUzRo1QIgLFZ%2BqUdmG%2BVd1SQsTcQME0%2FqzTNl%2BHYvvxzMwp0%2B0%2Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJEQRdRR1VA1WtfHFircA3QM1Uee3tUxBFbn6VqNV9dK%2Fzy00bQ7Hbs0QeOdQL%2Fq0L3dHTyTRewi8OdpCDrh%2BIaQxnP50Xz18ZU7FrqTQWoEpUpTxkt54p93Mc6uL4f2seNmO%2FBIsOBW7FKHOS8tgQJoVptVd5%2BgmY4F0GUq6rnG5tg4rCQv5sh2mueLTBVEg4yzv33bn5a2cNMb6lU5hQTZ2E9hoBQizYrJ8fp1b%2F21SQ3xcFxUR0xxzsnRDuYOHX3Tp4yKhrX4m01Uu%2B7vUv%2FzF%2Ft8wyygC1A87Nf3QVaBl0SrqR9Oi9Ply8hxGErCPIA576RY6HFce8KNAtlfeELEiONLdK5YJILGgt2R8h1h2TeZ5bYsqLkdjBN%2B%2FLhqC7u4IdXc21y6U%2BnkE3qV8dXuQRT1r60TfZFqRkXguOrLKN6DS3IFh%2FNLtasUBVI9NPlZ1hIAyXSTR3M3FHnQUN2EL1AJZL%2B%2BHcY885yliF1Xt%2BQUJP%2BRdOuBk8ofw9O5ctXGxvU%2BNmlAcj6%2FU9a7evIkxGPPF%2BSeaG%2FSnsIb0eZPfvgYVQE3L%2BDL%2By617Zwbcj95GQCmfvVEs%2FPxMq5FcgMV62iufySzWmYOIv3DI11my4q3TfEC3Rl8TJFJbMN7tf7j7HNVAARscDJUMNy%2FiMQGOqUBDBDmQkYV8Z7WOFshM2pKjTBILysTnQzvOgO5lrXJkwpfw5gO0NZsk521eXUOozfYT7e1RAnSfB44vTKA1BtTG149ryhENks%2F870NS4O0KAVUhkgvLUr77994t9i25yFLibpUy%2BhbIt3cAmzM7SKQILxmKBTFchfB2WMyBoNsqj3%2FtGZ%2F1V4Rm1xgL9nXPNZJRuMqg6II5TJ3vwOKT8kwlnmHHTyX&X-Amz-Signature=5fd5de3715bc09ab1540f71a53b382234d691194e7b723afe9b1b281c2c0e7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **사운드는 다음 웹사이트에서 얻을 수 있습니다**
> 🔗 [https://assetstore.unity.com/?category=audio&free=true&orderBy=1](https://assetstore.unity.com/?category=audio&free=true&orderBy=1)
>
> 🔗 [https://soundeffect-lab.info/](https://soundeffect-lab.info/)
>
>
>

> 🔥 **원하는 사운드를 다운받고 Audio Clip에 넣은 후 Player.cs에서 다음과 같은 코드를 추가해줍니다**
>
> jumpSound라는 퍼블릭 변수와
>
> Play()라는 함수를 이용하여 음향효과를 활성화 시킵니다
>
> ```c#
> //Player.cs
>
> **public AudioSource jumpSound;
> **
> void Jump()
>     {
>         if(jDown && moveVec == Vector3.zero && !isJump && !isSwap && !isDead)
>         {
>             rigid.AddForce(Vector3.up * 15, ForceMode.Impulse);
>             anim.SetBool("IsJump", true);
>             anim.SetTrigger("doJump");
>             isJump = true;
>
>             **jumpSound.Play();**
>         }
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cac51023-2192-4e68-81e4-b0bcb5b5c2df/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBL3QY6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG1d2IXA83mrDUR6Twp%2B%2F18jxe9V23BTLCQrP3P6lHgDAiEArRM%2BJrzEXiXZgDzca8E5CSRAPlTsDLsGjy3cHN5F3%2F0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC1GZYt6tpVUZ7y6zCrcA3olJVwNBs4kk6YpmAe4kHe2lpviDM8vRmYxkmDkmCBJKEnhFX3pO03%2BvJrZJtIqy1qtuwhHN9BOBrFKtqOp0kkaKyasTNc%2FwqC1egHVZbTVFgBcq348UIk9s4O3ihI2xm3DOmdOH73hhSGllRZfyIx%2Bnzo43VEtbHcVCAnBISz6IN3d7FEjQ1tyEXqNP%2Fk4Rd9WuPcQeqFwVyzsGZXqAE8d8wtGOgCuBHnpqS1XsTb3hXFAQRtld55qFXwEjwq%2BlIf5q3ldl6G9knq0UJOH21QYU%2BdqWfjApeGUsgOgzz3hFrdSi%2FXjqpy6ciQX1CJ%2FvmGPRGYfyq3sE8xPNHLOkhwk1cYM1YA%2B1L%2FiVHmsWlAifImU9zzciS%2F9jhk3g4%2Fc8eFwDzhyMW5IL%2BTMQm%2BPv3aA%2By%2F8ET5IBEi%2BwNlJqLZTkjej3f9S%2Bw19m0Cz6hz6uwlnhWjnjdK3v1LXmEIdpi9s%2BdjY4%2FyL%2FgTN6VxaH2pOfgaAmziHoJOQxSoHRxsqdqP%2BJP8SCbIUZ71cmcG4hJElc64o%2FVYTVN8et54PIaKYcrMpGwM2QVpVRr%2FxWisfmyxB2w235TqLzRCR1HAiQKQlJospJmsFVNTM5L0rcukYQRyWLF3zMuGINPsoMPm%2BiMQGOqUBS4cCAEc7Y5Pl6T0A7T95go7s9X1kQnBiXjbpEhx1sWb6gFNyq4e5PqR9TttLDmdwOXdS9LrVEoZQEyBXnLR5zw3yrLrBp2rNDgL4oL43R6ZurK%2F0qOnZ%2BbMvTmi2V6wSDwc4TS2NspsLs8hLtZfY6Y9B9o7e0gWX2JBcaGIlMhJnp1ypROybejdksVJHHAV%2FRV5jqqf0%2FCaH0SxMuYluLrxcFr%2BV&X-Amz-Signature=e3249c0440dda8074f687a32fc6b2674f3a356ff1ea5bcaa842e8bc8e2705de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


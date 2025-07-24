---
title: "유니티 3D게임 쿼드뷰 18 (최종)"
date: 2023-02-27T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임에서 사운드를 구현하기 위해 각 사운드별로 AudioSource를 추가하고, 원하는 사운드를 다운로드하여 Player.cs에 jumpSound 변수를 추가한 후 Play() 함수를 통해 음향 효과를 활성화합니다. Play On Awake는 체크 해제해야 합니다."
notion_id: "f5c063cd-6078-4af1-91c3-f24f494aa538"
notion_url: "https://www.notion.so/3D-18-f5c063cd60784af191c3f24f494aa538"
---

# 유니티 3D게임 쿼드뷰 18 (최종)

> **Summary**
> 유니티 3D 게임에서 사운드를 구현하기 위해 각 사운드별로 AudioSource를 추가하고, 원하는 사운드를 다운로드하여 Player.cs에 jumpSound 변수를 추가한 후 Play() 함수를 통해 음향 효과를 활성화합니다. Play On Awake는 체크 해제해야 합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=9g4prUqF2oA&t=5s)

> 🔥 **각 사운드별로 AudioSource가 담긴 자식 오브젝트를 추가해줍니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cc1b2d88-025f-45a0-ae9a-348b17824a58/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7R6CGU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCbpSLMaEPYVM4Muesl8Jy7sT1RGFeSbqww1S3JpVfjbQIhAPpkzX3UPv6enzTRv20flSi4RN%2FPwylZim60hm9j7OUzKv8DCCoQABoMNjM3NDIzMTgzODA1IgwLVb%2BsMUAk60xCPEQq3ANEDeQDCXFSiQombRkVQV%2BUJSpGrkA0yBiMAtuTSgLaze%2Bb6Zy6Pv8nISuAreIS%2FImZ35OcFnZL0MEW5OZLsniNCd9ihVxAMJpfAZ55BI6Z%2BlWschJcrj7ThZHUeCxBeMz76OWcP6wIdYPHkHSa0VtPPn3UVtp%2BQQXfW5NuZs9TaIS3zDfHy7gfHy0h6bEGW5ov1U3D%2BPxmTD3cnGspzzL%2BfiFqo4OCSRv3w8ExOvBPTZtHuFqBxRLT2U6UDMacAVogIVmCh8ZP7rQk8YKocZlIwxgYtO0Mdt6Eu0imXr%2BqTXGf8Xm%2Fnp5%2BrkmmW45rKj7Dc2eXCuBOXCiNy1gi0rcO8SVWdaCZTqaveq0qFRtykKpR6HA7%2BDd%2FY2Dua4p5bKWrQUAXGAd5GAerWqvHbsp2beJbCJ%2Fjj1lorrt%2FKqJPkBeQIKVKBIi%2BNINWLCUgUj3DQ93cHtpYqpVbVcjOMxBGRk1uPvIlJQGdRqAyPz38dFTXD%2FpX33AjwNe7PjH3xWbUJ%2Bnr4DQXPtkpAMO317oLD1pl%2Fcj0kOracQj6vVlxQPxgPH6oq%2B5bdZPwuCU0DMVlQcAuqbB5Ioehi4PbRiruq3ZhvHnD4jvkdGLr8SEL7RPTLesi4o02dF9%2BsTCB9ofEBjqkARTffYvszYcXWZriJbjyU4pe4m8IBu19Lx23NGW0ssZWwWlqjJLUTbw%2FZgt8LLIimD08WVIm%2BNAkvHV%2FhOoWNp9Cb9rN7KSg%2BLmhFzUaCo3mSTWDyaZL4iZSp%2BKiFJ2SQEtO5jz6r5We%2FvHU%2BO%2BKQLJO73NrDZE5%2Bp7ErmoKMJarJ6GmH9tWbyXl0hvA2N3AfQNoWawFZctj4UmLn41d2LxZNs3d&X-Amz-Signature=0d6d1e57f48cf411555c6d22dec90f6e71a0adc0dce1f9740ca920054ec25beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cac51023-2192-4e68-81e4-b0bcb5b5c2df/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7A4JBDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAILalx4YjxaDIiFpSpaY6ZxteoA%2FJ1ryJuu0uSI0w06AiEAxoXj56gMEUcRwngx%2FmNaX33yZY8qFlcPQDfuOTSR6Wkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3VhG5ik0Q9rvKagyrcA%2BFjKRGjtEJHE%2FbT5cMNH2de1OHDEgzcN%2Bnztzes%2Fx4AN38SxmCtd4WgyF9cplYcVooGdQqHC00ZjopmPhWoMNtIEezzlNX9L9nrB%2FWwEkw70SsX3UgqjlsWRBmGc3Iv0ASI%2FxpIXV9qEQBPAAnW3AaZKvYV0CFw44KXr0U8QIE%2Ff2xjEfTyMrgZ7IaVZETwwUosmtfBYVgNwlKPbLZHSmaW%2FAXaS50w0XF%2BaLYlxfzXx3xdw%2BhxylDFLOmwFfY2BntS4LD6PGlMvcP7s%2FhoXXQz%2Bt2Bwncy2fcowD%2FmWqT3FAJjweyqosGCBhRIJCs%2FHE05Pqm2KZ0CrWMxhM947PVTarLuQzrtvoBUqCq7gsqsZTpeWOXutCCK6EtNNh3hxnX76FzVKFIMLJWPjoC0TnklXhIdCeIIky9hxUXbjzh9VHpvx221TsG%2FaaPWRCaacVMSFFWbPOesPZ8LtR4rjQn9J6TKvT5ncMLKOfFD8dxIXNZ9zhwx5F8FUsAOwW4cJfbHRpUaUdo5ETWrNsKbxctg6JxrbHyXM0onvJEOK46RuGcBFdxndPljnl1lrXtqiQ9LGKoU8KrsP5qh27DTqFykgNvO3aocyT9VSsO7kiSQJaUgqAthwM1szW68MOj1h8QGOqUBsnYI1k550a8lIm4%2F6PZQfAyZhhfDdO6hKPz90WugTZDfHJcAGbE8HHfuYMtMdQdJKInE7AYv0MJnS%2BtEyL%2F1dEYPcmyJiuvIiE2IpY92UBJQEHGFG8brKwkyFp09%2FwEP8JHLxn2Yxodxo7Sp%2BJKizNEAl%2BPlhZRW5AFrTFYyNBU7zb8zAIN1JITKjQTD2YQ4nRl5xfG0gdI5n29GvkGw5C%2FsHAO8&X-Amz-Signature=e5cd19bf0d251a81e2c529fbf9d4aa8f47a55cf07caba1fc520e61145b960bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


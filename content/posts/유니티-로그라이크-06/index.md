---
title: "유니티 로그라이크 06"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "몬스터를 따라오게 만들기 위한 C# 코드와 관련된 설명이 포함되어 있으며, 적 스프라이트의 회전 방지, 몬스터가 플레이어를 바라보게 하는 방법, 화면을 벗어난 몬스터를 텔레포트시키는 기능을 구현하는 방법이 제시되어 있습니다."
notion_id: "af7c1c92-c779-4ec0-8935-e4b379cfa259"
notion_url: "https://www.notion.so/06-af7c1c92c7794ec08935e4b379cfa259"
---

# 유니티 로그라이크 06

> **Summary**
> 몬스터를 따라오게 만들기 위한 C# 코드와 관련된 설명이 포함되어 있으며, 적 스프라이트의 회전 방지, 몬스터가 플레이어를 바라보게 하는 방법, 화면을 벗어난 몬스터를 텔레포트시키는 기능을 구현하는 방법이 제시되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f903ec0e-6163-487e-8867-4163a3084b94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2LQC6RY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDfGXu1mi13OP8H3CnmlU6zwoS8%2F0K5YNgbnOg3rhadgwIhAPJpJ%2BeGavKQvB3CyXLfSMQrO4sNeRlbroLKvIFeLIU5Kv8DCC0QABoMNjM3NDIzMTgzODA1Igz6uBuSQenOe7SZUFMq3ANmt%2FgXJ31zcMvAcgARR0%2F%2BK%2B0KgGc1FiFrjCk%2F%2B9YxvXRYbphsQGDaQ%2B6gumQCvj7kMCxd92a3i15ibwXu477FfYWEqFgMeuj2d5AcSMpS3HQmbY%2F6VHksWatz2cA4iiImsRYkID2ao4gHnpIQKLtx4idyVZIR1VFBKuxpIgFSVCCGTeghCM8AB4eYzOyK5uUcqdhJW5qTnSAap8DE7XU4BEJGgVFh%2Fx0zp3zm34b0%2Fr4jDzFK6hiPna%2B85q4STQhfxjzt5gsisea%2FjvFrVE%2FwoMA%2Bdz7MnUJnrmhn2QfpAG0wrW0jVL7lDaEOhN6MTCOt%2F5ucgtPVK7l78f9xz0HAPnduA9I%2FvIZefY1BHR7ns3bQXGd8jFvSULSKzGZiCO6uokH1A87wyZTNDpCnoPVY4rdQyfQnZU9bSlcdrkjdWbn47QHiZhyItJcMBWjzW%2BDO%2FsS%2BL7stRRbqHsyjEmvraOztz00I8vNrrzq01YKrU8D8V%2BoU9ple2v8l%2BNqeSN960xvnkKpgtuzTKt3n%2BofW4a%2FB%2Bvuq66fFN8%2Fkh8a%2FYoZP%2BT9s%2FZzHt1%2F%2BuS8BvhBYKTAYKrqSXkgwkuinag04CJ7v7lz7orxPksVdYp%2B%2FQQAEl%2FKtNW0oDSpkhTCHv4jEBjqkAeUzr2BnQS3yJS%2B%2FochQVhld01igOYdYGoBVsArMb%2BeZgnKZaArQfCNqZmTpuz6m8TY46K74xWlEoir6rH94Am1%2BMX4la6sySOFdLryZvlBn%2B5QoLyG7R6H4GkcRJjQ5yYzv0LHADqaiDKvnHbunxKrgspSGlsnkQiNSvfngzeckfWjvO%2BLjBTbDD8ijMReFXLkPkHrR%2BlYxPuNfBSFiRvnc%2B0Pc&X-Amz-Signature=b947885fb018c8244a69b1885fd4bed85ea98bdec17837aa21b9632c3d5d67c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=0aUCu1BcZxs&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=7)

> 🔥 **적 스프라이트를 가져오고 리지드바디를 추가한 후에 회전하지 않도록 Freeze Rotation값을 잠가준다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/22b6b2a5-5b7e-4740-8852-5cee7497599e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CYW3PXB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCjw%2BXLzAB5PNVa1qFEGz%2FI1t%2FuATycuS7J4CNgvv7RkAIgA96Wz9ig6a5y3mgKaWAQh3eCeK2YmaX0C59sRjysPYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKwgbbFYeGk2UArwFyrcA2uz28OxPNd9x7RNxF%2FcZR4W5O3FmSyftZLOBteUEo%2FoggHSkjY95XDcQ4iL%2F016aHH26rtIeQMdxvfrIlFekriRpQSn8kJOAtqSm%2BVHN%2FeQ%2FB1tIbdnIcOjrq1CeulQGo%2BjJwJX488Vqc4ySg8EaTjdKVHvCuHp1AuWoYngj0vO9Sx%2FJfc1mf2fBfUp7UzfiFrTXxVtfvSZRdaob6KiGT2WOqhzl6b29Pi1Uhj%2FsEm%2BpQBr%2BEdQ5HRSvwLH3uW0jV5JBEzPRZ7nojdH3np1l8BanFwZYoij9Am4Yei6YwNjrjI893uq1x08zZhka7QM6AVgWGZDWnbNvf%2B5abHih1KOvJPwolcoeWHbepFzVzPgxsg%2Bi3p22SPXe%2B0iN5LZFZ2%2FuhvHZipacEBYpQBqoQQVTQRcJo2EftTcvwkACGXQo3mlG%2BY7UDpPZsBC6WEZiABGvwbfK3dpaF8GYy0zJkn8jLH5ucG%2FDBezXRepyS8Nm7EYVBBvy%2FfNAWs%2BqMmU0yf1ZOGIJrVqk9boybzFTa62mAsyFlkttgyeKVOzbvVcXN3mAe4kNKYJl3ydOiW23qDYZ8J2RCN%2B0IffJb%2BYEkBAlcu4p%2BDqpCYt96%2FBOOEYQ4KqwClQMQtVZbwnMJW%2FiMQGOqUBOMv%2BX0sFxcmw0Txgz796kLk2MdrIZ4ZnFo3QU9vfv%2B4hFl7oPSTz%2FmbLTx%2F7tf4xvEmpH9sJ6AOqUtkKqS79ekDXCLlqA7JO4qjJGPJSVTSvPVOeKzKyhLYqCFy%2FDBul65X72kzyZq6rJe1J4jbAwbZ0SqrE9WDWIaVjFGsU02tmSORi%2B1RbmgF1n7NDonr0b%2F4DvFIufsc1yNJEE1zlGDanmRCr&X-Amz-Signature=e831234acae724513f06038b6becefcbdb239bb02f3751b24de503529ec4249a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e2da46f5-329f-4f42-8586-a98a28cfc7ea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CYW3PXB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCjw%2BXLzAB5PNVa1qFEGz%2FI1t%2FuATycuS7J4CNgvv7RkAIgA96Wz9ig6a5y3mgKaWAQh3eCeK2YmaX0C59sRjysPYYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKwgbbFYeGk2UArwFyrcA2uz28OxPNd9x7RNxF%2FcZR4W5O3FmSyftZLOBteUEo%2FoggHSkjY95XDcQ4iL%2F016aHH26rtIeQMdxvfrIlFekriRpQSn8kJOAtqSm%2BVHN%2FeQ%2FB1tIbdnIcOjrq1CeulQGo%2BjJwJX488Vqc4ySg8EaTjdKVHvCuHp1AuWoYngj0vO9Sx%2FJfc1mf2fBfUp7UzfiFrTXxVtfvSZRdaob6KiGT2WOqhzl6b29Pi1Uhj%2FsEm%2BpQBr%2BEdQ5HRSvwLH3uW0jV5JBEzPRZ7nojdH3np1l8BanFwZYoij9Am4Yei6YwNjrjI893uq1x08zZhka7QM6AVgWGZDWnbNvf%2B5abHih1KOvJPwolcoeWHbepFzVzPgxsg%2Bi3p22SPXe%2B0iN5LZFZ2%2FuhvHZipacEBYpQBqoQQVTQRcJo2EftTcvwkACGXQo3mlG%2BY7UDpPZsBC6WEZiABGvwbfK3dpaF8GYy0zJkn8jLH5ucG%2FDBezXRepyS8Nm7EYVBBvy%2FfNAWs%2BqMmU0yf1ZOGIJrVqk9boybzFTa62mAsyFlkttgyeKVOzbvVcXN3mAe4kNKYJl3ydOiW23qDYZ8J2RCN%2B0IffJb%2BYEkBAlcu4p%2BDqpCYt96%2FBOOEYQ4KqwClQMQtVZbwnMJW%2FiMQGOqUBOMv%2BX0sFxcmw0Txgz796kLk2MdrIZ4ZnFo3QU9vfv%2B4hFl7oPSTz%2FmbLTx%2F7tf4xvEmpH9sJ6AOqUtkKqS79ekDXCLlqA7JO4qjJGPJSVTSvPVOeKzKyhLYqCFy%2FDBul65X72kzyZq6rJe1J4jbAwbZ0SqrE9WDWIaVjFGsU02tmSORi%2B1RbmgF1n7NDonr0b%2F4DvFIufsc1yNJEE1zlGDanmRCr&X-Amz-Signature=559275757e5696a1fb87e9aa20e7536123f4dba60729230e4f8b2e61adbcbfae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **몬스터가 날 따라오게 만들어보자!**
> ```c#
> //Enemy.cs
>
> public class Enemy : MonoBehaviour
> {
>     public float speed; //몬스터 이속
>     public Rigidbody2D target; //물리적으로 따라갈거기때문에 리지드바디를 타입으로 둠
>     bool isLive; //살았는지 죽었는지 확인함
>     Rigidbody2D rigid; //내위치(몬스터위치)
>     SpriteRenderer spriter;
>
>     void Awake()
>     {
>         rigid = GetComponent<Rigidbody2D>();
>         spriter = GetComponent<SpriteRenderer>();
>     }
>
>     **//물리적인 추적을 할거기 때문에 일반 Update() 함수를 쓰지않고 FixedUpdate를 사용할것임
>     void FixedUpdate()
>     {
>         //타겟의 위치에서 나의 위치를 뺸 값
>         Vector2 dirVec = target.position - rigid.position;
>         //픽스드업데이트 내부에서 쓰는거니 델타타임도 fixed 붙여줌
>         Vector2 nextVec = dirVec.normalized * speed * Time.fixedDeltaTime;
>         //현재위치(rigid.postion)에 다음에 나아갈 방향(nextVec)을 더해준다
>         rigid.MovePosition(rigid.position + nextVec);
>         //리지드바디끼리 충돌했을때 누구 하나가 밀려나지 않도록 Velocity를 고정
>         rigid.velocity = Vector2.zero;
>     }**
> }
> ```
>
>

> 🔥 **몬스터가 날 바라보게 만들어보자**
> ```c#
> //Enemy.cs
>
> void LateUpdate() 
>     {
>         **spriter.flipX = target.position.x < rigid.position.x;**
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f903ec0e-6163-487e-8867-4163a3084b94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3TXFID%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfuV%2B2h5xw%2Fvsli9UHdSrSZYXVbN7i0rw1sYggw0g3BQIhALjHFpJn9F87e3O8IPq4M004XMP29F9J3sIVkoPfMu6uKv8DCC0QABoMNjM3NDIzMTgzODA1IgwPTo2V%2FAYC%2FHoFRGIq3APBITxFwnsTIDu5pFVvxTMMcM84s1LeyiL4EGJqAmFP%2FwG7WB%2FZpNrj%2FpXj0QElFyjjVr2vOIF3zLkLJBlRoyhJgPZHq9BvOm%2FdTcFyN8hOCWOUUS5goOcfSYqwKhoc4ncYsvqoqy6TJADmBoscDJWk9enFSQwggUVtFYPBydVJYpE%2Fh5faU7eUD9a0WmbbCxM4kk5zXrR9gexVWldoJT1A8wEzbiSvQnmszXKCq9rbZ6sCoW7zOJSVC4cBh4GOL%2FInL0viiXo9RDAQ80UaBBq8QR5c2IM19b41r%2B3HyszYR7irEUofJxER3E3vJ%2B7gzy%2FkEkBKPu01HfkU6JQ%2FatTdore%2FQ2RYD4iBvafft5yIqBMlWpjfbFYg3jHuSkcWgdaMY3rZyTGSoQZgK%2B%2B8ddKzS6dn3jy7SC1%2BjaDsaadyByLEhFf%2FgF73OcKTz7PPEqnlpOdN%2B%2F8UARyVCNnWQYdGe4lOFN%2FmCc2qSL6dLVotETrReLw7YmMlPilvBA1%2BUdA6wJwH7Zqjo4MNmB1WUAur7%2BrEEYw%2Bd5FYAP%2F6ffFjp25w0fgXmFA%2B8mw%2B6Tplpn3nJLoanGuo8Xu%2BxJGd%2FNPia6sDW5x5q8lnRwd%2BDCSohby%2BA2ST4oCcuLukZjCCv4jEBjqkAUEk4u9dyFn3DpV%2BMFdVZNSRixONpKh9hK7eQQfEyfFN1Cz86yGDROIPl5sj%2FQr6DlLK38Lp985U%2Bw0H2OIoWvXXIKvZXdIP%2FoXhP%2ByZXhAXHouxIn278NkOso1mYaB8xWXpT6EoiMfJIPnsfJi6LYGzbTUPp5uh9chXf%2FLi5sBIkacb8m9FGDCdKS1Ct4Ylp9zh%2BWYNJ5FC8NQxlBjUZP3PqJHq&X-Amz-Signature=e8c22074bb651d85cfd6637416c1f09f409c07d033799003041e2a472e117c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **몬스터가 화면을 벗어났을때  텔레포트 시키게 만들어보자**
> ## 타일을 재배치하던 Reposition 코드를 재활용함
>
> ```c#
> //Reposition.cs
>
> public class Repostion : MonoBehaviour
> {
>    ** //Collider2D는 모든유형의 콜라이더를 포함한다
>     //Enemy가 죽어도 콜라이더가 다른 오브젝트에 영향을 주지 않기 위함임
>     Collider2D coll;**
>
>     **//초기화부분
>     void Awake() 
>     {
>         coll = GetComponent<Collider2D>();
>     }**
>
> ...
> ...(생략)...
> ...
>
>             **case "Enemy":
>                 if(coll.enabled) //만약 Enemy태그의 콜라이더가 살아있어? 
>                 {
>   //플레이어의 이동방향의 맞은편에서 텔레포트시키도록함
>   //플레이어의 이동방향 * (타일크기(텔포범위) + 소환위치를 약간 변형)
>                     transform.Translate(playerDir * 20 + new Vector3(Random.Range(-3f,3f),Random.Range(-3f,3f),0));
>                 }
>                 break;**
>         }
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ea146038-139b-4e81-b787-38e6ff9e0d81/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ6XHUN3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC2tChFgq7XZI0neBmcrB7UGeSrKI5bgTHtqCfi3wkbQgIhANtsVy6cq73%2FK0uR%2BB8CVxxV6qQiQZXuil52ZaAfc%2BYNKv8DCC0QABoMNjM3NDIzMTgzODA1Igw%2BgGJj%2F4jQw3wPSuQq3AOBq8rwG%2BiICu%2BJ6QmEDc4NurIzXw99%2BmowT%2FQOt9oDGNcl3EH%2BxWaX%2FVBoj%2F2MyarVV0AebhWq4DY7wgDIZjq8kN0oI7Y6%2BtSr9sDxh80g3i6RFYZmiLqKXTAfskUtcShT%2Bz2qZqQuauC5wGLWRqzXleY%2FII%2B2rfub7DIjypz2TMwmq0hK%2FCFJjL1b292%2FKnC5ArrvV%2BuPk71ZLGhvyU5eDbRb5MBKAOMfrj%2BBLgcnqMDF7zOdBsuIuyQQlTbz%2BjVSaWwFeVv9RIPBgMJlrbGTadoF5X%2Bu7lCVodtT%2BRfdJWfaVHJ7OICY%2FHPj0jPMVLrCHwnJNQbcllU0pYBynu%2FHy8ZgZKKWRnX3QbH%2F%2BgbMadJorRmnacFtvGr18eF9HU2wlL%2BlQyw5hsTPGDlw4dHx%2Bikmx4IAPrzg8hZ8OIYapia%2F%2F6DWIlUP0QXwC7obZzUHzDAn9xP24H%2Fmed1E49tRmKgpiZrpmiASPQXqSgwBgUAlsptBjKjMdlku43o2zd03qktvETW%2FSF2iEHvVi3HOQXu%2BPIzoc3Te%2B00bInW87cFedsXPhqLlaY2MyRi%2BegB70%2FdCyn6x12bS5TsxTera7FvMYxMuuKntq%2FSoPWZ7%2FSWalWeFmcfaEawZhDCVv4jEBjqkARoYYzc8fbhDhZxEB6fIf7pzjlldVH%2F2vXy5CtwqdzoqU3KcOUl6N8Z1Tn7EKGCDoMq6P7Cv93820N0PzvcVqGm7G50lvq%2FlKw1OHV6n7IISm8etZ6o72%2FNK7nQ8XtQqEAdStbpinChcA0LxlWMzmHdgvCuG9knNSYy6mmpFyQH5ftLqm5EviKPt9w1bxkcmHW%2FH56ApgZvqGx4iRN2jH4R35J9A&X-Amz-Signature=9af02d02d983fc31e06cf86e78975f9a7e3907a1c7d25d9c5df9ba6360be7cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


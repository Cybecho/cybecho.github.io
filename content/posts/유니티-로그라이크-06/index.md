---
title: "유니티 로그라이크 06"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "몬스터가 플레이어를 따라오고 바라보게 만들기 위한 C# 코드 구현 방법과 화면을 벗어난 몬스터를 텔레포트시키는 방법을 설명합니다. 기본 컴포넌트 설정 및 물리적 추적을 위한 FixedUpdate 사용법도 포함되어 있습니다."
notion_id: "af7c1c92-c779-4ec0-8935-e4b379cfa259"
notion_url: "https://www.notion.so/06-af7c1c92c7794ec08935e4b379cfa259"
---

# 유니티 로그라이크 06

> **Summary**
> 몬스터가 플레이어를 따라오고 바라보게 만들기 위한 C# 코드 구현 방법과 화면을 벗어난 몬스터를 텔레포트시키는 방법을 설명합니다. 기본 컴포넌트 설정 및 물리적 추적을 위한 FixedUpdate 사용법도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f903ec0e-6163-487e-8867-4163a3084b94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDVGJME%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGrHrZfgpP8W2gjqPAaMxzvISlgRBRREA4cyYemWcV2iAiB0z5m4e8mtasircbCWJtKajhzS2GX4q%2BY%2FzSCeLkAwjSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMPF5%2FJYVFH7TFtKdbKtwD0zcJWIdIjodMSq8MQ76yJCB4kizY6HyrHDcKeOoKoVSJK%2FVdZ8c9aC4y62IEIcer%2FLyI6ohEZz5zCPY1rDp2aKxUegWgKhu2GeSmzMulFLLRzYHn4a4DKRfVU4XFmaLEFNJPJ8QpHW7rusZL3%2FJvrYcWiIIe%2F4a8FpRdwrQTFAYaeCiP7sYUYt1AS2MijlBQZ8dDigvoHd30EWsNUsxKgyhWpIcHddb9xqCIetY%2FG5R%2Blhr1wgx7gT2oxXKhDFP5rwRTraFZqJAvPCG9dso0%2BHyHnqpObrXYlQ%2Fdg2nf4xfQSsSUuZSkoiLmkZ3Q7V561xTndDBRfgnuAm7b8VHJu2d92EkDQEBx0l15naJR2XcEa0ojM%2B8gy9fQ3ETykkqjGoZW%2B8NGhmRlrHyZR6IbZleh0ufOJlwrJLy3DRKe4dA%2F0awrxru%2FSngyIYAn9dkwZq0aVva4mq8nkBALEwsmyLZeDM4GLWQPqoSC%2BujaJ7CZnSPeYj%2BzHdViZYgmbDao984erOZQV1a43QuYyHGTJZvoIS9RsQQnlCLZt1GdE8zswqJupfenzM4%2FWvT1nzX9OP%2BO18Wxg17c5IpyZWvgOVBX4%2Bl0vEes1K3HesdSdHVHIZid2adGf%2FzJKNQwu%2FaHxAY6pgGif0G%2BVJ9RMl5MrFHBFRe%2FT8I07%2B3tuMbY%2ByFmsOQkCbl0RsmSx%2FUMLl8MV4oV4rM8QrNcEvRpPBuL%2FgpMHsSwZmizizOvwLI5ueevQqJeTB6Ui1KXx6wwjjBbRYt3hGHW3CQTUuxTq96yCxUS8FtQznKbPPlsrhVtveHYfp3NiIpB1vscTSclxFjEcbr%2F%2BLG1bAVaeuE%2Bevu3w6cm6jeMnEhWCzcm&X-Amz-Signature=7980367f649d6a09c2e771442feafb1322c16143679e47979029621b9af3778c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=0aUCu1BcZxs&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=7)

> 🔥 **적 스프라이트를 가져오고 리지드바디를 추가한 후에 회전하지 않도록 Freeze Rotation값을 잠가준다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/22b6b2a5-5b7e-4740-8852-5cee7497599e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSK2IBB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOAuz%2B3%2FJ%2F0o0LpvC0LfVgKX2UJGy2KI0BH%2FMb54HZHwIhAPFdOeYVBEbTE8YP7cazCgT3ozRaZFQRTUrU4yUHMHc6Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyZq3HeZLFTagan3qYq3AOnOVBYV0CqVg7RF79cN5N11IMtzCvqdvbY1nxuFhH6ZeebrruDOVoHE0FBCwXgijco3oY%2FuP0p%2BUNDw44mrkVXx2XglX41rf7VonbxAVXa3NFJZh6s738NQ2j2y7xzFS0msDGxIqGKEvvUay5AmJMjTgV9uQlTyAUOv1Ccp0T0EXa%2BPt3rfirnSDRo6TXzwW3qgtvKzgYDYs7ejMs3vHAk3tdinhNB%2BZSWJghh%2FqoH%2FXEckp%2FD1X6GQtYJDBseUDex%2B5AiFVNwKqHa7WdbBcjwq83OKc7LGuV2P5itWIY0AVhUMySin2b9%2B0WSc7iA358gG3pAN8aLcQC5ToinyWcBgSMR0thZVzvTSySS2O0Yy2zT1tkNXepghpxxmZWnh7tXsHM2vU%2FKCiSyUxadKqpoIKIvxvH9WrjomQu7Y10Rssn%2BE6g1X5NfW2rN%2FEH3BixPnnMvwV%2BBIPKYZ4RNC99ipqEbNAcdBPVK%2BjQ7XdlFUdqBsw%2F8ptlReosUybyMdMk3P%2BVEoevhHuDA5PfrJxsjOGix1orTQX83JOicq2LduWlCZnvgDxgS5ou2ienWWSG3ltxwgX0pjZ5KAMcMnWqHCCkngJSngcmW1UZ19g9KzEb9mM9eP9ZsKrr74DDB9ofEBjqkAVBBUZyNNsSnzwbZrsFL00%2BvxxljL63HEdWwHQwXiWQfG%2FwVoVGXEVxrENwZTbXREduJusVxH4qf24E3nslYkLj5CmO1mEvFk0Vu1kWVW%2BYOMQyxMve9RZBK9F5V71tSOx%2F3R3cVZMhIJz%2Bm%2FBUMYmgLfrDffuk5JpJFo79zC8qYTECGR%2BlEbbexTVlhbOIZtTOBsKgnbyA50Jltjm4FYngagalr&X-Amz-Signature=b3d5a31855ef78f8c06bbdd5e45d02134ed9ae7f7b32e0aa4ddbcf16bc9c0b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e2da46f5-329f-4f42-8586-a98a28cfc7ea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSK2IBB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOAuz%2B3%2FJ%2F0o0LpvC0LfVgKX2UJGy2KI0BH%2FMb54HZHwIhAPFdOeYVBEbTE8YP7cazCgT3ozRaZFQRTUrU4yUHMHc6Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyZq3HeZLFTagan3qYq3AOnOVBYV0CqVg7RF79cN5N11IMtzCvqdvbY1nxuFhH6ZeebrruDOVoHE0FBCwXgijco3oY%2FuP0p%2BUNDw44mrkVXx2XglX41rf7VonbxAVXa3NFJZh6s738NQ2j2y7xzFS0msDGxIqGKEvvUay5AmJMjTgV9uQlTyAUOv1Ccp0T0EXa%2BPt3rfirnSDRo6TXzwW3qgtvKzgYDYs7ejMs3vHAk3tdinhNB%2BZSWJghh%2FqoH%2FXEckp%2FD1X6GQtYJDBseUDex%2B5AiFVNwKqHa7WdbBcjwq83OKc7LGuV2P5itWIY0AVhUMySin2b9%2B0WSc7iA358gG3pAN8aLcQC5ToinyWcBgSMR0thZVzvTSySS2O0Yy2zT1tkNXepghpxxmZWnh7tXsHM2vU%2FKCiSyUxadKqpoIKIvxvH9WrjomQu7Y10Rssn%2BE6g1X5NfW2rN%2FEH3BixPnnMvwV%2BBIPKYZ4RNC99ipqEbNAcdBPVK%2BjQ7XdlFUdqBsw%2F8ptlReosUybyMdMk3P%2BVEoevhHuDA5PfrJxsjOGix1orTQX83JOicq2LduWlCZnvgDxgS5ou2ienWWSG3ltxwgX0pjZ5KAMcMnWqHCCkngJSngcmW1UZ19g9KzEb9mM9eP9ZsKrr74DDB9ofEBjqkAVBBUZyNNsSnzwbZrsFL00%2BvxxljL63HEdWwHQwXiWQfG%2FwVoVGXEVxrENwZTbXREduJusVxH4qf24E3nslYkLj5CmO1mEvFk0Vu1kWVW%2BYOMQyxMve9RZBK9F5V71tSOx%2F3R3cVZMhIJz%2Bm%2FBUMYmgLfrDffuk5JpJFo79zC8qYTECGR%2BlEbbexTVlhbOIZtTOBsKgnbyA50Jltjm4FYngagalr&X-Amz-Signature=68ebc2cb5ef2fe15d23e9a52ebffa83223d0c0c4d8155ecd76cd6849c462f555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f903ec0e-6163-487e-8867-4163a3084b94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ3T3O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFOTrxps60df5c2rLtEK2MqRlyD6Lw%2FE7qAZYHIJVbpxAiASZZrVIeJNHrHrDSZcQjc19V6Q29DGP8ycziF5bS%2FDsCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMc9lEA7BNtxlquH%2B0KtwDD7%2FtNwb841dXa%2FywJrS0p2vy8Cn9cuq%2BiyUuYZvZ%2BDqnTwipYbWD3Q%2BukFL9wcFvBJhzfYxqalvwaqXlazD00UK9WvyqEL7MAk1WkeqB8O0jaysqi7KfDmWeCWLat5NIPvlTTehcxbRtOCaSEAmgdiiWme3e94%2Fp5q1%2FwN%2FicOhST9hG0KaJU4viwfEXJ7g64iX4Q%2BehhbmmgW6juhUKXsBTAlB%2F%2FAPc1qoJV5LIJr6L%2BvOMiQiy7dgVmZbzcuXIdQXh0SlZDU52AClYF2e6H02qNDhtm%2Fspw%2FcQONUcYp%2FLd%2BnVKrOFc8dypLpVL%2Fh%2BcjXhiaV5hrUHGIdwt6HLConi%2BUcepLO9TaKGoI6oEJt6zaz2BF%2BXb8ZeTo9svJ8YyftD9h%2BPEEFOVj7IhN96BMy4DMB0kfIxLbogYTApalID5yrVjHwu%2B3IMpxf5eTEnA62mmu3mbkQTclkD%2BwkMkboB8OkH9Kw%2FL37AznP1BtasJZVmaxe4ZoFMm70xX5nPSy2P3Pe51KcedSXV%2Brie7QQN3nYFeDu49ft8ZZ7DjnkY57uVgYRhUKFQDIisGozKyQIZWyMDUOXwJxL6e4pSO84GqmttdHYJ%2BDGCelgNfxOESRTyh5%2Fg4zwoZa4wsvaHxAY6pgEuRSAaQWiLYquY0OisopG1kwBNzI160hwsDUBcVr1qXdqoL2togyOMshRApiSreJPpkIyUmFSns07BmbIGeOreMzWMbCKZdh0yuqjfYP2oi5NpMtVoFeizfmQz%2FPnEJxsdRTz1IOlwL2lzT%2Fgkcoy%2BGSbNcunyYdP3XQQ4FiEDWkC0pMf%2B92q2cTyUeif9Hz%2BYPdonLlV%2BQhh0Ma6ij6EYkt3OwRyu&X-Amz-Signature=d45eca6ea083a08faf8ec311452c613bd7b357ed1a33d79a2a1f9e8bff1d60b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ea146038-139b-4e81-b787-38e6ff9e0d81/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7DHNYC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIB%2Fw2XO3nZB%2FzBhKyOigPrO%2FQkWBy1qRmCPom8NwMPG4AiAjvY1r4rW60KY0rOTexfNRAG8T60JFqcYhW5Rnt%2BocBir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMUpmZY91uy2U5dvAeKtwDgryftJfK9UeAjtIOu0%2FOVaOZA3Qzwan66Qzcn26NFDSv2Q58s8XoAv%2BA5AI%2BTQm4uWOgtne2PtY5gK5xB5nEIdVpPrCAY42A6SiKw0sOlwrMbcn%2BdTEaIy%2F4RqsQcs9TpnczXIYq5Jvb2BmIPDshrTzNTiX3WiN8nWxj2PMnwibyg%2FtOShLMAeRA9zL1KnjfPXZ6NP%2BLI8uYW8oKecmKtb3ZpdX84VZcZWpY6QCrr7Lxafu8Ul9Ge7eeVqcC4lT37CeP%2Bm1%2BLhjgw3fi6eXo5YxxwEUpR%2F53Qn9koxWJQHO%2BTT7%2BHPMfOQ56sM8p%2Bzah0nock%2FoczaBgzuUqCjvKRoPF0lOu4lwqpaRYmiWhDafW1sVdXtSYL06TdWc94a1CtwWxgphb%2Fk9GLKyXDBXYjQ9bHDn%2FEEIPpmkTgWPxmvsh6ZS3mKxtawTOjStXsuoDBMWD%2BpUjHpGdkxKKb6GQtdPHVvFfZ2wo%2FAzLvDRiQG%2FtUkuag%2Be%2FNXGVVjWzK5y6DfzLgMIhwz39YcigvE%2FtzJkW6ztKXMI2TX5OmASrBNHdEGDROMCLT2IFp9Tyd3k%2FXTJwiFRpHjZIxj5aC0KLjND%2FB8H0%2FXL5ZclFTQk7eqNW206EsAKb%2BULS0U0wuPWHxAY6pgHP%2B8Hsih%2BvZVnCcMDbobFoI0udvdHgx5%2F1mm5QXnRRruGXnyXCArm5vGyxAlJuw8NxU4TQ8Pru7q6%2FmL2UvQHuT1f4pnOUJrrv3PdjeelVMkTyKC2JocRnRK3X0hKfRuUnroWz5AGTDdVdwJiCeD2RSk95rZvEwnwrfEFm8O0N0F7%2BcrtCnXMhh6veShFCSOjgr%2BSTRU85Y%2B51MxThzh6jD9vG9Iqu&X-Amz-Signature=17af35d0678aa48f593c72bd8a809852f7635103e0258e362bc72f8300c0b5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


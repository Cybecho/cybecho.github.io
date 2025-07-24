---
title: "유니티 3D게임 쿼드뷰 10"
date: 2023-02-21T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "애니메이션 문제 해결, Nav Mesh Agent 설정, BoxCollider와 충돌 오류 수정, 몬스터 타입에 따른 기능 구현 및 프리팹 생성 코드에 대한 내용이 포함되어 있습니다."
notion_id: "4824ce1e-9ddb-457c-8f92-6bbcb1deeaa5"
notion_url: "https://www.notion.so/3D-10-4824ce1e9ddb457c8f926bbcb1deeaa5"
---

# 유니티 3D게임 쿼드뷰 10

> **Summary**
> 애니메이션 문제 해결, Nav Mesh Agent 설정, BoxCollider와 충돌 오류 수정, 몬스터 타입에 따른 기능 구현 및 프리팹 생성 코드에 대한 내용이 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=LUnZHdcOe_M)

> 🔥 **왜 공격 애니메이션이 한번만 작동할까…**
> ## 단순했다.. Entry에 있는 모든 애니메이션에 Has Exit Time을 비활성화시키니까 애니메이션이 정상작동한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fd0baadc-c5dc-4d5c-8bbc-b8a0ae74b045/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666762BGHG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFemYDnk0PVxTGnvf4V0RUVqE74aF77Nj%2BPI8hJ4RqcXAiEAkg1qldMscXXs1tQDN7vQz4pste20tMFAZ5H5Sp4oBgsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKqoFAl7aSZUlRBMKyrcA1lm%2BiDyCVKNuLTro2o5ICtwDpg8hhL6oD81TGeubgTGTSwUap3o3eSn66EbtEmU1NdALh3gxn%2FrxCNaxamcH1psh4Nuz2Y9%2BYR3GSt3tQONXcNOu1Cf%2B8S9xQFZh5v3TAaVOvE1tOS7s0xY2JdHwLhqPVwhEPGf1oV5kjrVm28OaWAXQ04j194xj5o4hk3Dg4khQ58fjsie%2B4IWTwyg59CMAR4FELbRl%2BPFAca6nNBfEb1NS91zB4VRUZtJ%2FuH7bv4wsrS2EAlZPzK5bdlTD6T2j6dyg1ibj%2B6epiS7i72d4Xg8natHS%2BK1ZgFPal442iTCSpobm8PUsRoH0nBNx0HJMOxNtX1ZXKwZGVXhaNTs%2FklTO0n3DE1%2BPAPBMnr1So50EHFBy70mo4MJDibUmNF%2B8hB1GITqMx0z4l8MXohBbAozPlon6jqbRoCM4i3pF4j3vafPwIxO7nDXx6xuosYH%2Bmjb9VBQ1auNLW9f3TkPs0BhV%2Ft2smfSi8cKEsbuhqzETswqhU0PNGUHUYff6tR4ISE9FDwG02HYC8jrStWYCFMA1yIAXvblrCCpgQSRcxfkZ5JyIDnYvGboVIImzW5pezsXCINdCBENu%2BU1wYJrE1lEK8n5ygR%2Bq3AXMJb2h8QGOqUBNCCudCryDdLQpvpidk9Rjr4kuT0QKf14OZ2y7H5u2YOVGhY0qqFJI1ZY%2FDjnzopODiUoF2RGAQoWufaUm0eNSSSGoHePoZBzIMsfAqZADgyx3G1TDiVOWGFPRl4aIiKhn4FS2MQKAZrGFPC6rg5nN%2B9XUBum%2FJxQfIXl%2BAXIgfXO7NYazYAfj3M8bq5dc8eelJxAVK6%2BHjQc05WJPaEHQpn0jMK0&X-Amz-Signature=6f771375945e673f4b2d9275b5783eda111bfc5011ee3476ad2317803afb0963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **에러발생**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a6868865-5290-4238-874f-77f721ad425d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DAUEWU3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ6a43xLGO3%2Fg3cKWvSxwiFy2bWFr6wYaxHwpS2pQLWwIhAKaG4e6vLr303pQ02Ex5hf%2FCSci%2Bri7MFmoGFMRF%2FP9iKv8DCCoQABoMNjM3NDIzMTgzODA1IgxP7ZtUCrnf2nYfnNIq3AMzdCEODoHWTPiDHmzbwQrRq%2Fj3gBiaV6GKDHVkgOCtwdtY70RaL4SHlDZ6HNn%2BbXjOgPD990LyznrpS%2BVrksplR4XlP6UTEn533p2hr%2B0oWHkqdvusxsskCnGqBOs2%2BzLZ6tigJHTMjFnI9Mzf7C5KcKzlDzINTN%2BUa0RCWtY9Xemx8g75sTEfrUhsXXHeBf5RJBbU5mwpm3GthX8zXa%2FHq4wEAVnfMfKYxnC7rvKI7%2BGBY35pyKKgKab84li8SV3qlgjvjiAYgAtDxOK7hXtR8AYQpJcK2Ss5m5NbSSEubDthFAPLPVGxYnQS%2FrLyDBqeiLK2zd9xNRwAf4h6M7O69Jm0IoPLD7ih5twmyUtgR1sIRlp0%2BvllPp%2BmnVeDEl66eCnUI9O7TqacHkhq0cWc5QnJ520HSL8WWTQCD50CQmZBHi7LHsw1qbhIsraztsCOvGfWlQrOPo9PABP0md%2Brg3FR6PCFRx6GgG3Jn7If%2FfLTARpoqZrfkLUarzQeEvR7iTlpNAp%2F30rbn4AwTBjoktEHJqfHTo0g9JZevAtUYwnbFqI6IEcwnRtpAWG3ujzW8ed0La8ChbdeMwK4qVM6YTjciB6McKgiwQ58yzIdugUseQYReiqm8YWgWzCJ9ofEBjqkAVLg0jTEcE4bLkAjQ7hw4dha6QY5gSf%2FwVeSlx%2FWAmVHn5XVKZ1QQGocglqFAOx3jtRRyUvek1d4ijGrT9Jv%2FmbWMG2mixwGnD18RW47SMPM7PFhTIcxE49MR9x%2FEkgqT%2BLgghWSjbN0iUlRaSIPn%2BEfYP70iUFn015NsecyCh4ptXU9HWvjWG9FEI3JLQOm1OgdCrEPy1FitHdX0HD5PmIZaAsJ&X-Amz-Signature=d6e0be0a4af9a98a82bafd0a4e31bc58127f93f6a0f2bfcf7da506cc3401edfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
>
> void Update()
>     {
>         if(nav.enabled)
>             nav.SetDestination(target.position);
>             nav.isStopped = !isChase;
>     }
>
>
> ```
>
> ```c#
>
> void Update()
>     {
>         if(nav.enabled)
> 				{
>             nav.SetDestination(target.position);
>             nav.isStopped = !isChase;
> 				}
>     }
>
>
> ```
>
>

> 🔥 **애니메이터를 그대로 복사해서 해당 애니메이터는 Enemy B의 Mesh Object 내부에 넣어준다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e3663279-b582-44d6-80ce-0944ef9e1e96/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD2GOD3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGJajq18693VYV%2BYgAf6lW56BqdUxisljf6sbtyXYJ6xAiEAzQfVpCz%2FlAkOw5iRvTGMmIsH%2FG16QBZdDyiqsZc3PqUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFP0WUmPsl0H8pdlqSrcAz%2FqbdLeQhwIeGT3cR7RAkF7tuAOumMBDO0BJaZ4iuTB1L4kBMLRFCVmpGqvU2RN1FJn0Np8g3O%2BRBzSUSyVAn1z%2Fho%2FROgMgqcqf7PjW2m73432mg2r6SI3nIbu3R2Dk09zpEQnNtvzS1UJzga%2FUuVDMC6TYOBJzexR9AG4brugMtB4GLjxaQfW3s0%2FWfgdnXkF05a6b2ieYM7uUNPi%2BaXoFmQS3s7sB8P5FW5%2FsLEtyk8ihg0vSF4DpXSb0oC0hXvD8MHYOeDb0aiokU5oJNb1aJ46ETn1M0MyhVi2IDfrXF0meY%2FrFwWfYPEAnWn5dw8XmDb3vuawQOqYMhABh38QkCWzAPhHQ2QEg6DlHiuWKZzyIncJf%2Ffn8E55uvLmcrgQEb0Op%2FU%2FoxYk9UMoKsIHC64D1uIUXwIDvOFtINfslxCidZ%2F7866%2B%2BsEsjGxLvmYS0yaxnFI0ursX0tuI4cwW9pxOk5%2Bk2gFY%2FN%2FWcspo4DNMEPBcJu90hcZ5ELkqRmxmmRmMbX3HgCsHESw6L49%2FcDz11up2UIH%2F1UUAvCvAlqo%2FI5jpDVkF7I88WPAnmiJxF3xRG%2BmYhE3JRJ5HRVIbMxM2rTUu6i0un1IUquyFs9Bm2CkU8qah%2FyhMMIn2h8QGOqUBIWvrcfI6u1TLg%2FfdF%2F0U6bPH%2ByCkBAgCFClQx0BLI48PfGceYHdAcsUDDea%2F4TIXLn3fYx5s6Fztg%2BCGx4k8la1m%2BKO%2FBb7PD30u0ljpyMcx%2Bx0jbFKFSbe6RhQN%2FhkLDa%2BOg8eDeCKF2b92jxC9l6n05N0IjxQLPj8UUKHyli9VHyIoFPE9OW5YXZQC3TZRMBsfw2co498oiNO3ojaA5Rg6tmAa&X-Amz-Signature=00f49ebb0e113db3c156573403612bb32d5a89845b9548ad467f909f47597a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **Nav Mesh Agent 설정**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e16e355a-e8ba-4a43-beb6-2bfe3230619a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24GE5UC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwi%2FUqqSUXkRN6IrjUrxrU0HVYpvIdfBLLXnZeGgdfkAiAFcm%2Fq1o2hjGq3uaoMtF4r0XNIUi7q2OEvbSDg5S3oySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMo%2BD3v1GWld7BxFs2KtwD%2F%2B%2F%2FvR3GoJjwH%2FIaNzf%2B9euPhxul%2BvcWjoVJ7KxWkv5yWRXeORkinVBuofQWpzePYxO0lt%2FWPFvqTcJReSMXRL7Nr4psfppsD8IM7%2Fi7t9%2B9xXNjsKEI2gxzeghfqd%2BtoieSHiZjSm0ajIr0O8Ls3e0IL0QcXMYLhTzxPZGYpYNmQ1NFLCw4vRdcecRjOslklkB5rHdouDaZlOo3JQHiTo0vRNlonBPRI2SDTfZ1YEyA28h9djYa0sk5iiPdbDFDfmID9nWxRTFxKETNJFkI6HeJwAr%2FPpSBZB%2B%2FaZIosjZ9yafMM%2BbQWZS4BN9XNFoMYpF0xYw3LpfHdZuhXxvUZR0g%2F1NX38r4WZkcqVP6A6DJPjjDXoJGo0eqOo%2BecLMExRv3ncWfJOfevExiRo62sNtSNu4qbV2fcRYUxYiWv68icmOlbgQtNQzcdfUW36hMNh1dUfMlPWJyE2I9EyKxrt%2FenDd3tmGFmLtk04STtPp4UyA7tADixb6hPj%2FNAYOAg76%2BiyAGtORghgetoutdZthccZeeHxZy6M5G1nk5UU3F0F%2BHF%2Bln452yh1600eghMxpuxRso774K2RPdiyfXKwCS5q4b3yrkeIYUKaaWXkJemJC74jcQz%2FhAWcYwnPWHxAY6pgFlGAEjyg%2B41B%2Fb1PK6OayebeEwwtboqG8HsJ93dIDCBAd82pHKlreQTdEMjQFi%2F9zpfSeZMGUk10AzboxfjyIAJPMyZ3vTl9zg%2BW2M7GJiO%2BjPA0ZoFgUkLEo2ymkevdoLcljEFfYDR1AR36oMHUTrQik14t465XdoIH%2BCVef1TVEdAT5f%2B%2BwJFk1teIezY8pm7GNTBcJnDgROgrTlPOOvYaWtB3h1&X-Amz-Signature=4aa8155eea25ba6651c0b2f1c64365489c842604ab0cda0e5228a809382f5f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **enum 과 Type으로 몬스터 타입을 정하고 Switch문을 이용하여 타입마다 다른 기능을 가지도록함 **
> ```c#
> //Enemy.cs
>
> public enum Type {A,B,C}; //몬스터 타입을 결정하기 위한 타입설정
> public Type enemyType;
>
> //스피어 레이케스팅 활용해서 넓은 데미지 범위를 만들것입니다
>     void Targeting()
>     {
>         float targetRadius = 0;
>         float targerRange = 0;
>
>         switch (enemyType) {
>             case Type.A:
>                 targetRadius = 1.5f;
>                 targerRange = 3f;
>                 break;
>             case Type.B:
>                 targetRadius = 1f;
>                 targerRange = 6f;
>                 break;
>             case Type.C:
>                 break;
>         }
> ```
>
>

> 🔥 **BoxCollider 와 Destroy 충돌 오류**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e5f61d81-2800-4d77-870d-d917154aa698/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z36SBLF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICFoDB1c8FDP7SuswDPBhlPbl3ufCNSZka5uuWHh9F2%2FAiEAnFN4i7gvEde1ezM936u%2F%2Br%2Blbf9JiGH3XRx7YHZZKP4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM7SqAfAF%2FgH9MLlBSrcA5bHgxf1ROWSF3KmSj%2BE%2FAjH839knY0LCJ2zZtTnYu1Qp80mU5ZOfGT3w%2BGWLNbu%2FAMTCgMTjWGuksJqWLfHAbr%2FyxDtyoet8vLvGTNuZotpdc7brzmDWo8W8oO206pdg%2BxrB6DY%2BdQgnZTqDElIvtvdIF8cKZoK%2FgOnca0YKZR%2BXNj%2FbEpIO4mMref2o%2BwJfC1sK%2FlcQBoJJDB513M4HitqXrsSbKrkbluLyG8eCL660df1C0VHV1C4tj2oEhs2pdRHWmhhfsnM1EtySbGhpr3X%2FjQWSzvEw9xcYtRa7dk80f4Lo94lwbAL76b9XJLC%2FMmVTTpiGDrJqwp56Fu6VGW7p%2FPU3eGc0QQMlF6kSEktFEgjZ7T6qKgew0XFFZkYmqT2ErFpWpQ9PDs1n%2FXb69jYTZFRvQNa%2Fu4Hd6qv4JciMG4O34FyMUH4%2B%2BF7Mycyuqn%2FVWmRq1%2ByqT3fNjybm9slzZN59QJw0kQYNh5s8VzEFQ2deHAXfYi6xbWXEyPKz4Z52XyX1BOyC3b5FDpQ8rzmQ0TzM7WiUbOxtQRvRBKxLOThytU9lcbe%2FJUpUGF0tobC0jpL74KCSxrIcy%2FLJ%2F6KZpYyfMT2W9F6%2BwijDr19lQ%2BkZK8lH0160ac%2FMP%2F0h8QGOqUBHwy8aZv4PK2EjRFPeiOQ3wJkn3etgm%2Bge9LCPxEECnt447hHDkEoBLNyRJn2I8ivMyX5%2BPz6wMQs3%2Ft2a3LED0xd3WMqOfBVBnWIX8%2B4bH57U84R3cqwfPhKPAQOmPY6B9L0txInE4k%2FUa%2FnkxbsyABQphstCN8vSUdkK%2FMamzh%2BOslvX0tRJxCnF2jGBg9GtHcYgyWu0XXiPFx456itoe8r4crk&X-Amz-Signature=24a30fd0c3d5ad589659d24c7f1b123bf88c525e02a3fccebfe3b25b41999046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> void OnTriggerEnter(Collider other) 
>     {
>
>         if(other.gameObject.tag == "Floor")
>         {
>             Destroy(gameObject, 2);
>         }
>         else if(other.gameObject.tag == "Wall" || other.gameObject.tag == "Enemy")
>         {
>             Destroy(gameObject, 2);
>         }
>     }
> ```
>
> 그래서 Switch문이나 enum if문 등 다양한방법으로 디버깅해보았지만 실패…
>
>
> 그래서 고안한 방법은 그냥 Bullet.cs에 분기점을 만드는게 아니라 새롭게 Bulllet_Enemy.cs 를만들어서 Enemy에게 할당해주자..
>
> ```c#
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Bullet_Enemy : MonoBehaviour
> {
>     public int damage;
>     **public GameObject gObject; //근접무기는 비워두세요**
>
>     void OnCollisionEnter(Collision collision)
>     {
>         //몬스터 A,B 전용
>         if(gObject == null)
>         {
>             if(collision.gameObject.tag == "Floor")
>             {
>                 Debug.Log("몬스터 Floor와 충돌");
>             }
>             else if(collision.gameObject.tag == "Wall")
>             {
>                 Debug.Log("몬스터 Wall와 충돌");
>             }
>         }
>         //몬스터 C 전용 (미사일에 Destroy를 사용하기 위함)
>         else
>         {
>             if(collision.gameObject.tag == "Floor")
>             {
>                 Destroy(gameObject, 2);
>             }
>             else if(collision.gameObject.tag == "Wall")
>             {
>                 Destroy(gameObject, 2);
>             }
>         }
>
>     }
>
>     void OnTriggerEnter(Collider other) 
>     {
>         //몬스터 A,B 전용
>         if(gObject == null)
>         {    
>             if(other.gameObject.tag == "Floor")
>             {
>                 Debug.Log("몬스터 Floor와 충돌");
>             }
>             else if(other.gameObject.tag == "Wall")
>             {
>                 Debug.Log("몬스터 Wall와 충돌");
>             }
>             else if(other.gameObject.tag == "Player")
>             {
>                 Debug.Log("몬스터 플레이어와 충돌");
>             }
>         }
>         //몬스터 C 전용 (미사일에 Destroy를 사용하기 위함)
>         else
>         {
>             if(other.gameObject.tag == "Floor")
>             {
>                 Destroy(gameObject, 2);
>             }
>             else if(other.gameObject.tag == "Wall")
>             {
>                 Destroy(gameObject, 2);
>             }
>             else if(other.gameObject.tag == "Player")
>             {
>                 Debug.Log("몬스터 미사일 플레이어와 충돌");
>                 Destroy(gameObject);
>             }
>         }
>
>     }
>
> }
> ```
>
> ```c#
> //Enemy.cs
>
> void OnTriggerEnter(Collider other)
>     {
>         else if(other.tag == "EnemyBullet")
>         {   if(!isDamage)
>             {
>                 **Bullet_Enemy **enemyBullet = other.GetComponent<**Bullet_Enemy**>();
>                 health -= enemyBullet.damage;
>                 StartCoroutine(OnDamage());
>             }
>         }
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/35ccacd1-c47c-46c1-a9bf-9af50aeebbe1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z36SBLF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICFoDB1c8FDP7SuswDPBhlPbl3ufCNSZka5uuWHh9F2%2FAiEAnFN4i7gvEde1ezM936u%2F%2Br%2Blbf9JiGH3XRx7YHZZKP4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM7SqAfAF%2FgH9MLlBSrcA5bHgxf1ROWSF3KmSj%2BE%2FAjH839knY0LCJ2zZtTnYu1Qp80mU5ZOfGT3w%2BGWLNbu%2FAMTCgMTjWGuksJqWLfHAbr%2FyxDtyoet8vLvGTNuZotpdc7brzmDWo8W8oO206pdg%2BxrB6DY%2BdQgnZTqDElIvtvdIF8cKZoK%2FgOnca0YKZR%2BXNj%2FbEpIO4mMref2o%2BwJfC1sK%2FlcQBoJJDB513M4HitqXrsSbKrkbluLyG8eCL660df1C0VHV1C4tj2oEhs2pdRHWmhhfsnM1EtySbGhpr3X%2FjQWSzvEw9xcYtRa7dk80f4Lo94lwbAL76b9XJLC%2FMmVTTpiGDrJqwp56Fu6VGW7p%2FPU3eGc0QQMlF6kSEktFEgjZ7T6qKgew0XFFZkYmqT2ErFpWpQ9PDs1n%2FXb69jYTZFRvQNa%2Fu4Hd6qv4JciMG4O34FyMUH4%2B%2BF7Mycyuqn%2FVWmRq1%2ByqT3fNjybm9slzZN59QJw0kQYNh5s8VzEFQ2deHAXfYi6xbWXEyPKz4Z52XyX1BOyC3b5FDpQ8rzmQ0TzM7WiUbOxtQRvRBKxLOThytU9lcbe%2FJUpUGF0tobC0jpL74KCSxrIcy%2FLJ%2F6KZpYyfMT2W9F6%2BwijDr19lQ%2BkZK8lH0160ac%2FMP%2F0h8QGOqUBHwy8aZv4PK2EjRFPeiOQ3wJkn3etgm%2Bge9LCPxEECnt447hHDkEoBLNyRJn2I8ivMyX5%2BPz6wMQs3%2Ft2a3LED0xd3WMqOfBVBnWIX8%2B4bH57U84R3cqwfPhKPAQOmPY6B9L0txInE4k%2FUa%2FnkxbsyABQphstCN8vSUdkK%2FMamzh%2BOslvX0tRJxCnF2jGBg9GtHcYgyWu0XXiPFx456itoe8r4crk&X-Amz-Signature=76128ffbde08ea6f035b1b78afcf4ce7a5d7d95827a1b3b6656e876775bc0c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> # 선생님의 디버깅 방법(그냥 bool값 추가)
>
>

> 🔥 **프리팹 생성 코드**
> ```javascript
> //총알 게임오브젝트 인스턴트 생성 (프리팹 , 생성위치, 생성각도) Enemy기준으로 생성됨
> GameObject instantBullet = Instantiate(bullet, transform.position, transform.rotation);
> ```
>
>


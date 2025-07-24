---
title: "유니티 3D게임 쿼드뷰 10"
date: 2023-02-21T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "애니메이션 문제 해결, Nav Mesh Agent 설정, BoxCollider와 충돌 오류 수정, 몬스터 타입별 기능 구현, 프리팹 생성 코드 포함. 공격 애니메이션이 정상 작동하도록 Has Exit Time 비활성화, 충돌 오류를 해결하기 위해 Bullet_Enemy 클래스를 새로 만들어 사용."
notion_id: "4824ce1e-9ddb-457c-8f92-6bbcb1deeaa5"
notion_url: "https://www.notion.so/3D-10-4824ce1e9ddb457c8f926bbcb1deeaa5"
---

# 유니티 3D게임 쿼드뷰 10

> **Summary**
> 애니메이션 문제 해결, Nav Mesh Agent 설정, BoxCollider와 충돌 오류 수정, 몬스터 타입별 기능 구현, 프리팹 생성 코드 포함. 공격 애니메이션이 정상 작동하도록 Has Exit Time 비활성화, 충돌 오류를 해결하기 위해 Bullet_Enemy 클래스를 새로 만들어 사용.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=LUnZHdcOe_M)

> 🔥 **왜 공격 애니메이션이 한번만 작동할까…**
> ## 단순했다.. Entry에 있는 모든 애니메이션에 Has Exit Time을 비활성화시키니까 애니메이션이 정상작동한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fd0baadc-c5dc-4d5c-8bbc-b8a0ae74b045/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UPI3WWF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEE%2BjoTtp7HRkjjpdgACto7cdSCcYg2x5iJqwEzOXMKxAiB1x8BTKruMUS%2FDd21o%2B%2BdnQXWm3rUUlbbuaPp6aZDaQSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMRm91TLETngcBaKyEKtwDvMFZ6bSJQhNN0eq2EmE8JHCHrbRFdJf5NtQ7aZG76%2FNxM3s1F0ypR290oL9793ZFkoxkEY0Wd4fs7VHteWXSWLmbK6hITPh24KE8b0e5d%2BqL6HbiJqW%2F6S1%2Ffmo6lE7NZOOjLVJpHSDw8Q7EsD25xtGTO3n3BZaIP%2Ffih3mNkuaFertWy6qbHhskujjX2qWZbF7Mga1kZTcmmXxMfi52RAtiRZLHhjiJu24RdHz8aru%2FkR4FWYCleOU5hEuxlRSUxshcUdMaqJIZekhHsbsiSP1q4ZdrweSEmc1tqO7fMSlUzji0%2F8gOG1iOfFZDpZyKHsU8%2BwwUQooASPz7UFWIIg%2FQBgrG0nI1VMmNYZL8jPzYRfgLRVT5vrgKBKCUdcr4niFBAYRlvzRZF9CQCthaPaB33ODyklPc1Q1M%2B65TVBETqDRa05%2BIayAnWowA8OVY5KsuEn4v7%2B93rKn0qib2ut7Ql4gn5cwYwyTPfujc9VWq5ob6mOkXzkIIgpjbeIDXIc0NxHvNDAvRis5bvivjYZEwizcVd6OCYVTQ5ze8XYm30UKx3LQcdRIeTIBKrx%2F2gpR4Y4BxhFhJ3imXT7UfCgf6OnPHGJeGDb5%2FcfFnGrnVj5zSN1bzqQ0tj9ww77%2BIxAY6pgFY2yhVzDT0vV3ocFLmK%2Fs0T8aihXqfR197zktWeWsLerLzMcz%2B8QIzyOvSk3rz2i3pGpstRABFOeoYbw8MdGpYWRaxBXj2AK1IhhvyA1QUTdW9s1j7r%2BeF9YGM651lJ%2BmHXAf9Bry4nSC9iO8IhEhpVYfnhiW%2BrTUuKdSPfI3G6VOxvVkfAS%2BOLRSI3ZpD2p3O7qCkICvAeu3WPOF0xQ7a5ymGh1Ez&X-Amz-Signature=d50908904a5d396e15d8b0b5ef42d05c4fce2a5255a312f49b84e5138eccd2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **에러발생**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a6868865-5290-4238-874f-77f721ad425d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDLHYE2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDj8BaxJlhX7BUlTjXPWjeue2NjbVhMw%2F3uxDwFdgSb8QIgOFpkAYslr1Tn%2FUCw5zApHDQItwJoR6SC3nscwMNOIf0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNFnnHqyOm5CNvAkqSrcAysxOfbOpI0ix6PTrkPM8OSyddD0n%2F2OmDRzqaSFJ9TshFWibHPLXuIAeO%2BEhGPWT%2BHFkeWdWFhhgQkkyeb7FVaEv43ylLCYGQppi2CB%2Fki%2BADifIKabOQg3UADbTz1WFMi49GwC2Lz1zudAWqenVpfLrTSwUBYPs3jrjIh4UOuGCxNuJyDcYKmDk761IzKICxJ1GJFqouNwq5QxCE9XBNG5e6RvTVquWijhZF2Mhmb%2FJmsmxsgomipLgCc7hCXt9VTJS8fFti9UCVJAhJ1c%2BeZXn7uE%2F87PJBvvWnr2Zc3aff3SU%2B%2BnTMODOu%2BPAgMoXTh4Fj1LxqaoX2aG2IFFOH9XzS2tmqs8HunJm1a5ORUMLvhUyOOlhRbwQC11BzIyt6YZAV07VkBQtngI77qZLPrkOPogqQUhS1xAzA9A60B%2FOJFlK50zEb%2FbC3Z7EOl4175JQ8Ig0p7sTfywE7uxJsFU6SHdIUQ2pBvQHw%2F%2F6KqcEfqxjvdRTCla1KRHXaPU3CyeQvXzVGyFstyeuUxZgNGhe5v0KL9DFR78qswl64fbYy6DfztgFdMU5zwWatqkyys%2FjqmJviAa6oAulE3kOI09kzN3e9vOqmoCpcP52EPsPQRPQeFrLUKvzdU1MLi%2FiMQGOqUBtMlVLl5rMdft6x%2FMstww0XWF0EmJywIGqhtdxMevVLCKAGQlqM7AmnffGZBXUx%2B59o%2BJii6UVihb4XHTVDz5Hil3CP%2FlIkCoDD5e8CJEqVn1Q0f3gwZ38QIhAYUHnJDkanp%2FmMVomoE3HnB5A%2FgAizTVdg7nxkFAKrakeUZQAaHmxQ1krDDg8GEZ9uRXCCHtKTCAKRLuUs35Qwmol37744N2cyp9&X-Amz-Signature=c90aa5d131bf384fad27cd66bda92a1fe2acd4b3cfd62b0390002dd4617af878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e3663279-b582-44d6-80ce-0944ef9e1e96/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECY7E6J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCEH0rJjhg6X2l0YvtxZ7sJyMrmcZ%2BLt9816qTuXeo3OgIhAPp1jkncxUylorT1PF%2FlsOwIr6ZS1UCXzoZwU89yKhaDKv8DCC0QABoMNjM3NDIzMTgzODA1IgzHvafwDbwWXT%2FiGawq3AMLYKRBuuqdM%2B4YH7tdyLVGmHfV0dl%2FXm3oeEQMyV4CjKB2iVxEc%2FhEvOIMRnEFXvv7Twq%2BvBoZTDXrWoFNCAeCcqhaOeLR3F0NnIH6GN6sph3XKuif6wpdks9Nb1DpVHO%2BJwFcFdLO7oE%2BOVZLxPKLWrtj2zOOLX6eMmS9XncLfEznsjsVVbWm6oxCKqHJ4RcuVRQs06WwDbOxPtuYb45gN6u%2FZeWdUUToZRD0RlNNdILIw4OsIH2LiddIwrPjad4TtYucTBJgVchkunJEtOfSf%2BVTTMTcZy5Pvc3%2BtMtsnRH4VBHplMIAr48gXjzfY6F%2Fpe%2FGeSQfsoraR4Do1ggyRte0kQR6ZBijtVxTO8JLuKLbxNwTEr6vAUd8MCovEvYq6nnStUHtCJyOf9VqTUaQtkQTRVK38W22EOGAiQjA%2FLBpwr9VdD5h%2BM83H2rRbfdu4m3JyZyRyi%2Fm44MC3A3uH0e6Hk6hdLJdAV252vO3sEFEZ5tzmpm0UO3YjA%2Fdq9pRHqmWSBJ%2B446ybrEqTkXN9eEhScwGSfHXJnJODEYVIJ%2B3HoxIj%2Ft3teMUC%2BTOYY1IoA9F9RvNy1cu0N6XzalBrqeYIsJQ5TL%2FFYaU6rkTiqJmd80I1wLQcud9rDDAv4jEBjqkASSNcLYZAH6sXlq%2BOrbLfAdzYo0G8ENof%2FCzSQmMe0%2Fg8u31bsegPU5Nd%2FX8%2FToyp3VOOfWJBAUU53kaBOTfR4tt%2Fl0veOcI5PyVznrgaG5zZniFtlEJX5tI8E4xDt49doep4aBqt3ibvpBjaVWkqbwWgh6QwNEhEJfuzXBLivThMVmZVbWbyfFnDrIbeLlP6IhgroaNAVJ1WDGGkc4xSjp7aqci&X-Amz-Signature=621e535c1372daff0462b717f86f61b83d2e082e753abb86a786793464b0c310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **Nav Mesh Agent 설정**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e16e355a-e8ba-4a43-beb6-2bfe3230619a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEG4P5X4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIARRxTU0QjbDDp1SaJ6OdfSW3gEiQfCnQlYFNGFKKTugAiEAy5KH4cmrPIjzJOenPv7oMgUjkxXpw7wAkogTR85kgRIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJ6zvXTyylPmSNUxeircA4k%2B3CJf4qL%2BI26yD8wV%2FpTL2T3B9RHhIRe7CmqqVlzsSgTmTEYlUvNFBLQ16bbOIBweYoJzLa1LghdtZJXaHgyN%2Fct%2FpOtsQVy%2BioK%2Fw0H7xsmDncqVKVulvOJ4yUrTs5bwvaTTUbFFshvfiqT2Aq5JPVN1UGOcUMJ5Kdt6%2FFVMohBZoDWYmnVSFddw4l5QbXxD4TD0PA5zQE8jBdOfq9r5rNx1RkVRsonf9cpcOYbODHEESf5S%2B9%2BKwIEFWA8WpGvb7vkKoEzvWR2v7TefGn1ldE7h3WlpD2zNQCSS%2FFkSZ3tsP67%2FlNWf8pCeZ1ia0TqnK2UMcRh3a6qHmRQJhjTYyFEoUYHMl8d%2F4tL8bJzxckMK8wKAc3pMduTraxpGLRjDJ0CPTl1q5J0lDd0oVHHDFLCQFnTMPTuUnpSsUcMxaq9MiupkRKr5Z0iaE6hOH0Z7Kdz06WN6CQ63ztqVB9QhHu3NJZngHCq9unTOQitrj58SfKvRQqQ5P4HrCnGe36Dd0D9O2oc%2FhV06pE7b0mI5To7HkN3%2B0eCRn4sPyME5iTO%2BvuxJA3Cke45Pt7JW%2Brp99n1vVShH5X%2BlDp9xdZa7Bsl9kA0OBwjzavPmhOlP1XKkohg9ju%2FHM%2B1fMJi%2FiMQGOqUBYCkek6fUCTw8SJ7wlEuS3bS%2BzVICIea0ux5GIIqNmYzUituFLAa%2B%2Bup%2FZu3iItseSFyCIVSnOV%2Bh0E2I%2Fo8bwyBUgwKgDGjaVLbYsjpjdqToMLtEtThflZxkY46dwKOdVd4hOzjQbW0McxrMxJKGa0il9w682bhtb9gKkmvfgAOwvXc%2Fcc%2FmNUsCMbyIZhnJ9onQ8Uls5Eo6nDB%2BKP6ph7j6HMjV&X-Amz-Signature=0a14c1dfefaa43d09a932c0b6ce28256e125d741dc78d1fe821006066619fa4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e5f61d81-2800-4d77-870d-d917154aa698/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE457ER2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC2nkoagq0SewIV8YOKC7noWDL6htm7B9kKGgLJh3UEGAiBYxGgPdeQTd%2FefxXKzQImzDTBBTIcL8x0rhoztM91n4Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMfzxctMy4nbIwbEryKtwDh6UFZOwcMU7rQJ9q6gNbn7CuczouFryLCfY7kyBCzEeTT5Ia7iWwkwjoW7nodIWB1%2FBSQOTOVCwlPpIXpfkRr7NHa7ozSVg84%2FROv4rHbqYuuch0JRMiGAd3bgHQKsjsD5LYiR6XmRB8RaintEFSOQdMZkuXx3HuMkpJhe28NUHtbM65k71KuU075%2FOQ1i5qZE5M19vkbiPdaezO%2FTgANGnqa69xocs8aJ3%2BnFptnjbK%2FWwV%2FzIZ8i1zz7mdFcGZFL9IXRBZRaR00oifcF2RaB2%2BJjB0aSEcUaWwHBY7X9oc6Ld%2F4cYfyRWKVFpTedDomHU5cIIBOgwst%2BEjhxyWBfqTLlJUXeCDm7sq9w3Fy6U54g7ImElsfDDi7pqgCfh3hVXB55dXJxHFS8UsuNxpk6vAIPco42%2F2uuTtxt5dcRtaGy6hH6ZvsknuThsnX3tqJ7i9kmqwtUZeQK3w%2F6Ncp6fHFTZ4T%2FYN2k%2Frnk7fzwb5DwfzfYmJMivMhd9HthqHF7V8CdZY%2BR3SM6uzvH%2BUH259wt6Y3xrcSIrC%2BhS8yA7pUcYwLJpP8CWDAT976LaPbudk8CPzCI14y%2F%2Bdcw3zY22NzbvcgVaRx6NHngAoeVnYuc7SiSJk8Q9RcZ8wrL%2BIxAY6pgHsVlMQp0rN%2BWEeLwnqRx9KqRdA6MA%2FUgawoO6pHhkeD9jyeIr2d3ih5TYqmAVyKsRMcm8N12DlktMnKCQtV2gHbXmd5edZRJfQPvTiQjx3c4sTb4aVnLgLo8wGEUrQv8%2FyP3ED%2B5CojLWL6UEhGx2nvaGWi2GXsD5n4dpEQ6jBi8h7v%2FHANs0M%2BeeA%2FC1%2BHtIjvorEZ608waLwTe%2B1CYSDhzrt5X3E&X-Amz-Signature=4764bc7b2b117899f0a6025df4d0f53c98aec50627cb678007c4f9808e9487d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/35ccacd1-c47c-46c1-a9bf-9af50aeebbe1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE457ER2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC2nkoagq0SewIV8YOKC7noWDL6htm7B9kKGgLJh3UEGAiBYxGgPdeQTd%2FefxXKzQImzDTBBTIcL8x0rhoztM91n4Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMfzxctMy4nbIwbEryKtwDh6UFZOwcMU7rQJ9q6gNbn7CuczouFryLCfY7kyBCzEeTT5Ia7iWwkwjoW7nodIWB1%2FBSQOTOVCwlPpIXpfkRr7NHa7ozSVg84%2FROv4rHbqYuuch0JRMiGAd3bgHQKsjsD5LYiR6XmRB8RaintEFSOQdMZkuXx3HuMkpJhe28NUHtbM65k71KuU075%2FOQ1i5qZE5M19vkbiPdaezO%2FTgANGnqa69xocs8aJ3%2BnFptnjbK%2FWwV%2FzIZ8i1zz7mdFcGZFL9IXRBZRaR00oifcF2RaB2%2BJjB0aSEcUaWwHBY7X9oc6Ld%2F4cYfyRWKVFpTedDomHU5cIIBOgwst%2BEjhxyWBfqTLlJUXeCDm7sq9w3Fy6U54g7ImElsfDDi7pqgCfh3hVXB55dXJxHFS8UsuNxpk6vAIPco42%2F2uuTtxt5dcRtaGy6hH6ZvsknuThsnX3tqJ7i9kmqwtUZeQK3w%2F6Ncp6fHFTZ4T%2FYN2k%2Frnk7fzwb5DwfzfYmJMivMhd9HthqHF7V8CdZY%2BR3SM6uzvH%2BUH259wt6Y3xrcSIrC%2BhS8yA7pUcYwLJpP8CWDAT976LaPbudk8CPzCI14y%2F%2Bdcw3zY22NzbvcgVaRx6NHngAoeVnYuc7SiSJk8Q9RcZ8wrL%2BIxAY6pgHsVlMQp0rN%2BWEeLwnqRx9KqRdA6MA%2FUgawoO6pHhkeD9jyeIr2d3ih5TYqmAVyKsRMcm8N12DlktMnKCQtV2gHbXmd5edZRJfQPvTiQjx3c4sTb4aVnLgLo8wGEUrQv8%2FyP3ED%2B5CojLWL6UEhGx2nvaGWi2GXsD5n4dpEQ6jBi8h7v%2FHANs0M%2BeeA%2FC1%2BHtIjvorEZ608waLwTe%2B1CYSDhzrt5X3E&X-Amz-Signature=86ad56b79bf45e58c715a1a3590d510375eae154a02349b74a153f60994ec877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


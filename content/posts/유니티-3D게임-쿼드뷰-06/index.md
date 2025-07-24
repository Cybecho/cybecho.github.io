---
title: "유니티 3D게임 쿼드뷰 06"
date: 2023-02-10T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "자동회전 오류 수정, 레이캐스트 시각적 표시, 아이템과 플레이어 간 충돌 방지를 위한 코드 수정 및 레이어 설정 방법을 다룹니다. Rigidbody와 Collider 설정을 통해 충돌 문제를 해결합니다."
notion_id: "22cc513f-82e6-4ca7-8cf9-052009c4663e"
notion_url: "https://www.notion.so/3D-06-22cc513f82e64ca78cf9052009c4663e"
---

# 유니티 3D게임 쿼드뷰 06

> **Summary**
> 자동회전 오류 수정, 레이캐스트 시각적 표시, 아이템과 플레이어 간 충돌 방지를 위한 코드 수정 및 레이어 설정 방법을 다룹니다. Rigidbody와 Collider 설정을 통해 충돌 문제를 해결합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=dynN70kyD9A&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=8)

> 🔥 **리지드바디끼리 부딪혀서 플레이어가 자동으로 회전하는 현상 픽스**
> Transform이동이기때문에 Rigidbody를 제어할 수 없어서 따로 제작해줘야한다
>
> `Player.cs `에서 수정하도록 한다
>
> ```c#
> void FreezeRotation()
> {
>     //angularVelocity = 물리 회전 속도
>     //Update() 안에 넣어 매프레임 FreezeRotations()을 호출하여 물리회전속도를 0으로 초기화시켜 회전을 막는다
>     rigid.angularVelocity = Vector3.zero;
> }
>
> void FixedUpdate() 
> {
>     FreezeRotation();
> }
> ```
>
>
> 또한, 충돌 레이어 또한 설정해줘야한다 다른 리지드바디와 충돌했기 때문이기에 레이어를 다르게한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a61bdbe1-6992-48bb-b512-3f11e03cbd35/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BPJSU5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGSkLTyNKzqAjenCNYd3c1wbRM%2FyhJI6DvmugflqK6IVAiA1V7rTtxVQ9YRUIAPawj3tnUn1KlYbb51lHcDCRrpq5Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpyAkUgnNPt2QfQDHKtwDtvjRvhvyysa809sL6%2FGoeyMiY6XremOc0aTu7R6c6uZQjl91Bqd0jgQLyzd%2F%2F%2B7r77VP5Y1EzcTFk%2FNXDG%2FlbwDroFctFEDLTDf3X7qprNy2t3MjwITF9u1NavPAB9ng883tU4%2FB%2B65hOb1EL7%2FZhBGAyk9mmNrfe0sE%2BoDNgJ3EOxKRDn3uNuhZB8hrS4nPGr%2Fe0iQJKDV6xKwWaTGGmg8m7w0LXfnmY%2FiYIHxdqMhfBeUtfsVYWo1HB2Crot90tYTSdC23zrwKf2%2FdUb7pv4UPccq%2B8nRY4tQsRZz9iKzVww1KY0eLyVIB6L9d0hbwVdifiPfJlfNY6d%2B1wt%2F3P3k%2F9xP0p4Wff%2B7MymPulIXVEjLUX%2FwxbEQgrjR%2BdLNQ%2Bu8OkTCwm2jNU2cFrJQ6Pv2JCrxka3CzeRBtjMy%2FgICIoTIRzU8Fr1VetOs55H9GC4rDF1s97khGxyypn8jVQnc%2BmwX2FDW5nEl38N1hGcw1CmPehlasqH5D2utM4GcxYOaURhM2cde5YK4xhohy9kj54wIOGum9PK6vJiJAaItatJDwpSt53tXAH5O7d3MWYpAQNHTu%2Fo%2FON2zTZK%2Bs2uulWd%2BJUvDz8yAJlK1Aeqv5zVsh%2FrxegAzF%2FrowjvaHxAY6pgGMyikeonJWmXB89t7fMjTBvybHwZezapTAj1XNym2baGSJu7X8DXQWWubmkZAT9U3SEHJnYndje9jJVPT4mOhqBcq87bnJvtZ6BEINv1OYcIMwOP%2BWouNOqO%2F%2B%2F34LdWgdJxTfEVx52m%2FZK6uyGBzQgEn5BbrXVFRtb5zGvLuxT%2FDXh3q2nRyiFKcWGoO6M4qywbm6cGqq6SIL1lHVd9ywQzhtRpYm&X-Amz-Signature=1de7721765e368e3f9630a42c2bc9d68d92dd709246de0429d8bda4452ed06b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b85ba6fd-17f8-420d-bdd1-d36a8a9f9782/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BPJSU5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGSkLTyNKzqAjenCNYd3c1wbRM%2FyhJI6DvmugflqK6IVAiA1V7rTtxVQ9YRUIAPawj3tnUn1KlYbb51lHcDCRrpq5Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpyAkUgnNPt2QfQDHKtwDtvjRvhvyysa809sL6%2FGoeyMiY6XremOc0aTu7R6c6uZQjl91Bqd0jgQLyzd%2F%2F%2B7r77VP5Y1EzcTFk%2FNXDG%2FlbwDroFctFEDLTDf3X7qprNy2t3MjwITF9u1NavPAB9ng883tU4%2FB%2B65hOb1EL7%2FZhBGAyk9mmNrfe0sE%2BoDNgJ3EOxKRDn3uNuhZB8hrS4nPGr%2Fe0iQJKDV6xKwWaTGGmg8m7w0LXfnmY%2FiYIHxdqMhfBeUtfsVYWo1HB2Crot90tYTSdC23zrwKf2%2FdUb7pv4UPccq%2B8nRY4tQsRZz9iKzVww1KY0eLyVIB6L9d0hbwVdifiPfJlfNY6d%2B1wt%2F3P3k%2F9xP0p4Wff%2B7MymPulIXVEjLUX%2FwxbEQgrjR%2BdLNQ%2Bu8OkTCwm2jNU2cFrJQ6Pv2JCrxka3CzeRBtjMy%2FgICIoTIRzU8Fr1VetOs55H9GC4rDF1s97khGxyypn8jVQnc%2BmwX2FDW5nEl38N1hGcw1CmPehlasqH5D2utM4GcxYOaURhM2cde5YK4xhohy9kj54wIOGum9PK6vJiJAaItatJDwpSt53tXAH5O7d3MWYpAQNHTu%2Fo%2FON2zTZK%2Bs2uulWd%2BJUvDz8yAJlK1Aeqv5zVsh%2FrxegAzF%2FrowjvaHxAY6pgGMyikeonJWmXB89t7fMjTBvybHwZezapTAj1XNym2baGSJu7X8DXQWWubmkZAT9U3SEHJnYndje9jJVPT4mOhqBcq87bnJvtZ6BEINv1OYcIMwOP%2BWouNOqO%2F%2B%2F34LdWgdJxTfEVx52m%2FZK6uyGBzQgEn5BbrXVFRtb5zGvLuxT%2FDXh3q2nRyiFKcWGoO6M4qywbm6cGqq6SIL1lHVd9ywQzhtRpYm&X-Amz-Signature=ae6b6d79dc1bfb2283a06d6cfe6394a46e8220a2bc60527c5ce5239c2be31970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> Edit - ProjectSettings - Physics - Layer Collision Matrix
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d78eda70-8723-428e-ac74-3048fc8becc1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BPJSU5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGSkLTyNKzqAjenCNYd3c1wbRM%2FyhJI6DvmugflqK6IVAiA1V7rTtxVQ9YRUIAPawj3tnUn1KlYbb51lHcDCRrpq5Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpyAkUgnNPt2QfQDHKtwDtvjRvhvyysa809sL6%2FGoeyMiY6XremOc0aTu7R6c6uZQjl91Bqd0jgQLyzd%2F%2F%2B7r77VP5Y1EzcTFk%2FNXDG%2FlbwDroFctFEDLTDf3X7qprNy2t3MjwITF9u1NavPAB9ng883tU4%2FB%2B65hOb1EL7%2FZhBGAyk9mmNrfe0sE%2BoDNgJ3EOxKRDn3uNuhZB8hrS4nPGr%2Fe0iQJKDV6xKwWaTGGmg8m7w0LXfnmY%2FiYIHxdqMhfBeUtfsVYWo1HB2Crot90tYTSdC23zrwKf2%2FdUb7pv4UPccq%2B8nRY4tQsRZz9iKzVww1KY0eLyVIB6L9d0hbwVdifiPfJlfNY6d%2B1wt%2F3P3k%2F9xP0p4Wff%2B7MymPulIXVEjLUX%2FwxbEQgrjR%2BdLNQ%2Bu8OkTCwm2jNU2cFrJQ6Pv2JCrxka3CzeRBtjMy%2FgICIoTIRzU8Fr1VetOs55H9GC4rDF1s97khGxyypn8jVQnc%2BmwX2FDW5nEl38N1hGcw1CmPehlasqH5D2utM4GcxYOaURhM2cde5YK4xhohy9kj54wIOGum9PK6vJiJAaItatJDwpSt53tXAH5O7d3MWYpAQNHTu%2Fo%2FON2zTZK%2Bs2uulWd%2BJUvDz8yAJlK1Aeqv5zVsh%2FrxegAzF%2FrowjvaHxAY6pgGMyikeonJWmXB89t7fMjTBvybHwZezapTAj1XNym2baGSJu7X8DXQWWubmkZAT9U3SEHJnYndje9jJVPT4mOhqBcq87bnJvtZ6BEINv1OYcIMwOP%2BWouNOqO%2F%2B%2F34LdWgdJxTfEVx52m%2FZK6uyGBzQgEn5BbrXVFRtb5zGvLuxT%2FDXh3q2nRyiFKcWGoO6M4qywbm6cGqq6SIL1lHVd9ywQzhtRpYm&X-Amz-Signature=5861244bb4ba32a0b7feee9bf77c21d1b5728348bf27b0a470a0e719488bbb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **벽관통 해결 또한 Ray를 활용한다**
> ```javascript
> void StopToWal()
>     {
> 				//DrawRay는 씬 내에서 Ray를 시각적으로 보여주는 함수이다
>         **Debug.DrawRay(transform.position, transform.forward * 5/*Ray의 길이*/,Color.green);
>     }**
>
>     void FixedUpdate() 
>     {
>         FreezeRotation();
>         **StopToWal();**
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dbc51270-02e8-41db-be26-ec783d2e156a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5OKAJS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDt7wSdHxN2OVQ97uLhS6VnpjbVABEGXd%2BaqM39lxJQBwIgbYUE%2BZcVVvVYBieTiHC3b0F8z3Q7nHGcsRfRAUu4jWkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJjMDkUS9KKG3m%2FoRCrcA%2FQTWEI8m6a4JIcSvZCmmyr8g3JnRgWnU2HhFVzCp%2F8D3N40GHyXUuYvriyXlAzZs0Kf18VslLp3rBNXR7VWPMEuVl4LPncLec%2BjDjjGV1SHss4s1qj8DL%2B%2BdEfpy6O7vyCqGygbizsWaTLeBpIGLdLnPwUFR61pazNq4bfCa4HGdId3Xw1PoKl8ykTfm25WXiJeUMk0drbPezrKfBDjsv9%2FoHW9FpBgbnqc%2BFpFCX2EuGZbEIPcKwWkaZqmuyL9xkbSEjKca2UKpnFS7rHuj8cLtCWzk5vE2ARLpHzdXcCgpuB8VyW1whfmM%2B%2BLH%2FsHc3U9h0RVG0SOpgtpFSPQQwRldePuh6CXUdKM6rnO9USYUkW6F%2FUvM%2B1xYXJN%2FvZgbTKFrFmfuhsBYMqXWAOVlS1Wo5P1MWDVIl8%2BTBjuR4fdl8FcfsvVZOLBN9R2wwdk58MfOikOsgQq%2BEblrn3rqpQeR11rw03nSXU3af1LiLYUKRQiG12F7YzOfMtek%2F88SdyXVO5lcvcQv9q3%2BGeSHEYVluHBA%2BU152fjS%2BGUBqMpfr9L8%2B0mqGl7A5vEXjwx7yrZST%2F%2FNKKDJDGHX3gwTIA2xX%2Bf2uWUjlg0yZB2wZfaCRR1%2FEjjAyHXKO06MN%2F1h8QGOqUBp7qTld8IACEWlvxgyoauzZdZXhl1gzSHFIqJ3Whz84hWZSvAkmsZ5LzERLOdo0dcWdvSsbsXVWtEFKUu5CtH3XRVThKOSbS%2Bp3rQCC9niFTQYEvevtEZlc9NTTCJJRT4lG4v0El9LHtpZsXItISc0WiBahXu9gmC8nTuMm08E6QX9NMHcocdUj4LsrXyPXItH5duT3%2BSeprEu3l0fLUjn1yYgByS&X-Amz-Signature=353ea3ce960fcd879c84ae7b5a8d0184900f6fecb12fa240d2b2885f4077a195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> bool isBorder; //벽과 닿았나 안닿았나?
>
>
> ```
>
>

> 🔥 **아… Layer 가 아니라 Tag 설정을 해서 코드가 실행이 안된거구나**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/96dd23e0-86bb-4aeb-834f-8d6c78e4310b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVF4I4J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDBEteUJfJ7unT518KbmcSeuE9%2FBH6oRBvwwouiqRPdsgIhAI3e0P6qK5axq%2B8UxtHbeGUp8GR%2B3AcbKo1F7ojGE67nKv8DCCoQABoMNjM3NDIzMTgzODA1IgziKGWR0edSYhLuaTgq3AMvLRfCaz%2FSeniOXP5RHYd3eeTZRLQF%2BLRKo2KmmsucuKMnaGaOSgrdnLEgbKh07Xc8p8dcD70HZqyiZZbGwVpBS3zfYSvgTGVOghm4ozPVmYHKtHSuNfTaTkSP%2BShHT1J0GI3kTm7IobBQtakarKs0CwSO9DICU1YfNlOvrgx6GWzVircWAbeCgN3Div%2FUfQDrTwcARAqlkj0usopKQ%2BCdg7%2Fi3ThtrxcGbYFM56t893qeDzP7SLgXpZPtgQl878yEdczeooszJmrzaMGu5J9LLnlNgFR0gQfTKSRqy9SYeWJW5ohnBKQ9pukvwATumXsKRfh9kOrITQol5EmgfPhlwEVhxDPWiYNOYzaksMAhhBM7K2Iu2URciqedae7NRgHFw12RtutCWYErOoSL00eF8n%2BJFWYGmwpO6YPQXNfKMyBJ4WDB6kTnE4HyTnGyOMQYrxoPEJcBTJeir8%2B007nP95WphYd033bEqnvkFode88HWxpv7HSh2%2BWAXnoD%2FR5OdUyHeZVZe7Z74%2B1267HXgUzaHzOxdv%2B0hRnpGpIez1lDmER0RPw%2Fq3Ct6ar2R2Y0%2Ftz4rgUE0%2Fmw57WPgRBp2oK7qsHUxQBDvj6ehlsDcrviCKY3XHKsVr6QOnzCJ9ofEBjqkAXhoPESDE12Xp44wE32%2Bl4dGyYKktgsORBDewgtHh%2BD1fspCPj5V6bex7C%2BRlNqp5MlDZgfGIF%2B%2FMe%2BD6QNV%2FBSDB8JnqdykbNbJLMmq0EDgUe5C6vADX4s3tqKVm458bbVGhR%2BxffcFIQ3sQISALhl045%2FwUeeQ3OqbyVH%2BA6JIFcYhwi1E3pfksMPjnoaBQ3AuneY90kJUiT5jv%2BB80Bklj4z4&X-Amz-Signature=aa2437493225fe61960f3ebb324ae76d9b5bc38562bda3d64a3dd4e365f1ba28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **무기랑 플레이어랑 안부딪히게 - 리지드바디를 땅에 닿았을때 작용하지 않도록 만든다**
> ```c#
> //Item.cs
>
> Rigidbody rigid;
> SphereCollider sphereCollider;
>
> void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         sphereCollider = GetComponent<SphereCollider>();
>     }
>
> void OnCollisionEnter(Collision collision)
>     {
>         if(collision.gameObject.tag == "Floor")
>         {
>             rigid.isKinematic = true; //외부 물리효과에 의해서 움직일 수 없게 변경
>             sphereCollider.enabled = false;
>         }
>     }
> ```
>
> # “근데 아이템에 스피어 콜라이더는 두갠데예?”
>
> > 🔥 **GetCompnent() 쓰면 첫번째 컴포넌트만 가져온다 고로 첫번째에있는(위에있는) 콜라이더 정보를 가져온다 그래서 <u>**물리를 담당하는 콜라이더가 상위에 있어야하고**</u>, 아이템 충돌을 감지하는 콜라이더가 아래있어야한다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d9dce078-64c7-4af8-8176-00bdc726868d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74MESJ7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDqqLLwYNgcR16NYpD7INvo4%2BoJe9ADxiv6t%2FS%2FvxMo3QIhANI4B8cjTB0QdGFYZlDaheEMQJR%2BtTM41iJjangiZhyAKv8DCCoQABoMNjM3NDIzMTgzODA1IgxcD8ojR1W%2F9svCXVgq3APbJvyJYNh4KT%2FEOS9dY579o%2FefM%2BKiqbVCxyplSBMBLVEZdzn9%2B6XNWoGZQXXG7zCp52%2B79wqp9snGUvBRRO5ZyqpuV7IvU2ISZUJ6RIeW4lYAdeMfk%2FHMFcJYhhCVOafSWhlaLAXAzYpTivVqMkb%2F2rHIWBpb9r7qgoTXqWDMrrPG9X1VUo4FJrc06RKeTp2n33gQDcP8XgdMiGhh36FPML5C27MirGspbnS%2BZSBM0dkL%2FZ4TF%2BB%2BvM4g0h84qyT97JnbZTKY1srwYrc1tsz3RPDNVYJS8XpOqX20w8UPLJetyz3lxcPVNF3WrXsD8ZwCdHUi9wxgLIBG4uHiWQ2eI%2FSuWEx5kyYRBX0EKVkCZG3dPdxikX6iiLpoBnLC13tT7bNyl%2FcIS8%2BEuO%2FNLLBsYsGPXvBuSA0AsuY7MgDWrglWgiGGPrNLwtfKa%2FmZVoXt9udeCj25eiM8ahXBnNnhDvbyCG9NQo%2BBuCUBcENX7S3lVlMobD5oGYWidStoWKPNuxmg8OcWclrbAQg3R4nAqOwerNLN5q7hHHhScjdPcBWl6PP2xtJzgA%2Fpcwgs5xrwIFXJh9NlAUCZrLuQsn4CWskGOM7g1Iv1REI6LCfBzJ0izIknZAveIhYy%2BzDi9YfEBjqkAZGw0BSNJiSjd2BTTs18eANPqr%2FiEqDvQTZlZDTqzhnRsB3bekpT8CkxKQmQokfUKg8D4FR28isHzHDR1WCnpZpsVWJWRur4WKDjO6V1xQe7nS9aMG8cw7hA%2Fi%2B7iYlwspG6AufdVRmQpulSTXnQdhL9EOmWDy9JTFatlOaPzXvBWgCWX8Lak8lFSfEVLljRPf9mnXjKDTK3hruXoxj2gjy%2BP73D&X-Amz-Signature=1faa68385f3cbc74d6d4d50e7dd3f2891d733de89dc3bed4b5a79ec6c4166916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> # “Is Trigger가 상위에 있는데, 이거 어케내림?”
>
> > 🔥 **우클릭 눌러서 Move Up 시켜주면 Open Prefab 뜨는데 거기서 Move Up 시켜주면 된다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/01e5bf86-345c-4539-9a0a-7a868fadd800/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643FZCDLV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGQ3ipgcof8d%2BMdElmT9I7HEd1bJh5ESma%2Bda%2BrQ%2Fy6ZAiATPkh6rRgBJPXvz8yK8V3B9YcFClgnA%2FdPX0pMPWPntCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM1u9hQ8tiu4VwzMb4KtwDXu341NxbByzBGI%2Fewh36lRxmQlstIfQcoWlMX97FgieWv7VT7FwQ5WfFu2Y0zYKKKfQztTdEsf5%2BOIvqqJ7p3Yv2nc5ozq2eW7cPksaoqAHxELJgy2Qk49bh6t25hU0lfGyl49jSrJ8oXXggjk29mEJbSiTUlgH4lRZPu%2BG1ncD8A%2F4qT1y5w1fj6sSNTLgMiS8W2cdXCY%2FQE7H11Z08mC9CV0z7nT8briSKP%2F0tEF4gSNA%2B3P5KwkLrkPWLqGCd%2FKg8RNDZ%2BlbbKAm0P447AbRnS8QrZ3TklqSv1SSNTvkCPbqk4%2FP9IVuiai2jKJxiN5jNOWsH%2BdgmVdFQ5PEMq6s1TlgtSSe%2BPdrY%2F83pbYEacah9wUra41tK2XdMIO4kRe5aGleu49rGoCRYqbaly0q9kpWjjg77Elx94WfzH%2F%2FvZakm6nzqF%2BwcjQL%2BODCaBKn9eUCxiZCpdkNtAcSLSmyZqCoItmIpQq3HAbes%2BBPSEZi6HBj9z%2Fs97aqouIEUTJnAJE%2FV6DDpadD50cziy6bG3FSbaSdYI8KLlu7YsamqDfxc0Mv3OXda6%2B3eEfKLLqsfefN4lbNMVCuNA84sna0Pkcot0vZg7g%2Bti9z0PfdiShVGlm%2BRs49YOaMwivaHxAY6pgH%2FnRBP8OrSPQKUE9enpAEX6Ok34FaC9Lh2%2ByABtB7Jp2HypzjRA6ybzof7ybkHSZmQE5yiRf1xtjsJ7V9mC%2Btcu4lHQWZZRiGCdlR2B6ZnzpXzRTEvJjxLWSbohbQ6WTMO8%2Fwo7P9bV5pvP6qpJHW8qtYxjLSjsg9GpXX2a494SelMQSzLCV4L2qKa0UmIVju46apOWJZjI3MStsIEN6Fyk9unwpci&X-Amz-Signature=59ecb5b684c0dc7a9a34a0c3629109a91a3eed5500ecd1c3302096ba2fcec617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fcf5f26f-5a24-4911-ab5a-0560a9b448fa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643FZCDLV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGQ3ipgcof8d%2BMdElmT9I7HEd1bJh5ESma%2Bda%2BrQ%2Fy6ZAiATPkh6rRgBJPXvz8yK8V3B9YcFClgnA%2FdPX0pMPWPntCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM1u9hQ8tiu4VwzMb4KtwDXu341NxbByzBGI%2Fewh36lRxmQlstIfQcoWlMX97FgieWv7VT7FwQ5WfFu2Y0zYKKKfQztTdEsf5%2BOIvqqJ7p3Yv2nc5ozq2eW7cPksaoqAHxELJgy2Qk49bh6t25hU0lfGyl49jSrJ8oXXggjk29mEJbSiTUlgH4lRZPu%2BG1ncD8A%2F4qT1y5w1fj6sSNTLgMiS8W2cdXCY%2FQE7H11Z08mC9CV0z7nT8briSKP%2F0tEF4gSNA%2B3P5KwkLrkPWLqGCd%2FKg8RNDZ%2BlbbKAm0P447AbRnS8QrZ3TklqSv1SSNTvkCPbqk4%2FP9IVuiai2jKJxiN5jNOWsH%2BdgmVdFQ5PEMq6s1TlgtSSe%2BPdrY%2F83pbYEacah9wUra41tK2XdMIO4kRe5aGleu49rGoCRYqbaly0q9kpWjjg77Elx94WfzH%2F%2FvZakm6nzqF%2BwcjQL%2BODCaBKn9eUCxiZCpdkNtAcSLSmyZqCoItmIpQq3HAbes%2BBPSEZi6HBj9z%2Fs97aqouIEUTJnAJE%2FV6DDpadD50cziy6bG3FSbaSdYI8KLlu7YsamqDfxc0Mv3OXda6%2B3eEfKLLqsfefN4lbNMVCuNA84sna0Pkcot0vZg7g%2Bti9z0PfdiShVGlm%2BRs49YOaMwivaHxAY6pgH%2FnRBP8OrSPQKUE9enpAEX6Ok34FaC9Lh2%2ByABtB7Jp2HypzjRA6ybzof7ybkHSZmQE5yiRf1xtjsJ7V9mC%2Btcu4lHQWZZRiGCdlR2B6ZnzpXzRTEvJjxLWSbohbQ6WTMO8%2Fwo7P9bV5pvP6qpJHW8qtYxjLSjsg9GpXX2a494SelMQSzLCV4L2qKa0UmIVju46apOWJZjI3MStsIEN6Fyk9unwpci&X-Amz-Signature=eeacd3574cc96f7eae0e94aeb76e81e8ad72c1305eb8a75c958d640eb316c137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > 오픈 프리팹 들어가서 다시 Move up
> >
> >
>
>


---
title: "유니티 로그라이크 12"
date: 2023-03-09T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 관한 내용으로, 적 처치 로직, 넉백 구현, 사망 리액션, 애니메이션 이벤트 추가, 변수 헤더 추가, 레벨업 시스템 등을 다룹니다. 넉백 구현을 위해 WaitForFixedUpdate를 사용하고, 사망 시 리지드바디와 콜라이더를 비활성화하는 방법을 설명합니다. 레벨에 따라 무기의 갯수와 데미지를 증가시키는 코드 수정도 포함되어 있습니다."
notion_id: "39b7bec2-674b-4ad5-aa66-83c7f02e326c"
notion_url: "https://www.notion.so/12-39b7bec2674b4ad5aa6683c7f02e326c"
---

# 유니티 로그라이크 12

> **Summary**
> 유니티 로그라이크 게임 개발에 관한 내용으로, 적 처치 로직, 넉백 구현, 사망 리액션, 애니메이션 이벤트 추가, 변수 헤더 추가, 레벨업 시스템 등을 다룹니다. 넉백 구현을 위해 WaitForFixedUpdate를 사용하고, 사망 시 리지드바디와 콜라이더를 비활성화하는 방법을 설명합니다. 레벨에 따라 무기의 갯수와 데미지를 증가시키는 코드 수정도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=JRaIlTEmvHY&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=12)

> 🔥 **WaitForFixedUpdate : 다음 FixedUdate가 될때까지 기다려준다**

> 🔥 **넉백을 구현해볼까요**

> 🔥 **사망 리액션을 제작해볼까요**

> 🔥 **애니메이션에서 이벤트를 추가하여 스크립트를 추가해봅시다**

> 🔥 **제작한 변수들을 알아보기쉽게 헤더를 추가해볼까요**

> 🔥 **레벨업을 해볼까요**

## 레벨에 따라 무기의 갯수와 데미지가 증가하도록 코드를 수정해 보았습니다


```c#
예의바른대학생
1개월 전(수정됨)
다음 강의에 들어갈 지는 모르겠지만
레벨에 따라 무기의 갯수와 데미지가 증가하도록 코드를 수정해 보았습니다

<Weapon.cs 파일>

맨위에 여러 변수 선언하는 곳(ex. public float speed;) 아래에
public int weaponlevel; 
추가 

void Update()의 
if (input.GetButtonDown("Jump"))
    LevelUp(3,2);
의 맨 앞에 // 를 각각 입력하여 주석처리 (임시비활성화)

if (weaponlevel != GameManager.instance.level)
      {
            weaponlevel = GameManager.instance.level;
            LevelUp(3, 2);
      }
주인공의 레벨과 무기레벨이 같지 않을 때 무기레벨을 주인공레벨과 같게 만들어주고
"Jump"키를 눌러서 레벨업하던걸 자동으로 로드하게 했습니다.
그리고 아래에 레벨업 코드를 다음과 같이 수정해줍니다
public void LevelUp(float damage, int count)
  {
      this.damage += damage;
      this.count += count;

      if (id == 0)
            Batch();
  }
이러면 주인공의 레벨이 업 될 때 마다 데미지는 3 추가되고 무기의 수는 2개가 추가됩니다

주인공이 너무 쎄다 싶으시면 맥스게임타임을 늘려주시고, 몬스터 체력을 맥스게임타임에 따라 조금씩 증가시키는 스크립트도 추가하신다면,,,,,

게임 하나 뚝딱!
```


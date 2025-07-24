---
title: "Update() , FixedUpdate() , LateUpdate() 의 차이점"
date: 2023-03-08T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["Language"]
description: "유니티의 Update, FixedUpdate, LateUpdate 함수의 차이점은 다음과 같습니다: Update는 매 프레임마다 호출되어 일반적인 움직임이나 입력을 처리하고, FixedUpdate는 물리 효과가 적용된 오브젝트를 일정 간격으로 조정하며, LateUpdate는 모든 Update가 호출된 후 마지막으로 호출되어 카메라와 같은 오브젝트의 움직임을 따라가게 합니다."
notion_id: "68007877-d2e6-4e8a-bb11-62e76893a5cc"
notion_url: "https://www.notion.so/Update-FixedUpdate-LateUpdate-68007877d2e64e8abb1162e76893a5cc"
---

# Update() , FixedUpdate() , LateUpdate() 의 차이점

> **Summary**
> 유니티의 Update, FixedUpdate, LateUpdate 함수의 차이점은 다음과 같습니다: Update는 매 프레임마다 호출되어 일반적인 움직임이나 입력을 처리하고, FixedUpdate는 물리 효과가 적용된 오브젝트를 일정 간격으로 조정하며, LateUpdate는 모든 Update가 호출된 후 마지막으로 호출되어 카메라와 같은 오브젝트의 움직임을 따라가게 합니다.

---

![Image](http://2.bp.blogspot.com/-oiA6GKz_rO8/VCoGUjgaIBI/AAAAAAAABEA/x_ckOzgK0aQ/s1600/Unity-Fixed-Update-Loop.gif)

🔗 [http://developug.blogspot.com/2014/09/update-fixedupdate-lateupdate.html](http://developug.blogspot.com/2014/09/update-fixedupdate-lateupdate.html)

유니티에서 제공하는 Update 함수로 Update, FixedUpdate, LateUpdate 3가지가 있습니다. 어떤 상황에 어떤 함수를 호출해야 하는지 알기 위해 각 함수별 특징과 차이점을 설명합니다.

- **Update()** - 스크립트가 enabled 상태일때, 매 프레임마다 호출됩니다. 일반적으로 가장 빈번하게 사용되는 함수이며, 물리 효과가 적용되지 않은 오브젝트의 움직임이나 단순한 타이머, 키 입력을 받을 때 사용됩니다.
- **FixedUpdate()** - 프레임을 기반으로 호출되는 Update 와 달리 Fixed Timestep에 설정된 값에 따라 일정한 간격으로 호출됩니다. 물리 효과가 적용된(Rigidbody) 오브젝트를 조정할 때 사용됩니다(Update는 불규칙한 호출임으로 물리엔진 충돌검사 등이 제대로 안될 수 있음).
![Image](http://2.bp.blogspot.com/-oiA6GKz_rO8/VCoGUjgaIBI/AAAAAAAABEA/x_ckOzgK0aQ/s1600/Unity-Fixed-Update-Loop.gif)

- **LateUpdate()** - 모든 Update 함수가 호출된 후, 마지막으로 호출됩니다. 주로 오브젝트를 따라가게 설정한 카메라는 LateUpdate 를 사용합니다(카메라가 따라가는 오브젝트가 Update함수 안에서 움직일 경우가 있기 때문).
![Image](http://2.bp.blogspot.com/-hE4Ax8_ltjI/VCoGUjBQBEI/AAAAAAAABEE/HgNgArAm4oU/s1600/Unity-Update-Loop.gif)


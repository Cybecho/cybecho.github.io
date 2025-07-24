---
title: "유니티 로그라이크 07"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티 로그라이크 게임 개발에 대한 내용으로, 무한 생성되는 몬스터 제작, PoolManager를 통한 프리팹 관리, 스폰 시스템 구현 및 인스턴스된 프리팹의 타겟 관리 방법을 설명합니다."
notion_id: "e15763de-9751-499c-9c7a-76f2845abfab"
notion_url: "https://www.notion.so/07-e15763de9751499c9c7a76f2845abfab"
---

# 유니티 로그라이크 07

> **Summary**
> 유니티 로그라이크 게임 개발에 대한 내용으로, 무한 생성되는 몬스터 제작, PoolManager를 통한 프리팹 관리, 스폰 시스템 구현 및 인스턴스된 프리팹의 타겟 관리 방법을 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/26d6fe28-ad63-4ce0-b9cc-6e89e0aa90d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4OE7JJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHeokyW9koNNtb0lLOuDyK0q46U%2BhPeQNysU54wHk6mGAiBQ98Xk6WKQpa458wZSrngQkoeiOFmGIG6BKfQ1C0L90Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMeYgi6E6avtlqLjKpKtwDGXI%2FEWAWvbrTwMnLjAmDs4V08cu2%2Bo4CHQSQuu4H4y4Wkuz7YfeU5At9zWkSz16rHWpu0rNt%2F09DA2R77Rarm8jbv5%2Fa1WIC88GLn7EEuiv0mapo8AtfZM9deTOSYSKhKmljVKgWwZEGLv9c2AV9cX%2F0Q%2F4OQY8J%2BiF9XhEWLBhztZibthuIrqPhpZiVkYjJZ9n0ZUZjwhio1jzrgPvAqQmN4mpAY0KX0H9gcgE%2B4ES2q0LXR%2FyPofBgwSFa9hoEKy%2BJvnC9O2dvkBpy%2FFWCBEoaX%2FCypoI%2Fl79d9fGRy9BlFqO%2BThOUQkQ%2FfAC3Fr3x7J87ynmdHCqJBUc9WYwWD%2FbH1dS1p5zc2dFSzgRBW%2F6hnnVgEyVof4zLBw68QNWBOWrgTTRXfwcMpv4j8F4fRK1CVXdYblBQGB1Pwbw8eCFZt5GsuQeeev4BO2dyElFAvS5Sp1LbFaonX1ptmoYX3wkVQ%2F6pqNSj4hGn8OcOC2QjTIpV3TRVMmt%2FxqFsmmSzZyMVs0yKt8Cyk0OSgLrBL%2BNZcMVCLiqy6JhdSTGLW1ETr02uItmZMpFi2rcZ5mLbk8A1Sgue92Ct8wH7vHaaI5QjwBVda9zZ%2F1duox%2B0g4j47kpASY92qAUUzvow0M6HxAY6pgFlOBJRj7M8di9F59y8q431mL%2FGPsRignnW7I92NYbtAEB%2Btyt8zFGtFmy0RXIZKvp71Obl7vi%2Ft%2FDnTFsGAdQTDn30wZkaQV4awUBiZUGBd9y%2FqFDTtCmxBJt4TRM9Ak9lVzaQr9uBoTo3Crhu4RDEq5zAdzENa9gC2BbcECTBbJH5n2xk8dsJl6KEeDeKwa3DlcrQ02nvXz5S9SJ1j5NKuQ8Ax8dt&X-Amz-Signature=0a276f01522529ef6f528ab9d5b4722aa67eb9c34d8296996ad676ec87a1b351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=A7mfPH8jyBE&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=8)

> 🔥 ****일단 만들어진 적 오브젝트를 프리팹으로 만들어준다 (위치 초기화도 잊지마요)****

> 🔥 ****프리팹 관리할 목적으로 PoolManager를 CreateEmpty로 생성해준다****

> 🔥 ****몬스터 스포너를 만들어보자****



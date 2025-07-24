---
title: "aws 프리티어 무한 재가입"
date: 2023-08-28T00:00:00.000Z
draft: false
tags: ["AWS", "MAC"]
series: ["Infra & Network"]
description: "AWS 프리티어 계정을 무한으로 재가입하는 방법은 Gmail의 +기능을 활용하여 동일한 이메일로 여러 계정을 생성하는 것이다. 이 방법은 매년 새로운 계정을 만들 수 있게 해주며, 가입 시 확인 이메일을 통해 정상적으로 프리티어 기능을 사용할 수 있음을 확인할 수 있다."
notion_id: "a040c21b-3ad5-480e-b624-45c05660d43e"
notion_url: "https://www.notion.so/aws-a040c21b3ad5480eb62445c05660d43e"
---

# aws 프리티어 무한 재가입

> **Summary**
> AWS 프리티어 계정을 무한으로 재가입하는 방법은 Gmail의 +기능을 활용하여 동일한 이메일로 여러 계정을 생성하는 것이다. 이 방법은 매년 새로운 계정을 만들 수 있게 해주며, 가입 시 확인 이메일을 통해 정상적으로 프리티어 기능을 사용할 수 있음을 확인할 수 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6bffb01b-b8a2-42b8-aa43-c4467bb4ccf8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTS7XFO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAzP8WUe5vafXZ8KvesazNT4gbwujKFqA2mGa%2F8Dtb%2FxAiEA%2BYfZKE8vMijOcu5gH2w%2F9oCbJVJH5Bcg6dEW4Vv%2FUEYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG5AChdDbmp2w%2BbiVyrcA5erogcPXM%2FZk392vVT4aDeHaYxu0fhOE8GI7URU0gW82vPcjHh6KCWq2c1Bl0eFODYi7wrwSRjpAGCBm0pmy9yTxYufrG%2FMQoq7CmJoXVMVbrAozLP9RTEftPX4sH0DiVDTdoMjwm5AAyyNXsezbUUHR8mGPvycvkxsIoHHLrQ6FVQtmu5M6npI682Wmf278m7CXpIL6IRZ%2F3GJ3noPyC292zKmXVcfWcm3N%2BXQiXE3wRVI4%2FCzlILO9wfDe7O%2FSAUXWncTWg6mOZAvGl7Ti02TzMccQInw4CC16o8b6%2FJc0HXoqxrKwz1l9jxvnp41NVislVQ84sDrfOOsp06TYwyN3BJrE0wPqbx1LI7y5BPc18YeraAE8BEBg1Lx0WDC4XJQzja5p2bhgZwxzAAq2arvEHmce2CIGyU8UlJT5Ig0DHRge2Cf3TJF%2Bdmys%2BkQ5cdxV0GTpFl2OByK6XSmnLzjnTGL22RK6MkJo%2BhRg3%2BvZoqRNiQ2Vu1DKCR%2BpAAsDikY4kzKwrlEVsICyWWF2uHUvOBjllUcXRHGSW2NW6pEomdd2sGO8vC%2Brpdmw62STC4%2BTw2HFmcnJA6V3KcBzQ1NFQ0frRhJXzjaWgDW2r1D4Yga%2Fg4rL8qb9qPRMPvOh8QGOqUBAJgyCHECGvs6x3%2BtCt%2FR8zLXHwCpYmqHmvdZAAZt75OCxYWRwYBTEyOyzVKNHKMJvyolZMBGL8y7rBzIJ%2FOwokdqEcwwIZPAYzq4Dacpu8fm0p7iA%2FndbP5B6SJGE8WBJcX%2BmSEANpSfQFTlH7ks2dG7okpkVcNPCKm8Paw3D1v9YYcE0qJKDihHuRVitgy26H3l3Wi5uiwGLjn72yWrKULiwr%2FJ&X-Amz-Signature=e7fa6bc2be65e856e1e5cd03902fa022ef0921937d55fb45693d807a6273480a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🔗 [https://this-programmer.tistory.com/472](https://this-programmer.tistory.com/472)

gmail에는 여러 용도로 사용할 수 있게 아이디 뒤에 +{something}을 붙여서도 사용할 수 있는 기능이 있다. 예를 들어 내 이메일주소가 jujumilk3@gmail.com인데 여기에 jujumilk3+2022@gmail.com을 붙여도 내 원래 계정으로 온다.

![Image](https://blog.kakaocdn.net/dn/br7zjQ/btrtNR8uzoy/vlKnp56Ktt7ks7vZhyucaK/img.png)

이렇게 말이다. 물론 숫자뿐만이 아니라 영어도 되므로 특정 메일을 리스팅하거나 라벨링할 때 쓰기 좋은 기능이지만 이 기능을 aws계정가입과 함께 활용하면 같은 gmail계정으로 여러개의 프리티어계정을 계속 생성할 수 있다. 프리티어계정은 1년 후에 종료되기 때문에 나 같은 경우에는 뒤에 해당년도를 붙여 새로운 계정을 만들어 사용하고 있다.

![Image](https://blog.kakaocdn.net/dn/FTNDv/btrtITGwAGt/ktoBzLg9BK15ZjBxkIb530/img.png)

이렇게 가입시도를 하면

![Image](https://blog.kakaocdn.net/dn/CKgpD/btrtISU8UZT/eNefUIFES4jQxKC9v1dERk/img.png)

멀쩡히 잘 진행된다.

![Image](https://blog.kakaocdn.net/dn/ltIOb/btrtKBL86SR/YlJCyK4ld13rzFUUkrbQj1/img.png)

프리티어 기능을 정상적으로 사용할 수 있다는 확인메일이 온다.

이 방법도 역시 1년마다 가입해야하긴 하지만 언제 어떤 메일로 가입했는지 나조차도 추적이 되지 않는 상황은 면할 수 있고 새로운 메일계정을 만들어서 등록하는 방법보다 훨씬 편리하다. 구글 아마존 만세다.


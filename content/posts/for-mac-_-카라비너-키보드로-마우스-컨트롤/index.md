---
title: "for mac : 카라비너 키보드로 마우스 컨트롤 "
date: 2023-11-25T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["개발환경"]
description: "맥에서 마우스 없이 키보드로 조작하는 방법을 설명하며, Karabiner를 사용하여 특정 키 조합으로 마우스 기능을 구현하는 JSON 파일 설정 방법을 안내합니다."
notion_id: "264702d1-bd8d-4677-b511-7e3e7d0a44b2"
notion_url: "https://www.notion.so/for-mac-264702d1bd8d4677b5117e3e7d0a44b2"
---

# for mac : 카라비너 키보드로 마우스 컨트롤 

> **Summary**
> 맥에서 마우스 없이 키보드로 조작하는 방법을 설명하며, Karabiner를 사용하여 특정 키 조합으로 마우스 기능을 구현하는 JSON 파일 설정 방법을 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTS7XFO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAzP8WUe5vafXZ8KvesazNT4gbwujKFqA2mGa%2F8Dtb%2FxAiEA%2BYfZKE8vMijOcu5gH2w%2F9oCbJVJH5Bcg6dEW4Vv%2FUEYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG5AChdDbmp2w%2BbiVyrcA5erogcPXM%2FZk392vVT4aDeHaYxu0fhOE8GI7URU0gW82vPcjHh6KCWq2c1Bl0eFODYi7wrwSRjpAGCBm0pmy9yTxYufrG%2FMQoq7CmJoXVMVbrAozLP9RTEftPX4sH0DiVDTdoMjwm5AAyyNXsezbUUHR8mGPvycvkxsIoHHLrQ6FVQtmu5M6npI682Wmf278m7CXpIL6IRZ%2F3GJ3noPyC292zKmXVcfWcm3N%2BXQiXE3wRVI4%2FCzlILO9wfDe7O%2FSAUXWncTWg6mOZAvGl7Ti02TzMccQInw4CC16o8b6%2FJc0HXoqxrKwz1l9jxvnp41NVislVQ84sDrfOOsp06TYwyN3BJrE0wPqbx1LI7y5BPc18YeraAE8BEBg1Lx0WDC4XJQzja5p2bhgZwxzAAq2arvEHmce2CIGyU8UlJT5Ig0DHRge2Cf3TJF%2Bdmys%2BkQ5cdxV0GTpFl2OByK6XSmnLzjnTGL22RK6MkJo%2BhRg3%2BvZoqRNiQ2Vu1DKCR%2BpAAsDikY4kzKwrlEVsICyWWF2uHUvOBjllUcXRHGSW2NW6pEomdd2sGO8vC%2Brpdmw62STC4%2BTw2HFmcnJA6V3KcBzQ1NFQ0frRhJXzjaWgDW2r1D4Yga%2Fg4rL8qb9qPRMPvOh8QGOqUBAJgyCHECGvs6x3%2BtCt%2FR8zLXHwCpYmqHmvdZAAZt75OCxYWRwYBTEyOyzVKNHKMJvyolZMBGL8y7rBzIJ%2FOwokdqEcwwIZPAYzq4Dacpu8fm0p7iA%2FndbP5B6SJGE8WBJcX%2BmSEANpSfQFTlH7ks2dG7okpkVcNPCKm8Paw3D1v9YYcE0qJKDihHuRVitgy26H3l3Wi5uiwGLjn72yWrKULiwr%2FJ&X-Amz-Signature=e6e2b95e77d4c1201f5a7cdb495c246edb0bf712cc2dc76ea9bf0ea4fda3c307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s](https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s)

🔗 [https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json](https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json)

```plain text
~/.config/karabiner/assets/complex_modifications
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e8cc303a-2992-479b-87f8-e8cb637a37ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTS7XFO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAzP8WUe5vafXZ8KvesazNT4gbwujKFqA2mGa%2F8Dtb%2FxAiEA%2BYfZKE8vMijOcu5gH2w%2F9oCbJVJH5Bcg6dEW4Vv%2FUEYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG5AChdDbmp2w%2BbiVyrcA5erogcPXM%2FZk392vVT4aDeHaYxu0fhOE8GI7URU0gW82vPcjHh6KCWq2c1Bl0eFODYi7wrwSRjpAGCBm0pmy9yTxYufrG%2FMQoq7CmJoXVMVbrAozLP9RTEftPX4sH0DiVDTdoMjwm5AAyyNXsezbUUHR8mGPvycvkxsIoHHLrQ6FVQtmu5M6npI682Wmf278m7CXpIL6IRZ%2F3GJ3noPyC292zKmXVcfWcm3N%2BXQiXE3wRVI4%2FCzlILO9wfDe7O%2FSAUXWncTWg6mOZAvGl7Ti02TzMccQInw4CC16o8b6%2FJc0HXoqxrKwz1l9jxvnp41NVislVQ84sDrfOOsp06TYwyN3BJrE0wPqbx1LI7y5BPc18YeraAE8BEBg1Lx0WDC4XJQzja5p2bhgZwxzAAq2arvEHmce2CIGyU8UlJT5Ig0DHRge2Cf3TJF%2Bdmys%2BkQ5cdxV0GTpFl2OByK6XSmnLzjnTGL22RK6MkJo%2BhRg3%2BvZoqRNiQ2Vu1DKCR%2BpAAsDikY4kzKwrlEVsICyWWF2uHUvOBjllUcXRHGSW2NW6pEomdd2sGO8vC%2Brpdmw62STC4%2BTw2HFmcnJA6V3KcBzQ1NFQ0frRhJXzjaWgDW2r1D4Yga%2Fg4rL8qb9qPRMPvOh8QGOqUBAJgyCHECGvs6x3%2BtCt%2FR8zLXHwCpYmqHmvdZAAZt75OCxYWRwYBTEyOyzVKNHKMJvyolZMBGL8y7rBzIJ%2FOwokdqEcwwIZPAYzq4Dacpu8fm0p7iA%2FndbP5B6SJGE8WBJcX%2BmSEANpSfQFTlH7ks2dG7okpkVcNPCKm8Paw3D1v9YYcE0qJKDihHuRVitgy26H3l3Wi5uiwGLjn72yWrKULiwr%2FJ&X-Amz-Signature=1c125e101712efc99567fa1f4d1f7c283c268b3c2d937de19d7567e8d137d5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fa10a1bb-97b5-4358-abcd-968b338683e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTS7XFO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAzP8WUe5vafXZ8KvesazNT4gbwujKFqA2mGa%2F8Dtb%2FxAiEA%2BYfZKE8vMijOcu5gH2w%2F9oCbJVJH5Bcg6dEW4Vv%2FUEYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG5AChdDbmp2w%2BbiVyrcA5erogcPXM%2FZk392vVT4aDeHaYxu0fhOE8GI7URU0gW82vPcjHh6KCWq2c1Bl0eFODYi7wrwSRjpAGCBm0pmy9yTxYufrG%2FMQoq7CmJoXVMVbrAozLP9RTEftPX4sH0DiVDTdoMjwm5AAyyNXsezbUUHR8mGPvycvkxsIoHHLrQ6FVQtmu5M6npI682Wmf278m7CXpIL6IRZ%2F3GJ3noPyC292zKmXVcfWcm3N%2BXQiXE3wRVI4%2FCzlILO9wfDe7O%2FSAUXWncTWg6mOZAvGl7Ti02TzMccQInw4CC16o8b6%2FJc0HXoqxrKwz1l9jxvnp41NVislVQ84sDrfOOsp06TYwyN3BJrE0wPqbx1LI7y5BPc18YeraAE8BEBg1Lx0WDC4XJQzja5p2bhgZwxzAAq2arvEHmce2CIGyU8UlJT5Ig0DHRge2Cf3TJF%2Bdmys%2BkQ5cdxV0GTpFl2OByK6XSmnLzjnTGL22RK6MkJo%2BhRg3%2BvZoqRNiQ2Vu1DKCR%2BpAAsDikY4kzKwrlEVsICyWWF2uHUvOBjllUcXRHGSW2NW6pEomdd2sGO8vC%2Brpdmw62STC4%2BTw2HFmcnJA6V3KcBzQ1NFQ0frRhJXzjaWgDW2r1D4Yga%2Fg4rL8qb9qPRMPvOh8QGOqUBAJgyCHECGvs6x3%2BtCt%2FR8zLXHwCpYmqHmvdZAAZt75OCxYWRwYBTEyOyzVKNHKMJvyolZMBGL8y7rBzIJ%2FOwokdqEcwwIZPAYzq4Dacpu8fm0p7iA%2FndbP5B6SJGE8WBJcX%2BmSEANpSfQFTlH7ks2dG7okpkVcNPCKm8Paw3D1v9YYcE0qJKDihHuRVitgy26H3l3Wi5uiwGLjn72yWrKULiwr%2FJ&X-Amz-Signature=c2974e71c45bc0d5bf0c42fa5e940868a5583d4f040a6516b2e0db071d03b6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# T480 용 (opt → cmd input) 수정한 버전

# Rainy75 용

→ 항상 ctrl 키는 hold하고 있다고 생각


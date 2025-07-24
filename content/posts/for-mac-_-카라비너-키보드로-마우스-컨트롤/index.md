---
title: "for mac : 카라비너 키보드로 마우스 컨트롤 "
date: 2023-11-25T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["개발환경"]
description: "키보드로 마우스를 조작하는 방법에 대한 안내로, Karabiner를 사용하여 Mac에서 마우스 없이 키보드만으로 작업할 수 있는 설정을 설명합니다. JSON 파일을 특정 디렉토리에 복사하여 사용하며, T480 및 Rainy75 모델에 대한 수정된 코드 예시도 포함되어 있습니다. 마우스 이동 및 스크롤을 위한 키 조합도 안내합니다."
notion_id: "264702d1-bd8d-4677-b511-7e3e7d0a44b2"
notion_url: "https://www.notion.so/for-mac-264702d1bd8d4677b5117e3e7d0a44b2"
---

# for mac : 카라비너 키보드로 마우스 컨트롤 

> **Summary**
> 키보드로 마우스를 조작하는 방법에 대한 안내로, Karabiner를 사용하여 Mac에서 마우스 없이 키보드만으로 작업할 수 있는 설정을 설명합니다. JSON 파일을 특정 디렉토리에 복사하여 사용하며, T480 및 Rainy75 모델에 대한 수정된 코드 예시도 포함되어 있습니다. 마우스 이동 및 스크롤을 위한 키 조합도 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQOO6G4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDjByVCDZRT%2FtiZHKl1e54pzwrYhheMuIcxSF9QPqEjVQIgGJjGjLvDoj25zd7PVCiDUfp67R4ah1WMi2MmadFb19kq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQWl1x%2FBI%2F4GQT9MCrcA%2FCe4m4qtl5DCFSOhvHzfqUt3ERqG1giPSWplEA1Y0Ksi1JMupYn6g%2FErPXuSZ0cFI8e%2BDoXwgeniyHPq3xvbfOhPwGyMQ5CYMG%2FntctbcVVUGiFX7lOqp%2F4GA87z5X9G2Co5pLGxyD7lnkXmPZwNJNWDQKTj46BGaw7NkOGkWe7r60ius%2FwF7UtlOsaite8PPBCYNIb%2Fv7v42J5keFuUE8KVmJ%2BJdv5H3cQNwUc4mAKbaP49GaRjWW1a4bqJWDswM%2FUckixR5ajwKB9HjYvXb2qY9PIJYdBQHm4pFiKKTUOXAHdD9Iga8LnVb73dCrBTMkMcB9cL0QYCJBV7147c%2FU1BsUJLxOnjB%2FdJAmvRoJ%2B9OPeo0vcyLpXjlv7IVpibwQZ%2BQYXv24aEacrYc9tLZ8L9TEHzawpSVdB9SKEm0diyJDvWqROwqm5vo6C9%2BGxmQ8TlvUgvade8KCRxrKTdGkHyvwe2uDqTc%2FhccPLz41vLzCA0%2BeEk2UjB9C%2BuzfTCnErIb4Qz7nrBIvuL6fgHE41ujk5U2wpQw8aLg9FbQGbSiF0AwNeiveCo6D%2FF7PiN9TLZuFS8VTca172S9BviGswHgvxvGJ6ZwpcxY2pj6%2BVzmzEWAyrUxJIpgMxMJW%2FiMQGOqUB3Eu1oSuPJclA9%2BDaezRM6hEMXZwXkU%2FdCijgrzzRCWudd5sNc6LXWiVxkNTHzfzfrqf2ZdOSB6BlzDb8bbxB%2Fjv2oz2jM8%2FvEdljmQ1f2F696s%2BimdZt8%2FcxzD7z518CIXArPFcGJkKq0IX3XU%2BR1xD4g1gsT6qluKyF0vbhSntfPLsrqAbx8vGDg7HF%2FOinDvvmj652BeYWNCbr%2FrRNd%2BQrKQUJ&X-Amz-Signature=ddbd8bc97174c069527cf4b3015eef7db175322f93b2f5b1632a45ee04c9cb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s](https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s)

🔗 [https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json](https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json)

```plain text
~/.config/karabiner/assets/complex_modifications
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e8cc303a-2992-479b-87f8-e8cb637a37ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQOO6G4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDjByVCDZRT%2FtiZHKl1e54pzwrYhheMuIcxSF9QPqEjVQIgGJjGjLvDoj25zd7PVCiDUfp67R4ah1WMi2MmadFb19kq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQWl1x%2FBI%2F4GQT9MCrcA%2FCe4m4qtl5DCFSOhvHzfqUt3ERqG1giPSWplEA1Y0Ksi1JMupYn6g%2FErPXuSZ0cFI8e%2BDoXwgeniyHPq3xvbfOhPwGyMQ5CYMG%2FntctbcVVUGiFX7lOqp%2F4GA87z5X9G2Co5pLGxyD7lnkXmPZwNJNWDQKTj46BGaw7NkOGkWe7r60ius%2FwF7UtlOsaite8PPBCYNIb%2Fv7v42J5keFuUE8KVmJ%2BJdv5H3cQNwUc4mAKbaP49GaRjWW1a4bqJWDswM%2FUckixR5ajwKB9HjYvXb2qY9PIJYdBQHm4pFiKKTUOXAHdD9Iga8LnVb73dCrBTMkMcB9cL0QYCJBV7147c%2FU1BsUJLxOnjB%2FdJAmvRoJ%2B9OPeo0vcyLpXjlv7IVpibwQZ%2BQYXv24aEacrYc9tLZ8L9TEHzawpSVdB9SKEm0diyJDvWqROwqm5vo6C9%2BGxmQ8TlvUgvade8KCRxrKTdGkHyvwe2uDqTc%2FhccPLz41vLzCA0%2BeEk2UjB9C%2BuzfTCnErIb4Qz7nrBIvuL6fgHE41ujk5U2wpQw8aLg9FbQGbSiF0AwNeiveCo6D%2FF7PiN9TLZuFS8VTca172S9BviGswHgvxvGJ6ZwpcxY2pj6%2BVzmzEWAyrUxJIpgMxMJW%2FiMQGOqUB3Eu1oSuPJclA9%2BDaezRM6hEMXZwXkU%2FdCijgrzzRCWudd5sNc6LXWiVxkNTHzfzfrqf2ZdOSB6BlzDb8bbxB%2Fjv2oz2jM8%2FvEdljmQ1f2F696s%2BimdZt8%2FcxzD7z518CIXArPFcGJkKq0IX3XU%2BR1xD4g1gsT6qluKyF0vbhSntfPLsrqAbx8vGDg7HF%2FOinDvvmj652BeYWNCbr%2FrRNd%2BQrKQUJ&X-Amz-Signature=166aa1fda84b8a5521a307164f25e582cd14759b577b66b0f195ddc33ea388ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fa10a1bb-97b5-4358-abcd-968b338683e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQOO6G4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDjByVCDZRT%2FtiZHKl1e54pzwrYhheMuIcxSF9QPqEjVQIgGJjGjLvDoj25zd7PVCiDUfp67R4ah1WMi2MmadFb19kq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQWl1x%2FBI%2F4GQT9MCrcA%2FCe4m4qtl5DCFSOhvHzfqUt3ERqG1giPSWplEA1Y0Ksi1JMupYn6g%2FErPXuSZ0cFI8e%2BDoXwgeniyHPq3xvbfOhPwGyMQ5CYMG%2FntctbcVVUGiFX7lOqp%2F4GA87z5X9G2Co5pLGxyD7lnkXmPZwNJNWDQKTj46BGaw7NkOGkWe7r60ius%2FwF7UtlOsaite8PPBCYNIb%2Fv7v42J5keFuUE8KVmJ%2BJdv5H3cQNwUc4mAKbaP49GaRjWW1a4bqJWDswM%2FUckixR5ajwKB9HjYvXb2qY9PIJYdBQHm4pFiKKTUOXAHdD9Iga8LnVb73dCrBTMkMcB9cL0QYCJBV7147c%2FU1BsUJLxOnjB%2FdJAmvRoJ%2B9OPeo0vcyLpXjlv7IVpibwQZ%2BQYXv24aEacrYc9tLZ8L9TEHzawpSVdB9SKEm0diyJDvWqROwqm5vo6C9%2BGxmQ8TlvUgvade8KCRxrKTdGkHyvwe2uDqTc%2FhccPLz41vLzCA0%2BeEk2UjB9C%2BuzfTCnErIb4Qz7nrBIvuL6fgHE41ujk5U2wpQw8aLg9FbQGbSiF0AwNeiveCo6D%2FF7PiN9TLZuFS8VTca172S9BviGswHgvxvGJ6ZwpcxY2pj6%2BVzmzEWAyrUxJIpgMxMJW%2FiMQGOqUB3Eu1oSuPJclA9%2BDaezRM6hEMXZwXkU%2FdCijgrzzRCWudd5sNc6LXWiVxkNTHzfzfrqf2ZdOSB6BlzDb8bbxB%2Fjv2oz2jM8%2FvEdljmQ1f2F696s%2BimdZt8%2FcxzD7z518CIXArPFcGJkKq0IX3XU%2BR1xD4g1gsT6qluKyF0vbhSntfPLsrqAbx8vGDg7HF%2FOinDvvmj652BeYWNCbr%2FrRNd%2BQrKQUJ&X-Amz-Signature=f534aa64c8086d018cd3414cf3c601b4a041b553ed85e2aa2424b838bca74517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# T480 용 (opt → cmd input) 수정한 버전

# Rainy75 용

→ 항상 ctrl 키는 hold하고 있다고 생각


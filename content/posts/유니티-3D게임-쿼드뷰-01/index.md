---
title: "유니티 3D게임 쿼드뷰 01"
date: 2023-02-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "플레이어를 생성하고 필요한 컴포넌트인 Rigidbody와 Collider를 설정하며, Input.GetAxisRaw()를 사용하여 캐릭터의 움직임을 제어한다. Collision Detection을 Continuous로 변경하여 충돌 버그를 방지하고, LookAt() 함수를 사용하여 캐릭터가 이동 방향을 바라보게 한다. 카메라를 따라오게 만들고, bool 연산자를 사용하여 코드의 간결성을 높인다. 애니메이션 트리거 설정 시 주의가 필요하다."
notion_id: "2e99bfee-f2da-4c76-ac8e-ecca4dc23fe6"
notion_url: "https://www.notion.so/3D-01-2e99bfeef2da4c76ac8eecca4dc23fe6"
---

# 유니티 3D게임 쿼드뷰 01

> **Summary**
> 플레이어를 생성하고 필요한 컴포넌트인 Rigidbody와 Collider를 설정하며, Input.GetAxisRaw()를 사용하여 캐릭터의 움직임을 제어한다. Collision Detection을 Continuous로 변경하여 충돌 버그를 방지하고, LookAt() 함수를 사용하여 캐릭터가 이동 방향을 바라보게 한다. 카메라를 따라오게 만들고, bool 연산자를 사용하여 코드의 간결성을 높인다. 애니메이션 트리거 설정 시 주의가 필요하다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=WkMM7Uu2AoA&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=1)

플레이어를 생성하고 기본적으로 필요한 컴포넌트들은

`Rigidbody`

`Collider`

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e25a54b7-090a-4341-a056-7fa56bbcc104/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L5BAJ7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA7pReStBbPasT5dHKuikk1WF6QWbuV8OHWLZrZVkW6yAiBkV57UCYxlSMJgYkpiDRvdDa2Qtxd7vZ%2B%2BE5xIgK5%2Fvyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMMrFIfe4OqGF0mCOLKtwDB8gSux%2Brjv8nfQF3HA9JG%2F6UQeEgmt1etDbyUXK4%2BR9ygfJ2b0n%2BdHXqHqqR9w415q68%2Fv5kQO3pUFTpxP3fxdIJEgnF52XYwVBP4YSVBKO%2B33uthJkvdYDTjPITbJvVThKdOPp323ogV2tq0Loc85IY8aDaOczuaocuwRoGIwY%2FjZ9ebFwFOjqSHh2EUIg1liehn8iuCRSnC8sz23V7DUkiRkW6gnWD0%2F5NNUmJZMJ6A3bSTimAFjqw6%2B%2F7gkRxX%2BvJLveBNuuUijIopt4OEhVEPgba1VUXbpvmKJnh6KjJAIdK3InbEFZukUd0QvplYKMU1oAEXvn%2Bp1pBIqdLtZBhjvTGAEPsoN6PzS2NT5wzREF0xdxdOx9XLkcNA2jrV5XaDJhu1u23Zxvpq08jlg9x4x7G7zwJ%2FD0%2FgIE3MMBwaR5sQ5h3tuFxqxzafWVas2CxQKaDOldm5moXph45v6%2FPeViv8e7DWUGBcdhmHQB0aQSMXKrJTvkTwmJamZJJhsMi0TuHRnkcXgL6jaSIRhDMh9%2B3GZZWCWxP6aJZ2KKl02yYEUeHxdXvI1MNF43EYAnm37xr8UabO%2BDrKETaPYPfER1dBvLiLuZH3OTzGplDoGfUEmaFFyIy0dkwq7%2BIxAY6pgF3Fs0ccugiAaPLqifbM5NR%2B9O%2FRBSYYVGLA1zqMGU2f%2BTExQHPwS8nh%2BYnt22%2FX6%2BSEmabXkiKuEFA7skX0FfrCu3OGBThmFWVKt1y8M9P8kMKB%2Bb79LURVIXI%2BHKLxk3ByAcb3SO10AxMiSlmkNG2IZIBtQxAyLST6LCFzZ3JlENI7N4kDdOXWt6EAGx9vm1chwoJh%2BdlTqf262vH5SNnwEJ6pynz&X-Amz-Signature=865642904df6240b9ded586fbf80da86757248b167e7016d3735f1e53668bea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cd28774a-ae2b-46c5-91c9-b4d16825172f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L5BAJ7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA7pReStBbPasT5dHKuikk1WF6QWbuV8OHWLZrZVkW6yAiBkV57UCYxlSMJgYkpiDRvdDa2Qtxd7vZ%2B%2BE5xIgK5%2Fvyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMMrFIfe4OqGF0mCOLKtwDB8gSux%2Brjv8nfQF3HA9JG%2F6UQeEgmt1etDbyUXK4%2BR9ygfJ2b0n%2BdHXqHqqR9w415q68%2Fv5kQO3pUFTpxP3fxdIJEgnF52XYwVBP4YSVBKO%2B33uthJkvdYDTjPITbJvVThKdOPp323ogV2tq0Loc85IY8aDaOczuaocuwRoGIwY%2FjZ9ebFwFOjqSHh2EUIg1liehn8iuCRSnC8sz23V7DUkiRkW6gnWD0%2F5NNUmJZMJ6A3bSTimAFjqw6%2B%2F7gkRxX%2BvJLveBNuuUijIopt4OEhVEPgba1VUXbpvmKJnh6KjJAIdK3InbEFZukUd0QvplYKMU1oAEXvn%2Bp1pBIqdLtZBhjvTGAEPsoN6PzS2NT5wzREF0xdxdOx9XLkcNA2jrV5XaDJhu1u23Zxvpq08jlg9x4x7G7zwJ%2FD0%2FgIE3MMBwaR5sQ5h3tuFxqxzafWVas2CxQKaDOldm5moXph45v6%2FPeViv8e7DWUGBcdhmHQB0aQSMXKrJTvkTwmJamZJJhsMi0TuHRnkcXgL6jaSIRhDMh9%2B3GZZWCWxP6aJZ2KKl02yYEUeHxdXvI1MNF43EYAnm37xr8UabO%2BDrKETaPYPfER1dBvLiLuZH3OTzGplDoGfUEmaFFyIy0dkwq7%2BIxAY6pgF3Fs0ccugiAaPLqifbM5NR%2B9O%2FRBSYYVGLA1zqMGU2f%2BTExQHPwS8nh%2BYnt22%2FX6%2BSEmabXkiKuEFA7skX0FfrCu3OGBThmFWVKt1y8M9P8kMKB%2Bb79LURVIXI%2BHKLxk3ByAcb3SO10AxMiSlmkNG2IZIBtQxAyLST6LCFzZ3JlENI7N4kDdOXWt6EAGx9vm1chwoJh%2BdlTqf262vH5SNnwEJ6pynz&X-Amz-Signature=73f1ce220846295723a810c274d4cf29922b2b89aa7afe64ed92b285ec0c0add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3dee5859-7bcf-41fb-9694-be9a6ee40a00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L5BAJ7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA7pReStBbPasT5dHKuikk1WF6QWbuV8OHWLZrZVkW6yAiBkV57UCYxlSMJgYkpiDRvdDa2Qtxd7vZ%2B%2BE5xIgK5%2Fvyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMMrFIfe4OqGF0mCOLKtwDB8gSux%2Brjv8nfQF3HA9JG%2F6UQeEgmt1etDbyUXK4%2BR9ygfJ2b0n%2BdHXqHqqR9w415q68%2Fv5kQO3pUFTpxP3fxdIJEgnF52XYwVBP4YSVBKO%2B33uthJkvdYDTjPITbJvVThKdOPp323ogV2tq0Loc85IY8aDaOczuaocuwRoGIwY%2FjZ9ebFwFOjqSHh2EUIg1liehn8iuCRSnC8sz23V7DUkiRkW6gnWD0%2F5NNUmJZMJ6A3bSTimAFjqw6%2B%2F7gkRxX%2BvJLveBNuuUijIopt4OEhVEPgba1VUXbpvmKJnh6KjJAIdK3InbEFZukUd0QvplYKMU1oAEXvn%2Bp1pBIqdLtZBhjvTGAEPsoN6PzS2NT5wzREF0xdxdOx9XLkcNA2jrV5XaDJhu1u23Zxvpq08jlg9x4x7G7zwJ%2FD0%2FgIE3MMBwaR5sQ5h3tuFxqxzafWVas2CxQKaDOldm5moXph45v6%2FPeViv8e7DWUGBcdhmHQB0aQSMXKrJTvkTwmJamZJJhsMi0TuHRnkcXgL6jaSIRhDMh9%2B3GZZWCWxP6aJZ2KKl02yYEUeHxdXvI1MNF43EYAnm37xr8UabO%2BDrKETaPYPfER1dBvLiLuZH3OTzGplDoGfUEmaFFyIy0dkwq7%2BIxAY6pgF3Fs0ccugiAaPLqifbM5NR%2B9O%2FRBSYYVGLA1zqMGU2f%2BTExQHPwS8nh%2BYnt22%2FX6%2BSEmabXkiKuEFA7skX0FfrCu3OGBThmFWVKt1y8M9P8kMKB%2Bb79LURVIXI%2BHKLxk3ByAcb3SO10AxMiSlmkNG2IZIBtQxAyLST6LCFzZ3JlENI7N4kDdOXWt6EAGx9vm1chwoJh%2BdlTqf262vH5SNnwEJ6pynz&X-Amz-Signature=f73228f77cae5c608404195caf54769a3a71af2227d8407988e4e32b1810092b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 ****캐릭터 움직이는 코드****
> ## `Input.GetAxisRaw()`
>
> - Axis 값을 정수로 반환하는 함수
> - 0 / 1 반환
>
> ## `moveVec = new Vector3(hAxis,0,vAxis).normalized;`
>
> - normalized는 방향값을 1로 고정함
>


## 입력 키 추가

> 🔥 **Edit - Project Settings - Input Manager**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0bcfa87f-6d14-47b3-bd5f-b57b48caf45f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L5BAJ7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA7pReStBbPasT5dHKuikk1WF6QWbuV8OHWLZrZVkW6yAiBkV57UCYxlSMJgYkpiDRvdDa2Qtxd7vZ%2B%2BE5xIgK5%2Fvyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMMrFIfe4OqGF0mCOLKtwDB8gSux%2Brjv8nfQF3HA9JG%2F6UQeEgmt1etDbyUXK4%2BR9ygfJ2b0n%2BdHXqHqqR9w415q68%2Fv5kQO3pUFTpxP3fxdIJEgnF52XYwVBP4YSVBKO%2B33uthJkvdYDTjPITbJvVThKdOPp323ogV2tq0Loc85IY8aDaOczuaocuwRoGIwY%2FjZ9ebFwFOjqSHh2EUIg1liehn8iuCRSnC8sz23V7DUkiRkW6gnWD0%2F5NNUmJZMJ6A3bSTimAFjqw6%2B%2F7gkRxX%2BvJLveBNuuUijIopt4OEhVEPgba1VUXbpvmKJnh6KjJAIdK3InbEFZukUd0QvplYKMU1oAEXvn%2Bp1pBIqdLtZBhjvTGAEPsoN6PzS2NT5wzREF0xdxdOx9XLkcNA2jrV5XaDJhu1u23Zxvpq08jlg9x4x7G7zwJ%2FD0%2FgIE3MMBwaR5sQ5h3tuFxqxzafWVas2CxQKaDOldm5moXph45v6%2FPeViv8e7DWUGBcdhmHQB0aQSMXKrJTvkTwmJamZJJhsMi0TuHRnkcXgL6jaSIRhDMh9%2B3GZZWCWxP6aJZ2KKl02yYEUeHxdXvI1MNF43EYAnm37xr8UabO%2BDrKETaPYPfER1dBvLiLuZH3OTzGplDoGfUEmaFFyIy0dkwq7%2BIxAY6pgF3Fs0ccugiAaPLqifbM5NR%2B9O%2FRBSYYVGLA1zqMGU2f%2BTExQHPwS8nh%2BYnt22%2FX6%2BSEmabXkiKuEFA7skX0FfrCu3OGBThmFWVKt1y8M9P8kMKB%2Bb79LURVIXI%2BHKLxk3ByAcb3SO10AxMiSlmkNG2IZIBtQxAyLST6LCFzZ3JlENI7N4kDdOXWt6EAGx9vm1chwoJh%2BdlTqf262vH5SNnwEJ6pynz&X-Amz-Signature=a557ffba24acd0c0f6340cbc6b2ac6aee2838a2d1aeb943e9d5604ece6d62423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **버그 뒤지게나서 뭔가했더니 역시나 대소문자 이슈였음**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ed2a3af3-b755-49ea-886f-ad3a058f7819/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=ad1db8718a57114e228379d3204dec83a0822141d9c23fefd6c45f8a3d4a422a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2e7e5d04-920d-47d4-9192-985b409d32b2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=0c0e9b7cfaa0bc79ebbfa48b4f0c88fe1f8e506bdea055af921648f1eaeaac92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
>

> 🔥 **걸을땐 속도 느려지게**
> ```c#
> //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
> ```
>
> 삼항연산자 이용해서 wDown이 트루일때는 0.3을 곱해서 느리게
>
>

> 🔥 **`LookAt()` 이용해서 캐릭터 로테이션**
> 일단 LookAt()은 지정된 벡터를 향해서 회전시켜주는 함수
>
> ```c#
> transform.LookAt(transform.position + moveVec);
> ```
>
> 나아가는 방향으로 바라볼거라는 뜻
>
>

> 🔥 **카메라 따라오게만들기**
> 카메라에 스크립트 만든다음에 해당코드 작성
>
> ```c#
> public class Follow : MonoBehaviour
> {
>     public Transform target;
>     public Vector3 offset;
>     void Update()
>     {
>         //해당 스크립트는 타겟의 포지션에 오프셋을 더한 값이다
>         transform.position = target.position + offset;
>     }
> }
> ```
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=eZ8Dm809j4c&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=3)

> 🔥 **bool 연산자 사용시에 할 수 있는 문법**
> ## `!bool`
>
> 변수내부에 연산자의 반대값일때 라는 뜻
>
> 굳이 if (bool == true)
>
> 이런식으로 true 혹은 falus를 입력해주지 않아도 된다
>
>

> 🔥 **실수다… 왜 애니메이션이 안뜨나 했더니 Trigger로 생성해야할걸 bool로 생성했다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fc80bb37-ad25-42a8-b70d-698649f550e3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRO7QSV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCyXQJnPyaiK9DFaMEcvBb6rpIU8y5R%2BIp8%2BX4FrhOn%2FAIgJa9562rxcFXvDc6aor6rgVVC6WLik7Yq658xlgMerjAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEcalKNlu1NThNGygCrcA5AkL9vaEMmJYVDGWZSKHk3vdFXqa6j%2BSl6X%2FHujRbNGipNxfqTWfxO%2FRKSHfy%2BW7yS7FrpMkCxyjhLGfJUFQYYo92PWb47POMkX5q%2Ffl2XHRdOorlpcaBsRMKFF0ncNNKb7ECiLx03w0Xu92vRfFtFbyc%2B3yXGDZcuwpnbi5ZyO0KLAb3QcCBktnSgBMCD%2B8Bv2GQarefSk5pLg0QrEQLIQy6fvp9toktMp3ahUuMzCSqplxhQGEbA3dPftymsbUE8EGXXP7iz5Rwuvf1Rdzq6DBxzfAFsLEjtau7j5S3x%2FEuZ5RBcxZJFwIwBtwLt%2F4o0RFpA3SIYg%2FZhAF3mOyZtdFrJgGJzdbn1nu1dPWspW2nQm7%2BnXYv22p6fiCwRhTzvfuCutXrb3rD9A2F%2Fowm8oYkSXZhkZ1f73Na73yd9%2FNZfpjd1XziRZ8qtJlo3peahWtvUZbG5n7oWCCoK8pxuM2waVKcdycHGULMHF%2Bf04VXOlvuj7zLh1jzMDQhHCx18YWzqeDSx0I1e7R9Sfc%2BGp0djrRbKqRrxthrVNeso0ikv2JIA0ZDT3J3J2PU1bueSd2QtNtFb%2BS5zRglfz3P%2FdWf2nXDSixz6Yc8gC8Zi9ZYYxJ4BzVby%2Br%2FGWMPi%2BiMQGOqUBvTtDP5ZpXA3NRL9eVZPGZwgKhvrWYyClFmLbgahYAS%2B6uubjJQaC7VPc%2BWzAmr0khjCYjuKmT1vRxA6rlKVlPgzuMrXfIEZgwM8DjcY3NEhnmtcfOcHiFGfmjWyERNw5LHgruBy3Ysv0a7%2BSGIzso89KSDE1hvAIJT4q3SMRi3SpNCGi7BTixOatb1Z6N55cEiUYz9z8Gh63N3HJ0v81VkDOq759&X-Amz-Signature=dcfc36574f8510e5402a78b59f1b59a7d79823e04a30071dbeeabbe7f8a2efc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


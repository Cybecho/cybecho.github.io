---
title: "유니티로 플러피 게임 클론 개발01"
date: 2023-02-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 플러피 게임 클론 개발"]
description: "유니티로 플러피 게임 클론을 개발하는 방법에 대한 내용으로, VS Code 자동완성 오류 해결, 이미지 레이어 순서 설정, 애니메이션 커브 설정, 물리 법칙 적용 및 오브젝트 콜라이더 설정 방법을 포함하고 있다. 또한, Rigidbody2D를 사용한 점프 및 파이프 장애물 이동 코드를 제공하며, 프리팹과 제네레이터 개념을 설명한다."
notion_id: "a3bc9908-85bd-4f8e-921f-13019d832dd9"
notion_url: "https://www.notion.so/01-a3bc990885bd4f8e921f13019d832dd9"
---

# 유니티로 플러피 게임 클론 개발01

> **Summary**
> 유니티로 플러피 게임 클론을 개발하는 방법에 대한 내용으로, VS Code 자동완성 오류 해결, 이미지 레이어 순서 설정, 애니메이션 커브 설정, 물리 법칙 적용 및 오브젝트 콜라이더 설정 방법을 포함하고 있다. 또한, Rigidbody2D를 사용한 점프 및 파이프 장애물 이동 코드를 제공하며, 프리팹과 제네레이터 개념을 설명한다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=EqoU1PodQQ4&t=460s)

# [VS Code 자동완성 안될때 해결방법](https://nicotina04.tistory.com/233#:~:text=%EC%83%81%EB%8B%A8%20%EB%A9%94%EB%89%B4%EC%97%90%EC%84%9C%20Edit%20%3E%20Preferences,%EB%AA%87%20%EB%B6%84%20%EB%8C%80%EA%B8%B0%ED%95%98%EB%8F%84%EB%A1%9D%20%ED%95%9C%EB%8B%A4)

## 이미지 레이어 순서

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d3a64ec6-654b-4340-b75a-5a0e2a3189a8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=1681a73f34dd8e2c2914c8708e8f00f9658aa5a3c9057c8cd39f073bbdf61137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이미지 타일화

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7f9af15f-9986-48cf-8fcf-8dcb6004dafb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=ba55def8775d1a680a3176ca61748c752ac06c054eb87c60da4f3761de8efdcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 애니메이션 커브설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a276fe47-b856-46e4-bb05-f35d69c31526/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=928ee52194633d9b293c1f688d91b076dca4cac48e7e35bc9a946642a8ff6f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 오브젝트 물리법칙적용

`오브젝트선택 - inspector창에 Add Component - Pysics 2D - ``**Rigdbody2D**`

## 오브젝트 콜라이더 설정

`오브젝트선택 - inspector창에 Add Component - Pysics 2D - ``**Capsule Colider 2D**`

콜라이더 모양 설정방법

`Capsule Colider 2D - Direction 방향설정 - Edit Colider`**   **

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3052d5a2-924d-4612-b8e8-1c23d76e76cf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=d2e26e976b881a4e1b795367dfd249451786467da692193c2da7adfa9a283d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 코드 에디터 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15a31f43-0666-4ab2-a7b8-270efd2c81c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7HAKS4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIF6CwT4J1kGXdxoKp0XYbSgkbhCPHmHV8RzsaAoKcR13AiEAyLXzK5zvyOh5dNF02egCb5I%2Fgl4RoboUCHlMVlFfHB8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJex5EQ3%2F9Wsm6y7jyrcAwTQc7c95cY9YOGd5dc6FWhVYhIBE356x9WTeoLJld9s0%2B3%2FF5iQXDY%2FVFYBQ46WlaMxcz3AaxZjid1cKfWN7zPAa2JrVIjFc7TkY6cgxCCj22bI3m7hbQYCucPRyqbi2%2FZq8IuKe9HMyyNJq0y6z95oPNUKimnKmhLfXlfeiU6pduOeOSEdcPYLmK1AhcSsw9x%2Faw%2F7YVDigjPTuT1t6UsXbafg%2BSOunQEc3oR7oJvsuiywL45395qQS9Sz9W0uLhoJIwD61uWHhLbECh8hHZdh%2BikFomwZwbGQyrHZvDMPo2Q0NrYgJBqJUt%2FW08r4N3R%2FxybdEFCktT19qQ3hp1WY8Y6RXKDE0kptoDg0m436U1bvAKsYKKu27lhunCeKdKhbdrR3roP7THcEpHLrWpU%2FClXwzIdxYQZ90wAHc%2FabyOiBFxlfv7Ims9VENqistExWz5UQoSQsyGPIA07%2BqnuLXvMYYARpRGOPVHCoHBm7nToLlG4f2vgqXYqZQupc%2Bc4ecTyzzjDqi3abA0d6yIbcJ4GNqo%2BozeK4lTUfaX17VR4oNUJv2Ew8eCbUiZL%2B9KgPUANuHLf%2FoAej0op0I2z1u5DzZpNt1X7hfa3jw6JR8UfdFsxKLnPBdNM%2BML6%2FiMQGOqUBQCBanUirDPsC4ruJ2esDdOmjd%2FJSH%2F91ILfJlb4Rc%2BDTiWJhNAHD4z2wRZMQyJGwWxDEdQW9yBMOIiqO6%2FtlQkP1O2rE%2Bron%2FTRF%2BvcadLbVCs46BYzFR411FEwwzdHpHg%2FRADuTcQL8yOs%2F0vnsVvY1xcVkmBrvCO0L2CDkxOPsT7Y6cvRh2S%2B0lmp3V6gIQi%2BDRwNiE7B3x7h9SsK473pw7S%2FM&X-Amz-Signature=ff7cc4771ab43d022bef88b80aa59b0768ea0fa5bbdac8d4a7f807c3efe62f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 코딩부분

### BirdJump.cs

```c#
//Rigidbody를 코드내에 불러오는 과정

public class BirdJump : MonoBehaviour
{
    Rigidbody2D rb;
    //rb는 Rigidbody2D라는 클래스가 가지고있는 클래스를 받을 수 있다
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        //Rigidbody2D라는 컴포넌트를 가져와서 rb에 담겠다 라는 뜻
    }
```

Rigidbody2D는 유니티 내부에서 물리설정을 할때 만들었던 파일을 불러오는것으로, 코드내에서 불러와 사용한다

```c#
//Rigidbody를 점프하는 과정

public class BirdJump : MonoBehaviour
{
    Rigidbody2D rb;
    public float JumpPower;
    
    //rb는 Rigidbody2D라는 클래스가 가지고있는 클래스를 받을 수 있다
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        //시작했을때, 컴포넌트를 rb에 삽입한다
        //Rigidbody2D라는 컴포넌트를 가져와서 rb에 담겠다 라는 뜻
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0)) //마우스 왼쪽버튼 = 0
        {
            rb.velocity = Vector2.up * 4;
            //Rigidbody2D내부에 있는 velocity 는 속도를 의미하는 속성이다
            //속성값에 위쪽방향으로 힘을 줘야 점프를 한다
            //Vector2 는 xy로 2차원 좌표 기본값은 (0,1) 이지만, 3을 곱해주면 (0,3)
        }
    }
}
```

해당부분 설정하면 터치시에 플레이어볼이정상적으로 점프하는것을 확인할 수 있었다


### PipeMove.cs

```c#
//파이프 장애물을 움직이게 하는 방법

void Update()
    {
        transform.position += Vector3.left * Time.deltaTime;
        //Vector3.left는 내부적으로 (-1.0.0) 을 의미한다
        //deltaTime을 곱함으로써 30fps시에는 초당 1/3를 60fps시에는 초당 1/6를 곱한다
        Debug.Log(transform.position);
    }
```

```c#
//전역변수를 설정하여 속도를 외부에서(유니티에서) 설정하게 만들수도 있습니다

**public float speed = 1;**


    // Update is called once per frame
    void Update()
    {
        transform.position += Vector3.left * **speed** * Time.deltaTime;
        //Vector3.left는 내부적으로 (-1.0.0) 을 의미한다
        //deltaTime을 곱함으로써 30fps시에는 초당 1/3를 60fps시에는 초당 1/6를 곱한다
        Debug.Log(transform.position);
    }
```


> 🔥 ****deltatime?****
> 한프레임당 걸린 시간
>
>

# Prefab 이란?

> 🔥 **한마디로 Class개념…. 오브젝트를 만들어서 계속해서 찍어낼 수 있게 만드는 포토샵의 그룹혹은 템플릿의 코딩개념이라고 생각하면 될듯**

Prefab을 만드는 방법은 그냥 Hieararchy에 올라가있는 오브젝트를 Drag & Drop 하여 Prefab으로 만들 수 있다


# Generator 란?

> 🔥 **Prefab을 찍어내기위한 생산공장… Hirerachy에서 Empty를 생성한 후 컴포넌트를 추가하는 식으로 활용**

> 🔥 **사용방법**
> 제네레이터 내부에서 컴포넌트 추가하고 스크립트 내에서 public으로 GameObject자료형을 가진 변수 설정
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3721c553-3c82-4873-b4a1-c97fee47f53b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEOZ6QS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFrUf24kFN5eXdP2pOyzQRQ%2F0O00fcIlWUSgvLsFockkAiEAnALuxa3BXLaFQmXYDEYrlvJ1n%2BZXxPiiAKriAM%2FlIHcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGjLyKHgw%2B54TDyhnyrcAzK%2ByZQINBb6s29lYBFqgH8dZo4JTaRuCK8HCNQqcbGXlTYrDwe4G1GTs6zwLa83mZIIFSJFfTYjziAn9LlVoyMOTlHrI%2FayhXB2XMnq5Sz6y0kv67Dm2b9djn5OWnOPAtsQF6Z0Y1AiVNrGzWlixuIOeT9YVNRKIbOq6SEVnBuqIxLHhxKvAi9jOodIUoiKyGvXheMTSU36SxOXljiSDFdBQv2APv6hfbJODAIAdTVbQm5LijnjKaidpmNRLy8dsC2WqtOZB2HWgV%2BfPc22uyI%2FaoCXV%2BPsGhYGgz5O1NNv18w0vMfX6Yy0vVsjRs0TsLVn7MzZ%2BXGo9y0Il%2FS02jZP%2F0xEEBJh28%2FwnVdHd8LdcqxRbFLwVjEpdT0zTZ6FUu5jkqet4tm%2BSweVLLSoliBwNlXUCVKbksafkH%2BtkytyWFDTTzBPvd8zXSW1IL7vWlctgJMtpQmoxAY0CfBUeQUVmzHvZ4OTJSnQHbiU%2FP6QlAJNxP93VlWFMZ9rDTBVPvgZOch3K2Z1C8t7wvY9QDkUHAO5pWzwjqa8uzGNH3RQgk%2BpbEX4xz%2FaORd7SE6LJgBS5D130EjoEBhOMTU%2B2oyldrqtWm1C5BWxsnm%2BrhibKIx3nhKVSBqtPUWZMNy%2FiMQGOqUBfL1kvHMU5xD9s59RiPFGJBgCEpQAcreax0SLiTswzbBtkTBbZ6D2Qbat85n8e7ZWTRYhQzjuv0rXkR08w71NpteRU2ceDwyl1EBm7OZR4Rrh35yQHeGG2D2PvrDpUVni4JXTBLt42nGB48CG%2F6gOs62Rht1o9YBclxgJXMEYDV1DJ%2BAqbzLJYhVZtdYTQItnB%2Bdi1qQ1AU92tLFFThPYS5DgNj%2FU&X-Amz-Signature=4e9caea5b69fa57506896b75eb5f9668eab0bcead5ee2104b9efb6470fc79a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 그 후 하이하이어라키에서 생산할 프리팹을 드래그앤 드롭 혹은 직접 선택하여 변수내부에 할당 가능
>
>
> 그 후 다음과 같은 코드를 작성한다
>
> ```javascript
> public class MakePipe : MonoBehaviour
> {
>     public GameObject pipe;
>     // Start is called before the first frame update
>     void Start()
>     {
>
>     }
>
>     // Update is called once per frame
>     void Update()
>     {
>         Instantiate(pipe);
>         //유니티 내부에서 등록한 pipe prefab이 Instantiate를 통해 생성된다
>     }
> }
> ```
>
> ```c#
> //timeDiff 로 유니티에서 값 조절할 수 있게 해두고
> //deltaTime이용하여 파이프를 특정 시간에 한번 생성되게 코드를 짠다
> //이때 newpipe를 생성하여 게임오브젝트를 생성시킨다
>
> public class MakePipe : MonoBehaviour
> {
>     public GameObject pipe;
>     public float timeDiff;
>     float timer = 0;
>
>
>     // Start is called before the first frame update
>     void Start()
>     {
>
>     }
>
>     // Update is called once per frame
>     void Update()
>     {
>         timer += Time.deltaTime;
>         //deltaTime을 계속 더해주면서 1이 되었을때가 1초가흐른것이다
>         if (timer > timeDiff)
>         {
>             //y3.3 ~ y-3.3
>
>             GameObject newpipe = Instantiate(pipe);
>             //유니티 내부에서 등록한 pipe prefab이 Instantiate를 통해 생성된다
>             //Instantiate한 GameObject를 newpipe로 받아준다
>             newpipe.transform.position = new Vector3(0,0,0);
>             timer = 0;
>         }
>
>     }
> }
> ```
>
> ```c#
> //벡터부분에 랜덤값을 추가하여 생성시킨다
> //x부분 벡터에 정수를 조절함으로서 프리팹 생성 위치를 설정할 수 있다
>
> newpipe.transform.position = new Vector3(0,Random.Range(-3.3f,3.3f),0);
> ```
>
>
>


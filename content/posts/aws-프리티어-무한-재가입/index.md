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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6bffb01b-b8a2-42b8-aa43-c4467bb4ccf8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUMRWQT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDcB%2BePgnYQ13%2Fur8a9gzLPIcUPF4NUTx%2BBwAKKZe%2FbuAIgNSC1X3RFfE%2FyYvKyWAkazRLH6QvGVjRlYSrTVDELAIMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO1ggAn6HWwQNnNk8CrcA4AxgqBPmF9hmweLlFLcgbWVxo6HdcJfSvqua7z4470pZVFzBYe%2FsYEium78%2F0bnXCH4GgqKU03C3Tl2mIS0vbWQ7Rg1NkLcDc%2FmyY4q5d1a0LjNP7hYEPlPfnGAnYNPA9KcmMwluSi95ScdgLUzVtRnfCxDDsL2xxLA%2BJMQcaFqb3F3Gj0O8E%2Feyyy%2F6Nd0SQB2iGyji5XqYN6KQp6CZLnFgbuYPER53wFvcYZpz%2BM7zVNOJh%2BIyRc8A59VnqGHLob1RYiK9bvegmOnHAujdebTyP09D%2BQ0Dr90etEioMfCT0rBaTKw7vmG1uMaUaCpYntoeKFx9DrDRvQP9X71gKiORzPadVrZOhE3RuJwlQYxvL12ga3RmULcxMwbcVBbAn9od52sY8S8e5jHdHMnZAGB81tup5L6BdvbvHKNYrnlM5FGUhTRHDtZhSOyCjUCbdpZYMKl1xvF6ozvdNfXabxvVReY0x96U%2F3O8jz3HckcoToxJxM%2BVPKPN8%2FtodgFmm0nU8zxj2452qeZ4%2FK552o59oWa6zlZhpV9K1MKE6CyDxtdLo3Md0MUOovko%2BHnuiFdpihesoDRSfYzsXRz%2FGWK07CuyAR7k7upS3EWZhIWwhzb%2FDNuMqYjfOgZMJjQh8QGOqUB9q6HnOzPhvW3ekKvvjG1E%2FMDzS0ZuyI8DZbCR%2FSJsLX4%2FE1u7GmAQi16M1JhfR15nOfWG5C7X5y0S4LaVpwy%2Fj1DDx7DHOOOfWHbj7G9C9e0GW9UjaG%2BW4ysvZcGzN1qT%2F%2Bg5Q%2B%2BRv%2BbfIzmkNnCimROK4PaJmUEyzJRhpG%2BQ%2BjvXWszRg1qS7gSbvpahsjBEConmF82tqdCUgtlT81YX8rl6cnT&X-Amz-Signature=4eb2c39f2c2923082856496995fd6793b9def4963595836d73b0a736a45cd6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6bffb01b-b8a2-42b8-aa43-c4467bb4ccf8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2V7M2JF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC3fCKgpaQVZdSEdj6e8XTTi5bG3oNyQBRVmS7Z97FRvQIhAO7M1KlEVUN6O61KewnLIUsz8%2BUZ%2Fh9hI0e6K7jB0YE3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxBh9qZ1x%2FTbuYS5SMq3ANR7%2FJstrXBfBJ2WKAkNzbe%2BjtsH%2BMCUJSm1tcATZxh0ZFraN9WLHSCbAvgnkj0kOR%2FqcY2AGmYW5BGG513P3e76rIh5ML5%2BHEC0vbCnaQSI9%2BPRn1F6bPwKAP%2FqePYn8ArZQMHjVYHOEUYJPJQZvkpzpmJdrZuU4PtVeyDjlZ0Fy%2BD8P7UI4oGmkYPo44%2F1IxKWSPVwv86U%2Fl3LUnKrSaENaXMcpJdAmXObBob4tqgl3atSRiXjKWN5feGp5wAgR0H%2B4m8GZJTb6OuOeszWKiPZfxdLpIynTUIoONtWv6Q0AQoEcmnK4pKtAaDdYCVueoFNAFyx%2BmwNqfh7WaXAP3MsGBRO6Zc2wZ9ntZ%2B7O1KSRSZ4ny8sy0cmwudfUiPDDAXvaG8tRcdFSJ%2BpVQ5A2cJ%2BnKQmsYm6P3iaeOHuOVKO5lZv1M5svxzwpshcliE8T8Cp%2BZDW8y7cEsyFcg285gvhimj%2BFi5PTwzmK39zdk%2BtohUloHq64KuJjaHd%2FuTWGQJyy9Bt1pjZv5%2FnUXGcQcy4KciZoSJ8VkwhD2NZtq00ymW74%2BkaYmPwT2SX2mD9UpYpgkwEhTaMYgG%2FmEtKLexeePSXAmRZclnY2L9X3h0Gi1MU%2FYXV%2BsERigT5DCp9ofEBjqkATxZL%2FOEw9OeBppIBUB%2Bc1IaEjd16Qne9XZAhwjhiomIG2ek25AFwBP4mU5Fym%2F06cZ4bny8aQyiDLJk%2FwRynDlB4GLb3IgZ2nuF9Z3sc2CmIPcy3SPZWxXiU2hJe1KhMsX1EExqS4I9lRJ4aH7gkrxSBqff9QJTTsEfKSbCNg52WvXjpB3WnNsrstubaiqFy%2BUwaPPTiXhPQBvEIghk7lQxxzQR&X-Amz-Signature=90417e2b0a7fb80e9b2f84a3ba5c5f022653b738ce464be80ccc6d6ca9988a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


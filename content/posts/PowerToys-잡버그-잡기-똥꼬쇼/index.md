---
title: "PowerToys 잡버그 잡기 똥꼬쇼"
date: 2023-11-04T00:00:00.000Z
draft: false
tags: ["WINDOWS", "POWER_TOYS"]
series: ["Don't Hate Windows!"]
description: "키보드 핫키 버그 문제를 해결하기 위해 다양한 단축키 조합을 시도했으며, Alt + U와 O를 번갈아 누르면 문제가 해결되는 것으로 보인다. 버전 다운그레이드(0.74.1) 후에도 동일한 문제가 발생했지만, 일부 개선이 있었던 것으로 나타났다."
notion_id: "f5eebcb5-be9a-4bfe-8531-9af9a14b63d4"
notion_url: "https://www.notion.so/PowerToys-f5eebcb5be9a4bfe85319af9a14b63d4"
---

# PowerToys 잡버그 잡기 똥꼬쇼

> **Summary**
> 키보드 핫키 버그 문제를 해결하기 위해 다양한 단축키 조합을 시도했으며, Alt + U와 O를 번갈아 누르면 문제가 해결되는 것으로 보인다. 버전 다운그레이드(0.74.1) 후에도 동일한 문제가 발생했지만, 일부 개선이 있었던 것으로 나타났다.

---

# 아오 키보드 핫키 버그 왜이렇게 많냐??

# 해결??? 

- Alt + U : home
- Alt + O : End

로 맵핑해놨었는데,,, 이거 남발하다보니

- alt + a : Ctrl + a
- alt + c,v : Ctrl + c,v
이 명령어들이 안먹는 버그들이 있었다…


이거 해결 방법은 그냥 

- alt + i j k l 혹은 
- alt + u ,o
남발하니까 버그가 풀리는데,,,, 이거 원리가 뭐지?

→ alt + u 가 좀 더 이 버그에 관련이 있을 것 같다

> Alt + shift + O(home) or U(end) 를 번갈아 누르면 해결됨
이게 무슨 에러일까?

# PowerLancher.exe 의 부재가 원인?

🔗 [https://github.com/microsoft/PowerToys/issues/9017](https://github.com/microsoft/PowerToys/issues/9017)

🔗 [https://github.com/microsoft/PowerToys/issues/9018](https://github.com/microsoft/PowerToys/issues/9018)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc8a481e-de1e-41fb-9e59-922e342cdedc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODTTB7R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIArfqDAQjuNSriYNOb0YVjj2%2BTZ3VgeWaIl9gGM8Y7TgAiAeIaBwQnAWPpyyTFu4kglBwrSg%2FKto8aXdGkLSOfPygir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMxBlBKNKzrHmbE74OKtwDJq80qlEJBJs1m4PoyjrZ6vJ1P88bg%2B3sH0GdPPC5G5pALxNlpWzNjgzN0gOxUNiwnUUK%2BFeSPtRC04CIxJtQp000SuuueVHVAcdAQtc6cEIir3Fg8JbD7yzI2xCjJyVBOGbMDd8yUKwC9n68%2BSoSS1JNk7%2FHLBMGcQwSLxEza9k7qrSYCYrRpFZrDgaHY0iwy%2Fbu5uR5cxYfYhfjRTJNTx6gCANiQ5CEjFG%2FpKVLgLvvY80XraeMi3jY2pTeTulCnbyo2OXNY4VyUn2eYyuSFiuaaEk2vexYGK0AjbwMfWIEyBarW0a74XlKS7TQPk0zBYrtO3KrL5bqBf5P2pM2qzyG4zJfXSfnufGUYGb7vq2T%2FoFlnMaeUnEw6%2FhQjy5LfytfroVT71ZO25q719ufto%2FWKyi1F7PaYzjM1syx0ssOvHLQ%2F2RtjaN%2BNY6K8o%2BFaEH8%2ByVpTUA8OeOKRO%2F7%2BArMVYOK7qejC8M1up9d250czxWlAL1VKd%2Ff79X9Q8qCAFgcMvWUiqdPE260BtpGqEueUPpfh0eB9uZx19%2BlTsYXsgjUgUku8pDY100Up9PFxWnm79UYE2zxaCIoUjrKF%2BBQD9RXJCLrtgUHqzOnMXL6hfTMVsq80coBJMMwks%2BHxAY6pgGnk858wLpRo%2BWdmyk7bCJU7CUNy%2BfqQN9Lu9p9nZCEu8lfqSbQYr88UZlE%2FdumVPGKVlI6H1KwhcK0FwEKJGNiNriW7IoM3KOkUIjspphcBn%2Bp7im3avxTciRrbl%2F%2FxLRpKAEln2dqlAFhDs0rL47q%2FQxilPJcUMKwVGkutgQ4a%2BpjiI%2B%2B3BU5Q8uDyeT9LeE8LW7loq7Z%2F6uMDqhAXJsZS%2FKN0PKM&X-Amz-Signature=c8f452b3ae7d8f5a81201cf87ea7df1f277f6d2124e5cf23e548eb1119718fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 버전이 문제? (버그발생 빌드 0.75.1)

### → 버전 문제도 아닙니다! 0.74.1 로 다운그레이드해도, 똑같은 문제 발생

🔗 [https://github.com/microsoft/PowerToys/releases](https://github.com/microsoft/PowerToys/releases)

0.74.1 로 다운그레이드 하니까 좀 나아진듯


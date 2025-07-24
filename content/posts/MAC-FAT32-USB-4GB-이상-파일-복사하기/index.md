---
title: "MAC FAT32 USB 4GB 이상 파일 복사하기 "
date: 2023-06-03T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, ExFAT으로 포맷하면 맥에서 4GB 이상의 파일을 복사할 수 있다. 디스크 유틸리티에서 드라이브를 선택하고 포맷 형식을 ExFAT으로 변경하여 초기화하면 된다."
notion_id: "a61b9f8d-76b5-4d1f-82ed-bcda10eb71e8"
notion_url: "https://www.notion.so/MAC-FAT32-USB-4GB-a61b9f8d76b54d1f82edbcda10eb71e8"
---

# MAC FAT32 USB 4GB 이상 파일 복사하기 

> **Summary**
> FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, ExFAT으로 포맷하면 맥에서 4GB 이상의 파일을 복사할 수 있다. 디스크 유틸리티에서 드라이브를 선택하고 포맷 형식을 ExFAT으로 변경하여 초기화하면 된다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c69ee83-c209-4a0d-9568-764ebb877f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ42FNZC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE9eT1YDXQlXZs%2B7bgBKcJruq%2BhQTTlN%2ByqO1MQ6ruq3AiEAraoK2rkEY6s2fEQ90%2Fw9dY8ldKR9%2FxM8owUcA9ONnEoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFs8ytFeSnHm6VvTxCrcA946tzig3XjgNzWN9yzUwsQJ%2Fp2navbXecjMf3vNiJvqsGVRLqTL%2BiWh6xPIPmBkqap3hiZykZVkbUdVk8jn%2B8meV5B5r3Nj5B2XBPr%2FoHohK93QB0%2BkXxDaELGzyCaThabkIuhS3jUKDmIeE9i0%2Bp9YRiev9USCWNDWNDRokjrMA7mcdjbYT7wdBo3x%2BbwpmFwbqo0zePW%2FDNS%2BnGswwUWac85su3Mk9YQ46Ugq7LtLUmaQ4U4HiuIoCde85onGTbamAp5UTsTStqlWHvbXwNqdRwvIb63XzC3mkIWtcyenHRKXiKadW9iF62hLpQRid4lOvmt5dOgpvGzSoPONwquz1YfgBI9DWrsddacKFyuErYixkV6bd81KIGcwXTuX5wgcyuBTlbmdDI4QPclS3w9pxF4TF62fgfX63Rsa4naVsrMQhq7iwXKO%2BuwRjltHXRi%2Bfi4Fni0StWdVkdSLWZnsa17%2BZrdjXKrl7nFRBX9EoYjWEZmZ6D8%2Bg6qlbmV%2FsnjmE%2BfjF76yk6FkO0L%2FJQiTx%2BD%2FYlNrY7fePfOeJYqyhuJ6j45b%2Fc9yHR3ib%2BgWJeL7km6JNw6SK5sz2slcPk3Ma7lk465lZVaF0qXps0aGWQ%2F27Jwz6lIKvwGAMIO%2FiMQGOqUBwJZRDuoABSFKk%2FvUsOpQGeeqD7liIwh0o%2FmovviTLEvzjUkKy4%2BOW%2BeYfgzo75y9fgZ%2BD1PQxQEnd58pYJ%2FPGNg%2B5MXZe0ZQJCQ%2BvX1qJ6nbCjrUh6HwvWHb%2Fxqe0ppRKw652bqB5nFl%2BKB3gjtMlC6x1B%2Fm7R%2ByiTfEYAb0TAKyY6zMO7h1zlkqTpnzB3YO1oweg%2Fud%2FHRLOc4c%2BAeK62Ewcd%2Fs&X-Amz-Signature=ce9cbbbda3a2729c0066974062abc3f852d5b92610aba1448596391e58a15f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


중고로 싸게 들여온 MAC MINI 2018에 Ubunut를 설치하려고 파일을 설치하고 쿠팡에서 적당히 구매한 USB에 파일을 복사하려 했는데 4GB 이상 파일은 복사가 안되는상황발생…


이유를 알아보니 구매한 USB가 FAT32로 포맷되어 그런거였다

(fat32는 2^32 까지 저장 간능하나, 파일 전송간 4GB용량제한을 둠)


FAT32 로 포맷된 USB를 4GB를복사할 수있게 NTFS로 포맷하면 윈도우 및 맥 환경에서 4기가 이상의 파일을 옮길 수 있지만, 나는 맥에서만 활용할 것이기 때문에 ExFAT 포맷으로 초기화하려고합니다. 무엇보다 NTFS 포맷은 맥에서기본적으로제공하지않아서 이것저것 설치할게 많아서 패스….

궁금하면 아래 링크 참고

🔗 [https://groovechance.tistory.com/73](https://groovechance.tistory.com/73)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b0b0173-bac0-4c7a-86e1-5a736f21007d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ42FNZC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE9eT1YDXQlXZs%2B7bgBKcJruq%2BhQTTlN%2ByqO1MQ6ruq3AiEAraoK2rkEY6s2fEQ90%2Fw9dY8ldKR9%2FxM8owUcA9ONnEoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFs8ytFeSnHm6VvTxCrcA946tzig3XjgNzWN9yzUwsQJ%2Fp2navbXecjMf3vNiJvqsGVRLqTL%2BiWh6xPIPmBkqap3hiZykZVkbUdVk8jn%2B8meV5B5r3Nj5B2XBPr%2FoHohK93QB0%2BkXxDaELGzyCaThabkIuhS3jUKDmIeE9i0%2Bp9YRiev9USCWNDWNDRokjrMA7mcdjbYT7wdBo3x%2BbwpmFwbqo0zePW%2FDNS%2BnGswwUWac85su3Mk9YQ46Ugq7LtLUmaQ4U4HiuIoCde85onGTbamAp5UTsTStqlWHvbXwNqdRwvIb63XzC3mkIWtcyenHRKXiKadW9iF62hLpQRid4lOvmt5dOgpvGzSoPONwquz1YfgBI9DWrsddacKFyuErYixkV6bd81KIGcwXTuX5wgcyuBTlbmdDI4QPclS3w9pxF4TF62fgfX63Rsa4naVsrMQhq7iwXKO%2BuwRjltHXRi%2Bfi4Fni0StWdVkdSLWZnsa17%2BZrdjXKrl7nFRBX9EoYjWEZmZ6D8%2Bg6qlbmV%2FsnjmE%2BfjF76yk6FkO0L%2FJQiTx%2BD%2FYlNrY7fePfOeJYqyhuJ6j45b%2Fc9yHR3ib%2BgWJeL7km6JNw6SK5sz2slcPk3Ma7lk465lZVaF0qXps0aGWQ%2F27Jwz6lIKvwGAMIO%2FiMQGOqUBwJZRDuoABSFKk%2FvUsOpQGeeqD7liIwh0o%2FmovviTLEvzjUkKy4%2BOW%2BeYfgzo75y9fgZ%2BD1PQxQEnd58pYJ%2FPGNg%2B5MXZe0ZQJCQ%2BvX1qJ6nbCjrUh6HwvWHb%2Fxqe0ppRKw652bqB5nFl%2BKB3gjtMlC6x1B%2Fm7R%2ByiTfEYAb0TAKyY6zMO7h1zlkqTpnzB3YO1oweg%2Fud%2FHRLOc4c%2BAeK62Ewcd%2Fs&X-Amz-Signature=a377f533f1ae869f179b234bacd95f77fcfacfed9cf4bebbe5b2ea039bb00c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

디스크 유틸리티 들어가서 포맷할 드라이브 설치하고 우측 위에 `지우기` 클릭

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/27d3e185-9087-4655-ab3c-231c42680477/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ42FNZC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE9eT1YDXQlXZs%2B7bgBKcJruq%2BhQTTlN%2ByqO1MQ6ruq3AiEAraoK2rkEY6s2fEQ90%2Fw9dY8ldKR9%2FxM8owUcA9ONnEoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFs8ytFeSnHm6VvTxCrcA946tzig3XjgNzWN9yzUwsQJ%2Fp2navbXecjMf3vNiJvqsGVRLqTL%2BiWh6xPIPmBkqap3hiZykZVkbUdVk8jn%2B8meV5B5r3Nj5B2XBPr%2FoHohK93QB0%2BkXxDaELGzyCaThabkIuhS3jUKDmIeE9i0%2Bp9YRiev9USCWNDWNDRokjrMA7mcdjbYT7wdBo3x%2BbwpmFwbqo0zePW%2FDNS%2BnGswwUWac85su3Mk9YQ46Ugq7LtLUmaQ4U4HiuIoCde85onGTbamAp5UTsTStqlWHvbXwNqdRwvIb63XzC3mkIWtcyenHRKXiKadW9iF62hLpQRid4lOvmt5dOgpvGzSoPONwquz1YfgBI9DWrsddacKFyuErYixkV6bd81KIGcwXTuX5wgcyuBTlbmdDI4QPclS3w9pxF4TF62fgfX63Rsa4naVsrMQhq7iwXKO%2BuwRjltHXRi%2Bfi4Fni0StWdVkdSLWZnsa17%2BZrdjXKrl7nFRBX9EoYjWEZmZ6D8%2Bg6qlbmV%2FsnjmE%2BfjF76yk6FkO0L%2FJQiTx%2BD%2FYlNrY7fePfOeJYqyhuJ6j45b%2Fc9yHR3ib%2BgWJeL7km6JNw6SK5sz2slcPk3Ma7lk465lZVaF0qXps0aGWQ%2F27Jwz6lIKvwGAMIO%2FiMQGOqUBwJZRDuoABSFKk%2FvUsOpQGeeqD7liIwh0o%2FmovviTLEvzjUkKy4%2BOW%2BeYfgzo75y9fgZ%2BD1PQxQEnd58pYJ%2FPGNg%2B5MXZe0ZQJCQ%2BvX1qJ6nbCjrUh6HwvWHb%2Fxqe0ppRKw652bqB5nFl%2BKB3gjtMlC6x1B%2Fm7R%2ByiTfEYAb0TAKyY6zMO7h1zlkqTpnzB3YO1oweg%2Fud%2FHRLOc4c%2BAeK62Ewcd%2Fs&X-Amz-Signature=672d9ec9895edbe0b604e451f81fae1b088cc341a99ee998f001d6aad8776e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`지우기` 에서 포맷 형식을 `ExFAT` 으로 변경 후 지우기를 실행시키면 초기화가 진행되고 4GB 이상 파일이 복사되는것을 확인할 수 있습니다.



![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c69ee83-c209-4a0d-9568-764ebb877f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ42FNZC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE9eT1YDXQlXZs%2B7bgBKcJruq%2BhQTTlN%2ByqO1MQ6ruq3AiEAraoK2rkEY6s2fEQ90%2Fw9dY8ldKR9%2FxM8owUcA9ONnEoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFs8ytFeSnHm6VvTxCrcA946tzig3XjgNzWN9yzUwsQJ%2Fp2navbXecjMf3vNiJvqsGVRLqTL%2BiWh6xPIPmBkqap3hiZykZVkbUdVk8jn%2B8meV5B5r3Nj5B2XBPr%2FoHohK93QB0%2BkXxDaELGzyCaThabkIuhS3jUKDmIeE9i0%2Bp9YRiev9USCWNDWNDRokjrMA7mcdjbYT7wdBo3x%2BbwpmFwbqo0zePW%2FDNS%2BnGswwUWac85su3Mk9YQ46Ugq7LtLUmaQ4U4HiuIoCde85onGTbamAp5UTsTStqlWHvbXwNqdRwvIb63XzC3mkIWtcyenHRKXiKadW9iF62hLpQRid4lOvmt5dOgpvGzSoPONwquz1YfgBI9DWrsddacKFyuErYixkV6bd81KIGcwXTuX5wgcyuBTlbmdDI4QPclS3w9pxF4TF62fgfX63Rsa4naVsrMQhq7iwXKO%2BuwRjltHXRi%2Bfi4Fni0StWdVkdSLWZnsa17%2BZrdjXKrl7nFRBX9EoYjWEZmZ6D8%2Bg6qlbmV%2FsnjmE%2BfjF76yk6FkO0L%2FJQiTx%2BD%2FYlNrY7fePfOeJYqyhuJ6j45b%2Fc9yHR3ib%2BgWJeL7km6JNw6SK5sz2slcPk3Ma7lk465lZVaF0qXps0aGWQ%2F27Jwz6lIKvwGAMIO%2FiMQGOqUBwJZRDuoABSFKk%2FvUsOpQGeeqD7liIwh0o%2FmovviTLEvzjUkKy4%2BOW%2BeYfgzo75y9fgZ%2BD1PQxQEnd58pYJ%2FPGNg%2B5MXZe0ZQJCQ%2BvX1qJ6nbCjrUh6HwvWHb%2Fxqe0ppRKw652bqB5nFl%2BKB3gjtMlC6x1B%2Fm7R%2ByiTfEYAb0TAKyY6zMO7h1zlkqTpnzB3YO1oweg%2Fud%2FHRLOc4c%2BAeK62Ewcd%2Fs&X-Amz-Signature=ce9cbbbda3a2729c0066974062abc3f852d5b92610aba1448596391e58a15f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



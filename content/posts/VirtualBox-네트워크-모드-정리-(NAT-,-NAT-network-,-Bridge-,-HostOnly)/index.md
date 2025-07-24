---
title: "VirtualBox 네트워크 모드 정리 (NAT , NAT network , Bridge , HostOnly)"
date: 2025-02-25T04:20:00.000Z
draft: false
tags: ["Infra", "Docker"]
series: ["Infra & Network"]
description: "VirtualBox의 네트워크 모드인 NAT, NAT 네트워크, 브리지, 호스트 전용에 대한 정리와 관련된 내용입니다."
notion_id: "1a51bab9-e3f8-8034-91f6-f06f3247aaea"
notion_url: "https://www.notion.so/VirtualBox-NAT-NAT-network-Bridge-HostOnly-1a51bab9e3f8803491f6f06f3247aaea"
---

# VirtualBox 네트워크 모드 정리 (NAT , NAT network , Bridge , HostOnly)

> **Summary**
> VirtualBox의 네트워크 모드인 NAT, NAT 네트워크, 브리지, 호스트 전용에 대한 정리와 관련된 내용입니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b41708a6-4791-4f90-9660-53a0296c38e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO6JQFR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDJhW1whcI5Lx5Tld6Y1hJC1cuEHF0VrcFOO9Rr9JdzPAIgB7zEt0WNJHosJicKGsS5Sa3ZJY4HoIPniPr4hTp1iYIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDoORHf%2F0%2BQ3qz3ZSyrcA1hJeGLZ31KVVRZpk71XF4Mos%2FUnR%2BxawQNqug4gVKhGoCKptImwpIWt6%2B18W1o87UfeqCFlvd560N%2BMmB7ay8bQYb%2BKuzrn4a1MkV7fWG0sku0Py4llQeVXUtgpj666RgacuI7SgY1lsKsubtcnqoF3k6Y9cLVza3EglHGYJBdkRRvk1WrhN4KP77uCRhZDK8VNj%2FnfWMiXO%2FF96mleZbb8XjsV4XdGBs6IamkQPWAuOx%2BgWm95Ngw7%2FK%2FUXbyeWmXsc6y%2FTEkAbcAFWczqgOCj2DdvAFe5ZrH%2FE7BunzMhtQlGDW2SV64JKR4CqLs7K4KR9fRPJv6eOvzu2mYxB4g%2FY6YBa21h58BMhaDmfbbf4Mr2mpDvxuPUnT%2BT9aLjh9QbL%2B0jYTXUCzKxqxwgGjfZjMr1lyyZgtH9CD93tNOfejcHKRPD0kbUSWXu012Fwf6QjskchBozQChRxxhantu3YO8ez10jrDYzX8bqvSBaumSXng94TS7A6G%2FhBypwnIcoh6qD0dytSdIx7IqoCLFVJcI5dSG0CChinJm0CgORae%2B1U1FnkCymiKS3W6llOgblLM3iTrY1iBi4%2B46MTr62cjzYveiupQzRY%2BhXOaR0zFT2gqBwGMTMpaZUMOL1h8QGOqUBXstO5EM6evfTYGE3AL2XwcwTEZQukfmGFC04LdKvGVWEynJpQXIlP40OtIskNwXsOPwlfy8MtSMXvVINLb9t6QHWF2vCfZSyruaQ8GP0BY624SsBNHWYrU3iG5Okjxu%2BASAyZsPgxca%2F4xEd%2FPlf6NU6X%2BUsx%2FpeSJX5dSJblot%2Fipri0I%2FVquycFMJtiLIeqGE51pVV9K198%2Fe8ViSo7X7i3dSF&X-Amz-Signature=e8af76ad22452d51424f74d07451ddc9a4d17ee3a243c9c4558621756937583a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


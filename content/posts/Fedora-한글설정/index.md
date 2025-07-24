---
title: "Fedora 한글설정"
date: 2024-05-20T08:29:00.000Z
draft: false
tags: ["fedora"]
series: ["Let's Linux!"]
description: "Fedora 한글 설정에 대한 내용으로, Gnome Tweaks 기능 개선과 관련된 지침이 포함되어 있습니다."
notion_id: "f67e4b6f-2371-4817-9432-59168ec7b953"
notion_url: "https://www.notion.so/Fedora-f67e4b6f23714817943259168ec7b953"
---

# Fedora 한글설정

> **Summary**
> Fedora 한글 설정에 대한 내용으로, Gnome Tweaks 기능 개선과 관련된 지침이 포함되어 있습니다.

---

> 💡 **gnome tweaks (기능개선)**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b138d583-b810-4db4-8103-e43f514f1d02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIRAVST%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBsy36RW4Cl7vCl7VNvgY%2BhWEXTt8XT9jNWCRbGlZs1bAiEAxiK347YgwX7Zkmq0KfekNhSYyPqE4MLFOAWmT4jN8kEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJUdXAU8o6Zkys0%2FICrcAy21BlgOU9YX%2BkIuIj%2B6GOODQAbOh%2Bwis7Azj7YNrFeunjidEArhVsnXXqJUAeq2%2BB9VPOacJtYfh8WZvpWCnKME7Hsy5hfA7BYV5k9cnc%2Fa28lJDt8ALi4SYRCQQcp0p58y0nQTWlXBb5cqS3r0T5Nf9YU5UoKfm4Hq6xZksq%2BOavWmmzbzgrVw5jV4cAa6oOWOhBgfYOhEV4jWXLxIJGfcCRKlyolSplNiq%2F2qdHatyS3kUiZjaAQAPjuh8U7CNp3zxKNj8d8eQwvsnuqJ5ba6oWLE1Cqa%2B2UKqY4cUUGBXlcs3AhV0ReRLjYkaMWe4CcIhyaEG0Wp3nuTdzfLUBQsrFNCh9JSlemerHkMr4lBXUrbWa7Vq%2Fd0%2Fz7gJOgcLQPiw2Zu%2Bh6q38a0eftp0lUtzh2OCDffO8i2OeVgiARejCKEFGTlw0OxPLcLcFIKc0gEz4ImYHo0eM6T1I1%2F898RQBNwALnoai2D0Q562vTqjU0wg%2F020M2Y1QhQy9wb7Vvw5AKIvji%2FH2gjh%2FxGkoxyX5nwQ9EB5BHQMvW8erJKLdaS6Nu7aNLdwGk6pN3LDv2KvWIB%2F7HJiquOTHAvKwE9iWfnH1NJ5yHRekC45ZiqHykwTq4sDg6xxcJwMNX2h8QGOqUBYdeInq8y5HG7nNQ0EPkkUXZhSq3T4oVHsDRJNJN4YsN6F0j2D%2BA20xdbwn1XHWDZV3J4r1mqN60wX2kT20tftXu8Lt84wR2HtuUAOw93ZqevTA7n6fP7vR2l8Ls7VNDvYRJRU6%2BHoGTQpLF%2FOHBk3hK8ePoPbrqTh0uZdjL89O%2Bc2hBOFbq8eKTvsOKhyDPbQUkYOyHCzJW1e56H2BOgvwoegZtr&X-Amz-Signature=bf6cb3b7423eaca61e378772fce5e624c338cedce33c05c1245f308cba48797f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **다음 내용을 따르시오**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3bc6b68a-70a2-4a12-aa13-b48697b6d61a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4RMMQ6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDbihO2Pzw2lWdVeTuWCGkEqyATcKMCm6mGIXS1eJodJAiBBLlGqffHUOxNVthfrHWJiIQqI%2BPnGIbu9MUYcSyAjoyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMwKVSIG8lYIY1q1JeKtwD0Q%2F5zMfU48IoBbsvwXOt6JTqXodpGoysycubhqmQvT9c7u5qfbbecF1Pm0i3979KpGAA5SdyYTbvw6NhkrRhAKSTzPJ3IibrdbI73APK9FiZHCMpgU87lo%2Bv%2FqiBlSVr1ArTY6Zi7rklnlRw37Xrbpc2dE216Iv0SvDDtzSHF12taEtjj101T5UMm49Y4FcpvFnUbuKSx%2F6y4SXiA005fx59B1KRxTLJdVfenBQ6Mr55qGN6Kvq1Zp%2BZhMdqpK01Nopz%2BrwZmYqPXQZK6N8VhbiZrW5fpGvr8k22v9%2BeHjT2%2BJivWDiUBCFVrUKrGhK6kwU8Iv%2FQ3GGzMbXSyjWOzShdU61mR2eoglxDzvxeDVd%2B1qGBW%2F7wbWdRlIRdaIYnV6WDrniRo9iGczd0z13amHFpw8Jb3CcY%2F0PQmrfZasvNddma2OHOYGaSUvR%2F%2B51TPs4fKnGub5QupMPvjg%2F4aHTpxuvMw3yd2TeT7dSgg5S9GqOK0g9mrBv9bKO37xw0fz9hPMN3HCJfoIe9ZxIbclt60kR5Fz%2BrQ6iDqSYoG9hIPyQJFsNYwCofFw1PiUim58m65Ql8nO%2FjqqYhVnBJGF2LA8DCWN6WANMSW4RlLoVifhbIWyXhLH5KUAEwqPaHxAY6pgF8MM7unsI4m4FjcG5t0bWPIPK1%2F%2B7CUKiuKvSHXFZSqqdSiceTqFDICzmchCIEa8uYggC3PKKsH1pjuYQsyqBg85LNB%2F3rMAQprnNdCrhlmMdUr8wdDokEARTHOevoFHVJt3%2B5dDg8I8%2FUMLbEejEyBkNut8zyZP6W11goOAY3qUQgAG8PWy4qYqkmXFPnr9mvQgKhN4u%2FEr7YJS0S9z65yoVwUu18&X-Amz-Signature=25b42b9bf8afc96742f704f20e30a6e0e6c59a25b9993e232a5f344dcc64c3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7b9ee73a-31ca-4380-8a85-953e3f71b964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4RMMQ6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDbihO2Pzw2lWdVeTuWCGkEqyATcKMCm6mGIXS1eJodJAiBBLlGqffHUOxNVthfrHWJiIQqI%2BPnGIbu9MUYcSyAjoyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMwKVSIG8lYIY1q1JeKtwD0Q%2F5zMfU48IoBbsvwXOt6JTqXodpGoysycubhqmQvT9c7u5qfbbecF1Pm0i3979KpGAA5SdyYTbvw6NhkrRhAKSTzPJ3IibrdbI73APK9FiZHCMpgU87lo%2Bv%2FqiBlSVr1ArTY6Zi7rklnlRw37Xrbpc2dE216Iv0SvDDtzSHF12taEtjj101T5UMm49Y4FcpvFnUbuKSx%2F6y4SXiA005fx59B1KRxTLJdVfenBQ6Mr55qGN6Kvq1Zp%2BZhMdqpK01Nopz%2BrwZmYqPXQZK6N8VhbiZrW5fpGvr8k22v9%2BeHjT2%2BJivWDiUBCFVrUKrGhK6kwU8Iv%2FQ3GGzMbXSyjWOzShdU61mR2eoglxDzvxeDVd%2B1qGBW%2F7wbWdRlIRdaIYnV6WDrniRo9iGczd0z13amHFpw8Jb3CcY%2F0PQmrfZasvNddma2OHOYGaSUvR%2F%2B51TPs4fKnGub5QupMPvjg%2F4aHTpxuvMw3yd2TeT7dSgg5S9GqOK0g9mrBv9bKO37xw0fz9hPMN3HCJfoIe9ZxIbclt60kR5Fz%2BrQ6iDqSYoG9hIPyQJFsNYwCofFw1PiUim58m65Ql8nO%2FjqqYhVnBJGF2LA8DCWN6WANMSW4RlLoVifhbIWyXhLH5KUAEwqPaHxAY6pgF8MM7unsI4m4FjcG5t0bWPIPK1%2F%2B7CUKiuKvSHXFZSqqdSiceTqFDICzmchCIEa8uYggC3PKKsH1pjuYQsyqBg85LNB%2F3rMAQprnNdCrhlmMdUr8wdDokEARTHOevoFHVJt3%2B5dDg8I8%2FUMLbEejEyBkNut8zyZP6W11goOAY3qUQgAG8PWy4qYqkmXFPnr9mvQgKhN4u%2FEr7YJS0S9z65yoVwUu18&X-Amz-Signature=cc81e59ad484b6d98ac220523c0e826e2866836393f0745036335de7e7dcf6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


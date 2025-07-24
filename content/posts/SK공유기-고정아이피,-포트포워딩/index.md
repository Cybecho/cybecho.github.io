---
title: "SK공유기 고정아이피, 포트포워딩"
date: 2024-03-25T02:00:00.000Z
draft: false
tags: ["Infra", "RaspberryPI"]
series: ["Let's Homelab!"]
description: "SK 공유기에서 고정 IP를 할당하고 SSH 연결 및 포트 포워딩을 설정하는 방법에 대한 안내. DHCP 서버에 MAC 주소와 고정 IP를 등록한 후, 외부에서 사용할 포트와 내부 SSH 포트 22를 설정하여 SSH 접속을 가능하게 함."
notion_id: "9479f9f1-7c02-4ad0-b536-6b17c5252825"
notion_url: "https://www.notion.so/SK-9479f9f17c024ad0b5366b17c5252825"
---

# SK공유기 고정아이피, 포트포워딩

> **Summary**
> SK 공유기에서 고정 IP를 할당하고 SSH 연결 및 포트 포워딩을 설정하는 방법에 대한 안내. DHCP 서버에 MAC 주소와 고정 IP를 등록한 후, 외부에서 사용할 포트와 내부 SSH 포트 22를 설정하여 SSH 접속을 가능하게 함.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc73fb11-40cf-40e8-9be2-2524ce3aa0f7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIXRWHW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDEdKx4OemBOBrotEazybr29jk8ZU7LF0DSoOYAQ82VbAiEA4N1kkdcjJvQlZOMykJM%2Bqu%2BFfMFQHqOLJyV7HHOBFvwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDM8JQJ972g4F43BlJyrcA3g4nLZzQcAmvS7bK%2BeBRR51U9vYENuFCZ1TuGcWNSXtq9COIGUNgavTgNqqBUCs9yrfs5umv5nvBnZgN5sSbFRWJTfBOqjG0w1WZntqzALswlefvz54MUkxJyC%2Bq210WsrXW5meKn71%2B9LvQrNmmYWHTjMHgEmh48jMTnTVEwP9zJ8TRIGn0R5gbyZrXEoDD9UQutDsRolNAq3tYr3Ho84CduvbA1fFR7R9SdXefQqXJRFR15ZLTHg6PGkDP2nu9DwbSYNjHufihcAwU3sCc0YpN6k1dAFdkOpV7gDUIZRmX7eV6nA7rXa8oT5iS7YfYUhkVM42r2JE8B5SmRYGHq0Cb7H%2BAIvSp28xUzv5jdflhruod0IczEbAJkLnEYasNXlBvwO%2BXr2Bsc8JeI0nD5xnLoeh05H%2BPPqA1nhMQmABWOwPRoHcEFJhAy3us3guB3oGKrrBc4Zvw5Q4OHZRz2b1W8ay6zhNrywv4U01%2B1hfveemUdf02IGajqNnbozBG9ZJ3ewFKik2uYPWGezA4cuFWTky6TdQLlFukjcC9340auHHnXdhcAe5v%2FkirvRX9tn7G8061uTgAWgpDP9PhwvyUf3PDsOO2zZ9k4cIVAQgsKt4vK89IKZDEBV5MKWbiMQGOqUBh%2BUqecSml%2BNgRpCx%2FA1GDpNLoIyGIPhaLwKJshWqZRy7qzCN06EFPk0nKSl15KAgCRwtrFNnc4eFT5o1nTe2p%2FTsmGeJvvgL3RdOIQ2Ypn0p2xBd4GfAEusldYo5%2Fy4iM%2FJ%2FAKC0h51Ifs8AUn397gZUX5aroV5wKFP2SreDpHA5nZJltPzx7MxoI%2FI6TFWDCJY13w1F%2BO2KRap%2FmnXbhng0rIvL&X-Amz-Signature=0d5b119148fb26ebae5958ff362f71cd4b6a92edf741524c3f583a68b306caf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기](https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기)

🔗 [https://velog.io/@dev2820/raspberry-pi-ssh-연결하기](https://velog.io/@dev2820/raspberry-pi-ssh-연결하기)

🔗 [https://poalim.tistory.com/12](https://poalim.tistory.com/12)

## [192.168.45.1](192.168.45.1) 접속 후 네트워크 설정 이동

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/daa2bdb8-eb79-4f9e-a9d1-9ff690bb913e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIXRWHW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDEdKx4OemBOBrotEazybr29jk8ZU7LF0DSoOYAQ82VbAiEA4N1kkdcjJvQlZOMykJM%2Bqu%2BFfMFQHqOLJyV7HHOBFvwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDM8JQJ972g4F43BlJyrcA3g4nLZzQcAmvS7bK%2BeBRR51U9vYENuFCZ1TuGcWNSXtq9COIGUNgavTgNqqBUCs9yrfs5umv5nvBnZgN5sSbFRWJTfBOqjG0w1WZntqzALswlefvz54MUkxJyC%2Bq210WsrXW5meKn71%2B9LvQrNmmYWHTjMHgEmh48jMTnTVEwP9zJ8TRIGn0R5gbyZrXEoDD9UQutDsRolNAq3tYr3Ho84CduvbA1fFR7R9SdXefQqXJRFR15ZLTHg6PGkDP2nu9DwbSYNjHufihcAwU3sCc0YpN6k1dAFdkOpV7gDUIZRmX7eV6nA7rXa8oT5iS7YfYUhkVM42r2JE8B5SmRYGHq0Cb7H%2BAIvSp28xUzv5jdflhruod0IczEbAJkLnEYasNXlBvwO%2BXr2Bsc8JeI0nD5xnLoeh05H%2BPPqA1nhMQmABWOwPRoHcEFJhAy3us3guB3oGKrrBc4Zvw5Q4OHZRz2b1W8ay6zhNrywv4U01%2B1hfveemUdf02IGajqNnbozBG9ZJ3ewFKik2uYPWGezA4cuFWTky6TdQLlFukjcC9340auHHnXdhcAe5v%2FkirvRX9tn7G8061uTgAWgpDP9PhwvyUf3PDsOO2zZ9k4cIVAQgsKt4vK89IKZDEBV5MKWbiMQGOqUBh%2BUqecSml%2BNgRpCx%2FA1GDpNLoIyGIPhaLwKJshWqZRy7qzCN06EFPk0nKSl15KAgCRwtrFNnc4eFT5o1nTe2p%2FTsmGeJvvgL3RdOIQ2Ypn0p2xBd4GfAEusldYo5%2Fy4iM%2FJ%2FAKC0h51Ifs8AUn397gZUX5aroV5wKFP2SreDpHA5nZJltPzx7MxoI%2FI6TFWDCJY13w1F%2BO2KRap%2FmnXbhng0rIvL&X-Amz-Signature=b4d59e233ef336c5dad62c8d31a9ec9571fced753f4a589cac61e4df42307d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## DHCP 서버에 나의 MAC 주소와 사용할 고정 ip주소 등록

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07a37bb2-67a0-488b-a649-8fa8019a51a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIXRWHW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDEdKx4OemBOBrotEazybr29jk8ZU7LF0DSoOYAQ82VbAiEA4N1kkdcjJvQlZOMykJM%2Bqu%2BFfMFQHqOLJyV7HHOBFvwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDM8JQJ972g4F43BlJyrcA3g4nLZzQcAmvS7bK%2BeBRR51U9vYENuFCZ1TuGcWNSXtq9COIGUNgavTgNqqBUCs9yrfs5umv5nvBnZgN5sSbFRWJTfBOqjG0w1WZntqzALswlefvz54MUkxJyC%2Bq210WsrXW5meKn71%2B9LvQrNmmYWHTjMHgEmh48jMTnTVEwP9zJ8TRIGn0R5gbyZrXEoDD9UQutDsRolNAq3tYr3Ho84CduvbA1fFR7R9SdXefQqXJRFR15ZLTHg6PGkDP2nu9DwbSYNjHufihcAwU3sCc0YpN6k1dAFdkOpV7gDUIZRmX7eV6nA7rXa8oT5iS7YfYUhkVM42r2JE8B5SmRYGHq0Cb7H%2BAIvSp28xUzv5jdflhruod0IczEbAJkLnEYasNXlBvwO%2BXr2Bsc8JeI0nD5xnLoeh05H%2BPPqA1nhMQmABWOwPRoHcEFJhAy3us3guB3oGKrrBc4Zvw5Q4OHZRz2b1W8ay6zhNrywv4U01%2B1hfveemUdf02IGajqNnbozBG9ZJ3ewFKik2uYPWGezA4cuFWTky6TdQLlFukjcC9340auHHnXdhcAe5v%2FkirvRX9tn7G8061uTgAWgpDP9PhwvyUf3PDsOO2zZ9k4cIVAQgsKt4vK89IKZDEBV5MKWbiMQGOqUBh%2BUqecSml%2BNgRpCx%2FA1GDpNLoIyGIPhaLwKJshWqZRy7qzCN06EFPk0nKSl15KAgCRwtrFNnc4eFT5o1nTe2p%2FTsmGeJvvgL3RdOIQ2Ypn0p2xBd4GfAEusldYo5%2Fy4iM%2FJ%2FAKC0h51Ifs8AUn397gZUX5aroV5wKFP2SreDpHA5nZJltPzx7MxoI%2FI6TFWDCJY13w1F%2BO2KRap%2FmnXbhng0rIvL&X-Amz-Signature=8c8dc853b5cc3edc7095db473d61d05d11ebcaac29e21731ba35c8d0dd82615d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 포트포워딩 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ad4ef0ee-9503-4486-9d7c-258418125976/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIXRWHW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDEdKx4OemBOBrotEazybr29jk8ZU7LF0DSoOYAQ82VbAiEA4N1kkdcjJvQlZOMykJM%2Bqu%2BFfMFQHqOLJyV7HHOBFvwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDM8JQJ972g4F43BlJyrcA3g4nLZzQcAmvS7bK%2BeBRR51U9vYENuFCZ1TuGcWNSXtq9COIGUNgavTgNqqBUCs9yrfs5umv5nvBnZgN5sSbFRWJTfBOqjG0w1WZntqzALswlefvz54MUkxJyC%2Bq210WsrXW5meKn71%2B9LvQrNmmYWHTjMHgEmh48jMTnTVEwP9zJ8TRIGn0R5gbyZrXEoDD9UQutDsRolNAq3tYr3Ho84CduvbA1fFR7R9SdXefQqXJRFR15ZLTHg6PGkDP2nu9DwbSYNjHufihcAwU3sCc0YpN6k1dAFdkOpV7gDUIZRmX7eV6nA7rXa8oT5iS7YfYUhkVM42r2JE8B5SmRYGHq0Cb7H%2BAIvSp28xUzv5jdflhruod0IczEbAJkLnEYasNXlBvwO%2BXr2Bsc8JeI0nD5xnLoeh05H%2BPPqA1nhMQmABWOwPRoHcEFJhAy3us3guB3oGKrrBc4Zvw5Q4OHZRz2b1W8ay6zhNrywv4U01%2B1hfveemUdf02IGajqNnbozBG9ZJ3ewFKik2uYPWGezA4cuFWTky6TdQLlFukjcC9340auHHnXdhcAe5v%2FkirvRX9tn7G8061uTgAWgpDP9PhwvyUf3PDsOO2zZ9k4cIVAQgsKt4vK89IKZDEBV5MKWbiMQGOqUBh%2BUqecSml%2BNgRpCx%2FA1GDpNLoIyGIPhaLwKJshWqZRy7qzCN06EFPk0nKSl15KAgCRwtrFNnc4eFT5o1nTe2p%2FTsmGeJvvgL3RdOIQ2Ypn0p2xBd4GfAEusldYo5%2Fy4iM%2FJ%2FAKC0h51Ifs8AUn397gZUX5aroV5wKFP2SreDpHA5nZJltPzx7MxoI%2FI6TFWDCJY13w1F%2BO2KRap%2FmnXbhng0rIvL&X-Amz-Signature=69f97e1536c35b986f2990793fdf46accc9b7108f58bd3a2626d2fb3b5341689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이제 아래 사이트에서 내 찐 아이피 확인

🔗 [https://www.whatismyip.com/](https://www.whatismyip.com/)

## 이제 외부 네트워크에서 내 찐 아이피와 포트번호로 ssh 접속

```latex
ssh pi@<찐 아이피> -p <외부포트번호>
```


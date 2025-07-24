---
title: "tex shinobi 일본어배열 키맵핑하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["개발환경"]
description: "TEX Shinobi 키보드의 일본어 배열을 설정하는 방법을 설명하며, Windows에서는 레지스트리를 수정하고, Mac에서는 카라비너를 설정해야 한다고 언급한다."
notion_id: "d7660270-d1f6-4065-bf0e-7837c66271a1"
notion_url: "https://www.notion.so/tex-shinobi-d7660270d1f64065bf0e7837c66271a1"
---

# tex shinobi 일본어배열 키맵핑하기

> **Summary**
> TEX Shinobi 키보드의 일본어 배열을 설정하는 방법을 설명하며, Windows에서는 레지스트리를 수정하고, Mac에서는 카라비너를 설정해야 한다고 언급한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRQFN2P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICtmJ6MPq2yhaCNA7e1%2BjoWof5QOZDoGb5%2B4GNiEhdLHAiEAqvr6N5GHeXSOR0RUJXtnTAUsN3hi6fbRdyXweoM64WAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGdTMFWivq%2BSASvYwSrcA7q9E919L%2FPnaMrX1LywOvA2eoVMFkiqtKXndAEEz5T9a9g8v55nYbmEGSnI0Gxqnp80%2BmaU%2Fyphc2D3iiVRLJ%2FOjRdsK0ZhPqN%2BXaq9V6j6EvVXEIHXXQgXs9lPNPyqjRSYNkOvNeISV5wTPS%2FnATHAd7XcCRnHod1PEMAxk%2FgiLryPO5N7ZMW7DCHuQFJGciyrSqtxHNU3GhpK0X9nH2a2R1%2BNh3ehkIAViYbP1hoDP1%2B9jRs60T7Y4IUTl3icnKcDfkOkHC039gYrkhLqthuvb7KUzvOYaMnjW4%2BHf%2FpRAveld3fFFSpqQzBFdoRUewJKnwY9LqZ3a%2B9gbB2ptSk8qLcz01KNNiRAVLSG3wLt9DXRdpejCuuhU81RwJEuc0mwyltpgkCmldSICrsmE0My3HiUBqyvpqeAME5YOT3GpGvZIKNdbPobOGFpcLAKM3%2BEKLJGBHVr9PZAQmWWvkE5hde2wtqw2v0PNckRiEziYucD2z%2BzV58jHzWidJXJOqdO6nGSoVEQtrgk25n6kbAYo8ZYzWPg%2FaD9jQLpv1Dey0GQe7dkmOioAMh8eS4fiAYT8AESPrUp%2FL4dBPN%2Fvvc%2Fu1PUKq1SOUxRvwpS4GFpqMar1syspaFdNVDYMIP2h8QGOqUBr2A9Hma02qyyLSrwlKufmC76XuP5v%2F5sRT3y48EcaaEZ%2F4HGdhTfeNgCkgiYmMyV%2FGhAQUtkzDKK98rWt%2FlgPFVhD2qYChZtNR4SeODqvnkGoCEszlVvTnn%2BgWaQ6JUHME04udC2mtGzXXiLMKunahhS2WyA6qLqLTwxEzqTM7XPyAllgisNtw676X1eLykJ9Mavy2X%2F8Qki1cnjGzuQPKlFs2IW&X-Amz-Signature=a3fab5cb6b85286e500773b93bcb5b95d23d14f9a2fa8cd76422e6e552c57027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://program.tex.com.tw/shinobi/#layout](https://program.tex.com.tw/shinobi/#layout)

🔗 [https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim](https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim)


### 근데 위에 따라해도 의미없음…

웹 ui는 일본어 특유의 배열을 인식하지 못한다.

WINDOWS는 레지스트리만져야하고

MAC은 카라비너 만져야한다


### MAC - 카라비너 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75927f47-6071-4ccb-947b-e05b83ec407d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRQFN2P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICtmJ6MPq2yhaCNA7e1%2BjoWof5QOZDoGb5%2B4GNiEhdLHAiEAqvr6N5GHeXSOR0RUJXtnTAUsN3hi6fbRdyXweoM64WAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGdTMFWivq%2BSASvYwSrcA7q9E919L%2FPnaMrX1LywOvA2eoVMFkiqtKXndAEEz5T9a9g8v55nYbmEGSnI0Gxqnp80%2BmaU%2Fyphc2D3iiVRLJ%2FOjRdsK0ZhPqN%2BXaq9V6j6EvVXEIHXXQgXs9lPNPyqjRSYNkOvNeISV5wTPS%2FnATHAd7XcCRnHod1PEMAxk%2FgiLryPO5N7ZMW7DCHuQFJGciyrSqtxHNU3GhpK0X9nH2a2R1%2BNh3ehkIAViYbP1hoDP1%2B9jRs60T7Y4IUTl3icnKcDfkOkHC039gYrkhLqthuvb7KUzvOYaMnjW4%2BHf%2FpRAveld3fFFSpqQzBFdoRUewJKnwY9LqZ3a%2B9gbB2ptSk8qLcz01KNNiRAVLSG3wLt9DXRdpejCuuhU81RwJEuc0mwyltpgkCmldSICrsmE0My3HiUBqyvpqeAME5YOT3GpGvZIKNdbPobOGFpcLAKM3%2BEKLJGBHVr9PZAQmWWvkE5hde2wtqw2v0PNckRiEziYucD2z%2BzV58jHzWidJXJOqdO6nGSoVEQtrgk25n6kbAYo8ZYzWPg%2FaD9jQLpv1Dey0GQe7dkmOioAMh8eS4fiAYT8AESPrUp%2FL4dBPN%2Fvvc%2Fu1PUKq1SOUxRvwpS4GFpqMar1syspaFdNVDYMIP2h8QGOqUBr2A9Hma02qyyLSrwlKufmC76XuP5v%2F5sRT3y48EcaaEZ%2F4HGdhTfeNgCkgiYmMyV%2FGhAQUtkzDKK98rWt%2FlgPFVhD2qYChZtNR4SeODqvnkGoCEszlVvTnn%2BgWaQ6JUHME04udC2mtGzXXiLMKunahhS2WyA6qLqLTwxEzqTM7XPyAllgisNtw676X1eLykJ9Mavy2X%2F8Qki1cnjGzuQPKlFs2IW&X-Amz-Signature=28fd0a078607623f4a76137818ad651d4e3bdce536fcb59f8d39b3606e870502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 윈도우는 레지스트리 만져야합니다…


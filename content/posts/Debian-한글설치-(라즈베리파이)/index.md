---
title: "Debian - 한글설치 (라즈베리파이)"
date: 2024-03-25T01:48:00.000Z
draft: false
tags: ["Debian", "ubuntu", "RaspberryPI"]
series: ["Let's Linux!"]
description: "라즈베리파이에 한글을 설치하기 위해, 먼저 시스템을 업데이트하고 업그레이드한 후, ibus와 ibus-hangul을 설치하고, 나눔글꼴과 언폰트 코어를 설치하는 방법을 설명합니다."
notion_id: "5dd11582-b9d1-429e-b12c-c103d7f0b7e4"
notion_url: "https://www.notion.so/Debian-5dd11582b9d1429eb12cc103d7f0b7e4"
---

# Debian - 한글설치 (라즈베리파이)

> **Summary**
> 라즈베리파이에 한글을 설치하기 위해, 먼저 시스템을 업데이트하고 업그레이드한 후, ibus와 ibus-hangul을 설치하고, 나눔글꼴과 언폰트 코어를 설치하는 방법을 설명합니다.

---

🔗 [https://humber.tistory.com/entry/라즈베리파이Raspberry-Pi-한글-설치하기](https://humber.tistory.com/entry/라즈베리파이Raspberry-Pi-한글-설치하기)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9337fb31-f000-470f-8a58-5b3a1e25beb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO7BIWXS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDvkpA3l1v4rVeczKj%2FakKvuq3qhsESZHDT4O9pEeJs3QIhAJlqJJMz6%2FcS0WoUq2Mp1rfsblV%2FU4aXfUvCYG0smvRdKv8DCCoQABoMNjM3NDIzMTgzODA1IgyZ2Lo6XHTU%2B0z95aoq3AM%2FIsxpaIZETAZKzIJejRGBCkDMp0gKP936LJADur4pB73zFYrLx%2FOomK%2BBQByX2VSfAjScexdgDdMMrC2g2h%2F7nGPXxoV68gTTKzRyOah4WxzYYFw%2BUSdH2zQMcC%2Bx2rkS7w6nkEL2VXNftzcH1XaWw0fUcTeNjYrLleDv5%2Fbv5IpyY6xxedQZ%2FOj%2BVsuZX3CHyeNi%2Fq%2FbnuPnLZy9E8Zx4nwLA26lWOK1PAgUnR%2BngAjFDeuxwNO%2FOOYpNXjoJQshIXuWdIVJAg3o2oot7Y2keLVCEpaNxB6Yi%2BEfTGTPJ07uopWH9PTvXkyqunk2OAbN%2F9FfSrwKLaeT3qbp%2BhdRsa%2FMPbcQDjOcWS2dWmYfZoBMTmm1qUp5jDmWbFGarymKaBWj78RYn7%2FJav455Vg94vk6Yx6yFsfo%2FDMjYxfMUmB6Vel8nXrY9djcgayQZLcvj%2FCZ12sOIxct45RS4qYIGJU0FXVt1eP7RGG9YUBlt9s9yGTHqJjWyruup%2BjO8wMIIKHosqda5VljkV1gPQbxsmCr8S6GQsRS4%2Bp9GsCEZGGJritbmTEwxaM7J0zfB6E90lWw33U%2BuxLPHx63djMSikBY%2BAyU2gumXfOIaoQjcIuOoPbbMatuknCwvjC39YfEBjqkAW814Qo4Sp%2F5IJwj25%2BZkEv%2B3HH%2FOptZ6HT%2FZ7y%2BIGHyKYeozLzs7C6gsglpl6OrM83YbPzu5m14lRKAznjyE%2FAYGLhx1Ruksj3hBTKzAhdYsn6hNAr%2FtDKv%2FDgdJcZ%2FVZgPTNGiXvkaV18guIMGPME1rpnsraj6kOb9RWOPfZK1r1oTNXFfD78fJyLvN0432f4%2BlhGujwVkuoS0pFNsDDIarOMV&X-Amz-Signature=3bff0879f29977eb2ce9774f2165772a4b7961e4b4e18b48d5c29a489caf2b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
sudo apt update

sudo apt upgrade

sudo apt install ibus ibus-hangul
```

```latex
sudo apt install fonts-nanum fonts-unfonts-core
```


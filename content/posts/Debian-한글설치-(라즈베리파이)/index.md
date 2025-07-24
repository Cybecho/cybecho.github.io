---
title: "Debian - 한글설치 (라즈베리파이)"
date: 2024-03-25T01:48:00.000Z
draft: false
tags: ["Debian", "ubuntu", "RaspberryPI"]
series: ["Let's Linux!"]
description: "라즈베리파이에 한글을 설치하기 위해서는 "
notion_id: "5dd11582-b9d1-429e-b12c-c103d7f0b7e4"
notion_url: "https://www.notion.so/Debian-5dd11582b9d1429eb12cc103d7f0b7e4"
---

# Debian - 한글설치 (라즈베리파이)

> **Summary**
> 라즈베리파이에 한글을 설치하기 위해서는 

---

🔗 [https://humber.tistory.com/entry/라즈베리파이Raspberry-Pi-한글-설치하기](https://humber.tistory.com/entry/라즈베리파이Raspberry-Pi-한글-설치하기)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9337fb31-f000-470f-8a58-5b3a1e25beb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQN2CBQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBpxS99HL5qXjuiRleeumC0f47BA6lh434%2B%2BFJ%2FyMT%2FiAiEAjvJYg2cL4Q1r%2FEuFrF00JRs67YqFhdmUiTnARJIn0EUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOumE1hVKid1AVqD6SrcA%2F4TWUlxpQk3hpgao7Ob%2BpbuoWW9XL0Q04Zwu%2BkdoqMKfmUB38TUfxKRAsiekjgyaLGd4%2Fp5MyVstxOuRABHTplCJMWlx3np2LnPeJEZ3bvn0WQFEKA%2BEK8H3AQq8M%2BliZ7wDt%2FK3VT%2BtWLqsfbTpQisG1i6YMsZ6%2BNqTm86VX0S0X0MvrYgmp7yY7k4WohbO0vS6GOSKgMFd1RzXF1Dr5tNj3RDI7iHG7fwaLdoqsqYu%2F8panZ2ILxNXWAVuu22ELZeT9JgoMAyimkoMTNmBu4JrNCTEfAz%2BEUen6h2XxnzedOuJvFApDjXQdg6T%2BWF3MHLoHnhZbj2%2B5CTg%2Fc%2FG1GMFKzKmqngOjazb%2F4hAq4GD080qBaPEIAcbTgBvRfgdSLDhyfI%2BdRFRAh4vQJlRXPuqTqDfBLGEQBJVDC3gvJ%2BZ6OBylQZmBFAxAOLWTKPuINmkYBcS2aaa%2FV1dlZcpHI%2B%2BC535ig%2BF%2Ffp1nIEIhZdlGDJNHl92pR72sgguwWxdNp2toy4xEXQABhhwJxmEfydHy1DKK0kTbqyxiFpZzu3LVxZLng30n6Y0TYe75lc6fMyFJsuvEj%2F5rQ26%2FkYjcSsZlHtaFTXFM1e3CuRrH3ekt2LebNKRyCWF1PuMJebiMQGOqUBRu1E%2BOVr5kklU4ciaCzDIIDFfFRnhfmmuuc1ytAFWg3XtsjM8uCQaDxRhrfLoK3no00r4ozWNqJWveNB5oXpjp5rxMA5t3G6HbnpwFrOthZMvs%2BbITvJSopxjxAIJAznAGOZzavA%2Fqs73Y8H5imsBREPSRt5c77f8AVKua%2BhVPfofHQqN7frLndupZM69oDhO6PcVBLo9cTRgNuimD0J2gtK8j2D&X-Amz-Signature=c6fbe09389f94bfe9683e1fbbd3664b618b02a628914a750eb178e9d7dd94fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
sudo apt update

sudo apt upgrade

sudo apt install ibus ibus-hangul
```

```latex
sudo apt install fonts-nanum fonts-unfonts-core
```


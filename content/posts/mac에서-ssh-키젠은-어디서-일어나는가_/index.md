---
title: "mac에서 ssh 키젠은 어디서 일어나는가?"
date: 2025-03-03T02:02:00.000Z
draft: false
tags: ["MAC"]
series: ["Infra & Network"]
description: "맥 보안칩에서 ssh 키젠이 작동하며, 이 칩 안에 private 키가 저장되어 있어 확인할 수 없다. 인증은 지문을 통해 이루어지며, 지문 인증 후에만 public 키가 전송되고 ssh 인증이 완료된다."
notion_id: "1ab1bab9-e3f8-80c9-9e87-d5c097f63c36"
notion_url: "https://www.notion.so/mac-ssh-1ab1bab9e3f880c99e87d5c097f63c36"
---

# mac에서 ssh 키젠은 어디서 일어나는가?

> **Summary**
> 맥 보안칩에서 ssh 키젠이 작동하며, 이 칩 안에 private 키가 저장되어 있어 확인할 수 없다. 인증은 지문을 통해 이루어지며, 지문 인증 후에만 public 키가 전송되고 ssh 인증이 완료된다.

---

🔗 [https://github.com/maxgoedjen/secretive](https://github.com/maxgoedjen/secretive)

- 맥 보안칩 쓰는거
- ssh 키젠 자체가 이 칩 안에서 작동함
- 이 칩 안에 private키가 있어서 우리도 확인을 못함
- 유일하게 뚫을 수 있는 방법은 내 지문뿐(지문을 인증함으로서 public키를 보내고, public키가 맞는지만 알려줌 그제서야 ssh인증이됨)

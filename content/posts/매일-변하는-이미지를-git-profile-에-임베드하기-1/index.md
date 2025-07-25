---
title: "매일 변하는 이미지를 git profile 에 임베드하기 1"
date: 2023-03-25T00:00:00.000Z
draft: false
tags: ["Git", "ubuntu", "Python", "GCP"]
series: ["진심글쓰기", "Git", "Tips"]
description: "서버에서 랜덤 이미지를 불러와 git 프로필에 자동으로 커밋하는 방법을 설명합니다. 여러 이미지 소스와 API를 활용하여 이미지를 가져오고, Node.js와 Puppeteer를 사용하여 웹 페이지에서 이미지를 선택하는 스크립트를 작성합니다. 또한, crontab을 통해 주기적으로 커밋을 자동화하는 방법과 while 문을 활용한 스케줄링 방법도 다룹니다."
notion_id: "c2f950c7-41a8-429b-9d7b-dfc4cc470d67"
notion_url: "https://www.notion.so/git-profile-1-c2f950c741a8429b9d7bdfc4cc470d67"
---

# 매일 변하는 이미지를 git profile 에 임베드하기 1

> **Summary**
> 서버에서 랜덤 이미지를 불러와 git 프로필에 자동으로 커밋하는 방법을 설명합니다. 여러 이미지 소스와 API를 활용하여 이미지를 가져오고, Node.js와 Puppeteer를 사용하여 웹 페이지에서 이미지를 선택하는 스크립트를 작성합니다. 또한, crontab을 통해 주기적으로 커밋을 자동화하는 방법과 while 문을 활용한 스케줄링 방법도 다룹니다.

---

![Image](image_7694b81670ff.png)

[http://www.lomando.com/pimg/bettyeye.gif](http://www.lomando.com/pimg/bettyeye.gif)


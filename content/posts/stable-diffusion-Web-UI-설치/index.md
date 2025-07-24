---
title: "stable-diffusion Web UI 설치"
date: 2023-03-28T00:00:00.000Z
draft: false
tags: ["AI", "ubuntu", "Python"]
series: ["AI"]
description: "Stable Diffusion 웹 UI 설치 방법에 대한 가이드를 제공하며, GitHub에서 레포지토리를 다운로드하고 Python 3.10으로 다운그레이드하는 방법, VRAM 최적화, 체크포인트 및 Lora 사용법, 익스텐션 추천 등을 포함합니다. 로컬 서버 웹 호스팅 설정에 대한 정보도 포함되어 있습니다."
notion_id: "a3fc2a94-6365-4500-9281-c7828c7b6f23"
notion_url: "https://www.notion.so/stable-diffusion-Web-UI-a3fc2a94636545009281c7828c7b6f23"
---

# stable-diffusion Web UI 설치

> **Summary**
> Stable Diffusion 웹 UI 설치 방법에 대한 가이드를 제공하며, GitHub에서 레포지토리를 다운로드하고 Python 3.10으로 다운그레이드하는 방법, VRAM 최적화, 체크포인트 및 Lora 사용법, 익스텐션 추천 등을 포함합니다. 로컬 서버 웹 호스팅 설정에 대한 정보도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a2d2b47e-58c3-4df8-9d64-75776b6ef87d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWCABPVI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDgVmL9vwPieMWcs0Q2IWaCUPuYBz34FPXRVL%2BuC3VAgQIgHkoDnkfbhHtyAT%2FM04ROEic4%2B%2BCcc0pXbHXkrktm%2Bi8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDK6wb8pYIbptnZ%2BteircA3CBsYpFdfBZvMbGcdwPa%2B0n8oG6ontaAmaLp1hdFT68Hg0MR6mzFthwVLTfp2Z1kyyHi1AcgrS9JDBC0BqKAV49S8pCZjfAGvCsgyrHfL3x0mKy8Bq73Axa49Og9cqQxIv17LZyGP7gIX2odpw8cWsXbpgKhCE9i3BCrlejBNBd1HJgWebND%2B2a29xzEM3kZT7q95OkAI4hRZ2sjUU73PmEJfu3BLyaeqXHEju1ucbM9rtZX51UP8WWrPcPGJZHbvjSQjf5DgJTeKhdZCWHw%2FB%2B0h%2FedkylbaujPs1oFSZmRQDldJE68QxsWr2ku8bYdyZps4DwLpZ1i7yY%2BytFcS5n5vkvtFZlpKVWZha8WCtVGz%2Bcu9%2FoHhht7kbiZxin51mMMwSMvxB5DSM20jT3RcVZMcw0kbCQbj4qnI4hmT%2BFyw3uanZ1tledN3pjhlpnxaR8M5bX4%2FCoUMOuHYCcSIAJF0HbA1uDhjF%2BIiUXtAVLE9y7B0FzJzNDvcIuB7%2BWgbw22zNUQqxAmIDV52CS7YOQhyAupw7qo9eNe7r53BTMTXIZurMOvjCKPdQR5SwHTRjEJxsdKZt1loK9DlyIv2OJO1nryqMub5hKNDcpVX6lzqNqlxpco4OnhOoYMIjQh8QGOqUBqcpu0o26GQyeMuo033mY6pr0maqNMIyJuilMpHFD2Znfk6M502EEUWL4UAiA0SnSseRiCBPcVL6em1P7tuvDXzcMximXkxwAQE6Jt03bBKMzjUBD7H0I9ZLlAmB8C1APtHRsla0wtHRc24cdikjeXMo0lEo8Lpp2c9bffDeXZhMdLXU50OT7nfkG5L%2BEPeUOvYQ7MHyOyfuAJ9TJ6gaKLro9AmSG&X-Amz-Signature=306b26bd77284fbd2d8f39e6c76459f07055330a68dc33b877b0679cc727fdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

아래 레파토지로 다운로드받는것을 추천드립니다.

🔗 [https://github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

```shell
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

# 이 웹사이트만 따라해주시면 됩니다

🔗 [https://rentry.org/voldy](https://rentry.org/voldy)

## Chechkpoint / lora / vae / embedding 정리

🔗 [https://ai-designer-allan.tistory.com/entry/스테이블-디퓨전-Checkpoint-lora-vae-embedding-완벽정리](https://ai-designer-allan.tistory.com/entry/스테이블-디퓨전-Checkpoint-lora-vae-embedding-완벽정리)

### lora 개요

🔗 [https://github.com/civitai/civitai/wiki/How-to-use-models#lora](https://github.com/civitai/civitai/wiki/How-to-use-models#lora)


# 로컬서버 웹 호스팅

ssh 키를 윈도우 설정에서 설치하고 로컬호스트에 접속하고자하는 외부 컴퓨터에서 (같은 망에 있어야함) ssh키 입력하고 뭐 하니까 되든데..


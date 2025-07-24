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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9337fb31-f000-470f-8a58-5b3a1e25beb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3Z2L6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIF1KMdVde4mCKUFqER4QGUJckeARDvkln0B5B12jt8UrAiEAxyFWA2ltAv2%2FEAA6WsAmQRWOnCTKa5LiUv13IXWwiTcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDcUE%2Bzyho2uyJTIUircAwkMvQ%2FLm6XQPoMBZiWIYJAEyL0y98JX4HEop%2Fh5KKaeZwwJtrD0y8woWlSC1bpCkZOh%2BcQDOkuKt0GXIK0tTWfewIDP7r8ZGrDwHZUUWkJGC5HqyCOBkHidUtyEkViSL03vA5G6NMb3iIoBs4qCdvAP9xJsdiBeDKFLX%2BJiZoYWvCD6fLheRset0KIZ%2FXyc%2FBOqncJJqN1XuRPIdI6Mf80jLNB5181yPzcNJ8sRjDAVMUW25SS4W%2B7lxE8vpwiVxcBLffyIEwrmjZjFcWdpuT9hegGIRJlOIRGdY5dWG51ebfwP3HOLlwZbZYfKNlfTWMzwwJO8MyXO%2F07aSHNnnI8yH39IOoH%2BQ7Cqm2k9LzvIaqOCBLeQruu9ExuoA5r19rL2nu%2BZAtnalSI725ZwdeNoyzrvv2MnSix46d1esFAsy6lj5204P9qAUd4A81Q8olNLaqP1nA6ZgKFYJnzFlCflfMv8guYW%2FmQZaFyqkJA0nEZ2aTlde7zdcJnev1mmZxmx2E9%2BfGmfrkCtsA4Er3UJvTRjNNBzNQSuAgk5Iww8R%2FKt5LfNLF%2BfM3XsvmGYQy3vupnDxds%2FRyL6uPGITNiXI9zsFX0uBZLqRJbYYxwrC3wkLjQjpbR%2BYvmpMJjQh8QGOqUB%2Fow0RK%2F5N%2FLFxmURDWpb5qYuUFsGZqFrmTlnnsgjT2Dl17bYOBrQ23cEXTs%2FZgpDzYWhKOV5Hf9o0EP0a6e%2FcXcivtFrWijakR0wImhnsgRdyL0l59LseI%2ByajP4Gs7CZsX%2FR4of%2FWe9WMu2CWxbQ3VGSHSwiOx4%2FfQEGOcbF8JogRY%2BtYuj9K6d8Kg2c22zZtD8uJEo0BL7%2F0gEuH%2BDQl3LcoPu&X-Amz-Signature=5a35ffac963a7bc380cd96470738533e188ad44e3eac6d36af1a653000d85afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
sudo apt update

sudo apt upgrade

sudo apt install ibus ibus-hangul
```

```latex
sudo apt install fonts-nanum fonts-unfonts-core
```


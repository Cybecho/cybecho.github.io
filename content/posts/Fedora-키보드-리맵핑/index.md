---
title: "Fedora 키보드 리맵핑"
date: 2024-05-31T08:08:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Fedora에서 키보드를 리맵핑하는 방법에 대한 정보가 포함되어 있으며, keyd와 AutoKey 프로그램의 설치 및 설정 방법이 설명되어 있습니다. keyd를 사용하여 Caps Lock과 방향키를 매핑할 수 있으며, 설치 명령어와 config 파일 설정 방법도 제공됩니다."
notion_id: "68b0551f-e780-4f81-be65-d987ca9ae47e"
notion_url: "https://www.notion.so/Fedora-68b0551fe7804f81be65d987ca9ae47e"
---

# Fedora 키보드 리맵핑

> **Summary**
> Fedora에서 키보드를 리맵핑하는 방법에 대한 정보가 포함되어 있으며, keyd와 AutoKey 프로그램의 설치 및 설정 방법이 설명되어 있습니다. keyd를 사용하여 Caps Lock과 방향키를 매핑할 수 있으며, 설치 명령어와 config 파일 설정 방법도 제공됩니다.

---

[https://elsainmac.tistory.com/917](https://elsainmac.tistory.com/917)

> 💡 **[https://docs.google.com/spreadsheets/d/1kmdPyf5upgxXda2hBSq9RJ8Smsoc6S5XHJJItYazCLk/edit?pli=1#gid=0](https://docs.google.com/spreadsheets/d/1kmdPyf5upgxXda2hBSq9RJ8Smsoc6S5XHJJItYazCLk/edit?pli=1#gid=0)**

> 💡 **키맵 프로그램..?**

🔗 [https://www.karimarttila.fi/keyboard/2023/11/16/linux-keyboard-configuration-with-keyd.html](https://www.karimarttila.fi/keyboard/2023/11/16/linux-keyboard-configuration-with-keyd.html)

# Keyd 🔥🔥🔥

> **keyd 로 capslock + i j k l 을 키보드 화살표로 맵핑이 가능함**

🔗 [https://github.com/rvaiya/keyd](https://github.com/rvaiya/keyd)

[https://www.youtube.com/watch?v=iev-s_MegTA](https://www.youtube.com/watch?v=iev-s_MegTA)

### 설치 - dnf

```latex
sudo dnf copr enable alternateved/keyd
```

```latex
sudo dnf install keyd
```

### 설치 - 수동설치

```latex
git clone https://github.com/rvaiya/keyd
cd keyd
make && sudo make install
```

### 실행

```latex
sudo systemctl enable keyd && sudo systemctl start keyd
```

### config 파일 생성 & 수정

```latex
 sudo vim /etc/keyd/default.conf
```

```latex
[ids]
*
[main]
] = macro(G-] space)
= = macro(= =)
capslock = layer(capslock)
[capslock:G]
j = left
k = down
l = right
i = up
u = home
o = end
[shift]
] = macro(S-] space)
= = macro(S-= space)
```

### 설정 적용

```latex
sudo keyd reload
```

# AutoKey 🔥🔥🔥

[https://www.youtube.com/watch?v=H9Epo__VFSQ](https://www.youtube.com/watch?v=H9Epo__VFSQ)

```javascript
sudo dnf install autokey
```

```javascript
sudo dnf install autokey-gtk
```

```javascript
sudo dnf install autokey-qt
```



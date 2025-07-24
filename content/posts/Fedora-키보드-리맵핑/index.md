---
title: "Fedora 키보드 리맵핑"
date: 2024-05-31T08:08:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "Fedora에서 키보드 리맵핑을 위한 keyd와 AutoKey 설치 및 설정 방법을 설명하며, keyd를 사용하여 Capslock과 방향키를 매핑하는 방법과 관련된 링크를 제공합니다. 설치 명령어와 config 파일 설정 방법도 포함되어 있습니다."
notion_id: "68b0551f-e780-4f81-be65-d987ca9ae47e"
notion_url: "https://www.notion.so/Fedora-68b0551fe7804f81be65d987ca9ae47e"
---

# Fedora 키보드 리맵핑

> **Summary**
> Fedora에서 키보드 리맵핑을 위한 keyd와 AutoKey 설치 및 설정 방법을 설명하며, keyd를 사용하여 Capslock과 방향키를 매핑하는 방법과 관련된 링크를 제공합니다. 설치 명령어와 config 파일 설정 방법도 포함되어 있습니다.

---

[https://elsainmac.tistory.com/917](https://elsainmac.tistory.com/917)

> 💡 **[https://docs.google.com/spreadsheets/d/1kmdPyf5upgxXda2hBSq9RJ8Smsoc6S5XHJJItYazCLk/edit?pli=1#gid=0](https://docs.google.com/spreadsheets/d/1kmdPyf5upgxXda2hBSq9RJ8Smsoc6S5XHJJItYazCLk/edit?pli=1#gid=0)**
> ---
>
> [https://medium.com/@canadaduane/key-remapping-in-linux-2021-edition-47320999d2aa#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3NGRiYmE4ZmFlZTY5YWNhZTFiYzFiZTE5MDQ1MzY3OGY0NzI4MDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMyMDQ2ODcwNjcyNjQyNjk5MjQiLCJlbWFpbCI6InRocXVkZG5yMTIzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MTc1OTg3MzAsIm5hbWUiOiLrgbzrgbzrj4TsgqwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS2RkUmRFeUZEVHJUN1V2UHd0UENBbGtFNVVYSE1jcnJMcEpnei1Ka0t5akYtWTFvNXhWZz1zOTYtYyIsImdpdmVuX25hbWUiOiLrj4TsgqwiLCJmYW1pbHlfbmFtZSI6IuuBvOuBvCIsImlhdCI6MTcxNzU5OTAzMCwiZXhwIjoxNzE3NjAyNjMwLCJqdGkiOiI5NjMzZDYzODUzMDA4ZThkMTI0OGQwMzU1MmExN2VkMmQzNjg1YzM4In0.C_obqy3shmgTe692Ie1g83l49pqf04cqFm8cO5Et1a-LKdTAn9vJ8ScPaN5bL7q0LkN82DAsf09YRZpT4gSHfkWMIM3T4fMednaF0VOJ6CvUJ471lFtGrC_x_G8O8_hzTmIys73-2g4Lnif6_9HM8d1h7PMcYmiPNchHhZkqKZYIfkUotcFPPbPt7NOql-ChmWFvWFYPtPyz5PdXIiin83btKgbg9V5oQguOZFRpBWJiDjDKrNuInhy5ne1oSH_u22ZF77ALdvM_ZBH7q_AMrtbE84o429wSz1A9Eys1K7CcPBGOARQqyIgN8MoGvU1ysj9LeVR1fGuWeD__j9gT9Q](https://medium.com/@canadaduane/key-remapping-in-linux-2021-edition-47320999d2aa#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3NGRiYmE4ZmFlZTY5YWNhZTFiYzFiZTE5MDQ1MzY3OGY0NzI4MDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMyMDQ2ODcwNjcyNjQyNjk5MjQiLCJlbWFpbCI6InRocXVkZG5yMTIzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MTc1OTg3MzAsIm5hbWUiOiLrgbzrgbzrj4TsgqwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS2RkUmRFeUZEVHJUN1V2UHd0UENBbGtFNVVYSE1jcnJMcEpnei1Ka0t5akYtWTFvNXhWZz1zOTYtYyIsImdpdmVuX25hbWUiOiLrj4TsgqwiLCJmYW1pbHlfbmFtZSI6IuuBvOuBvCIsImlhdCI6MTcxNzU5OTAzMCwiZXhwIjoxNzE3NjAyNjMwLCJqdGkiOiI5NjMzZDYzODUzMDA4ZThkMTI0OGQwMzU1MmExN2VkMmQzNjg1YzM4In0.C_obqy3shmgTe692Ie1g83l49pqf04cqFm8cO5Et1a-LKdTAn9vJ8ScPaN5bL7q0LkN82DAsf09YRZpT4gSHfkWMIM3T4fMednaF0VOJ6CvUJ471lFtGrC_x_G8O8_hzTmIys73-2g4Lnif6_9HM8d1h7PMcYmiPNchHhZkqKZYIfkUotcFPPbPt7NOql-ChmWFvWFYPtPyz5PdXIiin83btKgbg9V5oQguOZFRpBWJiDjDKrNuInhy5ne1oSH_u22ZF77ALdvM_ZBH7q_AMrtbE84o429wSz1A9Eys1K7CcPBGOARQqyIgN8MoGvU1ysj9LeVR1fGuWeD__j9gT9Q) 키맵핑 프로그램들 모음
>
> [http://xahlee.info/linux/linux_keyboard_tools.html](http://xahlee.info/linux/linux_keyboard_tools.html)
>
>

> 💡 **키맵 프로그램..?**
> 🔗 [https://github.com/rvaiya/keyd](https://github.com/rvaiya/keyd)
>
>

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



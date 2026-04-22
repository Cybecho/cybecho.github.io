---
title: "install Korean on Arch"
date: 2023-12-02T00:00:00.000Z
draft: false
tags: ["Arch"]
series: ["Let's Linux!"]
description: "Arch Linux에서 한글 입력기를 설치하기 위해 필요한 폰트를 설치하고, local.conf 파일을 생성하여 폰트 설정을 구성하는 방법을 설명합니다. 필요한 명령어와 설정 파일의 내용도 포함되어 있습니다."
notion_id: "afdf1194-804d-40aa-8c73-3809f2b8c22f"
notion_url: "https://www.notion.so/install-Korean-on-Arch-afdf1194804d40aa8c733809f2b8c22f"
---

# install Korean on Arch

> **Summary**
> Arch Linux에서 한글 입력기를 설치하기 위해 필요한 폰트를 설치하고, local.conf 파일을 생성하여 폰트 설정을 구성하는 방법을 설명합니다. 필요한 명령어와 설정 파일의 내용도 포함되어 있습니다.

---

🔗 [https://data-science.tistory.com/283](https://data-science.tistory.com/283)

🔗 [https://dgkim5360.tistory.com/entry/basic-setup-of-korean-environment-for-arch-linux](https://dgkim5360.tistory.com/entry/basic-setup-of-korean-environment-for-arch-linux)

### When you installing fonts, must required sudo

```shell
$ pacman -S terminus-font noto-fonts-cjk ttf-dejavu
```


### And you go to the `cd ../../etc/fonts/ `

```javascript
touch local.conf
```

```javascript
code ../../etc/fonts/local.conf
```

### write this code via vscode

```plain text
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<alias>
        <family>monospace</family>        
        <prefer>
                <family>xos4 Terminus</family>                
                <family>Noto Sans CJK KR</family>                
                <family>DejaVu Sans Mono</family>
        </prefer>
</alias>
</fontconfig>
```


---
title: "MAC 터미널 꾸미기"
date: 2023-05-28T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "맥 터미널을 꾸미기 위해 Oh My Zsh를 설치하고, 원하는 테마로 변경하며, 폰트를 설치하고 적용하는 방법을 설명합니다. 또한 VSC 터미널에서도 폰트를 변경하고, 명령어 하이라이트를 적용하는 방법을 다룹니다."
notion_id: "63e097ad-a265-44fa-af8a-4fa0267323b8"
notion_url: "https://www.notion.so/MAC-63e097ada26544faaf8a4fa0267323b8"
---

# MAC 터미널 꾸미기

> **Summary**
> 맥 터미널을 꾸미기 위해 Oh My Zsh를 설치하고, 원하는 테마로 변경하며, 폰트를 설치하고 적용하는 방법을 설명합니다. 또한 VSC 터미널에서도 폰트를 변경하고, 명령어 하이라이트를 적용하는 방법을 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/241098b0-b934-4c4b-b6d5-6273fd53c0be/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMG2HWN6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBnkgoq8fWkI%2BrQTY58Rm3PvkmdWaI7%2FkAVvfKzUf0eKAiAhHmGMhGjUHDBvVeYnNvbXozuG86CIIeTdHJlq6jYr2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMJqsbg4sSZ%2Fe5ERdoKtwD3NEFBArslGfthe6k5UCgznorsTLdr7jjASNkykLwtr4tUi8G2AOU0fUWwgnHniUICG4Dj30upvXujcDJR5rqTOTOMm8h%2F6Im3q1cGuZRe1lSOmzvoFUFTtXWJGgXdbNqQ8Fv82%2BIcD9YT3qd%2BVQqBzT4fxrLcC3j3dNNA97VrdNzv3iu9m0YlVuTLA1AKpYZ%2BQP1tPnTxqtd9EzWJaUywOcOtykbk99qRsfM7blTnljPLEGEIuqJzJWzvsFCDz3IsmiejnADUNmvU36G%2BiVp3yqb%2Br%2Bny%2B4HKRRy9xfMSF4oRkPm92ogQ5nuxE1cn%2F9BibRfQgNkT8nr0gzosdvaCLOTRNW4WqH3U68HtEHt81LICwPohZPs9UKAlwaEec1gr4E0JloU3NGQF7pFeMd9Sb87Ibd5RhCxEX6HovOiFzxE%2Bva6Cz%2FiTRP4fQZnuqK166zf%2BTUPcqcw%2F1PXREOSFFyrFlqOdKj0wCgFAyP44Z1vR72bLlLsx85oOFvK5tMquvYLqwYN%2BgUmlJvekGTaryJAmbV%2BjHTaZzTdg2mHhNrVLZQE%2FJCxl6SGtF0R56HrMKqB3QOg0QQ4%2Bglr%2BsGmE682ms93MqPBqR%2FIBOhg%2BENDE8HdmJ9hFLRPzw8w5ZuIxAY6pgHSMndb4tRIy6R8ey7ILFVyLNH6bSgVg0BQMODnHWIYLIAoDSnemUA3HVgiKmhEd2IinkSIgC6R8M6%2ByZ2e75ZlyFyI9rfbY5ecCTU1xcdXI7k7sGHMbrFLVUlsdd76dJtO%2ByP%2B45ROcYw3lx%2BAVKhEZk%2BFs7tTZBVx94YwKUFxhylKV7P1I8G4fWnFSxqcy314otF%2F9%2Bv0z78L%2FOT74bMCzNFupL5W&X-Amz-Signature=7b485a22b2b7bc7ccbecae5e0eba3f11f753f2f09530ca6a75b68aef957eb938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@saemsol/Oh-My-Zsh](https://velog.io/@saemsol/Oh-My-Zsh)


기존 fig로 oh my zsh를 설치하니 환경변수 문제가 많아 그냥 직접 커맨드를 입력하여 omz 를 설치했다…

# 아래 내용은 전부 위 블로그를 그대로 스크랩해온것…

# 1. [Oh My Zsh](https://gist.github.com/kevin-smets/8568070) 설치하기

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F40b800c3-0679-489c-ad86-5a22d547d6e3%2Fimage.png)

## 1-1. Install with curl

ZSH 먼저 설치하고

```shell
sudo apt install zsh
```

[여기](https://gist.github.com/kevin-smets/8568070)에서 설치코드를 복사해 터미널에 붙여넣는다.

```plain text
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

그럼 몇초 뒤 **설치 완료** ✨

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F4e1e19bc-6e50-4f8e-b7d1-ed59a474fdf8%2Fimage.png)

## 1-2. clear 입력

~ 옆에 `clear` 입력해주고 엔터!

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F8ec43f8c-096b-4cd2-aebf-3ad25de199bd%2Fimage.png)

# 2. 테마 바꾸기

## 2-1. 테마변경하기

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F1b3538f6-a065-4283-98d7-a057c289da42%2Fimage.png)

→ `1번` 에서는 `Oh My Zsh` 를 설치한것 뿐이기 때문에, 이제 원하는 테마로 설정해줘야한다.

- 저는 [Oh My Zsh 테마목록](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) 중 "agnoster" 를 설정하려고 합니다.
### ① ~ open ~/.zshrc

터미널에 `~ open ~/.zshrc` 를 입력해준다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F727abb60-4be9-45e9-b6ad-ab19cfdf4ac8%2Fimage.png)

→ 그러면 새로운 **텍스트창**이 열린다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2Fa18f0340-3490-43a3-be66-7a8c18bea7f6%2Fimage.png)

### ② ZSH_THEME="agnoster"

ZSH_THEME="`이부분`" 을 **변경**해준다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2Ff53aa198-9aec-4d3a-a6e6-e34d2080aa75%2Fimage.png)

- "robbyrrussell" → **"agnoster"**
### ③ iTerms 다시 열기

변경해준 뒤 `iterm2` 를 껐다가 다시 켜준다.

🤚🏻 그러면 아래처럼 ? 박스도 있고 이상한 모양이되는데, **폰트가 깨져서 생기는 문제**이다.

→ 이제 **폰트를 설치**해줘야한다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F2f48adcc-2c9b-4c45-acbe-824e8436c581%2Fimage.png)

## 2-2. 폰트패치하기

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F17a54ee9-f6fe-416f-beee-54630adfa68b%2Fimage.png)

### ① 폰트다운 및 설치

[Source Code Pro](https://github.com/powerline/fonts/blob/master/SourceCodePro/Source%20Code%20Pro%20for%20Powerline.otf) 에서 폰트를 다운받고 설치한다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2Ff37cd330-4f17-4727-9e45-1eb1819f4374%2Fimage.png)

### ② 원한다면 다른 폰트도 설치

혹시 다른 폰트도 원한다면, 이 단계도 진행해주면 된다. 🙂

[Others @ powerline fonts](https://github.com/powerline/fonts) 여기에 들어간다음에 쭉 내려서 `README` 부분으로 간다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F6e0fb0bd-0abf-45e3-a882-bc2c187cd20c%2Fimage.png)

→ **각 운영체제에 맞는 부분**으로 빠른설치를 실행한다.

✨ 저는 Mac OS 이기때문에 `**On other environments**` 부분으로 진행했습니다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F0768bcb8-9294-4e72-bf9b-6977af2c297c%2Fimage.png)

1️⃣ `#clone` 부분 진행하기 (아래 코드를 터미널에 붙여넣습니다.)

```plain text
git clone https://github.com/powerline/fonts.git --depth=1
```

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2Fe659839f-3172-406c-a1ea-bf901aa813dc%2Fimage.png)

2️⃣ `#install` 부분 진행하기

- 이전단계가 완료되면, `cd fonts` 를 입력해줍니다.
![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F4c476910-035a-43ce-ac35-4d90cd079250%2Fimage.png)

- 완료되면 이제 초록색 부분이 생기는데, 이어서 `./install.sh` 를 입력해줍니다.
3️⃣ `# clean-up a bit` 부분 진행하기

- `cd ..` 를 입력해줍니다.
- 이어서 `rm -rf fonts` 도 입력해줍니다.
![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F1c10f889-e530-4d68-abab-1deb72c07a52%2Fimage.png)

### ④ 위에서 설치한 폰트 적용

설치한 폰트를 적용시키기 위해 `iTrem2` > `Preferences...` 로 들어간다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F8b7888a4-3c17-4637-a6ab-f4512d647a58%2Fimage.png)

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F91d9d862-9259-4d7c-928a-b692083f4bea%2Fimage.png)

`iTerm` → `Preferences` → `Profiles` → `Text` → `Font` 로 이동한다!

- Font 를 **Source Code Pro for Powerline** 로 설정해준다!
![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F581294d7-80dd-4a6b-838d-7676be1acf46%2Fimage.png)

- 그럼이제 물음표 박스도 사라지고, 모양도 조금 비슷해진다.
![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F5b037801-d4b2-4d09-abc4-dee38fcfccde%2Fimage.png)

### ⑤ 색상 테마 변경

- 이번에는 다시 `iTerm` → `Preferences` → `Profiles` → `Colors` 로 이동한다.
- 그리고 하단의 `**Color Presets...**` 를 변경해주거나, 색상을 변경시켜준다.
![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F58cd772a-f40f-4262-9663-1fbddbe219f0%2Fimage.png)

# 3. 완성 🥳

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2Fd639201e-315c-429c-9647-babfc2682421%2Fimage.png)

# 4. (추가) VSC 에서도 설정

🤚🏻 아무것도 해주지 않으면 VSC 터미널에서도 폰트가 깨진다.

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F0f813a92-422d-4f09-a97b-24f31fd47516%2Fimage.png)

✨ **VSC 터미널에서도 폰트를 변경**해줘야한다!

- `setting` 에서`"terminal.integrated.fontFamily": "Source Code Pro for Powerline",`를 붙여넣어준다.
![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2F1dc08f5e-21a6-49a1-bf10-1069f318072e%2Fimage.png)

# 5. Syntax Highlight 적용

명령어에 **하이라이트**가 된다! ✨

![Image](https://velog.velcdn.com/images%2Fsaemsol%2Fpost%2Fec6adbcb-7758-47f0-b21d-16d1b55e41cb%2Fimage.png)

## 5-1. brew를 통해 설치

- **설치**
```plain text
brew install zsh-syntax-highlighting
```

- **적용**
```plain text
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

- `open ~/.zshrc` 에 들어가서 맨 아래에도 **추가**하기 (항상실행되도록)
```plain text
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## 5-2. 오류가 난다면

설치단계 `brew install zsh-syntax-highlighting` 에서 다음과 같은 오류가 발생한다면,

```plain text
Error : The following directories are not writable by your user: /usr/local/share/man/man7

You should change the ownership of these directories to your user.

sudo chown -R $(whoami) /usr/local/share/man/man7

```

→ 시키는대로 해주면 된다!

- **폴더 권한 수정**
```plain text
sudo chown -R $(whoami) /usr/local/share/man/man7
```


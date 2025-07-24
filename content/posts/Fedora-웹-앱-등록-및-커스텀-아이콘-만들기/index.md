---
title: "Fedora 웹 앱 등록 및 커스텀 아이콘 만들기"
date: 2024-06-04T14:29:00.000Z
draft: false
tags: ["fedora"]
series: ["Let's Linux!"]
description: "웹 앱을 등록하려면 Chromium을 사용하고, 필요한 확장 프로그램을 설치한 후 웹사이트를 방문하여 앱을 설치합니다. 커스텀 아이콘을 등록하려면 .desktop 파일을 수정하고, 아이콘 파일을 적절한 디렉토리에 저장한 후 경로를 업데이트해야 합니다."
notion_id: "0684031d-a50e-43ae-bb8a-c8d826bc025e"
notion_url: "https://www.notion.so/Fedora-0684031da50e43aebb8ac8d826bc025e"
---

# Fedora 웹 앱 등록 및 커스텀 아이콘 만들기

> **Summary**
> 웹 앱을 등록하려면 Chromium을 사용하고, 필요한 확장 프로그램을 설치한 후 웹사이트를 방문하여 앱을 설치합니다. 커스텀 아이콘을 등록하려면 .desktop 파일을 수정하고, 아이콘 파일을 적절한 디렉토리에 저장한 후 경로를 업데이트해야 합니다.

---

# 웹 앱 등록

> 💡 **Chromium이 너무 가벼워서… Chromium 기준으로 할거임**

> 💡 **일단 다음 Extenction이 필요하다**
> ---
>
> [https://chromewebstore.google.com/detail/open-as-popup/ncppfjladdkdaemaghochfikpmghbcpc?hl=ko](https://chromewebstore.google.com/detail/open-as-popup/ncppfjladdkdaemaghochfikpmghbcpc?hl=ko)
>
>

> 💡 **웹 앱 화 시켜버릴 목적의 웹사이트 방문**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f16f8b2a-8db3-4023-bf4d-d29765b04d16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKRC6VO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICofC5q54bGI%2BDejkIpSbjUyTTnUsWGJSxNSXWP6lkLeAiBqjcU56RL5fHzcoJWiDPpQ9cOuj1veKGoclk0o%2BahjWCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMc85aBwGEY0t%2FEKEbKtwDvQI7er9%2By3h%2Bte1nQJdzqE9V8r3N5Tig05iJoQ5LLHBy2GTMKJQu0STEc0KpDYSK8GELJMwdOKF%2BmR1KWJTqEZWhBtZf03opILpyGxDpUaRd1eRx%2B2pAbR%2Fljoxw%2Fw%2F4ZfZk%2FfsEHz8ZclVjcZENZTgDCQ8InqZYhGzpxr5ZK3PvNmXoHEO%2BumoCnj29GfoWkfSItxDqignNaRq1o2uXMywjO5ka2V3dqmxW%2F%2F3rtproOH9vfyeVvNKG%2Fub7iVWISCox2l8RExn4o7FDjxXSFfY003Jbbn8pZUZJ7EXTjNhfTuViS7QGq5FrzSsaTFmDc24pYULKqydIFLIxJ7hnH5u61HEVYKOd1jc0%2BSAS4epjeZ5ao%2BbNDOAw5dAn1yltfvot3bf7akK%2F62NWnm7ppzWnm2KE3GnVXtjGndMwpQMCFVbkIeB5QuqHTcJN2DdVcbQa5Mw4paKG4UIm2ZzU3EWeknlvMoflXSwZnWLBWswa2Ul%2BzjmGA0gMZp%2Fgf9Qtr92l5az3CRFEOkXKRLjFR12iYQZ%2BSFeKkTt3nI02EgfezSoHrbrSO%2BDuR0udNtBOo6%2Bd%2B5p%2FB%2Bdo2x5TfBOCYsCJ%2BAJOhZVsfs0cqgJuq3vigZkTIk9YJldVTeYwxvaHxAY6pgGuqpgwk84G8Cs2zV0VZt2vm2SKfPDn2CRGmj26tQDCOfVMr6aPhjOY67ibdhIpFA%2Bb9FG27VS3t8eIRBWu4gUE7s0PYLXMg1i57pyG0KZ5O6CBM5FD%2Bx990djxF3x84wyLJhQCpzKKH6t6sooFnU7QELGSG25fQSYXNrfTuJqatSOlGQVHG0%2Bny72qudjG9IB3u2jINyGtEP2eonfHO%2FijnEn040SY&X-Amz-Signature=186ff30c3916cebeb76d44da9fc25828b5b05ba8cfc6cb1179e887f5bef8700b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **우측상단 점 세개 → 저장 및 공유 → 웹 앱 설치… (바로가기 만들기도 상관없음)**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4293763e-7e86-4b17-ba2a-242da7bf7956/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJXNQ5T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCrsx9hR0QL2ZEuXZogwCf9OqEOjbT3zlQ8iS8dmYg14wIhALHi%2Bx7XdZwUrOe%2BsKJNaZ%2BREisBK6oUGS7IThkXNLpaKv8DCCoQABoMNjM3NDIzMTgzODA1IgxHL6%2BYv9XRwOt7RLQq3AON3Ucb%2Fcdhwvpr76Jl%2BSw1nXi2vSCqsjW0J29rIXe2uvtGGSJ0pOgpXW2MoqTKhp8XizJYtaSWGp0C7wq1qKt12I5cAv1sy7Q3AvgHFHitE1cZTPZCwkTK1Ck%2BmLEV%2FE6b8NZOuJrfTd%2Bmvrth93%2FbDgRf6ywCnbJeCvLbhWGtuXvOzHEmwF1ogMKgAwjTkOamhsQCCreDa6ABeyFvunr6G7OqBRv4CFhDDDduUKuUfWpz53qlcQarrWIHjEZX1EA40wUP0OdTi%2FLChYkl2wBan5Pi1yXw%2FwP4cUUJmL53zPnW4nOxBT%2BOKQ5WHwTEYtoor7lZ%2BSVrtOXRyHmAlbTjeoVZkqU5HlNL3rCtZ5keOaCuNgxk2EoVmum1vQBD%2F1c9ofOJlR%2FRVPbYJTjF5nBDrekt9ofE1NTWJqM7u7wwJwipGxsBbR1L1Vg4Oy9fL16rWzkD1YdXXpGgDwgZEpbO252WXLx1BoFJhO01EcO08NHF%2Fr2fxKwwDNU%2BEWHDVZlokFAx87roiAEbYjSw%2FJGYr4AMTXdv2PMgpDbvXh2LFCREnp4EboifGE%2FvHqDz%2BKoNkRyo8TQVOM1t451FaTA%2F87KLr%2FxS6VXfDM8Mf3QxHc9LNmsiF0h84vgqpzCe9ofEBjqkARVB%2Fv4M%2BFyNnsNgrRqLk%2FSYvRwNxFR%2FWoD%2FPZORTH%2FUQ3I8cXVMIi5K0e%2FgPrgIfdpdWzINt7t8Uz%2FgOnBFQLBOPZxDas3cI8UwkJLlvFFJ08RC8S1T0t8G8bC9HfQNd9g8%2B1JxQfygSo2akf2DQeuG2kX6TNpc%2FYtBneQ5hTBOd5EEQXkq443rD5Fp5FbCrySvnFbfx7751Bt1DBHnvWCQHXOt&X-Amz-Signature=616123677183d01e52085827b15c7359a9f7e8ded2b274fbb7c3fa1eda2997e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/238c85d5-c5a8-4b97-85a5-cb9691016879/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJXNQ5T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCrsx9hR0QL2ZEuXZogwCf9OqEOjbT3zlQ8iS8dmYg14wIhALHi%2Bx7XdZwUrOe%2BsKJNaZ%2BREisBK6oUGS7IThkXNLpaKv8DCCoQABoMNjM3NDIzMTgzODA1IgxHL6%2BYv9XRwOt7RLQq3AON3Ucb%2Fcdhwvpr76Jl%2BSw1nXi2vSCqsjW0J29rIXe2uvtGGSJ0pOgpXW2MoqTKhp8XizJYtaSWGp0C7wq1qKt12I5cAv1sy7Q3AvgHFHitE1cZTPZCwkTK1Ck%2BmLEV%2FE6b8NZOuJrfTd%2Bmvrth93%2FbDgRf6ywCnbJeCvLbhWGtuXvOzHEmwF1ogMKgAwjTkOamhsQCCreDa6ABeyFvunr6G7OqBRv4CFhDDDduUKuUfWpz53qlcQarrWIHjEZX1EA40wUP0OdTi%2FLChYkl2wBan5Pi1yXw%2FwP4cUUJmL53zPnW4nOxBT%2BOKQ5WHwTEYtoor7lZ%2BSVrtOXRyHmAlbTjeoVZkqU5HlNL3rCtZ5keOaCuNgxk2EoVmum1vQBD%2F1c9ofOJlR%2FRVPbYJTjF5nBDrekt9ofE1NTWJqM7u7wwJwipGxsBbR1L1Vg4Oy9fL16rWzkD1YdXXpGgDwgZEpbO252WXLx1BoFJhO01EcO08NHF%2Fr2fxKwwDNU%2BEWHDVZlokFAx87roiAEbYjSw%2FJGYr4AMTXdv2PMgpDbvXh2LFCREnp4EboifGE%2FvHqDz%2BKoNkRyo8TQVOM1t451FaTA%2F87KLr%2FxS6VXfDM8Mf3QxHc9LNmsiF0h84vgqpzCe9ofEBjqkARVB%2Fv4M%2BFyNnsNgrRqLk%2FSYvRwNxFR%2FWoD%2FPZORTH%2FUQ3I8cXVMIi5K0e%2FgPrgIfdpdWzINt7t8Uz%2FgOnBFQLBOPZxDas3cI8UwkJLlvFFJ08RC8S1T0t8G8bC9HfQNd9g8%2B1JxQfygSo2akf2DQeuG2kX6TNpc%2FYtBneQ5hTBOd5EEQXkq443rD5Fp5FbCrySvnFbfx7751Bt1DBHnvWCQHXOt&X-Amz-Signature=1ca3c246afcf4cefcf47ec03f776fc043a3bc80ae254ad154687e6822456b526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **그럼 이제 애플리케이션 항목 가면 앱 추가되어있을탠데, 재부팅 후 보면 앱 등록되어있을거임**

웹 앱 등록

# 커스텀 아이콘 등록

[https://www.reddit.com/r/Fedora/comments/14eh9s9/fedora_i_want_to_change_the_icon_for_an_app_via/](https://www.reddit.com/r/Fedora/comments/14eh9s9/fedora_i_want_to_change_the_icon_for_an_app_via/)

```latex
앱 실행기 아이콘(.desktop 파일)을 의미하는 경우 해당 아이콘은 앱 설치 방법에 따라 다양한 위치에 나타날 수 있습니다.

    시스템 수준 RPM 패키지 앱 실행 프로그램은 일반적으로 /usr/share/applications에 있습니다.

    사용자 수준 앱 실행 프로그램은 ~/.local/share/applications에 있습니다.

    Flatpak이 설치된 앱은 시스템 전체 설치의 경우 /var/lib/Flatpak 또는 사용자 수준 설치의 경우 ~/.var/lib/Flatpak 아래 어딘가에 실행 프로그램이 있습니다(정확히 둘 다 /exports/share 하위 폴더 아래에 있을 수 있는지는 확실하지 않음). Google에서 찾은 장소 또는 일부 정보에 따르면 각 .desktop 실행 프로그램은 /usr/share/applications 사례와 같이 하나의 폴더에 모두 있는 것이 아니라 특정 flatpak 앱별로 복잡한 중첩 트리에 있을 수 있습니다.

앱이 /usr/share/applications에 RPM으로 설치된 시스템 앱인 경우 가장 쉬운 아이콘을 재정의하는 방법은 거기에서 .desktop 파일을 복사하여 ~/.local/share/applications(귀하의 그런 다음 사본은 시스템에 설치된 항목 위에 그림자를 적용합니다. 그놈 앱 서랍은 시스템 아이콘 대신 아이콘을 사용하고 이를 편집하여 사용자 정의 이미지에 새 Icon= 값을 추가합니다.

없습니다 . Flatpak .desktop 실행 프로그램을 재정의하는 데 효과가 있을 수 있지만 이에 대해서는 확신할 수 Flatpak .desktop 실행 프로그램은 다음에 소프트웨어를 업데이트할 때 덮어쓰여지기 때문에 직접 수정하고 싶지 않을 것입니다(/usr/share/applications 실행 프로그램과 동일하지만 ~에서 로컬로 재정의할 수 있을 만큼 쉽습니다. /.공유 폴더).
```

## 나의경우, chromium으로 만든 바로가기다보니 해당 디렉토리에 존재했다

```latex
cd ~/.local/share/applications
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5cc6499c-d532-46ba-8313-becc7b2a823f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S6I3SN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEENlDABOhfWmkg7T7R1gC47EYQ2RRbYLrNNutJFQx4ZAiBG4TVQ3BMXyQRAjR4ZBstGr8GOx2VPMiCmz3px17kHuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM5Ok7DBX0m0dwm4l3KtwDQ%2BW5gese5mo9IbYwd%2F%2BuykUOL%2FTGxDXq2%2FxTsRbmPijvpEDEAWBQuOzNF87ZQJWwCIHdScqYxw8%2FZc8YzK%2Fuv55njN%2Fc9th6jmaolDE07g8%2FzSzv0P50Bf276inP3A7YEEDBGGvHeNjmvdkt9CKSC1WU7tPjiOsddtzL7B6ToODcHj%2BdNY7Dyh44GmxhFoPq4hdm3D7i4CDpksbFzGrW5NtfS%2BYWX364OjsNB9xtktL%2B05eagrBqA52GFFuWoq4Kr%2B20Llt4imwzOxU07eQLIWC1Ymy3D%2BmpK%2BykNrg1MKyInspRc1PnIElj47kUVXBcSIzYNUqkG0QQqecICMlXFSM4roekmdjsm53ry4XVg91PydNbI3nzCnxzyg3lVa1NQaVqJazEegIbWAoZGjxKxIUBBeD%2FZbkcOVvMVlSKS3%2FG99ECfHAIZ7w4YxhR4S4AqcfwUFZl9Tl3xZvS6PWBVTD%2BbBtJGyhe6ABd25VHYG9XeE1GJtUpPe%2FGSmBK2eRP49aq%2FRFe%2FEBG8yopS6H3HOnR0%2By5O641OSjnJyn5ux0TDrboA5sHEy3%2BqUh4DJtmjxEF67yoShC2WhIGNKXwZMkzPyzdon4f1bN0qAbaNvCWc0MXdrUXnvpLdcYw7vaHxAY6pgEgjjRNFhV84ZZKKXKzm5qlExkJhXbAeeOtsu%2BjdRW%2BIEp0Rs3NcP2QFIrLOhzybXvisZjRqSTNfVuYtALH30ani5Ze2RVf2riM3iMjnpQi3uKCuF0C7GTbzhmCSw2ymsHirgylEJK7Qn0z87BDjn%2BvDQrfPrpxtjvymyngsyXSko08qhTqt4YHARiVR4IRnNFAG4X3MBnPFDkCRjHjhCqOHZ5D8AgL&X-Amz-Signature=71fa90a3953f53d77461f269572b0c36c6e0c0d4bfd48734669f1b531c5e4676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 아이콘 필요한거 다운받자.. 가능하면 ico 확장자로

[https://icon-icons.com/](https://icon-icons.com/)

```latex
난 파일 저장하고, ~/appIcon 디렉토리를 만들어 여기에 아이콘을 저장해뒀다
```

## 아이콘 파일 수정…

```latex
sbu@fedora:~/.local/share/applications$ **vim org.chromium.Chromium.flextop.chrome-fdmdhiopjpbifpekaocpfghblkohjhac-Default.desktop **
```

```latex
#!/usr/bin/env xdg-open

[Desktop Entry]
Version=1.0
Terminal=false
Type=Application
Name=Notion
Exec=flatpak 'run' '--command=/app/bin/chromium' 'org.chromium.Chromium' '--profile-directory=Default' '--app-id=fdmdhiopjpbifpekaocpfghblkohjhac'
# Icon=chrome-fdmdhiopjpbifpekaocpfghblkohjhac-Default
**Icon=/home/sbu/appIcon/notion_logo_icon_229291.ico #아이콘 저장된 디렉토리**
StartupWMClass=crx_fdmdhiopjpbifpekaocpfghblkohjhac
X-Flatpak-Part-Of=org.chromium.Chromium
TryExec=/var/lib/flatpak/exports/bin/org.chromium.Chromium
```



---
title: "VS Code C++ 세팅"
date: 2024-01-09T00:42:00.000Z
draft: false
tags: ["C++", "MAC", "WINDOWS"]
series: ["개발환경"]
description: "VS Code에서 C++ 개발 환경을 설정하는 방법, 헤더 파일 포함 및 빌드 설정을 위한 JSON 파일 사용법을 설명하며, 관련 링크와 커뮤니티 지원을 제공합니다."
notion_id: "877b6f3e-0e2f-4285-bc5d-c174ff5e5110"
notion_url: "https://www.notion.so/VS-Code-C-877b6f3e0e2f4285bc5dc174ff5e5110"
---

# VS Code C++ 세팅

> **Summary**
> VS Code에서 C++ 개발 환경을 설정하는 방법, 헤더 파일 포함 및 빌드 설정을 위한 JSON 파일 사용법을 설명하며, 관련 링크와 커뮤니티 지원을 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cbfb64a9-d4b8-4c99-869d-eac3213cf0a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AVFKY3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBgFHViL7Ba8kYEFelR1eEke4SS3iL93PKmMYXksHDXwAiEAnoOvizwdBc%2BEvVZ6FcmPOEGM5h6M9Ku8%2Fe04R5nFRFMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIYvaVKIa3T0YjM4eircA17PG%2F5FRH082EdfNAGgixrAJmAXQqtB9c3gbeamCLr5aM9ZKBFMP8sMvDhCIrhfIH0aTGhoK8Ko7AO6wxWe%2FiBSgiwk8DAf5SWIBGD0DdeUAxXPkaxgoVj2wtgVKA3Y4OtvQC4T7qwn7FOsAb7bxH8b4DhbVRJg7tyL6y4KzFGvO1bylxNBXSCdqfKXJKq8TP3zmRNavne%2FBAH61MU4u%2FxvDO3nrhgjif5VtN8%2FqCfH8tsgkwRIBS6Vjl%2BA0c4elWzB3WvDDYgumI9YU%2BUhtBJ3rBR5hTX0Vb0xdpDPhCM1ZhzP%2Bt5ttr5rO13i4343W2mDak2ZZTACxCKYQTI3jk3Yy%2FWmiH57wz%2BTYc84%2B4j5ofkqxIjajgQlHGKttbgL0shXdNUBEeowjDzV%2F8jJia1UG6vbbfP77%2BuCqHKult1SAQd9zl5F5Cd%2B%2BbqyozUWGVIvyuA1wxa%2FMil98YnPg0RcJ%2BeB%2B9WbaC%2BdSyLxAvV0LZbwOvERxmu9O10IE0i3x9sDPcnqJ1kWavnpP3997CzV%2BJQp1f4T%2FzslEs%2FlNWEojSFuAIJmk9YwVPD9%2BGuXp2ZQXuki40veCCYCtRZoF2xaDkIVSTzFJCTV4SZNv99UtetWMjIO0vdERK%2FPMOD2h8QGOqUBwnl5qj7NaKVvhmEx1vztyT6eAgV4mFgsSHs7ZmPI%2FQPm%2FbTaIMucK%2BdUqj44e%2FVG%2Fco2L5OaRO5sZgQPYOAcUzXp0VDjyoy2hAzCAKsbaIShkoRa45FbqbR5hlBCXmajzz9O4fuyqPqOjRIpvLNc8Y%2Feh835%2Bz2l2EhalDX8OdQSsfV77o8hOYyoO14UvZ40HuajXawIsm56lIUEjUuwsIJVtJqB&X-Amz-Signature=2b5b2d831779bf37f23120020a342d2192653e21892b037a171e1945b1808eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 설치

🔗 [https://torbjorn.tistory.com/658](https://torbjorn.tistory.com/658)

🔗 [https://wooono.tistory.com/299](https://wooono.tistory.com/299)


# 헤더 세팅

🔗 [https://www.inflearn.com/questions/1075869/맥에서-makfefile-사용하지-않고-vscode를-사용하여-헤더파일-포함해-실행시키는-법](https://www.inflearn.com/questions/1075869/맥에서-makfefile-사용하지-않고-vscode를-사용하여-헤더파일-포함해-실행시키는-법)

> 💡 **헤더파일 포함 방법**
> ---
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/549032c6-e95a-4b85-bd22-f981081bd948/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDEKR7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID4TQN3hNNvnT1vRyBcxEi0m3d%2F4XcVBhIz%2FEp6H1tA3AiEA5EI1Vhx11EzpdaEVghJvYTETjZ0KnWCP42OdIbFXt%2FAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKuqy8P8a2kfl6u%2FsyrcA4Wsk7pENlFxIXxhhOCu98jW2Kf2wP428J9QtaLO580d2laORdlJaJt9k4XLpunA4npNqRt%2F9jNoKxx4qTOM%2B%2Fe0INKPh1NM5oeib4sblGfJqnRX7oE9LALTdQ4BPu7LNvGjiQPQKEh31hrZApK%2BCxOrv%2FIcgmJooS%2BSVqQ86G2nIxqK9wmoPDUwK66tQPGyU%2BBSTghUmMbUsbofHRZbD1k594JjPMJGE%2FAGLBXZqz8uTdQzDgdbGLb2Cs7lYRLzSs7ihP5aXQaKkMAxj26eqv8T%2Fyd1VXO6at5YiA6u8ejEH%2Fj3%2B9aSVgXVbyrgOgTQTylAsGeTSlO8LgmW3Ie5QWy6ggea6wiah0OKbyR2NJWwIXnpWjm6drnNpJ7AFYV6grxpTEs5hnkkMSzm9iGS%2FLgrmAO8dF5tX8SQ4iYd2PL1U%2BRkEoOM2ewoNjgt4DxoyKihfav3iEYsTxQO4xDltUWN3Af31WMjNzboOfl31hfD4FB7oDacVUmnXixeheLrXR%2FqPpbKVI0Nz%2FHzY3pIngrx61860FmOOYksI3GjjPH4o9XMmGrepb53VT2IsSn5d8dZIiyntTRd8LCV4A%2FEexfuEIz2ROzbQjlx5GnngVBDzOH7qGtvbtNcaRcKMMH1h8QGOqUBVxN%2FsItARKWX5fxJYPGL2YSye%2B1sl3YDEGLspU49nP3aNajBzPueb2ISmsXYk3ADMn%2BNtSB%2BqsbrtbwZumcc%2F%2FkfowgRBDcfPy4MBWQgywspYy4pds5E1Qvp4xBYYconXJqg4RU%2B9%2B5l2lWu3hIzflInBadpYXFNDTabhCuiBG1j36K3bcC00z%2BKoRjgo%2B%2BLYtOuObL1gtxsg5YYURX4ZlLn8WbG&X-Amz-Signature=c39836b57d97d83d3f3946febb4bb71e8ff15ccb9d8b0eba6f4a0911ed98d676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 일단 이건 제 폴더 화면이구요 ch1.cpp가 메인함수이고, 리소스에 add함수(헤더파일 및 바디)를 넣었습니다.
>
> # add.cpp
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b222aff5-a8b1-4bb8-8edc-21bfc7e5294e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDEKR7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID4TQN3hNNvnT1vRyBcxEi0m3d%2F4XcVBhIz%2FEp6H1tA3AiEA5EI1Vhx11EzpdaEVghJvYTETjZ0KnWCP42OdIbFXt%2FAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKuqy8P8a2kfl6u%2FsyrcA4Wsk7pENlFxIXxhhOCu98jW2Kf2wP428J9QtaLO580d2laORdlJaJt9k4XLpunA4npNqRt%2F9jNoKxx4qTOM%2B%2Fe0INKPh1NM5oeib4sblGfJqnRX7oE9LALTdQ4BPu7LNvGjiQPQKEh31hrZApK%2BCxOrv%2FIcgmJooS%2BSVqQ86G2nIxqK9wmoPDUwK66tQPGyU%2BBSTghUmMbUsbofHRZbD1k594JjPMJGE%2FAGLBXZqz8uTdQzDgdbGLb2Cs7lYRLzSs7ihP5aXQaKkMAxj26eqv8T%2Fyd1VXO6at5YiA6u8ejEH%2Fj3%2B9aSVgXVbyrgOgTQTylAsGeTSlO8LgmW3Ie5QWy6ggea6wiah0OKbyR2NJWwIXnpWjm6drnNpJ7AFYV6grxpTEs5hnkkMSzm9iGS%2FLgrmAO8dF5tX8SQ4iYd2PL1U%2BRkEoOM2ewoNjgt4DxoyKihfav3iEYsTxQO4xDltUWN3Af31WMjNzboOfl31hfD4FB7oDacVUmnXixeheLrXR%2FqPpbKVI0Nz%2FHzY3pIngrx61860FmOOYksI3GjjPH4o9XMmGrepb53VT2IsSn5d8dZIiyntTRd8LCV4A%2FEexfuEIz2ROzbQjlx5GnngVBDzOH7qGtvbtNcaRcKMMH1h8QGOqUBVxN%2FsItARKWX5fxJYPGL2YSye%2B1sl3YDEGLspU49nP3aNajBzPueb2ISmsXYk3ADMn%2BNtSB%2BqsbrtbwZumcc%2F%2FkfowgRBDcfPy4MBWQgywspYy4pds5E1Qvp4xBYYconXJqg4RU%2B9%2B5l2lWu3hIzflInBadpYXFNDTabhCuiBG1j36K3bcC00z%2BKoRjgo%2B%2BLYtOuObL1gtxsg5YYURX4ZlLn8WbG&X-Amz-Signature=cf7f676bc1353e6c283cc7a31dece0730e98617246a43a67256fe2e9efdcbf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/180dbbf5-1af1-4d69-912a-05d7c20ec22b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDEKR7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID4TQN3hNNvnT1vRyBcxEi0m3d%2F4XcVBhIz%2FEp6H1tA3AiEA5EI1Vhx11EzpdaEVghJvYTETjZ0KnWCP42OdIbFXt%2FAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKuqy8P8a2kfl6u%2FsyrcA4Wsk7pENlFxIXxhhOCu98jW2Kf2wP428J9QtaLO580d2laORdlJaJt9k4XLpunA4npNqRt%2F9jNoKxx4qTOM%2B%2Fe0INKPh1NM5oeib4sblGfJqnRX7oE9LALTdQ4BPu7LNvGjiQPQKEh31hrZApK%2BCxOrv%2FIcgmJooS%2BSVqQ86G2nIxqK9wmoPDUwK66tQPGyU%2BBSTghUmMbUsbofHRZbD1k594JjPMJGE%2FAGLBXZqz8uTdQzDgdbGLb2Cs7lYRLzSs7ihP5aXQaKkMAxj26eqv8T%2Fyd1VXO6at5YiA6u8ejEH%2Fj3%2B9aSVgXVbyrgOgTQTylAsGeTSlO8LgmW3Ie5QWy6ggea6wiah0OKbyR2NJWwIXnpWjm6drnNpJ7AFYV6grxpTEs5hnkkMSzm9iGS%2FLgrmAO8dF5tX8SQ4iYd2PL1U%2BRkEoOM2ewoNjgt4DxoyKihfav3iEYsTxQO4xDltUWN3Af31WMjNzboOfl31hfD4FB7oDacVUmnXixeheLrXR%2FqPpbKVI0Nz%2FHzY3pIngrx61860FmOOYksI3GjjPH4o9XMmGrepb53VT2IsSn5d8dZIiyntTRd8LCV4A%2FEexfuEIz2ROzbQjlx5GnngVBDzOH7qGtvbtNcaRcKMMH1h8QGOqUBVxN%2FsItARKWX5fxJYPGL2YSye%2B1sl3YDEGLspU49nP3aNajBzPueb2ISmsXYk3ADMn%2BNtSB%2BqsbrtbwZumcc%2F%2FkfowgRBDcfPy4MBWQgywspYy4pds5E1Qvp4xBYYconXJqg4RU%2B9%2B5l2lWu3hIzflInBadpYXFNDTabhCuiBG1j36K3bcC00z%2BKoRjgo%2B%2BLYtOuObL1gtxsg5YYURX4ZlLn8WbG&X-Amz-Signature=d47df3d82bb5d3a34ee3012db86b0dc87aefa750e254b7df1c371b6e92af103d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> # add.h
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7e956632-69ab-4f0c-a7bc-9c5d3aa7a30e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDEKR7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID4TQN3hNNvnT1vRyBcxEi0m3d%2F4XcVBhIz%2FEp6H1tA3AiEA5EI1Vhx11EzpdaEVghJvYTETjZ0KnWCP42OdIbFXt%2FAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKuqy8P8a2kfl6u%2FsyrcA4Wsk7pENlFxIXxhhOCu98jW2Kf2wP428J9QtaLO580d2laORdlJaJt9k4XLpunA4npNqRt%2F9jNoKxx4qTOM%2B%2Fe0INKPh1NM5oeib4sblGfJqnRX7oE9LALTdQ4BPu7LNvGjiQPQKEh31hrZApK%2BCxOrv%2FIcgmJooS%2BSVqQ86G2nIxqK9wmoPDUwK66tQPGyU%2BBSTghUmMbUsbofHRZbD1k594JjPMJGE%2FAGLBXZqz8uTdQzDgdbGLb2Cs7lYRLzSs7ihP5aXQaKkMAxj26eqv8T%2Fyd1VXO6at5YiA6u8ejEH%2Fj3%2B9aSVgXVbyrgOgTQTylAsGeTSlO8LgmW3Ie5QWy6ggea6wiah0OKbyR2NJWwIXnpWjm6drnNpJ7AFYV6grxpTEs5hnkkMSzm9iGS%2FLgrmAO8dF5tX8SQ4iYd2PL1U%2BRkEoOM2ewoNjgt4DxoyKihfav3iEYsTxQO4xDltUWN3Af31WMjNzboOfl31hfD4FB7oDacVUmnXixeheLrXR%2FqPpbKVI0Nz%2FHzY3pIngrx61860FmOOYksI3GjjPH4o9XMmGrepb53VT2IsSn5d8dZIiyntTRd8LCV4A%2FEexfuEIz2ROzbQjlx5GnngVBDzOH7qGtvbtNcaRcKMMH1h8QGOqUBVxN%2FsItARKWX5fxJYPGL2YSye%2B1sl3YDEGLspU49nP3aNajBzPueb2ISmsXYk3ADMn%2BNtSB%2BqsbrtbwZumcc%2F%2FkfowgRBDcfPy4MBWQgywspYy4pds5E1Qvp4xBYYconXJqg4RU%2B9%2B5l2lWu3hIzflInBadpYXFNDTabhCuiBG1j36K3bcC00z%2BKoRjgo%2B%2BLYtOuObL1gtxsg5YYURX4ZlLn8WbG&X-Amz-Signature=62d83bdd4a065aa736a24b053dd6e7ba16e734294d1cbbfba62f41a15968a331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> ---
>
>
> cpp 에서 그냥 헤더파일 디렉토리만 명시해주면 되는거였음
>
>
> # 근데 헤더파일을 모두 포함시켜버릴 수 있음
>
> > 참고로 vscode에서 Folder와 Workspace의 차이는 [이 글](https://stackoverflow.com/a/57134632)을 참고하기 바란다. 
> 간단히 말하면 하나의 폴더 아래서 모든 작업을 할 때는 [Open Folder]로 열면 되고 
> 여러개의 루트 폴더가 있는 경우에는 워크스페이스를 만들어야 한다.
>
> 안녕하세요? 불친절에 대한 분노가 느껴지는 글입니다만 결과적으로 스스로 해결을 하셨네요. 저도 한 성격 하기 때문에 이 자리를 빌어서 학생때 이런적이 많았다는 고백을 하고 싶습니다. 되돌아보면 분노가 결과적으로 공부에 긍정적인 에너지로 활용되는 경우도 많았습니다.
>
> 일주일 차에 이정도를 스스로 추론해내신 것은 아주 잘하신 것 같습니다만, 매번 여러 개의 파일 이름들을 타이핑 하는 것은 번거로우실 것 같아서 VSCode 팁 알려드리려고 합니다.
>
> VSCode 자체에서 빌드에 사용하는 설정들을 바꿀 수 있도록 *.json 파일들을 만들어 주는데,
>
>
> ```json
> "configurations": [
>
> {
>
> "name": "Linux",
>
> "includePath": [
>
> "${workspaceFolder}/**" **<- 여러 헤더 파일들(*.h)을 모두 포함(include)시키겠다.**
>
> ],
> ```
>
> ```json
> {
>
> "tasks": [
>
> {
>
> "type": "cppbuild",
>
> "label": "C/C++: g++ build active file",
>
> "command": "/usr/bin/g++",
>
> "args": [
>
> "-fdiagnostics-color=always",
>
> "-g",
>
> "${fileDirname}/*.cpp", **<- 여러개의 cpp 파일들을 모두 빌드하겠다**
> ```
>
> 는 의미입니다. 이 설정파일들을 사용하는 방법은 아쉽게도 외부링크에 있습니다.
>
> [https://www.youtube.com/watch?v=UqCZda8DLGc](https://www.youtube.com/watch?v=UqCZda8DLGc)
>
> 여기 앞부분 설치 방법 참고해보세요.
>
> 박성국님 요약도 참고하세요.
>
> 박성국님의 요약
>
> [https://blog.naver.com/sungkukshawnpark/223167856926](https://blog.naver.com/sungkukshawnpark/223167856926) (윈도우)
>
> [https://blog.naver.com/sungkukshawnpark/223168149338](https://blog.naver.com/sungkukshawnpark/223168149338) (맥OS)
>
> 다른 수강생들로부터 도움을 받고 싶으시면 디스코드로 오세요. 디스코드에 질문 올리셔도 됩니다. [https://discord.gg/QkVU8QWUzS](https://discord.gg/QkVU8QWUzS)
>
>

🔗 [https://modoocode.com/311](https://modoocode.com/311)

🔗 [https://80000coding.oopy.io/4dfac992-da7b-490f-a957-6d86f81334be](https://80000coding.oopy.io/4dfac992-da7b-490f-a957-6d86f81334be)

🔗 [https://bluishhot-star.tistory.com/117](https://bluishhot-star.tistory.com/117)

🔗 [https://goodgodgd.github.io/ian-flow/archivers/vscode-tutorial](https://goodgodgd.github.io/ian-flow/archivers/vscode-tutorial)


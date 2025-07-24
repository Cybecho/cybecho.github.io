---
title: "VS Code C++ 세팅"
date: 2024-01-09T00:42:00.000Z
draft: false
tags: ["C++", "MAC", "WINDOWS"]
series: ["개발환경"]
description: "VS Code에서 C++ 개발환경을 설정하는 방법에 대한 안내로, 설치 과정, 헤더 파일 포함 방법, 빌드 설정을 위한 JSON 파일 작성법 등을 설명하고 있습니다. 추가적으로 유용한 링크와 디스코드 커뮤니티 참여를 권장합니다."
notion_id: "877b6f3e-0e2f-4285-bc5d-c174ff5e5110"
notion_url: "https://www.notion.so/VS-Code-C-877b6f3e0e2f4285bc5dc174ff5e5110"
---

# VS Code C++ 세팅

> **Summary**
> VS Code에서 C++ 개발환경을 설정하는 방법에 대한 안내로, 설치 과정, 헤더 파일 포함 방법, 빌드 설정을 위한 JSON 파일 작성법 등을 설명하고 있습니다. 추가적으로 유용한 링크와 디스코드 커뮤니티 참여를 권장합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cbfb64a9-d4b8-4c99-869d-eac3213cf0a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C46VFHT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIazqG33ozT0sFhV4V4oMfezLe4u8fdKGh4WDhEk3k4AiEA9W54Pk%2BXyww8yjf5keJ%2BBjmCtPhp7L3qTAVfQO%2BBIE0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGJa2RleyTbxwFrFNircA26Rbikry9q3H7vy27r0eAJxTDw8e%2BxU6Sxoeb9hYxKQXsqe6iu0BqBIIeYDATRoCbCFgq33ADHiYeBCAE1tKW36xGw53RVrxYK7o0q3aUsNwQT2GRzuYU%2F7pQB5T9eQKKOZaXjHc6%2BE%2F1Ksfis0HIkcWaKqlDLiIzXG5p%2F2t93xRj2pLRO6%2FEyF06R85kLsGMEIdwpecSa3ESptJjHAkcs%2BYfJSkr1rkMiYCmhsH5H0xOoZsD1ihT0QIEzVgN7jFqNkX0iM4ART0yedkzEFvSFJP2db04CnLF7rFNnhri2%2Bfz0JfZXnnbjLpB57xz8GCDewHRqmBoCBSF3VELH2PBg%2B8p%2FMzAHiF0QQmdRCQw%2FIYZLFc3CG3OF1zQg5BQC%2FsFu81zojn4%2Bzw6bEokvKs5zmRjWL9Fsd7td2%2BIzmfLhY3H7lXtKSt49TwFINLp6ZDUvMt1jkAvmE2XRW0eoLE5OPfqKB03paxYQCw0TJcCvBmEL23w2pzZHCaf0Zo6QJvjDMYTRjl5TwCzziF1NXPgadOzBPsXXv0Gnj9l4XJQ3clEBXLcBgY1qonCDKFckhcAIHGPFDSYgxS3klc6mZjJI2EtT%2BzZqnZCfDlqZZT54XPMl9HKiVlgvooFPBMO%2BbiMQGOqUBPzMHWCDp6cAO%2FJ8sPSEWxK6mCSow4aCs02NR4xI%2Bvr0su8LWWRzkkCitQynais4igO2Il3SuZrkmn%2FZaxPqaAvCzoH5%2BDR4QIISHcgaLtL3ixK7EL4S1yU%2Bw4J6o0Ky1HMwiQHMM0Cvw0bgZC3WpG3mLOq3dhzF8sxQbPFKRGp3J0cikgK6PYkJSJ6P1xePpZRKiPWUv52aa9p8fkETiYooyAgHc&X-Amz-Signature=5e7349f2eece4e6fab2668ae22593c0b837ded1816ae5a58e3604bd6cf49deac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 설치

🔗 [https://torbjorn.tistory.com/658](https://torbjorn.tistory.com/658)

🔗 [https://wooono.tistory.com/299](https://wooono.tistory.com/299)


# 헤더 세팅

🔗 [https://www.inflearn.com/questions/1075869/맥에서-makfefile-사용하지-않고-vscode를-사용하여-헤더파일-포함해-실행시키는-법](https://www.inflearn.com/questions/1075869/맥에서-makfefile-사용하지-않고-vscode를-사용하여-헤더파일-포함해-실행시키는-법)

> 💡 **헤더파일 포함 방법**
> ---
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/549032c6-e95a-4b85-bd22-f981081bd948/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZ5CMTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHKGg2KUrsz1hCe9KEBAjP7jjgseYeOgI7giXNrE8BE5AiEA6dT9fiS1T9Yh5fkqNU3tNlg1jZbOks8lXSX3p1UaNyYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC502lYpr9E%2Fi8AELSrcAxGbmpupLvlETFo%2Bp%2F7i9muD7HItKMZrnzDP6CA3nScAkKNk9W2AbJKyEkVzMJE%2FF%2B5N5SjzKMPWJhhctIyoUum7urv5iVhvFlSUMHGFWL2gRWRYHquuxtVW0oM%2BdJUnSLrKeA1UQtCskEUcTsvqmL0P458E3XmX61KjX6teGKNDzSSAJCXC%2FB86MLD2OimgK8abGQoI3ueXcJRYlgtx7fOuzmKA5aUAT0lNTSbzcl%2Bc8KGsz%2BjZzNQoyudNjK4jfoi3Kq2%2B1Oe9RcPcQ5Mx%2BhGhDHd8vcPDzSghhOTU1u2PTmYULFNiK095kOkFzbNekfsboRjqm0XqyoOWcmgP2UYuoVFZ%2FnpTSOGc%2BR9zifrZPuq9qk2LxCgRR6XqOBRm9SAdlG9kzpzOE3wPX4eW0XedltBdeR5ehlnVttrjvjRZ6ZnMyDxmr58CksOFuhbd1YLwD6SoC8rHARYKxsFrOFyvScMun5WdTz7%2BiRf5VlgXtI4VPriW%2Bcd0RLoOjI%2Bl8qXt4kCY3bXwu9n5zDs1Wdv9scZpwlMlnUZ3fyk7cdlF%2FiNcuKFriyPj6V46qXA84LcHE0JwLUaTsXolyDMknyat0zPJ8DYlpG78kzfS3AdpiZttU4ekg1E29VDzMKWbiMQGOqUBHpWgJtqBUUxVKnl0u6MAUkAgY%2BVMU%2Fjjm5SHnEMM1I8H6N2ay5EhGJH6X4GZRILMEI9DML5PEhBZB7KqXJuJYM8wFtL%2F1e8BXTiTLC68N3w%2BFHPa0PRIoyW6FWdi4m%2FxELr%2FJgG0ZpRCtuTz4z75tOi61jG%2BUmE7TCnxCIg6drvoGOrZZcHDLo5eP0asRudPfE5cHyYpmOvNu65Q1dXOROrF4trs&X-Amz-Signature=974e93298bb4aeadc5dd6e5f3196837a06068e6ebd5d3946f20f2249daa66fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 일단 이건 제 폴더 화면이구요 ch1.cpp가 메인함수이고, 리소스에 add함수(헤더파일 및 바디)를 넣었습니다.
>
> # add.cpp
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b222aff5-a8b1-4bb8-8edc-21bfc7e5294e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZ5CMTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHKGg2KUrsz1hCe9KEBAjP7jjgseYeOgI7giXNrE8BE5AiEA6dT9fiS1T9Yh5fkqNU3tNlg1jZbOks8lXSX3p1UaNyYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC502lYpr9E%2Fi8AELSrcAxGbmpupLvlETFo%2Bp%2F7i9muD7HItKMZrnzDP6CA3nScAkKNk9W2AbJKyEkVzMJE%2FF%2B5N5SjzKMPWJhhctIyoUum7urv5iVhvFlSUMHGFWL2gRWRYHquuxtVW0oM%2BdJUnSLrKeA1UQtCskEUcTsvqmL0P458E3XmX61KjX6teGKNDzSSAJCXC%2FB86MLD2OimgK8abGQoI3ueXcJRYlgtx7fOuzmKA5aUAT0lNTSbzcl%2Bc8KGsz%2BjZzNQoyudNjK4jfoi3Kq2%2B1Oe9RcPcQ5Mx%2BhGhDHd8vcPDzSghhOTU1u2PTmYULFNiK095kOkFzbNekfsboRjqm0XqyoOWcmgP2UYuoVFZ%2FnpTSOGc%2BR9zifrZPuq9qk2LxCgRR6XqOBRm9SAdlG9kzpzOE3wPX4eW0XedltBdeR5ehlnVttrjvjRZ6ZnMyDxmr58CksOFuhbd1YLwD6SoC8rHARYKxsFrOFyvScMun5WdTz7%2BiRf5VlgXtI4VPriW%2Bcd0RLoOjI%2Bl8qXt4kCY3bXwu9n5zDs1Wdv9scZpwlMlnUZ3fyk7cdlF%2FiNcuKFriyPj6V46qXA84LcHE0JwLUaTsXolyDMknyat0zPJ8DYlpG78kzfS3AdpiZttU4ekg1E29VDzMKWbiMQGOqUBHpWgJtqBUUxVKnl0u6MAUkAgY%2BVMU%2Fjjm5SHnEMM1I8H6N2ay5EhGJH6X4GZRILMEI9DML5PEhBZB7KqXJuJYM8wFtL%2F1e8BXTiTLC68N3w%2BFHPa0PRIoyW6FWdi4m%2FxELr%2FJgG0ZpRCtuTz4z75tOi61jG%2BUmE7TCnxCIg6drvoGOrZZcHDLo5eP0asRudPfE5cHyYpmOvNu65Q1dXOROrF4trs&X-Amz-Signature=636d7559a3ba65a6c46c0b5fd85306178022ed4e3f92ed52e9daaa4f4b0a6203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/180dbbf5-1af1-4d69-912a-05d7c20ec22b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZ5CMTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHKGg2KUrsz1hCe9KEBAjP7jjgseYeOgI7giXNrE8BE5AiEA6dT9fiS1T9Yh5fkqNU3tNlg1jZbOks8lXSX3p1UaNyYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC502lYpr9E%2Fi8AELSrcAxGbmpupLvlETFo%2Bp%2F7i9muD7HItKMZrnzDP6CA3nScAkKNk9W2AbJKyEkVzMJE%2FF%2B5N5SjzKMPWJhhctIyoUum7urv5iVhvFlSUMHGFWL2gRWRYHquuxtVW0oM%2BdJUnSLrKeA1UQtCskEUcTsvqmL0P458E3XmX61KjX6teGKNDzSSAJCXC%2FB86MLD2OimgK8abGQoI3ueXcJRYlgtx7fOuzmKA5aUAT0lNTSbzcl%2Bc8KGsz%2BjZzNQoyudNjK4jfoi3Kq2%2B1Oe9RcPcQ5Mx%2BhGhDHd8vcPDzSghhOTU1u2PTmYULFNiK095kOkFzbNekfsboRjqm0XqyoOWcmgP2UYuoVFZ%2FnpTSOGc%2BR9zifrZPuq9qk2LxCgRR6XqOBRm9SAdlG9kzpzOE3wPX4eW0XedltBdeR5ehlnVttrjvjRZ6ZnMyDxmr58CksOFuhbd1YLwD6SoC8rHARYKxsFrOFyvScMun5WdTz7%2BiRf5VlgXtI4VPriW%2Bcd0RLoOjI%2Bl8qXt4kCY3bXwu9n5zDs1Wdv9scZpwlMlnUZ3fyk7cdlF%2FiNcuKFriyPj6V46qXA84LcHE0JwLUaTsXolyDMknyat0zPJ8DYlpG78kzfS3AdpiZttU4ekg1E29VDzMKWbiMQGOqUBHpWgJtqBUUxVKnl0u6MAUkAgY%2BVMU%2Fjjm5SHnEMM1I8H6N2ay5EhGJH6X4GZRILMEI9DML5PEhBZB7KqXJuJYM8wFtL%2F1e8BXTiTLC68N3w%2BFHPa0PRIoyW6FWdi4m%2FxELr%2FJgG0ZpRCtuTz4z75tOi61jG%2BUmE7TCnxCIg6drvoGOrZZcHDLo5eP0asRudPfE5cHyYpmOvNu65Q1dXOROrF4trs&X-Amz-Signature=9c7b3d4392922d766c3651a2d87c900df3be1a4ba444d489990c7385e3a5aae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> # add.h
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7e956632-69ab-4f0c-a7bc-9c5d3aa7a30e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZ5CMTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHKGg2KUrsz1hCe9KEBAjP7jjgseYeOgI7giXNrE8BE5AiEA6dT9fiS1T9Yh5fkqNU3tNlg1jZbOks8lXSX3p1UaNyYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC502lYpr9E%2Fi8AELSrcAxGbmpupLvlETFo%2Bp%2F7i9muD7HItKMZrnzDP6CA3nScAkKNk9W2AbJKyEkVzMJE%2FF%2B5N5SjzKMPWJhhctIyoUum7urv5iVhvFlSUMHGFWL2gRWRYHquuxtVW0oM%2BdJUnSLrKeA1UQtCskEUcTsvqmL0P458E3XmX61KjX6teGKNDzSSAJCXC%2FB86MLD2OimgK8abGQoI3ueXcJRYlgtx7fOuzmKA5aUAT0lNTSbzcl%2Bc8KGsz%2BjZzNQoyudNjK4jfoi3Kq2%2B1Oe9RcPcQ5Mx%2BhGhDHd8vcPDzSghhOTU1u2PTmYULFNiK095kOkFzbNekfsboRjqm0XqyoOWcmgP2UYuoVFZ%2FnpTSOGc%2BR9zifrZPuq9qk2LxCgRR6XqOBRm9SAdlG9kzpzOE3wPX4eW0XedltBdeR5ehlnVttrjvjRZ6ZnMyDxmr58CksOFuhbd1YLwD6SoC8rHARYKxsFrOFyvScMun5WdTz7%2BiRf5VlgXtI4VPriW%2Bcd0RLoOjI%2Bl8qXt4kCY3bXwu9n5zDs1Wdv9scZpwlMlnUZ3fyk7cdlF%2FiNcuKFriyPj6V46qXA84LcHE0JwLUaTsXolyDMknyat0zPJ8DYlpG78kzfS3AdpiZttU4ekg1E29VDzMKWbiMQGOqUBHpWgJtqBUUxVKnl0u6MAUkAgY%2BVMU%2Fjjm5SHnEMM1I8H6N2ay5EhGJH6X4GZRILMEI9DML5PEhBZB7KqXJuJYM8wFtL%2F1e8BXTiTLC68N3w%2BFHPa0PRIoyW6FWdi4m%2FxELr%2FJgG0ZpRCtuTz4z75tOi61jG%2BUmE7TCnxCIg6drvoGOrZZcHDLo5eP0asRudPfE5cHyYpmOvNu65Q1dXOROrF4trs&X-Amz-Signature=2cd13f4f2af1d34fa375d096f8f84ec20c27538ff57437e919cc10c89842412d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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


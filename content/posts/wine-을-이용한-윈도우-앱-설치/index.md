---
title: "wine 을 이용한 윈도우 앱 설치"
date: 2024-06-06T06:17:00.000Z
draft: false
tags: ["ubuntu", "Debian", "Arch", "fedora"]
series: ["Let's Linux!"]
description: "윈도우 앱 설치를 위해 wine과 playonlinux를 사용하며, 카카오톡, 반디집, 노션 등의 프로그램을 설치하는 방법을 설명합니다. 글꼴 설치와 exe 파일 다운로드 방법도 포함되어 있습니다."
notion_id: "6d0d0331-75ee-4c73-8707-0be5d3d992f4"
notion_url: "https://www.notion.so/wine-6d0d033175ee4c7387070be5d3d992f4"
---

# wine 을 이용한 윈도우 앱 설치

> **Summary**
> 윈도우 앱 설치를 위해 wine과 playonlinux를 사용하며, 카카오톡, 반디집, 노션 등의 프로그램을 설치하는 방법을 설명합니다. 글꼴 설치와 exe 파일 다운로드 방법도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/12219858-1e91-4b07-820d-6a8b26fa6e41/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UDBRYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAOTgYZBDMLpBs6ER%2B3anYPo%2BpVA4zx51lFEwUA6duaMAiBfNjbVIQJ16GTdQMLWn7u44uQPLBzAgir6ww1G0tizLir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMeGylWHrEw7nAp0R4KtwDxhHZVuVAJE7Az%2FFczLD8Xep%2FObKQXHlPzf9kFBBs%2BH3rVOg0k3q19adwD6ZWcc%2FykQNrHvoHUo9Kykm3Ynh8%2BwvBYrJzbv7xT9eGb0r0Jcl9YwokjYJwcaGIh8DonUA6cqU5ykrEfiVycRVSD%2BCFthXZecIR87bGmXQ%2FjdMg29lGacpbL%2FWcHLpXB%2Fp2YFZ0N58i1GWTpdrTKgS%2BOLoaCFtlul%2FCKBwBrNoz3lDMgpurX0XP%2FUGqQdIVB7DWk3fLrrkD1Ehzuw0CERNvl9G1J%2BNr9HmkR%2BxtouqItI0LhtRqa%2FbU%2B7l%2BAqG%2BRaIuqL1mB%2FZcysAFCm4LNQDYo6jsBxxKUEWm01kGvpmzRW5RmiNP53Rl4P2g15lhK8dbJXuj%2FzkNYdwLLf7ctttqvbEYLte%2BqANn7qDkx%2Bn1IVPrl45ZdvN8Nih9TLSEkh1TKTRP6shIuG2YJjmCrQo%2F47Wk7wer4IoGIQJXVE94CMPz7bLz2vMEsTVEDSs7kuHuJPGUMVJa9zXtNLtEavtbMUvlT2FY60BNPSWBXDiKRiwVAqCULr3B91goxDBEP9Yzvsrd%2BgWGRdYMtNOHOnMtmL4xQKGBIDEGFTV%2Bvh56y%2FsG5X521ZrOw81bOtMX8iAwr5uIxAY6pgHgUh1V5dTWSQOUFPpOuKjl4eWTsjKQkLoaC7u%2BvZZVcLt%2BP9fS8XhB6iNTFt%2BbeXQnyEADhI1I%2FUlluE47BH2aULxdnchF3bTOASijvy1z%2BcjgcppsoeKy51%2Buh%2B%2FQMuTz5faPJwr9S3DS6OTDMwVvFao2S9e2VdoyhbQ6akyzaYQkq5dKs11mhm8d0WEak9bgNuXPtyIohHANttLwwLdX6NCHMuiB&X-Amz-Signature=32f84fa7fae6416b479a600a8661e3d3e0c45d11ffdf7ec5e3bc219399288e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://hamonikr.org/used_hamonikr/82280](https://hamonikr.org/used_hamonikr/82280)

[https://itlearningcenter.tistory.com/entry/【Ubuntu-2004-LTS】카카오톡-설치-1](https://itlearningcenter.tistory.com/entry/【Ubuntu-2004-LTS】카카오톡-설치-1)

[https://solearn.tistory.com/200](https://solearn.tistory.com/200)

---

## playonlinux 설치

```bash
sudo dnf install playonlinux
```

## wine 설치

> 💡 **버전관리**
> ---
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8a9fe72e-34be-467a-b901-4518ba752ab2/a38ce55b-ac94-4cb9-a70a-5d2086e743d9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP42MYXA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHduypYwV7G0nJ21aKi9qrAitTuKDUHn6Zdje%2FIIN0hBAiAvdAuy%2FOBwHr%2BUfAF3myUrcd9kvtwsealfoU75UBUk7Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM24lNUP%2Bgo4XCdaXsKtwDOcJ3vGhPFmNs759lK5zEEnSps7NZFIpxAsUf2i3Q4%2Fg542b5GeH%2BHCE%2FjwcWOkgzpSggG6v7mVZkvMzzOvVv6L3hP5Wg2yZOY0T%2Bd0fCPWDLG3%2Fyo7mj2bjW6o2lATGHSSLJhedzhWQBVzNzkSQwMjBMHx84zUYRrcFfrZtC4GvE0Bo8M%2BN6UOXr7OfWUh8bliLdagR0GODYdi%2BEnW12ZBjtZ1j%2BoqUeWgjV0aTRn6coX%2BRdN%2FDh%2BJoGtxHUqkqeZoo16G7ynIhjxBPpOdUm4gq2BWWjBYIr30SmqQb7WK4rMUeOi0FWJ2k%2FHp%2FwKdNSGuqIk3xnVt4Z93S%2BrnlUZ8vv9kwqlO5%2BM5WMyIUAkfYyEtyjuf6%2FwfoI%2FOjT5K0XTAQSiP8wxzRO9nlNLqUPywDcnnXmvTpjyKzsiiLz%2BK2vTbS4a%2BT%2FmtP6Rur0g77AQwT6d6DDpRBfTsWRtlHaZOR4An7SS5A3l%2FSgZe9zEX1yYMiN9xMAPCRuIARl2usvqQyB%2BMv4mynCrodk5XFo2P3CpbbDj0sIr4ZRSuepxrafHHKzn6DtVGLlcbeGr0glQmYkRWJFmCbfu%2FtWDVcz1%2BuuCUV73TWhXhmOL8zfh4AwQGwb1exqV6AoGJow1JuIxAY6pgHnuA89WAS8io4ke9O4rTfUj2k8fenrWioyHIJ4WTsGyB4RkLYJNoxhtwqbKwD%2BgQAMBdpxTuHW0A%2BJ9k0y%2BRZCQkRL19GkV%2BmJqyx2Th21bE1VgETbDZ9vlvvhmjlnGkAorwMPpPjSGxYxVmhDDyC%2B4kIiz%2FX5afUb%2BSMP5hjhblTgx5F6LMV%2BfWXTd7LsR0uLqj%2F4c0smwL21NVKeJQH0NLevcCaJ&X-Amz-Signature=ddbf2f6dd5bbc910e3f6a25f28940f26ce7aac6954f237e0ca21b6ebef099529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c83a31b9-6ef0-44c9-9c18-68d0434b16c8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP42MYXA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHduypYwV7G0nJ21aKi9qrAitTuKDUHn6Zdje%2FIIN0hBAiAvdAuy%2FOBwHr%2BUfAF3myUrcd9kvtwsealfoU75UBUk7Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM24lNUP%2Bgo4XCdaXsKtwDOcJ3vGhPFmNs759lK5zEEnSps7NZFIpxAsUf2i3Q4%2Fg542b5GeH%2BHCE%2FjwcWOkgzpSggG6v7mVZkvMzzOvVv6L3hP5Wg2yZOY0T%2Bd0fCPWDLG3%2Fyo7mj2bjW6o2lATGHSSLJhedzhWQBVzNzkSQwMjBMHx84zUYRrcFfrZtC4GvE0Bo8M%2BN6UOXr7OfWUh8bliLdagR0GODYdi%2BEnW12ZBjtZ1j%2BoqUeWgjV0aTRn6coX%2BRdN%2FDh%2BJoGtxHUqkqeZoo16G7ynIhjxBPpOdUm4gq2BWWjBYIr30SmqQb7WK4rMUeOi0FWJ2k%2FHp%2FwKdNSGuqIk3xnVt4Z93S%2BrnlUZ8vv9kwqlO5%2BM5WMyIUAkfYyEtyjuf6%2FwfoI%2FOjT5K0XTAQSiP8wxzRO9nlNLqUPywDcnnXmvTpjyKzsiiLz%2BK2vTbS4a%2BT%2FmtP6Rur0g77AQwT6d6DDpRBfTsWRtlHaZOR4An7SS5A3l%2FSgZe9zEX1yYMiN9xMAPCRuIARl2usvqQyB%2BMv4mynCrodk5XFo2P3CpbbDj0sIr4ZRSuepxrafHHKzn6DtVGLlcbeGr0glQmYkRWJFmCbfu%2FtWDVcz1%2BuuCUV73TWhXhmOL8zfh4AwQGwb1exqV6AoGJow1JuIxAY6pgHnuA89WAS8io4ke9O4rTfUj2k8fenrWioyHIJ4WTsGyB4RkLYJNoxhtwqbKwD%2BgQAMBdpxTuHW0A%2BJ9k0y%2BRZCQkRL19GkV%2BmJqyx2Th21bE1VgETbDZ9vlvvhmjlnGkAorwMPpPjSGxYxVmhDDyC%2B4kIiz%2FX5afUb%2BSMP5hjhblTgx5F6LMV%2BfWXTd7LsR0uLqj%2F4c0smwL21NVKeJQH0NLevcCaJ&X-Amz-Signature=54b39675043cc6a8172be995012ba1d8d25b1fb79d1d795e8af60a1bcc618f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **LANG="ko_KR.UTF-8" wine <.exe name>**

## 글꼴 설치

> 걍 굴림체 다운받고

[https://velog.io/@kiki3700/wine-프로그램이-한글-폰트-깨질-때-해결하는-방법](https://velog.io/@kiki3700/wine-프로그램이-한글-폰트-깨질-때-해결하는-방법)

[https://ko.cooltext.com/download-font-굴림+gulim](https://ko.cooltext.com/download-font-굴림+gulim) ← 굴림 폰트는 여기서 다운받으셈…

## 그 후에 exe 파일 알아서 다운받아 설치하셈

- 카카오톡
- 반디집
- 센드애니웨어
- 노션
- termius
- 점프데스크탑

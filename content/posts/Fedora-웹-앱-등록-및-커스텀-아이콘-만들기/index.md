---
title: "Fedora 웹 앱 등록 및 커스텀 아이콘 만들기"
date: 2024-06-04T14:29:00.000Z
draft: false
tags: ["fedora"]
series: ["Let's Linux!"]
description: "웹 앱을 등록하려면 Chromium을 사용하고, 필요한 확장 프로그램을 설치한 후 웹사이트를 방문하여 앱을 설치합니다. 커스텀 아이콘을 등록하려면 .desktop 파일을 수정하고, 아이콘 파일을 다운로드하여 지정된 디렉토리에 저장한 후 경로를 업데이트합니다."
notion_id: "0684031d-a50e-43ae-bb8a-c8d826bc025e"
notion_url: "https://www.notion.so/Fedora-0684031da50e43aebb8ac8d826bc025e"
---

# Fedora 웹 앱 등록 및 커스텀 아이콘 만들기

> **Summary**
> 웹 앱을 등록하려면 Chromium을 사용하고, 필요한 확장 프로그램을 설치한 후 웹사이트를 방문하여 앱을 설치합니다. 커스텀 아이콘을 등록하려면 .desktop 파일을 수정하고, 아이콘 파일을 다운로드하여 지정된 디렉토리에 저장한 후 경로를 업데이트합니다.

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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f16f8b2a-8db3-4023-bf4d-d29765b04d16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHCRBAR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCID1pyCHkW71d1fixBj8CNTIvfTT2Oh%2F6N6OU%2BRSCH9v9AiEA4HjPQNS%2BkE7i1dCUPw3KFRO9Yrd7JD18AxIXdo8F2nIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFVBwfKd6HiF1cTomCrcAxF2vh8kfsL24Otu0rTbN%2BEpeoXKx03kEZE5qWYd8pMYiZZZ8bnbR3htjjQLvaPjsw%2BwkuCD0RjZeDqIF%2FDLVD9GxVEugRG4P7%2BSK%2BvR4b69p7p7M1IaKMNf4MRPfNoCThUXMv4BuIOXGcwMyeb3aK2x2gjUgFZ36aKdZ%2F7b%2F0qTIHCmJOliqR3sDdcpMpKKEXpavuMuEKpEgPuxGPeGFvyC7NiUPrOBrpj05jAkl0b3WpakSyXTHKyr1%2Bvn2%2FNI2VHJFLW9z0aBDsLd%2BeMTNPLoHrm1SyEAXL4vImg0gGu28zugqHvhM5mfjIEhVr82q1XxyX9KEC7u0aWMBlGNivjpsfq7ohgfewnlFPkcS1Qm89W4qzNPubzNQKJNqby94aCgryJfoaGZjk3Bklnz3RohpSmYEwLwRYqapCeMXh1HWtXf5TBO7aKlf79A0uamaD6YEmWc%2BEFZ9MylFHEx%2BaPMAkr9ZAyBoM%2Bv8hiGhhbz1DjTfFDivlIc%2FUn79OwSbIzbdp2oVnnMNWww%2FTufStKqM5O9Cpf17si%2FkKQH3bUuUDrkc%2FyepLgOvYES91riWmxCMNlcud9k71s5tpF1eeoLL7G35%2Bt1Pe%2B6yO%2BrZPfab9eS53dAQn%2Fliu2JMI2biMQGOqUBs75X8iV%2Bzn3go0OIVGDXYwl%2BzJSemPIJrYs6RcOzpx%2FbWXMpvCueyUxS0o9X%2BJbc4CSL%2BujYhBF9KQC0TlD7LSqLXx6PC%2Byyob%2BeAFYHQ%2B6CqYFlx8fS35jtPFfc1Pi%2Ba1GlFmrSIzNZjAqjFJaZAskp6z9SJSOh1ZBvk3mHvpDFbQo%2BBP2K99%2Bb%2F7n5oLNRn%2BXVuByDkosaBJmbLWO5q1QU0mGi&X-Amz-Signature=67519c659412251651e45468474bfe088be9736a83ff146add11fa9f44560c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **우측상단 점 세개 → 저장 및 공유 → 웹 앱 설치… (바로가기 만들기도 상관없음)**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4293763e-7e86-4b17-ba2a-242da7bf7956/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKWXAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCOMPE0EL3UhTAFlawFCsVeQ7oNK1B3pTkITHHBKVr2DwIgNl1L1McsXbvu2b7a%2FqonIxNYHpj9dp2BfzHZz5uZXaIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDB%2Ff2w4D2KhiR5lddCrcAxbC37iFcbzOUT0Vzfw1fJPGwfJC2b7LfiB2v%2B2CEXGrFJps%2F%2FeTRr1DxId1PcNno9oYK80ARDhk2CgY5XlsprndHgkCAy58sN9kVf0c2iN6NyY1ybSXgJbfWKQWvscxC%2F%2BcxNrXAmuLe9senOCm8UUO7J%2F0Y2RVCtvbrBKOg1sk2aarw0sslGVZY7w6DvuNnnjWaBAE0DzOh9BpUpj8tkSqGweATML%2FrI%2BZ3twjHWbwosInnifj5OFZNewL5K0el%2B%2F8bILtu9A3SCT%2FlJ63PCkueXHmyFN5m%2FApSQ8TKBMGGOTpkCbBDtejOhLn7t4Df82dbRMCjlyJi%2F%2FeW1THMW%2Bap4oJRzXoZwIbbblzXji72q8kXGwb06ospANYb0OdJADKOAw%2BSNkJbUAwQCoz6aqsgpSAEWHbdu4rwhO0%2FwZqsJkHcttvoac2yeUO9bMS2lLosUgCheTVu4%2FQ%2FsXq0BUad4u5WGYgP3UrJPhFXTIvfTf195lABAdqGn%2BGUMUFTXfTAcXtOLxPRdaWoZBOGbNHWiGp8G2zB3Xbvz2PlYnCmkK%2Fgzb4nTYmeg9SfG4Rr25Y%2FSwz5TodUeyzm5BIc2acd9fAKmORB5elSWVl7X%2BR4nB2JRBPerSNxXMaML%2BbiMQGOqUBIkcmVhXGDDm825GPziVCXQTCVA74R77TE4AElepMmlvBg7yAcsZ6aXcICwZrgebDLPxwge6CdXm%2Bc3WQmxB7CTwVVLcbD2U5Gq8EPpyqshlGFktVk8ekvNV7OovDJHqsv5ppGpCUcwhcKrfnpvvqTwtnlYaFcVG4pLXmH1wBDD6F86aeqK8mx41D4KB6iDC66kDxvfRg2BVeAl6nXYFiBn6bmJ8c&X-Amz-Signature=f2a2ad6cdb6ddffd2e81e44553e0aa3caac9ab718a8a3ccfa1021e876746263a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/238c85d5-c5a8-4b97-85a5-cb9691016879/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKWXAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCOMPE0EL3UhTAFlawFCsVeQ7oNK1B3pTkITHHBKVr2DwIgNl1L1McsXbvu2b7a%2FqonIxNYHpj9dp2BfzHZz5uZXaIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDB%2Ff2w4D2KhiR5lddCrcAxbC37iFcbzOUT0Vzfw1fJPGwfJC2b7LfiB2v%2B2CEXGrFJps%2F%2FeTRr1DxId1PcNno9oYK80ARDhk2CgY5XlsprndHgkCAy58sN9kVf0c2iN6NyY1ybSXgJbfWKQWvscxC%2F%2BcxNrXAmuLe9senOCm8UUO7J%2F0Y2RVCtvbrBKOg1sk2aarw0sslGVZY7w6DvuNnnjWaBAE0DzOh9BpUpj8tkSqGweATML%2FrI%2BZ3twjHWbwosInnifj5OFZNewL5K0el%2B%2F8bILtu9A3SCT%2FlJ63PCkueXHmyFN5m%2FApSQ8TKBMGGOTpkCbBDtejOhLn7t4Df82dbRMCjlyJi%2F%2FeW1THMW%2Bap4oJRzXoZwIbbblzXji72q8kXGwb06ospANYb0OdJADKOAw%2BSNkJbUAwQCoz6aqsgpSAEWHbdu4rwhO0%2FwZqsJkHcttvoac2yeUO9bMS2lLosUgCheTVu4%2FQ%2FsXq0BUad4u5WGYgP3UrJPhFXTIvfTf195lABAdqGn%2BGUMUFTXfTAcXtOLxPRdaWoZBOGbNHWiGp8G2zB3Xbvz2PlYnCmkK%2Fgzb4nTYmeg9SfG4Rr25Y%2FSwz5TodUeyzm5BIc2acd9fAKmORB5elSWVl7X%2BR4nB2JRBPerSNxXMaML%2BbiMQGOqUBIkcmVhXGDDm825GPziVCXQTCVA74R77TE4AElepMmlvBg7yAcsZ6aXcICwZrgebDLPxwge6CdXm%2Bc3WQmxB7CTwVVLcbD2U5Gq8EPpyqshlGFktVk8ekvNV7OovDJHqsv5ppGpCUcwhcKrfnpvvqTwtnlYaFcVG4pLXmH1wBDD6F86aeqK8mx41D4KB6iDC66kDxvfRg2BVeAl6nXYFiBn6bmJ8c&X-Amz-Signature=09ce03603ddc2646c7e4ee1107a281d6d641d58f5553880469f0974793cb9adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5cc6499c-d532-46ba-8313-becc7b2a823f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GQEAPL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFFB3EY7HCmuaayOJI2l0lWqHAPpSyszeiOJbPdNfZklAiEAu9VLxfdm6bh7reaJQhgwcBfnXNasNMHLTVO%2F77MnySQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLu2R2XkJ7KjgLs62SrcA2WtFAMcEyh1B67bTmA4V8CWA14pGdskIR1s%2FqrCKR2mvLjv%2Fr2bcuWeb5Rpv%2BTyfAzKmD7a%2BNW2ldxzesvYfiEUg82nNm2Z0YkZ290vus4q1d51fetXUCWKBGsM9NM%2F4JPm5%2FngP2Bya79OExXvYg1Mozu2x8OMtyXHHvkFuROS0pmIyFFn6X0asJIKQU4BSfdiGK5pOI85vytu069zmOaN7kKswfT4zNjC9sLO%2BHYCdW75GwChVNQ56srII2RomMDrUQz19VEsTDD6znF1AdMdqDSnuAdAwCJRfuxri%2B5uIrQbE2FHhFPQRdfUpK0apEjMSDzCI1YH%2FFZKkkv9Lp32CpDj%2FISu5Txb3329myvAxE0fxrhV9796vGxMVw%2F3iI6ziDcBEA%2BTMR3nSF6X7b9sxMpiSi1YXT67JkOeiNO3D1bAd3Y6epPJh7AZ%2FxrCaKxPUFm209yuAakTUxUqxACCdGoomonQnkp20MFe45zWY8unM1dV4lVd%2FxwIyGgWhmCjV%2FV%2B%2BzE6qnotis0HiDUnBImM%2FJMjre2Pvs2TaYuidtwc5clZl9QaM9g57i7mocYYH%2BGHe63sU9jJR9xbEvakxU2evmxv%2FPHk7IQZjaewaTwpEPN3TJau%2FUXqMIabiMQGOqUBAzsow0B%2FVcaVS4YVOyLhlItf%2FXLOez5VaEIBr%2FIJu%2Bo97jzGJNIYtnWxXBmXMUVapBsHOJD%2BxXHesQnRIoOw96dhBBKraICPUYjjDuavqOpOgsNszZ9V7hA4TE3PmsenfusvxbZzY4O3tQTJk5dPoWGsA1RRcI83XWcUMR%2Bz2LIpOB0l8jQmthVhizF17CQvQODCQYCHuqnIIRrd3RaWqIQMENfW&X-Amz-Signature=382899e671c6e0f202304c5359dbd2ef21c861d5278ef20d5719eb6c0bcfcde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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



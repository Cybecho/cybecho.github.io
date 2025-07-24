---
title: "유니티 로그라이크 03"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티의 새로운 Player Input 시스템을 사용하여 플레이어의 움직임 로직을 구현하는 방법을 설명합니다. Input System 설치 후, Player Input 컴포넌트를 추가하고, 입력에 따라 이동 값을 설정하며, C# 코드로 플레이어 이동을 처리하는 방법을 다룹니다."
notion_id: "d531dc12-ab05-40a2-b2f4-0136913bd252"
notion_url: "https://www.notion.so/03-d531dc12ab0540a2b2f40136913bd252"
---

# 유니티 로그라이크 03

> **Summary**
> 유니티의 새로운 Player Input 시스템을 사용하여 플레이어의 움직임 로직을 구현하는 방법을 설명합니다. Input System 설치 후, Player Input 컴포넌트를 추가하고, 입력에 따라 이동 값을 설정하며, C# 코드로 플레이어 이동을 처리하는 방법을 다룹니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=tKMnVBTes0M&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=4)

> 🔥 ****기존에 유니티에서 제공하던 Input System 은 구식 방법으로. 새롭게 유니티에서 배포하는 Input 패키지를 설치하여 더 나은 방법으로 플레이어의 움직임 로직을 구현합니다****

> 🔥 **Window - Package Manager 에서 Unity Registriy 이동하여 Input System 설치**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a770c011-34c4-49d0-9576-9cc60cdb84a4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQLQVPO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBpv6W%2FozPUPQDh3L7DGSsmTA6g1Kx2QxteKhcguaM4EAiEAgS6FXCfvmssx%2BcQQhvTwNJ%2FvqL8izNJHYbXbxih%2FaMIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLkDFSmaV%2FVeAx46HCrcAzp4SR6CaDENRudIKz9lNJCZkp6Z5hiz2txTZhJN%2FByyaMQNsHLyQUTZireYK6eukQusvpeQUYIs63dkD%2BrbfMm%2B%2FE2kYAziLeecQqtaHa3LfvOrTlhHKDD1T6T73pl22xnBaLwSkpaZzQYcawnezd7TEEBeICMhDrm2GBzjYS7NGbPkNCIvQ6PKK3Uta6J9vyUrrIMJc9RAqiQHQ0kReM3ASoiezxKIk%2BKqy5cIINQUovv7%2FHFYKDzczsDB8HBtrO7bgoOd7%2BnWT5QK9Ty27WSTBmV4dmtb7Kv%2Fu6gs4NOzbH03i8IiT25FjlrzgTAzOdJ%2BqQlA8tl%2Bp3VEIXRk4luLH%2BjtEDjQeOSDcVIJl4kcvsKOzqfZLWVxKNhB%2B2vjM4J91Y5nZATI%2ByQvBjGLanE9DCIVpLKh6e%2F8gPILTR0%2F6H6KuvPqvwygpfeq%2B%2BC8UxkvggVDvJ3Hf6X%2Bl%2B75tvOu7BT%2BV92HXZOukVeBwRLAvHInjaTenH66LNoXAXBq%2BZ5x5d6H26rzY%2BrkbB6%2FMLpfK12dbeUl3gl1NMHIkF5SIhiPr7RofBJK9lDHnL7JY8dOAFtz79gTHfObqwkVn184M%2BQKQ6K%2BAkjqFScNi3j2z7XHADdobVDidydFMLn1h8QGOqUBfbvQwnxSCPiwlT80yHOLUy8LN0WU%2BqkBFnHtW69QBLR%2Fs8KnwwtTU22FTgY0eCIAezQbPArn6dR7IRL%2F7RvXPXWzUTfSXlT%2FJ34lDO9AF%2FoKExebfFhI75smnBHDdYMvjYHeolQXOWOatQKE0Ojm1OfmDfObijHJ5zwRlr22GzmT1bYmlmLyh8yPhVKpxvj3Z3v6ercGAv47JC%2BPe%2F2HHX0elq%2Bk&X-Amz-Signature=a8e454b5b209c885ca4cc7eada7714e8e46204cdd1b2de98525f55c6b552ff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/bac51931-b857-406e-83e7-3fe09e221353/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQLQVPO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBpv6W%2FozPUPQDh3L7DGSsmTA6g1Kx2QxteKhcguaM4EAiEAgS6FXCfvmssx%2BcQQhvTwNJ%2FvqL8izNJHYbXbxih%2FaMIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLkDFSmaV%2FVeAx46HCrcAzp4SR6CaDENRudIKz9lNJCZkp6Z5hiz2txTZhJN%2FByyaMQNsHLyQUTZireYK6eukQusvpeQUYIs63dkD%2BrbfMm%2B%2FE2kYAziLeecQqtaHa3LfvOrTlhHKDD1T6T73pl22xnBaLwSkpaZzQYcawnezd7TEEBeICMhDrm2GBzjYS7NGbPkNCIvQ6PKK3Uta6J9vyUrrIMJc9RAqiQHQ0kReM3ASoiezxKIk%2BKqy5cIINQUovv7%2FHFYKDzczsDB8HBtrO7bgoOd7%2BnWT5QK9Ty27WSTBmV4dmtb7Kv%2Fu6gs4NOzbH03i8IiT25FjlrzgTAzOdJ%2BqQlA8tl%2Bp3VEIXRk4luLH%2BjtEDjQeOSDcVIJl4kcvsKOzqfZLWVxKNhB%2B2vjM4J91Y5nZATI%2ByQvBjGLanE9DCIVpLKh6e%2F8gPILTR0%2F6H6KuvPqvwygpfeq%2B%2BC8UxkvggVDvJ3Hf6X%2Bl%2B75tvOu7BT%2BV92HXZOukVeBwRLAvHInjaTenH66LNoXAXBq%2BZ5x5d6H26rzY%2BrkbB6%2FMLpfK12dbeUl3gl1NMHIkF5SIhiPr7RofBJK9lDHnL7JY8dOAFtz79gTHfObqwkVn184M%2BQKQ6K%2BAkjqFScNi3j2z7XHADdobVDidydFMLn1h8QGOqUBfbvQwnxSCPiwlT80yHOLUy8LN0WU%2BqkBFnHtW69QBLR%2Fs8KnwwtTU22FTgY0eCIAezQbPArn6dR7IRL%2F7RvXPXWzUTfSXlT%2FJ34lDO9AF%2FoKExebfFhI75smnBHDdYMvjYHeolQXOWOatQKE0Ojm1OfmDfObijHJ5zwRlr22GzmT1bYmlmLyh8yPhVKpxvj3Z3v6ercGAv47JC%2BPe%2F2HHX0elq%2Bk&X-Amz-Signature=f788ddb7a986dd93aa17ddb6c34c753d8d0adca577688b1ddd2bc5f21568dd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **설치 후에 컴포넌트 Player Input을 검색하면 새롭게 컴포넌트가 추가된것을 확인할 수 있습니다 **
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ad3e63d7-2e94-4a29-b39b-0b3acc3f6591/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKYCKFBL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCoC2mVRV7dUkoP%2Fz3WGxMkic%2B%2BecmJhBgcwD3Fi%2BbeWwIgVN3qTjFPrkllFCOnjsNPStQJgq6KWSI7JHz3CbsNo4Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjilVYiimJZr88ngSrcAxHWlJV8W7NuNoBc4ajgoyY7qjnJ9qHxI7qgiu3%2B75ZRYWHs%2FEojQQjxILhMCq8OKhglhbcOgiYP%2BgC57NgDQT4dTEvBUM89D77CAAJuoDbf7XNxI%2F1ceMixdfu25gXPAeX6i0MW8vb5RRCE1eZt%2BHyzpTLxgv%2FGAFl3%2FCdQFEtkNDMHpniwEun%2FXJgHvNSgll2kwBBUZ7d5G1Q5DrILq3U%2FGfJKAdAUjt1176k6k5moaZgzp4FOGxV%2FgBfUpokyHBz%2FoNFHGna6krnA%2FD7TR0hODIW9nOGkUwfy7wfMYpHL7u7fCgd2t1FjVEsit2dtfksz%2FoYxLH03NKfhgMpAhDuJkFJDTF5ZTxM4D%2Bbc0PMccsDesZH9QJvkESmZqiRptc%2Fzm35urXPGiJ6UlTBHHXeeUoIqb0Sq6VPmDnGR7d3O%2FnkVy8gc0yWerhpvQImx3bxKfFre10eXgGldOxz9oc%2FCFnSOKzQarjjJpjXSuYZ8RJ0Pb4l3CJbsGP1pNy%2FY5OfF2aG92X%2ByvZzzU6UR59xVjmhDH3xTVpkQRZt7RUbn8YFTFS717TDNX2PwPCUldjFoFVn7WvJO2MeFwAhEl1WG%2B6E%2BtCxnpB9mdqty%2Fs6xThlhAbWcgDW%2BrbaQMJ72h8QGOqUBkK7SLicNsXSKZ2GqGvqUvA5ceeyfnbYxD3IGwFmfoVn%2Fsr4i%2FtADBxzKMxzI9vu1MYYDtuYmEhQ3%2Bygnp028DByxOfMIGyJSsovoR5ghZauFfkIvLBMctTy3xK9qt1lPTbCPhpCKwQD84%2FxZR8E9AJNyroLjUdRx23a5jkacrAL%2Fi%2F3uTMnMvuiKsWHYalQx4%2FBOnb4UDRFh%2F1wZTyCGrbaxO%2FSm&X-Amz-Signature=1ce7316f05854206035b269d3c904a5964f160540482b6029323330c062e588c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> Create Actions 를 해주면
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4a6d49eb-9f09-4956-b79b-e6fa619a6e91/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKYCKFBL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCoC2mVRV7dUkoP%2Fz3WGxMkic%2B%2BecmJhBgcwD3Fi%2BbeWwIgVN3qTjFPrkllFCOnjsNPStQJgq6KWSI7JHz3CbsNo4Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjilVYiimJZr88ngSrcAxHWlJV8W7NuNoBc4ajgoyY7qjnJ9qHxI7qgiu3%2B75ZRYWHs%2FEojQQjxILhMCq8OKhglhbcOgiYP%2BgC57NgDQT4dTEvBUM89D77CAAJuoDbf7XNxI%2F1ceMixdfu25gXPAeX6i0MW8vb5RRCE1eZt%2BHyzpTLxgv%2FGAFl3%2FCdQFEtkNDMHpniwEun%2FXJgHvNSgll2kwBBUZ7d5G1Q5DrILq3U%2FGfJKAdAUjt1176k6k5moaZgzp4FOGxV%2FgBfUpokyHBz%2FoNFHGna6krnA%2FD7TR0hODIW9nOGkUwfy7wfMYpHL7u7fCgd2t1FjVEsit2dtfksz%2FoYxLH03NKfhgMpAhDuJkFJDTF5ZTxM4D%2Bbc0PMccsDesZH9QJvkESmZqiRptc%2Fzm35urXPGiJ6UlTBHHXeeUoIqb0Sq6VPmDnGR7d3O%2FnkVy8gc0yWerhpvQImx3bxKfFre10eXgGldOxz9oc%2FCFnSOKzQarjjJpjXSuYZ8RJ0Pb4l3CJbsGP1pNy%2FY5OfF2aG92X%2ByvZzzU6UR59xVjmhDH3xTVpkQRZt7RUbn8YFTFS717TDNX2PwPCUldjFoFVn7WvJO2MeFwAhEl1WG%2B6E%2BtCxnpB9mdqty%2Fs6xThlhAbWcgDW%2BrbaQMJ72h8QGOqUBkK7SLicNsXSKZ2GqGvqUvA5ceeyfnbYxD3IGwFmfoVn%2Fsr4i%2FtADBxzKMxzI9vu1MYYDtuYmEhQ3%2Bygnp028DByxOfMIGyJSsovoR5ghZauFfkIvLBMctTy3xK9qt1lPTbCPhpCKwQD84%2FxZR8E9AJNyroLjUdRx23a5jkacrAL%2Fi%2F3uTMnMvuiKsWHYalQx4%2FBOnb4UDRFh%2F1wZTyCGrbaxO%2FSm&X-Amz-Signature=9c8abf1f2ae5511b773de47249e60fb2541baf2e19c13e8c26b2ba9bef8620a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **Interactions에서 Input이 어떻게 눌렸을때 Move값이 변할지 설정할 수 있습니다. 기본적으로 Press 즉 버튼이 눌리자마자 값이 변하는 형태입니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6e37ead2-212c-4a77-b402-52d00485f486/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDUOYRH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDGzrSWYTv4DvehPLvoYIHoewf86%2BWebfjdlwKjQGjipAIhAPTysrYJKs1CSRGjH7OZADd4eejXkUXjAdlUbrLfhlYIKv8DCCoQABoMNjM3NDIzMTgzODA1IgytYQc19520%2BZ0Ntwkq3AO6943bPTPUiqu9Y%2B4tQDhCncdi8L2fYrSaF6h7EjYr7WAJmR7U8ZgE%2FhlF5LL8Ikln51PyVZNZl9OYTmMyF611wEJ2f8KnF%2Ft7AwGokEnpjbJ0KygPOG77%2BFYfAk82Timcrr0bl3YBrFP8ABt%2BHeo8d01AhZfVtm2d1myRUojRNYUgoHnE7ybEZpcQAVgzJcdVxZXM4dvBmvtvdKNkXjoKffAQOenCSkheRUy34%2FSF3AaCzvQGYfJCz7bEgrT%2FVLC6f%2Bi%2BrrhW1WTu%2Btv%2FrnydKjjRbq53Kp6nGynhlx8raPbOSOG9vFw8aO1ZaEjQOQlKU0VxsVEmVosxCpoS3MgSuYGYvNYnxVPcozE5sI8TlAcA7WMsDBO0LUt9Shac04aDskBsxdioqU7zn52%2BKMh%2BOVj8DmBBAu7K1ZjZ6GRohW6kRVJXgq2yU7TqwU5BWDG0r23uawz%2FJ0C9fAA1fQaZU%2FHMd6fpR%2FSjggmY6CXrgmmU0VnHkEyr3yOVPxm0gvwTgY1MabTOfMvxPP1kLFhLG3F5xPqPtmnlRikTXBuP0ntKvsvI%2FQOCJF61ELWU3k0TMpmK3%2BRyf3lbImgFhB2HqkHQQcndWnJXZnmBRj5etEwSeLfElrDvtnXuTDCn9ofEBjqkAdyOGk90wqqqparjmW%2FYrmNf0CEt%2Bu46h5OUgaeEm%2BAYmJKnZtgVaJ%2BB2nhC%2FpsDTmTud%2BG1ehIbuzag8nlviSqyOB6ScR1SJmHNP95NmJh6ywuhCpsw6zG9kHacWVAm69OMlLabE1nuRJ9GPuc7KZjIhyXcI7PLpXAU%2BQC%2FwlsfUr3vEElVgL0en3Rep4koiVnF5DXxz2CrikYFM%2FIJzXuNabjg&X-Amz-Signature=d0838f5c8bed32e970cd1f2c5e72356380fa576a49146a60b67899391099628e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **아 그리고 저장도 잊지 마세요 전 오토세이브를 켜뒀습니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/45263ced-499f-4dd6-b5b7-5f7a1fc55136/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643FZCDLV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGQ3ipgcof8d%2BMdElmT9I7HEd1bJh5ESma%2Bda%2BrQ%2Fy6ZAiATPkh6rRgBJPXvz8yK8V3B9YcFClgnA%2FdPX0pMPWPntCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM1u9hQ8tiu4VwzMb4KtwDXu341NxbByzBGI%2Fewh36lRxmQlstIfQcoWlMX97FgieWv7VT7FwQ5WfFu2Y0zYKKKfQztTdEsf5%2BOIvqqJ7p3Yv2nc5ozq2eW7cPksaoqAHxELJgy2Qk49bh6t25hU0lfGyl49jSrJ8oXXggjk29mEJbSiTUlgH4lRZPu%2BG1ncD8A%2F4qT1y5w1fj6sSNTLgMiS8W2cdXCY%2FQE7H11Z08mC9CV0z7nT8briSKP%2F0tEF4gSNA%2B3P5KwkLrkPWLqGCd%2FKg8RNDZ%2BlbbKAm0P447AbRnS8QrZ3TklqSv1SSNTvkCPbqk4%2FP9IVuiai2jKJxiN5jNOWsH%2BdgmVdFQ5PEMq6s1TlgtSSe%2BPdrY%2F83pbYEacah9wUra41tK2XdMIO4kRe5aGleu49rGoCRYqbaly0q9kpWjjg77Elx94WfzH%2F%2FvZakm6nzqF%2BwcjQL%2BODCaBKn9eUCxiZCpdkNtAcSLSmyZqCoItmIpQq3HAbes%2BBPSEZi6HBj9z%2Fs97aqouIEUTJnAJE%2FV6DDpadD50cziy6bG3FSbaSdYI8KLlu7YsamqDfxc0Mv3OXda6%2B3eEfKLLqsfefN4lbNMVCuNA84sna0Pkcot0vZg7g%2Bti9z0PfdiShVGlm%2BRs49YOaMwivaHxAY6pgH%2FnRBP8OrSPQKUE9enpAEX6Ok34FaC9Lh2%2ByABtB7Jp2HypzjRA6ybzof7ybkHSZmQE5yiRf1xtjsJ7V9mC%2Btcu4lHQWZZRiGCdlR2B6ZnzpXzRTEvJjxLWSbohbQ6WTMO8%2Fwo7P9bV5pvP6qpJHW8qtYxjLSjsg9GpXX2a494SelMQSzLCV4L2qKa0UmIVju46apOWJZjI3MStsIEN6Fyk9unwpci&X-Amz-Signature=64ff1654b04512b938538c30ba4cb7563cf23f4331ff1e507d9affb9ca362165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **그리고 Player Input에서 제공하는 함수를 참고해봅시다. Vs Code에서 자동완성 기능을 지원하지 않아서 참고해야해요**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c02acd3b-be9b-47bc-84f8-92b03030906c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDVGJME%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGrHrZfgpP8W2gjqPAaMxzvISlgRBRREA4cyYemWcV2iAiB0z5m4e8mtasircbCWJtKajhzS2GX4q%2BY%2FzSCeLkAwjSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMPF5%2FJYVFH7TFtKdbKtwD0zcJWIdIjodMSq8MQ76yJCB4kizY6HyrHDcKeOoKoVSJK%2FVdZ8c9aC4y62IEIcer%2FLyI6ohEZz5zCPY1rDp2aKxUegWgKhu2GeSmzMulFLLRzYHn4a4DKRfVU4XFmaLEFNJPJ8QpHW7rusZL3%2FJvrYcWiIIe%2F4a8FpRdwrQTFAYaeCiP7sYUYt1AS2MijlBQZ8dDigvoHd30EWsNUsxKgyhWpIcHddb9xqCIetY%2FG5R%2Blhr1wgx7gT2oxXKhDFP5rwRTraFZqJAvPCG9dso0%2BHyHnqpObrXYlQ%2Fdg2nf4xfQSsSUuZSkoiLmkZ3Q7V561xTndDBRfgnuAm7b8VHJu2d92EkDQEBx0l15naJR2XcEa0ojM%2B8gy9fQ3ETykkqjGoZW%2B8NGhmRlrHyZR6IbZleh0ufOJlwrJLy3DRKe4dA%2F0awrxru%2FSngyIYAn9dkwZq0aVva4mq8nkBALEwsmyLZeDM4GLWQPqoSC%2BujaJ7CZnSPeYj%2BzHdViZYgmbDao984erOZQV1a43QuYyHGTJZvoIS9RsQQnlCLZt1GdE8zswqJupfenzM4%2FWvT1nzX9OP%2BO18Wxg17c5IpyZWvgOVBX4%2Bl0vEes1K3HesdSdHVHIZid2adGf%2FzJKNQwu%2FaHxAY6pgGif0G%2BVJ9RMl5MrFHBFRe%2FT8I07%2B3tuMbY%2ByFmsOQkCbl0RsmSx%2FUMLl8MV4oV4rM8QrNcEvRpPBuL%2FgpMHsSwZmizizOvwLI5ueevQqJeTB6Ui1KXx6wwjjBbRYt3hGHW3CQTUuxTq96yCxUS8FtQznKbPPlsrhVtveHYfp3NiIpB1vscTSclxFjEcbr%2F%2BLG1bAVaeuE%2Bevu3w6cm6jeMnEhWCzcm&X-Amz-Signature=8c7906fec4868fee30fe48dee95e4e499a536addc4334081300d2e045e606d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

```c#
//Player.cs

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
**using UnityEngine.InputSystem;** //새롭게 설치한 Player Input System 을 사용하기 위해 임포트

public class Player : MonoBehaviour
{
    public Vector2 inputVec;
    public float speed;
    Rigidbody2D rigid;

    void Awake()
    {
        rigid = GetComponent<Rigidbody2D>();
    }


    //FixedUdate는 물리 연산 프레임마다 호출되는 함수다
    void FixedUpdate() 
    {

        //어느 방향이든 벡터값을 1로 고정
        Vector2 nextVec = inputVec * speed * Time.deltaTime;

        //위치 이동
        //MovePostion은 위치 이동이라 현재 위치를 더해줘야함
        //이 코드에서 현재 위치는 rigid.postion 이다
        //인풋값과 현재위치를 더해주면 플레이어가 나아가야 할 방향을 계산한다
        rigid.MovePosition(rigid.position + nextVec);
    }

    **void OnMove(InputValue value)
    {
        //아까 Player의 Input Action 속성의Move - Control Type으로 설정했던 Vector2 를 가져옴
        //해당 라이브러리를 통해서 벡터의 노멀라이즈는 이미 설정되어있기 때문에 기존 nextVec에서 normalized는 빼도 된다
        inputVec = value.Get<Vector2>();
    }
}**
```

> 🔥 **해당 라이브러리의 함수를 이용하면 기존 방법에서 사용하던  노말라이즈를 자동으로 적용해줍니다 아래 사진을 보면 대각선 이동중인데 가로1 세로1의 상대적 길이를 계산하여 (2루트) 대각선 길이를 상대적으로 계산해줬습니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/68034152-275b-4722-8dde-e2b64b51851b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WS5AF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHzfYcWXgOUTMtylTcxekTnlePQopqkl24MGan3WCx3GAiBe4DnjdufAuwhUyYEx6w8LoQR0mZU%2BzLK9Gr6ipp9mbir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJaCIyXg1XQBdUYRgKtwDq0AHZRNtfnXFX%2BTdPgql5x4wGPEK9kzygCrI%2FH0Q%2FsgXvykjLZI4p9TbvUTJAj9LCCPfB9mwEFwHoxoKeUoDp68W1oLjo37LWP23%2BFVoIsm5hteki97VuUnntn8CE7WEztDxwNhe9hJ1XQ1BjCcowmbY7vDml53DwtXzW5LDBrIgd8RZYnSidw8aKW5ehlk2J7UXdxE5YrLzhnNRZrKA6TPycm53IiGeJZ9btjbnEo5RVfGEQ8VuMqDLXq84x6c43B74uS8T0jdkzqgeN59LXZ31oEO4ZslUn0bEDT1QmEWzmopZFn8Ev6max1R%2Fn%2BiduwZMtHVmvKXUXiE1W8lVfygD1ycsWHw3PB4k9Y6sqhsKt9nbMzhvrc%2FCrgvOQRfw9TqxEtXo58Z2v%2Btc8cYFGd9eM56NISMNk6ir%2FzajUZdzgbnRHr8cUjaalouDvFzYsBVB%2BW4ZFjmwXH3ZY0AhssbK3jy4Puu6znKDxHs87EJVsDAJLUqLv6%2Bm99bRSHQzAfOXHdtzI444agWtNJYwDpZ8G%2Fe1grk3QTsUexxhoalSptD5LxnDMTivU4aJ6%2B8eqFa04xKeXGgVD7cyNrPHFPxT%2BGxXtRLW5isxjqmEToqdtgpINO%2B6iCf9F24wnvaHxAY6pgEi91c5Sapfw6gCJoQb%2BxeJ9akz7O35oMEHJ5aeotHb%2BBdMmgUe8iMTYkXSllmnRjLJiQzg0rSpx%2FAYOdx%2FXlmqIpW0CbKgbbjMFxV%2BdkGe22629wxJjS7f2HgyiBPjz4ywImg48Ck6AjZ6AH%2FP3d3%2F87lEvckX00v%2BrMlPLrW%2B9Bt4tp5kHV9c1Rdcj%2FmvrsEIiZepIHA%2BWnIcEQzNJxZl01o%2Ffryg&X-Amz-Signature=d273fd1351509c8081fb3d33738793d6ef144bf5762b039584e34e437422ea2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>



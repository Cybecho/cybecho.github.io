---
title: "유니티 3D게임 쿼드뷰 09"
date: 2023-02-17T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 게임 개발에 있어 적 AI 구현을 위해 GetComponentInChildren<>();와 NavMeshAgent를 사용하며, NavMesh 베이킹을 통해 적이 플레이어를 잘 따라오도록 설정합니다. 애니메이터 컨트롤러를 통해 적의 애니메이션을 관리하고, 공격 범위를 설정하기 위해 SphereCastAll을 활용하여 플레이어를 타겟팅하는 코드를 작성합니다."
notion_id: "39ad5223-d16d-489b-a97d-4dcd626b0636"
notion_url: "https://www.notion.so/3D-09-39ad5223d16d489ba97d4dcd626b0636"
---

# 유니티 3D게임 쿼드뷰 09

> **Summary**
> 유니티 3D 게임 개발에 있어 적 AI 구현을 위해 GetComponentInChildren<>();와 NavMeshAgent를 사용하며, NavMesh 베이킹을 통해 적이 플레이어를 잘 따라오도록 설정합니다. 애니메이터 컨트롤러를 통해 적의 애니메이션을 관리하고, 공격 범위를 설정하기 위해 SphereCastAll을 활용하여 플레이어를 타겟팅하는 코드를 작성합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=FBY_cmtCNHw&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=11)

> 🔥 **Enemy A에 Enemy.cs 를 넣으면 다음과같은 에러가뜨는데,  자식들의 컴포넌트값까지 받아온다는 의미로 InChildren을 추가하면 정상적으로 meshRender를 불러옵니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/34b5e12d-aa78-401f-a502-258c3b14a58a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664336Q3W6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG78QvsTI3xVHRYTVlWw8GbC8N8GmVHdtdT0LRxgj1v%2FAiAJ1qnY5g1fvZTthNrUGhtmK0Vx%2BFUJJllELri0distESr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMbCdj7loRy3scz1NcKtwDUGgNr3Th7gaZjrb%2FzR04llrwOTYF0I%2F2tYSDDCkElqt2Ahe1M2D2oNdDBX59esGm67N8Ma9CcG%2FbfCMiJ%2FjN58VizxYP4s9EjfBkGVJ1h1JAsiUt0oYfAz13J0UB5u%2B7%2B1ic4FJPFWNttmHOC1UsLCUAMwwPZsMtJ944p3jMJIlX81SzeSXk5LkObOf%2Fj27RRa7YLyPY%2F9%2FDvbV2HLLo%2F7FP%2FWllTCpSIiYWo9Bi%2FLDLNRcGsnB2IqRvmKv69P7CA5sGpGyxDF2u0VabFjHtxwa%2FTjMHzo0D80FHT7%2BFCABj2woH%2B%2FEq55SYwZrwLGdOQiTtk45blBjmceKKPCs1MeLhhKuv%2FYFqpifrmt08k3V8ixXBu8F7VTq9ArgjbTZprAmVM03VFw7cbyjxrnCAtKK5XWEEDOcfHKNKonMt0mw5apXtxAkLn2G81aTYXNX9qRPKoj9LLh2pKeOHCfV89DyjmI0UecVHgiMZML7TwnEdL3%2BwWpOUsHoATDVvFrP9hZEBSclB%2BXgxKdpp3CxsI2eEKHkaNzILu64%2BMwfZDCLNUDt49sL%2FYOwye%2B4JOAdO3fH9loUomAYbDFLiHR%2B%2F4T6%2FDOroOSKCy5lNPADxknYJY%2FEvb7ujnrEXUMUwvr%2BIxAY6pgGh%2FBRC9xOwp6QPhArc%2FMkvAhQ894ZgDIH9CQ%2F4IT07jCZ%2F7vyHf%2BWbjsULA24vU%2BzZ57kalvfbkpWbh3pSbIhLVTKexi7tpg44DKxE5Q1MMBEhK9SxRPfbmxaY4BnKDekvwlJubkR1UzeDT%2BBLWV4HAVBYUq7rp1%2B1GQQh8NX%2FFZkNGChDBRmY6dr7lvKQdL9beXiOu5GFDZ8XymieS0SnuQVH0%2Frm&X-Amz-Signature=ef50d7b7acfef40fab15280d1c123e5fb8b005c0c1bb96b91171f95b102d0302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> private void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         boxCollider = GetComponent<BoxCollider>();
>         mat = GetComponent**InChildren**<MeshRenderer>().material;
>     }
> ```
>
>

> 🔥 **Nav Mesh Agent = 네비게이션을 사용하는 인공지능 컴포넌트**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/92cc2ffc-bf4c-4c0e-87e9-d34fb0731725/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WV7WXZ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDV4eKeUVhHyZXWPLNnen99gO%2Bk87N0j0j2SEF2yhy5GQIgL7UBOKKBUpU5B24xywgxX%2BCOWP4R7jVmQYrVC5S29TAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEx8vlcF8%2FCYsh590SrcA2GdRf3INHj9crOWvUHmCnLI9NH5LscOkyI9h9pW2VUk76xy7CStVnEXEPmGPDacF3QBB9zuMTC4S%2FNDNI66q6f6GyYL2KPc1VEVjvslmVprvSrT7uwsKCfSbn9zPbyBRmo8R9s9E5drehaWQvOY2N3CtgwroA8WQ3n1Ba4KzMCVMgY%2B4thGwCC6Zr2xW3OelH2kEF64HIva8N6MANMnznJqBe2pAzD3EntfQfTyGBSHmyaoYFUfGt6%2BPAeWHdENdbdZy%2BEvMg7%2Fef%2F2thCVmS29c%2BYn0EGS%2FYGTYK0y4yGOGLBcj2MMPzBx%2B2g72Kl2yhzncctXbdmdaTKAUaVIaPrnN3HXsmfEfGCTZzVd%2FK0O0kYR0x1USz2wKee9PXS6kBmo5Mqj39QOt3UC1ZXtux7IihQCnFaO2sqlY5EZEx%2B7iMM5Fvhh%2Fh5TdwXqlJjDeHqA0KnH22sLSrzQzj0bl3E%2FY1WzoCx2GJZaBmcU4YmlMi1xJ55lLKNqJwcWz2F0v1na6cR%2FzPNsuQyugCGECAPZD3AiSd4FhGWxZDmrmyHW%2FR35pGTfzFurNqQosDYcN8ouxx0EfnhHsjIEwb9clJagVPfDDYdnxw%2FkZjjm7aqBkAC2b4%2BnyY%2FgM6eKML6%2FiMQGOqUBnB7toBFfStrYxwmta3SGPHdr%2FSt1AdD%2BDFVezbfGlRJ13CKc0HRWuFXmcScC0E7hMtDTPK0feJHT%2FWznlJk5mAFBM7sowCRlHR8TaGqISolu5cDiuIVGO1mqG2LigGlB3Pc0chrdtF8IjCzrBBRbDnLu6z57Qwhj2QQa8qejXbNQIi34i%2BdG%2FuW6X%2F5V3FSNm4X8WsfnztH8DoI3Dskl5FL6vl5j&X-Amz-Signature=68b11f632ba7498e68353b64d123914b875340938312a43ed758234a71d982df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> //Enermy.cs
> using UnityEngine.AI; //AI 모듈을 쓰기 위해선 해당 라이브러리 추가
>
> public Transform target; //목표물을 받아내기위한 변수
>
> NavMeshAgent nav; //AI모듈이 추가되면 해당 네비게이션 변수를 만들어낼 수 있음
> ```
>
> ```c#
> private void Awake()
>     {
>         nav = GetComponent<**NavMeshAgent**>();
>     }
>
> void Update()
>     {
>         //도착할 목표 위치를 지정하는 함수
>         nav.**SetDestination**(target.position);
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5939cbda-2d27-4f9f-b00c-b92a1c186d1e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WV7WXZ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDV4eKeUVhHyZXWPLNnen99gO%2Bk87N0j0j2SEF2yhy5GQIgL7UBOKKBUpU5B24xywgxX%2BCOWP4R7jVmQYrVC5S29TAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEx8vlcF8%2FCYsh590SrcA2GdRf3INHj9crOWvUHmCnLI9NH5LscOkyI9h9pW2VUk76xy7CStVnEXEPmGPDacF3QBB9zuMTC4S%2FNDNI66q6f6GyYL2KPc1VEVjvslmVprvSrT7uwsKCfSbn9zPbyBRmo8R9s9E5drehaWQvOY2N3CtgwroA8WQ3n1Ba4KzMCVMgY%2B4thGwCC6Zr2xW3OelH2kEF64HIva8N6MANMnznJqBe2pAzD3EntfQfTyGBSHmyaoYFUfGt6%2BPAeWHdENdbdZy%2BEvMg7%2Fef%2F2thCVmS29c%2BYn0EGS%2FYGTYK0y4yGOGLBcj2MMPzBx%2B2g72Kl2yhzncctXbdmdaTKAUaVIaPrnN3HXsmfEfGCTZzVd%2FK0O0kYR0x1USz2wKee9PXS6kBmo5Mqj39QOt3UC1ZXtux7IihQCnFaO2sqlY5EZEx%2B7iMM5Fvhh%2Fh5TdwXqlJjDeHqA0KnH22sLSrzQzj0bl3E%2FY1WzoCx2GJZaBmcU4YmlMi1xJ55lLKNqJwcWz2F0v1na6cR%2FzPNsuQyugCGECAPZD3AiSd4FhGWxZDmrmyHW%2FR35pGTfzFurNqQosDYcN8ouxx0EfnhHsjIEwb9clJagVPfDDYdnxw%2FkZjjm7aqBkAC2b4%2BnyY%2FgM6eKML6%2FiMQGOqUBnB7toBFfStrYxwmta3SGPHdr%2FSt1AdD%2BDFVezbfGlRJ13CKc0HRWuFXmcScC0E7hMtDTPK0feJHT%2FWznlJk5mAFBM7sowCRlHR8TaGqISolu5cDiuIVGO1mqG2LigGlB3Pc0chrdtF8IjCzrBBRbDnLu6z57Qwhj2QQa8qejXbNQIi34i%2BdG%2FuW6X%2F5V3FSNm4X8WsfnztH8DoI3Dskl5FL6vl5j&X-Amz-Signature=ee9f3a62dccef17ed390ff949a44f842f35a5df1737f345c3c2c30161afc76ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **NavMesh = NavAgent가 경로를 그리기 위한 바탕**
>
> ## `Window - AI - navigation`
>
>
> 클릭하면 창이 뜨는데
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c6feada0-fd5d-4cdb-b88b-0fcda06baf1b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3WE764%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDTTdkfcEre6XfOyUjh%2BCdxydqZPJ0NKcTKdZqY8hBrEwIhANeGHcye70vXc%2BuPRKcrWA03qz9NRfSTe3APEtWyXYfIKv8DCC0QABoMNjM3NDIzMTgzODA1IgwRez%2BBHVYiVOGqnLgq3AMShsaUmWKNEVkKotrQiIBQDlwcZcyXJlsGWMomz36vGuJIE3w79fz7evPDnUtqHA7S8vNPxB3nZ0xareSaXUA%2FgZ5jwJkhyK507pJZ%2FJq5Uzdi1ek%2FEpDaJsjjagUZJFBluJLGnCzbSVW4gpskVxN4ZABuEPhUtZLfTqy2W5HIJusb%2BRUFztWa5Vxdv0sxFB9xZzSI0Q%2Bh%2BmdRtaGgPUpyNZ%2FDZ%2BEtehayobNFwSUavBswmcDybwydlRyg5MNuNOp6W87HcNVXicyzZfBOMgZWP3uLN6FZmtkLTe%2FY6%2BWBDyhE7Xkke6GQXkSOvqfzoeD4fv82vud4HmuMwHMWjoEiaJQHnp4SZqc9YpjgYgZ2ZFRq3PCKZMak4CsjqzmK5QACO3NdliMijnDMEerm7LznpPuy2ZmgsKxkr8So%2BIZGeLIkQJYmem3%2FwlrA4KfDXozoAF6J3pNYYvX%2BSuWIsDb9lp5BifEqpIumJs5kN6jtMCNnk7abQu0ddC8NPS0Ktv%2BOfMrhy5%2FP9tENkYJGGmFgZX1%2Fq9gXyGOBT%2FSB7lCAGO9T6iB1JHTXCq4ctXJfg4p1nRJNKzebSRGHyzwPrJ9QPRdTDTGTN15wdDaznKBEQsTUMghoVzqzdVOLWjDkv4jEBjqkAXtdzsIvQkinoWbpAgGdNwp3wJvLuychj3M6STg2BsL%2BoQjcOjtdrW7k97grj5Veh5bwand0MBj5qvbV8tYL1Yj%2F59q0YTpRhiav%2FxrWiHppb%2BrYQHMc5VyFRU3iHM9MG2tsjT5P4Yipj2zpNxWhfmCbtoZLqZ74vDsRxdUPvTEoPPKngM6UaT6PAFLip06wWi5lMmvlMQ0GxESdkgIivPNVg0QX&X-Amz-Signature=62e6ce99f4cbcb06b3d93a92dc89174c1bb2f1153964e23c0c50f318add1bcf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/690e715f-6432-4c32-a2ae-7afdd1a458fd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3WE764%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDTTdkfcEre6XfOyUjh%2BCdxydqZPJ0NKcTKdZqY8hBrEwIhANeGHcye70vXc%2BuPRKcrWA03qz9NRfSTe3APEtWyXYfIKv8DCC0QABoMNjM3NDIzMTgzODA1IgwRez%2BBHVYiVOGqnLgq3AMShsaUmWKNEVkKotrQiIBQDlwcZcyXJlsGWMomz36vGuJIE3w79fz7evPDnUtqHA7S8vNPxB3nZ0xareSaXUA%2FgZ5jwJkhyK507pJZ%2FJq5Uzdi1ek%2FEpDaJsjjagUZJFBluJLGnCzbSVW4gpskVxN4ZABuEPhUtZLfTqy2W5HIJusb%2BRUFztWa5Vxdv0sxFB9xZzSI0Q%2Bh%2BmdRtaGgPUpyNZ%2FDZ%2BEtehayobNFwSUavBswmcDybwydlRyg5MNuNOp6W87HcNVXicyzZfBOMgZWP3uLN6FZmtkLTe%2FY6%2BWBDyhE7Xkke6GQXkSOvqfzoeD4fv82vud4HmuMwHMWjoEiaJQHnp4SZqc9YpjgYgZ2ZFRq3PCKZMak4CsjqzmK5QACO3NdliMijnDMEerm7LznpPuy2ZmgsKxkr8So%2BIZGeLIkQJYmem3%2FwlrA4KfDXozoAF6J3pNYYvX%2BSuWIsDb9lp5BifEqpIumJs5kN6jtMCNnk7abQu0ddC8NPS0Ktv%2BOfMrhy5%2FP9tENkYJGGmFgZX1%2Fq9gXyGOBT%2FSB7lCAGO9T6iB1JHTXCq4ctXJfg4p1nRJNKzebSRGHyzwPrJ9QPRdTDTGTN15wdDaznKBEQsTUMghoVzqzdVOLWjDkv4jEBjqkAXtdzsIvQkinoWbpAgGdNwp3wJvLuychj3M6STg2BsL%2BoQjcOjtdrW7k97grj5Veh5bwand0MBj5qvbV8tYL1Yj%2F59q0YTpRhiav%2FxrWiHppb%2BrYQHMc5VyFRU3iHM9MG2tsjT5P4Yipj2zpNxWhfmCbtoZLqZ74vDsRxdUPvTEoPPKngM6UaT6PAFLip06wWi5lMmvlMQ0GxESdkgIivPNVg0QX&X-Amz-Signature=771a2becb4e3874065ed70bb256bd3eba6b9845db4fb8b2eb09566c200a38835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **NavMesh는 Static 오브젝트에서만 Bake가 가능함**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d688857f-1fa8-4607-aaa8-afe5934f80bd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJKKB33%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDG1vjo2TtrIAEIz9s7uVTq%2FLeZooLpRBelAtRnrHDbQgIhAJWDgykMAA2%2B6Hu1jf8%2FhwvvIbtImFmPJT%2B4P7Yzn%2FE5Kv8DCC0QABoMNjM3NDIzMTgzODA1Igz5vD718z4UAt%2BAV2Yq3AO9KrnJRfFjOLVMx0EIDon0LluDWY6gpsy1uV6hZockYGzJgQLwXjvHv6CvbCaCy3VPxL8eiDhVN54btFtOBb0dXB8rc24D6AtvBvu80DtHBnq78lhGwvzXqSNwM9%2FKhwfid6GQl1hcGftE53vi0BJNgUmv1xZodDQMQvhKybh99aoPYzQvyoGQfZtKOjz5FVl5nBhq5Gxm7Anrrdg7Hby%2BQ4N7aj31FtqsKyXaHE2YbngX32%2BTyC4ryZhQbtH2sN2JbA4HgFToJ90hAEk6UI%2B0Dl%2BVIjkuodp%2BfMUej%2F2tukJ9sWW9VGUar5%2BsCTgb4tHsaENfCKH8xJBuvVK%2FH5HHvY5eyW5K9pfXttMii06DkJ%2BWnAaH1fEV3I4Vsw5QsNaiFMuseBFVK69kwyXdq0c6oCfTEu1zbJLYFxNcNpH6x208d3QVk4efQh8QbvFBAKpQ66Vw2n3Ob1%2FGifWRCQVYxSlrF0mWyXjER3lemTo%2FGX1tp5WxjiEX91scOhnFZwr3J0iCunWnTfo%2B5Dq6X7tEo89IuapJSwIlHG2m6FQryxLrMEETNFDDCpOQ2txwMR8BWxeP6Zs1ZbGjjiSyq4JI9w%2BFR4OaITVqugU%2BLYPe6xtR1xR3j8kQfk8xUjDjv4jEBjqkAW%2F852%2FfLAyL%2FmPESEqZQyr9vD%2FFDs1wQxe4IaexoW1SXRwM%2B3%2BJwXimBWaJzZV3kBPo7wgHqJKLl8y%2FcQQ2X%2BQXMQrnHRjK7xxrZFj36bFadtRZUQibUI%2F5CxkKl8BJMuasM0I%2BqRrVRsUyY7VRJOTXazUcKMHkVq5f8vE0t7dMBlzQCRbRWS6jMyy7c%2FvdrPwM4XZx7QIBK3LV997YRq7HrhWK&X-Amz-Signature=2a1d9f9110fe99132109b56155a247ba007f327e998b19936c9d6d4f95a783c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cca49515-6920-4a8d-b40e-975b5a4e42ff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3WE764%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDTTdkfcEre6XfOyUjh%2BCdxydqZPJ0NKcTKdZqY8hBrEwIhANeGHcye70vXc%2BuPRKcrWA03qz9NRfSTe3APEtWyXYfIKv8DCC0QABoMNjM3NDIzMTgzODA1IgwRez%2BBHVYiVOGqnLgq3AMShsaUmWKNEVkKotrQiIBQDlwcZcyXJlsGWMomz36vGuJIE3w79fz7evPDnUtqHA7S8vNPxB3nZ0xareSaXUA%2FgZ5jwJkhyK507pJZ%2FJq5Uzdi1ek%2FEpDaJsjjagUZJFBluJLGnCzbSVW4gpskVxN4ZABuEPhUtZLfTqy2W5HIJusb%2BRUFztWa5Vxdv0sxFB9xZzSI0Q%2Bh%2BmdRtaGgPUpyNZ%2FDZ%2BEtehayobNFwSUavBswmcDybwydlRyg5MNuNOp6W87HcNVXicyzZfBOMgZWP3uLN6FZmtkLTe%2FY6%2BWBDyhE7Xkke6GQXkSOvqfzoeD4fv82vud4HmuMwHMWjoEiaJQHnp4SZqc9YpjgYgZ2ZFRq3PCKZMak4CsjqzmK5QACO3NdliMijnDMEerm7LznpPuy2ZmgsKxkr8So%2BIZGeLIkQJYmem3%2FwlrA4KfDXozoAF6J3pNYYvX%2BSuWIsDb9lp5BifEqpIumJs5kN6jtMCNnk7abQu0ddC8NPS0Ktv%2BOfMrhy5%2FP9tENkYJGGmFgZX1%2Fq9gXyGOBT%2FSB7lCAGO9T6iB1JHTXCq4ctXJfg4p1nRJNKzebSRGHyzwPrJ9QPRdTDTGTN15wdDaznKBEQsTUMghoVzqzdVOLWjDkv4jEBjqkAXtdzsIvQkinoWbpAgGdNwp3wJvLuychj3M6STg2BsL%2BoQjcOjtdrW7k97grj5Veh5bwand0MBj5qvbV8tYL1Yj%2F59q0YTpRhiav%2FxrWiHppb%2BrYQHMc5VyFRU3iHM9MG2tsjT5P4Yipj2zpNxWhfmCbtoZLqZ74vDsRxdUPvTEoPPKngM6UaT6PAFLip06wWi5lMmvlMQ0GxESdkgIivPNVg0QX&X-Amz-Signature=6b66c7e287a4a0e987054b7ac4d39c0cb179ab0baeceb8f9a9405e5d8d5f04a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **적 애니메이션 제작**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0d7370c2-4012-4262-a690-5b8281529da6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZFICUT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDXCIY7FuP2Od4E87BxyGtAUnE8LXuuMH3Y%2B4Q0S%2FRTAwIgTYLc%2B7UtnUrndHY591oycACS%2FfVkASqWtDBN%2BK6qqioq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHKzkadJCfRuDlMxzSrcA8Uh7FzNYHe4SO0KMrTQSo2A5AgswnO3EmLoqgrSPTqU0Irhq4g09ewzyx0wqYqfa3k3BPMWrPa5FRkbJQKGXpk9Xzwp8%2FhzYEe6yBTIHmYtnW4d1Ji3lsPgRIaUOr25CgtU8mDCfXAtbcDpxpnLxAmZ9hX4PwbDa%2BZl16jyyPyhLveZ3q6Vltn%2FzDuY5b2A7d84mkCw4NjOtlmR26h3dmXjS9S9nv%2FqSitqYrUDG8ZIbzdpFzAj0Vshmw937zK1rTtB9yagKTAMEseTcRK%2FvxfAK9RZwvGLzZEw0W8RoEzAqvw7ZpIMhW0e02dmPydd7lfFJIkhN8tA1ysG3LjXt1pDek3qil%2FARxXa0MFS06dzwcjEdFDB5UuSmE4fKPCNABGaHmvnSkO8LCzR6IQZhoklB21iC%2FuIs5JtuGBUY%2BeIvoz0iGLTSAAHSnVRsYnBvPO6kmnx%2BXfx%2BNW%2FgDjKe1CjhQEUaIbgx89lUAzcuJGdvud27QMI972yS%2BSt258eC6kcVKRCfnQqWws5%2F3QCMu5xlL70j5FP7O9Jb%2B7EY5fDeqx58Q5IVYtc8JtIaQ3lNrrJrPdscxn8uGWXcCpLbZg%2BZI7J%2FpqFBkG5bn%2BfHPe1eqW4XZvBXCYMQLDgMOa%2FiMQGOqUBwFRjACfb%2FHQaS3wuhk2HMNoWspJ28xbkRIlIVYtN9jknfJGjz0lDiVV1mM%2FeMvvIFQm73hbidBkuNjFRacuCEcbUndmx%2B6kQmoSdV6JkMnY4EeVAqVGQHAXY4R5SZ0lSlpduoxTjHXnI7tAWrKdfArF9TmQYv%2B2ggfBgmRqXTa9jE5MwGMJLmGMdUSnDwWNG%2BUDWW%2BM0rEtv70VfD6e3%2Ff%2B3YiWk&X-Amz-Signature=b57a20304904b691aa82e4209add18a216e7c725e91e96c2845d55f4bcf903d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/61e92844-7814-465d-a303-f65ff6542c92/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZFICUT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDXCIY7FuP2Od4E87BxyGtAUnE8LXuuMH3Y%2B4Q0S%2FRTAwIgTYLc%2B7UtnUrndHY591oycACS%2FfVkASqWtDBN%2BK6qqioq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHKzkadJCfRuDlMxzSrcA8Uh7FzNYHe4SO0KMrTQSo2A5AgswnO3EmLoqgrSPTqU0Irhq4g09ewzyx0wqYqfa3k3BPMWrPa5FRkbJQKGXpk9Xzwp8%2FhzYEe6yBTIHmYtnW4d1Ji3lsPgRIaUOr25CgtU8mDCfXAtbcDpxpnLxAmZ9hX4PwbDa%2BZl16jyyPyhLveZ3q6Vltn%2FzDuY5b2A7d84mkCw4NjOtlmR26h3dmXjS9S9nv%2FqSitqYrUDG8ZIbzdpFzAj0Vshmw937zK1rTtB9yagKTAMEseTcRK%2FvxfAK9RZwvGLzZEw0W8RoEzAqvw7ZpIMhW0e02dmPydd7lfFJIkhN8tA1ysG3LjXt1pDek3qil%2FARxXa0MFS06dzwcjEdFDB5UuSmE4fKPCNABGaHmvnSkO8LCzR6IQZhoklB21iC%2FuIs5JtuGBUY%2BeIvoz0iGLTSAAHSnVRsYnBvPO6kmnx%2BXfx%2BNW%2FgDjKe1CjhQEUaIbgx89lUAzcuJGdvud27QMI972yS%2BSt258eC6kcVKRCfnQqWws5%2F3QCMu5xlL70j5FP7O9Jb%2B7EY5fDeqx58Q5IVYtc8JtIaQ3lNrrJrPdscxn8uGWXcCpLbZg%2BZI7J%2FpqFBkG5bn%2BfHPe1eqW4XZvBXCYMQLDgMOa%2FiMQGOqUBwFRjACfb%2FHQaS3wuhk2HMNoWspJ28xbkRIlIVYtN9jknfJGjz0lDiVV1mM%2FeMvvIFQm73hbidBkuNjFRacuCEcbUndmx%2B6kQmoSdV6JkMnY4EeVAqVGQHAXY4R5SZ0lSlpduoxTjHXnI7tAWrKdfArF9TmQYv%2B2ggfBgmRqXTa9jE5MwGMJLmGMdUSnDwWNG%2BUDWW%2BM0rEtv70VfD6e3%2Ff%2B3YiWk&X-Amz-Signature=7e85126f4b42b20854e5fc6e3cc9fc2ca232b5faa979873df42205be601c2892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/33fcc762-894a-44e8-905c-9c2721b2567b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZFICUT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDXCIY7FuP2Od4E87BxyGtAUnE8LXuuMH3Y%2B4Q0S%2FRTAwIgTYLc%2B7UtnUrndHY591oycACS%2FfVkASqWtDBN%2BK6qqioq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHKzkadJCfRuDlMxzSrcA8Uh7FzNYHe4SO0KMrTQSo2A5AgswnO3EmLoqgrSPTqU0Irhq4g09ewzyx0wqYqfa3k3BPMWrPa5FRkbJQKGXpk9Xzwp8%2FhzYEe6yBTIHmYtnW4d1Ji3lsPgRIaUOr25CgtU8mDCfXAtbcDpxpnLxAmZ9hX4PwbDa%2BZl16jyyPyhLveZ3q6Vltn%2FzDuY5b2A7d84mkCw4NjOtlmR26h3dmXjS9S9nv%2FqSitqYrUDG8ZIbzdpFzAj0Vshmw937zK1rTtB9yagKTAMEseTcRK%2FvxfAK9RZwvGLzZEw0W8RoEzAqvw7ZpIMhW0e02dmPydd7lfFJIkhN8tA1ysG3LjXt1pDek3qil%2FARxXa0MFS06dzwcjEdFDB5UuSmE4fKPCNABGaHmvnSkO8LCzR6IQZhoklB21iC%2FuIs5JtuGBUY%2BeIvoz0iGLTSAAHSnVRsYnBvPO6kmnx%2BXfx%2BNW%2FgDjKe1CjhQEUaIbgx89lUAzcuJGdvud27QMI972yS%2BSt258eC6kcVKRCfnQqWws5%2F3QCMu5xlL70j5FP7O9Jb%2B7EY5fDeqx58Q5IVYtc8JtIaQ3lNrrJrPdscxn8uGWXcCpLbZg%2BZI7J%2FpqFBkG5bn%2BfHPe1eqW4XZvBXCYMQLDgMOa%2FiMQGOqUBwFRjACfb%2FHQaS3wuhk2HMNoWspJ28xbkRIlIVYtN9jknfJGjz0lDiVV1mM%2FeMvvIFQm73hbidBkuNjFRacuCEcbUndmx%2B6kQmoSdV6JkMnY4EeVAqVGQHAXY4R5SZ0lSlpduoxTjHXnI7tAWrKdfArF9TmQYv%2B2ggfBgmRqXTa9jE5MwGMJLmGMdUSnDwWNG%2BUDWW%2BM0rEtv70VfD6e3%2Ff%2B3YiWk&X-Amz-Signature=33c62721ca0df04893f77af058a5c8e26ee5cc75acced4d0d0c85519ec46f578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 애니메이터 컨트롤러 제작하여 메쉬오브젝트 내부에 넣기
>
> ```c#
> //Enemy.cs
>
> Animator anim;
>
> void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         boxCollider = GetComponent<BoxCollider>();
>         mat = GetComponentInChildren<MeshRenderer>().material;
>         nav = GetComponent<NavMeshAgent>();
>         anim = GetComponentInChildren<Animator>();
>     }
> ```
>
>

> 🔥 **버그발생.. 코드 다 똑같은데 왜 몬스터 상태 이따구냐**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5d5cdeff-7cbc-4e94-9d4e-8e84a9af595d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U2Z2YVU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFpjS6IshSDgsYL4ewnk%2Fs0XhiiU2zWPrepfeFS6ALcYAiEAljf0x5GJvm3WKe%2BfVWfWPVI5Hym9CyDyt0PyakDcxQUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNNtktOUXGUGfqWnhircA7VIRRGSfO4Ja1IE%2B%2BgCMqIo3SEnKxPV1RREX2Y65Vu4tlyglbc7NWEvlveuq%2FNG61qTzf3Y%2BlWpoUs2BAbzkQYvmSbnMOd9zOoyORbKVlnVQPajCw%2Fpd09WcBeEw%2BG5JMdL5qyDBb%2FvNBVyh0vpfaxQYV1KrK2reAUCnpLs9xVgdbonDnsJWFP4Onb2pJzGa%2B8LsDnBsxhLL8hs7GSWcgoo88Mfpt9RoHsEeDqn29qvTpBPrNCJA07JbQdhIH7M0onZXv47pRBSFS6KmCC5SM5oPw9NyMySd0Jt%2Bmize83NCHO6d5aK62CZ1OGOi%2BFlvraRT7xwPfXeDPcDcQzwCOXamJIdPYA2gxTUiBpVQNhSfMnIALA19Ahl3oePbzZZT1KFiR8Knpy4EuP20jqy5%2BqURCMK386nDYf%2BAmAtXwMsVnd2%2FihWM5zOFeR4mZ7pg7uCv1JWw2oHXvMg8As8RwDbi15%2F76SXSNQDpRbVgKvnsLTPqsxD3mxoswWyDQb7FEnBk%2FVAevaZNFShKGV9D9JhImuclVLC6SVP6w%2FN4ZnFwPTw5oNtt%2BgWWN3fX%2BLXDJKBI1ECmOho5bGSVrew0%2BglyxKQrXGDbDTq14l%2Bq6eq9o9rkclFtd6TL1NtMM6%2FiMQGOqUBqvtixzcLlk%2FpEFf1VhOm72xwaW00BFrb5yXGrojgicqBjJ%2FKeN%2BRpK2Wktwra588Wr9OcHA%2B1sRDI%2BkhAwOcomegsslOLYB7ICL4pEe1EEc3L7E8mtktS0llKHskxc1aCcFlYPLDCjF0lOqOrc1wdYlY0VClwT956tutw5Jq2U%2FPwE1CASgx1SPIU1EwClP%2BAU0bgrP8dPpMYOyEzGbESKYiQ8k6&X-Amz-Signature=853e1e4dc5d0320162d09f4cae6fdd196c8a939922d18d5824556805df991d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e0ba8953-1a31-46d1-a134-3b072ed82840/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U2Z2YVU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFpjS6IshSDgsYL4ewnk%2Fs0XhiiU2zWPrepfeFS6ALcYAiEAljf0x5GJvm3WKe%2BfVWfWPVI5Hym9CyDyt0PyakDcxQUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNNtktOUXGUGfqWnhircA7VIRRGSfO4Ja1IE%2B%2BgCMqIo3SEnKxPV1RREX2Y65Vu4tlyglbc7NWEvlveuq%2FNG61qTzf3Y%2BlWpoUs2BAbzkQYvmSbnMOd9zOoyORbKVlnVQPajCw%2Fpd09WcBeEw%2BG5JMdL5qyDBb%2FvNBVyh0vpfaxQYV1KrK2reAUCnpLs9xVgdbonDnsJWFP4Onb2pJzGa%2B8LsDnBsxhLL8hs7GSWcgoo88Mfpt9RoHsEeDqn29qvTpBPrNCJA07JbQdhIH7M0onZXv47pRBSFS6KmCC5SM5oPw9NyMySd0Jt%2Bmize83NCHO6d5aK62CZ1OGOi%2BFlvraRT7xwPfXeDPcDcQzwCOXamJIdPYA2gxTUiBpVQNhSfMnIALA19Ahl3oePbzZZT1KFiR8Knpy4EuP20jqy5%2BqURCMK386nDYf%2BAmAtXwMsVnd2%2FihWM5zOFeR4mZ7pg7uCv1JWw2oHXvMg8As8RwDbi15%2F76SXSNQDpRbVgKvnsLTPqsxD3mxoswWyDQb7FEnBk%2FVAevaZNFShKGV9D9JhImuclVLC6SVP6w%2FN4ZnFwPTw5oNtt%2BgWWN3fX%2BLXDJKBI1ECmOho5bGSVrew0%2BglyxKQrXGDbDTq14l%2Bq6eq9o9rkclFtd6TL1NtMM6%2FiMQGOqUBqvtixzcLlk%2FpEFf1VhOm72xwaW00BFrb5yXGrojgicqBjJ%2FKeN%2BRpK2Wktwra588Wr9OcHA%2B1sRDI%2BkhAwOcomegsslOLYB7ICL4pEe1EEc3L7E8mtktS0llKHskxc1aCcFlYPLDCjF0lOqOrc1wdYlY0VClwT956tutw5Jq2U%2FPwE1CASgx1SPIU1EwClP%2BAU0bgrP8dPpMYOyEzGbESKYiQ8k6&X-Amz-Signature=9bbbebf42de0d5e1dcee666e553b8dab972c9bc70a920fd65797f13ab01e8f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## 해결 : MeshObject에만 애니메이터가 있어야했는데 내가 둘 다 넣어서 충돌문제다
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=LUnZHdcOe_M)

> 🔥 **`**MeshRenderer[]**` meshes;
팔,다리 몸통별로 따로따로 메쉬렌더러를 가지고 있기 때문에 배열로 선언**
> ```c#
> //Plater.cs
>
> MeshRenderer[] meshes; //팔,다리 몸통별로 따로따로 메쉬렌더러를 가지고 있기 때문에 배열로 선언
>
> void Awake()
>     {
>         meshes = GetComponentsInChildren<MeshRenderer>();
> 				//Components 복수형이다 참고하시길
>     }
> ```
>
>

> 🔥 **몬스터 공격 코드**
> ```c#
> void Targeting()
>     {
>         float targetRadius = 1.5f;
>         float targerRange = 3f;
>
>         //부피가 있는 레이케스트를 활용하여 피격범위 설정
>         //범위내에있는놈들 싹다 죽여야하기때문에 배열로 생성
>         //SphereCastAll(시작위치,반지름,레이케스트발사방향,레이케스트길이,레이어마스크) 구체모양의 레이캐스팅
>         RaycastHit[] rayHits = Physics.SphereCastAll(transform.position, 
>                                                     targetRadius,transform.forward,targerRange,
>                                                     LayerMask.GetMask("Player"));
>         Debug.DrawRay(transform.position, transform.forward * targerRange,Color.green);
>         //rayHits변수에 데이터가 들어오면 공격 코루틴 실행
>         //만약 공격 범위 안에 플레이어가 들어왔다면?
>         if(rayHits.Length > 0 && !isAttack)
>         {
>             StartCoroutine(Attack());
>         }
>     }
>
>     IEnumerator Attack()
>     {
>         isChase = false; //쫓아가지 않는 상태 활성화
>         isAttack = true; //공격상태 활성화
>         anim.SetBool("isAttack",true); //공격 애니메이션 활성화
>         yield return new WaitForSeconds(0.2f);
>         meleeArea.enabled = true; //공격범위 활성화
>         yield return new WaitForSeconds(1f);
>         meleeArea.enabled = false; //공격범위 비활성화
>
>         isChase = true;
>         isAttack = false;
>         anim.SetBool("isAttack",false);
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07d61b07-8c2d-44a2-8f60-5f4302309127/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD234UCQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDHB9XbacJUN2EZH%2FS1jARrCx58Y6%2Bl4qYIocqpAlv9qQIhAIQS7YXcQTpI537og%2FIoqzY8gOOz6u4BQnZT%2BYTkYdPNKv8DCC0QABoMNjM3NDIzMTgzODA1IgxiPlqIsNaF%2FEpV%2B%2BQq3AMtKto8Qy94GewYrWyrbxDQC1KunWtMYJy0koBDKbkmQh9clefv6IDBfCdKBIH2%2FCVBRCRGTjOVo87UGVdklxxFQ%2BvzhSctECAOLcee%2BhTuGa29CmL42WMqEih0CQRHd%2FXW%2BFVCw878j2qPqMFjw%2BKztWX6ORQhKgUyzyHvXsbfeBHWPA0QNJObHBbwbUEdLZz4oTk5HpNBOnlyQyeihz7zR%2FOps3Cr34IAANpkYNTJKIsxoQBkIHuJOdLLIEpj2irpF5OkkPLOx8COFmg3CGhOO%2BAHThDtZzay%2BkH7GJQSgDVtNEMw4%2FfMKEo3XmLWGXl95cWLtjHiwuAzaib5iRGv1gb6uscTYG3nr6hNeYtkL1Korp6NFZekrcOXQWcl8esDd%2FsaEL4wSeqIZOYbTGMl58cF001H51Lg%2FpwUZjTNzKDsjpD4eCqmTP%2F5tAVwwDffxWm6YvyV%2BEydSkNJ00gTimfFa3v5BJS3KwdexVvlypLPfhNAKbHpIXQnXPIx4THcn73MRF0KRdlFQj6JrQGjFe6hZfeoCLkxMIMtWUqRdXbZnat96ndCTB1agVejaCrA%2Fg0TEhWmxpt9R4%2Bs1J8MuqtBVBXu3mDfaPI9S1D%2Fyh5X9iJTxBdhUmw2FTCYv4jEBjqkAc8xQDMVomTPRMtw7PSFlpR7MINDUQZfZuYDajmcUGnIMx7EjabiA0MJFZ0Q0yJdXPhAE7moAiWxhBZbN89cWIHsOQ1asn8pYR8lA896BVQgd3YeDW3QJgJrkSSC%2FKnURKopg%2FmRw0JL%2FrzxqH5%2B7pqSXi2z4Qqhi1R1UQFp76NCmMrX4GihW%2FO%2BM%2BkW10si%2BU02SZ%2B8M1iGrPIJaGnedUnJUraC&X-Amz-Signature=cfc7cfca6c5391d2dd3ce6c10511a3b20078af50c810448081658051d76a1e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


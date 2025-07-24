---
title: "유니티 로그라이크 03"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "유니티의 새로운 Player Input 시스템을 설치하여 플레이어의 움직임 로직을 개선하는 방법을 설명합니다. Input System 설치 후, Player Input 컴포넌트를 추가하고, 입력 값에 따라 이동 벡터를 설정하는 방법을 코드 예제와 함께 안내합니다. 기존 방법보다 더 나은 성능을 제공하며, 대각선 이동 시 상대적 길이를 자동으로 계산합니다."
notion_id: "d531dc12-ab05-40a2-b2f4-0136913bd252"
notion_url: "https://www.notion.so/03-d531dc12ab0540a2b2f40136913bd252"
---

# 유니티 로그라이크 03

> **Summary**
> 유니티의 새로운 Player Input 시스템을 설치하여 플레이어의 움직임 로직을 개선하는 방법을 설명합니다. Input System 설치 후, Player Input 컴포넌트를 추가하고, 입력 값에 따라 이동 벡터를 설정하는 방법을 코드 예제와 함께 안내합니다. 기존 방법보다 더 나은 성능을 제공하며, 대각선 이동 시 상대적 길이를 자동으로 계산합니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=tKMnVBTes0M&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=4)

> 🔥 ****기존에 유니티에서 제공하던 Input System 은 구식 방법으로. 새롭게 유니티에서 배포하는 Input 패키지를 설치하여 더 나은 방법으로 플레이어의 움직임 로직을 구현합니다****

> 🔥 **Window - Package Manager 에서 Unity Registriy 이동하여 Input System 설치**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a770c011-34c4-49d0-9576-9cc60cdb84a4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYDERGV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGt4HbikDxI3ob8hPqcGBVD6neg%2Fj%2B6ki4Yw8nw7L2r5AiEAnkDoRTQl6c5dRU1O%2FYeefvYxy5ROG4YPiTxaODOmIf0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEAuQJfh74UhA7JJzSrcAymDHdxNe40DMbohgzCK7FfwLJnetWce1A6CydGkNQiOeyMGAF%2BoFF4uLy0%2BB6Ah9LbCqMNyqZTh7tMSqRZ93%2FEBWPowbnLM2gG0LVCxtKXX0pmGXqqQNrapi1Go9IK0WxDddISA3c%2Fy16RzFFKgODWcwSdM72rshBootX%2FqZmDTHHftTn22Yq67SF79MMFvkQtjWTH6Hd1fPsSutNIIQ0cPTC7gen2SqVkOWGGLk%2F%2BTiOxTMDAQeG2CU%2BvaDgQRwYY1UOrnp7s6pgogVV8LoM4QsyfWjvNuAFaLI5rgJ7EQg15zIiCxMFe%2BFGc2t9Yw3L35B6mm05jdOA3KCDXvpTgPNWsDZtf6HXQijTdH3HQbyvTuJR4e2slJnuYRfWQwhxaoFZWAk7W51WQHNY9yzI1Ac4IY%2B2pJl%2FjSI3HS0xh1uKO7OtziysSiGPtDp2TN3cHVr5TsfCzLWMOsdNfiFpuYkBgOjCLegz%2B6Wbk75kWwGEIRoJMHwy2yx9d7VAekuQERdubW%2BFsgGfRlXGZ946MrtSDZ7bzjvs38z7mqx3axWELvAN7g6H31CxSWysEjtVmG5O4hLP%2F0cl%2BnYwaceYnMeyRymgpRk808Z1x9fFHlw53ngJqAEX9Vt1bIMJW%2FiMQGOqUB0rKlP1N23GUDZlt59f3HF6lP%2FtVWypUzBFGHE7BIqkk8wKsKhDefDrykL%2BGrvOo6BZWKs1ElE%2F%2BC8RABLEf6BSfKJTABC%2Bt5s1tei6BZ7yddqAfPVpjLtilL0lANC1NWuDiW2WaXxaUyvWLV0A5r9hQb6L6IP9UFEreC%2BoIwouFof6UVH24XxCi1GZYBJ2TVVVTCMi1WK7%2B%2ByyE0Q8zuJG%2BTNFB8&X-Amz-Signature=5dcb6ed01b2735697a99d64ac3a8a314502735be2bbd50050407e47a6674bfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/bac51931-b857-406e-83e7-3fe09e221353/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYDERGV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGt4HbikDxI3ob8hPqcGBVD6neg%2Fj%2B6ki4Yw8nw7L2r5AiEAnkDoRTQl6c5dRU1O%2FYeefvYxy5ROG4YPiTxaODOmIf0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEAuQJfh74UhA7JJzSrcAymDHdxNe40DMbohgzCK7FfwLJnetWce1A6CydGkNQiOeyMGAF%2BoFF4uLy0%2BB6Ah9LbCqMNyqZTh7tMSqRZ93%2FEBWPowbnLM2gG0LVCxtKXX0pmGXqqQNrapi1Go9IK0WxDddISA3c%2Fy16RzFFKgODWcwSdM72rshBootX%2FqZmDTHHftTn22Yq67SF79MMFvkQtjWTH6Hd1fPsSutNIIQ0cPTC7gen2SqVkOWGGLk%2F%2BTiOxTMDAQeG2CU%2BvaDgQRwYY1UOrnp7s6pgogVV8LoM4QsyfWjvNuAFaLI5rgJ7EQg15zIiCxMFe%2BFGc2t9Yw3L35B6mm05jdOA3KCDXvpTgPNWsDZtf6HXQijTdH3HQbyvTuJR4e2slJnuYRfWQwhxaoFZWAk7W51WQHNY9yzI1Ac4IY%2B2pJl%2FjSI3HS0xh1uKO7OtziysSiGPtDp2TN3cHVr5TsfCzLWMOsdNfiFpuYkBgOjCLegz%2B6Wbk75kWwGEIRoJMHwy2yx9d7VAekuQERdubW%2BFsgGfRlXGZ946MrtSDZ7bzjvs38z7mqx3axWELvAN7g6H31CxSWysEjtVmG5O4hLP%2F0cl%2BnYwaceYnMeyRymgpRk808Z1x9fFHlw53ngJqAEX9Vt1bIMJW%2FiMQGOqUB0rKlP1N23GUDZlt59f3HF6lP%2FtVWypUzBFGHE7BIqkk8wKsKhDefDrykL%2BGrvOo6BZWKs1ElE%2F%2BC8RABLEf6BSfKJTABC%2Bt5s1tei6BZ7yddqAfPVpjLtilL0lANC1NWuDiW2WaXxaUyvWLV0A5r9hQb6L6IP9UFEreC%2BoIwouFof6UVH24XxCi1GZYBJ2TVVVTCMi1WK7%2B%2ByyE0Q8zuJG%2BTNFB8&X-Amz-Signature=d1be05d4f8382a1cd9b93c0640f7cb77de0357c96d75ae809c2f78ca74fc4b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **설치 후에 컴포넌트 Player Input을 검색하면 새롭게 컴포넌트가 추가된것을 확인할 수 있습니다 **
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ad3e63d7-2e94-4a29-b39b-0b3acc3f6591/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=f308df58aecbfd9ccf286c154280d724788943bd1eb88cc7d92205ad80c557fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> Create Actions 를 해주면
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4a6d49eb-9f09-4956-b79b-e6fa619a6e91/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=340b08597ba4814acd5e3bd8cd9199f5243ed1de57509cf6ef83c3fe9453a394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **Interactions에서 Input이 어떻게 눌렸을때 Move값이 변할지 설정할 수 있습니다. 기본적으로 Press 즉 버튼이 눌리자마자 값이 변하는 형태입니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6e37ead2-212c-4a77-b402-52d00485f486/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORWQYKT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCt9KRlVtNC3%2FVBjGLcSH9EigUln27Ihyr27Ue3PrV%2F4wIhAKv%2FvADvE55as69ZUKUuTHdHTkJWrGMovetsrADSubtEKv8DCC0QABoMNjM3NDIzMTgzODA1IgxPV5oHI1AkOftRM5sq3APUjKJmKnVkrSETW8wFLX2PLn4isXaxFV5dEpykOU9fM63TQUoatCS8hjIs1bv0dEEgXoO7V%2BRJ2SdpT7PYU03MxN68BdQr5vNmJfazqkcosLlEv5V3v%2FTyScTRBKz%2FPclLAol5MAuef326UU7jAlPswP0ggUxqFkZ0ZNE1wxQuNP3%2FOoF2bQBZ%2BPNu9s9x2jw5KfqFgR7qhPpXUNSST9F1Og2VE%2B41oNo1dNZVveA%2B2cWVjDzlSf86fSsEne5YLXanZyw4%2FOf2ejRE0%2BlVnu74r17VzscoHyzQGgfIPLu9Zuk3fWaS%2B4u9qhbSaTplXyr2H0sI9o%2B4acxySjKPt1kMpQfiZylbNByacJVFIreJyK2SmaYIXPMk6B7BD81MdvA8IV%2FCBk%2F%2BJn5y4lcpmOqZTfd1Tqe2tp3xNFw6ygiBytJGZhLEbdoKErvv7zTUpQuhHD%2FcabIikglrUSRbY4xif18Moz1SY85lbGXK8%2FNCA30q0aVxksGCYlAO6MplXu7vXsjn62LWK7VXCADs8l%2BSYvjrWH8WUaXdElcNbxa1p2%2BrGDIrSDCEblBdR2S3Aelm6HWm6j4LGrfWPQgD3zSiZadbwYGiTnmhrgKVCx7aGm3Vw3NSlkSEq%2B4YXzC%2Fv4jEBjqkAUiq7bSXESIYL2tAid0w9nJMSbqRG8zHPhTxbD95CciFJFDvpeBseY%2F2lyWq1peEC1AYPup%2Bvd7KqcqPglATdvMo%2Byb5waEN1Y46YpCheVEfdhds5geIyVQjSueffuZAr%2FDPH3s27dIhg91ln5riiLrIhsWgRBF9cGnc%2F%2BKaath8G%2F7ARZh1s9UNDSbGAqKh19Lh%2FGnp0%2BsaH0YWj3QOBfOs4Rag&X-Amz-Signature=0f63207de42ddcb4397405fd4ea394582bd63a831b9ccb6cf2a109f90e34e39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **아 그리고 저장도 잊지 마세요 전 오토세이브를 켜뒀습니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/45263ced-499f-4dd6-b5b7-5f7a1fc55136/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4LZE25%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEZ8nGC7QopBQxqT6eTWpiwDY276nFtHY1NNjuOq79AkAiBirbVgnqt9m%2BH3lvMY5mywz5sHFYIueTzEalnIc4jUCCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCHoVPV9YkbsssTsMKtwDDltl43fwv1Ermj5roW0Yby4jeDmkiz8czkvpiDqCrTeb2HFmQSWoY9D9bdYY%2FxJ8zvbJbRFiqSLyJ4HG0B2LVHwPrWEsjp7JJ0oZoKEasIXJIFrr62MrToKlUHJ6RGldwnv8ttsjs2pNaW5EWVp%2BgHzMoMwVTowp37Q2MmP0sfvxtDxOa4Hf7lJidbIbgtyTh4%2FjOv%2BnYPcaC%2BBxUssbDqiOR8u1%2BU73pgoETPitiqdWgOZKGey4Q34HFCuYx6gUP%2BeQi7sZmx9YrbKOG13Mp%2FhopawqlS7vVaAOYO48uABjESFE6nysVisgFwe7T1EnFnighvNrGo3ZkuLXq9CrGDHVoD97fzrguFMlHBiDsa%2FBAqGzdreylw2fk9kvS%2B6ESSRepNvTi5T0ZNYdiQbk0HF0S63LejJwfsAIaHD44Eghep3ZfyIjorTJkFrUZ9KBLa%2FahhjeS%2FgVd6gp9rKm0REEYySbLJVI%2FUb5LfEk%2BdUkok%2FML8Xs0cgkOXpmRYzHP8At%2BPDm2mFXdQhqSoI6FSR8gUSctmtLov3zETZ%2B7YraqBfxGqfkpT%2Bfopq1PT%2FmJmkAHWkxeJa48TP7BKx3UY4VVoG8WLqvgS3K8pLusKA0aK2Qa2U5UU6Dw8Iwq7%2BIxAY6pgEf4IT5YztWeSrxE%2F%2FsYWYdA%2BdYnM76MWotbGojC5%2BMQ3t7NIBq1Bu5vo5qzatxq7bVn02ldfm9myTPN%2BbVWOGKLn0kEbSGb%2BlFvmkgy1CQcNYt3NqpflPxf7a0gX%2BP3ZKxHVh3QZPyEvm03QWMZysgk2H4qzv8tg6NKhvTeOEZT2Yn8H82bSf3bnbQUgA3UH4IgqLqoetVtlt%2B8r%2F6BW4gZwdtQd9V&X-Amz-Signature=1e3303c88c89cc86a1fbe264026be8f740d3c6325085025c10902ef545f6b64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **그리고 Player Input에서 제공하는 함수를 참고해봅시다. Vs Code에서 자동완성 기능을 지원하지 않아서 참고해야해요**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c02acd3b-be9b-47bc-84f8-92b03030906c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIIZSBL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBFFS07dGwb6t%2FHZ%2F9jNH96U7NepzCTEk%2FYTBsT9JNKjAiBDXpyAtCjay83kp10uX32hDUK6i8sQvRk4lsWgCNOK0Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMPZp8Ue1RNKSONkVlKtwDJRF1qrVol2Ne3%2FYfz6OK%2FuGV0Xk20Cy88xy9zQRhb1QAWPt0Ybf2UwPfDpr1Qg6ROWYyO1TKiPRKb2i%2FeTYH6h4e3oO9bmNObhZxL489WJMfeWI5Ngno%2B3hZCePfjNtnhWVd%2FrCnf9h%2FT1X9Cc41gZPlFAIyhHmxKH9ktzdF3pzesL7Q6Pfu3Kzh0LWcyZW5b%2FQ9ybpmaTYfG4dbv0RUDJCDpqYRgIeiSqW7Rwu6gsNydN4N7utABoho3KqrHQR12hJ9fQrqtiwCkh1nHciiewxDTtcWcUT0iLfW5ToqqnvR4%2FguJOuCdGHm0tHOce0bNkvVxNotb8AFxq3T6OjoS10r7PXufqREGKvGtjk3Qef1havJvEOMkHJfy4U%2FQvXapzFftK3ZY8bFRqYXw6tB1Xwk8KuukXeIJvr9vKopW%2BbIVg48DI55ROJuzOF%2FpQm522m%2BZxVNyuhwW6X9KGgZfqnGfrsCdPZ5qe3v8X%2BIr7qKCPtH3mgqZrzwwXDNtjLiyBtqcLlS%2FQNlfxfyueJ1XajJGWYV3OZXQhjQOXroIvvTQjVdhoSPwyJvEmfTMOpydvXhAD9fDIKQ5lX6PaCz65JeDLd5PMVtSJhTCSeofTjpbw35GuU1gwL6kZQw%2BL6IxAY6pgER6ek%2FCRQkcrKwNsjcEhWaSOXDtlOiQaH7HTFAQQnbtYmkmsHAL1PIthTVPiufYFAvHBA2Qwn0AjcUWIE1BzOQZ3x3hFEoVBhy5DEiPNYYy8pvbIh%2FVTKu6eZSeCDywWhCqwKEVFIP1QUJBhBnQsxslCV0fSD410oxdEOe6carHGjofO590VyM%2FQtKwxsn1KyzZB%2BOjbEDWkB5MeQFGjSX8wIE3sRZ&X-Amz-Signature=c14a9b38eccfaa8e8e3e390202080276f15eec8f5717086a071e54d3df8ee6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/68034152-275b-4722-8dde-e2b64b51851b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGANVX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC20pF37qnCNHYIxnX5E1bcyxJAFXYjfa4KQWAyV4%2BytAiBi5dI9SCnuid9wEbM4xE3zH9g4IAYCIHXDIz9LwhJLdyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA5woEfgHyiJjUJJaKtwDdRj2yr7uONUZiQ%2BFmdIZVsX9cA5VLgVzjWWbFN8%2BTal1VB3GDfk1dPHPacDBjf%2BThnmiXWOLsmlLNT1X0LzigHrSJTyRdRzKFEkOUo5Qf8mWAGG84Ah22CZppkJXCHGfKiP3mA4xZbXY0x%2FYXdlUnbQm5wYGwFHhfoFhnmzX12YeMBX%2FidPiW9tQGXYOesX6iBzNxpDGA9gEFr063atOi9H15EBjZpW1KJFru9fqBh62pxSR3%2Fklld5%2FxqCJbCOtnpB7PMttZdru3i987Zt5V9C%2Fd9he5LRQhJU5aDeqad%2F2%2FC%2FIOxu7EPovICKHtqCUdVl4t5He5sxeqyLhrw7Wq94Bg9JYXrtFtFzZQHKazsRNKzdfkH96jjO5BOzULqC2N4HfsFKdd4vbcDVHAKxTwOX%2B4PXdrJ5%2FKojYeT2d%2FgcGICFMwjSSHND499xGnPG3ZrgOnH3kEvbo99IGr2fXg4ZPJiS4aHrcqzTAgMT1naA0IVXyyy2ocHWBwTDjtu8nm0aOPAzU%2BR%2FEkrb2BZRVPDGSUkrhIh2Ov02Aw0lHKkXgehitFGyLfMQZ7GiHuuyeIZhtEab8fagyxVas0tXekeBajRb%2BsVKJiz9PlVouahrF%2FiDpEc7%2BO5eP8GEwtL%2BIxAY6pgE9jCj6AHh3K5KvAGh1l1cTxn5x2eHJDLdcZcizlTwWQQ%2BNzdiTmHWGQHEj97LHScBsJjhYmoGd3ziMG9PbERak%2FuQrVVFv6uqYdV6TgizAFITPHH%2Bq9lGOJxKFjHgsfp9rtvsBz0w2dVVo%2FAVSMZvMbGMNBuNzpjXPn8ayG2UEZ4q7EpzunODqboUUIgZ7Zj1gYyI7WBdqho5aunxIA9OMExND8ysM&X-Amz-Signature=9c28d6c733afd17a27b0fdb26bcd31a600c726941b200b3ae360ffdc90077a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>



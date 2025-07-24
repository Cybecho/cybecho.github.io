---
title: "유니티 로그라이크 05"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리, 랜덤 타일 생성 및 타일맵 콜라이더 설정에 대한 내용을 다루고 있으며, Unity에서 로그라이크 클론 게임 개발을 위한 다양한 기술적 요소를 설명하고 있습니다."
notion_id: "4262fa2a-444d-4d13-b1a6-08a8da0b762c"
notion_url: "https://www.notion.so/05-4262fa2a444d4d13b1a608a8da0b762c"
---

# 유니티 로그라이크 05

> **Summary**
> 무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리, 랜덤 타일 생성 및 타일맵 콜라이더 설정에 대한 내용을 다루고 있으며, Unity에서 로그라이크 클론 게임 개발을 위한 다양한 기술적 요소를 설명하고 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/990a699c-5294-4cc3-85f6-2a03dd05c4bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZP7VMCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC%2B2NRu5DyfMOLLAmSpa95gDyRZz3EBjwGTQDakzY%2B5QAIgVwZiZdCfsR2e7cyAFWil6uiFqUngUhmG1WrL3CNSnCMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNGspanvC44f%2BH3GPSrcA20kthxJ3bgmVUVsMdipyjRXpxE1wlAp3sY%2Fxunirf3S%2FZJ%2FoR5VOpIFvHR90LcUG%2Bk6C6%2B9jOLzZ0U7cESwhrLIc5itcufZMNpsQ%2Bju3MuoLM5euF%2Bs1FFqkJC3j0%2BhMbNdSo905Ye4K%2FNkavbqp5oX0c8RcZIS9XmJNLuofgOiSrLwlYj1PKzIMv50Qsf9ad6H%2FLPQ4VAOpHrk77jYM%2FjqGKhkrmWckcGtbJA7C9er9s64swgrWJ01ycYmUySE7H1bdrBVq8ceekXvrk7JiT%2B2wy8o2co2Qte9lSpM%2Bjf4VpDqNiugAia404FzF%2BxXoQfOq32vHkT%2BLTg%2BrX0ly3olljbFROn3CQKpBW6W4cU12seyHeFf2VZUjEUJPpUQLpOuaMUV%2FGdDDyTCGOFBum4Z8EglV1ATNalDokgt1GlJlatFc7WQRoyggXmUMftSjk%2BffdGR%2B0bX%2Fuw%2Bbb3Ay2iB5aD2JQyYeE9vj2KeQwbuszg51NE1EDrrTGFaUROYipWACp4GtVYpICt0iNR5Qda8fpdaN9fknHp0REl1LnjwWZxkfqMp86nISXtdlwi2bqEDMGKQO56Y3LtdVMFAquA9U5Sp7xaVBWYVQT4lYmHgS8okqWUPYRVLviCHMOW%2FiMQGOqUBhX5j16ImVVbpoLBo3AfAxK3mqXwghybHo5Z5TGkMcaOyOf09FvrFfW17ek7A%2BuotHEmYUiE9JSRwR%2F2rmlEGDDgqf7mdiNCxfPszz20al4%2Bgiw6%2Bq903ViMvje72YMxT694%2FUcEIulRjYn79tbm8J1tiiip0%2FSEFohO71PD2T6Xy8nFk6LeSw43TRkSI1YVgR6%2FPlbmj0auZRNs50huXsTb2f0EW&X-Amz-Signature=8765c04b156d9b2a6a3950807411ab72b43ed133700d9527c427f44408c4c264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SNjgew0VhHY&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=6)

> 🔥 **랜덤한 타일이 배치된 타일맵을 그려보자**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/94dffacc-a392-46b8-acc6-af06df3d3ea1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=d24e5dc18626b71fc79bebc292e2075bfafa8150b89eba72eabf908e9e42f955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/afef187f-0cb6-4a05-b1bf-99f4485e5aa2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=4a8bb718bea21971a42c47a4f8404142e7d2c274d3d0bcd550066858525dbf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6c84ff62-0ecf-41f6-be96-2d6b82fc1ffc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=73d525abdd01d1b5c648dd9e267fda46025e39b519c8ea3b98736b54d499d97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **Runt Tile이란 인접한 타일에 따라 이미지가 정해지는 타일 (랜덤생성 타일)**
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/25dc40b3-78af-49fe-95b8-9f55d9dd8a02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=f49cc2a1dbfd90c0dc2bd8d86e744cc0bcee094a383400542d5795b22dca9195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9fce8d7a-d2e3-4191-8f7b-ce380132db2b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=a4b347cd1b649d4d4b8b6fa92087a1dabdb08d72fe940f1b57238a74d5dd2ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## Tile Palette에 RanTile 적용시켜서 랜덤타일 생성될 틀을 만들어준다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e5a545d5-1198-476b-aae2-5391fa9cef26/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=1dbddbb3c139dcca7308eef573feb15b50062ee799596b4fd906b2d39fe7a365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a5db4aff-a592-44f4-adda-22c028596011/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=21b6cd701744cddf70aca429e99357d82b4bed851a179bbf323c2c30c9672a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/381ce7c2-3eba-4193-9257-4912596e6d16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEUC2KB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDnHVqVBwLigKUd4c9SaLVRgFbQQfeang7M1HFxeDQ1IAIgDYxoHJEoO8qxCAWOu3UMCu4v26UBNTLbo%2BG%2B76Ar2iUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJV8HNyhCiM64oNvircA6l%2BIYU1LkeNkNcfaxbQXiEQPrf0LoRXD72nTkBg7RInGMsR%2BCkgVliGVO0UtEy378pr2xrygig%2BQ2%2FJsawPUlw9fmni7IjmrBKq8bf8RzXTSZo2u8ZC4X17oRogRXqc5FcOBVUslugMH4hscYtvJMDTCJD3pG3hpIEu%2FY7Iv9Mm7Ckk0IOdF7lLmkNiw1f6Y%2FE1fLRfhW0nrsRFiLYV47VElQYJyNVq0H5T5Hs4w2B2FFPzoRaM95ac3b%2FdyavBTbte%2FtbmjnpoNqv64quXGnL5tECYn%2BrIy2DAwBd3%2B91Kn5VeESkvolQWvlhpFdgARdG9kjMRgYcfaSEbN2Vs6UWSC2MFaIlftioVXfG9E1Dsyp900oo2nHqjp9a2T4hBoH%2BMOvV3T%2FS9lzDTPAN4oyr5gl7UihMrdJNtIHIcTM0KLmRyeyRpRTsluecD%2FiZBjnejmNiokoNnO8XQwZinYf2Qqdi25O6zp9yTF3B3KqJqgzb277%2Bml25%2FzoDl5mAKjmq9SzacPpUl%2FSbTScq3cphhooFjXX%2BhThRjnROJO8EDt%2FsmyXIUuUiy%2FIMD7pf9Q2dmk2twdlB85Vm40H2lrMDPy0HMbD65dl%2BZUFl5Wl2clFMSZUrcoACrC%2BlQMIS%2FiMQGOqUBuK9oS%2BE9yv6kZ4Is1qncE8zcQX1xluskBCy%2BnnQSSNKcTA6m%2BBzZHxLUXfjH4GF%2BOodnmVZaXLYWttEnGPSse6lnXHfPSxHmJS8Ls0qkLMCi5IEF6TV99aSM55pXTj04xvbIq3hP1CYrHBVlObO9ZbRXBr6T80J%2BZE4kPUdVW9Rlsw4PBVEoYPsinI7nnVBw0HlvwzK6eydxKB%2F4xOtYzkuoOV7F&X-Amz-Signature=7bdd1d5a3f78f67955a88df6e20fe710f5451a61c5c1d8c1a46fc57c540c62e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 ****랜덤타일맵 생성 - 1****
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ae138891-7f20-48a4-b23f-e171ad41c790/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXR5SOQM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKtLb49ey%2F5zh1Mc1gqYU%2F53X99QCNlJhWQgXIBkMJqgIhAJWmdTZfQKRMqfwi7rjpsQr%2FapJpShOdvDRCHmryR%2FjgKv8DCC0QABoMNjM3NDIzMTgzODA1IgweDE6VV3POGrkDKFIq3ANg95zEh3uyXRp%2FPDFaWe4sV1x77qRMtKNiKPDlEIDiFdxjzQ5kD7DJKtHst2BC2fYN7nvZkZeOLACMSv5%2F33xdMxGAx6h0U7spM25KPI8Yo7eSH3IYbfYJkynsBggF1bOz38DVpr3brxhQZuQlEJbAgUuECMpEGAhuIssfS3axkaFEZsK%2FUA12mdB5Yiz1v1YDl8NfNvKq1ab0p%2FL%2Bof1QjFufXnOWPu9mpnUUPzZHwgJUCBUcg%2B%2BGv5Do1%2FUv8iPUiKcMDKnO7qtw%2F0lYe4yfZt2i5nAy1LSWFT35c5vwQAtO4uQrrZSWfcjK3QBJrRD4460vdRcuMGFrl9ZrUwTmTwiIQjDlxyTfBqNYQELI44CsKC3JiUGZqnflqsc%2FPV5FElpDkCLLQr%2FthS8bROUoGrkafSYi7i6nHd2eJIuUyE8FbFIBGQxpExLW%2FTPUi48%2Ftd2I0ahS81ctVlpHGeHgFo3UQ9zIJHj3g8wTnVQR%2FW5cBiWHgxqhsq4Rve9PVqCmfYfn9Ek%2FKdM1uHcmCn10%2F%2BJuqmPi2yKpC8T5rUhKofkwHPeY0kMiyw4p28WQ1BbmXZc12q55MlFUfeIYSBA4Umtox4TXzjuq4zDv9HlKFMzXIKGk9V3YQcIcaTDAv4jEBjqkAfGI6bd1dReIbrKFU3Ko8ti1oHeNTjVd9fyDUu2kLtpDAYdwvwBOmkn%2B9zg%2BAfRcBTV%2BlnY3KDlgwrIuKjIXPFOFV9MKN%2B61eqqZab7czks%2FxQy%2Fz4UKE4AHdbCHco%2F30rRfFoF9wPGT1NoCSMmwqYqKiIoXMvwbRMC0KaaFDhGChhMtY5HOLUonWxmAYeh2mij%2Bx%2FeFmt%2F3PdGR%2FGPVmJop84gl&X-Amz-Signature=caad80b3a5229e6163465e6e93ff6c6401c25ff24d668d11462d4d3c71e018a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 하이어라키에 Tilemap에 `Tilemap Collider 2D` 와 `Compsite Collider 2D` 를 추가해준다
>
> > 🔥 **`Compsite Collider 2D` : 잘게 나눠진 그리드 속에 나뉜 타일을 하나로 합쳐주는 컴포넌트**
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9eafbdc0-d625-4ff6-8bba-70a2654d9fe0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXR5SOQM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKtLb49ey%2F5zh1Mc1gqYU%2F53X99QCNlJhWQgXIBkMJqgIhAJWmdTZfQKRMqfwi7rjpsQr%2FapJpShOdvDRCHmryR%2FjgKv8DCC0QABoMNjM3NDIzMTgzODA1IgweDE6VV3POGrkDKFIq3ANg95zEh3uyXRp%2FPDFaWe4sV1x77qRMtKNiKPDlEIDiFdxjzQ5kD7DJKtHst2BC2fYN7nvZkZeOLACMSv5%2F33xdMxGAx6h0U7spM25KPI8Yo7eSH3IYbfYJkynsBggF1bOz38DVpr3brxhQZuQlEJbAgUuECMpEGAhuIssfS3axkaFEZsK%2FUA12mdB5Yiz1v1YDl8NfNvKq1ab0p%2FL%2Bof1QjFufXnOWPu9mpnUUPzZHwgJUCBUcg%2B%2BGv5Do1%2FUv8iPUiKcMDKnO7qtw%2F0lYe4yfZt2i5nAy1LSWFT35c5vwQAtO4uQrrZSWfcjK3QBJrRD4460vdRcuMGFrl9ZrUwTmTwiIQjDlxyTfBqNYQELI44CsKC3JiUGZqnflqsc%2FPV5FElpDkCLLQr%2FthS8bROUoGrkafSYi7i6nHd2eJIuUyE8FbFIBGQxpExLW%2FTPUi48%2Ftd2I0ahS81ctVlpHGeHgFo3UQ9zIJHj3g8wTnVQR%2FW5cBiWHgxqhsq4Rve9PVqCmfYfn9Ek%2FKdM1uHcmCn10%2F%2BJuqmPi2yKpC8T5rUhKofkwHPeY0kMiyw4p28WQ1BbmXZc12q55MlFUfeIYSBA4Umtox4TXzjuq4zDv9HlKFMzXIKGk9V3YQcIcaTDAv4jEBjqkAfGI6bd1dReIbrKFU3Ko8ti1oHeNTjVd9fyDUu2kLtpDAYdwvwBOmkn%2B9zg%2BAfRcBTV%2BlnY3KDlgwrIuKjIXPFOFV9MKN%2B61eqqZab7czks%2FxQy%2Fz4UKE4AHdbCHco%2F30rRfFoF9wPGT1NoCSMmwqYqKiIoXMvwbRMC0KaaFDhGChhMtY5HOLUonWxmAYeh2mij%2Bx%2FeFmt%2F3PdGR%2FGPVmJop84gl&X-Amz-Signature=febe8c3affe77d91c5b894816536febf18aaff1c945d0484595ca2ccb2386f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fd8546d0-e668-4744-8fb0-6ba6822e461e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXR5SOQM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKtLb49ey%2F5zh1Mc1gqYU%2F53X99QCNlJhWQgXIBkMJqgIhAJWmdTZfQKRMqfwi7rjpsQr%2FapJpShOdvDRCHmryR%2FjgKv8DCC0QABoMNjM3NDIzMTgzODA1IgweDE6VV3POGrkDKFIq3ANg95zEh3uyXRp%2FPDFaWe4sV1x77qRMtKNiKPDlEIDiFdxjzQ5kD7DJKtHst2BC2fYN7nvZkZeOLACMSv5%2F33xdMxGAx6h0U7spM25KPI8Yo7eSH3IYbfYJkynsBggF1bOz38DVpr3brxhQZuQlEJbAgUuECMpEGAhuIssfS3axkaFEZsK%2FUA12mdB5Yiz1v1YDl8NfNvKq1ab0p%2FL%2Bof1QjFufXnOWPu9mpnUUPzZHwgJUCBUcg%2B%2BGv5Do1%2FUv8iPUiKcMDKnO7qtw%2F0lYe4yfZt2i5nAy1LSWFT35c5vwQAtO4uQrrZSWfcjK3QBJrRD4460vdRcuMGFrl9ZrUwTmTwiIQjDlxyTfBqNYQELI44CsKC3JiUGZqnflqsc%2FPV5FElpDkCLLQr%2FthS8bROUoGrkafSYi7i6nHd2eJIuUyE8FbFIBGQxpExLW%2FTPUi48%2Ftd2I0ahS81ctVlpHGeHgFo3UQ9zIJHj3g8wTnVQR%2FW5cBiWHgxqhsq4Rve9PVqCmfYfn9Ek%2FKdM1uHcmCn10%2F%2BJuqmPi2yKpC8T5rUhKofkwHPeY0kMiyw4p28WQ1BbmXZc12q55MlFUfeIYSBA4Umtox4TXzjuq4zDv9HlKFMzXIKGk9V3YQcIcaTDAv4jEBjqkAfGI6bd1dReIbrKFU3Ko8ti1oHeNTjVd9fyDUu2kLtpDAYdwvwBOmkn%2B9zg%2BAfRcBTV%2BlnY3KDlgwrIuKjIXPFOFV9MKN%2B61eqqZab7czks%2FxQy%2Fz4UKE4AHdbCHco%2F30rRfFoF9wPGT1NoCSMmwqYqKiIoXMvwbRMC0KaaFDhGChhMtY5HOLUonWxmAYeh2mij%2Bx%2FeFmt%2F3PdGR%2FGPVmJop84gl&X-Amz-Signature=5f776c275afc81ca47e1bf258b46e81fb5ca3526fa58d305d2ca6ca91b019236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/90937825-6ea5-49af-99a8-6a187841ffc3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXR5SOQM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKtLb49ey%2F5zh1Mc1gqYU%2F53X99QCNlJhWQgXIBkMJqgIhAJWmdTZfQKRMqfwi7rjpsQr%2FapJpShOdvDRCHmryR%2FjgKv8DCC0QABoMNjM3NDIzMTgzODA1IgweDE6VV3POGrkDKFIq3ANg95zEh3uyXRp%2FPDFaWe4sV1x77qRMtKNiKPDlEIDiFdxjzQ5kD7DJKtHst2BC2fYN7nvZkZeOLACMSv5%2F33xdMxGAx6h0U7spM25KPI8Yo7eSH3IYbfYJkynsBggF1bOz38DVpr3brxhQZuQlEJbAgUuECMpEGAhuIssfS3axkaFEZsK%2FUA12mdB5Yiz1v1YDl8NfNvKq1ab0p%2FL%2Bof1QjFufXnOWPu9mpnUUPzZHwgJUCBUcg%2B%2BGv5Do1%2FUv8iPUiKcMDKnO7qtw%2F0lYe4yfZt2i5nAy1LSWFT35c5vwQAtO4uQrrZSWfcjK3QBJrRD4460vdRcuMGFrl9ZrUwTmTwiIQjDlxyTfBqNYQELI44CsKC3JiUGZqnflqsc%2FPV5FElpDkCLLQr%2FthS8bROUoGrkafSYi7i6nHd2eJIuUyE8FbFIBGQxpExLW%2FTPUi48%2Ftd2I0ahS81ctVlpHGeHgFo3UQ9zIJHj3g8wTnVQR%2FW5cBiWHgxqhsq4Rve9PVqCmfYfn9Ek%2FKdM1uHcmCn10%2F%2BJuqmPi2yKpC8T5rUhKofkwHPeY0kMiyw4p28WQ1BbmXZc12q55MlFUfeIYSBA4Umtox4TXzjuq4zDv9HlKFMzXIKGk9V3YQcIcaTDAv4jEBjqkAfGI6bd1dReIbrKFU3Ko8ti1oHeNTjVd9fyDUu2kLtpDAYdwvwBOmkn%2B9zg%2BAfRcBTV%2BlnY3KDlgwrIuKjIXPFOFV9MKN%2B61eqqZab7czks%2FxQy%2Fz4UKE4AHdbCHco%2F30rRfFoF9wPGT1NoCSMmwqYqKiIoXMvwbRMC0KaaFDhGChhMtY5HOLUonWxmAYeh2mij%2Bx%2FeFmt%2F3PdGR%2FGPVmJop84gl&X-Amz-Signature=6c22cfcfcbc55de6fbbed3bbcdf390bed0aee5805e3ecfef26000a67b384da63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## 그리고 Tilemap의 Tag설정을 ‘Ground’ 로 설정해준다
>
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f7409f2e-4475-4a8a-980a-94a1bccbf699/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXR5SOQM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKtLb49ey%2F5zh1Mc1gqYU%2F53X99QCNlJhWQgXIBkMJqgIhAJWmdTZfQKRMqfwi7rjpsQr%2FapJpShOdvDRCHmryR%2FjgKv8DCC0QABoMNjM3NDIzMTgzODA1IgweDE6VV3POGrkDKFIq3ANg95zEh3uyXRp%2FPDFaWe4sV1x77qRMtKNiKPDlEIDiFdxjzQ5kD7DJKtHst2BC2fYN7nvZkZeOLACMSv5%2F33xdMxGAx6h0U7spM25KPI8Yo7eSH3IYbfYJkynsBggF1bOz38DVpr3brxhQZuQlEJbAgUuECMpEGAhuIssfS3axkaFEZsK%2FUA12mdB5Yiz1v1YDl8NfNvKq1ab0p%2FL%2Bof1QjFufXnOWPu9mpnUUPzZHwgJUCBUcg%2B%2BGv5Do1%2FUv8iPUiKcMDKnO7qtw%2F0lYe4yfZt2i5nAy1LSWFT35c5vwQAtO4uQrrZSWfcjK3QBJrRD4460vdRcuMGFrl9ZrUwTmTwiIQjDlxyTfBqNYQELI44CsKC3JiUGZqnflqsc%2FPV5FElpDkCLLQr%2FthS8bROUoGrkafSYi7i6nHd2eJIuUyE8FbFIBGQxpExLW%2FTPUi48%2Ftd2I0ahS81ctVlpHGeHgFo3UQ9zIJHj3g8wTnVQR%2FW5cBiWHgxqhsq4Rve9PVqCmfYfn9Ek%2FKdM1uHcmCn10%2F%2BJuqmPi2yKpC8T5rUhKofkwHPeY0kMiyw4p28WQ1BbmXZc12q55MlFUfeIYSBA4Umtox4TXzjuq4zDv9HlKFMzXIKGk9V3YQcIcaTDAv4jEBjqkAfGI6bd1dReIbrKFU3Ko8ti1oHeNTjVd9fyDUu2kLtpDAYdwvwBOmkn%2B9zg%2BAfRcBTV%2BlnY3KDlgwrIuKjIXPFOFV9MKN%2B61eqqZab7czks%2FxQy%2Fz4UKE4AHdbCHco%2F30rRfFoF9wPGT1NoCSMmwqYqKiIoXMvwbRMC0KaaFDhGChhMtY5HOLUonWxmAYeh2mij%2Bx%2FeFmt%2F3PdGR%2FGPVmJop84gl&X-Amz-Signature=074bf2fde7357abf698ce589d3ebca097af9dfe09dbcba4a6c4859e3dbb32b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 ****랜덤타일맵 생성 - 2 (재배치 스크립트 준비)****
>
> ## 게임메모리를 생성하는 이유는 게임메모리 자체를 메모리에 얹어버릴것임
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/720601d4-071d-4a94-9fd5-cfe18f50daf5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQVZMBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEwVTeJ8mrQ1OQn5TelSNcCDmOB4sp5OmbxirT9BfohMAiEAi6C0NCqziDOaFNr83eqE3v9a%2Bc5f614wygXRuaEzqGsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWc1fe8L%2FlDxg4OfSrcA0Oigp6%2BA34prcbTRmaFb%2B8OLaV4JyvXKFW6JuVec%2BTt5J%2BssONog4MOc1zfxakPQtvT48kQJJUIUMV5GNYm%2BK01XV2jPOsWi%2BSO2P4b%2Bdy4B%2FU9g6VtCNLBFZu3XgszqW%2F8O2VSn5erODzkH02iML33nMC%2BUn2IMdTUB8bQOT%2FVSZLVjAr96L3Be6UD6z8cnVEv%2Bqg1iLkjfuZ9UwX3putTBb5yC46UcJV2662WMeTnrFTuq%2BGydH1Gh0w7O7mJJ6Z96ginZu8LGkCTlwKZCwOoQ0jieiiviQpYg5uKAIyswGKbto6Lr6bpvFIT0CZgk5dodxbRo8RciaOOMXUQAWX9Eu3EYCUL4RlzjkRW0h5FbKnfTQEDiAdao8EgXb4QgZOYE2vU4Dv3XlXtzpRyD8OPY1fEN0jn4NRNpJZiNdTrqsUcUiMRNbNL2Bp3tHIQvBWYb5YHphm0SUyynAGwrYGuHwsu%2B2OV%2BAkY0OWmtabMUj%2BC1Y6oH1irf7kTUM8TmsUkZFL%2BG2K3SUGr0R12HHlJq9h%2BLxZwLiv%2FFZcgZ5o6E0A8Ezzyy7b5AeER5M5EXVXL3K4zd4ONdW%2BiEmO2Q2ya8EE%2F4vJ5n3zampnExWIUH%2F3k8MFFeA%2BZIWCEMIW%2FiMQGOqUBIox%2FLrV%2F8Y86nJvBhNZ8Igj544l49XBR3shxaGLN%2FyXVq%2F5s9Koj6nYTjQnkFeEf%2B%2F%2BDmf8pxoWduX7gq%2BhIhm5SpTCyw7KVG9WRurz5cRYKpkz%2Fmtknhecm2zptzxFzznyvmdG8QqtnUi57uRxYJmxSan4QgqB75E%2FKVm0iM6G9O7QvnbMFyd0CeX8yeeLSYJ5jw4vmJs9ZUgZq3d8AnpFZ1afL&X-Amz-Signature=73fe8d04201842446214fe7e30ed232b7110248f7501191ec597e585f44f4383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15caa34c-1b5e-4d00-aadf-6fbbcd41985f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQVZMBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEwVTeJ8mrQ1OQn5TelSNcCDmOB4sp5OmbxirT9BfohMAiEAi6C0NCqziDOaFNr83eqE3v9a%2Bc5f614wygXRuaEzqGsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWc1fe8L%2FlDxg4OfSrcA0Oigp6%2BA34prcbTRmaFb%2B8OLaV4JyvXKFW6JuVec%2BTt5J%2BssONog4MOc1zfxakPQtvT48kQJJUIUMV5GNYm%2BK01XV2jPOsWi%2BSO2P4b%2Bdy4B%2FU9g6VtCNLBFZu3XgszqW%2F8O2VSn5erODzkH02iML33nMC%2BUn2IMdTUB8bQOT%2FVSZLVjAr96L3Be6UD6z8cnVEv%2Bqg1iLkjfuZ9UwX3putTBb5yC46UcJV2662WMeTnrFTuq%2BGydH1Gh0w7O7mJJ6Z96ginZu8LGkCTlwKZCwOoQ0jieiiviQpYg5uKAIyswGKbto6Lr6bpvFIT0CZgk5dodxbRo8RciaOOMXUQAWX9Eu3EYCUL4RlzjkRW0h5FbKnfTQEDiAdao8EgXb4QgZOYE2vU4Dv3XlXtzpRyD8OPY1fEN0jn4NRNpJZiNdTrqsUcUiMRNbNL2Bp3tHIQvBWYb5YHphm0SUyynAGwrYGuHwsu%2B2OV%2BAkY0OWmtabMUj%2BC1Y6oH1irf7kTUM8TmsUkZFL%2BG2K3SUGr0R12HHlJq9h%2BLxZwLiv%2FFZcgZ5o6E0A8Ezzyy7b5AeER5M5EXVXL3K4zd4ONdW%2BiEmO2Q2ya8EE%2F4vJ5n3zampnExWIUH%2F3k8MFFeA%2BZIWCEMIW%2FiMQGOqUBIox%2FLrV%2F8Y86nJvBhNZ8Igj544l49XBR3shxaGLN%2FyXVq%2F5s9Koj6nYTjQnkFeEf%2B%2F%2BDmf8pxoWduX7gq%2BhIhm5SpTCyw7KVG9WRurz5cRYKpkz%2Fmtknhecm2zptzxFzznyvmdG8QqtnUi57uRxYJmxSan4QgqB75E%2FKVm0iM6G9O7QvnbMFyd0CeX8yeeLSYJ5jw4vmJs9ZUgZq3d8AnpFZ1afL&X-Amz-Signature=4b4da37750d8f9b1ce24466e40f8e02070883c940c0320a41004e579d6809fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 파이썬의 Main 함수를 따로 만들어서 미리 만들어둔 함수를 미리 불러와서 사용하는거랑 비슷한 논리..
>
> ```c#
> //Gamemanager.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class GameManager : MonoBehaviour
> {
>     //정적변수 static을 미리 설정해두면 즉시 클래스에서 부를 수 있다는 편리함이 있다
>     public static GameManager instance;
>     public Player player;
>
>     void Awake() 
>     {
>         instance = this;
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f6a13b67-252d-4548-a313-40bff2392131/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQVZMBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEwVTeJ8mrQ1OQn5TelSNcCDmOB4sp5OmbxirT9BfohMAiEAi6C0NCqziDOaFNr83eqE3v9a%2Bc5f614wygXRuaEzqGsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWc1fe8L%2FlDxg4OfSrcA0Oigp6%2BA34prcbTRmaFb%2B8OLaV4JyvXKFW6JuVec%2BTt5J%2BssONog4MOc1zfxakPQtvT48kQJJUIUMV5GNYm%2BK01XV2jPOsWi%2BSO2P4b%2Bdy4B%2FU9g6VtCNLBFZu3XgszqW%2F8O2VSn5erODzkH02iML33nMC%2BUn2IMdTUB8bQOT%2FVSZLVjAr96L3Be6UD6z8cnVEv%2Bqg1iLkjfuZ9UwX3putTBb5yC46UcJV2662WMeTnrFTuq%2BGydH1Gh0w7O7mJJ6Z96ginZu8LGkCTlwKZCwOoQ0jieiiviQpYg5uKAIyswGKbto6Lr6bpvFIT0CZgk5dodxbRo8RciaOOMXUQAWX9Eu3EYCUL4RlzjkRW0h5FbKnfTQEDiAdao8EgXb4QgZOYE2vU4Dv3XlXtzpRyD8OPY1fEN0jn4NRNpJZiNdTrqsUcUiMRNbNL2Bp3tHIQvBWYb5YHphm0SUyynAGwrYGuHwsu%2B2OV%2BAkY0OWmtabMUj%2BC1Y6oH1irf7kTUM8TmsUkZFL%2BG2K3SUGr0R12HHlJq9h%2BLxZwLiv%2FFZcgZ5o6E0A8Ezzyy7b5AeER5M5EXVXL3K4zd4ONdW%2BiEmO2Q2ya8EE%2F4vJ5n3zampnExWIUH%2F3k8MFFeA%2BZIWCEMIW%2FiMQGOqUBIox%2FLrV%2F8Y86nJvBhNZ8Igj544l49XBR3shxaGLN%2FyXVq%2F5s9Koj6nYTjQnkFeEf%2B%2F%2BDmf8pxoWduX7gq%2BhIhm5SpTCyw7KVG9WRurz5cRYKpkz%2Fmtknhecm2zptzxFzznyvmdG8QqtnUi57uRxYJmxSan4QgqB75E%2FKVm0iM6G9O7QvnbMFyd0CeX8yeeLSYJ5jw4vmJs9ZUgZq3d8AnpFZ1afL&X-Amz-Signature=7b45be72b5c0bd2b9a5b93b994a680bfbb7898d56c4454cd8fad0f2402736a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> # 코드작성
>
> ```c#
> //Reposition.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Repostion : MonoBehaviour
> {
>     //트리거가 체크된 콜라이더를 벗어났을때
>     //이를 위해 플레이어에 Area를 만들었다 (충돌여부를 확인하기 위해)
>     void OnTriggerExit2D(Collider2D collision)
>     {
>         //이 콜라이더의 주인
>         //Area 태그가 '아닐때' 코드가 실행되도록함
>         //만약 Area태그가 아닌다면 코드를 실행하지 않겠다 라는 뜻
>         if(!collision.CompareTag("Area"))
>             return; //코드 상단에 if return 필터를 넣음으로서 이 태그가 아닐경우 빨랑 코드가 나갈수있도록함
>
>         //거리를 구하기 위해 플레이어 위치와 타일맵 위치를 미리 저장
>
>         //플레이어 위치
>         //플레이어 포지션을 가져오기위해 게임매니저에 저장해둔 플레이어에서 위치값을 가져오는 과정
>         Vector3 playerPos = GameManager.instance.player.transform.position;
>
>         //타일맵 위치
>         //현재 이 스크립트가 들어있는 타일맵의 위치값
>         Vector3 myPos = transform.position; 
>
>         //x축과 y축 각각의 거리를 구하는 코드
>         //Mathf 는 수학 라이브러리.. 절대값을 구하기 위해 Abs를 불러옴
>         float diffX = Mathf.Abs(playerPos.x - myPos.x);
>         float diffY = Mathf.Abs(playerPos.y - myPos.y);
>
>
>         //플레이어의 이동 방향을 저장하기 위한 변수
>         //플레이어에서 미리 만들어뒀던 inputVec을 불러온다
>         Vector3 playerDir = GameManager.instance.player.inputVec;
>         //Player에서 노멀라이즈를 했기때문에 1값이 안나오니 0보다 클때(좌우 이동할때) 값을 받아온다 
>         float dirX = playerDir.x < 0 ? -1 : 1;
>         float dirY = playerDir.y < 0 ? -1 : 1;
>
>         //나중에 적이 추가되었을때 적들도 재배치를 요구하기때문에 여기서 필터를 만들어준다
>         **switch (transform.tag)
>         {
>             case "Ground":
>                 if (diffX > diffY)
>                 {
>                     //Translate : 지정된 값 만큼 현재 위치에서 이동한다
>                     //Translate(이동방향,플레이어방향,Area의크기,)
> 										//40을 곱해준 이유는 Tilemap을 4개 복사해서 쓸거기 때문에 타일맵의 총 합을 구하면 40이된다
>                     transform.Translate(Vector3.right * dirX * 40);
>                 }
>                 else if (diffX < diffY)
>                 {
>                     transform.Translate(Vector3.up * dirY * 40);
>                 }
>                 break;
>             case "Enemy":
>                 break;**
>         }
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f4af07a2-cdd5-482c-8f37-b94f8996bb57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQVZMBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEwVTeJ8mrQ1OQn5TelSNcCDmOB4sp5OmbxirT9BfohMAiEAi6C0NCqziDOaFNr83eqE3v9a%2Bc5f614wygXRuaEzqGsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWc1fe8L%2FlDxg4OfSrcA0Oigp6%2BA34prcbTRmaFb%2B8OLaV4JyvXKFW6JuVec%2BTt5J%2BssONog4MOc1zfxakPQtvT48kQJJUIUMV5GNYm%2BK01XV2jPOsWi%2BSO2P4b%2Bdy4B%2FU9g6VtCNLBFZu3XgszqW%2F8O2VSn5erODzkH02iML33nMC%2BUn2IMdTUB8bQOT%2FVSZLVjAr96L3Be6UD6z8cnVEv%2Bqg1iLkjfuZ9UwX3putTBb5yC46UcJV2662WMeTnrFTuq%2BGydH1Gh0w7O7mJJ6Z96ginZu8LGkCTlwKZCwOoQ0jieiiviQpYg5uKAIyswGKbto6Lr6bpvFIT0CZgk5dodxbRo8RciaOOMXUQAWX9Eu3EYCUL4RlzjkRW0h5FbKnfTQEDiAdao8EgXb4QgZOYE2vU4Dv3XlXtzpRyD8OPY1fEN0jn4NRNpJZiNdTrqsUcUiMRNbNL2Bp3tHIQvBWYb5YHphm0SUyynAGwrYGuHwsu%2B2OV%2BAkY0OWmtabMUj%2BC1Y6oH1irf7kTUM8TmsUkZFL%2BG2K3SUGr0R12HHlJq9h%2BLxZwLiv%2FFZcgZ5o6E0A8Ezzyy7b5AeER5M5EXVXL3K4zd4ONdW%2BiEmO2Q2ya8EE%2F4vJ5n3zampnExWIUH%2F3k8MFFeA%2BZIWCEMIW%2FiMQGOqUBIox%2FLrV%2F8Y86nJvBhNZ8Igj544l49XBR3shxaGLN%2FyXVq%2F5s9Koj6nYTjQnkFeEf%2B%2F%2BDmf8pxoWduX7gq%2BhIhm5SpTCyw7KVG9WRurz5cRYKpkz%2Fmtknhecm2zptzxFzznyvmdG8QqtnUi57uRxYJmxSan4QgqB75E%2FKVm0iM6G9O7QvnbMFyd0CeX8yeeLSYJ5jw4vmJs9ZUgZq3d8AnpFZ1afL&X-Amz-Signature=46f77a227aacc1e0a2ba012e8e71f2b087370c1aecb3f4b947d116aa010ec843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 만약 이런식으로 X축으로 화면을 벗어났을경우, 
>
> ```c#
> if (diffX > diffY)
> ```
>
> 해당코드와 같은 수평적으로 벗어난 상태이니 그에 해당되는 코드가 시작된다는 뜻
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/89d2c11f-2acb-4346-a42b-db567701d5e9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQVZMBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEwVTeJ8mrQ1OQn5TelSNcCDmOB4sp5OmbxirT9BfohMAiEAi6C0NCqziDOaFNr83eqE3v9a%2Bc5f614wygXRuaEzqGsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWc1fe8L%2FlDxg4OfSrcA0Oigp6%2BA34prcbTRmaFb%2B8OLaV4JyvXKFW6JuVec%2BTt5J%2BssONog4MOc1zfxakPQtvT48kQJJUIUMV5GNYm%2BK01XV2jPOsWi%2BSO2P4b%2Bdy4B%2FU9g6VtCNLBFZu3XgszqW%2F8O2VSn5erODzkH02iML33nMC%2BUn2IMdTUB8bQOT%2FVSZLVjAr96L3Be6UD6z8cnVEv%2Bqg1iLkjfuZ9UwX3putTBb5yC46UcJV2662WMeTnrFTuq%2BGydH1Gh0w7O7mJJ6Z96ginZu8LGkCTlwKZCwOoQ0jieiiviQpYg5uKAIyswGKbto6Lr6bpvFIT0CZgk5dodxbRo8RciaOOMXUQAWX9Eu3EYCUL4RlzjkRW0h5FbKnfTQEDiAdao8EgXb4QgZOYE2vU4Dv3XlXtzpRyD8OPY1fEN0jn4NRNpJZiNdTrqsUcUiMRNbNL2Bp3tHIQvBWYb5YHphm0SUyynAGwrYGuHwsu%2B2OV%2BAkY0OWmtabMUj%2BC1Y6oH1irf7kTUM8TmsUkZFL%2BG2K3SUGr0R12HHlJq9h%2BLxZwLiv%2FFZcgZ5o6E0A8Ezzyy7b5AeER5M5EXVXL3K4zd4ONdW%2BiEmO2Q2ya8EE%2F4vJ5n3zampnExWIUH%2F3k8MFFeA%2BZIWCEMIW%2FiMQGOqUBIox%2FLrV%2F8Y86nJvBhNZ8Igj544l49XBR3shxaGLN%2FyXVq%2F5s9Koj6nYTjQnkFeEf%2B%2F%2BDmf8pxoWduX7gq%2BhIhm5SpTCyw7KVG9WRurz5cRYKpkz%2Fmtknhecm2zptzxFzznyvmdG8QqtnUi57uRxYJmxSan4QgqB75E%2FKVm0iM6G9O7QvnbMFyd0CeX8yeeLSYJ5jw4vmJs9ZUgZq3d8AnpFZ1afL&X-Amz-Signature=65f32d11c319d3ad93e86b23171f1370e936ac6fe7088e30e74f556998853777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 이 4개의 타일이 계속해서 재활용되며 이동되는 로직인데, 그림으로 설명하면 다음과 같다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fbdd4161-0ad0-41b0-811d-70fe4115ee7d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQVZMBS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEwVTeJ8mrQ1OQn5TelSNcCDmOB4sp5OmbxirT9BfohMAiEAi6C0NCqziDOaFNr83eqE3v9a%2Bc5f614wygXRuaEzqGsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWc1fe8L%2FlDxg4OfSrcA0Oigp6%2BA34prcbTRmaFb%2B8OLaV4JyvXKFW6JuVec%2BTt5J%2BssONog4MOc1zfxakPQtvT48kQJJUIUMV5GNYm%2BK01XV2jPOsWi%2BSO2P4b%2Bdy4B%2FU9g6VtCNLBFZu3XgszqW%2F8O2VSn5erODzkH02iML33nMC%2BUn2IMdTUB8bQOT%2FVSZLVjAr96L3Be6UD6z8cnVEv%2Bqg1iLkjfuZ9UwX3putTBb5yC46UcJV2662WMeTnrFTuq%2BGydH1Gh0w7O7mJJ6Z96ginZu8LGkCTlwKZCwOoQ0jieiiviQpYg5uKAIyswGKbto6Lr6bpvFIT0CZgk5dodxbRo8RciaOOMXUQAWX9Eu3EYCUL4RlzjkRW0h5FbKnfTQEDiAdao8EgXb4QgZOYE2vU4Dv3XlXtzpRyD8OPY1fEN0jn4NRNpJZiNdTrqsUcUiMRNbNL2Bp3tHIQvBWYb5YHphm0SUyynAGwrYGuHwsu%2B2OV%2BAkY0OWmtabMUj%2BC1Y6oH1irf7kTUM8TmsUkZFL%2BG2K3SUGr0R12HHlJq9h%2BLxZwLiv%2FFZcgZ5o6E0A8Ezzyy7b5AeER5M5EXVXL3K4zd4ONdW%2BiEmO2Q2ya8EE%2F4vJ5n3zampnExWIUH%2F3k8MFFeA%2BZIWCEMIW%2FiMQGOqUBIox%2FLrV%2F8Y86nJvBhNZ8Igj544l49XBR3shxaGLN%2FyXVq%2F5s9Koj6nYTjQnkFeEf%2B%2F%2BDmf8pxoWduX7gq%2BhIhm5SpTCyw7KVG9WRurz5cRYKpkz%2Fmtknhecm2zptzxFzznyvmdG8QqtnUi57uRxYJmxSan4QgqB75E%2FKVm0iM6G9O7QvnbMFyd0CeX8yeeLSYJ5jw4vmJs9ZUgZq3d8AnpFZ1afL&X-Amz-Signature=2a7450a34a5e8c336d8e7c78e8dea43f0774cc8d8edab37bbfb3daec8acd9a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **시잇팔 버그발생! **
> > ```c#
> > Instructions: Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.
> > Query: NullReferenceException: Object reference not set to an instance of an object
> > Repostion.OnTriggerExit2D (UnityEngine.Collider2D collision) (at Assets/Scripts/Repositon.cs:21)
> > ```
> >
> > 이 버그가 발생되길래 21번째줄 가서 확인해보니 다음코드였다
> >
> > ```c#
> > Vector3 playerPos = GameManager.instance.player.transform.position;
> > ```
> >
> > 아니 public으로 설정도해뒀고 문제없는데 왜 자꾸 버그가 날까… 보아하니
> >
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ce410828-7a2e-46bf-ad90-3eea77d3a5ce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHGX4Z3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC4kP5kxxG6l51jjU107qhoLWcuzgTSS9NZ804ry9xO6QIhALhSKBq6NYf8lANIiUFRc%2BUT02HH7WaEfeLZSXZMv%2F2zKv8DCC0QABoMNjM3NDIzMTgzODA1IgyaBOTCGNpqUrjUsykq3AM1k25vll%2BJkkTUWT6EA0Yubdb2xsdi45d9IwSOlVZg6oywJpVizkPxnCegnBQkjJI6oaBgaj3IdI9hJe3kaBvzrn2Pr1sW7rqE8N4eAkOzSpH2VsvNS1s1iAQlgSi1t38KMPl8tf8Cosc7Gj%2B9AUACDK0%2FU3rOogEKiO2PmKkgAvnebDEIkHJ%2BcbZh6ieN5PeqM83WhJYU5%2B6zXJew6gbA0pqIa5CShm4X%2BO7lVkxhPWF2l3RduAK9zS4Ednmw1JVAD3vlTNWyVZpR7Zp67e8mcbiEhg2giAp0lhUr4Eq94iXIcfzB9lSzFXEo4xVtGjl3pdi%2FrtzhelRI44MUITdL22u9LK0mpQIsMUGD0ZsPVJdDRt7TOl3INCb%2FxhKwTa9gZJ90VLIrbrO4c4TDcgBYRi7HDa3MlFaYPsuxzfNtCFPFCq3JGY2HfXqVF3SKLI4VUeR4UmMWC%2FvGCuzLUilTvoaIVKrT%2BcvHbbWYZP079jNo4tgtpKpxadcxg6DExrpg8uXd359hivDzCmoWV4UeownNkrPuzxrkAT0xFmUIGz7VcusFLWfqkvdY0GCEqqNkzrYWV5QM7VWx4ZzDfnXW75%2FivBQ2pD1jmnKBHcTEJVeu2sNQkgJ5N7CwlzDkv4jEBjqkAaPe9Zns6gyQeOjGBcejWzIGqXBPUFim2xYMhHTttBo%2B3yrc6KAn6ToUdDEX%2BT0OspGM3JNbMLijQBhjKNSk2haYljeAaqdn2wOe93Jvx%2FnUWzy0ciUc7ck1ZFon3%2FuaYkErBITIr0tZTYTI7QA4JdCVX2H%2BPSMyvN%2Bh2wRXQXznOuUlUPnbnqZ%2FRewysN%2FUgymLhzz6FjRNgt3LBeXFlV2BBm5k&X-Amz-Signature=77bff945c033a7b6cce65f3169d5f8b88af8a855d09e0f996675d5fe5b9b711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > 게임스타트를 투르면 GameManager에 설정해뒀던 Player가 날아가버린다.. 뭐야 이 버그
> >
> >
> > ## 답은 GameManager.cs에 있었다…
> >
> >
> > 코드가 Awake될때 인스턴트값에 자기 자신을 넣었어야 Player가 날아가지 않았다…
> >
> >
> > 기존에는 GetComponet를 사용해서 public함수에 직접 접근했었는데 뭐가 문제일까?
> >
> > ```c#
> > using System.Collections;
> > using System.Collections.Generic;
> > using UnityEngine;
> >
> > public class GameManager : MonoBehaviour
> > {
> >     //정적변수 static을 미리 설정해두면 즉시 클래스에서 부를 수 있다는 편리함이 있다
> >     public static GameManager instance;
> >     public Player player;
> >
> >     void Awake() 
> >     {
> >         **instance = this;**
> >         /*
> >         instance = GetComponent<GameManager>();
> >         player = GetComponent<Player>();
> >         */
> >     }
> > }
> > ```
> >
> >
>
>

> 🔥 **카메라를 설정해주자**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c4d1ee33-b885-4a0c-9bd7-637f1f3dfb2a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=c31a84b07e3f092212f67a7a13d6173e13e777b6726db5285b9a9184c5fcb00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 해상도가 짝수여야 다음 에러를 해결할 수 있다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/317b5dc4-72e5-404e-94f0-bf0336732256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=b44a7b733c4c9d49eebd1de9a3d3971e723a17126c047465701657658f2626a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ed5226b1-59cc-4a15-a1de-c08f83e8a0e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=97e79632fee1bae75998abb1c16a013a16361495dff078cae8fdd148140347d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> ## 플레이어를 따라다니는 카메라를 구현해보자
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1c219ec-ab5f-4c75-bbe1-db46d156a112/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=1c6877a6c3937e49605b98675bc62075a84b77f949cf211336d39920f5377936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/bb8844b0-c01d-4bfe-be28-5d14e87126c5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=bb19af0be9881bb1411f4fb9c6d773db5b855ea1cf78e02ae2601e36c315268d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **Virtual Camera는 Main Camera의 감독역할을 하게된다**
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fb561c37-40b7-4bc3-b57c-8903478075ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=221b57bd008098893a6ce7bd48768818dc047cd6286e316a4e3107da2f4887a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ### Virtual Camera : 야 MainCamera! Player를 따라다녀!
>
> 라는 의미…
>
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4fd4d0fb-b438-448a-8118-4c0db6ad1796/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGQRQGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHEEeOFVDJJlmhZxKdyhpfp%2FO4uE7xeBuDKIYwmqs5fcAiBuiBK4jFBC54C2ScESqHvcYXPRPsqpS3x8N9WWhg9%2F4Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpBL1wVO5sMITSaW6KtwDKVWKaQD0aGjNqfKzN170UeZOSXqwc%2FLu8W6MRjHX1gmh6QlWuc1pKaJ4drZ6qxmMPhMqqj0%2BsYljMcsZcKz4Qt%2BplTNIBMCvEg2NZ%2BSknKd1GBcTkbbrriQo1d5ND94d5Vg%2FMAgAiodKZvNxkkCecPZGbvSdkoN2DqYP%2BO7IFMpDlsEpGsbAbLy2aVjv8LC8PhelXu3s8dBgMaxDUTpzfW%2FXVyzRLfuj%2BMSRcjRIpsxYdjQEfe02rHJPUvmHXaQdG8fdldr1I%2BNFpQTHsbiF4AfrcF6lnm7hUnzXKLiIfaWVGJcCnCYkRm7fn0lZs%2BkhtJRRAmYU%2B1a7kJmjseigQlmybkXqF5qeglKBVfiTwxTAMiMoXxRgxcI46UbsxNfpgK7M%2FBKUKxBwMsho8X9Itsked21f6W1ZaztiQFauW4v9ho3i5WGNoMjmJKBCg8EyNsVjZ9HnLVt6HpmN4xZ%2B9xVSTo8M6o4frJ2siqbaYlS%2FoXu%2FyrbGXrwv0VidaMfrmG8RIidZuALFtovZxXFCg8b%2Bz9t0Fnw0H7bg003cri9TRZUkE0S3WsZdj4pfESR7WTDPV%2F%2F81Hjb71jy4BR8qFu4v3hBNWM4MYIu0IguxgVtmiHIiySs5Q7tx2cwwr%2BIxAY6pgEF7Vj5v9cqM0NjdJ9G2348VWDyF2%2FnkqbcUcje2D1GO%2Bg0vyZ94MB7F%2F9pK0CVxq6iwykJQ5ouV69PDRsm2W2T%2BaARSVZtN8HE0Mm%2FdJYp6zXQ4nhwyEMjpfK8S3c88rmKuQ6iDQVtlz0n%2B5gzSJljNAS80PI3XACIFBlXsi%2BiDlNz57Bqg2jobZlHLMYYAr44MANGOoNz4s7uYAOX9JixoFy1aLqt&X-Amz-Signature=455372938ed11b41b7e0771814b5e38fd51a53f895494d9dba955c83c91411c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


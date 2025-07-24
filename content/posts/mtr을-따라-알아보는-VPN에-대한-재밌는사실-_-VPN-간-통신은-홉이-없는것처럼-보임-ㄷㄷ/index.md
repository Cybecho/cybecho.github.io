---
title: "mtr을 따라 알아보는 VPN에 대한 재밌는사실 : VPN 간 통신은 홉이 없는것처럼 보임 ㄷㄷ"
date: 2025-04-09T08:33:00.000Z
draft: false
tags: ["AWS", "Infra"]
series: ["Infra & Network"]
description: "AWS에서 VPN을 구축하며 mtr로 VPC 간 통신을 분석한 결과, IPSec으로 암호화된 홉은 보이지 않지만 지연시간으로 거리를 유추할 수 있다. tailscale을 이용해 내부 및 외부 네트워크 속도를 비교한 결과, 내부 네트워크는 매우 빠른 속도를 보였고, 외부 네트워크는 홉이 많지만 평균 속도는 87로 나타났다."
notion_id: "1d01bab9-e3f8-804f-835c-e5b3f0c6d9e4"
notion_url: "https://www.notion.so/mtr-VPN-VPN-1d01bab9e3f8804f835ce5b3f0c6d9e4"
---

# mtr을 따라 알아보는 VPN에 대한 재밌는사실 : VPN 간 통신은 홉이 없는것처럼 보임 ㄷㄷ

> **Summary**
> AWS에서 VPN을 구축하며 mtr로 VPC 간 통신을 분석한 결과, IPSec으로 암호화된 홉은 보이지 않지만 지연시간으로 거리를 유추할 수 있다. tailscale을 이용해 내부 및 외부 네트워크 속도를 비교한 결과, 내부 네트워크는 매우 빠른 속도를 보였고, 외부 네트워크는 홉이 많지만 평균 속도는 87로 나타났다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1094172-5c2d-4aa5-b895-879351a4e26f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KAGIVR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9L%2BylXbxQDaBfIDSLNF7dkGbapOYsSC%2B02zVja0bcvgIgQ1hhoNOQGu1vMUwxBUd%2Ff2JEA0D5T4e8thPxv%2BpKAQoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCZpvB04NKJxEgCHXircA8CDTWpEkGf4FCY2JeBSBX1q0geBDgx5x6m3z6tEoa6SX2m%2FZujf7DdM0fY7GT2bfSQBBhsLckEPQFXfYQY482h9jksvi1wqXIAT%2BbuK9G6NQQUfJLpd7HF3AbySNQNqSAeIuQETloKabHc%2FFl7UpHcMUOKHSa0eBkA6OgvN3w%2FCzmJWcV1tL9%2F8avnAA22jbMpXZ9LfAtte8q0YpJ0uBRYY0u3Qw9USoN12T4geXFsYvB3xaa7IVwZjcgFwh3hdHCoSQuJJyhECgy3V79FPPNdCiBHcv8jaFUqyRokare5NOYXCqEkYDeFrZvNyDOveHa9SCtbu0g7UJzBF9XeMnbbeoc17h8T2PoKcq4%2FyIu0Bv5pPkgWVfa6W9HkX0MHKtwXeDvkwOJnRnPmBiaXhIx9QDoTSgxDo9WhANHlcPpC9fJFr19Px1p4l0xhoBNVZvMnXeYqk8X%2BDn4T4RvaGPpEDtXYhCER6Jiwd16q365nRZbhhYCYbU3Z04X42z4scLGM2DYCHbAiMDJJhHIZhjWbe6LhjTju4rZSOIvM%2FbmcUPsWYxgUdJWkfotGm8INOeLU3313riQnyZa%2BE2cDRYz2oJ3v2sQBZRFlwOgtD66kKFBmnTQUgJZ3%2FouzZMKGbiMQGOqUBVgOiLuwSA7W%2FKAoDzm4ffsO%2BontpVS%2Fuh0C9eRmAUZBPRW%2F4CSOFUlBbZQimsuk8uBIcRERcivfowgPzdqnm9Ogwzc3W0eDcBjX7Cvg9OHGI6MfHaqL8V8RZSegXvRP7cL8dTkcBE6wyWFgbd2oqdWGfPkIiSx47A1eeUMo4oaxUjHysHxtMDT3UcTBk%2BJGrp8e1oPsA0lQGggZdud6vFznlezUO&X-Amz-Signature=24daf423a3713b569e1f88f579afc1e2da0ec80df5ec50ac72ec2b4f508baa87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

AWS에서 VPN을 구축해보면서, mtr로 다른 VPC로 ping 홉 따라가보니 인스턴스 사이에 홉이 안보였음

근데 또 8.8.8.8로 찍으면, 뭔가 홉이 많이 나옴…

엥? 같은 계정 , 같은 리전이라, VPC끼리 1:1 로 뭔가 내부적으로 연결되어있나?

라고 생각했지만~~?

아님… IPSec으로 암호화된 친구들은 사이에 홉들이 암호화되어 안보이는것임…

그러면 홉 사이사이 어케 분석함?

→ 못함… 근데 지연시간으로 어느정도의 거리를 유추해낼 수 있진 않을까?


그래서, tailscale로 묶여있는 우리집 네트워크로도 분석해봄… VPN으로 묶여있더라도, 내부, 외부 속도가 얼마나 차이날까?

### 8.8.8.8 외부 네트워크로 나가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5826c8d-63d3-4caf-ae72-08454314ed11/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KAGIVR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9L%2BylXbxQDaBfIDSLNF7dkGbapOYsSC%2B02zVja0bcvgIgQ1hhoNOQGu1vMUwxBUd%2Ff2JEA0D5T4e8thPxv%2BpKAQoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCZpvB04NKJxEgCHXircA8CDTWpEkGf4FCY2JeBSBX1q0geBDgx5x6m3z6tEoa6SX2m%2FZujf7DdM0fY7GT2bfSQBBhsLckEPQFXfYQY482h9jksvi1wqXIAT%2BbuK9G6NQQUfJLpd7HF3AbySNQNqSAeIuQETloKabHc%2FFl7UpHcMUOKHSa0eBkA6OgvN3w%2FCzmJWcV1tL9%2F8avnAA22jbMpXZ9LfAtte8q0YpJ0uBRYY0u3Qw9USoN12T4geXFsYvB3xaa7IVwZjcgFwh3hdHCoSQuJJyhECgy3V79FPPNdCiBHcv8jaFUqyRokare5NOYXCqEkYDeFrZvNyDOveHa9SCtbu0g7UJzBF9XeMnbbeoc17h8T2PoKcq4%2FyIu0Bv5pPkgWVfa6W9HkX0MHKtwXeDvkwOJnRnPmBiaXhIx9QDoTSgxDo9WhANHlcPpC9fJFr19Px1p4l0xhoBNVZvMnXeYqk8X%2BDn4T4RvaGPpEDtXYhCER6Jiwd16q365nRZbhhYCYbU3Z04X42z4scLGM2DYCHbAiMDJJhHIZhjWbe6LhjTju4rZSOIvM%2FbmcUPsWYxgUdJWkfotGm8INOeLU3313riQnyZa%2BE2cDRYz2oJ3v2sQBZRFlwOgtD66kKFBmnTQUgJZ3%2FouzZMKGbiMQGOqUBVgOiLuwSA7W%2FKAoDzm4ffsO%2BontpVS%2Fuh0C9eRmAUZBPRW%2F4CSOFUlBbZQimsuk8uBIcRERcivfowgPzdqnm9Ogwzc3W0eDcBjX7Cvg9OHGI6MfHaqL8V8RZSegXvRP7cL8dTkcBE6wyWFgbd2oqdWGfPkIiSx47A1eeUMo4oaxUjHysHxtMDT3UcTBk%2BJGrp8e1oPsA0lQGggZdud6vFznlezUO&X-Amz-Signature=92ba6b5e0ac60b60342ce77a7d6e2676875d96ed116b63f4a55f02121e2d9357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (외부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4f45636b-b3ad-4308-948b-55da8c952d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KAGIVR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9L%2BylXbxQDaBfIDSLNF7dkGbapOYsSC%2B02zVja0bcvgIgQ1hhoNOQGu1vMUwxBUd%2Ff2JEA0D5T4e8thPxv%2BpKAQoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCZpvB04NKJxEgCHXircA8CDTWpEkGf4FCY2JeBSBX1q0geBDgx5x6m3z6tEoa6SX2m%2FZujf7DdM0fY7GT2bfSQBBhsLckEPQFXfYQY482h9jksvi1wqXIAT%2BbuK9G6NQQUfJLpd7HF3AbySNQNqSAeIuQETloKabHc%2FFl7UpHcMUOKHSa0eBkA6OgvN3w%2FCzmJWcV1tL9%2F8avnAA22jbMpXZ9LfAtte8q0YpJ0uBRYY0u3Qw9USoN12T4geXFsYvB3xaa7IVwZjcgFwh3hdHCoSQuJJyhECgy3V79FPPNdCiBHcv8jaFUqyRokare5NOYXCqEkYDeFrZvNyDOveHa9SCtbu0g7UJzBF9XeMnbbeoc17h8T2PoKcq4%2FyIu0Bv5pPkgWVfa6W9HkX0MHKtwXeDvkwOJnRnPmBiaXhIx9QDoTSgxDo9WhANHlcPpC9fJFr19Px1p4l0xhoBNVZvMnXeYqk8X%2BDn4T4RvaGPpEDtXYhCER6Jiwd16q365nRZbhhYCYbU3Z04X42z4scLGM2DYCHbAiMDJJhHIZhjWbe6LhjTju4rZSOIvM%2FbmcUPsWYxgUdJWkfotGm8INOeLU3313riQnyZa%2BE2cDRYz2oJ3v2sQBZRFlwOgtD66kKFBmnTQUgJZ3%2FouzZMKGbiMQGOqUBVgOiLuwSA7W%2FKAoDzm4ffsO%2BontpVS%2Fuh0C9eRmAUZBPRW%2F4CSOFUlBbZQimsuk8uBIcRERcivfowgPzdqnm9Ogwzc3W0eDcBjX7Cvg9OHGI6MfHaqL8V8RZSegXvRP7cL8dTkcBE6wyWFgbd2oqdWGfPkIiSx47A1eeUMo4oaxUjHysHxtMDT3UcTBk%2BJGrp8e1oPsA0lQGggZdud6vFznlezUO&X-Amz-Signature=98cf8c7472b14a4fcdbf5fc865ef74bd2fffc75bf39df09e1e3277a0701a545f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (내부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c3070734-535e-464b-ad44-07917023ccdd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KAGIVR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9L%2BylXbxQDaBfIDSLNF7dkGbapOYsSC%2B02zVja0bcvgIgQ1hhoNOQGu1vMUwxBUd%2Ff2JEA0D5T4e8thPxv%2BpKAQoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCZpvB04NKJxEgCHXircA8CDTWpEkGf4FCY2JeBSBX1q0geBDgx5x6m3z6tEoa6SX2m%2FZujf7DdM0fY7GT2bfSQBBhsLckEPQFXfYQY482h9jksvi1wqXIAT%2BbuK9G6NQQUfJLpd7HF3AbySNQNqSAeIuQETloKabHc%2FFl7UpHcMUOKHSa0eBkA6OgvN3w%2FCzmJWcV1tL9%2F8avnAA22jbMpXZ9LfAtte8q0YpJ0uBRYY0u3Qw9USoN12T4geXFsYvB3xaa7IVwZjcgFwh3hdHCoSQuJJyhECgy3V79FPPNdCiBHcv8jaFUqyRokare5NOYXCqEkYDeFrZvNyDOveHa9SCtbu0g7UJzBF9XeMnbbeoc17h8T2PoKcq4%2FyIu0Bv5pPkgWVfa6W9HkX0MHKtwXeDvkwOJnRnPmBiaXhIx9QDoTSgxDo9WhANHlcPpC9fJFr19Px1p4l0xhoBNVZvMnXeYqk8X%2BDn4T4RvaGPpEDtXYhCER6Jiwd16q365nRZbhhYCYbU3Z04X42z4scLGM2DYCHbAiMDJJhHIZhjWbe6LhjTju4rZSOIvM%2FbmcUPsWYxgUdJWkfotGm8INOeLU3313riQnyZa%2BE2cDRYz2oJ3v2sQBZRFlwOgtD66kKFBmnTQUgJZ3%2FouzZMKGbiMQGOqUBVgOiLuwSA7W%2FKAoDzm4ffsO%2BontpVS%2Fuh0C9eRmAUZBPRW%2F4CSOFUlBbZQimsuk8uBIcRERcivfowgPzdqnm9Ogwzc3W0eDcBjX7Cvg9OHGI6MfHaqL8V8RZSegXvRP7cL8dTkcBE6wyWFgbd2oqdWGfPkIiSx47A1eeUMo4oaxUjHysHxtMDT3UcTBk%2BJGrp8e1oPsA0lQGggZdud6vFznlezUO&X-Amz-Signature=a8f515c4f1970d0f7e5532dc2f4cfe9902ec14efe2ed244770279ee876109650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


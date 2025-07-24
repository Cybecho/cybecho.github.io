---
title: "mtr을 따라 알아보는 VPN에 대한 재밌는사실 : VPN 간 통신은 홉이 없는것처럼 보임 ㄷㄷ"
date: 2025-04-09T08:33:00.000Z
draft: false
tags: ["AWS", "Infra"]
series: ["Infra & Network"]
description: "AWS에서 VPN을 구축하며 mtr을 사용해 VPC 간 통신을 분석한 결과, IPSec으로 암호화된 홉은 보이지 않았고, 외부 네트워크로 나갈 때는 많은 홉이 나타났다. Tailscale VPN을 통해 내부 네트워크에서는 매우 빠른 속도를 보여주었고, 외부 네트워크에서는 평균 속도가 87로 나타났다. 이는 VPN 사용 시에도 같은 네트워크 내에서는 낮은 레이턴시를 유지한다는 것을 보여준다."
notion_id: "1d01bab9-e3f8-804f-835c-e5b3f0c6d9e4"
notion_url: "https://www.notion.so/mtr-VPN-VPN-1d01bab9e3f8804f835ce5b3f0c6d9e4"
---

# mtr을 따라 알아보는 VPN에 대한 재밌는사실 : VPN 간 통신은 홉이 없는것처럼 보임 ㄷㄷ

> **Summary**
> AWS에서 VPN을 구축하며 mtr을 사용해 VPC 간 통신을 분석한 결과, IPSec으로 암호화된 홉은 보이지 않았고, 외부 네트워크로 나갈 때는 많은 홉이 나타났다. Tailscale VPN을 통해 내부 네트워크에서는 매우 빠른 속도를 보여주었고, 외부 네트워크에서는 평균 속도가 87로 나타났다. 이는 VPN 사용 시에도 같은 네트워크 내에서는 낮은 레이턴시를 유지한다는 것을 보여준다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1094172-5c2d-4aa5-b895-879351a4e26f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB42ZA4T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXRvyVkJW%2F1d2eAK8o931RpMcNYeagnm9OBuL0WYt%2FHgIhAJfv0PMdISxqD%2FXAPhn5WcFKxL8o8ax%2F%2FoqSJtR3ljOHKv8DCCkQABoMNjM3NDIzMTgzODA1IgxPlQxyussBs%2BHdr4gq3AN5o1vBwnPGAScj2YPiIF6Yko9bwiOI%2BTMqku8OhCQgBMGUepEN1nGXY31TUm0sw7Yvw2dXfG71D4uy29ClP8ekWzOpuPKFfg%2BEjzoV5iEpAIh6VWb6TMVWFc0sYsgCOpoG%2FeV7W%2BV%2ByUeyBISCVvoN0MyUdOjYSaX7XskGpbrLsVgSo8uzDJEfssm8BZ549%2F1HpiYjIVqolHJkJ12qNlILvH7aQFpldtuAJawznCQTGof%2FiSMLgiA6llDRWYWk4RfXJVg4n7zPsjDxFoYPqXulXG8LO9STuPMAWGut8apa3%2BarL8bGGDLo9I9ryrR49%2FbG1%2F%2FWwnFF9HY6lRBEVlIUhFQYCiHHJupCoHyeDf%2FoFPCpp%2Ff2FPWmfm6RUKUIKNDtZYjir6p77RZJRVkuy%2Bk8zVYEvo%2F5s174ARvRaZ3D49Z23jJ%2FuFvRSGhJeRo1DYKbpWt8eTvDsRkRlKHiujPIWw5klKRsXwGiSJvNIkJ4eVYvHS%2B%2F4d4i%2F9UgWKUgRxcuGgq71vNDO4VeYCQtCPSrXvY02Gw7RhKkrNUuxvKzAfkdAElzfHbLZKQzIlTby%2BTiNPlotmRR7FxoAMJlBV1DHjlbuHbJFbYnG3%2BRIHPvF5CSvaWahoI2dOdwUjCbz4fEBjqkAW3MsT34mvRAe1u9%2Fh1R6qEj8rDOKfISFwSNwR1MQ4HIBnyWfj%2BF9uIgwPTpTIKE79RmDitc19DR%2BBgoptNtZ59kGDlpByrY8RbiFPPeAoU0euf9p4R%2BZROjyUrkMAh2qLM8n0n2uGaFBrfHvX77LIssU%2F6M5BIfs85WE4n8JRertc%2F4%2FvYaYMoEtTr0rKew5mX9vJJu5OI591oPQoET9WqgG7Rp&X-Amz-Signature=a83dbff6587534b6e7fdaaa36877beb3301cad602370089f7c6cf25e3060d51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

AWS에서 VPN을 구축해보면서, mtr로 다른 VPC로 ping 홉 따라가보니 인스턴스 사이에 홉이 안보였음

근데 또 8.8.8.8로 찍으면, 뭔가 홉이 많이 나옴…

엥? 같은 계정 , 같은 리전이라, VPC끼리 1:1 로 뭔가 내부적으로 연결되어있나?

라고 생각했지만~~?

아님… IPSec으로 암호화된 친구들은 사이에 홉들이 암호화되어 안보이는것임…

그러면 홉 사이사이 어케 분석함?

→ 못함… 근데 지연시간으로 어느정도의 거리를 유추해낼 수 있진 않을까?


그래서, tailscale로 묶여있는 우리집 네트워크로도 분석해봄… VPN으로 묶여있더라도, 내부, 외부 속도가 얼마나 차이날까?

### 8.8.8.8 외부 네트워크로 나가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5826c8d-63d3-4caf-ae72-08454314ed11/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB42ZA4T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXRvyVkJW%2F1d2eAK8o931RpMcNYeagnm9OBuL0WYt%2FHgIhAJfv0PMdISxqD%2FXAPhn5WcFKxL8o8ax%2F%2FoqSJtR3ljOHKv8DCCkQABoMNjM3NDIzMTgzODA1IgxPlQxyussBs%2BHdr4gq3AN5o1vBwnPGAScj2YPiIF6Yko9bwiOI%2BTMqku8OhCQgBMGUepEN1nGXY31TUm0sw7Yvw2dXfG71D4uy29ClP8ekWzOpuPKFfg%2BEjzoV5iEpAIh6VWb6TMVWFc0sYsgCOpoG%2FeV7W%2BV%2ByUeyBISCVvoN0MyUdOjYSaX7XskGpbrLsVgSo8uzDJEfssm8BZ549%2F1HpiYjIVqolHJkJ12qNlILvH7aQFpldtuAJawznCQTGof%2FiSMLgiA6llDRWYWk4RfXJVg4n7zPsjDxFoYPqXulXG8LO9STuPMAWGut8apa3%2BarL8bGGDLo9I9ryrR49%2FbG1%2F%2FWwnFF9HY6lRBEVlIUhFQYCiHHJupCoHyeDf%2FoFPCpp%2Ff2FPWmfm6RUKUIKNDtZYjir6p77RZJRVkuy%2Bk8zVYEvo%2F5s174ARvRaZ3D49Z23jJ%2FuFvRSGhJeRo1DYKbpWt8eTvDsRkRlKHiujPIWw5klKRsXwGiSJvNIkJ4eVYvHS%2B%2F4d4i%2F9UgWKUgRxcuGgq71vNDO4VeYCQtCPSrXvY02Gw7RhKkrNUuxvKzAfkdAElzfHbLZKQzIlTby%2BTiNPlotmRR7FxoAMJlBV1DHjlbuHbJFbYnG3%2BRIHPvF5CSvaWahoI2dOdwUjCbz4fEBjqkAW3MsT34mvRAe1u9%2Fh1R6qEj8rDOKfISFwSNwR1MQ4HIBnyWfj%2BF9uIgwPTpTIKE79RmDitc19DR%2BBgoptNtZ59kGDlpByrY8RbiFPPeAoU0euf9p4R%2BZROjyUrkMAh2qLM8n0n2uGaFBrfHvX77LIssU%2F6M5BIfs85WE4n8JRertc%2F4%2FvYaYMoEtTr0rKew5mX9vJJu5OI591oPQoET9WqgG7Rp&X-Amz-Signature=320b72faab4ccc4853b2e896f2bd101fbb3bbfafb25ff3eb8b51f98fc9d8ad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (외부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4f45636b-b3ad-4308-948b-55da8c952d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB42ZA4T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXRvyVkJW%2F1d2eAK8o931RpMcNYeagnm9OBuL0WYt%2FHgIhAJfv0PMdISxqD%2FXAPhn5WcFKxL8o8ax%2F%2FoqSJtR3ljOHKv8DCCkQABoMNjM3NDIzMTgzODA1IgxPlQxyussBs%2BHdr4gq3AN5o1vBwnPGAScj2YPiIF6Yko9bwiOI%2BTMqku8OhCQgBMGUepEN1nGXY31TUm0sw7Yvw2dXfG71D4uy29ClP8ekWzOpuPKFfg%2BEjzoV5iEpAIh6VWb6TMVWFc0sYsgCOpoG%2FeV7W%2BV%2ByUeyBISCVvoN0MyUdOjYSaX7XskGpbrLsVgSo8uzDJEfssm8BZ549%2F1HpiYjIVqolHJkJ12qNlILvH7aQFpldtuAJawznCQTGof%2FiSMLgiA6llDRWYWk4RfXJVg4n7zPsjDxFoYPqXulXG8LO9STuPMAWGut8apa3%2BarL8bGGDLo9I9ryrR49%2FbG1%2F%2FWwnFF9HY6lRBEVlIUhFQYCiHHJupCoHyeDf%2FoFPCpp%2Ff2FPWmfm6RUKUIKNDtZYjir6p77RZJRVkuy%2Bk8zVYEvo%2F5s174ARvRaZ3D49Z23jJ%2FuFvRSGhJeRo1DYKbpWt8eTvDsRkRlKHiujPIWw5klKRsXwGiSJvNIkJ4eVYvHS%2B%2F4d4i%2F9UgWKUgRxcuGgq71vNDO4VeYCQtCPSrXvY02Gw7RhKkrNUuxvKzAfkdAElzfHbLZKQzIlTby%2BTiNPlotmRR7FxoAMJlBV1DHjlbuHbJFbYnG3%2BRIHPvF5CSvaWahoI2dOdwUjCbz4fEBjqkAW3MsT34mvRAe1u9%2Fh1R6qEj8rDOKfISFwSNwR1MQ4HIBnyWfj%2BF9uIgwPTpTIKE79RmDitc19DR%2BBgoptNtZ59kGDlpByrY8RbiFPPeAoU0euf9p4R%2BZROjyUrkMAh2qLM8n0n2uGaFBrfHvX77LIssU%2F6M5BIfs85WE4n8JRertc%2F4%2FvYaYMoEtTr0rKew5mX9vJJu5OI591oPQoET9WqgG7Rp&X-Amz-Signature=3bcad673e730710f8cb223befcf0e1e9f2ec666350d3cab0132a7d6d8e6afb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (내부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c3070734-535e-464b-ad44-07917023ccdd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB42ZA4T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDXRvyVkJW%2F1d2eAK8o931RpMcNYeagnm9OBuL0WYt%2FHgIhAJfv0PMdISxqD%2FXAPhn5WcFKxL8o8ax%2F%2FoqSJtR3ljOHKv8DCCkQABoMNjM3NDIzMTgzODA1IgxPlQxyussBs%2BHdr4gq3AN5o1vBwnPGAScj2YPiIF6Yko9bwiOI%2BTMqku8OhCQgBMGUepEN1nGXY31TUm0sw7Yvw2dXfG71D4uy29ClP8ekWzOpuPKFfg%2BEjzoV5iEpAIh6VWb6TMVWFc0sYsgCOpoG%2FeV7W%2BV%2ByUeyBISCVvoN0MyUdOjYSaX7XskGpbrLsVgSo8uzDJEfssm8BZ549%2F1HpiYjIVqolHJkJ12qNlILvH7aQFpldtuAJawznCQTGof%2FiSMLgiA6llDRWYWk4RfXJVg4n7zPsjDxFoYPqXulXG8LO9STuPMAWGut8apa3%2BarL8bGGDLo9I9ryrR49%2FbG1%2F%2FWwnFF9HY6lRBEVlIUhFQYCiHHJupCoHyeDf%2FoFPCpp%2Ff2FPWmfm6RUKUIKNDtZYjir6p77RZJRVkuy%2Bk8zVYEvo%2F5s174ARvRaZ3D49Z23jJ%2FuFvRSGhJeRo1DYKbpWt8eTvDsRkRlKHiujPIWw5klKRsXwGiSJvNIkJ4eVYvHS%2B%2F4d4i%2F9UgWKUgRxcuGgq71vNDO4VeYCQtCPSrXvY02Gw7RhKkrNUuxvKzAfkdAElzfHbLZKQzIlTby%2BTiNPlotmRR7FxoAMJlBV1DHjlbuHbJFbYnG3%2BRIHPvF5CSvaWahoI2dOdwUjCbz4fEBjqkAW3MsT34mvRAe1u9%2Fh1R6qEj8rDOKfISFwSNwR1MQ4HIBnyWfj%2BF9uIgwPTpTIKE79RmDitc19DR%2BBgoptNtZ59kGDlpByrY8RbiFPPeAoU0euf9p4R%2BZROjyUrkMAh2qLM8n0n2uGaFBrfHvX77LIssU%2F6M5BIfs85WE4n8JRertc%2F4%2FvYaYMoEtTr0rKew5mX9vJJu5OI591oPQoET9WqgG7Rp&X-Amz-Signature=51019b3b8d4d218c0197a6d9805511ff01b6bd785b45411a01feb86f83dad71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


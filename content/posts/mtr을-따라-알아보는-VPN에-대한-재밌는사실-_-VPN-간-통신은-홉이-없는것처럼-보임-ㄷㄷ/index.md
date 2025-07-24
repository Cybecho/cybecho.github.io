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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1094172-5c2d-4aa5-b895-879351a4e26f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OUMUQT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCA4AnXZvwwKbhcbtE9dUI8QPgYEbHLJVTcM6LPfxa2uwIhAIDcjiEs5NgXLIwLYm0%2BSzHLcdfZ22J5rnjgm9dCzp0gKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUU3YSGGH6Ux0eU6cq3AN3CAfKQxamggs%2FjXlrh6eL%2FdXWdg%2BeTGZ%2BfOjVwteccEOA%2FjJpAasSig5nCdYE3AO3dDBHwq5TXKtMVOnS1%2Fklc8SfNy4NuRCPCI3gt1VgjId28NVbcmyIFbpum6R1GzujajY22nsVqIvcuBs%2Fm6adF88g1gGDB3ffB%2FtcnHii38siJrmUO%2Bum7w3kadm3NCOBFdypdVdzIpmntQQF4I6OGny2rOVGLiA4q4bVQiy4XvqsMxVTMni99HBL54JBV62JbgfPX%2FyyEt0Z0FGXk5sNtzld%2Ftjk61nBWx1APaxoFNEiTgMwwOUTP02aSy6%2BuZKVnXHhxMukHJzqibyd84EQHSRcbgWkoyqvi0O8OTj%2FVdeZ773yZj%2FuRyXAAPod0aDzypZ%2BAzEoj9AAg8XU5KZlEfJKIVVOwW4bGpvLkO3SdOR2Vtrj9zgMTaBrRbXeK7Q6RWXWNu14kauSkjwcQyHtxr%2FBoZjlfdGT4jMvsCq%2BwliZaY7Au%2FND6%2FjgMGirspXmuMC6rl6iH1bmydvaqM4vCUbN05mfxx05Wh0GFIaLMxjSASdDz%2Fjfz40RlsdPe7Jq9nsZJ9ai%2FpjqNBnEXemCJcnSFes4YvGezwOCE9DTYUMjIAFG8RbGtTniIjD99IfEBjqkAejYQKJUXtMZxKT%2FezxqUya6Zs3g32Qk7zJAz3kdmn7ayp3Dirmw3zrZcDo6T6dZF3LGRPXa0p7pqSSf4AZfQXxipDbr4mjxbJmx7fhxOFmXX7zwTsTgwQhwtpm%2Be%2F8FHz16NuGrBUO%2BGf98fkOSSP7dHhH%2BMt03OssQ9nzRyHdRK4nNKSEOjbuJNmFqy7tOt%2BMd9ADpXtPgDjhzGhDGZSMf6Pcc&X-Amz-Signature=952a11539237e73985ce55a37f0ab2ac419bb3ddb8877f802e8fb0b289d5b401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

AWS에서 VPN을 구축해보면서, mtr로 다른 VPC로 ping 홉 따라가보니 인스턴스 사이에 홉이 안보였음

근데 또 8.8.8.8로 찍으면, 뭔가 홉이 많이 나옴…

엥? 같은 계정 , 같은 리전이라, VPC끼리 1:1 로 뭔가 내부적으로 연결되어있나?

라고 생각했지만~~?

아님… IPSec으로 암호화된 친구들은 사이에 홉들이 암호화되어 안보이는것임…

그러면 홉 사이사이 어케 분석함?

→ 못함… 근데 지연시간으로 어느정도의 거리를 유추해낼 수 있진 않을까?


그래서, tailscale로 묶여있는 우리집 네트워크로도 분석해봄… VPN으로 묶여있더라도, 내부, 외부 속도가 얼마나 차이날까?

### 8.8.8.8 외부 네트워크로 나가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5826c8d-63d3-4caf-ae72-08454314ed11/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OUMUQT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCA4AnXZvwwKbhcbtE9dUI8QPgYEbHLJVTcM6LPfxa2uwIhAIDcjiEs5NgXLIwLYm0%2BSzHLcdfZ22J5rnjgm9dCzp0gKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUU3YSGGH6Ux0eU6cq3AN3CAfKQxamggs%2FjXlrh6eL%2FdXWdg%2BeTGZ%2BfOjVwteccEOA%2FjJpAasSig5nCdYE3AO3dDBHwq5TXKtMVOnS1%2Fklc8SfNy4NuRCPCI3gt1VgjId28NVbcmyIFbpum6R1GzujajY22nsVqIvcuBs%2Fm6adF88g1gGDB3ffB%2FtcnHii38siJrmUO%2Bum7w3kadm3NCOBFdypdVdzIpmntQQF4I6OGny2rOVGLiA4q4bVQiy4XvqsMxVTMni99HBL54JBV62JbgfPX%2FyyEt0Z0FGXk5sNtzld%2Ftjk61nBWx1APaxoFNEiTgMwwOUTP02aSy6%2BuZKVnXHhxMukHJzqibyd84EQHSRcbgWkoyqvi0O8OTj%2FVdeZ773yZj%2FuRyXAAPod0aDzypZ%2BAzEoj9AAg8XU5KZlEfJKIVVOwW4bGpvLkO3SdOR2Vtrj9zgMTaBrRbXeK7Q6RWXWNu14kauSkjwcQyHtxr%2FBoZjlfdGT4jMvsCq%2BwliZaY7Au%2FND6%2FjgMGirspXmuMC6rl6iH1bmydvaqM4vCUbN05mfxx05Wh0GFIaLMxjSASdDz%2Fjfz40RlsdPe7Jq9nsZJ9ai%2FpjqNBnEXemCJcnSFes4YvGezwOCE9DTYUMjIAFG8RbGtTniIjD99IfEBjqkAejYQKJUXtMZxKT%2FezxqUya6Zs3g32Qk7zJAz3kdmn7ayp3Dirmw3zrZcDo6T6dZF3LGRPXa0p7pqSSf4AZfQXxipDbr4mjxbJmx7fhxOFmXX7zwTsTgwQhwtpm%2Be%2F8FHz16NuGrBUO%2BGf98fkOSSP7dHhH%2BMt03OssQ9nzRyHdRK4nNKSEOjbuJNmFqy7tOt%2BMd9ADpXtPgDjhzGhDGZSMf6Pcc&X-Amz-Signature=de25e9aa61e1da3a7491c161b5f3f8d30352beb20e987da76b70703d538d1cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (외부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4f45636b-b3ad-4308-948b-55da8c952d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OUMUQT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCA4AnXZvwwKbhcbtE9dUI8QPgYEbHLJVTcM6LPfxa2uwIhAIDcjiEs5NgXLIwLYm0%2BSzHLcdfZ22J5rnjgm9dCzp0gKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUU3YSGGH6Ux0eU6cq3AN3CAfKQxamggs%2FjXlrh6eL%2FdXWdg%2BeTGZ%2BfOjVwteccEOA%2FjJpAasSig5nCdYE3AO3dDBHwq5TXKtMVOnS1%2Fklc8SfNy4NuRCPCI3gt1VgjId28NVbcmyIFbpum6R1GzujajY22nsVqIvcuBs%2Fm6adF88g1gGDB3ffB%2FtcnHii38siJrmUO%2Bum7w3kadm3NCOBFdypdVdzIpmntQQF4I6OGny2rOVGLiA4q4bVQiy4XvqsMxVTMni99HBL54JBV62JbgfPX%2FyyEt0Z0FGXk5sNtzld%2Ftjk61nBWx1APaxoFNEiTgMwwOUTP02aSy6%2BuZKVnXHhxMukHJzqibyd84EQHSRcbgWkoyqvi0O8OTj%2FVdeZ773yZj%2FuRyXAAPod0aDzypZ%2BAzEoj9AAg8XU5KZlEfJKIVVOwW4bGpvLkO3SdOR2Vtrj9zgMTaBrRbXeK7Q6RWXWNu14kauSkjwcQyHtxr%2FBoZjlfdGT4jMvsCq%2BwliZaY7Au%2FND6%2FjgMGirspXmuMC6rl6iH1bmydvaqM4vCUbN05mfxx05Wh0GFIaLMxjSASdDz%2Fjfz40RlsdPe7Jq9nsZJ9ai%2FpjqNBnEXemCJcnSFes4YvGezwOCE9DTYUMjIAFG8RbGtTniIjD99IfEBjqkAejYQKJUXtMZxKT%2FezxqUya6Zs3g32Qk7zJAz3kdmn7ayp3Dirmw3zrZcDo6T6dZF3LGRPXa0p7pqSSf4AZfQXxipDbr4mjxbJmx7fhxOFmXX7zwTsTgwQhwtpm%2Be%2F8FHz16NuGrBUO%2BGf98fkOSSP7dHhH%2BMt03OssQ9nzRyHdRK4nNKSEOjbuJNmFqy7tOt%2BMd9ADpXtPgDjhzGhDGZSMf6Pcc&X-Amz-Signature=1f4a802748300c6195ab1a502e246e8bd80d34edd312ac5f00d3ca0e09054f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (내부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c3070734-535e-464b-ad44-07917023ccdd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OUMUQT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCA4AnXZvwwKbhcbtE9dUI8QPgYEbHLJVTcM6LPfxa2uwIhAIDcjiEs5NgXLIwLYm0%2BSzHLcdfZ22J5rnjgm9dCzp0gKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUU3YSGGH6Ux0eU6cq3AN3CAfKQxamggs%2FjXlrh6eL%2FdXWdg%2BeTGZ%2BfOjVwteccEOA%2FjJpAasSig5nCdYE3AO3dDBHwq5TXKtMVOnS1%2Fklc8SfNy4NuRCPCI3gt1VgjId28NVbcmyIFbpum6R1GzujajY22nsVqIvcuBs%2Fm6adF88g1gGDB3ffB%2FtcnHii38siJrmUO%2Bum7w3kadm3NCOBFdypdVdzIpmntQQF4I6OGny2rOVGLiA4q4bVQiy4XvqsMxVTMni99HBL54JBV62JbgfPX%2FyyEt0Z0FGXk5sNtzld%2Ftjk61nBWx1APaxoFNEiTgMwwOUTP02aSy6%2BuZKVnXHhxMukHJzqibyd84EQHSRcbgWkoyqvi0O8OTj%2FVdeZ773yZj%2FuRyXAAPod0aDzypZ%2BAzEoj9AAg8XU5KZlEfJKIVVOwW4bGpvLkO3SdOR2Vtrj9zgMTaBrRbXeK7Q6RWXWNu14kauSkjwcQyHtxr%2FBoZjlfdGT4jMvsCq%2BwliZaY7Au%2FND6%2FjgMGirspXmuMC6rl6iH1bmydvaqM4vCUbN05mfxx05Wh0GFIaLMxjSASdDz%2Fjfz40RlsdPe7Jq9nsZJ9ai%2FpjqNBnEXemCJcnSFes4YvGezwOCE9DTYUMjIAFG8RbGtTniIjD99IfEBjqkAejYQKJUXtMZxKT%2FezxqUya6Zs3g32Qk7zJAz3kdmn7ayp3Dirmw3zrZcDo6T6dZF3LGRPXa0p7pqSSf4AZfQXxipDbr4mjxbJmx7fhxOFmXX7zwTsTgwQhwtpm%2Be%2F8FHz16NuGrBUO%2BGf98fkOSSP7dHhH%2BMt03OssQ9nzRyHdRK4nNKSEOjbuJNmFqy7tOt%2BMd9ADpXtPgDjhzGhDGZSMf6Pcc&X-Amz-Signature=9541d3eddb60664a0af21d3618abd3f1d3025bb9180e2ffb90be407773a24344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


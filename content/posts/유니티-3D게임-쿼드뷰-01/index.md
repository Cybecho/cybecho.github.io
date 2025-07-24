---
title: "유니티 3D게임 쿼드뷰 01"
date: 2023-02-05T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "유니티 3D 쿼터뷰 게임 개발을 위한 리지드바디와 충돌 옵션 설정, 플레이어 이동 코드 작성, 카메라 추적 스크립트 구현, 그리고 bool 연산자 사용법에 대한 설명이 포함되어 있습니다."
notion_id: "2e99bfee-f2da-4c76-ac8e-ecca4dc23fe6"
notion_url: "https://www.notion.so/3D-01-2e99bfeef2da4c76ac8eecca4dc23fe6"
---

# 유니티 3D게임 쿼드뷰 01

> **Summary**
> 유니티 3D 쿼터뷰 게임 개발을 위한 리지드바디와 충돌 옵션 설정, 플레이어 이동 코드 작성, 카메라 추적 스크립트 구현, 그리고 bool 연산자 사용법에 대한 설명이 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=WkMM7Uu2AoA&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=1)

플레이어를 생성하고 기본적으로 필요한 컴포넌트들은

`Rigidbody`

`Collider`

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e25a54b7-090a-4341-a056-7fa56bbcc104/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUGOJ2T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHhk81pOEFcAUi3LajXyvyYHNaBuPxk5XGZoo2cpuK5JAiEA242WAx8U%2B0J%2B%2B82aIjDFa9C9asva1f443VC2gLygLVQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG8bw%2Bc1xTUCd6G32SrcA2dfx5ZxzgJZtjm4gZH1Z%2BV17MGC44uOy6kLBd%2BJf1%2BqktLhnhGBzHYu9RWsxvp24tPa0QgqNm259Ww3nBwnuDZej8R%2B66DxXnY5zGYkFyNBWmOUSF%2Bqd9HzL4CEqW9XzKQ2%2FiIwHSEznRc13cMXC%2FEPLJ%2F7cJcUt1ACGAYt2YV89TE8ESEZkvfVH2c8%2FJ8lOgcK9OO%2BAccChVGotaJ0k6EOwquUD%2F3IPgRCRSSdNZ%2ByEo50EAlFtd%2BYXqpIzO%2BzeZ1EaYT2ocQSNMtldtvyKtSMcNbZgGbLWHDAjGDEwQQ0UYclAk%2FppFeOr7GA6TQtuc8McH5LvejwyEJC%2FlET8SMoFT2bnWU8MF89U4GDNt0cFoEa3K1BePpLERRaBYovydAuFdRUZt8pFEOa0%2FhpcPWRwC974%2B02MUKb8GQ94cEmXSoOSHKS5C9RMH8KDVdMN6sBcVb876A39RuV1Kx%2BcH7POFkHalbAmPUDtzY2aKP1QeeixB0CBt0FVhdQuMphLBIR6ESr34Fed9Ys0RBe6sPObqHFCy%2BTv2xT2sQpdM9DGFVEXY9ZhWTvroNuu8J7jojznzcbMCCrM0YRrwM6QtmZW2HlO%2FxZDM12f9FCRjp8lWT4Rmc4UVYDxyi2MJv1h8QGOqUBRVRV80taKZU11gusz74MX4JZRSjy2SBSgLer89W3Yn4m1njsS%2FrqY38%2FFLjubhdWEyKYpWSoNRcP%2BRw1PcxnsHY1rVnDwdVULP1w7W3FMw0X%2F7Ap62hTXHpixqDTNu3nQk3EA6CJDycZiXcVg7vFxvoieOQRvJTIFGpzwdaWVUN4vc6XhIH%2BdaFJW5R4lA%2BQAGT1Y5Yi2baR2jRGOnL8UoApOcpu&X-Amz-Signature=d4f9ba3ab1ac1d483fe0a2648a4bda3204e1df1e08f7e7f55fffaa08a3ee1805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/cd28774a-ae2b-46c5-91c9-b4d16825172f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUGOJ2T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHhk81pOEFcAUi3LajXyvyYHNaBuPxk5XGZoo2cpuK5JAiEA242WAx8U%2B0J%2B%2B82aIjDFa9C9asva1f443VC2gLygLVQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG8bw%2Bc1xTUCd6G32SrcA2dfx5ZxzgJZtjm4gZH1Z%2BV17MGC44uOy6kLBd%2BJf1%2BqktLhnhGBzHYu9RWsxvp24tPa0QgqNm259Ww3nBwnuDZej8R%2B66DxXnY5zGYkFyNBWmOUSF%2Bqd9HzL4CEqW9XzKQ2%2FiIwHSEznRc13cMXC%2FEPLJ%2F7cJcUt1ACGAYt2YV89TE8ESEZkvfVH2c8%2FJ8lOgcK9OO%2BAccChVGotaJ0k6EOwquUD%2F3IPgRCRSSdNZ%2ByEo50EAlFtd%2BYXqpIzO%2BzeZ1EaYT2ocQSNMtldtvyKtSMcNbZgGbLWHDAjGDEwQQ0UYclAk%2FppFeOr7GA6TQtuc8McH5LvejwyEJC%2FlET8SMoFT2bnWU8MF89U4GDNt0cFoEa3K1BePpLERRaBYovydAuFdRUZt8pFEOa0%2FhpcPWRwC974%2B02MUKb8GQ94cEmXSoOSHKS5C9RMH8KDVdMN6sBcVb876A39RuV1Kx%2BcH7POFkHalbAmPUDtzY2aKP1QeeixB0CBt0FVhdQuMphLBIR6ESr34Fed9Ys0RBe6sPObqHFCy%2BTv2xT2sQpdM9DGFVEXY9ZhWTvroNuu8J7jojznzcbMCCrM0YRrwM6QtmZW2HlO%2FxZDM12f9FCRjp8lWT4Rmc4UVYDxyi2MJv1h8QGOqUBRVRV80taKZU11gusz74MX4JZRSjy2SBSgLer89W3Yn4m1njsS%2FrqY38%2FFLjubhdWEyKYpWSoNRcP%2BRw1PcxnsHY1rVnDwdVULP1w7W3FMw0X%2F7Ap62hTXHpixqDTNu3nQk3EA6CJDycZiXcVg7vFxvoieOQRvJTIFGpzwdaWVUN4vc6XhIH%2BdaFJW5R4lA%2BQAGT1Y5Yi2baR2jRGOnL8UoApOcpu&X-Amz-Signature=7eee52b1869995e62ac534a5bca29889f06a8d8da36f7c6622f750f64c6d9088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3dee5859-7bcf-41fb-9694-be9a6ee40a00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUGOJ2T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHhk81pOEFcAUi3LajXyvyYHNaBuPxk5XGZoo2cpuK5JAiEA242WAx8U%2B0J%2B%2B82aIjDFa9C9asva1f443VC2gLygLVQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG8bw%2Bc1xTUCd6G32SrcA2dfx5ZxzgJZtjm4gZH1Z%2BV17MGC44uOy6kLBd%2BJf1%2BqktLhnhGBzHYu9RWsxvp24tPa0QgqNm259Ww3nBwnuDZej8R%2B66DxXnY5zGYkFyNBWmOUSF%2Bqd9HzL4CEqW9XzKQ2%2FiIwHSEznRc13cMXC%2FEPLJ%2F7cJcUt1ACGAYt2YV89TE8ESEZkvfVH2c8%2FJ8lOgcK9OO%2BAccChVGotaJ0k6EOwquUD%2F3IPgRCRSSdNZ%2ByEo50EAlFtd%2BYXqpIzO%2BzeZ1EaYT2ocQSNMtldtvyKtSMcNbZgGbLWHDAjGDEwQQ0UYclAk%2FppFeOr7GA6TQtuc8McH5LvejwyEJC%2FlET8SMoFT2bnWU8MF89U4GDNt0cFoEa3K1BePpLERRaBYovydAuFdRUZt8pFEOa0%2FhpcPWRwC974%2B02MUKb8GQ94cEmXSoOSHKS5C9RMH8KDVdMN6sBcVb876A39RuV1Kx%2BcH7POFkHalbAmPUDtzY2aKP1QeeixB0CBt0FVhdQuMphLBIR6ESr34Fed9Ys0RBe6sPObqHFCy%2BTv2xT2sQpdM9DGFVEXY9ZhWTvroNuu8J7jojznzcbMCCrM0YRrwM6QtmZW2HlO%2FxZDM12f9FCRjp8lWT4Rmc4UVYDxyi2MJv1h8QGOqUBRVRV80taKZU11gusz74MX4JZRSjy2SBSgLer89W3Yn4m1njsS%2FrqY38%2FFLjubhdWEyKYpWSoNRcP%2BRw1PcxnsHY1rVnDwdVULP1w7W3FMw0X%2F7Ap62hTXHpixqDTNu3nQk3EA6CJDycZiXcVg7vFxvoieOQRvJTIFGpzwdaWVUN4vc6XhIH%2BdaFJW5R4lA%2BQAGT1Y5Yi2baR2jRGOnL8UoApOcpu&X-Amz-Signature=6036adba667fa23e2ad0b5f877e00d84490bf9d91507af3a1ec5bac4622ec5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 ****캐릭터 움직이는 코드****
> ## `Input.GetAxisRaw()`
>
> - Axis 값을 정수로 반환하는 함수
> - 0 / 1 반환
>
> ## `moveVec = new Vector3(hAxis,0,vAxis).normalized;`
>
> - normalized는 방향값을 1로 고정함
>


## 입력 키 추가

> 🔥 **Edit - Project Settings - Input Manager**

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0bcfa87f-6d14-47b3-bd5f-b57b48caf45f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUGOJ2T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHhk81pOEFcAUi3LajXyvyYHNaBuPxk5XGZoo2cpuK5JAiEA242WAx8U%2B0J%2B%2B82aIjDFa9C9asva1f443VC2gLygLVQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG8bw%2Bc1xTUCd6G32SrcA2dfx5ZxzgJZtjm4gZH1Z%2BV17MGC44uOy6kLBd%2BJf1%2BqktLhnhGBzHYu9RWsxvp24tPa0QgqNm259Ww3nBwnuDZej8R%2B66DxXnY5zGYkFyNBWmOUSF%2Bqd9HzL4CEqW9XzKQ2%2FiIwHSEznRc13cMXC%2FEPLJ%2F7cJcUt1ACGAYt2YV89TE8ESEZkvfVH2c8%2FJ8lOgcK9OO%2BAccChVGotaJ0k6EOwquUD%2F3IPgRCRSSdNZ%2ByEo50EAlFtd%2BYXqpIzO%2BzeZ1EaYT2ocQSNMtldtvyKtSMcNbZgGbLWHDAjGDEwQQ0UYclAk%2FppFeOr7GA6TQtuc8McH5LvejwyEJC%2FlET8SMoFT2bnWU8MF89U4GDNt0cFoEa3K1BePpLERRaBYovydAuFdRUZt8pFEOa0%2FhpcPWRwC974%2B02MUKb8GQ94cEmXSoOSHKS5C9RMH8KDVdMN6sBcVb876A39RuV1Kx%2BcH7POFkHalbAmPUDtzY2aKP1QeeixB0CBt0FVhdQuMphLBIR6ESr34Fed9Ys0RBe6sPObqHFCy%2BTv2xT2sQpdM9DGFVEXY9ZhWTvroNuu8J7jojznzcbMCCrM0YRrwM6QtmZW2HlO%2FxZDM12f9FCRjp8lWT4Rmc4UVYDxyi2MJv1h8QGOqUBRVRV80taKZU11gusz74MX4JZRSjy2SBSgLer89W3Yn4m1njsS%2FrqY38%2FFLjubhdWEyKYpWSoNRcP%2BRw1PcxnsHY1rVnDwdVULP1w7W3FMw0X%2F7Ap62hTXHpixqDTNu3nQk3EA6CJDycZiXcVg7vFxvoieOQRvJTIFGpzwdaWVUN4vc6XhIH%2BdaFJW5R4lA%2BQAGT1Y5Yi2baR2jRGOnL8UoApOcpu&X-Amz-Signature=2f47c319df88943b601955fa8eaa78c012b81b22779f1771a0d84b07ef088263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 🔥 **버그 뒤지게나서 뭔가했더니 역시나 대소문자 이슈였음**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ed2a3af3-b755-49ea-886f-ad3a058f7819/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3PCE3Y%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCYL4IueGKwBFHaPLdua7UzdeInOhDA8EyIJ01BQOP3hwIhAMUoyS5DPJ4CGtQwpacBRa5zAaKxaa%2BY8FQEzb1KenH9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwZHL3KOuk1o20Hvykq3AOb%2F7XQRYiJY2bsl1LtnBSO%2BDNVvdMEy0SzKOP0FkEYnXOVpXasbpih4cd%2FR%2BgWJfyFU04BEZpjsIgU9iF6SUxehOG%2F3fy79zkXCK%2BQRdzhgk9uvLCzMA%2B7SisBtaNgy%2BYbKyVEB9eswmoHmViCY7IplNHJiQ1Wwz3ETMFdMBeVaF7HpagFsqDpMAKHA2ouxB6r1ZainHIZC9g9wqV0S6uw4E29939F2C2xSZEM9ch%2BW%2F7Ek1%2FlvJcWfp9CgQL%2FQdHtIDMQSex%2FfjoqGEk30Q4FIo8VxZ4PHfFH%2BKEN5%2Furkl4G9EZX%2FB1dck0HFl6L74qeckqvCKGIVVD4vXeJcZTyEuiGeQ9JA5JrnKxDDAyff2ykt5huKEEjfeywqgrb7XV11BdPy7nb6Zw3qowOJc4DfmtoRXfX5ZxdFiV5PQdsJN%2BEUBYNMv8RbjEVj4%2Fd9VKiCLj9qJ6OqRk0a1PzY9bu%2FkFHtg%2Bw0P%2FjlbLYxv4BBMmRvvXCtR7QWeiBGIw5YoWAgSWthtIGb%2F8DQqmcAsfjMaK%2B5HibsqtIPtTwRF8CSWWxdvga40cWzGoQgzhi1Jk%2FaFVLZzwB4kG7rSfQUeo%2BejQxGXoW1tXhgsZDHzxEYwzpOCtr%2FiIR0rWU4jCC9ofEBjqkAajjKq%2BfvBGUZlJFFgbMsn%2FIGG1RHaJwUUT%2BUa4SCqFQNpngV%2BdwovWy4vJtbC%2FDQ5gEe%2BHuF%2FpKBtmfhSTkTMBMu6Kc7h3EFXXhouaR5dzRbVtvKAi3wcVlRUblJtqQfaeyrMj6MGcpKXKrBXCnovjaovF3%2B3CENMGpWhi1BkEO9IS1weqtU07%2FHCxSlY4oIeaB9AHI6sZjroHjWlnXGHbnkupX&X-Amz-Signature=5f953329b3183d1a1f22c83443787afad2f26886c30acdfb3932a3eb671854bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2e7e5d04-920d-47d4-9192-985b409d32b2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3PCE3Y%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCYL4IueGKwBFHaPLdua7UzdeInOhDA8EyIJ01BQOP3hwIhAMUoyS5DPJ4CGtQwpacBRa5zAaKxaa%2BY8FQEzb1KenH9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwZHL3KOuk1o20Hvykq3AOb%2F7XQRYiJY2bsl1LtnBSO%2BDNVvdMEy0SzKOP0FkEYnXOVpXasbpih4cd%2FR%2BgWJfyFU04BEZpjsIgU9iF6SUxehOG%2F3fy79zkXCK%2BQRdzhgk9uvLCzMA%2B7SisBtaNgy%2BYbKyVEB9eswmoHmViCY7IplNHJiQ1Wwz3ETMFdMBeVaF7HpagFsqDpMAKHA2ouxB6r1ZainHIZC9g9wqV0S6uw4E29939F2C2xSZEM9ch%2BW%2F7Ek1%2FlvJcWfp9CgQL%2FQdHtIDMQSex%2FfjoqGEk30Q4FIo8VxZ4PHfFH%2BKEN5%2Furkl4G9EZX%2FB1dck0HFl6L74qeckqvCKGIVVD4vXeJcZTyEuiGeQ9JA5JrnKxDDAyff2ykt5huKEEjfeywqgrb7XV11BdPy7nb6Zw3qowOJc4DfmtoRXfX5ZxdFiV5PQdsJN%2BEUBYNMv8RbjEVj4%2Fd9VKiCLj9qJ6OqRk0a1PzY9bu%2FkFHtg%2Bw0P%2FjlbLYxv4BBMmRvvXCtR7QWeiBGIw5YoWAgSWthtIGb%2F8DQqmcAsfjMaK%2B5HibsqtIPtTwRF8CSWWxdvga40cWzGoQgzhi1Jk%2FaFVLZzwB4kG7rSfQUeo%2BejQxGXoW1tXhgsZDHzxEYwzpOCtr%2FiIR0rWU4jCC9ofEBjqkAajjKq%2BfvBGUZlJFFgbMsn%2FIGG1RHaJwUUT%2BUa4SCqFQNpngV%2BdwovWy4vJtbC%2FDQ5gEe%2BHuF%2FpKBtmfhSTkTMBMu6Kc7h3EFXXhouaR5dzRbVtvKAi3wcVlRUblJtqQfaeyrMj6MGcpKXKrBXCnovjaovF3%2B3CENMGpWhi1BkEO9IS1weqtU07%2FHCxSlY4oIeaB9AHI6sZjroHjWlnXGHbnkupX&X-Amz-Signature=7c2009c950f03821d1e33c851b1ef3dc34c9efea40d196c6d8f44d975683cf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
>

> 🔥 **걸을땐 속도 느려지게**
> ```c#
> //걸을땐 느리게
>         transform.position += moveVec * speed * (wDown ? 0.3f : 1f) * Time.deltaTime;
> ```
>
> 삼항연산자 이용해서 wDown이 트루일때는 0.3을 곱해서 느리게
>
>

> 🔥 **`LookAt()` 이용해서 캐릭터 로테이션**
> 일단 LookAt()은 지정된 벡터를 향해서 회전시켜주는 함수
>
> ```c#
> transform.LookAt(transform.position + moveVec);
> ```
>
> 나아가는 방향으로 바라볼거라는 뜻
>
>

> 🔥 **카메라 따라오게만들기**
> 카메라에 스크립트 만든다음에 해당코드 작성
>
> ```c#
> public class Follow : MonoBehaviour
> {
>     public Transform target;
>     public Vector3 offset;
>     void Update()
>     {
>         //해당 스크립트는 타겟의 포지션에 오프셋을 더한 값이다
>         transform.position = target.position + offset;
>     }
> }
> ```
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=eZ8Dm809j4c&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=3)

> 🔥 **bool 연산자 사용시에 할 수 있는 문법**
> ## `!bool`
>
> 변수내부에 연산자의 반대값일때 라는 뜻
>
> 굳이 if (bool == true)
>
> 이런식으로 true 혹은 falus를 입력해주지 않아도 된다
>
>

> 🔥 **실수다… 왜 애니메이션이 안뜨나 했더니 Trigger로 생성해야할걸 bool로 생성했다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fc80bb37-ad25-42a8-b70d-698649f550e3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVEF3ZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIF5ENz696qBu1dOjRkIQa%2Fm4bzdnWlruHH2uq7n4pFNdAiB8e7468s968STvy6s36oJjXv26EyzHqHdufcCx62Hl8Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMUsDKZohLJCNyIqjuKtwDYO5hBcLNJZAG1nQFp3QOUTJRLLodWo9rULo2pK0Ayx8x7k3oXQ50bieHpJLLfNl%2FC8gxt%2FyTJyoLNdf6aATMPUbA1oF6sp8O3cI6P%2BA76UWMSEzILRi0DMrV%2BWCjBlGL52nNNUdK8V5DlMuXobFzgh5S64LHXNNfZGJlaVZtepLDePE%2B0j1n%2FowzTJ%2FUYDynqQkGzJEgBqMHF4bcvd%2ByfhabWhIUMgsR41dZrcfp8IPmZ2k7tXE1XfACR75bdscngFeTS9UIRXuKOyWbmQa7DkRb4yagq8MSvC%2Fsw8v3UU1W7wIrBkXKg%2BEs68RkI1NNwQGUU0Q3IkP02sqHj9WLAPMyqmzyqGM16gVdHWNQTFDdKDma5L%2Bs5KfThF7pUd3T7XQqju37g4oe397HHkyT5IrWKdj5f75GAEb18vcWR%2FrHaAc4XaVAdWwx1DKVQY0ZRcW8uMisS%2BP0ilcN6aRS%2Br3nHqc4Sn3C88S9cHOfRjlf41q8hQe6ueaJFhd0ba17FWgqTEKYssWecSeZk1%2FfsYvSAwVOkfBGzOjm7qY4yJ3DwPM9q6zpMYFUAjq500V7iTvLipc3zJYHEafXrsza2hju45uT525J5JEYAAmpAO9ry38xCjBmBdY2GdwwgfaHxAY6pgFquokNlELwcGhTnZgy%2BOCQIRbaeqHkQBer3YiygTojT0WdmwmoWtLaRakHBM32ktFE0JDTRg6f24LK9aCzhVu05rPa3i2lHgV1EWLYK5i1XoVBdhbvxhdGZxDCIWtOX3UtEf4ekdd4afToAYa%2FBusZWfW7Cq8CgNtCUDil%2B2MgAIp9eoNATjTeU2sy%2FrwiA6dLSm9wBLT37XewxH2YK%2Fduvc7WcX4S&X-Amz-Signature=5c1019073f8554a92645b149a7a26c0edb6c677292108db29b951d73fedbeae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


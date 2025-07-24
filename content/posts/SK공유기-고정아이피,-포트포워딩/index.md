---
title: "SK공유기 고정아이피, 포트포워딩"
date: 2024-03-25T02:00:00.000Z
draft: false
tags: ["Infra", "RaspberryPI"]
series: ["Let's Homelab!"]
description: "고정 IP 주소 할당 및 포트 포워딩 설정 방법에 대한 안내. DHCP 서버에 MAC 주소와 고정 IP 주소를 등록하고, 외부에서 사용할 포트를 설정하여 SSH 접속을 가능하게 함. 최종적으로 외부 네트워크에서 IP 주소와 포트 번호를 사용하여 SSH 접속을 수행하는 방법을 설명함."
notion_id: "9479f9f1-7c02-4ad0-b536-6b17c5252825"
notion_url: "https://www.notion.so/SK-9479f9f17c024ad0b5366b17c5252825"
---

# SK공유기 고정아이피, 포트포워딩

> **Summary**
> 고정 IP 주소 할당 및 포트 포워딩 설정 방법에 대한 안내. DHCP 서버에 MAC 주소와 고정 IP 주소를 등록하고, 외부에서 사용할 포트를 설정하여 SSH 접속을 가능하게 함. 최종적으로 외부 네트워크에서 IP 주소와 포트 번호를 사용하여 SSH 접속을 수행하는 방법을 설명함.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc73fb11-40cf-40e8-9be2-2524ce3aa0f7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWTYFEH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjwcMN0O2tOIxUwmdr4qx5PX7hr8g1hmwj9pgjVoPrSwIgPhIWz1x3SGhfKfjngeJtf2%2FGFXvxEHD39GInPQwkFWoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMVX1ORqTs40%2FrAK1CrcA86xzJX72psUEZY3jjM843ITGLkMUGkElsZpz%2Bg7BCQAjVWbFdqOfilGp7zH7TNj3NsYmOxXhcFlalREWUHA66RHPNEUH8CfxlkZe7OzA3Vyc0hpIH2BsogZajVCGgmuS2%2BYhpe2rSl2Q8UDgdJ%2BFoMIBG6OdJ9Bn%2Bp3MuAp1QdpxCic2v1twqAwbgpwoTPgPB6zbnVsMez22iFOUioajBUL6hKcpVgKA8lkhIN8WRpEgWAwamOaH7bvEfT%2F7k6qQjTzGcic%2BRHMyQR5EFizNsK8%2FFwRtIDjonexXGErJuycCFXdQVeWCItY8W2YAgWGxe1br%2FKYkpwdftjzfPBRBQxszlDcWaMM1sgcuNprM2fAYVPJq4xGDLT%2BD70jxZ3QC5oDST9oPT13sE212XYufQP69dxtc6crOwcJBbqJNhLscgAHml7XvXTQjFODP7LDRerybd1L8souxz8rDj19jSuwn2LTtIql%2FhLbfe0xwlcnrAEmy41cP75oaFDYfssOQ94p%2FzCeuZgj9w8YMb%2BMn7aaWuMMGnfCvQiuQAiIJqrMzcgPxEBsoszoPEH%2Bc0BZYltbxYKhy4an6%2BFhC%2BdWuGfjRI6OH8QFsUZWl4XIacEnViJkODXA%2F2xh9W6EMLz2h8QGOqUBSO0WwpoqJCG%2BQDcT7QaEvyct8q44mkb8a9WIoB9ixIyCb6Eyw8H10U2Cr2T7dwl67oiCLy4UobBcq4BxXWGY4W7J4NmQmYWFvm7NLvaYbi6MKx%2BbQPjzeLfXDXcXUfhqHL8VGr0hdBcWcHzUxmShSO%2BHaojnDitY3ERc50zmSvGUy%2FbzaegtGbtHgzz8gXu5hzyOg7ofUEHan8S2E289m8ltJE89&X-Amz-Signature=02f30be7cfb099710d8e45e8d72838317b1b44c823e1fe5f542943a51aa36d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기](https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기)

🔗 [https://velog.io/@dev2820/raspberry-pi-ssh-연결하기](https://velog.io/@dev2820/raspberry-pi-ssh-연결하기)

🔗 [https://poalim.tistory.com/12](https://poalim.tistory.com/12)

## [192.168.45.1](192.168.45.1) 접속 후 네트워크 설정 이동

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/daa2bdb8-eb79-4f9e-a9d1-9ff690bb913e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWTYFEH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjwcMN0O2tOIxUwmdr4qx5PX7hr8g1hmwj9pgjVoPrSwIgPhIWz1x3SGhfKfjngeJtf2%2FGFXvxEHD39GInPQwkFWoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMVX1ORqTs40%2FrAK1CrcA86xzJX72psUEZY3jjM843ITGLkMUGkElsZpz%2Bg7BCQAjVWbFdqOfilGp7zH7TNj3NsYmOxXhcFlalREWUHA66RHPNEUH8CfxlkZe7OzA3Vyc0hpIH2BsogZajVCGgmuS2%2BYhpe2rSl2Q8UDgdJ%2BFoMIBG6OdJ9Bn%2Bp3MuAp1QdpxCic2v1twqAwbgpwoTPgPB6zbnVsMez22iFOUioajBUL6hKcpVgKA8lkhIN8WRpEgWAwamOaH7bvEfT%2F7k6qQjTzGcic%2BRHMyQR5EFizNsK8%2FFwRtIDjonexXGErJuycCFXdQVeWCItY8W2YAgWGxe1br%2FKYkpwdftjzfPBRBQxszlDcWaMM1sgcuNprM2fAYVPJq4xGDLT%2BD70jxZ3QC5oDST9oPT13sE212XYufQP69dxtc6crOwcJBbqJNhLscgAHml7XvXTQjFODP7LDRerybd1L8souxz8rDj19jSuwn2LTtIql%2FhLbfe0xwlcnrAEmy41cP75oaFDYfssOQ94p%2FzCeuZgj9w8YMb%2BMn7aaWuMMGnfCvQiuQAiIJqrMzcgPxEBsoszoPEH%2Bc0BZYltbxYKhy4an6%2BFhC%2BdWuGfjRI6OH8QFsUZWl4XIacEnViJkODXA%2F2xh9W6EMLz2h8QGOqUBSO0WwpoqJCG%2BQDcT7QaEvyct8q44mkb8a9WIoB9ixIyCb6Eyw8H10U2Cr2T7dwl67oiCLy4UobBcq4BxXWGY4W7J4NmQmYWFvm7NLvaYbi6MKx%2BbQPjzeLfXDXcXUfhqHL8VGr0hdBcWcHzUxmShSO%2BHaojnDitY3ERc50zmSvGUy%2FbzaegtGbtHgzz8gXu5hzyOg7ofUEHan8S2E289m8ltJE89&X-Amz-Signature=a7afe4e145312dd0aab40f1727c54630d9521fc5722ef4a2cf3e53e493a2f7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## DHCP 서버에 나의 MAC 주소와 사용할 고정 ip주소 등록

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07a37bb2-67a0-488b-a649-8fa8019a51a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWTYFEH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjwcMN0O2tOIxUwmdr4qx5PX7hr8g1hmwj9pgjVoPrSwIgPhIWz1x3SGhfKfjngeJtf2%2FGFXvxEHD39GInPQwkFWoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMVX1ORqTs40%2FrAK1CrcA86xzJX72psUEZY3jjM843ITGLkMUGkElsZpz%2Bg7BCQAjVWbFdqOfilGp7zH7TNj3NsYmOxXhcFlalREWUHA66RHPNEUH8CfxlkZe7OzA3Vyc0hpIH2BsogZajVCGgmuS2%2BYhpe2rSl2Q8UDgdJ%2BFoMIBG6OdJ9Bn%2Bp3MuAp1QdpxCic2v1twqAwbgpwoTPgPB6zbnVsMez22iFOUioajBUL6hKcpVgKA8lkhIN8WRpEgWAwamOaH7bvEfT%2F7k6qQjTzGcic%2BRHMyQR5EFizNsK8%2FFwRtIDjonexXGErJuycCFXdQVeWCItY8W2YAgWGxe1br%2FKYkpwdftjzfPBRBQxszlDcWaMM1sgcuNprM2fAYVPJq4xGDLT%2BD70jxZ3QC5oDST9oPT13sE212XYufQP69dxtc6crOwcJBbqJNhLscgAHml7XvXTQjFODP7LDRerybd1L8souxz8rDj19jSuwn2LTtIql%2FhLbfe0xwlcnrAEmy41cP75oaFDYfssOQ94p%2FzCeuZgj9w8YMb%2BMn7aaWuMMGnfCvQiuQAiIJqrMzcgPxEBsoszoPEH%2Bc0BZYltbxYKhy4an6%2BFhC%2BdWuGfjRI6OH8QFsUZWl4XIacEnViJkODXA%2F2xh9W6EMLz2h8QGOqUBSO0WwpoqJCG%2BQDcT7QaEvyct8q44mkb8a9WIoB9ixIyCb6Eyw8H10U2Cr2T7dwl67oiCLy4UobBcq4BxXWGY4W7J4NmQmYWFvm7NLvaYbi6MKx%2BbQPjzeLfXDXcXUfhqHL8VGr0hdBcWcHzUxmShSO%2BHaojnDitY3ERc50zmSvGUy%2FbzaegtGbtHgzz8gXu5hzyOg7ofUEHan8S2E289m8ltJE89&X-Amz-Signature=ada3b5933e98b81de49726e053b9f97ea50e74f4e81a86907ab3881d8556abb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 포트포워딩 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ad4ef0ee-9503-4486-9d7c-258418125976/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWTYFEH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjwcMN0O2tOIxUwmdr4qx5PX7hr8g1hmwj9pgjVoPrSwIgPhIWz1x3SGhfKfjngeJtf2%2FGFXvxEHD39GInPQwkFWoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMVX1ORqTs40%2FrAK1CrcA86xzJX72psUEZY3jjM843ITGLkMUGkElsZpz%2Bg7BCQAjVWbFdqOfilGp7zH7TNj3NsYmOxXhcFlalREWUHA66RHPNEUH8CfxlkZe7OzA3Vyc0hpIH2BsogZajVCGgmuS2%2BYhpe2rSl2Q8UDgdJ%2BFoMIBG6OdJ9Bn%2Bp3MuAp1QdpxCic2v1twqAwbgpwoTPgPB6zbnVsMez22iFOUioajBUL6hKcpVgKA8lkhIN8WRpEgWAwamOaH7bvEfT%2F7k6qQjTzGcic%2BRHMyQR5EFizNsK8%2FFwRtIDjonexXGErJuycCFXdQVeWCItY8W2YAgWGxe1br%2FKYkpwdftjzfPBRBQxszlDcWaMM1sgcuNprM2fAYVPJq4xGDLT%2BD70jxZ3QC5oDST9oPT13sE212XYufQP69dxtc6crOwcJBbqJNhLscgAHml7XvXTQjFODP7LDRerybd1L8souxz8rDj19jSuwn2LTtIql%2FhLbfe0xwlcnrAEmy41cP75oaFDYfssOQ94p%2FzCeuZgj9w8YMb%2BMn7aaWuMMGnfCvQiuQAiIJqrMzcgPxEBsoszoPEH%2Bc0BZYltbxYKhy4an6%2BFhC%2BdWuGfjRI6OH8QFsUZWl4XIacEnViJkODXA%2F2xh9W6EMLz2h8QGOqUBSO0WwpoqJCG%2BQDcT7QaEvyct8q44mkb8a9WIoB9ixIyCb6Eyw8H10U2Cr2T7dwl67oiCLy4UobBcq4BxXWGY4W7J4NmQmYWFvm7NLvaYbi6MKx%2BbQPjzeLfXDXcXUfhqHL8VGr0hdBcWcHzUxmShSO%2BHaojnDitY3ERc50zmSvGUy%2FbzaegtGbtHgzz8gXu5hzyOg7ofUEHan8S2E289m8ltJE89&X-Amz-Signature=fe4270bb5bcf060ed76ba0aef1a2cd2376e7d81ff5bc8741de7995f714afca94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이제 아래 사이트에서 내 찐 아이피 확인

🔗 [https://www.whatismyip.com/](https://www.whatismyip.com/)

## 이제 외부 네트워크에서 내 찐 아이피와 포트번호로 ssh 접속

```latex
ssh pi@<찐 아이피> -p <외부포트번호>
```


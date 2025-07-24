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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc73fb11-40cf-40e8-9be2-2524ce3aa0f7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SE3CFH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCJEiQiKs88Y83%2B8Sw2tVpDoAjbRHa47jLyiAtgfiua6wIgcjzbLiO%2Ffz8MPjz6NoXHENQF1VhjoporJDoPQYlbFggq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBBbEOfryyo0LSg1GyrcA%2BqBJygAtq4BygiyefYKgEM7QjJk631n7ZxItOU9jwNtZ5ypPeJyKIjwt3DdNrapfI4YY8Ww5x3WVf1f3IkphtroqJksd6AUKeB5SthKG5rmlvtfxTZFm0QfTvj%2BQPBX0Op6EfGWgaVRnZVKwmNOkfQAQWDHm9eJ22FoQMTrWB23scHEyHyLNTnwxqSCs3lZpWRIVaa72k7W96DFSoNA6XW7CjIPFbtslj8TZ5xmTtD3P3OccEtHAoI1r5A8A7qJxc5PSaTgFkRgbUC1n0j%2FzCgnYv3g6Yim6bfEQHGbCvf7YiN9xR8FaGzZHX79hS6VkHn0aQCcIWooVWwXoNC0mccOYIBfSHsmEShntDlssmkiWaFYQC3c6fupLHK5FoqODQ9hNi6kkmni3vemO4nuVHDJ1FYErQvs5bIb79XORjyIQNji36lYaiWrB3DEXHKoTf3HR2OVuxoaZBy0q3U6TTMjZe4KNNmfWPNc5iFdvZKoaTI4ztcA5S2TRRIQqB%2BgdJnIzFwjoxK79wBOMrMT3z3GGKLXbMErHF%2BIyr4J6AjBaTw%2BAF8sQBZb9qCq29bC8sR00NjTK%2BqVEG4V1YtPr2rj%2FXAsQVes4TGvo2W%2F6BfiMP7bN%2BJQzunXtCuUMJnQh8QGOqUB11n%2BZnIpQj3xC9%2BaSmc6Eae3KZDtVGnp8GQegmhDpoOTNXVzLY2m9q1A1dEHkxDLMjqOjSrZQvp7e66wmbR7tADmUl5nfux9N4GNdW6LlVN6ktJloe7DcNb4v%2FiT%2BEvSseb%2BJh%2FNlbMGe3wSJCViF2GJIIfs3ZhxrElnC7kz7d5NqK95%2F8l6FMdav1Jl%2FrOI7Rr7JDTPEzRy7LaRI8cBzsOHXae7&X-Amz-Signature=d9e7d52a6282d1ca333888c31085336bab784ae0af34f3d94faf31f20b7e6299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기](https://velog.io/@dev2820/raspberry-pi-고정-ip-할당하기)

🔗 [https://velog.io/@dev2820/raspberry-pi-ssh-연결하기](https://velog.io/@dev2820/raspberry-pi-ssh-연결하기)

🔗 [https://poalim.tistory.com/12](https://poalim.tistory.com/12)

## [192.168.45.1](192.168.45.1) 접속 후 네트워크 설정 이동

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/daa2bdb8-eb79-4f9e-a9d1-9ff690bb913e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SE3CFH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCJEiQiKs88Y83%2B8Sw2tVpDoAjbRHa47jLyiAtgfiua6wIgcjzbLiO%2Ffz8MPjz6NoXHENQF1VhjoporJDoPQYlbFggq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBBbEOfryyo0LSg1GyrcA%2BqBJygAtq4BygiyefYKgEM7QjJk631n7ZxItOU9jwNtZ5ypPeJyKIjwt3DdNrapfI4YY8Ww5x3WVf1f3IkphtroqJksd6AUKeB5SthKG5rmlvtfxTZFm0QfTvj%2BQPBX0Op6EfGWgaVRnZVKwmNOkfQAQWDHm9eJ22FoQMTrWB23scHEyHyLNTnwxqSCs3lZpWRIVaa72k7W96DFSoNA6XW7CjIPFbtslj8TZ5xmTtD3P3OccEtHAoI1r5A8A7qJxc5PSaTgFkRgbUC1n0j%2FzCgnYv3g6Yim6bfEQHGbCvf7YiN9xR8FaGzZHX79hS6VkHn0aQCcIWooVWwXoNC0mccOYIBfSHsmEShntDlssmkiWaFYQC3c6fupLHK5FoqODQ9hNi6kkmni3vemO4nuVHDJ1FYErQvs5bIb79XORjyIQNji36lYaiWrB3DEXHKoTf3HR2OVuxoaZBy0q3U6TTMjZe4KNNmfWPNc5iFdvZKoaTI4ztcA5S2TRRIQqB%2BgdJnIzFwjoxK79wBOMrMT3z3GGKLXbMErHF%2BIyr4J6AjBaTw%2BAF8sQBZb9qCq29bC8sR00NjTK%2BqVEG4V1YtPr2rj%2FXAsQVes4TGvo2W%2F6BfiMP7bN%2BJQzunXtCuUMJnQh8QGOqUB11n%2BZnIpQj3xC9%2BaSmc6Eae3KZDtVGnp8GQegmhDpoOTNXVzLY2m9q1A1dEHkxDLMjqOjSrZQvp7e66wmbR7tADmUl5nfux9N4GNdW6LlVN6ktJloe7DcNb4v%2FiT%2BEvSseb%2BJh%2FNlbMGe3wSJCViF2GJIIfs3ZhxrElnC7kz7d5NqK95%2F8l6FMdav1Jl%2FrOI7Rr7JDTPEzRy7LaRI8cBzsOHXae7&X-Amz-Signature=17fc9a7292a0b815a21715e09917f36288588e3b806f8084185abc8ff00b56b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## DHCP 서버에 나의 MAC 주소와 사용할 고정 ip주소 등록

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07a37bb2-67a0-488b-a649-8fa8019a51a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SE3CFH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCJEiQiKs88Y83%2B8Sw2tVpDoAjbRHa47jLyiAtgfiua6wIgcjzbLiO%2Ffz8MPjz6NoXHENQF1VhjoporJDoPQYlbFggq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBBbEOfryyo0LSg1GyrcA%2BqBJygAtq4BygiyefYKgEM7QjJk631n7ZxItOU9jwNtZ5ypPeJyKIjwt3DdNrapfI4YY8Ww5x3WVf1f3IkphtroqJksd6AUKeB5SthKG5rmlvtfxTZFm0QfTvj%2BQPBX0Op6EfGWgaVRnZVKwmNOkfQAQWDHm9eJ22FoQMTrWB23scHEyHyLNTnwxqSCs3lZpWRIVaa72k7W96DFSoNA6XW7CjIPFbtslj8TZ5xmTtD3P3OccEtHAoI1r5A8A7qJxc5PSaTgFkRgbUC1n0j%2FzCgnYv3g6Yim6bfEQHGbCvf7YiN9xR8FaGzZHX79hS6VkHn0aQCcIWooVWwXoNC0mccOYIBfSHsmEShntDlssmkiWaFYQC3c6fupLHK5FoqODQ9hNi6kkmni3vemO4nuVHDJ1FYErQvs5bIb79XORjyIQNji36lYaiWrB3DEXHKoTf3HR2OVuxoaZBy0q3U6TTMjZe4KNNmfWPNc5iFdvZKoaTI4ztcA5S2TRRIQqB%2BgdJnIzFwjoxK79wBOMrMT3z3GGKLXbMErHF%2BIyr4J6AjBaTw%2BAF8sQBZb9qCq29bC8sR00NjTK%2BqVEG4V1YtPr2rj%2FXAsQVes4TGvo2W%2F6BfiMP7bN%2BJQzunXtCuUMJnQh8QGOqUB11n%2BZnIpQj3xC9%2BaSmc6Eae3KZDtVGnp8GQegmhDpoOTNXVzLY2m9q1A1dEHkxDLMjqOjSrZQvp7e66wmbR7tADmUl5nfux9N4GNdW6LlVN6ktJloe7DcNb4v%2FiT%2BEvSseb%2BJh%2FNlbMGe3wSJCViF2GJIIfs3ZhxrElnC7kz7d5NqK95%2F8l6FMdav1Jl%2FrOI7Rr7JDTPEzRy7LaRI8cBzsOHXae7&X-Amz-Signature=f2e9a331ad4a0fab6122d9c7efb28e6fcab40f277f80696b1175f2c36e37aadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 포트포워딩 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ad4ef0ee-9503-4486-9d7c-258418125976/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SE3CFH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCJEiQiKs88Y83%2B8Sw2tVpDoAjbRHa47jLyiAtgfiua6wIgcjzbLiO%2Ffz8MPjz6NoXHENQF1VhjoporJDoPQYlbFggq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBBbEOfryyo0LSg1GyrcA%2BqBJygAtq4BygiyefYKgEM7QjJk631n7ZxItOU9jwNtZ5ypPeJyKIjwt3DdNrapfI4YY8Ww5x3WVf1f3IkphtroqJksd6AUKeB5SthKG5rmlvtfxTZFm0QfTvj%2BQPBX0Op6EfGWgaVRnZVKwmNOkfQAQWDHm9eJ22FoQMTrWB23scHEyHyLNTnwxqSCs3lZpWRIVaa72k7W96DFSoNA6XW7CjIPFbtslj8TZ5xmTtD3P3OccEtHAoI1r5A8A7qJxc5PSaTgFkRgbUC1n0j%2FzCgnYv3g6Yim6bfEQHGbCvf7YiN9xR8FaGzZHX79hS6VkHn0aQCcIWooVWwXoNC0mccOYIBfSHsmEShntDlssmkiWaFYQC3c6fupLHK5FoqODQ9hNi6kkmni3vemO4nuVHDJ1FYErQvs5bIb79XORjyIQNji36lYaiWrB3DEXHKoTf3HR2OVuxoaZBy0q3U6TTMjZe4KNNmfWPNc5iFdvZKoaTI4ztcA5S2TRRIQqB%2BgdJnIzFwjoxK79wBOMrMT3z3GGKLXbMErHF%2BIyr4J6AjBaTw%2BAF8sQBZb9qCq29bC8sR00NjTK%2BqVEG4V1YtPr2rj%2FXAsQVes4TGvo2W%2F6BfiMP7bN%2BJQzunXtCuUMJnQh8QGOqUB11n%2BZnIpQj3xC9%2BaSmc6Eae3KZDtVGnp8GQegmhDpoOTNXVzLY2m9q1A1dEHkxDLMjqOjSrZQvp7e66wmbR7tADmUl5nfux9N4GNdW6LlVN6ktJloe7DcNb4v%2FiT%2BEvSseb%2BJh%2FNlbMGe3wSJCViF2GJIIfs3ZhxrElnC7kz7d5NqK95%2F8l6FMdav1Jl%2FrOI7Rr7JDTPEzRy7LaRI8cBzsOHXae7&X-Amz-Signature=6f51d9d0dd61becbe395634c51f4b4ee025f6997dd8f6666508deb2f77b6598d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## 이제 아래 사이트에서 내 찐 아이피 확인

🔗 [https://www.whatismyip.com/](https://www.whatismyip.com/)

## 이제 외부 네트워크에서 내 찐 아이피와 포트번호로 ssh 접속

```latex
ssh pi@<찐 아이피> -p <외부포트번호>
```


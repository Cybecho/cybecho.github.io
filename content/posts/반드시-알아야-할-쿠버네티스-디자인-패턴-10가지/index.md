---
title: "반드시 알아야 할 쿠버네티스 디자인 패턴 10가지"
date: 2023-09-22T00:00:00.000Z
draft: false
tags: ["쿠버네티스", "Docker"]
series: ["Infra & Network"]
description: "쿠버네티스 디자인 패턴 10가지를 소개하며, Docker와 관련된 소켓 서버 운영의 어려움에 대한 내용을 다룹니다."
notion_id: "e8672803-1caf-4191-8415-c6298cca8d3a"
notion_url: "https://www.notion.so/10-e86728031caf41918415c6298cca8d3a"
---

# 반드시 알아야 할 쿠버네티스 디자인 패턴 10가지

> **Summary**
> 쿠버네티스 디자인 패턴 10가지를 소개하며, Docker와 관련된 소켓 서버 운영의 어려움에 대한 내용을 다룹니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9554194d-bfd2-49f7-8ca2-f2218188433e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6UGWW5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDBVPRIConrM2rKyqG8jkcszRJ9UGA%2BMNedJkREyLSzygIgNyEWf97%2FqkzQyw1hdZCh6KAQ3N7wST%2FY1VjufZEV70Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOhzM%2F0fF5fIDBDhYSrcA%2FV3y9K%2B6eVL8VKCLAtOPBIjQT5jQjOIuK6GaN%2BEbEIhPIIim9DRVcAaUvg1%2FjhziwtvvOYEDGFmAaD01v7nrkXK%2BbrH6mP8Nj4FPzHizkAfRK0dwu%2BV3KSc1kFI%2FzPtrUfoTA4%2BG2hELo3ZdYzDaGTItU1fzKUGDUnVScByctU1Nrb6mePAz5vaFq7AVwPW%2FbwrGjrIuD3uDk6AcH9Sum6lcw3qqQ%2FmMoPFyHluKCXUA9WWRao8bhhzsYcrj3mkMxgu8VChvu4y%2BDycvp7U9zGNn2IZ35HdLx458klEtkkFtombHlvYZG9eCAx%2FNbUW45dIgq9gkPWlTK%2BcTxb3UJ2%2FxmzIi1CXv02Tp4HArQqCa1IPdgiy7ApQRNgKm9iavAgNpnywtBN6FIw4QLP5c7PLE3JJIO%2FJ1a30I72dudcXMtb9uQwb%2F86Hx2xdklsVO5qCa3PuxkPHy%2F5WGHxmn1UdVfwFcFfA5idhgC5enSVYvh4oZMzTFD40MKW%2BlK0Me8DN%2Fmq4RZinnIDqsOofnfu6CINZSj3Gj77UAKsAJzUP%2FLFaX3pxCJIsNjRDfCDRo4WU3zbrlYVBxsxcm18D%2FLi4Yc%2B5jAPGLTkBEGQT4TcEwfQ3eWvJTieE7FRpMJSbiMQGOqUBJNeNzP%2BJUHQuTHbJvw7uJY%2FBodI4YoN1hz%2FIodIE%2Be0X%2BKIOcSHqOlrN5Pbl0XNnS1bBDJme3eIuHuBJRdTJzp%2BvIzsyWcaO3yf7unK2YCxlrc9Ah9uBVAacj7HlRc8yrghZOV9Dwmsj%2FCE75EI3iwr7LQ9r%2FMdyaWctMrBfyLjQGJlyC51v8OG2j%2FhaVXVVZtUs6Y9GiW1vbtjtOM5HTBFWoPTN&X-Amz-Signature=530ae0305e024b654f17ca8d51218844293399e5532b8fe6406c70e208a46eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://elky84.github.io/2020/07/05/difficult_operate_a_socket_server_with_docker/](https://elky84.github.io/2020/07/05/difficult_operate_a_socket_server_with_docker/)

🔗 [https://jflip.tistory.com/m/13](https://jflip.tistory.com/m/13)



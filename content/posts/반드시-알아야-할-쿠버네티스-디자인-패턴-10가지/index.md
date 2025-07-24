---
title: "반드시 알아야 할 쿠버네티스 디자인 패턴 10가지"
date: 2023-09-22T00:00:00.000Z
draft: false
tags: ["쿠버네티스", "Docker"]
series: ["Infra & Network"]
description: "쿠버네티스 디자인 패턴 10가지를 소개하며, Docker와 관련된 소켓 서버 운영의 어려움에 대한 논의가 포함되어 있습니다."
notion_id: "e8672803-1caf-4191-8415-c6298cca8d3a"
notion_url: "https://www.notion.so/10-e86728031caf41918415c6298cca8d3a"
---

# 반드시 알아야 할 쿠버네티스 디자인 패턴 10가지

> **Summary**
> 쿠버네티스 디자인 패턴 10가지를 소개하며, Docker와 관련된 소켓 서버 운영의 어려움에 대한 논의가 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9554194d-bfd2-49f7-8ca2-f2218188433e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR5PBC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFSVGmvUFnwt2C3LDPIdoEny9gq8ndNssRQUO4ZmuHStAiB7%2FbRoV8ESF8qSwAX49SgZ4DiXkl1W%2BVkzX3cVszZUnCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMCxuNFGQEe%2B53X2VIKtwDsct4z%2FzGGz2pUcOSQn6tocKzVzGLmHA9hP%2FpkmV41XWiJ56TJrhIPONvGnlbkyfz0bzgJpOsfX%2B%2B10AU5N6q65kwTeCs%2Bxnb%2B5TD6xoJSHEYCmWianQFyapCddO3XxLvLYjVbSHJKVqOy8O4SDufKO7m0zL96CegCSE01fDSq3MFffCKe553Hrn9jmu%2FbBJYIpxXNAfwwgBQRRF7AsO7PNbT8YIRn%2BMlP6MXt38WT3v%2FalPXcjC14Q4PsaO28fPzRWU1XTj99FXZWow%2FqNrYb9qS%2FbSAkyWCqySFnNoATBJtkKYOAjDofibU8OM1%2BRCCv0ZmLvaas7fQXenzX58PCUsNzSh2r97vBcg85Yb7A1aHU836xAnQa9km7DPgal3%2FpqWkcIqAc1VpaZIX0elglCaI7LQdeGQTolnTjvnyJzPoO45IV21JHzNnWV7MtEe1WrGo0I0x6sCCpb1ldXvDr4icA3eRLDtyjOZE7EDYc8YpEs8s34Yw6DW1mwMCqSIHbDPiJd1PgcbH%2FmzIjX1F6sqpv0nXicdmyT2UIiqYhqjxsKIYqPHQ8iQxKZvHyvRmDCZ0um%2Fzu%2BrbMH%2FQ21sYBJQwwZOrNwT%2BLeZnSxp6TEk00JW0FYy7OAQyWMkwl%2FaHxAY6pgF8H%2FXAI3qWxHtMLZvT4SNs2GaPJCJ4EoGHfw62CQJzGMMXVjhSNYB%2FLf2ZQfl2aQHkiJjpvEVvd8XVcwczKppZW%2BksNppM55Ex6p3P%2BIEnZjW8YCCShV2UxhAUl5lq7%2B%2BiCdeaV7EWaUC4eoAvCub2twneFE5sTwfPDWs7HmqQYOxAmXMNRrRKrmAa9VOIMF7%2BTjZkLViVjocZYxG5KFpOyZwTm7TN&X-Amz-Signature=0bf36c95e2babbc727c3f4f5c1c5ba941485eca50080a08a69957986d148c31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://elky84.github.io/2020/07/05/difficult_operate_a_socket_server_with_docker/](https://elky84.github.io/2020/07/05/difficult_operate_a_socket_server_with_docker/)

🔗 [https://jflip.tistory.com/m/13](https://jflip.tistory.com/m/13)



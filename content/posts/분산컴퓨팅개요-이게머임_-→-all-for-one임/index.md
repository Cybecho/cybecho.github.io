---
title: "분산컴퓨팅개요 - 이게머임? → all for one임"
date: 2025-04-09T09:20:00.000Z
draft: false
tags: ["Infra", "ComputerArchitecture", "Distributed Computing"]
series: ["분산컴퓨팅을 공부해보자"]
description: "분산컴퓨팅은 여러 컴퓨터가 네트워크를 통해 연결되어 공동의 목표를 위해 협력하는 시스템으로, 복잡한 규칙을 통해 작업을 수행하며, 클라우드 서비스와 같은 상황에서 필요하다. 각 시스템은 독립적인 자원을 가지고 있으며, VRAM 부족 등의 문제를 해결하기 위해 사용된다."
notion_id: "1d01bab9-e3f8-80f9-af00-c0a2aac6bc44"
notion_url: "https://www.notion.so/all-for-one-1d01bab9e3f880f9af00c0a2aac6bc44"
---

# 분산컴퓨팅개요 - 이게머임? → all for one임

> **Summary**
> 분산컴퓨팅은 여러 컴퓨터가 네트워크를 통해 연결되어 공동의 목표를 위해 협력하는 시스템으로, 복잡한 규칙을 통해 작업을 수행하며, 클라우드 서비스와 같은 상황에서 필요하다. 각 시스템은 독립적인 자원을 가지고 있으며, VRAM 부족 등의 문제를 해결하기 위해 사용된다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d7036ba-d5a9-4f13-b3d8-e09e504f2915/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBZZF7E%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCnqaVT4Rzon0ilfmnQFg14N3Vil2vf3xhET%2FzG3TPhsQIhAMk0MV5V%2Ffn1B%2BLstc5do1VaKLqsbHszy2eDHlfQ1ducKv8DCCoQABoMNjM3NDIzMTgzODA1IgzzTp5n5V5BXNwON0kq3AN05hqnaT0%2BV1QTV76kyy6qDYaKgyXDTfC%2F8EzJOXDePgZvsx2VOOrz7Twd31VEsEITOkkteJ4f3qf7JE7zKl3BSTO67iluQ9TM7Rhn1lfHawXnNiYAaVFgJq35AnDT61eS9V3%2BOnW2DgC3tJVCAaot8s4QdFs4f%2FtcsslyQtegq5kIhGPaAFdK%2B2Gl%2FnWT%2BHIM5qwc7l81FQ6BBsRMvMn2EVDzjIF2rsykpZeQKfHeq8OhAQjyahcTc8Va%2BrS3BPNdOpfYF8wYIerTc2yjNvthQve6zBb7Ic4FO5xrDWHYUWfw0Rq4%2BZjeZZrBLBYnuT22Ud6T2IOc98XhUNAyHtUUMQ7%2BIcntQ50Fq3VU%2FVy7subieg%2FlF6LWeUGWUpDb7M0XWiSxsDrjmcPYEfjHmHFx1TYkxby3YJPtR%2FE1ax%2BllTVQYsqMoyidzyFqsQ8Hb4yE0Rh54BXzlSPVqykMcsUDmePVnwFw2D6xd1ZtKgbP19JdYJW8diA9ubGFWe9bKOg%2Fi1sWhlAj0KXeFAOBwvVkl8qSjKPhElZWVZEtNH5FJmKPq9d4jt1SEYYIt4skYFZyCTfny0iirWogHtaIwSCcFXKQWe%2FeuEQ6ZHLwy0PmZm75hxuUGwdkSZF07TCc9YfEBjqkAVu6NpYBlfcml8uUTTgG9M1qCj5mGYeRs7hoDqVhV9f%2BtckYv6I44QqTdjYQq%2FHGOryuEkWrYUKAG90jyuTJRYhVYgaPF%2FmsFEdNkR8FROgcXif8R%2Fu9SYHEw31ZoqZyLs6aSGVQ3Bu1OITkcRZTOYlpdvsy8aaPJQetN56xpwLT2uzf8kbeoAiFVvHPHXz%2BOMCDJEhqbAeQvq%2BJF1YaNY%2FyRex4&X-Amz-Signature=c5f1be59a2ae0b70afb782f4e31c8d64c4055afec27965fee88e3620e5a5774a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 분산컴퓨팅 - Distributed Computing

> 여러 컴퓨터가 네트워크로 연결되어, 서로 정보를 주고받으며, 
하나의 공동 목표(공유된 작업)를 위해 함께 일하는 시스템이다.

## >> 분산컴퓨팅 개요


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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d7036ba-d5a9-4f13-b3d8-e09e504f2915/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFAR5N5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE9En7vU0s1DIA3UGd2DSBZlutK6rxvq%2FBYtrLt40oFcAiEAgebnmx%2BztICkJSyKsFoWjwfcMv2BeH8GQelGnXYJBhcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCrLeMMCVUgYP8d0vyrcA6%2FuEXwSrE6PEs7Aju1oFg8PpvotUndFnmx7xjgKdA7jqNJSTrz8h6QT1C4Z8DIBy1dzyOoCmTXhtFOTXUwJFipa%2BNpp7YRwKtg2kovFptTs296ee%2BtXm0wjpVbR%2FkqBIls8Qd1WHiFUxIapadxXyALXug7larj7L5lfnwLoUL%2Bf5WSe23BkCnDvpzafAZ116eQvG3OXYbbHKduex7jim2wiE42sHjJI9ZqYrwun8s88TSXNcP%2BaS7Qc83yRe%2Fo0Iik0myKurCutghggOKKpt6d4B9Wo7q6G3prdqq6v6VslSOEEu9mRhZiZVJvXjfteHrMpQbEqMpaNo7xKMdq0NCD1NOXj%2BJmZXNEFjrw30dDtXWZeyrlTghAFqG3ooYKBhK5D70tpTW623NyNBg5nOjwC10VyKtydzxGa8xbRAsdNFmEKxWwXTqZunDqXFHCbymqBWG%2BKM%2FLJyjoQSZ4CwrO8vKjl7Y32IQg0QNdEn%2Fx4DSAGfWT7uVf3ZMKoZhSC7jdFxHibKYhqt9xWPIpQ6RBOdk0PfB3tESDglgZLj%2FvigzHxaE66uVyzGEu78xagxeOwdgvH5ZcGHgKiJQR1gc48zHQTs11ARLd0%2FjRMc5f387Nb606B%2FqPk86SPMMDQh8QGOqUBzYTof8bR5YFNokricW8snCTirttLzwXMK5AWMfYeMVxAVtU5pJ1%2FkUmw25p6GQNGfFsinC8l2qnlyPXYZlsWp7capLCNE3gs3dcp6l5rgjNehB7D6Mb5XCgrLmu3wZycIbakxpW9ZYOCBKO5eVbtivQeykwRaLm8KQ2bbjH8346c4gEzInmYegLvZJv2xVcyXi8VZaVe4i7AgyOPsvRn5WoIcgW%2F&X-Amz-Signature=449299cdae0095cb5ad00965f490ed426e2aca937b9eb8acc774c7d96cc615af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 분산컴퓨팅 - Distributed Computing

> 여러 컴퓨터가 네트워크로 연결되어, 서로 정보를 주고받으며, 
하나의 공동 목표(공유된 작업)를 위해 함께 일하는 시스템이다.

## >> 분산컴퓨팅 개요


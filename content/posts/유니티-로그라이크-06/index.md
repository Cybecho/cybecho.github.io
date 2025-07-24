---
title: "유니티 로그라이크 06"
date: 2023-03-04T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "몬스터가 플레이어를 따라오고 바라보게 만들기 위한 C# 코드 구현 방법과 화면을 벗어난 몬스터를 텔레포트시키는 방법을 설명합니다. 기본 컴포넌트 설정 및 물리적 추적을 위한 FixedUpdate 사용법도 포함되어 있습니다."
notion_id: "af7c1c92-c779-4ec0-8935-e4b379cfa259"
notion_url: "https://www.notion.so/06-af7c1c92c7794ec08935e4b379cfa259"
---

# 유니티 로그라이크 06

> **Summary**
> 몬스터가 플레이어를 따라오고 바라보게 만들기 위한 C# 코드 구현 방법과 화면을 벗어난 몬스터를 텔레포트시키는 방법을 설명합니다. 기본 컴포넌트 설정 및 물리적 추적을 위한 FixedUpdate 사용법도 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f903ec0e-6163-487e-8867-4163a3084b94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICPRYDU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC3x45%2BQCkrc0un%2F548xBj5GOWtmwJd%2FHnVpstK52F7uAIgBWidxBpvJ5ucm5gMxwThbcb2fQsEFbZnLOhdfl7ytN4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDL93Rrp8pJnXf4rEBircA15CNeLZghW4HtNJLvArfFOjb5VCiQryYL14vOg73wxV0HAiRjHcQk4JdNdJeSWbp%2FKyWjtl1%2FWBIA%2Box0eQOKpwHD73x53GnozilwrabNen0ZW1jG%2Fjqdd1sm8fmIZSRiuhxRgD5CNbZjIsA69ZnccJ3BcLnv2Tzz33Vc6wBYx9wQ%2BhwD92V6qwNxvKsFMqfFXMEA5OL2ijlh%2BMNUGkk%2ByUput3aeEFDPmfd%2FonO7rRCA4xmz50pJAUTTYDpE%2B4BpPRvi6qFLm9qYHvNdqBZpJZ2izfe5lR7UMZCh4u%2FlysF0WBFhUUeooiThlU5I4VVP%2BDtgdBMtt1Y1BV6DzFLgauVL2tAgf9Od%2BO9s5dajKTJXyUQhyGPSftIcvGCP0bUCQORuN%2BN2TsftCxThBBFxh9HMyPnlrGs03Z8iv2YEhbch0Lict5IHGg8nqGgSM7nYQNrTLLZMH14OQJ4X%2FcABrLMG6wxIsoIWyHLpFtLoa5KERhzH9%2FqVYO5uAnifH1EOqhnZ%2FfufVqurAlbLxR2SvHlBgdTuPYNQ92IZRrXrW0wyaK%2Fsk9bghd5apl82yaT6ctJgvlFWWF72X16A4txY03QeTgrFO2oK1x1KmQblKbWUupFKfjLLgZ%2F3hXMPjOh8QGOqUB1eX%2BYIbh6QiJqivtE6%2BdSHewSY%2Fkj8nzy5VRv8H0ve%2BOD%2B7tSjrKxt1KP6lU5FZpXPFwltaEYWfvi%2BC7RPq3jPeb38UlcW9qHzutrxfhAYiCwfok0xz9DfySQj0MheqxZ6umberl5v4H0%2BSysqvwxNtMG8V3eZf%2FXSNsCqpBA8MJw3SKJ3kBX2rlSvpJoW0ZZz1jsN8OSGetgCVtMZx6zHcT2FJ4&X-Amz-Signature=cdcdce50d0ef70344399745a52ace138ae6dbbbe554027f4b2437dd9b634a1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=0aUCu1BcZxs&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=7)

> 🔥 **적 스프라이트를 가져오고 리지드바디를 추가한 후에 회전하지 않도록 Freeze Rotation값을 잠가준다**

> 🔥 **몬스터가 날 따라오게 만들어보자!**

> 🔥 **몬스터가 날 바라보게 만들어보자**

> 🔥 **몬스터가 화면을 벗어났을때  텔레포트 시키게 만들어보자**


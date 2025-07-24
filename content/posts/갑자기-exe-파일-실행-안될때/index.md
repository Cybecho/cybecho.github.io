---
title: "갑자기 exe 파일 실행 안될때"
date: 2024-04-29T01:42:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Don't Hate Windows!"]
description: "비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 "
notion_id: "9f0333b7-c253-4bb9-b40a-3dbd8ee615d5"
notion_url: "https://www.notion.so/exe-9f0333b7c2534bb9b40a3dbd8ee615d5"
---

# 갑자기 exe 파일 실행 안될때

> **Summary**
> 비주얼 스튜디오로 빌드한 프로그램이 실행되지 않을 때, 파워쉘에서 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/523cb8fd-70e6-4120-aba6-a831a254dd5f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYGUWI6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICWzpcHlAtn2hw%2FcOZSrgO5x5r95r5K%2BBnhJMlKfjgi5AiBufZVUt2uy2eDFrtyEXGegeeYIi1zM4AVABsXThD1RVyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMzi1TOZB0ny6ifdC8KtwDVbZQmhLSEtzhxQd5iSWjVGHnEB7vPGv3jmUotdxPdZ3OXqCH2gbR55MIza4eCPqanKSHtyBPlTLPztbFXr3inp0t2GawesttDNjh7mhJSpOM0NIczL8o4fmvrUjqDh0FGKoK9fk8x00nwYPgqwWdBiTOG50URfqo7VH1Syr8N59w7GloakOsso1woAqnUX70nofMhFVsbRJ3PzCYOoyRNTvgXGqRjSjwhBlnLvchPSOFyRkdj15J%2FeH%2BJQk5FICq2nBjH4hvqRZ6Eu%2BhwmAqoeLJ5zqTmZqX38zt973rPjPgRyOg7aVAZrMniUJwTiioeLyq4nHRTaNUnQeBApAOJw2%2FfSwVd7KVBpDK6olFcwX5W13F9zKGwirZv5C8Kbf%2F2JPdWSuBOcK9R%2FQaSibl%2FZrWYGhFxGBIyzoW60BFreR%2BMwuIlaaA2tKiikjTTNyLlAaMUrhweiLm0DFG2sxoVFjnEmb0BOn4lV4%2FdVd%2B7qW%2BlrwTV%2BfyXqGA7d64CxWxm%2FON%2FGrlguMNGQmrtkdoD%2FK7RzSJzgPAuN7qzQkpVgNPQH3fZjQgUTwo0uZqCxL%2FRKQHmb3Bga5na9K5fD2NA65f8kkggV8hZ2%2FY4a%2FLqiBpQ2f8b4fB0iODxJgw3s6HxAY6pgGddGAo%2BMMFkRktnEfVik7l6GDd3FauMw3X75qzAtg8vxjVI%2FKnJe1GI6o%2F17ZmMyBycgpyrLPOJHBm5GGSvX995F42Iig30DWVdyRs4ifYTM0fR0H%2FRkrOhkBz8TgrAyxwZ7G1ku7lvHVjR%2F9QmnKUpiu3miQ2%2FlHPNNwkGSExeV%2BfhMZKmKREG8A07z90nLIkjE%2FIRXuwfrPQ%2BJDwxpeIoqx96S9b&X-Amz-Signature=2a37f07e8e5c7a699e4f4407e571d03d860bfbc6add30b3a499a5e245c8cb8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

몬헌 모드질을 좀 하다가… 시스템파일을 건드린것같다

갑자기 비주얼 스튜디오로 빌드한 프로그램이 실행되질 않어~


파워쉘에서 다음 명령어 실행

```latex
sfc /scannow
```

그리고 재부팅하면 해결됨


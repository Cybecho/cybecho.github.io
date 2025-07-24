---
title: "유니티 로그라이크 05"
date: 2023-03-03T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리 및 랜덤 타일 생성 방법에 대한 설명이 포함되어 있습니다."
notion_id: "4262fa2a-444d-4d13-b1a6-08a8da0b762c"
notion_url: "https://www.notion.so/05-4262fa2a444d4d13b1a608a8da0b762c"
---

# 유니티 로그라이크 05

> **Summary**
> 무한 맵 구현, 플레이어를 따라다니는 카메라 설정, 게임 매니저를 활용한 코드 관리 및 랜덤 타일 생성 방법에 대한 설명이 포함되어 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/990a699c-5294-4cc3-85f6-2a03dd05c4bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJPJIRT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCDwx%2FV7p4eG8FbV9RdSWBYe4CMDNpedqQfEm3h7dBBhgIgG5Oq0GM5MUOXtjAokN3A9oZ0%2BUSajujAa0sQ76QnBgUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFmgP%2FdtiSVid3q4hircA59nbzrP2k2yjAtQd2h1wacHv%2B%2By5l6iczEGz3oMjUYarkBXUi%2BnQWH89y7whtYHKeSmIyJXIwJk7erKVQyozYWz2yskbHdtdWFr3K65UzWge1G5DcM7RDW5wlogi3mspj7DskZNedpRh0NcmC2WGeWYVWU97sJIwkq7NLZEkwaLmu7sT%2BLtlVjYWpAF4PtqHgNwWkushwXM6ewzxcYdaeCFicW57g2KZ6TSvobRdzx%2BFMZ5eeyuDt3CHdIKyP4f3y3aOPA%2FSta24vaRCRTUyXsphVmVRQwnnF9HOQSlTc%2BpSbVgDwCgnmvpnJrVE4Zeh8PcL%2FeRXG1ztb11xoSOaDUKEBau%2FSZ4xd1Q1NsrG29a5MecVtQmS4w7hlWzp%2FcAWck0H0EhG3ufZqUMs2hh%2Bjpsjnyu22OuDQnzhNbp5d05j91Xri1s89OU5CDA6qSugZbE%2B4pf1ZkA4aTxD10fw2czHWjzyYOjMMseAqzQd9A1VEs8uRc9lRej1mRm%2F39OV0t3UTtpejMGocbBAHMK28gc8kMGUvxWVWPoYDKKvkAPqjqIeZC%2BLrTb7BdCk7SDY85dHFHZks%2B7V5QfKQ9LdTJbwep24pZot0yh2Qll2fr3njMx%2BdnoC8F88ecvMIH1h8QGOqUBpg2f%2BwKrAOX9DCMserjXnncE9B7OvFVaoayBiY79tuiIeSRvyxQvt3UVc509m7fxrJYZUTARb1N6YvQBiyXpz35%2BIAUSRGoiykl2E3YmSmZwB%2FjOtvXAcwn%2Flf0GM8cMLBZXVXZMTsBPE7XyUMyensRdGBYMi4vyYb4LDiw%2FFM5ll9vtm8yd6E4d2LCoKdRDj6JyD2pm52iFs5QhNzmLt2lwiRq7&X-Amz-Signature=19cdf90460e6e43f175ca5e8256188c488f9790e4d60fbf152a9b28a689d77dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=SNjgew0VhHY&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=6)

> 🔥 **랜덤한 타일이 배치된 타일맵을 그려보자**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/94dffacc-a392-46b8-acc6-af06df3d3ea1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=df7bae46d23b0a3d1e6640bc64c4357495c18ce2255f85153f5dd3b315f7f098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/afef187f-0cb6-4a05-b1bf-99f4485e5aa2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=8b6b35e5f3ff7992caa6f79b037975e5910d45ebb9b4c72f8831b00b446f1c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/6c84ff62-0ecf-41f6-be96-2d6b82fc1ffc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=6d6111ae0ef9ab4c246277d879feb8599407f026723758bc6f8c8eccf6a6ddb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **Runt Tile이란 인접한 타일에 따라 이미지가 정해지는 타일 (랜덤생성 타일)**
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/25dc40b3-78af-49fe-95b8-9f55d9dd8a02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=f752aead9c27d017fabf95f72263716f07be2c623ac1ac28fb5e2d912dee5539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9fce8d7a-d2e3-4191-8f7b-ce380132db2b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=a906bd2173de145043263ad762c70a9c6a8a78deeed22350360d1365110ace9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## Tile Palette에 RanTile 적용시켜서 랜덤타일 생성될 틀을 만들어준다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e5a545d5-1198-476b-aae2-5391fa9cef26/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=faf252d2b5c8a45bd41d4ce3c10aa1344937e6e50fb526b49626bcfdd4235f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a5db4aff-a592-44f4-adda-22c028596011/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=fd32adc060d2adef8b888df8f6f418a2a82b07b8995423a86c67f242d2dffb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/381ce7c2-3eba-4193-9257-4912596e6d16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXOSYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAX8oPHzRPsvUZ1dMG6Waz8HSM9eS2XDhd2rAtPrN8rNAiBbvkTuTIxcbztis9I8XaRW9gFZZNYAnRwm8Egq84andir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3L1xRjzCbFWVz4fjKtwDIdhkiyX8I7%2FWvPKDyTEUaXkimHuPtd2PF2VgqTx%2B1NQYY%2BsQFixXN1hxev2iqRCboO87%2Fk4Rvf3JXkZy9vHYz9bg2rkSDiVuCe48S6mQuBG5F36kkAaKvtp3xUO2TiRZz60ldM3Jf8rmkwcz1VyX3YzKNHrgJyOGBLuUhQnniVtYEui3sj1cwo%2F5ndZqPf7RSmVd0fShyZ4e6oZSucm7Ga72eWQ1LTWDfER74N%2Bh7ympqT0LISIiI2J8iGS1taOr%2FNRtJ7YfiGeaWW5zRgSbH%2BiKxW%2F6dx1KyD7aO2ZOad11FcAP4YhJ93ILhg1nxp6Nvh%2B7DbA88wDBAZZrMpmfIT9VmvPrno8ygLX3pme8qj%2FOmWznNqU%2Fb9i2977jajO8FNZpZAUXL5uczx76nUDl4O9Mv49xPHEfNhW%2FdY4QEFkFmeM3mYJHad4TMWwAJvHeotWfL3Eh26s9YbF0OWza9AwcxQ9dVJgwH2iHxdxjnWgggBR8YGdix2ztvIYGo6MFIfhFOpyAjkIo0u%2FRDMKipfR%2FWzYCyIMu4ChCECW%2FGh%2FBnZ%2FhC2JzgFQnVt03RHtq72mhKvXDNTpgd11ErVPF9WjYgGLyHCPqasqOI5H%2FQjCF2Zg5QthxgG3j9x8wgfaHxAY6pgFuTcDua5gI3L0Z0lLj5tq9LvmV6LGG32vV0Q%2B5oJVhIzEr6efzCSDlVwroNqRTiPG3VuWc62%2BrWsx4CE8DE8NuN1cXraIyHqWpsb45j23q1rhbTuRjI6kLvkkuxND4v47YFOSvp8lGOBLmTLuLHZSHlA7Nq47W759%2Fnq13QmlqlaHTuOWyoj7e8STH8VRloWb6WDE9mbQXCqPzczm8YgWJtQ1GGJff&X-Amz-Signature=34a154676db5cd8e71b3498cc012b0cc03f6150af33da7c7ef30702c260ebecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 ****랜덤타일맵 생성 - 1****
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ae138891-7f20-48a4-b23f-e171ad41c790/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5F56DT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOswWd47M4kN9qe6d07bsTIuOI6n9VHGEPs1zyRHek7gIhALze7OWU9CZZ2WQvwHnflRzHzhoO1E5Bi1hALNLgDaWBKv8DCCoQABoMNjM3NDIzMTgzODA1Igx4Ws2aF%2FNQCde8nlMq3APsntAgxej2DmR6L7FaBHpaktWssZeI9qlorOdCTYvkCInom9ooZsH5pqq7Vq%2FQSmOzA0DrXR0uVzgQJ5KW8BuyG3wfzQdbJBAbev%2FEoKkyOH83sDzJSn%2F3f713rIdqlD0cZEoifc8KQgzuQxrCnTROLwZuPDosDdBhDRyZwiH%2FN4qzK8B6X4lQqj7jeOmvzk3uwb2NWVPUGOrA5TyKWGvqmy67i3LvAHvY9R%2FlECG7JrwsSlq7Es%2BMURYcmgRJ7N4PNO8ZZxm4o1G13Qk6%2FNXuFs3Bkrd1KI6%2FNeaSs9%2Fb6lgVd69IENDaRJ8Oa9NKXM6usDQRfLuc4duO6JdMu4z5HXlj7xn9ods9VOT6yEH%2FV9%2FSoWfa%2B99BNWwXfSjQuEkjw%2F3odsQJF1zhIXm7JDfJw3iGBzKvEKqzF2nw6PXXwf4MWo79OpiCopG5niWW8ekjgpghh657cYHO%2BJCNbHAZCPEpzjcdGZD8IwNaTsPT1mB7UFuezYDxwM%2F2B4xip4aPmJUghnBitjcRkQeH6XDwdJZlzICD3C6%2Fw52eftwPpYZtJV9XEaPLM1OmWJSB7MzurZBGOQZI4dqHgOcRDBixSJME4psJ94EeM7auA0VnjKAERNFTVF%2FZdZmbrzDf9ofEBjqkAexWC2poIBaI0SAdhS7qtJLLdgUNbXhtGNOMkSgrWVElE%2Byh6F1XpNIDkoAHaFhbOIIHn0%2FjdqNClA2FZe%2BejTj%2Fmj%2BLEvFz%2FzMp1K5C8V79g%2B9tHELaJRPv59yUp9ahLkMQCBpHs2yMIhr2KSX%2FUWGH3jmYCCx37QPBXuYvOw9jQF6gLdkcSMwnNQo0GxOgJuATYuwGM4sAcZ0pNO5wjKvch7Y8&X-Amz-Signature=f577d7f574841544493c21c2c6e0c3ec8867b5f215c608a4e2426b9179602ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 하이어라키에 Tilemap에 `Tilemap Collider 2D` 와 `Compsite Collider 2D` 를 추가해준다
>
> > 🔥 **`Compsite Collider 2D` : 잘게 나눠진 그리드 속에 나뉜 타일을 하나로 합쳐주는 컴포넌트**
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9eafbdc0-d625-4ff6-8bba-70a2654d9fe0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5F56DT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOswWd47M4kN9qe6d07bsTIuOI6n9VHGEPs1zyRHek7gIhALze7OWU9CZZ2WQvwHnflRzHzhoO1E5Bi1hALNLgDaWBKv8DCCoQABoMNjM3NDIzMTgzODA1Igx4Ws2aF%2FNQCde8nlMq3APsntAgxej2DmR6L7FaBHpaktWssZeI9qlorOdCTYvkCInom9ooZsH5pqq7Vq%2FQSmOzA0DrXR0uVzgQJ5KW8BuyG3wfzQdbJBAbev%2FEoKkyOH83sDzJSn%2F3f713rIdqlD0cZEoifc8KQgzuQxrCnTROLwZuPDosDdBhDRyZwiH%2FN4qzK8B6X4lQqj7jeOmvzk3uwb2NWVPUGOrA5TyKWGvqmy67i3LvAHvY9R%2FlECG7JrwsSlq7Es%2BMURYcmgRJ7N4PNO8ZZxm4o1G13Qk6%2FNXuFs3Bkrd1KI6%2FNeaSs9%2Fb6lgVd69IENDaRJ8Oa9NKXM6usDQRfLuc4duO6JdMu4z5HXlj7xn9ods9VOT6yEH%2FV9%2FSoWfa%2B99BNWwXfSjQuEkjw%2F3odsQJF1zhIXm7JDfJw3iGBzKvEKqzF2nw6PXXwf4MWo79OpiCopG5niWW8ekjgpghh657cYHO%2BJCNbHAZCPEpzjcdGZD8IwNaTsPT1mB7UFuezYDxwM%2F2B4xip4aPmJUghnBitjcRkQeH6XDwdJZlzICD3C6%2Fw52eftwPpYZtJV9XEaPLM1OmWJSB7MzurZBGOQZI4dqHgOcRDBixSJME4psJ94EeM7auA0VnjKAERNFTVF%2FZdZmbrzDf9ofEBjqkAexWC2poIBaI0SAdhS7qtJLLdgUNbXhtGNOMkSgrWVElE%2Byh6F1XpNIDkoAHaFhbOIIHn0%2FjdqNClA2FZe%2BejTj%2Fmj%2BLEvFz%2FzMp1K5C8V79g%2B9tHELaJRPv59yUp9ahLkMQCBpHs2yMIhr2KSX%2FUWGH3jmYCCx37QPBXuYvOw9jQF6gLdkcSMwnNQo0GxOgJuATYuwGM4sAcZ0pNO5wjKvch7Y8&X-Amz-Signature=df3e4bed5609b8b5d335c729dcc102d8a90d770c72d6861068a4feb3f76dc3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fd8546d0-e668-4744-8fb0-6ba6822e461e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5F56DT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOswWd47M4kN9qe6d07bsTIuOI6n9VHGEPs1zyRHek7gIhALze7OWU9CZZ2WQvwHnflRzHzhoO1E5Bi1hALNLgDaWBKv8DCCoQABoMNjM3NDIzMTgzODA1Igx4Ws2aF%2FNQCde8nlMq3APsntAgxej2DmR6L7FaBHpaktWssZeI9qlorOdCTYvkCInom9ooZsH5pqq7Vq%2FQSmOzA0DrXR0uVzgQJ5KW8BuyG3wfzQdbJBAbev%2FEoKkyOH83sDzJSn%2F3f713rIdqlD0cZEoifc8KQgzuQxrCnTROLwZuPDosDdBhDRyZwiH%2FN4qzK8B6X4lQqj7jeOmvzk3uwb2NWVPUGOrA5TyKWGvqmy67i3LvAHvY9R%2FlECG7JrwsSlq7Es%2BMURYcmgRJ7N4PNO8ZZxm4o1G13Qk6%2FNXuFs3Bkrd1KI6%2FNeaSs9%2Fb6lgVd69IENDaRJ8Oa9NKXM6usDQRfLuc4duO6JdMu4z5HXlj7xn9ods9VOT6yEH%2FV9%2FSoWfa%2B99BNWwXfSjQuEkjw%2F3odsQJF1zhIXm7JDfJw3iGBzKvEKqzF2nw6PXXwf4MWo79OpiCopG5niWW8ekjgpghh657cYHO%2BJCNbHAZCPEpzjcdGZD8IwNaTsPT1mB7UFuezYDxwM%2F2B4xip4aPmJUghnBitjcRkQeH6XDwdJZlzICD3C6%2Fw52eftwPpYZtJV9XEaPLM1OmWJSB7MzurZBGOQZI4dqHgOcRDBixSJME4psJ94EeM7auA0VnjKAERNFTVF%2FZdZmbrzDf9ofEBjqkAexWC2poIBaI0SAdhS7qtJLLdgUNbXhtGNOMkSgrWVElE%2Byh6F1XpNIDkoAHaFhbOIIHn0%2FjdqNClA2FZe%2BejTj%2Fmj%2BLEvFz%2FzMp1K5C8V79g%2B9tHELaJRPv59yUp9ahLkMQCBpHs2yMIhr2KSX%2FUWGH3jmYCCx37QPBXuYvOw9jQF6gLdkcSMwnNQo0GxOgJuATYuwGM4sAcZ0pNO5wjKvch7Y8&X-Amz-Signature=40e637e9cde524af0bb99ff51d11ba5f27c30ab64c99342eb397e9466e80537e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/90937825-6ea5-49af-99a8-6a187841ffc3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5F56DT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOswWd47M4kN9qe6d07bsTIuOI6n9VHGEPs1zyRHek7gIhALze7OWU9CZZ2WQvwHnflRzHzhoO1E5Bi1hALNLgDaWBKv8DCCoQABoMNjM3NDIzMTgzODA1Igx4Ws2aF%2FNQCde8nlMq3APsntAgxej2DmR6L7FaBHpaktWssZeI9qlorOdCTYvkCInom9ooZsH5pqq7Vq%2FQSmOzA0DrXR0uVzgQJ5KW8BuyG3wfzQdbJBAbev%2FEoKkyOH83sDzJSn%2F3f713rIdqlD0cZEoifc8KQgzuQxrCnTROLwZuPDosDdBhDRyZwiH%2FN4qzK8B6X4lQqj7jeOmvzk3uwb2NWVPUGOrA5TyKWGvqmy67i3LvAHvY9R%2FlECG7JrwsSlq7Es%2BMURYcmgRJ7N4PNO8ZZxm4o1G13Qk6%2FNXuFs3Bkrd1KI6%2FNeaSs9%2Fb6lgVd69IENDaRJ8Oa9NKXM6usDQRfLuc4duO6JdMu4z5HXlj7xn9ods9VOT6yEH%2FV9%2FSoWfa%2B99BNWwXfSjQuEkjw%2F3odsQJF1zhIXm7JDfJw3iGBzKvEKqzF2nw6PXXwf4MWo79OpiCopG5niWW8ekjgpghh657cYHO%2BJCNbHAZCPEpzjcdGZD8IwNaTsPT1mB7UFuezYDxwM%2F2B4xip4aPmJUghnBitjcRkQeH6XDwdJZlzICD3C6%2Fw52eftwPpYZtJV9XEaPLM1OmWJSB7MzurZBGOQZI4dqHgOcRDBixSJME4psJ94EeM7auA0VnjKAERNFTVF%2FZdZmbrzDf9ofEBjqkAexWC2poIBaI0SAdhS7qtJLLdgUNbXhtGNOMkSgrWVElE%2Byh6F1XpNIDkoAHaFhbOIIHn0%2FjdqNClA2FZe%2BejTj%2Fmj%2BLEvFz%2FzMp1K5C8V79g%2B9tHELaJRPv59yUp9ahLkMQCBpHs2yMIhr2KSX%2FUWGH3jmYCCx37QPBXuYvOw9jQF6gLdkcSMwnNQo0GxOgJuATYuwGM4sAcZ0pNO5wjKvch7Y8&X-Amz-Signature=cd5b423608e0776396b57862a4e1ecd0d993634bacc09de71d6aa8df44faca61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ## 그리고 Tilemap의 Tag설정을 ‘Ground’ 로 설정해준다
>
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f7409f2e-4475-4a8a-980a-94a1bccbf699/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5F56DT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOswWd47M4kN9qe6d07bsTIuOI6n9VHGEPs1zyRHek7gIhALze7OWU9CZZ2WQvwHnflRzHzhoO1E5Bi1hALNLgDaWBKv8DCCoQABoMNjM3NDIzMTgzODA1Igx4Ws2aF%2FNQCde8nlMq3APsntAgxej2DmR6L7FaBHpaktWssZeI9qlorOdCTYvkCInom9ooZsH5pqq7Vq%2FQSmOzA0DrXR0uVzgQJ5KW8BuyG3wfzQdbJBAbev%2FEoKkyOH83sDzJSn%2F3f713rIdqlD0cZEoifc8KQgzuQxrCnTROLwZuPDosDdBhDRyZwiH%2FN4qzK8B6X4lQqj7jeOmvzk3uwb2NWVPUGOrA5TyKWGvqmy67i3LvAHvY9R%2FlECG7JrwsSlq7Es%2BMURYcmgRJ7N4PNO8ZZxm4o1G13Qk6%2FNXuFs3Bkrd1KI6%2FNeaSs9%2Fb6lgVd69IENDaRJ8Oa9NKXM6usDQRfLuc4duO6JdMu4z5HXlj7xn9ods9VOT6yEH%2FV9%2FSoWfa%2B99BNWwXfSjQuEkjw%2F3odsQJF1zhIXm7JDfJw3iGBzKvEKqzF2nw6PXXwf4MWo79OpiCopG5niWW8ekjgpghh657cYHO%2BJCNbHAZCPEpzjcdGZD8IwNaTsPT1mB7UFuezYDxwM%2F2B4xip4aPmJUghnBitjcRkQeH6XDwdJZlzICD3C6%2Fw52eftwPpYZtJV9XEaPLM1OmWJSB7MzurZBGOQZI4dqHgOcRDBixSJME4psJ94EeM7auA0VnjKAERNFTVF%2FZdZmbrzDf9ofEBjqkAexWC2poIBaI0SAdhS7qtJLLdgUNbXhtGNOMkSgrWVElE%2Byh6F1XpNIDkoAHaFhbOIIHn0%2FjdqNClA2FZe%2BejTj%2Fmj%2BLEvFz%2FzMp1K5C8V79g%2B9tHELaJRPv59yUp9ahLkMQCBpHs2yMIhr2KSX%2FUWGH3jmYCCx37QPBXuYvOw9jQF6gLdkcSMwnNQo0GxOgJuATYuwGM4sAcZ0pNO5wjKvch7Y8&X-Amz-Signature=cd980d61045316403bfed285e2f1d68b311031608e472eaffdb8d9a8c9ebe449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 ****랜덤타일맵 생성 - 2 (재배치 스크립트 준비)****
>
> ## 게임메모리를 생성하는 이유는 게임메모리 자체를 메모리에 얹어버릴것임
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/720601d4-071d-4a94-9fd5-cfe18f50daf5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=71c0b5aa966f6a84b1aa001029909ba137322919df3e77357e74cca71c52674f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/15caa34c-1b5e-4d00-aadf-6fbbcd41985f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=d786687b56d233a1f34ddb0de200e7b6417393ec7514f75fd2a80703a2eb316a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 파이썬의 Main 함수를 따로 만들어서 미리 만들어둔 함수를 미리 불러와서 사용하는거랑 비슷한 논리..
>
> ```c#
> //Gamemanager.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class GameManager : MonoBehaviour
> {
>     //정적변수 static을 미리 설정해두면 즉시 클래스에서 부를 수 있다는 편리함이 있다
>     public static GameManager instance;
>     public Player player;
>
>     void Awake() 
>     {
>         instance = this;
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f6a13b67-252d-4548-a313-40bff2392131/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=d0bebfdcb81d1262c7773435f45c03a7f9f3f9ae62fb3f9a57054c80b30887b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> # 코드작성
>
> ```c#
> //Reposition.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Repostion : MonoBehaviour
> {
>     //트리거가 체크된 콜라이더를 벗어났을때
>     //이를 위해 플레이어에 Area를 만들었다 (충돌여부를 확인하기 위해)
>     void OnTriggerExit2D(Collider2D collision)
>     {
>         //이 콜라이더의 주인
>         //Area 태그가 '아닐때' 코드가 실행되도록함
>         //만약 Area태그가 아닌다면 코드를 실행하지 않겠다 라는 뜻
>         if(!collision.CompareTag("Area"))
>             return; //코드 상단에 if return 필터를 넣음으로서 이 태그가 아닐경우 빨랑 코드가 나갈수있도록함
>
>         //거리를 구하기 위해 플레이어 위치와 타일맵 위치를 미리 저장
>
>         //플레이어 위치
>         //플레이어 포지션을 가져오기위해 게임매니저에 저장해둔 플레이어에서 위치값을 가져오는 과정
>         Vector3 playerPos = GameManager.instance.player.transform.position;
>
>         //타일맵 위치
>         //현재 이 스크립트가 들어있는 타일맵의 위치값
>         Vector3 myPos = transform.position; 
>
>         //x축과 y축 각각의 거리를 구하는 코드
>         //Mathf 는 수학 라이브러리.. 절대값을 구하기 위해 Abs를 불러옴
>         float diffX = Mathf.Abs(playerPos.x - myPos.x);
>         float diffY = Mathf.Abs(playerPos.y - myPos.y);
>
>
>         //플레이어의 이동 방향을 저장하기 위한 변수
>         //플레이어에서 미리 만들어뒀던 inputVec을 불러온다
>         Vector3 playerDir = GameManager.instance.player.inputVec;
>         //Player에서 노멀라이즈를 했기때문에 1값이 안나오니 0보다 클때(좌우 이동할때) 값을 받아온다 
>         float dirX = playerDir.x < 0 ? -1 : 1;
>         float dirY = playerDir.y < 0 ? -1 : 1;
>
>         //나중에 적이 추가되었을때 적들도 재배치를 요구하기때문에 여기서 필터를 만들어준다
>         **switch (transform.tag)
>         {
>             case "Ground":
>                 if (diffX > diffY)
>                 {
>                     //Translate : 지정된 값 만큼 현재 위치에서 이동한다
>                     //Translate(이동방향,플레이어방향,Area의크기,)
> 										//40을 곱해준 이유는 Tilemap을 4개 복사해서 쓸거기 때문에 타일맵의 총 합을 구하면 40이된다
>                     transform.Translate(Vector3.right * dirX * 40);
>                 }
>                 else if (diffX < diffY)
>                 {
>                     transform.Translate(Vector3.up * dirY * 40);
>                 }
>                 break;
>             case "Enemy":
>                 break;**
>         }
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f4af07a2-cdd5-482c-8f37-b94f8996bb57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=bbc72987e6db41a90ff956cd310d60308f0737a2462354f989dc4c9c345f2470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> 만약 이런식으로 X축으로 화면을 벗어났을경우, 
>
> ```c#
> if (diffX > diffY)
> ```
>
> 해당코드와 같은 수평적으로 벗어난 상태이니 그에 해당되는 코드가 시작된다는 뜻
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/89d2c11f-2acb-4346-a42b-db567701d5e9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=59aa8665a85f880127719ae04c4fcbd98138030cd9ae3a0b437efdcd1f3e6827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 이 4개의 타일이 계속해서 재활용되며 이동되는 로직인데, 그림으로 설명하면 다음과 같다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fbdd4161-0ad0-41b0-811d-70fe4115ee7d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGME3HV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8d3MCmcpbV1zzCnRdyT73CVj5%2BRfaerEz0tsWLMxPjAIhAOaYzTYcL8Fg3z3L5p4qi2lnCf%2FuWxE9iQXmvV5BI%2FuVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzIgijoRqaO0dxHx%2B0q3AP4DjpyiPbFosyb9XIE4FtXfDdx51QaUo%2Fh0Cz%2Bg35GhZQiRr4V%2FdeBBhNPPFEiDWYXMo5Gq4ryvPSaXutj5AjFUqO4wS%2BLRFiVI%2BP0ZehlLuCH5sDTnT4ysyEh8vqZGuT2DWz1fHw8kjolMWQpDBLH4jXk%2BzgwPruDY4P6A0FObW3hoE77hkhUOIBlNeERNdPUmv%2FVwuM%2FlwyCQN3oT7WzTSFnQNYynoiWi%2BpjA1Dm1fwOCm7bzmP36HcjQq0J8diX8wIC3vO4hBfhxnRaxSSMMQNs9xPBM1fhQYNr7%2BwkzgsX1TmKqZwnCXeKWFLr4IjNugHyfvaT1P6X81yNt4Z%2F1qVlPdqLqgA2nN19C%2BtO7NmKllang7KUNIebh4bMhld%2B7ul3YSg%2BR7x%2B2pu4eO%2FMRC4YOBc0a%2FmElR18blKThHeXcIYMJKIL2omF2O7U35eij79l45LShJm8TOBRoyauTmLSsxylauH%2BHSVUzDMUgsb8kOlXpLwnkHHQwl5JnMCVZf7Dy1LMfvLrh3Rx8NWSwuhggUw6l9eqS7SHVa4B%2BeQd%2BBLbHQZK5FaAzqB4cOnNxdWJsf45yJvVtMeE%2BrMw6MYYWiOUnRrLZQP8rU623Q3fyEtd%2FqwQMu9IjzCc9YfEBjqkAWVmNz135S%2B%2FYI6JvVzFS4dykPD%2BNu%2FxG5Z2k%2BoK3zUU60a9PgmXMB8h4Qv4RS1hGWyIIIQsIKeEvdadaQaoV16DV2diZ0uVsRRXX1pISDIl3q%2BMbuHXpc6aZ8j1yfq88yRVCg3S5bc70lX8P0Iq9k4ZBLlbrzc4irO3mUCWifKBLK1f8o4M18ElmB6lV4qq9DBmdjfaQmBFOXSCqvMoUcx5edu2&X-Amz-Signature=0467492e92140b6fb505b01cf0e087a25af03cdce72599a0d16d40540634c8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **시잇팔 버그발생! **
> > ```c#
> > Instructions: Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.
> > Query: NullReferenceException: Object reference not set to an instance of an object
> > Repostion.OnTriggerExit2D (UnityEngine.Collider2D collision) (at Assets/Scripts/Repositon.cs:21)
> > ```
> >
> > 이 버그가 발생되길래 21번째줄 가서 확인해보니 다음코드였다
> >
> > ```c#
> > Vector3 playerPos = GameManager.instance.player.transform.position;
> > ```
> >
> > 아니 public으로 설정도해뒀고 문제없는데 왜 자꾸 버그가 날까… 보아하니
> >
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ce410828-7a2e-46bf-ad90-3eea77d3a5ce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZLWLVF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGMuxye8ZEJ6mYAFjzVNrYyVhEIily2YUxBXa727LQnWAiEA6jsBdN6LiPOqK%2FZH%2BX140IeGWTv7sYSzlKNBA%2Bs7RO0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZkLFGkah%2BkhS1DTircA1o87%2B4rq9%2Fg0nZHkYwHJsnwtWSld51blZEC8Qg42gl%2ByfETU3X7CVQj37OVpTu949ZQ8VUcfRa9iy4EWpS0vzO1lrGLapc0Oy3dFL4tl1%2Bh%2FP%2FuJh3OKJOPYExgzOouJIzImConui52%2BVOdEgtaSu%2FESSQsoTbFqCqWHo5EpvYao6UbIMLUZofos3rc3THD9Rypuq2G%2F0uffy7%2FRAdU7K8pUeMFzWBtHPK75hFgkZdtslGWzsNOnCOrjiINMoH2L1cmqNp1uhlQY8S0tclRezCRIr1J9GIze5WiqAtEIUKgyKW8ffu9GJHPSUp1tnx5srGD8Wupy%2BmnwDj9CvHsE3sboYJ85egeHIy2oMiCZafDmOKIMZ2ad2XlMURsjXLaXKMeyshO%2Bm7Le9vP5zJ0nN5p4%2B1RYk2jDbKAX0UYUqj67lxDDdsLqUGc3aEMJZPiL1HYHphvEFw0ugXchCAF4JMjxAc2%2FMAXq%2BksaihxdSDfzyRUxsVWvM%2FsVVShYdM8xTzeQR0tlue08G%2Biv%2FqtWcpaRdWbGcCWlFkYnJUQiUcjeZjkQ01fGuAWXBwgyBwpkUVr0E4onsbZR2gdJcjVh2paqA1ChMj2NY1zyXOCdJQSLm9aOy30R0nqUiyqMP%2F0h8QGOqUBC7n2uvlBXD%2FWom4rfCMMSRpSMrodrxJcodhp7wEn8tOaARJ1Tjd0oamXmkiHiOijlyaVqYBbc5LOVzA5muOHABRevhM5zsoGV8kMZEKr4oSTP7CXl5nsBm%2B%2FXF97tm%2F%2FHmhzt%2Fduq%2FxA%2F%2B0UJx3KQUrVfZlfypNtteuTM81AJSEDNtPEO13pFCciAdUEFkF05962oUNYj9w4J2U5sMrK4sFQV90w&X-Amz-Signature=71920fdc75638466f2eb37b89beece2f54464c2815b987b6bccb0b41bdf83298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > 게임스타트를 투르면 GameManager에 설정해뒀던 Player가 날아가버린다.. 뭐야 이 버그
> >
> >
> > ## 답은 GameManager.cs에 있었다…
> >
> >
> > 코드가 Awake될때 인스턴트값에 자기 자신을 넣었어야 Player가 날아가지 않았다…
> >
> >
> > 기존에는 GetComponet를 사용해서 public함수에 직접 접근했었는데 뭐가 문제일까?
> >
> > ```c#
> > using System.Collections;
> > using System.Collections.Generic;
> > using UnityEngine;
> >
> > public class GameManager : MonoBehaviour
> > {
> >     //정적변수 static을 미리 설정해두면 즉시 클래스에서 부를 수 있다는 편리함이 있다
> >     public static GameManager instance;
> >     public Player player;
> >
> >     void Awake() 
> >     {
> >         **instance = this;**
> >         /*
> >         instance = GetComponent<GameManager>();
> >         player = GetComponent<Player>();
> >         */
> >     }
> > }
> > ```
> >
> >
>
>

> 🔥 **카메라를 설정해주자**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c4d1ee33-b885-4a0c-9bd7-637f1f3dfb2a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=0790640261f4ac59034772aa44cbf9165691da99b6591954d79def9234ebbc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 해상도가 짝수여야 다음 에러를 해결할 수 있다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/317b5dc4-72e5-404e-94f0-bf0336732256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=ba899c3886bfe5baf64d26b21b8e42a740f7aca64025a888b441da75bbd3b1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/ed5226b1-59cc-4a15-a1de-c08f83e8a0e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=8419f6e7a4d17367773e19d6d012bd65fa2e11acca6d6f0fbf1b400f7fbb512a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> ## 플레이어를 따라다니는 카메라를 구현해보자
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1c219ec-ab5f-4c75-bbe1-db46d156a112/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=a2e688fb583aa33bc7c0f0459e5d6ffce3f2b297c5b361d251fa137c7cc50c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/bb8844b0-c01d-4bfe-be28-5d14e87126c5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=e38426386e0df5811c37cbc9bd3807ccab792e3459adc5b124d5032bda74211c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> > 🔥 **Virtual Camera는 Main Camera의 감독역할을 하게된다**
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fb561c37-40b7-4bc3-b57c-8903478075ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=6c350c28d69d782722ea09c9a818e9cb3c49d2203694555d1f6c5c42c06faf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ### Virtual Camera : 야 MainCamera! Player를 따라다녀!
>
> 라는 의미…
>
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4fd4d0fb-b438-448a-8118-4c0db6ad1796/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MTLOSY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW5QlnApAhkxAJ1W2rQTV5O74CkW4TUXAwdqlQy2as2AiEA0s8smWW4RiOZEGwaZHS77BnBiov%2B9S8ki7y%2B%2BQa2H18q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMDXMIQQ4aDOLCOXOyrcAxPT%2FBYcrT0V17tcyoaB8%2FPsGZbUYQc%2BQns0YM2aMcgV%2ByXNtvmXSoylCI2Xy0BokRUk8DZJkDW5MzrFz%2F2tFGNQV0lkO1HMEgHr%2B%2BVjwLnUlFs7%2FJXS6p13SLglKFue4JYurVWvIujMvJglzAoOo2au52Exb%2BrAeRSnhLlUSFfnhAMMN1vi4MMl%2ByqJ%2FSnRllaHPyTd9tW8RInzoj0HPea2%2BOjeiLsDx%2FyyMJC6ixaZmnHINMYaRdwzrS8kkTuateEz9rn1j1Vb2vte1uAJS0d%2B3DOvu0KMj5C%2B1MG%2B3Sl9PNNM3F7XDjJNgNTmRooUKToQrMm6mKqv7f5v%2FKmo%2BCDybK0NpRhVpqm%2BXrwVFiiYbQruRnrVdNSltcn4rQliJbKPRCdBQ7TEdqLV2hKmvOBc3lBzPHusEfwFKgANOmd8TXD8Xbj5nhjv0nROAAMzMnhrEM9okQNhiy%2BDzlnUV0KynOv38pfAxODTFiYzL%2BXAppi5IOp9DLC3VKggzZ1dzRJkut8ybCGqvYf5oIM46sEG6n0lx%2BxT4gmreQbRhNzeEJbbf9F4%2BhQvtZkjtqGohT6K8ZCoVtSOPL%2Bn3F6IrHA7WloeWfFMW7TbGYlapaT0yQYDfadO0%2FaU%2BeDVMJT2h8QGOqUBHeuH0al7G27XwuJHiG34jl5uXyoqIu6hM6UBnTE7D9KBcY%2Fsu%2BE9BeyN7qimtXLhwSsIYT%2FQzY2KYZSuGH%2FqNPTCkCYY100VYKbenuy34WAaLDSFOE0Ss%2F%2FEnIzHLGL7NBNZZZoh1jQ167h0kbcShvuQxVBdLvqs2anzkqLxMQHQLD75f1k5yzWkD9Ejqc3AwqOTu%2Fd7bMyGhfkUzMBduOQfsfhs&X-Amz-Signature=1e81dbdd3f101dc59242e5890343e704efd32015d8ad718a5af9a0d5f1787c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


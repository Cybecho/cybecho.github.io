---
title: "JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다"
date: 2025-03-15T04:16:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "SSH 터널링의 복잡성을 해결하기 위해 Jump Tunnel이라는 GUI 프로그램을 개발하였습니다. 이 프로그램은 Bastion Host를 통해 내부망을 보호하고, ProxyJump 기능으로 여러 서버에 간편하게 접근할 수 있도록 하며, 하나의 마스터 키와 계정을 사용하여 관리 효율성을 높입니다. 사용자는 간단한 입력만으로 SSH 설정을 자동화할 수 있습니다."
notion_id: "1b71bab9-e3f8-8022-849f-ce52c62d729e"
notion_url: "https://www.notion.so/JUMP-TUNNEL-ssh-1b71bab9e3f88022849fce52c62d729e"
---

# JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다

> **Summary**
> SSH 터널링의 복잡성을 해결하기 위해 Jump Tunnel이라는 GUI 프로그램을 개발하였습니다. 이 프로그램은 Bastion Host를 통해 내부망을 보호하고, ProxyJump 기능으로 여러 서버에 간편하게 접근할 수 있도록 하며, 하나의 마스터 키와 계정을 사용하여 관리 효율성을 높입니다. 사용자는 간단한 입력만으로 SSH 설정을 자동화할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e10ce4e7-a037-4d6f-a0e7-d748f14679a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEGMDHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIB%2B2Fry07eBEJv%2F01TGQmXnbuUFXgiv8vyfjop7Ufmg%2FAiAMpWo%2FIabV%2B6QVFjpckzbNdmGLkkagYISuSVBD4plw1yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMu7aDa11odc4k3XAVKtwDIpH0ZAYgSe%2Be7zMzTg%2FDIjsgAmk7rkMdKJGAkOW0sJCOCTPLlBwbAcD9AKC8b4aEUHiUZIT6kLzKTYy3w1DxHXDBSE01GjdaPBrMOgolf06J0%2FavqfmuT5tA44Ji7V%2BZmWuaMUbIh7%2FtnkU1EB3CN40X2DjFlMwVa%2BU66cgBbEaovdGEgIUPybf6EBhYnAI88MYMRSJYcE31rLWqdMcvmlzWvwnVSXLSwxQkiQ0j0vzdYiGqp4BrVMDW82lFx6uWI9bWgTT%2B9lL2YDlHmPEoBzr5JVPmZ5ayUYEOo9ZTQGUtVUjOeAAHIAZNe3PqVBZmkB3Yxdsz%2BICch0%2FZNIra5jpZOtxGaWF3WL2%2FyLQypvbJbsIFp1p%2BcAxy0sT2hK4qZobv5SpugMGYZYu447je0jp0Qvx8JD7G1Q%2B5utfvWnQlFe%2F%2FIc8ktvC%2Ba25KmGa3ugl4BVClmN1E3R9M48QTAg%2FrgfygBul0I1j2%2BsCuAHODpE%2FCvtjmeSPQkgtnsgGcRhd4P7fp%2Byo0ZLs9TGCpns0O65OV7M%2BBeGHLRSktVzqAo9WlV4OZ2a7xhiQ51fiuo6gNRyzi9exRmKW%2Fov%2FhF6shWJUVdra2LWu9L0maqU%2FY0y6DDXBOlyAOtM4w4PaHxAY6pgEfF3xIMRhXHB6iHWjDi1id03wuFhUAMv4tTTEmFELq62HdUl0RED6JTP2QyUsq0qkNEpD1crOAbotdPLpo2G2p4%2FhmFel7TMhTSFAELSpixEGFTiZDcFsoO%2FCBQL9rs6lyGuPOYhiQx%2BKDo4m1Knk2fgsVpKrLS2xeOu86OkQ8d%2FBi9BvXWAQmbX2uSkaxFGVzAMiJY8X5XUIwY%2FUluNzXp42Yy7Kr&X-Amz-Signature=a0a5860d7733fb1f0ed5c4d36a43e6ed786834c03a04a2747b427319ce9f31ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://github.com/Cybecho/JumpTunnel](https://github.com/Cybecho/JumpTunnel)

# 4.5

# o1

# Grok3



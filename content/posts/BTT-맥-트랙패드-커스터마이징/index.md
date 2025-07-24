---
title: "BTT - 맥 트랙패드 커스터마이징"
date: 2024-01-21T02:41:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "맥북 사용자에게 필수적인 앱인 BetterTouchTool에 대한 소개와 커스터마이징 기능을 강조합니다."
notion_id: "22c5f0a7-5ace-4e5e-91ca-0f7d474930a2"
notion_url: "https://www.notion.so/BTT-22c5f0a75ace4e5e91ca0f7d474930a2"
---

# BTT - 맥 트랙패드 커스터마이징

> **Summary**
> 맥북 사용자에게 필수적인 앱인 BetterTouchTool에 대한 소개와 커스터마이징 기능을 강조합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8d83f2d5-e05a-4e0b-8ee1-2eed30874266/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJB6TZ4P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCID1sSFIa%2FXxg2eVvnX5G86Jw%2BBfGl3q%2FL8I2onQs11inAiAyhFzVcnSXv7nIs%2FPZCphWVBzCvmYMm1P0p3ThyDxUTSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMyz9XnFYMJD4gatFOKtwDbdW1B6pYGsBrhsPtKBY5nN1l7XOpkbD8rUNOeUFWqmDNUylWLT32Kb72TtsImL1RFpo0yen9OOfxHWCMeqeCEMn7SFSz1iKs9vchz2mwBmnVXkb2OzhDJyPteIYiLr%2Bfl2Xm1buFQCPSKL973eo6vmmNLV%2Fl7YPwHDS26k4egjDxfz1yuGIiPQEvqYXcsRj7SNWrkQBFxACVRhrXLar%2BnfNzy1HBYfVFt9FN3MA9%2FnEonbDImjsOye6XBYcTpB%2FNHcjqalSPOCXqlYvqbMWSSsLbzbrdOZmNjeHoAfcdQMRq0768T5NnG3YA5dr3iXTNnEKBw3oBJeVdEnIGXUyiFm3THCA686h%2BtsGh9XDHYt9jWsoxlHM7EbEkoDzlRwtb%2BFuGsDmbhWFnj4%2F64riWBu4cO3T30f%2BMT3NXc%2BgfOH7dk%2F3dw12wq1%2BE3sIVBGX0k7aT2o15XEugX%2BcI4w6r9LMqoZ7XPQqz1Ab3JFjt%2Bh%2FPRh9MlbynfR50R72XV3nbAZavshIKTMjxS43jFqpoHGHFfzmppKTu9WL6TphXMfu6ZZo8rfCdZ47NmVW%2FlAvY6F87I3EJE4KVhpXphaEsN6%2BxwbXYl57K1%2Bzy%2F571%2BHWDmVIOIshujxKAj98wnc%2BHxAY6pgEp3cSGehGsRpBdx48GfYqZraVluxhyoYHv0rSwhDWiIpcTAqibE9XaovZxEFJ9fet4Rt%2BfP5upQDTpso8cDOfjFKjUFCjl8ObxSQPTRtGVCCk1Srd7ElljQ3ANx%2B4O2nlLI5emcVSYB99yRqd%2F%2FkBIW3xghtsBzC5vT4xr1y7OhA65S36%2FIy%2Fp37xk5nbJIBYGmrg5lN55kBKffPf1P9huLt7%2BHbrR&X-Amz-Signature=89202b9ca918f26a72fea5ebc7fa6984ec21a9253125daa8b756898b17ed3829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://allgg.tistory.com/29](https://allgg.tistory.com/29)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9b9b6b94-4bab-4c22-a7ab-a424005eaa23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJB6TZ4P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCID1sSFIa%2FXxg2eVvnX5G86Jw%2BBfGl3q%2FL8I2onQs11inAiAyhFzVcnSXv7nIs%2FPZCphWVBzCvmYMm1P0p3ThyDxUTSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMyz9XnFYMJD4gatFOKtwDbdW1B6pYGsBrhsPtKBY5nN1l7XOpkbD8rUNOeUFWqmDNUylWLT32Kb72TtsImL1RFpo0yen9OOfxHWCMeqeCEMn7SFSz1iKs9vchz2mwBmnVXkb2OzhDJyPteIYiLr%2Bfl2Xm1buFQCPSKL973eo6vmmNLV%2Fl7YPwHDS26k4egjDxfz1yuGIiPQEvqYXcsRj7SNWrkQBFxACVRhrXLar%2BnfNzy1HBYfVFt9FN3MA9%2FnEonbDImjsOye6XBYcTpB%2FNHcjqalSPOCXqlYvqbMWSSsLbzbrdOZmNjeHoAfcdQMRq0768T5NnG3YA5dr3iXTNnEKBw3oBJeVdEnIGXUyiFm3THCA686h%2BtsGh9XDHYt9jWsoxlHM7EbEkoDzlRwtb%2BFuGsDmbhWFnj4%2F64riWBu4cO3T30f%2BMT3NXc%2BgfOH7dk%2F3dw12wq1%2BE3sIVBGX0k7aT2o15XEugX%2BcI4w6r9LMqoZ7XPQqz1Ab3JFjt%2Bh%2FPRh9MlbynfR50R72XV3nbAZavshIKTMjxS43jFqpoHGHFfzmppKTu9WL6TphXMfu6ZZo8rfCdZ47NmVW%2FlAvY6F87I3EJE4KVhpXphaEsN6%2BxwbXYl57K1%2Bzy%2F571%2BHWDmVIOIshujxKAj98wnc%2BHxAY6pgEp3cSGehGsRpBdx48GfYqZraVluxhyoYHv0rSwhDWiIpcTAqibE9XaovZxEFJ9fet4Rt%2BfP5upQDTpso8cDOfjFKjUFCjl8ObxSQPTRtGVCCk1Srd7ElljQ3ANx%2B4O2nlLI5emcVSYB99yRqd%2F%2FkBIW3xghtsBzC5vT4xr1y7OhA65S36%2FIy%2Fp37xk5nbJIBYGmrg5lN55kBKffPf1P9huLt7%2BHbrR&X-Amz-Signature=d704de6c30844546f4f5013a4853ab0f5859c1135fefc2af7bd42556ab0b2447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


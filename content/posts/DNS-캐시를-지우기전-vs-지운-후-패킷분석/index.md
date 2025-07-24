---
title: "DNS 캐시를 지우기전 vs 지운 후 패킷분석"
date: 2025-02-27T09:31:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "DNS 캐시가 있을 때와 없을 때의 패킷 분석을 통해, 캐시가 있는 경우 DNS 서버가 직접 응답하고, 캐시를 지우면 다른 DNS 서버에 요청을 보내는 과정을 설명합니다. 실습에서는 public DNS와 private DNS 간의 요청 및 응답 흐름을 분석하며, 캐시가 DNS 요청에 미치는 영향을 강조합니다."
notion_id: "1a71bab9-e3f8-807f-ba7c-f36368903ced"
notion_url: "https://www.notion.so/DNS-vs-1a71bab9e3f8807fba7cf36368903ced"
---

# DNS 캐시를 지우기전 vs 지운 후 패킷분석

> **Summary**
> DNS 캐시가 있을 때와 없을 때의 패킷 분석을 통해, 캐시가 있는 경우 DNS 서버가 직접 응답하고, 캐시를 지우면 다른 DNS 서버에 요청을 보내는 과정을 설명합니다. 실습에서는 public DNS와 private DNS 간의 요청 및 응답 흐름을 분석하며, 캐시가 DNS 요청에 미치는 영향을 강조합니다.

---

 

> 💡 **[Untitled](https://www.notion.so/1a71bab9e3f880fb9b9fc22d32de0e67) **

해당 실습에서, private DNS 와 public DNS 를 구분하여 publicDNS영역에 있는 주소를 요청했더니, private DNS로 요청이 전달되는게 아니라, public DNS에서 바로 주소를 반환하는것을 확인하였다.

처음에는 캐시를 인지하지 못하고, 이거왜이럼? 했는데, public DNS측의 캐시때문이었다는것을 깨닫고, 그와 관련된 내용을 정리한 내용이다.


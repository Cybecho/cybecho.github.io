---
title: "DNS 캐시를 지우기전 vs 지운 후 패킷분석"
date: 2025-02-27T09:31:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "DNS 캐시의 영향을 분석한 실습에서는, 캐시가 있을 때는 DNS 서버가 저장된 정보를 직접 제공하여 다른 DNS 서버에 요청하지 않고, 캐시를 지운 후에는 요청을 다른 DNS 서버에 전달하는 과정을 확인했다. 이를 통해 DNS 요청과 HTTP 요청의 흐름을 이해하고, 캐시의 유무가 DNS 조회에 미치는 영향을 정리하였다."
notion_id: "1a71bab9-e3f8-807f-ba7c-f36368903ced"
notion_url: "https://www.notion.so/DNS-vs-1a71bab9e3f8807fba7cf36368903ced"
---

# DNS 캐시를 지우기전 vs 지운 후 패킷분석

> **Summary**
> DNS 캐시의 영향을 분석한 실습에서는, 캐시가 있을 때는 DNS 서버가 저장된 정보를 직접 제공하여 다른 DNS 서버에 요청하지 않고, 캐시를 지운 후에는 요청을 다른 DNS 서버에 전달하는 과정을 확인했다. 이를 통해 DNS 요청과 HTTP 요청의 흐름을 이해하고, 캐시의 유무가 DNS 조회에 미치는 영향을 정리하였다.

---

 

> 💡 **[Untitled](https://www.notion.so/1a71bab9e3f880fb9b9fc22d32de0e67) **

해당 실습에서, private DNS 와 public DNS 를 구분하여 publicDNS영역에 있는 주소를 요청했더니, private DNS로 요청이 전달되는게 아니라, public DNS에서 바로 주소를 반환하는것을 확인하였다.

처음에는 캐시를 인지하지 못하고, 이거왜이럼? 했는데, public DNS측의 캐시때문이었다는것을 깨닫고, 그와 관련된 내용을 정리한 내용이다.


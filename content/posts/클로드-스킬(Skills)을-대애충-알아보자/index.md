---
title: "클로드 스킬(Skills)을 대애충 알아보자"
date: 2025-10-21T00:28:00.000Z
draft: false
tags: ["AI", "Claude"]
series: ["AI"]
description: "클로드의 '스킬' 업데이트는 AI를 강력한 워크플로 도구로 변모시키며, 사용자가 반복적인 프롬프트 입력 없이도 일관된 결과물을 생성할 수 있도록 돕는다. 클로드는 다양한 스킬을 통해 PPT, PDF 등 문서를 자동으로 생성하고, 사용자가 직접 커스텀 스킬을 만들 수 있으며, 여러 스킬을 조합해 복잡한 작업을 수행할 수 있다. 이 업데이트는 클로드를 엔터프라이즈 환경에서 효율적으로 사용할 수 있게 한다."
notion_id: "2931bab9-e3f8-8009-9a8c-f666031c9e87"
notion_url: "https://www.notion.so/Skills-2931bab9e3f880099a8cf666031c9e87"
---

# 클로드 스킬(Skills)을 대애충 알아보자

> **Summary**
> 클로드의 '스킬' 업데이트는 AI를 강력한 워크플로 도구로 변모시키며, 사용자가 반복적인 프롬프트 입력 없이도 일관된 결과물을 생성할 수 있도록 돕는다. 클로드는 다양한 스킬을 통해 PPT, PDF 등 문서를 자동으로 생성하고, 사용자가 직접 커스텀 스킬을 만들 수 있으며, 여러 스킬을 조합해 복잡한 작업을 수행할 수 있다. 이 업데이트는 클로드를 엔터프라이즈 환경에서 효율적으로 사용할 수 있게 한다.

---

## 클로드 스킬(Skills) : Claude가 워크플로 도구가 되다

[https://youtu.be/vqLONWXfMsI?si=5Rf5G8EM6hJs03fG](https://youtu.be/vqLONWXfMsI?si=5Rf5G8EM6hJs03fG)

최근 클로드(Claude)에 '스킬(Skills)'이라는 주목할 만한 업데이트가 있었습니다. 이 기능을 장시간 사용해 본 결과, 이는 단순한 기능 추가가 아니라 클로드를 강력한 '워크플로 도구'로 변모시키는 핵심적인 변화라고 결론 내릴 수 있습니다. [[00:08](http://www.youtube.com/watch?v=vqLONWXfMsI&t=8)]

기존 AI 챗봇을 사용하면서 매번 같은 프롬프트를 반복적으로 입력하고, 사소한 지시어 차이로 결과물의 일관성이 떨어져 불편함을 겪은 분들이 많을 것입니다. [[00:16](http://www.youtube.com/watch?v=vqLONWXfMsI&t=16)] 이런 문제를 해결하기 위해 N8N, 구글 오팔, 오픈AI의 에이전트 빌더 등 다양한 AI 워크플로 도구들이 등장했습니다. [[00:33](http://www.youtube.com/watch?v=vqLONWXfMsI&t=33)] 하지만 이번 클로드 스킬은 이들, 특히 N8N을 대체할 수도 있겠다는 생각이 들 정도로 강력한 가능성을 보여주었습니다. [[00:50](http://www.youtube.com/watch?v=vqLONWXfMsI&t=50)]

### 클로드 스킬이란 무엇인가?

워크플로는 단순한 함수 연결에서 지능형 에이전트가 포함된 형태로 발전해왔습니다. 클로드 스킬은 여기서 한 단계 더 나아간 개념입니다. [[01:00](http://www.youtube.com/watch?v=vqLONWXfMsI&t=60)]

이제는 전체 워크플로 실행 과정이 클로드의 컨텍스트 안에서 관리되며, '스킬'이라는 개별 함수가 추론 과정에서 도구처럼 호출됩니다. [[01:17](http://www.youtube.com/watch?v=vqLONWXfMsI&t=77)] 즉, 클로드 자체가 코딩, 데이터 수집, 문서화, 외부 API 호출 등 정해진 순서에 맞는 작업들을 수행하는 워크플로 서비스가 되는 것입니다. [[01:26](http://www.youtube.com/watch?v=vqLONWXfMsI&t=86)] 이러한 워크플로가 채팅이라는 대화형 인터페이스에 자연스럽게 통합된 것이 핵심입니다. [[01:34](http://www.youtube.com/watch?v=vqLONWXfMsI&t=94)]

### 클로드 스킬 활성화 및 기본 사용법

클로드 스킬은 데스크톱, 웹, 모바일, 그리고 클로드 코드(Code) 버전 모두에서 사용할 수 있습니다. [[01:51](http://www.youtube.com/watch?v=vqLONWXfMsI&t=111)]

1. **활성화**: 설정 메뉴 > 기능(Features) > 스킬(Skills) 섹션으로 이동합니다.
1. **기본 스킬**: 이곳에서 앤트로픽(Anthropic)이 미리 만들어 둔 '슬랙 GIF 크리에이터' 같은 기본 스킬을 활성화할 수 있습니다. [[02:21](http://www.youtube.com/watch?v=vqLONWXfMsI&t=141)]
1. **추가 스킬**: 앤트로픽 스킬 깃허브(GitHub) 저장소에는 목록에 보이지 않는 '도큐먼트 스킬'(Docs, PDF, PPT, Excel 등)도 공개되어 있습니다. [[02:42](http://www.youtube.com/watch?v=vqLONWXfMsI&t=162)]
클로드에게 "사용할 수 있는 스킬이 무엇이야?"라고 질문하면, 현재 활성화된 스킬 목록을 보여줍니다. [[03:05](http://www.youtube.com/watch?v=vqLONWXfMsI&t=185)]

### 활용 사례 1: 스킬을 이용한 PPT 제작

스킬의 강력함을 확인하기 위해, 공식 문서를 기반으로 PPT를 제작해 보았습니다. [[04:10](http://www.youtube.com/watch?v=vqLONWXfMsI&t=250)]

- **작동 방식**: 클로드는 작업을 요청받으면 관련 스킬 문서를 확인합니다. [[04:31](http://www.youtube.com/watch?v=vqLONWXfMsI&t=271)] 이 `skills.md` 파일 안에는 PPT의 디자인 가이드, 테마 색상, 구조 등 세부적인 스펙이 모두 정의되어 있습니다. [[05:08](http://www.youtube.com/watch?v=vqLONWXfMsI&t=308)]
- **결과**: 사용자가 매번 "글자 크기는 16pt, 색상은 보라색 계열로..."와 같이 세세하게 지시하지 않아도, 클로드는 스킬 문서에 정의된 규칙에 따라 항상 일관되고 높은 품질의 PPT를 생성합니다. [[05:17](http://www.youtube.com/watch?v=vqLONWXfMsI&t=317)] [[07:53](http://www.youtube.com/watch?v=vqLONWXfMsI&t=473)]
- **품질**: 스킬 도입 이후 클로드의 문서 생성 품질은 다른 플랫폼을 압도할 정도로 크게 향상되었습니다. [[08:15](http://www.youtube.com/watch?v=vqLONWXfMsI&t=495)]
이어서 PDF 생성을 요청했을 때도, 매우 단순한 프롬프트만으로 스펙에 정의된 대로 고품질의 PDF가 완성되었습니다. [[10:26](http://www.youtube.com/watch?v=vqLONWXfMsI&t=626)] 이제 PPT, PDF, 엑셀 등 문서 작업은 클로드에서 처리하는 것이 효율적일 것입니다. [[10:40](http://www.youtube.com/watch?v=vqLONWXfMsI&t=640)]

### 활용 사례 2: 커스텀 스킬 제작 (BigQuery 분석)

클로드 스킬은 사용자가 직접 만들어 등록할 수도 있습니다. [[11:15](http://www.youtube.com/watch?v=vqLONWXfMsI&t=675)]

'설정 > 기능 > 스킬 업로드'를 통해 ZIP 파일로 압축된 스킬을 등록할 수 있습니다. [[11:26](http://www.youtube.com/watch?v=vqLONWXfMsI&t=686)] 영상에서는 빅쿼리(BigQuery) 데이터를 분석해 보고서를 만드는 커스텀 스킬을 시연했습니다. [[11:37](http://www.youtube.com/watch?v=vqLONWXfMsI&t=697)]

이 커스텀 스킬의 `skills.md` 파일에는 다음과 같은 정보가 정의되어 있습니다. [[12:47](http://www.youtube.com/watch?v=vqLONWXfMsI&t=767)]

- 프로젝트명, 데이터셋 정보
- 테이블별 상세 설명
- 데이터 조회 시 항상 적용해야 할 필터 규칙 (예: 특정 정보 제외) [[13:11](http://www.youtube.com/watch?v=vqLONWXfMsI&t=791)]
- 자주 사용하는 쿼리 템플릿 예시 [[13:30](http://www.youtube.com/watch?v=vqLONWXfMsI&t=810)]
이렇게 스킬로 기준을 정해두면, 누가 요청하든 항상 동일한 기준의 데이터 분석과 보고서 작성이 가능해집니다. [[13:40](http://www.youtube.com/watch?v=vqLONWXfMsI&t=820)]

### 활용 사례 3: 스킬 조합으로 워크플로 실행 (BigQuery + PPT + PDF)

클로드 스킬의 진가는 여러 스킬을 조합할 때 나타납니다.

"2023년 7월부터의 매출, 고객, API 사용량 등 성장 스토리를 투자자용 PPT와 PDF로 만들어 줘"라고 요청했습니다. [[14:09](http://www.youtube.com/watch?v=vqLONWXfMsI&t=849)]

1. **스킬 자동 선택**: 클로드는 이 요청을 분석하고, '빅쿼리 분석 스킬'이 필요하다고 스스로 판단하여 해당 스킬을 실행합니다. [[14:44](http://www.youtube.com/watch?v=vqLONWXfMsI&t=884)]
1. **문제 발생 (MCP 연동)**: 하지만 클로드의 샌드박스 환경은 보안상 외부 API(빅쿼리) 접근이 막혀있습니다. [[15:06](http://www.youtube.com/watch?v=vqLONWXfMsI&t=906)]
1. **해결**: 이때 외부 시스템과 연결을 특화하는 'MCP'를 추가합니다. [[15:26](http://www.youtube.com/watch?v=vqLONWXfMsI&t=926)] 스킬과 MCP는 함께 작동할 수 있습니다. **스킬이 '무엇을 할지'(SQL 쿼리 템플릿, 규칙)를 정의**하고, **MCP가 '어떻게 연결할지'(외부 API 통신)를 담당**합니다. [[16:17](http://www.youtube.com/watch?v=vqLONWXfMsI&t=977)]
1. **워크플로 실행**: MCP를 통해 빅쿼리 데이터를 가져온 클로드는, 이어서 'PPT 제작 스킬'을 실행하고, 마지막으로 'PDF 변환 스킬'을 순차적으로 실행하여 최종 결과물을 모두 만들어냈습니다. [[16:31](http://www.youtube.com/watch?v=vqLONWXfMsI&t=991)] [[18:04](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1084)]
이것이 바로 클로드가 워크플로 도구로 작동하는 방식입니다.

### 스킬(Skills) vs MCPs vs 서브 에이전트

클로드에는 스킬 외에도 MCP, 서브 에이전트(프로젝트)라는 유사한 개념이 있어 혼동될 수 있습니다. 각 역할은 다음과 같이 명확히 구분됩니다. [[24:23](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1463)]

- **MCP (External Tools)**: 외부 시스템(API, 데이터베이스 등)과의 '연결'에 특화되어 있습니다. [[24:23](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1463)]
- **서브 에이전트 (Projects)**: 병렬 작업이나 컨텍스트 절약, 혹은 '데이터 분석가'와 같은 특정 페르소나를 정의하는 복잡한 전담 역할에 사용됩니다. [[24:34](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1474)]
- **스킬 (Skills)**: 작업의 '표준운영절차(SOP)'입니다. [[25:20](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1520)] "어떻게 행동해야 하는지"에 대한 회사의 매뉴얼이나 가이드라인이며, 결과물의 일관성을 보장하는 규칙 그 자체입니다.
이 세 가지는 결합해서 사용할 수 있습니다. [[25:42](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1542)] 예를 들어, 빅쿼리 MCP로 데이터를 '조회'하고, 스킬에 정의된 SQL 템플릿으로 '규칙'을 따르며, 데이터 분석 서브 에이전트가 최종 '분석 및 요약'을 담당하는 식입니다. [[26:03](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1563)]

### 최종 시연: N8N 워크플로 대체하기

영상에서는 N8N 워크플로(유튜브 URL 입력 > 자막 추출 > 요약 > 디스코드로 전송)를 클로드 스킬로 대체하는 시연을 진행했습니다. [[18:59](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1139)]

'스킬 크리에이터' 스킬을 이용해 다음 4개의 스킬을 빠르게 제작했습니다. [[22:00](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1320)]

1. 유튜브 정보 불러오기 스킬 [[28:34](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1714)]
1. 유튜브 자막 추출 스킬 [[29:28](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1768)]
1. 텍스트 요약 스킬 (별도 가이드 파일 참조) [[30:12](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1812)]
1. 디스코드 메시지 전송 스킬 [[31:39](http://www.youtube.com/watch?v=vqLONWXfMsI&t=1899)]
이후, "이 동영상 상세 정보와 자막을 추출해서 요약하고, 디스코드로 전송해 줘"라는 단 하나의 프롬프트를 입력했습니다. [[33:33](http://www.youtube.com/watch?v=vqLONWXfMsI&t=2013)] 클로드는 4개의 스킬을 순차적으로 완벽하게 실행했으며, 스킬 가이드에 정의된 형식 그대로 요약된 내용이 디스코드 채널에 도착했습니다. [[34:35](http://www.youtube.com/watch?v=vqLONWXfMsI&t=2075)]

### 결론

클로드 스킬은 단순히 프롬프트를 줄여주는 편의 기능이 아닙니다. 이는 클로드를 엔터프라이즈 환경에서 사용할 수 있는 강력한 워크플로 도구로 격상시키는 중요한 업데이트입니다. [[35:36](http://www.youtube.com/watch?v=vqLONWXfMsI&t=2136)]

자동화를 위한 자동화가 아니라, 회사의 업무 매뉴얼(SOP)을 '스킬'이라는 단위로 점진적으로 쌓아 올리고, 나중에 에이전트가 이 스킬들을 조합하여 복잡한 작업을 일관되게 처리하도록 만드는 것. [36:26] 이것이 클로드 스킬이 지향하는 방향성입니다.


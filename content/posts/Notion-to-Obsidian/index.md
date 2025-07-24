---
title: "Notion to Obsidian"
date: 2023-09-18T00:00:00.000Z
draft: false
tags: ["obsidian"]
series: ["Tips"]
description: "Obsidian으로 Notion 데이터를 쉽게 마이그레이션할 수 있는 방법을 설명합니다. Notion에서 HTML 형식으로 데이터를 내보내고, Obsidian에서 Importer 플러그인을 설치하여 가져오는 과정이 포함되어 있습니다. 모든 Notion 데이터를 한 번에 가져오는 것이 내부 링크 조정을 위해 권장됩니다."
notion_id: "01ad5251-f7ea-4ee2-bc28-0ba9ffe07ec1"
notion_url: "https://www.notion.so/Notion-to-Obsidian-01ad5251f7ea4ee2bc280ba9ffe07ec1"
---

# Notion to Obsidian

> **Summary**
> Obsidian으로 Notion 데이터를 쉽게 마이그레이션할 수 있는 방법을 설명합니다. Notion에서 HTML 형식으로 데이터를 내보내고, Obsidian에서 Importer 플러그인을 설치하여 가져오는 과정이 포함되어 있습니다. 모든 Notion 데이터를 한 번에 가져오는 것이 내부 링크 조정을 위해 권장됩니다.

---


![Image](https://obsidian.md/images/2023-06-logo.png)

🔗 [https://help.obsidian.md/import/notion](https://help.obsidian.md/import/notion)

[Obsidian을 사용하면 Importer 플러그인을](https://help.obsidian.md/Plugins/Importer) 사용하여 Notion에서 노트를 쉽게 마이그레이션할 수 있습니다 .

## Notion에서 데이터 내보내기

Obsidian은 Notion의 HTML 내보내기 형식을 사용합니다. [Notion 웹사이트에서](https://www.notion.so/help/export-your-content) 전체 작업 공간을 내보내는 방법에 대한 Notions 지침을 찾을 수 있습니다 . 이 옵션을 보려면 워크스페이스 관리자여야 합니다.

1. 왼쪽 사이드바 상단에 있는 **설정 및 회원** 으로 이동하세요 .
2. 해당 창의 사이드바에서 **설정을** 선택합니다 .
3. 아래로 스크롤하여 **모든 작업공간 콘텐츠 내보내기** 버튼을 클릭하세요.
4. **내보내기 형식** 에서 **HTML을** 선택합니다 .
5. `.zip`이메일을 통해 또는 브라우저에서 직접 파일을 받게 됩니다 .

![Image](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/notion-export.png)

## Notion 데이터를 Obsidian으로 가져오기

여기에서 설치할 수 있는 공식 Obsidian [Importer](https://help.obsidian.md/Plugins/Importer) 플러그인이 필요합니다 .

1. **설정 을** 엽니다 .
2. **커뮤니티 플러그인** 으로 이동하여 Importer를 설치 하세요 .
3. Importer 플러그인을 활성화합니다.
4. 명령 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 엽니다 .
5. **파일 형식** 에서 **Notion (.zip)을** 선택하세요.
6. `.zip`가져오려는 Notion 파일이 포함된 파일을 선택하세요 . *내부 링크가 올바르게 조정될 수 있도록 모든 Notion을 한 번에 가져오는 것이 좋습니다.*
7. 선택적으로 가져올 폴더를 선택하세요. Notion 페이지와 데이터베이스가 이 폴더 안에 중첩됩니다.
8. **가져오기를** 클릭 하고 가져오기가 완료될 때까지 기다립니다.
9. 이제 끝났습니다!


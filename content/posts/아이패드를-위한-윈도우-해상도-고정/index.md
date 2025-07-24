---
title: "아이패드를 위한 윈도우 해상도 고정"
date: 2023-02-14T00:00:00.000Z
draft: false
tags: ["Util"]
series: ["Don't Hate Windows!", "원격 라이프!"]
description: "레지스트리를 수정하여 아이패드의 해상도를 고정하는 방법에 대한 안내로, M1 아이패드의 해상도는 2388 x 1668이며, 특정 레지스트리 경로에서 관련 설정을 변경해야 합니다."
notion_id: "739bb756-c8a3-4876-8b5e-8be55cc2f1c9"
notion_url: "https://www.notion.so/739bb756c8a348768b5e8be55cc2f1c9"
---

# 아이패드를 위한 윈도우 해상도 고정

> **Summary**
> 레지스트리를 수정하여 아이패드의 해상도를 고정하는 방법에 대한 안내로, M1 아이패드의 해상도는 2388 x 1668이며, 특정 레지스트리 경로에서 관련 설정을 변경해야 합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b7623eea-09e2-4614-b139-d8ffeaa13cf0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2SDNEK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDILR4s0DacbaOkcMDqrm1d3LDhMooCJW%2B%2FU4I%2BPjDRgwIgElbbGyiHtKic4FqjT8mDKTuVOQQyJd%2B3dEUA27SmFd4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHLqw39KYp5jBuOStyrcA1R%2B9nR7boEfe1JSmN2M0nOF0zk8pHBb2b7toC8HzAsVr4zkgWzW307QjtII8Evgw3pVGSIYakb%2FkubCIF5g7JJQk3N8%2FPTMRUZacPZYBzPtibWOCedg73Aghs%2F5weUxL81uLCSWVBVeWGwWXS%2F6umuwNCs3GnFw4%2BcoFTUmOdAJ3anB%2Bo8Kykg89AA4VhgUYo%2FVS%2FcEN3y3S4V6fBHHTu8Zv%2FvnAz4Ccm587DttIjH83QuVNyXi7cbVVTDehfmCFucSNoYW4ryFNgBY8baWH1DLJEYKH4mEY5GDP1BDJNtwqi69WCRv%2Ftsq5%2B1PnmI8G5L68ska5V4QwnZrxtiSD9KPMXlGzT8qzgcPbyXD1ul44OqOTQ00fG7ZVp06stYj2tnVM26zLra5kyq7mocPVR3uhG1ThKWRiI0rSMel19Clq92z3CyOhw2XsN07ZXEQ%2B3S6JbsnR67QroX0Mc5PQD48GQiDkYdDJ5etP00Wdz9Rcs6cX231aAMOG0VkcbleNOKqqOdrk3dcirYmS3X9fIVBJSLaEG87gun%2FxATC5O3IlxP0uRHzktmqCHLAJYIzmVZ%2FsKIGZrSelfWUHrLevpb4zJFKibfjF97jSw6oEWCs317xThlRnFHTGjtAMMHPh8QGOqUB%2FdZdbf5S1m%2BedPdGs0Qkgukdz1f%2FjkQJYhsLpZ1bfRM4bjGfpVBYmtqfsPTAL%2FtFXix%2FgNSz%2B%2B%2BZleKv8mtrdGvmZGyev7xsOrQwLZc8R%2BWtc1mdFVe7pQWcgIvaIezsb6aGrz8ibxQlFsyCkXfcLftl%2BkEFTIujLdPP7YF8KHdN%2Bwgio28UFi4rp0NzvubL8GIiKql2lreiYGnCCp6vyXaagy%2F6&X-Amz-Signature=4e5a5b35724e44d9d8aeb3f7ee3ef6fd607b5b3e9f7c43a6e41c4782f958208e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://zkim0115.tistory.com/2570](https://zkim0115.tistory.com/2570)

> 💻 **레지스트리로 이동 후**

> 💻 **해당 디렉토리 최하단에존재하는 폴더안에 ‘00’ 폴더에 해상도관련 레지스트리 전부 변경**

M1 아이패드의 해상도는 2388 x 1668


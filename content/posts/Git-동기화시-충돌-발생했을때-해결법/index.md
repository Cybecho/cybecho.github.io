---
title: "Git 동기화시 충돌 발생했을때 해결법"
date: 2023-10-29T00:00:00.000Z
draft: false
tags: ["obsidian"]
series: ["Git", "Tips"]
description: "깃 충돌이 발생했을 때, 에러 메시지를 더블클릭하면 충돌이 일어난 파일들의 로그를 확인할 수 있으며, 충돌 해결을 위해 "
notion_id: "c00dabb6-8b8f-4de0-8733-95dc39aa66b4"
notion_url: "https://www.notion.so/Git-c00dabb68b8f4de0873395dc39aa66b4"
---

# Git 동기화시 충돌 발생했을때 해결법

> **Summary**
> 깃 충돌이 발생했을 때, 에러 메시지를 더블클릭하면 충돌이 일어난 파일들의 로그를 확인할 수 있으며, 충돌 해결을 위해 

---


![Image](https://obsidian.md/images/2023-06-logo.png)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e7b20513-db50-4a37-8bbe-8f643efee825/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK6CV2YE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDD15C4l%2F76p902d%2Bl%2BFuuoo8EgIlhMHPLYcPDahTJ8XgIgUD%2FZzS8bGYEffLVIGgICg1RuWr3hECbuaQubS0DkjEsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNClOCX2x2JVk%2BsdrCrcA%2BLn7zYOOrVF6h683iQ%2BmtlkEqq4t%2F%2BI9omFz8zHvZ2fdgbMT0MaGyOzMJljZ%2BJ0jzSPC5Qe4NnPyl4NW%2B%2FrmeZQqIwKJsZb7k2QAXeyxwVts2mIUsWj2VnWr3PnMzSzfG2PXLzbo4InmSfkban6Z%2BeZ8K2dIO06lUCdUfHkv%2BdSPvRNMdsyNdF74H3lhepx6u8m19mEdmkbeZportCqUWBWkvbV8sHoHisd9mTOS%2Fu3yba4j6EeVH0coxrEQ7JXuLyJh0c%2ByZ%2BlxoOr52iKnp1%2F1tcC4LTEQweri68Gt8Z6TlQKrN8TP5NuzIDw1VTg4gbWRnt8ypbWOZLkGb2KagdI8C8zlw9Rs%2B9N%2BMC%2FLyOla5qXCpbtCFqAgYzRuqiLsZ6kpS7Z%2FOBCpz2hUWeBxdWmNAIRIOM%2FPlBQaKFKYtbhNnH%2B3024w282Kn1bGkIui7epg72KpLxepfrnO0CGsetAenz2iwl4U1XWvxQFkpbcSJsfj1g%2FYdDzg%2FeoUc6NPcB6whhi1PEB2YP3CsWbEJU7f90nC58FavCDREfqdz6EWPsHvos9WPFKbrJ3xIB9g%2BNuKoRq6bGbZm7Le8DEw5DiTbPUrUa5y%2B1C2k9viF1Cph%2FhjfBfQGkZSYKdMJGbiMQGOqUBGQrJYHdAmJ%2FMKCaKR5AcFt7Byvd5hW9rxUBiyh2XXsOYdf3gvsKvvzUCIVA%2BcXB8P01njQX%2BzjXtCZPhjCU%2BxYAqmyFCa3goUgO%2F4ku1daqI3B5COL%2FcZL5%2BeD0sZGdFauBk2MEWUzB%2FZMBwLuGACqQrvsgh1zamdkSj8AVED6g2K8t9FGbMdlmLk8KfOkWwmlea%2FnXVmqXeh2lcGxYm1exXgUAn&X-Amz-Signature=c18e2c42d3200815a390f5648903dd4f2823726e35b4f5e094219b3eb97c39e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/234ec01a-e9d8-4c07-aafe-6dc3be3d8ac1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK6CV2YE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDD15C4l%2F76p902d%2Bl%2BFuuoo8EgIlhMHPLYcPDahTJ8XgIgUD%2FZzS8bGYEffLVIGgICg1RuWr3hECbuaQubS0DkjEsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNClOCX2x2JVk%2BsdrCrcA%2BLn7zYOOrVF6h683iQ%2BmtlkEqq4t%2F%2BI9omFz8zHvZ2fdgbMT0MaGyOzMJljZ%2BJ0jzSPC5Qe4NnPyl4NW%2B%2FrmeZQqIwKJsZb7k2QAXeyxwVts2mIUsWj2VnWr3PnMzSzfG2PXLzbo4InmSfkban6Z%2BeZ8K2dIO06lUCdUfHkv%2BdSPvRNMdsyNdF74H3lhepx6u8m19mEdmkbeZportCqUWBWkvbV8sHoHisd9mTOS%2Fu3yba4j6EeVH0coxrEQ7JXuLyJh0c%2ByZ%2BlxoOr52iKnp1%2F1tcC4LTEQweri68Gt8Z6TlQKrN8TP5NuzIDw1VTg4gbWRnt8ypbWOZLkGb2KagdI8C8zlw9Rs%2B9N%2BMC%2FLyOla5qXCpbtCFqAgYzRuqiLsZ6kpS7Z%2FOBCpz2hUWeBxdWmNAIRIOM%2FPlBQaKFKYtbhNnH%2B3024w282Kn1bGkIui7epg72KpLxepfrnO0CGsetAenz2iwl4U1XWvxQFkpbcSJsfj1g%2FYdDzg%2FeoUc6NPcB6whhi1PEB2YP3CsWbEJU7f90nC58FavCDREfqdz6EWPsHvos9WPFKbrJ3xIB9g%2BNuKoRq6bGbZm7Le8DEw5DiTbPUrUa5y%2B1C2k9viF1Cph%2FhjfBfQGkZSYKdMJGbiMQGOqUBGQrJYHdAmJ%2FMKCaKR5AcFt7Byvd5hW9rxUBiyh2XXsOYdf3gvsKvvzUCIVA%2BcXB8P01njQX%2BzjXtCZPhjCU%2BxYAqmyFCa3goUgO%2F4ku1daqI3B5COL%2FcZL5%2BeD0sZGdFauBk2MEWUzB%2FZMBwLuGACqQrvsgh1zamdkSj8AVED6g2K8t9FGbMdlmLk8KfOkWwmlea%2FnXVmqXeh2lcGxYm1exXgUAn&X-Amz-Signature=ff255f59d185cc38b425790b67e4fe962e71aad0aa80f76bce1af6905675cb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```latex
git rm <파일>
```


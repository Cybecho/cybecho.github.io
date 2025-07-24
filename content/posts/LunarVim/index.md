---
title: "LunarVim"
date: 2024-05-07T08:10:00.000Z
draft: false
tags: ["WINDOWS", "ubuntu", "Debian", "Arch", "MAC", "IDE", "VIM"]
series: ["Let's Linux!", "개발환경"]
description: "LunarVim에 대한 설치 가이드를 제공하며, Arch, Debian, MAC, Windows, Ubuntu와 같은 다양한 운영 체제에서 사용할 수 있습니다."
notion_id: "f526e9b0-513a-4cd0-a43b-9631c4c0304f"
notion_url: "https://www.notion.so/LunarVim-f526e9b0513a4cd0a43b9631c4c0304f"
---

# LunarVim

> **Summary**
> LunarVim에 대한 설치 가이드를 제공하며, Arch, Debian, MAC, Windows, Ubuntu와 같은 다양한 운영 체제에서 사용할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/1f814d0a-1519-44fa-b8e1-31abbe5a8204/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XERKKZLP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHP8MD4jLDJ0k4VNTA9Vin6JrdZt2iDfNYJZ0R%2F96bVPAiB8wz3v5PIaGwvcO5bzFlzd8dw7aGYsrafSIBCYOTqY7yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMjh6KwKjbr9PqtDAGKtwDtUl7oLSBr%2BhHLpcH7Vq%2F6ZpqJgQJXwReLpJCbc%2BVB8CKx0uN%2FRqms0d%2FqwewBPVCLfsZs5BWbSZymljsHm89yojXKMS8%2FnPrh0m8ZoK9JDXYmpa3LhyFjH%2B3wnNUn2kCdy6HAaj7%2Frtgc8ViFIZxhPfYLIrsR5dFAkZEns9%2B9fjb%2Fko0xOAx5OP4s7TIEV%2Fg%2F1vJsnImUvTsFBE%2FkdlhavUVCRH3HCfF%2BFEf8m6C5KbK%2FQ6dvblMwCR%2BfNx3RBzS643nSoJZfR5giw584IslhoGO%2F%2BA3yzOGKTnlF2J39ztjprW6SOEZldnQwYbkrFuCmj0ZwzIXR5mM%2BuCKfsglvux%2FHN3XjW0GcOleE1uSO115JRTFDa0e61x%2BSbgzrPnwwe5Aj%2BB%2BLAznjAdHUz4uF4nUchnY1eRvxr7ety%2FwCDAqvr2LW7ULgNPZY5CZYWf00NYu2c3rDX8RQiB1%2B3RqMdg4yV4BgANIYnMAUvbDfgbILkrR91qB5Sv5Wr8y23vQ643U93UqOVxDW%2FArpbAfi%2FDJnFVShncf5JKaqqbsmQ5dhtPlCYhNlZDW9kDE0XnqGRyU7LdHi0NDdsAtYdI9X%2BqE2Csb32kKhHZ2UxRWU5kUzIXWZONIXxNqp8MwmNCHxAY6pgFcQ9BKpcIiy6%2BJAsdqHuYCNtqvz4W3AHWkXviPbqSJi1UfEHOp%2FRNe%2BY8LAbPwpdC%2BZlIV4MSUiXjdryV%2B4sCod9RRR4JMPFk3CnXDeKQZDigstJOb383yrpPB6m%2FOreA%2Fb22KBQ%2Bm4AaYJ1L6PG4Oa9l%2BN1Uw1jJp%2BZvpQswc1TCQ0uCl62lTeRESZzN2zXfPskFOacCkQUbR86Sa%2Fl%2BM4LFBzUw7&X-Amz-Signature=323a2276ec47329fbf6bb1ffce86f8f17b9badcd5f5741d7a07a39bddd43e131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c22e7e68-d7ad-4af4-944b-b0506ec74a17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XERKKZLP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHP8MD4jLDJ0k4VNTA9Vin6JrdZt2iDfNYJZ0R%2F96bVPAiB8wz3v5PIaGwvcO5bzFlzd8dw7aGYsrafSIBCYOTqY7yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMjh6KwKjbr9PqtDAGKtwDtUl7oLSBr%2BhHLpcH7Vq%2F6ZpqJgQJXwReLpJCbc%2BVB8CKx0uN%2FRqms0d%2FqwewBPVCLfsZs5BWbSZymljsHm89yojXKMS8%2FnPrh0m8ZoK9JDXYmpa3LhyFjH%2B3wnNUn2kCdy6HAaj7%2Frtgc8ViFIZxhPfYLIrsR5dFAkZEns9%2B9fjb%2Fko0xOAx5OP4s7TIEV%2Fg%2F1vJsnImUvTsFBE%2FkdlhavUVCRH3HCfF%2BFEf8m6C5KbK%2FQ6dvblMwCR%2BfNx3RBzS643nSoJZfR5giw584IslhoGO%2F%2BA3yzOGKTnlF2J39ztjprW6SOEZldnQwYbkrFuCmj0ZwzIXR5mM%2BuCKfsglvux%2FHN3XjW0GcOleE1uSO115JRTFDa0e61x%2BSbgzrPnwwe5Aj%2BB%2BLAznjAdHUz4uF4nUchnY1eRvxr7ety%2FwCDAqvr2LW7ULgNPZY5CZYWf00NYu2c3rDX8RQiB1%2B3RqMdg4yV4BgANIYnMAUvbDfgbILkrR91qB5Sv5Wr8y23vQ643U93UqOVxDW%2FArpbAfi%2FDJnFVShncf5JKaqqbsmQ5dhtPlCYhNlZDW9kDE0XnqGRyU7LdHi0NDdsAtYdI9X%2BqE2Csb32kKhHZ2UxRWU5kUzIXWZONIXxNqp8MwmNCHxAY6pgFcQ9BKpcIiy6%2BJAsdqHuYCNtqvz4W3AHWkXviPbqSJi1UfEHOp%2FRNe%2BY8LAbPwpdC%2BZlIV4MSUiXjdryV%2B4sCod9RRR4JMPFk3CnXDeKQZDigstJOb383yrpPB6m%2FOreA%2Fb22KBQ%2Bm4AaYJ1L6PG4Oa9l%2BN1Uw1jJp%2BZvpQswc1TCQ0uCl62lTeRESZzN2zXfPskFOacCkQUbR86Sa%2Fl%2BM4LFBzUw7&X-Amz-Signature=67dba4360919e0f20fa7d593970e1fcbb408de353ef0ecd592e4447a715d9567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://velog.io/@mythos/Linux-Lunar-Vim-설치](https://velog.io/@mythos/Linux-Lunar-Vim-설치)



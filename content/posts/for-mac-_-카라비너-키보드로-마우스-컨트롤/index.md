---
title: "for mac : 카라비너 키보드로 마우스 컨트롤 "
date: 2023-11-25T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["개발환경"]
description: "맥에서 마우스 없이 키보드로 조작하는 방법을 설명하며, Karabiner를 사용하여 특정 키 조합으로 마우스 기능을 구현하는 JSON 파일 설정 방법을 안내합니다."
notion_id: "264702d1-bd8d-4677-b511-7e3e7d0a44b2"
notion_url: "https://www.notion.so/for-mac-264702d1bd8d4677b5117e3e7d0a44b2"
---

# for mac : 카라비너 키보드로 마우스 컨트롤 

> **Summary**
> 맥에서 마우스 없이 키보드로 조작하는 방법을 설명하며, Karabiner를 사용하여 특정 키 조합으로 마우스 기능을 구현하는 JSON 파일 설정 방법을 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO7SVF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FpxWO3sJG3U%2BpSODFOms473YpEOlHsWJkyfRBVTMXswIgLIIoKtw05bAcHQEJxlzEM9C3GIhfvzVd%2FN74aCduA4cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP6WXisXQ9tnkIj19yrcA32qx0vvGN07XOPz%2BfgtP8wKvRrS%2BDt6lV5q9%2FvoSJorZSRvHUwYd%2Flu49MbudcfAHUrivnCFC29I9luY5bmDQDlgG0Jvc24hn5W0xiPqNh1gEo4NUhnqp8rg1xbLpPnwWvGfWU3do2xfnk3qsmIdTXocDNpXVfs%2BRgz7a%2BAc9eIK3559wEIfHEJ%2FjcMCLO1lw0CUsHP5sHyrUZ5cIagKvl8OCuWm5wN7cdJFjnaskwZeeWDcLO%2BDOG%2B%2BOPDtvYrP2WHQQGQ8B%2B4kIWtk1nM2mlFe108MtC4f0LFfne7HdLhHHuhvGA8lVqfp3%2FqdBWGcMwPnxqFpoZSo7gTOxShrzydrxTZGsHO00yQKSXVYIYtqK3lzimWwU85%2ByD%2BEoDGE3ErX047JPEJpLsi0SH7xhq4DO1BHuo4LrQjfwS6j9iEuaLcchkbAQzmYXZTu5bcBExwpW0oAn6GBj1DKEhBO9KI%2BbB4Ummky0GSVR5GCDuDAaOlDR5P0DU4mVA8AqtJBc4oP1vu71WIu6BtXDxaCVgMlia%2Ff34GGW4Vm9LU5yjngQtMcU4u6V4SHTS4TDDHHh75Mhnjf%2F3Wp%2FJB0geOKC2IUb2h5PHpK4ASebPbV1mHVmDNVz0aKxA51SiBMJX1h8QGOqUB8%2BHUqCRPlZ6%2FgmLq8EQL9zFC5Rj5nyffo81XLaH%2BcSGY1Y4uR%2B9vLH%2BTvcxzKVuvbkjgn2LD985t4%2BvriZJgmLzPKMh0ao1eYK7gf1dMOxqJIRxKTOeIkMGkB7neM2Pb52Jj3970RwWdO%2F3fwHqkkc0JszCLWH0KawK7q99PJTlBeyqZ2w4ib0qzsAxmYY8AS%2FrHO%2F%2F945JSdtXaMvOYB0Pa20bN&X-Amz-Signature=91533682714290d384b26df4d5b9af9040c3f3d8fbd32e333913bfcb07c4528a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s](https://www.youtube.com/watch?v=U2gMzPqkrCI&t=11s)

🔗 [https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json](https://github.com/wonjongseo/mouse-karabiner/blob/main/mouse-keys-won2.json)

```plain text
~/.config/karabiner/assets/complex_modifications
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e8cc303a-2992-479b-87f8-e8cb637a37ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO7SVF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FpxWO3sJG3U%2BpSODFOms473YpEOlHsWJkyfRBVTMXswIgLIIoKtw05bAcHQEJxlzEM9C3GIhfvzVd%2FN74aCduA4cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP6WXisXQ9tnkIj19yrcA32qx0vvGN07XOPz%2BfgtP8wKvRrS%2BDt6lV5q9%2FvoSJorZSRvHUwYd%2Flu49MbudcfAHUrivnCFC29I9luY5bmDQDlgG0Jvc24hn5W0xiPqNh1gEo4NUhnqp8rg1xbLpPnwWvGfWU3do2xfnk3qsmIdTXocDNpXVfs%2BRgz7a%2BAc9eIK3559wEIfHEJ%2FjcMCLO1lw0CUsHP5sHyrUZ5cIagKvl8OCuWm5wN7cdJFjnaskwZeeWDcLO%2BDOG%2B%2BOPDtvYrP2WHQQGQ8B%2B4kIWtk1nM2mlFe108MtC4f0LFfne7HdLhHHuhvGA8lVqfp3%2FqdBWGcMwPnxqFpoZSo7gTOxShrzydrxTZGsHO00yQKSXVYIYtqK3lzimWwU85%2ByD%2BEoDGE3ErX047JPEJpLsi0SH7xhq4DO1BHuo4LrQjfwS6j9iEuaLcchkbAQzmYXZTu5bcBExwpW0oAn6GBj1DKEhBO9KI%2BbB4Ummky0GSVR5GCDuDAaOlDR5P0DU4mVA8AqtJBc4oP1vu71WIu6BtXDxaCVgMlia%2Ff34GGW4Vm9LU5yjngQtMcU4u6V4SHTS4TDDHHh75Mhnjf%2F3Wp%2FJB0geOKC2IUb2h5PHpK4ASebPbV1mHVmDNVz0aKxA51SiBMJX1h8QGOqUB8%2BHUqCRPlZ6%2FgmLq8EQL9zFC5Rj5nyffo81XLaH%2BcSGY1Y4uR%2B9vLH%2BTvcxzKVuvbkjgn2LD985t4%2BvriZJgmLzPKMh0ao1eYK7gf1dMOxqJIRxKTOeIkMGkB7neM2Pb52Jj3970RwWdO%2F3fwHqkkc0JszCLWH0KawK7q99PJTlBeyqZ2w4ib0qzsAxmYY8AS%2FrHO%2F%2F945JSdtXaMvOYB0Pa20bN&X-Amz-Signature=f4522b6b963cba8a7164971e6cf0e745759d3e9a0f8f951d8afbd86eeb732dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fa10a1bb-97b5-4358-abcd-968b338683e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO7SVF7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FpxWO3sJG3U%2BpSODFOms473YpEOlHsWJkyfRBVTMXswIgLIIoKtw05bAcHQEJxlzEM9C3GIhfvzVd%2FN74aCduA4cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP6WXisXQ9tnkIj19yrcA32qx0vvGN07XOPz%2BfgtP8wKvRrS%2BDt6lV5q9%2FvoSJorZSRvHUwYd%2Flu49MbudcfAHUrivnCFC29I9luY5bmDQDlgG0Jvc24hn5W0xiPqNh1gEo4NUhnqp8rg1xbLpPnwWvGfWU3do2xfnk3qsmIdTXocDNpXVfs%2BRgz7a%2BAc9eIK3559wEIfHEJ%2FjcMCLO1lw0CUsHP5sHyrUZ5cIagKvl8OCuWm5wN7cdJFjnaskwZeeWDcLO%2BDOG%2B%2BOPDtvYrP2WHQQGQ8B%2B4kIWtk1nM2mlFe108MtC4f0LFfne7HdLhHHuhvGA8lVqfp3%2FqdBWGcMwPnxqFpoZSo7gTOxShrzydrxTZGsHO00yQKSXVYIYtqK3lzimWwU85%2ByD%2BEoDGE3ErX047JPEJpLsi0SH7xhq4DO1BHuo4LrQjfwS6j9iEuaLcchkbAQzmYXZTu5bcBExwpW0oAn6GBj1DKEhBO9KI%2BbB4Ummky0GSVR5GCDuDAaOlDR5P0DU4mVA8AqtJBc4oP1vu71WIu6BtXDxaCVgMlia%2Ff34GGW4Vm9LU5yjngQtMcU4u6V4SHTS4TDDHHh75Mhnjf%2F3Wp%2FJB0geOKC2IUb2h5PHpK4ASebPbV1mHVmDNVz0aKxA51SiBMJX1h8QGOqUB8%2BHUqCRPlZ6%2FgmLq8EQL9zFC5Rj5nyffo81XLaH%2BcSGY1Y4uR%2B9vLH%2BTvcxzKVuvbkjgn2LD985t4%2BvriZJgmLzPKMh0ao1eYK7gf1dMOxqJIRxKTOeIkMGkB7neM2Pb52Jj3970RwWdO%2F3fwHqkkc0JszCLWH0KawK7q99PJTlBeyqZ2w4ib0qzsAxmYY8AS%2FrHO%2F%2F945JSdtXaMvOYB0Pa20bN&X-Amz-Signature=2f322d03cb94f8187970fc1365aab0aea6c29cf304b759f71529816cea4d4fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# T480 용 (opt → cmd input) 수정한 버전

# Rainy75 용

→ 항상 ctrl 키는 hold하고 있다고 생각


---
title: "윈도우 Ctrl ←→ CapsLock 바꾸기"
date: 2023-11-03T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["Don't Hate Windows!"]
description: "윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법은 레지스트리 편집기를 사용하여 "
notion_id: "7db001a3-cb42-4800-9f94-40327f19552e"
notion_url: "https://www.notion.so/Ctrl-CapsLock-7db001a3cb4248009f9440327f19552e"
---

# 윈도우 Ctrl ←→ CapsLock 바꾸기

> **Summary**
> 윈도우에서 Ctrl 키와 Caps Lock 키의 위치를 변경하는 방법은 레지스트리 편집기를 사용하여 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFT5YSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF0KmfocSuLCFMSTMT0LPug42NKIMKCcwpPoAP3It7xGAiBhKSqUdh0jfob3TwWjDpqYJkZyzQ%2B%2FMYkmcEDG2rL8uCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMqj6h4jmOWVIgi%2BL9KtwDkIuLkB2jRM7m%2FyfHhBhNM2TFcwPQ685Y8Y02dKWzwwXJkL9%2FuLCunyep0SvXoEme6bPfFimLHZToLb2TwflJ3OgTwEXxBRawYK2uwrmhzPQ75EuLZRZdRq%2FIuj4lzavgtkQroWLDg5VzaGVwvy%2BUhHy4xhdMQiMVmXMGHxWqrjqnT56ZAXBfLm9q%2FrorhUdgt5HOe4h1fVxZmhJymfabDQfHDLtQmlOV3fMqZug4lojH%2BF%2FlAGWVOhjcaKDC6Wjs7aqHXPZxCG4G3oqj0rYyhYMsaP87%2FNY70ILVqVOmrFPhPhewOFIwD4DahH0gP2oN93FjQYWTZdtYQ9D9R0iiWPyvWKG4O4WG56O6Sz6Rlm7TKb1Wu5%2FG%2BZMJzNx%2BPy8i3daaXW1Kpo6itZt19TxLIFWYSUPNHN8vDr5qEAI6FiGTHmGd%2BNdIYgedsLQS7qHy0l1tnQbFCIRI0jvmh3j6CazFDIGc2TXGcsRBhzfxVFvfotPUCgVs%2F0e30VLbeaAsmJpBR%2B5KC5Xgn5fBpaQRrsET4D8gXE%2FHgQqEh6cp308lQtDYxhvuU05VHLy9sSoELNCcqlKxNULuiSuA9z4h9TJgwImkUu8FvI9eaTdgjQGPf0iY0aYWwe%2F%2FpLcwmdCHxAY6pgH7h6nrfSFBEgRjFfw8Zkfnl3K5QEpQt0YuH%2BDQvwphkTY14wK4uPRAm44IguLPbwCFYipSZwc6IBysd8p06zoFxiV%2BfzBZdX0EhSJJ2vZM6bfCuvtsGneBYaPszqIDrsfWcW0rUA19CAvsqvMLYytrEGU15ctVku4ixT0QTyOM%2BcS4RRZKoaT%2FpLge1SJkCvBjghFrKToJmVkUqHqW3Av8B4iw9eU5&X-Amz-Signature=28a98ef9004e8d178dbe4e8e066df80fd0abd6ba3d3dac50a01dc26b58a6f974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://m.blog.naver.com/minhyupp/222211206474](https://m.blog.naver.com/minhyupp/222211206474)

윈도우키 + R : regedit

```c#
컴퓨터\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout
```

`Scancode Map` 이름으로 **이진값 새로 만들기** 후 입력한 다음 재부팅....



**03이 캡스락, XT값은 3A**

**58이 컨트롤 XT 값은 1D**



1D 00 3A의 뜻은 1D(컨트롤키)를 3A키(캡스락)에 할당해주시오. 라는 뜻.



![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfNzgg/MDAxNjEwOTQ0NjgxNzgy.YS7Ap6fbEi-TRbEpY5aXdQJ0Hu-rTc_OI1P9DgmtpOQg.g1-cUEsmRpPoCA8b39LlpdpFxUagh7o7I46xAHIjej4g.PNG.minhyupp/image.png?type=w800)

Ctrl <-> Caps Lock 위치 변경

![Image](https://mblogthumb-phinf.pstatic.net/MjAyMTAxMThfMjQg/MDAxNjEwOTQ1Mzk2NjY0.TFPIQALDqOG4bH8YeT2r_Jt1pwBpIpgDuX_k9cyRGpwg.s-wjZ1tR7__cV_HCZjHUUFGDAMsYBcoLJfXHPZyvJnEg.PNG.minhyupp/image.png?type=w800)

CapsLock 조차 Ctrl 키로 바꿔버리기



# 이거 자동화 할 방법 없나?

🔗 [https://dora-guide.com/레지스트리-편집기-실행/](https://dora-guide.com/레지스트리-편집기-실행/)

🔗 [https://blog.naver.com/starbros/220466856335](https://blog.naver.com/starbros/220466856335)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/317c6692-f519-47b2-98e6-bd4ed2d3f2f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFT5YSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF0KmfocSuLCFMSTMT0LPug42NKIMKCcwpPoAP3It7xGAiBhKSqUdh0jfob3TwWjDpqYJkZyzQ%2B%2FMYkmcEDG2rL8uCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMqj6h4jmOWVIgi%2BL9KtwDkIuLkB2jRM7m%2FyfHhBhNM2TFcwPQ685Y8Y02dKWzwwXJkL9%2FuLCunyep0SvXoEme6bPfFimLHZToLb2TwflJ3OgTwEXxBRawYK2uwrmhzPQ75EuLZRZdRq%2FIuj4lzavgtkQroWLDg5VzaGVwvy%2BUhHy4xhdMQiMVmXMGHxWqrjqnT56ZAXBfLm9q%2FrorhUdgt5HOe4h1fVxZmhJymfabDQfHDLtQmlOV3fMqZug4lojH%2BF%2FlAGWVOhjcaKDC6Wjs7aqHXPZxCG4G3oqj0rYyhYMsaP87%2FNY70ILVqVOmrFPhPhewOFIwD4DahH0gP2oN93FjQYWTZdtYQ9D9R0iiWPyvWKG4O4WG56O6Sz6Rlm7TKb1Wu5%2FG%2BZMJzNx%2BPy8i3daaXW1Kpo6itZt19TxLIFWYSUPNHN8vDr5qEAI6FiGTHmGd%2BNdIYgedsLQS7qHy0l1tnQbFCIRI0jvmh3j6CazFDIGc2TXGcsRBhzfxVFvfotPUCgVs%2F0e30VLbeaAsmJpBR%2B5KC5Xgn5fBpaQRrsET4D8gXE%2FHgQqEh6cp308lQtDYxhvuU05VHLy9sSoELNCcqlKxNULuiSuA9z4h9TJgwImkUu8FvI9eaTdgjQGPf0iY0aYWwe%2F%2FpLcwmdCHxAY6pgH7h6nrfSFBEgRjFfw8Zkfnl3K5QEpQt0YuH%2BDQvwphkTY14wK4uPRAm44IguLPbwCFYipSZwc6IBysd8p06zoFxiV%2BfzBZdX0EhSJJ2vZM6bfCuvtsGneBYaPszqIDrsfWcW0rUA19CAvsqvMLYytrEGU15ctVku4ixT0QTyOM%2BcS4RRZKoaT%2FpLge1SJkCvBjghFrKToJmVkUqHqW3Av8B4iw9eU5&X-Amz-Signature=88ce7616428ef22317a6e709a2ebf56dc36a3be195645823bdfe090432ac708b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/07d77b91-aa14-412f-8af3-2da3320a0f8e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFT5YSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF0KmfocSuLCFMSTMT0LPug42NKIMKCcwpPoAP3It7xGAiBhKSqUdh0jfob3TwWjDpqYJkZyzQ%2B%2FMYkmcEDG2rL8uCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMqj6h4jmOWVIgi%2BL9KtwDkIuLkB2jRM7m%2FyfHhBhNM2TFcwPQ685Y8Y02dKWzwwXJkL9%2FuLCunyep0SvXoEme6bPfFimLHZToLb2TwflJ3OgTwEXxBRawYK2uwrmhzPQ75EuLZRZdRq%2FIuj4lzavgtkQroWLDg5VzaGVwvy%2BUhHy4xhdMQiMVmXMGHxWqrjqnT56ZAXBfLm9q%2FrorhUdgt5HOe4h1fVxZmhJymfabDQfHDLtQmlOV3fMqZug4lojH%2BF%2FlAGWVOhjcaKDC6Wjs7aqHXPZxCG4G3oqj0rYyhYMsaP87%2FNY70ILVqVOmrFPhPhewOFIwD4DahH0gP2oN93FjQYWTZdtYQ9D9R0iiWPyvWKG4O4WG56O6Sz6Rlm7TKb1Wu5%2FG%2BZMJzNx%2BPy8i3daaXW1Kpo6itZt19TxLIFWYSUPNHN8vDr5qEAI6FiGTHmGd%2BNdIYgedsLQS7qHy0l1tnQbFCIRI0jvmh3j6CazFDIGc2TXGcsRBhzfxVFvfotPUCgVs%2F0e30VLbeaAsmJpBR%2B5KC5Xgn5fBpaQRrsET4D8gXE%2FHgQqEh6cp308lQtDYxhvuU05VHLy9sSoELNCcqlKxNULuiSuA9z4h9TJgwImkUu8FvI9eaTdgjQGPf0iY0aYWwe%2F%2FpLcwmdCHxAY6pgH7h6nrfSFBEgRjFfw8Zkfnl3K5QEpQt0YuH%2BDQvwphkTY14wK4uPRAm44IguLPbwCFYipSZwc6IBysd8p06zoFxiV%2BfzBZdX0EhSJJ2vZM6bfCuvtsGneBYaPszqIDrsfWcW0rUA19CAvsqvMLYytrEGU15ctVku4ixT0QTyOM%2BcS4RRZKoaT%2FpLge1SJkCvBjghFrKToJmVkUqHqW3Av8B4iw9eU5&X-Amz-Signature=710d1861fc140b1407ffb696995c75cd1952ccab5b3e3b42b70ea93b692681d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/0325384a-f9af-4164-9540-7161b0bfaf0f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFT5YSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF0KmfocSuLCFMSTMT0LPug42NKIMKCcwpPoAP3It7xGAiBhKSqUdh0jfob3TwWjDpqYJkZyzQ%2B%2FMYkmcEDG2rL8uCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMqj6h4jmOWVIgi%2BL9KtwDkIuLkB2jRM7m%2FyfHhBhNM2TFcwPQ685Y8Y02dKWzwwXJkL9%2FuLCunyep0SvXoEme6bPfFimLHZToLb2TwflJ3OgTwEXxBRawYK2uwrmhzPQ75EuLZRZdRq%2FIuj4lzavgtkQroWLDg5VzaGVwvy%2BUhHy4xhdMQiMVmXMGHxWqrjqnT56ZAXBfLm9q%2FrorhUdgt5HOe4h1fVxZmhJymfabDQfHDLtQmlOV3fMqZug4lojH%2BF%2FlAGWVOhjcaKDC6Wjs7aqHXPZxCG4G3oqj0rYyhYMsaP87%2FNY70ILVqVOmrFPhPhewOFIwD4DahH0gP2oN93FjQYWTZdtYQ9D9R0iiWPyvWKG4O4WG56O6Sz6Rlm7TKb1Wu5%2FG%2BZMJzNx%2BPy8i3daaXW1Kpo6itZt19TxLIFWYSUPNHN8vDr5qEAI6FiGTHmGd%2BNdIYgedsLQS7qHy0l1tnQbFCIRI0jvmh3j6CazFDIGc2TXGcsRBhzfxVFvfotPUCgVs%2F0e30VLbeaAsmJpBR%2B5KC5Xgn5fBpaQRrsET4D8gXE%2FHgQqEh6cp308lQtDYxhvuU05VHLy9sSoELNCcqlKxNULuiSuA9z4h9TJgwImkUu8FvI9eaTdgjQGPf0iY0aYWwe%2F%2FpLcwmdCHxAY6pgH7h6nrfSFBEgRjFfw8Zkfnl3K5QEpQt0YuH%2BDQvwphkTY14wK4uPRAm44IguLPbwCFYipSZwc6IBysd8p06zoFxiV%2BfzBZdX0EhSJJ2vZM6bfCuvtsGneBYaPszqIDrsfWcW0rUA19CAvsqvMLYytrEGU15ctVku4ixT0QTyOM%2BcS4RRZKoaT%2FpLge1SJkCvBjghFrKToJmVkUqHqW3Av8B4iw9eU5&X-Amz-Signature=815a14e679d6239ac5cb5fda37f44282567a1f1c8f825536f4cc82ef44dadc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



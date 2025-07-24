---
title: "PowerToys 잡버그 잡기 똥꼬쇼"
date: 2023-11-04T00:00:00.000Z
draft: false
tags: ["WINDOWS", "POWER_TOYS"]
series: ["Don't Hate Windows!"]
description: "키보드 핫키 버그 문제를 해결하기 위해 다양한 단축키 조합을 시도했으며, Alt + U와 O를 번갈아 누르면 문제가 해결되는 것으로 보인다. 버전 다운그레이드(0.74.1) 후에도 동일한 문제가 발생했지만, 일부 개선이 있었던 것으로 나타났다."
notion_id: "f5eebcb5-be9a-4bfe-8531-9af9a14b63d4"
notion_url: "https://www.notion.so/PowerToys-f5eebcb5be9a4bfe85319af9a14b63d4"
---

# PowerToys 잡버그 잡기 똥꼬쇼

> **Summary**
> 키보드 핫키 버그 문제를 해결하기 위해 다양한 단축키 조합을 시도했으며, Alt + U와 O를 번갈아 누르면 문제가 해결되는 것으로 보인다. 버전 다운그레이드(0.74.1) 후에도 동일한 문제가 발생했지만, 일부 개선이 있었던 것으로 나타났다.

---

# 아오 키보드 핫키 버그 왜이렇게 많냐??

# 해결??? 

- Alt + U : home
- Alt + O : End

로 맵핑해놨었는데,,, 이거 남발하다보니

- alt + a : Ctrl + a
- alt + c,v : Ctrl + c,v
이 명령어들이 안먹는 버그들이 있었다…


이거 해결 방법은 그냥 

- alt + i j k l 혹은 
  - (W A S D 처럼 맵핑해둔거임)
- alt + u ,o
남발하니까 버그가 풀리는데,,,, 이거 원리가 뭐지?

→ alt + u 가 좀 더 이 버그에 관련이 있을 것 같다

> Alt + shift + O(home) or U(end) 를 번갈아 누르면 해결됨
이게 무슨 에러일까?

# PowerLancher.exe 의 부재가 원인?

🔗 [https://github.com/microsoft/PowerToys/issues/9017](https://github.com/microsoft/PowerToys/issues/9017)

🔗 [https://github.com/microsoft/PowerToys/issues/9018](https://github.com/microsoft/PowerToys/issues/9018)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dc8a481e-de1e-41fb-9e59-922e342cdedc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQX4OU3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCebYjn%2FQiY96VvQUeyxFunkpdh%2BgmdTr%2FrJGYDudpLmwIgeCWNSlX53Xvt8K6bNURePY0l9P4vncoOXgrI59L7jaEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHmbF0O9UzCCyoJFNircA8D5pc4KFBHUgybPkJvr1Pygn0W02%2BrH2vXhSWMEwMiqMYmzgqiKEJnG5Eum0LIn5%2FphnWZI%2BZVVetLOwJ%2FIrxDt5Vxma5UMv%2BFgHX9LL6pCCqsaBSeAz%2BlNnSUPmFsRuaycx9a3m%2BgVrczBx282P%2BdMgIFLP9qLOJdkBaBRLJQcPboktn0loV0wPB7KEUkhZ4LY58xtg%2FnSBZJedaI58Bnb3GgfP3Ermjq%2BaBq73YYAXvGYBL06RIo%2Fe%2FG7%2FViqh2N776isFmRBaUkrzKsx4tp%2FQlcZyI6meJfaP%2F6vPwl9hseysbcGjJLM4nB2X2xHUSYozvcFZ1h%2FMdusKYGVrhpQXupqPvI9Kney2oLhHpTma95T6eqv0SZgb4yCT2JoqvEb97rPIeWPThilrktcmhJznnSyQRhZ2Yd0CzNuaJK3iAcbHre5b9m%2BjqplwZG0NIouA4vyIYWTma3gzUtnUqMLbj0hNOf4ot6lrYkB1ESxQ3DjsldUIEvm6PTuVVt02AZXUXboAqCRx9xHe7JAO0f9mX6ITL9R%2Bi%2Ba%2F3CJD5PUy53N3pC%2BAFHF5Bf25HpIrT1XZj2S3Wxkdu%2B2USL39oxaUUGe51bc1eGw6pu%2FeuSbQaaHN5meAf98Sue7MMf2h8QGOqUBcouPFnQOeuEIam%2Fu5PDLiT3FnG4eC4n%2F293UHwGdFqq4fbs5nvKbVZw7JjogtSraKRYmXDmg2zVfEYBNnhF2AxCFhIXk6dIBObwa%2Bj1JUTygtY6x99loPs0SaAl8CbxmoeCi09tlaIjAwhEXOACQzp%2BO23SIOiF8Xd1FQ9dUJwm%2BXLN6pr6ICMAOFpafMazkFMx8OfVPhFPmm8QvBVKdwMcYdxht&X-Amz-Signature=e9aefac82bc4421f45381cef89705c022ff9973d4af27fc03e3b0e5287b86f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 버전이 문제? (버그발생 빌드 0.75.1)

### → 버전 문제도 아닙니다! 0.74.1 로 다운그레이드해도, 똑같은 문제 발생

🔗 [https://github.com/microsoft/PowerToys/releases](https://github.com/microsoft/PowerToys/releases)

0.74.1 로 다운그레이드 하니까 좀 나아진듯


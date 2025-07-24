---
title: "IBM 구형 키보드 펌웨어 변조"
date: 2025-02-10T03:09:00.000Z
draft: false
tags: ["Other"]
series: ["HW", "Tips"]
description: "구형 IBM 키보드의 "
notion_id: "1961bab9-e3f8-805d-a851-fe877c67eb03"
notion_url: "https://www.notion.so/IBM-1961bab9e3f8805da851fe877c67eb03"
---

# IBM 구형 키보드 펌웨어 변조

> **Summary**
> 구형 IBM 키보드의 

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/26315cb6-5d8a-4dd9-8e5a-57e73d263ed9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGMPKHE3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrHg5VA7E0NiFsml8EtjMMoAAOzDfJDkb7ML6pGUjs0AIgB8I%2BVt6RDUyxqqOJSID9r%2FgZHXPRh8kjDztXZi357i4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMavKtADpsn5c0H%2BSrcAwJWbRC9yOTJI5tf4Hkww4VNflBgD4bZ%2BjX7382hHo71%2FFvTi9Vatq%2B3%2B8gbsJpKwJjgs%2FTDBv24ajaQ9Iuh925Gxcw1fnq5GVxNEfuw5k33B1%2F6IR7unRVVRChbeqtPepu1%2Fv5mMIcRgp%2FEVTzQPHX4RuapsHhoWCd4yM0KJ0NKFI7RzfJG5GzUFWNLSQsE7spSAQIOJ1V266B7CHEHcrNQnMJGcBlSAjt5trj9YljIPk%2BAY6KLwaVuG%2Bt7t0VkQwb6vsjvvJG9DKxiUIrrYFM6qjV9i0Iq66Hm7cbBtJMndpMIWphPEoqCcDC2kpw7lgI6SvYqQhP2fCHsZfYlBkGU7HjEEatqES9gh6p00Gk6dXgjo9AfUVjjTGgpBcbevWa3D5z0WF%2BM87QhmXCimmO%2F6atbav2fw0rFFcFgEs3FCOdN3lyO1fSBs633NpgoNJ%2FhndxlsufD2ufH%2BiMeQCVoul3cMW1yYVjDGqKNWziSfFK8j1YoLHI%2FcUsjFbhQ9Rtb6bTnbYJnABiHUWf%2BV%2FYBVgODK7hahPYsJW6WBIZCxQJdWguO3k2ietTr%2BKnf7uMKRaqPFNikEWDdtwcB%2BYH1kmUwFpZRqBek7wUiMDkVoq3WV2vUmPHiZsa4MNPPh8QGOqUB39dAaiFouDAuQ6ERSrBwZb%2BIQBO7CRVfuSmwMCvz5VVH8Pqdar5yjkkHXRVNnuUwfZJY0HYAjSoS3ioPzhG7WuAr1bXsPu0%2FtpbDoT5YTvh9fOHMwq0hoy6YHTiQty2J80F0dj8VLTvbiH%2B19G67q5NJKBFxQrFQdycBJ%2F3Md45vN3tsF7YxQwfWnIHpXu%2FxqEE%2FoR%2FP3jkRKRtAnBkIWfmUPSFZ&X-Amz-Signature=45514dbd748e2a3cf57136e49995f4280501af2dcb305407f42f6dbf8335c0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://www.reddit.com/r/thinkpad/comments/ondeco/how_to_swap_the_fn_ctrl_keys_on_the_sk8845_sk8835/](https://www.reddit.com/r/thinkpad/comments/ondeco/how_to_swap_the_fn_ctrl_keys_on_the_sk8845_sk8835/)

[https://www.clien.net/service/board/lecture/16863202](https://www.clien.net/service/board/lecture/16863202)

[https://forum.thinkpads.com/viewtopic.php?t=120571](https://forum.thinkpads.com/viewtopic.php?t=120571)

[https://www.clien.net/service/board/use/11988692](https://www.clien.net/service/board/use/11988692)

---

🔗 [https://blog.naver.com/wreg/221854068812](https://blog.naver.com/wreg/221854068812)

🔗 [https://m.blog.naver.com/wreg/220962115688](https://m.blog.naver.com/wreg/220962115688)

---


구형 IBM 키보드에서 `Fn` 키를 `Ctrl` 키로, `Ctrl` 키를 `Win` 키로 재매핑하고자 하시는군요. 이러한 키 재매핑은 Windows 레지스트리의 `Scancode Map` 항목을 수정하여 가능합니다. 그러나 `Fn` 키는 하드웨어적으로 처리되는 경우가 많아, 소프트웨어적으로 재매핑이 어려울 수 있습니다. 따라서, `Ctrl` 키를 `Win` 키로 변경하는 방법을 중심으로 안내해 드리겠습니다.

**1. 레지스트리 편집기 실행:**

- `Win + R` 키를 눌러 실행 창을 열고, `regedit`를 입력하여 레지스트리 편집기를 실행합니다.
**2. 레지스트리 경로 이동:**

- 다음 경로로 이동합니다:
**3. **`**Scancode Map**`** 값 생성:**

- 오른쪽 빈 공간에서 마우스 오른쪽 버튼을 클릭하고, `새로 만들기` > `이진 값`을 선택합니다.
- 새로운 값의 이름을 `Scancode Map`으로 지정합니다.
**4. **`**Scancode Map**`** 값 편집:**

- `Scancode Map` 값을 더블 클릭하여 편집 창을 엽니다.
- 아래의 이진 데이터를 입력합니다:
**5. 레지스트리 편집기 종료 및 시스템 재부팅:**

- 모든 작업을 완료한 후, 레지스트리 편집기를 닫고 시스템을 재부팅합니다.
이러한 과정을 통해 왼쪽 `Ctrl` 키를 `Win` 키로 재매핑할 수 있습니다. 그러나 앞서 언급한 것처럼, `Fn` 키는 하드웨어적으로 처리되는 경우가 많아, 소프트웨어적인 재매핑이 어려울 수 있습니다. 따라서, `Fn` 키의 재매핑은 제조사에서 제공하는 소프트웨어나 펌웨어 업데이트를 통해서만 가능할 수 있습니다.

추가로, 레지스트리를 직접 수정하는 것은 시스템에 영향을 미칠 수 있으므로, 변경 전에 반드시 레지스트리 백업을 진행하시기 바랍니다. 레지스트리 백업 및 복원 방법에 대한 자세한 내용은 [Microsoft의 공식 문서](https://support.microsoft.com/ko-kr/help/322756/how-to-back-up-and-restore-the-registry-in-windows)를 참고하시기 바랍니다.

또한, 키 매핑을 보다 쉽게 수행하기 위해 [SharpKeys](https://github.com/randyrants/sharpkeys)와 같은 타사 유틸리티를 사용할 수도 있습니다. 이러한 도구는 사용자 친화적인 인터페이스를 제공하여 키 매핑 작업을 간소화합니다.

마지막으로, 키 매핑에 대한 시각적인 가이드를 원하신다면, 아래의 영상을 참고하실 수 있습니다:

videoHow to Remap Keyboard Keys in Windows 10/11turn0search11

이 영상은 Windows 10 및 11에서 키 매핑을 변경하는 방법을 단계별로 안내합니다.

위의 방법들을 시도해 보시고, 원하는 키 매핑을 설정하시길 바랍니다. 추가적인 도움이 필요하시면 언제든지 문의해 주세요.

---

# SK-8845 키보드에서 **Fn 키를 Win 키로 맵핑하는 방법**

제공된 정보를 기반으로 PowerToys 제외한 방법을 정리합니다.

---

### 1. **BIOS 설정을 통한 Fn 키 기능 변경**

- **SK-8845 키보드**는 일부 레노버/씽크패드 제품과 유사한 BIOS 설정을 지원할 수 있습니다.
---

### 2. **전용 유틸리티 활용 (레노버 공식 도구)**

- 레노버 제공 **키보드 설정 유틸리티** 사용:
---

### 3. **KeyTweak 또는 레지스트리 편집**

- **KeyTweak** 프로그램으로 Fn 키를 Win 키로 재할당:
---

### 4. **AutoHotkey 스크립트 작성**

- **Fn 키를 Win 키로 변환하는 스크립트** 예시:
---

### 5. **키보드 하드웨어 딥스위치 확인**

- 일체형 키보드의 경우 **딥스위치(DIP Switch)** 로 Fn 키 기능 변경 가능 여부 확인[(출처21)](https://brunch.co.kr/@ruseupi/88).
---

### 요약

🔍 **추천 순서**: BIOS/유틸리티 → KeyTweak → AutoHotkey → 하드웨어 스위치 확인

출처: [(출처3)](https://forum.thinkpads.com/viewtopic.php?t=38326)[(출처5)](https://support.lenovo.com/us/en/solutions/ht074187-how-to-swap-the-fn-function-and-ctrl-control-keyboard-keys-in-bios)[(출처7)](https://www.autohotkey.com/boards/viewtopic.php?t=92676)[(출처8)](https://stackoverflow.com/questions/48986359/identify-and-remap-fn-key-to-win-key)[(출처16)](https://blog.naver.com/PostView.nhn?blogId=mk235&logNo=221192783459)[(출처17)](https://support.lenovo.com/bo/ko/solutions/ht074187)[(출처19)](https://kr.msi.com/support/technical_details/NB_KB_Setting)[(출처20)](https://ko.aliexpress.com/item/1005001474701365.html)[(출처21)](https://brunch.co.kr/@ruseupi/88)

# **Fn 키가 하드웨어 수준에서 작동할 때의 해결 방안**

Fn 키가 **하드웨어/펌웨어 레벨에서 처리**되는 경우, 소프트웨어 기반 재맵핑은 기본적으로 불가능합니다.

하지만 다음 방법으로 우회적 해결을 시도할 수 있습니다.

---

### 1. **BIOS/UEFI에서 Fn ↔ Ctrl 키 스왑 후 Ctrl을 Win 키로 재맵핑**

- **Fn 키를 Ctrl 키로 먼저 변경**:
---

### 2. **키보드 DIP 스위치 활용 (하드웨어 레벨)**

- **DIP 스위치로 Fn 키 동작 변경**:
---

### 3. **외부 컨트롤러 또는 프로그래머블 키보드 활용**

- **커스텀 PCB 또는 컨트롤러 장착**:
---

### 4. **Fn 키 조합 + 다른 키를 Win 키로 대체**

- **AutoHotkey로 Fn 조합 키 설정**:
---

### 5. **물리적 하드웨어 개조 (극단적 방법)**

- **키보드 회로판 직접 수정**:
---

### **요약: 방법별 비교**

🔍 **추천 순서**:

1. **BIOS 설정 확인** → 2. **DIP 스위치 유무 확인** → 3. **Fn 조합 키 대체**
출처: [(출처25)](https://www.reddit.com/r/thinkpad/comments/ondeco/how_to_swap_the_fn_ctrl_keys_on_the_sk8845_sk8835/)[(출처29)](https://www.thinkpads.com/forum/viewtopic.php?t=130672)[(출처34)](https://lobste.rs/s/nl96zm/what_keyboards_do_you_use_do_you_program)[(출처39)](https://support.lenovo.com/bo/ko/solutions/ht074187)


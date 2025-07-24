---
title: "tex shinobi 일본어배열 키맵핑하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["개발환경"]
description: "TEX shinobi의 일본어 배열 키 맵핑 방법에 대해 설명하며, 웹 UI가 일본어 배열을 인식하지 못해 WINDOWS에서는 레지스트리를 수정해야 하고, MAC에서는 카라비너 설정이 필요하다고 안내합니다."
notion_id: "d7660270-d1f6-4065-bf0e-7837c66271a1"
notion_url: "https://www.notion.so/tex-shinobi-d7660270d1f64065bf0e7837c66271a1"
---

# tex shinobi 일본어배열 키맵핑하기

> **Summary**
> TEX shinobi의 일본어 배열 키 맵핑 방법에 대해 설명하며, 웹 UI가 일본어 배열을 인식하지 못해 WINDOWS에서는 레지스트리를 수정해야 하고, MAC에서는 카라비너 설정이 필요하다고 안내합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QDQHMBM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTmWxvjeBehq41Qt5M06aUrNTOzJZvqL9LTOdW1OT1EAIga61IjXohGSQH5CIuBJZUMhEotcdPK1Mp2q3VJWiWx%2FMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAeykxKJYjNke1sYoCrcA04FO1IqpW2Sgr6fiJ3ghCjkCfN%2BO83RodStdkdGdH4R6u5w9il7QUS0pKOkiZrJxZsonmgWy0%2FhxyUwexElC3j8JoiHM526LkQoX84mSO1UA3gr3FfayCZsO%2FZJTtsbHz9bpn1K59AFCrFotomYVlYqYpIXKpvzBC40VvtAm6t2ZRMeJ07U4niRbWhFs15J%2B6Z9PCfuXJtPHlKmf8w7aL3gnE%2BDYwYqj%2BiRU9Ti2s%2F%2FKv6y89uTkowS%2FmY72f9m5azvONrEPknpX9SFVVh7jmIMCTc3u20PPrPzrD9JhVvp5gx5uJ9%2BUkx4EEA5MUahyeRGWWBPl%2BzO6pAV39RCJfsWk5m9RKIuV0cD1Wt2%2FqD%2B7NmfPoc5cqo8Ar2c8%2BY7kKgdtE92JdzWg3L855fL1kJ2ZDbGktLezZXu%2F4W5Zu1qPiLc4uEnDsJYnf6kIfG0DlFQSz9wsIXufE6tYyh1sMACbtx26tM0V4h4wSgAZsNzrXDRwWCOqUYmXokOa5zh2sH%2FAxXdxjMhzvnouEhZHKMSA4sDkCEuUTD3weMeR8ZAz3qwdv9wbbJ7gP2%2FFTczYvglLLGVd0g6%2Fc9WFsO8mggC83bX6XDN6pl7h9fEBzdPDyRdcM76jjuO2sdyMK%2BbiMQGOqUB6TWiF%2BWvqduNx%2B8pC6eJqCh4XvMQ7TDU9EwC1FVTIBtqtD03JD6G9KwN%2FYCZkJJyY82xAQaUJGb5T4BH2l755BdbhUaXXmiidzwjFwBOF8SgBsYM4nCahEuZ4I3PDmBy1xCMqPu8xMGq%2BL2ac%2B100enMsAvYrBSE%2BzPMcK4sRHsGf5ka8fFH8fQ1CuCwpBMQf0pzAInRBA%2Bxjm0f1TFRwu3mNuos&X-Amz-Signature=7567a773b49cd03ce0f7e369e5d065856db0d869df5c4c46798e7b0429b92ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://program.tex.com.tw/shinobi/#layout](https://program.tex.com.tw/shinobi/#layout)

🔗 [https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim](https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim)


### 근데 위에 따라해도 의미없음…

웹 ui는 일본어 특유의 배열을 인식하지 못한다.

WINDOWS는 레지스트리만져야하고

MAC은 카라비너 만져야한다


### MAC - 카라비너 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75927f47-6071-4ccb-947b-e05b83ec407d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QDQHMBM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTmWxvjeBehq41Qt5M06aUrNTOzJZvqL9LTOdW1OT1EAIga61IjXohGSQH5CIuBJZUMhEotcdPK1Mp2q3VJWiWx%2FMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAeykxKJYjNke1sYoCrcA04FO1IqpW2Sgr6fiJ3ghCjkCfN%2BO83RodStdkdGdH4R6u5w9il7QUS0pKOkiZrJxZsonmgWy0%2FhxyUwexElC3j8JoiHM526LkQoX84mSO1UA3gr3FfayCZsO%2FZJTtsbHz9bpn1K59AFCrFotomYVlYqYpIXKpvzBC40VvtAm6t2ZRMeJ07U4niRbWhFs15J%2B6Z9PCfuXJtPHlKmf8w7aL3gnE%2BDYwYqj%2BiRU9Ti2s%2F%2FKv6y89uTkowS%2FmY72f9m5azvONrEPknpX9SFVVh7jmIMCTc3u20PPrPzrD9JhVvp5gx5uJ9%2BUkx4EEA5MUahyeRGWWBPl%2BzO6pAV39RCJfsWk5m9RKIuV0cD1Wt2%2FqD%2B7NmfPoc5cqo8Ar2c8%2BY7kKgdtE92JdzWg3L855fL1kJ2ZDbGktLezZXu%2F4W5Zu1qPiLc4uEnDsJYnf6kIfG0DlFQSz9wsIXufE6tYyh1sMACbtx26tM0V4h4wSgAZsNzrXDRwWCOqUYmXokOa5zh2sH%2FAxXdxjMhzvnouEhZHKMSA4sDkCEuUTD3weMeR8ZAz3qwdv9wbbJ7gP2%2FFTczYvglLLGVd0g6%2Fc9WFsO8mggC83bX6XDN6pl7h9fEBzdPDyRdcM76jjuO2sdyMK%2BbiMQGOqUB6TWiF%2BWvqduNx%2B8pC6eJqCh4XvMQ7TDU9EwC1FVTIBtqtD03JD6G9KwN%2FYCZkJJyY82xAQaUJGb5T4BH2l755BdbhUaXXmiidzwjFwBOF8SgBsYM4nCahEuZ4I3PDmBy1xCMqPu8xMGq%2BL2ac%2B100enMsAvYrBSE%2BzPMcK4sRHsGf5ka8fFH8fQ1CuCwpBMQf0pzAInRBA%2Bxjm0f1TFRwu3mNuos&X-Amz-Signature=a8112ba424b6afc9fc5882cdcb8a19f7612ffb7e51c6d7b3be4aa36e0f3f0ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 윈도우는 레지스트리 만져야합니다…


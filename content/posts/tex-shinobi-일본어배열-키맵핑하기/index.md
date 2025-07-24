---
title: "tex shinobi 일본어배열 키맵핑하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["개발환경"]
description: "TEX Shinobi 키보드의 일본어 배열을 설정하는 방법을 설명하며, Windows에서는 레지스트리를 수정하고, Mac에서는 카라비너를 설정해야 한다고 언급한다."
notion_id: "d7660270-d1f6-4065-bf0e-7837c66271a1"
notion_url: "https://www.notion.so/tex-shinobi-d7660270d1f64065bf0e7837c66271a1"
---

# tex shinobi 일본어배열 키맵핑하기

> **Summary**
> TEX Shinobi 키보드의 일본어 배열을 설정하는 방법을 설명하며, Windows에서는 레지스트리를 수정하고, Mac에서는 카라비너를 설정해야 한다고 언급한다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/46e17bd5-aea2-443c-b91a-32226bf0bf6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGVBMIU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDxm1qKF%2BE10%2Fx3MZd5JEGyhuCLqGuCn9eNAAQ9N%2FsNdQIgQqUICb0IIPyfSZu%2Fx1LAk2A1bKsxV5RjFiBk1iHjsi4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOquMTNnRiTHh0%2FF7SrcA0TBO0IEXbpCBz%2BAE8Uzu7QFxkKyzo1xnVWPWJipFnNvjk4%2Bces2S7Br3CqxUWbsQ0Jf%2FAjeImTJVgnuOL1Iv%2BabaSD6aE6ehKI198svKBHJJaUPxB0KY3mYAN3Go7HJlgc%2F8rnpew3nKZtrAyrq%2B5HjRWHuWOfQNrc%2FHVF3GTfwaMfrDNbkoGt2%2FJYfBufaffO3T2GbPFkIaXa6zjxpCoocy%2Bsku%2B01Gn4r0RkIBh5bAENPthKnI8ij4nsKxFEnsrmIPBpnZxJdK29CGujnkGU2rduhgaH7%2B2GDCZaUVxtMZvoHflJYYtvIIFDudpflrzsfnQQ5N09d8PAipTpJXUfC6uX3SXCKZd2Hlx8t8DTQ6KOtzmj2LrpUwnY8rLf8daiKmQHyUuuCeUqyCDeFvw%2FF83FkpLSVlAMc5dMKLe7dW%2BLSEnO7y3ARxmgGZPDlz5Yx%2BlSu8Wy3fNSEiEgZ6MsSBmP%2By9yaVYKm6TyJ9NbK6NbrxeLQNNdgmbSq%2Fk0nPXKqkPHqL3ftmZbmROdOgtLMqBsuFMQ6EJUGlW4nwnokEHgcj2CUdOEWpFuwoGd0cL0fNpDMEGRtvK25k6ChgLlyHm8RrjqfN3eR7Rjt3AXvod4N8oDl06fGri%2FVMJrPh8QGOqUB5MHbtXt6QgU3wOs8BMiggtWDa8coyz8BMs123kw3HwqBA8HO7WM6vDphKiDECCrR3GpV2IfrcDwtVHuMsw7PvapfMCfy88Xo7gEeGyx%2F0RZ%2F3LoHNAfk6sj%2BrhdZLpJO8impmHCM3u%2BEVG6Ea1R0vTb4kAmGn69Ffu47wi4PrN%2BEyoeiSncWzABSZGcRTS26B3IeBUfxIvCCf3xrWWzvzxQUP1qq&X-Amz-Signature=25ae0b0c3baf4617b2167ffb56501fcf0c91688845a7dad3461e75a1c8aeab4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://program.tex.com.tw/shinobi/#layout](https://program.tex.com.tw/shinobi/#layout)

🔗 [https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim](https://stackoverflow.com/questions/66596354/how-to-map-英数-or-かな-key-common-in-the-jis-layout-of-mac-keyboards-on-vim)


### 근데 위에 따라해도 의미없음…

웹 ui는 일본어 특유의 배열을 인식하지 못한다.

WINDOWS는 레지스트리만져야하고

MAC은 카라비너 만져야한다


### MAC - 카라비너 설정

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/75927f47-6071-4ccb-947b-e05b83ec407d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGVBMIU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDxm1qKF%2BE10%2Fx3MZd5JEGyhuCLqGuCn9eNAAQ9N%2FsNdQIgQqUICb0IIPyfSZu%2Fx1LAk2A1bKsxV5RjFiBk1iHjsi4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOquMTNnRiTHh0%2FF7SrcA0TBO0IEXbpCBz%2BAE8Uzu7QFxkKyzo1xnVWPWJipFnNvjk4%2Bces2S7Br3CqxUWbsQ0Jf%2FAjeImTJVgnuOL1Iv%2BabaSD6aE6ehKI198svKBHJJaUPxB0KY3mYAN3Go7HJlgc%2F8rnpew3nKZtrAyrq%2B5HjRWHuWOfQNrc%2FHVF3GTfwaMfrDNbkoGt2%2FJYfBufaffO3T2GbPFkIaXa6zjxpCoocy%2Bsku%2B01Gn4r0RkIBh5bAENPthKnI8ij4nsKxFEnsrmIPBpnZxJdK29CGujnkGU2rduhgaH7%2B2GDCZaUVxtMZvoHflJYYtvIIFDudpflrzsfnQQ5N09d8PAipTpJXUfC6uX3SXCKZd2Hlx8t8DTQ6KOtzmj2LrpUwnY8rLf8daiKmQHyUuuCeUqyCDeFvw%2FF83FkpLSVlAMc5dMKLe7dW%2BLSEnO7y3ARxmgGZPDlz5Yx%2BlSu8Wy3fNSEiEgZ6MsSBmP%2By9yaVYKm6TyJ9NbK6NbrxeLQNNdgmbSq%2Fk0nPXKqkPHqL3ftmZbmROdOgtLMqBsuFMQ6EJUGlW4nwnokEHgcj2CUdOEWpFuwoGd0cL0fNpDMEGRtvK25k6ChgLlyHm8RrjqfN3eR7Rjt3AXvod4N8oDl06fGri%2FVMJrPh8QGOqUB5MHbtXt6QgU3wOs8BMiggtWDa8coyz8BMs123kw3HwqBA8HO7WM6vDphKiDECCrR3GpV2IfrcDwtVHuMsw7PvapfMCfy88Xo7gEeGyx%2F0RZ%2F3LoHNAfk6sj%2BrhdZLpJO8impmHCM3u%2BEVG6Ea1R0vTb4kAmGn69Ffu47wi4PrN%2BEyoeiSncWzABSZGcRTS26B3IeBUfxIvCCf3xrWWzvzxQUP1qq&X-Amz-Signature=da8fa6929246d3c0616fc05c87247c9c17698d15ab2de0ff4cd6b87b35332a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 윈도우는 레지스트리 만져야합니다…


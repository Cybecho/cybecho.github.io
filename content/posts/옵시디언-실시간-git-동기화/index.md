---
title: "옵시디언 실시간 git 동기화"
date: 2023-09-15T00:00:00.000Z
draft: false
tags: ["obsidian"]
series: ["Tips"]
description: "옵시디언을 실시간으로 git으로 동기화하기 위해, 모바일 기기에 Working Copy를 설치하고, 개인 Github 계정에서 Private Repository를 생성한 후, Obsidian-git 플러그인을 통해 자동으로 push와 pull을 설정한다. 이 과정을 통해 여러 기기에서 문서를 동기화하고, iCloud의 느린 동기화 문제를 해결할 수 있다. Working Copy는 무료로 git commit과 pull이 가능하며, 유료 버전을 통해 push 기능을 사용할 수 있다. 최종적으로, Obsidian, Obsidian-git, Working Copy를 통해 쾌적한 메모 생태계를 구축할 수 있다."
notion_id: "a4df1243-89ff-4750-ad90-c679111dd1d0"
notion_url: "https://www.notion.so/git-a4df124389ff4750ad90c679111dd1d0"
---

# 옵시디언 실시간 git 동기화

> **Summary**
> 옵시디언을 실시간으로 git으로 동기화하기 위해, 모바일 기기에 Working Copy를 설치하고, 개인 Github 계정에서 Private Repository를 생성한 후, Obsidian-git 플러그인을 통해 자동으로 push와 pull을 설정한다. 이 과정을 통해 여러 기기에서 문서를 동기화하고, iCloud의 느린 동기화 문제를 해결할 수 있다. Working Copy는 무료로 git commit과 pull이 가능하며, 유료 버전을 통해 push 기능을 사용할 수 있다. 최종적으로, Obsidian, Obsidian-git, Working Copy를 통해 쾌적한 메모 생태계를 구축할 수 있다.

---


![Image](https://obsidian.md/images/2023-06-logo.png)

🔗 [https://velog.io/@joshuara7235/옵시디언-사용해-보실래요](https://velog.io/@joshuara7235/옵시디언-사용해-보실래요)

> 💡 **목차**
> ---
>
>

---

### 전체적인 플로우 🤖

1. 모바일 기기 (아이패드, 아이폰) 에 `Working Copy` 를 설치한다.
1. 본인 Github 계정에서 `Private Repository` 를 생성한다. (공개하고 싶은 Obsidian Vault 라면 Public 으로해도 무관)
1. 생성된 Repository 를 로컬 PC 에 연동시키고, 로컬 디렉토리에 (문서를 이미 작성했다면) 문서를 옮기고, commit, push 해준다.
1. PC 에서는 `Obsidian-git` 플러그인으로 자동 push, pull 이 되어 연동이 된다.
1. `Working Copy` 를 실행하고, 2.에서 생성했던 Repository 를 clone 한다.
1. Obsidian 에서 모바일 로컬 vault 를 생성한다.
1. `Working Copy` 를 통해 5. 에서 clone 했던 Repository 를 6.에서 생성한 로컬 vault 와 링크시킨다.
1. 모바일 환경에서 `Working Copy` 를 통해 직접 git pull 를 진행해준다.
1. 모바일 환경에서 `Working Copy` 를 통해 직접 git commit, push 을 진행해준다.
---

# 블로그 본문 내용

## 🧊 2. 문제 봉착, 동기화를 위한 그놈의 유료 구독형 서비스..

### Obsidian Sync...💸

- Obsidian 은 로컬 기반 메모 어플이 기본이라, **동기화**를 하기 위해서는 따로 유료 서비스를 구매해야한다.
- 문제는.. ***1회성 결제가 아닌, 구독형***이라는 것이다.😔
- 뭐..? ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 매달 $10 이고, 1년 한번에 결제하면 할인해서 $96 라고..? ㅋㅋㅋㅋ
나는 이정도의 금액을 주고 사용할만한 여유가 없었다..ㅋㅋㅜㅜㅜ

옵시디언 너무너무 좋고 너무너무 활용하기 편하고 사랑스럽지만.. 내 주머니 사정은 그렇지 못하다...ㅠㅠ

하지만 나는 집에서 사용하는 맥북, 회사에서 사용하는 맥북, 내 아이패드와 아이폰에서 동시에 **Obsidian** 을 동기화해서 사용하고 싶었다.

무적권..!!

**이 녀석을 포기할 수 없었다.**

그래서.. 방법을 찾기 시작했다.. 두둥 🔧

### Obsidian-git 과 iCloud 의 환장할 조합 😡

> 내가 구축하고 싶은 환경

### Obsidian Sync 의 대체인 iCloud

찾아보니, 많은 사람들이 `icloud` 로 동기화를 사용하고 있었다.

처음에 나도 별 불편함 없이 동기화가 잘되는 것을 확인하고, 사용하고 있었다.

그랬다.. 그리하였다.. `Obsidian-git` 을 통해 백업을 시도하고, 자동 실시간 `pull, push` 환경을 구축하기 전까지는..

![Image](https://velog.velcdn.com/images/joshuara7235/post/b920ae19-cbf4-4bea-aaa6-63fb031a8921/image.png)

*ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ*..🤬

모바일과 맥북에서 조금이라도 싱크차이가 나는 순간, 바로 ~~**Conflict**~~ 가 되면서 `Icloud` 동기화도, `Github` 에 백업도 되지 않았다.

🚨 ***이것의 근본 원인은 iCloud 의 느린 동기화 속도 였고, 이 동기화 속도로 인해, Github 에서 Conflict 가 나게 되었다.***

나는 포기할 수 없었다.

이 느린 `iCloud` 의 동기화 속도를 개선을 못시킨다면, 다른 대체할 수 있는 방법을 찾아야했다.

### Working Copy 의 발견

여러가지 방법을 찾던 중, `Working Copy` 라는 어플을 발견했다.

### Working Copy - Git client

- 이 어플리케이션은 아이폰과 아이패드에서 `Github Repository` 를 관리할 수 있는 어플이다.(더 자세히는 형상관리 저장소를 불러올 수 있다. `Bitbucket, Gitlab` 도 모두 사용가능하다.)
## 🔑 3. 따라하세요! 실시간 동기화, 안정성 둘다 해결 🎉

> 전체적인 플로우 🤖

위의 단계가 전체적인 환경 구축 시나리오다.

살짝..? 복잡해보이지만, 차근차근 따라오면 어렵지않다.

더군다나, Git 이라는 형상관리 환경에 익숙한 개발자라면 더더욱 손쉽고 이해가 잘될것이다.

> 1. 모바일 기기 (아이패드, 아이폰) 에 Working Copy 를 설치한다.

> 2. 본인 Github 계정에서 Private Repository 를 생성한다.

> 3. 생성된 Repository 를 로컬 PC 에 연동시키고, 로컬 디렉토리에 (문서를 이미 작성했다면) 문서를 옮기고, commit, push 해준다.

> 4. PC 에서는 Obsidian-git 플러그인으로 자동 push, pull 이 되어 연동이 된다.

> 5. Working Copy 를 실행하고, 2.에서 생성했던 Repository 를 clone 한다.

> 6. Obsidian 에서 모바일 로컬 vault 를 생성한다.

> 7. Working Copy 를 통해 5. 에서 clone 했던 Repository 를 6.에서 생성한 로컬 vault 와 링크시킨다.

> 8. 모바일 환경에서 Working Copy 를 통해 직접 git pull 을 진행해준다.

> 9. 모바일 환경에서 Working Copy 를 통해 직접 git commit, push 을 진행해준다.

### 🚨 제한 사항

### Working Copy 도 사실 유료랍니다 허허허허

![Image](https://velog.velcdn.com/images/joshuara7235/post/91a3bca6-9704-4c94-b338-69f089ef6db8/image.PNG)

> 무료버전에서는 git commit과 pull 까지만 가능하고, push 는 하지 못한다.즉, 무료로 사용해도 PC로 작업한 Obsidian 문서는 실시간으로 동기화하여 확인이 가능하다는 것이다. 💡

> 만약, 문서의 수정을 PC 에서 주로 하고, 모바일로는 일정 체크나, 문서 확인만 주로 한다면 무료로 충분히 이용할 수 있다. 🍭모바일로 문서 수정을 해야할 일이 많다면, 유료 결제를 해야하는데 이게 또 생각보다 저렴하다.구독형이 아닌, 평생 1번 결제이며 단돈 3만원!! Obsidian-sync 보다 훨씬 저렴하다.

> 물론, 모바일에서는 직접 pull 을 받아야하고, 문서를 작성 후에 commit 과 push 를 해야한다지만..

## 🍭 결론 : 행복한 Obsidian 생태계 구현 🍉

Obsidian, Obsidian-git, 그리고 Working Copy 를 통해 매우매우 쾌적하고 훌륭한 메모 생태계를 구축했다. 만세! 🎉

Obsidian 을 사용하는 많은 사용자분들이 느꼈던 불편함 1순위가 동기화 였을 것이다. ~~(내 추측..이지만 ㅋㅋㅋ?)~~

국내 Obsidian 커뮤니티인 네이버 카페에서도 가장 많이 내가 본 질문이나 조언은 동기화에 대한 내용이었다.

개발자들에게는 익숙한 형상관리 개념이지만, 개발자가 아닌분들에게는 다소 어려울 수 있겠다.

최대한 친절하게 적어보았으나, 궁금한게 있거나 부족한 점이있다면 댓글 부탁드린다. (최대한 답변해드려봄...🙃)

이 글이 부디 조금이라도 그런 분들에게 도움이 되고, 쾌적한 환경을 구축하는데 도움이 되길 바래본다. 🙏🏻


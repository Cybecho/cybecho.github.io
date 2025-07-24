---
title: "MAC FAT32 USB 4GB 이상 파일 복사하기 "
date: 2023-06-03T00:00:00.000Z
draft: false
tags: ["MAC"]
series: ["Let's MAC!"]
description: "FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, 이를 해결하기 위해 ExFAT으로 포맷하면 맥 환경에서 파일 복사가 가능하다. 디스크 유틸리티를 사용해 USB를 ExFAT으로 초기화하면 4GB 이상의 파일을 복사할 수 있다."
notion_id: "a61b9f8d-76b5-4d1f-82ed-bcda10eb71e8"
notion_url: "https://www.notion.so/MAC-FAT32-USB-4GB-a61b9f8d76b54d1f82edbcda10eb71e8"
---

# MAC FAT32 USB 4GB 이상 파일 복사하기 

> **Summary**
> FAT32로 포맷된 USB는 4GB 이상의 파일 전송에 제한이 있어, 이를 해결하기 위해 ExFAT으로 포맷하면 맥 환경에서 파일 복사가 가능하다. 디스크 유틸리티를 사용해 USB를 ExFAT으로 초기화하면 4GB 이상의 파일을 복사할 수 있다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c69ee83-c209-4a0d-9568-764ebb877f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVERTI3M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFURXQhh7hyIpxnb3O2THo3FGOCm0JnqdNfo7L5rE9IZAiEA%2B4ZFzVuTr5xq5l2ZWvJCkkpJfo6U3bN7RNfpkYsNoLoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPJZEjp4uaFg4jqZaSrcA4XMc%2BtC8lSGiWH00JMwNsB%2F29MheFPcLEadurv7Syidd1otkNLGH9T78vYnBPhxsjsyOBM5m5ZgDv9jOopmOzavmabjxaKJBOTb96FiqNI%2F%2B2iqYJ60Pmt8H1evkvvpDWaQu8om%2F9lWYsbuminYRWkI8WK3i5BaS4pgvmH0fCIFpA15Q8grrNJp0Il0xQWUWXGE6k98to6%2F8BtMbKaM93WOZqLeBy0KSrgTvNC4vYU8TUybpSM9fpmwte7sjyZQEcQuLPjSluo2u0rXwETafm7kVGTwnt3gOeQy7cSMDkM9mFvge5Jaj0Zm4J%2B%2BAdGrXUeppXzOTijJt8j5JZOMgoNNcarEw8ptKu%2BuCYlCx3wSUyApCTldLjx6r%2F5SO423jniJKbEzcSL1wbwpLraPKD3%2BR0eT%2FabHmu%2F%2BFxvAB9jTdj3knWnPnwt4XEhmdDyo1AYGZItn1Eo6A0ZlG%2B%2FT%2F%2BLCRDupobltLq84kFq%2BdnjzjTs7y8hn7Z%2F6vWNwnFJ6HQudNHScbJoQd4TjnFUxLvheGnuua9HZKTmYvIvpI%2B4yre81qRcunnfLbt2b%2B9uZ7tpVbwZ6W4dlhnFtr9l3hrAeTucUyeirFqFMtP%2F3%2Fyec%2Fk5NQ8KX4v0bTdYdMIzPh8QGOqUBEKEz9rwxRwGpSalpVkpzBBzJTQtGYV5yH85v71tqJAgCcsJv4iXolvYFb6uDatLMYyRU50BvCsXkKIddiKW6%2FMfvQg8haXikxTESoq%2B5mo5f4HJ9XXbOW4RHQgVUl1eI1L6xDwjl5JgTBGgAQ8%2FLe07jnUUV0dgzYVskWglfaVCpQ%2BlKT2rCAB7NWj3%2BGHHZ4tfeyw3e13%2F9AIY5KalauWPrF1lL&X-Amz-Signature=4a30d7f55510d2f0ec5343320752db2263390a87e6b8fe0f78d9b8b35e9c6526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


중고로 싸게 들여온 MAC MINI 2018에 Ubunut를 설치하려고 파일을 설치하고 쿠팡에서 적당히 구매한 USB에 파일을 복사하려 했는데 4GB 이상 파일은 복사가 안되는상황발생…


이유를 알아보니 구매한 USB가 FAT32로 포맷되어 그런거였다

(fat32는 2^32 까지 저장 간능하나, 파일 전송간 4GB용량제한을 둠)


FAT32 로 포맷된 USB를 4GB를복사할 수있게 NTFS로 포맷하면 윈도우 및 맥 환경에서 4기가 이상의 파일을 옮길 수 있지만, 나는 맥에서만 활용할 것이기 때문에 ExFAT 포맷으로 초기화하려고합니다. 무엇보다 NTFS 포맷은 맥에서기본적으로제공하지않아서 이것저것 설치할게 많아서 패스….

궁금하면 아래 링크 참고

🔗 [https://groovechance.tistory.com/73](https://groovechance.tistory.com/73)


![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4b0b0173-bac0-4c7a-86e1-5a736f21007d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVERTI3M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFURXQhh7hyIpxnb3O2THo3FGOCm0JnqdNfo7L5rE9IZAiEA%2B4ZFzVuTr5xq5l2ZWvJCkkpJfo6U3bN7RNfpkYsNoLoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPJZEjp4uaFg4jqZaSrcA4XMc%2BtC8lSGiWH00JMwNsB%2F29MheFPcLEadurv7Syidd1otkNLGH9T78vYnBPhxsjsyOBM5m5ZgDv9jOopmOzavmabjxaKJBOTb96FiqNI%2F%2B2iqYJ60Pmt8H1evkvvpDWaQu8om%2F9lWYsbuminYRWkI8WK3i5BaS4pgvmH0fCIFpA15Q8grrNJp0Il0xQWUWXGE6k98to6%2F8BtMbKaM93WOZqLeBy0KSrgTvNC4vYU8TUybpSM9fpmwte7sjyZQEcQuLPjSluo2u0rXwETafm7kVGTwnt3gOeQy7cSMDkM9mFvge5Jaj0Zm4J%2B%2BAdGrXUeppXzOTijJt8j5JZOMgoNNcarEw8ptKu%2BuCYlCx3wSUyApCTldLjx6r%2F5SO423jniJKbEzcSL1wbwpLraPKD3%2BR0eT%2FabHmu%2F%2BFxvAB9jTdj3knWnPnwt4XEhmdDyo1AYGZItn1Eo6A0ZlG%2B%2FT%2F%2BLCRDupobltLq84kFq%2BdnjzjTs7y8hn7Z%2F6vWNwnFJ6HQudNHScbJoQd4TjnFUxLvheGnuua9HZKTmYvIvpI%2B4yre81qRcunnfLbt2b%2B9uZ7tpVbwZ6W4dlhnFtr9l3hrAeTucUyeirFqFMtP%2F3%2Fyec%2Fk5NQ8KX4v0bTdYdMIzPh8QGOqUBEKEz9rwxRwGpSalpVkpzBBzJTQtGYV5yH85v71tqJAgCcsJv4iXolvYFb6uDatLMYyRU50BvCsXkKIddiKW6%2FMfvQg8haXikxTESoq%2B5mo5f4HJ9XXbOW4RHQgVUl1eI1L6xDwjl5JgTBGgAQ8%2FLe07jnUUV0dgzYVskWglfaVCpQ%2BlKT2rCAB7NWj3%2BGHHZ4tfeyw3e13%2F9AIY5KalauWPrF1lL&X-Amz-Signature=6bb3e7f4279823bd88220575d91138e9cfa8430bdadf84d9ffa76479eb5bb682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

디스크 유틸리티 들어가서 포맷할 드라이브 설치하고 우측 위에 `지우기` 클릭

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/27d3e185-9087-4655-ab3c-231c42680477/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVERTI3M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFURXQhh7hyIpxnb3O2THo3FGOCm0JnqdNfo7L5rE9IZAiEA%2B4ZFzVuTr5xq5l2ZWvJCkkpJfo6U3bN7RNfpkYsNoLoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPJZEjp4uaFg4jqZaSrcA4XMc%2BtC8lSGiWH00JMwNsB%2F29MheFPcLEadurv7Syidd1otkNLGH9T78vYnBPhxsjsyOBM5m5ZgDv9jOopmOzavmabjxaKJBOTb96FiqNI%2F%2B2iqYJ60Pmt8H1evkvvpDWaQu8om%2F9lWYsbuminYRWkI8WK3i5BaS4pgvmH0fCIFpA15Q8grrNJp0Il0xQWUWXGE6k98to6%2F8BtMbKaM93WOZqLeBy0KSrgTvNC4vYU8TUybpSM9fpmwte7sjyZQEcQuLPjSluo2u0rXwETafm7kVGTwnt3gOeQy7cSMDkM9mFvge5Jaj0Zm4J%2B%2BAdGrXUeppXzOTijJt8j5JZOMgoNNcarEw8ptKu%2BuCYlCx3wSUyApCTldLjx6r%2F5SO423jniJKbEzcSL1wbwpLraPKD3%2BR0eT%2FabHmu%2F%2BFxvAB9jTdj3knWnPnwt4XEhmdDyo1AYGZItn1Eo6A0ZlG%2B%2FT%2F%2BLCRDupobltLq84kFq%2BdnjzjTs7y8hn7Z%2F6vWNwnFJ6HQudNHScbJoQd4TjnFUxLvheGnuua9HZKTmYvIvpI%2B4yre81qRcunnfLbt2b%2B9uZ7tpVbwZ6W4dlhnFtr9l3hrAeTucUyeirFqFMtP%2F3%2Fyec%2Fk5NQ8KX4v0bTdYdMIzPh8QGOqUBEKEz9rwxRwGpSalpVkpzBBzJTQtGYV5yH85v71tqJAgCcsJv4iXolvYFb6uDatLMYyRU50BvCsXkKIddiKW6%2FMfvQg8haXikxTESoq%2B5mo5f4HJ9XXbOW4RHQgVUl1eI1L6xDwjl5JgTBGgAQ8%2FLe07jnUUV0dgzYVskWglfaVCpQ%2BlKT2rCAB7NWj3%2BGHHZ4tfeyw3e13%2F9AIY5KalauWPrF1lL&X-Amz-Signature=e12e52f6a404b4a95115eb2dc3bc037e897a472d1937578a8922497366856800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`지우기` 에서 포맷 형식을 `ExFAT` 으로 변경 후 지우기를 실행시키면 초기화가 진행되고 4GB 이상 파일이 복사되는것을 확인할 수 있습니다.



![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3c69ee83-c209-4a0d-9568-764ebb877f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVERTI3M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFURXQhh7hyIpxnb3O2THo3FGOCm0JnqdNfo7L5rE9IZAiEA%2B4ZFzVuTr5xq5l2ZWvJCkkpJfo6U3bN7RNfpkYsNoLoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPJZEjp4uaFg4jqZaSrcA4XMc%2BtC8lSGiWH00JMwNsB%2F29MheFPcLEadurv7Syidd1otkNLGH9T78vYnBPhxsjsyOBM5m5ZgDv9jOopmOzavmabjxaKJBOTb96FiqNI%2F%2B2iqYJ60Pmt8H1evkvvpDWaQu8om%2F9lWYsbuminYRWkI8WK3i5BaS4pgvmH0fCIFpA15Q8grrNJp0Il0xQWUWXGE6k98to6%2F8BtMbKaM93WOZqLeBy0KSrgTvNC4vYU8TUybpSM9fpmwte7sjyZQEcQuLPjSluo2u0rXwETafm7kVGTwnt3gOeQy7cSMDkM9mFvge5Jaj0Zm4J%2B%2BAdGrXUeppXzOTijJt8j5JZOMgoNNcarEw8ptKu%2BuCYlCx3wSUyApCTldLjx6r%2F5SO423jniJKbEzcSL1wbwpLraPKD3%2BR0eT%2FabHmu%2F%2BFxvAB9jTdj3knWnPnwt4XEhmdDyo1AYGZItn1Eo6A0ZlG%2B%2FT%2F%2BLCRDupobltLq84kFq%2BdnjzjTs7y8hn7Z%2F6vWNwnFJ6HQudNHScbJoQd4TjnFUxLvheGnuua9HZKTmYvIvpI%2B4yre81qRcunnfLbt2b%2B9uZ7tpVbwZ6W4dlhnFtr9l3hrAeTucUyeirFqFMtP%2F3%2Fyec%2Fk5NQ8KX4v0bTdYdMIzPh8QGOqUBEKEz9rwxRwGpSalpVkpzBBzJTQtGYV5yH85v71tqJAgCcsJv4iXolvYFb6uDatLMYyRU50BvCsXkKIddiKW6%2FMfvQg8haXikxTESoq%2B5mo5f4HJ9XXbOW4RHQgVUl1eI1L6xDwjl5JgTBGgAQ8%2FLe07jnUUV0dgzYVskWglfaVCpQ%2BlKT2rCAB7NWj3%2BGHHZ4tfeyw3e13%2F9AIY5KalauWPrF1lL&X-Amz-Signature=4a30d7f55510d2f0ec5343320752db2263390a87e6b8fe0f78d9b8b35e9c6526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



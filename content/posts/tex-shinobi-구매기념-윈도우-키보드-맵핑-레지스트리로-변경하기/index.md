---
title: "tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기"
date: 2023-11-17T00:00:00.000Z
draft: false
tags: ["WINDOWS", "레지스트리"]
series: ["개발환경"]
description: "윈도우 키보드의 키 맵핑을 레지스트리를 통해 변경하는 방법과 관련된 자료 및 유용한 소프트웨어 링크를 제공합니다."
notion_id: "769bc582-1e7c-4c1b-b2d7-d6754b7fe6b5"
notion_url: "https://www.notion.so/tex-shinobi-769bc5821e7c4c1bb2d7d6754b7fe6b5"
---

# tex shinobi 구매기념 윈도우 키보드 맵핑 레지스트리로 변경하기

> **Summary**
> 윈도우 키보드의 키 맵핑을 레지스트리를 통해 변경하는 방법과 관련된 자료 및 유용한 소프트웨어 링크를 제공합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/9fcb4229-6e6e-402a-8347-4d01b0dfc5b9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQVPMN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDriZzeHDpKEnU9GArQyQeJKAEZyjXoUWSyXEO5GwJwCAiEAt%2BakgxdLzN2FJRm3XYQg6lQsmbjX3SvesAt12hkBZncq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDia12U8iTzJ0%2BZZ6ircAyw2oeyCQMxstr7CIJIIrke0laozS%2Bs6Q6KDQXNiOhWH7sHXrFJOALG1ps5wS3t8jN4NDeAPbDYOXPqxn34Cqkk%2F99LubixebkEfvLnoHN8%2BmPYym56P80W5OzmMMpNzafiOu%2BGJm3qR2%2FtFa9C3%2BKXWMiVvZn%2FbRGJ4NpgLSiErdlzLGVsl9VVt7X3B14CE8MvgZxWwgvTtG3iVKiAD4ypaW3hUct2hHZi0FPd7WeYvkWbkQLZJpZdY%2BlVKFd1xzUc3z8UBN5PL1RpaaqeaEFfF%2FASp0RRi1LY8ADYa4vDjsm3Nh4nlCTXcPGSbT5vdF0hFTqKGo6u5nV2QyWQUYGOK0owiTjKoDtJl%2BnWY9Ng9N6QoC69686AqS6QtdGKH5pYB0xldM4kIs4p8Noz6zRLNBE4RdP4%2FNHOOgZr9i9TF95RMEMJLIzuH%2BQHCebUaT885B7ZzQfMXcifBpjBNEx3C0a8B1VSglGIVhUHGd8qb8Me8%2BtGVQODwif%2BNFcDYTKrrY72qgqxwlp0qidUuKo7q2tDN%2BktYdsG%2Fe25YA%2FL%2BwTmvq3IuD%2BhRwF0i5wijqAdh9lyanhYIT%2BjWxgLJ64D5g%2By0GrRiSEQGeHcJQv3THMQsLbx%2ByBFgp%2BH3MJrQh8QGOqUBg%2FUIj%2BtYRRHt%2Fp%2FFbPX7zC5EkfTT6DB6LLaPVqYDOW%2BPrBlV4tpy5fJbPIgQWlsFMu219qClRSnSNDu4Q%2B2zsyaKyheFtdzLkgGF0fnbFecaWrbXl1AaociA04j7l0EnqAGhC20tNXcgDinUv8M9mZ96auRASYLYlX4HWS3MWqWVWSkXLz6LV5HfS6utOwfDG%2F39woLNTAsDV2ZejaqRVrfYDRgZ&X-Amz-Signature=28489ea70b7e9c85f04981b8770f10f9b6447da81fce68778788aaad9a1c8804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/11cd1f3c-70bb-4ab7-9e2c-2f1936e43f10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQVPMN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDriZzeHDpKEnU9GArQyQeJKAEZyjXoUWSyXEO5GwJwCAiEAt%2BakgxdLzN2FJRm3XYQg6lQsmbjX3SvesAt12hkBZncq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDia12U8iTzJ0%2BZZ6ircAyw2oeyCQMxstr7CIJIIrke0laozS%2Bs6Q6KDQXNiOhWH7sHXrFJOALG1ps5wS3t8jN4NDeAPbDYOXPqxn34Cqkk%2F99LubixebkEfvLnoHN8%2BmPYym56P80W5OzmMMpNzafiOu%2BGJm3qR2%2FtFa9C3%2BKXWMiVvZn%2FbRGJ4NpgLSiErdlzLGVsl9VVt7X3B14CE8MvgZxWwgvTtG3iVKiAD4ypaW3hUct2hHZi0FPd7WeYvkWbkQLZJpZdY%2BlVKFd1xzUc3z8UBN5PL1RpaaqeaEFfF%2FASp0RRi1LY8ADYa4vDjsm3Nh4nlCTXcPGSbT5vdF0hFTqKGo6u5nV2QyWQUYGOK0owiTjKoDtJl%2BnWY9Ng9N6QoC69686AqS6QtdGKH5pYB0xldM4kIs4p8Noz6zRLNBE4RdP4%2FNHOOgZr9i9TF95RMEMJLIzuH%2BQHCebUaT885B7ZzQfMXcifBpjBNEx3C0a8B1VSglGIVhUHGd8qb8Me8%2BtGVQODwif%2BNFcDYTKrrY72qgqxwlp0qidUuKo7q2tDN%2BktYdsG%2Fe25YA%2FL%2BwTmvq3IuD%2BhRwF0i5wijqAdh9lyanhYIT%2BjWxgLJ64D5g%2By0GrRiSEQGeHcJQv3THMQsLbx%2ByBFgp%2BH3MJrQh8QGOqUBg%2FUIj%2BtYRRHt%2Fp%2FFbPX7zC5EkfTT6DB6LLaPVqYDOW%2BPrBlV4tpy5fJbPIgQWlsFMu219qClRSnSNDu4Q%2B2zsyaKyheFtdzLkgGF0fnbFecaWrbXl1AaociA04j7l0EnqAGhC20tNXcgDinUv8M9mZ96auRASYLYlX4HWS3MWqWVWSkXLz6LV5HfS6utOwfDG%2F39woLNTAsDV2ZejaqRVrfYDRgZ&X-Amz-Signature=ea7aa4937ed9dc87cef37a71c30aa8d481bc2c5ad1778785e25be0131d06bfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🔗 [https://gigglehd.com/gg/soft/12015825](https://gigglehd.com/gg/soft/12015825)

🔗 [https://www.passmark.com/products/keytest/](https://www.passmark.com/products/keytest/)

🔗 [https://www.majorgeeks.com/files/details/switch_hitter.html](https://www.majorgeeks.com/files/details/switch_hitter.html)


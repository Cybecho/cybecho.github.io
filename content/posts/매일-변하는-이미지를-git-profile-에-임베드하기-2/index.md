---
title: "매일 변하는 이미지를 git profile 에 임베드하기 2"
date: 2023-03-26T00:00:00.000Z
draft: false
tags: ["Git", "ubuntu", "Python", "GCP"]
series: ["Git", "진심글쓰기"]
description: "파이썬을 설치하고 beautifulsoup4를 이용해 웹사이트에서 이미지 URL을 크롤링하는 방법을 설명합니다. 기존 코드를 수정하여 존재하지 않는 URL 문제를 해결하고, 크롤링한 이미지 URL을 리스트화하여 README.md에 임베드하는 과정을 다룹니다. 또한, crontab을 사용하여 스크립트를 스케줄링하는 방법도 포함되어 있습니다."
notion_id: "89a99397-fa52-4970-a8db-c161bfaaa5a9"
notion_url: "https://www.notion.so/git-profile-2-89a99397fa524970a8dbc161bfaaa5a9"
---

# 매일 변하는 이미지를 git profile 에 임베드하기 2

> **Summary**
> 파이썬을 설치하고 beautifulsoup4를 이용해 웹사이트에서 이미지 URL을 크롤링하는 방법을 설명합니다. 기존 코드를 수정하여 존재하지 않는 URL 문제를 해결하고, 크롤링한 이미지 URL을 리스트화하여 README.md에 임베드하는 과정을 다룹니다. 또한, crontab을 사용하여 스크립트를 스케줄링하는 방법도 포함되어 있습니다.

---


![Image](https://github.blog/wp-content/uploads/2020/08/87471037-50ad3c80-c5e3-11ea-9f1b-7963f4615b28.png?fit=1200,630)

> 📚 **목차**
>

> ⚠️ **[매일 변하는 이미지를 git profile 에 임베드하기 1](https://www.notion.so/c2f950c741a8429b9d7bdfc4cc470d67) **
> 위 게시물과 연결되는 내용입니다.
>
> 먼저 이 게시물 먼저 읽고 와주세요.
>
>


<details>
<summary>AI도움!</summary>

> 💡 **[https://www.random-art.org/](https://www.random-art.org/) 이 웹사이트에 .jpg 가 포함된 url을 전부 리스트로 가져오는 방법**
> Beautiful Soup 또는 Scrapy와 같은 웹 스크래핑 도구를 사용하여 웹사이트 [https://www.random-art.org/에서](https://www.random-art.org/%EC%97%90%EC%84%9C) .jpg 확장자를 가진 모든 URL을 추출할 수 있습니다. 다음은 Python에서 Beautiful Soup을 사용하는 예제 코드입니다.
>
> ```python
> import requests
> from bs4 import BeautifulSoup
>
> url = "https://www.random-art.org/"
>
> response = requests.get(url)
> soup = BeautifulSoup(response.content, 'html.parser')
>
> for link in soup.find_all('a'):
>     href = link.get('href')
>     if href.endswith('.jpg'):
>         print(href)
> ```
>
>
> 이 코드는 웹사이트에 GET 요청을 보낸 다음 Beautiful Soup을 사용하여 HTML 응답에서 모든 앵커 태그(<a>)를 추출합니다. 각 앵커 태그에 대해 href 속성이 '.jpg'로 끝나는지 확인하고 그럴 경우 URL을 인쇄합니다.
>
>

> 💡 **[https://www.random-art.org/?page=1&liked=0&sort=time](https://www.random-art.org/?page=1&liked=0&sort=time) 이 사이트의 모든 페이지에 포함된 모든 .jpg URL을 나열하는 방법입니다.**
> ```python
> import requests
> from bs4 import BeautifulSoup
>
> base_url = 'https://www.random-art.org/?page='
> jpg_urls = []
>
> # Loop through all pages
> for page in range(1, 10):  # Change 10 to the number of pages you want to scrape
>     url = base_url + str(page) + '&liked=0&sort=time'
>     response = requests.get(url)
>     soup = BeautifulSoup(response.content, 'html.parser')
>
>     # Find all img tags with .jpg extension
>     images = soup.find_all('img', src=lambda src: src.endswith('.jpg'))
>
>     # Extract the URLs and append to the list
>     for img in images:
>         jpg_urls.append(img['src'])
>
> # Print the list of .jpg URLs
> print(jpg_urls)
> ```
>
> 이 코드는 URL의 페이지 번호를 변경하여 웹 사이트 페이지를 순환한 다음 BeautifulSoup을 사용하여 페이지 소스에서 .jpg 확장자를 가진 img 태그를 모두 찾습니다. 이러한 이미지의 URL이 추출되어 목록에 추가됩니다. 마지막으로 모든 .jpg URL 목록이 인쇄됩니다. 코드는 처음 9페이지만 스크랩합니다. for 루프에서 range 매개변수를 변경하여 스크랩할 페이지 수를 변경할 수 있습니다.
>
>

> 💡 **텍스트가 저장될때마다 문자열 앞에 [https://www.random-art.org](https://www.random-art.org/) 가 포함된 상태로 .txt에 저장되었으면 좋겠습니다.**
> ```python
> import requests
> from bs4 import BeautifulSoup
>
> base_url = 'https://www.random-art.org/?page='
> jpg_urls = []
>
> # Loop through all pages
> for page in range(1, 5):  # Change 10 to the number of pages you want to scrape
>     url = base_url + str(page) + '&liked=0&sort=time'
>     response = requests.get(url)
>     soup = BeautifulSoup(response.content, 'html.parser')
>
>     # Find all img tags with .jpg extension
>     images = soup.find_all('img', src=lambda src: src.endswith('.jpg'))
>
>     # Extract the URLs and append to the list
>     for img in images:
>         jpg_urls.append('https://www.random-art.org/' + img['src'])
>
> # Save the list of .jpg URLs to a text file
> with open('random-art-urls.txt', 'w') as f:
>     f.write('\n'.join(jpg_urls))
> ```
>
> 하지만 지금은 [https://www.random-art.org/img/small/417864.jpg](https://www.random-art.org/img/small/417864.jpg) 형식으로 txt에 저장됩니다. 저는 small이라는 글자를 large로 변경한 상태로 txt파일에 저장하고싶습니다.
>
> ```python
> import requests
> from bs4 import BeautifulSoup
>
> base_url = 'https://www.random-art.org/?page='
> jpg_urls = []
>
> # Loop through all pages
> for page in range(1, 5):  # Change 10 to the number of pages you want to scrape
>     url = base_url + str(page) + '&liked=0&sort=time'
>     response = requests.get(url)
>     soup = BeautifulSoup(response.content, 'html.parser')
>
>     # Find all img tags with .jpg extension
>     images = soup.find_all('img', src=lambda src: src.endswith('.jpg'))
>
>     # Extract the URLs, replace "small" with "large", and append to the list
>     for img in images:
>         jpg_url = img['src'].replace('/small/', '/large/')
>         jpg_urls.append(jpg_url)
>
> # Save the list of .jpg URLs to a txt file
> with open('random-art-large.txt', 'w') as file:
>     for url in jpg_urls:
>         file.write('https://www.random-art.org' + url + '\n')
>
> print('File saved successfully.')
> ```
>
>

> 💡 **crontab -e에서 py 파일 실행이 안됩니다**
> cron을 통해 예약할 때 스크립트가 올바르게 실행되지 않는 몇 가지 이유가 있을 수 있습니다.
>
> Cron이 Python 인터프리터를 찾지 못할 수 있습니다. 스크립트 명령 앞에 crontab 파일에서 Python 인터프리터의 전체 경로를 추가합니다. 
>
> `→ 예: /usr/bin/python3 /home/thquddnr123/AutoCommit/HelloZOOO/writeUrl.py`
> 작업 디렉토리가 올바르게 설정되지 않았을 수 있습니다. Cron이 수동으로 실행한 동일한 디렉토리에서 스크립트를 실행하지 않을 수 있습니다. 이 문제를 해결하려면 crontab 파일에서 스크립트의 작업 디렉토리를 지정하십시오. 
>
> `→ 예: * 7 * * * cd /home/thquddnr123/AutoCommit/HelloZOOO && /usr/bin/python3 writeUrl.py`
>
>
> 스크립트가 자동으로 실패할 수 있습니다. 표준 출력 및 오류를 파일로 리디렉션하여 오류를 디버깅합니다. 
>
> `→ 예: * 7 * * * cd /home/thquddnr123/AutoCommit/HelloZOOO && /usr/bin/python3 writeUrl.py >> /tmp/writeUrl.log 2>&1`
>
>
>

</details>


---
title: "유니티 로그라이크 13"
date: 2023-03-12T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 로그라이크 클론 게임 개발"]
description: "UI(HUD) 구성 방법, 해상도에 상관없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추는 방법, 경험치 바 제작을 위한 슬라이더 활용, string.Format() 사용법, 플레이어의 위치를 따라가는 체력바 생성 방법에 대해 설명합니다."
notion_id: "0637370b-b32e-49d3-821d-ba6c24de5279"
notion_url: "https://www.notion.so/13-0637370bb32e49d3821dba6c24de5279"
---

# 유니티 로그라이크 13

> **Summary**
> UI(HUD) 구성 방법, 해상도에 상관없이 UI 텍스트 설정, UI 캔버스 크기를 카메라에 맞추는 방법, 경험치 바 제작을 위한 슬라이더 활용, string.Format() 사용법, 플레이어의 위치를 따라가는 체력바 생성 방법에 대해 설명합니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/14e57743-12e7-49d9-8e69-4ce0a583b327/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3W7VL4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICaLzbd9ODoVQRwbyfcAJDvwPONwSA0mbzOVz1CdS2uEAiBRXoiFx8A4WhnwzL0dlnhoylG17TBqM3FPk0mJvsOwjyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM5iR2YctVXcy5DT41KtwDw2gmGOY3B1YZe6uuAKpXy8dJwQdHWsXi6CzvHPn0yrQ8GbPYSIIeJHOb7TEYCmY32LgG3pL7cVane0usW%2BJ1SJBUCGUDNj%2F5iRtSfz1ceKlUrHTqF29E54nLM0AbPF8ftDO2DRq0Ir7dR8LBtwqcdchMa%2Bhf6V0%2Bvc8vynxPpKfuaxM4qFUxTOUDPlu4PbwFCrz6o%2BDfviHHEetm3CIluLJGHZPvbU8sYniMXciE61Th%2FbAqNyu4BMYTs22B2I6uBAWvok2dQjaGtRh5JW%2BgXsQcAW3tyBOiohRZgiiahDQPcAKe69IcZoW2UHta4kTls%2Bp7kVkPsqGUCBShGxAp%2F4XedACS59dOS7zQG8mS1o0G91OEFIQqMrw0syOsx5qKVssLk%2F5eaURrAwd5mYIPauZVYP9cQWJrYc7Ln1nRvDubaJanVKQuFRMHNSR9SKKHpH0GZhHhpOVUIa5jaxR7n2tXW9TxOToTStvnuFq5Wt2I7sZeunU2T3ktBEHfTXaP5GT%2B4ZHl4Ogzh9ZHaf11thCIZele0UM74gNIuGnujNC2sTnun8e%2F6mC7apxKd5AvsQ%2FEsF6%2FJG3RrUPonFUixFxxcbLkc6Yp79iCnYOqvdzGyD96w0EXeZGoX7Awm%2FWHxAY6pgFcVzfjzx6e2yUn5BMTmttUrt60elPp7taXycnTicGfh5uerqWNdDCjXCft6io%2F%2FN8nRmmLSIFWhPEXdMpfszWBA7vsOzp3h75iaCfEwAiRBk0d%2BW4LCmEWG2L0U%2FMtr3%2FpaaodqwqOIOHh7XWwEFBklO2oAcOANZiin9XTXuVORxMrDCC0IpjBql8vVGLJe1f75CJRAFrraJT1WoicyTEhtOBfk8Ip&X-Amz-Signature=5b23291a0a49670a6f9b97544bcb8d15474ffd98f35c84f12a5d4433002d353e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🎥 [동영상 보기](https://www.youtube.com/watch?v=ip0xffLSWlk&list=PLO-mt5Iu5TeZF8xMHqtT_DhAPKmjF6i3x&index=13)

> 🔥 **캔버스를 생성하면 초반에 크기가 무지하게 큰데. 렌더보드에서 Camera로 변경해주고 렌더카메라를 Main Camera로두면 UI의 크기가 카메라에 맞게 설정됩니다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b775ab76-1f2c-4aa1-b247-eba6135409d6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM425Q43%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCOOZY%2F4j4qsVx1gKeBjS0AS9hcgGIayia%2Blb4doHyV0gIge3f7EHIJ7du56fqZOn9E6403hfAEXi6lXlvpwpYNIXUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCda7vV6a77PQYJNIyrcA%2B72zgXRsQo8ssaJHc%2BppIOQCMZd2Qs%2BVQn7vmFKhGvVLJ8l1P1tqJiouRRtvNC5htXfXgspu%2FZwdP1ya5RMo0haa%2FjhGj4VMwNwxgw4Dnbu8TgNVOLwvfuTG7ga85gJwIfBAP7rPYlh%2Fvu7J8HFHCuBd5lS2ijJmKYV6fBfIQpOOOAWu20yamyLUQqPSng0jT7H2C0DY3%2FX6kFdathfZTCXdu%2FS5tWxRbLsJyZniCGPvYGwMV18Ocsi5op%2FuNj8CCvYfg9oHVwh6keby7jKBBUpUJloJ0MvbQNrE2gH14OEWvr6earEICX55xOeKFjwK7naU7Ttk5kBCLHYm4Ah8pWLjQhoNHkXw6oiX4YIRH76Xv%2Bcgz7HGjV7GDphhULBp4%2FUnuPBJ7x7VY6Vd9V86Z8lvjhjcQQh3x2iGj7Z5JIYT0dg6L3TkLzSqceOzyw5Ov5P8gQmgkXb6sR91FncwPmHGUS%2FRUzwzjJQxWPou3fzYximPwxCWDDpbAxxA9Dx2rI7lFnCzlxzRV9tBnDA8kkfR%2BPi7OB0IbAacgfI30DrZzV6aoi%2BMYzMH0ewuT1SviWjW3rZo%2FHN7T1hrjm%2BEnVLAipDVX2ZS%2Fv10nqSlhun0qEEdHMSFHOtTmsaMML1h8QGOqUBT70RJMu0LVKKLSs4j1z%2FMtvpaphRKdisIyF1bdqVOdbhesG%2BXkxyGWksx5m%2FirzKivM4xgI%2Bx%2FUC3ADroE5cRmndoZUrhzmNFrusupVB9rdlQIY1pWKp8bQzfUiI%2FFUfzfgixFQwPJ9sKLWatIssLSWZEZKsg9BAKl%2BwwXpvDgdvTKlmEAfWlhTBR1ziYLczwxDOLDSY1W11qBGimYlkdDz3ALW2&X-Amz-Signature=2f38b1d24e7ea98638f6e6355bc2a4ba5c47542946db505953d3b3fb8160c373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/2d3b4c1e-ee78-4c61-88e1-0b443978de64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM425Q43%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCOOZY%2F4j4qsVx1gKeBjS0AS9hcgGIayia%2Blb4doHyV0gIge3f7EHIJ7du56fqZOn9E6403hfAEXi6lXlvpwpYNIXUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCda7vV6a77PQYJNIyrcA%2B72zgXRsQo8ssaJHc%2BppIOQCMZd2Qs%2BVQn7vmFKhGvVLJ8l1P1tqJiouRRtvNC5htXfXgspu%2FZwdP1ya5RMo0haa%2FjhGj4VMwNwxgw4Dnbu8TgNVOLwvfuTG7ga85gJwIfBAP7rPYlh%2Fvu7J8HFHCuBd5lS2ijJmKYV6fBfIQpOOOAWu20yamyLUQqPSng0jT7H2C0DY3%2FX6kFdathfZTCXdu%2FS5tWxRbLsJyZniCGPvYGwMV18Ocsi5op%2FuNj8CCvYfg9oHVwh6keby7jKBBUpUJloJ0MvbQNrE2gH14OEWvr6earEICX55xOeKFjwK7naU7Ttk5kBCLHYm4Ah8pWLjQhoNHkXw6oiX4YIRH76Xv%2Bcgz7HGjV7GDphhULBp4%2FUnuPBJ7x7VY6Vd9V86Z8lvjhjcQQh3x2iGj7Z5JIYT0dg6L3TkLzSqceOzyw5Ov5P8gQmgkXb6sR91FncwPmHGUS%2FRUzwzjJQxWPou3fzYximPwxCWDDpbAxxA9Dx2rI7lFnCzlxzRV9tBnDA8kkfR%2BPi7OB0IbAacgfI30DrZzV6aoi%2BMYzMH0ewuT1SviWjW3rZo%2FHN7T1hrjm%2BEnVLAipDVX2ZS%2Fv10nqSlhun0qEEdHMSFHOtTmsaMML1h8QGOqUBT70RJMu0LVKKLSs4j1z%2FMtvpaphRKdisIyF1bdqVOdbhesG%2BXkxyGWksx5m%2FirzKivM4xgI%2Bx%2FUC3ADroE5cRmndoZUrhzmNFrusupVB9rdlQIY1pWKp8bQzfUiI%2FFUfzfgixFQwPJ9sKLWatIssLSWZEZKsg9BAKl%2BwwXpvDgdvTKlmEAfWlhTBR1ziYLczwxDOLDSY1W11qBGimYlkdDz3ALW2&X-Amz-Signature=9e6a8d316fca3090f966aaa8439a574b6eb35ebd59b92d3cab0b3451ef52fb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> 어떤 해상도든 같은 스케일을 가지는 옵션은 다음과 같습니다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f881a101-027b-4792-9e5b-9a124a3247e9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM425Q43%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCOOZY%2F4j4qsVx1gKeBjS0AS9hcgGIayia%2Blb4doHyV0gIge3f7EHIJ7du56fqZOn9E6403hfAEXi6lXlvpwpYNIXUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCda7vV6a77PQYJNIyrcA%2B72zgXRsQo8ssaJHc%2BppIOQCMZd2Qs%2BVQn7vmFKhGvVLJ8l1P1tqJiouRRtvNC5htXfXgspu%2FZwdP1ya5RMo0haa%2FjhGj4VMwNwxgw4Dnbu8TgNVOLwvfuTG7ga85gJwIfBAP7rPYlh%2Fvu7J8HFHCuBd5lS2ijJmKYV6fBfIQpOOOAWu20yamyLUQqPSng0jT7H2C0DY3%2FX6kFdathfZTCXdu%2FS5tWxRbLsJyZniCGPvYGwMV18Ocsi5op%2FuNj8CCvYfg9oHVwh6keby7jKBBUpUJloJ0MvbQNrE2gH14OEWvr6earEICX55xOeKFjwK7naU7Ttk5kBCLHYm4Ah8pWLjQhoNHkXw6oiX4YIRH76Xv%2Bcgz7HGjV7GDphhULBp4%2FUnuPBJ7x7VY6Vd9V86Z8lvjhjcQQh3x2iGj7Z5JIYT0dg6L3TkLzSqceOzyw5Ov5P8gQmgkXb6sR91FncwPmHGUS%2FRUzwzjJQxWPou3fzYximPwxCWDDpbAxxA9Dx2rI7lFnCzlxzRV9tBnDA8kkfR%2BPi7OB0IbAacgfI30DrZzV6aoi%2BMYzMH0ewuT1SviWjW3rZo%2FHN7T1hrjm%2BEnVLAipDVX2ZS%2Fv10nqSlhun0qEEdHMSFHOtTmsaMML1h8QGOqUBT70RJMu0LVKKLSs4j1z%2FMtvpaphRKdisIyF1bdqVOdbhesG%2BXkxyGWksx5m%2FirzKivM4xgI%2Bx%2FUC3ADroE5cRmndoZUrhzmNFrusupVB9rdlQIY1pWKp8bQzfUiI%2FFUfzfgixFQwPJ9sKLWatIssLSWZEZKsg9BAKl%2BwwXpvDgdvTKlmEAfWlhTBR1ziYLczwxDOLDSY1W11qBGimYlkdDz3ALW2&X-Amz-Signature=22397eaa67f1d582bde1ca08c61e6d814ed9f5e6ce13672e24a4aa0cc8f10e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/5075fb59-597b-47a6-ba13-5f990ac5842b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM425Q43%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCOOZY%2F4j4qsVx1gKeBjS0AS9hcgGIayia%2Blb4doHyV0gIge3f7EHIJ7du56fqZOn9E6403hfAEXi6lXlvpwpYNIXUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCda7vV6a77PQYJNIyrcA%2B72zgXRsQo8ssaJHc%2BppIOQCMZd2Qs%2BVQn7vmFKhGvVLJ8l1P1tqJiouRRtvNC5htXfXgspu%2FZwdP1ya5RMo0haa%2FjhGj4VMwNwxgw4Dnbu8TgNVOLwvfuTG7ga85gJwIfBAP7rPYlh%2Fvu7J8HFHCuBd5lS2ijJmKYV6fBfIQpOOOAWu20yamyLUQqPSng0jT7H2C0DY3%2FX6kFdathfZTCXdu%2FS5tWxRbLsJyZniCGPvYGwMV18Ocsi5op%2FuNj8CCvYfg9oHVwh6keby7jKBBUpUJloJ0MvbQNrE2gH14OEWvr6earEICX55xOeKFjwK7naU7Ttk5kBCLHYm4Ah8pWLjQhoNHkXw6oiX4YIRH76Xv%2Bcgz7HGjV7GDphhULBp4%2FUnuPBJ7x7VY6Vd9V86Z8lvjhjcQQh3x2iGj7Z5JIYT0dg6L3TkLzSqceOzyw5Ov5P8gQmgkXb6sR91FncwPmHGUS%2FRUzwzjJQxWPou3fzYximPwxCWDDpbAxxA9Dx2rI7lFnCzlxzRV9tBnDA8kkfR%2BPi7OB0IbAacgfI30DrZzV6aoi%2BMYzMH0ewuT1SviWjW3rZo%2FHN7T1hrjm%2BEnVLAipDVX2ZS%2Fv10nqSlhun0qEEdHMSFHOtTmsaMML1h8QGOqUBT70RJMu0LVKKLSs4j1z%2FMtvpaphRKdisIyF1bdqVOdbhesG%2BXkxyGWksx5m%2FirzKivM4xgI%2Bx%2FUC3ADroE5cRmndoZUrhzmNFrusupVB9rdlQIY1pWKp8bQzfUiI%2FFUfzfgixFQwPJ9sKLWatIssLSWZEZKsg9BAKl%2BwwXpvDgdvTKlmEAfWlhTBR1ziYLczwxDOLDSY1W11qBGimYlkdDz3ALW2&X-Amz-Signature=9692398fc224a013aeab1bea38cbe900982c7096fa3c68673af2348958e739ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **HUD : Head Up Display 구성**
> 일단 HUD.cs 를 만들어줍시다
>
> > 🔥 **Ctrl + Space를 하면 추천 자동완성을 알려줍니다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e05fbc1c-2421-441c-9cd8-5a73037b32ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267TNPQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD1RjbnKLqeXsO3e04rKRnMzY62r8XGvD7kSaD28FNhBQIgLDICcBDTBdw2xVVq3hWj6%2Bfo87vPeS%2FDavxSdvgPHnMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIl2qoUshIckRWeNECrcA9uhyQM4e4u42NLfOmxCYkuwEHkMDfM9iofDqdvZDdMJFQ7hEbAbajwQey7D%2B0dxgA43LkrHiiYzHZO9tQz85AJeWWLdGnvctsqW5ePdW0FSUoDgA1sdOGhpm5WisB3He8t%2FOhabuax9cY8wqs7xP1d%2FBCDfYFHDICnQZiUIqf8D9lbMq5By%2FSyYtBQQJUEKQLfjlc%2F%2Bbs6n84b%2FAZ4tlKAbBNAKmC5ZM6AnoVnVI4jTY7FMgFQbMgty1lgBDRNNsfAQU2HNqWzsCYcbSP%2FBZiSwbLMPdi1JfR%2BvFDEiP%2Fdm15WracYNld4kmh7pQsXVR6Hh5y%2BZEEh3IdvqpoZ8XjQVFQb%2FL4KiWoUqgp5EvQf2Qgcd5c3GLawjPgRmYqc6ywYek0FqYwqxn%2FUuw2AsLlc4Vwwus7%2FSAsPDSDpbjFPtadLdNcmJ1Tak0nuMduFhhNqMAwBTR0qJbzlPKpVs%2BRNJi6Sa9dJNX%2F5hazlH6avQgIZPkadeRV3UKhMRCleCgWucC8C0avU2TOO9WlAd1EqLG4bv7bcCqQ5kzWZh28YvAFJ8DY5%2BHJoaysrlHJzkzRl8ZNthHzRUv3IjlKfDzxCyoc%2FOI3eiqSHVGix5H%2F%2FAFca0IUhkccURbfpnMIH2h8QGOqUBOkdzf4xumGbU0nFZN5Y2CALD67oBZxMWkf9iwun3J2VFOeBWiNgR%2BBq4pqX5KG9VSQwK36JhO4kkS7AEM0HYc74RMJx2Uzydu6Hfc8gj6asi%2BysqQk4DcAUorOuhNbi19FiYsx84nGM%2FI57Ud3Jeokpsf7Bu1y1tVEidN8j%2FG20P%2FoFPYyU%2Ft2g9UKJlr0%2FblHO9eDmUutldaKhBwVj%2FgBI9fmUA&X-Amz-Signature=9e9ecdccff3395a884f0a0fc5eb065d1fe6cfc2362e8101ece9bd31a427b0fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
>

> 🔥 **slider로 경험치 UI바를 만들어봅시다**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8ace7af3-e4ee-42df-9685-07bee469eb43/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMM4IFZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBt%2FlPRbzD86TdavXkctvIzOACND9%2BmB6vS5Fu5xVJz7AiAbhCKPID9UWg4JkCsi%2Ba%2Fcp8IMHaFeEsTS7D2StbqxLCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8ZO0pQT%2FgKRodTDAKtwDemG64vymrBIbqoA40GXovc7KaLCgkCRRuSlt3qrhr2IhYzLRZV13JKSRIRnoOUUB%2Fm13lQX4WGcSzx1%2BnKQftlm0rMR%2Bt9kjk95x7olAMU5NX8ZSAwx%2FhmFVbR4KHl05IG8dQAcajKWNnS7pgEyKGIPKJJ1Efx3nNd9hWULB5nr2PGacQVJcYxXFcMWJY253bDq5LEsKRiH9WvYAerq9h8XTqnU%2B4yBKsJtece4a%2F2OGWS0RgrLjXjE2g9TILyvUgrB9lTzE%2FRHAn6CMwkP7VwNjdQKUZDjLk%2FTwPojoovL%2FYeKYcDRY4%2Fw%2B%2F2udUtCyUmq8Qdaa686UWu5JdJ9pDspuiqt6ifr0mQHNtcKnbVXBvV%2BZTG%2FLYePX0ViqZeybyVlrpD7JlFdiTM8Aq7uXnf6AEwnKYH9ml%2FlFVWmTFGEIBaIWHomXbwNW5nxt9m12iGYOwcKAEKtJsig8Gt%2FAgQ1p9eUudHpERUxCRlGzyIQHVj2L5EdqXdAeLULoLks95LQYAaycrqwwAa1Zw%2Fsi5LoW25eHNiWU8qsTJjbnDffpYbSFsy%2BVDZo%2FO6m8p4ZNoB8UYKA%2FT0we9dDKJVyb1F7PYj%2FFbTV5l82iU1bhbeD1khARz8TtNsD2vdEwlPWHxAY6pgEV8uLpgx36zXJdrpUkX0nU5YvKb2Mn01LhPEd3RNxt%2F4R6LvngQ7uEXJ4du96PKI8G33FidrcyJ3PDKMtIZV%2BuZRV3OTjkfBDThYk4RuzYC%2F9iwrwnVxZGBFhtpuvHu0nvIaldbGTPMLzwb4L29Sb8tg4T4z6CWwKT3j7JgmzrzTcfa%2FocEQij7OVuwQ2gUNqU1Y2ef9sVPtuBrS%2FfZklQMwfCUBAW&X-Amz-Signature=67bfb6c866236ba574cb68df22798fe21b2196b014f8bd3968cbc428d78177c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c98a6cc0-e01e-45b6-9d02-679b8cb15733/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMM4IFZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBt%2FlPRbzD86TdavXkctvIzOACND9%2BmB6vS5Fu5xVJz7AiAbhCKPID9UWg4JkCsi%2Ba%2Fcp8IMHaFeEsTS7D2StbqxLCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8ZO0pQT%2FgKRodTDAKtwDemG64vymrBIbqoA40GXovc7KaLCgkCRRuSlt3qrhr2IhYzLRZV13JKSRIRnoOUUB%2Fm13lQX4WGcSzx1%2BnKQftlm0rMR%2Bt9kjk95x7olAMU5NX8ZSAwx%2FhmFVbR4KHl05IG8dQAcajKWNnS7pgEyKGIPKJJ1Efx3nNd9hWULB5nr2PGacQVJcYxXFcMWJY253bDq5LEsKRiH9WvYAerq9h8XTqnU%2B4yBKsJtece4a%2F2OGWS0RgrLjXjE2g9TILyvUgrB9lTzE%2FRHAn6CMwkP7VwNjdQKUZDjLk%2FTwPojoovL%2FYeKYcDRY4%2Fw%2B%2F2udUtCyUmq8Qdaa686UWu5JdJ9pDspuiqt6ifr0mQHNtcKnbVXBvV%2BZTG%2FLYePX0ViqZeybyVlrpD7JlFdiTM8Aq7uXnf6AEwnKYH9ml%2FlFVWmTFGEIBaIWHomXbwNW5nxt9m12iGYOwcKAEKtJsig8Gt%2FAgQ1p9eUudHpERUxCRlGzyIQHVj2L5EdqXdAeLULoLks95LQYAaycrqwwAa1Zw%2Fsi5LoW25eHNiWU8qsTJjbnDffpYbSFsy%2BVDZo%2FO6m8p4ZNoB8UYKA%2FT0we9dDKJVyb1F7PYj%2FFbTV5l82iU1bhbeD1khARz8TtNsD2vdEwlPWHxAY6pgEV8uLpgx36zXJdrpUkX0nU5YvKb2Mn01LhPEd3RNxt%2F4R6LvngQ7uEXJ4du96PKI8G33FidrcyJ3PDKMtIZV%2BuZRV3OTjkfBDThYk4RuzYC%2F9iwrwnVxZGBFhtpuvHu0nvIaldbGTPMLzwb4L29Sb8tg4T4z6CWwKT3j7JgmzrzTcfa%2FocEQij7OVuwQ2gUNqU1Y2ef9sVPtuBrS%2FfZklQMwfCUBAW&X-Amz-Signature=5530aad5e1d4eead8b10a1de8e09669ea6d1b7ae67bff9b4022f04303005ead4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> BackGround하고 Fill Area 둘 다 앵커포인트를 다음과 같이 변경 한 후에 Fill Area내부에 Fill에 Left와 Right를 -5라고 되어있던걸 0으로 초기화
>
> ```c#
> //HUD.cs
>
> void LateUpdate() 
>     {
>         switch (type)
>         {
>             **case InforType.Exp:
>                 float curExp = GameManager.instance.exp;
>                 float maxExp = GameManager.instance.nextExp[GameManager.instance.level];
>                 mySlider.value = curExp / maxExp;**
>         }
>     }
> ```
>
> ```c#
> //HUD.cs
>
> case InforType.Level:
>     //string.Format("쓸문자{0}",{0}에 들어갈 매개변수);
>     //F0 : 소수점이 없다 라는 뜻
>     myText.text = string.Format("Lv.{0:F0}",GameManager.instance.level);
>     break;
> case InforType.Kill:
>     myText.text = string.Format("{0:F0}",GameManager.instance.kill);
>     break;
> ```
>
>

> 🔥 **체력바를 생성하고 플레이어를 따라가게 만들어봅시다**
>
> ```c#
> //Follow.cs
>
> using System.Collections;
> using System.Collections.Generic;
> using UnityEngine;
>
> public class Follow : MonoBehaviour
> {
>
>     RectTransform rect;
>     void Awake()
>     {
>         rect = GetComponent<RectTransform>();
>     }
>
>     //플레이어의 프레임 주기를 동기화하기위해 FixedUpdate로 사용
>     void FixedUpdate() 
>     {
>         //월드 상의 오브젝트 위치를 스크린 좌표로 변환
>         rect.position = Camera.main.WorldToScreenPoint(GameManager.instance.player.transform.position);
>     }
> }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7196cae9-bb3e-4724-8c25-af7dbe652d16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZBWW27%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T102204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAhSInNCfQMOy%2B%2BupoEv47kQMiezFBt%2BKsV%2BFWyBJFQeAiEAiE2pLici%2BOJL2NJ2Tq5SQVlmeI610mlQX3aIZkd8Y0wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFSJ5jDmJsXFLNGDaircAzThJ3fWMl7e%2FDvKAKyxzaMI5Ceg4LkpdfV1d6XR%2BRZzmXzBaUtU5a6QsjOFh8RfriutzjSFu64D%2BdoV1%2BplZBQV8CMRunLT3ci9211%2FKMeJLXq51tX%2F5TSELYsODrmY%2FxLscR87ansQU%2BnmQpMftA4oYrkwT3n7T8oNEgyvz76apg6yIR2tgGqX6L7%2BseMCKKe9jEVKZ%2FTSodwRtOlOA3ttHRxS7jJgA6I5HmBEDzDhZTab2VCJQq7svFaMb7wEwBnTSQDHI9OpiDFIPg7SeNWKjEwjoiJtHnDLcqKR%2B9FL2utdwJrWdfASqbkuCROfOJJdcEZP8aWCdpy6APVJOsWpH2Wgv59m4Ug8VJaPmVM6yWJzACuvQP0mgInn61%2FSCMPIuh9y%2BY5a4hoQ%2FddAN7jqDum%2BOcxjegddv1tF8OaJ2JUHY5fkPUmw9ZoIC7IySzXaL9ooStGdiakvvz4sVtcGC%2BZL4cwD6FmEvmTIb0MZRbZNjD5F8c66pBIld5gfZSONXKzf7hfoufFkqppxF7PYM6kHwcUKiF8luKNHXmB5AAv9EFgMJ3pkcqpYe6cbNZKrSpzAmR96t85C0JMNp94yP6QoYOmg9V17H6GWjYElE9E0Tk2UM39B7gkKMJX1h8QGOqUB%2Bv5edq7G9SahjDF84fIJIjMQ0v9vNDR7AzRmT%2BbN1JQvUq0WsNss%2BCYaqqefOM%2BXz6tILc8SMq9562aIa%2FFVdJ3Shui8AK2aQsobAW8eaJV%2F0VKQYvkHUfF7x02Ylinr2lLBtUxCeKQBJfI5p3SCzUdggAElgNgSGE8N07Gqgr53BfV6GzUptjyi3ss%2BBkUEr%2FD9JC4VZ5iA%2BojXIXLa565ElyKO&X-Amz-Signature=fabe1f8b1de7e9d95aeef3a1df63616887c298cc2a3dcdd573be0169e32b7aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> Slider로 Health를 만들어주고 플레이어 아래쪽에 설정해 준 후에 Health에 Follow.cs 코드를 넣어줍니다
>
>



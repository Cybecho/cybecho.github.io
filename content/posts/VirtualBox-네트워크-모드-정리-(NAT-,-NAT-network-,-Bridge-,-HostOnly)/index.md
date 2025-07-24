---
title: "VirtualBox 네트워크 모드 정리 (NAT , NAT network , Bridge , HostOnly)"
date: 2025-02-25T04:20:00.000Z
draft: false
tags: ["Infra", "Docker"]
series: ["Infra & Network"]
description: "VirtualBox의 네트워크 모드인 NAT, NAT 네트워크, 브리지, 호스트 전용에 대한 정리와 관련된 내용입니다."
notion_id: "1a51bab9-e3f8-8034-91f6-f06f3247aaea"
notion_url: "https://www.notion.so/VirtualBox-NAT-NAT-network-Bridge-HostOnly-1a51bab9e3f8803491f6f06f3247aaea"
---

# VirtualBox 네트워크 모드 정리 (NAT , NAT network , Bridge , HostOnly)

> **Summary**
> VirtualBox의 네트워크 모드인 NAT, NAT 네트워크, 브리지, 호스트 전용에 대한 정리와 관련된 내용입니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b41708a6-4791-4f90-9660-53a0296c38e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY2OS5QZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T080722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIE9Bj0FAVvRTl7UVGEhQBO5Zbv0OxqQ4nBCSeBQZg%2FcIAiAZrZLrR5cYUaK%2FQX8%2BvGkS388fD%2BHlO%2FBLMSeaCJY9dyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKfyfLnziGyWSujqeKtwDr%2FmbCdMRTa1ds%2BCa7DI6UO8dyn7GoVB8SjHAPoMm7ANduczm6dhKsq1DXqJdnfTZlhSPJVFdXDASgT4KR7IyBvJOXQ0iLMNNBb0%2BwIDsENUvGs1E5g8zYLtmsGhpY%2BcLuvP8W0EHjDwIsJYYEhqdJWtDFWXBG506IAiGllregtApsYPSudCRXLlagl%2BQUERcbMNW6pvo0HcS8F5aZTr1q%2BJPwd9ybBWKAvfMyBsOUiOIovUBMkmUkqaziuiptHnnbdSYOHgWSCmgAuirFl673J2AE0hN%2FyNX3ISzMrNyD%2FyoW1%2Fym4eoYSXI2Zz9Zgk2%2Ff%2BkAsrF%2FbnjDGH6ngU%2F4JfBQChhtPNtP5vuxjiThRMe2RtjsZu4FFOr39UPwzaG8%2FS7StqFglWYVyM6vNy%2BpiQa8nWXeu0Cl9bvZu3gNYaE9qvP72htAZKUgPYwNCDruZLsR5EzlBzVFXRfNKvIVMvFYHq7HaHcflW64tWBK7t%2BhpW%2BzYyicfAkho1qll2SU9dbA41oOCLwOVA%2FV4Nsm76GgEgxlZEbbICKK8Y5hckfTOMMzdRLEHzTkGm1lDzlD8W0ASgO8PxQ7y1h78Buzc%2FMSAEHswEjztBe27n3n3Z9nyvxRh16YQGd0JMwx86HxAY6pgECIYEw8qUR9Yo3pApYN5L6FUUuwbKmvpzdcYjXN3VVVQHqHvDcHuMrKq%2FhQbq5sLgW%2BrAxVwzOXJHaeL9eX2FuP4Kg%2Fz40vaDko%2FO1k6MKyeiSWzIuu6875Dlyu6s%2F04%2B%2FZLyeH7mCsjrdARwF3U0cl752HIqKG4uH76lj%2FJbTUGbWXg0sFayngpWU%2FYZWhxgA4bc5WBeg4YYz5CkefowNO8Tipt1L&X-Amz-Signature=fef5edf172eb4aa7b3c5891861336012531ea8006bb160fda6fe19fec65b20fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


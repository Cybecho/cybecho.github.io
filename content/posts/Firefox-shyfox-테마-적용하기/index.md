---
title: "Firefox shyfox 테마 적용하기"
date: 2024-06-22T14:20:00.000Z
draft: false
tags: ["WINDOWS"]
series: ["Tips"]
description: "Firefox shyfox 테마를 설치하려면 GitHub 링크를 따라가고, 프로필 디렉토리에 필요한 파일을 넣어야 합니다. 배경 이미지는 wallpaper.png로 이름을 바꿔 chrome 폴더에 넣고, floating 검색창 기능은 userChrome.css에서 관련 라인을 제거하여 끌 수 있습니다."
notion_id: "0a766503-311c-4566-b280-3f8adfe8c9e0"
notion_url: "https://www.notion.so/Firefox-shyfox-0a766503311c4566b2803f8adfe8c9e0"
---

# Firefox shyfox 테마 적용하기

> **Summary**
> Firefox shyfox 테마를 설치하려면 GitHub 링크를 따라가고, 프로필 디렉토리에 필요한 파일을 넣어야 합니다. 배경 이미지는 wallpaper.png로 이름을 바꿔 chrome 폴더에 넣고, floating 검색창 기능은 userChrome.css에서 관련 라인을 제거하여 끌 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/343016b8-482e-4e8f-966e-d76f9774b3b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPGZBVS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCTgGueojOVVEbGF%2BcVFVl2oBU4MSPIiX2mh%2BUjH2YdfwIgGl%2FZduguoVg5FYOVQjzAlpJdrV7oZUPnreo%2F5hcczP0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJsPQH2x2ts%2FaifT4SrcA4MrOsD%2FRs9AMIjq11MpNe0tud1ntnr43WY%2FzYwNcok7MaVjaz9ktMjpeWhjO3v8KoHzmaVuUlie77ef0DthFM%2BuhCweBNDsUjhWrs20jCdX7Dj1fwKsEvxA8ojTT5SXsLBml%2FIO09k%2BKrO0QGKn2JhsQ05cm0OftUkSLPbC7mdbXpmB7nZtt%2Fk0mDQ8JUGLAvfcS3nvLKHZcdJmqOyrj5GTERwPWIFu1%2BRLKpqRuOCkIbZb1zn1YX%2FMQUYwerifSufxZlrFnrjO04G32NYI4Uw4Xb4D1IpousvGAJa8yCNpyhk31bmD5mBJ2MPV3xw%2BXllHkhD5drCGK9Pigzb6VHM1k0zR4eTcd66scmhoqlv67OWEMZu3Q6TuoZ0gQCXOEVs7UMm5B2SbRnJr824%2BWkRbc1MdfE2sWIFULhmSHIHqxEe5JXrCmbRR8g%2FagVuAGU4sNMYGDmQLMgT9svg4OvcLa12iueB4MTkOhj07xyscseRvM0uDYxovxj0IK0GfS9Br7ufHaIK5H2KPZtdRpyOY%2BaVI2T%2BHbRHv%2FArZI7ELF40ZCU1MZ5IXiNHyR0qaLXprPB%2BzazdIAT1REZfifkKAT5da1DUW0AyWl%2FGHigv5dqw97frcUcrWpQAaMM3Oh8QGOqUBRuIBkQ8obGUCjyItm5EJwmIJJixT3B9L3KVysoJelLSscYJaRCyD41GW3dhDfm0cUeSkTH1XeWxl0RmIVEHwsoa7bTVaGbwk1ZpymBo0gnx6GUrWpEiN7qJTG39bhg0aFTFqvSmOkbAuBdDZs%2FvDbtGQR2ju3EqmYKAh7VWrWTk48grlsDofb0Sj3bp0TU591NgpqPawAGH2F3gsNX7PbQc5zDl%2B&X-Amz-Signature=5997afd23fd24472ac577de22d5a21f5ff1e2fd48f0ad13ae8244efc613ff82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# 설치방법

> 💡 **기본적으로 이 링크만 따라해주면 된다**

> 💡 **해당 디렉토리 안 여러개의 프로필이 존재하는데, 이중에서 해당되는 프로필에다가 `profile `디렉토리와 `user.json`을 넣으면 된다…**

# 배경 이미지 수정 방법

```latex
Rename your picture to wallpaper.png and put it into chrome folder.

This information can be found in the README on GitHub.
```

# floating 검색창 기능 끄기

```latex
Go to userChrome.css and remove line with import shy-floating-search.css
```

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/8061d96a-d085-485b-9c72-e47509c24397/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPGZBVS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCTgGueojOVVEbGF%2BcVFVl2oBU4MSPIiX2mh%2BUjH2YdfwIgGl%2FZduguoVg5FYOVQjzAlpJdrV7oZUPnreo%2F5hcczP0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJsPQH2x2ts%2FaifT4SrcA4MrOsD%2FRs9AMIjq11MpNe0tud1ntnr43WY%2FzYwNcok7MaVjaz9ktMjpeWhjO3v8KoHzmaVuUlie77ef0DthFM%2BuhCweBNDsUjhWrs20jCdX7Dj1fwKsEvxA8ojTT5SXsLBml%2FIO09k%2BKrO0QGKn2JhsQ05cm0OftUkSLPbC7mdbXpmB7nZtt%2Fk0mDQ8JUGLAvfcS3nvLKHZcdJmqOyrj5GTERwPWIFu1%2BRLKpqRuOCkIbZb1zn1YX%2FMQUYwerifSufxZlrFnrjO04G32NYI4Uw4Xb4D1IpousvGAJa8yCNpyhk31bmD5mBJ2MPV3xw%2BXllHkhD5drCGK9Pigzb6VHM1k0zR4eTcd66scmhoqlv67OWEMZu3Q6TuoZ0gQCXOEVs7UMm5B2SbRnJr824%2BWkRbc1MdfE2sWIFULhmSHIHqxEe5JXrCmbRR8g%2FagVuAGU4sNMYGDmQLMgT9svg4OvcLa12iueB4MTkOhj07xyscseRvM0uDYxovxj0IK0GfS9Br7ufHaIK5H2KPZtdRpyOY%2BaVI2T%2BHbRHv%2FArZI7ELF40ZCU1MZ5IXiNHyR0qaLXprPB%2BzazdIAT1REZfifkKAT5da1DUW0AyWl%2FGHigv5dqw97frcUcrWpQAaMM3Oh8QGOqUBRuIBkQ8obGUCjyItm5EJwmIJJixT3B9L3KVysoJelLSscYJaRCyD41GW3dhDfm0cUeSkTH1XeWxl0RmIVEHwsoa7bTVaGbwk1ZpymBo0gnx6GUrWpEiN7qJTG39bhg0aFTFqvSmOkbAuBdDZs%2FvDbtGQR2ju3EqmYKAh7VWrWTk48grlsDofb0Sj3bp0TU591NgpqPawAGH2F3gsNX7PbQc5zDl%2B&X-Amz-Signature=a0c547657ce37de9f2bea2695b0171e51cd2f25ecab9d1622b743ad5b48f341b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


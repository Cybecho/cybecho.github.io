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

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b41708a6-4791-4f90-9660-53a0296c38e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKDWR4K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGpJk%2Fvssdlbdw%2Fh6TgncPoW0NlyJ4zVFAQhtBbkFVDLAiB07ctdOijjPTGdROz1OT%2FaKupIBkLrgdcnIeTm4tblFCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMAXrqecklPToJrov7KtwDa2AM5T8PUx9TirIkD%2Fch7Z%2Fy4BWVdglxIl02UXQhXeF8YffoQlM13MTdukKDACQoSETFJbqlCBA3jiZ36t1Qf84PIHXmPHQ7BMAzN22aspYKL12VTF5VlUk6Xx6Fq%2Be0YmvcoR8wQVrqfNcuAfLStXSOaR1aF2JET%2FrhxUPzcZBuvJrezW%2FkJwZDNruN%2BIqjEBh4fQn7hq8QmWjAAamEJUEWWtwIt5rAerhgSpyuWbjrl60M3xIVJkGl%2BKgaiRzOP2NfhCCRWLagtqFXyfoNob2phwHjOUDPb9Mqu6MFE4LqbA63UnpFNk%2BI358RxmFahnVrgCMisSkBeKopcAoRs9MzsHKRYDbsdsjfusrD1THhusljV0jHkZ1pTvoftC8jgpdvBYSqa42cdsgEdQX4cUoPMIK%2F3b0rHsmpSIc25DByOFnrhLQZkwXI9yAt6SHO65Evzhfjt0ls4Fh4KSZdaeBja6A5ZY1WsMWP7KU1Vuh2cMvHJzyTA%2Bb1G2nYx1BMyj4s3cYZzEvxV2GkhRtXOxACjI8QaQqSyynYWLPjF6Cw%2BWLsJRzb8%2B%2Bc0Qhz9jzyYg5Q22HjNuP5qM5eCyA5AejuGWZIgnag%2Fx8iips7l%2Fu%2BgptDSCKNghaYK0Qwyc%2BHxAY6pgE22ozvPyd6oofPWpRKb87ei73NHuBqjAWT0Up9W75NbKv80mlYg7A9pVe%2FgagtpgfGo38eZw1IK5PC5ohCOgDPupoC5EOCplVdVOeUGnml5Bqdzh8TElHs43qZfE1bxbk4GexfcoqSwzvqIAU5NS3%2BKCfs9jGgZN8klTKuA0LJPfSeUMsxDAVoqbcVxLYEtcZH%2FvKw7f%2FtvOdGRDDtw8TCDyhNeLNt&X-Amz-Signature=51bb59c2e6bcdca401f973611749238fe7a1a5614ae626f60d0045f4e0dc8f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


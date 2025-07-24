---
title: "JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다"
date: 2025-03-15T04:16:00.000Z
draft: false
tags: ["Infra"]
series: ["Infra & Network"]
description: "SSH 터널링의 복잡성을 해결하기 위해 Jump Tunnel이라는 GUI 프로그램을 개발하였습니다. 이 프로그램은 Bastion Host를 통해 내부망을 보호하고, ProxyJump 기능으로 여러 서버에 간편하게 접근할 수 있도록 하며, 하나의 마스터 키와 계정을 사용하여 관리 효율성을 높입니다. 사용자는 간단한 입력만으로 SSH 설정을 자동화할 수 있습니다."
notion_id: "1b71bab9-e3f8-8022-849f-ce52c62d729e"
notion_url: "https://www.notion.so/JUMP-TUNNEL-ssh-1b71bab9e3f88022849fce52c62d729e"
---

# JUMP TUNNEL ! : ssh 터널링 클라이언트를 직접 개발해보았다

> **Summary**
> SSH 터널링의 복잡성을 해결하기 위해 Jump Tunnel이라는 GUI 프로그램을 개발하였습니다. 이 프로그램은 Bastion Host를 통해 내부망을 보호하고, ProxyJump 기능으로 여러 서버에 간편하게 접근할 수 있도록 하며, 하나의 마스터 키와 계정을 사용하여 관리 효율성을 높입니다. 사용자는 간단한 입력만으로 SSH 설정을 자동화할 수 있습니다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/e10ce4e7-a037-4d6f-a0e7-d748f14679a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7T2NOS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfA%2FMCkVQopTwn%2FQRUNwM3CuS8OXELpp7e1Oz8%2BxSVvwIhAMKDPnAKYDzp5q5zIsJEtop7whnyD0DmDUFgkac%2F6RtpKv8DCCkQABoMNjM3NDIzMTgzODA1IgzSMhu7aR%2BssS9OxgQq3APenVZAhiCj63lxAxhfH9RwOuYmWScW5XlCCxyRLCkrbI5qv63r9Me54imlUeNmKrOcUuYnuYCMEpOH6IuVNYQeSbMd7pDXRO6Yhkxg4RU3xj3atJAaudulGfsdlEZtfBPKZThqP8Y9wwCG4yQYVaf5jsvbIFFnhOc3ANecUA1xF9DxgNcJBN5RYCns3T%2BBrVDtV%2Bn9b93c72jwXPndDkUaxfLZQlSv5qPYxBxFtHH583JQDRB8DRn7gNzRTTB9RZxiQLvcNQnlaSFpqpDsA1O7ZAVqErOVgLzSly%2FmXcvjU5cvXENKPIr7C9Rmhy5pnffnPOqJ1mFvVDYOtDC%2FpJXpeTt4ZFMXgr5o3GRS8OrxjmZTn7LvyFFxmSH3%2Fs6VLgmMAMdyrw%2Fa4T5wBKTwyRPxgY%2BIgrR9TIUNthwC0Aj1nnUmuALXqAeySndfdQL0cCehhlD%2Fe%2Bt3uKFdQGNUhXW8DMqR1LVHuhb98k%2BGy0u%2Bujq6cra0bDtbEh4yZQ6G8O%2F4246sScppU%2BjXE%2B5jIRjtUxFXiS%2FcmaQKcvZDGx1dIUqIQn1nwc9dJxMA4oNdYbHsK4Ns5Nf7vRsB%2BLgTFg6dZyeeXBv3LkGcUsJ795Jf3vec9PPvBIWhchy1mTCbz4fEBjqkAfVgj8JC1Gvj%2BVp6J6Xq94zFTnPGVi7akPiV9Eisas6XUJGfoNO4AsD4uQ8lUTSVgDAQ3nJIvHD72xH2jReQW8CgusSEkho1PUdSdQej%2FMCdwGC3YA4ig%2BgtSNffYxacwyyDqSrPLFcKWl68xymwqq1n7tmXNHwZkF7am%2BYwN5zN2LOv7iqvXvEagnpGAUhxa85r2ZbJzWdqXVAJMF1%2F%2BNdffCwC&X-Amz-Signature=9297af543598ddac593676ab2eacd0234e5c67e0bf0413e32520b0547f2e64fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

🔗 [https://github.com/Cybecho/JumpTunnel](https://github.com/Cybecho/JumpTunnel)

# 4.5

# o1

# Grok3



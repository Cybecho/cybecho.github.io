---
title: "Fedora 한글설정"
date: 2024-05-20T08:29:00.000Z
draft: false
tags: ["fedora"]
series: ["Let's Linux!"]
description: "Fedora 한글 설정에 대한 내용으로, gnome tweaks 기능 개선과 관련된 지침이 포함되어 있습니다."
notion_id: "f67e4b6f-2371-4817-9432-59168ec7b953"
notion_url: "https://www.notion.so/Fedora-f67e4b6f23714817943259168ec7b953"
---

# Fedora 한글설정

> **Summary**
> Fedora 한글 설정에 대한 내용으로, gnome tweaks 기능 개선과 관련된 지침이 포함되어 있습니다.

---

> 💡 **gnome tweaks (기능개선)**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b138d583-b810-4db4-8103-e43f514f1d02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHINMYJR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCjhVIJ7utVlTMrG2iwnJnSzs4o7scBKchlxmKKTeJcKgIhALyKa3Rs%2FDWRC8Jt4WCTmM0QSSC3OLQpIgXMbm1o9tIyKv8DCCwQABoMNjM3NDIzMTgzODA1IgwB6QJSO220VGbBTwQq3AOnnrSouL%2BoE9PE6dgeuBxcaPArMCtZ58ArjQOYh15KjwP%2FLb7FClDnX3hJuAHYAr1gASSs%2BA%2BUdyoYnp33WRcDm3LFXiBO11yHkoNTWsS6pmdOKfBG9NQ1U0Iju4LwIDWhzBC7qPqUEdhJ%2FkrpeZrjrQksDUi7fm5BxGdNzXEixLyqB5e1FEopyeFe9FDDa93Wo4rSZ2SvAH0zVVvyCRFktYspXsbKvmh7YBKFjOMU%2FO22MTHABH4gzEiuuwIfymdFY%2BBSmgSBF2zR4xdS3BnYAnUCIf3mmM3K5Wf6I3bUc2c0%2BQjS7jQoJpO2m2w2ibsTHY6uDBVl3iv4jiob4nf%2BwKY33rfJsEtVtSk3qcmdksUcCpSpyHHONEeGGnV3b3rSf5MS8vKUYTrExVhCzM5HN1H5wWTEy3cpuDxmN67b8q3q%2F6BI%2F4Fd7RKE5tqco9KpnhwKDAJFjUbyqVD5i%2FLWR6Dnxv1th%2BKAkFcEyjtmuuEY%2FclRGjn%2BWkuudwPs6fJYqFMpd7JF%2F1%2By5y2jII8Nl1Fto3axcYNzCw0%2BJs2megIAOA7q6V%2FChW7sjIjt7SgOClGRjl5bujcOSeFRp8rUtNWqBhEmu9xaREqk1U5il2%2F%2B9tQKEdPn8VU7HTDLm4jEBjqkAUMGNU%2BW%2Bd3Sn0UaWJIVvX8CD4sdIEDwXPc7GS45UVl6ONxP0NMF%2FXsdYLMxXXpD8SL0b45VzTBS2tkQ81Tot63CRe6GVOTq8YypoAAiwU1%2FEjdoQ3Jg4FqV5joQLnerHQ%2FXpl0YH2sZfCjfAo8iR7gGNKcUllbsOHmeZr2Vc%2FyvFwA89%2FzLMoeYEf5HvbMnB7%2F8Jd3PFENv%2BdJkkuy8mKf2QRlm&X-Amz-Signature=345e6bc96ee7427f8c3fbeff75c926452a91069839f312f9c1b36b33b7a007b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 💡 **다음 내용을 따르시오**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/3bc6b68a-70a2-4a12-aa13-b48697b6d61a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIS3IAC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH9YQ0CpG1zDi%2FE%2F2VK32G2TKrMH1nf4LbuYbhZy9jm4AiB6pU8ou6Cr9wyWVvKEpePh5KI6lVz4S20h%2FVKWJKv6Yir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxbLYOSaL4Pacfe8%2BKtwDIb52SHaAxzNh1ci5%2B9gfXkvn5BneRmMz3mHEXdfx%2B6DWzI9BBAFjt%2BDuQy4J49UCM0%2FjYSgkNFhEJ0bEntHiRdHvW6MB3DL5yw8jxcxW%2FL7pBvxrIHFTxT8SyOUB%2FYrIX%2BaP55Q%2BQnkoHMQuGnNvDoEg9hDU1FS9TBF70DYZMpz8HM%2FzMbfZanR1mZHiMAuFmH2pEKf%2BUA%2FkeW4D6BIlsFquiB0lWM3S1DE93RM7zbgnQaKIAJp%2FsNcRj53%2BaWXm2xfM%2FRpDUhL8qV4nvFgP78LwqlzcZe6dK1AKJXGMNjhDAosPz%2FA9TQahcm3yWIQRwXazCBuN3GULhWawG4B00B5%2FE4tcXeh4LgqCn37s4MontXZXNR%2BOaztyAUvB%2Fw7xbLnLNVJL53TPQL3iVeT2nPsLMYBKNXyaVTqlJNnjnDqP7VL9j9JEUNVRwuvcukFYf7nDIWVgXCExKftNZ5prIvJNFAQ1VSZEl%2Bkxa3MRIr%2BSctE00KuwySdPtRpceZrKLErN74fsIgRqy5wFNEPDtcYvMHVEoRcEdYJ5etArzdR%2B4qPzetpLPOMmAlE%2BOchVfTxlnGKfbibMiHCupkppbcy9ujE3Wzw36GosJ7JqRfKJStQza80EUqmwyPgw1puIxAY6pgGyGEVAmcmvGd5aAUNPpXtJalB6P0mtyQ1zv9KZS0w%2B3WNZd3kaHqwv0UG9An%2BBF9RtT16VgPErt07R1yLvQPKWIAYxHDqOF1UdMzodF%2B94AL5GRLKU4lkfiV2LJlME70VkJCO49ffxsgEBn6350hRj%2B43RlJIS22aiMabs6qulYDEbH79rTtG3GSMV65dKfsE5go0s6Ih2wekfiGGKsDeh0s61ahY6&X-Amz-Signature=a001d2ca02284985608833f5962b7c9eb73427848ff966a1dec7066b46516b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/7b9ee73a-31ca-4380-8a85-953e3f71b964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIS3IAC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T115720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH9YQ0CpG1zDi%2FE%2F2VK32G2TKrMH1nf4LbuYbhZy9jm4AiB6pU8ou6Cr9wyWVvKEpePh5KI6lVz4S20h%2FVKWJKv6Yir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxbLYOSaL4Pacfe8%2BKtwDIb52SHaAxzNh1ci5%2B9gfXkvn5BneRmMz3mHEXdfx%2B6DWzI9BBAFjt%2BDuQy4J49UCM0%2FjYSgkNFhEJ0bEntHiRdHvW6MB3DL5yw8jxcxW%2FL7pBvxrIHFTxT8SyOUB%2FYrIX%2BaP55Q%2BQnkoHMQuGnNvDoEg9hDU1FS9TBF70DYZMpz8HM%2FzMbfZanR1mZHiMAuFmH2pEKf%2BUA%2FkeW4D6BIlsFquiB0lWM3S1DE93RM7zbgnQaKIAJp%2FsNcRj53%2BaWXm2xfM%2FRpDUhL8qV4nvFgP78LwqlzcZe6dK1AKJXGMNjhDAosPz%2FA9TQahcm3yWIQRwXazCBuN3GULhWawG4B00B5%2FE4tcXeh4LgqCn37s4MontXZXNR%2BOaztyAUvB%2Fw7xbLnLNVJL53TPQL3iVeT2nPsLMYBKNXyaVTqlJNnjnDqP7VL9j9JEUNVRwuvcukFYf7nDIWVgXCExKftNZ5prIvJNFAQ1VSZEl%2Bkxa3MRIr%2BSctE00KuwySdPtRpceZrKLErN74fsIgRqy5wFNEPDtcYvMHVEoRcEdYJ5etArzdR%2B4qPzetpLPOMmAlE%2BOchVfTxlnGKfbibMiHCupkppbcy9ujE3Wzw36GosJ7JqRfKJStQza80EUqmwyPgw1puIxAY6pgGyGEVAmcmvGd5aAUNPpXtJalB6P0mtyQ1zv9KZS0w%2B3WNZd3kaHqwv0UG9An%2BBF9RtT16VgPErt07R1yLvQPKWIAYxHDqOF1UdMzodF%2B94AL5GRLKU4lkfiV2LJlME70VkJCO49ffxsgEBn6350hRj%2B43RlJIS22aiMabs6qulYDEbH79rTtG3GSMV65dKfsE5go0s6Ih2wekfiGGKsDeh0s61ahY6&X-Amz-Signature=88875ab7d06e5141050cd265247d601e8acfc9c0895b0620666b5d6f33dc39fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>


---
title: "Arch Linux Bluetooth setting"
date: 2024-01-08T00:00:00.000Z
draft: false
tags: ["Arch", "ubuntu"]
series: ["Let's Linux!"]
description: "Arch Linux에서 Bluetooth를 설정하는 방법은 유틸리티 설치, Bluetooth 서비스 활성화, 장치 페어링의 세 가지 주요 단계로 구성됩니다. 사용자는 루트 사용자로 로그인할 수 있는 sudo 권한이 필요하며, 필요한 유틸리티를 설치한 후 Bluetooth 서비스를 시작하고 장치를 페어링하여 오디오 기능을 사용할 수 있습니다. GDM 사용자에게는 추가적인 설정이 필요할 수 있습니다."
notion_id: "134a9801-45ca-4f93-8fc1-382d46d5a583"
notion_url: "https://www.notion.so/Arch-Linux-Bluetooth-setting-134a980145ca4f938fc1382d46d5a583"
---

# Arch Linux Bluetooth setting

> **Summary**
> Arch Linux에서 Bluetooth를 설정하는 방법은 유틸리티 설치, Bluetooth 서비스 활성화, 장치 페어링의 세 가지 주요 단계로 구성됩니다. 사용자는 루트 사용자로 로그인할 수 있는 sudo 권한이 필요하며, 필요한 유틸리티를 설치한 후 Bluetooth 서비스를 시작하고 장치를 페어링하여 오디오 기능을 사용할 수 있습니다. GDM 사용자에게는 추가적인 설정이 필요할 수 있습니다.

---

🔗 [https://ko.linux-console.net/?p=16632](https://ko.linux-console.net/?p=16632)

# **Arch Linux에서 Bluetooth를 구성하는 방법**

---

Bluetooth는 서버와의 무선 오디오 연결을 위해 광범위하게 사용되는 프로토콜입니다. 모바일 장치 및 시스템에서 Bluetooth를 사용하는 거의 모든 사람을 찾을 수 있습니다. Linux 배포판에서 Bluetooth 장치를 사용하는 것은 처음에는 약간 복잡할 수 있습니다. Arch Linux 사용자인 경우 서버에서 Bluetooth를 구성할 때 혼란스러울 수 있습니다. Arch Linux Bluetooth 설정은 다른 Linux 배포판에 비해 까다롭습니다. 이것이 초보자 프로그래머가 Bluetooth 구성에 문제가 있는 이유입니다. 요즘에는 모든 사람이 헤드폰과 블루투스를 사용하는 경향이 있으므로 Arch Linux의 초보자라도 구성 프로세스를 아는 것이 중요합니다. 이 가이드의 단계는 Arch Linux 시스템에서 Bluetooth를 성공적으로 설정하는 데 도움이 될 수 있습니다. 이 가이드에 제공된 모든 지침을 따르고 나면 Arch Linux 데스크탑에서 Bluetooth의 모든 이점을 누릴 수 있습니다.

## **연결 프로세스**

몇 단계만으로 Bluetooth 장치와 서버 간의 연결을 개발할 수 있습니다. Arch Linux 시스템에 Bluetooth 장치를 연결하려면 다음 세 가지 프로세스를 수행해야 합니다.

- 1단계: 유틸리티 설치
- 2단계: Bluetooth 서비스 활성화
- 3단계: Arch Linux와 페어링
서버 프로토콜의 호환성으로 인해 팝업 오류가 없으면 시스템에서 블루투스 장치의 설정 구성을 계속 진행할 수 있습니다.

## **전제 조건**

시스템에서 Bluetooth를 구성하기 위한 유일한 요구 사항은 루트 사용자로 로그인할 수 있는 sudo 사용자의 가용성입니다. 시스템에서 Bluetooth 어댑터를 사용할 수 있는지 확인해야 합니다. Pacman 패키지를 확인하면 유틸리티 설치가 쉬워집니다.

## **유틸리티 설치**

먼저 Bluetooth 장치용 유틸리티를 설치해야 합니다. 프로그래머는 일반적으로 blueman, bluez 및 bluez 유틸리티를 선택합니다. Arch Linux 시스템에서 이러한 유틸리티를 얻으려면 다음 명령을 입력하십시오.

*$ *sudo pacman -S bluez

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_1.jpg)

*$ *sudo pacman -S bluez-utils

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_2.jpg)

*$ *sudo pacman -S blueman

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_3.jpg)

이제 btusb 모듈의 로드를 설정하려면 터미널에서 다음 명령을 실행하십시오.

*$ *lsmod | grep btusb

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_4.jpg)

이 프로세스의 마지막 단계는 어댑터를 찾는 것입니다. 시스템에서 어댑터를 찾으려면 다음 명령을 입력하십시오.

*$ *sudo nano /etc/bluetooth/main.conf

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_5.jpg)

다음 명령은 어댑터가 연결되었는지 또는 차단되었는지 알려줍니다.

*$ *sudo rfkill list

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_6.jpg)

어댑터가 연결을 차단하는 경우 다음 명령을 입력하여 연결 차단을 해제하십시오.

*$ *sudo rfkill unblock bluetooth

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_7.jpg)

## **블루투스 활성화**

Bluetooth 서비스를 활성화하려면 두 가지 명령만 필요합니다. 하나의 명령은 Bluetooth를 활성화하고 다른 명령은 Arch Linux 시스템에서 자동 활성화 시스템을 제공합니다. 시스템에서 Bluetooth 연결을 활성화하려면 다음 명령을 입력하십시오.

$ sudo systemctl start bluetooth.service$ sudo systemctl enable bluetooth.service

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_8.jpg)

이 명령을 실행하면 Bluetooth 시스템이 Arch Linux에서 시작됩니다. 이 명령은 시작 및 활성화 기능 모두에 액세스합니다.

## **블루투스 장치 페어링**

이 마지막 단계에서는 Bluetooth 장치를 페어링하고 오디오에 연결합니다. 페어링 시 복잡한 명령을 입력할 필요가 없습니다. 단, 오디오 연결 및 오류 대응을 위해 Arch Linux의 터미널 시스템에 특정 명령을 입력해야 합니다. 페어링을 위해서는 기능 활성화 후 현재 열려 있는 창에서 장치로 이동하십시오. 장치를 선택하고 Enter 키를 누릅니다. 페어링 화면이 나타납니다. 장치를 페어링하고 다음을 클릭합니다. 축하 화면에서 장치가 서버와 성공적으로 페어링되었음을 알려줍니다. 이제 서버의 오디오를 페어링된 장치와 연결할 차례입니다. 오디오를 연결하면 장치가 Arch Linux 서버의 모든 오디오 기능과 연결을 설정할 수 있습니다. 음악, 오디오, 비디오 및 기타 항목을 소리와 함께 들을 수 있습니다. 서버의 오디오를 페어링된 장치와 연결하려면 다음 명령을 입력하십시오.

*$ *sudo pacman -S pulseaudio

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_9.jpg)

*$ *sudo pacman -S pulseaudio-bluetooth

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_10.jpg)

위의 명령은 Bluetooth용 PulseAudio 확장 프로그램을 설치합니다. 기능을 시작하려면 다음 명령을 실행하십시오.

*$ *sudo systemctl start pulseaudio

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_11.jpg)

두 번째 명령을 실행하여 PulseAudio의 기능을 자동 시작합니다. 앞뒤 기능에 쉽게 액세스할 수 있는 유틸리티를 얻으려면 다음 명령을 입력하십시오. 이렇게 하면 키를 사용하지 않고도 노래나 음악을 이동하고 볼륨을 제어할 수 있습니다. 이 유틸리티는 뛰어난 기능이며 Bluetooth 기능을 사용할 때 유용합니다.

*$ *sudo pacman -S pavucontrol

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_12.jpg)

*$ *pavucontrol

![Image](https://ko.linux-console.net/common-images/configure_bluetooth_arch_linux/configure_bluetooth_13.jpg)



# If you GDM USER ONLY!


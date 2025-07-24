---
title: "라즈베리파이4b 에 ProxMox 설치"
date: 2025-03-05T15:19:00.000Z
draft: false
tags: ["ProxMox"]
series: ["Let's Homelab!"]
description: "라즈베리파이 4B에 Proxmox를 설치하는 방법은 시스템 업데이트, 컴퓨터 이름 설정, 관리자 비밀번호 생성, Pimox 설치, 그리고 네트워크 설정을 포함합니다. 설치 후에는 웹 브라우저를 통해 Proxmox에 접속할 수 있으며, 실험 단계이므로 중요한 작업에는 사용하지 않는 것이 좋습니다."
notion_id: "1ad1bab9-e3f8-8097-b72c-f26d7149316e"
notion_url: "https://www.notion.so/4b-ProxMox-1ad1bab9e3f88097b72cf26d7149316e"
---

# 라즈베리파이4b 에 ProxMox 설치

> **Summary**
> 라즈베리파이 4B에 Proxmox를 설치하는 방법은 시스템 업데이트, 컴퓨터 이름 설정, 관리자 비밀번호 생성, Pimox 설치, 그리고 네트워크 설정을 포함합니다. 설치 후에는 웹 브라우저를 통해 Proxmox에 접속할 수 있으며, 실험 단계이므로 중요한 작업에는 사용하지 않는 것이 좋습니다.

---

🔗 [https://youtu.be/-hT231RiHMY?si=XAEybWfokJz7Jzpq](https://youtu.be/-hT231RiHMY?si=XAEybWfokJz7Jzpq)

🔗 [https://github.com/pimox/pimox7](https://github.com/pimox/pimox7)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f108f5ed-24bd-4158-a12d-c9c3878534df/b93cc4c7-7e56-4945-87c0-bb2500eb111a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWJCBBZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB8xaTJxtGwTYRVjwf9YxBL%2BPKJspfBfC2uOJK6kyOIAiEAucbDxwerFGSdaVwyb%2Bw18Qz0E%2FhkJ3sIGG0HcWo4EqYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAglKzPUH2oh4naVvyrcA5W2uuAFatwfW7EUqX4%2B1fj%2F6i50PeKmH%2BA6KYgs%2B6ggWRWCoVEY3VWWsDngjzpKUmzfZv3ybZQPhWjnHA711lRuGSw008V0rOPW13Ntc4tctbFtGO9wsiivZ4lZBvT6e%2FppSy3QyqcfKUTEHoVIvbVfebTreRFuDoB2Vvu8BKwR8oPDh%2FVA9cHLnH69Lqu4cDv1cBQHnsleBKY2QyoZr2Tye8I0KHliI6HySqvJzjR%2FNQSQWqILKB1qSxY6ELJPyH4m%2BU4kHZwPj0KpwRttiAeEjTnrnE3bh3a2emSgxz4KocSkA0ZIffUGrBsLFbL1edA1rqLOjetyPc3ygbbUy%2FL7YRm6j9huo6s1%2FatH3TbCx6yGdWCekGr%2BTk0KhxgFBN%2FCozs98n0G6KWuaegOG1QyO%2BafYWbGJtwIDqerUM709NnoZ2jKUBFMaVp72%2Bm6AplIRmpZ%2FbisNWcucL3%2BNaKYfe9CjxsPRWl1hJ33F5y7u6SGI8%2BjtZ5gGVG3%2FouEzTindtJltrU0Trl17NO7tIagm6SeByrlByii5P7FYcSwOB8ZwYqG4B%2BACHgeSvs6ZCJ%2BEoa2PYD8oeOIIJHlqYOONghh83FPcOw2WSd%2BGQ45smgsOEnn5W5DfO0xMP%2F0h8QGOqUBNiIeZ5KbV3xOP4CDOsCJJr1GPFEsXu5oZpm%2FdQ53I7j%2B7mhVb3j%2FEZ%2FMyEoNsrXO3z4KjbEHsYIbIENEl5raroaLieoxhkZoMp3CBS1Fa1koIJLVTOUJwAszCkR2CZy6lmGmoGXeThGhRvkcZITj0Y%2FVgyWm6usTdaD4u9J%2Bd0ixCHKsh4xq99nKo3IIi1%2FM1%2BiEf%2BpP1spNawf5WXtVa%2BJWBtIm&X-Amz-Signature=5cd4b2f6e225ef41548a440165b116744da39f10342d0d4890ae52226872694b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/95eec244-6e22-4fe8-a34c-acb7978bead9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWJCBBZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB8xaTJxtGwTYRVjwf9YxBL%2BPKJspfBfC2uOJK6kyOIAiEAucbDxwerFGSdaVwyb%2Bw18Qz0E%2FhkJ3sIGG0HcWo4EqYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAglKzPUH2oh4naVvyrcA5W2uuAFatwfW7EUqX4%2B1fj%2F6i50PeKmH%2BA6KYgs%2B6ggWRWCoVEY3VWWsDngjzpKUmzfZv3ybZQPhWjnHA711lRuGSw008V0rOPW13Ntc4tctbFtGO9wsiivZ4lZBvT6e%2FppSy3QyqcfKUTEHoVIvbVfebTreRFuDoB2Vvu8BKwR8oPDh%2FVA9cHLnH69Lqu4cDv1cBQHnsleBKY2QyoZr2Tye8I0KHliI6HySqvJzjR%2FNQSQWqILKB1qSxY6ELJPyH4m%2BU4kHZwPj0KpwRttiAeEjTnrnE3bh3a2emSgxz4KocSkA0ZIffUGrBsLFbL1edA1rqLOjetyPc3ygbbUy%2FL7YRm6j9huo6s1%2FatH3TbCx6yGdWCekGr%2BTk0KhxgFBN%2FCozs98n0G6KWuaegOG1QyO%2BafYWbGJtwIDqerUM709NnoZ2jKUBFMaVp72%2Bm6AplIRmpZ%2FbisNWcucL3%2BNaKYfe9CjxsPRWl1hJ33F5y7u6SGI8%2BjtZ5gGVG3%2FouEzTindtJltrU0Trl17NO7tIagm6SeByrlByii5P7FYcSwOB8ZwYqG4B%2BACHgeSvs6ZCJ%2BEoa2PYD8oeOIIJHlqYOONghh83FPcOw2WSd%2BGQ45smgsOEnn5W5DfO0xMP%2F0h8QGOqUBNiIeZ5KbV3xOP4CDOsCJJr1GPFEsXu5oZpm%2FdQ53I7j%2B7mhVb3j%2FEZ%2FMyEoNsrXO3z4KjbEHsYIbIENEl5raroaLieoxhkZoMp3CBS1Fa1koIJLVTOUJwAszCkR2CZy6lmGmoGXeThGhRvkcZITj0Y%2FVgyWm6usTdaD4u9J%2Bd0ixCHKsh4xq99nKo3IIi1%2FM1%2BiEf%2BpP1spNawf5WXtVa%2BJWBtIm&X-Amz-Signature=2a71c8496d1c07b0b4d013e97b94e5044e44b60dbe0613da1c022ebd2cd1818f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

라즈베리파이 4B에 Proxmox를 설치하는 방법을 알아보겠습니다. 먼저 환경을 설명하자면, 라즈베리파이에는 64비트 우분투 라이트가 설치되어 있고 IP 주소는 192.168.45.42입니다.

Proxmox는 컴퓨터를 가상화하는 프로그램입니다. 보통 일반 컴퓨터용으로 만들어졌지만, 라즈베리파이에서도 Pimox라는 특별 버전을 통해 사용할 수 있습니다. Pimox는 라즈베리파이 OS에서 가장 잘 작동하지만, 우분투에서도 설치가 가능합니다. 다만 완벽하게 작동하지 않을 수 있다는 점을 미리 알아두세요.

설치 과정은 다음과 같습니다:

1. **시스템 준비하기**: 먼저 시스템을 최신 상태로 업데이트하고 필요한 프로그램을 설치합니다.
```plain text
sudo apt update
sudo apt upgrade -y
sudo apt install curl -y
```

1. **컴퓨터 이름 설정하기**: Proxmox가 제대로 작동하려면 컴퓨터 이름을 설정해야 합니다.
```plain text
sudo hostnamectl set-hostname proxmox
sudo nano /etc/hosts
```

hosts 파일에서 127.0.1.1이 적힌 줄을 찾아 192.168.45.42 proxmox로 바꿔주세요.

1. **관리자 비밀번호 만들기**: Proxmox를 사용하려면 관리자(root) 계정의 비밀번호가 필요합니다.
```plain text
sudo passwd root
```

1. **Pimox 설치하기**: 설치 파일을 다운로드하고 실행합니다.
```plain text
curl https://raw.githubusercontent.com/pimox/pimox7/master/RPiOS64-IA-Install.sh -o pimox-install.sh
chmod +x pimox-install.sh
sudo ./pimox-install.sh
```

<details>
<summary>`#!/bin/bash` 가 원래는 떨어져있는데, 붙여줘야 합니다.</summary>

```plain text
**#!/bin/bash**
#######################################################################
# Name:     RPiOS64-IA-Install.sh           Version:      0.1.2       #
# Created:  07.09.2021                      Modified: 22.02.2022      #
# Author:   TuxfeatMac J.T.                                           #
# Purpose:  interactive, automatic, Pimox7 installation RPi4B, RPi3B+ #
#########################################################################################################################################
# Tested with image from:							                                                                                                 #
# https://downloads.raspberrypi.org/raspios_lite_arm64/images/raspios_lite_arm64-2021-11-08/2021-10-30-raspios-bullseye-arm64-lite.zip	 #
#########################################################################################################################################

#### SET SOME COLOURS ###################################################################################################################
NORMAL=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
GREY=$(tput setaf 8)

#### SCRIPT IS MENT TO BE TO RUN AS ROOT! NOT AS PI WITH SUDO ###########################################################################
if [ $USER != root ]
 then
  printf "${RED}PLEASE RUN THIS SCRIPT AS ROOT! DONT USE SUDO! $NORMAL \n"
  exit
fi
printf " $YELLOW
====================================================================
!    PLEASE DONT USE SUDO, USE SU TO LOGIN TO THE ROOT USER        !
! PLEASE STOP THIS SCRIPT NOW WITH CONTROL+C IF YOU ARE USING SUDO !
!               CONTINUING SETUP IN 3 SECONDS...                   !
====================================================================
$NORMAL\n" && sleep 3

#### GET THE RPI MODEL #### EXTRA STEPS FOR RPI3B+ ##################### UNTESTED #######################################################
RPIMOD=$(cat /sys/firmware/devicetree/base/model | cut -d ' ' -f 3)
if [ $RPIMOD == 3 ]
 then
  printf "Officially, the only supported model is Raspberry Pi 4. Unfortunately, you have a model 3.\n"
  printf "Edit installer.sh manually.. I hope you know what you are doing..."
  exit
  ## WORKS BUT DOSEN'T SHOW RPI 3 WARNINGS YET ...
  # [ ] ADD WARNING MESSAGES
  # [ ] GET RPI3 VALUES SWAP ZRAM INSTED OF HARD CODING ?
  PI3_ZRAM='1664'                 # zram 1,6GB
  PI3_SWAP='384'                  # dphys-swapfile 0,4GB
  ##
  apt install -y zram-tools
  printf "SIZE=$PI3_ZRAM\nPRIORITY=100\nALGO=lz4\n" >> /etc/default/zramswap
  printf "CONF_SWAPSIZE=$PI3_SWAP\n" >> /etc/dphys-swapfile
  vm.swappiness=100 >> /etc/sysctl.d/99-sysctl.conf
  # fix net names eth0 | enxMAC # !
  RPIMAC=$(ip a | grep ether | cut -d ' ' -f 6)
  printf "SUBSYSTEM==\"net\", ACTION==\"add\", DRIVERS==\"?*\", ATTR{address}==\"$RPIMAC\", ATTR{dev_id}==\"0x0\", ATTR{type}==\"1\", KERNEL==\"eth*\", NAME=\"eth0\"\n" > /etc/udev/rules.d/70-presistant-net.rules
fi

#### GET USER INPUTS #### HOSTNAME ######################################################################################################
read -p "Enter new hostname e.g. RPi4-01-PVE : " HOSTNAME
while [[ ! "$HOSTNAME" =~ ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$  ]]
 do
  printf " --->$RED $HOSTNAME $NORMAL<--- Is NOT an valid HOSTNAME, try again...\n"
  read -p "Enter new hostname e.g.: RPi4-01-PVE  : " HOSTNAME
done

#### IP AND NETMASK ! ###################################################################################################################
read -p "Enter new static IP and NETMASK e.g. 192.168.0.100/24 : " RPI_IP
while [[ ! "$RPI_IP" =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}+\/[0-9]+$ ]]
 do
  printf " --->$RED $RPI_IP $NORMAL<--- Is NOT an valid IPv4 ADDRESS with NETMASK, try again...\n"
  read -p "IPADDRESS & NETMASK ! E.G.: 192.168.0.100/24 : " RPI_IP
done
RPI_IP_ONLY=$(echo "$RPI_IP" | cut -d '/' -f 1)

#### GATEWAY ############################################################################################################################
GATEWAY="$(echo $RPI_IP | cut -d '.' -f 1,2,3).1"
read -p"Is $GATEWAY the correct gateway ?  y / n : " CORRECT
if [ "$CORRECT" != "y" ]
 then
  read -p "Enter the gateway  e.g. 192.168.0.1 : " GATEWAY
  while [[ ! "$GATEWAY" =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$  ]]
   do
    printf " --->$RED $GATEWAY $NORMAL<--- Is NOT an valid IPv4 GATEWAY, try again...\n"
    read -p "THE GATEWAY IP ! E.G. 192.168.0.1 : " GATEWAY
  done
fi

#### AGREE TO CHANGES ###################################################################################################################
printf "
$YELLOW#########################################################################################
=========================================================================================$NORMAL
THE NEW HOSTNAME WILL BE:$GREEN $HOSTNAME $NORMAL
=========================================================================================
THE DHCP SERVER ($YELLOW dhcpcd5 $NORMAL) WILL BE $RED REMOVED $NORMAL !!!
=========================================================================================
THE PIMOX REPO WILL BE ADDED IN : $YELLOW /etc/apt/sources.list.d/pimox.list $NORMAL CONFIGURATION :
$GRAY# Pimox 7 Development Repo$NORMAL
deb https://raw.githubusercontent.com/pimox/pimox7/master/ dev/
=========================================================================================
THE NETWORK CONFIGURATION IN : $YELLOW /etc/network/interfaces $NORMAL WILL BE $RED CHANGED $NORMAL !!! TO :
auto lo
iface lo inet loopback
iface eth0 inet manual
auto vmbr0
iface vmbr0 inet static
        address $GREEN $RPI_IP $NORMAL
        gateway $GREEN $GATEWAY $NORMAL
        bridge-ports eth0
        bridge-stp off
        bridge-fd 0
=========================================================================================
THE HOSTNAMES IN : $YELLOW /etc/hosts $NORMAL WILL BE $RED OVERWRITTEN $NORMAL !!! WITH :
127.0.0.1\tlocalhost
$RPI_IP_ONLY\t$HOSTNAME
=========================================================================================
THESE STATEMENTS WILL BE $RED ADDED $NORMAL TO THE $YELLOW /boot/cmdline.txt $NORMAL IF NONE EXISTENT :
cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1
$YELLOW=========================================================================================
#########################################################################################\n $NORMAL
"

#### PROMPT FOR CONFORMATION ############################################################################################################
read -p "YOU ARE OKAY WITH THESE CHANGES ? YOUR DECLARATIONS ARE CORRECT ? CONTINUE ? y / n : " CONFIRM
if [ "$CONFIRM" != "y" ]; then exit; fi

#### SET A ROOT PWD FOR WEB GUI LOGIN ###################################################################################################
printf "
=========================================================================================
                          $RED ! SETUP NEW ROOT PASSWORD ! $NORMAL
=========================================================================================\n
" && passwd
if [ $? != 0 ]; then exit; fi

#### BASE UPDATE, DEPENDENCIES INSTALLATION #############################################################################################
printf "
=========================================================================================
 Begin installation, Normal duration on a default RPi4 ~ 30 minutes, be patient...
=========================================================================================\n
"

#### SET NEW HOSTNAME ###################################################################################################################
hostnamectl set-hostname $HOSTNAME

#### ADD SOURCE PIMOX7 + KEY & UPDATE & INSTALL RPI-KERNEL-HEADERS #######################################################################
printf "# PiMox7 Development Repo
deb https://raw.githubusercontent.com/pimox/pimox7/master/ dev/ \n" > /etc/apt/sources.list.d/pimox.list
curl https://raw.githubusercontent.com/pimox/pimox7/master/KEY.gpg |  apt-key add -
apt update && apt upgrade -y

#### REMOVE DHCP, CLEAN UP ###############################################################################################################
apt purge -y dhcpcd5
apt autoremove -y

#### FIX CONTAINER STATS NOT SHOWING UP IN WEB GUI #######################################################################################
if [ "$(cat /boot/cmdline.txt | grep cgroup)" != "" ]
 then
  printf "Seems to be already fixed!"
 else
  sed -i "1 s|$| cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1|" /boot/cmdline.txt
fi

#### INSTALL PIMOX7 AND REBOOT ###########################################################################################################

#### Install pve-manager separately, and without recommended packages, to avoid packaging issue later.
DEBIAN_FRONTEND=noninteractive apt install -y --no-install-recommends -o Dpkg::Options::="--force-confdef" pve-manager

#### Continue with remaining packages
DEBIAN_FRONTEND=noninteractive apt install -y -o Dpkg::Options::="--force-confdef" proxmox-ve

#### RECONFIGURE NETWORK #### /etc/hosts REMOVE IPv6 #### /etc/network/interfaces.new CONFIGURE NETWORK TO CHANGE ON REBOOT ##############
printf "
=========================================================================================
$GREEN ! FIXING NETWORK CONFIGURATION.... ERRORS ARE NOMALAY FINE AND RESOLVED AFTER REBOOT ! $NORMAL
=========================================================================================
\n"
printf "127.0.0.1\tlocalhost
$RPI_IP_ONLY\t$HOSTNAME\n" > /etc/hosts
printf "auto lo
iface lo inet loopback

iface eth0 inet manual

auto vmbr0
iface vmbr0 inet static
        address $RPI_IP
        gateway $GATEWAY
        bridge-ports eth0
        bridge-stp off
        bridge-fd 0 \n" > /etc/network/interfaces.new

#### CONFIGURE PIMOX7 BANNER #############################################################################################################
cp /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js.auto.backup
SEARCH="return Ext.String.format('"
#### PLACE HOLDER BANNER BEGIN --> #### LINE 1 ####                                                     #### LINEBREAK #### -- #### LINE 2 #####
REPLACE="return Ext.String.format(' This is a unofficial development build of PVE7 - PIMOX7 - https://github.com/pimox/pimox7  Build to run a PVE7 on the RPi4. ! ! ! NO GUARANTEE NOT OFFICIALLY SUPPORTED ! ! ! ');"
sed -i "s|$SEARCH.*|$REPLACE|" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js

### FINAL MESSAGE ########################################################################################################################
printf "
=========================================================================================
                   $GREEN     ! INSTALATION COMPLETED ! WAIT ! REBOOT ! $NORMAL
=========================================================================================

    after reboot the PVE web interface will be reachable here :
      --->  $GREEN https://$RPI_IP_ONLY:8006/ $NORMAL <---

         run ---> $YELLOW apt upgrade -y $NORMAL <---
           in a root shell to complete the installation.

\n" && sleep 10 && reboot

#### EOF ####
```

</details>

  설치 중에 몇 가지 질문이 나오면 화면에 나오는 안내에 따라 답해주세요.

```plain text
Enter new hostname e.g. RPi4-01-PVE : RPi4-01-PVE
Enter new static IP and NETMASK e.g. 192.168.0.100/24 : 192.168.45.42/24
Is 192.168.45.1 the correct gateway ?  y / n : y
```

1. **다시 시작하기**: 설치가 끝나면 컴퓨터를 다시 시작합니다.
```plain text
sudo reboot
```

1. **Proxmox 시작하기**: 컴퓨터가 다시 켜지면 웹 브라우저에서 [https://192.168.45.42:8006](https://192.168.45.42:8006/) 주소로 접속하세요. 로그인할 때는 'root'와 아까 설정한 비밀번호를 입력하면 됩니다.
이렇게 하면 라즈베리파이에서 Proxmox를 사용할 수 있습니다. 하지만 아직 실험 단계이므로, 중요한 작업에는 사용하지 않는 것이 좋습니다.

---

# 설치 후 Debian 설치

[https://youtu.be/g1FXZIvVkq4?si=5z4YeRn3Ez49U-gK&t=557](https://youtu.be/g1FXZIvVkq4?si=5z4YeRn3Ez49U-gK&t=557)


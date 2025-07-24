---
title: "게임핵 개발02 "
date: 2023-01-21T00:00:00.000Z
draft: false
tags: ["C#", "리버스엔지니어링"]
series: ["치트엔진 활용 게임핵 개발"]
description: "게임핵 개발을 위한 소수점 표현과 메모리 값 변경 방법을 설명. C#을 사용하여 실시간으로 플레이어 데이터를 읽고 수정하는 코드 예시 제공."
notion_id: "86639d35-9cdc-4551-b570-bfbee96bf13d"
notion_url: "https://www.notion.so/02-86639d359cdc4551b570bfbee96bf13d"
---

# 게임핵 개발02 

> **Summary**
> 게임핵 개발을 위한 소수점 표현과 메모리 값 변경 방법을 설명. C#을 사용하여 실시간으로 플레이어 데이터를 읽고 수정하는 코드 예시 제공.

---

🎥 [동영상 보기](https://youtu.be/1zMlLdViMno)

> 🔥 ****소숫점 2자리까지만 출력되게 만드는 코드 (#.##)****
> 예를들어 코드가
>
> ```c#
> x_angle = 0.12345
>
> Angle_LBL.Text = "Angle : " + mainPlayer.x_angle;
> ```
>
> >> 0.12345
>
> ```c#
> x_angle = 0.12345
>
> Angle_LBL.Text = "Angle : " + mainPlayer.x_angle.ToString("#.##")
> ```
>
> >> 0.12
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=5ZHRlbRSCRc&list=PLnIaYcDMsScxvz3yyClxLU9W6upAUyPzc&index=8)

> 🔥 ****WriteInt를 사용하여 메모리 값 변경하기****
> ReadInt로 실시간으로 값을 불러오고 WriteInt로 값을 수정함
>
> 0,1초마다 한번씩 메모리를 읽는 Timer를 이용하여 계속해서 Read하고 Write를 한다
>
> ```c#
> #PlayerData.cs
>
> using ProcessMemoryReaderLib;
>
> public PlayerData(Process proc, int offset, ProcessMemoryReader mem)
> {
> 			public void SetPlayerData(ProcessMemoryReader mem) //메모리를 읽고 실시간으로 값을 받아오기 위함
>       {
>           HP = mem.ReadInt(base_addr + HP_offset); //프로세스 주소 + 0xEC
>           Proof = mem.ReadInt(base_addr + Proof_offset);
>           Ammo = mem.ReadInt(base_addr + Ammo_offset);
>           x_pos = mem.ReadFloat(base_addr + x_pos_offset);
>           z_pos = mem.ReadFloat(base_addr + z_pos_offset);
>           y_pos = mem.ReadFloat(base_addr + y_pos_offset);
>           x_angle = mem.ReadFloat(base_addr + x_angle_offset);
>           y_angle = mem.ReadFloat(base_addr + y_angle_offset);
>       }
>
>       internal void hack_HP(ProcessMemoryReader mem)
>       {
>           mem.WriteInt(base_addr + HP_offset, 10000); //체력을 10000으로
>       }
>
>       internal void hack_Ammo(ProcessMemoryReader mem)
>       {
>           mem.WriteInt(base_addr + Ammo_offset, 10000); //탄약을 100000으로
>       }
>     }
> }
> ```
>
> ```c#
> #Form1.cs
>
> private void timer1_Tick(object sender, EventArgs e) // 0.1초마다 동작
>         {
>             if (attach)
>             {
>                 try
>                 {
>                     if (HP_hack)
>                     {
>                         mainPlayer.hack_HP(mem);
>                     }
>                     if (Ammo_hack)
>                     {
>                         mainPlayer.hack_Ammo(mem);
>                     }
>
>                     mainPlayer.SetPlayerData(mem); //데이터 모니터링
>                     Health_LBL.Text = "Health : " + mainPlayer.HP;
>                     Ammo_LBL.Text = "Ammo : " + mainPlayer.Ammo;
>                     BulletProof_LBL.Text = "BulletProof : " + mainPlayer.Proof;
>                     Angle_LBL.Text = "Angle : " + mainPlayer.x_angle.ToString("#.##") + " | " + mainPlayer.y_angle.ToString("#.##");
>                     Position_LBL.Text = "Position : " + mainPlayer.x_pos.ToString("#.##") + " | " + mainPlayer.z_pos.ToString("#.##") + " | " + mainPlayer.y_pos.ToString("#.##");
>                 }
>                 catch { }
>             }
>         }
>         private void Health_BT_Click(object sender, EventArgs e)
>         {
>             if (HP_hack)
>             {
>                 HP_hack = false;
>             }
>             else
>             {
>                 HP_hack = true;
>             }
>         }
>         private void Ammo_BT_Click(object sender, EventArgs e)
>         {
>             if (Ammo_hack)
>             {
>                 Ammo_hack = false;
>             }
>             else
>             {
>                 Ammo_hack = true;
>             }
>         }
> ```
>
>
>

🎥 [동영상 보기](https://www.youtube.com/watch?v=PPHa6T_w0pY&list=PLnIaYcDMsScxvz3yyClxLU9W6upAUyPzc&index=11)

> 🔥 ****수학 삼각함수…****
> 예를들어 코드가
>
> ```c#
> x_angle = 0.12345
>
> Angle_LBL.Text = "Angle : " + mainPlayer.x_angle;
> ```
>
> >> 0.12345
>
> ```c#
> x_angle = 0.12345
>
> Angle_LBL.Text = "Angle : " + mainPlayer.x_angle.ToString("#.##")
> ```
>
> >> 0.12
>
>


---
title: "유니티 3D게임 쿼드뷰 06"
date: 2023-02-10T00:00:00.000Z
draft: false
tags: ["C#", "UNITY"]
series: ["유니티 3D 쿼터뷰 게임 클론 개발"]
description: "자동회전 오류를 수정하고 레이캐스트를 시각적으로 표시하며 아이템과 플레이어 간의 충돌을 방지하는 방법을 설명합니다. Rigidbody를 제어하기 위해 FreezeRotation 함수를 사용하고, Ray를 활용하여 벽 관통 문제를 해결합니다. 아이템의 물리적 상호작용을 조정하기 위해 콜라이더의 순서를 변경하는 방법도 포함되어 있습니다."
notion_id: "22cc513f-82e6-4ca7-8cf9-052009c4663e"
notion_url: "https://www.notion.so/3D-06-22cc513f82e64ca78cf9052009c4663e"
---

# 유니티 3D게임 쿼드뷰 06

> **Summary**
> 자동회전 오류를 수정하고 레이캐스트를 시각적으로 표시하며 아이템과 플레이어 간의 충돌을 방지하는 방법을 설명합니다. Rigidbody를 제어하기 위해 FreezeRotation 함수를 사용하고, Ray를 활용하여 벽 관통 문제를 해결합니다. 아이템의 물리적 상호작용을 조정하기 위해 콜라이더의 순서를 변경하는 방법도 포함되어 있습니다.

---

🎥 [동영상 보기](https://www.youtube.com/watch?v=dynN70kyD9A&list=PLO-mt5Iu5TeYkrBzWKuTCl6IUm_bA6BKy&index=8)

> 🔥 **리지드바디끼리 부딪혀서 플레이어가 자동으로 회전하는 현상 픽스**
> Transform이동이기때문에 Rigidbody를 제어할 수 없어서 따로 제작해줘야한다
>
> `Player.cs `에서 수정하도록 한다
>
> ```c#
> void FreezeRotation()
> {
>     //angularVelocity = 물리 회전 속도
>     //Update() 안에 넣어 매프레임 FreezeRotations()을 호출하여 물리회전속도를 0으로 초기화시켜 회전을 막는다
>     rigid.angularVelocity = Vector3.zero;
> }
>
> void FixedUpdate() 
> {
>     FreezeRotation();
> }
> ```
>
>
> 또한, 충돌 레이어 또한 설정해줘야한다 다른 리지드바디와 충돌했기 때문이기에 레이어를 다르게한다
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/a61bdbe1-6992-48bb-b512-3f11e03cbd35/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7QQC3X%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDoRFwvTmQnTDeGbmkYi7vbRFELHmKnLmBqPMCjh%2F1wjAiEA8yu2OKVffo5QNTfBzolNYOAtel3%2FVDMCOptaR5w%2FKF8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAY2pxAUnhjXFwM7TyrcA9diPm2DWYsdyrRR%2B9f1azWsAom6MTZX7MilshWtiHtqkCyvoxrhueHs275zOvX%2FdmyrATn8s60U%2B9o6WmyzAbpnLCjukuTeGg4VF4%2BRuYrZXk6PcHcv4%2BAsNSHQdVFFxq8oonLU3YGJk4D%2Bu33C3hDRsQXgAZ4thhkeJt3cdaGqgpzevTFxfgi2p3OnPSHxfK4ZzOzgOhamc3kH2iaVcOETGgCgbR2SWwuuJawM4zZ2rmNmveWQQXN5giYm0IgYj4CfrSUHzHIY5Lz4Wd6UHg%2FddXLRcZHsuCM9cpJ3aUlkx%2BO2RvAjha3WjAcVGNnpVOAA4Cl6wv48N5dXy4tIjOvbgYanS73BJtOooFAsz1gY8aZ6ar8tR23hHuiF%2FNLnDn%2BGrzUHBqI043cmkHOBdumju3nbXSLWLykdDzfIpNrI0CHjKhQUyA9hyqg%2FI2xgy0nCXTXO0ut9i28dfhG5qyypF2UWqS40Tgf8%2FHlRkxaMlH444KSAtEqfI%2BKJlV%2BXCV45wLYq%2BxBOU%2FqZ8AL8NqepsZMdWYl0o2hkH4CfKT1T3PpfZSKvbHo4Qf84xJ0HcSqh3YZ6ZnLbHbTuHRgamPVvBMlyZ%2BXZUeqCjRe6QC59blnc9m38r%2FjAALsRMN6%2FiMQGOqUBVlSFlknI3VVepMKkthmqbkx8zT1VpvT3OOEyScF3bSjzUJ4qYWpIPdbPcXOBROdMDWGlPmUfWlV8Eu9OVDi3RWAwTgGxKSRgxJC6rmKYF4LuIDIbpEOjkAfQKZlWnHz34tyx%2F%2FB6scYDphW5pM4Cge0ZZma4GhJy42XWW1T7uyT9QP%2BZH8lMqFaQYFsfnUnKU%2BSlyRDMeIOFlD%2FHeE6nX%2Fo420FO&X-Amz-Signature=351eb270308d689962998c57f0779a6191f3f1fe9c77230d16f0fa5404cc34fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/b85ba6fd-17f8-420d-bdd1-d36a8a9f9782/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7QQC3X%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDoRFwvTmQnTDeGbmkYi7vbRFELHmKnLmBqPMCjh%2F1wjAiEA8yu2OKVffo5QNTfBzolNYOAtel3%2FVDMCOptaR5w%2FKF8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAY2pxAUnhjXFwM7TyrcA9diPm2DWYsdyrRR%2B9f1azWsAom6MTZX7MilshWtiHtqkCyvoxrhueHs275zOvX%2FdmyrATn8s60U%2B9o6WmyzAbpnLCjukuTeGg4VF4%2BRuYrZXk6PcHcv4%2BAsNSHQdVFFxq8oonLU3YGJk4D%2Bu33C3hDRsQXgAZ4thhkeJt3cdaGqgpzevTFxfgi2p3OnPSHxfK4ZzOzgOhamc3kH2iaVcOETGgCgbR2SWwuuJawM4zZ2rmNmveWQQXN5giYm0IgYj4CfrSUHzHIY5Lz4Wd6UHg%2FddXLRcZHsuCM9cpJ3aUlkx%2BO2RvAjha3WjAcVGNnpVOAA4Cl6wv48N5dXy4tIjOvbgYanS73BJtOooFAsz1gY8aZ6ar8tR23hHuiF%2FNLnDn%2BGrzUHBqI043cmkHOBdumju3nbXSLWLykdDzfIpNrI0CHjKhQUyA9hyqg%2FI2xgy0nCXTXO0ut9i28dfhG5qyypF2UWqS40Tgf8%2FHlRkxaMlH444KSAtEqfI%2BKJlV%2BXCV45wLYq%2BxBOU%2FqZ8AL8NqepsZMdWYl0o2hkH4CfKT1T3PpfZSKvbHo4Qf84xJ0HcSqh3YZ6ZnLbHbTuHRgamPVvBMlyZ%2BXZUeqCjRe6QC59blnc9m38r%2FjAALsRMN6%2FiMQGOqUBVlSFlknI3VVepMKkthmqbkx8zT1VpvT3OOEyScF3bSjzUJ4qYWpIPdbPcXOBROdMDWGlPmUfWlV8Eu9OVDi3RWAwTgGxKSRgxJC6rmKYF4LuIDIbpEOjkAfQKZlWnHz34tyx%2F%2FB6scYDphW5pM4Cge0ZZma4GhJy42XWW1T7uyT9QP%2BZH8lMqFaQYFsfnUnKU%2BSlyRDMeIOFlD%2FHeE6nX%2Fo420FO&X-Amz-Signature=8a28ee95a2096780788a7fa89c16bcbc34ab7a479116bf504dfa8199750af6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>
> Edit - ProjectSettings - Physics - Layer Collision Matrix
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d78eda70-8723-428e-ac74-3048fc8becc1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7QQC3X%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDoRFwvTmQnTDeGbmkYi7vbRFELHmKnLmBqPMCjh%2F1wjAiEA8yu2OKVffo5QNTfBzolNYOAtel3%2FVDMCOptaR5w%2FKF8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAY2pxAUnhjXFwM7TyrcA9diPm2DWYsdyrRR%2B9f1azWsAom6MTZX7MilshWtiHtqkCyvoxrhueHs275zOvX%2FdmyrATn8s60U%2B9o6WmyzAbpnLCjukuTeGg4VF4%2BRuYrZXk6PcHcv4%2BAsNSHQdVFFxq8oonLU3YGJk4D%2Bu33C3hDRsQXgAZ4thhkeJt3cdaGqgpzevTFxfgi2p3OnPSHxfK4ZzOzgOhamc3kH2iaVcOETGgCgbR2SWwuuJawM4zZ2rmNmveWQQXN5giYm0IgYj4CfrSUHzHIY5Lz4Wd6UHg%2FddXLRcZHsuCM9cpJ3aUlkx%2BO2RvAjha3WjAcVGNnpVOAA4Cl6wv48N5dXy4tIjOvbgYanS73BJtOooFAsz1gY8aZ6ar8tR23hHuiF%2FNLnDn%2BGrzUHBqI043cmkHOBdumju3nbXSLWLykdDzfIpNrI0CHjKhQUyA9hyqg%2FI2xgy0nCXTXO0ut9i28dfhG5qyypF2UWqS40Tgf8%2FHlRkxaMlH444KSAtEqfI%2BKJlV%2BXCV45wLYq%2BxBOU%2FqZ8AL8NqepsZMdWYl0o2hkH4CfKT1T3PpfZSKvbHo4Qf84xJ0HcSqh3YZ6ZnLbHbTuHRgamPVvBMlyZ%2BXZUeqCjRe6QC59blnc9m38r%2FjAALsRMN6%2FiMQGOqUBVlSFlknI3VVepMKkthmqbkx8zT1VpvT3OOEyScF3bSjzUJ4qYWpIPdbPcXOBROdMDWGlPmUfWlV8Eu9OVDi3RWAwTgGxKSRgxJC6rmKYF4LuIDIbpEOjkAfQKZlWnHz34tyx%2F%2FB6scYDphW5pM4Cge0ZZma4GhJy42XWW1T7uyT9QP%2BZH8lMqFaQYFsfnUnKU%2BSlyRDMeIOFlD%2FHeE6nX%2Fo420FO&X-Amz-Signature=d87d6de6ebce722c8d9a7998de2a1ae262606888c2286d47b4e865bb94551966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **벽관통 해결 또한 Ray를 활용한다**
> ```javascript
> void StopToWal()
>     {
> 				//DrawRay는 씬 내에서 Ray를 시각적으로 보여주는 함수이다
>         **Debug.DrawRay(transform.position, transform.forward * 5/*Ray의 길이*/,Color.green);
>     }**
>
>     void FixedUpdate() 
>     {
>         FreezeRotation();
>         **StopToWal();**
>     }
> ```
>
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/dbc51270-02e8-41db-be26-ec783d2e156a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666CCA7FY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBOki4KV9Sizpxlw0wxjFEObEgdISpDV9TAvO%2Fu6wf7xAiEAhKavG4LHu8idloDpLalKRGgcpJdzdqXcMYY%2ByhsFdk4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBUcaUtskXmyOlnVdCrcA67mpBK7sTBFZq24URPXrBNsQzA1zOObI%2BNk3ctH4T0Ir5T7TEwxPqPLVmXHCR%2Bez16lITgtL0ENCCPCq6PpQb%2F9sDDhYAVKWlPxcPSUUvwLbdw%2FLST9TKQQ00rgyYlS2mOLmKA7E1wKyC9q84jADiKuqe3GEZttv5r9DF1hIRwJNqn7bt3qHm42muLgDJQnO1gAVEyDlC5fzZLV4VRNL2TKmy9DePCpHiliHNRcx%2FR8Y0W1eOk65UpBDgLtuA5wKQQlJ9aL07KGVANHcVmY5pESCciErRud6Q4D92NfTFOTNfcEOYMuD7HDGSC2bJ2vfmZhrtgHuhaNyT5MPgQ8OoB%2FBsCz7X0uCX1ufS6pkV2BRUSRxnkAhq1vVe7qGJ0s%2F4iFl8Fo69o6rSPHWTwm5dpJvW7kwml2fgWnkr%2B7NXDJz8o%2FGjEZZAn%2B7jmYSZ8qeAINfzbx8D6JGFYMKLKsvXP%2BKqmJnsnFrvwSYFzBbmAiQPqw3eqNpnq97KL6i3fA3N%2BIX83H%2BIAm3we34Fp7%2B3ziUZJ41FcX%2BR6kVFL2iURGmuRa713ErdPa1Tl3RI2NPWO5s%2FwIra67AsKA1cYBTtcezyAAx5SrKsOv3bQZFffGenfKSggiB3fXR1CiMM6%2FiMQGOqUBjC1zYeT56M819gbP5sV0noqnhib4KC%2BXY6x3EXXbhJuG3EMjL9meEVc5Y5ZzZaoPZKEyTiLBAdPFj1EWYiiMxy0ScMCvajACgf0KNSFwEQph292DaPgX3AxWqTy%2F2m%2BVvCZ%2FoPU%2BmGvv92QlVSqaEsOZgzWhTRwGiaMQ%2BYY91wyCJmaeLNjuT0p6%2Bg2NR1NMuy2H8dNKQTL8VLCHE%2Bw6zppPJoRf&X-Amz-Signature=115c144f6c2412d90aef644525d6425a1527365f9eb069876cab0774ab4afcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
> ```c#
> bool isBorder; //벽과 닿았나 안닿았나?
>
>
> ```
>
>

> 🔥 **아… Layer 가 아니라 Tag 설정을 해서 코드가 실행이 안된거구나**
> ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/96dd23e0-86bb-4aeb-834f-8d6c78e4310b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4C5J3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCNLV0AKeOsu5nZPIxgnBP%2BHYz%2FkAoCfcA9MDLLTCRGHQIhAPMj6yQCaxPy2BilFBI4dXCN0OAT6mhvo%2FQX0eOUX1bqKv8DCC0QABoMNjM3NDIzMTgzODA1Igz7uAOo5SEPz3Law38q3ANNe27Vj9OfmJxbRoAHTmkaye9td7hX%2B7dv4Jk7x5rTquQDf3uz3KewDEwiuKoZhhHJK8HARV375DFnvm861G1UIOvvyueoPuhb8wc4rAe1a3D74mHkSVp%2Fd82QqQe7ub9n9QRihj7GvnNY80nxonxefQbq3WgOYRD78yCb1KjZ1qDIicI0f6GFoWbvZtsmsamjieiaddiGyKzZTKmwK%2BBeehsHHcDpjboEqU5W5rRgd9eJqCByJnVFNZlUp9F%2Bsf2UnXe1IUQ6ZxKRpXqH%2FO2M6x6dCvCznbxw29gRhzHZGCxV0mtjgU83QEY3WVjWe4CpfSr9sPjh2zF49H00YVDixW7GSzXeYSOFSNYhGf1UKbcrA3njClxQr5K8z8z5ZAs9bQJW%2BHg6iKaKpu9i5aiqG%2FbOoB9K4uTvemDd3684w7knj8TFZBmdM9O%2FkMx7wuYbsLuun5okZa4jc0KmJOrGq36lumLT%2FDF7a6a0yN5f2ksXOuFaBnmpXx4TLGPynVjI9Mj1FXp8JJ1VVIfTVo0aHEFBOHqeeiBQRmSzySgURhGh772ILb98huVjpVolgvtBvsvHr9tz%2BEn5YvDfwawCxyVUub7gRIXuxSocB3aoC7dyu%2FSedkC9zCefzjDPv4jEBjqkAQ4uHJn0uHdRplhKJy6a1dMKa889VnhYDj5PNj5wp5fQj0CGcG%2BLNMuiCGtmPNFnP3eaL%2BH5AirFxAhxbDsohyJ34XurhALiCRSPuQ8vWDfZYutSlG%2FpfElbzbWTLN%2BBjnPbL4BrThmeml2aPBGzPirWDl9Ch5s8W13u%2FMh82K2zyc25Yp5%2BE4D8i7E7Enx5Ngnl4hphOqbUoqvzB22LmKitgvAV&X-Amz-Signature=fbddf99e0fc7ebad5a35d2438684a923fa281ac3e2bbd631034484a6c07bde38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
>
>

> 🔥 **무기랑 플레이어랑 안부딪히게 - 리지드바디를 땅에 닿았을때 작용하지 않도록 만든다**
> ```c#
> //Item.cs
>
> Rigidbody rigid;
> SphereCollider sphereCollider;
>
> void Awake()
>     {
>         rigid = GetComponent<Rigidbody>();
>         sphereCollider = GetComponent<SphereCollider>();
>     }
>
> void OnCollisionEnter(Collision collision)
>     {
>         if(collision.gameObject.tag == "Floor")
>         {
>             rigid.isKinematic = true; //외부 물리효과에 의해서 움직일 수 없게 변경
>             sphereCollider.enabled = false;
>         }
>     }
> ```
>
> # “근데 아이템에 스피어 콜라이더는 두갠데예?”
>
> > 🔥 **GetCompnent() 쓰면 첫번째 컴포넌트만 가져온다 고로 첫번째에있는(위에있는) 콜라이더 정보를 가져온다 그래서 <u>**물리를 담당하는 콜라이더가 상위에 있어야하고**</u>, 아이템 충돌을 감지하는 콜라이더가 아래있어야한다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d9dce078-64c7-4af8-8176-00bdc726868d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGW2B77%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDHSt5duEL%2FqqIu1d2Ge7w47FtEkauxFc%2BhEPqpvGEHPAiAXlt2TeT9ra2iu5L7Nm9ehgU8x3MtLR7OobW3Cg9yTmir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMeJXgZvwNLHzKUhDkKtwDCfaZVFRKkALyxqj10etZq2%2FdY0Bi0GBGvTd4y5o5rxzHYg5ziE62ZeVuphA6nVfkh4%2FCTdhjfJMcZdSzT17HJYxHK%2Beacy8UzsEkge%2BiikHjYRWxcapIz6XHmRGOxMyow8lxjut6L1sAskYMrFTnTrhE9CnWsAH2Onhg6iwxrBzVV2GWvFgZu%2BdDbFVvswvweEDh%2F08006FMclOipiEC%2B6RwdtUTVkf8bXbaG3Mromk42AiDOABqkJxe1UlXTMTe7Lst73mJ3hrD4YncRbM%2FumZoQhIlsM5Dos5qoqION7YPDuaIMGeqs9n7RoJofYos129zNFQnZ%2B47iszoToNEEoGEB%2FYCqOJRldK99vLkCqMpQyNjZ0uEYhTdh4%2FLxdD1Ie7haxc4%2FTvTxhU36F3WkXi6Dezw9liRF3kaafei54UghIdjzbAlodpTn8jKe7crcSVVwqiMuNBQOpbPA30%2FB3Um1AVzSV0SedmjIOjyJE6nOj%2F3HfSD2AzF2Lk%2BxCkdMnMW%2FOxEPz%2FQKsg16PYwf%2B1aibhoZt22ezP9Zq7B5KJjzDKora%2BsM1LRuJ2PTNIdY7sIl9T7sJkdmaMcz3IRj8wzgBYZbwR6CXFexpXSrAlpDjHD0iMrFPAJaaMwlr%2BIxAY6pgFy3M8%2FP7WPQ%2BXFLl6uVgi%2FoxPifTEs%2FhHbJcIEExyaNYWVQRkK5zpk4YMkEHZvJ56f1mGv6xuSFdyzQCN4imQa%2Bx15IydXE6zWQwvvzv3ZFynVdS4jbMQ0Q%2FjEyKNcLd1wZs%2BlY1b0Q51Z33Q%2FuBQqZtuXWdMBGDVibATsN8K7dyXpEJF8iKIsik31ta%2BSHuXikPOygvMRcVbQnnUS3DYKNX0mXjXk&X-Amz-Signature=232408c3ebd75a74a661ad0515f607fb69fa5bc23a245f2458f6152f6c2414b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> >
>
> # “Is Trigger가 상위에 있는데, 이거 어케내림?”
>
> > 🔥 **우클릭 눌러서 Move Up 시켜주면 Open Prefab 뜨는데 거기서 Move Up 시켜주면 된다**
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/01e5bf86-345c-4539-9a0a-7a868fadd800/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGLI2AS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIC3tu18mV7ukRy1W2%2Fs%2FVinPdOfRALaHu6fqLkTlFDgyAiEA9JpY7nWBAB0wPwkLZeFLuGlORm%2F8gESrx6EF1G%2FcF94q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQE9Z5At0tFazD3DCrcA6DsxYP7mBFVnpAVCERcQA0H4l%2Bg6aEIGs9lTBe840%2FelySSRIfl2Dlzm1wwBWe1ujtfmSBkqG6UEaeGaPcicZCeHFhvBsc3cyvLdb2eVviWPqxULNV4EQ1sR4qWYmde%2Bk9eHW0cCsmLl5bg2Lg0h%2Fs6mXhApxGHEMRmHlatw9DkisjV946%2FugJjL6ia41hFPPpBwlQVOmgNDPp4FXgJN1c01tSC1yhdOcn1SiL9KwASCXQFPiBSDmVgJMTFofepvB0rwcMa%2FeXarKNMF%2FQZMFV7MOEBYkur7HNawKZhVCHgHlgWnXx5SfKnxSlUKeAvfYDZN9gjL4nx2Rje%2BRPRn8V7hVvwXVciW7UqUnyI9%2F2vGiNwa%2F42RyncNGx3I7%2BS%2FMDDizRptxz96zuzlBqhlEjHmnQVtVmNaYC%2BiZ87CSQOBK3XSYzspc9t%2F7c9Ufo8VhWJm4gcj%2B8YPlkE5omj2wICGAvWmhsCEef0%2B5HwqHlvFgetDZoq0dc%2Bc6GaI%2FdwNCf1rCLYAWb08qiPKx4Ha%2F2iKXngXS5avFcWQ%2FkyJ2en0DqmNUEcIUXmCuSlnpeLsUMU2GeaZ%2BjX8FLe4ksyuYQDB0fJEW52u6jl0e0uFDubGNN89mPy%2FLIf39J7MOi%2FiMQGOqUBTMEwt5HE4ywYTQJCag6Fpe78iyjNldzUN8VDNpdk6hY5XsDfwi6vXNZL8I9NqevscJCLFtcbZ0pbXDbqDrX64R1zUG%2BtBWiSmIhLdIff52%2FlI4jZb%2BQf5bdScRSufNB4PmW9NWkAGwV3c2kUlIiDbxly2gV4HMk7VoBaffccZzZXxIGlpwnAtEubf0m9ShFP6tGefjFeGbBokmhz%2BE%2FkIwF3l1bg&X-Amz-Signature=669962da161dec1e608693a7ad8a630ad3178ffd2d38c21df88d927bee5c8d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > ![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/fcf5f26f-5a24-4911-ab5a-0560a9b448fa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGLI2AS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T120252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIC3tu18mV7ukRy1W2%2Fs%2FVinPdOfRALaHu6fqLkTlFDgyAiEA9JpY7nWBAB0wPwkLZeFLuGlORm%2F8gESrx6EF1G%2FcF94q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQE9Z5At0tFazD3DCrcA6DsxYP7mBFVnpAVCERcQA0H4l%2Bg6aEIGs9lTBe840%2FelySSRIfl2Dlzm1wwBWe1ujtfmSBkqG6UEaeGaPcicZCeHFhvBsc3cyvLdb2eVviWPqxULNV4EQ1sR4qWYmde%2Bk9eHW0cCsmLl5bg2Lg0h%2Fs6mXhApxGHEMRmHlatw9DkisjV946%2FugJjL6ia41hFPPpBwlQVOmgNDPp4FXgJN1c01tSC1yhdOcn1SiL9KwASCXQFPiBSDmVgJMTFofepvB0rwcMa%2FeXarKNMF%2FQZMFV7MOEBYkur7HNawKZhVCHgHlgWnXx5SfKnxSlUKeAvfYDZN9gjL4nx2Rje%2BRPRn8V7hVvwXVciW7UqUnyI9%2F2vGiNwa%2F42RyncNGx3I7%2BS%2FMDDizRptxz96zuzlBqhlEjHmnQVtVmNaYC%2BiZ87CSQOBK3XSYzspc9t%2F7c9Ufo8VhWJm4gcj%2B8YPlkE5omj2wICGAvWmhsCEef0%2B5HwqHlvFgetDZoq0dc%2Bc6GaI%2FdwNCf1rCLYAWb08qiPKx4Ha%2F2iKXngXS5avFcWQ%2FkyJ2en0DqmNUEcIUXmCuSlnpeLsUMU2GeaZ%2BjX8FLe4ksyuYQDB0fJEW52u6jl0e0uFDubGNN89mPy%2FLIf39J7MOi%2FiMQGOqUBTMEwt5HE4ywYTQJCag6Fpe78iyjNldzUN8VDNpdk6hY5XsDfwi6vXNZL8I9NqevscJCLFtcbZ0pbXDbqDrX64R1zUG%2BtBWiSmIhLdIff52%2FlI4jZb%2BQf5bdScRSufNB4PmW9NWkAGwV3c2kUlIiDbxly2gV4HMk7VoBaffccZzZXxIGlpwnAtEubf0m9ShFP6tGefjFeGbBokmhz%2BE%2FkIwF3l1bg&X-Amz-Signature=541378766b3f6d3ca68b7cabef87ec37eda4ff5c492fd3d1573dff6c07bea2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
> >
> > 오픈 프리팹 들어가서 다시 Move up
> >
> >
>
>

